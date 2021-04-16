const slides = document.querySelectorAll('.slide');
const preBtn = document.querySelector('#pre');
const nextBtn = document.querySelector('#next');
const interval = 5000;

const next = () => {
  const currentSlide = document.querySelector('.active');
  currentSlide.classList.remove('active');

  if (currentSlide.nextElementSibling) {
    currentSlide.nextElementSibling.classList.add('active');
  } else {
    slides[0].classList.add('active');
  }
  setTimeout(() => currentSlide.classList.remove('active'));
};

const slideInterval = () => setInterval(next, interval);
slideInterval();

const previous = () => {
  const currentSlide = document.querySelector('.active');
  currentSlide.classList.remove('active');

  if (currentSlide.previousElementSibling) {
    currentSlide.previousElementSibling.classList.add('active');
  } else {
    slides[slides.length - 1].classList.add('active');
  }
  setTimeout(() => currentSlide.classList.remove('active'));
};

nextBtn.addEventListener('click', () => {
  next();
  clearInterval(slideInterval);
  slideInterval = () => setInterval(next, interval);
});

preBtn.addEventListener('click', () => {
  previous();
  clearInterval(slideInterval);
  slideInterval = () => setInterval(next, interval);
});
