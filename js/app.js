const AppNavigator = (function () {
  let activeViewId = "view-home";

  function showView(viewId) {
    const views = document.querySelectorAll(".app-view");
    views.forEach(v => {
      v.classList.remove("active");
      v.setAttribute("aria-hidden", "true");
    });

    const targetView = document.getElementById(viewId);
    if (targetView) {
      targetView.classList.add("active");
      targetView.setAttribute("aria-hidden", "false");
      activeViewId = viewId;
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  }

  function getActiveView() {
    return activeViewId;
  }

  return { showView, getActiveView };
})();

const HomeSelectionState = {
  studentName: "",
  selectedGrade: 3,
  selectedSubjectId: null,
  selectedReligionId: null,
  selectedLevel: "mudah",
  selectedQuestionCount: 10
};

document.addEventListener("DOMContentLoaded", function () {

  if (typeof window.validateQuestionBank === "function") {
    window.validateQuestionBank();
  }

  initAudioToggle();

  initHomeControls();

  initModals();

  initHistoryControls();

  AppNavigator.showView("view-home");
});

function initAudioToggle() {
  const toggleBtn = document.getElementById("btn-audio-toggle");
  if (!toggleBtn) return;

  function updateIcon() {
    const isMuted = QuizStorage.getAudioMuted();
    toggleBtn.innerHTML = isMuted
      ? `<span aria-hidden="true">🔇</span> <span>Suara: Mati</span>`
      : `<span aria-hidden="true">🔊</span> <span>Suara: Hidup</span>`;
    toggleBtn.setAttribute("aria-label", isMuted ? "Aktifkan efek suara" : "Matikan efek suara");
  }

  updateIcon();

  toggleBtn.addEventListener("click", function () {
    const isMuted = QuizStorage.getAudioMuted();
    QuizStorage.setAudioMuted(!isMuted);
    updateIcon();
  });
}

function initHomeControls() {
  const studentNameInput = document.getElementById("input-student-name");
  const gradeButtons = document.querySelectorAll(".grade-pill-btn");
  const religionSection = document.getElementById("religion-selector-section");
  const religionSelectEl = document.getElementById("select-religion");
  const levelButtons = document.querySelectorAll(".level-card-btn");
  const btnStartQuiz = document.getElementById("btn-start-quiz");
  const btnNavHistory = document.getElementById("btn-nav-history");

  if (studentNameInput) {
    studentNameInput.addEventListener("input", function (e) {
      HomeSelectionState.studentName = e.target.value.trim();
    });
  }

  if (btnNavHistory) {
    btnNavHistory.addEventListener("click", function () {
      QuizEngine.playClickSound();
      renderHistoryView();
      AppNavigator.showView("view-history");
    });
  }

  gradeButtons.forEach(btn => {
    btn.addEventListener("click", function () {
      QuizEngine.playClickSound();
      gradeButtons.forEach(b => b.classList.remove("active"));
      this.classList.add("active");

      const gradeVal = parseInt(this.getAttribute("data-grade"), 10);
      HomeSelectionState.selectedGrade = gradeVal;

      HomeSelectionState.selectedSubjectId = null;
      HomeSelectionState.selectedReligionId = null;
      if (religionSection) religionSection.style.display = "none";

      renderSubjectCards(gradeVal);
      updateLevelSummaryNotice();
      validateStartButton();
    });
  });

  if (religionSelectEl) {
    religionSelectEl.addEventListener("change", function () {
      QuizEngine.playClickSound();
      HomeSelectionState.selectedReligionId = this.value || null;
      updateLevelSummaryNotice();
      validateStartButton();
    });
  }

  levelButtons.forEach(btn => {
    btn.addEventListener("click", function () {
      QuizEngine.playClickSound();
      levelButtons.forEach(b => b.classList.remove("active"));
      this.classList.add("active");

      const lvl = this.getAttribute("data-level");
      const count = parseInt(this.getAttribute("data-count"), 10);
      HomeSelectionState.selectedLevel = lvl;
      HomeSelectionState.selectedQuestionCount = count;

      updateLevelSummaryNotice();
      validateStartButton();
    });
  });

  if (btnStartQuiz) {
    btnStartQuiz.addEventListener("click", function () {
      if (this.disabled) return;
      QuizEngine.playClickSound();

      const subjectMeta = SUBJECT_LIST.find(s => s.id === HomeSelectionState.selectedSubjectId);
      const subjectName = subjectMeta ? subjectMeta.name : "Kuis";

      let religionName = null;
      if (HomeSelectionState.selectedReligionId) {
        const relMeta = RELIGION_OPTIONS.find(r => r.id === HomeSelectionState.selectedReligionId);
        religionName = relMeta ? relMeta.name : null;
      }

      const success = QuizEngine.startQuiz({
        studentName: HomeSelectionState.studentName,
        grade: HomeSelectionState.selectedGrade,
        subjectId: HomeSelectionState.selectedSubjectId,
        subjectName: subjectName,
        religionId: HomeSelectionState.selectedReligionId,
        religionName: religionName,
        level: HomeSelectionState.selectedLevel,
        questionCount: HomeSelectionState.selectedQuestionCount
      });

      if (success) {
        AppNavigator.showView("view-quiz");
      }
    });
  }

  renderSubjectCards(HomeSelectionState.selectedGrade);
  updateLevelSummaryNotice();
  validateStartButton();
}

function renderSubjectCards(grade) {
  const container = document.getElementById("subjects-grid");
  if (!container) return;

  container.innerHTML = "";

  const availableSubjects = SUBJECT_LIST.filter(subj => subj.grades.includes(grade));

  if (availableSubjects.length === 0) {
    container.innerHTML = `
      <div class="empty-subjects-notice">
        <p>⚠️ Belum ada bank soal yang tersedia untuk Kelas ${grade} SD.</p>
      </div>
    `;
    return;
  }

  availableSubjects.forEach(subj => {
    const card = document.createElement("button");
    card.type = "button";
    card.className = "subject-card";
    card.setAttribute("data-subject-id", subj.id);
    card.setAttribute("aria-label", `Pilih mata pelajaran ${subj.name}, tersedia Level Mudah, Sedang, dan Sulit`);

    card.innerHTML = `
      <div class="subject-card-icon" style="background-color: ${subj.color}15; color: ${subj.color};">
        <span class="icon-emoji">${subj.icon}</span>
      </div>
      <div class="subject-card-info">
        <h3 class="subject-card-name">${subj.name}</h3>
        <p class="subject-card-desc">${subj.description}</p>
        <div class="subject-card-footer">
          <div class="subject-levels-badge">
            <span class="lvl-tag lvl-easy">🟢 Mudah (10)</span>
            <span class="lvl-tag lvl-medium">🟡 Sedang (20)</span>
            <span class="lvl-tag lvl-hard">🔴 Sulit (30)</span>
          </div>
        </div>
      </div>
    `;

    card.addEventListener("click", function () {
      QuizEngine.playClickSound();

      document.querySelectorAll(".subject-card").forEach(c => c.classList.remove("active"));
      this.classList.add("active");

      HomeSelectionState.selectedSubjectId = subj.id;

      const religionSection = document.getElementById("religion-selector-section");
      if (subj.requiresReligion) {
        if (religionSection) {
          religionSection.style.display = "block";
          populateReligionOptions(grade);
        }
      } else {
        if (religionSection) religionSection.style.display = "none";
        HomeSelectionState.selectedReligionId = null;
      }

      updateLevelSummaryNotice();
      validateStartButton();
    });

    container.appendChild(card);
  });
}

function populateReligionOptions(grade) {
  const select = document.getElementById("select-religion");
  const religionNotice = document.getElementById("religion-availability-notice");
  if (!select) return;

  select.innerHTML = `<option value="">-- Pilih Agama / Kepercayaan --</option>`;

  RELIGION_OPTIONS.forEach(rel => {
    const count = QUESTIONS_DATA.filter(
      q => q.grade === grade && q.subject === "pendidikan-agama" && q.religion === rel.id
    ).length;

    const option = document.createElement("option");
    option.value = rel.id;
    if (count > 0) {
      option.textContent = `${rel.name} (${count} soal siap)`;
    } else {
      option.textContent = `${rel.name} (materi sedang disiapkan)`;
    }
    select.appendChild(option);
  });

  select.onchange = function () {
    const relId = this.value;
    HomeSelectionState.selectedReligionId = relId || null;

    if (!relId) {
      if (religionNotice) religionNotice.style.display = "none";
    } else {
      const count = QUESTIONS_DATA.filter(
        q => q.grade === grade && q.subject === "pendidikan-agama" && q.religion === relId
      ).length;

      if (count === 0 && religionNotice) {
        religionNotice.innerHTML = `
          <span>ℹ️</span>
          <div>
            <strong>Materi Sedang Disiapkan:</strong>
            <p>Bank latihan untuk agama ini sedang disiapkan oleh bapak/ibu guru. Silakan memilih mata pelajaran atau materi lain ya!</p>
          </div>
        `;
        religionNotice.style.display = "flex";
      } else if (religionNotice) {
        religionNotice.style.display = "none";
      }
    }

    updateLevelSummaryNotice();
    validateStartButton();
  };
}

function updateLevelSummaryNotice() {
  const summaryNotice = document.getElementById("selection-summary-notice");
  if (!summaryNotice) return;

  if (!HomeSelectionState.selectedSubjectId) {
    summaryNotice.style.display = "none";
    return;
  }

  const lvlConfig = window.LEVELS_CONFIG && window.LEVELS_CONFIG[HomeSelectionState.selectedLevel]
    ? window.LEVELS_CONFIG[HomeSelectionState.selectedLevel]
    : { name: "Level Mudah", count: 10, icon: "🟢" };

  const subjMeta = SUBJECT_LIST.find(s => s.id === HomeSelectionState.selectedSubjectId);
  const subjName = subjMeta ? subjMeta.name : "Kuis";

  summaryNotice.className = "selection-summary-notice notice-ready";
  summaryNotice.innerHTML = `
    <span>${lvlConfig.icon}</span>
    <p>Siap! Memilih <strong>${lvlConfig.name} (${lvlConfig.count} Soal)</strong> untuk <strong>${escapeHtml(subjName)} Kelas ${HomeSelectionState.selectedGrade} SD</strong>.</p>
  `;
  summaryNotice.style.display = "flex";
}

function validateStartButton() {
  const btnStartQuiz = document.getElementById("btn-start-quiz");
  if (!btnStartQuiz) return;

  const hasGrade = !!HomeSelectionState.selectedGrade;
  const hasSubject = !!HomeSelectionState.selectedSubjectId;

  const isAgama = HomeSelectionState.selectedSubjectId === "pendidikan-agama";
  const hasReligionIfRequired = !isAgama || !!HomeSelectionState.selectedReligionId;

  const isValid = hasGrade && hasSubject && hasReligionIfRequired;
  btnStartQuiz.disabled = !isValid;

  if (isValid) {
    btnStartQuiz.classList.add("pulse-ready");
  } else {
    btnStartQuiz.classList.remove("pulse-ready");
  }
}

function initModals() {

  const btnExitQuiz = document.getElementById("btn-exit-quiz");
  const modalExit = document.getElementById("modal-confirm-exit");
  const btnCancelExit = document.getElementById("btn-cancel-exit");
  const btnConfirmExit = document.getElementById("btn-confirm-exit");

  if (btnExitQuiz && modalExit) {
    btnExitQuiz.addEventListener("click", function () {
      QuizEngine.playClickSound();
      modalExit.classList.add("active");
    });

    if (btnCancelExit) {
      btnCancelExit.addEventListener("click", function () {
        QuizEngine.playClickSound();
        modalExit.classList.remove("active");
      });
    }

    if (btnConfirmExit) {
      btnConfirmExit.addEventListener("click", function () {
        QuizEngine.playClickSound();
        modalExit.classList.remove("active");
        AppNavigator.showView("view-home");
      });
    }
  }

  const btnRestartQuiz = document.getElementById("btn-restart-quiz");
  const btnChooseOther = document.getElementById("btn-choose-other");
  const btnResultsToHome = document.getElementById("btn-results-to-home");

  if (btnRestartQuiz) {
    btnRestartQuiz.addEventListener("click", function () {
      QuizEngine.playClickSound();
      QuizEngine.restartCurrentQuiz();
      AppNavigator.showView("view-quiz");
    });
  }

  if (btnChooseOther) {
    btnChooseOther.addEventListener("click", function () {
      QuizEngine.playClickSound();
      AppNavigator.showView("view-home");
    });
  }

  if (btnResultsToHome) {
    btnResultsToHome.addEventListener("click", function () {
      QuizEngine.playClickSound();
      AppNavigator.showView("view-home");
    });
  }
}

function initHistoryControls() {
  const btnBackHome = document.getElementById("btn-history-back-home");
  const btnClearAll = document.getElementById("btn-clear-all-history");
  const modalClear = document.getElementById("modal-confirm-clear-history");
  const btnCancelClear = document.getElementById("btn-cancel-clear-history");
  const btnConfirmClear = document.getElementById("btn-confirm-clear-history");

  if (btnBackHome) {
    btnBackHome.addEventListener("click", function () {
      QuizEngine.playClickSound();
      AppNavigator.showView("view-home");
    });
  }

  if (btnClearAll && modalClear) {
    btnClearAll.addEventListener("click", function () {
      QuizEngine.playClickSound();
      modalClear.classList.add("active");
    });

    if (btnCancelClear) {
      btnCancelClear.addEventListener("click", function () {
        QuizEngine.playClickSound();
        modalClear.classList.remove("active");
      });
    }

    if (btnConfirmClear) {
      btnConfirmClear.addEventListener("click", function () {
        QuizEngine.playClickSound();
        QuizStorage.clearAllHistory();
        modalClear.classList.remove("active");
        renderHistoryView();
      });
    }
  }

  const modalDetail = document.getElementById("modal-history-detail");
  const btnCloseDetail = document.getElementById("btn-close-history-detail");
  if (btnCloseDetail && modalDetail) {
    btnCloseDetail.addEventListener("click", function () {
      QuizEngine.playClickSound();
      modalDetail.classList.remove("active");
    });
  }
}

function renderHistoryView() {
  const historyList = QuizStorage.getAllHistory();
  const container = document.getElementById("history-items-container");
  const emptyState = document.getElementById("history-empty-state");
  const btnClearAll = document.getElementById("btn-clear-all-history");
  const statsSummary = document.getElementById("history-stats-summary");

  if (!container) return;
  container.innerHTML = "";

  if (historyList.length === 0) {
    if (emptyState) emptyState.style.display = "block";
    if (btnClearAll) btnClearAll.style.display = "none";
    if (statsSummary) statsSummary.style.display = "none";
    return;
  }

  if (emptyState) emptyState.style.display = "none";
  if (btnClearAll) btnClearAll.style.display = "inline-flex";

  if (statsSummary) {
    statsSummary.style.display = "grid";
    const totalAttempt = historyList.length;
    const avgScore = Math.round(historyList.reduce((acc, h) => acc + h.score, 0) / totalAttempt);
    const bestScore = Math.max(...historyList.map(h => h.score));

    document.getElementById("stat-total-attempts").textContent = totalAttempt;
    document.getElementById("stat-avg-score").textContent = avgScore;
    document.getElementById("stat-best-score").textContent = bestScore;
  }

  historyList.forEach(item => {
    const card = document.createElement("div");
    card.className = "history-card";

    const subjectFull = item.religionName
      ? `${item.subjectName} (${item.religionName})`
      : item.subjectName;

    let scoreColorClass = "score-high";
    if (item.score < 60) scoreColorClass = "score-low";
    else if (item.score < 80) scoreColorClass = "score-med";

    card.innerHTML = `
      <div class="history-card-main">
        <div class="history-score-circle ${scoreColorClass}">
          <span class="history-score-val">${item.score}</span>
          <span class="history-score-label">NILAI</span>
        </div>
        <div class="history-card-details">
          <div class="history-card-header">
            <h4 class="history-student-name">${escapeHtml(item.studentName)}</h4>
            <span class="history-date">${escapeHtml(item.dateFormatted)}</span>
          </div>
          <div class="history-meta-row">
            <span class="history-badge-grade">Kelas ${item.grade} SD</span>
            <span class="history-badge-subject">${escapeHtml(subjectFull)}</span>
            ${item.level ? `<span class="history-badge-grade">Level ${escapeHtml(item.level.toUpperCase())}</span>` : ""}
          </div>
          <div class="history-stats-row">
            <span>📝 ${item.totalQuestions} Soal</span>
            <span class="text-correct">✅ ${item.correctCount} Benar</span>
            <span class="text-wrong">❌ ${item.wrongCount} Salah</span>
          </div>
        </div>
      </div>
      <div class="history-card-actions">
        <button type="button" class="btn-action-view" title="Lihat detail review soal">
          👁️ Detail
        </button>
        <button type="button" class="btn-action-delete" title="Hapus riwayat ini">
          🗑️ Hapus
        </button>
      </div>
    `;

    const btnView = card.querySelector(".btn-action-view");
    btnView.addEventListener("click", () => {
      QuizEngine.playClickSound();
      showHistoryDetailModal(item);
    });

    const btnDelete = card.querySelector(".btn-action-delete");
    btnDelete.addEventListener("click", () => {
      QuizEngine.playClickSound();
      if (confirm(`Hapus catatan riwayat kuis tanggal ${item.dateFormatted}?`)) {
        QuizStorage.deleteHistoryById(item.id);
        renderHistoryView();
      }
    });

    container.appendChild(card);
  });
}

function showHistoryDetailModal(item) {
  const modal = document.getElementById("modal-history-detail");
  const titleEl = document.getElementById("history-detail-title");
  const bodyEl = document.getElementById("history-detail-body");

  if (!modal || !bodyEl) return;

  const subjectFull = item.religionName
    ? `${item.subjectName} (${item.religionName})`
    : item.subjectName;

  titleEl.textContent = `Detail Kuis: ${item.studentName} - Kelas ${item.grade} (${subjectFull})`;

  let contentHtml = `
    <div class="modal-detail-summary">
      <div class="detail-stat-pill"><strong>Tanggal:</strong> ${escapeHtml(item.dateFormatted)}</div>
      <div class="detail-stat-pill"><strong>Nilai:</strong> <span class="badge-score-val">${item.score}</span></div>
      <div class="detail-stat-pill"><strong>Benar:</strong> ${item.correctCount} / ${item.totalQuestions}</div>
    </div>
    <hr class="detail-divider" />
    <h4 class="detail-section-title">Daftar Soal & Jawaban:</h4>
    <div class="detail-reviews-list">
  `;

  const letters = ["A", "B", "C", "D"];

  if (!item.reviewItems || item.reviewItems.length === 0) {
    contentHtml += `<p class="text-muted">Rincian soal tidak tersedia untuk catatan ini.</p>`;
  } else {
    item.reviewItems.forEach((rev, idx) => {
      const studentAns = rev.options[rev.selectedIndex] || "-";
      const correctAns = rev.options[rev.correctIndex] || "-";

      contentHtml += `
        <div class="detail-rev-item ${rev.isCorrect ? "rev-item-correct" : "rev-item-wrong"}">
          <div class="detail-rev-header">
            <strong>Soal #${idx + 1}</strong>
            <span class="badge-status">${rev.isCorrect ? "✅ Benar" : "❌ Salah"}</span>
          </div>
          <p class="detail-rev-q">${escapeHtml(rev.questionText)}</p>
          <div class="detail-rev-ans">
            <div><small>Jawaban Murid:</small> <strong>${letters[rev.selectedIndex]}. ${escapeHtml(studentAns)}</strong></div>
            ${
              !rev.isCorrect
                ? `<div><small>Kunci Benar:</small> <strong class="text-correct">${letters[rev.correctIndex]}. ${escapeHtml(correctAns)}</strong></div>`
                : ""
            }
          </div>
          <div class="detail-rev-exp">
            <small>💡 Pembahasan:</small>
            <p>${escapeHtml(rev.explanation || "-")}</p>
          </div>
        </div>
      `;
    });
  }

  contentHtml += `</div>`;
  bodyEl.innerHTML = contentHtml;
  modal.classList.add("active");
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

if (typeof window !== "undefined") {
  window.AppNavigator = AppNavigator;
  window.HomeSelectionState = HomeSelectionState;
}
