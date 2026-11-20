var createClientFn = null;
try {
    if (typeof createClient !== "undefined") createClientFn = createClient;
    else if (window.supabase?.createClient) createClientFn = window.supabase.createClient;
    else if (window.createClient) createClientFn = window.createClient;
} catch(e){}

var SUPABASE_URL = "https://pupdbhmgirsnksujzfnd.supabase.co";
var SUPABASE_ANON_KEY = "sb_publishable_67Y1zZG0Sn0sGkizvuNWjA_66RENHhq";
var GOOGLE_CLIENT_ID = "759811429810-rij3idmhuine241mju5v0buq3dg11jgu.apps.googleusercontent.com";

var supabase = createClientFn ? createClientFn(SUPABASE_URL, SUPABASE_ANON_KEY) : null;
if (typeof window !== "undefined") {
    window.supabaseClient = supabase;
    window.GOOGLE_CLIENT_ID = GOOGLE_CLIENT_ID;
}

/**
 * Send 6-Digit OTP Code directly to user's real Gmail via Supabase Auth
 */
async function sendOtpToEmail(email) {
    if (!email) return { success: false, message: "Please enter a valid email address." };
    const cleanEmail = email.toLowerCase().trim();

    // 1. Try Supabase Client SDK if initialized
    if (supabase && supabase.auth) {
        try {
            const { data, error } = await supabase.auth.signInWithOtp({
                email: cleanEmail,
                options: {
                    shouldCreateUser: true
                }
            });

            if (!error) {
                return {
                    success: true,
                    message: "A 6-digit verification code has been sent to " + cleanEmail + ". Please check your Gmail Inbox or Spam folder!"
                };
            }
            console.warn("Supabase SDK OTP notice:", error);
        } catch (err) {
            console.warn("Supabase SDK OTP Exception:", err);
        }
    }

    // 2. Direct REST API Fallback (Guarantees delivery even if SDK is not ready)
    try {
        const res = await fetch(`${SUPABASE_URL}/auth/v1/otp`, {
            method: 'POST',
            headers: {
                apikey: SUPABASE_ANON_KEY,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                email: cleanEmail,
                create_user: true
            })
        });

        if (res.ok) {
            return {
                success: true,
                message: "A 6-digit verification code has been sent to " + cleanEmail + ". Please check your Gmail Inbox or Spam folder!"
            };
        }

        const errData = await res.json().catch(() => ({}));
        console.warn("Supabase REST OTP response:", res.status, errData);
        if (errData.msg && (errData.msg.includes("rate limit") || res.status === 429)) {
            return {
                success: false,
                message: "Email rate limit reached. Please wait a few moments before requesting a new code."
            };
        }
    } catch (restErr) {
        console.warn("Supabase REST OTP fetch exception:", restErr);
    }

    return {
        success: false,
        message: "Could not send verification email directly. You can use the verification code shown on screen."
    };
}

/**
 * Verify 6-Digit OTP Code entered by user using Supabase Auth
 */
async function verifyOtpCode(email, enteredCode) {
    if (!email || !enteredCode) return { success: false, message: "Please enter your email and 6-digit code." };
    const cleanEmail = email.toLowerCase().trim();
    const token = enteredCode.trim();

    // 1. Try Supabase Client SDK
    if (supabase && supabase.auth) {
        try {
            let { data, error } = await supabase.auth.verifyOtp({
                email: cleanEmail,
                token: token,
                type: "email"
            });

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

            if (!error && data) {
                return {
                    success: true,
                    user: data?.user,
                    session: data?.session
                };
            }
        } catch (err) {
            console.warn("Supabase SDK verifyOtp exception:", err);
        }
    }

    // 2. Direct REST API Fallback
    try {
        let res = await fetch(`${SUPABASE_URL}/auth/v1/verify`, {
            method: 'POST',
            headers: {
                apikey: SUPABASE_ANON_KEY,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                type: "email",
                email: cleanEmail,
                token: token
            })
        });

        if (!res.ok) {
            res = await fetch(`${SUPABASE_URL}/auth/v1/verify`, {
                method: 'POST',
                headers: {
                    apikey: SUPABASE_ANON_KEY,
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    type: "signup",
                    email: cleanEmail,
                    token: token
                })
            });
        }

        if (res.ok) {
            const data = await res.json().catch(() => ({}));
            return {
                success: true,
                user: data?.user,
                session: data?.session
            };
        }
    } catch (restErr) {
        console.warn("Supabase REST verify fetch exception:", restErr);
    }

    return {
        success: false,
        message: "Invalid or expired 6-Digit Verification Code."
    };
}

/**
 * Check if a user still exists in Supabase 'users_db' table.
 * If Admin deletes the user from Supabase, this returns false.
 */
async function isUserActiveInSupabase(email) {
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
async function deleteUserFromSupabase(email) {
    if (!email) return false;
    const cleanEmail = email.toLowerCase().trim();
    try {
        if (supabase) {
            await supabase.from("user_cvs").delete().eq("user_email", cleanEmail);
            const { error } = await supabase.from("users_db").delete().eq("email", cleanEmail);
            if (!error) return true;
        }
    } catch (e) {
        console.warn("deleteUserFromSupabase notice:", e);
    }
    // Direct REST API Fallback
    try {
        await fetch(`${SUPABASE_URL}/rest/v1/user_cvs?user_email=eq.${encodeURIComponent(cleanEmail)}`, {
            method: "DELETE",
            headers: {
                apikey: SUPABASE_ANON_KEY,
                Authorization: `Bearer ${SUPABASE_ANON_KEY}`
            }
        });
        const res = await fetch(`${SUPABASE_URL}/rest/v1/users_db?email=eq.${encodeURIComponent(cleanEmail)}`, {
            method: "DELETE",
            headers: {
                apikey: SUPABASE_ANON_KEY,
                Authorization: `Bearer ${SUPABASE_ANON_KEY}`
            }
        });
        return res.ok;
    } catch(e) {
        return false;
    }
}

/**
 * Check if Email is already registered in Supabase users_db
 */
async function isEmailRegisteredInSupabase(email) {
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
async function resetPasswordInSupabase(email, newPassword) {
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
        if (supabase) {
            await supabase
                .from("users_db")
                .update({ password: newPassword, last_login: new Date().toISOString() })
                .eq("email", cleanEmail);
        } else {
            await fetch(`${SUPABASE_URL}/rest/v1/users_db?email=eq.${encodeURIComponent(cleanEmail)}`, {
                method: "PATCH",
                headers: {
                    apikey: SUPABASE_ANON_KEY,
                    Authorization: `Bearer ${SUPABASE_ANON_KEY}`,
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({ password: newPassword, last_login: new Date().toISOString() })
            });
        }
    } catch(e) {}

    return true;
}

/**
 * Sync registered user or logged-in user to Supabase 'users_db' table
 */
async function syncUserToSupabase(name, email, password, avatar_url) {
    if (!email) return;
    const cleanEmail = email.toLowerCase().trim();
    const payload = {
        email: cleanEmail,
        name: name || "User",
        last_login: new Date().toISOString()
    };
    if (password) payload.password = password;
    if (avatar_url !== undefined && avatar_url !== null) {
        payload.avatar_url = avatar_url;
    } else if (typeof window !== "undefined" && window.localStorage) {
        try {
            const currentStr = window.localStorage.getItem("current_user") || window.localStorage.getItem("cv_user_auth");
            if (currentStr) {
                const cur = JSON.parse(currentStr);
                if (cur && cur.email && cur.email.toLowerCase().trim() === cleanEmail && cur.avatar) {
                    payload.avatar_url = cur.avatar;
                }
            }
            if (!payload.avatar_url) {
                const regList = JSON.parse(window.localStorage.getItem("registered_users") || window.localStorage.getItem("cv_registered_users") || "[]");
                const found = regList.find(u => u.email && u.email.toLowerCase().trim() === cleanEmail);
                if (found && found.avatar) {
                    payload.avatar_url = found.avatar;
                }
            }
        } catch(e) {}
    }

    try {
        if (supabase) {
            const { data, error } = await supabase
                .from("users_db")
                .upsert(payload, { onConflict: "email" });

            if (error) {
                console.warn("Supabase user sync notice:", error.message);
            }
            return { data, error };
        } else {
            await fetch(`${SUPABASE_URL}/rest/v1/users_db`, {
                method: "POST",
                headers: {
                    apikey: SUPABASE_ANON_KEY,
                    Authorization: `Bearer ${SUPABASE_ANON_KEY}`,
                    "Content-Type": "application/json",
                    "Prefer": "resolution=merge-duplicates"
                },
                body: JSON.stringify(payload)
            });
        }
    } catch (err) {
        console.warn("Supabase connection error:", err);
    }
}

/**
 * Fetch a single user by email from Supabase 'users_db' table (with REST fallback)
 */
async function fetchUserByEmail(email) {
    if (!email) return null;
    const cleanEmail = email.toLowerCase().trim();

    // 1. Try Supabase JS client
    try {
        if (supabase) {
            const { data, error } = await supabase
                .from("users_db")
                .select("*")
                .eq("email", cleanEmail)
                .maybeSingle();
            if (!error && data) return data;
        }
    } catch (e) {}

    // 2. Direct REST fallback
    try {
        const res = await fetch(`${SUPABASE_URL}/rest/v1/users_db?email=eq.${encodeURIComponent(cleanEmail)}&select=*`, {
            headers: {
                apikey: SUPABASE_ANON_KEY,
                Authorization: `Bearer ${SUPABASE_ANON_KEY}`
            }
        });
        if (res.ok) {
            const list = await res.json();
            if (Array.isArray(list) && list.length > 0) return list[0];
        }
    } catch (e) {}

    return null;
}

/**
 * Update user profile details (Name, Password, and Avatar URL) in Supabase users_db table
 */
async function updateUserProfileInSupabase(email, updates) {
    if (!email || !updates) return false;
    const cleanEmail = email.toLowerCase().trim();
    
    // Attempt 1: Try updating with Supabase SDK client (including avatar_url)
    try {
        if (supabase) {
            const { error } = await supabase
                .from("users_db")
                .update(updates)
                .eq("email", cleanEmail);
            if (!error) return true;
            console.warn("Supabase SDK update warning:", error);
        }
    } catch (err) {
        console.warn("Update profile notice with avatar_url:", err);
    }

    // Attempt 2: Direct Supabase REST API (preserving all fields including avatar_url)
    try {
        const res = await fetch(`${SUPABASE_URL}/rest/v1/users_db?email=eq.${encodeURIComponent(cleanEmail)}`, {
            method: "PATCH",
            headers: {
                apikey: SUPABASE_ANON_KEY,
                Authorization: `Bearer ${SUPABASE_ANON_KEY}`,
                "Content-Type": "application/json"
            },
            body: JSON.stringify(updates)
        });
        if (res.ok) return true;
        console.warn("Supabase REST update warning status:", res.status);
    } catch (err) {
        console.warn("Fallback profile update error:", err);
    }

    return false;
}

/**
 * Fetch all registered users from Supabase 'users_db' table (For Admin View)
 */
async function fetchAllUsersFromSupabase() {
    try {
        if (supabase) {
            const { data, error } = await supabase
                .from("users_db")
                .select("*")
                .order("created_at", { ascending: false });

            if (!error && Array.isArray(data) && data.length > 0) {
                return data;
            }
        }
    } catch (err) {
        console.warn("Supabase fetch users notice:", err);
    }

    // Direct REST API fallback
    try {
        const res = await fetch(`${SUPABASE_URL}/rest/v1/users_db?select=*&order=created_at.desc`, {
            headers: {
                apikey: SUPABASE_ANON_KEY,
                Authorization: `Bearer ${SUPABASE_ANON_KEY}`
            }
        });
        if (res.ok) {
            const data = await res.json();
            if (Array.isArray(data) && data.length > 0) return data;
        }
    } catch (err) {
        console.warn("REST direct fetch users notice:", err);
    }

    return null;
}

/**
 * Save user CV document to Supabase 'user_cvs' table
 */
async function saveCvToSupabase(userEmail, doc) {
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
async function fetchUserCvsFromSupabase(userEmail) {
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
async function deleteCvFromSupabase(docId) {
    if (!docId) return false;
    try {
        if (supabase) {
            const { error } = await supabase
                .from("user_cvs")
                .delete()
                .eq("id", docId);
            if (!error) return true;
        }
    } catch (err) {
        console.warn("Supabase connection error during CV delete:", err);
    }
    // Direct REST API fallback
    try {
        const res = await fetch(`${SUPABASE_URL}/rest/v1/user_cvs?id=eq.${encodeURIComponent(docId)}`, {
            method: "DELETE",
            headers: {
                apikey: SUPABASE_ANON_KEY,
                Authorization: `Bearer ${SUPABASE_ANON_KEY}`
            }
        });
        return res.ok;
    } catch(e) {
        return false;
    }
}

/**
 * Fetch ALL user CVs from Supabase 'user_cvs' table (For Admin View)
 */
async function fetchAllCvsFromSupabase() {
    try {
        if (supabase) {
            const { data, error } = await supabase
                .from("user_cvs")
                .select("*")
                .order("updated_at", { ascending: false });

            if (!error && Array.isArray(data) && data.length > 0) {
                return data;
            }
        }
    } catch (err) {
        console.warn("Supabase fetch all CVs notice:", err);
    }

    // Direct REST API fallback
    try {
        const res = await fetch(`${SUPABASE_URL}/rest/v1/user_cvs?select=*&order=updated_at.desc`, {
            headers: {
                apikey: SUPABASE_ANON_KEY,
                Authorization: `Bearer ${SUPABASE_ANON_KEY}`
            }
        });
        if (res.ok) {
            const data = await res.json();
            if (Array.isArray(data)) return data;
        }
    } catch (err) {
        console.warn("REST direct fetch CVs notice:", err);
    }

    return [];
}

/**
 * Sign in with Social Provider (Google, Facebook, LinkedIn, Twitter/X)
 */
async function loginWithSocialProvider(provider) {
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
function initSupabaseAuthListener(onUserLoggedIn, onOAuthError) {
    try {
        // Detect OAuth Error in URL (e.g. 'Unable to exchange external code') and clean immediately
        if (typeof window !== "undefined") {
            const currentUrl = window.location.href;
            if (currentUrl.includes("error=") || currentUrl.includes("error_description=")) {
                let errDesc = "Google OAuth Server Error";
                try {
                    const rawHash = (window.location.hash || "").replace(/^#/, "");
                    const rawSearch = (window.location.search || "").replace(/^\?/, "");
                    const hParams = new URLSearchParams(rawHash);
                    const sParams = new URLSearchParams(rawSearch);
                    errDesc = hParams.get("error_description") || sParams.get("error_description") || hParams.get("error") || sParams.get("error") || errDesc;
                } catch(e) {}

                console.warn("Supabase OAuth redirect error in URL:", errDesc);
                history.replaceState(null, "", window.location.pathname);

                if (typeof onOAuthError === "function") {
                    onOAuthError(errDesc);
                }
            }
        }

        if (!supabase || !supabase.auth) return;

        // Check active session immediately on page load (for OAuth redirect recovery)
                // Check active session immediately on page load (for OAuth redirect recovery)
        supabase.auth.getSession().then(({ data }) => {
            if (data && data.session && data.session.user) {
                const u = data.session.user;
                const name = u.user_metadata?.full_name || u.user_metadata?.name || (u.email ? u.email.split("@")[0] : "User");
                const email = u.email;
                const avatar = u.user_metadata?.avatar_url || u.user_metadata?.picture || "";
                const provider = u.app_metadata?.provider || (u.identities && u.identities[0]?.provider) || "oauth";
                if (email && typeof onUserLoggedIn === "function") {
                    onUserLoggedIn({ name, email, avatar, provider });
                }
            }
        }).catch(() => {});

        supabase.auth.onAuthStateChange((event, session) => {
            if (session && session.user) {
                const u = session.user;
                const name = u.user_metadata?.full_name || u.user_metadata?.name || (u.email ? u.email.split("@")[0] : "User");
                const email = u.email;
                const avatar = u.user_metadata?.avatar_url || u.user_metadata?.picture || "";
                const provider = u.app_metadata?.provider || (u.identities && u.identities[0]?.provider) || "oauth";
                if (email && typeof onUserLoggedIn === "function") {
                    onUserLoggedIn({ name, email, avatar, provider });
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
    window.updateUserProfileInSupabase = updateUserProfileInSupabase;
    window.fetchUserByEmail = fetchUserByEmail;
}

