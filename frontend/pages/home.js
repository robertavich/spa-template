import { LitElement, html, css } from "https://cdn.jsdelivr.net/gh/lit/dist@2/core/lit-core.min.js";

class HomePage extends LitElement {
  render() {
    return html`
      <h1>Welcome to the Home Page!</h1>
      <p>This is a simple example of a home page.</p>
      <p><a href="/about">Go to About Page</a></p>
    `;
  }
}

customElements.define("home-page", HomePage);
