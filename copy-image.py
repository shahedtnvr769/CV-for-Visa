import base64
import shutil
import os

src = r'C:\Users\USER\.gemini\antigravity-ide\brain\61046e21-1dd3-47ac-85c7-626a02b81c0e\bangladesh_cv_template_preview_1781873056776.png'
dst = r'e:\WEBSITE CREAT for MY BUSSINESS\Resume(CV) & Cover letter\pictur and video logo\bangladesh_cv_template.png'

try:
    with open(src, 'rb') as f:
        data = f.read()
    with open(dst, 'wb') as f:
        f.write(data)
    print("SUCCESS: copied", len(data), "bytes")
except Exception as e:
    print("ERROR:", e)
    # Try alternate approach - look at directory
    try:
        brain_dir = r'C:\Users\USER\.gemini\antigravity-ide\brain\61046e21-1dd3-47ac-85c7-626a02b81c0e'
        print("Directory exists:", os.path.exists(brain_dir))
        if os.path.exists(brain_dir):
            items = os.listdir(brain_dir)
            print("Items:", items[:10])
    except Exception as e2:
        print("Dir error:", e2)
