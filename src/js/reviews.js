// import Swiper from 'swiper';
// import { Navigation, Keyboard } from 'swiper/modules';
// import 'swiper/css';

// import iziToast from 'izitoast';
// import 'izitoast/dist/css/iziToast.min.css';

// const reviewSec = document.querySelector('.review-js');

// const buttonPrevRev = document.querySelector('.review-btn-prev');
// const buttonNextRev = document.querySelector('.review-btn-next');

// const hiddenPrevRev = document.querySelector('.hiddenPrevRev');
// const hiddenNextRev = document.querySelector('.hiddenNextRev');

// function checkStatusRev() {
//   hiddenNextRev.style.display = buttonNextRev.hasAttribute('disabled')
//     ? 'block'
//     : 'none';
//   buttonNextRev.firstElementChild.style.display = buttonNextRev.hasAttribute(
//     'disabled'
//   )
//     ? 'none'
//     : 'block';

//   hiddenPrevRev.style.display = buttonPrevRev.hasAttribute('disabled')
//     ? 'block'
//     : 'none';
//   buttonPrevRev.firstElementChild.style.display = buttonPrevRev.hasAttribute(
//     'disabled'
//   )
//     ? 'none'
//     : 'block';
// }
// checkStatusRev();
// setTimeout(() => {
//   checkStatusRev();
// }, 100);

// function reviewWapper(arrayLength) {
//   new Swiper('.swiper', {
//     modules: [Navigation, Keyboard],
//     slidesPerView: 1,
//     spaceBetween: 50,
//     breakpoints: {
//       // when window width is >= 320
//       320: {
//         slidesPerView: 1,
//         spaceBetween: 20,
//       },
//       // when window width is >= 768
//       768: {
//         slidesPerView: 2,
//         spaceBetween: 30,
//       },
//       // when window width is >= 1440
//       1440: {
//         slidesPerView: 4,
//         spaceBetween: 40,
//       },
//     },

//     navigation: {
//       nextEl: '.review-btn-next',
//       prevEl: '.review-btn-prev',
//     },
//     keyboard: {
//       enabled: true,
//       onlyInViewport: true,
//       pageUpDown: true,
//     },
//     on: {
//       slideChange: function () {
//         setTimeout(() => {
//           checkStatusRev();
//         }, 100);

//         if (this.activeIndex >= arrayLength) {
//           // Обмежити перегляд 10 слайдів
//           this.slideTo(arrayLength, 0); // Зупинити на 10-му слайді
//         }
//       },
//       reachEnd: function () {
//         // Вимкнути кнопку "next" при досягненні кінця
//         document.querySelector('.review-btn-next').classList.add('disabled');
//       },
//       reachBeginning: function () {
//         // Вимкнути кнопку "prev" при досягненні початку
//         document.querySelector('.review-btn-prev').classList.add('disabled');
//       },
//     },
//   });
// }

// buttonNextRev.addEventListener('click', () => {
//   setTimeout(() => {
//     checkStatusRev();
//   }, 100);
// });
// buttonPrevRev.addEventListener('click', () => {
//   setTimeout(() => {
//     checkStatusRev();
//   }, 100);
// });

// showReviews();