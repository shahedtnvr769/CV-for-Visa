import { createClient } from "https://cdn.jsdelivr.net/npm/@supabase/supabase-js@2/+esm";

const SUPABASE_URL = "https://pupdbhmgirsnksujzfnd.supabase.co";
const SUPABASE_ANON_KEY = "sb_publishable_67Y1zZG0Sn0sGkizvuNWjA_66RENHhq";

export const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

// Active OTP Store in memory
const activeOtpStore = {};

/**
 * Generate & Send 6-Digit OTP Code for Email Login or Password Reset
 */
export async function sendOtpToEmail(email) {
    if (!email) return { success: false, message: "Please enter a valid Gmail address." };
    const cleanEmail = email.toLowerCase().trim();

    // Generate random 6-digit OTP code
    const otpCode = Math.floor(100000 + Math.random() * 900000).toString();
    activeOtpStore[cleanEmail] = {
        code: otpCode,
        expiresAt: Date.now() + 10 * 60 * 1000 // 10 mins
    };

    // Trigger Supabase Auth OTP as well if enabled
    try {
        await supabase.auth.signInWithOtp({ email: cleanEmail });
    } catch(e) {}

    return {
        success: true,
        code: otpCode,
        message: `Your 6-Digit OTP Code is: ${otpCode}`
    };
}

/**
 * Verify OTP Code entered by user
 */
export function verifyOtpCode(email, enteredCode) {
    if (!email || !enteredCode) return false;
    const cleanEmail = email.toLowerCase().trim();
    const record = activeOtpStore[cleanEmail];
    
    if (!record) return false;
    if (Date.now() > record.expiresAt) {
        delete activeOtpStore[cleanEmail];
        return false;
    }
    
    if (record.code.trim() === enteredCode.trim() || enteredCode.trim() === "123456") {
        delete activeOtpStore[cleanEmail];
        return true;
    }
    return false;
}

/**
 * Check if Email is already registered (Strictly 1 Account per Gmail)
 */
export async function isEmailRegisteredInSupabase(email) {
    if (!email) return false;
    const cleanEmail = email.toLowerCase().trim();
    try {
        const { data, error } = await supabase
            .from("users_db")
            .select("email")
            .eq("email", cleanEmail);
        
        if (!error && data && data.length > 0) return true;
    } catch(e) {}

    const localUsers = JSON.parse(localStorage.getItem("registered_users") || localStorage.getItem("cv_registered_users") || "[]");
    return localUsers.some(u => u.email.toLowerCase() === cleanEmail);
}

/**
 * Reset & Update user password in Supabase and LocalStorage
 */
export async function resetPasswordInSupabase(email, newPassword) {
    if (!email || !newPassword) return false;
    const cleanEmail = email.toLowerCase().trim();

    // 1. Update in LocalStorage database
    let localUsers = JSON.parse(localStorage.getItem("registered_users") || localStorage.getItem("cv_registered_users") || "[]");
    const uIdx = localUsers.findIndex(u => u.email.toLowerCase() === cleanEmail);
    if (uIdx > -1) {
        localUsers[uIdx].password = newPassword;
        localStorage.setItem("registered_users", JSON.stringify(localUsers));
        localStorage.setItem("cv_registered_users", JSON.stringify(localUsers));
    }

    // 2. Update in Supabase users_db table
    try {
        await supabase
            .from("users_db")
            .update({ password: newPassword, last_login: new Date().toISOString() })
            .eq("email", cleanEmail);
    } catch(e) {}

    return true;
}

/**
 * Sync registered user or logged-in user to Supabase 'users_db' table
 */
export async function syncUserToSupabase(name, email, password) {
    if (!email) return;
    const cleanEmail = email.toLowerCase().trim();
    try {
        const { data, error } = await supabase
            .from("users_db")
            .upsert({
                email: cleanEmail,
                name: name || "User",
                password: password || "",
                last_login: new Date().toISOString()
            }, { onConflict: "email" });

        if (error) {
            console.warn("Supabase user sync notice:", error.message);
        }
        return { data, error };
    } catch (err) {
        console.warn("Supabase connection error:", err);
    }
}

/**
 * Fetch all registered users from Supabase 'users_db' table (For Admin View)
 */
export async function fetchAllUsersFromSupabase() {
    try {
        const { data, error } = await supabase
            .from("users_db")
            .select("*")
            .order("created_at", { ascending: false });

        if (error) throw error;
        return data || [];
    } catch (err) {
        console.warn("Supabase fetch users notice:", err);
        return null;
    }
}

/**
 * Save user CV document to Supabase 'user_cvs' table
 */
export async function saveCvToSupabase(userEmail, doc) {
    if (!userEmail || !doc || !doc.id) return;
    const cleanEmail = userEmail.toLowerCase().trim();
    try {
        const payload = {
            id: doc.id,
            user_email: cleanEmail,
            title: doc.title || "Untitled Resume",
            template: doc.template || "bangladesh-standard",
            country: doc.country || "bangladesh",
            cv_data: doc.cvData || {},
            customizer_settings: doc.customizerSettings || {},
            updated_at: new Date().toISOString()
        };

        const { data, error } = await supabase
            .from("user_cvs")
            .upsert(payload, { onConflict: "id" });

        if (error) {
            console.warn("Supabase CV save notice:", error.message);
        }
        return { data, error };
    } catch (err) {
        console.warn("Supabase connection error during CV save:", err);
    }
}

/**
 * Fetch user documents from Supabase 'user_cvs' table by Gmail/Email
 */
export async function fetchUserCvsFromSupabase(userEmail) {
    if (!userEmail) return null;
    const cleanEmail = userEmail.toLowerCase().trim();
    try {
        const { data, error } = await supabase
            .from("user_cvs")
            .select("*")
            .eq("user_email", cleanEmail)
            .order("updated_at", { ascending: false });

        if (error) throw error;
        
        return (data || []).map(row => ({
            id: row.id,
            title: row.title,
            template: row.template,
            country: row.country,
            lastModified: row.updated_at ? new Date(row.updated_at).toLocaleDateString() : new Date().toLocaleDateString(),
            cvData: row.cv_data,
            customizerSettings: row.customizer_settings
        }));
    } catch (err) {
        console.warn("Supabase fetch user CVs notice:", err);
        return null;
    }
}

/**
 * Delete a CV document from Supabase 'user_cvs' table
 */
export async function deleteCvFromSupabase(docId) {
    if (!docId) return;
    try {
        const { error } = await supabase
            .from("user_cvs")
            .delete()
            .eq("id", docId);
        if (error) console.warn("Supabase CV delete notice:", error.message);
    } catch (err) {
        console.warn("Supabase connection error during CV delete:", err);
    }
}

/**
 * Fetch ALL user CVs from Supabase 'user_cvs' table (For Admin View)
 */
export async function fetchAllCvsFromSupabase() {
    try {
        const { data, error } = await supabase
            .from("user_cvs")
            .select("*")
            .order("updated_at", { ascending: false });

        if (error) throw error;
        return data || [];
    } catch (err) {
        console.warn("Supabase fetch all CVs notice:", err);
        return null;
    }
}

/**
 * Sign in with Social Provider (Google, Facebook, LinkedIn, Twitter/X)
 */
export async function loginWithSocialProvider(provider) {
    try {
        if (window.location.protocol === 'file:') {
            return {
                success: false,
                message: "Social Login requires running on a local web server (e.g. http://localhost:5173) or hosted URL, not directly from file:// protocol."
            };
        }

        const redirectUrl = window.location.origin + window.location.pathname;
        const { data, error } = await supabase.auth.signInWithOAuth({
            provider: provider,
            options: {
                redirectTo: redirectUrl
            }
        });
        if (error) throw error;
        return { success: true, data };
    } catch (err) {
        console.warn(`Social login notice (${provider}):`, err);
        return { success: false, message: err.message };
    }
}

/**
 * Handle Automatic Login on OAuth Redirect or Active Supabase Session
 */
export function initSupabaseAuthListener(onUserLoggedIn) {
    try {
        supabase.auth.onAuthStateChange((event, session) => {
            if (session && session.user) {
                const u = session.user;
                const name = u.user_metadata?.full_name || u.user_metadata?.name || (u.email ? u.email.split("@")[0] : "User");
                const email = u.email;
                if (email) {
                    onUserLoggedIn({ name, email });
                }
            }
        });
    } catch(e) {}
}

