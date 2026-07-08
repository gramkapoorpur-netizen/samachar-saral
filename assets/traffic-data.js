(function () {
  "use strict";

  const store = window.SAMACHAR_SARAL_DATA;
  if (!store) return;

  const sourceMap = {
    myscheme: ["MyScheme", "https://www.myscheme.gov.in/"],
    uidai: ["UIDAI", "https://uidai.gov.in/"],
    digilocker: ["DigiLocker", "https://www.digilocker.gov.in/"],
    eci: ["Election Commission of India", "https://www.eci.gov.in/"],
    epfo: ["EPFO", "https://www.epfindia.gov.in/"],
    cyber: ["National Cyber Crime Portal", "https://cybercrime.gov.in/"],
    rbi: ["Reserve Bank of India", "https://www.rbi.org.in/"],
    pmkisan: ["PM-KISAN", "https://pmkisan.gov.in/"],
    soil: ["Soil Health Card", "https://soilhealth.dac.gov.in/"],
    enam: ["e-NAM", "https://www.enam.gov.in/"],
    imd: ["India Meteorological Department", "https://mausam.imd.gov.in/"],
    ncs: ["National Career Service", "https://www.ncs.gov.in/"],
    ssc: ["Staff Selection Commission", "https://ssc.gov.in/"],
    upsc: ["Union Public Service Commission", "https://upsc.gov.in/"],
    nta: ["National Testing Agency", "https://nta.ac.in/"],
    scholarship: ["National Scholarship Portal", "https://scholarships.gov.in/"],
    swayam: ["SWAYAM", "https://swayam.gov.in/"],
    mohfw: ["Ministry of Health and Family Welfare", "https://www.mohfw.gov.in/"],
    abdm: ["Ayushman Bharat Digital Mission", "https://abdm.gov.in/"],
    who: ["World Health Organization", "https://www.who.int/news"],
    un: ["UN News", "https://news.un.org/"],
    meity: ["Ministry of Electronics and IT", "https://www.meity.gov.in/"]
  };

  const topics = [
    ["scheme-family-checklist", "india", "myscheme", "सरकारी योजना आपके परिवार के लिए सही है या नहीं, कैसे जांचें", "How to check whether a government scheme fits your family", "योजना apply करने से पहले eligibility, documents, benefit और official portal check करना सबसे जरूरी है.", "Before applying for a scheme, check eligibility, documents, benefit and official portal."],
    ["aadhaar-update-safety", "india", "uidai", "Aadhaar update करते समय कौन सी गलती नहीं करनी चाहिए", "Mistakes to avoid while updating Aadhaar", "Aadhaar update में official UIDAI portal, appointment और receipt safely संभालना जरूरी है.", "Use official UIDAI channels and keep appointment or receipt details safe."],
    ["digilocker-documents-guide", "india", "digilocker", "DigiLocker documents कब काम आते हैं और कैसे संभालें", "When DigiLocker documents help and how to manage them", "Digital documents को सही account, phone और verification के साथ use करना आसान हो जाता है.", "Digital documents become easier when the account, phone and verification are correct."],
    ["epfo-passbook-claim-guide", "india", "epfo", "EPFO passbook और claim status समझने की सरल guide", "Simple guide to EPFO passbook and claim status", "PF balance, UAN, KYC और claim tracking को अलग-अलग समझना confusion कम करता है.", "Understanding PF balance, UAN, KYC and claim tracking separately reduces confusion."],
    ["voter-info-checklist", "india", "eci", "Voter information check करते समय क्या ध्यान रखें", "What to check in voter information", "नाम, polling station और official election source verify करना जरूरी है.", "Verify name, polling station and official election source."],
    ["ssc-notification-guide", "jobs", "ssc", "SSC notification पढ़ने की 7 point checklist", "Seven-point checklist for SSC notifications", "SSC form में post, age, qualification, fee, dates और exam pattern सबसे पहले पढ़ें.", "Read post, age, qualification, fee, dates and exam pattern first."],
    ["upsc-exam-calendar-guide", "jobs", "upsc", "UPSC calendar को साल भर की तैयारी में कैसे बदलें", "How to turn the UPSC calendar into a yearly plan", "Exam calendar को monthly milestones में बदलने से तैयारी realistic बनती है.", "Turning the calendar into monthly milestones makes preparation realistic."],
    ["ncs-profile-job-search", "jobs", "ncs", "NCS profile बनाकर job search कैसे बेहतर करें", "How an NCS profile can improve job search", "Profile, skills, location और alert settings सही होने पर relevant jobs मिलना आसान होता है.", "Correct profile, skills, location and alerts make job discovery easier."],
    ["railway-recruitment-source-check", "jobs", "ncs", "Railway recruitment link असली है या fake, कैसे पहचानें", "How to identify real or fake railway recruitment links", "Recruitment में official portal, notice number और fee link verify करना जरूरी है.", "Verify official portal, notice number and fee link in recruitment."],
    ["resume-first-job-guide", "jobs", "ncs", "पहली नौकरी के लिए simple resume कैसे बनाएं", "How to create a simple resume for a first job", "Resume में साफ skills, education और contact details लिखना सबसे काम आता है.", "Clear skills, education and contact details matter most in a resume."],
    ["cyber-fraud-first-steps", "tech", "cyber", "Cyber fraud हो जाए तो पहले 30 minutes में क्या करें", "What to do in the first 30 minutes after cyber fraud", "जल्दी report, bank block और evidence save करने से नुकसान कम हो सकता है.", "Quick reporting, bank blocking and evidence saving can reduce loss."],
    ["upi-safety-guide", "tech", "rbi", "UPI payment करते समय 5 safety rules", "Five safety rules for UPI payments", "UPI PIN सिर्फ payment authorize करता है; receive करने के लिए PIN नहीं डालना होता.", "UPI PIN authorizes payment; you do not enter it to receive money."],
    ["fake-app-permission-guide", "tech", "meity", "Fake app पहचानने के आसान signals", "Easy signals to identify fake apps", "Unknown app, extra permissions और outside-store download बड़ा warning sign है.", "Unknown apps, extra permissions and outside-store downloads are warning signs."],
    ["password-manager-basics", "tech", "meity", "Strong password और password manager क्यों जरूरी है", "Why strong passwords and password managers matter", "हर account का अलग strong password hacking risk कम करता है.", "A different strong password for each account lowers hacking risk."],
    ["ai-forward-fact-check", "tech", "meity", "AI image या viral forward असली है या नहीं, कैसे सोचें", "How to think about AI images and viral forwards", "Viral content को source, date और reverse context से verify करना चाहिए.", "Verify viral content with source, date and context."],
    ["pm-kisan-status-guide", "farming", "pmkisan", "PM-KISAN status check करते समय क्या देखें", "What to check in PM-KISAN status", "Beneficiary status में Aadhaar, bank, eKYC और installment status अलग-अलग देखें.", "Check Aadhaar, bank, eKYC and installment status separately."],
    ["soil-health-card-use", "farming", "soil", "Soil Health Card को fertilizer decision में कैसे use करें", "How to use Soil Health Card for fertilizer decisions", "Soil report को crop, season और local advice के साथ पढ़ना चाहिए.", "Read soil reports with crop, season and local advice."],
    ["mandi-price-check-guide", "farming", "enam", "Mandi price देखकर बेचने का फैसला कैसे बेहतर करें", "How mandi prices can improve selling decisions", "Nearby mandi rates, transport cost और quality grade साथ में देखने चाहिए.", "Check nearby rates, transport cost and quality grade together."],
    ["rain-alert-crop-plan", "farming", "imd", "Rain alert को crop plan में कैसे बदलें", "How to turn a rain alert into a crop plan", "Rain forecast के हिसाब से irrigation, spray और harvest timing adjust करें.", "Adjust irrigation, spraying and harvesting based on rain forecasts."],
    ["crop-insurance-document-check", "farming", "myscheme", "Crop insurance claim के लिए documents कैसे तैयार रखें", "How to keep documents ready for crop insurance claims", "Policy, land record, bank details और damage proof समय पर रखें.", "Keep policy, land record, bank details and damage proof ready."],
    ["abha-health-id-guide", "health", "abdm", "ABHA Health ID क्या है और कब काम आती है", "What ABHA Health ID is and when it helps", "Health records को digital तरीके से link करने में ABHA useful हो सकती है.", "ABHA can help link health records digitally."],
    ["medicine-forward-warning", "health", "mohfw", "Medicine वाला WhatsApp forward क्यों dangerous हो सकता है", "Why medicine forwards can be dangerous", "Doctor advice के बिना medicine या dosage follow करना risky हो सकता है.", "Following medicines or dosage without medical advice can be risky."],
    ["vaccination-record-guide", "health", "mohfw", "Vaccination record संभालना क्यों जरूरी है", "Why vaccination records matter", "Record से school, travel, health history और future dose decisions आसान होते हैं.", "Records help with school, travel, health history and future dose decisions."],
    ["heatwave-safety-guide", "health", "imd", "Heatwave advisory में आम परिवार को क्या करना चाहिए", "What families should do during heatwave advisories", "पानी, shade, timing और vulnerable people की care सबसे जरूरी है.", "Water, shade, timing and care for vulnerable people matter most."],
    ["health-symptom-search-limit", "health", "who", "Internet पर symptom search करते समय सीमा क्या है", "Limits of searching symptoms online", "Online search awareness दे सकता है, diagnosis doctor ही करता है.", "Online search can inform, but diagnosis belongs to doctors."],
    ["scholarship-document-list", "education", "scholarship", "Scholarship form के लिए documents checklist", "Documents checklist for scholarship forms", "Income, caste, marksheet, bank और Aadhaar details पहले ready रखें.", "Keep income, caste, marksheet, bank and Aadhaar details ready."],
    ["nta-admit-card-checklist", "education", "nta", "NTA admit card download के बाद क्या verify करें", "What to verify after downloading an NTA admit card", "Name, exam center, timing, photo और instructions carefully check करें.", "Check name, center, timing, photo and instructions carefully."],
    ["swayam-free-course-guide", "education", "swayam", "Free online course choose करने की smart checklist", "Smart checklist for choosing a free online course", "Course level, duration, certificate और time commitment पहले देखें.", "Check level, duration, certificate and time commitment first."],
    ["board-result-next-step", "education", "scholarship", "Board result के बाद next step कैसे decide करें", "How to decide next steps after board results", "Marks के साथ interest, course options, cost और scholarship देखें.", "Look at marks with interest, course options, cost and scholarships."],
    ["student-cyber-safety", "education", "cyber", "Students के लिए cyber safety rules", "Cyber safety rules for students", "Gaming, social media और study apps में privacy settings जरूरी हैं.", "Privacy settings matter in gaming, social media and study apps."],
    ["who-health-rumour-guide", "world", "who", "Global health rumour को verify कैसे करें", "How to verify a global health rumour", "WHO या national health source के बिना health rumour share न करें.", "Do not share health rumours without WHO or national health sources."],
    ["un-climate-report-simple", "world", "un", "Climate report को आम भाषा में कैसे पढ़ें", "How to read climate reports in simple language", "Trend, region, time period और impact को अलग-अलग समझें.", "Separate trend, region, time period and impact."],
    ["world-conflict-news-context", "world", "un", "World conflict news में context क्यों जरूरी है", "Why context matters in world conflict news", "Location, parties, timeline और humanitarian impact समझना जरूरी है.", "Understand location, parties, timeline and humanitarian impact."],
    ["migration-news-explainer", "world", "un", "Migration news पढ़ते समय किन terms को समझें", "Terms to understand in migration news", "Migrant, refugee और asylum seeker जैसे शब्दों का मतलब अलग होता है.", "Terms like migrant, refugee and asylum seeker mean different things."],
    ["global-economy-family-impact", "world", "rbi", "Global economy news का परिवार पर असर कैसे समझें", "How global economy news affects families", "Oil price, exchange rate और inflation जैसे signals household budget से जुड़ते हैं.", "Oil prices, exchange rates and inflation connect to household budgets."]
  ];

  const existing = new Set(store.articles.map((item) => item.id));
  topics.forEach((item) => {
    if (existing.has(item[0])) return;
    const [id, category, sourceKey, titleHi, titleEn, angleHi, angleEn] = item;
    const [sourceName, sourceUrl] = sourceMap[sourceKey] || sourceMap.myscheme;
    store.articles.push({
      id,
      slug: id + ".html",
      category,
      sourceName,
      sourceUrl,
      sourceCreditHi: "स्रोत: " + sourceName + ". पूरी जानकारी हमेशा original source पर verify करें.",
      sourceCreditEn: "Source: " + sourceName + ". Always verify details at the original source.",
      publishedAt: "2026-07-08",
      readMins: 4,
      titleHi,
      titleEn,
      dekHi: angleHi,
      dekEn: angleEn,
      summaryHi: "यह original explainer बताता है कि " + angleHi + " इसमें copied article text नहीं है; reader को practical checklist और source link दिया गया है.",
      summaryEn: "This original explainer explains: " + angleEn + " It does not copy article text; it gives a practical checklist and source link.",
      whyHi: "इस topic पर लोग अक्सर forwarded messages या अधूरी जानकारी से confuse हो जाते हैं. सही source और simple checklist decision को सुरक्षित बनाते हैं.",
      whyEn: "People often get confused by forwards or incomplete information. A reliable source and simple checklist make decisions safer.",
      eli15Hi: "इसे ऐसे समझो: कोई भी form, alert या news देखकर तुरंत believe मत करो. पहले official source खोलो, date देखो, eligibility या action समझो, फिर फैसला लो.",
      eli15En: "Think of it like this: do not believe any form, alert or news instantly. Open the official source, check date, understand eligibility or action, then decide.",
      timeline: [
        { hi: "Headline या topic पढ़ें", en: "Read the headline or topic" },
        { hi: "Original source खोलें", en: "Open the original source" },
        { hi: "Date, eligibility और action check करें", en: "Check date, eligibility and action" },
        { hi: "जरूरत हो तो expert या official helpline से confirm करें", en: "Confirm with an expert or official helpline if needed" }
      ],
      quiz: {
        questionHi: "सबसे सुरक्षित पहला कदम क्या है?",
        questionEn: "What is the safest first step?",
        optionsHi: ["Original source check करना", "Forward पर भरोसा करना", "Random payment link खोलना"],
        optionsEn: ["Check the original source", "Trust a forward", "Open a random payment link"],
        answer: 0
      }
    });
  });

  store.dailyBrief = store.dailyBrief.concat([
    { category: "tech", hi: "Cyber fraud में जल्दी report और evidence save करना जरूरी है.", en: "In cyber fraud, quick reporting and evidence saving matter." },
    { category: "jobs", hi: "Recruitment में official notice number और fee link verify करें.", en: "Verify official notice number and fee link in recruitment." },
    { category: "farming", hi: "Mandi price को transport cost के साथ देखें.", en: "Read mandi price with transport cost." },
    { category: "education", hi: "Scholarship के लिए documents पहले scan करके रखें.", en: "Scan documents early for scholarships." },
    { category: "health", hi: "Medicine forward को doctor advice के बिना follow न करें.", en: "Do not follow medicine forwards without doctor advice." }
  ]);
}());
