import '../Footer/index.js';
import '../Header/index.js';
import '../Aside/index.js';

class AppLayout extends HTMLElement {
  constructor () {
    super();
    this._templateId = 'appLayoutTemplate';
    this._rootShadow = this.attachShadow({ mode: 'closed' });
    const template = document.getElementById(this._templateId) || this.initTemplate();
    this._rootShadow.appendChild(template.content.cloneNode(true));
  }

  initTemplate () {
    const template = document.createElement('template');
    template.setAttribute('id', this._templateId);

    template.innerHTML = `
      <style>
        :host {
          display: flex;
          flex-direction: column;
          height: 100%;
        }

        :host main {
          flex: 1;
          display: flex;
        }
        :host .app-body {
          flex: 1;
          overflow: auto;
          padding: 15px;
        }
      </style>
      <app-header logo="https://www.baidu.com/img/PCtm_d9c8750bed0b3c7d089fa7d55720d6cf.png"></app-header>
      <main>
        <app-aside w="200px"></app-aside>
        <div class="app-body">
          <slot></slot>
          <slot name="modal"></slot>
        </div>
      </main>
      <app-footer></app-footer>
    `;

    document.body.appendChild(template);
    return template;
  }

}

window.customElements.define('app-layout', AppLayout);