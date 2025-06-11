"use strict";
var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);
var __decorateClass = (decorators, target, key, kind) => {
  var result = kind > 1 ? void 0 : kind ? __getOwnPropDesc(target, key) : target;
  for (var i = decorators.length - 1, decorator; i >= 0; i--)
    if (decorator = decorators[i])
      result = (kind ? decorator(target, key, result) : decorator(result)) || result;
  if (kind && result) __defProp(target, key, result);
  return result;
};
var header_exports = {};
__export(header_exports, {
  HeaderElement: () => HeaderElement
});
module.exports = __toCommonJS(header_exports);
var import_lit = require("lit");
var import_decorators = require("lit/decorators.js");
var import_reset = __toESM(require("../styles/reset.css"));
var import_page = __toESM(require("../styles/page.css"));
var import_mustang = require("@calpoly/mustang");
function relayToggle(e, customEventName) {
  e.stopPropagation();
  const target = e.target;
  const toggleEvent = new CustomEvent(customEventName, {
    bubbles: true,
    detail: { checked: target.checked }
  });
  target.dispatchEvent(toggleEvent);
}
;
class HeaderElement extends import_lit.LitElement {
  constructor() {
    super(...arguments);
    this._authObserver = new import_mustang.Observer(this, "rxu240-auth");
    this.loggedIn = false;
    this.header = "";
  }
  static {
    this.styles = [
      import_reset.default.styles,
      import_page.default.styles,
      import_lit.css`
              header {
                color: var(--color-text);
                background-color: var(--color-background);
                text-align: center;
              }
              body {
              
              }
        `
    ];
  }
  connectedCallback() {
    super.connectedCallback();
    this._authObserver.observe((auth) => {
      const { user } = auth;
      if (user && user.authenticated) {
        this.loggedIn = true;
        this.userid = user.username;
      } else {
        this.loggedIn = false;
        this.userid = void 0;
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
    return import_lit.html`
          <h1 slot="Header">idkHowToUseThisMachine</h1>
          <label @change=${(ev) => relayToggle(ev, "dark-mode")}>
                <input id="dark-toggle" type="checkbox" autocomplete="off" />
                Dark Mode
            </label>
            <label  @change=${(ev) => relayToggle(ev, "darker-mode")}>
                <input id="darker-toggle" type="checkbox" autocomplete="off" />
                Darker Mode
            </label>
            <br>
          <a slot="actuator">
            Hello${this.userid || ", gymrat"}
          </a>
          ${this.loggedIn ? this.renderSignOutButton() : this.renderSignInButton()}
        `;
  }
  renderSignOutButton() {
    return import_lit.html`
          <button
            @click=${(e) => {
      import_mustang.Events.relay(e, "auth:message", ["auth/signout"]);
    }}
          >
            Sign Out
          </button>
        `;
  }
  renderSignInButton() {
    return import_lit.html`
          <a href="/login.html">
            Sign In…
          </a>
        `;
  }
  static initializeOnce() {
    document.body.addEventListener("darkmode:toggle", function(e) {
      document.body.classList.toggle("dark-mode", e.detail.checked);
    });
    document.body.addEventListener("darker-mode:toggle", function(e) {
      document.body.classList.toggle("darker-mode", e.detail.checked);
    });
  }
}
__decorateClass([
  (0, import_decorators.state)()
], HeaderElement.prototype, "loggedIn", 2);
__decorateClass([
  (0, import_decorators.state)()
], HeaderElement.prototype, "userid", 2);
__decorateClass([
  (0, import_decorators.property)()
], HeaderElement.prototype, "src", 2);
__decorateClass([
  (0, import_decorators.state)()
], HeaderElement.prototype, "header", 2);
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  HeaderElement
});
