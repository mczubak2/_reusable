export default class HasFocus {
  constructor() {
    if (!this.setVars()) return;

    this.setEvents();
  }

  setVars() {
    this.lastFocusedEl = null;
    this.FOCUS_CLASS = 'hasFocus';
    this.TAB_CODE = 9;

    return true;
  }

  setEvents() {
    this.onKeyUp = this.onKeyUp.bind(this);
    this.onFocusout = this.onFocusout.bind(this);
    window.addEventListener('keyup', this.onKeyUp);
    window.addEventListener('focusout', this.onFocusout);
  }

  onKeyUp(e) {
    const {
      target,
      keyCode
    } = e;

    if (keyCode !== this.TAB_CODE) return;

    if (this.lastFocusedEl !== null) this.lastFocusedEl.classList.remove(this.FOCUS_CLASS);

    const nodeName = target.nodeName.toUpperCase();
    if (
      nodeName === 'A' ||
      nodeName === 'BUTTON' ||
      nodeName === 'INPUT' ||
      nodeName === 'TEXTAREA' ||
      (nodeName === 'LABEL' && parseInt(target.getAttribute('tabindex')) >= 0)
    ) {
      target.classList.add(this.FOCUS_CLASS);
      this.lastFocusedEl = target;
    }
  }

  onFocusout(e) {
    const {
      target
    } = e;

    if (target.classList.contains(this.FOCUS_CLASS)) {
      target.classList.remove(this.FOCUS_CLASS);
      this.lastFocusedEl = null;
    }
  }
}
