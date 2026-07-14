import shutil
import os

src = r'e:\WEBSITE CREAT for MY BUSSINESS\Resume(CV) & Cover letter\pictur and video logo\bangladesh_cv_template.png'
dst = r'e:\WEBSITE CREAT for MY BUSSINESS\Resume(CV) & Cover letter\public\pictur and video logo\bangladesh_cv_template.png'

try:
    if os.path.exists(src):
        # Ensure destination directory exists
        os.makedirs(os.path.dirname(dst), exist_ok=True)
        shutil.copy2(src, dst)
        print("SUCCESS: copied image to public directory:", dst)
    else:
        print("ERROR: Source file does not exist:", src)
except Exception as e:
    print("ERROR:", e)

