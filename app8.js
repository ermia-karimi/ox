const circle1 = document.getElementById('circle2');
const startBtn1 = document.getElementById('startBtn8');
const statusText = document.getElementById('circle2');

const inhaleTime = 1000; // ۱ ثانیه دم
const exhaleTime = 1000; // ۱ ثانیه بازدم
const totalDuration = 15000; // کل زمان = ۱۵ ثانیه

startBtn1.addEventListener('click', start);

function start() {
    startBtn1.disabled = true;
    let elapsed = 0;

    function runCycle() {
        if (elapsed >= totalDuration) {
            statusText.textContent = "";
            startBtn1.disabled = false;
            return;
        }

        // --- دم ---
        statusText.textContent = "Inhale";
        circle1.style.transition = `transform ${inhaleTime / 1000}s ease-in-out`;
        setTimeout(() => {
            circle1.style.transform = 'scale(1.5)';
        }, 20);

        // --- بازدم ---
        setTimeout(() => {
            statusText.textContent = "Exhale";
            circle1.style.transition = `transform ${exhaleTime / 1000}s ease-in-out`;
            setTimeout(() => {
                circle1.style.transform = 'scale(1)';
            }, 20);
        }, inhaleTime);

        // برو چرخه بعد
        elapsed += inhaleTime + exhaleTime;
        setTimeout(runCycle, inhaleTime + exhaleTime);
    }

    runCycle();
}

const button = document.getElementById('startBtn8');

button.addEventListener('click', () => {
    const today = new Date().toISOString().split('T')[0]; // YYYY-MM-DD
    const clicks = JSON.parse(localStorage.getItem('clickData8')) || {};
    clicks[today] = (clicks[today] || 0) + 1; // فقط یک واحد اضافه شود
    localStorage.setItem('clickData8', JSON.stringify(clicks));
});

// document.addEventListener('DOMContentLoaded', () => {
//     const savedLang = localStorage.getItem('lang') || 'en';
//     loadLanguage(savedLang);
// });