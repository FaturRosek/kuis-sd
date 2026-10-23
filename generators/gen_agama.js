const fs = require('fs');
const path = require('path');

const islam = JSON.parse(fs.readFileSync(path.join(__dirname, 'agama_islam.json'), 'utf8'));
const kristen = JSON.parse(fs.readFileSync(path.join(__dirname, 'agama_kristen.json'), 'utf8'));
const katolik = JSON.parse(fs.readFileSync(path.join(__dirname, 'agama_katolik.json'), 'utf8'));

const agamaQuestions = [...islam, ...kristen, ...katolik];

module.exports = {
  agamaQuestions
};
