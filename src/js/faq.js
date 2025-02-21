document.addEventListener("DOMContentLoaded", function () {
    const accordions = document.querySelectorAll(".ac");

    accordions.forEach((accordion) => {
        const trigger = accordion.querySelector(".ac-trigger");
        const icon = trigger.querySelector(".arrow-icon");
        const panel = accordion.querySelector(".ac-panel");

        trigger.addEventListener("click", function () {
            const isOpen = accordion.classList.contains("open");

            // Перемикаємо стан поточного акордеону без закриття інших
            if (isOpen) {
                accordion.classList.remove("open");
                panel.style.maxHeight = null;
                icon.src = "./img/icons/eye-close.png"; // Закрите око
            } else {
                accordion.classList.add("open");
                panel.style.maxHeight = panel.scrollHeight + "px"; // Встановлюємо висоту контенту
                icon.src = "./img/icons/charm_eye.png"; // Відкрите око
            }
        });

        // Додаємо можливість закриття при кліку на текст (контент)
        panel.addEventListener("click", function () {
            accordion.classList.remove("open");
            panel.style.maxHeight = null;
            icon.src = "./img/icons/eye-close.png"; // Закрите око
        });
    });
});
