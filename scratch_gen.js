const fs = require('fs');
const path = require('path');

const fileContent = `/**
 * KUIS PINTAR SD - BANK SOAL & METADATA MATA PELAJARAN (BERBASIS LEVEL RESMI)
 * Dilengkapi pembagian level terstruktur:
 * - Level Mudah  : 10 Soal (Dasar & Santai)
 * - Level Sedang : 20 Soal (Standar & Penerapan)
 * - Level Sulit  : 30 Soal (Tantangan Logika & HOTS)
 */

const SUBJECT_LIST = [
  {
    id: "matematika",
    name: "Matematika",
    icon: "📐",
    color: "#2563EB",
    description: "Berhitung, operasi bilangan, pecahan, geometri, dan pemecahan masalah",
    grades: [1, 2, 3, 4, 5, 6]
  },
  {
    id: "bahasa-indonesia",
    name: "Bahasa Indonesia",
    icon: "📖",
    color: "#059669",
    description: "Membaca, kosakata, kalimat efektif, ide pokok, dan pemahaman teks",
    grades: [1, 2, 3, 4, 5, 6]
  },
  {
    id: "pendidikan-pancasila",
    name: "Pendidikan Pancasila",
    icon: "🇮🇩",
    color: "#DC2626",
    description: "Nilai Pancasila, aturan, hak dan kewajiban, musyawarah, dan Bhinneka Tunggal Ika",
    grades: [1, 2, 3, 4, 5, 6]
  },
  {
    id: "ipas",
    name: "IPAS (Ilmu Pengetahuan Alam & Sosial)",
    icon: "🌱",
    color: "#D97706",
    description: "Makhluk hidup, energi, lingkungan hidup, budaya, dan kenampakan bumi",
    grades: [3, 4, 5, 6] // Kurikulum Merdeka Fase B & C
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
    description: "Kebugaran jasmani, gerak lokomotor, olahraga bola, dan pola hidup sehat",
    grades: [1, 2, 3, 4, 5, 6]
  },
  {
    id: "seni-budaya",
    name: "Seni Budaya",
    icon: "🎨",
    color: "#DB2777",
    description: "Seni rupa, warna dasar, irama musik, alat musik tradisional, dan seni 3D",
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
  { id: "konghucu", name: "Pendidikan Agama Khonghucu", icon: "☯️" }
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
    tagline: "30 Soal • Tantangan Logika & Berpikir Kritis",
    description: "Soal-soal analitis, pemecahan masalah (HOTS), dan penalaran mendalam."
  }
};
`;

console.log("Ready to generate unified level questions.");
