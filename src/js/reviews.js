// import Swiper from 'swiper';
// import 'swiper/css';
// import { Navigation, Keyboard } from 'swiper/modules';

// const swiperReviews = new Swiper('.swiper-reviews', {
//   modules: [Navigation, Keyboard],
//   slidesPerView: 1,
//   spaceBetween: 100,
//   navigation: {
//     nextEl: '.review-btn-next',
//     prevEl: '.review-btn-prev',
//   },
//   keyboard: {
//     enabled: true,
//     onlyInViewport: true,
//     pageUpDown: true,
//   },
//   on: {
//     slideChange: function () {
//       checkStatus();
//     },
//   },
// });

// const reviewsSection = document.querySelector('.section-review');
// const buttonPrev = document.querySelector('.review-btn-prev');
// const buttonNext = document.querySelector('.review-btn-next');
// const hiddenPrev = document.querySelector('.hiddenPrev');
// const hiddenNext = document.querySelector('.hiddenNext');

// function checkStatus() {
//   hiddenNext.style.display = buttonNext.hasAttribute('disabled') ? 'block' : 'none';
//   buttonNext.firstElementChild.style.display = buttonNext.hasAttribute('disabled') ? 'none' : 'block';

//   hiddenPrev.style.display = buttonPrev.hasAttribute('disabled') ? 'block' : 'none';
//   buttonPrev.firstElementChild.style.display = buttonPrev.hasAttribute('disabled') ? 'none' : 'block';
// }
// checkStatus();

// buttonNext.addEventListener('click', checkStatus);
// buttonPrev.addEventListener('click', checkStatus);

// reviewsSection.addEventListener('touchstart', checkStatus);
// reviewsSection.addEventListener('touchend', checkStatus);
// reviewsSection.addEventListener('touchmove', checkStatus);

// reviewsSection.addEventListener('keyup', event => {
//   if (event.key === 'ArrowRight' || event.key === 'ArrowLeft') {
//     checkStatus();
//   }
// });
