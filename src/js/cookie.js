document.addEventListener('DOMContentLoaded', function () {
  const modal = document.getElementById('welcomeCookie');
  const closeModalBtnOne = document.getElementById('closeCookieOne');
  const closeModalBtnTwo = document.getElementById('closeCookieTwo');

  if (!localStorage.getItem('visited')) {
    modal.classList.add('show');
    localStorage.setItem('visited', 'true');
  }


  closeModalBtnOne.addEventListener('click', function () {
    modal.classList.remove('show');
  });
  closeModalBtnTwo.addEventListener('click', function () {
    modal.classList.remove('show');
  });
});
