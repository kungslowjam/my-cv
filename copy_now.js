const fs = require('fs');
const path = require('path');

const src = path.resolve('pic/Gemini_Generated_Image_y3b6cyy3b6cyy3b6.png');
const dest = path.resolve('public/profile.png');

console.log('Source:', src);
console.log('Destination:', dest);

if (!fs.existsSync(src)) {
    console.log('Source does not exist!');
    process.exit(1);
}

try {
    fs.copyFileSync(src, dest);
    console.log('SUCCESS');
    const stats = fs.statSync(dest);
    console.log('New file size:', stats.size);
} catch (err) {
    console.error('FAILED:', err.message);
}
