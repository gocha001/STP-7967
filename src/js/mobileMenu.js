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

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();

    const targetId = this.getAttribute('href').substring(1);
    const targetElement = document.getElementById(targetId);

    if (targetElement) {
      const headerOffset = 84;
      const elementPosition = targetElement.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.scrollY - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
  });
});
