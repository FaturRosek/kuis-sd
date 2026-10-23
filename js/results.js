const ResultsView = (function () {
  let currentResultData = null;
  let activeFilter = "all";

  function renderResults(resultData) {
    currentResultData = resultData;
    activeFilter = "all";

    const studentNameEl = document.getElementById("res-student-name");
    const subjectGradeEl = document.getElementById("res-subject-grade");
    const scoreNumberEl = document.getElementById("res-score-number");
    const scoreBadgeEl = document.getElementById("res-score-badge");
    const motivMessageEl = document.getElementById("res-motivation-message");
    const countTotalEl = document.getElementById("res-count-total");
    const countCorrectEl = document.getElementById("res-count-correct");
    const countWrongEl = document.getElementById("res-count-wrong");
    const dateFormattedEl = document.getElementById("res-date-formatted");

    const displayName = (resultData.studentName || "").trim() || "Murid Hebat";
    studentNameEl.textContent = displayName;

    const subjectFull = resultData.religionName
      ? `${resultData.subjectName} (${resultData.religionName})`
      : resultData.subjectName;
    const levelText = resultData.level ? ` • Level ${resultData.level.toUpperCase()} (${resultData.totalQuestions} Soal)` : "";
    subjectGradeEl.textContent = `Kelas ${resultData.grade} SD • ${subjectFull}${levelText}`;

    if (dateFormattedEl) {
      dateFormattedEl.textContent = resultData.dateFormatted || QuizStorage.formatDateTime(new Date());
    }

    countTotalEl.textContent = resultData.totalQuestions;
    countCorrectEl.textContent = resultData.correctCount;
    countWrongEl.textContent = resultData.wrongCount;
    scoreNumberEl.textContent = resultData.score;

    const scoreEvaluation = getScoreEvaluation(resultData.score);
    scoreBadgeEl.textContent = scoreEvaluation.badge;
    scoreBadgeEl.className = "results-score-badge " + scoreEvaluation.badgeClass;
    motivMessageEl.innerHTML = scoreEvaluation.messageHtml;

    setupReviewFilterButtons(resultData);

    renderReviewList(resultData.reviewItems || [], activeFilter);

    const resultsContainer = document.getElementById("view-results");
    if (resultsContainer) {
      resultsContainer.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  }

  function getScoreEvaluation(score) {
    if (score === 100) {
      return {
        badge: "SEMPURNA! 🏆",
        badgeClass: "badge-gold",
        messageHtml: `
          <h3 class="res-msg-title">Luar Biasa, Kamu Juara Sejati! 🌟🎉</h3>
          <p class="res-msg-desc">Seluruh jawabanmu tepat 100%! Pemahamanmu tentang materi ini sangat mengagumkan. Pertahankan semangat belajar yang luar biasa ini ya!</p>
        `
      };
    } else if (score >= 80) {
      return {
        badge: "SANGAT BAIK ⭐",
        badgeClass: "badge-green",
        messageHtml: `
          <h3 class="res-msg-title">Hebat Sekali, Prestasi Gemilang! 🚀</h3>
          <p class="res-msg-desc">Nilaimu sangat bagus! Kamu sudah menguasai sebagian besar materi dengan baik. Pelajari sedikit soal yang terlewat agar semakin sempurna.</p>
        `
      };
    } else if (score >= 60) {
      return {
        badge: "BAIK 👍",
        badgeClass: "badge-blue",
        messageHtml: `
          <h3 class="res-msg-title">Bagus! Terus Semangat Belajar! 📚</h3>
          <p class="res-msg-desc">Usahamu sudah bagus! Yuk pelajari pembahasan soal-soal di bawah ini agar pemahamanmu semakin bertambah dan nilaimu makin meningkat.</p>
        `
      };
    } else {
      return {
        badge: "TETAP SEMANGAT 🌱",
        badgeClass: "badge-orange",
        messageHtml: `
          <h3 class="res-msg-title">Tidak Apa-apa, Belajar Itu Proses! 💪✨</h3>
          <p class="res-msg-desc">Jangan bersedih atau berkecil hati. Setiap kesalahan adalah kesempatan berharga untuk belajar. Baca pembahasan lengkap di bawah ini, lalu kita coba lagi ya!</p>
        `
      };
    }
  }

  function setupReviewFilterButtons(resultData) {
    const btnAll = document.getElementById("btn-filter-review-all");
    const btnWrong = document.getElementById("btn-filter-review-wrong");

    if (btnAll && btnWrong) {
      btnAll.className = "filter-btn active";
      btnWrong.className = "filter-btn";

      btnWrong.innerHTML = `<span>Hanya Jawaban Salah</span> <span class="filter-count">(${resultData.wrongCount})</span>`;

      if (resultData.wrongCount === 0) {
        btnWrong.disabled = true;
        btnWrong.title = "Tidak ada jawaban yang salah! Semua benar!";
      } else {
        btnWrong.disabled = false;
        btnWrong.title = "";
      }

      btnAll.onclick = () => {
        QuizEngine.playClickSound();
        activeFilter = "all";
        btnAll.classList.add("active");
        btnWrong.classList.remove("active");
        renderReviewList(resultData.reviewItems || [], "all");
      };

      btnWrong.onclick = () => {
        QuizEngine.playClickSound();
        activeFilter = "wrong";
        btnWrong.classList.add("active");
        btnAll.classList.remove("active");
        renderReviewList(resultData.reviewItems || [], "wrong");
      };
    }
  }

  function renderReviewList(items, filter) {
    const container = document.getElementById("review-items-container");
    if (!container) return;

    container.innerHTML = "";

    const filteredItems = items.filter(item => {
      if (filter === "wrong") return !item.isCorrect;
      return true;
    });

    if (filteredItems.length === 0) {
      const emptyNotice = document.createElement("div");
      emptyNotice.className = "review-empty-state";
      emptyNotice.innerHTML = `
        <span class="empty-icon">🎉</span>
        <p><strong>Hebat! Tidak ada jawaban yang salah untuk ditampilkan.</strong></p>
      `;
      container.appendChild(emptyNotice);
      return;
    }

    const letters = ["A", "B", "C", "D"];

    filteredItems.forEach((item, index) => {

      const originalNumber = items.indexOf(item) + 1;
      const card = document.createElement("div");
      card.className = "review-card " + (item.isCorrect ? "review-correct" : "review-wrong");

      const studentChoiceText = item.options[item.selectedIndex] || "-";
      const correctChoiceText = item.options[item.correctIndex] || "-";

      card.innerHTML = `
        <div class="review-card-header">
          <div class="review-number-box">
            <span class="review-num">#${originalNumber}</span>
            <span class="review-status-badge ${item.isCorrect ? "badge-is-correct" : "badge-is-wrong"}">
              ${item.isCorrect ? "✅ Benar" : "❌ Salah"}
            </span>
            ${item.topic ? `<span class="review-topic-tag">${escapeHtml(item.topic)}</span>` : ""}
          </div>
        </div>

        <div class="review-question-text">
          ${escapeHtml(item.questionText)}
        </div>

        <div class="review-answers-grid">
          <div class="review-ans-col ${item.isCorrect ? "ans-col-correct" : "ans-col-user-wrong"}">
            <span class="ans-col-title">Jawabanmu:</span>
            <div class="ans-pill">
              <span class="ans-letter">${letters[item.selectedIndex] || "?"}</span>
              <span class="ans-text">${escapeHtml(studentChoiceText)}</span>
            </div>
          </div>

          ${
            !item.isCorrect
              ? `
            <div class="review-ans-col ans-col-key">
              <span class="ans-col-title">Kunci Jawaban Benar:</span>
              <div class="ans-pill">
                <span class="ans-letter">${letters[item.correctIndex]}</span>
                <span class="ans-text">${escapeHtml(correctChoiceText)}</span>
              </div>
            </div>
          `
              : ""
          }
        </div>

        <div class="review-explanation-box">
          <span class="exp-icon">💡</span>
          <div>
            <strong>Pembahasan:</strong>
            <p>${escapeHtml(item.explanation || "Pembahasan belum tersedia.")}</p>
          </div>
        </div>
      `;

      container.appendChild(card);
    });
  }

  function escapeHtml(str) {
    if (typeof str !== "string") return str;
    return str
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;")
      .replace(/'/g, "&#039;");
  }

  return {
    renderResults,
    getCurrentResult: () => currentResultData
  };
})();

if (typeof window !== "undefined") {
  window.ResultsView = ResultsView;
}
