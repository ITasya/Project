let currentSlide = 0;
const slides = document.querySelectorAll(".slide");

function showSlide(index) {
  slides.forEach((slide, i) => {
    slide.classList.toggle("active", i === index);
  });
}

function moveSlide(direction) {
  currentSlide = (currentSlide + direction + slides.length) % slides.length;
  showSlide(currentSlide);
}

showSlide(currentSlide);

const sections = document.querySelectorAll("section");

const options = {
  threshold: 0.2,
};

const observer = new IntersectionObserver((entries, observer) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("visible"); // Добавляем стиль видимости при пересечении
      observer.unobserve(entry.target); // Останавливаем наблюдение после появления
    }
  });
}, options);

sections.forEach((section) => {
  observer.observe(section);
});
