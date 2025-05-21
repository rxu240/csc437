import{i as u,r as d,a as m,x as p,b as c,n as g}from"./reset.css-B5ONvIKu.js";var y=Object.defineProperty,a=(l,s,t,i)=>{for(var r=void 0,o=l.length-1,n;o>=0;o--)(n=l[o])&&(r=n(s,t,r)||r);return r&&y(s,t,r),r};const h=class h extends u{constructor(){super(...arguments),this.subtitle="",this.steps=[],this.imageSrc=""}connectedCallback(){super.connectedCallback(),this.src&&this.hydrate(this.src)}async hydrate(s){try{const t=await fetch(s);if(!t.ok){console.error("Failed to fetch in Instructions.ts - hydrate()");return}const i=await t.json();this.subtitle=i.subtitle,this.steps=i.steps,this.imageSrc=i.imageSrc}catch(t){console.error("Error loading JSON:",t)}}render(){return p`
          <h2 slot="Subtitle">${this.subtitle}</h2>
          <ol>
            ${this.steps.map(s=>p`<li>${s}</li>`)}
          </ol>
          <img src="${this.imageSrc}" />
        `}};h.styles=[d.styles,m`
                img {
                    max-width: 100%;
                    height: auto;
                    margin-top: 1rem;
                }
        `];let e=h;a([g()],e.prototype,"src");a([c()],e.prototype,"subtitle");a([c()],e.prototype,"steps");a([c()],e.prototype,"imageSrc");export{e as M};
