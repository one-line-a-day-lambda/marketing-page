let items = document.querySelectorAll('.accordion a');
console.log(items);

function toggleAccordion(){
  this.classList.toggle('active');
  this.nextElementSibling.nextElementSibling.classList.toggle('active');

  if(this.nextElementSibling.classList[1] == 'fa-minus'){
    this.nextElementSibling.classList.remove('fa-minus');
    this.nextElementSibling.classList.add('fa-plus');
    return;
  }

  this.nextElementSibling.classList.remove('fa-plus');
  this.nextElementSibling.classList.add('fa-minus');
  
}

items.forEach(item => item.addEventListener('click', toggleAccordion));