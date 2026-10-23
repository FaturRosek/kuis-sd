const fs = require('fs');
let c = fs.readFileSync('generators/gen_pancasila.js', 'utf8');
c = c.split('"subject": "pancasila"').join('"subject": "pendidikan-pancasila"');
fs.writeFileSync('generators/gen_pancasila.js', c, 'utf8');
console.log('Fixed gen_pancasila.js subject to pendidikan-pancasila');
