/* ==========================================================================
   Global State Management
   ========================================================================== */
const DEFAULT_CV_DATA = {
  name: "JANE DOE",
  jobTitle: "Senior Product Executive | New York, NY | jane.doe@example.com",
  experience: {
    title: "Experience",
    entries: [
      {
        company: "Global Tech Industries",
        duration: "2019 - Present",
        role: "VP of Product Management",
        bullets: [
          "Led a cross-functional team of 50+ engineers and designers.",
          "Increased Q3 revenue by 24% through strategic feature launches."
        ]
      }
    ]
  },
  education: {
    title: "Education",
    entries: [
      {
        college: "Columbia University",
        duration: "2012 - 2016",
        role: "Bachelor of Science in Computer Science"
      }
    ]
  },
  skills: {
    title: "Skills",
    items: ["Product Strategy", "Agile Leadership", "User Experience", "Data Analytics", "Resource Planning"]
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
    accentColor: "#111827",
    density: 2,
    showPhoto: true,
    photoUrl: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=200",
    modulesOrder: ["personal", "experience", "education", "skills"],
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
    create_cv: "Create my CV",
    select_market: "Select your target market to generate a localized, compliant resume optimized for regional Applicant Tracking Systems.",
    european_favorites: "European Favorites",
    top_asian_markets: "Top Asian Markets",
    select_template: "Select Template",
    use_template: "Use Template",
    expert_mode: "Expert Mode",
    template_customizer: "Template Customizer",
    modular_structure: "Modular Structure",
    reset_default: "Reset to Default",
    global_settings: "Global Template Settings",
    typography_anchor: "Typography Anchor",
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
    density_spacious: "Spacious"
  },
  bn: {
    dashboard: "ড্যাশবোর্ড",
    templates: "টেমপ্লেট",
    customize: "কাস্টমাইজ",
    my_documents: "আমার নথিপত্র",
    create_cv: "আমার সিভি তৈরি করুন",
    select_market: "আঞ্চলিক অ্যাপ্লিক্যান্ট ট্র্যাকিং সিস্টেমের জন্য অপ্টিমাইজ করা এবং স্থানীয়করণ করা সিভি তৈরি করতে আপনার টার্গেট মার্কেট নির্বাচন করুন।",
    european_favorites: "ইউরোপীয় পছন্দসমূহ",
    top_asian_markets: "সেরা এশিয়ান মার্কেট",
    select_template: "টেমপ্লেট নির্বাচন করুন",
    use_template: "টেমপ্লেট ব্যবহার করুন",
    expert_mode: "এক্সপার্ট মোড",
    template_customizer: "টেমপ্লেট কাস্টমাইজার",
    modular_structure: "মডুলার গঠন",
    reset_default: "ডিফল্টে রিসেট করুন",
    global_settings: "গ্লোবাল টেমপ্লেট সেটিংস",
    typography_anchor: "টাইপোগ্রাফি নোঙ্গর",
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
    european_favorites: "Europäische Favoriten",
    top_asian_markets: "Top-asiatische Märkte",
    select_template: "Vorlage auswählen",
    use_template: "Vorlage verwenden",
    expert_mode: "Expertenmodus",
    template_customizer: "Vorlagen-Anpassung",
    modular_structure: "Modulare Struktur",
    reset_default: "Auf Standard zurücksetzen",
    global_settings: "Globale Vorlageneinstellungen",
    typography_anchor: "Typografie-Anker",
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
    european_favorites: "Favoris européens",
    top_asian_markets: "Principaux marchés asiatiques",
    select_template: "Sélectionner le modèle",
    use_template: "Utiliser le modèle",
    expert_mode: "Mode Expert",
    template_customizer: "Personnalisateur de modèle",
    modular_structure: "Structure modulaire",
    reset_default: "Réinitialiser",
    global_settings: "Paramètres globaux du modèle",
    typography_anchor: "Ancre typographique",
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
    european_favorites: "Preferiti europei",
    top_asian_markets: "Principali mercati asiatici",
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
    european_favorites: "Favoritos europeus",
    top_asian_markets: "Principais mercados asiáticos",
    select_template: "Selecionar modelo",
    use_template: "Usar modelo",
    expert_mode: "Modo Expert",
    template_customizer: "Personalizador de modelo",
    modular_structure: "Estrutura modular",
    reset_default: "Restaurar padrões",
    global_settings: "Configurações globais do modelo",
    typography_anchor: "Âncora tipográfica",
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
    european_favorites: "Europæiske favoritter",
    top_asian_markets: "Top asiatiske markeder",
    select_template: "Vælg skabelon",
    use_template: "Brug skabelon",
    expert_mode: "Eksperttilstand",
    template_customizer: "Skabelon tilpasser",
    modular_structure: "Modulær struktur",
    reset_default: "Nulstil til standard",
    global_settings: "Globale skabelonindstillinger",
    typography_anchor: "Typografi anker",
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
    european_favorites: "Europeiske favoritter",
    top_asian_markets: "Beste asiatiske markeder",
    select_template: "Velg mal",
    use_template: "Bruk mal",
    expert_mode: "Ekspertmodus",
    template_customizer: "Mal tilpasser",
    modular_structure: "Modulær struktur",
    reset_default: "Nullstill til standard",
    global_settings: "Globale malinnstillinger",
    typography_anchor: "Typografi anker",
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
    european_favorites: "Европейские фавориты",
    top_asian_markets: "Лучшие азиатские рынки",
    select_template: "Выбрать шаблон",
    use_template: "Использовать шаблон",
    expert_mode: "Экспертный режим",
    template_customizer: "Настройщик шаблона",
    modular_structure: "Модульная структура",
    reset_default: "Сбросить по умолчанию",
    global_settings: "Глобальные настройки шаблона",
    typography_anchor: "Шрифтовой якорь",
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
    european_favorites: "ヨーロッパの人気市場",
    top_asian_markets: "アジアの主要市場",
    select_template: "テンプレートを選択",
    use_template: "テンプレートを使用",
    expert_mode: "エキスパートモード",
    template_customizer: "テンプレートカスタマイザー",
    modular_structure: "モジュール構成",
    reset_default: "デフォルトに戻す",
    global_settings: "グローバルテンプレート設定",
    typography_anchor: "タイポグラフィ基準",
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
    european_favorites: "유럽 인기 시장",
    top_asian_markets: "아시아 주요 시장",
    select_template: "템플릿 선택",
    use_template: "템플릿 사용",
    expert_mode: "전문가 모드",
    template_customizer: "템플릿 사용자 정의",
    modular_structure: "모듈식 구조",
    reset_default: "기본값으로 재설정",
    global_settings: "글로벌 템플릿 설정",
    typography_anchor: "타이포그래피 기준",
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
      name: "JOHANN MÜLLER",
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
   Initialization
   ========================================================================== */
document.addEventListener("DOMContentLoaded", () => {
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

// Local Storage initialization
function initLocalStorage() {
  if (!localStorage.getItem("global_resume_docs")) {
    localStorage.setItem("global_resume_docs", JSON.stringify(DEFAULT_SAVED_DOCS));
  }
  appState.documents = JSON.parse(localStorage.getItem("global_resume_docs"));
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
  italy:       { variant: "accent-bar",    bgTint: "#009246" },
  france:      { variant: "accent-bar",    bgTint: "#0050a1" },
  portugal:    { variant: "accent-bar",    bgTint: "#006600" },
  germany:     { variant: "border-left",   bgTint: "#1a1a1a" },
  austria:     { variant: "border-left",   bgTint: "#ed2939" },
  denmark:     { variant: "split-hdr",     bgTint: "#c8102e" },
  norway:      { variant: "split-hdr",     bgTint: "#ba0c2f" },
  japan:       { variant: "photo-top",     bgTint: "#bc002d" },
  southkorea:  { variant: "photo-top",     bgTint: "#0047a0" },
  singapore:   { variant: "sidebar",       bgTint: "#df151a" },
  malaysia:    { variant: "sidebar",       bgTint: "#000066" },
  bangladesh:  { variant: "right-photo",   bgTint: "#006a4e" },
  russia:      { variant: "right-photo",   bgTint: "#da291c" },
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
          ${['Father\'s Name','Mother\'s Name','Date of Birth','Gender','Nationality','Marital Status','Religion','Blood Group'].map(label => `
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
      // ── Bangladesh: show a real full-page image preview ──
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
function setupCustomizerControls() {
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
          accentColor: "#006a4e",
          density: 2,
          showPhoto: true,
          photoUrl: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=200",
          modulesOrder: ["personal", "experience", "education", "skills"],
          hiddenModules: []
        };
      } else {
        appState.cvData = JSON.parse(JSON.stringify(DEFAULT_CV_DATA));
        appState.customizerSettings = {
          country: country || null,
          font: "serif",
          accentColor: "#111827",
          density: 2,
          showPhoto: true,
          photoUrl: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=200",
          modulesOrder: ["personal", "experience", "education", "skills"],
          hiddenModules: []
        };
      }
      
      syncCustomizerControlsToState();
      updateLivePreview();
      renderSidebarModulesList();
      showToast("Settings reset to defaults.");
    });
  }

  // Profile Image Upload reader
  const photoUpload = document.getElementById("file-photo-upload");
  if (photoUpload) {
    photoUpload.addEventListener("change", (e) => {
      const file = e.target.files[0];
      if (file) {
        const reader = new FileReader();
        reader.onload = function(evt) {
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

  // Custom JSON/XML File reader
  const formatUpload = document.getElementById("file-format-upload");
  if (formatUpload) {
    formatUpload.addEventListener("change", (e) => {
      const file = e.target.files[0];
      if (file) {
        const reader = new FileReader();
        reader.onload = function(evt) {
          try {
            const data = JSON.parse(evt.target.result);
            if (data.name && data.experience && data.education && data.skills) {
              appState.cvData = data;
              updateLivePreview();
              showToast("CV Schema loaded and applied successfully.");
            } else {
              showToast("Error: JSON must match the required CV schema.", "error");
            }
          } catch(err) {
            showToast("Failed to parse JSON file.", "error");
          }
        };
        reader.readAsText(file);
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
      } else if (target.id === "cv-job-title") {
        appState.cvData.jobTitle = target.innerText.trim();
      }
    });

    paper.addEventListener("click", (e) => {
      const bdPhotoBox = e.target.closest("#cv-bd-photo-box");
      if (bdPhotoBox) {
        document.getElementById("file-photo-upload").click();
      }

      // Add educational row for Bangladesh CV
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
    en: { resume:"RESUME", careerObjective:"CAREER OBJECTIVE", academicQualification:"ACADEMIC QUALIFICATION", otherQualification:"OTHER QUALIFICATION", personalInformation:"PERSONAL INFORMATION", declaration:"DECLARATION", sno:"S.No.", qualification:"Qualification", board:"University / Board", year:"Year", result:"Result", fathersName:"Father's Name", mothersName:"Mother's Name", dob:"Date of Birth", languages:"Language Known", gender:"Gender", nationality:"Nationality", maritalStatus:"Marital Status", religion:"Religion", bloodGroup:"Blood Group", height:"Height", weight:"Weight", signature:"SIGNATURE", dateLabel:"Date", placeLabel:"Place" },
    bn: { resume:"জীবনবৃত্তান্ত", careerObjective:"ক্যারিয়ার উদ্দেশ্য", academicQualification:"শিক্ষাগত যোগ্যতা", otherQualification:"অন্যান্য যোগ্যতা", personalInformation:"ব্যক্তিগত তথ্য", declaration:"ঘোষণা", sno:"ক্রমিক", qualification:"যোগ্যতা", board:"বিশ্ববিদ্যালয় / বোর্ড", year:"বছর", result:"ফলাফল", fathersName:"পিতার নাম", mothersName:"মাতার নাম", dob:"জন্ম তারিখ", languages:"পরিচিত ভাষা", gender:"লিঙ্গ", nationality:"জাতীয়তা", maritalStatus:"বৈবাহিক অবস্থা", religion:"ধর্ম", bloodGroup:"রক্তের গ্রুপ", height:"উচ্চতা", weight:"ওজন", signature:"স্বাক্ষর", dateLabel:"তারিখ", placeLabel:"স্থান" },
    de: { resume:"LEBENSLAUF", careerObjective:"BERUFLICHES ZIEL", academicQualification:"AKADEMISCHE QUALIFIKATION", otherQualification:"WEITERE QUALIFIKATIONEN", personalInformation:"PERSÖNLICHE ANGABEN", declaration:"ERKLÄRUNG", sno:"Nr.", qualification:"Qualifikation", board:"Universität / Behörde", year:"Jahr", result:"Ergebnis", fathersName:"Name des Vaters", mothersName:"Name der Mutter", dob:"Geburtsdatum", languages:"Sprachen", gender:"Geschlecht", nationality:"Staatsangehörigkeit", maritalStatus:"Familienstand", religion:"Religion", bloodGroup:"Blutgruppe", height:"Größe", weight:"Gewicht", signature:"UNTERSCHRIFT", dateLabel:"Datum", placeLabel:"Ort" },
    fr: { resume:"RÉSUMÉ", careerObjective:"OBJECTIF PROFESSIONNEL", academicQualification:"QUALIFICATIONS ACADÉMIQUES", otherQualification:"AUTRES QUALIFICATIONS", personalInformation:"INFORMATIONS PERSONNELLES", declaration:"DÉCLARATION", sno:"N°", qualification:"Qualification", board:"Université / Conseil", year:"Année", result:"Résultat", fathersName:"Nom du père", mothersName:"Nom de la mère", dob:"Date de naissance", languages:"Langues", gender:"Genre", nationality:"Nationalité", maritalStatus:"État civil", religion:"Religion", bloodGroup:"Groupe sanguin", height:"Taille", weight:"Poids", signature:"SIGNATURE", dateLabel:"Date", placeLabel:"Lieu" },
    it: { resume:"CURRICULUM VITAE", careerObjective:"OBIETTIVO PROFESSIONALE", academicQualification:"QUALIFICA ACCADEMICA", otherQualification:"ALTRE QUALIFICHE", personalInformation:"INFORMAZIONI PERSONALI", declaration:"DICHIARAZIONE", sno:"N.", qualification:"Qualifica", board:"Università / Istituto", year:"Anno", result:"Risultato", fathersName:"Nome del padre", mothersName:"Nome della madre", dob:"Data di nascita", languages:"Lingue", gender:"Genere", nationality:"Nazionalità", maritalStatus:"Stato civile", religion:"Religione", bloodGroup:"Gruppo sanguigno", height:"Altezza", weight:"Peso", signature:"FIRMA", dateLabel:"Data", placeLabel:"Luogo" },
    pt: { resume:"CURRÍCULO", careerObjective:"OBJETIVO PROFISSIONAL", academicQualification:"QUALIFICAÇÃO ACADÊMICA", otherQualification:"OUTRAS QUALIFICAÇÕES", personalInformation:"INFORMAÇÕES PESSOAIS", declaration:"DECLARAÇÃO", sno:"Nº", qualification:"Qualificação", board:"Universidade / Conselho", year:"Ano", result:"Resultado", fathersName:"Nome do pai", mothersName:"Nome da mãe", dob:"Data de nascimento", languages:"Idiomas", gender:"Gênero", nationality:"Nacionalidade", maritalStatus:"Estado civil", religion:"Religião", bloodGroup:"Grupo sanguíneo", height:"Altura", weight:"Peso", signature:"ASSINATURA", dateLabel:"Data", placeLabel:"Local" },
    da: { resume:"CURRICULUM VITAE", careerObjective:"KARRIEREMÅL", academicQualification:"UDDANNELSESKVALIFIKATIONER", otherQualification:"ANDRE KVALIFIKATIONER", personalInformation:"PERSONLIGE OPLYSNINGER", declaration:"ERKLÆRING", sno:"Nr.", qualification:"Kvalifikation", board:"Universitet / Bestyrelse", year:"År", result:"Resultat", fathersName:"Fars navn", mothersName:"Mors navn", dob:"Fødselsdato", languages:"Sprog", gender:"Køn", nationality:"Nationalitet", maritalStatus:"Civilstand", religion:"Religion", bloodGroup:"Blodtype", height:"Højde", weight:"Vægt", signature:"UNDERSKRIFT", dateLabel:"Dato", placeLabel:"Sted" },
    no: { resume:"CV", careerObjective:"KARRIEREMÅL", academicQualification:"UTDANNINGSKVALIFIKASJONER", otherQualification:"ANDRE KVALIFIKASJONER", personalInformation:"PERSONLIGE OPPLYSNINGER", declaration:"ERKLÆRING", sno:"Nr.", qualification:"Kvalifikasjon", board:"Universitet / Styret", year:"År", result:"Resultat", fathersName:"Fars navn", mothersName:"Mors navn", dob:"Fødselsdato", languages:"Språk", gender:"Kjønn", nationality:"Nasjonalitet", maritalStatus:"Sivilstand", religion:"Religion", bloodGroup:"Blodtype", height:"Høyde", weight:"Vekt", signature:"SIGNATUR", dateLabel:"Dato", placeLabel:"Sted" },
    ru: { resume:"РЕЗЮМЕ", careerObjective:"ЦЕЛЬ КАРЬЕРЫ", academicQualification:"АКАДЕМИЧЕСКАЯ КВАЛИФИКАЦИЯ", otherQualification:"ДРУГИЕ КВАЛИФИКАЦИИ", personalInformation:"ЛИЧНАЯ ИНФОРМАЦИЯ", declaration:"ДЕКЛАРАЦИЯ", sno:"№", qualification:"Квалификация", board:"Университет / Совет", year:"Год", result:"Результат", fathersName:"Имя отца", mothersName:"Имя матери", dob:"Дата рождения", languages:"Языки", gender:"Пол", nationality:"Гражданство", maritalStatus:"Семейное положение", religion:"Религия", bloodGroup:"Группа крови", height:"Рост", weight:"Вес", signature:"ПОДПИСЬ", dateLabel:"Дата", placeLabel:"Место" },
    ja: { resume:"履歴書", careerObjective:"キャリア目標", academicQualification:"学歴・資格", otherQualification:"その他の資格", personalInformation:"個人情報", declaration:"本人署名", sno:"番号", qualification:"資格・学位", board:"学校名・機関", year:"年", result:"結果・成績", fathersName:"父の名前", mothersName:"母の名前", dob:"生年月日", languages:"語学力", gender:"性別", nationality:"国籍", maritalStatus:"配偶者", religion:"宗教", bloodGroup:"血液型", height:"身長", weight:"体重", signature:"署名", dateLabel:"日付", placeLabel:"場所" },
    ko: { resume:"이력서", careerObjective:"희망 업무 및 목표", academicQualification:"학력 사항", otherQualification:"기타 자격", personalInformation:"개인 정보", declaration:"서약 및 선언", sno:"번호", qualification:"자격 및 학위", board:"학교 / 기관", year:"년도", result:"결과", fathersName:"부친 성명", mothersName:"모친 성명", dob:"생년월일", languages:"가능 언어", gender:"성별", nationality:"국적", maritalStatus:"결혼 여부", religion:"종교", bloodGroup:"혈액형", height:"신장", weight:"체중", signature:"서명", dateLabel:"날짜", placeLabel:"장소" },
    ms: { resume:"RESUME", careerObjective:"OBJEKTIF KERJAYA", academicQualification:"KELAYAKAN AKADEMIK", otherQualification:"KELAYAKAN LAIN", personalInformation:"MAKLUMAT PERIBADI", declaration:"PENGESAHAN", sno:"Bil.", qualification:"Kelayakan", board:"Universiti / Lembaga", year:"Tahun", result:"Keputusan", fathersName:"Nama Bapa", mothersName:"Nama Ibu", dob:"Tarikh Lahir", languages:"Bahasa", gender:"Jantina", nationality:"Kewarganegaraan", maritalStatus:"Status Perkahwinan", religion:"Agama", bloodGroup:"Kumpulan Darah", height:"Tinggi", weight:"Berat", signature:"TANDATANGAN", dateLabel:"Tarikh", placeLabel:"Tempat" }
  };
  const labels = BD_LABELS[lang] || BD_LABELS["en"];
  
  // Translated default BD CV content values per language
  const BD_DEFAULTS = {
    en:  { jobTitle:"Student", objective:"To work in a responsible position where I could use my interpersonal skills, creativity, and above all, my learning experiences in order to develop my career as well as to contribute to the growth of the organization.", otherQ:["Basic Knowledge of Computer","Advanced Microsoft Excel Certification"], languages:"Bangla And English", gender:"Male", nationality:"Bangladeshi", maritalStatus:"Unmarried", religion:"Islam", declaration:"I hereby declare that the above information given by me is true to the best of my knowledge and belief.", place:"Dhaka" },
    bn:  { jobTitle:"শিক্ষার্থী", objective:"একটি দায়িত্বশীল পদে কাজ করা যেখানে আমি আমার আন্তঃব্যক্তিক দক্ষতা, সৃজনশীলতা এবং সর্বোপরি আমার শেখার অভিজ্ঞতাগুলিকে আমার কর্মজীবনের বিকাশের পাশাপাশি সংস্থার বৃদ্ধিতে অবদান রাখতে ব্যবহার করতে পারি।", otherQ:["কম্পিউটারের মৌলিক জ্ঞান","উন্নত মাইক্রোসফ্ট এক্সেল সার্টিফিকেট"], languages:"বাংলা এবং ইংরেজি", gender:"পুরুষ", nationality:"বাংলাদেশী", maritalStatus:"অবিবাহিত", religion:"ইসলাম", declaration:"আমি এতদ্বারা ঘোষণা করছি যে আমার দেওয়া উপরিউক্ত তথ্য আমার জ্ঞান ও বিশ্বাস মতে সত্য।", place:"ঢাকা" },
    de:  { jobTitle:"Student", objective:"In einer verantwortungsvollen Position zu arbeiten, in der ich meine zwischenmenschlichen Fähigkeiten, meine Kreativität und vor allem meine Lernerfahrungen nutzen kann.", otherQ:["Grundkenntnisse am Computer","Zertifikat für fortgeschrittene Microsoft Excel-Kenntnisse"], languages:"Bengali und Englisch", gender:"Männlich", nationality:"Bangladeschisch", maritalStatus:"Ledig", religion:"Islam", declaration:"Ich erkläre hiermit, dass die obigen Angaben nach bestem Wissen und Gewissen wahr sind.", place:"Dhaka" },
    fr:  { jobTitle:"Étudiant", objective:"Travailler dans un poste à responsabilité où je pourrais utiliser mes compétences interpersonnelles, ma créativité et surtout mes expériences d'apprentissage.", otherQ:["Connaissances de base en informatique","Certification Microsoft Excel avancée"], languages:"Bengali et anglais", gender:"Homme", nationality:"Bangladais", maritalStatus:"Célibataire", religion:"Islam", declaration:"Je déclare par la présente que les informations ci-dessus sont exactes au meilleur de mes connaissances.", place:"Dacca" },
    it:  { jobTitle:"Studente", objective:"Lavorare in una posizione di responsabilità dove poter utilizzare le mie capacità interpersonali, creatività e soprattutto le esperienze di apprendimento.", otherQ:["Conoscenze di base del computer","Certificazione avanzata di Microsoft Excel"], languages:"Bengalese e inglese", gender:"Maschio", nationality:"Bangladese", maritalStatus:"Celibe", religion:"Islam", declaration:"Con la presente dichiaro che le informazioni sopra riportate sono veritiere al meglio delle mie conoscenze.", place:"Dacca" },
    pt:  { jobTitle:"Estudante", objective:"Trabalhar em um cargo de responsabilidade onde eu possa usar minhas habilidades interpessoais, criatividade e experiências de aprendizado.", otherQ:["Conhecimento básico de informática","Certificação Avançada em Microsoft Excel"], languages:"Bengali e inglês", gender:"Masculino", nationality:"Bangladense", maritalStatus:"Solteiro", religion:"Islam", declaration:"Declaro que as informações acima são verdadeiras de acordo com o meu conhecimento.", place:"Daca" },
    da:  { jobTitle:"Studerende", objective:"At arbejde i en ansvarsfuld stilling, hvor jeg kan bruge mine interpersonelle færdigheder og læringserfaringer til at udvikle min karriere.", otherQ:["Grundlæggende computerkendskab","Avanceret Microsoft Excel-certificering"], languages:"Bengalsk og engelsk", gender:"Mand", nationality:"Bangladesher", maritalStatus:"Ugift", religion:"Islam", declaration:"Jeg erklærer hermed, at ovenstående oplysninger er sande efter min bedste overbevisning.", place:"Dhaka" },
    no:  { jobTitle:"Student", objective:"Å jobbe i en ansvarsfull stilling der jeg kan bruke mine mellommenneskelige ferdigheter og læringserfaringer.", otherQ:["Grunnleggende datakunnskaper","Sertifisering i avansert Microsoft Excel"], languages:"Bengalsk og engelsk", gender:"Mann", nationality:"Bangladesher", maritalStatus:"Ugift", religion:"Islam", declaration:"Jeg erklærer herved at ovenstående opplysninger er sanne etter min beste overbevisning.", place:"Dhaka" },
    ru:  { jobTitle:"Студент", objective:"Работать на ответственной должности, используя навыки межличностного общения, творческий потенциал и накопленный опыт.", otherQ:["Базовые знания компьютера","Сертификат о продвинутом знании Microsoft Excel"], languages:"Бенгальский и английский", gender:"Мужской", nationality:"Бангладешец", maritalStatus:"Не женат", religion:"Ислам", declaration:"Настоящим заявляю, что вышеуказанная информация верна в меру моих знаний.", place:"Дакка" },
    ja:  { jobTitle:"学生", objective:"対人スキル、創造性、学習経験を活かして責任あるポジションで働き、組織の成長に貢献すること。", otherQ:["コンピューターの基礎知識","マイクロソフトエクセル上級認定"], languages:"ベンガル語と英語", gender:"男性", nationality:"バングラデシュ人", maritalStatus:"未婚", religion:"イスラム教", declaration:"私はここに、提供した情報が真実であることを宣言します。", place:"ダッカ" },
    ko:  { jobTitle:"학생", objective:"대인 관계 능력, 창의성, 학습 경험을 활용하여 경력을 개발하고 조직 성장에 기여할 수 있는 직책에서 일하는 것입니다.", otherQ:["컴퓨터 기초 지식","고급 마이크로소프트 엑셀 인증"], languages:"벵골어 및 영어", gender:"남성", nationality:"방글라데시인", maritalStatus:"미혼", religion:"이슬람교", declaration:"본인은 기재한 정보가 사실임을 선언합니다.", place:"다카" },
    ms:  { jobTitle:"Pelajar", objective:"Bekerja dalam jawatan bertanggungjawab menggunakan kemahiran interpersonal, kreativiti, dan pengalaman pembelajaran.", otherQ:["Pengetahuan Asas Komputer","Sijil Microsoft Excel Lanjutan"], languages:"Bengali dan Inggeris", gender:"Lelaki", nationality:"Bangladesh", maritalStatus:"Belum berkahwin", religion:"Islam", declaration:"Saya mengesahkan bahawa maklumat di atas adalah benar.", place:"Dhaka" }
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
  const displayJobTitle  = data.jobTitle === "Student" ? bd.jobTitle : data.jobTitle;
  const displayObjective = data.objective.startsWith("To work in a responsible") ? bd.objective : data.objective;
  const displayGender    = data.personalInfo.gender === "Male" ? bd.gender : data.personalInfo.gender;
  const displayNat       = data.personalInfo.nationality === "Bangladeshi" ? bd.nationality : data.personalInfo.nationality;
  const displayMarital   = data.personalInfo.maritalStatus === "Unmarried" ? bd.maritalStatus : data.personalInfo.maritalStatus;
  const displayLangs     = data.personalInfo.languages === "Bangla And English" ? bd.languages : data.personalInfo.languages;
  const displayReligion  = data.personalInfo.religion === "Islam" ? bd.religion : data.personalInfo.religion;
  const displayDecl      = data.declaration.startsWith("I hereby declare") ? bd.declaration : data.declaration;
  const displayPlace     = data.place === "Dhaka" ? bd.place : data.place;

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
          <div class="cv-bd-contact-list">
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

      <!-- CAREER OBJECTIVE Section -->
      <div class="cv-bd-section">
        <div class="cv-bd-section-title">${labels.careerObjective}</div>
        <div class="cv-bd-section-content" contenteditable="true" data-type="bd-objective">${displayObjective}</div>
      </div>

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

      <!-- OTHER QUALIFICATION Section -->
      <div class="cv-bd-section">
        <div class="cv-bd-section-title">
          <span>${labels.otherQualification}</span>
          <button class="add-bullet-btn" id="btn-bd-add-other" style="background:var(--accent-color);color:#fff;border:none;border-radius:3px;padding:2px 6px;font-size:10px;cursor:pointer;">+ Bullet</button>
        </div>
        <div class="cv-bd-section-content">
          <ul class="cv-entry-bullets" style="padding-left:18px;">
            ${otherItems}
          </ul>
        </div>
      </div>

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

  if (settings.country === "bangladesh") {
    // Render custom Bangladesh layout
    paper.innerHTML = getBangladeshCVHtml(cv, settings);
  } else {
    const lang = appState.previewLanguage || appState.language || "en";
    
    const GENERIC_LABELS = {
      en: { experience: "Experience", education: "Education", skills: "Skills" },
      bn: { experience: "অভিজ্ঞতা", education: "শিক্ষা", skills: "দক্ষতা" },
      de: { experience: "Berufserfahrung", education: "Ausbildung", skills: "Fähigkeiten" },
      fr: { experience: "Expérience", education: "Éducation", skills: "Compétences" },
      it: { experience: "Esperienza", education: "Istruzione", skills: "Competenze" },
      pt: { experience: "Experiência", education: "Educação", skills: "Habilidades" },
      da: { experience: "Erfaring", education: "Uddannelse", skills: "Kompetencer" },
      no: { experience: "Erfaring", education: "Utdanning", skills: "Ferdigheter" },
      ru: { experience: "Опыт работы", education: "Образование", skills: "Навыки" },
      ja: { experience: "職歴", education: "学歴", skills: "スキル" },
      ko: { experience: "경력 사항", education: "학력 사항", skills: "보유 기술" },
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
      if (defaultEntry) {
        const company = entry.company === defaultEntry.company ? genDefaults.company : entry.company;
        const duration = entry.duration === defaultEntry.duration ? genDefaults.duration : entry.duration;
        const role = entry.role === defaultEntry.role ? genDefaults.role : entry.role;
        const bullets = entry.bullets.map((b, bIdx) => {
          const defaultBullet = defaultEntry.bullets[bIdx];
          return b === defaultBullet ? (genDefaults.bullets[bIdx] || b) : b;
        });
        return { company, duration, role, bullets };
      }
      return entry;
    });

    const eduEntries = cv.education.entries.map((entry, idx) => {
      const defaultEntry = DEFAULT_CV_DATA.education.entries[idx];
      if (defaultEntry) {
        const college = entry.college === defaultEntry.college ? genDefaults.college : entry.college;
        const duration = entry.duration === defaultEntry.duration ? genDefaults.duration : entry.duration;
        const role = entry.role === defaultEntry.role ? genDefaults.eduRole : entry.role;
        return { college, duration, role };
      }
      return entry;
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
    if (titleEl) titleEl.textContent = displayJobTitle;

    // Re-order and render experience, education, skills
    const dynamicContainer = document.getElementById("cv-dynamic-sections");
    dynamicContainer.innerHTML = "";

    settings.modulesOrder.forEach(modId => {
      // If hidden, don't append to CV
      if (settings.hiddenModules.includes(modId)) return;

      if (modId === "experience") {
        const sec = document.createElement("div");
        sec.className = "cv-render-section";
        sec.id = "cv-section-experience";
        sec.innerHTML = `
          <h2 class="cv-sec-title">${expTitle}</h2>
          ${expEntries.map((entry, idx) => `
            <div class="cv-entry">
              <div class="cv-entry-header">
                <span class="cv-company" contenteditable="true" data-type="exp-company" data-index="${idx}">${entry.company}</span>
                <span class="cv-duration" contenteditable="true" data-type="exp-duration" data-index="${idx}">${entry.duration}</span>
              </div>
              <div class="cv-entry-role" contenteditable="true" data-type="exp-role" data-index="${idx}">${entry.role}</div>
              <ul class="cv-entry-bullets">
                ${entry.bullets.map((b, bIdx) => `
                  <li contenteditable="true" data-type="exp-bullet" data-index="${idx}" data-bullet-index="${bIdx}">${b}</li>
                `).join('')}
              </ul>
            </div>
          `).join('')}
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
                <span class="cv-duration" contenteditable="true" data-type="edu-duration" data-index="${idx}">${entry.duration}</span>
              </div>
              <div class="cv-entry-degree" contenteditable="true" data-type="edu-degree" data-index="${idx}">${entry.role}</div>
            </div>
          `).join('')}
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
              <span class="cv-skill-tag" contenteditable="true" data-type="skill-item" data-index="${idx}">${skill}</span>
            `).join('')}
          </div>
        `;
        dynamicContainer.appendChild(sec);
      }
    });
  }

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

      if (type === "exp-company") {
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
      } else if (type === "skill-item") {
        appState.cvData.skills.items[idx] = val;
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

  // Handle Bangladesh specific layout message
  if (settings.country === "bangladesh") {
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
    }
  };

  container.innerHTML = "";
  settings.modulesOrder.forEach(modId => {
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
      localStorage.setItem("global_resume_docs", JSON.stringify(appState.documents));
      
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
          localStorage.setItem("global_resume_docs", JSON.stringify(appState.documents));
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
      
      localStorage.setItem("global_resume_docs", JSON.stringify(appState.documents));
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
    
    localStorage.setItem("global_resume_docs", JSON.stringify(appState.documents));
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
