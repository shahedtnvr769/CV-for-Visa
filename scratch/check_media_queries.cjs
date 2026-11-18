const fs = require('fs');
const css = fs.readFileSync('style.css', 'utf8');
const lines = css.split('\n');
const idx = lines.findIndex(l => l.includes('.cv-pdf-footer'));
console.log(lines.slice(idx + 150, idx + 260).join('\n'));

