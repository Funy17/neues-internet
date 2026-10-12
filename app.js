'use strict';
if (window.PORTFOLIO_CONFIG && !window.PORTFOLIO_CONFIG.showBrandClips) {
  document.getElementById('markenclips')?.remove();
}
const viewer = document.getElementById('photo-viewer');
const fullPhoto = document.getElementById('full-photo');
let priorFocus;
document.querySelectorAll('[data-photo]').forEach(link => {
  link.addEventListener('click', event => {
    if (!viewer.showModal) return;
    event.preventDefault();
    priorFocus = link;
    fullPhoto.src = link.href;
    fullPhoto.alt = link.querySelector('img').alt;
    viewer.showModal();
    document.body.style.overflow = 'hidden';
  });
});
document.getElementById('close-photo').addEventListener('click', () => viewer.close());
viewer.addEventListener('click', event => { if (event.target === viewer) viewer.close(); });
viewer.addEventListener('close', () => { document.body.style.overflow = ''; priorFocus?.focus(); });
document.querySelectorAll('video').forEach(video => {
  video.addEventListener('play', () => {
    document.querySelectorAll('video').forEach(other => { if (other !== video) other.pause(); });
  });
});
