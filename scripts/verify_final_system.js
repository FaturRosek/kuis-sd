const fs = require('fs');
const path = require('path');

const code = fs.readFileSync(path.join(__dirname, '..', 'data', 'questions.js'), 'utf8');

const sandbox = new Function(code + `
  return {
    SUBJECT_LIST,
    RELIGION_OPTIONS,
    LEVELS_CONFIG,
    QUESTIONS_DATA,
    getQuestionsForLevel,
    validateQuestionBank
  };
`)();

console.log('=== VERIFYING FINAL QUESTION BANK SYSTEM ===');

const valResult = sandbox.validateQuestionBank();
console.log('validateQuestionBank result:', valResult);
if (!valResult.valid) {
  throw new Error('validateQuestionBank failed!');
}

const totalQuestions = sandbox.QUESTIONS_DATA.length;
const uniqueQuestions = new Set(sandbox.QUESTIONS_DATA.map(q => q.question.trim().toLowerCase())).size;
console.log(`Total questions: ${totalQuestions}`);
console.log(`Unique question texts: ${uniqueQuestions}`);
if (totalQuestions !== 3840 || uniqueQuestions !== 3840) {
  throw new Error(`Integrity error: total ${totalQuestions}, unique ${uniqueQuestions}`);
}

let testCount = 0;
let passCount = 0;

sandbox.SUBJECT_LIST.forEach(sub => {
  sub.grades.forEach(grade => {
    const religions = sub.requiresReligion ? ['islam', 'kristen', 'katolik'] : [null];
    religions.forEach(rel => {
      ['mudah', 'sedang', 'sulit'].forEach(lvl => {
        testCount++;
        const targetExpected = lvl === 'mudah' ? 10 : (lvl === 'sedang' ? 20 : 30);
        const questions = sandbox.getQuestionsForLevel(grade, sub.id, lvl, rel);

        if (questions.length !== targetExpected) {
          throw new Error(`Mismatch count for ${sub.id} K${grade} ${lvl} ${rel || ''}: got ${questions.length}, expected ${targetExpected}`);
        }

        const wrongLvl = questions.filter(q => (q.difficulty || q.level) !== lvl);
        if (wrongLvl.length > 0) {
          throw new Error(`Wrong level returned for ${sub.id} K${grade} ${lvl}: ${wrongLvl.length} questions have wrong level`);
        }

        const sessionUnique = new Set(questions.map(q => q.id)).size;
        if (sessionUnique !== questions.length) {
          throw new Error(`Duplicate IDs inside quiz session for ${sub.id} K${grade} ${lvl}`);
        }

        passCount++;
      });
    });
  });
});

console.log(`=== ALL ${testCount} FILTER CONFIGURATIONS TESTED AND PASSED 100%! ===`);
console.log(`- Total Subjects: ${sandbox.SUBJECT_LIST.length}`);
console.log(`- Total Questions: ${totalQuestions} (100% Unique, Zero duplicates)`);
console.log(`- Level Mudah: Exactly 10 questions per grade/subject`);
console.log(`- Level Sedang: Exactly 20 questions per grade/subject`);
console.log(`- Level Sulit: Exactly 30 questions per grade/subject (HOTS & Critical Thinking)`);
