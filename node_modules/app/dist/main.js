"use strict";
var import_mustang = require("@calpoly/mustang");
var import_lit = require("lit");
var import_header = require("./components/header.ts");
var import_home_view = require("./views/home-view.ts");
const routes = [
  {
    path: "/app/machines/:id",
    view: (params) => import_lit.html`
    <machine-view machine-id=${params.id}></machine-view>
    `
  },
  {
    path: "/app",
    view: () => import_lit.html`
    <home-view></home-view>
    `
  },
  {
    path: "/",
    redirect: "/app"
  }
];
(0, import_mustang.define)({
  "mu-auth": import_mustang.Auth.Provider,
  "mu-history": import_mustang.History.Provider,
  "header-big": import_header.HeaderElement,
  "mu-switch": class AppSwitch extends import_mustang.Switch.Element {
    constructor() {
      super(routes, "rxu240:history", "rxu240:auth");
    }
  },
  "home-view": import_home_view.HomeViewElement
});
