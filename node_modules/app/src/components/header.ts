import {html, css, LitElement} from "lit";
import {property, state} from "lit/decorators.js";
import reset from "../styles/reset.css";
import page from "../styles/page.css";
import {Observer,Auth, Events} from "@calpoly/mustang"

function relayToggle(e: InputEvent, customEventName) {
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
            // if (this.src) this.hydrate(this.src);
          } else {
            this.loggedIn = false;
            this.userid = undefined;
          }
        }); 
          
      }

    // get authorization(): Record<string,string> | undefined {
    //   if (this._user?.authenticated) {
    //     return { Authorization: `Bearer ${(this._user as Auth.AuthenticatedUser).username}` };
    //   }
    //   return undefined;
    // }

    // async hydrate(src: string) {
    //     try {
    //       const res = await fetch(src, { headers: this.authorization });
    //       if (!res.ok) {
    //         console.error(`Failed to fetch in header.ts - hydrate()`);
    //         return;
    //       }
    //       const data = (await res.json()) as {
    //         header: string;
    //       };
    //       this.header = data.header;
    //     } catch (e) {
    //       console.error('Error loading JSON:', e);
    //     }
    //   }

      render() {
        
        return html`
          <header>
          <h1 slot="Header">idkHowToUseThisMachine</h1>
          <label @change=${(ev)=> relayToggle(ev, "dark-mode")}>
                <input id="dark-toggle" type="checkbox" autocomplete="off" />
                Dark Mode
            </label>
            <label  @change=${(ev)=> relayToggle(ev, "darker-mode")}>
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
          <a href="/login.html">
            Sign In…
          </a>
        `;
      }

  static initializeOnce(){
    // set up both toggles
    // relayToggle('dark-toggle',   'darkmode:toggle');
    // relayToggle('darker-toggle', 'darker-mode:toggle');

    // now listen on <body> for those custom events
    document.body.addEventListener('darkmode:toggle', function(e: CustomEvent) {
      document.body.classList.toggle('dark-mode', e.detail.checked);
    });

    document.body.addEventListener('darker-mode:toggle', function(e: CustomEvent) {
      document.body.classList.toggle('darker-mode', e.detail.checked);
    });
  }
}
