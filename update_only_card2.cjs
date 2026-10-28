const fs = require('fs');

let js = fs.readFileSync('app.js', 'utf8');

const oldThumb = 'thumb.innerHTML = getBangladeshArmyMiniPreviewHtml(accentColor);';
const newThumb = `thumb.innerHTML = \`
        <div style="
          width:100%; height:100%;
          overflow:hidden;
          display:flex;
          align-items:flex-start;
          justify-content:center;
          background:#fff;
          position:relative;
        ">
          <img
            src="pictur and video logo/Retired Army Format-2.png"
            alt="Retired Army Format Preview"
            style="
              width:100%;
              height:100%;
              object-fit:cover;
              object-position:top;
              display:block;
            "
            onerror="this.src='pictur and video logo/Retired Army Format.png'; this.onerror=function(){ this.parentElement.innerHTML = getBangladeshArmyMiniPreviewHtml('\${accentColor}'); };"
          />
          <div style="
            position:absolute;
            bottom:0; left:0; right:0;
            background:linear-gradient(transparent, rgba(0,0,0,0.15));
            height:40px;
            pointer-events:none;
          "></div>
        </div>\`;`;

if (js.includes(oldThumb)) {
    js = js.replace(oldThumb, newThumb);
    fs.writeFileSync('app.js', js, 'utf8');
    console.log('Successfully updated only Card 2 thumbnail in app.js');
} else {
    console.log('oldThumb not found');
}

