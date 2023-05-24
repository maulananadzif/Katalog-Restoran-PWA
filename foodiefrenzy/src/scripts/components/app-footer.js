class AppFooter extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
    <p>Semua Data Diperoleh dari <a href="https://restaurant-api.dicoding.dev" target="_blank" rel="noreferrer">Dicoding Restaurant API</a> | F078XB419</p>
    `;
  }
}

customElements.define('app-footer', AppFooter);
