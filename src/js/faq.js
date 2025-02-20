document.addEventListener("DOMContentLoaded", function () {
    const accordions = document.querySelectorAll(".ac");

    accordions.forEach((accordion) => {
        const trigger = accordion.querySelector(".ac-trigger");
        const icon = trigger.querySelector(".arrow-icon");

        trigger.addEventListener("click", function () {
            const isOpen = accordion.classList.contains("open");

            // Закриваємо всі, крім поточного (при відкритті нового)
            accordions.forEach((item) => {
                if (item !== accordion) {
                    item.classList.remove("open");
                    item.querySelector(".arrow-icon").src = "./img/icons/eye-close.png"; // Закрите око
                }
            });

            // Перемикаємо стан поточного акордеону
            if (isOpen) {
                accordion.classList.remove("open");
                icon.src = "./img/icons/eye-close.png"; // Закрите око
            } else {
                accordion.classList.add("open");
                icon.src = "./img/icons/charm_eye.png"; // Відкрите око
            }
        });

        // Додаємо можливість закриття при кліку на текст (контент)
        const panel = accordion.querySelector(".ac-panel");
        panel.addEventListener("click", function () {
            accordion.classList.remove("open");
            icon.src = "./img/icons/eye-close.png"; // Закрите око
        });
    });
});
