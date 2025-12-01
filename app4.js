const circle1 = document.getElementById('circle2');
const startBtn1 = document.getElementById('startBtn4');
const statusText = document.getElementById('circle2');

const inhaleTime = 4000; // دم = ۴ ثانیه
const exhaleTime = 4000; // بازدم = ۶ ثانیه

startBtn1.addEventListener('click', start);

function start() {
    startBtn1.disabled = true;

    // --- دم ---
    statusText.textContent = "Inhale";
    circle1.style.transition = `transform ${inhaleTime / 1000}s ease-in-out`;

    // با یک ریز delay باعث می‌شیم transition قبل از تغییر scale ثبت بشه
    setTimeout(() => {
        circle1.style.transform = 'scale(2)';
    }, 20);

    setTimeout(() => {
        // --- بازدم ---
        statusText.textContent = "Exhale";
        circle1.style.transition = `transform ${exhaleTime / 1000}s ease-in-out`;

        setTimeout(() => {
            circle1.style.transform = 'scale(1)';
        }, 20);

        setTimeout(() => {
            // پایان
            statusText.textContent = "";
            startBtn1.disabled = false;
        }, exhaleTime);
    }, inhaleTime);
}

const button = document.getElementById('startBtn4');

button.addEventListener('click', () => {
    const today = new Date().toISOString().split('T')[0]; // YYYY-MM-DD
    const clicks = JSON.parse(localStorage.getItem('clickData4')) || {};
    clicks[today] = (clicks[today] || 0) + 1; // فقط یک واحد اضافه شود
    localStorage.setItem('clickData4', JSON.stringify(clicks));
});

// document.addEventListener('DOMContentLoaded', () => {
//     const savedLang = localStorage.getItem('lang') || 'en';
//     loadLanguage(savedLang);
// });