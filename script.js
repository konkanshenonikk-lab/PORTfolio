

const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

const watchlist = [
  'NIFTY 50', 'SENSEX', 'HDFCBANK', 'ITC', 'NTPC',
  'BEL', 'CANBK', 'POWERGRID', 'SUZLON', 'ASTERDM', 'IDEA'
];

function randomChange(){
  const val = (Math.random() * 3.4 - 1.2).toFixed(2);
  const isUp = Number(val) >= 0;
  return { text: `${isUp ? '+' : ''}${val}%`, isUp };
}

function buildTicker(){
  const track = document.getElementById('tickerTrack');
  if (!track) return;

  const items = watchlist.map(symbol => {
    const change = randomChange();
    return `<span class="ticker-item">${symbol}
      <span class="${change.isUp ? 'up' : 'down'}">${change.isUp ? '▲' : '▼'} ${change.text}</span>
    </span>`;
  }).join('');

  
  track.innerHTML = items + items;
}

buildTicker();

const root = document.documentElement;
const modeToggle = document.getElementById('modeToggle');
const modeLabel = document.getElementById('modeLabel');

function applyTheme(theme){
  root.setAttribute('data-theme', theme);
  modeToggle.setAttribute('aria-pressed', String(theme === 'light'));
  modeLabel.textContent = theme === 'light' ? 'NOTEBOOK' : 'TERMINAL';
  try { localStorage.setItem('nrs-theme', theme); } catch (e) { /* storage unavailable, ignore */ }
}

let savedTheme = 'dark';
try { savedTheme = localStorage.getItem('nrs-theme') || 'dark'; } catch (e) { /* ignore */ }
applyTheme(savedTheme);

modeToggle.addEventListener('click', () => {
  const current = root.getAttribute('data-theme');
  applyTheme(current === 'light' ? 'dark' : 'light');
});


function typeName(){
  const el = document.getElementById('typedName');
  if (!el) return;
  const full = 'Nidhish R. Shenoy';

  if (reduceMotion){
    el.textContent = full;
    return;
  }

  let i = 0;
  el.textContent = '';
  const tick = () => {
    if (i <= full.length){
      el.textContent = full.slice(0, i);
      i++;
      setTimeout(tick, 55);
    }
  };
  tick();
}

typeName();

const revealTargets = document.querySelectorAll('.section');

if ('IntersectionObserver' in window && !reduceMotion){
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting){
        entry.target.classList.add('is-visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });

  revealTargets.forEach(el => observer.observe(el));
} else {
  revealTargets.forEach(el => el.classList.add('is-visible'));
}

const avatar = document.getElementById('pixelAvatar');
if (avatar){
  avatar.style.cursor = 'pointer';
  avatar.addEventListener('click', () => {
    if (reduceMotion) return;
    avatar.style.transition = 'transform .08s ease, filter .08s ease';
    avatar.style.transform = 'skewX(-4deg) scale(1.02)';
    avatar.style.filter = 'hue-rotate(25deg) contrast(1.15)';
    setTimeout(() => {
      avatar.style.transform = '';
      avatar.style.filter = '';
    }, 160);
  });
}

const yearEl = document.getElementById('year');
if (yearEl) yearEl.textContent = new Date().getFullYear();


