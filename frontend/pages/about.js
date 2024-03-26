// import { LitElement, html } from "lit";
import { LitElement, html, css } from "https://cdn.jsdelivr.net/gh/lit/dist@2/core/lit-core.min.js";

class AboutPage extends LitElement {
  render() {
    return html`
      <h1>About Us</h1>
      <p>This is a simple example of an about page.</p>
      <p><a href="/">Go to Home Page</a></p>
    `;
  }
}

customElements.define("about-page", AboutPage);
