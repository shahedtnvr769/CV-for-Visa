const fs = require('fs');
let c = fs.readFileSync('app.js', 'utf8');

if (c.includes('// == NORWAY TEMPLATE 1 ACTION HANDLERS')) {
    console.log('Norway handlers already injected. Skipping.');
    process.exit(0);
}

const norHandlers = `
            // == NORWAY TEMPLATE 1 ACTION HANDLERS ==
            const noPhotoBox = e.target.closest('#cv-no-photo-wrap');
            if (noPhotoBox) {
                e.preventDefault();
                const pIn = document.getElementById('file-photo-upload') || document.getElementById('photo-upload-input');
                if (pIn) pIn.click();
                return;
            }
            if (e.target.closest('#btn-no-add-skill')) {
                e.preventDefault();
                if (!Array.isArray(appState.cvData.keySkills)) appState.cvData.keySkills = [];
                appState.cvData.keySkills.push('New Skill');
                updateLivePreview(); return;
            }
            const delNoSkill = e.target.closest('.cv-no-del-skill');
            if (delNoSkill && delNoSkill.dataset.type === 'no-del-skill') {
                e.preventDefault();
                const idx = parseInt(delNoSkill.dataset.index);
                if (Array.isArray(appState.cvData.keySkills) && idx >= 0) { appState.cvData.keySkills.splice(idx,1); updateLivePreview(); }
                return;
            }
            if (e.target.closest('#btn-no-add-exp')) {
                e.preventDefault();
                if (!Array.isArray(appState.cvData.experience)) appState.cvData.experience = [];
                appState.cvData.experience.push({role:'Job Title',company:'Company',location:'Location',duration:'Year - Present',bullets:['Key responsibility.']});
                updateLivePreview(); return;
            }
            const delNoExp = e.target.closest('.cv-no-del-btn');
            if (delNoExp && delNoExp.dataset.type === 'no-del-exp') {
                e.preventDefault();
                const idx = parseInt(delNoExp.dataset.index);
                if (Array.isArray(appState.cvData.experience) && idx >= 0) { appState.cvData.experience.splice(idx,1); updateLivePreview(); }
                return;
            }
            const addNoBullet = e.target.closest('.cv-no-add-bullet-btn');
            if (addNoBullet) {
                e.preventDefault();
                const idx = parseInt(addNoBullet.dataset.index);
                if (Array.isArray(appState.cvData.experience) && appState.cvData.experience[idx]) {
                    if (!Array.isArray(appState.cvData.experience[idx].bullets)) appState.cvData.experience[idx].bullets = [];
                    appState.cvData.experience[idx].bullets.push('New bullet point.');
                    updateLivePreview();
                }
                return;
            }
            const delNoBullet = e.target.closest('.cv-no-del-bullet');
            if (delNoBullet) {
                e.preventDefault();
                const idx = parseInt(delNoBullet.dataset.index);
                const bidx = parseInt(delNoBullet.dataset.bindex);
                if (Array.isArray(appState.cvData.experience) && appState.cvData.experience[idx] && Array.isArray(appState.cvData.experience[idx].bullets)) {
                    appState.cvData.experience[idx].bullets.splice(bidx,1); updateLivePreview();
                }
                return;
            }
            if (e.target.closest('#btn-no-add-edu')) {
                e.preventDefault();
                if (!Array.isArray(appState.cvData.education)) appState.cvData.education = [];
                appState.cvData.education.push({degree:'Degree Name',institution:'Institution',year:'Year',gpa:''});
                updateLivePreview(); return;
            }
            const delNoEdu = e.target.closest('.cv-no-del-btn');
            if (delNoEdu && delNoEdu.dataset.type === 'no-del-edu') {
                e.preventDefault();
                const idx = parseInt(delNoEdu.dataset.index);
                if (Array.isArray(appState.cvData.education) && idx >= 0) { appState.cvData.education.splice(idx,1); updateLivePreview(); }
                return;
            }
            if (e.target.closest('#btn-no-add-lang')) {
                e.preventDefault();
                if (!Array.isArray(appState.cvData.languages)) appState.cvData.languages = [];
                appState.cvData.languages.push({language:'Language',level:'Intermediate',notes:'Working knowledge'});
                updateLivePreview(); return;
            }
            const delNoLang = e.target.closest('.cv-no-del-row-btn');
            if (delNoLang && delNoLang.dataset.type === 'no-del-lang') {
                e.preventDefault();
                const idx = parseInt(delNoLang.dataset.index);
                if (Array.isArray(appState.cvData.languages) && idx >= 0) { appState.cvData.languages.splice(idx,1); updateLivePreview(); }
                return;
            }
            if (e.target.closest('#btn-no-add-digital')) {
                e.preventDefault();
                if (!Array.isArray(appState.cvData.digitalSkills)) appState.cvData.digitalSkills = [];
                appState.cvData.digitalSkills.push('New Tool');
                updateLivePreview(); return;
            }
            const delNoDigital = e.target.closest('.cv-no-del-skill');
            if (delNoDigital && delNoDigital.dataset.type === 'no-del-digital') {
                e.preventDefault();
                const idx = parseInt(delNoDigital.dataset.index);
                if (Array.isArray(appState.cvData.digitalSkills) && idx >= 0) { appState.cvData.digitalSkills.splice(idx,1); updateLivePreview(); }
                return;
            }
            if (e.target.closest('#btn-no-add-addinfo')) {
                e.preventDefault();
                if (!Array.isArray(appState.cvData.additionalInfo)) appState.cvData.additionalInfo = [];
                appState.cvData.additionalInfo.push({label:'Category',value:'Details'});
                updateLivePreview(); return;
            }
            const delNoAddInfo = e.target.closest('.cv-no-del-skill');
            if (delNoAddInfo && delNoAddInfo.dataset.type === 'no-del-addinfo') {
                e.preventDefault();
                const idx = parseInt(delNoAddInfo.dataset.index);
                if (Array.isArray(appState.cvData.additionalInfo) && idx >= 0) { appState.cvData.additionalInfo.splice(idx,1); updateLivePreview(); }
                return;
            }
`;

// Find the Germany anchor - it uses Unicode box-drawing characters
const idx = c.indexOf('// GERMANY EUROPASS TEMPLATE 1 ACTION HANDLERS');
if (idx === -1) {
    console.error('Could not find Germany anchor!');
    process.exit(1);
}

// Find the start of the comment block (the == line before it)
const lineStart = c.lastIndexOf('\n', idx);
c = c.substring(0, lineStart + 1) + norHandlers + c.substring(lineStart + 1);

fs.writeFileSync('app.js', c, 'utf8');
console.log('Norway handlers injected successfully!');

