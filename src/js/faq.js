document.addEventListener("DOMContentLoaded", () => {
    document.querySelectorAll(".faq-btn").forEach(btn => {
      btn.addEventListener("click", () => {
        const panel = btn.nextElementSibling;
        const isActive = btn.classList.toggle("active");
  
        document.querySelectorAll(".faq-btn").forEach(otherBtn => {
          if (otherBtn !== btn) {
            otherBtn.classList.remove("active");
            otherBtn.nextElementSibling.style.display = "none";
            otherBtn.querySelector(".arrow-icon").style.transform = "rotate(0deg)";
          }
        });
  
        panel.style.display = isActive ? "block" : "none";
        btn.querySelector(".arrow-icon").style.transform = isActive ? "rotate(180deg)" : "rotate(0deg)";
      });
    });
  });
  