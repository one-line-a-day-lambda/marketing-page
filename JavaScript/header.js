
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

      this.page = document.querySelector('body');
      this.page.addEventListener('click', this.hideMenu.bind(this));
    }
    
  
    toggleContent() {
      
      // Toggle the ".dropdown-hidden" class off and on
        this.content.classList.toggle('menu-hidden');
    }

    hideMenu(event) {
      let menu = document.querySelector('.menu-button');
      let menuContent = document.querySelector('.menu-content');
      if (event.target !== menu) {
        this.content.classList.add('menu-hidden');
      }
    }

  }



let dropdowns = document.querySelectorAll('.menu').forEach( dropdown => new Dropdown(dropdown));