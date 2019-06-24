class Carousel {
  constructor(carousel) {
      this.carousel = carousel;
      this.leftButton = document.querySelector('.fa-angle-left');
      this.rightButton = document.querySelector('.fa-angle-right');
      this.carouselItems = document.querySelectorAll('.carousel-items');
      this.index = 0; // index for carouselItems array

      this.rightButton.addEventListener('click', () => this.slideRight());
      this.leftButton.addEventListener('click', () => this.slideLeft());
  }
  slideRight() {
      if(this.index === this.carouselItems.length - 1) {
          this.index = 0;
          let currItem = this.carouselItems[this.index];

          this.carouselItems.forEach(item => item.classList.add('car-item-hidden'));
          currItem.classList.remove('car-item-hidden');
          TweenMax.from(currItem, .5, {opacity: 0});
      } else {
          this.index++;
          let currItem = this.carouselItems[this.index];

          this.carouselItems.forEach(item => item.classList.add('car-item-hidden'));
          currItem.classList.remove('car-item-hidden');
          TweenMax.from(currItem, .5, {opacity: 0});
      }
  }
  slideLeft() {
      if(this.index === 0) {
          this.index = 3;
          let currItem = this.carouselItems[this.index];

          this.carouselItems.forEach(item => item.classList.add('car-item-hidden'));
          currItem.classList.remove('car-item-hidden');
          TweenMax.from(currItem, .5, {opacity: 0});
      } else {
          this.index--;
          let currItem = this.carouselItems[this.index];

          this.carouselItems.forEach(item => item.classList.add('car-item-hidden'));
          currItem.classList.remove('car-item-hidden');
          TweenMax.from(currItem, .5, {opacity: 0});
      }
  }
}

let carousel = document.querySelector('.tutorial-carousel');
carousel = new Carousel(carousel);