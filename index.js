import sheet from './style.css' assert { type: 'css'};
import {LitElement, html, css} from './lit-all.min.js';

export class SimpleGreeting extends LitElement {
  static properties = {
    name: {},
  };
  // Define scoped styles right with your component, in plain CSS
  static styles = css`
    :host {
      color: blue;
    }
  `;

  constructor() {
    super();
    // Declare reactive properties
    this.name = 'World';
  }

  // Render the UI as a function of component state
  render() {
    return html`<p>Hello, ${this.name}!</p>`;
  }
}
customElements.define('simple-greeting', SimpleGreeting);

document.adoptedStyleSheets = [
  ...document.adoptedStyleSheets,
  sheet
];

class MyElement extends HTMLElement{
  constructor(){
    super();
    const shadow = this.attachShadow({mode: 'closed'});
    shadow.innerHTML = '<div>Hello</div>';
    console.log(this.attachShadow);
    
  }
}

customElements.define('my-element', MyElement);

customElements.define('user-card', class extends HTMLElement {
  connectedCallback() {
    this.attachShadow({mode: 'open'});
    this.shadowRoot.innerHTML = `
      <div>Имя:
        <slot name="username"></slot>
      </div>
      <div>Дата рождения:
        <slot name="birthday">01.01.1999</slot>
      </div>
    `;
  }
});