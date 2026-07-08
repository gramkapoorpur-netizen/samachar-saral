(function () {
  "use strict";

  const data = window.SAMACHAR_SARAL_DATA || { articles: [] };
  const editsKey = "samacharSaralAdminEdits";
  let selected = data.articles[0] ? data.articles[0].id : "";

  function $(selector) { return document.querySelector(selector); }

  function init() {
    renderDrafts();
    renderEditor();
    $("#editorForm").addEventListener("submit", saveEdit);
  }

  function renderDrafts() {
    const edits = getEdits();
    $("#draftList").innerHTML = data.articles.map((article) => `
      <button type="button" class="${selected === article.id ? "active" : ""}" data-id="${article.id}">
        <strong>${escapeHtml(article.titleHi)}</strong>
        <span>${edits[article.id] ? "Reviewed locally" : "Draft"}</span>
      </button>
    `).join("");
    document.querySelectorAll("[data-id]").forEach((button) => {
      button.addEventListener("click", () => {
        selected = button.dataset.id;
        renderDrafts();
        renderEditor();
      });
    });
  }

  function renderEditor() {
    const article = data.articles.find((item) => item.id === selected);
    if (!article) return;
    const edit = getEdits()[article.id] || {};
    $("#editorTitle").textContent = article.titleHi;
    const form = $("#editorForm");
    form.title.value = edit.title || article.titleHi;
    form.summary.value = edit.summary || article.summaryHi;
    form.why.value = edit.why || article.whyHi;
    form.eli15.value = edit.eli15 || article.eli15Hi;
    form.sourceUrl.value = edit.sourceUrl || article.sourceUrl;
  }

  function saveEdit(event) {
    event.preventDefault();
    const form = event.currentTarget;
    const edits = getEdits();
    edits[selected] = {
      title: form.title.value.trim(),
      summary: form.summary.value.trim(),
      why: form.why.value.trim(),
      eli15: form.eli15.value.trim(),
      sourceUrl: form.sourceUrl.value.trim(),
      reviewedAt: new Date().toISOString()
    };
    localStorage.setItem(editsKey, JSON.stringify(edits));
    $("#adminStatus").textContent = "Saved locally. Production API route: PUT /api/admin/articles/" + selected;
    renderDrafts();
  }

  function getEdits() {
    try { return JSON.parse(localStorage.getItem(editsKey) || "{}"); } catch (error) { return {}; }
  }

  function escapeHtml(value) {
    return String(value || "").replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#039;");
  }

  init();
}());
