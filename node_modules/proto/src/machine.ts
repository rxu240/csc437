import {html, css, LitElement} from "lit";
import {property, state} from "lit/decorators.js";
import reset from "./styles/reset.css.ts";
import {Observer, Auth} from "@calpoly/mustang"

export class MachineElement extends LitElement {

    _authObserver = new Observer<Auth.Model>(this, "rxu240-auth");
    _user?: Auth.User;

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
        this._authObserver.observe((auth: Auth.Model) => {
          this._user = auth.user;
          if (this.src) this.hydrate(this.src);
        });
    }

    get authorization() { 
      if (this._user?.authenticated) {
        return { Authorization: `Bearer ${(this._user as Auth.AuthenticatedUser).token}` };
      }
      return undefined;
    }

    async hydrate(src: string) {
      console.log(this.authorization)
        try {
          const res = await fetch(src, { headers: this.authorization });
          if (!res.ok) {
            console.error(`Failed to fetch in machine.ts - hydrate()`);
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
