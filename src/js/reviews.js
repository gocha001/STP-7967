import Swiper from 'swiper';
import 'swiper/css';
import { Navigation, Keyboard } from 'swiper/modules';

const swiperReviews = new Swiper('.review-carousel', {
  modules: [Navigation, Keyboard],
  slidesPerView: 1,
  spaceBetween: 20,
  loop: true,
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
    }
  },
});
