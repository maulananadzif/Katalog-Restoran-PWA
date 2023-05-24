class AppHeader extends HTMLElement {
  connectedCallback() {
    this.classList.add('app-bar');
    this.render();
  }

  render() {
    this.innerHTML = `
        <div class="app-bar__menu">
          <button id="hamburgerButton">☰</button>
        </div>
        <div class="app-bar__brand">
          <h1>FoodieFrenzy Apps</h1>
          
        </div>
        <nav id="navigationDrawer" class="app-bar__navigation">
          <ul>
            <li>
              
            </li>
            <li><a href="#/list">Home</a></li>
            <li><a href="#/favorite">Favorite</a></li>
            <li><a href="https://www.linkedin.com/in/maulana-nadzif-9439ba263/">About Us</a></li>
          </ul>
        </nav>
    `;
  }
}

customElements.define('app-header', AppHeader);
