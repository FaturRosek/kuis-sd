const fs = require('fs');
const path = require('path');

const genDir = path.join(__dirname, '..', 'generators');
if (!fs.existsSync(genDir)) fs.mkdirSync(genDir, { recursive: true });

function formatQuestion(id, grade, topic, difficulty, question, options, correctAnswer, explanation) {
  return {
    id,
    grade: Number(grade),
    subject: "bahasa-indonesia",
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
    throw new Error(`Duplicate question in Bahasa Indonesia: "${question}"`);
  }
  seenQuestions.add(normQ);
  allQuestions.push(formatQuestion(id, grade, topic, difficulty, question, options, correctAnswer, explanation));
}

addQ("bind-k1-m01", 1, "Huruf Vokal", "mudah", "Huruf vokal dalam abjad bahasa Indonesia adalah ...", ["a, i, u, e, o", "b, c, d, f, g", "k, l, m, n, p", "r, s, t, w, y"], 0, "Huruf vokal (huruf hidup) ada 5 yaitu a, i, u, e, dan o.");
addQ("bind-k1-m02", 1, "Huruf Vokal pada Kata", "mudah", "Huruf vokal pada kata 'buku' adalah ...", ["b dan k", "u", "b dan u", "k dan u"], 1, "Huruf vokal pada b-u-k-u adalah huruf u.");
addQ("bind-k1-m03", 1, "Huruf Konsonan", "mudah", "Huruf konsonan (huruf mati) yang terdapat pada kata 'meja' adalah ...", ["m dan j", "e dan a", "m dan e", "j dan a"], 0, "Huruf konsonan pada kata meja adalah m dan j.");
addQ("bind-k1-m04", 1, "Membaca Suku Kata", "mudah", "Suku kata dari kata 'sekolah' jika dipenggal adalah ...", ["se - ko - lah", "sek - ol - ah", "se - kol - ah", "seko - lah"], 0, "Kata sekolah dipenggal suku katanya menjadi se - ko - lah.");
addQ("bind-k1-m05", 1, "Membaca Suku Kata", "mudah", "Gabungan huruf 'b - a' dan 'j - u' jika dibaca berbunyi ...", ["Batu", "Baju", "Buku", "Bolu"], 1, "ba - ju dibaca baju.");
addQ("bind-k1-m06", 1, "Ungkapan Santun Tolong", "mudah", "Saat membutuhkan bantuan orang lain, kata santun yang harus kita ucapkan adalah ...", ["Tolong", "Terima kasih", "Maaf", "Permisi"], 0, "Kata 'tolong' diucapkan saat meminta bantuan.");
addQ("bind-k1-m07", 1, "Ungkapan Santun Terima Kasih", "mudah", "Setelah diberi hadiah atau ditolong teman, ucapan yang tepat adalah ...", ["Maaf ya", "Terima kasih", "Tolong dong", "Biar saja"], 1, "Ucapan terima kasih adalah tanda syukur dan menghargai kebaikan orang lain.");
addQ("bind-k1-m08", 1, "Ungkapan Santun Maaf", "mudah", "Jika kita tidak sengaja menyenggol pensil teman hingga jatuh, kita harus mengucapkan ...", ["Terima kasih", "Minta maaf", "Tolong ambilkan", "Tertawa"], 1, "Ucapkan maaf jika melakukan kesalahan tidak sengaja.");
addQ("bind-k1-m09", 1, "Ungkapan Santun Permisi", "mudah", "Saat kita ingin berjalan lewat di depan guru yang sedang duduk, ucapan yang santun adalah ...", ["Awas", "Permisi", "Minggir", "Hai"], 1, "Ucapkan 'permisi' sambil membungkukkan badan.");
addQ("bind-k1-m10", 1, "Tanda Titik", "mudah", "Kalimat berita yang menyatakan suatu peristiwa selalu diakhiri dengan tanda ...", ["Titik (.)", "Tanya (?)", "Seru (!)", "Koma (,)"], 0, "Kalimat berita diakhiri dengan tanda baca titik.");

addQ("bind-k1-s01", 1, "Kalimat Tanya", "sedang", "Kalimat tanya selalu diakhiri dengan tanda baca ...", ["Titik (.)", "Tanya (?)", "Seru (!)", "Petik (\")"], 1, "Kalimat tanya diakhiri dengan tanda tanya (?).");
addQ("bind-k1-s02", 1, "Kata Tanya 'Siapa'", "sedang", "Kata tanya yang digunakan untuk menanyakan nama seseorang adalah ...", ["Apa", "Siapa", "Di mana", "Berapa"], 1, "Kata 'siapa' digunakan untuk menanyakan orang/tokoh.");
addQ("bind-k1-s03", 1, "Kata Tanya 'Di Mana'", "sedang", "Kata tanya yang digunakan untuk menanyakan tempat keberadaan adalah ...", ["Kapan", "Di mana", "Siapa", "Mengapa"], 1, "Kata 'di mana' digunakan untuk menanyakan tempat.");
addQ("bind-k1-s04", 1, "Huruf Kapital Awal Kalimat", "sedang", "Huruf kapital (huruf besar) wajib digunakan pada ...", ["Akhir kalimat", "Awal kalimat", "Tengah kata", "Semua huruf"], 1, "Setiap awal kalimat harus diawali dengan huruf kapital.");
addQ("bind-k1-s05", 1, "Huruf Kapital Nama Orang", "sedang", "Penulisan nama orang yang benar menggunakan huruf kapital adalah ...", ["budi", "Budi", "bUdi", "buDi"], 1, "Huruf pertama pada nama orang harus kapital (Budi).");
addQ("bind-k1-s06", 1, "Menyusun Kata", "sedang", "Susunan kata yang benar dari 'membaca - Doni - buku' adalah ...", ["Buku membaca Doni", "Doni membaca buku", "Membaca Doni buku", "Doni buku membaca"], 1, "Urutan subjek - predikat - objek: Doni membaca buku.");
addQ("bind-k1-s07", 1, "Menyusun Kata", "sedang", "Susunan kata yang tepat dari 'menyiram - Siti - bunga' adalah ...", ["Siti menyiram bunga", "Bunga Siti menyiram", "Menyiram bunga Siti", "Siti bunga menyiram"], 0, "Urutan yang bermakna tepat adalah: Siti menyiram bunga.");
addQ("bind-k1-s08", 1, "Lawan Kata Besar", "sedang", "Lawan kata (antonim) dari kata 'besar' adalah ...", ["Tinggi", "Kecil", "Luas", "Panjang"], 1, "Lawan kata besar adalah kecil.");
addQ("bind-k1-s09", 1, "Lawan Kata Bersih", "sedang", "Lawan kata (antonim) dari kata 'bersih' adalah ...", ["Rapi", "Kotor", "Indah", "Wangi"], 1, "Lawan kata bersih adalah kotor.");
addQ("bind-k1-s10", 1, "Lawan Kata Tinggi", "sedang", "Lawan kata (antonim) dari kata 'tinggi' adalah ...", ["Besar", "Pendek", "Kecil", "Jauh"], 1, "Lawan kata tinggi adalah pendek.");
addQ("bind-k1-s11", 1, "Sinonim Pintar", "sedang", "Kata yang artinya sama (sinonim) dengan kata 'pintar' adalah ...", ["Malas", "Pandai", "Lambat", "Rajin"], 1, "Pintar bersinonim dengan pandai.");
addQ("bind-k1-s12", 1, "Sinonim Senang", "sedang", "Kata yang artinya sama (sinonim) dengan kata 'senang' adalah ...", ["Gembira", "Sedih", "Marah", "Takut"], 0, "Senang bersinonim dengan gembira.");
addQ("bind-k1-s13", 1, "Kalimat Ajakan", "sedang", "Kalimat ajakan biasanya diawali dengan kata ...", ["Ayo atau Mari", "Jangan", "Tolong", "Wah"], 0, "Kata 'ayo' dan 'mari' digunakan untuk mengajak.");
addQ("bind-k1-s14", 1, "Contoh Kalimat Ajakan", "sedang", "Manakah di bawah ini yang merupakan kalimat ajakan?", ["Ayo kita bermain bola di lapangan!", "Di mana rumahmu?", "Budi sedang makan nasi goreng.", "Tolong ambilkan penggaris itu."], 0, "Diawali kata 'Ayo' yang mengajak teman bermain.");
addQ("bind-k1-s15", 1, "Membaca Gambar Benda", "sedang", "Benda di kelas yang digunakan untuk menghapus tulisan pensil adalah ...", ["Penggaris", "Penghapus", "Rautan", "Gunting"], 1, "Penghapus digunakan membersihkan tulisan pensil.");
addQ("bind-k1-s16", 1, "Fungsi Panca Indra Mata", "sedang", "Bagian tubuh panca indra yang kita gunakan untuk membaca buku adalah ...", ["Telinga", "Mata", "Hidung", "Lidah"], 1, "Mata berfungsi untuk melihat dan membaca.");
addQ("bind-k1-s17", 1, "Fungsi Panca Indra Telinga", "sedang", "Kita mendengarkan penjelasan guru di kelas menggunakan ...", ["Mata", "Telinga", "Hidung", "Tangan"], 1, "Telinga berfungsi untuk mendengar.");
addQ("bind-k1-s18", 1, "Merapikan Benda", "sedang", "Setelah selesai belajar, buku dan pensil harus kita masukkan ke dalam ...", ["Tempat sampah", "Tas sekolah", "Bawah kasur", "Lantai"], 1, "Alat tulis dirapikan di dalam tas sekolah.");
addQ("bind-k1-s19", 1, "Kegiatan di Sekolah", "sedang", "Tempat di sekolah untuk membaca dan meminjam berbagai macam buku adalah ...", ["Kantin", "Perpustakaan", "UKS", "Lapangan"], 1, "Perpustakaan adalah tempat membaca dan meminjam buku.");
addQ("bind-k1-s20", 1, "Kalimat Tanya Usia", "sedang", "Kata tanya yang tepat untuk menanyakan jumlah umur adalah ...", ["Siapa", "Berapa", "Apa", "Ke mana"], 1, "Kata 'berapa' digunakan untuk menanyakan jumlah/angka.");

addQ("bind-k1-u01", 1, "Pemahaman Bacaan Tokoh", "sulit", "Bacalah: 'Kancil sedang minum di tepi sungai. Tiba-tiba Buaya muncul di depannya.' Tokoh yang sedang minum adalah ...", ["Kancil", "Buaya", "Gajah", "Kura-kura"], 0, "Pada teks tertulis jelas bahwa Kancil sedang minum di sungai.");
addQ("bind-k1-u02", 1, "Pemahaman Bacaan Tempat", "sulit", "Berdasarkan bacaan tadi (Kancil sedang minum di tepi sungai), di manakah tempat peristiwa terjadi?", ["Di hutan belantara", "Di tepi sungai", "Di dalam gua", "Di kebun mentimun"], 1, "Peristiwa terjadi di tepi sungai.");
addQ("bind-k1-u03", 1, "Urutan Cerita 1", "sulit", "Urutan kegiatan pagi: (1) Sarapan pagi, (2) Bangun tidur, (3) Mandi pagi. Urutan yang paling tepat adalah ...", ["(1) - (2) - (3)", "(2) - (3) - (1)", "(3) - (2) - (1)", "(2) - (1) - (3)"], 1, "Bangun tidur (2) -> Mandi pagi (3) -> Sarapan pagi (1).");
addQ("bind-k1-u04", 1, "Urutan Menanam Biji", "sulit", "Urutan menanam bunga: (1) Menyiram tanaman, (2) Memasukkan tanah ke pot, (3) Menanam biji. Urutan yang tepat adalah ...", ["(2) - (3) - (1)", "(1) - (2) - (3)", "(3) - (2) - (1)", "(2) - (1) - (3)"], 0, "Tanah dimasukkan (2) -> Biji ditanam (3) -> Disiram (1).");
addQ("bind-k1-u05", 1, "Teka-teki Benda", "sulit", "Benda ini berkaki empat, terbuat dari kayu, pasangannya meja, digunakan untuk duduk. Benda apakah itu?", ["Lemari", "Kursi", "Pintu", "Papan tulis"], 1, "Kursi digunakan untuk duduk dan pasangannya meja.");
addQ("bind-k1-u06", 1, "Teka-teki Benda Kelas", "sulit", "Aku berwarna putih atau hitam, menempel di dinding depan kelas, digunakan guru untuk menulis. Aku adalah ...", ["Jendela", "Papan tulis", "Pintu", "Foto presiden"], 1, "Papan tulis berada di depan kelas untuk menulis materi pelajaran.");
addQ("bind-k1-u07", 1, "Membedakan Kalimat Perintah", "sulit", "Kalimat yang berisi perintah atau suruhan diakhiri tanda seru adalah ...", ["Tolong tutup pintu itu!", "Apakah kamu sudah makan?", "Hari ini cuaca sangat cerah.", "Doni anak yang pintar."], 0, "Kalimat perintah meminta seseorang melakukan sesuatu dan diakhiri tanda seru (!).");
addQ("bind-k1-u08", 1, "Membedakan Kalimat Larangan", "sulit", "Kalimat larangan biasanya diawali dengan kata ...", ["Ayo", "Jangan", "Silakan", "Boleh"], 1, "Kata 'jangan' digunakan untuk melarang melakukan sesuatu.");
addQ("bind-k1-u09", 1, "Contoh Kalimat Larangan", "sulit", "Manakah di bawah ini yang merupakan kalimat larangan?", ["Jangan membuang sampah sembarangan!", "Mari kita bernyanyi bersama!", "Di mana bukumu?", "Ibu sedang memasak sup."], 0, "Diawali kata 'Jangan' yang melarang membuang sampah sembarangan.");
addQ("bind-k1-u10", 1, "Kalimat Pujian", "sulit", "Ucapan pujian yang baik saat melihat lukisan teman yang sangat indah adalah ...", ["Wah, lukisanmu bagus sekali!", "Lukisanmu biasa saja.", "Jangan melukis lagi ya.", "Ambilkan cat itu!"], 0, "Pujian disampaikan dengan sopan dan memberi semangat.");
addQ("bind-k1-u11", 1, "Kalimat Petunjuk", "sulit", "'Cucilah tanganmu dengan sabun dan air mengalir.' Kalimat tersebut termasuk jenis kalimat ...", ["Tanya", "Petunjuk", "Ajakan", "Keluhan"], 1, "Menunjukkan langkah atau cara menjaga kebersihan tangan.");
addQ("bind-k1-u12", 1, "Pemisahan Kata Berdasarkan Makna", "sulit", "Kelompok kata yang semuanya merupakan nama-nama buah adalah ...", ["Bayam, kangkung, wortel", "Mangga, apel, pisang", "Kucing, kambing, ayam", "Meja, kursi, lemari"], 1, "Mangga, apel, dan pisang adalah jenis buah-buahan.");
addQ("bind-k1-u13", 1, "Kelompok Sayuran", "sulit", "Kelompok kata yang semuanya merupakan nama sayuran adalah ...", ["Bayam, kangkung, wortel", "Jeruk, apel, pepaya", "Buku, pensil, tas", "Sapi, kerbau, kambing"], 0, "Bayam, kangkung, dan wortel adalah jenis sayuran.");
addQ("bind-k1-u14", 1, "Bunyi Hewan Ayam", "sulit", "Ayam jantan di pagi hari bersuara ...", ["Kukuruyuk", "Meong-meong", "Mbeee-mbee", "Kwek-kwek"], 0, "Ayam jantan berkokok berbunyi kukuruyuk.");
addQ("bind-k1-u15", 1, "Bunyi Hewan Kucing", "sulit", "Hewan kucing mengeong dengan bunyi suara ...", ["Mbeee-mbeee", "Meong-meong", "Kukuruyuk", "Cit-cit-cit"], 1, "Kucing bersuara meong-meong.");
addQ("bind-k1-u16", 1, "Perasaan dalam Cerita", "sulit", "Lani kehilangan boneka kesayangannya. Perasaan yang dirasakan Lani adalah ...", ["Senang", "Sedih", "Gembira", "Bangga"], 1, "Kehilangan barang kesayangan menimbulkan rasa sedih.");
addQ("bind-k1-u17", 1, "Perasaan Mendapat Hadiah", "sulit", "Edo mendapat nilai seratus dan dipuji guru. Perasaan Edo adalah ...", ["Sedih", "Gembira dan bangga", "Takut", "Marah"], 1, "Mendapat nilai bagus membuat hati gembira.");
addQ("bind-k1-u18", 1, "Melengkapi Kalimat", "sulit", "'Ibu sedang ... sayur bayam di dapur.' Kata yang tepat untuk melengkapi adalah ...", ["Menulis", "Memasak", "Mencuci piring", "Menyiram"], 1, "Ibu memasak sayur di dapur.");
addQ("bind-k1-u19", 1, "Melengkapi Kalimat", "sulit", "'Ayah ... koran di teras rumah.' Kata yang tepat untuk melengkapi kalimat tersebut adalah ...", ["Membaca", "Memotong", "Memasak", "Menyapu"], 0, "Koran adalah bahan bacaan, maka kata yang tepat membaca.");
addQ("bind-k1-u20", 1, "Melengkapi Kalimat", "sulit", "'Budi menyikat ... sebelum tidur.' Kata yang tepat untuk melengkapi adalah ...", ["Rambut", "Gigi", "Kaki", "Tangan"], 1, "Sebelum tidur kita wajib menyikat gigi agar tidak berlubang.");
addQ("bind-k1-u21", 1, "Huruf Diftong", "sulit", "Gabungan huruf vokal 'ai' terdapat pada kata ...", ["Pantai", "Pulau", "Kacau", "Harimau"], 0, "Kata pan-tai memiliki diftong 'ai' di akhir kata.");
addQ("bind-k1-u22", 1, "Huruf Diftong 'au'", "sulit", "Gabungan huruf vokal 'au' terdapat pada kata ...", ["Sungai", "Danau", "Tupai", "Rantai"], 1, "Kata da-nau diakhiri huruf diftong 'au'.");
addQ("bind-k1-u23", 1, "Kosa Kata Kerabat", "sulit", "Saudara laki-laki yang lebih tua dari kita dipanggil ...", ["Adik", "Kakak", "Paman", "Kakek"], 1, "Kakak adalah panggilan untuk saudara yang lebih tua.");
addQ("bind-k1-u24", 1, "Kosa Kata Kerabat", "sulit", "Orang tua laki-laki dari ayah atau ibu kita panggil dengan sebutan ...", ["Paman", "Kakek", "Ayah", "Abang"], 1, "Ayah dari orang tua kita adalah kakek.");
addQ("bind-k1-u25", 1, "Kosa Kata Kerabat", "sulit", "Orang tua perempuan dari ayah atau ibu kita panggil dengan sebutan ...", ["Bibi", "Nenek", "Ibu", "Kakak"], 1, "Ibu dari orang tua kita adalah nenek.");
addQ("bind-k1-u26", 1, "Sikap Mendengarkan", "sulit", "Saat teman sedang bercerita di depan kelas, sikap kita yang baik adalah ...", ["Bercanda sendiri", "Mendengarkan dengan tertib", "Tidur di meja", "Berlari ke luar"], 1, "Mendengarkan dengan tertib menghargai teman yang berbicara.");
addQ("bind-k1-u27", 1, "Penggunaan Huruf Kapital Nama Hari", "sulit", "Penulisan nama hari yang benar adalah ...", ["hari senin", "Hari senin", "hari Senin", "Hari Senin"], 3, "Nama hari diawali huruf kapital: Senin.");
addQ("bind-k1-u28", 1, "Penggunaan Huruf Kapital Kota", "sulit", "Penulisan nama kota asal yang benar adalah ...", ["jakarta", "Jakarta", "jAkarta", "jakartA"], 1, "Nama kota diawali huruf kapital: Jakarta.");
addQ("bind-k1-u29", 1, "Tanda Baca Seru", "sulit", "Tanda seru (!) digunakan pada akhir kalimat ...", ["Tanya", "Perintah", "Berita", "Biasa"], 1, "Tanda seru digunakan untuk kalimat perintah atau ajakan berseru.");
addQ("bind-k1-u30", 1, "Pesan Bersih Pangkal Pandai", "sulit", "Arti dari ungkapan 'Kebersihan pangkal kesehatan' adalah ...", ["Orang bersih pasti kaya", "Jika lingkungan bersih badan akan sehat", "Membersihkan rumah butuh uang", "Sakit karena bersih"], 1, "Lingkungan yang bersih menjauhkan kita dari penyakit sehingga badan sehat.");

console.log("Kelas 1 Bahasa Indonesia ready: " + allQuestions.length + " questions.");

fs.writeFileSync(path.join(genDir, 'indonesia_part1.json'), JSON.stringify(allQuestions, null, 2));
console.log("Indonesia part 1 written.");
