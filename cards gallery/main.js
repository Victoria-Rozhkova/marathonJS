const slides = document.querySelectorAll(".slide");
function slider(activeSlide = 0) {
  slides[activeSlide].classList.add("active");

  slides.forEach((slide) =>
    slide.addEventListener("click", () => {
      removeActiveClasses();
      slide.classList.add("active");
    })
  );

  function removeActiveClasses() {
    slides.forEach((slide) => slide.classList.remove("active"));
  }
}
slider((slides.length - 1) / 2);
