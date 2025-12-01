const circle1 = document.getElementById('circle2');
const startBtn1 = document.getElementById('startBtn7');
const statusText = document.getElementById('circle2');

const inhaleTime = 4000; // دم = ۴ ثانیه
const holdTime = 7000; // نگهداشتن = ۷ ثانیه
const exhaleTime = 8000; // بازدم = ۸ ثانیه

startBtn1.addEventListener('click', start);

function start() {
    startBtn1.disabled = true;

    // --- دم ---
    statusText.textContent = "Inhale";
    circle1.style.transition = `transform ${inhaleTime / 1000}s ease-in-out`;
    setTimeout(() => {
        circle1.style.transform = 'scale(2)';
    }, 20);

    // --- نگهداشتن ---
    setTimeout(() => {
        statusText.textContent = "Hold";
        // نگهداشتن، scale بدون تغییر باقی می‌مونه
    }, inhaleTime);

    // --- بازدم ---
    setTimeout(() => {
        statusText.textContent = "Exhale";
        circle1.style.transition = `transform ${exhaleTime / 1000}s ease-in-out`;
        setTimeout(() => {
            circle1.style.transform = 'scale(1)';
        }, 20);
    }, inhaleTime + holdTime);

    // پایان و فعال شدن دوباره دکمه
    setTimeout(() => {
        statusText.textContent = "";
        startBtn1.disabled = false;
    }, inhaleTime + holdTime + exhaleTime);
}
const button = document.getElementById('startBtn7');

button.addEventListener('click', () => {
    const today = new Date().toISOString().split('T')[0]; // YYYY-MM-DD
    const clicks = JSON.parse(localStorage.getItem('clickData7')) || {};
    clicks[today] = (clicks[today] || 0) + 1; // فقط یک واحد اضافه شود
    localStorage.setItem('clickData7', JSON.stringify(clicks));
});

// document.addEventListener('DOMContentLoaded', () => {
//     const savedLang = localStorage.getItem('lang') || 'en';
//     loadLanguage(savedLang);
// });