const fs = require('fs');
const path = require('path');

const genDir = path.join(__dirname, '../generators');
const part1 = JSON.parse(fs.readFileSync(path.join(genDir, 'inggris_part1.json'), 'utf8'));

const allQuestions = [...part1];
const seenQuestions = new Set(allQuestions.map(q => q.question));

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

console.log("Loaded Kelas 1 English: " + allQuestions.length + " questions.");

addQ("ing-k2-m01", 2, "Number Eleven", "mudah", "Bahasa Inggris dari angka '11' adalah ...", ["Eleven", "Twelve", "Twenty", "Ten"], 0, "Angka 11 adalah 'eleven'.");
addQ("ing-k2-m02", 2, "Number Twelve", "mudah", "Bahasa Inggris dari angka '12' adalah ...", ["Twelve", "Eleven", "Twenty", "Thirteen"], 0, "Angka 12 adalah 'twelve'.");
addQ("ing-k2-m03", 2, "Days Monday", "mudah", "Hari Senin dalam bahasa Inggris disebut hari ...", ["Monday", "Sunday", "Friday", "Tuesday"], 0, "Senin adalah 'Monday'.");
addQ("ing-k2-m04", 2, "Days Sunday", "mudah", "Hari Minggu saat libur sekolah dalam bahasa Inggris disebut ...", ["Sunday", "Saturday", "Monday", "Wednesday"], 0, "Minggu adalah 'Sunday'.");
addQ("ing-k2-m05", 2, "Animal Elephant", "mudah", "Hewan gajah berbelalai panjang dan bertubuh besar dalam bahasa Inggris adalah ...", ["Elephant", "Giraffe", "Tiger", "Rabbit"], 0, "Gajah adalah 'elephant'.");
addQ("ing-k2-m06", 2, "Animal Lion", "mudah", "Hewan singa yang dijuluki si raja hutan dalam bahasa Inggris adalah ...", ["Lion", "Tiger", "Bear", "Wolf"], 0, "Singa adalah 'lion'.");
addQ("ing-k2-m07", 2, "Body Part Head", "mudah", "Bagian tubuh kepala dalam bahasa Inggris adalah ...", ["Head", "Hand", "Foot", "Arm"], 0, "Kepala adalah 'head'.");
addQ("ing-k2-m08", 2, "Body Part Hand", "mudah", "Anggota tubuh tangan yang kita gunakan untuk menulis dan memegang sendok adalah ...", ["Hand", "Leg", "Eye", "Ear"], 0, "Tangan adalah 'hand'.");
addQ("ing-k2-m09", 2, "Food Bread", "mudah", "Makanan roti tawar untuk sarapan pagi dalam bahasa Inggris adalah ...", ["Bread", "Rice", "Noodles", "Meat"], 0, "Roti adalah 'bread'.");
addQ("ing-k2-m10", 2, "Drink Milk", "mudah", "Minuman susu putih yang sehat dan kaya kalsium dalam bahasa Inggris adalah ...", ["Milk", "Tea", "Coffee", "Water"], 0, "Susu adalah 'milk'.");

addQ("ing-k2-s01", 2, "Days of the Week Tuesday", "sedang", "The day after Monday is ...", ["Tuesday", "Wednesday", "Thursday", "Sunday"], 0, "Hari setelah Senin adalah Selasa (Tuesday).");
addQ("ing-k2-s02", 2, "Days of the Week Friday", "sedang", "The day before Saturday is ...", ["Friday", "Thursday", "Wednesday", "Sunday"], 0, "Hari sebelum Sabtu adalah Jumat (Friday).");
addQ("ing-k2-s03", 2, "Animal Giraffe", "sedang", "A wild animal that has a very long neck to eat leaves from tall trees is a ...", ["Giraffe", "Zebra", "Elephant", "Kangaroo"], 0, "Jerapah (giraffe) memiliki leher yang sangat panjang.");
addQ("ing-k2-s04", 2, "Animal Monkey", "sedang", "An animal that likes to climb trees and loves eating bananas is a ...", ["Monkey", "Crocodile", "Snake", "Duck"], 0, "Monyet (monkey) pandai memanjat pohon dan menyukai pisang.");
addQ("ing-k2-s05", 2, "Feeling Happy", "sedang", "When Budi gets a new bicycle as a birthday present, he feels very ...", ["Happy", "Sad", "Angry", "Tired"], 0, "Mendapat hadiah sepeda membuat Budi merasa bahagia ('happy').");
addQ("ing-k2-s06", 2, "Feeling Sad", "sedang", "When Siti loses her favorite doll, she cries because she feels ...", ["Sad", "Happy", "Hungry", "Bored"], 0, "Kehilangan boneka kesayangan membuatnya sedih ('sad').");
addQ("ing-k2-s07", 2, "Feeling Hungry", "sedang", "I have not eaten lunch yet. My stomach is rumbling. I am ...", ["Hungry", "Thirsty", "Sleepy", "Cold"], 0, "Belum makan siang membuat kita merasa lapar ('hungry').");
addQ("ing-k2-s08", 2, "Feeling Thirsty", "sedang", "After running in the field on a hot sunny day, Edo wants a glass of cold water because he is ...", ["Thirsty", "Hungry", "Full", "Angry"], 0, "Butuh minum air menandakan Edo merasa haus ('thirsty').");
addQ("ing-k2-s09", 2, "Shape Circle", "sedang", "The shape of a coin or a round clock is a ...", ["Circle", "Square", "Triangle", "Star"], 0, "Koin berbentuk lingkaran ('circle').");
addQ("ing-k2-s10", 2, "Shape Triangle", "sedang", "A geometric shape that has three sides and three corners is a ...", ["Triangle", "Square", "Rectangle", "Circle"], 0, "Bentuk bangun datar yang memiliki tiga sisi adalah segitiga ('triangle').");
addQ("ing-k2-s11", 2, "Clothes Shirt", "sedang", "Pakaian kemeja berkerah yang kita kenakan di badan bagian atas disebut ...", ["Shirt", "Pants", "Socks", "Shoes"], 0, "Kemeja adalah 'shirt'.");
addQ("ing-k2-s12", 2, "Clothes Pants", "sedang", "Pakaian celana panjang dalam bahasa Inggris dinamakan ...", ["Pants (trousers)", "Shirt", "Dress", "Hat"], 0, "Celana panjang adalah 'pants'.");
addQ("ing-k2-s13", 2, "Clothes Shoes", "sedang", "Alas kaki sepatu yang dipakai untuk melindungi kaki saat berjalan ke sekolah adalah ...", ["Shoes", "Hat", "Gloves", "Tie"], 0, "Sepatu adalah 'shoes'.");
addQ("ing-k2-s14", 2, "Clothes Hat", "sedang", "Aksesoris topi yang dipakai di atas kepala untuk melindungi dari sinar panas matahari adalah ...", ["Hat", "Belt", "Scarf", "Skirt"], 0, "Topi adalah 'hat'.");
addQ("ing-k2-s15", 2, "Asking Age", "sedang", "Pertanyaan bahasa Inggris untuk menanyakan usia atau umur seseorang adalah ...", ["How old are you?", "How are you?", "What is your hobby?", "Where are you from?"], 0, "'How old are you?' digunakan untuk menanyakan umur.");
addQ("ing-k2-s16", 2, "Answering Age Eight", "sedang", "Jika Budi berumur delapan tahun, kalimat bahasa Inggris yang tepat adalah ...", ["I am eight years old", "I am in grade eight", "I have eight apples", "My name is eight"], 0, "'I am eight years old' artinya saya berumur delapan tahun.");
addQ("ing-k2-s17", 2, "Expressing Like", "sedang", "Rani suka makan buah semangka. Kalimat bahasa Inggris yang benar adalah ...", ["Rani likes watermelons", "Rani does not like watermelon", "Rani hate watermelon", "Rani is watermelon"], 0, "'Likes' menyatakan kesukaan untuk subjek orang ketiga tunggal.");
addQ("ing-k2-s18", 2, "Expressing Dislike", "sedang", "Saya tidak suka minum kopi pahit. Kalimat bahasa Inggrisnya adalah ...", ["I do not like bitter coffee", "I like coffee very much", "I drink coffee every day", "Coffee likes me"], 0, "'I do not like' digunakan untuk menyatakan tidak suka.");
addQ("ing-k2-s19", 2, "Number Twenty", "sedang", "Bahasa Inggris dari angka '20' adalah ...", ["Twenty", "Twelve", "Two", "Thirty"], 0, "Angka 20 adalah 'twenty'.");
addQ("ing-k2-s20", 2, "Number Fifteen", "sedang", "Bahasa Inggris dari angka '15' adalah ...", ["Fifteen", "Fifty", "Five", "Fourteen"], 0, "Angka 15 adalah 'fifteen'.");

addQ("ing-k2-u01", 2, "Ability Can Fly", "sulit", "A bird ... fly high in the sky with its wings.", ["Can", "Cannot", "Is not", "Are"], 0, "Burung bisa terbang ('can fly').");
addQ("ing-k2-u02", 2, "Inability Cannot Swim", "sulit", "A domestic cat dislikes water and ... swim like a fish.", ["Cannot", "Can", "Are", "Does"], 0, "Kucing umumnya tidak bisa berenang ('cannot swim').");
addQ("ing-k2-u03", 2, "Action Verb Jump Kangaroo", "sulit", "A kangaroo has powerful back legs. It uses them to ... far.", ["Jump", "Fly", "Slither", "Sing"], 0, "Kangguru melompat ('jump').");
addQ("ing-k2-u04", 2, "Action Verb Slither Snake", "sulit", "A snake does not have legs. It moves by ... on the ground.", ["Slithering (crawling)", "Flying", "Running", "Hopping"], 0, "Ular bergerak dengan melata ('slithering').");
addQ("ing-k2-u05", 2, "Time In the Morning", "sulit", "We eat our breakfast and get ready for school in the ...", ["Morning", "Evening", "Night", "Midnight"], 0, "Sarapan pagi disantap di pagi hari ('in the morning').");
addQ("ing-k2-u06", 2, "Time At Night", "sulit", "The moon and shining stars appear in the sky at ...", ["Night", "Noon", "Morning", "Afternoon"], 0, "Bulan dan bintang tampak di malam hari ('at night').");
addQ("ing-k2-u07", 2, "Possessive Adjective My", "sulit", "This is ... bag. My mother bought it for me yesterday.", ["My", "His", "Her", "Their"], 0, "Kata ganti kepemilikan 'saya' adalah 'my'.");
addQ("ing-k2-u08", 2, "Possessive Adjective His", "sulit", "Budi is riding ... new bicycle to the playground.", ["His", "Her", "My", "Its"], 0, "Kata ganti kepemilikan laki-laki tunggal (Budi) adalah 'his'.");
addQ("ing-k2-u09", 2, "Possessive Adjective Her", "sulit", "Siti wears ... pretty pink dress to the birthday party.", ["Her", "His", "Our", "Its"], 0, "Kata ganti kepemilikan perempuan tunggal (Siti) adalah 'her'.");
addQ("ing-k2-u10", 2, "Preposition Next To", "sulit", "Budi sits ... Edo. They share the same study desk.", ["Next to (beside)", "Under", "Behind", "In"], 0, "'Next to' berarti di sebelah / di samping.");
addQ("ing-k2-u11", 2, "Preposition Between", "sulit", "The teacher's desk is located ... the blackboard and the student rows.", ["Between", "On", "Inside", "Under"], 0, "'Between' berarti di antara dua objek.");
addQ("ing-k2-u12", 2, "Pronoun Plural They Are", "sulit", "The children are in the schoolyard. ... playing hide and seek.", ["They are", "He is", "She is", "It is"], 0, "Subjek jamak (the children) menggunakan kata ganti 'They are'.");
addQ("ing-k2-u13", 2, "Pronoun Plural We Are", "sulit", "My brother and I love sports. ... swimming in the pool.", ["We are", "They are", "He is", "She is"], 0, "'My brother and I' diganti dengan subjek 'We are' (kami).");
addQ("ing-k2-u14", 2, "Plural Irregular Feet", "sulit", "One foot on the floor, but two ... on the shoes.", ["Feet", "Foots", "Footes", "Feets"], 0, "Bentuk jamak dari 'foot' adalah 'feet' (bukan foots).");
addQ("ing-k2-u15", 2, "Plural Irregular Teeth", "sulit", "We brush our ... twice a day to keep them clean and healthy.", ["Teeth", "Tooths", "Toothes", "Teethes"], 0, "Bentuk jamak dari 'tooth' adalah 'teeth'.");
addQ("ing-k2-u16", 2, "Question How Many", "sulit", "'... pencils are there in your pencil case?' - 'There are three pencils.'", ["How many", "How much", "How old", "How long"], 0, "'How many' digunakan untuk menanyakan jumlah benda yang dapat dihitung (countable).");
addQ("ing-k2-u17", 2, "Opposite Fast vs Slow", "sulit", "A cheetah runs very fast, but a little snail crawls very ...", ["Slow", "Quick", "High", "Loud"], 0, "Lawan kata 'fast' (cepat) adalah 'slow' (lambat).");
addQ("ing-k2-u18", 2, "Opposite Clean vs Dirty", "sulit", "Doni washes his muddy boots because they are ...", ["Dirty", "Clean", "Dry", "Soft"], 0, "Lawan kata 'clean' (bersih) adalah 'dirty' (kotor).");
addQ("ing-k2-u19", 2, "Opposite Hot vs Cold", "sulit", "Hot tea is warm, but ice cream is very ...", ["Cold", "Spicy", "Sweet", "Hard"], 0, "Lawan kata 'hot' (panas) adalah 'cold' (dingin).");
addQ("ing-k2-u20", 2, "Simple Present Verb Has He", "sulit", "Doni ... a pair of black leather shoes for school.", ["Has", "Have", "Having", "Had"], 0, "Subjek orang ketiga tunggal (Doni) menggunakan 'has'.");
addQ("ing-k2-u21", 2, "Simple Present Verb Have I", "sulit", "I ... three storybooks on my wooden desk.", ["Have", "Has", "Is", "Are"], 0, "Subjek 'I' menggunakan kata kerja bantu kepemilikan 'have'.");
addQ("ing-k2-u22", 2, "Colors Flag of Indonesia", "sulit", "The national flag of Indonesia consists of two colors: ...", ["Red and white", "Blue and white", "Red and yellow", "Green and white"], 0, "Bendera Indonesia terdiri atas warna red (merah) dan white (putih).");
addQ("ing-k2-u23", 2, "Animal Habitat Fish", "sulit", "Fish live and breathe in the ...", ["Water (ocean or river)", "Tree", "Desert sand", "Sky"], 0, "Habitat hidup ikan adalah di air ('water').");
addQ("ing-k2-u24", 2, "Animal Sound Duck", "sulit", "What sound does a duck make in English rhymes?", ["Quack quack", "Meow meow", "Moo moo", "Woof woof"], 0, "Suara bebek dalam bahasa Inggris ditirukan dengan 'quack quack'.");
addQ("ing-k2-u25", 2, "Animal Sound Cow", "sulit", "What sound does a cow make in the pasture?", ["Moo moo", "Oink oink", "Baa baa", "Cluck cluck"], 0, "Suara sapi ditirukan dengan 'moo moo'.");
addQ("ing-k2-u26", 2, "Reading Short Passage Budi's Pet", "sulit", "Read: 'Budi has a small rabbit. Its name is Snowy. It likes eating carrots.' What does Snowy like to eat?", ["Carrots", "Fish", "Apples", "Meat"], 0, "Berdasarkan teks, Snowy suka makan wortel ('carrots').");
addQ("ing-k2-u27", 2, "Reading Short Passage Rabbit Color", "sulit", "Read: 'Snowy is a rabbit. It has white fur and long ears.' What color is Snowy's fur?", ["White", "Black", "Brown", "Grey"], 0, "Bulu Snowy berwarna putih ('white').");
addQ("ing-k2-u28", 2, "Math English Sum 10+5", "sulit", "What is ten plus five?", ["Fifteen", "Fifty", "Twenty", "Fourteen"], 0, "10 + 5 = 15 (fifteen).");
addQ("ing-k2-u29", 2, "Math English Subtraction 20-8", "sulit", "What is twenty minus eight?", ["Twelve", "Eleven", "Thirteen", "Ten"], 0, "20 - 8 = 12 (twelve).");
addQ("ing-k2-u30", 2, "Polite Request May I", "sulit", "When you want to borrow your classmate's sharpener politely, you say: '... borrow your sharpener, please?'", ["May I", "Must I", "Will you go", "Do you see"], 0, "'May I ... please?' adalah bentuk permohonan izin yang sangat sopan.");

console.log("Kelas 2 Bahasa Inggris ready: " + allQuestions.length + " questions.");

addQ("ing-k3-m01", 3, "Telling Time Seven O Clock", "mudah", "It is 07.00 in the morning. In English, we say: 'It is ...'", ["Seven o'clock", "Eight o'clock", "Six o'clock", "Seven thirty"], 0, "Jam 07.00 tepat dinyatakan dengan 'seven o'clock'.");
addQ("ing-k3-m02", 3, "Telling Time Nine O Clock", "mudah", "It is 09.00 at night. In English, we say: 'It is ...'", ["Nine o'clock", "Ten o'clock", "Eight o'clock", "Nine fifteen"], 0, "Jam 09.00 tepat dinyatakan dengan 'nine o'clock'.");
addQ("ing-k3-m03", 3, "Room Living Room", "mudah", "Ruangan di dalam rumah tempat menerima tamu dan berkumpul menonton televisi adalah ...", ["Living room", "Kitchen", "Bathroom", "Garage"], 0, "Ruang tamu / ruang keluarga adalah 'living room'.");
addQ("ing-k3-m04", 3, "Room Kitchen", "mudah", "Ruangan di rumah tempat ibu memasak makanan adalah ...", ["Kitchen", "Bedroom", "Bathroom", "Garden"], 0, "Dapur adalah 'kitchen'.");
addQ("ing-k3-m05", 3, "Room Bedroom", "mudah", "Ruangan tempat kita tidur dan beristirahat di atas kasur adalah ...", ["Bedroom", "Dining room", "Kitchen", "Living room"], 0, "Kamar tidur adalah 'bedroom'.");
addQ("ing-k3-m06", 3, "Room Bathroom", "mudah", "Ruangan tempat mandi dan mencuci muka dengan air bersih adalah ...", ["Bathroom", "Kitchen", "Garage", "Yard"], 0, "Kamar mandi adalah 'bathroom'.");
addQ("ing-k3-m07", 3, "Transportation Bicycle", "mudah", "Kendaraan roda dua ramah lingkungan yang dikayuh dengan pedal kaki adalah ...", ["Bicycle (bike)", "Car", "Bus", "Train"], 0, "Sepeda kayuh adalah 'bicycle'.");
addQ("ing-k3-m08", 3, "Transportation Airplane", "mudah", "Kendaraan udara bersayap yang terbang mengangkut penumpang di langit adalah ...", ["Airplane (plane)", "Ship", "Train", "Truck"], 0, "Pesawat terbang adalah 'airplane'.");
addQ("ing-k3-m09", 3, "Weather Sunny", "mudah", "Ketika matahari bersinar terang di langit biru tanpa awan mendung, cuaca hari itu adalah ...", ["Sunny", "Rainy", "Snowy", "Stormy"], 0, "Cuaca cerah panas adalah 'sunny'.");
addQ("ing-k3-m10", 3, "Weather Rainy", "mudah", "Ketika rintik-rintik air hujan turun deras dari awan abu-abu gelap, cuaca hari itu adalah ...", ["Rainy", "Sunny", "Windy", "Foggy"], 0, "Cuaca hujan adalah 'rainy'.");

addQ("ing-k3-s01", 3, "Hobby Reading", "sedang", "Budi likes spending his free time with books at the library. His hobby is ...", ["Reading", "Swimming", "Fishing", "Cooking"], 0, "Hobi membaca buku adalah 'reading'.");
addQ("ing-k3-s02", 3, "Hobby Swimming", "sedang", "Siti likes to splash in the water at the swimming pool. Her hobby is ...", ["Swimming", "Dancing", "Painting", "Singing"], 0, "Hobi berenang adalah 'swimming'.");
addQ("ing-k3-s03", 3, "Hobby Cooking", "sedang", "Mother and Maya like making delicious cakes in the kitchen. Their hobby is ...", ["Cooking", "Cycling", "Gardening", "Drawing"], 0, "Hobi memasak adalah 'cooking'.");
addQ("ing-k3-s04", 3, "Hobby Playing Football", "sedang", "Edo and his friends kick a ball on the grass field every afternoon. Their hobby is ...", ["Playing football", "Playing chess", "Playing guitar", "Running"], 0, "Hobi bermain sepak bola adalah 'playing football'.");
addQ("ing-k3-s05", 3, "Daily Routine Wake Up", "sedang", "Every day, I ... at five o'clock in the morning.", ["Wake up", "Go to bed", "Eat dinner", "Do homework"], 0, "'Wake up' berarti bangun tidur di pagi hari.");
addQ("ing-k3-s06", 3, "Daily Routine Take a Bath", "sedang", "After waking up, I go to the bathroom to ... with soap and water.", ["Take a bath (shower)", "Have breakfast", "Read a novel", "Play game"], 0, "'Take a bath' berarti mandi.");
addQ("ing-k3-s07", 3, "Daily Routine Have Breakfast", "sedang", "Before going to school at 06.30, my family always ... at the dining table.", ["Have breakfast", "Have dinner", "Go to sleep", "Play football"], 0, "'Have breakfast' berarti sarapan pagi.");
addQ("ing-k3-s08", 3, "Daily Routine Go to School", "sedang", "Students wear their uniform and ... on foot or by bicycle.", ["Go to school", "Go to market", "Go to cinema", "Go to hospital"], 0, "'Go to school' berarti berangkat ke sekolah.");
addQ("ing-k3-s09", 3, "Months January", "sedang", "The very first month of the year is ...", ["January", "February", "December", "March"], 0, "Bulan pertama dalam setahun adalah Januari ('January').");
addQ("ing-k3-s10", 3, "Months August", "sedang", "Indonesia celebrates its Independence Day on the seventeenth of ...", ["August", "July", "September", "October"], 0, "Hari Kemerdekaan Indonesia diperingati pada 17 Agustus ('August').");
addQ("ing-k3-s11", 3, "Months December", "sedang", "The twelfth and last month of the year is ...", ["December", "November", "October", "January"], 0, "Bulan ke-12 atau terakhir adalah Desember ('December').");
addQ("ing-k3-s12", 3, "Vegetable Carrot", "sedang", "A long orange root vegetable that rabbits love to eat is a ...", ["Carrot", "Spinach", "Tomato", "Potato"], 0, "Wortel berwarna oranye adalah 'carrot'.");
addQ("ing-k3-s13", 3, "Vegetable Spinach", "sedang", "A green leafy vegetable that makes Popeye strong is ...", ["Spinach (bayam)", "Chili", "Corn", "Eggplant"], 0, "Sayur bayam hijau adalah 'spinach'.");
addQ("ing-k3-s14", 3, "Vegetable Tomato", "sedang", "A round red juicy vegetable used to make sauce and soup is a ...", ["Tomato", "Cucumber", "Onion", "Garlic"], 0, "Tomat adalah 'tomato'.");
addQ("ing-k3-s15", 3, "Weather Windy", "sedang", "Children like to fly their colorful kites in the field when the weather is ...", ["Windy", "Rainy", "Foggy", "Snowy"], 0, "Bermain layang-layang membutuhkan hembusan angin ('windy').");
addQ("ing-k3-s16", 3, "Weather Cloudy", "sedang", "When the sky is full of grey clouds and the sun is hidden, it is ...", ["Cloudy", "Sunny", "Clear", "Dry"], 0, "Langit dipenuhi awan mendung berarti 'cloudy'.");
addQ("ing-k3-s17", 3, "Transportation Train", "sedang", "A long vehicle that runs on railway tracks and stops at railway stations is a ...", ["Train", "Bus", "Helicopter", "Submarine"], 0, "Kereta api yang berjalan di atas rel adalah 'train'.");
addQ("ing-k3-s18", 3, "Transportation Ship", "sedang", "A large vehicle that sails on the ocean waters carrying goods and passengers is a ...", ["Ship", "Airplane", "Motorcycle", "Cart"], 0, "Kapal laut adalah 'ship'.");
addQ("ing-k3-s19", 3, "Question Word Where", "sedang", "'... do you live?' - 'I live in Surabaya.' Kata tanya yang tepat adalah ...", ["Where", "When", "Why", "Who"], 0, "'Where' digunakan untuk menanyakan lokasi tempat tinggal.");
addQ("ing-k3-s20", 3, "Question Word When", "sedang", "'... do you go to sleep?' - 'I go to sleep at nine o'clock.' Kata tanya yang tepat adalah ...", ["When", "Where", "What", "Who"], 0, "'When' digunakan untuk menanyakan keterangan waktu.");

addQ("ing-k3-u01", 3, "Present Continuous Playing", "sulit", "Look at the field! The boys ... football right now.", ["Are playing", "Is playing", "Am playing", "Plays"], 0, "Subjek jamak 'The boys' menggunakan to be 'are' + V-ing: 'are playing'.");
addQ("ing-k3-u02", 3, "Present Continuous Reading", "sulit", "Listen! Shinta ... an English storybook in the library.", ["Is reading", "Are reading", "Am reading", "Read"], 0, "Subjek tunggal 'Shinta' menggunakan 'is reading'.");
addQ("ing-k3-u03", 3, "Present Continuous Cooking", "sulit", "Mother is in the kitchen. She ... fried rice for our dinner.", ["Is cooking", "Are cooking", "Cooks", "Cooked"], 0, "Kegiatan yang sedang berlangsung saat ini menggunakan 'is cooking'.");
addQ("ing-k3-u04", 3, "Comparative Degree Bigger", "sulit", "An elephant is ... than a goat.", ["Bigger", "Big", "Biggest", "More big"], 0, "Perbandingan dua benda (comparative) untuk kata sifat bersuku kata satu: 'bigger than'.");
addQ("ing-k3-u05", 3, "Comparative Degree Taller", "sulit", "A giraffe is ... than a zebra.", ["Taller", "Tall", "Tallest", "More tall"], 0, "Jerapah lebih tinggi dari zebra ('taller than').");
addQ("ing-k3-u06", 3, "Comparative Degree Faster", "sulit", "A cheetah runs ... than a turtle.", ["Faster", "Fast", "Fastest", "Slowly"], 0, "'Faster than' berarti berlari lebih cepat daripada.");
addQ("ing-k3-u07", 3, "Telling Time Half Past Eight", "sulit", "The clock shows 08.30. In English, we say: 'It is ...'", ["Half past eight", "Half to eight", "Eight o'clock", "Eight to thirty"], 0, "Pukul 08.30 dinyatakan dengan 'half past eight' (lewat 30 menit dari jam 8).");
addQ("ing-k3-u08", 3, "Telling Time A Quarter Past Ten", "sulit", "The clock shows 10.15. In English, we say: 'It is ...'", ["A quarter past ten", "A quarter to ten", "Ten fifteen o'clock", "Half past ten"], 0, "Pukul 10.15 adalah 'a quarter past ten' (lewat 15 menit dari jam 10).");
addQ("ing-k3-u09", 3, "Telling Time A Quarter To Six", "sulit", "The clock shows 05.45 (15 minutes before 6). In English, we say: 'It is ...'", ["A quarter to six", "A quarter past five", "Half past six", "Six forty-five o'clock"], 0, "Pukul 05.45 dinyatakan dengan 'a quarter to six' (kurang 15 menit menuju jam 6).");
addQ("ing-k3-u10", 3, "Adverb of Frequency Always", "sulit", "Budi never misses praying. He ... prays on time every day.", ["Always (100%)", "Never (0%)", "Rarely", "Seldom"], 0, "'Always' menyatakan frekuensi selalu dilakukan 100%.");
addQ("ing-k3-u11", 3, "Adverb of Frequency Never", "sulit", "Siti is a vegetarian. She ... eats meat or chicken.", ["Never", "Always", "Usually", "Often"], 0, "'Never' bermakna tidak pernah sama sekali (0%).");
addQ("ing-k3-u12", 3, "Adverb of Frequency Sometimes", "sulit", "I usually walk to school, but ... when it rains, my father drives me by car.", ["Sometimes", "Never", "Always", "Every second"], 0, "'Sometimes' bermakna kadang-kadang.");
addQ("ing-k3-u13", 3, "Cardinal Direction North", "sulit", "The top direction on a printed map is always ...", ["North", "South", "East", "West"], 0, "Arah atas pada peta adalah Utara ('North').");
addQ("ing-k3-u14", 3, "Cardinal Direction East", "sulit", "The sun rises in the morning in the ...", ["East", "West", "North", "South"], 0, "Matahari terbit di sebelah Timur ('East').");
addQ("ing-k3-u15", 3, "Cardinal Direction West", "sulit", "The sun sets in the late afternoon in the ...", ["West", "East", "North", "South"], 0, "Matahari terbenam di sebelah Barat ('West').");
addQ("ing-k3-u16", 3, "Question Word Why Reason", "sulit", "'... are you crying, Lina?' - 'Because I fell down and hurt my knee.'", ["Why", "Where", "When", "What"], 0, "'Why' digunakan untuk menanyakan alasan (dijawab dengan 'because').");
addQ("ing-k3-u17", 3, "Simple Present Negative He Does Not", "sulit", "Edo ... like spicy chili food because his stomach hurts.", ["Does not", "Do not", "Are not", "Is not"], 0, "Bentuk negatif simple present untuk subjek orang ketiga tunggal (Edo) adalah 'does not'.");
addQ("ing-k3-u18", 3, "Simple Present Negative We Do Not", "sulit", "We ... have class on Sunday because it is a holiday.", ["Do not", "Does not", "Is not", "Are not"], 0, "Subjek 'We' menggunakan kata kerja bantu 'do not'.");
addQ("ing-k3-u19", 3, "Reading Comprehension Dino The Dog", "sulit", "Read: 'Dino is a brown dog. He has floppy ears. He likes to chase tennis balls in the garden.' What game does Dino like to play in the garden?", ["Chasing tennis balls", "Swimming in the river", "Catching mice", "Climbing trees"], 0, "Berdasarkan teks, Dino suka mengejar bola tenis ('chasing tennis balls').");
addQ("ing-k3-u20", 3, "Reading Comprehension Dino Ear Feature", "sulit", "Based on the text: 'Dino is a brown dog. He has floppy ears.' What kind of ears does Dino have?", ["Floppy ears", "Pointy ears", "Small ears", "No ears"], 0, "Teks menyebutkan 'He has floppy ears'.");
addQ("ing-k3-u21", 3, "Finding Grammatical Error", "sulit", "Find the INCORRECT sentence among the choices below:", ["She are singing a song in the room.", "He is reading a novel.", "They are playing badminton.", "I am writing a letter."], 0, "'She are' salah secara tata bahasa, seharusnya 'She is'.");
addQ("ing-k3-u22", 3, "Finding Correct Sentence", "sulit", "Choose the sentence that has the CORRECT grammar:", ["They are studying English together.", "They is studying English together.", "They am studying English together.", "They studies English together."], 0, "'They are studying' adalah kalimat yang benar secara subjek-predikat.");
addQ("ing-k3-u23", 3, "Preposition of Place Behind", "sulit", "The car is parked ... the house. You cannot see it from the front street.", ["Behind", "In front of", "On", "Above"], 0, "Di belakang rumah sehingga tak terlihat dari depan adalah 'behind'.");
addQ("ing-k3-u24", 3, "Preposition of Place In Front Of", "sulit", "The flagpole stands proudly ... the school building in the middle of the yard.", ["In front of", "Under", "Behind", "Inside"], 0, "Tiang bendera berdiri di depan gedung sekolah ('in front of').");
addQ("ing-k3-u25", 3, "Opposite Heavy vs Light", "sulit", "A heavy stone weighs ten kilograms, but a bird's feather is very ...", ["Light", "Dark", "Hard", "Thick"], 0, "Lawan kata 'heavy' (berat) adalah 'light' (ringan).");
addQ("ing-k3-u26", 3, "Opposite Sweet vs Sour", "sulit", "Honey is sweet, but fresh lemon juice is ...", ["Sour", "Salty", "Spicy", "Bitter"], 0, "Rasa asam lemon adalah 'sour', lawan dari manis ('sweet').");
addQ("ing-k3-u27", 3, "Opposite Sharp vs Blunt", "sulit", "A new knife is sharp, but an old unsharpened pencil is ...", ["Blunt (dull)", "Long", "Clean", "Cold"], 0, "Lawan kata tajam ('sharp') adalah tumpul ('blunt' atau 'dull').");
addQ("ing-k3-u28", 3, "Action Verb Borrow vs Lend", "sulit", "'May I ... your eraser, please?' - 'Sure, I will lend it to you.'", ["Borrow", "Buy", "Break", "Sell"], 0, "'Borrow' berarti meminjam dari orang lain.");
addQ("ing-k3-u29", 3, "Weather Umbrella Need", "sulit", "Don't forget to take an umbrella before going outside because it is raining ... outside.", ["Heavily", "Sunny", "Brightly", "Dry"], 0, "Hujan deras turun dinyatakan dengan 'raining heavily'.");
addQ("ing-k3-u30", 3, "Math English Word Problem", "sulit", "Rina has twelve colored pencils. She gives four pencils to her sister. How many colored pencils does Rina have left?", ["Eight pencils", "Sixteen pencils", "Ten pencils", "Seven pencils"], 0, "12 - 4 = 8 (eight pencils left).");

console.log("Kelas 3 Bahasa Inggris ready: " + allQuestions.length + " questions.");

fs.writeFileSync(path.join(__dirname, '../generators/inggris_part1_3.json'), JSON.stringify(allQuestions, null, 2), 'utf8');
console.log("Saved inggris_part1_3.json with " + allQuestions.length + " questions.");
