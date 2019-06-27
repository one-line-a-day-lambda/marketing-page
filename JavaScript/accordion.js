let items = document.querySelectorAll('.accordion a');
let accordionIcons = document.querySelectorAll('.acc-icon');
console.log(accordionIcons);

function toggleAccordion(){
  // toggle both the title panel and the content
  this.classList.toggle('active');
  this.nextElementSibling.nextElementSibling.classList.toggle('active');

  // if the icon is already a minus symbol, change to plus symbol, then return out of function
  if(this.nextElementSibling.classList[2] == 'fa-minus'){
    this.nextElementSibling.classList.remove('fa-minus');
    this.nextElementSibling.classList.add('fa-plus');
    return;
  }

  // change the plus symbol to a minus symbol
  this.nextElementSibling.classList.remove('fa-plus');
  this.nextElementSibling.classList.add('fa-minus');
}

function toggle() {
  this.nextElementSibling.classList.toggle('active');
  this.previousElementSibling.classList.toggle('active');

  if(this.classList[2] == 'fa-minus'){
    this.classList.remove('fa-minus');
    this.classList.add('fa-plus');
    return;
  }

  // change the plus symbol to a minus symbol
  this.classList.remove('fa-plus');
  this.classList.add('fa-minus');
}

items.forEach(item => item.addEventListener('click', toggleAccordion));
accordionIcons.forEach(icon => icon.addEventListener('click', toggle));