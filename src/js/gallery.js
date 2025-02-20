import Swiper from 'swiper';
import 'swiper/css';
import { Navigation, Keyboard } from 'swiper/modules';

const swiperProjects = new Swiper('.swiper-projects', {
  modules: [Navigation, Keyboard],
  slidesPerView: 1,
  spaceBetween: 100,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  keyboard: {
    enabled: true,
    onlyInViewport: true,
    pageUpDown: true,
  },
  on: {
    slideChange: function () {
      checkStatus();
    },
  },
});

const projectsSection = document.querySelector('.section.gallery');

const buttonPrev = document.querySelector('.position-container .swiper-button-prev');
const buttonNext = document.querySelector('.position-container .swiper-button-next');

const hiddenPrev = document.querySelector('.hiddenPrev');
const hiddenNext = document.querySelector('.hiddenNext');

function checkStatus() {
  if (!buttonNext || !buttonPrev || !hiddenNext || !hiddenPrev) {
    console.warn('One or more elements are missing.');
    return;
  }

  hiddenNext.style.display = buttonNext.hasAttribute('disabled') ? 'block' : 'none';
  if (buttonNext.firstElementChild) {
    buttonNext.firstElementChild.style.display = buttonNext.hasAttribute('disabled') ? 'none' : 'block';
  }

  hiddenPrev.style.display = buttonPrev.hasAttribute('disabled') ? 'block' : 'none';
  if (buttonPrev.firstElementChild) {
    buttonPrev.firstElementChild.style.display = buttonPrev.hasAttribute('disabled') ? 'none' : 'block';
  }
}

// Перевірка статусу після ініціалізації
checkStatus();

// Додаємо обробники подій тільки якщо кнопки існують
if (buttonNext) buttonNext.addEventListener('click', checkStatus);
if (buttonPrev) buttonPrev.addEventListener('click', checkStatus);

// Перевіряємо, чи існує projectsSection перед додаванням обробників подій
if (projectsSection) {
  projectsSection.addEventListener('touchstart', checkStatus);
  projectsSection.addEventListener('touchend', checkStatus);
  projectsSection.addEventListener('touchmove', checkStatus);

  projectsSection.addEventListener('keyup', event => {
    if (event.key === 'ArrowRight' || event.key === 'ArrowLeft') {
      checkStatus();
    }
  });
}
