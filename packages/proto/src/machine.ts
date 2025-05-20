import {html, css, LitElement} from "lit";
import {property, state} from "lit/decorators.js";
import reset from "./styles/reset.css.ts";

export class MachineElement extends LitElement {
    @property()
    src?: string;
  
    @state()
    subtitle = '';

    @state()
    steps: string[] = [];

    @state() 
    imageSrc = '';

    static styles = [
            reset.styles,
            css`
                img {
                    max-width: 100%;
                    height: auto;
                    margin-top: 1rem;
                }
        `];

    connectedCallback() {
        super.connectedCallback();
        if (this.src) this.hydrate(this.src);
    }

    async hydrate(src: string) {
        try {
          const res = await fetch(src);
          if (!res.ok) {
            console.error(`Failed to fetch in Instructions.ts - hydrate()`);
            return;
          }
          const data = (await res.json()) as {
            subtitle: string;
            steps: string[];
            imageSrc: string;
          };
          this.subtitle = data.subtitle;
          this.steps = data.steps;
          this.imageSrc = data.imageSrc;
        } catch (e) {
          console.error('Error loading JSON:', e);
        }
      }

      render() {
        return html`
          <h2 slot="Subtitle">${this.subtitle}</h2>
          <ol>
            ${this.steps.map((step) => html`<li>${step}</li>`)}
          </ol>
          <img src="${this.imageSrc}" />
        `;
      }
}
