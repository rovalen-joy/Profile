document.addEventListener("DOMContentLoaded", () => {
  const track = document.querySelector(".carousel-track");
  const originalSlides = Array.from(track.children);
  const prevBtn = document.querySelector(".prev-btn");
  const nextBtn = document.querySelector(".next-btn");

  // clone the first last slides
  const firstSlide = originalSlides[0];
  const lastSlide = originalSlides[originalSlides.length - 1];
  const cloneFirst = firstSlide.cloneNode(true);
  const cloneLast = lastSlide.cloneNode(true);

  track.insertBefore(cloneLast, firstSlide); 
  track.appendChild(cloneFirst);

  const allSlides = Array.from(track.children);

  let currentIndex = 1; 
  const slideWidth = firstSlide.getBoundingClientRect().width + 20; 

  track.style.transform = `translateX(${-slideWidth * currentIndex}px)`;
  setActiveSlide(allSlides, currentIndex);

  //  next/prev buttons
  nextBtn.addEventListener("click", () => {
    if (currentIndex >= allSlides.length - 1) return;
    currentIndex++;
    slide();
  });

  prevBtn.addEventListener("click", () => {
    if (currentIndex <= 0) return;
    currentIndex--;
    slide();
  });

  function slide() {
    track.style.transition = "transform 0.6s ease";
    track.style.transform = `translateX(${-slideWidth * currentIndex}px)`;
    setActiveSlide(allSlides, currentIndex);
  }

  track.addEventListener("transitionend", () => {
    if (allSlides[currentIndex] === cloneFirst) {
      track.style.transition = "none";
      currentIndex = 1;
      track.style.transform = `translateX(${-slideWidth * currentIndex}px)`;
      setActiveSlide(allSlides, currentIndex);
    } else if (allSlides[currentIndex] === cloneLast) {
      track.style.transition = "none";
      currentIndex = originalSlides.length - 1;
      track.style.transform = `translateX(${-slideWidth * currentIndex}px)`;
      setActiveSlide(allSlides, currentIndex);
    }
  });

  // the active card
  function setActiveSlide(slidesArray, index) {
    slidesArray.forEach(slide => slide.classList.remove("active"));
    slidesArray[index].classList.add("active");
  }
});