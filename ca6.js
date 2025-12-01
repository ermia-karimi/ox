const ctx = document.getElementById('clickChart5').getContext('2d');

// گرفتن داده ۷ روز اخیر
function getClickData() {
  const data = JSON.parse(localStorage.getItem('clickData5')) || {};
  const labels = [];
  const counts = [];
  for (let i = 6; i >= 0; i--) {
    const date = new Date();
    date.setDate(date.getDate() - i);
    const key = date.toISOString().split('T')[0];
    labels.push(key.split('-')[2]); // فقط روز ماه
    counts.push(data[key] || 0);
  }
  return { labels, counts };
}

// پلاگین ساده برای رسم اعداد روی نقاط
const drawDataLabels = {
  id: 'drawDataLabels',
  afterDatasetsDraw(chart) {
    const ctx = chart.ctx;
    chart.data.datasets.forEach((dataset, i) => {
      const meta = chart.getDatasetMeta(i);
      meta.data.forEach((point, index) => {
        const value = dataset.data[index];
        ctx.fillStyle = 'white';
        ctx.font = '14px Arial';
        ctx.textAlign = 'center';
        ctx.fillText(Number(value).toLocaleString('en-US'), point.x, point.y - 10);
      });
    });
  }
};

// ایجاد نمودار
let chartData = getClickData();
const chart = new Chart(ctx, {
  type: 'line',
  data: {
    labels: chartData.labels,
    datasets: [{
      data: chartData.counts,
      borderColor: 'white',
      backgroundColor: 'transparent',
      tension: 0,
      borderWidth: 2,
      pointRadius: 5,
      pointBackgroundColor: 'white'
    }]
  },
  options: {
    plugins: {
      legend: { display: false },
      tooltip: { enabled: false }
    },
    scales: {
      x: {
        ticks: { color: 'white', font: { size: 14 } },
        grid: { color: 'rgba(255,255,255,0.2)' }
      },
      y: {
        ticks: { color: 'white', font: { size: 14 }, beginAtZero: true },
        grid: { color: 'rgba(255,255,255,0.2)' }
      }
    },
    responsive: true,
    animation: { duration: 200 }
  },
  plugins: [drawDataLabels]
});

// بروزرسانی نمودار
function updateChart() {
  const newData = getClickData();
  chart.data.labels = newData.labels;
  chart.data.datasets[0].data = newData.counts;
  chart.update();
}

// بروزرسانی هر ثانیه
setInterval(updateChart, 1000);

// بروزرسانی وقتی LocalStorage از تب دیگر تغییر کند
window.addEventListener('storage', updateChart);