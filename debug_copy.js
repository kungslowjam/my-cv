const fs = require('fs');
const path = require('path');
const src = 'pic/Gemini_Generated_Image_y3b6cyy3b6cyy3b6.png';
const dest = 'public/profile.png';
console.log('Current dir:', process.cwd());
try {
    console.log('Files in pic:', fs.readdirSync('pic'));
    fs.copyFileSync(src, dest);
    console.log('COPIED SUCCESSFULLY');
} catch (e) {
    console.error('ERROR COPYING:', e);
}
