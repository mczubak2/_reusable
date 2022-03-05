export default class MobileBurger {

  constructor() {
    if (!this.setVars()) return;
    this.setEvents();
  }

  setVars() {

    this.buttonsEl = {
      open: document.querySelector('[data-mobile-burger-open]'),
      close: document.querySelector('[data-mobile-burger-close]'),
    }

    this.classes = {
      menu: '.menuBurger',
      menuActive: 'menuBurger--active',
    }

    this.menu = document.querySelector(this.classes.menu);

    if (!this.menu) return false;

    return true;
  }

  setEvents() {
    this.buttonsEl.open.addEventListener('click', MobileBurger.makeItOpened.bind(this));
    this.buttonsEl.close.addEventListener('click', MobileBurger.makeItClosed.bind(this));
  }

  static makeItClosed() {    
    this.menu.classList.remove(this.classes.menuActive);
    document.body.style.overflow = 'auto';
  }
  
  static makeItOpened() {
    this.menu.classList.add(this.classes.menuActive);
    document.body.style.overflow = 'hidden';
  }
}