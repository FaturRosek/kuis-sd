const fs = require('fs');
const path = require('path');

const genDir = path.join(__dirname, '..', 'generators');
if (!fs.existsSync(genDir)) fs.mkdirSync(genDir, { recursive: true });

function formatQuestion(id, grade, topic, difficulty, question, options, correctAnswer, explanation) {
  return {
    id,
    grade: Number(grade),
    subject: "matematika",
    topic,
    difficulty,
    question,
    options,
    correctAnswer,
    explanation
  };
}

const allQuestions = [];
const seenQuestions = new Set();

function addQ(id, grade, topic, difficulty, question, options, correctAnswer, explanation) {
  const normQ = question.trim().toLowerCase();
  if (seenQuestions.has(normQ)) {
    throw new Error(`Duplicate question in math: "${question}"`);
  }
  seenQuestions.add(normQ);
  allQuestions.push(formatQuestion(id, grade, topic, difficulty, question, options, correctAnswer, explanation));
}

const part1 = JSON.parse(fs.readFileSync(path.join(genDir, 'math_part1.json'), 'utf8'));
part1.forEach(q => {
  addQ(q.id, q.grade, q.topic, q.difficulty, q.question, q.options, q.correctAnswer, q.explanation);
});

console.log("Loaded Kelas 1-3: " + allQuestions.length + " questions.");

addQ("mtk-k4-m01", 4, "FPB Dasar", "mudah", "Faktor Persekutuan Terbesar (FPB) dari bilangan 6 dan 9 adalah ...", ["2", "3", "4", "6"], 1, "Faktor dari 6: 1, 2, 3, 6. Faktor dari 9: 1, 3, 9. Faktor persekutuan terbesar adalah 3.");
addQ("mtk-k4-m02", 4, "KPK Dasar", "mudah", "Kelipatan Persekutuan Terkecil (KPK) dari bilangan 4 dan 6 adalah ...", ["8", "12", "16", "24"], 1, "Kelipatan 4: 4, 8, 12, ... Kelipatan 6: 6, 12, ... KPK = 12.");
addQ("mtk-k4-m03", 4, "FPB Dasar", "mudah", "Faktor Persekutuan Terbesar (FPB) dari bilangan 8 dan 12 adalah ...", ["2", "4", "6", "8"], 1, "Faktor pembagi terbesar yang sama dari 8 dan 12 adalah 4.");
addQ("mtk-k4-m04", 4, "Pecahan Desimal", "mudah", "Bentuk desimal dari pecahan biasa 1/2 adalah ...", ["0,2", "0,25", "0,5", "0,75"], 2, "1 dibagi 2 adalah 0,5.");
addQ("mtk-k4-m05", 4, "Pecahan Desimal", "mudah", "Bentuk desimal dari pecahan biasa 1/4 adalah ...", ["0,25", "0,4", "0,5", "0,14"], 0, "1 dibagi 4 adalah 0,25.");
addQ("mtk-k4-m06", 4, "Pecahan Persen", "mudah", "Bentuk persen dari pecahan biasa 1/2 adalah ...", ["25%", "50%", "75%", "100%"], 1, "1/2 × 100% = 50%.");
addQ("mtk-k4-m07", 4, "Besar Sudut Siku-siku", "mudah", "Besar sudut siku-siku selalu tepat berukuran ...", ["45°", "60°", "90°", "180°"], 2, "Sudut siku-siku besarnya tepat 90°.");
addQ("mtk-k4-m08", 4, "Pembulatan Puluhan", "mudah", "Hasil pembulatan bilangan 48 ke puluhan terdekat adalah ...", ["40", "45", "50", "60"], 2, "Karena satuan angka 8 ≥ 5, dibulatkan ke atas menjadi 50.");
addQ("mtk-k4-m09", 4, "Pembulatan Ratusan", "mudah", "Hasil pembulatan bilangan 132 ke ratusan terdekat adalah ...", ["100", "130", "150", "200"], 0, "Karena angka puluhan 3 < 5, dibulatkan ke bawah menjadi 100.");
addQ("mtk-k4-m10", 4, "Segitiga Sama Sisi", "mudah", "Segitiga yang ketiga sisinya sama panjang dinamakan segitiga ...", ["Sama kaki", "Siku-siku", "Sama sisi", "Sembarang"], 2, "Segitiga dengan ketiga sisi sama panjang adalah segitiga sama sisi.");

addQ("mtk-k4-s01", 4, "Rumus Luas Segitiga", "sedang", "Rumus untuk menghitung luas daerah segitiga adalah ...", ["panjang × lebar", "sisi × sisi", "1/2 × alas × tinggi", "alas + tinggi"], 2, "Luas segitiga = 1/2 × alas × tinggi.");
addQ("mtk-k4-s02", 4, "Luas Segitiga Sederhana", "sedang", "Sebuah segitiga memiliki alas 8 cm dan tinggi 6 cm. Luas segitiga tersebut adalah ...", ["24 cm²", "48 cm²", "14 cm²", "28 cm²"], 0, "Luas = 1/2 × 8 × 6 = 24 cm².");
addQ("mtk-k4-s03", 4, "Luas Segitiga", "sedang", "Panjang alas segitiga 10 cm dan tingginya 7 cm. Luas segitiga tersebut adalah ...", ["30 cm²", "35 cm²", "70 cm²", "17 cm²"], 1, "Luas = 1/2 × 10 × 7 = 35 cm².");
addQ("mtk-k4-s04", 4, "Keliling Segitiga Sama Sisi", "sedang", "Panjang sisi sebuah segitiga sama sisi adalah 9 cm. Keliling segitiga tersebut adalah ...", ["18 cm", "27 cm", "36 cm", "81 cm"], 1, "Keliling = 3 × 9 = 27 cm.");
addQ("mtk-k4-s05", 4, "Jenis Sudut 45°", "sedang", "Sudut yang besarnya 45° digolongkan sebagai jenis sudut ...", ["Lancip", "Siku-siku", "Tumpul", "Refleks"], 0, "Sudut antara 0° dan 90° adalah sudut lancip.");
addQ("mtk-k4-s06", 4, "Jenis Sudut 120°", "sedang", "Sudut yang besarnya 120° digolongkan sebagai jenis sudut ...", ["Lancip", "Siku-siku", "Tumpul", "Lurus"], 2, "Sudut antara 90° dan 180° adalah sudut tumpul.");
addQ("mtk-k4-s07", 4, "Pecahan Campuran", "sedang", "Pecahan campuran 2 1/4 jika diubah ke bentuk pecahan biasa adalah ...", ["7/4", "8/4", "9/4", "10/4"], 2, "(2 × 4 + 1) / 4 = 9/4.");
addQ("mtk-k4-s08", 4, "Pecahan Biasa ke Campuran", "sedang", "Pecahan biasa 11/3 jika diubah ke bentuk pecahan campuran adalah ...", ["2 2/3", "3 1/3", "3 2/3", "4 1/3"], 2, "11 : 3 = 3 sisa 2, maka menjadi 3 2/3.");
addQ("mtk-k4-s09", 4, "Desimal ke Pecahan Biasa", "sedang", "Pecahan desimal 0,75 senilai dengan pecahan biasa paling sederhana yaitu ...", ["1/4", "2/4", "3/4", "4/5"], 2, "0,75 = 75/100 disederhanakan dibagi 25 menjadi 3/4.");
addQ("mtk-k4-s10", 4, "Desimal ke Persen", "sedang", "Bentuk persen dari bilangan desimal 0,35 adalah ...", ["3,5%", "35%", "350%", "0,35%"], 1, "0,35 × 100% = 35%.");
addQ("mtk-k4-s11", 4, "Garis Sejajar", "sedang", "Dua garis pada bidang datar yang tidak akan pernah berpotongan meski diperpanjang disebut ...", ["Garis sejajar", "Garis berpotongan", "Garis tegak lurus", "Garis berimpit"], 0, "Garis sejajar memiliki jarak tetap dan tidak pernah berpotongan.");
addQ("mtk-k4-s12", 4, "Garis Tegak Lurus", "sedang", "Dua garis berpotongan yang membentuk sudut siku-siku 90° dinamakan garis ...", ["Sejajar", "Tegak lurus", "Berimpit", "Melengkung"], 1, "Garis tegak lurus saling berpotongan membentuk sudut tepat 90°.");
addQ("mtk-k4-s13", 4, "Penyajian Diagram Batang", "sedang", "Diagram penyajian data yang menggunakan persegi panjang tegak atau mendatar disebut diagram ...", ["Garis", "Lingkaran", "Batang", "Pohon"], 2, "Diagram batang menyajikan data dalam bentuk balok/persegi panjang sejajar.");
addQ("mtk-k4-s14", 4, "Taksiran Penjumlahan", "sedang", "Taksiran terbaik ke puluhan terdekat dari operasi 38 + 52 adalah ...", ["80", "90", "100", "110"], 1, "38 dibulatkan jadi 40, 52 dibulatkan jadi 50. Maka 40 + 50 = 90.");
addQ("mtk-k4-s15", 4, "Taksiran Pengurangan", "sedang", "Taksiran terbaik ke puluhan terdekat dari operasi 73 - 29 adalah ...", ["30", "40", "50", "60"], 1, "73 dibulatkan jadi 70, 29 dibulatkan jadi 30. Maka 70 - 30 = 40.");
addQ("mtk-k4-s16", 4, "Keliling Persegi Panjang", "sedang", "Persegi panjang berukuran panjang 14 cm dan lebar 9 cm. Kelilingnya adalah ...", ["23 cm", "46 cm", "126 cm", "32 cm"], 1, "Keliling = 2 × (14 + 9) = 2 × 23 = 46 cm.");
addQ("mtk-k4-s17", 4, "Luas Persegi Panjang", "sedang", "Persegi panjang berukuran panjang 12 cm dan lebar 7 cm. Luasnya adalah ...", ["38 cm²", "84 cm²", "72 cm²", "96 cm²"], 1, "Luas = 12 × 7 = 84 cm².");
addQ("mtk-k4-s18", 4, "Faktorisasi Prima 12", "sedang", "Faktorisasi prima dari bilangan 12 adalah ...", ["2 × 3", "2² × 3", "2 × 3²", "2 × 6"], 1, "12 = 2 × 2 × 3 = 2² × 3.");
addQ("mtk-k4-s19", 4, "Faktorisasi Prima 20", "sedang", "Faktorisasi prima dari bilangan 20 adalah ...", ["2² × 5", "2 × 5²", "4 × 5", "2 × 10"], 0, "20 = 2 × 2 × 5 = 2² × 5.");
addQ("mtk-k4-s20", 4, "Bilangan Prima Belasan", "sedang", "Bilangan prima yang terletak di antara 10 dan 20 adalah ...", ["11, 13, 15, 17", "11, 13, 17, 19", "13, 15, 17, 19", "11, 15, 17, 19"], 1, "11, 13, 17, 19 hanya memiliki 2 faktor pembagi (1 dan dirinya sendiri). 15 bukan prima.");

addQ("mtk-k4-u01", 4, "Soal Cerita FPB Bingkisan", "sulit", "Ibu memiliki 24 apel dan 36 jeruk untuk dibagikan ke dalam kantong sama banyak. Jumlah kantong terbanyak yang dapat dibuat adalah ...", ["6 kantong", "8 kantong", "12 kantong", "18 kantong"], 2, "FPB dari 24 dan 36 adalah 12 kantong.");
addQ("mtk-k4-u02", 4, "Isi Kantong FPB", "sulit", "Pada soal pembagian 24 apel dan 36 jeruk ke 12 kantong, berapa banyak jeruk pada setiap kantong?", ["2 buah", "3 buah", "4 buah", "6 buah"], 1, "36 jeruk : 12 kantong = 3 jeruk per kantong.");
addQ("mtk-k4-u03", 4, "Soal Cerita KPK Lampu", "sulit", "Lampu merah menyala tiap 6 detik dan lampu hijau menyala tiap 8 detik. Kedua lampu menyala bersamaan setiap ... detik sekali.", ["14 detik", "24 detik", "48 detik", "12 detik"], 1, "KPK dari 6 dan 8 adalah 24 detik.");
addQ("mtk-k4-u04", 4, "Soal Cerita KPK Tanggal", "sulit", "Ali les renang tiap 3 hari sekali dan Budi tiap 4 hari sekali. Jika mereka les bersama tanggal 1 Mei, tanggal berapa mereka les bersama lagi?", ["7 Mei", "12 Mei", "13 Mei", "15 Mei"], 2, "KPK dari 3 dan 4 adalah 12 hari. Tanggal berikutnya = 1 + 12 = 13 Mei.");
addQ("mtk-k4-u05", 4, "Luas Bangun Gabungan", "sulit", "Bangun gabungan terdiri dari persegi panjang (alas 8 cm, tinggi 5 cm) dan segitiga di atasnya (alas 8 cm, tinggi 4 cm). Luas gabungannya adalah ...", ["48 cm²", "56 cm²", "64 cm²", "72 cm²"], 1, "Luas persegi panjang = 8 × 5 = 40. Luas segitiga = 1/2 × 8 × 4 = 16. Total = 40 + 16 = 56 cm².");
addQ("mtk-k4-u06", 4, "Jumlah Sudut Segitiga", "sulit", "Jumlah total ketiga sudut pada bangun datar segitiga apa pun selalu tepat berukuran ...", ["90°", "180°", "270°", "360°"], 1, "Jumlah sudut segitiga = 180°.");
addQ("mtk-k4-u07", 4, "Mencari Sudut Ketiga", "sulit", "Sebuah segitiga memiliki dua sudut berukuran 60° dan 70°. Berapakah besar sudut ketiga segitiga tersebut?", ["40°", "50°", "60°", "70°"], 1, "Sudut ketiga = 180° - (60° + 70°) = 180° - 130° = 50°.");
addQ("mtk-k4-u08", 4, "Sudut Lancip Siku-siku", "sulit", "Sebuah segitiga siku-siku memiliki salah satu sudut lancip berukuran 35°. Berapakah besar sudut lancip lainnya?", ["45°", "55°", "65°", "75°"], 1, "Sudut siku-siku 90°. Maka sudut lancip lain = 90° - 35° = 55°.");
addQ("mtk-k4-u09", 4, "Sudut Segitiga Sama Kaki", "sulit", "Segitiga sama kaki memiliki sudut puncak 40°. Berapakah besar masing-masing sudut alasnya?", ["60°", "70°", "80°", "100°"], 1, "Sisa sudut = 180° - 40° = 140°. Sudut alas = 140° : 2 = 70°.");
addQ("mtk-k4-u10", 4, "Hubungan Luas Persegi dan Persegi Panjang", "sulit", "Luas sebuah persegi sama dengan luas persegi panjang berukuran 16 cm × 4 cm. Panjang sisi persegi tersebut adalah ...", ["6 cm", "8 cm", "10 cm", "12 cm"], 1, "Luas = 16 × 4 = 64 cm². Sisi persegi = √64 = 8 cm.");
addQ("mtk-k4-u11", 4, "Taksiran Hasil Kali", "sulit", "Taksiran hasil kali terbaik ke puluhan terdekat dari 49 × 21 adalah ...", ["800", "900", "1.000", "1.100"], 2, "49 jadi 50, 21 jadi 20. Taksiran = 50 × 20 = 1.000.");
addQ("mtk-k4-u12", 4, "Taksiran Hasil Bagi", "sulit", "Taksiran hasil bagi terbaik ke puluhan terdekat dari 78 : 19 adalah ...", ["2", "3", "4", "5"], 2, "78 jadi 80, 19 jadi 20. 80 : 20 = 4.");
addQ("mtk-k4-u13", 4, "Kaki Segitiga Sama Kaki", "sulit", "Keliling segitiga sama kaki adalah 32 cm. Jika panjang sisi alasnya 10 cm, berapakah panjang masing-masing sisi kakinya?", ["10 cm", "11 cm", "12 cm", "13 cm"], 1, "(32 - 10) : 2 = 22 : 2 = 11 cm.");
addQ("mtk-k4-u14", 4, "Analisis Diagram Batang", "sulit", "Diagram nilai ulangan: nilai 70 (5 anak), nilai 80 (8 anak), nilai 90 (4 anak), nilai 100 (3 anak). Berapa banyak anak yang mendapat nilai di atas 70?", ["12 anak", "15 anak", "18 anak", "20 anak"], 1, "Nilai di atas 70: nilai 80 (8) + 90 (4) + 100 (3) = 15 anak.");
addQ("mtk-k4-u15", 4, "Modus Diagram Batang", "sulit", "Berdasarkan data nilai ulangan tersebut (nilai 70 ada 5, 80 ada 8, 90 ada 4, 100 ada 3), berapakah nilai yang paling banyak didapat siswa?", ["70", "80", "90", "100"], 1, "Nilai 80 didapat oleh 8 anak (terbanyak).");
addQ("mtk-k4-u16", 4, "Pembagian Porogapit", "sulit", "Berapakah hasil pembagian susun dari 456 : 3?", ["148", "152", "156", "162"], 1, "456 : 3 = 152.");
addQ("mtk-k4-u17", 4, "Pembagian Porogapit Bersisa", "sulit", "Berapakah hasil dan sisa pembagian dari 574 : 5?", ["114 sisa 4", "115 sisa 1", "114 sisa 2", "116 sisa 4"], 0, "574 = (114 × 5) + 4, jadi 114 sisa 4.");
addQ("mtk-k4-u18", 4, "Perkalian Susun", "sulit", "Berapakah hasil perkalian bersusun dari 34 × 26?", ["844", "864", "884", "904"], 2, "34 × 26 = 884.");
addQ("mtk-k4-u19", 4, "Operasi Campuran Kompleks", "sulit", "Berapakah hasil dari 450 + 250 : 5 - 40 × 3?", ["320", "360", "380", "410"], 2, "250 : 5 = 50, 40 × 3 = 120. Maka 450 + 50 - 120 = 500 - 120 = 380.");
addQ("mtk-k4-u20", 4, "Definisi Sudut Refleks", "sulit", "Sudut yang memiliki ukuran lebih dari 180° tetapi kurang dari 360° dinamakan sudut ...", ["Lancip", "Tumpul", "Refleks", "Lurus"], 2, "Sudut antara 180° dan 360° adalah sudut refleks.");
addQ("mtk-k4-u21", 4, "Pasangan Garis Sejajar", "sulit", "Berapa banyak pasang sisi yang saling sejajar pada sebuah bangun persegi?", ["1 pasang", "2 pasang", "3 pasang", "4 pasang"], 1, "Sisi atas-bawah sejajar (1 pasang) dan sisi kiri-kanan sejajar (1 pasang), total 2 pasang.");
addQ("mtk-k4-u22", 4, "Sifat Sudut Jajaran Genjang", "sulit", "Pada bangun jajaran genjang, sudut-sudut yang saling berhadapan memiliki sifat ...", ["Jumlahnya 90°", "Sama besar", "Berbeda besar", "Selalu siku-siku"], 1, "Sudut yang berhadapan pada jajaran genjang berukuran sama besar.");
addQ("mtk-k4-u23", 4, "Keliling Jajaran Genjang", "sulit", "Sebuah jajaran genjang memiliki sisi alas 10 cm dan sisi miring 6 cm. Kelilingnya adalah ...", ["26 cm", "32 cm", "40 cm", "60 cm"], 1, "Keliling = 2 × (10 + 6) = 2 × 16 = 32 cm.");
addQ("mtk-k4-u24", 4, "Luas Jajaran Genjang", "sulit", "Sebuah jajaran genjang memiliki panjang alas 12 cm dan tinggi 7 cm. Luas jajaran genjang tersebut adalah ...", ["42 cm²", "84 cm²", "96 cm²", "38 cm²"], 1, "Luas jajaran genjang = alas × tinggi = 12 × 7 = 84 cm².");
addQ("mtk-k4-u25", 4, "Luas Belah Ketupat", "sulit", "Sebuah belah ketupat memiliki panjang diagonal d1 = 8 cm dan d2 = 6 cm. Luas belah ketupat tersebut adalah ...", ["24 cm²", "48 cm²", "28 cm²", "14 cm²"], 0, "Luas belah ketupat = 1/2 × d1 × d2 = 1/2 × 8 × 6 = 24 cm².");
addQ("mtk-k4-u26", 4, "Keliling Belah Ketupat", "sulit", "Panjang sisi sebuah belah ketupat adalah 7 cm. Berapakah keliling belah ketupat tersebut?", ["21 cm", "28 cm", "35 cm", "49 cm"], 1, "Keliling = 4 × sisi = 4 × 7 = 28 cm.");
addQ("mtk-k4-u27", 4, "Soal Cerita Desimal Tali", "sulit", "Paman memiliki tali sepanjang 3,5 meter. Digunakan untuk mengikat pagar 1,25 meter. Berapa meter sisa tali paman?", ["2,15 meter", "2,25 meter", "2,35 meter", "2,50 meter"], 1, "3,50 - 1,25 = 2,25 meter.");
addQ("mtk-k4-u28", 4, "Penjumlahan Dua Desimal", "sulit", "Berapakah hasil penjumlahan desimal dari 0,45 + 0,38?", ["0,73", "0,83", "0,85", "0,93"], 1, "0,45 + 0,38 = 0,83.");
addQ("mtk-k4-u29", 4, "Pengurangan Desimal", "sulit", "Berapakah hasil pengurangan desimal dari 1,5 - 0,65?", ["0,75", "0,85", "0,95", "1,15"], 1, "1,50 - 0,65 = 0,85.");
addQ("mtk-k4-u30", 4, "Soal Cerita Diskon", "sulit", "Toko pakaian memberikan diskon 25% untuk baju seharga Rp80.000. Berapakah potongan harga (diskon) yang didapat?", ["Rp15.000", "Rp20.000", "Rp25.000", "Rp30.000"], 1, "25% × Rp80.000 = 1/4 × 80.000 = Rp20.000.");

console.log("Kelas 4 Matematika ready: " + allQuestions.length + " questions.");

addQ("mtk-k5-m01", 5, "Penjumlahan Pecahan Beda Penyebut", "mudah", "Berapa hasil penjumlahan dari 1/2 + 1/4?", ["2/6", "3/4", "3/6", "2/4"], 1, "Samakan penyebut: 2/4 + 1/4 = 3/4.");
addQ("mtk-k5-m02", 5, "Penjumlahan Pecahan Beda Penyebut", "mudah", "Berapa hasil penjumlahan dari 1/3 + 1/2?", ["2/5", "5/6", "3/6", "4/6"], 1, "KPK 3 dan 2 adalah 6: 2/6 + 3/6 = 5/6.");
addQ("mtk-k5-m03", 5, "Pengurangan Pecahan", "mudah", "Berapa hasil pengurangan dari 3/4 - 1/2?", ["1/4", "2/4", "1/2", "1/6"], 0, "3/4 - 2/4 = 1/4.");
addQ("mtk-k5-m04", 5, "Pengurangan Pecahan", "mudah", "Berapa hasil pengurangan dari 2/3 - 1/6?", ["1/3", "1/2", "3/6", "2/6"], 1, "4/6 - 1/6 = 3/6 = 1/2.");
addQ("mtk-k5-m05", 5, "Perkalian Pecahan", "mudah", "Berapa hasil perkalian dari 2/3 × 3/4?", ["5/12", "6/12 (1/2)", "6/7", "5/7"], 1, "6/12 disederhanakan menjadi 1/2.");
addQ("mtk-k5-m06", 5, "Pembagian Pecahan", "mudah", "Berapa hasil pembagian dari 1/2 : 1/4?", ["1", "2", "1/4", "1/8"], 1, "1/2 × 4/1 = 4/2 = 2.");
addQ("mtk-k5-m07", 5, "Satuan Kecepatan", "mudah", "Satuan kecepatan kendaraan yang paling sering digunakan pada speedometer adalah ...", ["km/jam", "meter/jam", "km/menit", "liter/detik"], 0, "Kilometer per jam (km/jam) adalah satuan kecepatan baku.");
addQ("mtk-k5-m08", 5, "Satuan Debit", "mudah", "Satuan untuk menyatakan besarnya debit aliran zat cair adalah ...", ["km/jam", "liter/detik", "kg/menit", "cm²/detik"], 1, "Debit dinyatakan dalam volume per waktu (liter/detik atau m³/jam).");
addQ("mtk-k5-m09", 5, "Rumus Volume Kubus", "mudah", "Rumus untuk menghitung volume bangun ruang kubus dengan panjang rusuk s adalah ...", ["s × s", "4 × s", "s³ (s × s × s)", "6 × s²"], 2, "Volume kubus = s³.");
addQ("mtk-k5-m10", 5, "Rumus Volume Balok", "mudah", "Rumus untuk menghitung volume bangun ruang balok adalah ...", ["panjang × lebar × tinggi", "panjang + lebar + tinggi", "2 × (p + l + t)", "p × l"], 0, "Volume balok = p × l × t.");

addQ("mtk-k5-s01", 5, "Menghitung Kecepatan", "sedang", "Jarak 120 km ditempuh mobil dalam waktu 2 jam. Berapakah kecepatan rata-rata mobil tersebut?", ["50 km/jam", "60 km/jam", "70 km/jam", "80 km/jam"], 1, "Kecepatan = Jarak : Waktu = 120 : 2 = 60 km/jam.");
addQ("mtk-k5-s02", 5, "Menghitung Jarak", "sedang", "Sebuah bus melaju dengan kecepatan 50 km/jam selama 3 jam. Berapakah jarak yang ditempuh bus?", ["120 km", "150 km", "180 km", "200 km"], 1, "Jarak = Kecepatan × Waktu = 50 × 3 = 150 km.");
addQ("mtk-k5-s03", 5, "Menghitung Waktu Tempuh", "sedang", "Jarak 90 km ditempuh sepeda motor dengan kecepatan 45 km/jam. Waktu yang diperlukan adalah ...", ["1,5 jam", "2 jam", "2,5 jam", "3 jam"], 1, "Waktu = Jarak : Kecepatan = 90 : 45 = 2 jam.");
addQ("mtk-k5-s04", 5, "Menghitung Debit", "sedang", "Sebuah kran mengalirkan air 60 liter dalam waktu 2 menit. Berapakah debit aliran kran tersebut?", ["20 liter/menit", "30 liter/menit", "40 liter/menit", "120 liter/menit"], 1, "Debit = Volume : Waktu = 60 : 2 = 30 liter/menit.");
addQ("mtk-k5-s05", 5, "Menghitung Volume dari Debit", "sedang", "Pipa air mengalir dengan debit 5 liter/detik selama 10 detik. Berapakah volume air yang dialirkan?", ["25 liter", "50 liter", "100 liter", "500 liter"], 1, "Volume = Debit × Waktu = 5 × 10 = 50 liter.");
addQ("mtk-k5-s06", 5, "Jarak Sebenarnya dari Skala", "sedang", "Pada peta berskala 1 : 100.000, jarak kota A dan B adalah 4 cm. Berapakah jarak sebenarnya?", ["4 km", "40 km", "400 meter", "400 km"], 0, "4 × 100.000 cm = 400.000 cm = 4 km.");
addQ("mtk-k5-s07", 5, "Jarak pada Peta", "sedang", "Jarak sebenarnya dua kota adalah 60 km. Jika digambar pada peta berskala 1 : 1.000.000, jarak pada peta adalah ...", ["3 cm", "6 cm", "9 cm", "12 cm"], 1, "60 km = 6.000.000 cm. Jarak peta = 6.000.000 : 1.000.000 = 6 cm.");
addQ("mtk-k5-s08", 5, "Volume Kubus Sederhana", "sedang", "Sebuah kubus memiliki panjang rusuk 5 cm. Berapakah volume kubus tersebut?", ["25 cm³", "75 cm³", "125 cm³", "150 cm³"], 2, "Volume = 5³ = 5 × 5 × 5 = 125 cm³.");
addQ("mtk-k5-s09", 5, "Volume Balok Sederhana", "sedang", "Balok berukuran panjang 10 cm, lebar 6 cm, dan tinggi 4 cm. Volume balok tersebut adalah ...", ["160 cm³", "200 cm³", "240 cm³", "280 cm³"], 2, "Volume = 10 × 6 × 4 = 240 cm³.");
addQ("mtk-k5-s10", 5, "Perbandingan Nilai", "sedang", "Perbandingan kelereng Amir dan Budi adalah 2 : 3. Jika kelereng Amir 10 butir, berapa butir kelereng Budi?", ["12 butir", "15 butir", "18 butir", "20 butir"], 1, "(3/2) × 10 = 15 butir.");
addQ("mtk-k5-s11", 5, "Perbandingan Umur", "sedang", "Perbandingan umur Ayah dan Danu adalah 7 : 2. Jika umur Danu 10 tahun, berapakah umur Ayah?", ["28 tahun", "35 tahun", "42 tahun", "49 tahun"], 1, "(7/2) × 10 = 35 tahun.");
addQ("mtk-k5-s12", 5, "Banyak Sisi Jaring Kubus", "sedang", "Jaring-jaring kubus tersusun dari bangun datar persegi sebanyak ...", ["4 buah", "5 buah", "6 buah", "8 buah"], 2, "Kubus memiliki 6 sisi persegi.");
addQ("mtk-k5-s13", 5, "Bentuk Sisi Balok", "sedang", "Bangun ruang balok dibatasi oleh sisi-sisi yang berbentuk ...", ["Segitiga", "Persegi panjang", "Lingkaran", "Trapesium"], 1, "Balok dibatasi oleh 6 persegi panjang (atau dengan sepasang persegi).");
addQ("mtk-k5-s14", 5, "Konversi Satuan Liter ke dm³", "sedang", "1 liter air setara atau sama persis volumenya dengan ...", ["1 cm³", "1 dm³", "1 m³", "10 dm³"], 1, "1 liter tepat sama dengan 1 desimeter kubik (1 dm³).");
addQ("mtk-k5-s15", 5, "Konversi Satuan m³ ke Liter", "sedang", "1 meter kubik (1 m³) air sama dengan berapa liter?", ["10 liter", "100 liter", "1.000 liter", "10.000 liter"], 2, "1 m³ = 1.000 dm³ = 1.000 liter.");
addQ("mtk-k5-s16", 5, "Konversi Liter ke ml", "sedang", "1 liter air sama dengan berapa mililiter (ml)?", ["100 ml", "500 ml", "1.000 ml", "10.000 ml"], 2, "1 liter = 1.000 ml.");
addQ("mtk-k5-s17", 5, "Menit ke Jam", "sedang", "30 menit jika dinyatakan dalam satuan jam adalah ...", ["1/4 jam", "1/2 jam (0,5 jam)", "3/4 jam", "1 jam"], 1, "30 : 60 = 1/2 jam.");
addQ("mtk-k5-s18", 5, "Perkalian Pecahan dengan Bilangan Bulat", "sedang", "Berapa hasil dari 3/5 × 15?", ["6", "9", "12", "15"], 1, "(3 × 15) : 5 = 45 : 5 = 9.");
addQ("mtk-k5-s19", 5, "Penjumlahan Pecahan Campuran", "sedang", "Berapa hasil dari 2 1/2 + 1 1/4?", ["3 2/6", "3 3/4", "3 1/4", "4 1/4"], 1, "(2 + 1) + (2/4 + 1/4) = 3 3/4.");
addQ("mtk-k5-s20", 5, "Pengurangan Pecahan Campuran", "sedang", "Berapa hasil dari 3 1/2 - 1 3/4?", ["1 1/4", "1 2/4", "1 3/4", "2 1/4"], 2, "3 2/4 - 1 3/4 = 2 6/4 - 1 3/4 = 1 3/4.");

addQ("mtk-k5-u01", 5, "Soal Waktu Berpapasan", "sulit", "Jarak kota P dan Q 150 km. Mobil A berangkat dari P ke Q dengan kecepatan 40 km/jam. Mobil B berangkat dari Q ke P dengan kecepatan 60 km/jam bersamaan. Kapan mereka berpapasan?", ["1 jam", "1,5 jam (90 menit)", "2 jam", "2,5 jam"], 1, "Waktu = Jarak : (K1 + K2) = 150 : (40 + 60) = 150 : 100 = 1,5 jam.");
addQ("mtk-k5-u02", 5, "Soal Waktu Menyusul", "sulit", "Budi bersepeda kecepatan 10 km/jam. 1 jam kemudian Ayah menyusul dengan motor kecepatan 30 km/jam. Berapa lama Ayah menyusul Budi?", ["20 menit", "30 menit (0,5 jam)", "45 menit", "1 jam"], 1, "Selisih jarak = 10 km. Selisih kecepatan = 30 - 10 = 20 km/jam. Waktu = 10 : 20 = 0,5 jam (30 menit).");
addQ("mtk-k5-u03", 5, "Volume Bak dalam Liter", "sulit", "Bak mandi berbentuk balok berukuran 100 cm × 80 cm × 50 cm. Berapakah kapasitas volume bak mandi dalam liter?", ["300 liter", "400 liter", "500 liter", "600 liter"], 1, "Volume = 100 × 80 × 50 = 400.000 cm³ = 400 dm³ = 400 liter.");
addQ("mtk-k5-u04", 5, "Waktu Pengisian Bak Mandi", "sulit", "Sebuah bak berkapasitas 400 liter diisi kran berdebit 20 liter/menit dari keadaan kosong. Berapa menit waktu yang dibutuhkan hingga penuh?", ["15 menit", "20 menit", "25 menit", "30 menit"], 1, "Waktu = 400 : 20 = 20 menit.");
addQ("mtk-k5-u05", 5, "Sisa Air Pengisian Bak", "sulit", "Bak mandi berkapasitas total 200 liter terisi 3/4 bagian. Berapa liter air lagi yang harus ditambahkan agar terisi penuh?", ["25 liter", "50 liter", "75 liter", "100 liter"], 1, "Bagian kosong = 1 - 3/4 = 1/4 bagian. 1/4 × 200 liter = 50 liter.");
addQ("mtk-k5-u06", 5, "Volume Prisma Segitiga", "sulit", "Prisma segitiga memiliki alas segitiga (alas 6 cm, tinggi 8 cm) dan tinggi prisma 10 cm. Volume prisma tersebut adalah ...", ["120 cm³", "240 cm³", "360 cm³", "480 cm³"], 1, "Volume = Luas alas × tinggi prisma = (1/2 × 6 × 8) × 10 = 24 × 10 = 240 cm³.");
addQ("mtk-k5-u07", 5, "Volume Tabung", "sulit", "Sebuah tabung memiliki jari-jari alas r = 7 cm dan tinggi t = 10 cm (π = 22/7). Volume tabung tersebut adalah ...", ["770 cm³", "1.540 cm³", "2.200 cm³", "3.080 cm³"], 1, "Volume = π × r² × t = 22/7 × 49 × 10 = 154 × 10 = 1.540 cm³.");
addQ("mtk-k5-u08", 5, "Luas Permukaan Kubus", "sulit", "Sebuah kubus memiliki panjang rusuk 6 cm. Luas permukaan seluruh sisi kubus tersebut adalah ...", ["144 cm²", "180 cm²", "216 cm²", "256 cm²"], 2, "Luas permukaan = 6 × s² = 6 × 36 = 216 cm².");
addQ("mtk-k5-u09", 5, "Luas Permukaan Balok", "sulit", "Balok berukuran panjang 8 cm, lebar 5 cm, dan tinggi 3 cm. Luas permukaan balok tersebut adalah ...", ["79 cm²", "148 cm²", "158 cm²", "168 cm²"], 2, "L = 2 × (p·l + p·t + l·t) = 2 × (40 + 24 + 15) = 2 × 79 = 158 cm².");
addQ("mtk-k5-u10", 5, "Perbandingan Bertingkat Tiga Orang", "sulit", "Perbandingan uang A : B = 2 : 3, dan B : C = 4 : 5. Perbandingan uang A : B : C adalah ...", ["6 : 9 : 12", "8 : 12 : 15", "6 : 12 : 15", "8 : 10 : 15"], 1, "A = 2×4 = 8, B = 3×4 = 12, C = 3×5 = 15, perbandingan = 8 : 12 : 15.");
addQ("mtk-k5-u11", 5, "Selisih Uang Perbandingan", "sulit", "Jumlah uang Ali dan Budi adalah Rp50.000 dengan perbandingan 2 : 3. Berapakah selisih uang mereka?", ["Rp5.000", "Rp10.000", "Rp15.000", "Rp20.000"], 1, "Selisih perbandingan = 3 - 2 = 1. Total rasio = 5. Selisih = (1/5) × 50.000 = Rp10.000.");
addQ("mtk-k5-u12", 5, "Luas Sebenarnya Denah Skala", "sulit", "Denah rumah berskala 1 : 200. Sebuah kamar tidur berukuran 2 cm × 2 cm pada denah. Berapakah luas sebenarnya kamar tidur itu?", ["8 m²", "12 m²", "16 m²", "20 m²"], 2, "Sisi sebenarnya = 2 cm × 200 = 400 cm = 4 meter. Luas = 4 m × 4 m = 16 m².");
addQ("mtk-k5-u13", 5, "Diagram Lingkaran Persen", "sulit", "Diagram lingkaran: Dari 40 siswa, 50% menyukai sepak bola, 25% bulu tangkis, dan 25% renang. Berapa anak yang menyukai bulu tangkis?", ["8 anak", "10 anak", "12 anak", "15 anak"], 1, "25% × 40 = 1/4 × 40 = 10 anak.");
addQ("mtk-k5-u14", 5, "Diagram Lingkaran Derajat Persen", "sulit", "Pada diagram lingkaran, sebuah juring ekstrakurikuler musik memiliki sudut pusat 90°. Berapakah persentase bagian musik?", ["15%", "20%", "25%", "30%"], 2, "(90° : 360°) × 100% = 1/4 × 100% = 25%.");
addQ("mtk-k5-u15", 5, "Diagram Lingkaran Derajat Populasi", "sulit", "Dari total 60 penduduk, mata pencaharian petani ditunjukkan oleh sudut 120°. Berapakah jumlah penduduk yang menjadi petani?", ["15 orang", "20 orang", "25 orang", "30 orang"], 1, "(120° : 360°) × 60 = 1/3 × 60 = 20 orang.");
addQ("mtk-k5-u16", 5, "Konversi km/jam ke m/s", "sulit", "Kecepatan mobil 72 km/jam jika diubah ke satuan meter per detik (m/s) adalah ...", ["15 m/s", "20 m/s", "25 m/s", "30 m/s"], 1, "72 km/jam = 72.000 m : 3.600 detik = 20 m/s.");
addQ("mtk-k5-u17", 5, "Konversi m/s ke km/jam", "sulit", "Kecepatan 15 m/s jika diubah ke satuan kilometer per jam (km/jam) adalah ...", ["45 km/jam", "50 km/jam", "54 km/jam", "60 km/jam"], 2, "15 × 3,6 = 54 km/jam.");
addQ("mtk-k5-u18", 5, "Konversi Debit Menit ke Detik", "sulit", "Debit air 120 liter/menit setara dengan berapa liter per detik?", ["1 liter/detik", "2 liter/detik", "3 liter/detik", "4 liter/detik"], 1, "120 liter : 60 detik = 2 liter/detik.");
addQ("mtk-k5-u19", 5, "Konversi m³/jam ke Liter/jam", "sulit", "Debit pompa air 3 m³/jam sama dengan berapa liter per jam?", ["30 liter/jam", "300 liter/jam", "3.000 liter/jam", "30.000 liter/jam"], 2, "3 m³ = 3 × 1.000 = 3.000 liter/jam.");
addQ("mtk-k5-u20", 5, "Operasi Pecahan Bertingkat", "sulit", "Berapakah hasil dari 3/4 × 2/3 : 1/2?", ["1/2", "3/4", "1", "1 1/2"], 2, "(3/4 × 2/3) = 6/12 = 1/2. Lalu 1/2 : 1/2 = 1.");
addQ("mtk-k5-u21", 5, "Soal Cerita Bagian Tanah", "sulit", "Petani memiliki tanah seluas 1.200 m². 1/3 bagian ditanami jagung, 1/4 bagian ditanami cabai, dan sisanya kolam ikan. Berapa m² luas kolam ikan?", ["400 m²", "450 m²", "500 m²", "550 m²"], 2, "Jagung = 400 m², Cabai = 300 m². Total = 700 m². Kolam = 1.200 - 700 = 500 m².");
addQ("mtk-k5-u22", 5, "Soal Cerita Sisa Uang Belanja", "sulit", "Doni memiliki uang Rp60.000. Sebanyak 1/3 dibelikan buku dan 1/4 ditabung. Berapakah sisa uang saku Doni?", ["Rp20.000", "Rp25.000", "Rp30.000", "Rp35.000"], 1, "Buku = Rp20.000, Tabungan = Rp15.000. Total pengeluaran = Rp35.000. Sisa = 60.000 - 35.000 = Rp25.000.");
addQ("mtk-k5-u23", 5, "Analisis Jaring-jaring Kubus", "sulit", "Jika 6 buah persegi disusun berderet dalam satu garis lurus memanjang, apakah susunan tersebut dapat dilipat membentuk kubus?", ["Dapat membentuk kubus", "Tidak dapat membentuk kubus", "Membentuk balok", "Membentuk prisma"], 1, "Susunan lurus 6 persegi tidak memiliki penutup samping atas-bawah.");
addQ("mtk-k5-u24", 5, "Mencari Tinggi Balok", "sulit", "Balok memiliki volume 480 cm³. Jika panjangnya 10 cm dan lebarnya 8 cm, berapakah tinggi balok tersebut?", ["5 cm", "6 cm", "7 cm", "8 cm"], 1, "Tinggi = Volume : (p × l) = 480 : 80 = 6 cm.");
addQ("mtk-k5-u25", 5, "Mencari Rusuk dari Volume Kubus", "sulit", "Sebuah kubus memiliki volume 343 cm³. Berapakah panjang rusuk kubus tersebut?", ["6 cm", "7 cm", "8 cm", "9 cm"], 1, "Panjang rusuk = ∛343 = 7 cm (karena 7 × 7 × 7 = 343).");
addQ("mtk-k5-u26", 5, "Mencari Rusuk Kubus 729", "sulit", "Sebuah kubus memiliki volume 729 cm³. Berapakah panjang rusuk kubus tersebut?", ["7 cm", "8 cm", "9 cm", "11 cm"], 2, "Panjang rusuk = ∛729 = 9 cm (karena 9 × 9 × 9 = 729).");
addQ("mtk-k5-u27", 5, "Air Bocor per Detik", "sulit", "Sebuah kran bocor meneteskan air 20 ml per detik. Berapa liter air yang terbuang selama 5 menit?", ["4 liter", "5 liter", "6 liter", "8 liter"], 2, "5 menit = 300 detik. Air = 20 ml × 300 = 6.000 ml = 6 liter.");
addQ("mtk-k5-u28", 5, "Perbandingan Selisih Umur", "sulit", "Perbandingan umur Kakek dan Cucu adalah 8 : 1. Selisih umur mereka 56 tahun. Berapakah umur cucu?", ["6 tahun", "7 tahun", "8 tahun", "9 tahun"], 2, "Selisih rasio = 8 - 1 = 7. Umur cucu = (1/7) × 56 = 8 tahun.");
addQ("mtk-k5-u29", 5, "Jarak Tempuh Kereta Api", "sulit", "Kereta api berangkat pukul 06.30 dan tiba di tujuan pukul 10.00 dengan kecepatan rata-rata 80 km/jam. Jarak yang ditempuh adalah ...", ["240 km", "280 km", "300 km", "320 km"], 1, "Waktu tempuh = 3,5 jam. Jarak = 80 × 3,5 = 280 km.");
addQ("mtk-k5-u30", 5, "Kenaikan Penjualan Diagram", "sulit", "Diagram penjualan: Januari 40 buku, Februari 50 buku, Maret 60 buku, April 70 buku. Berapakah kenaikan penjualan dari Januari ke April?", ["20 buku", "25 buku", "30 buku", "35 buku"], 2, "Kenaikan = 70 - 40 = 30 buku.");

console.log("Kelas 5 Matematika ready: " + allQuestions.length + " questions.");

addQ("mtk-k6-m01", 6, "Penjumlahan Bilangan Bulat", "mudah", "Berapa hasil perhitungan dari -8 + 15?", ["-23", "-7", "7", "23"], 2, "-8 + 15 = 7.");
addQ("mtk-k6-m02", 6, "Penjumlahan Dua Bilangan Negatif", "mudah", "Berapa hasil perhitungan dari -12 + (-8)?", ["-20", "-4", "4", "20"], 0, "-12 + (-8) = -20.");
addQ("mtk-k6-m03", 6, "Pengurangan dengan Negatif", "mudah", "Berapa hasil perhitungan dari 10 - (-5)?", ["5", "-5", "15", "-15"], 2, "10 - (-5) = 10 + 5 = 15.");
addQ("mtk-k6-m04", 6, "Pengurangan Dua Negatif", "mudah", "Berapa hasil perhitungan dari -7 - 8?", ["-1", "1", "-15", "15"], 2, "-7 - 8 = -15.");
addQ("mtk-k6-m05", 6, "Perkalian Bilangan Negatif", "mudah", "Berapa hasil perkalian dari -6 × 7?", ["-42", "42", "-13", "13"], 0, "Negatif dikali positif menghasilkan negatif: -6 × 7 = -42.");
addQ("mtk-k6-m06", 6, "Pembagian Dua Negatif", "mudah", "Berapa hasil pembagian dari -36 : (-4)?", ["-9", "9", "-8", "8"], 1, "Negatif dibagi negatif menghasilkan bilangan positif: -36 : (-4) = 9.");
addQ("mtk-k6-m07", 6, "Bagian Lingkaran Jari-jari", "mudah", "Garis lurus yang menghubungkan titik pusat lingkaran dengan sisi lengkung lingkaran disebut ...", ["Diameter", "Jari-jari (r)", "Tali busur", "Apotema"], 1, "Jari-jari (r) adalah garis dari titik pusat ke tepi lingkaran.");
addQ("mtk-k6-m08", 6, "Bagian Lingkaran Diameter", "mudah", "Garis lurus yang menghubungkan dua titik pada lengkung lingkaran melalui titik pusat disebut ...", ["Jari-jari", "Diameter (d)", "Busur", "Juring"], 1, "Diameter (d) adalah garis tengah lingkaran.");
addQ("mtk-k6-m09", 6, "Hubungan Diameter dan Jari-jari", "mudah", "Hubungan matematis yang benar antara diameter (d) dan jari-jari (r) adalah ...", ["d = r : 2", "d = 2 × r", "d = r + 2", "d = r²"], 1, "Panjang diameter selalu dua kali panjang jari-jari (d = 2 × r).");
addQ("mtk-k6-m10", 6, "Nilai Konstanta Pi", "mudah", "Nilai pendekatan untuk konstanta perbandingan keliling lingkaran π (pi) adalah ...", ["22/7 atau 3,14", "21/7 atau 3,12", "24/7 atau 3,16", "20/7 atau 3,10"], 0, "Nilai π umumnya didekati dengan 22/7 atau 3,14.");

addQ("mtk-k6-s01", 6, "Keliling Lingkaran r=7", "sedang", "Jari-jari lingkaran r = 7 cm (π = 22/7). Berapakah keliling lingkaran tersebut?", ["22 cm", "44 cm", "88 cm", "154 cm"], 1, "Keliling = 2 × π × r = 2 × 22/7 × 7 = 44 cm.");
addQ("mtk-k6-s02", 6, "Keliling Lingkaran r=14", "sedang", "Jari-jari lingkaran r = 14 cm (π = 22/7). Berapakah keliling lingkaran tersebut?", ["44 cm", "66 cm", "88 cm", "132 cm"], 2, "Keliling = 2 × 22/7 × 14 = 88 cm.");
addQ("mtk-k6-s03", 6, "Luas Lingkaran r=7", "sedang", "Jari-jari lingkaran r = 7 cm (π = 22/7). Berapakah luas daerah lingkaran tersebut?", ["44 cm²", "154 cm²", "308 cm²", "616 cm²"], 1, "Luas = π × r² = 22/7 × 7 × 7 = 154 cm².");
addQ("mtk-k6-s04", 6, "Luas Lingkaran r=10", "sedang", "Jari-jari lingkaran r = 10 cm (π = 3,14). Berapakah luas daerah lingkaran tersebut?", ["31,4 cm²", "62,8 cm²", "314 cm²", "628 cm²"], 2, "Luas = 3,14 × 10 × 10 = 314 cm².");
addQ("mtk-k6-s05", 6, "Keliling Lingkaran d=20", "sedang", "Sebuah lingkaran berdiameter 20 cm (π = 3,14). Berapakah keliling lingkaran tersebut?", ["31,4 cm", "62,8 cm", "125,6 cm", "314 cm"], 1, "Keliling = π × d = 3,14 × 20 = 62,8 cm.");
addQ("mtk-k6-s06", 6, "Sifat Bangun Kerucut", "sedang", "Bangun ruang yang memiliki satu sisi alas lingkaran dan satu titik puncak adalah ...", ["Tabung", "Kerucut", "Bola", "Limas segitiga"], 1, "Kerucut memiliki alas lingkaran dan satu titik puncak runcing.");
addQ("mtk-k6-s07", 6, "Sifat Bangun Bola", "sedang", "Bangun ruang yang dibatasi oleh satu bidang lengkung tanpa rusuk dan tanpa titik sudut adalah ...", ["Kerucut", "Tabung", "Bola", "Prisma"], 2, "Bola hanya tersusun dari satu sisi lengkung bola.");
addQ("mtk-k6-s08", 6, "Rumus Volume Kerucut", "sedang", "Rumus matematis untuk mencari volume kerucut adalah ...", ["π × r² × t", "1/3 × π × r² × t", "4/3 × π × r³", "1/2 × a × t"], 1, "Volume kerucut = 1/3 × π × r² × t.");
addQ("mtk-k6-s09", 6, "Rumus Volume Bola", "sedang", "Rumus matematis untuk mencari volume bangun ruang bola adalah ...", ["4/3 × π × r³", "4 × π × r²", "2/3 × π × r³", "1/3 × π × r²"], 0, "Volume bola = 4/3 × π × r³.");
addQ("mtk-k6-s10", 6, "Rumus Volume Limas", "sedang", "Rumus matematis untuk mencari volume limas segi empat adalah ...", ["luas alas × tinggi", "1/3 × luas alas × tinggi", "1/2 × luas alas × tinggi", "4 × sisi"], 1, "Volume limas = 1/3 × Luas alas × tinggi.");
addQ("mtk-k6-s11", 6, "Mean Nilai Matematika", "sedang", "Data nilai ulangan matematika 5 siswa: 7, 8, 6, 9, 10. Berapakah nilai rata-rata (mean)?", ["7", "8", "8,5", "9"], 1, "Mean = (7 + 8 + 6 + 9 + 10) : 5 = 40 : 5 = 8.");
addQ("mtk-k6-s12", 6, "Definisi Median", "sedang", "Nilai yang terletak tepat di tengah-tengah setelah sekumpulan data diurutkan disebut ...", ["Mean", "Median", "Modus", "Kuartil"], 1, "Median adalah nilai tengah data terurut.");
addQ("mtk-k6-s13", 6, "Definisi Modus", "sedang", "Nilai atau data yang paling sering muncul (frekuensi terbanyak) dinamakan ...", ["Mean", "Median", "Modus", "Rata-rata"], 2, "Modus adalah nilai dengan frekuensi pemunculan terbanyak.");
addQ("mtk-k6-s14", 6, "Mencari Modus Berat Badan", "sedang", "Data berat badan (kg): 30, 32, 35, 32, 34, 32, 36. Modus dari data berat badan tersebut adalah ...", ["30 kg", "32 kg", "34 kg", "35 kg"], 1, "Angka 32 muncul paling banyak (3 kali).");
addQ("mtk-k6-s15", 6, "Mencari Median Data Ganjil", "sedang", "Data nilai terurut: 5, 6, 7, 8, 9. Median dari data tersebut adalah angka ...", ["6", "7", "8", "9"], 1, "Data ke-3 di tengah adalah 7.");
addQ("mtk-k6-s16", 6, "Mencari Median Data Genap", "sedang", "Data nilai terurut: 6, 7, 8, 9. Median dari kumpulan data tersebut adalah ...", ["7", "7,5", "8", "8,5"], 1, "Median genap = (7 + 8) : 2 = 15 : 2 = 7,5.");
addQ("mtk-k6-s17", 6, "Suhu Udara Es", "sedang", "Suhu es batu mula-mula adalah -5°C. Setelah dipanaskan, suhunya naik 12°C. Berapakah suhu sekarang?", ["-17°C", "-7°C", "7°C", "17°C"], 2, "-5 + 12 = 7°C.");
addQ("mtk-k6-s18", 6, "Kedalaman Penyelam", "sedang", "Penyelam berada di kedalaman 15 meter di bawah laut (-15 m). Kemudian naik 6 meter. Posisi penyelam sekarang adalah ...", ["-21 meter", "-9 meter", "9 meter", "21 meter"], 1, "-15 + 6 = -9 meter (9 meter di bawah permukaan laut).");
addQ("mtk-k6-s19", 6, "Operasi Campuran Negatif", "sedang", "Berapa hasil dari -15 + 8 × (-2)?", ["-31", "-46", "1", "46"], 0, "Perkalian dulu: 8 × (-2) = -16. Maka -15 + (-16) = -31.");
addQ("mtk-k6-s20", 6, "Operasi Campuran Kurung Negatif", "sedang", "Berapa hasil dari (20 - (-10)) : 6?", ["-5", "5", "6", "10"], 1, "Dalam kurung: 20 - (-10) = 20 + 10 = 30. Lalu 30 : 6 = 5.");

addQ("mtk-k6-u01", 6, "Operasi Campuran Kompleks Tanda", "sulit", "Berapakah hasil dari -24 : (-4) + 6 × (-3) - (-10)?", ["-4", "-2", "2", "4"], 1, "-24:(-4)=6; 6×(-3)=-18; maka 6 + (-18) - (-10) = -12 + 10 = -2.");
addQ("mtk-k6-u02", 6, "Operasi Campuran Kompleks Berurutan", "sulit", "Berapakah hasil dari 50 - (-25) × 2 + (-30) : 5?", ["84", "94", "104", "114"], 1, "(-25)×2 = -50; (-30):5 = -6. Maka 50 - (-50) + (-6) = 100 - 6 = 94.");
addQ("mtk-k6-u03", 6, "Keliling Setengah Lingkaran Tertutup", "sulit", "Sebuah bangun setengah lingkaran tertutup memiliki jari-jari r = 7 cm (π = 22/7). Keliling totalnya adalah ...", ["22 cm", "36 cm", "44 cm", "58 cm"], 1, "Panjang busur = 1/2 × 44 = 22 cm. Diameter = 2 × 7 = 14 cm. Keliling total = 22 + 14 = 36 cm.");
addQ("mtk-k6-u04", 6, "Luas Setengah Lingkaran", "sulit", "Berapakah luas bangun setengah lingkaran dengan jari-jari r = 7 cm (π = 22/7)?", ["38,5 cm²", "77 cm²", "154 cm²", "308 cm²"], 1, "Luas = 1/2 × (22/7 × 7 × 7) = 1/2 × 154 = 77 cm².");
addQ("mtk-k6-u05", 6, "Luas Juring 90 Derajat", "sulit", "Luas juring lingkaran yang memiliki sudut pusat 90° dan jari-jari r = 14 cm (π = 22/7) adalah ...", ["77 cm²", "154 cm²", "308 cm²", "616 cm²"], 1, "Luas lingkaran = 22/7 × 14 × 14 = 616 cm². Juring 90° = (90/360) × 616 = 1/4 × 616 = 154 cm².");
addQ("mtk-k6-u06", 6, "Luas Tembereng", "sulit", "Sebuah juring 90° berluas 154 cm² memuat segitiga siku-siku dengan luas 98 cm². Berapakah luas daerah tembereng?", ["48 cm²", "56 cm²", "64 cm²", "72 cm²"], 1, "Luas tembereng = Luas juring - Luas segitiga = 154 - 98 = 56 cm².");
addQ("mtk-k6-u07", 6, "Putaran Roda Sepeda", "sulit", "Roda sepeda berdiameter 70 cm (keliling = 220 cm) berputar sebanyak 100 kali. Berapa meter jarak yang ditempuh sepeda?", ["110 meter", "220 meter", "440 meter", "2.200 meter"], 1, "Jarak = 100 × 220 cm = 22.000 cm = 220 meter.");
addQ("mtk-k6-u08", 6, "Kawat Pagar Lingkaran 3 Lilitan", "sulit", "Taman berbentuk lingkaran berdiameter 14 meter (keliling = 44 m) akan dipagari kawat sebanyak 3 lilitan. Panjang kawat yang dibutuhkan adalah ...", ["88 meter", "132 meter", "154 meter", "176 meter"], 1, "Panjang kawat = 3 × 44 meter = 132 meter.");
addQ("mtk-k6-u09", 6, "Volume Kerucut", "sulit", "Sebuah kerucut memiliki jari-jari alas r = 7 cm dan tinggi t = 12 cm (π = 22/7). Volume kerucut tersebut adalah ...", ["308 cm³", "616 cm³", "924 cm³", "1.232 cm³"], 1, "Volume = 1/3 × (22/7 × 49) × 12 = 1/3 × 154 × 12 = 154 × 4 = 616 cm³.");
addQ("mtk-k6-u10", 6, "Volume Limas Segi Empat", "sulit", "Limas dengan alas persegi memiliki sisi alas 10 cm dan tinggi limas 15 cm. Volume limas tersebut adalah ...", ["250 cm³", "500 cm³", "750 cm³", "1.500 cm³"], 1, "Volume = 1/3 × (10 × 10) × 15 = 1/3 × 100 × 15 = 500 cm³.");
addQ("mtk-k6-u11", 6, "Sisa Volume Balok dan Kubus", "sulit", "Sebuah kubus bersisi 6 cm dimasukkan ke dalam kotak balok berukuran 12 cm × 10 cm × 8 cm. Berapa cm³ sisa ruang balok di luar kubus?", ["644 cm³", "744 cm³", "844 cm³", "944 cm³"], 1, "Volume balok = 960 cm³. Volume kubus = 216 cm³. Sisa = 960 - 216 = 744 cm³.");
addQ("mtk-k6-u12", 6, "Luas Permukaan Tabung Tanpa Tutup", "sulit", "Sebuah kaleng tabung tanpa tutup memiliki r = 7 cm dan t = 10 cm. Luas permukaan kaleng tersebut adalah ...", ["440 cm²", "594 cm²", "748 cm²", "880 cm²"], 1, "Luas alas = 154 cm². Luas selimut = 2 × 22/7 × 7 × 10 = 440 cm². Total = 154 + 440 = 594 cm².");
addQ("mtk-k6-u13", 6, "Luas Permukaan Bola", "sulit", "Luas permukaan bola berjari-jari r = 7 cm dengan rumus L = 4 × π × r² (π = 22/7) adalah ...", ["308 cm²", "616 cm²", "1.232 cm²", "1.540 cm²"], 1, "L = 4 × (22/7 × 49) = 4 × 154 = 616 cm².");
addQ("mtk-k6-u14", 6, "Mencari Nilai Tambahan Rata-rata", "sulit", "Rata-rata nilai 4 siswa adalah 80. Jika digabung dengan nilai siswa ke-5, nilai rata-ratanya menjadi 82. Berapakah nilai siswa ke-5?", ["86", "88", "90", "92"], 2, "Total nilai 4 anak = 320. Total nilai 5 anak = 5 × 82 = 410. Nilai anak ke-5 = 410 - 320 = 90.");
addQ("mtk-k6-u15", 6, "Target Rata-rata Ulangan", "sulit", "Nilai 4 ulangan Doni adalah 75, 80, 85, dan 80. Berapakah nilai yang harus didapat Doni pada ulangan ke-5 agar rata-ratanya menjadi 82?", ["85", "88", "90", "95"], 2, "Total 4 ulangan = 320. Agar rata-rata 82 pada 5 ulangan, total harus 5 × 82 = 410. Nilai ke-5 = 410 - 320 = 90.");
addQ("mtk-k6-u16", 6, "Rata-rata Gabungan Baru", "sulit", "Rata-rata tinggi 5 siswa adalah 150 cm (total 750 cm). Masuk 1 siswa baru bertinggi 180 cm. Berapakah rata-rata tinggi 6 siswa sekarang?", ["153 cm", "155 cm", "158 cm", "160 cm"], 1, "Total baru = 750 + 180 = 930 cm. Rata-rata = 930 : 6 = 155 cm.");
addQ("mtk-k6-u17", 6, "Total Siswa Tabel Frekuensi", "sulit", "Tabel nilai: Nilai 6 (2 anak), Nilai 7 (4 anak), Nilai 8 (6 anak), Nilai 9 (5 anak), Nilai 10 (3 anak). Berapakah jumlah seluruh siswa?", ["18 anak", "20 anak", "22 anak", "25 anak"], 1, "2 + 4 + 6 + 5 + 3 = 20 anak.");
addQ("mtk-k6-u18", 6, "Median Tabel Frekuensi", "sulit", "Berdasarkan tabel frekuensi 20 siswa di atas (nilai 6=2, 7=4, 8=6, 9=5, 10=3), berapakah median data nilai tersebut?", ["7", "7,5", "8", "8,5"], 2, "Median data genap ke-10 dan ke-11. Data 1-2=6, data 3-6=7, data 7-12=8. Jadi median adalah 8.");
addQ("mtk-k6-u19", 6, "Persentase Tabel Frekuensi", "sulit", "Dari 20 siswa pada tabel di atas, berapakah persentase siswa yang memperoleh nilai 9 dan 10?", ["30%", "35%", "40%", "45%"], 2, "Siswa bernilai 9 dan 10 = 5 + 3 = 8 anak. Persentase = (8/20) × 100% = 40%.");
addQ("mtk-k6-u20", 6, "Modus Frekuensi Terbanyak", "sulit", "Modus dari tabel frekuensi nilai 20 siswa di atas adalah nilai ...", ["7", "8", "9", "10"], 1, "Nilai 8 memiliki frekuensi pemunculan terbanyak yaitu 6 anak.");
addQ("mtk-k6-u21", 6, "Kenaikan Suhu Terbesar Diagram Garis", "sulit", "Diagram suhu: 06.00 (22°C), 09.00 (26°C), 12.00 (32°C), 15.00 (30°C). Kenaikan suhu terbesar terjadi pada rentang waktu ...", ["06.00 - 09.00", "09.00 - 12.00", "12.00 - 15.00", "Semuanya sama"], 1, "Kenaikan pukul 09.00 ke 12.00 adalah 32 - 26 = 6°C (terbesar).");
addQ("mtk-k6-u22", 6, "Peluang Dadu Genap", "sulit", "Sebuah dadu bermata 6 dilempar satu kali. Berapakah peluang munculnya mata dadu bilangan genap (2, 4, 6)?", ["1/6", "2/6", "3/6 (1/2)", "4/6"], 2, "Mata dadu genap ada 3 dari total 6 mata dadu, maka peluangnya 3/6 = 1/2.");
addQ("mtk-k6-u23", 6, "Peluang Dadu Prima", "sulit", "Berapakah peluang munculnya mata dadu bilangan prima (2, 3, 5) pada pelemparan satu buah dadu?", ["1/6", "2/6", "3/6 (1/2)", "4/6"], 2, "Bilangan prima pada dadu: 2, 3, 5 (3 angka). Peluang = 3/6 = 1/2.");
addQ("mtk-k6-u24", 6, "Peluang Bola Merah", "sulit", "Dalam kantong ada 5 bola merah, 3 bola kuning, dan 2 bola hijau. Peluang terambilnya bola merah secara acak adalah ...", ["3/10", "4/10", "5/10 (1/2)", "1/5"], 2, "Total bola = 10. Bola merah = 5. Peluang = 5/10 = 1/2.");
addQ("mtk-k6-u25", 6, "Selisih Suhu AC dan Luar", "sulit", "Suhu ruangan ber-AC adalah 18°C, sedangkan suhu di luar ruangan adalah 34°C. Berapakah selisih suhu kedua tempat tersebut?", ["14°C", "16°C", "18°C", "20°C"], 1, "Selisih = 34 - 18 = 16°C.");
addQ("mtk-k6-u26", 6, "Pergerakan Kapal Selam", "sulit", "Kapal selam berada pada posisi -120 meter. Kapal tersebut menyelam lagi sejauh 50 meter, lalu naik 30 meter. Posisi kapal sekarang adalah ...", ["-140 meter", "-150 meter", "-160 meter", "-170 meter"], 0, "-120 - 50 + 30 = -170 + 30 = -140 meter.");
addQ("mtk-k6-u27", 6, "Luas Permukaan Kerucut", "sulit", "Sebuah kerucut memiliki jari-jari r = 7 cm dan garis pelukis s = 15 cm. Luas permukaan kerucut (L = π·r² + π·r·s) adalah ...", ["330 cm²", "484 cm²", "520 cm²", "616 cm²"], 1, "Luas alas = 154 cm². Luas selimut = 22/7 × 7 × 15 = 330 cm². Total = 154 + 330 = 484 cm².");
addQ("mtk-k6-u28", 6, "Luas Bak Kubus Tanpa Tutup", "sulit", "Sebuah bak air berbentuk kubus tanpa tutup memiliki panjang rusuk 1 meter. Berapakah luas permukaan bagian dalam bak mandi tersebut?", ["4 m²", "5 m²", "6 m²", "1 m²"], 1, "Kubus tanpa tutup memiliki 5 sisi persegi. Luas = 5 × (1 m × 1 m) = 5 m².");
addQ("mtk-k6-u29", 6, "Perbandingan Luas Dua Lingkaran", "sulit", "Dua buah lingkaran masing-masing memiliki jari-jari 7 cm dan 14 cm. Berapakah perbandingan luas kedua lingkaran tersebut?", ["1 : 2", "1 : 3", "1 : 4", "1 : 8"], 2, "Perbandingan luas sebanding dengan r²: 7² : 14² = 49 : 196 = 1 : 4.");
addQ("mtk-k6-u30", 6, "Perbandingan Keliling Dua Lingkaran", "sulit", "Dua buah lingkaran masing-masing memiliki jari-jari 7 cm dan 14 cm. Berapakah perbandingan keliling kedua lingkaran tersebut?", ["1 : 2", "1 : 3", "1 : 4", "2 : 3"], 0, "Perbandingan keliling sebanding dengan r: 7 : 14 = 1 : 2.");

console.log("Total questions in Matematika: " + allQuestions.length);

const code = `/**
 * Generator Soal Matematika SD Kelas 1–6 (360 Soal Unik & Berjenjang)
 * Format per kelas: 10 Mudah, 20 Sedang, 30 Sulit
 */
const matematikaQuestions = ${JSON.stringify(allQuestions, null, 2)};

module.exports = {
  matematikaQuestions
};
`;

fs.writeFileSync(path.join(genDir, 'gen_matematika.js'), code, 'utf8');
console.log("Successfully generated generators/gen_matematika.js with " + allQuestions.length + " questions!");
