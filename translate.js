// ترجمه درست برای نصخه های ۱و۲

let translations = {};
let currentLang = 'en';

async function loadLanguage(lang) {
    try {
        console.log(`[DEBUG] Loading ${lang}.json`);
        const res = await fetch(`./${lang}.json`);
        if (!res.ok) throw new Error(`Missing ${lang}.json`);
        translations = await res.json();
        currentLang = lang;
        document.documentElement.lang = lang;
        applyTranslations();
    } catch (err) {
        console.error('Error loading language:', err);
    }
}

function applyTranslations() {
    document.querySelectorAll('[data-translate]').forEach(el => {
        const key = el.getAttribute('data-translate');
        el.textContent = translations[key] || '';
    });
}

function setLanguage(lang) {
    localStorage.setItem('lang', lang);
    loadLanguage(lang);
}

// برای فراخوانی از دکمه‌ها
window.setLanguage = setLanguage;
window.loadLanguage = loadLanguage;















// import { LocalNotifications } from '@capacitor/local-notifications';

// let translations = {};
// let currentLang = 'en';

// // ----------------------
// // زبان و ترجمه
// // ----------------------
// async function loadLanguage(lang) {
//     try {
//         console.log(`[DEBUG] Loading ${lang}.json`);
//         const res = await fetch(`./${lang}.json`);
//         if (!res.ok) throw new Error(`Missing ${lang}.json`);
//         translations = await res.json();
//         currentLang = lang;
//         document.documentElement.lang = lang;
//         applyTranslations();
//     } catch (err) {
//         console.error('Error loading language:', err);
//     }
// }

// function applyTranslations() {
//     document.querySelectorAll('[data-translate]').forEach(el => {
//         const key = el.getAttribute('data-translate');
//         el.textContent = translations[key] || '';
//     });
// }

// function setLanguage(lang) {
//     localStorage.setItem('lang', lang);
//     reloadNotifications(lang);
// }















// ----------------------
// نوتیف‌ها
// ----------------------













// async function scheduleDailyNotifications() {
//     await LocalNotifications.requestPermissions();

//     await LocalNotifications.schedule({
//         notifications: [
//             {
//                 id: 1,
//                 title: translations['notif_morning_title'],
//                 body: translations['notif_morning_body'],
//                 schedule: { repeats: true, on: { hour: 6, minute: 0 } }
//             },
//             {
//                 id: 2,
//                 title: translations['notif_noon_title'],
//                 body: translations['notif_noon_body'],
//                 schedule: { repeats: true, on: { hour: 12, minute: 0 } }
//             },
//             {
//                 id: 3,
//                 title: translations['notif_evening_title'],
//                 body: translations['notif_evening_body'],
//                 schedule: { repeats: true, on: { hour: 18, minute: 0 } }
//             }
//         ]
//     });

//     console.log(`[INFO] Notifications scheduled for ${currentLang}`);
// }

// async function reloadNotifications(lang) {
//     console.log(`[INFO] Reloading notifications for ${lang}...`);
//     await loadLanguage(lang);
//     await LocalNotifications.cancelAll();
//     await scheduleDailyNotifications();
// }








// ----------------------
// شروع برنامه
// ----------------------
// (async () => {
//     const savedLang = localStorage.getItem('lang') || 'en';
//     await reloadNotifications(savedLang);
// })();


// // برای نوتیف

// // برای استفاده در HTML
// window.setLanguage = setLanguage;

// // برای تست سریع
// await LocalNotifications.schedule({
//     notifications: [{
//         id: 99,
//         title: 'تست سریع 🔔',
//         body: 'این پیام باید تا چند ثانیه دیگه بیاد.',
//         schedule: { at: new Date(Date.now() + 5000) } // ۵ ثانیه بعد
//     }]
// });































// let translations = {};
// let currentLang = 'en';

// async function loadLanguage(lang) {
//     try {
//         const res = await fetch(`${lang}.json`);
//         if (!res.ok) throw new Error('File not found');
//         translations = await res.json();
//         currentLang = lang;

//         // زبان و جهت صفحه
//         document.documentElement.lang = lang;

//         // 👇 جهت رو فعلاً دست نمی‌زنیم تا layout نترکه
//         // document.documentElement.dir = lang === 'fa' ? 'rtl' : 'ltr';

//         applyTranslations();
//     } catch (err) {
//         console.error('Error loading language:', err);
//     }
// }

// function applyTranslations() {
//     document.querySelectorAll('[data-translate]').forEach(el => {
//         const key = el.getAttribute('data-translate');
//         el.textContent = translations[key] || '';
//     });
// }

// function setLanguage(lang) {
//     localStorage.setItem('lang', lang);
//     loadLanguage(lang);
// }

// window.loadLanguage = loadLanguage;
// window.setLanguage = setLanguage;














// translate.js
// let translations = {};
// let currentLang = 'en';

// async function loadLanguage(lang) {
//     try {
//         const res = await fetch(`${lang}.json`);
//         translations = await res.json();
//         currentLang = lang;

//         // فقط متن‌ها تغییر کنه، layout دست نخورده
//         document.documentElement.lang = lang;

//         applyTranslations();
//     } catch (err) {
//         console.error('Error loading language:', err);
//     }
// }

// function applyTranslations() {
//     document.querySelectorAll('[data-translate]').forEach(el => {
//         const key = el.getAttribute('data-translate');
//         el.textContent = translations[key] || '';
//     });
// }

// function setLanguage(lang) {
//     localStorage.setItem('lang', lang);
//     loadLanguage(lang);
// }

// // در سطح global قرار دادن
// window.loadLanguage = loadLanguage;
// window.setLanguage = setLanguage;
























// let translations = {};
// let currentLang = 'en';

// async function loadLanguage(lang) {
//     try {
//         const res = await fetch(`${lang}.json`);
//         translations = await res.json();
//         currentLang = lang;

//         // 👇 فقط زبان HTML رو ست می‌کنیم؛ نه dir و نه راست‌چین
//         document.documentElement.lang = lang;

//         applyTranslations();
//     } catch (err) {
//         console.error('Error loading language:', err);
//     }
// }

// function applyTranslations() {
//     document.querySelectorAll('[data-translate]').forEach(el => {
//         const key = el.getAttribute('data-translate');
//         el.textContent = translations[key] || '';
//     });
// }

// function setLanguage(lang) {
//     localStorage.setItem('lang', lang);
//     loadLanguage(lang);
// }

// window.loadLanguage = loadLanguage;
// window.setLanguage = setLanguage;

