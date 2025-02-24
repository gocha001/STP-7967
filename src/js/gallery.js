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



