const fs = require('fs');
const path = require('path');

const src = path.join(__dirname, 'pic', 'kilin.png');
const dest = path.join(__dirname, 'public', 'projects', 'kilin.png');

try {
    fs.copyFileSync(src, dest);
    console.log('Successfully copied kilin.png to public/projects/');
} catch (err) {
    console.error('Error copying file:', err);
}
