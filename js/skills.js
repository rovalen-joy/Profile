document.addEventListener("DOMContentLoaded", () => {
    const progressBars = document.querySelectorAll(".progress-fill");
    
    progressBars.forEach((bar) => {
      const targetWidth = bar.getAttribute("data-width") || "0%";
      bar.style.width = targetWidth;
    });
  });
  