// in class HeaderElement
import {html, css, LitElement} from "lit";
import {property, state} from "lit/decorators.js";
import reset from "./styles/reset.css.ts";

export class HeaderElement extends LitElement {  

  _authObserver = new Observer<Auth.Model>(this, "blazing:auth");

  @property()
  src?: string;

  @state()
  loggedIn = false;

  @state()
  userid?: string;

  connectedCallback() {
    super.connectedCallback();

    this._authObserver.observe((auth: Auth.Model) => {
      const { user } = auth;

      if (user && user.authenticated ) {
        this.loggedIn = true;
        this.userid = user.username;
      } else {
        this.loggedIn = false;
        this.userid = undefined;
      }
    });
  }
}