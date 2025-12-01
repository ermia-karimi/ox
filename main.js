// main.js
// document.addEventListener('DOMContentLoaded', () => {
//     const saved = localStorage.getItem('lang');
//     console.log('[DEBUG] saved language =', saved);

//     const langToLoad = saved === 'fa' || saved === 'en' ? saved : 'en';
//     console.log('[DEBUG] loading language =', langToLoad);

//     loadLanguage(langToLoad);

//     const btnEn = document.getElementById('btn-en');
//     const btnFa = document.getElementById('btn-fa');

//     if (btnEn) btnEn.addEventListener('click', () => setLanguage('en'));
//     if (btnFa) btnFa.addEventListener('click', () => setLanguage('fa'));
// });




// main.js
// document.addEventListener('DOMContentLoaded', () => {
//     const saved = localStorage.getItem('lang');
//     const langToLoad = saved === 'fa' || saved === 'en' ? saved : 'en';
//     loadLanguage(langToLoad);

//     const btn = document.getElementById('translate-btn');
//     if (btn) {
//         btn.addEventListener('click', () => {
//             toggleLanguage();
//         });
//     }
// });





document.addEventListener('DOMContentLoaded', () => {
    const savedLang = localStorage.getItem('lang') || 'en';
    loadLanguage(savedLang);
});

function toggleLang() {
    const lang = localStorage.getItem('lang') === 'fa' ? 'en' : 'fa';
    setLanguage(lang);
}





