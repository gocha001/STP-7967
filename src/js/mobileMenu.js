
document.addEventListener('DOMContentLoaded', () => {
  const menuButton = document.querySelector('.mobile-menu-open');
  const mobileMenu = document.querySelector('.mobile-menu');
  const closeButton = document.querySelector('.close-button');
  const menuItems = document.querySelectorAll('.mobile-menu li');

  menuButton.addEventListener('click', () => {
    mobileMenu.classList.add('open');
  });

  closeButton.addEventListener('click', () => {
    mobileMenu.classList.remove('open');
  });

  menuItems.forEach(item => {
    item.addEventListener('click', () => {
      mobileMenu.classList.remove('open');
    });
  });

  document.addEventListener('click', event => {
    if (
      !mobileMenu.contains(event.target) &&
      !menuButton.contains(event.target)
    ) {
      mobileMenu.classList.remove('open');
    }
  });
});
