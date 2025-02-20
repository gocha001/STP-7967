document.addEventListener("DOMContentLoaded", function () {
    const accordions = document.querySelectorAll(".ac");

    accordions.forEach((accordion) => {
        const trigger = accordion.querySelector(".ac-trigger");
        const icon = trigger.querySelector(".arrow-icon");

        trigger.addEventListener("click", function () {
            const isOpen = accordion.classList.contains("open");

            if (isOpen) {
                // Якщо акордеон відкритий, закриваємо його
                accordion.classList.remove("open");
                icon.src = "./img/icons/eye-close.png"; // Закрите око
            } else {
                // Відкриваємо лише поточний акордеон
                accordion.classList.add("open");
                icon.src = "./img/icons/charm_eye.png"; // Відкрите око
            }
        });
    });
});
