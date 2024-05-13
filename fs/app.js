const fs = require('fs');

const poema = fs.readFileSync('poema.txt','utf-8');

const poemaModified = poema.replace(/streams/ig, 'FIESTONES');

fs.writeFileSync('poema-copy.txt',poemaModified)


console.log(poema);