import './components/Layout/index.js';;
import Page from '//unpkg.com/page/page.mjs';

const appContainer = document.getElementById('app');
const appLayout = document.createElement('app-layout');
appContainer.appendChild(appLayout);

Page('/', () => {
  appLayout.innerHTML = '<a href="/about">about</a>';
});

Page('/about', () => {
  appLayout.innerHTML = `
    <div>
      default slot
    </div>
    <div slot="modal">
      modal slot
    </div>
  `;
});

Page('*', () => {
  appLayout.innerHTML = `
    <div>404 not found</div>
  `;
});

Page.start();
