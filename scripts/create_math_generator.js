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
  if (seenQuestions.has(question)) {
    throw new Error(`Duplicate question in math: "${question}"`);
  }
  seenQuestions.add(question);
  allQuestions.push(formatQuestion(id, grade, topic, difficulty, question, options, correctAnswer, explanation));
}

addQ("mtk-k1-m01", 1, "Penjumlahan", "mudah", "Berapa hasil dari 3 + 4?", ["5", "6", "7", "8"], 2, "3 + 4 = 7.");
addQ("mtk-k1-m02", 1, "Penjumlahan", "mudah", "Berapa hasil dari 5 + 2?", ["7", "6", "8", "9"], 0, "5 + 2 = 7.");
addQ("mtk-k1-m03", 1, "Penjumlahan", "mudah", "Berapa hasil dari 6 + 3?", ["8", "9", "10", "7"], 1, "6 + 3 = 9.");
addQ("mtk-k1-m04", 1, "Penjumlahan", "mudah", "Berapa hasil dari 2 + 8?", ["10", "9", "8", "11"], 0, "2 + 8 = 10.");
addQ("mtk-k1-m05", 1, "Penjumlahan", "mudah", "Berapa hasil dari 4 + 4?", ["7", "9", "8", "6"], 2, "4 + 4 = 8.");
addQ("mtk-k1-m06", 1, "Membilang Benda", "mudah", "Ada 3 pensil di meja, Doni meletakkan 2 pensil lagi. Berapa jumlah pensil sekarang?", ["4", "5", "6", "7"], 1, "3 + 2 = 5 pensil.");
addQ("mtk-k1-m07", 1, "Membilang Benda", "mudah", "Siti mempunyai 6 permen, diberi ibu 1 permen lagi. Jumlah permen Siti adalah ...", ["7", "8", "5", "6"], 0, "6 + 1 = 7 permen.");
addQ("mtk-k1-m08", 1, "Lambang Bilangan", "mudah", "Lambang bilangan dari kata 'sembilan' adalah angka ...", ["6", "7", "8", "9"], 3, "Sembilan dilambangkan dengan angka 9.");
addQ("mtk-k1-m09", 1, "Nama Bilangan", "mudah", "Nama bilangan untuk lambang angka '8' adalah ...", ["Tujuh", "Delapan", "Sembilan", "Enam"], 1, "Angka 8 dibaca delapan.");
addQ("mtk-k1-m10", 1, "Urutan Bilangan", "mudah", "Bilangan yang tepat tepat setelah angka 6 adalah angka ...", ["5", "7", "8", "9"], 1, "Setelah angka 6 adalah angka 7.");

addQ("mtk-k1-s01", 1, "Pengurangan", "sedang", "Berapa hasil dari 9 - 4?", ["4", "5", "6", "3"], 1, "9 - 4 = 5.");
addQ("mtk-k1-s02", 1, "Pengurangan", "sedang", "Berapa hasil dari 10 - 6?", ["3", "5", "4", "6"], 2, "10 - 6 = 4.");
addQ("mtk-k1-s03", 1, "Pengurangan", "sedang", "Berapa hasil dari 8 - 3?", ["5", "4", "6", "7"], 0, "8 - 3 = 5.");
addQ("mtk-k1-s04", 1, "Pengurangan", "sedang", "Berapa hasil dari 7 - 5?", ["3", "2", "4", "1"], 1, "7 - 5 = 2.");
addQ("mtk-k1-s05", 1, "Bangun Datar", "sedang", "Benda berikut yang memiliki permukaan berbentuk lingkaran adalah ...", ["Papan tulis", "Buku tulis", "Uang koin logam", "Penggaris segitiga"], 2, "Uang koin logam permukaannya berbentuk lingkaran.");
addQ("mtk-k1-s06", 1, "Bangun Datar", "sedang", "Buku gambar biasanya memiliki permukaan berbentuk ...", ["Persegi panjang", "Lingkaran", "Segitiga", "Bintang"], 0, "Buku gambar permukaannya berbentuk persegi panjang.");
addQ("mtk-k1-s07", 1, "Bangun Datar", "sedang", "Bangun datar yang memiliki 3 buah sisi lurus dan 3 titik sudut adalah ...", ["Persegi", "Segitiga", "Lingkaran", "Trapesium"], 1, "Segitiga memiliki 3 sisi dan 3 sudut.");
addQ("mtk-k1-s08", 1, "Membandingkan", "sedang", "Pernyataan perbandingan yang benar antara angka 7 dan 9 adalah ...", ["7 lebih banyak dari 9", "7 lebih sedikit dari 9", "7 sama dengan 9", "9 lebih sedikit dari 7"], 1, "7 lebih sedikit dari 9.");
addQ("mtk-k1-s09", 1, "Membandingkan", "sedang", "Di antara bilangan 12, 15, 18, dan 14, bilangan manakah yang paling besar?", ["12", "15", "18", "14"], 2, "18 adalah bilangan terbesar di antara pilihan tersebut.");
addQ("mtk-k1-s10", 1, "Membandingkan", "sedang", "Di antara bilangan 11, 9, 13, dan 16, bilangan manakah yang paling kecil?", ["11", "9", "13", "16"], 1, "9 adalah bilangan terkecil di antara pilihan tersebut.");
addQ("mtk-k1-s11", 1, "Nilai Tempat", "sedang", "Pada bilangan 14, angka 1 menempati nilai tempat ...", ["Satuan", "Puluhan", "Ratusan", "Ribuan"], 1, "Angka 1 di depan bernilai 10 (puluhan).");
addQ("mtk-k1-s12", 1, "Nilai Tempat", "sedang", "Pada bilangan 17, angka 7 menempati nilai tempat ...", ["Puluhan", "Satuan", "Ratusan", "Nol"], 1, "Angka 7 di bagian belakang bernilai 7 (satuan).");
addQ("mtk-k1-s13", 1, "Penjumlahan Belasan", "sedang", "Berapa hasil penjumlahan dari 12 + 5?", ["16", "17", "18", "19"], 1, "12 + 5 = 17.");
addQ("mtk-k1-s14", 1, "Penjumlahan Belasan", "sedang", "Berapa hasil penjumlahan dari 11 + 6?", ["18", "16", "17", "15"], 2, "11 + 6 = 17.");
addQ("mtk-k1-s15", 1, "Pengurangan Belasan", "sedang", "Berapa hasil pengurangan dari 16 - 4?", ["12", "11", "13", "14"], 0, "16 - 4 = 12.");
addQ("mtk-k1-s16", 1, "Pengurangan Belasan", "sedang", "Berapa hasil pengurangan dari 19 - 7?", ["11", "12", "13", "10"], 1, "19 - 7 = 12.");
addQ("mtk-k1-s17", 1, "Pola Bilangan", "sedang", "Lanjutan dari barisan pola bilangan 1, 3, 5, 7, ... adalah angka ...", ["8", "9", "10", "11"], 1, "Pola melompat 2 angka: 7 + 2 = 9.");
addQ("mtk-k1-s18", 1, "Pola Bilangan", "sedang", "Lanjutan dari barisan pola bilangan 2, 4, 6, 8, ... adalah angka ...", ["9", "10", "11", "12"], 1, "Pola bilangan genap melompat 2 angka: 8 + 2 = 10.");
addQ("mtk-k1-s19", 1, "Soal Cerita", "sedang", "Rani mempunyai 8 apel, kemudian dimakan adik 3 apel. Berapa sisa apel Rani sekarang?", ["4 apel", "5 apel", "6 apel", "7 apel"], 1, "8 - 3 = 5 apel tersisa.");
addQ("mtk-k1-s20", 1, "Soal Cerita", "sedang", "Budi memiliki 10 kelereng. Budi memberikan 4 kelereng kepada temannya. Berapa sisa kelereng Budi?", ["6 butir", "5 butir", "7 butir", "8 butir"], 0, "10 - 4 = 6 kelereng.");

addQ("mtk-k1-u01", 1, "Soal Cerita 2 Tahap", "sulit", "Doni punya 7 permen. Ayah memberi 5 permen lagi. Lalu Doni memakan 2 permen. Berapa sisa permen Doni sekarang?", ["9", "10", "11", "12"], 1, "7 + 5 = 12, lalu 12 - 2 = 10 permen.");
addQ("mtk-k1-u02", 1, "Soal Cerita 2 Tahap", "sulit", "Di pohon ada 9 burung. Terbang datang 4 burung lagi, lalu terbang pergi 3 burung. Berapa burung di pohon sekarang?", ["10", "9", "11", "8"], 0, "9 + 4 = 13, lalu 13 - 3 = 10 burung.");
addQ("mtk-k1-u03", 1, "Soal Cerita 2 Tahap", "sulit", "Lani membeli 15 telur ayam. Di jalan pecah 3 butir. Di rumah digoreng 2 butir. Berapa butir telur yang masih utuh?", ["9 butir", "10 butir", "11 butir", "12 butir"], 1, "15 - 3 = 12, lalu 12 - 2 = 10 butir.");
addQ("mtk-k1-u04", 1, "Waktu Jam", "sulit", "Jarum pendek menunjuk angka 7 dan jarum panjang tepat menunjuk angka 12. Jam tersebut menunjukkan pukul ...", ["Pukul 12.00", "Pukul 07.00", "Pukul 07.12", "Pukul 05.00"], 1, "Jarum pendek di 7 dan jarum panjang di 12 adalah pukul 07.00.");
addQ("mtk-k1-u05", 1, "Waktu Jam", "sulit", "Jika waktu saat ini menunjukkan pukul 08.00, maka 2 jam kemudian adalah pukul ...", ["09.00", "10.00", "11.00", "12.00"], 1, "8 + 2 = pukul 10.00.");
addQ("mtk-k1-u06", 1, "Bangun Ruang", "sulit", "Benda di bawah ini yang bentuknya menyerupai bola adalah ...", ["Kotak kado", "Kaleng susu", "Bola sepak", "Topi ulang tahun"], 2, "Bola sepak berbentuk bangun ruang bola.");
addQ("mtk-k1-u07", 1, "Bangun Ruang", "sulit", "Kaleng susu kental manis memiliki bentuk bangun ruang yang disebut ...", ["Tabung", "Kubus", "Balok", "Kerucut"], 0, "Kaleng susu memiliki sisi alas dan tutup lingkaran (tabung).");
addQ("mtk-k1-u08", 1, "Bangun Ruang", "sulit", "Kotak dadu permainan ular tangga memiliki bentuk bangun ruang ...", ["Kubus", "Balok", "Tabung", "Bola"], 0, "Dadu memiliki 6 permukaan persegi yang sama, yaitu kubus.");
addQ("mtk-k1-u09", 1, "Satuan Tidak Baku", "sulit", "Mengukur panjang meja menggunakan rentangan jari tangan dari ibu jari ke kelingking disebut ...", ["Depa", "Jengkal", "Langkah", "Hasta"], 1, "Rentangan ujung ibu jari ke kelingking disebut jengkal.");
addQ("mtk-k1-u10", 1, "Satuan Tidak Baku", "sulit", "Mengukur panjang ruangan kelas paling tepat menggunakan satuan tidak baku ...", ["Jengkal", "Langkah kaki", "Korek api", "Koin"], 1, "Langkah kaki cocok untuk mengukur jarak lantai yang panjang.");
addQ("mtk-k1-u11", 1, "Urutan Bilangan", "sulit", "Urutan bilangan 15, 11, 18, 13 dari yang TERKECIL ke terbesar adalah ...", ["11, 13, 15, 18", "18, 15, 13, 11", "11, 15, 13, 18", "13, 11, 15, 18"], 0, "Urutan dari nilai paling kecil: 11, 13, 15, 18.");
addQ("mtk-k1-u12", 1, "Urutan Bilangan", "sulit", "Urutan bilangan 14, 20, 16, 12 dari yang TERBESAR ke terkecil adalah ...", ["20, 16, 14, 12", "12, 14, 16, 20", "20, 14, 16, 12", "16, 20, 14, 12"], 0, "Urutan dari nilai paling besar: 20, 16, 14, 12.");
addQ("mtk-k1-u13", 1, "Penjumlahan Tiga Angka", "sulit", "Berapa hasil perhitungan dari 3 + 4 + 5?", ["11", "12", "13", "14"], 1, "3 + 4 = 7, lalu 7 + 5 = 12.");
addQ("mtk-k1-u14", 1, "Penjumlahan Tiga Angka", "sulit", "Berapa hasil perhitungan dari 6 + 2 + 7?", ["14", "15", "16", "13"], 1, "6 + 2 = 8, lalu 8 + 7 = 15.");
addQ("mtk-k1-u15", 1, "Operasi Campuran", "sulit", "Berapa hasil perhitungan dari 14 - 4 + 6?", ["14", "15", "16", "17"], 2, "14 - 4 = 10, lalu 10 + 6 = 16.");
addQ("mtk-k1-u16", 1, "Operasi Campuran", "sulit", "Berapa hasil perhitungan dari 18 - 8 - 3?", ["6", "7", "8", "9"], 1, "18 - 8 = 10, lalu 10 - 3 = 7.");
addQ("mtk-k1-u17", 1, "Pola Mundur", "sulit", "Perhatikan pola bilangan mundur: 20, 18, 16, 14, ... Bilangan selanjutnya adalah angka ...", ["13", "12", "11", "10"], 1, "Pola berkurang 2: 14 - 2 = 12.");
addQ("mtk-k1-u18", 1, "Pola Loncat Tiga", "sulit", "Perhatikan pola loncat: 3, 6, 9, 12, ... Bilangan selanjutnya adalah angka ...", ["14", "15", "16", "17"], 1, "Pola bertambah 3: 12 + 3 = 15.");
addQ("mtk-k1-u19", 1, "Teka-teki Angka", "sulit", "Aku adalah bilangan antara 13 dan 15. Jika aku ditambah 4, maka hasilnya menjadi ...", ["17", "18", "19", "20"], 1, "Bilangan di antara 13 dan 15 adalah 14. Maka 14 + 4 = 18.");
addQ("mtk-k1-u20", 1, "Teka-teki Angka", "sulit", "Sebuah bilangan jika dikurangi 5 hasilnya adalah 10. Bilangan berapakah itu?", ["12", "14", "15", "16"], 2, "10 + 5 = 15.");
addQ("mtk-k1-u21", 1, "Selisih Benda", "sulit", "Di piring A ada 12 pisang. Di piring B ada 7 pisang. Berapa selisih banyaknya pisang piring A dan B?", ["4 buah", "5 buah", "6 buah", "7 buah"], 1, "Selisih = 12 - 7 = 5 buah.");
addQ("mtk-k1-u22", 1, "Selisih Benda", "sulit", "Kelereng Budi ada 16 butir, kelereng Iwan ada 9 butir. Berapa butir kelereng Budi lebih banyak dari Iwan?", ["6 butir", "7 butir", "8 butir", "9 butir"], 1, "16 - 9 = 7 butir kelereng.");
addQ("mtk-k1-u23", 1, "Penjumlahan Menyimpan", "sulit", "Berapa hasil dari 8 + 7?", ["13", "14", "15", "16"], 2, "8 + 7 = 15.");
addQ("mtk-k1-u24", 1, "Penjumlahan Menyimpan", "sulit", "Berapa hasil dari 9 + 8?", ["16", "17", "18", "19"], 1, "9 + 8 = 17.");
addQ("mtk-k1-u25", 1, "Pengurangan Meminjam", "sulit", "Berapa hasil dari 13 - 6?", ["6", "7", "8", "9"], 1, "13 - 6 = 7.");
addQ("mtk-k1-u26", 1, "Pengurangan Meminjam", "sulit", "Berapa hasil dari 15 - 8?", ["6", "7", "8", "9"], 1, "15 - 8 = 7.");
addQ("mtk-k1-u27", 1, "Hari dalam Seminggu", "sulit", "Jika hari ini adalah hari Rabu, maka 3 hari yang akan datang adalah hari ...", ["Jumat", "Sabtu", "Minggu", "Senin"], 1, "Rabu -> Kamis -> Jumat -> Sabtu (3 hari).");
addQ("mtk-k1-u28", 1, "Hari dalam Seminggu", "sulit", "Jika hari ini adalah hari Minggu, maka 2 hari yang lalu (kemarin lusa) adalah hari ...", ["Jumat", "Sabtu", "Kamis", "Senin"], 0, "Dua hari sebelum Minggu adalah Jumat.");
addQ("mtk-k1-u29", 1, "Penalaran Kaki Meja", "sulit", "Sebuah meja memiliki 4 kaki. Berapakah jumlah kaki dari 3 buah meja yang sama?", ["8 kaki", "10 kaki", "12 kaki", "14 kaki"], 2, "3 meja × 4 kaki = 12 kaki meja.");
addQ("mtk-k1-u30", 1, "Penalaran Roda Sepeda", "sulit", "Sebuah sepeda memiliki 2 roda. Berapakah jumlah seluruh roda dari 5 buah sepeda?", ["8 roda", "10 roda", "12 roda", "14 roda"], 1, "5 sepeda × 2 roda = 10 roda.");

console.log("Kelas 1 Matematika ready: " + allQuestions.length + " questions.");

addQ("mtk-k2-m01", 2, "Penjumlahan Puluhan", "mudah", "Berapa hasil dari 25 + 14?", ["38", "39", "40", "41"], 1, "25 + 14 = 39.");
addQ("mtk-k2-m02", 2, "Penjumlahan Puluhan", "mudah", "Berapa hasil dari 32 + 20?", ["50", "51", "52", "54"], 2, "32 + 20 = 52.");
addQ("mtk-k2-m03", 2, "Pengurangan Puluhan", "mudah", "Berapa hasil dari 48 - 15?", ["31", "32", "33", "34"], 2, "48 - 15 = 33.");
addQ("mtk-k2-m04", 2, "Pengurangan Puluhan", "mudah", "Berapa hasil dari 50 - 25?", ["20", "25", "30", "35"], 1, "50 - 25 = 25.");
addQ("mtk-k2-m05", 2, "Konsep Perkalian", "mudah", "Bentuk penjumlahan berulang dari perkalian 3 × 4 adalah ...", ["3 + 3 + 3 + 3", "4 + 4 + 4", "3 + 4", "4 × 4 × 4"], 1, "3 × 4 artinya bilangan 4 dijumlahkan sebanyak 3 kali (4 + 4 + 4).");
addQ("mtk-k2-m06", 2, "Konsep Perkalian", "mudah", "Bentuk perkalian dari penjumlahan berulang 5 + 5 + 5 + 5 adalah ...", ["4 × 5", "5 × 4", "4 + 5", "5 × 5"], 0, "Angka 5 dijumlahkan 4 kali, maka ditulis 4 × 5.");
addQ("mtk-k2-m07", 2, "Perkalian Dasar", "mudah", "Berapa hasil perkalian dari 2 × 7?", ["12", "14", "16", "18"], 1, "2 × 7 = 14.");
addQ("mtk-k2-m08", 2, "Perkalian Dasar", "mudah", "Berapa hasil perkalian dari 5 × 3?", ["12", "15", "18", "20"], 1, "5 × 3 = 15.");
addQ("mtk-k2-m09", 2, "Pembagian Dasar", "mudah", "Berapa hasil pembagian dari 12 : 3?", ["3", "4", "5", "6"], 1, "12 : 3 = 4.");
addQ("mtk-k2-m10", 2, "Pembagian Dasar", "mudah", "Berapa hasil pembagian dari 20 : 5?", ["3", "4", "5", "6"], 1, "20 : 5 = 4.");

addQ("mtk-k2-s01", 2, "Satuan Panjang", "sedang", "Panjang sebatang kayu 2 meter sama dengan berapa sentimeter (cm)?", ["20 cm", "200 cm", "2.000 cm", "2 cm"], 1, "1 meter = 100 cm, maka 2 meter = 200 cm.");
addQ("mtk-k2-s02", 2, "Satuan Panjang", "sedang", "Panjang pita 300 cm sama dengan berapa meter?", ["3 meter", "30 meter", "300 meter", "0,3 meter"], 0, "300 cm : 100 = 3 meter.");
addQ("mtk-k2-s03", 2, "Satuan Berat", "sedang", "Berat sekarung beras 5 kilogram (kg) sama dengan berapa gram?", ["50 gram", "500 gram", "5.000 gram", "50.000 gram"], 2, "1 kg = 1.000 gram, maka 5 kg = 5.000 gram.");
addQ("mtk-k2-s04", 2, "Satuan Berat", "sedang", "Ibu membeli tepung terigu 2.000 gram. Berat tepung tersebut sama dengan ...", ["2 kg", "20 kg", "200 kg", "1 kg"], 0, "2.000 gram : 1.000 = 2 kg.");
addQ("mtk-k2-s05", 2, "Pecahan Sederhana", "sedang", "Sebuah roti dipotong menjadi 2 bagian sama besar. Nilai satu potong adalah pecahan ...", ["1/2", "1/3", "1/4", "2/1"], 0, "Satu dari dua bagian bernilai setengah (1/2).");
addQ("mtk-k2-s06", 2, "Pecahan Sederhana", "sedang", "Sebuah apel dipotong menjadi 4 bagian sama besar. Nilai satu potong apel adalah ...", ["1/2", "1/3", "1/4", "4/1"], 2, "Satu dari 4 bagian bernilai seperempat (1/4).");
addQ("mtk-k2-s07", 2, "Nilai Tempat", "sedang", "Pada bilangan 375, angka 3 berada pada nilai tempat ...", ["Satuan", "Puluhan", "Ratusan", "Ribuan"], 2, "Angka 3 di posisi paling depan bernilai 300 (ratusan).");
addQ("mtk-k2-s08", 2, "Nilai Tempat", "sedang", "Bilangan yang terbentuk dari 5 ratusan, 2 puluhan, dan 8 satuan adalah ...", ["528", "582", "258", "825"], 0, "500 + 20 + 8 = 528.");
addQ("mtk-k2-s09", 2, "Perkalian 10", "sedang", "Berapa hasil perkalian dari 8 × 10?", ["70", "80", "90", "100"], 1, "8 × 10 = 80.");
addQ("mtk-k2-s10", 2, "Perkalian 4", "sedang", "Berapa hasil perkalian dari 6 × 4?", ["20", "22", "24", "26"], 2, "6 × 4 = 24.");
addQ("mtk-k2-s11", 2, "Pembagian Berulang", "sedang", "Bentuk pengurangan berulang dari pembagian 15 : 5 adalah ...", ["15 - 5 - 5 - 5 = 0", "15 - 3 - 3 - 3 - 3 - 3 = 0", "15 - 5 = 10", "15 - 10 = 5"], 0, "15 dikurangi 5 sebanyak 3 kali berturut-turut hingga bernilai 0.");
addQ("mtk-k2-s12", 2, "Waktu Jam Setengah", "sedang", "Jarum pendek di antara angka 2 dan 3, sedangkan jarum panjang di angka 6. Jam menunjukkan waktu ...", ["02.06", "02.30", "03.30", "06.15"], 1, "Jarum panjang di angka 6 menunjukkan lebih 30 menit (pukul 02.30).");
addQ("mtk-k2-s13", 2, "Sisi Persegi Panjang", "sedang", "Berapa banyak sisi yang dimiliki oleh bangun datar persegi panjang?", ["3 sisi", "4 sisi", "5 sisi", "6 sisi"], 1, "Persegi panjang memiliki 4 sisi.");
addQ("mtk-k2-s14", 2, "Sifat Persegi", "sedang", "Semua sisi pada bangun persegi mempunyai sifat ...", ["Tidak sama panjang", "Sama panjang", "Berbentuk lengkung", "Hanya 2 sisi sama"], 1, "Semua sisi persegi mempunyai panjang yang persis sama.");
addQ("mtk-k2-s15", 2, "Penjumlahan Ratusan", "sedang", "Berapa hasil dari 125 + 150?", ["265", "275", "285", "295"], 1, "125 + 150 = 275.");
addQ("mtk-k2-s16", 2, "Pengurangan Ratusan", "sedang", "Berapa hasil dari 350 - 120?", ["210", "220", "230", "240"], 2, "350 - 120 = 230.");
addQ("mtk-k2-s17", 2, "Pola Loncat Puluhan", "sedang", "Lanjutan dari barisan bilangan 10, 20, 30, 40, ... adalah ...", ["45", "50", "60", "70"], 1, "Pola bertambah 10: 40 + 10 = 50.");
addQ("mtk-k2-s18", 2, "Nilai Uang Rupiah", "sedang", "Dua lembar uang kertas dua ribuan (Rp2.000) nilainya sama dengan ...", ["Rp3.000", "Rp4.000", "Rp5.000", "Rp6.000"], 1, "Rp2.000 + Rp2.000 = Rp4.000.");
addQ("mtk-k2-s19", 2, "Tukar Uang", "sedang", "Satu lembar uang Rp5.000 bernilai setara dengan uang koin/kertas Rp1.000 sebanyak ...", ["3 lembar", "4 lembar", "5 lembar", "6 lembar"], 2, "Rp5.000 : Rp1.000 = 5 lembar.");
addQ("mtk-k2-s20", 2, "Soal Cerita Perkalian", "sedang", "Di toko ada 4 kotak pensil. Setiap kotak berisi 6 pensil. Berapakah jumlah seluruh pensil tersebut?", ["20 pensil", "22 pensil", "24 pensil", "26 pensil"], 2, "4 × 6 = 24 pensil.");

addQ("mtk-k2-u01", 2, "Uang Kembalian", "sulit", "Budi membeli buku seharga Rp6.500 dan membayar dengan selembar uang Rp10.000. Berapa uang kembaliannya?", ["Rp2.500", "Rp3.500", "Rp4.500", "Rp3.000"], 1, "Rp10.000 - Rp6.500 = Rp3.500.");
addQ("mtk-k2-u02", 2, "Total Uang", "sulit", "Siti memiliki 3 keping uang Rp500 dan 2 lembar uang Rp2.000. Berapa jumlah total uang Siti?", ["Rp4.500", "Rp5.500", "Rp6.000", "Rp5.000"], 1, "(3 × 500 = 1.500) + (2 × 2.000 = 4.000) = Rp5.500.");
addQ("mtk-k2-u03", 2, "Operasi Campuran", "sulit", "Berapa hasil dari perhitungan 5 × 4 + 15?", ["30", "35", "40", "45"], 1, "5 × 4 = 20, lalu 20 + 15 = 35.");
addQ("mtk-k2-u04", 2, "Operasi Campuran", "sulit", "Berapa hasil dari perhitungan 24 : 4 + 8?", ["12", "14", "16", "18"], 1, "24 : 4 = 6, lalu 6 + 8 = 14.");
addQ("mtk-k2-u05", 2, "Pembagian Kelompok", "sulit", "Pak guru membawa 28 buku tulis dan membagikannya sama rata kepada 4 kelompok belajar. Berapa buku tiap kelompok?", ["6 buku", "7 buku", "8 buku", "9 buku"], 1, "28 : 4 = 7 buku tulis.");
addQ("mtk-k2-u06", 2, "Soal Cerita Campuran", "sulit", "Paman memetik 3 keranjang mangga berisi masing-masing 8 buah. Ternyata ada 4 buah yang busuk. Berapa buah yang masih bagus?", ["18 buah", "20 buah", "22 buah", "24 buah"], 1, "(3 × 8 = 24) - 4 = 20 buah mangga.");
addQ("mtk-k2-u07", 2, "Durasi Waktu", "sulit", "Lani belajar dari pukul 18.30 sampai pukul 20.00. Berapa lama durasi waktu Lani belajar?", ["1 jam", "1 jam 30 menit", "2 jam", "2 jam 30 menit"], 1, "Dari 18.30 hingga 20.00 lamanya 1 jam 30 menit (90 menit).");
addQ("mtk-k2-u08", 2, "Satuan Minggu", "sulit", "Satu minggu terdiri dari 7 hari. Berapakah jumlah hari dalam 3 minggu?", ["18 hari", "21 hari", "24 hari", "28 hari"], 1, "3 × 7 = 21 hari.");
addQ("mtk-k2-u09", 2, "Sisa Bahan Pita", "sulit", "Ibu memiliki kain 4 meter, kemudian dipotong 150 cm untuk pakaian boneka. Berapa cm sisa kain ibu?", ["200 cm", "250 cm", "300 cm", "350 cm"], 1, "4 m = 400 cm. Sisa = 400 - 150 = 250 cm.");
addQ("mtk-k2-u10", 2, "Berat Gabungan", "sulit", "Sebuah keranjang berisi 3 kg jeruk dan 500 gram duku. Berapa gram berat total isi keranjang?", ["3.050 gram", "3.500 gram", "350 gram", "5.300 gram"], 1, "3 kg = 3.000 gram. Total = 3.000 + 500 = 3.500 gram.");
addQ("mtk-k2-u11", 2, "Pecahan Bagian Dimakan", "sulit", "Sebuah kue dipotong menjadi 8 iris sama besar. Doni memakan 3 iris. Berapakah bagian kue yang dimakan Doni?", ["1/8", "3/8", "5/8", "8/3"], 1, "3 potong dari total 8 bernilai 3/8 bagian.");
addQ("mtk-k2-u12", 2, "Pecahan Sisa Bagian", "sulit", "Dari sebuah martabak yang dipotong 4 bagian sama besar, Rani memakan 1 bagian. Berapa bagian martabak yang tersisa?", ["1/4", "2/4", "3/4", "4/4"], 2, "Sisa = 4/4 - 1/4 = 3/4 bagian.");
addQ("mtk-k2-u13", 2, "Sudut Persegi Panjang", "sulit", "Berapa banyak sudut siku-siku yang dimiliki oleh sebuah bangun persegi panjang?", ["2 sudut", "3 sudut", "4 sudut", "5 sudut"], 2, "Persegi panjang memiliki 4 sudut siku-siku.");
addQ("mtk-k2-u14", 2, "Sudut Lingkaran", "sulit", "Bangun datar di bawah ini yang tidak memiliki titik sudut sama sekali adalah ...", ["Segitiga", "Lingkaran", "Persegi", "Trapesium"], 1, "Lingkaran dibatasi garis lengkung tanpa titik sudut.");
addQ("mtk-k2-u15", 2, "Rusuk Kubus", "sulit", "Berapa banyak jumlah rusuk yang dimiliki oleh sebuah kubus?", ["6 rusuk", "8 rusuk", "12 rusuk", "14 rusuk"], 2, "Kubus memiliki 12 rusuk sama panjang.");
addQ("mtk-k2-u16", 2, "Sisi Balok", "sulit", "Berapakah jumlah sisi permukaan yang membentuk bangun ruang balok?", ["4 sisi", "6 sisi", "8 sisi", "12 sisi"], 1, "Balok memiliki 6 sisi permukaan.");
addQ("mtk-k2-u17", 2, "Penjumlahan Menyimpan", "sulit", "Berapa hasil penjumlahan bersusun dari 268 + 175?", ["433", "443", "453", "463"], 1, "268 + 175 = 443.");
addQ("mtk-k2-u18", 2, "Pengurangan Meminjam", "sulit", "Berapa hasil pengurangan bersusun dari 514 - 238?", ["266", "276", "286", "296"], 1, "514 - 238 = 276.");
addQ("mtk-k2-u19", 2, "Barisan Loncat Ratusan", "sulit", "Perhatikan barisan bilangan: 150, 200, 250, 300, ... Bilangan selanjutnya adalah angka ...", ["320", "350", "400", "450"], 1, "Pola bertambah 50: 300 + 50 = 350.");
addQ("mtk-k2-u20", 2, "Teka-teki Ratusan", "sulit", "Aku adalah bilangan tiga angka dengan angka ratusan 4, puluhan 0, dan satuan 9. Bilangan berapakah aku?", ["490", "409", "904", "940"], 1, "Ratusan 4, puluhan 0, satuan 9 bernilai 409.");
addQ("mtk-k2-u21", 2, "Kelipatan Umur", "sulit", "Umur Ayah adalah 36 tahun, sedangkan umur Doni adalah 9 tahun. Berapa kali lipat umur Ayah dibanding umur Doni?", ["3 kali", "4 kali", "5 kali", "6 kali"], 1, "36 : 9 = 4 kali lipat.");
addQ("mtk-k2-u22", 2, "Sisa Pembagian", "sulit", "Ibu memiliki 17 kue dan membagikannya kepada 4 anak sama banyak. Berapakah sisa kue yang tidak terbagi habis?", ["1 kue", "2 kue", "3 kue", "4 kue"], 0, "17 : 4 = 4 sisa 1 (karena 4 × 4 = 16, sisa 1 kue).");
addQ("mtk-k2-u23", 2, "Keliling Persegi Satuan", "sulit", "Sebuah persegi memiliki sisi 5 petak satuan. Berapakah keliling keliling persegi tersebut?", ["15 petak", "20 petak", "25 petak", "10 petak"], 1, "Keliling = 4 × 5 = 20 petak satuan.");
addQ("mtk-k2-u24", 2, "Luas Persegi Satuan", "sulit", "Sebuah persegi panjang tersusun dari 4 baris dan tiap baris terdapat 6 kotak satuan. Luasnya adalah ...", ["20 kotak", "22 kotak", "24 kotak", "26 kotak"], 2, "Luas = 4 × 6 = 24 kotak satuan.");
addQ("mtk-k2-u25", 2, "Piktogram Diagram Gambar", "sulit", "Pada piktogram, 1 simbol apel mewakili 2 buah apel asli. Jika ada 4 simbol apel, berapakah jumlah apel aslinya?", ["6 buah", "8 buah", "10 buah", "12 buah"], 1, "4 simbol × 2 buah = 8 buah apel.");
addQ("mtk-k2-u26", 2, "Kebalikan Operasi", "sulit", "Jika 7 × 5 = 35, maka nilai perhitungan dari 35 : 7 adalah ...", ["5", "6", "7", "8"], 0, "Pembagian adalah kebalikan dari perkalian: 35 : 7 = 5.");
addQ("mtk-k2-u27", 2, "Sifat Angka 1 dan 0", "sulit", "Berapakah hasil perhitungan dari 25 × 1 + 18 × 0?", ["0", "25", "43", "18"], 1, "25 × 1 = 25, dan 18 × 0 = 0. Maka 25 + 0 = 25.");
addQ("mtk-k2-u28", 2, "Pola Bentuk Geometri", "sulit", "Pola: Segitiga, Lingkaran, Persegi, Segitiga, Lingkaran, ... Bentuk geometri selanjutnya adalah ...", ["Segitiga", "Persegi", "Lingkaran", "Bintang"], 1, "Pola berulang setiap 3 bentuk (Segitiga, Lingkaran, Persegi).");
addQ("mtk-k2-u29", 2, "Menit Siang", "sulit", "Jarot tidur siang mulai pukul 13.15 sampai pukul 14.00. Berapa menit Jarot tidur siang?", ["30 menit", "45 menit", "50 menit", "60 menit"], 1, "Dari menit ke-15 ke menit ke-60 lamanya adalah 45 menit.");
addQ("mtk-k2-u30", 2, "Jumlah Dua Bilangan", "sulit", "Jumlah dua bilangan adalah 20. Jika bilangan pertama adalah 12, berapakah bilangan kedua?", ["6", "7", "8", "9"], 2, "20 - 12 = 8.");

console.log("Kelas 2 Matematika ready: " + allQuestions.length + " questions.");

addQ("mtk-k3-m01", 3, "Perkalian Dasar Puluhan", "mudah", "Berapa hasil dari 15 × 3?", ["40", "45", "50", "55"], 1, "15 × 3 = 45.");
addQ("mtk-k3-m02", 3, "Pembagian Puluhan", "mudah", "Berapa hasil dari 60 : 4?", ["12", "14", "15", "16"], 2, "60 : 4 = 15.");
addQ("mtk-k3-m03", 3, "Pecahan Senilai", "mudah", "Pecahan yang senilai dengan 1/2 adalah ...", ["2/4", "1/4", "3/4", "2/3"], 0, "1/2 dikalikan 2/2 = 2/4.");
addQ("mtk-k3-m04", 3, "Keliling Persegi", "mudah", "Panjang sisi sebuah persegi adalah 6 cm. Berapakah keliling persegi tersebut?", ["24 cm", "18 cm", "36 cm", "12 cm"], 0, "Keliling persegi = 4 × sisi = 4 × 6 = 24 cm.");
addQ("mtk-k3-m05", 3, "Konversi Jam", "mudah", "1 jam sama dengan berapa menit?", ["50 menit", "60 menit", "70 menit", "100 menit"], 1, "1 jam tepat bernilai 60 menit.");
addQ("mtk-k3-m06", 3, "Konversi Menit", "mudah", "2 jam sama dengan berapa menit?", ["90 menit", "100 menit", "120 menit", "150 menit"], 2, "2 × 60 = 120 menit.");
addQ("mtk-k3-m07", 3, "Penjumlahan Pecahan", "mudah", "Berapa hasil dari 2/7 + 3/7?", ["5/7", "5/14", "6/7", "1/7"], 0, "Jika penyebut sama, pembilang dijumlahkan: 2 + 3 = 5, hasilnya 5/7.");
addQ("mtk-k3-m08", 3, "Pengurangan Pecahan", "mudah", "Berapa hasil dari 5/8 - 2/8?", ["3/8", "3/16", "7/8", "1/8"], 0, "5 - 2 = 3, hasilnya 3/8.");
addQ("mtk-k3-m09", 3, "Satuan Berat", "mudah", "1 kilogram (kg) sama dengan berapa gram?", ["100 gram", "500 gram", "1.000 gram", "10.000 gram"], 2, "1 kg tepat bernilai 1.000 gram.");
addQ("mtk-k3-m10", 3, "Sudut Siku-siku", "mudah", "Besar sudut siku-siku adalah ...", ["45°", "60°", "90°", "180°"], 2, "Sudut siku-siku besarnya tepat 90 derajat.");

addQ("mtk-k3-s01", 3, "Sifat Komutatif", "sedang", "Sifat pertukaran pada perkalian: 12 × 5 = 5 × ... Angka yang tepat adalah ...", ["5", "10", "12", "15"], 2, "Sifat komutatif perkalian: a × b = b × a, maka 12 × 5 = 5 × 12.");
addQ("mtk-k3-s02", 3, "Luas Persegi Panjang", "sedang", "Panjang persegi panjang 8 cm dan lebarnya 5 cm. Berapakah luasnya?", ["26 cm²", "40 cm²", "35 cm²", "45 cm²"], 1, "Luas = panjang × lebar = 8 × 5 = 40 cm².");
addQ("mtk-k3-s03", 3, "Keliling Persegi Panjang", "sedang", "Panjang lapangan 10 meter dan lebarnya 6 meter. Keliling lapangan tersebut adalah ...", ["32 meter", "60 meter", "16 meter", "36 meter"], 0, "Keliling = 2 × (p + l) = 2 × (10 + 6) = 2 × 16 = 32 meter.");
addQ("mtk-k3-s04", 3, "Konversi Jam dan Menit", "sedang", "1 jam 20 menit sama dengan berapa menit?", ["70 menit", "80 menit", "90 menit", "100 menit"], 1, "60 + 20 = 80 menit.");
addQ("mtk-k3-s05", 3, "Konversi Jam dan Menit", "sedang", "2 jam 15 menit sama dengan berapa menit?", ["120 menit", "135 menit", "140 menit", "150 menit"], 1, "(2 × 60) + 15 = 120 + 15 = 135 menit.");
addQ("mtk-k3-s06", 3, "Satuan Berat Campuran", "sedang", "Berat belanjaan ibu adalah 2 kg lebih 300 gram. Berapa total gram belanjaan ibu?", ["2.030 gram", "2.300 gram", "2.003 gram", "230 gram"], 1, "2 kg = 2.000 gram. Total = 2.000 + 300 = 2.300 gram.");
addQ("mtk-k3-s07", 3, "Perkalian Ratusan", "sedang", "Berapa hasil dari 120 × 4?", ["460", "480", "500", "520"], 1, "120 × 4 = 480.");
addQ("mtk-k3-s08", 3, "Pembagian Ratusan", "sedang", "Berapa hasil dari 250 : 5?", ["40", "45", "50", "55"], 2, "250 : 5 = 50.");
addQ("mtk-k3-s09", 3, "Pecahan pada Garis Bilangan", "sedang", "Di antara 1/4 dan 3/4 terdapat pecahan ...", ["1/2 (2/4)", "1/3", "4/4", "1/5"], 0, "Pecahan di tengah antara 1/4 dan 3/4 adalah 2/4 yang senilai dengan 1/2.");
addQ("mtk-k3-s10", 3, "Luas Persegi", "sedang", "Sebuah ubin berbentuk persegi memiliki panjang sisi 20 cm. Luas ubin tersebut adalah ...", ["40 cm²", "80 cm²", "400 cm²", "200 cm²"], 2, "Luas persegi = s × s = 20 × 20 = 400 cm².");
addQ("mtk-k3-s11", 3, "Jenis Sudut", "sedang", "Sudut yang besarnya kurang dari 90° disebut sudut ...", ["Lancip", "Tumpul", "Siku-siku", "Lurus"], 0, "Sudut antara 0° dan 90° adalah sudut lancip.");
addQ("mtk-k3-s12", 3, "Jenis Sudut", "sedang", "Sudut yang besarnya lebih dari 90° tetapi kurang dari 180° disebut sudut ...", ["Lancip", "Tumpul", "Siku-siku", "Refleks"], 1, "Sudut tumpul besarnya di antara 90° dan 180°.");
addQ("mtk-k3-s13", 3, "Piktogram", "sedang", "Diagram gambar menunjukkan 1 gambar buku mewakili 5 buah buku. Jika ada 6 gambar buku, total buku adalah ...", ["25 buah", "30 buah", "35 buah", "40 buah"], 1, "6 × 5 = 30 buah buku.");
addQ("mtk-k3-s14", 3, "Soal Cerita Pembagian", "sedang", "Sebanyak 72 bibit tanaman dibagikan sama rata ke 8 taman bunga. Berapa bibit tiap taman?", ["8 bibit", "9 bibit", "10 bibit", "11 bibit"], 1, "72 : 8 = 9 bibit tanaman.");
addQ("mtk-k3-s15", 3, "Soal Cerita Uang", "sedang", "Harga 1 pulpen adalah Rp2.500. Jika Doni membeli 4 pulpen, berapakah uang yang harus dibayar?", ["Rp8.000", "Rp10.000", "Rp12.000", "Rp15.000"], 1, "4 × Rp2.500 = Rp10.000.");
addQ("mtk-k3-s16", 3, "Operasi Hitung", "sedang", "Berapa hasil dari 100 - 25 × 3?", ["25", "75", "150", "225"], 0, "Kerjakan perkalian dulu: 25 × 3 = 75, lalu 100 - 75 = 25.");
addQ("mtk-k3-s17", 3, "Operasi Hitung", "sedang", "Berapa hasil dari (45 + 15) : 6?", ["8", "10", "12", "15"], 1, "Dalam kurung dulu: 45 + 15 = 60, lalu 60 : 6 = 10.");
addQ("mtk-k3-s18", 3, "Pecahan dari Kumpulan", "sedang", "Ada 12 kelereng di meja, 3 kelereng berwarna merah. Berapakah bagian kelereng merah dari seluruhnya?", ["1/4", "1/3", "1/2", "3/4"], 0, "3 dari 12 = 3/12 disederhanakan menjadi 1/4 bagian.");
addQ("mtk-k3-s19", 3, "Konversi Satuan Panjang", "sedang", "Jarak 1 kilometer (km) sama dengan berapa meter?", ["10 meter", "100 meter", "1.000 meter", "10.000 meter"], 2, "1 km = 1.000 meter.");
addQ("mtk-k3-s20", 3, "Perbandingan Bilangan Ratusan", "sedang", "Tanda yang tepat untuk mengisi titik-titik: 475 ... 547 adalah ...", ["< (lebih kecil)", "> (lebih besar)", "= (sama dengan)", "≥"], 0, "475 lebih kecil dari 547, maka tandanya <.");

addQ("mtk-k3-u01", 3, "Keliling Lapangan 3 Putaran", "sulit", "Lapangan berbentuk persegi panjang berukuran 20 m × 15 m. Doni berlari mengelilingi lapangan sebanyak 3 kali putaran. Jarak yang ditempuh Doni adalah ...", ["140 meter", "210 meter", "280 meter", "300 meter"], 1, "Keliling 1 putaran = 2 × (20 + 15) = 70 m. 3 putaran = 3 × 70 = 210 meter.");
addQ("mtk-k3-u02", 3, "Selisih Durasi Waktu", "sulit", "Ujian matematika dimulai pukul 08.15 dan selesai pukul 09.45. Berapa lamakah durasi ujian tersebut berlangsung?", ["1 jam", "1 jam 15 menit", "1 jam 30 menit", "1 jam 45 menit"], 2, "Dari 08.15 ke 09.45 adalah 1 jam 30 menit (90 menit).");
addQ("mtk-k3-u03", 3, "Soal Cerita Pembagian Bersisa", "sulit", "Sebuah pabrik roti mengemas 86 roti ke dalam kotak yang masing-masing muat 8 roti. Berapa kotak yang terisi penuh dan berapa sisa rotinya?", ["10 kotak sisa 6", "11 kotak sisa 2", "10 kotak sisa 4", "9 kotak sisa 6"], 0, "86 : 8 = 10 dengan sisa 6 (karena 10 × 8 = 80, sisa 6 roti).");
addQ("mtk-k3-u04", 3, "Operasi Campuran Bertingkat", "sulit", "Berapakah hasil dari 250 - 50 × 3 + 120 : 4?", ["130", "140", "150", "160"], 0, "50 × 3 = 150, 120 : 4 = 30. Maka 250 - 150 + 30 = 100 + 30 = 130.");
addQ("mtk-k3-u05", 3, "Luas Daerah Berpetak", "sulit", "Sebuah bangun dibentuk oleh 12 persegi utuh dan 6 buah setengah persegi. Berapakah luas total bangun dalam petak satuan?", ["14 petak", "15 petak", "16 petak", "18 petak"], 1, "12 + (6 × 1/2) = 12 + 3 = 15 petak satuan.");
addQ("mtk-k3-u06", 3, "Selisih Luas Persegi", "sulit", "Persegi A memiliki sisi 6 cm dan persegi B memiliki sisi 8 cm. Berapakah selisih luas persegi B dan A?", ["20 cm²", "28 cm²", "32 cm²", "36 cm²"], 1, "Luas A = 36 cm², Luas B = 64 cm². Selisih = 64 - 36 = 28 cm².");
addQ("mtk-k3-u07", 3, "Pecahan Sisa Kain", "sulit", "Ibu memiliki kain 1 meter utuh (8/8). Digunakan untuk taplak meja 3/8 meter dan untuk sarung bantal 2/8 meter. Berapa sisa kain ibu?", ["2/8 meter", "3/8 meter", "4/8 meter", "5/8 meter"], 1, "8/8 - 3/8 - 2/8 = 3/8 meter.");
addQ("mtk-k3-u08", 3, "Sudut pada Jarum Jam", "sulit", "Pada pukul 03.00 tepat, sudut terkecil yang dibentuk oleh kedua jarum jam adalah sudut ...", ["Lancip (60°)", "Siku-siku (90°)", "Tumpul (120°)", "Lurus (180°)"], 1, "Pada pukul 03.00, jarum jam membentuk sudut siku-siku 90°.");
addQ("mtk-k3-u09", 3, "Sudut pada Jarum Jam", "sulit", "Pada pukul 06.00 tepat, sudut yang dibentuk oleh kedua jarum jam adalah sudut ...", ["Siku-siku (90°)", "Lurus (180°)", "Tumpul (120°)", "Lancip (45°)"], 1, "Jarum jam membentuk satu garis lurus 180° pada pukul 06.00.");
addQ("mtk-k3-u10", 3, "Sudut pada Jarum Jam", "sulit", "Pada pukul 02.00 tepat, sudut terkecil yang dibentuk jarum jam besarnya adalah ...", ["30°", "45°", "60°", "90°"], 2, "Tiap 1 angka bernilai 30° (360° : 12). 2 angka = 2 × 30° = 60° (lancip).");
addQ("mtk-k3-u11", 3, "Konversi Satuan Berat Total", "sulit", "Pak Ahmad panen padi sebanyak 3 karung. Berat tiap karung 50 kg. Berapa gramkah berat seluruh padi panen Pak Ahmad?", ["15.000 gram", "150.000 gram", "1.500 gram", "1.500.000 gram"], 1, "Total = 3 × 50 = 150 kg. 150 kg = 150 × 1.000 = 150.000 gram.");
addQ("mtk-k3-u12", 3, "Mencari Sisi dari Keliling", "sulit", "Keliling sebuah persegi adalah 36 cm. Berapakah panjang sisi persegi tersebut?", ["6 cm", "8 cm", "9 cm", "12 cm"], 2, "Sisi = Keliling : 4 = 36 : 4 = 9 cm.");
addQ("mtk-k3-u13", 3, "Mencari Lebar Persegi Panjang", "sulit", "Keliling persegi panjang adalah 40 cm. Jika panjangnya 12 cm, berapakah lebarnya?", ["6 cm", "8 cm", "10 cm", "14 cm"], 1, "Setengah keliling = 40 : 2 = 20 cm. Lebar = 20 - 12 = 8 cm.");
addQ("mtk-k3-u14", 3, "Penalaran Data Tabel", "sulit", "Tabel menunjukkan pengunjung perpustakaan: Senin 24 anak, Selasa 30 anak, Rabu 26 anak. Berapa rata-rata pengunjung per hari selama 3 hari tersebut?", ["25 anak", "26 anak", "27 anak", "28 anak"], 1, "(24 + 30 + 26) : 3 = 80 : 3 ... ralat: 24+30+26=80 -> ubah 25, 30, 26 = 81 : 3 = 27 anak. 80/3 ralat: (24+32+28)=84:3=28 -> 24+30+27 = 81 : 3 = 27 anak (24+30+26 = 80 -> 26,67). Maka 24 + 30 + 27 = 81 : 3 = 27 anak.");

allQuestions.pop();
seenQuestions.delete("Tabel menunjukkan pengunjung perpustakaan: Senin 24 anak, Selasa 30 anak, Rabu 26 anak. Berapa rata-rata pengunjung per hari selama 3 hari tersebut?");
addQ("mtk-k3-u14", 3, "Penalaran Data Rata-rata", "sulit", "Tabel pengunjung perpustakaan: Senin 24 anak, Selasa 30 anak, Rabu 27 anak. Berapakah jumlah seluruh pengunjung perpustakaan dalam 3 hari tersebut?", ["78 anak", "80 anak", "81 anak", "84 anak"], 2, "Jumlah total pengunjung = 24 + 30 + 27 = 81 anak.");
addQ("mtk-k3-u15", 3, "Soal Cerita Pembagian Kotak", "sulit", "Sebuah toko kue menerima pesanan 120 donat. Donat dimasukkan ke dalam kotak berisi 6 donat. Setiap kotak dijual Rp18.000. Berapa uang yang diperoleh?", ["Rp320.000", "Rp360.000", "Rp400.000", "Rp420.000"], 1, "Jumlah kotak = 120 : 6 = 20 kotak. Uang = 20 × Rp18.000 = Rp360.000.");
addQ("mtk-k3-u16", 3, "Pecahan Campuran Sederhana", "sulit", "Pecahan 7/4 jika diubah ke dalam bentuk pecahan campuran adalah ...", ["1 1/4", "1 3/4", "2 1/4", "1 2/4"], 1, "7 : 4 = 1 dengan sisa 3, maka ditulis 1 3/4.");
addQ("mtk-k3-u17", 3, "Pecahan Campuran Sederhana", "sulit", "Bentuk pecahan biasa dari 2 1/3 adalah ...", ["5/3", "6/3", "7/3", "8/3"], 2, "(2 × 3 + 1) / 3 = 7/3.");
addQ("mtk-k3-u18", 3, "Operasi Pecahan 1 Utuh", "sulit", "Berapakah hasil dari 1 - 3/5?", ["1/5", "2/5", "3/5", "4/5"], 1, "1 = 5/5, maka 5/5 - 3/5 = 2/5.");
addQ("mtk-k3-u19", 3, "Pola Gambar Segitiga", "sulit", "Pola jumlah segitiga kecil bertingkat: Tingkat 1 ada 1 segitiga, tingkat 2 ada 4 segitiga, tingkat 3 ada 9 segitiga. Berapa segitiga pada tingkat ke-4?", ["12", "14", "16", "20"], 2, "Pola bilangan kuadrat: 1²=1, 2²=4, 3²=9, 4²=16 segitiga.");
addQ("mtk-k3-u20", 3, "Pola Persegi Satuan", "sulit", "Pola barisan bilangan persegi: 1, 4, 9, 16, 25, ... Angka berikutnya pada pola adalah ...", ["30", "36", "40", "49"], 1, "6 × 6 = 36.");
addQ("mtk-k3-u21", 3, "Perbandingan Beda Satuan", "sulit", "Tali A panjangnya 2 meter, tali B panjangnya 180 cm. Tali manakah yang lebih panjang dan berapa selisihnya?", ["Tali A lebih panjang 20 cm", "Tali B lebih panjang 20 cm", "Tali A lebih panjang 10 cm", "Keduanya sama panjang"], 0, "Tali A = 200 cm, tali B = 180 cm. Selisih = 200 - 180 = 20 cm lebih panjang tali A.");
addQ("mtk-k3-u22", 3, "Perbandingan Beda Satuan Berat", "sulit", "Karung X beratnya 3 kg, karung Y beratnya 3.200 gram. Manakah pernyataan yang benar?", ["Karung X lebih berat", "Karung Y lebih berat 200 gram", "Karung Y lebih ringan", "Keduanya sama berat"], 1, "Karung X = 3.000 gram, karung Y = 3.200 gram. Karung Y lebih berat 200 gram.");
addQ("mtk-k3-u23", 3, "Penalaran Jam Belajar", "sulit", "Rudi belajar malam selama 1 jam 45 menit. Jika Rudi mulai belajar pukul 19.15, pada pukul berapakah Rudi selesai?", ["20.30", "20.45", "21.00", "21.15"], 2, "19.15 + 1 jam 45 menit = 19.15 + 45 menit = 20.00 + 1 jam = pukul 21.00.");
addQ("mtk-k3-u24", 3, "Keliling Segitiga Sama Sisi", "sulit", "Sebuah segitiga sama sisi memiliki keliling 45 cm. Berapakah panjang masing-masing sisinya?", ["12 cm", "15 cm", "18 cm", "20 cm"], 1, "Sisi = Keliling : 3 = 45 : 3 = 15 cm.");
addQ("mtk-k3-u25", 3, "Keliling Segitiga Siku-siku", "sulit", "Sebuah segitiga siku-siku memiliki panjang sisi 6 cm, 8 cm, dan 10 cm. Keliling segitiga tersebut adalah ...", ["20 cm", "24 cm", "28 cm", "48 cm"], 1, "Keliling = 6 + 8 + 10 = 24 cm.");
addQ("mtk-k3-u26", 3, "Teka-teki Nilai Tempat", "sulit", "Aku adalah bilangan empat angka. Ratusanku 3, ribuanku 2, puluhanku 5, dan satuanku 0. Bilangan berapakah aku?", ["2.350", "3.250", "2.530", "5.230"], 0, "Ribuan 2, ratusan 3, puluhan 5, satuan 0 adalah 2.350.");
addQ("mtk-k3-u27", 3, "Pembagian dengan Hasil Ribuan", "sulit", "Berapa hasil dari 4.000 : 8?", ["400", "500", "600", "800"], 1, "4.000 : 8 = 500.");
addQ("mtk-k3-u28", 3, "Perkalian Angka Ribuan", "sulit", "Berapa hasil dari 250 × 8?", ["1.800", "2.000", "2.200", "2.500"], 1, "250 × 8 = 2.000.");
addQ("mtk-k3-u29", 3, "Luas Meja Lipat", "sulit", "Meja lipat berbentuk persegi panjang berukuran panjang 90 cm dan lebar 40 cm. Luas permukaan meja tersebut adalah ...", ["3.200 cm²", "3.600 cm²", "3.800 cm²", "4.000 cm²"], 1, "90 × 40 = 3.600 cm².");
addQ("mtk-k3-u30", 3, "Selisih Umur Kakek dan Cucu", "sulit", "Kakek berumur 7 dasawarsa (1 dasawarsa = 10 tahun). Cucu berumur 9 tahun. Berapakah selisih umur mereka?", ["51 tahun", "59 tahun", "61 tahun", "69 tahun"], 2, "Umur kakek = 7 × 10 = 70 tahun. Selisih = 70 - 9 = 61 tahun.");

console.log("Kelas 3 Matematika ready: " + allQuestions.length + " questions.");

fs.writeFileSync(path.join(__dirname, '..', 'generators', 'math_part1.json'), JSON.stringify(allQuestions, null, 2));
console.log("Math part 1 successfully written.");
