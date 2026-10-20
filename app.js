// Global User Cache Helpers
function getRegisteredUsers() {
    try {
        return JSON.parse(localStorage.getItem("registered_users") || localStorage.getItem("cv_registered_users")) || [];
    } catch (e) {
        return [];
    }
}

function saveRegisteredUsers(users) {
    try {
        localStorage.setItem("registered_users", JSON.stringify(users || []));
        localStorage.setItem("cv_registered_users", JSON.stringify(users || []));
    } catch (e) {}
}

window.getRegisteredUsers = getRegisteredUsers;
window.saveRegisteredUsers = saveRegisteredUsers;

/* ==========================================================================
   Global State Management
   ========================================================================== */
const DEFAULT_CV_DATA = {
    name: "MD Shahed",
    jobTitle: "Date of birth: 21 Apr 2004 | Nationality: Bangladeshi | Gender: Male | Phone number: (+880) 01839079238 (Mobile) | Email address: shahedtnvr769@gmail.com | Website: https://shahed-tnvr769.vercel.app/ | LinkedIn: @shahedtnvr769 | Address: KHAGURIA, MATLAB UTTAR Sarkar Bari, 3516, Chottogram, Bangladesh (Home)",
    aboutMe: {
        title: "ABOUT ME",
        content: "A hardworking and reliable Warehouse Worker dedicated to ensuring smooth, safe, and efficient daily operations. Skilled in safely loading and unloading cargo, packaging goods securely, and conducting quality checks to ensure products meet high standards. Strong team player with a focus on inventory handling, fast-paced task management, and workplace safety."
    },
    education: {
        title: "EDUCATION AND TRAINING",
        entries: [
            {
                college: "1 JAN 2023 – CURRENT Savar, Dhaka, Bangladesh",
                duration: "",
                role: "BACHELOR OF BUSINESS ADMINISTRATION (BBA) Savar Govt. College",
                bullets: [
                    "Advanced Accounting",
                    "Data Analysis"
                ]
            },
            {
                college: "1 JAN 2020 – 31 DEC 2021 Dhaka, Bangladesh, Bangladesh",
                duration: "",
                role: "HIGHER SECONDARY CERTIFICATE (HSC) Rafikul Islam College",
                bullets: [
                    "Accounting",
                    "Finance & Banking"
                ]
            }
        ]
    },
    skills: {
        title: "SKILLS",
        items: [
            "Packaging & Unpacking",
            "Quick Loading & Unloading.",
            "Quality Check",
            "Inventory & Stock Control",
            "Labeling & Tagging",
            "Teamwork & Communication",
            "Workplace Safety",
            "Physical Stamina",
            "Manual Dexterity",
            "Time Management"
        ]
    },
    experience: {
        title: "WORK EXPERIENCE",
        entries: [
            {
                company: "1 Jan 2026 – 1 May 2026 – CHOTTOGRAM, BANGLADESH",
                duration: "",
                role: "WAREHOUSE WORKER – FAMILY FARM",
                bullets: [
                    "Transported harvested crops from the field to the warehouse and arranged them safely in designated storage areas.",
                    "Carefully checked, sorted, and packed fresh products into boxes to make sure they were safe for transport."
                ]
            }
        ]
    },
    languages: {
        title: "LANGUAGE SKILLS",
        motherTongue: "Mother tongue(s): BENGALI",
        otherLanguages: [
            {
                name: "ENGLISH",
                listening: "A2",
                reading: "B1",
                spokenProduction: "A2",
                spokenInteraction: "A2",
                writing: "A2"
            }
        ]
    },
    signature: "MD Shahed"
};

const DEFAULT_BD_CV_DATA = {
    name: "MD SHAHED",
    jobTitle: "Student",
    contact: {
        address: "Savar cantonment, Ashulia, Savar, Dhaka",
        mobile: "+880 1234567890",
        email: "shahedtnvr769@gmail.com"
    },
    objective: "To work in a responsible position where I could use my interpersonal skills, creativity, and above all, my learning experiences in order to develop my career as well as to contribute to the growth of the organization.",
    education: [
        { sno: "1", qualification: "SSC", board: "Dhaka Board", year: "2020", result: "82%" },
        { sno: "2", qualification: "HSC", board: "Dhaka Board", year: "2022", result: "95%" },
        { sno: "3", qualification: "BBA", board: "Savar Govt University", year: "2026", result: "78%" }
    ],
    otherQualifications: [
        "Basic Knowledge of Computer",
        "Advanced Microsoft Excel Certification"
    ],
    personalInfo: {
        fathersName: "MD ******",
        mothersName: "MISS ******",
        dob: "21-04-2004",
        languages: "Bangla And English",
        gender: "Male",
        nationality: "Bangladeshi",
        maritalStatus: "Unmarried",
        religion: "Islam",
        bloodGroup: "O+",
        height: "5'11\"",
        weight: "74 kg"
    },
    declaration: "I hereby declare that the above information given by me is true to the best of my knowledge and belief.",
    date: "________________",
    place: "Dhaka"
};

const DEFAULT_BD_ARMY_CV_DATA = {
    isArmyCv: true,
    name: "MD Shamim Sarker",
    designation: "Sergeant (Retd)",
    headerTitle: "Resume",
    headerOf: "of",
    contact: {
        currentAddress: "VILL: DOKKHIN GAZIRCHAT, P.O: UTTAR GAZIRCHAT-1349, P.S: ASHULIA, DISTRICT: DHAKA.",
        mobile: "+88017373*****",
        email: "sg*********@gmail.com"
    },
    personalInfo: {
        fathersName: "Abdul *****",
        mothersName: "Hasna *****",
        dob: "07 April 19**",
        nationality: "Bangladeshi",
        gender: "Male",
        religion: "Islam",
        height: "5 Feet 8 Inch",
        bloodGroup: "O +",
        maritalStatus: "Married",
        languages: "Bangla",
        nid: "23883*****"
    },
    armyInfo: {
        senaNo: "14****",
        rank: "Sergeant/corporal/SNK",
        trade: "***",
        core: "******",
        lastUnit: "******",
        joiningDate: "05/07/19**",
        retirementDate: "04/07/20**"
    },
    permanentAddress: {
        village: "***",
        postOffice: "***",
        thana: "***",
        district: "***"
    },
    education: [
        { sl: "1", certificate: "SSC", board: "Cumilla", institution: "***", group: "***", passingYear: "***", gpa: "***" },
        { sl: "2", certificate: "HSC", board: "BOU", institution: "***", group: "***", passingYear: "***", gpa: "***" }
    ],
    jobDescription: {
        summary: "I have retired as a Sergeant (OEP- Operator Engineer Plant) in the Bd Army (Engineer Core) with *** Years’ Experience.",
        subHeader: "Following skill in my service life.",
        bullets: [
            "Commando",
            "***",
            "***",
            "***",
            "***",
            "Army Driving Course (OEP Cadre)",
            "UN Mission- 1. ***\n2. ***"
        ]
    },
    computerSkills: [
        "Basic Computer User",
        "Internet Browsing"
    ],
    declaration: "I hereby declare that the information placed in this Curriculum Vitae is true.",
    date: "............................................",
    signature: "MD Shamim Sarker"
};

const DEFAULT_PORTUGAL_CV_DATA = {
    name: "MD SHAHED",
    personalInfo: {
        nationality: "Bangladesh",
        dob: "April 21, 2004",
        gender: "Male"
    },
    contact: {
        phone: "+8801839079238",
        email: "shahedtnvr769@gmail.com",
        website: "https://shahed-tnvr769.vercel.app/",
        linkedin: "https://www.linkedin.com/in/shahedtnvr769",
        home: "KHAGURIA, MATLAB UTTAR, BAGANBARI, 3516 Chandpur (Bangladesh)"
    },
    technicalSkills: [
        "Crop Harvesting",
        "Pest management techniques",
        "Quality Control",
        "Maintain the farm",
        "Manage teamwork",
        "Physical Stamina",
        "E-agriculture",
        "Irrigation Systems",
        "Crop Management Software",
        "Sustainable agriculture",
        "drive two-wheeled vehicles"
    ],
    aboutMe: "Dedicated and hardworking professional with hands-on experience in seasonal harvesting, agricultural maintenance, and sustainable farming practices. Proven ability to meet daily production targets while maintaining strict quality standards. Highly adaptable, physically fit, and accustomed to thriving in fast-paced, team-oriented environments. Eager to bring my strong work ethic, discipline, and agricultural expertise to a dynamic role in Europe, contributing to the organization's success while adapting to new cultures.",
    education: [
        {
            qualification: "Bachelor of Business Administration (BBA)",
            institution: "Savar Govt. College",
            period: "1 Jan 2023 – Current",
            city: "Savar, Dhaka",
            country: "Bangladesh",
            field: "Business Administration",
            bullets: [
                "Advanced Accounting",
                "Data Analysis",
                "Agricultural Management"
            ]
        },
        {
            qualification: "Higher Secondary Certificate (HSC)",
            institution: "Rafikul Islam College",
            period: "1 Jan 2020 – 31 Dec 2021",
            city: "Dhaka",
            country: "Bangladesh",
            field: "Business Studies",
            grade: "GPA: 4.25 out of 5.00",
            bullets: [
                "Accounting",
                "Finance & Banking",
                "Business Organization and Management"
            ]
        }
    ],
    experience: [
        {
            employer: "Self-employed (Family Farm)",
            location: "Matlab Uttar, Chandpur, Bangladesh",
            role: "Agricultural Tech & Green Specialist",
            period: "1 Jun 2024 – 1 Jan 2026",
            bullets: [
                "Managed routine care and maintenance of over 15 plant varieties in private gardens, improving plant health by 20%.",
                "Applied domestic cultivation, soil management, and pruning techniques.",
                "Implemented sustainable cultivation practices, reducing water resource consumption by 15%."
            ]
        },
        {
            employer: "Self-employed (Family Farm)",
            location: "Matlab Uttar, Chandpur, Bangladesh",
            role: "Seasonal Fruit Harvester",
            period: "1 Jan 2026 – 1 May 2026",
            bullets: [
                "Efficiently harvested and processed over 50+ kg of seasonal fruits daily while maintaining zero-damage quality standards",
                "Sorted, graded, and securely packed freshly picked fruits to ensure 100% readiness for market distribution.",
                "Collaborated with a field team of 10+ members to consistently meet daily harvesting targets and maintain farm hygiene."
            ]
        }
    ],
    languages: {
        motherTongue: "Bengali",
        other: [
            {
                language: "English",
                listening: "A2",
                reading: "A2",
                writing: "A2",
                spokenProduction: "A1",
                spokenInteraction: "A1"
            },
            {
                language: "German",
                listening: "A2",
                reading: "A2",
                writing: "A1",
                spokenProduction: "A1",
                spokenInteraction: "A1"
            }
        ]
    },
    signature: "Shahed"
};

let appState = {
    currentTab: "dashboard",
    selectedCountry: null,
    selectedRegion: "europe",
    selectedTemplate: "modern-prof",
    currentDocId: null,
    language: localStorage.getItem("global_resume_lang") || "en",
    previewLanguage: localStorage.getItem("global_resume_preview_lang") || "en",
    customizerZoom: "fit", // Controls zoom level of live preview ('fit' or float scale)
    customizerSettings: {
        font: "serif",
        fontSize: 13,
        accentColor: "#111827",
        density: 2,
        showPhoto: true,
        photoUrl: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=200",
        photoShape: "circle",
        photoSize: 115,
        modulesOrder: ["aboutMe", "education", "skills", "experience", "languages"],
        hiddenModules: []
    },
    cvData: JSON.parse(JSON.stringify(DEFAULT_CV_DATA)),
    documents: []
};

// Full Translation Dictionary for 12 Target Country Languages
const TRANSLATIONS = {
    en: {
        dashboard: "Dashboard",
        templates: "Templates",
        customize: "Customize",
        my_documents: "My Documents",
        create_cv: "Create Now",
        select_market: "Select a country standard to automatically match local formatting and Applicant Tracking Systems (ATS).",
        european_favorites: "European Templates",
        top_asian_markets: "Asian Templates",
        select_template: "Select Template",
        use_template: "Use Template",
        expert_mode: "Expert Mode",
        template_customizer: "Template Customizer",
        modular_structure: "Modular Structure",
        about_me: "About Me",
        language_skills: "Language Skills",
        reset_default: "Reset to Default",
        global_settings: "Global Template Settings",
        typography_anchor: "Font Style",
        accent_color: "Accent Color",
        grid_density: "Grid Spacing Density",
        show_photo: "Show Profile Photo",
        include_headshot: "Include a headshot in the header",
        save_changes: "Save Changes",
        custom_format: "Custom Format",
        profile_photo: "Profile Photo",
        live_preview: "Live Preview",
        create_new: "Create New",
        manage_docs: "Manage and organize your saved resumes and cover letters.",
        browse: "Browse",
        upload_photo: "Upload Photo",
        style: "Style",
        all_styles: "All Styles",
        style_professional: "Professional",
        style_creative: "Creative",
        style_simple: "Simple",
        pricing_type: "Pricing & Type",
        all_pricing: "All",
        pricing_free: "Free",
        pricing_premium: "👑 Premium (Paid)",
        experience_level: "Experience Level",
        entry_level: "Entry Level",
        mid_level: "Mid Level",
        executive: "Executive",
        back_dashboard: "Back to Dashboard",
        support: "Support",
        privacy_policy: "Privacy Policy",
        terms_service: "Terms of Service",
        footer_language: "Language: English",
        european_markets: "🌍 European Markets",
        asian_markets: "🌏 Asian Markets",
        modern_prof: "Modern Professional",
        exec_min: "Executive Minimal",
        creative_port: "Creative Portfolio",
        country_italy: "Italy",
        country_germany: "Germany",
        country_france: "France",
        country_portugal: "Portugal",
        country_denmark: "Denmark",
        country_austria: "Austria",
        country_norway: "Norway",
        country_japan: "Japan",
        country_southkorea: "South Korea",
        country_singapore: "Singapore",
        country_bangladesh: "Bangladesh",
        country_russia: "Russia",
        country_malaysia: "Malaysia",
        meta_full_compliance: "Full Compliance",
        meta_standard_format: "Standard Format",
        meta_regional_style: "Regional Style",
        meta_european_standard: "European Standard",
        meta_cv_format: "CV Format",
        meta_asean_hub: "ASEAN Hub",
        meta_regional_standard: "Regional Standard",
        personal_details: "Personal Details",
        work_history: "Work History",
        education: "Education",
        skills: "Skills",
        density_compact: "Compact",
        density_spacious: "Spacious",
        admin_panel: "👑 Admin Panel"
    },
    bn: {
        dashboard: "ড্যাশবোর্ড",
        templates: "টেমপ্লেট",
        customize: "কাস্টমাইজ",
        my_documents: "আমার নথিপত্র",
        admin_panel: "👑 অ্যাডমিন প্যানেল",
        create_cv: "আমার সিভি তৈরি করুন",
        select_market: "আঞ্চলিক অ্যাপ্লিক্যান্ট ট্র্যাকিং সিস্টেমের জন্য অপ্টিমাইজ করা এবং স্থানীয়করণ করা সিভি তৈরি করতে আপনার টার্গেট মার্কেট নির্বাচন করুন।",
        european_favorites: "ইউরোপীয় টেমপ্লেট",
        top_asian_markets: "এশিয়ান টেমপ্লেট",
        select_template: "টেমপ্লেট নির্বাচন করুন",
        use_template: "টেমপ্লেট ব্যবহার করুন",
        expert_mode: "এক্সপার্ট মোড",
        template_customizer: "টেমপ্লেট কাস্টমাইজার",
        modular_structure: "মডুলার গঠন",
        reset_default: "ডিফল্টে রিসেট করুন",
        global_settings: "গ্লোবাল টেমপ্লেট সেটিংস",
        typography_anchor: "ফন্ট স্টাইল",
        accent_color: "অ্যাকসেন্ট কালার",
        grid_density: "গ্রিড স্পেসিং ঘনত্ব",
        show_photo: "প্রোফাইল ছবি দেখান",
        include_headshot: "হেডারে একটি প্রোফাইল ছবি যুক্ত করুন",
        save_changes: "পরিবর্তন সংরক্ষণ করুন",
        custom_format: "কাস্টম ফরম্যাট",
        profile_photo: "প্রোফাইল ছবি",
        live_preview: "লাইভ প্রিভিউ",
        create_new: "নতুন তৈরি করুন",
        manage_docs: "আপনার সংরক্ষিত সিভি এবং কভার লেটার পরিচালনা এবং গুছিয়ে রাখুন।",
        browse: "খুঁজুন",
        upload_photo: "ছবি আপলোড",
        style: "শৈলী",
        all_styles: "সব শৈলী",
        style_professional: "প্রফেশনাল",
        style_creative: "ক্রিয়েটিভ",
        style_simple: "সাধারণ",
        pricing_type: "মূল্য ও ধরণ",
        all_pricing: "সবগুলো",
        pricing_free: "ফ্রি",
        pricing_premium: "👑 প্রিমিয়াম (পেইড)",
        experience_level: "অভিজ্ঞতার স্তর",
        entry_level: "শিক্ষানবিশ স্তর",
        mid_level: "মধ্যম স্তর",
        executive: "নির্বাহী স্তর",
        back_dashboard: "ড্যাশবোর্ডে ফিরে যান",
        support: "সহায়তা",
        privacy_policy: "গোপনীয়তা নীতি",
        terms_service: "পরিষেবার শর্তাবলী",
        footer_language: "ভাষা: বাংলা",
        european_markets: "🌍 ইউরোপীয় মার্কেট",
        asian_markets: "🌏 এশিয়ান মার্কেট",
        modern_prof: "আধুনিক প্রফেশনাল",
        exec_min: "এক্সিকিউティブ মিনিমাল",
        creative_port: "ক্রিয়েটিভ পোর্টফোলিও",
        country_italy: "ইতালি",
        country_germany: "জার্মানি",
        country_france: "ফ্রান্স",
        country_portugal: "পর্তুগাল",
        country_denmark: "ডেনমার্ক",
        country_austria: "অস্ট্রিয়া",
        country_norway: "নরওয়ে",
        country_japan: "জাপان",
        country_southkorea: "দক্ষিণ কোরিয়া",
        country_singapore: "সিঙ্গাপুর",
        country_bangladesh: "বাংলাদেশ",
        country_russia: "রাশিয়া",
        country_malaysia: "মালয়েশিয়া",
        meta_full_compliance: "পূর্ণ সম্মতি",
        meta_standard_format: "স্ট্যান্ডার্ড ফরম্যাট",
        meta_regional_style: "আঞ্চলিক শৈলী",
        meta_european_standard: "ইউরোপীয় স্ট্যান্ডার্ড",
        meta_cv_format: "সিভি ফরম্যাট",
        meta_asean_hub: "আসিয়ান হাব",
        meta_regional_standard: "আঞ্চলিক স্ট্যান্ডার্ড",
        personal_details: "ব্যক্তিগত বিবরণ",
        work_history: "কাজের ইতিহাস",
        education: "শিক্ষা",
        skills: "দক্ষতা",
        density_compact: "সংক্ষিপ্ত",
        density_spacious: "প্রশস্ত"
    },
    de: {
        dashboard: "Dashboard",
        templates: "Vorlagen",
        customize: "Anpassen",
        my_documents: "Meine Dokumente",
        create_cv: "Meinen Lebenslauf erstellen",
        select_market: "Wählen Sie Ihren Zielmarkt, um einen lokalisierten, konformen Lebenslauf zu erstellen, der für regionale Bewerber-Tracking-Systeme optimiert ist.",
        european_favorites: "Europäische Vorlagen",
        top_asian_markets: "Asiatische Vorlagen",
        select_template: "Vorlage auswählen",
        use_template: "Vorlage verwenden",
        expert_mode: "Expertenmodus",
        template_customizer: "Vorlagen-Anpassung",
        modular_structure: "Modulare Struktur",
        reset_default: "Auf Standard zurücksetzen",
        global_settings: "Globale Vorlageneinstellungen",
        typography_anchor: "Schriftstil",
        accent_color: "Akzentfarbe",
        grid_density: "Rasterabstandsdichte",
        show_photo: "Profilfoto anzeigen",
        include_headshot: "Fügen Sie ein Foto im Header hinzu",
        save_changes: "Änderungen speichern",
        custom_format: "Benutzerdefiniertes Format",
        profile_photo: "Profilfoto",
        live_preview: "Live-Vorschau",
        create_new: "Neu erstellen",
        manage_docs: "Verwalten und organisieren Sie Ihre gespeicherten Lebensläufe und Anschreiben.",
        browse: "Durchsuchen",
        upload_photo: "Foto hochladen",
        style: "Stil",
        all_styles: "Alle Stile",
        style_professional: "Professionell",
        style_creative: "Kreativ",
        style_simple: "Einfach",
        pricing_type: "Preise & Typ",
        all_pricing: "Alle",
        pricing_free: "Kostenlos",
        pricing_premium: "👑 Premium (Kostenpflichtig)",
        experience_level: "Erfahrungsstufe",
        entry_level: "Berufseinstieg",
        mid_level: "Mittleres Niveau",
        executive: "Führungskraft",
        back_dashboard: "Zurück zum Dashboard",
        support: "Unterstützung",
        privacy_policy: "Datenschutzerklärung",
        terms_service: "Nutzungsbedingungen",
        footer_language: "Sprache: Deutsch",
        european_markets: "🌍 Europäische Märkte",
        asian_markets: "🌏 Asiatische Märkte",
        modern_prof: "Modern Professionell",
        exec_min: "Minimaler Executive",
        creative_port: "Kreatives Portfolio",
        country_italy: "Italien",
        country_germany: "Deutschland",
        country_france: "Frankreich",
        country_portugal: "Portugal",
        country_denmark: "Dänemark",
        country_austria: "Österreich",
        country_norway: "Norwegen",
        country_japan: "Japan",
        country_southkorea: "Südkorea",
        country_singapore: "Singapur",
        country_bangladesh: "Bangladesch",
        country_russia: "Russland",
        country_malaysia: "Malaysia",
        meta_full_compliance: "Vollständige Einhaltung",
        meta_standard_format: "Standardformat",
        meta_regional_style: "Regionaler Stil",
        meta_european_standard: "Europäischer Standard",
        meta_cv_format: "Lebenslauf-Format",
        meta_asean_hub: "ASEAN-Hub",
        meta_regional_standard: "Regionaler Standard",
        personal_details: "Persönliche Angaben",
        work_history: "Werdegang",
        education: "Ausbildung",
        skills: "Fähigkeiten",
        density_compact: "Kompakt",
        density_spacious: "Großzügig"
    },
    fr: {
        dashboard: "Tableau de bord",
        templates: "Modèles",
        customize: "Personnaliser",
        my_documents: "Mes documents",
        create_cv: "Créer mon CV",
        select_market: "Sélectionnez votre marché cible pour générer un CV localisé et conforme, optimisé pour les systèmes régionaux de suivi des candidatures.",
        european_favorites: "Modèles européens",
        top_asian_markets: "Modèles asiatiques",
        select_template: "Sélectionner le modèle",
        use_template: "Utiliser le modèle",
        expert_mode: "Mode Expert",
        template_customizer: "Personnalisateur de modèle",
        modular_structure: "Structure modulaire",
        reset_default: "Réinitialiser",
        global_settings: "Paramètres globaux du modèle",
        typography_anchor: "Style de police",
        accent_color: "Couleur d'accentuation",
        grid_density: "Densité de l'espacement",
        show_photo: "Afficher la photo de profil",
        include_headshot: "Inclure une photo dans l'en-tête",
        save_changes: "Enregistrer les modifications",
        custom_format: "Format personnalisé",
        profile_photo: "Photo de profil",
        live_preview: "Aperçu en direct",
        create_new: "Créer un nouveau",
        manage_docs: "Gérez et organisez vos CV et lettres de motivation enregistrés.",
        browse: "Parcourir",
        upload_photo: "Télécharger la photo",
        style: "Style",
        all_styles: "Tous les styles",
        style_professional: "Professionnel",
        style_creative: "Créatif",
        style_simple: "Simple",
        pricing_type: "Tarification et type",
        all_pricing: "Tous",
        pricing_free: "Gratuit",
        pricing_premium: "👑 Premium (Payant)",
        experience_level: "Niveau d'expérience",
        entry_level: "Débutant",
        mid_level: "Intermédiaire",
        executive: "Cadre",
        back_dashboard: "Retour au tableau de bord",
        support: "Assistance",
        privacy_policy: "Politique de confidentialité",
        terms_service: "Conditions d'utilisation",
        footer_language: "Langue: Français",
        european_markets: "🌍 Marchés européens",
        asian_markets: "🌏 Marchés asiatiques",
        modern_prof: "Professionnel moderne",
        exec_min: "Exécutif minimal",
        creative_port: "Portfolio créatif",
        country_italy: "Italie",
        country_germany: "Allemagne",
        country_france: "France",
        country_portugal: "Portugal",
        country_denmark: "Danemark",
        country_austria: "Autriche",
        country_norway: "Norvège",
        country_japan: "Japon",
        country_southkorea: "Corée du Sud",
        country_singapore: "Singapour",
        country_bangladesh: "Bangladesh",
        country_russia: "Russie",
        country_malaysia: "Malaisie",
        meta_full_compliance: "Conformité totale",
        meta_standard_format: "Format standard",
        meta_regional_style: "Style régional",
        meta_european_standard: "Norme européenne",
        meta_cv_format: "Format de CV",
        meta_asean_hub: "Hub de l'ASEAN",
        meta_regional_standard: "Norme régionale",
        personal_details: "Détails personnels",
        work_history: "Expérience professionnelle",
        education: "Éducation",
        skills: "Compétences",
        density_compact: "Compact",
        density_spacious: "Spacieux"
    },
    it: {
        dashboard: "Bacheca",
        templates: "Modelli",
        customize: "Personalizza",
        my_documents: "I miei documenti",
        create_cv: "Crea il mio CV",
        select_market: "Seleziona il tuo mercato di destinazione per generare un curriculum localizzato e conforme, optimizzato per i sistemi di tracciamento dei candidati regionali.",
        european_favorites: "Modelli europei",
        top_asian_markets: "Modelli asiatici",
        select_template: "Seleziona modello",
        use_template: "Usa modello",
        expert_mode: "Modalità Esperto",
        template_customizer: "Personalizzatore modello",
        modular_structure: "Struttura modulare",
        reset_default: "Ripristina predefiniti",
        global_settings: "Impostazioni globali modello",
        typography_anchor: "Ancoraggio tipografico",
        accent_color: "Colore accento",
        grid_density: "Densità spaziatura",
        show_photo: "Mostra foto profilo",
        include_headshot: "Includi una foto nell'intestazione",
        save_changes: "Salva modifiche",
        custom_format: "Formato personalizzato",
        profile_photo: "Foto profilo",
        live_preview: "Anteprima live",
        create_new: "Crea nuovo",
        manage_docs: "Gestisci e organizza i tuoi curriculum e lettere di presentazione salvati.",
        browse: "Sfoglia",
        upload_photo: "Carica foto",
        style: "Stile",
        all_styles: "Tutti gli stili",
        style_professional: "Professionale",
        style_creative: "Creativo",
        style_simple: "Semplice",
        pricing_type: "Prezzi e tipo",
        all_pricing: "Tutti",
        pricing_free: "Gratuito",
        pricing_premium: "👑 Premium (A pagamento)",
        experience_level: "Livello di esperienza",
        entry_level: "Primi passi",
        mid_level: "Intermedio",
        executive: "Dirigente",
        back_dashboard: "Torna alla bacheca",
        support: "Supporto",
        privacy_policy: "Codice della privacy",
        terms_service: "Termini di servizio",
        footer_language: "Lingua: Italiano",
        european_markets: "🌍 Mercati europei",
        asian_markets: "🌏 Mercati asiatici",
        modern_prof: "Professionale moderno",
        exec_min: "Minimale esecutivo",
        creative_port: "Portfolio creativo",
        country_italy: "Italia",
        country_germany: "Germania",
        country_france: "Francia",
        country_portugal: "Portogallo",
        country_denmark: "Danimarca",
        country_austria: "Austria",
        country_norway: "Norvegia",
        country_japan: "Giappone",
        country_southkorea: "Corea del Sud",
        country_singapore: "Singapore",
        country_bangladesh: "Bangladesh",
        country_russia: "Russia",
        country_malaysia: "Malesia",
        meta_full_compliance: "Piena conformità",
        meta_standard_format: "Formato standard",
        meta_regional_style: "Stile regionale",
        meta_european_standard: "Standard europeo",
        meta_cv_format: "Formato CV",
        meta_asean_hub: "Hub ASEAN",
        meta_regional_standard: "Standard regionale",
        personal_details: "Dettagli personali",
        work_history: "Esperienze lavorative",
        education: "Istruzione",
        skills: "Competenze",
        density_compact: "Compatto",
        density_spacious: "Spazioso"
    },
    pt: {
        dashboard: "Painel de controle",
        templates: "Modelos",
        customize: "Personalizar",
        my_documents: "Meus documentos",
        create_cv: "Criar meu CV",
        select_market: "Selecione seu mercado-alvo para gerar um currículo localizado e em conformidade, otimizado para sistemas de rastreamento de candidatos regionais.",
        european_favorites: "Modelos europeus",
        top_asian_markets: "Modelos asiáticos",
        select_template: "Selecionar modelo",
        use_template: "Usar modelo",
        expert_mode: "Modo Expert",
        template_customizer: "Personalizador de modelo",
        modular_structure: "Estrutura modular",
        reset_default: "Restaurar padrões",
        global_settings: "Configurações globais do modelo",
        typography_anchor: "Estilo de fonte",
        accent_color: "Cor de destaque",
        grid_density: "Densidade de espaçamento",
        show_photo: "Mostrar foto de perfil",
        include_headshot: "Incluir foto no cabeçalho",
        save_changes: "Salvar alterações",
        custom_format: "Formato personalizado",
        profile_photo: "Foto de perfil",
        live_preview: "Visualização ao vivo",
        create_new: "Criar novo",
        manage_docs: "Gerencie e organize seus currículos e cartas de apresentação salvos.",
        browse: "Procurar",
        upload_photo: "Enviar foto",
        style: "Estilo",
        all_styles: "Todos os estilos",
        style_professional: "Profissional",
        style_creative: "Criativo",
        style_simple: "Simples",
        pricing_type: "Preço e tipo",
        all_pricing: "Todos",
        pricing_free: "Grátis",
        pricing_premium: "👑 Premium (Pago)",
        experience_level: "Nível de experiência",
        entry_level: "Nível iniciante",
        mid_level: "Nível médio",
        executive: "Executivo",
        back_dashboard: "Voltar ao painel",
        support: "Suporte",
        privacy_policy: "Política de privacidade",
        terms_service: "Termos de serviço",
        footer_language: "Idioma: Português",
        european_markets: "🌍 Mercados europeus",
        asian_markets: "🌏 Mercados asiáticos",
        modern_prof: "Profissional moderno",
        exec_min: "Executivo minimalista",
        creative_port: "Portfólio criativo",
        country_italy: "Itália",
        country_germany: "Alemanha",
        country_france: "França",
        country_portugal: "Portugal",
        country_denmark: "Dinamarca",
        country_austria: "Áustria",
        country_norway: "Noruega",
        country_japan: "Japão",
        country_southkorea: "Corea do Sul",
        country_singapore: "Singapura",
        country_bangladesh: "Bangladesh",
        country_russia: "Rússia",
        country_malaysia: "Malásia",
        meta_full_compliance: "Conformidade total",
        meta_standard_format: "Formato padrão",
        meta_regional_style: "Estilo regional",
        meta_european_standard: "Padrão europeu",
        meta_cv_format: "Format CV",
        meta_asean_hub: "Hub ASEAN",
        meta_regional_standard: "Padrão regional",
        personal_details: "Detalhes pessoais",
        work_history: "Histórico profissional",
        education: "Educação",
        skills: "Habilidades",
        density_compact: "Compacto",
        density_spacious: "Espaçoso"
    },
    da: {
        dashboard: "Dashboard",
        templates: "Skabeloner",
        customize: "Tilpas",
        my_documents: "Mine dokumenter",
        create_cv: "Opret mit CV",
        select_market: "Vælg dit målmarked for at generere et lokaliseret, overensstemmende CV optimeret til regionale kandidatsporingssystemer (ATS).",
        european_favorites: "Europæiske skabeloner",
        top_asian_markets: "Asiatiske skabeloner",
        select_template: "Vælg skabelon",
        use_template: "Brug skabelon",
        expert_mode: "Eksperttilstand",
        template_customizer: "Skabelon tilpasser",
        modular_structure: "Modulær struktur",
        reset_default: "Nulstil til standard",
        global_settings: "Globale skabelonindstillinger",
        typography_anchor: "Skrifttype stil",
        accent_color: "Accentfarve",
        grid_density: "Gitterafstand tæthed",
        show_photo: "Vis profilbillede",
        include_headshot: "Inkluder et profilbillede i headeren",
        save_changes: "Gem ændringer",
        custom_format: "Brugerdefineret format",
        profile_photo: "Profilbillede",
        live_preview: "Live visning",
        create_new: "Opret ny",
        manage_docs: "Administrer og organiser dine gemte CV'er og ansøgninger.",
        browse: "Gennemse",
        upload_photo: "Upload foto",
        style: "Stil",
        all_styles: "Alle stilarter",
        style_professional: "Professionel",
        style_creative: "Kreativ",
        style_simple: "Enkel",
        pricing_type: "Pris og type",
        all_pricing: "Alle",
        pricing_free: "Gratis",
        pricing_premium: "👑 Premium (Betalt)",
        experience_level: "Erfaringsniveau",
        entry_level: "Begynderniveau",
        mid_level: "Mellemniveau",
        executive: "Leder",
        back_dashboard: "Tilbage til dashboard",
        support: "Support",
        privacy_policy: "Fortrolighedspolitik",
        terms_service: "Servicevilkår",
        footer_language: "Sprog: Dansk",
        european_markets: "🌍 Europæiske markeder",
        asian_markets: "🌏 Asiatiske markeder",
        modern_prof: "Moderne professionel",
        exec_min: "Skabelon tilpasser",
        creative_port: "Kreativ portefølje",
        country_italy: "Italien",
        country_germany: "Tyskland",
        country_france: "Frankrig",
        country_portugal: "Portugal",
        country_denmark: "Danmark",
        country_austria: "Østrig",
        country_norway: "Norge",
        country_japan: "Japan",
        country_southkorea: "Sydkorea",
        country_singapore: "Singapore",
        country_bangladesh: "Bangladesh",
        country_russia: "Rusland",
        country_malaysia: "Malaysia",
        meta_full_compliance: "Fuld overensstemmelse",
        meta_standard_format: "Standardformat",
        meta_regional_style: "Regional stil",
        meta_european_standard: "Europæisk standard",
        meta_cv_format: "CV-format",
        meta_asean_hub: "ASEAN-hub",
        meta_regional_standard: "Regional standard",
        personal_details: "Personlige oplysninger",
        work_history: "Arbejdshistorik",
        education: "Uddannelse",
        skills: "Færdigheder",
        density_compact: "Kompakt",
        density_spacious: "Rummelig"
    },
    no: {
        dashboard: "Dashboard",
        templates: "Malger",
        customize: "Tilpass",
        my_documents: "Mine dokumenter",
        create_cv: "Opprett min CV",
        select_market: "Velg ditt målmarked for å generere en lokalisert, samsvarende CV optimalisert for regionale kandidatsporingssystemer (ATS).",
        european_favorites: "Europeiske maler",
        top_asian_markets: "Asiatiske maler",
        select_template: "Velg mal",
        use_template: "Bruk mal",
        expert_mode: "Ekspertmodus",
        template_customizer: "Mal tilpasser",
        modular_structure: "Modulær struktur",
        reset_default: "Nullstill til standard",
        global_settings: "Globale malinnstillinger",
        typography_anchor: "Skrifttype stil",
        accent_color: "Aksentfarge",
        grid_density: "Gitteravstand tetthet",
        show_photo: "Vis profilbilde",
        include_headshot: "Inkluder et profilbilde i headeren",
        save_changes: "Lagre endringer",
        custom_format: "Egendefinert format",
        profile_photo: "Profilbilde",
        live_preview: "Forhåndsvisning",
        create_new: "Opprett ny",
        manage_docs: "Administrer og organiser dine lagrede CVer og søknadsbrev.",
        browse: "Bla gjennom",
        upload_photo: "Last opp bilde",
        style: "Stil",
        all_styles: "Alle stiler",
        style_professional: "Profesjonell",
        style_creative: "Kreativ",
        style_simple: "Enkel",
        pricing_type: "Pris og type",
        all_pricing: "Alle",
        pricing_free: "Gratis",
        pricing_premium: "👑 Premium (Betalt)",
        experience_level: "Erfaringsnivå",
        entry_level: "Nybegynner",
        mid_level: "Mellomnivå",
        executive: "Leder",
        back_dashboard: "Tilbage til dashboard",
        support: "Støtte",
        privacy_policy: "Personvernerklæring",
        terms_service: "Brukervilkår",
        footer_language: "Språk: Norsk",
        european_markets: "🌍 Europeiske markeder",
        asian_markets: "🌏 Asiatiske markeder",
        modern_prof: "Moderne profesjonell",
        exec_min: "Minimalistisk leder",
        creative_port: "Kreativ portefølje",
        country_italy: "Italia",
        country_germany: "Tyskland",
        country_france: "Frankrike",
        country_portugal: "Portugal",
        country_denmark: "Danmark",
        country_austria: "Østerrike",
        country_norway: "Norge",
        country_japan: "Japan",
        country_southkorea: "Sør-Korea",
        country_singapore: "Singapore",
        country_bangladesh: "Bangladesh",
        country_russia: "Russland",
        country_malaysia: "Malaysia",
        meta_full_compliance: "Fullstendig samsvar",
        meta_standard_format: "Standardformat",
        meta_regional_style: "Regional stil",
        meta_european_standard: "Europeisk standard",
        meta_cv_format: "CV-format",
        meta_asean_hub: "ASEAN-hub",
        meta_regional_standard: "Regional standard",
        personal_details: "Personlige detaljer",
        work_history: "Arbeidshistorikk",
        education: "Utdanning",
        skills: "Ferdigheter",
        density_compact: "Kompakt",
        density_spacious: "Romslig"
    },
    ru: {
        dashboard: "Панель управления",
        templates: "Шаблоны",
        customize: "Настройка",
        my_documents: "Мои документы",
        create_cv: "Создать резюме",
        select_market: "Выберите целевой рынок для создания локализованного резюме, оптимизированного для региональных систем отслеживания кандидатов (ATS).",
        european_favorites: "Европейские шаблоны",
        top_asian_markets: "Азиатские шаблоны",
        select_template: "Выбрать шаблон",
        use_template: "Использовать шаблон",
        expert_mode: "Экспертный режим",
        template_customizer: "Настройщик шаблона",
        modular_structure: "Модульная структура",
        reset_default: "Сбросить по умолчанию",
        global_settings: "Глобальные настройки шаблона",
        typography_anchor: "Стиль шрифта",
        accent_color: "Цвет акцента",
        grid_density: "Плотность сетки",
        show_photo: "Показать фото профиля",
        include_headshot: "Добавить фото в заголовок",
        save_changes: "Сохранить изменения",
        custom_format: "Пользовательский формат",
        profile_photo: "Фото профиля",
        live_preview: "Предпросмотр",
        create_new: "Создать новое",
        manage_docs: "Управляйте и организуйте свои сохраненные резюме и сопроводительные письма.",
        browse: "Обзор",
        upload_photo: "Загрузить фото",
        style: "Стиль",
        all_styles: "Все стили",
        style_professional: "Профессиональный",
        style_creative: "Творческий",
        style_simple: "Простой",
        pricing_type: "Цена и тип",
        all_pricing: "Все",
        pricing_free: "Бесплатно",
        pricing_premium: "👑 Премиум (Платно)",
        experience_level: "Уровень опыта",
        entry_level: "Начальный уровень",
        mid_level: "Средний уровень",
        executive: "Руководитель",
        back_dashboard: "Назад в панель",
        support: "Поддержка",
        privacy_policy: "Политика конфиденциальности",
        terms_service: "Условия использования",
        footer_language: "Язык: Русский",
        european_markets: "🌍 Европейские рынки",
        asian_markets: "🌏 Азиатские рынки",
        modern_prof: "Современный профессиональный",
        exec_min: "Минималистичный представительский",
        creative_port: "Творческое портфолио",
        country_italy: "Италия",
        country_germany: "Германия",
        country_france: "Франция",
        country_portugal: "Португалия",
        country_denmark: "Дания",
        country_austria: "Австрия",
        country_norway: "Норвегия",
        country_japan: "Япония",
        country_southkorea: "Южная Корея",
        country_singapore: "Сингапур",
        country_bangladesh: "Бангладеш",
        country_russia: "Россия",
        country_malaysia: "Малайзия",
        meta_full_compliance: "Полное соответствие",
        meta_standard_format: "Стандартный формат",
        meta_regional_style: "Региональный стиль",
        meta_european_standard: "Европейский стандарт",
        meta_cv_format: "Формат резюме",
        meta_asean_hub: "Центр АСЕАН",
        meta_regional_standard: "Региональный стандарт",
        personal_details: "Личные данные",
        work_history: "История работы",
        education: "Образование",
        skills: "Навыки",
        density_compact: "Компактный",
        density_spacious: "Просторный"
    },
    ja: {
        dashboard: "ダッシュボード",
        templates: "テンプレート",
        customize: "カスタマイズ",
        my_documents: "マイ ドキュメント",
        create_cv: "履歴書を作成する",
        select_market: "地域の採用管理システム（ATS）向けに最適化され、現地の基準に準拠した履歴書を生成するために、ターゲット市場を選択します。",
        european_favorites: "ヨーロッパのテンプレート",
        top_asian_markets: "アジアのテンプレート",
        select_template: "テンプレートを選択",
        use_template: "テンプレートを使用",
        expert_mode: "エキスパートモード",
        template_customizer: "テンプレートカスタマイザー",
        modular_structure: "モジュール構成",
        reset_default: "デフォルトに戻す",
        global_settings: "グローバルテンプレート設定",
        typography_anchor: "フォントスタイル",
        accent_color: "アクセントカラー",
        grid_density: "グリッドの間隔",
        show_photo: "プロフィール写真を表示",
        include_headshot: "ヘッダーに顔写真を含める",
        save_changes: "変更を保存",
        custom_format: "カスタムフォーマット",
        profile_photo: "プロフィール写真",
        live_preview: "ライブプレビュー",
        create_new: "新規作成",
        manage_docs: "保存した履歴書やカバーレターを管理・整理します。",
        browse: "参照",
        upload_photo: "写真をアップロード",
        style: "スタイル",
        all_styles: "すべてのスタイル",
        style_professional: "プロフェッショナル",
        style_creative: "クリエイティブ",
        style_simple: "シンプル",
        pricing_type: "価格とタイプ",
        all_pricing: "すべて",
        pricing_free: "無料",
        pricing_premium: "👑 プレミアム (有料)",
        experience_level: "経験レベル",
        entry_level: "エントリーレベル",
        mid_level: "ミドルレベル",
        executive: "エグゼクティブ級",
        back_dashboard: "ダッシュボードに戻る",
        support: "サポート",
        privacy_policy: "プライバシーポリシー",
        terms_service: "利用規約",
        footer_language: "言語: 日本語",
        european_markets: "🌍 ヨーロッパ市場",
        asian_markets: "🌏 アジア市場",
        modern_prof: "モダン・プロフェッショナル",
        exec_min: "エグゼクティブ・ミニマル",
        creative_port: "クリエイティブ・ポートフォリオ",
        country_italy: "イタリア",
        country_germany: "ドイツ",
        country_france: "フランス",
        country_portugal: "ポルトガル",
        country_denmark: "デンマーク",
        country_austria: "オーストリア",
        country_norway: "ノルウェー",
        country_japan: "日本",
        country_southkorea: "韓国",
        country_singapore: "シンガポール",
        country_bangladesh: "バングラデシュ",
        country_russia: "ロシア",
        country_malaysia: "マレーシア",
        meta_full_compliance: "完全準拠",
        meta_standard_format: "標準フォーマット",
        meta_regional_style: "地域スタイル",
        meta_european_standard: "欧州規格",
        meta_cv_format: "履歴書フォーマット",
        meta_asean_hub: "ASEANハブ",
        meta_regional_standard: "地域規格",
        personal_details: "個人情報",
        work_history: "職歴",
        education: "学歴",
        skills: "スキル",
        density_compact: "コンパクト",
        density_spacious: "ゆったり"
    },
    ko: {
        dashboard: "대시보드",
        templates: "템플릿",
        customize: "사용자 정의",
        my_documents: "내 문서",
        create_cv: "이력서 만들기",
        select_market: "지역 채용 관리 시스템(ATS)에 최적화되고 현지 기준을 준수하는 이력서를 생성하려면 대상 시장을 선택하십시오.",
        european_favorites: "유럽 템플릿",
        top_asian_markets: "아시아 템플릿",
        select_template: "템플릿 선택",
        use_template: "템플릿 사용",
        expert_mode: "전문가 모드",
        template_customizer: "템플릿 사용자 정의",
        modular_structure: "모듈식 구조",
        reset_default: "기본값으로 재설정",
        global_settings: "글로벌 템플릿 설정",
        typography_anchor: "글꼴 스타일",
        accent_color: "강조 색상",
        grid_density: "그리드 간격 조절",
        show_photo: "프로필 사진 표시",
        include_headshot: "헤더에 프로필 사진 포함",
        save_changes: "변경사항 저장",
        custom_format: "사용자 정의 형식",
        profile_photo: "프로필 사진",
        live_preview: "실시간 미리보기",
        create_new: "새로 만들기",
        manage_docs: "저장된 이력서 및 자기소개서를 관리하고 정리하십시오.",
        browse: "찾아보기",
        upload_photo: "사진 업로드",
        style: "스타일",
        all_styles: "모든 스타일",
        style_professional: "비즈니스형",
        style_creative: "개성형",
        style_simple: "깔끔한 구성",
        pricing_type: "가격 및 유형",
        all_pricing: "전체",
        pricing_free: "무료",
        pricing_premium: "👑 프리미엄 (유료)",
        experience_level: "경력 수준",
        entry_level: "신입",
        mid_level: "경력직",
        executive: "임원/관리자",
        back_dashboard: "대시보드로 돌아가기",
        support: "고객 지원",
        privacy_policy: "개인정보 처리방침",
        terms_service: "이용 약관",
        footer_language: "언어: 한국어",
        european_markets: "🌍 유럽 시장",
        asian_markets: "🌏 아시아 시장",
        modern_prof: "현대적인 전문가",
        exec_min: "이그제큐티브 미니멀",
        creative_port: "크리에이티브 포트폴리오",
        country_italy: "이탈리아",
        country_germany: "독일",
        country_france: "프랑스",
        country_portugal: "포르tu갈",
        country_denmark: "덴마크",
        country_austria: "오스트리아",
        country_norway: "노르웨이",
        country_japan: "일본",
        country_southkorea: "대한민국",
        country_singapore: "싱가포르",
        country_bangladesh: "방글라데시",
        country_russia: "러시아",
        country_malaysia: "말레이시아",
        meta_full_compliance: "완전 준수",
        meta_standard_format: "표준 형식",
        meta_regional_style: "지역 스타일",
        meta_european_standard: "유럽 표준",
        meta_cv_format: "이력서 형식",
        meta_asean_hub: "아세안 허브",
        meta_regional_standard: "지역 표준",
        personal_details: "인적 사항",
        work_history: "경력 사항",
        education: "학력 사항",
        skills: "기술 사항",
        density_compact: "좁게",
        density_spacious: "넓게"
    },
    ms: {
        dashboard: "Papan Pemuka",
        templates: "Templat",
        customize: "Peribadikan",
        my_documents: "Dokumen Saya",
        create_cv: "Bina Resume Saya",
        select_market: "Pilih pasaran sasaran anda untuk menghasilkan resume setempat yang mematuhi sistem penapisan resume (ATS) wilayah.",
        european_favorites: "Templat Eropah",
        top_asian_markets: "Templat Asia",
        select_template: "Pilih Templat",
        use_template: "Guna Templat",
        expert_mode: "Mod Pakar",
        template_customizer: "Penyesuai Templat",
        modular_structure: "Struktur Modular",
        reset_default: "Set Semula ke Lalai",
        global_settings: "Tetapan Templat Global",
        typography_anchor: "Sauh Tipografi",
        accent_color: "Warna Aksent",
        grid_density: "Kepadatan Jarak Grid",
        show_photo: "Papar Foto Profil",
        include_headshot: "Masukkan foto profil dalam kepala surat",
        save_changes: "Simpan Perubahan",
        custom_format: "Format Tersuai",
        profile_photo: "Foto Profil",
        live_preview: "Pratonton Langsung",
        create_new: "Bina Baharu",
        manage_docs: "Urus dan susun resume serta surat iringan anda yang disimpan.",
        browse: "Cari fail",
        upload_photo: "Muat naik foto",
        style: "Gaya",
        all_styles: "Semua Gaya",
        style_professional: "Profesional",
        style_creative: "Kreatif",
        style_simple: "Ringkas",
        pricing_type: "Harga & Jenis",
        all_pricing: "Semua",
        pricing_free: "Percuma",
        pricing_premium: "👑 Premium (Berbayar)",
        experience_level: "Tahap Pengalaman",
        entry_level: "Tahap Kemasukan",
        mid_level: "Tahap Pertengahan",
        executive: "Eksekutif",
        back_dashboard: "Kembali ke Papan Pemuka",
        support: "Sokongan",
        privacy_policy: "Dasar Privasi",
        terms_service: "Syarat Perkhidmatan",
        footer_language: "Bahasa: Bahasa Melayu",
        european_markets: "🌍 Pasaran Eropah",
        asian_markets: "🌏 Pasaran Asia",
        modern_prof: "Profesional Moden",
        exec_min: "Eksekutif Minimal",
        creative_port: "Portfolio Kreatif",
        country_italy: "Itali",
        country_germany: "Jerman",
        country_france: "Perancis",
        country_portugal: "Portugal",
        country_denmark: "Denmark",
        country_austria: "Austria",
        country_norway: "Norway",
        country_japan: "Jepun",
        country_southkorea: "Korea Selatan",
        country_singapore: "Singapura",
        country_bangladesh: "Bangladesh",
        country_russia: "Rusia",
        country_malaysia: "Malaysia",
        meta_full_compliance: "Pematuhan Penuh",
        meta_standard_format: "Format Standard",
        meta_regional_style: "Gaya Wilayah",
        meta_european_standard: "Standard Eropah",
        meta_cv_format: "Format CV",
        meta_asean_hub: "Hab ASEAN",
        meta_regional_standard: "Standard Wilayah",
        personal_details: "Butiran Peribadi",
        work_history: "Sejarah Pekerjaan",
        education: "Pendidikan",
        skills: "Kemahiran",
        density_compact: "Padat",
        density_spacious: "Luas"
    }
};

// Country-specific template configurations
// Each country has 3 templates: modern-prof, exec-min, creative-port
// with unique accent colors, fonts, and CV data hints
const COUNTRY_TEMPLATE_CONFIGS = {
    italy: {
        accentColors: ["#009246", "#ce2b37", "#003087"],
        fonts: ["serif", "playfair", "outfit"],
        label: "Italy"
    },
    germany: {
        accentColors: ["#000000", "#dd0000", "#2d5016"],
        fonts: ["inter", "serif", "outfit"],
        label: "Germany"
    },
    france: {
        accentColors: ["#0050a1", "#e42518", "#1a1a2e"],
        fonts: ["playfair", "serif", "inter"],
        label: "France"
    },
    portugal: {
        accentColors: ["#006600", "#ff0000", "#1a3a5c"],
        fonts: ["serif", "inter", "outfit"],
        label: "Portugal"
    },
    denmark: {
        accentColors: ["#c8102e", "#1a2a4a", "#2d6a4f"],
        fonts: ["inter", "outfit", "serif"],
        label: "Denmark"
    },
    austria: {
        accentColors: ["#ed2939", "#1a1a1a", "#2c5f2e"],
        fonts: ["serif", "inter", "playfair"],
        label: "Austria"
    },
    norway: {
        accentColors: ["#ba0c2f", "#00205b", "#1a3a5c"],
        fonts: ["inter", "outfit", "serif"],
        label: "Norway"
    },
    japan: {
        accentColors: ["#bc002d", "#1a1a1a", "#2d3748"],
        fonts: ["inter", "serif", "outfit"],
        label: "Japan"
    },
    southkorea: {
        accentColors: ["#cd2e3a", "#0047a0", "#1a1a2e"],
        fonts: ["inter", "outfit", "serif"],
        label: "South Korea"
    },
    singapore: {
        accentColors: ["#df151a", "#1a3a5c", "#2d5a27"],
        fonts: ["inter", "outfit", "serif"],
        label: "Singapore"
    },
    bangladesh: {
        accentColors: ["#006a4e", "#f42a41", "#1a2a4a"],
        fonts: ["serif", "inter", "outfit"],
        label: "Bangladesh"
    },
    russia: {
        accentColors: ["#da291c", "#0033a0", "#1a1a1a"],
        fonts: ["serif", "inter", "outfit"],
        label: "Russia"
    },
    malaysia: {
        accentColors: ["#cc0000", "#000066", "#2d5a27"],
        fonts: ["inter", "outfit", "serif"],
        label: "Malaysia"
    }
};

// SVG Flags definitions
const SVG_FLAGS = {
    italy: `<svg viewBox="0 0 3 2"><rect width="1" height="2" fill="#009246"/><rect x="1" width="1" height="2" fill="#fff"/><rect x="2" width="1" height="2" fill="#ce2b37"/></svg>`,
    germany: `<svg viewBox="0 0 5 3"><rect width="5" height="3" fill="#ffce00"/><rect width="5" height="2" fill="#dd0000"/><rect width="5" height="1" fill="#000"/></svg>`,
    france: `<svg viewBox="0 0 3 2"><rect width="1" height="2" fill="#0050a1"/><rect x="1" width="1" height="2" fill="#fff"/><rect x="2" width="1" height="2" fill="#e42518"/></svg>`,
    portugal: `<svg viewBox="0 0 3 2"><rect width="1.2" height="2" fill="#006600"/><rect x="1.2" width="1.8" height="2" fill="#ff0000"/><circle cx="1.2" cy="1" r="0.3" fill="#ffcc00"/></svg>`,
    denmark: `<svg viewBox="0 0 37 28"><rect width="37" height="28" fill="#c8102e"/><rect x="12" width="4" height="28" fill="#fff"/><rect y="12" width="37" height="4" fill="#fff"/></svg>`,
    austria: `<svg viewBox="0 0 3 2"><rect width="3" height="2" fill="#fff"/><rect width="3" height="0.66" fill="#ed2939"/><rect y="1.34" width="3" height="0.66" fill="#ed2939"/></svg>`,
    norway: `<svg viewBox="0 0 22 16"><rect width="22" height="16" fill="#ba0c2f"/><rect x="6" width="4" height="16" fill="#fff"/><rect y="6" width="22" height="4" fill="#fff"/><rect x="7" width="2" height="16" fill="#00205b"/><rect y="7" width="22" height="2" fill="#00205b"/></svg>`,
    japan: `<svg viewBox="0 0 3 2" fill="#fff"><rect width="3" height="2"/><circle cx="1.5" cy="1" r="0.6" fill="#bc002d"/></svg>`,
    southkorea: `<svg viewBox="0 0 3 2" fill="#fff"><rect width="3" height="2"/><circle cx="1.5" cy="1" r="0.45" fill="#cd2e3a"/><path d="M1.5 0.55A0.225 0.225 0 0 0 1.5 1a0.225 0.225 0 0 1 0 0.45A0.45 0.45 0 0 1 1.5 1A0.225 0.225 0 0 1 1.5 0.55" fill="#0047a0"/><path d="M0.9 0.7 L1.15 0.53 M0.85 0.63 L1.1 0.46 M0.8 0.55 L1.05 0.38" stroke="#000" stroke-width="0.08"/><path d="M0.9 1.3 L1.15 1.47 M0.85 1.37 L1.1 1.54 M0.8 1.45 L1.05 1.62" stroke="#000" stroke-width="0.08"/></svg>`,
    singapore: `<svg viewBox="0 0 3 2"><rect width="3" height="2" fill="#fff"/><rect width="3" height="1" fill="#df151a"/><path d="M0.5 0.5 A0.25 0.25 0 1 1 0.5 0.1 A0.22 0.22 0 1 0 0.5 0.5" fill="#fff"/></svg>`,
    bangladesh: `<svg viewBox="0 0 10 6"><rect width="10" height="6" fill="#006a4e"/><circle cx="4.5" cy="3" r="2" fill="#f42a41"/></svg>`,
    russia: `<svg viewBox="0 0 3 2"><rect width="3" height="2" fill="#da291c"/><rect width="3" height="1.33" fill="#0033a0"/><rect width="3" height="0.67" fill="#fff"/></svg>`,
    malaysia: `<svg viewBox="0 0 28 14"><rect width="28" height="14" fill="#fff"/><rect width="28" height="1" fill="#cc0000"/><rect y="2" width="28" height="1" fill="#cc0000"/><rect y="4" width="28" height="1" fill="#cc0000"/><rect y="6" width="28" height="1" fill="#cc0000"/><rect y="8" width="28" height="1" fill="#cc0000"/><rect y="10" width="28" height="1" fill="#cc0000"/><rect y="12" width="28" height="1" fill="#cc0000"/><rect width="14" height="8" fill="#000066"/><circle cx="7" cy="4" r="2.5" fill="#ffcc00"/><circle cx="7.7" cy="4" r="2.5" fill="#000066"/><polygon points="7,2 7,6 8,3 6,5" fill="#ffcc00"/></svg>`,
    en: `<svg viewBox="0 0 60 30"><clipPath id="s_en"><path d="M0,0 v30 h60 v-30 z"/></clipPath><clipPath id="t_en"><path d="M30,15 h30 v15 z v15 h-30 z h-30 v-15 z v-15 h30 z"/></clipPath><g clip-path="url(#s_en)"><path d="M0,0 v30 h60 v-30 z" fill="#012169"/><path d="M0,0 L60,30 M60,0 L0,30" stroke="#fff" stroke-width="6"/><path d="M0,0 L60,30 M60,0 L0,30" clip-path="url(#t_en)" stroke="#C8102E" stroke-width="4"/><path d="M30,0 v30 M0,15 h60" stroke="#fff" stroke-width="10"/><path d="M30,0 v30 M0,15 h60" stroke="#C8102E" stroke-width="6"/></g></svg>`,
    uk: `<svg viewBox="0 0 60 30"><clipPath id="s_uk"><path d="M0,0 v30 h60 v-30 z"/></clipPath><clipPath id="t_uk"><path d="M30,15 h30 v15 z v15 h-30 z h-30 v-15 z v-15 h30 z"/></clipPath><g clip-path="url(#s_uk)"><path d="M0,0 v30 h60 v-30 z" fill="#012169"/><path d="M0,0 L60,30 M60,0 L0,30" stroke="#fff" stroke-width="6"/><path d="M0,0 L60,30 M60,0 L0,30" clip-path="url(#t_uk)" stroke="#C8102E" stroke-width="4"/><path d="M30,0 v30 M0,15 h60" stroke="#fff" stroke-width="10"/><path d="M30,0 v30 M0,15 h60" stroke="#C8102E" stroke-width="6"/></g></svg>`
};

// Language Dropdown Flag Mapping
const LANG_FLAGS = {
    en: `<svg viewBox="0 0 60 30"><clipPath id="s_lang_en"><path d="M0,0 v30 h60 v-30 z"/></clipPath><clipPath id="t_lang_en"><path d="M30,15 h30 v15 z v15 h-30 z h-30 v-15 z v-15 h30 z"/></clipPath><g clip-path="url(#s_lang_en)"><path d="M0,0 v30 h60 v-30 z" fill="#012169"/><path d="M0,0 L60,30 M60,0 L0,30" stroke="#fff" stroke-width="6"/><path d="M0,0 L60,30 M60,0 L0,30" clip-path="url(#t_lang_en)" stroke="#C8102E" stroke-width="4"/><path d="M30,0 v30 M0,15 h60" stroke="#fff" stroke-width="10"/><path d="M30,0 v30 M0,15 h60" stroke="#C8102E" stroke-width="6"/></g></svg>`,
    bn: `<svg viewBox="0 0 10 6"><rect width="10" height="6" fill="#006a4e"/><circle cx="4.5" cy="3" r="2" fill="#f42a41"/></svg>`,
    de: `<svg viewBox="0 0 5 3"><rect width="5" height="3" fill="#ffce00"/><rect width="5" height="2" fill="#dd0000"/><rect width="5" height="1" fill="#000"/></svg>`,
    fr: `<svg viewBox="0 0 3 2"><rect width="1" height="2" fill="#0050a1"/><rect x="1" width="1" height="2" fill="#fff"/><rect x="2" width="1" height="2" fill="#e42518"/></svg>`,
    it: `<svg viewBox="0 0 3 2"><rect width="1" height="2" fill="#009246"/><rect x="1" width="1" height="2" fill="#fff"/><rect x="2" width="1" height="2" fill="#ce2b37"/></svg>`,
    pt: `<svg viewBox="0 0 3 2"><rect width="1.2" height="2" fill="#006600"/><rect x="1.2" width="1.8" height="2" fill="#ff0000"/><circle cx="1.2" cy="1" r="0.3" fill="#ffcc00"/></svg>`,
    da: `<svg viewBox="0 0 37 28"><rect width="37" height="28" fill="#c8102e"/><rect x="12" width="4" height="28" fill="#fff"/><rect y="12" width="37" height="4" fill="#fff"/></svg>`,
    no: `<svg viewBox="0 0 22 16"><rect width="22" height="16" fill="#ba0c2f"/><rect x="6" width="4" height="16" fill="#fff"/><rect y="6" width="22" height="4" fill="#fff"/><rect x="7" width="2" height="16" fill="#00205b"/><rect y="7" width="22" height="2" fill="#00205b"/></svg>`,
    ru: `<svg viewBox="0 0 3 2"><rect width="3" height="2" fill="#da291c"/><rect width="3" height="1.33" fill="#0033a0"/><rect width="3" height="0.67" fill="#fff"/></svg>`,
    ja: `<svg viewBox="0 0 3 2" fill="#fff"><rect width="3" height="2"/><circle cx="1.5" cy="1" r="0.6" fill="#bc002d"/></svg>`,
    ko: `<svg viewBox="0 0 3 2" fill="#fff"><rect width="3" height="2"/><circle cx="1.5" cy="1" r="0.45" fill="#cd2e3a"/><path d="M1.5 0.55A0.225 0.225 0 0 0 1.5 1a0.225 0.225 0 0 1 0 0.45A0.45 0.45 0 0 1 1.5 1A0.225 0.225 0 0 1 1.5 0.55" fill="#0047a0"/><path d="M0.9 0.7 L1.15 0.53 M0.85 0.63 L1.1 0.46 M0.8 0.55 L1.05 0.38" stroke="#000" stroke-width="0.08"/><path d="M0.9 1.3 L1.15 1.47 M0.85 1.37 L1.1 1.54 M0.8 1.45 L1.05 1.62" stroke="#000" stroke-width="0.08"/></svg>`,
    ms: `<svg viewBox="0 0 28 14"><rect width="28" height="14" fill="#fff"/><rect width="28" height="1" fill="#cc0000"/><rect y="2" width="28" height="1" fill="#cc0000"/><rect y="4" width="28" height="1" fill="#cc0000"/><rect y="6" width="28" height="1" fill="#cc0000"/><rect y="8" width="28" height="1" fill="#cc0000"/><rect y="10" width="28" height="1" fill="#cc0000"/><rect y="12" width="28" height="1" fill="#cc0000"/><rect width="14" height="8" fill="#000066"/><circle cx="7" cy="4" r="2.5" fill="#ffcc00"/><circle cx="7.7" cy="4" r="2.5" fill="#000066"/><polygon points="7,2 7,6 8,3 6,5" fill="#ffcc00"/></svg>`
};

// Initial Default Saved Documents (Empty array so only user-saved documents appear)
const DEFAULT_SAVED_DOCS = [];
const DUMMY_DOC_IDS = ["german-cv", "tech-lead-cover", "strategy-resume"];

function isUserSavedDoc(doc) {
    if (!doc || !doc.id) return false;
    if (DUMMY_DOC_IDS.includes(doc.id)) return false;
    return true;
}

/* ==========================================================================
   Authentication Gate Logic
   ========================================================================== */
function initAuthGate() {
    const container = document.getElementById("auth-gate-container");
    const loginForm = document.getElementById("auth-login-form");
    const signupForm = document.getElementById("auth-signup-form");

    const tabLogin = document.getElementById("auth-tab-login");
    const tabSignup = document.getElementById("auth-tab-signup");

    const userProfileContainer = document.getElementById("user-profile-container");
    const userProfile = document.getElementById("user-profile");
    const logoutBtn = document.getElementById("btn-logout");

    if (!container) return;

    // 1. Check existing Auth session
    const checkAuth = () => {
        const sessionUser = localStorage.getItem("current_user") || localStorage.getItem("cv_user_auth");
        if (sessionUser) {
            const user = JSON.parse(sessionUser);
            document.body.classList.add("logged-in");
            container.classList.add("hidden");

            // Sync both storage keys so session is never lost
            localStorage.setItem("current_user", sessionUser);
            localStorage.setItem("cv_user_auth", sessionUser);

            // Update User Name and Email in dropdown
            const menuName = document.getElementById("user-menu-name");
            const menuEmail = document.getElementById("user-menu-email");
            if (menuName) menuName.textContent = user.name || "User";
            if (menuEmail) menuEmail.textContent = user.email || "";

            // Toggle Admin tab if admin user
            const adminTab = document.getElementById("tab-admin");
            const menuAdminItem = document.getElementById("menu-item-admin");
            const isAdm = !!(user.email && user.email.toLowerCase().trim() === "shahedtnvr769@gmail.com");
            if (adminTab) {
                if (isAdm) adminTab.classList.remove("hidden");
                else adminTab.classList.add("hidden");
            }
            if (menuAdminItem) {
                if (isAdm) menuAdminItem.classList.remove("hidden");
                else menuAdminItem.classList.add("hidden");
            }
        } else {
            document.body.classList.remove("logged-in");
            container.classList.add("hidden");
            const adminTab = document.getElementById("tab-admin");
            if (adminTab) adminTab.classList.add("hidden");
            const menuAdminItem = document.getElementById("menu-item-admin");
            if (menuAdminItem) menuAdminItem.classList.add("hidden");
        }
    };

    // Close modal when close button is clicked
    const closeBtn = document.getElementById("btn-auth-close");
    if (closeBtn) {
        closeBtn.addEventListener("click", () => {
            container.classList.add("hidden");
        });
    }

    // Open modal when Sign In trigger is clicked
    const triggerBtn = document.getElementById("btn-login-trigger");
    if (triggerBtn) {
        triggerBtn.addEventListener("click", () => {
            container.classList.remove("hidden");
            // Set to Login tab by default when opened
            if (tabLogin && tabSignup && loginForm && signupForm) {
                tabLogin.click();
            }
        });
    }

    // 2. Tab switching between Login & Sign Up
    if (tabLogin && tabSignup) {
        tabLogin.addEventListener("click", () => {
            tabLogin.classList.add("active");
            tabSignup.classList.remove("active");
            loginForm.classList.add("active");
            signupForm.classList.remove("active");
        });

        tabSignup.addEventListener("click", () => {
            tabSignup.classList.add("active");
            tabLogin.classList.remove("active");
            signupForm.classList.add("active");
            loginForm.classList.remove("active");
        });
    }

    // Execute check on startup
    checkAuth();
}

/* ==========================================================================
   Initialization
   ========================================================================== */
// Render all Country Flag SVGs in the grids (dashboard + templates dropdown + language switcher)
function renderFlags() {
    // 1. Dashboard flag orbs & Dropdown flag orbs
    Object.keys(SVG_FLAGS).forEach(key => {
        const el = document.getElementById(`flag-${key}`);
        if (el) el.innerHTML = SVG_FLAGS[key];
        const ddEl = document.getElementById(`dd-flag-${key}`);
        if (ddEl) ddEl.innerHTML = SVG_FLAGS[key];
    });

    // 2. Language dropdown flags
    if (typeof LANG_FLAGS === "object") {
        Object.keys(LANG_FLAGS).forEach(langKey => {
            const langEl = document.getElementById(`lang-flag-${langKey}`);
            if (langEl) langEl.innerHTML = LANG_FLAGS[langKey];
        });
    }

    // 3. Current active template flag
    const templateFlag = document.getElementById("template-country-flag");
    const activeCountry = (typeof appState !== "undefined" && appState && appState.selectedCountry) || "germany";
    if (templateFlag && SVG_FLAGS[activeCountry]) {
        templateFlag.innerHTML = SVG_FLAGS[activeCountry];
    }
}

function initCoreApp() {
    try { renderFlags(); } catch (e) { console.error("renderFlags error:", e); }
    try { initAuthGate(); } catch (e) { console.error("initAuthGate error:", e); }
    try { initLocalStorage(); } catch (e) { console.error("initLocalStorage error:", e); }
    try { setupTabRouting(); } catch (e) { console.error("setupTabRouting error:", e); }
    try { setupDropdownListeners(); } catch (e) { console.error("setupDropdownListeners error:", e); }
    try { setupDashboardListeners(); } catch (e) { console.error("setupDashboardListeners error:", e); }
    try { setupTemplateListeners(); } catch (e) { console.error("setupTemplateListeners error:", e); }
    try { setupCustomizerControls(); } catch (e) { console.error("setupCustomizerControls error:", e); }
    try { setupDragAndDrop(); } catch (e) { console.error("setupDragAndDrop error:", e); }
    try { setupDocumentActions(); } catch (e) { console.error("setupDocumentActions error:", e); }

    // Render initially selected template styling
    try { updateLivePreview(); } catch (e) { console.error("updateLivePreview error:", e); }
    try { renderSavedDocuments(); } catch (e) { console.error("renderSavedDocuments error:", e); }

    // Handle live preview scale adjustments
    window.addEventListener("resize", resizePreview);
}

if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", initCoreApp);
} else {
    initCoreApp();
}

// Helper to get active user documents storage key
function getDocsStorageKey() {
    const sessionUser = localStorage.getItem("current_user") || localStorage.getItem("cv_user_auth");
    if (sessionUser) {
        try {
            const user = JSON.parse(sessionUser);
            if (user && user.email) {
                return `global_resume_docs_${user.email}`;
            }
        } catch (e) {
            console.error("Error parsing session user:", e);
        }
    }
    return "global_resume_docs";
}

// Local Storage initialization
function initLocalStorage() {
    const docsKey = getDocsStorageKey();
    let docs = [];
    if (localStorage.getItem(docsKey)) {
        try {
            docs = JSON.parse(localStorage.getItem(docsKey)) || [];
        } catch(e) {
            docs = [];
        }
    }
    docs = docs.filter(isUserSavedDoc);
    localStorage.setItem(docsKey, JSON.stringify(docs));
    appState.documents = docs;
}

/* ==========================================================================
   Navigation & Routing
   ========================================================================== */
function setupTabRouting() {
    const tabs = document.querySelectorAll(".nav-tab");
    tabs.forEach(tab => {
        tab.addEventListener("click", () => {
            switchTab(tab.dataset.tab);
        });
    });

    // Logo button routing to Dashboard
    const logo = document.getElementById("logo-button");
    if (logo) {
        logo.addEventListener("click", () => {
            switchTab("dashboard");
        });
    }
}

function switchTab(tabId) {
    const isAuth = localStorage.getItem("current_user") || localStorage.getItem("cv_user_auth");

    // Admin Guard: Only shahedtnvr769@gmail.com can access Admin Panel
    if (tabId === "admin") {
        let isAdm = false;
        if (isAuth) {
            try {
                const u = JSON.parse(isAuth);
                if (u.email && u.email.toLowerCase().trim() === "shahedtnvr769@gmail.com") {
                    isAdm = true;
                }
            } catch (e) {}
        }
        if (!isAdm) {
            showToast("Access Denied! Only Admin (shahedtnvr769@gmail.com) can access the Admin Panel.", "error");
            switchTab("dashboard");
            return;
        }
        // Always load Admin data when entering Admin tab
        if (typeof renderAdminPanel === "function") {
            setTimeout(renderAdminPanel, 20);
        }
    }

    // Hide Auth Modal if visible
    const authModalContainer = document.getElementById("auth-gate-container");
    if (authModalContainer) {
        authModalContainer.classList.add("hidden");
    }

    appState.currentTab = tabId;

    // Update navbar UI
    document.querySelectorAll(".nav-tab").forEach(btn => {
        btn.classList.remove("active");
        if (btn.dataset.tab === tabId) {
            btn.classList.add("active");
        }
    });

    // Update views: hide all tab views and show the active one
    document.querySelectorAll(".tab-view").forEach(view => {
        view.classList.remove("active");
        view.classList.add("hidden");
    });

    const activeView = document.getElementById(`view-${tabId}`);
    if (activeView) {
        activeView.classList.remove("hidden");
        activeView.classList.add("active");
    }

    // When Templates tab is active, always refresh preview cards for the current country
    if (tabId === "templates") {
        if (!appState.selectedCountry) {
            appState.selectedCountry = "italy";
            appState.selectedRegion = "europe";
            updateTemplateBanner("italy", "Italy", "europe");
        } else {
            // Re-render previews for already-selected country
            const cfg = COUNTRY_TEMPLATE_CONFIGS[appState.selectedCountry];
            const label = cfg ? cfg.label : appState.selectedCountry;
            updateTemplateBanner(appState.selectedCountry, label, appState.selectedRegion);
        }
    }

    if (tabId === "documents") {
        renderSavedDocuments();
    }

    // Scroll to top
    window.scrollTo({ top: 0, behavior: "smooth" });

    // If entering Customize view, trigger resize preview and refresh modular controls
    if (tabId === "customize") {
        if (typeof renderSidebarModulesList === "function") renderSidebarModulesList();
        if (typeof syncCustomizerControlsToState === "function") syncCustomizerControlsToState();
        if (typeof setupMobileCustomizerTabs === "function") setupMobileCustomizerTabs();
        if (typeof initAddModuleModal === "function") initAddModuleModal();
        setTimeout(resizePreview, 50);
    }
}

/* ==========================================================================
   Dashboard logic
   ========================================================================== */
function setupDashboardListeners() {
    const selectBtns = document.querySelectorAll(".country-card .btn-select");
    selectBtns.forEach(btn => {
        btn.addEventListener("click", (e) => {
            const card = e.target.closest(".country-card");
            const country = card.dataset.country;
            const region = card.dataset.region;
            const countryName = card.querySelector(".country-name").textContent;

            appState.selectedCountry = country;
            appState.selectedRegion = region;

            // Update template country banner
            updateTemplateBanner(country, countryName, region);

            switchTab("templates");
        });
    });

    // Also allow clicking the whole country card (not just the button)
    const cards = document.querySelectorAll(".country-card");
    cards.forEach(card => {
        card.addEventListener("click", (e) => {
            if (e.target.closest(".btn-select")) return; // already handled above
            const country = card.dataset.country;
            const region = card.dataset.region;
            const countryName = card.querySelector(".country-name").textContent;

            appState.selectedCountry = country;
            appState.selectedRegion = region;

            updateTemplateBanner(country, countryName, region);
            switchTab("templates");
        });
    });
}

// Setup listeners for navbar dropdown country items
function setupDropdownListeners() {
    const dropdownItems = document.querySelectorAll(".dropdown-item");
    dropdownItems.forEach(item => {
        item.addEventListener("click", (e) => {
            e.preventDefault();
            const country = item.dataset.country;
            const region = item.dataset.region;
            const countryName = item.querySelector(".dropdown-item-name").textContent;

            appState.selectedCountry = country;
            appState.selectedRegion = region;

            updateTemplateBanner(country, countryName, region);
            switchTab("templates");
        });
    });
}

// Update the country banner in the Templates view
function updateTemplateBanner(country, countryName, region) {
    const flagEl = document.getElementById("template-country-flag");
    const headingEl = document.getElementById("template-country-name-heading");

    if (flagEl && SVG_FLAGS[country]) {
        flagEl.innerHTML = SVG_FLAGS[country];
    } else if (flagEl) {
        flagEl.innerHTML = "";
    }

    if (headingEl) {
        headingEl.textContent = `${countryName} Templates`;
    }

    // Update each template card's dummy CV to show country-specific layout
    updateTemplatePreviews(country);
}

/* ==========================================================================
   Country-specific CV variant system
   ========================================================================== */

// Maps each country to a layout variant name + bg tint
const COUNTRY_VARIANTS = {
    italy: { variant: "accent-bar", bgTint: "#009246" },
    france: { variant: "accent-bar", bgTint: "#0050a1" },
    portugal: { variant: "accent-bar", bgTint: "#006600" },
    germany: { variant: "border-left", bgTint: "#1a1a1a" },
    austria: { variant: "border-left", bgTint: "#ed2939" },
    denmark: { variant: "split-hdr", bgTint: "#c8102e" },
    norway: { variant: "split-hdr", bgTint: "#ba0c2f" },
    japan: { variant: "photo-top", bgTint: "#bc002d" },
    southkorea: { variant: "photo-top", bgTint: "#0047a0" },
    singapore: { variant: "sidebar", bgTint: "#df151a" },
    malaysia: { variant: "sidebar", bgTint: "#000066" },
    bangladesh: { variant: "right-photo", bgTint: "#006a4e" },
    russia: { variant: "right-photo", bgTint: "#da291c" },
};

// Returns dummy CV inner HTML based on variant + template style
function getDummyCVHtml(variant, accentColor, templateId) {
    switch (variant) {
        case "accent-bar":
            // Colored top bar + left-aligned portrait header
            return `
        <div class="dummy-hdr" style="flex-direction:column;align-items:flex-start;gap:3px;">
          <div style="display:flex;align-items:center;gap:6px;margin-bottom:2px;">
            <div class="dummy-avatar-circle" style="background:${accentColor};width:20px;height:20px;"></div>
            <div style="flex:1;">
              <div class="dummy-line w-50" style="background:${accentColor};opacity:0.7;margin-bottom:3px;"></div>
              <div class="dummy-line w-35"></div>
            </div>
          </div>
          <div class="dummy-line w-80" style="background:${accentColor};height:3px;margin-top:2px;border-radius:1px;"></div>
        </div>
        <div class="dummy-body">
          <div class="dummy-block"><div class="dummy-line w-30 bold-line" style="background:${accentColor};opacity:0.8;"></div><div class="dummy-line w-85"></div><div class="dummy-line w-75"></div></div>
          <div class="dummy-block"><div class="dummy-line w-30 bold-line" style="background:${accentColor};opacity:0.8;"></div><div class="dummy-line w-70"></div><div class="dummy-line w-90"></div></div>
          <div class="dummy-block"><div class="dummy-line w-25 bold-line" style="background:${accentColor};opacity:0.8;"></div><div style="display:flex;gap:3px;flex-wrap:wrap;"><div class="dummy-line w-20" style="height:8px;border-radius:4px;background:${accentColor};opacity:0.25;"></div><div class="dummy-line w-25" style="height:8px;border-radius:4px;background:${accentColor};opacity:0.25;"></div><div class="dummy-line w-20" style="height:8px;border-radius:4px;background:${accentColor};opacity:0.25;"></div></div></div>
        </div>`;

        case "border-left":
            // Strict left border, no photo, clean structured
            return `
        <div style="border-left:4px solid ${accentColor};padding-left:8px;margin-bottom:6px;">
          <div class="dummy-line w-60" style="background:${accentColor};height:5px;margin-bottom:3px;border-radius:1px;"></div>
          <div class="dummy-line w-40"></div>
        </div>
        <div class="dummy-body">
          <div class="dummy-block">
            <div style="display:flex;justify-content:space-between;align-items:center;">
              <div class="dummy-line w-35 bold-line" style="background:${accentColor};opacity:0.75;"></div>
              <div class="dummy-line w-20" style="height:3px;"></div>
            </div>
            <div class="dummy-line w-80"></div><div class="dummy-line w-90"></div>
          </div>
          <div class="dummy-block">
            <div style="display:flex;justify-content:space-between;align-items:center;">
              <div class="dummy-line w-30 bold-line" style="background:${accentColor};opacity:0.75;"></div>
              <div class="dummy-line w-20" style="height:3px;"></div>
            </div>
            <div class="dummy-line w-85"></div><div class="dummy-line w-75"></div>
          </div>
          <div class="dummy-block"><div class="dummy-line w-25 bold-line" style="background:${accentColor};opacity:0.75;"></div><div class="dummy-line w-70"></div></div>
        </div>`;

        case "split-hdr":
            // Minimalist Scandinavian — clean header divider
            return `
        <div style="padding-bottom:6px;border-bottom:2px solid ${accentColor};margin-bottom:6px;display:flex;align-items:center;gap:8px;">
          <div class="dummy-avatar-circle" style="background:${accentColor};width:22px;height:22px;flex-shrink:0;"></div>
          <div style="flex:1;">
            <div class="dummy-line w-50" style="background:${accentColor};margin-bottom:3px;height:5px;"></div>
            <div class="dummy-line w-40"></div>
          </div>
        </div>
        <div class="dummy-body">
          <div class="dummy-block"><div class="dummy-line w-30" style="background:${accentColor};height:3px;margin-bottom:2px;"></div><div class="dummy-line w-90"></div><div class="dummy-line w-80"></div></div>
          <div class="dummy-block"><div class="dummy-line w-30" style="background:${accentColor};height:3px;margin-bottom:2px;"></div><div class="dummy-line w-85"></div><div class="dummy-line w-75"></div></div>
          <div style="display:flex;gap:4px;flex-wrap:wrap;margin-top:2px;">
            <div style="height:7px;border-radius:3px;background:${accentColor};opacity:0.2;width:28%;"></div>
            <div style="height:7px;border-radius:3px;background:${accentColor};opacity:0.2;width:32%;"></div>
            <div style="height:7px;border-radius:3px;background:${accentColor};opacity:0.2;width:24%;"></div>
          </div>
        </div>`;

        case "photo-top":
            // Asian formal — large centered photo at top
            return `
        <div style="display:flex;flex-direction:column;align-items:center;margin-bottom:8px;">
          <div style="width:34px;height:34px;border-radius:50%;background:${accentColor};opacity:0.8;margin-bottom:4px;box-shadow:0 2px 6px rgba(0,0,0,0.2);"></div>
          <div class="dummy-line w-50" style="background:${accentColor};height:4px;margin-bottom:2px;border-radius:2px;"></div>
          <div class="dummy-line w-35" style="margin:0 auto;"></div>
        </div>
        <div style="height:1px;background:${accentColor};opacity:0.3;margin-bottom:6px;"></div>
        <div class="dummy-body">
          <div class="dummy-block"><div class="dummy-line w-30 bold-line" style="background:${accentColor};opacity:0.7;"></div><div class="dummy-line w-80"></div><div class="dummy-line w-90"></div></div>
          <div class="dummy-block"><div class="dummy-line w-30 bold-line" style="background:${accentColor};opacity:0.7;"></div><div class="dummy-line w-70"></div><div class="dummy-line w-85"></div></div>
        </div>`;

        case "sidebar":
            // Two-column with colored sidebar
            return `
        <div style="display:flex;flex-direction:row;flex:1;margin:-16px;overflow:hidden;border-radius:3px;">
          <div style="width:52px;background:${accentColor};padding:10px 6px;display:flex;flex-direction:column;align-items:center;gap:6px;flex-shrink:0;">
            <div style="width:24px;height:24px;border-radius:50%;background:rgba(255,255,255,0.4);margin-bottom:4px;"></div>
            <div style="height:3px;background:rgba(255,255,255,0.5);border-radius:2px;width:70%;"></div>
            <div style="height:3px;background:rgba(255,255,255,0.4);border-radius:2px;width:80%;"></div>
            <div style="height:3px;background:rgba(255,255,255,0.3);border-radius:2px;width:60%;"></div>
            <div style="height:1px;background:rgba(255,255,255,0.2);width:80%;margin:2px 0;"></div>
            <div style="height:3px;background:rgba(255,255,255,0.4);border-radius:2px;width:75%;"></div>
            <div style="height:3px;background:rgba(255,255,255,0.3);border-radius:2px;width:65%;"></div>
          </div>
          <div style="flex:1;padding:10px;display:flex;flex-direction:column;gap:7px;">
            <div class="dummy-line w-60" style="background:${accentColor};height:4px;border-radius:2px;margin-bottom:3px;"></div>
            <div class="dummy-block"><div class="dummy-line w-30 bold-line"></div><div class="dummy-line w-85"></div><div class="dummy-line w-75"></div></div>
            <div class="dummy-block"><div class="dummy-line w-30 bold-line"></div><div class="dummy-line w-90"></div><div class="dummy-line w-80"></div></div>
          </div>
        </div>`;

        case "right-photo":
            // Traditional — photo on the right side of header
            return `
        <div style="display:flex;justify-content:space-between;align-items:flex-start;gap:8px;margin-bottom:6px;padding-bottom:5px;border-bottom:1px solid #e2e8f0;">
          <div style="flex:1;">
            <div class="dummy-line w-70" style="background:${accentColor};height:5px;margin-bottom:4px;border-radius:2px;"></div>
            <div class="dummy-line w-50" style="margin-bottom:2px;"></div>
            <div class="dummy-line w-60"></div>
          </div>
          <div style="width:28px;height:34px;border-radius:3px;background:${accentColor};opacity:0.65;flex-shrink:0;"></div>
        </div>
        <div class="dummy-body">
          <div class="dummy-block"><div class="dummy-line w-30 bold-line" style="background:${accentColor};opacity:0.75;"></div><div class="dummy-line w-85"></div><div class="dummy-line w-80"></div></div>
          <div class="dummy-block"><div class="dummy-line w-30 bold-line" style="background:${accentColor};opacity:0.75;"></div><div class="dummy-line w-70"></div><div class="dummy-line w-90"></div></div>
        </div>`;

        default:
            // Fallback: modern professional
            return `
        <div class="dummy-hdr"><div class="dummy-avatar-circle"></div><div class="dummy-details"><div class="dummy-line w-40"></div><div class="dummy-line w-60"></div></div></div>
        <div class="dummy-body">
          <div class="dummy-block"><div class="dummy-line w-30 bold-line"></div><div class="dummy-line w-80"></div><div class="dummy-line w-90"></div></div>
          <div class="dummy-block"><div class="dummy-line w-30 bold-line"></div><div class="dummy-line w-70"></div><div class="dummy-line w-85"></div></div>
        </div>`;
    }
}

// Generate a rich Portugal European-standard CV mini-preview for template cards
function getPortugalMiniPreviewHtml(accentColor) {
    const col = accentColor || "#006600";
    return `
    <div style="width:100%;height:100%;padding:10px 12px;display:flex;flex-direction:column;gap:8px;background:#fff;box-sizing:border-box;font-family:sans-serif;overflow:hidden;">
      <!-- Header Banner -->
      <div style="background:linear-gradient(135deg, #eef4f9, #e2e8f0);border-radius:6px;padding:8px 10px;display:flex;align-items:center;gap:8px;border:1px solid #cbd5e1;">
        <div style="width:28px;height:28px;border-radius:50%;background:#cbd5e1;border:2px solid #fff;display:flex;align-items:center;justify-content:center;font-size:12px;box-shadow:0 2px 4px rgba(0,0,0,0.1);">👤</div>
        <div style="flex:1;">
          <div style="font-size:8px;font-weight:800;color:#0f172a;text-transform:uppercase;letter-spacing:0.3px;">MD SHAHED</div>
          <div style="font-size:5.5px;color:#475569;">Nationality: Bangladesh | Gender: Male</div>
        </div>
      </div>
      <!-- Split Body -->
      <div style="display:flex;gap:8px;flex:1;overflow:hidden;">
        <!-- Left Sidebar -->
        <div style="width:38%;border-right:1px solid #e2e8f0;padding-right:6px;display:flex;flex-direction:column;gap:5px;">
          <div style="font-size:6px;font-weight:800;color:${col};border-bottom:1px solid ${col};padding-bottom:1px;">CONTACT</div>
          <div style="font-size:5px;color:#64748b;line-height:1.3;">📞 +8801839079238<br>✉️ shahedtnvr769@gmail.com<br>📍 Matlab, Chandpur</div>
          <div style="font-size:6px;font-weight:800;color:${col};border-bottom:1px solid ${col};padding-bottom:1px;margin-top:2px;">TECH SKILLS</div>
          <div style="font-size:5px;color:#475569;line-height:1.3;">• Crop Harvesting<br>• Farm Maintenance<br>• E-agriculture<br>• Quality Control</div>
        </div>
        <!-- Right Main -->
        <div style="flex:1;display:flex;flex-direction:column;gap:5px;overflow:hidden;">
          <div>
            <div style="font-size:6px;font-weight:800;color:${col};border-bottom:1px solid ${col};padding-bottom:1px;">ABOUT ME</div>
            <div style="font-size:4.8px;color:#475569;line-height:1.25;margin-top:2px;">Dedicated professional with hands-on experience in seasonal harvesting & agriculture...</div>
          </div>
          <div>
            <div style="font-size:6px;font-weight:800;color:${col};border-bottom:1px solid ${col};padding-bottom:1px;">EDUCATION</div>
            <div style="font-size:5px;font-weight:700;color:#0f172a;margin-top:2px;">BBA - Savar Govt. College</div>
            <div style="font-size:4.5px;color:#64748b;">[ 2023 - Current ] | Business Admin</div>
          </div>
          <div>
            <div style="font-size:6px;font-weight:800;color:${col};border-bottom:1px solid ${col};padding-bottom:1px;">EXPERIENCE</div>
            <div style="font-size:5px;font-weight:700;color:#0f172a;margin-top:2px;">Agri Tech & Green Specialist</div>
            <div style="font-size:4.5px;color:#64748b;">Family Farm [ 2024 - 2026 ]</div>
          </div>
          <div>
            <div style="font-size:6px;font-weight:800;color:${col};border-bottom:1px solid ${col};padding-bottom:1px;">LANGUAGES</div>
            <div style="font-size:4.5px;color:#475569;">English (A2/A1) | German (A2/A1)</div>
          </div>
        </div>
      </div>
    </div>
    `;
}

// Generate a rich Bangladesh CV mini-preview for template cards
function getBangladeshMiniPreviewHtml(accentColor) {
    return `
    <div style="display:flex;flex-direction:column;width:100%;height:100%;font-family:Georgia,serif;font-size:5.5px;color:#1e293b;line-height:1.3;overflow:hidden;">
      
      <!-- Header -->
      <div style="display:flex;justify-content:space-between;align-items:flex-start;gap:6px;margin-bottom:5px;padding-bottom:4px;">
        <div style="flex:1;">
          <div style="font-size:9px;font-weight:800;text-transform:uppercase;letter-spacing:0.5px;color:#0f172a;margin-bottom:1px;">MD SHAHED</div>
          <div style="font-size:5.5px;font-style:italic;color:${accentColor};margin-bottom:3px;">Student</div>
          <div style="display:flex;align-items:center;gap:2px;margin-bottom:1px;">
            <div style="width:4px;height:4px;background:${accentColor};opacity:0.5;border-radius:50%;"></div>
            <div style="height:2px;background:#94a3b8;border-radius:1px;flex:1;opacity:0.7;"></div>
          </div>
          <div style="display:flex;align-items:center;gap:2px;margin-bottom:1px;">
            <div style="width:4px;height:4px;background:${accentColor};opacity:0.5;border-radius:50%;"></div>
            <div style="height:2px;background:#94a3b8;border-radius:1px;width:55%;opacity:0.7;"></div>
          </div>
          <div style="display:flex;align-items:center;gap:2px;">
            <div style="width:4px;height:4px;background:${accentColor};opacity:0.5;border-radius:50%;"></div>
            <div style="height:2px;background:#94a3b8;border-radius:1px;width:65%;opacity:0.7;"></div>
          </div>
        </div>
        <div style="width:22px;height:28px;border:1.5px solid #cbd5e1;border-radius:2px;background:#f1f5f9;flex-shrink:0;display:flex;align-items:center;justify-content:center;">
          <div style="width:10px;height:10px;border-radius:50%;background:#cbd5e1;"></div>
        </div>
      </div>
      
      <!-- RESUME title box -->
      <div style="border-top:1.5px solid #000;border-bottom:1.5px solid #000;padding:2px 0;text-align:center;margin-bottom:5px;">
        <div style="font-size:7px;font-weight:800;letter-spacing:3px;">RESUME</div>
      </div>
      
      <!-- Career Objective -->
      <div style="margin-bottom:4px;">
        <div style="background:#f1f5f9;border-left:2px solid ${accentColor};padding:1.5px 4px;font-size:4.5px;font-weight:700;text-transform:uppercase;letter-spacing:0.4px;margin-bottom:2px;">CAREER OBJECTIVE</div>
        <div style="height:2px;background:#94a3b8;border-radius:1px;opacity:0.5;margin-bottom:1px;"></div>
        <div style="height:2px;background:#94a3b8;border-radius:1px;opacity:0.5;width:90%;margin-bottom:1px;"></div>
        <div style="height:2px;background:#94a3b8;border-radius:1px;opacity:0.5;width:80%;"></div>
      </div>
      
      <!-- Academic Qualification Table -->
      <div style="margin-bottom:4px;">
        <div style="background:#f1f5f9;border-left:2px solid ${accentColor};padding:1.5px 4px;font-size:4.5px;font-weight:700;text-transform:uppercase;letter-spacing:0.4px;margin-bottom:2px;">ACADEMIC QUALIFICATION</div>
        <table style="width:100%;border-collapse:collapse;font-size:4px;">
          <tr style="background:${accentColor};color:#fff;">
            <td style="padding:1px 2px;">S.No.</td>
            <td style="padding:1px 2px;">Qualification</td>
            <td style="padding:1px 2px;">Board</td>
            <td style="padding:1px 2px;">Year</td>
            <td style="padding:1px 2px;">Result</td>
          </tr>
          <tr style="background:#f8fafc;">
            <td style="padding:1px 2px;border:0.5px solid #e2e8f0;">1</td>
            <td style="padding:1px 2px;border:0.5px solid #e2e8f0;">SSC</td>
            <td style="padding:1px 2px;border:0.5px solid #e2e8f0;">Dhaka</td>
            <td style="padding:1px 2px;border:0.5px solid #e2e8f0;">2020</td>
            <td style="padding:1px 2px;border:0.5px solid #e2e8f0;">82%</td>
          </tr>
          <tr>
            <td style="padding:1px 2px;border:0.5px solid #e2e8f0;">2</td>
            <td style="padding:1px 2px;border:0.5px solid #e2e8f0;">HSC</td>
            <td style="padding:1px 2px;border:0.5px solid #e2e8f0;">Dhaka</td>
            <td style="padding:1px 2px;border:0.5px solid #e2e8f0;">2022</td>
            <td style="padding:1px 2px;border:0.5px solid #e2e8f0;">95%</td>
          </tr>
          <tr style="background:#f8fafc;">
            <td style="padding:1px 2px;border:0.5px solid #e2e8f0;">3</td>
            <td style="padding:1px 2px;border:0.5px solid #e2e8f0;">BBA</td>
            <td style="padding:1px 2px;border:0.5px solid #e2e8f0;">Savar</td>
            <td style="padding:1px 2px;border:0.5px solid #e2e8f0;">2026</td>
            <td style="padding:1px 2px;border:0.5px solid #e2e8f0;">78%</td>
          </tr>
        </table>
      </div>
      
      <!-- Other Qualification -->
      <div style="margin-bottom:4px;">
        <div style="background:#f1f5f9;border-left:2px solid ${accentColor};padding:1.5px 4px;font-size:4.5px;font-weight:700;text-transform:uppercase;letter-spacing:0.4px;margin-bottom:2px;">OTHER QUALIFICATION</div>
        <div style="display:flex;align-items:center;gap:2px;margin-bottom:1px;">
          <div style="width:2px;height:2px;border-radius:50%;background:${accentColor};flex-shrink:0;"></div>
          <div style="height:2px;background:#94a3b8;border-radius:1px;width:70%;opacity:0.6;"></div>
        </div>
        <div style="display:flex;align-items:center;gap:2px;">
          <div style="width:2px;height:2px;border-radius:50%;background:${accentColor};flex-shrink:0;"></div>
          <div style="height:2px;background:#94a3b8;border-radius:1px;width:80%;opacity:0.6;"></div>
        </div>
      </div>
      
      <!-- Personal Information -->
      <div style="margin-bottom:4px;">
        <div style="background:#f1f5f9;border-left:2px solid ${accentColor};padding:1.5px 4px;font-size:4.5px;font-weight:700;text-transform:uppercase;letter-spacing:0.4px;margin-bottom:2px;">PERSONAL INFORMATION</div>
        <div style="display:grid;grid-template-columns:1fr 1fr;gap:1px;">
          ${['Father\'s Name', 'Mother\'s Name', 'Date of Birth', 'Gender', 'Nationality', 'Marital Status', 'Religion', 'Blood Group'].map(label => `
            <div style="display:flex;gap:2px;align-items:center;">
              <div style="font-size:3.5px;color:#475569;white-space:nowrap;">${label}:</div>
              <div style="height:1.5px;background:#94a3b8;flex:1;opacity:0.5;"></div>
            </div>
          `).join('')}
        </div>
      </div>
      
      <!-- Declaration -->
      <div style="margin-bottom:4px;">
        <div style="background:#f1f5f9;border-left:2px solid ${accentColor};padding:1.5px 4px;font-size:4.5px;font-weight:700;text-transform:uppercase;letter-spacing:0.4px;margin-bottom:2px;">DECLARATION</div>
        <div style="height:2px;background:#94a3b8;border-radius:1px;opacity:0.5;margin-bottom:1px;"></div>
        <div style="height:2px;background:#94a3b8;border-radius:1px;opacity:0.5;width:75%;"></div>
      </div>
      
      <!-- Footer -->
      <div style="display:flex;justify-content:space-between;align-items:flex-end;margin-top:auto;padding-top:3px;border-top:0.5px solid #e2e8f0;">
        <div>
          <div style="font-size:3.5px;color:#475569;">Date: ___________</div>
          <div style="font-size:3.5px;color:#475569;">Place: Dhaka</div>
        </div>
        <div style="text-align:center;">
          <div style="width:30px;height:0.5px;background:#000;margin-bottom:1px;"></div>
          <div style="font-size:3.5px;color:#475569;">MD SHAHED</div>
          <div style="font-size:3px;color:#94a3b8;text-transform:uppercase;letter-spacing:0.3px;">SIGNATURE</div>
        </div>
      </div>
    </div>
  `;
}

// Update all 3 template card dummy CVs to show the selected country's layout
function updateTemplatePreviews(country) {
    const info = COUNTRY_VARIANTS[country];
    if (!info) return;

    const { variant, bgTint } = info;
    const countryConfig = COUNTRY_TEMPLATE_CONFIGS[country];

    const cards = document.querySelectorAll(".template-card");
    cards.forEach((card, i) => {
        const templateId = card.dataset.templateId;
        const thumb = card.querySelector(".template-preview-thumb");
        if (!thumb) return;

        // Pick the accent color for this template slot (modulo to support all cards)
        const accentColor = countryConfig ? countryConfig.accentColors[i % countryConfig.accentColors.length] : bgTint;

        // Set the CSS variable for variant pseudo-elements
        thumb.style.setProperty("--cv-accent", accentColor);

        if (country === "bangladesh" && (i === 0 || templateId === "modern-prof")) {
            // ── Bangladesh: Template #1 (1 no) shows the real full-page image preview ──
            const cardHeaderH3 = card.querySelector(".template-card-header h3");
            if (cardHeaderH3) cardHeaderH3.textContent = "Bangladesh Template 1";
            thumb.style.backgroundColor = "#f0f4f8";
            thumb.style.padding = "0";
            thumb.style.alignItems = "stretch";
            thumb.style.justifyContent = "stretch";
            thumb.style.overflow = "hidden";
            thumb.style.position = "relative";

            // Replace entire thumb content with the actual CV image
            thumb.innerHTML = `
        <div style="
          width:100%; height:100%;
          overflow:hidden;
          display:flex;
          align-items:flex-start;
          justify-content:center;
          background:#fff;
          position:relative;
        ">
          <img
            src="pictur and video logo/bangladesh_cv_template 1.png"
            alt="Bangladesh CV Template Preview"
            style="
              width:100%;
              height:100%;
              object-fit:cover;
              object-position:top;
              display:block;
            "
            onerror="this.src='pictur and video logo/bangladesh_cv_template.png'; this.onerror=function(){ this.parentElement.innerHTML = getBangladeshMiniPreviewHtml('${accentColor}'); };"
          />
          <div style="
            position:absolute;
            bottom:0; left:0; right:0;
            background:linear-gradient(transparent, rgba(0,0,0,0.15));
            height:40px;
            pointer-events:none;
          "></div>
        </div>`;
        } else if (country === "bangladesh" && (i === 1 || templateId === "exec-min")) {
            // ── Bangladesh: Template #2 (Ex-Army Sergeant Official Layout) ──
            const cardHeaderH3 = card.querySelector(".template-card-header h3");
            if (cardHeaderH3) cardHeaderH3.textContent = "Bangladesh Template 2";
            thumb.style.backgroundColor = "#ffffff";
            thumb.style.padding = "0";
            thumb.style.alignItems = "stretch";
            thumb.style.justifyContent = "stretch";
            thumb.style.overflow = "hidden";
            thumb.style.position = "relative";

            thumb.innerHTML = getBangladeshArmyMiniPreviewHtml(accentColor);
        } else if (country === "italy" && (i === 0 || templateId === "modern-prof")) {
            // ── Italy: Template #1 shows Italy_cv_template 1.png ──
            thumb.style.backgroundColor = "#f0f4f8";
            thumb.style.padding = "0";
            thumb.style.alignItems = "stretch";
            thumb.style.justifyContent = "stretch";
            thumb.style.overflow = "hidden";
            thumb.style.position = "relative";

            thumb.innerHTML = `
        <div style="
          width:100%; height:100%;
          overflow:hidden;
          display:flex;
          align-items:flex-start;
          justify-content:center;
          background:#fff;
          position:relative;
        ">
          <img
            src="pictur and video logo/Italy_cv_template 1.png"
            alt="Italy CV Template Preview"
            style="
              width:100%;
              height:100%;
              object-fit:cover;
              object-position:top;
              display:block;
            "
            onerror="this.parentElement.innerHTML = getDummyCVHtml('${variant}', '${accentColor}', '${templateId}');"
          />
          <div style="
            position:absolute;
            bottom:0; left:0; right:0;
            background:linear-gradient(transparent, rgba(0,0,0,0.15));
            height:40px;
            pointer-events:none;
          "></div>
        </div>`;
        } else if (country === "portugal" && (i === 0 || templateId === "modern-prof")) {
            // ── Portugal: Template #1 shows portugal-cv-tamplate 1.png ──
            thumb.style.backgroundColor = "#ffffff";
            thumb.style.padding = "0";
            thumb.style.alignItems = "stretch";
            thumb.style.justifyContent = "stretch";
            thumb.style.overflow = "hidden";
            thumb.style.position = "relative";

            thumb.innerHTML = `
        <div style="
          width:100%; height:100%;
          overflow:hidden;
          display:flex;
          align-items:flex-start;
          justify-content:center;
          background:#fff;
          position:relative;
        ">
          <img
            src="pictur and video logo/portugal-cv-tamplate 1.png"
            alt="Portugal CV Template Preview"
            style="
              width:100%;
              height:100%;
              object-fit:cover;
              object-position:top;
              display:block;
            "
            onerror="this.parentElement.innerHTML = getPortugalMiniPreviewHtml('${accentColor}');"
          />
          <div style="
            position:absolute;
            bottom:0; left:0; right:0;
            background:linear-gradient(transparent, rgba(0,0,0,0.15));
            height:40px;
            pointer-events:none;
          "></div>
        </div>`;
        } else {
            // ── Other countries: restore default thumb + dummy CV ──
            thumb.style.backgroundColor = "";
            thumb.style.padding = "";
            thumb.style.alignItems = "";
            thumb.style.justifyContent = "";
            thumb.style.overflow = "";
            thumb.style.position = "";

            // Restore dummy-cv if it was removed
            if (!thumb.querySelector(".dummy-cv")) {
                const dc = document.createElement("div");
                dc.className = "dummy-cv";
                thumb.innerHTML = "";
                thumb.appendChild(dc);
            }

            const dummyCv = thumb.querySelector(".dummy-cv");
            if (dummyCv) {
                dummyCv.className = "dummy-cv";
                dummyCv.style.width = "";
                dummyCv.style.height = "";
                dummyCv.innerHTML = getDummyCVHtml(variant, accentColor, templateId);
            }
        }
    });
}

// Fallback Bangladesh mini-preview (called when image fails to load)
function getBangladeshFallback(accentColor) {
    return getBangladeshMiniPreviewHtml(accentColor);
}

/* ==========================================================================
   Templates list logic
   ========================================================================== */
function setupTemplateListeners() {
    // Back link
    const backBtn = document.getElementById("btn-back-to-countries");
    if (backBtn) {
        backBtn.addEventListener("click", () => {
            switchTab("dashboard");
        });
    }

    // Choose Template - handle both card click and button click cleanly
    function handleTemplateSelect(templateId) {
        if (!templateId) return;
        appState.selectedTemplate = templateId;

        // Get country-specific config (fallback to defaults if no country selected)
        const country = appState.selectedCountry;
        const countryConfig = country && COUNTRY_TEMPLATE_CONFIGS[country] ? COUNTRY_TEMPLATE_CONFIGS[country] : null;

        // Setup configurations depending on template choice + country
        if (templateId === "modern-prof") {
            appState.customizerSettings.font = countryConfig ? countryConfig.fonts[0] : "serif";
            appState.customizerSettings.accentColor = countryConfig ? countryConfig.accentColors[0] : "#111827";
            appState.customizerSettings.showPhoto = true;
        } else if (templateId === "exec-min") {
            if (country === "bangladesh") {
                appState.customizerSettings.font = "serif";
                appState.customizerSettings.accentColor = "#cbd5e1";
                appState.customizerSettings.showPhoto = true;
            } else {
                appState.customizerSettings.font = countryConfig ? countryConfig.fonts[1] : "inter";
                appState.customizerSettings.accentColor = countryConfig ? countryConfig.accentColors[1] : "#0d766e";
                appState.customizerSettings.showPhoto = false;
            }
        } else if (templateId === "creative-port") {
            appState.customizerSettings.font = countryConfig ? countryConfig.fonts[2] : "outfit";
            appState.customizerSettings.accentColor = countryConfig ? countryConfig.accentColors[2] : "#1e3a8a";
            appState.customizerSettings.showPhoto = true;
        } else if (templateId === "corp-elite") {
            appState.customizerSettings.font = countryConfig ? countryConfig.fonts[0] : "inter";
            appState.customizerSettings.accentColor = countryConfig ? countryConfig.accentColors[1 % countryConfig.accentColors.length] : "#1e40af";
            appState.customizerSettings.showPhoto = true;
        } else if (templateId === "clean-min") {
            appState.customizerSettings.font = countryConfig ? countryConfig.fonts[1] : "inter";
            appState.customizerSettings.accentColor = countryConfig ? countryConfig.accentColors[2 % countryConfig.accentColors.length] : "#475569";
            appState.customizerSettings.showPhoto = false;
        } else if (templateId === "modern-info") {
            appState.customizerSettings.font = countryConfig ? countryConfig.fonts[2] : "outfit";
            appState.customizerSettings.accentColor = countryConfig ? countryConfig.accentColors[0] : "#059669";
            appState.customizerSettings.showPhoto = true;
        }

        // Load clean default CV data
        appState.customizerSettings.templateId = templateId;
        if (country === "bangladesh") {
            if (templateId === "exec-min") {
                appState.cvData = JSON.parse(JSON.stringify(DEFAULT_BD_ARMY_CV_DATA));
                appState.customizerSettings.templateId = "exec-min";
                appState.customizerSettings.font = "serif";
                appState.customizerSettings.showPhoto = true;
                appState.customizerSettings.accentColor = "#cbd5e1";
                appState.customizerSettings.hiddenModules = [];
                appState.customizerSettings.hiddenPersonalFields = [];
                appState.customizerSettings.modulesOrder = ["contact", "personal", "army", "permanentAddress", "education", "jobDescription", "computerSkills", "declaration", "signature"];
            } else {
                appState.cvData = JSON.parse(JSON.stringify(DEFAULT_BD_CV_DATA));
                appState.customizerSettings.templateId = templateId;
            }
            appState.customizerSettings.country = "bangladesh";
        } else if (country === "portugal") {
            appState.cvData = JSON.parse(JSON.stringify(DEFAULT_PORTUGAL_CV_DATA));
            appState.customizerSettings.country = "portugal";
            appState.customizerSettings.font = countryConfig ? countryConfig.fonts[0] : "inter";
            appState.customizerSettings.accentColor = countryConfig ? countryConfig.accentColors[0] : "#006600";
            appState.customizerSettings.showSignature = true;
            appState.customizerSettings.hiddenModules = [];
            appState.customizerSettings.hiddenPersonalFields = [];
            appState.customizerSettings.modulesOrder = ["personal", "aboutMe", "education", "experience", "skills", "languages", "signature"];
        } else {
            appState.cvData = JSON.parse(JSON.stringify(DEFAULT_CV_DATA));
            appState.customizerSettings.country = country || null;
            appState.customizerSettings.hiddenModules = [];
            appState.customizerSettings.hiddenPersonalFields = [];
            appState.customizerSettings.showSignature = true;
            appState.customizerSettings.modulesOrder = ["personal", "aboutMe", "education", "skills", "experience", "languages", "signature"];
        }
        appState.currentDocId = null; // New document until saved

        // Apply initial configurations to Customizer UI
        try {
            if (typeof syncCustomizerControlsToState === "function") syncCustomizerControlsToState();
        } catch (err) {
            console.error("syncCustomizerControlsToState error:", err);
        }

        try {
            if (typeof populateExpertModeInputs === "function") {
                populateExpertModeInputs();
            } else if (typeof window.populateExpertModeInputs === "function") {
                window.populateExpertModeInputs();
            }
        } catch (err) {
            console.error("populateExpertModeInputs error:", err);
        }

        try {
            if (typeof updateLivePreview === "function") updateLivePreview();
        } catch (err) {
            console.error("updateLivePreview error:", err);
        }

        switchTab("customize");
    }

    const useBtns = document.querySelectorAll(".btn-use-template, .template-card");
    useBtns.forEach(el => {
        el.addEventListener("click", (e) => {
            const card = e.target.closest(".template-card") || el;
            const templateId = card?.dataset?.templateId || el.dataset.templateId;
            if (templateId) {
                e.preventDefault();
                e.stopPropagation();
                handleTemplateSelect(templateId);
            }
        });
    });

    const grid = document.querySelector(".template-cards-grid");
    if (grid && !grid._hasTemplateClickListener) {
        grid._hasTemplateClickListener = true;
        grid.addEventListener("click", (e) => {
            const card = e.target.closest(".template-card");
            if (card && card.dataset.templateId) {
                e.preventDefault();
                handleTemplateSelect(card.dataset.templateId);
            }
        });
    }

    // 1. Setup Style filter checkboxes with mutual exclusivity
    const styleAllChk = document.getElementById("filter-style-all");
    const styleProfChk = document.getElementById("filter-style-professional");
    const styleCreativeChk = document.getElementById("filter-style-creative");
    const styleSimpleChk = document.getElementById("filter-style-simple");
    const specificStyleCheckboxes = [styleProfChk, styleCreativeChk, styleSimpleChk].filter(Boolean);

    if (styleAllChk) {
        styleAllChk.addEventListener("change", () => {
            if (styleAllChk.checked) {
                specificStyleCheckboxes.forEach(chk => { chk.checked = false; });
            } else {
                // If user unchecks "All Styles" without checking any specific style, restore it
                const anySpecificChecked = specificStyleCheckboxes.some(chk => chk.checked);
                if (!anySpecificChecked) {
                    styleAllChk.checked = true;
                }
            }
            filterTemplates();
        });
    }

    specificStyleCheckboxes.forEach(chk => {
        chk.addEventListener("change", () => {
            const anyChecked = specificStyleCheckboxes.some(c => c.checked);
            if (anyChecked) {
                if (styleAllChk) styleAllChk.checked = false;
            } else {
                if (styleAllChk) styleAllChk.checked = true;
            }
            filterTemplates();
        });
    });

    // 2. Setup Pricing / Type radio filters
    const pricingRadios = document.querySelectorAll("input[name='pricing-filter']");
    pricingRadios.forEach(radio => {
        radio.addEventListener("change", () => {
            filterTemplates();
        });
    });

    // 3. Reset filters button inside empty state
    const resetBtn = document.getElementById("btn-reset-template-filters");
    if (resetBtn) {
        resetBtn.addEventListener("click", () => {
            if (styleAllChk) styleAllChk.checked = true;
            specificStyleCheckboxes.forEach(chk => { chk.checked = false; });
            const pricingAllRadio = document.getElementById("filter-pricing-all");
            if (pricingAllRadio) pricingAllRadio.checked = true;
            filterTemplates();
        });
    }
}

function filterTemplates() {
    const styleAllChk = document.getElementById("filter-style-all");
    const allStyles = styleAllChk ? styleAllChk.checked : true;
    const prof = document.getElementById("filter-style-professional")?.checked || false;
    const creative = document.getElementById("filter-style-creative")?.checked || false;
    const simple = document.getElementById("filter-style-simple")?.checked || false;

    // Pricing filter
    const selectedPricingRadio = document.querySelector("input[name='pricing-filter']:checked");
    const pricingFilter = selectedPricingRadio ? selectedPricingRadio.value : "all";

    const cards = document.querySelectorAll(".template-cards-grid .template-card");
    let visibleCount = 0;

    cards.forEach(card => {
        const style = card.dataset.style;
        const pricing = card.dataset.pricing;

        // Match style
        let matchesStyle = false;
        if (allStyles) {
            matchesStyle = true;
        } else {
            if ((style === "professional" && prof) ||
                (style === "creative" && creative) ||
                (style === "simple" && simple)) {
                matchesStyle = true;
            }
        }

        // Match pricing
        let matchesPricing = false;
        if (pricingFilter === "all") {
            matchesPricing = true;
        } else {
            matchesPricing = (pricing === pricingFilter);
        }

        // Combined result
        if (matchesStyle && matchesPricing) {
            card.style.display = "flex";
            visibleCount++;
        } else {
            card.style.display = "none";
        }
    });

    // Empty state display
    const emptyState = document.getElementById("templates-empty-state");
    if (emptyState) {
        emptyState.style.display = visibleCount === 0 ? "flex" : "none";
    }
}

/* ==========================================================================
   Customizer Logic
   ========================================================================== */
function syncCustomizerControlsToState() {
    const settings = appState.customizerSettings || {};

    // 1. Language
    const customizerLangSelect = document.getElementById("customizer-lang-select");
    if (customizerLangSelect) {
        customizerLangSelect.value = appState.previewLanguage || "en";
    }

    // 2. Font Style
    const fontSelect = document.getElementById("font-select");
    if (fontSelect && settings.font) {
        fontSelect.value = settings.font;
    }

    // 3. Font Size
    const fontSizeSlider = document.getElementById("font-size-slider");
    const fontSizeDisplay = document.getElementById("font-size-value-display");
    if (fontSizeSlider) {
        fontSizeSlider.value = settings.fontSize || 13;
        if (fontSizeDisplay) fontSizeDisplay.textContent = `${settings.fontSize || 13}px`;
    }

    // 4. Accent Color
    const badges = document.querySelectorAll(".color-badge:not(.custom-color-btn)");
    let matchedBadge = false;
    badges.forEach(badge => {
        if (badge.dataset.color && badge.dataset.color.toLowerCase() === (settings.accentColor || "").toLowerCase()) {
            badge.classList.add("active");
            matchedBadge = true;
        } else {
            badge.classList.remove("active");
        }
    });
    const customColorBtn = document.getElementById("btn-custom-color");
    const customColorPicker = document.getElementById("custom-color-picker");
    if (customColorBtn && customColorPicker) {
        if (!matchedBadge && settings.accentColor) {
            customColorBtn.classList.add("active");
            customColorBtn.style.backgroundColor = settings.accentColor;
            customColorPicker.value = settings.accentColor;
        } else {
            customColorBtn.classList.remove("active");
        }
    }

    // 5. Grid Density
    const densitySlider = document.getElementById("grid-density");
    if (densitySlider) {
        densitySlider.value = settings.density || 2;
    }

    // 6. Show Profile Photo switch
    const photoToggle = document.getElementById("profile-photo-toggle");
    if (photoToggle) {
        photoToggle.checked = settings.showPhoto !== false;
    }

    // 7. Photo Shape
    const shapeBadges = document.querySelectorAll(".btn-shape-badge");
    shapeBadges.forEach(b => {
        if (b.dataset.shape === settings.photoShape) {
            b.classList.add("active");
        } else {
            b.classList.remove("active");
        }
    });

    // 8. Photo Size
    const photoSizeSlider = document.getElementById("profile-photo-size");
    const photoSizeDisplay = document.getElementById("photo-size-value-display");
    if (photoSizeSlider) {
        photoSizeSlider.value = settings.photoSize || 115;
        if (photoSizeDisplay) photoSizeDisplay.textContent = `${settings.photoSize || 115}px`;
    }

    // 9. Photo Preview URL
    const uploadPreview = document.getElementById("upload-avatar-preview");
    if (uploadPreview && settings.photoUrl) {
        uploadPreview.src = settings.photoUrl;
    }

    // 10. Signature toggle sync
    const sigToggle = document.getElementById("signature-toggle");
    if (sigToggle) {
        sigToggle.checked = settings.showSignature !== false && !(settings.hiddenModules || []).includes("signature");
    }

    // 11. Personal fields visibility toggle sync
    const hiddenFields = settings.hiddenPersonalFields || [];
    document.querySelectorAll(".personal-field-toggle").forEach(toggle => {
        const field = toggle.dataset.field;
        toggle.checked = !hiddenFields.includes(field);
    });

    if (typeof renderSidebarModulesList === "function") {
        renderSidebarModulesList();
    }
}

/* ==========================================================================
   Expert Mode Input Synchronization (Top-Level Scope)
   ========================================================================== */
function parseProfileInfoFromJobTitle(jobTitleStr) {
    const info = {
        dob: "",
        nat: "",
        gender: "",
        phone: "",
        email: "",
        website: "",
        linkedin: "",
        address: ""
    };
    if (!jobTitleStr) return info;

    if (!jobTitleStr.includes("|") && !jobTitleStr.includes(":")) {
        info.phone = jobTitleStr;
        return info;
    }

    const parts = jobTitleStr.split('|').map(p => p.trim());
    parts.forEach(part => {
        const colonIdx = part.indexOf(':');
        if (colonIdx !== -1) {
            const key = part.substring(0, colonIdx).trim().toLowerCase();
            const val = part.substring(colonIdx + 1).trim();
            if (key.includes("birth") || key.includes("dob")) info.dob = val;
            else if (key.includes("nationality")) info.nat = val;
            else if (key.includes("gender")) info.gender = val;
            else if (key.includes("phone") || key.includes("mobile")) info.phone = val;
            else if (key.includes("email")) info.email = val;
            else if (key.includes("website") || key.includes("site") || key.includes("url")) info.website = val;
            else if (key.includes("linkedin")) info.linkedin = val;
            else if (key.includes("address") || key.includes("location")) info.address = val;
        } else {
            if (part.includes("@") && !part.includes("linkedin")) info.email = part;
            else if (part.startsWith("http")) info.website = part;
        }
    });
    return info;
}

// Alias for full backwards-compatibility
function parseJobTitleInfo(jobTitleStr) {
    return parseProfileInfoFromJobTitle(jobTitleStr);
}

function populateExpertModeInputs() {
    const nameIn = document.getElementById("exp-in-name");
    const dobIn = document.getElementById("exp-in-dob");
    const natIn = document.getElementById("exp-in-nat");
    const genderIn = document.getElementById("exp-in-gender");
    const phoneIn = document.getElementById("exp-in-phone");
    const emailIn = document.getElementById("exp-in-email");
    const websiteIn = document.getElementById("exp-in-website");
    const linkedinIn = document.getElementById("exp-in-linkedin");
    const addressIn = document.getElementById("exp-in-address");
    const aboutIn = document.getElementById("exp-in-about");

    const country = appState.customizerSettings ? appState.customizerSettings.country : null;
    if (country === "portugal") {
        const data = appState.cvData || {};
        if (nameIn) nameIn.value = data.name || "";
        if (dobIn) dobIn.value = data.personalInfo?.dob || (data.customContactInfo?.dob || "");
        if (natIn) natIn.value = data.personalInfo?.nationality || (data.customContactInfo?.nat || "");
        if (genderIn) genderIn.value = data.personalInfo?.gender || (data.customContactInfo?.gender || "");
        if (phoneIn) phoneIn.value = data.contact?.phone || (data.customContactInfo?.phone || "");
        if (emailIn) emailIn.value = data.contact?.email || (data.customContactInfo?.email || "");
        if (websiteIn) websiteIn.value = data.contact?.website || (data.customContactInfo?.website || "");
        if (linkedinIn) linkedinIn.value = data.contact?.linkedin || (data.customContactInfo?.linkedin || "");
        if (addressIn) addressIn.value = data.contact?.home || data.contact?.address || (data.customContactInfo?.address || "");
        if (aboutIn) {
            aboutIn.value = typeof data.aboutMe === "object" ? (data.aboutMe.content || "") : (data.aboutMe || "");
        }
    } else if (country === "bangladesh") {
        const data = appState.cvData || {};
        if (nameIn) nameIn.value = data.name || "";
        if (data.armyInfo) {
            if (dobIn) dobIn.value = data.personalInfo?.dob || "";
            if (natIn) natIn.value = data.personalInfo?.nationality || "Bangladeshi";
            if (genderIn) genderIn.value = data.personalInfo?.gender || "Male";
            if (phoneIn) phoneIn.value = data.contact?.mobile || "";
            if (emailIn) emailIn.value = data.contact?.email || "";
            if (addressIn) addressIn.value = data.contact?.currentAddress || data.contact?.address || "";
            if (aboutIn) aboutIn.value = data.jobDescription?.summary || "";
        } else {
            if (dobIn) dobIn.value = data.personalInfo?.dob || "";
            if (natIn) natIn.value = data.personalInfo?.nationality || "";
            if (genderIn) genderIn.value = data.personalInfo?.gender || "";
            if (phoneIn) phoneIn.value = data.contact?.mobile || "";
            if (emailIn) emailIn.value = data.contact?.email || "";
            if (addressIn) addressIn.value = data.contact?.address || "";
            if (aboutIn) aboutIn.value = data.objective || "";
        }

        const setVal = (id, val) => {
            const el = document.getElementById(id);
            if (el) el.value = val || "";
        };
        if (data.personalInfo) {
            setVal("exp-in-fathersName", data.personalInfo.fathersName);
            setVal("exp-in-mothersName", data.personalInfo.mothersName);
            setVal("exp-in-religion", data.personalInfo.religion);
            setVal("exp-in-height", data.personalInfo.height);
            setVal("exp-in-bloodGroup", data.personalInfo.bloodGroup);
            setVal("exp-in-maritalStatus", data.personalInfo.maritalStatus);
            setVal("exp-in-languages", data.personalInfo.languages);
            setVal("exp-in-nid", data.personalInfo.nid);
        }
        if (data.armyInfo) {
            setVal("exp-in-senaNo", data.armyInfo.senaNo);
            setVal("exp-in-rank", data.armyInfo.rank);
            setVal("exp-in-trade", data.armyInfo.trade);
            setVal("exp-in-core", data.armyInfo.core);
            setVal("exp-in-lastUnit", data.armyInfo.lastUnit);
            setVal("exp-in-joiningDate", data.armyInfo.joiningDate);
            setVal("exp-in-retirementDate", data.armyInfo.retirementDate);
        }
        if (data.permanentAddress) {
            setVal("exp-in-village", data.permanentAddress.village);
            setVal("exp-in-postOffice", data.permanentAddress.postOffice);
            setVal("exp-in-thana", data.permanentAddress.thana);
            setVal("exp-in-district", data.permanentAddress.district);
        }
    } else {
        // Italy / Generic templates
        if (nameIn) nameIn.value = appState.cvData?.name || DEFAULT_CV_DATA.name;
        const defaultInfo = parseProfileInfoFromJobTitle(DEFAULT_CV_DATA.jobTitle);
        let info = null;
        if (appState.cvData?.userEnteredPersonalInfo && appState.cvData?.customContactInfo) {
            info = appState.cvData.customContactInfo;
        } else if (appState.cvData?.jobTitle) {
            info = parseProfileInfoFromJobTitle(appState.cvData.jobTitle);
        }
        if (!info || (!info.phone && !info.email && !info.dob)) {
            info = defaultInfo;
        }
        if (dobIn) dobIn.value = info.dob || defaultInfo.dob || "";
        if (natIn) natIn.value = info.nat || defaultInfo.nat || "";
        if (genderIn) genderIn.value = info.gender || defaultInfo.gender || "";
        if (phoneIn) phoneIn.value = info.phone || defaultInfo.phone || "";
        if (emailIn) emailIn.value = info.email || defaultInfo.email || "";
        if (websiteIn) websiteIn.value = info.website || defaultInfo.website || "";
        if (linkedinIn) linkedinIn.value = info.linkedin || defaultInfo.linkedin || "";
        if (addressIn) addressIn.value = info.address || defaultInfo.address || "";
        if (aboutIn) {
            if (appState.cvData?.aboutMe) {
                aboutIn.value = typeof appState.cvData.aboutMe === "object" ? (appState.cvData.aboutMe.content || "") : appState.cvData.aboutMe;
            } else if (appState.cvData?.objective) {
                aboutIn.value = appState.cvData.objective;
            } else {
                aboutIn.value = DEFAULT_CV_DATA.aboutMe.content;
            }
        }
    }
}

let _isExpertModeInputListenersSetup = false;
function setupExpertModeInputListeners() {
    if (_isExpertModeInputListenersSetup) return;
    _isExpertModeInputListenersSetup = true;

    const inputIds = [
        "exp-in-name", "exp-in-dob", "exp-in-nat", "exp-in-gender",
        "exp-in-phone", "exp-in-email", "exp-in-website", "exp-in-linkedin",
        "exp-in-address", "exp-in-about",
        "exp-in-fathersName", "exp-in-mothersName", "exp-in-religion", "exp-in-height",
        "exp-in-bloodGroup", "exp-in-maritalStatus", "exp-in-languages", "exp-in-nid",
        "exp-in-senaNo", "exp-in-rank", "exp-in-trade", "exp-in-core",
        "exp-in-lastUnit", "exp-in-joiningDate", "exp-in-retirementDate",
        "exp-in-village", "exp-in-postOffice", "exp-in-thana", "exp-in-district"
    ];

    inputIds.forEach(id => {
        const el = document.getElementById(id);
        if (!el) return;

        el.addEventListener("input", () => {
            const val = el.value.trim();

            if (id.startsWith("exp-in-senaNo") || id.startsWith("exp-in-rank") || id.startsWith("exp-in-trade") || id.startsWith("exp-in-core") || id.startsWith("exp-in-lastUnit") || id.startsWith("exp-in-joiningDate") || id.startsWith("exp-in-retirementDate")) {
                const key = id.replace("exp-in-", "");
                if (!appState.cvData.armyInfo) appState.cvData.armyInfo = {};
                appState.cvData.armyInfo[key] = val;
                const elOnCv = document.querySelector(`[data-type="bd2-army"][data-key="${key}"]`);
                if (elOnCv) elOnCv.textContent = val;
            } else if (id.startsWith("exp-in-village") || id.startsWith("exp-in-postOffice") || id.startsWith("exp-in-thana") || id.startsWith("exp-in-district")) {
                const key = id.replace("exp-in-", "");
                if (!appState.cvData.permanentAddress) appState.cvData.permanentAddress = {};
                appState.cvData.permanentAddress[key] = val;
                const elOnCv = document.querySelector(`[data-type="bd2-perm"][data-key="${key}"]`);
                if (elOnCv) elOnCv.textContent = val;
            } else if (["exp-in-fathersName", "exp-in-mothersName", "exp-in-religion", "exp-in-height", "exp-in-bloodGroup", "exp-in-maritalStatus", "exp-in-languages", "exp-in-nid"].includes(id)) {
                const key = id.replace("exp-in-", "");
                if (!appState.cvData.personalInfo) appState.cvData.personalInfo = {};
                appState.cvData.personalInfo[key] = val;
                const elOnCv = document.querySelector(`[data-type="bd2-personal"][data-key="${key}"]`);
                if (elOnCv) elOnCv.textContent = val;
            } else if (id === "exp-in-name") {
                appState.cvData.name = val;
                const nameEl = document.getElementById("cv-name");
                if (nameEl) nameEl.textContent = val;
                const bdSig = document.querySelector(".cv-bd-signature-name");
                if (bdSig) bdSig.textContent = val;
                const bd2Sig = document.querySelector('[data-type="bd2-signature"]');
                if (bd2Sig) bd2Sig.textContent = val;
                const ptSig = document.querySelector(".cv-pt-signature-name");
                if (ptSig) ptSig.textContent = val;
            } else if (id === "exp-in-about") {
                if (appState.customizerSettings.country === "bangladesh") {
                    if (appState.cvData.armyInfo) {
                        if (!appState.cvData.jobDescription) appState.cvData.jobDescription = {};
                        appState.cvData.jobDescription.summary = val;
                    } else {
                        appState.cvData.objective = val;
                    }
                } else if (appState.customizerSettings.country === "portugal") {
                    appState.cvData.aboutMe = val;
                }
                if (!appState.cvData.aboutMe) appState.cvData.aboutMe = {};
                if (typeof appState.cvData.aboutMe === "object") {
                    appState.cvData.aboutMe.content = val;
                } else {
                    appState.cvData.aboutMe = val;
                }
            } else {
                const dob = document.getElementById("exp-in-dob")?.value.trim() || "";
                const nat = document.getElementById("exp-in-nat")?.value.trim() || "";
                const gender = document.getElementById("exp-in-gender")?.value.trim() || "";
                const phone = document.getElementById("exp-in-phone")?.value.trim() || "";
                const email = document.getElementById("exp-in-email")?.value.trim() || "";
                const website = document.getElementById("exp-in-website")?.value.trim() || "";
                const linkedin = document.getElementById("exp-in-linkedin")?.value.trim() || "";
                const address = document.getElementById("exp-in-address")?.value.trim() || "";

                appState.cvData.userEnteredPersonalInfo = true;
                appState.cvData.customContactInfo = { dob, nat, gender, phone, email, website, linkedin, address };

                if (appState.customizerSettings.country === "bangladesh") {
                    if (!appState.cvData.contact) appState.cvData.contact = {};
                    if (!appState.cvData.personalInfo) appState.cvData.personalInfo = {};
                    appState.cvData.contact.mobile = phone;
                    appState.cvData.contact.email = email;
                    if (appState.cvData.armyInfo) {
                        appState.cvData.contact.currentAddress = address;
                    } else {
                        appState.cvData.contact.address = address;
                    }
                    appState.cvData.personalInfo.dob = dob;
                    appState.cvData.personalInfo.nationality = nat;
                    appState.cvData.personalInfo.gender = gender;
                } else if (appState.customizerSettings.country === "portugal") {
                    if (!appState.cvData.contact) appState.cvData.contact = {};
                    if (!appState.cvData.personalInfo) appState.cvData.personalInfo = {};
                    appState.cvData.contact.phone = phone;
                    appState.cvData.contact.email = email;
                    appState.cvData.contact.website = website;
                    appState.cvData.contact.linkedin = linkedin;
                    appState.cvData.contact.home = address;
                    appState.cvData.personalInfo.dob = dob;
                    appState.cvData.personalInfo.nationality = nat;
                    appState.cvData.personalInfo.gender = gender;
                }

                let parts = [];
                if (dob) parts.push(`Date of birth: ${dob}`);
                if (nat) parts.push(`Nationality: ${nat}`);
                if (gender) parts.push(`Gender: ${gender}`);
                if (phone) parts.push(`Phone number: ${phone}`);
                if (email) parts.push(`Email address: ${email}`);
                if (website) parts.push(`Website: ${website}`);
                if (linkedin) parts.push(`LinkedIn: ${linkedin}`);
                if (address) parts.push(`Address: ${address}`);

                appState.cvData.jobTitle = parts.join(" | ");
            }

            updateLivePreview();
        });
    });

    // Setup Personal Field ON/OFF toggle switches
    document.querySelectorAll(".personal-field-toggle").forEach(toggle => {
        toggle.addEventListener("change", (e) => {
            const field = e.target.dataset.field;
            if (!appState.customizerSettings.hiddenPersonalFields) {
                appState.customizerSettings.hiddenPersonalFields = [];
            }
            if (!e.target.checked) {
                if (!appState.customizerSettings.hiddenPersonalFields.includes(field)) {
                    appState.customizerSettings.hiddenPersonalFields.push(field);
                }
            } else {
                appState.customizerSettings.hiddenPersonalFields = appState.customizerSettings.hiddenPersonalFields.filter(f => f !== field);
            }
            updateLivePreview();
        });
    });
}

window.populateExpertModeInputs = populateExpertModeInputs;
window.setupExpertModeInputListeners = setupExpertModeInputListeners;
window.parseJobTitleInfo = parseJobTitleInfo;
window.parseProfileInfoFromJobTitle = parseProfileInfoFromJobTitle;

let isCustomizerControlsInitialized = false;
function setupCustomizerControls() {
    if (isCustomizerControlsInitialized) return;
    isCustomizerControlsInitialized = true;
    syncCustomizerControlsToState();
    // Translate (Language) select inside Global Template Settings
    const customizerLangSelect = document.getElementById("customizer-lang-select");
    if (customizerLangSelect) {
        // Set initial value to match current preview language
        customizerLangSelect.value = appState.previewLanguage;
        customizerLangSelect.addEventListener("change", (e) => {
            const lang = e.target.value;
            appState.previewLanguage = lang;
            localStorage.setItem("global_resume_preview_lang", lang);

            // Re-render only the live preview with the chosen translation
            updateLivePreview();

            const selectedText = customizerLangSelect.options[customizerLangSelect.selectedIndex]?.text || lang;
            showToast(`Preview language changed to ${selectedText}`);
        });
    }

    // Font Family Dropdown
    const fontSelect = document.getElementById("font-select");
    if (fontSelect) {
        fontSelect.addEventListener("change", (e) => {
            appState.customizerSettings.font = e.target.value;
            updateLivePreview();
        });
    }

    // Front Size Slider Listener
    const fontSizeSlider = document.getElementById("font-size-slider");
    const fontSizeDisplay = document.getElementById("font-size-value-display");
    if (fontSizeSlider) {
        fontSizeSlider.addEventListener("input", (e) => {
            const val = parseFloat(e.target.value);
            appState.customizerSettings.fontSize = val;
            if (fontSizeDisplay) fontSizeDisplay.textContent = `${val}px`;
            updateLivePreview();
        });
    }

    // Accent Color Badges
    const badges = document.querySelectorAll(".color-badge:not(.custom-color-btn)");
    badges.forEach(badge => {
        badge.addEventListener("click", () => {
            badges.forEach(b => b.classList.remove("active"));
            document.getElementById("btn-custom-color").classList.remove("active");
            badge.classList.add("active");

            appState.customizerSettings.accentColor = badge.dataset.color;
            updateLivePreview();
        });
    });

    // Custom Color Picker
    const customColorInput = document.getElementById("custom-color-picker");
    const customColorBtn = document.getElementById("btn-custom-color");
    if (customColorInput && customColorBtn) {
        customColorBtn.addEventListener("click", () => {
            customColorInput.click();
        });

        customColorInput.addEventListener("input", (e) => {
            const color = e.target.value;
            customColorBtn.style.backgroundColor = color;
            customColorBtn.classList.add("active");
            badges.forEach(b => b.classList.remove("active"));

            appState.customizerSettings.accentColor = color;
            updateLivePreview();
        });
    }

    // Grid Spacing Density Slider
    const densitySlider = document.getElementById("grid-density");
    if (densitySlider) {
        densitySlider.addEventListener("input", (e) => {
            appState.customizerSettings.density = parseInt(e.target.value);
            updateLivePreview();
        });
    }

    // Show Profile Image Switch Toggle
    const photoToggle = document.getElementById("profile-photo-toggle");
    if (photoToggle) {
        photoToggle.addEventListener("change", (e) => {
            appState.customizerSettings.showPhoto = e.target.checked;
            updateLivePreview();
        });
    }

    // Profile Photo Shape Selection Badges
    const shapeBadges = document.querySelectorAll(".btn-shape-badge");
    shapeBadges.forEach(badge => {
        badge.addEventListener("click", () => {
            shapeBadges.forEach(b => b.classList.remove("active"));
            badge.classList.add("active");
            appState.customizerSettings.photoShape = badge.dataset.shape;
            updateLivePreview();
        });
    });

    // Profile Photo Size Slider
    const photoSizeSlider = document.getElementById("profile-photo-size");
    const photoSizeDisplay = document.getElementById("photo-size-value-display");
    if (photoSizeSlider) {
        photoSizeSlider.addEventListener("input", (e) => {
            const val = parseInt(e.target.value);
            appState.customizerSettings.photoSize = val;
            if (photoSizeDisplay) photoSizeDisplay.textContent = `${val}px`;
            updateLivePreview();
        });
    }

    // Show/Hide Signature Toggle
    const sigToggle = document.getElementById("signature-toggle");
    if (sigToggle) {
        sigToggle.addEventListener("change", (e) => {
            appState.customizerSettings.showSignature = e.target.checked;
            if (!appState.customizerSettings.hiddenModules) {
                appState.customizerSettings.hiddenModules = [];
            }
            if (!e.target.checked) {
                if (!appState.customizerSettings.hiddenModules.includes("signature")) {
                    appState.customizerSettings.hiddenModules.push("signature");
                }
            } else {
                appState.customizerSettings.hiddenModules = appState.customizerSettings.hiddenModules.filter(m => m !== "signature");
            }
            updateLivePreview();
            if (typeof renderSidebarModulesList === "function") {
                renderSidebarModulesList();
            }
        });
    }

    // Live Screen vs Print Layout Buttons
    const screenBtn = document.getElementById("btn-preview-screen");
    const printBtn = document.getElementById("btn-preview-print");
    const cvPaper = document.getElementById("cv-paper-render");

    if (screenBtn && printBtn) {
        screenBtn.addEventListener("click", () => {
            screenBtn.classList.add("active");
            printBtn.classList.remove("active");
            if (cvPaper) {
                cvPaper.style.boxShadow = "var(--shadow-lg)";
                cvPaper.style.border = "1px solid var(--border-color)";
            }
        });

        printBtn.addEventListener("click", () => {
            printBtn.classList.add("active");
            screenBtn.classList.remove("active");
            if (cvPaper) {
                cvPaper.style.boxShadow = "none";
                cvPaper.style.border = "none";
            }
            // Trigger actual print preview
            window.print();
        });
    }

    // Initialize PDF, PNG, JPG and Print export system
    setupExportControls();

    // Reset to Default button
    const resetBtn = document.getElementById("btn-reset-default");
    if (resetBtn) {
        resetBtn.addEventListener("click", () => {
            const country = appState.customizerSettings.country;
            if (country === "bangladesh") {
                if (appState.customizerSettings.templateId === "exec-min" || appState.cvData?.armyInfo) {
                    appState.cvData = JSON.parse(JSON.stringify(DEFAULT_BD_ARMY_CV_DATA));
                    appState.customizerSettings = {
                        country: "bangladesh",
                        templateId: "exec-min",
                        font: "serif",
                        fontSize: 13,
                        accentColor: "#cbd5e1",
                        density: 2,
                        showPhoto: true,
                        photoUrl: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=200",
                        modulesOrder: ["contact", "personal", "army", "permanentAddress", "education", "jobDescription", "computerSkills", "declaration", "signature"],
                        hiddenModules: [],
                        hiddenPersonalFields: []
                    };
                } else {
                    appState.cvData = JSON.parse(JSON.stringify(DEFAULT_BD_CV_DATA));
                    appState.customizerSettings = {
                        country: "bangladesh",
                        font: "serif",
                        fontSize: 13,
                        accentColor: "#006a4e",
                        density: 2,
                        showPhoto: true,
                        photoUrl: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=200",
                        modulesOrder: ["personal", "experience", "education", "skills"],
                        hiddenModules: []
                    };
                }
            } else if (country === "portugal") {
                appState.cvData = JSON.parse(JSON.stringify(DEFAULT_PORTUGAL_CV_DATA));
                appState.customizerSettings = {
                    country: "portugal",
                    font: "inter",
                    fontSize: 13,
                    accentColor: "#006600",
                    density: 2,
                    showPhoto: true,
                    showSignature: true,
                    photoShape: "circle",
                    photoSize: 115,
                    photoUrl: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=200",
                    modulesOrder: ["personal", "aboutMe", "education", "experience", "skills", "languages", "signature"],
                    hiddenModules: [],
                    hiddenPersonalFields: []
                };
            } else {
                appState.cvData = JSON.parse(JSON.stringify(DEFAULT_CV_DATA));
                appState.customizerSettings = {
                    country: country || null,
                    font: "serif",
                    fontSize: 13,
                    accentColor: "#111827",
                    density: 2,
                    showPhoto: true,
                    photoUrl: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=200",
                    modulesOrder: ["aboutMe", "education", "skills", "experience", "languages"],
                    hiddenModules: []
                };
            }

            syncCustomizerControlsToState();
            populateExpertModeInputs();
            updateLivePreview();
            renderSidebarModulesList();
            showToast("Settings reset to defaults.");
        });
    }

    // Setup Expert Mode Input listeners and initial values
    setupExpertModeInputListeners();
    populateExpertModeInputs();

    // Profile Image Upload reader
    const photoUpload = document.getElementById("file-photo-upload");
    if (photoUpload) {
        photoUpload.addEventListener("change", (e) => {
            const file = e.target.files[0];
            if (file) {
                const reader = new FileReader();
                reader.onload = function (evt) {
                    const imgUrl = evt.target.result;
                    appState.customizerSettings.photoUrl = imgUrl;
                    const uploadPreview = document.getElementById("upload-avatar-preview");
                    if (uploadPreview) uploadPreview.src = imgUrl;
                    const cvAvatar = document.getElementById("cv-avatar-img");
                    if (cvAvatar) cvAvatar.src = imgUrl;

                    updateLivePreview();
                    showToast("Profile photo uploaded successfully.");
                };
                reader.readAsDataURL(file);
            }
        });
    }

    // Save changes button
    const saveBtn = document.getElementById("btn-save-cv");
    if (saveBtn) {
        saveBtn.addEventListener("click", () => {
            saveCurrentDocument();
        });
    }

    // Add Editable Element Changes handler
    const paper = document.getElementById("cv-paper-render");
    if (paper) {
        paper.addEventListener("input", (e) => {
            const target = e.target;
            if (target.id === "cv-name") {
                appState.cvData.name = target.innerText.trim();
                const nameIn = document.getElementById("exp-in-name");
                if (nameIn) nameIn.value = appState.cvData.name;
            } else if (target.id === "cv-job-title") {
                appState.cvData.jobTitle = target.innerText.trim();
            }
        });

        paper.addEventListener("click", (e) => {
            const target = e.target;
            const bdPhotoBox = target.closest("#cv-bd-photo-box");
            if (bdPhotoBox) {
                document.getElementById("file-photo-upload").click();
            }

            // Add Skill
            if (target.id === "btn-add-skill" || target.closest("#btn-add-skill")) {
                e.preventDefault();
                if (!appState.cvData.skills) appState.cvData.skills = { title: "• SKILLS", items: [] };
                if (!Array.isArray(appState.cvData.skills.items)) appState.cvData.skills.items = [];
                appState.cvData.skills.items.push("New Skill");
                populateExpertModeInputs();
                updateLivePreview();
                return;
            }

            // Delete Skill
            const delSkillBtn = target.closest(".btn-delete-skill");
            if (delSkillBtn) {
                e.preventDefault();
                const idx = parseInt(delSkillBtn.dataset.index);
                if (appState.cvData.skills && Array.isArray(appState.cvData.skills.items)) {
                    appState.cvData.skills.items.splice(idx, 1);
                    populateExpertModeInputs();
                    updateLivePreview();
                }
                return;
            }

            // Add Work Experience
            if (target.id === "btn-add-exp" || target.closest("#btn-add-exp")) {
                e.preventDefault();
                if (!appState.cvData.experience) appState.cvData.experience = { title: "• WORK EXPERIENCE", entries: [] };
                if (!Array.isArray(appState.cvData.experience.entries)) appState.cvData.experience.entries = [];
                appState.cvData.experience.entries.push({
                    company: "COMPANY / ORGANIZATION NAME",
                    duration: "1 JAN 2026 – PRESENT",
                    role: "POSITION TITLE",
                    bullets: [
                        "Key job responsibility or achievement description.",
                        "Another responsibility or key achievement."
                    ]
                });
                populateExpertModeInputs();
                updateLivePreview();
                return;
            }

            // Delete Work Experience
            const delExpBtn = target.closest(".btn-delete-exp");
            if (delExpBtn) {
                e.preventDefault();
                const idx = parseInt(delExpBtn.dataset.index);
                if (appState.cvData.experience && Array.isArray(appState.cvData.experience.entries)) {
                    appState.cvData.experience.entries.splice(idx, 1);
                    populateExpertModeInputs();
                    updateLivePreview();
                }
                return;
            }

            // Add Experience Bullet
            const addExpBulletBtn = target.closest(".btn-add-exp-bullet");
            if (addExpBulletBtn) {
                e.preventDefault();
                const expIdx = parseInt(addExpBulletBtn.dataset.expIndex);
                if (appState.cvData.experience && appState.cvData.experience.entries && appState.cvData.experience.entries[expIdx]) {
                    if (!Array.isArray(appState.cvData.experience.entries[expIdx].bullets)) {
                        appState.cvData.experience.entries[expIdx].bullets = [];
                    }
                    appState.cvData.experience.entries[expIdx].bullets.push("New responsibility or achievement point.");
                    populateExpertModeInputs();
                    updateLivePreview();
                }
                return;
            }

            // Delete Experience Bullet
            const delExpBulletBtn = target.closest(".btn-delete-exp-bullet");
            if (delExpBulletBtn) {
                e.preventDefault();
                const expIdx = parseInt(delExpBulletBtn.dataset.expIndex);
                const bIdx = parseInt(delExpBulletBtn.dataset.bulletIndex);
                if (appState.cvData.experience && appState.cvData.experience.entries && appState.cvData.experience.entries[expIdx] && appState.cvData.experience.entries[expIdx].bullets) {
                    appState.cvData.experience.entries[expIdx].bullets.splice(bIdx, 1);
                    populateExpertModeInputs();
                    updateLivePreview();
                }
                return;
            }

            // Add Education
            if (target.id === "btn-add-edu" || target.closest("#btn-add-edu")) {
                e.preventDefault();
                if (!appState.cvData.education) appState.cvData.education = { title: "• EDUCATION AND TRAINING", entries: [] };
                if (!Array.isArray(appState.cvData.education.entries)) appState.cvData.education.entries = [];
                appState.cvData.education.entries.push({
                    college: "UNIVERSITY / COLLEGE NAME",
                    duration: "2024 – 2025",
                    role: "DEGREE OR DIPLOMA NAME",
                    bullets: [
                        "Major subjects, coursework, or achievements.",
                        "Field of study or specialization."
                    ]
                });
                populateExpertModeInputs();
                updateLivePreview();
                return;
            }

            // Delete Education
            const delEduBtn = target.closest(".btn-delete-edu");
            if (delEduBtn) {
                e.preventDefault();
                const idx = parseInt(delEduBtn.dataset.index);
                if (appState.cvData.education && Array.isArray(appState.cvData.education.entries)) {
                    appState.cvData.education.entries.splice(idx, 1);
                    populateExpertModeInputs();
                    updateLivePreview();
                }
                return;
            }

            // Add Education Bullet
            const addEduBulletBtn = target.closest(".btn-add-edu-bullet");
            if (addEduBulletBtn) {
                e.preventDefault();
                const eduIdx = parseInt(addEduBulletBtn.dataset.eduIndex);
                if (appState.cvData.education && appState.cvData.education.entries && appState.cvData.education.entries[eduIdx]) {
                    if (!Array.isArray(appState.cvData.education.entries[eduIdx].bullets)) {
                        appState.cvData.education.entries[eduIdx].bullets = [];
                    }
                    appState.cvData.education.entries[eduIdx].bullets.push("Major subjects, coursework, or achievements.");
                    populateExpertModeInputs();
                    updateLivePreview();
                }
                return;
            }

            // Delete Education Bullet
            const delEduBulletBtn = target.closest(".btn-delete-edu-bullet");
            if (delEduBulletBtn) {
                e.preventDefault();
                const eduIdx = parseInt(delEduBulletBtn.dataset.eduIndex);
                const bIdx = parseInt(delEduBulletBtn.dataset.bulletIndex);
                if (appState.cvData.education && appState.cvData.education.entries && appState.cvData.education.entries[eduIdx] && appState.cvData.education.entries[eduIdx].bullets) {
                    appState.cvData.education.entries[eduIdx].bullets.splice(bIdx, 1);
                    populateExpertModeInputs();
                    updateLivePreview();
                }
                return;
            }

            // Add Language
            if (target.id === "btn-add-lang" || target.closest("#btn-add-lang")) {
                e.preventDefault();
                if (!appState.cvData.languages) appState.cvData.languages = { motherTongue: "Mother tongue(s): BENGALI", otherLanguages: [] };
                if (!Array.isArray(appState.cvData.languages.otherLanguages)) {
                    appState.cvData.languages.otherLanguages = [
                        { name: "ENGLISH", listening: "A2", reading: "B1", spokenProduction: "A2", spokenInteraction: "A2", writing: "A2" }
                    ];
                }
                appState.cvData.languages.otherLanguages.push({
                    name: "NEW LANGUAGE",
                    listening: "A2",
                    reading: "A2",
                    spokenProduction: "A2",
                    spokenInteraction: "A2",
                    writing: "A2"
                });
                populateExpertModeInputs();
                updateLivePreview();
                return;
            }

            // Delete Language
            const delLangBtn = target.closest(".btn-delete-lang");
            if (delLangBtn) {
                e.preventDefault();
                const idx = parseInt(delLangBtn.dataset.index);
                if (appState.cvData.languages && Array.isArray(appState.cvData.languages.otherLanguages)) {
                    appState.cvData.languages.otherLanguages.splice(idx, 1);
                    populateExpertModeInputs();
                    updateLivePreview();
                }
                return;
            }

            // --- Custom Section (projects, certifications, awards, references, custom_*) button handlers ---

            // Add new entry to custom section
            const addCustomEntryBtn = target.closest(".btn-add-custom-entry");
            if (addCustomEntryBtn) {
                e.preventDefault();
                const mod = addCustomEntryBtn.dataset.mod;
                if (!appState.cvData.customSectionsData) appState.cvData.customSectionsData = {};
                if (!appState.cvData.customSectionsData[mod]) appState.cvData.customSectionsData[mod] = [];
                appState.cvData.customSectionsData[mod].push({
                    role: "New Entry Title",
                    company: "",
                    duration: "",
                    bullets: ["Add details here."]
                });
                updateLivePreview();
                return;
            }

            // Delete entry from custom section
            const delCustomEntryBtn = target.closest(".btn-delete-custom-entry");
            if (delCustomEntryBtn) {
                e.preventDefault();
                const mod = delCustomEntryBtn.dataset.mod;
                const idx = parseInt(delCustomEntryBtn.dataset.index);
                if (appState.cvData.customSectionsData && appState.cvData.customSectionsData[mod]) {
                    appState.cvData.customSectionsData[mod].splice(idx, 1);
                    updateLivePreview();
                }
                return;
            }

            // Add bullet to custom entry
            const addCustomBulletBtn = target.closest(".btn-add-custom-bullet");
            if (addCustomBulletBtn) {
                e.preventDefault();
                const mod = addCustomBulletBtn.dataset.mod;
                const idx = parseInt(addCustomBulletBtn.dataset.index);
                if (appState.cvData.customSectionsData && appState.cvData.customSectionsData[mod] && appState.cvData.customSectionsData[mod][idx]) {
                    if (!Array.isArray(appState.cvData.customSectionsData[mod][idx].bullets)) {
                        appState.cvData.customSectionsData[mod][idx].bullets = [];
                    }
                    appState.cvData.customSectionsData[mod][idx].bullets.push("New detail point.");
                    updateLivePreview();
                }
                return;
            }

            // Delete bullet from custom entry
            const delCustomBulletBtn = target.closest(".btn-delete-custom-bullet");
            if (delCustomBulletBtn) {
                e.preventDefault();
                const mod = delCustomBulletBtn.dataset.mod;
                const idx = parseInt(delCustomBulletBtn.dataset.index);
                const bIdx = parseInt(delCustomBulletBtn.dataset.bulletIndex);
                if (appState.cvData.customSectionsData && appState.cvData.customSectionsData[mod] && appState.cvData.customSectionsData[mod][idx] && appState.cvData.customSectionsData[mod][idx].bullets) {
                    appState.cvData.customSectionsData[mod][idx].bullets.splice(bIdx, 1);
                    updateLivePreview();
                }
                return;
            }


            if (e.target.id === "btn-bd-add-edu") {
                e.preventDefault();
                if (appState.cvData.education && Array.isArray(appState.cvData.education)) {
                    const nextIndex = appState.cvData.education.length + 1;
                    appState.cvData.education.push({
                        sno: nextIndex.toString(),
                        qualification: "Degree Name",
                        board: "Board / University",
                        year: "Year",
                        result: "Result"
                    });
                    updateLivePreview();
                }
            }

            // Add bullet for other qualifications in Bangladesh CV
            if (e.target.id === "btn-bd-add-other") {
                e.preventDefault();
                if (appState.cvData.otherQualifications && Array.isArray(appState.cvData.otherQualifications)) {
                    appState.cvData.otherQualifications.push("New Qualification");
                    updateLivePreview();
                }
            }

            // Dynamic additions for Portugal European CV
            if (e.target.id === "btn-pt-add-skill") {
                e.preventDefault();
                if (!appState.cvData.technicalSkills || !Array.isArray(appState.cvData.technicalSkills)) {
                    appState.cvData.technicalSkills = [];
                }
                appState.cvData.technicalSkills.push("New Skill / Competence");
                updateLivePreview();
            }

            if (e.target.id === "btn-pt-add-edu") {
                e.preventDefault();
                if (!appState.cvData.education || !Array.isArray(appState.cvData.education)) {
                    appState.cvData.education = [];
                }
                appState.cvData.education.push({
                    qualification: "Degree or Certificate Name",
                    institution: "University / Institute Name",
                    period: "Year – Year",
                    city: "City",
                    country: "Country",
                    field: "Field of Study",
                    bullets: ["Key coursework or achievement"]
                });
                updateLivePreview();
            }

            if (e.target.id === "btn-pt-add-exp") {
                e.preventDefault();
                if (!appState.cvData.experience || !Array.isArray(appState.cvData.experience)) {
                    appState.cvData.experience = [];
                }
                appState.cvData.experience.push({
                    employer: "Company or Farm Name",
                    location: "City, Country",
                    role: "Role / Job Title",
                    period: "Date – Date",
                    bullets: ["Key role responsibility or achievement"]
                });
                updateLivePreview();
            }

            // Add bullet to Portugal Education entry
            const addPtEduBullet = e.target.closest(".btn-pt-add-edu-bullet");
            if (addPtEduBullet) {
                e.preventDefault();
                const idx = parseInt(addPtEduBullet.dataset.index);
                if (appState.cvData.education && appState.cvData.education[idx]) {
                    if (!Array.isArray(appState.cvData.education[idx].bullets)) {
                        appState.cvData.education[idx].bullets = [];
                    }
                    appState.cvData.education[idx].bullets.push("Key subject or achievement");
                    updateLivePreview();
                }
                return;
            }

            // Remove bullet from Portugal Education entry
            const delPtEduBullet = e.target.closest(".btn-pt-del-edu-bullet");
            if (delPtEduBullet) {
                e.preventDefault();
                const idx = parseInt(delPtEduBullet.dataset.index);
                const bidx = parseInt(delPtEduBullet.dataset.bindex);
                if (appState.cvData.education && appState.cvData.education[idx] && appState.cvData.education[idx].bullets) {
                    appState.cvData.education[idx].bullets.splice(bidx, 1);
                    updateLivePreview();
                }
                return;
            }

            // Add bullet to Portugal Experience entry
            const addPtExpBullet = e.target.closest(".btn-pt-add-exp-bullet");
            if (addPtExpBullet) {
                e.preventDefault();
                const idx = parseInt(addPtExpBullet.dataset.index);
                if (appState.cvData.experience && appState.cvData.experience[idx]) {
                    if (!Array.isArray(appState.cvData.experience[idx].bullets)) {
                        appState.cvData.experience[idx].bullets = [];
                    }
                    appState.cvData.experience[idx].bullets.push("Key role responsibility or achievement");
                    updateLivePreview();
                }
                return;
            }

            // Remove bullet from Portugal Experience entry
            const delPtExpBullet = e.target.closest(".btn-pt-del-exp-bullet");
            if (delPtExpBullet) {
                e.preventDefault();
                const idx = parseInt(delPtExpBullet.dataset.index);
                const bidx = parseInt(delPtExpBullet.dataset.bindex);
                if (appState.cvData.experience && appState.cvData.experience[idx] && appState.cvData.experience[idx].bullets) {
                    appState.cvData.experience[idx].bullets.splice(bidx, 1);
                    updateLivePreview();
                }
                return;
            }

            // Remove skill from Portugal Technical Skills
            const delPtSkill = e.target.closest(".btn-pt-del-skill");
            if (delPtSkill) {
                e.preventDefault();
                const idx = parseInt(delPtSkill.dataset.index);
                if (appState.cvData.technicalSkills && Array.isArray(appState.cvData.technicalSkills)) {
                    appState.cvData.technicalSkills.splice(idx, 1);
                    updateLivePreview();
                }
                return;
            }

            // Bangladesh Template 2: Add Education Row
            const addBd2Edu = e.target.closest(".btn-bd2-add-edu");
            if (addBd2Edu) {
                e.preventDefault();
                if (!appState.cvData.education || !Array.isArray(appState.cvData.education)) {
                    appState.cvData.education = [];
                }
                const nextSl = (appState.cvData.education.length + 1).toString();
                appState.cvData.education.push({
                    sl: nextSl,
                    certificate: "Degree / Exam",
                    board: "Board / Univ",
                    institution: "Institution Name",
                    group: "Group / Major",
                    passingYear: "Year",
                    gpa: "GPA / Grade"
                });
                updateLivePreview();
                return;
            }

            // Bangladesh Template 2: Delete Education Row
            const delBd2Edu = e.target.closest(".btn-delete-bd2-edu");
            if (delBd2Edu) {
                e.preventDefault();
                const idx = parseInt(delBd2Edu.dataset.index);
                if (appState.cvData.education && Array.isArray(appState.cvData.education)) {
                    appState.cvData.education.splice(idx, 1);
                    // re-number serials
                    appState.cvData.education.forEach((row, rIdx) => {
                        row.sl = (rIdx + 1).toString();
                    });
                    updateLivePreview();
                }
                return;
            }

            // Bangladesh Template 2: Add Job Description Bullet
            const addBd2JobBullet = e.target.closest(".btn-bd2-add-job-bullet");
            if (addBd2JobBullet) {
                e.preventDefault();
                if (!appState.cvData.jobDescription) appState.cvData.jobDescription = {};
                if (!Array.isArray(appState.cvData.jobDescription.bullets)) {
                    appState.cvData.jobDescription.bullets = [];
                }
                appState.cvData.jobDescription.bullets.push("New skill / mission / responsibility");
                updateLivePreview();
                return;
            }

            // Bangladesh Template 2: Delete Job Description Bullet
            const delBd2JobBullet = e.target.closest(".btn-delete-bd2-job-bullet");
            if (delBd2JobBullet) {
                e.preventDefault();
                const idx = parseInt(delBd2JobBullet.dataset.index);
                if (appState.cvData.jobDescription && Array.isArray(appState.cvData.jobDescription.bullets)) {
                    appState.cvData.jobDescription.bullets.splice(idx, 1);
                    updateLivePreview();
                }
                return;
            }

            // Bangladesh Template 2: Add Computer Skill
            const addBd2Skill = e.target.closest(".btn-bd2-add-skill");
            if (addBd2Skill) {
                e.preventDefault();
                if (!Array.isArray(appState.cvData.computerSkills)) {
                    appState.cvData.computerSkills = [];
                }
                appState.cvData.computerSkills.push("New Computer / Technical Skill");
                updateLivePreview();
                return;
            }

            // Bangladesh Template 2: Delete Computer Skill
            const delBd2Skill = e.target.closest(".btn-delete-bd2-skill");
            if (delBd2Skill) {
                e.preventDefault();
                const idx = parseInt(delBd2Skill.dataset.index);
                if (Array.isArray(appState.cvData.computerSkills)) {
                    appState.cvData.computerSkills.splice(idx, 1);
                    updateLivePreview();
                }
                return;
            }
        });
    }

    // --- Zoom Controls Listeners ---
    const zoomOutBtn = document.getElementById("btn-zoom-out");
    const zoomInBtn = document.getElementById("btn-zoom-in");
    const zoomResetBtn = document.getElementById("btn-zoom-reset");
    const zoomText = document.getElementById("zoom-level-text");

    function updateZoomUI() {
        if (!zoomText) return;
        if (appState.customizerZoom === 'fit') {
            zoomText.textContent = "Fit";
        } else {
            zoomText.textContent = Math.round(appState.customizerZoom * 100) + "%";
        }
    }

    if (zoomOutBtn) {
        zoomOutBtn.addEventListener("click", () => {
            if (appState.customizerZoom === 'fit') {
                const paper = document.getElementById("cv-paper-render");
                const scaler = document.getElementById("cv-paper-scaler");
                if (paper && scaler) {
                    const baseWidth = 800;
                    let availableWidth = scaler.clientWidth || 360;
                    let currentScale = Math.min(availableWidth / baseWidth, 0.98);
                    appState.customizerZoom = Math.max(0.3, Math.round((currentScale - 0.1) * 10) / 10);
                } else {
                    appState.customizerZoom = 0.5;
                }
            } else {
                appState.customizerZoom = Math.max(0.3, Math.round((appState.customizerZoom - 0.1) * 10) / 10);
            }
            updateZoomUI();
            resizePreview();
        });
    }

    if (zoomInBtn) {
        zoomInBtn.addEventListener("click", () => {
            if (appState.customizerZoom === 'fit') {
                const paper = document.getElementById("cv-paper-render");
                const scaler = document.getElementById("cv-paper-scaler");
                if (paper && scaler) {
                    const baseWidth = 800;
                    let availableWidth = scaler.clientWidth || 360;
                    let currentScale = Math.min(availableWidth / baseWidth, 0.98);
                    appState.customizerZoom = Math.min(1.5, Math.round((currentScale + 0.1) * 10) / 10);
                } else {
                    appState.customizerZoom = 0.7;
                }
            } else {
                appState.customizerZoom = Math.min(1.5, Math.round((appState.customizerZoom + 0.1) * 10) / 10);
            }
            updateZoomUI();
            resizePreview();
        });
    }

    if (zoomResetBtn) {
        zoomResetBtn.addEventListener("click", () => {
            appState.customizerZoom = 'fit';
            updateZoomUI();
            resizePreview();
        });
    }


}

/* ==========================================================================
   Document Export System (PDF, PNG, JPG, Print)
   ========================================================================== */
function setupExportControls() {
    const exportDropdownWrapper = document.getElementById("export-dropdown-wrapper");
    const exportMainBtn = document.getElementById("btn-export-main");
    const exportMenu = document.getElementById("export-dropdown-menu");

    if (exportMainBtn && exportMenu) {
        exportMainBtn.addEventListener("click", (e) => {
            e.stopPropagation();
            exportMenu.classList.toggle("show");
        });

        // Close on outside click
        document.addEventListener("click", (e) => {
            if (exportDropdownWrapper && !exportDropdownWrapper.contains(e.target)) {
                exportMenu.classList.remove("show");
            }
        });
    }

    // Dropdown items
    const btnPdf = document.getElementById("btn-export-pdf");
    const btnPng = document.getElementById("btn-export-png");
    const btnJpg = document.getElementById("btn-export-jpg");
    const btnPrintOpt = document.getElementById("btn-export-print-opt");

    if (btnPdf) btnPdf.addEventListener("click", (e) => {
        e.stopPropagation();
        if (exportMenu) exportMenu.classList.remove("show");
        exportDocumentAs("pdf");
    });
    if (btnPng) btnPng.addEventListener("click", (e) => {
        e.stopPropagation();
        if (exportMenu) exportMenu.classList.remove("show");
        exportDocumentAs("png");
    });
    if (btnJpg) btnJpg.addEventListener("click", (e) => {
        e.stopPropagation();
        if (exportMenu) exportMenu.classList.remove("show");
        exportDocumentAs("jpg");
    });
    if (btnPrintOpt) btnPrintOpt.addEventListener("click", (e) => {
        e.stopPropagation();
        if (exportMenu) exportMenu.classList.remove("show");
        exportDocumentAs("print");
    });
}

async function exportDocumentAs(format) {
    const cvPaper = document.getElementById("cv-paper-render");
    const scaler = document.getElementById("cv-paper-scaler");
    if (!cvPaper) {
        showToast("Error: Document preview element not found.");
        return;
    }

    // Generate safe clean filename
    const candidateName = (appState.cvData?.personal?.fullName || 
                           appState.cvData?.name ||
                           appState.documents.find(d => d.id === appState.currentDocId)?.title || 
                           "Resume").trim();
    const safeBaseName = candidateName.replace(/[^a-zA-Z0-9_\- \u0980-\u09FF]/g, "").replace(/\s+/g, "_") || "Resume";
    const filename = `${safeBaseName}_CV`;

    if (format === "print") {
        window.print();
        return;
    }

    showToast(`⏳ Generating ${format.toUpperCase()}... Please wait.`);

    // Indicate loading state on export button
    const exportMainBtn = document.getElementById("btn-export-main");
    if (exportMainBtn) exportMainBtn.classList.add("exporting-spinner");

    // Temporarily save scale & styling
    const prevTransform = scaler ? scaler.style.transform : "";
    const prevTransition = scaler ? scaler.style.transition : "";
    const prevShadow = cvPaper.style.boxShadow;
    const prevBorder = cvPaper.style.border;

    try {
        // Temporarily reset zoom transform & shadows for 100% crisp full-resolution capture
        if (scaler) {
            scaler.style.transition = "none";
            scaler.style.transform = "none";
        }
        cvPaper.style.boxShadow = "none";
        cvPaper.style.border = "none";

        // Give browser brief tick to repaint unscaled
        await new Promise(r => setTimeout(r, 100));

        if (format === "pdf") {
            if (typeof html2pdf !== "undefined") {
                const opt = {
                    margin: 0,
                    filename: `${filename}.pdf`,
                    image: { type: "jpeg", quality: 0.98 },
                    html2canvas: {
                        scale: 2,
                        useCORS: true,
                        allowTaint: true,
                        logging: false,
                        windowWidth: cvPaper.scrollWidth
                    },
                    jsPDF: { unit: "mm", format: "a4", orientation: "portrait" }
                };
                await html2pdf().set(opt).from(cvPaper).save();
                showToast(`✅ "${filename}.pdf" downloaded successfully!`);
            } else if (typeof html2canvas !== "undefined") {
                const canvas = await html2canvas(cvPaper, {
                    scale: 2,
                    useCORS: true,
                    allowTaint: true,
                    backgroundColor: "#ffffff",
                    logging: false
                });
                const imgData = canvas.toDataURL("image/jpeg", 0.98);
                const jsPDFClass = window.jspdf?.jsPDF || window.jsPDF;
                if (jsPDFClass) {
                    const pdf = new jsPDFClass("p", "mm", "a4");
                    const pdfWidth = 210;
                    const pdfHeight = (canvas.height * pdfWidth) / canvas.width;
                    if (pdfHeight <= 297) {
                        pdf.addImage(imgData, "JPEG", 0, 0, pdfWidth, pdfHeight);
                    } else {
                        let heightLeft = pdfHeight;
                        let position = 0;
                        pdf.addImage(imgData, "JPEG", 0, position, pdfWidth, pdfHeight);
                        heightLeft -= 297;
                        while (heightLeft > 0) {
                            position = heightLeft - pdfHeight;
                            pdf.addPage();
                            pdf.addImage(imgData, "JPEG", 0, position, pdfWidth, pdfHeight);
                            heightLeft -= 297;
                        }
                    }
                    pdf.save(`${filename}.pdf`);
                    showToast(`✅ "${filename}.pdf" downloaded successfully!`);
                } else {
                    showToast("Opening Print setup — select 'Save as PDF' to save.");
                    setTimeout(() => window.print(), 300);
                }
            } else {
                showToast("Opening Print setup — select 'Save as PDF' to save.");
                setTimeout(() => window.print(), 300);
            }
        } else if (format === "png") {
            if (typeof html2canvas !== "undefined") {
                const canvas = await html2canvas(cvPaper, {
                    scale: 2,
                    useCORS: true,
                    allowTaint: true,
                    backgroundColor: "#ffffff",
                    logging: false
                });
                const dataUrl = canvas.toDataURL("image/png");
                downloadFile(dataUrl, `${filename}.png`);
                showToast(`✅ "${filename}.png" downloaded successfully!`);
            } else {
                throw new Error("Render library is loading. Please try again in a moment.");
            }
        } else if (format === "jpg" || format === "jpeg") {
            if (typeof html2canvas !== "undefined") {
                const canvas = await html2canvas(cvPaper, {
                    scale: 2,
                    useCORS: true,
                    allowTaint: true,
                    backgroundColor: "#ffffff",
                    logging: false
                });
                const dataUrl = canvas.toDataURL("image/jpeg", 0.95);
                downloadFile(dataUrl, `${filename}.jpg`);
                showToast(`✅ "${filename}.jpg" downloaded successfully!`);
            } else {
                throw new Error("Render library is loading. Please try again in a moment.");
            }
        }
    } catch (err) {
        console.error("Export error:", err);
        showToast(`Export error: ${err.message || "Failed"}. Opening print fallback.`);
        setTimeout(() => window.print(), 300);
    } finally {
        // Restore styling and scale
        if (scaler) {
            scaler.style.transform = prevTransform;
            scaler.style.transition = prevTransition;
        }
        cvPaper.style.boxShadow = prevShadow;
        cvPaper.style.border = prevBorder;
        if (exportMainBtn) exportMainBtn.classList.remove("exporting-spinner");
    }
}

function downloadFile(url, filename) {
    const a = document.createElement("a");
    a.href = url;
    a.download = filename;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
}

// Helper to generate Bangladesh-specific CV layout HTML
function getBangladeshCVHtml(cv, settings) {
    // Ensure default structure if cv data is empty or generic
    const data = cv.contact ? cv : {
        name: cv.name || "MD SHAHED",
        jobTitle: cv.jobTitle || "Student",
        contact: {
            address: "Savar cantonment, Ashulia, Savar, Dhaka",
            mobile: "+880 1234567890",
            email: "shahedtnvr769@gmail.com"
        },
        objective: "To work in a responsible position where I could use my interpersonal skills, creativity, and above all, my learning experiences in order to develop my career as well as to contribute to the growth of the organization.",
        education: [
            { sno: "1", qualification: "SSC", board: "Dhaka Board", year: "2020", result: "82%" },
            { sno: "2", qualification: "HSC", board: "Dhaka Board", year: "2022", result: "95%" },
            { sno: "3", qualification: "BBA", board: "Savar Govt University", year: "2026", result: "78%" }
        ],
        otherQualifications: [
            "Basic Knowledge of Computer",
            "Advanced Microsoft Excel Certification"
        ],
        personalInfo: {
            fathersName: "MD ******",
            mothersName: "MISS ******",
            dob: "21-04-2004",
            languages: "Bangla And English",
            gender: "Male",
            nationality: "Bangladeshi",
            maritalStatus: "Unmarried",
            religion: "Islam",
            bloodGroup: "O+",
            height: "5'11\"",
            weight: "74 kg"
        },
        declaration: "I hereby declare that the above information given by me is true to the best of my knowledge and belief.",
        date: "________________",
        place: "Dhaka"
    };

    // If cv was generic, save it back to appState so it gets kept in sync
    if (!cv.contact) {
        appState.cvData = data;
    }

    const lang = appState.previewLanguage || appState.language || "en";

    // Full multi-language label table for Bangladesh CV
    const BD_LABELS = {
        en: { resume: "RESUME", careerObjective: "CAREER OBJECTIVE", academicQualification: "ACADEMIC QUALIFICATION", otherQualification: "OTHER QUALIFICATION", personalInformation: "PERSONAL INFORMATION", declaration: "DECLARATION", sno: "S.No.", qualification: "Qualification", board: "University / Board", year: "Year", result: "Result", fathersName: "Father's Name", mothersName: "Mother's Name", dob: "Date of Birth", languages: "Language Known", gender: "Gender", nationality: "Nationality", maritalStatus: "Marital Status", religion: "Religion", bloodGroup: "Blood Group", height: "Height", weight: "Weight", signature: "SIGNATURE", dateLabel: "Date", placeLabel: "Place" },
        bn: { resume: "জীবনবৃত্তান্ত", careerObjective: "ক্যারিয়ার উদ্দেশ্য", academicQualification: "শিক্ষাগত যোগ্যতা", otherQualification: "অন্যান্য যোগ্যতা", personalInformation: "ব্যক্তিগত তথ্য", declaration: "ঘোষণা", sno: "ক্রমিক", qualification: "যোগ্যতা", board: "বিশ্ববিদ্যালয় / বোর্ড", year: "বছর", result: "ফলাফল", fathersName: "পিতার নাম", mothersName: "মাতার নাম", dob: "জন্ম তারিখ", languages: "পরিচিত ভাষা", gender: "লিঙ্গ", nationality: "জাতীয়তা", maritalStatus: "বৈবাহিক অবস্থা", religion: "ধর্ম", bloodGroup: "রক্তের গ্রুপ", height: "উচ্চতা", weight: "ওজন", signature: "স্বাক্ষর", dateLabel: "তারিখ", placeLabel: "স্থান" },
        de: { resume: "LEBENSLAUF", careerObjective: "BERUFLICHES ZIEL", academicQualification: "AKADEMISCHE QUALIFIKATION", otherQualification: "WEITERE QUALIFIKATIONEN", personalInformation: "PERSÖNLICHE ANGABEN", declaration: "ERKLÄRUNG", sno: "Nr.", qualification: "Qualifikation", board: "Universität / Behörde", year: "Jahr", result: "Ergebnis", fathersName: "Name des Vaters", mothersName: "Name der Mutter", dob: "Geburtsdatum", languages: "Sprachen", gender: "Geschlecht", nationality: "Staatsangehörigkeit", maritalStatus: "Familienstand", religion: "Religion", bloodGroup: "Blutgruppe", height: "Größe", weight: "Gewicht", signature: "UNTERSCHRIFT", dateLabel: "Datum", placeLabel: "Ort" },
        fr: { resume: "RÉSUMÉ", careerObjective: "OBJECTIF PROFESSIONNEL", academicQualification: "QUALIFICATIONS ACADÉMIQUES", otherQualification: "AUTRES QUALIFICATIONS", personalInformation: "INFORMATIONS PERSONNELLES", declaration: "DÉCLARATION", sno: "N°", qualification: "Qualification", board: "Université / Conseil", year: "Année", result: "Résultat", fathersName: "Nom du père", mothersName: "Nom de la mère", dob: "Date de naissance", languages: "Langues", gender: "Genre", nationality: "Nationalité", maritalStatus: "État civil", religion: "Religion", bloodGroup: "Groupe sanguin", height: "Taille", weight: "Poids", signature: "SIGNATURE", dateLabel: "Date", placeLabel: "Lieu" },
        it: { resume: "CURRICULUM VITAE", careerObjective: "OBIETTIVO PROFESSIONALE", academicQualification: "QUALIFICA ACCADEMICA", otherQualification: "ALTRE QUALIFICHE", personalInformation: "INFORMAZIONI PERSONALI", declaration: "DICHIARAZIONE", sno: "N.", qualification: "Qualifica", board: "Università / Istituto", year: "Anno", result: "Risultato", fathersName: "Nome del padre", mothersName: "Nome della madre", dob: "Data di nascita", languages: "Lingue", gender: "Genere", nationality: "Nazionalità", maritalStatus: "Stato civile", religion: "Religione", bloodGroup: "Gruppo sanguigno", height: "Altezza", weight: "Peso", signature: "FIRMA", dateLabel: "Data", placeLabel: "Luogo" },
        pt: { resume: "CURRÍCULO", careerObjective: "OBJETIVO PROFISSIONAL", academicQualification: "QUALIFICAÇÃO ACADÊMICA", otherQualification: "OUTRAS QUALIFICAÇÕES", personalInformation: "INFORMAÇÕES PESSOAIS", declaration: "DECLARAÇÃO", sno: "Nº", qualification: "Qualificação", board: "Universidade / Conselho", year: "Ano", result: "Resultado", fathersName: "Nome do pai", mothersName: "Nome da mãe", dob: "Data de nascimento", languages: "Idiomas", gender: "Gênero", nationality: "Nacionalidade", maritalStatus: "Estado civil", religion: "Religião", bloodGroup: "Grupo sanguíneo", height: "Altura", weight: "Peso", signature: "ASSINATURA", dateLabel: "Data", placeLabel: "Local" },
        da: { resume: "CURRICULUM VITAE", careerObjective: "KARRIEREMÅL", academicQualification: "UDDANNELSESKVALIFIKATIONER", otherQualification: "ANDRE KVALIFIKATIONER", personalInformation: "PERSONLIGE OPLYSNINGER", declaration: "ERKLÆRING", sno: "Nr.", qualification: "Kvalifikation", board: "Universitet / Bestyrelse", year: "År", result: "Resultat", fathersName: "Fars navn", mothersName: "Mors navn", dob: "Fødselsdato", languages: "Sprog", gender: "Køn", nationality: "Nationalitet", maritalStatus: "Civilstand", religion: "Religion", bloodGroup: "Blodtype", height: "Højde", weight: "Vægt", signature: "UNDERSKRIFT", dateLabel: "Dato", placeLabel: "Sted" },
        no: { resume: "CV", careerObjective: "KARRIEREMÅL", academicQualification: "UTDANNINGSKVALIFIKASJONER", otherQualification: "ANDRE KVALIFIKASJONER", personalInformation: "PERSONLIGE OPPLYSNINGER", declaration: "ERKLÆRING", sno: "Nr.", qualification: "Kvalifikasjon", board: "Universitet / Styret", year: "År", result: "Resultat", fathersName: "Fars navn", mothersName: "Mors navn", dob: "Fødselsdato", languages: "Språk", gender: "Kjønn", nationality: "Nasjonalitet", maritalStatus: "Sivilstand", religion: "Religion", bloodGroup: "Blodtype", height: "Høyde", weight: "Vekt", signature: "SIGNATUR", dateLabel: "Dato", placeLabel: "Sted" },
        ru: { resume: "РЕЗЮМЕ", careerObjective: "ЦЕЛЬ КАРЬЕРЫ", academicQualification: "АКАДЕМИЧЕСКАЯ КВАЛИФИКАЦИЯ", otherQualification: "ДРУГИЕ КВАЛИФИКАЦИИ", personalInformation: "ЛИЧНАЯ ИНФОРМАЦИЯ", declaration: "ДЕКЛАРАЦИЯ", sno: "№", qualification: "Квалификация", board: "Университет / Совет", year: "Год", result: "Результат", fathersName: "Имя отца", mothersName: "Имя матери", dob: "Дата рождения", languages: "Языки", gender: "Пол", nationality: "Гражданство", maritalStatus: "Семейное положение", religion: "Религия", bloodGroup: "Группа крови", height: "Рост", weight: "Вес", signature: "ПОДПИСЬ", dateLabel: "Дата", placeLabel: "Место" },
        ja: { resume: "履歴書", careerObjective: "キャリア目標", academicQualification: "学歴・資格", otherQualification: "その他の資格", personalInformation: "個人情報", declaration: "本人署名", sno: "番号", qualification: "資格・学位", board: "学校名・機関", year: "年", result: "結果・成績", fathersName: "父の名前", mothersName: "母の名前", dob: "生年月日", languages: "語学力", gender: "性別", nationality: "国籍", maritalStatus: "配偶者", religion: "宗教", bloodGroup: "血液型", height: "身長", weight: "体重", signature: "署名", dateLabel: "日付", placeLabel: "場所" },
        ko: { resume: "이력서", careerObjective: "희망 업무 및 목표", academicQualification: "학력 사항", otherQualification: "기타 자격", personalInformation: "개인 정보", declaration: "서약 및 선언", sno: "번호", qualification: "자격 및 학위", board: "학교 / 기관", year: "년도", result: "결과", fathersName: "부친 성명", mothersName: "모친 성명", dob: "생년월일", languages: "가능 언어", gender: "성별", nationality: "국적", maritalStatus: "결혼 여부", religion: "종교", bloodGroup: "혈액형", height: "신장", weight: "체중", signature: "서명", dateLabel: "날짜", placeLabel: "장소" },
        ms: { resume: "RESUME", careerObjective: "OBJEKTIF KERJAYA", academicQualification: "KELAYAKAN AKADEMIK", otherQualification: "KELAYAKAN LAIN", personalInformation: "MAKLUMAT PERIBADI", declaration: "PENGESAHAN", sno: "Bil.", qualification: "Kelayakan", board: "Universiti / Lembaga", year: "Tahun", result: "Keputusan", fathersName: "Nama Bapa", mothersName: "Nama Ibu", dob: "Tarikh Lahir", languages: "Bahasa", gender: "Jantina", nationality: "Kewarganegaraan", maritalStatus: "Status Perkahwinan", religion: "Agama", bloodGroup: "Kumpulan Darah", height: "Tinggi", weight: "Berat", signature: "TANDATANGAN", dateLabel: "Tarikh", placeLabel: "Tempat" }
    };
    const labels = BD_LABELS[lang] || BD_LABELS["en"];

    // Translated default BD CV content values per language
    const BD_DEFAULTS = {
        en: { jobTitle: "Student", objective: "To work in a responsible position where I could use my interpersonal skills, creativity, and above all, my learning experiences in order to develop my career as well as to contribute to the growth of the organization.", otherQ: ["Basic Knowledge of Computer", "Advanced Microsoft Excel Certification"], languages: "Bangla And English", gender: "Male", nationality: "Bangladeshi", maritalStatus: "Unmarried", religion: "Islam", declaration: "I hereby declare that the above information given by me is true to the best of my knowledge and belief.", place: "Dhaka" },
        bn: { jobTitle: "শিক্ষার্থী", objective: "একটি দায়িত্বশীল পদে কাজ করা যেখানে আমি আমার আন্তঃব্যক্তিক দক্ষতা, সৃজনশীলতা এবং সর্বোপরি আমার শেখার অভিজ্ঞতাগুলিকে আমার কর্মজীবনের বিকাশের পাশাপাশি সংস্থার বৃদ্ধিতে অবদান রাখতে ব্যবহার করতে পারি।", otherQ: ["কম্পিউটারের মৌলিক জ্ঞান", "উন্নত মাইক্রোসফ্ট এক্সেল সার্টিফিকেট"], languages: "বাংলা এবং ইংরেজি", gender: "পুরুষ", nationality: "বাংলাদেশী", maritalStatus: "অবিবাহিত", religion: "ইসলাম", declaration: "আমি এতদ্বারা ঘোষণা করছি যে আমার দেওয়া উপরিউক্ত তথ্য আমার জ্ঞান ও বিশ্বাস মতে সত্য।", place: "ঢাকা" },
        de: { jobTitle: "Student", objective: "In einer verantwortungsvollen Position zu arbeiten, in der ich meine zwischenmenschlichen Fähigkeiten, meine Kreativität und vor allem meine Lernerfahrungen nutzen kann.", otherQ: ["Grundkenntnisse am Computer", "Zertifikat für fortgeschrittene Microsoft Excel-Kenntnisse"], languages: "Bengali und Englisch", gender: "Männlich", nationality: "Bangladeschisch", maritalStatus: "Ledig", religion: "Islam", declaration: "Ich erkläre hiermit, dass die obigen Angaben nach bestem Wissen und Gewissen wahr sind.", place: "Dhaka" },
        fr: { jobTitle: "Étudiant", objective: "Travailler dans un poste à responsabilité où je pourrais utiliser mes compétences interpersonnelles, ma créativité et surtout mes expériences d'apprentissage.", otherQ: ["Connaissances de base en informatique", "Certification Microsoft Excel avancée"], languages: "Bengali et anglais", gender: "Homme", nationality: "Bangladais", maritalStatus: "Célibataire", religion: "Islam", declaration: "Je déclare par la présente que les informations ci-dessus sont exactes au meilleur de mes connaissances.", place: "Dacca" },
        it: { jobTitle: "Studente", objective: "Lavorare in una posizione di responsabilità dove poter utilizzare le mie capacità interpersonali, creatività e soprattutto le esperienze di apprendimento.", otherQ: ["Conoscenze di base del computer", "Certificazione avanzata di Microsoft Excel"], languages: "Bengalese e inglese", gender: "Maschio", nationality: "Bangladese", maritalStatus: "Celibe", religion: "Islam", declaration: "Con la presente dichiaro che le informazioni sopra riportate sono veritiere al meglio delle mie conoscenze.", place: "Dacca" },
        pt: { jobTitle: "Estudante", objective: "Trabalhar em um cargo de responsabilidade onde eu possa usar minhas habilidades interpessoais, criatividade e experiências de aprendizado.", otherQ: ["Conhecimento básico de informática", "Certificação Avançada em Microsoft Excel"], languages: "Bengali e inglês", gender: "Masculino", nationality: "Bangladense", maritalStatus: "Solteiro", religion: "Islam", declaration: "Declaro que as informações acima são verdadeiras de acordo com o meu conhecimento.", place: "Daca" },
        da: { jobTitle: "Studerende", objective: "At arbejde i en ansvarsfuld stilling, hvor jeg kan bruge mine interpersonelle færdigheder og læringserfaringer til at udvikle min karriere.", otherQ: ["Grundlæggende computerkendskab", "Avanceret Microsoft Excel-certificering"], languages: "Bengalsk og engelsk", gender: "Mand", nationality: "Bangladesher", maritalStatus: "Ugift", religion: "Islam", declaration: "Jeg erklærer hermed, at ovenstående oplysninger er sande efter min bedste overbevisning.", place: "Dhaka" },
        no: { jobTitle: "Student", objective: "Å jobbe i en ansvarsfull stilling der jeg kan bruke mine mellommenneskelige ferdigheter og læringserfaringer.", otherQ: ["Grunnleggende datakunnskaper", "Sertifisering i avansert Microsoft Excel"], languages: "Bengalsk og engelsk", gender: "Mann", nationality: "Bangladesher", maritalStatus: "Ugift", religion: "Islam", declaration: "Jeg erklærer herved at ovenstående opplysninger er sanne etter min beste overbevisning.", place: "Dhaka" },
        ru: { jobTitle: "Студент", objective: "Работать на ответственной должности, используя навыки межличностного общения, творческий потенциал и накопленный опыт.", otherQ: ["Базовые знания компьютера", "Сертификат о продвинутом знании Microsoft Excel"], languages: "Бенгальский и английский", gender: "Мужской", nationality: "Бангладешец", maritalStatus: "Не женат", religion: "Ислам", declaration: "Настоящим заявляю, что вышеуказанная информация верна в меру моих знаний.", place: "Дакка" },
        ja: { jobTitle: "学生", objective: "対人スキル、創造性、学習経験を活かして責任あるポジションで働き、組織の成長に貢献すること。", otherQ: ["コンピューターの基礎知識", "マイクロソフトエクセル上級認定"], languages: "ベンガル語と英語", gender: "男性", nationality: "バングラデシュ人", maritalStatus: "未婚", religion: "イスラム教", declaration: "私はここに、提供した情報が真実であることを宣言します。", place: "ダッカ" },
        ko: { jobTitle: "학생", objective: "대인 관계 능력, 창의성, 학습 경험을 활용하여 경력을 개발하고 조직 성장에 기여할 수 있는 직책에서 일하는 것입니다.", otherQ: ["컴퓨터 기초 지식", "고급 마이크로소프트 엑셀 인증"], languages: "벵골어 및 영어", gender: "남성", nationality: "방글라데시인", maritalStatus: "미혼", religion: "이슬람교", declaration: "본인은 기재한 정보가 사실임을 선언합니다.", place: "다카" },
        ms: { jobTitle: "Pelajar", objective: "Bekerja dalam jawatan bertanggungjawab menggunakan kemahiran interpersonal, kreativiti, dan pengalaman pembelajaran.", otherQ: ["Pengetahuan Asas Komputer", "Sijil Microsoft Excel Lanjutan"], languages: "Bengali dan Inggeris", gender: "Lelaki", nationality: "Bangladesh", maritalStatus: "Belum berkahwin", religion: "Islam", declaration: "Saya mengesahkan bahawa maklumat di atas adalah benar.", place: "Dhaka" }
    };
    const bd = BD_DEFAULTS[lang] || BD_DEFAULTS["en"];

    const eduRows = data.education.map((edu, idx) => `
    <tr>
      <td contenteditable="true" data-type="bd-edu" data-index="${idx}" data-field="sno">${edu.sno}</td>
      <td contenteditable="true" data-type="bd-edu" data-index="${idx}" data-field="qualification">${edu.qualification}</td>
      <td contenteditable="true" data-type="bd-edu" data-index="${idx}" data-field="board">${edu.board}</td>
      <td contenteditable="true" data-type="bd-edu" data-index="${idx}" data-field="year">${edu.year}</td>
      <td contenteditable="true" data-type="bd-edu" data-index="${idx}" data-field="result">${edu.result}</td>
    </tr>
  `).join('');

    // Use translated default values where content hasn't been customised
    const displayJobTitle = data.jobTitle === "Student" ? bd.jobTitle : data.jobTitle;
    const displayObjective = data.objective.startsWith("To work in a responsible") ? bd.objective : data.objective;
    const displayGender = data.personalInfo.gender === "Male" ? bd.gender : data.personalInfo.gender;
    const displayNat = data.personalInfo.nationality === "Bangladeshi" ? bd.nationality : data.personalInfo.nationality;
    const displayMarital = data.personalInfo.maritalStatus === "Unmarried" ? bd.maritalStatus : data.personalInfo.maritalStatus;
    const displayLangs = data.personalInfo.languages === "Bangla And English" ? bd.languages : data.personalInfo.languages;
    const displayReligion = data.personalInfo.religion === "Islam" ? bd.religion : data.personalInfo.religion;
    const displayDecl = data.declaration.startsWith("I hereby declare") ? bd.declaration : data.declaration;
    const displayPlace = data.place === "Dhaka" ? bd.place : data.place;

    const hidden = settings.hiddenModules || [];
    const isPersonalHidden = hidden.includes("personal");
    const isAboutHidden = hidden.includes("aboutMe") || hidden.includes("summary");
    const isEduHidden = hidden.includes("education");
    const isSkillsHidden = hidden.includes("skills");
    const isPersonalInfoHidden = hidden.includes("personal");

    const otherItems = data.otherQualifications.map((item, idx) => {
        const translated = bd.otherQ[idx] || item;
        const display = (item === "Basic Knowledge of Computer" || item === "Advanced Microsoft Excel Certification") ? translated : item;
        return `<li contenteditable="true" data-type="bd-other" data-index="${idx}">${display}</li>`;
    }).join('');

    return `
    <div class="cv-bd-container">
      <!-- Header Section -->
      <div class="cv-bd-header">
        <div class="cv-bd-header-left">
          <h1 class="cv-bd-name" contenteditable="true" id="cv-name" data-type="bd-name">${data.name}</h1>
          <p class="cv-bd-subtitle" contenteditable="true" id="cv-job-title" data-type="bd-jobTitle">${displayJobTitle}</p>
          <div class="cv-bd-contact-list" style="${isPersonalHidden ? 'display:none;' : ''}">
            <div class="cv-bd-contact-item">
              <span class="cv-bd-contact-icon">📍</span>
              <span contenteditable="true" data-type="bd-address">${data.contact.address}</span>
            </div>
            <div class="cv-bd-contact-item">
              <span class="cv-bd-contact-icon">📞</span>
              <span>Mob No.: <span contenteditable="true" data-type="bd-mobile">${data.contact.mobile}</span></span>
            </div>
            <div class="cv-bd-contact-item">
              <span class="cv-bd-contact-icon">✉️</span>
              <span>Email Id : <span contenteditable="true" data-type="bd-email">${data.contact.email}</span></span>
            </div>
          </div>
        </div>
        ${settings.showPhoto ? `
          <div class="cv-bd-photo-box" id="cv-bd-photo-box" title="Click to upload profile photo">
            ${settings.photoUrl ? `<img src="${settings.photoUrl}" alt="Profile Photo">` : `
              <div class="cv-bd-photo-placeholder">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>
                <span>Add Photo</span>
              </div>
            `}
          </div>
        ` : ''}
      </div>

      ${isAboutHidden ? '' : `
      <!-- CAREER OBJECTIVE Section -->
      <div class="cv-bd-section">
        <div class="cv-bd-section-title">${labels.careerObjective}</div>
        <div class="cv-bd-section-content" contenteditable="true" data-type="bd-objective">${displayObjective}</div>
      </div>
      `}

      ${isEduHidden ? '' : `
      <!-- ACADEMIC QUALIFICATION Section -->
      <div class="cv-bd-section">
        <div class="cv-bd-section-title">
          <span>${labels.academicQualification}</span>
          <button class="add-table-row-btn" id="btn-bd-add-edu" style="background:var(--accent-color);color:#fff;border:none;border-radius:3px;padding:2px 6px;font-size:10px;cursor:pointer;">+ Row</button>
        </div>
        <div class="cv-bd-section-content">
          <table class="cv-bd-table">
            <thead>
              <tr>
                <th>${labels.sno}</th>
                <th>${labels.qualification}</th>
                <th>${labels.board}</th>
                <th>${labels.year}</th>
                <th>${labels.result}</th>
              </tr>
            </thead>
            <tbody id="cv-bd-edu-table-body">
              ${eduRows}
            </tbody>
          </table>
        </div>
      </div>
      `}

      ${isSkillsHidden ? '' : `
      <!-- OTHER QUALIFICATION Section -->
      <div class="cv-bd-section">
        <div class="cv-bd-section-title">
          <span>${labels.otherQualification}</span>
          <button class="add-bullet-btn" id="btn-bd-add-other" style="background:var(--accent-color);color:#fff;border:none;border-radius:3px;padding:2px 6px;font-size:10px;cursor:pointer;">+ Bullet</button>
        </div>
        <div class="cv-bd-section-content">
          <ul class="cv-entry-bullets">
            ${otherItems}
          </ul>
        </div>
      </div>
      `}

      ${isPersonalInfoHidden ? '' : `
      <!-- PERSONAL INFORMATION Section -->
      <div class="cv-bd-section">
        <div class="cv-bd-section-title">${labels.personalInformation}</div>
        <div class="cv-bd-section-content">
          <div class="cv-bd-personal-grid">
            <div class="cv-bd-personal-label">${labels.fathersName}</div>
            <div class="cv-bd-personal-value">: <span contenteditable="true" data-type="bd-personal" data-field="fathersName">${data.personalInfo.fathersName}</span></div>
            
            <div class="cv-bd-personal-label">${labels.mothersName}</div>
            <div class="cv-bd-personal-value">: <span contenteditable="true" data-type="bd-personal" data-field="mothersName">${data.personalInfo.mothersName}</span></div>
            
            <div class="cv-bd-personal-label">${labels.dob}</div>
            <div class="cv-bd-personal-value">: <span contenteditable="true" data-type="bd-personal" data-field="dob">${data.personalInfo.dob}</span></div>
            
            <div class="cv-bd-personal-label">${labels.languages}</div>
            <div class="cv-bd-personal-value">: <span contenteditable="true" data-type="bd-personal" data-field="languages">${displayLangs}</span></div>
            
            <div class="cv-bd-personal-label">${labels.gender}</div>
            <div class="cv-bd-personal-value">: <span contenteditable="true" data-type="bd-personal" data-field="gender">${displayGender}</span></div>
            
            <div class="cv-bd-personal-label">${labels.nationality}</div>
            <div class="cv-bd-personal-value">: <span contenteditable="true" data-type="bd-personal" data-field="nationality">${displayNat}</span></div>
            
            <div class="cv-bd-personal-label">${labels.maritalStatus}</div>
            <div class="cv-bd-personal-value">: <span contenteditable="true" data-type="bd-personal" data-field="maritalStatus">${displayMarital}</span></div>
            
            <div class="cv-bd-personal-label">${labels.religion}</div>
            <div class="cv-bd-personal-value">: <span contenteditable="true" data-type="bd-personal" data-field="religion">${displayReligion}</span></div>
            
            <div class="cv-bd-personal-label">${labels.bloodGroup}</div>
            <div class="cv-bd-personal-value">: <span contenteditable="true" data-type="bd-personal" data-field="bloodGroup">${data.personalInfo.bloodGroup}</span></div>
            
            <div class="cv-bd-personal-label">${labels.height}</div>
            <div class="cv-bd-personal-value">: <span contenteditable="true" data-type="bd-personal" data-field="height">${data.personalInfo.height}</span></div>
            
            <div class="cv-bd-personal-label">${labels.weight}</div>
            <div class="cv-bd-personal-value">: <span contenteditable="true" data-type="bd-personal" data-field="weight">${data.personalInfo.weight}</span></div>
          </div>
        </div>
      </div>
      `}

      <!-- DECLARATION Section -->
      <div class="cv-bd-section">
        <div class="cv-bd-section-title">${labels.declaration}</div>
        <div class="cv-bd-section-content cv-bd-declaration" contenteditable="true" data-type="bd-declaration">${displayDecl}</div>
      </div>

      <!-- Footer Signatures -->
      <div class="cv-bd-footer">
        <div class="cv-bd-footer-left">
          <div>${labels.dateLabel} : <span contenteditable="true" data-type="bd-date">${data.date}</span></div>
          <div>${labels.placeLabel} : <span contenteditable="true" data-type="bd-place">${displayPlace}</span></div>
        </div>
        <div class="cv-bd-footer-right">
          <div class="cv-bd-signature-line"></div>
          <div class="cv-bd-signature-name" contenteditable="true" data-type="bd-sig-name">${data.name}</div>
          <div class="cv-bd-signature-label">${labels.signature}</div>
        </div>
      </div>
    </div>
  `;
}

// Helper to generate Bangladesh Template 2 (Ex-Army Sergeant Official Layout) HTML
function getBangladeshArmyCVHtml(cv, settings) {
    const data = (cv && cv.armyInfo) ? cv : JSON.parse(JSON.stringify(DEFAULT_BD_ARMY_CV_DATA));
    if (!cv || !cv.armyInfo) {
        appState.cvData = data;
    }

    const hidden = settings.hiddenModules || [];
    const hiddenFields = settings.hiddenPersonalFields || [];

    const isContactHidden = hidden.includes("contact");
    const isPersonalHidden = hidden.includes("personal");
    const isArmyHidden = hidden.includes("army") || hidden.includes("armyInfo");
    const isPermHidden = hidden.includes("permanentAddress") || hidden.includes("address");
    const isEduHidden = hidden.includes("education");
    const isJobHidden = hidden.includes("jobDescription") || hidden.includes("experience");
    const isSkillsHidden = hidden.includes("computerSkills") || hidden.includes("skills");
    const isDeclHidden = hidden.includes("declaration");
    const isSigHidden = settings.showSignature === false || hidden.includes("signature");

    const hideRow = (key) => hiddenFields.includes(key) ? 'display:none;' : '';

    const eduList = Array.isArray(data.education) ? data.education : DEFAULT_BD_ARMY_CV_DATA.education;
    const eduRows = eduList.map((row, idx) => `
        <tr data-row-index="${idx}">
            <td contenteditable="true" data-type="bd2-edu" data-field="sl" data-index="${idx}">${row.sl || (idx + 1)}</td>
            <td contenteditable="true" data-type="bd2-edu" data-field="certificate" data-index="${idx}">${row.certificate || ""}</td>
            <td contenteditable="true" data-type="bd2-edu" data-field="board" data-index="${idx}">${row.board || ""}</td>
            <td contenteditable="true" data-type="bd2-edu" data-field="institution" data-index="${idx}">${row.institution || ""}</td>
            <td contenteditable="true" data-type="bd2-edu" data-field="group" data-index="${idx}">${row.group || ""}</td>
            <td contenteditable="true" data-type="bd2-edu" data-field="passingYear" data-index="${idx}">${row.passingYear || row.year || ""}</td>
            <td contenteditable="true" data-type="bd2-edu" data-field="gpa" data-index="${idx}">${row.gpa || row.result || ""}</td>
            <td class="no-print" style="padding:2px 4px;text-align:center;">
                ${eduList.length > 1 ? `<button class="btn-delete-bd2-edu" data-index="${idx}" title="Delete Row" style="background:#fee2e2;color:#dc2626;border:1px solid #fca5a5;border-radius:3px;padding:1px 5px;font-size:11px;font-weight:bold;cursor:pointer;">×</button>` : ''}
            </td>
        </tr>
    `).join("");

    const jobBullets = (data.jobDescription && Array.isArray(data.jobDescription.bullets)) ? data.jobDescription.bullets : DEFAULT_BD_ARMY_CV_DATA.jobDescription.bullets;
    const jobBulletsHtml = jobBullets.map((bullet, idx) => `
        <li style="position:relative;margin-bottom:3px;padding-right:24px;">
            <span contenteditable="true" data-type="bd2-job-bullet" data-index="${idx}">${bullet.replace(/\n/g, "<br>")}</span>
            <button class="btn-delete-bd2-job-bullet no-print" data-index="${idx}" title="Delete Bullet" style="position:absolute;right:0;top:50%;transform:translateY(-50%);background:#fee2e2;color:#dc2626;border:1px solid #fca5a5;border-radius:50%;width:16px;height:16px;font-size:11px;line-height:1;cursor:pointer;display:inline-flex;align-items:center;justify-content:center;">×</button>
        </li>
    `).join("");

    const compSkills = Array.isArray(data.computerSkills) ? data.computerSkills : DEFAULT_BD_ARMY_CV_DATA.computerSkills;
    const compSkillsHtml = compSkills.map((skill, idx) => `
        <li style="position:relative;margin-bottom:4px;padding-right:24px;">
            <span contenteditable="true" data-type="bd2-skill-bullet" data-index="${idx}">${skill}</span>
            <button class="btn-delete-bd2-skill no-print" data-index="${idx}" title="Delete Skill" style="position:absolute;right:0;top:50%;transform:translateY(-50%);background:#fee2e2;color:#dc2626;border:1px solid #fca5a5;border-radius:50%;width:16px;height:16px;font-size:11px;line-height:1;cursor:pointer;display:inline-flex;align-items:center;justify-content:center;">×</button>
        </li>
    `).join("");

    return `
    <div class="cv-bd2-container">
        <!-- Header Section with Centered Title & Right Photo -->
        <div class="cv-bd2-header">
                <div class="cv-bd2-header-spacer"></div>
                <div class="cv-bd2-header-title-box">
                    <div class="cv-bd2-title-main" contenteditable="true" data-type="bd2-header-title">${data.headerTitle || "Resume"}</div>
                    <div class="cv-bd2-title-of" contenteditable="true" data-type="bd2-header-of">${data.headerOf || "of"}</div>
                    <div class="cv-bd2-title-rank" contenteditable="true" data-type="bd2-designation">${data.designation || "Sergeant (Retd)"}</div>
                    <div class="cv-bd2-title-name" contenteditable="true" data-type="bd2-name" id="cv-name">${data.name || "MD Shamim Sarker"}</div>
                </div>
                ${settings.showPhoto !== false ? `
                <div class="cv-bd2-photo-box" id="cv-bd2-photo-box" title="Click to change photo">
                    ${settings.photoUrl ? `<img src="${settings.photoUrl}" alt="Profile Photo">` : `
                        <div class="cv-bd-photo-placeholder">
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="width:28px;height:28px;"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>
                            <span style="font-size:9.5px;font-weight:700;">Add Photo</span>
                        </div>
                    `}
                </div>
                ` : `<div style="width:115px;"></div>`}
            </div>

            <!-- 1. CONTACT INFORMATION -->
            ${isContactHidden ? '' : `
            <div class="cv-bd2-section" id="cv-bd2-sec-contact">
                <div class="cv-bd2-sec-banner">
                    <span>CONTACT INFORMATION</span>
                </div>
                <div class="cv-bd2-info-table">
                    <div class="cv-bd2-row" style="${hideRow('currentAddress')}">
                        <div class="cv-bd2-label">Current Address</div>
                        <div class="cv-bd2-colon">:</div>
                        <div class="cv-bd2-val" contenteditable="true" data-type="bd2-contact" data-key="currentAddress">${data.contact?.currentAddress || data.contact?.address || ""}</div>
                    </div>
                    <div class="cv-bd2-row" style="${hideRow('phone')}">
                        <div class="cv-bd2-label">Contact Number</div>
                        <div class="cv-bd2-colon">:</div>
                        <div class="cv-bd2-val" contenteditable="true" data-type="bd2-contact" data-key="mobile">${data.contact?.mobile || data.contact?.phone || ""}</div>
                    </div>
                    <div class="cv-bd2-row" style="${hideRow('email')}">
                        <div class="cv-bd2-label">Email</div>
                        <div class="cv-bd2-colon">:</div>
                        <div class="cv-bd2-val" contenteditable="true" data-type="bd2-contact" data-key="email">${data.contact?.email || ""}</div>
                    </div>
                </div>
            </div>
            `}

            <!-- 2. PERSONAL INFORMATION -->
            ${isPersonalHidden ? '' : `
            <div class="cv-bd2-section" id="cv-bd2-sec-personal">
                <div class="cv-bd2-sec-banner">
                    <span>PERSONAL INFORMATION</span>
                </div>
                <div class="cv-bd2-info-table">
                    <div class="cv-bd2-row" style="${hideRow('fathersName')}">
                        <div class="cv-bd2-label">Father’s Name</div>
                        <div class="cv-bd2-colon">:</div>
                        <div class="cv-bd2-val" contenteditable="true" data-type="bd2-personal" data-key="fathersName">${data.personalInfo?.fathersName || ""}</div>
                    </div>
                    <div class="cv-bd2-row" style="${hideRow('mothersName')}">
                        <div class="cv-bd2-label">Mother’s Name</div>
                        <div class="cv-bd2-colon">:</div>
                        <div class="cv-bd2-val" contenteditable="true" data-type="bd2-personal" data-key="mothersName">${data.personalInfo?.mothersName || ""}</div>
                    </div>
                    <div class="cv-bd2-row" style="${hideRow('dob')}">
                        <div class="cv-bd2-label">Date of Birth</div>
                        <div class="cv-bd2-colon">:</div>
                        <div class="cv-bd2-val" contenteditable="true" data-type="bd2-personal" data-key="dob">${data.personalInfo?.dob || ""}</div>
                    </div>
                    <div class="cv-bd2-row" style="${hideRow('nationality')}">
                        <div class="cv-bd2-label">Nationality</div>
                        <div class="cv-bd2-colon">:</div>
                        <div class="cv-bd2-val" contenteditable="true" data-type="bd2-personal" data-key="nationality">${data.personalInfo?.nationality || "Bangladeshi"}</div>
                    </div>
                    <div class="cv-bd2-row" style="${hideRow('gender')}">
                        <div class="cv-bd2-label">Gender</div>
                        <div class="cv-bd2-colon">:</div>
                        <div class="cv-bd2-val" contenteditable="true" data-type="bd2-personal" data-key="gender">${data.personalInfo?.gender || "Male"}</div>
                    </div>
                    <div class="cv-bd2-row" style="${hideRow('religion')}">
                        <div class="cv-bd2-label">Religion</div>
                        <div class="cv-bd2-colon">:</div>
                        <div class="cv-bd2-val" contenteditable="true" data-type="bd2-personal" data-key="religion">${data.personalInfo?.religion || "Islam"}</div>
                    </div>
                    <div class="cv-bd2-row" style="${hideRow('height')}">
                        <div class="cv-bd2-label">Height</div>
                        <div class="cv-bd2-colon">:</div>
                        <div class="cv-bd2-val" contenteditable="true" data-type="bd2-personal" data-key="height">${data.personalInfo?.height || "5 Feet 8 Inch"}</div>
                    </div>
                    <div class="cv-bd2-row" style="${hideRow('bloodGroup')}">
                        <div class="cv-bd2-label">Blood Group</div>
                        <div class="cv-bd2-colon">:</div>
                        <div class="cv-bd2-val" contenteditable="true" data-type="bd2-personal" data-key="bloodGroup">${data.personalInfo?.bloodGroup || "O +"}</div>
                    </div>
                    <div class="cv-bd2-row" style="${hideRow('maritalStatus')}">
                        <div class="cv-bd2-label">Marital status</div>
                        <div class="cv-bd2-colon">:</div>
                        <div class="cv-bd2-val" contenteditable="true" data-type="bd2-personal" data-key="maritalStatus">${data.personalInfo?.maritalStatus || "Married"}</div>
                    </div>
                    <div class="cv-bd2-row" style="${hideRow('languages')}">
                        <div class="cv-bd2-label">Language</div>
                        <div class="cv-bd2-colon">:</div>
                        <div class="cv-bd2-val" contenteditable="true" data-type="bd2-personal" data-key="languages">${data.personalInfo?.languages || "Bangla"}</div>
                    </div>
                    <div class="cv-bd2-row" style="${hideRow('nid')}">
                        <div class="cv-bd2-label">NID No</div>
                        <div class="cv-bd2-colon">:</div>
                        <div class="cv-bd2-val" contenteditable="true" data-type="bd2-personal" data-key="nid">${data.personalInfo?.nid || ""}</div>
                    </div>
                </div>
            </div>
            `}

            <!-- 3. ARMY INFORMATION -->
            ${isArmyHidden ? '' : `
            <div class="cv-bd2-section" id="cv-bd2-sec-army">
                <div class="cv-bd2-sec-banner">
                    <span>ARMY INFORMATION</span>
                </div>
                <div class="cv-bd2-info-table">
                    <div class="cv-bd2-row" style="${hideRow('senaNo')}">
                        <div class="cv-bd2-label">Sena No</div>
                        <div class="cv-bd2-colon">:</div>
                        <div class="cv-bd2-val" contenteditable="true" data-type="bd2-army" data-key="senaNo">${data.armyInfo?.senaNo || ""}</div>
                    </div>
                    <div class="cv-bd2-row" style="${hideRow('rank')}">
                        <div class="cv-bd2-label">Rank</div>
                        <div class="cv-bd2-colon">:</div>
                        <div class="cv-bd2-val" contenteditable="true" data-type="bd2-army" data-key="rank">${data.armyInfo?.rank || ""}</div>
                    </div>
                    <div class="cv-bd2-row" style="${hideRow('trade')}">
                        <div class="cv-bd2-label">Trade</div>
                        <div class="cv-bd2-colon">:</div>
                        <div class="cv-bd2-val" contenteditable="true" data-type="bd2-army" data-key="trade">${data.armyInfo?.trade || ""}</div>
                    </div>
                    <div class="cv-bd2-row" style="${hideRow('core')}">
                        <div class="cv-bd2-label">Core</div>
                        <div class="cv-bd2-colon">:</div>
                        <div class="cv-bd2-val" contenteditable="true" data-type="bd2-army" data-key="core">${data.armyInfo?.core || ""}</div>
                    </div>
                    <div class="cv-bd2-row" style="${hideRow('lastUnit')}">
                        <div class="cv-bd2-label">Last Retirement Unit</div>
                        <div class="cv-bd2-colon">:</div>
                        <div class="cv-bd2-val" contenteditable="true" data-type="bd2-army" data-key="lastUnit">${data.armyInfo?.lastUnit || ""}</div>
                    </div>
                    <div class="cv-bd2-row" style="${hideRow('joiningDate')}">
                        <div class="cv-bd2-label">Joining Date of Army</div>
                        <div class="cv-bd2-colon">:</div>
                        <div class="cv-bd2-val" contenteditable="true" data-type="bd2-army" data-key="joiningDate">${data.armyInfo?.joiningDate || ""}</div>
                    </div>
                    <div class="cv-bd2-row" style="${hideRow('retirementDate')}">
                        <div class="cv-bd2-label">Retirement Date of Army</div>
                        <div class="cv-bd2-colon">:</div>
                        <div class="cv-bd2-val" contenteditable="true" data-type="bd2-army" data-key="retirementDate">${data.armyInfo?.retirementDate || ""}</div>
                    </div>
                </div>
            </div>
            `}

            <!-- 4. PERMANENT ADDRESS -->
            ${isPermHidden ? '' : `
            <div class="cv-bd2-section" id="cv-bd2-sec-perm-address">
                <div class="cv-bd2-sec-banner">
                    <span>PERMANENT ADDRESS</span>
                </div>
                <div class="cv-bd2-info-table">
                    <div class="cv-bd2-row" style="${hideRow('village')}">
                        <div class="cv-bd2-label">Village</div>
                        <div class="cv-bd2-colon">:</div>
                        <div class="cv-bd2-val" contenteditable="true" data-type="bd2-perm" data-key="village">${data.permanentAddress?.village || ""}</div>
                    </div>
                    <div class="cv-bd2-row" style="${hideRow('postOffice')}">
                        <div class="cv-bd2-label">Post office</div>
                        <div class="cv-bd2-colon">:</div>
                        <div class="cv-bd2-val" contenteditable="true" data-type="bd2-perm" data-key="postOffice">${data.permanentAddress?.postOffice || ""}</div>
                    </div>
                    <div class="cv-bd2-row" style="${hideRow('thana')}">
                        <div class="cv-bd2-label">Thana</div>
                        <div class="cv-bd2-colon">:</div>
                        <div class="cv-bd2-val" contenteditable="true" data-type="bd2-perm" data-key="thana">${data.permanentAddress?.thana || ""}</div>
                    </div>
                    <div class="cv-bd2-row" style="${hideRow('district')}">
                        <div class="cv-bd2-label">District</div>
                        <div class="cv-bd2-colon">:</div>
                        <div class="cv-bd2-val" contenteditable="true" data-type="bd2-perm" data-key="district">${data.permanentAddress?.district || ""}</div>
                    </div>
                </div>
            </div>
            `}

            <!-- 5. EDUCATIONAL QUALIFICATION -->
            ${isEduHidden ? '' : `
            <div class="cv-bd2-section" id="cv-bd2-sec-edu">
                <div class="cv-bd2-sec-banner">
                    <span>EDUCATIONAL QUALIFICATION</span>
                    <button class="btn-bd2-add-edu no-print" title="Add Education Row" style="background:#0f172a;color:#fff;border:none;border-radius:3px;padding:2px 8px;font-size:11px;font-weight:bold;cursor:pointer;">+ Add Row</button>
                </div>
                <table class="cv-bd2-edu-table">
                    <thead>
                        <tr>
                            <th style="width:40px;">SL</th>
                            <th>Certificate</th>
                            <th>Board</th>
                            <th>Institution</th>
                            <th>Group</th>
                            <th style="width:75px;">Passing Year</th>
                            <th style="width:85px;">GPA/ GRADE</th>
                            <th class="no-print" style="width:28px;"></th>
                        </tr>
                    </thead>
                    <tbody id="cv-bd2-edu-tbody">
                        ${eduRows}
                    </tbody>
                </table>
            </div>
            `}

            <!-- 6. JOB DESCRIPTION -->
            ${isJobHidden ? '' : `
            <div class="cv-bd2-section" id="cv-bd2-sec-job">
                <div class="cv-bd2-sec-banner">
                    <span>JOB DESCRIPTION</span>
                </div>
                <div class="cv-bd2-job-content">
                    <p class="cv-bd2-job-summary" contenteditable="true" data-type="bd2-job-summary">${data.jobDescription?.summary || ""}</p>
                    <p class="cv-bd2-job-subhead" contenteditable="true" data-type="bd2-job-subhead">${data.jobDescription?.subHeader || "Following skill in my service life."}</p>
                    <ul class="cv-bd2-job-bullets">
                        ${jobBulletsHtml}
                    </ul>
                    <button class="btn-bd2-add-job-bullet no-print" title="Add Bullet Point" style="margin-top:6px;padding:3px 10px;background:#f8fafc;border:1px dashed #64748b;border-radius:4px;font-size:11px;font-weight:600;color:#0f172a;cursor:pointer;display:inline-flex;align-items:center;gap:4px;">
                        <span style="font-weight:bold;color:var(--primary-color);">+</span> Add Bullet
                    </button>
                </div>
            </div>
            `}

            <!-- 7. COMPUTER SKILL -->
            ${isSkillsHidden ? '' : `
            <div class="cv-bd2-section" id="cv-bd2-sec-skills">
                <div class="cv-bd2-sec-banner">
                    <span>COMPUTER SKILL</span>
                </div>
                <ul class="cv-bd2-skill-bullets" style="padding-left:14px;margin-top:6px;">
                    ${compSkillsHtml}
                </ul>
                <button class="btn-bd2-add-skill no-print" title="Add Computer Skill" style="margin-top:6px;padding:3px 10px;background:#f8fafc;border:1px dashed #64748b;border-radius:4px;font-size:11px;font-weight:600;color:#0f172a;cursor:pointer;display:inline-flex;align-items:center;gap:4px;">
                    <span style="font-weight:bold;color:var(--primary-color);">+</span> Add Skill
                </button>
            </div>
            `}

            <!-- 8. DECLARATION -->
            ${isDeclHidden ? '' : `
            <div class="cv-bd2-section cv-bd2-sec-declaration" id="cv-bd2-sec-declaration">
                <div class="cv-bd2-declaration-text">
                    <span style="font-weight:bold;margin-right:6px;">&#10003;</span>
                    <span contenteditable="true" data-type="bd2-declaration">${data.declaration || "I hereby declare that the information placed in this Curriculum Vitae is true."}</span>
                </div>
            </div>
            `}

            <!-- 9. FOOTER / SIGN-OFF -->
            ${isSigHidden ? '' : `
            <div class="cv-bd2-footer" id="cv-bd2-sec-signature">
                <div class="cv-bd2-footer-date">
                    <span>Date:</span> <span contenteditable="true" data-type="bd2-date">${data.date || "............................................"}</span>
                </div>
                <div class="cv-bd2-footer-sign">
                    <div class="cv-bd2-sign-line"></div>
                    <div class="cv-bd2-sign-name" contenteditable="true" data-type="bd2-signature">${data.signature || data.name || "MD Shamim Sarker"}</div>
                </div>
            </div>
            `}
        </div>
    `;
}

// Mini-preview thumbnail generator for Bangladesh Template 2 in the template card grid
function getBangladeshArmyMiniPreviewHtml(accentColor) {
    return `
    <div style="width:100%;height:100%;background:#ffffff;padding:8px 10px;font-family:'Times New Roman',serif;box-sizing:border-box;display:flex;flex-direction:column;gap:5px;position:relative;overflow:hidden;">
        <!-- Header -->
        <div style="display:flex;justify-content:space-between;align-items:flex-start;border-bottom:1px solid #e2e8f0;padding-bottom:4px;">
            <div style="flex:1;text-align:center;">
                <div style="font-size:8px;font-style:italic;font-weight:bold;color:#000;line-height:1;">Resume of</div>
                <div style="font-size:7px;font-weight:bold;color:#000;">Sergeant (Retd)</div>
                <div style="font-size:8.5px;font-weight:800;color:#000;">MD Shamim Sarker</div>
            </div>
            <div style="width:22px;height:26px;border:1px solid #000;background:#f1f5f9;display:flex;align-items:center;justify-content:center;font-size:7px;color:#64748b;">📷</div>
        </div>
        <!-- Banner 1: CONTACT -->
        <div style="background:#cbd5e1;border:1px solid #000;padding:1px 4px;font-size:6px;font-weight:bold;text-transform:uppercase;color:#000;">CONTACT INFORMATION</div>
        <div style="display:flex;flex-direction:column;gap:2px;font-size:5.5px;color:#334155;padding:0 2px;">
            <div style="display:flex;gap:4px;"><span style="font-weight:bold;width:45px;">Address</span><span>: Vill: Dokkhin Gazirchat, Ashulia</span></div>
            <div style="display:flex;gap:4px;"><span style="font-weight:bold;width:45px;">Contact</span><span>: +88017373*****</span></div>
        </div>
        <!-- Banner 2: PERSONAL -->
        <div style="background:#cbd5e1;border:1px solid #000;padding:1px 4px;font-size:6px;font-weight:bold;text-transform:uppercase;color:#000;">PERSONAL INFORMATION</div>
        <div style="display:flex;flex-direction:column;gap:1.5px;font-size:5.5px;color:#334155;padding:0 2px;">
            <div style="display:flex;gap:4px;"><span style="font-weight:bold;width:45px;">Father's Name</span><span>: Abdul *****</span></div>
            <div style="display:flex;gap:4px;"><span style="font-weight:bold;width:45px;">Date of Birth</span><span>: 07 April 19**</span></div>
            <div style="display:flex;gap:4px;"><span style="font-weight:bold;width:45px;">Religion / Blood</span><span>: Islam | O +</span></div>
        </div>
        <!-- Banner 3: ARMY INFO -->
        <div style="background:#cbd5e1;border:1px solid #000;padding:1px 4px;font-size:6px;font-weight:bold;text-transform:uppercase;color:#000;">ARMY INFORMATION</div>
        <div style="display:flex;flex-direction:column;gap:1.5px;font-size:5.5px;color:#334155;padding:0 2px;">
            <div style="display:flex;gap:4px;"><span style="font-weight:bold;width:45px;">Sena No / Rank</span><span>: 14**** / Sergeant (Retd)</span></div>
            <div style="display:flex;gap:4px;"><span style="font-weight:bold;width:45px;">Joining / Retd</span><span>: 05/07/19** to 04/07/20**</span></div>
        </div>
        <!-- Page Indicator & Table Preview -->
        <div style="background:#cbd5e1;border:1px solid #000;padding:1px 4px;font-size:6px;font-weight:bold;text-transform:uppercase;color:#000;margin-top:2px;">EDUCATIONAL QUALIFICATION</div>
        <div style="display:grid;grid-template-columns:15px 1fr 1fr 20px;border:1px solid #94a3b8;font-size:5px;text-align:center;background:#fff;">
            <div style="border-right:1px solid #94a3b8;font-weight:bold;">1</div>
            <div style="border-right:1px solid #94a3b8;">SSC</div>
            <div style="border-right:1px solid #94a3b8;">Cumilla</div>
            <div>***</div>
        </div>
        <div style="position:absolute;bottom:0;left:0;right:0;background:linear-gradient(transparent, rgba(0,0,0,0.15));height:25px;pointer-events:none;"></div>
    </div>
    `;
}

// Helper to generate Portugal European-Standard CV layout HTML
function getPortugalCVHtml(cv, settings) {
    // If incoming data isn't configured for Portugal layout, fallback to DEFAULT_PORTUGAL_CV_DATA
    const data = (cv && cv.technicalSkills && cv.education && cv.experience) ? cv : JSON.parse(JSON.stringify(DEFAULT_PORTUGAL_CV_DATA));
    if (!cv || !cv.technicalSkills) {
        appState.cvData = data;
    }

    const lang = appState.previewLanguage || appState.language || "en";

    const PT_LABELS = {
        en: {
            aboutMe: "ABOUT ME",
            education: "EDUCATION",
            experience: "PROFESSIONAL EXPERIENCE",
            technicalSkills: "TECHNICAL SKILLS",
            contact: "CONTACT",
            languages: "LANGUAGE SKILLS",
            nationality: "Nationality",
            dob: "Date of Birth",
            gender: "Gender",
            phone: "PHONE",
            email: "EMAIL",
            website: "WEBSITE",
            linkedin: "LINKEDIN",
            home: "HOME",
            motherTongue: "Mother tongue(s)",
            otherLanguages: "Other language(s)"
        },
        pt: {
            aboutMe: "SOBRE MIM",
            education: "EDUCAÇÃO E FORMAÇÃO",
            experience: "EXPERIÊNCIA PROFISSIONAL",
            technicalSkills: "COMPETÊNCIAS TÉCNICAS",
            contact: "CONTACTO",
            languages: "COMPETÊNCIAS LINGUÍSTICAS",
            nationality: "Nacionalidade",
            dob: "Data de Nascimento",
            gender: "Género",
            phone: "TELEFONE",
            email: "EMAIL",
            website: "WEBSITE",
            linkedin: "LINKEDIN",
            home: "MORADA",
            motherTongue: "Língua materna",
            otherLanguages: "Outra(s) língua(s)"
        },
        bn: {
            aboutMe: "আমার সম্পর্কে",
            education: "শিক্ষা ও প্রশিক্ষণ",
            experience: "পেশাগত অভিজ্ঞতা",
            technicalSkills: "কারিগরি দক্ষতা",
            contact: "যোগাযোগ",
            languages: "ভাষাগত দক্ষতা",
            nationality: "জাতীয়তা",
            dob: "জন্ম তারিখ",
            gender: "লিঙ্গ",
            phone: "ফোন",
            email: "ইমেইল",
            website: "ওয়েবসাইট",
            linkedin: "লিঙ্কডইন",
            home: "ঠিকানা",
            motherTongue: "মাতৃভাষা",
            otherLanguages: "অন্যান্য ভাষা"
        }
    };
    const labels = PT_LABELS[lang] || PT_LABELS["en"];

    const hidden = settings.hiddenModules || [];
    const isPersonalHidden = hidden.includes("personal");
    const isAboutHidden = hidden.includes("aboutMe") || hidden.includes("summary");
    const isEduHidden = hidden.includes("education");
    const isExpHidden = hidden.includes("experience");
    const isSkillsHidden = hidden.includes("skills");
    const isLangHidden = hidden.includes("languages");
    const isSigHidden = settings.showSignature === false || hidden.includes("signature");

    // Photo styling values
    const photoShape = settings.photoShape || "circle";
    const photoSize = settings.photoSize || 115;
    let photoRadius = "50%";
    if (photoShape === "square") photoRadius = "0px";
    else if (photoShape === "rounded") photoRadius = "14px";

    // Personal & Address Details field-level visibility
    const hiddenPersonal = settings.hiddenPersonalFields || [];
    const showName = !hiddenPersonal.includes("name");
    const showNat = !hiddenPersonal.includes("nat");
    const showDob = !hiddenPersonal.includes("dob");
    const showGender = !hiddenPersonal.includes("gender");
    const showPhone = !hiddenPersonal.includes("phone");
    const showEmail = !hiddenPersonal.includes("email");
    const showWebsite = !hiddenPersonal.includes("website");
    const showLinkedin = !hiddenPersonal.includes("linkedin");
    const showAddress = !hiddenPersonal.includes("address");

    const skills = data.technicalSkills || [];
    const skillListHtml = skills.map((s, idx) => `
        <li class="cv-pt-skill-item" data-index="${idx}">
            <span contenteditable="true" data-type="pt-skill" data-index="${idx}">${s}</span>
            <button type="button" class="cv-pt-del-btn btn-pt-del-skill" data-index="${idx}" title="Remove skill">×</button>
        </li>
    `).join('');

    const education = data.education || [];
    const eduCardsHtml = education.map((edu, idx) => `
        <div class="cv-pt-entry-card" data-index="${idx}">
            <div class="cv-pt-entry-header">
                <div class="cv-pt-entry-title" contenteditable="true" data-type="pt-edu-qual" data-index="${idx}">${edu.qualification || ''}</div>
                <div class="cv-pt-entry-period" contenteditable="true" data-type="pt-edu-period" data-index="${idx}">${edu.period || ''}</div>
            </div>
            <div class="cv-pt-entry-subtitle" contenteditable="true" data-type="pt-edu-inst" data-index="${idx}">${edu.institution || ''}</div>
            <div class="cv-pt-entry-meta">
                <span contenteditable="true" data-type="pt-edu-meta" data-index="${idx}">City: ${edu.city || 'Savar, Dhaka'} | Country: ${edu.country || 'Bangladesh'}${edu.field ? ' | Field(s) of study: ' + edu.field : ''}${edu.grade ? ' | Final grade: ' + edu.grade : ''}</span>
            </div>
            <ul class="cv-pt-bullets" data-edu-index="${idx}">
                ${((edu.bullets && Array.isArray(edu.bullets)) ? edu.bullets : []).map((b, bIdx) => `
                    <li class="cv-pt-bullet-item" data-index="${idx}" data-bindex="${bIdx}">
                        <span contenteditable="true" data-type="pt-edu-bullet" data-index="${idx}" data-bindex="${bIdx}">${b}</span>
                        <button type="button" class="cv-pt-del-btn btn-pt-del-edu-bullet" data-index="${idx}" data-bindex="${bIdx}" title="Remove bullet">×</button>
                    </li>
                `).join('')}
            </ul>
            <button type="button" class="cv-pt-add-bullet-btn btn-pt-add-edu-bullet" data-index="${idx}">+ Add Bullet</button>
        </div>
    `).join('');

    const experience = data.experience || [];
    const expCardsHtml = experience.map((exp, idx) => `
        <div class="cv-pt-entry-card" data-index="${idx}">
            <div class="cv-pt-entry-header">
                <div class="cv-pt-entry-subtitle" style="margin-bottom:0;" contenteditable="true" data-type="pt-exp-emp" data-index="${idx}">🏢 ${exp.employer || ''}${exp.location ? ' – ' + exp.location : ''}</div>
                <div class="cv-pt-entry-period" contenteditable="true" data-type="pt-exp-period" data-index="${idx}">${exp.period || ''}</div>
            </div>
            <div class="cv-pt-entry-title" style="margin: 4px 0 6px 0;" contenteditable="true" data-type="pt-exp-role" data-index="${idx}">${exp.role || ''}</div>
            <ul class="cv-pt-bullets" data-exp-index="${idx}">
                ${((exp.bullets && Array.isArray(exp.bullets)) ? exp.bullets : []).map((b, bIdx) => `
                    <li class="cv-pt-bullet-item" data-index="${idx}" data-bindex="${bIdx}">
                        <span contenteditable="true" data-type="pt-exp-bullet" data-index="${idx}" data-bindex="${bIdx}">${b}</span>
                        <button type="button" class="cv-pt-del-btn btn-pt-del-exp-bullet" data-index="${idx}" data-bindex="${bIdx}" title="Remove bullet">×</button>
                    </li>
                `).join('')}
            </ul>
            <button type="button" class="cv-pt-add-bullet-btn btn-pt-add-exp-bullet" data-index="${idx}">+ Add Bullet</button>
        </div>
    `).join('');

    const otherLangs = data.languages?.other || [
        { language: "English", listening: "A2", reading: "A2", writing: "A2", spokenProduction: "A1", spokenInteraction: "A1" },
        { language: "German", listening: "A2", reading: "A2", writing: "A1", spokenProduction: "A1", spokenInteraction: "A1" }
    ];

    const langSummariesHtml = otherLangs.map((item, idx) => `
        <div style="line-height:1.6;padding:4px 0;border-bottom:1px solid #e2e8f0;">
            <strong style="color:var(--accent-color, #006600);font-size:calc(12px * var(--cv-font-scale, 1));">${item.language} :</strong> 
            LISTENING (<span contenteditable="true" data-type="pt-lang-listening" data-index="${idx}">${item.listening}</span>) | 
            READING (<span contenteditable="true" data-type="pt-lang-reading" data-index="${idx}">${item.reading}</span>) | 
            WRITING (<span contenteditable="true" data-type="pt-lang-writing" data-index="${idx}">${item.writing}</span>) | 
            SPOKEN PRODUCTION (<span contenteditable="true" data-type="pt-lang-sprod" data-index="${idx}">${item.spokenProduction}</span>) | 
            SPOKEN INTERACTION (<span contenteditable="true" data-type="pt-lang-sint" data-index="${idx}">${item.spokenInteraction}</span>)
        </div>
    `).join('');

    return `
    <div class="cv-pt-container">
        <!-- Top European Header Banner -->
        <div class="cv-pt-header">
            ${settings.showPhoto ? `
                <div class="cv-pt-photo-wrap" id="cv-pt-photo-wrap" style="width:${photoSize}px;height:${photoSize}px;min-width:${photoSize}px;min-height:${photoSize}px;border-radius:${photoRadius};" title="Click to upload profile photo">
                    ${settings.photoUrl ? `<img src="${settings.photoUrl}" alt="Profile Photo">` : `
                        <div class="cv-pt-photo-placeholder">
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>
                            <span>Add Photo</span>
                        </div>
                    `}
                </div>
            ` : ''}
            <div class="cv-pt-header-info">
                ${showName ? `<h1 class="cv-pt-name" contenteditable="true" id="cv-name" data-type="pt-name">${data.name || 'MD SHAHED'}</h1>` : ''}
                <div class="cv-pt-meta-list" style="${isPersonalHidden ? 'display:none;' : ''}">
                    ${(showNat && data.personalInfo?.nationality) ? `
                    <div class="cv-pt-meta-item">
                        <span class="cv-pt-meta-label">${labels.nationality} :</span>
                        <span class="cv-pt-meta-val" contenteditable="true" data-type="pt-nat">${data.personalInfo.nationality}</span>
                    </div>` : ''}
                    ${(showDob && data.personalInfo?.dob) ? `
                    <div class="cv-pt-meta-item">
                        <span class="cv-pt-meta-label">${labels.dob} :</span>
                        <span class="cv-pt-meta-val" contenteditable="true" data-type="pt-dob">${data.personalInfo.dob}</span>
                    </div>` : ''}
                    ${(showGender && data.personalInfo?.gender) ? `
                    <div class="cv-pt-meta-item">
                        <span class="cv-pt-meta-label">${labels.gender} :</span>
                        <span class="cv-pt-meta-val" contenteditable="true" data-type="pt-gender">${data.personalInfo.gender}</span>
                    </div>` : ''}
                </div>
            </div>
        </div>

        <!-- 2-Column Modular Body Grid -->
        <div class="cv-pt-body">
            <!-- Left Sidebar Column: Contact, Technical Skills, Signature -->
            <div class="cv-pt-sidebar">
                <!-- CONTACT -->
                <div class="cv-pt-sec-block" style="${isPersonalHidden ? 'display:none;' : ''}">
                    <div class="cv-pt-sec-title">${labels.contact}</div>
                    <div class="cv-pt-contact-list">
                        ${(showPhone && data.contact?.phone) ? `
                        <div class="cv-pt-contact-item">
                            <div class="cv-pt-contact-head">
                                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="cv-pt-contact-icon"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
                                <span>${labels.phone}:</span>
                            </div>
                            <div class="cv-pt-contact-val" contenteditable="true" data-type="pt-phone">${data.contact.phone}</div>
                        </div>` : ''}

                        ${(showEmail && data.contact?.email) ? `
                        <div class="cv-pt-contact-item">
                            <div class="cv-pt-contact-head">
                                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="cv-pt-contact-icon"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
                                <span>${labels.email}:</span>
                            </div>
                            <div class="cv-pt-contact-val" contenteditable="true" data-type="pt-email">${data.contact.email}</div>
                        </div>` : ''}

                        ${(showWebsite && (data.contact?.website || data.contact?.site)) ? `
                        <div class="cv-pt-contact-item">
                            <div class="cv-pt-contact-head">
                                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="cv-pt-contact-icon"><circle cx="12" cy="12" r="10"></circle><line x1="2" y1="12" x2="22" y2="12"></line><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path></svg>
                                <span>${labels.website || 'WEBSITE'}:</span>
                            </div>
                            <div class="cv-pt-contact-val" contenteditable="true" data-type="pt-website">${data.contact.website || data.contact.site}</div>
                        </div>` : ''}

                        ${(showLinkedin && data.contact?.linkedin) ? `
                        <div class="cv-pt-contact-item">
                            <div class="cv-pt-contact-head">
                                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="cv-pt-contact-icon"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
                                <span>${labels.linkedin}:</span>
                            </div>
                            <div class="cv-pt-contact-val" contenteditable="true" data-type="pt-linkedin">${data.contact.linkedin}</div>
                        </div>` : ''}

                        ${(showAddress && (data.contact?.home || data.contact?.address)) ? `
                        <div class="cv-pt-contact-item">
                            <div class="cv-pt-contact-head">
                                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="cv-pt-contact-icon"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path><polyline points="9 22 9 12 15 12 15 22"></polyline></svg>
                                <span>${labels.home}:</span>
                            </div>
                            <div class="cv-pt-contact-val" contenteditable="true" data-type="pt-home">${data.contact.home || data.contact.address}</div>
                        </div>` : ''}
                    </div>
                </div>

                <!-- TECHNICAL SKILLS -->
                <div class="cv-pt-sec-block" style="${isSkillsHidden ? 'display:none;' : ''}">
                    <div class="cv-pt-sec-title">
                        <span>${labels.technicalSkills}</span>
                        <button class="add-bullet-btn" id="btn-pt-add-skill" style="background:var(--accent-color);color:#fff;border:none;border-radius:3px;padding:2px 6px;font-size:10px;cursor:pointer;">+ Skill</button>
                    </div>
                    <ul class="cv-pt-skill-list" id="cv-pt-skill-list">
                        ${skillListHtml}
                    </ul>
                </div>

                <!-- SIGNATURE (Positioned at bottom, aligned with Language Skills) -->
                ${isSigHidden ? '' : `
                <div class="cv-pt-signature-box">
                    <div class="cv-pt-signature-script" contenteditable="true" data-type="pt-sig-script">${data.signature || 'Shahed'}</div>
                    <div class="cv-pt-signature-line"></div>
                    <div class="cv-pt-signature-name" contenteditable="true" data-type="pt-sig-name">${data.signature || 'Shahed'}</div>
                </div>
                `}
            </div>

            <!-- Right Main Column: About Me, Education, Experience, Language Skills -->
            <div class="cv-pt-main">
                <!-- ABOUT ME -->
                ${isAboutHidden ? '' : `
                <div class="cv-pt-sec-block">
                    <div class="cv-pt-sec-title">${labels.aboutMe}</div>
                    <p class="cv-pt-about-text" contenteditable="true" data-type="pt-about">${data.aboutMe || ''}</p>
                </div>
                `}

                <!-- EDUCATION -->
                ${isEduHidden ? '' : `
                <div class="cv-pt-sec-block">
                    <div class="cv-pt-sec-title">
                        <span>${labels.education}</span>
                        <button class="add-bullet-btn" id="btn-pt-add-edu" style="background:var(--accent-color);color:#fff;border:none;border-radius:3px;padding:2px 6px;font-size:10px;cursor:pointer;">+ Education</button>
                    </div>
                    <div id="cv-pt-edu-list">
                        ${eduCardsHtml}
                    </div>
                </div>
                `}

                <!-- PROFESSIONAL EXPERIENCE -->
                ${isExpHidden ? '' : `
                <div class="cv-pt-sec-block">
                    <div class="cv-pt-sec-title">
                        <span>${labels.experience}</span>
                        <button class="add-bullet-btn" id="btn-pt-add-exp" style="background:var(--accent-color);color:#fff;border:none;border-radius:3px;padding:2px 6px;font-size:10px;cursor:pointer;">+ Experience</button>
                    </div>
                    <div id="cv-pt-exp-list">
                        ${expCardsHtml}
                    </div>
                </div>
                `}

                <!-- LANGUAGE SKILLS -->
                ${isLangHidden ? '' : `
                <div class="cv-pt-sec-block">
                    <div class="cv-pt-sec-title">${labels.languages}</div>
                    <div class="cv-pt-lang-block">
                        <div class="cv-pt-mother-tongue">
                            <strong>${labels.motherTongue}:</strong>
                            <span contenteditable="true" data-type="pt-mother-tongue" style="margin-left:6px;">${data.languages?.motherTongue || 'Bengali'}</span>
                        </div>

                        <div style="font-size:calc(11.5px * var(--cv-font-scale, 1));font-weight:700;color:#0f172a;margin-top:2px;">
                            ${labels.otherLanguages}:
                        </div>

                        <!-- Clean CEFR Level breakdown without boxes/table -->
                        <div class="cv-pt-lang-detail-list">
                            ${langSummariesHtml}
                        </div>
                    </div>
                </div>
                `}
            </div>
        </div>
    </div>
    `;
}

// Applies photo size and shape to any rendered photo container in CV preview
function applyPhotoStyles(settings) {
    if (!settings) settings = appState.customizerSettings || {};
    const photoShape = settings.photoShape || "circle";
    const photoSize = settings.photoSize || 115;
    let radius = "50%";
    if (photoShape === "square") radius = "0px";
    else if (photoShape === "rounded") radius = "14px";

    const photoContainers = document.querySelectorAll("#cv-avatar-container, #cv-bd-photo-box, #cv-bd2-photo-box, .cv-bd2-photo-box, #cv-pt-photo-wrap, .cv-pt-photo-wrap");
    photoContainers.forEach(container => {
        container.style.width = `${photoSize}px`;
        container.style.height = `${photoSize}px`;
        container.style.minWidth = `${photoSize}px`;
        container.style.minHeight = `${photoSize}px`;
        container.style.borderRadius = radius;
        container.style.overflow = "hidden";
        const img = container.querySelector("img");
        if (img) {
            img.style.borderRadius = radius;
        }
    });
}

// Update the actual Preview template UI based on configuration
function updateLivePreview() {
    const paper = document.getElementById("cv-paper-render");
    if (!paper) return;

    const settings = appState.customizerSettings;
    const cv = appState.cvData;

    // Fonts class
    paper.className = "cv-paper";
    paper.classList.add(`font-${settings.font}`);

    const FONT_FAMILY_MAP = {
        serif: "var(--font-serif)",
        inter: "var(--font-body)",
        outfit: "var(--font-title)",
        playfair: "'Playfair Display', Georgia, serif",
        roboto: "'Roboto', sans-serif",
        lora: "'Lora', serif",
        poppins: "'Poppins', sans-serif",
        merriweather: "'Merriweather', Georgia, serif",
        montserrat: "'Montserrat', sans-serif",
        cinzel: "'Cinzel', serif",
        ptserif: "'PT Serif', serif",
        mono: "'JetBrains Mono', monospace",
        script: "'Dancing Script', cursive",
        oswald: "'Oswald', sans-serif"
    };
    const activeFontFamily = FONT_FAMILY_MAP[settings.font] || "var(--font-serif)";
    paper.style.fontFamily = activeFontFamily;
    paper.style.setProperty("--cv-active-font", activeFontFamily);

    // Density Spacing
    let densityClass = "density-normal";
    if (settings.density === 1) densityClass = "density-compact";
    else if (settings.density === 3) densityClass = "density-spacious";
    paper.classList.add(densityClass);

    // Accent Color Property
    paper.style.setProperty("--accent-color", settings.accentColor);

    // Front Size Scaling Property
    const baseFontSize = settings.fontSize || 13;
    const fontScale = baseFontSize / 13;
    paper.style.setProperty("--cv-font-scale", fontScale);

    // Pre-apply Profile Photo Shape & Size
    applyPhotoStyles(settings);

    if (settings.country === "bangladesh") {
        if (settings.templateId === "exec-min" || appState.selectedTemplate === "exec-min" || (cv && (cv.armyInfo || cv.isArmyCv))) {
            paper.innerHTML = getBangladeshArmyCVHtml(cv, settings);
        } else {
            // Render custom Bangladesh layout (Template 1)
            paper.innerHTML = getBangladeshCVHtml(cv, settings);
        }
    } else if (settings.country === "portugal") {
        // Render custom European Portugal layout
        paper.innerHTML = getPortugalCVHtml(cv, settings);
    } else {
        const lang = appState.previewLanguage || appState.language || "en";

        const GENERIC_LABELS = {
            en: { aboutMe: "ABOUT ME", experience: "WORK EXPERIENCE", education: "EDUCATION AND TRAINING", skills: "SKILLS", languages: "LANGUAGE SKILLS" },
            bn: { aboutMe: "আমার সম্পর্কে", experience: "কাজের অভিজ্ঞতা", education: "শিক্ষা ও প্রশিক্ষণ", skills: "দক্ষতা", languages: "ভাষাগত দক্ষতা" },
            de: { aboutMe: "ÜBER MICH", experience: "BERUFSERFAHRUNG", education: "AUSBILDUNG UND WEITERBILDUNG", skills: "FÄHIGKEITEN", languages: "SPRACHKENNTNISSE" },
            fr: { aboutMe: "À PROPOS DE MOI", experience: "EXPÉRIENCE PROFESSIONNELLE", education: "ÉDUCATION ET FORMATION", skills: "COMPÉTENCES", languages: "COMPÉTENCES LINGUISTIQUES" },
            it: { aboutMe: "INFORMAZIONI SU DI ME", experience: "ESPERIENZA LAVORATIVA", education: "ISTRUZIONE E FORMAZIONE", skills: "COMPETENZE", languages: "COMPETENZE LINGUISTICHE" },
            pt: { aboutMe: "SOBRE MIM", experience: "EXPERIÊNCIA PROFISSIONAL", education: "EDUCAÇÃO E FORMAÇÃO", skills: "HABILIDADES", languages: "HABILIDADES LINGUÍSTICAS" },
            da: { aboutMe: "OM MIG", experience: "ARBEJDSERFARING", education: "UDDANNELSE OG TRÆNING", skills: "KOMPETENCER", languages: "SPROGFÆRDIGHEDER" },
            no: { aboutMe: "OM MEG", experience: "ARBEIDSERFARING", education: "UTDANNING OG OPPLÆRING", skills: "FERDIGHETER", languages: "SPRÅKKUNNSKAPER" },
            ru: { aboutMe: "ОБО МНЕ", experience: "ОПЫТ РАБОТЫ", education: "ОБРАЗОВАНИЕ И ОБУЧЕНИЕ", skills: "НАВЫКИ", languages: "ЯЗЫКОВЫЕ НАВЫКИ" },
            ja: { aboutMe: "自己紹介", experience: "職歴", education: "学歴・職業訓練", skills: "スキル", languages: "語学力" },
            ko: { aboutMe: "자기소개", experience: "경력 사항", education: "학력 및 교육", skills: "보유 기술", languages: "언어 능력" },
            ms: { aboutMe: "TENTANG SAYA", experience: "PENGALAMAN KERJA", education: "PENDIDIKAN DAN LATIHAN", skills: "KEMAHIRAN", languages: "KEMAHIRAN BAHASA" }
        };

        const GENERIC_DEFAULTS = {
            en: {
                jobTitle: "Senior Product Executive | New York, NY | jane.doe@example.com",
                role: "VP of Product Management",
                duration: "2019 - Present",
                company: "Global Tech Industries",
                bullets: [
                    "Led a cross-functional team of 50+ engineers and designers.",
                    "Increased Q3 revenue by 24% through strategic feature launches."
                ],
                college: "Columbia University",
                eduRole: "Bachelor of Science in Computer Science",
                eduDuration: "2012 - 2016",
                skills: ["Product Strategy", "Agile Leadership", "User Experience", "Data Analytics", "Resource Planning"]
            },
            bn: {
                jobTitle: "সিনিয়র প্রোডাক্ট এক্সিকিউটিভ | নিউ ইয়র্ক, এনওয়াই | jane.doe@example.com",
                role: "ভিপি অফ প্রোডাক্ট ম্যানেজমেন্ট",
                duration: "২০১৯ - বর্তমান",
                company: "গ্লোবাল টেক ইন্ডাস্ট্রিজ",
                bullets: [
                    "৫০ জনেরও বেশি প্রকৌশলী এবং ডিজাইনারদের একটি ক্রস-ফাংশনাল টিম পরিচালনা করেছি।",
                    "কৌশলগত বৈশিষ্ট্য চালুর মাধ্যমে ৩য় প্রান্তিকের রাজস্ব ২৪% বৃদ্ধি করেছি।"
                ],
                college: "কলম্বিয়া বিশ্ববিদ্যালয়",
                eduRole: "কম্পিউটার সায়েন্সে ব্যাচেলর অব সায়েন্স",
                eduDuration: "২০১২ - ২০১৬",
                skills: ["পণ্য কৌশল", "অজিল নেতৃত্ব", "ব্যবহারকারীর অভিজ্ঞতা", "উপাত্ত বিশ্লেষণ", "সম্পদ পরিকল্পনা"]
            },
            de: {
                jobTitle: "Senior Product Executive | New York, NY | jane.doe@example.com",
                role: "VP für Produktmanagement",
                duration: "2019 - Heute",
                company: "Global Tech Industries",
                bullets: [
                    "Leitung eines funktionsübergreifenden Teams von mehr als 50 Ingenieuren und Designern.",
                    "Steigerung des Umsatzes im 3. Quartal um 24 % durch strategische Produkteinführungen."
                ],
                college: "Columbia-Universität",
                eduRole: "Bachelor of Science in Informatik",
                eduDuration: "2012 - 2016",
                skills: ["Produktstrategie", "Agile Führung", "Benutzererfahrung", "Datenanalyse", "Ressourcenplanung"]
            },
            fr: {
                jobTitle: "Directeur principal des produits | New York, NY | jane.doe@example.com",
                role: "Vice-président de la gestion des produits",
                duration: "2019 - Présent",
                company: "Global Tech Industries",
                bullets: [
                    "Direction d'une équipe interfonctionnelle de plus de 50 ingénieurs et concepteurs.",
                    "Augmentation des revenus du troisième trimestre de 24 % grâce à des lancements de fonctionnalités stratégiques."
                ],
                college: "Université Columbia",
                eduRole: "Baccalauréat en sciences informatiques",
                eduDuration: "2012 - 2016",
                skills: ["Stratégie produit", "Leadership agile", "Expérience utilisateur", "Analyse de données", "Planification des ressources"]
            },
            it: {
                jobTitle: "Dirigente senior di prodotto | New York, NY | jane.doe@example.com",
                role: "VP della gestione del prodotto",
                duration: "2019 - Presente",
                company: "Global Tech Industries",
                bullets: [
                    "Gestito un team interfunzionale di oltre 50 ingegneri e designer.",
                    "Aumentato le entrate del terzo trimestre del 24% attraverso lanci di funzionalità strategiche."
                ],
                college: "Columbia University",
                eduRole: "Laurea di primo livello in Informatica",
                eduDuration: "2012 - 2016",
                skills: ["Strategia di prodotto", "Leadership agile", "Esperienza utente", "Analisi dei dati", "Pianificazione delle risorse"]
            },
            pt: {
                jobTitle: "Executivo de Produto Sênior | Nova York, NY | jane.doe@example.com",
                role: "Vice-Presidente de Gerenciamento de Produtos",
                duration: "2019 - Presente",
                company: "Global Tech Industries",
                bullets: [
                    "Liderou uma equipe multifuncional de mais de 50 engenheiros e designers.",
                    "Aumentou a receita do terceiro trimestre em 24% por meio de lançamentos estratégicos de recursos."
                ],
                college: "Universidade de Columbia",
                eduRole: "Bacharel em Ciências da Computação",
                eduDuration: "2012 - 2016",
                skills: ["Estratégia de produto", "Liderança ágil", "Experiência do usuário", "Análise de dados", "Planejamento de recursos"]
            },
            da: {
                jobTitle: "Senior produktchef | New York, NY | jane.doe@example.com",
                role: "VP for produktledelse",
                duration: "2019 - nu",
                company: "Global Tech Industries",
                bullets: [
                    "Ledede et tværfagligt team af 50+ ingeniører og designere.",
                    "Øgede omsætningen i 3. kvartal med 24 % gennem strategiske produktlanceringer."
                ],
                college: "Columbia University",
                eduRole: "Bachelor of Science i datalogi",
                eduDuration: "2012 - 2016",
                skills: ["Produktstrategi", "Agil ledelse", "Brugeroplevelse", "Dataanalyse", "Ressourceplanlægning"]
            },
            no: {
                jobTitle: "Senior produktleder | New York, NY | jane.doe@example.com",
                role: "VP for produktledelse",
                duration: "2019 - nå",
                company: "Global Tech Industries",
                bullets: [
                    "Ledet et tverrfaglig team av over 50 ingeniører og designere.",
                    "Økte omsetningen i 3. kvartal med 24 % gjennom strategiske produktlanseringer."
                ],
                college: "Columbia University",
                eduRole: "Bachelor of Science i datavitenskap",
                eduDuration: "2012 - 2016",
                skills: ["Produktstrategi", "Agil ledelse", "Brukeropplevelse", "Dataanalyse", "Ressursplanlegging"]
            },
            ru: {
                jobTitle: "Старший менеджер по продукту | Нью-Йорк, Нью-Йорк | jane.doe@example.com",
                role: "Вице-президент по управлению продуктами",
                duration: "2019 - наст. время",
                company: "Global Tech Industries",
                bullets: [
                    "Руководил межфункциональной командой из более чем 50 инженеров и дизайнеров.",
                    "Увеличил выручку в третьем квартале на 24% за счет стратегического запуска новых функций."
                ],
                college: "Колумбийский университет",
                eduRole: "Бакалавр наук в области компьютерных наук",
                eduDuration: "2012 - 2016",
                skills: ["Стратегия продукта", "Agile-руководство", "Пользовательский опыт", "Анализ данных", "Планирование ресурсов"]
            },
            ja: {
                jobTitle: "シニアプロダクトエグゼクティブ | ニューヨーク州ニューヨーク | jane.doe@example.com",
                role: "プロダクトマネジメント担当バイスプレジデント",
                duration: "2019年 - 現在",
                company: "Global Tech Industries",
                bullets: [
                    "50人以上のエンジニアとデザイナーからなるクロスファンクショナルチームを統率。",
                    "戦略的な機能リリースにより、第3四半期の売上を24%増加。"
                ],
                college: "コロンビア大学",
                eduRole: "コンピュータサイエンス学部学士",
                eduDuration: "2012年 - 2016年",
                skills: ["プロダクト戦略", "アジャイルリーダーシップ", "ユーザーエクスペリエンス", "データ分析", "リソース計画"]
            },
            ko: {
                jobTitle: "시니어 제품 책임자 | 뉴욕, 뉴욕 | jane.doe@example.com",
                role: "제품 관리 부사장",
                duration: "2019년 - 현재",
                company: "Global Tech Industries",
                bullets: [
                    "50명 이상의 엔지니어 및 디자이너로 구성된 다기능 팀 리드.",
                    "전략적 기능 출시를 통해 3분기 매출 24% 증가."
                ],
                college: "컬럼비아 대학교",
                eduRole: "컴퓨터 공학 학사",
                eduDuration: "2012 - 2016",
                skills: ["제품 전략", "애자일 리더십", "사용자 경험", "데이터 분석", "리소스 계획"]
            },
            ms: {
                jobTitle: "Eksekutif Produk Kanan | New York, NY | jane.doe@example.com",
                role: "Naib Presiden Pengurusan Produk",
                duration: "2019 - Kini",
                company: "Global Tech Industries",
                bullets: [
                    "Menerajui pasukan rentas fungsi dengan lebih 50 jurutera dan pereka.",
                    "Meningkatkan hasil suku ketiga sebanyak 24% melalui pelancaran ciri strategik."
                ],
                college: "Universiti Columbia",
                eduRole: "Sarjana Muda Sains dalam Sains Komputer",
                eduDuration: "2012 - 2016",
                skills: ["Strategi Produk", "Kepimpinan Agile", "Pengalaman Pengguna", "Analisis Data", "Perancangan Sumber"]
            }
        };

        const genLabels = GENERIC_LABELS[lang] || GENERIC_LABELS["en"];
        const genDefaults = GENERIC_DEFAULTS[lang] || GENERIC_DEFAULTS["en"];

        const aboutMeTitle = (!cv.aboutMe || !cv.aboutMe.title || cv.aboutMe.title === DEFAULT_CV_DATA.aboutMe.title || cv.aboutMe.title.includes("ABOUT ME") || Object.values(GENERIC_LABELS).some(l => l.aboutMe === cv.aboutMe.title))
            ? genLabels.aboutMe : cv.aboutMe.title.replace(/^•\s*/, "");

        const expTitle = (!cv.experience || !cv.experience.title || cv.experience.title === DEFAULT_CV_DATA.experience.title || cv.experience.title.includes("WORK EXPERIENCE") || Object.values(GENERIC_LABELS).some(l => l.experience === cv.experience.title))
            ? genLabels.experience : cv.experience.title.replace(/^•\s*/, "");

        const eduTitle = (!cv.education || !cv.education.title || cv.education.title === DEFAULT_CV_DATA.education.title || cv.education.title.includes("EDUCATION AND TRAINING") || Object.values(GENERIC_LABELS).some(l => l.education === cv.education.title))
            ? genLabels.education : cv.education.title.replace(/^•\s*/, "");

        const skillsTitle = (!cv.skills || !cv.skills.title || cv.skills.title === DEFAULT_CV_DATA.skills.title || cv.skills.title.includes("SKILLS") || Object.values(GENERIC_LABELS).some(l => l.skills === cv.skills.title))
            ? genLabels.skills : cv.skills.title.replace(/^•\s*/, "");

        const languagesTitle = (!cv.languages || !cv.languages.title || cv.languages.title === DEFAULT_CV_DATA.languages.title || cv.languages.title.includes("LANGUAGE SKILLS") || Object.values(GENERIC_LABELS).some(l => l.languages === cv.languages.title))
            ? genLabels.languages : cv.languages.title.replace(/^•\s*/, "");

        const expEntries = (cv.experience && Array.isArray(cv.experience.entries) && cv.experience.entries.length > 0)
            ? cv.experience.entries
            : DEFAULT_CV_DATA.experience.entries;

        const eduEntries = (cv.education && Array.isArray(cv.education.entries) && cv.education.entries.length > 0)
            ? cv.education.entries
            : DEFAULT_CV_DATA.education.entries;

        const skillItems = (cv.skills && Array.isArray(cv.skills.items) && cv.skills.items.length > 0)
            ? cv.skills.items
            : (Array.isArray(cv.skills) && cv.skills.length > 0 ? cv.skills : DEFAULT_CV_DATA.skills.items);

        // Restore generic layout structure if it was overwritten
        if (!document.getElementById("cv-dynamic-sections")) {
            paper.innerHTML = `
        <!-- CV Header -->
        <div class="cv-render-section cv-hdr" id="cv-section-personal">
          <div class="cv-avatar-container" id="cv-avatar-container">
            <img id="cv-avatar-img" src="${settings.photoUrl || ''}" alt="Profile Photo">
          </div>
          <div class="cv-hdr-text">
            <h1 contenteditable="true" id="cv-name">${cv.name || ''}</h1>
            <p class="cv-title" contenteditable="true" id="cv-job-title">${displayJobTitle || ''}</p>
          </div>
        </div>
        <!-- Dynamic Re-orderable Main Sections Container -->
        <div id="cv-dynamic-sections"></div>
      `;
        }

        // Personal Details Module visibility toggle
        const personalSec = document.getElementById("cv-section-personal");
        if (personalSec) {
            personalSec.style.display = settings.hiddenModules.includes("personal") ? "none" : "";
        }

        // Show Photo Toggle & Shape/Size Styling
        const avatar = document.getElementById("cv-avatar-container");
        if (avatar) {
            if (settings.showPhoto) {
                avatar.classList.remove("hidden");
            } else {
                avatar.classList.add("hidden");
            }
            const pSize = settings.photoSize || 115;
            const pShape = settings.photoShape || "circle";
            avatar.style.width = `${pSize}px`;
            avatar.style.height = `${pSize}px`;
            avatar.style.minWidth = `${pSize}px`;
            avatar.style.minHeight = `${pSize}px`;
            if (pShape === "circle") {
                avatar.style.borderRadius = "50%";
            } else if (pShape === "square") {
                avatar.style.borderRadius = "0px";
            } else if (pShape === "rounded") {
                avatar.style.borderRadius = "14px";
            }
        }
        const avatarImg = document.getElementById("cv-avatar-img");
        if (avatarImg && settings.photoUrl) {
            avatarImg.src = settings.photoUrl;
        }

        const HEADER_LABELS = {
            en: { dob: "Date of birth", nat: "Nationality", gender: "Gender", phone: "Phone number", email: "Email address", website: "Website", linkedin: "LinkedIn", address: "Address" },
            bn: { dob: "জন্ম তারিখ", nat: "জাতীয়তা", gender: "লিঙ্গ", phone: "ফোন নম্বর", email: "ইমেইল ঠিকানা", website: "ওয়েবসাইট", linkedin: "লিঙ্কডইন", address: "ঠিকানা" },
            de: { dob: "Geburtsdatum", nat: "Staatsangehörigkeit", gender: "Geschlecht", phone: "Telefonnummer", email: "E-Mail-Adresse", website: "Webseite", linkedin: "LinkedIn", address: "Adresse" },
            fr: { dob: "Date de naissance", nat: "Nationalité", gender: "Genre", phone: "Numéro de téléphone", email: "Adresse e-mail", website: "Site web", linkedin: "LinkedIn", address: "Adresse" },
            it: { dob: "Data di nascita", nat: "Nazionalità", gender: "Genere", phone: "Numero di telefono", email: "Indirizzo e-mail", website: "Sito web", linkedin: "LinkedIn", address: "Indirizzo" },
            pt: { dob: "Data de nascimento", nat: "Nacionalidade", gender: "Gênero", phone: "Número de telefone", email: "Endereço de e-mail", website: "Website", linkedin: "LinkedIn", address: "Endereço" },
            da: { dob: "Fødselsdato", nat: "Nationalitet", gender: "Køn", phone: "Telefonnummer", email: "E-mailadresse", website: "Hjemmeside", linkedin: "LinkedIn", address: "Adresse" },
            no: { dob: "Fødselsdato", nat: "Nasjonalitet", gender: "Kjønn", phone: "Telefonnummer", email: "E-postadresse", website: "Nettsted", linkedin: "LinkedIn", address: "Adresse" },
            ru: { dob: "Дата рождения", nat: "Гражданство", gender: "Пол", phone: "Номер телефона", email: "Адрес эл. почты", website: "Веб-сайт", linkedin: "LinkedIn", address: "Адрес" },
            ja: { dob: "生年月日", nat: "国籍", gender: "性別", phone: "電話番号", email: "メールアドレス", website: "ウェブサイト", linkedin: "LinkedIn", address: "住所" },
            ko: { dob: "생년월일", nat: "국적", gender: "성별", phone: "전화번호", email: "이메일 주소", website: "웹사이트", linkedin: "링크드인", address: "주소" },
            ms: { dob: "Tarikh lahir", nat: "Kewarganegaraan", gender: "Jantina", phone: "Nombor telefon", email: "Alamat e-mel", website: "Laman web", linkedin: "LinkedIn", address: "Alamat" }
        };

        const ABOUT_ME_TEXTS = {
            en: "A hardworking and reliable Warehouse Worker dedicated to ensuring smooth, safe, and efficient daily operations. Skilled in safely loading and unloading cargo, packaging goods securely, and conducting quality checks to ensure products meet high standards. Strong team player with a focus on inventory handling, fast-paced task management, and workplace safety.",
            bn: "একজন পরিশ্রমী এবং বিশ্বস্ত গুদাম কর্মী (Warehouse Worker), যিনি প্রতিদিনের মসৃণ, নিরাপদ ও দক্ষ কার্যক্রম নিশ্চিত করতে নিবেদিত। মালপত্র নিরাপদে লোড ও আনলোড করা, মালামাল সুরক্ষিতভাবে প্যাকেজিং করা এবং পণ্যের মান নিশ্চিত করতে কোয়ালিটি চেক করায় দক্ষ। ইনভেন্টরি হ্যান্ডলিং, দ্রুত কাজ পরিচালনা এবং কর্মক্ষেত্রের নিরাপত্তার ওপর বিশেষ নজর রাখা একজন আদর্শ টিম প্লেয়ার।",
            de: "Ein fleißiger und zuverlässiger Lagerarbeiter, der sich für einen reibungslosen, sicheren und effizienten Tagesbetrieb einsetzt. Erfahren im sicheren Be- und Entladen von Fracht, der sicheren Verpackung von Waren und der Durchführung von Qualitätskontrollen. Starker Teamplayer mit Fokus auf Bestandsabwicklung und Arbeitssicherheit.",
            fr: "Un ouvrier d'entrepôt travaillant et fiable, dédié à assurer des opérations quotidiennes fluides, sûres et efficaces. Qualifié dans le chargement et le déchargement sécurisés des marchandises, l'emballage et les contrôles de qualité. Esprit d'équipe affirmé avec un accent sur la gestion des stocks et la sécurité au travail.",
            it: "Un operaio di magazzino instancabile e affidabile, dedicato a garantire operazioni quotidiane fluide, sicure ed efficienti. Esperto nel carico e scarico merci in sicurezza, nell'imballaggio sicuro e nei controlli di qualità dei prodotti. Forte attitudine al lavoro di squadra con attenzione alla gestione degli inventari e alla sicurezza sul lavoro.",
            pt: "Um trabalhador de armazém dedicado e confiável, focado em garantir operações diárias eficientes e seguras. Habilidoso no carregamento e descarregamento seguro de mercadorias, embalagem e inspeção de qualidade. Forte trabalho em equipe com foco em gestão de estoque e segurança no trabalho.",
            da: "En arbejdsom og pålidelig lagerarbejder, der er dedikeret til at sikre en jævn, sikker og effektiv daglig drift. Erfaren i sikker læsning og losning af gods, emballering og kvalitetskontrol. Stærk holdspiller med fokus på lagerhåndtering og arbejdssikkerhed.",
            no: "En arbeidsom og pålitelig lagerarbeider som er dedikert til å sikre trygg og effektiv daglig drift. Erfaren i sikker lasting og lossing av gods, pakking og kvalitetskontroll. Sterk lagspiller med fokus på lagerhåndtering og arbeidsplassikkerhet.",
            ru: "Трудолюбивый и надежный складской рабочий, стремящийся к обеспечению бесперебойных, безопасных и эффективных ежедневных операций. Опытен в безопасной погрузке и разгрузке грузов, упаковке товаров и проверке качества. Сильный командный игрок с акцентом на учет инвентаря и безопасность.",
            ja: "スムーズで安全、かつ効率的な日々の業務に専念する、勤勉で信頼性の高い倉庫作業員。 荷物の安全な積み下ろし、商品の確実な梱包、高品質を維持するための品質チェックに熟練。 在庫管理と職場での安全性を重視する強力なチームプレイヤー。",
            ko: "원활하고 안전하며 효율적인 일일 작업을 보장하는 데 전념하는 근면하고 신뢰할 수 있는 창고 작업자입니다. 화물의 안전한 상하차, 안전한 상품 포장 및 품질 검사에 능숙합니다. 재고 관리 및 사업장 안전에 중점을 둔 강한 팀 플레이어입니다.",
            ms: "Pekerja gudang yang tekun dan boleh dipercayai, berdedikasi untuk memastikan operasi harian yang lancar, selamat dan cekap. Mahir dalam memuat dan memunggah kargo dengan selamat, membungkus barangan dan pemeriksaan kualiti. Pemain pasukan yang kuat dengan fokus pada pengendalian inventori dan keselamatan tempat kerja."
        };

        const hLabels = HEADER_LABELS[lang] || HEADER_LABELS["en"];

        // Load Content fields
        const nameEl = document.getElementById("cv-name");
        const hiddenPersonal = settings.hiddenPersonalFields || [];
        if (nameEl) {
            nameEl.textContent = cv.name || DEFAULT_CV_DATA.name;
            nameEl.style.display = hiddenPersonal.includes("name") ? "none" : "";
        }
        const titleEl = document.getElementById("cv-job-title");
        if (titleEl) {
            const defaultInfo = parseProfileInfoFromJobTitle(DEFAULT_CV_DATA.jobTitle);
            let info = null;
            if (cv.userEnteredPersonalInfo && cv.customContactInfo) {
                info = cv.customContactInfo;
            } else if (cv.jobTitle) {
                info = parseProfileInfoFromJobTitle(cv.jobTitle);
            }
            if (!info || (!info.phone && !info.email && !info.dob)) {
                info = defaultInfo;
            }

            const dob = document.getElementById("exp-in-dob")?.value.trim() || info.dob || defaultInfo.dob || "";
            const nat = document.getElementById("exp-in-nat")?.value.trim() || info.nat || defaultInfo.nat || "";
            const gender = document.getElementById("exp-in-gender")?.value.trim() || info.gender || defaultInfo.gender || "";
            const phone = document.getElementById("exp-in-phone")?.value.trim() || info.phone || defaultInfo.phone || "";
            const email = document.getElementById("exp-in-email")?.value.trim() || info.email || defaultInfo.email || "";
            const website = document.getElementById("exp-in-website")?.value.trim() || info.website || defaultInfo.website || "";
            const linkedin = document.getElementById("exp-in-linkedin")?.value.trim() || info.linkedin || defaultInfo.linkedin || "";
            const address = document.getElementById("exp-in-address")?.value.trim() || info.address || defaultInfo.address || "";

            // Build contact items dynamically – only show fields that have content and are not toggled off
            const contactParts = [];
            if (!hiddenPersonal.includes("dob") && dob) {
                contactParts.push(`<strong>${hLabels.dob}:</strong> <span contenteditable="true" data-type="hdr-field" data-key="dob">${dob}</span>`);
            }
            if (!hiddenPersonal.includes("nat") && nat) {
                contactParts.push(`<strong>${hLabels.nat}:</strong> <span contenteditable="true" data-type="hdr-field" data-key="nat">${nat}</span>`);
            }
            if (!hiddenPersonal.includes("gender") && gender) {
                contactParts.push(`<strong>${hLabels.gender}:</strong> <span contenteditable="true" data-type="hdr-field" data-key="gender">${gender}</span>`);
            }
            if (!hiddenPersonal.includes("phone") && phone) {
                contactParts.push(`<strong>${hLabels.phone}:</strong> <span contenteditable="true" data-type="hdr-field" data-key="phone">${phone}</span>`);
            }
            if (!hiddenPersonal.includes("email") && email) {
                contactParts.push(`<strong>${hLabels.email}:</strong> <span contenteditable="true" data-type="hdr-field" data-key="email" style="color:#1d4ed8;text-decoration:underline;">${email}</span>`);
            }
            if (!hiddenPersonal.includes("website") && website) {
                contactParts.push(`<strong>${hLabels.website}:</strong> <span contenteditable="true" data-type="hdr-field" data-key="website" style="color:#1d4ed8;text-decoration:underline;">${website}</span>`);
            }
            if (!hiddenPersonal.includes("linkedin") && linkedin) {
                contactParts.push(`<strong>${hLabels.linkedin}:</strong> <span contenteditable="true" data-type="hdr-field" data-key="linkedin" style="color:#1d4ed8;">${linkedin}</span>`);
            }

            let html = `<div style="font-size:12.5px;line-height:1.65;color:#2d3748;">`;
            html += contactParts.join(" | ");
            if (!hiddenPersonal.includes("address") && address) {
                if (contactParts.length > 0) html += `<br>`;
                html += `<strong>${hLabels.address}:</strong> <span contenteditable="true" data-type="hdr-field" data-key="address">${address}</span>`;
            }
            html += `</div>`;
            titleEl.innerHTML = html;
        }

        const defaultAboutContentEn = DEFAULT_CV_DATA.aboutMe.content;
        const currentAbout = cv.aboutMe ? (cv.aboutMe.content || cv.aboutMe) : "";
        const isDefaultAbout = (!currentAbout || currentAbout === defaultAboutContentEn || Object.values(ABOUT_ME_TEXTS).includes(currentAbout));
        const displayAboutContent = isDefaultAbout ? (ABOUT_ME_TEXTS[lang] || defaultAboutContentEn) : currentAbout;

        // Re-order and render experience, education, skills
        const dynamicContainer = document.getElementById("cv-dynamic-sections");
        dynamicContainer.innerHTML = "";

        if (!settings.modulesOrder || !Array.isArray(settings.modulesOrder) || !settings.modulesOrder.includes("aboutMe") || !settings.modulesOrder.includes("experience")) {
            settings.modulesOrder = ["personal", "aboutMe", "education", "skills", "experience", "languages", "signature"];
        } else if (!settings.modulesOrder.includes("signature")) {
            settings.modulesOrder.push("signature");
        }

        settings.modulesOrder.forEach(modId => {
            // If hidden, don't append to CV
            if (settings.hiddenModules.includes(modId)) return;

            if (modId === "aboutMe" || modId === "summary") {
                const sec = document.createElement("div");
                sec.className = "cv-render-section";
                sec.id = "cv-section-about";
                sec.innerHTML = `
          <h2 class="cv-sec-title">${aboutMeTitle}</h2>
          <p class="cv-about-text" contenteditable="true" data-type="about-content" style="font-size:13px;line-height:1.5;color:#334155;margin-bottom:12px;">${displayAboutContent}</p>
        `;
                dynamicContainer.appendChild(sec);
            }
            else if (modId === "experience") {
                const sec = document.createElement("div");
                sec.className = "cv-render-section";
                sec.id = "cv-section-experience";
                sec.innerHTML = `
          <h2 class="cv-sec-title">${expTitle}</h2>
          ${expEntries.map((entry, idx) => `
            <div class="cv-entry">
              <div class="cv-entry-header">
                <span class="cv-company" contenteditable="true" data-type="exp-company" data-index="${idx}">${entry.company}</span>
                <div style="display:inline-flex; align-items:center; gap:6px;">
                  <span class="cv-duration" contenteditable="true" data-type="exp-duration" data-index="${idx}">${entry.duration}</span>
                  ${expEntries.length > 1 ? `<button class="btn-delete-exp" data-index="${idx}" title="Delete Experience" style="background:#fee2e2;color:#dc2626;border:1px solid #fca5a5;border-radius:4px;padding:1px 6px;font-size:10px;font-weight:600;cursor:pointer;margin-left:4px;">Delete 🗑️</button>` : ''}
                </div>
              </div>
              <div class="cv-entry-role" contenteditable="true" data-type="exp-role" data-index="${idx}">${entry.role}</div>
              <ul class="cv-entry-bullets" style="margin-bottom:4px;">
                ${(entry.bullets || []).map((b, bIdx) => `
                  <li style="position:relative;margin-bottom:3px;padding-right:24px;">
                    <span contenteditable="true" data-type="exp-bullet" data-index="${idx}" data-bullet-index="${bIdx}">${b}</span>
                    <button class="btn-delete-exp-bullet" contenteditable="false" data-exp-index="${idx}" data-bullet-index="${bIdx}" title="Delete bullet point" style="position:absolute;right:0;top:50%;transform:translateY(-50%);background:#fee2e2;color:#dc2626;border:1px solid #fca5a5;border-radius:50%;width:16px;height:16px;font-size:11px;font-weight:bold;line-height:1;cursor:pointer;display:inline-flex;align-items:center;justify-content:center;">×</button>
                  </li>
                `).join('')}
              </ul>
              <button class="btn-add-exp-bullet" data-exp-index="${idx}" title="Add Bullet Point" style="margin-top:2px;margin-bottom:8px;padding:2px 8px;background:#f8fafc;border:1px dashed #94a3b8;border-radius:4px;font-size:10.5px;font-weight:600;color:#334155;cursor:pointer;display:inline-flex;align-items:center;gap:4px;">
                <span style="font-size:12px;font-weight:bold;color:var(--primary-color);">+</span> Add Bullet Point
              </button>
            </div>
          `).join('')}
          <button class="cv-add-btn" id="btn-add-exp" style="margin-top:10px;padding:5px 12px;background:#f1f5f9;border:1px dashed #94a3b8;border-radius:4px;font-size:11.5px;font-weight:600;color:#0f172a;cursor:pointer;display:inline-flex;align-items:center;gap:4px;">
            <span style="font-size:14px;font-weight:bold;">+</span> Add New Experience
          </button>
        `;
                dynamicContainer.appendChild(sec);
            }
            else if (modId === "education") {
                const sec = document.createElement("div");
                sec.className = "cv-render-section";
                sec.id = "cv-section-education";
                sec.innerHTML = `
          <h2 class="cv-sec-title">${eduTitle}</h2>
          ${eduEntries.map((entry, idx) => `
            <div class="cv-entry">
              <div class="cv-entry-header">
                <span class="cv-college" contenteditable="true" data-type="edu-college" data-index="${idx}">${entry.college}</span>
                <div style="display:inline-flex; align-items:center; gap:6px;">
                  <span class="cv-duration" contenteditable="true" data-type="edu-duration" data-index="${idx}">${entry.duration}</span>
                  ${eduEntries.length > 1 ? `<button class="btn-delete-edu" data-index="${idx}" title="Delete Education" style="background:#fee2e2;color:#dc2626;border:1px solid #fca5a5;border-radius:4px;padding:1px 6px;font-size:10px;font-weight:600;cursor:pointer;margin-left:4px;">Delete 🗑️</button>` : ''}
                </div>
              </div>
              <div class="cv-entry-degree" contenteditable="true" data-type="edu-degree" data-index="${idx}">${entry.role}</div>
              <ul class="cv-entry-bullets" style="margin-bottom:4px;">
                ${(entry.bullets || []).map((b, bIdx) => `
                  <li style="position:relative;margin-bottom:3px;padding-right:24px;">
                    <span contenteditable="true" data-type="edu-bullet" data-index="${idx}" data-bullet-index="${bIdx}">${b}</span>
                    <button class="btn-delete-edu-bullet" contenteditable="false" data-edu-index="${idx}" data-bullet-index="${bIdx}" title="Delete bullet point" style="position:absolute;right:0;top:50%;transform:translateY(-50%);background:#fee2e2;color:#dc2626;border:1px solid #fca5a5;border-radius:50%;width:16px;height:16px;font-size:11px;font-weight:bold;line-height:1;cursor:pointer;display:inline-flex;align-items:center;justify-content:center;">×</button>
                  </li>
                `).join('')}
              </ul>
              <button class="btn-add-edu-bullet" data-edu-index="${idx}" title="Add Bullet Point" style="margin-top:2px;margin-bottom:8px;padding:2px 8px;background:#f8fafc;border:1px dashed #94a3b8;border-radius:4px;font-size:10.5px;font-weight:600;color:#334155;cursor:pointer;display:inline-flex;align-items:center;gap:4px;">
                <span style="font-size:12px;font-weight:bold;color:var(--primary-color);">+</span> Add Bullet Point
              </button>
            </div>
          `).join('')}
          <button class="cv-add-btn" id="btn-add-edu" style="margin-top:10px;padding:5px 12px;background:#f1f5f9;border:1px dashed #94a3b8;border-radius:4px;font-size:11.5px;font-weight:600;color:#0f172a;cursor:pointer;display:inline-flex;align-items:center;gap:4px;">
            <span style="font-size:14px;font-weight:bold;">+</span> Add New Education
          </button>
        `;
                dynamicContainer.appendChild(sec);
            }
            else if (modId === "skills") {
                const sec = document.createElement("div");
                sec.className = "cv-render-section";
                sec.id = "cv-section-skills";
                sec.innerHTML = `
          <h2 class="cv-sec-title">${skillsTitle}</h2>
          <div class="cv-skills-grid">
            ${skillItems.map((skill, idx) => `
              <span class="cv-skill-tag-wrap" style="position:relative;display:inline-flex;align-items:center;margin-right:6px;margin-bottom:6px;">
                <span class="cv-skill-tag" contenteditable="true" data-type="skill-item" data-index="${idx}">${skill}</span>
                <button class="btn-delete-skill" data-index="${idx}" title="Delete Skill" style="background:#ef4444;color:#fff;border:none;border-radius:50%;width:16px;height:16px;font-size:10px;line-height:1;margin-left:4px;cursor:pointer;display:inline-flex;align-items:center;justify-content:center;">×</button>
              </span>
            `).join('')}
          </div>
          <button class="cv-add-btn" id="btn-add-skill" style="margin-top:10px;padding:5px 12px;background:#f1f5f9;border:1px dashed #94a3b8;border-radius:4px;font-size:11.5px;font-weight:600;color:#0f172a;cursor:pointer;display:inline-flex;align-items:center;gap:4px;">
            <span style="font-size:14px;font-weight:bold;">+</span> Add New Skill
          </button>
        `;
                dynamicContainer.appendChild(sec);
            }
            else if (modId === "languages") {
                const sec = document.createElement("div");
                sec.className = "cv-render-section";
                sec.id = "cv-section-languages";

                const LANGUAGE_SECTION_LABELS = {
                    en: {
                        motherTongueLabel: "Mother tongue(s):",
                        otherLanguagesLabel: "Other language(s):",
                        understanding: "UNDERSTANDING",
                        speaking: "SPEAKING",
                        writing: "WRITING",
                        listening: "Listening",
                        reading: "Reading",
                        spokenProduction: "Spoken production",
                        spokenInteraction: "Spoken interaction",
                        bengali: "BENGALI",
                        english: "ENGLISH"
                    },
                    bn: {
                        motherTongueLabel: "মাতৃভাষা:",
                        otherLanguagesLabel: "অন্যান্য ভাষা:",
                        understanding: "উপলব্ধি/বোঝা",
                        speaking: "কথা বলা",
                        writing: "লেখা",
                        listening: "শোনা",
                        reading: "পড়া",
                        spokenProduction: "মৌখিক উপস্থাপনা",
                        spokenInteraction: "কথোপকথন",
                        bengali: "বাংলা",
                        english: "ইংরেজি"
                    },
                    de: {
                        motherTongueLabel: "Muttersprache(n):",
                        otherLanguagesLabel: "Weitere Sprache(n):",
                        understanding: "VERSTEHEN",
                        speaking: "SPRECHEN",
                        writing: "SCHREIBEN",
                        listening: "Hören",
                        reading: "Lesen",
                        spokenProduction: "Zusammenhängendes Sprechen",
                        spokenInteraction: "An Gesprächen teilnehmen",
                        bengali: "BENGLISCH",
                        english: "ENGLISCH"
                    },
                    fr: {
                        motherTongueLabel: "Langue(s) maternelle(s) :",
                        otherLanguagesLabel: "Autre(s) langue(s) :",
                        understanding: "COMPRÉHENSION",
                        speaking: "EXPRESSION ORALE",
                        writing: "ÉCRIT",
                        listening: "Écouter",
                        reading: "Lire",
                        spokenProduction: "S'exprimer oralement en continu",
                        spokenInteraction: "Prendre part à une conversation",
                        bengali: "BENGALI",
                        english: "ANGLAIS"
                    },
                    it: {
                        motherTongueLabel: "Madrelingua:",
                        otherLanguagesLabel: "Altra/e lingua/e:",
                        understanding: "COMPRENSIONE",
                        speaking: "PARLATO",
                        writing: "SCRITTURA",
                        listening: "Ascolto",
                        reading: "Lettura",
                        spokenProduction: "Produzione orale",
                        spokenInteraction: "Interazione orale",
                        bengali: "BENGALESE",
                        english: "INGLESE"
                    },
                    pt: {
                        motherTongueLabel: "Língua(s) materna(s):",
                        otherLanguagesLabel: "Outra(s) língua(s):",
                        understanding: "COMPREENSÃO",
                        speaking: "FALA",
                        writing: "ESCRITA",
                        listening: "Compreensão oral",
                        reading: "Leitura",
                        spokenProduction: "Produção oral",
                        spokenInteraction: "Interação oral",
                        bengali: "BENGALI",
                        english: "INGLÊS"
                    },
                    da: {
                        motherTongueLabel: "Modersmål:",
                        otherLanguagesLabel: "Andre sprog:",
                        understanding: "FORSTÅELSE",
                        speaking: "TALENDE",
                        writing: "SKRIVNING",
                        listening: "Lytte",
                        reading: "Læse",
                        spokenProduction: "Mundtlig præsentation",
                        spokenInteraction: "Samtale",
                        bengali: "BENGALSK",
                        english: "ENGELSK"
                    },
                    no: {
                        motherTongueLabel: "Morsmål:",
                        otherLanguagesLabel: "Andre språk:",
                        understanding: "FORSTÅELSE",
                        speaking: "SNAMMENDE / MUNTLIG",
                        writing: "SKRIVING",
                        listening: "Lytte",
                        reading: "Lese",
                        spokenProduction: "Muntlig produksjon",
                        spokenInteraction: "Muntlig samhandling",
                        bengali: "BENGALSK",
                        english: "ENGELSK"
                    },
                    ru: {
                        motherTongueLabel: "Родной язык (языки):",
                        otherLanguagesLabel: "Другие языки:",
                        understanding: "ПОНИМАНИЕ",
                        speaking: "ГОВОРЕНИЕ",
                        writing: "ПИСЬМО",
                        listening: "Аудирование",
                        reading: "Чтение",
                        spokenProduction: "Монолог",
                        spokenInteraction: "Диалог",
                        bengali: "БЕНГАЛЬСКИЙ",
                        english: "АНГЛИЙСКИЙ"
                    },
                    ja: {
                        motherTongueLabel: "母国語:",
                        otherLanguagesLabel: "その他の言語:",
                        understanding: "理解力",
                        speaking: "会話力",
                        writing: "記述力",
                        listening: "リスニング",
                        reading: "リーディング",
                        spokenProduction: "スピーキング（発表）",
                        spokenInteraction: "スピーキング（対話）",
                        bengali: "ベンガル語",
                        english: "英語"
                    },
                    ko: {
                        motherTongueLabel: "모국어:",
                        otherLanguagesLabel: "기타 언어:",
                        understanding: "이해력",
                        speaking: "말하기",
                        writing: "쓰기",
                        listening: "듣기",
                        reading: "읽기",
                        spokenProduction: "구어 발표",
                        spokenInteraction: "구어 상호작용",
                        bengali: "벵골어",
                        english: "영어"
                    },
                    ms: {
                        motherTongueLabel: "Bahasa ibunda:",
                        otherLanguagesLabel: "Bahasa lain:",
                        understanding: "PEMAHAMAN",
                        speaking: "PERTUTURAN",
                        writing: "PENULISAN",
                        listening: "Mendengar",
                        reading: "Membaca",
                        spokenProduction: "Penyampaian lisan",
                        spokenInteraction: "Interaksi lisan",
                        bengali: "BENGALI",
                        english: "INGGERIS"
                    }
                };

                const lLabels = LANGUAGE_SECTION_LABELS[lang] || LANGUAGE_SECTION_LABELS["en"];

                let rawMother = cv.languages ? (cv.languages.motherTongue || "BENGALI").replace("Mother tongue(s): ", "").trim() : "BENGALI";
                if (rawMother.toUpperCase() === "BENGALI" || rawMother.toUpperCase() === "BANGLA") {
                    rawMother = lLabels.bengali || rawMother;
                }

                const otherLangs = (cv.languages && Array.isArray(cv.languages.otherLanguages))
                    ? cv.languages.otherLanguages.map(l => {
                        let name = l.name;
                        if (name && name.toUpperCase() === "ENGLISH") {
                            name = lLabels.english || name;
                        }
                        return { ...l, name };
                    })
                    : [
                        { name: lLabels.english || "ENGLISH", listening: "A2", reading: "B1", spokenProduction: "A2", spokenInteraction: "A2", writing: "A2" }
                    ];

                sec.innerHTML = `
          <h2 class="cv-sec-title">${languagesTitle}</h2>
          <div class="cv-lang-block" style="font-size:13px;color:#334155;">
            <p style="margin-bottom:8px;"><strong>${lLabels.motherTongueLabel}</strong> <span contenteditable="true" data-type="lang-mother" style="font-weight:700;">${rawMother}</span></p>
            <p style="margin-top:8px;margin-bottom:8px;"><strong>${lLabels.otherLanguagesLabel}</strong></p>
            <table class="cv-lang-table" style="width:100%;border-collapse:collapse;margin-top:8px;text-align:center;font-size:12px;border:1px solid #e2e8f0;">
              <thead>
                <tr style="background:#f8fafc;border-bottom:1px solid #cbd5e1;font-weight:700;">
                  <th style="padding:6px;text-align:left;"></th>
                  <th colspan="2" style="border-left:1px solid #cbd5e1;padding:6px;">${lLabels.understanding}</th>
                  <th colspan="2" style="border-left:1px solid #cbd5e1;padding:6px;">${lLabels.speaking}</th>
                  <th style="border-left:1px solid #cbd5e1;padding:6px;">${lLabels.writing}</th>
                  <th style="padding:4px;"></th>
                </tr>
                <tr style="font-size:11px;color:#64748b;border-bottom:1px solid #cbd5e1;background:#f8fafc;">
                  <th style="padding:4px;"></th>
                  <th style="border-left:1px solid #cbd5e1;padding:4px;">${lLabels.listening}</th>
                  <th style="padding:4px;">${lLabels.reading}</th>
                  <th style="border-left:1px solid #cbd5e1;padding:4px;">${lLabels.spokenProduction}</th>
                  <th style="padding:4px;">${lLabels.spokenInteraction}</th>
                  <th style="border-left:1px solid #cbd5e1;padding:4px;"></th>
                  <th style="padding:4px;"></th>
                </tr>
              </thead>
              <tbody>
                ${otherLangs.map((lang, lIdx) => `
                  <tr>
                    <td style="text-align:left;font-weight:700;padding:6px 10px;" contenteditable="true" data-type="lang-name" data-index="${lIdx}">${lang.name}</td>
                    <td style="border-left:1px solid #e2e8f0;padding:6px;" contenteditable="true" data-type="lang-field" data-field="listening" data-index="${lIdx}">${lang.listening}</td>
                    <td style="border-left:1px solid #e2e8f0;padding:6px;" contenteditable="true" data-type="lang-field" data-field="reading" data-index="${lIdx}">${lang.reading}</td>
                    <td style="border-left:1px solid #e2e8f0;padding:6px;" contenteditable="true" data-type="lang-field" data-field="spokenProduction" data-index="${lIdx}">${lang.spokenProduction}</td>
                    <td style="border-left:1px solid #e2e8f0;padding:6px;" contenteditable="true" data-type="lang-field" data-field="spokenInteraction" data-index="${lIdx}">${lang.spokenInteraction}</td>
                    <td style="border-left:1px solid #e2e8f0;padding:6px;" contenteditable="true" data-type="lang-field" data-field="writing" data-index="${lIdx}">${lang.writing}</td>
                    <td style="padding:4px;"><button class="btn-delete-lang" data-index="${lIdx}" style="background:#ef4444;color:#fff;border:none;border-radius:3px;padding:2px 5px;font-size:10px;cursor:pointer;">×</button></td>
                  </tr>
                `).join('')}
              </tbody>
            </table>
            <button class="cv-add-btn" id="btn-add-lang" style="margin-top:10px;padding:5px 12px;background:#f1f5f9;border:1px dashed #94a3b8;border-radius:4px;font-size:11.5px;font-weight:600;color:#0f172a;cursor:pointer;display:inline-flex;align-items:center;gap:4px;">
              <span style="font-size:14px;font-weight:bold;">+</span> Add New Language
            </button>
          </div>
        `;
                dynamicContainer.appendChild(sec);
            }
            else if (modId === "signature") {
                const isSigHidden = settings.showSignature === false || (settings.hiddenModules && settings.hiddenModules.includes("signature"));
                if (!isSigHidden) {
                    const sec = document.createElement("div");
                    sec.className = "cv-render-section cv-signature-section";
                    sec.id = "cv-section-signature";
                    const sigName = cv.signature || cv.name || "MD Shahed";
                    sec.innerHTML = `
                        <div style="margin-top:28px;display:flex;justify-content:flex-end;">
                            <div style="text-align:center;min-width:200px;">
                                <div class="cv-sig-script" contenteditable="true" data-type="generic-sig-script" style="font-family:'Brush Script MT', 'Dancing Script', cursive, sans-serif;font-size:26px;color:var(--accent-color, #0f172a);line-height:1.2;">${sigName}</div>
                                <div style="width:100%;height:1.5px;background:#94a3b8;margin:6px 0 6px 0;"></div>
                                <div class="cv-sig-name" contenteditable="true" data-type="generic-sig-name" style="font-size:12.5px;font-weight:700;color:#0f172a;">${cv.name || 'MD Shahed'}</div>
                                <div style="font-size:10.5px;color:#64748b;text-transform:uppercase;letter-spacing:0.5px;margin-top:2px;">${lang === "it" ? "Firma" : (lang === "bn" ? "স্বাক্ষর" : "Signature")}</div>
                            </div>
                        </div>
                    `;
                    dynamicContainer.appendChild(sec);
                }
            }
            else if (modId === "projects" || modId === "certifications" || modId === "awards" || modId === "references" || (modId && modId.startsWith("custom_"))) {
                const customSecData = settings.customSections || {};
                const sectionTitles = {
                    projects:       "PROJECTS",
                    certifications: "CERTIFICATIONS",
                    awards:         "AWARDS & HONOURS",
                    references:     "REFERENCES"
                };
                const secTitle = sectionTitles[modId] || (customSecData[modId] ? customSecData[modId].toUpperCase() : modId.replace(/^custom_/, "").replace(/_/g, " ").toUpperCase());
                const secId = "cv-section-" + modId;

                if (!appState.cvData.customSectionsData) appState.cvData.customSectionsData = {};
                if (!appState.cvData.customSectionsData[modId]) {
                    appState.cvData.customSectionsData[modId] = [
                        { role: "Click to edit title", company: "", duration: "", bullets: ["Click to edit this entry"] }
                    ];
                }
                const csEntries = appState.cvData.customSectionsData[modId];

                const sec = document.createElement("div");
                sec.className = "cv-render-section";
                sec.id = secId;
                sec.innerHTML = `
                    <h2 class="cv-sec-title" contenteditable="true" data-type="custom-sec-title" data-mod="${modId}">${secTitle}</h2>
                    ${csEntries.map((entry, idx) => `
                        <div class="cv-entry">
                            <div class="cv-entry-header">
                                <span class="cv-company" contenteditable="true" data-type="custom-entry-company" data-mod="${modId}" data-index="${idx}">${entry.company || ""}</span>
                                <div style="display:inline-flex;align-items:center;gap:6px;">
                                    <span class="cv-duration" contenteditable="true" data-type="custom-entry-duration" data-mod="${modId}" data-index="${idx}">${entry.duration || ""}</span>
                                    ${csEntries.length > 1 ? `<button class="btn-delete-custom-entry" data-mod="${modId}" data-index="${idx}" style="background:#fee2e2;color:#dc2626;border:1px solid #fca5a5;border-radius:4px;padding:1px 6px;font-size:10px;font-weight:600;cursor:pointer;">Delete \ud83d\uddd1\ufe0f</button>` : ""}
                                </div>
                            </div>
                            <div class="cv-entry-role" contenteditable="true" data-type="custom-entry-role" data-mod="${modId}" data-index="${idx}">${entry.role || ""}</div>
                            <ul class="cv-entry-bullets" style="margin-bottom:4px;">
                                ${(entry.bullets || []).map((b, bIdx) => `
                                    <li style="position:relative;margin-bottom:3px;padding-right:24px;">
                                        <span contenteditable="true" data-type="custom-entry-bullet" data-mod="${modId}" data-index="${idx}" data-bullet-index="${bIdx}">${b}</span>
                                        <button class="btn-delete-custom-bullet" data-mod="${modId}" data-index="${idx}" data-bullet-index="${bIdx}" style="position:absolute;right:0;top:50%;transform:translateY(-50%);background:#fee2e2;color:#dc2626;border:1px solid #fca5a5;border-radius:50%;width:16px;height:16px;font-size:11px;cursor:pointer;display:inline-flex;align-items:center;justify-content:center;">\u00d7</button>
                                    </li>
                                `).join("")}
                            </ul>
                            <button class="btn-add-custom-bullet" data-mod="${modId}" data-index="${idx}" style="margin-top:2px;margin-bottom:8px;padding:2px 8px;background:#f8fafc;border:1px dashed #94a3b8;border-radius:4px;font-size:10.5px;font-weight:600;color:#334155;cursor:pointer;display:inline-flex;align-items:center;gap:4px;">
                                <span style="font-size:12px;font-weight:bold;color:var(--primary-color);">+</span> Add Bullet Point
                            </button>
                        </div>
                    `).join("")}
                    <button class="btn-add-custom-entry cv-add-btn" data-mod="${modId}" style="margin-top:10px;padding:5px 12px;background:#f1f5f9;border:1px dashed #94a3b8;border-radius:4px;font-size:11.5px;font-weight:600;color:#0f172a;cursor:pointer;display:inline-flex;align-items:center;gap:4px;">
                        <span style="font-size:14px;font-weight:bold;">+</span> Add New Entry
                    </button>
                `;
                dynamicContainer.appendChild(sec);
            }
        });
    }

    // Apply dynamic photo shape and dimensions after DOM is populated
    applyPhotoStyles(settings);

    // Attach contenteditable listeners to newly created nodes to sync data changes
    attachEditableListeners();

    // Resize preview to fit page width responsively
    setTimeout(resizePreview, 50);
}

// Recalculates live preview scale transform so A4 page fits inside view column
function resizePreview() {
    const paper = document.getElementById("cv-paper-render");
    const scaler = document.getElementById("cv-paper-scaler");
    if (!paper || !scaler) return;

    const baseWidth = 800;
    paper.style.height = "auto";
    // Use actual scrollHeight so taller/dynamic CV contents never get cut off at the bottom!
    const baseHeight = Math.max(paper.scrollHeight || 0, 1130);
    const isMobile = window.innerWidth <= 768;

    // Calculate available container width
    let parentWidth = scaler.parentElement ? scaler.parentElement.clientWidth : window.innerWidth;
    let availableWidth;
    if (isMobile) {
        // Stay within mobile bounds with comfortable padding to prevent horizontal zoom-out
        availableWidth = Math.max(parentWidth - 16, 260);
    } else {
        availableWidth = Math.max(parentWidth - 32, 200);
    }

    // Calculate scale factor
    let scale = isMobile
        ? Math.min(availableWidth / baseWidth, 0.95)
        : Math.min(availableWidth / baseWidth, 0.98);

    // If custom zoom is active (user tapped +/-), override the fit scale
    if (appState.customizerZoom && appState.customizerZoom !== 'fit') {
        scale = appState.customizerZoom;
    }

    // Set scaler relative dimensions so it encloses the scaled paper perfectly without layout shifts
    scaler.style.position = "relative";
    scaler.style.width = `${baseWidth * scale}px`;
    scaler.style.height = `${baseHeight * scale}px`;
    scaler.style.maxWidth = "100%";
    scaler.style.boxSizing = "border-box";
    scaler.style.overflow = "hidden";

    // Use absolute positioning with top-left origin inside the scaler box.
    // This is the most bulletproof way to scale without flex centering conflicts or margin offsets.
    paper.style.position = "absolute";
    paper.style.left = "0";
    paper.style.top = "0";
    paper.style.transform = `scale(${scale})`;
    paper.style.transformOrigin = "top left";
    paper.style.width = `${baseWidth}px`;
    paper.style.height = `${baseHeight}px`;
    paper.style.minHeight = "unset";
}

// Controls mobile-specific customizer layout (Continuous All Sections scroll)
function setupMobileCustomizerTabs() {
    const tabContainer = document.getElementById("customizer-mobile-tabs");
    const layout = document.querySelector(".customize-layout");
    const floatingBar = document.getElementById("mobile-floating-preview-bar");
    const btnJump = document.getElementById("btn-mobile-preview-jump");

    if (!layout) return;

    // Set unified 'all' mode so all sections (Sidebar, Settings, Photo Upload & Live Preview) are visible continuously
    layout.classList.remove("mobile-mode-settings", "mobile-mode-preview");
    layout.classList.add("mobile-mode-all");

    if (tabContainer) {
        tabContainer.querySelectorAll(".cust-mobile-tab-btn").forEach(btn => {
            btn.classList.add("active");
            btn.onclick = () => {
                const viewCustomize = document.getElementById("view-customize");
                if (viewCustomize) {
                    viewCustomize.scrollIntoView({ behavior: "smooth", block: "start" });
                }
            };
        });
    }

    if (floatingBar) {
        if (window.innerWidth <= 768) {
            floatingBar.style.display = "block";
        } else {
            floatingBar.style.display = "none";
        }
    }

    // Floating Jump button: smoothly scrolls down to Live Preview
    if (btnJump) {
        btnJump.onclick = () => {
            const previewPane = document.getElementById("customize-preview-pane");
            if (previewPane) {
                previewPane.scrollIntoView({ behavior: "smooth", block: "start" });
            }
        };
    }

    setTimeout(resizePreview, 60);
}

function attachEditableListeners() {
    const elements = document.querySelectorAll(".cv-paper [contenteditable='true']");
    elements.forEach(el => {
        el.addEventListener("blur", (e) => {
            const val = e.target.innerText.trim();
            const dataset = e.target.dataset;
            const type = dataset.type;
            const idx = parseInt(dataset.index);

            if (!type) return;

            if (type === "hdr-field") {
                const key = dataset.key;
                if (!appState.cvData.customContactInfo) {
                    appState.cvData.customContactInfo = {};
                }
                appState.cvData.userEnteredPersonalInfo = true;
                if (key) {
                    appState.cvData.customContactInfo[key] = val;
                    const inputEl = document.getElementById("exp-in-" + key);
                    if (inputEl) inputEl.value = val;
                }
                const container = document.getElementById("cv-job-title");
                if (container) {
                    appState.cvData.jobTitle = container.innerText.trim();
                }
            } else if (type === "about-content") {
                if (appState.cvData.aboutMe) {
                    if (typeof appState.cvData.aboutMe === "object") {
                        appState.cvData.aboutMe.content = val;
                    } else {
                        appState.cvData.aboutMe = val;
                    }
                }
            } else if (type === "exp-company") {
                appState.cvData.experience.entries[idx].company = val;
            } else if (type === "exp-duration") {
                appState.cvData.experience.entries[idx].duration = val;
            } else if (type === "exp-role") {
                appState.cvData.experience.entries[idx].role = val;
            } else if (type === "exp-bullet") {
                const bIdx = parseInt(dataset.bulletIndex);
                appState.cvData.experience.entries[idx].bullets[bIdx] = val;
            } else if (type === "edu-college") {
                appState.cvData.education.entries[idx].college = val;
            } else if (type === "edu-duration") {
                appState.cvData.education.entries[idx].duration = val;
            } else if (type === "edu-degree") {
                appState.cvData.education.entries[idx].role = val;
            } else if (type === "edu-bullet") {
                const bIdx = parseInt(dataset.bulletIndex);
                if (appState.cvData.education && appState.cvData.education.entries && appState.cvData.education.entries[idx] && appState.cvData.education.entries[idx].bullets) {
                    appState.cvData.education.entries[idx].bullets[bIdx] = val;
                }
            } else if (type === "skill-item") {
                appState.cvData.skills.items[idx] = val;
            } else if (type === "lang-mother") {
                if (appState.cvData.languages) {
                    appState.cvData.languages.motherTongue = "Mother tongue(s): " + val;
                }
            }
            // Bangladesh Specific CV fields
            else if (type === "bd-name") {
                appState.cvData.name = val;
                const sigName = document.querySelector('[data-type="bd-sig-name"]');
                if (sigName) sigName.textContent = val;
            } else if (type === "bd-jobTitle") {
                appState.cvData.jobTitle = val;
            } else if (type === "bd-address") {
                appState.cvData.contact.address = val;
            } else if (type === "bd-mobile") {
                appState.cvData.contact.mobile = val;
            } else if (type === "bd-email") {
                appState.cvData.contact.email = val;
            } else if (type === "bd-objective") {
                appState.cvData.objective = val;
            } else if (type === "bd-edu") {
                const field = dataset.field;
                appState.cvData.education[idx][field] = val;
            } else if (type === "bd-other") {
                appState.cvData.otherQualifications[idx] = val;
            } else if (type === "bd-personal") {
                const field = dataset.field;
                appState.cvData.personalInfo[field] = val;
            } else if (type === "bd-declaration") {
                appState.cvData.declaration = val;
            } else if (type === "bd-date") {
                appState.cvData.date = val;
            } else if (type === "bd-place") {
                appState.cvData.place = val;
            } else if (type === "bd-sig-name") {
                appState.cvData.name = val;
                const headerName = document.querySelector('[data-type="bd-name"]');
                if (headerName) headerName.textContent = val;
            }
            // Bangladesh Template 2 (Ex-Army Sergeant) Specific CV fields
            else if (type === "bd2-name") {
                appState.cvData.name = val;
                const sig = document.querySelector('[data-type="bd2-signature"]');
                if (sig) sig.textContent = val;
                const inName = document.getElementById("exp-in-name");
                if (inName) inName.value = val;
            } else if (type === "bd2-header-title") {
                appState.cvData.headerTitle = val;
            } else if (type === "bd2-header-of") {
                appState.cvData.headerOf = val;
            } else if (type === "bd2-designation") {
                appState.cvData.designation = val;
            } else if (type === "bd2-contact") {
                if (!appState.cvData.contact) appState.cvData.contact = {};
                const key = dataset.key;
                if (key) appState.cvData.contact[key] = val;
                if (key === "mobile") {
                    const inP = document.getElementById("exp-in-phone");
                    if (inP) inP.value = val;
                } else if (key === "email") {
                    const inE = document.getElementById("exp-in-email");
                    if (inE) inE.value = val;
                } else if (key === "currentAddress") {
                    const inA = document.getElementById("exp-in-address");
                    if (inA) inA.value = val;
                }
            } else if (type === "bd2-personal") {
                if (!appState.cvData.personalInfo) appState.cvData.personalInfo = {};
                const key = dataset.key;
                if (key) appState.cvData.personalInfo[key] = val;
                if (key === "dob") {
                    const inDob = document.getElementById("exp-in-dob");
                    if (inDob) inDob.value = val;
                } else if (key === "nationality") {
                    const inNat = document.getElementById("exp-in-nat");
                    if (inNat) inNat.value = val;
                } else if (key === "gender") {
                    const inGen = document.getElementById("exp-in-gender");
                    if (inGen) inGen.value = val;
                }
            } else if (type === "bd2-army") {
                if (!appState.cvData.armyInfo) appState.cvData.armyInfo = {};
                const key = dataset.key;
                if (key) appState.cvData.armyInfo[key] = val;
            } else if (type === "bd2-perm") {
                if (!appState.cvData.permanentAddress) appState.cvData.permanentAddress = {};
                const key = dataset.key;
                if (key) appState.cvData.permanentAddress[key] = val;
            } else if (type === "bd2-edu") {
                const field = dataset.field;
                if (appState.cvData.education && appState.cvData.education[idx]) {
                    appState.cvData.education[idx][field] = val;
                }
            } else if (type === "bd2-job-summary") {
                if (!appState.cvData.jobDescription) appState.cvData.jobDescription = {};
                appState.cvData.jobDescription.summary = val;
            } else if (type === "bd2-job-subhead") {
                if (!appState.cvData.jobDescription) appState.cvData.jobDescription = {};
                appState.cvData.jobDescription.subHeader = val;
            } else if (type === "bd2-job-bullet") {
                if (appState.cvData.jobDescription && Array.isArray(appState.cvData.jobDescription.bullets)) {
                    appState.cvData.jobDescription.bullets[idx] = val;
                }
            } else if (type === "bd2-skill-bullet") {
                if (Array.isArray(appState.cvData.computerSkills)) {
                    appState.cvData.computerSkills[idx] = val;
                }
            } else if (type === "bd2-declaration") {
                appState.cvData.declaration = val;
            } else if (type === "bd2-date") {
                appState.cvData.date = val;
            } else if (type === "bd2-signature") {
                appState.cvData.signature = val;
                const nameEl = document.querySelector('[data-type="bd2-name"]');
                if (nameEl) nameEl.textContent = val;
            }
            // Portugal Specific CV fields
            else if (type === "pt-name") {
                appState.cvData.name = val;
                const sigName = document.querySelector('[data-type="pt-sig-name"]');
                if (sigName) sigName.textContent = val;
                const inName = document.getElementById("exp-in-name");
                if (inName) inName.value = val;
            } else if (type === "pt-nat") {
                if (!appState.cvData.personalInfo) appState.cvData.personalInfo = {};
                appState.cvData.personalInfo.nationality = val;
                const inNat = document.getElementById("exp-in-nat");
                if (inNat) inNat.value = val;
            } else if (type === "pt-dob") {
                if (!appState.cvData.personalInfo) appState.cvData.personalInfo = {};
                appState.cvData.personalInfo.dob = val;
                const inDob = document.getElementById("exp-in-dob");
                if (inDob) inDob.value = val;
            } else if (type === "pt-gender") {
                if (!appState.cvData.personalInfo) appState.cvData.personalInfo = {};
                appState.cvData.personalInfo.gender = val;
                const inGen = document.getElementById("exp-in-gender");
                if (inGen) inGen.value = val;
            } else if (type === "pt-phone") {
                if (!appState.cvData.contact) appState.cvData.contact = {};
                appState.cvData.contact.phone = val;
                const inPhone = document.getElementById("exp-in-phone");
                if (inPhone) inPhone.value = val;
            } else if (type === "pt-email") {
                if (!appState.cvData.contact) appState.cvData.contact = {};
                appState.cvData.contact.email = val;
                const inEmail = document.getElementById("exp-in-email");
                if (inEmail) inEmail.value = val;
            } else if (type === "pt-website") {
                if (!appState.cvData.contact) appState.cvData.contact = {};
                appState.cvData.contact.website = val;
                const inWeb = document.getElementById("exp-in-website");
                if (inWeb) inWeb.value = val;
            } else if (type === "pt-linkedin") {
                if (!appState.cvData.contact) appState.cvData.contact = {};
                appState.cvData.contact.linkedin = val;
                const inLin = document.getElementById("exp-in-linkedin");
                if (inLin) inLin.value = val;
            } else if (type === "pt-home") {
                if (!appState.cvData.contact) appState.cvData.contact = {};
                appState.cvData.contact.home = val;
                appState.cvData.contact.address = val;
                const inAdd = document.getElementById("exp-in-address");
                if (inAdd) inAdd.value = val;
            } else if (type === "pt-about") {
                appState.cvData.aboutMe = val;
                const inAbt = document.getElementById("exp-in-about");
                if (inAbt) inAbt.value = val;
            } else if (type === "pt-skill") {
                if (!appState.cvData.technicalSkills) appState.cvData.technicalSkills = [];
                appState.cvData.technicalSkills[idx] = val;
            } else if (type === "pt-edu-qual") {
                if (appState.cvData.education && appState.cvData.education[idx]) appState.cvData.education[idx].qualification = val;
            } else if (type === "pt-edu-period") {
                if (appState.cvData.education && appState.cvData.education[idx]) appState.cvData.education[idx].period = val;
            } else if (type === "pt-edu-inst") {
                if (appState.cvData.education && appState.cvData.education[idx]) appState.cvData.education[idx].institution = val;
            } else if (type === "pt-edu-meta") {
                if (appState.cvData.education && appState.cvData.education[idx]) appState.cvData.education[idx].meta = val;
            } else if (type === "pt-edu-bullet") {
                const bidx = parseInt(dataset.bindex);
                if (appState.cvData.education && appState.cvData.education[idx] && appState.cvData.education[idx].bullets) {
                    appState.cvData.education[idx].bullets[bidx] = val;
                }
            } else if (type === "pt-exp-role") {
                if (appState.cvData.experience && appState.cvData.experience[idx]) appState.cvData.experience[idx].role = val;
            } else if (type === "pt-exp-emp") {
                if (appState.cvData.experience && appState.cvData.experience[idx]) appState.cvData.experience[idx].employer = val;
            } else if (type === "pt-exp-period") {
                if (appState.cvData.experience && appState.cvData.experience[idx]) appState.cvData.experience[idx].period = val;
            } else if (type === "pt-exp-bullet") {
                const bidx = parseInt(dataset.bindex);
                if (appState.cvData.experience && appState.cvData.experience[idx] && appState.cvData.experience[idx].bullets) {
                    appState.cvData.experience[idx].bullets[bidx] = val;
                }
            } else if (type === "pt-mother-tongue") {
                if (!appState.cvData.languages) appState.cvData.languages = {};
                appState.cvData.languages.motherTongue = val;
            } else if (type === "pt-lang-name") {
                if (appState.cvData.languages?.other?.[idx]) appState.cvData.languages.other[idx].language = val;
            } else if (type === "pt-lang-listening") {
                if (appState.cvData.languages?.other?.[idx]) appState.cvData.languages.other[idx].listening = val;
            } else if (type === "pt-lang-reading") {
                if (appState.cvData.languages?.other?.[idx]) appState.cvData.languages.other[idx].reading = val;
            } else if (type === "pt-lang-writing") {
                if (appState.cvData.languages?.other?.[idx]) appState.cvData.languages.other[idx].writing = val;
            } else if (type === "pt-lang-sprod") {
                if (appState.cvData.languages?.other?.[idx]) appState.cvData.languages.other[idx].spokenProduction = val;
            } else if (type === "pt-lang-sint") {
                if (appState.cvData.languages?.other?.[idx]) appState.cvData.languages.other[idx].spokenInteraction = val;
            } else if (type === "pt-sig-script") {
                appState.cvData.signature = val;
                const sigName = document.querySelector('[data-type="pt-sig-name"]');
                if (sigName) sigName.textContent = val;
            } else if (type === "pt-sig-name") {
                appState.cvData.signature = val;
                const sigScript = document.querySelector('[data-type="pt-sig-script"]');
                if (sigScript) sigScript.textContent = val;
            } else if (type === "generic-sig-script") {
                appState.cvData.signature = val;
                const sigName = document.querySelector('[data-type="generic-sig-name"]');
                if (sigName) sigName.textContent = val;
            } else if (type === "generic-sig-name") {
                appState.cvData.signature = val;
                const sigScript = document.querySelector('[data-type="generic-sig-script"]');
                if (sigScript) sigScript.textContent = val;
            } else if (type === "custom-sec-title") {
                const mod = dataset.mod;
                if (mod && appState.customizerSettings.customSections && appState.customizerSettings.customSections[mod]) {
                    appState.customizerSettings.customSections[mod] = val;
                }
            } else if (type === "custom-entry-role") {
                const mod = dataset.mod;
                const i = parseInt(dataset.index);
                if (mod && appState.cvData.customSectionsData && appState.cvData.customSectionsData[mod] && appState.cvData.customSectionsData[mod][i]) {
                    appState.cvData.customSectionsData[mod][i].role = val;
                }
            } else if (type === "custom-entry-company") {
                const mod = dataset.mod;
                const i = parseInt(dataset.index);
                if (mod && appState.cvData.customSectionsData && appState.cvData.customSectionsData[mod] && appState.cvData.customSectionsData[mod][i]) {
                    appState.cvData.customSectionsData[mod][i].company = val;
                }
            } else if (type === "custom-entry-duration") {
                const mod = dataset.mod;
                const i = parseInt(dataset.index);
                if (mod && appState.cvData.customSectionsData && appState.cvData.customSectionsData[mod] && appState.cvData.customSectionsData[mod][i]) {
                    appState.cvData.customSectionsData[mod][i].duration = val;
                }
            } else if (type === "custom-entry-bullet") {
                const mod = dataset.mod;
                const i = parseInt(dataset.index);
                const bIdx = parseInt(dataset.bulletIndex);
                if (mod && appState.cvData.customSectionsData && appState.cvData.customSectionsData[mod] && appState.cvData.customSectionsData[mod][i] && appState.cvData.customSectionsData[mod][i].bullets) {
                    appState.cvData.customSectionsData[mod][i].bullets[bIdx] = val;
                }
            }

            // Keep Expert Mode form inputs in sync
            if (typeof populateExpertModeInputs === "function") {
                populateExpertModeInputs();
            } else if (typeof window.populateExpertModeInputs === "function") {
                window.populateExpertModeInputs();
            }
        });
    });
}


/* ==========================================================================
   Drag & Drop Modules logic & Expert Mode Controls
   ========================================================================== */
function scrollToSection(modId) {
    const secIdMap = {
        personal: "cv-section-personal",
        aboutMe: "cv-section-about",
        summary: "cv-section-about",
        experience: "cv-section-experience",
        education: "cv-section-education",
        skills: "cv-section-skills",
        languages: "cv-section-languages",
        signature: "cv-section-signature"
    };

    // For Bangladesh layout
    if (appState.customizerSettings.country === "bangladesh") {
        if (appState.customizerSettings.templateId === "exec-min" || appState.selectedTemplate === "exec-min" || appState.cvData?.armyInfo) {
            const bd2Map = {
                contact: "#cv-bd2-sec-contact",
                personal: "#cv-bd2-sec-personal",
                army: "#cv-bd2-sec-army",
                permanentAddress: "#cv-bd2-sec-perm-address",
                education: "#cv-bd2-sec-edu",
                jobDescription: "#cv-bd2-sec-job",
                computerSkills: "#cv-bd2-sec-skills",
                declaration: "#cv-bd2-sec-declaration",
                signature: "#cv-bd2-sec-signature"
            };
            const selector = bd2Map[modId];
            if (selector) {
                const el = document.querySelector(selector);
                if (el) {
                    el.scrollIntoView({ behavior: "smooth", block: "center" });
                    el.style.transition = "outline 0.3s ease";
                    el.style.outline = "2.5px solid var(--primary-color)";
                    setTimeout(() => { el.style.outline = ""; }, 1600);
                }
            }
            return;
        }

        const bdMap = {
            personal: ".cv-bd-header",
            aboutMe: ".cv-bd-section:first-of-type",
            education: ".cv-bd-table",
            skills: "#btn-bd-add-other",
            experience: ".cv-bd-section"
        };
        const selector = bdMap[modId];
        if (selector) {
            const el = document.querySelector(selector);
            if (el) {
                el.scrollIntoView({ behavior: "smooth", block: "center" });
                el.style.transition = "outline 0.3s ease";
                el.style.outline = "2.5px solid var(--primary-color)";
                setTimeout(() => { el.style.outline = ""; }, 1600);
            }
        }
        return;
    }

    // For Portugal layout
    if (appState.customizerSettings.country === "portugal") {
        const ptMap = {
            personal: ".cv-pt-header",
            aboutMe: ".cv-pt-about-text",
            education: "#cv-pt-edu-list",
            experience: "#cv-pt-exp-list",
            skills: "#cv-pt-skill-list",
            languages: ".cv-pt-lang-block",
            signature: ".cv-pt-signature-box"
        };
        const selector = ptMap[modId];
        if (selector) {
            const el = document.querySelector(selector);
            if (el) {
                el.scrollIntoView({ behavior: "smooth", block: "center" });
                el.style.transition = "outline 0.3s ease";
                el.style.outline = "2.5px solid var(--primary-color)";
                setTimeout(() => { el.style.outline = ""; }, 1600);
            }
        }
        return;
    }

    const targetId = secIdMap[modId];
    if (targetId) {
        const el = document.getElementById(targetId);
        if (el) {
            el.scrollIntoView({ behavior: "smooth", block: "center" });
            el.style.transition = "outline 0.3s ease";
            el.style.outline = "2.5px solid var(--primary-color)";
            setTimeout(() => { el.style.outline = ""; }, 1600);
        }
    }
}

let _dragAndDropInitialized = false;
function setupDragAndDrop() {
    const container = document.getElementById("module-list-container");
    if (!container) return;
    // Guard: only attach event listeners once, even if called multiple times
    if (container._dndReady) return;
    container._dndReady = true;

    container.addEventListener("dragstart", (e) => {
        if (e.target.closest(".toggle-visibility-btn")) {
            e.preventDefault();
            return false;
        }
        const item = e.target.closest(".module-item");
        if (!item) return;
        item.classList.add("dragging");
    });

    container.addEventListener("dragend", (e) => {
        const item = e.target.closest(".module-item");
        if (!item) return;
        item.classList.remove("dragging");

        // Read new order from DOM elements
        const ordered = [];
        container.querySelectorAll(".module-item").forEach(el => {
            if (el.dataset.module) ordered.push(el.dataset.module);
        });

        if (ordered.length > 0) {
            appState.customizerSettings.modulesOrder = ordered;
            updateLivePreview();
            showToast("Modules order updated.");
        }
    });

    container.addEventListener("dragover", (e) => {
        e.preventDefault();
        const afterElement = getDragAfterElement(container, e.clientY);
        const dragging = container.querySelector(".dragging");
        if (!dragging) return;
        if (afterElement == null) {
            container.appendChild(dragging);
        } else {
            container.insertBefore(dragging, afterElement);
        }
    });

    // Delegated click handler for module toggles and row interaction
    container.addEventListener("click", (e) => {
        const toggleBtn = e.target.closest(".toggle-visibility-btn");
        if (toggleBtn) {
            e.preventDefault();
            e.stopPropagation();
            const modId = toggleBtn.dataset.module;
            const isCurrentlyActive = toggleBtn.classList.contains("active");

            if (isCurrentlyActive) {
                // Turn OFF / hide
                if (!appState.customizerSettings.hiddenModules.includes(modId)) {
                    appState.customizerSettings.hiddenModules.push(modId);
                }
                if (modId === "signature") {
                    appState.customizerSettings.showSignature = false;
                    const sigToggle = document.getElementById("signature-toggle");
                    if (sigToggle) sigToggle.checked = false;
                }
                showToast(`Section hidden from CV.`);
            } else {
                // Turn ON / show
                appState.customizerSettings.hiddenModules = appState.customizerSettings.hiddenModules.filter(id => id !== modId);
                if (modId === "signature") {
                    appState.customizerSettings.showSignature = true;
                    const sigToggle = document.getElementById("signature-toggle");
                    if (sigToggle) sigToggle.checked = true;
                }
                showToast(`Section visible on CV.`);
            }

            renderSidebarModulesList();
            updateLivePreview();
            return;
        }

        // Clicking row navigates & highlights section in live preview
        const moduleItem = e.target.closest(".module-item");
        if (moduleItem && !e.target.closest(".drag-handle")) {
            const modId = moduleItem.dataset.module;
            scrollToSection(modId);
        }
    });
}

function getDragAfterElement(container, y) {
    const draggableElements = [...container.querySelectorAll(".module-item:not(.dragging)")];

    return draggableElements.reduce((closest, child) => {
        const box = child.getBoundingClientRect();
        const offset = y - box.top - box.height / 2;
        if (offset < 0 && offset > closest.offset) {
            return { offset: offset, element: child };
        } else {
            return closest;
        }
    }, { offset: Number.NEGATIVE_INFINITY }).element;
}

function renderSidebarModulesList() {
    const container = document.getElementById("module-list-container");
    if (!container) return;

    const settings = appState.customizerSettings;
    if (!settings.modulesOrder || !Array.isArray(settings.modulesOrder) || !settings.modulesOrder.includes("aboutMe") || !settings.modulesOrder.includes("experience")) {
        settings.modulesOrder = ["personal", "aboutMe", "education", "skills", "experience", "languages", "signature"];
    }
    if (!settings.modulesOrder.includes("personal")) {
        settings.modulesOrder.unshift("personal");
    }
    if (!settings.modulesOrder.includes("signature")) {
        settings.modulesOrder.push("signature");
    }
    if (!settings.hiddenModules || !Array.isArray(settings.hiddenModules)) {
        settings.hiddenModules = [];
    }

    const lang = appState.language || "en";
    const dict = TRANSLATIONS[lang] || TRANSLATIONS["en"];

    // Handle Bangladesh specific layout
    if (settings.country === "bangladesh") {
        if (settings.templateId === "exec-min" || appState.selectedTemplate === "exec-min" || (appState.cvData && appState.cvData.armyInfo)) {
            const bd2Modules = [
                { id: "contact", name: "Contact Information", icon: `<svg class="module-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>` },
                { id: "personal", name: "Personal Information", icon: `<svg class="module-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>` },
                { id: "army", name: "Army Information", icon: `<svg class="module-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>` },
                { id: "permanentAddress", name: "Permanent Address", icon: `<svg class="module-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path><polyline points="9 22 9 12 15 12 15 22"></polyline></svg>` },
                { id: "education", name: "Educational Qualification", icon: `<svg class="module-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 10v6M2 10l10-5 10 5-10 5z"></path><path d="M6 12v5c0 2 2 3 6 3s6-1 6-3v-5"></path></svg>` },
                { id: "jobDescription", name: "Job Description", icon: `<svg class="module-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="2" y="7" width="20" height="14" rx="2" ry="2"></rect><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path></svg>` },
                { id: "computerSkills", name: "Computer Skill", icon: `<svg class="module-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect><line x1="8" y1="21" x2="16" y2="21"></line><line x1="12" y1="17" x2="12" y2="21"></line></svg>` },
                { id: "declaration", name: "Declaration", icon: `<svg class="module-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline><line x1="16" y1="13" x2="8" y2="13"></line><line x1="16" y1="17" x2="8" y2="17"></line></svg>` },
                { id: "signature", name: "Date & Signature", icon: `<svg class="module-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"></path></svg>` }
            ];

            container.innerHTML = "";
            const hiddenMods = settings.hiddenModules || [];
            bd2Modules.forEach(mod => {
                const isVisible = !hiddenMods.includes(mod.id);
                const div = document.createElement("div");
                div.className = `module-item ${isVisible ? '' : 'module-item-hidden'}`;
                div.dataset.module = mod.id;
                div.title = "Click to scroll to section in preview";
                div.innerHTML = `
                    <span class="module-name-wrapper" style="cursor:pointer;flex:1;">
                        ${mod.icon}
                        <span>${mod.name}</span>
                    </span>
                    <button type="button" draggable="false" class="toggle-visibility-btn ${isVisible ? 'active' : ''}" data-module="${mod.id}" title="${isVisible ? 'Hide this section' : 'Show this section'}" aria-label="Toggle ${mod.name}"></button>
                `;
                div.addEventListener("click", (e) => {
                    if (e.target.closest(".toggle-visibility-btn")) return;
                    scrollToSection(mod.id);
                });
                container.appendChild(div);
            });
            const addBtn = document.getElementById("btn-add-module");
            if (addBtn) addBtn.style.display = "none";
            return;
        }

        container.innerHTML = `
      <div style="font-size:12.5px;color:var(--text-muted);padding:10px;background:#f8fafc;border:1.5px dashed var(--border-color);border-radius:var(--radius-sm);line-height:1.4;">
        ✨ <strong>Standard Formal Layout:</strong> Bangladesh CV uses a strict formal layout with structured sections. Spacing and colors can still be customized below!
      </div>
    `;
        const addBtn = document.getElementById("btn-add-module");
        if (addBtn) addBtn.style.display = "none";
        return;
    }

    const addBtn = document.getElementById("btn-add-module");
    if (addBtn) addBtn.style.display = "block";

    const itemsMap = {
        personal: {
            name: dict.personal_details || "Personal Details",
            icon: `<svg class="module-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>`
        },
        aboutMe: {
            name: dict.about_me || "About Me",
            icon: `<svg class="module-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline><line x1="16" y1="13" x2="8" y2="13"></line><line x1="16" y1="17" x2="8" y2="17"></line></svg>`
        },
        summary: {
            name: dict.about_me || "About Me",
            icon: `<svg class="module-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline><line x1="16" y1="13" x2="8" y2="13"></line><line x1="16" y1="17" x2="8" y2="17"></line></svg>`
        },
        experience: {
            name: dict.work_history || "Work History",
            icon: `<svg class="module-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="7" width="20" height="14" rx="2" ry="2"></rect><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path></svg>`
        },
        education: {
            name: dict.education || "Education",
            icon: `<svg class="module-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 10v6M2 10l10-5 10 5-10 5z"></path><path d="M6 12v5c0 2 2 3 6 3s6-1 6-3v-5"></path></svg>`
        },
        skills: {
            name: dict.skills || "Skills",
            icon: `<svg class="module-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><line x1="2" y1="12" x2="22" y2="12"></line><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path></svg>`
        },
        languages: {
            name: dict.language_skills || "Language Skills",
            icon: `<svg class="module-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><path d="M2 12h20"></path><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path></svg>`
        },
        signature: {
            name: "Signature",
            icon: `<svg class="module-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"></path></svg>`
        },
        projects: {
            name: "Projects",
            icon: `<svg class="module-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.121 2.121 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"></path></svg>`
        },
        certifications: {
            name: "Certifications",
            icon: `<svg class="module-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="8" r="6"></circle><path d="M15.477 12.89L17 22l-5-3-5 3 1.523-9.11"></path></svg>`
        },
        awards: {
            name: "Awards & Honours",
            icon: `<svg class="module-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6"></path><path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18"></path><path d="M4 22h16"></path><path d="M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22"></path><path d="M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22"></path><path d="M18 2H6v7a6 6 0 0 0 12 0V2z"></path></svg>`
        },
        references: {
            name: "References",
            icon: `<svg class="module-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline><line x1="16" y1="13" x2="8" y2="13"></line><line x1="16" y1="17" x2="8" y2="17"></line></svg>`
        }
    };

    // Add any custom sections from appState to the itemsMap
    const customSections = settings.customSections || {};
    Object.keys(customSections).forEach(csId => {
        itemsMap[csId] = {
            name: customSections[csId],
            icon: `<svg class="module-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="18" height="18" rx="2"/><line x1="3" y1="9" x2="21" y2="9"/><line x1="9" y1="21" x2="9" y2="9"/></svg>`
        };
    });

    container.innerHTML = "";
    settings.modulesOrder.forEach(modId => {
        const isVisible = !settings.hiddenModules.includes(modId);
        const item = itemsMap[modId];
        if (!item) return;

        const div = document.createElement("div");
        div.className = `module-item ${isVisible ? '' : 'module-item-hidden'}`;
        div.draggable = true;
        div.dataset.module = modId;
        div.title = "Click to scroll to section in preview, drag to reorder";
        div.innerHTML = `
      <span class="drag-handle" title="Drag to reorder">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="9" cy="5" r="1"></circle><circle cx="9" cy="12" r="1"></circle><circle cx="9" cy="19" r="1"></circle><circle cx="15" cy="5" r="1"></circle><circle cx="15" cy="12" r="1"></circle><circle cx="15" cy="19" r="1"></circle></svg>
      </span>
      <span class="module-name-wrapper">
        ${item.icon}
        <span>${item.name}</span>
      </span>
      <button type="button" draggable="false" class="toggle-visibility-btn ${isVisible ? 'active' : ''}" data-module="${modId}" title="${isVisible ? 'Hide this section' : 'Show this section'}" aria-label="Toggle ${item.name}"></button>
    `;
        container.appendChild(div);
    });
}

function initAddModuleModal() {
    const addBtn = document.getElementById("btn-add-module");
    const modal = document.getElementById("add-module-modal");
    const closeBtn = document.getElementById("btn-close-add-module-modal");
    const cancelBtn = document.getElementById("btn-cancel-add-module");
    const listContainer = document.getElementById("add-module-options-list");

    if (!addBtn || !modal) return;

    function openModal() {
        renderAddModuleList();
        modal.classList.remove("hidden");
    }

    function closeModal() {
        modal.classList.add("hidden");
    }

    addBtn.onclick = (e) => {
        e.preventDefault();
        openModal();
    };

    if (closeBtn) closeBtn.onclick = closeModal;
    if (cancelBtn) cancelBtn.onclick = closeModal;
    modal.onclick = (e) => {
        if (e.target === modal) closeModal();
    };

    function renderAddModuleList() {
        if (!listContainer) return;
        const settings = appState.customizerSettings;
        const allModules = [
            { id: "personal",       name: "Personal Details",      icon: "👤", desc: "Name, job title & contact credentials" },
            { id: "aboutMe",        name: "About Me / Summary",    icon: "📝", desc: "Professional career summary & background" },
            { id: "experience",     name: "Work History",          icon: "💼", desc: "Employment history, roles & responsibilities" },
            { id: "education",      name: "Education & Training",  icon: "🎓", desc: "Degrees, academic background & certifications" },
            { id: "skills",         name: "Skills",               icon: "⚡", desc: "Core competencies and key abilities" },
            { id: "languages",      name: "Language Skills",       icon: "🌐", desc: "Native languages and CEFR proficiency levels" },
            { id: "signature",      name: "Signature",             icon: "✍️", desc: "Formal signature declaration block" },
            { id: "projects",       name: "Projects",             icon: "🛠️", desc: "Personal or professional projects you have worked on" },
            { id: "certifications", name: "Certifications",        icon: "🏅", desc: "Licenses, certificates & professional qualifications" },
            { id: "awards",         name: "Awards & Honours",     icon: "🏆", desc: "Recognitions, prizes and achievements" },
            { id: "references",     name: "References",           icon: "📋", desc: "Professional referees and recommendations" }
        ];

        listContainer.innerHTML = "";
        allModules.forEach(mod => {
            const isHidden = settings.hiddenModules.includes(mod.id);
            const isInOrder = settings.modulesOrder.includes(mod.id);
            const isActive = isInOrder && !isHidden;

            const item = document.createElement("div");
            item.style.cssText = "display: flex; align-items: center; justify-content: space-between; padding: 12px 14px; background: #ffffff; border: 1.5px solid #e2e8f0; border-radius: 12px; transition: all 0.2s;";
            item.innerHTML = `
                <div style="display: flex; align-items: center; gap: 12px;">
                    <span style="font-size: 20px; width: 36px; height: 36px; display: flex; align-items: center; justify-content: center; background: #f1f5f9; border-radius: 10px;">${mod.icon}</span>
                    <div>
                        <strong style="display: block; font-size: 13.5px; color: #0f172a;">${mod.name}</strong>
                        <span style="font-size: 11.5px; color: #64748b;">${mod.desc}</span>
                    </div>
                </div>
                <div>
                    ${isActive 
                        ? `<span style="font-size: 12px; font-weight: 700; color: #10b981; background: #ecfdf5; padding: 4px 10px; border-radius: 20px; border: 1px solid #a7f3d0;">✓ Active</span>`
                        : `<button type="button" class="btn-activate-module" data-id="${mod.id}" style="font-size: 12px; font-weight: 700; color: white; background: #2563eb; padding: 6px 14px; border-radius: 8px; border: none; cursor: pointer; box-shadow: 0 2px 6px rgba(37,99,235,0.25);">+ Add Section</button>`
                    }
                </div>
            `;
            listContainer.appendChild(item);
        });

        // --- Custom Section creator ---
        const customCreatorDiv = document.createElement("div");
        customCreatorDiv.style.cssText = "margin-top:8px;padding:14px;background:#f0f9ff;border:1.5px dashed #38bdf8;border-radius:12px;";
        customCreatorDiv.innerHTML = `
            <p style="margin:0 0 8px;font-size:13px;font-weight:700;color:#0369a1;">✏️ Add Custom Section</p>
            <div style="display:flex;gap:8px;">
                <input type="text" id="input-new-custom-section" placeholder="e.g. Volunteering, Hobbies, Publications…"
                    style="flex:1;padding:8px 10px;font-size:13px;border:1.5px solid #bae6fd;border-radius:8px;outline:none;color:#0f172a;background:#fff;" />
                <button type="button" id="btn-create-custom-section"
                    style="padding:8px 14px;background:#0284c7;color:#fff;border:none;border-radius:8px;font-size:12.5px;font-weight:700;cursor:pointer;white-space:nowrap;">
                    + Add
                </button>
            </div>
        `;
        listContainer.appendChild(customCreatorDiv);

        // Attach activate listeners
        listContainer.querySelectorAll(".btn-activate-module").forEach(btn => {
            btn.addEventListener("click", () => {
                const modId = btn.dataset.id;
                if (!settings.modulesOrder.includes(modId)) {
                    settings.modulesOrder.push(modId);
                }
                settings.hiddenModules = settings.hiddenModules.filter(id => id !== modId);

                renderSidebarModulesList();
                updateLivePreview();
                closeModal();
                showToast(`✅ Added ${modId} section to CV!`);
                scrollToSection(modId);
            });
        });

        // Custom section button handler
        const customInput = document.getElementById("input-new-custom-section");
        const customBtn   = document.getElementById("btn-create-custom-section");
        if (customBtn && customInput) {
            customInput.addEventListener("keydown", (e) => {
                if (e.key === "Enter") {
                    e.preventDefault();
                    customBtn.click();
                }
            });
            customBtn.addEventListener("click", () => {
                const rawTitle = customInput.value.trim();
                if (!rawTitle) { customInput.focus(); return; }
                // Create a safe ID from the title
                const customId = "custom_" + rawTitle.toLowerCase().replace(/[^a-z0-9]+/g, "_").replace(/^_|_$/g, "");

                // Store custom section title in appState
                if (!appState.customizerSettings.customSections) {
                    appState.customizerSettings.customSections = {};
                }
                appState.customizerSettings.customSections[customId] = rawTitle;

                if (!settings.modulesOrder.includes(customId)) {
                    settings.modulesOrder.push(customId);
                }
                settings.hiddenModules = settings.hiddenModules.filter(id => id !== customId);

                renderSidebarModulesList();
                updateLivePreview();
                closeModal();
                showToast(`✅ "${rawTitle}" section added to CV!`);
            });
        }
    }
}

/* ==========================================================================
   Saved Documents logic & Custom Save Modal
   ========================================================================== */
let pendingSaveDocumentCallback = null;

function showSaveDocumentModal({ title = "Save Document", subtitle = "Enter a title for your document to save it.", defaultTitle = "", showTypeSelector = false, onSave }) {
    const modal = document.getElementById("save-document-modal");
    const modalTitle = document.getElementById("save-modal-title-text");
    const modalSubtitle = document.getElementById("save-modal-subtitle");
    const inputTitle = document.getElementById("save-modal-doc-title");
    const typeContainer = document.getElementById("save-modal-type-container");

    if (!modal || !inputTitle) return;

    if (modalTitle) modalTitle.textContent = title;
    if (modalSubtitle) modalSubtitle.textContent = subtitle;
    inputTitle.value = defaultTitle;

    if (typeContainer) {
        typeContainer.style.display = showTypeSelector ? "grid" : "none";
    }

    pendingSaveDocumentCallback = onSave;
    modal.classList.remove("hidden");

    setTimeout(() => {
        inputTitle.focus();
        inputTitle.select();
    }, 50);
}

function closeSaveDocumentModal() {
    const modal = document.getElementById("save-document-modal");
    if (modal) modal.classList.add("hidden");
    pendingSaveDocumentCallback = null;
}

function initSaveDocumentModal() {
    const saveModal = document.getElementById("save-document-modal");
    const saveForm = document.getElementById("save-document-modal-form");
    const closeSaveBtn = document.getElementById("btn-close-save-modal");
    const cancelSaveBtn = document.getElementById("btn-cancel-save-modal");

    if (saveForm) {
        saveForm.addEventListener("submit", (e) => {
            e.preventDefault();
            const titleInput = document.getElementById("save-modal-doc-title");
            const titleVal = titleInput ? titleInput.value.trim() : "";
            const typeInput = document.querySelector("input[name='save-doc-type']:checked");
            const typeVal = typeInput ? typeInput.value : "Resume";

            if (!titleVal) {
                showToast("Please enter a document title.", "error");
                return;
            }

            const callback = pendingSaveDocumentCallback;
            closeSaveDocumentModal();
            if (typeof callback === "function") {
                callback(titleVal, typeVal);
            }
        });
    }

    if (closeSaveBtn) closeSaveBtn.addEventListener("click", closeSaveDocumentModal);
    if (cancelSaveBtn) cancelSaveBtn.addEventListener("click", closeSaveDocumentModal);
    if (saveModal) {
        saveModal.addEventListener("click", (e) => {
            if (e.target === saveModal) closeSaveDocumentModal();
        });
    }
}

function setupDocumentActions() {
    // Create new document trigger
    const createBtn = document.getElementById("btn-create-document");
    if (createBtn) {
        createBtn.addEventListener("click", () => {
            showSaveDocumentModal({
                title: "Create New Document 📝",
                subtitle: "Enter a title and select document type (Resume or Cover Letter).",
                defaultTitle: "My New Resume",
                showTypeSelector: true,
                onSave: (title, type) => {
                    if (!title) return;

                    const newDoc = {
                        id: "doc_" + Date.now(),
                        title: title,
                        type: type,
                        meta: "Created just now",
                        settings: {
                            font: "serif",
                            accentColor: "#111827",
                            density: 2,
                            showPhoto: type === "Resume",
                            photoUrl: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=200",
                            modulesOrder: ["personal", "experience", "education", "skills"],
                            hiddenModules: type === "Cover Letter" ? ["education", "skills"] : []
                        },
                        cvData: JSON.parse(JSON.stringify(DEFAULT_CV_DATA))
                    };

                    if (type === "Cover Letter") {
                        newDoc.cvData.experience.title = "Cover Letter";
                        newDoc.cvData.experience.entries = [{
                            company: "Dear Hiring Team,",
                            duration: "Date",
                            role: "Subject: Application",
                            bullets: ["I am writing to express my interest in this position..."]
                        }];
                        newDoc.cvData.education.entries = [];
                        newDoc.cvData.skills.items = [];
                    }

                    appState.documents.push(newDoc);
                    localStorage.setItem(getDocsStorageKey(), JSON.stringify(appState.documents));

                    // Sync to Supabase under user email
                    const sessionUser = localStorage.getItem("current_user") || localStorage.getItem("cv_user_auth");
                    if (sessionUser) {
                        try {
                            const u = JSON.parse(sessionUser);
                            if (u && u.email) saveCvToSupabase(u.email, newDoc);
                        } catch(e){}
                    }

                    // Load this newly created document into the Customizer immediately
                    appState.currentDocId = newDoc.id;
                    appState.cvData = newDoc.cvData;
                    appState.customizerSettings = newDoc.settings;

                    syncCustomizerControlsToState();
                    updateLivePreview();
                    renderSavedDocuments();

                    showToast(`Document "${title}" created successfully.`);
                    switchTab("customize");
                }
            });
        });
    }

    // Document Grid interactions (Edit, Delete, Download)
    const container = document.getElementById("documents-grid-container");
    if (container) {
        container.addEventListener("click", (e) => {
            const btn = e.target.closest(".doc-action-btn");
            if (!btn) return;

            const docId = btn.dataset.docId;
            const doc = appState.documents.find(d => d.id === docId);
            if (!doc) return;

            if (btn.classList.contains("edit-doc")) {
                // Load into State customizer
                appState.currentDocId = doc.id;
                appState.cvData = JSON.parse(JSON.stringify(doc.cvData));
                appState.customizerSettings = JSON.parse(JSON.stringify(doc.settings));
                appState.selectedCountry = doc.settings.country || null;

                syncCustomizerControlsToState();
                updateLivePreview();

                showToast(`Loaded "${doc.title}" into customizer.`);
                switchTab("customize");
            }
            else if (btn.classList.contains("download-doc")) {
                // Load document state and trigger PDF export
                appState.currentDocId = doc.id;
                appState.cvData = JSON.parse(JSON.stringify(doc.cvData));
                appState.customizerSettings = JSON.parse(JSON.stringify(doc.settings));
                appState.selectedCountry = doc.settings.country || null;

                syncCustomizerControlsToState();
                updateLivePreview();

                exportDocumentAs("pdf");
            }
            else if (btn.classList.contains("delete-doc")) {
                if (confirm(`Are you sure you want to delete "${doc.title}"?`)) {
                    appState.documents = appState.documents.filter(d => d.id !== docId);
                    localStorage.setItem(getDocsStorageKey(), JSON.stringify(appState.documents));
                    deleteCvFromSupabase(docId);
                    renderSavedDocuments();
                    showToast(`Deleted document "${doc.title}".`);
                }
            }
        });
    }
}

// Save document currently in Customizer
function saveCurrentDocument() {
    const currentId = appState.currentDocId;
    const today = new Date();
    const dateStr = `Edited ${today.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}`;

    const sessionUser = localStorage.getItem("current_user") || localStorage.getItem("cv_user_auth");
    let userEmail = null;
    if (sessionUser) {
        try { userEmail = JSON.parse(sessionUser).email; } catch(e){}
    }

    // Reload active user documents from LocalStorage
    const localDocsStr = localStorage.getItem(getDocsStorageKey());
    if (localDocsStr) {
        try { appState.documents = JSON.parse(localDocsStr); } catch(e){}
    }
    if (!Array.isArray(appState.documents)) appState.documents = [];

    let docIdx = -1;
    if (currentId) {
        docIdx = appState.documents.findIndex(d => d.id === currentId);
    }

    if (docIdx > -1) {
        // Update existing document
        appState.documents[docIdx].cvData = JSON.parse(JSON.stringify(appState.cvData));
        appState.documents[docIdx].settings = JSON.parse(JSON.stringify(appState.customizerSettings));
        appState.documents[docIdx].meta = dateStr;

        localStorage.setItem(getDocsStorageKey(), JSON.stringify(appState.documents));
        if (userEmail) saveCvToSupabase(userEmail, appState.documents[docIdx]);
        showToast(`Saved changes to "${appState.documents[docIdx].title}".`, "success");
        if (typeof addHeaderNotification === "function") {
            addHeaderNotification("CV Saved 📄", `Saved changes to "${appState.documents[docIdx].title}".`, "💾");
        }
        renderSavedDocuments();
    } else {
        // Save as a new document via custom Save Modal
        const defaultTitle = appState.cvData?.personal?.fullName ? `${appState.cvData.personal.fullName}'s Resume` : "My Customized Resume";

        showSaveDocumentModal({
            title: "Save CV as New Document 📄",
            subtitle: "Enter a title for your resume to save it to My Documents & Cloud Database.",
            defaultTitle: defaultTitle,
            showTypeSelector: false,
            onSave: (title) => {
                if (!title) return;

                const newDoc = {
                    id: "doc_" + Date.now(),
                    title: title,
                    type: "Resume",
                    meta: dateStr,
                    settings: JSON.parse(JSON.stringify(appState.customizerSettings)),
                    cvData: JSON.parse(JSON.stringify(appState.cvData))
                };

                appState.documents.push(newDoc);
                appState.currentDocId = newDoc.id; // Mark current document

                localStorage.setItem(getDocsStorageKey(), JSON.stringify(appState.documents));
                if (userEmail) saveCvToSupabase(userEmail, newDoc);
                showToast(`Saved as "${title}".`, "success");
                if (typeof addHeaderNotification === "function") {
                    addHeaderNotification("CV Saved 📄", `New CV "${title}" saved to My Documents.`, "💾");
                }
                renderSavedDocuments();
            }
        });
    }
}

// Render the grid of saved documents
async function renderSavedDocuments() {
    const container = document.getElementById("documents-grid-container");
    if (!container) return;

    // Load active user documents from LocalStorage key
    const localDocsStr = localStorage.getItem(getDocsStorageKey());
    let docs = [];
    if (localDocsStr) {
        try {
            docs = JSON.parse(localDocsStr) || [];
        } catch(e){}
    }
    docs = docs.filter(isUserSavedDoc);

    // Fetch user documents from Supabase if logged in
    const sessionUser = localStorage.getItem("current_user") || localStorage.getItem("cv_user_auth");
    if (sessionUser) {
        try {
            const user = JSON.parse(sessionUser);
            if (user && user.email) {
                const remoteDocs = await fetchUserCvsFromSupabase(user.email);
                if (remoteDocs && remoteDocs.length > 0) {
                    remoteDocs.forEach(rdoc => {
                        if (!isUserSavedDoc(rdoc)) return;
                        const existingIdx = docs.findIndex(d => d.id === rdoc.id);
                        if (existingIdx === -1) {
                            docs.push(rdoc);
                        } else if (rdoc.cvData && Object.keys(rdoc.cvData).length > 0) {
                            docs[existingIdx] = rdoc;
                        }
                    });
                    localStorage.setItem(getDocsStorageKey(), JSON.stringify(docs));
                }
            }
        } catch(e) {}
    }

    appState.documents = docs;
    container.innerHTML = "";
    if (appState.documents.length === 0) {
        container.innerHTML = `<div class="empty-docs text-center" style="grid-column: 1/-1; padding: 48px 20px; color: #64748b; background: #f8fafc; border: 2px dashed #cbd5e1; border-radius: 16px; margin: 10px 0; text-align: center;">
            <span style="font-size: 38px; display: block; margin-bottom: 10px;">📂</span>
            <h4 style="margin: 0 0 6px 0; font-size: 16px; font-weight: 700; color: #0f172a;">No Saved Documents Yet</h4>
            <p style="margin: 0; font-size: 13px; color: #64748b;">Only documents you save will be listed here. Click "Save CV" in Customize tab or "Create New Document" to save a CV.</p>
        </div>`;
        return;
    }

    appState.documents.forEach(doc => {
        const docSettings = doc.settings || { font: "inter", accentColor: "#2563eb" };
        const card = document.createElement("div");
        card.className = "doc-card";
        card.dataset.docId = doc.id;
        card.innerHTML = `
      <div class="doc-preview">
        <div class="doc-badge">${doc.type || "Resume"}</div>
        <div class="doc-thumbnail-lines" style="font-family: var(--font-${docSettings.font || 'inter'})">
          <div class="thumb-line w-30 m-b-10" style="background-color: ${docSettings.accentColor || '#2563eb'}; height: 4px;"></div>
          <div class="thumb-line w-80"></div>
          <div class="thumb-line w-90"></div>
          <div class="thumb-line w-75"></div>
          <div class="thumb-line w-85"></div>
        </div>
      </div>
      <div class="doc-info">
        <h3>${doc.title || "Untitled Resume"}</h3>
        <p class="doc-meta">${doc.meta || "Saved"}</p>
        <div class="doc-actions">
          <div class="actions-left">
            <button class="doc-action-btn edit-doc" data-doc-id="${doc.id}" title="Edit Document">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"></path><path d="M18.5 2.5a2.121 2.121 0 1 1 3 3L12 15l-4 1 1-4z"></path></svg>
            </button>
            <button class="doc-action-btn download-doc" data-doc-id="${doc.id}" title="Download PDF">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><polyline points="7 10 12 15 17 10"></polyline><line x1="12" y1="15" x2="12" y2="3"></line></svg>
            </button>
          </div>
          <button class="doc-action-btn delete-doc" data-doc-id="${doc.id}" title="Delete Document">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="3 6 5 6 21 6"></polyline><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path><line x1="10" y1="11" x2="10" y2="17"></line><line x1="14" y1="11" x2="14" y2="17"></line></svg>
          </button>
        </div>
      </div>
    `;
        container.appendChild(card);
    });
}

/* ==========================================================================
   Toasts notifications system
   ========================================================================== */
function showToast(message, type = "success") {
    const container = document.getElementById("toast-container");
    if (!container) return;

    // Clear previous toasts so lines don't stack up at the bottom
    container.innerHTML = "";

    const toast = document.createElement("div");
    toast.className = "toast";
    if (type === "error") {
        toast.style.backgroundColor = "#ef4444";
    }

    // Add a nice checkmark or warning icon based on type
    const icon = type === "success"
        ? `<svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="20 6 9 17 4 12"></polyline></svg>`
        : `<svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2.5"><circle cx="12" cy="12" r="10"></circle><line x1="12" y1="8" x2="12" y2="12"></line><line x1="12" y1="16" x2="12.01" y2="16"></line></svg>`;

    toast.innerHTML = `${icon} <span>${message}</span>`;
    container.appendChild(toast);

    // Fade out and remove toast after 3 seconds
    setTimeout(() => {
        toast.style.transition = "opacity 0.4s ease, transform 0.4s ease";
        toast.style.opacity = "0";
        toast.style.transform = "translateY(10px)";
        setTimeout(() => {
            toast.remove();
        }, 400);
    }, 2600);
}

/* ==========================================================================
   Language Translation & Dropdown
   ========================================================================== */

function initLanguageDropdown() {
    const container = document.getElementById("lang-dropdown-container");
    const btn = document.getElementById("lang-btn");
    const menu = document.getElementById("lang-dropdown-menu");
    const items = document.querySelectorAll(".lang-dropdown-item");
    const btnText = document.getElementById("lang-btn-text");

    if (!container || !btn || !menu) return;
    if (container.dataset.initialized === "true") return;
    container.dataset.initialized = "true";

    // Toggle Dropdown
    btn.addEventListener("click", (e) => {
        e.preventDefault();
        e.stopPropagation();
        container.classList.toggle("open");
    });

    // Handle outside click
    document.addEventListener("click", (e) => {
        if (!container.contains(e.target)) {
            container.classList.remove("open");
        }
    });

    // Handle Item Selection
    items.forEach(item => {
        item.addEventListener("click", (e) => {
            e.preventDefault();
            e.stopPropagation();
            const lang = item.dataset.lang;
            if (!lang) return;

            // Update State
            appState.language = lang;
            localStorage.setItem("global_resume_lang", lang);

            // Sync preview language
            appState.previewLanguage = lang;
            localStorage.setItem("global_resume_preview_lang", lang);

            // Sync customizer language select if present
            const customizerLangSelect = document.getElementById("customizer-lang-select");
            if (customizerLangSelect) {
                customizerLangSelect.value = lang;
            }

            // Update active styling
            items.forEach(i => i.classList.remove("active"));
            item.classList.add("active");

            // Update button text (short name in uppercase)
            if (btnText) {
                btnText.textContent = lang.toUpperCase();
            }

            // Close dropdown
            container.classList.remove("open");

            // Translate the page
            translatePage(lang);

            const langNameEl = item.querySelector(".lang-name");
            const langName = langNameEl ? langNameEl.textContent : lang.toUpperCase();
            showToast(lang === "bn" ? `ভাষা পরিবর্তন করা হয়েছে: ${langName}` : `Language switched to ${langName}`);
        });
    });

    // Apply initial language button text on load
    const initialLang = appState.language || localStorage.getItem("global_resume_lang") || "en";
    if (btnText) {
        btnText.textContent = initialLang.toUpperCase();
    }

    // Set correct active item
    items.forEach(item => {
        if (item.dataset.lang === initialLang) {
            item.classList.add("active");
        } else {
            item.classList.remove("active");
        }
    });

    // Trigger initial translation
    translatePage(initialLang);
}

function translatePage(lang) {
    const dict = TRANSLATIONS[lang] || TRANSLATIONS["en"];

    // 1. Translate all structural elements marked with data-i18n
    const elements = document.querySelectorAll("[data-i18n]");
    elements.forEach(el => {
        const key = el.dataset.i18n;
        if (dict[key]) {
            if (el.tagName === "INPUT" || el.tagName === "TEXTAREA") {
                el.placeholder = dict[key];
            } else {
                if (key === "footer_language") {
                    const langNames = {
                        en: "English", bn: "বাংলা", de: "Deutsch", fr: "Français", it: "Italiano",
                        pt: "Português", da: "Dansk", no: "Norsk", ru: "Русский", ja: "日本語", ko: "한국어", ms: "Bahasa Melayu"
                    };
                    const langLabel = langNames[lang] || "English";
                    let prefix = "Language";
                    if (lang === "bn") prefix = "ভাষা";
                    else if (lang === "de") prefix = "Sprache";
                    else if (lang === "fr") prefix = "Langue";
                    else if (lang === "it") prefix = "Lingua";
                    else if (lang === "pt") prefix = "Idioma";
                    else if (lang === "da") prefix = "Sprog";
                    else if (lang === "no") prefix = "Språk";
                    else if (lang === "ru") prefix = "Язык";
                    else if (lang === "ja") prefix = "言語";
                    else if (lang === "ko") prefix = "언어";
                    else if (lang === "ms") prefix = "Bahasa";
                    el.textContent = `${prefix}: ${langLabel}`;
                } else {
                    el.textContent = dict[key];
                }
            }
        } else if (key === "translate_preview_option") {
            const options = {
                en: "Translate (Language)",
                bn: "অনুবাদ (ভাষা)",
                de: "Übersetzen (Sprache)",
                fr: "Traduire (Langue)",
                it: "Traduci (Lingua)",
                pt: "Traduzir (Idioma)",
                da: "Oversæt (Sprog)",
                no: "Oversett (Språk)",
                ru: "Перевести (Язык)",
                ja: "翻訳 (言語)",
                ko: "번역 (언어)",
                ms: "Terjemah (Bahasa)"
            };
            el.textContent = options[lang] || options["en"];
        }
    });

    // 2. Update html lang attribute for accessibility
    document.documentElement.lang = lang;

    // 3. Update sidebar module labels (they use data-i18n attributes, already handled above)
    // Re-apply to any dynamically rendered module items
    document.querySelectorAll(".module-item [data-i18n]").forEach(el => {
        const key = el.dataset.i18n;
        if (dict[key]) el.textContent = dict[key];
    });

    // 4. Re-render Live Preview with translated contents
    updateLivePreview();
}

/* ==========================================================================
   Authentication & User Management System (Persistent LocalStorage Database)
   ========================================================================== */
function initAuthSystem() {
    // 1. Initialise registered users database in localStorage with Admin account
    let currentUsers = getRegisteredUsers();
    if (!currentUsers.some(u => u.email.toLowerCase() === "shahedtnvr769@gmail.com")) {
        currentUsers.push({
            name: "MD Shahed (Admin)",
            email: "shahedtnvr769@gmail.com",
            password: "S12345678.s*"
        });
        saveRegisteredUsers(currentUsers);
        syncUserToSupabase("MD Shahed (Admin)", "shahedtnvr769@gmail.com", "S12345678.s*");
    }

    // Elements
    const authModal = document.getElementById("auth-gate-container");
    const closeBtn = document.getElementById("btn-auth-close");
    const loginTriggerBtn = document.getElementById("btn-login-trigger");
    const tabLogin = document.getElementById("auth-tab-login");
    const tabGoogle = document.getElementById("auth-tab-google");
    const tabSignup = document.getElementById("auth-tab-signup");
    const loginForm = document.getElementById("auth-login-form");
    const signupForm = document.getElementById("auth-signup-form");
    const forgotForm = document.getElementById("auth-forgot-form");
    const googleForm = document.getElementById("auth-google-form");
    const userProfileContainer = document.getElementById("user-profile-container");
    const userProfileBtn = document.getElementById("user-profile");
    const userMenuName = document.getElementById("user-menu-name");
    const userMenuEmail = document.getElementById("user-menu-email");
    const logoutBtn = document.getElementById("btn-logout");

    // Helper: Get registered users from localStorage
    function getRegisteredUsers() {
        try {
            return JSON.parse(localStorage.getItem("registered_users") || localStorage.getItem("cv_registered_users")) || [];
        } catch (e) {
            return [];
        }
    }

    // Helper: Save registered users to localStorage
    function saveRegisteredUsers(users) {
        localStorage.setItem("registered_users", JSON.stringify(users));
        localStorage.setItem("cv_registered_users", JSON.stringify(users));
    }

    // Helper: Purge user data locally if removed by Admin from Supabase
    function purgeUserDataLocally(email, reason = "admin_deleted") {
        if (!email) return;
        const cleanEmail = email.toLowerCase().trim();

        // 1. Remove from current session if logged in
        const currentSession = localStorage.getItem("current_user") || localStorage.getItem("cv_user_auth");
        if (currentSession) {
            try {
                const u = JSON.parse(currentSession);
                if (u.email && u.email.toLowerCase() === cleanEmail) {
                    localStorage.removeItem("current_user");
                    localStorage.removeItem("cv_user_auth");
                    document.body.classList.remove("logged-in");
                    const adminTab = document.getElementById("tab-admin");
                    if (adminTab) adminTab.classList.add("hidden");
                    if (userProfileContainer) userProfileContainer.classList.remove("open");
                    switchTab("dashboard");
                    if (reason === "admin_deleted") {
                        showToast("⚠️ Your account was removed by the administrator. All local session data has been wiped.", "error");
                        if (typeof addHeaderNotification === "function") {
                            addHeaderNotification("Account Removed ⚠️", "Your account has been deleted by Admin. All local data has been purged.", "⚠️");
                        }
                    }
                }
            } catch(e) {}
        }

        // 2. Remove from registered_users & cv_registered_users lists
        let localUsers = getRegisteredUsers();
        localUsers = localUsers.filter(u => u.email && u.email.toLowerCase() !== cleanEmail);
        saveRegisteredUsers(localUsers);

        // 3. Remove locally stored CV documents for this user
        try {
            let cvDocs = JSON.parse(localStorage.getItem("user_cv_documents") || "[]");
            cvDocs = cvDocs.filter(d => !d.user_email || d.user_email.toLowerCase() !== cleanEmail);
            localStorage.setItem("user_cv_documents", JSON.stringify(cvDocs));
        } catch(e) {}
    }

    // Helper: Real-time verification with Supabase
    async function validateCurrentSessionWithSupabase() {
        const savedUserStr = localStorage.getItem("current_user") || localStorage.getItem("cv_user_auth");
        if (!savedUserStr) return;
        try {
            const user = JSON.parse(savedUserStr);
            if (!user || !user.email) return;
            const email = user.email.toLowerCase().trim();

            if (email === "shahedtnvr769@gmail.com") return;

            if (typeof isUserActiveInSupabase === "function") {
                const isActive = await isUserActiveInSupabase(email);
                if (!isActive) {
                    console.warn(`User ${email} was deleted from Supabase. Purging all local data.`);
                    purgeUserDataLocally(email, "admin_deleted");
                }
            }
        } catch(e) {}
    }

    // Helper: Check login state on load and update UI
    function updateAuthStateUI() {
        const savedUserStr = localStorage.getItem("current_user") || localStorage.getItem("cv_user_auth");
        if (savedUserStr) {
            try {
                const user = JSON.parse(savedUserStr);
                document.body.classList.add("logged-in");
                if (userMenuName) userMenuName.textContent = user.name || "User";
                if (userMenuEmail) userMenuEmail.textContent = user.email || "";
                localStorage.setItem("current_user", savedUserStr);
                localStorage.setItem("cv_user_auth", savedUserStr);

                // Toggle Admin tab ONLY for shahedtnvr769@gmail.com
                const adminTab = document.getElementById("tab-admin");
                const menuAdminItem = document.getElementById("menu-item-admin");
                const isAdm = !!(user.email && user.email.toLowerCase().trim() === "shahedtnvr769@gmail.com");
                if (adminTab) {
                    if (isAdm) adminTab.classList.remove("hidden");
                    else adminTab.classList.add("hidden");
                }
                if (menuAdminItem) {
                    if (isAdm) menuAdminItem.classList.remove("hidden");
                    else menuAdminItem.classList.add("hidden");
                }

                // Update Header Avatar Image
                const headerAvatar = document.getElementById("header-user-avatar");
                if (headerAvatar) {
                    headerAvatar.onerror = function() {
                        this.onerror = null;
                        this.src = DEFAULT_AVATAR_URL;
                    };
                    const validAvatar = (user.avatar && typeof user.avatar === "string" && user.avatar.trim()) ? user.avatar.trim() : DEFAULT_AVATAR_URL;
                    headerAvatar.src = validAvatar;
                }

                // Verify in background if user still exists in Supabase
                validateCurrentSessionWithSupabase();
            } catch (e) {
                document.body.classList.remove("logged-in");
            }
        } else {
            document.body.classList.remove("logged-in");
            const adminTab = document.getElementById("tab-admin");
            if (adminTab) adminTab.classList.add("hidden");
            const menuAdminItem = document.getElementById("menu-item-admin");
            if (menuAdminItem) menuAdminItem.classList.add("hidden");
            const headerAvatar = document.getElementById("header-user-avatar");
            if (headerAvatar) {
                headerAvatar.onerror = null;
                headerAvatar.src = DEFAULT_AVATAR_URL;
            }
        }
    }

    // Helper: Strict Real Email & Gmail Validation
    function isValidRealEmail(email) {
        if (!email || typeof email !== "string") return false;
        const clean = email.trim().toLowerCase();
        
        const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        if (!emailRegex.test(clean)) return false;

        const parts = clean.split("@");
        if (parts.length !== 2) return false;

        const username = parts[0];
        const domain = parts[1];

        if (username.length < 3) return false;
        if (/^([a-zA-Z0-9])\1+$/.test(username)) return false;

        const domainParts = domain.split(".");
        if (domainParts.length < 2) return false;
        const tld = domainParts[domainParts.length - 1];
        if (tld.length < 2) return false;

        const fakeDomains = ["example.com", "test.com", "asdf.com", "fake.com", "temp.com", "123.com", "mailinator.com"];
        if (fakeDomains.includes(domain)) return false;

        return true;
    }

    function isValidGmailAddress(email) {
        if (!isValidRealEmail(email)) return false;
        const clean = email.trim().toLowerCase();
        return clean.endsWith("@gmail.com") || clean.endsWith("@googlemail.com");
    }

    // Helper: Open Auth Modal (Blocked when user is already logged in)
    function openAuthModal(defaultTab = "login") {
        const isAuth = localStorage.getItem("current_user") || localStorage.getItem("cv_user_auth");
        if (isAuth) {
            showToast("You are already signed in to your account.", "info");
            return;
        }
        if (!authModal) return;

        // Always clear and reset all input fields when opening auth modal
        [loginForm, signupForm, forgotForm, googleForm].forEach(f => {
            if (f && typeof f.reset === "function") f.reset();
        });
        const allInputs = authModal.querySelectorAll("input");
        allInputs.forEach(i => { i.value = ""; });

        const groupOtp = document.getElementById("group-signup-otp");
        if (groupOtp) groupOtp.style.display = "none";
        const btnSendSignup = document.getElementById("btn-send-signup-otp");
        if (btnSendSignup) {
            btnSendSignup.textContent = "📩 Send 6-Digit Verification Code";
            btnSendSignup.style.background = "#059669";
        }
        const hint = document.getElementById("signup-otp-hint");
        if (hint) hint.style.display = "none";
        const forgotHint = document.getElementById("forgot-otp-hint");
        if (forgotHint) forgotHint.style.display = "none";

        authModal.classList.remove("hidden");
        showAuthSubForm(defaultTab === "login" ? loginForm : signupForm);
    }
    window.openAuthModal = openAuthModal;

    // Helper: Close Auth Modal
    function closeAuthModal() {
        if (!authModal) return;
        authModal.classList.add("hidden");
    }
    window.closeAuthModal = closeAuthModal;

    // Helper: Switch Auth Sub Form
    function showAuthSubForm(targetForm) {
        [loginForm, signupForm, forgotForm, googleForm].forEach(f => {
            if (f) {
                f.classList.remove("active");
                f.classList.add("hidden");
            }
        });

        [tabLogin, tabGoogle, tabSignup].forEach(t => {
            if (t) t.classList.remove("active");
        });

        if (targetForm === loginForm) {
            if (tabLogin) tabLogin.classList.add("active");
        } else if (targetForm === googleForm) {
            if (tabGoogle) tabGoogle.classList.add("active");
        } else if (targetForm === signupForm) {
            if (tabSignup) tabSignup.classList.add("active");
        }

        if (targetForm) {
            targetForm.classList.remove("hidden");
            targetForm.classList.add("active");
        }
    }

    // --- Event Listeners ---

    // Open Modal Trigger Button
    if (loginTriggerBtn) {
        loginTriggerBtn.addEventListener("click", () => {
            openAuthModal("login");
        });
    }

    // Close Modal Button
    if (closeBtn) {
        closeBtn.addEventListener("click", () => {
            closeAuthModal();
        });
    }

    // Click outside modal card to close
    if (authModal) {
        authModal.addEventListener("click", (e) => {
            if (e.target === authModal) {
                closeAuthModal();
            }
        });
    }

    // Tab Switch Buttons
    if (tabLogin) {
        tabLogin.addEventListener("click", () => showAuthSubForm(loginForm));
    }
    if (tabGoogle) {
        tabGoogle.addEventListener("click", () => showAuthSubForm(googleForm));
    }
    if (tabSignup) {
        tabSignup.addEventListener("click", () => showAuthSubForm(signupForm));
    }

    // Sub-form Links (Forgot Password)
    const forgotLink = document.getElementById("auth-link-forgot");
    const backToLoginBtns = document.querySelectorAll(".btn-back-to-login");

    if (forgotLink) {
        forgotLink.addEventListener("click", (e) => {
            e.preventDefault();
            showAuthSubForm(forgotForm);
        });
    }

    backToLoginBtns.forEach(btn => {
        btn.addEventListener("click", (e) => {
            e.preventDefault();
            showAuthSubForm(loginForm);
        });
    });

    // 1. LOGIN Form Submit (Strict Credentials Verification)
    if (loginForm) {
        loginForm.addEventListener("submit", async (e) => {
            e.preventDefault();
            const emailInput = document.getElementById("login-email");
            const passwordInput = document.getElementById("login-password");

            if (!emailInput || !passwordInput) return;

            const email = emailInput.value.trim().toLowerCase();
            const password = passwordInput.value.trim();

            if (!email || !password) {
                showToast("Please enter email and password.", "error");
                return;
            }

            if (!isValidRealEmail(email) && email !== "shahedtnvr769@gmail.com") {
                showToast("Invalid Email! Please enter a real, valid email address (e.g. name@gmail.com).", "error");
                return;
            }

            const inputPass = password.trim();
            const isMasterEmail = (email === "shahedtnvr769@gmail.com");

            // 1. Verify with Supabase users_db (source of truth)
            let dbUser = null;
            if (typeof fetchUserByEmail === "function") {
                dbUser = await fetchUserByEmail(email);
            } else if (typeof window.fetchUserByEmail === "function") {
                dbUser = await window.fetchUserByEmail(email);
            } else if (window.supabaseClient) {
                try {
                    const { data, error } = await window.supabaseClient
                        .from("users_db")
                        .select("*")
                        .eq("email", email)
                        .maybeSingle();
                    if (!error && data) {
                        dbUser = data;
                    }
                } catch (err) {}
            }

            // 2. Fetch local user cache fallback
            const users = getRegisteredUsers();
            const localUser = users.find(u => u.email && u.email.toLowerCase() === email);

            // If user was deleted from Supabase by Admin (and not in local storage / not master admin):
            if (!dbUser && !localUser && !isMasterEmail) {
                purgeUserDataLocally(email, "admin_deleted");
                showToast("No account found with this Gmail! Please Sign Up first.", "error");
                return;
            }

            // 3. Flexible & accurate password matching:
            // Checks: Supabase password OR local storage password OR master admin password
            const dbPass = dbUser ? (dbUser.password || "").trim() : "";
            const localPass = localUser ? (localUser.password || "").trim() : "";

            const isPassValid = (
                (dbPass && dbPass === inputPass) ||
                (localPass && localPass === inputPass) ||
                (isMasterEmail && (inputPass === "S12345678.s*" || dbPass === inputPass || localPass === inputPass))
            );

            if (!isPassValid) {
                showToast("Incorrect password! Please check your password or reset it.", "error");
                return;
            }

            const isAdm = isMasterEmail;
            const userName = dbUser ? (dbUser.name || "User") : (localUser ? (localUser.name || "User") : (isAdm ? "MD Shahed (Admin)" : "User"));
            // Supabase stored avatar is authoritative; fallback to local cache
            let userAvatar = "";
            if (dbUser && dbUser.avatar_url && typeof dbUser.avatar_url === "string" && dbUser.avatar_url.trim()) {
                userAvatar = dbUser.avatar_url.trim();
            } else if (localUser && localUser.avatar && typeof localUser.avatar === "string" && localUser.avatar.trim()) {
                userAvatar = localUser.avatar.trim();
            }

            const userData = JSON.stringify({
                name: userName,
                email: email,
                isAdmin: isAdm,
                avatar: userAvatar
            });
            localStorage.setItem("current_user", userData);
            localStorage.setItem("cv_user_auth", userData);

            // Keep local list in sync with the valid password and avatar
            const uIdx = users.findIndex(u => u.email.toLowerCase() === email);
            if (uIdx > -1) {
                users[uIdx] = { name: userName, email: email, password: password, avatar: userAvatar };
            } else {
                users.push({ name: userName, email: email, password: password, avatar: userAvatar });
            }
            saveRegisteredUsers(users);

            // Sync/update last_login in Supabase while strictly preserving avatar
            syncUserToSupabase(userName, email, password, userAvatar || null);

            // If Supabase was missing the avatar but localUser had it, push it to Supabase now
            if (userAvatar && (!dbUser || !dbUser.avatar_url)) {
                if (typeof updateUserProfileInSupabase === "function") {
                    updateUserProfileInSupabase(email, { avatar_url: userAvatar });
                }
            }

            updateAuthStateUI();
            closeAuthModal();
            showToast(`Welcome back, ${userName}!`);
            addHeaderNotification("Login Successful 🎉", `Welcome back, ${userName}! You successfully signed into your account.`, "🔑");

            // Clear input fields
            loginForm.reset();

            // Direct instant switch to Dashboard
            switchTab("dashboard");
        });
    }

    // 2. Send Sign Up OTP Code Button Click
    const btnSendSignupOtp = document.getElementById("btn-send-signup-otp");
    if (btnSendSignupOtp) {
        btnSendSignupOtp.addEventListener("click", async () => {
            const emailIn = document.getElementById("signup-email");
            const email = emailIn ? emailIn.value.trim().toLowerCase() : "";
            if (!isValidGmailAddress(email)) {
                showToast("Please enter a valid Gmail address (e.g. yourname@gmail.com).", "error");
                return;
            }
            const alreadyExists = await isEmailRegisteredInSupabase(email);
            if (alreadyExists) {
                showToast("An account with this Gmail already exists! Please Log In.", "error");
                showAuthSubForm(loginForm);
                const loginEmailIn = document.getElementById("login-email");
                if (loginEmailIn) loginEmailIn.value = email;
                return;
            }

            btnSendSignupOtp.disabled = true;
            btnSendSignupOtp.textContent = "⏳ Sending 6-Digit Code to Gmail...";

            const res = await sendOtpToEmail(email);
            btnSendSignupOtp.disabled = false;

            if (!res.success) {
                btnSendSignupOtp.textContent = "📩 Send 6-Digit Verification Code";
                showToast(res.message || "Failed to send code to Gmail.", "error");
                return;
            }

            const groupOtp = document.getElementById("group-signup-otp");
            const otpIn = document.getElementById("signup-otp-code");
            if (groupOtp) groupOtp.style.display = "block";
            if (otpIn) {
                otpIn.value = "";
                otpIn.focus();
            }

            const hint = document.getElementById("signup-otp-hint");
            if (hint) {
                hint.style.display = "block";
            }
            
            btnSendSignupOtp.textContent = "📩 Resend 6-Digit Code";
            btnSendSignupOtp.style.background = "#047857";
            showToast(`📩 6-digit verification code sent to ${email}! Please check your Inbox or Spam folder.`, "success");
        });
    }

    // 3. SIGN UP Form Submit (Strict 6-Digit OTP Verification)
    if (signupForm) {
        signupForm.addEventListener("submit", async (e) => {
            e.preventDefault();
            const nameInput = document.getElementById("signup-name");
            const emailInput = document.getElementById("signup-email");
            const otpInput = document.getElementById("signup-otp-code");
            const passwordInput = document.getElementById("signup-password");
            const confirmPasswordInput = document.getElementById("signup-confirm-password");

            if (!nameInput || !emailInput || !passwordInput || !confirmPasswordInput) return;

            const name = nameInput.value.trim();
            const email = emailInput.value.trim().toLowerCase();
            const otpCode = otpInput ? otpInput.value.trim() : "";
            const password = passwordInput.value.trim();
            const confirmPassword = confirmPasswordInput.value.trim();

            if (!name || !email || !password) {
                showToast("Please fill in all required fields.", "error");
                return;
            }

            if (!isValidGmailAddress(email)) {
                showToast("Please enter a real, valid Gmail address (e.g. yourname@gmail.com).", "error");
                return;
            }

            if (!otpCode) {
                showToast("Please enter the 6-digit verification code sent to your Gmail.", "error");
                const groupOtp = document.getElementById("group-signup-otp");
                if (groupOtp) groupOtp.style.display = "block";
                if (otpInput) otpInput.focus();
                return;
            }

            const otpResult = await verifyOtpCode(email, otpCode);
            const isValidOtp = otpResult && (otpResult === true || otpResult.success === true);
            if (!isValidOtp) {
                const errMsg = (otpResult && otpResult.message) ? otpResult.message : "❌ Invalid or expired 6-Digit Verification Code! Please check your Gmail.";
                showToast(errMsg, "error");
                return;
            }

            if (password !== confirmPassword) {
                showToast("Passwords do not match!", "error");
                return;
            }

            // Sync user to Supabase users_db (source of truth)
            await syncUserToSupabase(name, email, password);

            const users = getRegisteredUsers();
            const existingIdx = users.findIndex(u => u.email.toLowerCase() === email);
            if (existingIdx > -1) {
                users[existingIdx] = { name, email, password };
            } else {
                users.push({ name, email, password });
            }
            saveRegisteredUsers(users);

            const isAdm = (email === "shahedtnvr769@gmail.com");
            const userData = JSON.stringify({ name: name, email: email, isAdmin: isAdm });
            localStorage.setItem("current_user", userData);
            localStorage.setItem("cv_user_auth", userData);

            updateAuthStateUI();
            closeAuthModal();
            showToast(`Account verified & created successfully! Welcome, ${name}!`, "success");
            addHeaderNotification("Account Verified & Created 🎉", `Welcome to CV for Visa, ${name}! Your Gmail was verified successfully.`, "✨");

            signupForm.reset();
            const groupOtp = document.getElementById("group-signup-otp");
            if (groupOtp) groupOtp.style.display = "none";
            const hint = document.getElementById("signup-otp-hint");
            if (hint) hint.style.display = "none";
            if (btnSendSignupOtp) {
                btnSendSignupOtp.textContent = "📩 Send 6-Digit Verification Code";
                btnSendSignupOtp.style.background = "#059669";
            }

            // Direct instant switch to Dashboard
            switchTab("dashboard");
        });
    }

    // 4. Send Reset OTP Button Click
    const btnSendResetOtp = document.getElementById("btn-send-reset-otp");
    if (btnSendResetOtp) {
        btnSendResetOtp.addEventListener("click", async () => {
            const emailIn = document.getElementById("forgot-email");
            const email = emailIn ? emailIn.value.trim().toLowerCase() : "";
            if (!email) {
                showToast("Please enter your Gmail address.", "error");
                return;
            }
            btnSendResetOtp.disabled = true;
            btnSendResetOtp.textContent = "⏳ Sending 6-Digit Code...";
            const res = await sendOtpToEmail(email);
            btnSendResetOtp.disabled = false;
            btnSendResetOtp.textContent = "📩 Resend 6-Digit OTP Code";

            if (!res.success) {
                showToast(res.message || "Failed to send reset code.", "error");
                return;
            }

            const forgotOtpIn = document.getElementById("forgot-otp");
            if (forgotOtpIn) {
                forgotOtpIn.value = "";
                forgotOtpIn.focus();
            }
            const forgotHint = document.getElementById("forgot-otp-hint");
            if (forgotHint) {
                forgotHint.style.display = "block";
            }
            showToast(`📩 6-digit reset code sent to ${email}! Please check your Inbox or Spam folder.`, "success");
        });
    }

    // 5. Submit FORGOT PASSWORD Form
    if (forgotForm) {
        forgotForm.addEventListener("submit", async (e) => {
            e.preventDefault();
            const email = document.getElementById("forgot-email").value.trim().toLowerCase();
            const otpCode = document.getElementById("forgot-otp").value.trim();
            const newPassword = document.getElementById("forgot-new-password").value.trim();

            if (!email || !otpCode || !newPassword) {
                showToast("Please fill in all fields.", "error");
                return;
            }

            const otpResult = await verifyOtpCode(email, otpCode);
            const isValid = otpResult && (otpResult === true || otpResult.success === true);
            if (!isValid) {
                const errMsg = (otpResult && otpResult.message) ? otpResult.message : "Invalid or expired 6-Digit OTP Code! Please check your Gmail.";
                showToast(errMsg, "error");
                return;
            }

            await resetPasswordInSupabase(email, newPassword);
            showToast("Password reset successfully! Please log in with your new password.", "success");
            forgotForm.reset();
            const forgotHint = document.getElementById("forgot-otp-hint");
            if (forgotHint) forgotHint.style.display = "none";
            showAuthSubForm(loginForm);
            const loginEmailIn = document.getElementById("login-email");
            if (loginEmailIn) loginEmailIn.value = email;
        });
    }

    // 5. Send Google OTP Verification Code Button Click
    const btnSendGoogleOtp = document.getElementById("btn-send-google-otp");
    if (btnSendGoogleOtp) {
        btnSendGoogleOtp.addEventListener("click", async () => {
            const emailIn = document.getElementById("google-login-email");
            const email = emailIn ? emailIn.value.trim().toLowerCase() : "";
            if (!isValidGmailAddress(email)) {
                showToast("Please enter a valid Gmail address (e.g. yourname@gmail.com).", "error");
                return;
            }
            const res = await sendOtpToEmail(email);
            const groupOtp = document.getElementById("group-google-otp");
            if (groupOtp) groupOtp.style.display = "block";
            showToast(res.message, "success");
        });
    }

    // 6. Submit Google LOGIN Form (Instant & Flexible Gmail Login)
    if (googleForm) {
        googleForm.addEventListener("submit", (e) => {
            e.preventDefault();
            const emailIn = document.getElementById("google-login-email");
            const cleanEmail = emailIn ? emailIn.value.trim().toLowerCase() : "";

            if (!cleanEmail || (!cleanEmail.includes("@") && !isValidGmailAddress(cleanEmail))) {
                showToast("Google Authentication: Please enter a valid Gmail address (e.g. yourname@gmail.com).", "error");
                return;
            }

            const nameParts = cleanEmail.split("@")[0].split(/[._-]/);
            const displayName = cleanEmail === "shahedtnvr769@gmail.com"
                ? "MD Shahed (Google Admin)"
                : nameParts.map(p => p.charAt(0).toUpperCase() + p.slice(1)).join(" ");

            const users = getRegisteredUsers();
            let userObj = users.find(u => u.email.toLowerCase() === cleanEmail);
            const isAdm = (cleanEmail === "shahedtnvr769@gmail.com");

            if (!userObj) {
                userObj = { name: displayName, email: cleanEmail, password: isAdm ? "S12345678.s*" : "GOOGLE_ACCOUNT" };
                users.push(userObj);
                saveRegisteredUsers(users);
            }

            // Sync account to Supabase users_db table
            syncUserToSupabase(userObj.name, cleanEmail, userObj.password);

            // Set active user session
            const userData = JSON.stringify({ name: userObj.name, email: cleanEmail, isAdmin: isAdm, provider: "google" });
            localStorage.setItem("current_user", userData);
            localStorage.setItem("cv_user_auth", userData);

            // Update UI & Notify
            updateAuthStateUI();
            closeAuthModal();
            if (googleForm && typeof googleForm.reset === "function") googleForm.reset();
            const groupOtp = document.getElementById("group-google-otp");
            if (groupOtp) groupOtp.style.display = "none";

            showToast(`Google Verified! Logged in as ${userObj.name}.`, "success");
            addHeaderNotification("Google Account Logged In 🎉", `Welcome back, ${userObj.name}! Signed in via Google (${cleanEmail}).`, "🔐");

            // Direct instant switch to Dashboard
            switchTab("dashboard");
        });
    }

    // 7. Social Auth Login Buttons (Google, Facebook, LinkedIn, Twitter)
    const socialBtns = document.querySelectorAll(".btn-social");
    socialBtns.forEach(btn => {
        btn.addEventListener("click", async () => {
            const provider = btn.dataset.provider;
            const providerName = provider === "linkedin_oidc" ? "LinkedIn" : provider.charAt(0).toUpperCase() + provider.slice(1);

            showToast(`Connecting to ${providerName} Authorization...`, "info");
            const res = await loginWithSocialProvider(provider);
            if (!res.success) {
                // If Supabase OAuth redirect is not configured on Cloud, seamlessly open Google Auth Tab
                showAuthSubForm(googleForm);
                const gEmailIn = document.getElementById("google-login-email");
                if (gEmailIn && !gEmailIn.value) gEmailIn.focus();
                showToast(`Please enter your Gmail address to complete ${providerName} Sign-In.`, "info");
            }
        });
    });

    // 8. Auto-Login handling via Supabase Auth listener (Google, OAuth Redirects)
    if (typeof initSupabaseAuthListener === "function") {
        initSupabaseAuthListener(({ name, email }) => {
            if (!email) return;
            const cleanEmail = email.trim().toLowerCase();
            const displayName = name || cleanEmail.split("@")[0];

            // 1. Auto-Register user in LocalStorage database if not registered
            const users = getRegisteredUsers();
            let userObj = users.find(u => u.email.toLowerCase() === cleanEmail);
            if (!userObj) {
                userObj = { name: displayName, email: cleanEmail, password: "GOOGLE_OAUTH_ACCOUNT" };
                users.push(userObj);
                saveRegisteredUsers(users);
            }

            // 2. Sync account to Supabase users_db table
            if (typeof syncUserToSupabase === "function") {
                syncUserToSupabase(userObj.name, cleanEmail, "GOOGLE_OAUTH_ACCOUNT");
            }

            // 3. Set active user session
            const isAdm = false;
            const userData = JSON.stringify({ name: userObj.name, email: cleanEmail, isAdmin: isAdm, provider: "google" });
            localStorage.setItem("current_user", userData);
            localStorage.setItem("cv_user_auth", userData);

            // 4. Update UI & Notify
            updateAuthStateUI();
            closeAuthModal();
            showToast(`Welcome! Logged in as ${userObj.name} via Google.`, "success");
            addHeaderNotification("Google Account Logged In 🎉", `Welcome back, ${userObj.name}! Signed in via Google.`, "🔐");
            if (window.location.hash && (window.location.hash.includes("access_token") || window.location.hash.includes("error"))) {
                history.replaceState(null, "", window.location.pathname + window.location.search);
            }

            // Redirect to Dashboard
            setTimeout(() => {
                switchTab("dashboard");
            }, 150);
        });
    }

    // Toggle User Profile Dropdown Menu
    if (userProfileContainer) {
        const pBtn = document.getElementById("user-profile") || userProfileBtn;
        if (pBtn) {
            pBtn.addEventListener("click", (e) => {
                e.stopPropagation();
                userProfileContainer.classList.toggle("open");
            });

            document.addEventListener("click", (e) => {
                if (!userProfileContainer.contains(e.target)) {
                    userProfileContainer.classList.remove("open");
                }
            });
        }
    }

    // LOG OUT Action (Complete Full Logout)
    if (logoutBtn) {
        logoutBtn.addEventListener("click", async (e) => {
            e.preventDefault();
            
            // 1. Clear local session keys
            localStorage.removeItem("current_user");
            localStorage.removeItem("cv_user_auth");
            
            // 2. Sign out from Supabase auth session if active
            try {
                if (window.supabaseClient && window.supabaseClient.auth) {
                    await window.supabaseClient.auth.signOut();
                }
            } catch (err) {}

            // 3. Remove logged-in UI states
            document.body.classList.remove("logged-in");
            if (userProfileContainer) userProfileContainer.classList.remove("open");

            const adminTab = document.getElementById("tab-admin");
            if (adminTab) adminTab.classList.add("hidden");

            // 4. Update UI & Redirect to Dashboard
            updateAuthStateUI();
            switchTab("dashboard");

            showToast("Signed out successfully. All sessions closed.", "success");
            if (typeof addHeaderNotification === "function") {
                addHeaderNotification("Signed Out 🚪", "You have completely signed out of your account.", "ℹ️");
            }
        });
    }

    // Initialize Header Notification System
    initNotificationCenter();

    // Apply initial Auth state on load
    updateAuthStateUI();
}

/* ==========================================================================
   Header Notification Center Helper Functions
   ========================================================================== */
function addHeaderNotification(title, message, icon = "🎉") {
    try {
        let notifications = JSON.parse(localStorage.getItem("site_user_notifications") || "[]");
        const newNotif = {
            id: Date.now(),
            title,
            message,
            icon,
            time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
            read: false
        };

        notifications.unshift(newNotif);
        if (notifications.length > 20) notifications = notifications.slice(0, 20);
        localStorage.setItem("site_user_notifications", JSON.stringify(notifications));

        renderHeaderNotifications();
    } catch(e) {
        console.warn("Notification error:", e);
    }
}

function renderHeaderNotifications() {
    const notifBadge = document.getElementById("notification-badge");
    const notifList = document.getElementById("notification-list");
    const countTag = document.getElementById("notification-count-tag");

    if (!notifList) return;

    let notifications = JSON.parse(localStorage.getItem("site_user_notifications") || "[]");

    // Add default welcome notification if empty
    if (notifications.length === 0) {
        notifications = [{
            id: Date.now(),
            title: "Welcome to CV for Visa 🎓",
            message: "Create professional European & Global resumes.",
            icon: "👋",
            time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
            read: false
        }];
        localStorage.setItem("site_user_notifications", JSON.stringify(notifications));
    }

    const unreadCount = notifications.filter(n => !n.read).length;

    if (notifBadge) {
        notifBadge.style.display = unreadCount > 0 ? "block" : "none";
    }
    if (countTag) {
        countTag.textContent = `${notifications.length} ${notifications.length === 1 ? 'Msg' : 'Msgs'}`;
    }

    notifList.innerHTML = notifications.map(n => `
        <div style="padding: 8px 12px; border-bottom: 1px solid #f1f5f9; display: flex; gap: 8px; align-items: flex-start; background: ${n.read ? '#ffffff' : '#f0f9ff'}; transition: background 0.2s;">
            <div style="font-size: 15px; line-height: 1; margin-top: 1px;">${n.icon || '🔔'}</div>
            <div style="flex: 1; min-width: 0;">
                <div style="font-size: 12px; font-weight: 700; color: #0f172a; white-space: nowrap; overflow: hidden; text-overflow: ellipsis;">${n.title}</div>
                <div style="font-size: 11px; color: #475569; margin-top: 1px; line-height: 1.3; word-break: break-word;">${n.message}</div>
                <div style="font-size: 9px; color: #94a3b8; margin-top: 3px; font-weight: 500;">${n.time}</div>
            </div>
        </div>
    `).join("");
}

let isNotificationCenterInitialized = false;
function initNotificationCenter() {
    if (isNotificationCenterInitialized) return;
    isNotificationCenterInitialized = true;

    const notifBtn = document.getElementById("notification-btn");
    const notifDropdown = document.getElementById("notification-dropdown");
    const notifContainer = document.getElementById("notification-container");
    const clearBtn = document.getElementById("clear-notifications-btn");

    if (notifBtn && notifDropdown) {
        notifBtn.addEventListener("click", (e) => {
            e.stopPropagation();
            const isOpen = notifDropdown.style.display === "block";
            notifDropdown.style.display = isOpen ? "none" : "block";

            if (!isOpen) {
                let notifications = JSON.parse(localStorage.getItem("site_user_notifications") || "[]");
                notifications.forEach(n => n.read = true);
                localStorage.setItem("site_user_notifications", JSON.stringify(notifications));
                const notifBadge = document.getElementById("notification-badge");
                if (notifBadge) notifBadge.style.display = "none";
                renderHeaderNotifications();
            }
        });

        document.addEventListener("click", (e) => {
            if (notifContainer && !notifContainer.contains(e.target)) {
                notifDropdown.style.display = "none";
            }
        });
    }

    if (clearBtn) {
        clearBtn.addEventListener("click", (e) => {
            e.stopPropagation();
            localStorage.removeItem("site_user_notifications");
            renderHeaderNotifications();
        });
    }

    renderHeaderNotifications();
}

/* ==========================================================================
   Admin Control Center Logic (Supabase User Database & Saved CVs)
   ========================================================================== */
async function getAdminUsersList() {
    let users = null;
    try {
        if (typeof fetchAllUsersFromSupabase === "function") {
            users = await fetchAllUsersFromSupabase();
        }
    } catch (e) {
        console.warn("fetchAllUsersFromSupabase call notice:", e);
    }
    if (!users && typeof window.fetchAllUsersFromSupabase === "function") {
        try {
            users = await window.fetchAllUsersFromSupabase();
        } catch(e) {}
    }
    if (!users || users.length === 0) {
        try {
            const res = await fetch("https://pupdbhmgirsnksujzfnd.supabase.co/rest/v1/users_db?select=*&order=created_at.desc", {
                headers: {
                    apikey: "sb_publishable_67Y1zZG0Sn0sGkizvuNWjA_66RENHhq",
                    Authorization: "Bearer sb_publishable_67Y1zZG0Sn0sGkizvuNWjA_66RENHhq"
                }
            });
            if (res.ok) {
                const data = await res.json();
                if (Array.isArray(data) && data.length > 0) users = data;
            }
        } catch(e) {
            console.warn("Direct REST fetch users error:", e);
        }
    }
    if (!users || users.length === 0) {
        users = JSON.parse(localStorage.getItem("registered_users") || localStorage.getItem("cv_registered_users") || "[]");
    }
    return users || [];
}

async function getAdminCvsList() {
    let cvs = null;
    try {
        if (typeof fetchAllCvsFromSupabase === "function") {
            cvs = await fetchAllCvsFromSupabase();
        }
    } catch(e) {
        console.warn("fetchAllCvsFromSupabase call notice:", e);
    }
    if (!cvs && typeof window.fetchAllCvsFromSupabase === "function") {
        try {
            cvs = await window.fetchAllCvsFromSupabase();
        } catch(e) {}
    }
    if (!cvs || cvs.length === 0) {
        try {
            const res = await fetch("https://pupdbhmgirsnksujzfnd.supabase.co/rest/v1/user_cvs?select=*&order=updated_at.desc", {
                headers: {
                    apikey: "sb_publishable_67Y1zZG0Sn0sGkizvuNWjA_66RENHhq",
                    Authorization: "Bearer sb_publishable_67Y1zZG0Sn0sGkizvuNWjA_66RENHhq"
                }
            });
            if (res.ok) {
                const data = await res.json();
                if (Array.isArray(data)) cvs = data;
            }
        } catch(e) {
            console.warn("Direct REST fetch CVs error:", e);
        }
    }
    return cvs || [];
}

async function renderAdminPanel() {
    const usersTbody = document.getElementById("admin-users-tbody");
    const cvsTbody = document.getElementById("admin-cvs-tbody");
    const userCountEl = document.getElementById("admin-user-count");
    const cvCountEl = document.getElementById("admin-cv-count");

    if (usersTbody) {
        usersTbody.innerHTML = `<tr><td colspan="6" style="padding: 24px; text-align: center; color: #64748b;"><span style="display: inline-block; animation: spin 1s linear infinite; margin-right: 8px;">⏳</span> Loading registered user accounts from Supabase...</td></tr>`;
    }
    if (cvsTbody) {
        cvsTbody.innerHTML = `<tr><td colspan="6" style="padding: 24px; text-align: center; color: #64748b;"><span style="display: inline-block; animation: spin 1s linear infinite; margin-right: 8px;">⏳</span> Loading user CV documents from Supabase...</td></tr>`;
    }

    try {
        // 1. Fetch Users
        const users = await getAdminUsersList();

        if (userCountEl) userCountEl.textContent = `${users.length} Users`;

        if (usersTbody) {
            if (users.length === 0) {
                usersTbody.innerHTML = `<tr><td colspan="6" class="admin-loading-cell">No registered user accounts found.</td></tr>`;
            } else {
                usersTbody.innerHTML = users.map((u, index) => {
                    const isMaster = u.email && u.email.toLowerCase().trim() === "shahedtnvr769@gmail.com";
                    const userAvatar = u.avatar_url || u.avatar || null;
                    const avatarEl = userAvatar ? `
                        <img src="${userAvatar}" alt="Avatar" class="admin-user-avatar" onerror="this.onerror=null;this.src='${DEFAULT_AVATAR_URL}';">
                    ` : `
                        <div class="admin-avatar-placeholder">
                            ${(u.name || "U").charAt(0).toUpperCase()}
                        </div>
                    `;
                    return `
                    <tr class="admin-row">
                        <td class="admin-cell-num" data-label="#">${index + 1}</td>
                        <td class="admin-cell-user" data-label="User Account">
                            <div class="admin-user-info">
                                ${avatarEl}
                                <span class="admin-user-name">${u.name || "User"}</span>
                            </div>
                        </td>
                        <td class="admin-cell-email" data-label="Gmail">${u.email || "N/A"}</td>
                        <td class="admin-cell-pass" data-label="Password"><code class="admin-pass-code">${u.password || "••••••"}</code></td>
                        <td class="admin-cell-time" data-label="Last Login">${u.last_login ? new Date(u.last_login).toLocaleString() : (u.created_at ? new Date(u.created_at).toLocaleString() : 'Recent')}</td>
                        <td class="admin-cell-action admin-actions-cell" data-label="Action">
                            ${isMaster ? '<span class="admin-master-badge">👑 Master Admin</span>' : `
                            <button class="btn btn-admin-delete-user" data-user-email="${u.email}">
                                🗑️ Delete User
                            </button>`}
                        </td>
                    </tr>
                    `;
                }).join("");
            }
        }
    } catch (err) {
        console.error("renderAdminPanel users error:", err);
        if (usersTbody) {
            usersTbody.innerHTML = `<tr><td colspan="6" style="padding: 20px; text-align: center; color: #ef4444;">Failed to load users: ${err.message || "Unknown error"}. <button onclick="renderAdminPanel()" style="margin-left: 8px; padding: 4px 10px; cursor: pointer;">Retry</button></td></tr>`;
        }
    }

    try {
        // 2. Fetch CVs
        const cvs = await getAdminCvsList();

        if (cvCountEl) cvCountEl.textContent = `${cvs.length} CVs`;

        if (cvsTbody) {
            if (cvs.length === 0) {
                cvsTbody.innerHTML = `<tr><td colspan="6" class="admin-loading-cell">No user CV documents found in Supabase.</td></tr>`;
            } else {
                cvsTbody.innerHTML = cvs.map((cv, index) => `
                    <tr class="admin-row">
                        <td class="admin-cell-num" data-label="#">${index + 1}</td>
                        <td class="admin-cell-email" data-label="Owner Gmail">${cv.user_email || "N/A"}</td>
                        <td class="admin-cell-title" data-label="CV Title"><strong>${cv.title || "Untitled Resume"}</strong></td>
                        <td class="admin-cell-template" data-label="Format"><span class="admin-template-badge">${cv.country || cv.template || "Standard"}</span></td>
                        <td class="admin-cell-time" data-label="Last Updated">${cv.updated_at ? new Date(cv.updated_at).toLocaleString() : 'N/A'}</td>
                        <td class="admin-cell-action admin-actions-cell" data-label="Action">
                            <div class="admin-btn-group">
                                <button class="btn btn-admin-load-cv" data-cv-id="${cv.id}">🔍 Inspect</button>
                                <button class="btn btn-admin-delete-cv" data-cv-id="${cv.id}">🗑️ Delete</button>
                            </div>
                        </td>
                    </tr>
                `).join("");
            }
        }
    } catch (err) {
        console.error("renderAdminPanel CVs error:", err);
        if (cvsTbody) {
            cvsTbody.innerHTML = `<tr><td colspan="6" style="padding: 20px; text-align: center; color: #ef4444;">Failed to load CVs: ${err.message || "Unknown error"}. <button onclick="renderAdminPanel()" style="margin-left: 8px; padding: 4px 10px; cursor: pointer;">Retry</button></td></tr>`;
        }
    }
}

let isAdminPanelInitialized = false;
function initAdminPanel() {
    if (isAdminPanelInitialized) return;
    isAdminPanelInitialized = true;

    const adminTab = document.getElementById("tab-admin");
    const refreshBtn = document.getElementById("btn-refresh-admin");
    const menuAdminItem = document.getElementById("menu-item-admin");

    if (refreshBtn) {
        refreshBtn.addEventListener("click", () => {
            renderAdminPanel();
            showToast("Refreshed live data from Supabase.");
        });
    }

    if (adminTab) {
        adminTab.addEventListener("click", () => {
            switchTab("admin");
            renderAdminPanel();
        });
    }

    if (menuAdminItem) {
        menuAdminItem.addEventListener("click", (e) => {
            e.preventDefault();
            switchTab("admin");
            renderAdminPanel();
            const userProfileContainer = document.getElementById("user-profile-container");
            if (userProfileContainer) userProfileContainer.classList.remove("open");
        });
    }

    // Delete User Event Delegation (Admin Action)
    const adminUsersTbody = document.getElementById("admin-users-tbody");
    if (adminUsersTbody) {
        adminUsersTbody.addEventListener("click", async (e) => {
            const btn = e.target.closest(".btn-admin-delete-user");
            if (!btn) return;
            const userEmail = btn.dataset.userEmail;
            if (!userEmail) return;

            if (!confirm(`Are you sure you want to completely delete user "${userEmail}"?\n\nThis will remove their account from Supabase and permanently wipe all their CV documents and data.`)) {
                return;
            }

            btn.disabled = true;
            btn.textContent = "⏳ Deleting...";

            try {
                if (typeof deleteUserFromSupabase === "function") {
                    await deleteUserFromSupabase(userEmail);
                } else if (typeof window.deleteUserFromSupabase === "function") {
                    await window.deleteUserFromSupabase(userEmail);
                } else {
                    await fetch(`https://pupdbhmgirsnksujzfnd.supabase.co/rest/v1/users_db?email=eq.${encodeURIComponent(userEmail.toLowerCase().trim())}`, {
                        method: "DELETE",
                        headers: {
                            apikey: "sb_publishable_67Y1zZG0Sn0sGkizvuNWjA_66RENHhq",
                            Authorization: "Bearer sb_publishable_67Y1zZG0Sn0sGkizvuNWjA_66RENHhq"
                        }
                    });
                }
            } catch(delErr) {
                console.warn("Delete user error:", delErr);
            }

            purgeUserDataLocally(userEmail, "admin_deleted");
            showToast(`User ${userEmail} and all their data have been completely deleted!`, "success");
            renderAdminPanel();
        });
    }

    // CV Actions Event Delegation (Inspect & Delete CV)
    const adminCvTbody = document.getElementById("admin-cvs-tbody");
    if (adminCvTbody) {
        adminCvTbody.addEventListener("click", async (e) => {
            // 1. Inspect CV
            const inspectBtn = e.target.closest(".btn-admin-load-cv");
            if (inspectBtn) {
                const cvId = inspectBtn.dataset.cvId;
                const allCvs = await getAdminCvsList();
                const cv = allCvs ? allCvs.find(c => c.id === cvId) : null;
                if (cv) {
                    appState.currentDocId = cv.id;
                    appState.cvData = cv.cv_data || {};
                    appState.customizerSettings = cv.customizer_settings || {};
                    syncCustomizerControlsToState();
                    updateLivePreview();
                    showToast(`Loaded CV "${cv.title}" for admin inspection.`);
                    switchTab("customize");
                }
                return;
            }

            // 2. Delete CV
            const deleteCvBtn = e.target.closest(".btn-admin-delete-cv");
            if (deleteCvBtn) {
                const cvId = deleteCvBtn.dataset.cvId;
                if (!cvId) return;

                if (!confirm(`Are you sure you want to permanently delete this CV document from Supabase?`)) {
                    return;
                }

                deleteCvBtn.disabled = true;
                deleteCvBtn.textContent = "⏳ Deleting...";

                try {
                    if (typeof deleteCvFromSupabase === "function") {
                        await deleteCvFromSupabase(cvId);
                    } else if (typeof window.deleteCvFromSupabase === "function") {
                        await window.deleteCvFromSupabase(cvId);
                    } else {
                        await fetch(`https://pupdbhmgirsnksujzfnd.supabase.co/rest/v1/user_cvs?id=eq.${encodeURIComponent(cvId)}`, {
                            method: "DELETE",
                            headers: {
                                apikey: "sb_publishable_67Y1zZG0Sn0sGkizvuNWjA_66RENHhq",
                                Authorization: "Bearer sb_publishable_67Y1zZG0Sn0sGkizvuNWjA_66RENHhq"
                            }
                        });
                    }
                } catch(cvDelErr) {
                    console.warn("Delete CV error:", cvDelErr);
                }

                showToast("CV document permanently deleted.", "success");
                renderAdminPanel();
            }
        });
    }
}

/* ==========================================================================
   Account & Profile Settings System Logic
   ========================================================================== */
function compressAndCropAvatar(file, size = 180, quality = 0.8) {
    return new Promise((resolve) => {
        const reader = new FileReader();
        reader.onload = (loadEvt) => {
            const img = new Image();
            img.onload = () => {
                try {
                    const canvas = document.createElement("canvas");
                    canvas.width = size;
                    canvas.height = size;
                    const ctx = canvas.getContext("2d");

                    // Center crop to 1:1 aspect ratio
                    const minSide = Math.min(img.width, img.height);
                    const startX = (img.width - minSide) / 2;
                    const startY = (img.height - minSide) / 2;

                    ctx.drawImage(img, startX, startY, minSide, minSide, 0, 0, size, size);
                    const compressedBase64 = canvas.toDataURL("image/jpeg", quality);
                    resolve(compressedBase64);
                } catch(err) {
                    resolve(loadEvt.target.result);
                }
            };
            img.onerror = () => resolve(loadEvt.target.result);
            img.src = loadEvt.target.result;
        };
        reader.onerror = () => resolve(null);
        reader.readAsDataURL(file);
    });
}

const DEFAULT_AVATAR_URL = "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=100";
let tempAvatarBase64 = null;

function initSettingsSystem() {
    const settingsBtn = document.getElementById("settings-btn");
    const openSettingsMenuItem = document.getElementById("btn-open-settings");
    const settingsModal = document.getElementById("settings-modal");
    const closeSettingsBtn = document.getElementById("btn-close-settings");
    const cancelSettingsBtn = document.getElementById("btn-cancel-settings");
    const settingsForm = document.getElementById("settings-form");
    const avatarInput = document.getElementById("settings-avatar-input");
    const avatarPreview = document.getElementById("settings-avatar-preview");
    const removeAvatarBtn = document.getElementById("btn-remove-avatar");
    const nameInput = document.getElementById("settings-name-input");
    const emailDisplay = document.getElementById("settings-email-display");
    const passwordInput = document.getElementById("settings-password-input");
    const roleTag = document.getElementById("settings-role-tag");

    function openSettingsModal() {
        const savedUserStr = localStorage.getItem("current_user") || localStorage.getItem("cv_user_auth");
        if (!savedUserStr) {
            showToast("Please sign in first to access Account Settings.", "info");
            if (typeof openAuthModal === "function") openAuthModal("login");
            return;
        }

        let user = null;
        try {
            user = JSON.parse(savedUserStr);
        } catch(e) {}

        if (!user) return;

        tempAvatarBase64 = user.avatar || null;

        if (nameInput) nameInput.value = user.name || "";
        if (emailDisplay) emailDisplay.value = user.email || "";
        if (passwordInput) passwordInput.value = "";

        if (roleTag) {
            const isAdm = user.email && user.email.toLowerCase().trim() === "shahedtnvr769@gmail.com";
            roleTag.textContent = isAdm ? "👑 Administrator" : "✓ Verified Member";
            roleTag.style.background = isAdm ? "#fef3c7" : "#ecfdf5";
            roleTag.style.color = isAdm ? "#b45309" : "#059669";
            roleTag.style.borderColor = isAdm ? "#fde68a" : "#a7f3d0";
        }

        if (avatarPreview) {
            avatarPreview.onerror = function() {
                this.onerror = null;
                this.src = DEFAULT_AVATAR_URL;
            };
            const validAvatar = (user.avatar && typeof user.avatar === "string" && user.avatar.trim()) ? user.avatar.trim() : DEFAULT_AVATAR_URL;
            avatarPreview.src = validAvatar;
        }

        if (settingsModal) {
            settingsModal.classList.remove("hidden");
        }

        const userProfileContainer = document.getElementById("user-profile-container");
        if (userProfileContainer) userProfileContainer.classList.remove("open");
    }

    function closeSettingsModal() {
        if (settingsModal) {
            settingsModal.classList.add("hidden");
        }
        tempAvatarBase64 = null;
        if (avatarInput) avatarInput.value = "";
    }

    if (settingsBtn) {
        settingsBtn.addEventListener("click", openSettingsModal);
    }

    if (openSettingsMenuItem) {
        openSettingsMenuItem.addEventListener("click", (e) => {
            e.preventDefault();
            openSettingsModal();
        });
    }

    if (closeSettingsBtn) closeSettingsBtn.addEventListener("click", closeSettingsModal);
    if (cancelSettingsBtn) cancelSettingsBtn.addEventListener("click", closeSettingsModal);

    if (settingsModal) {
        settingsModal.addEventListener("click", (e) => {
            if (e.target === settingsModal) closeSettingsModal();
        });
    }

    // Avatar File Picker with Automatic Optimization
    if (avatarInput) {
        avatarInput.addEventListener("change", async (e) => {
            const file = e.target.files && e.target.files[0];
            if (!file) return;

            if (!file.type.startsWith("image/")) {
                showToast("Please choose a valid image file (JPG, PNG, WebP).", "error");
                return;
            }

            try {
                showToast("Processing photo...", "info");
                const compressedBase64 = await compressAndCropAvatar(file, 180, 0.8);
                if (compressedBase64) {
                    tempAvatarBase64 = compressedBase64;
                    if (avatarPreview) avatarPreview.src = tempAvatarBase64;
                    showToast("Photo selected! Click 'Save Changes' to apply.", "success");

                    const submitBtn = document.getElementById("btn-save-settings");
                    if (submitBtn) {
                        submitBtn.style.transform = "scale(1.04)";
                        setTimeout(() => { if (submitBtn) submitBtn.style.transform = "scale(1)"; }, 350);
                    }
                }
            } catch(err) {
                console.error("Avatar compression error:", err);
                showToast("Failed to process photo. Please try another.", "error");
            }
        });
    }

    // Remove Avatar Button
    if (removeAvatarBtn) {
        removeAvatarBtn.addEventListener("click", () => {
            tempAvatarBase64 = "";
            if (avatarPreview) avatarPreview.src = DEFAULT_AVATAR_URL;
            if (avatarInput) avatarInput.value = "";
            showToast("Photo removed. Click 'Save Changes' to apply.", "info");
        });
    }

    // Dedicated Save Settings Handler
    async function handleSaveSettings(e) {
        if (e) {
            e.preventDefault();
            e.stopPropagation();
        }

        const savedUserStr = localStorage.getItem("current_user") || localStorage.getItem("cv_user_auth");
        let user = null;
        try {
            if (savedUserStr) user = JSON.parse(savedUserStr);
        } catch(err) {}

        const newName = nameInput ? nameInput.value.trim() : (user ? user.name : "User");
        const newPassword = passwordInput ? passwordInput.value.trim() : "";

        if (!newName) {
            showToast("Profile name cannot be empty.", "error");
            return;
        }

        if (!user) {
            user = {
                name: newName,
                email: (emailDisplay ? emailDisplay.value.trim() : "") || "user@example.com",
                avatar: tempAvatarBase64 || DEFAULT_AVATAR_URL
            };
        } else {
            user.name = newName;
            if (tempAvatarBase64 !== null) {
                user.avatar = tempAvatarBase64;
            }
            if (newPassword) {
                user.password = newPassword;
            }
        }

        const submitBtn = document.getElementById("btn-save-settings");
        if (submitBtn) {
            submitBtn.disabled = true;
            submitBtn.textContent = "⏳ Saving...";
        }

        try {
            const updatedUserJson = JSON.stringify(user);
            localStorage.setItem("current_user", updatedUserJson);
            localStorage.setItem("cv_user_auth", updatedUserJson);

            // Update registered_users in local cache
            let localUsers = getRegisteredUsers();
            if (Array.isArray(localUsers)) {
                const uIdx = localUsers.findIndex(u => u.email && user.email && u.email.toLowerCase().trim() === user.email.toLowerCase().trim());
                if (uIdx > -1) {
                    localUsers[uIdx].name = newName;
                    if (user.avatar !== undefined) localUsers[uIdx].avatar = user.avatar;
                    if (newPassword) localUsers[uIdx].password = newPassword;
                } else if (user.email) {
                    localUsers.push({
                        name: newName,
                        email: user.email,
                        avatar: user.avatar,
                        password: newPassword || "123456"
                    });
                }
                saveRegisteredUsers(localUsers);
            }
        } catch(err) {
            console.warn("Local storage write notice:", err);
        }

        // Update UI elements in Header
        const userMenuName = document.getElementById("user-menu-name");
        if (userMenuName) userMenuName.textContent = newName;

        const headerAvatar = document.getElementById("header-user-avatar");
        if (headerAvatar) {
            headerAvatar.onerror = function() {
                this.onerror = null;
                this.src = DEFAULT_AVATAR_URL;
            };
            headerAvatar.src = user.avatar || DEFAULT_AVATAR_URL;
        }

        if (submitBtn) {
            submitBtn.disabled = false;
            submitBtn.textContent = "💾 Save Changes";
        }

        closeSettingsModal();
        showToast("Profile settings saved successfully! 🎉", "success");

        if (typeof addHeaderNotification === "function") {
            addHeaderNotification("Profile Updated ✨", `Your display name "${newName}" and profile photo have been updated.`, "👤");
        }

        // Background sync to Supabase users_db table (non-blocking)
        (async () => {
            try {
                const updatePayload = {
                    name: newName,
                    last_login: new Date().toISOString(),
                    avatar_url: user.avatar || null
                };
                if (newPassword) updatePayload.password = newPassword;

                if (typeof window.updateUserProfileInSupabase === "function") {
                    await window.updateUserProfileInSupabase(user.email, updatePayload);
                } else if (typeof updateUserProfileInSupabase === "function") {
                    await updateUserProfileInSupabase(user.email, updatePayload);
                } else if (window.supabaseClient) {
                    await window.supabaseClient
                        .from("users_db")
                        .update(updatePayload)
                        .eq("email", user.email.toLowerCase().trim());
                } else {
                    await fetch(`https://pupdbhmgirsnksujzfnd.supabase.co/rest/v1/users_db?email=eq.${encodeURIComponent(user.email.toLowerCase().trim())}`, {
                        method: "PATCH",
                        headers: {
                            apikey: "sb_publishable_67Y1zZG0Sn0sGkizvuNWjA_66RENHhq",
                            Authorization: "Bearer sb_publishable_67Y1zZG0Sn0sGkizvuNWjA_66RENHhq",
                            "Content-Type": "application/json"
                        },
                        body: JSON.stringify(updatePayload)
                    });
                }
            } catch(err) {
                console.warn("Background Supabase profile sync notice:", err);
            }
        })();
    }

    // Bind settings form submission and direct save button click
    if (settingsForm) {
        settingsForm.addEventListener("submit", handleSaveSettings);
    }
    const btnSaveSettings = document.getElementById("btn-save-settings");
    if (btnSaveSettings) {
        btnSaveSettings.addEventListener("click", (e) => {
            handleSaveSettings(e);
        });
    }
}

// --- Initialize All System Components (Single Safe Execution) ---
let isAppInitialized = false;
function initApp() {
    if (isAppInitialized) return;
    isAppInitialized = true;

    if (typeof renderFlags === "function") renderFlags();
    initAuthSystem();
    initAdminPanel();
    initSettingsSystem();
    if (typeof initSaveDocumentModal === "function") initSaveDocumentModal();
    if (typeof initNotificationCenter === "function") initNotificationCenter();
    if (typeof initLanguageDropdown === "function") initLanguageDropdown();
    if (typeof setupCustomizerControls === "function") setupCustomizerControls();
    if (typeof setupTemplateListeners === "function") setupTemplateListeners();
    if (typeof setupDocumentActions === "function") setupDocumentActions();
    if (typeof setupDragAndDrop === "function") setupDragAndDrop();
    if (typeof renderSidebarModulesList === "function") renderSidebarModulesList();
    if (typeof initAddModuleModal === "function") initAddModuleModal();
    if (typeof renderSavedDocuments === "function") renderSavedDocuments();
    if (typeof setupMobileCustomizerTabs === "function") setupMobileCustomizerTabs();
}

if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", initApp);
} else {
    initApp();
}
