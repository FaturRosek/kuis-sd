const QuizEngine = (function () {

  let state = {
    studentName: "",
    grade: 1,
    subjectId: "",
    subjectName: "",
    religion: null,
    religionName: null,
    questions: [],
    currentIndex: 0,
    userAnswers: [],
    isAnswered: false,
    startTime: null
  };

  let audioCtx = null;

  function getAudioContext() {
    if (!audioCtx && (window.AudioContext || window.webkitAudioContext)) {
      const AudioCtxClass = window.AudioContext || window.webkitAudioContext;
      audioCtx = new AudioCtxClass();
    }
    if (audioCtx && audioCtx.state === "suspended") {
      audioCtx.resume();
    }
    return audioCtx;
  }

  function playCorrectSound() {
    if (QuizStorage.getAudioMuted()) return;
    try {
      const ctx = getAudioContext();
      if (!ctx) return;

      const notes = [523.25, 659.25, 783.99];
      notes.forEach((freq, idx) => {
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();

        osc.type = "sine";
        osc.frequency.setValueAtTime(freq, ctx.currentTime + idx * 0.1);

        gain.gain.setValueAtTime(0, ctx.currentTime + idx * 0.1);
        gain.gain.linearRampToValueAtTime(0.2, ctx.currentTime + idx * 0.1 + 0.03);
        gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + idx * 0.1 + 0.28);

        osc.connect(gain);
        gain.connect(ctx.destination);

        osc.start(ctx.currentTime + idx * 0.1);
        osc.stop(ctx.currentTime + idx * 0.1 + 0.3);
      });
    } catch (e) {

    }
  }

  function playWrongSound() {
    if (QuizStorage.getAudioMuted()) return;
    try {
      const ctx = getAudioContext();
      if (!ctx) return;

      const osc = ctx.createOscillator();
      const gain = ctx.createGain();

      osc.type = "triangle";
      osc.frequency.setValueAtTime(329.63, ctx.currentTime);
      osc.frequency.exponentialRampToValueAtTime(261.63, ctx.currentTime + 0.3);

      gain.gain.setValueAtTime(0.18, ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.35);

      osc.connect(gain);
      gain.connect(ctx.destination);

      osc.start(ctx.currentTime);
      osc.stop(ctx.currentTime + 0.35);
    } catch (e) {

    }
  }

  function playClickSound() {
    if (QuizStorage.getAudioMuted()) return;
    try {
      const ctx = getAudioContext();
      if (!ctx) return;

      const osc = ctx.createOscillator();
      const gain = ctx.createGain();

      osc.type = "sine";
      osc.frequency.setValueAtTime(600, ctx.currentTime);
      osc.frequency.exponentialRampToValueAtTime(300, ctx.currentTime + 0.05);

      gain.gain.setValueAtTime(0.08, ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.05);

      osc.connect(gain);
      gain.connect(ctx.destination);

      osc.start(ctx.currentTime);
      osc.stop(ctx.currentTime + 0.05);
    } catch (e) {

    }
  }

  function shuffleArray(arr) {
    const copy = [...arr];
    for (let i = copy.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [copy[i], copy[j]] = [copy[j], copy[i]];
    }
    return copy;
  }

  function randomizeOptionsSafely(questionObj) {
    const originalCorrectIndex = questionObj.correctAnswer;
    const items = questionObj.options.map((opt, index) => ({
      text: opt,
      isCorrect: index === originalCorrectIndex
    }));

    const shuffledItems = shuffleArray(items);

    const newCorrectIndex = shuffledItems.findIndex(item => item.isCorrect);

    return {
      id: questionObj.id,
      grade: questionObj.grade,
      subject: questionObj.subject,
      topic: questionObj.topic || "Latihan",
      difficulty: questionObj.difficulty || "sedang",
      question: questionObj.question,
      options: shuffledItems.map(item => item.text),
      correctAnswer: newCorrectIndex,
      explanation: questionObj.explanation
    };
  }

  function getFilteredQuestions(grade, subjectId, religionId) {
    return QUESTIONS_DATA.filter(q => {
      if (Number(q.grade) !== Number(grade)) return false;
      if (q.subject !== subjectId) return false;
      if (subjectId === "pendidikan-agama") {
        if (!religionId) return true;
        return q.religion === religionId;
      }
      return true;
    });
  }

  function startQuiz(config) {
    const available = window.getQuestionsForLevel
      ? window.getQuestionsForLevel(config.grade, config.subjectId, config.level, config.religionId)
      : getFilteredQuestions(config.grade, config.subjectId, config.religionId);

    if (available.length === 0) {
      alert("Maaf, belum ada soal yang tersedia untuk kombinasi kelas dan mata pelajaran ini.");
      return false;
    }

    const shuffledPool = shuffleArray(available);

    let count = config.questionCount || (window.LEVELS_CONFIG && window.LEVELS_CONFIG[config.level] ? window.LEVELS_CONFIG[config.level].count : 10);
    if (count === "all" || count > shuffledPool.length) {
      count = shuffledPool.length;
    } else {
      count = Math.min(Number(count), shuffledPool.length);
    }

    const selectedPool = shuffledPool.slice(0, count);

    const preparedQuestions = selectedPool.map(q => randomizeOptionsSafely(q));

    state = {
      studentName: (config.studentName || "").trim(),
      grade: config.grade,
      subjectId: config.subjectId,
      subjectName: config.subjectName,
      religion: config.religionId || null,
      religionName: config.religionName || null,
      level: config.level || "mudah",
      questions: preparedQuestions,
      currentIndex: 0,
      userAnswers: [],
      isAnswered: false,
      startTime: Date.now()
    };

    renderActiveQuestion();
    return true;
  }

  function renderActiveQuestion() {
    const q = state.questions[state.currentIndex];
    state.isAnswered = false;

    const quizCard = document.getElementById("quiz-card");
    const progressFill = document.getElementById("progress-fill");
    const progressLabel = document.getElementById("progress-label");
    const questionBadgeGrade = document.getElementById("quiz-badge-grade");
    const questionBadgeSubject = document.getElementById("quiz-badge-subject");
    const questionBadgeTopic = document.getElementById("quiz-badge-topic");
    const questionBadgeDifficulty = document.getElementById("quiz-badge-difficulty");
    const studentGreeting = document.getElementById("quiz-student-greeting");
    const questionTextEl = document.getElementById("question-text");
    const optionsContainer = document.getElementById("options-container");
    const feedbackArea = document.getElementById("quiz-feedback-area");
    const actionArea = document.getElementById("quiz-action-area");

    const currentNum = state.currentIndex + 1;
    const totalNum = state.questions.length;
    const percent = ((currentNum - 1) / totalNum) * 100;
    progressFill.style.width = percent + "%";
    progressLabel.textContent = `Soal ${currentNum} dari ${totalNum}`;

    // Sapaan murid jika ada
    if (state.studentName) {
      studentGreeting.textContent = `Semangat, ${state.studentName}! 🌟`;
      studentGreeting.style.display = "inline-block";
    } else {
      studentGreeting.style.display = "none";
    }

    // Informasi meta soal
    questionBadgeGrade.textContent = `Kelas ${state.grade} SD`;
    questionBadgeSubject.textContent = state.religionName ? `${state.subjectName} (${state.religionName})` : state.subjectName;
    questionBadgeTopic.textContent = q.topic;

    // Tanda tingkat kesulitan & level
    const levelLabels = {
      mudah: "LEVEL MUDAH (10 SOAL)",
      sedang: "LEVEL SEDANG (20 SOAL)",
      sulit: "LEVEL SULIT (30 SOAL)"
    };
    const activeLevel = state.level || q.difficulty || "mudah";
    questionBadgeDifficulty.textContent = levelLabels[activeLevel] || activeLevel.toUpperCase();
    questionBadgeDifficulty.className = "quiz-badge badge-difficulty " + activeLevel;

    // Teks soal
    questionTextEl.textContent = q.question;

    // Bersihkan area umpan balik & aksi
    feedbackArea.innerHTML = "";
    feedbackArea.style.display = "none";
    actionArea.innerHTML = "";
    actionArea.style.display = "none";

    // Bersihkan dan render 4 tombol opsi
    optionsContainer.innerHTML = "";
    const letters = ["A", "B", "C", "D"];

    q.options.forEach((optText, idx) => {
      const btn = document.createElement("button");
      btn.type = "button";
      btn.className = "option-btn";
      btn.setAttribute("data-index", idx);
      btn.setAttribute("aria-label", `Pilihan ${letters[idx]}: ${optText}`);

      btn.innerHTML = `
        <span class="option-badge">${letters[idx]}</span>
        <span class="option-label">${escapeHtml(optText)}</span>
        <span class="option-icon" aria-hidden="true"></span>
      `;

      btn.addEventListener("click", () => handleSelectOption(idx));
      optionsContainer.appendChild(btn);
    });

    // Gulir halus ke kartu soal agar nyaman di ponsel
    quizCard.scrollIntoView({ behavior: "smooth", block: "start" });
  }

  /**
   * Menangani saat murid memilih salah satu opsi jawaban
   */
  function handleSelectOption(selectedIndex) {
    // Cegah klik ganda setelah jawaban dipilih
    if (state.isAnswered) return;
    state.isAnswered = true;

    const q = state.questions[state.currentIndex];
    const isCorrect = selectedIndex === q.correctAnswer;

    // Bunyikan efek suara sintetis
    if (isCorrect) {
      playCorrectSound();
    } else {
      playWrongSound();
    }

    // Catat jawaban murid
    const answerRecord = {
      questionId: q.id,
      questionText: q.question,
      topic: q.topic,
      options: q.options,
      selectedIndex: selectedIndex,
      correctIndex: q.correctAnswer,
      isCorrect: isCorrect,
      explanation: q.explanation
    };
    state.userAnswers.push(answerRecord);

    // Kunci seluruh tombol opsi dan berikan penanda visual
    const optionButtons = document.querySelectorAll(".option-btn");
    optionButtons.forEach((btn, idx) => {
      btn.disabled = true;
      btn.classList.add("disabled");

      const iconSpan = btn.querySelector(".option-icon");

      if (idx === q.correctAnswer) {
        btn.classList.add("is-correct");
        if (iconSpan) iconSpan.innerHTML = "✅";
      }

      if (idx === selectedIndex) {
        btn.classList.add("is-selected");
        if (!isCorrect) {
          btn.classList.add("is-wrong");
          if (iconSpan) iconSpan.innerHTML = "❌";
        }
      }
    });

    // Tampilkan Umpan Balik Edukatif
    showFeedback(isCorrect, q.explanation);

    // Tampilkan Tombol Lanjut / Selesai
    showActionButton();

    // Gulir halus agar umpan balik dan tombol terlihat nyaman oleh anak
    setTimeout(() => {
      const actionArea = document.getElementById("quiz-action-area");
      if (actionArea) {
        actionArea.scrollIntoView({ behavior: "smooth", block: "nearest" });
      }
    }, 100);
  }

  /**
   * Menampilkan kotak penjelasan ramah anak
   */
  function showFeedback(isCorrect, explanationText) {
    const feedbackArea = document.getElementById("quiz-feedback-area");
    feedbackArea.className = "feedback-box " + (isCorrect ? "feedback-correct" : "feedback-wrong");

    const titleText = isCorrect
      ? "🎉 Hebat Sekali! Jawabanmu Benar!"
      : "💪 Belum Tepat, Jangan Putus Asa!";

    const subtitleText = isCorrect
      ? "Kamu memahami materi ini dengan sangat baik. Pertahankan ya!"
      : "Tidak apa-apa salah, yang penting kita belajar pembahasannya:";

    feedbackArea.innerHTML = `
      <div class="feedback-header">
        <span class="feedback-badge-icon">${isCorrect ? "⭐" : "💡"}</span>
        <div>
          <h4 class="feedback-title">${titleText}</h4>
          <p class="feedback-subtitle">${subtitleText}</p>
        </div>
      </div>
      <div class="feedback-body">
        <strong>Penjelasan:</strong>
        <p class="feedback-explanation">${escapeHtml(explanationText)}</p>
      </div>
    `;

    feedbackArea.style.display = "block";
  }

  /**
   * Menampilkan tombol Soal Berikutnya atau Selesai Kuis
   */
  function showActionButton() {
    const actionArea = document.getElementById("quiz-action-area");
    actionArea.innerHTML = "";

    const isLastQuestion = state.currentIndex === state.questions.length - 1;
    const btn = document.createElement("button");
    btn.type = "button";
    btn.className = "btn-primary btn-next-question pulse-attention";

    if (isLastQuestion) {
      btn.innerHTML = `<span>Lihat Hasil Akhir</span> <span aria-hidden="true">🏆</span>`;
      btn.addEventListener("click", () => {
        playClickSound();
        finishQuiz();
      });
    } else {
      btn.innerHTML = `<span>Soal Berikutnya</span> <span aria-hidden="true">➡️</span>`;
      btn.addEventListener("click", () => {
        playClickSound();
        goToNextQuestion();
      });
    }

    actionArea.appendChild(btn);
    actionArea.style.display = "flex";

    // Update progress bar menjadi penuh di akhir soal aktif
    const progressFill = document.getElementById("progress-fill");
    const percent = ((state.currentIndex + 1) / state.questions.length) * 100;
    progressFill.style.width = percent + "%";
  }

  /**
   * Melangkah ke soal berikutnya
   */
  function goToNextQuestion() {
    state.currentIndex++;
    renderActiveQuestion();
  }

  /**
   * Mengakhiri sesi kuis, menghitung skor, menyimpan riwayat, dan membuka tampilan hasil
   */
  function finishQuiz() {
    const total = state.questions.length;
    const correctCount = state.userAnswers.filter(a => a.isCorrect).length;
    const wrongCount = total - correctCount;
    const score = Math.round((correctCount / total) * 100);

    const resultPayload = {
      studentName: state.studentName,
      grade: state.grade,
      subjectId: state.subjectId,
      subjectName: state.subjectName,
      religion: state.religion,
      religionName: state.religionName,
      level: state.level || "mudah",
      totalQuestions: total,
      correctCount: correctCount,
      wrongCount: wrongCount,
      score: score,
      reviewItems: state.userAnswers
    };

    // Simpan ke LocalStorage via QuizStorage
    const savedRecord = QuizStorage.saveHistory(resultPayload);
    if (savedRecord) {
      resultPayload.id = savedRecord.id;
      resultPayload.dateFormatted = savedRecord.dateFormatted;
    }

    // Oper ke modul ResultsView
    if (window.ResultsView) {
      window.ResultsView.renderResults(resultPayload);
    }

    // Alihkan tampilan ke layar hasil
    if (window.AppNavigator) {
      window.AppNavigator.showView("view-results");
    }
  }

  /**
   * Mengulang kuis yang sama dengan pengacakan baru
   */
  function restartCurrentQuiz() {
    startQuiz({
      studentName: state.studentName,
      grade: state.grade,
      subjectId: state.subjectId,
      subjectName: state.subjectName,
      religionId: state.religion,
      religionName: state.religionName,
      level: state.level || "mudah",
      questionCount: state.questions.length
    });
  }

  /**
   * Helper keamanan untuk mencegah XSS jika terdapat karakter khusus
   */
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
    startQuiz,
    restartCurrentQuiz,
    getFilteredQuestions,
    getState: () => ({ ...state }),
    playClickSound
  };
})();

if (typeof window !== "undefined") {
  window.QuizEngine = QuizEngine;
}
