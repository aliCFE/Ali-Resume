/* ═══════════════════════════════════════════════════════════════
   CV_DATA — single source of truth for the whole site.
   Every user-visible string is { en, ar }. Edit here, nowhere else.
   ═══════════════════════════════════════════════════════════════ */

const UI = {
  en: {
    'a11y.skip': 'Skip to content',
    'nav.home': 'Home',
    'nav.about': 'About',
    'nav.experience': 'Experience',
    'nav.projects': 'Projects',
    'nav.skills': 'Skills',
    'nav.education': 'Education',
    'nav.contact': 'Contact',
    'nav.cv': 'Resume',

    'hero.badge': 'Open to opportunities',
    'hero.hi': "Hi, I'm",
    'hero.bio': 'I build responsive, accessible web platforms — and I run the company that ships them. Three years across front-end engineering, full-stack delivery, data analysis and technical education.',
    'hero.ctaWork': 'View my work',
    'hero.ctaHire': 'Get in touch',
    'hero.scroll': 'Scroll',

    'about.kicker': 'Who I am',
    'about.title': 'About me',
    'about.sub': 'A developer who spends as much time explaining code as writing it — and now runs a team that ships it.',
    'about.p1': "I'm the Founder and CEO of Nova, a software company building websites and mobile applications. I'm also a Front-End Developer, Data Analyst and Programming Instructor with 3+ years of experience creating responsive, accessible web platforms and delivering tech education to 250+ students.",
    'about.p2': 'At Nova I own the technical direction end to end and have shipped four production platforms — including al-bahith.com, an AI academic assistant with a pluggable OpenAI/Claude provider layer, and almubdiat.com, a full school portal with grading and installment management. I work in React.js, JavaScript, PHP, MySQL and Java, and I care about the details that make an interface feel fast.',
    'about.p3': 'Before Nova I was Academic Head at Minders, supervising 20 instructors across 9 technical tracks and recognized as Best Head of the season. Outside of work I compete in algorithmic programming — ranked 1st in Iraq for problem solving on Codeforces with 500+ problems solved, and rated Pupil there. I hold a BSc in Computer Science & Artificial Intelligence from Cairo University.',

    'exp.kicker': 'Career path',
    'exp.title': 'Experience',
    'exp.sub': 'Eight roles across company leadership, engineering, analytics and education.',
    'exp.featured': 'Featured',

    'proj.kicker': 'Selected work',
    'proj.title': 'Projects',
    'proj.sub': 'Ten production platforms, systems and games — four of them shipped through Nova.',

    'skills.kicker': 'Toolbox',
    'skills.title': 'Skills',
    'skills.sub': 'The languages, frameworks and tools I reach for.',

    'edu.kicker': 'Background',
    'edu.title': 'Education & Certifications',
    'edu.sub': 'Where I studied and what I have certified since.',
    'edu.degreeTitle': 'Education',
    'edu.certTitle': 'Certifications',

    'ach.kicker': 'Beyond the code',
    'ach.title': 'Achievements & Languages',
    'ach.sub': 'Competitive programming, recognition and the languages I speak.',
    'ach.langTitle': 'Languages',

    'contact.kicker': 'Say hello',
    'contact.title': "Let's work together",
    'contact.sub': "Available for front-end, data and teaching roles. I usually reply within a day.",
    'contact.name': 'Your name',
    'contact.email': 'Email address',
    'contact.subject': 'Subject',
    'contact.message': 'Message',
    'contact.send': 'Send message',
    'contact.formHint': 'This opens your email app with the message ready to send.',

    'footer.note': 'Founder & CEO at Nova. Front-End Developer, Data Analyst and Programming Instructor based in Baghdad, Iraq.',
    'footer.rights': 'All rights reserved.',

    'ui.all': 'All',
    'ui.present': 'Present',
    'ui.current': 'Current role',
    'ui.concurrent': 'Held alongside another role',
    'ui.details': 'View details',
    'ui.visit': 'Visit site',
    'ui.close': 'Close',
    'ui.highlights': 'Highlights',
    'ui.tech': 'Built with',
    'ui.copy': 'Copy',
    'ui.copied': 'Copied to clipboard',
    'ui.copyFail': 'Could not copy — please select it manually',
    'ui.formIncomplete': 'Please fill in your name, email and message.',
    'ui.formBadEmail': 'That email address looks incorrect.',
    'ui.formOpening': 'Opening your email app…',
    'ui.themeLight': 'Light mode',
    'ui.themeDark': 'Dark mode',
    'ui.langSwitch': 'التبديل إلى العربية'
  },

  ar: {
    'a11y.skip': 'تخطَّ إلى المحتوى',
    'nav.home': 'الرئيسية',
    'nav.about': 'نبذة',
    'nav.experience': 'الخبرات',
    'nav.projects': 'المشاريع',
    'nav.skills': 'المهارات',
    'nav.education': 'الدراسة',
    'nav.contact': 'تواصل',
    'nav.cv': 'السيرة الذاتية',

    'hero.badge': 'متاح لفرص العمل',
    'hero.hi': 'مرحباً، أنا',
    'hero.bio': 'أبني منصّات ويب سريعة الاستجابة وسهلة الوصول — وأقود الشركة التي تُطلقها. ثلاث سنوات بين تطوير الواجهات والتطوير المتكامل وتحليل البيانات والتعليم التقني.',
    'hero.ctaWork': 'شاهد أعمالي',
    'hero.ctaHire': 'تواصل معي',
    'hero.scroll': 'انزل',

    'about.kicker': 'من أنا',
    'about.title': 'نبذة عني',
    'about.sub': 'مطوّر يقضي في شرح الكود وقتاً لا يقلّ عن وقت كتابته — ويقود اليوم فريقاً يُطلقه.',
    'about.p1': 'مؤسّس ورئيس تنفيذي لشركة Nova لبرمجة المواقع والتطبيقات. وأيضاً مطوّر واجهات أمامية ومحلّل بيانات ومدرّب برمجة، بخبرة تتجاوز ثلاث سنوات في بناء منصّات ويب سريعة الاستجابة وسهلة الوصول، وتقديم تعليم تقني لأكثر من ٢٥٠ طالباً.',
    'about.p2': 'في Nova أقود التوجّه التقني من البداية للنهاية، وأطلقت أربع منصّات في الإنتاج — منها al-bahith.com، وهو مساعد أكاديمي ذكي بطبقة مزوّدين قابلة للتبديل بين OpenAI وClaude، وalmubdiat.com، بوابة مدرسية متكاملة بإدارة درجات وأقساط. أعمل بـ React.js وJavaScript وPHP وMySQL وJava، وأهتم بالتفاصيل التي تجعل الواجهة تبدو سريعة.',
    'about.p3': 'قبل Nova كنت رئيس اللجنة الأكاديمية في Minders، أشرفت على ٢٠ مدرّباً في ٩ مسارات تقنية واختِرت أفضل رئيس لجنة في الموسم. وخارج العمل أنافس في البرمجة الخوارزمية — الأول على العراق في حلّ المسائل على Codeforces بأكثر من ٥٠٠ مسألة، وبمرتبة Pupil عليها. حاصل على بكالوريوس علوم الحاسوب والذكاء الاصطناعي من جامعة القاهرة.',

    'exp.kicker': 'المسار المهني',
    'exp.title': 'الخبرات العملية',
    'exp.sub': 'ثمانية أدوار بين قيادة الشركة والهندسة والتحليل والتعليم.',
    'exp.featured': 'مميّز',

    'proj.kicker': 'مختارات من الأعمال',
    'proj.title': 'المشاريع',
    'proj.sub': 'عشر منصّات وأنظمة وألعاب في الإنتاج — أربعة منها عبر شركة Nova.',

    'skills.kicker': 'أدواتي',
    'skills.title': 'المهارات',
    'skills.sub': 'اللغات وأطر العمل والأدوات التي أعتمد عليها.',

    'edu.kicker': 'الخلفية العلمية',
    'edu.title': 'الدراسة والشهادات',
    'edu.sub': 'أين درست، وما الشهادات التي حصلت عليها بعدها.',
    'edu.degreeTitle': 'الدراسة',
    'edu.certTitle': 'الشهادات',

    'ach.kicker': 'ما وراء الكود',
    'ach.title': 'الإنجازات واللغات',
    'ach.sub': 'البرمجة التنافسية، والتكريمات، واللغات التي أتحدّثها.',
    'ach.langTitle': 'اللغات',

    'contact.kicker': 'ألقِ التحية',
    'contact.title': 'لنعمل معاً',
    'contact.sub': 'متاح لأدوار تطوير الواجهات وتحليل البيانات والتدريب. عادةً أردّ خلال يوم واحد.',
    'contact.name': 'اسمك',
    'contact.email': 'البريد الإلكتروني',
    'contact.subject': 'الموضوع',
    'contact.message': 'الرسالة',
    'contact.send': 'أرسل الرسالة',
    'contact.formHint': 'سيفتح هذا تطبيق البريد لديك والرسالة جاهزة للإرسال.',

    'footer.note': 'مؤسّس ورئيس تنفيذي في Nova. مطوّر واجهات أمامية ومحلّل بيانات ومدرّب برمجة، مقيم في بغداد، العراق.',
    'footer.rights': 'جميع الحقوق محفوظة.',

    'ui.all': 'الكل',
    'ui.present': 'حتى الآن',
    'ui.current': 'الدور الحالي',
    'ui.concurrent': 'بالتوازي مع دور آخر',
    'ui.details': 'التفاصيل',
    'ui.visit': 'زيارة الموقع',
    'ui.close': 'إغلاق',
    'ui.highlights': 'أبرز النقاط',
    'ui.tech': 'التقنيات',
    'ui.copy': 'نسخ',
    'ui.copied': 'تم النسخ',
    'ui.copyFail': 'تعذّر النسخ — رجاءً حدّده يدوياً',
    'ui.formIncomplete': 'رجاءً املأ الاسم والبريد والرسالة.',
    'ui.formBadEmail': 'البريد الإلكتروني غير صحيح.',
    'ui.formOpening': 'يتم فتح تطبيق البريد…',
    'ui.themeLight': 'الوضع النهاري',
    'ui.themeDark': 'الوضع الليلي',
    'ui.langSwitch': 'Switch to English'
  }
};

const CV = {
  profile: {
    name:     { en: 'Ali Mohammed', ar: 'علي محمد' },
    initials: 'AM',
    email:    'alanialimoh@gmail.com',
    phone:    '+9647816763549',
    location: { en: 'Baghdad, Iraq', ar: 'بغداد، العراق' },
    linkedin: 'https://www.linkedin.com/in/ali-al-ani-84ab26261/',
    resume:   'assets/files/Ali_Mohammed_CV.pdf',
    roles: {
      en: ['Founder & CEO at Nova', 'Front-End Developer', 'Data Analyst', 'Programming Instructor'],
      ar: ['مؤسّس ورئيس تنفيذي في Nova', 'مطوّر واجهات أمامية', 'محلّل بيانات', 'مدرّب برمجة']
    }
  },

  socials: [
    { id: 'mail',     icon: 'mail',     label: { en: 'Email',    ar: 'البريد' },  href: 'mailto:alanialimoh@gmail.com' },
    { id: 'linkedin', icon: 'linkedin', label: { en: 'LinkedIn', ar: 'لينكدإن' }, href: 'https://www.linkedin.com/in/ali-al-ani-84ab26261/' },
    { id: 'phone',    icon: 'phone',    label: { en: 'Phone',    ar: 'الهاتف' },  href: 'tel:+9647816763549' }
  ],

  stats: [
    { value: 3,   suffix: '+', label: { en: 'Years of experience',  ar: 'سنوات خبرة' },        icon: 'clock' },
    { value: 10,  suffix: '',  label: { en: 'Platforms shipped',    ar: 'منصّة تم إطلاقها' },   icon: 'rocket' },
    { value: 250, suffix: '+', label: { en: 'Students taught',      ar: 'طالب تم تدريسهم' },   icon: 'users' },
    { value: 500, suffix: '+', label: { en: 'Problems solved',      ar: 'مسألة محلولة' },      icon: 'terminal' },
    { value: 20,  suffix: '',  label: { en: 'Instructors led',      ar: 'مدرّباً تحت إشرافي' }, icon: 'award' }
  ],

  heroMeta: [
    { icon: 'pin',      text: { en: 'Baghdad, Iraq',            ar: 'بغداد، العراق' } },
    { icon: 'rocket',   text: { en: 'Founder & CEO at Nova',    ar: 'مؤسّس ورئيس تنفيذي في Nova' } },
    { icon: 'cap',      text: { en: 'BSc Computer Science & AI', ar: 'بكالوريوس علوم حاسوب وذكاء اصطناعي' } },
    { icon: 'trophy',   text: { en: '1st in Iraq — Codeforces problem solving', ar: 'الأول على العراق في حلّ المسائل على Codeforces' } }
  ],

  aboutTags: {
    en: ['React.js', 'JavaScript', 'PHP', 'MySQL', 'Python', 'Java', 'C++', 'Data Analysis', 'Leadership'],
    ar: ['React.js', 'JavaScript', 'PHP', 'MySQL', 'Python', 'Java', 'C++', 'تحليل بيانات', 'قيادة']
  },

  aboutCards: [
    {
      icon: 'rocket',
      title: { en: 'Building Nova', ar: 'قيادة Nova' },
      text: {
        en: 'Founder and CEO of a software company delivering websites and apps — four production platforms shipped for clients in education, e-commerce and academic services.',
        ar: 'مؤسّس ورئيس تنفيذي لشركة برمجيات تبني المواقع والتطبيقات — أربع منصّات في الإنتاج لعملاء في التعليم والتجارة الإلكترونية والخدمات الأكاديمية.'
      }
    },
    {
      icon: 'code',
      title: { en: 'Full-Stack Delivery', ar: 'تطوير متكامل' },
      text: {
        en: 'React.js and vanilla JavaScript on the front, PHP and MySQL behind it — plus AI integrations with OpenAI and Anthropic Claude on al-bahith.com.',
        ar: 'React.js وJavaScript في الواجهة، وPHP وMySQL في الخلفية — مع دمج الذكاء الاصطناعي عبر OpenAI وAnthropic Claude في al-bahith.com.'
      }
    },
    {
      icon: 'chart',
      title: { en: 'Data Analysis', ar: 'تحليل البيانات' },
      text: {
        en: 'Forecasting demand across 15+ manufacturing partners, spotting stagnant inventory and turning procurement data into purchasing decisions.',
        ar: 'التنبّؤ بالطلب عبر أكثر من ١٥ شريكاً صناعياً، ورصد المخزون الراكد، وتحويل بيانات المشتريات إلى قرارات شراء.'
      }
    },
    {
      icon: 'users',
      title: { en: 'Teaching & Leadership', ar: 'التدريس والقيادة' },
      text: {
        en: '250+ students aged 8–17 taught Scratch, Python and flowcharts. 20 instructors supervised across 9 technical tracks as Academic Head.',
        ar: 'أكثر من ٢٥٠ طالباً بين ٨ و١٧ سنة تعلّموا Scratch وPython والمخططات الانسيابية. والإشراف على ٢٠ مدرّباً في ٩ مسارات تقنية.'
      }
    }
  ],

  experience: [
    {
      role:    { en: 'Founder & CEO', ar: 'المؤسس والرئيس التنفيذي' },
      company: 'Nova',
      period:  { en: 'Apr 2026 – Present', ar: 'أبريل ٢٠٢٦ – حتى الآن' },
      current: true,
      featured: true,
      tags: ['Leadership', 'Full-Stack', 'PHP', 'MySQL', 'Client Delivery'],
      bullets: [
        { en: 'Founded and lead Nova, a software company building websites and mobile applications for clients across education, e-commerce and academic services.',
          ar: 'تأسيس وقيادة شركة Nova لبرمجة المواقع والتطبيقات، وخدمة عملاء في قطاعات التعليم والتجارة الإلكترونية والخدمات الأكاديمية.' },
        { en: 'Own technical direction end to end — requirements, architecture, stack decisions, code review and delivery against client deadlines.',
          ar: 'قيادة التوجّه التقني من البداية للنهاية — المتطلبات والبنية واختيار التقنيات ومراجعة الكود والتسليم ضمن المواعيد.' },
        { en: 'Shipped and maintain four production platforms: al-bahith.com, almubdiat.com, westboxstore.com and wahajedu.com.',
          ar: 'إطلاق وصيانة أربع منصّات في الإنتاج: al-bahith.com وalmubdiat.com وwestboxstore.com وwahajedu.com.' },
        { en: 'Build and lead the development team, setting engineering standards and distributing work across concurrent projects.',
          ar: 'بناء فريق التطوير وقيادته، ووضع معايير هندسية، وتوزيع العمل على مشاريع متوازية.' },
        { en: 'Manage client relationships directly — scoping, pricing, launch, hosting and post-launch support.',
          ar: 'إدارة العلاقة مع العملاء مباشرة — تحديد النطاق والتسعير والإطلاق والاستضافة والدعم بعد الإطلاق.' }
      ]
    },
    {
      role:    { en: 'Branch Manager', ar: 'مدير فرع' },
      company: 'Go Academy',
      period:  { en: 'Jan 2025 – Present', ar: 'يناير ٢٠٢٥ – حتى الآن' },
      current: true,
      concurrent: true,
      tags: ['Leadership', 'Quality Assurance', 'Operations'],
      bullets: [
        { en: 'Supervise and support teaching staff, ensuring high-quality lesson delivery and consistent academic standards.',
          ar: 'الإشراف على الكادر التدريسي ودعمه، وضمان جودة تقديم الدروس واتساق المعايير الأكاديمية.' },
        { en: 'Monitor and evaluate classroom performance, providing feedback to improve teaching effectiveness.',
          ar: 'متابعة أداء الصفوف وتقييمه، وتقديم ملاحظات ترفع من فاعلية التدريس.' },
        { en: 'Ensure a high-quality learning experience for students by maintaining structured processes.',
          ar: 'ضمان تجربة تعليمية عالية الجودة للطلاب عبر الحفاظ على عمليات منظّمة.' }
      ]
    },
    {
      role:    { en: 'Data Analyst', ar: 'محلّل بيانات' },
      company: 'Atlas Plast',
      period:  { en: 'Nov 2025 – Mar 2026', ar: 'نوفمبر ٢٠٢٥ – مارس ٢٠٢٦' },
      concurrent: true,
      tags: ['Demand Forecasting', 'Inventory', 'Procurement'],
      bullets: [
        { en: 'Analyzed procurement and sales data across 15+ manufacturing partners to forecast demand and optimize purchasing decisions, reducing overstock and improving inventory efficiency.',
          ar: 'تحليل بيانات المشتريات والمبيعات لأكثر من ١٥ شريكاً صناعياً للتنبّؤ بالطلب وتحسين قرارات الشراء، ما قلّل فائض المخزون ورفع كفاءته.' },
        { en: 'Collaborated with suppliers to manage purchasing plans and ensure timely availability of materials based on data-driven demand predictions for upcoming months.',
          ar: 'التنسيق مع المورّدين لإدارة خطط الشراء وضمان توفّر المواد في وقتها، استناداً إلى توقّعات طلب مبنية على البيانات للأشهر القادمة.' },
        { en: 'Identified slow-moving and stagnant inventory items through data analysis, supporting strategic decisions to improve stock turnover and maximize sales opportunities.',
          ar: 'تحديد الأصناف بطيئة الحركة والراكدة عبر تحليل البيانات، بما يدعم قرارات استراتيجية لتحسين دوران المخزون وزيادة فرص البيع.' }
      ]
    },
    {
      role:    { en: 'Academic Head', ar: 'رئيس اللجنة الأكاديمية' },
      company: 'Minders',
      period:  { en: 'Oct 2024 – Oct 2025', ar: 'أكتوبر ٢٠٢٤ – أكتوبر ٢٠٢٥' },
      tags: ['Mentorship', 'Strategy', 'Public Speaking'],
      bullets: [
        { en: 'Supervised 20 instructors across 9 technical tracks, maintaining academic quality and engagement.',
          ar: 'الإشراف على ٢٠ مدرّباً في ٩ مسارات تقنية، مع الحفاظ على الجودة الأكاديمية والتفاعل.' },
        { en: 'Designed and executed a strategic plan emphasizing programming, public speaking, and team collaboration.',
          ar: 'تصميم وتنفيذ خطة استراتيجية تركّز على البرمجة والإلقاء والعمل الجماعي.' },
        { en: 'Mentored new instructors, improving their communication, teaching, and leadership skills.',
          ar: 'إرشاد المدرّبين الجدد وتطوير مهاراتهم في التواصل والتدريس والقيادة.' },
        { en: 'Recognized as Best Head of the season.',
          ar: 'اختير أفضل رئيس لجنة في الموسم.', award: true }
      ]
    },
    {
      role:    { en: 'Front-End Developer Intern', ar: 'متدرّب تطوير واجهات أمامية' },
      company: 'KeraLink',
      period:  { en: 'Aug 2024 – Oct 2024', ar: 'أغسطس ٢٠٢٤ – أكتوبر ٢٠٢٤' },
      tags: ['HTML', 'CSS', 'JavaScript', 'Performance'],
      bullets: [
        { en: 'Developed and maintained KeraLink.net, a digital eye care platform, ensuring responsiveness.',
          ar: 'تطوير وصيانة KeraLink.net، وهي منصّة رقمية للعناية بالعيون، مع ضمان استجابتها لكل الشاشات.' },
        { en: 'Developed and deployed reusable front-end components and implemented dynamic routing for go-academy.net, using HTML, CSS, and JavaScript, improving page load time and scalability.',
          ar: 'بناء ونشر مكوّنات واجهة قابلة لإعادة الاستخدام وتنفيذ توجيه ديناميكي لموقع go-academy.net باستخدام HTML وCSS وJavaScript، ما حسّن زمن التحميل وقابلية التوسّع.' },
        { en: 'Ensured fast load times by applying performance optimization techniques, including lazy loading and component memorization.',
          ar: 'ضمان سرعة التحميل عبر تقنيات تحسين الأداء، ومنها التحميل الكسول وتخزين نتائج المكوّنات.' }
      ]
    },
    {
      role:    { en: 'Programming Instructor', ar: 'مدرّب برمجة' },
      company: 'Go Academy, iSchool',
      period:  { en: 'Feb 2024 – Feb 2025', ar: 'فبراير ٢٠٢٤ – فبراير ٢٠٢٥' },
      tags: ['Scratch', 'Python', 'code.org'],
      bullets: [
        { en: 'Delivered Scratch, Python, and Flowchart-based lessons to 250+ students (ages 8–17).',
          ar: 'تقديم دروس بـ Scratch وPython والمخططات الانسيابية لأكثر من ٢٥٠ طالباً (٨–١٧ سنة).' },
        { en: 'Planned and delivered interactive lessons, simplifying complex concepts and making them accessible for young learners.',
          ar: 'تخطيط وتقديم دروس تفاعلية تبسّط المفاهيم المعقّدة وتجعلها في متناول المتعلّمين الصغار.' },
        { en: 'Designed engaging projects using code.org and visual coding tools to support diverse learning styles.',
          ar: 'تصميم مشاريع محفّزة عبر code.org وأدوات البرمجة المرئية لدعم أنماط التعلّم المختلفة.' },
        { en: 'Collaborated with other instructors to create engaging activities and monitor student progress.',
          ar: 'التعاون مع بقية المدرّبين لابتكار أنشطة جاذبة ومتابعة تقدّم الطلاب.' }
      ]
    },
    {
      role:    { en: 'Academic Member', ar: 'عضو اللجنة الأكاديمية' },
      company: 'Minders',
      period:  { en: 'Jan 2024 – Sep 2024', ar: 'يناير ٢٠٢٤ – سبتمبر ٢٠٢٤' },
      tags: ['Python', 'Debugging', 'Mentorship'],
      bullets: [
        { en: 'Delivered engaging Python sessions to students through practical projects and teamwork-based learning.',
          ar: 'تقديم جلسات Python تفاعلية للطلاب عبر مشاريع عملية وتعلّم قائم على العمل الجماعي.' },
        { en: 'Provided personalized guidance and feedback to students, improving their understanding and confidence in coding.',
          ar: 'تقديم إرشاد وملاحظات فردية للطلاب، ما حسّن فهمهم وثقتهم في البرمجة.' },
        { en: 'Guided 10+ students through debugging and project-based exercises, enhancing their confidence in programming.',
          ar: 'مرافقة أكثر من ١٠ طلاب في تصحيح الأخطاء والتمارين المشروعية، ما عزّز ثقتهم بالبرمجة.' },
        { en: 'Recognized as Best Member in the Minders Academic Committee for outstanding performance and contribution.',
          ar: 'اختير أفضل عضو في اللجنة الأكاديمية بـ Minders لتميّز الأداء والمساهمة.', award: true }
      ]
    },
    {
      role:    { en: 'ICPC Mentor', ar: 'مرشد ICPC' },
      company: { en: 'Faculty of Computers and Artificial Intelligence, Cairo University',
                 ar: 'كلية الحاسبات والذكاء الاصطناعي، جامعة القاهرة' },
      period:  { en: 'Sep 2023 – Jan 2024', ar: 'سبتمبر ٢٠٢٣ – يناير ٢٠٢٤' },
      tags: ['Algorithms', 'Competitive Programming'],
      bullets: [
        { en: 'Mentored students in preparation for the International Collegiate Programming Contest (ICPC), focusing on algorithmic problem-solving and competitive programming techniques.',
          ar: 'إرشاد الطلاب استعداداً لمسابقة ICPC العالمية للبرمجة، مع التركيز على حلّ المسائل الخوارزمية وتقنيات البرمجة التنافسية.' }
      ]
    }
  ],

  projectFilters: [
    { id: 'all',      label: { en: 'All',          ar: 'الكل' } },
    { id: 'nova',     label: { en: 'Nova',         ar: 'شركة Nova' } },
    { id: 'web',      label: { en: 'Web',          ar: 'ويب' } },
    { id: 'software', label: { en: 'Software',     ar: 'برمجيات' } },
    { id: 'games',    label: { en: 'Games & AI',   ar: 'ألعاب وذكاء اصطناعي' } }
  ],

  projects: [
    {
      id: 'bahith',
      name: 'al-bahith.com',
      arName: { en: 'Baheth', ar: 'باحث' },
      cats: ['nova', 'web'],
      icon: 'brain',
      accent: 'violet',
      link: 'https://al-bahith.com',
      featured: true,
      tagline: { en: 'AI academic assistant for university students', ar: 'مساعد أكاديمي ذكي لطلبة الجامعات' },
      tech: ['PHP', 'MySQL', 'OpenAI', 'Anthropic Claude', 'CrossRef API'],
      bullets: [
        { en: 'Built a full SaaS platform in PHP and MySQL with a pluggable AI provider layer — OpenAI and Anthropic Claude are switchable from admin settings without touching any other page.',
          ar: 'بناء منصّة SaaS كاملة بـ PHP وMySQL بطبقة مزوّدي ذكاء اصطناعي قابلة للتبديل — OpenAI وAnthropic Claude يتبدّلان من إعدادات الإدارة دون تعديل أي صفحة أخرى.' },
        { en: 'Built a step-by-step research paper builder: AI-suggested outlines, per-section generation, a rich-text editor with autosave and inline AI rewriting, source uploads, APA7 references and real .docx export.',
          ar: 'منشئ أوراق بحثية خطوة بخطوة: مخططات مقترحة بالذكاء الاصطناعي، وتوليد لكل قسم، ومحرّر نصوص بحفظ تلقائي وأدوات إعادة صياغة، ورفع مصادر، ومراجع APA7، وتصدير Word حقيقي.' },
        { en: 'Integrated CrossRef for real indexed academic sources (not AI-generated), plus a reference manager with automatic APA, MLA and Chicago formatting.',
          ar: 'دمج CrossRef لجلب مصادر أكاديمية مفهرسة حقيقية (غير مولّدة بالذكاء الاصطناعي)، مع منظّم مراجع بتنسيق APA وMLA وChicago تلقائياً.' },
        { en: 'Added PDF/Word document analysis with follow-up questions, and real downloadable PowerPoint (.pptx) generation from a topic or a saved research plan.',
          ar: 'تحليل مستندات PDF وWord مع أسئلة متابعة، وتوليد عروض PowerPoint حقيقية قابلة للتحميل من موضوع أو خطة بحث محفوظة.' },
        { en: 'Shipped public libraries with no login required: the Quran (114 surahs with English translation via QuranEnc) and 5,000+ Islamic books via IslamHouse, both with instant search.',
          ar: 'مكتبات عامة بلا تسجيل دخول: القرآن الكريم (١١٤ سورة مع ترجمة إنجليزية عبر QuranEnc) وأكثر من ٥٠٠٠ كتاب إسلامي عبر IslamHouse، مع بحث فوري.' },
        { en: 'Built an admin dashboard covering university-wide subscription limits, manual payment review, research publication approval, and AI token and cost tracking per request.',
          ar: 'لوحة تحكّم للإدارة تشمل حدود اشتراك على مستوى الجامعة، ومراجعة الدفع اليدوي، والموافقة على نشر الأبحاث، وتتبّع التوكنات والتكلفة لكل طلب ذكاء اصطناعي.' },
        { en: 'Hardened the platform with hashed passwords, prepared statements throughout, CSRF protection on every form and permission-gated file access.',
          ar: 'تأمين المنصّة بتشفير كلمات المرور، والاستعلامات المهيّأة في كل مكان، وحماية CSRF على كل النماذج، وحجب الملفات خلف صلاحيات.' }
      ]
    },
    {
      id: 'mubdiat',
      name: 'almubdiat.com',
      arName: { en: 'Al-Mubdiat School', ar: 'مدرسة المبدعات' },
      cats: ['nova', 'web'],
      icon: 'cap',
      accent: 'cyan',
      link: 'https://almubdiat.com',
      featured: true,
      tagline: { en: 'Private primary school portal', ar: 'بوابة مدرسة ابتدائية أهلية' },
      tech: ['PHP', 'MySQL', 'JavaScript'],
      bullets: [
        { en: 'Built a complete school platform in PHP and MySQL with separate administrator and student portals.',
          ar: 'بناء منصّة مدرسية متكاملة بـ PHP وMySQL بحسابين منفصلين للإدارة والطلاب.' },
        { en: 'Implemented monthly grade entry per subject across grades 1–6 (October through June), with automatic averages, class rankings and a top-students list per academic year.',
          ar: 'إدخال الدرجات شهرياً لكل مادة من الصف الأول للسادس (من الشهر العاشر حتى السادس)، مع المعدّلات والترتيب وقائمة الأوائل لكل سنة دراسية.' },
        { en: 'Built an installments module: a different total fee per student, partial payment records, and paid/remaining tracking for the whole class at a glance.',
          ar: 'نظام أقساط: قسط كلّي مختلف لكل طالبة، وتسجيل دفعات جزئية، ومتابعة المدفوع والمتبقي لكل الصف بنظرة واحدة.' },
        { en: 'Gave staff a dashboard-managed homepage gallery, per-student notes visible to parents, and auto-detected logo and video assets.',
          ar: 'معرض صور للصفحة الرئيسية يُدار من لوحة التحكّم، وملاحظات لكل طالبة تظهر لولي الأمر، واكتشاف تلقائي للشعار والفيديوهات.' },
        { en: 'Wrote a two-step install wizard so the school could deploy on shared hosting without editing a single line of code.',
          ar: 'معالج تثبيت من خطوتين يتيح للمدرسة النشر على استضافة مشتركة دون تعديل أي سطر برمجي.' }
      ]
    },
    {
      id: 'westbox',
      name: 'westboxstore.com',
      cats: ['nova', 'web'],
      icon: 'cart',
      accent: 'emerald',
      link: 'https://westboxstore.com',
      tagline: { en: 'Online store', ar: 'متجر إلكتروني' },
      tech: ['PHP', 'MySQL', 'JavaScript'],
      bullets: [
        { en: 'Delivered an e-commerce store with product catalogue, shopping cart and order flow.',
          ar: 'تسليم متجر إلكتروني بكتالوج منتجات وسلة شراء ومسار طلبات.' },
        { en: 'Built an admin dashboard for managing products, orders and store content.',
          ar: 'بناء لوحة تحكّم لإدارة المنتجات والطلبات ومحتوى المتجر.' },
        { en: 'Shipped a responsive storefront that works across phones, tablets and desktop.',
          ar: 'واجهة متجر متجاوبة تعمل على الهواتف والأجهزة اللوحية وسطح المكتب.' }
      ]
    },
    {
      id: 'wahaj',
      name: 'wahajedu.com',
      cats: ['nova', 'web'],
      icon: 'book',
      accent: 'amber',
      link: 'https://wahajedu.com',
      tagline: { en: 'E-learning platform', ar: 'منصّة تعليم إلكتروني' },
      tech: ['PHP', 'MySQL', 'JavaScript'],
      bullets: [
        { en: 'Built an e-learning platform delivering online courses and lessons.',
          ar: 'بناء منصّة تعليم إلكتروني لتقديم الكورسات والدروس أونلاين.' },
        { en: 'Implemented separate student and instructor accounts with their own dashboards.',
          ar: 'حسابات منفصلة للطلاب والمدرّسين، لكل منها لوحته الخاصة.' },
        { en: 'Delivered course management and content administration for the client team.',
          ar: 'إدارة الكورسات والمحتوى لفريق العميل.' }
      ]
    },
    {
      id: 'keralink',
      name: 'Keralink.net',
      cats: ['web'],
      icon: 'eye',
      accent: 'violet',
      link: 'https://keralink.net',
      tagline: { en: 'Digital eye care platform', ar: 'منصّة رقمية للعناية بالعيون' },
      tech: ['React.js', 'JavaScript', 'CSS3'],
      bullets: [
        { en: 'Built a production-ready React.js platform with modular components and responsive UI.',
          ar: 'بناء منصّة React.js جاهزة للإنتاج بمكوّنات معيارية وواجهة سريعة الاستجابة.' },
        { en: 'Applied lazy loading and code splitting for performance optimization.',
          ar: 'تطبيق التحميل الكسول وتقسيم الكود لتحسين الأداء.' },
        { en: 'Ensured cross-browser compatibility and smooth navigation across devices.',
          ar: 'ضمان التوافق بين المتصفّحات وسلاسة التنقّل عبر الأجهزة.' }
      ]
    },
    {
      id: 'goacademy',
      name: 'Go-Academy.net',
      cats: ['web'],
      icon: 'cap',
      accent: 'cyan',
      link: 'https://go-academy.net/login',
      tagline: { en: 'E-learning platform for ages 8–17', ar: 'منصّة تعليمية لأعمار ٨–١٧' },
      tech: ['HTML5', 'CSS3', 'JavaScript'],
      bullets: [
        { en: 'Improved an e-learning platform (HTML, CSS, JS) for students aged 8–17.',
          ar: 'تطوير منصّة تعليم إلكتروني (HTML، CSS، JS) للطلاب بين ٨ و١٧ سنة.' },
        { en: 'Designed an instructor dashboard for slot scheduling, tracking, and feedback review.',
          ar: 'تصميم لوحة تحكّم للمدرّبين لجدولة المواعيد والمتابعة ومراجعة الملاحظات.' },
        { en: 'Collaborated with educators to align features with teaching goals.',
          ar: 'التعاون مع التربويين لمواءمة الميزات مع الأهداف التعليمية.' }
      ]
    },
    {
      id: 'instapay',
      name: 'InstaPay System',
      cats: ['software'],
      icon: 'wallet',
      accent: 'emerald',
      tagline: { en: 'Simulated online payment system', ar: 'محاكاة نظام دفع إلكتروني' },
      tech: ['Java', 'Postman', 'Design Patterns'],
      bullets: [
        { en: 'Simulated an online payment system in Java with secure transfers and bill payments.',
          ar: 'محاكاة نظام دفع إلكتروني بلغة Java يدعم التحويلات الآمنة ودفع الفواتير.' },
        { en: 'Established mock APIs for real-time transactions and tested them using Postman.',
          ar: 'إنشاء واجهات برمجية وهمية للمعاملات الآنية واختبارها عبر Postman.' },
        { en: 'Used strategy pattern to improve modularity and maintainability.',
          ar: 'استخدام نمط Strategy لتحسين المعيارية وقابلية الصيانة.' }
      ]
    },
    {
      id: 'othello',
      name: 'Othello Game',
      cats: ['games'],
      icon: 'gamepad',
      accent: 'amber',
      tagline: { en: 'Board game with Minimax AI', ar: 'لعبة لوحية بذكاء اصطناعي Minimax' },
      tech: ['Python', 'PyGame', 'Minimax', 'Alpha-Beta'],
      bullets: [
        { en: 'Built a complete Othello game in Python with AI using Minimax + Alpha-Beta pruning.',
          ar: 'بناء لعبة Othello كاملة بـ Python مع ذكاء اصطناعي يعتمد Minimax وتقليم Alpha-Beta.' },
        { en: 'Developed a PyGame interface with multiple difficulty levels.',
          ar: 'تطوير واجهة بـ PyGame تتضمّن مستويات صعوبة متعدّدة.' }
      ]
    },
    {
      id: 'photoshop',
      name: 'Photoshop Applications',
      cats: ['software'],
      icon: 'image',
      accent: 'rose',
      tagline: { en: 'C++ image editor with 24+ filters', ar: 'محرّر صور بـ C++ مع أكثر من ٢٤ فلتراً' },
      tech: ['C++', 'Image Processing'],
      bullets: [
        { en: 'Built a C++ image editor with 24+ filters, supporting grayscale and RGB modes.',
          ar: 'بناء محرّر صور بـ C++ يضمّ أكثر من ٢٤ فلتراً، ويدعم التدرّج الرمادي وRGB.' },
        { en: 'Enabled real-time preview for all filters, including edge detection and color inversion.',
          ar: 'تمكين المعاينة الآنية لكل الفلاتر، بما فيها كشف الحواف وعكس الألوان.' }
      ]
    },
    {
      id: 'racing',
      name: 'Racing Game',
      cats: ['games'],
      icon: 'car',
      accent: 'sky',
      tagline: { en: '3D adventure game in Unity', ar: 'لعبة مغامرات ثلاثية الأبعاد بـ Unity' },
      tech: ['Unity', 'C#', '3D'],
      bullets: [
        { en: 'Enhanced a 3D adventure game in Unity and C# with interactive environments.',
          ar: 'تطوير لعبة مغامرات ثلاثية الأبعاد بـ Unity وC# ببيئات تفاعلية.' },
        { en: 'Implemented a dynamic inventory system and quest-based progression.',
          ar: 'تنفيذ نظام حقيبة ديناميكي وتقدّم قائم على المهام.' }
      ]
    }
  ],

  skills: [
    {
      icon: 'code',
      title: { en: 'Front-End', ar: 'الواجهات الأمامية' },
      items: ['HTML5', 'CSS3', 'JavaScript', 'React.js']
    },
    {
      icon: 'server',
      title: { en: 'Back-End & Data', ar: 'الخلفية وقواعد البيانات' },
      items: ['PHP', 'MySQL', 'REST APIs', 'OpenAI API', 'Anthropic Claude API']
    },
    {
      icon: 'terminal',
      title: { en: 'Languages', ar: 'لغات البرمجة' },
      items: ['Python', 'Java', 'C++', 'C#']
    },
    {
      icon: 'layers',
      title: { en: 'Concepts', ar: 'المفاهيم' },
      items: [
        { en: 'Object Oriented Design', ar: 'التصميم كائني التوجّه' },
        { en: 'Design Patterns',        ar: 'أنماط التصميم' },
        { en: 'Algorithms',             ar: 'الخوارزميات' },
        { en: 'Data Analysis',          ar: 'تحليل البيانات' }
      ]
    },
    {
      icon: 'gamepad',
      title: { en: 'Tools & Platforms', ar: 'الأدوات والمنصّات' },
      items: ['Unity Engine', 'PyGame', 'Postman', 'Scratch', 'code.org']
    }
  ],

  education: [
    {
      degree: { en: 'Bachelor of Computer Science & Artificial Intelligence',
                ar: 'بكالوريوس علوم الحاسوب والذكاء الاصطناعي' },
      school: { en: 'Cairo University', ar: 'جامعة القاهرة' },
      place:  { en: 'Cairo, Egypt', ar: 'القاهرة، مصر' },
      date:   { en: 'Graduated Sep 2025', ar: 'تخرّج في سبتمبر ٢٠٢٥' }
    }
  ],

  certifications: [
    { name: { en: 'Object-Oriented Programming Design', ar: 'تصميم البرمجة كائنية التوجّه' },
      issuer: 'Coursera', date: { en: 'February 2024', ar: 'فبراير ٢٠٢٤' } },
    { name: { en: 'Design Patterns', ar: 'أنماط التصميم' },
      issuer: 'Coursera', date: { en: 'March 2024', ar: 'مارس ٢٠٢٤' } },
    { name: { en: 'IELTS — B2 Level', ar: 'IELTS — مستوى B2' },
      issuer: { en: 'British Council', ar: 'المجلس الثقافي البريطاني' }, date: { en: 'May 2022', ar: 'مايو ٢٠٢٢' } }
  ],

  achievements: [
    {
      icon: 'trophy',
      title: { en: '1st in Iraq — Problem Solving on Codeforces', ar: 'الأول على العراق في حلّ المسائل على Codeforces' },
      text:  { en: 'Ranked first nationally for problem solving on Codeforces, with 500+ algorithm problems solved.',
               ar: 'الأول على مستوى العراق في حلّ المسائل على منصّة Codeforces، بأكثر من ٥٠٠ مسألة خوارزمية محلولة.' }
    },
    {
      icon: 'terminal',
      title: { en: 'Pupil on Codeforces', ar: 'مرتبة Pupil على Codeforces' },
      text:  { en: 'Active in competitive programming contests.', ar: 'مشارك نشط في مسابقات البرمجة التنافسية.' }
    },
    {
      icon: 'award',
      title: { en: 'Best Head', ar: 'أفضل رئيس لجنة' },
      text:  { en: 'Minders Academic Committee — head of the season.', ar: 'اللجنة الأكاديمية في Minders — رئيس الموسم.' }
    },
    {
      icon: 'star',
      title: { en: 'Best Member', ar: 'أفضل عضو' },
      text:  { en: 'Minders Academic Committee — outstanding performance and contribution.', ar: 'اللجنة الأكاديمية في Minders — لتميّز الأداء والمساهمة.' }
    },
    {
      icon: 'heart',
      title: { en: 'Volunteering', ar: 'العمل التطوّعي' },
      text:  { en: 'Organized community events supporting education and youth technology programs.', ar: 'تنظيم فعاليات مجتمعية تدعم التعليم وبرامج التقنية للشباب.' }
    }
  ],

  languages: [
    { name: { en: 'Arabic',  ar: 'العربية' },     level: { en: 'Native',         ar: 'اللغة الأم' },  code: 'AR' },
    { name: { en: 'English', ar: 'الإنجليزية' },  level: { en: 'Fluent',         ar: 'بطلاقة' },      code: 'EN' },
    { name: { en: 'French',  ar: 'الفرنسية' },    level: { en: 'Conversational', ar: 'محادثة' },      code: 'FR' }
  ],

  contactCards: [
    { icon: 'mail', label: { en: 'Email', ar: 'البريد الإلكتروني' }, value: 'alanialimoh@gmail.com',
      href: 'mailto:alanialimoh@gmail.com', copy: true },
    { icon: 'phone', label: { en: 'Phone', ar: 'الهاتف' }, value: '+964 781 676 3549',
      href: 'tel:+9647816763549', copy: true, copyValue: '+9647816763549' },
    { icon: 'linkedin', label: { en: 'LinkedIn', ar: 'لينكدإن' }, value: 'ali-al-ani',
      href: 'https://www.linkedin.com/in/ali-al-ani-84ab26261/' },
    { icon: 'pin', label: { en: 'Location', ar: 'الموقع' }, value: { en: 'Baghdad, Iraq', ar: 'بغداد، العراق' } }
  ]
};
