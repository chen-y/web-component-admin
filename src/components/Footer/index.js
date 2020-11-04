class AppFooter extends HTMLElement {
  constructor () {
    super();
    this._templateId = 'appFooterTemplate';
    this._shadowRoot = this.attachShadow({ mode: 'open' });
    const template = document.getElementById(this._templateId) || this.initTemplates();
    this._shadowRoot.appendChild(template.content.cloneNode(true));
  }

  initTemplates () {
    const template = document.createElement('template');
    template.setAttribute('id', this._templateId);
    template.innerHTML = `
      <style>
        :host {
          height: 60px;
          background-color: #eee;
          display: block;
        }
        :host p{
          margin: 0;
          text-align: center;
        }
      </style>
      <p>copyright</p>
      <p>备案：00000</p>
    `;
    document.body.appendChild(template);
    return template;
  }
}

window.customElements.define('app-footer', AppFooter);