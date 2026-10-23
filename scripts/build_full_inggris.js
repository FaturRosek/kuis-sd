const fs = require('fs');
const path = require('path');

const allQuestions = [];
const seenQuestions = new Set();

function addQ(id, grade, topic, level, question, options, correctAnswer, explanation) {
  if (seenQuestions.has(question)) {
    throw new Error(`Duplicate question in Bahasa Inggris: "${question}"`);
  }
  seenQuestions.add(question);
  allQuestions.push({
    id,
    grade,
    subject: "bahasa-inggris",
    topic,
    level,
    question,
    options,
    correctAnswer,
    explanation
  });
}

addQ("ing-k1-m01", 1, "Greetings Morning", "mudah", "Ketika bertemu ibu guru pada pagi hari jam 07.00, kita mengucapkan sapaan ...", ["Good morning", "Good night", "Good afternoon", "Good evening"], 0, "'Good morning' digunakan untuk menyapa di pagi hari.");
addQ("ing-k1-m02", 1, "Number One", "mudah", "Bahasa Inggris dari angka '1' adalah ...", ["One", "Two", "Three", "Four"], 0, "Angka 1 dalam bahasa Inggris adalah 'one'.");
addQ("ing-k1-m03", 1, "Number Two", "mudah", "Bahasa Inggris dari angka '2' adalah ...", ["Two", "Three", "One", "Five"], 0, "Angka 2 dalam bahasa Inggris adalah 'two'.");
addQ("ing-k1-m04", 1, "Number Three", "mudah", "Bahasa Inggris dari angka '3' adalah ...", ["Three", "Four", "Two", "One"], 0, "Angka 3 dalam bahasa Inggris adalah 'three'.");
addQ("ing-k1-m05", 1, "Color Red", "mudah", "Warna merah dalam bahasa Inggris disebut warna ...", ["Red", "Blue", "Green", "Yellow"], 0, "Merah adalah 'red'.");
addQ("ing-k1-m06", 1, "Color Blue", "mudah", "Warna biru langit dalam bahasa Inggris disebut warna ...", ["Blue", "Red", "Black", "White"], 0, "Biru adalah 'blue'.");
addQ("ing-k1-m07", 1, "Color Yellow", "mudah", "Warna kuning seperti buah pisang matang dalam bahasa Inggris adalah ...", ["Yellow", "Green", "Purple", "Pink"], 0, "Kuning adalah 'yellow'.");
addQ("ing-k1-m08", 1, "Color Green", "mudah", "Warna hijau seperti dedaunan pohon dalam bahasa Inggris adalah ...", ["Green", "Blue", "Orange", "Red"], 0, "Hijau adalah 'green'.");
addQ("ing-k1-m09", 1, "Animal Cat", "mudah", "Hewan kucing yang mengeong lucu dalam bahasa Inggris dinamakan ...", ["Cat", "Dog", "Bird", "Fish"], 0, "Kucing adalah 'cat'.");
addQ("ing-k1-m10", 1, "Animal Dog", "mudah", "Hewan anjing yang menggonggong dalam bahasa Inggris dinamakan ...", ["Dog", "Cat", "Cow", "Duck"], 0, "Anjing adalah 'dog'.");

addQ("ing-k1-s01", 1, "Asking Name", "sedang", "Pertanyaan bahasa Inggris yang digunakan untuk menanyakan nama seseorang adalah ...", ["What is your name?", "How are you?", "How old are you?", "Where do you live?"], 0, "'What is your name?' digunakan untuk menanyakan nama.");
addQ("ing-k1-s02", 1, "Answering Name", "sedang", "Jika seseorang bertanya 'What is your name?', jawaban yang tepat untuk Budi adalah ...", ["My name is Budi", "I am fine", "I am six years old", "Good bye"], 0, "'My name is Budi' artinya namaku adalah Budi.");
addQ("ing-k1-s03", 1, "Asking Condition", "sedang", "Ungkapan 'How are you?' dalam bahasa Indonesia memiliki arti ...", ["Bagaimana kabarmu?", "Siapa namamu?", "Berapa umurmu?", "Di mana rumahmu?"], 0, "'How are you?' menanyakan kabar kesehatan seseorang.");
addQ("ing-k1-s04", 1, "Answering Condition Fine", "sedang", "Ketika seseorang menyapa 'How are you?', jawaban yang sopan adalah ...", ["I am fine, thank you", "Good night", "I am eating", "No, thank you"], 0, "'I am fine, thank you' artinya saya baik-baik saja, terima kasih.");
addQ("ing-k1-s05", 1, "Family Father", "sedang", "Kata 'ayah' dalam bahasa Inggris adalah ...", ["Father", "Mother", "Brother", "Sister"], 0, "Ayah adalah 'father'.");
addQ("ing-k1-s06", 1, "Family Mother", "sedang", "Kata 'ibu' dalam bahasa Inggris adalah ...", ["Mother", "Father", "Grandfather", "Uncle"], 0, "Ibu adalah 'mother'.");
addQ("ing-k1-s07", 1, "Classroom Book", "sedang", "Benda di dalam tas sekolah yang berarti 'buku tulis' dalam bahasa Inggris adalah ...", ["Book", "Pencil", "Ruler", "Eraser"], 0, "Buku adalah 'book'.");
addQ("ing-k1-s08", 1, "Classroom Pencil", "sedang", "Alat untuk menulis di atas buku adalah pensil, dalam bahasa Inggris disebut ...", ["Pencil", "Pen", "Bag", "Desk"], 0, "Pensil adalah 'pencil'.");
addQ("ing-k1-s09", 1, "Classroom Ruler", "sedang", "Alat penggaris untuk membuat garis lurus dalam bahasa Inggris disebut ...", ["Ruler", "Eraser", "Sharpener", "Pencil case"], 0, "Penggaris adalah 'ruler'.");
addQ("ing-k1-s10", 1, "Classroom Eraser", "sedang", "Alat penghapus karet untuk menghapus tulisan pensil dalam bahasa Inggris adalah ...", ["Eraser", "Ruler", "Book", "Scissors"], 0, "Penghapus adalah 'eraser'.");
addQ("ing-k1-s11", 1, "Part of Face Eyes", "sedang", "Anggota tubuh di wajah yang berarti 'mata' dalam bahasa Inggris adalah ...", ["Eyes", "Nose", "Mouth", "Ears"], 0, "Mata adalah 'eyes'.");
addQ("ing-k1-s12", 1, "Part of Face Nose", "sedang", "Bagian wajah yang berfungsi untuk mencium aroma harum adalah hidung, dalam bahasa Inggris disebut ...", ["Nose", "Mouth", "Eyes", "Hair"], 0, "Hidung adalah 'nose'.");
addQ("ing-k1-s13", 1, "Part of Face Mouth", "sedang", "Bagian wajah yang digunakan untuk berbicara dan makan adalah mulut, dalam bahasa Inggris disebut ...", ["Mouth", "Ears", "Teeth", "Tongue"], 0, "Mulut adalah 'mouth'.");
addQ("ing-k1-s14", 1, "Part of Face Ears", "sedang", "Bagian tubuh di sisi kepala yang berfungsi untuk mendengar suara adalah telinga, dalam bahasa Inggris disebut ...", ["Ears", "Eyes", "Nose", "Cheek"], 0, "Telinga adalah 'ears'.");
addQ("ing-k1-s15", 1, "Fruit Apple", "sedang", "Buah apel yang manis dan renyah dalam bahasa Inggris adalah ...", ["Apple", "Orange", "Banana", "Grape"], 0, "Apel adalah 'apple'.");
addQ("ing-k1-s16", 1, "Fruit Banana", "sedang", "Buah pisang yang disukai monyet berwarna kuning dalam bahasa Inggris adalah ...", ["Banana", "Apple", "Mango", "Papaya"], 0, "Pisang adalah 'banana'.");
addQ("ing-k1-s17", 1, "Fruit Orange", "sedang", "Buah jeruk yang kaya vitamin C dan berasa manis asam dalam bahasa Inggris adalah ...", ["Orange", "Watermelon", "Pineapple", "Strawberry"], 0, "Jeruk adalah 'orange'.");
addQ("ing-k1-s18", 1, "Farewell Good Bye", "sedang", "Ucapan perpisahan saat hendak pulang sekolah kepada teman adalah ...", ["Good bye", "Good morning", "Hello", "Thank you"], 0, "'Good bye' berarti selamat tinggal / sampai jumpa.");
addQ("ing-k1-s19", 1, "Night Greeting", "sedang", "Ucapan selamat tidur pada malam hari sebelum terlelap adalah ...", ["Good night", "Good afternoon", "Good morning", "Good day"], 0, "'Good night' digunakan untuk ucapan selamat malam menjelang tidur.");
addQ("ing-k1-s20", 1, "Expressing Gratitude Thank You", "sedang", "Setelah diberi hadiah oleh teman, kita mengucapkan kata terima kasih dalam bahasa Inggris yaitu ...", ["Thank you", "I am sorry", "Excuse me", "You are welcome"], 0, "'Thank you' adalah ungkapan terima kasih.");

addQ("ing-k1-u01", 1, "Classroom Instruction Stand Up", "sulit", "Ketika guru berkata 'Stand up, please!', tindakan murid yang tepat adalah ...", ["Berdiri dari tempat duduk", "Duduk di lantai", "Membuka buku", "Berlari ke luar kelas"], 0, "'Stand up' adalah instruksi untuk berdiri.");
addQ("ing-k1-u02", 1, "Classroom Instruction Sit Down", "sulit", "Perintah guru 'Sit down, please!' memiliki arti instruksi untuk ...", ["Duduk kembali dengan tertib", "Berdiri tegak", "Menyanyi lagu", "Menutup pintu"], 0, "'Sit down' bermakna silakan duduk.");
addQ("ing-k1-u03", 1, "Classroom Instruction Open Book", "sulit", "Instruksi guru 'Open your book, please!' artinya adalah ...", ["Buka bukumu", "Tutup bukumu", "Tulis namamu", "Simpan bukumu di tas"], 0, "'Open your book' berarti bukalah bukumu.");
addQ("ing-k1-u04", 1, "Classroom Instruction Close Door", "sulit", "Kalimat perintah 'Close the door, please!' meminta murid untuk ...", ["Menutup pintu ruangan", "Membuka jendela", "Menghapus papan tulis", "Mematikan lampu"], 0, "'Close the door' berarti tutuplah pintu.");
addQ("ing-k1-u05", 1, "Plural Noun Two Cats", "sulit", "Bentuk jamak (lebih dari satu) dalam bahasa Inggris: jika satu kucing adalah 'one cat', maka dua kucing ditulis ...", ["Two cats", "Two cates", "Two cat", "Two caties"], 0, "Kata benda jamak beraturan ditambah akhiran -s: two cats.");
addQ("ing-k1-u06", 1, "Plural Noun Three Books", "sulit", "Bentuk jamak untuk 'tiga buku' dalam bahasa Inggris adalah ...", ["Three books", "Three book", "Three bookes", "Three bookies"], 0, "Tiga buku adalah 'three books' (menambahkan -s).");
addQ("ing-k1-u07", 1, "Color Combination Purple", "sulit", "If you mix red and blue paint, you will get the color ...", ["Purple", "Green", "Orange", "Brown"], 0, "Percampuran warna red (merah) dan blue (biru) menghasilkan purple (ungu).");
addQ("ing-k1-u08", 1, "Color Combination Orange", "sulit", "If you mix red and yellow paint, you will get the color ...", ["Orange", "Green", "Black", "Pink"], 0, "Campuran red (merah) dan yellow (kuning) menghasilkan orange (oranye).");
addQ("ing-k1-u09", 1, "Color Combination Green", "sulit", "If you mix blue and yellow colors, you will get ...", ["Green", "Purple", "White", "Gray"], 0, "Campuran blue (biru) dan yellow (kuning) menghasilkan green (hijau).");
addQ("ing-k1-u10", 1, "Demonstrative This Is", "sulit", "Lengkapilah kalimat: '... is my pencil.' (menunjuk benda pensil yang sedang dipegang dekat).", ["This", "These", "Those", "They"], 0, "'This is' digunakan untuk menunjuk satu benda tunggal yang dekat.");
addQ("ing-k1-u11", 1, "Demonstrative That Is", "sulit", "Lengkapilah kalimat: '... is an airplane in the sky.' (menunjuk satu pesawat terbang yang jauh di langit).", ["That", "This", "These", "There"], 0, "'That is' digunakan untuk satu benda tunggal yang posisinya jauh.");
addQ("ing-k1-u12", 1, "Preposition In Box", "sulit", "The apple is ... the box. (Gambar menunjukkan apel berada tepat di dalam kotak tertutup).", ["In", "On", "Under", "Behind"], 0, "Preposisi 'in' berarti di dalam.");
addQ("ing-k1-u13", 1, "Preposition On Table", "sulit", "The cat is sleeping ... the table. (Kucing tidur di atas permukaan meja).", ["On", "In", "Under", "Between"], 0, "Preposisi 'on' berarti di atas permukaan benda.");
addQ("ing-k1-u14", 1, "Preposition Under Chair", "sulit", "The ball is ... the chair. (Bola berada di bawah kolong kursi).", ["Under", "On", "In", "Next to"], 0, "Preposisi 'under' berarti di bawah.");
addQ("ing-k1-u15", 1, "Counting Objects Sum 2+3", "sulit", "I have two red apples and my mother gives me three green apples. How many apples do I have now?", ["Five apples", "Four apples", "Six apples", "Seven apples"], 0, "2 + 3 = 5 (five apples).");
addQ("ing-k1-u16", 1, "Counting Objects Sum 4+4", "sulit", "There are four birds on the tree and four birds on the roof. How many birds are there altogether?", ["Eight birds", "Six birds", "Seven birds", "Nine birds"], 0, "4 + 4 = 8 (eight birds).");
addQ("ing-k1-u17", 1, "Subject Pronoun Boy He", "sulit", "Ali is a diligent student. ... goes to school every morning.", ["He", "She", "It", "They"], 0, "Kata ganti subjek untuk anak laki-laki tunggal (Ali) adalah 'He'.");
addQ("ing-k1-u18", 1, "Subject Pronoun Girl She", "sulit", "Siti likes to read fairy tales. ... is a smart girl.", ["She", "He", "It", "We"], 0, "Kata ganti subjek untuk perempuan tunggal (Siti) adalah 'She'.");
addQ("ing-k1-u19", 1, "Subject Pronoun Object It", "sulit", "I have a cute pet cat. ... has soft white fur.", ["It", "He", "She", "They"], 0, "Kata ganti subjek untuk seekor hewan/benda tunggal adalah 'It'.");
addQ("ing-k1-u20", 1, "Simple Question Word What", "sulit", "'... is this?' - 'This is a sharpener.' Kata tanya yang tepat untuk melengkapi kalimat adalah ...", ["What", "Who", "Where", "How"], 0, "'What' digunakan untuk menanyakan nama benda.");
addQ("ing-k1-u21", 1, "Simple Question Word Who", "sulit", "'... is that woman?' - 'She is my English teacher, Mrs. Ratna.' Kata tanya yang tepat adalah ...", ["Who", "What", "When", "Which"], 0, "'Who' digunakan untuk menanyakan identitas orang.");
addQ("ing-k1-u22", 1, "Apologizing I Am Sorry", "sulit", "When you accidentally drop your friend's ruler, what should you say?", ["I am sorry", "You are welcome", "Good morning", "Nice to meet you"], 0, "'I am sorry' diucapkan saat meminta maaf atas kekhilafan.");
addQ("ing-k1-u23", 1, "Responding Apology That Is Okay", "sulit", "When someone says 'I am sorry', you can politely reply by saying ...", ["That is okay / Never mind", "No, you are bad", "Thank you very much", "Good bye"], 0, "'That is okay' atau 'Never mind' adalah balasan santun menerima permohonan maaf.");
addQ("ing-k1-u24", 1, "Responding Gratitude You Are Welcome", "sulit", "When your friend says 'Thank you for the pencil', you should respond with ...", ["You are welcome", "I am sorry", "Good night", "Excuse me"], 0, "'You are welcome' berarti sama-sama / terima kasih kembali.");
addQ("ing-k1-u25", 1, "Body Part Function Eyes", "sulit", "We use our two eyes to ...", ["See", "Hear", "Smell", "Taste"], 0, "Fungsi mata adalah untuk melihat ('see').");
addQ("ing-k1-u26", 1, "Body Part Function Ears", "sulit", "We use our ears to ... beautiful music.", ["Hear", "See", "Touch", "Eat"], 0, "Telinga digunakan untuk mendengar ('hear').");
addQ("ing-k1-u27", 1, "Body Part Function Nose", "sulit", "We use our nose to ... fragrant flowers.", ["Smell", "Eat", "Hear", "Walk"], 0, "Hidung digunakan untuk membaui/mencium aroma ('smell').");
addQ("ing-k1-u28", 1, "Body Part Function Mouth", "sulit", "We use our mouth and tongue to ... delicious food.", ["Taste and eat", "See", "Smell", "Run"], 0, "Mulut dan lidah digunakan untuk mengecap rasa dan makan ('taste and eat').");
addQ("ing-k1-u29", 1, "Opposite Big vs Small", "sulit", "An elephant is big, but a little ant is ...", ["Small", "Tall", "Long", "Heavy"], 0, "Lawan kata 'big' (besar) adalah 'small' (kecil).");
addQ("ing-k1-u30", 1, "Opposite Long vs Short", "sulit", "The snake is long, but the caterpillar is ...", ["Short", "Fat", "Hot", "Cold"], 0, "Lawan kata 'long' (panjang) adalah 'short' (pendek).");

console.log("Kelas 1 Bahasa Inggris ready: " + allQuestions.length + " questions.");

fs.writeFileSync(path.join(__dirname, '../generators/inggris_part1.json'), JSON.stringify(allQuestions, null, 2), 'utf8');
console.log("Saved inggris_part1.json with " + allQuestions.length + " questions.");
