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
var machine_exports = {};
__export(machine_exports, {
  MachineElement: () => MachineElement
});
module.exports = __toCommonJS(machine_exports);
var import_lit = require("lit");
var import_decorators = require("lit/decorators.js");
var import_reset_css = __toESM(require("../styles/reset.css.ts"));
var import_mustang = require("@calpoly/mustang");
class MachineElement extends import_lit.LitElement {
  constructor() {
    super(...arguments);
    this._authObserver = new import_mustang.Observer(this, "rxu240-auth");
    this.subtitle = "";
    this.steps = [];
    this.imageSrc = "";
  }
  get src() {
    return `/api/travelers/${this.userid}`;
  }
  static {
    this.styles = [
      import_reset_css.default.styles,
      import_lit.css`
                img {
                    max-width: 100%;
                    height: auto;
                    margin-top: 1rem;
                }
        `
    ];
  }
  connectedCallback() {
    super.connectedCallback();
    this._authObserver.observe((auth) => {
      this._user = auth.user;
      if (this.src) this.hydrate(this.src);
    });
  }
  get authorization() {
    if (this._user?.authenticated) {
      return { Authorization: `Bearer ${this._user.token}` };
    }
    return void 0;
  }
  async hydrate(src) {
    console.log(this.authorization);
    try {
      const res = await fetch(src, { headers: this.authorization });
      if (!res.ok) {
        console.error(`Failed to fetch in machine.ts - hydrate()`);
        return;
      }
      const data = await res.json();
      this.subtitle = data.subtitle;
      this.steps = data.steps;
      this.imageSrc = data.imageSrc;
    } catch (e) {
      console.error("Error loading JSON:", e);
    }
  }
  render() {
    return import_lit.html`
          <h2 slot="Subtitle">${this.subtitle}</h2>
          <ol>
            ${this.steps.map((step) => import_lit.html`<li>${step}</li>`)}
          </ol>
          <img src="${this.imageSrc}" />
        `;
  }
}
__decorateClass([
  (0, import_decorators.property)()
], MachineElement.prototype, "src", 2);
__decorateClass([
  (0, import_decorators.state)()
], MachineElement.prototype, "subtitle", 2);
__decorateClass([
  (0, import_decorators.state)()
], MachineElement.prototype, "steps", 2);
__decorateClass([
  (0, import_decorators.state)()
], MachineElement.prototype, "imageSrc", 2);
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  MachineElement
});
