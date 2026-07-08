(function () {
  "use strict";

  const data = window.SAMACHAR_SARAL_DATA || { categories: [], articles: [], dailyBrief: [] };
  const state = {
    lang: localStorage.getItem("samacharSaralLang") || "hi",
    category: "all",
    search: "",
    currentArticleId: new URLSearchParams(location.search).get("id") || document.body.dataset.articleId || "",
    assistantText: ""
  };

  const keys = {
    bookmarks: "samacharSaralBookmarks",
    history: "samacharSaralHistory"
  };

  const copy = {
    hi: {
      tagline: "खबर नहीं कॉपी, खबर की समझ",
      searchLabel: "खोजें",
      searchPlaceholder: "खबर, नौकरी, खेती, स्वास्थ्य खोजें",
      eyebrow: "Hindi-first news explainers",
      heroTitle: "कम शब्दों में खबर की पूरी समझ",
      heroText: "हम full article copy नहीं करते. हम headline, source credit और original short explainer देते हैं.",
      readLatest: "Latest explainers",
      playBrief: "आज की Top 10 सुनें",
      policyOne: "Headline + short summary only",
      policyTwo: "Original source link always",
      policyThree: "Editor review before publishing",
      policyFour: "No Google Search scraping",
      dailyEyebrow: "Daily brief",
      dailyTitle: "आज की Top 10",
      latestEyebrow: "Explain, not copy",
      latestTitle: "Latest explainers",
      all: "सभी",
      read: "पढ़ें",
      listen: "सुनें",
      bookmark: "Bookmark",
      bookmarked: "Saved",
      source: "Source",
      sourceLink: "मूल स्रोत खोलें",
      why: "क्यों जरूरी है",
      eli15: "15 साल के बच्चे की तरह समझें",
      timeline: "Timeline",
      quiz: "Quiz",
      correct: "सही जवाब",
      wrong: "फिर कोशिश करें",
      bookmarksTitle: "Bookmarks",
      historyTitle: "Reading history",
      earningTitle: "Earning model",
      earningText: "High-quality original explainers, good SEO, clean ad slots and policy pages build an AdSense-ready foundation.",
      emptyBookmarks: "अभी bookmark नहीं है.",
      emptyHistory: "अभी reading history नहीं है.",
      assistantEyebrow: "AI news helper",
      assistantTitle: "खबर खोजें और आवाज में समझें",
      assistantText: "Topic लिखें. Assistant matching explainers, source links और आसान Hindi जवाब देगा. यह Google Search scrape नहीं करता.",
      assistantAsk: "Search",
      assistantSpeak: "जवाब सुनें",
      assistantPlaceholder: "जैसे: नौकरी, OTP, मौसम, scholarship",
      assistantEmpty: "Topic लिखें, जैसे नौकरी, खेती, health या scholarship.",
      assistantNoMatch: "इस topic पर अभी explainer नहीं मिला. Admin legal RSS/API source जोड़कर draft बना सकता है.",
      assistantIntro: "मुझे ये useful explainers मिले:",
      ad: "Advertisement",
      noArticles: "कोई explainer नहीं मिला.",
      articleNotFound: "Article नहीं मिला.",
      shortSummary: "Short summary",
      explainMode: "Explain like I am 15",
      backHome: "Home",
      dateLabel: "Updated"
    },
    en: {
      tagline: "No copied news, only clear explainers",
      searchLabel: "Search",
      searchPlaceholder: "Search news, jobs, farming, health",
      eyebrow: "Hindi-first news explainers",
      heroTitle: "Understand the news in fewer words",
      heroText: "We do not copy full articles. We show source credit and original short explainers.",
      readLatest: "Latest explainers",
      playBrief: "Listen to Top 10",
      policyOne: "Headline + short summary only",
      policyTwo: "Original source link always",
      policyThree: "Editor review before publishing",
      policyFour: "No Google Search scraping",
      dailyEyebrow: "Daily brief",
      dailyTitle: "Today's Top 10",
      latestEyebrow: "Explain, not copy",
      latestTitle: "Latest explainers",
      all: "All",
      read: "Read",
      listen: "Listen",
      bookmark: "Bookmark",
      bookmarked: "Saved",
      source: "Source",
      sourceLink: "Open original source",
      why: "Why it matters",
      eli15: "Explain like I am 15",
      timeline: "Timeline",
      quiz: "Quiz",
      correct: "Correct answer",
      wrong: "Try again",
      bookmarksTitle: "Bookmarks",
      historyTitle: "Reading history",
      earningTitle: "Earning model",
      earningText: "High-quality original explainers, good SEO, clean ad slots and policy pages build an AdSense-ready foundation.",
      emptyBookmarks: "No bookmarks yet.",
      emptyHistory: "No reading history yet.",
      assistantEyebrow: "AI news helper",
      assistantTitle: "Search news and hear it aloud",
      assistantText: "Type a topic. The assistant finds matching explainers, source links and a simple answer. It does not scrape Google Search.",
      assistantAsk: "Search",
      assistantSpeak: "Hear answer",
      assistantPlaceholder: "Try: jobs, OTP, weather, scholarship",
      assistantEmpty: "Type a topic, such as jobs, farming, health or scholarship.",
      assistantNoMatch: "No explainer found for this topic yet. Admin can add a legal RSS/API source and create a draft.",
      assistantIntro: "I found these useful explainers:",
      ad: "Advertisement",
      noArticles: "No explainers found.",
      articleNotFound: "Article not found.",
      shortSummary: "Short summary",
      explainMode: "Explain like I am 15",
      backHome: "Home",
      dateLabel: "Updated"
    }
  };

  const $ = (selector) => document.querySelector(selector);

  function t(key) {
    return (copy[state.lang] && copy[state.lang][key]) || copy.hi[key] || key;
  }

  function text(article, field) {
    const suffix = state.lang === "en" ? "En" : "Hi";
    return article[field + suffix] || article[field + "Hi"] || "";
  }

  function init() {
    document.documentElement.lang = state.lang;
    const selector = $("#languageSelect");
    if (selector) selector.value = state.lang;
    bindEvents();
    applyCopy();
    if (state.currentArticleId) renderArticlePage();
    renderHome();
  }

  function bindEvents() {
    $("#languageSelect")?.addEventListener("change", (event) => {
      state.lang = event.currentTarget.value === "en" ? "en" : "hi";
      localStorage.setItem("samacharSaralLang", state.lang);
      document.documentElement.lang = state.lang;
      applyCopy();
      if (state.currentArticleId) renderArticlePage();
      renderHome();
    });

    $("#searchInput")?.addEventListener("input", (event) => {
      state.search = event.currentTarget.value.trim().toLowerCase();
      renderArticles();
    });

    $("#playBriefButton")?.addEventListener("click", () => {
      speak(data.dailyBrief.map((item, index) => `${index + 1}. ${briefText(item)}`).join(" "));
    });

    $("#stopAudioButton")?.addEventListener("click", stopSpeech);

    $("#assistantForm")?.addEventListener("submit", (event) => {
      event.preventDefault();
      runAssistant();
    });

    $("#assistantSpeak")?.addEventListener("click", () => {
      if (state.assistantText) speak(state.assistantText);
    });

    document.querySelectorAll("[data-popular-search]").forEach((button) => {
      button.addEventListener("click", () => {
        const value = button.dataset.popularSearch || "";
        if ($("#searchInput")) $("#searchInput").value = value;
        if ($("#assistantQuery")) $("#assistantQuery").value = value;
        state.search = value.toLowerCase();
        renderArticles();
        runAssistant();
        $("#latest")?.scrollIntoView({ behavior: "smooth", block: "start" });
      });
    });

    document.addEventListener("click", (event) => {
      const listen = event.target.closest("[data-listen]");
      if (listen) speak(articleSpeakText(findArticle(listen.dataset.listen)));

      const bookmark = event.target.closest("[data-bookmark]");
      if (bookmark) toggleBookmark(bookmark.dataset.bookmark);

      const quiz = event.target.closest("[data-quiz-option]");
      if (quiz) answerQuiz(Number(quiz.dataset.quizOption));
    });
  }

  function applyCopy() {
    document.querySelectorAll("[data-i18n]").forEach((node) => {
      node.textContent = t(node.dataset.i18n);
    });
    if ($("#searchInput")) $("#searchInput").placeholder = t("searchPlaceholder");
    if ($("#assistantQuery")) $("#assistantQuery").placeholder = t("assistantPlaceholder");
    if ($("#playBriefButton")) $("#playBriefButton").textContent = t("playBrief");
    document.querySelectorAll(".ad-slot").forEach((node) => { node.textContent = t("ad"); });
  }

  function renderHome() {
    renderCategories();
    renderBrief();
    renderArticles();
    renderMiniLists();
  }

  function renderCategories() {
    const tabs = $("#categoryTabs");
    if (!tabs) return;
    const categories = [{ slug: "all", hi: t("all"), en: t("all") }].concat(data.categories);
    tabs.innerHTML = categories.map((category) => {
      const label = category.slug === "all" ? t("all") : (state.lang === "en" ? category.en : category.hi);
      return `<button type="button" class="${state.category === category.slug ? "active" : ""}" data-category="${escapeAttr(category.slug)}">${escapeHtml(label)}</button>`;
    }).join("");
    tabs.querySelectorAll("[data-category]").forEach((button) => {
      button.addEventListener("click", () => {
        state.category = button.dataset.category;
        renderCategories();
        renderArticles();
      });
    });
  }

  function renderBrief() {
    const list = $("#dailyBriefList");
    if (!list) return;
    list.innerHTML = data.dailyBrief.map((item) => `<li>${escapeHtml(briefText(item))}</li>`).join("");
  }

  function renderArticles() {
    const grid = $("#articleGrid");
    if (!grid) return;
    const query = state.search;
    const articles = data.articles.filter((article) => {
      const categoryOk = state.category === "all" || article.category === state.category;
      const haystack = [text(article, "title"), text(article, "dek"), text(article, "summary"), article.sourceName].join(" ").toLowerCase();
      return categoryOk && (!query || haystack.includes(query));
    });

    grid.innerHTML = articles.length ? articles.map(renderArticleCard).join("") : `<p class="empty-state">${escapeHtml(t("noArticles"))}</p>`;
  }

  function renderArticleCard(article) {
    const category = data.categories.find((item) => item.slug === article.category);
    const label = category ? (state.lang === "en" ? category.en : category.hi) : article.category;
    const saved = getList(keys.bookmarks).includes(article.id);
    return `
      <article class="article-card">
        <div class="card-meta">
          <span>${escapeHtml(label)}</span>
          <span>${escapeHtml(article.readMins)} min</span>
        </div>
        <h3>${escapeHtml(text(article, "title"))}</h3>
        <p>${escapeHtml(text(article, "dek"))}</p>
        <div class="source-line">${escapeHtml(t("source"))}: <a href="${escapeAttr(article.sourceUrl)}" target="_blank" rel="noopener">${escapeHtml(article.sourceName)}</a></div>
        <div class="card-actions">
          <a class="primary-button" href="${escapeAttr(articleUrl(article))}">${escapeHtml(t("read"))}</a>
          <button type="button" class="secondary-button" data-listen="${escapeAttr(article.id)}">${escapeHtml(t("listen"))}</button>
          <button type="button" class="plain-button ${saved ? "saved" : ""}" data-bookmark="${escapeAttr(article.id)}">${escapeHtml(saved ? t("bookmarked") : t("bookmark"))}</button>
        </div>
      </article>
    `;
  }

  function renderArticlePage() {
    const article = findArticle(state.currentArticleId);
    const mount = $("#articleMount");
    if (!mount) return;
    if (!article) {
      mount.innerHTML = `<p class="empty-state">${escapeHtml(t("articleNotFound"))}</p>`;
      return;
    }

    addHistory(article.id);
    document.title = `${text(article, "title")} | Samachar Saral`;
    const saved = getList(keys.bookmarks).includes(article.id);
    mount.innerHTML = `
      <article class="article-page">
        <a class="back-link" href="../index.html">${escapeHtml(t("backHome"))}</a>
        <p class="eyebrow">${escapeHtml(categoryName(article.category))}</p>
        <h1>${escapeHtml(text(article, "title"))}</h1>
        <p class="article-dek">${escapeHtml(text(article, "dek"))}</p>
        <div class="article-toolbar">
          <button type="button" class="primary-button" data-listen="${escapeAttr(article.id)}">${escapeHtml(t("listen"))}</button>
          <button type="button" class="plain-button ${saved ? "saved" : ""}" data-bookmark="${escapeAttr(article.id)}">${escapeHtml(saved ? t("bookmarked") : t("bookmark"))}</button>
          <a class="secondary-button" href="${escapeAttr(article.sourceUrl)}" target="_blank" rel="noopener">${escapeHtml(t("sourceLink"))}</a>
        </div>
        <p class="source-box">${escapeHtml(state.lang === "en" ? article.sourceCreditEn : article.sourceCreditHi)}</p>
        <div class="ad-slot">${escapeHtml(t("ad"))}</div>
        <section class="article-section"><h2>${escapeHtml(t("shortSummary"))}</h2><p>${escapeHtml(text(article, "summary"))}</p></section>
        <section class="article-section"><h2>${escapeHtml(t("why"))}</h2><p>${escapeHtml(text(article, "why"))}</p></section>
        <section class="article-section eli"><h2>${escapeHtml(t("eli15"))}</h2><p>${escapeHtml(text(article, "eli15"))}</p></section>
        <section class="article-section"><h2>${escapeHtml(t("timeline"))}</h2><ol>${article.timeline.map((item) => `<li>${escapeHtml(state.lang === "en" ? item.en : item.hi)}</li>`).join("")}</ol></section>
        <section class="article-section quiz-box"><h2>${escapeHtml(t("quiz"))}</h2><p>${escapeHtml(state.lang === "en" ? article.quiz.questionEn : article.quiz.questionHi)}</p><div class="quiz-options">${quizOptions(article)}</div><p id="quizResult" class="quiz-result"></p></section>
      </article>
    `;
    renderMiniLists();
  }

  function quizOptions(article) {
    const options = state.lang === "en" ? article.quiz.optionsEn : article.quiz.optionsHi;
    return options.map((option, index) => `<button type="button" data-quiz-option="${index}">${escapeHtml(option)}</button>`).join("");
  }

  function answerQuiz(index) {
    const article = findArticle(state.currentArticleId);
    const result = $("#quizResult");
    if (!article || !result) return;
    result.textContent = index === article.quiz.answer ? t("correct") : t("wrong");
    result.className = "quiz-result " + (index === article.quiz.answer ? "good" : "bad");
  }

  function runAssistant() {
    const input = $("#assistantQuery");
    const answer = $("#assistantAnswer");
    if (!input || !answer) return;
    const query = input.value.trim().toLowerCase();
    if (!query) {
      answer.innerHTML = `<p>${escapeHtml(t("assistantEmpty"))}</p>`;
      state.assistantText = t("assistantEmpty");
      return;
    }
    const matches = data.articles.filter((article) => {
      const haystack = [article.sourceName, article.category, text(article, "title"), text(article, "summary"), text(article, "eli15")].join(" ").toLowerCase();
      return haystack.includes(query);
    }).slice(0, 4);
    if (!matches.length) {
      answer.innerHTML = `<p>${escapeHtml(t("assistantNoMatch"))}</p><div class="assistant-links">${sourceLinks(query)}</div>`;
      state.assistantText = t("assistantNoMatch");
      return;
    }
    const response = `${t("assistantIntro")} ${matches.map((article, index) => `${index + 1}. ${text(article, "title")}. ${text(article, "eli15")}`).join(" ")}`;
    state.assistantText = response;
    answer.innerHTML = `
      <p>${escapeHtml(t("assistantIntro"))}</p>
      <div class="assistant-results">
        ${matches.map((article) => `
          <a href="articles/${escapeAttr(article.slug)}">
            <strong>${escapeHtml(text(article, "title"))}</strong>
            <span>${escapeHtml(text(article, "eli15"))}</span>
            <small>${escapeHtml(article.sourceName)}</small>
          </a>
        `).join("")}
      </div>
      <div class="assistant-links">${sourceLinks(query)}</div>
    `;
  }

  function sourceLinks(query) {
    const sources = [
      ["PIB", "https://pib.gov.in/"],
      ["WHO News", "https://www.who.int/news"],
      ["National Career Service", "https://www.ncs.gov.in/"],
      ["IMD", "https://mausam.imd.gov.in/"],
      ["Scholarship Portal", "https://scholarships.gov.in/"]
    ];
    return sources.map(([name, url]) => `<a href="${url}" target="_blank" rel="noopener">${escapeHtml(name)}</a>`).join("");
  }

  function renderMiniLists() {
    renderMiniList("#bookmarkList", getList(keys.bookmarks), t("emptyBookmarks"));
    renderMiniList("#historyList", getList(keys.history), t("emptyHistory"));
  }

  function renderMiniList(selector, ids, empty) {
    const node = $(selector);
    if (!node) return;
    const items = ids.map(findArticle).filter(Boolean).slice(0, 5);
    node.innerHTML = items.length ? items.map((article) => `<a href="${escapeAttr(articleUrl(article))}">${escapeHtml(text(article, "title"))}</a>`).join("") : `<p>${escapeHtml(empty)}</p>`;
  }

  function toggleBookmark(id) {
    const list = getList(keys.bookmarks);
    const next = list.includes(id) ? list.filter((item) => item !== id) : [id].concat(list);
    setList(keys.bookmarks, next);
    if (state.currentArticleId) renderArticlePage();
    renderArticles();
    renderMiniLists();
  }

  function addHistory(id) {
    const list = getList(keys.history).filter((item) => item !== id);
    setList(keys.history, [id].concat(list).slice(0, 12));
  }

  function getList(key) {
    try {
      const value = JSON.parse(localStorage.getItem(key) || "[]");
      return Array.isArray(value) ? value : [];
    } catch (error) {
      return [];
    }
  }

  function setList(key, value) {
    localStorage.setItem(key, JSON.stringify(value));
  }

  function articleSpeakText(article) {
    if (!article) return "";
    return [text(article, "title"), text(article, "summary"), text(article, "why"), text(article, "eli15")].join(". ");
  }

  function speak(value) {
    const textValue = String(value || "").trim();
    if (!textValue || !window.speechSynthesis) return;
    stopSpeech();
    const utterance = new SpeechSynthesisUtterance(textValue);
    utterance.lang = state.lang === "en" ? "en-IN" : "hi-IN";
    utterance.rate = state.lang === "en" ? 0.95 : 0.9;
    window.speechSynthesis.speak(utterance);
  }

  function stopSpeech() {
    if (window.speechSynthesis) window.speechSynthesis.cancel();
  }

  function briefText(item) {
    return state.lang === "en" ? item.en : item.hi;
  }

  function categoryName(slug) {
    const found = data.categories.find((item) => item.slug === slug);
    return found ? (state.lang === "en" ? found.en : found.hi) : slug;
  }

  function findArticle(id) {
    return data.articles.find((article) => article.id === id || article.slug === id);
  }

  function articleUrl(article) {
    const prefix = location.pathname.includes("/articles/") ? "" : "articles/";
    return prefix + article.slug;
  }

  function escapeHtml(value) {
    return String(value || "")
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;")
      .replace(/'/g, "&#039;");
  }

  function escapeAttr(value) {
    return escapeHtml(value).replace(/`/g, "&#096;");
  }

  init();
}());
