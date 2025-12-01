const circle1 = document.getElementById('circle2');
const startBtn1 = document.getElementById('startBtn3');
const statusText = document.getElementById('circle2');

const inhaleTime = 4000;   // دم
const holdAfterInhale = 4000; // نگهداشتن بعد دم
const exhaleTime = 4000;   // بازدم
const holdAfterExhale = 4000; // نگهداشتن بعد بازدم

startBtn1.addEventListener('click', start);

function start() {
    startBtn1.disabled = true;

    // --- دم ---
    statusText.textContent = "Inhale";
    circle1.style.transition = `transform ${inhaleTime / 1000}s ease-in-out`;
    setTimeout(() => {
        circle1.style.transform = 'scale(2)';
    }, 20);

    // --- نگهداشتن بعد دم ---
    setTimeout(() => {
        statusText.textContent = "Hold";
    }, inhaleTime);

    // --- بازدم ---
    setTimeout(() => {
        statusText.textContent = "Exhale";
        circle1.style.transition = `transform ${exhaleTime / 1000}s ease-in-out`;
        setTimeout(() => {
            circle1.style.transform = 'scale(1)';
        }, 20);
    }, inhaleTime + holdAfterInhale);

    // --- نگهداشتن بعد بازدم ---
    setTimeout(() => {
        statusText.textContent = "Hold";
    }, inhaleTime + holdAfterInhale + exhaleTime);

    // پایان و فعال شدن دوباره دکمه
    setTimeout(() => {
        statusText.textContent = "";
        startBtn1.disabled = false;
    }, inhaleTime + holdAfterInhale + exhaleTime + holdAfterExhale);
}



const button = document.getElementById('startBtn3');

button.addEventListener('click', () => {
    const today = new Date().toISOString().split('T')[0]; // YYYY-MM-DD
    const clicks = JSON.parse(localStorage.getItem('clickData3')) || {};
    clicks[today] = (clicks[today] || 0) + 1; // فقط یک واحد اضافه شود
    localStorage.setItem('clickData3', JSON.stringify(clicks));
});

// document.addEventListener('DOMContentLoaded', () => {
//     const savedLang = localStorage.getItem('lang') || 'en';
//     loadLanguage(savedLang);
// });