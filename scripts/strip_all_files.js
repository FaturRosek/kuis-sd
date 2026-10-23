const fs = require('fs');
const path = require('path');
const {
  stripJsComments,
  stripCssComments,
  stripHtmlComments
} = require('./strip_engine.js');

const rootDir = path.join(__dirname, '..');

function processFile(filePath) {
  const ext = path.extname(filePath).toLowerCase();
  const original = fs.readFileSync(filePath, 'utf8');
  let stripped = original;

  if (ext === '.html') {
    stripped = stripHtmlComments(original);
  } else if (ext === '.css') {
    stripped = stripCssComments(original);
  } else if (ext === '.js') {
    stripped = stripJsComments(original);
  } else {
    return;
  }

  if (stripped !== original) {
    fs.writeFileSync(filePath, stripped, 'utf8');
    console.log(`[CLEANED] ${path.relative(rootDir, filePath)}: ${original.length} -> ${stripped.length} bytes`);
  } else {
    console.log(`[NO COMMENTS] ${path.relative(rootDir, filePath)}`);
  }
}

function processDirectory(dirPath) {
  const entries = fs.readdirSync(dirPath, { withFileTypes: true });
  for (const entry of entries) {
    const fullPath = path.join(dirPath, entry.name);
    if (entry.isDirectory()) {
      if (entry.name === 'node_modules' || entry.name === '.git') continue;
      processDirectory(fullPath);
    } else if (entry.isFile()) {
      const ext = path.extname(entry.name).toLowerCase();

      if (fullPath.includes(path.join('data', 'questions.js'))) continue;
      if (['.html', '.css', '.js'].includes(ext)) {
        processFile(fullPath);
      }
    }
  }
}

console.log('--- STARTING COMMENT REMOVAL ACROSS ALL FILES ---');

processFile(path.join(rootDir, 'index.html'));
processFile(path.join(rootDir, 'css', 'style.css'));
processFile(path.join(rootDir, 'js', 'storage.js'));
processFile(path.join(rootDir, 'js', 'quiz.js'));
processFile(path.join(rootDir, 'js', 'results.js'));
processFile(path.join(rootDir, 'js', 'app.js'));

processDirectory(rootDir);

console.log('--- COMMENT REMOVAL COMPLETED ---');
