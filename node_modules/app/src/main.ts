import {
    Auth,
    define,
    History,
    Switch
} from "@calpoly/mustang";
import { html } from "lit";
import { HeaderElement } from "./components/header.ts";
import { HomeViewElement } from "./views/home-view.ts";

const routes = [
{
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
    "home-view": HomeViewElement
});

HeaderElement.initializeOnce();