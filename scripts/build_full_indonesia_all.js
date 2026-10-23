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

const part12 = JSON.parse(fs.readFileSync(path.join(genDir, 'indonesia_part1_2.json'), 'utf8'));
part12.forEach(q => addQ(q.id, q.grade, q.topic, q.difficulty, q.question, q.options, q.correctAnswer, q.explanation));
console.log("Loaded Kelas 1 & 2: " + allQuestions.length + " questions.");

addQ("bind-k3-m01", 3, "Ide Pokok", "mudah", "Gagasan utama atau inti pembahasan dalam sebuah paragraf disebut ...", ["Ide pokok", "Kalimat penjelas", "Judul buku", "Amanat"], 0, "Ide pokok adalah gagasan inti yang menjadi dasar pengembangan paragraf.");
addQ("bind-k3-m02", 3, "Teks Petunjuk Sederhana", "mudah", "Teks yang berisi urutan langkah-langkah membuat atau melakukan sesuatu dinamakan teks ...", ["Petunjuk / Prosedur", "Dongeng", "Puisi", "Deskripsi"], 0, "Teks petunjuk atau prosedur memuat langkah-langkah kerja berurutan.");
addQ("bind-k3-m03", 3, "Awalan ber-", "mudah", "Kata dasar 'lari' jika diberi awalan ber- berubah menjadi ...", ["Belari", "Berlari", "Menglari", "Terlari"], 1, "Awalan ber- + lari menjadi berlari.");
addQ("bind-k3-m04", 3, "Awalan ber-", "mudah", "Kata dasar 'ajar' jika diberi awalan ber- berubah menjadi bentuk khusus yaitu ...", ["Berajar", "Belajar", "Melajar", "Pelajar"], 1, "Awalan ber- + ajar berubah menjadi belajar (huruf r meluluh menjadi l).");
addQ("bind-k3-m05", 3, "Kalimat Efektif", "mudah", "Kalimat yang susunannya rapi, mudah dipahami, dan tidak bertele-tele disebut kalimat ...", ["Efektif", "Panjang", "Berbelit", "Rancu"], 0, "Kalimat efektif adalah kalimat yang hemat kata dan jelas maknanya.");
addQ("bind-k3-m06", 3, "Tanda Koma dalam Kalimat", "mudah", "Tanda koma (,) di dalam kalimat berfungsi untuk ...", ["Mengakhiri kalimat", "Memisahkan perincian atau jeda membaca", "Menanyakan kabar", "Menyatakan perintah"], 1, "Tanda koma memberikan jeda dan memisahkan unsur perincian.");
addQ("bind-k3-m07", 3, "Kata Baku Izin", "mudah", "Penulisan kata baku yang benar menurut KBBI adalah ...", ["Ijin", "Izin", "Idzin", "Isin"], 1, "Bentuk baku menurut Kamus Besar Bahasa Indonesia adalah 'izin'.");
addQ("bind-k3-m08", 3, "Kata Baku Antre", "mudah", "Penulisan kata baku yang benar saat berbaris menunggu giliran adalah ...", ["Antri", "Antre", "Antree", "Ngantri"], 1, "Bentuk baku menurut KBBI adalah 'antre'.");
addQ("bind-k3-m09", 3, "Kata Tanya 'Kapan'", "mudah", "Kata tanya yang digunakan untuk menanyakan waktu terjadinya suatu peristiwa adalah ...", ["Di mana", "Kapan", "Siapa", "Mengapa"], 1, "Kata 'kapan' digunakan untuk menanyakan waktu (jam, hari, tanggal).");
addQ("bind-k3-m10", 3, "Lawan Kata Rajin Kelas 3", "mudah", "Antonim dari kata 'hemat' dalam menggunakan uang jajan adalah ...", ["Kikir", "Boros", "Pelit", "Rajin"], 1, "Lawan kata hemat adalah boros.");

addQ("bind-k3-s01", 3, "Rumus ADIKSIMBA", "sedang", "Kata tanya yang digunakan dalam wawancara dikenal dengan singkatan ADIKSIMBA. Huruf 'M' adalah kata tanya ...", ["Mana", "Mengapa", "Melihat", "Menulis"], 1, "M dalam ADIKSIMBA singkatan dari Mengapa.");
addQ("bind-k3-s02", 3, "Kata Tanya 'Bagaimana'", "sedang", "Dalam wawancara mengenai cara merawat tanaman, kata tanya yang tepat untuk menanyakan proses adalah ...", ["Siapa", "Bagaimana", "Berapa", "Kapan"], 1, "Kata 'bagaimana' menanyakan proses dan cara kerja.");
addQ("bind-k3-s03", 3, "Laporan Pengamatan", "sedang", "Teks yang ditulis setelah melihat dan mengamati suatu objek secara langsung disebut teks ...", ["Laporan hasil pengamatan", "Cerita rekaan", "Surat pribadi", "Dongeng fiksi"], 0, "Laporan observasi disusun berdasarkan fakta pengamatan langsung.");
addQ("bind-k3-s04", 3, "Sifat Laporan Pengamatan", "sedang", "Laporan hasil pengamatan harus memuat informasi yang bersifat ...", ["Faktual dan nyata", "Khayalan belaka", "Bohong", "Opini pribadi"], 0, "Harus bersifat faktual (sesuai kenyataan yang diamati).");
addQ("bind-k3-s05", 3, "Paragraf Deduktif", "sedang", "Paragraf yang kalimat utamanya terletak di awal paragraf dinamakan paragraf ...", ["Deduktif", "Induktif", "Campuran", "Deskriptif"], 0, "Paragraf deduktif memiliki gagasan utama di awal paragraf.");
addQ("bind-k3-s06", 3, "Paragraf Induktif", "sedang", "Paragraf yang kalimat utamanya terletak di akhir paragraf dinamakan paragraf ...", ["Deduktif", "Induktif", "Ineratif", "Narasi"], 1, "Paragraf induktif memiliki kesimpulan/kalimat utama di akhir.");
addQ("bind-k3-s07", 3, "Wawancara Sopan", "sedang", "Orang yang kita mintai keterangan atau informasi dalam kegiatan wawancara disebut ...", ["Pewawancara", "Narasumber", "Wartawan", "Penonton"], 1, "Narasumber adalah orang yang memberi informasi.");
addQ("bind-k3-s08", 3, "Sikap Mewawancarai", "sedang", "Saat mewawancarai narasumber yang lebih tua, sikap dan bahasa kita harus ...", ["Mendesak dan keras", "Santun dan berbahasa sopan", "Bercanda berlebihan", "Sambil makan"], 1, "Wajib menggunakan bahasa santun dan sikap hormat.");
addQ("bind-k3-s09", 3, "Sinonim Target", "sedang", "Sinonim dari kata 'sasaran' adalah ...", ["Tujuan / Target", "Tempat", "Waktu", "Asal"], 0, "Sasaran bermakna sama dengan tujuan atau target.");
addQ("bind-k3-s10", 3, "Antonim Ramai", "sedang", "Antonim dari suasana pasar yang 'ramai' adalah ...", ["Bising", "Sunyi / Sepi", "Padat", "Ribut"], 1, "Lawan kata ramai adalah sepi atau sunyi.");
addQ("bind-k3-s11", 3, "Kata Baku Praktik", "sedang", "Penulisan kata baku yang benar saat melakukan percobaan IPA adalah ...", ["Praktek", "Praktik", "Praktis", "Praktekkan"], 1, "Bentuk baku menurut KBBI adalah 'praktik'.");
addQ("bind-k3-s12", 3, "Kata Baku Nasihat", "sedang", "Penulisan kata baku yang benar untuk petuah kebaikan dari orang tua adalah ...", ["Nasehat", "Nasihat", "Nasehatin", "Nasihatkan"], 1, "Bentuk baku menurut KBBI adalah 'nasihat'.");
addQ("bind-k3-s13", 3, "Awalan me- pada Huruf P", "sedang", "Kata dasar 'pegang' jika diberi awalan me- berubah menjadi ...", ["Mepegang", "Memegang", "Mengpegang", "Menpegang"], 1, "Awalan me- bertemu huruf 'p' meluluhkan 'p' menjadi mem- (memegang).");
addQ("bind-k3-s14", 3, "Awalan me- pada Huruf K", "sedang", "Kata dasar 'kirim' jika diberi awalan me- berubah menjadi ...", ["Mekirim", "Mengirim", "Menkirim", "Memkirim"], 1, "Awalan me- bertemu huruf 'k' meluluhkan 'k' menjadi meng- (mengirim).");
addQ("bind-k3-s15", 3, "Imbuhan Akhiran -an", "sedang", "Kata 'tulis' jika diberi akhiran -an berubah menjadi ...", ["Tuliskan", "Tulisan", "Penulis", "Menulis"], 1, "Tulis + -an menjadi tulisan (makna hasil pekerjaan).");
addQ("bind-k3-s16", 3, "Imbuhan Akhiran -kan", "sedang", "Kata 'ambil' jika mendapat akhiran -kan pada kalimat perintah menjadi ...", ["Ambilan", "Ambilkan", "Pengambil", "Mengambil"], 1, "Ambilkan penggaris itu! (akhiran -kan menyatakan perintah).");
addQ("bind-k3-s17", 3, "Kalimat Ajakan Hemat Energi", "sedang", "Contoh kalimat ajakan untuk menghemat energi listrik yang tepat adalah ...", ["Matikan lampu saat tidak digunakan!", "Ayo, matikan lampu saat siang hari!", "Jangan boros listrik!", "Lampu kamar sangat terang."], 1, "Diawali kata 'Ayo' yang mengajak mematikan lampu.");
addQ("bind-k3-s18", 3, "Ungkapan Kepala Dingin", "sedang", "Menyelesaikan masalah dengan 'kepala dingin' memiliki arti menyelesaikan dengan ...", ["Mengompres kepala dengan es", "Sabar dan tenang", "Marah-marah", "Berteriak keras"], 1, "Kepala dingin artinya tenang, sabar, dan tidak terpancing emosi.");
addQ("bind-k3-s19", 3, "Ungkapan Kaki Tangan", "sedang", "Ungkapan 'kaki tangan' memiliki arti kiasan yaitu ...", ["Alat gerak tubuh", "Orang kepercayaan yang membantu", "Sepatu dan sarung tangan", "Tukang pijat"], 1, "Kaki tangan adalah orang kepercayaan atau pembantu setia.");
addQ("bind-k3-s20", 3, "Menentukan Kalimat Utama", "sedang", "Bacalah: 'Kucing adalah hewan peliharaan yang menggemaskan. Bulunya yang halus membuat banyak orang senang mengelusnya. Tingkahnya yang lincah juga sangat menghibur.' Kalimat utama paragraf tersebut terletak di ...", ["Awal paragraf", "Akhir paragraf", "Tengah paragraf", "Di semua kalimat"], 0, "Kalimat pertama (Kucing adalah hewan peliharaan yang menggemaskan) adalah kalimat utama deduktif.");

addQ("bind-k3-u01", 3, "Dongeng Legenda", "sulit", "Cerita rakyat yang mengisahkan asal-usul terjadinya suatu tempat atau bentang alam (seperti Danau Toba) disebut ...", ["Legenda", "Fabel", "Mite", "Sage"], 0, "Legenda menceritakan asal-usul terjadinya suatu tempat.");
addQ("bind-k3-u02", 3, "Asal-usul Tangkuban Perahu", "sulit", "Cerita rakyat Jawa Barat tentang Sangkuriang dan Dayang Sumbi berkaitan dengan legenda terbentuknya ...", ["Gunung Tangkuban Perahu", "Danau Singkarak", "Candi Prambanan", "Rawa Pening"], 0, "Legenda Sangkuriang melatari asal-usul Gunung Tangkuban Perahu.");
addQ("bind-k3-u03", 3, "Amanat Cerita Bawang Putih", "sulit", "Dalam dongeng 'Bawang Merah dan Bawang Putih', Bawang Putih yang sabar dan rajin akhirnya hidup bahagia, sedangkan Bawang Merah yang tamak celaka. Pesan moralnya adalah ...", ["Kebaikan dan ketulusan akan selalu berbuah manis", "Kita harus meniru sifat Bawang Merah", "Orang malas pasti beruntung", "Iri hati membawa kebaikan"], 0, "Amanatnya kesabaran dan kebaikan budi akan membuahkan kebahagiaan.");
addQ("bind-k3-u04", 3, "Paragraf Rumpang", "sulit", "Lengkapilah: 'Matahari mulai terbit di ufuk timur. Udara pagi terasa sangat ... Burung-burung berkicau riang menyambut pagi.' Kata yang tepat untuk mengisi rumpang adalah ...", ["Panas menyengat", "Segar dan sejuk", "Gelap gulita", "Mendung berdebu"], 1, "Pagi hari udara terasa segar dan sejuk.");
addQ("bind-k3-u05", 3, "Kalimat Sumbang", "sulit", "Paragraf: (1) Halaman sekolah kami sangat bersih. (2) Murid-murid rajin menyapu daun gugur setiap pagi. (3) Harga beras di pasar sedang naik. (4) Guru-guru pun bangga dengan kebersihan sekolah. Kalimat yang sumbang (tidak padu) adalah nomor ...", ["(1)", "(2)", "(3)", "(4)"], 2, "Kalimat (3) tentang harga beras di pasar tidak berkaitan dengan kebersihan sekolah.");
addQ("bind-k3-u06", 3, "Struktur Wawancara Runtut", "sulit", "Urutan tahapan wawancara yang benar adalah ...", ["Menentukan topik -> Menghubungi narasumber -> Melakukan wawancara -> Menulis laporan", "Menulis laporan -> Wawancara -> Bertanya", "Langsung wawancara tanpa izin narasumber", "Menyusun pertanyaan setelah selesai wawancara"], 0, "Dimulai dari menentukan topik hingga menyusun laporan akhir.");
addQ("bind-k3-u07", 3, "Menyusun Teks Petunjuk Membuat Teh", "sulit", "Langkah membuat teh manis: (1) Masukkan teh celup dan gula ke cangkir, (2) Tuangkan air panas ke cangkir, (3) Aduk perlahan hingga gula larut, (4) Teh manis siap dinikmati. Urutan yang paling logis adalah ...", ["(1) - (2) - (3) - (4)", "(2) - (1) - (4) - (3)", "(4) - (3) - (2) - (1)", "(1) - (3) - (2) - (4)"], 0, "Bahan dimasukkan -> Air panas dituangkan -> Diaduk -> Siap dinikmati.");
addQ("bind-k3-u08", 3, "Petunjuk Menyalakan Kipas Angin", "sulit", "Petunjuk memakai kipas angin: (1) Colokkan kabel ke stopkontak, (2) Tekan tombol angka kecepatan kipas, (3) Cabut kabel jika sudah selesai digunakan. Manakah tindakan pertama yang wajib dilakukan?", ["Tekan tombol putar", "Colokkan kabel ke stopkontak", "Cabut kabel", "Pukul kipas angin"], 1, "Langkah awal mengalirkan listrik dengan mencolokkan kabel.");
addQ("bind-k3-u09", 3, "Watak Tokoh Dongeng", "sulit", "Jika tokoh cerita selalu membagi makanannya kepada teman yang kelaparan tanpa pamrih, maka tokoh tersebut berwatak ...", ["Darmawan dan penolong", "Kikir dan pelit", "Pengecut", "Sombong"], 0, "Suka berbagi tanpa pamrih adalah watak dermawan dan penolong.");
addQ("bind-k3-u10", 3, "Latar Waktu dalam Cerita", "sulit", "'Bintang-bintang bertaburan di angkasa, lampu-lampu jalan mulai menyala menerangi kegelapan.' Latar waktu kutipan cerita tersebut adalah ...", ["Pagi hari", "Siang hari", "Malam hari", "Tengah hari bolong"], 2, "Bintang dan lampu jalan menyala di kegelapan menandakan malam hari.");
addQ("bind-k3-u11", 3, "Latar Tempat dalam Cerita", "sulit", "'Ombak berdebur membasahi pasir putih. Terlihat perahu-perahu nelayan berjejer di tepian.' Latar tempat cerita tersebut adalah ...", ["Hutan lindung", "Pantai tepi laut", "Puncak gunung", "Kebun binatang"], 1, "Ombak, pasir putih, dan perahu nelayan adalah latar pantai.");
addQ("bind-k3-u12", 3, "Latar Suasana dalam Cerita", "sulit", "'Suara petir menggelegar bersahut-sahutan. Angin kencang menggoyang pepohonan hingga roboh. Warga berlarian mencari perlindungan.' Latar suasana cerita tersebut adalah ...", ["Ceria dan damai", "Mencekam dan menegangkan", "Gembira ria", "Sepi tenteram"], 1, "Petir menggelegar dan angin kencang menimbulkan suasana mencekam/tegang.");
addQ("bind-k3-u13", 3, "Majas Personifikasi Sederhana", "sulit", "Kalimat 'Angin malam berbisik lembut menyapa tubuhku' menggunakan gaya bahasa yang menyamakan benda mati seperti manusia, yaitu majas ...", ["Personifikasi", "Metafora", "Hiperbola", "Litotes"], 0, "Angin seolah bisa berbisik seperti manusia (majas personifikasi).");
addQ("bind-k3-u14", 3, "Menemukan Ciri Personifikasi", "sulit", "Manakah kalimat berikut yang mengandung majas personifikasi?", ["Matahari tersenyum hangat menyapa bumi di pagi hari.", "Ibu memasak nasi goreng di wajan.", "Budi mengendarai sepeda motor baru.", "Buku tulis itu berwarna biru."], 0, "Matahari diibaratkan bisa tersenyum menyapa bumi.");
addQ("bind-k3-u15", 3, "Fakta dalam Kalimat", "sulit", "Pernyataan di bawah ini yang merupakan FAKTA nyata yang tidak dapat dibantah adalah ...", ["Matahari terbit dari sebelah timur.", "Es teh manis adalah minuman paling enak di dunia.", "Kucing adalah hewan yang paling lucu.", "Baju warna merah terlihat sangat gagah."], 0, "Matahari terbit dari timur adalah hukum alam nyata (fakta).");
addQ("bind-k3-u16", 3, "Opini dalam Kalimat", "sulit", "Pernyataan di bawah ini yang merupakan OPINI (pendapat pribadi) adalah ...", ["Indonesia memiliki wilayah dari Sabang sampai Merauke.", "Satu tahun terdiri dari dua belas bulan.", "Pemandangan pantai ini adalah yang terindah di Indonesia.", "Gula pasir rasanya manis."], 2, "'Terindah' adalah penilaian selera subjektif (opini).");
addQ("bind-k3-u17", 3, "Peribahasa Air Tenang", "sulit", "Arti peribahasa 'Air tenang menghanyutkan' adalah orang yang pendiam biasanya ...", ["Suka berenang", "Memiliki kepintaran atau kemampuan yang mengejutkan", "Suka marah-marah", "Tidak bisa berbicara"], 1, "Maknanya orang yang pendiam namun berilmu dalam.");
addQ("bind-k3-u18", 3, "Peribahasa Tong Kosong", "sulit", "Arti peribahasa 'Tong kosong nyaring bunyinya' adalah ...", ["Tong yang tidak ada isinya bunyinya merdu", "Orang yang sombong banyak bicara hakikatnya tidak berilmu", "Tong besi sangat berat", "Alat musik drum yang nyaring"], 1, "Orang yang banyak sesumbar biasanya ilmunya sedikit.");
addQ("bind-k3-u19", 3, "Menyunting Kalimat Tidak Baku", "sulit", "Kalimat yang menggunakan kata baku secara tepat adalah ...", ["Ibu membeli obat batuk di apotek resmi.", "Ibu membeli obat batuk di apotik resmi.", "Ibu membeli obat batuk di apotik resmy.", "Ibu beli obat batuk di apotik."], 0, "Kata yang baku menurut KBBI adalah 'apotek'.");
addQ("bind-k3-u20", 3, "Kata Baku Zaman", "sulit", "Kalimat dengan penulisan kata baku yang benar adalah ...", ["Pada jaman dahulu hidup seorang raja adil.", "Pada zaman dahulu hidup seorang raja adil.", "Pada jaman dulu hidup seorang raja adil.", "Pada jamann dahulu hidup seorang raja adil."], 1, "Bentuk baku adalah 'zaman' (menggunakan huruf z).");
addQ("bind-k3-u21", 3, "Kata Baku Cokelat", "sulit", "Penulisan kata baku yang benar untuk makanan manis dari biji kakao adalah ...", ["Coklat", "Cokelat", "Coklet", "Coklatt"], 1, "Bentuk baku menurut KBBI adalah 'cokelat'.");
addQ("bind-k3-u22", 3, "Kata Depan vs Awalan di-", "sulit", "Manakah penulisan kata berawalan dan kata depan yang tepat?", ["Buku itu ditaruh di atas meja belajar.", "Buku itu di taruh diatas meja belajar.", "Buku itu ditaruh diatas meja belajar.", "Buku itu di taruh di atas meja belajar."], 0, "'ditaruh' disambung (awalan kata kerja), 'di atas' dipisah (kata depan tempat).");
addQ("bind-k3-u23", 3, "Ungkapan Rendah Diri vs Rendah Hati", "sulit", "Perbedaan antara ungkapan 'rendah hati' dan 'rendah diri' adalah ...", ["Rendah hati tidak sombong, rendah diri minder/kurang percaya diri", "Keduanya bermakna sama persis", "Rendah hati sombong, rendah diri pintar", "Rendah diri rajin, rendah hati malas"], 0, "Rendah hati sifat positif (tawadhu), rendah diri sifat minder/kurang percaya diri.");
addQ("bind-k3-u24", 3, "Ungkapan Darah Dingin", "sulit", "Melakukan sesuatu tanpa rasa belas kasihan dinamakan bersikap ...", ["Darah manis", "Darah dingin", "Darah muda", "Darah biru"], 1, "Darah dingin artinya tidak memiliki rasa kasihan atau tega berbuat kejam.");
addQ("bind-k3-u25", 3, "Ungkapan Darah Biru", "sulit", "Ungkapan 'darah biru' disematkan untuk orang yang merupakan keturunan ...", ["Nelayan", "Bangsawan / Raja", "Pedagang pasar", "Petani"], 1, "Darah biru adalah kiasan bagi keluarga bangsawan atau keraton.");
addQ("bind-k3-u26", 3, "Tanda Titik Dua (:)", "sulit", "Tanda titik dua (:) digunakan pada akhir suatu pernyataan lengkap yang diikuti ...", ["Tanda seru", "Pemerincian atau penjelasan", "Tanda tanya", "Kata sambung"], 1, "Titik dua dipakai sebelum perincian atau pembagian dialog naskah.");
addQ("bind-k3-u27", 3, "Teks Percakapan Drama", "sulit", "Dalam penulisan naskah drama, nama tokoh yang berbicara diikuti oleh tanda baca ...", ["Titik (.)", "Koma (,)", "Titik dua (:)", "Tanya (?)"], 2, "Contoh: Doni: 'Ayo kita belajar bersama!' menggunakan tanda titik dua.");
addQ("bind-k3-u28", 3, "Antonim Kata Abstrak", "sulit", "Lawan kata (antonim) dari kata 'nyata / konkret' adalah ...", ["Maya / Abstrak", "Jelas", "Padat", "Terlihat"], 0, "Lawan kata konkret adalah abstrak atau semu.");
addQ("bind-k3-u29", 3, "Kata Baku Sistem", "sulit", "Penulisan kata baku yang tepat adalah ...", ["Sistim", "Sistem", "Sistym", "Sistemik"], 1, "Bentuk baku menurut KBBI adalah 'sistem'.");
addQ("bind-k3-u30", 3, "Pesan Moral Fabel Gagak dan Kendi", "sulit", "Burung gagak yang haus ingin minum air di kendi berleher sempit. Ia mengumpulkan kerikil satu per satu hingga air naik. Pelajaran penting dari fabel ini adalah ...", ["Kita harus pantang menyerah dan menggunakan akal cerdik mencari jalan keluar", "Jangan minum air kendi", "Burung tidak boleh haus", "Kerikil itu kotor"], 0, "Ketekunan, kesabaran, dan kecerdasan mampu memecahkan masalah sulit.");

console.log("Kelas 3 Bahasa Indonesia ready: " + allQuestions.length + " questions.");

fs.writeFileSync(path.join(genDir, 'indonesia_part1_3.json'), JSON.stringify(allQuestions, null, 2));
