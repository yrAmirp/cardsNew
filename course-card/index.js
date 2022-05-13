import { LitElement, html, css } from "../lit-all.min.js";
import sheet from './style.css' assert { type: 'css' };
import resetSheet from './resetStyle.css' assert { type: 'css' };
document.adoptedStyleSheets = [
  ...document.adoptedStyleSheets,
  resetSheet,
  sheet,
]
class CourseCard extends LitElement {

  static get properties(){
    return{
      size: {type: String},
      titleCourse: {type: String},
      isFavorite: {type: Boolean},
    }
  }

  _setFavorite(e){
    this.isFavorite = !this.isFavorite;
    if(this.isFavorite){
      e.target.classList.add('favorite-active')
    }
    else{
      e.target.classList.remove('favorite-active')

    }
    console.log(e.target.classList);

  }

  render() {
    this.shadowRoot.adoptedStyleSheets = [
      ...this.shadowRoot.adoptedStyleSheets,
      sheet,
    ];
    return html`
      <div class='card ${this.size}' >
      ${this.isFavorite 
        ? html`<span class='favorite-img favorite-active' @click=${this._setFavorite}></span>`
        : html`<span class='favorite-img' @click=${this._setFavorite}></span>`
      }
        
        <div class='card-header'>
          <div class='rating'>
            <div class='rating_container'>
              <slot name='rating'></slot>
            </div>
          </div>
          <div class='partners'>
            <div class=partner_container>
              <slot name='partner'></slot>
            </div>
          </div>
        </div>
        <h3 class="title-course">${this.titleCourse}</h3>
        <div class='chips'>
            <slot name='chips-item-online'></slot>
            <slot name='chips-item'></slot>
        </div>
        <div class='params'>
          <slot name='price'></slot>
          <slot name='course-duration'></slot>
          <slot name='lesson-duration'></slot>
        </div>
      </div>
    `
    
  };

  constructor(){
    super();
    this.size = 'l';
    this.isFavorite = true;
  }
} 
customElements.define('course-card', CourseCard);