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

const part1 = JSON.parse(fs.readFileSync(path.join(genDir, 'indonesia_part1.json'), 'utf8'));
part1.forEach(q => addQ(q.id, q.grade, q.topic, q.difficulty, q.question, q.options, q.correctAnswer, q.explanation));
console.log("Loaded Kelas 1: " + allQuestions.length + " questions.");

addQ("bind-k2-m01", 2, "Huruf Kapital Awal", "mudah", "Huruf kapital selalu digunakan pada huruf pertama ...", ["Awal kalimat", "Tengah kata", "Akhir kalimat", "Setiap huruf"], 0, "Awal kalimat wajib diawali huruf kapital.");
addQ("bind-k2-m02", 2, "Huruf Kapital Nama Orang", "mudah", "Penulisan nama orang berikut yang paling tepat adalah ...", ["siti nurhaliza", "Siti Nurhaliza", "siti Nurhaliza", "Siti nurhaliza"], 1, "Nama orang ditulis diawali huruf kapital di tiap katanya.");
addQ("bind-k2-m03", 2, "Tanda Tanya", "mudah", "'Kapan paman datang dari Surabaya ...' Tanda baca yang tepat untuk mengakhiri kalimat tersebut adalah ...", ["Titik (.)", "Koma (,)", "Tanya (?)", "Seru (!)"], 2, "Kalimat tanya menanyakan waktu 'kapan' diakhiri tanda tanya (?).");
addQ("bind-k2-m04", 2, "Kata Hubung Dan", "mudah", "Kata hubung yang digunakan untuk menggabungkan dua benda setara adalah ...", ["Dan", "Tetapi", "Atau", "Karena"], 0, "Kata 'dan' menyatakan penambahan yang setara.");
addQ("bind-k2-m05", 2, "Sinonim Cantik", "mudah", "Sinonim (persamaan kata) dari kata 'cantik' adalah ...", ["Elok / Indah", "Kotor", "Buruk", "Kasar"], 0, "Cantik bermakna serupa dengan elok atau molek.");
addQ("bind-k2-m06", 2, "Sinonim Pandai", "mudah", "Sinonim dari kata 'pandai' adalah ...", ["Malas", "Pintar", "Lambat", "Bodoh"], 1, "Pandai bersinonim dengan pintar.");
addQ("bind-k2-m07", 2, "Antonim Rajin", "mudah", "Antonim (lawan kata) dari kata 'rajin' adalah ...", ["Pintar", "Malas", "Giat", "Tekun"], 1, "Lawan kata rajin adalah malas.");
addQ("bind-k2-m08", 2, "Antonim Cepat", "mudah", "Antonim dari kata 'cepat' adalah ...", ["Lambat", "Lari", "Gesit", "Tangkas"], 0, "Lawan kata cepat adalah lambat.");
addQ("bind-k2-m09", 2, "Dongeng Fabel", "mudah", "Cerita dongeng fiksi yang menceritakan kehidupan hewan yang bertingkah seperti manusia disebut cerita ...", ["Fabel", "Legenda", "Mite", "Sage"], 0, "Fabel adalah dongeng tentang binatang.");
addQ("bind-k2-m10", 2, "Dongeng Kancil", "mudah", "Dongeng 'Kancil dan Buaya' termasuk jenis dongeng ...", ["Fabel", "Sejarah", "Biografi", "Puisi"], 0, "Karena tokohnya hewan (kancil dan buaya), maka tergolong fabel.");

addQ("bind-k2-s01", 2, "Awalan me-", "sedang", "Kata dasar 'siram' jika diberi awalan me- berubah menjadi ...", ["Mesiram", "Menyiram", "Mengsiram", "Mensiram"], 1, "Awalan me- bertemu huruf 's' meluluhkan 's' menjadi meny- (menyiram).");
addQ("bind-k2-s02", 2, "Awalan me-", "sedang", "Kata dasar 'sapu' jika diberi awalan me- berubah menjadi ...", ["Mesapu", "Mensapu", "Menyapu", "Mengsapu"], 2, "Awalan me- bertemu huruf 's' menjadi meny- (menyapu).");
addQ("bind-k2-s03", 2, "Awalan me-", "sedang", "Kata dasar 'tulis' jika diberi awalan me- berubah menjadi ...", ["Metulis", "Menulis", "Mentulis", "Mengtulis"], 1, "Awalan me- bertemu huruf 't' meluluhkan 't' menjadi men- (menulis).");
addQ("bind-k2-s04", 2, "Awalan me-", "sedang", "Kata dasar 'baca' jika diberi awalan me- berubah menjadi ...", ["Membaca", "Menbaca", "Mengbaca", "Mebaca"], 0, "Awalan me- bertemu huruf 'b' menjadi mem- (membaca).");
addQ("bind-k2-s05", 2, "Kata Depan di", "sedang", "Penulisan kata depan 'di' penunjuk tempat yang benar adalah dipisah, contohnya ...", ["di rumah", "dirumah", "di-rumah", "dI rumah"], 0, "Kata depan penunjuk tempat ditulis terpisah (di rumah, di sekolah).");
addQ("bind-k2-s06", 2, "Awalan di-", "sedang", "Penulisan awalan 'di-' kata kerja pasif yang benar adalah disambung, contohnya ...", ["di tulis", "ditulis", "di - tulis", "di.tulis"], 1, "Awalan kata kerja pasif disambung serangkai (ditulis, dimakan).");
addQ("bind-k2-s07", 2, "Pesan Moral Fabel", "sedang", "Pesan kebaikan yang dapat kita tiru dari suatu cerita dinamakan ...", ["Amanat / Pesan moral", "Alur cerita", "Latar tempat", "Judul buku"], 0, "Amanat adalah pesan moral dalam cerita.");
addQ("bind-k2-s08", 2, "Sifat Tokoh Kancil", "sedang", "Dalam fabel Nusantara, Kancil biasanya digambarkan memiliki sifat yang ...", ["Cerdik banyak akal", "Bodoh dan malas", "Jahat dan serakah", "Pengecut"], 0, "Kancil dikenal sebagai tokoh cerdik yang lincah berpikir.");
addQ("bind-k2-s09", 2, "Huruf Kapital Nama Bulan", "sedang", "Penulisan nama bulan berikut yang benar adalah ...", ["bulan agustus", "bulan Agustus", "Bulan agustus", "bulan AGUSTUS"], 1, "Nama bulan diawali huruf kapital (Agustus).");
addQ("bind-k2-s10", 2, "Tanda Titik Dua Jam", "sedang", "Tanda titik digunakan untuk memisahkan jam dan menit, contoh penulisan yang tepat adalah ...", ["Pukul 07.30", "Pukul 07,30", "Pukul 07-30", "Pukul 07;30"], 0, "Pemisah jam dan menit dalam bahasa Indonesia menggunakan tanda titik (07.30).");
addQ("bind-k2-s11", 2, "Kata Hubung Tetapi", "sedang", "Kata hubung yang menyatakan perlawanan atau pertentangan adalah ...", ["Dan", "Tetapi", "Atau", "Serta"], 1, "Kata 'tetapi' menyatakan hal yang berlawanan.");
addQ("bind-k2-s12", 2, "Kalimat Tanya 'Mengapa'", "sedang", "Kata tanya yang digunakan untuk menanyakan sebab atau alasan adalah ...", ["Siapa", "Kapan", "Mengapa", "Di mana"], 2, "Kata 'mengapa' menanyakan alasan terjadinya sesuatu.");
addQ("bind-k2-s13", 2, "Kalimat Tanya 'Bagaimana'", "sedang", "Kata tanya yang digunakan untuk menanyakan cara atau keadaan adalah ...", ["Bagaimana", "Berapa", "Siapa", "Kapan"], 0, "Kata 'bagaimana' menanyakan proses cara atau kabar keadaan.");
addQ("bind-k2-s14", 2, "Ungkapan Kutu Buku", "sedang", "Ungkapan 'kutu buku' memiliki arti orang yang ...", ["Memelihara kutu", "Suka dan rajin membaca buku", "Benci membaca", "Menjual buku"], 1, "Kutu buku adalah kiasan bagi orang yang gemar membaca.");
addQ("bind-k2-s15", 2, "Ungkapan Buah Tangan", "sedang", "Ungkapan 'buah tangan' memiliki arti ...", ["Buah yang dipetik tangan", "Oleh-oleh", "Hasil kerja keras", "Anak kesayangan"], 1, "Buah tangan artinya oleh-oleh dari bepergian.");
addQ("bind-k2-s16", 2, "Ungkapan Buah Hati", "sedang", "Ungkapan 'buah hati' memiliki arti ...", ["Buah berbentuk hati", "Anak tercinta / kesayangan", "Dokter jantung", "Makanan manis"], 1, "Buah hati artinya anak kesayangan orang tua.");
addQ("bind-k2-s17", 2, "Ungkapan Rendah Hati", "sedang", "Ungkapan 'rendah hati' bermakna memiliki sifat ...", ["Sombong", "Tidak sombong / ramah", "Pengecut", "Pemurung"], 1, "Rendah hati artinya tawadhu, tidak sombong.");
addQ("bind-k2-s18", 2, "Ungkapan Besar Kepala", "sedang", "Ungkapan 'besar kepala' bermakna memiliki sifat ...", ["Sombong / angkuh", "Pintar", "Kepala pusing", "Pemberani"], 0, "Besar kepala adalah kiasan untuk orang yang sombong.");
addQ("bind-k2-s19", 2, "Puisi Anak Tema", "sedang", "Puisi yang menceritakan tentang indahnya sawah, gunung, dan sungai bertemakan ...", ["Keluarga", "Keindahan alam", "Kesehatan", "Perjuangan"], 1, "Sawah, gunung, dan sungai adalah unsur keindahan alam.");
addQ("bind-k2-s20", 2, "Rima Puisi", "sedang", "Pengulangan bunyi yang teratur dan selaras di akhir baris puisi disebut ...", ["Rima", "Judul", "Bait", "Amanat"], 0, "Rima adalah keselarasan bunyi akhir pada bait puisi.");

addQ("bind-k2-u01", 2, "Amanat Dongeng Semut dan Belalang", "sulit", "Dalam fabel 'Semut dan Belalang', semut rajin mengumpulkan makanan sedangkan belalang hanya bermalas-malasan bernyanyi. Saat musim dingin tiba, belalang kelaparan. Pesan moral dari cerita tersebut adalah ...", ["Kita harus rajin bekerja mempersiapkan masa depan", "Lebih baik bernyanyi daripada bekerja", "Musim dingin sangat menyenangkan", "Jangan berteman dengan semut"], 0, "Amanatnya adalah rajin dan bersiap diri agar tidak sengsara di masa depan.");
addQ("bind-k2-u02", 2, "Informasi Tersurat Cerita", "sulit", "Bacalah: 'Keluarga Budi pergi berlibur ke rumah nenek di Yogyakarta menggunakan kereta api pada hari Sabtu.' Kapan keluarga Budi berangkat berlibur?", ["Hari Minggu", "Hari Sabtu", "Hari Jumat", "Hari Senin"], 1, "Tertulis jelas di teks: pada hari Sabtu.");
addQ("bind-k2-u03", 2, "Informasi Tersurat Sarana", "sulit", "Berdasarkan bacaan liburan keluarga Budi tadi, alat transportasi apakah yang mereka gunakan?", ["Bus umum", "Mobil pribadi", "Kereta api", "Pesawat terbang"], 2, "Tertulis di teks menggunakan kereta api.");
addQ("bind-k2-u04", 2, "Menemukan Tokoh Antagonis", "sulit", "Tokoh dalam cerita yang memiliki sifat jahat, curang, atau menentang tokoh utama dinamakan tokoh ...", ["Protagonis", "Antagonis", "Tritagonis", "Figuran"], 1, "Antagonis adalah tokoh penentang yang berwatak jahat/buruk.");
addQ("bind-k2-u05", 2, "Menemukan Tokoh Protagonis", "sulit", "Tokoh dalam cerita yang memiliki sifat baik, jujur, dan berbudi luhur dinamakan tokoh ...", ["Protagonis", "Antagonis", "Figuran", "Sampingan"], 0, "Protagonis adalah tokoh utama berwatak baik.");
addQ("bind-k2-u06", 2, "Menyusun Paragraf Runtut", "sulit", "Urutan kalimat acak: (1) Edo mencuci tangannya, (2) Edo mengambil piring dan nasi, (3) Edo berdoa sebelum makan, (4) Edo makan dengan tertib. Urutan yang paling tepat adalah ...", ["(1) - (2) - (3) - (4)", "(2) - (1) - (3) - (4)", "(3) - (1) - (2) - (4)", "(1) - (3) - (2) - (4)"], 0, "Mencuci tangan (1) -> Mengambil makanan (2) -> Berdoa (3) -> Makan (4).");
addQ("bind-k2-u07", 2, "Menyusun Kalimat Acak Menjadi Cerita", "sulit", "Perhatikan: (1) Ayam jantan berkokok, (2) Matahari terbit di ufuk timur, (3) Lani bersiap berangkat ke sekolah. Waktu yang digambarkan dalam kalimat tersebut adalah ...", ["Pagi hari", "Siang hari", "Sore hari", "Malam hari"], 0, "Matahari terbit dan kokok ayam menandakan pagi hari.");
addQ("bind-k2-u08", 2, "Makna Kata Denotasi", "sulit", "Arti sebenarnya (makna denotasi) dari kata 'bunga' adalah ...", ["Gadis tercantik", "Bagian tumbuhan yang indah mekar dan beraroma", "Keuntungan pinjaman bank", "Uang simpanan"], 1, "Makna denotasi adalah makna sebenarnya (bagian tumbuhan).");
addQ("bind-k2-u09", 2, "Makna Kata Konotasi", "sulit", "Dalam kalimat 'Siti adalah bunga desa di kampungnya', kata 'bunga desa' bermakna kiasan yaitu ...", ["Tanaman mawar", "Gadis tercantik di desa", "Penjual bunga", "Taman bermain"], 1, "Bunga desa adalah ungkapan untuk gadis tercantik di kampung.");
addQ("bind-k2-u10", 2, "Ungkapan Ringan Tangan", "sulit", "Ungkapan 'ringan tangan' yang bermakna baik memiliki arti orang yang suka ...", ["Memukul orang", "Membantu atau menolong sesama", "Mengambil barang orang", "Bermain bulu tangkis"], 1, "Ringan tangan dalam makna positif adalah suka menolong.");
addQ("bind-k2-u11", 2, "Ungkapan Lapang Dada", "sulit", "Menerima kekalahan dalam lomba dengan ikhlas dan sabar dinamakan sikap ...", ["Besar kepala", "Lapang dada", "Keras kepala", "Tinggi hati"], 1, "Lapang dada artinya ikhlas dan berjiwa besar menerima kenyataan.");
addQ("bind-k2-u12", 2, "Penggunaan Huruf Kapital Bangsa", "sulit", "Penulisan nama bangsa dan bahasa yang benar adalah ...", ["bangsa indonesia", "Bangsa Indonesia", "bangsa Indonesia", "Bangsa indonesia"], 2, "Huruf awal nama negara/bangsa kapital: bangsa Indonesia, bahasa Indonesia.");
addQ("bind-k2-u13", 2, "Penggunaan Huruf Kapital Agama", "sulit", "Penulisan nama agama yang benar sesuai ejaan adalah ...", ["islam", "kristen", "Islam", "hindu"], 2, "Nama agama diawali huruf kapital (Islam, Kristen, Katolik, Hindu, Buddha).");
addQ("bind-k2-u14", 2, "Menemukan Gagasan Kalimat", "sulit", "Bacalah: 'Setiap hari Minggu warga Desa Sukamaju bergotong royong membersihkan selokan agar tidak banjir.' Tujuan warga bergotong royong adalah ...", ["Mencari ikan di selokan", "Mencegah terjadinya banjir", "Mendapat upah uang", "Bermain air"], 1, "Tujuannya membersihkan selokan agar tidak banjir.");
addQ("bind-k2-u15", 2, "Penyebab Banjir Teks", "sulit", "Jika selokan tersumbat oleh sampah plastik, maka akibat yang akan terjadi saat hujan lebat adalah ...", ["Udara menjadi sejuk", "Terjadi banjir", "Air menjadi jernih", "Tanaman tumbuh subur"], 1, "Sampah menyumbat aliran air mengakibatkan banjir.");
addQ("bind-k2-u16", 2, "Melengkapi Pantun Rima", "sulit", "Kalau ada jarum yang patah, jangan simpan di dalam peti. Kalau ada kata yang salah, jangan simpan di dalam ...", ["Hati", "Piring", "Buku", "Rumah"], 0, "Rima kata 'peti' bersajak sama dengan kata 'hati'.");
addQ("bind-k2-u17", 2, "Jumlah Baris Pantun", "sulit", "Satu bait pantun empat baris memiliki ... baris sampiran dan ... baris isi.", ["1 sampiran dan 3 isi", "2 sampiran dan 2 isi", "3 sampiran dan 1 isi", "Semua baris adalah isi"], 1, "Baris 1 dan 2 adalah sampiran, baris 3 dan 4 adalah isi.");
addQ("bind-k2-u18", 2, "Sajak Rima Pantun", "sulit", "Pola persajakan akhir pada pantun yang lazim adalah bersajak ...", ["a - a - a - a", "a - b - a - b", "a - a - b - b", "a - b - b - a"], 1, "Pantun pada umumnya bersajak silang a - b - a - b.");
addQ("bind-k2-u19", 2, "Kalimat Pengumuman", "sulit", "'Diberitahukan kepada seluruh siswa kelas 2 bahwa besok memakai seragam olahraga.' Kalimat tersebut termasuk teks ...", ["Surat pribadi", "Pengumuman", "Fabel", "Dongeng"], 1, "Teks pengumuman menyampaikan informasi penting kepada khalayak.");
addQ("bind-k2-u20", 2, "Maksud Kalimat Pengumuman", "sulit", "Berdasarkan pengumuman di atas, apa yang harus dipakai siswa kelas 2 besok?", ["Seragam putih merah", "Seragam pramuka", "Seragam olahraga", "Baju bebas"], 2, "Diberitahukan untuk mengenakan seragam olahraga.");
addQ("bind-k2-u21", 2, "Kata Depan 'ke'", "sulit", "Penulisan kata depan 'ke' penunjuk tujuan tempat yang tepat adalah ...", ["kesekolah", "ke sekolah", "ke-sekolah", "keSekolah"], 1, "Kata depan 'ke' penunjuk tempat ditulis terpisah (ke sekolah).");
addQ("bind-k2-u22", 2, "Kata Depan 'dari'", "sulit", "Penulisan kata depan 'dari' yang benar adalah ...", ["darirumah", "dari rumah", "dari-rumah", "da ri rumah"], 1, "Ditulis terpisah: dari rumah.");
addQ("bind-k2-u23", 2, "Membuat Kalimat Efektif", "sulit", "Manakah kalimat yang susunannya paling padu dan tidak berbelit-belit?", ["Budi kemarin kemarin sudah pergi", "Budi pergi ke perpustakaan kemarin", "Pergi perpustakaan Budi kemarin", "Ke perpustakaan kemarin pergi Budi"], 1, "Budi pergi ke perpustakaan kemarin adalah kalimat yang jelas dan efektif.");
addQ("bind-k2-u24", 2, "Tanda Baca Koma Perincian", "sulit", "Penggunaan tanda koma yang benar untuk perincian tiga benda adalah ...", ["Ibu membeli apel jeruk dan mangga.", "Ibu membeli apel, jeruk, dan mangga.", "Ibu membeli, apel jeruk dan mangga.", "Ibu, membeli apel jeruk, dan mangga."], 1, "Tanda koma diletakkan setelah tiap unsur perincian (apel, jeruk, dan mangga).");
addQ("bind-k2-u25", 2, "Kata Ganti Orang Pertama", "sulit", "Kata ganti orang pertama tunggal yang digunakan untuk menyebut diri sendiri adalah ...", ["Saya atau Aku", "Kamu atau Anda", "Dia atau Beliau", "Mereka"], 0, "Saya dan aku adalah kata ganti orang pertama tunggal.");
addQ("bind-k2-u26", 2, "Kata Ganti Orang Kedua", "sulit", "Kata ganti orang kedua yang digunakan untuk menyapa lawan bicara adalah ...", ["Saya", "Kamu atau Engkau", "Dia", "Mereka"], 1, "Kamu dan engkau adalah kata ganti orang kedua.");
addQ("bind-k2-u27", 2, "Kata Ganti Orang Ketiga Jamak", "sulit", "Kata ganti yang digunakan untuk menyebut banyak orang lain yang sedang dibicarakan adalah ...", ["Kita", "Kami", "Mereka", "Kalian"], 2, "Mereka adalah kata ganti orang ketiga jamak.");
addQ("bind-k2-u28", 2, "Mengenal Cerita Pengalaman", "sulit", "Karangan yang menceritakan peristiwa nyata yang pernah dialami sendiri oleh penulis disebut teks ...", ["Pengalaman pribadi", "Dongeng fabel", "Babad sejarah", "Teks drama"], 0, "Teks pengalaman menceritakan hal yang dialami sendiri.");
addQ("bind-k2-u29", 2, "Ungkapan Lurus Hati", "sulit", "Orang yang 'lurus hati' adalah orang yang selalu bersikap ...", ["Jujur dan dapat dipercaya", "Curang dan licik", "Suka berbohong", "Mudah marah"], 0, "Lurus hati artinya jujur.");
addQ("bind-k2-u30", 2, "Membedakan Teks Fiksi dan Nonfiksi", "sulit", "Cerita yang dibuat berdasarkan rekaan imajinasi pengarang (seperti dongeng putri duyung) tergolong karya ...", ["Nonfiksi (faktual)", "Fiksi (imajinatif)", "Ilmiah", "Berita koran"], 1, "Karya imajinasi/rekaan disebut fiksi.");

console.log("Kelas 2 Bahasa Indonesia ready: " + allQuestions.length + " questions.");

fs.writeFileSync(path.join(genDir, 'indonesia_part1_2.json'), JSON.stringify(allQuestions, null, 2));
console.log("Indonesia part 1 & 2 written.");
