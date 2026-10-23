const fs = require('fs');
const path = require('path');

console.log('Loading subject question generators...');

const { matematikaQuestions } = require('../generators/gen_matematika.js');
const { indonesiaQuestions } = require('../generators/gen_indonesia.js');
const { pancasilaQuestions } = require('../generators/gen_pancasila.js');
const { ipasQuestions } = require('../generators/gen_ipas.js');
const { inggrisQuestions } = require('../generators/gen_inggris.js');
const { pjokQuestions } = require('../generators/gen_pjok.js');
const { seniQuestions } = require('../generators/gen_seni.js');
const { maduraQuestions } = require('../generate_madura.js');
const { agamaQuestions } = require('../generators/gen_agama.js');

const rawQuestions = [
  ...matematikaQuestions,
  ...indonesiaQuestions,
  ...pancasilaQuestions,
  ...ipasQuestions,
  ...inggrisQuestions,
  ...pjokQuestions,
  ...seniQuestions,
  ...maduraQuestions,
  ...agamaQuestions
];

console.log(`Raw questions count: ${rawQuestions.length}`);

const allQuestions = rawQuestions.map((q, idx) => {
  const diff = q.difficulty || q.level;
  if (!diff) {
    throw new Error(`Missing difficulty/level at index ${idx}: ID=${q.id}`);
  }
  return {
    id: q.id,
    grade: Number(q.grade),
    subject: q.subject,
    ...(q.religion ? { religion: q.religion } : {}),
    topic: q.topic,
    difficulty: diff,
    level: diff,
    question: q.question.trim(),
    options: q.options,
    correctAnswer: q.correctAnswer,
    explanation: q.explanation
  };
});

const seenTexts = new Map();
const duplicates = [];

allQuestions.forEach((q, idx) => {
  if (!q.id || !q.grade || !q.subject || !q.difficulty || !q.topic || !q.question || !q.options || q.correctAnswer === undefined || !q.explanation) {
    throw new Error(`Incomplete question data at index ${idx}: ID=${q.id}`);
  }
  if (!Array.isArray(q.options) || q.options.length !== 4) {
    throw new Error(`Invalid options count (must be 4) for question ID ${q.id}: has ${q.options ? q.options.length : 0}`);
  }
  if (q.correctAnswer < 0 || q.correctAnswer > 3) {
    throw new Error(`Invalid correctAnswer index (${q.correctAnswer}) for question ID ${q.id}`);
  }

  const norm = q.question.toLowerCase().replace(/\s+/g, ' ');
  if (seenTexts.has(norm)) {
    duplicates.push({ q1: seenTexts.get(norm), q2: q.id, text: q.question });
  } else {
    seenTexts.set(norm, q.id);
  }
});

if (duplicates.length > 0) {
  console.error(`Found ${duplicates.length} duplicate questions:`, duplicates);
  throw new Error(`Duplicate questions detected: ${duplicates.length}`);
}

console.log(`Validation SUCCESS! Grand Total Questions: ${allQuestions.length}`);
console.log(`All ${allQuestions.length} questions are 100% unique!`);

const SUBJECT_LIST = [
  {
    id: "matematika",
    name: "Matematika",
    icon: "📐",
    color: "#2563EB",
    description: "Berhitung, logika, bangun ruang, dan pemecahan masalah",
    grades: [1, 2, 3, 4, 5, 6]
  },
  {
    id: "bahasa-indonesia",
    name: "Bahasa Indonesia",
    icon: "📖",
    color: "#059669",
    description: "Membaca, kosakata, kalimat, tanda baca, dan pemahaman teks",
    grades: [1, 2, 3, 4, 5, 6]
  },
  {
    id: "pendidikan-pancasila",
    name: "Pendidikan Pancasila",
    icon: "🇮🇩",
    color: "#DC2626",
    description: "Nilai Pancasila, aturan, hak dan kewajiban, musyawarah, dan persatuan",
    grades: [1, 2, 3, 4, 5, 6]
  },
  {
    id: "ipas",
    name: "IPAS (Ilmu Pengetahuan Alam & Sosial)",
    icon: "🌱",
    color: "#D97706",
    description: "Makhluk hidup, energi, lingkungan hidup, budaya, dan kenampakan bumi",
    grades: [3, 4, 5, 6]
  },
  {
    id: "bahasa-inggris",
    name: "Bahasa Inggris",
    icon: "🌏",
    color: "#7C3AED",
    description: "Vocabulary, daily expressions, colors, numbers, and simple reading",
    grades: [1, 2, 3, 4, 5, 6]
  },
  {
    id: "pjok",
    name: "PJOK",
    icon: "⚽",
    color: "#EA580C",
    description: "Kebugaran jasmani, gerak lokomotor, olahraga, dan pola hidup sehat",
    grades: [1, 2, 3, 4, 5, 6]
  },
  {
    id: "seni-budaya",
    name: "Seni Budaya",
    icon: "🎨",
    color: "#DB2777",
    description: "Seni rupa, warna, garis, irama musik, dan kebudayaan daerah",
    grades: [1, 2, 3, 4, 5, 6]
  },
  {
    id: "bahasa-madura",
    name: "Bahasa Madura",
    icon: "🐂",
    color: "#B45309",
    description: "Kosa oca', undhag-usuk bhasa (enja'-iya, engghi-bhunten), parebhasan, tor budaya Madura",
    grades: [1, 2, 3, 4, 5, 6]
  },
  {
    id: "pendidikan-agama",
    name: "Pendidikan Agama & Budi Pekerti",
    icon: "🕌",
    color: "#0D9488",
    description: "Akhlak mulia, doa harian, kisah teladan, dan nilai keagamaan",
    grades: [1, 2, 3, 4, 5, 6],
    requiresReligion: true
  }
];

const RELIGION_OPTIONS = [
  { id: "islam", name: "Pendidikan Agama Islam", icon: "🕌" },
  { id: "kristen", name: "Pendidikan Agama Kristen", icon: "⛪" },
  { id: "katolik", name: "Pendidikan Agama Katolik", icon: "✝️" },
  { id: "hindu", name: "Pendidikan Agama Hindu", icon: "🛕" },
  { id: "buddha", name: "Pendidikan Agama Buddha", icon: "☸️" },
  { id: "konghucu", name: "Pendidikan Agama Konghucu", icon: "☯️" }
];

const LEVELS_CONFIG = {
  mudah: {
    id: "mudah",
    name: "Level Mudah",
    count: 10,
    icon: "🟢",
    badgeClass: "badge-level-easy",
    tagline: "10 Soal • Pemahaman Dasar & Santai",
    description: "Soal-soal pemahaman konsep dasar untuk melatih kelancaran dan kepercayaan diri."
  },
  sedang: {
    id: "sedang",
    name: "Level Sedang",
    count: 20,
    icon: "🟡",
    badgeClass: "badge-level-medium",
    tagline: "20 Soal • Latihan Standar & Penerapan",
    description: "Soal-soal penerapan materi dan variasi kasus sesuai standar kurikulum SD."
  },
  sulit: {
    id: "sulit",
    name: "Level Sulit",
    count: 30,
    icon: "🔴",
    badgeClass: "badge-level-hard",
    tagline: "30 Soal • Tantangan Logika & HOTS",
    description: "Soal-soal tantangan tingkat lanjut, analisis mendalam, pemecahan masalah, dan Higher Order Thinking Skills (HOTS)."
  }
};

const targetFile = path.join(__dirname, '..', 'data', 'questions.js');

const fileHeader = `const SUBJECT_LIST = ${JSON.stringify(SUBJECT_LIST, null, 2)};

const RELIGION_OPTIONS = ${JSON.stringify(RELIGION_OPTIONS, null, 2)};

const LEVELS_CONFIG = ${JSON.stringify(LEVELS_CONFIG, null, 2)};

const QUESTIONS_DATA = ${JSON.stringify(allQuestions, null, 2)};

function getQuestionsForLevel(grade, subjectId, levelId, religionId) {
  const targetLevel = levelId || "mudah";
  const targetCount = LEVELS_CONFIG[targetLevel] ? LEVELS_CONFIG[targetLevel].count : 10;

  let pool = QUESTIONS_DATA.filter(q => {
    if (Number(q.grade) !== Number(grade)) return false;
    if (q.subject !== subjectId) return false;
    if (subjectId === "pendidikan-agama") {
      if (!religionId) return true;
      return q.religion === religionId;
    }
    return true;
  });

  let primary = pool.filter(q => (q.difficulty || q.level) === targetLevel);
  let secondary = pool.filter(q => (q.difficulty || q.level) !== targetLevel);

  let result = [...primary, ...secondary];
  return result.slice(0, targetCount);
}

function validateQuestionBank() {
  const seenIds = new Set();
  const errors = [];

  QUESTIONS_DATA.forEach((q, index) => {
    if (!q.id) {
      errors.push(\`Soal indeks \${index} tidak memiliki id\`);
    } else if (seenIds.has(q.id)) {
      errors.push(\`ID duplikat: "\${q.id}"\`);
    } else {
      seenIds.add(q.id);
    }

    if (!Array.isArray(q.options) || q.options.length !== 4) {
      errors.push(\`Soal "\${q.id}": opsi harus tepat 4 pilihan\`);
    }

    if (typeof q.correctAnswer !== "number" || q.correctAnswer < 0 || q.correctAnswer > 3) {
      errors.push(\`Soal "\${q.id}": correctAnswer tidak valid\`);
    }
  });

  if (errors.length > 0) {
    console.error("⚠️ Integritas Bank Soal:", errors);
    return { valid: false, errors };
  } else {
    console.log(\`✅ Bank Soal Terverifikasi: Total \${QUESTIONS_DATA.length} soal merata siap digunakan.\`);
    return { valid: true, count: QUESTIONS_DATA.length };
  }
}

if (typeof window !== "undefined") {
  window.validateQuestionBank = validateQuestionBank;
  window.getQuestionsForLevel = getQuestionsForLevel;
  window.LEVELS_CONFIG = LEVELS_CONFIG;
}
`;

fs.writeFileSync(targetFile, fileHeader, 'utf8');
console.log(`Successfully generated ${targetFile} (${(fs.statSync(targetFile).size / (1024 * 1024)).toFixed(2)} MB)!`);
