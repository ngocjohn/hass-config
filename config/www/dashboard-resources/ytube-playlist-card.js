function t(t,e,i,s){var r,n=arguments.length,o=n<3?e:null===s?s=Object.getOwnPropertyDescriptor(e,i):s;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(t,e,i,s);else for(var a=t.length-1;a>=0;a--)(r=t[a])&&(o=(n<3?r(o):n>3?r(e,i,o):r(e,i))||o);return n>3&&o&&Object.defineProperty(e,i,o),o}function e(t,e){if(!Number.isInteger(e)||e<=0)throw new Error("Size must be an integer greater than zero.");const i=Math.ceil(t.length/e),s=Array(i);for(let r=0;r<i;r++){const i=r*e,n=i+e;s[r]=t.slice(i,n)}return s}function i(t,e=1){const i=[],s=Math.floor(e),r=(t,e)=>{for(let n=0;n<t.length;n++){const o=t[n];Array.isArray(o)&&e<s?r(o,e+1):i.push(o)}};return r(t,0),i}
/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */console.groupCollapsed("%c   Ytube Playlist Card   \n%c   v1.0.0                ","color: orange; font-weight: bold; background: black","color: white; font-weight: bold; background: dimgray"),console.info("YouTube Music Playlist Card for Home Assistant"),console.info("Github: https://github.com/ngocjohn/ytube-playlist-card"),console.info("If you like the card, consider supporting the developer: https://github.com/sponsors/ngocjohn"),console.groupEnd(),"function"==typeof SuppressedError&&SuppressedError;const s=globalThis,r=s.ShadowRoot&&(void 0===s.ShadyCSS||s.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,n=Symbol(),o=new WeakMap;class a{constructor(t,e,i){if(this._$cssResult$=!0,i!==n)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=e}get styleSheet(){let t=this.o;const e=this.t;if(r&&void 0===t){const i=void 0!==e&&1===e.length;i&&(t=o.get(e)),void 0===t&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),i&&o.set(e,t))}return t}toString(){return this.cssText}}const h=t=>new a("string"==typeof t?t:t+"",void 0,n),l=(t,...e)=>{const i=1===t.length?t[0]:e.reduce(((e,i,s)=>e+(t=>{if(!0===t._$cssResult$)return t.cssText;if("number"==typeof t)return t;throw Error("Value passed to 'css' function must be a 'css' function result: "+t+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(i)+t[s+1]),t[0]);return new a(i,t,n)},c=(t,e)=>{if(r)t.adoptedStyleSheets=e.map((t=>t instanceof CSSStyleSheet?t:t.styleSheet));else for(const i of e){const e=document.createElement("style"),r=s.litNonce;void 0!==r&&e.setAttribute("nonce",r),e.textContent=i.cssText,t.appendChild(e)}},d=r?t=>t:t=>t instanceof CSSStyleSheet?(t=>{let e="";for(const i of t.cssRules)e+=i.cssText;return h(e)})(t):t
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */,{is:u,defineProperty:p,getOwnPropertyDescriptor:_,getOwnPropertyNames:m,getOwnPropertySymbols:g,getPrototypeOf:f}=Object,y=globalThis,$=y.trustedTypes,b=$?$.emptyScript:"",v=y.reactiveElementPolyfillSupport,A=(t,e)=>t,w={toAttribute(t,e){switch(e){case Boolean:t=t?b:null;break;case Object:case Array:t=null==t?t:JSON.stringify(t)}return t},fromAttribute(t,e){let i=t;switch(e){case Boolean:i=null!==t;break;case Number:i=null===t?null:Number(t);break;case Object:case Array:try{i=JSON.parse(t)}catch(t){i=null}}return i}},E=(t,e)=>!u(t,e),S={attribute:!0,type:String,converter:w,reflect:!1,hasChanged:E};Symbol.metadata??=Symbol("metadata"),y.litPropertyMetadata??=new WeakMap;class x extends HTMLElement{static addInitializer(t){this._$Ei(),(this.l??=[]).push(t)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(t,e=S){if(e.state&&(e.attribute=!1),this._$Ei(),this.elementProperties.set(t,e),!e.noAccessor){const i=Symbol(),s=this.getPropertyDescriptor(t,i,e);void 0!==s&&p(this.prototype,t,s)}}static getPropertyDescriptor(t,e,i){const{get:s,set:r}=_(this.prototype,t)??{get(){return this[e]},set(t){this[e]=t}};return{get(){return s?.call(this)},set(e){const n=s?.call(this);r.call(this,e),this.requestUpdate(t,n,i)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)??S}static _$Ei(){if(this.hasOwnProperty(A("elementProperties")))return;const t=f(this);t.finalize(),void 0!==t.l&&(this.l=[...t.l]),this.elementProperties=new Map(t.elementProperties)}static finalize(){if(this.hasOwnProperty(A("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(A("properties"))){const t=this.properties,e=[...m(t),...g(t)];for(const i of e)this.createProperty(i,t[i])}const t=this[Symbol.metadata];if(null!==t){const e=litPropertyMetadata.get(t);if(void 0!==e)for(const[t,i]of e)this.elementProperties.set(t,i)}this._$Eh=new Map;for(const[t,e]of this.elementProperties){const i=this._$Eu(t,e);void 0!==i&&this._$Eh.set(i,t)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(t){const e=[];if(Array.isArray(t)){const i=new Set(t.flat(1/0).reverse());for(const t of i)e.unshift(d(t))}else void 0!==t&&e.push(d(t));return e}static _$Eu(t,e){const i=e.attribute;return!1===i?void 0:"string"==typeof i?i:"string"==typeof t?t.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$ES=new Promise((t=>this.enableUpdating=t)),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach((t=>t(this)))}addController(t){(this._$EO??=new Set).add(t),void 0!==this.renderRoot&&this.isConnected&&t.hostConnected?.()}removeController(t){this._$EO?.delete(t)}_$E_(){const t=new Map,e=this.constructor.elementProperties;for(const i of e.keys())this.hasOwnProperty(i)&&(t.set(i,this[i]),delete this[i]);t.size>0&&(this._$Ep=t)}createRenderRoot(){const t=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return c(t,this.constructor.elementStyles),t}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$EO?.forEach((t=>t.hostConnected?.()))}enableUpdating(t){}disconnectedCallback(){this._$EO?.forEach((t=>t.hostDisconnected?.()))}attributeChangedCallback(t,e,i){this._$AK(t,i)}_$EC(t,e){const i=this.constructor.elementProperties.get(t),s=this.constructor._$Eu(t,i);if(void 0!==s&&!0===i.reflect){const r=(void 0!==i.converter?.toAttribute?i.converter:w).toAttribute(e,i.type);this._$Em=t,null==r?this.removeAttribute(s):this.setAttribute(s,r),this._$Em=null}}_$AK(t,e){const i=this.constructor,s=i._$Eh.get(t);if(void 0!==s&&this._$Em!==s){const t=i.getPropertyOptions(s),r="function"==typeof t.converter?{fromAttribute:t.converter}:void 0!==t.converter?.fromAttribute?t.converter:w;this._$Em=s,this[s]=r.fromAttribute(e,t.type),this._$Em=null}}requestUpdate(t,e,i){if(void 0!==t){if(i??=this.constructor.getPropertyOptions(t),!(i.hasChanged??E)(this[t],e))return;this.P(t,e,i)}!1===this.isUpdatePending&&(this._$ES=this._$ET())}P(t,e,i){this._$AL.has(t)||this._$AL.set(t,e),!0===i.reflect&&this._$Em!==t&&(this._$Ej??=new Set).add(t)}async _$ET(){this.isUpdatePending=!0;try{await this._$ES}catch(t){Promise.reject(t)}const t=this.scheduleUpdate();return null!=t&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(const[t,e]of this._$Ep)this[t]=e;this._$Ep=void 0}const t=this.constructor.elementProperties;if(t.size>0)for(const[e,i]of t)!0!==i.wrapped||this._$AL.has(e)||void 0===this[e]||this.P(e,this[e],i)}let t=!1;const e=this._$AL;try{t=this.shouldUpdate(e),t?(this.willUpdate(e),this._$EO?.forEach((t=>t.hostUpdate?.())),this.update(e)):this._$EU()}catch(e){throw t=!1,this._$EU(),e}t&&this._$AE(e)}willUpdate(t){}_$AE(t){this._$EO?.forEach((t=>t.hostUpdated?.())),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$EU(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(t){return!0}update(t){this._$Ej&&=this._$Ej.forEach((t=>this._$EC(t,this[t]))),this._$EU()}updated(t){}firstUpdated(t){}}x.elementStyles=[],x.shadowRootOptions={mode:"open"},x[A("elementProperties")]=new Map,x[A("finalized")]=new Map,v?.({ReactiveElement:x}),(y.reactiveElementVersions??=[]).push("2.0.4");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const C=globalThis,P=C.trustedTypes,k=P?P.createPolicy("lit-html",{createHTML:t=>t}):void 0,T="$lit$",U=`lit$${Math.random().toFixed(9).slice(2)}$`,O="?"+U,M=`<${O}>`,R=document,H=()=>R.createComment(""),I=t=>null===t||"object"!=typeof t&&"function"!=typeof t,N=Array.isArray,z=t=>N(t)||"function"==typeof t?.[Symbol.iterator],j="[ \t\n\f\r]",D=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,L=/-->/g,B=/>/g,W=RegExp(`>|${j}(?:([^\\s"'>=/]+)(${j}*=${j}*(?:[^ \t\n\f\r"'\`<>=]|("|')|))|$)`,"g"),q=/'/g,V=/"/g,Y=/^(?:script|style|textarea|title)$/i,G=t=>(e,...i)=>({_$litType$:t,strings:e,values:i}),Z=G(1),J=Symbol.for("lit-noChange"),K=Symbol.for("lit-nothing"),F=new WeakMap,Q=R.createTreeWalker(R,129);function X(t,e){if(!N(t)||!t.hasOwnProperty("raw"))throw Error("invalid template strings array");return void 0!==k?k.createHTML(e):e}const tt=(t,e)=>{const i=t.length-1,s=[];let r,n=2===e?"<svg>":3===e?"<math>":"",o=D;for(let e=0;e<i;e++){const i=t[e];let a,h,l=-1,c=0;for(;c<i.length&&(o.lastIndex=c,h=o.exec(i),null!==h);)c=o.lastIndex,o===D?"!--"===h[1]?o=L:void 0!==h[1]?o=B:void 0!==h[2]?(Y.test(h[2])&&(r=RegExp("</"+h[2],"g")),o=W):void 0!==h[3]&&(o=W):o===W?">"===h[0]?(o=r??D,l=-1):void 0===h[1]?l=-2:(l=o.lastIndex-h[2].length,a=h[1],o=void 0===h[3]?W:'"'===h[3]?V:q):o===V||o===q?o=W:o===L||o===B?o=D:(o=W,r=void 0);const d=o===W&&t[e+1].startsWith("/>")?" ":"";n+=o===D?i+M:l>=0?(s.push(a),i.slice(0,l)+T+i.slice(l)+U+d):i+U+(-2===l?e:d)}return[X(t,n+(t[i]||"<?>")+(2===e?"</svg>":3===e?"</math>":"")),s]};class et{constructor({strings:t,_$litType$:e},i){let s;this.parts=[];let r=0,n=0;const o=t.length-1,a=this.parts,[h,l]=tt(t,e);if(this.el=et.createElement(h,i),Q.currentNode=this.el.content,2===e||3===e){const t=this.el.content.firstChild;t.replaceWith(...t.childNodes)}for(;null!==(s=Q.nextNode())&&a.length<o;){if(1===s.nodeType){if(s.hasAttributes())for(const t of s.getAttributeNames())if(t.endsWith(T)){const e=l[n++],i=s.getAttribute(t).split(U),o=/([.?@])?(.*)/.exec(e);a.push({type:1,index:r,name:o[2],strings:i,ctor:"."===o[1]?ot:"?"===o[1]?at:"@"===o[1]?ht:nt}),s.removeAttribute(t)}else t.startsWith(U)&&(a.push({type:6,index:r}),s.removeAttribute(t));if(Y.test(s.tagName)){const t=s.textContent.split(U),e=t.length-1;if(e>0){s.textContent=P?P.emptyScript:"";for(let i=0;i<e;i++)s.append(t[i],H()),Q.nextNode(),a.push({type:2,index:++r});s.append(t[e],H())}}}else if(8===s.nodeType)if(s.data===O)a.push({type:2,index:r});else{let t=-1;for(;-1!==(t=s.data.indexOf(U,t+1));)a.push({type:7,index:r}),t+=U.length-1}r++}}static createElement(t,e){const i=R.createElement("template");return i.innerHTML=t,i}}function it(t,e,i=t,s){if(e===J)return e;let r=void 0!==s?i._$Co?.[s]:i._$Cl;const n=I(e)?void 0:e._$litDirective$;return r?.constructor!==n&&(r?._$AO?.(!1),void 0===n?r=void 0:(r=new n(t),r._$AT(t,i,s)),void 0!==s?(i._$Co??=[])[s]=r:i._$Cl=r),void 0!==r&&(e=it(t,r._$AS(t,e.values),r,s)),e}class st{constructor(t,e){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=e}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){const{el:{content:e},parts:i}=this._$AD,s=(t?.creationScope??R).importNode(e,!0);Q.currentNode=s;let r=Q.nextNode(),n=0,o=0,a=i[0];for(;void 0!==a;){if(n===a.index){let e;2===a.type?e=new rt(r,r.nextSibling,this,t):1===a.type?e=new a.ctor(r,a.name,a.strings,this,t):6===a.type&&(e=new lt(r,this,t)),this._$AV.push(e),a=i[++o]}n!==a?.index&&(r=Q.nextNode(),n++)}return Q.currentNode=R,s}p(t){let e=0;for(const i of this._$AV)void 0!==i&&(void 0!==i.strings?(i._$AI(t,i,e),e+=i.strings.length-2):i._$AI(t[e])),e++}}class rt{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(t,e,i,s){this.type=2,this._$AH=K,this._$AN=void 0,this._$AA=t,this._$AB=e,this._$AM=i,this.options=s,this._$Cv=s?.isConnected??!0}get parentNode(){let t=this._$AA.parentNode;const e=this._$AM;return void 0!==e&&11===t?.nodeType&&(t=e.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,e=this){t=it(this,t,e),I(t)?t===K||null==t||""===t?(this._$AH!==K&&this._$AR(),this._$AH=K):t!==this._$AH&&t!==J&&this._(t):void 0!==t._$litType$?this.$(t):void 0!==t.nodeType?this.T(t):z(t)?this.k(t):this._(t)}O(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}T(t){this._$AH!==t&&(this._$AR(),this._$AH=this.O(t))}_(t){this._$AH!==K&&I(this._$AH)?this._$AA.nextSibling.data=t:this.T(R.createTextNode(t)),this._$AH=t}$(t){const{values:e,_$litType$:i}=t,s="number"==typeof i?this._$AC(t):(void 0===i.el&&(i.el=et.createElement(X(i.h,i.h[0]),this.options)),i);if(this._$AH?._$AD===s)this._$AH.p(e);else{const t=new st(s,this),i=t.u(this.options);t.p(e),this.T(i),this._$AH=t}}_$AC(t){let e=F.get(t.strings);return void 0===e&&F.set(t.strings,e=new et(t)),e}k(t){N(this._$AH)||(this._$AH=[],this._$AR());const e=this._$AH;let i,s=0;for(const r of t)s===e.length?e.push(i=new rt(this.O(H()),this.O(H()),this,this.options)):i=e[s],i._$AI(r),s++;s<e.length&&(this._$AR(i&&i._$AB.nextSibling,s),e.length=s)}_$AR(t=this._$AA.nextSibling,e){for(this._$AP?.(!1,!0,e);t&&t!==this._$AB;){const e=t.nextSibling;t.remove(),t=e}}setConnected(t){void 0===this._$AM&&(this._$Cv=t,this._$AP?.(t))}}class nt{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(t,e,i,s,r){this.type=1,this._$AH=K,this._$AN=void 0,this.element=t,this.name=e,this._$AM=s,this.options=r,i.length>2||""!==i[0]||""!==i[1]?(this._$AH=Array(i.length-1).fill(new String),this.strings=i):this._$AH=K}_$AI(t,e=this,i,s){const r=this.strings;let n=!1;if(void 0===r)t=it(this,t,e,0),n=!I(t)||t!==this._$AH&&t!==J,n&&(this._$AH=t);else{const s=t;let o,a;for(t=r[0],o=0;o<r.length-1;o++)a=it(this,s[i+o],e,o),a===J&&(a=this._$AH[o]),n||=!I(a)||a!==this._$AH[o],a===K?t=K:t!==K&&(t+=(a??"")+r[o+1]),this._$AH[o]=a}n&&!s&&this.j(t)}j(t){t===K?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"")}}class ot extends nt{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===K?void 0:t}}class at extends nt{constructor(){super(...arguments),this.type=4}j(t){this.element.toggleAttribute(this.name,!!t&&t!==K)}}class ht extends nt{constructor(t,e,i,s,r){super(t,e,i,s,r),this.type=5}_$AI(t,e=this){if((t=it(this,t,e,0)??K)===J)return;const i=this._$AH,s=t===K&&i!==K||t.capture!==i.capture||t.once!==i.once||t.passive!==i.passive,r=t!==K&&(i===K||s);s&&this.element.removeEventListener(this.name,this,i),r&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){"function"==typeof this._$AH?this._$AH.call(this.options?.host??this.element,t):this._$AH.handleEvent(t)}}class lt{constructor(t,e,i){this.element=t,this.type=6,this._$AN=void 0,this._$AM=e,this.options=i}get _$AU(){return this._$AM._$AU}_$AI(t){it(this,t)}}const ct=C.litHtmlPolyfillSupport;ct?.(et,rt),(C.litHtmlVersions??=[]).push("3.2.1");const dt=(t,e,i)=>{const s=i?.renderBefore??e;let r=s._$litPart$;if(void 0===r){const t=i?.renderBefore??null;s._$litPart$=r=new rt(e.insertBefore(H(),t),t,void 0,i??{})}return r._$AI(t),r
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */};class ut extends x{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){const t=super.createRenderRoot();return this.renderOptions.renderBefore??=t.firstChild,t}update(t){const e=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=dt(e,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return J}}ut._$litElement$=!0,ut.finalized=!0,globalThis.litElementHydrateSupport?.({LitElement:ut});const pt=globalThis.litElementPolyfillSupport;pt?.({LitElement:ut}),(globalThis.litElementVersions??=[]).push("4.1.1");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const _t=t=>(e,i)=>{void 0!==i?i.addInitializer((()=>{customElements.define(t,e)})):customElements.define(t,e)}
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */,mt={attribute:!0,type:String,converter:w,reflect:!1,hasChanged:E},gt=(t=mt,e,i)=>{const{kind:s,metadata:r}=i;let n=globalThis.litPropertyMetadata.get(r);if(void 0===n&&globalThis.litPropertyMetadata.set(r,n=new Map),n.set(i.name,t),"accessor"===s){const{name:s}=i;return{set(i){const r=e.get.call(this);e.set.call(this,i),this.requestUpdate(s,r,t)},init(e){return void 0!==e&&this.P(s,void 0,t),e}}}if("setter"===s){const{name:s}=i;return function(i){const r=this[s];e.call(this,i),this.requestUpdate(s,r,t)}}throw Error("Unsupported decorator location: "+s)};function ft(t){return(e,i)=>"object"==typeof i?gt(t,e,i):((t,e,i)=>{const s=e.hasOwnProperty(i);return e.constructor.createProperty(i,s?{...t,wrapped:!0}:t),s?Object.getOwnPropertyDescriptor(e,i):void 0})(t,e,i)
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */}function yt(t){return ft({...t,state:!0,attribute:!1})}
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const $t={ATTRIBUTE:1,CHILD:2,PROPERTY:3,BOOLEAN_ATTRIBUTE:4,EVENT:5,ELEMENT:6},bt=t=>(...e)=>({_$litDirective$:t,values:e});class vt{constructor(t){}get _$AU(){return this._$AM._$AU}_$AT(t,e,i){this._$Ct=t,this._$AM=e,this._$Ci=i}_$AS(t,e){return this.update(t,e)}update(t,e){return this.render(...e)}}
/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const At="important",wt=" !"+At,Et=bt(class extends vt{constructor(t){if(super(t),t.type!==$t.ATTRIBUTE||"style"!==t.name||t.strings?.length>2)throw Error("The `styleMap` directive must be used in the `style` attribute and must be the only part in the attribute.")}render(t){return Object.keys(t).reduce(((e,i)=>{const s=t[i];return null==s?e:e+`${i=i.includes("-")?i:i.replace(/(?:^(webkit|moz|ms|o)|)(?=[A-Z])/g,"-$&").toLowerCase()}:${s};`}),"")}update(t,[e]){const{style:i}=t.element;if(void 0===this.ft)return this.ft=new Set(Object.keys(e)),this.render(e);for(const t of this.ft)null==e[t]&&(this.ft.delete(t),t.includes("-")?i.removeProperty(t):i[t]=null);for(const t in e){const s=e[t];if(null!=s){this.ft.add(t);const e="string"==typeof s&&s.endsWith(wt);t.includes("-")||e?i.setProperty(t,e?s.slice(0,-11):s,e?At:""):i[t]=s}}return J}});class St{constructor(t,e){this.hass=t,this.playerId=e}async browseMedia(t,e){return await this.hass.callWS({type:"media_player/browse_media",entity_id:this.playerId,media_content_type:t,media_content_id:e})}}class xt{constructor(t){this._entity=t,this.id=t.entity_id,this._state=t.state,this._attr=t.attributes}get isPaused(){return"paused"===this._state}get isPlaying(){return"playing"===this._state}get isIdle(){return"idle"===this._state}get isStandby(){return"standby"===this._state}get isUnavailable(){return"unavailable"===this._state}get isOff(){return"off"===this._state}get isActive(){return!this.isOff&&!this.isUnavailable&&!this.isIdle||!1}get mediaType(){return this._attr._media_type||""}get mediaId(){return this._attr._media_id||""}get currentTrack(){return this._attr.current_track}get playlistTitle(){return this._attr.current_playlist_title||""}get remotePlayerId(){return this._attr.remote_player_id||""}get muted(){return this._attr.is_volume_muted||!1}get shuffle(){return this._attr.shuffle||!1}get repeat(){return this._attr.repeat||"off"}get picture(){return this._attr.entity_picture_local||this._attr.entity_picture}get updatedAt(){return this._attr.media_position_updated_at||0}get position(){return this._attr.media_position||0}get duration(){return this._attr.media_duration||0}get progress(){if(this.isPlaying){const t=(Date.now()-new Date(this.updatedAt).getTime())/1e3;return(this.position+t)/this.duration*100}return this.position/this.duration*100}}class Ct{constructor(t,e){this.hass=t,this.config=e,this.haService=new St(t,e.entity),this.player=this._createPlayer(e.entity),this._extra=this._createExtra()}_createPlayer(t){const e=this.hass.states[t];if(!e)throw new Error("Player entity not found");return new xt(e)}_createExtra(){if(this.config.extra){const t=this.hass.states[this.config.extra];if(!t)throw new Error("Extra entity not found");return t}}}const Pt=(t,e,i=!1)=>{let s;const r=(...r)=>{const n=i&&!s;clearTimeout(s),s=window.setTimeout((()=>{s=void 0,i||t(...r)}),e),n&&t(...r)};return r.cancel=()=>{clearTimeout(s)},r};class kt extends ut{render(){return Z`
      <div class="loader">
        <div class="music">
          <div class="bar"></div>
          <div class="bar"></div>
          <div class="bar"></div>
          <div class="bar"></div>
          <div class="bar"></div>
          <div class="bar"></div>
          <div class="bar"></div>
          <div class="bar"></div>
          <div class="bar"></div>
          <div class="bar"></div>
        </div>
      </div>
    `}}kt.styles=l`
		.loader {
			height: 100%;
			width: 100%;
			display: flex;
			justify-content: center;
			align-items: center;
		}
		.music {
			display: inline-flex;
			position: relative;
			max-width: calc(80% - 8px);
			width: 100%;
			max-height: calc(33% - 8px);
			height: 100%;
			align-items: center;
			justify-content: space-between;
		}

		.bar {
			width: 12px;
			border-radius: 8px;
			animation: loader 1.5s ease-in-out infinite;
		}

		@keyframes loader {
			0%,
			100% {
				height: 2px;
			}

			50% {
				height: 80%;
			}
		}

		.music .bar:nth-child(1) {
			background: rgba(255, 255, 255, 0.1);
			animation-delay: 1s;
		}

		.music .bar:nth-child(2) {
			background: rgba(255, 255, 255, 0.3);
			animation-delay: 0.8s;
		}

		.music .bar:nth-child(3) {
			background: rgba(255, 255, 255, 0.5);
			animation-delay: 0.6s;
		}

		.music .bar:nth-child(4) {
			background: rgba(255, 255, 255, 0.7);
			animation-delay: 0.4s;
		}

		.music .bar:nth-child(5) {
			background: rgba(255, 255, 255, 0.9);
			animation-delay: 0.2s;
		}

		.music .bar:nth-child(6) {
			background: rgba(255, 255, 255, 0.9);
			animation-delay: 0.2s;
		}

		.music .bar:nth-child(7) {
			background: rgba(255, 255, 255, 0.7);
			animation-delay: 0.4s;
		}

		.music .bar:nth-child(8) {
			background: rgba(255, 255, 255, 0.5);
			animation-delay: 0.6s;
		}

		.music .bar:nth-child(9) {
			background: rgba(255, 255, 255, 0.3);
			animation-delay: 0.8s;
		}

		.music .bar:nth-child(10) {
			background: rgba(255, 255, 255, 0.1);
			animation-delay: 1s;
		}
	`,customElements.define("ytube-playlist-loader",kt);var Tt=l`*,
*::before,
*::after {
	box-sizing: border-box;
}

ha-card {
	position: relative;
	overflow: hidden;
	width: 100%;
	height: auto;
	border: none !important;
	border-radius: 0 !important;
	background: none !important;
	margin: 0;
	padding: 0;
}

.grid::-webkit-scrollbar {
	display: none !important;
	/* Safari and Chrome */
}


.grid {
	display: grid;
	grid-template-columns: repeat(auto-fit, minmax(30%, 1fr));
	grid-gap: 0.5em;
	width: 100%;
	height: 100%;
	overflow-y: auto;
	scroll-snap-type: y mandatory;
	-ms-overflow-style: none;
	scrollbar-width: none;
}

.grid-item {
	position: relative;
	overflow: hidden;
	height: 100%;
	border-radius: 1em;
	cursor: pointer;
	transition: all 0.4s cubic-bezier(0.075, 0.82, 0.165, 1);
	box-shadow: rgba(0, 0, 0, 0.5) 0px 0px 10px;
	border: 2px solid transparent;
	scroll-snap-align: end;
	scroll-snap-stop: always;
}

.grid-item:hover {
	border-color: var(--primary-color);
}

.grid-item-thumbnail {
	position: relative;
	overflow: hidden;
	height: 100%;
	width: 100%;
	filter: brightness(0.8);
}

.grid-item-thumbnail:hover {
	filter: brightness(1);
}

.grid-item-thumbnail>img {
	width: 100%;
	height: 100%;
	-o-object-fit: cover;
	   object-fit: cover;
}

.grid-item-title {
	position: absolute;
	top: 0;
	left: 0;
	opacity: 0;
	display: flex;
	align-items: center;
	justify-content: center;
	height: 100%;
	width: 100%;
	padding: 0em 0.1em;
	overflow: hidden;
	white-space: pretty;
	text-align: center;
	color: var(--text-primary-color);
	font-size: 1.2em;
	background-color: rgba(0, 0, 0, 0.7);
	-webkit-backdrop-filter: blur(1px);
	        backdrop-filter: blur(1px);
	transition: all 0.4s cubic-bezier(0.075, 0.82, 0.165, 1);
}

.grid-item:hover .grid-item-title {
	opacity: 1;
}`;let Ut=class extends ut{constructor(){super(...arguments),this._cardWidth=0,this._currentChunkIndex=0,this._chunkSize=40,this._chunks=[],this._renderedItems=[]}static get styles(){return Tt}async setConfig(t){if(!t.entity||"media_player"!==t.entity.split(".")[0])throw new Error("Specify an entity from within the media_player domain");this.config=t}connectedCallback(){super.connectedCallback(),window.YtubeCard=this,this.updateComplete.then((()=>this._attachObserver()))}disconnectedCallback(){super.disconnectedCallback(),this._resizeObserver&&this._resizeObserver.disconnect()}async _attachObserver(){this._resizeObserver||(this._resizeObserver=new ResizeObserver(Pt((()=>this._measureCard()),250,!1)));const t=this.shadowRoot.querySelector("ha-card");t&&this._resizeObserver.observe(t)}_measureCard(){const t=this.shadowRoot.querySelector("ha-card");t&&(this._cardWidth=t.clientWidth)}async firstUpdated(t){super.firstUpdated(t),this._attachObserver(),this._measureCard(),await this._loadContent()}async _loadContent(){this._loadingData=!0;const t=await this.store.haService.browseMedia("home2","Mixed for you");this._initialItems=t,this._loadingData=!1}_createStore(){this.store=new Ct(this.hass,this.config)}render(){return this.hass?(this._createStore(),Z`<ha-card>
			${this._loadingData?Z`<ytube-playlist-loader></ytube-playlist-loader>`:this._renderItems()}
		</ha-card>`):Z``}_renderItems(){var t;const s=(null===(t=this._initialItems)||void 0===t?void 0:t.children)||[];0===this._chunks.length&&(this._chunks=e(s,this._chunkSize)),this._renderedItems=i(this._chunks.slice(0,this._currentChunkIndex+1));return Z`
			<div class="grid"
				style=${this._computeGridStyles()}
				@scroll=${this._handleScroll}>
				${this._renderedItems.map((t=>(t=>{const{thumbnail:e,title:i}=t;return Z`
				<div class="grid-item" @click=${()=>{}}>
					<div class="grid-item-thumbnail">
						<img src="${e}" alt="${i}" />
					</div>
					<div class="grid-item-title">
						<span>${i}</span>
					</div>
				</div>
			`})(t)))}
			</div>
		`}_computeGridStyles(){const t=this._cardWidth,e=t/3*.9;return Et({gridTemplateColumns:`repeat(auto-fill, minmax(${e}px, 1fr))`,gridAutoRows:`${e+8}px`,gridGap:"8px",maxHeight:`${t}px`,overflowY:"auto"})}_handleScroll(t){const e=t.target;e.scrollHeight-e.scrollTop<=e.clientHeight+1&&this._loadMoreItems()}_loadMoreItems(){this._currentChunkIndex<this._chunks.length-1&&(this._currentChunkIndex++,this.requestUpdate())}};t([ft({attribute:!1})],Ut.prototype,"hass",void 0),t([ft({attribute:!1})],Ut.prototype,"config",void 0),t([yt()],Ut.prototype,"store",void 0),t([yt()],Ut.prototype,"player",void 0),t([yt()],Ut.prototype,"_initialItems",void 0),t([yt()],Ut.prototype,"_loadingData",void 0),t([yt()],Ut.prototype,"_cardWidth",void 0),t([yt()],Ut.prototype,"_currentChunkIndex",void 0),t([yt()],Ut.prototype,"_chunkSize",void 0),t([yt()],Ut.prototype,"_chunks",void 0),t([yt()],Ut.prototype,"_renderedItems",void 0),Ut=t([_t("ytube-playlist-card")],Ut),window.customCards=window.customCards||[],window.customCards.push({type:"ytube-playlist-card",name:"Ytube playlist Card",description:"YouTube Music Playlist Card for Home Assistant",preview:!1});export{Ut as YtubePlaylistCard};
