/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
function e(e,i,t,s){var n,r=arguments.length,a=r<3?i:null===s?s=Object.getOwnPropertyDescriptor(i,t):s;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,i,t,s);else for(var l=e.length-1;l>=0;l--)(n=e[l])&&(a=(r<3?n(a):r>3?n(i,t,a):n(i,t))||a);return r>3&&a&&Object.defineProperty(i,t,a),a
/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */}console.groupCollapsed("%c   🌘 LUNAR PHASE CARD   \n%c   v1.0.0                ","color: orange; font-weight: bold; background: black","color: white; font-weight: bold; background: dimgray"),console.info("Lovelace custom card for tracking Moon phases"),console.info("Github: https://github.com/ngocjohn/lunar-phase-card"),console.info("If you like the card, consider supporting the developer: https://github.com/sponsors/ngocjohn"),console.groupEnd();const i=globalThis,t=i.ShadowRoot&&(void 0===i.ShadyCSS||i.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,s=Symbol(),n=new WeakMap;class r{constructor(e,i,t){if(this._$cssResult$=!0,t!==s)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e,this.t=i}get styleSheet(){let e=this.o;const i=this.t;if(t&&void 0===e){const t=void 0!==i&&1===i.length;t&&(e=n.get(i)),void 0===e&&((this.o=e=new CSSStyleSheet).replaceSync(this.cssText),t&&n.set(i,e))}return e}toString(){return this.cssText}}const a=e=>new r("string"==typeof e?e:e+"",void 0,s),l=(e,...i)=>{const t=1===e.length?e[0]:i.reduce(((i,t,s)=>i+(e=>{if(!0===e._$cssResult$)return e.cssText;if("number"==typeof e)return e;throw Error("Value passed to 'css' function must be a 'css' function result: "+e+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(t)+e[s+1]),e[0]);return new r(t,e,s)},c=(e,s)=>{if(t)e.adoptedStyleSheets=s.map((e=>e instanceof CSSStyleSheet?e:e.styleSheet));else for(const t of s){const s=document.createElement("style"),n=i.litNonce;void 0!==n&&s.setAttribute("nonce",n),s.textContent=t.cssText,e.appendChild(s)}},o=t?e=>e:e=>e instanceof CSSStyleSheet?(e=>{let i="";for(const t of e.cssRules)i+=t.cssText;return a(i)})(e):e
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */,{is:d,defineProperty:m,getOwnPropertyDescriptor:p,getOwnPropertyNames:u,getOwnPropertySymbols:z,getPrototypeOf:x}=Object,R=globalThis,h=R.trustedTypes,Z=h?h.emptyScript:"",W=R.reactiveElementPolyfillSupport,V=(e,i)=>e,M={toAttribute(e,i){switch(i){case Boolean:e=e?Z:null;break;case Object:case Array:e=null==e?e:JSON.stringify(e)}return e},fromAttribute(e,i){let t=e;switch(i){case Boolean:t=null!==e;break;case Number:t=null===e?null:Number(e);break;case Object:case Array:try{t=JSON.parse(e)}catch(e){t=null}}return t}},j=(e,i)=>!d(e,i),S={attribute:!0,type:String,converter:M,reflect:!1,hasChanged:j};Symbol.metadata??=Symbol("metadata"),R.litPropertyMetadata??=new WeakMap;class I extends HTMLElement{static addInitializer(e){this._$Ei(),(this.l??=[]).push(e)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(e,i=S){if(i.state&&(i.attribute=!1),this._$Ei(),this.elementProperties.set(e,i),!i.noAccessor){const t=Symbol(),s=this.getPropertyDescriptor(e,t,i);void 0!==s&&m(this.prototype,e,s)}}static getPropertyDescriptor(e,i,t){const{get:s,set:n}=p(this.prototype,e)??{get(){return this[i]},set(e){this[i]=e}};return{get(){return s?.call(this)},set(i){const r=s?.call(this);n.call(this,i),this.requestUpdate(e,r,t)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this.elementProperties.get(e)??S}static _$Ei(){if(this.hasOwnProperty(V("elementProperties")))return;const e=x(this);e.finalize(),void 0!==e.l&&(this.l=[...e.l]),this.elementProperties=new Map(e.elementProperties)}static finalize(){if(this.hasOwnProperty(V("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(V("properties"))){const e=this.properties,i=[...u(e),...z(e)];for(const t of i)this.createProperty(t,e[t])}const e=this[Symbol.metadata];if(null!==e){const i=litPropertyMetadata.get(e);if(void 0!==i)for(const[e,t]of i)this.elementProperties.set(e,t)}this._$Eh=new Map;for(const[e,i]of this.elementProperties){const t=this._$Eu(e,i);void 0!==t&&this._$Eh.set(t,e)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(e){const i=[];if(Array.isArray(e)){const t=new Set(e.flat(1/0).reverse());for(const e of t)i.unshift(o(e))}else void 0!==e&&i.push(o(e));return i}static _$Eu(e,i){const t=i.attribute;return!1===t?void 0:"string"==typeof t?t:"string"==typeof e?e.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$ES=new Promise((e=>this.enableUpdating=e)),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach((e=>e(this)))}addController(e){(this._$EO??=new Set).add(e),void 0!==this.renderRoot&&this.isConnected&&e.hostConnected?.()}removeController(e){this._$EO?.delete(e)}_$E_(){const e=new Map,i=this.constructor.elementProperties;for(const t of i.keys())this.hasOwnProperty(t)&&(e.set(t,this[t]),delete this[t]);e.size>0&&(this._$Ep=e)}createRenderRoot(){const e=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return c(e,this.constructor.elementStyles),e}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$EO?.forEach((e=>e.hostConnected?.()))}enableUpdating(e){}disconnectedCallback(){this._$EO?.forEach((e=>e.hostDisconnected?.()))}attributeChangedCallback(e,i,t){this._$AK(e,t)}_$EC(e,i){const t=this.constructor.elementProperties.get(e),s=this.constructor._$Eu(e,t);if(void 0!==s&&!0===t.reflect){const n=(void 0!==t.converter?.toAttribute?t.converter:M).toAttribute(i,t.type);this._$Em=e,null==n?this.removeAttribute(s):this.setAttribute(s,n),this._$Em=null}}_$AK(e,i){const t=this.constructor,s=t._$Eh.get(e);if(void 0!==s&&this._$Em!==s){const e=t.getPropertyOptions(s),n="function"==typeof e.converter?{fromAttribute:e.converter}:void 0!==e.converter?.fromAttribute?e.converter:M;this._$Em=s,this[s]=n.fromAttribute(i,e.type),this._$Em=null}}requestUpdate(e,i,t){if(void 0!==e){if(t??=this.constructor.getPropertyOptions(e),!(t.hasChanged??j)(this[e],i))return;this.P(e,i,t)}!1===this.isUpdatePending&&(this._$ES=this._$ET())}P(e,i,t){this._$AL.has(e)||this._$AL.set(e,i),!0===t.reflect&&this._$Em!==e&&(this._$Ej??=new Set).add(e)}async _$ET(){this.isUpdatePending=!0;try{await this._$ES}catch(e){Promise.reject(e)}const e=this.scheduleUpdate();return null!=e&&await e,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(const[e,i]of this._$Ep)this[e]=i;this._$Ep=void 0}const e=this.constructor.elementProperties;if(e.size>0)for(const[i,t]of e)!0!==t.wrapped||this._$AL.has(i)||void 0===this[i]||this.P(i,this[i],t)}let e=!1;const i=this._$AL;try{e=this.shouldUpdate(i),e?(this.willUpdate(i),this._$EO?.forEach((e=>e.hostUpdate?.())),this.update(i)):this._$EU()}catch(i){throw e=!1,this._$EU(),i}e&&this._$AE(i)}willUpdate(e){}_$AE(e){this._$EO?.forEach((e=>e.hostUpdated?.())),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(e)),this.updated(e)}_$EU(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(e){return!0}update(e){this._$Ej&&=this._$Ej.forEach((e=>this._$EC(e,this[e]))),this._$EU()}updated(e){}firstUpdated(e){}}I.elementStyles=[],I.shadowRootOptions={mode:"open"},I[V("elementProperties")]=new Map,I[V("finalized")]=new Map,W?.({ReactiveElement:I}),(R.reactiveElementVersions??=[]).push("2.0.4");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const b=globalThis,y=b.trustedTypes,q=y?y.createPolicy("lit-html",{createHTML:e=>e}):void 0,E="$lit$",w=`lit$${Math.random().toFixed(9).slice(2)}$`,Y="?"+w,v=`<${Y}>`,K=document,f=()=>K.createComment(""),O=e=>null===e||"object"!=typeof e&&"function"!=typeof e,F=Array.isArray,L=e=>F(e)||"function"==typeof e?.[Symbol.iterator],U="[ \t\n\f\r]",P=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,J=/-->/g,k=/>/g,G=RegExp(`>|${U}(?:([^\\s"'>=/]+)(${U}*=${U}*(?:[^ \t\n\f\r"'\`<>=]|("|')|))|$)`,"g"),N=/'/g,X=/"/g,g=/^(?:script|style|textarea|title)$/i,T=e=>(i,...t)=>({_$litType$:e,strings:i,values:t}),C=T(1),H=Symbol.for("lit-noChange"),A=Symbol.for("lit-nothing"),D=new WeakMap,Q=K.createTreeWalker(K,129);function B(e,i){if(!Array.isArray(e)||!e.hasOwnProperty("raw"))throw Error("invalid template strings array");return void 0!==q?q.createHTML(i):i}const _=(e,i)=>{const t=e.length-1,s=[];let n,r=2===i?"<svg>":"",a=P;for(let i=0;i<t;i++){const t=e[i];let l,c,o=-1,d=0;for(;d<t.length&&(a.lastIndex=d,c=a.exec(t),null!==c);)d=a.lastIndex,a===P?"!--"===c[1]?a=J:void 0!==c[1]?a=k:void 0!==c[2]?(g.test(c[2])&&(n=RegExp("</"+c[2],"g")),a=G):void 0!==c[3]&&(a=G):a===G?">"===c[0]?(a=n??P,o=-1):void 0===c[1]?o=-2:(o=a.lastIndex-c[2].length,l=c[1],a=void 0===c[3]?G:'"'===c[3]?X:N):a===X||a===N?a=G:a===J||a===k?a=P:(a=G,n=void 0);const m=a===G&&e[i+1].startsWith("/>")?" ":"";r+=a===P?t+v:o>=0?(s.push(l),t.slice(0,o)+E+t.slice(o)+w+m):t+w+(-2===o?i:m)}return[B(e,r+(e[t]||"<?>")+(2===i?"</svg>":"")),s]};class ${constructor({strings:e,_$litType$:i},t){let s;this.parts=[];let n=0,r=0;const a=e.length-1,l=this.parts,[c,o]=_(e,i);if(this.el=$.createElement(c,t),Q.currentNode=this.el.content,2===i){const e=this.el.content.firstChild;e.replaceWith(...e.childNodes)}for(;null!==(s=Q.nextNode())&&l.length<a;){if(1===s.nodeType){if(s.hasAttributes())for(const e of s.getAttributeNames())if(e.endsWith(E)){const i=o[r++],t=s.getAttribute(e).split(w),a=/([.?@])?(.*)/.exec(i);l.push({type:1,index:n,name:a[2],strings:t,ctor:"."===a[1]?ne:"?"===a[1]?re:"@"===a[1]?ae:se}),s.removeAttribute(e)}else e.startsWith(w)&&(l.push({type:6,index:n}),s.removeAttribute(e));if(g.test(s.tagName)){const e=s.textContent.split(w),i=e.length-1;if(i>0){s.textContent=y?y.emptyScript:"";for(let t=0;t<i;t++)s.append(e[t],f()),Q.nextNode(),l.push({type:2,index:++n});s.append(e[i],f())}}}else if(8===s.nodeType)if(s.data===Y)l.push({type:2,index:n});else{let e=-1;for(;-1!==(e=s.data.indexOf(w,e+1));)l.push({type:7,index:n}),e+=w.length-1}n++}}static createElement(e,i){const t=K.createElement("template");return t.innerHTML=e,t}}function ee(e,i,t=e,s){if(i===H)return i;let n=void 0!==s?t._$Co?.[s]:t._$Cl;const r=O(i)?void 0:i._$litDirective$;return n?.constructor!==r&&(n?._$AO?.(!1),void 0===r?n=void 0:(n=new r(e),n._$AT(e,t,s)),void 0!==s?(t._$Co??=[])[s]=n:t._$Cl=n),void 0!==n&&(i=ee(e,n._$AS(e,i.values),n,s)),i}class ie{constructor(e,i){this._$AV=[],this._$AN=void 0,this._$AD=e,this._$AM=i}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(e){const{el:{content:i},parts:t}=this._$AD,s=(e?.creationScope??K).importNode(i,!0);Q.currentNode=s;let n=Q.nextNode(),r=0,a=0,l=t[0];for(;void 0!==l;){if(r===l.index){let i;2===l.type?i=new te(n,n.nextSibling,this,e):1===l.type?i=new l.ctor(n,l.name,l.strings,this,e):6===l.type&&(i=new le(n,this,e)),this._$AV.push(i),l=t[++a]}r!==l?.index&&(n=Q.nextNode(),r++)}return Q.currentNode=K,s}p(e){let i=0;for(const t of this._$AV)void 0!==t&&(void 0!==t.strings?(t._$AI(e,t,i),i+=t.strings.length-2):t._$AI(e[i])),i++}}class te{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(e,i,t,s){this.type=2,this._$AH=A,this._$AN=void 0,this._$AA=e,this._$AB=i,this._$AM=t,this.options=s,this._$Cv=s?.isConnected??!0}get parentNode(){let e=this._$AA.parentNode;const i=this._$AM;return void 0!==i&&11===e?.nodeType&&(e=i.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,i=this){e=ee(this,e,i),O(e)?e===A||null==e||""===e?(this._$AH!==A&&this._$AR(),this._$AH=A):e!==this._$AH&&e!==H&&this._(e):void 0!==e._$litType$?this.$(e):void 0!==e.nodeType?this.T(e):L(e)?this.k(e):this._(e)}S(e){return this._$AA.parentNode.insertBefore(e,this._$AB)}T(e){this._$AH!==e&&(this._$AR(),this._$AH=this.S(e))}_(e){this._$AH!==A&&O(this._$AH)?this._$AA.nextSibling.data=e:this.T(K.createTextNode(e)),this._$AH=e}$(e){const{values:i,_$litType$:t}=e,s="number"==typeof t?this._$AC(e):(void 0===t.el&&(t.el=$.createElement(B(t.h,t.h[0]),this.options)),t);if(this._$AH?._$AD===s)this._$AH.p(i);else{const e=new ie(s,this),t=e.u(this.options);e.p(i),this.T(t),this._$AH=e}}_$AC(e){let i=D.get(e.strings);return void 0===i&&D.set(e.strings,i=new $(e)),i}k(e){F(this._$AH)||(this._$AH=[],this._$AR());const i=this._$AH;let t,s=0;for(const n of e)s===i.length?i.push(t=new te(this.S(f()),this.S(f()),this,this.options)):t=i[s],t._$AI(n),s++;s<i.length&&(this._$AR(t&&t._$AB.nextSibling,s),i.length=s)}_$AR(e=this._$AA.nextSibling,i){for(this._$AP?.(!1,!0,i);e&&e!==this._$AB;){const i=e.nextSibling;e.remove(),e=i}}setConnected(e){void 0===this._$AM&&(this._$Cv=e,this._$AP?.(e))}}class se{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(e,i,t,s,n){this.type=1,this._$AH=A,this._$AN=void 0,this.element=e,this.name=i,this._$AM=s,this.options=n,t.length>2||""!==t[0]||""!==t[1]?(this._$AH=Array(t.length-1).fill(new String),this.strings=t):this._$AH=A}_$AI(e,i=this,t,s){const n=this.strings;let r=!1;if(void 0===n)e=ee(this,e,i,0),r=!O(e)||e!==this._$AH&&e!==H,r&&(this._$AH=e);else{const s=e;let a,l;for(e=n[0],a=0;a<n.length-1;a++)l=ee(this,s[t+a],i,a),l===H&&(l=this._$AH[a]),r||=!O(l)||l!==this._$AH[a],l===A?e=A:e!==A&&(e+=(l??"")+n[a+1]),this._$AH[a]=l}r&&!s&&this.j(e)}j(e){e===A?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,e??"")}}class ne extends se{constructor(){super(...arguments),this.type=3}j(e){this.element[this.name]=e===A?void 0:e}}class re extends se{constructor(){super(...arguments),this.type=4}j(e){this.element.toggleAttribute(this.name,!!e&&e!==A)}}class ae extends se{constructor(e,i,t,s,n){super(e,i,t,s,n),this.type=5}_$AI(e,i=this){if((e=ee(this,e,i,0)??A)===H)return;const t=this._$AH,s=e===A&&t!==A||e.capture!==t.capture||e.once!==t.once||e.passive!==t.passive,n=e!==A&&(t===A||s);s&&this.element.removeEventListener(this.name,this,t),n&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){"function"==typeof this._$AH?this._$AH.call(this.options?.host??this.element,e):this._$AH.handleEvent(e)}}class le{constructor(e,i,t){this.element=e,this.type=6,this._$AN=void 0,this._$AM=i,this.options=t}get _$AU(){return this._$AM._$AU}_$AI(e){ee(this,e)}}const ce=b.litHtmlPolyfillSupport;ce?.($,te),(b.litHtmlVersions??=[]).push("3.1.4");const oe=(e,i,t)=>{const s=t?.renderBefore??i;let n=s._$litPart$;if(void 0===n){const e=t?.renderBefore??null;s._$litPart$=n=new te(i.insertBefore(f(),e),e,void 0,t??{})}return n._$AI(e),n
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */};class de extends I{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){const e=super.createRenderRoot();return this.renderOptions.renderBefore??=e.firstChild,e}update(e){const i=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(e),this._$Do=oe(i,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return H}}de._$litElement$=!0,de.finalized=!0,globalThis.litElementHydrateSupport?.({LitElement:de});const me=globalThis.litElementPolyfillSupport;me?.({LitElement:de}),(globalThis.litElementVersions??=[]).push("4.0.6");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const pe=e=>(i,t)=>{void 0!==t?t.addInitializer((()=>{customElements.define(e,i)})):customElements.define(e,i)}
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */,ue={attribute:!0,type:String,converter:M,reflect:!1,hasChanged:j},ze=(e=ue,i,t)=>{const{kind:s,metadata:n}=t;let r=globalThis.litPropertyMetadata.get(n);if(void 0===r&&globalThis.litPropertyMetadata.set(n,r=new Map),r.set(t.name,e),"accessor"===s){const{name:s}=t;return{set(t){const n=i.get.call(this);i.set.call(this,t),this.requestUpdate(s,n,e)},init(i){return void 0!==i&&this.P(s,void 0,e),i}}}if("setter"===s){const{name:s}=t;return function(t){const n=this[s];i.call(this,t),this.requestUpdate(s,n,e)}}throw Error("Unsupported decorator location: "+s)};function xe(e){return(i,t)=>"object"==typeof t?ze(e,i,t):((e,i,t)=>{const s=i.hasOwnProperty(t);return i.constructor.createProperty(t,s?{...e,wrapped:!0}:e),s?Object.getOwnPropertyDescriptor(i,t):void 0})(e,i,t)
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */}function Re(e){return xe({...e,state:!0,attribute:!1})}
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const he={ATTRIBUTE:1,CHILD:2,PROPERTY:3,BOOLEAN_ATTRIBUTE:4,EVENT:5,ELEMENT:6},Ze=e=>(...i)=>({_$litDirective$:e,values:i});class We{constructor(e){}get _$AU(){return this._$AM._$AU}_$AT(e,i,t){this._$Ct=e,this._$AM=i,this._$Ci=t}_$AS(e,i){return this.update(e,i)}update(e,i){return this.render(...i)}}
/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Ve=Ze(class extends We{constructor(e){if(super(e),e.type!==he.ATTRIBUTE||"class"!==e.name||e.strings?.length>2)throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.")}render(e){return" "+Object.keys(e).filter((i=>e[i])).join(" ")+" "}update(e,[i]){if(void 0===this.st){this.st=new Set,void 0!==e.strings&&(this.nt=new Set(e.strings.join(" ").split(/\s/).filter((e=>""!==e))));for(const e in i)i[e]&&!this.nt?.has(e)&&this.st.add(e);return this.render(i)}const t=e.element.classList;for(const e of this.st)e in i||(t.remove(e),this.st.delete(e));for(const e in i){const s=!!i[e];s===this.st.has(e)||this.nt?.has(e)||(s?(t.add(e),this.st.add(e)):(t.remove(e),this.st.delete(e)))}return H}}),Me="important",je=" !"+Me,Se=Ze(class extends We{constructor(e){if(super(e),e.type!==he.ATTRIBUTE||"style"!==e.name||e.strings?.length>2)throw Error("The `styleMap` directive must be used in the `style` attribute and must be the only part in the attribute.")}render(e){return Object.keys(e).reduce(((i,t)=>{const s=e[t];return null==s?i:i+`${t=t.includes("-")?t:t.replace(/(?:^(webkit|moz|ms|o)|)(?=[A-Z])/g,"-$&").toLowerCase()}:${s};`}),"")}update(e,[i]){const{style:t}=e.element;if(void 0===this.ft)return this.ft=new Set(Object.keys(i)),this.render(i);for(const e of this.ft)null==i[e]&&(this.ft.delete(e),e.includes("-")?t.removeProperty(e):t[e]=null);for(const e in i){const s=i[e];if(null!=s){this.ft.add(e);const i="string"==typeof s&&s.endsWith(je);e.includes("-")||i?t.setProperty(e,i?s.slice(0,-11):s,i?Me:""):t[e]=s}}return H}});
/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
  font-family:
    system-ui, -apple-system, Segoe UI, Roboto, Ubuntu, Cantarell, Noto Sans, sans-serif,
    BlinkMacSystemFont,
    'Segoe UI',
    Roboto,
    Oxygen,
    Ubuntu,
    Cantarell,
    'Open Sans',
    'Helvetica Neue',
    sans-serif;
}
*:focus {
  outline: none;
}

ha-card {
  position: relative;
  overflow: hidden;
  display: block;
  width: 100%;
  height: auto;
  background-color: var(--card-background-color);
  letter-spacing: 0.5px;
  padding: 1rem;
  --swiper-pagination-bullet-inactive-color: var(--secondary-text-color);
}

@media screen and (max-width: 800px) {
  ha-card {
    font-size: 1.2vh !important;
  }
  .moon-image {
    width: 100%;
    max-width: 100px !important;
    max-height: 100px !important;
  }
}

ha-card.--background {
  background-size: cover;
  background-position: top center;
  background-repeat: no-repeat;
  background-image: var(--lunar-background-image);
  transition: all 0.5s ease;
  --primary-text-color: #e1e1e1;
  --swiper-theme-color: var(--primary-text-color);
}

.lunar-card-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.5rem 0px 1.5rem;
}

.lunar-card-header.flexend {
  justify-content: flex-end;
}

h1 {
  color: --primary-text-color;
  color: var(--ha-card-header-color, --primary-text-color);
  font-family: inherit;
  font-family: var(--ha-card-header-font-family, inherit);
  display: block;
  margin-top: 0px;
  margin-bottom: 0px;
  font-weight: 400;
  text-transform: capitalize;
}
.btn-calendar {
  display: block;
  color: var(--disabled-text-color);
  cursor: pointer;
  transition: all 0.3s ease;
}
.btn-calendar:hover {
  color: var(--primary-text-color);
  opacity: 1;
}

.click-shrink {
  transition: transform 0.1s;
}

.click-shrink:active {
  transform: scale(0.9);
}

.lunar-card-content {
  display: flex;
  padding: 0;
  justify-content: space-between;
  align-items: center;
  gap: 1.5rem;
}

.lunar-card-content.flex-col {
  flex-direction: column;
  gap: 0;
}
.moon-image {
  display: block;
  width: 100%;
  max-width: 130px;
  max-height: 130px;
  transition: transform 0.5s;
  -webkit-user-select: none;
  -moz-user-select: none;
  user-select: none;
}

.moon-image > img {
  width: 100%;
  height: auto;
  -o-object-fit: cover;
     object-fit: cover;
  -webkit-user-select: none;
     -moz-user-select: none;
          user-select: none;
  filter: grayscale(1) drop-shadow(0 0px 1rem black);
}

@keyframes fadeIn {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}

.slide-animation {
  animation: fadeIn 1s ease-out forwards;
}

.moon-data {
  width: 100%;
}
.moon-data-item {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  gap: 0.5rem;
  border-bottom: 1px solid var(--divider-color);
  padding-top: 0.25rem;
  padding-bottom: 0.25rem;
}

.moon-data-item:last-child {
  border-bottom: none;
  padding-bottom: 0;
}

.moon-data-item > span.label {
  display: block;
  color: var(--primary-text-color);
  width: 50%;
}

.moon-data-item > .value {
  display: flex;
  color: var(--primary-text-color);
  font-weight: 600;
  width: 50%;
  justify-content: space-between;
}
.value > span {
  font-weight: 400;
  font-size: smaller;
}

/* SWIPER */
lunar-base-data {
  display: block;
  width: 100%;
  padding: 0;
  margin: 0;
  overflow: hidden;
}

section {
  display: block;
  width: 100%;
  height: auto;
  overflow: hidden;
}
.swiper-container {
  width: 100%;
  height: 100%;
  display: block;
}
.swiper-wrapper {
  margin-bottom: 1rem;
}
.swiper-slide {
  display: block;
  width: -moz-fit-content;
  width: fit-content;
}

.swiper-pagination {
  position: relative !important;
}
.swiper-pagination-bullet {
  background-color: var(--swiper-theme-color);
  transition: all 0.3s ease-in-out !important;
}
.swiper-pagination-bullet-active {
  width: 12px !important;
  border-radius: 0.5rem !important;
  opacity: 0.7;
}

/* CALENDAR */
.calendar-wrapper {
  display: flex;
  width: 100%;
  flex-direction: column;
  gap: 1rem;
  --calendar-background-color: rgba(255,255,255,0.12157);
}
.date-input-wrapper {
  display: flex;
  width: 100%;
  position: relative;
  justify-content: space-around;
  align-items: baseline;
  gap: 1rem;
}
.date-input-label {
  display: block;
  color: var(--primary-text-color);
  font-size: 16px;
  font-weight: 600;
  margin-bottom: 8px;
}
.date-input {
  display: block;
  width: -moz-fit-content;
  width: fit-content;
  padding: 0.5rem;
  border: 1px solid var(--divider-color);
  border-radius: 0.5rem;
  color: var(--primary-text-color);
  background-color: var(--calendar-background-color);
  transition: all 0.3s ease;
  box-sizing: border-box;
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  cursor: pointer;
}
.date-input:focus {
  border-color: var(--primary-color);
  outline: none;
}

button.date-input-btn {
  cursor: pointer;
  background-color: var(--calendar-background-color);
  border: 1px solid var(--divider-color);
  border-radius: 0.5rem;
  padding: 0.5rem 1rem;
  color: var(--primary-text-color);
  transition: all 0.3s ease;
  font-weight: 600;
}
button.date-input-btn:hover {
  background-color: var(--primary-color);
  color: var(--primary-background-color);
}

/* COMPACT VIEW */

.btn-calendar.compact {
  position: absolute;
  top: 1rem;
  right: 1rem;
}
.compact-view {
  display: flex;
  width: 100%;
  flex-direction: column;
  gap: 0.5rem;
}

.moon-fraction {
  font-weight: inherit;
  color: var(--primary-text-color);
  letter-spacing: 1.5px;
  line-height: 24px;
}

.compact-view-items {
  margin-top: 1rem;
  display: flex;
  width: 100%;
  justify-content: space-between;
  --mdc-icon-size: 17px;
}

.compact-item .value {
  color: var(--secondary-text-color);
}
`;ei(ii);var ti=l`/**
 * Swiper 11.1.4
 * Most modern mobile touch slider and framework with hardware accelerated transitions
 * https://swiperjs.com
 *
 * Copyright 2014-2024 Vladimir Kharlampidi
 *
 * Released under the MIT License
 *
 * Released on: May 30, 2024
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
`;function si(e){return null!==e&&"object"==typeof e&&"constructor"in e&&e.constructor===Object}function ni(e,i){void 0===e&&(e={}),void 0===i&&(i={}),Object.keys(i).forEach((t=>{void 0===e[t]?e[t]=i[t]:si(i[t])&&si(e[t])&&Object.keys(i[t]).length>0&&ni(e[t],i[t])}))}ei(ti);const ri={body:{},addEventListener(){},removeEventListener(){},activeElement:{blur(){},nodeName:""},querySelector:()=>null,querySelectorAll:()=>[],getElementById:()=>null,createEvent:()=>({initEvent(){}}),createElement:()=>({children:[],childNodes:[],style:{},setAttribute(){},getElementsByTagName:()=>[]}),createElementNS:()=>({}),importNode:()=>null,location:{hash:"",host:"",hostname:"",href:"",origin:"",pathname:"",protocol:"",search:""}};function ai(){const e="undefined"!=typeof document?document:{};return ni(e,ri),e}const li={document:ri,navigator:{userAgent:""},location:{hash:"",host:"",hostname:"",href:"",origin:"",pathname:"",protocol:"",search:""},history:{replaceState(){},pushState(){},go(){},back(){}},CustomEvent:function(){return this},addEventListener(){},removeEventListener(){},getComputedStyle:()=>({getPropertyValue:()=>""}),Image(){},Date(){},screen:{},setTimeout(){},clearTimeout(){},matchMedia:()=>({}),requestAnimationFrame:e=>"undefined"==typeof setTimeout?(e(),null):setTimeout(e,0),cancelAnimationFrame(e){"undefined"!=typeof setTimeout&&clearTimeout(e)}};function ci(){const e="undefined"!=typeof window?window:{};return ni(e,li),e}function oi(e){return void 0===e&&(e=""),e.trim().split(" ").filter((e=>!!e.trim()))}function di(e){const i=e;Object.keys(i).forEach((e=>{try{i[e]=null}catch(e){}try{delete i[e]}catch(e){}}))}function mi(e,i){return void 0===i&&(i=0),setTimeout(e,i)}function pi(){return Date.now()}function ui(e){const i=ci();let t;return i.getComputedStyle&&(t=i.getComputedStyle(e,null)),!t&&e.currentStyle&&(t=e.currentStyle),t||(t=e.style),t}function zi(e,i){void 0===i&&(i="x");const t=ci();let s,n,r;const a=ui(e);return t.WebKitCSSMatrix?(n=a.transform||a.webkitTransform,n.split(",").length>6&&(n=n.split(", ").map((e=>e.replace(",","."))).join(", ")),r=new t.WebKitCSSMatrix("none"===n?"":n)):(r=a.MozTransform||a.OTransform||a.MsTransform||a.msTransform||a.transform||a.getPropertyValue("transform").replace("translate(","matrix(1, 0, 0, 1,"),s=r.toString().split(",")),"x"===i&&(n=t.WebKitCSSMatrix?r.m41:16===s.length?parseFloat(s[12]):parseFloat(s[4])),"y"===i&&(n=t.WebKitCSSMatrix?r.m42:16===s.length?parseFloat(s[13]):parseFloat(s[5])),n||0}function xi(e){return"object"==typeof e&&null!==e&&e.constructor&&"Object"===Object.prototype.toString.call(e).slice(8,-1)}function Ri(e){return"undefined"!=typeof window&&void 0!==window.HTMLElement?e instanceof HTMLElement:e&&(1===e.nodeType||11===e.nodeType)}function hi(){const e=Object(arguments.length<=0?void 0:arguments[0]),i=["__proto__","constructor","prototype"];for(let t=1;t<arguments.length;t+=1){const s=t<0||arguments.length<=t?void 0:arguments[t];if(null!=s&&!Ri(s)){const t=Object.keys(Object(s)).filter((e=>i.indexOf(e)<0));for(let i=0,n=t.length;i<n;i+=1){const n=t[i],r=Object.getOwnPropertyDescriptor(s,n);void 0!==r&&r.enumerable&&(xi(e[n])&&xi(s[n])?s[n].__swiper__?e[n]=s[n]:hi(e[n],s[n]):!xi(e[n])&&xi(s[n])?(e[n]={},s[n].__swiper__?e[n]=s[n]:hi(e[n],s[n])):e[n]=s[n])}}}return e}function Zi(e,i,t){e.style.setProperty(i,t)}function Wi(e){let{swiper:i,targetPosition:t,side:s}=e;const n=ci(),r=-i.translate;let a,l=null;const c=i.params.speed;i.wrapperEl.style.scrollSnapType="none",n.cancelAnimationFrame(i.cssModeFrameID);const o=t>r?"next":"prev",d=(e,i)=>"next"===o&&e>=i||"prev"===o&&e<=i,m=()=>{a=(new Date).getTime(),null===l&&(l=a);const e=Math.max(Math.min((a-l)/c,1),0),o=.5-Math.cos(e*Math.PI)/2;let p=r+o*(t-r);if(d(p,t)&&(p=t),i.wrapperEl.scrollTo({[s]:p}),d(p,t))return i.wrapperEl.style.overflow="hidden",i.wrapperEl.style.scrollSnapType="",setTimeout((()=>{i.wrapperEl.style.overflow="",i.wrapperEl.scrollTo({[s]:p})})),void n.cancelAnimationFrame(i.cssModeFrameID);i.cssModeFrameID=n.requestAnimationFrame(m)};m()}function Vi(e,i){return void 0===i&&(i=""),[...e.children].filter((e=>e.matches(i)))}function Mi(e){try{return void console.warn(e)}catch(e){}}function ji(e,i){void 0===i&&(i=[]);const t=document.createElement(e);return t.classList.add(...Array.isArray(i)?i:oi(i)),t}function Si(e,i){const t=[];for(;e.previousElementSibling;){const s=e.previousElementSibling;i?s.matches(i)&&t.push(s):t.push(s),e=s}return t}function Ii(e,i){const t=[];for(;e.nextElementSibling;){const s=e.nextElementSibling;i?s.matches(i)&&t.push(s):t.push(s),e=s}return t}function bi(e,i){return ci().getComputedStyle(e,null).getPropertyValue(i)}function yi(e){let i,t=e;if(t){for(i=0;null!==(t=t.previousSibling);)1===t.nodeType&&(i+=1);return i}}function qi(e,i){const t=[];let s=e.parentElement;for(;s;)i?s.matches(i)&&t.push(s):t.push(s),s=s.parentElement;return t}function Ei(e,i,t){const s=ci();return t?e["width"===i?"offsetWidth":"offsetHeight"]+parseFloat(s.getComputedStyle(e,null).getPropertyValue("width"===i?"margin-right":"margin-top"))+parseFloat(s.getComputedStyle(e,null).getPropertyValue("width"===i?"margin-left":"margin-bottom")):e.offsetWidth}function wi(e){return(Array.isArray(e)?e:[e]).filter((e=>!!e))}let Yi,vi,Ki;function fi(){const e=ci(),i=ai();return{smoothScroll:i.documentElement&&i.documentElement.style&&"scrollBehavior"in i.documentElement.style,touch:!!("ontouchstart"in e||e.DocumentTouch&&i instanceof e.DocumentTouch)}}function Oi(){return Yi||(Yi=fi()),Yi}function Fi(e){let{userAgent:i}=void 0===e?{}:e;const t=Oi(),s=ci(),n=s.navigator.platform,r=i||s.navigator.userAgent,a={ios:!1,android:!1},l=s.screen.width,c=s.screen.height,o=r.match(/(Android);?[\s\/]+([\d.]+)?/);let d=r.match(/(iPad).*OS\s([\d_]+)/);const m=r.match(/(iPod)(.*OS\s([\d_]+))?/),p=!d&&r.match(/(iPhone\sOS|iOS)\s([\d_]+)/),u="Win32"===n;let z="MacIntel"===n;return!d&&z&&t.touch&&["1024x1366","1366x1024","834x1194","1194x834","834x1112","1112x834","768x1024","1024x768","820x1180","1180x820","810x1080","1080x810"].indexOf(`${l}x${c}`)>=0&&(d=r.match(/(Version)\/([\d.]+)/),d||(d=[0,1,"13_0_0"]),z=!1),o&&!u&&(a.os="android",a.android=!0),(d||p||m)&&(a.os="ios",a.ios=!0),a}function Li(e){return void 0===e&&(e={}),vi||(vi=Fi(e)),vi}function Ui(){const e=ci(),i=Li();let t=!1;function s(){const i=e.navigator.userAgent.toLowerCase();return i.indexOf("safari")>=0&&i.indexOf("chrome")<0&&i.indexOf("android")<0}if(s()){const i=String(e.navigator.userAgent);if(i.includes("Version/")){const[e,s]=i.split("Version/")[1].split(" ")[0].split(".").map((e=>Number(e)));t=e<16||16===e&&s<2}}const n=/(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i.test(e.navigator.userAgent),r=s();return{isSafari:t||r,needPerspectiveFix:t,need3dFix:r||n&&i.ios,isWebView:n}}function Pi(){return Ki||(Ki=Ui()),Ki}function Ji(e){let{swiper:i,on:t,emit:s}=e;const n=ci();let r=null,a=null;const l=()=>{i&&!i.destroyed&&i.initialized&&(s("beforeResize"),s("resize"))},c=()=>{i&&!i.destroyed&&i.initialized&&s("orientationchange")};t("init",(()=>{i.params.resizeObserver&&void 0!==n.ResizeObserver?i&&!i.destroyed&&i.initialized&&(r=new ResizeObserver((e=>{a=n.requestAnimationFrame((()=>{const{width:t,height:s}=i;let n=t,r=s;e.forEach((e=>{let{contentBoxSize:t,contentRect:s,target:a}=e;a&&a!==i.el||(n=s?s.width:(t[0]||t).inlineSize,r=s?s.height:(t[0]||t).blockSize)})),n===t&&r===s||l()}))})),r.observe(i.el)):(n.addEventListener("resize",l),n.addEventListener("orientationchange",c))})),t("destroy",(()=>{a&&n.cancelAnimationFrame(a),r&&r.unobserve&&i.el&&(r.unobserve(i.el),r=null),n.removeEventListener("resize",l),n.removeEventListener("orientationchange",c)}))}function ki(e){let{swiper:i,extendParams:t,on:s,emit:n}=e;const r=[],a=ci(),l=function(e,t){void 0===t&&(t={});const s=new(a.MutationObserver||a.WebkitMutationObserver)((e=>{if(i.__preventObserver__)return;if(1===e.length)return void n("observerUpdate",e[0]);const t=function(){n("observerUpdate",e[0])};a.requestAnimationFrame?a.requestAnimationFrame(t):a.setTimeout(t,0)}));s.observe(e,{attributes:void 0===t.attributes||t.attributes,childList:void 0===t.childList||t.childList,characterData:void 0===t.characterData||t.characterData}),r.push(s)};t({observer:!1,observeParents:!1,observeSlideChildren:!1}),s("init",(()=>{if(i.params.observer){if(i.params.observeParents){const e=qi(i.hostEl);for(let i=0;i<e.length;i+=1)l(e[i])}l(i.hostEl,{childList:i.params.observeSlideChildren}),l(i.wrapperEl,{attributes:!1})}})),s("destroy",(()=>{r.forEach((e=>{e.disconnect()})),r.splice(0,r.length)}))}var Gi={on(e,i,t){const s=this;if(!s.eventsListeners||s.destroyed)return s;if("function"!=typeof i)return s;const n=t?"unshift":"push";return e.split(" ").forEach((e=>{s.eventsListeners[e]||(s.eventsListeners[e]=[]),s.eventsListeners[e][n](i)})),s},once(e,i,t){const s=this;if(!s.eventsListeners||s.destroyed)return s;if("function"!=typeof i)return s;function n(){s.off(e,n),n.__emitterProxy&&delete n.__emitterProxy;for(var t=arguments.length,r=new Array(t),a=0;a<t;a++)r[a]=arguments[a];i.apply(s,r)}return n.__emitterProxy=i,s.on(e,n,t)},onAny(e,i){const t=this;if(!t.eventsListeners||t.destroyed)return t;if("function"!=typeof e)return t;const s=i?"unshift":"push";return t.eventsAnyListeners.indexOf(e)<0&&t.eventsAnyListeners[s](e),t},offAny(e){const i=this;if(!i.eventsListeners||i.destroyed)return i;if(!i.eventsAnyListeners)return i;const t=i.eventsAnyListeners.indexOf(e);return t>=0&&i.eventsAnyListeners.splice(t,1),i},off(e,i){const t=this;return!t.eventsListeners||t.destroyed?t:t.eventsListeners?(e.split(" ").forEach((e=>{void 0===i?t.eventsListeners[e]=[]:t.eventsListeners[e]&&t.eventsListeners[e].forEach(((s,n)=>{(s===i||s.__emitterProxy&&s.__emitterProxy===i)&&t.eventsListeners[e].splice(n,1)}))})),t):t},emit(){const e=this;if(!e.eventsListeners||e.destroyed)return e;if(!e.eventsListeners)return e;let i,t,s;for(var n=arguments.length,r=new Array(n),a=0;a<n;a++)r[a]=arguments[a];"string"==typeof r[0]||Array.isArray(r[0])?(i=r[0],t=r.slice(1,r.length),s=e):(i=r[0].events,t=r[0].data,s=r[0].context||e),t.unshift(s);return(Array.isArray(i)?i:i.split(" ")).forEach((i=>{e.eventsAnyListeners&&e.eventsAnyListeners.length&&e.eventsAnyListeners.forEach((e=>{e.apply(s,[i,...t])})),e.eventsListeners&&e.eventsListeners[i]&&e.eventsListeners[i].forEach((e=>{e.apply(s,t)}))})),e}};function Ni(){const e=this;let i,t;const s=e.el;i=void 0!==e.params.width&&null!==e.params.width?e.params.width:s.clientWidth,t=void 0!==e.params.height&&null!==e.params.height?e.params.height:s.clientHeight,0===i&&e.isHorizontal()||0===t&&e.isVertical()||(i=i-parseInt(bi(s,"padding-left")||0,10)-parseInt(bi(s,"padding-right")||0,10),t=t-parseInt(bi(s,"padding-top")||0,10)-parseInt(bi(s,"padding-bottom")||0,10),Number.isNaN(i)&&(i=0),Number.isNaN(t)&&(t=0),Object.assign(e,{width:i,height:t,size:e.isHorizontal()?i:t}))}function Xi(){const e=this;function i(i,t){return parseFloat(i.getPropertyValue(e.getDirectionLabel(t))||0)}const t=e.params,{wrapperEl:s,slidesEl:n,size:r,rtlTranslate:a,wrongRTL:l}=e,c=e.virtual&&t.virtual.enabled,o=c?e.virtual.slides.length:e.slides.length,d=Vi(n,`.${e.params.slideClass}, swiper-slide`),m=c?e.virtual.slides.length:d.length;let p=[];const u=[],z=[];let x=t.slidesOffsetBefore;"function"==typeof x&&(x=t.slidesOffsetBefore.call(e));let R=t.slidesOffsetAfter;"function"==typeof R&&(R=t.slidesOffsetAfter.call(e));const h=e.snapGrid.length,Z=e.slidesGrid.length;let W=t.spaceBetween,V=-x,M=0,j=0;if(void 0===r)return;"string"==typeof W&&W.indexOf("%")>=0?W=parseFloat(W.replace("%",""))/100*r:"string"==typeof W&&(W=parseFloat(W)),e.virtualSize=-W,d.forEach((e=>{a?e.style.marginLeft="":e.style.marginRight="",e.style.marginBottom="",e.style.marginTop=""})),t.centeredSlides&&t.cssMode&&(Zi(s,"--swiper-centered-offset-before",""),Zi(s,"--swiper-centered-offset-after",""));const S=t.grid&&t.grid.rows>1&&e.grid;let I;S?e.grid.initSlides(d):e.grid&&e.grid.unsetSlides();const b="auto"===t.slidesPerView&&t.breakpoints&&Object.keys(t.breakpoints).filter((e=>void 0!==t.breakpoints[e].slidesPerView)).length>0;for(let s=0;s<m;s+=1){let n;if(I=0,d[s]&&(n=d[s]),S&&e.grid.updateSlide(s,n,d),!d[s]||"none"!==bi(n,"display")){if("auto"===t.slidesPerView){b&&(d[s].style[e.getDirectionLabel("width")]="");const r=getComputedStyle(n),a=n.style.transform,l=n.style.webkitTransform;if(a&&(n.style.transform="none"),l&&(n.style.webkitTransform="none"),t.roundLengths)I=e.isHorizontal()?Ei(n,"width",!0):Ei(n,"height",!0);else{const e=i(r,"width"),t=i(r,"padding-left"),s=i(r,"padding-right"),a=i(r,"margin-left"),l=i(r,"margin-right"),c=r.getPropertyValue("box-sizing");if(c&&"border-box"===c)I=e+a+l;else{const{clientWidth:i,offsetWidth:r}=n;I=e+t+s+a+l+(r-i)}}a&&(n.style.transform=a),l&&(n.style.webkitTransform=l),t.roundLengths&&(I=Math.floor(I))}else I=(r-(t.slidesPerView-1)*W)/t.slidesPerView,t.roundLengths&&(I=Math.floor(I)),d[s]&&(d[s].style[e.getDirectionLabel("width")]=`${I}px`);d[s]&&(d[s].swiperSlideSize=I),z.push(I),t.centeredSlides?(V=V+I/2+M/2+W,0===M&&0!==s&&(V=V-r/2-W),0===s&&(V=V-r/2-W),Math.abs(V)<.001&&(V=0),t.roundLengths&&(V=Math.floor(V)),j%t.slidesPerGroup==0&&p.push(V),u.push(V)):(t.roundLengths&&(V=Math.floor(V)),(j-Math.min(e.params.slidesPerGroupSkip,j))%e.params.slidesPerGroup==0&&p.push(V),u.push(V),V=V+I+W),e.virtualSize+=I+W,M=I,j+=1}}if(e.virtualSize=Math.max(e.virtualSize,r)+R,a&&l&&("slide"===t.effect||"coverflow"===t.effect)&&(s.style.width=`${e.virtualSize+W}px`),t.setWrapperSize&&(s.style[e.getDirectionLabel("width")]=`${e.virtualSize+W}px`),S&&e.grid.updateWrapperSize(I,p),!t.centeredSlides){const i=[];for(let s=0;s<p.length;s+=1){let n=p[s];t.roundLengths&&(n=Math.floor(n)),p[s]<=e.virtualSize-r&&i.push(n)}p=i,Math.floor(e.virtualSize-r)-Math.floor(p[p.length-1])>1&&p.push(e.virtualSize-r)}if(c&&t.loop){const i=z[0]+W;if(t.slidesPerGroup>1){const s=Math.ceil((e.virtual.slidesBefore+e.virtual.slidesAfter)/t.slidesPerGroup),n=i*t.slidesPerGroup;for(let e=0;e<s;e+=1)p.push(p[p.length-1]+n)}for(let s=0;s<e.virtual.slidesBefore+e.virtual.slidesAfter;s+=1)1===t.slidesPerGroup&&p.push(p[p.length-1]+i),u.push(u[u.length-1]+i),e.virtualSize+=i}if(0===p.length&&(p=[0]),0!==W){const i=e.isHorizontal()&&a?"marginLeft":e.getDirectionLabel("marginRight");d.filter(((e,i)=>!(t.cssMode&&!t.loop)||i!==d.length-1)).forEach((e=>{e.style[i]=`${W}px`}))}if(t.centeredSlides&&t.centeredSlidesBounds){let e=0;z.forEach((i=>{e+=i+(W||0)})),e-=W;const i=e-r;p=p.map((e=>e<=0?-x:e>i?i+R:e))}if(t.centerInsufficientSlides){let e=0;z.forEach((i=>{e+=i+(W||0)})),e-=W;const i=(t.slidesOffsetBefore||0)+(t.slidesOffsetAfter||0);if(e+i<r){const t=(r-e-i)/2;p.forEach(((e,i)=>{p[i]=e-t})),u.forEach(((e,i)=>{u[i]=e+t}))}}if(Object.assign(e,{slides:d,snapGrid:p,slidesGrid:u,slidesSizesGrid:z}),t.centeredSlides&&t.cssMode&&!t.centeredSlidesBounds){Zi(s,"--swiper-centered-offset-before",-p[0]+"px"),Zi(s,"--swiper-centered-offset-after",e.size/2-z[z.length-1]/2+"px");const i=-e.snapGrid[0],t=-e.slidesGrid[0];e.snapGrid=e.snapGrid.map((e=>e+i)),e.slidesGrid=e.slidesGrid.map((e=>e+t))}if(m!==o&&e.emit("slidesLengthChange"),p.length!==h&&(e.params.watchOverflow&&e.checkOverflow(),e.emit("snapGridLengthChange")),u.length!==Z&&e.emit("slidesGridLengthChange"),t.watchSlidesProgress&&e.updateSlidesOffset(),e.emit("slidesUpdated"),!(c||t.cssMode||"slide"!==t.effect&&"fade"!==t.effect)){const i=`${t.containerModifierClass}backface-hidden`,s=e.el.classList.contains(i);m<=t.maxBackfaceHiddenSlides?s||e.el.classList.add(i):s&&e.el.classList.remove(i)}}function gi(e){const i=this,t=[],s=i.virtual&&i.params.virtual.enabled;let n,r=0;"number"==typeof e?i.setTransition(e):!0===e&&i.setTransition(i.params.speed);const a=e=>s?i.slides[i.getSlideIndexByData(e)]:i.slides[e];if("auto"!==i.params.slidesPerView&&i.params.slidesPerView>1)if(i.params.centeredSlides)(i.visibleSlides||[]).forEach((e=>{t.push(e)}));else for(n=0;n<Math.ceil(i.params.slidesPerView);n+=1){const e=i.activeIndex+n;if(e>i.slides.length&&!s)break;t.push(a(e))}else t.push(a(i.activeIndex));for(n=0;n<t.length;n+=1)if(void 0!==t[n]){const e=t[n].offsetHeight;r=e>r?e:r}(r||0===r)&&(i.wrapperEl.style.height=`${r}px`)}function Ti(){const e=this,i=e.slides,t=e.isElement?e.isHorizontal()?e.wrapperEl.offsetLeft:e.wrapperEl.offsetTop:0;for(let s=0;s<i.length;s+=1)i[s].swiperSlideOffset=(e.isHorizontal()?i[s].offsetLeft:i[s].offsetTop)-t-e.cssOverflowAdjustment()}const Ci=(e,i,t)=>{i&&!e.classList.contains(t)?e.classList.add(t):!i&&e.classList.contains(t)&&e.classList.remove(t)};function Hi(e){void 0===e&&(e=this&&this.translate||0);const i=this,t=i.params,{slides:s,rtlTranslate:n,snapGrid:r}=i;if(0===s.length)return;void 0===s[0].swiperSlideOffset&&i.updateSlidesOffset();let a=-e;n&&(a=e),i.visibleSlidesIndexes=[],i.visibleSlides=[];let l=t.spaceBetween;"string"==typeof l&&l.indexOf("%")>=0?l=parseFloat(l.replace("%",""))/100*i.size:"string"==typeof l&&(l=parseFloat(l));for(let e=0;e<s.length;e+=1){const c=s[e];let o=c.swiperSlideOffset;t.cssMode&&t.centeredSlides&&(o-=s[0].swiperSlideOffset);const d=(a+(t.centeredSlides?i.minTranslate():0)-o)/(c.swiperSlideSize+l),m=(a-r[0]+(t.centeredSlides?i.minTranslate():0)-o)/(c.swiperSlideSize+l),p=-(a-o),u=p+i.slidesSizesGrid[e],z=p>=0&&p<=i.size-i.slidesSizesGrid[e],x=p>=0&&p<i.size-1||u>1&&u<=i.size||p<=0&&u>=i.size;x&&(i.visibleSlides.push(c),i.visibleSlidesIndexes.push(e)),Ci(c,x,t.slideVisibleClass),Ci(c,z,t.slideFullyVisibleClass),c.progress=n?-d:d,c.originalProgress=n?-m:m}}function Ai(e){const i=this;if(void 0===e){const t=i.rtlTranslate?-1:1;e=i&&i.translate&&i.translate*t||0}const t=i.params,s=i.maxTranslate()-i.minTranslate();let{progress:n,isBeginning:r,isEnd:a,progressLoop:l}=i;const c=r,o=a;if(0===s)n=0,r=!0,a=!0;else{n=(e-i.minTranslate())/s;const t=Math.abs(e-i.minTranslate())<1,l=Math.abs(e-i.maxTranslate())<1;r=t||n<=0,a=l||n>=1,t&&(n=0),l&&(n=1)}if(t.loop){const t=i.getSlideIndexByData(0),s=i.getSlideIndexByData(i.slides.length-1),n=i.slidesGrid[t],r=i.slidesGrid[s],a=i.slidesGrid[i.slidesGrid.length-1],c=Math.abs(e);l=c>=n?(c-n)/a:(c+a-r)/a,l>1&&(l-=1)}Object.assign(i,{progress:n,progressLoop:l,isBeginning:r,isEnd:a}),(t.watchSlidesProgress||t.centeredSlides&&t.autoHeight)&&i.updateSlidesProgress(e),r&&!c&&i.emit("reachBeginning toEdge"),a&&!o&&i.emit("reachEnd toEdge"),(c&&!r||o&&!a)&&i.emit("fromEdge"),i.emit("progress",n)}const Di=(e,i,t)=>{i&&!e.classList.contains(t)?e.classList.add(t):!i&&e.classList.contains(t)&&e.classList.remove(t)};function Qi(){const e=this,{slides:i,params:t,slidesEl:s,activeIndex:n}=e,r=e.virtual&&t.virtual.enabled,a=e.grid&&t.grid&&t.grid.rows>1,l=e=>Vi(s,`.${t.slideClass}${e}, swiper-slide${e}`)[0];let c,o,d;if(r)if(t.loop){let i=n-e.virtual.slidesBefore;i<0&&(i=e.virtual.slides.length+i),i>=e.virtual.slides.length&&(i-=e.virtual.slides.length),c=l(`[data-swiper-slide-index="${i}"]`)}else c=l(`[data-swiper-slide-index="${n}"]`);else a?(c=i.filter((e=>e.column===n))[0],d=i.filter((e=>e.column===n+1))[0],o=i.filter((e=>e.column===n-1))[0]):c=i[n];c&&(a||(d=Ii(c,`.${t.slideClass}, swiper-slide`)[0],t.loop&&!d&&(d=i[0]),o=Si(c,`.${t.slideClass}, swiper-slide`)[0],t.loop&&0===!o&&(o=i[i.length-1]))),i.forEach((e=>{Di(e,e===c,t.slideActiveClass),Di(e,e===d,t.slideNextClass),Di(e,e===o,t.slidePrevClass)})),e.emitSlidesClasses()}const Bi=(e,i)=>{if(!e||e.destroyed||!e.params)return;const t=i.closest(e.isElement?"swiper-slide":`.${e.params.slideClass}`);if(t){let i=t.querySelector(`.${e.params.lazyPreloaderClass}`);!i&&e.isElement&&(t.shadowRoot?i=t.shadowRoot.querySelector(`.${e.params.lazyPreloaderClass}`):requestAnimationFrame((()=>{t.shadowRoot&&(i=t.shadowRoot.querySelector(`.${e.params.lazyPreloaderClass}`),i&&i.remove())}))),i&&i.remove()}},_i=(e,i)=>{if(!e.slides[i])return;const t=e.slides[i].querySelector('[loading="lazy"]');t&&t.removeAttribute("loading")},$i=e=>{if(!e||e.destroyed||!e.params)return;let i=e.params.lazyPreloadPrevNext;const t=e.slides.length;if(!t||!i||i<0)return;i=Math.min(i,t);const s="auto"===e.params.slidesPerView?e.slidesPerViewDynamic():Math.ceil(e.params.slidesPerView),n=e.activeIndex;if(e.params.grid&&e.params.grid.rows>1){const t=n,r=[t-i];return r.push(...Array.from({length:i}).map(((e,i)=>t+s+i))),void e.slides.forEach(((i,t)=>{r.includes(i.column)&&_i(e,t)}))}const r=n+s-1;if(e.params.rewind||e.params.loop)for(let s=n-i;s<=r+i;s+=1){const i=(s%t+t)%t;(i<n||i>r)&&_i(e,i)}else for(let s=Math.max(n-i,0);s<=Math.min(r+i,t-1);s+=1)s!==n&&(s>r||s<n)&&_i(e,s)};function et(e){const{slidesGrid:i,params:t}=e,s=e.rtlTranslate?e.translate:-e.translate;let n;for(let e=0;e<i.length;e+=1)void 0!==i[e+1]?s>=i[e]&&s<i[e+1]-(i[e+1]-i[e])/2?n=e:s>=i[e]&&s<i[e+1]&&(n=e+1):s>=i[e]&&(n=e);return t.normalizeSlideIndex&&(n<0||void 0===n)&&(n=0),n}function it(e){const i=this,t=i.rtlTranslate?i.translate:-i.translate,{snapGrid:s,params:n,activeIndex:r,realIndex:a,snapIndex:l}=i;let c,o=e;const d=e=>{let t=e-i.virtual.slidesBefore;return t<0&&(t=i.virtual.slides.length+t),t>=i.virtual.slides.length&&(t-=i.virtual.slides.length),t};if(void 0===o&&(o=et(i)),s.indexOf(t)>=0)c=s.indexOf(t);else{const e=Math.min(n.slidesPerGroupSkip,o);c=e+Math.floor((o-e)/n.slidesPerGroup)}if(c>=s.length&&(c=s.length-1),o===r&&!i.params.loop)return void(c!==l&&(i.snapIndex=c,i.emit("snapIndexChange")));if(o===r&&i.params.loop&&i.virtual&&i.params.virtual.enabled)return void(i.realIndex=d(o));const m=i.grid&&n.grid&&n.grid.rows>1;let p;if(i.virtual&&n.virtual.enabled&&n.loop)p=d(o);else if(m){const e=i.slides.filter((e=>e.column===o))[0];let t=parseInt(e.getAttribute("data-swiper-slide-index"),10);Number.isNaN(t)&&(t=Math.max(i.slides.indexOf(e),0)),p=Math.floor(t/n.grid.rows)}else if(i.slides[o]){const e=i.slides[o].getAttribute("data-swiper-slide-index");p=e?parseInt(e,10):o}else p=o;Object.assign(i,{previousSnapIndex:l,snapIndex:c,previousRealIndex:a,realIndex:p,previousIndex:r,activeIndex:o}),i.initialized&&$i(i),i.emit("activeIndexChange"),i.emit("snapIndexChange"),(i.initialized||i.params.runCallbacksOnInit)&&(a!==p&&i.emit("realIndexChange"),i.emit("slideChange"))}function tt(e,i){const t=this,s=t.params;let n=e.closest(`.${s.slideClass}, swiper-slide`);!n&&t.isElement&&i&&i.length>1&&i.includes(e)&&[...i.slice(i.indexOf(e)+1,i.length)].forEach((e=>{!n&&e.matches&&e.matches(`.${s.slideClass}, swiper-slide`)&&(n=e)}));let r,a=!1;if(n)for(let e=0;e<t.slides.length;e+=1)if(t.slides[e]===n){a=!0,r=e;break}if(!n||!a)return t.clickedSlide=void 0,void(t.clickedIndex=void 0);t.clickedSlide=n,t.virtual&&t.params.virtual.enabled?t.clickedIndex=parseInt(n.getAttribute("data-swiper-slide-index"),10):t.clickedIndex=r,s.slideToClickedSlide&&void 0!==t.clickedIndex&&t.clickedIndex!==t.activeIndex&&t.slideToClickedSlide()}var st={updateSize:Ni,updateSlides:Xi,updateAutoHeight:gi,updateSlidesOffset:Ti,updateSlidesProgress:Hi,updateProgress:Ai,updateSlidesClasses:Qi,updateActiveIndex:it,updateClickedSlide:tt};function nt(e){void 0===e&&(e=this.isHorizontal()?"x":"y");const{params:i,rtlTranslate:t,translate:s,wrapperEl:n}=this;if(i.virtualTranslate)return t?-s:s;if(i.cssMode)return s;let r=zi(n,e);return r+=this.cssOverflowAdjustment(),t&&(r=-r),r||0}function rt(e,i){const t=this,{rtlTranslate:s,params:n,wrapperEl:r,progress:a}=t;let l=0,c=0;let o;t.isHorizontal()?l=s?-e:e:c=e,n.roundLengths&&(l=Math.floor(l),c=Math.floor(c)),t.previousTranslate=t.translate,t.translate=t.isHorizontal()?l:c,n.cssMode?r[t.isHorizontal()?"scrollLeft":"scrollTop"]=t.isHorizontal()?-l:-c:n.virtualTranslate||(t.isHorizontal()?l-=t.cssOverflowAdjustment():c-=t.cssOverflowAdjustment(),r.style.transform=`translate3d(${l}px, ${c}px, 0px)`);const d=t.maxTranslate()-t.minTranslate();o=0===d?0:(e-t.minTranslate())/d,o!==a&&t.updateProgress(e),t.emit("setTranslate",t.translate,i)}function at(){return-this.snapGrid[0]}function lt(){return-this.snapGrid[this.snapGrid.length-1]}function ct(e,i,t,s,n){void 0===e&&(e=0),void 0===i&&(i=this.params.speed),void 0===t&&(t=!0),void 0===s&&(s=!0);const r=this,{params:a,wrapperEl:l}=r;if(r.animating&&a.preventInteractionOnTransition)return!1;const c=r.minTranslate(),o=r.maxTranslate();let d;if(d=s&&e>c?c:s&&e<o?o:e,r.updateProgress(d),a.cssMode){const e=r.isHorizontal();if(0===i)l[e?"scrollLeft":"scrollTop"]=-d;else{if(!r.support.smoothScroll)return Wi({swiper:r,targetPosition:-d,side:e?"left":"top"}),!0;l.scrollTo({[e?"left":"top"]:-d,behavior:"smooth"})}return!0}return 0===i?(r.setTransition(0),r.setTranslate(d),t&&(r.emit("beforeTransitionStart",i,n),r.emit("transitionEnd"))):(r.setTransition(i),r.setTranslate(d),t&&(r.emit("beforeTransitionStart",i,n),r.emit("transitionStart")),r.animating||(r.animating=!0,r.onTranslateToWrapperTransitionEnd||(r.onTranslateToWrapperTransitionEnd=function(e){r&&!r.destroyed&&e.target===this&&(r.wrapperEl.removeEventListener("transitionend",r.onTranslateToWrapperTransitionEnd),r.onTranslateToWrapperTransitionEnd=null,delete r.onTranslateToWrapperTransitionEnd,r.animating=!1,t&&r.emit("transitionEnd"))}),r.wrapperEl.addEventListener("transitionend",r.onTranslateToWrapperTransitionEnd))),!0}var ot={getTranslate:nt,setTranslate:rt,minTranslate:at,maxTranslate:lt,translateTo:ct};function dt(e,i){const t=this;t.params.cssMode||(t.wrapperEl.style.transitionDuration=`${e}ms`,t.wrapperEl.style.transitionDelay=0===e?"0ms":""),t.emit("setTransition",e,i)}function mt(e){let{swiper:i,runCallbacks:t,direction:s,step:n}=e;const{activeIndex:r,previousIndex:a}=i;let l=s;if(l||(l=r>a?"next":r<a?"prev":"reset"),i.emit(`transition${n}`),t&&r!==a){if("reset"===l)return void i.emit(`slideResetTransition${n}`);i.emit(`slideChangeTransition${n}`),"next"===l?i.emit(`slideNextTransition${n}`):i.emit(`slidePrevTransition${n}`)}}function pt(e,i){void 0===e&&(e=!0);const t=this,{params:s}=t;s.cssMode||(s.autoHeight&&t.updateAutoHeight(),mt({swiper:t,runCallbacks:e,direction:i,step:"Start"}))}function ut(e,i){void 0===e&&(e=!0);const t=this,{params:s}=t;t.animating=!1,s.cssMode||(t.setTransition(0),mt({swiper:t,runCallbacks:e,direction:i,step:"End"}))}var zt={setTransition:dt,transitionStart:pt,transitionEnd:ut};function xt(e,i,t,s,n){void 0===e&&(e=0),void 0===t&&(t=!0),"string"==typeof e&&(e=parseInt(e,10));const r=this;let a=e;a<0&&(a=0);const{params:l,snapGrid:c,slidesGrid:o,previousIndex:d,activeIndex:m,rtlTranslate:p,wrapperEl:u,enabled:z}=r;if(!z&&!s&&!n||r.destroyed||r.animating&&l.preventInteractionOnTransition)return!1;void 0===i&&(i=r.params.speed);const x=Math.min(r.params.slidesPerGroupSkip,a);let R=x+Math.floor((a-x)/r.params.slidesPerGroup);R>=c.length&&(R=c.length-1);const h=-c[R];if(l.normalizeSlideIndex)for(let e=0;e<o.length;e+=1){const i=-Math.floor(100*h),t=Math.floor(100*o[e]),s=Math.floor(100*o[e+1]);void 0!==o[e+1]?i>=t&&i<s-(s-t)/2?a=e:i>=t&&i<s&&(a=e+1):i>=t&&(a=e)}if(r.initialized&&a!==m){if(!r.allowSlideNext&&(p?h>r.translate&&h>r.minTranslate():h<r.translate&&h<r.minTranslate()))return!1;if(!r.allowSlidePrev&&h>r.translate&&h>r.maxTranslate()&&(m||0)!==a)return!1}let Z;if(a!==(d||0)&&t&&r.emit("beforeSlideChangeStart"),r.updateProgress(h),Z=a>m?"next":a<m?"prev":"reset",p&&-h===r.translate||!p&&h===r.translate)return r.updateActiveIndex(a),l.autoHeight&&r.updateAutoHeight(),r.updateSlidesClasses(),"slide"!==l.effect&&r.setTranslate(h),"reset"!==Z&&(r.transitionStart(t,Z),r.transitionEnd(t,Z)),!1;if(l.cssMode){const e=r.isHorizontal(),t=p?h:-h;if(0===i){const i=r.virtual&&r.params.virtual.enabled;i&&(r.wrapperEl.style.scrollSnapType="none",r._immediateVirtual=!0),i&&!r._cssModeVirtualInitialSet&&r.params.initialSlide>0?(r._cssModeVirtualInitialSet=!0,requestAnimationFrame((()=>{u[e?"scrollLeft":"scrollTop"]=t}))):u[e?"scrollLeft":"scrollTop"]=t,i&&requestAnimationFrame((()=>{r.wrapperEl.style.scrollSnapType="",r._immediateVirtual=!1}))}else{if(!r.support.smoothScroll)return Wi({swiper:r,targetPosition:t,side:e?"left":"top"}),!0;u.scrollTo({[e?"left":"top"]:t,behavior:"smooth"})}return!0}return r.setTransition(i),r.setTranslate(h),r.updateActiveIndex(a),r.updateSlidesClasses(),r.emit("beforeTransitionStart",i,s),r.transitionStart(t,Z),0===i?r.transitionEnd(t,Z):r.animating||(r.animating=!0,r.onSlideToWrapperTransitionEnd||(r.onSlideToWrapperTransitionEnd=function(e){r&&!r.destroyed&&e.target===this&&(r.wrapperEl.removeEventListener("transitionend",r.onSlideToWrapperTransitionEnd),r.onSlideToWrapperTransitionEnd=null,delete r.onSlideToWrapperTransitionEnd,r.transitionEnd(t,Z))}),r.wrapperEl.addEventListener("transitionend",r.onSlideToWrapperTransitionEnd)),!0}function Rt(e,i,t,s){if(void 0===e&&(e=0),void 0===t&&(t=!0),"string"==typeof e){e=parseInt(e,10)}const n=this;if(n.destroyed)return;void 0===i&&(i=n.params.speed);const r=n.grid&&n.params.grid&&n.params.grid.rows>1;let a=e;if(n.params.loop)if(n.virtual&&n.params.virtual.enabled)a+=n.virtual.slidesBefore;else{let e;if(r){const i=a*n.params.grid.rows;e=n.slides.filter((e=>1*e.getAttribute("data-swiper-slide-index")===i))[0].column}else e=n.getSlideIndexByData(a);const i=r?Math.ceil(n.slides.length/n.params.grid.rows):n.slides.length,{centeredSlides:t}=n.params;let l=n.params.slidesPerView;"auto"===l?l=n.slidesPerViewDynamic():(l=Math.ceil(parseFloat(n.params.slidesPerView,10)),t&&l%2==0&&(l+=1));let c=i-e<l;if(t&&(c=c||e<Math.ceil(l/2)),s&&t&&"auto"!==n.params.slidesPerView&&!r&&(c=!1),c){const s=t?e<n.activeIndex?"prev":"next":e-n.activeIndex-1<n.params.slidesPerView?"next":"prev";n.loopFix({direction:s,slideTo:!0,activeSlideIndex:"next"===s?e+1:e-i+1,slideRealIndex:"next"===s?n.realIndex:void 0})}if(r){const e=a*n.params.grid.rows;a=n.slides.filter((i=>1*i.getAttribute("data-swiper-slide-index")===e))[0].column}else a=n.getSlideIndexByData(a)}return requestAnimationFrame((()=>{n.slideTo(a,i,t,s)})),n}function ht(e,i,t){void 0===i&&(i=!0);const s=this,{enabled:n,params:r,animating:a}=s;if(!n||s.destroyed)return s;void 0===e&&(e=s.params.speed);let l=r.slidesPerGroup;"auto"===r.slidesPerView&&1===r.slidesPerGroup&&r.slidesPerGroupAuto&&(l=Math.max(s.slidesPerViewDynamic("current",!0),1));const c=s.activeIndex<r.slidesPerGroupSkip?1:l,o=s.virtual&&r.virtual.enabled;if(r.loop){if(a&&!o&&r.loopPreventsSliding)return!1;if(s.loopFix({direction:"next"}),s._clientLeft=s.wrapperEl.clientLeft,s.activeIndex===s.slides.length-1&&r.cssMode)return requestAnimationFrame((()=>{s.slideTo(s.activeIndex+c,e,i,t)})),!0}return r.rewind&&s.isEnd?s.slideTo(0,e,i,t):s.slideTo(s.activeIndex+c,e,i,t)}function Zt(e,i,t){void 0===i&&(i=!0);const s=this,{params:n,snapGrid:r,slidesGrid:a,rtlTranslate:l,enabled:c,animating:o}=s;if(!c||s.destroyed)return s;void 0===e&&(e=s.params.speed);const d=s.virtual&&n.virtual.enabled;if(n.loop){if(o&&!d&&n.loopPreventsSliding)return!1;s.loopFix({direction:"prev"}),s._clientLeft=s.wrapperEl.clientLeft}function m(e){return e<0?-Math.floor(Math.abs(e)):Math.floor(e)}const p=m(l?s.translate:-s.translate),u=r.map((e=>m(e)));let z=r[u.indexOf(p)-1];if(void 0===z&&n.cssMode){let e;r.forEach(((i,t)=>{p>=i&&(e=t)})),void 0!==e&&(z=r[e>0?e-1:e])}let x=0;if(void 0!==z&&(x=a.indexOf(z),x<0&&(x=s.activeIndex-1),"auto"===n.slidesPerView&&1===n.slidesPerGroup&&n.slidesPerGroupAuto&&(x=x-s.slidesPerViewDynamic("previous",!0)+1,x=Math.max(x,0))),n.rewind&&s.isBeginning){const n=s.params.virtual&&s.params.virtual.enabled&&s.virtual?s.virtual.slides.length-1:s.slides.length-1;return s.slideTo(n,e,i,t)}return n.loop&&0===s.activeIndex&&n.cssMode?(requestAnimationFrame((()=>{s.slideTo(x,e,i,t)})),!0):s.slideTo(x,e,i,t)}function Wt(e,i,t){void 0===i&&(i=!0);const s=this;if(!s.destroyed)return void 0===e&&(e=s.params.speed),s.slideTo(s.activeIndex,e,i,t)}function Vt(e,i,t,s){void 0===i&&(i=!0),void 0===s&&(s=.5);const n=this;if(n.destroyed)return;void 0===e&&(e=n.params.speed);let r=n.activeIndex;const a=Math.min(n.params.slidesPerGroupSkip,r),l=a+Math.floor((r-a)/n.params.slidesPerGroup),c=n.rtlTranslate?n.translate:-n.translate;if(c>=n.snapGrid[l]){const e=n.snapGrid[l];c-e>(n.snapGrid[l+1]-e)*s&&(r+=n.params.slidesPerGroup)}else{const e=n.snapGrid[l-1];c-e<=(n.snapGrid[l]-e)*s&&(r-=n.params.slidesPerGroup)}return r=Math.max(r,0),r=Math.min(r,n.slidesGrid.length-1),n.slideTo(r,e,i,t)}function Mt(){const e=this;if(e.destroyed)return;const{params:i,slidesEl:t}=e,s="auto"===i.slidesPerView?e.slidesPerViewDynamic():i.slidesPerView;let n,r=e.clickedIndex;const a=e.isElement?"swiper-slide":`.${i.slideClass}`;if(i.loop){if(e.animating)return;n=parseInt(e.clickedSlide.getAttribute("data-swiper-slide-index"),10),i.centeredSlides?r<e.loopedSlides-s/2||r>e.slides.length-e.loopedSlides+s/2?(e.loopFix(),r=e.getSlideIndex(Vi(t,`${a}[data-swiper-slide-index="${n}"]`)[0]),mi((()=>{e.slideTo(r)}))):e.slideTo(r):r>e.slides.length-s?(e.loopFix(),r=e.getSlideIndex(Vi(t,`${a}[data-swiper-slide-index="${n}"]`)[0]),mi((()=>{e.slideTo(r)}))):e.slideTo(r)}else e.slideTo(r)}var jt={slideTo:xt,slideToLoop:Rt,slideNext:ht,slidePrev:Zt,slideReset:Wt,slideToClosest:Vt,slideToClickedSlide:Mt};function St(e){const i=this,{params:t,slidesEl:s}=i;if(!t.loop||i.virtual&&i.params.virtual.enabled)return;const n=()=>{Vi(s,`.${t.slideClass}, swiper-slide`).forEach(((e,i)=>{e.setAttribute("data-swiper-slide-index",i)}))},r=i.grid&&t.grid&&t.grid.rows>1,a=t.slidesPerGroup*(r?t.grid.rows:1),l=i.slides.length%a!=0,c=r&&i.slides.length%t.grid.rows!=0,o=e=>{for(let s=0;s<e;s+=1){const e=i.isElement?ji("swiper-slide",[t.slideBlankClass]):ji("div",[t.slideClass,t.slideBlankClass]);i.slidesEl.append(e)}};if(l){if(t.loopAddBlankSlides){o(a-i.slides.length%a),i.recalcSlides(),i.updateSlides()}else Mi("Swiper Loop Warning: The number of slides is not even to slidesPerGroup, loop mode may not function properly. You need to add more slides (or make duplicates, or empty slides)");n()}else if(c){if(t.loopAddBlankSlides){o(t.grid.rows-i.slides.length%t.grid.rows),i.recalcSlides(),i.updateSlides()}else Mi("Swiper Loop Warning: The number of slides is not even to grid.rows, loop mode may not function properly. You need to add more slides (or make duplicates, or empty slides)");n()}else n();i.loopFix({slideRealIndex:e,direction:t.centeredSlides?void 0:"next"})}function It(e){let{slideRealIndex:i,slideTo:t=!0,direction:s,setTranslate:n,activeSlideIndex:r,byController:a,byMousewheel:l}=void 0===e?{}:e;const c=this;if(!c.params.loop)return;c.emit("beforeLoopFix");const{slides:o,allowSlidePrev:d,allowSlideNext:m,slidesEl:p,params:u}=c,{centeredSlides:z}=u;if(c.allowSlidePrev=!0,c.allowSlideNext=!0,c.virtual&&u.virtual.enabled)return t&&(u.centeredSlides||0!==c.snapIndex?u.centeredSlides&&c.snapIndex<u.slidesPerView?c.slideTo(c.virtual.slides.length+c.snapIndex,0,!1,!0):c.snapIndex===c.snapGrid.length-1&&c.slideTo(c.virtual.slidesBefore,0,!1,!0):c.slideTo(c.virtual.slides.length,0,!1,!0)),c.allowSlidePrev=d,c.allowSlideNext=m,void c.emit("loopFix");let x=u.slidesPerView;"auto"===x?x=c.slidesPerViewDynamic():(x=Math.ceil(parseFloat(u.slidesPerView,10)),z&&x%2==0&&(x+=1));const R=u.slidesPerGroupAuto?x:u.slidesPerGroup;let h=R;h%R!=0&&(h+=R-h%R),h+=u.loopAdditionalSlides,c.loopedSlides=h;const Z=c.grid&&u.grid&&u.grid.rows>1;o.length<x+h?Mi("Swiper Loop Warning: The number of slides is not enough for loop mode, it will be disabled and not function properly. You need to add more slides (or make duplicates) or lower the values of slidesPerView and slidesPerGroup parameters"):Z&&"row"===u.grid.fill&&Mi("Swiper Loop Warning: Loop mode is not compatible with grid.fill = `row`");const W=[],V=[];let M=c.activeIndex;void 0===r?r=c.getSlideIndex(o.filter((e=>e.classList.contains(u.slideActiveClass)))[0]):M=r;const j="next"===s||!s,S="prev"===s||!s;let I=0,b=0;const y=Z?Math.ceil(o.length/u.grid.rows):o.length,q=(Z?o[r].column:r)+(z&&void 0===n?-x/2+.5:0);if(q<h){I=Math.max(h-q,R);for(let e=0;e<h-q;e+=1){const i=e-Math.floor(e/y)*y;if(Z){const e=y-i-1;for(let i=o.length-1;i>=0;i-=1)o[i].column===e&&W.push(i)}else W.push(y-i-1)}}else if(q+x>y-h){b=Math.max(q-(y-2*h),R);for(let e=0;e<b;e+=1){const i=e-Math.floor(e/y)*y;Z?o.forEach(((e,t)=>{e.column===i&&V.push(t)})):V.push(i)}}if(c.__preventObserver__=!0,requestAnimationFrame((()=>{c.__preventObserver__=!1})),S&&W.forEach((e=>{o[e].swiperLoopMoveDOM=!0,p.prepend(o[e]),o[e].swiperLoopMoveDOM=!1})),j&&V.forEach((e=>{o[e].swiperLoopMoveDOM=!0,p.append(o[e]),o[e].swiperLoopMoveDOM=!1})),c.recalcSlides(),"auto"===u.slidesPerView?c.updateSlides():Z&&(W.length>0&&S||V.length>0&&j)&&c.slides.forEach(((e,i)=>{c.grid.updateSlide(i,e,c.slides)})),u.watchSlidesProgress&&c.updateSlidesOffset(),t)if(W.length>0&&S){if(void 0===i){const e=c.slidesGrid[M],i=c.slidesGrid[M+I]-e;l?c.setTranslate(c.translate-i):(c.slideTo(M+Math.ceil(I),0,!1,!0),n&&(c.touchEventsData.startTranslate=c.touchEventsData.startTranslate-i,c.touchEventsData.currentTranslate=c.touchEventsData.currentTranslate-i))}else if(n){const e=Z?W.length/u.grid.rows:W.length;c.slideTo(c.activeIndex+e,0,!1,!0),c.touchEventsData.currentTranslate=c.translate}}else if(V.length>0&&j)if(void 0===i){const e=c.slidesGrid[M],i=c.slidesGrid[M-b]-e;l?c.setTranslate(c.translate-i):(c.slideTo(M-b,0,!1,!0),n&&(c.touchEventsData.startTranslate=c.touchEventsData.startTranslate-i,c.touchEventsData.currentTranslate=c.touchEventsData.currentTranslate-i))}else{const e=Z?V.length/u.grid.rows:V.length;c.slideTo(c.activeIndex-e,0,!1,!0)}if(c.allowSlidePrev=d,c.allowSlideNext=m,c.controller&&c.controller.control&&!a){const e={slideRealIndex:i,direction:s,setTranslate:n,activeSlideIndex:r,byController:!0};Array.isArray(c.controller.control)?c.controller.control.forEach((i=>{!i.destroyed&&i.params.loop&&i.loopFix({...e,slideTo:i.params.slidesPerView===u.slidesPerView&&t})})):c.controller.control instanceof c.constructor&&c.controller.control.params.loop&&c.controller.control.loopFix({...e,slideTo:c.controller.control.params.slidesPerView===u.slidesPerView&&t})}c.emit("loopFix")}function bt(){const e=this,{params:i,slidesEl:t}=e;if(!i.loop||e.virtual&&e.params.virtual.enabled)return;e.recalcSlides();const s=[];e.slides.forEach((e=>{const i=void 0===e.swiperSlideIndex?1*e.getAttribute("data-swiper-slide-index"):e.swiperSlideIndex;s[i]=e})),e.slides.forEach((e=>{e.removeAttribute("data-swiper-slide-index")})),s.forEach((e=>{t.append(e)})),e.recalcSlides(),e.slideTo(e.realIndex,0)}var yt={loopCreate:St,loopFix:It,loopDestroy:bt};function qt(e){const i=this;if(!i.params.simulateTouch||i.params.watchOverflow&&i.isLocked||i.params.cssMode)return;const t="container"===i.params.touchEventsTarget?i.el:i.wrapperEl;i.isElement&&(i.__preventObserver__=!0),t.style.cursor="move",t.style.cursor=e?"grabbing":"grab",i.isElement&&requestAnimationFrame((()=>{i.__preventObserver__=!1}))}function Et(){const e=this;e.params.watchOverflow&&e.isLocked||e.params.cssMode||(e.isElement&&(e.__preventObserver__=!0),e["container"===e.params.touchEventsTarget?"el":"wrapperEl"].style.cursor="",e.isElement&&requestAnimationFrame((()=>{e.__preventObserver__=!1})))}var wt={setGrabCursor:qt,unsetGrabCursor:Et};function Yt(e,i){return void 0===i&&(i=this),function i(t){if(!t||t===ai()||t===ci())return null;t.assignedSlot&&(t=t.assignedSlot);const s=t.closest(e);return s||t.getRootNode?s||i(t.getRootNode().host):null}(i)}function vt(e,i,t){const s=ci(),{params:n}=e,r=n.edgeSwipeDetection,a=n.edgeSwipeThreshold;return!r||!(t<=a||t>=s.innerWidth-a)||"prevent"===r&&(i.preventDefault(),!0)}function Kt(e){const i=this,t=ai();let s=e;s.originalEvent&&(s=s.originalEvent);const n=i.touchEventsData;if("pointerdown"===s.type){if(null!==n.pointerId&&n.pointerId!==s.pointerId)return;n.pointerId=s.pointerId}else"touchstart"===s.type&&1===s.targetTouches.length&&(n.touchId=s.targetTouches[0].identifier);if("touchstart"===s.type)return void vt(i,s,s.targetTouches[0].pageX);const{params:r,touches:a,enabled:l}=i;if(!l)return;if(!r.simulateTouch&&"mouse"===s.pointerType)return;if(i.animating&&r.preventInteractionOnTransition)return;!i.animating&&r.cssMode&&r.loop&&i.loopFix();let c=s.target;if("wrapper"===r.touchEventsTarget&&!i.wrapperEl.contains(c))return;if("which"in s&&3===s.which)return;if("button"in s&&s.button>0)return;if(n.isTouched&&n.isMoved)return;const o=!!r.noSwipingClass&&""!==r.noSwipingClass,d=s.composedPath?s.composedPath():s.path;o&&s.target&&s.target.shadowRoot&&d&&(c=d[0]);const m=r.noSwipingSelector?r.noSwipingSelector:`.${r.noSwipingClass}`,p=!(!s.target||!s.target.shadowRoot);if(r.noSwiping&&(p?Yt(m,c):c.closest(m)))return void(i.allowClick=!0);if(r.swipeHandler&&!c.closest(r.swipeHandler))return;a.currentX=s.pageX,a.currentY=s.pageY;const u=a.currentX,z=a.currentY;if(!vt(i,s,u))return;Object.assign(n,{isTouched:!0,isMoved:!1,allowTouchCallbacks:!0,isScrolling:void 0,startMoving:void 0}),a.startX=u,a.startY=z,n.touchStartTime=pi(),i.allowClick=!0,i.updateSize(),i.swipeDirection=void 0,r.threshold>0&&(n.allowThresholdMove=!1);let x=!0;c.matches(n.focusableElements)&&(x=!1,"SELECT"===c.nodeName&&(n.isTouched=!1)),t.activeElement&&t.activeElement.matches(n.focusableElements)&&t.activeElement!==c&&t.activeElement.blur();const R=x&&i.allowTouchMove&&r.touchStartPreventDefault;!r.touchStartForcePreventDefault&&!R||c.isContentEditable||s.preventDefault(),r.freeMode&&r.freeMode.enabled&&i.freeMode&&i.animating&&!r.cssMode&&i.freeMode.onTouchStart(),i.emit("touchStart",s)}function ft(e){const i=ai(),t=this,s=t.touchEventsData,{params:n,touches:r,rtlTranslate:a,enabled:l}=t;if(!l)return;if(!n.simulateTouch&&"mouse"===e.pointerType)return;let c,o=e;if(o.originalEvent&&(o=o.originalEvent),"pointermove"===o.type){if(null!==s.touchId)return;if(o.pointerId!==s.pointerId)return}if("touchmove"===o.type){if(c=[...o.changedTouches].filter((e=>e.identifier===s.touchId))[0],!c||c.identifier!==s.touchId)return}else c=o;if(!s.isTouched)return void(s.startMoving&&s.isScrolling&&t.emit("touchMoveOpposite",o));const d=c.pageX,m=c.pageY;if(o.preventedByNestedSwiper)return r.startX=d,void(r.startY=m);if(!t.allowTouchMove)return o.target.matches(s.focusableElements)||(t.allowClick=!1),void(s.isTouched&&(Object.assign(r,{startX:d,startY:m,currentX:d,currentY:m}),s.touchStartTime=pi()));if(n.touchReleaseOnEdges&&!n.loop)if(t.isVertical()){if(m<r.startY&&t.translate<=t.maxTranslate()||m>r.startY&&t.translate>=t.minTranslate())return s.isTouched=!1,void(s.isMoved=!1)}else if(d<r.startX&&t.translate<=t.maxTranslate()||d>r.startX&&t.translate>=t.minTranslate())return;if(i.activeElement&&o.target===i.activeElement&&o.target.matches(s.focusableElements))return s.isMoved=!0,void(t.allowClick=!1);s.allowTouchCallbacks&&t.emit("touchMove",o),r.previousX=r.currentX,r.previousY=r.currentY,r.currentX=d,r.currentY=m;const p=r.currentX-r.startX,u=r.currentY-r.startY;if(t.params.threshold&&Math.sqrt(p**2+u**2)<t.params.threshold)return;if(void 0===s.isScrolling){let e;t.isHorizontal()&&r.currentY===r.startY||t.isVertical()&&r.currentX===r.startX?s.isScrolling=!1:p*p+u*u>=25&&(e=180*Math.atan2(Math.abs(u),Math.abs(p))/Math.PI,s.isScrolling=t.isHorizontal()?e>n.touchAngle:90-e>n.touchAngle)}if(s.isScrolling&&t.emit("touchMoveOpposite",o),void 0===s.startMoving&&(r.currentX===r.startX&&r.currentY===r.startY||(s.startMoving=!0)),s.isScrolling||"touchmove"===o.type&&s.preventTouchMoveFromPointerMove)return void(s.isTouched=!1);if(!s.startMoving)return;t.allowClick=!1,!n.cssMode&&o.cancelable&&o.preventDefault(),n.touchMoveStopPropagation&&!n.nested&&o.stopPropagation();let z=t.isHorizontal()?p:u,x=t.isHorizontal()?r.currentX-r.previousX:r.currentY-r.previousY;n.oneWayMovement&&(z=Math.abs(z)*(a?1:-1),x=Math.abs(x)*(a?1:-1)),r.diff=z,z*=n.touchRatio,a&&(z=-z,x=-x);const R=t.touchesDirection;t.swipeDirection=z>0?"prev":"next",t.touchesDirection=x>0?"prev":"next";const h=t.params.loop&&!n.cssMode,Z="next"===t.touchesDirection&&t.allowSlideNext||"prev"===t.touchesDirection&&t.allowSlidePrev;if(!s.isMoved){if(h&&Z&&t.loopFix({direction:t.swipeDirection}),s.startTranslate=t.getTranslate(),t.setTransition(0),t.animating){const e=new window.CustomEvent("transitionend",{bubbles:!0,cancelable:!0,detail:{bySwiperTouchMove:!0}});t.wrapperEl.dispatchEvent(e)}s.allowMomentumBounce=!1,!n.grabCursor||!0!==t.allowSlideNext&&!0!==t.allowSlidePrev||t.setGrabCursor(!0),t.emit("sliderFirstMove",o)}if((new Date).getTime(),s.isMoved&&s.allowThresholdMove&&R!==t.touchesDirection&&h&&Z&&Math.abs(z)>=1)return Object.assign(r,{startX:d,startY:m,currentX:d,currentY:m,startTranslate:s.currentTranslate}),s.loopSwapReset=!0,void(s.startTranslate=s.currentTranslate);t.emit("sliderMove",o),s.isMoved=!0,s.currentTranslate=z+s.startTranslate;let W=!0,V=n.resistanceRatio;if(n.touchReleaseOnEdges&&(V=0),z>0?(h&&Z&&s.allowThresholdMove&&s.currentTranslate>(n.centeredSlides?t.minTranslate()-t.slidesSizesGrid[t.activeIndex+1]:t.minTranslate())&&t.loopFix({direction:"prev",setTranslate:!0,activeSlideIndex:0}),s.currentTranslate>t.minTranslate()&&(W=!1,n.resistance&&(s.currentTranslate=t.minTranslate()-1+(-t.minTranslate()+s.startTranslate+z)**V))):z<0&&(h&&Z&&s.allowThresholdMove&&s.currentTranslate<(n.centeredSlides?t.maxTranslate()+t.slidesSizesGrid[t.slidesSizesGrid.length-1]:t.maxTranslate())&&t.loopFix({direction:"next",setTranslate:!0,activeSlideIndex:t.slides.length-("auto"===n.slidesPerView?t.slidesPerViewDynamic():Math.ceil(parseFloat(n.slidesPerView,10)))}),s.currentTranslate<t.maxTranslate()&&(W=!1,n.resistance&&(s.currentTranslate=t.maxTranslate()+1-(t.maxTranslate()-s.startTranslate-z)**V))),W&&(o.preventedByNestedSwiper=!0),!t.allowSlideNext&&"next"===t.swipeDirection&&s.currentTranslate<s.startTranslate&&(s.currentTranslate=s.startTranslate),!t.allowSlidePrev&&"prev"===t.swipeDirection&&s.currentTranslate>s.startTranslate&&(s.currentTranslate=s.startTranslate),t.allowSlidePrev||t.allowSlideNext||(s.currentTranslate=s.startTranslate),n.threshold>0){if(!(Math.abs(z)>n.threshold||s.allowThresholdMove))return void(s.currentTranslate=s.startTranslate);if(!s.allowThresholdMove)return s.allowThresholdMove=!0,r.startX=r.currentX,r.startY=r.currentY,s.currentTranslate=s.startTranslate,void(r.diff=t.isHorizontal()?r.currentX-r.startX:r.currentY-r.startY)}n.followFinger&&!n.cssMode&&((n.freeMode&&n.freeMode.enabled&&t.freeMode||n.watchSlidesProgress)&&(t.updateActiveIndex(),t.updateSlidesClasses()),n.freeMode&&n.freeMode.enabled&&t.freeMode&&t.freeMode.onTouchMove(),t.updateProgress(s.currentTranslate),t.setTranslate(s.currentTranslate))}function Ot(e){const i=this,t=i.touchEventsData;let s,n=e;n.originalEvent&&(n=n.originalEvent);if("touchend"===n.type||"touchcancel"===n.type){if(s=[...n.changedTouches].filter((e=>e.identifier===t.touchId))[0],!s||s.identifier!==t.touchId)return}else{if(null!==t.touchId)return;if(n.pointerId!==t.pointerId)return;s=n}if(["pointercancel","pointerout","pointerleave","contextmenu"].includes(n.type)){if(!(["pointercancel","contextmenu"].includes(n.type)&&(i.browser.isSafari||i.browser.isWebView)))return}t.pointerId=null,t.touchId=null;const{params:r,touches:a,rtlTranslate:l,slidesGrid:c,enabled:o}=i;if(!o)return;if(!r.simulateTouch&&"mouse"===n.pointerType)return;if(t.allowTouchCallbacks&&i.emit("touchEnd",n),t.allowTouchCallbacks=!1,!t.isTouched)return t.isMoved&&r.grabCursor&&i.setGrabCursor(!1),t.isMoved=!1,void(t.startMoving=!1);r.grabCursor&&t.isMoved&&t.isTouched&&(!0===i.allowSlideNext||!0===i.allowSlidePrev)&&i.setGrabCursor(!1);const d=pi(),m=d-t.touchStartTime;if(i.allowClick){const e=n.path||n.composedPath&&n.composedPath();i.updateClickedSlide(e&&e[0]||n.target,e),i.emit("tap click",n),m<300&&d-t.lastClickTime<300&&i.emit("doubleTap doubleClick",n)}if(t.lastClickTime=pi(),mi((()=>{i.destroyed||(i.allowClick=!0)})),!t.isTouched||!t.isMoved||!i.swipeDirection||0===a.diff&&!t.loopSwapReset||t.currentTranslate===t.startTranslate&&!t.loopSwapReset)return t.isTouched=!1,t.isMoved=!1,void(t.startMoving=!1);let p;if(t.isTouched=!1,t.isMoved=!1,t.startMoving=!1,p=r.followFinger?l?i.translate:-i.translate:-t.currentTranslate,r.cssMode)return;if(r.freeMode&&r.freeMode.enabled)return void i.freeMode.onTouchEnd({currentPos:p});const u=p>=-i.maxTranslate()&&!i.params.loop;let z=0,x=i.slidesSizesGrid[0];for(let e=0;e<c.length;e+=e<r.slidesPerGroupSkip?1:r.slidesPerGroup){const i=e<r.slidesPerGroupSkip-1?1:r.slidesPerGroup;void 0!==c[e+i]?(u||p>=c[e]&&p<c[e+i])&&(z=e,x=c[e+i]-c[e]):(u||p>=c[e])&&(z=e,x=c[c.length-1]-c[c.length-2])}let R=null,h=null;r.rewind&&(i.isBeginning?h=r.virtual&&r.virtual.enabled&&i.virtual?i.virtual.slides.length-1:i.slides.length-1:i.isEnd&&(R=0));const Z=(p-c[z])/x,W=z<r.slidesPerGroupSkip-1?1:r.slidesPerGroup;if(m>r.longSwipesMs){if(!r.longSwipes)return void i.slideTo(i.activeIndex);"next"===i.swipeDirection&&(Z>=r.longSwipesRatio?i.slideTo(r.rewind&&i.isEnd?R:z+W):i.slideTo(z)),"prev"===i.swipeDirection&&(Z>1-r.longSwipesRatio?i.slideTo(z+W):null!==h&&Z<0&&Math.abs(Z)>r.longSwipesRatio?i.slideTo(h):i.slideTo(z))}else{if(!r.shortSwipes)return void i.slideTo(i.activeIndex);i.navigation&&(n.target===i.navigation.nextEl||n.target===i.navigation.prevEl)?n.target===i.navigation.nextEl?i.slideTo(z+W):i.slideTo(z):("next"===i.swipeDirection&&i.slideTo(null!==R?R:z+W),"prev"===i.swipeDirection&&i.slideTo(null!==h?h:z))}}function Ft(){const e=this,{params:i,el:t}=e;if(t&&0===t.offsetWidth)return;i.breakpoints&&e.setBreakpoint();const{allowSlideNext:s,allowSlidePrev:n,snapGrid:r}=e,a=e.virtual&&e.params.virtual.enabled;e.allowSlideNext=!0,e.allowSlidePrev=!0,e.updateSize(),e.updateSlides(),e.updateSlidesClasses();const l=a&&i.loop;!("auto"===i.slidesPerView||i.slidesPerView>1)||!e.isEnd||e.isBeginning||e.params.centeredSlides||l?e.params.loop&&!a?e.slideToLoop(e.realIndex,0,!1,!0):e.slideTo(e.activeIndex,0,!1,!0):e.slideTo(e.slides.length-1,0,!1,!0),e.autoplay&&e.autoplay.running&&e.autoplay.paused&&(clearTimeout(e.autoplay.resizeTimeout),e.autoplay.resizeTimeout=setTimeout((()=>{e.autoplay&&e.autoplay.running&&e.autoplay.paused&&e.autoplay.resume()}),500)),e.allowSlidePrev=n,e.allowSlideNext=s,e.params.watchOverflow&&r!==e.snapGrid&&e.checkOverflow()}function Lt(e){const i=this;i.enabled&&(i.allowClick||(i.params.preventClicks&&e.preventDefault(),i.params.preventClicksPropagation&&i.animating&&(e.stopPropagation(),e.stopImmediatePropagation())))}function Ut(){const e=this,{wrapperEl:i,rtlTranslate:t,enabled:s}=e;if(!s)return;let n;e.previousTranslate=e.translate,e.isHorizontal()?e.translate=-i.scrollLeft:e.translate=-i.scrollTop,0===e.translate&&(e.translate=0),e.updateActiveIndex(),e.updateSlidesClasses();const r=e.maxTranslate()-e.minTranslate();n=0===r?0:(e.translate-e.minTranslate())/r,n!==e.progress&&e.updateProgress(t?-e.translate:e.translate),e.emit("setTranslate",e.translate,!1)}function Pt(e){const i=this;Bi(i,e.target),i.params.cssMode||"auto"!==i.params.slidesPerView&&!i.params.autoHeight||i.update()}function Jt(){const e=this;e.documentTouchHandlerProceeded||(e.documentTouchHandlerProceeded=!0,e.params.touchReleaseOnEdges&&(e.el.style.touchAction="auto"))}const kt=(e,i)=>{const t=ai(),{params:s,el:n,wrapperEl:r,device:a}=e,l=!!s.nested,c="on"===i?"addEventListener":"removeEventListener",o=i;n&&"string"!=typeof n&&(t[c]("touchstart",e.onDocumentTouchStart,{passive:!1,capture:l}),n[c]("touchstart",e.onTouchStart,{passive:!1}),n[c]("pointerdown",e.onTouchStart,{passive:!1}),t[c]("touchmove",e.onTouchMove,{passive:!1,capture:l}),t[c]("pointermove",e.onTouchMove,{passive:!1,capture:l}),t[c]("touchend",e.onTouchEnd,{passive:!0}),t[c]("pointerup",e.onTouchEnd,{passive:!0}),t[c]("pointercancel",e.onTouchEnd,{passive:!0}),t[c]("touchcancel",e.onTouchEnd,{passive:!0}),t[c]("pointerout",e.onTouchEnd,{passive:!0}),t[c]("pointerleave",e.onTouchEnd,{passive:!0}),t[c]("contextmenu",e.onTouchEnd,{passive:!0}),(s.preventClicks||s.preventClicksPropagation)&&n[c]("click",e.onClick,!0),s.cssMode&&r[c]("scroll",e.onScroll),s.updateOnWindowResize?e[o](a.ios||a.android?"resize orientationchange observerUpdate":"resize observerUpdate",Ft,!0):e[o]("observerUpdate",Ft,!0),n[c]("load",e.onLoad,{capture:!0}))};function Gt(){const e=this,{params:i}=e;e.onTouchStart=Kt.bind(e),e.onTouchMove=ft.bind(e),e.onTouchEnd=Ot.bind(e),e.onDocumentTouchStart=Jt.bind(e),i.cssMode&&(e.onScroll=Ut.bind(e)),e.onClick=Lt.bind(e),e.onLoad=Pt.bind(e),kt(e,"on")}function Nt(){kt(this,"off")}var Xt={attachEvents:Gt,detachEvents:Nt};const gt=(e,i)=>e.grid&&i.grid&&i.grid.rows>1;function Tt(){const e=this,{realIndex:i,initialized:t,params:s,el:n}=e,r=s.breakpoints;if(!r||r&&0===Object.keys(r).length)return;const a=e.getBreakpoint(r,e.params.breakpointsBase,e.el);if(!a||e.currentBreakpoint===a)return;const l=(a in r?r[a]:void 0)||e.originalParams,c=gt(e,s),o=gt(e,l),d=e.params.grabCursor,m=l.grabCursor,p=s.enabled;c&&!o?(n.classList.remove(`${s.containerModifierClass}grid`,`${s.containerModifierClass}grid-column`),e.emitContainerClasses()):!c&&o&&(n.classList.add(`${s.containerModifierClass}grid`),(l.grid.fill&&"column"===l.grid.fill||!l.grid.fill&&"column"===s.grid.fill)&&n.classList.add(`${s.containerModifierClass}grid-column`),e.emitContainerClasses()),d&&!m?e.unsetGrabCursor():!d&&m&&e.setGrabCursor(),["navigation","pagination","scrollbar"].forEach((i=>{if(void 0===l[i])return;const t=s[i]&&s[i].enabled,n=l[i]&&l[i].enabled;t&&!n&&e[i].disable(),!t&&n&&e[i].enable()}));const u=l.direction&&l.direction!==s.direction,z=s.loop&&(l.slidesPerView!==s.slidesPerView||u),x=s.loop;u&&t&&e.changeDirection(),hi(e.params,l);const R=e.params.enabled,h=e.params.loop;Object.assign(e,{allowTouchMove:e.params.allowTouchMove,allowSlideNext:e.params.allowSlideNext,allowSlidePrev:e.params.allowSlidePrev}),p&&!R?e.disable():!p&&R&&e.enable(),e.currentBreakpoint=a,e.emit("_beforeBreakpoint",l),t&&(z?(e.loopDestroy(),e.loopCreate(i),e.updateSlides()):!x&&h?(e.loopCreate(i),e.updateSlides()):x&&!h&&e.loopDestroy()),e.emit("breakpoint",l)}function Ct(e,i,t){if(void 0===i&&(i="window"),!e||"container"===i&&!t)return;let s=!1;const n=ci(),r="window"===i?n.innerHeight:t.clientHeight,a=Object.keys(e).map((e=>{if("string"==typeof e&&0===e.indexOf("@")){const i=parseFloat(e.substr(1));return{value:r*i,point:e}}return{value:e,point:e}}));a.sort(((e,i)=>parseInt(e.value,10)-parseInt(i.value,10)));for(let e=0;e<a.length;e+=1){const{point:r,value:l}=a[e];"window"===i?n.matchMedia(`(min-width: ${l}px)`).matches&&(s=r):l<=t.clientWidth&&(s=r)}return s||"max"}var Ht={setBreakpoint:Tt,getBreakpoint:Ct};function At(e,i){const t=[];return e.forEach((e=>{"object"==typeof e?Object.keys(e).forEach((s=>{e[s]&&t.push(i+s)})):"string"==typeof e&&t.push(i+e)})),t}function Dt(){const e=this,{classNames:i,params:t,rtl:s,el:n,device:r}=e,a=At(["initialized",t.direction,{"free-mode":e.params.freeMode&&t.freeMode.enabled},{autoheight:t.autoHeight},{rtl:s},{grid:t.grid&&t.grid.rows>1},{"grid-column":t.grid&&t.grid.rows>1&&"column"===t.grid.fill},{android:r.android},{ios:r.ios},{"css-mode":t.cssMode},{centered:t.cssMode&&t.centeredSlides},{"watch-progress":t.watchSlidesProgress}],t.containerModifierClass);i.push(...a),n.classList.add(...i),e.emitContainerClasses()}function Qt(){const{el:e,classNames:i}=this;e&&"string"!=typeof e&&(e.classList.remove(...i),this.emitContainerClasses())}var Bt={addClasses:Dt,removeClasses:Qt};function _t(){const e=this,{isLocked:i,params:t}=e,{slidesOffsetBefore:s}=t;if(s){const i=e.slides.length-1,t=e.slidesGrid[i]+e.slidesSizesGrid[i]+2*s;e.isLocked=e.size>t}else e.isLocked=1===e.snapGrid.length;!0===t.allowSlideNext&&(e.allowSlideNext=!e.isLocked),!0===t.allowSlidePrev&&(e.allowSlidePrev=!e.isLocked),i&&i!==e.isLocked&&(e.isEnd=!1),i!==e.isLocked&&e.emit(e.isLocked?"lock":"unlock")}var $t={checkOverflow:_t},es={init:!0,direction:"horizontal",oneWayMovement:!1,swiperElementNodeName:"SWIPER-CONTAINER",touchEventsTarget:"wrapper",initialSlide:0,speed:300,cssMode:!1,updateOnWindowResize:!0,resizeObserver:!0,nested:!1,createElements:!1,eventsPrefix:"swiper",enabled:!0,focusableElements:"input, select, option, textarea, button, video, label",width:null,height:null,preventInteractionOnTransition:!1,userAgent:null,url:null,edgeSwipeDetection:!1,edgeSwipeThreshold:20,autoHeight:!1,setWrapperSize:!1,virtualTranslate:!1,effect:"slide",breakpoints:void 0,breakpointsBase:"window",spaceBetween:0,slidesPerView:1,slidesPerGroup:1,slidesPerGroupSkip:0,slidesPerGroupAuto:!1,centeredSlides:!1,centeredSlidesBounds:!1,slidesOffsetBefore:0,slidesOffsetAfter:0,normalizeSlideIndex:!0,centerInsufficientSlides:!1,watchOverflow:!0,roundLengths:!1,touchRatio:1,touchAngle:45,simulateTouch:!0,shortSwipes:!0,longSwipes:!0,longSwipesRatio:.5,longSwipesMs:300,followFinger:!0,allowTouchMove:!0,threshold:5,touchMoveStopPropagation:!1,touchStartPreventDefault:!0,touchStartForcePreventDefault:!1,touchReleaseOnEdges:!1,uniqueNavElements:!0,resistance:!0,resistanceRatio:.85,watchSlidesProgress:!1,grabCursor:!1,preventClicks:!0,preventClicksPropagation:!0,slideToClickedSlide:!1,loop:!1,loopAddBlankSlides:!0,loopAdditionalSlides:0,loopPreventsSliding:!0,rewind:!1,allowSlidePrev:!0,allowSlideNext:!0,swipeHandler:null,noSwiping:!0,noSwipingClass:"swiper-no-swiping",noSwipingSelector:null,passiveListeners:!0,maxBackfaceHiddenSlides:10,containerModifierClass:"swiper-",slideClass:"swiper-slide",slideBlankClass:"swiper-slide-blank",slideActiveClass:"swiper-slide-active",slideVisibleClass:"swiper-slide-visible",slideFullyVisibleClass:"swiper-slide-fully-visible",slideNextClass:"swiper-slide-next",slidePrevClass:"swiper-slide-prev",wrapperClass:"swiper-wrapper",lazyPreloaderClass:"swiper-lazy-preloader",lazyPreloadPrevNext:0,runCallbacksOnInit:!0,_emitClasses:!1};function is(e,i){return function(t){void 0===t&&(t={});const s=Object.keys(t)[0],n=t[s];"object"==typeof n&&null!==n?(!0===e[s]&&(e[s]={enabled:!0}),"navigation"===s&&e[s]&&e[s].enabled&&!e[s].prevEl&&!e[s].nextEl&&(e[s].auto=!0),["pagination","scrollbar"].indexOf(s)>=0&&e[s]&&e[s].enabled&&!e[s].el&&(e[s].auto=!0),s in e&&"enabled"in n?("object"!=typeof e[s]||"enabled"in e[s]||(e[s].enabled=!0),e[s]||(e[s]={enabled:!1}),hi(i,t)):hi(i,t)):hi(i,t)}}const ts={eventsEmitter:Gi,update:st,translate:ot,transition:zt,slide:jt,loop:yt,grabCursor:wt,events:Xt,breakpoints:Ht,checkOverflow:$t,classes:Bt},ss={};class ns{constructor(){let e,i;for(var t=arguments.length,s=new Array(t),n=0;n<t;n++)s[n]=arguments[n];1===s.length&&s[0].constructor&&"Object"===Object.prototype.toString.call(s[0]).slice(8,-1)?i=s[0]:[e,i]=s,i||(i={}),i=hi({},i),e&&!i.el&&(i.el=e);const r=ai();if(i.el&&"string"==typeof i.el&&r.querySelectorAll(i.el).length>1){const e=[];return r.querySelectorAll(i.el).forEach((t=>{const s=hi({},i,{el:t});e.push(new ns(s))})),e}const a=this;a.__swiper__=!0,a.support=Oi(),a.device=Li({userAgent:i.userAgent}),a.browser=Pi(),a.eventsListeners={},a.eventsAnyListeners=[],a.modules=[...a.__modules__],i.modules&&Array.isArray(i.modules)&&a.modules.push(...i.modules);const l={};a.modules.forEach((e=>{e({params:i,swiper:a,extendParams:is(i,l),on:a.on.bind(a),once:a.once.bind(a),off:a.off.bind(a),emit:a.emit.bind(a)})}));const c=hi({},es,l);return a.params=hi({},c,ss,i),a.originalParams=hi({},a.params),a.passedParams=hi({},i),a.params&&a.params.on&&Object.keys(a.params.on).forEach((e=>{a.on(e,a.params.on[e])})),a.params&&a.params.onAny&&a.onAny(a.params.onAny),Object.assign(a,{enabled:a.params.enabled,el:e,classNames:[],slides:[],slidesGrid:[],snapGrid:[],slidesSizesGrid:[],isHorizontal:()=>"horizontal"===a.params.direction,isVertical:()=>"vertical"===a.params.direction,activeIndex:0,realIndex:0,isBeginning:!0,isEnd:!1,translate:0,previousTranslate:0,progress:0,velocity:0,animating:!1,cssOverflowAdjustment(){return Math.trunc(this.translate/2**23)*2**23},allowSlideNext:a.params.allowSlideNext,allowSlidePrev:a.params.allowSlidePrev,touchEventsData:{isTouched:void 0,isMoved:void 0,allowTouchCallbacks:void 0,touchStartTime:void 0,isScrolling:void 0,currentTranslate:void 0,startTranslate:void 0,allowThresholdMove:void 0,focusableElements:a.params.focusableElements,lastClickTime:0,clickTimeout:void 0,velocities:[],allowMomentumBounce:void 0,startMoving:void 0,pointerId:null,touchId:null},allowClick:!0,allowTouchMove:a.params.allowTouchMove,touches:{startX:0,startY:0,currentX:0,currentY:0,diff:0},imagesToLoad:[],imagesLoaded:0}),a.emit("_swiper"),a.params.init&&a.init(),a}getDirectionLabel(e){return this.isHorizontal()?e:{width:"height","margin-top":"margin-left","margin-bottom ":"margin-right","margin-left":"margin-top","margin-right":"margin-bottom","padding-left":"padding-top","padding-right":"padding-bottom",marginRight:"marginBottom"}[e]}getSlideIndex(e){const{slidesEl:i,params:t}=this,s=yi(Vi(i,`.${t.slideClass}, swiper-slide`)[0]);return yi(e)-s}getSlideIndexByData(e){return this.getSlideIndex(this.slides.filter((i=>1*i.getAttribute("data-swiper-slide-index")===e))[0])}recalcSlides(){const{slidesEl:e,params:i}=this;this.slides=Vi(e,`.${i.slideClass}, swiper-slide`)}enable(){const e=this;e.enabled||(e.enabled=!0,e.params.grabCursor&&e.setGrabCursor(),e.emit("enable"))}disable(){const e=this;e.enabled&&(e.enabled=!1,e.params.grabCursor&&e.unsetGrabCursor(),e.emit("disable"))}setProgress(e,i){const t=this;e=Math.min(Math.max(e,0),1);const s=t.minTranslate(),n=(t.maxTranslate()-s)*e+s;t.translateTo(n,void 0===i?0:i),t.updateActiveIndex(),t.updateSlidesClasses()}emitContainerClasses(){const e=this;if(!e.params._emitClasses||!e.el)return;const i=e.el.className.split(" ").filter((i=>0===i.indexOf("swiper")||0===i.indexOf(e.params.containerModifierClass)));e.emit("_containerClasses",i.join(" "))}getSlideClasses(e){const i=this;return i.destroyed?"":e.className.split(" ").filter((e=>0===e.indexOf("swiper-slide")||0===e.indexOf(i.params.slideClass))).join(" ")}emitSlidesClasses(){const e=this;if(!e.params._emitClasses||!e.el)return;const i=[];e.slides.forEach((t=>{const s=e.getSlideClasses(t);i.push({slideEl:t,classNames:s}),e.emit("_slideClass",t,s)})),e.emit("_slideClasses",i)}slidesPerViewDynamic(e,i){void 0===e&&(e="current"),void 0===i&&(i=!1);const{params:t,slides:s,slidesGrid:n,slidesSizesGrid:r,size:a,activeIndex:l}=this;let c=1;if("number"==typeof t.slidesPerView)return t.slidesPerView;if(t.centeredSlides){let e,i=s[l]?Math.ceil(s[l].swiperSlideSize):0;for(let t=l+1;t<s.length;t+=1)s[t]&&!e&&(i+=Math.ceil(s[t].swiperSlideSize),c+=1,i>a&&(e=!0));for(let t=l-1;t>=0;t-=1)s[t]&&!e&&(i+=s[t].swiperSlideSize,c+=1,i>a&&(e=!0))}else if("current"===e)for(let e=l+1;e<s.length;e+=1){(i?n[e]+r[e]-n[l]<a:n[e]-n[l]<a)&&(c+=1)}else for(let e=l-1;e>=0;e-=1){n[l]-n[e]<a&&(c+=1)}return c}update(){const e=this;if(!e||e.destroyed)return;const{snapGrid:i,params:t}=e;function s(){const i=e.rtlTranslate?-1*e.translate:e.translate,t=Math.min(Math.max(i,e.maxTranslate()),e.minTranslate());e.setTranslate(t),e.updateActiveIndex(),e.updateSlidesClasses()}let n;if(t.breakpoints&&e.setBreakpoint(),[...e.el.querySelectorAll('[loading="lazy"]')].forEach((i=>{i.complete&&Bi(e,i)})),e.updateSize(),e.updateSlides(),e.updateProgress(),e.updateSlidesClasses(),t.freeMode&&t.freeMode.enabled&&!t.cssMode)s(),t.autoHeight&&e.updateAutoHeight();else{if(("auto"===t.slidesPerView||t.slidesPerView>1)&&e.isEnd&&!t.centeredSlides){const i=e.virtual&&t.virtual.enabled?e.virtual.slides:e.slides;n=e.slideTo(i.length-1,0,!1,!0)}else n=e.slideTo(e.activeIndex,0,!1,!0);n||s()}t.watchOverflow&&i!==e.snapGrid&&e.checkOverflow(),e.emit("update")}changeDirection(e,i){void 0===i&&(i=!0);const t=this,s=t.params.direction;return e||(e="horizontal"===s?"vertical":"horizontal"),e===s||"horizontal"!==e&&"vertical"!==e||(t.el.classList.remove(`${t.params.containerModifierClass}${s}`),t.el.classList.add(`${t.params.containerModifierClass}${e}`),t.emitContainerClasses(),t.params.direction=e,t.slides.forEach((i=>{"vertical"===e?i.style.width="":i.style.height=""})),t.emit("changeDirection"),i&&t.update()),t}changeLanguageDirection(e){const i=this;i.rtl&&"rtl"===e||!i.rtl&&"ltr"===e||(i.rtl="rtl"===e,i.rtlTranslate="horizontal"===i.params.direction&&i.rtl,i.rtl?(i.el.classList.add(`${i.params.containerModifierClass}rtl`),i.el.dir="rtl"):(i.el.classList.remove(`${i.params.containerModifierClass}rtl`),i.el.dir="ltr"),i.update())}mount(e){const i=this;if(i.mounted)return!0;let t=e||i.params.el;if("string"==typeof t&&(t=document.querySelector(t)),!t)return!1;t.swiper=i,t.parentNode&&t.parentNode.host&&t.parentNode.host.nodeName===i.params.swiperElementNodeName.toUpperCase()&&(i.isElement=!0);const s=()=>`.${(i.params.wrapperClass||"").trim().split(" ").join(".")}`;let n=(()=>{if(t&&t.shadowRoot&&t.shadowRoot.querySelector){return t.shadowRoot.querySelector(s())}return Vi(t,s())[0]})();return!n&&i.params.createElements&&(n=ji("div",i.params.wrapperClass),t.append(n),Vi(t,`.${i.params.slideClass}`).forEach((e=>{n.append(e)}))),Object.assign(i,{el:t,wrapperEl:n,slidesEl:i.isElement&&!t.parentNode.host.slideSlots?t.parentNode.host:n,hostEl:i.isElement?t.parentNode.host:t,mounted:!0,rtl:"rtl"===t.dir.toLowerCase()||"rtl"===bi(t,"direction"),rtlTranslate:"horizontal"===i.params.direction&&("rtl"===t.dir.toLowerCase()||"rtl"===bi(t,"direction")),wrongRTL:"-webkit-box"===bi(n,"display")}),!0}init(e){const i=this;if(i.initialized)return i;if(!1===i.mount(e))return i;i.emit("beforeInit"),i.params.breakpoints&&i.setBreakpoint(),i.addClasses(),i.updateSize(),i.updateSlides(),i.params.watchOverflow&&i.checkOverflow(),i.params.grabCursor&&i.enabled&&i.setGrabCursor(),i.params.loop&&i.virtual&&i.params.virtual.enabled?i.slideTo(i.params.initialSlide+i.virtual.slidesBefore,0,i.params.runCallbacksOnInit,!1,!0):i.slideTo(i.params.initialSlide,0,i.params.runCallbacksOnInit,!1,!0),i.params.loop&&i.loopCreate(),i.attachEvents();const t=[...i.el.querySelectorAll('[loading="lazy"]')];return i.isElement&&t.push(...i.hostEl.querySelectorAll('[loading="lazy"]')),t.forEach((e=>{e.complete?Bi(i,e):e.addEventListener("load",(e=>{Bi(i,e.target)}))})),$i(i),i.initialized=!0,$i(i),i.emit("init"),i.emit("afterInit"),i}destroy(e,i){void 0===e&&(e=!0),void 0===i&&(i=!0);const t=this,{params:s,el:n,wrapperEl:r,slides:a}=t;return void 0===t.params||t.destroyed||(t.emit("beforeDestroy"),t.initialized=!1,t.detachEvents(),s.loop&&t.loopDestroy(),i&&(t.removeClasses(),n&&"string"!=typeof n&&n.removeAttribute("style"),r&&r.removeAttribute("style"),a&&a.length&&a.forEach((e=>{e.classList.remove(s.slideVisibleClass,s.slideFullyVisibleClass,s.slideActiveClass,s.slideNextClass,s.slidePrevClass),e.removeAttribute("style"),e.removeAttribute("data-swiper-slide-index")}))),t.emit("destroy"),Object.keys(t.eventsListeners).forEach((e=>{t.off(e)})),!1!==e&&(t.el&&"string"!=typeof t.el&&(t.el.swiper=null),di(t)),t.destroyed=!0),null}static extendDefaults(e){hi(ss,e)}static get extendedDefaults(){return ss}static get defaults(){return es}static installModule(e){ns.prototype.__modules__||(ns.prototype.__modules__=[]);const i=ns.prototype.__modules__;"function"==typeof e&&i.indexOf(e)<0&&i.push(e)}static use(e){return Array.isArray(e)?(e.forEach((e=>ns.installModule(e))),ns):(ns.installModule(e),ns)}}function rs(e,i,t,s){return e.params.createElements&&Object.keys(s).forEach((n=>{if(!t[n]&&!0===t.auto){let r=Vi(e.el,`.${s[n]}`)[0];r||(r=ji("div",s[n]),r.className=s[n],e.el.append(r)),t[n]=r,i[n]=r}})),t}function as(e){return void 0===e&&(e=""),`.${e.trim().replace(/([\.:!+\/])/g,"\\$1").replace(/ /g,".")}`}function ls(e){let{swiper:i,extendParams:t,on:s,emit:n}=e;const r="swiper-pagination";let a;t({pagination:{el:null,bulletElement:"span",clickable:!1,hideOnClick:!1,renderBullet:null,renderProgressbar:null,renderFraction:null,renderCustom:null,progressbarOpposite:!1,type:"bullets",dynamicBullets:!1,dynamicMainBullets:1,formatFractionCurrent:e=>e,formatFractionTotal:e=>e,bulletClass:`${r}-bullet`,bulletActiveClass:`${r}-bullet-active`,modifierClass:`${r}-`,currentClass:`${r}-current`,totalClass:`${r}-total`,hiddenClass:`${r}-hidden`,progressbarFillClass:`${r}-progressbar-fill`,progressbarOppositeClass:`${r}-progressbar-opposite`,clickableClass:`${r}-clickable`,lockClass:`${r}-lock`,horizontalClass:`${r}-horizontal`,verticalClass:`${r}-vertical`,paginationDisabledClass:`${r}-disabled`}}),i.pagination={el:null,bullets:[]};let l=0;function c(){return!i.params.pagination.el||!i.pagination.el||Array.isArray(i.pagination.el)&&0===i.pagination.el.length}function o(e,t){const{bulletActiveClass:s}=i.params.pagination;e&&(e=e[("prev"===t?"previous":"next")+"ElementSibling"])&&(e.classList.add(`${s}-${t}`),(e=e[("prev"===t?"previous":"next")+"ElementSibling"])&&e.classList.add(`${s}-${t}-${t}`))}function d(e){const t=e.target.closest(as(i.params.pagination.bulletClass));if(!t)return;e.preventDefault();const s=yi(t)*i.params.slidesPerGroup;if(i.params.loop){if(i.realIndex===s)return;i.slideToLoop(s)}else i.slideTo(s)}function m(){const e=i.rtl,t=i.params.pagination;if(c())return;let s,r,d=i.pagination.el;d=wi(d);const m=i.virtual&&i.params.virtual.enabled?i.virtual.slides.length:i.slides.length,p=i.params.loop?Math.ceil(m/i.params.slidesPerGroup):i.snapGrid.length;if(i.params.loop?(r=i.previousRealIndex||0,s=i.params.slidesPerGroup>1?Math.floor(i.realIndex/i.params.slidesPerGroup):i.realIndex):void 0!==i.snapIndex?(s=i.snapIndex,r=i.previousSnapIndex):(r=i.previousIndex||0,s=i.activeIndex||0),"bullets"===t.type&&i.pagination.bullets&&i.pagination.bullets.length>0){const n=i.pagination.bullets;let c,m,p;if(t.dynamicBullets&&(a=Ei(n[0],i.isHorizontal()?"width":"height",!0),d.forEach((e=>{e.style[i.isHorizontal()?"width":"height"]=a*(t.dynamicMainBullets+4)+"px"})),t.dynamicMainBullets>1&&void 0!==r&&(l+=s-(r||0),l>t.dynamicMainBullets-1?l=t.dynamicMainBullets-1:l<0&&(l=0)),c=Math.max(s-l,0),m=c+(Math.min(n.length,t.dynamicMainBullets)-1),p=(m+c)/2),n.forEach((e=>{const i=[...["","-next","-next-next","-prev","-prev-prev","-main"].map((e=>`${t.bulletActiveClass}${e}`))].map((e=>"string"==typeof e&&e.includes(" ")?e.split(" "):e)).flat();e.classList.remove(...i)})),d.length>1)n.forEach((e=>{const n=yi(e);n===s?e.classList.add(...t.bulletActiveClass.split(" ")):i.isElement&&e.setAttribute("part","bullet"),t.dynamicBullets&&(n>=c&&n<=m&&e.classList.add(...`${t.bulletActiveClass}-main`.split(" ")),n===c&&o(e,"prev"),n===m&&o(e,"next"))}));else{const e=n[s];if(e&&e.classList.add(...t.bulletActiveClass.split(" ")),i.isElement&&n.forEach(((e,i)=>{e.setAttribute("part",i===s?"bullet-active":"bullet")})),t.dynamicBullets){const e=n[c],i=n[m];for(let e=c;e<=m;e+=1)n[e]&&n[e].classList.add(...`${t.bulletActiveClass}-main`.split(" "));o(e,"prev"),o(i,"next")}}if(t.dynamicBullets){const s=Math.min(n.length,t.dynamicMainBullets+4),r=(a*s-a)/2-p*a,l=e?"right":"left";n.forEach((e=>{e.style[i.isHorizontal()?l:"top"]=`${r}px`}))}}d.forEach(((e,r)=>{if("fraction"===t.type&&(e.querySelectorAll(as(t.currentClass)).forEach((e=>{e.textContent=t.formatFractionCurrent(s+1)})),e.querySelectorAll(as(t.totalClass)).forEach((e=>{e.textContent=t.formatFractionTotal(p)}))),"progressbar"===t.type){let n;n=t.progressbarOpposite?i.isHorizontal()?"vertical":"horizontal":i.isHorizontal()?"horizontal":"vertical";const r=(s+1)/p;let a=1,l=1;"horizontal"===n?a=r:l=r,e.querySelectorAll(as(t.progressbarFillClass)).forEach((e=>{e.style.transform=`translate3d(0,0,0) scaleX(${a}) scaleY(${l})`,e.style.transitionDuration=`${i.params.speed}ms`}))}"custom"===t.type&&t.renderCustom?(e.innerHTML=t.renderCustom(i,s+1,p),0===r&&n("paginationRender",e)):(0===r&&n("paginationRender",e),n("paginationUpdate",e)),i.params.watchOverflow&&i.enabled&&e.classList[i.isLocked?"add":"remove"](t.lockClass)}))}function p(){const e=i.params.pagination;if(c())return;const t=i.virtual&&i.params.virtual.enabled?i.virtual.slides.length:i.grid&&i.params.grid.rows>1?i.slides.length/Math.ceil(i.params.grid.rows):i.slides.length;let s=i.pagination.el;s=wi(s);let r="";if("bullets"===e.type){let s=i.params.loop?Math.ceil(t/i.params.slidesPerGroup):i.snapGrid.length;i.params.freeMode&&i.params.freeMode.enabled&&s>t&&(s=t);for(let t=0;t<s;t+=1)e.renderBullet?r+=e.renderBullet.call(i,t,e.bulletClass):r+=`<${e.bulletElement} ${i.isElement?'part="bullet"':""} class="${e.bulletClass}"></${e.bulletElement}>`}"fraction"===e.type&&(r=e.renderFraction?e.renderFraction.call(i,e.currentClass,e.totalClass):`<span class="${e.currentClass}"></span> / <span class="${e.totalClass}"></span>`),"progressbar"===e.type&&(r=e.renderProgressbar?e.renderProgressbar.call(i,e.progressbarFillClass):`<span class="${e.progressbarFillClass}"></span>`),i.pagination.bullets=[],s.forEach((t=>{"custom"!==e.type&&(t.innerHTML=r||""),"bullets"===e.type&&i.pagination.bullets.push(...t.querySelectorAll(as(e.bulletClass)))})),"custom"!==e.type&&n("paginationRender",s[0])}function u(){i.params.pagination=rs(i,i.originalParams.pagination,i.params.pagination,{el:"swiper-pagination"});const e=i.params.pagination;if(!e.el)return;let t;"string"==typeof e.el&&i.isElement&&(t=i.el.querySelector(e.el)),t||"string"!=typeof e.el||(t=[...document.querySelectorAll(e.el)]),t||(t=e.el),t&&0!==t.length&&(i.params.uniqueNavElements&&"string"==typeof e.el&&Array.isArray(t)&&t.length>1&&(t=[...i.el.querySelectorAll(e.el)],t.length>1&&(t=t.filter((e=>qi(e,".swiper")[0]===i.el))[0])),Array.isArray(t)&&1===t.length&&(t=t[0]),Object.assign(i.pagination,{el:t}),t=wi(t),t.forEach((t=>{"bullets"===e.type&&e.clickable&&t.classList.add(...(e.clickableClass||"").split(" ")),t.classList.add(e.modifierClass+e.type),t.classList.add(i.isHorizontal()?e.horizontalClass:e.verticalClass),"bullets"===e.type&&e.dynamicBullets&&(t.classList.add(`${e.modifierClass}${e.type}-dynamic`),l=0,e.dynamicMainBullets<1&&(e.dynamicMainBullets=1)),"progressbar"===e.type&&e.progressbarOpposite&&t.classList.add(e.progressbarOppositeClass),e.clickable&&t.addEventListener("click",d),i.enabled||t.classList.add(e.lockClass)})))}function z(){const e=i.params.pagination;if(c())return;let t=i.pagination.el;t&&(t=wi(t),t.forEach((t=>{t.classList.remove(e.hiddenClass),t.classList.remove(e.modifierClass+e.type),t.classList.remove(i.isHorizontal()?e.horizontalClass:e.verticalClass),e.clickable&&(t.classList.remove(...(e.clickableClass||"").split(" ")),t.removeEventListener("click",d))}))),i.pagination.bullets&&i.pagination.bullets.forEach((i=>i.classList.remove(...e.bulletActiveClass.split(" "))))}s("changeDirection",(()=>{if(!i.pagination||!i.pagination.el)return;const e=i.params.pagination;let{el:t}=i.pagination;t=wi(t),t.forEach((t=>{t.classList.remove(e.horizontalClass,e.verticalClass),t.classList.add(i.isHorizontal()?e.horizontalClass:e.verticalClass)}))})),s("init",(()=>{!1===i.params.pagination.enabled?x():(u(),p(),m())})),s("activeIndexChange",(()=>{void 0===i.snapIndex&&m()})),s("snapIndexChange",(()=>{m()})),s("snapGridLengthChange",(()=>{p(),m()})),s("destroy",(()=>{z()})),s("enable disable",(()=>{let{el:e}=i.pagination;e&&(e=wi(e),e.forEach((e=>e.classList[i.enabled?"remove":"add"](i.params.pagination.lockClass))))})),s("lock unlock",(()=>{m()})),s("click",((e,t)=>{const s=t.target,r=wi(i.pagination.el);if(i.params.pagination.el&&i.params.pagination.hideOnClick&&r&&r.length>0&&!s.classList.contains(i.params.pagination.bulletClass)){if(i.navigation&&(i.navigation.nextEl&&s===i.navigation.nextEl||i.navigation.prevEl&&s===i.navigation.prevEl))return;const e=r[0].classList.contains(i.params.pagination.hiddenClass);n(!0===e?"paginationShow":"paginationHide"),r.forEach((e=>e.classList.toggle(i.params.pagination.hiddenClass)))}}));const x=()=>{i.el.classList.add(i.params.pagination.paginationDisabledClass);let{el:e}=i.pagination;e&&(e=wi(e),e.forEach((e=>e.classList.add(i.params.pagination.paginationDisabledClass)))),z()};Object.assign(i.pagination,{enable:()=>{i.el.classList.remove(i.params.pagination.paginationDisabledClass);let{el:e}=i.pagination;e&&(e=wi(e),e.forEach((e=>e.classList.remove(i.params.pagination.paginationDisabledClass)))),u(),p(),m()},disable:x,render:p,update:m,init:u,destroy:z})}Object.keys(ts).forEach((e=>{Object.keys(ts[e]).forEach((i=>{ns.prototype[i]=ts[e][i]}))})),ns.use([Ji,ki]);let cs=class extends de{constructor(){super(...arguments),this.baseMoonData={},this.swiper=null}firstUpdated(){this.swiper||this.initSwiper()}initSwiper(){var e;const i=null===(e=this.shadowRoot)||void 0===e?void 0:e.querySelector(".swiper-container");if(!i)return;const t=i.querySelector(".swiper-pagination");this.swiper=new ns(i,{modules:[ls],centeredSlides:!0,grabCursor:!0,roundLengths:!0,spaceBetween:16,keyboard:{enabled:!0,onlyInViewport:!0},loop:!1,slidesPerView:1,pagination:{el:t,clickable:!0}})}render(){const e=this.baseMoonData,i=(i,t)=>C`
      <div class="swiper-slide">
        <div class="moon-data">
          ${Object.entries(e).slice(i,t).map((([,e])=>C`
                <div class="moon-data-item">
                  <span class="label">${e.label}</span>
                  <div class="value">
                    ${e.value} ${e.unit}
                    ${e.secondValue?C`<span class="second-value">(${e.secondValue})</span>`:""}
                  </div>
                </div>
              `))}
        </div>
      </div>
    `;return C`
      <section id="swiper">
        <div class="swiper-container">
          <div class="swiper-wrapper">${i(0,5)} ${i(5,10)}</div>
          <div class="swiper-pagination"></div>
        </div>
      </section>
    `}static get styles(){return[ti,ii]}};e([xe({type:Object})],cs.prototype,"baseMoonData",void 0),e([xe({type:Object})],cs.prototype,"swiper",void 0),cs=e([pe("lunar-base-data")],cs);let os=class extends de{constructor(){super(...arguments),this._activeCard="base",this._baseMoonData={},this.latitude=0,this.longitude=0,this._getMoonTimes=(e,i,t)=>qe.getMoonTimes(e,i,t)}static async getConfigElement(){return await Promise.resolve().then((function(){return ms})),document.createElement("lunar-phase-card-editor")}async setConfig(e){if(!e)throw new Error("Invalid configuration");this.config=Object.assign({},e)}firstUpdated(e){super.firstUpdated(e),this._setBackgroundCss(),this.getLatLong(),this.fetchBaseMoonData()}async fetchBaseMoonData(){this._baseMoonData=this._getBaseMoonData()}getLatLong(){if(this.config.latitude&&this.config.longitude)this.latitude=this.config.latitude,this.longitude=this.config.longitude;else if(this.config.entity){const e=this.hass.states[this.config.entity];if(e){const{latitude:i,longitude:t}=e.attributes.location;this.latitude=i,this.longitude=t}}else this.config.use_default&&(this.latitude=this.hass.config.latitude,this.longitude=this.hass.config.longitude);return{latitude:this.latitude,longitude:this.longitude}}get _showBackground(){return this.config.show_background||!1}get _today(){return new Date}get _moonIllumination(){const e=this.selectedDate?new Date(this.selectedDate):this._today;return this._getMoonIllumination(e)}get _moonPosition(){const e=this.selectedDate?new Date(this.selectedDate):this._today;return this._getMoonPosition(e,this.latitude,this.longitude)}get _moonTimes(){const e=this.selectedDate?new Date(this.selectedDate):this._today;return this._getMoonTimes(e,this.latitude,this.longitude)}get _moonPhaseName(){return this._moonIllumination.phase.name}connectedCallback(){super.connectedCallback()}disconnectedCallback(){super.disconnectedCallback()}updated(e){super.updated(e),e.has("_activeCard")&&"base"===this._activeCard&&(this.selectedDate=void 0,this.fetchBaseMoonData())}shouldUpdate(e){return!(!e.has("hass")&&!e.has("config"))||(!!e.has("_activeCard")||(!(!e.has("selectedDate")&&!e.has("_baseMoonData"))||we(this,e,!0)))}render(){if(!this.hass||!this.config)return C``;const e="calendar"===this._activeCard;return C`
      <ha-card class=${this._computeClasses()}>
        ${this.renderHeader()}
        <div class="lunar-card-content ${e?"flex-col":""}">
        ${this.renderPage(this._activeCard)}
      </ha-card>
    `}renderPage(e){switch(e){case"base":default:return this.renderBaseMoonData();case"calendar":return this.renderCalendar()}}renderBaseMoonData(){return C` ${this.renderMoonImage()} ${this.renderMoonData()} `}renderHeader(){if(!this.config.compact_view||"base"!==this._activeCard)return C`
      <div class="lunar-card-header">
        <h1>${this._moonPhaseName}</h1>
        <div @click=${()=>this.togglePage()} class="btn-calendar click-shrink">
          <ha-icon icon="mdi:calendar-search"></ha-icon>
        </div>
      </div>
    `}renderMoonImage(){const e=this._getMoonImageData(),i={transform:`rotate(${e.rotateDeg}deg)`,marginBottom:""+(this.config.compact_view?"":"2rem")};return C` <div class="moon-image slide-animation " style=${Se(i)}>
      <img src=${e.moonImage} alt="${e.moonPhaseName}" />
    </div>`}renderMoonData(){const e=this.config.compact_view&&"base"===this._activeCard;return C`
      ${e?this.renderCompactView():C`<lunar-base-data .baseMoonData=${this._baseMoonData}></lunar-base-data> `}
    `}renderCompactView(){const{moonFraction:e,moonRise:i,moonSet:t,moonAge:s}=this._baseMoonData||{};return e&&i&&t&&s?C`
      <div @click=${this.togglePage} class="btn-calendar compact click-shrink">
        <ha-icon icon="mdi:calendar-search"></ha-icon>
      </div>
      <div class="compact-view">
        <div class="moon-phase-name"><h1>${this._moonPhaseName}</h1></div>
        <div class="moon-fraction">${e.value} ${e.unit} Illuminated</div>
        <div class="compact-view-items">
          ${this.renderCompactItem("mdi:progress-clock",s.value,s.unit,s.label)}
          ${this.renderCompactItem("mdi:weather-sunset-up",i.value,"",i.label)}
          ${this.renderCompactItem("mdi:weather-sunset-down",t.value,"",t.label)}
        </div>
      </div>
    `:C`<div>Loading...</div>`}renderCompactItem(e,i,t,s){return C`
      <div class="compact-item">
        <div class="icon-value">
          <ha-icon icon=${e}></ha-icon>
          <span class="label">${i} ${t}</span>
        </div>
        <span class="value">${s}</span>
      </div>
    `}renderCalendar(){const e=C`<div class="date-input-wrapper">
      <input type="date" class="date-input" .value=${this.selectedDate||""} @input=${this._handleDateChange} />
      <button @click=${()=>this.updateDate("today")} class="date-input-btn click-shrink">Today</button>
      <button @click=${()=>this.updateDate("prev")} class="date-input-btn click-shrink">Previous day</button>
      <button @click=${()=>this.updateDate("next")} class="date-input-btn click-shrink">Next day</button>
    </div>`;return C`
      ${this.renderMoonImage()}
      <div class="calendar-wrapper">${e}${this.renderMoonData()}</div>
    `}updateDate(e){const i=new Date(this.selectedDate||this._today);"next"===e?i.setDate(i.getDate()+1):"prev"===e?i.setDate(i.getDate()-1):i.setDate(this._today.getDate()),this.selectedDate=i.toISOString().split("T")[0],this.fetchBaseMoonData()}_handleDateChange(e){const i=e.target;this.selectedDate=i.value,this.fetchBaseMoonData()}togglePage(){this._activeCard="base"===this._activeCard?"calendar":"base"}_getMoonImageData(){const e=this._moonIllumination,i=Math.round(16*e.phaseValue)%16;return{moonImage:$e[i],moonPhaseName:e.phase.name,rotateDeg:180-180*this._moonPosition.parallacticAngle/Math.PI}}_getBaseMoonData(){const{rise:e,set:i,highest:t}=this._moonTimes,{phaseValue:s,fraction:n}=this._moonIllumination,{fullMoon:r,newMoon:a}=this._moonIllumination.next,l=this._moonIllumination.phase.name,{distance:c,azimuthDegrees:o,altitudeDegrees:d}=this._moonPosition,m=e=>new Date(e).toISOString(),p=(e,i,t="",s="")=>({label:e,value:i,secondValue:t,unit:s});return{moonFraction:p("Illumination",(100*n).toFixed(2),"","%"),moonAge:p("Moon Age",(29.5*s).toFixed(2),"","days"),moonRise:p("Moonrise",Ke(m(e)),ve(m(e))),moonSet:p("Moonset",Ke(m(i)),ve(m(i))),moonHighest:p("Moon Highest",Ke(m(t||"")),ve(m(t||"")),""),distance:p("Distance",c.toFixed(2),"","km"),azimuthDegress:p("Moon Azimuth",o.toFixed(2),"","°"),altitudeDegrees:p("Moon Altitude",d.toFixed(2),"","°"),nextFullMoon:p("Next Full Moon",new Date(r.date).toDateString(),"",""),nextNewMoon:p("Next New Moon",new Date(a.date).toDateString(),"",""),phaseName:p("Phase Name",l,"","")}}_getMoonIllumination(e){return qe.getMoonIllumination(e)}_getMoonPosition(e,i,t){return qe.getMoonPosition(e,i,t)}_computeClasses(){return Ve({"--background":this._showBackground})}_setBackgroundCss(){this.style.setProperty("--lunar-background-image",`url(${_e})`)}static get styles(){return[ii]}getCardSize(){return 4}};os.getStubConfig=()=>Object.assign({},Ye),e([xe({attribute:!1})],os.prototype,"hass",void 0),e([xe({type:Object})],os.prototype,"config",void 0),e([Re()],os.prototype,"_activeCard",void 0),e([Re()],os.prototype,"_baseMoonData",void 0),e([Re()],os.prototype,"latitude",void 0),e([Re()],os.prototype,"longitude",void 0),e([Re()],os.prototype,"selectedDate",void 0),os=e([pe("lunar-phase-card")],os),window.customCards=window.customCards||[],window.customCards.push({type:"lunar-phase-card",name:"Lunar Phase Card",description:"A custom card to display the current lunar phase."});let ds=class extends de{setConfig(e){this._config=e,this._config.entity&&(this._config.use_default=!1)}get _entity(){var e;return(null===(e=this._config)||void 0===e?void 0:e.entity)||""}get _use_default(){var e;return(null===(e=this._config)||void 0===e?void 0:e.use_default)||!0}get _show_background(){var e;return(null===(e=this._config)||void 0===e?void 0:e.show_background)||!1}get _compact_view(){var e;return(null===(e=this._config)||void 0===e?void 0:e.compact_view)||!1}render(){if(!this.hass)return C``;const e=Object.keys(this.hass.states).filter((e=>e.startsWith("sensor")&&e.endsWith("_moon_phase"))).sort();return C`
      <div class="card-config">
        <ha-select
          naturalMenuWidth
          fixedMenuPosition
          label="Entity (optional)"
          .configValue=${"entity"}
          .value=${this._entity}
          @selected=${this._valueChanged}
          @closed=${e=>e.stopPropagation()}
        >
          <mwc-list-item value=""></mwc-list-item>
          ${e.map((e=>C`<mwc-list-item .value=${e}>${e}</mwc-list-item>`))}
        </ha-select>
        ${this.renderCustomLatLon()} ${this.renderSwitches()}
      </div>
      <div class="version">Version: ${Be}</div>
    `}renderSwitches(){var e;return C`
      <div class="switches">
        <ha-formfield .label=${"Compact view"}>
          <ha-switch
            .checked=${!1!==this._compact_view}
            .configValue=${"compact_view"}
            @change=${this._valueChanged}
          ></ha-switch>
        </ha-formfield>
        <ha-formfield .label=${"Default latitude & longitude"}>
          <ha-switch
            .disabled=${void 0!==(null===(e=this._config)||void 0===e?void 0:e.entity)}
            .checked=${!1!==this._use_default}
            .configValue=${"use_default"}
            @change=${this._valueChanged}
          ></ha-switch>
        </ha-formfield>
        <ha-formfield .label=${"Show background"}>
          <ha-switch
            .checked=${!1!==this._show_background}
            .configValue=${"show_background"}
            @change=${this._valueChanged}
          ></ha-switch>
        </ha-formfield>
      </div>
    `}renderCustomLatLon(){var e,i;const t=C`
      <ha-textfield
        .label=${"Latitude"}
        .configValue=${"latitude"}
        .value=${(null===(e=this._config)||void 0===e?void 0:e.latitude)||""}
        @value-changed=${this._valueChanged}
      ></ha-textfield>
      <ha-textfield
        .label=${"Longitude"}
        .configValue=${"longitude"}
        .value=${(null===(i=this._config)||void 0===i?void 0:i.longitude)||""}
        @value-changed=${this._valueChanged}
      ></ha-textfield>
    `;return this.panelTemplate("Latitude & Longitude","Set custom latitude and longitude","mdi:map-marker",t)}panelTemplate(e,i,t,s){return C`
      <div class="panel-container">
        <ha-expansion-panel .expanded=${!1} .outlined=${!0} .header=${e} .secondary=${i} leftChevron>
          <div class="right-icon" slot="icons">
            <ha-icon icon=${t}></ha-icon>
          </div>
          <div class="card-config">${s}</div>
        </ha-expansion-panel>
      </div>
    `}_valueChanged(e){if(!this._config||!this.hass)return;const i=e.target;if(this[`_${i.configValue}`]!==i.value){if(i.configValue)if(""===i.value){const e=Object.assign({},this._config);delete e[i.configValue],this._config=e}else this._config=Object.assign(Object.assign({},this._config),{[i.configValue]:void 0!==i.checked?i.checked:i.value});Ee(this,"config-changed",{config:this._config})}}};ds.styles=l`
    .card-config {
      width: 100%;
      margin-block: 0.5rem;
      display: flex;
      flex-direction: column;
      gap: 1rem;
    }

    .switches {
      margin: 0.5rem;
      display: grid;
      grid-template-columns: 1fr 1fr;
      grid-gap: 1rem;
    }
    ha-select {
      --mdc-menu-max-height: 200px;
    }
    ha-select,
    ha-textfield {
      margin-bottom: 16px;
      display: block;
      width: 100%;
    }
    ha-formfield {
      padding-bottom: 8px;
      width: 100%;
    }
    ha-switch {
      --mdc-theme-secondary: var(--switch-checked-color);
    }

    ha-expansion-panel .container {
      padding: 0px 1rem !important;
    }
    .right-icon {
      padding-inline: 0.5rem;
    }
    .version {
      margin-top: 1rem;
      color: var(--secondary-text-color);
      text-align: start;
    }
  `,e([xe({attribute:!1})],ds.prototype,"hass",void 0),e([Re()],ds.prototype,"_config",void 0),ds=e([pe("lunar-phase-card-editor")],ds);var ms=Object.freeze({__proto__:null,get LunarPhaseCardEditor(){return ds}});export{os as LunarPhaseCard};