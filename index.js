
const menuToggle = document.querySelector('.menu-toggle');
const nav = document.querySelector('nav');
const closeBtn = document.querySelector('.close-button');

menuToggle.addEventListener('click', () => {
  nav.classList.toggle('show');
  menuToggle.style.display = 'none';
  closeBtn.style.display = 'block';
});

closeBtn.addEventListener('click', () => {
  nav.classList.remove('show');
  closeBtn.style.display = 'none';
  menuToggle.style.display = 'block';
});

