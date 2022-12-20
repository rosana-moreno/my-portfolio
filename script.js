const hamburgerMenuButton = document.querySelector('.header__hamburger-menu');
const navMenu = document.querySelector('.header__main-nav-items');

hamburgerMenuButton.addEventListener('click', () => {
    hamburgerMenuButton.classList.toggle('active');
    navMenu.classList.toggle('active');
  });

document.querySelectorAll('.header__main-nav-item-link').forEach(n => n.addEventListener('click', () => {
    hamburgerMenuButton.classList.remove('active');
    navMenu.classList.remove('active');
  }));