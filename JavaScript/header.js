
class Dropdown {
    constructor(element) {
      
      // Assign this.element to the dropdown element
      this.element = element;
      
      // Get the element with the ".menu-button" class found in the dropdown element 
      this.button = this.element.querySelector('.menu-button');
      
      // assign the reference to the ".menu-content" class found in the dropdown element
      this.content = this.element.querySelector('.menu-content');
      
      // Add a click handler to the button reference and call the toggleContent method.
      this.button.addEventListener('click', this.toggleContent.bind(this));
    }
  
    toggleContent() {
      
      // Toggle the ".dropdown-hidden" class off and on
      this.content.classList.toggle('menu-hidden');
    }
  }







let dropdowns = document.querySelectorAll('.menu').forEach( dropdown => new Dropdown(dropdown));