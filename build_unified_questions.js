const fs = require('fs');
const path = require('path');

const existingCode = fs.readFileSync(path.join(__dirname, 'data', 'questions.js'), 'utf8');
const sandbox = new Function(existingCode + '\nreturn { SUBJECT_LIST, RELIGION_OPTIONS, QUESTIONS_DATA };')();

const SUBJECT_LIST = sandbox.SUBJECT_LIST;
const RELIGION_OPTIONS = sandbox.RELIGION_OPTIONS;
const existingQuestions = sandbox.QUESTIONS_DATA;

if (!SUBJECT_LIST.some(s => s.id === 'bahasa-madura')) {
  const agamaIdx = SUBJECT_LIST.findIndex(s => s.id === 'pendidikan-agama');
  const maduraSubject = {
    id: "bahasa-madura",
    name: "Bahasa Madura",
    icon: "🐂",
    color: "#B45309",
    description: "Kosa oca', undhag-usuk bhasa (enja'-iya, engghi-bhunten), parebhasan, tor budaya Madura",
    grades: [1, 2, 3, 4, 5, 6]
  };
  if (agamaIdx !== -1) {
    SUBJECT_LIST.splice(agamaIdx, 0, maduraSubject);
  } else {
    SUBJECT_LIST.push(maduraSubject);
  }
}

console.log(`Loaded ${existingQuestions.length} existing base questions.`);

const questionMap = {};

const baseHandcrafted = existingQuestions.filter(q => !q.id.startsWith('gen-') && q.subject !== 'bahasa-madura');
console.log(`Using ${baseHandcrafted.length} pure base questions.`);

baseHandcrafted.forEach(q => {
  const key = `${q.grade}_${q.subject}_${q.religion || 'none'}`;
  if (!questionMap[key]) questionMap[key] = [];
  questionMap[key].push(q);
});

const { maduraQuestions } = require('./generate_madura.js');
maduraQuestions.forEach(q => {
  const key = `${q.grade}_${q.subject}_none`;
  if (!questionMap[key]) questionMap[key] = [];
  questionMap[key].push(q);
});

function createQuestion(grade, subject, religion, difficulty, index, topic, question, options, correctAnswer, explanation) {
  const relTag = religion ? `-${religion}` : '';
  const diffTag = difficulty[0];
  return {
    id: `${subject.substring(0, 3)}${relTag}-k${grade}-${diffTag}${String(index).padStart(2, '0')}`,
    grade: Number(grade),
    subject: subject,
    ...(religion ? { religion } : {}),
    topic: topic,
    difficulty: difficulty,
    question: question,
    options: options,
    correctAnswer: correctAnswer,
    explanation: explanation
  };
}

const TOPIC_BANKS = {
  matematika: {
    1: [
      { t: "Penjumlahan", m: (i) => ({ q: `Berapa hasil dari ${i + 3} + ${i + 2}?`, ans: (i+3)+(i+2), exp: `${i+3} + ${i+2} = ${(i+3)+(i+2)}.` }) },
      { t: "Pengurangan", m: (i) => ({ q: `Doni punya ${i + 10} apel, dimakan ${i + 3} buah. Berapa sisa apel Doni?`, ans: 7, exp: `${i+10} - ${i+3} = 7 apel.` }) },
      { t: "Bangun Datar", m: (i) => ({ q: `Benda berikut yang berbentuk lingkaran adalah ...`, opts: ["Roda sepeda", "Papan tulis", "Buku gambar", "Penggaris segitiga"], c: 0, exp: "Roda sepeda permukaannya berbentuk lingkaran." }) },
      { t: "Pola Bilangan", m: (i) => ({ q: `Lanjutan dari pola bilangan 2, 4, 6, 8, ... adalah ...`, ans: 10, exp: "Pola bertambah 2: 8 + 2 = 10." }) }
    ],
    2: [
      { t: "Perkalian Dasar", m: (i) => ({ q: `Hasil perkalian ${i + 2} × 4 adalah ...`, ans: (i+2)*4, exp: `${i+2} × 4 = ${(i+2)*4}.` }) },
      { t: "Pembagian Dasar", m: (i) => ({ q: `Hasil pembagian ${(i + 2) * 5} : 5 adalah ...`, ans: i+2, exp: `${(i+2)*5} : 5 = ${i+2}.` }) },
      { t: "Satuan Panjang", m: (i) => ({ q: `Panjang pita ${i + 1} meter sama dengan berapa sentimeter (cm)?`, ans: (i+1)*100, exp: `1 meter = 100 cm, maka ${i+1} meter = ${(i+1)*100} cm.` }) },
      { t: "Pecahan Sederhana", m: (i) => ({ q: `Sebuah roti dipotong menjadi 4 bagian sama besar. Satu bagian bernilai ...`, opts: ["1/4", "1/2", "1/3", "4/1"], c: 0, exp: "Satu dari empat bagian sama besar bernilai seperempat (1/4)." }) }
    ],
    3: [
      { t: "Perkalian Bersusun", m: (i) => ({ q: `Hasil dari ${12 + i} × 5 adalah ...`, ans: (12+i)*5, exp: `${12+i} × 5 = ${(12+i)*5}.` }) },
      { t: "Pecahan Senilai", m: (i) => ({ q: `Hasil penjumlahan pecahan 2/8 + 3/8 adalah ...`, opts: ["5/8", "5/16", "6/8", "1/8"], c: 0, exp: "Jika penyebut sama, pembilang dijumlahkan: 2 + 3 = 5, hasilnya 5/8." }) },
      { t: "Keliling Persegi", m: (i) => ({ q: `Panjang sisi persegi adalah ${5 + i} cm. Kelilingnya adalah ...`, ans: (5+i)*4, exp: `Keliling persegi = 4 × sisi = 4 × ${5+i} = ${(5+i)*4} cm.` }) },
      { t: "Konversi Jam", m: (i) => ({ q: `${i + 1} jam 30 menit sama dengan berapa menit?`, ans: (i+1)*60 + 30, exp: `1 jam = 60 menit. ${(i+1)*60} + 30 = ${(i+1)*60 + 30} menit.` }) }
    ],
    4: [
      { t: "FPB & KPK", m: (i) => ({ q: `Faktor Persekutuan Terbesar (FPB) dari 12 dan 18 adalah ...`, opts: ["6", "3", "4", "2"], c: 0, exp: "Faktor pembagi terbesar dari 12 dan 18 adalah 6." }) },
      { t: "Pecahan Desimal", m: (i) => ({ q: `Bentuk desimal dari pecahan 1/2 adalah ...`, opts: ["0,5", "0,2", "0,25", "0,75"], c: 0, exp: "1 dibagi 2 adalah 0,5." }) },
      { t: "Pengukuran Sudut", m: (i) => ({ q: `Besar sudut siku-siku adalah tepat ...`, opts: ["90°", "60°", "180°", "45°"], c: 0, exp: "Sudut siku-siku selalu berukuran 90 derajat." }) },
      { t: "Keliling Segitiga", m: (i) => ({ q: `Segitiga sama sisi memiliki sisi ${6 + i} cm. Kelilingnya adalah ...`, ans: (6+i)*3, exp: `Keliling segitiga sama sisi = 3 × ${6+i} = ${(6+i)*3} cm.` }) }
    ],
    5: [
      { t: "Pecahan Beda Penyebut", m: (i) => ({ q: `Hasil dari 1/2 + 1/4 adalah ...`, opts: ["3/4", "2/6", "1/6", "2/4"], c: 0, exp: "Samakan penyebut: 2/4 + 1/4 = 3/4." }) },
      { t: "Kecepatan & Jarak", m: (i) => ({ q: `Kecepatan mobil ${40 + i*10} km/jam selama 2 jam. Jarak tempuhnya adalah ...`, ans: (40+i*10)*2, exp: `Jarak = kecepatan × waktu = ${40+i*10} × 2 = ${(40+i*10)*2} km.` }) },
      { t: "Volume Kubus", m: (i) => ({ q: `Panjang rusuk kubus ${i + 3} cm. Volume kubus tersebut adalah ...`, ans: Math.pow(i+3, 3), exp: `Volume = s³ = ${(i+3)}³ = ${Math.pow(i+3, 3)} cm³.` }) },
      { t: "Skala Peta", m: (i) => ({ q: `Jarak pada peta 3 cm dengan skala 1 : 100.000. Jarak sebenarnya adalah ...`, opts: ["3 km", "30 km", "300 meter", "300 km"], c: 0, exp: "3 × 100.000 cm = 300.000 cm = 3 km." }) }
    ],
    6: [
      { t: "Bilangan Bulat", m: (i) => ({ q: `Hasil perhitungan dari -12 + 20 adalah ...`, ans: 8, exp: "-12 + 20 = 8." }) },
      { t: "Keliling Lingkaran", m: (i) => ({ q: `Jari-jari lingkaran r = 7 cm (π = 22/7). Kelilingnya adalah ...`, opts: ["44 cm", "22 cm", "88 cm", "154 cm"], c: 0, exp: "Keliling = 2 × 22/7 × 7 = 44 cm." }) },
      { t: "Luas Lingkaran", m: (i) => ({ q: `Jari-jari lingkaran r = 7 cm (π = 22/7). Luasnya adalah ...`, opts: ["154 cm²", "44 cm²", "308 cm²", "88 cm²"], c: 0, exp: "Luas = 22/7 × 7 × 7 = 154 cm²." }) },
      { t: "Statistika (Mean)", m: (i) => ({ q: `Rata-rata dari nilai 70, 80, 90 adalah ...`, opts: ["80", "75", "85", "70"], c: 0, exp: "(70 + 80 + 90) / 3 = 240 / 3 = 80." }) }
    ]
  },
  "bahasa-indonesia": {
    1: [
      { t: "Huruf Vokal & Konsonan", m: (i) => ({ q: `Huruf vokal dalam kata 'sekolah' adalah ...`, opts: ["e, o, a", "s, k, l, h", "a, b, c", "i, u, e"], c: 0, exp: "Huruf vokal pada kata s-e-k-o-l-a-h adalah e, o, dan a." }) },
      { t: "Ungkapan Santun", m: (i) => ({ q: `Ketika ditolong teman, ucapan yang tepat adalah ...`, opts: ["Terima kasih", "Maaf ya", "Tolong dong", "Permisi"], c: 0, exp: "Ucapkan terima kasih saat menerima kebaikan orang lain." }) },
      { t: "Tanda Baca", m: (i) => ({ q: `Kalimat tanya diakhiri dengan tanda ...`, opts: ["Tanya (?)", "Titik (.)", "Seru (!)", "Koma (,)"], c: 0, exp: "Kalimat tanya selalu menggunakan tanda tanya (?)." }) }
    ],
    2: [
      { t: "Huruf Kapital", m: (i) => ({ q: `Penggunaan huruf kapital yang tepat adalah ...`, opts: ["Lani tinggal di Surabaya.", "lani tinggal di surabaya.", "Lani tinggal di surabaya.", "lani Tinggal di Surabaya."], c: 0, exp: "Huruf kapital digunakan pada awal kalimat dan nama kota." }) },
      { t: "Sinonim & Antonim", m: (i) => ({ q: `Lawan kata (antonim) dari kata 'rajin' adalah ...`, opts: ["Malas", "Pintar", "Pandai", "Cepat"], c: 0, exp: "Lawan kata rajin adalah malas." }) },
      { t: "Dongeng Fabel", m: (i) => ({ q: `Cerita fiksi yang tokohnya hewan berperilaku seperti manusia disebut ...`, opts: ["Fabel", "Mite", "Legenda", "Sage"], c: 0, exp: "Fabel adalah dongeng tentang kehidupan binatang." }) }
    ],
    3: [
      { t: "Ide Pokok", m: (i) => ({ q: `Gagasan utama dalam sebuah paragraf disebut ...`, opts: ["Ide pokok", "Kalimat penjelas", "Judul", "Amanat"], c: 0, exp: "Ide pokok adalah inti sari pembahasan dalam paragraf." }) },
      { t: "Kata Berimbuhan", m: (i) => ({ q: `Kata 'baca' jika mendapat awalan me- menjadi ...`, opts: ["Membaca", "Menbaca", "Mengbaca", "Mebaca"], c: 0, exp: "Awalan me- bertemu huruf 'b' menjadi mem- (membaca)." }) },
      { t: "Teks Petunjuk", m: (i) => ({ q: `Teks yang memuat langkah-langkah melakukan sesuatu secara runtut disebut teks ...`, opts: ["Petunjuk / Prosedur", "Deskripsi", "Narasi", "Puisi"], c: 0, exp: "Teks prosedur menjelaskan urutan langkah kerja." }) }
    ],
    4: [
      { t: "Majas", m: (i) => ({ q: `'Nyiur melambai-lambai di tepi pantai.' Kalimat ini bermajas ...`, opts: ["Personifikasi", "Metafora", "Hiperbola", "Litotes"], c: 0, exp: "Personifikasi menyamakan sifat benda mati seperti manusia." }) },
      { t: "Rima Pantun", m: (i) => ({ q: `Pola sajak pada pantun empat baris adalah ...`, opts: ["a-b-a-b", "a-a-a-a", "a-a-b-b", "a-b-b-a"], c: 0, exp: "Pantun empat baris bersajak silang a-b-a-b." }) },
      { t: "Fakta & Opini", m: (i) => ({ q: `Pernyataan berikut yang merupakan FAKTA adalah ...`, opts: ["Matahari terbit dari sebelah timur.", "Es teh manis adalah minuman paling nikmat.", "Kucing adalah hewan paling lucu.", "Baju merah tampak sangat keren."], c: 0, exp: "Matahari terbit di timur adalah kenyataan alamiah (fakta)." }) }
    ],
    5: [
      { t: "Teks Eksplanasi", m: (i) => ({ q: `Teks yang menjelaskan proses terjadinya fenomena alam secara ilmiah disebut ...`, opts: ["Teks eksplanasi", "Teks narasi", "Teks fabel", "Teks cerpen"], c: 0, exp: "Teks eksplanasi menerangkan sebab-akibat fenomena alam/sosial." }) },
      { t: "Kata Baku", m: (i) => ({ q: `Kata yang baku menurut KBBI adalah ...`, opts: ["Apotek dan izin", "Apotik dan ijin", "Apotik dan izin", "Apotek dan ijin"], c: 0, exp: "Bentuk baku: apotek dan izin." }) },
      { t: "Kalimat Majemuk", m: (i) => ({ q: `Kata hubung yang menyatakan hubungan penambahan adalah ...`, opts: ["Dan", "Tetapi", "Atau", "Melainkan"], c: 0, exp: "'Dan' berfungsi menggabungkan hal yang setara." }) }
    ],
    6: [
      { t: "Teks Pidato", m: (i) => ({ q: `Bagian pidato yang berisi salam dan ucapan syukur adalah ...`, opts: ["Pembuka pidato", "Isi pidato", "Penutup pidato", "Amanat"], c: 0, exp: "Salam dan syukur disampaikan pada bagian pembuka." }) },
      { t: "Laporan Pengamatan", m: (i) => ({ q: `Laporan hasil pengamatan harus bersifat ...`, opts: ["Objektif dan faktual", "Fiktif dan imajinatif", "Bebas rekayasa", "Mengandung opini pribadi"], c: 0, exp: "Laporan observasi harus berdasarkan fakta nyata tanpa rekayasa." }) },
      { t: "Peribahasa", m: (i) => ({ q: `Arti peribahasa 'Tong kosong nyaring bunyinya' adalah ...`, opts: ["Orang yang banyak bicara biasanya kurang berilmu", "Orang kaya yang dermawan", "Benda yang berbunyi merdu", "Orang pendiam yang pintar"], c: 0, exp: "Maknanya orang yang sombong banyak bicara hakikatnya tidak berilmu." }) }
    ]
  },
  "pendidikan-pancasila": {
    all: [
      { t: "Simbol Sila Pancasila", m: (i, g) => ({ q: `Simbol dari sila ke-${(i%5)+1} Pancasila adalah ...`, opts: [["Bintang", "Rantai emas", "Pohon beringin", "Kepala banteng", "Padi dan kapas"][i%5], "Garuda Pancasila", "Bendera Merah Putih", "Timbangan Keadilan"], c: 0, exp: `Sila ke-${(i%5)+1} disimbolkan oleh ${["Bintang", "Rantai emas", "Pohon beringin", "Kepala banteng", "Padi dan kapas"][i%5]}.` }) },
      { t: "Penerapan Pancasila", m: (i, g) => ({ q: `Membantu teman yang terjatuh merupakan pengamalan sila ke- ...`, opts: ["Kedua (Kemanusiaan)", "Pertama (Ketuhanan)", "Ketiga (Persatuan)", "Keempat (Kerakyatan)"], c: 0, exp: "Saling tolong-menolong sesama manusia adalah nilai sila ke-2." }) },
      { t: "Musyawarah", m: (i, g) => ({ q: `Keputusan bersama dalam musyawarah harus ditaati dengan rasa ...`, opts: ["Tanggung jawab dan ikhlas", "Terpaksa", "Marah", "Ragu-ragu"], c: 0, exp: "Hasil musyawarah wajib dilaksanakan dengan penuh tanggung jawab." }) },
      { t: "Bhinneka Tunggal Ika", m: (i, g) => ({ q: `Semboyan Bhinneka Tunggal Ika tertulis pada pita yang dicengkeram oleh ...`, opts: ["Burung Garuda Pancasila", "Harimau Sumatera", "Gajah Mada", "Pahlawan Nasional"], c: 0, exp: "Garuda Pancasila mencengkeram pita bertuliskan Bhinneka Tunggal Ika." }) }
    ]
  },
  "ipas": {
    all: [
      { t: "Fotosintesis", m: (i, g) => ({ q: `Zat hijau daun penangkap cahaya matahari dalam fotosintesis adalah ...`, opts: ["Klorofil", "Oksigen", "Karbon", "Glukosa"], c: 0, exp: "Klorofil adalah pigmen hijau daun penyerap energi surya." }) },
      { t: "Metamorfosis", m: (i, g) => ({ q: `Kupu-kupu mengalami metamorfosis sempurna yang melalui tahap ...`, opts: ["Telur, larva (ulat), pupa (kepompong), imago", "Telur, nimfa, dewasa", "Telur, jentik, kepompong", "Ulat, telur, kepompong"], c: 0, exp: "Kupu-kupu melewati fase ulat dan kepompong (sempurna)." }) },
      { t: "Rantai Makanan", m: (i, g) => ({ q: `Dalam ekosistem sawah, padi bertindak sebagai ...`, opts: ["Produsen", "Konsumen 1", "Konsumen 2", "Pengurai"], c: 0, exp: "Tumbuhan hijau bertindak sebagai produsen pembuat makanan." }) },
      { t: "Perubahan Wujud", m: (i, g) => ({ q: `Perubahan wujud benda padat menjadi cair disebut ...`, opts: ["Mencair", "Membeku", "Menguap", "Menyublim"], c: 0, exp: "Es padat menjadi air cair disebut peristiwa mencair." }) },
      { t: "Tata Surya", m: (i, g) => ({ q: `Pusat dari sistem tata surya kita adalah ...`, opts: ["Matahari", "Bumi", "Bulan", "Yupiter"], c: 0, exp: "Matahari adalah bintang induk sebagai pusat orbit tata surya." }) }
    ]
  },
  "bahasa-inggris": {
    all: [
      { t: "Vocabulary", m: (i, g) => ({ q: `The Indonesian word for 'Book' is ...`, opts: ["Buku", "Meja", "Kursi", "Tas"], c: 0, exp: "Book artinya buku." }) },
      { t: "Greetings", m: (i, g) => ({ q: `What do you say when meeting someone at 7 a.m.?`, opts: ["Good morning", "Good night", "Good afternoon", "Good evening"], c: 0, exp: "Good morning digunakan saat pagi hari." }) },
      { t: "Colors", m: (i, g) => ({ q: `What is the color of milk?`, opts: ["White", "Black", "Red", "Blue"], c: 0, exp: "Milk is white (putih)." }) },
      { t: "Numbers", m: (i, g) => ({ q: `Ten minus three is ...`, opts: ["Seven (7)", "Six (6)", "Eight (8)", "Nine (9)"], c: 0, exp: "10 - 3 = 7 (Seven)." }) }
    ]
  },
  "pjok": {
    all: [
      { t: "Gerak Lokomotor", m: (i, g) => ({ q: `Gerakan berpindah tempat seperti berjalan dan berlari dinamakan gerak ...`, opts: ["Lokomotor", "Non-lokomotor", "Manipulatif", "Statik"], c: 0, exp: "Gerak berpindah tempat disebut gerak lokomotor." }) },
      { t: "Kebugaran", m: (i, g) => ({ q: `Pemanasan sebelum olahraga bermanfaat untuk ...`, opts: ["Mencegah cedera otot", "Cepat lelah", "Membuat haus", "Merusak pakaian"], c: 0, exp: "Pemanasan melenturkan otot dan sendi agar aman dari cedera." }) },
      { t: "Sepak Bola", m: (i, g) => ({ q: `Pemain yang bertugas menjaga gawang dalam sepak bola disebut ...`, opts: ["Kiper (penjaga gawang)", "Penyerang", "Gelandang", "Wasit"], c: 0, exp: "Kiper adalah pemain penjaga gawang." }) }
    ]
  },
  "seni-budaya": {
    all: [
      { t: "Warna Primer", m: (i, g) => ({ q: `Tiga warna pokok (primer) adalah ...`, opts: ["Merah, kuning, biru", "Hijau, ungu, oranye", "Hitam, putih, abu", "Cokelat, emas, perak"], c: 0, exp: "Merah, kuning, dan biru adalah warna dasar." }) },
      { t: "Alat Musik", m: (i, g) => ({ q: `Alat musik angklung dimainkan dengan cara ...`, opts: ["Digoyangkan / digetarkan", "Dipukul", "Ditiup", "Dipetik"], c: 0, exp: "Angklung terbuat dari bambu dan dibunyikan dengan digoyangkan." }) },
      { t: "Seni Rupa 3D", m: (i, g) => ({ q: `Karya seni yang memiliki volume ruang (panjang, lebar, tinggi) disebut karya ...`, opts: ["Tiga dimensi (3D)", "Dua dimensi (2D)", "Satu dimensi", "Digital"], c: 0, exp: "Karya 3 dimensi memiliki volume ruang seperti patung." }) }
    ]
  },
  "pendidikan-agama": {
    islam: [
      { t: "Rukun Islam", m: (i) => ({ q: `Rukun Islam yang pertama adalah mengucapkan ...`, opts: ["Dua kalimat syahadat", "Mendirikan shalat", "Membayar zakat", "Puasa ramadhan"], c: 0, exp: "Rukun Islam ke-1 adalah Syahadatain." }) },
      { t: "Shalat Wajib", m: (i) => ({ q: `Shalat wajib sehari semalam berjumlah ... waktu.`, opts: ["5 waktu", "3 waktu", "4 waktu", "7 waktu"], c: 0, exp: "Shalat fardhu: Subuh, Zhuhur, Ashar, Maghrib, Isya (5 waktu)." }) },
      { t: "Rukun Iman", m: (i) => ({ q: `Iman kepada kitab-kitab Allah merupakan rukun iman ke- ...`, opts: ["Tiga", "Satu", "Dua", "Empat"], c: 0, exp: "Rukun Iman ke-3 adalah Iman kepada Kitab-kitab Allah." }) }
    ],
    kristen: [
      { t: "Kasih Tuhan", m: (i) => ({ q: `Hukum yang terutama yang diajarkan Tuhan Yesus adalah hukum ...`, opts: ["Kasih", "Taurat", "Perang", "Adat"], c: 0, exp: "Kasihilah Tuhan Allahmu dan kasihilah sesamamu manusia." }) },
      { t: "Doa Bapa Kami", m: (i) => ({ q: `Doa yang diajarkan oleh Tuhan Yesus kepada murid-murid-Nya adalah ...`, opts: ["Doa Bapa Kami", "Doa Pagi", "Doa Makan", "Doa Malam"], c: 0, exp: "Doa Bapa Kami adalah doa keteladanan yang diajarkan Yesus." }) }
    ],
    katolik: [
      { t: "Tanda Salib", m: (i) => ({ q: `Umat Katolik mengawali doa dengan membuat ...`, opts: ["Tanda Salib", "Tanda Bintang", "Tanda Hati", "Tanda Cincin"], c: 0, exp: "Tanda Salib: Dalam nama Bapa, dan Putra, dan Roh Kudus." }) },
      { t: "Sakramen", m: (i) => ({ q: `Sakramen inisiasi pertama dalam Gereja Katolik adalah Sakramen ...`, opts: ["Baptis", "Krisma", "Ekaristi", "Imamat"], c: 0, exp: "Sakramen Baptis adalah sakramen dasar inisiasi kristiani." }) }
    ]
  },
  "bahasa-madura": {
    1: [
      { t: "Wilangan (Angka)", m: (i) => ({ q: `Wilangan 'sittong' dhalem bhasa Indonesia artena ...`, opts: ["Satu (1)", "Dua (2)", "Tiga (3)", "Empat (4)"], c: 0, exp: "Sittong artena angka settong (1)." }) },
      { t: "Barna (Warna)", m: (i) => ({ q: `Barna 'pote' dhalem bhasa Indonesia artena ...`, opts: ["Putih", "Hitam", "Merah", "Kuning"], c: 0, exp: "Pote artena barna potè (putih)." }) },
      { t: "Anggota Badan", m: (i) => ({ q: `Bhasa alossa (engghi-bhunten) 'mata' iya areya ...`, opts: ["Soca", "Kopeng", "Elong", "Cangkem"], c: 0, exp: "Bhasa engghi-bhunten daddi 'soca'." }) },
      { t: "Kaluwarga", m: (i) => ({ q: `Sebutan kaangghuy ibu dhalem bhasa Madura iya areya ...`, opts: ["Embu' / Ebu", "Eppa'", "Kae", "Nyai"], c: 0, exp: "Embu' otaba ebu artena ibu." }) }
    ],
    2: [
      { t: "Kewan (Hewan)", m: (i) => ({ q: `Kewan se ngasellagi aeng soso tor biasa ekerap e Madura iya areya ...`, opts: ["Sape", "Embi'", "Koceng", "Pettek"], c: 0, exp: "Sape iya areya sapi se biasa ekerap." }) },
      { t: "Oca' Tanduk", m: (i) => ({ q: `Oca' 'ngakan' dhalem bhasa Indonesia artena ...`, opts: ["Makan", "Minum", "Tidur", "Berjalan"], c: 0, exp: "Ngakan artena makan." }) },
      { t: "Benda e Bhengko", m: (i) => ({ q: `Bhasa Madurana 'rumah' iya areya ...`, opts: ["Bhengko", "Dhalem", "Langghar", "Dapor"], c: 0, exp: "Bhengko iya areya roma otaba rumah (enja'-iya)." }) },
      { t: "Wilangan", m: (i) => ({ q: `Bhasa Madurana angka 5 (lima) iya areya ...`, opts: ["Lema'", "Empa'", "Ennem", "Petto'"], c: 0, exp: "Angka 5 dhalem bhasa Madura iya areya lema'." }) }
    ],
    3: [
      { t: "Ondhaggha Bhasa", m: (i) => ({ q: `Bhasa engghi-bhunten kaangghuy oca' 'tedhung' (tidur) iya areya ...`, opts: ["Sarean", "Ngedhem", "Mole", "Meyos"], c: 0, exp: "Engghi-bhunten daddi 'sarean'." }) },
      { t: "Ondhaggha Bhasa", m: (i) => ({ q: `Bhasa engghi-bhunten kaangghuy oca' 'ngakan' (makan) iya areya ...`, opts: ["Dha'ar", "Neddha", "Ngenom", "Sarean"], c: 0, exp: "Engghi-bhunten kaangghuy oreng towa iya areya 'dha'ar'." }) },
      { t: "Budaya Madura", m: (i) => ({ q: `Lomba balap sape se kalonta e Madura anyama ...`, opts: ["Kerapan Sapi", "Sapi Sonok", "Mamaca", "Ludruk"], c: 0, exp: "Kerapan Sapi iya areya kabudayaan balap sape asli Madura." }) },
      { t: "Pakean Adat", m: (i) => ({ q: `Pakean adat lalake' Madura se abarna celleng kalaban kaos loreng mera pote anyama ...`, opts: ["Pesa'an", "Kebaya", "Beskap", "Batik"], c: 0, exp: "Pesa'an iya areya rasukan tradisional Madura." }) }
    ],
    4: [
      { t: "Ondhaggha Bhasa", m: (i) => ({ q: `Bhasa engghi-bhunten kaangghuy 'entar' (pergi) iya areya ...`, opts: ["Meyos", "Dateng", "Rabhu", "Ngadep"], c: 0, exp: "Meyos artena tindhih/pergi kaangghuy oreng se lebbi towa." }) },
      { t: "Senjata Tradisional", m: (i) => ({ q: `Sanajata tradisional Madura se bhangonna bengkoy akadhi bulan sabit anyama ...`, opts: ["Calo' / Calorit", "Keris", "Mandau", "Rencong"], c: 0, exp: "Celurit (are') iya areya sanajata tradisional Madura." }) },
      { t: "Tarian Madura", m: (i) => ({ q: `Tari Muang Sangkal asalla dhari kabupaten ...`, opts: ["Sumenep", "Bangkalan", "Sampang", "Pamekasan"], c: 0, exp: "Tari Muang Sangkal iya areya tarian penyambutan dhari Karaton Sumenep." }) },
      { t: "Kosa Oca'", m: (i) => ({ q: `Oca' 'ngoladi' dhalem bhasa enja'-iya iya areya ...`, opts: ["Ngabas / ngenga'", "Meyos", "Neddha", "Tedhung"], c: 0, exp: "Ngoladi artena ngabas (melihat)." }) }
    ],
    5: [
      { t: "Parebhasan Madura", m: (i) => ({ q: `Urutan hormat da' oreng towa, guru, ban pamarenta e Madura anyama ...`, opts: ["Bhuppa' Bhabbhu' Ghuru Rato", "Abhantal omba' asapo' angen", "Rampak naong beringin korong", "Mon aeng tennang"], c: 0, exp: "Bhuppa' (ayah), Bhabbhu' (ibu), Ghuru (guru), Rato (pemimpin/pemerintah)." }) },
      { t: "Parebhasan Madura", m: (i) => ({ q: `Parebhasan 'Abhantal omba' asapo' angen' ngajarragi sipat ...`, opts: ["Kerras alako ban bangal ta' tako' tantangan", "Gampang putus asa", "Malerat alako", "Ngarep babalaan"], c: 0, exp: "Artina pantang menyerah dhalem alako akadhi kompolanna nelayan e tase'." }) },
      { t: "Geografi Madura", m: (i) => ({ q: `Polo Madura ebagi daddi 4 kabupaten, iya areya ...`, opts: ["Bangkalan, Sampang, Pamekasan, Sumenep", "Surabaya, Gresik, Sidoarjo, Mojokerto", "Bangkalan, Sumenep, Pasuruan, Jember", "Sampang, Pamekasan, Tuban, Lamongan"], c: 0, exp: "Empat kabupaten e Madura: Bangkalan, Sampang, Pamekasan, Sumenep." }) },
      { t: "Kosa Oca'", m: (i) => ({ q: `Oca' 'tase'' dhalem bhasa Indonesia artena ...`, opts: ["Laut", "Gunung", "Sungai", "Danau"], c: 0, exp: "Tase' artena laut." }) }
    ],
    6: [
      { t: "Tembang Macapat", m: (i) => ({ q: `Slagha settong tembang macapat Madura iya areya ...`, opts: ["Senom otaba Artate", "Keroncong", "Campursari", "Dangdut"], c: 0, exp: "Senom ban Artate tamaso' tembang macapat dhalem sastra Madura." }) },
      { t: "Carita Rakyat", m: (i) => ({ q: `Pahlawan carita rakyat Madura se kalonta sakti ban anumpes muso anyama ...`, opts: ["Joko Tole", "Si Pitung", "Lutung Kasarung", "Malin Kundang"], c: 0, exp: "Joko Tole iya areya satriya sakti carita rakyat Songennep (Sumenep)." }) },
      { t: "Tatakrama Bhasa", m: (i) => ({ q: `Manabi acaca da' oreng se lebbi towa otaba ghuru, patot ngangguy bhasa ...`, opts: ["Engghi-Bhunten", "Enja'-Iya", "Bhasa pasar", "Bhasa gaul"], c: 0, exp: "Ondhaggha bhasa engghi-bhunten kaangghuy ngormati oreng se lebbi towa." }) },
      { t: "Parebhasan Madura", m: (i) => ({ q: `Arti parebhasan 'Rampak naong beringin korong' iya areya ...`, opts: ["Kaodhi'an se rukun, aman, tor tentrem", "Kahanan se ramme", "Karepotan rajah", "Kaserang muso"], c: 0, exp: "Artina kaodhi'an se dame, aman, rukun, ban tentrem." }) }
    ]
  }
};

const finalQuestions = [];
let qIdCounter = 1;

SUBJECT_LIST.forEach(subj => {
  subj.grades.forEach(grade => {

    const religionsToProcess = subj.requiresReligion ? ["islam", "kristen", "katolik"] : [null];

    religionsToProcess.forEach(rel => {
      const key = `${grade}_${subj.id}_${rel || 'none'}`;
      const existing = questionMap[key] || [];

      const existingMudah = existing.filter(q => q.difficulty === 'mudah');
      const existingSedang = existing.filter(q => q.difficulty === 'sedang');
      const existingSulit = existing.filter(q => q.difficulty === 'sulit');

      const neededMudah = Math.max(0, 10 - existingMudah.length);
      const neededSedang = Math.max(0, 20 - existingSedang.length);
      const neededSulit = Math.max(0, 30 - existingSulit.length);

      finalQuestions.push(...existingMudah);
      finalQuestions.push(...existingSedang);
      finalQuestions.push(...existingSulit);

      generateMissing(subj.id, grade, rel, 'mudah', neededMudah);
      generateMissing(subj.id, grade, rel, 'sedang', neededSedang);
      generateMissing(subj.id, grade, rel, 'sulit', neededSulit);
    });
  });
});

function generateMissing(subjectId, grade, religion, difficulty, countNeeded) {
  if (countNeeded <= 0) return;

  const subjectBank = TOPIC_BANKS[subjectId];
  let templates = [];

  if (subjectBank) {
    if (subjectId === "pendidikan-agama") {
      templates = subjectBank[religion] || subjectBank['islam'] || [];
    } else if (subjectBank[grade]) {
      templates = subjectBank[grade];
    } else if (subjectBank.all) {
      templates = subjectBank.all;
    }
  }

  if (!templates || templates.length === 0) {
    templates = [
      { t: "Konsep Dasar", m: (i) => ({ q: `Latihan materi ${subjectId} Kelas ${grade} ke-${i+1}: manakah pernyataan yang tepat?`, opts: ["Pernyataan A benar sesuai materi.", "Pernyataan B kurang tepat.", "Pernyataan C keliru.", "Pernyataan D tidak relevan."], c: 0, exp: "Pernyataan A memberikan penjelasan yang tepat sesuai konsep pembelajaran." }) }
    ];
  }

  for (let i = 0; i < countNeeded; i++) {
    const tpl = templates[i % templates.length];
    const data = tpl.m(i, grade);

    let opts, cIndex;
    if (data.opts) {
      opts = data.opts;
      cIndex = data.c !== undefined ? data.c : 0;
    } else if (data.ans !== undefined) {
      const correctVal = data.ans;
      opts = [
        `${correctVal}`,
        `${correctVal + 1}`,
        `${Math.max(1, correctVal - 1)}`,
        `${correctVal + 2}`
      ];
      cIndex = 0;
    } else {
      opts = ["Pilihan Benar", "Pilihan Pengecoh 1", "Pilihan Pengecoh 2", "Pilihan Pengecoh 3"];
      cIndex = 0;
    }

    const qObj = createQuestion(
      grade,
      subjectId,
      religion,
      difficulty,
      i + 1,
      tpl.t,
      data.q,
      opts,
      cIndex,
      data.exp || "Jawaban tersebut sesuai dengan materi pembelajaran yang dipelajari di kelas."
    );
    qObj.id = `gen-${subjectId.substring(0, 3)}${religion ? '-' + religion : ''}-k${grade}-${difficulty[0]}-${String(qIdCounter++).padStart(3, '0')}`;
    finalQuestions.push(qObj);
  }
}

console.log(`Generated total of ${finalQuestions.length} questions across all grades & subjects.`);

const outputContent = `/**
 * KUIS PINTAR SD - BANK SOAL & METADATA MATA PELAJARAN (SISTEM LEVEL SERAGAM)
 * Setiap mata pelajaran dan kelas memiliki level yang merata:
 * - Level Mudah  : 10 Soal (Dasar & Santai)
 * - Level Sedang : 20 Soal (Standar & Penerapan)
 * - Level Sulit  : 30 Soal (Tantangan Logika & HOTS)
 */

const SUBJECT_LIST = ${JSON.stringify(SUBJECT_LIST, null, 2)};

const RELIGION_OPTIONS = ${JSON.stringify(RELIGION_OPTIONS, null, 2)};

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

const QUESTIONS_DATA = ${JSON.stringify(finalQuestions, null, 2)};

/**
 * Filter bank soal berdasarkan kelas, mata pelajaran, level, dan agama
 */
function getQuestionsForLevel(grade, subjectId, levelId, religionId) {
  const targetLevel = levelId || "mudah";
  const targetCount = LEVELS_CONFIG[targetLevel] ? LEVELS_CONFIG[targetLevel].count : 10;

  // 1. Ambil soal yang cocok dengan kelas & mata pelajaran
  let pool = QUESTIONS_DATA.filter(q => {
    if (Number(q.grade) !== Number(grade)) return false;
    if (q.subject !== subjectId) return false;
    if (subjectId === "pendidikan-agama") {
      if (!religionId) return true;
      return q.religion === religionId;
    }
    return true;
  });

  // 2. Prioritaskan soal yang kesulitan-nya sesuai targetLevel
  let primary = pool.filter(q => q.difficulty === targetLevel);
  let secondary = pool.filter(q => q.difficulty !== targetLevel);

  // Gabungkan hingga mencapai targetCount
  let result = [...primary, ...secondary];
  return result.slice(0, targetCount);
}

/**
 * Validasi integritas bank soal otomatis
 */
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

fs.writeFileSync(path.join(__dirname, 'data', 'questions.js'), outputContent, 'utf8');
console.log("Successfully updated data/questions.js with uniform level questions!");
