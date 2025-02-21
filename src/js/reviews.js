import Swiper from 'swiper';
import 'swiper/css';
import { Navigation, Keyboard } from 'swiper/modules';

const swiperReviews = new Swiper('.review-carousel', {
  modules: [Navigation, Keyboard],
  slidesPerView: 1, // 1 картка за замовчуванням
  spaceBetween: 20,
  loop: false, // Вимикаємо безкінечний цикл, щоб уникнути багів
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
      slidesPerView: 2, // 2 картки на планшеті та десктопі
    }
  },
  on: {
    reachEnd: function () {
      console.log("Дійшли до останнього слайду");
    },
  }
});
