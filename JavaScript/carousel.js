const track = document.querySelector(".carousel-track");
const slides = document.querySelectorAll(".carousel-slide");
const nextButton = document.querySelector(".carousel-button--right");
const prevButton = document.querySelector(".carousel-button--left");
const dotsNav = document.querySelector(".carousel-nav");
const dots = Array.from(dotsNav.children);

const slideWidth = slides[0].getBoundingClientRect().width;

console.log(slides);
console.log(dots);
console.log(slideWidth);

// arrange the slides next to each other
const setSlidePosition = (slide, index) => {
  slide.style.left = slideWidth * index + 'px';
}
slides.forEach(setSlidePosition);

const moveToSlide = (track, currentSlide, targetSlide) => {
  track.style.transform = 'translateX(-' + targetSlide.style.left + ')';
  currentSlide.classList.remove('current-slide');
  targetSlide.classList.add('current-slide');
}

// when I click right, move slides right
nextButton.addEventListener('click', e => {
  let currentSlide = track.querySelector('.current-slide');
  let nextSlide = currentSlide.nextElementSibling;

  // move to the next slide
  moveToSlide(track, currentSlide, nextSlide);
});

// when I click left, move slides left
prevButton.addEventListener('click', e => {
  let currentSlide = track.querySelector('.current-slide');
  let prevSlide = currentSlide.previousElementSibling;

  moveToSlide(track, currentSlide, prevSlide);
});

//when i click the nav indicators, move to that slide
dotsNav.addEventListener('click', e => {
  // which indicator was clicked on
  let targetDot = e.target.closest('button');

  if(!targetDot) return;

  let currentSlide = track.querySelector('.current-slide');
  let currentDot = dotsNav.querySelector('.current-slide');
  let targetIndex = dots.findIndex(dot => dot == targetDot);
  let targetSlide = slides[targetIndex];

  moveToSlide(track, currentSlide, targetSlide);
});