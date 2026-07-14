import fs from 'fs';
import path from 'path';

const source = "pictur and video logo/bangladesh_cv_template.png";
const dest = "public/pictur and video logo/bangladesh_cv_template.png";

try {
  if (fs.existsSync(source)) {
    // Ensure destination directory exists
    const destDir = path.dirname(dest);
    if (!fs.existsSync(destDir)) {
      fs.mkdirSync(destDir, { recursive: true });
    }
    fs.copyFileSync(source, dest);
    console.log("SUCCESS: copied image to public directory:", dest);
  } else {
    console.log("Source does not exist: " + source);
  }
} catch (err) {
  console.error("ERROR: ", err);
}

