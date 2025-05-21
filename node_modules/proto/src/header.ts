import {html, css, LitElement} from "lit";
import {property, state} from "lit/decorators.js";
import reset from "./styles/reset.css.ts";
import {Observer,Auth, Events} from "@calpoly/mustang"

export class HeaderElement extends LitElement {

    _authObserver = new Observer<Auth.Model>(this, "rxu240-auth");
    _user?: Auth.User;

    @state()
    loggedIn = false;

    @state()
    userid?: string;

    @property()
    src?: string;
  
    @state()
    header = '';

    static styles = [
            reset.styles,
            css`
        `];

    connectedCallback() {
        super.connectedCallback();

        this._authObserver.observe((auth: Auth.Model) => {
          
          const { user } = auth;
          if (user && user.authenticated ) {
            this.loggedIn = true;
            this.userid = user.username;
            if (this.src) this.hydrate(this.src);
          } else {
            this.loggedIn = false;
            this.userid = undefined;
          }
        }); 
          
      }

    get authorization(): Record<string,string> | undefined {
      if (this._user?.authenticated) {
        return { Authorization: `Bearer ${(this._user as Auth.AuthenticatedUser).username}` };
      }
      return undefined;
    }

    async hydrate(src: string) {
        try {
          const res = await fetch(src, { headers: this.authorization });
          if (!res.ok) {
            console.error(`Failed to fetch in header.ts - hydrate()`);
            return;
          }
          const data = (await res.json()) as {
            header: string;
          };
          this.header = data.header;
        } catch (e) {
          console.error('Error loading JSON:', e);
        }
      }

      render() {
        
        return html`
          <h1 slot="Header">${this.header}</h1>
          <a slot="actuator">
            Hello ${this.userid || ", gymrat"}
          </a>
          ${this.loggedIn ?
            this.renderSignOutButton() :
            this.renderSignInButton()
          }
        `;
      }

      renderSignOutButton() {
        return html`
          <button
            @click=${(e: UIEvent) => {
              Events.relay(e, "auth:message", ["auth/signout"])
            }}
          >
            Sign Out
          </button>
        `;
      }

      renderSignInButton() {
        return html`
          <a href="/login.html">
            Sign In…
          </a>
        `;
      }
}
