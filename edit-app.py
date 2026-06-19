import re

def main():
    print("Editing app.js...")
    file_path = r"e:\WEBSITE CREAT for MY BUSSINESS\Resume(CV) & Cover letter\app.js"
    with open(file_path, "r", encoding="utf-8") as f:
        content = f.read()

    # 1. Add translate_preview_option to all translation blocks in TRANSLATIONS
    content = content.replace('density_spacious: "Spacious"', 'density_spacious: "Spacious",\n    translate_preview_option: "Translate Preview"')
    content = content.replace('density_spacious: "প্রশস্ত"', 'density_spacious: "প্রশস্ত",\n    translate_preview_option: "প্রিভিউ অনুবাদ করুন"')
    content = content.replace('density_spacious: "Großzügig"', 'density_spacious: "Großzügig",\n    translate_preview_option: "Vorschau übersetzen"')
    content = content.replace('density_spacious: "Spacieux"', 'density_spacious: "Spacieux",\n    translate_preview_option: "Traduire l\'aperçu"')
    content = content.replace('density_spacious: "Spazioso"', 'density_spacious: "Spazioso",\n    translate_preview_option: "Traduci anteprima"')
    content = content.replace('density_spacious: "Espaçoso"', 'density_spacious: "Espaçoso",\n    translate_preview_option: "Traduzir visualização"')
    content = content.replace('density_spacious: "Rummelig"', 'density_spacious: "Rummelig",\n    translate_preview_option: "Oversæt forhåndsvisning"')
    content = content.replace('density_spacious: "Romslig"', 'density_spacious: "Romslig",\n    translate_preview_option: "Oversett forhåndsvisning"')
    content = content.replace('density_spacious: "Просторный"', 'density_spacious: "Просторный",\n    translate_preview_option: "Перевести предпросмотр"')
    content = content.replace('density_spacious: "ゆったり"', 'density_spacious: "ゆったり",\n    translate_preview_option: "プレビューの翻訳"')
    content = content.replace('density_spacious: "넓게"', 'density_spacious: "넓게",\n    translate_preview_option: "미리보기 번역"')
    content = content.replace('density_spacious: "Luas"', 'density_spacious: "Luas",\n    translate_preview_option: "Terjemah Pratonton"')

    # 2. Insert our translations objects and getCVDisplayValue function
    new_constants_code = """
// Default CV content translations for all 12 target country languages
const DEFAULT_CV_DATA_TRANSLATIONS = {
  en: {
    jobTitle: "Senior Product Executive | New York, NY | jane.doe@example.com",
    exp_company: "Global Tech Industries",
    exp_role: "VP of Product Management",
    exp_bullets: [
      "Led a cross-functional team of 50+ engineers and designers.",
      "Increased Q3 revenue by 24% through strategic feature launches."
    ],
    edu_college: "Columbia University",
    edu_degree: "Bachelor of Science in Computer Science",
    skills: ["Product Strategy", "Agile Leadership", "User Experience", "Data Analytics", "Resource Planning"]
  },
  bn: {
    jobTitle: "সিনিয়র প্রোডাক্ট এক্সিকিউティブ | নিউ ইয়র্ক, এনওয়াই | jane.doe@example.com",
    exp_company: "গ্লোবাল টেক ইন্ডাস্ট্রিজ",
    exp_role: "ভিপি অব প্রোডাক্ট ম্যানেজমেন্ট",
    exp_bullets: [
      "৫০+ প্রকৌশলী এবং ডিজাইনারদের একটি ক্রস-ফাংশনাল টিমের নেতৃত্ব দিয়েছেন।",
      "কৌশলগত বৈশিষ্ট্য চালুর মাধ্যমে তৃতীয় ত্রৈমাসিকের রাজস্ব ২৪% বৃদ্ধি পেয়েছিল।"
    ],
    edu_college: "কলাম্বia বিশ্ববিদ্যালয়",
    edu_degree: "কম্পিউটার সায়েন্সে ব্যাচেলর অব সায়েন্স",
    skills: ["প্রোডাক্ট স্ট্র্যাটেজি", "অ্যাজাইল লিডারশিপ", "ইউজার এক্সপেরিয়েন্স", "ডাটা অ্যানালিটিক্স", "রিসোর্স প্ল্যানিং"]
  },
  de: {
    jobTitle: "Senior Produktmanager | New York, NY | jane.doe@example.com",
    exp_company: "Global Tech Industries",
    exp_role: "VP für Produktmanagement",
    exp_bullets: [
      "Leitung eines funktionsübergreifenden Teams von mehr als 50 Ingenieuren und Designern.",
      "Steigerung des Umsatzes im 3. Quartal um 24 % durch strategische Produkteinführungen."
    ],
    edu_college: "Columbia University",
    edu_degree: "Bachelor of Science in Informatik",
    skills: ["Produktstrategie", "Agile Führung", "Benutzererfahrung", "Datenanalyse", "Ressourcenplanung"]
  },
  fr: {
    jobTitle: "Directeur de produit senior | New York, NY | jane.doe@example.com",
    exp_company: "Global Tech Industries",
    exp_role: "Vice-président de la gestion des produits",
    exp_bullets: [
      "Dirigé une équipe interfonctionnelle de plus de 50 ingénieurs et concepteurs.",
      "Augmentation des revenus du troisième trimestre de 24 % grâce à des lancements stratégiques de fonctionnalités."
    ],
    edu_college: "Columbia University",
    edu_degree: "Licence en informatique",
    skills: ["Stratégie de produit", "Leadership agile", "Expérience utilisateur", "Analyse des données", "Planification des ressources"]
  },
  it: {
    jobTitle: "Dirigente senior di prodotto | New York, NY | jane.doe@example.com",
    exp_company: "Global Tech Industries",
    exp_role: "Vicepresidente della gestione prodotti",
    exp_bullets: [
      "Guidato un team interfunzionale di oltre 50 ingegneri e designer.",
      "Aumento dei ricavi del terzo trimestre del 24% grazie al lancio di funzionalità strategiche."
    ],
    edu_college: "Columbia University",
    edu_degree: "Laurea di primo livello in Informatica",
    skills: ["Strategia di prodotto", "Leadership agile", "Esperienza utente", "Analisi dei dati", "Pianificazione delle risorse"]
  },
  pt: {
    jobTitle: "Executivo de produto sênior | New York, NY | jane.doe@example.com",
    exp_company: "Global Tech Industries",
    exp_role: "Vice-presidente de gestão de produtos",
    exp_bullets: [
      "Liderou uma equipe multifuncional de mais de 50 engenheiros e designers.",
      "Aumentou a receita do terceiro trimestre em 24% por meio de lançamentos estratégicos de recursos."
    ],
    edu_college: "Columbia University",
    edu_degree: "Bacharelado em Ciência da Computação",
    skills: ["Estratégia de produto", "Liderança ágil", "Experiência do usuário", "Análise de dados", "Planejamento de recursos"]
  },
  da: {
    jobTitle: "Senior produktchef | New York, NY | jane.doe@example.com",
    exp_company: "Global Tech Industries",
    exp_role: "VP for produktstyring",
    exp_bullets: [
      "Ledede et tværfagligt team på over 50 ingeniører og designere.",
      "Øgede omsætningen i 3. kvartal med 24 % gennem strategiske produktlanceringer."
    ],
    edu_college: "Columbia University",
    edu_degree: "Bachelor of Science i datalogi",
    skills: ["Produktstrategi", "Agil ledelse", "Brugeroplevelse", "Dataanalyse", "Ressourceplanlægning"]
  },
  no: {
    jobTitle: "Senior produktsjef | New York, NY | jane.doe@example.com",
    exp_company: "Global Tech Industries",
    exp_role: "VP for produktledelse",
    exp_bullets: [
      "Ledet et tverrfaglig team på over 50 ingeniører og designere.",
      "Økte omsetningen i Q3 med 24 % gjennom strategiske produktlanseringer."
    ],
    edu_college: "Columbia University",
    edu_degree: "Bachelor of Science i informatikk",
    skills: ["Produktstrategi", "Agil ledelse", "Brukeropplevelse", "Dataanalyse", "Ressursplanlegging"]
  },
  ru: {
    jobTitle: "Старший менеджер по продукту | Нью-Йорк, Нью-Йорк | jane.doe@example.com",
    exp_company: "Global Tech Industries",
    exp_role: "Вице-президент по управлению продуктами",
    exp_bullets: [
      "Руководил многофункциональной командой из более чем 50 инженеров и дизайнеров.",
      "Увеличил выручку в третьем квартале на 24% за счет запуска стратегических функций."
    ],
    edu_college: "Columbia University",
    edu_degree: "Бакалавр компьютерных наук",
    skills: ["Продуктовая стратегия", "Agile-руководство", "Пользовательский опыт", "Аналитика данных", "Планирование ресурсов"]
  },
  ja: {
    jobTitle: "シニアプロダクトエグゼクティブ | ニューヨーク州ニューヨーク | jane.doe@example.com",
    exp_company: "Global Tech Industries",
    exp_role: "プロダクトマネジメント担当副社長",
    exp_bullets: [
      "50人以上のエンジニアとデザイナーからなるクロスファンクショナルなチームを率いた。",
      "戦略的な機能リリースにより、第3四半期の売上を24%増加させた。"
    ],
    edu_college: "コロンビア大学",
    edu_degree: "コンピューターサイエンスの理学士",
    skills: ["プロダクト戦略", "アジャイルリーダーシップ", "ユーザーエクスペリエンス", "データ分析", "リソース計画"]
  },
  ko: {
    jobTitle: "수석 제품 임원 | 뉴욕, NY | jane.doe@example.com",
    exp_company: "Global Tech Industries",
    exp_role: "제품 관리 부사장",
    exp_bullets: [
      "50명 이상의 엔지니어와 디자이너로 구성된 다기능 팀을 이끌었습니다.",
      "전략적 기능 출시를 통해 3분기 매출을 24% 증가시켰습니다."
    ],
    edu_college: "컬럼비아 대학교",
    edu_degree: "컴퓨터 과학 학사",
    skills: ["제품 전략", "애자일 리더십", "사용자 경험", "데이터 분석", "자원 계획"]
  },
  ms: {
    jobTitle: "Eksekutif Produk Kanan | New York, NY | jane.doe@example.com",
    exp_company: "Global Tech Industries",
    exp_role: "Naib Presiden Pengurusan Produk",
    exp_bullets: [
      "Menerajui pasukan rentas fungsi yang terdiri daripada 50+ jurutera dan pereka.",
      "Meningkatkan hasil Suku ke-3 sebanyak 24% melalui pelancaran ciri strategik."
    ],
    edu_college: "Universiti Columbia",
    edu_degree: "Sarjana Muda Sains dalam Sains Komputer",
    skills: ["Strategi Produk", "Kepimpinan Agile", "Pengalaman Pengguna", "Analisis Data", "Perancangan Sumber"]
  }
};

const DEFAULT_BD_CV_DATA_TRANSLATIONS = {
  en: {
    jobTitle: "Student",
    address: "Savar cantonment, Ashulia, Savar, Dhaka",
    objective: "To work in a responsible position where I could use my interpersonal skills, creativity, and above all, my learning experiences in order to develop my career as well as to contribute to the growth of the organization.",
    otherQualifications: [
      "Basic Knowledge of Computer",
      "Advanced Microsoft Excel Certification"
    ],
    languages: "Bangla And English",
    gender: "Male",
    nationality: "Bangladeshi",
    maritalStatus: "Unmarried",
    religion: "Islam",
    declaration: "I hereby declare that the above information given by me is true to the best of my knowledge and belief.",
    place: "Dhaka"
  },
  bn: {
    jobTitle: "শিক্ষার্থী",
    address: "সাভার সেনানিবাস, আশুলিয়া, সাভার, ঢাকা",
    objective: "একটি দায়িত্বশীল পদে কাজ করা যেখানে আমি আমার আন্তঃব্যক্তিক দক্ষতা, সৃজনশীলতা এবং সর্বোপরি আমার শেখার অভিজ্ঞতাগুলিকে আমার কর্মজীবনের বিকাশের পাশাপাশি সংস্থার বৃদ্ধিতে অবদান রাখতে ব্যবহার করতে পারি।",
    otherQualifications: [
      "কম্পিউটারের মৌলিক জ্ঞান",
      "উন্নত মাইক্রোসফ্ট এক্সেল সার্টিফিকেট"
    ],
    languages: "বাংলা এবং ইংরেজি",
    gender: "পুরুষ",
    nationality: "বাংলাদেশী",
    maritalStatus: "অবিবাহিত",
    religion: "ইসলাম",
    declaration: "আমি এতদ্বারা ঘোষণা করছি যে আমার দেওয়া উপরিউক্ত তথ্য আমার জ্ঞান ও বিশ্বাস মতে সত্য।",
    place: "ঢাকা"
  },
  de: {
    jobTitle: "Student",
    address: "Savar cantonment, Ashulia, Savar, Dhaka",
    objective: "In einer verantwortungsvollen Position zu arbeiten, in der ich meine zwischenmenschlichen Fähigkeiten, meine Kreativität und vor allem meine Lernerfahrungen nutzen kann, um meine Karriere zu entwickeln und zum Wachstum der Organisation beizutragen.",
    otherQualifications: [
      "Grundkenntnisse am Computer",
      "Zertifikat für fortgeschrittene Microsoft Excel-Kenntnisse"
    ],
    languages: "Bengali und Englisch",
    gender: "Männlich",
    nationality: "Bangladeschisch",
    maritalStatus: "Ledig",
    religion: "Islam",
    declaration: "Ich erkläre hiermit, dass die obigen Angaben nach bestem Wissen und Gewissen wahr sind.",
    place: "Dhaka"
  },
  fr: {
    jobTitle: "Étudiant",
    address: "Savar cantonment, Ashulia, Savar, Dhaka",
    objective: "Travailler dans un poste à responsabilité où je pourrais utiliser mes compétences interpersonnelles, ma créativité et surtout mes expériences d'apprentissage afin de développer ma carrière ainsi que de contribuer à la croissance de l'organisation.",
    otherQualifications: [
      "Connaissances de base en informatique",
      "Certification Microsoft Excel avancée"
    ],
    languages: "Bengali et anglais",
    gender: "Homme",
    nationality: "Bangladais",
    maritalStatus: "Célibataire",
    religion: "Islam",
    declaration: "Je déclare par la présente que les informations ci-dessus sont exactes au meilleur de mes connaissances et de mes croyances.",
    place: "Dacca"
  },
  it: {
    jobTitle: "Studente",
    address: "Savar cantonment, Ashulia, Savar, Dhaka",
    objective: "Lavorare in una posizione di responsabilità in cui poter utilizzare le mie capacità interpersonali, la creatività e, soprattutto, le mie esperienze di apprendimento per sviluppare la mia carriera e contribuire alla crescita dell'organizzazione.",
    otherQualifications: [
      "Conoscenze di base del computer",
      "Certificazione avanzata di Microsoft Excel"
    ],
    languages: "Bengalese e inglese",
    gender: "Maschio",
    nationality: "Bangladese",
    maritalStatus: "Celibe",
    religion: "Islam",
    declaration: "Con la presente dichiaro che le informazioni sopra riportate sono veritiere al meglio delle mie conoscenze e convinzioni.",
    place: "Dacca"
  },
  pt: {
    jobTitle: "Estudante",
    address: "Savar cantonment, Ashulia, Savar, Dhaka",
    objective: "Trabalhar em um cargo de responsabilidade onde eu possa usar minhas habilidades interpessoais, criatividade e, acima de tudo, minhas experiências de aprendizado para desenvolver minha carreira, bem como contribuir para o crescimento da organização.",
    otherQualifications: [
      "Conhecimento básico de informática",
      "Certificação Avançada em Microsoft Excel"
    ],
    languages: "Bengali e inglês",
    gender: "Masculino",
    nationality: "Bangladense",
    maritalStatus: "Solteiro",
    religion: "Islam",
    declaration: "Declaro que as informações acima prestadas são verdadeiras de acordo com o meu conhecimento e crença.",
    place: "Daca"
  },
  da: {
    jobTitle: "Studerende",
    address: "Savar cantonment, Ashulia, Savar, Dhaka",
    objective: "At arbejde i en ansvarsfuld stilling, hvor jeg kan bruge mine interpersonelle færdigheder, kreativitet og frem for alt mine læringserfaringer til at udvikle min karriere samt bidrage til organisationens vækst.",
    otherQualifications: [
      "Grundlæggende computerkendskab",
      "Avanceret Microsoft Excel-certificering"
    ],
    languages: "Bengalsk og engelsk",
    gender: "Mand",
    nationality: "Bangladesher",
    maritalStatus: "Ugift",
    religion: "Islam",
    declaration: "Jeg erklærer hermed, at ovenstående oplysninger er sande efter min bedste overbevisning.",
    place: "Dhaka"
  },
  no: {
    jobTitle: "Student",
    address: "Savar cantonment, Ashulia, Savar, Dhaka",
    objective: "Å jobbe i en ansvarsfull stilling der jeg kan bruke mine mellommenneskelige ferdigheter, kreativitet og fremfor alt mine læringserfaringer til å utvikle min karriere samt bidrage til organisasjonens vekst.",
    otherQualifications: [
      "Grunnleggende datakunnskaper",
      "Sertifisering i avansert Microsoft Excel"
    ],
    languages: "Bengalsk og engelsk",
    gender: "Mann",
    nationality: "Bangladesher",
    maritalStatus: "Ugift",
    religion: "Islam",
    declaration: "Jeg erklærer herved at ovenstående opplysninger er sanne etter min beste overbevisning.",
    place: "Dhaka"
  },
  ru: {
    jobTitle: "Студент",
    address: "Savar cantonment, Ashulia, Savar, Dhaka",
    objective: "Работать на ответственной должности, где я мог бы использовать свои навыки межличностного общения, творческий потенциал и, прежде всего, накопленный опыт для развития своей карьеры, а также для содействия росту организации.",
    otherQualifications: [
      "Базовые знания компьютера",
      "Сертификат о продвинутом знании Microsoft Excel"
    ],
    languages: "Бенгальский и английский",
    gender: "Мужской",
    nationality: "Бангладешец",
    maritalStatus: "Не женат",
    religion: "Ислам",
    declaration: "Настоящим заявляю, что вышеуказанная информация верна в меру моих знаний и убеждений.",
    place: "Дакка"
  },
  ja: {
    jobTitle: "学生",
    address: "Savar cantonment, Ashulia, Savar, Dhaka",
    objective: "対人スキル、創造性、工程管理能力、そして何よりもこれまでの学習経験を活かしてキャリアを発展させ、組織의成長に貢献できる、責任あるポジションで働くこと。",
    otherQualifications: [
      "コンピューターの基礎知識",
      "マイクロソフトエクセル上級認定"
    ],
    languages: "ベンガル語と英語",
    gender: "男性",
    nationality: "バングラデシュ人",
    maritalStatus: "未婚",
    religion: "イスラム教",
    declaration: "私はここに、私が提供した上記の情報が私の知る限り真実であることを宣言します。",
    place: "ダッカ"
  },
  ko: {
    jobTitle: "학생",
    address: "Savar cantonment, Ashulia, Savar, Dhaka",
    objective: "대인 관계 능력, 창의성, 그리고 무엇보다도 학습 경험을 활용하여 경력을 개발하고 조직의 성장에 기여할 수 있는 책임감 있는 직책에서 일하는 것입니다.",
    otherQualifications: [
      "컴퓨터 기초 지식",
      "고급 마이크로소프트 엑셀 인증"
    ],
    languages: "벵골어 및 영어",
    gender: "남성",
    nationality: "방글라데시인",
    maritalStatus: "미혼",
    religion: "이슬람교",
    declaration: "본인은 본인이 기재한 상기 정보가 사실임을 선언합니다.",
    place: "다카"
  },
  ms: {
    jobTitle: "Pelajar",
    address: "Savar cantonment, Ashulia, Savar, Dhaka",
    objective: "Bekerja dalam jawatan yang bertanggungjawab di mana saya boleh menggunakan kemahiran interpersonal, kreativiti, dan terutamanya pengalaman pembelajaran saya untuk membangunkan kerjaya saya serta menyumbang kepada pertumbuhan organisation.",
    otherQualifications: [
      "Pengetahuan Asas Komputer",
      "Sijil Microsoft Excel Lanjutan"
    ],
    languages: "Bengali dan Inggeris",
    gender: "Lelaki",
    nationality: "Bangladesh",
    maritalStatus: "Belum berkahwin",
    religion: "Islam",
    declaration: "Saya dengan ini mengesahkan bahawa maklumat di atas adalah benar berdasarkan pengetahuan saya.",
    place: "Dhaka"
  }
};

const BD_LABELS_TRANSLATIONS = {
  en: {
    resume: "RESUME",
    careerObjective: "CAREER OBJECTIVE",
    academicQualification: "ACADEMIC QUALIFICATION",
    otherQualification: "OTHER QUALIFICATION",
    personalInformation: "PERSONAL INFORMATION",
    declaration: "DECLARATION",
    sno: "S.No.",
    qualification: "Qualification",
    board: "University / Board",
    year: "Year",
    result: "Result",
    fathersName: "Father's Name",
    mothersName: "Mother's Name",
    dob: "Date of Birth",
    languages: "Language Known",
    gender: "Gender",
    nationality: "Nationality",
    maritalStatus: "Marital Status",
    religion: "Religion",
    bloodGroup: "Blood Group",
    height: "Height",
    weight: "Weight",
    signature: "SIGNATURE",
    dateLabel: "Date",
    placeLabel: "Place"
  },
  bn: {
    resume: "জীবনবৃত্তান্ত",
    careerObjective: "ক্যারিয়ার উদ্দেশ্য",
    academicQualification: "শিক্ষাগত যোগ্যতা",
    otherQualification: "অন্যান্য যোগ্যতা",
    personalInformation: "ব্যক্তিগত তথ্য",
    declaration: "ঘোষণা",
    sno: "ক্রমিক",
    qualification: "যোগ্যতা",
    board: "বিশ্ববিদ্যালয় / বোর্ড",
    year: "বছর",
    result: "ফলাফল",
    fathersName: "পিতার নাম",
    mothersName: "মাতার নাম",
    dob: "জন্ম তারিখ",
    languages: "পরিচিত ভাষা",
    gender: "লিঙ্গ",
    nationality: "জাতীয়তা",
    maritalStatus: "বৈবাহিক অবস্থা",
    religion: "ধর্ম",
    bloodGroup: "রক্তের গ্রুপ",
    height: "উচ্চতা",
    weight: "ওজন",
    signature: "স্বাক্ষর",
    dateLabel: "তারিখ",
    placeLabel: "স্থান"
  },
  de: {
    resume: "LEBENSLAUF",
    careerObjective: "BERUFLICHES ZIEL",
    academicQualification: "AKADEMISCHE QUALIFIKATION",
    otherQualification: "WEITERE QUALIFIKATIONEN",
    personalInformation: "PERSÖNLICHE ANGABEN",
    declaration: "ERKLÄRUNG",
    sno: "Nr.",
    qualification: "Qualifikation",
    board: "Universität / Behörde",
    year: "Jahr",
    result: "Ergebnis",
    fathersName: "Name des Vaters",
    mothersName: "Name der Mutter",
    dob: "Geburtsdatum",
    languages: "Sprachen",
    gender: "Geschlecht",
    nationality: "Staatsangehörigkeit",
    maritalStatus: "Familienstand",
    religion: "Religion",
    bloodGroup: "Blutgruppe",
    height: "Größe",
    weight: "Gewicht",
    signature: "UNTERSCHRIFT",
    dateLabel: "Datum",
    placeLabel: "Ort"
  },
  fr: {
    resume: "RÉSUMÉ",
    careerObjective: "OBJECTIF PROFESSIONNEL",
    academicQualification: "QUALIFICATIONS ACADÉMIQUES",
    otherQualification: "AUTRES QUALIFICATIONS",
    personalInformation: "INFORMATIONS PERSONNELLES",
    declaration: "DÉCLARATION",
    sno: "N°",
    qualification: "Qualification",
    board: "Université / Conseil",
    year: "Année",
    result: "Résultat",
    fathersName: "Nom du père",
    mothersName: "Nom de la mère",
    dob: "Date de naissance",
    languages: "Langues parlées",
    gender: "Genre",
    nationality: "Nationalité",
    maritalStatus: "État civil",
    religion: "Religion",
    bloodGroup: "Groupe sanguin",
    height: "Taille",
    weight: "Poids",
    signature: "SIGNATURE",
    dateLabel: "Date",
    placeLabel: "Lieu"
  },
  it: {
    resume: "CURRICULUM VITAE",
    careerObjective: "OBIETTIVO PROFESSIONALE",
    academicQualification: "QUALIFICA ACCADEMICA",
    otherQualification: "ALTRE QUALIFICHE",
    personalInformation: "INFORMAZIONI PERSONALI",
    declaration: "DICHIARAZIONE",
    sno: "N.",
    qualification: "Qualifica",
    board: "Università / Istituto",
    year: "Anno",
    result: "Risultato",
    fathersName: "Nome del padre",
    mothersName: "Nome della madre",
    dob: "Data di nascita",
    languages: "Lingue conosciute",
    gender: "Genere",
    nationality: "Nazionalità",
    maritalStatus: "Stato civile",
    religion: "Religione",
    bloodGroup: "Gruppo sanguigno",
    height: "Altezza",
    weight: "Peso",
    signature: "FIRMA",
    dateLabel: "Data",
    placeLabel: "Luogo"
  },
  pt: {
    resume: "CURRÍCULO",
    careerObjective: "OBJETIVO PROFISSIONAL",
    academicQualification: "QUALIFICAÇÃO ACADÊMICA",
    otherQualification: "OUTRAS QUALIFICAÇÕES",
    personalInformation: "INFORMAÇÕES PESSOAIS",
    declaration: "DECLARAÇÃO",
    sno: "Nº",
    qualification: "Qualificação",
    board: "Universidade / Conselho",
    year: "Ano",
    result: "Resultado",
    fathersName: "Nome do pai",
    mothersName: "Nome da mãe",
    dob: "Data de nascimento",
    languages: "Idiomas conhecidos",
    gender: "Gênero",
    nationality: "Nacionalidade",
    maritalStatus: "Estado civil",
    religion: "Religião",
    bloodGroup: "Grupo sanguíneo",
    height: "Altura",
    weight: "Peso",
    signature: "ASSINATURA",
    dateLabel: "Data",
    placeLabel: "Local"
  },
  da: {
    resume: "LEBENSFORLØB",
    careerObjective: "KARRIEREMÅL",
    academicQualification: "UDDANNELSESKVALIFIKATIONER",
    otherQualification: "ANDRE KVALIFIKATIONER",
    personalInformation: "PERSONLIGE OPLYSNINGER",
    declaration: "ERKLÆRING",
    sno: "Nr.",
    qualification: "Kvalifikation",
    board: "Universitet / Bestyrelse",
    year: "År",
    result: "Resultat",
    fathersName: "Fars navn",
    mothersName: "Mors navn",
    dob: "Fødselsdato",
    languages: "Kendte sprog",
    gender: "Køn",
    nationality: "Nationalitet",
    maritalStatus: "Civilstand",
    religion: "Religion",
    bloodGroup: "Blodtype",
    height: "Højde",
    weight: "Vægt",
    signature: "UNDERSKRIFT",
    dateLabel: "Dato",
    placeLabel: "Sted"
  },
  no: {
    resume: "CV",
    careerObjective: "KARRIEREMÅL",
    academicQualification: "UTDANNINGSKVALIFIKASJONER",
    otherQualification: "ANDRE KVALIFIKASJONER",
    personalInformation: "PERSONLIGE OPPLYSNINGER",
    declaration: "ERKLÆRING",
    sno: "Nr.",
    qualification: "Kvalifikasjon",
    board: "Universitet / Styret",
    year: "År",
    result: "Resultat",
    fathersName: "Fars navn",
    mothersName: "Mors navn",
    dob: "Fødselsdato",
    languages: "Kjente språk",
    gender: "Kjønn",
    nationality: "Nasjonalitet",
    maritalStatus: "Sivilstand",
    religion: "Religion",
    bloodGroup: "Blodtype",
    height: "Høyde",
    weight: "Vekt",
    signature: "SIGNATUR",
    dateLabel: "Dato",
    placeLabel: "Sted"
  },
  ru: {
    resume: "РЕЗЮМЕ",
    careerObjective: "ЦЕЛЬ КАРЬЕРЫ",
    academicQualification: "АКАДЕМИЧЕСКАЯ КВАЛИФИКАЦИЯ",
    otherQualification: "ДРУГИЕ КВАЛИФИКАЦИИ",
    personalInformation: "ЛИЧНАЯ ИНФОРМАЦИЯ",
    declaration: "ДЕКЛАРАЦИЯ",
    sno: "№",
    qualification: "Квалификация",
    board: "Университет / Совет",
    year: "Год",
    result: "Результат",
    fathersName: "Имя отца",
    mothersName: "Имя матери",
    dob: "Дата рождения",
    languages: "Владение языками",
    gender: "Пол",
    nationality: "Гражданство",
    maritalStatus: "Семейное положение",
    religion: "Религия",
    bloodGroup: "Группа крови",
    height: "Рост",
    weight: "Вес",
    signature: "ПОДПИСЬ",
    dateLabel: "Дата",
    placeLabel: "Место"
  },
  ja: {
    resume: "履歴書",
    careerObjective: "キャリア目標",
    academicQualification: "学歴・資格",
    otherQualification: "その他の資格",
    personalInformation: "個人情報",
    declaration: "本人署名",
    sno: "番号",
    qualification: "資格・学位",
    board: "学校名・機関",
    year: "年",
    result: "結果・成績",
    fathersName: "父の名前",
    mothersName: "母の名前",
    dob: "生年月日",
    languages: "語学力",
    gender: "性別",
    nationality: "国籍",
    maritalStatus: "配偶者",
    religion: "宗教",
    bloodGroup: "血液型",
    height: "身長",
    weight: "体重",
    signature: "署名",
    dateLabel: "日付",
    placeLabel: "場所"
  },
  ko: {
    resume: "이력서",
    careerObjective: "희망 업무 및 목표",
    academicQualification: "학력 사항",
    otherQualification: "기타 자격",
    personalInformation: "개인 정보",
    declaration: "서약 및 선언",
    sno: "번호",
    qualification: "자격 및 학위",
    board: "학교 / 기관",
    year: "년도",
    result: "결과",
    fathersName: "부친 성명",
    mothersName: "모친 성명",
    dob: "생년월일",
    languages: "가능 언어",
    gender: "성별",
    nationality: "국적",
    maritalStatus: "결혼 여부",
    religion: "종교",
    bloodGroup: "혈액형",
    height: "신장",
    weight: "체중",
    signature: "서명",
    dateLabel: "날짜",
    placeLabel: "장소"
  },
  ms: {
    resume: "RESUME",
    careerObjective: "OBJEKTIF KERJAYA",
    academicQualification: "KELAYAKAN AKADEMIK",
    otherQualification: "KELAYAKAN LAIN",
    personalInformation: "MAKLUMAT PERIBADI",
    declaration: "PENGESAHAN",
    sno: "Bil.",
    qualification: "Kelayakan",
    board: "Universiti / Lembaga",
    year: "Tahun",
    result: "Keputusan",
    fathersName: "Nama Bapa",
    mothersName: "Nama Ibu",
    dob: "Tarikh Lahir",
    languages: "Bahasa Diketahui",
    gender: "Jantina",
    nationality: "Kewarganegaraan",
    maritalStatus: "Status Perkahwinan",
    religion: "Agama",
    bloodGroup: "Kumpulan Darah",
    height: "Tinggi",
    weight: "Berat",
    signature: "TANDATANGAN",
    dateLabel: "Tarikh",
    placeLabel: "Tempat"
  }
};

function getCVDisplayValue(path, currentValue, lang) {
  const dict = DEFAULT_CV_DATA_TRANSLATIONS[lang] || DEFAULT_CV_DATA_TRANSLATIONS["en"];
  
  if (path === "jobTitle" && currentValue === DEFAULT_CV_DATA.jobTitle) {
    return dict.jobTitle;
  }
  if (path === "exp-company" && currentValue === DEFAULT_CV_DATA.experience.entries[0].company) {
    return dict.exp_company;
  }
  if (path === "exp-role" && currentValue === DEFAULT_CV_DATA.experience.entries[0].role) {
    return dict.exp_role;
  }
  if (path === "edu-college" && currentValue === DEFAULT_CV_DATA.education.entries[0].college) {
    return dict.edu_college;
  }
  if (path === "edu-degree" && currentValue === DEFAULT_CV_DATA.education.entries[0].role) {
    return dict.edu_degree;
  }
  
  return currentValue;
}
"""
    # Let's insert the new Constants code above COUNTRY_TEMPLATE_CONFIGS definition
    content = content.replace("const COUNTRY_TEMPLATE_CONFIGS = {", new_constants_code + "\nconst COUNTRY_TEMPLATE_CONFIGS = {")

    # 3. Rewrite getBangladeshCVHtml to dynamically translate fields
    # Let's inspect getBangladeshCVHtml structure
    old_bd_html_prefix = """function getBangladeshCVHtml(cv, settings) {
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
      height: "5'11\\"",
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

  const lang = appState.language || "en";
  const isBn = lang === "bn";

  // Translate labels if language is Bengali
  const labels = {
    resume: isBn ? "জীবনবৃত্তান্ত" : "RESUME",
    careerObjective: isBn ? "ক্যারিয়ার উদ্দেশ্য" : "CAREER OBJECTIVE",
    academicQualification: isBn ? "শিক্ষাগত যোগ্যতা" : "ACADEMIC QUALIFICATION",
    otherQualification: isBn ? "অন্যান্য যোগ্যতা" : "OTHER QUALIFICATION",
    personalInformation: isBn ? "ব্যক্তিगत তথ্য" : "PERSONAL INFORMATION",
    declaration: isBn ? "ঘোষণা" : "DECLARATION",
    sno: isBn ? "ক্রমিক" : "S.No.",
    qualification: isBn ? "যোগ্যতা" : "Qualification",
    board: isBn ? "বিশ্ববিদ্যালয় / বোর্ড" : "University / Board",
    year: isBn ? "বছর" : "Year",
    result: isBn ? "ফলাফল" : "Result",
    fathersName: isBn ? "পিতার নাম" : "Father's Name",
    mothersName: isBn ? "মাতার নাম" : "Mother's Name",
    dob: isBn ? "জন্ম তারিখ" : "Date of Birth",
    languages: isBn ? "জানাগেছে ভাষা" : "Language Known",
    gender: isBn ? "লিঙ্গ" : "Gender",
    nationality: isBn ? "জাতীয়তা" : "Nationality",
    maritalStatus: isBn ? "বৈবাহিক অবস্থা" : "Marital Status",
    religion: isBn ? "ধর্ম" : "Religion",
    bloodGroup: isBn ? "রক্তের গ্রুপ" : "Blood Group",
    height: isBn ? "উচ্চতা" : "Height",
    weight: isBn ? "ওজন" : "Weight",
    signature: isBn ? "স্বাক্ষর" : "SIGNATURE",
    dateLabel: isBn ? "তারিখ" : "Date",
    placeLabel: isBn ? "স্থান" : "Place"
  };"""

    # We replace getBangladeshCVHtml implementation to dynamically load labels and translate default values
    new_bd_html_prefix = """function getBangladeshCVHtml(cv, settings) {
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
      height: "5'11\\"",
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

  const lang = appState.language || "en";
  
  // Use fully translated labels from BD_LABELS_TRANSLATIONS
  const labels = BD_LABELS_TRANSLATIONS[lang] || BD_LABELS_TRANSLATIONS["en"];
  
  // Load translated default values if content hasn't been edited
  const bdDict = DEFAULT_BD_CV_DATA_TRANSLATIONS[lang] || DEFAULT_BD_CV_DATA_TRANSLATIONS["en"];
  const displayJobTitle = data.jobTitle === DEFAULT_BD_CV_DATA.jobTitle ? bdDict.jobTitle : data.jobTitle;
  const displayAddress = data.contact.address === DEFAULT_BD_CV_DATA.contact.address ? bdDict.address : data.contact.address;
  const displayObjective = data.objective === DEFAULT_BD_CV_DATA.objective ? bdDict.objective : data.objective;
  
  const displayPersonalInfo = {};
  for (const key in data.personalInfo) {
    if (data.personalInfo[key] === DEFAULT_BD_CV_DATA.personalInfo[key]) {
      displayPersonalInfo[key] = bdDict[key] || data.personalInfo[key];
    } else {
      displayPersonalInfo[key] = data.personalInfo[key];
    }
  }

  const displayDeclaration = data.declaration === DEFAULT_BD_CV_DATA.declaration ? bdDict.declaration : data.declaration;
  const displayPlace = data.place === DEFAULT_BD_CV_DATA.place ? bdDict.place : data.place;"""

    content = content.replace(old_bd_html_prefix, new_bd_html_prefix)

    # Let's also update the variables referenced inside getBangladeshCVHtml return string to use these display variables
    content = content.replace('subtitle" contenteditable="true" id="cv-name" data-type="bd-name">${data.name}</h1>', 'subtitle" contenteditable="true" id="cv-name" data-type="bd-name">${data.name}</h1>') # wait, that's fine
    content = content.replace('<p class="cv-bd-subtitle" contenteditable="true" id="cv-job-title" data-type="bd-jobTitle">${data.jobTitle}</p>', '<p class="cv-bd-subtitle" contenteditable="true" id="cv-job-title" data-type="bd-jobTitle">${displayJobTitle}</p>')
    content = content.replace('<span contenteditable="true" data-type="bd-address">${data.contact.address}</span>', '<span contenteditable="true" data-type="bd-address">${displayAddress}</span>')
    content = content.replace('<div class="cv-bd-section-content" contenteditable="true" data-type="bd-objective">${data.objective}</div>', '<div class="cv-bd-section-content" contenteditable="true" data-type="bd-objective">${displayObjective}</div>')
    content = content.replace('data-type="bd-personal" data-field="fathersName">${data.personalInfo.fathersName}</span>', 'data-type="bd-personal" data-field="fathersName">${displayPersonalInfo.fathersName}</span>')
    content = content.replace('data-type="bd-personal" data-field="mothersName">${data.personalInfo.mothersName}</span>', 'data-type="bd-personal" data-field="mothersName">${displayPersonalInfo.mothersName}</span>')
    content = content.replace('data-type="bd-personal" data-field="dob">${data.personalInfo.dob}</span>', 'data-type="bd-personal" data-field="dob">${displayPersonalInfo.dob}</span>')
    content = content.replace('data-type="bd-personal" data-field="languages">${data.personalInfo.languages}</span>', 'data-type="bd-personal" data-field="languages">${displayPersonalInfo.languages}</span>')
    content = content.replace('data-type="bd-personal" data-field="gender">${data.personalInfo.gender}</span>', 'data-type="bd-personal" data-field="gender">${displayPersonalInfo.gender}</span>')
    content = content.replace('data-type="bd-personal" data-field="nationality">${data.personalInfo.nationality}</span>', 'data-type="bd-personal" data-field="nationality">${displayPersonalInfo.nationality}</span>')
    content = content.replace('data-type="bd-personal" data-field="maritalStatus">${data.personalInfo.maritalStatus}</span>', 'data-type="bd-personal" data-field="maritalStatus">${displayPersonalInfo.maritalStatus}</span>')
    content = content.replace('data-type="bd-personal" data-field="religion">${data.personalInfo.religion}</span>', 'data-type="bd-personal" data-field="religion">${displayPersonalInfo.religion}</span>')
    content = content.replace('data-type="bd-personal" data-field="bloodGroup">${data.personalInfo.bloodGroup}</span>', 'data-type="bd-personal" data-field="bloodGroup">${displayPersonalInfo.bloodGroup}</span>')
    content = content.replace('data-type="bd-personal" data-field="height">${data.personalInfo.height}</span>', 'data-type="bd-personal" data-field="height">${displayPersonalInfo.height}</span>')
    content = content.replace('data-type="bd-personal" data-field="weight">${data.personalInfo.weight}</span>', 'data-type="bd-personal" data-field="weight">${displayPersonalInfo.weight}</span>')
    content = content.replace('<div class="cv-bd-section-content cv-bd-declaration" contenteditable="true" data-type="bd-declaration">${data.declaration}</div>', '<div class="cv-bd-section-content cv-bd-declaration" contenteditable="true" data-type="bd-declaration">${displayDeclaration}</div>')
    content = content.replace('<div>${labels.placeLabel} : <span contenteditable="true" data-type="bd-place">${data.place}</span></div>', '<div>${labels.placeLabel} : <span contenteditable="true" data-type="bd-place">${displayPlace}</span></div>')
    
    # Translate qualifications list in return string
    content = content.replace('const otherItems = data.otherQualifications.map((item, idx) => `\\n    <li contenteditable="true" data-type="bd-other" data-index="${idx}">${item}</li>\\n  `).join(\'\');', 'const otherItems = displayOther.map((item, idx) => `\\n    <li contenteditable="true" data-type="bd-other" data-index="${idx}">${item}</li>\\n  `).join(\'\');')

    # 4. Modify updateLivePreview to handle translating generic layout
    old_preview_init_block = """    // Load Content fields
    const nameEl = document.getElementById("cv-name");
    if (nameEl) nameEl.textContent = cv.name;
    const titleEl = document.getElementById("cv-job-title");
    if (titleEl) titleEl.textContent = cv.jobTitle;

    // Re-order and render experience, education, skills
    const dynamicContainer = document.getElementById("cv-dynamic-sections");
    dynamicContainer.innerHTML = "";"""

    new_preview_init_block = """    // Load Content fields
    const nameEl = document.getElementById("cv-name");
    if (nameEl) nameEl.textContent = cv.name;
    const titleEl = document.getElementById("cv-job-title");
    if (titleEl) {
      titleEl.textContent = getCVDisplayValue("jobTitle", cv.jobTitle, appState.language);
    }

    // Re-order and render experience, education, skills
    const dynamicContainer = document.getElementById("cv-dynamic-sections");
    dynamicContainer.innerHTML = "";"""

    content = content.replace(old_preview_init_block, new_preview_init_block)

    # Let's update the dynamicContainer modules rendering in updateLivePreview
    old_exp_render_block = """      if (modId === "experience") {
        const sec = document.createElement("div");
        sec.className = "cv-render-section";
        sec.id = "cv-section-experience";
        sec.innerHTML = `
          <h2 class="cv-sec-title">${cv.experience.title}</h2>
          ${cv.experience.entries.map((entry, idx) => `
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
      }"""

    new_exp_render_block = """      if (modId === "experience") {
        const sec = document.createElement("div");
        sec.className = "cv-render-section";
        sec.id = "cv-section-experience";
        const sectionTitle = dict.work_history || cv.experience.title;
        sec.innerHTML = `
          <h2 class="cv-sec-title">${sectionTitle}</h2>
          ${cv.experience.entries.map((entry, idx) => {
            const displayCompany = getCVDisplayValue("exp-company", entry.company, appState.language);
            const displayRole = getCVDisplayValue("exp-role", entry.role, appState.language);
            const displayBullets = entry.bullets.map((b, bIdx) => {
              if (idx === 0 && DEFAULT_CV_DATA.experience.entries[0].bullets[bIdx] === b) {
                return DEFAULT_CV_DATA_TRANSLATIONS[appState.language]?.exp_bullets[bIdx] || b;
              }
              return b;
            });
            return `
            <div class="cv-entry">
              <div class="cv-entry-header">
                <span class="cv-company" contenteditable="true" data-type="exp-company" data-index="${idx}">${displayCompany}</span>
                <span class="cv-duration" contenteditable="true" data-type="exp-duration" data-index="${idx}">${entry.duration}</span>
              </div>
              <div class="cv-entry-role" contenteditable="true" data-type="exp-role" data-index="${idx}">${displayRole}</div>
              <ul class="cv-entry-bullets">
                ${displayBullets.map((b, bIdx) => `
                  <li contenteditable="true" data-type="exp-bullet" data-index="${idx}" data-bullet-index="${bIdx}">${b}</li>
                `).join('')}
              </ul>
            </div>
            `;
          }).join('')}
        `;
        dynamicContainer.appendChild(sec);
      }"""

    content = content.replace(old_exp_render_block, new_exp_render_block)

    old_edu_render_block = """      else if (modId === "education") {
        const sec = document.createElement("div");
        sec.className = "cv-render-section";
        sec.id = "cv-section-education";
        sec.innerHTML = `
          <h2 class="cv-sec-title">${cv.education.title}</h2>
          ${cv.education.entries.map((entry, idx) => `
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
      }"""

    new_edu_render_block = """      else if (modId === "education") {
        const sec = document.createElement("div");
        sec.className = "cv-render-section";
        sec.id = "cv-section-education";
        const sectionTitle = dict.education || cv.education.title;
        sec.innerHTML = `
          <h2 class="cv-sec-title">${sectionTitle}</h2>
          ${cv.education.entries.map((entry, idx) => {
            const displayCollege = getCVDisplayValue("edu-college", entry.college, appState.language);
            const displayDegree = getCVDisplayValue("edu-degree", entry.role, appState.language);
            return `
            <div class="cv-entry">
              <div class="cv-entry-header">
                <span class="cv-college" contenteditable="true" data-type="edu-college" data-index="${idx}">${displayCollege}</span>
                <span class="cv-duration" contenteditable="true" data-type="edu-duration" data-index="${idx}">${entry.duration}</span>
              </div>
              <div class="cv-entry-degree" contenteditable="true" data-type="edu-degree" data-index="${idx}">${displayDegree}</div>
            </div>
            `;
          }).join('')}
        `;
        dynamicContainer.appendChild(sec);
      }"""

    content = content.replace(old_edu_render_block, new_edu_render_block)

    old_skills_render_block = """      else if (modId === "skills") {
        const sec = document.createElement("div");
        sec.className = "cv-render-section";
        sec.id = "cv-section-skills";
        sec.innerHTML = `
          <h2 class="cv-sec-title">${cv.skills.title}</h2>
          <div class="cv-skills-grid">
            ${cv.skills.items.map((skill, idx) => `
              <span class="cv-skill-tag" contenteditable="true" data-type="skill-item" data-index="${idx}">${skill}</span>
            `).join('')}
          </div>
        `;
        dynamicContainer.appendChild(sec);
      }"""

    new_skills_render_block = """      else if (modId === "skills") {
        const sec = document.createElement("div");
        sec.className = "cv-render-section";
        sec.id = "cv-section-skills";
        const sectionTitle = dict.skills || cv.skills.title;
        sec.innerHTML = `
          <h2 class="cv-sec-title">${sectionTitle}</h2>
          <div class="cv-skills-grid">
            ${cv.skills.items.map((skill, idx) => {
              let displaySkill = skill;
              const defIdx = DEFAULT_CV_DATA.skills.items.indexOf(skill);
              if (defIdx !== -1) {
                displaySkill = DEFAULT_CV_DATA_TRANSLATIONS[appState.language]?.skills[defIdx] || skill;
              }
              return `
              <span class="cv-skill-tag" contenteditable="true" data-type="skill-item" data-index="${idx}">${displaySkill}</span>
              `;
            }).join('')}
          </div>
        `;
        dynamicContainer.appendChild(sec);
      }"""

    content = content.replace(old_skills_render_block, new_skills_render_block)

    # 5. Add customizer language selection handler in setupCustomizerControls
    old_setup_customizer_controls_start = """function setupCustomizerControls() {
  // Font Family Dropdown"""

    new_setup_customizer_controls_start = """function setupCustomizerControls() {
  // Language Select
  const customizerSelect = document.getElementById("customizer-lang-select");
  if (customizerSelect) {
    customizerSelect.value = appState.language;
    customizerSelect.addEventListener("change", (e) => {
      const lang = e.target.value;
      
      // Update State
      appState.language = lang;
      localStorage.setItem("global_resume_lang", lang);

      // Keep header active item in sync
      const items = document.querySelectorAll(".lang-dropdown-item");
      items.forEach(item => {
        if (item.dataset.lang === lang) {
          item.classList.add("active");
        } else {
          item.classList.remove("active");
        }
      });

      // Update header button text
      const btnText = document.getElementById("lang-btn-text");
      if (btnText) {
        btnText.textContent = lang.toUpperCase();
      }

      // Translate page and update preview
      translatePage(lang);
      
      const selectedName = customizerSelect.options[customizerSelect.selectedIndex].text;
      showToast(`Language switched to ${selectedName}`);
    });
  }

  // Font Family Dropdown"""

    content = content.replace(old_setup_customizer_controls_start, new_setup_customizer_controls_start)

    # 6. Update syncCustomizerControlsToState to sync customizer language dropdown
    old_sync_controls_start = """function syncCustomizerControlsToState() {
  const settings = appState.customizerSettings;

  // Dropdown"""

    new_sync_controls_start = """function syncCustomizerControlsToState() {
  const settings = appState.customizerSettings;

  // Language Select
  const customizerSelect = document.getElementById("customizer-lang-select");
  if (customizerSelect) {
    customizerSelect.value = appState.language;
  }

  // Dropdown"""

    content = content.replace(old_sync_controls_start, new_sync_controls_start)

    # 7. Update initLanguageDropdown to sync customizer language dropdown
    old_init_lang_switches = """      // Close dropdown
      container.classList.remove("open");

      // Translate the page
      translatePage(lang);

      showToast(`Language switched to ${item.querySelector(".lang-name").textContent}`);"""

    new_init_lang_switches = """      // Close dropdown
      container.classList.remove("open");

      // Keep customizer select dropdown in sync if it exists
      const customizerSelect = document.getElementById("customizer-lang-select");
      if (customizerSelect) {
        customizerSelect.value = lang;
      }

      // Translate the page
      translatePage(lang);

      showToast(`Language switched to ${item.querySelector(".lang-name").textContent}`);"""

    content = content.replace(old_init_lang_switches, new_init_lang_switches)

    # Keep initial customizer select in sync on load
    old_init_lang_on_load = """  // Set correct active item
  items.forEach(item => {
    if (item.dataset.lang === initialLang) {
      item.classList.add("active");
    } else {
      item.classList.remove("active");
    }
  });

  // Trigger initial translation"""

    new_init_lang_on_load = """  // Set correct active item
  items.forEach(item => {
    if (item.dataset.lang === initialLang) {
      item.classList.add("active");
    } else {
      item.classList.remove("active");
    }
  });

  // Keep customizer select dropdown in sync if it exists
  const customizerSelect = document.getElementById("customizer-lang-select");
  if (customizerSelect) {
    customizerSelect.value = initialLang;
  }

  // Trigger initial translation"""

    content = content.replace(old_init_lang_on_load, new_init_lang_on_load)

    # 8. Update translatePage to updateLivePreview at the end
    old_translate_page_end = """  // 3. Update sidebar module labels (they use data-i18n attributes, already handled above)
  // Re-apply to any dynamically rendered module items
  document.querySelectorAll(".module-item [data-i18n]").forEach(el => {
    const key = el.dataset.i18n;
    if (dict[key]) el.textContent = dict[key];
  });
}"""

    new_translate_page_end = """  // 3. Update sidebar module labels (they use data-i18n attributes, already handled above)
  // Re-apply to any dynamically rendered module items
  document.querySelectorAll(".module-item [data-i18n]").forEach(el => {
    const key = el.dataset.i18n;
    if (dict[key]) el.textContent = dict[key];
  });

  // 4. Update Live Preview with translated contents
  updateLivePreview();
}"""

    content = content.replace(old_translate_page_end, new_translate_page_end)

    with open(file_path, "w", encoding="utf-8") as f:
        f.write(content)

    print("Successfully edited app.js")

if __name__ == "__main__":
    main()
