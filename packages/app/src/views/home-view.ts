import { css, html, LitElement } from "lit";
import {property} from "lit/decorators.js";
import reset from "../../public/styles/reset.css";
import {define, Form} from "@calpoly/mustang";
// import {Machine} from "../components/machine.ts";
export class HomeViewElement extends LitElement {

  static uses = define({
    "mu-form": Form.Element
  });

  @property({attribute: "user-id"})
  userid?: string;

  @property()
  mode = "view";

  // get src() {
  //   return `/api/machines/${this.userid}`;
  // }

  render() {
    return html`
        <div class="image-grid">
            <a href="../../public/machines/chest-press.html"><img src="/images/chest-press.webp" alt="Chest press"></a>

            <a href="../../public/machines/lat-pulldown.html"><img src="/images/lat-pulldown.webp" alt="…"></a>
            <a href="../../public/machines/hack-squat.html"><img src="/images/hack-squat.webp" alt="…"></a>
            <a href="../../public/machines/glute-bridge.html"><img src="/images/glute-bridge.webp" alt=""></a>
            <a href="../../public/machines/tricep-extension.html"><img src="images/tricep-extension.webp" alt="…"></a>
            <a href="../../public/machines/low-row.html"><img src="images/low-row.jfif" alt="…"></a>
          </div>
    `;
  }

  static styles = [
    reset.styles,
    css`
    header {
      font-size: 2.4vw;
      font-style: bold;
      font-family: 'Beau Rivage', 'Tangerine', fantasy;
      color: var(--color-text);
    }
    body {
        color: var(--color-text);
        background-color: var(--color-background);
        font-family: 'IBM Plex Serif', serif;
        display: flex;
        flex-direction: column;
        margin: 0;

    }
    main {
      flex: 1;
      overflow: auto;
      min-height: 80vh;
      padding-left: var(--padding-side);
    }
    footer {
      bottom: 0;        
      left: 0;         
      width: 100%;   
      text-align: center;   
      padding: var(--padding-side) 0;   
    }

    a {
        color: var(--color-text);
    }

    svg.icon {
        display: inline;
        height: var(--icon-height);
        width: var(--icon-width);
        vertical-align: top;
        fill: currentColor;
    }

    .image-grid {
        display: grid;
        grid-template-columns: repeat(3, 1fr); 
        gap: var(--grid-gap);                            
      }
      
      .image-grid a {
        display: block;
      }
      
      .image-grid img {
        width: 100%;    
        height: auto;  
        display: block; 
        object-fit: cover; 
      }
    `
  ];
}