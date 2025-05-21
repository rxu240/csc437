import{i as g,O as b,r as f,a as m,x as d,e as y,b as u,n as p,d as v,c as k}from"./reset.css-DTeiQZUM.js";var I=Object.defineProperty,i=(s,e,t,n)=>{for(var r=void 0,a=s.length-1,c;a>=0;a--)(c=s[a])&&(r=c(e,t,r)||r);return r&&I(e,t,r),r};const h=class h extends g{constructor(){super(...arguments),this._authObserver=new b(this,"rxu240-auth"),this.loggedIn=!1,this.header=""}connectedCallback(){super.connectedCallback(),this._authObserver.observe(e=>{const{user:t}=e;t&&t.authenticated?(this.loggedIn=!0,this.userid=t.username,this.src&&this.hydrate(this.src)):(this.loggedIn=!1,this.userid=void 0)})}get authorization(){var e;if((e=this._user)!=null&&e.authenticated)return{Authorization:`Bearer ${this._user.username}`}}async hydrate(e){try{const t=await fetch(e,{headers:this.authorization});if(!t.ok){console.error("Failed to fetch in header.ts - hydrate()");return}const n=await t.json();this.header=n.header}catch(t){console.error("Error loading JSON:",t)}}render(){return d`
          <h1 slot="Header">${this.header}</h1>
          <a slot="actuator">
            Hello ${this.userid||", gymrat"}
          </a>
          ${this.loggedIn?this.renderSignOutButton():this.renderSignInButton()}
        `}renderSignOutButton(){return d`
          <button
            @click=${e=>{y.relay(e,"auth:message",["auth/signout"])}}
          >
            Sign Out
          </button>
        `}renderSignInButton(){return d`
          <a href="/login.html">
            Sign In…
          </a>
        `}};h.styles=[f.styles,m`
        `];let o=h;i([u()],o.prototype,"loggedIn");i([u()],o.prototype,"userid");i([p()],o.prototype,"src");i([u()],o.prototype,"header");v({"header-big":o,"mu-auth":k.Provider});function l(s,e){const n=document.getElementById(s).closest("label");n.onchange=function(r){r.stopPropagation();const a=new CustomEvent(e,{bubbles:!0,detail:{checked:r.target.checked}});n.dispatchEvent(a)}}l("dark-toggle","darkmode:toggle");l("darker-toggle","darker-mode:toggle");document.body.addEventListener("darkmode:toggle",function(s){document.body.classList.toggle("dark-mode",s.detail.checked)});document.body.addEventListener("darker-mode:toggle",function(s){document.body.classList.toggle("darker-mode",s.detail.checked)});
