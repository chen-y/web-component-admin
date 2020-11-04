class AppAside extends HTMLElement {

  constructor () {
    super();
    this._templateId = 'appAsideTemplate';
    this._shadowRoot = this.attachShadow({ mode: 'open' });
    const template = document.getElementById(this._templateId) || this.initTemplate();
    this._shadowRoot.appendChild(template.content.cloneNode(true));
  }

  initTemplate () {
    const template = document.createElement('template');
    template.setAttribute('id', this._templateId);
    template.innerHTML = `
      <style>
        :host {
          background-color: #F5F5F5;
        }
      </style>
      <div>aside</div>
    `;
    document.body.appendChild(template);
    return template;
  }

  get w () {
    return this.getAttribute('w');
  }

  set w (value) {
    this.setAttribute('w', value);
  }

  static get observedAttributes () {
    return ['w'];
  }

  attributeChangedCallback (name, old, newValue) {
    if (name === 'w') {
      this.style.width = newValue;
    }
  }
}

window.customElements.define('app-aside', AppAside);