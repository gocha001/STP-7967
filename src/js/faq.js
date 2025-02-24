document.addEventListener('DOMContentLoaded', function () {
  const accordions = document.querySelectorAll('.ac');

  accordions.forEach(accordion => {
    const trigger = accordion.querySelector('.ac-trigger'); // Кнопка-заголовок
    const panel = accordion.querySelector('.ac-panel'); // Контент
    const icon = trigger.querySelector('.arrow-icon'); // Іконка

    // Клік по кнопці або заголовку акордеону
    trigger.addEventListener('click', function (event) {
      event.stopPropagation(); // Запобігаємо спрацьовуванню глобального кліку
      toggleAccordion(accordion, trigger, panel, icon);
    });

    // Клік на будь-яке місце відкритого акордеону – закриває його
    accordion.addEventListener('click', function (event) {
      if (accordion.classList.contains('open')) {
        toggleAccordion(accordion, trigger, panel, icon);
      }
    });

    // Додаємо ефект ховера: підсвічуємо батьківський контейнер
    accordion.addEventListener('mouseenter', function () {
      accordion.classList.add('hover-active');
    });

    accordion.addEventListener('mouseleave', function () {
      accordion.classList.remove('hover-active');
    });

    // Додаємо ефект фокуса: коли натискаєш Tab, підсвічується
    trigger.addEventListener('focus', function () {
      accordion.classList.add('focus-active');
    });

    trigger.addEventListener('blur', function () {
      accordion.classList.remove('focus-active');
    });
  });

  // Функція відкриття/закриття акордеону
  function toggleAccordion(accordion, trigger, panel, icon) {
    const isOpen = accordion.classList.contains('open');

    // Закриваємо всі акордеони перед відкриттям нового
    document.querySelectorAll('.ac').forEach(acc => {
      if (acc !== accordion) {
        acc.classList.remove('open');
        acc.querySelector('.ac-panel').style.maxHeight = "0px";
        acc.querySelector('.ac-panel').style.opacity = "0";
        acc.querySelector('.arrow-icon').classList.remove('eye-open');
        acc.querySelector('.arrow-icon').classList.add('eye-closed');
        acc.querySelector('.ac-trigger').setAttribute('aria-expanded', "false");
      }
    });

    // Відкриваємо або закриваємо поточний акордеон
    if (isOpen) {
      accordion.classList.remove('open');
      panel.style.maxHeight = "0px";
      panel.style.opacity = "0";
      icon.classList.remove('eye-open');
      icon.classList.add('eye-closed');
      trigger.setAttribute('aria-expanded', "false");
    } else {
      accordion.classList.add('open');
      panel.style.opacity = "1";
      panel.style.maxHeight = panel.scrollHeight + "px";
      icon.classList.remove('eye-closed');
      icon.classList.add('eye-open');
      trigger.setAttribute('aria-expanded', "true");
    }
  }
});

