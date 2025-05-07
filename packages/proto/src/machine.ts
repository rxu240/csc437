import {html, css, LitElement} from "lit";
import {property} from "lit/decorators.js";
import reset from "./styles/reset.css.ts";

export class MachineElement extends LitElement {
    @property({attribute: "img-src"})
    imgSrc?: string;

    override render() {
        return html`
            <h2> <slot name="Subtitle">Default Subtitle</slot> </h2>
            
            <ol>
                <slot> 
                    <li>Default List</li>
                </slot>
            </ol>

            <img .src=${this.imgSrc} alt="Machine image"/>
            
            `
        ;
    }

    static styles = [
        reset.styles,
        css`
            img {
                max-width: 100%;
                height: auto;
            }

    `];
}