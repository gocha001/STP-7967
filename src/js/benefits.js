import Swiper from 'swiper';
import 'swiper/css';
import { Navigation, Keyboard } from 'swiper/modules';

const swiperBenefits = new Swiper('.benefits-mob', {
  modules: [Navigation, Keyboard],
  slidesPerView: 1,
  spaceBetween: 20,
  loop: false,

  navigation: {
    nextEl: '.benefits-mob-btn-next',
    prevEl: '.benefits-mob-btn-prev',
  },
  keyboard: {
    enabled: true,
    onlyInViewport: true,
    pageUpDown: true,
  },
});
