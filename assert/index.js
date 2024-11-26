const slider = document.querySelector('.slider');
const slides = document.querySelectorAll('.slide');
const prevBtn = document.querySelector('.prev-btn');
const nextBtn = document.querySelector('.next-btn');

let currentIndex = 0;

function updateSlider() {
  const width = slides[0].clientWidth;
  slider.style.transform = `translateX(-${currentIndex * width}px)`;
}

function goToNextSlide() {
  currentIndex = (currentIndex + 1) % slides.length;
  updateSlider();
}

function goToPrevSlide() {
  currentIndex = (currentIndex - 1 + slides.length) % slides.length;
  updateSlider();
}

// Add event listeners
nextBtn.addEventListener('click', goToNextSlide);
prevBtn.addEventListener('click', goToPrevSlide);

// Make slider responsive
window.addEventListener('resize', updateSlider);
