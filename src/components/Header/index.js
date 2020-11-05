class Header extends HTMLElement {
  constructor () {
    super();
    this._templateId = 'appHeaderTemplate';
    const shadow = this.attachShadow({ mode: 'closed' });
    const template = document.getElementById(this._templateId) || this.initTemplates();
    const content = document.importNode(template.content, true);
    shadow.appendChild(content);

    /**
     * @type {HTMLImageElement}
     */
    this._logo = shadow.querySelector('.logo > img');
  }

  static get observedAttributes () {
    return ['logo'];
  }

  get logo () {
    return this.getAttribute('logo');
  }

  set logo (value) {
    this.setAttribute('logo', value);
  }

  initTemplates () {
    const template = document.createElement('template');
    template.setAttribute('id', this._templateId);
    const style = `
      <style>
        :host {
          display: block;
          background-color: #EEE;
        }
        #app-header {
          height: 60px;
          display: flex;
        }
        #app-header .logo img {
          height: 50px;
        }
        #app-header .navbar {
          flex: 1;
        }
      </style>
    `;
    const content = `
      <header id="app-header" class="app-header">
        <div class="logo">
          <img />
        </div>
        <div class="navbar">navbar</div>
        <div class="tools">tools</div>
      </header>
    `;
    template.innerHTML = `${style}${content}`;
    // template.append(style);
    // template.append(content);
    document.body.appendChild(template);
    return template;
  }

  attributeChangedCallback () {
    this.render();
  }

  render () {
    this._logo.src = this.logo;
  }
}

// Header.initTemplates();

window.customElements.define('app-header', Header);