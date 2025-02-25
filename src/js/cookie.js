document.addEventListener('DOMContentLoaded', function () {
  const modal = document.getElementById('welcomeCookie');
  const closeModalBtnOne = document.getElementById('closeCookieOne');
  const closeModalBtnTwo = document.getElementById('closeCookieTwo');
  const pageContent = document.getElementById('header');
  const pageContentMob = document.getElementById('headerMob');

  if (!localStorage.getItem('visited')) {
    modal.classList.add('show');
    document.body.classList.add('modal-open');
    pageContent.classList.add('disabled-content');
    pageContentMob.classList.add('disabled-content');
    localStorage.setItem('visited', 'true');
  }

  closeModalBtnOne.addEventListener('click', function () {
    modal.classList.remove('show');
    document.body.classList.remove('modal-open');
    pageContent.classList.remove('disabled-content');
    pageContentMob.classList.remove('disabled-content');
  });
  closeModalBtnTwo.addEventListener('click', function () {
    modal.classList.remove('show');
    document.body.classList.remove('modal-open');
    pageContent.classList.remove('disabled-content');
    pageContentMob.classList.remove('disabled-content');
  });
});
