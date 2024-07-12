
        console.groupCollapsed(
            "🍿 %c MOVIE LIBRARY PANEL %c DEVELOPEMENT ",
            "background: white; color: black; padding: 0px 2px; border-radius: 4px 0 0 4px",
            "background: gold; color: black; padding: 0px 2px; border-radius: 0 4px 4px 0",
        );
        console.info("Built at: 7/11/2024, 12:37:09 AM");
        console.info("Repo: https://github.com/ngocjohn/movie-library-panel");
        console.groupEnd();
    
/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const t$3=globalThis,e$4=t$3.ShadowRoot&&(void 0===t$3.ShadyCSS||t$3.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,s$2=Symbol(),o$4=new WeakMap;let n$2 = class n{constructor(t,e,o){if(this._$cssResult$=!0,o!==s$2)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=e;}get styleSheet(){let t=this.o;const s=this.t;if(e$4&&void 0===t){const e=void 0!==s&&1===s.length;e&&(t=o$4.get(s)),void 0===t&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),e&&o$4.set(s,t));}return t}toString(){return this.cssText}};const r$4=t=>new n$2("string"==typeof t?t:t+"",void 0,s$2),i$3=(t,...e)=>{const o=1===t.length?t[0]:e.reduce(((e,s,o)=>e+(t=>{if(!0===t._$cssResult$)return t.cssText;if("number"==typeof t)return t;throw Error("Value passed to 'css' function must be a 'css' function result: "+t+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(s)+t[o+1]),t[0]);return new n$2(o,t,s$2)},S$1=(s,o)=>{if(e$4)s.adoptedStyleSheets=o.map((t=>t instanceof CSSStyleSheet?t:t.styleSheet));else for(const e of o){const o=document.createElement("style"),n=t$3.litNonce;void 0!==n&&o.setAttribute("nonce",n),o.textContent=e.cssText,s.appendChild(o);}},c$2=e$4?t=>t:t=>t instanceof CSSStyleSheet?(t=>{let e="";for(const s of t.cssRules)e+=s.cssText;return r$4(e)})(t):t;

/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const{is:i$2,defineProperty:e$3,getOwnPropertyDescriptor:r$3,getOwnPropertyNames:h$1,getOwnPropertySymbols:o$3,getPrototypeOf:n$1}=Object,a$1=globalThis,c$1=a$1.trustedTypes,l$1=c$1?c$1.emptyScript:"",p$1=a$1.reactiveElementPolyfillSupport,d$1=(t,s)=>t,u$1={toAttribute(t,s){switch(s){case Boolean:t=t?l$1:null;break;case Object:case Array:t=null==t?t:JSON.stringify(t);}return t},fromAttribute(t,s){let i=t;switch(s){case Boolean:i=null!==t;break;case Number:i=null===t?null:Number(t);break;case Object:case Array:try{i=JSON.parse(t);}catch(t){i=null;}}return i}},f$1=(t,s)=>!i$2(t,s),y$1={attribute:!0,type:String,converter:u$1,reflect:!1,hasChanged:f$1};Symbol.metadata??=Symbol("metadata"),a$1.litPropertyMetadata??=new WeakMap;class b extends HTMLElement{static addInitializer(t){this._$Ei(),(this.l??=[]).push(t);}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(t,s=y$1){if(s.state&&(s.attribute=!1),this._$Ei(),this.elementProperties.set(t,s),!s.noAccessor){const i=Symbol(),r=this.getPropertyDescriptor(t,i,s);void 0!==r&&e$3(this.prototype,t,r);}}static getPropertyDescriptor(t,s,i){const{get:e,set:h}=r$3(this.prototype,t)??{get(){return this[s]},set(t){this[s]=t;}};return {get(){return e?.call(this)},set(s){const r=e?.call(this);h.call(this,s),this.requestUpdate(t,r,i);},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)??y$1}static _$Ei(){if(this.hasOwnProperty(d$1("elementProperties")))return;const t=n$1(this);t.finalize(),void 0!==t.l&&(this.l=[...t.l]),this.elementProperties=new Map(t.elementProperties);}static finalize(){if(this.hasOwnProperty(d$1("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(d$1("properties"))){const t=this.properties,s=[...h$1(t),...o$3(t)];for(const i of s)this.createProperty(i,t[i]);}const t=this[Symbol.metadata];if(null!==t){const s=litPropertyMetadata.get(t);if(void 0!==s)for(const[t,i]of s)this.elementProperties.set(t,i);}this._$Eh=new Map;for(const[t,s]of this.elementProperties){const i=this._$Eu(t,s);void 0!==i&&this._$Eh.set(i,t);}this.elementStyles=this.finalizeStyles(this.styles);}static finalizeStyles(s){const i=[];if(Array.isArray(s)){const e=new Set(s.flat(1/0).reverse());for(const s of e)i.unshift(c$2(s));}else void 0!==s&&i.push(c$2(s));return i}static _$Eu(t,s){const i=s.attribute;return !1===i?void 0:"string"==typeof i?i:"string"==typeof t?t.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev();}_$Ev(){this._$ES=new Promise((t=>this.enableUpdating=t)),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach((t=>t(this)));}addController(t){(this._$EO??=new Set).add(t),void 0!==this.renderRoot&&this.isConnected&&t.hostConnected?.();}removeController(t){this._$EO?.delete(t);}_$E_(){const t=new Map,s=this.constructor.elementProperties;for(const i of s.keys())this.hasOwnProperty(i)&&(t.set(i,this[i]),delete this[i]);t.size>0&&(this._$Ep=t);}createRenderRoot(){const t=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return S$1(t,this.constructor.elementStyles),t}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$EO?.forEach((t=>t.hostConnected?.()));}enableUpdating(t){}disconnectedCallback(){this._$EO?.forEach((t=>t.hostDisconnected?.()));}attributeChangedCallback(t,s,i){this._$AK(t,i);}_$EC(t,s){const i=this.constructor.elementProperties.get(t),e=this.constructor._$Eu(t,i);if(void 0!==e&&!0===i.reflect){const r=(void 0!==i.converter?.toAttribute?i.converter:u$1).toAttribute(s,i.type);this._$Em=t,null==r?this.removeAttribute(e):this.setAttribute(e,r),this._$Em=null;}}_$AK(t,s){const i=this.constructor,e=i._$Eh.get(t);if(void 0!==e&&this._$Em!==e){const t=i.getPropertyOptions(e),r="function"==typeof t.converter?{fromAttribute:t.converter}:void 0!==t.converter?.fromAttribute?t.converter:u$1;this._$Em=e,this[e]=r.fromAttribute(s,t.type),this._$Em=null;}}requestUpdate(t,s,i){if(void 0!==t){if(i??=this.constructor.getPropertyOptions(t),!(i.hasChanged??f$1)(this[t],s))return;this.P(t,s,i);}!1===this.isUpdatePending&&(this._$ES=this._$ET());}P(t,s,i){this._$AL.has(t)||this._$AL.set(t,s),!0===i.reflect&&this._$Em!==t&&(this._$Ej??=new Set).add(t);}async _$ET(){this.isUpdatePending=!0;try{await this._$ES;}catch(t){Promise.reject(t);}const t=this.scheduleUpdate();return null!=t&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(const[t,s]of this._$Ep)this[t]=s;this._$Ep=void 0;}const t=this.constructor.elementProperties;if(t.size>0)for(const[s,i]of t)!0!==i.wrapped||this._$AL.has(s)||void 0===this[s]||this.P(s,this[s],i);}let t=!1;const s=this._$AL;try{t=this.shouldUpdate(s),t?(this.willUpdate(s),this._$EO?.forEach((t=>t.hostUpdate?.())),this.update(s)):this._$EU();}catch(s){throw t=!1,this._$EU(),s}t&&this._$AE(s);}willUpdate(t){}_$AE(t){this._$EO?.forEach((t=>t.hostUpdated?.())),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t);}_$EU(){this._$AL=new Map,this.isUpdatePending=!1;}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(t){return !0}update(t){this._$Ej&&=this._$Ej.forEach((t=>this._$EC(t,this[t]))),this._$EU();}updated(t){}firstUpdated(t){}}b.elementStyles=[],b.shadowRootOptions={mode:"open"},b[d$1("elementProperties")]=new Map,b[d$1("finalized")]=new Map,p$1?.({ReactiveElement:b}),(a$1.reactiveElementVersions??=[]).push("2.0.4");

/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const t$2=globalThis,i$1=t$2.trustedTypes,s$1=i$1?i$1.createPolicy("lit-html",{createHTML:t=>t}):void 0,e$2="$lit$",h=`lit$${Math.random().toFixed(9).slice(2)}$`,o$2="?"+h,n=`<${o$2}>`,r$2=document,l=()=>r$2.createComment(""),c=t=>null===t||"object"!=typeof t&&"function"!=typeof t,a=Array.isArray,u=t=>a(t)||"function"==typeof t?.[Symbol.iterator],d="[ \t\n\f\r]",f=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,v=/-->/g,_=/>/g,m=RegExp(`>|${d}(?:([^\\s"'>=/]+)(${d}*=${d}*(?:[^ \t\n\f\r"'\`<>=]|("|')|))|$)`,"g"),p=/'/g,g=/"/g,$=/^(?:script|style|textarea|title)$/i,y=t=>(i,...s)=>({_$litType$:t,strings:i,values:s}),x=y(1),w=Symbol.for("lit-noChange"),T=Symbol.for("lit-nothing"),A=new WeakMap,E=r$2.createTreeWalker(r$2,129);function C(t,i){if(!Array.isArray(t)||!t.hasOwnProperty("raw"))throw Error("invalid template strings array");return void 0!==s$1?s$1.createHTML(i):i}const P=(t,i)=>{const s=t.length-1,o=[];let r,l=2===i?"<svg>":"",c=f;for(let i=0;i<s;i++){const s=t[i];let a,u,d=-1,y=0;for(;y<s.length&&(c.lastIndex=y,u=c.exec(s),null!==u);)y=c.lastIndex,c===f?"!--"===u[1]?c=v:void 0!==u[1]?c=_:void 0!==u[2]?($.test(u[2])&&(r=RegExp("</"+u[2],"g")),c=m):void 0!==u[3]&&(c=m):c===m?">"===u[0]?(c=r??f,d=-1):void 0===u[1]?d=-2:(d=c.lastIndex-u[2].length,a=u[1],c=void 0===u[3]?m:'"'===u[3]?g:p):c===g||c===p?c=m:c===v||c===_?c=f:(c=m,r=void 0);const x=c===m&&t[i+1].startsWith("/>")?" ":"";l+=c===f?s+n:d>=0?(o.push(a),s.slice(0,d)+e$2+s.slice(d)+h+x):s+h+(-2===d?i:x);}return [C(t,l+(t[s]||"<?>")+(2===i?"</svg>":"")),o]};class V{constructor({strings:t,_$litType$:s},n){let r;this.parts=[];let c=0,a=0;const u=t.length-1,d=this.parts,[f,v]=P(t,s);if(this.el=V.createElement(f,n),E.currentNode=this.el.content,2===s){const t=this.el.content.firstChild;t.replaceWith(...t.childNodes);}for(;null!==(r=E.nextNode())&&d.length<u;){if(1===r.nodeType){if(r.hasAttributes())for(const t of r.getAttributeNames())if(t.endsWith(e$2)){const i=v[a++],s=r.getAttribute(t).split(h),e=/([.?@])?(.*)/.exec(i);d.push({type:1,index:c,name:e[2],strings:s,ctor:"."===e[1]?k:"?"===e[1]?H:"@"===e[1]?I:R}),r.removeAttribute(t);}else t.startsWith(h)&&(d.push({type:6,index:c}),r.removeAttribute(t));if($.test(r.tagName)){const t=r.textContent.split(h),s=t.length-1;if(s>0){r.textContent=i$1?i$1.emptyScript:"";for(let i=0;i<s;i++)r.append(t[i],l()),E.nextNode(),d.push({type:2,index:++c});r.append(t[s],l());}}}else if(8===r.nodeType)if(r.data===o$2)d.push({type:2,index:c});else {let t=-1;for(;-1!==(t=r.data.indexOf(h,t+1));)d.push({type:7,index:c}),t+=h.length-1;}c++;}}static createElement(t,i){const s=r$2.createElement("template");return s.innerHTML=t,s}}function N(t,i,s=t,e){if(i===w)return i;let h=void 0!==e?s._$Co?.[e]:s._$Cl;const o=c(i)?void 0:i._$litDirective$;return h?.constructor!==o&&(h?._$AO?.(!1),void 0===o?h=void 0:(h=new o(t),h._$AT(t,s,e)),void 0!==e?(s._$Co??=[])[e]=h:s._$Cl=h),void 0!==h&&(i=N(t,h._$AS(t,i.values),h,e)),i}class S{constructor(t,i){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=i;}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){const{el:{content:i},parts:s}=this._$AD,e=(t?.creationScope??r$2).importNode(i,!0);E.currentNode=e;let h=E.nextNode(),o=0,n=0,l=s[0];for(;void 0!==l;){if(o===l.index){let i;2===l.type?i=new M(h,h.nextSibling,this,t):1===l.type?i=new l.ctor(h,l.name,l.strings,this,t):6===l.type&&(i=new L(h,this,t)),this._$AV.push(i),l=s[++n];}o!==l?.index&&(h=E.nextNode(),o++);}return E.currentNode=r$2,e}p(t){let i=0;for(const s of this._$AV)void 0!==s&&(void 0!==s.strings?(s._$AI(t,s,i),i+=s.strings.length-2):s._$AI(t[i])),i++;}}class M{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(t,i,s,e){this.type=2,this._$AH=T,this._$AN=void 0,this._$AA=t,this._$AB=i,this._$AM=s,this.options=e,this._$Cv=e?.isConnected??!0;}get parentNode(){let t=this._$AA.parentNode;const i=this._$AM;return void 0!==i&&11===t?.nodeType&&(t=i.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,i=this){t=N(this,t,i),c(t)?t===T||null==t||""===t?(this._$AH!==T&&this._$AR(),this._$AH=T):t!==this._$AH&&t!==w&&this._(t):void 0!==t._$litType$?this.$(t):void 0!==t.nodeType?this.T(t):u(t)?this.k(t):this._(t);}S(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}T(t){this._$AH!==t&&(this._$AR(),this._$AH=this.S(t));}_(t){this._$AH!==T&&c(this._$AH)?this._$AA.nextSibling.data=t:this.T(r$2.createTextNode(t)),this._$AH=t;}$(t){const{values:i,_$litType$:s}=t,e="number"==typeof s?this._$AC(t):(void 0===s.el&&(s.el=V.createElement(C(s.h,s.h[0]),this.options)),s);if(this._$AH?._$AD===e)this._$AH.p(i);else {const t=new S(e,this),s=t.u(this.options);t.p(i),this.T(s),this._$AH=t;}}_$AC(t){let i=A.get(t.strings);return void 0===i&&A.set(t.strings,i=new V(t)),i}k(t){a(this._$AH)||(this._$AH=[],this._$AR());const i=this._$AH;let s,e=0;for(const h of t)e===i.length?i.push(s=new M(this.S(l()),this.S(l()),this,this.options)):s=i[e],s._$AI(h),e++;e<i.length&&(this._$AR(s&&s._$AB.nextSibling,e),i.length=e);}_$AR(t=this._$AA.nextSibling,i){for(this._$AP?.(!1,!0,i);t&&t!==this._$AB;){const i=t.nextSibling;t.remove(),t=i;}}setConnected(t){void 0===this._$AM&&(this._$Cv=t,this._$AP?.(t));}}class R{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(t,i,s,e,h){this.type=1,this._$AH=T,this._$AN=void 0,this.element=t,this.name=i,this._$AM=e,this.options=h,s.length>2||""!==s[0]||""!==s[1]?(this._$AH=Array(s.length-1).fill(new String),this.strings=s):this._$AH=T;}_$AI(t,i=this,s,e){const h=this.strings;let o=!1;if(void 0===h)t=N(this,t,i,0),o=!c(t)||t!==this._$AH&&t!==w,o&&(this._$AH=t);else {const e=t;let n,r;for(t=h[0],n=0;n<h.length-1;n++)r=N(this,e[s+n],i,n),r===w&&(r=this._$AH[n]),o||=!c(r)||r!==this._$AH[n],r===T?t=T:t!==T&&(t+=(r??"")+h[n+1]),this._$AH[n]=r;}o&&!e&&this.j(t);}j(t){t===T?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"");}}class k extends R{constructor(){super(...arguments),this.type=3;}j(t){this.element[this.name]=t===T?void 0:t;}}class H extends R{constructor(){super(...arguments),this.type=4;}j(t){this.element.toggleAttribute(this.name,!!t&&t!==T);}}class I extends R{constructor(t,i,s,e,h){super(t,i,s,e,h),this.type=5;}_$AI(t,i=this){if((t=N(this,t,i,0)??T)===w)return;const s=this._$AH,e=t===T&&s!==T||t.capture!==s.capture||t.once!==s.once||t.passive!==s.passive,h=t!==T&&(s===T||e);e&&this.element.removeEventListener(this.name,this,s),h&&this.element.addEventListener(this.name,this,t),this._$AH=t;}handleEvent(t){"function"==typeof this._$AH?this._$AH.call(this.options?.host??this.element,t):this._$AH.handleEvent(t);}}class L{constructor(t,i,s){this.element=t,this.type=6,this._$AN=void 0,this._$AM=i,this.options=s;}get _$AU(){return this._$AM._$AU}_$AI(t){N(this,t);}}const Z=t$2.litHtmlPolyfillSupport;Z?.(V,M),(t$2.litHtmlVersions??=[]).push("3.1.3");const j=(t,i,s)=>{const e=s?.renderBefore??i;let h=e._$litPart$;if(void 0===h){const t=s?.renderBefore??null;e._$litPart$=h=new M(i.insertBefore(l(),t),t,void 0,s??{});}return h._$AI(t),h};

/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */class s extends b{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0;}createRenderRoot(){const t=super.createRenderRoot();return this.renderOptions.renderBefore??=t.firstChild,t}update(t){const i=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=j(i,this.renderRoot,this.renderOptions);}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0);}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1);}render(){return w}}s._$litElement$=!0,s[("finalized")]=!0,globalThis.litElementHydrateSupport?.({LitElement:s});const r$1=globalThis.litElementPolyfillSupport;r$1?.({LitElement:s});(globalThis.litElementVersions??=[]).push("4.0.5");

/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const t$1={ATTRIBUTE:1,CHILD:2,PROPERTY:3,BOOLEAN_ATTRIBUTE:4,EVENT:5,ELEMENT:6},e$1=t=>(...e)=>({_$litDirective$:t,values:e});class i{constructor(t){}get _$AU(){return this._$AM._$AU}_$AT(t,e,i){this._$Ct=t,this._$AM=e,this._$Ci=i;}_$AS(t,e){return this.update(t,e)}update(t,e){return this.render(...e)}}

/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */class e extends i{constructor(i){if(super(i),this.it=T,i.type!==t$1.CHILD)throw Error(this.constructor.directiveName+"() can only be used in child bindings")}render(r){if(r===T||null==r)return this._t=void 0,this.it=r;if(r===w)return r;if("string"!=typeof r)throw Error(this.constructor.directiveName+"() called with a non-string value");if(r===this.it)return this._t;this.it=r;const s=[r];return s.raw=s,this._t={_$litType$:this.constructor.resultType,strings:s,values:[]}}}e.directiveName="unsafeHTML",e.resultType=1;const o$1=e$1(e);

const noImage =
	'data:image/svg+xml;base64,PHN2ZyBpZD0iZ2x5cGhpY29ucy1iYXNpYyIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB2aWV3Qm94PSIwIDAgMzIgMzIiPgogIDxwYXRoIGZpbGw9IiNiNWI1YjUiIGlkPSJwaWN0dXJlIiBkPSJNMjcuNSw1SDQuNUExLjUwMDA4LDEuNTAwMDgsMCwwLDAsMyw2LjV2MTlBMS41MDAwOCwxLjUwMDA4LDAsMCwwLDQuNSwyN2gyM0ExLjUwMDA4LDEuNTAwMDgsMCwwLDAsMjksMjUuNVY2LjVBMS41MDAwOCwxLjUwMDA4LDAsMCwwLDI3LjUsNVpNMjYsMTguNWwtNC43OTQyNS01LjIzMDFhLjk5MzgzLjk5MzgzLDAsMCwwLTEuNDQ0MjgtLjAzMTM3bC01LjM0NzQxLDUuMzQ3NDFMMTkuODI4MTIsMjRIMTdsLTQuNzkyOTEtNC43OTNhMS4wMDAyMiwxLjAwMDIyLDAsMCwwLTEuNDE0MTgsMEw2LDI0VjhIMjZabS0xNy45LTZhMi40LDIuNCwwLDEsMSwyLjQsMi40QTIuNDAwMDUsMi40MDAwNSwwLDAsMSw4LjEsMTIuNVoiLz4KPC9zdmc+Cg==';

const ICON = {
	POWER: o$1('&#xF4FF;'),
	PLAY: o$1('&#xF4F2;'),
	STAR: o$1('&#xF586;'),
	ARROW_UP_RIGHT: o$1('&#xF141;'),
	CLOSE: o$1('&#xF659;'),
	CALENDAR: o$1('&#xF1F3;'),
	SEARCH: o$1('&#xF52A;'),
	MOVIE: o$1('&#xF3C3;'),
	CINEMA: o$1('&#xF6CA;'),
	TV: o$1('&#xF5ED'),
	FILTER: o$1('&#xF3E0;'),
	PL_PREV: o$1('&#xF818;'),
	PL_PAUSE: o$1('&#xF4C3;'),
	PL_PLAY: o$1('&#xF4C4;'),
	PL_NEXT: o$1('&#xF819;'),
	PL_STOP: o$1('&#xF4C4;'),
	VOLUME_UP: o$1('&#xF6A9;'),
	VOLUME_DOWN: o$1('&#xF6A8;'),
	VOLUME_OFF: o$1('&#xF6A7;'),
	FULLSCREEN: o$1('&#xF5B2;'),
	FULLSCREEN_EXIT: o$1('&#xF5B3;'),
	PLAY_FILLED: o$1('&#xF4F4;'),
	PAUSE_FILLED: o$1('&#xF4C3;'),
	STOP_FILLED: o$1('&#xF592;'),
	FORWARD_FILLED: o$1('&#xF55D;'),
	BACKWARD_FILLED: o$1('&#xF551;'),
	VOLUME_MUTE_FILLED: o$1('&#xF60C;'),
	VOLUME_UP_FILLED: o$1('&#xF610;'),
	VOLUME_DOWN_FILLED: o$1('&#xF60A;'),
	VOLUME_OFF_FILLED: o$1('&#xF60E;'),
	FULLSCREEN_FILLED: o$1('&#xF066;'),
	FULLSCREEN_EXIT_FILLED: o$1('&#xF065;'),
	LIBRARY: o$1('&#xF2CB;'),
	ARROW_LEFT_FILLED: o$1('&#xF22D;'),
	ARROW_RIGHT_FILLED: o$1('&#xF231;'),
	MENU_LIST: o$1('&#xF479;'),
	DOTS_VERTICAL: o$1('&#xF5D3'),
	FILE_PLAY: o$1('&#xF3A8;'),
};

const HAICON = {
	MOREINFO: 'mdi:dots-vertical',
	BROWSEMEDIA: 'mdi:folder-star-multiple-outline',
	REMOTE: 'mdi:remote',
	TOUCHPAD: 'mdi:gesture-tap-button',
	HOME: 'mdi:home',
	DROPDOWN: 'mdi:chevron-down',
	GROUP: 'mdi:speaker-multiple',
	MENU: 'mdi:menu-down',
	MUTE: {
		true: 'mdi:volume-off',
		false: 'mdi:volume-high',
	},
	NEXT: 'mdi:skip-next',
	PLAY: {
		true: 'mdi:pause',
		false: 'mdi:play',
	},
	POWER: 'mdi:power',
	PREV: 'mdi:skip-previous',
	SEND: 'mdi:send',
	SHUFFLE: 'mdi:shuffle',
	STOP: {
		true: 'mdi:stop',
		false: 'mdi:play',
	},
	VOL_DOWN: 'mdi:volume-minus',
	VOL_UP: 'mdi:volume-plus',
	FAST_FORWARD: 'mdi:fast-forward',
	REWIND: 'mdi:rewind',
	PAD: {
		UP: 'mdi:arrow-up-bold-box',
		DOWN: 'mdi:arrow-down-bold-box',
		LEFT: 'mdi:arrow-left-bold-box',
		RIGHT: 'mdi:arrow-right-bold-box',
		CIRCLE: 'mdi:circle',
		INFO: 'mdi:information-outline',
		MENU: 'mdi:menu',
		BACK: 'mdi:arrow-u-left-bottom-bold',
	},
	TOUCH: {
		UP: 'mdi:chevron-double-up',
		DOWN: 'mdi:chevron-double-down',
		LEFT: 'mdi:chevron-double-left',
		RIGHT: 'mdi:chevron-double-right',
	},
};

function getEncodedUrl(url) {
	const prefix = 'http://192.168.0.13:8080/vfs/';
	const encodedUrl = prefix + encodeURIComponent(url);

	return encodedUrl;
}

function formatReleaseDate(releaseDate) {
	const date = new Date(releaseDate);
	const options = { year: 'numeric', month: 'short', day: 'numeric' };
	const release = date.toLocaleDateString('en-US', options);
	return release;
}

function getCssVariableValue(variableName) {
	// Get the root element where the CSS variable is defined
	const root = document.documentElement;

	// Get the computed style of the root element
	const computedStyle = getComputedStyle(root);

	// Extract the value of the CSS variable
	const variableValue = computedStyle.getPropertyValue(variableName).trim();

	return variableValue;
}

const playMedia = (node, media) => {
	const event = new CustomEvent('play-media', {
		detail: {
			media: media,
		},
		bubbles: true,
		composed: true,
	});
	node.dispatchEvent(event);
};

const resetSearch = (node) => {
	const event = new CustomEvent('reset-search', {
		bubbles: true,
		composed: true,
	});
	node.dispatchEvent(event);
};

const IMG_PATH = 'https://image.tmdb.org/t/p/original';
const POSTER_PATH = 'https://image.tmdb.org/t/p/w342';
const URL_PATH = 'https://www.themoviedb.org/movie/';
const LOGO_PATH = 'https://image.tmdb.org/t/p/w342';
const BASE_URL = 'https://api.themoviedb.org/3';

function formatRuntime(runtime) {
	const hours = Math.floor(runtime / 60);
	const minutes = runtime % 60;
	return `${hours}h ${minutes}m`;
}

async function fetchMovieDetails(movieId, API_KEY) {
	const detailsUrl = `${BASE_URL}/movie/${movieId}?api_key=${API_KEY}&append_to_response=videos,images,credits`;
	const providersUrl = `${BASE_URL}/movie/${movieId}/watch/providers?api_key=${API_KEY}`;
	const youtubeBASE_URL = 'https://www.youtube.com/embed/';
	const releaseDates = `${BASE_URL}/movie/${movieId}/release_dates?api_key=${API_KEY}`;

	try {
		const [detailsResponse, providersResponse, releaseDatesResponse] = await Promise.all([
			fetch(detailsUrl),
			fetch(providersUrl),
			fetch(releaseDates),
		]);
		const [detailsData, providersData, releaseDatesData] = await Promise.all([
			detailsResponse.json(),
			providersResponse.json(),
			releaseDatesResponse.json(),
		]);
		const trailer = detailsData.videos.results.find(
			(video) => video.type === 'Trailer' && video.site === 'YouTube',
		);
		const czProviders = providersData.results.CZ
			? providersData.results.CZ.link
			: URL_PATH + detailsData.id;

		// Find the release date for the CZ region
		const czReleaseDates = releaseDatesData.results.find((country) => country.iso_3166_1 === 'CZ');
		const czReleaseDate = czReleaseDates ? czReleaseDates.release_dates[0].release_date : null;

		let backdrop_url = detailsData.backdrop_path ? IMG_PATH + detailsData.backdrop_path : noImage;
		let poster_url = detailsData.poster_path ? POSTER_PATH + detailsData.poster_path : noImage;

		if (detailsData.images) {
			if (detailsData.images.backdrops && detailsData.images.backdrops.length > 0) {
				backdrop_url = IMG_PATH + detailsData.images.backdrops[0].file_path;
			}
			if (detailsData.images.posters && detailsData.images.posters.length > 0) {
				poster_url = POSTER_PATH + detailsData.images.posters[0].file_path;
			}
		}

		let logo_url = ''; // Initialize logo_url variable

		// Check if detailsData.images.logos is available
		if (detailsData.images && detailsData.images.logos && detailsData.images.logos.length > 0) {
			// Find English logo if available
			const englishLogo = detailsData.images.logos.find((logo) => logo.iso_639_1 === 'en');
			if (englishLogo) {
				// Set logo_url to the English logo if found
				logo_url = LOGO_PATH + englishLogo.file_path;
			} else {
				// If English logo is not available, pick any other logo
				const otherLogo = detailsData.images.logos[0]; // Pick the first logo
				logo_url = LOGO_PATH + otherLogo.file_path;
			}
		}

		const cast = detailsData.credits.cast ? detailsData.credits.cast : [];
		const genres = detailsData.genres
			? detailsData.genres.map((genre) => genre.name).join(', ')
			: '';
		return {
			...detailsData,
			genres: genres,
			runtime: formatRuntime(detailsData.runtime),
			year: detailsData.release_date.split('-')[0],
			trailerUrl: trailer ? `${youtubeBASE_URL}${trailer.key}` : null,
			czWatchProviderUrl: czProviders,
			backdrop_url: backdrop_url,
			poster_url: poster_url,
			logo_url: logo_url,
			movie_url: URL_PATH + detailsData.id,
			rating: detailsData.vote_average ? detailsData.vote_average : null,
			release_date: formatReleaseDate(czReleaseDate), // Include the CZ release date in the returned object
			cast: cast,
		};
	} catch (error) {
		console.error('Error fetching movie details:', error);
		return null;
	}
}

async function getBasicDetails(movieId, API_KEY) {
	const detailsUrl = `${BASE_URL}/movie/${movieId}?api_key=${API_KEY}`;

	try {
		const detailsResponse = await fetch(detailsUrl);
		const detailsData = await detailsResponse.json();
		const backdrop_url = detailsData.backdrop_path ? IMG_PATH + detailsData.backdrop_path : noImage;
		const poster_url = detailsData.poster_path ? POSTER_PATH + detailsData.poster_path : noImage;
		const year = detailsData.release_date ? detailsData.release_date.split('-')[0] : 'N/A';
		const ratingVote = detailsData.vote_average ? detailsData.vote_average : null;
		const genres = detailsData.genres
			? detailsData.genres.map((genre) => genre.name).join(', ')
			: '';
		return {
			year: year,
			runtime: formatRuntime(detailsData.runtime),
			poster_url: poster_url,
			rating: ratingVote,
			overview: detailsData.overview,
			id: detailsData.id,
			genres: genres,
			backdrop_url: backdrop_url,
			title: detailsData.title,
		};
	} catch (error) {
		console.error('Error fetching movie details:', error);
		return null;
	}
}
async function trendingMoviesDetails(API_KEY) {
	const trendingUrl = `${BASE_URL}/trending/movie/week?api_key=${API_KEY}`;

	try {
		const trendingResponse = await fetch(trendingUrl);
		const trendingData = await trendingResponse.json();
		const movies = trendingData.results;

		const detailedMovies = await Promise.all(
			movies.map((movie) => getBasicDetails(movie.id, API_KEY)),
		);

		return detailedMovies;
	} catch (error) {
		console.error('Error fetching trending movies:', error);
		return [];
	}
}

async function getUpcomingMovies(API_KEY) {
	const UPCOMING_URL = `${BASE_URL}/movie/upcoming?api_key=${API_KEY}&language=en-US&page=1&region=CZ`;

	try {
		const response = await fetch(UPCOMING_URL);
		const data = await response.json();
		const movies = data.results;

		const detailedMovies = await Promise.all(
			movies.map((movie) => fetchMovieDetails(movie.id, API_KEY)),
		);

		return detailedMovies;
	} catch (error) {
		console.error('Error fetching upcoming movies:', error);
	}
}

async function getInCinemaResults(API_KEY) {
	const DICOVER_URL = 'https://api.themoviedb.org/3/discover/movie';
	const currentDate = new Date();
	const startOfMonth = new Date(currentDate.getFullYear(), currentDate.getMonth(), 1);
	const endOfMonth = new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 0);

	const formatDate = (date) => date.toISOString().split('T')[0];
	let page = 1;
	let allResults = [];

	// eslint-disable-next-line no-constant-condition
	while (true) {
		const criteria = new URLSearchParams({
			api_key: API_KEY,
			include_adult: false,
			page: page,
			region: 'CZ',
			'release_date.gte': formatDate(startOfMonth),
			'release_date.lte': formatDate(endOfMonth),
			with_release_type: '3|2',
		});

		const response = await fetch(`${DICOVER_URL}?${criteria.toString()}`);

		if (response.ok) {
			const data = await response.json();
			const moviesWithDetails = await Promise.all(
				data.results.map((movie) => getBasicDetails(movie.id, API_KEY)),
			);
			allResults = [...allResults, ...moviesWithDetails];

			if (page < data.total_pages) {
				page += 1;
			} else {
				break;
			}
		} else {
			console.error(`Error: Unable to fetch upcoming movies. Status Code: ${response.status}`);
			break;
		}
	}

	return allResults;
}

/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
function*o(o,f){if(void 0!==o){let i=0;for(const t of o)yield f(t,i++);}}

function renderMovies(movies, showMovieDetailsDialog, nodeElement, kodilib) {
	return o(
		movies,
		(movie) => x`
			<div class="item movies-wrapper" id="${movie.id}">
				<div class="poster">
					<div class="quality">${movie.rating ? movie.rating.toFixed(1) : 'N/A'}</div>
					<a @click="${() => showMovieDetailsDialog(movie)}">
						<img
							class="lazyload"
							loading="lazy"
							src="${movie.poster_url}"
							data-src="${movie.poster_url}"
							alt="${movie.title}" />
					</a>
					${kodilib && movie.strm_url ? x`<div class="kodi-icon"></div>` : T}
				</div>
				<div class="meta ${movie.strm_url ? 'active' : ''}">
					<div class="meta-year-runtime">
						<span>${movie.year}</span>
						<span>${movie.runtime}</span>
					</div>
					<div>
						<a @click="${() => showMovieDetailsDialog(movie)}">${movie.title}</a>
					</div>
				</div>
				<div
					class="action ${movie.strm_url ? 'active' : ''}"
					@click="${() => playMedia(nodeElement, movie.strm_url)}">
					<a class="watchnow btn btn-primary"> <i>${ICON.PLAY}</i> Watch Now </a>
				</div>
			</div>
		`,
	);
}

function renderKodiMovies(movies, showMovieDetailsDialog) {
	return o(
		movies,
		(movie) => x`
			<div class="item kodi-wraper" id="kodi-movie-item">
				<div class="kodi-box" @click="${() => showMovieDetailsDialog(movie)}">
					<div class="kodi-image">
						<img
							class="lazyload"
							loading="lazy"
							src="${movie.poster_url}"
							data-src="${movie.poster_url}"
							alt="${movie.title}" />
					</div>

					<div class="kodi-meta">
						<p>${movie.title}</p>
						<div class="kodi-meta-year-runtime">
							<p>${movie.year}</p>
							<p>${movie.runtime}</p>
						</div>
					</div>
				</div>
			</div>
		`,
	);
}
function renderFeatured(movies, showMovieDetailsDialog) {
	const moviesList = o(
		movies,
		(movie) =>
			x` <div
				class="swiper-slide lazyload"
				style="background-image: url(${movie.backdrop_url});"
				data-src="${movie.backdrop_url}">
				<div class="container">
					<div class="slide-wrapper">
						<div class="info">
							<div class="start">
								<h2 class="name">${movie.title}</h2>
								<div class="meta">
									<div class="quality"><i>${ICON.STAR}</i> ${movie.rating.toFixed(1)}</div>
									<span class="rating">${movie.year}</span>
									<span>${movie.runtime}</span>
									<span class="genres"> ${movie.genres} </span>
								</div>
								<div class="desc end">${movie.overview}</div>
							</div>
						</div>
						<div class="actions">
							<div class="start">
								<a
									@click="${() => showMovieDetailsDialog(movie)}"
									class="watchnow btn btn-lg btn-primary">
									<i>${ICON.PLAY}</i> Show more
								</a>
							</div>
						</div>
					</div>
				</div>
			</div>`,
	);

	const scrollBarNavi = x`
		<div class="swiper-scrollbar"></div>
		<div class="slide-navi">
			<div
				class="swiper-button-prev"
				role="button"
				aria-label="Previous slide"
				aria-disabled="false"></div>
			<div
				class="swiper-button-next"
				role="button"
				aria-label="Next slide"
				aria-disabled="false"></div>
		</div>
	`;

	return x`
		<div class="swiper-wrapper">${moviesList}</div>
		<div class="container">${scrollBarNavi}</div>
	`;
}

function renderTrending(movies, showMovieDetailsDialog, headerTitle) {
	const slides = o(
		movies,
		(movie) =>
			x`<div class="swiper-slide">
				<a
					@click="${() => showMovieDetailsDialog(movie)}"
					class="lazyload"
					loading="lazy"
					style="background-image: url('${movie.backdrop_url}');"
					data-src="${movie.backdrop_url}">
					<span>${movie.strm_url ? ICON.LIBRARY : ICON.ARROW_UP_RIGHT}</span>
					<div class="title">${movie.title}</div>
					<div class="genre">
						${movie.genres.split(', ').map((genre) => x`<span>${genre}</span>`)}
					</div>
				</a>
			</div>`,
	);
	return x` <div class="container">
		<div class="head">
			<h5>🔥 ${headerTitle} 🔥</h5>
		</div>
		<div class="body">
			<div class="swiper" id="trend">
				<div class="swiper-wrapper">${slides}</div>
			</div>
			<div class="trending-navi">
				<div
					class="trending-button-next"
					role="button"
					aria-label="Next slide"
					aria-disabled="false"></div>
				<div
					class="trending-button-prev"
					role="button"
					aria-label="Previous slide"
					aria-disabled="false"></div>
			</div>
		</div>
		<div class="foot">
			<div class="trending-pagination swiper-pagination"></div>
		</div>
	</div>`;
}

function renderMovieDialog(movie) {
	const movieDialogWrapper = document.createElement('div');
	movieDialogWrapper.classList.add('movie-dialog-wrapper');

	const ICON_PLAY = '&#xF4F2;';

	const movieRating = movie.rating ? movie.rating.toFixed(1) : 'N/A';

	const movie_strm = movie.strm_url ? movie.strm_url : '';

	// Check if the 'credits' property exists in the movie object
	const cast = movie.cast ? movie.cast : [];

	const imageBaseURL = 'https://image.tmdb.org/t/p/original/';

	const castHTML = cast
		.map((castMember) => {
			const profile_path = castMember.profile_path;
			const imagePath =
				profile_path && profile_path.trim() !== '' && profile_path !== null
					? profile_path.startsWith('http') || profile_path.startsWith('https')
						? profile_path
						: imageBaseURL + profile_path
					: noImage;
			return `
        <div class="cast">
            <button class="cast-button">
                <div class="cast-wrapper">
                    <div class="cast-box">
                        <div class="cast-image">
                            <img src="${imagePath}" loading="lazy" class="lazy" alt="${castMember.name}" />
                        </div>
                        <div class="cast-name">
                            <p>${castMember.name}</p>
                            <p>${castMember.character}</p>
                        </div>
                    </div>
                </div>
            </button>
        </div>
    `;
		})
		.join('');

	/* --------------- Dialog body container for the movie details -------------- */

	movieDialogWrapper.innerHTML = `
			<div class="header-wrapper">
				<div class="content">

					<div class="background"></div>
					<img src="${movie.backdrop_url}" class="lazy backdrop" loading="lazy" alt="${movie.title}" />
					${movie.logo_url ? `<div class="logo"><img src="${movie.logo_url}" class="lazy" alt="${movie.title}" /></div>` : ''}
					<div class="title">
						<p class="header-title">${movie.title}</p>
						<p>${movie.tagline}</p>
						${movie_strm ? `<button class="play" id="watchNowButton"><i>${ICON_PLAY} </i> WATCH NOW </button>` : ''}
					</div>
				</div>
			</div>
			<div class="body">
				<div class="rating">
					<label> Viewers rating: ${movieRating}</label>
					<div class="meta">
						<label>${movie.year}</label>
						<label>${movie.runtime}</label>
					</div>
					<div class="meta"><label>${movie.genres}</label></div>
				</div>
				<p class="header">Overview</p>
				<div class="details-info">
					${
						movie.trailerUrl
							? `<div class="trailer-wrapper">
								<div class="trailer">
									<iframe width="100%" height="100%" src="${movie.trailerUrl}" frameborder="0" allowfullscreen></iframe>
								</div>
							</div>`
							: ''
					}
					<div class="overview-info ${!movie.trailerUrl ? 'full' : ''}">
						<p class="overview">${movie.overview}</p>
					</div>
				</div>
				${
					castHTML
						? `<p class="header">Credits</p>
								<div class="credits_scroller">
									<div class="credits-info">
										${castHTML}
										</div>
									<div class="scroller is_fading"></div>
								</div>`
						: ''
				}
			</div>
	`;

	return movieDialogWrapper;
}

function renderSidebarMovies(movies, showMovieDetailsDialog, title, useKodiData = true) {
	const sidebarMovies = o(
		movies,
		(movie, index) => x`
			<a class="item" @click="${() => showMovieDetailsDialog(movie)}">
				<span class="num"
					>${useKodiData ? (movie.rating ? movie.rating.toFixed(1) : 'N/A') : index + 1}</span
				>
				<div class="poster">
					<div>
						<img
							class="lazyload"
							loading="lazy"
							src="${movie.poster_url}"
							data-src="${movie.poster_url}"
							alt="${movie.title}" />
					</div>
				</div>
				<div class="info">
					<div>
						<span>Movie</span>
						<span>${movie.release_date}</span>
						<span>${movie.runtime}</span>
					</div>
					<div class="name">${movie.title}</div>
				</div>
			</a>
		`,
	);

	return x`
		<div class="head">
			<div class="start">
				<h2 class="title"><i>${ICON.CALENDAR}</i> ${title}</h2>
			</div>
		</div>
		<div class="body tab_container">
			<div id="tab1" class="tab_content scaff top9 items">${sidebarMovies}</div>
		</div>
	`;
}

function renderSearchResults(
	nodeElememt,
	kodiSearchResults,
	tmdbSearchResults,
	searchStr,
	resultsFound,
	renderTmdbMovies,
	renderKodiMovies,
) {
	const searchTerm = searchStr ? searchStr : '';
	return x` <section class="container">
		<div class="head">
			<div class="start">
				<h2 class="title"><i>${ICON.SEARCH}</i> ${resultsFound} results for '${searchTerm}'</h2>
			</div>
			<div class="end">
				<a class="btn btn-sm btn-outline-body-color" @click="${(e) => resetSearch(nodeElememt)}">
					Close <i>${ICON.CLOSE}</i>
				</a>
			</div>
		</div>
		<div class="search-results">
			${kodiSearchResults.length > 0
				? x` <div class="tab-content">
						<span><i>${ICON.MOVIE}</i> Kodi Movies</span>
						<div class="movies items">${renderKodiMovies}</div>
					</div>`
				: ''}
			${tmdbSearchResults.length > 0
				? x` <div class="tab-content">
						<span><i>${ICON.MOVIE}</i> TMDb Movies</span>
						<div class="movies items">${renderTmdbMovies}</div>
					</div>`
				: ''}
		</div>
	</section>`;
}

function renderLoader() {
	return x` <style>
			.loader {
				position: fixed;
				left: 50%;
				top: 50%;
				z-index: 1;
				width: 50px;
				aspect-ratio: 1;
				border-radius: 50%;
				background:
					radial-gradient(farthest-side, var(--primary) 94%, #0000) top/8px 8px no-repeat,
					conic-gradient(#0000 30%, var(--primary));
				-webkit-mask: radial-gradient(farthest-side, #0000 calc(100% - 8px), #000 0);
				mask: radial-gradient(farthest-side, #0000 calc(100% - 8px), #000 0);
				animation: l13 1s infinite linear;
			}
			@keyframes l13 {
				100% {
					transform: rotate(1turn);
				}
			}
		</style>
		<div class="loader"></div>`;
}

function renderSearchBar({
	search,
	toggleSearchBar,
	performSearch,
	updateSearch,
	resetSearch,
}) {
	return x`
		<div class="search-box">
			<button class="search-toggler" aria-label="Search movies..." @click="${toggleSearchBar}">
				<i class="search-icon">${ICON.SEARCH}</i>
			</button>
			<div class="search-wrap">
				<form
					role="form"
					id="search"
					class="d-flex align-s-center"
					@submit="${performSearch}"
					autocomplete="off">
					<input
						type="text"
						aria-label="Search movies..."
						placeholder="Search movies..."
						required=""
						.value="${search}"
						@input="${updateSearch}" />
					${search.length > 0
						? x`<button type="button" @click="${resetSearch}">
								<i class="search-icon">${ICON.CLOSE}</i>
							</button>`
						: x`<button type="submit" aria-label="Submit">
								<i class="search-icon">${ICON.SEARCH}</i>
							</button>`}
				</form>
			</div>
		</div>
	`;
}

/* ---------------------------- TOAST NOTIFICATION --------------------------- */

function renderToast() {
	return x`
		<div id="toast">
			<div id="img">
				<svg
					xmlns="http://www.w3.org/2000/svg"
					width="16"
					height="16"
					fill="var(--primary)"
					class="bi bi-exclamation-circle-fill"
					viewBox="0 0 16 16">
					<path
						d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0M8 4a.905.905 0 0 0-.9.995l.35 3.507a.552.552 0 0 0 1.1 0l.35-3.507A.905.905 0 0 0 8 4m.002 6a1 1 0 1 0 0 2 1 1 0 0 0 0-2" />
				</svg>
			</div>
			<div id="desc">Notification search results</div>
		</div>
	`;
}

/* ---------------------------- TOAST NOTIFICATION --------------------------- */

function launch_toast(root, desc) {
	const toastEl = root.querySelector('#toast');
	const descEl = root.querySelector('#desc');

	if (toastEl) {
		descEl.innerHTML = desc;
		toastEl.classList.add('show');
		setTimeout(() => {
			toastEl.classList.remove('show');
		}, 5000);
	} else {
		console.error('Toast element not found');
	}
}

/**
 * SSR Window 4.0.2
 * Better handling for window object in SSR environment
 * https://github.com/nolimits4web/ssr-window
 *
 * Copyright 2021, Vladimir Kharlampidi
 *
 * Licensed under MIT
 *
 * Released on: December 13, 2021
 */
/* eslint-disable no-param-reassign */
function isObject$1(obj) {
  return obj !== null && typeof obj === 'object' && 'constructor' in obj && obj.constructor === Object;
}
function extend$1(target, src) {
  if (target === void 0) {
    target = {};
  }
  if (src === void 0) {
    src = {};
  }
  Object.keys(src).forEach(key => {
    if (typeof target[key] === 'undefined') target[key] = src[key];else if (isObject$1(src[key]) && isObject$1(target[key]) && Object.keys(src[key]).length > 0) {
      extend$1(target[key], src[key]);
    }
  });
}
const ssrDocument = {
  body: {},
  addEventListener() {},
  removeEventListener() {},
  activeElement: {
    blur() {},
    nodeName: ''
  },
  querySelector() {
    return null;
  },
  querySelectorAll() {
    return [];
  },
  getElementById() {
    return null;
  },
  createEvent() {
    return {
      initEvent() {}
    };
  },
  createElement() {
    return {
      children: [],
      childNodes: [],
      style: {},
      setAttribute() {},
      getElementsByTagName() {
        return [];
      }
    };
  },
  createElementNS() {
    return {};
  },
  importNode() {
    return null;
  },
  location: {
    hash: '',
    host: '',
    hostname: '',
    href: '',
    origin: '',
    pathname: '',
    protocol: '',
    search: ''
  }
};
function getDocument() {
  const doc = typeof document !== 'undefined' ? document : {};
  extend$1(doc, ssrDocument);
  return doc;
}
const ssrWindow = {
  document: ssrDocument,
  navigator: {
    userAgent: ''
  },
  location: {
    hash: '',
    host: '',
    hostname: '',
    href: '',
    origin: '',
    pathname: '',
    protocol: '',
    search: ''
  },
  history: {
    replaceState() {},
    pushState() {},
    go() {},
    back() {}
  },
  CustomEvent: function CustomEvent() {
    return this;
  },
  addEventListener() {},
  removeEventListener() {},
  getComputedStyle() {
    return {
      getPropertyValue() {
        return '';
      }
    };
  },
  Image() {},
  Date() {},
  screen: {},
  setTimeout() {},
  clearTimeout() {},
  matchMedia() {
    return {};
  },
  requestAnimationFrame(callback) {
    if (typeof setTimeout === 'undefined') {
      callback();
      return null;
    }
    return setTimeout(callback, 0);
  },
  cancelAnimationFrame(id) {
    if (typeof setTimeout === 'undefined') {
      return;
    }
    clearTimeout(id);
  }
};
function getWindow() {
  const win = typeof window !== 'undefined' ? window : {};
  extend$1(win, ssrWindow);
  return win;
}

function classesToTokens(classes) {
  if (classes === void 0) {
    classes = '';
  }
  return classes.trim().split(' ').filter(c => !!c.trim());
}

function deleteProps(obj) {
  const object = obj;
  Object.keys(object).forEach(key => {
    try {
      object[key] = null;
    } catch (e) {
      // no getter for object
    }
    try {
      delete object[key];
    } catch (e) {
      // something got wrong
    }
  });
}
function nextTick(callback, delay) {
  if (delay === void 0) {
    delay = 0;
  }
  return setTimeout(callback, delay);
}
function now() {
  return Date.now();
}
function getComputedStyle$1(el) {
  const window = getWindow();
  let style;
  if (window.getComputedStyle) {
    style = window.getComputedStyle(el, null);
  }
  if (!style && el.currentStyle) {
    style = el.currentStyle;
  }
  if (!style) {
    style = el.style;
  }
  return style;
}
function getTranslate(el, axis) {
  if (axis === void 0) {
    axis = 'x';
  }
  const window = getWindow();
  let matrix;
  let curTransform;
  let transformMatrix;
  const curStyle = getComputedStyle$1(el);
  if (window.WebKitCSSMatrix) {
    curTransform = curStyle.transform || curStyle.webkitTransform;
    if (curTransform.split(',').length > 6) {
      curTransform = curTransform.split(', ').map(a => a.replace(',', '.')).join(', ');
    }
    // Some old versions of Webkit choke when 'none' is passed; pass
    // empty string instead in this case
    transformMatrix = new window.WebKitCSSMatrix(curTransform === 'none' ? '' : curTransform);
  } else {
    transformMatrix = curStyle.MozTransform || curStyle.OTransform || curStyle.MsTransform || curStyle.msTransform || curStyle.transform || curStyle.getPropertyValue('transform').replace('translate(', 'matrix(1, 0, 0, 1,');
    matrix = transformMatrix.toString().split(',');
  }
  if (axis === 'x') {
    // Latest Chrome and webkits Fix
    if (window.WebKitCSSMatrix) curTransform = transformMatrix.m41;
    // Crazy IE10 Matrix
    else if (matrix.length === 16) curTransform = parseFloat(matrix[12]);
    // Normal Browsers
    else curTransform = parseFloat(matrix[4]);
  }
  if (axis === 'y') {
    // Latest Chrome and webkits Fix
    if (window.WebKitCSSMatrix) curTransform = transformMatrix.m42;
    // Crazy IE10 Matrix
    else if (matrix.length === 16) curTransform = parseFloat(matrix[13]);
    // Normal Browsers
    else curTransform = parseFloat(matrix[5]);
  }
  return curTransform || 0;
}
function isObject(o) {
  return typeof o === 'object' && o !== null && o.constructor && Object.prototype.toString.call(o).slice(8, -1) === 'Object';
}
function isNode(node) {
  // eslint-disable-next-line
  if (typeof window !== 'undefined' && typeof window.HTMLElement !== 'undefined') {
    return node instanceof HTMLElement;
  }
  return node && (node.nodeType === 1 || node.nodeType === 11);
}
function extend() {
  const to = Object(arguments.length <= 0 ? undefined : arguments[0]);
  const noExtend = ['__proto__', 'constructor', 'prototype'];
  for (let i = 1; i < arguments.length; i += 1) {
    const nextSource = i < 0 || arguments.length <= i ? undefined : arguments[i];
    if (nextSource !== undefined && nextSource !== null && !isNode(nextSource)) {
      const keysArray = Object.keys(Object(nextSource)).filter(key => noExtend.indexOf(key) < 0);
      for (let nextIndex = 0, len = keysArray.length; nextIndex < len; nextIndex += 1) {
        const nextKey = keysArray[nextIndex];
        const desc = Object.getOwnPropertyDescriptor(nextSource, nextKey);
        if (desc !== undefined && desc.enumerable) {
          if (isObject(to[nextKey]) && isObject(nextSource[nextKey])) {
            if (nextSource[nextKey].__swiper__) {
              to[nextKey] = nextSource[nextKey];
            } else {
              extend(to[nextKey], nextSource[nextKey]);
            }
          } else if (!isObject(to[nextKey]) && isObject(nextSource[nextKey])) {
            to[nextKey] = {};
            if (nextSource[nextKey].__swiper__) {
              to[nextKey] = nextSource[nextKey];
            } else {
              extend(to[nextKey], nextSource[nextKey]);
            }
          } else {
            to[nextKey] = nextSource[nextKey];
          }
        }
      }
    }
  }
  return to;
}
function setCSSProperty(el, varName, varValue) {
  el.style.setProperty(varName, varValue);
}
function animateCSSModeScroll(_ref) {
  let {
    swiper,
    targetPosition,
    side
  } = _ref;
  const window = getWindow();
  const startPosition = -swiper.translate;
  let startTime = null;
  let time;
  const duration = swiper.params.speed;
  swiper.wrapperEl.style.scrollSnapType = 'none';
  window.cancelAnimationFrame(swiper.cssModeFrameID);
  const dir = targetPosition > startPosition ? 'next' : 'prev';
  const isOutOfBound = (current, target) => {
    return dir === 'next' && current >= target || dir === 'prev' && current <= target;
  };
  const animate = () => {
    time = new Date().getTime();
    if (startTime === null) {
      startTime = time;
    }
    const progress = Math.max(Math.min((time - startTime) / duration, 1), 0);
    const easeProgress = 0.5 - Math.cos(progress * Math.PI) / 2;
    let currentPosition = startPosition + easeProgress * (targetPosition - startPosition);
    if (isOutOfBound(currentPosition, targetPosition)) {
      currentPosition = targetPosition;
    }
    swiper.wrapperEl.scrollTo({
      [side]: currentPosition
    });
    if (isOutOfBound(currentPosition, targetPosition)) {
      swiper.wrapperEl.style.overflow = 'hidden';
      swiper.wrapperEl.style.scrollSnapType = '';
      setTimeout(() => {
        swiper.wrapperEl.style.overflow = '';
        swiper.wrapperEl.scrollTo({
          [side]: currentPosition
        });
      });
      window.cancelAnimationFrame(swiper.cssModeFrameID);
      return;
    }
    swiper.cssModeFrameID = window.requestAnimationFrame(animate);
  };
  animate();
}
function getSlideTransformEl(slideEl) {
  return slideEl.querySelector('.swiper-slide-transform') || slideEl.shadowRoot && slideEl.shadowRoot.querySelector('.swiper-slide-transform') || slideEl;
}
function elementChildren(element, selector) {
  if (selector === void 0) {
    selector = '';
  }
  return [...element.children].filter(el => el.matches(selector));
}
function showWarning(text) {
  try {
    console.warn(text);
    return;
  } catch (err) {
    // err
  }
}
function createElement(tag, classes) {
  if (classes === void 0) {
    classes = [];
  }
  const el = document.createElement(tag);
  el.classList.add(...(Array.isArray(classes) ? classes : classesToTokens(classes)));
  return el;
}
function elementOffset(el) {
  const window = getWindow();
  const document = getDocument();
  const box = el.getBoundingClientRect();
  const body = document.body;
  const clientTop = el.clientTop || body.clientTop || 0;
  const clientLeft = el.clientLeft || body.clientLeft || 0;
  const scrollTop = el === window ? window.scrollY : el.scrollTop;
  const scrollLeft = el === window ? window.scrollX : el.scrollLeft;
  return {
    top: box.top + scrollTop - clientTop,
    left: box.left + scrollLeft - clientLeft
  };
}
function elementPrevAll(el, selector) {
  const prevEls = [];
  while (el.previousElementSibling) {
    const prev = el.previousElementSibling; // eslint-disable-line
    if (selector) {
      if (prev.matches(selector)) prevEls.push(prev);
    } else prevEls.push(prev);
    el = prev;
  }
  return prevEls;
}
function elementNextAll(el, selector) {
  const nextEls = [];
  while (el.nextElementSibling) {
    const next = el.nextElementSibling; // eslint-disable-line
    if (selector) {
      if (next.matches(selector)) nextEls.push(next);
    } else nextEls.push(next);
    el = next;
  }
  return nextEls;
}
function elementStyle(el, prop) {
  const window = getWindow();
  return window.getComputedStyle(el, null).getPropertyValue(prop);
}
function elementIndex(el) {
  let child = el;
  let i;
  if (child) {
    i = 0;
    // eslint-disable-next-line
    while ((child = child.previousSibling) !== null) {
      if (child.nodeType === 1) i += 1;
    }
    return i;
  }
  return undefined;
}
function elementParents(el, selector) {
  const parents = []; // eslint-disable-line
  let parent = el.parentElement; // eslint-disable-line
  while (parent) {
    if (selector) {
      if (parent.matches(selector)) parents.push(parent);
    } else {
      parents.push(parent);
    }
    parent = parent.parentElement;
  }
  return parents;
}
function elementTransitionEnd(el, callback) {
  function fireCallBack(e) {
    if (e.target !== el) return;
    callback.call(el, e);
    el.removeEventListener('transitionend', fireCallBack);
  }
  if (callback) {
    el.addEventListener('transitionend', fireCallBack);
  }
}
function elementOuterSize(el, size, includeMargins) {
  const window = getWindow();
  {
    return el[size === 'width' ? 'offsetWidth' : 'offsetHeight'] + parseFloat(window.getComputedStyle(el, null).getPropertyValue(size === 'width' ? 'margin-right' : 'margin-top')) + parseFloat(window.getComputedStyle(el, null).getPropertyValue(size === 'width' ? 'margin-left' : 'margin-bottom'));
  }
}
function makeElementsArray(el) {
  return (Array.isArray(el) ? el : [el]).filter(e => !!e);
}

let support;
function calcSupport() {
  const window = getWindow();
  const document = getDocument();
  return {
    smoothScroll: document.documentElement && document.documentElement.style && 'scrollBehavior' in document.documentElement.style,
    touch: !!('ontouchstart' in window || window.DocumentTouch && document instanceof window.DocumentTouch)
  };
}
function getSupport() {
  if (!support) {
    support = calcSupport();
  }
  return support;
}

let deviceCached;
function calcDevice(_temp) {
  let {
    userAgent
  } = _temp === void 0 ? {} : _temp;
  const support = getSupport();
  const window = getWindow();
  const platform = window.navigator.platform;
  const ua = userAgent || window.navigator.userAgent;
  const device = {
    ios: false,
    android: false
  };
  const screenWidth = window.screen.width;
  const screenHeight = window.screen.height;
  const android = ua.match(/(Android);?[\s\/]+([\d.]+)?/); // eslint-disable-line
  let ipad = ua.match(/(iPad).*OS\s([\d_]+)/);
  const ipod = ua.match(/(iPod)(.*OS\s([\d_]+))?/);
  const iphone = !ipad && ua.match(/(iPhone\sOS|iOS)\s([\d_]+)/);
  const windows = platform === 'Win32';
  let macos = platform === 'MacIntel';

  // iPadOs 13 fix
  const iPadScreens = ['1024x1366', '1366x1024', '834x1194', '1194x834', '834x1112', '1112x834', '768x1024', '1024x768', '820x1180', '1180x820', '810x1080', '1080x810'];
  if (!ipad && macos && support.touch && iPadScreens.indexOf(`${screenWidth}x${screenHeight}`) >= 0) {
    ipad = ua.match(/(Version)\/([\d.]+)/);
    if (!ipad) ipad = [0, 1, '13_0_0'];
    macos = false;
  }

  // Android
  if (android && !windows) {
    device.os = 'android';
    device.android = true;
  }
  if (ipad || iphone || ipod) {
    device.os = 'ios';
    device.ios = true;
  }

  // Export object
  return device;
}
function getDevice(overrides) {
  if (overrides === void 0) {
    overrides = {};
  }
  if (!deviceCached) {
    deviceCached = calcDevice(overrides);
  }
  return deviceCached;
}

let browser;
function calcBrowser() {
  const window = getWindow();
  const device = getDevice();
  let needPerspectiveFix = false;
  function isSafari() {
    const ua = window.navigator.userAgent.toLowerCase();
    return ua.indexOf('safari') >= 0 && ua.indexOf('chrome') < 0 && ua.indexOf('android') < 0;
  }
  if (isSafari()) {
    const ua = String(window.navigator.userAgent);
    if (ua.includes('Version/')) {
      const [major, minor] = ua.split('Version/')[1].split(' ')[0].split('.').map(num => Number(num));
      needPerspectiveFix = major < 16 || major === 16 && minor < 2;
    }
  }
  const isWebView = /(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i.test(window.navigator.userAgent);
  const isSafariBrowser = isSafari();
  const need3dFix = isSafariBrowser || isWebView && device.ios;
  return {
    isSafari: needPerspectiveFix || isSafariBrowser,
    needPerspectiveFix,
    need3dFix,
    isWebView
  };
}
function getBrowser() {
  if (!browser) {
    browser = calcBrowser();
  }
  return browser;
}

function Resize(_ref) {
  let {
    swiper,
    on,
    emit
  } = _ref;
  const window = getWindow();
  let observer = null;
  let animationFrame = null;
  const resizeHandler = () => {
    if (!swiper || swiper.destroyed || !swiper.initialized) return;
    emit('beforeResize');
    emit('resize');
  };
  const createObserver = () => {
    if (!swiper || swiper.destroyed || !swiper.initialized) return;
    observer = new ResizeObserver(entries => {
      animationFrame = window.requestAnimationFrame(() => {
        const {
          width,
          height
        } = swiper;
        let newWidth = width;
        let newHeight = height;
        entries.forEach(_ref2 => {
          let {
            contentBoxSize,
            contentRect,
            target
          } = _ref2;
          if (target && target !== swiper.el) return;
          newWidth = contentRect ? contentRect.width : (contentBoxSize[0] || contentBoxSize).inlineSize;
          newHeight = contentRect ? contentRect.height : (contentBoxSize[0] || contentBoxSize).blockSize;
        });
        if (newWidth !== width || newHeight !== height) {
          resizeHandler();
        }
      });
    });
    observer.observe(swiper.el);
  };
  const removeObserver = () => {
    if (animationFrame) {
      window.cancelAnimationFrame(animationFrame);
    }
    if (observer && observer.unobserve && swiper.el) {
      observer.unobserve(swiper.el);
      observer = null;
    }
  };
  const orientationChangeHandler = () => {
    if (!swiper || swiper.destroyed || !swiper.initialized) return;
    emit('orientationchange');
  };
  on('init', () => {
    if (swiper.params.resizeObserver && typeof window.ResizeObserver !== 'undefined') {
      createObserver();
      return;
    }
    window.addEventListener('resize', resizeHandler);
    window.addEventListener('orientationchange', orientationChangeHandler);
  });
  on('destroy', () => {
    removeObserver();
    window.removeEventListener('resize', resizeHandler);
    window.removeEventListener('orientationchange', orientationChangeHandler);
  });
}

function Observer(_ref) {
  let {
    swiper,
    extendParams,
    on,
    emit
  } = _ref;
  const observers = [];
  const window = getWindow();
  const attach = function (target, options) {
    if (options === void 0) {
      options = {};
    }
    const ObserverFunc = window.MutationObserver || window.WebkitMutationObserver;
    const observer = new ObserverFunc(mutations => {
      // The observerUpdate event should only be triggered
      // once despite the number of mutations.  Additional
      // triggers are redundant and are very costly
      if (swiper.__preventObserver__) return;
      if (mutations.length === 1) {
        emit('observerUpdate', mutations[0]);
        return;
      }
      const observerUpdate = function observerUpdate() {
        emit('observerUpdate', mutations[0]);
      };
      if (window.requestAnimationFrame) {
        window.requestAnimationFrame(observerUpdate);
      } else {
        window.setTimeout(observerUpdate, 0);
      }
    });
    observer.observe(target, {
      attributes: typeof options.attributes === 'undefined' ? true : options.attributes,
      childList: typeof options.childList === 'undefined' ? true : options.childList,
      characterData: typeof options.characterData === 'undefined' ? true : options.characterData
    });
    observers.push(observer);
  };
  const init = () => {
    if (!swiper.params.observer) return;
    if (swiper.params.observeParents) {
      const containerParents = elementParents(swiper.hostEl);
      for (let i = 0; i < containerParents.length; i += 1) {
        attach(containerParents[i]);
      }
    }
    // Observe container
    attach(swiper.hostEl, {
      childList: swiper.params.observeSlideChildren
    });

    // Observe wrapper
    attach(swiper.wrapperEl, {
      attributes: false
    });
  };
  const destroy = () => {
    observers.forEach(observer => {
      observer.disconnect();
    });
    observers.splice(0, observers.length);
  };
  extendParams({
    observer: false,
    observeParents: false,
    observeSlideChildren: false
  });
  on('init', init);
  on('destroy', destroy);
}

/* eslint-disable no-underscore-dangle */

var eventsEmitter = {
  on(events, handler, priority) {
    const self = this;
    if (!self.eventsListeners || self.destroyed) return self;
    if (typeof handler !== 'function') return self;
    const method = priority ? 'unshift' : 'push';
    events.split(' ').forEach(event => {
      if (!self.eventsListeners[event]) self.eventsListeners[event] = [];
      self.eventsListeners[event][method](handler);
    });
    return self;
  },
  once(events, handler, priority) {
    const self = this;
    if (!self.eventsListeners || self.destroyed) return self;
    if (typeof handler !== 'function') return self;
    function onceHandler() {
      self.off(events, onceHandler);
      if (onceHandler.__emitterProxy) {
        delete onceHandler.__emitterProxy;
      }
      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }
      handler.apply(self, args);
    }
    onceHandler.__emitterProxy = handler;
    return self.on(events, onceHandler, priority);
  },
  onAny(handler, priority) {
    const self = this;
    if (!self.eventsListeners || self.destroyed) return self;
    if (typeof handler !== 'function') return self;
    const method = priority ? 'unshift' : 'push';
    if (self.eventsAnyListeners.indexOf(handler) < 0) {
      self.eventsAnyListeners[method](handler);
    }
    return self;
  },
  offAny(handler) {
    const self = this;
    if (!self.eventsListeners || self.destroyed) return self;
    if (!self.eventsAnyListeners) return self;
    const index = self.eventsAnyListeners.indexOf(handler);
    if (index >= 0) {
      self.eventsAnyListeners.splice(index, 1);
    }
    return self;
  },
  off(events, handler) {
    const self = this;
    if (!self.eventsListeners || self.destroyed) return self;
    if (!self.eventsListeners) return self;
    events.split(' ').forEach(event => {
      if (typeof handler === 'undefined') {
        self.eventsListeners[event] = [];
      } else if (self.eventsListeners[event]) {
        self.eventsListeners[event].forEach((eventHandler, index) => {
          if (eventHandler === handler || eventHandler.__emitterProxy && eventHandler.__emitterProxy === handler) {
            self.eventsListeners[event].splice(index, 1);
          }
        });
      }
    });
    return self;
  },
  emit() {
    const self = this;
    if (!self.eventsListeners || self.destroyed) return self;
    if (!self.eventsListeners) return self;
    let events;
    let data;
    let context;
    for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
      args[_key2] = arguments[_key2];
    }
    if (typeof args[0] === 'string' || Array.isArray(args[0])) {
      events = args[0];
      data = args.slice(1, args.length);
      context = self;
    } else {
      events = args[0].events;
      data = args[0].data;
      context = args[0].context || self;
    }
    data.unshift(context);
    const eventsArray = Array.isArray(events) ? events : events.split(' ');
    eventsArray.forEach(event => {
      if (self.eventsAnyListeners && self.eventsAnyListeners.length) {
        self.eventsAnyListeners.forEach(eventHandler => {
          eventHandler.apply(context, [event, ...data]);
        });
      }
      if (self.eventsListeners && self.eventsListeners[event]) {
        self.eventsListeners[event].forEach(eventHandler => {
          eventHandler.apply(context, data);
        });
      }
    });
    return self;
  }
};

function updateSize() {
  const swiper = this;
  let width;
  let height;
  const el = swiper.el;
  if (typeof swiper.params.width !== 'undefined' && swiper.params.width !== null) {
    width = swiper.params.width;
  } else {
    width = el.clientWidth;
  }
  if (typeof swiper.params.height !== 'undefined' && swiper.params.height !== null) {
    height = swiper.params.height;
  } else {
    height = el.clientHeight;
  }
  if (width === 0 && swiper.isHorizontal() || height === 0 && swiper.isVertical()) {
    return;
  }

  // Subtract paddings
  width = width - parseInt(elementStyle(el, 'padding-left') || 0, 10) - parseInt(elementStyle(el, 'padding-right') || 0, 10);
  height = height - parseInt(elementStyle(el, 'padding-top') || 0, 10) - parseInt(elementStyle(el, 'padding-bottom') || 0, 10);
  if (Number.isNaN(width)) width = 0;
  if (Number.isNaN(height)) height = 0;
  Object.assign(swiper, {
    width,
    height,
    size: swiper.isHorizontal() ? width : height
  });
}

function updateSlides() {
  const swiper = this;
  function getDirectionPropertyValue(node, label) {
    return parseFloat(node.getPropertyValue(swiper.getDirectionLabel(label)) || 0);
  }
  const params = swiper.params;
  const {
    wrapperEl,
    slidesEl,
    size: swiperSize,
    rtlTranslate: rtl,
    wrongRTL
  } = swiper;
  const isVirtual = swiper.virtual && params.virtual.enabled;
  const previousSlidesLength = isVirtual ? swiper.virtual.slides.length : swiper.slides.length;
  const slides = elementChildren(slidesEl, `.${swiper.params.slideClass}, swiper-slide`);
  const slidesLength = isVirtual ? swiper.virtual.slides.length : slides.length;
  let snapGrid = [];
  const slidesGrid = [];
  const slidesSizesGrid = [];
  let offsetBefore = params.slidesOffsetBefore;
  if (typeof offsetBefore === 'function') {
    offsetBefore = params.slidesOffsetBefore.call(swiper);
  }
  let offsetAfter = params.slidesOffsetAfter;
  if (typeof offsetAfter === 'function') {
    offsetAfter = params.slidesOffsetAfter.call(swiper);
  }
  const previousSnapGridLength = swiper.snapGrid.length;
  const previousSlidesGridLength = swiper.slidesGrid.length;
  let spaceBetween = params.spaceBetween;
  let slidePosition = -offsetBefore;
  let prevSlideSize = 0;
  let index = 0;
  if (typeof swiperSize === 'undefined') {
    return;
  }
  if (typeof spaceBetween === 'string' && spaceBetween.indexOf('%') >= 0) {
    spaceBetween = parseFloat(spaceBetween.replace('%', '')) / 100 * swiperSize;
  } else if (typeof spaceBetween === 'string') {
    spaceBetween = parseFloat(spaceBetween);
  }
  swiper.virtualSize = -spaceBetween;

  // reset margins
  slides.forEach(slideEl => {
    if (rtl) {
      slideEl.style.marginLeft = '';
    } else {
      slideEl.style.marginRight = '';
    }
    slideEl.style.marginBottom = '';
    slideEl.style.marginTop = '';
  });

  // reset cssMode offsets
  if (params.centeredSlides && params.cssMode) {
    setCSSProperty(wrapperEl, '--swiper-centered-offset-before', '');
    setCSSProperty(wrapperEl, '--swiper-centered-offset-after', '');
  }
  const gridEnabled = params.grid && params.grid.rows > 1 && swiper.grid;
  if (gridEnabled) {
    swiper.grid.initSlides(slides);
  } else if (swiper.grid) {
    swiper.grid.unsetSlides();
  }

  // Calc slides
  let slideSize;
  const shouldResetSlideSize = params.slidesPerView === 'auto' && params.breakpoints && Object.keys(params.breakpoints).filter(key => {
    return typeof params.breakpoints[key].slidesPerView !== 'undefined';
  }).length > 0;
  for (let i = 0; i < slidesLength; i += 1) {
    slideSize = 0;
    let slide;
    if (slides[i]) slide = slides[i];
    if (gridEnabled) {
      swiper.grid.updateSlide(i, slide, slides);
    }
    if (slides[i] && elementStyle(slide, 'display') === 'none') continue; // eslint-disable-line

    if (params.slidesPerView === 'auto') {
      if (shouldResetSlideSize) {
        slides[i].style[swiper.getDirectionLabel('width')] = ``;
      }
      const slideStyles = getComputedStyle(slide);
      const currentTransform = slide.style.transform;
      const currentWebKitTransform = slide.style.webkitTransform;
      if (currentTransform) {
        slide.style.transform = 'none';
      }
      if (currentWebKitTransform) {
        slide.style.webkitTransform = 'none';
      }
      if (params.roundLengths) {
        slideSize = swiper.isHorizontal() ? elementOuterSize(slide, 'width') : elementOuterSize(slide, 'height');
      } else {
        // eslint-disable-next-line
        const width = getDirectionPropertyValue(slideStyles, 'width');
        const paddingLeft = getDirectionPropertyValue(slideStyles, 'padding-left');
        const paddingRight = getDirectionPropertyValue(slideStyles, 'padding-right');
        const marginLeft = getDirectionPropertyValue(slideStyles, 'margin-left');
        const marginRight = getDirectionPropertyValue(slideStyles, 'margin-right');
        const boxSizing = slideStyles.getPropertyValue('box-sizing');
        if (boxSizing && boxSizing === 'border-box') {
          slideSize = width + marginLeft + marginRight;
        } else {
          const {
            clientWidth,
            offsetWidth
          } = slide;
          slideSize = width + paddingLeft + paddingRight + marginLeft + marginRight + (offsetWidth - clientWidth);
        }
      }
      if (currentTransform) {
        slide.style.transform = currentTransform;
      }
      if (currentWebKitTransform) {
        slide.style.webkitTransform = currentWebKitTransform;
      }
      if (params.roundLengths) slideSize = Math.floor(slideSize);
    } else {
      slideSize = (swiperSize - (params.slidesPerView - 1) * spaceBetween) / params.slidesPerView;
      if (params.roundLengths) slideSize = Math.floor(slideSize);
      if (slides[i]) {
        slides[i].style[swiper.getDirectionLabel('width')] = `${slideSize}px`;
      }
    }
    if (slides[i]) {
      slides[i].swiperSlideSize = slideSize;
    }
    slidesSizesGrid.push(slideSize);
    if (params.centeredSlides) {
      slidePosition = slidePosition + slideSize / 2 + prevSlideSize / 2 + spaceBetween;
      if (prevSlideSize === 0 && i !== 0) slidePosition = slidePosition - swiperSize / 2 - spaceBetween;
      if (i === 0) slidePosition = slidePosition - swiperSize / 2 - spaceBetween;
      if (Math.abs(slidePosition) < 1 / 1000) slidePosition = 0;
      if (params.roundLengths) slidePosition = Math.floor(slidePosition);
      if (index % params.slidesPerGroup === 0) snapGrid.push(slidePosition);
      slidesGrid.push(slidePosition);
    } else {
      if (params.roundLengths) slidePosition = Math.floor(slidePosition);
      if ((index - Math.min(swiper.params.slidesPerGroupSkip, index)) % swiper.params.slidesPerGroup === 0) snapGrid.push(slidePosition);
      slidesGrid.push(slidePosition);
      slidePosition = slidePosition + slideSize + spaceBetween;
    }
    swiper.virtualSize += slideSize + spaceBetween;
    prevSlideSize = slideSize;
    index += 1;
  }
  swiper.virtualSize = Math.max(swiper.virtualSize, swiperSize) + offsetAfter;
  if (rtl && wrongRTL && (params.effect === 'slide' || params.effect === 'coverflow')) {
    wrapperEl.style.width = `${swiper.virtualSize + spaceBetween}px`;
  }
  if (params.setWrapperSize) {
    wrapperEl.style[swiper.getDirectionLabel('width')] = `${swiper.virtualSize + spaceBetween}px`;
  }
  if (gridEnabled) {
    swiper.grid.updateWrapperSize(slideSize, snapGrid);
  }

  // Remove last grid elements depending on width
  if (!params.centeredSlides) {
    const newSlidesGrid = [];
    for (let i = 0; i < snapGrid.length; i += 1) {
      let slidesGridItem = snapGrid[i];
      if (params.roundLengths) slidesGridItem = Math.floor(slidesGridItem);
      if (snapGrid[i] <= swiper.virtualSize - swiperSize) {
        newSlidesGrid.push(slidesGridItem);
      }
    }
    snapGrid = newSlidesGrid;
    if (Math.floor(swiper.virtualSize - swiperSize) - Math.floor(snapGrid[snapGrid.length - 1]) > 1) {
      snapGrid.push(swiper.virtualSize - swiperSize);
    }
  }
  if (isVirtual && params.loop) {
    const size = slidesSizesGrid[0] + spaceBetween;
    if (params.slidesPerGroup > 1) {
      const groups = Math.ceil((swiper.virtual.slidesBefore + swiper.virtual.slidesAfter) / params.slidesPerGroup);
      const groupSize = size * params.slidesPerGroup;
      for (let i = 0; i < groups; i += 1) {
        snapGrid.push(snapGrid[snapGrid.length - 1] + groupSize);
      }
    }
    for (let i = 0; i < swiper.virtual.slidesBefore + swiper.virtual.slidesAfter; i += 1) {
      if (params.slidesPerGroup === 1) {
        snapGrid.push(snapGrid[snapGrid.length - 1] + size);
      }
      slidesGrid.push(slidesGrid[slidesGrid.length - 1] + size);
      swiper.virtualSize += size;
    }
  }
  if (snapGrid.length === 0) snapGrid = [0];
  if (spaceBetween !== 0) {
    const key = swiper.isHorizontal() && rtl ? 'marginLeft' : swiper.getDirectionLabel('marginRight');
    slides.filter((_, slideIndex) => {
      if (!params.cssMode || params.loop) return true;
      if (slideIndex === slides.length - 1) {
        return false;
      }
      return true;
    }).forEach(slideEl => {
      slideEl.style[key] = `${spaceBetween}px`;
    });
  }
  if (params.centeredSlides && params.centeredSlidesBounds) {
    let allSlidesSize = 0;
    slidesSizesGrid.forEach(slideSizeValue => {
      allSlidesSize += slideSizeValue + (spaceBetween || 0);
    });
    allSlidesSize -= spaceBetween;
    const maxSnap = allSlidesSize - swiperSize;
    snapGrid = snapGrid.map(snap => {
      if (snap <= 0) return -offsetBefore;
      if (snap > maxSnap) return maxSnap + offsetAfter;
      return snap;
    });
  }
  if (params.centerInsufficientSlides) {
    let allSlidesSize = 0;
    slidesSizesGrid.forEach(slideSizeValue => {
      allSlidesSize += slideSizeValue + (spaceBetween || 0);
    });
    allSlidesSize -= spaceBetween;
    if (allSlidesSize < swiperSize) {
      const allSlidesOffset = (swiperSize - allSlidesSize) / 2;
      snapGrid.forEach((snap, snapIndex) => {
        snapGrid[snapIndex] = snap - allSlidesOffset;
      });
      slidesGrid.forEach((snap, snapIndex) => {
        slidesGrid[snapIndex] = snap + allSlidesOffset;
      });
    }
  }
  Object.assign(swiper, {
    slides,
    snapGrid,
    slidesGrid,
    slidesSizesGrid
  });
  if (params.centeredSlides && params.cssMode && !params.centeredSlidesBounds) {
    setCSSProperty(wrapperEl, '--swiper-centered-offset-before', `${-snapGrid[0]}px`);
    setCSSProperty(wrapperEl, '--swiper-centered-offset-after', `${swiper.size / 2 - slidesSizesGrid[slidesSizesGrid.length - 1] / 2}px`);
    const addToSnapGrid = -swiper.snapGrid[0];
    const addToSlidesGrid = -swiper.slidesGrid[0];
    swiper.snapGrid = swiper.snapGrid.map(v => v + addToSnapGrid);
    swiper.slidesGrid = swiper.slidesGrid.map(v => v + addToSlidesGrid);
  }
  if (slidesLength !== previousSlidesLength) {
    swiper.emit('slidesLengthChange');
  }
  if (snapGrid.length !== previousSnapGridLength) {
    if (swiper.params.watchOverflow) swiper.checkOverflow();
    swiper.emit('snapGridLengthChange');
  }
  if (slidesGrid.length !== previousSlidesGridLength) {
    swiper.emit('slidesGridLengthChange');
  }
  if (params.watchSlidesProgress) {
    swiper.updateSlidesOffset();
  }
  swiper.emit('slidesUpdated');
  if (!isVirtual && !params.cssMode && (params.effect === 'slide' || params.effect === 'fade')) {
    const backFaceHiddenClass = `${params.containerModifierClass}backface-hidden`;
    const hasClassBackfaceClassAdded = swiper.el.classList.contains(backFaceHiddenClass);
    if (slidesLength <= params.maxBackfaceHiddenSlides) {
      if (!hasClassBackfaceClassAdded) swiper.el.classList.add(backFaceHiddenClass);
    } else if (hasClassBackfaceClassAdded) {
      swiper.el.classList.remove(backFaceHiddenClass);
    }
  }
}

function updateAutoHeight(speed) {
  const swiper = this;
  const activeSlides = [];
  const isVirtual = swiper.virtual && swiper.params.virtual.enabled;
  let newHeight = 0;
  let i;
  if (typeof speed === 'number') {
    swiper.setTransition(speed);
  } else if (speed === true) {
    swiper.setTransition(swiper.params.speed);
  }
  const getSlideByIndex = index => {
    if (isVirtual) {
      return swiper.slides[swiper.getSlideIndexByData(index)];
    }
    return swiper.slides[index];
  };
  // Find slides currently in view
  if (swiper.params.slidesPerView !== 'auto' && swiper.params.slidesPerView > 1) {
    if (swiper.params.centeredSlides) {
      (swiper.visibleSlides || []).forEach(slide => {
        activeSlides.push(slide);
      });
    } else {
      for (i = 0; i < Math.ceil(swiper.params.slidesPerView); i += 1) {
        const index = swiper.activeIndex + i;
        if (index > swiper.slides.length && !isVirtual) break;
        activeSlides.push(getSlideByIndex(index));
      }
    }
  } else {
    activeSlides.push(getSlideByIndex(swiper.activeIndex));
  }

  // Find new height from highest slide in view
  for (i = 0; i < activeSlides.length; i += 1) {
    if (typeof activeSlides[i] !== 'undefined') {
      const height = activeSlides[i].offsetHeight;
      newHeight = height > newHeight ? height : newHeight;
    }
  }

  // Update Height
  if (newHeight || newHeight === 0) swiper.wrapperEl.style.height = `${newHeight}px`;
}

function updateSlidesOffset() {
  const swiper = this;
  const slides = swiper.slides;
  // eslint-disable-next-line
  const minusOffset = swiper.isElement ? swiper.isHorizontal() ? swiper.wrapperEl.offsetLeft : swiper.wrapperEl.offsetTop : 0;
  for (let i = 0; i < slides.length; i += 1) {
    slides[i].swiperSlideOffset = (swiper.isHorizontal() ? slides[i].offsetLeft : slides[i].offsetTop) - minusOffset - swiper.cssOverflowAdjustment();
  }
}

function updateSlidesProgress(translate) {
  if (translate === void 0) {
    translate = this && this.translate || 0;
  }
  const swiper = this;
  const params = swiper.params;
  const {
    slides,
    rtlTranslate: rtl,
    snapGrid
  } = swiper;
  if (slides.length === 0) return;
  if (typeof slides[0].swiperSlideOffset === 'undefined') swiper.updateSlidesOffset();
  let offsetCenter = -translate;
  if (rtl) offsetCenter = translate;

  // Visible Slides
  slides.forEach(slideEl => {
    slideEl.classList.remove(params.slideVisibleClass, params.slideFullyVisibleClass);
  });
  swiper.visibleSlidesIndexes = [];
  swiper.visibleSlides = [];
  let spaceBetween = params.spaceBetween;
  if (typeof spaceBetween === 'string' && spaceBetween.indexOf('%') >= 0) {
    spaceBetween = parseFloat(spaceBetween.replace('%', '')) / 100 * swiper.size;
  } else if (typeof spaceBetween === 'string') {
    spaceBetween = parseFloat(spaceBetween);
  }
  for (let i = 0; i < slides.length; i += 1) {
    const slide = slides[i];
    let slideOffset = slide.swiperSlideOffset;
    if (params.cssMode && params.centeredSlides) {
      slideOffset -= slides[0].swiperSlideOffset;
    }
    const slideProgress = (offsetCenter + (params.centeredSlides ? swiper.minTranslate() : 0) - slideOffset) / (slide.swiperSlideSize + spaceBetween);
    const originalSlideProgress = (offsetCenter - snapGrid[0] + (params.centeredSlides ? swiper.minTranslate() : 0) - slideOffset) / (slide.swiperSlideSize + spaceBetween);
    const slideBefore = -(offsetCenter - slideOffset);
    const slideAfter = slideBefore + swiper.slidesSizesGrid[i];
    const isFullyVisible = slideBefore >= 0 && slideBefore <= swiper.size - swiper.slidesSizesGrid[i];
    const isVisible = slideBefore >= 0 && slideBefore < swiper.size - 1 || slideAfter > 1 && slideAfter <= swiper.size || slideBefore <= 0 && slideAfter >= swiper.size;
    if (isVisible) {
      swiper.visibleSlides.push(slide);
      swiper.visibleSlidesIndexes.push(i);
      slides[i].classList.add(params.slideVisibleClass);
    }
    if (isFullyVisible) {
      slides[i].classList.add(params.slideFullyVisibleClass);
    }
    slide.progress = rtl ? -slideProgress : slideProgress;
    slide.originalProgress = rtl ? -originalSlideProgress : originalSlideProgress;
  }
}

function updateProgress(translate) {
  const swiper = this;
  if (typeof translate === 'undefined') {
    const multiplier = swiper.rtlTranslate ? -1 : 1;
    // eslint-disable-next-line
    translate = swiper && swiper.translate && swiper.translate * multiplier || 0;
  }
  const params = swiper.params;
  const translatesDiff = swiper.maxTranslate() - swiper.minTranslate();
  let {
    progress,
    isBeginning,
    isEnd,
    progressLoop
  } = swiper;
  const wasBeginning = isBeginning;
  const wasEnd = isEnd;
  if (translatesDiff === 0) {
    progress = 0;
    isBeginning = true;
    isEnd = true;
  } else {
    progress = (translate - swiper.minTranslate()) / translatesDiff;
    const isBeginningRounded = Math.abs(translate - swiper.minTranslate()) < 1;
    const isEndRounded = Math.abs(translate - swiper.maxTranslate()) < 1;
    isBeginning = isBeginningRounded || progress <= 0;
    isEnd = isEndRounded || progress >= 1;
    if (isBeginningRounded) progress = 0;
    if (isEndRounded) progress = 1;
  }
  if (params.loop) {
    const firstSlideIndex = swiper.getSlideIndexByData(0);
    const lastSlideIndex = swiper.getSlideIndexByData(swiper.slides.length - 1);
    const firstSlideTranslate = swiper.slidesGrid[firstSlideIndex];
    const lastSlideTranslate = swiper.slidesGrid[lastSlideIndex];
    const translateMax = swiper.slidesGrid[swiper.slidesGrid.length - 1];
    const translateAbs = Math.abs(translate);
    if (translateAbs >= firstSlideTranslate) {
      progressLoop = (translateAbs - firstSlideTranslate) / translateMax;
    } else {
      progressLoop = (translateAbs + translateMax - lastSlideTranslate) / translateMax;
    }
    if (progressLoop > 1) progressLoop -= 1;
  }
  Object.assign(swiper, {
    progress,
    progressLoop,
    isBeginning,
    isEnd
  });
  if (params.watchSlidesProgress || params.centeredSlides && params.autoHeight) swiper.updateSlidesProgress(translate);
  if (isBeginning && !wasBeginning) {
    swiper.emit('reachBeginning toEdge');
  }
  if (isEnd && !wasEnd) {
    swiper.emit('reachEnd toEdge');
  }
  if (wasBeginning && !isBeginning || wasEnd && !isEnd) {
    swiper.emit('fromEdge');
  }
  swiper.emit('progress', progress);
}

const toggleSlideClasses = (slideEl, condition, className) => {
  if (condition && !slideEl.classList.contains(className)) {
    slideEl.classList.add(className);
  } else if (!condition && slideEl.classList.contains(className)) {
    slideEl.classList.remove(className);
  }
};
function updateSlidesClasses() {
  const swiper = this;
  const {
    slides,
    params,
    slidesEl,
    activeIndex
  } = swiper;
  const isVirtual = swiper.virtual && params.virtual.enabled;
  const gridEnabled = swiper.grid && params.grid && params.grid.rows > 1;
  const getFilteredSlide = selector => {
    return elementChildren(slidesEl, `.${params.slideClass}${selector}, swiper-slide${selector}`)[0];
  };
  let activeSlide;
  let prevSlide;
  let nextSlide;
  if (isVirtual) {
    if (params.loop) {
      let slideIndex = activeIndex - swiper.virtual.slidesBefore;
      if (slideIndex < 0) slideIndex = swiper.virtual.slides.length + slideIndex;
      if (slideIndex >= swiper.virtual.slides.length) slideIndex -= swiper.virtual.slides.length;
      activeSlide = getFilteredSlide(`[data-swiper-slide-index="${slideIndex}"]`);
    } else {
      activeSlide = getFilteredSlide(`[data-swiper-slide-index="${activeIndex}"]`);
    }
  } else {
    if (gridEnabled) {
      activeSlide = slides.filter(slideEl => slideEl.column === activeIndex)[0];
      nextSlide = slides.filter(slideEl => slideEl.column === activeIndex + 1)[0];
      prevSlide = slides.filter(slideEl => slideEl.column === activeIndex - 1)[0];
    } else {
      activeSlide = slides[activeIndex];
    }
  }
  if (activeSlide) {
    if (!gridEnabled) {
      // Next Slide
      nextSlide = elementNextAll(activeSlide, `.${params.slideClass}, swiper-slide`)[0];
      if (params.loop && !nextSlide) {
        nextSlide = slides[0];
      }

      // Prev Slide
      prevSlide = elementPrevAll(activeSlide, `.${params.slideClass}, swiper-slide`)[0];
      if (params.loop && !prevSlide === 0) {
        prevSlide = slides[slides.length - 1];
      }
    }
  }
  slides.forEach(slideEl => {
    toggleSlideClasses(slideEl, slideEl === activeSlide, params.slideActiveClass);
    toggleSlideClasses(slideEl, slideEl === nextSlide, params.slideNextClass);
    toggleSlideClasses(slideEl, slideEl === prevSlide, params.slidePrevClass);
  });
  swiper.emitSlidesClasses();
}

const processLazyPreloader = (swiper, imageEl) => {
  if (!swiper || swiper.destroyed || !swiper.params) return;
  const slideSelector = () => swiper.isElement ? `swiper-slide` : `.${swiper.params.slideClass}`;
  const slideEl = imageEl.closest(slideSelector());
  if (slideEl) {
    let lazyEl = slideEl.querySelector(`.${swiper.params.lazyPreloaderClass}`);
    if (!lazyEl && swiper.isElement) {
      if (slideEl.shadowRoot) {
        lazyEl = slideEl.shadowRoot.querySelector(`.${swiper.params.lazyPreloaderClass}`);
      } else {
        // init later
        requestAnimationFrame(() => {
          if (slideEl.shadowRoot) {
            lazyEl = slideEl.shadowRoot.querySelector(`.${swiper.params.lazyPreloaderClass}`);
            if (lazyEl) lazyEl.remove();
          }
        });
      }
    }
    if (lazyEl) lazyEl.remove();
  }
};
const unlazy = (swiper, index) => {
  if (!swiper.slides[index]) return;
  const imageEl = swiper.slides[index].querySelector('[loading="lazy"]');
  if (imageEl) imageEl.removeAttribute('loading');
};
const preload = swiper => {
  if (!swiper || swiper.destroyed || !swiper.params) return;
  let amount = swiper.params.lazyPreloadPrevNext;
  const len = swiper.slides.length;
  if (!len || !amount || amount < 0) return;
  amount = Math.min(amount, len);
  const slidesPerView = swiper.params.slidesPerView === 'auto' ? swiper.slidesPerViewDynamic() : Math.ceil(swiper.params.slidesPerView);
  const activeIndex = swiper.activeIndex;
  if (swiper.params.grid && swiper.params.grid.rows > 1) {
    const activeColumn = activeIndex;
    const preloadColumns = [activeColumn - amount];
    preloadColumns.push(...Array.from({
      length: amount
    }).map((_, i) => {
      return activeColumn + slidesPerView + i;
    }));
    swiper.slides.forEach((slideEl, i) => {
      if (preloadColumns.includes(slideEl.column)) unlazy(swiper, i);
    });
    return;
  }
  const slideIndexLastInView = activeIndex + slidesPerView - 1;
  if (swiper.params.rewind || swiper.params.loop) {
    for (let i = activeIndex - amount; i <= slideIndexLastInView + amount; i += 1) {
      const realIndex = (i % len + len) % len;
      if (realIndex < activeIndex || realIndex > slideIndexLastInView) unlazy(swiper, realIndex);
    }
  } else {
    for (let i = Math.max(activeIndex - amount, 0); i <= Math.min(slideIndexLastInView + amount, len - 1); i += 1) {
      if (i !== activeIndex && (i > slideIndexLastInView || i < activeIndex)) {
        unlazy(swiper, i);
      }
    }
  }
};

function getActiveIndexByTranslate(swiper) {
  const {
    slidesGrid,
    params
  } = swiper;
  const translate = swiper.rtlTranslate ? swiper.translate : -swiper.translate;
  let activeIndex;
  for (let i = 0; i < slidesGrid.length; i += 1) {
    if (typeof slidesGrid[i + 1] !== 'undefined') {
      if (translate >= slidesGrid[i] && translate < slidesGrid[i + 1] - (slidesGrid[i + 1] - slidesGrid[i]) / 2) {
        activeIndex = i;
      } else if (translate >= slidesGrid[i] && translate < slidesGrid[i + 1]) {
        activeIndex = i + 1;
      }
    } else if (translate >= slidesGrid[i]) {
      activeIndex = i;
    }
  }
  // Normalize slideIndex
  if (params.normalizeSlideIndex) {
    if (activeIndex < 0 || typeof activeIndex === 'undefined') activeIndex = 0;
  }
  return activeIndex;
}
function updateActiveIndex(newActiveIndex) {
  const swiper = this;
  const translate = swiper.rtlTranslate ? swiper.translate : -swiper.translate;
  const {
    snapGrid,
    params,
    activeIndex: previousIndex,
    realIndex: previousRealIndex,
    snapIndex: previousSnapIndex
  } = swiper;
  let activeIndex = newActiveIndex;
  let snapIndex;
  const getVirtualRealIndex = aIndex => {
    let realIndex = aIndex - swiper.virtual.slidesBefore;
    if (realIndex < 0) {
      realIndex = swiper.virtual.slides.length + realIndex;
    }
    if (realIndex >= swiper.virtual.slides.length) {
      realIndex -= swiper.virtual.slides.length;
    }
    return realIndex;
  };
  if (typeof activeIndex === 'undefined') {
    activeIndex = getActiveIndexByTranslate(swiper);
  }
  if (snapGrid.indexOf(translate) >= 0) {
    snapIndex = snapGrid.indexOf(translate);
  } else {
    const skip = Math.min(params.slidesPerGroupSkip, activeIndex);
    snapIndex = skip + Math.floor((activeIndex - skip) / params.slidesPerGroup);
  }
  if (snapIndex >= snapGrid.length) snapIndex = snapGrid.length - 1;
  if (activeIndex === previousIndex && !swiper.params.loop) {
    if (snapIndex !== previousSnapIndex) {
      swiper.snapIndex = snapIndex;
      swiper.emit('snapIndexChange');
    }
    return;
  }
  if (activeIndex === previousIndex && swiper.params.loop && swiper.virtual && swiper.params.virtual.enabled) {
    swiper.realIndex = getVirtualRealIndex(activeIndex);
    return;
  }
  const gridEnabled = swiper.grid && params.grid && params.grid.rows > 1;

  // Get real index
  let realIndex;
  if (swiper.virtual && params.virtual.enabled && params.loop) {
    realIndex = getVirtualRealIndex(activeIndex);
  } else if (gridEnabled) {
    const firstSlideInColumn = swiper.slides.filter(slideEl => slideEl.column === activeIndex)[0];
    let activeSlideIndex = parseInt(firstSlideInColumn.getAttribute('data-swiper-slide-index'), 10);
    if (Number.isNaN(activeSlideIndex)) {
      activeSlideIndex = Math.max(swiper.slides.indexOf(firstSlideInColumn), 0);
    }
    realIndex = Math.floor(activeSlideIndex / params.grid.rows);
  } else if (swiper.slides[activeIndex]) {
    const slideIndex = swiper.slides[activeIndex].getAttribute('data-swiper-slide-index');
    if (slideIndex) {
      realIndex = parseInt(slideIndex, 10);
    } else {
      realIndex = activeIndex;
    }
  } else {
    realIndex = activeIndex;
  }
  Object.assign(swiper, {
    previousSnapIndex,
    snapIndex,
    previousRealIndex,
    realIndex,
    previousIndex,
    activeIndex
  });
  if (swiper.initialized) {
    preload(swiper);
  }
  swiper.emit('activeIndexChange');
  swiper.emit('snapIndexChange');
  if (swiper.initialized || swiper.params.runCallbacksOnInit) {
    if (previousRealIndex !== realIndex) {
      swiper.emit('realIndexChange');
    }
    swiper.emit('slideChange');
  }
}

function updateClickedSlide(el, path) {
  const swiper = this;
  const params = swiper.params;
  let slide = el.closest(`.${params.slideClass}, swiper-slide`);
  if (!slide && swiper.isElement && path && path.length > 1 && path.includes(el)) {
    [...path.slice(path.indexOf(el) + 1, path.length)].forEach(pathEl => {
      if (!slide && pathEl.matches && pathEl.matches(`.${params.slideClass}, swiper-slide`)) {
        slide = pathEl;
      }
    });
  }
  let slideFound = false;
  let slideIndex;
  if (slide) {
    for (let i = 0; i < swiper.slides.length; i += 1) {
      if (swiper.slides[i] === slide) {
        slideFound = true;
        slideIndex = i;
        break;
      }
    }
  }
  if (slide && slideFound) {
    swiper.clickedSlide = slide;
    if (swiper.virtual && swiper.params.virtual.enabled) {
      swiper.clickedIndex = parseInt(slide.getAttribute('data-swiper-slide-index'), 10);
    } else {
      swiper.clickedIndex = slideIndex;
    }
  } else {
    swiper.clickedSlide = undefined;
    swiper.clickedIndex = undefined;
    return;
  }
  if (params.slideToClickedSlide && swiper.clickedIndex !== undefined && swiper.clickedIndex !== swiper.activeIndex) {
    swiper.slideToClickedSlide();
  }
}

var update = {
  updateSize,
  updateSlides,
  updateAutoHeight,
  updateSlidesOffset,
  updateSlidesProgress,
  updateProgress,
  updateSlidesClasses,
  updateActiveIndex,
  updateClickedSlide
};

function getSwiperTranslate(axis) {
  if (axis === void 0) {
    axis = this.isHorizontal() ? 'x' : 'y';
  }
  const swiper = this;
  const {
    params,
    rtlTranslate: rtl,
    translate,
    wrapperEl
  } = swiper;
  if (params.virtualTranslate) {
    return rtl ? -translate : translate;
  }
  if (params.cssMode) {
    return translate;
  }
  let currentTranslate = getTranslate(wrapperEl, axis);
  currentTranslate += swiper.cssOverflowAdjustment();
  if (rtl) currentTranslate = -currentTranslate;
  return currentTranslate || 0;
}

function setTranslate(translate, byController) {
  const swiper = this;
  const {
    rtlTranslate: rtl,
    params,
    wrapperEl,
    progress
  } = swiper;
  let x = 0;
  let y = 0;
  const z = 0;
  if (swiper.isHorizontal()) {
    x = rtl ? -translate : translate;
  } else {
    y = translate;
  }
  if (params.roundLengths) {
    x = Math.floor(x);
    y = Math.floor(y);
  }
  swiper.previousTranslate = swiper.translate;
  swiper.translate = swiper.isHorizontal() ? x : y;
  if (params.cssMode) {
    wrapperEl[swiper.isHorizontal() ? 'scrollLeft' : 'scrollTop'] = swiper.isHorizontal() ? -x : -y;
  } else if (!params.virtualTranslate) {
    if (swiper.isHorizontal()) {
      x -= swiper.cssOverflowAdjustment();
    } else {
      y -= swiper.cssOverflowAdjustment();
    }
    wrapperEl.style.transform = `translate3d(${x}px, ${y}px, ${z}px)`;
  }

  // Check if we need to update progress
  let newProgress;
  const translatesDiff = swiper.maxTranslate() - swiper.minTranslate();
  if (translatesDiff === 0) {
    newProgress = 0;
  } else {
    newProgress = (translate - swiper.minTranslate()) / translatesDiff;
  }
  if (newProgress !== progress) {
    swiper.updateProgress(translate);
  }
  swiper.emit('setTranslate', swiper.translate, byController);
}

function minTranslate() {
  return -this.snapGrid[0];
}

function maxTranslate() {
  return -this.snapGrid[this.snapGrid.length - 1];
}

function translateTo(translate, speed, runCallbacks, translateBounds, internal) {
  if (translate === void 0) {
    translate = 0;
  }
  if (speed === void 0) {
    speed = this.params.speed;
  }
  if (runCallbacks === void 0) {
    runCallbacks = true;
  }
  if (translateBounds === void 0) {
    translateBounds = true;
  }
  const swiper = this;
  const {
    params,
    wrapperEl
  } = swiper;
  if (swiper.animating && params.preventInteractionOnTransition) {
    return false;
  }
  const minTranslate = swiper.minTranslate();
  const maxTranslate = swiper.maxTranslate();
  let newTranslate;
  if (translateBounds && translate > minTranslate) newTranslate = minTranslate;else if (translateBounds && translate < maxTranslate) newTranslate = maxTranslate;else newTranslate = translate;

  // Update progress
  swiper.updateProgress(newTranslate);
  if (params.cssMode) {
    const isH = swiper.isHorizontal();
    if (speed === 0) {
      wrapperEl[isH ? 'scrollLeft' : 'scrollTop'] = -newTranslate;
    } else {
      if (!swiper.support.smoothScroll) {
        animateCSSModeScroll({
          swiper,
          targetPosition: -newTranslate,
          side: isH ? 'left' : 'top'
        });
        return true;
      }
      wrapperEl.scrollTo({
        [isH ? 'left' : 'top']: -newTranslate,
        behavior: 'smooth'
      });
    }
    return true;
  }
  if (speed === 0) {
    swiper.setTransition(0);
    swiper.setTranslate(newTranslate);
    if (runCallbacks) {
      swiper.emit('beforeTransitionStart', speed, internal);
      swiper.emit('transitionEnd');
    }
  } else {
    swiper.setTransition(speed);
    swiper.setTranslate(newTranslate);
    if (runCallbacks) {
      swiper.emit('beforeTransitionStart', speed, internal);
      swiper.emit('transitionStart');
    }
    if (!swiper.animating) {
      swiper.animating = true;
      if (!swiper.onTranslateToWrapperTransitionEnd) {
        swiper.onTranslateToWrapperTransitionEnd = function transitionEnd(e) {
          if (!swiper || swiper.destroyed) return;
          if (e.target !== this) return;
          swiper.wrapperEl.removeEventListener('transitionend', swiper.onTranslateToWrapperTransitionEnd);
          swiper.onTranslateToWrapperTransitionEnd = null;
          delete swiper.onTranslateToWrapperTransitionEnd;
          swiper.animating = false;
          if (runCallbacks) {
            swiper.emit('transitionEnd');
          }
        };
      }
      swiper.wrapperEl.addEventListener('transitionend', swiper.onTranslateToWrapperTransitionEnd);
    }
  }
  return true;
}

var translate = {
  getTranslate: getSwiperTranslate,
  setTranslate,
  minTranslate,
  maxTranslate,
  translateTo
};

function setTransition(duration, byController) {
  const swiper = this;
  if (!swiper.params.cssMode) {
    swiper.wrapperEl.style.transitionDuration = `${duration}ms`;
    swiper.wrapperEl.style.transitionDelay = duration === 0 ? `0ms` : '';
  }
  swiper.emit('setTransition', duration, byController);
}

function transitionEmit(_ref) {
  let {
    swiper,
    runCallbacks,
    direction,
    step
  } = _ref;
  const {
    activeIndex,
    previousIndex
  } = swiper;
  let dir = direction;
  if (!dir) {
    if (activeIndex > previousIndex) dir = 'next';else if (activeIndex < previousIndex) dir = 'prev';else dir = 'reset';
  }
  swiper.emit(`transition${step}`);
  if (runCallbacks && activeIndex !== previousIndex) {
    if (dir === 'reset') {
      swiper.emit(`slideResetTransition${step}`);
      return;
    }
    swiper.emit(`slideChangeTransition${step}`);
    if (dir === 'next') {
      swiper.emit(`slideNextTransition${step}`);
    } else {
      swiper.emit(`slidePrevTransition${step}`);
    }
  }
}

function transitionStart(runCallbacks, direction) {
  if (runCallbacks === void 0) {
    runCallbacks = true;
  }
  const swiper = this;
  const {
    params
  } = swiper;
  if (params.cssMode) return;
  if (params.autoHeight) {
    swiper.updateAutoHeight();
  }
  transitionEmit({
    swiper,
    runCallbacks,
    direction,
    step: 'Start'
  });
}

function transitionEnd(runCallbacks, direction) {
  if (runCallbacks === void 0) {
    runCallbacks = true;
  }
  const swiper = this;
  const {
    params
  } = swiper;
  swiper.animating = false;
  if (params.cssMode) return;
  swiper.setTransition(0);
  transitionEmit({
    swiper,
    runCallbacks,
    direction,
    step: 'End'
  });
}

var transition = {
  setTransition,
  transitionStart,
  transitionEnd
};

function slideTo(index, speed, runCallbacks, internal, initial) {
  if (index === void 0) {
    index = 0;
  }
  if (runCallbacks === void 0) {
    runCallbacks = true;
  }
  if (typeof index === 'string') {
    index = parseInt(index, 10);
  }
  const swiper = this;
  let slideIndex = index;
  if (slideIndex < 0) slideIndex = 0;
  const {
    params,
    snapGrid,
    slidesGrid,
    previousIndex,
    activeIndex,
    rtlTranslate: rtl,
    wrapperEl,
    enabled
  } = swiper;
  if (!enabled && !internal && !initial || swiper.destroyed || swiper.animating && params.preventInteractionOnTransition) {
    return false;
  }
  if (typeof speed === 'undefined') {
    speed = swiper.params.speed;
  }
  const skip = Math.min(swiper.params.slidesPerGroupSkip, slideIndex);
  let snapIndex = skip + Math.floor((slideIndex - skip) / swiper.params.slidesPerGroup);
  if (snapIndex >= snapGrid.length) snapIndex = snapGrid.length - 1;
  const translate = -snapGrid[snapIndex];
  // Normalize slideIndex
  if (params.normalizeSlideIndex) {
    for (let i = 0; i < slidesGrid.length; i += 1) {
      const normalizedTranslate = -Math.floor(translate * 100);
      const normalizedGrid = Math.floor(slidesGrid[i] * 100);
      const normalizedGridNext = Math.floor(slidesGrid[i + 1] * 100);
      if (typeof slidesGrid[i + 1] !== 'undefined') {
        if (normalizedTranslate >= normalizedGrid && normalizedTranslate < normalizedGridNext - (normalizedGridNext - normalizedGrid) / 2) {
          slideIndex = i;
        } else if (normalizedTranslate >= normalizedGrid && normalizedTranslate < normalizedGridNext) {
          slideIndex = i + 1;
        }
      } else if (normalizedTranslate >= normalizedGrid) {
        slideIndex = i;
      }
    }
  }
  // Directions locks
  if (swiper.initialized && slideIndex !== activeIndex) {
    if (!swiper.allowSlideNext && (rtl ? translate > swiper.translate && translate > swiper.minTranslate() : translate < swiper.translate && translate < swiper.minTranslate())) {
      return false;
    }
    if (!swiper.allowSlidePrev && translate > swiper.translate && translate > swiper.maxTranslate()) {
      if ((activeIndex || 0) !== slideIndex) {
        return false;
      }
    }
  }
  if (slideIndex !== (previousIndex || 0) && runCallbacks) {
    swiper.emit('beforeSlideChangeStart');
  }

  // Update progress
  swiper.updateProgress(translate);
  let direction;
  if (slideIndex > activeIndex) direction = 'next';else if (slideIndex < activeIndex) direction = 'prev';else direction = 'reset';

  // Update Index
  if (rtl && -translate === swiper.translate || !rtl && translate === swiper.translate) {
    swiper.updateActiveIndex(slideIndex);
    // Update Height
    if (params.autoHeight) {
      swiper.updateAutoHeight();
    }
    swiper.updateSlidesClasses();
    if (params.effect !== 'slide') {
      swiper.setTranslate(translate);
    }
    if (direction !== 'reset') {
      swiper.transitionStart(runCallbacks, direction);
      swiper.transitionEnd(runCallbacks, direction);
    }
    return false;
  }
  if (params.cssMode) {
    const isH = swiper.isHorizontal();
    const t = rtl ? translate : -translate;
    if (speed === 0) {
      const isVirtual = swiper.virtual && swiper.params.virtual.enabled;
      if (isVirtual) {
        swiper.wrapperEl.style.scrollSnapType = 'none';
        swiper._immediateVirtual = true;
      }
      if (isVirtual && !swiper._cssModeVirtualInitialSet && swiper.params.initialSlide > 0) {
        swiper._cssModeVirtualInitialSet = true;
        requestAnimationFrame(() => {
          wrapperEl[isH ? 'scrollLeft' : 'scrollTop'] = t;
        });
      } else {
        wrapperEl[isH ? 'scrollLeft' : 'scrollTop'] = t;
      }
      if (isVirtual) {
        requestAnimationFrame(() => {
          swiper.wrapperEl.style.scrollSnapType = '';
          swiper._immediateVirtual = false;
        });
      }
    } else {
      if (!swiper.support.smoothScroll) {
        animateCSSModeScroll({
          swiper,
          targetPosition: t,
          side: isH ? 'left' : 'top'
        });
        return true;
      }
      wrapperEl.scrollTo({
        [isH ? 'left' : 'top']: t,
        behavior: 'smooth'
      });
    }
    return true;
  }
  swiper.setTransition(speed);
  swiper.setTranslate(translate);
  swiper.updateActiveIndex(slideIndex);
  swiper.updateSlidesClasses();
  swiper.emit('beforeTransitionStart', speed, internal);
  swiper.transitionStart(runCallbacks, direction);
  if (speed === 0) {
    swiper.transitionEnd(runCallbacks, direction);
  } else if (!swiper.animating) {
    swiper.animating = true;
    if (!swiper.onSlideToWrapperTransitionEnd) {
      swiper.onSlideToWrapperTransitionEnd = function transitionEnd(e) {
        if (!swiper || swiper.destroyed) return;
        if (e.target !== this) return;
        swiper.wrapperEl.removeEventListener('transitionend', swiper.onSlideToWrapperTransitionEnd);
        swiper.onSlideToWrapperTransitionEnd = null;
        delete swiper.onSlideToWrapperTransitionEnd;
        swiper.transitionEnd(runCallbacks, direction);
      };
    }
    swiper.wrapperEl.addEventListener('transitionend', swiper.onSlideToWrapperTransitionEnd);
  }
  return true;
}

function slideToLoop(index, speed, runCallbacks, internal) {
  if (index === void 0) {
    index = 0;
  }
  if (runCallbacks === void 0) {
    runCallbacks = true;
  }
  if (typeof index === 'string') {
    const indexAsNumber = parseInt(index, 10);
    index = indexAsNumber;
  }
  const swiper = this;
  if (swiper.destroyed) return;
  if (typeof speed === 'undefined') {
    speed = swiper.params.speed;
  }
  const gridEnabled = swiper.grid && swiper.params.grid && swiper.params.grid.rows > 1;
  let newIndex = index;
  if (swiper.params.loop) {
    if (swiper.virtual && swiper.params.virtual.enabled) {
      // eslint-disable-next-line
      newIndex = newIndex + swiper.virtual.slidesBefore;
    } else {
      let targetSlideIndex;
      if (gridEnabled) {
        const slideIndex = newIndex * swiper.params.grid.rows;
        targetSlideIndex = swiper.slides.filter(slideEl => slideEl.getAttribute('data-swiper-slide-index') * 1 === slideIndex)[0].column;
      } else {
        targetSlideIndex = swiper.getSlideIndexByData(newIndex);
      }
      const cols = gridEnabled ? Math.ceil(swiper.slides.length / swiper.params.grid.rows) : swiper.slides.length;
      const {
        centeredSlides
      } = swiper.params;
      let slidesPerView = swiper.params.slidesPerView;
      if (slidesPerView === 'auto') {
        slidesPerView = swiper.slidesPerViewDynamic();
      } else {
        slidesPerView = Math.ceil(parseFloat(swiper.params.slidesPerView, 10));
        if (centeredSlides && slidesPerView % 2 === 0) {
          slidesPerView = slidesPerView + 1;
        }
      }
      let needLoopFix = cols - targetSlideIndex < slidesPerView;
      if (centeredSlides) {
        needLoopFix = needLoopFix || targetSlideIndex < Math.ceil(slidesPerView / 2);
      }
      if (internal && centeredSlides && swiper.params.slidesPerView !== 'auto' && !gridEnabled) {
        needLoopFix = false;
      }
      if (needLoopFix) {
        const direction = centeredSlides ? targetSlideIndex < swiper.activeIndex ? 'prev' : 'next' : targetSlideIndex - swiper.activeIndex - 1 < swiper.params.slidesPerView ? 'next' : 'prev';
        swiper.loopFix({
          direction,
          slideTo: true,
          activeSlideIndex: direction === 'next' ? targetSlideIndex + 1 : targetSlideIndex - cols + 1,
          slideRealIndex: direction === 'next' ? swiper.realIndex : undefined
        });
      }
      if (gridEnabled) {
        const slideIndex = newIndex * swiper.params.grid.rows;
        newIndex = swiper.slides.filter(slideEl => slideEl.getAttribute('data-swiper-slide-index') * 1 === slideIndex)[0].column;
      } else {
        newIndex = swiper.getSlideIndexByData(newIndex);
      }
    }
  }
  requestAnimationFrame(() => {
    swiper.slideTo(newIndex, speed, runCallbacks, internal);
  });
  return swiper;
}

/* eslint no-unused-vars: "off" */
function slideNext(speed, runCallbacks, internal) {
  if (runCallbacks === void 0) {
    runCallbacks = true;
  }
  const swiper = this;
  const {
    enabled,
    params,
    animating
  } = swiper;
  if (!enabled || swiper.destroyed) return swiper;
  if (typeof speed === 'undefined') {
    speed = swiper.params.speed;
  }
  let perGroup = params.slidesPerGroup;
  if (params.slidesPerView === 'auto' && params.slidesPerGroup === 1 && params.slidesPerGroupAuto) {
    perGroup = Math.max(swiper.slidesPerViewDynamic('current', true), 1);
  }
  const increment = swiper.activeIndex < params.slidesPerGroupSkip ? 1 : perGroup;
  const isVirtual = swiper.virtual && params.virtual.enabled;
  if (params.loop) {
    if (animating && !isVirtual && params.loopPreventsSliding) return false;
    swiper.loopFix({
      direction: 'next'
    });
    // eslint-disable-next-line
    swiper._clientLeft = swiper.wrapperEl.clientLeft;
    if (swiper.activeIndex === swiper.slides.length - 1 && params.cssMode) {
      requestAnimationFrame(() => {
        swiper.slideTo(swiper.activeIndex + increment, speed, runCallbacks, internal);
      });
      return true;
    }
  }
  if (params.rewind && swiper.isEnd) {
    return swiper.slideTo(0, speed, runCallbacks, internal);
  }
  return swiper.slideTo(swiper.activeIndex + increment, speed, runCallbacks, internal);
}

/* eslint no-unused-vars: "off" */
function slidePrev(speed, runCallbacks, internal) {
  if (runCallbacks === void 0) {
    runCallbacks = true;
  }
  const swiper = this;
  const {
    params,
    snapGrid,
    slidesGrid,
    rtlTranslate,
    enabled,
    animating
  } = swiper;
  if (!enabled || swiper.destroyed) return swiper;
  if (typeof speed === 'undefined') {
    speed = swiper.params.speed;
  }
  const isVirtual = swiper.virtual && params.virtual.enabled;
  if (params.loop) {
    if (animating && !isVirtual && params.loopPreventsSliding) return false;
    swiper.loopFix({
      direction: 'prev'
    });
    // eslint-disable-next-line
    swiper._clientLeft = swiper.wrapperEl.clientLeft;
  }
  const translate = rtlTranslate ? swiper.translate : -swiper.translate;
  function normalize(val) {
    if (val < 0) return -Math.floor(Math.abs(val));
    return Math.floor(val);
  }
  const normalizedTranslate = normalize(translate);
  const normalizedSnapGrid = snapGrid.map(val => normalize(val));
  let prevSnap = snapGrid[normalizedSnapGrid.indexOf(normalizedTranslate) - 1];
  if (typeof prevSnap === 'undefined' && params.cssMode) {
    let prevSnapIndex;
    snapGrid.forEach((snap, snapIndex) => {
      if (normalizedTranslate >= snap) {
        // prevSnap = snap;
        prevSnapIndex = snapIndex;
      }
    });
    if (typeof prevSnapIndex !== 'undefined') {
      prevSnap = snapGrid[prevSnapIndex > 0 ? prevSnapIndex - 1 : prevSnapIndex];
    }
  }
  let prevIndex = 0;
  if (typeof prevSnap !== 'undefined') {
    prevIndex = slidesGrid.indexOf(prevSnap);
    if (prevIndex < 0) prevIndex = swiper.activeIndex - 1;
    if (params.slidesPerView === 'auto' && params.slidesPerGroup === 1 && params.slidesPerGroupAuto) {
      prevIndex = prevIndex - swiper.slidesPerViewDynamic('previous', true) + 1;
      prevIndex = Math.max(prevIndex, 0);
    }
  }
  if (params.rewind && swiper.isBeginning) {
    const lastIndex = swiper.params.virtual && swiper.params.virtual.enabled && swiper.virtual ? swiper.virtual.slides.length - 1 : swiper.slides.length - 1;
    return swiper.slideTo(lastIndex, speed, runCallbacks, internal);
  } else if (params.loop && swiper.activeIndex === 0 && params.cssMode) {
    requestAnimationFrame(() => {
      swiper.slideTo(prevIndex, speed, runCallbacks, internal);
    });
    return true;
  }
  return swiper.slideTo(prevIndex, speed, runCallbacks, internal);
}

/* eslint no-unused-vars: "off" */
function slideReset(speed, runCallbacks, internal) {
  if (runCallbacks === void 0) {
    runCallbacks = true;
  }
  const swiper = this;
  if (swiper.destroyed) return;
  if (typeof speed === 'undefined') {
    speed = swiper.params.speed;
  }
  return swiper.slideTo(swiper.activeIndex, speed, runCallbacks, internal);
}

/* eslint no-unused-vars: "off" */
function slideToClosest(speed, runCallbacks, internal, threshold) {
  if (runCallbacks === void 0) {
    runCallbacks = true;
  }
  if (threshold === void 0) {
    threshold = 0.5;
  }
  const swiper = this;
  if (swiper.destroyed) return;
  if (typeof speed === 'undefined') {
    speed = swiper.params.speed;
  }
  let index = swiper.activeIndex;
  const skip = Math.min(swiper.params.slidesPerGroupSkip, index);
  const snapIndex = skip + Math.floor((index - skip) / swiper.params.slidesPerGroup);
  const translate = swiper.rtlTranslate ? swiper.translate : -swiper.translate;
  if (translate >= swiper.snapGrid[snapIndex]) {
    // The current translate is on or after the current snap index, so the choice
    // is between the current index and the one after it.
    const currentSnap = swiper.snapGrid[snapIndex];
    const nextSnap = swiper.snapGrid[snapIndex + 1];
    if (translate - currentSnap > (nextSnap - currentSnap) * threshold) {
      index += swiper.params.slidesPerGroup;
    }
  } else {
    // The current translate is before the current snap index, so the choice
    // is between the current index and the one before it.
    const prevSnap = swiper.snapGrid[snapIndex - 1];
    const currentSnap = swiper.snapGrid[snapIndex];
    if (translate - prevSnap <= (currentSnap - prevSnap) * threshold) {
      index -= swiper.params.slidesPerGroup;
    }
  }
  index = Math.max(index, 0);
  index = Math.min(index, swiper.slidesGrid.length - 1);
  return swiper.slideTo(index, speed, runCallbacks, internal);
}

function slideToClickedSlide() {
  const swiper = this;
  if (swiper.destroyed) return;
  const {
    params,
    slidesEl
  } = swiper;
  const slidesPerView = params.slidesPerView === 'auto' ? swiper.slidesPerViewDynamic() : params.slidesPerView;
  let slideToIndex = swiper.clickedIndex;
  let realIndex;
  const slideSelector = swiper.isElement ? `swiper-slide` : `.${params.slideClass}`;
  if (params.loop) {
    if (swiper.animating) return;
    realIndex = parseInt(swiper.clickedSlide.getAttribute('data-swiper-slide-index'), 10);
    if (params.centeredSlides) {
      if (slideToIndex < swiper.loopedSlides - slidesPerView / 2 || slideToIndex > swiper.slides.length - swiper.loopedSlides + slidesPerView / 2) {
        swiper.loopFix();
        slideToIndex = swiper.getSlideIndex(elementChildren(slidesEl, `${slideSelector}[data-swiper-slide-index="${realIndex}"]`)[0]);
        nextTick(() => {
          swiper.slideTo(slideToIndex);
        });
      } else {
        swiper.slideTo(slideToIndex);
      }
    } else if (slideToIndex > swiper.slides.length - slidesPerView) {
      swiper.loopFix();
      slideToIndex = swiper.getSlideIndex(elementChildren(slidesEl, `${slideSelector}[data-swiper-slide-index="${realIndex}"]`)[0]);
      nextTick(() => {
        swiper.slideTo(slideToIndex);
      });
    } else {
      swiper.slideTo(slideToIndex);
    }
  } else {
    swiper.slideTo(slideToIndex);
  }
}

var slide = {
  slideTo,
  slideToLoop,
  slideNext,
  slidePrev,
  slideReset,
  slideToClosest,
  slideToClickedSlide
};

function loopCreate(slideRealIndex) {
  const swiper = this;
  const {
    params,
    slidesEl
  } = swiper;
  if (!params.loop || swiper.virtual && swiper.params.virtual.enabled) return;
  const initSlides = () => {
    const slides = elementChildren(slidesEl, `.${params.slideClass}, swiper-slide`);
    slides.forEach((el, index) => {
      el.setAttribute('data-swiper-slide-index', index);
    });
  };
  const gridEnabled = swiper.grid && params.grid && params.grid.rows > 1;
  const slidesPerGroup = params.slidesPerGroup * (gridEnabled ? params.grid.rows : 1);
  const shouldFillGroup = swiper.slides.length % slidesPerGroup !== 0;
  const shouldFillGrid = gridEnabled && swiper.slides.length % params.grid.rows !== 0;
  const addBlankSlides = amountOfSlides => {
    for (let i = 0; i < amountOfSlides; i += 1) {
      const slideEl = swiper.isElement ? createElement('swiper-slide', [params.slideBlankClass]) : createElement('div', [params.slideClass, params.slideBlankClass]);
      swiper.slidesEl.append(slideEl);
    }
  };
  if (shouldFillGroup) {
    if (params.loopAddBlankSlides) {
      const slidesToAdd = slidesPerGroup - swiper.slides.length % slidesPerGroup;
      addBlankSlides(slidesToAdd);
      swiper.recalcSlides();
      swiper.updateSlides();
    } else {
      showWarning('Swiper Loop Warning: The number of slides is not even to slidesPerGroup, loop mode may not function properly. You need to add more slides (or make duplicates, or empty slides)');
    }
    initSlides();
  } else if (shouldFillGrid) {
    if (params.loopAddBlankSlides) {
      const slidesToAdd = params.grid.rows - swiper.slides.length % params.grid.rows;
      addBlankSlides(slidesToAdd);
      swiper.recalcSlides();
      swiper.updateSlides();
    } else {
      showWarning('Swiper Loop Warning: The number of slides is not even to grid.rows, loop mode may not function properly. You need to add more slides (or make duplicates, or empty slides)');
    }
    initSlides();
  } else {
    initSlides();
  }
  swiper.loopFix({
    slideRealIndex,
    direction: params.centeredSlides ? undefined : 'next'
  });
}

function loopFix(_temp) {
  let {
    slideRealIndex,
    slideTo = true,
    direction,
    setTranslate,
    activeSlideIndex,
    byController,
    byMousewheel
  } = _temp === void 0 ? {} : _temp;
  const swiper = this;
  if (!swiper.params.loop) return;
  swiper.emit('beforeLoopFix');
  const {
    slides,
    allowSlidePrev,
    allowSlideNext,
    slidesEl,
    params
  } = swiper;
  const {
    centeredSlides
  } = params;
  swiper.allowSlidePrev = true;
  swiper.allowSlideNext = true;
  if (swiper.virtual && params.virtual.enabled) {
    if (slideTo) {
      if (!params.centeredSlides && swiper.snapIndex === 0) {
        swiper.slideTo(swiper.virtual.slides.length, 0, false, true);
      } else if (params.centeredSlides && swiper.snapIndex < params.slidesPerView) {
        swiper.slideTo(swiper.virtual.slides.length + swiper.snapIndex, 0, false, true);
      } else if (swiper.snapIndex === swiper.snapGrid.length - 1) {
        swiper.slideTo(swiper.virtual.slidesBefore, 0, false, true);
      }
    }
    swiper.allowSlidePrev = allowSlidePrev;
    swiper.allowSlideNext = allowSlideNext;
    swiper.emit('loopFix');
    return;
  }
  let slidesPerView = params.slidesPerView;
  if (slidesPerView === 'auto') {
    slidesPerView = swiper.slidesPerViewDynamic();
  } else {
    slidesPerView = Math.ceil(parseFloat(params.slidesPerView, 10));
    if (centeredSlides && slidesPerView % 2 === 0) {
      slidesPerView = slidesPerView + 1;
    }
  }
  const slidesPerGroup = params.slidesPerGroupAuto ? slidesPerView : params.slidesPerGroup;
  let loopedSlides = slidesPerGroup;
  if (loopedSlides % slidesPerGroup !== 0) {
    loopedSlides += slidesPerGroup - loopedSlides % slidesPerGroup;
  }
  loopedSlides += params.loopAdditionalSlides;
  swiper.loopedSlides = loopedSlides;
  const gridEnabled = swiper.grid && params.grid && params.grid.rows > 1;
  if (slides.length < slidesPerView + loopedSlides) {
    showWarning('Swiper Loop Warning: The number of slides is not enough for loop mode, it will be disabled and not function properly. You need to add more slides (or make duplicates) or lower the values of slidesPerView and slidesPerGroup parameters');
  } else if (gridEnabled && params.grid.fill === 'row') {
    showWarning('Swiper Loop Warning: Loop mode is not compatible with grid.fill = `row`');
  }
  const prependSlidesIndexes = [];
  const appendSlidesIndexes = [];
  let activeIndex = swiper.activeIndex;
  if (typeof activeSlideIndex === 'undefined') {
    activeSlideIndex = swiper.getSlideIndex(slides.filter(el => el.classList.contains(params.slideActiveClass))[0]);
  } else {
    activeIndex = activeSlideIndex;
  }
  const isNext = direction === 'next' || !direction;
  const isPrev = direction === 'prev' || !direction;
  let slidesPrepended = 0;
  let slidesAppended = 0;
  const cols = gridEnabled ? Math.ceil(slides.length / params.grid.rows) : slides.length;
  const activeColIndex = gridEnabled ? slides[activeSlideIndex].column : activeSlideIndex;
  const activeColIndexWithShift = activeColIndex + (centeredSlides && typeof setTranslate === 'undefined' ? -slidesPerView / 2 + 0.5 : 0);
  // prepend last slides before start
  if (activeColIndexWithShift < loopedSlides) {
    slidesPrepended = Math.max(loopedSlides - activeColIndexWithShift, slidesPerGroup);
    for (let i = 0; i < loopedSlides - activeColIndexWithShift; i += 1) {
      const index = i - Math.floor(i / cols) * cols;
      if (gridEnabled) {
        const colIndexToPrepend = cols - index - 1;
        for (let i = slides.length - 1; i >= 0; i -= 1) {
          if (slides[i].column === colIndexToPrepend) prependSlidesIndexes.push(i);
        }
        // slides.forEach((slide, slideIndex) => {
        //   if (slide.column === colIndexToPrepend) prependSlidesIndexes.push(slideIndex);
        // });
      } else {
        prependSlidesIndexes.push(cols - index - 1);
      }
    }
  } else if (activeColIndexWithShift + slidesPerView > cols - loopedSlides) {
    slidesAppended = Math.max(activeColIndexWithShift - (cols - loopedSlides * 2), slidesPerGroup);
    for (let i = 0; i < slidesAppended; i += 1) {
      const index = i - Math.floor(i / cols) * cols;
      if (gridEnabled) {
        slides.forEach((slide, slideIndex) => {
          if (slide.column === index) appendSlidesIndexes.push(slideIndex);
        });
      } else {
        appendSlidesIndexes.push(index);
      }
    }
  }
  swiper.__preventObserver__ = true;
  requestAnimationFrame(() => {
    swiper.__preventObserver__ = false;
  });
  if (isPrev) {
    prependSlidesIndexes.forEach(index => {
      slides[index].swiperLoopMoveDOM = true;
      slidesEl.prepend(slides[index]);
      slides[index].swiperLoopMoveDOM = false;
    });
  }
  if (isNext) {
    appendSlidesIndexes.forEach(index => {
      slides[index].swiperLoopMoveDOM = true;
      slidesEl.append(slides[index]);
      slides[index].swiperLoopMoveDOM = false;
    });
  }
  swiper.recalcSlides();
  if (params.slidesPerView === 'auto') {
    swiper.updateSlides();
  } else if (gridEnabled && (prependSlidesIndexes.length > 0 && isPrev || appendSlidesIndexes.length > 0 && isNext)) {
    swiper.slides.forEach((slide, slideIndex) => {
      swiper.grid.updateSlide(slideIndex, slide, swiper.slides);
    });
  }
  if (params.watchSlidesProgress) {
    swiper.updateSlidesOffset();
  }
  if (slideTo) {
    if (prependSlidesIndexes.length > 0 && isPrev) {
      if (typeof slideRealIndex === 'undefined') {
        const currentSlideTranslate = swiper.slidesGrid[activeIndex];
        const newSlideTranslate = swiper.slidesGrid[activeIndex + slidesPrepended];
        const diff = newSlideTranslate - currentSlideTranslate;
        if (byMousewheel) {
          swiper.setTranslate(swiper.translate - diff);
        } else {
          swiper.slideTo(activeIndex + Math.ceil(slidesPrepended), 0, false, true);
          if (setTranslate) {
            swiper.touchEventsData.startTranslate = swiper.touchEventsData.startTranslate - diff;
            swiper.touchEventsData.currentTranslate = swiper.touchEventsData.currentTranslate - diff;
          }
        }
      } else {
        if (setTranslate) {
          const shift = gridEnabled ? prependSlidesIndexes.length / params.grid.rows : prependSlidesIndexes.length;
          swiper.slideTo(swiper.activeIndex + shift, 0, false, true);
          swiper.touchEventsData.currentTranslate = swiper.translate;
        }
      }
    } else if (appendSlidesIndexes.length > 0 && isNext) {
      if (typeof slideRealIndex === 'undefined') {
        const currentSlideTranslate = swiper.slidesGrid[activeIndex];
        const newSlideTranslate = swiper.slidesGrid[activeIndex - slidesAppended];
        const diff = newSlideTranslate - currentSlideTranslate;
        if (byMousewheel) {
          swiper.setTranslate(swiper.translate - diff);
        } else {
          swiper.slideTo(activeIndex - slidesAppended, 0, false, true);
          if (setTranslate) {
            swiper.touchEventsData.startTranslate = swiper.touchEventsData.startTranslate - diff;
            swiper.touchEventsData.currentTranslate = swiper.touchEventsData.currentTranslate - diff;
          }
        }
      } else {
        const shift = gridEnabled ? appendSlidesIndexes.length / params.grid.rows : appendSlidesIndexes.length;
        swiper.slideTo(swiper.activeIndex - shift, 0, false, true);
      }
    }
  }
  swiper.allowSlidePrev = allowSlidePrev;
  swiper.allowSlideNext = allowSlideNext;
  if (swiper.controller && swiper.controller.control && !byController) {
    const loopParams = {
      slideRealIndex,
      direction,
      setTranslate,
      activeSlideIndex,
      byController: true
    };
    if (Array.isArray(swiper.controller.control)) {
      swiper.controller.control.forEach(c => {
        if (!c.destroyed && c.params.loop) c.loopFix({
          ...loopParams,
          slideTo: c.params.slidesPerView === params.slidesPerView ? slideTo : false
        });
      });
    } else if (swiper.controller.control instanceof swiper.constructor && swiper.controller.control.params.loop) {
      swiper.controller.control.loopFix({
        ...loopParams,
        slideTo: swiper.controller.control.params.slidesPerView === params.slidesPerView ? slideTo : false
      });
    }
  }
  swiper.emit('loopFix');
}

function loopDestroy() {
  const swiper = this;
  const {
    params,
    slidesEl
  } = swiper;
  if (!params.loop || swiper.virtual && swiper.params.virtual.enabled) return;
  swiper.recalcSlides();
  const newSlidesOrder = [];
  swiper.slides.forEach(slideEl => {
    const index = typeof slideEl.swiperSlideIndex === 'undefined' ? slideEl.getAttribute('data-swiper-slide-index') * 1 : slideEl.swiperSlideIndex;
    newSlidesOrder[index] = slideEl;
  });
  swiper.slides.forEach(slideEl => {
    slideEl.removeAttribute('data-swiper-slide-index');
  });
  newSlidesOrder.forEach(slideEl => {
    slidesEl.append(slideEl);
  });
  swiper.recalcSlides();
  swiper.slideTo(swiper.realIndex, 0);
}

var loop = {
  loopCreate,
  loopFix,
  loopDestroy
};

function setGrabCursor(moving) {
  const swiper = this;
  if (!swiper.params.simulateTouch || swiper.params.watchOverflow && swiper.isLocked || swiper.params.cssMode) return;
  const el = swiper.params.touchEventsTarget === 'container' ? swiper.el : swiper.wrapperEl;
  if (swiper.isElement) {
    swiper.__preventObserver__ = true;
  }
  el.style.cursor = 'move';
  el.style.cursor = moving ? 'grabbing' : 'grab';
  if (swiper.isElement) {
    requestAnimationFrame(() => {
      swiper.__preventObserver__ = false;
    });
  }
}

function unsetGrabCursor() {
  const swiper = this;
  if (swiper.params.watchOverflow && swiper.isLocked || swiper.params.cssMode) {
    return;
  }
  if (swiper.isElement) {
    swiper.__preventObserver__ = true;
  }
  swiper[swiper.params.touchEventsTarget === 'container' ? 'el' : 'wrapperEl'].style.cursor = '';
  if (swiper.isElement) {
    requestAnimationFrame(() => {
      swiper.__preventObserver__ = false;
    });
  }
}

var grabCursor = {
  setGrabCursor,
  unsetGrabCursor
};

// Modified from https://stackoverflow.com/questions/54520554/custom-element-getrootnode-closest-function-crossing-multiple-parent-shadowd
function closestElement(selector, base) {
  if (base === void 0) {
    base = this;
  }
  function __closestFrom(el) {
    if (!el || el === getDocument() || el === getWindow()) return null;
    if (el.assignedSlot) el = el.assignedSlot;
    const found = el.closest(selector);
    if (!found && !el.getRootNode) {
      return null;
    }
    return found || __closestFrom(el.getRootNode().host);
  }
  return __closestFrom(base);
}
function preventEdgeSwipe(swiper, event, startX) {
  const window = getWindow();
  const {
    params
  } = swiper;
  const edgeSwipeDetection = params.edgeSwipeDetection;
  const edgeSwipeThreshold = params.edgeSwipeThreshold;
  if (edgeSwipeDetection && (startX <= edgeSwipeThreshold || startX >= window.innerWidth - edgeSwipeThreshold)) {
    if (edgeSwipeDetection === 'prevent') {
      event.preventDefault();
      return true;
    }
    return false;
  }
  return true;
}
function onTouchStart(event) {
  const swiper = this;
  const document = getDocument();
  let e = event;
  if (e.originalEvent) e = e.originalEvent;
  const data = swiper.touchEventsData;
  if (e.type === 'pointerdown') {
    if (data.pointerId !== null && data.pointerId !== e.pointerId) {
      return;
    }
    data.pointerId = e.pointerId;
  } else if (e.type === 'touchstart' && e.targetTouches.length === 1) {
    data.touchId = e.targetTouches[0].identifier;
  }
  if (e.type === 'touchstart') {
    // don't proceed touch event
    preventEdgeSwipe(swiper, e, e.targetTouches[0].pageX);
    return;
  }
  const {
    params,
    touches,
    enabled
  } = swiper;
  if (!enabled) return;
  if (!params.simulateTouch && e.pointerType === 'mouse') return;
  if (swiper.animating && params.preventInteractionOnTransition) {
    return;
  }
  if (!swiper.animating && params.cssMode && params.loop) {
    swiper.loopFix();
  }
  let targetEl = e.target;
  if (params.touchEventsTarget === 'wrapper') {
    if (!swiper.wrapperEl.contains(targetEl)) return;
  }
  if ('which' in e && e.which === 3) return;
  if ('button' in e && e.button > 0) return;
  if (data.isTouched && data.isMoved) return;

  // change target el for shadow root component
  const swipingClassHasValue = !!params.noSwipingClass && params.noSwipingClass !== '';
  // eslint-disable-next-line
  const eventPath = e.composedPath ? e.composedPath() : e.path;
  if (swipingClassHasValue && e.target && e.target.shadowRoot && eventPath) {
    targetEl = eventPath[0];
  }
  const noSwipingSelector = params.noSwipingSelector ? params.noSwipingSelector : `.${params.noSwipingClass}`;
  const isTargetShadow = !!(e.target && e.target.shadowRoot);

  // use closestElement for shadow root element to get the actual closest for nested shadow root element
  if (params.noSwiping && (isTargetShadow ? closestElement(noSwipingSelector, targetEl) : targetEl.closest(noSwipingSelector))) {
    swiper.allowClick = true;
    return;
  }
  if (params.swipeHandler) {
    if (!targetEl.closest(params.swipeHandler)) return;
  }
  touches.currentX = e.pageX;
  touches.currentY = e.pageY;
  const startX = touches.currentX;
  const startY = touches.currentY;

  // Do NOT start if iOS edge swipe is detected. Otherwise iOS app cannot swipe-to-go-back anymore

  if (!preventEdgeSwipe(swiper, e, startX)) {
    return;
  }
  Object.assign(data, {
    isTouched: true,
    isMoved: false,
    allowTouchCallbacks: true,
    isScrolling: undefined,
    startMoving: undefined
  });
  touches.startX = startX;
  touches.startY = startY;
  data.touchStartTime = now();
  swiper.allowClick = true;
  swiper.updateSize();
  swiper.swipeDirection = undefined;
  if (params.threshold > 0) data.allowThresholdMove = false;
  let preventDefault = true;
  if (targetEl.matches(data.focusableElements)) {
    preventDefault = false;
    if (targetEl.nodeName === 'SELECT') {
      data.isTouched = false;
    }
  }
  if (document.activeElement && document.activeElement.matches(data.focusableElements) && document.activeElement !== targetEl) {
    document.activeElement.blur();
  }
  const shouldPreventDefault = preventDefault && swiper.allowTouchMove && params.touchStartPreventDefault;
  if ((params.touchStartForcePreventDefault || shouldPreventDefault) && !targetEl.isContentEditable) {
    e.preventDefault();
  }
  if (params.freeMode && params.freeMode.enabled && swiper.freeMode && swiper.animating && !params.cssMode) {
    swiper.freeMode.onTouchStart();
  }
  swiper.emit('touchStart', e);
}

function onTouchMove(event) {
  const document = getDocument();
  const swiper = this;
  const data = swiper.touchEventsData;
  const {
    params,
    touches,
    rtlTranslate: rtl,
    enabled
  } = swiper;
  if (!enabled) return;
  if (!params.simulateTouch && event.pointerType === 'mouse') return;
  let e = event;
  if (e.originalEvent) e = e.originalEvent;
  if (e.type === 'pointermove') {
    if (data.touchId !== null) return; // return from pointer if we use touch
    const id = e.pointerId;
    if (id !== data.pointerId) return;
  }
  let targetTouch;
  if (e.type === 'touchmove') {
    targetTouch = [...e.changedTouches].filter(t => t.identifier === data.touchId)[0];
    if (!targetTouch || targetTouch.identifier !== data.touchId) return;
  } else {
    targetTouch = e;
  }
  if (!data.isTouched) {
    if (data.startMoving && data.isScrolling) {
      swiper.emit('touchMoveOpposite', e);
    }
    return;
  }
  const pageX = targetTouch.pageX;
  const pageY = targetTouch.pageY;
  if (e.preventedByNestedSwiper) {
    touches.startX = pageX;
    touches.startY = pageY;
    return;
  }
  if (!swiper.allowTouchMove) {
    if (!e.target.matches(data.focusableElements)) {
      swiper.allowClick = false;
    }
    if (data.isTouched) {
      Object.assign(touches, {
        startX: pageX,
        startY: pageY,
        currentX: pageX,
        currentY: pageY
      });
      data.touchStartTime = now();
    }
    return;
  }
  if (params.touchReleaseOnEdges && !params.loop) {
    if (swiper.isVertical()) {
      // Vertical
      if (pageY < touches.startY && swiper.translate <= swiper.maxTranslate() || pageY > touches.startY && swiper.translate >= swiper.minTranslate()) {
        data.isTouched = false;
        data.isMoved = false;
        return;
      }
    } else if (pageX < touches.startX && swiper.translate <= swiper.maxTranslate() || pageX > touches.startX && swiper.translate >= swiper.minTranslate()) {
      return;
    }
  }
  if (document.activeElement) {
    if (e.target === document.activeElement && e.target.matches(data.focusableElements)) {
      data.isMoved = true;
      swiper.allowClick = false;
      return;
    }
  }
  if (data.allowTouchCallbacks) {
    swiper.emit('touchMove', e);
  }
  touches.previousX = touches.currentX;
  touches.previousY = touches.currentY;
  touches.currentX = pageX;
  touches.currentY = pageY;
  const diffX = touches.currentX - touches.startX;
  const diffY = touches.currentY - touches.startY;
  if (swiper.params.threshold && Math.sqrt(diffX ** 2 + diffY ** 2) < swiper.params.threshold) return;
  if (typeof data.isScrolling === 'undefined') {
    let touchAngle;
    if (swiper.isHorizontal() && touches.currentY === touches.startY || swiper.isVertical() && touches.currentX === touches.startX) {
      data.isScrolling = false;
    } else {
      // eslint-disable-next-line
      if (diffX * diffX + diffY * diffY >= 25) {
        touchAngle = Math.atan2(Math.abs(diffY), Math.abs(diffX)) * 180 / Math.PI;
        data.isScrolling = swiper.isHorizontal() ? touchAngle > params.touchAngle : 90 - touchAngle > params.touchAngle;
      }
    }
  }
  if (data.isScrolling) {
    swiper.emit('touchMoveOpposite', e);
  }
  if (typeof data.startMoving === 'undefined') {
    if (touches.currentX !== touches.startX || touches.currentY !== touches.startY) {
      data.startMoving = true;
    }
  }
  if (data.isScrolling || e.type === 'touchmove' && data.preventTouchMoveFromPointerMove) {
    data.isTouched = false;
    return;
  }
  if (!data.startMoving) {
    return;
  }
  swiper.allowClick = false;
  if (!params.cssMode && e.cancelable) {
    e.preventDefault();
  }
  if (params.touchMoveStopPropagation && !params.nested) {
    e.stopPropagation();
  }
  let diff = swiper.isHorizontal() ? diffX : diffY;
  let touchesDiff = swiper.isHorizontal() ? touches.currentX - touches.previousX : touches.currentY - touches.previousY;
  if (params.oneWayMovement) {
    diff = Math.abs(diff) * (rtl ? 1 : -1);
    touchesDiff = Math.abs(touchesDiff) * (rtl ? 1 : -1);
  }
  touches.diff = diff;
  diff *= params.touchRatio;
  if (rtl) {
    diff = -diff;
    touchesDiff = -touchesDiff;
  }
  const prevTouchesDirection = swiper.touchesDirection;
  swiper.swipeDirection = diff > 0 ? 'prev' : 'next';
  swiper.touchesDirection = touchesDiff > 0 ? 'prev' : 'next';
  const isLoop = swiper.params.loop && !params.cssMode;
  const allowLoopFix = swiper.touchesDirection === 'next' && swiper.allowSlideNext || swiper.touchesDirection === 'prev' && swiper.allowSlidePrev;
  if (!data.isMoved) {
    if (isLoop && allowLoopFix) {
      swiper.loopFix({
        direction: swiper.swipeDirection
      });
    }
    data.startTranslate = swiper.getTranslate();
    swiper.setTransition(0);
    if (swiper.animating) {
      const evt = new window.CustomEvent('transitionend', {
        bubbles: true,
        cancelable: true
      });
      swiper.wrapperEl.dispatchEvent(evt);
    }
    data.allowMomentumBounce = false;
    // Grab Cursor
    if (params.grabCursor && (swiper.allowSlideNext === true || swiper.allowSlidePrev === true)) {
      swiper.setGrabCursor(true);
    }
    swiper.emit('sliderFirstMove', e);
  }
  let loopFixed;
  new Date().getTime();
  if (data.isMoved && data.allowThresholdMove && prevTouchesDirection !== swiper.touchesDirection && isLoop && allowLoopFix && Math.abs(diff) >= 1) {
    Object.assign(touches, {
      startX: pageX,
      startY: pageY,
      currentX: pageX,
      currentY: pageY,
      startTranslate: data.currentTranslate
    });
    data.loopSwapReset = true;
    data.startTranslate = data.currentTranslate;
    return;
  }
  swiper.emit('sliderMove', e);
  data.isMoved = true;
  data.currentTranslate = diff + data.startTranslate;
  let disableParentSwiper = true;
  let resistanceRatio = params.resistanceRatio;
  if (params.touchReleaseOnEdges) {
    resistanceRatio = 0;
  }
  if (diff > 0) {
    if (isLoop && allowLoopFix && !loopFixed && data.allowThresholdMove && data.currentTranslate > (params.centeredSlides ? swiper.minTranslate() - swiper.slidesSizesGrid[swiper.activeIndex + 1] : swiper.minTranslate())) {
      swiper.loopFix({
        direction: 'prev',
        setTranslate: true,
        activeSlideIndex: 0
      });
    }
    if (data.currentTranslate > swiper.minTranslate()) {
      disableParentSwiper = false;
      if (params.resistance) {
        data.currentTranslate = swiper.minTranslate() - 1 + (-swiper.minTranslate() + data.startTranslate + diff) ** resistanceRatio;
      }
    }
  } else if (diff < 0) {
    if (isLoop && allowLoopFix && !loopFixed && data.allowThresholdMove && data.currentTranslate < (params.centeredSlides ? swiper.maxTranslate() + swiper.slidesSizesGrid[swiper.slidesSizesGrid.length - 1] : swiper.maxTranslate())) {
      swiper.loopFix({
        direction: 'next',
        setTranslate: true,
        activeSlideIndex: swiper.slides.length - (params.slidesPerView === 'auto' ? swiper.slidesPerViewDynamic() : Math.ceil(parseFloat(params.slidesPerView, 10)))
      });
    }
    if (data.currentTranslate < swiper.maxTranslate()) {
      disableParentSwiper = false;
      if (params.resistance) {
        data.currentTranslate = swiper.maxTranslate() + 1 - (swiper.maxTranslate() - data.startTranslate - diff) ** resistanceRatio;
      }
    }
  }
  if (disableParentSwiper) {
    e.preventedByNestedSwiper = true;
  }

  // Directions locks
  if (!swiper.allowSlideNext && swiper.swipeDirection === 'next' && data.currentTranslate < data.startTranslate) {
    data.currentTranslate = data.startTranslate;
  }
  if (!swiper.allowSlidePrev && swiper.swipeDirection === 'prev' && data.currentTranslate > data.startTranslate) {
    data.currentTranslate = data.startTranslate;
  }
  if (!swiper.allowSlidePrev && !swiper.allowSlideNext) {
    data.currentTranslate = data.startTranslate;
  }

  // Threshold
  if (params.threshold > 0) {
    if (Math.abs(diff) > params.threshold || data.allowThresholdMove) {
      if (!data.allowThresholdMove) {
        data.allowThresholdMove = true;
        touches.startX = touches.currentX;
        touches.startY = touches.currentY;
        data.currentTranslate = data.startTranslate;
        touches.diff = swiper.isHorizontal() ? touches.currentX - touches.startX : touches.currentY - touches.startY;
        return;
      }
    } else {
      data.currentTranslate = data.startTranslate;
      return;
    }
  }
  if (!params.followFinger || params.cssMode) return;

  // Update active index in free mode
  if (params.freeMode && params.freeMode.enabled && swiper.freeMode || params.watchSlidesProgress) {
    swiper.updateActiveIndex();
    swiper.updateSlidesClasses();
  }
  if (params.freeMode && params.freeMode.enabled && swiper.freeMode) {
    swiper.freeMode.onTouchMove();
  }
  // Update progress
  swiper.updateProgress(data.currentTranslate);
  // Update translate
  swiper.setTranslate(data.currentTranslate);
}

function onTouchEnd(event) {
  const swiper = this;
  const data = swiper.touchEventsData;
  let e = event;
  if (e.originalEvent) e = e.originalEvent;
  let targetTouch;
  const isTouchEvent = e.type === 'touchend' || e.type === 'touchcancel';
  if (!isTouchEvent) {
    if (data.touchId !== null) return; // return from pointer if we use touch
    if (e.pointerId !== data.pointerId) return;
    targetTouch = e;
  } else {
    targetTouch = [...e.changedTouches].filter(t => t.identifier === data.touchId)[0];
    if (!targetTouch || targetTouch.identifier !== data.touchId) return;
  }
  if (['pointercancel', 'pointerout', 'pointerleave', 'contextmenu'].includes(e.type)) {
    const proceed = ['pointercancel', 'contextmenu'].includes(e.type) && (swiper.browser.isSafari || swiper.browser.isWebView);
    if (!proceed) {
      return;
    }
  }
  data.pointerId = null;
  data.touchId = null;
  const {
    params,
    touches,
    rtlTranslate: rtl,
    slidesGrid,
    enabled
  } = swiper;
  if (!enabled) return;
  if (!params.simulateTouch && e.pointerType === 'mouse') return;
  if (data.allowTouchCallbacks) {
    swiper.emit('touchEnd', e);
  }
  data.allowTouchCallbacks = false;
  if (!data.isTouched) {
    if (data.isMoved && params.grabCursor) {
      swiper.setGrabCursor(false);
    }
    data.isMoved = false;
    data.startMoving = false;
    return;
  }

  // Return Grab Cursor
  if (params.grabCursor && data.isMoved && data.isTouched && (swiper.allowSlideNext === true || swiper.allowSlidePrev === true)) {
    swiper.setGrabCursor(false);
  }

  // Time diff
  const touchEndTime = now();
  const timeDiff = touchEndTime - data.touchStartTime;

  // Tap, doubleTap, Click
  if (swiper.allowClick) {
    const pathTree = e.path || e.composedPath && e.composedPath();
    swiper.updateClickedSlide(pathTree && pathTree[0] || e.target, pathTree);
    swiper.emit('tap click', e);
    if (timeDiff < 300 && touchEndTime - data.lastClickTime < 300) {
      swiper.emit('doubleTap doubleClick', e);
    }
  }
  data.lastClickTime = now();
  nextTick(() => {
    if (!swiper.destroyed) swiper.allowClick = true;
  });
  if (!data.isTouched || !data.isMoved || !swiper.swipeDirection || touches.diff === 0 && !data.loopSwapReset || data.currentTranslate === data.startTranslate && !data.loopSwapReset) {
    data.isTouched = false;
    data.isMoved = false;
    data.startMoving = false;
    return;
  }
  data.isTouched = false;
  data.isMoved = false;
  data.startMoving = false;
  let currentPos;
  if (params.followFinger) {
    currentPos = rtl ? swiper.translate : -swiper.translate;
  } else {
    currentPos = -data.currentTranslate;
  }
  if (params.cssMode) {
    return;
  }
  if (params.freeMode && params.freeMode.enabled) {
    swiper.freeMode.onTouchEnd({
      currentPos
    });
    return;
  }

  // Find current slide
  const swipeToLast = currentPos >= -swiper.maxTranslate() && !swiper.params.loop;
  let stopIndex = 0;
  let groupSize = swiper.slidesSizesGrid[0];
  for (let i = 0; i < slidesGrid.length; i += i < params.slidesPerGroupSkip ? 1 : params.slidesPerGroup) {
    const increment = i < params.slidesPerGroupSkip - 1 ? 1 : params.slidesPerGroup;
    if (typeof slidesGrid[i + increment] !== 'undefined') {
      if (swipeToLast || currentPos >= slidesGrid[i] && currentPos < slidesGrid[i + increment]) {
        stopIndex = i;
        groupSize = slidesGrid[i + increment] - slidesGrid[i];
      }
    } else if (swipeToLast || currentPos >= slidesGrid[i]) {
      stopIndex = i;
      groupSize = slidesGrid[slidesGrid.length - 1] - slidesGrid[slidesGrid.length - 2];
    }
  }
  let rewindFirstIndex = null;
  let rewindLastIndex = null;
  if (params.rewind) {
    if (swiper.isBeginning) {
      rewindLastIndex = params.virtual && params.virtual.enabled && swiper.virtual ? swiper.virtual.slides.length - 1 : swiper.slides.length - 1;
    } else if (swiper.isEnd) {
      rewindFirstIndex = 0;
    }
  }
  // Find current slide size
  const ratio = (currentPos - slidesGrid[stopIndex]) / groupSize;
  const increment = stopIndex < params.slidesPerGroupSkip - 1 ? 1 : params.slidesPerGroup;
  if (timeDiff > params.longSwipesMs) {
    // Long touches
    if (!params.longSwipes) {
      swiper.slideTo(swiper.activeIndex);
      return;
    }
    if (swiper.swipeDirection === 'next') {
      if (ratio >= params.longSwipesRatio) swiper.slideTo(params.rewind && swiper.isEnd ? rewindFirstIndex : stopIndex + increment);else swiper.slideTo(stopIndex);
    }
    if (swiper.swipeDirection === 'prev') {
      if (ratio > 1 - params.longSwipesRatio) {
        swiper.slideTo(stopIndex + increment);
      } else if (rewindLastIndex !== null && ratio < 0 && Math.abs(ratio) > params.longSwipesRatio) {
        swiper.slideTo(rewindLastIndex);
      } else {
        swiper.slideTo(stopIndex);
      }
    }
  } else {
    // Short swipes
    if (!params.shortSwipes) {
      swiper.slideTo(swiper.activeIndex);
      return;
    }
    const isNavButtonTarget = swiper.navigation && (e.target === swiper.navigation.nextEl || e.target === swiper.navigation.prevEl);
    if (!isNavButtonTarget) {
      if (swiper.swipeDirection === 'next') {
        swiper.slideTo(rewindFirstIndex !== null ? rewindFirstIndex : stopIndex + increment);
      }
      if (swiper.swipeDirection === 'prev') {
        swiper.slideTo(rewindLastIndex !== null ? rewindLastIndex : stopIndex);
      }
    } else if (e.target === swiper.navigation.nextEl) {
      swiper.slideTo(stopIndex + increment);
    } else {
      swiper.slideTo(stopIndex);
    }
  }
}

function onResize() {
  const swiper = this;
  const {
    params,
    el
  } = swiper;
  if (el && el.offsetWidth === 0) return;

  // Breakpoints
  if (params.breakpoints) {
    swiper.setBreakpoint();
  }

  // Save locks
  const {
    allowSlideNext,
    allowSlidePrev,
    snapGrid
  } = swiper;
  const isVirtual = swiper.virtual && swiper.params.virtual.enabled;

  // Disable locks on resize
  swiper.allowSlideNext = true;
  swiper.allowSlidePrev = true;
  swiper.updateSize();
  swiper.updateSlides();
  swiper.updateSlidesClasses();
  const isVirtualLoop = isVirtual && params.loop;
  if ((params.slidesPerView === 'auto' || params.slidesPerView > 1) && swiper.isEnd && !swiper.isBeginning && !swiper.params.centeredSlides && !isVirtualLoop) {
    swiper.slideTo(swiper.slides.length - 1, 0, false, true);
  } else {
    if (swiper.params.loop && !isVirtual) {
      swiper.slideToLoop(swiper.realIndex, 0, false, true);
    } else {
      swiper.slideTo(swiper.activeIndex, 0, false, true);
    }
  }
  if (swiper.autoplay && swiper.autoplay.running && swiper.autoplay.paused) {
    clearTimeout(swiper.autoplay.resizeTimeout);
    swiper.autoplay.resizeTimeout = setTimeout(() => {
      if (swiper.autoplay && swiper.autoplay.running && swiper.autoplay.paused) {
        swiper.autoplay.resume();
      }
    }, 500);
  }
  // Return locks after resize
  swiper.allowSlidePrev = allowSlidePrev;
  swiper.allowSlideNext = allowSlideNext;
  if (swiper.params.watchOverflow && snapGrid !== swiper.snapGrid) {
    swiper.checkOverflow();
  }
}

function onClick(e) {
  const swiper = this;
  if (!swiper.enabled) return;
  if (!swiper.allowClick) {
    if (swiper.params.preventClicks) e.preventDefault();
    if (swiper.params.preventClicksPropagation && swiper.animating) {
      e.stopPropagation();
      e.stopImmediatePropagation();
    }
  }
}

function onScroll() {
  const swiper = this;
  const {
    wrapperEl,
    rtlTranslate,
    enabled
  } = swiper;
  if (!enabled) return;
  swiper.previousTranslate = swiper.translate;
  if (swiper.isHorizontal()) {
    swiper.translate = -wrapperEl.scrollLeft;
  } else {
    swiper.translate = -wrapperEl.scrollTop;
  }
  // eslint-disable-next-line
  if (swiper.translate === 0) swiper.translate = 0;
  swiper.updateActiveIndex();
  swiper.updateSlidesClasses();
  let newProgress;
  const translatesDiff = swiper.maxTranslate() - swiper.minTranslate();
  if (translatesDiff === 0) {
    newProgress = 0;
  } else {
    newProgress = (swiper.translate - swiper.minTranslate()) / translatesDiff;
  }
  if (newProgress !== swiper.progress) {
    swiper.updateProgress(rtlTranslate ? -swiper.translate : swiper.translate);
  }
  swiper.emit('setTranslate', swiper.translate, false);
}

function onLoad(e) {
  const swiper = this;
  processLazyPreloader(swiper, e.target);
  if (swiper.params.cssMode || swiper.params.slidesPerView !== 'auto' && !swiper.params.autoHeight) {
    return;
  }
  swiper.update();
}

function onDocumentTouchStart() {
  const swiper = this;
  if (swiper.documentTouchHandlerProceeded) return;
  swiper.documentTouchHandlerProceeded = true;
  if (swiper.params.touchReleaseOnEdges) {
    swiper.el.style.touchAction = 'auto';
  }
}

const events = (swiper, method) => {
  const document = getDocument();
  const {
    params,
    el,
    wrapperEl,
    device
  } = swiper;
  const capture = !!params.nested;
  const domMethod = method === 'on' ? 'addEventListener' : 'removeEventListener';
  const swiperMethod = method;

  // Touch Events
  document[domMethod]('touchstart', swiper.onDocumentTouchStart, {
    passive: false,
    capture
  });
  el[domMethod]('touchstart', swiper.onTouchStart, {
    passive: false
  });
  el[domMethod]('pointerdown', swiper.onTouchStart, {
    passive: false
  });
  document[domMethod]('touchmove', swiper.onTouchMove, {
    passive: false,
    capture
  });
  document[domMethod]('pointermove', swiper.onTouchMove, {
    passive: false,
    capture
  });
  document[domMethod]('touchend', swiper.onTouchEnd, {
    passive: true
  });
  document[domMethod]('pointerup', swiper.onTouchEnd, {
    passive: true
  });
  document[domMethod]('pointercancel', swiper.onTouchEnd, {
    passive: true
  });
  document[domMethod]('touchcancel', swiper.onTouchEnd, {
    passive: true
  });
  document[domMethod]('pointerout', swiper.onTouchEnd, {
    passive: true
  });
  document[domMethod]('pointerleave', swiper.onTouchEnd, {
    passive: true
  });
  document[domMethod]('contextmenu', swiper.onTouchEnd, {
    passive: true
  });

  // Prevent Links Clicks
  if (params.preventClicks || params.preventClicksPropagation) {
    el[domMethod]('click', swiper.onClick, true);
  }
  if (params.cssMode) {
    wrapperEl[domMethod]('scroll', swiper.onScroll);
  }

  // Resize handler
  if (params.updateOnWindowResize) {
    swiper[swiperMethod](device.ios || device.android ? 'resize orientationchange observerUpdate' : 'resize observerUpdate', onResize, true);
  } else {
    swiper[swiperMethod]('observerUpdate', onResize, true);
  }

  // Images loader
  el[domMethod]('load', swiper.onLoad, {
    capture: true
  });
};
function attachEvents() {
  const swiper = this;
  const {
    params
  } = swiper;
  swiper.onTouchStart = onTouchStart.bind(swiper);
  swiper.onTouchMove = onTouchMove.bind(swiper);
  swiper.onTouchEnd = onTouchEnd.bind(swiper);
  swiper.onDocumentTouchStart = onDocumentTouchStart.bind(swiper);
  if (params.cssMode) {
    swiper.onScroll = onScroll.bind(swiper);
  }
  swiper.onClick = onClick.bind(swiper);
  swiper.onLoad = onLoad.bind(swiper);
  events(swiper, 'on');
}
function detachEvents() {
  const swiper = this;
  events(swiper, 'off');
}
var events$1 = {
  attachEvents,
  detachEvents
};

const isGridEnabled = (swiper, params) => {
  return swiper.grid && params.grid && params.grid.rows > 1;
};
function setBreakpoint() {
  const swiper = this;
  const {
    realIndex,
    initialized,
    params,
    el
  } = swiper;
  const breakpoints = params.breakpoints;
  if (!breakpoints || breakpoints && Object.keys(breakpoints).length === 0) return;

  // Get breakpoint for window width and update parameters
  const breakpoint = swiper.getBreakpoint(breakpoints, swiper.params.breakpointsBase, swiper.el);
  if (!breakpoint || swiper.currentBreakpoint === breakpoint) return;
  const breakpointOnlyParams = breakpoint in breakpoints ? breakpoints[breakpoint] : undefined;
  const breakpointParams = breakpointOnlyParams || swiper.originalParams;
  const wasMultiRow = isGridEnabled(swiper, params);
  const isMultiRow = isGridEnabled(swiper, breakpointParams);
  const wasGrabCursor = swiper.params.grabCursor;
  const isGrabCursor = breakpointParams.grabCursor;
  const wasEnabled = params.enabled;
  if (wasMultiRow && !isMultiRow) {
    el.classList.remove(`${params.containerModifierClass}grid`, `${params.containerModifierClass}grid-column`);
    swiper.emitContainerClasses();
  } else if (!wasMultiRow && isMultiRow) {
    el.classList.add(`${params.containerModifierClass}grid`);
    if (breakpointParams.grid.fill && breakpointParams.grid.fill === 'column' || !breakpointParams.grid.fill && params.grid.fill === 'column') {
      el.classList.add(`${params.containerModifierClass}grid-column`);
    }
    swiper.emitContainerClasses();
  }
  if (wasGrabCursor && !isGrabCursor) {
    swiper.unsetGrabCursor();
  } else if (!wasGrabCursor && isGrabCursor) {
    swiper.setGrabCursor();
  }

  // Toggle navigation, pagination, scrollbar
  ['navigation', 'pagination', 'scrollbar'].forEach(prop => {
    if (typeof breakpointParams[prop] === 'undefined') return;
    const wasModuleEnabled = params[prop] && params[prop].enabled;
    const isModuleEnabled = breakpointParams[prop] && breakpointParams[prop].enabled;
    if (wasModuleEnabled && !isModuleEnabled) {
      swiper[prop].disable();
    }
    if (!wasModuleEnabled && isModuleEnabled) {
      swiper[prop].enable();
    }
  });
  const directionChanged = breakpointParams.direction && breakpointParams.direction !== params.direction;
  const needsReLoop = params.loop && (breakpointParams.slidesPerView !== params.slidesPerView || directionChanged);
  const wasLoop = params.loop;
  if (directionChanged && initialized) {
    swiper.changeDirection();
  }
  extend(swiper.params, breakpointParams);
  const isEnabled = swiper.params.enabled;
  const hasLoop = swiper.params.loop;
  Object.assign(swiper, {
    allowTouchMove: swiper.params.allowTouchMove,
    allowSlideNext: swiper.params.allowSlideNext,
    allowSlidePrev: swiper.params.allowSlidePrev
  });
  if (wasEnabled && !isEnabled) {
    swiper.disable();
  } else if (!wasEnabled && isEnabled) {
    swiper.enable();
  }
  swiper.currentBreakpoint = breakpoint;
  swiper.emit('_beforeBreakpoint', breakpointParams);
  if (initialized) {
    if (needsReLoop) {
      swiper.loopDestroy();
      swiper.loopCreate(realIndex);
      swiper.updateSlides();
    } else if (!wasLoop && hasLoop) {
      swiper.loopCreate(realIndex);
      swiper.updateSlides();
    } else if (wasLoop && !hasLoop) {
      swiper.loopDestroy();
    }
  }
  swiper.emit('breakpoint', breakpointParams);
}

function getBreakpoint(breakpoints, base, containerEl) {
  if (base === void 0) {
    base = 'window';
  }
  if (!breakpoints || base === 'container' && !containerEl) return undefined;
  let breakpoint = false;
  const window = getWindow();
  const currentHeight = base === 'window' ? window.innerHeight : containerEl.clientHeight;
  const points = Object.keys(breakpoints).map(point => {
    if (typeof point === 'string' && point.indexOf('@') === 0) {
      const minRatio = parseFloat(point.substr(1));
      const value = currentHeight * minRatio;
      return {
        value,
        point
      };
    }
    return {
      value: point,
      point
    };
  });
  points.sort((a, b) => parseInt(a.value, 10) - parseInt(b.value, 10));
  for (let i = 0; i < points.length; i += 1) {
    const {
      point,
      value
    } = points[i];
    if (base === 'window') {
      if (window.matchMedia(`(min-width: ${value}px)`).matches) {
        breakpoint = point;
      }
    } else if (value <= containerEl.clientWidth) {
      breakpoint = point;
    }
  }
  return breakpoint || 'max';
}

var breakpoints = {
  setBreakpoint,
  getBreakpoint
};

function prepareClasses(entries, prefix) {
  const resultClasses = [];
  entries.forEach(item => {
    if (typeof item === 'object') {
      Object.keys(item).forEach(classNames => {
        if (item[classNames]) {
          resultClasses.push(prefix + classNames);
        }
      });
    } else if (typeof item === 'string') {
      resultClasses.push(prefix + item);
    }
  });
  return resultClasses;
}
function addClasses() {
  const swiper = this;
  const {
    classNames,
    params,
    rtl,
    el,
    device
  } = swiper;
  // prettier-ignore
  const suffixes = prepareClasses(['initialized', params.direction, {
    'free-mode': swiper.params.freeMode && params.freeMode.enabled
  }, {
    'autoheight': params.autoHeight
  }, {
    'rtl': rtl
  }, {
    'grid': params.grid && params.grid.rows > 1
  }, {
    'grid-column': params.grid && params.grid.rows > 1 && params.grid.fill === 'column'
  }, {
    'android': device.android
  }, {
    'ios': device.ios
  }, {
    'css-mode': params.cssMode
  }, {
    'centered': params.cssMode && params.centeredSlides
  }, {
    'watch-progress': params.watchSlidesProgress
  }], params.containerModifierClass);
  classNames.push(...suffixes);
  el.classList.add(...classNames);
  swiper.emitContainerClasses();
}

function removeClasses() {
  const swiper = this;
  const {
    el,
    classNames
  } = swiper;
  el.classList.remove(...classNames);
  swiper.emitContainerClasses();
}

var classes = {
  addClasses,
  removeClasses
};

function checkOverflow() {
  const swiper = this;
  const {
    isLocked: wasLocked,
    params
  } = swiper;
  const {
    slidesOffsetBefore
  } = params;
  if (slidesOffsetBefore) {
    const lastSlideIndex = swiper.slides.length - 1;
    const lastSlideRightEdge = swiper.slidesGrid[lastSlideIndex] + swiper.slidesSizesGrid[lastSlideIndex] + slidesOffsetBefore * 2;
    swiper.isLocked = swiper.size > lastSlideRightEdge;
  } else {
    swiper.isLocked = swiper.snapGrid.length === 1;
  }
  if (params.allowSlideNext === true) {
    swiper.allowSlideNext = !swiper.isLocked;
  }
  if (params.allowSlidePrev === true) {
    swiper.allowSlidePrev = !swiper.isLocked;
  }
  if (wasLocked && wasLocked !== swiper.isLocked) {
    swiper.isEnd = false;
  }
  if (wasLocked !== swiper.isLocked) {
    swiper.emit(swiper.isLocked ? 'lock' : 'unlock');
  }
}
var checkOverflow$1 = {
  checkOverflow
};

var defaults = {
  init: true,
  direction: 'horizontal',
  oneWayMovement: false,
  swiperElementNodeName: 'SWIPER-CONTAINER',
  touchEventsTarget: 'wrapper',
  initialSlide: 0,
  speed: 300,
  cssMode: false,
  updateOnWindowResize: true,
  resizeObserver: true,
  nested: false,
  createElements: false,
  eventsPrefix: 'swiper',
  enabled: true,
  focusableElements: 'input, select, option, textarea, button, video, label',
  // Overrides
  width: null,
  height: null,
  //
  preventInteractionOnTransition: false,
  // ssr
  userAgent: null,
  url: null,
  // To support iOS's swipe-to-go-back gesture (when being used in-app).
  edgeSwipeDetection: false,
  edgeSwipeThreshold: 20,
  // Autoheight
  autoHeight: false,
  // Set wrapper width
  setWrapperSize: false,
  // Virtual Translate
  virtualTranslate: false,
  // Effects
  effect: 'slide',
  // 'slide' or 'fade' or 'cube' or 'coverflow' or 'flip'

  // Breakpoints
  breakpoints: undefined,
  breakpointsBase: 'window',
  // Slides grid
  spaceBetween: 0,
  slidesPerView: 1,
  slidesPerGroup: 1,
  slidesPerGroupSkip: 0,
  slidesPerGroupAuto: false,
  centeredSlides: false,
  centeredSlidesBounds: false,
  slidesOffsetBefore: 0,
  // in px
  slidesOffsetAfter: 0,
  // in px
  normalizeSlideIndex: true,
  centerInsufficientSlides: false,
  // Disable swiper and hide navigation when container not overflow
  watchOverflow: true,
  // Round length
  roundLengths: false,
  // Touches
  touchRatio: 1,
  touchAngle: 45,
  simulateTouch: true,
  shortSwipes: true,
  longSwipes: true,
  longSwipesRatio: 0.5,
  longSwipesMs: 300,
  followFinger: true,
  allowTouchMove: true,
  threshold: 5,
  touchMoveStopPropagation: false,
  touchStartPreventDefault: true,
  touchStartForcePreventDefault: false,
  touchReleaseOnEdges: false,
  // Unique Navigation Elements
  uniqueNavElements: true,
  // Resistance
  resistance: true,
  resistanceRatio: 0.85,
  // Progress
  watchSlidesProgress: false,
  // Cursor
  grabCursor: false,
  // Clicks
  preventClicks: true,
  preventClicksPropagation: true,
  slideToClickedSlide: false,
  // loop
  loop: false,
  loopAddBlankSlides: true,
  loopAdditionalSlides: 0,
  loopPreventsSliding: true,
  // rewind
  rewind: false,
  // Swiping/no swiping
  allowSlidePrev: true,
  allowSlideNext: true,
  swipeHandler: null,
  // '.swipe-handler',
  noSwiping: true,
  noSwipingClass: 'swiper-no-swiping',
  noSwipingSelector: null,
  // Passive Listeners
  passiveListeners: true,
  maxBackfaceHiddenSlides: 10,
  // NS
  containerModifierClass: 'swiper-',
  // NEW
  slideClass: 'swiper-slide',
  slideBlankClass: 'swiper-slide-blank',
  slideActiveClass: 'swiper-slide-active',
  slideVisibleClass: 'swiper-slide-visible',
  slideFullyVisibleClass: 'swiper-slide-fully-visible',
  slideNextClass: 'swiper-slide-next',
  slidePrevClass: 'swiper-slide-prev',
  wrapperClass: 'swiper-wrapper',
  lazyPreloaderClass: 'swiper-lazy-preloader',
  lazyPreloadPrevNext: 0,
  // Callbacks
  runCallbacksOnInit: true,
  // Internals
  _emitClasses: false
};

function moduleExtendParams(params, allModulesParams) {
  return function extendParams(obj) {
    if (obj === void 0) {
      obj = {};
    }
    const moduleParamName = Object.keys(obj)[0];
    const moduleParams = obj[moduleParamName];
    if (typeof moduleParams !== 'object' || moduleParams === null) {
      extend(allModulesParams, obj);
      return;
    }
    if (params[moduleParamName] === true) {
      params[moduleParamName] = {
        enabled: true
      };
    }
    if (moduleParamName === 'navigation' && params[moduleParamName] && params[moduleParamName].enabled && !params[moduleParamName].prevEl && !params[moduleParamName].nextEl) {
      params[moduleParamName].auto = true;
    }
    if (['pagination', 'scrollbar'].indexOf(moduleParamName) >= 0 && params[moduleParamName] && params[moduleParamName].enabled && !params[moduleParamName].el) {
      params[moduleParamName].auto = true;
    }
    if (!(moduleParamName in params && 'enabled' in moduleParams)) {
      extend(allModulesParams, obj);
      return;
    }
    if (typeof params[moduleParamName] === 'object' && !('enabled' in params[moduleParamName])) {
      params[moduleParamName].enabled = true;
    }
    if (!params[moduleParamName]) params[moduleParamName] = {
      enabled: false
    };
    extend(allModulesParams, obj);
  };
}

/* eslint no-param-reassign: "off" */
const prototypes = {
  eventsEmitter,
  update,
  translate,
  transition,
  slide,
  loop,
  grabCursor,
  events: events$1,
  breakpoints,
  checkOverflow: checkOverflow$1,
  classes
};
const extendedDefaults = {};
class Swiper {
  constructor() {
    let el;
    let params;
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    if (args.length === 1 && args[0].constructor && Object.prototype.toString.call(args[0]).slice(8, -1) === 'Object') {
      params = args[0];
    } else {
      [el, params] = args;
    }
    if (!params) params = {};
    params = extend({}, params);
    if (el && !params.el) params.el = el;
    const document = getDocument();
    if (params.el && typeof params.el === 'string' && document.querySelectorAll(params.el).length > 1) {
      const swipers = [];
      document.querySelectorAll(params.el).forEach(containerEl => {
        const newParams = extend({}, params, {
          el: containerEl
        });
        swipers.push(new Swiper(newParams));
      });
      // eslint-disable-next-line no-constructor-return
      return swipers;
    }

    // Swiper Instance
    const swiper = this;
    swiper.__swiper__ = true;
    swiper.support = getSupport();
    swiper.device = getDevice({
      userAgent: params.userAgent
    });
    swiper.browser = getBrowser();
    swiper.eventsListeners = {};
    swiper.eventsAnyListeners = [];
    swiper.modules = [...swiper.__modules__];
    if (params.modules && Array.isArray(params.modules)) {
      swiper.modules.push(...params.modules);
    }
    const allModulesParams = {};
    swiper.modules.forEach(mod => {
      mod({
        params,
        swiper,
        extendParams: moduleExtendParams(params, allModulesParams),
        on: swiper.on.bind(swiper),
        once: swiper.once.bind(swiper),
        off: swiper.off.bind(swiper),
        emit: swiper.emit.bind(swiper)
      });
    });

    // Extend defaults with modules params
    const swiperParams = extend({}, defaults, allModulesParams);

    // Extend defaults with passed params
    swiper.params = extend({}, swiperParams, extendedDefaults, params);
    swiper.originalParams = extend({}, swiper.params);
    swiper.passedParams = extend({}, params);

    // add event listeners
    if (swiper.params && swiper.params.on) {
      Object.keys(swiper.params.on).forEach(eventName => {
        swiper.on(eventName, swiper.params.on[eventName]);
      });
    }
    if (swiper.params && swiper.params.onAny) {
      swiper.onAny(swiper.params.onAny);
    }

    // Extend Swiper
    Object.assign(swiper, {
      enabled: swiper.params.enabled,
      el,
      // Classes
      classNames: [],
      // Slides
      slides: [],
      slidesGrid: [],
      snapGrid: [],
      slidesSizesGrid: [],
      // isDirection
      isHorizontal() {
        return swiper.params.direction === 'horizontal';
      },
      isVertical() {
        return swiper.params.direction === 'vertical';
      },
      // Indexes
      activeIndex: 0,
      realIndex: 0,
      //
      isBeginning: true,
      isEnd: false,
      // Props
      translate: 0,
      previousTranslate: 0,
      progress: 0,
      velocity: 0,
      animating: false,
      cssOverflowAdjustment() {
        // Returns 0 unless `translate` is > 2**23
        // Should be subtracted from css values to prevent overflow
        return Math.trunc(this.translate / 2 ** 23) * 2 ** 23;
      },
      // Locks
      allowSlideNext: swiper.params.allowSlideNext,
      allowSlidePrev: swiper.params.allowSlidePrev,
      // Touch Events
      touchEventsData: {
        isTouched: undefined,
        isMoved: undefined,
        allowTouchCallbacks: undefined,
        touchStartTime: undefined,
        isScrolling: undefined,
        currentTranslate: undefined,
        startTranslate: undefined,
        allowThresholdMove: undefined,
        // Form elements to match
        focusableElements: swiper.params.focusableElements,
        // Last click time
        lastClickTime: 0,
        clickTimeout: undefined,
        // Velocities
        velocities: [],
        allowMomentumBounce: undefined,
        startMoving: undefined,
        pointerId: null,
        touchId: null
      },
      // Clicks
      allowClick: true,
      // Touches
      allowTouchMove: swiper.params.allowTouchMove,
      touches: {
        startX: 0,
        startY: 0,
        currentX: 0,
        currentY: 0,
        diff: 0
      },
      // Images
      imagesToLoad: [],
      imagesLoaded: 0
    });
    swiper.emit('_swiper');

    // Init
    if (swiper.params.init) {
      swiper.init();
    }

    // Return app instance
    // eslint-disable-next-line no-constructor-return
    return swiper;
  }
  getDirectionLabel(property) {
    if (this.isHorizontal()) {
      return property;
    }
    // prettier-ignore
    return {
      'width': 'height',
      'margin-top': 'margin-left',
      'margin-bottom ': 'margin-right',
      'margin-left': 'margin-top',
      'margin-right': 'margin-bottom',
      'padding-left': 'padding-top',
      'padding-right': 'padding-bottom',
      'marginRight': 'marginBottom'
    }[property];
  }
  getSlideIndex(slideEl) {
    const {
      slidesEl,
      params
    } = this;
    const slides = elementChildren(slidesEl, `.${params.slideClass}, swiper-slide`);
    const firstSlideIndex = elementIndex(slides[0]);
    return elementIndex(slideEl) - firstSlideIndex;
  }
  getSlideIndexByData(index) {
    return this.getSlideIndex(this.slides.filter(slideEl => slideEl.getAttribute('data-swiper-slide-index') * 1 === index)[0]);
  }
  recalcSlides() {
    const swiper = this;
    const {
      slidesEl,
      params
    } = swiper;
    swiper.slides = elementChildren(slidesEl, `.${params.slideClass}, swiper-slide`);
  }
  enable() {
    const swiper = this;
    if (swiper.enabled) return;
    swiper.enabled = true;
    if (swiper.params.grabCursor) {
      swiper.setGrabCursor();
    }
    swiper.emit('enable');
  }
  disable() {
    const swiper = this;
    if (!swiper.enabled) return;
    swiper.enabled = false;
    if (swiper.params.grabCursor) {
      swiper.unsetGrabCursor();
    }
    swiper.emit('disable');
  }
  setProgress(progress, speed) {
    const swiper = this;
    progress = Math.min(Math.max(progress, 0), 1);
    const min = swiper.minTranslate();
    const max = swiper.maxTranslate();
    const current = (max - min) * progress + min;
    swiper.translateTo(current, typeof speed === 'undefined' ? 0 : speed);
    swiper.updateActiveIndex();
    swiper.updateSlidesClasses();
  }
  emitContainerClasses() {
    const swiper = this;
    if (!swiper.params._emitClasses || !swiper.el) return;
    const cls = swiper.el.className.split(' ').filter(className => {
      return className.indexOf('swiper') === 0 || className.indexOf(swiper.params.containerModifierClass) === 0;
    });
    swiper.emit('_containerClasses', cls.join(' '));
  }
  getSlideClasses(slideEl) {
    const swiper = this;
    if (swiper.destroyed) return '';
    return slideEl.className.split(' ').filter(className => {
      return className.indexOf('swiper-slide') === 0 || className.indexOf(swiper.params.slideClass) === 0;
    }).join(' ');
  }
  emitSlidesClasses() {
    const swiper = this;
    if (!swiper.params._emitClasses || !swiper.el) return;
    const updates = [];
    swiper.slides.forEach(slideEl => {
      const classNames = swiper.getSlideClasses(slideEl);
      updates.push({
        slideEl,
        classNames
      });
      swiper.emit('_slideClass', slideEl, classNames);
    });
    swiper.emit('_slideClasses', updates);
  }
  slidesPerViewDynamic(view, exact) {
    if (view === void 0) {
      view = 'current';
    }
    if (exact === void 0) {
      exact = false;
    }
    const swiper = this;
    const {
      params,
      slides,
      slidesGrid,
      slidesSizesGrid,
      size: swiperSize,
      activeIndex
    } = swiper;
    let spv = 1;
    if (typeof params.slidesPerView === 'number') return params.slidesPerView;
    if (params.centeredSlides) {
      let slideSize = slides[activeIndex] ? Math.ceil(slides[activeIndex].swiperSlideSize) : 0;
      let breakLoop;
      for (let i = activeIndex + 1; i < slides.length; i += 1) {
        if (slides[i] && !breakLoop) {
          slideSize += Math.ceil(slides[i].swiperSlideSize);
          spv += 1;
          if (slideSize > swiperSize) breakLoop = true;
        }
      }
      for (let i = activeIndex - 1; i >= 0; i -= 1) {
        if (slides[i] && !breakLoop) {
          slideSize += slides[i].swiperSlideSize;
          spv += 1;
          if (slideSize > swiperSize) breakLoop = true;
        }
      }
    } else {
      // eslint-disable-next-line
      if (view === 'current') {
        for (let i = activeIndex + 1; i < slides.length; i += 1) {
          const slideInView = exact ? slidesGrid[i] + slidesSizesGrid[i] - slidesGrid[activeIndex] < swiperSize : slidesGrid[i] - slidesGrid[activeIndex] < swiperSize;
          if (slideInView) {
            spv += 1;
          }
        }
      } else {
        // previous
        for (let i = activeIndex - 1; i >= 0; i -= 1) {
          const slideInView = slidesGrid[activeIndex] - slidesGrid[i] < swiperSize;
          if (slideInView) {
            spv += 1;
          }
        }
      }
    }
    return spv;
  }
  update() {
    const swiper = this;
    if (!swiper || swiper.destroyed) return;
    const {
      snapGrid,
      params
    } = swiper;
    // Breakpoints
    if (params.breakpoints) {
      swiper.setBreakpoint();
    }
    [...swiper.el.querySelectorAll('[loading="lazy"]')].forEach(imageEl => {
      if (imageEl.complete) {
        processLazyPreloader(swiper, imageEl);
      }
    });
    swiper.updateSize();
    swiper.updateSlides();
    swiper.updateProgress();
    swiper.updateSlidesClasses();
    function setTranslate() {
      const translateValue = swiper.rtlTranslate ? swiper.translate * -1 : swiper.translate;
      const newTranslate = Math.min(Math.max(translateValue, swiper.maxTranslate()), swiper.minTranslate());
      swiper.setTranslate(newTranslate);
      swiper.updateActiveIndex();
      swiper.updateSlidesClasses();
    }
    let translated;
    if (params.freeMode && params.freeMode.enabled && !params.cssMode) {
      setTranslate();
      if (params.autoHeight) {
        swiper.updateAutoHeight();
      }
    } else {
      if ((params.slidesPerView === 'auto' || params.slidesPerView > 1) && swiper.isEnd && !params.centeredSlides) {
        const slides = swiper.virtual && params.virtual.enabled ? swiper.virtual.slides : swiper.slides;
        translated = swiper.slideTo(slides.length - 1, 0, false, true);
      } else {
        translated = swiper.slideTo(swiper.activeIndex, 0, false, true);
      }
      if (!translated) {
        setTranslate();
      }
    }
    if (params.watchOverflow && snapGrid !== swiper.snapGrid) {
      swiper.checkOverflow();
    }
    swiper.emit('update');
  }
  changeDirection(newDirection, needUpdate) {
    if (needUpdate === void 0) {
      needUpdate = true;
    }
    const swiper = this;
    const currentDirection = swiper.params.direction;
    if (!newDirection) {
      // eslint-disable-next-line
      newDirection = currentDirection === 'horizontal' ? 'vertical' : 'horizontal';
    }
    if (newDirection === currentDirection || newDirection !== 'horizontal' && newDirection !== 'vertical') {
      return swiper;
    }
    swiper.el.classList.remove(`${swiper.params.containerModifierClass}${currentDirection}`);
    swiper.el.classList.add(`${swiper.params.containerModifierClass}${newDirection}`);
    swiper.emitContainerClasses();
    swiper.params.direction = newDirection;
    swiper.slides.forEach(slideEl => {
      if (newDirection === 'vertical') {
        slideEl.style.width = '';
      } else {
        slideEl.style.height = '';
      }
    });
    swiper.emit('changeDirection');
    if (needUpdate) swiper.update();
    return swiper;
  }
  changeLanguageDirection(direction) {
    const swiper = this;
    if (swiper.rtl && direction === 'rtl' || !swiper.rtl && direction === 'ltr') return;
    swiper.rtl = direction === 'rtl';
    swiper.rtlTranslate = swiper.params.direction === 'horizontal' && swiper.rtl;
    if (swiper.rtl) {
      swiper.el.classList.add(`${swiper.params.containerModifierClass}rtl`);
      swiper.el.dir = 'rtl';
    } else {
      swiper.el.classList.remove(`${swiper.params.containerModifierClass}rtl`);
      swiper.el.dir = 'ltr';
    }
    swiper.update();
  }
  mount(element) {
    const swiper = this;
    if (swiper.mounted) return true;

    // Find el
    let el = element || swiper.params.el;
    if (typeof el === 'string') {
      el = document.querySelector(el);
    }
    if (!el) {
      return false;
    }
    el.swiper = swiper;
    if (el.parentNode && el.parentNode.host && el.parentNode.host.nodeName === swiper.params.swiperElementNodeName.toUpperCase()) {
      swiper.isElement = true;
    }
    const getWrapperSelector = () => {
      return `.${(swiper.params.wrapperClass || '').trim().split(' ').join('.')}`;
    };
    const getWrapper = () => {
      if (el && el.shadowRoot && el.shadowRoot.querySelector) {
        const res = el.shadowRoot.querySelector(getWrapperSelector());
        // Children needs to return slot items
        return res;
      }
      return elementChildren(el, getWrapperSelector())[0];
    };
    // Find Wrapper
    let wrapperEl = getWrapper();
    if (!wrapperEl && swiper.params.createElements) {
      wrapperEl = createElement('div', swiper.params.wrapperClass);
      el.append(wrapperEl);
      elementChildren(el, `.${swiper.params.slideClass}`).forEach(slideEl => {
        wrapperEl.append(slideEl);
      });
    }
    Object.assign(swiper, {
      el,
      wrapperEl,
      slidesEl: swiper.isElement && !el.parentNode.host.slideSlots ? el.parentNode.host : wrapperEl,
      hostEl: swiper.isElement ? el.parentNode.host : el,
      mounted: true,
      // RTL
      rtl: el.dir.toLowerCase() === 'rtl' || elementStyle(el, 'direction') === 'rtl',
      rtlTranslate: swiper.params.direction === 'horizontal' && (el.dir.toLowerCase() === 'rtl' || elementStyle(el, 'direction') === 'rtl'),
      wrongRTL: elementStyle(wrapperEl, 'display') === '-webkit-box'
    });
    return true;
  }
  init(el) {
    const swiper = this;
    if (swiper.initialized) return swiper;
    const mounted = swiper.mount(el);
    if (mounted === false) return swiper;
    swiper.emit('beforeInit');

    // Set breakpoint
    if (swiper.params.breakpoints) {
      swiper.setBreakpoint();
    }

    // Add Classes
    swiper.addClasses();

    // Update size
    swiper.updateSize();

    // Update slides
    swiper.updateSlides();
    if (swiper.params.watchOverflow) {
      swiper.checkOverflow();
    }

    // Set Grab Cursor
    if (swiper.params.grabCursor && swiper.enabled) {
      swiper.setGrabCursor();
    }

    // Slide To Initial Slide
    if (swiper.params.loop && swiper.virtual && swiper.params.virtual.enabled) {
      swiper.slideTo(swiper.params.initialSlide + swiper.virtual.slidesBefore, 0, swiper.params.runCallbacksOnInit, false, true);
    } else {
      swiper.slideTo(swiper.params.initialSlide, 0, swiper.params.runCallbacksOnInit, false, true);
    }

    // Create loop
    if (swiper.params.loop) {
      swiper.loopCreate();
    }

    // Attach events
    swiper.attachEvents();
    const lazyElements = [...swiper.el.querySelectorAll('[loading="lazy"]')];
    if (swiper.isElement) {
      lazyElements.push(...swiper.hostEl.querySelectorAll('[loading="lazy"]'));
    }
    lazyElements.forEach(imageEl => {
      if (imageEl.complete) {
        processLazyPreloader(swiper, imageEl);
      } else {
        imageEl.addEventListener('load', e => {
          processLazyPreloader(swiper, e.target);
        });
      }
    });
    preload(swiper);

    // Init Flag
    swiper.initialized = true;
    preload(swiper);

    // Emit
    swiper.emit('init');
    swiper.emit('afterInit');
    return swiper;
  }
  destroy(deleteInstance, cleanStyles) {
    if (deleteInstance === void 0) {
      deleteInstance = true;
    }
    if (cleanStyles === void 0) {
      cleanStyles = true;
    }
    const swiper = this;
    const {
      params,
      el,
      wrapperEl,
      slides
    } = swiper;
    if (typeof swiper.params === 'undefined' || swiper.destroyed) {
      return null;
    }
    swiper.emit('beforeDestroy');

    // Init Flag
    swiper.initialized = false;

    // Detach events
    swiper.detachEvents();

    // Destroy loop
    if (params.loop) {
      swiper.loopDestroy();
    }

    // Cleanup styles
    if (cleanStyles) {
      swiper.removeClasses();
      el.removeAttribute('style');
      wrapperEl.removeAttribute('style');
      if (slides && slides.length) {
        slides.forEach(slideEl => {
          slideEl.classList.remove(params.slideVisibleClass, params.slideFullyVisibleClass, params.slideActiveClass, params.slideNextClass, params.slidePrevClass);
          slideEl.removeAttribute('style');
          slideEl.removeAttribute('data-swiper-slide-index');
        });
      }
    }
    swiper.emit('destroy');

    // Detach emitter events
    Object.keys(swiper.eventsListeners).forEach(eventName => {
      swiper.off(eventName);
    });
    if (deleteInstance !== false) {
      swiper.el.swiper = null;
      deleteProps(swiper);
    }
    swiper.destroyed = true;
    return null;
  }
  static extendDefaults(newDefaults) {
    extend(extendedDefaults, newDefaults);
  }
  static get extendedDefaults() {
    return extendedDefaults;
  }
  static get defaults() {
    return defaults;
  }
  static installModule(mod) {
    if (!Swiper.prototype.__modules__) Swiper.prototype.__modules__ = [];
    const modules = Swiper.prototype.__modules__;
    if (typeof mod === 'function' && modules.indexOf(mod) < 0) {
      modules.push(mod);
    }
  }
  static use(module) {
    if (Array.isArray(module)) {
      module.forEach(m => Swiper.installModule(m));
      return Swiper;
    }
    Swiper.installModule(module);
    return Swiper;
  }
}
Object.keys(prototypes).forEach(prototypeGroup => {
  Object.keys(prototypes[prototypeGroup]).forEach(protoMethod => {
    Swiper.prototype[protoMethod] = prototypes[prototypeGroup][protoMethod];
  });
});
Swiper.use([Resize, Observer]);

function createElementIfNotDefined(swiper, originalParams, params, checkProps) {
  if (swiper.params.createElements) {
    Object.keys(checkProps).forEach(key => {
      if (!params[key] && params.auto === true) {
        let element = elementChildren(swiper.el, `.${checkProps[key]}`)[0];
        if (!element) {
          element = createElement('div', checkProps[key]);
          element.className = checkProps[key];
          swiper.el.append(element);
        }
        params[key] = element;
        originalParams[key] = element;
      }
    });
  }
  return params;
}

function Navigation(_ref) {
  let {
    swiper,
    extendParams,
    on,
    emit
  } = _ref;
  extendParams({
    navigation: {
      nextEl: null,
      prevEl: null,
      hideOnClick: false,
      disabledClass: 'swiper-button-disabled',
      hiddenClass: 'swiper-button-hidden',
      lockClass: 'swiper-button-lock',
      navigationDisabledClass: 'swiper-navigation-disabled'
    }
  });
  swiper.navigation = {
    nextEl: null,
    prevEl: null
  };
  function getEl(el) {
    let res;
    if (el && typeof el === 'string' && swiper.isElement) {
      res = swiper.el.querySelector(el);
      if (res) return res;
    }
    if (el) {
      if (typeof el === 'string') res = [...document.querySelectorAll(el)];
      if (swiper.params.uniqueNavElements && typeof el === 'string' && res && res.length > 1 && swiper.el.querySelectorAll(el).length === 1) {
        res = swiper.el.querySelector(el);
      } else if (res && res.length === 1) {
        res = res[0];
      }
    }
    if (el && !res) return el;
    // if (Array.isArray(res) && res.length === 1) res = res[0];
    return res;
  }
  function toggleEl(el, disabled) {
    const params = swiper.params.navigation;
    el = makeElementsArray(el);
    el.forEach(subEl => {
      if (subEl) {
        subEl.classList[disabled ? 'add' : 'remove'](...params.disabledClass.split(' '));
        if (subEl.tagName === 'BUTTON') subEl.disabled = disabled;
        if (swiper.params.watchOverflow && swiper.enabled) {
          subEl.classList[swiper.isLocked ? 'add' : 'remove'](params.lockClass);
        }
      }
    });
  }
  function update() {
    // Update Navigation Buttons
    const {
      nextEl,
      prevEl
    } = swiper.navigation;
    if (swiper.params.loop) {
      toggleEl(prevEl, false);
      toggleEl(nextEl, false);
      return;
    }
    toggleEl(prevEl, swiper.isBeginning && !swiper.params.rewind);
    toggleEl(nextEl, swiper.isEnd && !swiper.params.rewind);
  }
  function onPrevClick(e) {
    e.preventDefault();
    if (swiper.isBeginning && !swiper.params.loop && !swiper.params.rewind) return;
    swiper.slidePrev();
    emit('navigationPrev');
  }
  function onNextClick(e) {
    e.preventDefault();
    if (swiper.isEnd && !swiper.params.loop && !swiper.params.rewind) return;
    swiper.slideNext();
    emit('navigationNext');
  }
  function init() {
    const params = swiper.params.navigation;
    swiper.params.navigation = createElementIfNotDefined(swiper, swiper.originalParams.navigation, swiper.params.navigation, {
      nextEl: 'swiper-button-next',
      prevEl: 'swiper-button-prev'
    });
    if (!(params.nextEl || params.prevEl)) return;
    let nextEl = getEl(params.nextEl);
    let prevEl = getEl(params.prevEl);
    Object.assign(swiper.navigation, {
      nextEl,
      prevEl
    });
    nextEl = makeElementsArray(nextEl);
    prevEl = makeElementsArray(prevEl);
    const initButton = (el, dir) => {
      if (el) {
        el.addEventListener('click', dir === 'next' ? onNextClick : onPrevClick);
      }
      if (!swiper.enabled && el) {
        el.classList.add(...params.lockClass.split(' '));
      }
    };
    nextEl.forEach(el => initButton(el, 'next'));
    prevEl.forEach(el => initButton(el, 'prev'));
  }
  function destroy() {
    let {
      nextEl,
      prevEl
    } = swiper.navigation;
    nextEl = makeElementsArray(nextEl);
    prevEl = makeElementsArray(prevEl);
    const destroyButton = (el, dir) => {
      el.removeEventListener('click', dir === 'next' ? onNextClick : onPrevClick);
      el.classList.remove(...swiper.params.navigation.disabledClass.split(' '));
    };
    nextEl.forEach(el => destroyButton(el, 'next'));
    prevEl.forEach(el => destroyButton(el, 'prev'));
  }
  on('init', () => {
    if (swiper.params.navigation.enabled === false) {
      // eslint-disable-next-line
      disable();
    } else {
      init();
      update();
    }
  });
  on('toEdge fromEdge lock unlock', () => {
    update();
  });
  on('destroy', () => {
    destroy();
  });
  on('enable disable', () => {
    let {
      nextEl,
      prevEl
    } = swiper.navigation;
    nextEl = makeElementsArray(nextEl);
    prevEl = makeElementsArray(prevEl);
    if (swiper.enabled) {
      update();
      return;
    }
    [...nextEl, ...prevEl].filter(el => !!el).forEach(el => el.classList.add(swiper.params.navigation.lockClass));
  });
  on('click', (_s, e) => {
    let {
      nextEl,
      prevEl
    } = swiper.navigation;
    nextEl = makeElementsArray(nextEl);
    prevEl = makeElementsArray(prevEl);
    const targetEl = e.target;
    if (swiper.params.navigation.hideOnClick && !prevEl.includes(targetEl) && !nextEl.includes(targetEl)) {
      if (swiper.pagination && swiper.params.pagination && swiper.params.pagination.clickable && (swiper.pagination.el === targetEl || swiper.pagination.el.contains(targetEl))) return;
      let isHidden;
      if (nextEl.length) {
        isHidden = nextEl[0].classList.contains(swiper.params.navigation.hiddenClass);
      } else if (prevEl.length) {
        isHidden = prevEl[0].classList.contains(swiper.params.navigation.hiddenClass);
      }
      if (isHidden === true) {
        emit('navigationShow');
      } else {
        emit('navigationHide');
      }
      [...nextEl, ...prevEl].filter(el => !!el).forEach(el => el.classList.toggle(swiper.params.navigation.hiddenClass));
    }
  });
  const enable = () => {
    swiper.el.classList.remove(...swiper.params.navigation.navigationDisabledClass.split(' '));
    init();
    update();
  };
  const disable = () => {
    swiper.el.classList.add(...swiper.params.navigation.navigationDisabledClass.split(' '));
    destroy();
  };
  Object.assign(swiper.navigation, {
    enable,
    disable,
    update,
    init,
    destroy
  });
}

function classesToSelector(classes) {
  if (classes === void 0) {
    classes = '';
  }
  return `.${classes.trim().replace(/([\.:!+\/])/g, '\\$1') // eslint-disable-line
  .replace(/ /g, '.')}`;
}

function Pagination(_ref) {
  let {
    swiper,
    extendParams,
    on,
    emit
  } = _ref;
  const pfx = 'swiper-pagination';
  extendParams({
    pagination: {
      el: null,
      bulletElement: 'span',
      clickable: false,
      hideOnClick: false,
      renderBullet: null,
      renderProgressbar: null,
      renderFraction: null,
      renderCustom: null,
      progressbarOpposite: false,
      type: 'bullets',
      // 'bullets' or 'progressbar' or 'fraction' or 'custom'
      dynamicBullets: false,
      dynamicMainBullets: 1,
      formatFractionCurrent: number => number,
      formatFractionTotal: number => number,
      bulletClass: `${pfx}-bullet`,
      bulletActiveClass: `${pfx}-bullet-active`,
      modifierClass: `${pfx}-`,
      currentClass: `${pfx}-current`,
      totalClass: `${pfx}-total`,
      hiddenClass: `${pfx}-hidden`,
      progressbarFillClass: `${pfx}-progressbar-fill`,
      progressbarOppositeClass: `${pfx}-progressbar-opposite`,
      clickableClass: `${pfx}-clickable`,
      lockClass: `${pfx}-lock`,
      horizontalClass: `${pfx}-horizontal`,
      verticalClass: `${pfx}-vertical`,
      paginationDisabledClass: `${pfx}-disabled`
    }
  });
  swiper.pagination = {
    el: null,
    bullets: []
  };
  let bulletSize;
  let dynamicBulletIndex = 0;
  function isPaginationDisabled() {
    return !swiper.params.pagination.el || !swiper.pagination.el || Array.isArray(swiper.pagination.el) && swiper.pagination.el.length === 0;
  }
  function setSideBullets(bulletEl, position) {
    const {
      bulletActiveClass
    } = swiper.params.pagination;
    if (!bulletEl) return;
    bulletEl = bulletEl[`${position === 'prev' ? 'previous' : 'next'}ElementSibling`];
    if (bulletEl) {
      bulletEl.classList.add(`${bulletActiveClass}-${position}`);
      bulletEl = bulletEl[`${position === 'prev' ? 'previous' : 'next'}ElementSibling`];
      if (bulletEl) {
        bulletEl.classList.add(`${bulletActiveClass}-${position}-${position}`);
      }
    }
  }
  function onBulletClick(e) {
    const bulletEl = e.target.closest(classesToSelector(swiper.params.pagination.bulletClass));
    if (!bulletEl) {
      return;
    }
    e.preventDefault();
    const index = elementIndex(bulletEl) * swiper.params.slidesPerGroup;
    if (swiper.params.loop) {
      if (swiper.realIndex === index) return;
      swiper.slideToLoop(index);
    } else {
      swiper.slideTo(index);
    }
  }
  function update() {
    // Render || Update Pagination bullets/items
    const rtl = swiper.rtl;
    const params = swiper.params.pagination;
    if (isPaginationDisabled()) return;
    let el = swiper.pagination.el;
    el = makeElementsArray(el);
    // Current/Total
    let current;
    let previousIndex;
    const slidesLength = swiper.virtual && swiper.params.virtual.enabled ? swiper.virtual.slides.length : swiper.slides.length;
    const total = swiper.params.loop ? Math.ceil(slidesLength / swiper.params.slidesPerGroup) : swiper.snapGrid.length;
    if (swiper.params.loop) {
      previousIndex = swiper.previousRealIndex || 0;
      current = swiper.params.slidesPerGroup > 1 ? Math.floor(swiper.realIndex / swiper.params.slidesPerGroup) : swiper.realIndex;
    } else if (typeof swiper.snapIndex !== 'undefined') {
      current = swiper.snapIndex;
      previousIndex = swiper.previousSnapIndex;
    } else {
      previousIndex = swiper.previousIndex || 0;
      current = swiper.activeIndex || 0;
    }
    // Types
    if (params.type === 'bullets' && swiper.pagination.bullets && swiper.pagination.bullets.length > 0) {
      const bullets = swiper.pagination.bullets;
      let firstIndex;
      let lastIndex;
      let midIndex;
      if (params.dynamicBullets) {
        bulletSize = elementOuterSize(bullets[0], swiper.isHorizontal() ? 'width' : 'height');
        el.forEach(subEl => {
          subEl.style[swiper.isHorizontal() ? 'width' : 'height'] = `${bulletSize * (params.dynamicMainBullets + 4)}px`;
        });
        if (params.dynamicMainBullets > 1 && previousIndex !== undefined) {
          dynamicBulletIndex += current - (previousIndex || 0);
          if (dynamicBulletIndex > params.dynamicMainBullets - 1) {
            dynamicBulletIndex = params.dynamicMainBullets - 1;
          } else if (dynamicBulletIndex < 0) {
            dynamicBulletIndex = 0;
          }
        }
        firstIndex = Math.max(current - dynamicBulletIndex, 0);
        lastIndex = firstIndex + (Math.min(bullets.length, params.dynamicMainBullets) - 1);
        midIndex = (lastIndex + firstIndex) / 2;
      }
      bullets.forEach(bulletEl => {
        const classesToRemove = [...['', '-next', '-next-next', '-prev', '-prev-prev', '-main'].map(suffix => `${params.bulletActiveClass}${suffix}`)].map(s => typeof s === 'string' && s.includes(' ') ? s.split(' ') : s).flat();
        bulletEl.classList.remove(...classesToRemove);
      });
      if (el.length > 1) {
        bullets.forEach(bullet => {
          const bulletIndex = elementIndex(bullet);
          if (bulletIndex === current) {
            bullet.classList.add(...params.bulletActiveClass.split(' '));
          } else if (swiper.isElement) {
            bullet.setAttribute('part', 'bullet');
          }
          if (params.dynamicBullets) {
            if (bulletIndex >= firstIndex && bulletIndex <= lastIndex) {
              bullet.classList.add(...`${params.bulletActiveClass}-main`.split(' '));
            }
            if (bulletIndex === firstIndex) {
              setSideBullets(bullet, 'prev');
            }
            if (bulletIndex === lastIndex) {
              setSideBullets(bullet, 'next');
            }
          }
        });
      } else {
        const bullet = bullets[current];
        if (bullet) {
          bullet.classList.add(...params.bulletActiveClass.split(' '));
        }
        if (swiper.isElement) {
          bullets.forEach((bulletEl, bulletIndex) => {
            bulletEl.setAttribute('part', bulletIndex === current ? 'bullet-active' : 'bullet');
          });
        }
        if (params.dynamicBullets) {
          const firstDisplayedBullet = bullets[firstIndex];
          const lastDisplayedBullet = bullets[lastIndex];
          for (let i = firstIndex; i <= lastIndex; i += 1) {
            if (bullets[i]) {
              bullets[i].classList.add(...`${params.bulletActiveClass}-main`.split(' '));
            }
          }
          setSideBullets(firstDisplayedBullet, 'prev');
          setSideBullets(lastDisplayedBullet, 'next');
        }
      }
      if (params.dynamicBullets) {
        const dynamicBulletsLength = Math.min(bullets.length, params.dynamicMainBullets + 4);
        const bulletsOffset = (bulletSize * dynamicBulletsLength - bulletSize) / 2 - midIndex * bulletSize;
        const offsetProp = rtl ? 'right' : 'left';
        bullets.forEach(bullet => {
          bullet.style[swiper.isHorizontal() ? offsetProp : 'top'] = `${bulletsOffset}px`;
        });
      }
    }
    el.forEach((subEl, subElIndex) => {
      if (params.type === 'fraction') {
        subEl.querySelectorAll(classesToSelector(params.currentClass)).forEach(fractionEl => {
          fractionEl.textContent = params.formatFractionCurrent(current + 1);
        });
        subEl.querySelectorAll(classesToSelector(params.totalClass)).forEach(totalEl => {
          totalEl.textContent = params.formatFractionTotal(total);
        });
      }
      if (params.type === 'progressbar') {
        let progressbarDirection;
        if (params.progressbarOpposite) {
          progressbarDirection = swiper.isHorizontal() ? 'vertical' : 'horizontal';
        } else {
          progressbarDirection = swiper.isHorizontal() ? 'horizontal' : 'vertical';
        }
        const scale = (current + 1) / total;
        let scaleX = 1;
        let scaleY = 1;
        if (progressbarDirection === 'horizontal') {
          scaleX = scale;
        } else {
          scaleY = scale;
        }
        subEl.querySelectorAll(classesToSelector(params.progressbarFillClass)).forEach(progressEl => {
          progressEl.style.transform = `translate3d(0,0,0) scaleX(${scaleX}) scaleY(${scaleY})`;
          progressEl.style.transitionDuration = `${swiper.params.speed}ms`;
        });
      }
      if (params.type === 'custom' && params.renderCustom) {
        subEl.innerHTML = params.renderCustom(swiper, current + 1, total);
        if (subElIndex === 0) emit('paginationRender', subEl);
      } else {
        if (subElIndex === 0) emit('paginationRender', subEl);
        emit('paginationUpdate', subEl);
      }
      if (swiper.params.watchOverflow && swiper.enabled) {
        subEl.classList[swiper.isLocked ? 'add' : 'remove'](params.lockClass);
      }
    });
  }
  function render() {
    // Render Container
    const params = swiper.params.pagination;
    if (isPaginationDisabled()) return;
    const slidesLength = swiper.virtual && swiper.params.virtual.enabled ? swiper.virtual.slides.length : swiper.grid && swiper.params.grid.rows > 1 ? swiper.slides.length / Math.ceil(swiper.params.grid.rows) : swiper.slides.length;
    let el = swiper.pagination.el;
    el = makeElementsArray(el);
    let paginationHTML = '';
    if (params.type === 'bullets') {
      let numberOfBullets = swiper.params.loop ? Math.ceil(slidesLength / swiper.params.slidesPerGroup) : swiper.snapGrid.length;
      if (swiper.params.freeMode && swiper.params.freeMode.enabled && numberOfBullets > slidesLength) {
        numberOfBullets = slidesLength;
      }
      for (let i = 0; i < numberOfBullets; i += 1) {
        if (params.renderBullet) {
          paginationHTML += params.renderBullet.call(swiper, i, params.bulletClass);
        } else {
          // prettier-ignore
          paginationHTML += `<${params.bulletElement} ${swiper.isElement ? 'part="bullet"' : ''} class="${params.bulletClass}"></${params.bulletElement}>`;
        }
      }
    }
    if (params.type === 'fraction') {
      if (params.renderFraction) {
        paginationHTML = params.renderFraction.call(swiper, params.currentClass, params.totalClass);
      } else {
        paginationHTML = `<span class="${params.currentClass}"></span>` + ' / ' + `<span class="${params.totalClass}"></span>`;
      }
    }
    if (params.type === 'progressbar') {
      if (params.renderProgressbar) {
        paginationHTML = params.renderProgressbar.call(swiper, params.progressbarFillClass);
      } else {
        paginationHTML = `<span class="${params.progressbarFillClass}"></span>`;
      }
    }
    swiper.pagination.bullets = [];
    el.forEach(subEl => {
      if (params.type !== 'custom') {
        subEl.innerHTML = paginationHTML || '';
      }
      if (params.type === 'bullets') {
        swiper.pagination.bullets.push(...subEl.querySelectorAll(classesToSelector(params.bulletClass)));
      }
    });
    if (params.type !== 'custom') {
      emit('paginationRender', el[0]);
    }
  }
  function init() {
    swiper.params.pagination = createElementIfNotDefined(swiper, swiper.originalParams.pagination, swiper.params.pagination, {
      el: 'swiper-pagination'
    });
    const params = swiper.params.pagination;
    if (!params.el) return;
    let el;
    if (typeof params.el === 'string' && swiper.isElement) {
      el = swiper.el.querySelector(params.el);
    }
    if (!el && typeof params.el === 'string') {
      el = [...document.querySelectorAll(params.el)];
    }
    if (!el) {
      el = params.el;
    }
    if (!el || el.length === 0) return;
    if (swiper.params.uniqueNavElements && typeof params.el === 'string' && Array.isArray(el) && el.length > 1) {
      el = [...swiper.el.querySelectorAll(params.el)];
      // check if it belongs to another nested Swiper
      if (el.length > 1) {
        el = el.filter(subEl => {
          if (elementParents(subEl, '.swiper')[0] !== swiper.el) return false;
          return true;
        })[0];
      }
    }
    if (Array.isArray(el) && el.length === 1) el = el[0];
    Object.assign(swiper.pagination, {
      el
    });
    el = makeElementsArray(el);
    el.forEach(subEl => {
      if (params.type === 'bullets' && params.clickable) {
        subEl.classList.add(...(params.clickableClass || '').split(' '));
      }
      subEl.classList.add(params.modifierClass + params.type);
      subEl.classList.add(swiper.isHorizontal() ? params.horizontalClass : params.verticalClass);
      if (params.type === 'bullets' && params.dynamicBullets) {
        subEl.classList.add(`${params.modifierClass}${params.type}-dynamic`);
        dynamicBulletIndex = 0;
        if (params.dynamicMainBullets < 1) {
          params.dynamicMainBullets = 1;
        }
      }
      if (params.type === 'progressbar' && params.progressbarOpposite) {
        subEl.classList.add(params.progressbarOppositeClass);
      }
      if (params.clickable) {
        subEl.addEventListener('click', onBulletClick);
      }
      if (!swiper.enabled) {
        subEl.classList.add(params.lockClass);
      }
    });
  }
  function destroy() {
    const params = swiper.params.pagination;
    if (isPaginationDisabled()) return;
    let el = swiper.pagination.el;
    if (el) {
      el = makeElementsArray(el);
      el.forEach(subEl => {
        subEl.classList.remove(params.hiddenClass);
        subEl.classList.remove(params.modifierClass + params.type);
        subEl.classList.remove(swiper.isHorizontal() ? params.horizontalClass : params.verticalClass);
        if (params.clickable) {
          subEl.classList.remove(...(params.clickableClass || '').split(' '));
          subEl.removeEventListener('click', onBulletClick);
        }
      });
    }
    if (swiper.pagination.bullets) swiper.pagination.bullets.forEach(subEl => subEl.classList.remove(...params.bulletActiveClass.split(' ')));
  }
  on('changeDirection', () => {
    if (!swiper.pagination || !swiper.pagination.el) return;
    const params = swiper.params.pagination;
    let {
      el
    } = swiper.pagination;
    el = makeElementsArray(el);
    el.forEach(subEl => {
      subEl.classList.remove(params.horizontalClass, params.verticalClass);
      subEl.classList.add(swiper.isHorizontal() ? params.horizontalClass : params.verticalClass);
    });
  });
  on('init', () => {
    if (swiper.params.pagination.enabled === false) {
      // eslint-disable-next-line
      disable();
    } else {
      init();
      render();
      update();
    }
  });
  on('activeIndexChange', () => {
    if (typeof swiper.snapIndex === 'undefined') {
      update();
    }
  });
  on('snapIndexChange', () => {
    update();
  });
  on('snapGridLengthChange', () => {
    render();
    update();
  });
  on('destroy', () => {
    destroy();
  });
  on('enable disable', () => {
    let {
      el
    } = swiper.pagination;
    if (el) {
      el = makeElementsArray(el);
      el.forEach(subEl => subEl.classList[swiper.enabled ? 'remove' : 'add'](swiper.params.pagination.lockClass));
    }
  });
  on('lock unlock', () => {
    update();
  });
  on('click', (_s, e) => {
    const targetEl = e.target;
    const el = makeElementsArray(swiper.pagination.el);
    if (swiper.params.pagination.el && swiper.params.pagination.hideOnClick && el && el.length > 0 && !targetEl.classList.contains(swiper.params.pagination.bulletClass)) {
      if (swiper.navigation && (swiper.navigation.nextEl && targetEl === swiper.navigation.nextEl || swiper.navigation.prevEl && targetEl === swiper.navigation.prevEl)) return;
      const isHidden = el[0].classList.contains(swiper.params.pagination.hiddenClass);
      if (isHidden === true) {
        emit('paginationShow');
      } else {
        emit('paginationHide');
      }
      el.forEach(subEl => subEl.classList.toggle(swiper.params.pagination.hiddenClass));
    }
  });
  const enable = () => {
    swiper.el.classList.remove(swiper.params.pagination.paginationDisabledClass);
    let {
      el
    } = swiper.pagination;
    if (el) {
      el = makeElementsArray(el);
      el.forEach(subEl => subEl.classList.remove(swiper.params.pagination.paginationDisabledClass));
    }
    init();
    render();
    update();
  };
  const disable = () => {
    swiper.el.classList.add(swiper.params.pagination.paginationDisabledClass);
    let {
      el
    } = swiper.pagination;
    if (el) {
      el = makeElementsArray(el);
      el.forEach(subEl => subEl.classList.add(swiper.params.pagination.paginationDisabledClass));
    }
    destroy();
  };
  Object.assign(swiper.pagination, {
    enable,
    disable,
    render,
    update,
    init,
    destroy
  });
}

function Scrollbar(_ref) {
  let {
    swiper,
    extendParams,
    on,
    emit
  } = _ref;
  const document = getDocument();
  let isTouched = false;
  let timeout = null;
  let dragTimeout = null;
  let dragStartPos;
  let dragSize;
  let trackSize;
  let divider;
  extendParams({
    scrollbar: {
      el: null,
      dragSize: 'auto',
      hide: false,
      draggable: false,
      snapOnRelease: true,
      lockClass: 'swiper-scrollbar-lock',
      dragClass: 'swiper-scrollbar-drag',
      scrollbarDisabledClass: 'swiper-scrollbar-disabled',
      horizontalClass: `swiper-scrollbar-horizontal`,
      verticalClass: `swiper-scrollbar-vertical`
    }
  });
  swiper.scrollbar = {
    el: null,
    dragEl: null
  };
  function setTranslate() {
    if (!swiper.params.scrollbar.el || !swiper.scrollbar.el) return;
    const {
      scrollbar,
      rtlTranslate: rtl
    } = swiper;
    const {
      dragEl,
      el
    } = scrollbar;
    const params = swiper.params.scrollbar;
    const progress = swiper.params.loop ? swiper.progressLoop : swiper.progress;
    let newSize = dragSize;
    let newPos = (trackSize - dragSize) * progress;
    if (rtl) {
      newPos = -newPos;
      if (newPos > 0) {
        newSize = dragSize - newPos;
        newPos = 0;
      } else if (-newPos + dragSize > trackSize) {
        newSize = trackSize + newPos;
      }
    } else if (newPos < 0) {
      newSize = dragSize + newPos;
      newPos = 0;
    } else if (newPos + dragSize > trackSize) {
      newSize = trackSize - newPos;
    }
    if (swiper.isHorizontal()) {
      dragEl.style.transform = `translate3d(${newPos}px, 0, 0)`;
      dragEl.style.width = `${newSize}px`;
    } else {
      dragEl.style.transform = `translate3d(0px, ${newPos}px, 0)`;
      dragEl.style.height = `${newSize}px`;
    }
    if (params.hide) {
      clearTimeout(timeout);
      el.style.opacity = 1;
      timeout = setTimeout(() => {
        el.style.opacity = 0;
        el.style.transitionDuration = '400ms';
      }, 1000);
    }
  }
  function setTransition(duration) {
    if (!swiper.params.scrollbar.el || !swiper.scrollbar.el) return;
    swiper.scrollbar.dragEl.style.transitionDuration = `${duration}ms`;
  }
  function updateSize() {
    if (!swiper.params.scrollbar.el || !swiper.scrollbar.el) return;
    const {
      scrollbar
    } = swiper;
    const {
      dragEl,
      el
    } = scrollbar;
    dragEl.style.width = '';
    dragEl.style.height = '';
    trackSize = swiper.isHorizontal() ? el.offsetWidth : el.offsetHeight;
    divider = swiper.size / (swiper.virtualSize + swiper.params.slidesOffsetBefore - (swiper.params.centeredSlides ? swiper.snapGrid[0] : 0));
    if (swiper.params.scrollbar.dragSize === 'auto') {
      dragSize = trackSize * divider;
    } else {
      dragSize = parseInt(swiper.params.scrollbar.dragSize, 10);
    }
    if (swiper.isHorizontal()) {
      dragEl.style.width = `${dragSize}px`;
    } else {
      dragEl.style.height = `${dragSize}px`;
    }
    if (divider >= 1) {
      el.style.display = 'none';
    } else {
      el.style.display = '';
    }
    if (swiper.params.scrollbar.hide) {
      el.style.opacity = 0;
    }
    if (swiper.params.watchOverflow && swiper.enabled) {
      scrollbar.el.classList[swiper.isLocked ? 'add' : 'remove'](swiper.params.scrollbar.lockClass);
    }
  }
  function getPointerPosition(e) {
    return swiper.isHorizontal() ? e.clientX : e.clientY;
  }
  function setDragPosition(e) {
    const {
      scrollbar,
      rtlTranslate: rtl
    } = swiper;
    const {
      el
    } = scrollbar;
    let positionRatio;
    positionRatio = (getPointerPosition(e) - elementOffset(el)[swiper.isHorizontal() ? 'left' : 'top'] - (dragStartPos !== null ? dragStartPos : dragSize / 2)) / (trackSize - dragSize);
    positionRatio = Math.max(Math.min(positionRatio, 1), 0);
    if (rtl) {
      positionRatio = 1 - positionRatio;
    }
    const position = swiper.minTranslate() + (swiper.maxTranslate() - swiper.minTranslate()) * positionRatio;
    swiper.updateProgress(position);
    swiper.setTranslate(position);
    swiper.updateActiveIndex();
    swiper.updateSlidesClasses();
  }
  function onDragStart(e) {
    const params = swiper.params.scrollbar;
    const {
      scrollbar,
      wrapperEl
    } = swiper;
    const {
      el,
      dragEl
    } = scrollbar;
    isTouched = true;
    dragStartPos = e.target === dragEl ? getPointerPosition(e) - e.target.getBoundingClientRect()[swiper.isHorizontal() ? 'left' : 'top'] : null;
    e.preventDefault();
    e.stopPropagation();
    wrapperEl.style.transitionDuration = '100ms';
    dragEl.style.transitionDuration = '100ms';
    setDragPosition(e);
    clearTimeout(dragTimeout);
    el.style.transitionDuration = '0ms';
    if (params.hide) {
      el.style.opacity = 1;
    }
    if (swiper.params.cssMode) {
      swiper.wrapperEl.style['scroll-snap-type'] = 'none';
    }
    emit('scrollbarDragStart', e);
  }
  function onDragMove(e) {
    const {
      scrollbar,
      wrapperEl
    } = swiper;
    const {
      el,
      dragEl
    } = scrollbar;
    if (!isTouched) return;
    if (e.preventDefault && e.cancelable) e.preventDefault();else e.returnValue = false;
    setDragPosition(e);
    wrapperEl.style.transitionDuration = '0ms';
    el.style.transitionDuration = '0ms';
    dragEl.style.transitionDuration = '0ms';
    emit('scrollbarDragMove', e);
  }
  function onDragEnd(e) {
    const params = swiper.params.scrollbar;
    const {
      scrollbar,
      wrapperEl
    } = swiper;
    const {
      el
    } = scrollbar;
    if (!isTouched) return;
    isTouched = false;
    if (swiper.params.cssMode) {
      swiper.wrapperEl.style['scroll-snap-type'] = '';
      wrapperEl.style.transitionDuration = '';
    }
    if (params.hide) {
      clearTimeout(dragTimeout);
      dragTimeout = nextTick(() => {
        el.style.opacity = 0;
        el.style.transitionDuration = '400ms';
      }, 1000);
    }
    emit('scrollbarDragEnd', e);
    if (params.snapOnRelease) {
      swiper.slideToClosest();
    }
  }
  function events(method) {
    const {
      scrollbar,
      params
    } = swiper;
    const el = scrollbar.el;
    if (!el) return;
    const target = el;
    const activeListener = params.passiveListeners ? {
      passive: false,
      capture: false
    } : false;
    const passiveListener = params.passiveListeners ? {
      passive: true,
      capture: false
    } : false;
    if (!target) return;
    const eventMethod = method === 'on' ? 'addEventListener' : 'removeEventListener';
    target[eventMethod]('pointerdown', onDragStart, activeListener);
    document[eventMethod]('pointermove', onDragMove, activeListener);
    document[eventMethod]('pointerup', onDragEnd, passiveListener);
  }
  function enableDraggable() {
    if (!swiper.params.scrollbar.el || !swiper.scrollbar.el) return;
    events('on');
  }
  function disableDraggable() {
    if (!swiper.params.scrollbar.el || !swiper.scrollbar.el) return;
    events('off');
  }
  function init() {
    const {
      scrollbar,
      el: swiperEl
    } = swiper;
    swiper.params.scrollbar = createElementIfNotDefined(swiper, swiper.originalParams.scrollbar, swiper.params.scrollbar, {
      el: 'swiper-scrollbar'
    });
    const params = swiper.params.scrollbar;
    if (!params.el) return;
    let el;
    if (typeof params.el === 'string' && swiper.isElement) {
      el = swiper.el.querySelector(params.el);
    }
    if (!el && typeof params.el === 'string') {
      el = document.querySelectorAll(params.el);
      if (!el.length) return;
    } else if (!el) {
      el = params.el;
    }
    if (swiper.params.uniqueNavElements && typeof params.el === 'string' && el.length > 1 && swiperEl.querySelectorAll(params.el).length === 1) {
      el = swiperEl.querySelector(params.el);
    }
    if (el.length > 0) el = el[0];
    el.classList.add(swiper.isHorizontal() ? params.horizontalClass : params.verticalClass);
    let dragEl;
    if (el) {
      dragEl = el.querySelector(classesToSelector(swiper.params.scrollbar.dragClass));
      if (!dragEl) {
        dragEl = createElement('div', swiper.params.scrollbar.dragClass);
        el.append(dragEl);
      }
    }
    Object.assign(scrollbar, {
      el,
      dragEl
    });
    if (params.draggable) {
      enableDraggable();
    }
    if (el) {
      el.classList[swiper.enabled ? 'remove' : 'add'](...classesToTokens(swiper.params.scrollbar.lockClass));
    }
  }
  function destroy() {
    const params = swiper.params.scrollbar;
    const el = swiper.scrollbar.el;
    if (el) {
      el.classList.remove(...classesToTokens(swiper.isHorizontal() ? params.horizontalClass : params.verticalClass));
    }
    disableDraggable();
  }
  on('changeDirection', () => {
    if (!swiper.scrollbar || !swiper.scrollbar.el) return;
    const params = swiper.params.scrollbar;
    let {
      el
    } = swiper.scrollbar;
    el = makeElementsArray(el);
    el.forEach(subEl => {
      subEl.classList.remove(params.horizontalClass, params.verticalClass);
      subEl.classList.add(swiper.isHorizontal() ? params.horizontalClass : params.verticalClass);
    });
  });
  on('init', () => {
    if (swiper.params.scrollbar.enabled === false) {
      // eslint-disable-next-line
      disable();
    } else {
      init();
      updateSize();
      setTranslate();
    }
  });
  on('update resize observerUpdate lock unlock changeDirection', () => {
    updateSize();
  });
  on('setTranslate', () => {
    setTranslate();
  });
  on('setTransition', (_s, duration) => {
    setTransition(duration);
  });
  on('enable disable', () => {
    const {
      el
    } = swiper.scrollbar;
    if (el) {
      el.classList[swiper.enabled ? 'remove' : 'add'](...classesToTokens(swiper.params.scrollbar.lockClass));
    }
  });
  on('destroy', () => {
    destroy();
  });
  const enable = () => {
    swiper.el.classList.remove(...classesToTokens(swiper.params.scrollbar.scrollbarDisabledClass));
    if (swiper.scrollbar.el) {
      swiper.scrollbar.el.classList.remove(...classesToTokens(swiper.params.scrollbar.scrollbarDisabledClass));
    }
    init();
    updateSize();
    setTranslate();
  };
  const disable = () => {
    swiper.el.classList.add(...classesToTokens(swiper.params.scrollbar.scrollbarDisabledClass));
    if (swiper.scrollbar.el) {
      swiper.scrollbar.el.classList.add(...classesToTokens(swiper.params.scrollbar.scrollbarDisabledClass));
    }
    destroy();
  };
  Object.assign(swiper.scrollbar, {
    enable,
    disable,
    updateSize,
    setTranslate,
    init,
    destroy
  });
}

function A11y(_ref) {
  let {
    swiper,
    extendParams,
    on
  } = _ref;
  extendParams({
    a11y: {
      enabled: true,
      notificationClass: 'swiper-notification',
      prevSlideMessage: 'Previous slide',
      nextSlideMessage: 'Next slide',
      firstSlideMessage: 'This is the first slide',
      lastSlideMessage: 'This is the last slide',
      paginationBulletMessage: 'Go to slide {{index}}',
      slideLabelMessage: '{{index}} / {{slidesLength}}',
      containerMessage: null,
      containerRoleDescriptionMessage: null,
      itemRoleDescriptionMessage: null,
      slideRole: 'group',
      id: null
    }
  });
  swiper.a11y = {
    clicked: false
  };
  let liveRegion = null;
  let preventFocusHandler;
  let focusTargetSlideEl;
  let visibilityChangedTimestamp = new Date().getTime();
  function notify(message) {
    const notification = liveRegion;
    if (notification.length === 0) return;
    notification.innerHTML = '';
    notification.innerHTML = message;
  }
  function getRandomNumber(size) {
    const randomChar = () => Math.round(16 * Math.random()).toString(16);
    return 'x'.repeat(size).replace(/x/g, randomChar);
  }
  function makeElFocusable(el) {
    el = makeElementsArray(el);
    el.forEach(subEl => {
      subEl.setAttribute('tabIndex', '0');
    });
  }
  function makeElNotFocusable(el) {
    el = makeElementsArray(el);
    el.forEach(subEl => {
      subEl.setAttribute('tabIndex', '-1');
    });
  }
  function addElRole(el, role) {
    el = makeElementsArray(el);
    el.forEach(subEl => {
      subEl.setAttribute('role', role);
    });
  }
  function addElRoleDescription(el, description) {
    el = makeElementsArray(el);
    el.forEach(subEl => {
      subEl.setAttribute('aria-roledescription', description);
    });
  }
  function addElControls(el, controls) {
    el = makeElementsArray(el);
    el.forEach(subEl => {
      subEl.setAttribute('aria-controls', controls);
    });
  }
  function addElLabel(el, label) {
    el = makeElementsArray(el);
    el.forEach(subEl => {
      subEl.setAttribute('aria-label', label);
    });
  }
  function addElId(el, id) {
    el = makeElementsArray(el);
    el.forEach(subEl => {
      subEl.setAttribute('id', id);
    });
  }
  function addElLive(el, live) {
    el = makeElementsArray(el);
    el.forEach(subEl => {
      subEl.setAttribute('aria-live', live);
    });
  }
  function disableEl(el) {
    el = makeElementsArray(el);
    el.forEach(subEl => {
      subEl.setAttribute('aria-disabled', true);
    });
  }
  function enableEl(el) {
    el = makeElementsArray(el);
    el.forEach(subEl => {
      subEl.setAttribute('aria-disabled', false);
    });
  }
  function onEnterOrSpaceKey(e) {
    if (e.keyCode !== 13 && e.keyCode !== 32) return;
    const params = swiper.params.a11y;
    const targetEl = e.target;
    if (swiper.pagination && swiper.pagination.el && (targetEl === swiper.pagination.el || swiper.pagination.el.contains(e.target))) {
      if (!e.target.matches(classesToSelector(swiper.params.pagination.bulletClass))) return;
    }
    if (swiper.navigation && swiper.navigation.prevEl && swiper.navigation.nextEl) {
      const prevEls = makeElementsArray(swiper.navigation.prevEl);
      const nextEls = makeElementsArray(swiper.navigation.nextEl);
      if (nextEls.includes(targetEl)) {
        if (!(swiper.isEnd && !swiper.params.loop)) {
          swiper.slideNext();
        }
        if (swiper.isEnd) {
          notify(params.lastSlideMessage);
        } else {
          notify(params.nextSlideMessage);
        }
      }
      if (prevEls.includes(targetEl)) {
        if (!(swiper.isBeginning && !swiper.params.loop)) {
          swiper.slidePrev();
        }
        if (swiper.isBeginning) {
          notify(params.firstSlideMessage);
        } else {
          notify(params.prevSlideMessage);
        }
      }
    }
    if (swiper.pagination && targetEl.matches(classesToSelector(swiper.params.pagination.bulletClass))) {
      targetEl.click();
    }
  }
  function updateNavigation() {
    if (swiper.params.loop || swiper.params.rewind || !swiper.navigation) return;
    const {
      nextEl,
      prevEl
    } = swiper.navigation;
    if (prevEl) {
      if (swiper.isBeginning) {
        disableEl(prevEl);
        makeElNotFocusable(prevEl);
      } else {
        enableEl(prevEl);
        makeElFocusable(prevEl);
      }
    }
    if (nextEl) {
      if (swiper.isEnd) {
        disableEl(nextEl);
        makeElNotFocusable(nextEl);
      } else {
        enableEl(nextEl);
        makeElFocusable(nextEl);
      }
    }
  }
  function hasPagination() {
    return swiper.pagination && swiper.pagination.bullets && swiper.pagination.bullets.length;
  }
  function hasClickablePagination() {
    return hasPagination() && swiper.params.pagination.clickable;
  }
  function updatePagination() {
    const params = swiper.params.a11y;
    if (!hasPagination()) return;
    swiper.pagination.bullets.forEach(bulletEl => {
      if (swiper.params.pagination.clickable) {
        makeElFocusable(bulletEl);
        if (!swiper.params.pagination.renderBullet) {
          addElRole(bulletEl, 'button');
          addElLabel(bulletEl, params.paginationBulletMessage.replace(/\{\{index\}\}/, elementIndex(bulletEl) + 1));
        }
      }
      if (bulletEl.matches(classesToSelector(swiper.params.pagination.bulletActiveClass))) {
        bulletEl.setAttribute('aria-current', 'true');
      } else {
        bulletEl.removeAttribute('aria-current');
      }
    });
  }
  const initNavEl = (el, wrapperId, message) => {
    makeElFocusable(el);
    if (el.tagName !== 'BUTTON') {
      addElRole(el, 'button');
      el.addEventListener('keydown', onEnterOrSpaceKey);
    }
    addElLabel(el, message);
    addElControls(el, wrapperId);
  };
  const handlePointerDown = e => {
    if (focusTargetSlideEl && focusTargetSlideEl !== e.target && !focusTargetSlideEl.contains(e.target)) {
      preventFocusHandler = true;
    }
    swiper.a11y.clicked = true;
  };
  const handlePointerUp = () => {
    preventFocusHandler = false;
    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        if (!swiper.destroyed) {
          swiper.a11y.clicked = false;
        }
      });
    });
  };
  const onVisibilityChange = e => {
    visibilityChangedTimestamp = new Date().getTime();
  };
  const handleFocus = e => {
    if (swiper.a11y.clicked) return;
    if (new Date().getTime() - visibilityChangedTimestamp < 100) return;
    const slideEl = e.target.closest(`.${swiper.params.slideClass}, swiper-slide`);
    if (!slideEl || !swiper.slides.includes(slideEl)) return;
    focusTargetSlideEl = slideEl;
    const isActive = swiper.slides.indexOf(slideEl) === swiper.activeIndex;
    const isVisible = swiper.params.watchSlidesProgress && swiper.visibleSlides && swiper.visibleSlides.includes(slideEl);
    if (isActive || isVisible) return;
    if (e.sourceCapabilities && e.sourceCapabilities.firesTouchEvents) return;
    if (swiper.isHorizontal()) {
      swiper.el.scrollLeft = 0;
    } else {
      swiper.el.scrollTop = 0;
    }
    requestAnimationFrame(() => {
      if (preventFocusHandler) return;
      swiper.slideTo(swiper.slides.indexOf(slideEl), 0);
      preventFocusHandler = false;
    });
  };
  const initSlides = () => {
    const params = swiper.params.a11y;
    if (params.itemRoleDescriptionMessage) {
      addElRoleDescription(swiper.slides, params.itemRoleDescriptionMessage);
    }
    if (params.slideRole) {
      addElRole(swiper.slides, params.slideRole);
    }
    const slidesLength = swiper.slides.length;
    if (params.slideLabelMessage) {
      swiper.slides.forEach((slideEl, index) => {
        const slideIndex = swiper.params.loop ? parseInt(slideEl.getAttribute('data-swiper-slide-index'), 10) : index;
        const ariaLabelMessage = params.slideLabelMessage.replace(/\{\{index\}\}/, slideIndex + 1).replace(/\{\{slidesLength\}\}/, slidesLength);
        addElLabel(slideEl, ariaLabelMessage);
      });
    }
  };
  const init = () => {
    const params = swiper.params.a11y;
    swiper.el.append(liveRegion);

    // Container
    const containerEl = swiper.el;
    if (params.containerRoleDescriptionMessage) {
      addElRoleDescription(containerEl, params.containerRoleDescriptionMessage);
    }
    if (params.containerMessage) {
      addElLabel(containerEl, params.containerMessage);
    }

    // Wrapper
    const wrapperEl = swiper.wrapperEl;
    const wrapperId = params.id || wrapperEl.getAttribute('id') || `swiper-wrapper-${getRandomNumber(16)}`;
    const live = swiper.params.autoplay && swiper.params.autoplay.enabled ? 'off' : 'polite';
    addElId(wrapperEl, wrapperId);
    addElLive(wrapperEl, live);

    // Slide
    initSlides();

    // Navigation
    let {
      nextEl,
      prevEl
    } = swiper.navigation ? swiper.navigation : {};
    nextEl = makeElementsArray(nextEl);
    prevEl = makeElementsArray(prevEl);
    if (nextEl) {
      nextEl.forEach(el => initNavEl(el, wrapperId, params.nextSlideMessage));
    }
    if (prevEl) {
      prevEl.forEach(el => initNavEl(el, wrapperId, params.prevSlideMessage));
    }

    // Pagination
    if (hasClickablePagination()) {
      const paginationEl = makeElementsArray(swiper.pagination.el);
      paginationEl.forEach(el => {
        el.addEventListener('keydown', onEnterOrSpaceKey);
      });
    }

    // Tab focus
    const document = getDocument();
    document.addEventListener('visibilitychange', onVisibilityChange);
    swiper.el.addEventListener('focus', handleFocus, true);
    swiper.el.addEventListener('focus', handleFocus, true);
    swiper.el.addEventListener('pointerdown', handlePointerDown, true);
    swiper.el.addEventListener('pointerup', handlePointerUp, true);
  };
  function destroy() {
    if (liveRegion) liveRegion.remove();
    let {
      nextEl,
      prevEl
    } = swiper.navigation ? swiper.navigation : {};
    nextEl = makeElementsArray(nextEl);
    prevEl = makeElementsArray(prevEl);
    if (nextEl) {
      nextEl.forEach(el => el.removeEventListener('keydown', onEnterOrSpaceKey));
    }
    if (prevEl) {
      prevEl.forEach(el => el.removeEventListener('keydown', onEnterOrSpaceKey));
    }

    // Pagination
    if (hasClickablePagination()) {
      const paginationEl = makeElementsArray(swiper.pagination.el);
      paginationEl.forEach(el => {
        el.removeEventListener('keydown', onEnterOrSpaceKey);
      });
    }
    const document = getDocument();
    document.removeEventListener('visibilitychange', onVisibilityChange);
    // Tab focus
    swiper.el.removeEventListener('focus', handleFocus, true);
    swiper.el.removeEventListener('pointerdown', handlePointerDown, true);
    swiper.el.removeEventListener('pointerup', handlePointerUp, true);
  }
  on('beforeInit', () => {
    liveRegion = createElement('span', swiper.params.a11y.notificationClass);
    liveRegion.setAttribute('aria-live', 'assertive');
    liveRegion.setAttribute('aria-atomic', 'true');
  });
  on('afterInit', () => {
    if (!swiper.params.a11y.enabled) return;
    init();
  });
  on('slidesLengthChange snapGridLengthChange slidesGridLengthChange', () => {
    if (!swiper.params.a11y.enabled) return;
    initSlides();
  });
  on('fromEdge toEdge afterInit lock unlock', () => {
    if (!swiper.params.a11y.enabled) return;
    updateNavigation();
  });
  on('paginationUpdate', () => {
    if (!swiper.params.a11y.enabled) return;
    updatePagination();
  });
  on('destroy', () => {
    if (!swiper.params.a11y.enabled) return;
    destroy();
  });
}

/* eslint no-underscore-dangle: "off" */
/* eslint no-use-before-define: "off" */
function Autoplay(_ref) {
  let {
    swiper,
    extendParams,
    on,
    emit,
    params
  } = _ref;
  swiper.autoplay = {
    running: false,
    paused: false,
    timeLeft: 0
  };
  extendParams({
    autoplay: {
      enabled: false,
      delay: 3000,
      waitForTransition: true,
      disableOnInteraction: false,
      stopOnLastSlide: false,
      reverseDirection: false,
      pauseOnMouseEnter: false
    }
  });
  let timeout;
  let raf;
  let autoplayDelayTotal = params && params.autoplay ? params.autoplay.delay : 3000;
  let autoplayDelayCurrent = params && params.autoplay ? params.autoplay.delay : 3000;
  let autoplayTimeLeft;
  let autoplayStartTime = new Date().getTime();
  let wasPaused;
  let isTouched;
  let pausedByTouch;
  let touchStartTimeout;
  let slideChanged;
  let pausedByInteraction;
  let pausedByPointerEnter;
  function onTransitionEnd(e) {
    if (!swiper || swiper.destroyed || !swiper.wrapperEl) return;
    if (e.target !== swiper.wrapperEl) return;
    swiper.wrapperEl.removeEventListener('transitionend', onTransitionEnd);
    if (pausedByPointerEnter) {
      return;
    }
    resume();
  }
  const calcTimeLeft = () => {
    if (swiper.destroyed || !swiper.autoplay.running) return;
    if (swiper.autoplay.paused) {
      wasPaused = true;
    } else if (wasPaused) {
      autoplayDelayCurrent = autoplayTimeLeft;
      wasPaused = false;
    }
    const timeLeft = swiper.autoplay.paused ? autoplayTimeLeft : autoplayStartTime + autoplayDelayCurrent - new Date().getTime();
    swiper.autoplay.timeLeft = timeLeft;
    emit('autoplayTimeLeft', timeLeft, timeLeft / autoplayDelayTotal);
    raf = requestAnimationFrame(() => {
      calcTimeLeft();
    });
  };
  const getSlideDelay = () => {
    let activeSlideEl;
    if (swiper.virtual && swiper.params.virtual.enabled) {
      activeSlideEl = swiper.slides.filter(slideEl => slideEl.classList.contains('swiper-slide-active'))[0];
    } else {
      activeSlideEl = swiper.slides[swiper.activeIndex];
    }
    if (!activeSlideEl) return undefined;
    const currentSlideDelay = parseInt(activeSlideEl.getAttribute('data-swiper-autoplay'), 10);
    return currentSlideDelay;
  };
  const run = delayForce => {
    if (swiper.destroyed || !swiper.autoplay.running) return;
    cancelAnimationFrame(raf);
    calcTimeLeft();
    let delay = typeof delayForce === 'undefined' ? swiper.params.autoplay.delay : delayForce;
    autoplayDelayTotal = swiper.params.autoplay.delay;
    autoplayDelayCurrent = swiper.params.autoplay.delay;
    const currentSlideDelay = getSlideDelay();
    if (!Number.isNaN(currentSlideDelay) && currentSlideDelay > 0 && typeof delayForce === 'undefined') {
      delay = currentSlideDelay;
      autoplayDelayTotal = currentSlideDelay;
      autoplayDelayCurrent = currentSlideDelay;
    }
    autoplayTimeLeft = delay;
    const speed = swiper.params.speed;
    const proceed = () => {
      if (!swiper || swiper.destroyed) return;
      if (swiper.params.autoplay.reverseDirection) {
        if (!swiper.isBeginning || swiper.params.loop || swiper.params.rewind) {
          swiper.slidePrev(speed, true, true);
          emit('autoplay');
        } else if (!swiper.params.autoplay.stopOnLastSlide) {
          swiper.slideTo(swiper.slides.length - 1, speed, true, true);
          emit('autoplay');
        }
      } else {
        if (!swiper.isEnd || swiper.params.loop || swiper.params.rewind) {
          swiper.slideNext(speed, true, true);
          emit('autoplay');
        } else if (!swiper.params.autoplay.stopOnLastSlide) {
          swiper.slideTo(0, speed, true, true);
          emit('autoplay');
        }
      }
      if (swiper.params.cssMode) {
        autoplayStartTime = new Date().getTime();
        requestAnimationFrame(() => {
          run();
        });
      }
    };
    if (delay > 0) {
      clearTimeout(timeout);
      timeout = setTimeout(() => {
        proceed();
      }, delay);
    } else {
      requestAnimationFrame(() => {
        proceed();
      });
    }

    // eslint-disable-next-line
    return delay;
  };
  const start = () => {
    autoplayStartTime = new Date().getTime();
    swiper.autoplay.running = true;
    run();
    emit('autoplayStart');
  };
  const stop = () => {
    swiper.autoplay.running = false;
    clearTimeout(timeout);
    cancelAnimationFrame(raf);
    emit('autoplayStop');
  };
  const pause = (internal, reset) => {
    if (swiper.destroyed || !swiper.autoplay.running) return;
    clearTimeout(timeout);
    if (!internal) {
      pausedByInteraction = true;
    }
    const proceed = () => {
      emit('autoplayPause');
      if (swiper.params.autoplay.waitForTransition) {
        swiper.wrapperEl.addEventListener('transitionend', onTransitionEnd);
      } else {
        resume();
      }
    };
    swiper.autoplay.paused = true;
    if (reset) {
      if (slideChanged) {
        autoplayTimeLeft = swiper.params.autoplay.delay;
      }
      slideChanged = false;
      proceed();
      return;
    }
    const delay = autoplayTimeLeft || swiper.params.autoplay.delay;
    autoplayTimeLeft = delay - (new Date().getTime() - autoplayStartTime);
    if (swiper.isEnd && autoplayTimeLeft < 0 && !swiper.params.loop) return;
    if (autoplayTimeLeft < 0) autoplayTimeLeft = 0;
    proceed();
  };
  const resume = () => {
    if (swiper.isEnd && autoplayTimeLeft < 0 && !swiper.params.loop || swiper.destroyed || !swiper.autoplay.running) return;
    autoplayStartTime = new Date().getTime();
    if (pausedByInteraction) {
      pausedByInteraction = false;
      run(autoplayTimeLeft);
    } else {
      run();
    }
    swiper.autoplay.paused = false;
    emit('autoplayResume');
  };
  const onVisibilityChange = () => {
    if (swiper.destroyed || !swiper.autoplay.running) return;
    const document = getDocument();
    if (document.visibilityState === 'hidden') {
      pausedByInteraction = true;
      pause(true);
    }
    if (document.visibilityState === 'visible') {
      resume();
    }
  };
  const onPointerEnter = e => {
    if (e.pointerType !== 'mouse') return;
    pausedByInteraction = true;
    pausedByPointerEnter = true;
    if (swiper.animating || swiper.autoplay.paused) return;
    pause(true);
  };
  const onPointerLeave = e => {
    if (e.pointerType !== 'mouse') return;
    pausedByPointerEnter = false;
    if (swiper.autoplay.paused) {
      resume();
    }
  };
  const attachMouseEvents = () => {
    if (swiper.params.autoplay.pauseOnMouseEnter) {
      swiper.el.addEventListener('pointerenter', onPointerEnter);
      swiper.el.addEventListener('pointerleave', onPointerLeave);
    }
  };
  const detachMouseEvents = () => {
    swiper.el.removeEventListener('pointerenter', onPointerEnter);
    swiper.el.removeEventListener('pointerleave', onPointerLeave);
  };
  const attachDocumentEvents = () => {
    const document = getDocument();
    document.addEventListener('visibilitychange', onVisibilityChange);
  };
  const detachDocumentEvents = () => {
    const document = getDocument();
    document.removeEventListener('visibilitychange', onVisibilityChange);
  };
  on('init', () => {
    if (swiper.params.autoplay.enabled) {
      attachMouseEvents();
      attachDocumentEvents();
      start();
    }
  });
  on('destroy', () => {
    detachMouseEvents();
    detachDocumentEvents();
    if (swiper.autoplay.running) {
      stop();
    }
  });
  on('_freeModeStaticRelease', () => {
    if (pausedByTouch || pausedByInteraction) {
      resume();
    }
  });
  on('_freeModeNoMomentumRelease', () => {
    if (!swiper.params.autoplay.disableOnInteraction) {
      pause(true, true);
    } else {
      stop();
    }
  });
  on('beforeTransitionStart', (_s, speed, internal) => {
    if (swiper.destroyed || !swiper.autoplay.running) return;
    if (internal || !swiper.params.autoplay.disableOnInteraction) {
      pause(true, true);
    } else {
      stop();
    }
  });
  on('sliderFirstMove', () => {
    if (swiper.destroyed || !swiper.autoplay.running) return;
    if (swiper.params.autoplay.disableOnInteraction) {
      stop();
      return;
    }
    isTouched = true;
    pausedByTouch = false;
    pausedByInteraction = false;
    touchStartTimeout = setTimeout(() => {
      pausedByInteraction = true;
      pausedByTouch = true;
      pause(true);
    }, 200);
  });
  on('touchEnd', () => {
    if (swiper.destroyed || !swiper.autoplay.running || !isTouched) return;
    clearTimeout(touchStartTimeout);
    clearTimeout(timeout);
    if (swiper.params.autoplay.disableOnInteraction) {
      pausedByTouch = false;
      isTouched = false;
      return;
    }
    if (pausedByTouch && swiper.params.cssMode) resume();
    pausedByTouch = false;
    isTouched = false;
  });
  on('slideChange', () => {
    if (swiper.destroyed || !swiper.autoplay.running) return;
    slideChanged = true;
  });
  Object.assign(swiper.autoplay, {
    start,
    stop,
    pause,
    resume
  });
}

function effectInit(params) {
  const {
    effect,
    swiper,
    on,
    setTranslate,
    setTransition,
    overwriteParams,
    perspective,
    recreateShadows,
    getEffectParams
  } = params;
  on('beforeInit', () => {
    if (swiper.params.effect !== effect) return;
    swiper.classNames.push(`${swiper.params.containerModifierClass}${effect}`);
    if (perspective && perspective()) {
      swiper.classNames.push(`${swiper.params.containerModifierClass}3d`);
    }
    const overwriteParamsResult = overwriteParams ? overwriteParams() : {};
    Object.assign(swiper.params, overwriteParamsResult);
    Object.assign(swiper.originalParams, overwriteParamsResult);
  });
  on('setTranslate', () => {
    if (swiper.params.effect !== effect) return;
    setTranslate();
  });
  on('setTransition', (_s, duration) => {
    if (swiper.params.effect !== effect) return;
    setTransition(duration);
  });
  on('transitionEnd', () => {
    if (swiper.params.effect !== effect) return;
    if (recreateShadows) {
      if (!getEffectParams || !getEffectParams().slideShadows) return;
      // remove shadows
      swiper.slides.forEach(slideEl => {
        slideEl.querySelectorAll('.swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left').forEach(shadowEl => shadowEl.remove());
      });
      // create new one
      recreateShadows();
    }
  });
  let requireUpdateOnVirtual;
  on('virtualUpdate', () => {
    if (swiper.params.effect !== effect) return;
    if (!swiper.slides.length) {
      requireUpdateOnVirtual = true;
    }
    requestAnimationFrame(() => {
      if (requireUpdateOnVirtual && swiper.slides && swiper.slides.length) {
        setTranslate();
        requireUpdateOnVirtual = false;
      }
    });
  });
}

function effectTarget(effectParams, slideEl) {
  const transformEl = getSlideTransformEl(slideEl);
  if (transformEl !== slideEl) {
    transformEl.style.backfaceVisibility = 'hidden';
    transformEl.style['-webkit-backface-visibility'] = 'hidden';
  }
  return transformEl;
}

function effectVirtualTransitionEnd(_ref) {
  let {
    swiper,
    duration,
    transformElements,
    allSlides
  } = _ref;
  const {
    activeIndex
  } = swiper;
  const getSlide = el => {
    if (!el.parentElement) {
      // assume shadow root
      const slide = swiper.slides.filter(slideEl => slideEl.shadowRoot && slideEl.shadowRoot === el.parentNode)[0];
      return slide;
    }
    return el.parentElement;
  };
  if (swiper.params.virtualTranslate && duration !== 0) {
    let eventTriggered = false;
    let transitionEndTarget;
    if (allSlides) {
      transitionEndTarget = transformElements;
    } else {
      transitionEndTarget = transformElements.filter(transformEl => {
        const el = transformEl.classList.contains('swiper-slide-transform') ? getSlide(transformEl) : transformEl;
        return swiper.getSlideIndex(el) === activeIndex;
      });
    }
    transitionEndTarget.forEach(el => {
      elementTransitionEnd(el, () => {
        if (eventTriggered) return;
        if (!swiper || swiper.destroyed) return;
        eventTriggered = true;
        swiper.animating = false;
        const evt = new window.CustomEvent('transitionend', {
          bubbles: true,
          cancelable: true
        });
        swiper.wrapperEl.dispatchEvent(evt);
      });
    });
  }
}

function EffectFade(_ref) {
  let {
    swiper,
    extendParams,
    on
  } = _ref;
  extendParams({
    fadeEffect: {
      crossFade: false
    }
  });
  const setTranslate = () => {
    const {
      slides
    } = swiper;
    const params = swiper.params.fadeEffect;
    for (let i = 0; i < slides.length; i += 1) {
      const slideEl = swiper.slides[i];
      const offset = slideEl.swiperSlideOffset;
      let tx = -offset;
      if (!swiper.params.virtualTranslate) tx -= swiper.translate;
      let ty = 0;
      if (!swiper.isHorizontal()) {
        ty = tx;
        tx = 0;
      }
      const slideOpacity = swiper.params.fadeEffect.crossFade ? Math.max(1 - Math.abs(slideEl.progress), 0) : 1 + Math.min(Math.max(slideEl.progress, -1), 0);
      const targetEl = effectTarget(params, slideEl);
      targetEl.style.opacity = slideOpacity;
      targetEl.style.transform = `translate3d(${tx}px, ${ty}px, 0px)`;
    }
  };
  const setTransition = duration => {
    const transformElements = swiper.slides.map(slideEl => getSlideTransformEl(slideEl));
    transformElements.forEach(el => {
      el.style.transitionDuration = `${duration}ms`;
    });
    effectVirtualTransitionEnd({
      swiper,
      duration,
      transformElements,
      allSlides: true
    });
  };
  effectInit({
    effect: 'fade',
    swiper,
    on,
    setTranslate,
    setTransition,
    overwriteParams: () => ({
      slidesPerView: 1,
      slidesPerGroup: 1,
      watchSlidesProgress: true,
      spaceBetween: 0,
      virtualTranslate: !swiper.params.cssMode
    })
  });
}

function configureSwiper(nextEl, prevEl, scrollbarEl, paginationEl) {
	const isFeaturedSwiper = scrollbarEl !== undefined;
	const modules = [Navigation];

	if (isFeaturedSwiper) {
		modules.push(A11y, Autoplay, Scrollbar, EffectFade);
	} else {
		modules.push(Pagination);
	}

	const config = {
		modules: modules,
		preloadImages: false,
		lazy: true,
		grabCursor: true,
		navigation: {
			nextEl: nextEl,
			prevEl: prevEl,
		},
	};

	if (isFeaturedSwiper) {
		Object.assign(config, {
			speed: 500,
			loop: false,
			centeredSlides: true,
			autoplay: {
				delay: 8000,
				disableOnInteraction: false,
				pauseOnMouseEnter: true,
			},
			effect: 'fade',
			fadeEffect: {
				crossFade: true,
			},
			scrollbar: {
				el: scrollbarEl,
			},
		});
	} else {
		Object.assign(config, {
			slidesPerGroup: 768 <= window.innerWidth ? 2 : 1,
			slidesPerView: 'auto',
			pagination: {
				el: paginationEl,
				type: 'progressbar',
			},
		});
	}

	return config;
}

function initializeSwipers(element) {
	const featuredSwiperContainer = element.shadowRoot.querySelector('#featured');

	if (featuredSwiperContainer) {
		const featuredScrollbar = featuredSwiperContainer.querySelector('.swiper-scrollbar');
		const featuredNavi = featuredSwiperContainer.querySelector('.slide-navi');
		const featuredNaviNext = featuredNavi.querySelector('.swiper-button-next');
		const featuredNaviPrev = featuredNavi.querySelector('.swiper-button-prev');

		const swiperConfig = configureSwiper(featuredNaviNext, featuredNaviPrev, featuredScrollbar);

		if (element.featuredSwiper) {
			element.featuredSwiper.destroy(true, true);
		}

		element.featuredSwiper = new Swiper(featuredSwiperContainer, swiperConfig);
		// console.log('Featured swiper initialized');
	} else if (element.featuredSwiper) {
		element.featuredSwiper.update();
	}
	const trendingSwiperContainer = element.shadowRoot.querySelector('#trend');
	if (trendingSwiperContainer) {
		const trendingPagination = element.shadowRoot.querySelector('.swiper-pagination');
		const trendingNaviNext = element.shadowRoot.querySelector('.trending-button-next');
		const trendingNaviPrev = element.shadowRoot.querySelector('.trending-button-prev');

		const swiperConfig = configureSwiper(
			trendingNaviNext,
			trendingNaviPrev,
			undefined,
			trendingPagination,
		); // Changed scrollbarEl to undefined

		if (element.trendingSwiper) {
			element.trendingSwiper.destroy(true, true);
		}

		element.trendingSwiper = new Swiper(trendingSwiperContainer, swiperConfig);
	} else if (element.trendingSwiper) {
		element.trendingSwiper.update();
	}
}

function scrollBackToTop(element) {
	const progressPath = element.shadowRoot.querySelector('.progress-wrap path');
	const pathLength = progressPath.getTotalLength();

	// Set up initial styles for progress path
	progressPath.style.strokeDasharray = pathLength;
	progressPath.style.strokeDashoffset = pathLength;

	// Function to update progress
	const updateProgress = () => {
		const scroll = window.scrollY || document.documentElement.scrollTop;
		const height = document.documentElement.scrollHeight - window.innerHeight;
		const progress = pathLength - (scroll * pathLength) / height;
		progressPath.style.strokeDashoffset = progress;

		// Toggle active class based on scroll position
		element.shadowRoot
			.querySelector('.progress-wrap')
			.classList.toggle('active-progress', scroll > 50);
	};

	// Update progress initially
	updateProgress();

	// Add scroll event listener to update progress
	window.addEventListener('scroll', updateProgress);

	// Add click event listener to scroll back to top
	element.shadowRoot.querySelector('.progress-wrap').addEventListener('click', (event) => {
		event.preventDefault();
		window.scrollTo({
			top: 0,
			behavior: 'smooth',
		});
	});
}

function setHeaderStyles(element) {
	const header = document
		.querySelector('body > home-assistant')
		.shadowRoot.querySelector('home-assistant-main')
		.shadowRoot.querySelector('ha-drawer > partial-panel-resolver > ha-panel-lovelace')
		.shadowRoot.querySelector('hui-root')
		.shadowRoot.querySelector('div > div.header');

	// Function to handle scroll event
	function handleScroll() {
		if (window.scrollY > 0) {
			header.style.zIndex = 0;
		} else {
			header.style.zIndex = 4;
		}
	}

	// Function to handle sticky header
	function handleScrollHeader() {
		const absHeaderEl = element.shadowRoot.querySelector('.abs-head');
		if (window.scrollY > 56) {
			absHeaderEl.classList.add('sticky');
		} else {
			absHeaderEl.classList.remove('sticky');
		}
	}

	function setBackgroundColor() {
		const rootStyle = document.documentElement.style;
		rootStyle.setProperty(
			'--app-header-background-color',
			'linear-gradient(180deg, rgba(24,24,24,1) 0%, rgba(24,24,24,0) 100%)',
		);
		addBlurHeader();
	}

	function addBlurHeader() {
		if (window.innerWidth <= 500) {
			header.style.backdropFilter = 'blur(10px)';
		} else {
			header.style.backdropFilter = 'none';
		}
	}

	function marginMainContent() {
		const mainPageEl = element.shadowRoot.querySelector('.main-page');
		const absHeaderEl = element.shadowRoot.querySelector('.abs-head');
		const mainKodiEl = element.shadowRoot.querySelector('.main-kodi');
		// Check if elements exist before manipulating styles
		if (mainPageEl || mainKodiEl) {
			if (window.innerWidth <= 500) {
				if (mainPageEl) {
					mainPageEl.style.marginTop = 0;
				}
				if (mainKodiEl) {
					mainKodiEl.style.marginTop = 0;
				}
				if (absHeaderEl) {
					absHeaderEl.style.marginTop = 0;
				}
			} else {
				if (mainPageEl) {
					mainPageEl.style.marginTop = 'calc(-1 * var(--header-height))';
				}
				if (mainKodiEl) {
					mainKodiEl.style.marginTop = 'calc(-1 * var(--header-height))';
				}
				if (absHeaderEl) {
					absHeaderEl.style.marginTop = 'var(--header-height)';
				}
			}
		}
	}

	// Initial setup
	setBackgroundColor();
	setTimeout(marginMainContent, 500);
	setTimeout(window.addEventListener('resize', marginMainContent), 1000);
	window.addEventListener('scroll', handleScroll);
	setTimeout(window.addEventListener('scroll', handleScrollHeader), 1000);
}

function getHeaderBg() {
	const rootStyles = getComputedStyle(document.documentElement);
	const headerBgColor = rootStyles.getPropertyValue('--app-header-background-color');
	return headerBgColor;
}

function loadCSS(url) {
	const link = document.createElement('link');
	link.type = 'text/css';
	link.rel = 'stylesheet';
	link.href = url;
	document.head.appendChild(link);
}

function loadStyles() {
	loadCSS(
		'https://fonts.googleapis.com/css2?family=Work+Sans:ital,wght@0,100..900;1,100..900&display=swap',
	);
	loadCSS('https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.3/font/bootstrap-icons.min.css');
}

class KodiCommunication {
	constructor(webSocketUrl, httpUrl, messageCallback, isLocal) {
		this.webSocketUrl = webSocketUrl;
		this.httpUrl = httpUrl;
		this.messageCallback = messageCallback;
		this.isLocal = isLocal;

		if (this.isLocal) {
			this.setupWebSocket();
		} else {
			// Prepare to use HTTP methods, ensure WebSocket isn't used
			this.socket = null;
			console.info(
				`%c HTTP mode active, using:', ${this.httpUrl}`,
				'background: white; color: black; font-weight:bold; font-family: monospace',
			);
			this.initKodilib();
		}
	}

	setupWebSocket() {
		this.socket = new WebSocket(this.webSocketUrl);
		this.socket.onopen = () => {
			this.isConnected = true;
			this.initKodilib();

			console.info(
				`%c WEBSOCKET CONNECTED `,
				'background: white; color: black; font-weight:bold; font-family: monospace',
			);
		};
		this.socket.onclose = () => {
			this.isConnected = false;

			console.info(
				`%c WEBSOCKET DISCONNECTED `,
				'background: black; color: white; font-weight:bold; font-family: monospace',
			);
		};

		this.socket.onerror = (error) => {
			console.error('WebSocket error:', error);
		};

		this.socket.onmessage = (event) => {
			const message = JSON.parse(event.data);
			if (this.messageCallback) {
				this.messageCallback(message);
			}
		};
	}

	async sendMessage(method, id, params = {}) {
		// Define the default parameters, including the default properties
		const defaultParams = {
			properties: ['title', 'dateadded', 'file', 'uniqueid'],
			limits: { start: 0, end: 14 },
			sort: {
				method: 'dateadded',
				order: 'descending',
			},
		};

		// Extend the default params with the provided params, overwriting only what is explicitly provided
		const finalParams = {
			...defaultParams,
			...params,
			properties: params.properties || defaultParams.properties, // Ensure default properties are used if not overridden
			limits: params.limits || defaultParams.limits, // Ensure default limits are used if not overridden
			sort: params.sort || defaultParams.sort, // Ensure default sort is used if not overridden
		};

		const message = {
			jsonrpc: '2.0',
			method: method,
			id: id,
			params: finalParams,
		};

		if (this.isLocal && this.socket) {
			this.socket.send(JSON.stringify(message));
		} else {
			const response = await fetch(this.httpUrl, {
				method: 'POST',
				headers: { 'Content-Type': 'application/json' },
				body: JSON.stringify(message),
			});
			const data = await response.json();
			if (this.messageCallback) {
				this.messageCallback(data);
			}
		}
	}

	initKodilib() {
		this.sendMessage('VideoLibrary.Getrecentlyaddedmovies', 'recently-added');
		this.sendMessage('VideoLibrary.GetMovies', 'random-movies', {
			sort: { method: 'random', order: 'descending' },
		});
		this.fetchKodiAllMovies();
	}

	fetchKodiAllMovies() {
		// Prepare the parameters and method for the API call.
		const method = 'VideoLibrary.GetMovies';
		const id = 'all-movies';
		const params = {
			limits: { start: 0, end: 0 },
			properties: [
				'title',
				'art',
				'playcount',
				'lastplayed',
				'dateadded',
				'resume',
				'rating',
				'year',
				'file',
				'genre',
				'writer',
				'director',
				'cast',
				'set',
				'studio',
				'mpaa',
				'tag',
				'uniqueid',
				'country',
			],
			sort: { method: 'random', order: 'descending' },
		};
		this.sendMessage(method, id, params);
	}

	searchMovies(movieName) {
		const params = {
			filter: {
				field: 'title',
				operator: 'contains',
				value: movieName,
			},
			properties: ['title', 'art', 'file', 'uniqueid'],
			sort: {
				order: 'ascending',
				method: 'title',
				ignorearticle: true,
			},
		};

		this.sendMessage('VideoLibrary.GetMovies', 'search-movies', params);
	}

	getGenres() {
		const params = {
			type: 'movie',
			properties: ['title'],
			limits: { start: 0, end: 100 },
			sort: { method: 'title', order: 'ascending' },
		};
		this.sendMessage('VideoLibrary.GetGenres', 'get-genres-movie', params);
	}
}

var t,r;!function(e){e.language="language",e.system="system",e.comma_decimal="comma_decimal",e.decimal_comma="decimal_comma",e.space_comma="space_comma",e.none="none";}(t||(t={})),function(e){e.language="language",e.system="system",e.am_pm="12",e.twenty_four="24";}(r||(r={}));var ne=function(e,t,r,n){n=n||{},r=null==r?{}:r;var i=new Event(t,{bubbles:void 0===n.bubbles||n.bubbles,cancelable:Boolean(n.cancelable),composed:void 0===n.composed||n.composed});return i.detail=r,e.dispatchEvent(i),i};

class KodiPlayerObject {
	constructor(hass, stateObj) {
		this._hass = hass;
		this._stateObj = stateObj;
		this._attr = stateObj.attributes;
		this._playerId = stateObj.entity_id;
	}

	get stateStr() {
		const state = this._stateObj.state;
		return state;
	}

	get name() {
		return this._attr.friendly_name || '';
	}

	get isOff() {
		return this._stateObj.state === 'off';
	}

	get isIdle() {
		return this._stateObj.state === 'idle';
	}

	get isUnavailable() {
		return this._stateObj.state === 'unavailable';
	}

	get isMuted() {
		return this._attr.is_volume_muted;
	}

	get isPaused() {
		return this._stateObj.state === 'paused';
	}

	get isPlaying() {
		return this._stateObj.state === 'playing';
	}
	get isActive() {
		return (!this.isOff && !this.isUnavailable && !this.isIdle) || false;
	}

	get isMusic() {
		return this._attr.media_content_type === 'music';
	}

	get isTVShow() {
		return this._attr.media_content_type === 'tvshow';
	}

	get content() {
		return this._attr.media_content_type || 'none';
	}

	get mediaDuration() {
		return this._attr.media_duration || 0;
	}

	get updatedAt() {
		return this._attr.media_position_updated_at || 0;
	}

	get position() {
		return this._attr.media_position || 0;
	}

	get icon() {
		return this._attr.icon || 'mdi:cast-audio';
	}

	get progress() {
		if (this.isPlaying) {
			return this.position + (Date.now() - new Date(this.updatedAt).getTime()) / 1000.0;
		} else {
			return this.position;
		}
	}
	get showProgress() {
		return this.isPlaying || this.isPaused;
	}

	get muted() {
		return this._attr.is_volume_muted || false;
	}

	get volume() {
		return this._attr.volume_level || 0;
	}

	get primaryTitle() {
		return this._attr.media_title;
	}

	get secondaryTitle() {
		if (this.isMusic) {
			return this._attr.media_artist;
		}
		if (this.isTVShow) {
			let text = this._attr.media_series_title;

			if (this._attr.media_season) {
				text += ' S' + this._attr.media_season;

				if (this._attr.media_episode) {
					text += 'E' + this._attr.media_episode;
				}
			}

			return text;
		}
		if (this._attr.app_name) {
			return this._attr.app_name;
		}
		return '';
	}

	get picture() {
		return this._attr.entity_picture_local || this._attr.entity_picture;
	}

	get movieID() {
		if (!this._attr.media_content_id) {
			return ``;
		}
		return this._attr.media_content_id.tmdb;
	}

	get lastChanged() {
		return this._stateObj.last_changed;
	}

	get lastUpdated() {
		return this._stateObj.last_updated;
	}

	stop(e) {
		this.callService(e, 'media_stop');
	}

	moreInfo(e, node) {
		e.stopPropagation();
		const entityId = this._playerId;
		ne(node, 'hass-more-info', { entityId });
	}

	callService(e, service, inOptions = {}, domain = 'media_player', omit = false) {
		e.stopPropagation();
		this._hass.callService(domain, service, {
			...(!omit && { entity_id: this._playerId }),
			...inOptions,
		});
	}

	sendKey(e, action) {
		e.stopPropagation();
		this._hass.callService('kodi', 'call_method', {
			method: 'Input.ExecuteAction',
			action: action,
			entity_id: this._playerId,
		});
	}

	homeScreen(e) {
		e.stopPropagation();
		this._hass.callService('kodi', 'call_method', {
			method: 'Input.Home',
			entity_id: this._playerId,
		});
	}

	sendText(e, text) {
		e.stopPropagation();
		this._hass.callService('kodi', 'call_method', {
			method: 'Input.SendText',
			text: text,
			entity_id: this._playerId,
		});
	}

	play(e) {
		this.callService(e, 'media_play');
	}

	pause(e) {
		this.callService(e, 'media_pause');
	}

	playPause(e) {
		this.callService(e, 'media_play_pause');
	}

	playStop(e) {
		if (!this.isPlaying) this.callService(e, 'media_play');
		else this.callService(e, 'media_stop');
	}

	setVolume(e, volume) {
		this.callService(e, 'volume_set', {
			entity_id: this._playerId,
			volume_level: volume,
		});
	}

	togglePower(e) {
		if (this.isOff) this.callService(e, 'turn_on');
		else this.callService(e, 'turn_off');
	}

	toggleMute() {
		if (this.isMuted) {
			this._hass.callService('media_player', 'volume_mute', {
				entity_id: this._playerId,
				is_volume_muted: false,
			});
		} else {
			this._hass.callService('media_player', 'volume_mute', {
				entity_id: this._playerId,
				is_volume_muted: true,
			});
		}
	}

	seekForward() {
		const newPosition = this.position + 30; // Move forward by 30 seconds
		this._hass.callService('media_player', 'media_seek', {
			entity_id: this._playerId,
			seek_position: newPosition,
		});
	}

	seekBackward() {
		const newPosition = Math.max(0, this.position - 30); // Move backward by 30 seconds, but not less than 0
		this._hass.callService('media_player', 'media_seek', {
			entity_id: this._playerId,
			seek_position: newPosition,
		});
	}

	playMedia(media) {
		this._hass.callService('media_player', 'play_media', {
			entity_id: this._playerId,
			media_content_id: media,
			media_content_type: 'movie',
		});
	}

	toggleRemoteDialog(e, node) {
		const event = new CustomEvent('remote-dialog', {
			detail: {
				player: this,
			},
			bubbles: true,
			composed: true,
		});
		node.dispatchEvent(event);
	}
}

const KodiSection = (Superclass) =>
	class extends Superclass {
		_renderKodiLibrary() {
			return x` ${this._renderKodiMain()} ${this._renderKodiSidebar()} `;
		}

		_renderKodiMain() {
			var baseMovieList;

			if (this.isFilterActive && this.filteredMovies.length > 0) {
				baseMovieList = this.filteredMovies;
			} else if (this.isSearchActive && this.kodiSearchResults.length > 0) {
				baseMovieList = this.kodiSearchResults;
			} else {
				baseMovieList = this.kodiAllMovies;
			}

			// Apply pagination
			const startIndex = (this.currentPage - 1) * this.itemsPerPage;
			const endIndex = startIndex + this.itemsPerPage;
			const moviesToShow = baseMovieList.slice(startIndex, endIndex);

			const noItems = x`<div class="no-items">No movies found</div>`;
			return x`
				<aside class="main">
					${this._renderKodiFilter()}
					<div class="tab-content">
						<div class="movies items kodi-library">
							${!this.isSearchActive && this.isFilterActive && this.filteredMovies.length === 0
								? noItems
								: x`${renderKodiMovies(moviesToShow, (movie) =>
										this.showMovieDetailsDialog(movie),
									)}`}
						</div>
					</div>
					${this._renderPagination(!this.isFilterActive ? baseMovieList : this.kodiSearchResults)}
				</aside>
			`;
		}

		_renderKodiSidebar() {
			return x` <aside class="sidebar">
				<section class="mb-5">
					${renderSidebarMovies(
						this.kodiRecentlyMovies,
						(movie) => this.showMovieDetailsDialog(movie, true),
						'Latest movies',
					)}
				</section>
			</aside>`;
		}

		_renderKodiSearchBar() {
			return x`
				<div class="dropdown responsive kodi-search">
					<form
						role="form"
						id="search"
						class="d-flex align-s-center"
						@submit="${this.performSearch}"
						autocomplete="off">
						<input
							class="kodi-search-input"
							type="text"
							aria-label="Search movies..."
							placeholder="Search movies..."
							required=""
							.value="${this.search}"
							@input="${this.updateSearch}" />
					</form>
				</div>
			`;
		}

		_renderSelectedFilters() {
			// Initialize selected filters object
			const selectedFilters = {};

			// Loop through all filters and collect selected items
			Object.entries(this.filters).forEach(([filterType, items]) => {
				selectedFilters[filterType] = items.filter((item) => this.isActive(filterType, item));
			});

			// Render selected filter items
			return x`
				<div class="filters selected">
					${Object.entries(selectedFilters).map(
						([filterType, items]) => x`
							${items.map(
								(item) => x`
									<span
										class="badge badge-round badge-closable"
										@click="${() => this.removeSelectedFilter(filterType, item)}">
										${item}
										<span class="close"><i>${ICON.CLOSE}</i></span>
									</span>
								`,
							)}
						`,
					)}
				</div>
			`;
		}

		_renderKodiFilter() {
			// Initialize filters
			this.initializeFilters();

			// Filter options
			const filterKeys = Object.entries(this.filters).map(
				([filterType, items]) => x`
					<li class="filter">
						<div class="dropdown responsive">
							<button class="btn btn-secondary dropdown-toggle" aria-controls="${filterType}-menu">
								<span class="value">${this.getFilterButtonName(filterType)}</span>
							</button>
							<ul class="dropdown-menu" id="${filterType}-menu">
								${items.map(
									(item) => x`
										<li>
											<input
												id="${filterType}-${item}"
												type="checkbox"
												name="${filterType}"
												@change="${(e) => this.handleFilterChange(e, filterType, item)}"
												.checked=${this.isActive(filterType, item)} />
											<label for="${filterType}-${item}">${item}</label>
										</li>
									`,
								)}
							</ul>
						</div>
					</li>
				`,
			);

			// Sort options
			const sortKeys = Object.entries(this.sortOptions).map(
				([sortType, items]) => x`
					<li class="filter">
						<div class="dropdown responsive">
							<select
								class="kodi-search-input select"
								id="${sortType}-select"
								@change="${(e) => this.handleSortMovies(e, sortType, e.target.value)}">
								<option value="" ?selected=${this.sortOption === ''}>Sort by</option>
								${items.map(
									(item) => x`
										<option value="${item}" ?selected=${this.sortOption === item}>
											${this.sortOption === item ? `Sort by: ${item}` : item}
										</option>
									`,
								)}
							</select>
						</div>
					</li>
				`,
			);

			const closeBtn = x`
				<div class="end">
					<button
						class="btn-outline-body-color"
						@click="${(e) => (this.isBrowserMedia = !this.isBrowserMedia)}">
						<i>${ICON.CLOSE}</i>
					</button>
				</div>
			`;

			return x`
				<section>
					<div class="head">
						<div class="start">
							<h2 class="title"><i>${ICON.LIBRARY}</i> Movies</h2>
						</div>
						${this.isBrowserMedia && !this.isKodiLibrary ? closeBtn : T}
					</div>
					${this._renderSelectedFilters()}

					<div class="filters">
						<ul>
							${filterKeys} ${sortKeys}
							<li class="filter">
								<div>
									<button
										class="btn btn-${!this.isFilterActive ? 'secondary' : 'primary'}"
										@click="${this.resetFilters}">
										Reset
									</button>
								</div>
							</li>
							<li class="filter">
								<div>
									<button class="btn btn-primary" @click="${this.applyFilters}">Apply</button>
								</div>
							</li>
						</ul>
					</div>
				</section>
			`;
		}

		_renderPagination(movies) {
			const moviesList =
				this.isSearchActive && this.kodiSearchResults.length > 0 ? this.kodiSearchResults : movies;
			const movieArray = this.filteredMovies.length > 0 ? this.filteredMovies : moviesList;
			const totalPages = Math.ceil(movieArray.length / this.itemsPerPage);
			const totalItems = movieArray.length;

			const handlePrevPage = () => {
				if (this.currentPage > 1) {
					this._changePage(this.currentPage - 1);
				}
			};

			const handleNextPage = () => {
				if (this.currentPage < totalPages) {
					this._changePage(this.currentPage + 1);
				}
			};

			const handleLastPage = () => {
				this._changePage(totalPages);
			};

			const handleFirstPage = () => {
				this._changePage(1);
			};

			// Calculate the range of page numbers to display
			let startPage = Math.max(1, this.currentPage - 1);
			let endPage = Math.min(startPage + 3, totalPages);

			// Adjust startPage if the range would extend beyond totalPages
			startPage = Math.max(1, Math.min(this.currentPage, totalPages - 3));

			const pageButtons = Array.from(
				{ length: endPage - startPage + 1 },
				(_, i) => startPage + i,
			).map(
				(page) => x`
					<span
						class="tab ${this.currentPage === page ? 'active' : ''} page"
						@click="${() => this._changePage(page)}">
						${page}
					</span>
				`,
			);

			// Check if there are more than 5 pages remaining after the current end page
			const hasGap = totalPages - endPage > 1;

			if (hasGap) {
				pageButtons.push(x` <span class="tab page">...</span> `);
			}

			// Add the last page button
			if (hasGap || endPage < totalPages) {
				pageButtons.push(x`
					<span class="tab page" @click="${handleLastPage}"> ${totalPages} </span>
				`);
			}

			return x`
				<div class="tabs">
					<!-- Page buttons -->
					<span class="tab page"> ${totalItems} items</span>

					<div>
						${this.currentPage > 1
							? x`<span class="tab page" @click="${handleFirstPage}">First</span>`
							: T}
						<span class="tab page" ?disabled="${this.currentPage === 1}" @click="${handlePrevPage}">
							<i>${ICON.ARROW_LEFT_FILLED}</i>
						</span>
						${pageButtons}
						<span
							class="tab page"
							?disabled="${this.currentPage === totalPages}"
							@click="${handleNextPage}">
							<i>${ICON.ARROW_RIGHT_FILLED}</i>
						</span>
					</div>
				</div>
			`;
		}

		initializeFilters() {
			this.filters = {
				genre: this.getUniqueItems('genre'),
				year: this.getUniqueItems('year'),
				mpaa: this.getUniqueItems('mpaa'), // Assuming each movie has a mpaa rating
				country: this.getUniqueItems('country'), // Assuming each movie has a country
			};
			this.sortOptions = {
				sort: ['Title A-Z', 'Title Z-A', 'New Added', 'Date Added', 'Rating', 'Random'],
			};
		}

		getUniqueItems(attribute) {
			const items = new Set();
			this.kodiAllMovies.forEach((movie) => {
				const value = movie[attribute];
				if (Array.isArray(value)) {
					value.forEach((item) => items.add(item));
				} else if (value) {
					items.add(value);
				}
			});
			return Array.from(items).sort(); // Sort might need to be customized based on the attribute
		}

		getFilterButtonName(filterType) {
			const selectedItems = this.filters[filterType].filter((item) =>
				this.isActive(filterType, item),
			);
			return selectedItems.length > 0 ? `${filterType} (${selectedItems.length})` : filterType;
		}

		handleSortMovies(event, sortType, item) {
			// Set the sort option based on the selected item
			this.sortOption = item;
			this.isFilterActive = true;
			this.filterMovies();
		}

		handleFilterChange(event, filterType, item) {
			const activeFilterKey = `active${filterType.charAt(0).toUpperCase() + filterType.slice(1)}`;

			if (event.target.checked) {
				if (!this[activeFilterKey].includes(item)) {
					this[activeFilterKey].push(item);
				}
			} else {
				this[activeFilterKey] = this[activeFilterKey].filter((i) => i !== item);
			}
			this.filterMovies(); // Update the view to reflect the new active filters
			this.requestUpdate(); // Update the view to reflect the new active filters
		}

		isActive(filterType, item) {
			const activeFilterKey = `active${filterType.charAt(0).toUpperCase() + filterType.slice(1)}`;
			return this[activeFilterKey] && this[activeFilterKey].includes(item);
		}

		resetFilters() {
			Object.keys(this.filters).forEach((filterType) => {
				const activeFilterKey = `active${filterType.charAt(0).toUpperCase() + filterType.slice(1)}`;
				this[activeFilterKey] = [];
			});
			this.isFilterActive = false;
			this.filterMovies(); // Reset filters
			this.resetSearch(); // Reset search input
			this.requestUpdate(); // Update the view to reflect the new active filters
		}

		filterMovies() {
			this.filteredMovies = this.kodiAllMovies.filter((movie) => {
				return Object.keys(this.filters).every((filterType) => {
					const activeFilterKey = `active${filterType.charAt(0).toUpperCase() + filterType.slice(1)}`;

					// Skip if no filter is set for this type
					if (!this[activeFilterKey] || this[activeFilterKey].length === 0) {
						return true;
					}

					// Get the attribute from the movie based on the filter type
					const movieAttribute = movie[filterType];

					// Check for multiple attributes like genres or tags
					if (Array.isArray(movieAttribute)) {
						return movieAttribute.some((attr) => this[activeFilterKey].includes(attr));
					}

					// Check for single attributes like year or country
					return this[activeFilterKey].includes(movieAttribute);
				});
			});
			// Apply sorting
			if (this.sortOption) {
				switch (this.sortOption) {
					case 'Title A-Z':
						this.filteredMovies.sort((a, b) => a.title.localeCompare(b.title));
						break;
					case 'Title Z-A':
						this.filteredMovies.sort((a, b) => b.title.localeCompare(a.title));
						break;

					case 'New Added':
						this.filteredMovies.sort((a, b) => new Date(b.dateadded) - new Date(a.dateadded));
						break;

					case 'Date Added':
						this.filteredMovies.sort((a, b) => new Date(a.dateadded) - new Date(b.dateadded));
						break;
					case 'Rating':
						this.filteredMovies.sort((a, b) => b.rating - a.rating);
						break;
					case 'Random':
						this.filteredMovies.sort(() => Math.random() - 0.5);
						break;
				}
			}

			this.requestUpdate(); // Update the view to reflect new filters
		}

		applyFilters() {
			this.filterMovies();
			this.isFilterActive = true;
			this.requestUpdate(); // Ensure UI updates to reflect the filtered data
		}

		removeSelectedFilter(filterType, item) {
			// Remove the selected filter item from the active filters list
			const activeFilterKey = `active${filterType.charAt(0).toUpperCase() + filterType.slice(1)}`;
			this[activeFilterKey] = this[activeFilterKey].filter((i) => i !== item);

			this.filterMovies(); // Update the view to reflect the new active filters
		}

		setupDropdownListeners() {
			const dropdownToggles = this.shadowRoot.querySelectorAll('.dropdown-toggle');

			dropdownToggles.forEach((toggle) => {
				toggle.addEventListener('click', (event) => {
					// Prevent the document-wide listener from firing when clicking the toggle
					event.stopPropagation();
					const menu = toggle.nextElementSibling; // Assuming menu follows toggle
					const isOpen = menu.classList.contains('show') && toggle.classList.contains('active');
					// Close all open dropdowns
					this.closeAllDropdowns();

					// Toggle this dropdown if it was not already open
					if (!isOpen) {
						menu.classList.add('show');
						toggle.classList.add('active');
					}
				});
			});

			// Attach event listeners to dropdown menus to stop propagation
			const dropdownMenus = this.shadowRoot.querySelectorAll('.dropdown-menu');
			dropdownMenus.forEach((menu) => {
				menu.addEventListener('click', (event) => {
					event.stopPropagation(); // Stop click events from propagating to the document
				});
			});

			// Document-wide listener to close all dropdowns if clicking outside
			document.addEventListener('click', () => {
				this.closeAllDropdowns();
			});
		}

		closeAllDropdowns() {
			const allDropdownMenus = this.shadowRoot.querySelectorAll('.dropdown-menu');
			allDropdownMenus.forEach((menu) => menu.classList.remove('show'));
			const allDropdownToggles = this.shadowRoot.querySelectorAll('.dropdown-toggle');
			allDropdownToggles.forEach((toggle) => toggle.classList.remove('active'));
		}

		_changePage(page) {
			const headerHeight = parseInt(getCssVariableValue('--header-height'));
			const tabContentEl = this.shadowRoot.querySelector('.tab-content');
			if (tabContentEl) {
				// Get the bounding rectangle of the tab content element
				const rect = tabContentEl.getBoundingClientRect();
				// Scroll to the top of the tab content element with an offset of 56 pixels
				window.scrollTo({
					top: rect.top + window.scrollY - headerHeight,
					behavior: 'smooth',
				});
			}
			this.currentPage = page;
			this.requestUpdate();
		}

		changeBackgroundImage() {
			const kodiElement = this.shadowRoot.querySelector('.kodi');
			if (kodiElement) {
				// Check if trendingMovies array is not empty
				if (this.trendingMovies.length > 0) {
					// Select two random movies from trendingMovies array
					const randomMovies = [];
					for (let i = 0; i < 2; i++) {
						const randomIndex = Math.floor(Math.random() * this.trendingMovies.length);
						randomMovies.push(this.trendingMovies[randomIndex]);
					}

					// Get the backdrop paths of the random movies
					const backdropPaths = randomMovies.map((movie) =>
						movie.poster_url.replace('w342', 'original'),
					);

					// Construct the background image CSS value including linear gradients and backdrop paths
					const backgroundImage = `linear-gradient(to left, rgba(24, 24, 24, 0.9) 20%, rgba(24, 24, 24, 1) 50%, rgba(24, 24, 24, 0.9) 80%), url(${backdropPaths[0]}), url(${backdropPaths[1]})`;

					// Set the background image URL to the .kodi class
					kodiElement.style.backgroundImage = backgroundImage;
				}
			}
		}
	};

function styleInject(css, ref) {
  ref = {};
  ref.insertAt;

  if (!css || typeof document === 'undefined') { return; }

  var head = document.head || document.getElementsByTagName('head')[0];
  var style = document.createElement('style');
  style.type = 'text/css';

  {
    head.appendChild(style);
  }

  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    style.appendChild(document.createTextNode(css));
  }
}

var css_248z$1 = i$3`html {
	line-height: 1.15;
	-webkit-text-size-adjust: 100%;
	-webkit-tap-highlight-color: transparent;
}

.wrapper {
	transition:
		margin-right 0.5s, filter 0.5s;
}

.wrapper.offcanvas {
	filter: brightness(0.5);
}

.main-page {
	margin-top: calc(-1 * var(--header-height));
	background-color: var(--nero);
	overflow: hidden;
}

.main-kodi {
	background-color: var(--nero);
	-webkit-backdrop-filter: blur(15px);
	        backdrop-filter: blur(15px);
	padding-top: var(--header-height);
	max-width: 1800px;
	min-height: inherit;
	overflow: hidden;
	margin: auto;
}

.kodi {
	background-position:
		top left,
		bottom right;
	background-repeat: no-repeat;
	width: 100%;
	background-size: auto 100%;
}

.container {
	max-width: 1800px;
	width: 100%;
	padding-right: 15px;
	padding-left: 15px;
	margin-right: auto;
	margin-left: auto;
}

*,
::after,
::before {
	box-sizing: border-box;
}

.h1,
.h2,
.h3,
.h4,
.h5,
.h6,
h1,
h2,
h3,
h4,
h5,
h6 {
	margin-bottom: 0.5rem;
	font-weight: 500;
	line-height: 1.2;
}

.h1,
h1 {
	font-size: 2.5rem;
}

.h2,
h2 {
	font-size: 2rem;
}

.h3,
h3 {
	font-size: 1.75rem;
}

.h4,
h4 {
	font-size: 1.5rem;
}

.h5,
h5 {
	font-size: 1.25rem;
}

.h6,
h6 {
	font-size: 1rem;
}

/* -------------------------------- A BUTTONS ------------------------------- */

i {
	display: inline-block;
	font-family: bootstrap-icons !important;
	font-style: normal;
	font-weight: 400 !important;
	font-feature-settings: normal;
	font-variant: normal;
	text-transform: none;
	line-height: 1;
	vertical-align: -0.125em;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
}

a,
button {
	transition:
		border-color 0.4s, background 0.4s, color 0.4s;
	-webkit-text-decoration: none;
	text-decoration: none;
}

a.btn-primary,
button.btn-primary {
	color: var(--secondary);
	font-weight: 500;
}

a.btn-primary:active,
a.btn-primary:focus,
a.btn-primary:hover,
button.btn-primary:active,
button.btn-primary:focus,
button.btn-primary:hover {
	color: var(--secondary) !important;
	opacity: 0.9;
}

a.btn-secondary1,
button.btn-secondary1 {
	background: #292929;
}

a.btn-secondary1:hover,
button.btn-secondary1:hover {
	background: #353535;
}

.btn-group-lg > a.btn > span,
.btn-group-lg > button.btn > span,
a.btn-lg > span,
button.btn-lg > span {
	font-size: 1.2rem;
	font-family: 'bootstrap-icons';
	display: inline-block;
}

.btn:not(:disabled):not(.disabled) {
	cursor: pointer;
}

.btn-group-lg > .btn,
.btn-lg {
	padding: 0.75rem 1.5rem;
	font-size: 1.2rem;
	line-height: 1.5;
	border-radius: 0.5rem;
}

.btn {
	display: inline-block;
	font-weight: 400;
	color: #888;
	text-align: center;
	vertical-align: middle;
	-webkit-user-select: none;
	-moz-user-select: none;
	user-select: none;
	background-color: transparent;
	border: 1px solid transparent;
	background-color: transparent;
	padding: 0.5rem 1rem;
	line-height: 1.5;
	border-radius: 0.5rem;
	transition:
		color 0.15s ease-in-out, background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
}

.btn-primary {
	color: #fff;
	background-color: var(--primary);
	border-color: var(--primary);
}

.btn-primary:hover {
	color: #fff;
	background-color: var(--primary);
	opacity: 0.9;
	border-color: var(--primary);
}

.btn-primary.focus,
.btn-primary:focus {
	color: #fff;
	background-color: var(--primary);
	opacity: 0.8;
}

.btn-primary.disabled,
.btn-primary:disabled {
	color: #fff;
	background-color: var(--primary);
	border-color: var(--primary);
}

.btn-primary:not(:disabled):not(.disabled).active,
.btn-primary:not(:disabled):not(.disabled):active,
.show > .btn-primary.dropdown-toggle {
	color: #212121;
	opacity: 0.9;
}

.btn-primary:not(:disabled):not(.disabled).active:focus,
.btn-primary:not(:disabled):not(.disabled):active:focus,
.show > .btn-primary.dropdown-toggle:focus {
	box-shadow: 0 0 0 0 rgba(38, 184, 202, 0.5);
}

header {
	width: -webkit-fill-available;
	/* background: #000; */
	position: relative;
	z-index: 50;
	transition: margin-right 0.5s;
}

header.abs-head.sticky {
	position: sticky;
	top: 0;
	margin: 0 auto !important;
	-webkit-backdrop-filter: blur(10px) brightness(0.5);
	        backdrop-filter: blur(10px) brightness(0.5);
	box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2),
		0px 4px 5px 0px rgba(0, 0, 0, 0.14),
		0px 1px 10px 0px rgba(0, 0, 0, 0.12);
	box-shadow: var(
		--mdc-top-app-bar-fixed-box-shadow,
		0px 2px 4px -1px rgba(0, 0, 0, 0.2),
		0px 4px 5px 0px rgba(0, 0, 0, 0.14),
		0px 1px 10px 0px rgba(0, 0, 0, 0.12)
	);
	transition:
		box-shadow 0.4s ease-in-out 0.1s, -webkit-backdrop-filter 0.4s ease-in-out;
	transition:
		backdrop-filter 0.4s ease-in-out, box-shadow 0.4s ease-in-out 0.1s;
	transition:
		backdrop-filter 0.4s ease-in-out, box-shadow 0.4s ease-in-out 0.1s, -webkit-backdrop-filter 0.4s ease-in-out;
}

header.abs-head {
	position: absolute;
	max-width: 100%;
	display: flex;
}

header .wrapper {
	display: flex;
	width: 100%;
	align-items: center !important;
	justify-content: space-between !important;
	padding: 0.5rem 0;
}

header .wrapper .start {
	position: relative;
	min-width: 50%;
	display: flex;
	align-items: center;
	padding: 5px 0;
}

header .wrapper .step {
	min-width: 10%;
	display: flex;
	align-items: center;
	gap: 1rem;
}

header .wrapper .start .menu {
	position: relative;
	display: inline-block;
}

header .wrapper .start .menu > .menu-toggle {
	display: inline-block;
	cursor: pointer;
}

.bar1,
.bar2,
.bar3 {
	width: 28px;
	height: 4px;
	background-color: rgba(205,205,205,0.31373);
	margin: 5px 0;
	transition: 0.4s;
	border-radius: 2px;
}

header .wrapper .start .menu > .menu-toggle.show > .bar1 {
	transform: translate(0, 9px) rotate(-45deg);
}

header .wrapper .start .menu > .menu-toggle.show > .bar2 {
	opacity: 0;
}

header .wrapper .start .menu > .menu-toggle.show > .bar3 {
	transform: translate(0, -9px) rotate(45deg);
}

header .wrapper .start .menu > .menu-toggle:hover .bar1,
header .wrapper .start .menu > .menu-toggle:hover .bar2,
header .wrapper .start .menu > .menu-toggle:hover .bar3,
header .wrapper .start .menu > .menu-toggle.show .bar1,
header .wrapper .start .menu > .menu-toggle.show .bar2,
header .wrapper .start .menu > .menu-toggle.show .bar3 {
	background-color: var(--primary);
}

header .wrapper .start .menu .menu-list {
	top: 100%;
	position: absolute;
	z-index: 1000;
	display: block;
	overflow: hidden;
	max-height: 0px;
	transition: max-height 0.4s ease-in-out;
}

header .wrapper .start .menu .menu-list.active {
	max-height: 200px;
}

header .wrapper .start .menu .menu-list > ul {
	margin: 0.7rem auto;
	padding: 0;
	list-style: none;
	background: var(--primary);
	border-radius: 0.5rem;
	padding: 0.5rem 0.7rem;
	position: relative;
}

header .wrapper .start .menu .menu-list > ul > li > a {
	cursor: pointer;
}

header .wrapper .start .menu .menu-list > ul > li > a {
	display: inline-block;
	width: 100%;
	padding: 0.5rem 5rem 0.5rem 0.5rem;
	margin: 0.2rem 0;
	font-weight: 600;
	font-size: 1.3rem;
	color: var(--secondary);
	border-radius: 0.5rem;
	text-transform: uppercase;
}

header .wrapper .start .menu .menu-list > ul > li > a:before {
	content: '';
	background: var(--secondary);
	margin-bottom: 5px;
	margin-right: 4px;
}

header .wrapper .start .menu .menu-list > ul > li > a:hover {
	background: var(--secondary);
	color: var(--primary);
}

.search-box .search-toggler {
	display: none;
}

button:not(:disabled) {
	cursor: pointer;
}

header.abs-head .wrapper .step .search-box .search-wrap {
	background: rgba(0, 0, 0, 0.5);
	transition:
		background 0.4s, box-shadow 0.4s;
}

header.abs-head .wrapper .step .search-box .search-wrap {
	background: rgba(0, 0, 0, 0.5);
	transition:
		background 0.4s, box-shadow 0.4s;
}

header.abs-head .wrapper .step .search-box .search-wrap:focus-within,
header.abs-head .wrapper .step .search-box .search-wrap:hover {
	background: rgba(0, 0, 0, 0.8);
	box-shadow: 0 0 10px 5px rgba(0, 0, 0, 0.3);
}

i.search-icon,
i.reset-icon {
	cursor: pointer;
	transition: all 0.3s ease;
	display: block;
	flex-shrink: 0;
	color: var(--primary);
}

i.search-icon:hover,
i.reset-icon:hover {
	color: var(--white);
}

.search-box .search-wrap {
	position: relative;
	background: #292929;
	border-radius: 1rem;
	flex-grow: 1;
}

.search-box .search-wrap form {
	padding: 5px 8px;
	display: flex;
	align-items: center !important;
	display: flex !important;
}

.search-box .search-wrap form input {
	text-align: center;
	height: 30px;
	margin-right: 2rem;
	flex-grow: 1;
}

.search-box .search-wrap form input:focus::-moz-placeholder {
	color: transparent;
}

.search-box .search-wrap form input:focus::placeholder {
	color: transparent;
}

.search-box .search-wrap form button,
.search-box .search-wrap form input {
	background: 0 0;
	color: var(--primary);
	border: none;
	outline: 0;
}

button,
input {
	overflow: visible;
}

.sr-only {
	position: absolute;
	width: 1px;
	height: 1px;
	padding: 0;
	margin: -1px;
	overflow: hidden;
	clip: rect(0, 0, 0, 0);
	white-space: nowrap;
	border: 0;
}

section .head {
	display: flex;
	flex-wrap: wrap;
	justify-content: space-between;
	align-items: center;
	margin-bottom: 2rem;
}

section .head .start,
section .head .end {
	display: flex;
	align-items: center;
}

section .head .start .title {
	margin: 0;
	margin: initial;
	text-transform: uppercase;
	font-weight: 600;
	font-size: 1.5rem;
	color: #fff;
	margin-right: 1rem;
}

section .head .start .title i {
	color: var(--primary);
	font-size: 1.7rem;
	display: inline-block;
	font-family: bootstrap-icons !important;
	font-style: normal;
	font-weight: 400 !important;
	font-feature-settings: normal;
	font-variant: normal;
	text-transform: none;
	line-height: 1;
	vertical-align: -0.125em;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
}

.btn-outline-body-color,
section .head .end .btn-outline-body-color {
	border: 1px solid #888;
	border-radius: 1rem;
	font-size: 13px;
	background-color: var(--secondary);
	padding: 0.2rem 0.5rem;
}

section .head .end a i {
	display: inline-block;
	font-family: bootstrap-icons !important;
	font-style: normal;
	font-weight: 400 !important;
	font-feature-settings: normal;
	font-variant: normal;
	text-transform: none;
	line-height: 1;
	vertical-align: -0.125em;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
}

.btn-outline-body-color:hover,
.btn-outline-body-color.active,
section .head .end .btn-outline-body-color:hover {
	color: var(--primary);
	border: 1px solid var(--primary);
	background: #000;
}

#toast {
	visibility: hidden;
	max-width: -moz-fit-content;
	max-width: fit-content;
	height: 51px;
	margin-left: -125px;
	margin: auto;
	background-color: rgba(0, 0, 0, 0.5);
	text-align: center;
	border-radius: 10px;
	position: fixed;
	z-index: 2000;
	left: 0;
	right: 0;
	top: 80px;
	font-size: 1rem;
}

#toast #img {
	width: 50px;
	height: 50px;
	float: left;
	box-sizing: border-box;
	background-color: var(--secondary);
	display: flex;
	justify-content: center;
	align-items: center;
	border-radius: inherit;
}

#toast #desc {
	font-size: large;
	font-weight: 400;
	color: var(--light);
	padding: 1rem;
	overflow: hidden;
	white-space: nowrap;
	text-transform: uppercase;
}

#toast.show {
	visibility: visible;
	animation:
		fadein 0.5s,
		expand 0.5s 0.5s,
		stay 3s 1s,
		shrink 0.5s 4s,
		fadeout 0.5s 4.5s;
}

@keyframes fadein {
	from {
		top: 0;
		opacity: 0;
	}
	to {
		top: 80px;
		opacity: 1;
	}
}

@keyframes expand {
	from {
		min-width: 50px;
	}
	to {
		min-width: 350px;
	}
}

@keyframes stay {
	from {
		min-width: 350px;
	}
	to {
		min-width: 350px;
	}
}

@keyframes shrink {
	from {
		min-width: 350px;
	}
	to {
		min-width: 50px;
	}
}

@keyframes fadeout {
	from {
		top: 80px;
		opacity: 1;
	}
	to {
		top: 0px;
		opacity: 0;
	}
}

/* ---------------------------- OFFCANVAS SIDEBAR --------------------------- */

.sidenav {
	height: 100%;
	width: 0px;
	position: fixed;
	z-index: 1;
	top: 0;
	right: 0;
	background-color: #111;
	transition: 0.5s;
	padding-top: 60px;
	overflow: auto;
}

.sidenav .offcanvas-close:hover {
	color: var(--light);
}

.sidenav .offcanvas-close {
	position: absolute;
	top: 1rem;
	right: 1rem;
	font-size: 36px;
	color: var(--primary);
	cursor: pointer;
}

.player-offcanvas {
	padding: 1rem;
}

.offcanvas-toggler {
	color: var(--primary);
	display: flex;
	background-color: var(--nero);
	border-radius: 50%;
	padding: 0.3rem;
}

.offcanvas-toggler:hover {
		color: var(--white);
	}

/* #Progress
================================================== */

.progress-wrap {
	position: fixed;
	right: 1rem;
	bottom: 1rem;
	height: 46px;
	width: 46px;
	cursor: pointer;
	display: block;
	border-radius: 50px;
	box-shadow: inset 0 0 0 2px rgba(255, 255, 255, 0.2);
	z-index: 10000;
	opacity: 0;
	visibility: hidden;
	transform: translateY(15px);
	transition: all 200ms linear;
}

.progress-wrap.active-progress {
	opacity: 1;
	visibility: visible;
	transform: translateY(0);
}

.progress-wrap::after {
	position: absolute;
	font-family: bootstrap-icons;
	content: '\\f145';
	text-align: center;
	line-height: 46px;
	font-size: 24px;
	color: var(--grey);
	left: 0;
	top: 0;
	height: 46px;
	width: 46px;
	cursor: pointer;
	display: block;
	z-index: 1;
	transition: all 200ms linear;
}

.progress-wrap:hover::after {
	opacity: 0;
}

.progress-wrap::before {
	position: absolute;
	font-family: bootstrap-icons;
	content: '\\f145';
	text-align: center;
	line-height: 46px;
	font-size: 24px;
	opacity: 1;
	background: var(--primary);
	-webkit-background-clip: text;
	left: 0;
	top: 0;
	height: 46px;
	width: 46px;
	cursor: pointer;
	display: block;
	z-index: 2;
	transition: all 200ms linear;
}

.progress-wrap:hover::before {
	opacity: 1;
	-webkit-text-fill-color: transparent;
}

.progress-wrap svg path {
	fill: none;
}

.progress-wrap svg.progress-circle path {
	stroke: var(--primary);
	stroke-width: 4;
	box-sizing: border-box;
	transition: all 200ms linear;
}

/* ----------------------------- Movies Dialogs ----------------------------- */

dialog {
	position: fixed;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);
	max-width: 1300px;
	border: none;
	padding: 0;
	overflow-x: clip;
	border-radius: 0.5rem;
	outline: none !important;
}

dialog::backdrop {
		-webkit-backdrop-filter: blur(20px);
		        backdrop-filter: blur(20px);
	}

dialog .container {
	padding: 0 !important;
	outline: none !important;
	animation: dialog-animation 1s ease-in-out;
	position: relative;
}

dialog .container .buttons {
		position: absolute;
		z-index: 20;
		right: 0.75rem;
		top: 0.75rem;
	}

dialog .container .buttons button,
dialog button {
	outline: none !important;
	-webkit-tap-highlight-color: rgba(0, 0, 0, 0) !important;
	-webkit-touch-callout: none;
	-webkit-user-select: none;
	-moz-user-select: none;
	     user-select: none;
	transition-property: opacity;
	transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
	transition-duration: 150ms;
	opacity: 0.8;
	border-radius: 9999px;
	cursor: pointer;
	border: none;
}

button.close {
	width: 3rem;
	height: 3rem;
	background-color: rgb(21, 21, 21);
}

dialog button:hover {
	opacity: 1;
}

dialog .container .header-wrapper {
	font-size: 16px;
	height: 30rem;
}

dialog .container .header-wrapper .content {
		display: flex;
		width: 100%;
		height: 100%;
		align-items: flex-end;
		position: relative;
	}

dialog .container .header-wrapper .content .play {
			font-size: 1.125rem;
			line-height: 1.75rem;
			padding: 0.375rem 1.75rem;
			font-weight: 700;
			background-color: rgb(229, 229, 229);
			border-radius: 0.25rem;
			align-items: center;
			height: 2.5rem;
			display: flex;
			color: rgb(21, 21, 21);
		}

dialog .container .header-wrapper .content .play i {
				font-size: large;
				margin-right: 0.5em;
			}

dialog .container .header-wrapper .content .background {
			border-top-left-radius: 0.5rem;
			border-top-right-radius: 0.5rem;
			opacity: 0.2;
			background-color: rgb(0, 0, 0);
			width: 100%;
			height: 100%;
			z-index: 10;
			position: absolute;
		}

dialog .container .header-wrapper .content img.backdrop {
			display: block;
			position: absolute;
			-o-object-fit: cover;
			   object-fit: cover;
			opacity: 1;
			z-index: 0;
			height: 30rem;
			max-width: 100%;
			width: 100%;
		}

dialog .container .header-wrapper .content .logo {
			display: block;
			position: absolute;
			right: 3rem;
			bottom: 3rem;
			-o-object-fit: cover;
			   object-fit: cover;
			opacity: 1;
			z-index: 0;
			height: auto;
			width: auto;
		}

dialog .container .header-wrapper .content .title {
			background-image: linear-gradient(to bottom, transparent, #151515);
			overflow: hidden;
			width: 100%;
			position: absolute;
			z-index: 10;
			padding: 0 2rem 2rem;
		}

@keyframes dialog-animation {
	0% {
		transform: translateY(-100px);
		opacity: 0;
	}
	100% {
		transform: translateY(0);
		opacity: 1;
	}
}

p.header {
	text-shadow:
		3px 3px 6px rgba(0, 0, 0, 0.26),
		0 0 5px rgba(15, 3, 86, 0.22);
	font-size: 1.25rem;
	line-height: 2.5rem;
	margin: 0;
	padding-bottom: 1rem;
	font-weight: 700;
}

p.header-title {
	font-size: 2.25rem !important;
	text-shadow:
		3px 3px 6px rgba(0, 0, 0, 0.26),
		0 0 5px rgba(15, 3, 86, 0.22);
	font-size: 1.25rem;
	line-height: 2.5rem;
	margin: 0;
	padding-bottom: 1rem;
	font-weight: 700;
}

.header-wrapper p:nth-child(2) {
	text-shadow:
		3px 3px 6px rgba(0, 0, 0, 0.26),
		0 0 5px rgba(15, 3, 86, 0.22);
	font-weight: 600;
	font-size: 1.125rem;
	line-height: 1.75rem;
	margin: 0;
	padding-bottom: 1rem;
}

p.overview {
	text-align: justify;
	font-size: 1.125rem;
	line-height: 1.75rem;
	margin-top: 1rem;
	margin-bottom: 1rem;
	margin: 0;
	color: rgb(255, 255, 255);
}

dialog .container .body {
	padding: 1rem;
}

dialog .container .body .rating {
		padding-top: 1rem;
		padding-bottom: 1rem;
		align-items: flex-start;
		display: flex;
		justify-content: space-between;
	}

dialog .container .body .rating label {
			line-height: 1.75rem;
			font-weight: 600;
			color: rgb(21, 128, 61);
			outline: none !important;
			outline-style: none !important;
			-webkit-tap-highlight-color: rgba(0, 0, 0, 0) !important;
			-webkit-touch-callout: none;
			-webkit-user-select: none;
			-moz-user-select: none;
			     user-select: none;
		}

dialog .container .body .rating .meta {
			text-align: right;
		}

dialog .container .body .rating .meta label {
				color: rgb(255, 255, 255);
				line-height: 1.75rem;
				margin-left: 2rem;
			}

dialog .container .body .details-info {
		margin-top: 0.5rem;
		margin-bottom: 1rem;
	}

dialog .container .body .details-info .trailer-wrapper .trailer {
				border-radius: 0.5rem;
				position: relative;
				padding-bottom: calc(9 / 16 * 100%);
			}

dialog .container .body .details-info .trailer-wrapper iframe {
				position: absolute;
				width: 100%;
				height: 100%;
				top: 0;
				left: 0;
				bottom: 0;
				right: 0;
				border-radius: 0.5rem;
			}

dialog .container .body .details-info .overview-info {
			padding: 1rem;
		}

dialog .container .body .credits_scroller {
		position: relative;
		width: 100%;
		height: 100%;
		top: 0;
		left: 0;
		overflow: hidden;
	}

dialog .container .body .scroller::after {
		content: '';
		width: 60px;
		height: 100%;
		position: absolute;
		top: 0;
		right: -10px;
		background-image: linear-gradient(to right, transparent 0, rgb(18, 18, 18) 100%);
		transition: opacity 0.5s ease-in-out;
		opacity: 0;
	}

dialog .container .body .scroller::before {
		content: '';
		width: 60px;
		height: 100%;
		position: absolute;
		transition: opacity 0.5s ease-in-out;
		top: 0;
		left: -10px;
		background-image: linear-gradient(to left, transparent 0, rgb(18, 18, 18) 100%);
		opacity: 0;
	}

/* Transition opacity when .scroller-wrap class is added */

dialog .container .body .scroller.is_fading::after {
		opacity: 1;
	}

dialog .container .body .scroller.is_hidden::before {
		opacity: 1;
	}

dialog .container .body .credits-info {
		position: relative;
		margin: 0 auto;
		display: flex;
		overflow: auto;
		align-items: center;
		width: 100%;
		height: 100%;
	}

dialog .container .body .cast {
		width: 10rem;
	}

dialog .container .body .cast button.cast-button {
			width: inherit;
			padding: 0.5rem;
			border-width: 0px;
			border-radius: 0.75rem;
			-webkit-appearance: button;
			-moz-appearance: button;
			     appearance: button;
			background-color: transparent;
			background-image: none;
		}

dialog .container .body .cast .cast-button .cast-wrapper {
			border-radius: 0.75rem;
			-webkit-user-select: none;
			   -moz-user-select: none;
			        user-select: none;
		}

dialog .container .body .cast .cast-button .cast-wrapper .cast-box {
				opacity: 0.9;
				border-radius: 0.75rem;
				width: 100%;
				position: relative;
			}

dialog .container .body .cast .cast-button .cast-wrapper .cast-box .cast-image img {
					border-radius: 0.75rem;
					width: 100%;
					height: auto;
					display: block;
				}

dialog .container .body .cast .cast-button .cast-wrapper .cast-box .cast-name {
					scrollbar-width: none;
					text-shadow:
						1px 1px 3px rgba(0, 0, 0, 0.29),
						2px 4px 7px rgba(73, 64, 125, 0.35);
					transition-duration: 300ms;
					transition-property: opacity;
					transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
					opacity: 0;
					color: rgb(255, 255, 255);
					font-weight: 600;
					vertical-align: bottom;
					text-align: center;
					padding: 0.25rem 0.75rem;
					background-color: rgba(21, 21, 21, 0.7);
					border-radius: 0.75rem;
					justify-content: space-evenly;
					align-items: center;
					flex-direction: column;
					width: 100%;
					height: 100%;
					display: flex;
					z-index: 0;
					position: absolute;
					top: 0;
				}

dialog .container .body .cast .cast-button .cast-wrapper .cast-box .cast-name:hover {
					opacity: 1;
				}

dialog .container .body ::-webkit-scrollbar {
		width: 0.5rem;
		height: 0.5rem;
	}

dialog .container .body ::-webkit-scrollbar-track {
		background: rgba(241,241,241,0);
	}

dialog .container .body ::-webkit-scrollbar-track:horizontal {
		margin: 1.5rem;
	}

dialog .container .body ::-webkit-scrollbar-thumb {
		background: var(--gray-dark);
		border-radius: 100px;
		cursor: grab;
	}

dialog .container .body .credits-info::-webkit-scrollbar-track {
		margin: 0.5rem;
	}

/* -------------------- HEADER FEATURED TRENDING SECTIONS ------------------- */

#featured {
	height: 700px;
	position: relative;
	overflow: hidden;
}

#featured .swiper-slide {
	position: relative;
	background-size: cover;
	background-position: 100% 30%;
}

#featured .swiper-slide > div {
	height: 100%;
	display: flex;
	align-items: flex-end;
}

#featured .swiper-slide:before {
	content: ' ';
	width: 100%;
	height: 100%;
	left: 0px;
	z-index: 1;
	top: 0px;
	position: absolute;
	background: linear-gradient(0deg, rgba(0, 0, 0, 0) 90%, rgba(0, 0, 0, 0.5) 100%),
		linear-gradient(90deg, var(--nero) 0%, rgba(0, 0, 0, 0) 50%, var(--nero) 100%);
}

#featured .swiper-slide:after {
	display: block;
	position: absolute;
	content: '';
	bottom: 0;
	left: 0;
	right: 0;
	box-shadow: 1px 0 100px 150px var(--nero);
}

#featured .swiper-slide .slide-wrapper {
	z-index: 5;
	margin-bottom: 13rem;
}

#featured .swiper-slide .slide-wrapper .actions,
#featured .swiper-slide .slide-wrapper .info {
	display: flex;
	justify-content: space-between;
	align-items: center;
}

#featured .swiper-slide .slide-wrapper .actions .end,
#featured .swiper-slide .slide-wrapper .actions .start,
#featured .swiper-slide .slide-wrapper .info .end,
#featured .swiper-slide .slide-wrapper .info .start {
	align-items: center;
	margin-top: 2rem;
}

#featured .swiper-slide .slide-wrapper .info .start .name {
	font-size: 2.5em;
	font-weight: 600;
	display: -webkit-box;
	-webkit-line-clamp: 2;
	-webkit-box-orient: vertical;
	line-height: 1em;
	max-height: 2em;
	overflow: hidden;
	margin-bottom: 0.2em;
	line-height: 1.1em;
	max-height: 2.2em;
	color: #e9e9e9;
	text-transform: uppercase;
	text-shadow: 0 1px 2px #000;
}

#featured .swiper-slide .slide-wrapper .info .start .meta {
	color: #cdcdcd;
	font-size: 16px;
}

#featured .swiper-slide .slide-wrapper .info .start .meta .quality {
	background: var(--primary);
	color: var(--nero);
	border: var(--primary);
}

#featured .swiper-slide .slide-wrapper .info .start .meta .quality,
#featured .swiper-slide .slide-wrapper .info .start .meta .rating {
	border-radius: 2rem;
	/* border: 1px solid #cdcdcd; */
	line-height: 0.9em;
	font-weight: 700;
	display: inline-block;
	padding: 4px 7px;
	font-size: 0.8em;
}

#featured .swiper-slide .slide-wrapper .info .start .meta a,
#featured .swiper-slide .slide-wrapper .info .start .meta span:not(.quality) {
	text-shadow: 0 1px 2px #000;
}

#featured .swiper-slide .slide-wrapper .info .start .meta a:not(:last-child),
#featured .swiper-slide .slide-wrapper .info .start .meta span:not(:last-child) {
	margin-right: 0.7rem;
}

#featured .swiper-slide .slide-wrapper .info .desc {
	text-shadow: 0 1px 2px #000;
	line-height: 1.7rem;
	color: var(--light);
	margin-top: 1rem;
	max-width: 800px;
	overflow: hidden;
	display: -webkit-box;
	-webkit-box-orient: vertical;
	-webkit-line-clamp: 3;
	text-overflow: ellipsis;
	white-space: normal;
}

#featured .swiper-slide .slide-wrapper .actions .start .watchnow {
	border-radius: 2rem;
	margin-right: 2rem;
}

#featured .swiper-slide .slide-wrapper .actions .start .add2list {
	background: 0 0;
	border: 0;
	color: #cdcdcd;
	font-size: 1.2rem;
	font-weight: 600;
	transition: all 0.4s;
}

#featured .swiper-slide .slide-wrapper .actions .start .add2list {
	background: 0 0;
	border: 0;
	color: #cdcdcd;
	font-size: 1.2rem;
	font-weight: 600;
	transition: all 0.4s;
}

#featured .swiper-slide .slide-wrapper .actions .start .add2list span {
	font-size: 2rem;
	font-family: 'bootstrap-icons';
	display: inline-block;
}

#featured .swiper-slide .slide-wrapper .actions .start .add2list:hover {
	color: var(--primary);
}

#featured .swiper-slide .slide-wrapper .actions .start .dropdown-menu {
	width: 180px;
}

#featured .swiper-slide .slide-wrapper .actions .start .dropdown-menu .dropdown-item {
	overflow: hidden;
	text-overflow: ellipsis;
	white-space: nowrap;
}

#featured > .container {
	position: relative;
}

#featured > .container .slide-navi {
	position: absolute;
	z-index: 4;
	right: 15px;
	bottom: 2rem;
}

#featured > .container .slide-navi .swiper-button-next,
#featured > .container .slide-navi .swiper-button-prev,
#featured > .container .slide-navi .swiper-pagination {
	position: static;
	position: initial;
	margin-top: 0;
	margin-top: initial;
	display: inline;
	display: initial;
	color: rgba(236, 236, 236, 0.4);
}

#featured > .container .slide-navi .swiper-pagination {
	font-size: 1.2rem;
	margin: 1rem;
}

#featured > .container .slide-navi .swiper-button-next:after {
	content: '\\f232';
}

#featured > .container .slide-navi .swiper-button-prev:after {
	content: '\\f22e';
}

#featured > .container .slide-navi .swiper-button-next:after,
#featured > .container .slide-navi .swiper-button-prev:after {
	font-size: 2.2rem;
	font-family: bootstrap-icons;
}

#featured > .container .slide-navi .swiper-button-next:hover,
#featured > .container .slide-navi .swiper-button-prev:hover {
	opacity: 1;
	color: var(--primary);
}

#featured > .container .swiper-scrollbar {
	margin-top: -11rem;
	position: static;
	position: initial;
	z-index: 4;
	height: 1px;
	position: relative;
	background: rgba(255, 255, 255, 0.1);
	width: 100%;
	left: auto;
	left: initial;
}

#featured > .container .swiper-scrollbar .swiper-scrollbar-drag {
	background: rgba(255, 255, 255, 0.3);
	z-index: 5;
}

.main-kodi > #trending {
	margin-top: 1rem !important;
}

#trending {
	margin-top: -11rem;
	z-index: 2;
	position: relative;
}

#trending.watch-page {
	margin-top: 1rem;
}

#trending .head {
	text-shadow: 0 1px 2px #000;
	color: #cecece;
	padding-top: 1.5rem !important;
	margin-bottom: 1.5rem !important;
	width: 100% !important;
	justify-content: center !important;
	display: flex !important;
}

#trending .body {
	display: flex;
}

#trending .body .swiper {
	overflow: hidden;
	flex: 1;
}

#trending .body .swiper .swiper-wrapper {
	width: auto;
	width: initial;
	margin: 0 -0.8rem;
}

#trending .body .swiper .swiper-wrapper .swiper-slide {
	width: 25%;
	padding: 0 0.8rem;
}

#trending .body .swiper .swiper-wrapper .swiper-slide > a {
	padding: 1.3rem 2rem;
	border-radius: 1rem;
	background-color: var(--secondary);
	background-repeat: no-repeat;
	background-size: cover;
	background-position: center center;
	height: 15rem;
	position: relative;
	display: flex;
	justify-content: flex-end;
	flex-direction: column;
	border: 1px solid transparent;
	box-shadow: inset 0 0 80px transparent;
	border: 1px solid var(--secondary);
	transition:
		box-shadow 0.4s, border-color 0.4s;
}

#trending .body .swiper .swiper-wrapper .swiper-slide > a.poster-bg {
	background-position: center 15%;
}

#trending .body .swiper .swiper-wrapper .swiper-slide a > span {
	position: absolute;
	top: 10px;
	right: 18px;
	font-family: 'bootstrap-icons';
	font-size: 1.7rem;
	color: #fff;
	opacity: 0.1;
	transition: opacity 0.4s;
}

#trending .body .swiper .swiper-wrapper .swiper-slide a:hover > span {
	opacity: 0.9;
}

#trending .body .swiper .swiper-wrapper .swiper-slide > a:after {
	content: '';
	bottom: 0;
	left: 0;
	right: 0;
	position: absolute;
	box-shadow: 1px 0 150px 90px var(--nero);
}

#trending .body .swiper .swiper-wrapper .swiper-slide > a:hover {
	box-shadow: inset 0 0 80px var(--primary);
	border: 1px solid var(--primary);
}

#trending .body .swiper .swiper-wrapper .swiper-slide > a:hover:before {
	opacity: 0.9;
}

#trending .body .swiper .swiper-wrapper .swiper-slide > a .title {
	/* font-size: 1.4rem; */
	font-weight: 600;
	text-transform: uppercase;
	color: #fff;
	max-width: 400px;
	line-height: 1.5rem;
	z-index: 5;
	position: relative;
}

#trending .body .swiper .swiper-wrapper .swiper-slide > a .genre {
	margin-top: 0.25rem;
	z-index: 5;
	position: relative;
	display: block !important;
}

#trending .body .swiper .swiper-wrapper .swiper-slide > a .genre span {
	font-weight: 600;
	font-size: 0.9rem;
	color: var(--primary);
	margin-right: 0.7rem;
}

#trending .body .swiper .swiper-wrapper .swiper-slide > a .genre span:hover {
	color: var(--primary);
}

#trending .body .trending-navi {
	margin-left: 1.2rem;
	display: flex;
	flex-direction: column;
	flex-shrink: 0;
}

#trending .body .trending-navi .trending-button-next,
#trending .body .trending-navi .trending-button-prev {
	border-radius: 0.5rem;
	background: rgba(236, 236, 236, 0.3);
	display: flex;
	align-items: center;
	transition: background 0.4s;
	flex-grow: 1;
}

#trending .body .trending-navi .trending-button-next:after,
#trending .body .trending-navi .trending-button-prev:after {
	font-size: 1.8rem;
	font-family: bootstrap-icons;
	color: var(--nero);
}

#trending .body .trending-navi .trending-button-next:hover,
#trending .body .trending-navi .trending-button-prev:hover {
	background: var(--primary);
}

#trending .body .trending-navi .trending-button-next.swiper-button-disabled,
#trending .body .trending-navi .trending-button-prev.swiper-button-disabled {
	background: rgba(236, 236, 236, 0.15);
}

#trending .body .trending-navi .trending-button-next {
	margin-bottom: 3px;
}

#trending .body .trending-navi .trending-button-next:after {
	content: '\\f231';
}

#trending .body .trending-navi .trending-button-prev {
	margin-top: 3px;
}

#trending .body .trending-navi .trending-button-prev:after {
	content: '\\f22d';
}

#trending .foot {
	position: relative;
	margin-top: 2rem;
}

#trending .foot .swiper-pagination-progressbar {
	width: 100%;
	height: 4px;
	border-radius: 9999px;
}

#trending .foot .swiper-pagination-progressbar .swiper-pagination-progressbar-fill {
	background: var(--primary);
	border-radius: 9999px;
}

/* ------------------------------ MOVIES ITEMS ------------------------------ */

main {
	flex-grow: 1;
}

main .aside-wrapper {
	display: flex;
	margin-top: 6rem;
}

main .aside-wrapper.home-page,
main .aside-wrapper.kodi-lib {
	margin-top: 6rem;
	margin-bottom: 2rem;
}

main .main,
main .sidebar {
	display: flex;
	flex-direction: column;
}

main .main {
	margin-right: 1.5rem;
	width: 100%;
}

main .main.left-menu {
	margin-left: 1.5rem;
}

main .sidebar {
	width: 350px;
	flex-shrink: 0;
}

main .main,
main .sidebar {
	display: flex;
	flex-direction: column;
}

.movies-wrapper {
	opacity: 1;
	transition:
		opacity 0.8s ease, max-height 0.5s ease;
	height: 100%; /* Adjust this value based on your content */
}

.movies-wrapper.hidden {
	overflow: hidden;
	opacity: 0;
	display: none;
	max-height: 0;
}

main .bottom {
	display: inline-flex;
	width: 100%;
	height: -moz-min-content;
	height: min-content;
	justify-content: center;
	margin-bottom: 2rem;
}

.mt-5,
.my-5 {
	margin-top: 3rem !important;
}

.mb-5,
.my-5 {
	margin-bottom: 3rem !important;
}

.tabs {
	display: flex;
	flex-wrap: wrap;
	justify-content: space-between;
}

.tabs .tab {
	cursor: pointer;
	padding: 0.2rem 0.5rem;
	border: 1px solid #292929;
	border-radius: 0.5rem;
	transition: border 0.4s;
	color: #888;
	display: inline-block;
}

.tabs .tab.page {
	border: none;
}

.tabs .tab + .tab {
	margin-left: 0.5rem;
}

.tabs .tab.active,
.tabs .tab:hover:not(.page) {
	color: var(--primary);
	border: 1px solid var(--primary);
}

.tabs .tab.disabled {
	pointer-events: none;
	opacity: 0.5;
}

.tabs .tab a.top_link {
	color: #888;
}

.tabs.top .tab.active a.top_link {
	color: var(--primary);
}

.tabs.top .tab.active a.top_link {
	color: var(--primary);
}

.tabs.top .tab.active a.top_link:hover {
	color: var(--primary);
}

.tabs.top .tab a.top_link:hover {
	color: var(--primary);
}

.search-results {
	display: flex;
	flex-direction: column;
	margin-top: 1rem;
	width: 100%;
}

.search-results .tab-content > .movies.items {
	display: grid;
	grid-template-columns: repeat(auto-fill, minmax(160px, 1fr));
}

.search-results .tab-content > .movies.items .item {
	width: 100% !important;
}

.movies.items {
	margin-left: -6px;
	margin-right: -6px;
	margin-top: 1rem;
	display: grid;
	grid-template-columns: repeat(auto-fill, minmax(20%, 1fr));
}

.movies.items .item {
	border-radius: 0.5rem;
	width: 100% !important;

	padding: 0 6px;
	margin-bottom: 2rem;
}

.movies.items .item .quality {
	position: absolute;
	z-index: 5;
	background: var(--primary);
	color: var(--nero);
	border-radius: 0 2px 2px 0;
	padding: 0 5px;
	height: 15px;
	line-height: 15px;
	left: 0;
	top: 12px;
	font-size: 0.7rem;
	font-weight: 700;
}

.movies.items .item .kodi-icon {
	position: absolute;
	z-index: 5;
	overflow: hidden;
	color: transparent;
	background-color: var(--primary);
	transition: background-color 0.2s;
	right: 6px;
	top: 6px;
	width: 24px;
	height: 24px;
	--svg: url('data:image/svg+xml,\\<svg viewBox="0 0 24.00 24.00" role="img" xmlns="http://www.w3.org/2000/svg">\\<path d="M12.03.047c-.226 0-.452.107-.669.324-.922.922-1.842 1.845-2.763 2.768-.233.233-.455.48-.703.695-.31.267-.405.583-.399.988.02 1.399.008 2.799.008 4.198 0 1.453-.002 2.907 0 4.36 0 .11.002.223.03.327.087.337.303.393.546.15 1.31-1.31 2.618-2.622 3.928-3.933l4.449-4.453c.43-.431.43-.905 0-1.336L12.697.37c-.216-.217-.442-.324-.668-.324zm7.224 7.23c-.223 0-.445.104-.65.309L14.82 11.37c-.428.429-.427.895 0 1.322l3.76 3.766c.44.44.908.44 1.346.002 1.215-1.216 2.427-2.433 3.644-3.647.182-.18.353-.364.43-.615v-.33c-.077-.251-.246-.436-.428-.617-1.224-1.22-2.443-2.445-3.666-3.668-.205-.205-.429-.307-.652-.307zM4.18 7.611c-.086.014-.145.094-.207.157L.209 11.572c-.28.284-.278.677.004.96l2.043 2.046c.59.59 1.177 1.182 1.767 1.772.169.168.33.139.416-.084.044-.114.062-.242.063-.364.004-1.283.004-2.567.004-3.851h-.002V8.184c0-.085-.01-.169-.022-.252-.019-.135-.072-.258-.207-.309a.186.186 0 0 0-.095-.012zm7.908 6.838c-.224 0-.447.106-.656.315L7.66 18.537c-.433.434-.433.899.002 1.334 1.215 1.216 2.43 2.43 3.643 3.649.18.18.361.354.611.433h.33c.244-.069.423-.226.598-.402 1.222-1.23 2.45-2.453 3.676-3.68.43-.43.427-.905-.004-1.338l-3.772-3.773c-.208-.208-.432-.311-.656-.31z"/>\\</svg>');
	-webkit-mask: url('data:image/svg+xml,\\<svg viewBox="0 0 24.00 24.00" role="img" xmlns="http://www.w3.org/2000/svg">\\<path d="M12.03.047c-.226 0-.452.107-.669.324-.922.922-1.842 1.845-2.763 2.768-.233.233-.455.48-.703.695-.31.267-.405.583-.399.988.02 1.399.008 2.799.008 4.198 0 1.453-.002 2.907 0 4.36 0 .11.002.223.03.327.087.337.303.393.546.15 1.31-1.31 2.618-2.622 3.928-3.933l4.449-4.453c.43-.431.43-.905 0-1.336L12.697.37c-.216-.217-.442-.324-.668-.324zm7.224 7.23c-.223 0-.445.104-.65.309L14.82 11.37c-.428.429-.427.895 0 1.322l3.76 3.766c.44.44.908.44 1.346.002 1.215-1.216 2.427-2.433 3.644-3.647.182-.18.353-.364.43-.615v-.33c-.077-.251-.246-.436-.428-.617-1.224-1.22-2.443-2.445-3.666-3.668-.205-.205-.429-.307-.652-.307zM4.18 7.611c-.086.014-.145.094-.207.157L.209 11.572c-.28.284-.278.677.004.96l2.043 2.046c.59.59 1.177 1.182 1.767 1.772.169.168.33.139.416-.084.044-.114.062-.242.063-.364.004-1.283.004-2.567.004-3.851h-.002V8.184c0-.085-.01-.169-.022-.252-.019-.135-.072-.258-.207-.309a.186.186 0 0 0-.095-.012zm7.908 6.838c-.224 0-.447.106-.656.315L7.66 18.537c-.433.434-.433.899.002 1.334 1.215 1.216 2.43 2.43 3.643 3.649.18.18.361.354.611.433h.33c.244-.069.423-.226.598-.402 1.222-1.23 2.45-2.453 3.676-3.68.43-.43.427-.905-.004-1.338l-3.772-3.773c-.208-.208-.432-.311-.656-.31z"/>\\</svg>');
	-webkit-mask: var(--svg);
	opacity: 0.6;
	-webkit-mask: url('data:image/svg+xml,\\<svg viewBox="0 0 24.00 24.00" role="img" xmlns="http://www.w3.org/2000/svg">\\<path d="M12.03.047c-.226 0-.452.107-.669.324-.922.922-1.842 1.845-2.763 2.768-.233.233-.455.48-.703.695-.31.267-.405.583-.399.988.02 1.399.008 2.799.008 4.198 0 1.453-.002 2.907 0 4.36 0 .11.002.223.03.327.087.337.303.393.546.15 1.31-1.31 2.618-2.622 3.928-3.933l4.449-4.453c.43-.431.43-.905 0-1.336L12.697.37c-.216-.217-.442-.324-.668-.324zm7.224 7.23c-.223 0-.445.104-.65.309L14.82 11.37c-.428.429-.427.895 0 1.322l3.76 3.766c.44.44.908.44 1.346.002 1.215-1.216 2.427-2.433 3.644-3.647.182-.18.353-.364.43-.615v-.33c-.077-.251-.246-.436-.428-.617-1.224-1.22-2.443-2.445-3.666-3.668-.205-.205-.429-.307-.652-.307zM4.18 7.611c-.086.014-.145.094-.207.157L.209 11.572c-.28.284-.278.677.004.96l2.043 2.046c.59.59 1.177 1.182 1.767 1.772.169.168.33.139.416-.084.044-.114.062-.242.063-.364.004-1.283.004-2.567.004-3.851h-.002V8.184c0-.085-.01-.169-.022-.252-.019-.135-.072-.258-.207-.309a.186.186 0 0 0-.095-.012zm7.908 6.838c-.224 0-.447.106-.656.315L7.66 18.537c-.433.434-.433.899.002 1.334 1.215 1.216 2.43 2.43 3.643 3.649.18.18.361.354.611.433h.33c.244-.069.423-.226.598-.402 1.222-1.23 2.45-2.453 3.676-3.68.43-.43.427-.905-.004-1.338l-3.772-3.773c-.208-.208-.432-.311-.656-.31z"/>\\</svg>');
	        mask: url('data:image/svg+xml,\\<svg viewBox="0 0 24.00 24.00" role="img" xmlns="http://www.w3.org/2000/svg">\\<path d="M12.03.047c-.226 0-.452.107-.669.324-.922.922-1.842 1.845-2.763 2.768-.233.233-.455.48-.703.695-.31.267-.405.583-.399.988.02 1.399.008 2.799.008 4.198 0 1.453-.002 2.907 0 4.36 0 .11.002.223.03.327.087.337.303.393.546.15 1.31-1.31 2.618-2.622 3.928-3.933l4.449-4.453c.43-.431.43-.905 0-1.336L12.697.37c-.216-.217-.442-.324-.668-.324zm7.224 7.23c-.223 0-.445.104-.65.309L14.82 11.37c-.428.429-.427.895 0 1.322l3.76 3.766c.44.44.908.44 1.346.002 1.215-1.216 2.427-2.433 3.644-3.647.182-.18.353-.364.43-.615v-.33c-.077-.251-.246-.436-.428-.617-1.224-1.22-2.443-2.445-3.666-3.668-.205-.205-.429-.307-.652-.307zM4.18 7.611c-.086.014-.145.094-.207.157L.209 11.572c-.28.284-.278.677.004.96l2.043 2.046c.59.59 1.177 1.182 1.767 1.772.169.168.33.139.416-.084.044-.114.062-.242.063-.364.004-1.283.004-2.567.004-3.851h-.002V8.184c0-.085-.01-.169-.022-.252-.019-.135-.072-.258-.207-.309a.186.186 0 0 0-.095-.012zm7.908 6.838c-.224 0-.447.106-.656.315L7.66 18.537c-.433.434-.433.899.002 1.334 1.215 1.216 2.43 2.43 3.643 3.649.18.18.361.354.611.433h.33c.244-.069.423-.226.598-.402 1.222-1.23 2.45-2.453 3.676-3.68.43-.43.427-.905-.004-1.338l-3.772-3.773c-.208-.208-.432-.311-.656-.31z"/>\\</svg>');
	-webkit-mask: var(--svg);
	        mask: var(--svg);
}

.movies.items .item .popup-toggler a {
	position: absolute;
	z-index: 5;
	right: 6px;
	top: 12px;
	color: #fff;
	opacity: 0.5;
	transition: opacity 0.4s;
	cursor: pointer;
	font-size: 1.3rem;
	font-weight: 900 !important;
}

.movies.items .item .popup-toggler a:hover {
	opacity: 0.9;
	color: var(--primary);
}

.movies.items .item .folder {
	position: absolute;
	z-index: 5;
	right: 6px;
	top: 12px;
}

.movies.items .item .folder .folder-toggle {
	background: var(--primary);
	font-size: 0.75rem;
	height: 15px;
	border-radius: 2px 0 0 2px;
	color: var(--nero);
	padding: 0 5px;
	cursor: pointer;
}

.movies.items .item .folder .folder-toggle:hover {
	background: var(--primary);
	opacity: 0.9;
}

.movies.items .item .folder .dropdown-menu {
	width: 170px;
}

.movies.items .item .folder .dropdown-menu .dropdown-item {
	overflow: hidden;
	text-overflow: ellipsis;
	white-space: nowrap;
}

.movies.items .item .poster {
	position: relative;
	padding-bottom: 135%;
	display: block;
	border-radius: 0.5rem;
	overflow: hidden;
	background: var(--secondary);
}

.movies.items .item .poster a {
	cursor: pointer;
	display: block;
	width: 100%;
	height: 100%;
	position: absolute;
	z-index: 1;
	left: 0;
	top: 0;
}

.movies.items .item .poster a:before {
	position: absolute;
	z-index: 2;
	font-family: bootstrap-icons;
	content: '\\f14d';
	opacity: 0;
	color: var(--light);
	margin-left: -25px;
	margin-top: -25px;
	top: 50%;
	left: 50%;
	font-size: 4rem;
	transition: all 0.4s;
	text-shadow: 2px 2px 6px black;
}

.movies.items .item .poster a:after {
	content: '';
	width: 100%;
	height: 100%;
	position: absolute;
	transition: opacity 0.4s ease 0s;
	background: linear-gradient(0deg, var(--primary) 0, rgba(0, 172, 193, 0) 100%);
	opacity: 0;
	z-index: 1;
	-webkit-backdrop-filter: blur(5px);
	        backdrop-filter: blur(5px);
	border: 1px solid var(--primary);
	outline: none !important;
	border-radius: 0.5rem;
}

.movies.items .item .poster a img {
	position: absolute;
	left: 0;
	top: 0;
	width: 100%;
	height: 100%;
	z-index: 0;
}

@keyframes lazy-kf {
	from {
		opacity: 0;
	}
	to {
		opacity: 1;
	}
}

img[loading='lazy'] {
	animation: lazy-kf 2s;
}

.movies.items .item .poster:hover a:after,
.movies.items .item .poster:hover a:before {
	opacity: 1;
}

.movies.items .item .meta {
	margin-top: 0.7rem;
}

.movies.items .item .meta > .meta-year-runtime {
	display: flex;
	justify-content: space-between;
	align-items: center;
	color: #888;
}

.movies.items .item .meta > div > span {
	display: inline-block;
	font-size: 0.85rem;
	overflow: hidden;
	text-overflow: ellipsis;
	white-space: nowrap;
}

.movies.items .item .meta > div > a {
	font-size: 1.02rem;
	color: #e9e9e9;
	display: -webkit-box;
	-webkit-line-clamp: 2;
	-webkit-box-orient: vertical;
	line-height: 1.4rem;
	max-height: 2.8rem;
	overflow: hidden;
	margin-top: 0.6rem;
	display: block;
	height: 2.8rem;
}

.movies.items .item .action {
	display: none;
	margin-top: 0.7rem;
	justify-content: center;
	width: 100%;
}

.movies.items .item .action .watchnow {
	border-radius: 2rem;
	width: 100%;
}

.movies.items .item:hover {
	z-index: 10;
}

.movies.items .item:hover .meta .type {
	color: var(--primary);
	background: rgba(0, 172, 193, 0.05);
}

.movies.items .item:hover .meta > div > a {
	color: var(--primary);
}

.movies.items .item:hover .action.active {
	display: flex;
}

.movies.items .item:hover .meta.active {
	display: none;
}

#kodi-movie-item {
	width: 100%;
	height: auto;
	border-radius: 0.75rem;
	-webkit-user-select: none;
	   -moz-user-select: none;
	        user-select: none;
	cursor: pointer;
}

#kodi-movie-item .kodi-box {
		opacity: 0.9;
		width: 100%;
		height: 100%;
		max-height: 260px;
		border-radius: 0.75rem;
		position: relative;
		background: var(--gray-dark);
	}

#kodi-movie-item .kodi-box .kodi-image {
			height: 100%;
			width: 100%;
			display: block;
		}

#kodi-movie-item .kodi-box .kodi-image img {
			border-radius: 0.75rem;
			width: 100%;
			height: 100%;
		}

#kodi-movie-item .kodi-box .kodi-meta {
			scrollbar-width: none;
			text-shadow:
				1px 1px 3px rgba(0, 0, 0, 0.29),
				2px 4px 7px rgba(73, 64, 125, 0.35);
			transition-duration: 300ms;
			transition-property: opacity;
			transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
			opacity: 0;
			color: rgb(255, 255, 255);
			font-weight: 600;
			vertical-align: bottom;
			text-align: center;
			padding: 0.25rem 0.75rem;
			background: linear-gradient(0deg, var(--primary) 0, rgba(0, 172, 193, 0) 100%);
			border-radius: 0.75rem;
			justify-content: space-evenly;
			align-items: center;
			flex-direction: column;
			width: 100%;
			height: 100%;
			display: flex;
			z-index: 0;
			position: absolute;
			top: 0;
			-webkit-backdrop-filter: blur(5px);
			        backdrop-filter: blur(5px);
			outline: 0 !important;
			border: 1px solid var(--primary);
		}

#kodi-movie-item .kodi-box .kodi-meta p {
				text-transform: uppercase;
				line-height: inherit;
			}

#kodi-movie-item .kodi-box .kodi-meta:hover {
			opacity: 1;
		}

.top9.items {
	margin-bottom: 0.7rem;
}

.top9.items.related .item {
	margin-left: 0;
	margin-left: initial;
}

.top9.items .item {
	align-items: center;
	margin: 8px 0;
	border-radius: 0.5rem;
	background: var(--secondary);
	transition: background 0.5s;
	margin-left: 1rem;
	position: relative;
}

.top9.items .item .num {
	position: absolute;
	left: -1rem;
	background: var(--secondary);
	color: var(--primary);
	border-radius: 50%;
	width: 2rem;
	height: 2rem;
	line-height: 0;
	font-weight: 600;
	z-index: 2;
	transition: all 0.4s;
	font-size: 1.2rem;
	display: flex;
	justify-content: center;
	align-items: center;
}

.top9.items .item .poster {
	margin: 0;
	margin: initial;
	width: 50px;
	border-radius: 0.5rem 0 0 0.5rem;
}

.top9.items .item .info {
	border-radius: 0 0.5rem 0.5rem 0;
	padding: 0 0.8rem;
}

.top9.items .item .info > div {
	color: #7b7b7b;
	font-size: 0.8rem;
}

.top9.items .item .info > div > span + span:before {
	content: '/';
	margin: 0 0.3rem;
}

.top9.items .item .info .name {
	color: #e9e9e9;
	font-size: 1.1rem;
	overflow: hidden;
	text-overflow: ellipsis;
	white-space: nowrap;
}

.top9.items .item:hover {
	background: var(--primary);
}

.top9.items .item:hover > div span {
	color: var(--secondary);
}

.top9.items .item:hover .info .name {
	color: var(--secondary);
}

.top9.items .item:hover .num {
	background: var(--primary);
	color: var(--nero);
}

.scaff.items .item {
	display: flex;
}

.scaff.items .item .poster {
	flex-shrink: 0;
	width: 45px;
	margin-right: 10px;
	border-radius: 0.5rem;
	overflow: hidden;
}

.scaff.items .item .poster div {
	position: relative;
	padding: 67.5% 0;
}

.scaff.items .item .poster div img {
	position: absolute;
	width: 100%;
	height: 100%;
	left: 0;
	top: 0;
}

.scaff.items .item .info {
	flex-grow: 1;
	overflow: hidden;
	align-items: center;
}

/* ------------------------------ Kodi filters ------------------------------ */

.filters {
	margin-right: -4px;
	margin-left: -4px;
	color: var(--secondary);
	padding: 0 2px;
	float: left;
	margin-bottom: 5px;
	display: block;
	width: 100%;
}

.filters > ul {
	list-style-type: none !important;
	margin: 0;
	padding: 0;
}

.filters > ul > li {
	width: calc(100% / 7);
	padding: 0 0.1rem;
	float: left;
	margin-bottom: 5px;
}

.filters > ul > li > .dropdown {
	position: relative;
}

.dropdown-toggle:after {
	content: '\\f229';
	font-weight: bold;
	float: right;
	margin-left: 5px;
	font-family: bootstrap-icons;
	transition: transform 0.2s;
}

.dropdown-toggle.active {
	border: 1px solid var(--primary) !important;
}

.filter .dropdown-toggle.active {
	background: var(--primary) !important;
	color: #fff !important;
}

.dropdown-toggle.active:after {
	transform: rotate(-180deg);
}

.filters .dropdown .dropdown-menu {
	margin-top: 10px;
	padding: 1rem;
}

.filters .dropdown .dropdown-menu > li {
	margin: 0;
	list-style: none;
	overflow: hidden;
}

.filters .dropdown .dropdown-menu li {
	display: inline-block;
	width: calc(100% / 3);
	line-height: 1;
	padding: 0.5rem;
	font-size: 1.1rem;
}

.dropdown-menu {
	position: absolute;
	top: 100%;
	left: 0;
	z-index: 1000;
	display: flex;
	float: left;
	min-width: 160px;
	padding: 0.5rem 0;
	margin: 0.125rem 0 0;
	font-size: 1rem;
	color: #888;
	text-align: left;
	list-style: none;
	background-color: #292929;
	background-clip: padding-box;
	border: 1px solid rgba(0, 0, 0, 0.15);
	border-radius: 0.6rem;
	max-height: 0;
	overflow: hidden;
	opacity: 0;
	max-width: 0;
}

.dropdown-menu.show {
	max-width: 750px;
	width: -moz-max-content;
	width: max-content;
	flex-wrap: wrap;
	max-height: -moz-fit-content;
	max-height: fit-content;
	opacity: 1;
	transition:
		opacity 0.3s, height 1s ease-in-out 0.3s;
}

.filters > ul > li > div > button {
	display: inline-flex;
	width: 100%;
	justify-content: space-between;
	align-items: center;
	padding: 0.5rem 1rem;
	height: auto;
	height: initial;
}

.filters > ul > li > div > button > span {
	overflow: hidden;
	text-overflow: ellipsis;
	text-transform: capitalize;
	white-space: nowrap;
	min-width: 70px;
	text-align: left;
}

.filters .btn.btn-secondary {
	border-radius: 0.5rem;
	text-align: center;
	font-size: 1rem;
	color: #cdcdcd;
	background: #292929;
	padding-left: 0.3rem;
	padding-right: 0.3rem;
	white-space: nowrap;
	outline: none !important;
}

.filters .btn:hover {
	background: var(--primary);
	color: #fff;
}

.filters .btn.btn-primary {
	font-size: 1rem;
}

.hidden {
	display: none;
}

section#kodi-lib {
	margin-top: 2rem;
}

.badge {
	display: inline-block;
	padding: 0.5rem 0.75rem;
	font-size: 1rem;
	border-radius: 0.5rem;
	border: 1px solid transparent;
	background-color: var(--secondary);
	color: #777;
}

.badge-round {
	border-radius: 1rem;
}

.badge-closable {
	padding-right: 1.5rem;
	position: relative;
}

.badge-closable .close {
		display: flex;
		align-items: center;
		justify-content: center;
		position: absolute;
		top: 0;
		right: 0;
		height: 100%;
		width: 1.5rem;
		cursor: pointer;
		opacity: 0.4;
	}

.badge-closable .close:hover {
			opacity: 1;
		}

.kodi-search-input {
	display: inline-flex;
	width: 100%;
	height: calc(1.5em + 1.2rem);
	padding: 0.5rem 1rem;
	font-size: 1rem;
	font-weight: 400;
	line-height: 1.5;
	color: #ececec;
	background-color: #292929;
	background-clip: padding-box;
	border: 0 solid #cecece;
	border-radius: 0.5rem;
	outline: none !important;
	transition:
		border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
}

.kodi-search-input.select {
	padding: 0 0.3rem 0 !important;
}

/* -------------------------- PLAYER CARD COMPONENT ------------------------- */

player-card {
	box-sizing: border-box;
	border-radius: 12px;
	border-width: 1px;
	border-style: solid;
	border-color: var(--nero);
	height: 100%;
	margin-bottom: 0.5rem;
	display: block;
	overflow: hidden;
	box-shadow: none;
	color: var(--light);
}

.top-info ha-icon,
.control-row ha-icon,
.control-pad ha-icon {
	cursor: pointer;
	border-radius: 50%;
	padding: 0.3rem;
}

.top-info ha-icon:hover,
.control-row ha-icon:hover,
.control-pad ha-icon:hover {
	background-color: rgba(255, 255, 255, 0.1);
	transform: scale(1.2);
	transition: transform 0.4s ease;
}

ha-icon.muted {
	color: var(--red) !important;
}

ha-slider {
	--md-sys-color-primary: #00acc1 !important;
}

.not-active {
	display: flex;
	flex-direction: column;
	padding: 16px;
	width: 100%;
	box-sizing: border-box;
	transition-property: color, padding;
	transition-duration: 0.4s;
	background-color: var(--secondary);
	text-transform: capitalize;
}

.not-active.idle {
	background-color: var(--primary);
	color: var(--secondary);
}

.top-info,
.bottom-info {
	display: flex;
	position: relative;
	justify-content: space-between;
	align-items: center;
	height: -moz-fit-content;
	height: fit-content;
	width: 100%;
}

.bottom-info {
	padding-top: 16px;
}

.icon-name {
	display: flex;
	height: -moz-fit-content;
	height: fit-content;
	align-items: center;
}

.icon-name > ha-state-icon {
	padding-right: 8px;
	padding-left: 0;
	padding-left: initial;
	padding-inline-end: 8px;
	direction: var(--direction);
}

.icon-name .player-name {
	display: flex;
	flex-direction: column;
}

.top-info .more-info-state {
	display: flex;
	flex-direction: row;
}

.player-name .entity-state {
	font-size: 14px;
	opacity: 0.6;
}

.player {
	display: block;
	width: 100%;
	height: 100%;
	overflow: hidden;
	position: relative;

	background-color: var(--secondary);
}

.player .background {
	display: flex;
	position: absolute;
	top: 0;
	left: 0;
	height: 100%;
	width: 100%;
	background: linear-gradient(0deg, rgba(var(--rgb-primary), 0.2) 0, rgba(0, 172, 193, 0) 100%);
}

.player > .content {
	position: relative;
	display: flex;
	flex-direction: column;
	padding: 1rem;
	width: 100%;
	box-sizing: border-box;
	transition-property: color, padding;
	transition-duration: 0.4s;
}

.remote-control.active {
	opacity: 1;
	max-height: 100%;
	transition: all 1s ease-in-out 0s;
	position: relative;
	display: flex;
	flex-direction: column;
	box-sizing: border-box;
}

.not-active.idle .remote-control.active {
	padding: 0.5rem 0 !important;
}

.player .remote-control.active {
	padding: 0.5rem 1rem !important;
}

.remote-control {
	overflow: hidden;
	opacity: 0;
	max-height: 0px;
}

@keyframes fade-in {
	0% {
		opacity: 0;
	}
	100% {
		opacity: 1;
	}
}

@keyframes slide-out {
	0% {
		transform: translateY(0);
	}
	100% {
		transform: translateY(-100%);
		display: none;
	}
}

@keyframes slide-in {
	0% {
		transform: translateY(-20%);
	}
	100% {
		transform: translateY(0);
	}
}

.player > .content .now-playing {
	display: flex;
	flex-direction: column;
	width: 100%;
	height: 100%;
}

.player > .content .now-playing .entity-picture {
	display: flex;
	position: relative;
	width: 100%;
	height: 100%;
	transition: all 0.8s ease-in-out;
	cursor: pointer;
}

.player > .content .now-playing .entity-picture img {
	width: 100%;
	height: 100%;
	-o-object-fit: cover;
	   object-fit: cover;
	border-radius: 0.5rem;
	min-height: 200px;
}

.player > .content .now-playing .entity-picture .loader {
	background-image: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200"><radialGradient id="a6" cx=".66" fx=".66" cy=".3125" fy=".3125" gradientTransform="scale(1.5)"><stop offset="0" stop-color="%2300ACC1"></stop><stop offset=".3" stop-color="%2300ACC1" stop-opacity=".9"></stop><stop offset=".6" stop-color="%2300ACC1" stop-opacity=".6"></stop><stop offset=".8" stop-color="%2300ACC1" stop-opacity=".3"></stop><stop offset="1" stop-color="%2300ACC1" stop-opacity="0"></stop></radialGradient><circle transform-origin="center" fill="none" stroke="url(%23a6)" stroke-width="20" stroke-linecap="round" stroke-dasharray="200 1000" stroke-dashoffset="0" cx="100" cy="100" r="70"><animateTransform type="rotate" attributeName="transform" calcMode="spline" dur="2" values="360;0" keyTimes="0;1" keySplines="0 0 1 1" repeatCount="indefinite"></animateTransform></circle><circle transform-origin="center" fill="none" opacity=".2" stroke="%2300ACC1" stroke-width="20" stroke-linecap="round" cx="100" cy="100" r="70"></circle></svg>');
	background-size: contain;
	background-repeat: no-repeat;
	background-position: center center;
	width: 100%;
	height: 100%;
	border-radius: 0.5rem;
	background-color: var(--nero);
	min-height: 200px;
}

.player > .content .now-playing .entity-picture .media-info {
	position: absolute;
	bottom: -1px;
	left: 0;
	width: 100%;
	background: rgba(0, 0, 0, 0.5);
	-webkit-backdrop-filter: blur(5px);
	        backdrop-filter: blur(5px);
	padding: 8px;
	box-sizing: border-box;
	z-index: 2;
	border-bottom-right-radius: 0.5rem;
	border-bottom-left-radius: 0.5rem;
}

.player > .content .now-playing .entity-picture .media-playing {
	position: absolute;
	z-index: 1;
	height: 100%;
	width: 100%;
	animation: blurIn 0.5s ease;
	animation-direction: reverse;
}

.player > .content .now-playing .entity-picture .media-playing > ha-state-icon {
	position: absolute;
	top: 0.5rem;
	left: 0.5rem;
}

.player > .content .now-playing .entity-picture .media-pause {
	position: absolute;
	z-index: 1;
	width: 100%;
	height: 100%;
	background: rgba(0, 0, 0, 0.2);
	animation: blurIn 0.5s;
	border-radius: 0.5rem;
	overflow: hidden;
	-webkit-backdrop-filter: blur(5px);
	        backdrop-filter: blur(5px);
}

@keyframes blurIn {
	0% {
		-webkit-backdrop-filter: blur(0px);
		        backdrop-filter: blur(0px);
	}
	100% {
		-webkit-backdrop-filter: blur(5px);
		        backdrop-filter: blur(5px);
	}
}

.player > .content .now-playing .entity-picture .media-pause > a::after {
	position: absolute;
	z-index: 1;
	font-family: bootstrap-icons;
	content: '\\f4c1';
	color: rgba(255, 255, 255, 0.3);
	margin-left: -25px;
	margin-top: -25px;
	top: 50%;
	left: 50%;
	font-size: 4rem;
}

.player > .content .now-playing .entity-picture .media-pause > a:hover::after {
	content: '\\f4f2';
	color: var(--primary);
	cursor: pointer;
	transition: all 0.5s ease;
}

.player > .content .now-playing .entity-picture .media-pause.hidden,
.player > .content .now-playing .entity-picture .media-playing.hidden {
	display: none;
}

.player > .content .now-playing .progress-info {
	display: flex;
	align-items: center;
	font-size: smaller;
	width: 100%;
	flex-grow: 1;
	flex-direction: column;
	padding-top: 0.5rem;
}

.player > .content .now-playing .progress-info .progress-bar {
	background-color: var(--gray-dark);
	height: 0.5rem;
	width: 100%;
	border-radius: 999px;
	overflow: hidden;
	display: flex;
}

.player > .content .now-playing .progress-info #progress {
	height: 100%;
	width: 0px;
	transition: all 1s ease-out 0s;
	filter: brightness(0.5);
	background-color: var(--primary);
}

.player > .content .now-playing .progress-info .time-info {
	width: 100%;
	display: flex;
	justify-content: space-between;
	padding: 4px;
}

.player > .content .control-row {
	display: flex;
	justify-content: space-between;
	align-items: center;
	width: 100%;
	padding: 0.5rem 0;
}

.player > .content .control-up {
	width: 100%;
	display: flex;
	align-items: center;
	justify-content: space-around;
}

.remote-control .control-pad {
	background-color: black;
	border-radius: 8px;
	padding: 1rem 0.5rem;
	aspect-ratio: 1;
	display: flex;
	flex-direction: column;
	justify-content: space-around;
}

.remote-control .touch-pad {
	grid-template-columns: repeat(3, 1fr);
	grid-template-rows: repeat(3, 1fr);
	gap: 20px;
	width: 100%;
	aspect-ratio: 1;
	background-color: black;
	border-radius: 8px;
	grid-template-areas:
		'. up .'
		'left center right'
		'. down .';
	--icon-primary-color: rgba(var(--rgb-gray), 0.5);
	--mdc-icon-size: 40px;
	display: none;
}

.touch-center {
	grid-area: center;
	border-radius: 50%;
	width: 100%;
	height: 100%;
	background-color: var(--nero);
}

.touch-up,
.touch-down,
.touch-left,
.touch-right {
	display: flex;
	justify-content: center;
	align-items: center;
}

.touch-up {
	grid-area: up;
}

.touch-down {
	grid-area: down;
}

.touch-left {
	grid-area: left;
}

.touch-right {
	grid-area: right;
}

.remote-control .control-pad.hidden {
	display: none;
}

.remote-control .touch-pad.show {
	display: grid;
}

.remote-control > .control-pad .pad-row {
	width: 100%;
	height: 100%;
	display: flex;
	align-items: center;
	justify-content: space-around;
}

.remote-control > .control-pad .pad-row .ctl-btn {
	display: flex;
	align-items: center;
	justify-content: center;
	cursor: pointer;
	width: 30%;
	padding: 0.5rem;
	color: var(--gray);
}

.remote-control > .control-pad .pad-row .ctl-btn.secondary {
	width: 8rem;
	color: var(--primary);
	background-color: var(--secondary);
	height: 100%;
}

.ctl-btn.secondary.right {
	border-top-right-radius: 8px;
	border-bottom-right-radius: 8px;
}

.ctl-btn.secondary.left {
	border-top-left-radius: 8px;
	border-bottom-left-radius: 8px;
}

.ctl-btn.secondary.top {
	border-top-left-radius: 8px;
	border-top-right-radius: 8px;
}

.ctl-btn.secondary.bottom {
	border-bottom-left-radius: 8px;
	border-bottom-right-radius: 8px;
}

.ctl-btn.secondary.center > ha-icon {
	--mdc-icon-size: 70px !important;
	color: var(--gray);
}

.remote-control > .control-pad .pad-row .ctl-btn.secondary > ha-icon {
	--mdc-icon-size: 34px;
}

.remote-control > .control-pad .pad-row .ctl-btn:active {
	color: var(--secondary);
	transition: height 0.2s ease;
}

.control-row {
	display: flex;
	width: 100%;
	justify-content: space-between;
	height: -moz-fit-content;
	height: fit-content;
	padding: 16px;
}

@media (max-width: 1563.98px) {
	#featured {
		height: 700px;
	}
}

@media (max-width: 1445px) {
	#trending .body .swiper .swiper-wrapper .swiper-slide {
		width: 33.3333333333%;
	}
	main .aside-wrapper .sidebar {
		width: 320px;
	}
}

@media (max-width: 1199.98px) {
	body,
	html {
		font-size: 13px;
	}

	header .wrapper .start #menu-toggler {
		padding-top: 0.15rem;
	}

	#featured {
		height: 600px;
	}
	#featured .swiper-slide .slide-wrapper {
		width: 100%;
	}
	#featured .swiper-slide .slide-wrapper .info .start {
		width: 100%;
	}
	#featured .swiper-slide .slide-wrapper .actions .start {
		width: 100%;
	}
	#featured .swiper-slide .slide-wrapper .actions .start .watchnow {
		margin: 0 2rem 0 0;
	}
	#featured .container .slide-navi {
		left: auto;
		left: initial;
		right: 15px;
	}

	#trending {
		margin-top: -6rem;
	}

	#trending .body .swiper .swiper-wrapper .swiper-slide {
		width: 50%;
	}

	main .aside-wrapper {
		flex-direction: column;
	}
	main .aside-wrapper .sidebar {
		width: 100%;
		max-width: none;
		max-width: initial;
		min-width: 0;
		min-width: initial;
		margin-top: 2rem;
	}

	#w-info .poster > img {
		max-width: 240px;
	}
	#w-info .info .name {
		font-size: 2.2rem;
	}
	.aside-wrapper.info-ep {
		flex-direction: column-reverse;
	}
	.aside-wrapper.info-ep #episodes {
		margin: 0 0 3rem;
	}
	.aside-wrapper.info-ep #episodes .body {
		height: auto;
		max-height: 250px;
		overflow: auto;
	}
	.aside-wrapper.info-ep #episodes .body .episodes {
		position: static;
	}
	.aside-wrapper.info-ep #episodes.movie {
		background: var(--secondary);
	}
}

@media (max-width: 991.98px) {
	.stars {
		margin-left: 20px;
	}

	#trending .body .trending-navi {
		display: none;
	}

	#trending {
		margin-top: -11rem;
	}

	#featured {
		height: 480px;
	}

	#featured .swiper-slide .slide-wrapper .info .start .name {
		font-size: 2rem;
	}
	#featured .swiper-slide .slide-wrapper .info .start .desc {
		display: none;
	}
	#controls .c-items .item {
		font-size: 0.8rem;
	}
	#controls .c-items .item > i {
		font-size: 1rem;
	}
	#controls .c-items .comment {
		display: none;
	}
	#controls .c-items .views {
		display: none;
	}
	main .aside-wrapper {
		margin-top: 2rem;
	}
	#w-info {
		position: relative;
	}
	#w-info .poster {
		position: absolute;
		left: 0;
		right: 0;
		top: 0;
		z-index: -1;
	}
	#w-info .poster:before {
		position: absolute;
		content: '';
		display: block;
		width: 100%;
		height: 100%;
		left: 0;
		top: 0;
		background: rgba(24, 24, 24, 0.75);
		z-index: 1;
	}
	#w-info .poster:after {
		display: block;
		position: absolute;
		content: '';
		bottom: 0;
		left: 0;
		right: 0;
		box-shadow: 1px 0 200px 800px var(--nero);
		z-index: 1;
	}
	#w-info .poster > img {
		max-width: none;
		max-width: initial;
		width: 100%;
	}
	#w-info .info {
		z-index: 2;
		margin-left: 0;
		padding: 20rem 2rem 0;
	}
	#w-info .info .name {
		max-width: 100%;
	}
	#w-info .rating-box {
		left: 0;
		margin: 1rem auto;
		width: 200px;
	}

	.filters .dropdown .dropdown-menu,
	.filters .dropdown .dropdown-menu.lg,
	.filters .dropdown .dropdown-menu.md {
		width: auto;
		min-width: auto;
		max-height: 300px;
		overflow-y: auto;
	}
	.filters .dropdown .dropdown-menu li,
	.filters .dropdown .dropdown-menu.lg li,
	.filters .dropdown .dropdown-menu.md li {
		width: 100%;
		float: none;
	}
	ul > li.filter {
		width: 20%;
	}

	#setting .user-bg {
		padding: 2rem;
	}
	footer {
		font-size: 14px;
	}

	.movies.items {
		grid-template-columns: repeat(auto-fill, minmax(25%, 1fr));
	}
}

@media (max-width: 767.98px) {
	header .wrapper {
		height: 5rem;
	}
	header .wrapper .start {
		position: static;
		position: initial;
	}
	header .wrapper .start #menu-toggler {
		margin-right: 0.5rem;
		padding-top: 0.2rem;
	}
	header .wrapper .start #menu {
		left: 0;
		max-width: 100vw;
		padding: 0 10px;
	}
	header .wrapper .start #menu > ul > li:hover > ul {
		display: none;
	}
	header .wrapper .start #menu > ul > li > ul {
		margin: 0;
		margin: initial;
		position: static;
		position: initial;
		overflow: hidden;
		min-width: 0;
		min-width: initial;
		padding: 0.5rem;
	}
	header .wrapper .start #menu > ul > li > ul li a {
		font-size: 1rem;
	}
	header .wrapper .step {
		flex-grow: 1;
		justify-content: flex-end;
		display: flex;
	}
	header .wrapper .step .search-box .search-toggler {
		display: block;
		background: 0 0;
		color: #fff;
		font-size: 1.6rem;
		border: 0;
	}
	header .wrapper .step .search-box .search-toggler:hover {
		color: var(--primary);
	}
	header .wrapper .step .search-box .search-wrap {
		display: none;
		position: absolute;
		left: 0;
		right: 0;
		top: 4.5rem;
		margin-left: auto;
		margin-right: auto;
		width: 95%;
	}
	dialog {
		min-width: 100vw;
		min-height: 100vh;
	}
	#featured {
		height: 400px;
	}
	#featured .swiper-slide .slide-wrapper {
		margin-bottom: 2rem;
		width: 100%;
	}
	#featured .swiper-slide .slide-wrapper .info .start {
		text-align: center;
	}
	#featured .swiper-slide .slide-wrapper .info .start .name {
		font-size: 1.5rem;
	}
	#featured .swiper-slide .slide-wrapper .info .start .meta {
		margin-top: 1rem;
		display: block;
	}
	#featured .swiper-slide .slide-wrapper .info .start .meta .genres {
		display: block;
		margin-top: 0.3rem;
	}
	#featured .swiper-slide .slide-wrapper .actions {
		flex-direction: column-reverse;
	}
	#featured .swiper-slide .slide-wrapper .actions .start {
		margin-top: 1rem;
		display: flex;
		width: 100%;
		justify-content: center;
	}
	#featured .swiper-slide .slide-wrapper .actions .start .watchnow {
		margin: 0;
		width: auto;
		text-align: center;
	}
	#featured .swiper-slide .slide-wrapper .actions .start .dropup {
		width: 50%;
	}
	#featured .swiper-slide .slide-wrapper .actions .start .dropup .add2list {
		width: 100%;
		text-align: center;
	}
	#featured .swiper-slide .slide-wrapper .actions .start .add2list.bookmark {
		width: 50%;
		text-align: center;
	}
	#featured > .container .slide-navi {
		display: none;
	}

	#featured > .container .swiper-scrollbar {
		margin-top: 5px;
	}
	#trending {
		margin-top: 0;
		margin-top: initial;
	}
	#trending .body .swiper .swiper-wrapper .swiper-slide {
		width: 100%;
	}
	#trending .body .swiper .swiper-wrapper .swiper-slide a {
		padding: 1rem 1.3rem;
		height: 12rem;
	}
	#trending .body .swiper .swiper-wrapper .swiper-slide a .title {
		font-size: 1.1rem;
		line-height: 1.3rem;
	}
	main .aside-wrapper.home-page {
		margin-top: 5rem;
	}

	section .head {
		margin-bottom: 2rem;
		justify-content: center;
	}
	section .head .start {
		align-items: center;
		flex-direction: column;
		width: 100%;
	}
	section .head .start .title {
		margin-right: 0;
		margin-bottom: 1rem;
	}
	section .head .start .title > i {
		font-size: 1.2rem;
	}
	section .head .end .btn-outline-body-color {
		display: block;
		width: -moz-max-content;
		width: max-content;
		flex-wrap: wrap;
		padding: 0 0.5rem;
	}
	#player-wrapper .btn-watchnow p {
		font-size: 1.5rem;
	}
	#controls .c-items .light {
		display: none;
	}
	#controls .c-items > div + div {
		margin: 0;
	}
	#w-info .poster::after {
		box-shadow: 1px 0 200px 200px var(--nero);
	}
	#w-info .info {
		padding: 15rem 1rem 0;
	}
	#w-info .info .name {
		font-size: 1.5rem;
		line-height: 1.7rem;
	}
	#w-info .info .detail > div > div {
		width: 90px;
	}
	#servers {
		margin-bottom: 1rem;
	}
	#servers .servers {
		display: block;
		overflow: hidden;
		background: 0 0;
		margin-left: -1%;
		margin-right: -1%;
	}
	#servers .servers .server {
		width: 48%;
		background: var(--secondary);
		margin: 1% !important;
		display: block;
		padding: 8px 0;
		overflow: hidden;
		text-overflow: ellipsis;
		white-space: nowrap;
		float: left;
	}
	.user-page .tabs a span {
		display: none;
	}
	.user-folders-nav {
		text-align: center;
	}
	body.home main .main {
		padding: 2rem;
	}
	body.home main .slogan {
		font-size: 1.7rem;
	}
	ul.az-filters li {
		width: 14.2857142857%;
	}
	.dropdown.responsive.show:before {
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		background: rgba(0, 0, 0, 0.3);
		content: '';
		position: fixed;
		z-index: 49;
	}

	.dropdown.responsive .dropdown-menu {
		position: fixed;
		height: auto !important;
		top: 30vh;
		left: 10vw;
		width: 80vw !important;
		min-width: auto !important;
		max-height: 55vh !important;
		overscroll-behavior: contain;
		padding-top: 10px;
		padding-bottom: 10px;
		border: 1px solid #666;
		z-index: 50;
		overflow: auto;
	}

	.dropdown.responsive .dropdown-menu .dropdown-item,
	.dropdown.responsive .dropdown-menu li {
		width: 100% !important;
	}
	.dropdown.responsive .dropdown-menu .dropdown-item > label,
	.dropdown.responsive .dropdown-menu li > label {
		font-size: 1rem !important;
	}
	body.home main > div {
		padding: 0;
	}
	body.home main > div .i-wrapper {
		border-radius: 0;
	}
	body.home main > div .i-wrapper .i-article,
	body.home main > div .i-wrapper .i-head {
		padding: 1rem;
	}
	body.home main > div .i-wrapper .i-head .logo {
		margin-top: 2rem;
		margin-bottom: 3rem;
	}
	body.home main > div .i-wrapper .search-box .search-wrap form {
		justify-content: space-between;
	}
	body.home main > div .i-wrapper .search-box .search-wrap form input {
		width: auto;
		width: initial;
		margin-left: 0;
		margin-left: initial;
	}
	body.home main > div .i-wrapper .slogan {
		display: none;
	}
	body.home main > div .i-wrapper .topsearch {
		display: none;
	}
	body.home main > div .i-wrapper .search-box {
		margin-bottom: 2rem;
	}
	footer {
		padding-top: 1rem;
	}
	footer .head {
		flex-direction: column-reverse;
		margin-bottom: 1rem;
	}
	footer .body {
		padding-bottom: 1rem;
		align-items: start;
	}
	footer .body .end,
	footer .body .start {
		width: 50%;
	}
	footer .body .end > ul,
	footer .body .start > ul {
		width: 100%;
		padding: 0;
		padding: initial;
	}
	footer .body .end > ul > li,
	footer .body .start > ul > li {
		display: block;
		width: 100%;
	}
	footer .body .end > ul li + li,
	footer .body .start > ul li + li {
		margin: 0;
		margin: initial;
	}
	footer .body .start > span {
		display: none;
	}
	footer .body .start > ul {
		margin: 0;
		margin: initial;
		padding: 0;
		padding: initial;
	}
	footer .body .start > ul > li {
		padding: 0;
		padding: initial;
		margin: 0;
		margin: initial;
		text-align: right;
		padding-right: 1rem;
	}
	header .wrapper .step .search-box .search-toggler {
		display: block;
		background: 0 0;
		color: #fff;
		font-size: 1.6rem;
		border: 0;
	}
	.sr-only {
		position: absolute;
		width: 1px;
		height: 1px;
		padding: 0;
		margin: -1px;
		overflow: hidden;
		clip: rect(0, 0, 0, 0);
		white-space: nowrap;
		border: 0;
	}
	header .wrapper .step .search-box .search-wrap {
		display: none;
		position: absolute;
		left: 0;
		right: 0;
		top: 4.5rem;
		margin-left: auto;
		margin-right: auto;
		width: 95%;
	}
	header .wrapper .step .search-box .search-wrap.toggled {
		display: block;
	}
	header.abs-head .wrapper .step .search-box .search-wrap {
		background: rgba(0, 0, 0, 0.5);
		transition:
			background 0.4s, box-shadow 0.4s;
	}
	.movies.items.kodi-library,
	.movies.items {
		grid-template-columns: repeat(auto-fill, minmax(30%, 1fr));
	}
}

@media (max-width: 575.98px) {
	#featured {
		height: 300px;
	}

	ul > li.filter {
		width: 50%;
	}
	ul > li.filter:last-child {
		width: 100%;
	}

	.movies.items .item .action .watchnow {
		padding: 1px 0.6px;
		border-radius: 12px;
		border: none;
	}

	dialog {
		border-radius: 0;
	}
	dialog .container {
		width: 100vw !important;
	}
}

@media (max-width: 420px) {
	.dropdown.responsive .dropdown-menu {
		top: 50vh;
	}
	.movies.items.kodi-library,
	.movies.items {
		grid-template-columns: repeat(auto-fill, minmax(124px, 1fr));
	}

	.tabs {
		justify-content: center;
	}
}

@media (min-width: 576px) {
	.container,
	.container-sm {
		max-width: 100%;
	}
}

@media (min-width: 768px) {
	.container,
	.container-md,
	.container-sm {
		max-width: 100%;
	}
	dialog .container {
		max-width: 730px;
	}
}

@media (min-width: 992px) {
	.container,
	.container-lg,
	.container-md,
	.container-sm {
		max-width: 100%;
	}
	dialog .container {
		max-width: 970px;
	}
}

@media (min-width: 1200px) {
	.wrapper {
		font-size: 16px;
		font-weight: 400;
	}
	.container,
	.container-lg,
	.container-md,
	.container-sm,
	.container-xl {
		max-width: 100%;
	}

	.details-info {
		display: flex;
	}
		.details-info .trailer-wrapper,
		.details-info .overview-info {
			width: 50%;
		}
		.details-info .overview-info.full {
			width: 100%;
		}
}

@media (min-width: 1440px) {
	.container,
	.container-lg,
	.container-md,
	.container-sm,
	.container-xl {
		max-width: 1800px;
	}
	dialog .container {
		max-width: 1140px;
	}
}

@media (min-width: 1600px) {
	.container,
	.container-lg,
	.container-md,
	.container-sm,
	.container-xl {
		max-width: 1800px;
	}
	.movies.items {
		grid-template-columns: repeat(auto-fill, minmax(14%, 1fr));
	}
}

@media (min-width: 2560px) {
	.container,
	.container-lg,
	.container-md,
	.container-sm,
	.container-xl {
		max-width: 1800px;
	}
}

:host {
	--primary: #00acc1 !important;
	--secondary: #0f0f0f;
	--blue: #007bff;
	--indigo: #6610f2;
	--purple: #6f42c1;
	--pink: #e83e8c;
	--red: #dc3545;
	--orange: #fd7e14;
	--yellow: #ffc107;
	--green: #28a745;
	--teal: #20c997;
	--cyan: #17a2b8;
	--white: #fff;
	--grey: #ecedf3;
	--gray: #6c6c6c;
	--gray-dark: #343434;
	--nero: #181818;
	--success: #28a745;
	--info: #17a2b8;
	--warning: #ffc107;
	--danger: #dc3545;
	--light: #ececec;
	--dark: #343434;
	--breakpoint-xs: 0;
	--breakpoint-sm: 576px;
	--breakpoint-md: 768px;
	--breakpoint-lg: 992px;
	--breakpoint-xl: 1200px;
	--breakpoint-xxl: 1400px;
	--lovelace-background: #181818;
	--rgb-primary: 0, 172, 193;
	--rgb-gray: 108, 108, 108;
}

body.no-scroll {
	overflow: hidden !important;
}
`;
styleInject(css_248z$1);

var css_248z = i$3`/**
 * Swiper 11.1.1
 * Most modern mobile touch slider and framework with hardware accelerated transitions
 * https://swiperjs.com
 *
 * Copyright 2014-2024 Vladimir Kharlampidi
 *
 * Released under the MIT License
 *
 * Released on: April 9, 2024
 */

/* FONT_START */

@font-face {
  font-family: 'swiper-icons';
  src: url('data:application/font-woff;charset=utf-8;base64, d09GRgABAAAAAAZgABAAAAAADAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABGRlRNAAAGRAAAABoAAAAci6qHkUdERUYAAAWgAAAAIwAAACQAYABXR1BPUwAABhQAAAAuAAAANuAY7+xHU1VCAAAFxAAAAFAAAABm2fPczU9TLzIAAAHcAAAASgAAAGBP9V5RY21hcAAAAkQAAACIAAABYt6F0cBjdnQgAAACzAAAAAQAAAAEABEBRGdhc3AAAAWYAAAACAAAAAj//wADZ2x5ZgAAAywAAADMAAAD2MHtryVoZWFkAAABbAAAADAAAAA2E2+eoWhoZWEAAAGcAAAAHwAAACQC9gDzaG10eAAAAigAAAAZAAAArgJkABFsb2NhAAAC0AAAAFoAAABaFQAUGG1heHAAAAG8AAAAHwAAACAAcABAbmFtZQAAA/gAAAE5AAACXvFdBwlwb3N0AAAFNAAAAGIAAACE5s74hXjaY2BkYGAAYpf5Hu/j+W2+MnAzMYDAzaX6QjD6/4//Bxj5GA8AuRwMYGkAPywL13jaY2BkYGA88P8Agx4j+/8fQDYfA1AEBWgDAIB2BOoAeNpjYGRgYNBh4GdgYgABEMnIABJzYNADCQAACWgAsQB42mNgYfzCOIGBlYGB0YcxjYGBwR1Kf2WQZGhhYGBiYGVmgAFGBiQQkOaawtDAoMBQxXjg/wEGPcYDDA4wNUA2CCgwsAAAO4EL6gAAeNpj2M0gyAACqxgGNWBkZ2D4/wMA+xkDdgAAAHjaY2BgYGaAYBkGRgYQiAHyGMF8FgYHIM3DwMHABGQrMOgyWDLEM1T9/w8UBfEMgLzE////P/5//f/V/xv+r4eaAAeMbAxwIUYmIMHEgKYAYjUcsDAwsLKxc3BycfPw8jEQA/gZBASFhEVExcQlJKWkZWTl5BUUlZRVVNXUNTQZBgMAAMR+E+gAEQFEAAAAKgAqACoANAA+AEgAUgBcAGYAcAB6AIQAjgCYAKIArAC2AMAAygDUAN4A6ADyAPwBBgEQARoBJAEuATgBQgFMAVYBYAFqAXQBfgGIAZIBnAGmAbIBzgHsAAB42u2NMQ6CUAyGW568x9AneYYgm4MJbhKFaExIOAVX8ApewSt4Bic4AfeAid3VOBixDxfPYEza5O+Xfi04YADggiUIULCuEJK8VhO4bSvpdnktHI5QCYtdi2sl8ZnXaHlqUrNKzdKcT8cjlq+rwZSvIVczNiezsfnP/uznmfPFBNODM2K7MTQ45YEAZqGP81AmGGcF3iPqOop0r1SPTaTbVkfUe4HXj97wYE+yNwWYxwWu4v1ugWHgo3S1XdZEVqWM7ET0cfnLGxWfkgR42o2PvWrDMBSFj/IHLaF0zKjRgdiVMwScNRAoWUoH78Y2icB/yIY09An6AH2Bdu/UB+yxopYshQiEvnvu0dURgDt8QeC8PDw7Fpji3fEA4z/PEJ6YOB5hKh4dj3EvXhxPqH/SKUY3rJ7srZ4FZnh1PMAtPhwP6fl2PMJMPDgeQ4rY8YT6Gzao0eAEA409DuggmTnFnOcSCiEiLMgxCiTI6Cq5DZUd3Qmp10vO0LaLTd2cjN4fOumlc7lUYbSQcZFkutRG7g6JKZKy0RmdLY680CDnEJ+UMkpFFe1RN7nxdVpXrC4aTtnaurOnYercZg2YVmLN/d/gczfEimrE/fs/bOuq29Zmn8tloORaXgZgGa78yO9/cnXm2BpaGvq25Dv9S4E9+5SIc9PqupJKhYFSSl47+Qcr1mYNAAAAeNptw0cKwkAAAMDZJA8Q7OUJvkLsPfZ6zFVERPy8qHh2YER+3i/BP83vIBLLySsoKimrqKqpa2hp6+jq6RsYGhmbmJqZSy0sraxtbO3sHRydnEMU4uR6yx7JJXveP7WrDycAAAAAAAH//wACeNpjYGRgYOABYhkgZgJCZgZNBkYGLQZtIJsFLMYAAAw3ALgAeNolizEKgDAQBCchRbC2sFER0YD6qVQiBCv/H9ezGI6Z5XBAw8CBK/m5iQQVauVbXLnOrMZv2oLdKFa8Pjuru2hJzGabmOSLzNMzvutpB3N42mNgZGBg4GKQYzBhYMxJLMlj4GBgAYow/P/PAJJhLM6sSoWKfWCAAwDAjgbRAAB42mNgYGBkAIIbCZo5IPrmUn0hGA0AO8EFTQAA');
  font-weight: 400;
  font-style: normal;
}

/* FONT_END */

:root {
  --swiper-theme-color: #007aff;
  /*
  --swiper-preloader-color: var(--swiper-theme-color);
  --swiper-wrapper-transition-timing-function: initial;
  */
}

:host {
  position: relative;
  display: block;
  margin-left: auto;
  margin-right: auto;
  z-index: 1;
}

.swiper {
  margin-left: auto;
  margin-right: auto;
  position: relative;
  overflow: hidden;
  list-style: none;
  padding: 0;
  /* Fix of Webkit flickering */
  z-index: 1;
  display: block;
}

.swiper-vertical > .swiper-wrapper {
  flex-direction: column;
}

.swiper-wrapper {
  position: relative;
  width: 100%;
  height: 100%;
  z-index: 1;
  display: flex;
  transition-property: transform;
  transition-timing-function: ease;
  transition-timing-function: initial;
  transition-timing-function: var(--swiper-wrapper-transition-timing-function, initial);
  box-sizing: content-box;
}

.swiper-android .swiper-slide,
.swiper-ios .swiper-slide,
.swiper-wrapper {
  transform: translate3d(0px, 0, 0);
}

.swiper-horizontal {
  touch-action: pan-y;
}

.swiper-vertical {
  touch-action: pan-x;
}

.swiper-slide {
  flex-shrink: 0;
  width: 100%;
  height: 100%;
  position: relative;
  transition-property: transform;
  display: block;
}

.swiper-slide-invisible-blank {
  visibility: hidden;
}

/* Auto Height */

.swiper-autoheight,
.swiper-autoheight .swiper-slide {
  height: auto;
}

.swiper-autoheight .swiper-wrapper {
  align-items: flex-start;
  transition-property: transform, height;
}

.swiper-backface-hidden .swiper-slide {
  transform: translateZ(0);
  backface-visibility: hidden;
}

/* 3D Effects */

.swiper-3d.swiper-css-mode .swiper-wrapper {
  perspective: 1200px;
}

.swiper-3d .swiper-wrapper {
  transform-style: preserve-3d;
}

.swiper-3d {
  perspective: 1200px;
}

.swiper-3d .swiper-slide,
.swiper-3d .swiper-cube-shadow {
  transform-style: preserve-3d;
}

/* CSS Mode */

.swiper-css-mode > .swiper-wrapper {
  overflow: auto;
  scrollbar-width: none;
  /* For Firefox */
  -ms-overflow-style: none;
  /* For Internet Explorer and Edge */
}

.swiper-css-mode > .swiper-wrapper::-webkit-scrollbar {
  display: none;
}

.swiper-css-mode > .swiper-wrapper > .swiper-slide {
  scroll-snap-align: start start;
}

.swiper-css-mode.swiper-horizontal > .swiper-wrapper {
  scroll-snap-type: x mandatory;
}

.swiper-css-mode.swiper-vertical > .swiper-wrapper {
  scroll-snap-type: y mandatory;
}

.swiper-css-mode.swiper-free-mode > .swiper-wrapper {
  scroll-snap-type: none;
}

.swiper-css-mode.swiper-free-mode > .swiper-wrapper > .swiper-slide {
  scroll-snap-align: none;
}

.swiper-css-mode.swiper-centered > .swiper-wrapper::before {
  content: '';
  flex-shrink: 0;
  order: 9999;
}

.swiper-css-mode.swiper-centered > .swiper-wrapper > .swiper-slide {
  scroll-snap-align: center center;
  scroll-snap-stop: always;
}

.swiper-css-mode.swiper-centered.swiper-horizontal > .swiper-wrapper > .swiper-slide:first-child {
  margin-left: var(--swiper-centered-offset-before);
}

.swiper-css-mode.swiper-centered.swiper-horizontal > .swiper-wrapper::before {
  height: 100%;
  min-height: 1px;
  width: var(--swiper-centered-offset-after);
}

.swiper-css-mode.swiper-centered.swiper-vertical > .swiper-wrapper > .swiper-slide:first-child {
  margin-top: var(--swiper-centered-offset-before);
}

.swiper-css-mode.swiper-centered.swiper-vertical > .swiper-wrapper::before {
  width: 100%;
  min-width: 1px;
  height: var(--swiper-centered-offset-after);
}

/* Slide styles start */

/* 3D Shadows */

.swiper-3d .swiper-slide-shadow,
.swiper-3d .swiper-slide-shadow-left,
.swiper-3d .swiper-slide-shadow-right,
.swiper-3d .swiper-slide-shadow-top,
.swiper-3d .swiper-slide-shadow-bottom,
.swiper-3d .swiper-slide-shadow,
.swiper-3d .swiper-slide-shadow-left,
.swiper-3d .swiper-slide-shadow-right,
.swiper-3d .swiper-slide-shadow-top,
.swiper-3d .swiper-slide-shadow-bottom {
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
  z-index: 10;
}

.swiper-3d .swiper-slide-shadow {
  background: rgba(0, 0, 0, 0.15);
}

.swiper-3d .swiper-slide-shadow-left {
  background-image: linear-gradient(to left, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0));
}

.swiper-3d .swiper-slide-shadow-right {
  background-image: linear-gradient(to right, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0));
}

.swiper-3d .swiper-slide-shadow-top {
  background-image: linear-gradient(to top, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0));
}

.swiper-3d .swiper-slide-shadow-bottom {
  background-image: linear-gradient(to bottom, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0));
}

.swiper-lazy-preloader {
  width: 42px;
  height: 42px;
  position: absolute;
  left: 50%;
  top: 50%;
  margin-left: -21px;
  margin-top: -21px;
  z-index: 10;
  transform-origin: 50%;
  box-sizing: border-box;
  border: 4px solid #007aff;
  border: 4px solid var(--swiper-preloader-color, var(--swiper-theme-color));
  border-radius: 50%;
  border-top-color: transparent;
}

.swiper:not(.swiper-watch-progress) .swiper-lazy-preloader,
.swiper-watch-progress .swiper-slide-visible .swiper-lazy-preloader {
  animation: swiper-preloader-spin 1s infinite linear;
}

.swiper-lazy-preloader-white {
  --swiper-preloader-color: #fff;
}

.swiper-lazy-preloader-black {
  --swiper-preloader-color: #000;
}

@keyframes swiper-preloader-spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}

/* Slide styles end */

.swiper-virtual .swiper-slide {
  -webkit-backface-visibility: hidden;
  transform: translateZ(0);
}

.swiper-virtual.swiper-css-mode .swiper-wrapper::after {
  content: '';
  position: absolute;
  left: 0;
  top: 0;
  pointer-events: none;
}

.swiper-virtual.swiper-css-mode.swiper-horizontal .swiper-wrapper::after {
  height: 1px;
  width: var(--swiper-virtual-size);
}

.swiper-virtual.swiper-css-mode.swiper-vertical .swiper-wrapper::after {
  width: 1px;
  height: var(--swiper-virtual-size);
}

:root {
  --swiper-navigation-size: 44px;
  /*
  --swiper-navigation-top-offset: 50%;
  --swiper-navigation-sides-offset: 10px;
  --swiper-navigation-color: var(--swiper-theme-color);
  */
}

.swiper-button-prev,
.swiper-button-next {
  position: absolute;
  top: 50%;
  top: var(--swiper-navigation-top-offset, 50%);
  width: calc(44px / 44 * 27);
  width: calc(var(--swiper-navigation-size) / 44 * 27);
  height: 44px;
  height: var(--swiper-navigation-size);
  margin-top: calc(0px - (44px / 2));
  margin-top: calc(0px - (var(--swiper-navigation-size) / 2));
  z-index: 10;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #007aff;
  color: var(--swiper-navigation-color, var(--swiper-theme-color));
}

.swiper-button-prev.swiper-button-disabled,
.swiper-button-next.swiper-button-disabled {
  opacity: 0.35;
  cursor: auto;
  pointer-events: none;
}

.swiper-button-prev.swiper-button-hidden,
.swiper-button-next.swiper-button-hidden {
  opacity: 0;
  cursor: auto;
  pointer-events: none;
}

.swiper-navigation-disabled .swiper-button-prev,
.swiper-navigation-disabled .swiper-button-next {
  display: none !important;
}

.swiper-button-prev svg,
.swiper-button-next svg {
  width: 100%;
  height: 100%;
  -o-object-fit: contain;
     object-fit: contain;
  transform-origin: center;
}

.swiper-rtl .swiper-button-prev svg,
.swiper-rtl .swiper-button-next svg {
  transform: rotate(180deg);
}

.swiper-button-prev,
.swiper-rtl .swiper-button-next {
  left: 10px;
  left: var(--swiper-navigation-sides-offset, 10px);
  right: auto;
}

.swiper-button-next,
.swiper-rtl .swiper-button-prev {
  right: 10px;
  right: var(--swiper-navigation-sides-offset, 10px);
  left: auto;
}

.swiper-button-lock {
  display: none;
}

/* Navigation font start */

.swiper-button-prev:after,
.swiper-button-next:after {
  font-family: swiper-icons;
  font-size: 44px;
  font-size: var(--swiper-navigation-size);
  text-transform: none !important;
  letter-spacing: 0;
  font-feature-settings: ;
  font-variant: normal;
  font-variant: initial;
  line-height: 1;
}

.swiper-button-prev:after,
.swiper-rtl .swiper-button-next:after {
  content: 'prev';
}

.swiper-button-next,
.swiper-rtl .swiper-button-prev {
  right: 10px;
  right: var(--swiper-navigation-sides-offset, 10px);
  left: auto;
}

.swiper-button-next:after,
.swiper-rtl .swiper-button-prev:after {
  content: 'next';
}

/* Navigation font end */

:root {
  /*
  --swiper-pagination-color: var(--swiper-theme-color);
  --swiper-pagination-left: auto;
  --swiper-pagination-right: 8px;
  --swiper-pagination-bottom: 8px;
  --swiper-pagination-top: auto;
  --swiper-pagination-fraction-color: inherit;
  --swiper-pagination-progressbar-bg-color: rgba(0,0,0,0.25);
  --swiper-pagination-progressbar-size: 4px;
  --swiper-pagination-bullet-size: 8px;
  --swiper-pagination-bullet-width: 8px;
  --swiper-pagination-bullet-height: 8px;
  --swiper-pagination-bullet-border-radius: 50%;
  --swiper-pagination-bullet-inactive-color: #000;
  --swiper-pagination-bullet-inactive-opacity: 0.2;
  --swiper-pagination-bullet-opacity: 1;
  --swiper-pagination-bullet-horizontal-gap: 4px;
  --swiper-pagination-bullet-vertical-gap: 6px;
  */
}

.swiper-pagination {
  position: absolute;
  text-align: center;
  transition: 300ms opacity;
  transform: translate3d(0, 0, 0);
  z-index: 10;
}

.swiper-pagination.swiper-pagination-hidden {
  opacity: 0;
}

.swiper-pagination-disabled > .swiper-pagination,
.swiper-pagination.swiper-pagination-disabled {
  display: none !important;
}

/* Common Styles */

.swiper-pagination-fraction,
.swiper-pagination-custom,
.swiper-horizontal > .swiper-pagination-bullets,
.swiper-pagination-bullets.swiper-pagination-horizontal {
  bottom: 8px;
  bottom: var(--swiper-pagination-bottom, 8px);
  top: auto;
  top: var(--swiper-pagination-top, auto);
  left: 0;
  width: 100%;
}

/* Bullets */

.swiper-pagination-bullets-dynamic {
  overflow: hidden;
  font-size: 0;
}

.swiper-pagination-bullets-dynamic .swiper-pagination-bullet {
  transform: scale(0.33);
  position: relative;
}

.swiper-pagination-bullets-dynamic .swiper-pagination-bullet-active {
  transform: scale(1);
}

.swiper-pagination-bullets-dynamic .swiper-pagination-bullet-active-main {
  transform: scale(1);
}

.swiper-pagination-bullets-dynamic .swiper-pagination-bullet-active-prev {
  transform: scale(0.66);
}

.swiper-pagination-bullets-dynamic .swiper-pagination-bullet-active-prev-prev {
  transform: scale(0.33);
}

.swiper-pagination-bullets-dynamic .swiper-pagination-bullet-active-next {
  transform: scale(0.66);
}

.swiper-pagination-bullets-dynamic .swiper-pagination-bullet-active-next-next {
  transform: scale(0.33);
}

.swiper-pagination-bullet {
  width: 8px;
  width: var(--swiper-pagination-bullet-width, var(--swiper-pagination-bullet-size, 8px));
  height: 8px;
  height: var(--swiper-pagination-bullet-height, var(--swiper-pagination-bullet-size, 8px));
  display: inline-block;
  border-radius: 50%;
  border-radius: var(--swiper-pagination-bullet-border-radius, 50%);
  background: #000;
  background: var(--swiper-pagination-bullet-inactive-color, #000);
  opacity: 0.2;
  opacity: var(--swiper-pagination-bullet-inactive-opacity, 0.2);
}

button.swiper-pagination-bullet {
  border: none;
  margin: 0;
  padding: 0;
  box-shadow: none;
  -webkit-appearance: none;
          -moz-appearance: none;
       appearance: none;
}

.swiper-pagination-clickable .swiper-pagination-bullet {
  cursor: pointer;
}

.swiper-pagination-bullet:only-child {
  display: none !important;
}

.swiper-pagination-bullet-active {
  opacity: 1;
  opacity: var(--swiper-pagination-bullet-opacity, 1);
  background: #007aff;
  background: var(--swiper-pagination-color, var(--swiper-theme-color));
}

.swiper-vertical > .swiper-pagination-bullets,
.swiper-pagination-vertical.swiper-pagination-bullets {
  right: 8px;
  right: var(--swiper-pagination-right, 8px);
  left: auto;
  left: var(--swiper-pagination-left, auto);
  top: 50%;
  transform: translate3d(0px, -50%, 0);
}

.swiper-vertical > .swiper-pagination-bullets .swiper-pagination-bullet,
.swiper-pagination-vertical.swiper-pagination-bullets .swiper-pagination-bullet {
  margin: 6px 0;
  margin: var(--swiper-pagination-bullet-vertical-gap, 6px) 0;
  display: block;
}

.swiper-vertical > .swiper-pagination-bullets.swiper-pagination-bullets-dynamic,
.swiper-pagination-vertical.swiper-pagination-bullets.swiper-pagination-bullets-dynamic {
  top: 50%;
  transform: translateY(-50%);
  width: 8px;
}

.swiper-vertical > .swiper-pagination-bullets.swiper-pagination-bullets-dynamic .swiper-pagination-bullet,
.swiper-pagination-vertical.swiper-pagination-bullets.swiper-pagination-bullets-dynamic .swiper-pagination-bullet {
  display: inline-block;
  transition: 200ms transform, 200ms top;
}

.swiper-horizontal > .swiper-pagination-bullets .swiper-pagination-bullet,
.swiper-pagination-horizontal.swiper-pagination-bullets .swiper-pagination-bullet {
  margin: 0 4px;
  margin: 0 var(--swiper-pagination-bullet-horizontal-gap, 4px);
}

.swiper-horizontal > .swiper-pagination-bullets.swiper-pagination-bullets-dynamic,
.swiper-pagination-horizontal.swiper-pagination-bullets.swiper-pagination-bullets-dynamic {
  left: 50%;
  transform: translateX(-50%);
  white-space: nowrap;
}

.swiper-horizontal > .swiper-pagination-bullets.swiper-pagination-bullets-dynamic .swiper-pagination-bullet,
.swiper-pagination-horizontal.swiper-pagination-bullets.swiper-pagination-bullets-dynamic .swiper-pagination-bullet {
  transition: 200ms transform, 200ms left;
}

.swiper-horizontal.swiper-rtl > .swiper-pagination-bullets-dynamic .swiper-pagination-bullet {
  transition: 200ms transform, 200ms right;
}

/* Fraction */

.swiper-pagination-fraction {
  color: inherit;
  color: var(--swiper-pagination-fraction-color, inherit);
}

/* Progress */

.swiper-pagination-progressbar {
  background: rgba(0, 0, 0, 0.25);
  background: var(--swiper-pagination-progressbar-bg-color, rgba(0, 0, 0, 0.25));
  position: absolute;
}

.swiper-pagination-progressbar .swiper-pagination-progressbar-fill {
  background: #007aff;
  background: var(--swiper-pagination-color, var(--swiper-theme-color));
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  transform: scale(0);
  transform-origin: left top;
}

.swiper-rtl .swiper-pagination-progressbar .swiper-pagination-progressbar-fill {
  transform-origin: right top;
}

.swiper-horizontal > .swiper-pagination-progressbar,
.swiper-pagination-progressbar.swiper-pagination-horizontal,
.swiper-vertical > .swiper-pagination-progressbar.swiper-pagination-progressbar-opposite,
.swiper-pagination-progressbar.swiper-pagination-vertical.swiper-pagination-progressbar-opposite {
  width: 100%;
  height: 4px;
  height: var(--swiper-pagination-progressbar-size, 4px);
  left: 0;
  top: 0;
}

.swiper-vertical > .swiper-pagination-progressbar,
.swiper-pagination-progressbar.swiper-pagination-vertical,
.swiper-horizontal > .swiper-pagination-progressbar.swiper-pagination-progressbar-opposite,
.swiper-pagination-progressbar.swiper-pagination-horizontal.swiper-pagination-progressbar-opposite {
  width: 4px;
  width: var(--swiper-pagination-progressbar-size, 4px);
  height: 100%;
  left: 0;
  top: 0;
}

.swiper-pagination-lock {
  display: none;
}

:root {
  /*
  --swiper-scrollbar-border-radius: 10px;
  --swiper-scrollbar-top: auto;
  --swiper-scrollbar-bottom: 4px;
  --swiper-scrollbar-left: auto;
  --swiper-scrollbar-right: 4px;
  --swiper-scrollbar-sides-offset: 1%;
  --swiper-scrollbar-bg-color: rgba(0, 0, 0, 0.1);
  --swiper-scrollbar-drag-bg-color: rgba(0, 0, 0, 0.5);
  --swiper-scrollbar-size: 4px;
  */
}

.swiper-scrollbar {
  border-radius: 10px;
  border-radius: var(--swiper-scrollbar-border-radius, 10px);
  position: relative;
  touch-action: none;
  background: rgba(0, 0, 0, 0.1);
  background: var(--swiper-scrollbar-bg-color, rgba(0, 0, 0, 0.1));
}

.swiper-scrollbar-disabled > .swiper-scrollbar,
.swiper-scrollbar.swiper-scrollbar-disabled {
  display: none !important;
}

.swiper-horizontal > .swiper-scrollbar,
.swiper-scrollbar.swiper-scrollbar-horizontal {
  position: absolute;
  left: 1%;
  left: var(--swiper-scrollbar-sides-offset, 1%);
  bottom: 4px;
  bottom: var(--swiper-scrollbar-bottom, 4px);
  top: auto;
  top: var(--swiper-scrollbar-top, auto);
  z-index: 50;
  height: 4px;
  height: var(--swiper-scrollbar-size, 4px);
  width: calc(100% - 2 * 1%);
  width: calc(100% - 2 * var(--swiper-scrollbar-sides-offset, 1%));
}

.swiper-vertical > .swiper-scrollbar,
.swiper-scrollbar.swiper-scrollbar-vertical {
  position: absolute;
  left: auto;
  left: var(--swiper-scrollbar-left, auto);
  right: 4px;
  right: var(--swiper-scrollbar-right, 4px);
  top: 1%;
  top: var(--swiper-scrollbar-sides-offset, 1%);
  z-index: 50;
  width: 4px;
  width: var(--swiper-scrollbar-size, 4px);
  height: calc(100% - 2 * 1%);
  height: calc(100% - 2 * var(--swiper-scrollbar-sides-offset, 1%));
}

.swiper-scrollbar-drag {
  height: 100%;
  width: 100%;
  position: relative;
  background: rgba(0, 0, 0, 0.5);
  background: var(--swiper-scrollbar-drag-bg-color, rgba(0, 0, 0, 0.5));
  border-radius: 10px;
  border-radius: var(--swiper-scrollbar-border-radius, 10px);
  left: 0;
  top: 0;
}

.swiper-scrollbar-cursor-drag {
  cursor: move;
}

.swiper-scrollbar-lock {
  display: none;
}

/* Zoom container styles start */

.swiper-zoom-container {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.swiper-zoom-container > img,
.swiper-zoom-container > svg,
.swiper-zoom-container > canvas {
  max-width: 100%;
  max-height: 100%;
  -o-object-fit: contain;
     object-fit: contain;
}

/* Zoom container styles end */

.swiper-slide-zoomed {
  cursor: move;
  touch-action: none;
}

/* a11y */

.swiper .swiper-notification {
  position: absolute;
  left: 0;
  top: 0;
  pointer-events: none;
  opacity: 0;
  z-index: -1000;
}

.swiper-free-mode > .swiper-wrapper {
  transition-timing-function: ease-out;
  margin: 0 auto;
}

.swiper-grid > .swiper-wrapper {
  flex-wrap: wrap;
}

.swiper-grid-column > .swiper-wrapper {
  flex-wrap: wrap;
  flex-direction: column;
}

.swiper-fade.swiper-free-mode .swiper-slide {
  transition-timing-function: ease-out;
}

.swiper-fade .swiper-slide {
  pointer-events: none;
  transition-property: opacity;
}

.swiper-fade .swiper-slide .swiper-slide {
  pointer-events: none;
}

.swiper-fade .swiper-slide-active {
  pointer-events: auto;
}

.swiper-fade .swiper-slide-active .swiper-slide-active {
  pointer-events: auto;
}

.swiper-cube {
  overflow: visible;
}

.swiper-cube .swiper-slide {
  pointer-events: none;
  backface-visibility: hidden;
  z-index: 1;
  visibility: hidden;
  transform-origin: 0 0;
  width: 100%;
  height: 100%;
}

.swiper-cube .swiper-slide .swiper-slide {
  pointer-events: none;
}

.swiper-cube.swiper-rtl .swiper-slide {
  transform-origin: 100% 0;
}

.swiper-cube .swiper-slide-active,
.swiper-cube .swiper-slide-active .swiper-slide-active {
  pointer-events: auto;
}

.swiper-cube .swiper-slide-active,
.swiper-cube .swiper-slide-next,
.swiper-cube .swiper-slide-prev {
  pointer-events: auto;
  visibility: visible;
}

.swiper-cube .swiper-cube-shadow {
  position: absolute;
  left: 0;
  bottom: 0px;
  width: 100%;
  height: 100%;
  opacity: 0.6;
  z-index: 0;
}

.swiper-cube .swiper-cube-shadow:before {
  content: '';
  background: #000;
  position: absolute;
  left: 0;
  top: 0;
  bottom: 0;
  right: 0;
  filter: blur(50px);
}

.swiper-cube .swiper-slide-next + .swiper-slide {
  pointer-events: auto;
  visibility: visible;
}

/* Cube slide shadows start */

.swiper-cube .swiper-slide-shadow-cube.swiper-slide-shadow-top,
.swiper-cube .swiper-slide-shadow-cube.swiper-slide-shadow-bottom,
.swiper-cube .swiper-slide-shadow-cube.swiper-slide-shadow-left,
.swiper-cube .swiper-slide-shadow-cube.swiper-slide-shadow-right {
  z-index: 0;
  backface-visibility: hidden;
}

/* Cube slide shadows end */

.swiper-flip {
  overflow: visible;
}

.swiper-flip .swiper-slide {
  pointer-events: none;
  backface-visibility: hidden;
  z-index: 1;
}

.swiper-flip .swiper-slide .swiper-slide {
  pointer-events: none;
}

.swiper-flip .swiper-slide-active,
.swiper-flip .swiper-slide-active .swiper-slide-active {
  pointer-events: auto;
}

/* Flip slide shadows start */

.swiper-flip .swiper-slide-shadow-flip.swiper-slide-shadow-top,
.swiper-flip .swiper-slide-shadow-flip.swiper-slide-shadow-bottom,
.swiper-flip .swiper-slide-shadow-flip.swiper-slide-shadow-left,
.swiper-flip .swiper-slide-shadow-flip.swiper-slide-shadow-right {
  z-index: 0;
  backface-visibility: hidden;
}

/* Flip slide shadows end */

.swiper-creative .swiper-slide {
  backface-visibility: hidden;
  overflow: hidden;
  transition-property: transform, opacity, height;
}

.swiper-cards {
  overflow: visible;
}

.swiper-cards .swiper-slide {
  transform-origin: center bottom;
  backface-visibility: hidden;
  overflow: hidden;
}
`;
styleInject(css_248z);

class PlayerCard extends s {
	static get properties() {
		return {
			hass: { type: Object },
			player: { type: Object },
			toggleBrowserMedia: { type: Object },
			progress: { type: Number }, // Current media progress
			mediaPosition: { type: Number }, // Current media position
			mediaDuration: { type: Number }, // Total media duration
			movies: { type: Array }, // List of movies
			newPosterUrl: { type: String }, // URL of the movie poster
			remoteActive: { type: Boolean }, // Flag to indicate if remote is active
			touchPadActive: { type: Boolean }, // Flag to indicate if touchpad is active
			isMuted: { type: Boolean }, // Flag to indicate if the player is muted
		};
	}

	static get styles() {
		return [css_248z$1];
	}

	constructor() {
		super();
		this.player = {};
		this.progress = 0;
		this.mediaPosition = 0;
		this.mediaDuration = 0;
		this._animationFrameId = null; // Animation frame ID for progress update
		this.newPosterUrl = '';
		this.remoteActive = false;
		this.touchPadActive = false;
		this.isMuted = false;
	}

	setupTouchPadListener() {
		console.log('Setting up touchpad listener');
		const touchPad = this.shadowRoot.querySelector('.touch-pad');
		console.log('touchPad', touchPad);

		let xDown, yDown, xDiff, yDiff;
		let is_swipe = false;
		let tapTimeout;

		const doubleTapThreshold = 300; // Time threshold for detecting double tap (in milliseconds)

		const pressDown = (e) => {
			e.preventDefault();
			if (tapTimeout) {
				// If there's a pending tapTimeout, it's a double tap
				clearTimeout(tapTimeout);
				tapTimeout = null;
				console.log('Double tap detected');
				this.player.sendKey(e, 'back');
			} else {
				tapTimeout = setTimeout(() => {
					tapTimeout = null;
					xDown = e.clientX || e.touches[0].clientX;
					yDown = e.clientY || e.touches[0].clientY;
					touchPad.addEventListener('mousemove', pressMove);
					touchPad.addEventListener('touchmove', pressMove);
					touchPad.addEventListener('touchend', pressRelease);
					touchPad.addEventListener('mouseup', pressRelease, false);
				}, doubleTapThreshold);
			}
		};

		const pressMove = (e) => {
			if (xDown && yDown) {
				xDiff = xDown - (e.clientX || e.touches[0].clientX);
				yDiff = yDown - (e.clientY || e.touches[0].clientY);
			}
			if (Math.abs(xDiff) > 1 || Math.abs(yDiff) > 1) {
				is_swipe = true;
			}
		};

		const pressRelease = (e) => {
			touchPad.removeEventListener('mousemove', pressMove);
			touchPad.removeEventListener('touchmove', pressMove);
			touchPad.removeEventListener('touchend', pressRelease);
			touchPad.removeEventListener('mouseup', pressRelease);
			console.log('Press release');

			if (is_swipe) {
				console.log('Swipe detected');
				if (Math.abs(xDiff) > Math.abs(yDiff)) {
					if (xDiff > 0) {
						console.log('Swipe left');
						this.player.sendKey(e, 'left');
					} else {
						console.log('Swipe right');
						this.player.sendKey(e, 'right');
					}
				} else {
					if (yDiff > 0) {
						console.log('Swipe up');
						this.player.sendKey(e, 'up');
					} else {
						console.log('Swipe down');
						this.player.sendKey(e, 'down');
					}
				}
				xDown = null;
				yDown = null;
				xDiff = null;
				yDiff = null;
				is_swipe = false;
			} else {
				this.player.sendKey(e, 'select');
			}
		};

		['mousedown', 'touchstart'].forEach((event) => {
			touchPad.addEventListener(event, pressDown);
		});
	}

	// Callback when the element is added to the DOM
	connectedCallback() {
		super.connectedCallback();
		this._startProgressUpdate();
		this.getNowPlayingPicture();
	}

	// Callback when the element is removed from the DOM
	disconnectedCallback() {
		super.disconnectedCallback();
		if (this._animationFrameId) {
			cancelAnimationFrame(this._animationFrameId); // Cancel progress update animation frame
		}
	}

	updated(changedProperties) {
		super.updated(changedProperties);
		if (changedProperties.has('progress')) {
			// Log to see what's being received
			this._startProgressUpdate();
		}
		if (changedProperties.has('player')) {
			this.getNowPlayingPicture();
		}

		if (changedProperties.has('touchPadActive')) {
			if (this.touchPadActive) {
				this.setupTouchPadListener();
			}
		}
	}

	get maxVol() {
		return 100;
	}

	get minVol() {
		return 0;
	}

	get vol() {
		return Math.round(this.player.volume * 100);
	}

	async getNowPlayingPicture() {
		if (this.player && !this.player.picture) {
			const title = this.player.primaryTitle;
			const posterUrl = await this.getBackdropUrl(title);
			this.newPosterUrl = posterUrl;
		} else {
			this.newPosterUrl = this.player.picture;
		}
	}

	getBackdropUrl(movieTitle) {
		if (!movieTitle) return;
		//
		const moviesArray = this.movies;
		const movieToFind = movieTitle.toLowerCase();

		for (const movie of moviesArray) {
			if (movie.title.toLowerCase() === movieToFind) {
				return movie.backdrop_url;
			}
		}
	}

	// Method to start updating progress
	_startProgressUpdate() {
		const updateProgress = () => {
			if (this.player.showProgress) {
				// Extracting media information from Home Assistant state

				const media_position = this.player.position;
				const media_position_updated_at = this.player.updatedAt;
				const media_duration = this.player.mediaDuration;
				let percentage = 0;
				let updatedPosition = media_position;
				if (this.player.isPlaying) {
					// Calculating progress percentage when media is playing
					const updatedAt = new Date(media_position_updated_at).getTime() / 1000;
					const now = Date.now() / 1000;
					const elapsedTime = now - updatedAt;
					updatedPosition = media_position + elapsedTime;
					percentage = (updatedPosition / media_duration) * 100;
				} else if (this.player.isPaused) {
					// Calculating progress percentage when media is paused
					percentage = (media_position / media_duration) * 100;
				}
				// Updating properties
				this.progress = Math.min(percentage.toFixed(1), 100);
				this.mediaPosition = updatedPosition;
				this.mediaDuration = media_duration;
				this.requestUpdate(); // Requesting update to render changes
			}
			this._animationFrameId = requestAnimationFrame(updateProgress); // Scheduling next frame update
		};
		this._animationFrameId = requestAnimationFrame(updateProgress); // Starting the update loop
		this.requestUpdate(); // Requesting update to render changes
	}

	// Method to format time in MM:SS format
	_formatTime(seconds) {
		const pad = (num) => num.toString().padStart(2, '0');
		const minutes = pad(Math.floor(seconds / 60));
		const secondsLeft = pad(Math.floor(seconds % 60));
		return `${minutes}:${secondsLeft}`;
	}

	render() {
		if (!this.player || !this.player.isActive) {
			return this._renderNotActive();
		}
		return x`
			<div class="player">
				<div class="background"></div>
				${this.renderDefaultContent()}${this._renderRemoteControl()}
			</div>
		`;
	}

	renderDefaultContent() {
		return x`
			<div class="content">
				<div class="now-playing">
					${this._renderNowPlaying()} ${this._renderProgresBar()}
					<div class="control-up">${this._renderVolSlider()}</div>
				</div>
			</div>
		`;
	}

	_renderControlRow() {
		if (this.player.isOff) return x``;
		return x`
			<div class="control-row">
				${this._renderRemoteBtn()} ${this._renderTouchPadBtn()} ${this._renderBackward()}
				${this._renderPlayPause()} ${this._renderStopBtn()} ${this._renderForward()}
			</div>
		`;
	}

	toggleRemote() {
		this.remoteActive = !this.remoteActive;
	}

	toggleTouchPad() {
		if (!this.remoteActive) {
			this.toggleRemote();
		}
		this.touchPadActive = !this.touchPadActive;
	}

	_renderTouchPadBtn() {
		return x`<ha-icon @click=${() => this.toggleTouchPad()} .icon=${HAICON.TOUCHPAD}></ha-icon>`;
	}

	_renderTouchPadArea() {
		return x`
			<div class="touch-pad ${this.touchPadActive ? 'show' : ''} ">
				<ha-icon class="touch-up" .icon=${HAICON.TOUCH.UP}></ha-icon>
				<ha-icon class="touch-down" .icon=${HAICON.TOUCH.DOWN}></ha-icon>
				<ha-icon class="touch-left" .icon=${HAICON.TOUCH.LEFT}></ha-icon>
				<ha-icon class="touch-right" .icon=${HAICON.TOUCH.RIGHT}></ha-icon>
				<div class="touch-center"></div>
			</div>
		`;
	}

	_renderRemoteControl() {
		return x`
			<div class="remote-control ${this.remoteActive ? 'active' : ''}">
				${this._renderTouchPadArea()}
				<div class="control-pad ${this.touchPadActive ? 'hidden' : ''}">
					<div class="pad-row">
						<div class="ctl-btn" @click=${(e) => this.player.homeScreen(e)}>
							<ha-icon .icon="${HAICON.HOME}"></ha-icon>
						</div>
						<div class="ctl-btn secondary top" @click=${(e) => this.player.sendKey(e, 'up')}>
							<ha-icon .icon="${HAICON.PAD.UP}"></ha-icon>
						</div>
						<div class="ctl-btn" @click=${(e) => this.player.sendKey(e, 'info')}>
							<ha-icon .icon="${HAICON.PAD.INFO}"></ha-icon>
						</div>
					</div>
					<div class="pad-row">
						<div class="ctl-btn secondary left" @click=${(e) => this.player.sendKey(e, 'left')}>
							<ha-icon .icon="${HAICON.PAD.LEFT}"></ha-icon>
						</div>
						<div class="ctl-btn secondary center" @click=${(e) => this.player.sendKey(e, 'select')}>
							<ha-icon .icon="${HAICON.PAD.CIRCLE}"></ha-icon>
						</div>
						<div class="ctl-btn secondary right" @click=${(e) => this.player.sendKey(e, 'right')}>
							<ha-icon .icon="${HAICON.PAD.RIGHT}"></ha-icon>
						</div>
					</div>
					<div class="pad-row">
						<div class="ctl-btn" @click=${(e) => this.player.sendKey(e, 'back')}>
							<ha-icon .icon="${HAICON.PAD.BACK}"></ha-icon>
						</div>
						<div class="ctl-btn secondary bottom" @click=${(e) => this.player.sendKey(e, 'down')}>
							<ha-icon .icon="${HAICON.PAD.DOWN}"></ha-icon>
						</div>
						<div class="ctl-btn" @click=${(e) => this.player.sendKey(e, 'contextmenu')}>
							<ha-icon .icon="${HAICON.PAD.MENU}"></ha-icon>
						</div>
					</div>
				</div>
			</div>
			${this._renderControlRow()}
		`;
	}

	_renderNowPlaying() {
		if (this.player.isIdle) return T;
		const pictuteEl = !this.newPosterUrl
			? x`<div class="loader"></div>`
			: x`<img src="${this.newPosterUrl}" />`;
		return x`
			<div class="entity-picture" @click="${(e) => this.player.playPause(e)}">
				${pictuteEl}
				<div class="media-info ">
					<span>${this.player.primaryTitle}</span>
					<span>${this.player.secondaryTitle}</span>
				</div>
				<div class="media-pause ${this.player.isPaused ? '' : 'hidden'}">
					<a @click=${(e) => this.player.playPause(e)}></a>
				</div>
				<div class="media-playing ${this.player.isPlaying ? 'active' : 'hidden'}">
					<ha-state-icon
						.hass=${this.hass}
						.state=${this.player._stateObj}
						.stateObj=${this.player._stateObj}
						@click=${(e) => this.player.moreInfo(e, this)}>
					</ha-state-icon>
				</div>
			</div>
		`;
	}

	_renderVolBtns() {
		return x`
			<ha-icon
				@click=${(e) => this.player.sendKey(e, 'volumedown')}
				.icon="${HAICON.VOL_DOWN}"></ha-icon>
			<ha-icon
				@click=${(e) => this.player.sendKey(e, 'volumeup')}
				.icon="${HAICON.VOL_UP}"></ha-icon>
		`;
	}

	_renderVolSlider() {
		return x`
			${this._renderMuted()}
			<ha-icon
				@click=${(e) => this.player.sendKey(e, 'volumedown')}
				.icon="${HAICON.VOL_DOWN}"></ha-icon>
			<ha-slider
				@change=${this.handleVolumeChange}
				@click=${(e) => e.stopPropagation()}
				?disabled=${this.player.muted}
				min=${this.minVol}
				max=${this.maxVol}
				value=${this.player.volume * 100}
				step=${1}
				dir=${'ltr'}
				ignore-bar-touch
				pin
				labeled>
			</ha-slider>
			<ha-icon
				@click=${(e) => this.player.sendKey(e, 'volumeup')}
				.icon="${HAICON.VOL_UP}"></ha-icon>
		`;
	}

	handleVolumeChange(ev) {
		const vol = parseFloat(ev.target.value) / 100;
		this.player.setVolume(ev, vol);
	}

	_renderProgresBar() {
		if (!this.player.showProgress) return x``;

		const formattedPosition = this._formatTime(this.mediaPosition); // Format media position
		const formattedDuration = this._formatTime(this.mediaDuration); // Format  media duration
		return x`
			<div class="progress-info">
				<div class="progress-bar">
					<div id="progress" style="width: ${this.progress}%"></div>
				</div>
				<div class="time-info">
					<span>${formattedPosition}</span>
					<span>${formattedDuration}</span>
				</div>
			</div>
		`;
	}

	_renderNotActive() {
		const isIdle = this.player.isIdle;
		return x` <div class="not-active ${isIdle ? 'idle' : ''}">
			<div class="top-info">
				<div class="icon-name">
					<ha-state-icon
						.hass=${this.hass}
						.state=${this.player._stateObj}
						.stateObj=${this.player._stateObj}
						@click=${(e) => this.player.moreInfo(e, this)}>
					</ha-state-icon>
					<div class="player-name">
						<span>${this.player.name}</span>
						<span class="entity-state">${this.player.stateStr}</span>
					</div>
				</div>
				<div class="more-info-state">
					${isIdle
						? x`<ha-icon @click=${this.toggleBrowserMedia} .icon=${HAICON.BROWSEMEDIA}></ha-icon>
								${this._renderRemoteBtn()}`
						: x`<ha-icon @click=${(e) => this.player.power(e)} .icon=${HAICON.POWER}></ha-icon>`}
				</div>
			</div>
			${this._renderRemoteControl()}
		</div>`;
	}

	_renderRemoteBtn() {
		return x` <ha-icon @click=${() => this.toggleRemote()} .icon=${HAICON.REMOTE}></ha-icon>`;
	}

	_renderMuted() {
		return x` ${this.player.muted
			? x`<ha-icon
					style="color: var(--gray)"
					@click=${(e) => this.player.toggleMute(e)}
					.icon=${HAICON.MUTE.true}></ha-icon>`
			: x`<ha-icon
					@click=${(e) => this.player.toggleMute(e)}
					.icon=${HAICON.MUTE.false}></ha-icon>`}`;
	}

	_renderPlayPause() {
		return x`
			${this.player.isPlaying
				? x` <ha-icon
						@click=${(e) => this.player.pause(e)}
						.icon="${HAICON.PLAY.true}"></ha-icon>`
				: x` <ha-icon
						@click=${(e) => this.player.play(e)}
						.icon="${HAICON.PLAY.false}"></ha-icon>`}
		`;
	}

	_renderStopBtn() {
		return x` <ha-icon @click=${(e) => this.player.stop(e)} .icon=${HAICON.STOP.true}>
		</ha-icon>`;
	}

	_renderBackward() {
		return x`<ha-icon @click="${() => this.player.seekBackward()}" .icon="${HAICON.REWIND}">
		</ha-icon>`;
	}

	_renderForward() {
		return x`<ha-icon @click="${() => this.player.seekForward()}" .icon="${HAICON.FAST_FORWARD}">
		</ha-icon> `;
	}

	_renderPlayButtons() {
		return x` ${this.player.isActive
			? this.player.isPlaying
				? x`
						<ha-icon @click=${(e) => this.player.play(e)} .icon=${ICON.PLAY.false}> </ha-icon>
						<ha-icon @click=${(e) => this.player.pause(e)} .icon=${ICON.PLAY.true}> </ha-icon>
					`
				: x`
						<ha-icon
							@click=${(e) => this.player.playPause(e)}
							.icon=${ICON.PLAY[this.player.isPlaying]}>
						</ha-icon>
					`
			: x``}`;
	}
}
// Registering the custom element
customElements.define('player-card', PlayerCard);

if (!customElements.get('ha-slider')) {
	customElements.define('ha-slider', class extends customElements.get('paper-slider') {});
}

if (!customElements.get('ha-icon-button')) {
	customElements.define('ha-icon-button', class extends customElements.get('paper-icon-button') {});
}

if (!customElements.get('ha-icon')) {
	customElements.define('ha-icon', class extends customElements.get('iron-icon') {});
}

class MovieLibraryPanel extends KodiSection(s) {
	static get properties() {
		return {
			_hass: {},
			_config: {},
			_kodiSocket: { type: Object },
			selectedPlayer: { type: Object },
			players: { type: Array },
			kodiAllMovies: { type: Array },
			kodiRecentlyMovies: { type: Array },
			kodiRandomMovies: { type: Array },
			kodiSearchResults: { type: Array },
			inCinemaMovies: { type: Array },
			trendingMovies: { type: Array },
			upcomingMovies: { type: Array },
			filteredMovies: { type: Array },
			activePlayers: { type: Array },
			isSearchActive: { type: Boolean },
			isPlayerActive: { type: Boolean },
			isKodiLibrary: { type: Boolean },
			isBrowserMedia: { type: Boolean },
			isOffCanvasOpen: { type: Boolean },
			isKodiMoviesLoaded: { type: Boolean },
			isTmdbMoviesLoaded: { type: Boolean },
			isLocal: { type: Boolean },
			itemsPerPage: { type: Number },
			itemsPerSection: { type: Number },
			selectedMovies: { type: Array },
			activeTab: { type: String },
			oldHeaderBg: { type: String },
		};
	}

	static get styles() {
		return [css_248z$1, css_248z];
	}

	constructor() {
		super();
		this.search = '';
		this.currentPage = 1;
		this.currentSectionPages = {
			'in-library': 1,
			discover: 1,
		};

		this.initializeProps();
		loadStyles();
		this.selectedMovies = this.inCinemaMovies;
		this.selectedPlayer = {};
		this.oldHeaderBg = getHeaderBg();
	}

	set hass(hass) {
		this._hass = hass;
		if (this._config && this._config.players) {
			this.initializePlayers();
		}
	}

	// Method to set configuration
	setConfig(config) {
		if (!config) {
			throw new Error('Card config incorrect');
		}
		this._config = config;
		this._entity = this._config.entity;
		this.tmdbApi = this._config.tmdbapi || '62dce7dcd2282d8e5f63556d214eaa74';
		this.kodiWebSocketUrl = this._config.kodiwebsocket || 'ws://192.168.0.13:9090/jsonrpc';
		this.kodiHttpUrl = this._config.kodihttp || 'https://kodi.neklanka.win/jsonrpc';
	}

	firstUpdated() {
		super.firstUpdated();
		this.getTmdbMovies();
		this.handleResize();
		scrollBackToTop(this);
		this.setupMenuListeners();
		this.setupOffCanvasListeners();
	}

	connectedCallback() {
		super.connectedCallback();
		window.MoviePanel = this;

		// Initialize the Kodi socket connection
		this.isLocal = window.location.host === 'http:';
		this._kodiSocket = new KodiCommunication(
			this.kodiWebSocketUrl,
			this.kodiHttpUrl,
			this.handleKodiMessage.bind(this),
			this.isLocal,
		);

		setHeaderStyles(this);
		this.setupEventListeners();
		this.loadScrollbarCss();
	}

	disconnectedCallback() {
		super.disconnectedCallback();
		// Clean up WebSocket connection when component is removed
		if (this._kodiSocket && this._kodiSocket.socket) {
			this._kodiSocket.socket.close();
		}
		this.setOldHeaderBg();
		this.removeScrollbarCss();
		this.removeEventListeners();
	}

	updated(changedProperties) {
		super.updated(changedProperties);

		if (changedProperties.has('isBrowserMedia') && this.isBrowserMedia) {
			this.setupDropdownListeners();
		}

		if (changedProperties.has('isKodiLibrary') && this.isKodiLibrary) {
			this.setupDropdownListeners();
			this.changeBackgroundImage();
		}
	}

	shouldUpdate(changedProperties) {
		if (changedProperties.has('isKodiLibrary') && !this.isKodiLibrary) {
			const wrapper = this.shadowRoot.querySelector('.wrapper');
			if (wrapper) {
				wrapper.style.backgroundImage = '';
			}
		}
		if (changedProperties.has('isOffCanvasOpen') && !this.isOffCanvasOpen) {
			setTimeout(() => {
				setHeaderStyles(this);
			}, 500);
		}

		if (changedProperties.has('isKodiLibrary') && (this.isKodiLibrary || !this.isKodiLibrary)) {
			this.updateComplete.then(() => {
				setTimeout(() => {
					initializeSwipers(this);
				}, 1000);
			});
		}

		return true;
	}

	/* ----------------------------- SETUP LISTENERS ---------------------------- */

	setupEventListeners() {
		const listeners = [
			{ event: 'play-media', handler: this.playMovie },
			{ event: 'reset-search', handler: this.resetSearch },
			{ event: 'remote-dialog', handler: this.toggleRemoteDialog },
		];

		listeners.forEach(({ event, handler }) => {
			this.addEventListener(event, handler);
		});
		window.addEventListener('resize', (e) => this.handleResize(e));
	}

	removeEventListeners() {
		const listeners = [
			{ event: 'play-media', handler: this.playMovie },
			{ event: 'reset-search', handler: this.resetSearch },
			{ event: 'remote-dialog', handler: this.toggleRemoteDialog },
		];

		listeners.forEach(({ event, handler }) => {
			this.removeEventListener(event, handler);
		});
		window.removeEventListener('resize', this.handleResize);
	}

	/* ----------------------------- INITIALIZE DATA ---------------------------- */

	initializeProps() {
		const props = [
			'activeGenre',
			'activeYear',
			'activeMpaa',
			'activeCountry',
			'activePlayers',
			'filteredMovies',
			'kodiRecentlyMovies',
			'kodiAllMovies',
			'kodiRandomMovies',
			'kodiSearchResults',
			'inCinemaMovies',
			'trendingMovies',
			'upcomingMovies',
			'searchResults',
		];

		props.forEach((prop) => {
			this[prop] = [];
		}); // Initialize all properties to empty arrays

		const booleansProps = [
			'isSearchActive',
			'isKodiLibrary',
			'isBrowserMedia',
			'isDialogOpen',
			'isOffCanvasOpen',
			'isKodiMoviesLoaded',
			'isTmdbMoviesLoaded',
			'isPlayerActive',
		];
		booleansProps.forEach((prop) => {
			this[prop] = false;
		}); // Initialize all boolean properties to false
	}

	initializePlayers() {
		if (!this._config && !this._config.players) return;

		this.players = this._config.players.map((player) => {
			return new KodiPlayerObject(this._hass, this._hass.states[player]);
		});
		this.updateActivePlayers();
	}

	updateActivePlayers() {
		this.activePlayers = this.players.filter(
			(player) => player.stateStr !== 'off' && player.stateStr !== 'unavailable',
		);
	}

	/* ------------------------- KODI LIBRARY DATA ------------------------ */

	async handleKodiMessage(message) {
		const messageActions = {
			'recently-added': this.processMovies,
			'all-movies': this.processMovies,
			'search-movies': this.processMovies,
			'random-movies': this.processMovies,
		};

		const action = messageActions[message.id];
		if (action) {
			try {
				await action.call(this, message.result.movies, message.id);
				this.isKodiMoviesLoaded = true;
				this.checkAndMergeData();
				this.requestUpdate();
			} catch (error) {
				console.error('Error processing message:', message.id, error);
			}
		} else {
			console.error('Unhandled message:', message);
		}
	}

	async processMovies(movies, type) {
		const processMovieDetails = async (movie) => {
			const tmdbId = movie.uniqueid?.tmdb;
			movie.movieid;
			const addedDate = formatReleaseDate(movie.dateadded);
			const localstrm = getEncodedUrl(movie.file);

			try {
				const tmdbDetails = tmdbId ? await getBasicDetails(tmdbId, this.tmdbApi) : {};
				return {
					title: movie.title,
					strm_url: localstrm,
					local_stream: localstrm,
					file: movie.file,
					release_date: addedDate,
					tmdbId,
					...tmdbDetails,
					...movie,
				};
			} catch (error) {
				console.error('Failed to fetch TMDB details for:', movie.title, error);
				return {
					title: movie.title,
					strm_url: localstrm,
					file: movie.file,
					release_date: addedDate,
					local_stream: localstrm,
					...movie,
				};
			}
		};

		try {
			const moviesWithDetails = await Promise.all(movies.map(processMovieDetails));
			const isSearchActive = type === 'search-movies';
			this[
				`kodi${type.split('-')[0].charAt(0).toUpperCase() + type.split('-')[0].slice(1)}Movies`
			] = moviesWithDetails;
			this.isSearchActive = isSearchActive;

			if (type === 'search-movies' && moviesWithDetails.length === 0) {
				launch_toast(this.shadowRoot, 'No search results found.');
				this.resetSearch();
			}
		} catch (error) {
			console.error('Failed to process movies:', error);
		}
	}

	/* -------------------------- FETCH API MOVIES DATA ------------------------- */

	async getTmdbMovies() {
		if (!this.tmdbApi) {
			console.error('API Key is not set');
			return;
		}

		try {
			// Fetch all data in parallel
			const [movies, cinemaMovies, trendingMovies] = await Promise.all([
				getUpcomingMovies(this.tmdbApi),
				getInCinemaResults(this.tmdbApi),
				trendingMoviesDetails(this.tmdbApi),
			]);

			// Assign the fetched data to component properties
			this.upcomingMovies = movies;
			this.inCinemaMovies = cinemaMovies;
			this.trendingMovies = trendingMovies;
			this.isTmdbMoviesLoaded = true;
			this.selectedMovies = this.inCinemaMovies;
		} catch (error) {
			console.error('Error fetching movie data:', error);
		}
	}

	async checkAndMergeData() {
		if (this.isKodiMoviesLoaded && this.isTmdbMoviesLoaded) {
			const updatedMovies = await this.updateMultipleMoviesWithKodiIds([
				this.inCinemaMovies,
				this.upcomingMovies,
				this.trendingMovies,
			]);
			[this.inCinemaMovies, this.upcomingMovies, this.trendingMovies] = updatedMovies;
		}
		this.requestUpdate();
	}

	async updateMultipleMoviesWithKodiIds(movieArrays) {
		const tmdbIdMap = new Map(
			this.kodiAllMovies.map((kodiMovie) => [kodiMovie.id, kodiMovie.strm_url]),
		);

		const processMoviesWithKodiIds = async (movies) => {
			return Promise.all(
				movies.map(async (movie) => {
					const kodiMovieId = tmdbIdMap.get(movie.id);
					return kodiMovieId ? { ...movie, strm_url: kodiMovieId } : movie;
				}),
			);
		};

		return Promise.all(movieArrays.map(processMoviesWithKodiIds));
	}

	/* -------------------------------------------------------------------------- */
	/*                              MAIN PAGE RENDER                              */
	/* -------------------------------------------------------------------------- */

	render() {
		return x`
			<div class="wrapper ${this.isKodiLibrary ? 'kodi' : ''}">
				${this._renderHeaderWrap()}
				<main class=${!this.isKodiLibrary ? 'main-page' : 'main-kodi'}>
					${this._renderFeaturedSwiper()} ${this._renderTrendingSwiper()}
					<div class="container">
						<div class="aside-wrapper ${!this.isKodiLibrary ? 'home-page' : 'kodi-lib'}">
							${!this.isKodiLibrary ? this._renderHomepage() : this._renderKodiLibrary()}
						</div>
					</div>
				</main>
				${this._renderProgressBtn()}${this._renderDialog()} ${this._renderRemoteDialog()}
				${!this.isDialogOpen ? renderToast() : T}
			</div>
			${this._renderOffCanvas()}
		`;
	}

	/* ----------------------------- SECTION RENDER ----------------------------- */

	_renderSection(sectionTitle, icon, movies, kodiTabs = true, kodilib = true) {
		const sectionId = sectionTitle.toLowerCase().replace(/\s/g, '-');

		const currentPage = this.currentSectionPages[sectionId] || 1;

		const startIndex = (currentPage - 1) * this.itemsPerSection;
		const endIndex = startIndex + this.itemsPerSection;
		const moviesToRender = movies.slice(startIndex, endIndex);

		const renderedMovies = renderMovies(
			moviesToRender,
			(movie) => this.showMovieDetailsDialog(movie),
			this,
			kodilib,
		);

		const sectionTabs = x`<div class="tabs">
			<span class="tab active" @click=${() => this.switchMovies('in-cinema-movies')}>Cinema</span>
			<span class="tab" @click=${() => this.switchMovies('trending-movies')}>Trending</span>
			<span class="tab" @click=${() => this.switchMovies('upcoming-movies')}>Upcoming</span>
		</div>`;
		const kodiSectionTabs = x`<div class="tabs">
			<span class="tab" @click=${() => (this.isBrowserMedia = !this.isBrowserMedia)}>All</span>
		</div>`;

		const sectionPagination = this._renderSectionPagination(movies, sectionId);

		return x`
			<section id="${sectionId}">
				<div class="head">
					<div class="start">
						<h2 class="title"><i>${icon}</i> ${sectionTitle}</h2>
					</div>
					<div class="end">${kodiTabs ? kodiSectionTabs : sectionTabs}</div>
				</div>
				<div class="tab-content">
					<div class="movies items">${renderedMovies}</div>
					<div class="bottom">${sectionPagination}</div>
				</div>
			</section>
		`;
	}

	_renderSectionPagination(movies, sectionId) {
		const totalPages = Math.ceil(movies.length / this.itemsPerSection);
		const currentPage = this.currentSectionPages[sectionId];
		const totalItems = movies.length;
		// Calculate the starting index of items on the current page
		(currentPage - 1) * this.itemsPerSection + 1;

		// Calculate the ending index of items on the current page
		const endItem = Math.min(currentPage * this.itemsPerSection, totalItems);

		// Determine the number of items currently displayed

		// Prepare summary text showing the range of items currently displayed out of total items
		const summaryText = `${endItem}/${totalItems}`;
		const handleNextPage = () => {
			if (currentPage < totalPages) {
				this.currentSectionPages[sectionId]++;
				this.requestUpdate();
				scrollIntoView();
			}
		};

		const handlePrevPage = () => {
			if (currentPage > 1) {
				this.currentSectionPages[sectionId]--;
				this.requestUpdate();
				scrollIntoView();
			}
		};

		const scrollIntoView = () => {
			const section = this.shadowRoot.querySelector(`#${sectionId}`);
			if (section) {
				section.scrollIntoView({ behavior: 'smooth', block: 'center' });
			}
		};

		return x`
			<div class="tabs">
				<span class="tab ${currentPage === 1 ? 'disabled' : ''}" @click=${handlePrevPage}>
					<i>${ICON.ARROW_LEFT_FILLED}</i>
				</span>
				<span class="tab disabled">${summaryText}</span>
				<span class="tab ${currentPage === totalPages ? 'disabled' : ''}" @click=${handleNextPage}>
					<i>${ICON.ARROW_RIGHT_FILLED}</i>
				</span>
			</div>
		`;
	}

	_renderOffCanvas() {
		return x` <div id="mySidenav" class="sidenav">
			<div class="offcanvas-close">&times;</div>
			<div class="player-offcanvas">${this._renderPlayers()}</div>
		</div>`;
	}

	_renderHomepage() {
		if (this.isSearchActive) {
			return this._renderSearchResults();
		}

		const _renderMainSection = x`<aside class="main">
			${this._renderSection('In Library', ICON.MOVIE, this.kodiRecentlyMovies, true, false)}
			${this._renderSection('Discover', ICON.CINEMA, this.selectedMovies, false, true)}
		</aside>`;

		const activePlayers =
			this.activePlayers && this.activePlayers.length > 0
				? x`<section class="mb-5">
						<div class="head">
							<div class="start">
								<h2 class="title"><i>${ICON.TV}</i> Active Player</h2>
							</div>
						</div>
						${this._renderActivePlayer()}
					</section>`
				: x``;

		return x` ${!this.isBrowserMedia ? _renderMainSection : this._renderKodiMain()}
			<aside class="sidebar">
				${activePlayers}
				<section class="mb-5">
					${renderSidebarMovies(
						this.upcomingMovies.slice(0, 9),
						(movie) => this.showMovieDetailsDialog(movie, true),
						'Upcoming movies',
						false)}
				</section>
			</aside>`;
	}

	_renderSearchResults() {
		const searchStr = this.search.trim();
		const resultsFound = this.searchResults.length + this.kodiSearchResults.length;
		return x`${!this.searchResults || !this.kodiSearchResults
			? renderLoader()
			: renderSearchResults(
					this,
					this.kodiSearchResults,
					this.searchResults,
					searchStr,
					resultsFound,
					renderMovies(
						this.searchResults,
						(movie) => this.showMovieDetailsDialog(movie),
						false,
						this,
					),
					renderMovies(
						this.kodiSearchResults,
						(movie) => this.showMovieDetailsDialog(movie),
						false,
						this,
					),
				)}`;
	}

	_renderTrendingSwiper() {
		let trendingMovies;
		let title;
		if (this.isKodiLibrary) {
			trendingMovies = this.kodiRecentlyMovies;
			title = 'Recently added';
		} else {
			trendingMovies = this.trendingMovies.slice(5);
			title = 'Trending now';
		}

		return x` <section id="trending">
			${renderTrending(trendingMovies, (movie) => this.showMovieDetailsDialog(movie), title)}
		</section>`;
	}

	_renderFeaturedSwiper() {
		if (this.isKodiLibrary) return;
		return x`
			<div id="featured">
				${renderFeatured(
					this.trendingMovies.slice(0, 5),
					(movie) => this.showMovieDetailsDialog(movie, true),
					this.shadowRoot,
				)}
			</div>
		`;
	}

	_renderHeaderWrap() {
		return x`<header class="abs-head ${this.isKodiLibrary ? 'kodi-header' : ''}">
			<div class="container">
				<div class="wrapper">
					<div class="start">${this._renderMenuList()}</div>
					<div class="step">
						${renderSearchBar(this)}
						<div class="offcanvas-toggler">
							<ha-icon icon="mdi:remote"></ha-icon>
						</div>
					</div>
				</div>
			</div>
		</header>`;
	}

	_renderMenuList() {
		// Setup menu listeners

		return x`<div class="menu">
			<div class="menu-toggle">
				<div class="bar1"></div>
				<div class="bar2"></div>
				<div class="bar3"></div>
			</div>
			<div class="menu-list">
				<ul>
					<li><a @click=${() => (this.isKodiLibrary = false)}>Home</a></li>
					<li><a @click=${() => (this.isKodiLibrary = true)}>Library</a></li>
				</ul>
			</div>
		</div> `;
	}

	_renderPlayers() {
		if (!this.players) return;

		return x`
			${this.players.map(
				(player) =>
					x` <div class="kodi-players">
						<player-card
							.hass="${this._hass}"
							.movies="${this.kodiAllMovies ?? []}"
							.player=${player}
							.toggleBrowserMedia="${this.toggleBrowserMedia}"></player-card>
					</div>`,
			)}
		`;
	}

	_renderActivePlayer() {
		if (!this.activePlayers) return;
		return x`
			${this.activePlayers.map(
				(player) =>
					x` <div class="kodi-players">
						<player-card
							.hass="${this._hass}"
							.movies="${this.kodiAllMovies ?? []}"
							.player=${player}
							.toggleBrowserMedia="${this.toggleBrowserMedia}"></player-card>
					</div>`,
			)}
		`;
	}

	toggleBrowserMedia = () => {
		this.isBrowserMedia = !this.isBrowserMedia;

		const section = this.shadowRoot.querySelector('.main');
		if (section) {
			section.scrollIntoView({ behavior: 'smooth' });
		}

		this.requestUpdate();
	};

	_renderDialog() {
		return x`
			<dialog id="movie-details-dialog">
				${this.isDialogOpen ? renderToast() : T}
				<div class="container">
					<div class="buttons">
						<button class="close" id="close-dialog" }>
							<i>${ICON.CLOSE}</i>
						</button>
					</div>
					<div class="dialog-content"></div>
				</div>
			</dialog>
		`;
	}

	_renderProgressBtn() {
		return x`
			<div class="progress-wrap">
				<svg class="progress-circle svg-content" width="100%" height="100%" viewBox="-1 -1 102 102">
					<path d="M50,1 a49,49 0 0,1 0,98 a49,49 0 0,1 0,-98" />
				</svg>
			</div>
		`;
	}

	_renderPlayersOptions() {
		const playerEl = document.createElement('div');
		playerEl.classList.add('player-options');

		// Using forEach for side effects, which is more appropriate than map here
		this.activePlayers.forEach((player) => {
			const playerOption = document.createElement('div');
			playerOption.innerHTML = `<option value="${player._entity_id}" >${player.name}</option>`;
			playerEl.appendChild(playerOption); // Append each player option to the container
		});
		this.toggleDialogPopup(playerEl);
		console.log('playerEl:', playerEl);
	}

	/* -------------------------- EVENT LISTENERS -------------------------- */

	handleResize() {
		const width = window.innerWidth;
		this.itemsPerPage =
			width <= 390 ? 9 : width <= 900 ? 12 : width <= 1024 ? 15 : width <= 1440 ? 18 : 21;

		this.itemsPerSection =
			width <= 500 ? 9 : width <= 992 ? 8 : width <= 1600 ? 10 : width <= 1920 ? 7 : 14;

		this.requestUpdate();
	}

	setupOffCanvasListeners() {
		console.log('Setting up offcanvas listeners');
		const offCanvasToggle = this.shadowRoot.querySelector('.offcanvas-toggler');
		const offCanvas = this.shadowRoot.querySelector('.sidenav');
		const offCanvasClose = this.shadowRoot.querySelector('.offcanvas-close');
		const wrapper = this.shadowRoot.querySelector('.wrapper');
		const header = document
			.querySelector('body > home-assistant')
			.shadowRoot.querySelector('home-assistant-main')
			.shadowRoot.querySelector('ha-drawer > partial-panel-resolver > ha-panel-lovelace')
			.shadowRoot.querySelector('hui-root')
			.shadowRoot.querySelector('div > div.header');
		let closeOffCanvasTimeout; // Declare a variable to hold the timeout ID
		function handleResize() {
			const width = window.innerWidth;
			if (width <= 900) {
				offCanvas.style.width = '100%';
				wrapper.style.marginRight = 0;
			} else {
				offCanvas.style.width = '450px';
				wrapper.style.marginRight = '450px';
			}
		}

		function closeOffCanvas() {
			clearTimeout(closeOffCanvasTimeout); // Clear any existing timeout
			offCanvas.classList.remove('active');
			offCanvas.style.width = 0;
			wrapper.classList.remove('offcanvas');
			wrapper.style.marginRight = 0;

			window.removeEventListener('resize', handleResize);
			// Delay setting header display to block
			// Set a timeout to ensure header display is set to block after the offcanvas is closed
			closeOffCanvasTimeout = setTimeout(() => {
				header.style.display = 'block';
			}, 500);
		}

		offCanvasToggle.addEventListener('click', (event) => {
			event.stopPropagation();
			const isOpen =
				offCanvas.classList.contains('active') && wrapper.classList.contains('offcanvas');
			closeOffCanvas();

			if (!isOpen) {
				offCanvas.classList.add('active');
				header.style.display = 'none';
				setTimeout(() => {
					offCanvas.style.width = window.innerWidth <= 900 ? '100%' : '450px';
				}, 300);

				wrapper.classList.add('offcanvas');

				setTimeout(() => {
					const offsetWidth = offCanvas.offsetWidth;
					wrapper.style.marginRight = `${offsetWidth}px`;
				}, 1000);

				window.addEventListener('resize', handleResize);
				offCanvas.addEventListener('click', (e) => e.stopPropagation());
				// Clear the timeout to prevent header display from being set to block prematurely
				clearTimeout(closeOffCanvasTimeout);
			}
		});

		offCanvasClose.addEventListener('click', closeOffCanvas);
		document.addEventListener('click', closeOffCanvas);
	}

	setupMenuListeners() {
		const menuToggle = this.shadowRoot.querySelector('.menu-toggle');
		let timeoutId;
		const menuList = this.shadowRoot.querySelector('.menu-list');

		function closeMenuList() {
			menuList.classList.remove('active');
			menuToggle.classList.remove('show');
		}

		menuToggle.addEventListener('click', (event) => {
			event.stopPropagation();

			const isOpen = menuList.classList.contains('active') && menuToggle.classList.contains('show');
			closeMenuList();

			if (!isOpen) {
				menuList.classList.add('active');
				menuToggle.classList.add('show');
				timeoutId = setTimeout(closeMenuList, 5000); // Close menu after 5000 milliseconds
			} else {
				clearTimeout(timeoutId); // Clear the timeout if the menu is already open
			}
		});

		menuList.addEventListener('click', (event) => {
			event.stopPropagation();
			clearTimeout(timeoutId); // Clear the timeout when the menu is clicked
		});

		menuList.addEventListener('mouseenter', () => {
			clearTimeout(timeoutId); // Clear the timeout when the mouse enters the menu
		});

		menuList.addEventListener('mouseleave', () => {
			timeoutId = setTimeout(closeMenuList, 1500); // Close menu after 1500 milliseconds
		});

		document.addEventListener('click', closeMenuList);
	}

	/* ----------------------------- SEARCH HANDLER ----------------------------- */

	updateSearch(e) {
		this.search = e.target.value;
	}

	resetSearch() {
		this.search = '';
		this.isSearchActive = false;
		this.kodiSearchResults = [];
		this.filteredMovies = [];
	}

	toggleSearchBar() {
		const searchWrap = this.shadowRoot.querySelector('.search-wrap');
		if (!searchWrap) return;
		searchWrap.classList.toggle('toggled');
	}

	// Function to search for movies by a given value in the title or cast properties of movies in the kodiAllMovies array
	searchKodiMovies(searchValue) {
		const lowercaseSearchValue = searchValue.toLowerCase();
		return this.kodiAllMovies.filter((movie) => {
			// Check if the movie title or any cast member's name contains the search value
			return (
				movie.title.toLowerCase().includes(lowercaseSearchValue) ||
				(Array.isArray(movie.cast) &&
					movie.cast.some(
						(castMember) =>
							typeof castMember === 'string' &&
							castMember.toLowerCase().includes(lowercaseSearchValue),
					))
			);
		});
	}

	// Function to search for movies on TMDB
	async searchTMDBMovies(searchTerm) {
		if (this.isKodiLibrary) return;
		const SEARCH_API = `https://api.themoviedb.org/3/search/movie?include_adult=false&language=cs-CZ&api_key=${this.tmdbApi}&query=`;
		try {
			const response = await fetch(`${SEARCH_API}${searchTerm}`);
			const data = await response.json();
			return data.results || [];
		} catch (error) {
			console.error('Error searching TMDB:', error);
			return [];
		}
	}

	// Function to perform search for both TMDB and Kodi movies
	async performSearch(e) {
		e.preventDefault();
		const searchTerm = this.search.trim();

		if (this.isKodiLibrary) {
			const result = this.searchKodiMovies(searchTerm);
			if (result.length > 0) {
				this.isSearchActive = true;
				this.kodiSearchResults = result;
				this.requestUpdate();
			} else {
				this.kodiSearchResults = [];
				launch_toast(this.shadowRoot, `No results found for '${searchTerm}'.`);
				this.resetSearch();
			}
		} else {
			try {
				// Search for movies on TMDB and Kodi in parallel
				const [tmdbMovies, kodiMovies] = await Promise.all([
					this.searchTMDBMovies(searchTerm),
					Promise.resolve(this.searchKodiMovies(searchTerm)), // Since searchKodiMovies is synchronous, wrap it in Promise.resolve
				]);

				// Process TMDB search results
				if (tmdbMovies.length > 0) {
					const detailedTmdbMovies = await Promise.all(
						tmdbMovies.map((movie) => fetchMovieDetails(movie.id, this.tmdbApi)),
					);
					this.searchResults = detailedTmdbMovies;
				} else {
					this.searchResults = [];
				}

				// Store Kodi search results separately
				if (kodiMovies.length > 0) {
					this.kodiSearchResults = kodiMovies;
				} else {
					this.kodiSearchResults = [];
				}

				// Show toast message if both TMDB and Kodi search results are empty
				if (tmdbMovies.length === 0 && kodiMovies.length === 0) {
					const template = `No results found for '${searchTerm}'.`;
					launch_toast(this.shadowRoot, template);
				}
				this.isSearchActive = true;

				console.log('tmdb:', this.searchResults.length, 'kodi:', this.kodiSearchResults.length);
				this.requestUpdate();
			} catch (error) {
				console.error('Error performing search:', error);
			}
		}
	}

	/* ------------------------------ ACTIONS  ----------------------------- */

	// Define the method to switch the movies variable
	switchMovies(moviesVariable) {
		// Define a mapping from movie variables to their respective settings
		const movieSettings = {
			'in-cinema-movies': {
				selectedMovies: this.inCinemaMovies,
				activeTab: 'Cinema',
			},
			'trending-movies': {
				selectedMovies: this.trendingMovies,
				activeTab: 'Trending',
			},
			'upcoming-movies': {
				selectedMovies: this.upcomingMovies,
				activeTab: 'Upcoming',
			},
		};

		// Check if the moviesVariable is one of the known categories
		if (moviesVariable in movieSettings) {
			const settings = movieSettings[moviesVariable];
			this.selectedMovies = settings.selectedMovies;
			this.activeTab = settings.activeTab;
			this.currentSectionPages['discover'] = 1; // Reset the page number for 'discover'
		} else {
			// Handle the default case
			this.selectedMovies = [];
			this.activeTab = '';
		}

		// Toggle the active tab and request an update
		this.toggleTabActive(this.activeTab);
		this.requestUpdate();
	}

	// Method to toggle the active state of tabs
	toggleTabActive(tabName) {
		const tabs = this.shadowRoot.querySelectorAll('.tab');
		tabs.forEach((tab) => {
			if (tab.textContent.trim() === tabName) {
				tab.classList.add('active');
			} else {
				tab.classList.remove('active');
			}
		});
	}

	_renderRemoteDialog() {
		if (!this.selectedPlayer) return;
		return x` <dialog id="player-remote-dialog">
			<div class="container">
				<div class="buttons">
					<button class="close" id="close-dialog" }>
						<i>${ICON.CLOSE}</i>
					</button>
				</div>
				<div class="dialog-content">
					<player-card
						class="responsive"
						.hass="${this._hass}"
						.movies="${this.kodiAllMovies ?? []}"
						.player=${this.selectedPlayer}
						.toggleBrowserMedia="${this.toggleBrowserMedia}"></player-card>
				</div>
			</div>
		</dialog>`;
	}

	toggleRemoteDialog(e) {
		const player = e.detail.player;
		this.selectedPlayer = player;
		const remoteDialog = this.shadowRoot.querySelector('#player-remote-dialog');
		const playerCard = remoteDialog?.querySelector('player-card');
		const remoteControl = playerCard?.shadowRoot.querySelector('.remote-control');
		const contentEl = playerCard?.shadowRoot.querySelector('.content');

		if (!remoteDialog || !playerCard || !remoteControl || !contentEl) return;

		remoteControl.classList.toggle('active');
		contentEl.classList.toggle('mobile');
		remoteDialog.showModal();
		this.attachDialogEvents(remoteDialog);
		this.requestUpdate();
	}

	toggleKodiLibrary() {
		this.isKodiLibrary = !this.isKodiLibrary;
		this.requestUpdate();
	}

	/* ------------------------------ DIALOG POPUP ----------------------------- */

	async showMovieDetailsDialog(movie) {
		// Fetch additional movie details using the movie ID and API key
		const detailedMovie = await fetchMovieDetails(movie.id, this.tmdbApi);
		// Merge basic movie info with fetched details for full data to render
		const fullMovieDetails = { ...movie, ...detailedMovie };
		const movieStrmUrl = movie.strm_url;

		// Render the content using renderPopoverContent with full movie details
		const content = renderMovieDialog(fullMovieDetails);

		this.toggleDialogPopup(content, movieStrmUrl);
	}

	toggleDialogPopup(containerEL, movieStrmUrl) {
		const dialog = this.shadowRoot.querySelector('#movie-details-dialog');
		if (!dialog) return;
		const container = dialog.querySelector('.container');
		const dialogContent = container.querySelector('.dialog-content');

		dialogContent.innerHTML = '';
		// Set the content of the dialog
		dialogContent.appendChild(containerEL);

		dialog.showModal(); // Show the dialog with new content
		this.attachDialogEvents(dialog, movieStrmUrl);
		this.isDialogOpen = true;
		this.updateBodyScroll();
		this.requestUpdate();
	}

	attachDialogEvents(dialog, movieStrmUrl) {
		dialog.addEventListener('click', (event) => {
			if (dialog.contains(event.target)) {
				this.closeDialog(dialog);
				this.isDialogOpen = false;
				this.updateBodyScroll();
			}
		});

		const scrollWrap = dialog.querySelector('.credits-info');
		const scroller = dialog.querySelector('.scroller');
		if (scrollWrap) {
			scrollWrap.addEventListener('scroll', () => this.handleScroll(scrollWrap, scroller));
		}

		// Add event listener to the "Watch Now" button
		const watchNowButton = dialog.querySelector('#watchNowButton');
		if (watchNowButton) {
			watchNowButton.addEventListener('click', () =>
				this.playMovie({ detail: { media: movieStrmUrl } }),
			);
		}

		// Setup "Close" button inside dialog
		const closeButton = dialog.querySelector('#close-dialog');
		if (closeButton) {
			closeButton.addEventListener('click', () => this.closeDialog(dialog));
		}

		this.requestUpdate();
	}

	closeDialog(dialog) {
		dialog.close();
		this.updateBodyScroll();
		this.isDialogOpen = false;
		this.requestUpdate();
	}

	updateBodyScroll() {
		const body = document.querySelector('body');
		if (this.isDialogOpen) {
			body.classList.add('no-scroll');
		} else {
			body.classList.remove('no-scroll');
		}
		this.requestUpdate();
	}

	handleScroll(scrollWrap, scroller) {
		const scrollLeft = scrollWrap.scrollLeft;
		const maxScrollLeft = scrollWrap.scrollWidth - scrollWrap.clientWidth;

		if (scrollLeft === maxScrollLeft) {
			scroller.classList.remove('is_fading');
			scroller.classList.add('is_hidden');
		} else if (scrollLeft === 0) {
			scroller.classList.remove('is_hidden');
			scroller.classList.add('is_fading');
		} else if (scrollLeft !== maxScrollLeft && scrollLeft !== 0) {
			scroller.classList.add('is_hidden');
			scroller.classList.add('is_fading');
		}
	}

	/* ------------------------------ PLAY MOVIE ----------------------------- */

	playMovie(e) {
		const media = e.detail.media;
		if (this.activePlayers.length === 0) {
			launch_toast(this.shadowRoot, 'No active players found');
			return;
		}
		// Play the movie on the active player
		if (this.activePlayers.length == 1) {
			this._hass.callService('kodi', 'call_method', {
				method: 'Player.Open',
				item: {
					file: media,
				},
				entity_id: this.activePlayers[0]._playerId,
			});
		}
		if (this.activePlayers.length > 1) {
			this._renderPlayersOptions();
		}
	}

	/* ------------------------- SCROLLBAR STYLE SETTING ------------------------ */

	loadScrollbarCss() {
		this.styleElement = document.createElement('style');
		this.styleElement.textContent = `
				html {
					scrollbar-color: #00acc1 #181818;
				}
				::-webkit-scrollbar-track {
					background: #181818;
				}
				::-webkit-scrollbar {
					width: 12px;
				}
				::-webkit-scrollbar-thumb { 
					background: #00acc1;
					width: 5px;
				}
				`;
		document.head.appendChild(this.styleElement);
	}

	removeScrollbarCss() {
		// Remove the style element from the page head
		if (this.styleElement && this.styleElement.parentNode) {
			this.styleElement.parentNode.removeChild(this.styleElement);
		}
	}

	setOldHeaderBg() {
		const rootStyle = document.documentElement.style;
		rootStyle.setProperty('--app-header-background-color', this.oldHeaderBg);
	}
}

customElements.define('movie-library-panel', MovieLibraryPanel);

window.customCards = window.customCards || [];
window.customCards.push({
	type: 'movie-library-panel',
	name: 'Movie Library Panel',
	preview: false,
});
//# sourceMappingURL=movie-library-panel-bundle.js.map
