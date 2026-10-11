let createClientFn = null;
try {
    if (typeof createClient !== "undefined") createClientFn = createClient;
    else if (window.supabase?.createClient) createClientFn = window.supabase.createClient;
    else if (window.createClient) createClientFn = window.createClient;
} catch(e){}

const SUPABASE_URL = "https://pupdbhmgirsnksujzfnd.supabase.co";
const SUPABASE_ANON_KEY = "sb_publishable_67Y1zZG0Sn0sGkizvuNWjA_66RENHhq";

export const supabase = createClientFn ? createClientFn(SUPABASE_URL, SUPABASE_ANON_KEY) : null;

/**
 * Send 6-Digit OTP Code directly to user's real Gmail via Supabase Auth
 */
export async function sendOtpToEmail(email) {
    if (!email) return { success: false, message: "Please enter a valid Gmail address." };
    const cleanEmail = email.toLowerCase().trim();

    if (!supabase) {
        return { success: false, message: "Database connection not available." };
    }

    try {
        const { data, error } = await supabase.auth.signInWithOtp({
            email: cleanEmail,
            options: {
                shouldCreateUser: true
            }
        });

        if (error) {
            console.error("Supabase Auth OTP Error:", error);
            if (error.message && (error.message.includes("confirmation email") || error.message.includes("500"))) {
                return {
                    success: false,
                    isSmtpMissing: true,
                    message: "Supabase SMTP is not configured yet. Please configure custom SMTP in Supabase Dashboard (Settings -> Authentication -> SMTP Settings) to deliver emails to Gmail."
                };
            }
            if (error.status === 429 || error.message.includes("rate limit")) {
                return {
                    success: false,
                    message: "Email rate limit reached. Please wait a few moments before requesting a new code."
                };
            }
            return {
                success: false,
                message: error.message || "Failed to send verification code to your Gmail."
            };
        }

        return {
            success: true,
            message: `A 6-digit verification code has been sent to ${cleanEmail}. Please check your Gmail Inbox or Spam folder!`
        };
    } catch (err) {
        console.error("sendOtpToEmail Exception:", err);
        return { success: false, message: err.message || "Network error while sending OTP code." };
    }
}

/**
 * Verify 6-Digit OTP Code entered by user using Supabase Auth
 */
export async function verifyOtpCode(email, enteredCode) {
    if (!email || !enteredCode) return { success: false, message: "Please enter your Gmail and 6-digit code." };
    const cleanEmail = email.toLowerCase().trim();
    const token = enteredCode.trim();

    if (!supabase) {
        return { success: false, message: "Database connection not available." };
    }

    try {
        // Try verifying as email OTP
        let { data, error } = await supabase.auth.verifyOtp({
            email: cleanEmail,
            token: token,
            type: "email"
        });

        // Fallback retry with signup type if email type failed
        if (error) {
            const retryRes = await supabase.auth.verifyOtp({
                email: cleanEmail,
                token: token,
                type: "signup"
            });
            if (!retryRes.error) {
                data = retryRes.data;
                error = null;
            }
        }

        if (error) {
            console.warn("Supabase OTP verify error:", error.message);
            return {
                success: false,
                message: "❌ Invalid or expired 6-Digit Verification Code! Please check your Gmail."
            };
        }

        return {
            success: true,
            user: data?.user,
            session: data?.session
        };
    } catch (err) {
        console.error("verifyOtpCode Exception:", err);
        return { success: false, message: err.message || "Verification failed." };
    }
}

/**
 * Check if a user still exists in Supabase 'users_db' table.
 * If Admin deletes the user from Supabase, this returns false.
 */
export async function isUserActiveInSupabase(email) {
    if (!email) return false;
    const cleanEmail = email.toLowerCase().trim();
    if (cleanEmail === "shahedtnvr769@gmail.com") return true;

    if (!supabase) return true;

    try {
        const { data, error } = await supabase
            .from("users_db")
            .select("email")
            .eq("email", cleanEmail);

        if (!error && Array.isArray(data)) {
            // If data is empty, the user was deleted by Admin from Supabase!
            return data.length > 0;
        }
    } catch (e) {
        console.warn("isUserActiveInSupabase error:", e);
    }
    return true;
}

/**
 * Delete a user from Supabase 'users_db' table & delete all their CVs from 'user_cvs' table (For Admin)
 */
export async function deleteUserFromSupabase(email) {
    if (!email) return false;
    const cleanEmail = email.toLowerCase().trim();
    if (!supabase) return false;
    try {
        await supabase.from("user_cvs").delete().eq("user_email", cleanEmail);
        const { error } = await supabase.from("users_db").delete().eq("email", cleanEmail);
        return !error;
    } catch (e) {
        console.warn("deleteUserFromSupabase error:", e);
        return false;
    }
}

/**
 * Check if Email is already registered in Supabase users_db
 */
export async function isEmailRegisteredInSupabase(email) {
    if (!email) return false;
    const cleanEmail = email.toLowerCase().trim();
    try {
        if (supabase) {
            const { data, error } = await supabase
                .from("users_db")
                .select("email")
                .eq("email", cleanEmail);
            
            if (!error && data && data.length > 0) return true;
        }
    } catch(e) {}

    const localUsers = JSON.parse(localStorage.getItem("registered_users") || localStorage.getItem("cv_registered_users") || "[]");
    return localUsers.some(u => u.email && u.email.toLowerCase() === cleanEmail);
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
            template: doc.template || doc.settings?.template || "standard",
            country: doc.country || doc.settings?.country || "standard",
            cv_data: doc.cvData || {},
            customizer_settings: doc.settings || doc.customizerSettings || {},
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
        
        return (data || []).map(row => {
            const settings = row.customizer_settings || row.customizerSettings || {
                font: "inter",
                accentColor: "#2563eb",
                fontSize: 14,
                lineSpacing: 1.5,
                template: row.template || "standard",
                country: row.country || "standard"
            };
            return {
                id: row.id,
                title: row.title || "Untitled Resume",
                type: row.type || "Resume",
                meta: row.updated_at ? `Edited ${new Date(row.updated_at).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}` : "Saved",
                template: row.template,
                country: row.country,
                cvData: row.cv_data || {},
                settings: settings
            };
        });
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
        if (!supabase || !supabase.auth) return;

        // Clean URL hash if it contains OAuth error to prevent redirect loops
        if (typeof window !== "undefined" && window.location.hash) {
            if (window.location.hash.includes("error=") || window.location.hash.includes("error_description=")) {
                console.warn("Supabase OAuth redirect notice in URL. Cleaning hash to prevent redirect loop.");
                history.replaceState(null, "", window.location.pathname + window.location.search);
            }
        }

        // Check active session immediately on page load (for OAuth redirect recovery)
        supabase.auth.getSession().then(({ data }) => {
            if (data && data.session && data.session.user) {
                const u = data.session.user;
                const name = u.user_metadata?.full_name || u.user_metadata?.name || (u.email ? u.email.split("@")[0] : "User");
                const email = u.email;
                if (email) {
                    onUserLoggedIn({ name, email });
                }
            }
        }).catch(() => {});

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

if (typeof window !== "undefined") {
    window.supabaseClient = supabase;
    window.sendOtpToEmail = sendOtpToEmail;
    window.verifyOtpCode = verifyOtpCode;
    window.isEmailRegisteredInSupabase = isEmailRegisteredInSupabase;
    window.isUserActiveInSupabase = isUserActiveInSupabase;
    window.deleteUserFromSupabase = deleteUserFromSupabase;
    window.resetPasswordInSupabase = resetPasswordInSupabase;
    window.syncUserToSupabase = syncUserToSupabase;
    window.fetchAllUsersFromSupabase = fetchAllUsersFromSupabase;
    window.saveCvToSupabase = saveCvToSupabase;
    window.fetchUserCvsFromSupabase = fetchUserCvsFromSupabase;
    window.deleteCvFromSupabase = deleteCvFromSupabase;
    window.fetchAllCvsFromSupabase = fetchAllCvsFromSupabase;
    window.loginWithSocialProvider = loginWithSocialProvider;
    window.initSupabaseAuthListener = initSupabaseAuthListener;
}

