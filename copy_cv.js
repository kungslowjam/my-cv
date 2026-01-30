const fs = require('fs');
const path = require('path');

const src = path.join(__dirname, 'CV-Academic-update.pdf');
const dest = path.join(__dirname, 'public', 'cv.pdf');

try {
    fs.copyFileSync(src, dest);
    console.log('File copied successfully from ' + src + ' to ' + dest);
} catch (err) {
    console.error('Error copying file:', err);
}
