const fs = require('fs');

console.log("Starting Norway photo patch...");

// 1. Update style.css
let styleCss = fs.readFileSync('style.css', 'utf8');

const norwayPhotoCss = `
/* Norway CV Profile Photo on Right Header */
.cv-no-header.with-photo {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    gap: 20px;
    margin-bottom: 18px;
}

.cv-no-header.with-photo .cv-no-header-main {
    flex: 1;
    min-width: 0;
}

.cv-no-header.with-photo .cv-no-infobox {
    margin-bottom: 0;
}

.cv-no-photo-col {
    flex-shrink: 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    padding-top: 2px;
}

.cv-no-photo-wrap {
    width: 110px;
    height: 135px;
    min-width: 110px;
    min-height: 135px;
    border: 2px solid #0f2942;
    border-radius: 6px;
    background: #f8fafc;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    position: relative;
    overflow: hidden;
    box-shadow: 0 2px 8px rgba(15, 41, 66, 0.12);
    transition: border-color 0.2s ease, box-shadow 0.2s ease;
}

.cv-no-photo-wrap:hover {
    border-color: #2c7a7b;
    box-shadow: 0 4px 14px rgba(44, 122, 123, 0.25);
}

.cv-no-photo-img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: block;
}

.cv-no-photo-ph {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
    padding: 8px;
    box-sizing: border-box;
    color: #64748b;
    background: #f1f5f9;
    gap: 6px;
    user-select: none;
}

.cv-no-ph-txt {
    font-size: 11px;
    font-weight: 700;
    color: #334155;
    letter-spacing: 0.5px;
    text-transform: uppercase;
}

.cv-no-photo-overlay {
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    background: rgba(15, 41, 66, 0.88);
    color: #ffffff;
    font-size: 10.5px;
    font-weight: 600;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 5px;
    padding: 5px 0;
    opacity: 0;
    transition: opacity 0.2s ease;
    user-select: none;
}

.cv-no-photo-wrap:hover .cv-no-photo-overlay {
    opacity: 1;
}
`;

if (!styleCss.includes('.cv-no-photo-wrap')) {
    styleCss += "\n" + norwayPhotoCss + "\n";
    fs.writeFileSync('style.css', styleCss, 'utf8');
    console.log("Updated style.css with Norway photo CSS");
} else {
    console.log("style.css already has .cv-no-photo-wrap");
}

// 2. Update app.js
let appJs = fs.readFileSync('app.js', 'utf8');

// A. Add photoUrl to DEFAULT_NORWAY_CV_DATA if not present
if (!appJs.includes('photoUrl: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=200",\r\n    contact:') &&
    !appJs.includes('photoUrl: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=200",\n    contact:')) {
    appJs = appJs.replace(
        /(const DEFAULT_NORWAY_CV_DATA\s*=\s*\{[\r\n\s]*name:\s*"RAFIQ HASAN",[\r\n\s]*jobTitle:\s*"WAREHOUSE & LOGISTICS ASSISTANT",)/,
        `$1\n    photoUrl: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=200",`
    );
    console.log("Added photoUrl to DEFAULT_NORWAY_CV_DATA");
}

// B. Update NO_LABELS with photo & changePhoto
const noLabelsReplacements = [
    { target: 'sampleCvFooter: "SAMPLE CV — fictional details for layout demonstration",', add: 'photo: "Photo",\n        changePhoto: "Change Photo",\n        ' },
    { target: 'sampleCvFooter: "EKSEMPEL-CV — fiktive detaljer for layoutdemonstrasjon",', add: 'photo: "Bilde",\n        changePhoto: "Endre bilde",\n        ' },
    { target: 'sampleCvFooter: "নমুনা সিভি — লেআউট প্রদর্শনের জন্য কাল্পনিক বিবরণ",', add: 'photo: "ছবি",\n        changePhoto: "ছবি পরিবর্তন",\n        ' },
    { target: 'sampleCvFooter: "MUSTER-LEBENSLAUF — fiktive Angaben zur Layout-Demonstration",', add: 'photo: "Foto",\n        changePhoto: "Foto ändern",\n        ' },
    { target: 'sampleCvFooter: "EXEMPLE DE CV — détails fictifs pour démonstration de mise en page",', add: 'photo: "Photo",\n        changePhoto: "Changer la photo",\n        ' },
    { target: 'sampleCvFooter: "CV DI ESEMPIO — dettagli fittizi a scopo dimostrativo del layout",', add: 'photo: "Foto",\n        changePhoto: "Cambia foto",\n        ' },
    { target: 'sampleCvFooter: "MODELO DE CV — detalhes fictícios para demonstração de layout",', add: 'photo: "Foto",\n        changePhoto: "Alterar foto",\n        ' },
    { target: 'sampleCvFooter: "EKSEMPEL-CV — fiktive oplysninger til layoutdemonstration",', add: 'photo: "Foto",\n        changePhoto: "Skift foto",\n        ' },
    { target: 'sampleCvFooter: "ОБРАЗЕЦ РЕЗЮМЕ — вымышленные данные для демонстрации макета",', add: 'photo: "Фото",\n        changePhoto: "Сменить фото",\n        ' },
    { target: 'sampleCvFooter: "見本CV — レイアウト提示用の架空情報",', add: 'photo: "写真",\n        changePhoto: "写真を変更",\n        ' },
    { target: 'sampleCvFooter: "샘플 이력서 — 서식 시연용 가상 정보",', add: 'photo: "사진",\n        changePhoto: "사진 변경",\n        ' },
    { target: 'sampleCvFooter: "SAMPEL CV — maklumat fiksyen untuk demonstrasi reka letak",', add: 'photo: "Foto",\n        changePhoto: "Tukar foto",\n        ' },
];

noLabelsReplacements.forEach(r => {
    if (appJs.includes(r.target) && !appJs.includes(r.add + r.target)) {
        appJs = appJs.replace(r.target, r.add + r.target);
    }
});
console.log("Updated NO_LABELS with photo translations");

// C. Update getNorwayCVHtml to render photo on the right side
const oldNorwayHeader = `    return \`
    <div class="cv-no-container">
        <!-- Header Block -->
        <div class="cv-no-header">
            <h1 class="cv-no-name" contenteditable="true" data-type="no-name">\${name}</h1>
            <div class="cv-no-subtitle" contenteditable="true" data-type="no-jobTitle">\${jobTitle}</div>
            
            <!-- Contact & Work Authorisation Info Box -->
            <div class="cv-no-infobox">
                <div class="cv-no-infoline">
                    <span class="cv-no-lbl">\${labels.location || "Location"}:</span> <span contenteditable="true" data-type="no-location">\${location}</span>
                    <span class="cv-no-sep">|</span>
                    <span class="cv-no-lbl">\${labels.phone || "Phone"}:</span> <span contenteditable="true" data-type="no-phone">\${phone}</span>
                </div>
                <div class="cv-no-infoline">
                    <span class="cv-no-lbl">\${labels.email || "Email"}:</span> <span contenteditable="true" data-type="no-email">\${email}</span>
                    <span class="cv-no-sep">|</span>
                    <span class="cv-no-lbl">\${labels.linkedin || "LinkedIn"}:</span> <span contenteditable="true" data-type="no-linkedin">\${linkedin}</span>
                </div>
                <div class="cv-no-infoline">
                    <span class="cv-no-lbl">\${labels.workAuth || "Work authorisation"}:</span> <span contenteditable="true" data-type="no-workAuth">\${workAuthorisation}</span>
                </div>
            </div>
        </div>`;

const newNorwayHeader = `    const isPhotoHidden = (settings.hiddenModules || []).includes("profilePhoto") || (settings.hiddenModules || []).includes("photo") || settings.showPhoto === false;
    const showPhoto = !isPhotoHidden;
    const photoUrl = (data && data.photoUrl) || settings.photoUrl || "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=200";

    const photoShape = settings.photoShape || "rounded";
    const photoSize = settings.photoSize || 115;
    let photoRadius = "6px";
    if (photoShape === "circle") photoRadius = "50%";
    else if (photoShape === "square") photoRadius = "0px";
    else if (photoShape === "rounded") photoRadius = "12px";

    const photoStyleAttr = photoShape === "circle"
        ? \`width:\${photoSize}px;height:\${photoSize}px;min-width:\${photoSize}px;min-height:\${photoSize}px;border-radius:50%;\`
        : \`width:\${Math.round(photoSize * 0.85)}px;height:\${photoSize}px;min-width:\${Math.round(photoSize * 0.85)}px;min-height:\${photoSize}px;border-radius:\${photoRadius};\`;

    return \`
    <div class="cv-no-container">
        <!-- Header Block (With Right-side Profile Photo) -->
        <div class="cv-no-header \${showPhoto ? 'with-photo' : ''}">
            <div class="cv-no-header-main">
                <h1 class="cv-no-name" contenteditable="true" data-type="no-name">\${name}</h1>
                <div class="cv-no-subtitle" contenteditable="true" data-type="no-jobTitle">\${jobTitle}</div>
                
                <!-- Contact & Work Authorisation Info Box -->
                <div class="cv-no-infobox">
                    <div class="cv-no-infoline">
                        <span class="cv-no-lbl">\${labels.location || "Location"}:</span> <span contenteditable="true" data-type="no-location">\${location}</span>
                        <span class="cv-no-sep">|</span>
                        <span class="cv-no-lbl">\${labels.phone || "Phone"}:</span> <span contenteditable="true" data-type="no-phone">\${phone}</span>
                    </div>
                    <div class="cv-no-infoline">
                        <span class="cv-no-lbl">\${labels.email || "Email"}:</span> <span contenteditable="true" data-type="no-email">\${email}</span>
                        <span class="cv-no-sep">|</span>
                        <span class="cv-no-lbl">\${labels.linkedin || "LinkedIn"}:</span> <span contenteditable="true" data-type="no-linkedin">\${linkedin}</span>
                    </div>
                    <div class="cv-no-infoline">
                        <span class="cv-no-lbl">\${labels.workAuth || "Work authorisation"}:</span> <span contenteditable="true" data-type="no-workAuth">\${workAuthorisation}</span>
                    </div>
                </div>
            </div>

            \${showPhoto ? \`
            <div class="cv-no-photo-col" id="cv-no-sec-photo">
                <div class="cv-no-photo-wrap" id="cv-no-photo-wrap" style="\${photoStyleAttr}" title="Click to upload profile photo">
                    \${photoUrl ? \`
                        <img src="\${photoUrl}" alt="Profile Photo" class="cv-no-photo-img" onerror="this.style.display='none';this.nextElementSibling.style.display='flex';">
                        <div class="cv-no-photo-ph" style="display:none;">
                            <svg viewBox="0 0 24 24" width="28" height="28" fill="#94a3b8"><path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/></svg>
                            <span class="cv-no-ph-txt">\${labels.photo || "Photo"}</span>
                        </div>
                    \` : \`
                        <div class="cv-no-photo-ph">
                            <svg viewBox="0 0 24 24" width="28" height="28" fill="#94a3b8"><path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/></svg>
                            <span class="cv-no-ph-txt">\${labels.photo || "Photo"}</span>
                        </div>
                    \`}
                    <div class="cv-no-photo-overlay no-print">
                        <svg viewBox="0 0 24 24" width="16" height="16" fill="#fff"><path d="M4 4h3l2-2h6l2 2h3a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2zm8 3a5 5 0 1 0 0 10 5 5 0 0 0 0-10zm0 2a3 3 0 1 1 0 6 3 3 0 0 1 0-6z"/></svg>
                        <span>\${labels.changePhoto || "Change"}</span>
                    </div>
                </div>
            </div>\` : ''}
        </div>\`;

// Replace in getNorwayCVHtml
let normalizedAppJs = appJs.replace(/\r\n/g, '\n');
const normalizedOld = oldNorwayHeader.replace(/\r\n/g, '\n');

if (normalizedAppJs.includes(normalizedOld)) {
    normalizedAppJs = normalizedAppJs.replace(normalizedOld, newNorwayHeader.replace(/\r\n/g, '\n'));
    appJs = normalizedAppJs;
    console.log("Successfully replaced getNorwayCVHtml header with photo container");
} else {
    console.error("Could not find exact match for oldNorwayHeader!");
}

// D. Include #cv-no-photo-wrap, .cv-no-photo-wrap in applyPhotoStyles
if (!appJs.includes('#cv-no-photo-wrap, .cv-no-photo-wrap')) {
    appJs = appJs.replace(
        '#cv-kr-photo-wrap, .cv-kr-photo-wrap',
        '#cv-kr-photo-wrap, .cv-kr-photo-wrap, #cv-no-photo-wrap, .cv-no-photo-wrap'
    );
    console.log("Added #cv-no-photo-wrap to applyPhotoStyles");
}

// E. Add Norway photo click handler and add/delete actions in paper click listener
const norwayActionHandlers = `
            // ── Norway CV Photo & Action Handlers ──
            const noPhotoBox = e.target.closest("#cv-no-photo-wrap");
            if (noPhotoBox) {
                e.preventDefault();
                const photoInput = document.getElementById("file-photo-upload") || document.getElementById("photo-upload-input");
                if (photoInput) photoInput.click();
                return;
            }

            // Norway Add Skill
            const addNoSkill = e.target.closest("#btn-no-add-skill");
            if (addNoSkill) {
                e.preventDefault();
                if (!Array.isArray(appState.cvData.keySkills)) appState.cvData.keySkills = [];
                appState.cvData.keySkills.push("New Skill / Competence");
                updateLivePreview();
                return;
            }

            // Norway Delete Skill
            const delNoSkill = e.target.closest(".cv-no-del-skill[data-type='no-del-skill']");
            if (delNoSkill) {
                e.preventDefault();
                const idx = parseInt(delNoSkill.dataset.index);
                if (Array.isArray(appState.cvData.keySkills)) {
                    appState.cvData.keySkills.splice(idx, 1);
                    updateLivePreview();
                }
                return;
            }

            // Norway Add Experience
            const addNoExp = e.target.closest("#btn-no-add-exp");
            if (addNoExp) {
                e.preventDefault();
                if (!Array.isArray(appState.cvData.experience)) appState.cvData.experience = [];
                appState.cvData.experience.push({
                    role: "Job Title / Role",
                    company: "Company / Organization Name",
                    location: "Location",
                    duration: "Year – Present",
                    bullets: ["Key job responsibility or operational achievement."]
                });
                updateLivePreview();
                return;
            }

            // Norway Delete Experience
            const delNoExp = e.target.closest(".cv-no-del-btn[data-type='no-del-exp']");
            if (delNoExp) {
                e.preventDefault();
                const idx = parseInt(delNoExp.dataset.index);
                if (Array.isArray(appState.cvData.experience)) {
                    appState.cvData.experience.splice(idx, 1);
                    updateLivePreview();
                }
                return;
            }

            // Norway Add Exp Bullet
            const addNoBullet = e.target.closest(".cv-no-add-bullet-btn");
            if (addNoBullet) {
                e.preventDefault();
                const idx = parseInt(addNoBullet.dataset.index);
                if (Array.isArray(appState.cvData.experience) && appState.cvData.experience[idx]) {
                    if (!Array.isArray(appState.cvData.experience[idx].bullets)) appState.cvData.experience[idx].bullets = [];
                    appState.cvData.experience[idx].bullets.push("Key duty or accomplishment.");
                    updateLivePreview();
                }
                return;
            }

            // Norway Delete Exp Bullet
            const delNoBullet = e.target.closest(".cv-no-del-bullet");
            if (delNoBullet) {
                e.preventDefault();
                const idx = parseInt(delNoBullet.dataset.index);
                const bidx = parseInt(delNoBullet.dataset.bindex);
                if (Array.isArray(appState.cvData.experience) && appState.cvData.experience[idx] && Array.isArray(appState.cvData.experience[idx].bullets)) {
                    appState.cvData.experience[idx].bullets.splice(bidx, 1);
                    updateLivePreview();
                }
                return;
            }

            // Norway Add Education
            const addNoEdu = e.target.closest("#btn-no-add-edu");
            if (addNoEdu) {
                e.preventDefault();
                if (!Array.isArray(appState.cvData.education)) appState.cvData.education = [];
                appState.cvData.education.push({
                    degree: "Degree / Course Name",
                    institution: "Institution / Training Center",
                    year: "Year",
                    gpa: "GPA: Optional"
                });
                updateLivePreview();
                return;
            }

            // Norway Delete Education
            const delNoEdu = e.target.closest(".cv-no-del-btn[data-type='no-del-edu']");
            if (delNoEdu) {
                e.preventDefault();
                const idx = parseInt(delNoEdu.dataset.index);
                if (Array.isArray(appState.cvData.education)) {
                    appState.cvData.education.splice(idx, 1);
                    updateLivePreview();
                }
                return;
            }

            // Norway Add Language
            const addNoLang = e.target.closest("#btn-no-add-lang");
            if (addNoLang) {
                e.preventDefault();
                if (!Array.isArray(appState.cvData.languages)) appState.cvData.languages = [];
                appState.cvData.languages.push({
                    language: "Language Name",
                    level: "Intermediate",
                    notes: "Good working knowledge"
                });
                updateLivePreview();
                return;
            }

            // Norway Delete Language
            const delNoLang = e.target.closest(".cv-no-del-row-btn[data-type='no-del-lang']");
            if (delNoLang) {
                e.preventDefault();
                const idx = parseInt(delNoLang.dataset.index);
                if (Array.isArray(appState.cvData.languages)) {
                    appState.cvData.languages.splice(idx, 1);
                    updateLivePreview();
                }
                return;
            }

            // Norway Add Digital Skill
            const addNoDigital = e.target.closest("#btn-no-add-digital");
            if (addNoDigital) {
                e.preventDefault();
                if (!Array.isArray(appState.cvData.digitalSkills)) appState.cvData.digitalSkills = [];
                appState.cvData.digitalSkills.push("Software / Digital Tool");
                updateLivePreview();
                return;
            }

            // Norway Delete Digital Skill
            const delNoDigital = e.target.closest(".cv-no-del-skill[data-type='no-del-digital']");
            if (delNoDigital) {
                e.preventDefault();
                const idx = parseInt(delNoDigital.dataset.index);
                if (Array.isArray(appState.cvData.digitalSkills)) {
                    appState.cvData.digitalSkills.splice(idx, 1);
                    updateLivePreview();
                }
                return;
            }

            // Norway Add Additional Info
            const addNoAddInfo = e.target.closest("#btn-no-add-addinfo");
            if (addNoAddInfo) {
                e.preventDefault();
                if (!Array.isArray(appState.cvData.additionalInfo)) appState.cvData.additionalInfo = [];
                appState.cvData.additionalInfo.push({
                    label: "Category",
                    value: "Details"
                });
                updateLivePreview();
                return;
            }

            // Norway Delete Additional Info
            const delNoAddInfo = e.target.closest(".cv-no-del-skill[data-type='no-del-addinfo']");
            if (delNoAddInfo) {
                e.preventDefault();
                const idx = parseInt(delNoAddInfo.dataset.index);
                if (Array.isArray(appState.cvData.additionalInfo)) {
                    appState.cvData.additionalInfo.splice(idx, 1);
                    updateLivePreview();
                }
                return;
            }
`;

if (!appJs.includes('// ── Norway CV Photo & Action Handlers ──')) {
    let norm = appJs.replace(/\r\n/g, '\n');
    const targetAnchor = '// ══════════════════════════════════════════════════════\n            // GERMANY EUROPASS TEMPLATE 1 ACTION HANDLERS';
    if (norm.includes(targetAnchor)) {
        norm = norm.replace(targetAnchor, norwayActionHandlers + '\n            ' + targetAnchor);
        appJs = norm;
        console.log("Added Norway action & photo click handlers");
    } else {
        console.error("Could not find Germany anchor in appJs");
    }
}

// F. Update updateLivePreview for Norway
const oldNorwayLive = `    if (effectiveCountry === "norway" && (effectiveTemplateId === "modern-prof" || !effectiveTemplateId)) {
        paper.innerHTML = getNorwayCVHtml(cv, settings);
    }`;

const newNorwayLive = `    if (effectiveCountry === "norway" && (effectiveTemplateId === "modern-prof" || !effectiveTemplateId)) {
        if (settings.showPhoto === undefined || settings.showPhoto === null) {
            settings.showPhoto = true;
        }
        paper.innerHTML = getNorwayCVHtml(cv, settings);
        const photoWrap = document.getElementById("cv-no-photo-wrap");
        if (photoWrap) {
            photoWrap.addEventListener("click", () => {
                const photoInput = document.getElementById("file-photo-upload") || document.getElementById("photo-upload-input");
                if (photoInput) photoInput.click();
            });
        }
    }`;

let normApp = appJs.replace(/\r\n/g, '\n');
if (normApp.includes(oldNorwayLive.replace(/\r\n/g, '\n'))) {
    appJs = normApp.replace(oldNorwayLive.replace(/\r\n/g, '\n'), newNorwayLive.replace(/\r\n/g, '\n'));
    console.log("Updated updateLivePreview for Norway");
}

// G. Update renderSidebarModulesList for Norway to include profilePhoto
const oldNoModList = `    if (settings.country === "norway") {
        const noModules = [
            { id: "personal", name: "Contact & Work Permit", icon: \`<svg class="module-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>\` },`;

const newNoModList = `    if (settings.country === "norway") {
        const noModules = [
            { id: "profilePhoto", name: "Profile Photo", icon: \`<svg class="module-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z"></path><circle cx="12" cy="13" r="4"></circle></svg>\` },
            { id: "personal", name: "Contact & Work Permit", icon: \`<svg class="module-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>\` },`;

normApp = appJs.replace(/\r\n/g, '\n');
if (normApp.includes(oldNoModList.replace(/\r\n/g, '\n'))) {
    appJs = normApp.replace(oldNoModList.replace(/\r\n/g, '\n'), newNoModList.replace(/\r\n/g, '\n'));
    console.log("Added profilePhoto module to renderSidebarModulesList for Norway");
}

// H. Update handleCountrySelect for Norway: showPhoto = true
appJs = appJs.replace(
    'appState.customizerSettings.accentColor = "#0f2942";\r\n            appState.customizerSettings.showPhoto = false;',
    'appState.customizerSettings.accentColor = "#0f2942";\r\n            appState.customizerSettings.showPhoto = true;\r\n            appState.customizerSettings.photoUrl = appState.customizerSettings.photoUrl || "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=200";'
);
appJs = appJs.replace(
    'appState.customizerSettings.accentColor = "#0f2942";\n            appState.customizerSettings.showPhoto = false;',
    'appState.customizerSettings.accentColor = "#0f2942";\n            appState.customizerSettings.showPhoto = true;\n            appState.customizerSettings.photoUrl = appState.customizerSettings.photoUrl || "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=200";'
);

// I. Tab switch customize view: showPhoto = true for norway
appJs = appJs.replace(
    'appState.customizerSettings.country = "norway";\r\n            appState.customizerSettings.templateId = appState.selectedTemplate || "modern-prof";',
    'appState.customizerSettings.country = "norway";\r\n            appState.customizerSettings.templateId = appState.selectedTemplate || "modern-prof";\r\n            appState.customizerSettings.showPhoto = true;'
);
appJs = appJs.replace(
    'appState.customizerSettings.country = "norway";\n            appState.customizerSettings.templateId = appState.selectedTemplate || "modern-prof";',
    'appState.customizerSettings.country = "norway";\n            appState.customizerSettings.templateId = appState.selectedTemplate || "modern-prof";\n            appState.customizerSettings.showPhoto = true;'
);

fs.writeFileSync('app.js', appJs, 'utf8');
console.log("Norway photo patch completed successfully!");
