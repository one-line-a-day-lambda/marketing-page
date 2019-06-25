const track = document.querySelector(".carousel-track");
const slides = Array.from(track.children);
const nextButton = document.querySelector(".carousel-button--right");
const prevButton = document.querySelector(".carousel-button--left");
const dotsNav = document.querySelector(".carousel-nav");
const dots = Array.from(dotsNav.children);

const slideWidth = slides[0].getBoundingClientRect().width;

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

const updateDots = (currentDot, targetDot) => {
  currentDot.classList.remove('current-slide');
  targetDot.classList.add('current-slide');
}

const hideShowArrows = (slides, prevButton, nextButton, targetIndex) => {
  if (targetIndex === 0) {
    prevButton.classList.add('is-hidden');
    nextButton.classList.remove('is-hidden');
  } else if (targetIndex === slides.length - 1) {
    prevButton.classList.remove('is-hidden');
    nextButton.classList.add('is-hidden');
  } else {
    prevButton.classList.remove('is-hidden');
    nextButton.classList.remove('is-hidden');
  }
}

// when I click right, move slides right
nextButton.addEventListener('click', e => {
  let currentSlide = track.querySelector('.current-slide');
  let nextSlide = currentSlide.nextElementSibling;
  let currentDot = dotsNav.querySelector('.current-slide');
  let nextDot = currentDot.nextElementSibling;
  let nextIndex = slides.findIndex(slide => slide === nextSlide);
  // move to the next slide
  moveToSlide(track, currentSlide, nextSlide);
  updateDots(currentDot, nextDot);
  hideShowArrows(slides, prevButton, nextButton, nextIndex);
});

// when I click left, move slides left
prevButton.addEventListener('click', e => {
  let currentSlide = track.querySelector('.current-slide');
  let prevSlide = currentSlide.previousElementSibling;
  let currentDot = dotsNav.querySelector('.current-slide');
  let prevDot = currentDot.previousElementSibling;
  let nextIndex = slides.findIndex(slide => slide === prevSlide);

  moveToSlide(track, currentSlide, prevSlide);
  updateDots(currentDot, prevDot);
  hideShowArrows(slides, prevButton, nextButton, nextIndex);
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
  updateDots(currentDot, targetDot);
  hideShowArrows(slides, prevButton, nextButton, targetIndex);
});