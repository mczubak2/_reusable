class AccordionCore {
  
  constructor(wrapper, parent = null) {
    this.root = wrapper;
    this.parent = parent;

    if (!this.setVars()) return;
    this.setEvents();
  }

  setVars() {
    this.list = this.root.querySelectorAll('[data-accordion-header]');

    if (!this.list) return false;

    return true;
  }

  setEvents() {
    this.list.forEach(item => {
      item.addEventListener('click', () => {
        this.toggleItem(item);
      });
    });
  }

  toggleItem(item) {
    item.classList.toggle('active');

    const subitem = item.nextElementSibling;
    const selectors = subitem.querySelectorAll('[data-accordion]');

    if (subitem.style.maxHeight) {
      subitem.style.maxHeight = null;
      subitem.classList.remove('active');

    } else {
      subitem.style.maxHeight = `${subitem.scrollHeight}px`;
      subitem.classList.add('active');

      if (this.parent) {
        this.parent.style.maxHeight = `${this.parent.scrollHeight + subitem.scrollHeight}px`;
      }
    }

    if (!selectors.length) return;

    selectors.forEach((selector) => {
      new AccordionCore(selector, subitem);
    });
  }

  closeAll() {
    this.list.forEach((item) => {
      item.classList.remove('active');

      const subitem = item.nextElementSibling;

      subitem.style.maxHeight = null;
      subitem.classList.remove('active');
    })
  }
}

export default class Accordion {
  constructor() {
    this.selectors = document.querySelectorAll('[data-accordion]');

    if (!this.selectors.length) return;

    this.selectors.forEach((selector) => {
      new AccordionCore(selector);
    });
  }
}