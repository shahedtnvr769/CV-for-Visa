/* ==========================================================================
   Global State Management
   ========================================================================== */
const DEFAULT_CV_DATA = {
    name: "MD Shahed",
    jobTitle: "Date of birth: 21 Apr 2004 | Nationality: Bangladeshi | Gender: Male | Phone number: (+880) 01839079238 (Mobile) | Email address: shahedtnvr769@gmail.com | Website: https://shahed-tnvr769.vercel.app/ | LinkedIn: @shahedtnvr769 | Address: KHAGURIA, MATLAB UTTAR Sarkar Bari, 3516, Chottogram, Bangladesh (Home)",
    aboutMe: {
        title: "G�� ABOUT ME",
        content: "A hardworking and reliable Warehouse Worker dedicated to ensuring smooth, safe, and efficient daily operations. Skilled in safely loading and unloading cargo, packaging goods securely, and conducting quality checks to ensure products meet high standards. Strong team player with a focus on inventory handling, fast-paced task management, and workplace safety."
    },
    education: {
        title: "G�� EDUCATION AND TRAINING",
        entries: [
            {
                college: "1 JAN 2023 G�� CURRENT Savar, Dhaka, Bangladesh",
                duration: "",
                role: "BACHELOR OF BUSINESS ADMINISTRATION (BBA) Savar Govt. College",
                bullets: [
                    "Advanced Accounting",
                    "Data Analysis"
                ]
            },
            {
                college: "1 JAN 2020 G�� 31 DEC 2021 Dhaka, Bangladesh, Bangladesh",
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
        title: "G�� SKILLS",
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
        title: "G�� WORK EXPERIENCE",
        entries: [
            {
                company: "1 Jan 2026 G�� 1 May 2026 G�� CHOTTOGRAM, BANGLADESH",
                duration: "",
                role: "WAREHOUSE WORKER G�� FAMILY FARM",
                bullets: [
                    "Transported harvested crops from the field to the warehouse and arranged them safely in designated storage areas.",
                    "Carefully checked, sorted, and packed fresh products into boxes to make sure they were safe for transport."
                ]
            }
        ]
    },
    languages: {
        title: "G�� LANGUAGE SKILLS",
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
    }
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
        european_favorites: "European Favorites",
        top_asian_markets: "Top Asian Markets",
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
        experience_level: "Experience Level",
        entry_level: "Entry Level",
        mid_level: "Mid Level",
        executive: "Executive",
        back_dashboard: "Back to Dashboard",
        support: "Support",
        privacy_policy: "Privacy Policy",
        terms_service: "Terms of Service",
        footer_language: "Language: English",
        european_markets: "=��� European Markets",
        asian_markets: "=��� Asian Markets",
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
        density_spacious: "Spacious"
    },
    bn: {
        dashboard: "a��a��a��a�+a��a��a��a��a��a��",
        templates: "a��a��a��a��a��a��a��a��",
        customize: "a��a�+a�+a��a��a��a�+a��a��",
        my_documents: "a��a��a�+a�� a��a��a�+a��a��a��a��",
        create_cv: "a��a��a�+a�� a�+a�+a��a�+ a��a��a��a�+ a��a��a��a��",
        select_market: "a��a�Pa��a��a��a�+a�� a��a��a��a�+a��a��a��a�+a��a��a��a�+a��a��a�� a��a��a��a��a��a�+a��a�+a�� a�+a�+a�+a��a��a��a��a��a�� a��a��a��a�� a��a��a��a��a�+a��a�+a��a�� a��a��a�+ a��a��a�� a�+a��a��a�+a��a��a��a��a��a�� a��a��a�+ a�+a�+a��a�+ a��a��a��a�+ a��a��a��a�� a��a��a��a�+a�� a��a�+a��a��a��a��a�� a��a�+a��a��a��a��a�� a��a�+a��a��a��a�+a��a�� a��a��a��a��a��",
        european_favorites: "a��a��a��a��a��a��a��a�+ a��a��a��a��a��a�+a��a��a��",
        top_asian_markets: "a�+a��a��a�+ a��a��a�+a��a�+a�+a�� a��a�+a��a��a��a��a��",
        select_template: "a��a��a��a��a��a��a��a�� a��a�+a��a��a��a�+a��a�� a��a��a��a��",
        use_template: "a��a��a��a��a��a��a��a�� a��a��a��a��a��a�+a�� a��a��a��a��",
        expert_mode: "a��a��a��a�+a��a�+a��a��a�� a��a��a��",
        template_customizer: "a��a��a��a��a��a��a��a�� a��a�+a�+a��a��a��a�+a��a��a�+a��",
        modular_structure: "a��a��a��a��a�+a�� a��a��a��",
        reset_default: "a��a�+a��a��a��a��a�� a��a�+a�+a��a�� a��a��a��a��",
        global_settings: "a��a��a��a��a��a�+a�� a��a��a��a��a��a��a��a�� a�+a��a��a�+a��a�+",
        typography_anchor: "a��a��a��a�� a�+a��a��a�+a��a��",
        accent_color: "a��a��a��a�+a��a�+a��a��a��a�� a��a�+a��a�+a��",
        grid_density: "a��a��a��a�+a�� a�+a��a��a��a�+a�+a�� a��a��a��a��a��",
        show_photo: "a��a��a��a��a��a�+a��a�� a��a��a�+ a��a��a��a�+a��",
        include_headshot: "a��a��a��a�+a��a�� a��a��a��a�+ a��a��a��a��a��a�+a��a�� a��a��a�+ a��a��a��a��a�� a��a��a��a��",
        save_changes: "a��a��a�+a��a��a��a��a�� a�+a��a��a��a��a�+a�� a��a��a��a��",
        custom_format: "a��a�+a�+a��a��a�� a��a��a��a��a��a�+a��",
        profile_photo: "a��a��a��a��a��a�+a��a�� a��a��a�+",
        live_preview: "a��a�+a��a�� a��a��a��a�+a��a�+a��",
        create_new: "a��a��a��a�� a��a��a��a�+ a��a��a��a��",
        manage_docs: "a��a��a��a�+a�� a�+a��a��a��a��a�+a�+a�� a�+a�+a��a�+ a��a��a�� a��a��a�+a�� a��a��a��a�+a�� a��a��a�+a��a�+a��a��a�+ a��a��a�� a��a��a��a�+a��a�� a��a�+a��a��a��a��",
        browse: "a��a��a��a��a��a��",
        upload_photo: "a��a��a�+ a��a��a��a��a��",
        style: "a��a��a��a��",
        all_styles: "a�+a�� a��a��a��a��",
        style_professional: "a��a��a��a��a��a��a��a�+a��",
        style_creative: "a��a��a��a�+a��a�+a��a��a�+a��",
        style_simple: "a�+a�+a��a�+a��a��",
        experience_level: "a��a��a�+a��a��a�Pa��a�+a�� a�+a��a��a��",
        entry_level: "a��a�+a��a��a�+a�+a��a��a�+a�� a�+a��a��a��",
        mid_level: "a��a��a��a��a�� a�+a��a��a��",
        executive: "a��a�+a��a��a��a�+a��a�� a�+a��a��a��",
        back_dashboard: "a��a��a��a�+a��a��a��a��a��a��a�� a��a�+a��a�� a��a�+a��",
        support: "a�+a��a�+a��a�+a��a�+",
        privacy_policy: "a��a��a��a��a��a��a�+a��a�+ a��a��a��a�+",
        terms_service: "a��a��a�+a�+a��a��a�+a�� a��a��a��a��a�+a��a��a��",
        footer_language: "a��a�+a�+a�+: a��a�+a��a��a�+",
        european_markets: "=��� a��a��a��a��a��a��a��a�+ a��a�+a��a��a��a��a��",
        asian_markets: "=��� a��a��a�+a��a�+a�+a�� a��a�+a��a��a��a��a��",
        modern_prof: "a��a��a��a��a�+a�� a��a��a��a��a��a��a��a�+a��",
        exec_min: "a��a��a��a�+a�+a��a�+a��p��p��p�� a��a�+a��a�+a��a�+a��",
        creative_port: "a��a��a��a�+a��a�+a��a��a�+a�� a��a��a��a��a��a��a��a��a�+a��",
        country_italy: "a��a��a�+a��a�+",
        country_germany: "a��a�+a��a��a��a�+a��a�+",
        country_france: "a��a��a��a�+a��a��a�+",
        country_portugal: "a��a��a��a��a��a��a�+a��",
        country_denmark: "a��a��a��a��a�+a��a��a��",
        country_austria: "a��a�+a��a��a��a��a�+a��a�+a�+",
        country_norway: "a��a��a��a��a�+a��",
        country_japan: "a��a�+a��+�+�",
        country_southkorea: "a��a��a��a�+a�+a�� a��a��a��a�+a��a�+a�+",
        country_singapore: "a�+a�+a��a��a��a�+a��a��a��",
        country_bangladesh: "a��a�+a��a��a�+a��a��a��",
        country_russia: "a��a�+a��a�+a��a�+a�+",
        country_malaysia: "a��a�+a��a��a�+a��a��a�+a��a�+a�+",
        meta_full_compliance: "a��a��a��a��a�� a�+a��a��a��a��a�+",
        meta_standard_format: "a�+a��a��a��a��a�+a��a��a��a�+a��a��a�� a��a��a��a��a��a�+a��",
        meta_regional_style: "a��a�Pa��a��a��a�+a�� a��a��a��a��",
        meta_european_standard: "a��a��a��a��a��a��a��a�+ a�+a��a��a��a��a�+a��a��a��a�+a��a��a��",
        meta_cv_format: "a�+a�+a��a�+ a��a��a��a��a��a�+a��",
        meta_asean_hub: "a��a�+a�+a��a�+a�+a�� a��a�+a��",
        meta_regional_standard: "a��a�Pa��a��a��a�+a�� a�+a��a��a��a��a�+a��a��a��a�+a��a��a��",
        personal_details: "a��a��a��a��a��a��a�+a��a�� a��a�+a��a��a��",
        work_history: "a��a�+a��a��a�� a��a��a�+a��a�+a�+",
        education: "a��a�+a��a��a�+a�+",
        skills: "a��a��a��a�+a��a�+",
        density_compact: "a�+a��a��a��a�+a�+a��a��a��",
        density_spacious: "a��a��a��a��a�+a��a��"
    },
    de: {
        dashboard: "Dashboard",
        templates: "Vorlagen",
        customize: "Anpassen",
        my_documents: "Meine Dokumente",
        create_cv: "Meinen Lebenslauf erstellen",
        select_market: "W+�hlen Sie Ihren Zielmarkt, um einen lokalisierten, konformen Lebenslauf zu erstellen, der f++r regionale Bewerber-Tracking-Systeme optimiert ist.",
        european_favorites: "Europ+�ische Favoriten",
        top_asian_markets: "Top-asiatische M+�rkte",
        select_template: "Vorlage ausw+�hlen",
        use_template: "Vorlage verwenden",
        expert_mode: "Expertenmodus",
        template_customizer: "Vorlagen-Anpassung",
        modular_structure: "Modulare Struktur",
        reset_default: "Auf Standard zur++cksetzen",
        global_settings: "Globale Vorlageneinstellungen",
        typography_anchor: "Schriftstil",
        accent_color: "Akzentfarbe",
        grid_density: "Rasterabstandsdichte",
        show_photo: "Profilfoto anzeigen",
        include_headshot: "F++gen Sie ein Foto im Header hinzu",
        save_changes: "+�nderungen speichern",
        custom_format: "Benutzerdefiniertes Format",
        profile_photo: "Profilfoto",
        live_preview: "Live-Vorschau",
        create_new: "Neu erstellen",
        manage_docs: "Verwalten und organisieren Sie Ihre gespeicherten Lebensl+�ufe und Anschreiben.",
        browse: "Durchsuchen",
        upload_photo: "Foto hochladen",
        style: "Stil",
        all_styles: "Alle Stile",
        style_professional: "Professionell",
        style_creative: "Kreativ",
        style_simple: "Einfach",
        experience_level: "Erfahrungsstufe",
        entry_level: "Berufseinstieg",
        mid_level: "Mittleres Niveau",
        executive: "F++hrungskraft",
        back_dashboard: "Zur++ck zum Dashboard",
        support: "Unterst++tzung",
        privacy_policy: "Datenschutzerkl+�rung",
        terms_service: "Nutzungsbedingungen",
        footer_language: "Sprache: Deutsch",
        european_markets: "=��� Europ+�ische M+�rkte",
        asian_markets: "=��� Asiatische M+�rkte",
        modern_prof: "Modern Professionell",
        exec_min: "Minimaler Executive",
        creative_port: "Kreatives Portfolio",
        country_italy: "Italien",
        country_germany: "Deutschland",
        country_france: "Frankreich",
        country_portugal: "Portugal",
        country_denmark: "D+�nemark",
        country_austria: "+�sterreich",
        country_norway: "Norwegen",
        country_japan: "Japan",
        country_southkorea: "S++dkorea",
        country_singapore: "Singapur",
        country_bangladesh: "Bangladesch",
        country_russia: "Russland",
        country_malaysia: "Malaysia",
        meta_full_compliance: "Vollst+�ndige Einhaltung",
        meta_standard_format: "Standardformat",
        meta_regional_style: "Regionaler Stil",
        meta_european_standard: "Europ+�ischer Standard",
        meta_cv_format: "Lebenslauf-Format",
        meta_asean_hub: "ASEAN-Hub",
        meta_regional_standard: "Regionaler Standard",
        personal_details: "Pers+�nliche Angaben",
        work_history: "Werdegang",
        education: "Ausbildung",
        skills: "F+�higkeiten",
        density_compact: "Kompakt",
        density_spacious: "Gro+�z++gig"
    },
    fr: {
        dashboard: "Tableau de bord",
        templates: "Mod+�les",
        customize: "Personnaliser",
        my_documents: "Mes documents",
        create_cv: "Cr+�er mon CV",
        select_market: "S+�lectionnez votre march+� cible pour g+�n+�rer un CV localis+� et conforme, optimis+� pour les syst+�mes r+�gionaux de suivi des candidatures.",
        european_favorites: "Favoris europ+�ens",
        top_asian_markets: "Principaux march+�s asiatiques",
        select_template: "S+�lectionner le mod+�le",
        use_template: "Utiliser le mod+�le",
        expert_mode: "Mode Expert",
        template_customizer: "Personnalisateur de mod+�le",
        modular_structure: "Structure modulaire",
        reset_default: "R+�initialiser",
        global_settings: "Param+�tres globaux du mod+�le",
        typography_anchor: "Style de police",
        accent_color: "Couleur d'accentuation",
        grid_density: "Densit+� de l'espacement",
        show_photo: "Afficher la photo de profil",
        include_headshot: "Inclure une photo dans l'en-t+�te",
        save_changes: "Enregistrer les modifications",
        custom_format: "Format personnalis+�",
        profile_photo: "Photo de profil",
        live_preview: "Aper+�u en direct",
        create_new: "Cr+�er un nouveau",
        manage_docs: "G+�rez et organisez vos CV et lettres de motivation enregistr+�s.",
        browse: "Parcourir",
        upload_photo: "T+�l+�charger la photo",
        style: "Style",
        all_styles: "Tous les styles",
        style_professional: "Professionnel",
        style_creative: "Cr+�atif",
        style_simple: "Simple",
        experience_level: "Niveau d'exp+�rience",
        entry_level: "D+�butant",
        mid_level: "Interm+�diaire",
        executive: "Cadre",
        back_dashboard: "Retour au tableau de bord",
        support: "Assistance",
        privacy_policy: "Politique de confidentialit+�",
        terms_service: "Conditions d'utilisation",
        footer_language: "Langue: Fran+�ais",
        european_markets: "=��� March+�s europ+�ens",
        asian_markets: "=��� March+�s asiatiques",
        modern_prof: "Professionnel moderne",
        exec_min: "Ex+�cutif minimal",
        creative_port: "Portfolio cr+�atif",
        country_italy: "Italie",
        country_germany: "Allemagne",
        country_france: "France",
        country_portugal: "Portugal",
        country_denmark: "Danemark",
        country_austria: "Autriche",
        country_norway: "Norv+�ge",
        country_japan: "Japon",
        country_southkorea: "Cor+�e du Sud",
        country_singapore: "Singapour",
        country_bangladesh: "Bangladesh",
        country_russia: "Russie",
        country_malaysia: "Malaisie",
        meta_full_compliance: "Conformit+� totale",
        meta_standard_format: "Format standard",
        meta_regional_style: "Style r+�gional",
        meta_european_standard: "Norme europ+�enne",
        meta_cv_format: "Format de CV",
        meta_asean_hub: "Hub de l'ASEAN",
        meta_regional_standard: "Norme r+�gionale",
        personal_details: "D+�tails personnels",
        work_history: "Exp+�rience professionnelle",
        education: "+�ducation",
        skills: "Comp+�tences",
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
        european_favorites: "Preferiti europei",
        top_asian_markets: "Principali mercati asiatici",
        select_template: "Seleziona modello",
        use_template: "Usa modello",
        expert_mode: "Modalit+� Esperto",
        template_customizer: "Personalizzatore modello",
        modular_structure: "Struttura modulare",
        reset_default: "Ripristina predefiniti",
        global_settings: "Impostazioni globali modello",
        typography_anchor: "Ancoraggio tipografico",
        accent_color: "Colore accento",
        grid_density: "Densit+� spaziatura",
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
        experience_level: "Livello di esperienza",
        entry_level: "Primi passi",
        mid_level: "Intermedio",
        executive: "Dirigente",
        back_dashboard: "Torna alla bacheca",
        support: "Supporto",
        privacy_policy: "Codice della privacy",
        terms_service: "Termini di servizio",
        footer_language: "Lingua: Italiano",
        european_markets: "=��� Mercati europei",
        asian_markets: "=��� Mercati asiatici",
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
        meta_full_compliance: "Piena conformit+�",
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
        select_market: "Selecione seu mercado-alvo para gerar um curr+�culo localizado e em conformidade, otimizado para sistemas de rastreamento de candidatos regionais.",
        european_favorites: "Favoritos europeus",
        top_asian_markets: "Principais mercados asi+�ticos",
        select_template: "Selecionar modelo",
        use_template: "Usar modelo",
        expert_mode: "Modo Expert",
        template_customizer: "Personalizador de modelo",
        modular_structure: "Estrutura modular",
        reset_default: "Restaurar padr+�es",
        global_settings: "Configura+�+�es globais do modelo",
        typography_anchor: "Estilo de fonte",
        accent_color: "Cor de destaque",
        grid_density: "Densidade de espa+�amento",
        show_photo: "Mostrar foto de perfil",
        include_headshot: "Incluir foto no cabe+�alho",
        save_changes: "Salvar altera+�+�es",
        custom_format: "Formato personalizado",
        profile_photo: "Foto de perfil",
        live_preview: "Visualiza+�+�o ao vivo",
        create_new: "Criar novo",
        manage_docs: "Gerencie e organize seus curr+�culos e cartas de apresenta+�+�o salvos.",
        browse: "Procurar",
        upload_photo: "Enviar foto",
        style: "Estilo",
        all_styles: "Todos os estilos",
        style_professional: "Profissional",
        style_creative: "Criativo",
        style_simple: "Simples",
        experience_level: "N+�vel de experi+�ncia",
        entry_level: "N+�vel iniciante",
        mid_level: "N+�vel m+�dio",
        executive: "Executivo",
        back_dashboard: "Voltar ao painel",
        support: "Suporte",
        privacy_policy: "Pol+�tica de privacidade",
        terms_service: "Termos de servi+�o",
        footer_language: "Idioma: Portugu+�s",
        european_markets: "=��� Mercados europeus",
        asian_markets: "=��� Mercados asi+�ticos",
        modern_prof: "Profissional moderno",
        exec_min: "Executivo minimalista",
        creative_port: "Portf+�lio criativo",
        country_italy: "It+�lia",
        country_germany: "Alemanha",
        country_france: "Fran+�a",
        country_portugal: "Portugal",
        country_denmark: "Dinamarca",
        country_austria: "+�ustria",
        country_norway: "Noruega",
        country_japan: "Jap+�o",
        country_southkorea: "Corea do Sul",
        country_singapore: "Singapura",
        country_bangladesh: "Bangladesh",
        country_russia: "R+�ssia",
        country_malaysia: "Mal+�sia",
        meta_full_compliance: "Conformidade total",
        meta_standard_format: "Formato padr+�o",
        meta_regional_style: "Estilo regional",
        meta_european_standard: "Padr+�o europeu",
        meta_cv_format: "Format CV",
        meta_asean_hub: "Hub ASEAN",
        meta_regional_standard: "Padr+�o regional",
        personal_details: "Detalhes pessoais",
        work_history: "Hist+�rico profissional",
        education: "Educa+�+�o",
        skills: "Habilidades",
        density_compact: "Compacto",
        density_spacious: "Espa+�oso"
    },
    da: {
        dashboard: "Dashboard",
        templates: "Skabeloner",
        customize: "Tilpas",
        my_documents: "Mine dokumenter",
        create_cv: "Opret mit CV",
        select_market: "V+�lg dit m+�lmarked for at generere et lokaliseret, overensstemmende CV optimeret til regionale kandidatsporingssystemer (ATS).",
        european_favorites: "Europ+�iske favoritter",
        top_asian_markets: "Top asiatiske markeder",
        select_template: "V+�lg skabelon",
        use_template: "Brug skabelon",
        expert_mode: "Eksperttilstand",
        template_customizer: "Skabelon tilpasser",
        modular_structure: "Modul+�r struktur",
        reset_default: "Nulstil til standard",
        global_settings: "Globale skabelonindstillinger",
        typography_anchor: "Skrifttype stil",
        accent_color: "Accentfarve",
        grid_density: "Gitterafstand t+�thed",
        show_photo: "Vis profilbillede",
        include_headshot: "Inkluder et profilbillede i headeren",
        save_changes: "Gem +�ndringer",
        custom_format: "Brugerdefineret format",
        profile_photo: "Profilbillede",
        live_preview: "Live visning",
        create_new: "Opret ny",
        manage_docs: "Administrer og organiser dine gemte CV'er og ans++gninger.",
        browse: "Gennemse",
        upload_photo: "Upload foto",
        style: "Stil",
        all_styles: "Alle stilarter",
        style_professional: "Professionel",
        style_creative: "Kreativ",
        style_simple: "Enkel",
        experience_level: "Erfaringsniveau",
        entry_level: "Begynderniveau",
        mid_level: "Mellemniveau",
        executive: "Leder",
        back_dashboard: "Tilbage til dashboard",
        support: "Support",
        privacy_policy: "Fortrolighedspolitik",
        terms_service: "Servicevilk+�r",
        footer_language: "Sprog: Dansk",
        european_markets: "=��� Europ+�iske markeder",
        asian_markets: "=��� Asiatiske markeder",
        modern_prof: "Moderne professionel",
        exec_min: "Skabelon tilpasser",
        creative_port: "Kreativ portef++lje",
        country_italy: "Italien",
        country_germany: "Tyskland",
        country_france: "Frankrig",
        country_portugal: "Portugal",
        country_denmark: "Danmark",
        country_austria: "+�strig",
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
        meta_european_standard: "Europ+�isk standard",
        meta_cv_format: "CV-format",
        meta_asean_hub: "ASEAN-hub",
        meta_regional_standard: "Regional standard",
        personal_details: "Personlige oplysninger",
        work_history: "Arbejdshistorik",
        education: "Uddannelse",
        skills: "F+�rdigheder",
        density_compact: "Kompakt",
        density_spacious: "Rummelig"
    },
    no: {
        dashboard: "Dashboard",
        templates: "Malger",
        customize: "Tilpass",
        my_documents: "Mine dokumenter",
        create_cv: "Opprett min CV",
        select_market: "Velg ditt m+�lmarked for +� generere en lokalisert, samsvarende CV optimalisert for regionale kandidatsporingssystemer (ATS).",
        european_favorites: "Europeiske favoritter",
        top_asian_markets: "Beste asiatiske markeder",
        select_template: "Velg mal",
        use_template: "Bruk mal",
        expert_mode: "Ekspertmodus",
        template_customizer: "Mal tilpasser",
        modular_structure: "Modul+�r struktur",
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
        live_preview: "Forh+�ndsvisning",
        create_new: "Opprett ny",
        manage_docs: "Administrer og organiser dine lagrede CVer og s++knadsbrev.",
        browse: "Bla gjennom",
        upload_photo: "Last opp bilde",
        style: "Stil",
        all_styles: "Alle stiler",
        style_professional: "Profesjonell",
        style_creative: "Kreativ",
        style_simple: "Enkel",
        experience_level: "Erfaringsniv+�",
        entry_level: "Nybegynner",
        mid_level: "Mellomniv+�",
        executive: "Leder",
        back_dashboard: "Tilbage til dashboard",
        support: "St++tte",
        privacy_policy: "Personvernerkl+�ring",
        terms_service: "Brukervilk+�r",
        footer_language: "Spr+�k: Norsk",
        european_markets: "=��� Europeiske markeder",
        asian_markets: "=��� Asiatiske markeder",
        modern_prof: "Moderne profesjonell",
        exec_min: "Minimalistisk leder",
        creative_port: "Kreativ portef++lje",
        country_italy: "Italia",
        country_germany: "Tyskland",
        country_france: "Frankrike",
        country_portugal: "Portugal",
        country_denmark: "Danmark",
        country_austria: "+�sterrike",
        country_norway: "Norge",
        country_japan: "Japan",
        country_southkorea: "S++r-Korea",
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
        dashboard: "-�-�-+-�-+-� -�-+-�-�-�-+-�-+-+-�",
        templates: "-�-�-�-+-+-+-�",
        customize: "-�-�-�-�-�-+-�-�-�",
        my_documents: "-�-+-+ -�-+-�-�-+-�-+-�-�",
        create_cv: "-�-+-+-�-�-�-� -�-�-+-�-+-�",
        select_market: "-�-�-�-�-�-+-�-� -�-�-+-�-�-+-� -�-�-+-+-� -�-+-� -�-+-+-�-�-+-+-� -+-+-�-�-+-+-+-+-�-�-+-+-+-�-+ -�-�-+-�-+-�, -+-+-�-+-+-+-+-+-�-+-�-�-+-+-+-�-+ -�-+-� -�-�-�-+-+-+-�-+-�-+-�-� -�-+-�-�-�-+ -+-�-�-+-�-�-+-�-�-+-+-� -�-�-+-�-+-�-�-�-+-� (ATS).",
        european_favorites: "-�-�-�-+-+-�-�-�-�-+-� -�-�-�-+-�-+-�-�",
        top_asian_markets: "-�-�-�-�-+-� -�-+-+-�-�-�-�-+-� -�-�-+-�-+",
        select_template: "-�-�-�-�-�-�-� -�-�-�-+-+-+",
        use_template: "-�-�-+-+-+-�-+-+-�-�-�-� -�-�-�-+-+-+",
        expert_mode: "-�-�-�-+-�-�-�-+-�-� -�-�-�-+-+",
        template_customizer: "-�-�-�-�-�-+-�-�-+-� -�-�-�-+-+-+-�",
        modular_structure: "-�-+-�-�-+-�-+-�-� -�-�-�-�-�-�-�-�-�",
        reset_default: "-�-�-�-+-�-+-�-� -+-+ -�-+-+-+-�-�-+-+-�",
        global_settings: "-�-+-+-�-�-+-�-+-�-� -+-�-�-�-�-+-�-�-+ -�-�-�-+-+-+-�",
        typography_anchor: "-�-�-+-+-� -�-�-+-�-�-�",
        accent_color: "-�-�-�-� -�-�-�-�-+-�-�",
        grid_density: "-�-+-+-�-+-+-�-�-� -�-�-�-�-+",
        show_photo: "-�-+-�-�-+-�-�-� -�-+-�-+ -+-�-+-�-+-+-�",
        include_headshot: "-�-+-�-�-�-+-�-� -�-+-�-+ -� -+-�-�-+-+-+-�-+-�",
        save_changes: "-�-+-�-�-�-+-+-�-� -+-+-+-�-+-�-+-+-�",
        custom_format: "-�-+-+-�-+-+-�-�-�-�-+-�-�-�-+-� -�-+-�-+-�-�",
        profile_photo: "-�-+-�-+ -+-�-+-�-+-+-�",
        live_preview: "-�-�-�-�-+-�-+-�-+-+-�-�",
        create_new: "-�-+-+-�-�-�-� -+-+-�-+-�",
        manage_docs: "-�-+-�-�-�-+-�-�-�-� -+ -+-�-�-�-+-+-+-�-�-�-� -�-�-+-+ -�-+-�-�-�-+-�-+-+-�-� -�-�-+-�-+-� -+ -�-+-+-�-+-�-+-�-+-�-�-+-�-+-�-� -+-+-�-�-+-�.",
        browse: "-P-�-+-+-�",
        upload_photo: "-�-�-�-�-�-+-+-�-� -�-+-�-+",
        style: "-�-�-+-+-�",
        all_styles: "-�-�-� -�-�-+-+-+",
        style_professional: "-�-�-+-�-�-�-�-+-+-+-�-+-�-+-�-�",
        style_creative: "-�-�-+-�-�-�-�-�-+-�",
        style_simple: "-�-�-+-�-�-+-�",
        experience_level: "-�-�-+-�-�-+-� -+-+-�-�-�",
        entry_level: "-�-�-�-�-+-�-+-�-� -�-�-+-�-�-+-�",
        mid_level: "-�-�-�-�-+-+-� -�-�-+-�-�-+-�",
        executive: "-�-�-�-+-�-+-�-+-�-�-+-�",
        back_dashboard: "-�-�-+-�-� -� -+-�-+-�-+-�",
        support: "-�-+-�-�-�-�-�-�-�",
        privacy_policy: "-�-+-+-+-�-+-�-� -�-+-+-�-+-�-�-+-�-+-�-+-�-+-+-�-�-+",
        terms_service: "-�-�-+-+-�-+-� -+-�-+-+-+-�-+-+-�-�-+-+-�",
        footer_language: "-�-+-�-�: -�-�-�-�-�-+-�",
        european_markets: "=��� -�-�-�-+-+-�-�-�-�-+-� -�-�-+-�-+",
        asian_markets: "=��� -�-+-+-�-�-�-�-+-� -�-�-+-�-+",
        modern_prof: "-�-+-�-�-�-+-�-+-+-�-� -+-�-+-�-�-�-�-+-+-+-�-+-�-+-�-�",
        exec_min: "-�-+-+-+-+-�-+-+-�-�-+-�-+-�-� -+-�-�-�-�-�-�-�-+-�-�-+-�-�-�-+-�",
        creative_port: "-�-�-+-�-�-�-�-�-+-� -+-+-�-�-�-+-+-+-+",
        country_italy: "-�-�-�-+-+-�",
        country_germany: "-�-�-�-+-�-+-+-�",
        country_france: "-�-�-�-+-�-+-�",
        country_portugal: "-�-+-�-�-�-�-�-+-+-�",
        country_denmark: "-�-�-+-+-�",
        country_austria: "-�-�-�-�-�-+-�",
        country_norway: "-�-+-�-�-�-�-+-�",
        country_japan: "-�-+-+-+-+-�",
        country_southkorea: "-�-�-+-�-� -�-+-�-�-�",
        country_singapore: "-�-+-+-�-�-+-�-�",
        country_bangladesh: "-�-�-+-�-+-�-�-�-�",
        country_russia: "-�-+-�-�-+-�",
        country_malaysia: "-�-�-+-�-�-+-+-�",
        meta_full_compliance: "-�-+-+-+-+-� -�-+-+-�-�-�-�-�-�-�-+-�",
        meta_standard_format: "-�-�-�-+-�-�-�-�-+-�-� -�-+-�-+-�-�",
        meta_regional_style: "-�-�-�-+-+-+-�-+-�-+-�-� -�-�-+-+-�",
        meta_european_standard: "-�-�-�-+-+-�-�-�-�-+-� -�-�-�-+-�-�-�-�",
        meta_cv_format: "-�-+-�-+-�-� -�-�-+-�-+-�",
        meta_asean_hub: "-�-�-+-�-� -�-�-�-�-�",
        meta_regional_standard: "-�-�-�-+-+-+-�-+-�-+-�-� -�-�-�-+-�-�-�-�",
        personal_details: "-�-+-�-+-�-� -�-�-+-+-�-�",
        work_history: "-�-�-�-+-�-+-� -�-�-�-+-�-�",
        education: "-P-�-�-�-+-+-�-�-+-+-�",
        skills: "-�-�-�-�-�-+",
        density_compact: "-�-+-+-+-�-�-�-+-�-�",
        density_spacious: "-�-�-+-�-�-+-�-+-�-�"
    },
    ja: {
        dashboard: "p��p��p�+p��p�p�+p��",
        templates: "p��p�p��p�p�+p��",
        customize: "p�p�p�+p�Pp��p�",
        my_documents: "p�Pp�� p��p�p��p��p�p��",
        create_cv: "s�ѵ����+p��S+����p��p��",
        select_market: "s��s��p�����t��t��t��p�+p�p��p��n+�ATSn+�s��p��p�����T��s��p��p��p��t�+s��p��s�����p��������p��p��s�ѵ����+p��t�����p��p��p��p��p��p��p�+p�+p�p��p��s+�s�p��T�+��Pp��p�+p��p��",
        european_favorites: "p�p�+p�p��p��p��S�����s+�s�",
        top_asian_markets: "p��p�+p��p��S++F��s+�s�",
        select_template: "p��p�p��p�p�+p��p��T�+��P",
        use_template: "p��p�p��p�p�+p��p��S++t��",
        expert_mode: "p�p�p�p��p�+p��p��p�+p��",
        template_customizer: "p��p�p��p�p�+p��p�p�p�+p�Pp��p�p�+",
        modular_structure: "p��p�+p��p�+p⽵����",
        reset_default: "p��p��p�p�p��p����+p��",
        global_settings: "p�p�p�+p��p�p��p�p��p�p�+p��F��s��",
        typography_anchor: "p��p�p�p��p�p�+p��p�",
        accent_color: "p��p�p�+p�p��p�p�p�+",
        grid_density: "p�p�p��p��p��T��T��",
        show_photo: "p��p�p��p��p�+p�s��t��p��F�t�",
        include_headshot: "p��p��p��p�+p��T��s��t��p��sɽp��p��",
        save_changes: "s�뵢�p��S+�s��",
        custom_format: "p�p�p�+p��p��p�p�+p�Pp��p��",
        profile_photo: "p��p�p��p��p�+p�s��t��",
        live_preview: "p�p��p��p��p�p��p��p�+",
        create_new: "���F��S+����",
        manage_docs: "S+�s��p��p��s�ѵ����+p��p�p��p�+p�p�+p�+p��t��t��p�+��t��p��p�+p��p��",
        browse: "s��t�",
        upload_photo: "s��t��p��p��p��p��p�p�+p��",
        style: "p�p�+p��p�",
        all_styles: "p��p��p��p��p�p�+p��p�",
        style_professional: "p��p�p��p�p��p�+p�p��p�",
        style_creative: "p�p�p�p��p��p��p��",
        style_simple: "p�+p�p��p�",
        experience_level: "t��T��p�p��p�",
        entry_level: "p�p�p��p�p�+p�p��p�",
        mid_level: "p�p��p�p�p��p�",
        executive: "p�p�p�+p�p��p��p��t��",
        back_dashboard: "p��p��p�+p��p�p�+p��p����+p��",
        support: "p�p�p�+p��",
        privacy_policy: "p��p�p��p��p�+p�+p�p�p�+p�+",
        terms_service: "s�t��F��t��",
        footer_language: "F��F�P: ��ѵ��F�P",
        european_markets: "=��� p�p�+p�p��p��s+�s�",
        asian_markets: "=��� p��p�+p��s+�s�",
        modern_prof: "p��p��p�p�+p��p�p��p�p��p�+p�p��p�",
        exec_min: "p�p�p�+p�p��p��p��p�+p�p��p�Pp�",
        creative_port: "p�p�p�p��p��p��p��p�+p�p�+p��p��p�p�p�",
        country_italy: "p��p�+p�p��",
        country_germany: "p��p��p��",
        country_france: "p��p�p�p�",
        country_portugal: "p�p�p��p�p�",
        country_denmark: "p��p�p�Pp�+p�",
        country_austria: "p�p�+p�p��p�p��",
        country_norway: "p��p�p�p�p�+",
        country_japan: "��ѵ��",
        country_southkorea: "T��s�+",
        country_singapore: "p�+p�p�p�p�+p�",
        country_bangladesh: "p��p�p�p�p��p�+p��",
        country_russia: "p�p�+p��",
        country_malaysia: "p�Pp�p�+p�+p��",
        meta_full_compliance: "s��s࿵�����",
        meta_standard_format: "��ֵ��p��p�p�+p�Pp��p��",
        meta_regional_style: "s��s��p�p�+p��p�",
        meta_european_standard: "���s+PF�ŵ�+",
        meta_cv_format: "s�ѵ����+p��p�p�+p�Pp��p��",
        meta_asean_hub: "ASEANp��p��",
        meta_regional_standard: "s��s��F�ŵ�+",
        personal_details: "s��S�����s�",
        work_history: "F�+���",
        education: "s�����",
        skills: "p�p�p�",
        density_compact: "p�p�p��p�p��",
        density_spacious: "p��p��p��p��"
    },
    ko: {
        dashboard: "d��8�d��d�",
        templates: "f�f��d�+",
        customize: "8�8ܬ8P� 8��8��",
        my_documents: "d� d�+8�",
        create_cv: "8��d��8� d��d��O+�",
        select_market: "8��8�� 8��8ܬ O��d�� 8�8��f�(ATS)8�� 8��8��f��d��O�� f��8�� O+�8��8�� 8��8��f��d�� 8��d��8�d�+ 8�8�f��d��d�� d��8�� 8�8P�8�� 8��f�f��8�8�8��.",
        european_favorites: "8��d�+ 8�+O+� 8�8P�",
        top_asian_markets: "8��8�8�� 8�+8�� 8�8P�",
        select_template: "f�f��d�+ 8��f�",
        use_template: "f�f��d�+ 8�8ܬ",
        expert_mode: "8��d�+O�� d��d�",
        template_customizer: "f�f��d�+ 8�8ܬ8P� 8��8��",
        modular_structure: "d��d��8� O��8�",
        reset_default: "O+�d�+O��8�+d� 8P�8��8��",
        global_settings: "O+�d�d�� f�f��d�+ 8��8��",
        typography_anchor: "O+�O+� 8��f��8�+",
        accent_color: "O��8� 8��8��",
        grid_density: "O++d��d� O��O�� 8�8��",
        show_photo: "f��d�f�� 8�8�� f�8�",
        include_headshot: "f��d��8�� f��d�f�� 8�8�� fżf�",
        save_changes: "d��O�+8�f� 8��8P�",
        custom_format: "8�8ܬ8P� 8��8�� f��8�",
        profile_photo: "f��d�f�� 8�8��",
        live_preview: "8��8�O�� d�+d��d��O+�",
        create_new: "8��d� d��d��O+�",
        manage_docs: "8��8P�dɣ 8��d��8� d�� 8P�O+�8��O��8�d�+ O��d��f��O�� 8��d��f��8�8�8��.",
        browse: "8�+8��d��O+�",
        upload_photo: "8�8�� 8��d�d�",
        style: "8��f��8�+",
        all_styles: "d��d�� 8��f��8�+",
        style_professional: "d��8��d��8��f��",
        style_creative: "O��8�f��",
        style_simple: "O��d��f� O��8�",
        experience_level: "O�+d�� 8��8��",
        entry_level: "8��8P�",
        mid_level: "O�+d��8��",
        executive: "8P�8��/O��d��8P�",
        back_dashboard: "d��8�d��d�d� d��8��O��O+�",
        support: "O��O�� 8��8��",
        privacy_policy: "O��8�+8��d�� 8��d��d��8��",
        terms_service: "8��8ܬ 8�+O��",
        footer_language: "8�+8��: f�O��8��",
        european_markets: "=��� 8��d�+ 8�8P�",
        asian_markets: "=��� 8��8�8�� 8�8P�",
        modern_prof: "f��d��8��8�+ 8��d�+O��",
        exec_min: "8��O++8�f��f�d+� d�+d��d��",
        creative_port: "f��d��8��8��f�d+� fżf�+fŦd��8��",
        country_italy: "8��f��d��8��",
        country_germany: "d��8�+",
        country_france: "f��dP�8��",
        country_portugal: "fżdѦtuO��",
        country_denmark: "d�d��f��",
        country_austria: "8��8��f�+d��8��",
        country_norway: "d�+dѦ8��8��",
        country_japan: "8�+d�+",
        country_southkorea: "d��f�d�+O��",
        country_singapore: "8�O��fżdѦ",
        country_bangladesh: "d��O+�d�+d�8�",
        country_russia: "d��8�8��",
        country_malaysia: "d��d��8��8�8��",
        meta_full_compliance: "8��8�� 8��8��",
        meta_standard_format: "f�8�� f��8�",
        meta_regional_style: "8��8�� 8��f��8�+",
        meta_european_standard: "8��d�+ f�8��",
        meta_cv_format: "8��d��8� f��8�",
        meta_asean_hub: "8��8�+8�� f��d+�",
        meta_regional_standard: "8��8�� f�8��",
        personal_details: "8�+8�� 8�f�",
        work_history: "O�+d�� 8�f�",
        education: "f��d�� 8�f�",
        skills: "O+�8�� 8�f�",
        density_compact: "8��O��",
        density_spacious: "d��O��"
    },
    ms: {
        dashboard: "Papan Pemuka",
        templates: "Templat",
        customize: "Peribadikan",
        my_documents: "Dokumen Saya",
        create_cv: "Bina Resume Saya",
        select_market: "Pilih pasaran sasaran anda untuk menghasilkan resume setempat yang mematuhi sistem penapisan resume (ATS) wilayah.",
        european_favorites: "Pilihan Eropah",
        top_asian_markets: "Pasaran Utama Asia",
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
        experience_level: "Tahap Pengalaman",
        entry_level: "Tahap Kemasukan",
        mid_level: "Tahap Pertengahan",
        executive: "Eksekutif",
        back_dashboard: "Kembali ke Papan Pemuka",
        support: "Sokongan",
        privacy_policy: "Dasar Privasi",
        terms_service: "Syarat Perkhidmatan",
        footer_language: "Bahasa: Bahasa Melayu",
        european_markets: "=��� Pasaran Eropah",
        asian_markets: "=��� Pasaran Asia",
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
    malaysia: `<svg viewBox="0 0 28 14"><rect width="28" height="14" fill="#fff"/><rect width="28" height="1" fill="#cc0000"/><rect y="2" width="28" height="1" fill="#cc0000"/><rect y="4" width="28" height="1" fill="#cc0000"/><rect y="6" width="28" height="1" fill="#cc0000"/><rect y="8" width="28" height="1" fill="#cc0000"/><rect y="10" width="28" height="1" fill="#cc0000"/><rect y="12" width="28" height="1" fill="#cc0000"/><rect width="14" height="8" fill="#000066"/><circle cx="7" cy="4" r="2.5" fill="#ffcc00"/><circle cx="7.7" cy="4" r="2.5" fill="#000066"/><polygon points="7,2 7,6 8,3 6,5" fill="#ffcc00"/></svg>`
};

// Initial Default Saved Documents (loaded if localStorage is empty)
const DEFAULT_SAVED_DOCS = [
    {
        id: "german-cv",
        title: "German CV - Software Engineer",
        type: "Resume",
        meta: "Edited 2 days ago",
        settings: {
            font: "serif",
            accentColor: "#111827",
            density: 2,
            showPhoto: true,
            photoUrl: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=200",
            modulesOrder: ["personal", "experience", "education", "skills"],
            hiddenModules: []
        },
        cvData: {
            name: "JOHANN M+�LLER",
            jobTitle: "Senior Software Engineer | Berlin, DE | johann.muller@example.de",
            experience: {
                title: "Professional Experience",
                entries: [
                    {
                        company: "Tech Solutions GmbH",
                        duration: "2020 - Present",
                        role: "Lead Developer (Full Stack)",
                        bullets: [
                            "Designed cloud architecture using AWS, Node.js and React.",
                            "Mentored 6 junior engineers and improved build speeds by 40%."
                        ]
                    }
                ]
            },
            education: {
                title: "Education",
                entries: [
                    {
                        college: "Technical University of Munich",
                        duration: "2013 - 2017",
                        role: "Master of Science in Informatics"
                    }
                ]
            },
            skills: {
                title: "Skills & Languages",
                items: ["TypeScript", "Node.js", "Docker", "AWS", "German (Native)", "English (Fluent)"]
            }
        }
    },
    {
        id: "tech-lead-cover",
        title: "Tech Lead Cover Letter",
        type: "Cover Letter",
        meta: "Edited last week",
        settings: {
            font: "inter",
            accentColor: "#0d766e",
            density: 2,
            showPhoto: false,
            photoUrl: "",
            modulesOrder: ["personal", "experience"],
            hiddenModules: ["education", "skills"]
        },
        cvData: {
            name: "SARAH CONNOR",
            jobTitle: "DevOps Architect | Los Angeles, CA | sarah.c@cloud.com",
            experience: {
                title: "Cover Letter",
                entries: [
                    {
                        company: "Dear Hiring Team,",
                        duration: "June 2026",
                        role: "Subject: Application for Senior DevOps Architect",
                        bullets: [
                            "I am writing to express my strong interest in the DevOps Architect role at your organization. With over 8 years of experience building resilient infrastructures, I specialize in automating large-scale cloud systems.",
                            "In my previous position, I migrated legacy architectures to Kubernetes clusters, saving over 30% in cloud expenses. I am excited to bring my technical skills and collaborative approach to your team."
                        ]
                    }
                ]
            },
            education: { title: "Education", entries: [] },
            skills: { title: "Skills", items: [] }
        }
    },
    {
        id: "strategy-resume",
        title: "Global Strategy Resume",
        type: "Resume",
        meta: "Edited Oct 12, 2023",
        settings: {
            font: "outfit",
            accentColor: "#1e3a8a",
            density: 1,
            showPhoto: true,
            photoUrl: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=200",
            modulesOrder: ["personal", "skills", "experience", "education"],
            hiddenModules: []
        },
        cvData: {
            name: "ALEX CHEN",
            jobTitle: "VP of Product Strategy | Singapore | alex.chen@global.sg",
            experience: {
                title: "Executive Background",
                entries: [
                    {
                        company: "Apex Global Holdings",
                        duration: "2018 - 2023",
                        role: "Head of Strategy",
                        bullets: [
                            "Devised entry strategies for 4 new international markets.",
                            "Spearheaded digital transformation initiatives raising efficiency by 15%."
                        ]
                    }
                ]
            },
            education: {
                title: "Credentials",
                entries: [
                    {
                        college: "National University of Singapore",
                        duration: "2008 - 2012",
                        role: "Bachelor of Business Administration"
                    }
                ]
            },
            skills: {
                title: "Core Competency",
                items: ["Corporate Strategy", "Market Analysis", "Mergers & Acquisitions", "Staging & Scaling"]
            }
        }
    }
];

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
        const sessionUser = localStorage.getItem("cv_user_auth");
        if (sessionUser) {
            const user = JSON.parse(sessionUser);
            document.body.classList.add("logged-in");
            container.classList.add("hidden");

            // Update User Name and Email in dropdown
            const menuName = document.getElementById("user-menu-name");
            const menuEmail = document.getElementById("user-menu-email");
            if (menuName) menuName.textContent = user.name || "User";
            if (menuEmail) menuEmail.textContent = user.email || "";
        } else {
            document.body.classList.remove("logged-in");
            container.classList.add("hidden");
            if (appState && appState.currentTab && appState.currentTab !== "dashboard") {
                switchTab("dashboard");
            }
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

    // 3. Login form handler
    if (loginForm) {
        loginForm.addEventListener("submit", (e) => {
            e.preventDefault();
            const email = document.getElementById("login-email").value.trim().toLowerCase();
            const password = document.getElementById("login-password").value;

            // Find user from localStorage database
            const users = JSON.parse(localStorage.getItem("cv_registered_users") || "[]");
            const matchedUser = users.find(u => u.email === email && u.password === password);

            if (matchedUser) {
                localStorage.setItem("cv_user_auth", JSON.stringify({ name: matchedUser.name, email: matchedUser.email }));
                showToast(`Welcome back, ${matchedUser.name}!`);
                checkAuth();
                // Clear inputs
                loginForm.reset();
            } else {
                showToast("Invalid email or password", "error");
            }
        });
    }

    // 4. Sign Up form handler
    if (signupForm) {
        signupForm.addEventListener("submit", (e) => {
            e.preventDefault();
            const name = document.getElementById("signup-name").value.trim();
            const email = document.getElementById("signup-email").value.trim().toLowerCase();
            const password = document.getElementById("signup-password").value;
            const confirmPassword = document.getElementById("signup-confirm-password").value;

            if (password !== confirmPassword) {
                showToast("Passwords do not match", "error");
                return;
            }

            // Check if user already exists
            const users = JSON.parse(localStorage.getItem("cv_registered_users") || "[]");
            if (users.some(u => u.email === email)) {
                showToast("An account with this email already exists", "error");
                return;
            }

            // Save new user
            users.push({ name, email, password });
            localStorage.setItem("cv_registered_users", JSON.stringify(users));

            // Auto login after sign up
            localStorage.setItem("cv_user_auth", JSON.stringify({ name, email }));
            showToast("Account created successfully!");
            checkAuth();
            // Clear inputs
            signupForm.reset();
        });
    }

    // 5. User Profile Dropdown toggler
    if (userProfileContainer && userProfile) {
        userProfile.addEventListener("click", (e) => {
            e.stopPropagation();
            userProfileContainer.classList.toggle("open");
        });

        document.addEventListener("click", (e) => {
            if (!userProfileContainer.contains(e.target)) {
                userProfileContainer.classList.remove("open");
            }
        });
    }

    // 6. Logout handler
    if (logoutBtn) {
        logoutBtn.addEventListener("click", (e) => {
            e.preventDefault();
            localStorage.removeItem("cv_user_auth");
            userProfileContainer.classList.remove("open");
            checkAuth();
            showToast("Signed out successfully.");
        });
    }

    // Execute check on startup
    checkAuth();
}

/* ==========================================================================
   Initialization
   ========================================================================== */
document.addEventListener("DOMContentLoaded", () => {
    initAuthGate();
    renderFlags();
    initLocalStorage();
    setupTabRouting();
    setupDropdownListeners();
    setupDashboardListeners();
    setupTemplateListeners();
    setupCustomizerControls();
    setupDragAndDrop();
    setupDocumentActions();

    // Render initially selected template styling
    updateLivePreview();
    renderSavedDocuments();
    initLanguageDropdown();

    // Handle live preview scale adjustments
    window.addEventListener("resize", resizePreview);
});

// Render all Country Flag SVGs in the grids (dashboard + templates dropdown)
function renderFlags() {
    Object.keys(SVG_FLAGS).forEach(key => {
        // Dashboard flag orbs
        const el = document.getElementById(`flag-${key}`);
        if (el) el.innerHTML = SVG_FLAGS[key];
        // Dropdown flag orbs
        const ddEl = document.getElementById(`dd-flag-${key}`);
        if (ddEl) ddEl.innerHTML = SVG_FLAGS[key];
    });
}

// Helper to get active user documents storage key
function getDocsStorageKey() {
    const sessionUser = localStorage.getItem("cv_user_auth");
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
    if (!localStorage.getItem(docsKey)) {
        localStorage.setItem(docsKey, JSON.stringify(DEFAULT_SAVED_DOCS));
    }
    appState.documents = JSON.parse(localStorage.getItem(docsKey));
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
    // Auth Guard: Only authenticated users can access tabs other than Dashboard
    if (tabId !== "dashboard" && !localStorage.getItem("cv_user_auth")) {
        const authContainer = document.getElementById("auth-gate-container");
        if (authContainer) {
            authContainer.classList.remove("hidden");
            const tabLogin = document.getElementById("auth-tab-login");
            const tabSignup = document.getElementById("auth-tab-signup");
            const loginForm = document.getElementById("auth-login-form");
            const signupForm = document.getElementById("auth-signup-form");
            if (tabLogin && tabSignup && loginForm && signupForm) {
                tabLogin.click();
            }
        }
        showToast("Please Sign Up or Sign In to access Templates, Customize, and My Documents.", "info");
        return;
    }

    appState.currentTab = tabId;

    // Update navbar UI
    document.querySelectorAll(".nav-tab").forEach(btn => {
        btn.classList.remove("active");
        if (btn.dataset.tab === tabId) {
            btn.classList.add("active");
        }
    });

    // Update views
    document.querySelectorAll(".tab-view").forEach(view => {
        view.classList.remove("active");
    });

    const activeView = document.getElementById(`view-${tabId}`);
    if (activeView) {
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

    // Scroll to top
    window.scrollTo({ top: 0, behavior: "smooth" });

    // If entering Customize view, trigger resize preview
    if (tabId === "customize") {
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

            showToast(`Selected ${countryName}. Pick a template.`);
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
            showToast(`Selected ${countryName}. Pick a template.`);
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
            showToast(`Selected ${countryName}. Pick a template.`);
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
            // Minimalist Scandinavian G�� clean header divider
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
            // Asian formal G�� large centered photo at top
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
            // Traditional G�� photo on the right side of header
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

        // Pick the accent color for this template slot (0=modern, 1=exec, 2=creative)
        const accentColor = countryConfig ? countryConfig.accentColors[i] : bgTint;

        // Set the CSS variable for variant pseudo-elements
        thumb.style.setProperty("--cv-accent", accentColor);

        if (country === "bangladesh") {
            // G��G�� Bangladesh: show a real full-page image preview G��G��
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
            src="pictur and video logo/bangladesh_cv_template.png"
            alt="Bangladesh CV Template Preview"
            style="
              width:100%;
              height:100%;
              object-fit:contain;
              display:block;
            "
            onerror="this.parentElement.innerHTML = getBangladeshMiniPreviewHtml('${accentColor}');"
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
            // G��G�� Other countries: restore default thumb + dummy CV G��G��
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

    // Choose Template
    const useBtns = document.querySelectorAll(".btn-use-template, .template-card");
    useBtns.forEach(el => {
        el.addEventListener("click", (e) => {
            const target = e.currentTarget;
            const templateId = target.dataset.templateId;
            if (!templateId) return;

            appState.selectedTemplate = templateId;

            // Get country-specific config (fallback to defaults if no country selected)
            const country = appState.selectedCountry;
            const countryConfig = country && COUNTRY_TEMPLATE_CONFIGS[country] ? COUNTRY_TEMPLATE_CONFIGS[country] : null;

            // Template index for color/font selection
            const templateIndex = templateId === "modern-prof" ? 0 : templateId === "exec-min" ? 1 : 2;

            // Setup configurations depending on template choice + country
            if (templateId === "modern-prof") {
                appState.customizerSettings.font = countryConfig ? countryConfig.fonts[0] : "serif";
                appState.customizerSettings.accentColor = countryConfig ? countryConfig.accentColors[0] : "#111827";
                appState.customizerSettings.showPhoto = true;
            } else if (templateId === "exec-min") {
                appState.customizerSettings.font = countryConfig ? countryConfig.fonts[1] : "inter";
                appState.customizerSettings.accentColor = countryConfig ? countryConfig.accentColors[1] : "#0d766e";
                appState.customizerSettings.showPhoto = false;
            } else if (templateId === "creative-port") {
                appState.customizerSettings.font = countryConfig ? countryConfig.fonts[2] : "outfit";
                appState.customizerSettings.accentColor = countryConfig ? countryConfig.accentColors[2] : "#1e3a8a";
                appState.customizerSettings.showPhoto = true;
            }

            // Load clean default CV data
            if (country === "bangladesh") {
                appState.cvData = JSON.parse(JSON.stringify(DEFAULT_BD_CV_DATA));
                appState.customizerSettings.country = "bangladesh";
            } else {
                appState.cvData = JSON.parse(JSON.stringify(DEFAULT_CV_DATA));
                appState.customizerSettings.country = country || null;
            }
            appState.currentDocId = null; // New document until saved

            // Apply initial configurations to Customizer UI
            syncCustomizerControlsToState();
            updateLivePreview();

            const countryLabel = countryConfig ? ` (${countryConfig.label})` : "";
            showToast(`Loaded ${target.closest(".template-card")?.querySelector("h3")?.textContent || "template"}${countryLabel}. Customizer is ready.`);
            switchTab("customize");
            e.stopPropagation();
        });
    });

    // Setup template styles filtering
    const checkboxes = document.querySelectorAll(".filter-group input[type='checkbox']");
    checkboxes.forEach(chk => {
        chk.addEventListener("change", () => {
            filterTemplates();
        });
    });
}

function filterTemplates() {
    const allStyles = document.getElementById("filter-style-all").checked;
    const prof = document.getElementById("filter-style-professional").checked;
    const creative = document.getElementById("filter-style-creative").checked;
    const simple = document.getElementById("filter-style-simple").checked;

    const cards = document.querySelectorAll(".template-cards-grid .template-card");
    cards.forEach(card => {
        const style = card.dataset.style;
        if (allStyles) {
            card.style.display = "flex";
        } else {
            if ((style === "professional" && prof) ||
                (style === "creative" && creative) ||
                (style === "simple" && simple)) {
                card.style.display = "flex";
            } else {
                card.style.display = "none";
            }
        }
    });
}

/* ==========================================================================
   Customizer Logic
   ========================================================================== */
let isCustomizerControlsSetup = false;
function setupCustomizerControls() {
    if (isCustomizerControlsSetup) return;
    isCustomizerControlsSetup = true;

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

    // Reset to Default button
    const resetBtn = document.getElementById("btn-reset-default");
    if (resetBtn) {
        resetBtn.addEventListener("click", () => {
            const country = appState.customizerSettings.country;
            if (country === "bangladesh") {
                appState.cvData = JSON.parse(JSON.stringify(DEFAULT_BD_CV_DATA));
                appState.customizerSettings = {
                    country: "bangladesh",
                    font: "serif",
                    fontSize: 13,
                    accentColor: "#006a4e",
                    density: 2,
                    showPhoto: true,
                    photoUrl: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=200",
                    photoShape: "circle",
                    photoSize: 115,
                    modulesOrder: ["objective", "education", "otherQualifications", "personal", "declaration"],
                    hiddenModules: []
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
                    photoShape: "circle",
                    photoSize: 115,
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

function parseProfileInfoFromJobTitle(jobTitleStr) {
    const info = {
        dob: "21 Apr 2004",
        nat: "Bangladeshi",
        gender: "Male",
        phone: "(+880) 01839079238 (Mobile)",
        email: "shahedtnvr769@gmail.com",
        website: "https://shahed-tnvr769.vercel.app/",
        linkedin: "@shahedtnvr769",
        address: "KHAGURIA, MATLAB UTTAR Sarkar Bari, 3516, Chottogram, Bangladesh (Home)"
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
            if (part.includes("@")) info.email = part;
            else if (part.startsWith("http")) info.website = part;
        }
    });
    return info;
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
    const skillsIn = document.getElementById("exp-in-skills");

    if (nameIn && appState.cvData.name) nameIn.value = appState.cvData.name;

    if (appState.customizerSettings.country === "bangladesh" || (appState.cvData.contact && appState.cvData.personalInfo)) {
        const c = appState.cvData.contact || {};
        const p = appState.cvData.personalInfo || {};
        if (dobIn) dobIn.value = p.dob || "";
        if (natIn) natIn.value = p.nationality || "";
        if (genderIn) genderIn.value = p.gender || "";
        if (phoneIn) phoneIn.value = c.mobile || "";
        if (emailIn) emailIn.value = c.email || "";
        if (addressIn) addressIn.value = c.address || "";
        if (websiteIn) websiteIn.value = c.website || "https://shahed-tnvr769.vercel.app/";
        if (linkedinIn) linkedinIn.value = c.linkedin || "@shahedtnvr769";
    } else {
        const parsed = parseProfileInfoFromJobTitle(appState.cvData.jobTitle);
        if (dobIn) dobIn.value = parsed.dob || "";
        if (natIn) natIn.value = parsed.nat || "";
        if (genderIn) genderIn.value = parsed.gender || "";
        if (phoneIn) phoneIn.value = parsed.phone || "";
        if (emailIn) emailIn.value = parsed.email || "";
        if (websiteIn) websiteIn.value = parsed.website || "";
        if (linkedinIn) linkedinIn.value = parsed.linkedin || "";
        if (addressIn) addressIn.value = parsed.address || "";
    }

    if (aboutIn) {
        if (appState.cvData.aboutMe) {
            aboutIn.value = typeof appState.cvData.aboutMe === "object" ? (appState.cvData.aboutMe.content || "") : appState.cvData.aboutMe;
        } else if (appState.cvData.objective) {
            aboutIn.value = appState.cvData.objective;
        }
    }
    if (skillsIn) {
        if (appState.cvData.skills) {
            const items = appState.cvData.skills.items || appState.cvData.skills;
            if (Array.isArray(items)) skillsIn.value = items.join(", ");
        } else if (appState.cvData.otherQualifications && Array.isArray(appState.cvData.otherQualifications)) {
            skillsIn.value = appState.cvData.otherQualifications.join(", ");
        }
    }
}

function setupExpertModeInputListeners() {
    const inputIds = [
        "exp-in-name", "exp-in-dob", "exp-in-nat", "exp-in-gender",
        "exp-in-phone", "exp-in-email", "exp-in-website", "exp-in-linkedin",
        "exp-in-address", "exp-in-about", "exp-in-skills"
    ];

    inputIds.forEach(id => {
        const el = document.getElementById(id);
        if (!el) return;

        el.addEventListener("input", () => {
            const val = el.value.trim();

            if (id === "exp-in-name") {
                appState.cvData.name = val;
            } else if (id === "exp-in-about") {
                if (appState.customizerSettings.country === "bangladesh") {
                    appState.cvData.objective = val;
                }
                if (!appState.cvData.aboutMe) appState.cvData.aboutMe = {};
                if (typeof appState.cvData.aboutMe === "object") {
                    appState.cvData.aboutMe.content = val;
                } else {
                    appState.cvData.aboutMe = val;
                }
            } else if (id === "exp-in-skills") {
                const skillList = val.split(",").map(s => s.trim()).filter(Boolean);
                if (!appState.cvData.skills) appState.cvData.skills = {};
                appState.cvData.skills.items = skillList;
                if (appState.customizerSettings.country === "bangladesh") {
                    appState.cvData.otherQualifications = skillList;
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

                if (appState.customizerSettings.country === "bangladesh") {
                    if (!appState.cvData.contact) appState.cvData.contact = {};
                    if (!appState.cvData.personalInfo) appState.cvData.personalInfo = {};
                    appState.cvData.contact.mobile = phone;
                    appState.cvData.contact.email = email;
                    appState.cvData.contact.address = address;
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
                if (!appState.cvData.skills) appState.cvData.skills = { title: "G�� SKILLS", items: [] };
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
                if (!appState.cvData.experience) appState.cvData.experience = { title: "G�� WORK EXPERIENCE", entries: [] };
                if (!Array.isArray(appState.cvData.experience.entries)) appState.cvData.experience.entries = [];
                appState.cvData.experience.entries.push({
                    company: "COMPANY / ORGANIZATION NAME",
                    duration: "1 JAN 2026 G�� PRESENT",
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
                if (!appState.cvData.education) appState.cvData.education = { title: "G�� EDUCATION AND TRAINING", entries: [] };
                if (!Array.isArray(appState.cvData.education.entries)) appState.cvData.education.entries = [];
                appState.cvData.education.entries.push({
                    college: "UNIVERSITY / COLLEGE NAME",
                    duration: "2024 G�� 2025",
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

            // Add educational row for Bangladesh CV
            const addBdEduBtn = target.id === "btn-bd-add-edu" ? target : target.closest("#btn-bd-add-edu");
            if (addBdEduBtn) {
                e.preventDefault();
                if (!appState.cvData.education || !Array.isArray(appState.cvData.education)) {
                    appState.cvData.education = [];
                }
                const nextIndex = appState.cvData.education.length + 1;
                appState.cvData.education.push({
                    sno: nextIndex.toString(),
                    qualification: "Degree Name",
                    board: "Board / University",
                    year: "Year",
                    result: "Result"
                });
                updateLivePreview();
                return;
            }

            // Delete educational row for Bangladesh CV
            const delBdEduBtn = target.closest(".btn-delete-bd-edu");
            if (delBdEduBtn) {
                e.preventDefault();
                const idx = parseInt(delBdEduBtn.dataset.index);
                if (appState.cvData.education && Array.isArray(appState.cvData.education)) {
                    appState.cvData.education.splice(idx, 1);
                    updateLivePreview();
                }
                return;
            }

            // Add bullet for other qualifications in Bangladesh CV
            const addBdOtherBtn = target.id === "btn-bd-add-other" ? target : target.closest("#btn-bd-add-other");
            if (addBdOtherBtn) {
                e.preventDefault();
                if (!appState.cvData.otherQualifications || !Array.isArray(appState.cvData.otherQualifications)) {
                    appState.cvData.otherQualifications = [];
                }
                appState.cvData.otherQualifications.push("New Qualification");
                updateLivePreview();
                return;
            }

            // Delete bullet for other qualifications in Bangladesh CV
            const delBdOtherBtn = target.closest(".btn-delete-bd-other");
            if (delBdOtherBtn) {
                e.preventDefault();
                const idx = parseInt(delBdOtherBtn.dataset.index);
                if (appState.cvData.otherQualifications && Array.isArray(appState.cvData.otherQualifications)) {
                    appState.cvData.otherQualifications.splice(idx, 1);
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

// Sync Form controls visually when loading template state
function syncCustomizerControlsToState() {
    const settings = appState.customizerSettings;

    // Language Dropdown inside settings
    const customizerLangSelect = document.getElementById("customizer-lang-select");
    if (customizerLangSelect) {
        customizerLangSelect.value = appState.previewLanguage || "en";
    }

    // Dropdown
    document.getElementById("font-select").value = settings.font;

    // Accents
    const badges = document.querySelectorAll(".color-badge:not(.custom-color-btn)");
    let matchFound = false;
    badges.forEach(b => {
        b.classList.remove("active");
        if (b.dataset.color.toLowerCase() === settings.accentColor.toLowerCase()) {
            b.classList.add("active");
            matchFound = true;
        }
    });

    const customColorBtn = document.getElementById("btn-custom-color");
    if (!matchFound && customColorBtn) {
        customColorBtn.classList.add("active");
        customColorBtn.style.backgroundColor = settings.accentColor;
        document.getElementById("custom-color-picker").value = settings.accentColor;
    } else {
        customColorBtn.classList.remove("active");
        customColorBtn.style.backgroundColor = "";
    }

    // Range Slider
    document.getElementById("grid-density").value = settings.density;

    // Toggle
    document.getElementById("profile-photo-toggle").checked = settings.showPhoto;

    // Photo
    if (settings.photoUrl) {
        document.getElementById("upload-avatar-preview").src = settings.photoUrl;
        document.getElementById("cv-avatar-img").src = settings.photoUrl;
    }

    // Photo Shape sync
    const photoShape = settings.photoShape || "circle";
    document.querySelectorAll(".btn-shape-badge").forEach(b => {
        b.classList.toggle("active", b.dataset.shape === photoShape);
    });

    // Photo Size sync
    const photoSize = settings.photoSize || 115;
    const photoSizeSlider = document.getElementById("profile-photo-size");
    const photoSizeDisplay = document.getElementById("photo-size-value-display");
    if (photoSizeSlider) photoSizeSlider.value = photoSize;
    if (photoSizeDisplay) photoSizeDisplay.textContent = `${photoSize}px`;

    // Front Size sync
    const fontSize = settings.fontSize || 13;
    const fontSizeSlider = document.getElementById("font-size-slider");
    const fontSizeDisplay = document.getElementById("font-size-value-display");
    if (fontSizeSlider) fontSizeSlider.value = fontSize;
    if (fontSizeDisplay) fontSizeDisplay.textContent = `${fontSize}px`;

    renderSidebarModulesList();
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
        bn: { resume: "a��a��a��a��a��a��a��a��a��a�+a��a��a��", careerObjective: "a��a��a��a�+a��a�+a��a�+a�+a�� a��a��a��a��a��a��a��a��", academicQualification: "a��a�+a��a��a�+a�+a��a�� a��a��a��a��a��a��a�+", otherQualification: "a��a��a��a��a�+a��a��a�� a��a��a��a��a��a��a�+", personalInformation: "a��a��a��a��a��a��a�+a��a�� a��a��a��a��", declaration: "a��a��a�+a��a�+", sno: "a��a��a��a��a�+a��", qualification: "a��a��a��a��a��a��a�+", board: "a��a�+a��a��a��a��a�+a��a��a��a�+a��a��a�+ / a��a��a��a��a��", year: "a��a��a��", result: "a��a��a�+a��a��", fathersName: "a��a�+a��a�+a�� a��a�+a��", mothersName: "a��a�+a��a�+a�� a��a�+a��", dob: "a��a��a��a�� a��a�+a��a�+a��", languages: "a��a��a�+a��a�+a�� a��a�+a�+a�+", gender: "a��a�+a��a��a��", nationality: "a��a�+a��a��a��a�+a��a�+", maritalStatus: "a��a��a��a�+a��a�+a�� a��a��a�+a��a��a�+", religion: "a��a��a��a��", bloodGroup: "a��a��a��a��a��a�� a��a��a��a��a��", height: "a��a��a��a��a��a�+", weight: "a��a��a��", signature: "a�+a��a��a�+a��a��a�+a��", dateLabel: "a��a�+a��a�+a��", placeLabel: "a�+a��a��a�+a��" },
        de: { resume: "LEBENSLAUF", careerObjective: "BERUFLICHES ZIEL", academicQualification: "AKADEMISCHE QUALIFIKATION", otherQualification: "WEITERE QUALIFIKATIONEN", personalInformation: "PERS+�NLICHE ANGABEN", declaration: "ERKL+�RUNG", sno: "Nr.", qualification: "Qualifikation", board: "Universit+�t / Beh+�rde", year: "Jahr", result: "Ergebnis", fathersName: "Name des Vaters", mothersName: "Name der Mutter", dob: "Geburtsdatum", languages: "Sprachen", gender: "Geschlecht", nationality: "Staatsangeh+�rigkeit", maritalStatus: "Familienstand", religion: "Religion", bloodGroup: "Blutgruppe", height: "Gr+�+�e", weight: "Gewicht", signature: "UNTERSCHRIFT", dateLabel: "Datum", placeLabel: "Ort" },
        fr: { resume: "R+�SUM+�", careerObjective: "OBJECTIF PROFESSIONNEL", academicQualification: "QUALIFICATIONS ACAD+�MIQUES", otherQualification: "AUTRES QUALIFICATIONS", personalInformation: "INFORMATIONS PERSONNELLES", declaration: "D+�CLARATION", sno: "N-�", qualification: "Qualification", board: "Universit+� / Conseil", year: "Ann+�e", result: "R+�sultat", fathersName: "Nom du p+�re", mothersName: "Nom de la m+�re", dob: "Date de naissance", languages: "Langues", gender: "Genre", nationality: "Nationalit+�", maritalStatus: "+�tat civil", religion: "Religion", bloodGroup: "Groupe sanguin", height: "Taille", weight: "Poids", signature: "SIGNATURE", dateLabel: "Date", placeLabel: "Lieu" },
        it: { resume: "CURRICULUM VITAE", careerObjective: "OBIETTIVO PROFESSIONALE", academicQualification: "QUALIFICA ACCADEMICA", otherQualification: "ALTRE QUALIFICHE", personalInformation: "INFORMAZIONI PERSONALI", declaration: "DICHIARAZIONE", sno: "N.", qualification: "Qualifica", board: "Universit+� / Istituto", year: "Anno", result: "Risultato", fathersName: "Nome del padre", mothersName: "Nome della madre", dob: "Data di nascita", languages: "Lingue", gender: "Genere", nationality: "Nazionalit+�", maritalStatus: "Stato civile", religion: "Religione", bloodGroup: "Gruppo sanguigno", height: "Altezza", weight: "Peso", signature: "FIRMA", dateLabel: "Data", placeLabel: "Luogo" },
        pt: { resume: "CURR+�CULO", careerObjective: "OBJETIVO PROFISSIONAL", academicQualification: "QUALIFICA+�+�O ACAD+�MICA", otherQualification: "OUTRAS QUALIFICA+�+�ES", personalInformation: "INFORMA+�+�ES PESSOAIS", declaration: "DECLARA+�+�O", sno: "N-�", qualification: "Qualifica+�+�o", board: "Universidade / Conselho", year: "Ano", result: "Resultado", fathersName: "Nome do pai", mothersName: "Nome da m+�e", dob: "Data de nascimento", languages: "Idiomas", gender: "G+�nero", nationality: "Nacionalidade", maritalStatus: "Estado civil", religion: "Religi+�o", bloodGroup: "Grupo sangu+�neo", height: "Altura", weight: "Peso", signature: "ASSINATURA", dateLabel: "Data", placeLabel: "Local" },
        da: { resume: "CURRICULUM VITAE", careerObjective: "KARRIEREM+�L", academicQualification: "UDDANNELSESKVALIFIKATIONER", otherQualification: "ANDRE KVALIFIKATIONER", personalInformation: "PERSONLIGE OPLYSNINGER", declaration: "ERKL+�RING", sno: "Nr.", qualification: "Kvalifikation", board: "Universitet / Bestyrelse", year: "+�r", result: "Resultat", fathersName: "Fars navn", mothersName: "Mors navn", dob: "F++dselsdato", languages: "Sprog", gender: "K++n", nationality: "Nationalitet", maritalStatus: "Civilstand", religion: "Religion", bloodGroup: "Blodtype", height: "H++jde", weight: "V+�gt", signature: "UNDERSKRIFT", dateLabel: "Dato", placeLabel: "Sted" },
        no: { resume: "CV", careerObjective: "KARRIEREM+�L", academicQualification: "UTDANNINGSKVALIFIKASJONER", otherQualification: "ANDRE KVALIFIKASJONER", personalInformation: "PERSONLIGE OPPLYSNINGER", declaration: "ERKL+�RING", sno: "Nr.", qualification: "Kvalifikasjon", board: "Universitet / Styret", year: "+�r", result: "Resultat", fathersName: "Fars navn", mothersName: "Mors navn", dob: "F++dselsdato", languages: "Spr+�k", gender: "Kj++nn", nationality: "Nasjonalitet", maritalStatus: "Sivilstand", religion: "Religion", bloodGroup: "Blodtype", height: "H++yde", weight: "Vekt", signature: "SIGNATUR", dateLabel: "Dato", placeLabel: "Sted" },
        ru: { resume: "-�-�-�-�-�-�", careerObjective: "-�-�-�-� -�-�-�-�-�-�-�", academicQualification: "-�-�-�-�-�-�-�-�-�-�-�-�-� -�-�-�-�-�-�-�-�-�-�-�-�", otherQualification: "-�-�-�-�-�-� -�-�-�-�-�-�-�-�-�-�-�-�", personalInformation: "-�-�-�-�-�-� -�-�-�-P-�-�-�-�-�-�", declaration: "-�-�-�-�-�-�-�-�-�-�", sno: "G��", qualification: "-�-�-�-+-+-�-+-�-�-�-+-�", board: "-�-+-+-�-�-�-�-+-�-�-� / -�-+-�-�-�", year: "-�-+-�", result: "-�-�-+-�-+-�-�-�-�", fathersName: "-�-+-� -+-�-�-�", mothersName: "-�-+-� -+-�-�-�-�-+", dob: "-�-�-�-� -�-+-�-�-�-+-+-�", languages: "-�-+-�-�-+", gender: "-�-+-+", nationality: "-�-�-�-�-�-�-+-�-�-�-+", maritalStatus: "-�-�-+-�-�-+-+-� -+-+-+-+-�-�-+-+-�", religion: "-�-�-+-+-�-+-�", bloodGroup: "-�-�-�-+-+-� -�-�-+-�-+", height: "-�-+-�-�", weight: "-�-�-�", signature: "-�-P-�-�-�-�-�", dateLabel: "-�-�-�-�", placeLabel: "-�-�-�-�-+" },
        ja: { resume: "s�ѵ����+", careerObjective: "p�p��p�p��t�����", academicQualification: "s�����p�+F���+", otherQualification: "p��p��S+�p��F���+", personalInformation: "s��S�����s�", declaration: "���S��t+�s��", sno: "t�s�+", qualification: "F���+p�+s��S+�", board: "s�����s��p�+���T��", year: "s��", result: "t�ɵP�p�+���t++", fathersName: "t�p��s��s��", mothersName: "���p��s��s��", dob: "t��s�������", languages: "F�Ps��s�", gender: "�Ǻs��", nationality: "s�+t��", maritalStatus: "T��s��F��", religion: "s�����", bloodGroup: "F�ǵ��sP�", height: "F��T�+", weight: "S+�T��", signature: "t+�s��", dateLabel: "���S+�", placeLabel: "sᦵ��" },
        ko: { resume: "8��d��8�", careerObjective: "f��d�� 8��d�� d�� d��f�", academicQualification: "f��d�� 8�f�", otherQualification: "O+�f�� 8P�O��", personalInformation: "O��8�+ 8��d��", declaration: "8�8�+ d�� 8��8�+", sno: "d��f�+", qualification: "8P�O�� d�� f��8��", board: "f��O�� / O+�O��", year: "d��d��", result: "O��O�+", fathersName: "d��8�� 8�d��", mothersName: "d��8�� 8�d��", dob: "8�d��8��8�+", languages: "O��d�� 8�+8��", gender: "8�d��", nationality: "O��8��", maritalStatus: "O��f�+ 8��d��", religion: "8��O��", bloodGroup: "f��8��f��", height: "8��8P�", weight: "8��8��", signature: "8�d��", dateLabel: "d��8��", placeLabel: "8P�8��" },
        ms: { resume: "RESUME", careerObjective: "OBJEKTIF KERJAYA", academicQualification: "KELAYAKAN AKADEMIK", otherQualification: "KELAYAKAN LAIN", personalInformation: "MAKLUMAT PERIBADI", declaration: "PENGESAHAN", sno: "Bil.", qualification: "Kelayakan", board: "Universiti / Lembaga", year: "Tahun", result: "Keputusan", fathersName: "Nama Bapa", mothersName: "Nama Ibu", dob: "Tarikh Lahir", languages: "Bahasa", gender: "Jantina", nationality: "Kewarganegaraan", maritalStatus: "Status Perkahwinan", religion: "Agama", bloodGroup: "Kumpulan Darah", height: "Tinggi", weight: "Berat", signature: "TANDATANGAN", dateLabel: "Tarikh", placeLabel: "Tempat" }
    };
    const labels = BD_LABELS[lang] || BD_LABELS["en"];

    // Translated default BD CV content values per language
    const BD_DEFAULTS = {
        en: { jobTitle: "Student", objective: "To work in a responsible position where I could use my interpersonal skills, creativity, and above all, my learning experiences in order to develop my career as well as to contribute to the growth of the organization.", otherQ: ["Basic Knowledge of Computer", "Advanced Microsoft Excel Certification"], languages: "Bangla And English", gender: "Male", nationality: "Bangladeshi", maritalStatus: "Unmarried", religion: "Islam", declaration: "I hereby declare that the above information given by me is true to the best of my knowledge and belief.", place: "Dhaka" },
        bn: { jobTitle: "a��a�+a��a��a�+a�+a��a��a��a��", objective: "a��a��a��a�+ a��a�+a��a�+a�+a��a��a��a��a��a�� a��a��a�� a��a�+a�� a��a��a�+ a��a��a��a�+a��a�� a��a��a�+ a��a��a�+a�� a��a��a��a��a��a��a��a��a��a��a��a�+a�� a��a��a��a�+a��a�+, a�+a��a��a��a��a��a��a��a�+ a��a��a�� a�+a��a��a��a��a��a��a�+ a��a��a�+a�� a��a��a��a�+a�� a��a��a�+a��a��a�Pa��a�+a��a��a��a�+a��a�� a��a��a�+a�� a��a��a��a��a��a��a��a��a��a�� a��a�+a��a�+a��a��a�� a��a�+a��a�+a��a�+a��a�+ a�+a��a�+a��a��a�+a�� a��a��a��a��a��a�+a��a�� a��a��a��a�+a�� a��a�+a��a��a�� a��a��a��a��a��a�+a�� a��a��a��a�� a��a�+a��a�+a��", otherQ: ["a��a��a��a��a�+a��a��a�+a��a��a�� a��a��a��a�+a�� a��a��a�Pa�+a��", "a��a��a��a��a�� a��a�+a��a��a��a��a��a�+a��a��a�� a��a��a��a�+a��a�� a�+a�+a��a��a��a�+a��a�+a��a��a��"], languages: "a��a�+a��a��a�+ a��a��a�� a��a��a��a��a��a�+", gender: "a��a��a��a��a�+", nationality: "a��a�+a��a��a�+a��a��a��a��", maritalStatus: "a��a��a�+a��a�+a��a�+a��", religion: "a��a�+a��a�+a��", declaration: "a��a��a�+ a��a��a��a��a��a�+a��a�+ a��a��a�+a��a�+ a��a��a��a�+ a��a�� a��a��a�+a�� a��a��a��a��a�+a�+ a��a��a��a�+a��a��a��a�� a��a��a��a�� a��a��a�+a�� a��a��a�Pa�+a�� a�� a��a�+a��a��a��a�+a�+ a��a��a�� a�+a��a��a��a��", place: "a��a�+a��a�+" },
        de: { jobTitle: "Student", objective: "In einer verantwortungsvollen Position zu arbeiten, in der ich meine zwischenmenschlichen F+�higkeiten, meine Kreativit+�t und vor allem meine Lernerfahrungen nutzen kann.", otherQ: ["Grundkenntnisse am Computer", "Zertifikat f++r fortgeschrittene Microsoft Excel-Kenntnisse"], languages: "Bengali und Englisch", gender: "M+�nnlich", nationality: "Bangladeschisch", maritalStatus: "Ledig", religion: "Islam", declaration: "Ich erkl+�re hiermit, dass die obigen Angaben nach bestem Wissen und Gewissen wahr sind.", place: "Dhaka" },
        fr: { jobTitle: "+�tudiant", objective: "Travailler dans un poste +� responsabilit+� o+� je pourrais utiliser mes comp+�tences interpersonnelles, ma cr+�ativit+� et surtout mes exp+�riences d'apprentissage.", otherQ: ["Connaissances de base en informatique", "Certification Microsoft Excel avanc+�e"], languages: "Bengali et anglais", gender: "Homme", nationality: "Bangladais", maritalStatus: "C+�libataire", religion: "Islam", declaration: "Je d+�clare par la pr+�sente que les informations ci-dessus sont exactes au meilleur de mes connaissances.", place: "Dacca" },
        it: { jobTitle: "Studente", objective: "Lavorare in una posizione di responsabilit+� dove poter utilizzare le mie capacit+� interpersonali, creativit+� e soprattutto le esperienze di apprendimento.", otherQ: ["Conoscenze di base del computer", "Certificazione avanzata di Microsoft Excel"], languages: "Bengalese e inglese", gender: "Maschio", nationality: "Bangladese", maritalStatus: "Celibe", religion: "Islam", declaration: "Con la presente dichiaro che le informazioni sopra riportate sono veritiere al meglio delle mie conoscenze.", place: "Dacca" },
        pt: { jobTitle: "Estudante", objective: "Trabalhar em um cargo de responsabilidade onde eu possa usar minhas habilidades interpessoais, criatividade e experi+�ncias de aprendizado.", otherQ: ["Conhecimento b+�sico de inform+�tica", "Certifica+�+�o Avan+�ada em Microsoft Excel"], languages: "Bengali e ingl+�s", gender: "Masculino", nationality: "Bangladense", maritalStatus: "Solteiro", religion: "Islam", declaration: "Declaro que as informa+�+�es acima s+�o verdadeiras de acordo com o meu conhecimento.", place: "Daca" },
        da: { jobTitle: "Studerende", objective: "At arbejde i en ansvarsfuld stilling, hvor jeg kan bruge mine interpersonelle f+�rdigheder og l+�ringserfaringer til at udvikle min karriere.", otherQ: ["Grundl+�ggende computerkendskab", "Avanceret Microsoft Excel-certificering"], languages: "Bengalsk og engelsk", gender: "Mand", nationality: "Bangladesher", maritalStatus: "Ugift", religion: "Islam", declaration: "Jeg erkl+�rer hermed, at ovenst+�ende oplysninger er sande efter min bedste overbevisning.", place: "Dhaka" },
        no: { jobTitle: "Student", objective: "+� jobbe i en ansvarsfull stilling der jeg kan bruke mine mellommenneskelige ferdigheter og l+�ringserfaringer.", otherQ: ["Grunnleggende datakunnskaper", "Sertifisering i avansert Microsoft Excel"], languages: "Bengalsk og engelsk", gender: "Mann", nationality: "Bangladesher", maritalStatus: "Ugift", religion: "Islam", declaration: "Jeg erkl+�rer herved at ovenst+�ende opplysninger er sanne etter min beste overbevisning.", place: "Dhaka" },
        ru: { jobTitle: "-�-�-�-�-�-+-�", objective: "-�-�-�-+-�-�-�-� -+-� -+-�-�-�-�-�-�-�-�-+-+-+-� -�-+-+-�-+-+-�-�-+, -+-�-+-+-+-�-+-�-� -+-�-�-�-�-+ -+-�-�-+-+-�-+-+-�-�-+-+-�-+ -+-�-�-�-+-+-�, -�-�-+-�-�-�-�-�-+-� -+-+-�-�-+-�-+-�-+ -+ -+-�-�-+-+-+-�-+-+-�-� -+-+-�-�.", otherQ: ["-�-�-+-+-�-�-� -+-+-�-+-+-� -�-+-+-+-�-�-�-�-�-�", "-�-�-�-�-+-�-+-�-�-� -+ -+-�-+-�-�-+-+-�-�-+-+ -+-+-�-+-+-+ Microsoft Excel"], languages: "-�-�-+-�-�-+-�-�-�-+-� -+ -�-+-�-+-+-�-�-�-+-�", gender: "-�-�-�-�-�-+-�", nationality: "-�-�-+-�-+-�-�-�-�-�-�", maritalStatus: "-�-� -�-�-+-�-�", religion: "-�-�-+-�-+", declaration: "-�-�-�-�-+-�-�-+-+ -+-�-�-�-+-�-�, -�-�-+ -�-�-�-�-�-�-�-+-�-+-+-�-� -+-+-�-+-�-+-�-�-+-� -�-�-�-+-� -� -+-�-�-� -+-+-+-� -+-+-�-+-+-�.", place: "-�-�-�-�-�" },
        ja: { jobTitle: "s��t��", objective: "s�+S��p�p�p�p��s�T��Ǻp��s��t+�t��T��p�Ƶ�+p��p��p��F��S++p��p��p�p�+p�+p�p�p��s��p��p��t��t��p�����T�+p��F��t�p��p��p��p��p��", otherQ: ["p�p�p��p��p�+p�+p�+p��s��t��t��F��", "p�Pp��p�p�p�+p��p��p�p�p�+p�S+�t��F��s��"], languages: "p��p�p�p�F�Pp��F�F�P", gender: "t�+�Ǻ", nationality: "p��p�p�p�p��p�+p��S��", maritalStatus: "���s��", religion: "p��p�p�p����", declaration: "t��p��p��p��p��p�����S+�p��p�����s�p��t��s��p��p��p��p��p��p��s��F��p��p�+p��p��", place: "p��p��p�" },
        ko: { jobTitle: "f��8�", objective: "d��8�+ O��O�� d��d��, 8�+8��8�, f��8� O�+f��8�� f֣8ܬf��8�� O�+d��8�� O��d��f��O�� 8�8�� 8�8P�8�� O+�8��f�� 8�� 8P�d�� 8��8��8��8� 8�+f��d�� O��8P�d��d��.", otherQ: ["8+�f�f� O+�8�� 8��8�", "O��O+� d��8��f��d�8��f��f�+ 8��8�� 8�+8��"], languages: "d��O��8�� d�� 8��8��", gender: "d�8�", nationality: "d��O+�d�+d�8�8�+", maritalStatus: "d�+f�+", religion: "8��8�dP�O��", declaration: "d�+8�+8�� O+�8P�f� 8��d��O�� 8�8��8P�8�� 8��8�+f�d��d��.", place: "d��8��" },
        ms: { jobTitle: "Pelajar", objective: "Bekerja dalam jawatan bertanggungjawab menggunakan kemahiran interpersonal, kreativiti, dan pengalaman pembelajaran.", otherQ: ["Pengetahuan Asas Komputer", "Sijil Microsoft Excel Lanjutan"], languages: "Bengali dan Inggeris", gender: "Lelaki", nationality: "Bangladesh", maritalStatus: "Belum berkahwin", religion: "Islam", declaration: "Saya mengesahkan bahawa maklumat di atas adalah benar.", place: "Dhaka" }
    };
    const bd = BD_DEFAULTS[lang] || BD_DEFAULTS["en"];

    const eduRows = data.education.map((edu, idx) => `
    <tr>
      <td contenteditable="true" data-type="bd-edu" data-index="${idx}" data-field="sno">${edu.sno}</td>
      <td contenteditable="true" data-type="bd-edu" data-index="${idx}" data-field="qualification">${edu.qualification}</td>
      <td contenteditable="true" data-type="bd-edu" data-index="${idx}" data-field="board">${edu.board}</td>
      <td contenteditable="true" data-type="bd-edu" data-index="${idx}" data-field="year">${edu.year}</td>
      <td style="position:relative;">
        <span contenteditable="true" data-type="bd-edu" data-index="${idx}" data-field="result">${edu.result}</span>
        ${data.education.length > 1 ? `<button class="btn-delete-bd-edu" data-index="${idx}" title="Delete Row" style="background:#ef4444;color:#fff;border:none;border-radius:50%;width:14px;height:14px;font-size:10px;line-height:1;margin-left:6px;cursor:pointer;display:inline-flex;align-items:center;justify-content:center;">+�</button>` : ''}
      </td>
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

    const otherItems = data.otherQualifications.map((item, idx) => {
        const translated = bd.otherQ[idx] || item;
        const display = (item === "Basic Knowledge of Computer" || item === "Advanced Microsoft Excel Certification") ? translated : item;
        return `<li style="position:relative;margin-bottom:3px;">
          <span contenteditable="true" data-type="bd-other" data-index="${idx}">${display}</span>
          ${data.otherQualifications.length > 1 ? `<button class="btn-delete-bd-other" data-index="${idx}" title="Delete Bullet" style="background:#ef4444;color:#fff;border:none;border-radius:50%;width:14px;height:14px;font-size:10px;line-height:1;margin-left:6px;cursor:pointer;display:inline-flex;align-items:center;justify-content:center;">+�</button>` : ''}
        </li>`;
    }).join('');

    // Dynamic section blocks dictionary for Bangladesh CV
    const sectionBlocks = {
        objective: `
      <!-- CAREER OBJECTIVE Section -->
      <div class="cv-bd-section" id="cv-bd-sec-objective">
        <div class="cv-bd-section-title">${labels.careerObjective}</div>
        <div class="cv-bd-section-content" contenteditable="true" data-type="bd-objective">${displayObjective}</div>
      </div>`,
        education: `
      <!-- ACADEMIC QUALIFICATION Section -->
      <div class="cv-bd-section" id="cv-bd-sec-education">
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
      </div>`,
        otherQualifications: `
      <!-- OTHER QUALIFICATION Section -->
      <div class="cv-bd-section" id="cv-bd-sec-other">
        <div class="cv-bd-section-title">
          <span>${labels.otherQualification}</span>
          <button class="add-bullet-btn" id="btn-bd-add-other" style="background:var(--accent-color);color:#fff;border:none;border-radius:3px;padding:2px 6px;font-size:10px;cursor:pointer;">+ Bullet</button>
        </div>
        <div class="cv-bd-section-content">
          <ul class="cv-entry-bullets" style="padding-left:18px;">
            ${otherItems}
          </ul>
        </div>
      </div>`,
        personal: `
      <!-- PERSONAL INFORMATION Section -->
      <div class="cv-bd-section" id="cv-bd-sec-personal">
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
      </div>`,
        declaration: `
      <!-- DECLARATION Section -->
      <div class="cv-bd-section" id="cv-bd-sec-declaration">
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
      </div>`
    };

    const modulesOrder = (settings.modulesOrder && settings.modulesOrder.some(m => sectionBlocks[m]))
        ? settings.modulesOrder
        : ["objective", "education", "otherQualifications", "personal", "declaration"];

    const hiddenModules = settings.hiddenModules || [];

    let dynamicContentHtml = "";
    modulesOrder.forEach(modId => {
        if (!hiddenModules.includes(modId) && sectionBlocks[modId]) {
            dynamicContentHtml += sectionBlocks[modId];
        }
    });

    return `
    <div class="cv-bd-container">
      <!-- Header Section -->
      <div class="cv-bd-header">
        <div class="cv-bd-header-left">
          <h1 class="cv-bd-name" contenteditable="true" id="cv-name" data-type="bd-name">${data.name}</h1>
          <p class="cv-bd-subtitle" contenteditable="true" id="cv-job-title" data-type="bd-jobTitle">${displayJobTitle}</p>
          <div class="cv-bd-contact-list">
            <div class="cv-bd-contact-item">
              <span class="cv-bd-contact-icon">=���</span>
              <span contenteditable="true" data-type="bd-address">${data.contact.address}</span>
            </div>
            <div class="cv-bd-contact-item">
              <span class="cv-bd-contact-icon">=��P</span>
              <span>Mob No.: <span contenteditable="true" data-type="bd-mobile">${data.contact.mobile}</span></span>
            </div>
            <div class="cv-bd-contact-item">
              <span class="cv-bd-contact-icon">G��n+�</span>
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

      ${dynamicContentHtml}
    </div>
  `;
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

    if (settings.country === "bangladesh") {
        // Render custom Bangladesh layout
        paper.innerHTML = getBangladeshCVHtml(cv, settings);
    } else {
        const lang = appState.previewLanguage || appState.language || "en";

        const GENERIC_LABELS = {
            en: { experience: "Experience", education: "Education", skills: "Skills" },
            bn: { experience: "a��a��a�+a��a��a�Pa��a�+", education: "a��a�+a��a��a�+a�+", skills: "a��a��a��a�+a��a�+" },
            de: { experience: "Berufserfahrung", education: "Ausbildung", skills: "F+�higkeiten" },
            fr: { experience: "Exp+�rience", education: "+�ducation", skills: "Comp+�tences" },
            it: { experience: "Esperienza", education: "Istruzione", skills: "Competenze" },
            pt: { experience: "Experi+�ncia", education: "Educa+�+�o", skills: "Habilidades" },
            da: { experience: "Erfaring", education: "Uddannelse", skills: "Kompetencer" },
            no: { experience: "Erfaring", education: "Utdanning", skills: "Ferdigheter" },
            ru: { experience: "-P-+-�-� -�-�-�-+-�-�", education: "-P-�-�-�-+-+-�-�-+-+-�", skills: "-�-�-�-�-�-+" },
            ja: { experience: "F�+���", education: "s�����", skills: "p�p�p�" },
            ko: { experience: "O�+d�� 8�f�", education: "f��d�� 8�f�", skills: "d��8�� O+�8��" },
            ms: { experience: "Pengalaman", education: "Pendidikan", skills: "Kemahiran" }
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
                jobTitle: "a�+a�+a��a�+a��a�+a�� a��a��a��a��a��a�+a��a��a�� a��a��a��a�+a�+a��a�+a��a��a�+a�� | a��a�+a�� a��a��a�+a��a��a��, a��a��a��a��a�+a�+a�� | jane.doe@example.com",
                role: "a��a�+a��a�+ a��a�� a��a��a��a��a��a�+a��a��a�� a��a��a��a�+a��a��a��a��a��a��a��a��",
                duration: "a��a��a��a�� - a��a��a��a��a��a�+a��",
                company: "a��a��a��a��a��a�+a�� a��a��a�� a��a��a��a��a�+a�+a��a��a��a��a�+a��",
                bullets: [
                    "a��a�� a��a��a��a��a�� a��a��a��a�+ a��a��a��a��a��a��a��a�� a��a��a�� a��a�+a��a�+a��a��a�+a��a��a��a�� a��a��a��a�+ a��a��a��a�+-a��a�+a��a��a��a�+a�� a��a�+a�� a��a��a�+a��a�+a��a��a�+ a��a��a��a��a�+a��",
                    "a��a��a��a��a��a�� a��a��a��a�+a�+a��a��a��a�� a��a�+a��a��a�� a��a�+a��a��a��a��a�� a��a��a�+ a��a��a��a�+a��a��a��a�+a��a��a�� a��a�+a��a�+a��a�� a��a��% a��a��a��a��a��a�+ a��a��a��a��a�+a��"
                ],
                college: "a��a��a��a��a��a�+a��a�+a�+ a��a�+a��a��a��a��a�+a��a��a��a�+a��a��a�+",
                eduRole: "a��a��a��a��a�+a��a��a�+a�� a�+a�+a��a��a��a��a�+a�� a��a��a��a�+a��a��a��a�� a��a�� a�+a�+a��a��a��a��a�+",
                eduDuration: "a��a��a��a�� - a��a��a��a��",
                skills: ["a��a��a��a�� a��a��a��a��", "a��a��a�+a�� a��a��a��a��a��a��a��", "a��a��a��a��a��a�+a��a��a�+a��a��a�� a��a��a�+a��a��a�Pa��a�+", "a��a��a�+a��a��a�� a��a�+a��a��a��a��a�+a��", "a�+a��a��a��a�� a��a��a�+a��a��a��a��a��a�+"]
            },
            de: {
                jobTitle: "Senior Product Executive | New York, NY | jane.doe@example.com",
                role: "VP f++r Produktmanagement",
                duration: "2019 - Heute",
                company: "Global Tech Industries",
                bullets: [
                    "Leitung eines funktions++bergreifenden Teams von mehr als 50 Ingenieuren und Designern.",
                    "Steigerung des Umsatzes im 3. Quartal um 24 % durch strategische Produkteinf++hrungen."
                ],
                college: "Columbia-Universit+�t",
                eduRole: "Bachelor of Science in Informatik",
                eduDuration: "2012 - 2016",
                skills: ["Produktstrategie", "Agile F++hrung", "Benutzererfahrung", "Datenanalyse", "Ressourcenplanung"]
            },
            fr: {
                jobTitle: "Directeur principal des produits | New York, NY | jane.doe@example.com",
                role: "Vice-pr+�sident de la gestion des produits",
                duration: "2019 - Pr+�sent",
                company: "Global Tech Industries",
                bullets: [
                    "Direction d'une +�quipe interfonctionnelle de plus de 50 ing+�nieurs et concepteurs.",
                    "Augmentation des revenus du troisi+�me trimestre de 24 % gr+�ce +� des lancements de fonctionnalit+�s strat+�giques."
                ],
                college: "Universit+� Columbia",
                eduRole: "Baccalaur+�at en sciences informatiques",
                eduDuration: "2012 - 2016",
                skills: ["Strat+�gie produit", "Leadership agile", "Exp+�rience utilisateur", "Analyse de donn+�es", "Planification des ressources"]
            },
            it: {
                jobTitle: "Dirigente senior di prodotto | New York, NY | jane.doe@example.com",
                role: "VP della gestione del prodotto",
                duration: "2019 - Presente",
                company: "Global Tech Industries",
                bullets: [
                    "Gestito un team interfunzionale di oltre 50 ingegneri e designer.",
                    "Aumentato le entrate del terzo trimestre del 24% attraverso lanci di funzionalit+� strategiche."
                ],
                college: "Columbia University",
                eduRole: "Laurea di primo livello in Informatica",
                eduDuration: "2012 - 2016",
                skills: ["Strategia di prodotto", "Leadership agile", "Esperienza utente", "Analisi dei dati", "Pianificazione delle risorse"]
            },
            pt: {
                jobTitle: "Executivo de Produto S+�nior | Nova York, NY | jane.doe@example.com",
                role: "Vice-Presidente de Gerenciamento de Produtos",
                duration: "2019 - Presente",
                company: "Global Tech Industries",
                bullets: [
                    "Liderou uma equipe multifuncional de mais de 50 engenheiros e designers.",
                    "Aumentou a receita do terceiro trimestre em 24% por meio de lan+�amentos estrat+�gicos de recursos."
                ],
                college: "Universidade de Columbia",
                eduRole: "Bacharel em Ci+�ncias da Computa+�+�o",
                eduDuration: "2012 - 2016",
                skills: ["Estrat+�gia de produto", "Lideran+�a +�gil", "Experi+�ncia do usu+�rio", "An+�lise de dados", "Planejamento de recursos"]
            },
            da: {
                jobTitle: "Senior produktchef | New York, NY | jane.doe@example.com",
                role: "VP for produktledelse",
                duration: "2019 - nu",
                company: "Global Tech Industries",
                bullets: [
                    "Ledede et tv+�rfagligt team af 50+ ingeni++rer og designere.",
                    "+�gede oms+�tningen i 3. kvartal med 24 % gennem strategiske produktlanceringer."
                ],
                college: "Columbia University",
                eduRole: "Bachelor of Science i datalogi",
                eduDuration: "2012 - 2016",
                skills: ["Produktstrategi", "Agil ledelse", "Brugeroplevelse", "Dataanalyse", "Ressourceplanl+�gning"]
            },
            no: {
                jobTitle: "Senior produktleder | New York, NY | jane.doe@example.com",
                role: "VP for produktledelse",
                duration: "2019 - n+�",
                company: "Global Tech Industries",
                bullets: [
                    "Ledet et tverrfaglig team av over 50 ingeni++rer og designere.",
                    "+�kte omsetningen i 3. kvartal med 24 % gjennom strategiske produktlanseringer."
                ],
                college: "Columbia University",
                eduRole: "Bachelor of Science i datavitenskap",
                eduDuration: "2012 - 2016",
                skills: ["Produktstrategi", "Agil ledelse", "Brukeropplevelse", "Dataanalyse", "Ressursplanlegging"]
            },
            ru: {
                jobTitle: "-�-�-�-�-�-+-� -+-�-+-�-�-�-�-� -+-+ -+-�-+-�-�-�-�-� | -�-�-�--�-+-�-�, -�-�-�--�-+-�-� | jane.doe@example.com",
                role: "-�-+-�-�--+-�-�-+-+-�-�-+-� -+-+ -�-+-�-�-�-+-�-+-+-� -+-�-+-�-�-�-�-�-+-+",
                duration: "2019 - -+-�-�-�. -�-�-�-+-�",
                company: "Global Tech Industries",
                bullets: [
                    "-�-�-�-+-�-+-�-+-+ -+-�-�-�-�-+-�-�-+-+-+-�-+-�-+-+-� -�-+-+-�-+-�-+-� -+-+ -�-+-+-�-� -�-�-+ 50 -+-+-�-�-+-�-�-+-� -+ -�-+-+-�-�-+-�-�-+-�.",
                    "-�-�-�-+-+-�-+-+ -�-�-�-�-�-�-� -� -�-�-�-�-�-�-+ -�-�-�-�-�-�-+-� -+-� 24% -+-� -�-�-�-� -�-�-�-�-�-�-�-+-�-�-�-�-+-�-+ -+-�-+-�-�-�-� -+-+-�-�-� -�-�-+-�-�-+-�."
                ],
                college: "-�-+-+-�-+-�-+-�-�-�-+-� -�-+-+-�-�-�-�-+-�-�-�",
                eduRole: "-�-�-�-�-+-�-�-� -+-�-�-� -� -+-�-+-�-�-�-+ -�-+-+-+-�-�-�-�-�-+-�-� -+-�-�-�",
                eduDuration: "2012 - 2016",
                skills: ["-�-�-�-�-�-�-�-+-� -+-�-+-�-�-�-�-�", "Agile--�-�-�-+-�-+-�-�-�-�-+", "-�-+-+-�-+-+-�-�-�-�-+-�-�-�-+-� -+-+-�-�", "-�-+-�-+-+-+ -�-�-+-+-�-�", "-�-+-�-+-+-�-+-�-�-+-+-� -�-�-�-�-�-�-+-�"]
            },
            ja: {
                jobTitle: "p�+p��p��p��p�p��p�p��p�p�p�+p�p��p��p�� | p��p��p�+p�p�+p�s+Pp��p��p�+p�p�+p� | jane.doe@example.com",
                role: "p��p�p��p�p��p�Pp��p�+p��p�p����s+�p��p��p�p��p�p�+p��p�p��",
                duration: "2019s�� - t�+s��",
                company: "Global Tech Industries",
                bullets: [
                    "50S��S+�S+�p��p�p�p�+p��p��p��p��p�p��p��p�+p��p��p��p��p�p�p�p��p��p�p�p�+p�p��p�p��p�+p��p��t��t��p��",
                    "��t��t��p�����F�+p�p�p�+p�p��p��p��p��t��3s��s�赣�p��s��S+�p��24%s��s��p��"
                ],
                college: "p�p�p�p��p��s�s��",
                eduRole: "p�p�p��p��p�+p�+p�p��p�p�p�s��T�s��s��",
                eduDuration: "2012s�� - 2016s��",
                skills: ["p��p�p��p�p���t��", "p��p�+p��p��p�p�p�+p��p�+p�+p��p��", "p�p�+p�p�+p�p�p�p��p�p�p�p�", "p��p�+p�+s��P�", "p�p�+p�+p�F��t�+"]
            },
            ko: {
                jobTitle: "8�d��8�� 8�f�� 8��8P�8P� | d�8��, d�8�� | jane.doe@example.com",
                role: "8�f�� O��d�� d��8�8P�",
                duration: "2019d�� - f��8P�",
                company: "Global Tech Industries",
                bullets: [
                    "50d�� 8��8��8�� 8��8��d��8�� d�� d��8P�8��d��d� O��8�dɣ d��O+�d�� f�� d��d�.",
                    "8��dP�8�� O+�d�� 8��8�d�+ f�f� 3d��O+� d��8�� 24% 8��O��."
                ],
                college: "8+�d�+d��8�� d��f��O��",
                eduRole: "8+�f�f� O��f�� f��8�",
                eduDuration: "2012 - 2016",
                skills: ["8�f�� 8��dP�", "8��8P�8�+ d��d��8�", "8�8ܬ8P� O�+f��", "d�8��f� d��8�", "d��8��8�� O��f��"]
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

        // Use translated default values where content hasn't been customised
        const displayJobTitle = cv.jobTitle === DEFAULT_CV_DATA.jobTitle ? genDefaults.jobTitle : cv.jobTitle;

        const expTitle = (cv.experience.title === DEFAULT_CV_DATA.experience.title ||
            Object.values(GENERIC_LABELS).some(l => l.experience === cv.experience.title))
            ? genLabels.experience : cv.experience.title;

        const eduTitle = (cv.education.title === DEFAULT_CV_DATA.education.title ||
            Object.values(GENERIC_LABELS).some(l => l.education === cv.education.title))
            ? genLabels.education : cv.education.title;

        const skillsTitle = (cv.skills.title === DEFAULT_CV_DATA.skills.title ||
            Object.values(GENERIC_LABELS).some(l => l.skills === cv.skills.title))
            ? genLabels.skills : cv.skills.title;

        const expEntries = cv.experience.entries.map((entry, idx) => {
            const defaultEntry = DEFAULT_CV_DATA.experience.entries[idx];
            const duration = entry.duration ? entry.duration : (defaultEntry ? genDefaults.duration : "1 JAN 2026 G�� PRESENT");
            if (defaultEntry) {
                const company = entry.company === defaultEntry.company ? genDefaults.company : entry.company;
                const role = entry.role === defaultEntry.role ? genDefaults.role : entry.role;
                const bullets = (entry.bullets || []).map((b, bIdx) => {
                    const defaultBullet = defaultEntry.bullets ? defaultEntry.bullets[bIdx] : undefined;
                    return b === defaultBullet ? (genDefaults.bullets[bIdx] || b) : b;
                });
                return { company, duration, role, bullets };
            }
            return { ...entry, duration, bullets: entry.bullets || [] };
        });

        const eduEntries = cv.education.entries.map((entry, idx) => {
            const defaultEntry = DEFAULT_CV_DATA.education.entries[idx];
            const duration = entry.duration ? entry.duration : (defaultEntry ? genDefaults.duration : "2024 G�� 2025");
            const bullets = Array.isArray(entry.bullets) ? entry.bullets : [];
            if (defaultEntry) {
                const college = entry.college === defaultEntry.college ? genDefaults.college : entry.college;
                const role = entry.role === defaultEntry.role ? genDefaults.eduRole : entry.role;
                return { college, duration, role, bullets };
            }
            return { ...entry, duration, bullets };
        });

        const skillItems = cv.skills.items.map((skill, idx) => {
            const defaultSkill = DEFAULT_CV_DATA.skills.items[idx];
            return skill === defaultSkill ? (genDefaults.skills[idx] || skill) : skill;
        });

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

        // Show Photo Toggle
        const avatar = document.getElementById("cv-avatar-container");
        if (avatar) {
            if (settings.showPhoto) {
                avatar.classList.remove("hidden");
            } else {
                avatar.classList.add("hidden");
            }
        }
        const avatarImg = document.getElementById("cv-avatar-img");
        if (avatarImg && settings.photoUrl) {
            avatarImg.src = settings.photoUrl;
        }

        // Load Content fields
        const nameEl = document.getElementById("cv-name");
        if (nameEl) nameEl.textContent = cv.name;
        const titleEl = document.getElementById("cv-job-title");
        if (titleEl) {
            if (displayJobTitle && (displayJobTitle.includes("Date of birth:") || document.getElementById("exp-in-dob"))) {
                const dob = document.getElementById("exp-in-dob")?.value || "21 Apr 2004";
                const nat = document.getElementById("exp-in-nat")?.value || "Bangladeshi";
                const gender = document.getElementById("exp-in-gender")?.value || "Male";
                const phone = document.getElementById("exp-in-phone")?.value || "(+880) 01839079238 (Mobile)";
                const email = document.getElementById("exp-in-email")?.value || "shahedtnvr769@gmail.com";
                const website = document.getElementById("exp-in-website")?.value || "https://shahed-tnvr769.vercel.app/";
                const linkedin = document.getElementById("exp-in-linkedin")?.value || "@shahedtnvr769";
                const address = document.getElementById("exp-in-address")?.value || "KHAGURIA, MATLAB UTTAR Sarkar Bari, 3516, Chottogram, Bangladesh (Home)";

                titleEl.innerHTML = `
                    <div style="font-size:12.5px;line-height:1.65;color:#2d3748;">
                        <strong>Date of birth:</strong> <span contenteditable="true" data-type="hdr-field" data-key="dob">${dob}</span> | 
                        <strong>Nationality:</strong> <span contenteditable="true" data-type="hdr-field" data-key="nat">${nat}</span> | 
                        <strong>Gender:</strong> <span contenteditable="true" data-type="hdr-field" data-key="gender">${gender}</span> | 
                        <strong>Phone number:</strong> <span contenteditable="true" data-type="hdr-field" data-key="phone">${phone}</span> | 
                        <strong>Email address:</strong> <span contenteditable="true" data-type="hdr-field" data-key="email" style="color:#1d4ed8;text-decoration:underline;">${email}</span> | 
                        <strong>Website:</strong> <span contenteditable="true" data-type="hdr-field" data-key="website" style="color:#1d4ed8;text-decoration:underline;">${website}</span> | 
                        <strong>LinkedIn:</strong> <span contenteditable="true" data-type="hdr-field" data-key="linkedin" style="color:#1d4ed8;">${linkedin}</span><br>
                        <strong>Address:</strong> <span contenteditable="true" data-type="hdr-field" data-key="address">${address}</span>
                    </div>
                `;
            } else {
                titleEl.textContent = displayJobTitle;
            }
        }

        // Re-order and render experience, education, skills
        const dynamicContainer = document.getElementById("cv-dynamic-sections");
        dynamicContainer.innerHTML = "";

        settings.modulesOrder.forEach(modId => {
            // If hidden, don't append to CV
            if (settings.hiddenModules.includes(modId)) return;

            if (modId === "aboutMe" || modId === "summary") {
                const sec = document.createElement("div");
                sec.className = "cv-render-section";
                sec.id = "cv-section-about";
                sec.innerHTML = `
          <h2 class="cv-sec-title">G�� ABOUT ME</h2>
          <p class="cv-about-text" contenteditable="true" data-type="about-content" style="font-size:13px;line-height:1.5;color:#334155;margin-bottom:12px;">${cv.aboutMe ? (cv.aboutMe.content || cv.aboutMe) : "A hardworking and reliable Warehouse Worker dedicated to ensuring smooth, safe, and efficient daily operations. Skilled in safely loading and unloading cargo, packaging goods securely, and conducting quality checks to ensure products meet high standards. Strong team player with a focus on inventory handling, fast-paced task management, and workplace safety."}</p>
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
                  ${expEntries.length > 1 ? `<button class="btn-delete-exp" data-index="${idx}" title="Delete Experience" style="background:#fee2e2;color:#dc2626;border:1px solid #fca5a5;border-radius:4px;padding:1px 6px;font-size:10px;font-weight:600;cursor:pointer;margin-left:4px;">Delete =���n+�</button>` : ''}
                </div>
              </div>
              <div class="cv-entry-role" contenteditable="true" data-type="exp-role" data-index="${idx}">${entry.role}</div>
              <ul class="cv-entry-bullets" style="margin-bottom:4px;">
                ${(entry.bullets || []).map((b, bIdx) => `
                  <li style="position:relative;margin-bottom:3px;padding-right:24px;">
                    <span contenteditable="true" data-type="exp-bullet" data-index="${idx}" data-bullet-index="${bIdx}">${b}</span>
                    <button class="btn-delete-exp-bullet" contenteditable="false" data-exp-index="${idx}" data-bullet-index="${bIdx}" title="Delete bullet point" style="position:absolute;right:0;top:50%;transform:translateY(-50%);background:#fee2e2;color:#dc2626;border:1px solid #fca5a5;border-radius:50%;width:16px;height:16px;font-size:11px;font-weight:bold;line-height:1;cursor:pointer;display:inline-flex;align-items:center;justify-content:center;">+�</button>
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
                  ${eduEntries.length > 1 ? `<button class="btn-delete-edu" data-index="${idx}" title="Delete Education" style="background:#fee2e2;color:#dc2626;border:1px solid #fca5a5;border-radius:4px;padding:1px 6px;font-size:10px;font-weight:600;cursor:pointer;margin-left:4px;">Delete =���n+�</button>` : ''}
                </div>
              </div>
              <div class="cv-entry-degree" contenteditable="true" data-type="edu-degree" data-index="${idx}">${entry.role}</div>
              <ul class="cv-entry-bullets" style="margin-bottom:4px;">
                ${(entry.bullets || []).map((b, bIdx) => `
                  <li style="position:relative;margin-bottom:3px;padding-right:24px;">
                    <span contenteditable="true" data-type="edu-bullet" data-index="${idx}" data-bullet-index="${bIdx}">${b}</span>
                    <button class="btn-delete-edu-bullet" contenteditable="false" data-edu-index="${idx}" data-bullet-index="${bIdx}" title="Delete bullet point" style="position:absolute;right:0;top:50%;transform:translateY(-50%);background:#fee2e2;color:#dc2626;border:1px solid #fca5a5;border-radius:50%;width:16px;height:16px;font-size:11px;font-weight:bold;line-height:1;cursor:pointer;display:inline-flex;align-items:center;justify-content:center;">+�</button>
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
                <button class="btn-delete-skill" data-index="${idx}" title="Delete Skill" style="background:#ef4444;color:#fff;border:none;border-radius:50%;width:16px;height:16px;font-size:10px;line-height:1;margin-left:4px;cursor:pointer;display:inline-flex;align-items:center;justify-content:center;">+�</button>
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

                const otherLangs = (cv.languages && Array.isArray(cv.languages.otherLanguages))
                    ? cv.languages.otherLanguages
                    : [
                        { name: "ENGLISH", listening: "A2", reading: "B1", spokenProduction: "A2", spokenInteraction: "A2", writing: "A2" }
                    ];

                const mother = cv.languages ? (cv.languages.motherTongue || "BENGALI").replace("Mother tongue(s): ", "") : "BENGALI";

                sec.innerHTML = `
          <h2 class="cv-sec-title">G�� LANGUAGE SKILLS</h2>
          <div class="cv-lang-block" style="font-size:13px;color:#334155;">
            <p style="margin-bottom:8px;"><strong>Mother tongue(s):</strong> <span contenteditable="true" data-type="lang-mother" style="font-weight:700;">${mother}</span></p>
            <p style="margin-top:8px;margin-bottom:8px;"><strong>Other language(s):</strong></p>
            <table class="cv-lang-table" style="width:100%;border-collapse:collapse;margin-top:8px;text-align:center;font-size:12px;border:1px solid #e2e8f0;">
              <thead>
                <tr style="background:#f8fafc;border-bottom:1px solid #cbd5e1;font-weight:700;">
                  <th style="padding:6px;text-align:left;"></th>
                  <th colspan="2" style="border-left:1px solid #cbd5e1;padding:6px;">UNDERSTANDING</th>
                  <th colspan="2" style="border-left:1px solid #cbd5e1;padding:6px;">SPEAKING</th>
                  <th style="border-left:1px solid #cbd5e1;padding:6px;">WRITING</th>
                  <th style="padding:4px;"></th>
                </tr>
                <tr style="font-size:11px;color:#64748b;border-bottom:1px solid #cbd5e1;background:#f8fafc;">
                  <th style="padding:4px;"></th>
                  <th style="border-left:1px solid #cbd5e1;padding:4px;">Listening</th>
                  <th style="padding:4px;">Reading</th>
                  <th style="border-left:1px solid #cbd5e1;padding:4px;">Spoken production</th>
                  <th style="padding:4px;">Spoken interaction</th>
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
                    <td style="padding:4px;"><button class="btn-delete-lang" data-index="${lIdx}" style="background:#ef4444;color:#fff;border:none;border-radius:3px;padding:2px 5px;font-size:10px;cursor:pointer;">+�</button></td>
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
        });
    }

    // Apply Profile Photo Shape & Size dynamically after innerHTML render
    const photoShape = settings.photoShape || "circle";
    const photoSize = settings.photoSize || 115;
    const photoContainers = document.querySelectorAll("#cv-avatar-container, #cv-bd-photo-box");
    photoContainers.forEach(container => {
        container.style.width = `${photoSize}px`;
        container.style.height = `${photoSize}px`;
        container.style.minWidth = `${photoSize}px`;
        container.style.minHeight = `${photoSize}px`;

        if (photoShape === "circle") {
            container.style.borderRadius = "50%";
        } else if (photoShape === "square") {
            container.style.borderRadius = "0px";
        } else if (photoShape === "rounded") {
            container.style.borderRadius = "14px";
        }
    });

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
    // Use actual scrollHeight so taller/dynamic CV contents never get cut off at the bottom!
    const baseHeight = paper.scrollHeight || 1130;
    const isMobile = window.innerWidth <= 768;

    // Calculate available container width
    let availableWidth = scaler.parentElement ? scaler.parentElement.clientWidth : window.innerWidth;
    if (isMobile) {
        availableWidth = window.innerWidth; // Edge-to-edge full width on mobile
    } else {
        availableWidth = Math.max(availableWidth - 32, 200);
    }

    // Calculate scale factor
    let scale = isMobile
        ? availableWidth / baseWidth
        : Math.min(availableWidth / baseWidth, 0.98);

    // If custom zoom is active (user tapped +/-), override the fit scale
    if (appState.customizerZoom && appState.customizerZoom !== 'fit') {
        scale = appState.customizerZoom;
    }

    // Set scaler relative dimensions so it encloses the scaled paper perfectly without layout shifts
    scaler.style.position = "relative";
    scaler.style.width = `${baseWidth * scale}px`;
    scaler.style.height = `${baseHeight * scale}px`;
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
                // If any header field is edited, update jobTitle string if present
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

            // Keep Expert Mode form inputs in sync
            populateExpertModeInputs();
        });
    });
}

/* ==========================================================================
   Drag & Drop Modules logic
   ========================================================================== */
function setupDragAndDrop() {
    const container = document.getElementById("module-list-container");
    if (!container) return;

    container.addEventListener("dragstart", (e) => {
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
            ordered.push(el.dataset.module);
        });

        appState.customizerSettings.modulesOrder = ordered;
        updateLivePreview();
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

    // Setup module visibility toggle buttons
    container.addEventListener("click", (e) => {
        const btn = e.target.closest(".toggle-visibility-btn");
        if (!btn) return;

        const modId = btn.dataset.module;
        btn.classList.toggle("active");

        if (btn.classList.contains("active")) {
            appState.customizerSettings.hiddenModules = appState.customizerSettings.hiddenModules.filter(id => id !== modId);
        } else {
            if (!appState.customizerSettings.hiddenModules.includes(modId)) {
                appState.customizerSettings.hiddenModules.push(modId);
            }
        }

        updateLivePreview();
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
    const lang = appState.language || "en";
    const dict = TRANSLATIONS[lang] || TRANSLATIONS["en"];

    const addBtn = document.getElementById("btn-add-module");
    const isBD = settings.country === "bangladesh";

    if (isBD) {
        if (addBtn) addBtn.style.display = "none";
    } else {
        if (addBtn) addBtn.style.display = "block";
    }

    const bdItemsMap = {
        objective: {
            name: lang === "bn" ? "a��a��a��a�+a��a�+a��a�+a�+a�� a��a��a��a��a��a��a��a��" : "Career Objective",
            icon: `<svg class="module-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline><line x1="16" y1="13" x2="8" y2="13"></line><line x1="16" y1="17" x2="8" y2="17"></line></svg>`
        },
        education: {
            name: lang === "bn" ? "a��a�+a��a��a�+a�+a��a�� a��a��a��a��a��a��a�+" : "Academic Qualification",
            icon: `<svg class="module-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 10v6M2 10l10-5 10 5-10 5z"></path><path d="M6 12v5c0 2 2 3 6 3s6-1 6-3v-5"></path></svg>`
        },
        otherQualifications: {
            name: lang === "bn" ? "a��a��a��a��a�+a��a��a�� a��a��a��a��a��a��a�+" : "Other Qualification",
            icon: `<svg class="module-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><line x1="2" y1="12" x2="22" y2="12"></line><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path></svg>`
        },
        personal: {
            name: lang === "bn" ? "a��a��a��a��a��a��a�+a��a�� a��a��a��a��" : "Personal Information",
            icon: `<svg class="module-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>`
        },
        declaration: {
            name: lang === "bn" ? "a��a��a�+a��a�+ a�� a�+a��a��a�+a��a��a�+a��" : "Declaration & Signature",
            icon: `<svg class="module-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"></path><rect x="8" y="2" width="8" height="4" rx="1" ry="1"></rect></svg>`
        }
    };

    const genericItemsMap = {
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
        }
    };

    const itemsMap = isBD ? bdItemsMap : genericItemsMap;

    let modulesOrder = settings.modulesOrder;
    const isBDValid = isBD && Array.isArray(modulesOrder) && modulesOrder.length > 0 && modulesOrder.every(m => bdItemsMap[m]);
    const isGenericValid = !isBD && Array.isArray(modulesOrder) && modulesOrder.length > 0 && modulesOrder.every(m => genericItemsMap[m]);

    if (isBD && !isBDValid) {
        modulesOrder = ["objective", "education", "otherQualifications", "personal", "declaration"];
        settings.modulesOrder = modulesOrder;
    } else if (!isBD && !isGenericValid) {
        modulesOrder = ["aboutMe", "education", "skills", "experience", "languages"];
        settings.modulesOrder = modulesOrder;
    }

    container.innerHTML = "";
    modulesOrder.forEach(modId => {
        const isVisible = !settings.hiddenModules.includes(modId);
        const item = itemsMap[modId];
        if (!item) return;

        const div = document.createElement("div");
        div.className = "module-item";
        div.draggable = true;
        div.dataset.module = modId;
        div.innerHTML = `
      <span class="drag-handle">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="9" cy="5" r="1"></circle><circle cx="9" cy="12" r="1"></circle><circle cx="9" cy="19" r="1"></circle><circle cx="15" cy="5" r="1"></circle><circle cx="15" cy="12" r="1"></circle><circle cx="15" cy="19" r="1"></circle></svg>
      </span>
      <span class="module-name-wrapper">
        ${item.icon}
        <span>${item.name}</span>
      </span>
      <button class="toggle-visibility-btn ${isVisible ? 'active' : ''}" data-module="${modId}"></button>
    `;
        container.appendChild(div);
    });
}

/* ==========================================================================
   Saved Documents logic
   ========================================================================== */
function setupDocumentActions() {
    // Create new document trigger
    const createBtn = document.getElementById("btn-create-document");
    if (createBtn) {
        createBtn.addEventListener("click", () => {
            const title = prompt("Enter a title for your new document:", "My Resume");
            if (!title) return;

            const type = confirm("Create a Resume? (Cancel for Cover Letter)") ? "Resume" : "Cover Letter";

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

            // Load this newly created document into the Customizer immediately
            appState.currentDocId = newDoc.id;
            appState.cvData = newDoc.cvData;
            appState.customizerSettings = newDoc.settings;

            syncCustomizerControlsToState();
            updateLivePreview();
            renderSavedDocuments();

            showToast(`Document "${title}" created successfully.`);
            switchTab("customize");
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
                // Trigger browser print dialog for document export
                appState.currentDocId = doc.id;
                appState.cvData = JSON.parse(JSON.stringify(doc.cvData));
                appState.customizerSettings = JSON.parse(JSON.stringify(doc.settings));
                appState.selectedCountry = doc.settings.country || null;

                syncCustomizerControlsToState();
                updateLivePreview();

                showToast("Triggering browser print setup...");
                setTimeout(() => {
                    window.print();
                }, 300);
            }
            else if (btn.classList.contains("delete-doc")) {
                if (confirm(`Are you sure you want to delete "${doc.title}"?`)) {
                    appState.documents = appState.documents.filter(d => d.id !== docId);
                    localStorage.setItem(getDocsStorageKey(), JSON.stringify(appState.documents));
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

    if (currentId) {
        // Update existing document
        const docIdx = appState.documents.findIndex(d => d.id === currentId);
        if (docIdx > -1) {
            appState.documents[docIdx].cvData = JSON.parse(JSON.stringify(appState.cvData));
            appState.documents[docIdx].settings = JSON.parse(JSON.stringify(appState.customizerSettings));
            appState.documents[docIdx].meta = dateStr;

            localStorage.setItem(getDocsStorageKey(), JSON.stringify(appState.documents));
            showToast("Document changes saved successfully.");
            renderSavedDocuments();
        }
    } else {
        // Prompt to save as a new document
        const title = prompt("Save as a new document. Enter Title:", "My Customized Resume");
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
        showToast(`Saved as "${title}".`);
        renderSavedDocuments();
    }
}

// Render the grid of saved documents
function renderSavedDocuments() {
    const container = document.getElementById("documents-grid-container");
    if (!container) return;

    container.innerHTML = "";
    if (appState.documents.length === 0) {
        container.innerHTML = `<div class="empty-docs text-center" style="grid-column: 1/-1; padding: 40px 0; color: var(--text-muted);">
      <p>No saved documents. Click "Create New" to get started.</p>
    </div>`;
        return;
    }

    appState.documents.forEach(doc => {
        const card = document.createElement("div");
        card.className = "doc-card";
        card.dataset.docId = doc.id;
        card.innerHTML = `
      <div class="doc-preview">
        <div class="doc-badge">${doc.type}</div>
        <div class="doc-thumbnail-lines" style="font-family: var(--font-${doc.settings.font})">
          <div class="thumb-line w-30 m-b-10" style="background-color: ${doc.settings.accentColor}; height: 4px;"></div>
          <div class="thumb-line w-80"></div>
          <div class="thumb-line w-90"></div>
          <div class="thumb-line w-75"></div>
          <div class="thumb-line w-85"></div>
        </div>
      </div>
      <div class="doc-info">
        <h3>${doc.title}</h3>
        <p class="doc-meta">${doc.meta}</p>
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

    // Toggle Dropdown
    btn.addEventListener("click", (e) => {
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
            const lang = item.dataset.lang;

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

            showToast(`Language switched to ${item.querySelector(".lang-name").textContent}`);
        });
    });

    // Apply initial language button text on load
    const initialLang = appState.language;
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
                        en: "English", bn: "a��a�+a��a��a�+", de: "Deutsch", fr: "Fran+�ais", it: "Italiano",
                        pt: "Portugu+�s", da: "Dansk", no: "Norsk", ru: "-�-�-�-�-�-+-�", ja: "��ѵ��F�P", ko: "f�O��8��", ms: "Bahasa Melayu"
                    };
                    const langLabel = langNames[lang] || "English";
                    let prefix = "Language";
                    if (lang === "bn") prefix = "a��a�+a�+a�+";
                    else if (lang === "de") prefix = "Sprache";
                    else if (lang === "fr") prefix = "Langue";
                    else if (lang === "it") prefix = "Lingua";
                    else if (lang === "pt") prefix = "Idioma";
                    else if (lang === "da") prefix = "Sprog";
                    else if (lang === "no") prefix = "Spr+�k";
                    else if (lang === "ru") prefix = "-�-+-�-�";
                    else if (lang === "ja") prefix = "F��F�P";
                    else if (lang === "ko") prefix = "8�+8��";
                    else if (lang === "ms") prefix = "Bahasa";
                    el.textContent = `${prefix}: ${langLabel}`;
                } else {
                    el.textContent = dict[key];
                }
            }
        } else if (key === "translate_preview_option") {
            const options = {
                en: "Translate (Language)",
                bn: "a��a��a��a��a�+a�� (a��a�+a�+a�+)",
                de: "+�bersetzen (Sprache)",
                fr: "Traduire (Langue)",
                it: "Traduci (Lingua)",
                pt: "Traduzir (Idioma)",
                da: "Overs+�t (Sprog)",
                no: "Oversett (Spr+�k)",
                ru: "-�-�-�-�-�-�-�-�-+ (-�-+-�-�)",
                ja: "t++F�� (F��F�P)",
                ko: "d��8�� (8�+8��)",
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
    // 1. Initialise registered users database in localStorage if not set
    if (!localStorage.getItem("registered_users")) {
        const defaultUsers = [
            {
                name: "MD Shahed",
                email: "shahedtnvr769@gmail.com",
                password: "123"
            }
        ];
        localStorage.setItem("registered_users", JSON.stringify(defaultUsers));
    }

    // Elements
    const authModal = document.getElementById("auth-gate-container");
    const closeBtn = document.getElementById("btn-auth-close");
    const loginTriggerBtn = document.getElementById("btn-login-trigger");
    const tabLogin = document.getElementById("auth-tab-login");
    const tabSignup = document.getElementById("auth-tab-signup");
    const loginForm = document.getElementById("auth-login-form");
    const signupForm = document.getElementById("auth-signup-form");
    const userProfileContainer = document.getElementById("user-profile-container");
    const userProfileBtn = document.getElementById("user-profile");
    const userProfileMenu = document.getElementById("user-profile-menu");
    const userMenuName = document.getElementById("user-menu-name");
    const userMenuEmail = document.getElementById("user-menu-email");
    const logoutBtn = document.getElementById("btn-logout");

    // Helper: Get registered users from localStorage
    function getRegisteredUsers() {
        try {
            return JSON.parse(localStorage.getItem("registered_users")) || [];
        } catch (e) {
            return [];
        }
    }

    // Helper: Save registered users to localStorage
    function saveRegisteredUsers(users) {
        localStorage.setItem("registered_users", JSON.stringify(users));
    }

    // Helper: Check login state on load and update UI
    function updateAuthStateUI() {
        const savedUserStr = localStorage.getItem("current_user");
        if (savedUserStr) {
            try {
                const user = JSON.parse(savedUserStr);
                document.body.classList.add("logged-in");
                if (userMenuName) userMenuName.textContent = user.name || "User";
                if (userMenuEmail) userMenuEmail.textContent = user.email || "";
            } catch (e) {
                document.body.classList.remove("logged-in");
            }
        } else {
            document.body.classList.remove("logged-in");
        }
    }

    // Helper: Open Auth Modal
    function openAuthModal(defaultTab = "login") {
        if (!authModal) return;
        authModal.classList.remove("hidden");
        switchAuthTab(defaultTab);
    }

    // Helper: Close Auth Modal
    function closeAuthModal() {
        if (!authModal) return;
        authModal.classList.add("hidden");
    }

    // Helper: Switch Auth Tab (login vs signup)
    function switchAuthTab(tab) {
        if (tab === "login") {
            if (tabLogin) tabLogin.classList.add("active");
            if (tabSignup) tabSignup.classList.remove("active");
            if (loginForm) loginForm.classList.add("active");
            if (signupForm) signupForm.classList.remove("active");
        } else {
            if (tabSignup) tabSignup.classList.add("active");
            if (tabLogin) tabLogin.classList.remove("active");
            if (signupForm) signupForm.classList.add("active");
            if (loginForm) loginForm.classList.remove("active");
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
        tabLogin.addEventListener("click", () => switchAuthTab("login"));
    }
    if (tabSignup) {
        tabSignup.addEventListener("click", () => switchAuthTab("signup"));
    }

    // LOGIN Form Submit
    if (loginForm) {
        loginForm.addEventListener("submit", (e) => {
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

            const users = getRegisteredUsers();
            const matchedUser = users.find(u => u.email.toLowerCase() === email && u.password === password);

            if (matchedUser) {
                // Save user login session persistently
                localStorage.setItem("current_user", JSON.stringify({
                    name: matchedUser.name,
                    email: matchedUser.email
                }));

                updateAuthStateUI();
                closeAuthModal();
                showToast(`Welcome back, ${matchedUser.name}!`);

                // Clear input fields
                loginForm.reset();
            } else {
                showToast("Invalid email or password. Please check your credentials or Sign Up.", "error");
            }
        });
    }

    // SIGN UP Form Submit
    if (signupForm) {
        signupForm.addEventListener("submit", (e) => {
            e.preventDefault();
            const nameInput = document.getElementById("signup-name");
            const emailInput = document.getElementById("signup-email");
            const passwordInput = document.getElementById("signup-password");
            const confirmPasswordInput = document.getElementById("signup-confirm-password");

            if (!nameInput || !emailInput || !passwordInput || !confirmPasswordInput) return;

            const name = nameInput.value.trim();
            const email = emailInput.value.trim().toLowerCase();
            const password = passwordInput.value.trim();
            const confirmPassword = confirmPasswordInput.value.trim();

            if (!name || !email || !password) {
                showToast("Please fill in all fields.", "error");
                return;
            }

            if (password !== confirmPassword) {
                showToast("Passwords do not match!", "error");
                return;
            }

            const users = getRegisteredUsers();
            const existingUser = users.find(u => u.email.toLowerCase() === email);

            if (existingUser) {
                showToast("This email is already registered. Please log in.", "error");
                switchAuthTab("login");
                const loginEmailIn = document.getElementById("login-email");
                if (loginEmailIn) loginEmailIn.value = email;
                return;
            }

            // Register new user and save to localStorage database
            const newUser = { name, email, password };
            users.push(newUser);
            saveRegisteredUsers(users);

            // Log in the user immediately
            localStorage.setItem("current_user", JSON.stringify({ name: newUser.name, email: newUser.email }));

            updateAuthStateUI();
            closeAuthModal();
            showToast(`Account created successfully! Welcome, ${name}!`);

            // Clear input fields
            signupForm.reset();
        });
    }

    // Toggle User Profile Dropdown Menu
    if (userProfileContainer && userProfileBtn) {
        userProfileBtn.addEventListener("click", (e) => {
            e.stopPropagation();
            userProfileContainer.classList.toggle("open");
        });

        document.addEventListener("click", (e) => {
            if (!userProfileContainer.contains(e.target)) {
                userProfileContainer.classList.remove("open");
            }
        });
    }

    // LOG OUT Action
    if (logoutBtn) {
        logoutBtn.addEventListener("click", (e) => {
            e.preventDefault();
            localStorage.removeItem("current_user");
            if (userProfileContainer) userProfileContainer.classList.remove("open");
            updateAuthStateUI();
            showToast("Signed out successfully.");
        });
    }

    // Apply initial Auth state on load
    updateAuthStateUI();
}

// --- Initialize All System Components on Load ---
document.addEventListener("DOMContentLoaded", () => {
    initAuthSystem();
    if (typeof initLanguageDropdown === "function") initLanguageDropdown();
    if (typeof setupCustomizerControls === "function") setupCustomizerControls();
    if (typeof setupTemplateListeners === "function") setupTemplateListeners();
    if (typeof setupDocumentActions === "function") setupDocumentActions();
    if (typeof setupDragAndDrop === "function") setupDragAndDrop();
    if (typeof renderSavedDocuments === "function") renderSavedDocuments();
});

// Immediate invocation fallback for scripts running after DOMContentLoaded
initAuthSystem();
if (typeof initLanguageDropdown === "function") initLanguageDropdown();
if (typeof setupCustomizerControls === "function") setupCustomizerControls();
if (typeof setupTemplateListeners === "function") setupTemplateListeners();
if (typeof setupDocumentActions === "function") setupDocumentActions();
if (typeof setupDragAndDrop === "function") setupDragAndDrop();
if (typeof renderSavedDocuments === "function") renderSavedDocuments();