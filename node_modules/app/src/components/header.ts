import {html, css, LitElement} from "lit";
import {property, state} from "lit/decorators.js";
import reset from "../../public/styles/reset.css";
import page from "../../public/styles/page.css";
import {Observer,Auth, Events} from "@calpoly/mustang"

function relayToggle(e: InputEvent, customEventName : string) {
    e.stopPropagation();  // prevent the "change" from bubbling up to body
    const target = e.target as HTMLInputElement
    // create + re-emit a namespaced toggle event
    const toggleEvent = new CustomEvent(customEventName, {
      bubbles: true,
      detail: { checked: target.checked }
    });
    target.dispatchEvent(toggleEvent)
};


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
            page.styles,
            css`
              header {
                color: var(--color-text);
                background-color: var(--color-background);
                text-align: center;
              }
              body {
              
              }
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
          <header>
          <h1>idkHowToUseThisMachine</h1>
          <label @change=${(ev: InputEvent)=> relayToggle(ev, "dark-mode")}>
                <input id="dark-toggle" type="checkbox" autocomplete="off" />
                Dark Mode
            </label>
            <label  @change=${(ev: InputEvent)=> relayToggle(ev, "darker-mode")}>
                <input id="darker-toggle" type="checkbox" autocomplete="off" />
                Darker Mode
            </label>
            <br>
          <a slot="actuator">
            Hello${this.userid || ", gymrat"}
          </a>
          ${this.loggedIn ?
            this.renderSignOutButton() :
            this.renderSignInButton()
          }
          </header>
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
          <a @click=${() => location.assign("/login.html")}>Sign In</a>
        `;
      }

  static initializeOnce(){
  document.body.addEventListener('dark-mode', function(e) {
    const event = e as CustomEvent;
    document.body.classList.toggle('dark-mode', event.detail.checked);
  });

  document.body.addEventListener('darker-mode', function(e) {
    const event = e as CustomEvent;
    document.body.classList.toggle('darker-mode', event.detail.checked);
  });
}
}
