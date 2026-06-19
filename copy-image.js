import fs from 'fs';
import path from 'path';

const source = "C:\\Users\\USER\\.gemini\\antigravity-ide\\brain\\61046e21-1dd3-47ac-85c7-626a02b81c0e\\.tempmediaStorage\\media_61046e21-1dd3-47ac-85c7-626a02b81c0e_1781869297230.png";
const dest = "e:\\WEBSITE CREAT for MY BUSSINESS\\Resume(CV) & Cover letter\\pictur and video logo\\bangladesh_cv_template.png";

try {
  if (fs.existsSync(source)) {
    fs.copyFileSync(source, dest);
    console.log("SUCCESS");
  } else {
    console.log("Source does not exist: " + source);
  }
} catch (err) {
  console.error("ERROR: ", err);
}
