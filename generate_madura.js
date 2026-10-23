const fs = require('fs');
const path = require('path');

const MADURA_DATA = {
  1: {
    mudah: [
      {
        topic: "Wilangan (Angka)",
        question: "Bhasa Madurana angka 1 (satu) iya areya ...",
        options: ["Settong", "Dhuwa'", "Tello'", "Empa'"],
        correctAnswer: 0,
        explanation: "Angka 1 dhalem bhasa Madura iya areya 'settong'."
      },
      {
        topic: "Wilangan (Angka)",
        question: "Bhasa Madurana angka 2 (dua) iya areya ...",
        options: ["Settong", "Dhuwa'", "Lema'", "Ennem"],
        correctAnswer: 1,
        explanation: "Angka 2 dhalem bhasa Madura iya areya 'dhuwa''."
      },
      {
        topic: "Wilangan (Angka)",
        question: "Bhasa Madurana angka 3 (tiga) iya areya ...",
        options: ["Tello'", "Dhuwa'", "Empa'", "Petto'"],
        correctAnswer: 0,
        explanation: "Angka 3 dhalem bhasa Madura iya areya 'tello''."
      },
      {
        topic: "Wilangan (Angka)",
        question: "Bhasa Madurana angka 4 (empat) iya areya ...",
        options: ["Tello'", "Empa'", "Lema'", "Ballu'"],
        correctAnswer: 1,
        explanation: "Angka 4 dhalem bhasa Madura iya areya 'empa''."
      },
      {
        topic: "Wilangan (Angka)",
        question: "Bhasa Madurana angka 5 (lima) iya areya ...",
        options: ["Dhuwa'", "Empa'", "Lema'", "Sanga'"],
        correctAnswer: 2,
        explanation: "Angka 5 dhalem bhasa Madura iya areya 'lema''."
      },
      {
        topic: "Barna (Warna)",
        question: "Barna 'pote' dhalem bhasa Indonesia artena barna ...",
        options: ["Putih", "Hitam", "Merah", "Kuning"],
        correctAnswer: 0,
        explanation: "Pote dhalem bhasa Indonesia artena putih."
      },
      {
        topic: "Barna (Warna)",
        question: "Barna 'celleng' dhalem bhasa Indonesia artena barna ...",
        options: ["Merah", "Hitam", "Biru", "Putih"],
        correctAnswer: 1,
        explanation: "Celleng dhalem bhasa Indonesia artena hitam."
      },
      {
        topic: "Barna (Warna)",
        question: "Barna 'mera' dhalem bhasa Indonesia artena barna ...",
        options: ["Hijau", "Kuning", "Merah", "Hitam"],
        correctAnswer: 2,
        explanation: "Mera dhalem bhasa Indonesia artena merah."
      },
      {
        topic: "Kaluwarga (Keluarga)",
        question: "Sebutan kaangghuy ibu dhalem bhasa Madura iya areya ...",
        options: ["Embu' / Ebu", "Eppa'", "Kae", "Nyai"],
        correctAnswer: 0,
        explanation: "Panggilan kaangghuy ibu iya areya embu' otaba ebu."
      },
      {
        topic: "Kaluwarga (Keluarga)",
        question: "Sebutan kaangghuy ayah dhalem bhasa Madura iya areya ...",
        options: ["Kae", "Eppa' / Rama", "Kaka'", "Ale'"],
        correctAnswer: 1,
        explanation: "Panggilan kaangghuy ayah iya areya eppa' otaba rama."
      }
    ],
    sedang: [
      {
        topic: "Anggota Badan",
        question: "Bhasa Madura alos (engghi-bhunten) kaangghuy 'mata' iya areya ...",
        options: ["Soca", "Kopeng", "Elong", "Cangkem"],
        correctAnswer: 0,
        explanation: "Oca' alos engghi-bhunten dhari mata iya areya 'soca'."
      },
      {
        topic: "Anggota Badan",
        question: "Oca' 'kopeng' dhalem bhasa Indonesia artena ...",
        options: ["Mata", "Telinga", "Hidung", "Mulut"],
        correctAnswer: 1,
        explanation: "Kopeng artena telinga."
      },
      {
        topic: "Anggota Badan",
        question: "Oca' 'elong' dhalem bhasa Indonesia artena ...",
        options: ["Telinga", "Mata", "Hidung", "Mulut"],
        correctAnswer: 2,
        explanation: "Elong artena hidung."
      },
      {
        topic: "Anggota Badan",
        question: "Oca' 'tanang' dhalem bhasa Indonesia artena ...",
        options: ["Tangan", "Kaki", "Kepala", "Perut"],
        correctAnswer: 0,
        explanation: "Tanang artena tangan."
      },
      {
        topic: "Anggota Badan",
        question: "Oca' 'soko' dhalem bhasa Indonesia artena ...",
        options: ["Tangan", "Kaki", "Lutut", "Jari"],
        correctAnswer: 1,
        explanation: "Soko artena kaki."
      },
      {
        topic: "Anggota Badan",
        question: "Oca' 'cangkem' dhalem bhasa Indonesia artena ...",
        options: ["Pipi", "Leher", "Mulut", "Lidah"],
        correctAnswer: 2,
        explanation: "Cangkem artena mulut."
      },
      {
        topic: "Wilangan (Angka)",
        question: "Bhasa Madurana angka 6 (enam) iya areya ...",
        options: ["Ennem", "Petto'", "Ballu'", "Sanga'"],
        correctAnswer: 0,
        explanation: "Angka 6 iya areya 'ennem'."
      },
      {
        topic: "Wilangan (Angka)",
        question: "Bhasa Madurana angka 7 (tujuh) iya areya ...",
        options: ["Ennem", "Petto'", "Ballu'", "Sapolo"],
        correctAnswer: 1,
        explanation: "Angka 7 iya areya 'petto''."
      },
      {
        topic: "Wilangan (Angka)",
        question: "Bhasa Madurana angka 8 (delapan) iya areya ...",
        options: ["Petto'", "Ennem", "Ballu'", "Sanga'"],
        correctAnswer: 2,
        explanation: "Angka 8 iya areya 'ballu''."
      },
      {
        topic: "Wilangan (Angka)",
        question: "Bhasa Madurana angka 9 (sembilan) iya areya ...",
        options: ["Ballu'", "Petto'", "Ennem", "Sanga'"],
        correctAnswer: 3,
        explanation: "Angka 9 iya areya 'sanga''."
      },
      {
        topic: "Wilangan (Angka)",
        question: "Bhasa Madurana angka 10 (sepuluh) iya areya ...",
        options: ["Sapolo", "Salekor", "Salawe", "Sekket"],
        correctAnswer: 0,
        explanation: "Angka 10 iya areya 'sapolo'."
      },
      {
        topic: "Barna (Warna)",
        question: "Barna 'koneng' dhalem bhasa Indonesia artena barna ...",
        options: ["Hijau", "Kuning", "Biru", "Cokelat"],
        correctAnswer: 1,
        explanation: "Koneng dhalem bhasa Indonesia artena kuning."
      },
      {
        topic: "Barna (Warna)",
        question: "Barna 'bhiru' dhalem bhasa Indonesia artena barna ...",
        options: ["Merah", "Kuning", "Biru", "Hitam"],
        correctAnswer: 2,
        explanation: "Bhiru dhalem bhasa Indonesia artena biru."
      },
      {
        topic: "Barna (Warna)",
        question: "Barna 'bhiru daun' dhalem bhasa Indonesia artena barna ...",
        options: ["Hijau daun", "Biru langit", "Kuning muda", "Ungu"],
        correctAnswer: 0,
        explanation: "Bhiru daun artena barna hijau."
      },
      {
        topic: "Kaluwarga (Keluarga)",
        question: "Sebutan kaangghuy kakek dhalem bhasa Madura iya areya ...",
        options: ["Nyai", "Kae", "Paman", "Eppa'"],
        correctAnswer: 1,
        explanation: "Sebutan kaangghuy kakek iya areya 'kae'."
      },
      {
        topic: "Kaluwarga (Keluarga)",
        question: "Sebutan kaangghuy nenek dhalem bhasa Madura iya areya ...",
        options: ["Kae", "Embu'", "Nyai", "Ale'"],
        correctAnswer: 2,
        explanation: "Sebutan kaangghuy nenek iya areya 'nyai'."
      },
      {
        topic: "Kaluwarga (Keluarga)",
        question: "Sebutan kaangghuy adik dhalem bhasa Madura iya areya ...",
        options: ["Ale'", "Kaka'", "Kae", "Nyai"],
        correctAnswer: 0,
        explanation: "Ale' artena adik dhalem bhasa Madura."
      },
      {
        topic: "Kaluwarga (Keluarga)",
        question: "Sebutan kaangghuy kakak dhalem bhasa Madura iya areya ...",
        options: ["Ale'", "Kaka'", "Eppa'", "Embu'"],
        correctAnswer: 1,
        explanation: "Kaka' artena kakak."
      },
      {
        topic: "Sasapaan (Sapaan)",
        question: "Ungkapan 'Salamet lagghu' dhalem bhasa Indonesia artena ...",
        options: ["Selamat malam", "Selamat siang", "Selamat pagi", "Selamat tidur"],
        correctAnswer: 2,
        explanation: "Salamet lagghu eocapagi bakto lagghu (selamat pagi)."
      },
      {
        topic: "Sasapaan (Sapaan)",
        question: "Ungkapan 'Salamet siang' dhalem bhasa Indonesia artena ...",
        options: ["Selamat pagi", "Selamat malam", "Selamat sore", "Selamat siang"],
        correctAnswer: 3,
        explanation: "Salamet siang eocapagi bakto siang."
      }
    ],
    sulit: [
      {
        topic: "Oca' Alos (Engghi-Bhunten)",
        question: "Bhasa alos (engghi-bhunten) kaangghuy 'tanang' (tangan) iya areya ...",
        options: ["Asta", "Padha", "Soca", "Kending"],
        correctAnswer: 0,
        explanation: "Tanang alossa daddi 'asta'."
      },
      {
        topic: "Oca' Alos (Engghi-Bhunten)",
        question: "Bhasa alos (engghi-bhunten) kaangghuy 'soko' (kaki) iya areya ...",
        options: ["Asta", "Padha", "Lesan", "Elong"],
        correctAnswer: 1,
        explanation: "Soko alossa daddi 'padha'."
      },
      {
        topic: "Oca' Alos (Engghi-Bhunten)",
        question: "Bhasa alos (engghi-bhunten) kaangghuy 'kopeng' (telinga) iya areya ...",
        options: ["Soca", "Asta", "Kending", "Pangambung"],
        correctAnswer: 2,
        explanation: "Kopeng alossa daddi 'kending'."
      },
      {
        topic: "Oca' Alos (Engghi-Bhunten)",
        question: "Bhasa alos (engghi-bhunten) kaangghuy 'elong' (hidung) iya areya ...",
        options: ["Pangambung", "Lesan", "Padha", "Soca"],
        correctAnswer: 0,
        explanation: "Elong alossa daddi 'pangambung'."
      },
      {
        topic: "Oca' Alos (Engghi-Bhunten)",
        question: "Bhasa alos (engghi-bhunten) kaangghuy 'cangkem' (mulut) iya areya ...",
        options: ["Asta", "Lesan", "Kending", "Padha"],
        correctAnswer: 1,
        explanation: "Cangkem alossa daddi 'lesan'."
      },
      {
        topic: "Kosa Oca'",
        question: "Oca' 'tedhung' dhalem bhasa Indonesia artena ...",
        options: ["Makan", "Minum", "Tidur", "Berjalan"],
        correctAnswer: 2,
        explanation: "Tedhung artena tidur."
      },
      {
        topic: "Kosa Oca'",
        question: "Oca' 'ngakan' dhalem bhasa Indonesia artena ...",
        options: ["Makan", "Minum", "Tidur", "Duduk"],
        correctAnswer: 0,
        explanation: "Ngakan artena makan."
      },
      {
        topic: "Kosa Oca'",
        question: "Oca' 'ngenom' dhalem bhasa Indonesia artena ...",
        options: ["Makan", "Minum", "Mandi", "Tidur"],
        correctAnswer: 1,
        explanation: "Ngenom artena minum."
      },
      {
        topic: "Kosa Oca'",
        question: "Oca' 'mace' dhalem bhasa Indonesia artena ...",
        options: ["Menulis", "Menggambar", "Membaca", "Mendengar"],
        correctAnswer: 2,
        explanation: "Mace artena membaca."
      },
      {
        topic: "Kosa Oca'",
        question: "Oca' 'noles' dhalem bhasa Indonesia artena ...",
        options: ["Membaca", "Berlari", "Bermain", "Menulis"],
        correctAnswer: 3,
        explanation: "Noles artena menulis."
      },
      {
        topic: "Kosa Oca'",
        question: "Oca' 'maen' dhalem bhasa Indonesia artena ...",
        options: ["Bermain", "Belajar", "Bekerja", "Berbicara"],
        correctAnswer: 0,
        explanation: "Maen artena bermain."
      },
      {
        topic: "Tata Krama",
        question: "Manabi narema partolongan dhari kanca patot ngocap ...",
        options: ["Nyo'on sapora", "Sakalangkong", "Tabea", "Salamet"],
        correctAnswer: 1,
        explanation: "Sakalangkong artena terima kasih."
      },
      {
        topic: "Tata Krama",
        question: "Manabi ngelakoni kasalaan patot nyo'on ...",
        options: ["Sakalangkong", "Tabea", "Sapora", "Ganjaran"],
        correctAnswer: 2,
        explanation: "Nyo'on sapora artena meminta maaf."
      },
      {
        topic: "Tata Krama",
        question: "Manabi lebat e adha'anna orèng towa se teppa' toju', patot ngocap ...",
        options: ["Tabea", "Sakalangkong", "Salamet", "Ayo"],
        correctAnswer: 0,
        explanation: "Tabea eocapagi kalaban sopan minangka tanda permisi."
      },
      {
        topic: "Benda & Lingkungan",
        question: "Bhasa Madurana 'rumah' iya areya ...",
        options: ["Sakolaan", "Bhengko", "Langghar", "Pasar"],
        correctAnswer: 1,
        explanation: "Bhengko artena rumah."
      },
      {
        topic: "Benda & Lingkungan",
        question: "Tempat shalat se badha e seddhi'na bhengko Madura anyama ...",
        options: ["Dapor", "Gardu", "Langghar", "Kandang"],
        correctAnswer: 2,
        explanation: "Langghar iya areya surau / musholla keluarga."
      },
      {
        topic: "Alat Sakolaan",
        question: "Alat se eangghuy noles dhalem bhasa Madura esebbut ...",
        options: ["Potlot", "Garisan", "Buku", "Penghapus"],
        correctAnswer: 0,
        explanation: "Potlot artena pensil kaangghuy noles."
      },
      {
        topic: "Alat Sakolaan",
        question: "Piranti se eangghuy nggaris lenceng dhalem bhasa Madura iya areya ...",
        options: ["Buku", "Garisan", "Tas", "Batu"],
        correctAnswer: 1,
        explanation: "Garisan artena penggaris."
      },
      {
        topic: "Wilangan (Berhitung)",
        question: "Settong (1) etamba dhuwa' (2) daddi ...",
        options: ["Dhuwa'", "Empa'", "Tello' (3)", "Lema'"],
        correctAnswer: 2,
        explanation: "Settong + dhuwa' = tello' (3)."
      },
      {
        topic: "Wilangan (Berhitung)",
        question: "Dhuwa' (2) etamba tello' (3) daddi ...",
        options: ["Empa'", "Ennem", "Petto'", "Lema' (5)"],
        correctAnswer: 3,
        explanation: "2 + 3 = 5 (lema')."
      },
      {
        topic: "Wilangan (Berhitung)",
        question: "Lema' (5) etamba lema' (5) daddi ...",
        options: ["Sapolo (10)", "Sanga'", "Ballu'", "Petto'"],
        correctAnswer: 0,
        explanation: "5 + 5 = 10 (sapolo)."
      },
      {
        topic: "Oca' Kaanan (Sifat)",
        question: "Oca' 'rajah' (besar) lawanna iya areya ...",
        options: ["Tengghi", "Kene' (kecil)", "Bhagus", "Raddin"],
        correctAnswer: 1,
        explanation: "Rajah lawanna kene'."
      },
      {
        topic: "Oca' Kaanan (Sifat)",
        question: "Oca' 'tengghi' (tinggi) lawanna iya areya ...",
        options: ["Rajah", "Kene'", "Pendek (pendek)", "Lemmes"],
        correctAnswer: 2,
        explanation: "Tengghi lawanna pendek."
      },
      {
        topic: "Oca' Kaanan (Sifat)",
        question: "Oca' 'senneng' (senang) lawanna iya areya ...",
        options: ["Seddhi (sedih)", "Penter", "Tako'", "Kerras"],
        correctAnswer: 0,
        explanation: "Senneng lawanna seddhi."
      },
      {
        topic: "Ukara (Kalimat)",
        question: "Ukara 'Kaula murid SD' teggessa dhalem bhasa Indonesia ...",
        options: ["Kamu murid SD", "Saya murid SD", "Dia guru SD", "Mereka teman SD"],
        correctAnswer: 1,
        explanation: "Kaula artena saya, kaula murid SD artena saya murid SD."
      },
      {
        topic: "Ukara (Kalimat)",
        question: "Ukara 'Embu' napa' e bhengko' teggessa ...",
        options: ["Ibu pergi ke pasar", "Ayah berangkat kerja", "Ibu tiba di rumah", "Kakak belajar di sekolah"],
        correctAnswer: 2,
        explanation: "Embu' napa' e bhengko teggessa ibu tiba di rumah."
      },
      {
        topic: "Nyama Kèbân (Hewan)",
        question: "Kèbân kene' se monyena 'meong meong' anyama ...",
        options: ["Koceng", "Ajam", "Embi'", "Sape"],
        correctAnswer: 0,
        explanation: "Koceng monyena meong-meong."
      },
      {
        topic: "Nyama Kèbân (Hewan)",
        question: "Mano' se monyena 'kukuruyuk' e lagghu are anyama ...",
        options: ["Bebek", "Ajam (ayam)", "Koceng", "Bujyel"],
        correctAnswer: 1,
        explanation: "Ajam jantan monyena kukuruyuk e lagghu are."
      },
      {
        topic: "Oca' Kaanan",
        question: "Sasamponna mandi, badan arassa ...",
        options: ["Lesse", "Seddhi", "Seggher (segar)", "Lapong"],
        correctAnswer: 2,
        explanation: "Mandi makalowar leleteh daddi badan seggher."
      },
      {
        topic: "Sasapaan",
        question: "Manabi atemmo kanca e sakolaan, patot saling aberri' ...",
        options: ["Salam ban senyum", "Bantahan", "Tangisan", "Amokan"],
        correctAnswer: 0,
        explanation: "Atemmo kanca patot asalam ban akenyom."
      }
    ]
  },
  2: {
    mudah: [
      {
        topic: "Nyama Kèbân",
        question: "Kèbân berkaki empa' se biasa ekerap e Polo Madura iya areya ...",
        options: ["Sape", "Koceng", "Embi'", "Ajam"],
        correctAnswer: 0,
        explanation: "Sape iya areya kèbân karapan khas Madura."
      },
      {
        topic: "Nyama Kèbân",
        question: "Kèbân se ngasellagi tellor tor koteka e kandang anyama ...",
        options: ["Jhuko'", "Ajam", "Tekko'", "Sape"],
        correctAnswer: 1,
        explanation: "Ajam ngasellagi tellor."
      },
      {
        topic: "Nyama Kèbân",
        question: "Kèbân se lebur ngakan jhuko' tor nyeser e bhengko anyama ...",
        options: ["Embi'", "Sape", "Koceng", "Mano'"],
        correctAnswer: 2,
        explanation: "Koceng lebur ngakan jhuko'."
      },
      {
        topic: "Nyama Kèbân",
        question: "Kèbân berkaki empa' se ngakan rebbha tor gadhuwan jenggot anyama ...",
        options: ["Embi' / Bheddhus", "Ajam", "Jhuko'", "Mano'"],
        correctAnswer: 0,
        explanation: "Embi' otaba bheddhus iya areya kambing."
      },
      {
        topic: "Nyama Kèbân",
        question: "Kèbân se odhi' dhalem aeng tase' otaba songay anyama ...",
        options: ["Koceng", "Jhuko'", "Sape", "Tekko'"],
        correctAnswer: 1,
        explanation: "Jhuko' artena ikan se odhi' e aeng."
      },
      {
        topic: "Buwa'an",
        question: "Buwa 'pao' dhalem bhasa Indonesia artena buwa ...",
        options: ["Jeruk", "Apel", "Mangga", "Pisang"],
        correctAnswer: 2,
        explanation: "Pao dhalem bhasa Indonesia artena mangga."
      },
      {
        topic: "Buwa'an",
        question: "Buwa 'geddhang' dhalem bhasa Madura artena buwa ...",
        options: ["Pisang", "Pepaya", "Semangka", "Nanas"],
        correctAnswer: 0,
        explanation: "Geddhang dhalem bhasa Madura artena pisang."
      },
      {
        topic: "Taneman",
        question: "Taneman 'nyeor' dhalem bhasa Indonesia artena ...",
        options: ["Bambu", "Kelapa", "Padi", "Jagung"],
        correctAnswer: 1,
        explanation: "Nyeor artena kelapa."
      },
      {
        topic: "Wilangan (Angka)",
        question: "Bhasa Madurana angka 11 (sebelas) iya areya ...",
        options: ["Sabellas", "Dhubellas", "Tellobellas", "Salekor"],
        correctAnswer: 0,
        explanation: "Angka 11 daddi 'sabellas'."
      },
      {
        topic: "Wilangan (Angka)",
        question: "Bhasa Madurana angka 12 (dua belas) iya areya ...",
        options: ["Sabellas", "Dhubellas", "Tellobellas", "Salawe"],
        correctAnswer: 1,
        explanation: "Angka 12 daddi 'dhubellas'."
      }
    ],
    sedang: [
      {
        topic: "Nyama Kèbân",
        question: "Kèbân se bisa ngabbher e awang-awang kalaban lanjang lanjang anyama ...",
        options: ["Mano'", "Sape", "Jhuko'", "Koceng"],
        correctAnswer: 0,
        explanation: "Mano' iya areya burung se bisa ngabbher."
      },
      {
        topic: "Nyama Kèbân",
        question: "Kèbân buas se odhi' e aeng raba kalaban colo' rajah anyama ...",
        options: ["Sape", "Bujyel (buaya)", "Jhuko'", "Ajam"],
        correctAnswer: 1,
        explanation: "Bujyel artena buaya."
      },
      {
        topic: "Taneman Pangan",
        question: "Taneman se eobang e teggalan Madura kaangghuy kakanan pokok iya areya ...",
        options: ["Gandum", "Apel", "Jhagung", "Teh"],
        correctAnswer: 2,
        explanation: "Jhagung iya areya tanaman pangan utama e teggal Madura."
      },
      {
        topic: "Wilangan (Angka)",
        question: "Bhasa Madurana angka 15 (lima belas) iya areya ...",
        options: ["Lema bellas", "Salekor", "Salawe", "Sekket"],
        correctAnswer: 0,
        explanation: "15 daddi 'lema bellas'."
      },
      {
        topic: "Wilangan (Angka)",
        question: "Bhasa Madurana angka 20 (dua puluh) iya areya ...",
        options: ["Sabellas", "Dhu polo", "Salekor", "Salawe"],
        correctAnswer: 1,
        explanation: "20 daddi 'dhu polo'."
      },
      {
        topic: "Wilangan (Angka)",
        question: "Bhasa Madurana angka 21 (dua puluh satu) iya areya ...",
        options: ["Dhu polo", "Salawe", "Salekor", "Sekket"],
        correctAnswer: 2,
        explanation: "21 daddi 'salekor'."
      },
      {
        topic: "Wilangan (Angka)",
        question: "Bhasa Madurana angka 25 (dua puluh lima) iya areya ...",
        options: ["Salekor", "Sekket", "Dhu polo lema'", "Salawe"],
        correctAnswer: 3,
        explanation: "25 daddi 'salawe'."
      },
      {
        topic: "Wilangan (Angka)",
        question: "Bhasa Madurana angka 50 (lima puluh) iya areya ...",
        options: ["Sekket", "Salawe", "Salekor", "Tello polo"],
        correctAnswer: 0,
        explanation: "50 daddi 'sekket'."
      },
      {
        topic: "Oca' Kaanan",
        question: "Oca' 'raddin' biasa eangghuy kaangghuy nyebbut bine' se ...",
        options: ["Penter", "Cantik / Molek", "Kerras", "Tengghi"],
        correctAnswer: 1,
        explanation: "Raddin artena cantik."
      },
      {
        topic: "Oca' Kaanan",
        question: "Oca' 'kasep / bhagus' biasa eangghuy kaangghuy nyebbut lalake' se ...",
        options: ["Kene'", "Rajah", "Tampan / Gagah", "Penter"],
        correctAnswer: 2,
        explanation: "Kasep artena tampan."
      },
      {
        topic: "Oca' Kaanan",
        question: "Oca' 'penter' dhalem bhasa Indonesia artena ...",
        options: ["Pintar / Pandai", "Bodoh", "Malas", "Lambat"],
        correctAnswer: 0,
        explanation: "Penter artena pintar."
      },
      {
        topic: "Oca' Tanduk",
        question: "Oca' asal 'toles' mon daddi oca' tanduk iya areya ...",
        options: ["Etoles", "Noles", "Tolesan", "Panoles"],
        correctAnswer: 1,
        explanation: "Toles daddi 'noles' (menulis)."
      },
      {
        topic: "Oca' Tanduk",
        question: "Oca' asal 'bhaca' mon daddi oca' tanduk iya areya ...",
        options: ["Ebhaca", "Bhacaan", "Mace", "Pamace"],
        correctAnswer: 2,
        explanation: "Bhaca daddi 'mace' (membaca)."
      },
      {
        topic: "Piranti Sakolaan",
        question: "Benda se eangghuy toju' e kellas anyama ...",
        options: ["Meja", "Korse", "Papan", "Lemari"],
        correctAnswer: 1,
        explanation: "Korse artena kursi kaangghuy toju'."
      },
      {
        topic: "Piranti Sakolaan",
        question: "Papan cem-celleng e adha'an kellas kaangghuy noles kapur anyama ...",
        options: ["Papan toles", "Kaca", "Panto", "Jandela"],
        correctAnswer: 0,
        explanation: "Papan toles artena papan tulis."
      },
      {
        topic: "Kaluwarga",
        question: "Anaq nomer settong dhalem kaluwarga esebbut anaq ...",
        options: ["Bungso", "Pembarep (sulung)", "Panengnga", "Ponakan"],
        correctAnswer: 1,
        explanation: "Pembarep artena anak pertama (sulung)."
      },
      {
        topic: "Kaluwarga",
        question: "Anaq paleng ngodha dhalem kaluwarga esebbut anaq ...",
        options: ["Pembarep", "Panengnga", "Bungso (bungsu)", "Sepoh"],
        correctAnswer: 2,
        explanation: "Bungso artena anak terakhir (bungsu)."
      },
      {
        topic: "Sasapaan",
        question: "Sasapaan bakto malem are e Madura iya areya ...",
        options: ["Salamet malem", "Salamet lagghu", "Salamet siang", "Salamet asar"],
        correctAnswer: 0,
        explanation: "Salamet malem eocapagi bakto malem."
      },
      {
        topic: "Waktu",
        question: "Oca' 'lagghu' dhalem bhasa Indonesia artena ...",
        options: ["Malam", "Pagi", "Siang", "Sore"],
        correctAnswer: 1,
        explanation: "Lagghu artena pagi."
      },
      {
        topic: "Waktu",
        question: "Oca' 'bengkeng / sorop' dhalem bhasa Indonesia artena ...",
        options: ["Pagi", "Siang", "Sore / Petang", "Tengah malam"],
        correctAnswer: 2,
        explanation: "Bengkeng otaba sorop artena sore hari."
      }
    ],
    sulit: [
      {
        topic: "Kosa Oca'",
        question: "Oca' 'mole' dhalem bhasa Indonesia artena ...",
        options: ["Pulang", "Pergi", "Duduk", "Berlari"],
        correctAnswer: 0,
        explanation: "Mole artena pulang."
      },
      {
        topic: "Kosa Oca'",
        question: "Oca' 'entar' dhalem bhasa Indonesia artena ...",
        options: ["Pulang", "Pergi", "Tidur", "Makan"],
        correctAnswer: 1,
        explanation: "Entar artena pergi."
      },
      {
        topic: "Kosa Oca'",
        question: "Oca' 'dateng' dhalem bhasa Indonesia artena ...",
        options: ["Pergi", "Pulang", "Datang", "Hilang"],
        correctAnswer: 2,
        explanation: "Dateng artena tiba / datang."
      },
      {
        topic: "Kosa Oca'",
        question: "Oca' 'negghu'' dhalem bhasa Indonesia artena ...",
        options: ["Melepas", "Memegang", "Mendorong", "Menarik"],
        correctAnswer: 1,
        explanation: "Negghu' artena memegang."
      },
      {
        topic: "Kosa Oca'",
        question: "Oca' 'nyaba'' dhalem bhasa Indonesia artena ...",
        options: ["Mengambil", "Mencuri", "Menaruh / Meletakkan", "Membawa"],
        correctAnswer: 2,
        explanation: "Nyaba' artena meletakkan atau menaruh."
      },
      {
        topic: "Kosa Oca'",
        question: "Oca' 'ngabas' dhalem bhasa Indonesia artena ...",
        options: ["Melihat", "Mendengar", "Berbicara", "Mencium"],
        correctAnswer: 0,
        explanation: "Ngabas artena melihat."
      },
      {
        topic: "Kosa Oca'",
        question: "Oca' 'ngiding' dhalem bhasa Indonesia artena ...",
        options: ["Melihat", "Mendengar", "Merasakan", "Meraba"],
        correctAnswer: 1,
        explanation: "Ngiding artena mendengar."
      },
      {
        topic: "Nyama Kèbân",
        question: "Kèbân kene' se lebur ngerreki keju tor berres e bhengko anyama ...",
        options: ["Sape", "Jhuko'", "Tekko' (tikus)", "Ajam"],
        correctAnswer: 2,
        explanation: "Tekko' artena tikus."
      },
      {
        topic: "Nyama Kèbân",
        question: "Mano' se bisa niroagi oca'na manossa anyama mano' ...",
        options: ["Kaka' towa", "Dara", "Gereja", "Elang"],
        correctAnswer: 0,
        explanation: "Mano' kaka' towa bisa niroagi swara."
      },
      {
        topic: "Taneman",
        question: "Kaju se kowat tor larang kaangghuy mebel e Madura esebbut kaju ...",
        options: ["Kelor", "Jate (jati)", "Pisang", "Singkong"],
        correctAnswer: 1,
        explanation: "Kaju jate iya areya kayu jati."
      },
      {
        topic: "Wilangan (Berhitung)",
        question: "Salawe (25) etamba lema' (5) daddi ...",
        options: ["Dhu polo", "Sekket", "Tello polo (30)", "Salekor"],
        correctAnswer: 2,
        explanation: "25 + 5 = 30 (tello polo)."
      },
      {
        topic: "Wilangan (Berhitung)",
        question: "Sekket (50) ekorange sapolo (10) daddi ...",
        options: ["Empa' polo (40)", "Tello polo", "Salawe", "Salekor"],
        correctAnswer: 0,
        explanation: "50 - 10 = 40 (empa' polo)."
      },
      {
        topic: "Wilangan (Berhitung)",
        question: "Sabellas (11) etamba sanga' (9) daddi ...",
        options: ["Lema bellas", "Dhu polo (20)", "Salawe", "Sekket"],
        correctAnswer: 1,
        explanation: "11 + 9 = 20 (dhu polo)."
      },
      {
        topic: "Tata Krama",
        question: "Manabi nyo'on tolong da' orèng towa, patot ngangghuy bhasa ...",
        options: ["Enja'-iya", "Bhasa pasar", "Engghi-bhunten (alos)", "Bhasa gaul"],
        correctAnswer: 2,
        explanation: "Ka orèng towa wajib ngangghuy bhasa engghi-bhunten."
      },
      {
        topic: "Tata Krama",
        question: "Sasamponna etolong orèng laen, patot ngocap ...",
        options: ["Sakalangkong", "Nyo'on sapora", "Tabea", "Salamet"],
        correctAnswer: 0,
        explanation: "Sakalangkong teggessa terima kasih."
      },
      {
        topic: "Tata Krama",
        question: "Kalimat 'tabea' eangghuy bakto ...",
        options: ["Neddha kakanan", "Lebat e adha'anna orèng towa", "Tedhung e kamar", "Nyapo latar"],
        correctAnswer: 1,
        explanation: "Tabea eangghuy kaangghuy permisi lebat."
      },
      {
        topic: "Ukara (Kalimat)",
        question: "Ukara 'Hasan mace buku e perpus' teggessa ...",
        options: ["Hasan menulis buku di kelas", "Hasan membeli buku di toko", "Hasan membaca buku di perpustakaan", "Hasan meminjam penggaris"],
        correctAnswer: 2,
        explanation: "Mace buku e perpus artena membaca buku di perpustakaan."
      },
      {
        topic: "Ukara (Kalimat)",
        question: "Ukara 'Fatimah nyapo latar bhengko' teggessa ...",
        options: ["Fatimah menyapu halaman rumah", "Fatimah mencuci piring", "Fatimah memasak di dapur", "Fatimah menyiram bunga"],
        correctAnswer: 0,
        explanation: "Nyapo latar bhengko artena menyapu halaman rumah."
      },
      {
        topic: "Ukara (Kalimat)",
        question: "Ukara 'Eppa' meyos da' teggal' teggessa ...",
        options: ["Ayah tidur di kamar", "Ayah pergi ke ladang / kebun", "Ayah makan di meja", "Ayah pulang dari pasar"],
        correctAnswer: 1,
        explanation: "Meyos da' teggal artena pergi ke kebun/ladang."
      },
      {
        topic: "Ukara (Kalimat)",
        question: "Ukara 'Embu' melle jhuko' e pasar' teggessa ...",
        options: ["Ibu menjual sayur di pasar", "Ibu memasak ikan di dapur", "Ibu membeli ikan di pasar", "Ibu membersihkan beras"],
        correctAnswer: 2,
        explanation: "Melle jhuko' e pasar artena membeli ikan di pasar."
      },
      {
        topic: "Oca' Alos",
        question: "Oca' 'kaula' manabi ngadep orèng seppo daddi lebbi sopan iya areya ...",
        options: ["Abdhina", "Sengko'", "Ba'na", "Koreng"],
        correctAnswer: 0,
        explanation: "Abdhina artena saya dhalem tingkatan krama alos."
      },
      {
        topic: "Oca' Alos",
        question: "Oca' 'ba'na' (kamu) kaangghuy orèng se lebbi towa patot eoba daddi ...",
        options: ["Kaka'", "Panjhenengngan", "Sengko'", "Abdhina"],
        correctAnswer: 1,
        explanation: "Panjhenengngan artena kamu/anda untuk orang yang lebih tua."
      },
      {
        topic: "Oca' Kaanan",
        question: "Benda se cengkal ta' lebur epece' akadhi bato esebbut ...",
        options: ["Lemmes", "Kerras (keras)", "Bheneng", "Mera"],
        correctAnswer: 1,
        explanation: "Kerras artena keras."
      },
      {
        topic: "Oca' Kaanan",
        question: "Benda se lomseng akadhi kapas esebbut ...",
        options: ["Kerras", "Penter", "Lemmes (lembut/lemas)", "Tengghi"],
        correctAnswer: 2,
        explanation: "Lemmes artena lunak / lembut / lemas."
      },
      {
        topic: "Oca' Kaanan",
        question: "Orèng se sengsara ta' andhi' dhuwit esebbut ...",
        options: ["Malerat / Miskin", "Soghi", "Penter", "Raddin"],
        correctAnswer: 0,
        explanation: "Malerat artena miskin otaba sengsara."
      },
      {
        topic: "Aeng & Alam",
        question: "Aeng tase' gadhuwan rassa se ...",
        options: ["Manes", "Assen (asin)", "Pait", "Cella'"],
        correctAnswer: 1,
        explanation: "Aeng tase' rassana assen."
      },
      {
        topic: "Aeng & Alam",
        question: "Aeng songay biasana gadhuwan rassa se ...",
        options: ["Assen", "Pait", "Tabbar (tawar)", "Pedes"],
        correctAnswer: 2,
        explanation: "Aeng songay rassana tabbar."
      },
      {
        topic: "Oca' Alos",
        question: "Oca' 'dha'ar' iya areya bhasa engghi-bhunten dhari oca' ...",
        options: ["Ngakan", "Tedhung", "Entar", "Mole"],
        correctAnswer: 0,
        explanation: "Dha'ar iya areya bhasa alos kaangghuy ngakan."
      },
      {
        topic: "Oca' Alos",
        question: "Oca' 'sarean' iya areya bhasa engghi-bhunten dhari oca' ...",
        options: ["Mace", "Tedhung", "Noles", "Meyos"],
        correctAnswer: 1,
        explanation: "Sarean iya areya bhasa alos kaangghuy tedhung."
      },
      {
        topic: "Alam",
        question: "Langit se abarna bhiru e siang are dhalem bhasa Madura iya areya ...",
        options: ["Bulaan", "Tase'", "Langnge'", "Bintang"],
        correctAnswer: 2,
        explanation: "Langnge' artena langit."
      }
    ]
  },
  3: {
    mudah: [
      {
        topic: "Undhag-Usuk Bhasa",
        question: "Bhasa Madura se biasa eangghuy kaangghuy kanca se umurna padha anyama bhasa ...",
        options: ["Enja'-Iya", "Engghi-Bhunten", "Krama Alos", "Bhasa kraton"],
        correctAnswer: 0,
        explanation: "Enja'-iya eangghuy kaangghuy kanca sabhaja otaba se lebbi ngodha."
      },
      {
        topic: "Undhag-Usuk Bhasa",
        question: "Bhasa Madura alos se eangghuy kaangghuy orèng towa ban ghuru anyama bhasa ...",
        options: ["Enja'-Iya", "Engghi-Bhunten", "Bhasa loma", "Bhasa pasar"],
        correctAnswer: 1,
        explanation: "Engghi-bhunten eangghuy ka orèng towa, ghuru, tor sesepuh."
      },
      {
        topic: "Kabudayaan Madura",
        question: "Lomba balap sape kalabân joki kene' e Polo Madura anyama ...",
        options: ["Kerapan Sapi", "Sapi Sonok", "Mamaca", "Ludruk"],
        correctAnswer: 0,
        explanation: "Kerapan Sapi iya areya atraksi balap sape khas Madura."
      },
      {
        topic: "Kabudayaan Madura",
        question: "Kontes kapinteran ban kalagghukan sape bine' se eeyas raddin anyama ...",
        options: ["Kerapan Sapi", "Sapi Sonok", "Tong-tong", "Rampak"],
        correctAnswer: 1,
        explanation: "Sapi Sonok iya areya kontes keanggunan sapi betina khas Madura."
      },
      {
        topic: "Rasukan Tradisional",
        question: "Pakean adat lalake' Madura se gombor abarna celleng anyama ...",
        options: ["Beskap", "Kebaya", "Pesa'an", "Batik"],
        correctAnswer: 2,
        explanation: "Pesa'an iya areya rasukan tradisional pria Madura."
      },
      {
        topic: "Rasukan Tradisional",
        question: "Tutup cethak (penutup kepala) batik khas lalake' Madura anyama ...",
        options: ["Odheng", "Kopiah", "Topi", "Sorban"],
        correctAnswer: 0,
        explanation: "Odheng iya areya ikat kepala khas tradisional Madura."
      },
      {
        topic: "Sanajata Tradisional",
        question: "Sanajata tradisional Madura se bhangonna bengkoy akadhi bulan sabit anyama ...",
        options: ["Keris", "Calo' / Calorit", "Mandau", "Rencong"],
        correctAnswer: 1,
        explanation: "Calorit (are') iya areya sanajata tradisional Madura."
      },
      {
        topic: "Pakakas Tradisional",
        question: "Tempat toju' le-santai dhari perreng se biasa badha e langghar anyama ...",
        options: ["Meja", "Korse", "Lencak", "Lemari"],
        correctAnswer: 2,
        explanation: "Lencak iya areya balai-balai bambu khas Madura."
      },
      {
        topic: "Oca' Alos",
        question: "Bhasa engghi-bhunten dhari oca' 'tedhung' iya areya ...",
        options: ["Sarean", "Ngedhem", "Mole", "Meyos"],
        correctAnswer: 0,
        explanation: "Tedhung alossa daddi 'sarean'."
      },
      {
        topic: "Oca' Alos",
        question: "Bhasa engghi-bhunten dhari oca' 'ngakan' iya areya ...",
        options: ["Neddha", "Dha'ar", "Ngenom", "Nyaba'"],
        correctAnswer: 1,
        explanation: "Ngakan kaangghuy orèng towa alossa daddi 'dha'ar'."
      }
    ],
    sedang: [
      {
        topic: "Oca' Alos",
        question: "Bhasa engghi-bhunten dhari oca' 'entar' (pergi) iya areya ...",
        options: ["Meyos", "Rabhu", "Mangkat", "Mole"],
        correctAnswer: 0,
        explanation: "Entar alossa daddi 'meyos'."
      },
      {
        topic: "Oca' Alos",
        question: "Bhasa engghi-bhunten dhari oca' 'noles' (menulis) iya areya ...",
        options: ["Maos", "Nyerrat", "Noles", "Mace"],
        correctAnswer: 1,
        explanation: "Noles alossa daddi 'nyerrat'."
      },
      {
        topic: "Oca' Alos",
        question: "Bhasa engghi-bhunten dhari oca' 'mace' (membaca) iya areya ...",
        options: ["Nyerrat", "Ngabas", "Maos", "Meyarsa"],
        correctAnswer: 2,
        explanation: "Mace alossa daddi 'maos'."
      },
      {
        topic: "Oca' Alos",
        question: "Bhasa engghi-bhunten dhari oca' 'ngabas' (melihat) iya areya ...",
        options: ["Ngoladi", "Meyarsa", "Nyepeng", "Maos"],
        correctAnswer: 0,
        explanation: "Ngabas alossa daddi 'ngoladi'."
      },
      {
        topic: "Oca' Alos",
        question: "Bhasa engghi-bhunten dhari oca' 'ngiding' (mendengar) iya areya ...",
        options: ["Ngoladi", "Meyarsa", "Maos", "Nyerrat"],
        correctAnswer: 1,
        explanation: "Ngiding alossa daddi 'meyarsa'."
      },
      {
        topic: "Oca' Alos",
        question: "Bhasa engghi-bhunten dhari oca' 'negghu'' (memegang) iya areya ...",
        options: ["Ngoladi", "Meyarsa", "Nyepeng", "Nyaba'"],
        correctAnswer: 2,
        explanation: "Negghu' alossa daddi 'nyepeng'."
      },
      {
        topic: "Oca' Alos",
        question: "Bhasa engghi-bhunten dhari oca' 'tolesan / surat' iya areya ...",
        options: ["Sratan", "Buku", "Garisan", "Potlot"],
        correctAnswer: 0,
        explanation: "Tolesan otaba surat alossa daddi 'sratan'."
      },
      {
        topic: "Oca' Alos",
        question: "Bhasa engghi-bhunten dhari oca' 'bhengko' (rumah) iya areya ...",
        options: ["Langghar", "Dhalem", "Bhengko", "Kamar"],
        correctAnswer: 1,
        explanation: "Bhengko kaangghuy orèng towa alossa daddi 'dhalem'."
      },
      {
        topic: "Maenan Tradisional",
        question: "Maenan bal kaca kene' se epanter e tana kalaban driji anyama ...",
        options: ["Egrang", "Dakon", "Nekeran", "Layangan"],
        correctAnswer: 2,
        explanation: "Nekeran iya areya maenan kelereng."
      },
      {
        topic: "Maenan Tradisional",
        question: "Maenan ajalan ngangguy dhu kaju bambu tengghi kalaban injegan anyama ...",
        options: ["Egrang", "Nekeran", "Bal-balan", "Dakon"],
        correctAnswer: 0,
        explanation: "Egrang iya areya permainan berjalan di atas bilah bambu tinggi."
      },
      {
        topic: "Nelayan Madura",
        question: "Parahu lajar tradisional nelayan Madura se kalonta kowat arong tase' anyama ...",
        options: ["Kapal pesiar", "Parahu Pajhang / Janggolan", "Speedboat", "Sampan plastik"],
        correctAnswer: 1,
        explanation: "Parahu Pajhang ban Janggolan iya areya perahu layar tradisional Madura."
      },
      {
        topic: "Nelayan Madura",
        question: "Piranti se eangghuy nelayan kaangghuy nangkep jhuko' e tase' anyama ...",
        options: ["Pancing", "Are'", "Jala / Jaring", "Lencak"],
        correctAnswer: 2,
        explanation: "Jala otaba jaring eangghuy kaangghuy nangkep jhuko'."
      },
      {
        topic: "Kesenian Tradisional",
        question: "Seni mamaos tembang macapat dhalem naskah dhaluwang / lontar e Madura anyama ...",
        options: ["Mamaca", "Ludruk", "Ketoprak", "Campursari"],
        correctAnswer: 0,
        explanation: "Mamaca iya areya seni membaca macapat naskah kuno berirama."
      },
      {
        topic: "Kesenian Tradisional",
        question: "Musik tiup selompret Madura se ngiringi kerapan sape anyama musik ...",
        options: ["Angklung", "Saronen", "Gamelan Degung", "Kolintang"],
        correctAnswer: 1,
        explanation: "Saronen iya areya musik tiup tradisional Madura."
      },
      {
        topic: "Tarian Tradisional",
        question: "Tarian penyambutan tamu agung dhari Karaton Sumenep anyama tari ...",
        options: ["Saman", "Pendet", "Muang Sangkal", "Jaipong"],
        correctAnswer: 2,
        explanation: "Tari Muang Sangkal iya areya tarian tolak bala keraton Sumenep."
      },
      {
        topic: "Kosa Oca'",
        question: "Kakanan cemilan reng-sepprena dhalem bhasa Madura esebbut ...",
        options: ["Ajhajhan", "Nasi campur", "Jhuko'", "Daging"],
        correctAnswer: 0,
        explanation: "Ajhajhan artena camilan jajan pasar."
      },
      {
        topic: "Alam",
        question: "Angen se naseser tengnga tase' artena angen se ...",
        options: ["Ribut", "Bares sepoi-sepoi", "Puting beliung", "Panas"],
        correctAnswer: 1,
        explanation: "Naseser artena berhembus lembut sepoi-sepoi."
      },
      {
        topic: "Waktu",
        question: "Bakto matare mare sorop napa' ka malem esebbut bakto ...",
        options: ["Lagghu", "Siang", "Mangerrep", "Tengnga are"],
        correctAnswer: 2,
        explanation: "Mangerrep iya areya waktu menjelang petang / maghrib."
      },
      {
        topic: "Kesenian Tradisional",
        question: "Musik patrol kentongan bambu Madura kalaban tabuhan kompak anyama ...",
        options: ["Tong-tong", "Gitar", "Pianika", "Rebana"],
        correctAnswer: 0,
        explanation: "Tong-tong iya areya musik patrol kentongan bambu khas Madura."
      },
      {
        topic: "Alam",
        question: "Benda e langnge' se nyonar e malem are kancana bulaan anyama ...",
        options: ["Matare", "Bintang", "Awan", "Pelangi"],
        correctAnswer: 1,
        explanation: "Bintang nyonar e malem are."
      }
    ],
    sulit: [
      {
        topic: "Undhag-Usuk Bhasa",
        question: "Dhalem ukara 'Eppa' ghi' dha'ar e meja makan', oca' 'dha'ar' tamaso' bhasa ...",
        options: ["Enja'-iya", "Engghi-bhunten", "Kasar", "Madya"],
        correctAnswer: 1,
        explanation: "Dha'ar iya areya krama alos (engghi-bhunten)."
      },
      {
        topic: "Undhag-Usuk Bhasa",
        question: "Dhalem ukara 'Sengko' entar da' sakolaan', bhasa se eangghuy iya areya ...",
        options: ["Enja'-iya", "Engghi-bhunten", "Krama inggil", "Alos"],
        correctAnswer: 0,
        explanation: "Sengko' ban entar tamaso' bhasa enja'-iya."
      },
      {
        topic: "Undhag-Usuk Bhasa",
        question: "Oca' 'kaula' dhalem bhasa engghi-bhunten krama andhap daddi ...",
        options: ["Sengko'", "Ba'na", "Abdhina", "Panjhenengngan"],
        correctAnswer: 2,
        explanation: "Abdhina eangghuy kaangghuy ngandhapagi badan."
      },
      {
        topic: "Undhag-Usuk Bhasa",
        question: "Oca' 'ba'na' (kamu) dhalem bhasa engghi-bhunten krama inggil daddi ...",
        options: ["Panjhenengngan", "Abdhina", "Sengko'", "Koreng"],
        correctAnswer: 0,
        explanation: "Panjhenengngan eangghuy kaangghuy ngalorraghi lawan bicara."
      },
      {
        topic: "Kosa Oca'",
        question: "Oca' 'meyos' dhalem bhasa Indonesia artena ...",
        options: ["Duduk", "Pergi / Berangkat", "Makan", "Tidur"],
        correctAnswer: 1,
        explanation: "Meyos artena pergi / berangkat (engghi-bhunten)."
      },
      {
        topic: "Kosa Oca'",
        question: "Oca' 'nyerrat' dhalem bhasa Indonesia artena ...",
        options: ["Membaca", "Mendengar", "Menulis", "Melihat"],
        correctAnswer: 2,
        explanation: "Nyerrat artena menulis (engghi-bhunten)."
      },
      {
        topic: "Kosa Oca'",
        question: "Oca' 'maos' dhalem bhasa Indonesia artena ...",
        options: ["Membaca", "Menulis", "Berlari", "Bermain"],
        correctAnswer: 0,
        explanation: "Maos artena membaca (engghi-bhunten)."
      },
      {
        topic: "Kosa Oca'",
        question: "Oca' 'ngoladi' dhalem bhasa Indonesia artena ...",
        options: ["Mendengar", "Melihat / Memperhatikan", "Berbicara", "Memegang"],
        correctAnswer: 1,
        explanation: "Ngoladi artena melihat (engghi-bhunten)."
      },
      {
        topic: "Kosa Oca'",
        question: "Oca' 'meyarsa' dhalem bhasa Indonesia artena ...",
        options: ["Melihat", "Membaca", "Mendengar", "Menulis"],
        correctAnswer: 2,
        explanation: "Meyarsa artena mendengar (engghi-bhunten)."
      },
      {
        topic: "Kosa Oca'",
        question: "Oca' 'nyepeng' dhalem bhasa Indonesia artena ...",
        options: ["Memegang", "Melepas", "Memukul", "Menaruh"],
        correctAnswer: 0,
        explanation: "Nyepeng artena memegang (engghi-bhunten)."
      },
      {
        topic: "Kosa Oca'",
        question: "Oca' 'sratan' dhalem bhasa Indonesia artena ...",
        options: ["Pakaian", "Tulisan / Surat", "Buku", "Uang"],
        correctAnswer: 1,
        explanation: "Sratan artena tulisan otaba surat."
      },
      {
        topic: "Kosa Oca'",
        question: "Oca' 'dhalem' minangka oca' engghi-bhunten dhari ...",
        options: ["Langghar", "Kamar", "Bhengko (rumah)", "Dapor"],
        correctAnswer: 2,
        explanation: "Dhalem iya areya oca' alos dhari bhengko."
      },
      {
        topic: "Budaya Madura",
        question: "Sape se eangghuy kerapan sape iya areya macemma sape ...",
        options: ["Sape jantan se sehat ban kowat", "Sape bine' se ngasellagi soso", "Sape kene' se nembe lahir", "Sape towa se lesse"],
        correctAnswer: 0,
        explanation: "Sape jantan pilihan se sehat ban kowat."
      },
      {
        topic: "Budaya Madura",
        question: "Sape Sonok biasana eeyas kalaban ...",
        options: ["Pakaian gombor celleng", "Kalong, roncean kembang, tor selendang endah", "Lumpur tana", "Tali tambang biasa"],
        correctAnswer: 1,
        explanation: "Sape sonok dihias cantik kalong ban hiasan raddin."
      },
      {
        topic: "Pakean Adat",
        question: "Sabuk rajah dhari kole' se eangghuy e rasukan Pesa'an anyama ...",
        options: ["Sabuk katpake", "Ikat pinggang plastik", "Kain sarung", "Tali tambang"],
        correctAnswer: 0,
        explanation: "Sabuk katpake iya areya ikat pinggang kulit lebar khas Pesa'an."
      },
      {
        topic: "Pakean Adat",
        question: "Kaos se eangghuy e dhalem jas Pesa'an abarna loreng ...",
        options: ["Kuning ban bhiru", "Mera ban pote", "Celleng ban pote", "Hijau ban koneng"],
        correctAnswer: 1,
        explanation: "Kaos loreng mera pote ciri khas rasukan Madura."
      },
      {
        topic: "Parebhasan",
        question: "Parebhasan 'Kene' kene' cabbi rawet' teggessa ...",
        options: ["Kana' kene' se lebur cabbi", "Maske kene' penter tor bangal", "Kana' kene' se gampang nanges", "Reng towa se kerras"],
        correctAnswer: 1,
        explanation: "Maknanya biar kecil berani dan pandai."
      },
      {
        topic: "Parebhasan",
        question: "Oca' 'ngedhem panonna' teggessa ...",
        options: ["Tedhung / Merem", "Mace buku", "Nangis", "Ngoladi tontonan"],
        correctAnswer: 0,
        explanation: "Ngedhem panonna artena merem otaba tedhung."
      },
      {
        topic: "Susunan Bhengko",
        question: "Susunan bhengko tradisional Madura se apanjhang e tanean esebbut ...",
        options: ["Rumah Gadang", "Tanean Lanjang", "Joglo", "Tongkonan"],
        correctAnswer: 1,
        explanation: "Tanean Lanjang iya areya pola pemukiman tradisional Madura."
      },
      {
        topic: "Susunan Bhengko",
        question: "Susunan bhengko e Tanean Lanjang biasana ngadep da' arah ...",
        options: ["Daja (utara)", "Temor (timur)", "Lao' (selatan)", "Bara' (barat)"],
        correctAnswer: 2,
        explanation: "Bhengko Tanean Lanjang menghadap ke selatan (lao')."
      },
      {
        topic: "Tradisi Madura",
        question: "Tradisi ngater kakanan da' tatanggha bakto are raya esebbut tradisi ...",
        options: ["Ter-ateran", "Kerapan", "Saronen", "Mamaca"],
        correctAnswer: 0,
        explanation: "Ter-ateran iya areya tradisi anter kakanan silaturahmi."
      },
      {
        topic: "Tradisi Madura",
        question: "Upacara selamatan tolak bala dhalem kabudayaan Madura esebbut ...",
        options: ["Nekeran", "Ro'kat", "Lencak", "Egrang"],
        correctAnswer: 1,
        explanation: "Ro'kat iya areya upacara selamatan doa tolak bala."
      },
      {
        topic: "Tradisi Madura",
        question: "Upacara 'Ro'kat tase'' biasana elakoni sareng kompolanna orèng ...",
        options: ["Petani teggal", "Nelayan", "Pedagang pasar", "Pegawai kantor"],
        correctAnswer: 1,
        explanation: "Ro'kat tase' elakoni para nelayan kaangghuy syukur hasil tase'."
      },
      {
        topic: "Tradisi Madura",
        question: "Upacara 'Ro'kat desa' elakoni kaangghuy mensyukuri ...",
        options: ["Hasil bumi tor karukunan warga", "Kapal anyar", "Maenan nekeran", "Rasukan anyar"],
        correctAnswer: 0,
        explanation: "Ro'kat desa kaangghuy syukur hasil bumi tor keselamatan desa."
      },
      {
        topic: "Kerajinan Madura",
        question: "Batik Madura se kalonta dhari Tanjungbumi Bangkalan anyama ...",
        options: ["Batik Gentongan", "Batik Mega Mendung", "Batik Parang", "Batik Kawung"],
        correctAnswer: 0,
        explanation: "Batik Gentongan khas Tanjungbumi Bangkalan."
      },
      {
        topic: "Kerajinan Madura",
        question: "Ciri khas barna batik Madura iya areya abarna ...",
        options: ["Kusem tor peteng", "Tegas tor bangal (mera, celleng, koneng, bhiru)", "Putih polos", "Abu-abu sadhaja"],
        correctAnswer: 1,
        explanation: "Warna batik Madura tegas dan berani."
      },
      {
        topic: "Tata Krama",
        question: "Manabi atemmo ghuru e sakolaan otaba e jalan, patot ...",
        options: ["Buron ta' tao", "Aberri' salam tor mondhu'aghi badan", "Ngolok kalaban swara kerras", "Meneng sadhaja"],
        correctAnswer: 1,
        explanation: "Asalam tor mondhu'aghi badan minangka tanda hormat da' ghuru."
      },
      {
        topic: "Tata Krama",
        question: "Sikap 'tabea' manabi lebat e adha'anna orèng towa kalaban ...",
        options: ["Nondhu'agi badan ban tanang tengen ka baba", "Mela' mata", "Melompat", "Adekket"],
        correctAnswer: 0,
        explanation: "Nondhu'agi badan ban tanang tengen eonggahagi ka baba."
      },
      {
        topic: "Kaanan",
        question: "Orèng se gadhuwan sipat 'andhap asor' artena orèng se ...",
        options: ["Sombong tor raja cangkem", "Rendah hati tor sopan santun", "Tako'an", "Malas alako"],
        correctAnswer: 1,
        explanation: "Andhap asor artena rendah hati."
      },
      {
        topic: "Kaanan",
        question: "Orèng se bangal bela kabhendherran esebbut orèng se ...",
        options: ["Bangal (pemberani)", "Kene' ate", "Kerras cangkem", "Malerat"],
        correctAnswer: 0,
        explanation: "Bangal artena pemberani."
      }
    ]
  },
  4: {
    mudah: [
      {
        topic: "Tata Bhasa (Morfologi)",
        question: "Oca' asal 'toles' mon eberri' ater-ater an- daddi ...",
        options: ["Noles", "Meles", "Etoles", "Panoles"],
        correctAnswer: 0,
        explanation: "Toles daddi 'noles' (menulis)."
      },
      {
        topic: "Tata Bhasa (Morfologi)",
        question: "Oca' asal 'bhaca' mon eberri' ater-ater am- daddi ...",
        options: ["Mace", "Noles", "Bhacaan", "Ebhaca"],
        correctAnswer: 0,
        explanation: "Bhaca daddi 'mace' (membaca)."
      },
      {
        topic: "Tata Bhasa (Morfologi)",
        question: "Oca' asal 'sapu' mon eberri' ater-ater any- daddi ...",
        options: ["Esapu", "Anyapu", "Pasapu", "Sapu-an"],
        correctAnswer: 1,
        explanation: "Sapu daddi 'anyapu' (menyapu)."
      },
      {
        topic: "Tata Bhasa (Morfologi)",
        question: "Oca' asal 'kerem' mon eberri' ater-ater ang- daddi ...",
        options: ["Ngerem", "Ekerem", "Pangerem", "Kereman"],
        correctAnswer: 0,
        explanation: "Kerem daddi 'ngerem' (mengirim)."
      },
      {
        topic: "Kesenian Madura",
        question: "Tari Topeng Getthak asalla dhari kabupaten ...",
        options: ["Bangkalan", "Pamekasan", "Sampang", "Sumenep"],
        correctAnswer: 1,
        explanation: "Tari Topeng Getthak asalla dhari Pamekasan."
      },
      {
        topic: "Kesenian Madura",
        question: "Musik tradisional tiup khas Madura se monyena nyaring anyama musik ...",
        options: ["Saronen", "Gitar", "Rebab", "Gambus"],
        correctAnswer: 0,
        explanation: "Saronen iya areya musik tiup selompret khas Madura."
      },
      {
        topic: "Kesenian Madura",
        question: "Tarian tolak bala keraton Sumenep se misuwur anyama tari ...",
        options: ["Piring", "Muang Sangkal", "Saman", "Pendet"],
        correctAnswer: 1,
        explanation: "Tari Muang Sangkal asalla dhari Karaton Sumenep."
      },
      {
        topic: "Kuliner Khas Madura",
        question: "Kakanan daging etusu' kalaban bumbu kenceng khas Madura se kalonta anyama ...",
        options: ["Rendang", "Sate Madura", "Pempek", "Gudeg"],
        correctAnswer: 1,
        explanation: "Sate Madura misuwur e saindengnga Nusantara."
      },
      {
        topic: "Kuliner Khas Madura",
        question: "Bebek goreng sambel mangga ngodha se kalonta e Bangkalan anyama bebek ...",
        options: ["Bebek Sinjay", "Bebek Peking", "Bebek Bakar", "Bebek Rebus"],
        correctAnswer: 0,
        explanation: "Bebek Sinjay kuliner kalonta e Bangkalan."
      },
      {
        topic: "Kerajinan Madura",
        question: "Kain kalaban corak barna kerras khas Madura anyama kain ...",
        options: ["Songket", "Ulos", "Batik Madura", "Tenun Ikat"],
        correctAnswer: 2,
        explanation: "Batik Madura gadhuwan corak barna tegas kerras."
      }
    ],
    sedang: [
      {
        topic: "Oca' Rangkeppan",
        question: "Oca' rangkeppan dwi lingga dhari oca' 'kanca' iya areya ...",
        options: ["Kanca-kanca", "Kakanca", "Panganca", "Akanca"],
        correctAnswer: 0,
        explanation: "Dwi lingga dhari kanca iya areya 'kanca-kanca'."
      },
      {
        topic: "Oca' Rangkeppan",
        question: "Oca' rangkeppan dwi lingga dhari oca' 'bhengko' iya areya ...",
        options: ["Bhengko-bhengko", "Babhengko", "Abhengko", "Mabhengko"],
        correctAnswer: 0,
        explanation: "Dwi lingga dhari bhengko iya areya 'bhengko-bhengko'."
      },
      {
        topic: "Oca' Rangkeppan",
        question: "Oca' rangkeppan dwi purwa dhari oca' 'buruk' iya areya ...",
        options: ["Buruk-buruk", "Baburuk", "Maburuk", "Kaburuk"],
        correctAnswer: 1,
        explanation: "Dwi purwa ngulang suku kata dha'-adha' daddi 'baburuk'."
      },
      {
        topic: "Oca' Rangkeppan",
        question: "Oca' rangkeppan dwi purwa dhari oca' 'tangges' iya areya ...",
        options: ["Tangges-tangges", "Tetangges", "Matangges", "Katangges"],
        correctAnswer: 1,
        explanation: "Dwi purwa dhari tangges daddi 'tetangges'."
      },
      {
        topic: "Kuliner Khas Madura",
        question: "Kerang bambu kene' se eolah daddi kakanan khas Pamekasan/Sumenep anyama ...",
        options: ["Lorjuk", "Kepiting", "Cumi", "Udang"],
        correctAnswer: 0,
        explanation: "Lorjuk iya areya kerang laut khas pantai Madura."
      },
      {
        topic: "Kuliner Khas Madura",
        question: "Kakanan khas Bangkalan kalaban sambel pesse tor serundeng anyama ...",
        options: ["Nasi Liwet", "Nasi Serpang", "Nasi Uduk", "Nasi Padang"],
        correctAnswer: 1,
        explanation: "Nasi Serpang kuliner asli Bangkalan."
      },
      {
        topic: "Kuliner Khas Madura",
        question: "Soto kalaban kuah campor bumbu kacang khas Sumenep anyama soto ...",
        options: ["Soto Betawi", "Soto Lamongan", "Campor", "Soto Banjar"],
        correctAnswer: 2,
        explanation: "Campor iya areya soto khas Sumenep."
      },
      {
        topic: "Kerajinan Madura",
        question: "Sentra kerajinan batik Madura se kalonta e Bangkalan badha e kecamatan ...",
        options: ["Tanjungbumi", "Kamal", "Socah", "Burneh"],
        correctAnswer: 0,
        explanation: "Tanjungbumi sentra batik gentongan kalonta."
      },
      {
        topic: "Kerajinan Madura",
        question: "Sentra kerajinan batik Madura se misuwur e Pamekasan badha e desa ...",
        options: ["Klampar", "Lombang", "Slopeng", "Gili"],
        correctAnswer: 0,
        explanation: "Desa Klampar sentra batik e Pamekasan."
      },
      {
        topic: "Kesenian Madura",
        question: "Kesenian musik kentongan kalaban lampu hias tor garobak ramme anyama ...",
        options: ["Musik Daul / Ul-Daul", "Wayang Kulit", "Reog", "Kuda Lumping"],
        correctAnswer: 0,
        explanation: "Musik Daul iya areya festival musik kentongan berhias e Madura."
      },
      {
        topic: "Kesenian Madura",
        question: "Teater sandiwara tradisional rakyat Madura se kalonta anyama ...",
        options: ["Sandur", "Ketoprak", "Lenong", "Randai"],
        correctAnswer: 0,
        explanation: "Sandur iya areya teater seni rakyat Madura."
      },
      {
        topic: "Kosa Oca'",
        question: "Oca' 'nyandak' dhalem bhasa Indonesia artena ...",
        options: ["Sampai / Cukup", "Kurang", "Hilang", "Ketinggalan"],
        correctAnswer: 0,
        explanation: "Nyandak artena sampai otaba cukup."
      },
      {
        topic: "Kosa Oca'",
        question: "Oca' 'paleman' dhalem bhasa Indonesia artena ...",
        options: ["Perjalanan", "Oleh-oleh / Buah tangan", "Ketinggalan", "Makanan basi"],
        correctAnswer: 1,
        explanation: "Paleman artena barang se eghiba bakto mole (oleh-oleh)."
      },
      {
        topic: "Kosa Oca'",
        question: "Oca' 'kacong' dhalem bhasa Madura eangghuy kaangghuy nyebbut ...",
        options: ["Na'-kana' lalake'", "Na'-kana' bine'", "Orèng towa", "Ghuru"],
        correctAnswer: 0,
        explanation: "Kacong artena sebutan kaangghuy na'-kana' lalake'."
      },
      {
        topic: "Kosa Oca'",
        question: "Oca' 'cebbing' dhalem bhasa Madura eangghuy kaangghuy nyebbut ...",
        options: ["Na'-kana' lalake'", "Na'-kana' bine'", "Kae", "Eppa'"],
        correctAnswer: 1,
        explanation: "Cebbing artena sebutan kaangghuy na'-kana' bine'."
      },
      {
        topic: "Arsitektur Bhengko",
        question: "Ruang teras otaba ruang tamu e bhengko Madura esebbut ...",
        options: ["Dapor", "Bengsal", "Langghar", "Kandang"],
        correctAnswer: 1,
        explanation: "Bengsal artena teras / ruang tamu."
      },
      {
        topic: "Geografi Madura",
        question: "Polo kene' e Sumenep se gadhuwan kadar oksigen paleng tengghi e dunnya anyama ...",
        options: ["Gili Iyang", "Polo Bali", "Polo Jawa", "Polo Bawean"],
        correctAnswer: 0,
        explanation: "Gili Iyang e Sumenep terkenal oksigen murni paleng tengghi nomer dhuwa' e dunnya."
      },
      {
        topic: "Geografi Madura",
        question: "Polo e temorra Sumenep se kalonta kalaban karang tor aeng bheneng anyama ...",
        options: ["Gili Labak", "Polo Madura", "Polo Kangean", "Polo Sapeken"],
        correctAnswer: 0,
        explanation: "Gili Labak objek wisata bahari kalonta e Sumenep."
      },
      {
        topic: "Komoditas Pertanian",
        question: "Dhaun tembako Madura se misuwur kalaban aromana esebbut ...",
        options: ["Dhaun Perak", "Dhaun Emas", "Dhaun Tembaga", "Dhaun Permata"],
        correctAnswer: 1,
        explanation: "Dhaun tembako Madura esebbut 'dhaun emas'."
      },
      {
        topic: "Komoditas Pertanian",
        question: "Buwa salak se manes ban ranyap asalla dhari kabupaten ...",
        options: ["Bangkalan", "Sampang", "Pamekasan", "Sumenep"],
        correctAnswer: 0,
        explanation: "Salak Bangkalan kalonta manes tor renyah."
      }
    ],
    sulit: [
      {
        topic: "Morfologi",
        question: "Oca' 'anoles' asalla dhari oca' asal ...",
        options: ["Toles", "Les", "Noles", "Oles"],
        correctAnswer: 0,
        explanation: "Oca' asalla iya areya toles."
      },
      {
        topic: "Morfologi",
        question: "Oca' 'ngakan' asalla dhari oca' asal ...",
        options: ["Makan", "Kakan", "Kan", "Neda"],
        correctAnswer: 1,
        explanation: "Oca' asalla kakan (kakan + ater-ater ang- daddi ngakan)."
      },
      {
        topic: "Morfologi",
        question: "Oca' 'ngenum' asalla dhari oca' asal ...",
        options: ["Enom", "Minum", "Num", "Nom"],
        correctAnswer: 0,
        explanation: "Oca' asalla enom."
      },
      {
        topic: "Morfologi",
        question: "Oca' 'anyapo' asalla dhari oca' asal ...",
        options: ["Sapo", "Penyapu", "Yapo", "Sapuan"],
        correctAnswer: 0,
        explanation: "Oca' asalla sapo."
      },
      {
        topic: "Morfologi",
        question: "Oca' 'amace' asalla dhari oca' asal ...",
        options: ["Mace", "Bhaca", "Bacaan", "Ambacah"],
        correctAnswer: 1,
        explanation: "Oca' asalla bhaca."
      },
      {
        topic: "Morfologi",
        question: "Oca' rangkeppan 'bolak-bhalik' tamaso' macemma oca' ...",
        options: ["Dwilingga padha swara", "Dwilingga salin swara", "Dwipurwa", "Dwiwasana"],
        correctAnswer: 1,
        explanation: "Bolak-bhalik ngobah swara vokal (dwilingga salin swara)."
      },
      {
        topic: "Kosa Oca' Sastra",
        question: "Oca' 'cora' dhalem karya sastra Madura artena ...",
        options: ["Bagus atena", "Jahat / Licik / Curang", "Pinter", "Malerat"],
        correctAnswer: 1,
        explanation: "Cora artena licik, curang, otaba jahat."
      },
      {
        topic: "Kosa Oca' Sastra",
        question: "Oca' 'tondhu'' dhalem bhasa Madura artena ...",
        options: ["Patuh / Tunduk", "Melawan", "Berdiri", "Berlari"],
        correctAnswer: 0,
        explanation: "Tondhu' artena patuh otaba tunduk."
      },
      {
        topic: "Proses Batik",
        question: "Proses ngendhem kain e gentong tana liat dhalem tradisi Tanjungbumi esebbut ...",
        options: ["Batik Gentongan", "Batik Tulis", "Batik Cap", "Batik Sablon"],
        correctAnswer: 0,
        explanation: "Pewarnaan berulang di dalam gentong liat disebut batik gentongan."
      },
      {
        topic: "Kuliner Khas Madura",
        question: "Masakan 'Kaldu Kokot' Sumenep bahan utamana iya areya ...",
        options: ["Soko (kikil) sapi ban kacang ijo", "Ayam bakar ban keju", "Ikan laut ban santan", "Bebek pedas"],
        correctAnswer: 0,
        explanation: "Kaldu kokot ngangguy soko (kikil) sapi ban kacang ijo."
      },
      {
        topic: "Kesenian Musik",
        question: "Parbhidhaan Musik Daul kalaban Musik Saronen iya areya Daul lebbi ngutamagi ...",
        options: ["Perkusi kendang ban tong-tong se kompak", "Gesekan rebab", "Tiupan seruling lembut", "Nyanyian solo"],
        correctAnswer: 0,
        explanation: "Daul mengutamakan perkusi dinamis kendang dan tong-tong berhias."
      },
      {
        topic: "Kesenian Tari",
        question: "Gerakan khas Tari Topeng Getthak Pamekasan nyontoaghi watak tokoh ...",
        options: ["Baladewa se gagah perkasa", "Semar se lucu", "Petruk se lanjang", "Arjuna se alos"],
        correctAnswer: 0,
        explanation: "Topeng Getthak menceritakan Prabu Baladewa yang gagah perkasa."
      },
      {
        topic: "Seni Mamaca",
        question: "Tembang se ebaos dhalem seni Mamaca biyasana aesse ...",
        options: ["Carita babad, syiar Islam, tor piwulang becik", "Cerita gosip", "Lirik lagu pop", "Iklan barang"],
        correctAnswer: 0,
        explanation: "Mamaca berisi tembang piwulang dan babad agama."
      },
      {
        topic: "Kerapan Sapi",
        question: "Joki kerapan sapi biasana epele na'-kana' se ...",
        options: ["Rajâ ban berra'", "Kene' tor lincah", "Towa ban lesse", "Lemah"],
        correctAnswer: 1,
        explanation: "Joki dipilih anak kecil lincah agar laju sapi kencang."
      },
      {
        topic: "Kerapan Sapi",
        question: "Lomba Karapan Sapi se paleng rajah perebutan Piala Presiden eatorraghi e kota ...",
        options: ["Surabaya", "Pamekasan (Stadion Bakorwil)", "Jakarta", "Malang"],
        correctAnswer: 1,
        explanation: "Final Kerapan Sapi Piala Presiden digelar di Stadion Karapan Sapi Bakorwil Pamekasan."
      },
      {
        topic: "Parebhasan",
        question: "Parebhasan 'Kerras akadhi bhâto, mènḍâ akadhi kapo'' ngajarragi tatakrama ...",
        options: ["Tegas dhalem prinsip namong lebur ban lembut atena", "Gampang neser", "Kerras kapala", "Ta' andhi' pendirian"],
        correctAnswer: 0,
        explanation: "Watak orang Madura berpendirian tegas namun hatinya santun pemaaf."
      },
      {
        topic: "Parebhasan",
        question: "Parebhasan 'Mon ta' ngèbâ olo jhâ' mèkkol' ngajarragi tatakrama ...",
        options: ["Jhâ' mamaksa'agi badan mon ta' kowat", "Kudu alako terros", "Kudu mekkol barang berra'", "Jhâ' menta tolong"],
        correctAnswer: 0,
        explanation: "Jangan memaksakan diri di luar kesanggupan."
      },
      {
        topic: "Kosa Oca'",
        question: "Oca' 'bannya'' (banyak) lawanna iya areya ...",
        options: ["Sakone' (sedikit)", "Rajah", "Tengghi", "Bheneng"],
        correctAnswer: 0,
        explanation: "Bannya' lawanna sakone'."
      },
      {
        topic: "Kosa Oca'",
        question: "Oca' 'lempa' dhalem bhasa Indonesia artena ...",
        options: ["Lapar", "Kenyang", "Haus", "Mengantuk"],
        correctAnswer: 1,
        explanation: "Lempa artena kenyang setelah makan."
      },
      {
        topic: "Kosa Oca'",
        question: "Oca' 'rapa'' dhalem bhasa Indonesia artena ...",
        options: ["Lapar", "Kenyang", "Segar", "Tidur"],
        correctAnswer: 0,
        explanation: "Rapa' artena lapar."
      },
      {
        topic: "Undhag-Usuk Bhasa",
        question: "Bhasa engghi-enten eangghuy kaangghuy acaca da' ...",
        options: ["Orèng se loma namong panggghun saling ngormati", "Na'-kana' kene'", "Kèbân", "Muso"],
        correctAnswer: 0,
        explanation: "Engghi-enten bahasa madya saling menghormati secara akrab."
      },
      {
        topic: "Undhag-Usuk Bhasa",
        question: "Oca' 'seddhi' (sedih) alossa daddi ...",
        options: ["Sedhi / Susah", "Senneng", "Gumbira", "Moker"],
        correctAnswer: 0,
        explanation: "Oca' alos dhari seddhi iya areya sedhi / susah."
      },
      {
        topic: "Undhag-Usuk Bhasa",
        question: "Oca' 'rassa' alossa daddi ...",
        options: ["Raos", "Rassana", "Perasa", "Karsa"],
        correctAnswer: 0,
        explanation: "Rassa alossa daddi 'raos'."
      },
      {
        topic: "Undhag-Usuk Bhasa",
        question: "Oca' 'karep' (keinginan) alossa daddi ...",
        options: ["Karsa", "Raos", "Sratan", "Niat"],
        correctAnswer: 0,
        explanation: "Karep alossa daddi 'karsa'."
      },
      {
        topic: "Geografi Madura",
        question: "Selat se misah Polo Jawa ban Polo Madura anyama ...",
        options: ["Selat Sunda", "Selat Madura", "Selat Bali", "Selat Malaka"],
        correctAnswer: 1,
        explanation: "Selat Madura misah Pulau Madura kalaban Pulau Jawa."
      },
      {
        topic: "Infrastruktur",
        question: "Jembatan lantang se nyambung Surabaya ban Bangkalan anyama ...",
        options: ["Jembatan Suramadu", "Jembatan Ampera", "Jembatan Merah", "Jembatan Barelang"],
        correctAnswer: 0,
        explanation: "Jembatan Suramadu jembatan penghubung Surabaya-Madura."
      },
      {
        topic: "Julukan Madura",
        question: "Polo Madura gadhuwan julukan 'Polo Garam' polana ...",
        options: ["Produsen uyah paleng rajâ e Indonesia", "Tanana abarna pote", "Aeng songayna assen", "Banya' tambang emas"],
        correctAnswer: 0,
        explanation: "Madura produsen garam rakyat dan tambak garam terbesar di Indonesia."
      },
      {
        topic: "Sejarah Madura",
        question: "Karaton se gi' badha bangunanna tor musiumna e Madura iya areya Karaton ...",
        options: ["Sumenep", "Bangkalan", "Sampang", "Pamekasan"],
        correctAnswer: 0,
        explanation: "Karaton Sumenep satu-satunya bangunan keraton utuh di Jawa Timur."
      },
      {
        topic: "Wisata Alam",
        question: "Fenomena api abadi se ta' perna mate e Pamekasan esebbut ...",
        options: ["Api Biru", "Api Tak Kunjung Padam", "Lahar Panas", "Gunung Berapi"],
        correctAnswer: 1,
        explanation: "Api Tak Kunjung Padam objek wisata api abadi di Pamekasan."
      },
      {
        topic: "Tata Krama",
        question: "Parilaku santun da' tamuy se rabhu da' bhengko esebbut ...",
        options: ["Ngonjhâng tor hormat", "Nutup panto", "Nanges", "Nolak tamuy"],
        correctAnswer: 0,
        explanation: "Orang Madura memuliakan tamu yang datang ke rumah."
      }
    ]
  },
  5: {
    mudah: [
      {
        topic: "Parebhasan Madura",
        question: "Urutan hormat tertinggi orang Madura: 'Bhuppa' Bhabbhu' Ghuru Rato' teggessa ...",
        options: ["Ayah, Ibu, Guru, Pemerintah/Pemimpin", "Guru, Murid, Teman, Saudara", "Ibu, Bibi, Kakek, Nenek", "Raja, Prajurit, Petani, Nelayan"],
        correctAnswer: 0,
        explanation: "Bhuppa' (Ayah), Bhabbhu' (Ibu), Ghuru (Guru), Rato (Pemerintah/Raja)."
      },
      {
        topic: "Parebhasan Madura",
        question: "Parebhasan 'Abhantal omba' asapo' angen' iya areya parebhasan etos kerja orèng ...",
        options: ["Petani tebu", "Nelayan / Pelaut Madura", "Pedagang pasar", "Tukang jahit"],
        correctAnswer: 1,
        explanation: "Etos kerja keras pelaut Madura mengarungi samudra."
      },
      {
        topic: "Parebhasan Madura",
        question: "Parebhasan 'Rampak naong beringin korong' artena kaodhi'an se ...",
        options: ["Dame, aman, rukun, tor tentrem", "Karepotan rajah", "Banjir aeng", "Kaserang muso"],
        correctAnswer: 0,
        explanation: "Maknanya kehidupan yang rukun, damai, dan aman sentosa."
      },
      {
        topic: "Parebhasan Madura",
        question: "Parebhasan 'Ango'an pote tolang e tembang pote mata' ngajarragi pentingnga ...",
        options: ["Ngempos kaju", "Menjaga harga diri / kehormatan", "Gampang menyerah", "Nolak kanca"],
        correctAnswer: 1,
        explanation: "Lebih baik mati daripada menanggung malu kehormatan."
      },
      {
        topic: "Geografi Madura",
        question: "Polo Madura ebagi daddi pirang kabupaten?",
        options: ["2 Kabupaten", "3 Kabupaten", "4 Kabupaten", "5 Kabupaten"],
        correctAnswer: 2,
        explanation: "Madura terdiri dari 4 kabupaten: Bangkalan, Sampang, Pamekasan, Sumenep."
      },
      {
        topic: "Geografi Madura",
        question: "Empat kabupaten se badha e Polo Madura iya areya ...",
        options: ["Bangkalan, Sampang, Pamekasan, Sumenep", "Surabaya, Gresik, Sidoarjo, Mojokerto", "Bangkalan, Pasuruan, Jember, Banyuwangi", "Sampang, Malang, Tuban, Lamongan"],
        correctAnswer: 0,
        explanation: "4 Kabupaten di Madura: Bangkalan, Sampang, Pamekasan, Sumenep."
      },
      {
        topic: "Sejarah Madura",
        question: "Karaton pangeran Somala badha e kabupaten ...",
        options: ["Bangkalan", "Sampang", "Pamekasan", "Sumenep"],
        correctAnswer: 3,
        explanation: "Karaton Panembahan Somala badha e Sumenep."
      },
      {
        topic: "Geografi Madura",
        question: "Selat se misah Madura kalaban Polo Jaba anyama ...",
        options: ["Selat Sunda", "Selat Madura", "Selat Karimata", "Selat Makassar"],
        correctAnswer: 1,
        explanation: "Selat Madura misah Pulau Madura dari Pulau Jawa."
      },
      {
        topic: "Landmark Madura",
        question: "Jembatan se nyambung Madura ban Polo Jaba anyama ...",
        options: ["Jembatan Merah", "Jembatan Ampera", "Jembatan Suramadu", "Jembatan Barelang"],
        correctAnswer: 2,
        explanation: "Jembatan Nasional Suramadu."
      },
      {
        topic: "Kosa Oca'",
        question: "Oca' 'tase'' dhalem bhasa Indonesia artena ...",
        options: ["Laut", "Gunung", "Sungai", "Danau"],
        correctAnswer: 0,
        explanation: "Tase' artena laut."
      }
    ],
    sedang: [
      {
        topic: "Parebhasan Madura",
        question: "Parebhasan 'Mon aeng tennang jhâ' sangka tadha' boyana' teggessa ...",
        options: ["Orèng se mendem jhâ' esangka tadha' elmona", "Aeng tase' ta' andhi' juko'", "Jhâ' mandi e songay", "Aeng tennang ta' bisa ngalir"],
        correctAnswer: 0,
        explanation: "Orang yang diam jangan diremehkan, mungkin memiliki ilmu dan kemampuan besar."
      },
      {
        topic: "Parebhasan Madura",
        question: "Parebhasan 'Ngadep ka bara' nenggu ka temor' teggessa orèng se ...",
        options: ["Gagah perkasa", "Ta' konsisten / bimbang atena", "Penter mace", "Rajah bhengkona"],
        correctAnswer: 1,
        explanation: "Maknanya orang yang ragu-ragu dan tidak konsisten."
      },
      {
        topic: "Parebhasan Madura",
        question: "Parebhasan 'Olo ta' ekapala, bunto' ta' ekaeko'' teggessa ...",
        options: ["Kèbân ta' andhi' bunto'", "Ta' andhi' pendirian kowat / ta' bertanggung jawab", "Orèng se penter", "Kèbân se lari"],
        correctAnswer: 1,
        explanation: "Maknanya tidak berpendirian teguh dan tidak bisa diandalkan."
      },
      {
        topic: "Parebhasan Madura",
        question: "Parebhasan 'Aeng sakendhi' ecampor aeng sacangkek' teggessa ...",
        options: ["Mencampuradukkan perkara besar dan perkara sepele", "Aeng kotor ecampor aeng bheneng", "Melle kendhi' anyar", "Mandi e sumor"],
        correctAnswer: 0,
        explanation: "Mencampur aduk persoalan hingga menjadi kacau."
      },
      {
        topic: "Parebhasan Madura",
        question: "Ungkapan 'Ngalor aeng' dhalem kaodhi'an Madura teggessa ...",
        options: ["Nora' adat otaba aturan se becik", "Ngombe aeng", "Mandi e songay", "Nyiram taneman"],
        correctAnswer: 0,
        explanation: "Ngalor aeng artena mengikuti adat istiadat dan kebiasaan yang baik."
      },
      {
        topic: "Transportasi Laut",
        question: "Pelabuhan penyeberangan kapal ferry e Bangkalan anyama pelabuhan ...",
        options: ["Kamal", "Tanjung Perak", "Ketapang", "Gilimanuk"],
        correctAnswer: 0,
        explanation: "Pelabuhan Kamal penyeberangan tradisional Bangkalan."
      },
      {
        topic: "Transportasi Laut",
        question: "Pelabuhan penyeberangan e Surabaya se nyambung ka pelabuhan Kamal anyama ...",
        options: ["Ujung", "Tanjung Mas", "Merak", "Bakauheni"],
        correctAnswer: 0,
        explanation: "Ujung penyeberangan Surabaya ke Kamal."
      },
      {
        topic: "Industri Madura",
        question: "Uyah (garam) e Madura ehasellagi dhari penguapan ...",
        options: ["Aeng tase' kalaban panas matare", "Aeng sumor", "Aeng ojan", "Aeng songay"],
        correctAnswer: 0,
        explanation: "Garam dihasilkan dari kristalisasi air laut dengan terik matahari."
      },
      {
        topic: "Wisata Alam",
        question: "Bukit kapur se endah minangka objek wisata e Bangkalan anyama ...",
        options: ["Bukit Jaddih & Arosbaya", "Gunung Bromo", "Gunung Semeru", "Kawah Ijen"],
        correctAnswer: 0,
        explanation: "Bukit Jaddih dan bukit kapur Arosbaya di Bangkalan."
      },
      {
        topic: "Wisata Pantai",
        question: "Pantai pasir pote kalaban cemara udang rimbun e Sumenep anyama ...",
        options: ["Pantai Lombang & Slopeng", "Pantai Kuta", "Pantai Parangtritis", "Pantai Ancol"],
        correctAnswer: 0,
        explanation: "Pantai Lombang terkenal pohon cemara udang rimbun."
      },
      {
        topic: "Wisata Pantai",
        question: "Pantai kalaban bukit pasir endah e Sumenep anyama ...",
        options: ["Pantai Slopeng", "Pantai Kenjeran", "Pantai Marina", "Pantai Sanur"],
        correctAnswer: 0,
        explanation: "Pantai Slopeng memiliki bukit pasir putih yang unik."
      },
      {
        topic: "Tradisi Madura",
        question: "Upacara selamatan sunatan na'-kana' e Madura esebbut upacara ...",
        options: ["Samatan / Kitanan", "Karapan", "Mamaca", "Ro'kat tase'"],
        correctAnswer: 0,
        explanation: "Samatan iya areya upacara khitanan adat Madura."
      },
      {
        topic: "Sastra Madura",
        question: "Seni melantunkan tembang macapat kalaban iringan suling e Madura anyama ...",
        options: ["Mamaca / Macapat Madura", "Dangdut", "Keroncong", "Campursari"],
        correctAnswer: 0,
        explanation: "Macapat / Mamaca Madura seni sastra tembang bernilai luhur."
      },
      {
        topic: "Undhag-Usuk Bhasa",
        question: "Ondhaggha bhasa Madura sacara garis rajah ebagi daddi 3, iya areya ...",
        options: ["Enja'-Iya, Engghi-Enten, Engghi-Bhunten", "Ngoko, Krama, Sunda", "Melayu, Jawa, Madura", "Loma, Alos, Kasar"],
        correctAnswer: 0,
        explanation: "Tiga tingkatan: Enja'-iya, Engghi-enten, Engghi-bhunten."
      },
      {
        topic: "Undhag-Usuk Bhasa",
        question: "Bhasa se eangghuy ka orèng se sanget eormati akadhi Kiai otaba Sesepuh iya areya ...",
        options: ["Engghi-Bhunten krama alos", "Enja'-iya", "Bhasa pasar", "Bhasa loma"],
        correctAnswer: 0,
        explanation: "Krama alos (engghi-bhunten) tingkat penghormatan tertinggi."
      },
      {
        topic: "Kosa Oca'",
        question: "Oca' 'seppo' dhalem bhasa Indonesia artena ...",
        options: ["Muda", "Tua / Sesepuh", "Anak kecil", "Kawan"],
        correctAnswer: 1,
        explanation: "Seppo artena sepuh / orang tua."
      },
      {
        topic: "Kosa Oca'",
        question: "Oca' 'ngodha' dhalem bhasa Indonesia artena ...",
        options: ["Tua", "Muda", "Kaya", "Miskin"],
        correctAnswer: 1,
        explanation: "Ngodha artena muda."
      },
      {
        topic: "Kosa Oca' Sastra",
        question: "Oca' 'jumantara' dhalem karya sastra Madura artena ...",
        options: ["Langit / Udara awang-awang", "Dasar laut", "Hutan rimba", "Gua batu"],
        correctAnswer: 0,
        explanation: "Jumantara artena angkasa / langit."
      },
      {
        topic: "Kosa Oca' Sastra",
        question: "Oca' 'samudra' dhalem karya sastra artena ...",
        options: ["Tase' se paleng rajah", "Songay kene'", "Danau", "Kolam"],
        correctAnswer: 0,
        explanation: "Samudra iya areya lautan luas."
      },
      {
        topic: "Bangunan Bersejarah",
        question: "Bangunan kennengngan rato-rato Sumenep se lambe' esebbut ...",
        options: ["Karaton", "Benteng", "Menara", "Rumah dinas"],
        correctAnswer: 0,
        explanation: "Karaton Sumenep tempat tinggal adipati dan raja Sumenep."
      }
    ],
    sulit: [
      {
        topic: "Analisis Parebhasan",
        question: "Dhalem 'Bhuppa' Bhabbhu' Ghuru Rato', urutan nomer dhuwa' iya areya ...",
        options: ["Bhuppa' (Ayah)", "Bhabbhu' (Ibu)", "Ghuru (Guru)", "Rato (Pemerintah)"],
        correctAnswer: 1,
        explanation: "Bhabbhu' (Ibu) menempati urutan kedua setelah ayah."
      },
      {
        topic: "Analisis Parebhasan",
        question: "Filosofi 'Abhantal omba' asapo' angen' nampakagi sipat orèng Madura se ...",
        options: ["Pantang menyerah, kerras alako, tor ulet", "Gampang putus asa", "Takut ombak", "Malas melaut"],
        correctAnswer: 0,
        explanation: "Menunjukkan etos kerja keras pantang menyerah pelaut Madura."
      },
      {
        topic: "Analisis Parebhasan",
        question: "Dhalem parebhasan 'Ango'an pote tolang e tembang pote mata', oca' 'pote tolang' artena ...",
        options: ["Mati / Berkalang tanah dhalem kabecikan", "Sakit tulang", "Makan kapur", "Tidur nyenyak"],
        correctAnswer: 0,
        explanation: "Pote tolang artena mati membela harga diri dan kebenaran."
      },
      {
        topic: "Analisis Parebhasan",
        question: "Dhalem parebhasan kasebbut, oca' 'pote mata' artena ...",
        options: ["Sakit mata", "Menanggung rasa todus / malu kehormatan", "Mata merah", "Mata buta"],
        correctAnswer: 1,
        explanation: "Pote mata artena menanggung rasa malu kehormatan."
      },
      {
        topic: "Parebhasan",
        question: "Parebhasan 'Akadhi nangka aloba'an' teggessa ...",
        options: ["Katon endah e lowar namong dhalemma rosta / busuk", "Buah nangka se manes", "Pohon nangka se rajah", "Kakanan enak"],
        correctAnswer: 0,
        explanation: "Kelihatan baik dari luar namun hatinya buruk."
      },
      {
        topic: "Parebhasan",
        question: "Parebhasan 'Apolo tebbu' teggessa ...",
        options: ["Menanam tebu", "Manes oca'na namong andhi' pamaksod se nyalenddha", "Gula tebu manes", "Menjual es tebu"],
        correctAnswer: 1,
        explanation: "Manis tutur katanya namun memiliki maksud terselubung."
      },
      {
        topic: "Tata Bhasa (Saroja)",
        question: "Oca' saroja dhalem bhasa Madura iya areya dhu oca' se ...",
        options: ["Padha otaba semma' teggessa ekae' daddi settong", "Artina matolak", "Bhasa asing", "Oca' tanduk"],
        correctAnswer: 0,
        explanation: "Kata majemuk dua kata bermakna mirip untuk mempertegas maksud."
      },
      {
        topic: "Tata Bhasa (Saroja)",
        question: "Contoh oca' saroja dhalem bhasa Madura iya areya ...",
        options: ["Andhap asor", "Buku toles", "Meja korse", "Papan tulis"],
        correctAnswer: 0,
        explanation: "Andhap asor (rendah hati) adalah contoh oca' saroja."
      },
      {
        topic: "Tata Bhasa (Saroja)",
        question: "Oca' saroja 'lebur tumpes' teggessa ...",
        options: ["Rusak sama sekali / musnah", "Bagus sekali", "Kaya raya", "Senang sekali"],
        correctAnswer: 0,
        explanation: "Lebur tumpes artena hancur luluh sama sekali."
      },
      {
        topic: "Tata Bhasa (Saroja)",
        question: "Oca' saroja 'tata krama' teggessa ...",
        options: ["Aturan sopan santun", "Susunan buku", "Keluarga besar", "Alat musik"],
        correctAnswer: 0,
        explanation: "Tata krama artena sopan santun."
      },
      {
        topic: "Sejarah Madura",
        question: "Karaton Sumenep ebangun kalaban sentuhan campuran gaya arsitektur ...",
        options: ["Madura, Islam, Jawa, Tionghoa, tor Eropa", "Jepang dan Korea", "Mesir kuno", "Yunani kuno"],
        correctAnswer: 0,
        explanation: "Perpaduan akulturasi arsitektur Madura, Tionghoa, Eropa, dan Jawa-Islam."
      },
      {
        topic: "Sejarah Madura",
        question: "Arsitek Tionghoa se ngarancang Masjid Jami' Sumenep tor Karaton anyama ...",
        options: ["Lauw Piango", "Cheng Ho", "Tan Jin Sing", "Liem Swie King"],
        correctAnswer: 0,
        explanation: "Lauw Piango arsitek yang merancang Keraton dan Masjid Jamik Sumenep."
      },
      {
        topic: "Sejarah Madura",
        question: "Raja Sumenep se misuwur wicaksana, ahli bhasa tor noles macapat iya areya ...",
        options: ["Sultan Abdurrahman (Panembahan Somala)", "Ken Arok", "Hayam Wuruk", "Gajah Mada"],
        correctAnswer: 0,
        explanation: "Sultan Abdurrahman raja Sumenep cendekiawan yang dihormati Raffles."
      },
      {
        topic: "Geografi Madura",
        question: "Dhu kabupaten se badha e tengnga Polo Madura iya areya ...",
        options: ["Sampang ban Pamekasan", "Bangkalan dan Sumenep", "Surabaya dan Malang", "Gresik dan Tuban"],
        correctAnswer: 0,
        explanation: "Sampang dan Pamekasan berada di bagian tengah Pulau Madura."
      },
      {
        topic: "Geografi Madura",
        question: "Kabupaten paleng bara' e Polo Madura se semma' ka Surabaya iya areya ...",
        options: ["Bangkalan", "Sumenep", "Pamekasan", "Sampang"],
        correctAnswer: 0,
        explanation: "Bangkalan kabupaten paling barat terhubung Jembatan Suramadu."
      },
      {
        topic: "Geografi Madura",
        question: "Kabupaten paleng temor e Polo Madura kalaban banya' kapolowan anyama ...",
        options: ["Sumenep", "Bangkalan", "Sampang", "Pamekasan"],
        correctAnswer: 0,
        explanation: "Sumenep kabupaten paling timur dengan 126 pulau."
      },
      {
        topic: "Geografi Madura",
        question: "Polo Kangean, Masalembu, ban Sapeken tamaso' wilayah kabupaten ...",
        options: ["Sumenep", "Bangkalan", "Sampang", "Pamekasan"],
        correctAnswer: 0,
        explanation: "Kangean, Masalembu, dan Sapeken masuk kabupaten Sumenep."
      },
      {
        topic: "Wisata Sejarah",
        question: "Kompleks pasarean (makam) raja-raja Sumenep e attas bukit anyama ...",
        options: ["Asta Tinggi", "Asta Aer Mata", "Makam Troloyo", "Imogiri"],
        correctAnswer: 0,
        explanation: "Asta Tinggi kompleks pemakaman raja-raja keraton Sumenep."
      },
      {
        topic: "Wisata Religi",
        question: "Makam Syaikhona Kholil, ulama rajah guru para ulama Nusantara badha e ...",
        options: ["Martajasah, Bangkalan", "Sumenep", "Pamekasan", "Sampang"],
        correctAnswer: 0,
        explanation: "Makam Syaikhona Kholil di Martajasah Bangkalan."
      },
      {
        topic: "Wisata Sejarah",
        question: "Pasarean Ratu Ibu (Asta Aer Mata Ebu) badha e kabupaten ...",
        options: ["Bangkalan (Arosbaya)", "Sumenep", "Pamekasan", "Sampang"],
        correctAnswer: 0,
        explanation: "Asta Aer Mata Ebu berada di Arosbaya Bangkalan."
      },
      {
        topic: "Tradisi Mamaca",
        question: "Mamaca Madura biasana elakoni bakto acara ...",
        options: ["Ro'kat, rasulan, otaba nadzar hajat", "Lomba balap motor", "Ujian sekolah", "Belanja e mall"],
        correctAnswer: 0,
        explanation: "Mamaca dilantunkan pada upacara selamatan ro'kat atau hajat."
      },
      {
        topic: "Kerapan Sapi",
        question: "Alat injegan kaju se etompang joki dhalem karapan sape esebbut ...",
        options: ["Kaleles / Gandewa", "Lencak", "Egrang", "Saronen"],
        correctAnswer: 0,
        explanation: "Kaleles tempat pijakan kayu joki saat memacu sapi kerapan."
      },
      {
        topic: "Kesenian Tari",
        question: "Tari Topeng Madura nampilagi carita babad epik klasik akadhi ...",
        options: ["Carita Panji otaba Mahabharata", "Cinderella", "Tarzan", "Robin Hood"],
        correctAnswer: 0,
        explanation: "Tari Topeng mengisahkan lakon Panji dan kepahlawanan."
      },
      {
        topic: "Undhag-Usuk Bhasa",
        question: "Oca' 'meyos' (engghi-bhunten) mon daddi engghi-enten iya areya ...",
        options: ["Mangkat", "Entar", "Mole", "Rabhu"],
        correctAnswer: 0,
        explanation: "Tingkatan: entar (enja'-iya) -> mangkat (engghi-enten) -> meyos (engghi-bhunten)."
      },
      {
        topic: "Undhag-Usuk Bhasa",
        question: "Oca' 'dha'ar' (engghi-bhunten) mon daddi engghi-enten iya areya ...",
        options: ["Neddha", "Ngakan", "Ngenom", "Nyaba'"],
        correctAnswer: 0,
        explanation: "Tingkatan: ngakan (enja'-iya) -> neddha (engghi-enten) -> dha'ar (engghi-bhunten)."
      },
      {
        topic: "Undhag-Usuk Bhasa",
        question: "Oca' 'sarean' (engghi-bhunten) mon daddi engghi-enten iya areya ...",
        options: ["Tondhem", "Tedhung", "Merem", "Mole"],
        correctAnswer: 0,
        explanation: "Tingkatan: tedhung -> tondhem -> sarean."
      },
      {
        topic: "Undhag-Usuk Bhasa",
        question: "Manabi nyebbut aba' dhibi' e adha'anna orèng towa, ta' olle ngangghuy oca' ...",
        options: ["Dha'ar otaba meyos (krama inggil)", "Neddha otaba mangkat", "Abdhina", "Kaula"],
        correctAnswer: 0,
        explanation: "Krama inggil (dha'ar/meyos) hanya untuk lawan bicara, bukan untuk diri sendiri."
      },
      {
        topic: "Undhag-Usuk Bhasa",
        question: "Prinsip tatakrama Madura: ka aba' dhibi' ngandhapaghi badan, ka orèng laen ...",
        options: ["Ngalorraghi / ngormati", "Menghina", "Nolak", "Ngolok"],
        correctAnswer: 0,
        explanation: "Ngalorraghi / menjunjung tinggi rasa hormat kepada lawan bicara."
      },
      {
        topic: "Moral Madura",
        question: "Ajaran moral Madura kaangghuy saleng nolong tor rukun dhalem kabhisaan esebbut ...",
        options: ["Rampak naong", "Kerras cangkem", "Apolo tebbu", "Olo bunto'"],
        correctAnswer: 0,
        explanation: "Rampak naong lambang keharmonisan dan kerukunan."
      },
      {
        topic: "Landmark Madura",
        question: "Monumen Are' Lancor minangka landmark pusat kota e kabupaten ...",
        options: ["Pamekasan", "Bangkalan", "Sampang", "Sumenep"],
        correctAnswer: 0,
        explanation: "Monumen Are' Lancor berada di alun-alun kota Pamekasan."
      }
    ]
  },
  6: {
    mudah: [
      {
        topic: "Tembang Macapat",
        question: "Slagha settong tembang macapat Madura se misuwur iya areya ...",
        options: ["Artate (Dhandhanggula)", "Dangdut", "Campursari", "Keroncong"],
        correctAnswer: 0,
        explanation: "Artate (Dhandhanggula) salah satu tembang macapat klasik Madura."
      },
      {
        topic: "Tembang Macapat",
        question: "Tembang macapat se eangghuy kaangghuy nyritaaaghi rasa asmara tor tresna anyama ...",
        options: ["Asmaradana", "Pucung", "Durma", "Maskumambang"],
        correctAnswer: 0,
        explanation: "Asmaradana melambangkan perasaan cinta kasih."
      },
      {
        topic: "Tokoh & Carita Rakyat",
        question: "Satriya sakti carita rakyat Songennep se anumpes muso Blambangan anyama ...",
        options: ["Joko Tole", "Si Pitung", "Lutung Kasarung", "Malin Kundang"],
        correctAnswer: 0,
        explanation: "Joko Tole satriya sakti carita rakyat Madura."
      },
      {
        topic: "Tokoh & Carita Rakyat",
        question: "Kuda terbang se esomping kalaban cemeti kilat Joko Tole anyama ...",
        options: ["Si Mega", "Si Hitam", "Si Putih", "Si Kilat"],
        correctAnswer: 0,
        explanation: "Si Mega iya areya jaran ngabbher (kuda terbang) Joko Tole."
      },
      {
        topic: "Pahlawan Nasional",
        question: "Pangeran se mimpin perlawanan kerras da' VOC dhari Madura anyama ...",
        options: ["Pangeran Trunojoyo", "Pangeran Diponegoro", "Pattimura", "Imam Bonjol"],
        correctAnswer: 0,
        explanation: "Pangeran Trunojoyo pahlawan perlawanan dari Sampang Madura."
      },
      {
        topic: "Sejarah Madura",
        question: "Adipati Songennep se abhanto Raden Wijaya maddhek Karajan Majapahit anyama ...",
        options: ["Arya Wiraraja", "Joko Tole", "Ke' Lesap", "Trunojoyo"],
        correctAnswer: 0,
        explanation: "Arya Wiraraja adipati Songennep pendiri Majapahit."
      },
      {
        topic: "Pahlawan Nasional",
        question: "Pahlawan Nasional penerbang AURI se asalla dhari Sampang Madura anyama ...",
        options: ["Halim Perdanakusuma", "Sudirman", "Iswahyudi", "Adisumarmo"],
        correctAnswer: 0,
        explanation: "Marsekal Muda TNI (Anumerta) Halim Perdanakusuma pahlawan dari Sampang."
      },
      {
        topic: "Legenda Madura",
        question: "Putri keraton se tapa e guwa Payudan Guluk-Guluk Sumenep anyama ...",
        options: ["Potre Koneng", "Roro Anteng", "Dewi Kilisuci", "Nyi Roro Kidul"],
        correctAnswer: 0,
        explanation: "Potre Koneng ibunda Joko Tole bertapa di Gua Payudan Sumenep."
      },
      {
        topic: "Aksara Tradisional",
        question: "Aksara tradisional se eangghuy noles sastra Madura lambe' anyama aksara ...",
        options: ["Carakan / Pegon", "Latin", "Kanji", "Hangeul"],
        correctAnswer: 0,
        explanation: "Carakan Madura dan Arab Pegon aksara penulisan naskah kuno Madura."
      },
      {
        topic: "Tembang Macapat",
        question: "Paugeran dhalem tembang macapat biasana eator sareng aturan ...",
        options: ["Guru gatra, guru wilangan, guru lagu", "Bait dan rima bebas", "Not angka saja", "Jumlah huruf bebas"],
        correctAnswer: 0,
        explanation: "Macapat terikat guru gatra, guru wilangan, dan guru lagu."
      }
    ],
    sedang: [
      {
        topic: "Tembang Macapat",
        question: "Jumlah baris dhalem sabaid tembang macapat esebbut ...",
        options: ["Guru gatra", "Guru wilangan", "Guru lagu", "Guru swara"],
        correctAnswer: 0,
        explanation: "Guru gatra adalah jumlah baris dalam satu bait tembang."
      },
      {
        topic: "Tembang Macapat",
        question: "Jumlah wanda (suku kata) dhalem sabaris tembang macapat esebbut ...",
        options: ["Guru wilangan", "Guru gatra", "Guru lagu", "Guru swara"],
        correctAnswer: 0,
        explanation: "Guru wilangan adalah jumlah suku kata per baris."
      },
      {
        topic: "Tembang Macapat",
        question: "Tibana swara (huruf vokal) e pungkasanna baris tembang esebbut ...",
        options: ["Guru lagu", "Guru gatra", "Guru wilangan", "Guru suku"],
        correctAnswer: 0,
        explanation: "Guru lagu adalah jatuhnya vokal di akhir tiap baris."
      },
      {
        topic: "Tembang Macapat",
        question: "Tembang Sinom dhalem macapat Madura biasana nampilagi watak ...",
        options: ["Pangarap, ramah, tor swasana ngodha", "Perang tor kerras", "Teka-teki lucu", "Kasedihan mendalam"],
        correctAnswer: 0,
        explanation: "Sinom berwatak lincah, ramah, dan cocok untuk suasana muda."
      },
      {
        topic: "Tembang Macapat",
        question: "Tembang Pucung dhalem macapat Madura biasana aesse ...",
        options: ["Nasehat wicaksana, teka-teki, otaba lolucon", "Perang saudara", "Surat cinta", "Kasedihan mendalam"],
        correctAnswer: 0,
        explanation: "Pucung berwatak santai, tebak-tebakan, dan nasehat praktis."
      },
      {
        topic: "Tembang Macapat",
        question: "Tembang Durma dhalem macapat biasana eangghuy kaangghuy swasana ...",
        options: ["Perang, neser, tor sumanget berjuang", "Tidur nyenyak", "Bercanda tawa", "Pertanian"],
        correctAnswer: 0,
        explanation: "Durma berwatak tegas, amarah, dan suasana peperangan."
      },
      {
        topic: "Tokoh Carita",
        question: "Ayah kandung dhari Joko Tole iya areya Adipati Kudatundu se anyama ...",
        options: ["Adipoday", "Empu Kelleng", "Arya Wiraraja", "Cakraningrat"],
        correctAnswer: 0,
        explanation: "Adipoday iya areya ayahanda Joko Tole."
      },
      {
        topic: "Tokoh Carita",
        question: "Eppa' angkat se marawat Joko Tole sampek daddi pandhi bessi anyama ...",
        options: ["Empu Kelleng", "Adipoday", "Demang Plakaran", "Ke' Lesap"],
        correctAnswer: 0,
        explanation: "Empu Kelleng pandai besi di Pakandangan yang membesarkan Joko Tole."
      },
      {
        topic: "Carita Joko Tole",
        question: "Empu Kelleng teppa' alako maddhek pagar bessi e Karaton ...",
        options: ["Majapahit", "Singasari", "Kediri", "Demak"],
        correctAnswer: 0,
        explanation: "Membangun pagar besi di Keraton Majapahit atas titah Brawijaya."
      },
      {
        topic: "Tokoh Madura",
        question: "Satriya se mimpin gerakan perlawanan rakyat e Madura barat anyama ...",
        options: ["Ke' Lesap", "Si Pitung", "Ken Arok", "Untung Suropati"],
        correctAnswer: 0,
        explanation: "Ke' Lesap tokoh pemberontakan legendaris Madura barat."
      },
      {
        topic: "Sanajata Pusaka",
        question: "Keris pusaka se eghiba sareng Ke' Lesap anyama keris ...",
        options: ["Si Sekar Sendhang", "Mpu Gandring", "Kyai Sengkelat", "Naga Sasra"],
        correctAnswer: 0,
        explanation: "Keris Si Sekar Sendhang pusaka Ke' Lesap."
      },
      {
        topic: "Tata Bhasa (Saroja)",
        question: "Oca' saroja 'andhap asor' biasana eangghuy kaangghuy nyebbut ...",
        options: ["Sikap santun tor sopan", "Kekayaan", "Kemiskinan", "Kepandaian"],
        correctAnswer: 0,
        explanation: "Andhap asor sikap berbudi luhur dan rendah hati."
      },
      {
        topic: "Tata Bhasa (Saroja)",
        question: "Oca' saroja 'tata krama' dhalem pergaulan artena ...",
        options: ["Aturan sopan santun", "Hukum pidana", "Cara bertani", "Pakaian adat"],
        correctAnswer: 0,
        explanation: "Tata krama artena sopan santun bertutur kata dan bersikap."
      },
      {
        topic: "Carakan Madura",
        question: "Aksara kapeng settong dhalem Carakan Madura/Jawa iya areya aksara ...",
        options: ["Ha", "Na", "Ca", "Ra"],
        correctAnswer: 0,
        explanation: "Urutan Carakan diawali huruf Ha (Ha-Na-Ca-Ra-Ka)."
      },
      {
        topic: "Carakan Madura",
        question: "Jumlah aksara pokok (nglegena) dhalem Carakan Madura/Jawa badha ...",
        options: ["20 aksara", "26 aksara", "15 aksara", "28 aksara"],
        correctAnswer: 0,
        explanation: "Aksara pokok Carakan berjumlah 20 aksara."
      },
      {
        topic: "Bhasa Pidato",
        question: "Panyalenddha'an pidato resmi e bhasa Madura wajib ngangguy bhasa ...",
        options: ["Engghi-Bhunten krama alos", "Enja'-iya", "Bhasa loma", "Bhasa pasar"],
        correctAnswer: 0,
        explanation: "Pidato formal wajib menggunakan krama alos engghi-bhunten."
      },
      {
        topic: "Bhasa Pidato",
        question: "Salam pamukka' dhalem sambutan formal bhasa Madura eatorraghi kalaban ...",
        options: ["Assalamu'alaikum tor salam penghormatan ka sesepuh", "Menyanyi lagu", "Langsung penutup", "Bercanda"],
        correctAnswer: 0,
        explanation: "Diawali salam dan penghormatan kepada para undangan terhormat."
      },
      {
        topic: "Bhasa Pidato",
        question: "Bagian pokok panyampayan maksud dhalem pidato esebbut bagian ...",
        options: ["Esse pidato", "Pamukka' pidato", "Panotop pidato", "Amanat luar"],
        correctAnswer: 0,
        explanation: "Esse pidato memuat inti pokok yang disampaikan."
      },
      {
        topic: "Bhasa Pidato",
        question: "Nyo'on sapora manabi badha kasalaan oca' eatorraghi e bagian ...",
        options: ["Panotop pidato", "Pamukka'", "Judul", "Daftar isi"],
        correctAnswer: 0,
        explanation: "Permohonan maaf disampaikan di akhir / penutup pidato."
      },
      {
        topic: "Kosa Oca' Sastra",
        question: "Oca' 'piwulang' dhalem karya sastra Madura artena ...",
        options: ["Ajaran becik / Nasihat", "Pertengkaran", "Kemarahan", "Perjalanan"],
        correctAnswer: 0,
        explanation: "Piwulang artena ajaran kebaikan dan nasihat moral."
      }
    ],
    sulit: [
      {
        topic: "Macapat Gatra",
        question: "Tembang Pucung dhalem macapat Madura gadhuwan guru gatra pirang gatra?",
        options: ["4 gatra", "6 gatra", "7 gatra", "9 gatra"],
        correctAnswer: 0,
        explanation: "Tembang Pucung memiliki 4 baris (gatra) per bait (12u, 6a, 8i, 12a)."
      },
      {
        topic: "Macapat Watak",
        question: "Watak tembang Artate (Dhandhanggula) dhalem sastra macapat iya areya ...",
        options: ["Luwes, manis, tor endah kaangghuy pamukka'", "Tegas perang", "Seddhi neser", "Lolucon kasar"],
        correctAnswer: 0,
        explanation: "Artate berwatak luwes manis dan cocok untuk pembuka kisah indah."
      },
      {
        topic: "Macapat Watak",
        question: "Watak tembang Maskumambang dhalem macapat iya areya ...",
        options: ["Ngeses, seddhi, tor melas", "Gembira ria", "Tegas perang", "Lucu"],
        correctAnswer: 0,
        explanation: "Maskumambang menggambarkan kesedihan mendalam dan duka nestapa."
      },
      {
        topic: "Sastra Joko Tole",
        question: "Joko Tole bisa maddhek pagar bessi karaton Majapahit kalaban ...",
        options: ["Nyelot bessi panas panebbhesan ngangghuy badanna se sakti", "Memakai mesin las", "Memanggil seribu jin", "Membeli pagar siap pasang"],
        correctAnswer: 0,
        explanation: "Joko Tole membakar dan membengkokkan besi panas dengan tubuhnya yang kebal."
      },
      {
        topic: "Sastra Joko Tole",
        question: "Ganjaran dhari Raja Brawijaya Majapahit da' Joko Tole iya areya ...",
        options: ["Erabi'aghi kalaban Potre Dewi Ratnadi", "Diberi uang emas", "Dijadikan tukang kayu", "Diusir dari istana"],
        correctAnswer: 0,
        explanation: "Dinikahkan dengan putri Majapahit Dewi Ratnadi atas jasanya."
      },
      {
        topic: "Sastra Joko Tole",
        question: "Prajurit satriya Blambangan se kasoran eperrang sareng Joko Tole anyama ...",
        options: ["Demang Plakaran", "Arya Penangsang", "Si Pitung", "Minak Jinggo"],
        correctAnswer: 0,
        explanation: "Demang Plakaran dikalahkan Joko Tole dengan cemeti kilat dan kuda Si Mega."
      },
      {
        topic: "Sejarah Perjuangan",
        question: "Pangeran Trunojoyo merontak da' Mataram ban VOC polana ...",
        options: ["Bela kaadilan rakyat Madura tor nolak panjajahan VOC", "Mencari harta karun", "Ingin menjadi saudagar", "Kalah berjudi"],
        correctAnswer: 0,
        explanation: "Membela kedaulatan rakyat Madura dan menentang persekutuan Mataram-VOC."
      },
      {
        topic: "Sejarah Perjuangan",
        question: "Pasukan Trunojoyo berhasil maksa Amangkurat I ngallan karaton Plered e thon ...",
        options: ["1677", "1825", "1945", "1500"],
        correctAnswer: 0,
        explanation: "Pemberontakan Trunojoyo menduduki ibukota Mataram tahun 1677."
      },
      {
        topic: "Sejarah Madura",
        question: "Karaton Arosbaya Bangkalan lambe' e pimpin sareng adipati se anyama ...",
        options: ["Raden Praseno (Cakraningrat I)", "Gajah Mada", "Ken Arok", "Mulawarman"],
        correctAnswer: 0,
        explanation: "Raden Praseno (Pangeran Cakraningrat I) penguasa legendaris Madura barat."
      },
      {
        topic: "Sejarah Madura",
        question: "Arya Wiraraja daddi penguasa se mandiri e wilayah Jawa Timur bagian temor anyama ...",
        options: ["Lamajang Tigang Juru (Lumajang)", "Banten", "Pajajaran", "Sriwijaya"],
        correctAnswer: 0,
        explanation: "Arya Wiraraja memerintah kerajaan Lamajang Tigang Juru."
      },
      {
        topic: "Ondhaggha Bhasa",
        question: "Dhalem bhasa engghi-bhunten, oca' gante 'saya' ka orèng se lebbi towa iya areya ...",
        options: ["Abdhina", "Sengko'", "Kaula", "Panjhenengngan"],
        correctAnswer: 0,
        explanation: "Abdhina adalah krama alos merendahkan diri yang paling sopan."
      },
      {
        topic: "Ondhaggha Bhasa",
        question: "Manabi nyebbut aba' dhibi' se teppa'na ngakan da' orèng towa, oca' se teppa' iya areya ...",
        options: ["Neddha (bukan dha'ar)", "Dha'ar", "Ngakan", "Ngemil"],
        correctAnswer: 0,
        explanation: "Untuk diri sendiri menggunakan 'neddha', sedangkan 'dha'ar' untuk orang tua."
      },
      {
        topic: "Ondhaggha Bhasa",
        question: "Manabi nyebbut aba' dhibi' se teppa'na entar da' orèng towa, oca' se teppa' iya areya ...",
        options: ["Mangkat (bukan meyos)", "Meyos", "Entar", "Mole"],
        correctAnswer: 0,
        explanation: "Untuk diri sendiri 'mangkat', sedangkan 'meyos' untuk orang lain yang dihormati."
      },
      {
        topic: "Tatakrama Bhasa",
        question: "Bhasa krama andhap eangghuy kalaban pamaksodan ...",
        options: ["Ngandhapaghi diri dibi' minangka tanda sopan santun", "Menghina orang lain", "Meninggikan diri", "Bercanda"],
        correctAnswer: 0,
        explanation: "Krama andhap digunakan untuk merendahkan diri sendiri di hadapan orang tua."
      },
      {
        topic: "Tatakrama Bhasa",
        question: "Bhasa krama inggil eangghuy kalaban pamaksodan ...",
        options: ["Ngalorraghi tor ngormati orèng se lebbi towa otaba ghuru", "Merendahkan lawan bicara", "Pamer kepintaran", "Menghibur anak kecil"],
        correctAnswer: 0,
        explanation: "Krama inggil digunakan untuk meninggikan dan memuliakan lawan bicara."
      },
      {
        topic: "Carakan Madura",
        question: "Sandhangan swara 'wulu' dhalem Carakan marenta swara vokal ...",
        options: ["i", "u", "e", "o"],
        correctAnswer: 0,
        explanation: "Sandhangan wulu memberi bunyi vokal 'i'."
      },
      {
        topic: "Carakan Madura",
        question: "Sandhangan swara 'suku' dhalem Carakan marenta swara vokal ...",
        options: ["u", "i", "e", "o"],
        correctAnswer: 0,
        explanation: "Sandhangan suku memberi bunyi vokal 'u'."
      },
      {
        topic: "Carakan Madura",
        question: "Sandhangan swara 'taling' dhalem Carakan marenta swara vokal ...",
        options: ["e", "o", "u", "i"],
        correctAnswer: 0,
        explanation: "Sandhangan taling memberi bunyi vokal 'e'."
      },
      {
        topic: "Carakan Madura",
        question: "Sandhangan panyigeg 'layar' dhalem Carakan marenta pungkasan konsonan ...",
        options: ["r", "h", "ng", "k"],
        correctAnswer: 0,
        explanation: "Sandhangan layar mematikan bunyi dengan konsonan 'r'."
      },
      {
        topic: "Carakan Madura",
        question: "Sandhangan panyigeg 'wignyan' dhalem Carakan marenta pungkasan konsonan ...",
        options: ["h", "r", "ng", "s"],
        correctAnswer: 0,
        explanation: "Sandhangan wignyan mematikan bunyi dengan konsonan 'h'."
      },
      {
        topic: "Oca' Saroja",
        question: "Oca' saroja 'lolo roba' dhalem kabudayaan Madura teggessa ...",
        options: ["Rupa pasuryan / penampakan fisik", "Harta benda", "Rumah tangga", "Alat perang"],
        correctAnswer: 0,
        explanation: "Lolo roba artena rupa wajah atau paras penampilan."
      },
      {
        topic: "Oca' Saroja",
        question: "Oca' saroja 'solok bhabhâr' dhalem parilaku Madura teggessa ...",
        options: ["Terbuka atena tor ikhlas", "Tertutup", "Kikir", "Marah-marah"],
        correctAnswer: 0,
        explanation: "Solok bhabhar artena berlapang dada dan ikhlas."
      },
      {
        topic: "Parebhasan",
        question: "Parebhasan 'Kadhi aeng e dhalem kendhi'' teggessa orèng se ...",
        options: ["Berilmu tennang tor wicaksana", "Banyak bicara tanpa bukti", "Sombong", "Miskin"],
        correctAnswer: 0,
        explanation: "Orang yang berilmu dalam dan tenang pembawaannya."
      },
      {
        topic: "Parebhasan",
        question: "Parebhasan 'Ta' nemmo kokor' teggessa orèng se ...",
        options: ["Gampang bingung tor kaget ta' siap", "Sangat siap", "Pintar berdagang", "Tidur nyenyak"],
        correctAnswer: 0,
        explanation: "Orang yang panik, kaget, atau bingung kehilangan akal."
      },
      {
        topic: "Budaya Mamaca",
        question: "Dhalem pertunjukan seni Mamaca Madura, tokoh se nerjemahagi tembang esebbut ...",
        options: ["Panegges", "Pamaos", "Dalang", "Sinden"],
        correctAnswer: 0,
        explanation: "Panegges bertugas mengartikan dan menjelaskan makna bait tembang."
      },
      {
        topic: "Budaya Mamaca",
        question: "Tokoh se bertugas nembhangagi / mamaos naskah macapat esebbut ...",
        options: ["Pamaos", "Panegges", "Pengendang", "Juri"],
        correctAnswer: 0,
        explanation: "Pamaos melantunkan bacaan tembang macapat."
      },
      {
        topic: "Geografi Madura",
        question: "Pelabuhan bersejarah Kalianget badha e kabupaten ...",
        options: ["Sumenep", "Bangkalan", "Sampang", "Pamekasan"],
        correctAnswer: 0,
        explanation: "Pelabuhan Kalianget pelabuhan dagang bersejarah di Sumenep."
      },
      {
        topic: "Sejarah Industri",
        question: "Pabrik garam briket modern pertama di Nusantara didirikan e zaman kolonial e ...",
        options: ["Kalianget, Sumenep", "Bangkalan", "Surabaya", "Gresik"],
        correctAnswer: 0,
        explanation: "Pabrik garam Kalianget pabrik garam tertua di Nusantara."
      },
      {
        topic: "Warisan Budaya",
        question: "Karapan Sapi ban Tari Muang Sangkal ampon eakoni pamarenta minangka ...",
        options: ["Warisan Budaya Takbenda (WBTb) Indonesia", "Candi purba", "Bangunan kolonial", "Taman kota"],
        correctAnswer: 0,
        explanation: "Keduanya ditetapkan sebagai Warisan Budaya Takbenda Indonesia."
      },
      {
        topic: "Filosofi Madura",
        question: "Semboyan persatuan tor kaodhi'an tentrem rukun masyarakat Madura esebbut ...",
        options: ["Rampak Naong Beringin Korong", "Bhuppa' Bhabbhu'", "Abhantal Omba'", "Pote Tolang"],
        correctAnswer: 0,
        explanation: "Rampak Naong Beringin Korong filosofi kerukunan dan kedamaian Madura."
      }
    ]
  }
};

function shuffleQuestion(q) {
  const options = [...q.options];
  const correctText = options[q.correctAnswer];

  const targetPos = (q.question.length + (q.topic ? q.topic.length : 0)) % 4;

  const temp = options[targetPos];
  const oldIdx = options.indexOf(correctText);
  options[targetPos] = correctText;
  options[oldIdx] = temp;

  return {
    ...q,
    options,
    correctAnswer: targetPos
  };
}

const maduraQuestions = [];

for (let grade = 1; grade <= 6; grade++) {
  const gradeData = MADURA_DATA[grade];
  if (!gradeData) continue;

  ['mudah', 'sedang', 'sulit'].forEach(difficulty => {
    const list = gradeData[difficulty] || [];
    list.forEach((rawQ, idx) => {
      const q = shuffleQuestion(rawQ);
      const diffTag = difficulty === 'sulit' ? 'u' : difficulty[0];
      const formattedQ = {
        id: `bmd-k${grade}-${diffTag}${String(idx + 1).padStart(2, '0')}`,
        grade: Number(grade),
        subject: "bahasa-madura",
        topic: q.topic,
        difficulty: difficulty,
        question: q.question,
        options: q.options,
        correctAnswer: q.correctAnswer,
        explanation: q.explanation
      };
      maduraQuestions.push(formattedQ);
    });
  });
}

console.log(`Generated ${maduraQuestions.length} Bahasa Madura questions.`);

for (let g = 1; g <= 6; g++) {
  const m = maduraQuestions.filter(q => q.grade === g && q.difficulty === 'mudah').length;
  const s = maduraQuestions.filter(q => q.grade === g && q.difficulty === 'sedang').length;
  const u = maduraQuestions.filter(q => q.grade === g && q.difficulty === 'sulit').length;
  console.log(`Kelas ${g}: Mudah=${m}, Sedang=${s}, Sulit=${u}, Total=${m+s+u}`);
}

module.exports = {
  maduraQuestions
};
