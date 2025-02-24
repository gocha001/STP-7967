document.addEventListener('DOMContentLoaded', function () {
  const accordions = document.querySelectorAll('.ac');
  document.querySelectorAll('.ac-panel').forEach(panel => {
    panel.addEventListener('mouseenter', () => {
      panel.parentElement.classList.add('hover-active');
    });

    panel.addEventListener('mouseleave', () => {
      panel.parentElement.classList.remove('hover-active');
    });
  });
  accordions.forEach((accordion, index) => {
    const trigger = accordion.querySelector('.ac-trigger');
    const icon = trigger.querySelector('.arrow-icon');
    const panel = accordion.querySelector('.ac-panel');

    // Переконуємося, що панель видима перед визначенням її висоти
    panel.style.display = "block"; // Робимо її тимчасово видимою для правильного обчислення висоти
    let fullHeight = panel.scrollHeight; // Отримуємо реальну висоту контенту
    panel.style.display = ""; // Повертаємо назад початковий стан

    trigger.addEventListener('click', function () {
      const isOpen = accordion.classList.contains('open');

      // Закриваємо всі акордеони перед відкриттям нового
      accordions.forEach(acc => {
        if (acc !== accordion) {
          acc.classList.remove('open');
          acc.querySelector('.ac-panel').style.maxHeight = "0px";
          acc.querySelector('.ac-panel').style.opacity = 0;
          acc.querySelector('.arrow-icon').classList.remove('eye-open');
          acc.querySelector('.arrow-icon').classList.add('eye-closed');
        }
      });

      // Перемикаємо стан поточного акордеону
      if (isOpen) {
        accordion.classList.remove('open');
        panel.style.maxHeight = "0px";
        panel.style.opacity = 0;
        icon.classList.remove('eye-open');
        icon.classList.add('eye-closed');
      } else {
        accordion.classList.add('open');
        panel.style.opacity = 1;

        // Використовуємо попередньо визначену висоту
        setTimeout(() => {
          panel.style.maxHeight = fullHeight + "px"; // Правильна висота контенту
        }, 50);

        icon.classList.remove('eye-closed');
        icon.classList.add('eye-open');
      }
    });
  });
});


