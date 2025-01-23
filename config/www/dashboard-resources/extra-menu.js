function t(t,e,s,i){var o,n=arguments.length,r=n<3?e:null===i?i=Object.getOwnPropertyDescriptor(e,s):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(t,e,s,i);else for(var a=t.length-1;a>=0;a--)(o=t[a])&&(r=(n<3?o(r):n>3?o(e,s,r):o(e,s))||r);return n>3&&r&&Object.defineProperty(e,s,r),r}function e(t,e,s){return null==s?Math.min(t,e):Math.min(Math.max(t,e),s)}
/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */console.groupCollapsed("%c   EXTRA-MENU    \n%c   v0.0.1        ","color: orange; font-weight: bold; background: transparent","font-weight: bold; background: dimgray"),console.info("Extra popup menu for Home Assistant"),console.info("Github: https://github.com/ngocjohn/extra-menu"),console.info("If you like the card, consider supporting the developer: https://github.com/sponsors/ngocjohn"),console.groupEnd(),"function"==typeof SuppressedError&&SuppressedError;const s=globalThis,i=s.ShadowRoot&&(void 0===s.ShadyCSS||s.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,o=Symbol(),n=new WeakMap;let r=class{constructor(t,e,s){if(this._$cssResult$=!0,s!==o)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=e}get styleSheet(){let t=this.o;const e=this.t;if(i&&void 0===t){const s=void 0!==e&&1===e.length;s&&(t=n.get(e)),void 0===t&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),s&&n.set(e,t))}return t}toString(){return this.cssText}};const a=t=>new r("string"==typeof t?t:t+"",void 0,o),h=(t,...e)=>{const s=1===t.length?t[0]:e.reduce(((e,s,i)=>e+(t=>{if(!0===t._$cssResult$)return t.cssText;if("number"==typeof t)return t;throw Error("Value passed to 'css' function must be a 'css' function result: "+t+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(s)+t[i+1]),t[0]);return new r(s,t,o)},l=(t,e)=>{if(i)t.adoptedStyleSheets=e.map((t=>t instanceof CSSStyleSheet?t:t.styleSheet));else for(const i of e){const e=document.createElement("style"),o=s.litNonce;void 0!==o&&e.setAttribute("nonce",o),e.textContent=i.cssText,t.appendChild(e)}},c=i?t=>t:t=>t instanceof CSSStyleSheet?(t=>{let e="";for(const s of t.cssRules)e+=s.cssText;return a(e)})(t):t
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */,{is:d,defineProperty:p,getOwnPropertyDescriptor:u,getOwnPropertyNames:f,getOwnPropertySymbols:m,getPrototypeOf:$}=Object,y=globalThis,_=y.trustedTypes,g=_?_.emptyScript:"",v=y.reactiveElementPolyfillSupport,A=(t,e)=>t,w={toAttribute(t,e){switch(e){case Boolean:t=t?g:null;break;case Object:case Array:t=null==t?t:JSON.stringify(t)}return t},fromAttribute(t,e){let s=t;switch(e){case Boolean:s=null!==t;break;case Number:s=null===t?null:Number(t);break;case Object:case Array:try{s=JSON.parse(t)}catch(t){s=null}}return s}},E=(t,e)=>!d(t,e),b={attribute:!0,type:String,converter:w,reflect:!1,hasChanged:E};Symbol.metadata??=Symbol("metadata"),y.litPropertyMetadata??=new WeakMap;class S extends HTMLElement{static addInitializer(t){this._$Ei(),(this.l??=[]).push(t)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(t,e=b){if(e.state&&(e.attribute=!1),this._$Ei(),this.elementProperties.set(t,e),!e.noAccessor){const s=Symbol(),i=this.getPropertyDescriptor(t,s,e);void 0!==i&&p(this.prototype,t,i)}}static getPropertyDescriptor(t,e,s){const{get:i,set:o}=u(this.prototype,t)??{get(){return this[e]},set(t){this[e]=t}};return{get(){return i?.call(this)},set(e){const n=i?.call(this);o.call(this,e),this.requestUpdate(t,n,s)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)??b}static _$Ei(){if(this.hasOwnProperty(A("elementProperties")))return;const t=$(this);t.finalize(),void 0!==t.l&&(this.l=[...t.l]),this.elementProperties=new Map(t.elementProperties)}static finalize(){if(this.hasOwnProperty(A("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(A("properties"))){const t=this.properties,e=[...f(t),...m(t)];for(const s of e)this.createProperty(s,t[s])}const t=this[Symbol.metadata];if(null!==t){const e=litPropertyMetadata.get(t);if(void 0!==e)for(const[t,s]of e)this.elementProperties.set(t,s)}this._$Eh=new Map;for(const[t,e]of this.elementProperties){const s=this._$Eu(t,e);void 0!==s&&this._$Eh.set(s,t)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(t){const e=[];if(Array.isArray(t)){const s=new Set(t.flat(1/0).reverse());for(const t of s)e.unshift(c(t))}else void 0!==t&&e.push(c(t));return e}static _$Eu(t,e){const s=e.attribute;return!1===s?void 0:"string"==typeof s?s:"string"==typeof t?t.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$ES=new Promise((t=>this.enableUpdating=t)),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach((t=>t(this)))}addController(t){(this._$EO??=new Set).add(t),void 0!==this.renderRoot&&this.isConnected&&t.hostConnected?.()}removeController(t){this._$EO?.delete(t)}_$E_(){const t=new Map,e=this.constructor.elementProperties;for(const s of e.keys())this.hasOwnProperty(s)&&(t.set(s,this[s]),delete this[s]);t.size>0&&(this._$Ep=t)}createRenderRoot(){const t=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return l(t,this.constructor.elementStyles),t}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$EO?.forEach((t=>t.hostConnected?.()))}enableUpdating(t){}disconnectedCallback(){this._$EO?.forEach((t=>t.hostDisconnected?.()))}attributeChangedCallback(t,e,s){this._$AK(t,s)}_$EC(t,e){const s=this.constructor.elementProperties.get(t),i=this.constructor._$Eu(t,s);if(void 0!==i&&!0===s.reflect){const o=(void 0!==s.converter?.toAttribute?s.converter:w).toAttribute(e,s.type);this._$Em=t,null==o?this.removeAttribute(i):this.setAttribute(i,o),this._$Em=null}}_$AK(t,e){const s=this.constructor,i=s._$Eh.get(t);if(void 0!==i&&this._$Em!==i){const t=s.getPropertyOptions(i),o="function"==typeof t.converter?{fromAttribute:t.converter}:void 0!==t.converter?.fromAttribute?t.converter:w;this._$Em=i,this[i]=o.fromAttribute(e,t.type),this._$Em=null}}requestUpdate(t,e,s){if(void 0!==t){if(s??=this.constructor.getPropertyOptions(t),!(s.hasChanged??E)(this[t],e))return;this.P(t,e,s)}!1===this.isUpdatePending&&(this._$ES=this._$ET())}P(t,e,s){this._$AL.has(t)||this._$AL.set(t,e),!0===s.reflect&&this._$Em!==t&&(this._$Ej??=new Set).add(t)}async _$ET(){this.isUpdatePending=!0;try{await this._$ES}catch(t){Promise.reject(t)}const t=this.scheduleUpdate();return null!=t&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(const[t,e]of this._$Ep)this[t]=e;this._$Ep=void 0}const t=this.constructor.elementProperties;if(t.size>0)for(const[e,s]of t)!0!==s.wrapped||this._$AL.has(e)||void 0===this[e]||this.P(e,this[e],s)}let t=!1;const e=this._$AL;try{t=this.shouldUpdate(e),t?(this.willUpdate(e),this._$EO?.forEach((t=>t.hostUpdate?.())),this.update(e)):this._$EU()}catch(e){throw t=!1,this._$EU(),e}t&&this._$AE(e)}willUpdate(t){}_$AE(t){this._$EO?.forEach((t=>t.hostUpdated?.())),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$EU(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(t){return!0}update(t){this._$Ej&&=this._$Ej.forEach((t=>this._$EC(t,this[t]))),this._$EU()}updated(t){}firstUpdated(t){}}S.elementStyles=[],S.shadowRootOptions={mode:"open"},S[A("elementProperties")]=new Map,S[A("finalized")]=new Map,v?.({ReactiveElement:S}),(y.reactiveElementVersions??=[]).push("2.0.4");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const C=globalThis,x=C.trustedTypes,P=x?x.createPolicy("lit-html",{createHTML:t=>t}):void 0,O="$lit$",T=`lit$${Math.random().toFixed(9).slice(2)}$`,U="?"+T,R=`<${U}>`,M=document,H=()=>M.createComment(""),k=t=>null===t||"object"!=typeof t&&"function"!=typeof t,N=Array.isArray,j=t=>N(t)||"function"==typeof t?.[Symbol.iterator],L="[ \t\n\f\r]",I=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,q=/-->/g,B=/>/g,D=RegExp(`>|${L}(?:([^\\s"'>=/]+)(${L}*=${L}*(?:[^ \t\n\f\r"'\`<>=]|("|')|))|$)`,"g"),z=/'/g,W=/"/g,V=/^(?:script|style|textarea|title)$/i,X=t=>(e,...s)=>({_$litType$:t,strings:e,values:s}),Y=X(1),F=Symbol.for("lit-noChange"),Z=Symbol.for("lit-nothing"),J=new WeakMap,K=M.createTreeWalker(M,129);function G(t,e){if(!N(t)||!t.hasOwnProperty("raw"))throw Error("invalid template strings array");return void 0!==P?P.createHTML(e):e}const Q=(t,e)=>{const s=t.length-1,i=[];let o,n=2===e?"<svg>":3===e?"<math>":"",r=I;for(let e=0;e<s;e++){const s=t[e];let a,h,l=-1,c=0;for(;c<s.length&&(r.lastIndex=c,h=r.exec(s),null!==h);)c=r.lastIndex,r===I?"!--"===h[1]?r=q:void 0!==h[1]?r=B:void 0!==h[2]?(V.test(h[2])&&(o=RegExp("</"+h[2],"g")),r=D):void 0!==h[3]&&(r=D):r===D?">"===h[0]?(r=o??I,l=-1):void 0===h[1]?l=-2:(l=r.lastIndex-h[2].length,a=h[1],r=void 0===h[3]?D:'"'===h[3]?W:z):r===W||r===z?r=D:r===q||r===B?r=I:(r=D,o=void 0);const d=r===D&&t[e+1].startsWith("/>")?" ":"";n+=r===I?s+R:l>=0?(i.push(a),s.slice(0,l)+O+s.slice(l)+T+d):s+T+(-2===l?e:d)}return[G(t,n+(t[s]||"<?>")+(2===e?"</svg>":3===e?"</math>":"")),i]};class tt{constructor({strings:t,_$litType$:e},s){let i;this.parts=[];let o=0,n=0;const r=t.length-1,a=this.parts,[h,l]=Q(t,e);if(this.el=tt.createElement(h,s),K.currentNode=this.el.content,2===e||3===e){const t=this.el.content.firstChild;t.replaceWith(...t.childNodes)}for(;null!==(i=K.nextNode())&&a.length<r;){if(1===i.nodeType){if(i.hasAttributes())for(const t of i.getAttributeNames())if(t.endsWith(O)){const e=l[n++],s=i.getAttribute(t).split(T),r=/([.?@])?(.*)/.exec(e);a.push({type:1,index:o,name:r[2],strings:s,ctor:"."===r[1]?nt:"?"===r[1]?rt:"@"===r[1]?at:ot}),i.removeAttribute(t)}else t.startsWith(T)&&(a.push({type:6,index:o}),i.removeAttribute(t));if(V.test(i.tagName)){const t=i.textContent.split(T),e=t.length-1;if(e>0){i.textContent=x?x.emptyScript:"";for(let s=0;s<e;s++)i.append(t[s],H()),K.nextNode(),a.push({type:2,index:++o});i.append(t[e],H())}}}else if(8===i.nodeType)if(i.data===U)a.push({type:2,index:o});else{let t=-1;for(;-1!==(t=i.data.indexOf(T,t+1));)a.push({type:7,index:o}),t+=T.length-1}o++}}static createElement(t,e){const s=M.createElement("template");return s.innerHTML=t,s}}function et(t,e,s=t,i){if(e===F)return e;let o=void 0!==i?s._$Co?.[i]:s._$Cl;const n=k(e)?void 0:e._$litDirective$;return o?.constructor!==n&&(o?._$AO?.(!1),void 0===n?o=void 0:(o=new n(t),o._$AT(t,s,i)),void 0!==i?(s._$Co??=[])[i]=o:s._$Cl=o),void 0!==o&&(e=et(t,o._$AS(t,e.values),o,i)),e}class st{constructor(t,e){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=e}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){const{el:{content:e},parts:s}=this._$AD,i=(t?.creationScope??M).importNode(e,!0);K.currentNode=i;let o=K.nextNode(),n=0,r=0,a=s[0];for(;void 0!==a;){if(n===a.index){let e;2===a.type?e=new it(o,o.nextSibling,this,t):1===a.type?e=new a.ctor(o,a.name,a.strings,this,t):6===a.type&&(e=new ht(o,this,t)),this._$AV.push(e),a=s[++r]}n!==a?.index&&(o=K.nextNode(),n++)}return K.currentNode=M,i}p(t){let e=0;for(const s of this._$AV)void 0!==s&&(void 0!==s.strings?(s._$AI(t,s,e),e+=s.strings.length-2):s._$AI(t[e])),e++}}class it{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(t,e,s,i){this.type=2,this._$AH=Z,this._$AN=void 0,this._$AA=t,this._$AB=e,this._$AM=s,this.options=i,this._$Cv=i?.isConnected??!0}get parentNode(){let t=this._$AA.parentNode;const e=this._$AM;return void 0!==e&&11===t?.nodeType&&(t=e.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,e=this){t=et(this,t,e),k(t)?t===Z||null==t||""===t?(this._$AH!==Z&&this._$AR(),this._$AH=Z):t!==this._$AH&&t!==F&&this._(t):void 0!==t._$litType$?this.$(t):void 0!==t.nodeType?this.T(t):j(t)?this.k(t):this._(t)}O(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}T(t){this._$AH!==t&&(this._$AR(),this._$AH=this.O(t))}_(t){this._$AH!==Z&&k(this._$AH)?this._$AA.nextSibling.data=t:this.T(M.createTextNode(t)),this._$AH=t}$(t){const{values:e,_$litType$:s}=t,i="number"==typeof s?this._$AC(t):(void 0===s.el&&(s.el=tt.createElement(G(s.h,s.h[0]),this.options)),s);if(this._$AH?._$AD===i)this._$AH.p(e);else{const t=new st(i,this),s=t.u(this.options);t.p(e),this.T(s),this._$AH=t}}_$AC(t){let e=J.get(t.strings);return void 0===e&&J.set(t.strings,e=new tt(t)),e}k(t){N(this._$AH)||(this._$AH=[],this._$AR());const e=this._$AH;let s,i=0;for(const o of t)i===e.length?e.push(s=new it(this.O(H()),this.O(H()),this,this.options)):s=e[i],s._$AI(o),i++;i<e.length&&(this._$AR(s&&s._$AB.nextSibling,i),e.length=i)}_$AR(t=this._$AA.nextSibling,e){for(this._$AP?.(!1,!0,e);t&&t!==this._$AB;){const e=t.nextSibling;t.remove(),t=e}}setConnected(t){void 0===this._$AM&&(this._$Cv=t,this._$AP?.(t))}}class ot{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(t,e,s,i,o){this.type=1,this._$AH=Z,this._$AN=void 0,this.element=t,this.name=e,this._$AM=i,this.options=o,s.length>2||""!==s[0]||""!==s[1]?(this._$AH=Array(s.length-1).fill(new String),this.strings=s):this._$AH=Z}_$AI(t,e=this,s,i){const o=this.strings;let n=!1;if(void 0===o)t=et(this,t,e,0),n=!k(t)||t!==this._$AH&&t!==F,n&&(this._$AH=t);else{const i=t;let r,a;for(t=o[0],r=0;r<o.length-1;r++)a=et(this,i[s+r],e,r),a===F&&(a=this._$AH[r]),n||=!k(a)||a!==this._$AH[r],a===Z?t=Z:t!==Z&&(t+=(a??"")+o[r+1]),this._$AH[r]=a}n&&!i&&this.j(t)}j(t){t===Z?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"")}}class nt extends ot{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===Z?void 0:t}}class rt extends ot{constructor(){super(...arguments),this.type=4}j(t){this.element.toggleAttribute(this.name,!!t&&t!==Z)}}class at extends ot{constructor(t,e,s,i,o){super(t,e,s,i,o),this.type=5}_$AI(t,e=this){if((t=et(this,t,e,0)??Z)===F)return;const s=this._$AH,i=t===Z&&s!==Z||t.capture!==s.capture||t.once!==s.once||t.passive!==s.passive,o=t!==Z&&(s===Z||i);i&&this.element.removeEventListener(this.name,this,s),o&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){"function"==typeof this._$AH?this._$AH.call(this.options?.host??this.element,t):this._$AH.handleEvent(t)}}class ht{constructor(t,e,s){this.element=t,this.type=6,this._$AN=void 0,this._$AM=e,this.options=s}get _$AU(){return this._$AM._$AU}_$AI(t){et(this,t)}}const lt=C.litHtmlPolyfillSupport;lt?.(tt,it),(C.litHtmlVersions??=[]).push("3.2.1");const ct=(t,e,s)=>{const i=s?.renderBefore??e;let o=i._$litPart$;if(void 0===o){const t=s?.renderBefore??null;i._$litPart$=o=new it(e.insertBefore(H(),t),t,void 0,s??{})}return o._$AI(t),o
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */};let dt=class extends S{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){const t=super.createRenderRoot();return this.renderOptions.renderBefore??=t.firstChild,t}update(t){const e=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=ct(e,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return F}};dt._$litElement$=!0,dt.finalized=!0,globalThis.litElementHydrateSupport?.({LitElement:dt});const pt=globalThis.litElementPolyfillSupport;pt?.({LitElement:dt}),(globalThis.litElementVersions??=[]).push("4.1.1");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const ut={ATTRIBUTE:1,CHILD:2,PROPERTY:3,BOOLEAN_ATTRIBUTE:4,EVENT:5,ELEMENT:6},ft=t=>(...e)=>({_$litDirective$:t,values:e});let mt=class{constructor(t){}get _$AU(){return this._$AM._$AU}_$AT(t,e,s){this._$Ct=t,this._$AM=e,this._$Ci=s}_$AS(t,e){return this.update(t,e)}update(t,e){return this.render(...e)}};
/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const $t="important",yt=" !"+$t,_t=ft(class extends mt{constructor(t){if(super(t),t.type!==ut.ATTRIBUTE||"style"!==t.name||t.strings?.length>2)throw Error("The `styleMap` directive must be used in the `style` attribute and must be the only part in the attribute.")}render(t){return Object.keys(t).reduce(((e,s)=>{const i=t[s];return null==i?e:e+`${s=s.includes("-")?s:s.replace(/(?:^(webkit|moz|ms|o)|)(?=[A-Z])/g,"-$&").toLowerCase()}:${i};`}),"")}update(t,[e]){const{style:s}=t.element;if(void 0===this.ft)return this.ft=new Set(Object.keys(e)),this.render(e);for(const t of this.ft)null==e[t]&&(this.ft.delete(t),t.includes("-")?s.removeProperty(t):s[t]=null);for(const t in e){const i=e[t];if(null!=i){this.ft.add(t);const e="string"==typeof i&&i.endsWith(yt);t.includes("-")||e?s.setProperty(t,e?i.slice(0,-11):i,e?$t:""):s[t]=i}}return F}}),gt=t=>(e,s)=>{void 0!==s?s.addInitializer((()=>{customElements.define(t,e)})):customElements.define(t,e)}
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */,vt={attribute:!0,type:String,converter:w,reflect:!1,hasChanged:E},At=(t=vt,e,s)=>{const{kind:i,metadata:o}=s;let n=globalThis.litPropertyMetadata.get(o);if(void 0===n&&globalThis.litPropertyMetadata.set(o,n=new Map),n.set(s.name,t),"accessor"===i){const{name:i}=s;return{set(s){const o=e.get.call(this);e.set.call(this,s),this.requestUpdate(i,o,t)},init(e){return void 0!==e&&this.P(i,void 0,t),e}}}if("setter"===i){const{name:i}=s;return function(s){const o=this[i];e.call(this,s),this.requestUpdate(i,o,t)}}throw Error("Unsupported decorator location: "+i)};
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function wt(t){return(e,s)=>"object"==typeof s?At(t,e,s):((t,e,s)=>{const i=e.hasOwnProperty(s);return e.constructor.createProperty(s,i?{...t,wrapped:!0}:t),i?Object.getOwnPropertyDescriptor(e,s):void 0})(t,e,s)
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */}function Et(t){return wt({...t,state:!0,attribute:!1})}const bt={backgroundColor:"rgba(0, 0, 0, 0.32);",backdropFilter:"blur(5px)"},St={maxWidth:"492px"};function Ct(){let t=document.querySelector("home-assistant");return t=t&&t.shadowRoot,t=t&&t.querySelector("home-assistant-main"),t=t&&t.shadowRoot,t=t&&t.querySelector("app-drawer-layout partial-panel-resolver")||t.querySelector("ha-drawer partial-panel-resolver"),t=t&&t.shadowRoot||t,t=t&&t.querySelector("ha-panel-lovelace"),t=t&&t.shadowRoot,t=t&&t.querySelector("hui-root"),t=t&&t.shadowRoot,t=t&&t.querySelector("ha-app-layout")||t,t=t&&t.querySelector("#view"),t=t&&t.querySelector("hui-view"),t}function xt(t){const e=document.querySelector("home-assistant");if(e)return e.provideHass(t)}const Pt=window.loadCardHelpers?window.loadCardHelpers():void 0,Ot=new function(){this.extraMenu=null,this.position={x:0,y:0},this.handleXYPosition=t=>{t instanceof MouseEvent?this.position={x:t.clientX,y:t.clientY}:t instanceof TouchEvent&&(this.position={x:t.touches[0].clientX,y:t.touches[0].clientY})}};function Tt(t){const e=Ct();e&&(Ot.extraMenu=document.createElement("extra-menu"),Ot.extraMenu.setConfig(t),Ot.extraMenu.displayCard(e,Ot.position))}document.body.addEventListener("ll-custom",(t=>{t.preventDefault();const e=t;e.detail.extra_menu&&Tt(e.detail.extra_menu)})),document.addEventListener("touchstart",Ot.handleXYPosition,!1),document.addEventListener("mousedown",Ot.handleXYPosition,!1);let Ut=class extends dt{constructor(){super(...arguments),this.hass={},this.cardElement=[],this._handleClose=t=>{t.stopPropagation(),this.close()}}connectedCallback(){super.connectedCallback(),window.extra_menu=this}disconnectedCallback(){super.disconnectedCallback()}setConfig(t){xt(this),this.config=t}async displayCard(t,e){this.cardElement&&0!==this.cardElement.length||await this.createCard(this.config.cards),this.view=t,this.view.style.position="relative",this.view.appendChild(this),this.cardElement&&this.cardElement.length>0&&this._handleShowCard(e)}updated(t){super.updated(t),t.has("hass")&&this.hass&&this.cardElement&&this.cardElement.length>0&&this.cardElement.forEach((t=>{t.hass=this.hass}))}async createCard(t){let e;if(window.loadCardHelpers?e=await window.loadCardHelpers():Pt&&(e=Pt),!e||!e.createCardElement)return;const s=await Promise.all(t.map((async t=>{try{const s=await e.createCardElement(t);return s.hass=this.hass,s}catch(t){return null}})));this.cardElement=s}render(){return Y`
      <div id="shadow-container" style=${this.computeShadowStyle()} @click=${t=>this._handleClose(t)}></div>
      <div id="card-container" class="hidden">${this.cardElement.map((t=>t))}</div>
    `}_handleShowCard(t){const e=this.config.custom_position,s=this.config.card_container||{},i=Object.assign(Object.assign({},St),s);setTimeout((()=>{e&&void 0!==e?this.setCustomPosition(e,i):this.setPosition(t,i)}),500)}setCustomPosition(t,e){var s;const i=null===(s=this.shadowRoot)||void 0===s?void 0:s.querySelector("#card-container");i&&(this.classList.add(t),Object.assign(i.style,e),i.style.height="100%",i.style.width="100%",i.style.placeSelf="center center",i.classList.replace("hidden","fade-in"))}setPosition(t,s){var i;Object.assign(this.style,s),this.style.width="100%";const o=null===(i=this.shadowRoot)||void 0===i?void 0:i.querySelector("#card-container"),n=o.getBoundingClientRect();let r=n.width/2,a=n.height/2,h={min:{x:parseFloat(window.getComputedStyle(this.view).getPropertyValue("padding-left"))+r,y:parseFloat(window.getComputedStyle(this.view).getPropertyValue("padding-top"))+a},max:{x:this.view.clientWidth-r,y:this.view.clientHeight-a}};const l=this.view.getBoundingClientRect();t.x=e(t.x-l.left,h.min.x,h.max.x-4),t.y=e(t.y-l.top,h.min.y,h.max.y-4),this.style.left=t.x-r+"px",this.style.top=t.y-a+"px",o.classList.replace("hidden","fade-in")}close(){var t,e;const s=null===(t=this.shadowRoot)||void 0===t?void 0:t.querySelector("#card-container"),i=null===(e=this.shadowRoot)||void 0===e?void 0:e.querySelector("#shadow-container");s&&i&&(s.classList.toggle("fade-out",!0),s.addEventListener("animationend",(()=>{s.classList.replace("fade-out","hidden"),Ot.extraMenu=null,this.remove()})))}computeShadowStyle(){const t=this.config.shadow_container||{};return _t(Object.assign(Object.assign({},bt),t))}static get styles(){return h`
      :host {
        position: absolute;
        z-index: 8; /*200;*/
      }

      :host([closing]),
      :host([closing]) * {
        pointer-events: none !important;
      }

      #shadow-container {
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        animation-duration: 1s;
        animation-fill-mode: both;
        animation-name: fadeIn;
      }

      #card-container {
        background: none;
        border: none;
        display: flex;
        flex-direction: column;
        justify-content: center;
        gap: 8px;
      }

      #card-container.hidden {
        visibility: hidden;
      }
      // Custom Positions for the card container
      :host(.top) {
        top: 0;
        left: 50%;
        transform: translateX(-50%);
        height: 100%;
        width: 100%;
        place-self: center center;
      }

      :host(.bottom) {
        bottom: 0;
        left: 50%;
        transform: translateX(-50%);
        height: 100%;
        width: 100%;
        place-self: center center;
      }

      :host(.left) {
        left: 0;
        top: 50%;
        transform: translateY(-50%);
        height: 100%;
        width: 100%;
        place-self: center center;
      }

      :host(.right) {
        right: 0;
        top: 50%;
        transform: translateY(-50%);
        height: 100%;
        width: 100%;
        place-self: center center;
      }

      :host(.center) {
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        height: 100%;
        width: 100%;
        place-self: center center;
      }

      :host(.top-left) {
        top: 0;
        left: 0;
      }

      :host(.top-right) {
        top: 0;
        right: 0;
      }

      :host(.bottom-left) {
        bottom: 0;
        left: 0;
      }

      :host(.bottom-right) {
        bottom: 0;
        right: 0;
      }

      /* Card fade-in and fade-out animations */
      .fade-in {
        animation: fadeIn 0.2s ease-in;
      }

      .fade-out {
        animation: fadeOut 0.3s ease-in-out;
      }

      .clip-from-side {
        animation: clipFromSide 1s ease-in-out forwards;
      }

      @keyframes fadeIn {
        from {
          opacity: 0;
        }
        to {
          opacity: 1;
        }
      }

      @keyframes fadeOut {
        from {
          opacity: 1;
          transform: scale(1);
        }
        to {
          opacity: 0;
          transform: scale(0.5);
        }
      }

      @keyframes clipFromSide {
        from {
          clip-path: inset(0 0 0 0);
        }
        to {
          clip-path: inset(0 100% 0 100%);
        }
      }
    `}};t([Et()],Ut.prototype,"hass",void 0),t([Et()],Ut.prototype,"config",void 0),t([Et()],Ut.prototype,"cardElement",void 0),t([Et()],Ut.prototype,"view",void 0),Ut=t([gt("extra-menu")],Ut);export{Ut as ExtraMenu};
