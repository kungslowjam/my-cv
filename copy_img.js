const fs = require('fs');
const path = require('path');

const src = path.join(__dirname, 'pic', 'Gemini_Generated_Image_y3b6cyy3b6cyy3b6.png');
const dest = path.join(__dirname, 'public', 'profile.png');

try {
    fs.copyFileSync(src, dest);
    console.log('Copy successful');
} catch (err) {
    console.error('Copy failed:', err);
}
