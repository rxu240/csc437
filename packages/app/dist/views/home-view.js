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
var home_view_exports = {};
__export(home_view_exports, {
  HomeViewElement: () => HomeViewElement
});
module.exports = __toCommonJS(home_view_exports);
var import_lit = require("lit");
var import_decorators = require("lit/decorators.js");
var import_reset = __toESM(require("../styles/reset.css"));
class HomeViewElement extends import_lit.LitElement {
  constructor() {
    super(...arguments);
    this.mode = "view";
  }
  static {
    this.uses = define({
      "mu-form": Form.Element
    });
  }
  get src() {
    return `/api/travelers/${this.userid}`;
  }
  render() {
    return import_lit.html`
        <div class="image-grid">
            <a href="machines/chest-press.html"><img src="/images/chest-press.webp" alt="Chest press"></a>
            <a href="machines/lat-pulldown.html"><img src="/images/lat-pulldown.webp" alt="…"></a>
            <a href="machines/hack-squat.html"><img src="/images/hack-squat.webp" alt="…"></a>
            <a href="machines/glute-bridge.html"><img src="/images/glute-bridge.webp" alt=""></a>
            <a href="machines/tricep-extension.html"><img src="images/tricep-extension.webp" alt="…"></a>
            <a href="machines/low-row.html"><img src="images/low-row.jfif" alt="…"></a>
          </div>
    `;
  }
  static {
    this.styles = [
      import_reset.default.styles,
      import_lit.css`
    `
    ];
  }
}
__decorateClass([
  (0, import_decorators.property)({ attribute: "user-id" })
], HomeViewElement.prototype, "userid", 2);
__decorateClass([
  (0, import_decorators.property)()
], HomeViewElement.prototype, "mode", 2);
__decorateClass([
  (0, import_decorators.state)()
], HomeViewElement.prototype, "machine", 2);
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  HomeViewElement
});
