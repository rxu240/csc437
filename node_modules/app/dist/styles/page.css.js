"use strict";
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
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
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);
var page_css_exports = {};
__export(page_css_exports, {
  default: () => page_css_default
});
module.exports = __toCommonJS(page_css_exports);
var import_lit = require("lit");
const styles = import_lit.css`
  header {
    font-size: 2.4vw;
    font-style: bold;
    font-family: 'Beau Rivage', 'Tangerine', fantasy;
  }
  body {
      color: var(--color-text);
      background-color: var(--color-background);
      font-family: 'IBM Plex Serif', serif;
      display: flex;
      flex-direction: column;
      margin: 0;

  }
  main {
    flex: 1;
    overflow: auto;
    min-height: 80vh;
    padding-left: var(--padding-side);
  }
  footer {
    bottom: 0;        
    left: 0;         
    width: 100%;   
    text-align: center;   
    padding: var(--padding-side) 0;   
  }

  a {
      color: var(--color-text);
  }

  svg.icon {
      display: inline;
      height: var(--icon-height);
      width: var(--icon-width);
      vertical-align: top;
      fill: currentColor;
  }

  .image-grid {
      display: grid;
      grid-template-columns: repeat(3, 1fr); 
      gap: var(--grid-gap);                            
    }
    
    .image-grid a {
      display: block;
    }
    
    .image-grid img {
      width: 100%;    
      height: auto;  
      display: block; 
      object-fit: cover; 
    }

`;
var page_css_default = { styles };
