// // بعد از 5 ثانیه، لودینگ مخفی و محتوای اصلی نمایش داده شود
// window.addEventListener("load", () => {
//     setTimeout(() => {
//         document.getElementById("loader").style.display = "none";
//         document.getElementById("all").style.display = "block";
//     }, 2000); // 5000 میلی‌ثانیه = 5 ثانیه
// });





const circle1 = document.getElementById('circle');
const startBtn1 = document.getElementById('startBtn');
const statusText = document.getElementById('circle');

const inhaleTime = 5000; // دم = ۵ ثانیه
const exhaleTime = 5000; // بازدم = ۵ ثانیه

startBtn1.addEventListener('click', start);

function start() {
    startBtn1.disabled = true;

    // --- دم ---
    statusText.textContent = "Inhale";
    circle1.style.transition = `transform ${inhaleTime / 1000}s ease-in-out`;

    setTimeout(() => {
        circle1.style.transform = 'scale(2)';
    }, 20); // این ریز delay ضروریه

    setTimeout(() => {
        // --- بازدم ---
        statusText.textContent = "Exhale";
        circle1.style.transition = `transform ${exhaleTime / 1000}s ease-in-out`;

        setTimeout(() => {
            circle1.style.transform = 'scale(1)';
        }, 20);

        setTimeout(() => {
            statusText.textContent = "";
            startBtn1.disabled = false;
        }, exhaleTime);
    }, inhaleTime);
}





// ///////////////////////////////////////////////////////////////////////////////////////////////


const button = document.getElementById('startBtn');

button.addEventListener('click', () => {
    const today = new Date().toISOString().split('T')[0]; // YYYY-MM-DD
    const clicks = JSON.parse(localStorage.getItem('clickData')) || {};
    clicks[today] = (clicks[today] || 0) + 1; // فقط یک واحد اضافه شود
    localStorage.setItem('clickData', JSON.stringify(clicks));
});








// function breatheCycle() {
//     // دم
//     circle.style.transform = 'scale(2)';
//     setTimeout(() => {
//         // نگه داشتن (هیچ تغییری نمی‌دیم)
//         setTimeout(() => {
//             // بازدم
//             circle.style.transform = 'scale(1)';
//         }, 2000); // 2 ثانیه نگه داشتن
//     }, 5000); // 5 ثانیه دم
// }






// document.addEventListener('DOMContentLoaded', () => {
//     const savedLang = localStorage.getItem('lang') || 'en';
//     loadLanguage(savedLang);
// });


// document.addEventListener('DOMContentLoaded', () => {
//     const saved = localStorage.getItem('lang');
//     const langToLoad = saved === 'fa' || saved === 'en' ? saved : 'en';
//     loadLanguage(langToLoad);

//     const btnEn = document.getElementById('btn-en');
//     // const btnFa = document.getElementById('btn-fa');
//     if (btnEn) btnEn.addEventListener('click', () => setLanguage('en'));
//     // if (btnFa) btnFa.addEventListener('click', () => setLanguage('fa'));
// });



// document.addEventListener('DOMContentLoaded', () => {
//     console.log('Home page logic running...');
// });

