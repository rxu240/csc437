import{i as p,O as d,r as b,a as g,x as l,n as m,b as h}from"./reset.css-DTeiQZUM.js";var f=Object.defineProperty,a=(u,t,s,i)=>{for(var e=void 0,o=u.length-1,c;o>=0;o--)(c=u[o])&&(e=c(t,s,e)||e);return e&&f(t,s,e),e};const n=class n extends p{constructor(){super(...arguments),this._authObserver=new d(this,"rxu240-auth"),this.subtitle="",this.steps=[],this.imageSrc=""}connectedCallback(){super.connectedCallback(),this._authObserver.observe(t=>{this._user=t.user,this.src&&this.hydrate(this.src)})}get authorization(){var t;if((t=this._user)!=null&&t.authenticated)return{Authorization:`Bearer ${this._user.token}`}}async hydrate(t){console.log(this.authorization);try{const s=await fetch(t,{headers:this.authorization});if(!s.ok){console.error("Failed to fetch in machine.ts - hydrate()");return}const i=await s.json();this.subtitle=i.subtitle,this.steps=i.steps,this.imageSrc=i.imageSrc}catch(s){console.error("Error loading JSON:",s)}}render(){return l`
          <h2 slot="Subtitle">${this.subtitle}</h2>
          <ol>
            ${this.steps.map(t=>l`<li>${t}</li>`)}
          </ol>
          <img src="${this.imageSrc}" />
        `}};n.styles=[b.styles,g`
                img {
                    max-width: 100%;
                    height: auto;
                    margin-top: 1rem;
                }
        `];let r=n;a([m()],r.prototype,"src");a([h()],r.prototype,"subtitle");a([h()],r.prototype,"steps");a([h()],r.prototype,"imageSrc");export{r as M};
