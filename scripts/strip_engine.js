const fs = require('fs');
const path = require('path');

function stripJsComments(code) {
  let result = '';
  let i = 0;
  const n = code.length;

  while (i < n) {
    const c = code[i];
    const next = i + 1 < n ? code[i + 1] : '';

    if (c === "'") {
      result += c;
      i++;
      while (i < n) {
        const sc = code[i];
        result += sc;
        if (sc === '\\') {
          i++;
          if (i < n) result += code[i];
        } else if (sc === "'") {
          i++;
          break;
        }
        i++;
      }
      continue;
    }

    if (c === '"') {
      result += c;
      i++;
      while (i < n) {
        const sc = code[i];
        result += sc;
        if (sc === '\\') {
          i++;
          if (i < n) result += code[i];
        } else if (sc === '"') {
          i++;
          break;
        }
        i++;
      }
      continue;
    }

    if (c === '`') {
      result += c;
      i++;
      while (i < n) {
        const sc = code[i];
        if (sc === '\\') {
          result += sc;
          i++;
          if (i < n) result += code[i];
          i++;
          continue;
        }
        if (sc === '$' && i + 1 < n && code[i + 1] === '{') {
          result += '${';
          i += 2;
          let braceDepth = 1;
          while (i < n && braceDepth > 0) {
            const innerChar = code[i];
            if (innerChar === '{') {
              braceDepth++;
              result += innerChar;
              i++;
            } else if (innerChar === '}') {
              braceDepth--;
              result += innerChar;
              i++;
            } else if (innerChar === "'" || innerChar === '"' || innerChar === '`') {
              const q = innerChar;
              result += q;
              i++;
              while (i < n) {
                const qc = code[i];
                result += qc;
                if (qc === '\\') {
                  i++;
                  if (i < n) result += code[i];
                } else if (qc === q) {
                  i++;
                  break;
                }
                i++;
              }
            } else if (innerChar === '/' && i + 1 < n && code[i + 1] === '/') {
              while (i < n && code[i] !== '\n') i++;
            } else if (innerChar === '/' && i + 1 < n && code[i + 1] === '*') {
              i += 2;
              while (i < n && !(code[i] === '*' && code[i + 1] === '/')) i++;
              i += 2;
            } else {
              result += innerChar;
              i++;
            }
          }
          continue;
        }
        result += sc;
        if (sc === '`') {
          i++;
          break;
        }
        i++;
      }
      continue;
    }

    if (c === '/' && next === '/') {
      i += 2;
      while (i < n && code[i] !== '\n' && code[i] !== '\r') {
        i++;
      }
      continue;
    }

    if (c === '/' && next === '*') {
      i += 2;
      while (i < n && !(code[i] === '*' && code[i + 1] === '/')) {
        i++;
      }
      i += 2;

      const prevC = result.length > 0 ? result[result.length - 1] : '';
      const nextC = i < n ? code[i] : '';
      if (/[a-zA-Z0-9_$]/.test(prevC) && /[a-zA-Z0-9_$]/.test(nextC)) {
        result += ' ';
      }
      continue;
    }

    if (c === '/') {
      let prevIdx = result.length - 1;
      while (prevIdx >= 0 && /\s/.test(result[prevIdx])) {
        prevIdx--;
      }
      const prevChar = prevIdx >= 0 ? result[prevIdx] : '';
      const isRegex = prevIdx === -1 || /[=(,[!;:?&|<>+*%-~^{]/.test(prevChar) ||
        /(?:return|case|typeof|delete|void|throw|in|instanceof|new|yield|await)$/.test(result.slice(Math.max(0, prevIdx - 10), prevIdx + 1));

      if (isRegex) {
        result += c;
        i++;
        let inCharClass = false;
        while (i < n) {
          const rc = code[i];
          result += rc;
          if (rc === '\\') {
            i++;
            if (i < n) result += code[i];
          } else if (rc === '[') {
            inCharClass = true;
          } else if (rc === ']') {
            inCharClass = false;
          } else if (rc === '/' && !inCharClass) {
            i++;
            break;
          }
          i++;
        }
        while (i < n && /[a-z]/i.test(code[i])) {
          result += code[i];
          i++;
        }
        continue;
      }
    }

    result += c;
    i++;
  }

  return cleanEmptyLines(result);
}

function stripCssComments(code) {
  let result = '';
  let i = 0;
  const n = code.length;

  while (i < n) {
    const c = code[i];
    if (c === "'" || c === '"') {
      const q = c;
      result += q;
      i++;
      while (i < n) {
        const sc = code[i];
        result += sc;
        if (sc === '\\') {
          i++;
          if (i < n) result += code[i];
        } else if (sc === q) {
          i++;
          break;
        }
        i++;
      }
      continue;
    }

    if (c === '/' && code[i + 1] === '*') {
      i += 2;
      while (i < n && !(code[i] === '*' && code[i + 1] === '/')) {
        i++;
      }
      i += 2;
      continue;
    }

    result += c;
    i++;
  }

  return cleanEmptyLines(result);
}

function stripHtmlComments(code) {

  let result = code.replace(/<!--[\s\S]*?-->/g, '');
  return cleanEmptyLines(result);
}

function cleanEmptyLines(text) {

  const lines = text.split(/\r?\n/);
  const cleaned = [];
  let prevEmpty = false;

  for (let line of lines) {
    const trimmedRight = line.replace(/[ \t]+$/, '');
    const isEmpty = trimmedRight.trim() === '';

    if (isEmpty) {
      if (!prevEmpty && cleaned.length > 0) {
        cleaned.push('');
      }
      prevEmpty = true;
    } else {
      cleaned.push(trimmedRight);
      prevEmpty = false;
    }
  }

  return cleaned.join('\n').trim() + '\n';
}

module.exports = {
  stripJsComments,
  stripCssComments,
  stripHtmlComments,
  cleanEmptyLines
};
