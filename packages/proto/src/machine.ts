import {html, css, LitElement} from "lit";
import {property} from "lit/decorators.js";

export class MachineElement extends LitElement {
    override render() {
        return html`
            <h2> <slot name="Subtitle"> Didn't work </slot> </h2>
            
            <ol>
                <slot> 
                    <li> DIDNT WORK </li>
                </slot>
            </ol>
            `
        ;
    }

    static styles = css`
        
    `;
}