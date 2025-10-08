// Register Service Worker
if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('./service-worker.js')
      .then(reg => console.log('Service Worker ✅', reg))
      .catch(err => console.error('SW ❌', err));
  });
}

const statusEl = document.getElementById('status');
const btn = document.getElementById('pingBtn');

btn.addEventListener('click', () => {
  if (navigator.onLine) {
    statusEl.textContent = '🌐 Online — You can access the backend.';
    statusEl.style.color = 'green';
  } else {
    statusEl.textContent = '📴 Offline — Still working offline!';
    statusEl.style.color = 'orange';
  }
});

const quotes = [
  { text: "“Education is the most powerful weapon which you can use to change the world.”", author: "Nelson Mandela" },
  { text: "“Success is the sum of small efforts, repeated day in and day out.”", author: "Robert Collier" },
  { text: "“Believe you can and you're halfway there.”", author: "Theodore Roosevelt" },
  { text: "“Learning never exhausts the mind.”", author: "Leonardo da Vinci" },
  { text: "“Hard work beats talent when talent doesn’t work hard.”", author: "Tim Notke" }
];

function displayRandomQuote() {
  const { text, author } = quotes[Math.floor(Math.random() * quotes.length)];
  document.getElementById('quoteText').textContent = text;
  const footer = document.querySelector('.quote footer');
  footer.textContent = `— ${author}`;
}

window.addEventListener('DOMContentLoaded', displayRandomQuote);
