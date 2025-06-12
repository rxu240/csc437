import {
    Auth,
    define,
    History,
    Switch,
    Store
} from "@calpoly/mustang";
import { html } from "lit";
import { HeaderElement } from "./components/header.ts";
import { HomeViewElement } from "./views/home-view.ts";
import {Msg } from "./messages";
import { Model, init } from "./model";
import update from "./update";

const routes = [
{
    auth: "protected",
    path: "/app/machines/:id",
    view: (params: Switch.Params) => html`
    <machine-view machine-id=${params.id}></machine-view>
    `
},
{
    path: "/app",
    view: () => html`
    <home-view></home-view>
    `
},
{
    path: "/",
    redirect: "/app"
}
];
define({
    "mu-auth": Auth.Provider,
    "mu-history": History.Provider,
    "header-big": HeaderElement,
    "mu-switch": class AppSwitch extends Switch.Element{
        constructor(){
        super(routes, "rxu240-history", "rxu240-auth");
        }
    },
    "home-view": HomeViewElement,
    "mu-store": class Appstore extends Store.Provider<Model, Msg> {
        constructor() {
            super(update, init, "rxu240-auth");
        }
    }
});

HeaderElement.initializeOnce();