const circle1 = document.getElementById('circle2');
const startBtn1 = document.getElementById('startBtn9');
const statusText = document.getElementById('circle2');

const inhaleTime = 2000; // ۲ ثانیه دم
const exhaleTime = 2000; // ۲ ثانیه بازدم
const totalCycles = 30;  // تعداد تکرار

startBtn1.addEventListener('click', start);

function start() {
    startBtn1.disabled = true;
    let cycle = 0;

    function runCycle() {
        if (cycle >= totalCycles) {
            statusText.textContent = "";
            startBtn1.disabled = false;
            return;
        }

        cycle++;

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

        // چرخه بعدی
        setTimeout(runCycle, inhaleTime + exhaleTime);
    }

    runCycle();
}

const button = document.getElementById('startBtn9');

button.addEventListener('click', () => {
    const today = new Date().toISOString().split('T')[0]; // YYYY-MM-DD
    const clicks = JSON.parse(localStorage.getItem('clickData9')) || {};
    clicks[today] = (clicks[today] || 0) + 1; // فقط یک واحد اضافه شود
    localStorage.setItem('clickData9', JSON.stringify(clicks));
});


// document.addEventListener('DOMContentLoaded', () => {
//     const savedLang = localStorage.getItem('lang') || 'en';
//     loadLanguage(savedLang);
// });