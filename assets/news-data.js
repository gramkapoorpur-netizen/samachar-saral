window.SAMACHAR_SARAL_DATA = {
  brand: {
    name: "Samachar Saral",
    nameHi: "समाचार सरल",
    taglineHi: "खबर नहीं कॉपी, खबर की समझ",
    taglineEn: "No copied news, only clear explainers"
  },
  categories: [
    { slug: "india", hi: "भारत", en: "India" },
    { slug: "world", hi: "विश्व", en: "World" },
    { slug: "jobs", hi: "नौकरी", en: "Jobs" },
    { slug: "tech", hi: "टेक", en: "Tech" },
    { slug: "farming", hi: "खेती", en: "Farming" },
    { slug: "health", hi: "स्वास्थ्य", en: "Health" },
    { slug: "education", hi: "शिक्षा", en: "Education" }
  ],
  articles: [
    {
      id: "india-public-notice",
      slug: "india-public-notice.html",
      category: "india",
      sourceName: "Press Information Bureau",
      sourceUrl: "https://pib.gov.in/",
      sourceCreditHi: "स्रोत: Press Information Bureau. पूरी जानकारी मूल स्रोत पर पढ़ें.",
      sourceCreditEn: "Source: Press Information Bureau. Read the full update at the original source.",
      publishedAt: "2026-07-08",
      readMins: 3,
      titleHi: "सरकारी सूचना पढ़ते समय किन 5 बातों को पहले देखें",
      titleEn: "Five things to check first in a government update",
      dekHi: "सरकारी अपडेट को समझने के लिए तारीख, विभाग, लागू क्षेत्र, कार्रवाई और मूल लिंक सबसे जरूरी होते हैं.",
      dekEn: "To understand a government update, check the date, department, scope, required action and original link first.",
      summaryHi: "यह explainer बताता है कि सरकारी घोषणा को जल्दी और सुरक्षित तरीके से कैसे पढ़ें, ताकि अफवाह और आधी जानकारी से बचा जा सके.",
      summaryEn: "This explainer shows how to read a government announcement quickly and safely without relying on rumours or half-information.",
      whyHi: "बहुत से लोग सिर्फ headline देखकर फैसला कर लेते हैं. असली असर समझने के लिए यह देखना जरूरी है कि आदेश किस विभाग का है, किस जगह लागू है और नागरिक को क्या करना है.",
      whyEn: "Many people react to headlines alone. The real impact depends on the department, location, eligibility and required citizen action.",
      eli15Hi: "मान लीजिए स्कूल ने notice लगाया. पहले देखोगे notice किसने लगाया, तारीख क्या है, किस class के लिए है और तुम्हें क्या करना है. सरकारी सूचना में भी यही logic है.",
      eli15En: "Imagine your school posts a notice. You first check who issued it, the date, who it applies to, and what you must do. Government updates work the same way.",
      timeline: [
        { hi: "Headline देखें", en: "Read the headline" },
        { hi: "मूल स्रोत खोलें", en: "Open the original source" },
        { hi: "लागू क्षेत्र और तारीख जांचें", en: "Check scope and date" },
        { hi: "जरूरी कार्रवाई नोट करें", en: "Note the required action" }
      ],
      quiz: {
        questionHi: "सरकारी अपडेट में सबसे पहले क्या जांचना चाहिए?",
        questionEn: "What should you check first in a government update?",
        optionsHi: ["Forwarded message", "मूल स्रोत और तारीख", "Comment section"],
        optionsEn: ["Forwarded message", "Original source and date", "Comment section"],
        answer: 1
      }
    },
    {
      id: "world-health-alert",
      slug: "world-health-alert.html",
      category: "world",
      sourceName: "World Health Organization",
      sourceUrl: "https://www.who.int/news",
      sourceCreditHi: "स्रोत: World Health Organization news room.",
      sourceCreditEn: "Source: World Health Organization news room.",
      publishedAt: "2026-07-08",
      readMins: 4,
      titleHi: "विश्व स्वास्थ्य alert को डर के बजाय समझ से कैसे पढ़ें",
      titleEn: "How to read a global health alert calmly",
      dekHi: "Global health update का मतलब हमेशा panic नहीं होता. Risk, location और recommended action समझना जरूरी है.",
      dekEn: "A global health update does not always mean panic. Understand risk, location and recommended action.",
      summaryHi: "यह लेख बताता है कि स्वास्थ्य alerts में risk level, geography, symptoms और official advice को अलग-अलग कैसे समझें.",
      summaryEn: "This article explains how to separate risk level, geography, symptoms and official advice in health alerts.",
      whyHi: "गलत स्वास्थ्य जानकारी डर फैलाती है. स्पष्ट explainer लोगों को सही सावधानी लेने और अफवाह से बचने में मदद करता है.",
      whyEn: "Bad health information spreads fear. A clear explainer helps people take sensible precautions and avoid rumours.",
      eli15Hi: "Alert का मतलब यह नहीं कि हर जगह खतरा है. जैसे मौसम warning सिर्फ कुछ जिलों के लिए हो सकती है, वैसे ही health alert भी जगह और स्थिति पर निर्भर करता है.",
      eli15En: "An alert does not mean danger everywhere. Like a weather warning may apply only to some districts, a health alert depends on place and situation.",
      timeline: [
        { hi: "Alert किस संस्था ने दिया", en: "Who issued the alert" },
        { hi: "किस देश/क्षेत्र से जुड़ा है", en: "Which location it concerns" },
        { hi: "Risk किस समूह के लिए है", en: "Who is at risk" },
        { hi: "Official सलाह क्या है", en: "What the official advice says" }
      ],
      quiz: {
        questionHi: "Health alert पढ़ते समय किससे बचना चाहिए?",
        questionEn: "What should you avoid while reading a health alert?",
        optionsHi: ["मूल source", "Risk level", "बिना source वाले डरावने forwards"],
        optionsEn: ["Original source", "Risk level", "Scary forwards without source"],
        answer: 2
      }
    },
    {
      id: "jobs-notification-checklist",
      slug: "jobs-notification-checklist.html",
      category: "jobs",
      sourceName: "National Career Service",
      sourceUrl: "https://www.ncs.gov.in/",
      sourceCreditHi: "स्रोत: National Career Service और official recruitment portals.",
      sourceCreditEn: "Source: National Career Service and official recruitment portals.",
      publishedAt: "2026-07-08",
      readMins: 4,
      titleHi: "सरकारी नौकरी notification पढ़ने की आसान checklist",
      titleEn: "A simple checklist for government job notifications",
      dekHi: "Eligibility, dates, fee, selection process और official link को बिना जल्दबाजी के पढ़ना जरूरी है.",
      dekEn: "Read eligibility, dates, fee, selection process and official link without rushing.",
      summaryHi: "Job notification समझने के लिए यह guide बताती है कि apply करने से पहले कौन सी जानकारी लिखकर रखनी चाहिए.",
      summaryEn: "This guide explains what to note before applying for a job notification.",
      whyHi: "गलत link, गलत fee या eligibility न समझने से समय और पैसा दोनों खराब हो सकते हैं.",
      whyEn: "Wrong links, wrong fees or misunderstood eligibility can waste both time and money.",
      eli15Hi: "Job notification को exam form जैसा समझो. पहले देखो तुम eligible हो या नहीं, आखिरी तारीख क्या है, fee कितनी है और official website कौन सी है.",
      eli15En: "Treat a job notification like an exam form. First check eligibility, last date, fee and the official website.",
      timeline: [
        { hi: "Official link खोलें", en: "Open official link" },
        { hi: "Eligibility मिलाएं", en: "Match eligibility" },
        { hi: "Last date और fee लिखें", en: "Note last date and fee" },
        { hi: "Documents तैयार करें", en: "Prepare documents" }
      ],
      quiz: {
        questionHi: "नौकरी notification में apply करने से पहले क्या जरूरी है?",
        questionEn: "What is essential before applying to a job notification?",
        optionsHi: ["Eligibility check", "Viral YouTube comment", "Random payment link"],
        optionsEn: ["Eligibility check", "Viral YouTube comment", "Random payment link"],
        answer: 0
      }
    },
    {
      id: "tech-digital-safety",
      slug: "tech-digital-safety.html",
      category: "tech",
      sourceName: "Ministry of Electronics and IT",
      sourceUrl: "https://www.meity.gov.in/",
      sourceCreditHi: "स्रोत: Ministry of Electronics and Information Technology.",
      sourceCreditEn: "Source: Ministry of Electronics and Information Technology.",
      publishedAt: "2026-07-08",
      readMins: 3,
      titleHi: "Digital safety update आम user के लिए क्या बदलता है",
      titleEn: "What a digital safety update means for ordinary users",
      dekHi: "Cyber safety में password, OTP, app permission और complaint process जैसी छोटी बातें बड़ा फर्क लाती हैं.",
      dekEn: "In cyber safety, small habits around passwords, OTPs, app permissions and complaints matter.",
      summaryHi: "यह explainer digital safety announcements को आम user की भाषा में बदलता है: क्या करें, क्या न करें और कहां report करें.",
      summaryEn: "This explainer translates digital safety announcements into user language: what to do, avoid and where to report.",
      whyHi: "Scam messages और fake apps तेजी से फैलते हैं. सरल भाषा में safety steps लोगों को नुकसान से बचा सकते हैं.",
      whyEn: "Scam messages and fake apps spread fast. Simple safety steps can prevent real losses.",
      eli15Hi: "OTP को घर की चाबी समझो. कोई भी कितना भी भरोसेमंद लगे, चाबी किसी को नहीं देनी है.",
      eli15En: "Think of an OTP as your house key. No matter how trustworthy someone sounds, never hand over the key.",
      timeline: [
        { hi: "Message का source देखें", en: "Check message source" },
        { hi: "OTP/password share न करें", en: "Do not share OTP/password" },
        { hi: "App permission जांचें", en: "Check app permissions" },
        { hi: "Fraud हो तो report करें", en: "Report fraud quickly" }
      ],
      quiz: {
        questionHi: "OTP किसे देना चाहिए?",
        questionEn: "Who should receive your OTP?",
        optionsHi: ["किसी को नहीं", "फोन करने वाले agent को", "Telegram group को"],
        optionsEn: ["Nobody", "A caller claiming to be an agent", "A Telegram group"],
        answer: 0
      }
    },
    {
      id: "farming-weather-advisory",
      slug: "farming-weather-advisory.html",
      category: "farming",
      sourceName: "India Meteorological Department",
      sourceUrl: "https://mausam.imd.gov.in/",
      sourceCreditHi: "स्रोत: India Meteorological Department.",
      sourceCreditEn: "Source: India Meteorological Department.",
      publishedAt: "2026-07-08",
      readMins: 4,
      titleHi: "मौसम advisory किसान के फैसले में कैसे मदद करती है",
      titleEn: "How weather advisories help farming decisions",
      dekHi: "बारिश, तापमान और चेतावनी के आधार पर सिंचाई, दवा और कटाई का फैसला बेहतर हो सकता है.",
      dekEn: "Rain, temperature and warning data can improve irrigation, spraying and harvesting decisions.",
      summaryHi: "यह explainer बताता है कि weather advisory को crop decision में कैसे बदलें और local सलाह क्यों जरूरी है.",
      summaryEn: "This explainer shows how to turn weather advisories into crop decisions and why local advice matters.",
      whyHi: "समय पर मौसम जानकारी से लागत घट सकती है और नुकसान कम हो सकता है.",
      whyEn: "Timely weather information can reduce costs and limit crop loss.",
      eli15Hi: "जैसे बाहर जाने से पहले मौसम देखते हैं, वैसे ही खेत में पानी, दवा या कटाई से पहले advisory देखना smart काम है.",
      eli15En: "Just like you check weather before going out, farmers should check advisories before watering, spraying or harvesting.",
      timeline: [
        { hi: "अपने जिले की advisory देखें", en: "Check district advisory" },
        { hi: "बारिश और हवा पढ़ें", en: "Read rain and wind forecast" },
        { hi: "Crop stage से मिलाएं", en: "Match with crop stage" },
        { hi: "Local expert से पुष्टि करें", en: "Confirm with local expert" }
      ],
      quiz: {
        questionHi: "Spray करने से पहले क्या देखना चाहिए?",
        questionEn: "What should you check before spraying?",
        optionsHi: ["हवा और बारिश की संभावना", "सिर्फ headline", "पुराना calendar"],
        optionsEn: ["Wind and rain chance", "Only the headline", "Old calendar"],
        answer: 0
      }
    },
    {
      id: "health-advisory-trust",
      slug: "health-advisory-trust.html",
      category: "health",
      sourceName: "Ministry of Health and Family Welfare",
      sourceUrl: "https://www.mohfw.gov.in/",
      sourceCreditHi: "स्रोत: Ministry of Health and Family Welfare.",
      sourceCreditEn: "Source: Ministry of Health and Family Welfare.",
      publishedAt: "2026-07-08",
      readMins: 3,
      titleHi: "Health advisory असली है या अफवाह, कैसे पहचानें",
      titleEn: "How to identify a real health advisory",
      dekHi: "Doctor advice, official source और तारीख के बिना health forward पर भरोसा न करें.",
      dekEn: "Do not trust health forwards without medical advice, official source and date.",
      summaryHi: "यह guide बताती है कि health message को verify करने के लिए किन signals को देखें.",
      summaryEn: "This guide explains the signals to verify a health message.",
      whyHi: "गलत health advice नुकसान कर सकती है. इसलिए official source और doctor guidance सबसे जरूरी है.",
      whyEn: "Wrong health advice can harm people. Official sources and medical guidance matter most.",
      eli15Hi: "अगर कोई medicine का message बिना doctor और source के भेजे, तो उसे सच मानने से पहले बड़े से पूछो और official site देखो.",
      eli15En: "If someone sends medicine advice without a doctor or source, ask a trusted adult and check the official site before believing it.",
      timeline: [
        { hi: "Source जांचें", en: "Check source" },
        { hi: "तारीख देखें", en: "Check date" },
        { hi: "Doctor/official सलाह खोजें", en: "Look for medical or official advice" },
        { hi: "Self-medication से बचें", en: "Avoid self-medication" }
      ],
      quiz: {
        questionHi: "Health forward पर कब भरोसा नहीं करना चाहिए?",
        questionEn: "When should you not trust a health forward?",
        optionsHi: ["जब source न हो", "जब official link हो", "जब doctor ने कहा हो"],
        optionsEn: ["When there is no source", "When there is an official link", "When a doctor said it"],
        answer: 0
      }
    },
    {
      id: "education-scholarship-guide",
      slug: "education-scholarship-guide.html",
      category: "education",
      sourceName: "National Scholarship Portal",
      sourceUrl: "https://scholarships.gov.in/",
      sourceCreditHi: "स्रोत: National Scholarship Portal.",
      sourceCreditEn: "Source: National Scholarship Portal.",
      publishedAt: "2026-07-08",
      readMins: 4,
      titleHi: "Scholarship notification पढ़ते समय कौन सी बातें न छोड़ें",
      titleEn: "Do not miss these points in a scholarship notice",
      dekHi: "Eligibility, documents, deadline और official portal scholarship application की नींव हैं.",
      dekEn: "Eligibility, documents, deadline and official portal are the base of scholarship applications.",
      summaryHi: "यह explainer students और parents को scholarship notice में जरूरी जानकारी जल्दी पहचानने में मदद करता है.",
      summaryEn: "This explainer helps students and parents identify important information in scholarship notices.",
      whyHi: "छोटी गलती से application reject हो सकता है. पहले checklist बनाना सबसे अच्छा तरीका है.",
      whyEn: "Small mistakes can lead to rejection. A checklist is the best first step.",
      eli15Hi: "Scholarship form को project submission जैसा समझो. Last date, documents और correct portal miss किया तो marks कट सकते हैं.",
      eli15En: "Treat a scholarship form like a project submission. Missing the deadline, documents or correct portal can cost you.",
      timeline: [
        { hi: "Scheme name पढ़ें", en: "Read scheme name" },
        { hi: "Eligibility मिलाएं", en: "Match eligibility" },
        { hi: "Documents scan करें", en: "Scan documents" },
        { hi: "Deadline से पहले submit करें", en: "Submit before deadline" }
      ],
      quiz: {
        questionHi: "Scholarship apply करने से पहले क्या बनाना चाहिए?",
        questionEn: "What should you make before applying for a scholarship?",
        optionsHi: ["Document checklist", "Random password list", "Forward message"],
        optionsEn: ["Document checklist", "Random password list", "Forward message"],
        answer: 0
      }
    }
  ],
  dailyBrief: [
    { category: "india", hi: "सरकारी update पढ़ते समय मूल source और date पहले देखें.", en: "Check original source and date first in a government update." },
    { category: "world", hi: "Global health alert में geography और risk group अलग-अलग समझें.", en: "Separate geography and risk group in global health alerts." },
    { category: "jobs", hi: "Job notification में eligibility, fee और last date लिखकर रखें.", en: "Note eligibility, fee and last date in job notifications." },
    { category: "tech", hi: "OTP और password कभी share न करें.", en: "Never share OTPs or passwords." },
    { category: "farming", hi: "Spray या irrigation से पहले district weather advisory देखें.", en: "Check district weather advisories before spraying or irrigation." },
    { category: "health", hi: "Health forward पर official source के बिना भरोसा न करें.", en: "Do not trust health forwards without official source." },
    { category: "education", hi: "Scholarship के लिए documents और deadline की checklist बनाएं.", en: "Make a documents and deadline checklist for scholarships." },
    { category: "india", hi: "Headline काफी नहीं, असर समझने के लिए पूरा context जरूरी है.", en: "A headline is not enough; context explains impact." },
    { category: "tech", hi: "App install करने से पहले permissions पढ़ें.", en: "Read permissions before installing apps." },
    { category: "jobs", hi: "Payment सिर्फ official portal पर करें.", en: "Pay only through the official portal." }
  ]
};
