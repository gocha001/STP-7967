import Swiper from 'swiper';
import 'swiper/css';
import { Navigation, Keyboard } from 'swiper/modules';

const swiper = new Swiper(".swiper-review-carousel", {
  modules: [Navigation, Keyboard],
  slidesPerView: 1,
  slidesPerGroup: 1, 
  spaceBetween: 20,
  loop: false,
  navigation: {
    nextEl: '.review-next-btn-custom',
    prevEl: '.review-prev-btn-custom',
  },
  keyboard: {
    enabled: true,
    onlyInViewport: true,
    pageUpDown: true,
  },
  breakpoints: {
    768: {
      slidesPerView: 2,
      slidesPerGroup: 2, 
    }
  }
});
