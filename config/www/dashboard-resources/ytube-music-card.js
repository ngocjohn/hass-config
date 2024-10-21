function t(t,e,i,r){var a,o=arguments.length,s=o<3?e:null===r?r=Object.getOwnPropertyDescriptor(e,i):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(t,e,i,r);else for(var n=t.length-1;n>=0;n--)(a=t[n])&&(s=(o<3?a(s):o>3?a(e,i,s):a(e,i))||s);return o>3&&s&&Object.defineProperty(e,i,s),s}console.groupCollapsed("%c   Ytube Music Card   \n%c   v1.0.0             ","color: orange; font-weight: bold; background: black","color: white; font-weight: bold; background: dimgray"),console.info("Lovelace custom card for tracking Moon phases"),console.info("Github: https://github.com/ngocjohn/ytube-music-card"),console.info("If you like the card, consider supporting the developer: https://github.com/sponsors/ngocjohn"),console.groupEnd(),"function"==typeof SuppressedError&&SuppressedError;
/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const e=globalThis,i=e.ShadowRoot&&(void 0===e.ShadyCSS||e.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,r=Symbol(),a=new WeakMap;class o{constructor(t,e,i){if(this._$cssResult$=!0,i!==r)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=e}get styleSheet(){let t=this.o;const e=this.t;if(i&&void 0===t){const i=void 0!==e&&1===e.length;i&&(t=a.get(e)),void 0===t&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),i&&a.set(e,t))}return t}toString(){return this.cssText}}const s=t=>new o("string"==typeof t?t:t+"",void 0,r),n=(t,...e)=>{const i=1===t.length?t[0]:e.reduce(((e,i,r)=>e+(t=>{if(!0===t._$cssResult$)return t.cssText;if("number"==typeof t)return t;throw Error("Value passed to 'css' function must be a 'css' function result: "+t+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(i)+t[r+1]),t[0]);return new o(i,t,r)},A=(t,r)=>{if(i)t.adoptedStyleSheets=r.map((t=>t instanceof CSSStyleSheet?t:t.styleSheet));else for(const i of r){const r=document.createElement("style"),a=e.litNonce;void 0!==a&&r.setAttribute("nonce",a),r.textContent=i.cssText,t.appendChild(r)}},l=i?t=>t:t=>t instanceof CSSStyleSheet?(t=>{let e="";for(const i of t.cssRules)e+=i.cssText;return s(e)})(t):t
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */,{is:c,defineProperty:h,getOwnPropertyDescriptor:d,getOwnPropertyNames:p,getOwnPropertySymbols:u,getPrototypeOf:g}=Object,b=globalThis,m=b.trustedTypes,y=m?m.emptyScript:"",k=b.reactiveElementPolyfillSupport,S=(t,e)=>t,f={toAttribute(t,e){switch(e){case Boolean:t=t?y:null;break;case Object:case Array:t=null==t?t:JSON.stringify(t)}return t},fromAttribute(t,e){let i=t;switch(e){case Boolean:i=null!==t;break;case Number:i=null===t?null:Number(t);break;case Object:case Array:try{i=JSON.parse(t)}catch(t){i=null}}return i}},E=(t,e)=>!c(t,e),v={attribute:!0,type:String,converter:f,reflect:!1,hasChanged:E};Symbol.metadata??=Symbol("metadata"),b.litPropertyMetadata??=new WeakMap;class J extends HTMLElement{static addInitializer(t){this._$Ei(),(this.l??=[]).push(t)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(t,e=v){if(e.state&&(e.attribute=!1),this._$Ei(),this.elementProperties.set(t,e),!e.noAccessor){const i=Symbol(),r=this.getPropertyDescriptor(t,i,e);void 0!==r&&h(this.prototype,t,r)}}static getPropertyDescriptor(t,e,i){const{get:r,set:a}=d(this.prototype,t)??{get(){return this[e]},set(t){this[e]=t}};return{get(){return r?.call(this)},set(e){const o=r?.call(this);a.call(this,e),this.requestUpdate(t,o,i)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)??v}static _$Ei(){if(this.hasOwnProperty(S("elementProperties")))return;const t=g(this);t.finalize(),void 0!==t.l&&(this.l=[...t.l]),this.elementProperties=new Map(t.elementProperties)}static finalize(){if(this.hasOwnProperty(S("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(S("properties"))){const t=this.properties,e=[...p(t),...u(t)];for(const i of e)this.createProperty(i,t[i])}const t=this[Symbol.metadata];if(null!==t){const e=litPropertyMetadata.get(t);if(void 0!==e)for(const[t,i]of e)this.elementProperties.set(t,i)}this._$Eh=new Map;for(const[t,e]of this.elementProperties){const i=this._$Eu(t,e);void 0!==i&&this._$Eh.set(i,t)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(t){const e=[];if(Array.isArray(t)){const i=new Set(t.flat(1/0).reverse());for(const t of i)e.unshift(l(t))}else void 0!==t&&e.push(l(t));return e}static _$Eu(t,e){const i=e.attribute;return!1===i?void 0:"string"==typeof i?i:"string"==typeof t?t.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$ES=new Promise((t=>this.enableUpdating=t)),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach((t=>t(this)))}addController(t){(this._$EO??=new Set).add(t),void 0!==this.renderRoot&&this.isConnected&&t.hostConnected?.()}removeController(t){this._$EO?.delete(t)}_$E_(){const t=new Map,e=this.constructor.elementProperties;for(const i of e.keys())this.hasOwnProperty(i)&&(t.set(i,this[i]),delete this[i]);t.size>0&&(this._$Ep=t)}createRenderRoot(){const t=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return A(t,this.constructor.elementStyles),t}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$EO?.forEach((t=>t.hostConnected?.()))}enableUpdating(t){}disconnectedCallback(){this._$EO?.forEach((t=>t.hostDisconnected?.()))}attributeChangedCallback(t,e,i){this._$AK(t,i)}_$EC(t,e){const i=this.constructor.elementProperties.get(t),r=this.constructor._$Eu(t,i);if(void 0!==r&&!0===i.reflect){const a=(void 0!==i.converter?.toAttribute?i.converter:f).toAttribute(e,i.type);this._$Em=t,null==a?this.removeAttribute(r):this.setAttribute(r,a),this._$Em=null}}_$AK(t,e){const i=this.constructor,r=i._$Eh.get(t);if(void 0!==r&&this._$Em!==r){const t=i.getPropertyOptions(r),a="function"==typeof t.converter?{fromAttribute:t.converter}:void 0!==t.converter?.fromAttribute?t.converter:f;this._$Em=r,this[r]=a.fromAttribute(e,t.type),this._$Em=null}}requestUpdate(t,e,i){if(void 0!==t){if(i??=this.constructor.getPropertyOptions(t),!(i.hasChanged??E)(this[t],e))return;this.P(t,e,i)}!1===this.isUpdatePending&&(this._$ES=this._$ET())}P(t,e,i){this._$AL.has(t)||this._$AL.set(t,e),!0===i.reflect&&this._$Em!==t&&(this._$Ej??=new Set).add(t)}async _$ET(){this.isUpdatePending=!0;try{await this._$ES}catch(t){Promise.reject(t)}const t=this.scheduleUpdate();return null!=t&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(const[t,e]of this._$Ep)this[t]=e;this._$Ep=void 0}const t=this.constructor.elementProperties;if(t.size>0)for(const[e,i]of t)!0!==i.wrapped||this._$AL.has(e)||void 0===this[e]||this.P(e,this[e],i)}let t=!1;const e=this._$AL;try{t=this.shouldUpdate(e),t?(this.willUpdate(e),this._$EO?.forEach((t=>t.hostUpdate?.())),this.update(e)):this._$EU()}catch(e){throw t=!1,this._$EU(),e}t&&this._$AE(e)}willUpdate(t){}_$AE(t){this._$EO?.forEach((t=>t.hostUpdated?.())),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$EU(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(t){return!0}update(t){this._$Ej&&=this._$Ej.forEach((t=>this._$EC(t,this[t]))),this._$EU()}updated(t){}firstUpdated(t){}}J.elementStyles=[],J.shadowRootOptions={mode:"open"},J[S("elementProperties")]=new Map,J[S("finalized")]=new Map,k?.({ReactiveElement:J}),(b.reactiveElementVersions??=[]).push("2.0.4");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const C=globalThis,Q=C.trustedTypes,w=Q?Q.createPolicy("lit-html",{createHTML:t=>t}):void 0,x="$lit$",M=`lit$${Math.random().toFixed(9).slice(2)}$`,I="?"+M,B=`<${I}>`,T=document,U=()=>T.createComment(""),N=t=>null===t||"object"!=typeof t&&"function"!=typeof t,R=Array.isArray,L=t=>R(t)||"function"==typeof t?.[Symbol.iterator],G="[ \t\n\f\r]",K=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,D=/-->/g,Y=/>/g,z=RegExp(`>|${G}(?:([^\\s"'>=/]+)(${G}*=${G}*(?:[^ \t\n\f\r"'\`<>=]|("|')|))|$)`,"g"),O=/'/g,H=/"/g,j=/^(?:script|style|textarea|title)$/i,V=t=>(e,...i)=>({_$litType$:t,strings:e,values:i}),Z=V(1),W=Symbol.for("lit-noChange"),q=Symbol.for("lit-nothing"),F=new WeakMap,P=T.createTreeWalker(T,129);function X(t,e){if(!R(t)||!t.hasOwnProperty("raw"))throw Error("invalid template strings array");return void 0!==w?w.createHTML(e):e}const _=(t,e)=>{const i=t.length-1,r=[];let a,o=2===e?"<svg>":3===e?"<math>":"",s=K;for(let e=0;e<i;e++){const i=t[e];let n,A,l=-1,c=0;for(;c<i.length&&(s.lastIndex=c,A=s.exec(i),null!==A);)c=s.lastIndex,s===K?"!--"===A[1]?s=D:void 0!==A[1]?s=Y:void 0!==A[2]?(j.test(A[2])&&(a=RegExp("</"+A[2],"g")),s=z):void 0!==A[3]&&(s=z):s===z?">"===A[0]?(s=a??K,l=-1):void 0===A[1]?l=-2:(l=s.lastIndex-A[2].length,n=A[1],s=void 0===A[3]?z:'"'===A[3]?H:O):s===H||s===O?s=z:s===D||s===Y?s=K:(s=z,a=void 0);const h=s===z&&t[e+1].startsWith("/>")?" ":"";o+=s===K?i+B:l>=0?(r.push(n),i.slice(0,l)+x+i.slice(l)+M+h):i+M+(-2===l?e:h)}return[X(t,o+(t[i]||"<?>")+(2===e?"</svg>":3===e?"</math>":"")),r]};class ${constructor({strings:t,_$litType$:e},i){let r;this.parts=[];let a=0,o=0;const s=t.length-1,n=this.parts,[A,l]=_(t,e);if(this.el=$.createElement(A,i),P.currentNode=this.el.content,2===e||3===e){const t=this.el.content.firstChild;t.replaceWith(...t.childNodes)}for(;null!==(r=P.nextNode())&&n.length<s;){if(1===r.nodeType){if(r.hasAttributes())for(const t of r.getAttributeNames())if(t.endsWith(x)){const e=l[o++],i=r.getAttribute(t).split(M),s=/([.?@])?(.*)/.exec(e);n.push({type:1,index:a,name:s[2],strings:i,ctor:"."===s[1]?at:"?"===s[1]?ot:"@"===s[1]?st:rt}),r.removeAttribute(t)}else t.startsWith(M)&&(n.push({type:6,index:a}),r.removeAttribute(t));if(j.test(r.tagName)){const t=r.textContent.split(M),e=t.length-1;if(e>0){r.textContent=Q?Q.emptyScript:"";for(let i=0;i<e;i++)r.append(t[i],U()),P.nextNode(),n.push({type:2,index:++a});r.append(t[e],U())}}}else if(8===r.nodeType)if(r.data===I)n.push({type:2,index:a});else{let t=-1;for(;-1!==(t=r.data.indexOf(M,t+1));)n.push({type:7,index:a}),t+=M.length-1}a++}}static createElement(t,e){const i=T.createElement("template");return i.innerHTML=t,i}}function tt(t,e,i=t,r){if(e===W)return e;let a=void 0!==r?i.o?.[r]:i.l;const o=N(e)?void 0:e._$litDirective$;return a?.constructor!==o&&(a?._$AO?.(!1),void 0===o?a=void 0:(a=new o(t),a._$AT(t,i,r)),void 0!==r?(i.o??=[])[r]=a:i.l=a),void 0!==a&&(e=tt(t,a._$AS(t,e.values),a,r)),e}class et{constructor(t,e){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=e}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){const{el:{content:e},parts:i}=this._$AD,r=(t?.creationScope??T).importNode(e,!0);P.currentNode=r;let a=P.nextNode(),o=0,s=0,n=i[0];for(;void 0!==n;){if(o===n.index){let e;2===n.type?e=new it(a,a.nextSibling,this,t):1===n.type?e=new n.ctor(a,n.name,n.strings,this,t):6===n.type&&(e=new nt(a,this,t)),this._$AV.push(e),n=i[++s]}o!==n?.index&&(a=P.nextNode(),o++)}return P.currentNode=T,r}p(t){let e=0;for(const i of this._$AV)void 0!==i&&(void 0!==i.strings?(i._$AI(t,i,e),e+=i.strings.length-2):i._$AI(t[e])),e++}}class it{get _$AU(){return this._$AM?._$AU??this.v}constructor(t,e,i,r){this.type=2,this._$AH=q,this._$AN=void 0,this._$AA=t,this._$AB=e,this._$AM=i,this.options=r,this.v=r?.isConnected??!0}get parentNode(){let t=this._$AA.parentNode;const e=this._$AM;return void 0!==e&&11===t?.nodeType&&(t=e.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,e=this){t=tt(this,t,e),N(t)?t===q||null==t||""===t?(this._$AH!==q&&this._$AR(),this._$AH=q):t!==this._$AH&&t!==W&&this._(t):void 0!==t._$litType$?this.$(t):void 0!==t.nodeType?this.T(t):L(t)?this.k(t):this._(t)}O(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}T(t){this._$AH!==t&&(this._$AR(),this._$AH=this.O(t))}_(t){this._$AH!==q&&N(this._$AH)?this._$AA.nextSibling.data=t:this.T(T.createTextNode(t)),this._$AH=t}$(t){const{values:e,_$litType$:i}=t,r="number"==typeof i?this._$AC(t):(void 0===i.el&&(i.el=$.createElement(X(i.h,i.h[0]),this.options)),i);if(this._$AH?._$AD===r)this._$AH.p(e);else{const t=new et(r,this),i=t.u(this.options);t.p(e),this.T(i),this._$AH=t}}_$AC(t){let e=F.get(t.strings);return void 0===e&&F.set(t.strings,e=new $(t)),e}k(t){R(this._$AH)||(this._$AH=[],this._$AR());const e=this._$AH;let i,r=0;for(const a of t)r===e.length?e.push(i=new it(this.O(U()),this.O(U()),this,this.options)):i=e[r],i._$AI(a),r++;r<e.length&&(this._$AR(i&&i._$AB.nextSibling,r),e.length=r)}_$AR(t=this._$AA.nextSibling,e){for(this._$AP?.(!1,!0,e);t&&t!==this._$AB;){const e=t.nextSibling;t.remove(),t=e}}setConnected(t){void 0===this._$AM&&(this.v=t,this._$AP?.(t))}}class rt{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(t,e,i,r,a){this.type=1,this._$AH=q,this._$AN=void 0,this.element=t,this.name=e,this._$AM=r,this.options=a,i.length>2||""!==i[0]||""!==i[1]?(this._$AH=Array(i.length-1).fill(new String),this.strings=i):this._$AH=q}_$AI(t,e=this,i,r){const a=this.strings;let o=!1;if(void 0===a)t=tt(this,t,e,0),o=!N(t)||t!==this._$AH&&t!==W,o&&(this._$AH=t);else{const r=t;let s,n;for(t=a[0],s=0;s<a.length-1;s++)n=tt(this,r[i+s],e,s),n===W&&(n=this._$AH[s]),o||=!N(n)||n!==this._$AH[s],n===q?t=q:t!==q&&(t+=(n??"")+a[s+1]),this._$AH[s]=n}o&&!r&&this.j(t)}j(t){t===q?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"")}}class at extends rt{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===q?void 0:t}}class ot extends rt{constructor(){super(...arguments),this.type=4}j(t){this.element.toggleAttribute(this.name,!!t&&t!==q)}}class st extends rt{constructor(t,e,i,r,a){super(t,e,i,r,a),this.type=5}_$AI(t,e=this){if((t=tt(this,t,e,0)??q)===W)return;const i=this._$AH,r=t===q&&i!==q||t.capture!==i.capture||t.once!==i.once||t.passive!==i.passive,a=t!==q&&(i===q||r);r&&this.element.removeEventListener(this.name,this,i),a&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){"function"==typeof this._$AH?this._$AH.call(this.options?.host??this.element,t):this._$AH.handleEvent(t)}}class nt{constructor(t,e,i){this.element=t,this.type=6,this._$AN=void 0,this._$AM=e,this.options=i}get _$AU(){return this._$AM._$AU}_$AI(t){tt(this,t)}}const At=C.litHtmlPolyfillSupport;At?.($,it),(C.litHtmlVersions??=[]).push("3.2.0");const lt=(t,e,i)=>{const r=i?.renderBefore??e;let a=r._$litPart$;if(void 0===a){const t=i?.renderBefore??null;r._$litPart$=a=new it(e.insertBefore(U(),t),t,void 0,i??{})}return a._$AI(t),a
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */};class ct extends J{constructor(){super(...arguments),this.renderOptions={host:this},this.o=void 0}createRenderRoot(){const t=super.createRenderRoot();return this.renderOptions.renderBefore??=t.firstChild,t}update(t){const e=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this.o=lt(e,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this.o?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this.o?.setConnected(!1)}render(){return W}}ct._$litElement$=!0,ct.finalized=!0,globalThis.litElementHydrateSupport?.({LitElement:ct});const ht=globalThis.litElementPolyfillSupport;ht?.({LitElement:ct}),(globalThis.litElementVersions??=[]).push("4.1.0");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const dt=t=>(e,i)=>{void 0!==i?i.addInitializer((()=>{customElements.define(t,e)})):customElements.define(t,e)}
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */,pt={attribute:!0,type:String,converter:f,reflect:!1,hasChanged:E},ut=(t=pt,e,i)=>{const{kind:r,metadata:a}=i;let o=globalThis.litPropertyMetadata.get(a);if(void 0===o&&globalThis.litPropertyMetadata.set(a,o=new Map),o.set(i.name,t),"accessor"===r){const{name:r}=i;return{set(i){const a=e.get.call(this);e.set.call(this,i),this.requestUpdate(r,a,t)},init(e){return void 0!==e&&this.P(r,void 0,t),e}}}if("setter"===r){const{name:r}=i;return function(i){const a=this[r];e.call(this,i),this.requestUpdate(r,a,t)}}throw Error("Unsupported decorator location: "+r)};function gt(t){return(e,i)=>"object"==typeof i?ut(t,e,i):((t,e,i)=>{const r=e.hasOwnProperty(i);return e.constructor.createProperty(i,r?{...t,wrapped:!0}:t),r?Object.getOwnPropertyDescriptor(e,i):void 0})(t,e,i)
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */}function bt(t){return gt({...t,state:!0,attribute:!1})}
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const mt=(t,e,i)=>(i.configurable=!0,i.enumerable=!0,Reflect.decorate&&"object"!=typeof e&&Object.defineProperty(t,e,i),i)
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */;function yt(t,e){return(i,r,a)=>{const o=e=>e.renderRoot?.querySelector(t)??null;if(e){const{get:t,set:e}="object"==typeof r?i:a??(()=>{const t=Symbol();return{get(){return this[t]},set(e){this[t]=e}}})();return mt(i,r,{get(){let i=t.call(this);return void 0===i&&(i=o(this),(null!==i||this.hasUpdated)&&e.call(this,i)),i}})}return mt(i,r,{get(){return o(this)}})}}
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const kt={ATTRIBUTE:1,CHILD:2,PROPERTY:3,BOOLEAN_ATTRIBUTE:4,EVENT:5,ELEMENT:6},St=t=>(...e)=>({_$litDirective$:t,values:e});class ft{constructor(t){}get _$AU(){return this._$AM._$AU}_$AT(t,e,i){this.t=t,this._$AM=e,this.i=i}_$AS(t,e){return this.update(t,e)}update(t,e){return this.render(...e)}}
/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Et="important",vt=" !"+Et,Jt=St(class extends ft{constructor(t){if(super(t),t.type!==kt.ATTRIBUTE||"style"!==t.name||t.strings?.length>2)throw Error("The `styleMap` directive must be used in the `style` attribute and must be the only part in the attribute.")}render(t){return Object.keys(t).reduce(((e,i)=>{const r=t[i];return null==r?e:e+`${i=i.includes("-")?i:i.replace(/(?:^(webkit|moz|ms|o)|)(?=[A-Z])/g,"-$&").toLowerCase()}:${r};`}),"")}update(t,[e]){const{style:i}=t.element;if(void 0===this.ft)return this.ft=new Set(Object.keys(e)),this.render(e);for(const t of this.ft)null==e[t]&&(this.ft.delete(t),t.includes("-")?i.removeProperty(t):i[t]=null);for(const t in e){const r=e[t];if(null!=r){this.ft.add(t);const e="string"==typeof r&&r.endsWith(vt);t.includes("-")||e?i.setProperty(t,e?r.slice(0,-11):r,e?Et:""):i[t]=r}}return W}});var Ct,Qt;!function(t){t.language="language",t.system="system",t.comma_decimal="comma_decimal",t.decimal_comma="decimal_comma",t.space_comma="space_comma",t.none="none"}(Ct||(Ct={})),function(t){t.language="language",t.system="system",t.am_pm="12",t.twenty_four="24"}(Qt||(Qt={}));var wt=function(t,e,i,r){r=r||{},i=null==i?{}:i;var a=new Event(e,{bubbles:void 0===r.bubbles||r.bubbles,cancelable:Boolean(r.cancelable),composed:void 0===r.composed||r.composed});return a.detail=i,t.dispatchEvent(a),a};function xt(t,e,i){if(e.has("config")||i)return!0;if(t.config.entity){var r=e.get("hass");return!r||r.states[t.config.entity]!==t.hass.states[t.config.entity]}return!1}var Mt="1.0.0";const It=Mt;var Bt;!function(t){t.PLAY="mdi:play",t.PAUSE="mdi:pause",t.STOP="mdi:stop",t.NEXT="mdi:skip-next",t.PREV="mdi:skip-previous",t.REPEAT="mdi:repeat",t.SHUFFLE="mdi:shuffle",t.VOLUME="mdi:volume-high",t.VOLUME_MUTE="mdi:volume-mute",t.LIKE="mdi:thumb-up",t.DISLIKE="mdi:thumb-down",t.CLOSE="mdi:close",t.MENU="mdi:menu",t.SEARCH="mdi:magnify",t.BACK="mdi:arrow-left",t.FORWARD="mdi:arrow-right",t.PLAYLIST="mdi:playlist-music",t.ALBUM="mdi:album",t.ARTIST="mdi:account-music",t.LIBRARY="mdi:file-music",t.HISTORY="mdi:history",t.MUSIC="mdi:music",t.HOME="mdi:home",t.PLAY_CIRCLE="mdi:play-circle",t.CHEVRON_LEFT="mdi:chevron-left",t.CHEVRON_RIGHT="mdi:chevron-right",t.RADIO="mdi:broadcast"}(Bt||(Bt={}));const Tt={OFF:"off",ALL:"all",ONE:"one"},Ut=["track","playlist","tv_show","album"],Nt=["vid_channel","playlist","track","speakers","music"],Rt=["cur_playlists","album_of_track","speakers","vid_channel","search"];class Lt{constructor(t,e){this.hass=t||{},this.entity=e||{},this.state=e.state,this._attr=e.attributes||{}}get id(){return this.entity.entity_id}get isPaused(){return"paused"===this.state}get isPlaying(){return"playing"===this.state}get isIdle(){return"idle"===this.state}get isStandby(){return"standby"===this.state}get isUnavailable(){return"unavailable"===this.state}get isOff(){return"off"===this.state}get mediaType(){return this._attr._media_type||""}get mediaId(){return this._attr._media_id||""}get currentTrack(){return this._attr.current_track}get playlistTitle(){return this._attr.current_playlist_title||""}get remotePlayerId(){return this._attr.remote_player_id||""}get remotePlayerName(){var t;const e=this.hass.states[this.remotePlayerId];return(null===(t=null==e?void 0:e.attributes)||void 0===t?void 0:t.friendly_name)||""}get isActive(){return!this.isOff&&!this.isUnavailable&&!this.isIdle||!1}get muted(){return this._attr.is_volume_muted||!1}get shuffle(){return this._attr.shuffle||!1}get repeat(){return this._attr.repeat||Tt.OFF}get picture(){return this._attr.entity_picture_local||this._attr.entity_picture}get updatedAt(){return this._attr.media_position_updated_at||0}get position(){return this._attr.media_position||0}get duration(){return this._attr.media_duration||0}get progress(){if(this.isPlaying){const t=(Date.now()-new Date(this.updatedAt).getTime())/1e3;return(this.position+t)/this.duration*100}return this.position/this.duration*100}async _getCurrentlyPlayingItems(){var t;const e=this._attr.media_content_type||"",i=this.mediaType;let r={};try{Nt.includes(e)&&!["album"].includes(i)&&(r=await this.hass.callWS({type:"media_player/browse_media",entity_id:this.id,media_content_type:"cur_playlists",media_content_id:""})),["album"].includes(i)&&(r=await this.hass.callWS({type:"media_player/browse_media",entity_id:this.id,media_content_type:"album",media_content_id:this.mediaId}),null===(t=null==r?void 0:r.children)||void 0===t||t.map(((t,e)=>(t.media_content_type="PLAYLIST_GOTO_TRACK",t.media_content_id=e+1,t))))}catch(t){}return r||{}}async _getItemLibrary(t,e){let i={};try{i=await this.hass.callWS({type:"media_player/browse_media",entity_id:this.id,media_content_type:t,media_content_id:e})}catch(t){}return i||{}}async _playMedia(t){t&&("PLAYLIST_GOTO_TRACK"!=t.media_content_type?Ut.includes(t.media_class)&&this.hass.callService("media_player","play_media",{entity_id:this.id,media_content_id:t.media_content_id,media_content_type:t.media_content_type}):this.hass.callService("ytube_music_player","call_method",{entity_id:this.id,command:"goto_track",parameters:t.media_content_id}))}async ytubeHassAction(t,e){this.isUnavailable||this.isOff||await this.hass.callService("ytube_music_player",t,Object.assign({entity_id:this.id},e))}async playRadioOnSong(t){this.isUnavailable||this.isOff||await this.hass.callService("media_player","play_media",{entity_id:this.id,media_content_id:t,media_content_type:"vid_channel"})}toggleMute(t){this.callService(t,"volume_mute",{is_volume_muted:!this.muted})}toggleShuffle(t){this.callService(t,"shuffle_set",{shuffle:!this.shuffle})}toggleRepeat(t){const e=Object.values(Tt),{length:i}=e,r=e.indexOf(this.repeat)-1,a=e[(r-1%i+i)%i];this.callService(t,"repeat_set",{repeat:a})}volumeUp(t){this.callService(t,"volume_up")}volumeDown(t){this.callService(t,"volume_down")}setVolume(t,e){t.stopPropagation();const i=e/100;this.callService(t,"volume_set",{volume_level:i})}play(t){this.callService(t,"media_play")}pause(t){this.callService(t,"media_pause")}playPause(t){this.callService(t,"media_play_pause")}next(t){this.callService(t,"media_next_track")}prev(t){this.callService(t,"media_previous_track")}stop(t){this.callService(t,"media_stop")}callService(t,e,i,r="media_player",a=!1){t.stopPropagation(),this.hass.callService(r,e,Object.assign(Object.assign({},!a&&{entity_id:this.id}),i))}}class Gt{constructor(t,e){this.hass=t,this.card=e,this._playerId=e.player.id}async callMediaService(t,e){await this.hass.callService("media_player",t,Object.assign({entity_id:this._playerId},e))}async callYtubeService(t,e){await this.hass.callService("ytube_music_player",t,Object.assign({entity_id:this._playerId},e))}async browseMedia(t,e){return await this.hass.callWS({type:"media_player/browse_media",entity_id:this._playerId,media_content_type:t,media_content_id:e})}}class Kt{constructor(t,e,i,r){this.hass=t,this.player=e,this.card=i,this.extra=r,this.hassServices=new Gt(this.hass,i)}get playerId(){return this.player.id}}window.loadCardHelpers&&window.loadCardHelpers();const Dt="ytube_music_player";async function Yt(t){const e=await t.callWS({type:"config/entity_registry/list"});if(!e)return;const i=e.filter((t=>t.platform===Dt));if(!i)return;const r=i.find((t=>t.entity_id.startsWith("media_player.")));return r?r.entity_id:void 0}function zt(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var Ot,Ht={exports:{}};function jt(){return Ot||(Ot=1,t=Ht,Ht.exports,window,e=function(){return function(t){var e={};function i(r){if(e[r])return e[r].exports;var a=e[r]={i:r,l:!1,exports:{}};return t[r].call(a.exports,a,a.exports,i),a.l=!0,a.exports}return i.m=t,i.c=e,i.d=function(t,e,r){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},i.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(i.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)i.d(r,a,function(e){return t[e]}.bind(null,a));return r},i.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="",i(i.s=10)}([function(t,e,i){Object.defineProperty(e,"__esModule",{value:!0}),e.assignDeep=e.mapValues=void 0,e.mapValues=function(t,e){var i={};for(var r in t)if(t.hasOwnProperty(r)){var a=t[r];i[r]=e(a)}return i},e.assignDeep=function t(e){for(var i=[],r=1;r<arguments.length;r++)i[r-1]=arguments[r];return i.forEach((function(i){if(i)for(var r in i)if(i.hasOwnProperty(r)){var a=i[r];Array.isArray(a)?e[r]=a.slice(0):"object"==typeof a?(e[r]||(e[r]={}),t(e[r],a)):e[r]=a}})),e}},function(t,e,i){var r=this&&this.__importDefault||function(t){return t&&t.__esModule?t:{default:t}};Object.defineProperty(e,"__esModule",{value:!0});var a=i(7),o=r(i(8)),s=i(0),n=function(){function t(e,i){this._src=e,this.opts=s.assignDeep({},t.DefaultOpts,i)}return t.use=function(t){this._pipeline=t},t.from=function(t){return new o.default(t)},Object.defineProperty(t.prototype,"result",{get:function(){return this._result},enumerable:!1,configurable:!0}),t.prototype._process=function(e,i){this.opts.quantizer,e.scaleDown(this.opts);var r=a.buildProcessOptions(this.opts,i);return t._pipeline.process(e.getImageData(),r)},t.prototype.palette=function(){return this.swatches()},t.prototype.swatches=function(){throw new Error("Method deprecated. Use `Vibrant.result.palettes[name]` instead")},t.prototype.getPalette=function(){var t=this,e=arguments[0],i="string"==typeof e?e:"default",r="string"==typeof e?arguments[1]:e,a=new this.opts.ImageClass;return a.load(this._src).then((function(e){return t._process(e,{generators:[i]})})).then((function(e){return t._result=e,e.palettes[i]})).then((function(t){return a.remove(),r&&r(void 0,t),t})).catch((function(t){return a.remove(),r&&r(t),Promise.reject(t)}))},t.prototype.getPalettes=function(){var t=this,e=arguments[0],i=arguments[1],r=Array.isArray(e)?e:["*"],a=Array.isArray(e)?i:e,o=new this.opts.ImageClass;return o.load(this._src).then((function(e){return t._process(e,{generators:r})})).then((function(e){return t._result=e,e.palettes})).then((function(t){return o.remove(),a&&a(void 0,t),t})).catch((function(t){return o.remove(),a&&a(t),Promise.reject(t)}))},t.DefaultOpts={colorCount:64,quality:5,filters:[]},t}();e.default=n},function(t,e,i){Object.defineProperty(e,"__esModule",{value:!0}),e.applyFilters=e.ImageBase=void 0;var r=function(){function t(){}return t.prototype.scaleDown=function(t){var e=this.getWidth(),i=this.getHeight(),r=1;if(t.maxDimension>0){var a=Math.max(e,i);a>t.maxDimension&&(r=t.maxDimension/a)}else r=1/t.quality;r<1&&this.resize(e*r,i*r,r)},t}();e.ImageBase=r,e.applyFilters=function(t,e){if(e.length>0)for(var i=t.data,r=i.length/4,a=void 0,o=void 0,s=void 0,n=void 0,A=void 0,l=0;l<r;l++){o=i[0+(a=4*l)],s=i[a+1],n=i[a+2],A=i[a+3];for(var c=0;c<e.length;c++)if(!e[c](o,s,n,A)){i[a+3]=0;break}}return t}},function(t,e,i){Object.defineProperty(e,"__esModule",{value:!0}),e.Swatch=void 0;var r=i(4),a=function(){function t(t,e){this._rgb=t,this._population=e}return t.applyFilters=function(t,e){return e.length>0?t.filter((function(t){for(var i=t.r,r=t.g,a=t.b,o=0;o<e.length;o++)if(!e[o](i,r,a,255))return!1;return!0})):t},t.clone=function(e){return new t(e._rgb,e._population)},Object.defineProperty(t.prototype,"r",{get:function(){return this._rgb[0]},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"g",{get:function(){return this._rgb[1]},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"b",{get:function(){return this._rgb[2]},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"rgb",{get:function(){return this._rgb},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"hsl",{get:function(){if(!this._hsl){var t=this._rgb,e=t[0],i=t[1],a=t[2];this._hsl=r.rgbToHsl(e,i,a)}return this._hsl},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"hex",{get:function(){if(!this._hex){var t=this._rgb,e=t[0],i=t[1],a=t[2];this._hex=r.rgbToHex(e,i,a)}return this._hex},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"population",{get:function(){return this._population},enumerable:!1,configurable:!0}),t.prototype.toJSON=function(){return{rgb:this.rgb,population:this.population}},t.prototype.getRgb=function(){return this._rgb},t.prototype.getHsl=function(){return this.hsl},t.prototype.getPopulation=function(){return this._population},t.prototype.getHex=function(){return this.hex},t.prototype.getYiq=function(){if(!this._yiq){var t=this._rgb;this._yiq=(299*t[0]+587*t[1]+114*t[2])/1e3}return this._yiq},Object.defineProperty(t.prototype,"titleTextColor",{get:function(){return this._titleTextColor&&(this._titleTextColor=this.getYiq()<200?"#fff":"#000"),this._titleTextColor},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"bodyTextColor",{get:function(){return this._bodyTextColor&&(this._bodyTextColor=this.getYiq()<150?"#fff":"#000"),this._bodyTextColor},enumerable:!1,configurable:!0}),t.prototype.getTitleTextColor=function(){return this.titleTextColor},t.prototype.getBodyTextColor=function(){return this.bodyTextColor},t}();e.Swatch=a},function(t,e,i){function r(t){var e=/^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(t);if(!e)throw new RangeError("'"+t+"' is not a valid hex color");return[e[1],e[2],e[3]].map((function(t){return parseInt(t,16)}))}function a(t,e,i){return e/=255,i/=255,t=(t/=255)>.04045?Math.pow((t+.005)/1.055,2.4):t/12.92,e=e>.04045?Math.pow((e+.005)/1.055,2.4):e/12.92,i=i>.04045?Math.pow((i+.005)/1.055,2.4):i/12.92,[.4124*(t*=100)+.3576*(e*=100)+.1805*(i*=100),.2126*t+.7152*e+.0722*i,.0193*t+.1192*e+.9505*i]}function o(t,e,i){return e/=100,i/=108.883,t=(t/=95.047)>.008856?Math.pow(t,1/3):7.787*t+16/116,[116*(e=e>.008856?Math.pow(e,1/3):7.787*e+16/116)-16,500*(t-e),200*(e-(i=i>.008856?Math.pow(i,1/3):7.787*i+16/116))]}function s(t,e,i){var r=a(t,e,i);return o(r[0],r[1],r[2])}function n(t,e){var i=t[0],r=t[1],a=t[2],o=e[0],s=e[1],n=e[2],A=i-o,l=r-s,c=a-n,h=Math.sqrt(r*r+a*a),d=o-i,p=Math.sqrt(s*s+n*n)-h,u=Math.sqrt(A*A+l*l+c*c),g=Math.sqrt(u)>Math.sqrt(Math.abs(d))+Math.sqrt(Math.abs(p))?Math.sqrt(u*u-d*d-p*p):0;return d/=1,p/=1*(1+.045*h),g/=1*(1+.015*h),Math.sqrt(d*d+p*p+g*g)}function A(t,e){return n(s.apply(void 0,t),s.apply(void 0,e))}Object.defineProperty(e,"__esModule",{value:!0}),e.getColorDiffStatus=e.hexDiff=e.rgbDiff=e.deltaE94=e.rgbToCIELab=e.xyzToCIELab=e.rgbToXyz=e.hslToRgb=e.rgbToHsl=e.rgbToHex=e.hexToRgb=e.DELTAE94_DIFF_STATUS=void 0,e.DELTAE94_DIFF_STATUS={NA:0,PERFECT:1,CLOSE:2,GOOD:10,SIMILAR:50},e.hexToRgb=r,e.rgbToHex=function(t,e,i){return"#"+((1<<24)+(t<<16)+(e<<8)+i).toString(16).slice(1,7)},e.rgbToHsl=function(t,e,i){t/=255,e/=255,i/=255;var r=Math.max(t,e,i),a=Math.min(t,e,i),o=0,s=0,n=(r+a)/2;if(r!==a){var A=r-a;switch(s=n>.5?A/(2-r-a):A/(r+a),r){case t:o=(e-i)/A+(e<i?6:0);break;case e:o=(i-t)/A+2;break;case i:o=(t-e)/A+4}o/=6}return[o,s,n]},e.hslToRgb=function(t,e,i){var r,a,o;function s(t,e,i){return i<0&&(i+=1),i>1&&(i-=1),i<1/6?t+6*(e-t)*i:i<.5?e:i<2/3?t+(e-t)*(2/3-i)*6:t}if(0===e)r=a=o=i;else{var n=i<.5?i*(1+e):i+e-i*e,A=2*i-n;r=s(A,n,t+1/3),a=s(A,n,t),o=s(A,n,t-1/3)}return[255*r,255*a,255*o]},e.rgbToXyz=a,e.xyzToCIELab=o,e.rgbToCIELab=s,e.deltaE94=n,e.rgbDiff=A,e.hexDiff=function(t,e){return A(r(t),r(e))},e.getColorDiffStatus=function(t){return t<e.DELTAE94_DIFF_STATUS.NA?"N/A":t<=e.DELTAE94_DIFF_STATUS.PERFECT?"Perfect":t<=e.DELTAE94_DIFF_STATUS.CLOSE?"Close":t<=e.DELTAE94_DIFF_STATUS.GOOD?"Good":t<e.DELTAE94_DIFF_STATUS.SIMILAR?"Similar":"Wrong"}},function(t,e,i){var r=this&&this.__importDefault||function(t){return t&&t.__esModule?t:{default:t}},a=r(i(6)),o=r(i(9));a.default.DefaultOpts.ImageClass=o.default,t.exports=a.default},function(t,e,i){var r=this&&this.__importDefault||function(t){return t&&t.__esModule?t:{default:t}};Object.defineProperty(e,"__esModule",{value:!0});var a=r(i(1));a.default.DefaultOpts.quantizer="mmcq",a.default.DefaultOpts.generators=["default"],a.default.DefaultOpts.filters=["default"],e.default=a.default},function(t,e,i){Object.defineProperty(e,"__esModule",{value:!0}),e.buildProcessOptions=void 0;var r=i(0);e.buildProcessOptions=function(t,e){var i=t.colorCount,a=t.quantizer,o=t.generators,s=t.filters,n={colorCount:i},A="string"==typeof a?{name:a,options:{}}:a;return A.options=r.assignDeep({},n,A.options),r.assignDeep({},{quantizer:A,generators:o,filters:s},e)}},function(t,e,i){var r=this&&this.__importDefault||function(t){return t&&t.__esModule?t:{default:t}};Object.defineProperty(e,"__esModule",{value:!0});var a=r(i(1)),o=i(0),s=function(){function t(t,e){void 0===e&&(e={}),this._src=t,this._opts=o.assignDeep({},a.default.DefaultOpts,e)}return t.prototype.maxColorCount=function(t){return this._opts.colorCount=t,this},t.prototype.maxDimension=function(t){return this._opts.maxDimension=t,this},t.prototype.addFilter=function(t){return this._opts.filters?this._opts.filters.push(t):this._opts.filters=[t],this},t.prototype.removeFilter=function(t){if(this._opts.filters){var e=this._opts.filters.indexOf(t);e>0&&this._opts.filters.splice(e)}return this},t.prototype.clearFilters=function(){return this._opts.filters=[],this},t.prototype.quality=function(t){return this._opts.quality=t,this},t.prototype.useImageClass=function(t){return this._opts.ImageClass=t,this},t.prototype.useGenerator=function(t,e){return this._opts.generators||(this._opts.generators=[]),this._opts.generators.push(e?{name:t,options:e}:t),this},t.prototype.useQuantizer=function(t,e){return this._opts.quantizer=e?{name:t,options:e}:t,this},t.prototype.build=function(){return new a.default(this._src,this._opts)},t.prototype.getPalette=function(t){return this.build().getPalette(t)},t.prototype.getSwatches=function(t){return this.build().getPalette(t)},t}();e.default=s},function(t,e,i){var r,a=this&&this.__extends||(r=function(t,e){return r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var i in e)e.hasOwnProperty(i)&&(t[i]=e[i])},r(t,e)},function(t,e){function i(){this.constructor=t}r(t,e),t.prototype=null===e?Object.create(e):(i.prototype=e.prototype,new i)});Object.defineProperty(e,"__esModule",{value:!0});var o=function(t){function e(){return null!==t&&t.apply(this,arguments)||this}return a(e,t),e.prototype._initCanvas=function(){var t=this.image,e=this._canvas=document.createElement("canvas"),i=e.getContext("2d");if(!i)throw new ReferenceError("Failed to create canvas context");this._context=i,e.className="@vibrant/canvas",e.style.display="none",this._width=e.width=t.width,this._height=e.height=t.height,i.drawImage(t,0,0),document.body.appendChild(e)},e.prototype.load=function(t){var e,i,r=this;if("string"==typeof t)e=document.createElement("img"),function(t){var e=new URL(t,location.href);return e.protocol===location.protocol&&e.host===location.host&&e.port===location.port}(i=t)||function(t,e){var i=new URL(t),r=new URL(e);return i.protocol===r.protocol&&i.hostname===r.hostname&&i.port===r.port}(window.location.href,i)||(e.crossOrigin="anonymous"),e.src=i;else{if(!(t instanceof HTMLImageElement))return Promise.reject(new Error("Cannot load buffer as an image in browser"));e=t,i=t.src}return this.image=e,new Promise((function(t,a){var o=function(){r._initCanvas(),t(r)};e.complete?o():(e.onload=o,e.onerror=function(t){return a(new Error("Fail to load image: "+i))})}))},e.prototype.clear=function(){this._context.clearRect(0,0,this._width,this._height)},e.prototype.update=function(t){this._context.putImageData(t,0,0)},e.prototype.getWidth=function(){return this._width},e.prototype.getHeight=function(){return this._height},e.prototype.resize=function(t,e,i){var r=this,a=r._canvas,o=r._context,s=r.image;this._width=a.width=t,this._height=a.height=e,o.scale(i,i),o.drawImage(s,0,0)},e.prototype.getPixelCount=function(){return this._width*this._height},e.prototype.getImageData=function(){return this._context.getImageData(0,0,this._width,this._height)},e.prototype.remove=function(){this._canvas&&this._canvas.parentNode&&this._canvas.parentNode.removeChild(this._canvas)},e}(i(2).ImageBase);e.default=o},function(t,e,i){var r=this&&this.__importDefault||function(t){return t&&t.__esModule?t:{default:t}},a=i(5),o=r(i(11));a.use(o.default),t.exports=a},function(t,e,i){var r=this&&this.__importDefault||function(t){return t&&t.__esModule?t:{default:t}};Object.defineProperty(e,"__esModule",{value:!0});var a=r(i(12)),o=r(i(16)),s=(new(i(17).BasicPipeline)).filter.register("default",(function(t,e,i,r){return r>=125&&!(t>250&&e>250&&i>250)})).quantizer.register("mmcq",a.default).generator.register("default",o.default);e.default=s},function(t,e,i){var r=this&&this.__importDefault||function(t){return t&&t.__esModule?t:{default:t}};Object.defineProperty(e,"__esModule",{value:!0});var a=i(3),o=r(i(13)),s=r(i(15));function n(t,e){for(var i=t.size();t.size()<e;){var r=t.pop();if(!(r&&r.count()>0))break;var a=r.split(),o=a[0],s=a[1];if(t.push(o),s&&s.count()>0&&t.push(s),t.size()===i)break;i=t.size()}}e.default=function(t,e){if(0===t.length||e.colorCount<2||e.colorCount>256)throw new Error("Wrong MMCQ parameters");var i=o.default.build(t);i.histogram.colorCount;var r=new s.default((function(t,e){return t.count()-e.count()}));r.push(i),n(r,.75*e.colorCount);var A=new s.default((function(t,e){return t.count()*t.volume()-e.count()*e.volume()}));return A.contents=r.contents,n(A,e.colorCount-A.size()),function(t){for(var e=[];t.size();){var i=t.pop(),r=i.avg();r[0],r[1],r[2],e.push(new a.Swatch(r,i.count()))}return e}(A)}},function(t,e,i){var r=this&&this.__importDefault||function(t){return t&&t.__esModule?t:{default:t}};Object.defineProperty(e,"__esModule",{value:!0});var a=r(i(14)),o=function(){function t(t,e,i,r,a,o,s){this.histogram=s,this._volume=-1,this._count=-1,this.dimension={r1:t,r2:e,g1:i,g2:r,b1:a,b2:o}}return t.build=function(e){var i=new a.default(e,{sigBits:5});return new t(i.rmin,i.rmax,i.gmin,i.gmax,i.bmin,i.bmax,i)},t.prototype.invalidate=function(){this._volume=this._count=-1,this._avg=null},t.prototype.volume=function(){if(this._volume<0){var t=this.dimension,e=t.r1,i=t.r2,r=t.g1,a=t.g2,o=t.b1,s=t.b2;this._volume=(i-e+1)*(a-r+1)*(s-o+1)}return this._volume},t.prototype.count=function(){if(this._count<0){for(var t=this.histogram,e=t.hist,i=t.getColorIndex,r=this.dimension,a=r.r1,o=r.r2,s=r.g1,n=r.g2,A=r.b1,l=r.b2,c=0,h=a;h<=o;h++)for(var d=s;d<=n;d++)for(var p=A;p<=l;p++)c+=e[i(h,d,p)];this._count=c}return this._count},t.prototype.clone=function(){var e=this.histogram,i=this.dimension;return new t(i.r1,i.r2,i.g1,i.g2,i.b1,i.b2,e)},t.prototype.avg=function(){if(!this._avg){var t=this.histogram,e=t.hist,i=t.getColorIndex,r=this.dimension,a=r.r1,o=r.r2,s=r.g1,n=r.g2,A=r.b1,l=r.b2,c=0,h=void 0,d=void 0,p=void 0;h=d=p=0;for(var u=a;u<=o;u++)for(var g=s;g<=n;g++)for(var b=A;b<=l;b++){var m=e[i(u,g,b)];c+=m,h+=m*(u+.5)*8,d+=m*(g+.5)*8,p+=m*(b+.5)*8}this._avg=c?[~~(h/c),~~(d/c),~~(p/c)]:[~~(8*(a+o+1)/2),~~(8*(s+n+1)/2),~~(8*(A+l+1)/2)]}return this._avg},t.prototype.contains=function(t){var e=t[0],i=t[1],r=t[2],a=this.dimension,o=a.r1,s=a.r2,n=a.g1,A=a.g2,l=a.b1,c=a.b2;return i>>=3,r>>=3,(e>>=3)>=o&&e<=s&&i>=n&&i<=A&&r>=l&&r<=c},t.prototype.split=function(){var t=this.histogram,e=t.hist,i=t.getColorIndex,r=this.dimension,a=r.r1,o=r.r2,s=r.g1,n=r.g2,A=r.b1,l=r.b2,c=this.count();if(!c)return[];if(1===c)return[this.clone()];var h,d,p=o-a+1,u=n-s+1,g=l-A+1,b=Math.max(p,u,g),m=null;h=d=0;var y=null;if(b===p){y="r",m=new Uint32Array(o+1);for(var k=a;k<=o;k++){h=0;for(var S=s;S<=n;S++)for(var f=A;f<=l;f++)h+=e[i(k,S,f)];d+=h,m[k]=d}}else if(b===u)for(y="g",m=new Uint32Array(n+1),S=s;S<=n;S++){for(h=0,k=a;k<=o;k++)for(f=A;f<=l;f++)h+=e[i(k,S,f)];d+=h,m[S]=d}else for(y="b",m=new Uint32Array(l+1),f=A;f<=l;f++){for(h=0,k=a;k<=o;k++)for(S=s;S<=n;S++)h+=e[i(k,S,f)];d+=h,m[f]=d}for(var E=-1,v=new Uint32Array(m.length),J=0;J<m.length;J++){var C=m[J];E<0&&C>d/2&&(E=J),v[J]=d-C}var Q=this;return function(t){var e=t+"1",i=t+"2",r=Q.dimension[e],a=Q.dimension[i],o=Q.clone(),s=Q.clone(),n=E-r,A=a-E;for(n<=A?(a=Math.min(a-1,~~(E+A/2)),a=Math.max(0,a)):(a=Math.max(r,~~(E-1-n/2)),a=Math.min(Q.dimension[i],a));!m[a];)a++;for(var l=v[a];!l&&m[a-1];)l=v[--a];return o.dimension[i]=a,s.dimension[e]=a+1,[o,s]}(y)},t}();e.default=o},function(t,e,i){Object.defineProperty(e,"__esModule",{value:!0});var r=function(){function t(t,e){this.pixels=t,this.opts=e;var i=e.sigBits,r=function(t,e,r){return(t<<2*i)+(e<<i)+r};this.getColorIndex=r;var a,o,s,n,A,l,c,h,d,p=8-i,u=new Uint32Array(1<<3*i);a=s=A=0,o=n=l=Number.MAX_VALUE;for(var g=t.length/4,b=0;b<g;){var m=4*b;b++,c=t[m+0],h=t[m+1],d=t[m+2],0!==t[m+3]&&(u[r(c>>=p,h>>=p,d>>=p)]+=1,c>a&&(a=c),c<o&&(o=c),h>s&&(s=h),h<n&&(n=h),d>A&&(A=d),d<l&&(l=d))}this._colorCount=u.reduce((function(t,e){return e>0?t+1:t}),0),this.hist=u,this.rmax=a,this.rmin=o,this.gmax=s,this.gmin=n,this.bmax=A,this.bmin=l}return Object.defineProperty(t.prototype,"colorCount",{get:function(){return this._colorCount},enumerable:!1,configurable:!0}),t}();e.default=r},function(t,e,i){Object.defineProperty(e,"__esModule",{value:!0});var r=function(){function t(t){this._comparator=t,this.contents=[],this._sorted=!1}return t.prototype._sort=function(){this._sorted||(this.contents.sort(this._comparator),this._sorted=!0)},t.prototype.push=function(t){this.contents.push(t),this._sorted=!1},t.prototype.peek=function(t){return this._sort(),t="number"==typeof t?t:this.contents.length-1,this.contents[t]},t.prototype.pop=function(){return this._sort(),this.contents.pop()},t.prototype.size=function(){return this.contents.length},t.prototype.map=function(t){return this._sort(),this.contents.map(t)},t}();e.default=r},function(t,e,i){Object.defineProperty(e,"__esModule",{value:!0});var r=i(3),a=i(4),o={targetDarkLuma:.26,maxDarkLuma:.45,minLightLuma:.55,targetLightLuma:.74,minNormalLuma:.3,targetNormalLuma:.5,maxNormalLuma:.7,targetMutesSaturation:.3,maxMutesSaturation:.4,targetVibrantSaturation:1,minVibrantSaturation:.35,weightSaturation:3,weightLuma:6.5,weightPopulation:.5};function s(t,e,i,r,a,o,s,n,A,l){var c=null,h=0;return e.forEach((function(e){var d=e.hsl,p=d[1],u=d[2];if(p>=n&&p<=A&&u>=a&&u<=o&&!function(t,e){return t.Vibrant===e||t.DarkVibrant===e||t.LightVibrant===e||t.Muted===e||t.DarkMuted===e||t.LightMuted===e}(t,e)){var g=function(t,e,i,r,a,o,s){function n(t,e){return 1-Math.abs(t-e)}return function(){for(var t=[],e=0;e<arguments.length;e++)t[e]=arguments[e];for(var i=0,r=0,a=0;a<t.length;a+=2){var o=t[a],s=t[a+1];i+=o*s,r+=s}return i/r}(n(t,e),s.weightSaturation,n(i,r),s.weightLuma,a/o,s.weightPopulation)}(p,s,u,r,e.population,i,l);(null===c||g>h)&&(c=e,h=g)}})),c}e.default=function(t,e){e=Object.assign({},o,e);var i=function(t){var e=0;return t.forEach((function(t){e=Math.max(e,t.population)})),e}(t),n=function(t,e,i){var r={Vibrant:null,DarkVibrant:null,LightVibrant:null,Muted:null,DarkMuted:null,LightMuted:null};return r.Vibrant=s(r,t,e,i.targetNormalLuma,i.minNormalLuma,i.maxNormalLuma,i.targetVibrantSaturation,i.minVibrantSaturation,1,i),r.LightVibrant=s(r,t,e,i.targetLightLuma,i.minLightLuma,1,i.targetVibrantSaturation,i.minVibrantSaturation,1,i),r.DarkVibrant=s(r,t,e,i.targetDarkLuma,0,i.maxDarkLuma,i.targetVibrantSaturation,i.minVibrantSaturation,1,i),r.Muted=s(r,t,e,i.targetNormalLuma,i.minNormalLuma,i.maxNormalLuma,i.targetMutesSaturation,0,i.maxMutesSaturation,i),r.LightMuted=s(r,t,e,i.targetLightLuma,i.minLightLuma,1,i.targetMutesSaturation,0,i.maxMutesSaturation,i),r.DarkMuted=s(r,t,e,i.targetDarkLuma,0,i.maxDarkLuma,i.targetMutesSaturation,0,i.maxMutesSaturation,i),r}(t,i,e);return function(t,e,i){if(!t.Vibrant&&!t.DarkVibrant&&!t.LightVibrant){if(!t.DarkVibrant&&t.DarkMuted){var o=t.DarkMuted.hsl,s=o[0],n=o[1],A=o[2];A=i.targetDarkLuma,t.DarkVibrant=new r.Swatch(a.hslToRgb(s,n,A),0)}if(!t.LightVibrant&&t.LightMuted){var l=t.LightMuted.hsl;s=l[0],n=l[1],A=l[2],A=i.targetDarkLuma,t.DarkVibrant=new r.Swatch(a.hslToRgb(s,n,A),0)}}if(!t.Vibrant&&t.DarkVibrant){var c=t.DarkVibrant.hsl;s=c[0],n=c[1],A=c[2],A=i.targetNormalLuma,t.Vibrant=new r.Swatch(a.hslToRgb(s,n,A),0)}else if(!t.Vibrant&&t.LightVibrant){var h=t.LightVibrant.hsl;s=h[0],n=h[1],A=h[2],A=i.targetNormalLuma,t.Vibrant=new r.Swatch(a.hslToRgb(s,n,A),0)}if(!t.DarkVibrant&&t.Vibrant){var d=t.Vibrant.hsl;s=d[0],n=d[1],A=d[2],A=i.targetDarkLuma,t.DarkVibrant=new r.Swatch(a.hslToRgb(s,n,A),0)}if(!t.LightVibrant&&t.Vibrant){var p=t.Vibrant.hsl;s=p[0],n=p[1],A=p[2],A=i.targetLightLuma,t.LightVibrant=new r.Swatch(a.hslToRgb(s,n,A),0)}if(!t.Muted&&t.Vibrant){var u=t.Vibrant.hsl;s=u[0],n=u[1],A=u[2],A=i.targetMutesSaturation,t.Muted=new r.Swatch(a.hslToRgb(s,n,A),0)}if(!t.DarkMuted&&t.DarkVibrant){var g=t.DarkVibrant.hsl;s=g[0],n=g[1],A=g[2],A=i.targetMutesSaturation,t.DarkMuted=new r.Swatch(a.hslToRgb(s,n,A),0)}if(!t.LightMuted&&t.LightVibrant){var b=t.LightVibrant.hsl;s=b[0],n=b[1],A=b[2],A=i.targetMutesSaturation,t.LightMuted=new r.Swatch(a.hslToRgb(s,n,A),0)}}(n,0,e),n}},function(t,e,i){var r=this&&this.__awaiter||function(t,e,i,r){return new(i||(i=Promise))((function(a,o){function s(t){try{A(r.next(t))}catch(t){o(t)}}function n(t){try{A(r.throw(t))}catch(t){o(t)}}function A(t){var e;t.done?a(t.value):(e=t.value,e instanceof i?e:new i((function(t){t(e)}))).then(s,n)}A((r=r.apply(t,e||[])).next())}))},a=this&&this.__generator||function(t,e){var i,r,a,o,s={label:0,sent:function(){if(1&a[0])throw a[1];return a[1]},trys:[],ops:[]};return o={next:n(0),throw:n(1),return:n(2)},"function"==typeof Symbol&&(o[Symbol.iterator]=function(){return this}),o;function n(o){return function(n){return function(o){if(i)throw new TypeError("Generator is already executing.");for(;s;)try{if(i=1,r&&(a=2&o[0]?r.return:o[0]?r.throw||((a=r.return)&&a.call(r),0):r.next)&&!(a=a.call(r,o[1])).done)return a;switch(r=0,a&&(o=[2&o[0],a.value]),o[0]){case 0:case 1:a=o;break;case 4:return s.label++,{value:o[1],done:!1};case 5:s.label++,r=o[1],o=[0];continue;case 7:o=s.ops.pop(),s.trys.pop();continue;default:if(!((a=(a=s.trys).length>0&&a[a.length-1])||6!==o[0]&&2!==o[0])){s=0;continue}if(3===o[0]&&(!a||o[1]>a[0]&&o[1]<a[3])){s.label=o[1];break}if(6===o[0]&&s.label<a[1]){s.label=a[1],a=o;break}if(a&&s.label<a[2]){s.label=a[2],s.ops.push(o);break}a[2]&&s.ops.pop(),s.trys.pop();continue}o=e.call(t,s)}catch(t){o=[6,t],r=0}finally{i=a=0}if(5&o[0])throw o[1];return{value:o[0]?o[1]:void 0,done:!0}}([o,n])}}};Object.defineProperty(e,"__esModule",{value:!0}),e.BasicPipeline=e.Stage=void 0;var o=i(2),s=function(){function t(t){this.pipeline=t,this._map={}}return t.prototype.names=function(){return Object.keys(this._map)},t.prototype.has=function(t){return!!this._map[t]},t.prototype.get=function(t){return this._map[t]},t.prototype.register=function(t,e){return this._map[t]=e,this.pipeline},t}();e.Stage=s;var n=function(){function t(){this.filter=new s(this),this.quantizer=new s(this),this.generator=new s(this)}return t.prototype._buildProcessTasks=function(t){var e=this,i=t.filters,r=t.quantizer,a=t.generators;return 1===a.length&&"*"===a[0]&&(a=this.generator.names()),{filters:i.map((function(t){return o(e.filter,t)})),quantizer:o(this.quantizer,r),generators:a.map((function(t){return o(e.generator,t)}))};function o(t,e){var i,r;return"string"==typeof e?i=e:(i=e.name,r=e.options),{name:i,fn:t.get(i),options:r}}},t.prototype.process=function(t,e){return r(this,void 0,void 0,(function(){var i,r,o,s,n,A,l;return a(this,(function(a){switch(a.label){case 0:return i=this._buildProcessTasks(e),r=i.filters,o=i.quantizer,s=i.generators,[4,this._filterColors(r,t)];case 1:return n=a.sent(),[4,this._generateColors(o,n)];case 2:return A=a.sent(),[4,this._generatePalettes(s,A)];case 3:return l=a.sent(),[2,{colors:A,palettes:l}]}}))}))},t.prototype._filterColors=function(t,e){return Promise.resolve(o.applyFilters(e,t.map((function(t){return t.fn}))))},t.prototype._generateColors=function(t,e){return Promise.resolve(t.fn(e.data,t.options))},t.prototype._generatePalettes=function(t,e){return r(this,void 0,void 0,(function(){var i;return a(this,(function(r){switch(r.label){case 0:return[4,Promise.all(t.map((function(t){var i=t.fn,r=t.options;return Promise.resolve(i(e,r))})))];case 1:return i=r.sent(),[2,Promise.resolve(i.reduce((function(e,i,r){return e[t[r].name]=i,e}),{}))]}}))}))},t}();e.BasicPipeline=n}])},t.exports=e()),Ht.exports;var t,e}Ht.exports;var Vt=jt(),Zt=zt(Vt);const Wt=4.5,qt=150,Ft=(t,e,i)=>{const r=[t,e,i].map((t=>{let e=t;return e/=255,e<=.03928?e/12.92:((e+.055)/1.055)**2.4}));return.2126*r[0]+.7152*r[1]+.0722*r[2]},Pt=(t,e)=>{const i=Ft(...t),r=Ft(...e);return(Math.max(i,r)+.05)/(Math.min(i,r)+.05)},Xt=(t,e)=>Math.round(100*(Pt(t,e)+Number.EPSILON))/100,_t=t=>{t.sort(((t,e)=>e.population-t.population));const e=t[0];let i;const r=new Map,a=(t,i)=>(r.has(t)||r.set(t,Xt(e.rgb,i)),r.get(t)>Wt);for(let e=1;e<t.length&&void 0===i;e++){if(a(t[e].hex,t[e].rgb)){i=t[e].rgb;break}const r=t[e];for(let o=e+1;o<t.length;o++){const e=t[o];if(!(Math.abs(r.rgb[0]-e.rgb[0])+Math.abs(r.rgb[1]-e.rgb[1])+Math.abs(r.rgb[2]-e.rgb[2])>qt)&&a(e.hex,e.rgb)){i=e.rgb;break}}}return void 0===i&&(i=e.getYiq()<200?[255,255,255]:[0,0,0]),[new e.constructor(i,0).hex,e.hex]};Zt._pipeline.generator.register("default",_t);var $t=async t=>new Zt(t,{colorCount:16}).getPalette();const te=()=>{var t,e,i,r;customElements.get("ha-form")||null===(t=customElements.get("hui-button-card"))||void 0===t||t.getConfigElement(),customElements.get("ha-entity-picker")||null===(e=customElements.get("hui-entities-card"))||void 0===e||e.getConfigElement(),customElements.get("ha-card-conditions-editor")||null===(i=customElements.get("hui-conditional-card"))||void 0===i||i.getConfigElement(),customElements.get("ha-form-multi_select")||null===(r=customElements.get("hui-entities-card"))||void 0===r||r.getConfigElement()};class ee extends ct{setConfig(t){this.config=t}connectedCallback(){super.connectedCallback()}get _name(){var t;return(null===(t=this.config)||void 0===t?void 0:t.name)||""}get _entity(){var t;return(null===(t=this.config)||void 0===t?void 0:t.entity)||""}get _show_warning(){var t;return(null===(t=this.config)||void 0===t?void 0:t.show_warning)||!1}get _show_error(){var t;return(null===(t=this.config)||void 0===t?void 0:t.show_error)||!1}render(){var t;if(!this.hass)return Z``;const e=Object.keys(this.hass.states);return Z`
      <div class="card-config">
        <ha-textfield
          .label=${"Name (optional)"}
          .configValue=${"name"}
          .value=${(null===(t=this.config)||void 0===t?void 0:t.name)||""}
          @value-changed=${this._valueChanged}
        ></ha-textfield>
        <ha-select
          naturalMenuWidth
          fixedMenuPosition
          label="Entity (optional)"
          .configValue=${"entity"}
          .value=${this._entity}
          @selected=${this._valueChanged}
          @closed=${t=>t.stopPropagation()}
        >
          <mwc-list-item value=""></mwc-list-item>
          ${e.map((t=>Z`<mwc-list-item .value=${t}>${t}</mwc-list-item>`))}
        </ha-select>
        ${this.renderSwitches()}
      </div>
      <div class="version">Version: ${It}</div>
    `}renderSwitches(){return Z`
      <div class="switches">
        <ha-formfield .label=${"Show error"}>
          <ha-switch
            .checked=${!1!==this._show_error}
            .configValue=${"show_error"}
            @change=${this._valueChanged}
          ></ha-switch>
        </ha-formfield>
        <ha-formfield .label=${"Show warning"}>
          <ha-switch
            .checked=${!1!==this._show_warning}
            .configValue=${"show_warning"}
            @change=${this._valueChanged}
          ></ha-switch>
        </ha-formfield>
      </div>
    `}panelTemplate(t,e,i,r){return Z`
      <div class="panel-container">
        <ha-expansion-panel .expanded=${!1} .outlined=${!0} .header=${t} .secondary=${e} leftChevron>
          <div class="right-icon" slot="icons">
            <ha-icon icon=${i}></ha-icon>
          </div>
          <div class="card-config">${r}</div>
        </ha-expansion-panel>
      </div>
    `}_valueChanged(t){if(!this.config||!this.hass)return;const e=t.target;if(this[`_${e.configValue}`]!==e.value){if(e.configValue)if(""===e.value){const t=Object.assign({},this.config);delete t[e.configValue],this.config=t}else this.config=Object.assign(Object.assign({},this.config),{[e.configValue]:void 0!==e.checked?e.checked:e.value});wt(this,"config-changed",{config:this.config})}}}ee.styles=n`
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
  `,t([gt({attribute:!1})],ee.prototype,"hass",void 0),t([gt({attribute:!1})],ee.prototype,"config",void 0);var ie="M20,11V13H8L13.5,18.5L12.08,19.92L4.16,12L12.08,4.08L13.5,5.5L8,11H20Z",re="M7.41,15.41L12,10.83L16.59,15.41L18,14L12,8L6,14L7.41,15.41Z",ae="M19,6.41L17.59,5L12,10.59L6.41,5L5,6.41L10.59,12L5,17.59L6.41,19L12,13.41L17.59,19L19,17.59L13.41,12L19,6.41Z",oe="M12,16A2,2 0 0,1 14,18A2,2 0 0,1 12,20A2,2 0 0,1 10,18A2,2 0 0,1 12,16M12,10A2,2 0 0,1 14,12A2,2 0 0,1 12,14A2,2 0 0,1 10,12A2,2 0 0,1 12,10M12,4A2,2 0 0,1 14,6A2,2 0 0,1 12,8A2,2 0 0,1 10,6A2,2 0 0,1 12,4Z",se="M14,19H18V5H14M6,19H10V5H6V19Z",ne="M8,5.14V19.14L19,12.14L8,5.14Z",Ae="M10,16.5V7.5L16,12M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2Z",le="M17,17H7V14L3,18L7,22V19H19V13H17M7,7H17V10L21,6L17,2V5H5V11H7V7Z",ce="M2,5.27L3.28,4L20,20.72L18.73,22L15.73,19H7V22L3,18L7,14V17H13.73L7,10.27V11H5V8.27L2,5.27M17,13H19V17.18L17,15.18V13M17,5V2L21,6L17,10V7H8.82L6.82,5H17Z",he="M13,15V9H12L10,10V11H11.5V15M17,17H7V14L3,18L7,22V19H19V13H17M7,7H17V10L21,6L17,2V5H5V11H7V7Z",de="M16,4.5V7H5V9H16V11.5L19.5,8M16,12.5V15H5V17H16V19.5L19.5,16",pe="M17,3L22.25,7.5L17,12L22.25,16.5L17,21V18H14.26L11.44,15.18L13.56,13.06L15.5,15H17V12L17,9H15.5L6.5,18H2V15H5.26L14.26,6H17V3M2,6H6.5L9.32,8.82L7.2,10.94L5.26,9H2V6Z",ue="M16,18H18V6H16M6,18L14.5,12L6,6V18Z",ge="M6,18V6H8V18H6M9.5,12L18,6V18L9.5,12Z",be="M19,15H23V3H19M15,3H6C5.17,3 4.46,3.5 4.16,4.22L1.14,11.27C1.05,11.5 1,11.74 1,12V14A2,2 0 0,0 3,16H9.31L8.36,20.57C8.34,20.67 8.33,20.77 8.33,20.88C8.33,21.3 8.5,21.67 8.77,21.94L9.83,23L16.41,16.41C16.78,16.05 17,15.55 17,15V5C17,3.89 16.1,3 15,3Z",me="M19,15V3H23V15H19M15,3A2,2 0 0,1 17,5V15C17,15.55 16.78,16.05 16.41,16.41L9.83,23L8.77,21.94C8.5,21.67 8.33,21.3 8.33,20.88L8.36,20.57L9.31,16H3C1.89,16 1,15.1 1,14V12C1,11.74 1.05,11.5 1.14,11.27L4.16,4.22C4.46,3.5 5.17,3 6,3H15M15,5H5.97L3,12V14H11.78L10.65,19.32L15,14.97V5Z",ye="M23,10C23,8.89 22.1,8 21,8H14.68L15.64,3.43C15.66,3.33 15.67,3.22 15.67,3.11C15.67,2.7 15.5,2.32 15.23,2.05L14.17,1L7.59,7.58C7.22,7.95 7,8.45 7,9V19A2,2 0 0,0 9,21H18C18.83,21 19.54,20.5 19.84,19.78L22.86,12.73C22.95,12.5 23,12.26 23,12V10M1,21H5V9H1V21Z",ke="M5,9V21H1V9H5M9,21A2,2 0 0,1 7,19V9C7,8.45 7.22,7.95 7.59,7.59L14.17,1L15.23,2.06C15.5,2.33 15.67,2.7 15.67,3.11L15.64,3.43L14.69,8H21C22.11,8 23,8.9 23,10V12C23,12.26 22.95,12.5 22.86,12.73L19.84,19.78C19.54,20.5 18.83,21 18,21H9M9,19H18.03L21,12V10H12.21L13.34,4.68L9,9.03V19Z",Se="M14,3.23V5.29C16.89,6.15 19,8.83 19,12C19,15.17 16.89,17.84 14,18.7V20.77C18,19.86 21,16.28 21,12C21,7.72 18,4.14 14,3.23M16.5,12C16.5,10.23 15.5,8.71 14,7.97V16C15.5,15.29 16.5,13.76 16.5,12M3,9V15H7L12,20V4L7,9H3Z",fe="M3,9H7L12,4V20L7,15H3V9M14,11H22V13H14V11Z",Ee="M12,4L9.91,6.09L12,8.18M4.27,3L3,4.27L7.73,9H3V15H7L12,20V13.27L16.25,17.53C15.58,18.04 14.83,18.46 14,18.7V20.77C15.38,20.45 16.63,19.82 17.68,18.96L19.73,21L21,19.73L12,10.73M19,12C19,12.94 18.8,13.82 18.46,14.64L19.97,16.15C20.62,14.91 21,13.5 21,12C21,7.72 18,4.14 14,3.23V5.29C16.89,6.15 19,8.83 19,12M16.5,12C16.5,10.23 15.5,8.71 14,7.97V10.18L16.45,12.63C16.5,12.43 16.5,12.21 16.5,12Z",ve="M3,9H7L12,4V20L7,15H3V9M14,11H17V8H19V11H22V13H19V16H17V13H14V11Z";function Je(t,e){void 0===e&&(e={});var i=e.insertAt;if(t&&"undefined"!=typeof document){var r=document.head||document.getElementsByTagName("head")[0],a=document.createElement("style");a.type="text/css","top"===i&&r.firstChild?r.insertBefore(a,r.firstChild):r.appendChild(a),a.styleSheet?a.styleSheet.cssText=t:a.appendChild(document.createTextNode(t))}}var Ce=n`/* BROWSER CONTAINER */


.browser-container {
	display: grid;
	grid-template-columns: 1fr;
	grid-template-rows: max-content;
	width: 100%;
	height: 100%;
	grid-gap: 1rem;
	gap: 1rem;
}


/* NAV BAR */
.navigation-bar {
	display: flex;
	justify-content: flex-start;
	align-items: center;
	background-color: rgba(16, 21, 61, 0.8);
	color: #e5e5e5;
	position: sticky;
	top: 0;
	z-index: 2;
	-webkit-backdrop-filter: blur(1rem);
	        backdrop-filter: blur(1rem);
	height: -moz-fit-content;
	height: fit-content;
}

.navigation-bar .title {
	font-size: 1.2rem;
	font-weight: 500;
	text-shadow: 0 0 black;
}

#browser {
	position: relative;
	z-index: 0;
}

/* POPUP */
.popup {
	position: absolute;
	top: 0%;
	left: 0;
	background-color: rgba(16, 21, 61, 0.8);
	border-radius: 5px;
	padding: 1rem;
	z-index: 100;
	width: 100%;
	height: 50px;
	display: flex;
	justify-content: center;
	align-items: center;
	animation: slideIn 0.5s cubic-bezier(0.075, 0.82, 0.165, 1);
	text-transform: uppercase;
	font-size: large;
	font-weight: 700;
}

.popup>.slide-timeout {
	position: absolute;
	right: 0;
	bottom: 0;
	height: 8px;
	animation: slideTimeout linear forwards;
	background-color: rgba(255,255,255,0.31373);
}

@keyframes slideTimeout {
	from {
		width: 100%;
	}

	to {
		width: 0;
	}
}



@keyframes slideIn {
	from {
		transform: translateY(-100%);
	}

	to {
		transform: translateY(0);
	}
}

/* GRID VIEW */
.grid-container {
	display: grid;
	width: 100%;
	grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
	grid-template-columns: var(--ytb-grid-template-columns, repeat(auto-fit, minmax(200px, 1fr)));
	grid-auto-rows: 1fr;
	grid-auto-rows: var(--ytb-grid-auto-rows, 1fr);
	grid-gap: 1rem;
	grid-gap: var(--ytb-grid-gap, 1rem);
	overflow-y: auto;
	max-height: var(--ytb-max-grid-content-height);
	scroll-snap-type: y mandatory;
}

.grid-item {
	display: flex;
	flex-direction: column;
	position: relative;
	width: 100%;
	overflow: hidden;
	cursor: pointer;
	transition: 0.4s cubic-bezier(0.075, 0.82, 0.165, 1);
	border-radius: var(--ytb-gutter);
	border: 2px solid transparent;
	box-shadow: rgba(0, 0, 0, 0.5) 0px 0px 10px;
	scroll-snap-align: start;
	scroll-snap-stop: always;
}

.grid-item:hover {
	border-color: var(--primary-color);
}

.grid-item .thumbnail {
	height: 100%;
	width: 100%;
	aspect-ratio: 1;
	filter: brightness(0.7);
}


.thumbnail>.fallback-icon {
	display: flex;
	width: 100%;
	height: 100%;
	justify-content: center;
	align-items: center;
	background-color: rgba(0, 0, 0, 0.54);
	--mdc-icon-size: 50px;
}

.grid-item:hover .thumbnail {
	filter: brightness(1);
}

.grid-item .thumbnail>img {
	width: 100%;
	height: 100%;
	-o-object-fit: initial;
	object-fit: initial;
	z-index: 2;
	aspect-ratio: 1;
}

.grid-item>.play-overlay {
	position: absolute;
	--mdc-icon-size: 72px;
	right: var(--ytb-gutter);
	top: var(--ytb-gutter);
	opacity: 0;
	width: -moz-fit-content;
	width: fit-content;
	height: -moz-fit-content;
	height: fit-content;
}



.play-overlay[can-expand="false"] {
	top: var(--ytb-gutter);
	right: 0;
	--mdc-icon-size: 48px;
	color: rgba(255, 255, 255, 0.5) !important;
}

.grid-item:hover>.play-overlay[can-play="true"] {
	opacity: 1;
	z-index: 4;
	transition: opacity 400ms cubic-bezier(0.075, 0.82, 0.165, 1) 0.5s;
	color: #9E9E9E;
}

.play-overlay:hover>.can-play-btn {
	color: rgba(255, 255, 255, 1) !important;
}

.grid-item .details {
	display: inline-flex;
	position: relative;
	background-color: rgb(16, 21, 61);
	position: absolute;
	bottom: 0;
	width: 100%;
}

.grid-item .details .title {
	margin: auto;
	font-size: 1.2rem;
	font-weight: 500;
	color: var(--primary-text-color);
	text-align: center;
	text-wrap: nowrap;
	text-shadow: 0 0 10px var(--primary-color);
	text-overflow: ellipsis;
	overflow: hidden;
	padding-left: var(--ytb-gutter);
	padding-right: var(--ytb-gutter);
}

.content-container {
	display: block;
	width: 100%;
	height: auto;
	max-height: var(--ytb-container-max-height);
	overflow-y: scroll;
	scroll-snap-type: y mandatory;
}

.tab-container::-webkit-scrollbar,
.content-container::-webkit-scrollbar {
	width: 10px;
}

.tab-container::-webkit-scrollbar-track,
.content-container::-webkit-scrollbar-track {
	background: rgba(255,255,255,0);
}

.tab-container::-webkit-scrollbar-thumb,
.content-container::-webkit-scrollbar-thumb {
	background: rgba(112,128,144,0.55686);
	width: 5px;
}

.tab-container::-webkit-scrollbar-thumb:hover,
.content-container::-webkit-scrollbar-thumb:hover {
	background-color: #555;
}

.tab-container,
.content-container {
	scrollbar-width: thin;
	scrollbar-color: rgba(112,128,144,0.18824) rgba(255,255,255,0);
}

/* Ytube list */

.ytube-list-wrap {
	display: flex;
	width: 100%;
}

aside.ytube-list-thumbnail {
	position: sticky;
	top: 0;
	padding-left: var(--ytb-card-padding);
	padding-right: var(--ytb-card-padding);
	max-width: 450px;
	width: 100%;
	/* flex: 1 0 auto; */
	/* min-width: 30%; */
}

.ytube-list-thumbnail>.thumbnail-wrap {
	position: relative;
	width: 100%;
	display: flex;
	aspect-ratio: 1;
	align-items: flex-end;
}

.thumbnail-wrap>img {
	width: 100%;
	height: 100%;
	-o-object-fit: cover;
	object-fit: cover;
	border-radius: var(--ytb-gutter);
	max-height: -moz-fit-content;
	max-height: fit-content;
	position: absolute;
	top: 0;
	left: 0;
}

.ytube-list-thumbnail .secondary-info {
	display: flex;
	width: 100%;
	justify-content: space-evenly;
	align-items: center;
	padding: var(--ytb-card-padding);
	background-color: rgba(0, 0, 0, 0.4);
	line-height: 150%;
	-webkit-backdrop-filter: blur(4px);
	backdrop-filter: blur(4px);
	height: -moz-fit-content;
	height: fit-content;
	border-radius: 0 0 var(--ytb-gutter) var(--ytb-gutter);
}

.secondary-info .details {
	display: flex;
	flex: 1;
	flex-direction: column;
	position: relative;
	text-transform: capitalize;
}

.details>.title {
	font-size: 2rem;
	font-weight: 500;
	padding-top: var(--ytb-card-padding);
	padding-bottom: var(--ytb-card-padding);
	text-wrap: pretty;
	line-height: normal;
}

.details>.subtitle {
	font-size: 1.2rem;
	font-weight: 400;
}

.secondary-info .play-btn {
	width: -moz-fit-content;
	width: fit-content;
	position: relative;
}


aside.ytube-list-info {
	width: 75%;
	min-width: 350px;
	padding-left: var(--ytb-card-padding);
	overflow: auto;
	height: 100%;
}

ul.ytube-list {
	display: flex;
	flex-direction: column;
	width: 100%;
	height: 100%;
	padding: 0;
	margin: 0;
	list-style: none;
	scroll-snap-type: y mandatory;
	max-height: 100%;
	max-height: var(--ytb-list-max-height, 100%);
}

ul.ytube-list.search {
	min-width: 44%;
}

li.ytube-list-item {
	display: flex;
	align-items: center;
	justify-content: flex-start;
	border-bottom: 1px solid var(--divider-color);
	transition: 0.4s cubic-bezier(0.075, 0.82, 0.165, 1);
	cursor: pointer;
	padding: var(--ytb-card-padding);
	scroll-snap-align: start;
	scroll-snap-stop: normal;
	height: auto;
}

li.ytube-list-item:hover {
	background-color: rgba(0, 0, 0, 0.4);
}

li.ytube-list-item:last-child {
	border-bottom: none;
}

li.ytube-list-item>.index {
	flex: 0;
	margin-right: 1rem;
}

li.ytube-list-item>.thumbnail {
	width: 48px;
	width: var(--ytb-thumbnail-size, 48px);
	height: 48px;
	height: var(--ytb-thumbnail-size, 48px);
	position: relative;
	margin-right: 1rem;
}

li.ytube-list-item>.thumbnail>.play-btn {
	position: absolute;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);
	width: auto;
	height: auto;
	z-index: 2;
	color: var(--primary-text-color);
	opacity: 1;
}

li.ytube-list-item>.thumbnail>.play-btn.playlist {
	opacity: 0;
}

li.ytube-list-item:hover .thumbnail>.play-btn.playlist {
	opacity: 1;
}

li.ytube-list-item:hover .thumbnail>img {
	filter: brightness(0.7);
}

li.ytube-list-item>.thumbnail>img {
	width: 100%;
	height: 100%;
	-o-object-fit: scale-down;
	   object-fit: scale-down;
	position: relative;
	border-radius: 4px;
}

li.ytube-list-item>.thumbnail>.border-gradient.active {
	border-radius: 50%;
	background: var(--primary-color);
	position: absolute;
	width: 100%;
	height: 100%;
	top: 0;
	left: 0;
	padding: 1px;
}

li.ytube-list-item>.thumbnail>.border-gradient>img {
	width: 100%;
	height: 100%;
	border-radius: 50%;
	clip-path: circle(50%);
	-o-object-fit: scale-down;
	   object-fit: scale-down;
}

li.ytube-list-item>.info {
	flex: 1;
	display: flex;
	flex-direction: column;
	text-wrap: pretty;
	padding-right: var(--ytb-gutter);
	text-overflow: ellipsis;
	letter-spacing: 0.5px;
}

.info>.title {
	font-weight: 500;
}

.info>.subtitle {
	font-size: medium;
	font-weight: 400;
	padding-top: var(--ytb-gutter);
}`;Je(Ce);var Qe=n`.ytube-current-playing {
	position: relative;
	height: 100%;
	box-sizing: border-box;
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	color: #fff;
	color: var(--ytb-foreground-color, #fff);
	transition-property: color, padding;
	transition-duration: 0.4s;

}

.ytube-current-playing>.background {
	display: flex;
	position: absolute;
	top: 0px;
	left: 0px;
	height: 100%;
	width: 100%;
	transition: filter 0.8s;
}

.background>.color-block {
	background-color: transparent;
	background-color: var(--ytb-background-color, transparent);
	transition: background-color 0.8s;
	width: 100%;
}

.background>.image-block {
	background-color: transparent;
	background-color: var(--ytb-background-color, transparent);
	background-position: center center;
	background-size: cover;
	background-repeat: no-repeat;
	position: absolute;
	right: 0px;
	height: 100%;
	opacity: 1;
	transition: width 0.8s, background-image 0.8s, background-color 0.8s, background-size 0.8s, opacity 0.8s linear 0.8s;
}

.background>.gradient-block {
	position: absolute;
	background-image: linear-gradient(to right, var(--ytb-background-color), transparent);
	height: 100%;
	right: 0px;
	opacity: 1;
	transition: width 0.8s, opacity 0.8s linear 0.8s;
}

.ytube-current-playing>.player {
	position: relative;
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	height: 100%;
	padding: 16px;
}

.ytube-current-playing>.player>.top-info {
	display: flex;
	justify-content: space-between;
}

.ytube-current-playing>.player>.top-info>ul.source-selector {
	position: absolute;
	width: 100%;
	bottom: 100%;
	display: flex;
	flex-direction: column;
	background: var(--ytb-background-color);
	list-style-type: none;
	z-index: 2;
	padding: 16px;
	-webkit-backdrop-filter: blur(5px);
	backdrop-filter: blur(5px);
	transition: background 0.3s ease-in-out;
	flex-basis: 100%;
	margin-bottom: 0;
	left: 0;
	cursor: pointer;
}


.source-selector>li[disabled] {
	pointer-events: none;
	-webkit-user-select: none;
	   -moz-user-select: none;
	        user-select: none;
	opacity: 0.5;
}

.ytube-current-playing>.player>.top-info>.icon-source {
	display: flex;
	height: -moz-fit-content;
	height: fit-content;
	align-items: center;
	cursor: pointer;
}

.ytube-current-playing>.player>.top-info>.icon-source>ha-state-icon {
	padding-right: 8px;
	padding-left: 0;
	padding-left: initial;
	padding-inline-end: 8px;
	direction: var(--direction);
}

.ytube-current-playing>.player>.top-info .more-info {
	position: absolute;
	top: 4px;
	right: 4px;
	left: auto;
	left: initial;
	inset-inline-end: 4px;
	direction: var(--direction);
}

.ytube-current-playing>.player>.bottom-info {
	display: flex;
	justify-content: space-between;
	position: relative;
	height: 100%;
	width: 100%;
	overflow: hidden;
	flex-direction: column;
}

.ytube-current-playing>.player>.bottom-info>.media-info {
	display: flex;
	justify-content: flex-start;
	align-content: center;
	width: 100%;
	flex-direction: column;
	padding-top: 16px;
}

.ytube-current-playing>.player>.bottom-info>.media-info>.media-title {
	font-size: larger;
	padding-top: 8px;
	padding-bottom: 8px;
}

.media-info>.media-title>span {
	white-space: nowrap;
	text-overflow: ellipsis;
	width: -moz-fit-content;
	width: fit-content;
}

.media-info.marquee>.media-title {

	animation: marquee 10s linear infinite;
	animation-iteration-count: 3;
}

@keyframes marquee {
	0% {
		transform: translateX(0%);
	}

	100% {
		transform: translateX(-100%);
	}
}

.ytube-current-playing>.player>.bottom-info>.media-controls {
	display: flex;
	justify-content: space-between;
	align-items: center;
	width: 100%;
}

.ytube-current-playing>.player>.bottom-info>.volume-control[active='true']>.ha-volume-control {
	display: flex;
	width: 100%;
	align-items: center;
	height: 100%;
	max-height: -moz-fit-content;
	max-height: fit-content;
	transition: all 2s ease-in-out;
}

.volume-control[active='false'] {
	max-height: 0px;
	overflow: hidden;
}

.ytube-current-playing>.player>.progress {
	position: absolute;
	bottom: 0px;
	left: 0px;
	width: 100%;
	height: 6px;
}

.progress>.progress-bar-background {
	position: absolute;
	width: 100%;
	height: 100%;
	background-color: rgba(255, 255, 255, 0.2);
}

.progress>.progress-bar-background>.progress-bar {
	position: relative;
	width: 0%;
	height: 100%;
	background-color: #fff;
	background-color: var(--ytb-foreground-color, #fff);
	transition: width 0.8s;
}`;Je(Qe);var we=n`main {
	display: flex;
	width: 95%;
	margin: auto;
	height: 85%;
	background: rgba(0, 0, 0, .2);
	backdrop-filter: blur(10px);
	-webkit-backdrop-filter: blur(10px);
	border: 1px solid rgba(255, 255, 255, 0.5);
	border-radius: 12px;
	/* box-shadow: 0 0.5px 0 1px rgba(255, 255, 255, 0.23) inset,
				0 1px 0 0 rgba(255, 255, 255, 0.6) inset, 0 4px 16px rgba(0, 0, 0, 0.12); */
	overflow: hidden;
}



.main-left {
	width: 100%;
	max-height: 100%;
	transition: all 600ms ease-in-out;
	padding-top: 30px;
	padding-bottom: 30px;
}


.sidebar-right {
	height: 100%;
	max-width: 500px;
	width: 100%;
	-webkit-backdrop-filter: blur(1px);
	backdrop-filter: blur(1px);
	box-sizing: border-box;
	border-left: 1px solid rgba(255, 255, 255, 0.11);
	position: relative;
	overflow: hidden;
	padding-top: 30px;
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	transition: all 600ms ease-in-out;
}

@media screen and (min-width: 1024px) {
	.sidebar-right>.sidebar-header {
		display: none;
	}
}



.sidebar-right.active {
	background-image: linear-gradient(to top, var(--ytb-background-color) 50%, transparent 100%)
}

.sidebar-right[hide='true'] {
	padding: 0px;
	max-width: 0px;
	overflow: hidden;
	opacity: 0;
}

.sidebar-right>.cover-background {
	position: absolute;
	top: 0;
	right: 0;
	width: 100%;
	background-size: cover;
	background-position: inherit;
	filter: blur(10px);
	opacity: 0.5;
	height: 100%;
}

/* SIDEBAR CONTENT */
.sidebar {
	display: flex;
	flex-direction: column;
	position: relative;
	color: #e5e5e5;
	opacity: 1;
	overflow: hidden;
	/* To hide any overflow */
}


.sidebar .player-card {
	/* flex-grow: 1; */
	width: 100%;
}

.sidebar-right>.footer-player {
	position: absolute;
	bottom: 0;
	left: 0;
	width: 100%;
	box-sizing: border-box;
}

/* CONTENT */
.main-content {
	display: grid;
	grid-template-areas: "menu now-playing" "content content";
	grid-template-columns: 1fr;
	grid-template-rows: min-content 1fr;
	width: 100%;
	height: 100%;
	overflow: hidden;
	transition: all 600ms ease-in-out;
}



/* NAVIGATION */
.menu-row {
	grid-area: menu;
	z-index: 5;
}

.now-playing {
	grid-area: now-playing;
	position: relative;
}


/* MAIN CONTENT */
.browser-content {
	grid-area: content;
	/* display: flex; */
	flex-direction: column;
	color: #e5e5e5;
	max-height: 100%;
	justify-content: flex-start;
	transition: all 0.4s ease-in-out;
	/* overflow-y: auto; */
	padding-left: 1rem;
	padding-right: 1rem;
	height: 100%;
}

.browser-content {
	scrollbar-color: rgba(255,255,255,0.10196) rgba(255,255,255,0);
}

.browser-content::-webkit-scrollbar-track {
	background: rgba(255,255,255,0);
}

.browser-content::-webkit-scrollbar {
	width: 10px;
}

.browser-content::-webkit-scrollbar-thumb {
	background: rgba(112,128,144,0.55686);
	width: 5px;
}`;Je(we);var xe=n`@media screen and (max-width: 1800px) {
	main {
		display: flex;
		width: 100%;
		margin: auto;
		height: 100%;
		background: rgba(0, 0, 0, .2);
		backdrop-filter: blur(10px);
		-webkit-backdrop-filter: blur(10px);
		/* border: 1px solid rgba(255, 255, 255, 0.5); */
		border-radius: 0;
		border: none;
		/* box-shadow: 0 0.5px 0 1px rgba(255, 255, 255, 0.23) inset,
								0 1px 0 0 rgba(255, 255, 255, 0.6) inset, 0 4px 16px rgba(0, 0, 0, 0.12); */
		overflow: hidden;
	}
}

@media screen and (max-width: 1024px) {

	*,
	*::before,
	*::after {
		font-size: 14px !important;
	}

	main {
		width: 100%;
		height: 100%;
		max-height: 100%;
		margin: 0;
		border: none !important;
		border-radius: 0;
		display: flex;
		padding-top: 1rem;
	}

	/* CONTENT */
	.main-content {
		display: flex;
		flex-direction: column;
		width: 100%;
		height: 100%;
		overflow: hidden;
		transition: all 600ms ease-in-out;
	}

	.main-left {
		padding: 0;
	}

	.sidebar-right {
		max-width: none;
		max-width: initial;
		position: absolute;
		padding: 0;
		bottom: 0;
		left: 0;
		height: 100%;
		display: block;
		border: 0;
		background-color: rgba(0, 0, 0, 0.87);
		z-index: 1000;
	}

	.sidebar-right>.sidebar-header {
		position: relative;
		display: inline-flex;
		align-items: center;
		justify-content: flex-end;
		height: -moz-fit-content;
		height: fit-content;
		width: 100%;
		z-index: 1000;
	}
}

@media screen and (max-width: 500px) {
	.browser-content {
		padding-left: 8px;
		padding-right: 8px;
	}
}`;Je(xe);var Me=n`.menu-wrapper {
	display: flex;
	width: 100%;
	height: 100%;
	position: relative;
}

/* MENU ROW */
.menu-header {
	display: flex;
	justify-content: flex-start;
	align-items: baseline;
	width: 100%;
}

.toggle-sidebar {
	background: rgba(0, 0, 0, 0.3);
	height: auto;
	display: flex;
	align-items: center;
	padding-right: 0;
	/* padding: 0.5rem 1rem; */
	border-top-left-radius: 8px;
	border-bottom-left-radius: 8px;
	border: 1px solid rgba(255, 255, 255, 0.16);
	border-right: none;
	transition: all 0.4s ease-in-out;
	margin-bottom: 0.5rem;
}

.toggle-btn {
	cursor: pointer;
	width: auto;
	height: 100%;
	display: flex;
	align-items: center;
	justify-content: center;
}

.toggle-sidebar[sidebar-active='true'],
.toggle-sidebar:hover {
	background: #10153d;
	background: var(--ytb-background-color, #10153d);
	color: #fff;
	color: var(--ytb-foreground-color, #fff);
}

/* .toggle-sidebar[sidebar-active='true'] {
	max-width: fit-content;
	min-width: fit-content;
} */

.playing-status-containter {
	width: 100%;
	max-width: 500px;
	opacity: 1;
	transition: all 0.6s ease-in-out;
	padding: 0.5rem 1rem;
	padding-right: 0px;
}

/* .playing-status-containter[player-state='off'] {
	opacity: 0;
	max-width: 0px;
	overflow: hidden;
} */

.playing-status-containter[player-state='playing'][sidebar-active='false'] {
	min-width: 250px;
}

.playing-status-containter[player-state='off'],
.playing-status-containter[sidebar-active='true'] {
	opacity: 0;
	max-width: 0px;
	overflow: hidden;
}

/* .playing-status[player-state='off'] {
	opacity: 0;
	max-width: 0px;
	overflow: hidden;
} */

ul.main-menu[search-active='true'] {
	max-width: 0px;
	overflow: hidden;
}

.main-menu {
	display: flex;
	flex-direction: row;
	justify-content: flex-start;
	white-space: nowrap;
	font-family: inherit;
	width: 100%;
	letter-spacing: 1px;
	text-transform: uppercase;
	list-style: none;
	padding: 0;
}

.main-menu.current-playing {
	justify-content: center;
}

.has-dropdown {
	position: relative;
}

.sub-menu {
	display: none;
	position: absolute;
	top: 100%;
	left: 0;
	background-color: rgba(16, 21, 61, 0.8);
	border-radius: 5px;
	padding: 0;
	list-style: none;
	z-index: 100;
	gap: 8px;
}

.has-dropdown:hover .sub-menu {
	display: flex;
	flex-direction: column;
}

.sub-menu .nav-item {
	padding: 10px 15px;
	margin-bottom: 8px;
}

.sub-menu .nav-item:hover {
	background-color: rgba(106, 109, 155, 0.7);
}

.nav-item {
	display: flex;
	align-items: center;
	justify-content: center;
	color: #fff;
	padding: var(--ytb-gutter);
	margin: 0 4px;
	border-radius: 5px;
	white-space: nowrap;
	cursor: pointer;
	z-index: 1000;
}

.nav-item.active {
	background: rgba(106, 109, 155, 0.5);
	-webkit-text-decoration: none;
	text-decoration: none;
}

.nav-item.playlist.active {
	background: rgba(var(--ytb-background-color-rgba), 0.5);
}

.nav-item.playlist:hover {
	background: rgba(var(--ytb-background-color-rgba), 0.5);
}

.nav-item:hover {
	background: rgba(106, 109, 155, 0.5);
	-webkit-text-decoration: none;
	text-decoration: none;
}



.nav-icon {
	margin-right: 8px;
}

.nav-text {
	white-space: nowrap;
	text-overflow: ellipsis;
	overflow: hidden;
	display: inline-block;
	font-weight: 500;
}



.main-menu.playing-status {
	justify-content: space-between;
}

.main-menu>li.music-info {
	display: flex;
	flex-direction: column;
	justify-content: center;
	max-width: 450px;
	overflow: hidden;
	text-transform: none;
}

.main-menu>li.music-info .title {
	text-wrap: nowrap;
}

.main-menu>li.thumbnail-wrapper {
	width: 50px;
	height: 50px;
	background: radial-gradient(rgba(var(--ytb-background-color-rgba), 0.5) 50%, rgba(var(--ytb-background-color-rgba), 0.5) 50%);
	border-radius: 50%;
	position: relative;
	display: block;
	margin: 0 14px;
	box-shadow: 0px 0px 14px 3px rgba(var(--ytb-background-color-rgba), 0.5);
	position: relative;
}

.main-menu>li.thumbnail-wrapper>img {
	width: 100%;
	height: 100%;
	border-radius: 50%;
	clip-path: circle(50%);
	-o-object-fit: cover;
	   object-fit: cover;
	position: absolute;
	top: 0;
	left: 0;
}

.main-menu>li.thumbnail-wrapper[player-state='playing']>img {
	animation: rotate 5s linear infinite;
}

.main-menu>li.thumbnail-wrapper[player-state='paused']>img {
	filter: brightness(0.5);
}

.main-menu>li.thumbnail-wrapper[player-state='paused']::after {
	content: "\\23F8";
	position: absolute;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);
	color: #fff;
	font-size: 3rem;
	font-weight: 500;
}


/* pulse wave */

@keyframes pulsate1 {
	0% {
		transform: scale(0.6);
		opacity: 1;
		box-shadow: inset 0px 0px 25px 3px rgba(255, 255, 255, 0.75), 0px 0px 25px 10px rgba(255, 255, 255, 0.75);
	}

	100% {
		transform: scale(1);
		opacity: 0;
		box-shadow: none;

	}
}

@keyframes rotate {
	0% {
		transform: rotate(0deg);
	}

	100% {
		transform: rotate(360deg);
	}

}


/* Search bar */
.search-box {
	display: flex;
	align-items: center;
	justify-content: flex-start;
}

.search-box[search-active='true'] {
	flex: 1;
	width: 100%;
}

.search-box .search-icon {
	cursor: pointer;
	transition: all 0.3s ease;
	display: flex;
	padding: var(--ytb-gutter);
	border-radius: 50%;
	/* width: 100%; */
	/* height: 100%; */
	display: flex;
	align-items: center;
	justify-content: center;
	background-color: rgba(255, 255, 255, 0.06);
	margin-left: var(--ytb-card-padding);
	margin-right: var(--ytb-card-padding);
	/* flex: 1; */
	align-self: center;
	justify-self: center;
	align-self: center;
	justify-self: center;
	place-self: center;
}

.search-box .search-container[search-active='false'] {
	flex: 0;
	max-width: 0px;
	overflow: hidden;
}

.search-box .search-container[search-active='true'] {
	display: flex;
	justify-content: space-between;
	align-items: center;
	width: 100%;
	flex-basis: 100%;
}

.search-box .search-container .search-wrap {
	position: relative;
	border-radius: 1rem;
	background-color: rgba(106, 109, 155, 0.5);
	transition: all 0.6s ease-in-out;
	display: flex;
	overflow: hidden;
	max-width: calc(100% - 30px);
	flex: 1;
}


.search-box .search-container .search-wrap form {
	padding: 5px 8px;
	display: flex;
	align-items: center !important;
	justify-content: center;
	flex: 1;
}

.search-box .search-container .search-wrap form input {
	text-align: center;
	height: 30px;
	margin-left: var(--ytb-gutter);
	margin-right: var(--ytb-gutter);
	flex: 1;
}

.search-box .search-container .search-wrap form input:focus::-moz-placeholder {
	color: transparent;
}

.search-box .search-container .search-wrap form input:focus::placeholder {
	color: transparent;
}

.search-box .search-container .search-wrap form input {
	background: 0 0;
	color: var(--primary);
	border: none;
	outline: 0;
}

.search-box .search-container .search-wrap ha-combo-box.search-filter {
	max-width: -moz-fit-content;
	max-width: fit-content;
	max-height: 50px;
}`;Je(Me);var Ie=n`.search-results-container {
	display: block;
	width: 100%;
	height: 100%;
	max-height: 100%;
	max-height: var(--ytb-max-grid-content-height, 100%);
	max-width: 100%;
	overflow-y: auto;
	color: #e5e5e5;
}

section {
	display: flex;
	width: 100%;
	flex-direction: column;
}

section .header {
	display: flex;
	width: 100%;
	justify-content: space-between;
	align-items: center;
	padding: var(--ytb-card-padding);
	border-bottom: 1px solid var(--divider-color);
}

section .header>.media-type {
	font-size: 1.5rem;
	text-transform: uppercase;
	letter-spacing: 1px;

}


section .result-content.grid {
	display: flex;
	overflow-x: auto;
	padding-top: 1rem;
	padding-bottom: 0.5rem;
	max-height: 300px;
	flex-wrap: wrap;
	flex-direction: column;
	align-content: flex-start;
	margin-bottom: 1rem;
	-moz-column-gap: 1rem;
	     column-gap: 1rem;
}

section .result-content.grid>.grid-item {
	/* flex: 1 1 auto; */
	max-width: 300px;
	max-width: var(--ytb-grid-auto-rows, 300px);
	height: auto;
	aspect-ratio: 1/1;
}

section .result-content.grid[content-type="artist"]>.grid-item {
	flex: 1 1 auto;
	border-radius: 50%;
	aspect-ratio: 1/1;
}

section .result-content.list {
	display: flex;
	gap: var(--ytb-card-padding);
}`;Je(Ie);var Be=n`ytube-loader {
	display: flex;
	width: 100%;
	height: 100%;
	justify-content: center;
	align-items: center;
}

.loader {
	height: 100%;
	width: 100%;
	display: flex;
	justify-content: center;
	align-items: center;
}

.music {
	width: 300px;
	height: 200px;
	position: relative;
	display: inline-flex;
	align-items: center;
	justify-content: space-between;
}

.music .bar {
	width: 12px;
	border-radius: 10px;
	animation: loader 1.5s ease-in-out infinite;
}

@keyframes loader {

	0%,
	100% {
		height: 2px;
	}

	50% {
		height: 80px;
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
}`;Je(Be);var Te=n`.tab-container {
	display: flex;
	height: 100%;
	color: inherit;
	color: var(--ytb-foreground-color, inherit);
	letter-spacing: 0.2px;
	position: relative;
}

.tab-container .tab-background {
	position: absolute;
	bottom: 0;
	left: 0;
	width: 100%;
	height: 100%;
	background: linear-gradient(to top, var(--ytb-background-color) 0%, rgba(0, 0, 0, 0) 10%);
	opacity: 1;
	pointer-events: none;
	/* z-index: 2; */
}

.scrollable-content {
	height: 800px;
	height: var(--ytb-tab-max-height, 800px);
	overflow-x: auto;
	flex: 1;
	display: flex;
	position: relative;
	margin-top: 1rem;
	flex-direction: column;
}



/* Current playlist */
.playlist-title {
	display: inline-block;
	width: -moz-fit-content;
	width: fit-content;
	height: auto;
	padding: var(--ytb-card-padding);
	font-weight: 500;
	font-size: larger;
	overflow: hidden;
}

ul.current-playing {
	list-style: none;
	width: 100%;
	margin: 0;
	padding: 0;
	height: 100%;
	overflow-y: auto;
}

li.current-playing-item {
	display: flex;
	align-items: center;
	justify-content: space-between;
	border-bottom: 1px solid rgba(255, 255, 255, 0.1);
	border-bottom: 1px solid var(--divider-color, rgba(255, 255, 255, 0.1));
	transition: all 0.4s cubic-bezier(0.075, 0.82, 0.165, 1);
	cursor: pointer;
	padding: var(--ytb-gutter);
	padding-left: var(--ytb-card-padding);
	padding-right: 0px;
	scroll-snap-align: start;
}

li.current-playing-item[active='true'] {
	background: var(--ytb-background-color-rgba);
}

li.current-playing-item[active='true']>.thumbnail>.border-gradient {
	background: var(--primary-color);
}

li.current-playing-item:hover {
	background: var(--ytb-background-color-rgba);
}

li.current-playing-item>.index {
	margin-left: var(--ytb-gutter);
	margin-right: 1rem;
	position: relative;
	flex: 0 0 1rem;
	display: inline-block;
}

li.current-playing-item .index .track-index {
	display: inline-block;
	transition: opacity 0.3s ease;
}

li.current-playing-item .index .play-icon {
	display: none;
	font-size: 1.2rem;
	color: var(--primary-color);
	position: absolute;
	top: 0;
	left: 0;
	transition: opacity 0.3s ease;
}

/* On hover, hide the track index and show the play icon */
li.current-playing-item:hover .thumbnail>.play-btn {
	opacity: 1;
}

li.current-playing-item:hover .thumbnail img {
	opacity: 0.5;
}

li>.thumbnail {
	width: 48px;
	width: var(--ytb-thumbnail-size, 48px);
	height: 48px;
	height: var(--ytb-thumbnail-size, 48px);
	position: relative;
	margin-right: 1rem;
}

li>.thumbnail>.play-btn {
	position: absolute;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);
	width: auto;
	height: auto;
	z-index: 2;
}

li>.thumbnail>.play-btn {
	opacity: 0;
}

li>.thumbnail>.border-gradient {
	border-radius: 50%;
	position: absolute;
	width: 100%;
	height: 100%;
	top: 0;
	left: 0;
	border: 2px solid transparent;
}

li>.thumbnail>.border-gradient>img {
	width: 100%;
	height: 100%;
	border-radius: 50%;
	clip-path: circle(50%);
	-o-object-fit: cover;
	   object-fit: cover;
	position: relative;
}

li>.info {
	flex: 1;
	display: flex;
	flex-direction: column;
	justify-content: flex-start;
	overflow: hidden;
	padding-right: var(--ytb-gutter);
	text-wrap: nowrap;
}

li>.info .title {
	font-weight: 500;
	overflow: hidden;
	text-overflow: ellipsis;
}

li>.info .artist {
	font-weight: 400;
}

li.current-playing-item .actions {
	display: flex;
	align-items: center;
	justify-content: center;
	position: relative;
	width: -moz-fit-content;
	width: fit-content;
	height: -moz-fit-content;
	height: fit-content;
}

li.current-playing-item .actions>.like-wrapper {
	display: flex;
	align-items: center;
	justify-content: center;
	color: var(--ytb-foreground-color);
	transition: opacity 0.3s ease;
	opacity: 0;
}

li.current-playing-item:hover .actions>.like-wrapper {
	opacity: 1;
}


li.current-playing-item .actions ul.menu-content {
	position: absolute;
	top: 100%;
	right: 0;
	display: flex;
	flex-direction: column;
	background: var(--ytb-background-color);
	padding: 0;
	list-style-type: none;
	z-index: 2;
	width: -moz-max-content;
	width: max-content;
	-webkit-backdrop-filter: blur(5px);
	        backdrop-filter: blur(5px);
	transition: background 0.3s ease-in-out;
	flex-basis: 100%;
}

li.sub-action-menu {
	display: flex;
	align-items: center;
	justify-content: flex-start;
	padding: 0.5rem 1rem 0.5rem 0.5rem;
	display: inline-flex;
	border-bottom: 1px solid rgba(255, 255, 255, 0.16);
	flex: 1;
	opacity: 0.7;

}

li.sub-action-menu>.action-icon {
	margin-right: 8px;
}

li.sub-action-menu:hover {
	background-color: var(--ytb-foreground-color);
	color: var(--ytb-background-color);
	opacity: 1;
}

li.sub-action-menu:last-child {
	border-bottom: none;
}

li.current-playing-item:last-child {
	border-bottom: none;
	margin-bottom: 2rem;
}




/* Music bar container on the right side of the list item */
.music-bar {
	display: inline-block;
	position: absolute;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);
	height: inherit;
	width: inherit;
	display: flex;
	align-items: center;
	justify-content: center;
	/* padding-right: var(--ytb-gutter); */
	z-index: 1;
	padding: 10%;
}

.music-bar[hide='true'] {
	display: none;
}

.music-bar span {
	display: inline-block;
	width: 6px;
	height: 100%;
	background-color: var(--primary-color);
	animation: bounce 1.2s infinite ease-in-out;
	animation-fill-mode: both;
	border-radius: 2px;
	margin-left: 2px;
	margin-right: 2px;
}

.music-bar span:nth-child(1) {
	animation-delay: -0.45s;
	height: 60%;
}

.music-bar span:nth-child(2) {
	animation-delay: -0.3s;
	height: 100%;
}

.music-bar span:nth-child(3) {
	animation-delay: -0.15s;
	height: 60%;
}

@keyframes bounce {

	0%,
	100% {
		transform: scaleY(0.5);
	}

	50% {
		transform: scaleY(1);
	}
}

/* Lyrics container */
.lyrics-container {
	width: 100%;
	position: relative;
	text-align: center;
	font-weight: 600;
	letter-spacing: 0.2px;
	align-content: center;
	height: 100%;
	padding-top: 1rem;
	border-radius: var(--ytb-gutter) var(--ytb-gutter) 0 0;
	background-image: linear-gradient(to bottom, var(--ytb-background-color) 0%, rgba(0, 0, 0, 0) 30%), linear-gradient(to top, var(--ytb-background-color) 0%, rgba(0, 0, 0, 0) 40%);
	overflow: hidden;
}

.lyrics-container .lyrics {
	position: relative;
	z-index: 2;
	/* Keep lyrics above background */
	max-height: 100%;
	overflow-y: auto;
	padding-left: var(--ytb-card-padding);
	padding-right: var(--ytb-card-padding);
	padding-bottom: 2rem;
}`;Je(Te);var Ue=n`ha-card {
	font-family: sans-serif;
	display: flex;
	align-items: center;
	justify-content: center;
	height: calc(100vh - var(--header-height));
	background-image: var(--ytb-background-image);
	background-repeat: no-repeat;
	background-size: cover;
	--ytb-gutter: 8px;
	--ytb-card-padding: 12px;
	--ytb-thumbnail-size: 48px;

}


@media screen and (min-width: 1200px) {
	ha-card {
		font-size: 16px;
	}
}



body.no-scroll {
	overflow: hidden !important;
}

/* ANIMATION CLASSES */
.animate {
	animation-duration: 2s;
	animation-fill-mode: both;
}

@keyframes fadeIn {
	from {
		opacity: 0;
	}

	to {
		opacity: 1;
	}
}

.fadeIn {
	animation-name: fadeIn;
}

@keyframes fadeInRight {
	from {
		opacity: 0;
		transform: translate3d(100%, 0, 0);
	}

	to {
		opacity: 1;
		transform: none;
	}
}

.fadeInRight {
	animation-name: fadeInRight;
}

ytube-loader {
	display: flex;
	width: 100%;
	height: 100%;
	justify-content: center;
	align-items: center;
}

.loader {
	height: 100%;
	width: 100%;
	display: flex;
	justify-content: center;
	align-items: center;
}

.music {
	width: 300px;
	height: 200px;
	position: relative;
	display: inline-flex;
	align-items: center;
	justify-content: space-between;
}

.music .bar {
	width: 12px;
	border-radius: 10px;
	animation: loader 1.5s ease-in-out infinite;
}

@keyframes loader {

	0%,
	100% {
		height: 2px;
	}

	50% {
		height: 80px;
	}
}`;Je(Ue);const Ne=[n`
    * {
      box-sizing: border-box;
      padding: 0;
      margin: 0;
    }
  `,Ue,we,Ce,Qe,xe,Me,Ie,Be,Te];class Re extends ct{render(){return Z`
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
    `}}function Le(t,e){if(!Number.isInteger(e)||e<=0)throw new Error("Size must be an integer greater than zero.");const i=Math.ceil(t.length/e),r=Array(i);for(let a=0;a<i;a++){const i=a*e,o=i+e;r[a]=t.slice(i,o)}return r}function Ge(t,e=1){const i=[],r=Math.floor(e),a=(t,e)=>{for(let o=0;o<t.length;o++){const s=t[o];Array.isArray(s)&&e<r?a(s,e+1):i.push(s)}};return a(t,0),i}Re.styles=Ne,customElements.define("ytube-loader",Re);let Ke=class extends ct{constructor(){super(...arguments),this._currentChunkIndex=0,this._chunkSize=30,this._chunks=[],this._renderedItems=[]}static get styles(){return Ne}firstUpdated(t){super.firstUpdated(t),t.has("elements")&&(this._chunks=[],this._currentChunkIndex=0)}updated(t){super.updated(t),t.has("elements")&&(this._chunks=[],this._currentChunkIndex=0)}shouldUpdate(t){return t.has("elements"),!0}render(){const t=this.elements.children;0===this._chunks.length&&(this._chunks=Le(t,this._chunkSize)),this._renderedItems=Ge(this._chunks.slice(0,this._currentChunkIndex+1));return Z`
      <div class="grid-container animate fadeIn" @scroll=${this._handleScroll}>
        ${this._renderedItems.map((t=>Z`
            <div class="grid-item">
              <div
                class="play-overlay"
                can-play=${(t=>t.can_play)(t)}
                can-expand=${(t=>t.can_expand)(t)}
                @click=${()=>this.browser._playAll(t)}
              >
                <ha-icon class="can-play-btn" .icon=${Bt.PLAY_CIRCLE}></ha-icon>
              </div>

              <div class="thumbnail" @click=${()=>this.browser._handleClick(t)}>
                ${t.thumbnail?Z`<img src="${t.thumbnail}" loading="lazy" alt="${t.title}" />`:Z`
                      <div class="fallback-icon">
                        <ha-icon icon="${Bt.PLAYLIST}"></ha-icon>
                      </div>
                    `}
              </div>
              <div class="details">
                <span class="title">${t.title}</span>
              </div>
            </div>
          `))}
      </div>
    `}_handleScroll(t){const e=t.target;e.scrollTop+e.clientHeight>=e.scrollHeight-500&&this._loadMoreItems()}_loadMoreItems(){this._currentChunkIndex<this._chunks.length-1&&this._currentChunkIndex++}};t([gt()],Ke.prototype,"browser",void 0),t([gt()],Ke.prototype,"elements",void 0),t([bt()],Ke.prototype,"_currentChunkIndex",void 0),t([bt()],Ke.prototype,"_chunkSize",void 0),t([bt()],Ke.prototype,"_chunks",void 0),t([bt()],Ke.prototype,"_renderedItems",void 0),Ke=t([dt("ytube-items-grid")],Ke);let De=class extends ct{constructor(){super(...arguments),this._currentChunkIndex=0,this._chunkSize=25,this._chunks=[],this._renderedItems=[]}static get styles(){return Ne}firstUpdated(t){super.firstUpdated(t),this._getContentHeight(),t.has("elements")&&(this._chunks=[],this._currentChunkIndex=0)}updated(t){super.updated(t),t.has("elements")&&(this._chunks=[],this._currentChunkIndex=0)}shouldUpdate(t){return t.has("elements"),!0}render(){const t=this.elements,e="playlist"===t.media_content_type,i=t.children;return 0===this._chunks.length&&(this._chunks=Le(i,this._chunkSize)),this._renderedItems=Ge(this._chunks.slice(0,this._currentChunkIndex+1)),Z`
      <div class="ytube-list-wrap animate fadeIn">
        <aside class="ytube-list-thumbnail">
          <div class="thumbnail-wrap">
            <img src="${t.thumbnail}" loading="lazy" alt="${t.title}" />
            <div class="secondary-info">
              <div class="details">
                <div class="title">${t.title}</div>
                <div class="subtitle">
                  <div>${t.media_content_type}</div>
                  <div>${t.children.length} track${t.children.length>1?"s":""}</div>
                </div>
              </div>
              <div class="play-btn" @click=${()=>this.browser._playAll(t)}>
                <ha-icon-button .path=${Ae}></ha-icon-button>
              </div>
            </div>
          </div>
        </aside>
        <aside class="ytube-list-info" @scroll=${this._handleScroll}>
          <ul class="ytube-list">
            ${this._renderedItems.map(((t,i)=>{const r=t.title.split(" - ")[0]||"",a=t.title.split(" - ")[1]||"";return Z`
                <li class="ytube-list-item" @click=${()=>this.browser._handleClick(t)}>
                  <div class="index">
                    <span class="track-index">${i+1}</span>
                  </div>
                  <div class="thumbnail">
                    <div class="play-btn ${e?"playlist":""}">
                      <ha-icon-button .path=${ne} @click=${()=>this.browser._handleClick(t)}></ha-icon-button>
                    </div>
                    ${e?Z`<img src="${t.thumbnail}" loading="lazy" />`:""}
                  </div>
                  <div class="info">
                    <span class="title">${r}</span>
                    ${a?Z`<span class="subtitle">${a}</span>`:""}
                  </div>
                </li>
              `}))}
          </ul>
        </aside>
      </div>
    `}_handleScroll(t){const e=t.target;e.scrollTop+e.clientHeight>=e.scrollHeight-100&&this._loadMoreItems()}_loadMoreItems(){this._currentChunkIndex<this._chunks.length-1&&(this._currentChunkIndex++,this.requestUpdate())}_getContentHeight(){setTimeout((()=>{var t,e,i,r,a;const o=null===(e=null===(t=this.parentElement)||void 0===t?void 0:t.offsetParent)||void 0===e?void 0:e.clientHeight;if(o){const t=null===(i=this._elListWrap)||void 0===i?void 0:i.scrollHeight,e=null===(r=this._elListWrap)||void 0===r?void 0:r.offsetHeight,s=o-(null===(a=this.parentElement)||void 0===a?void 0:a.offsetTop)-e;s<0&&this.style.setProperty("--ytb-list-max-height",t+s-50+"px")}}),200)}};t([gt()],De.prototype,"browser",void 0),t([gt()],De.prototype,"elements",void 0),t([bt()],De.prototype,"_currentChunkIndex",void 0),t([bt()],De.prototype,"_chunkSize",void 0),t([bt()],De.prototype,"_chunks",void 0),t([bt()],De.prototype,"_renderedItems",void 0),t([yt(".ytube-list-info")],De.prototype,"_elListWrap",void 0),De=t([dt("ytube-items-list")],De);const Ye=["track"];let ze=class extends ct{constructor(){super(...arguments),this.searchAtive=!1}firstUpdated(t){super.firstUpdated(t)}updated(t){super.updated(t)}shouldUpdate(t){return t.has("searchResults")&&this.searchResults||t.has("searchAtive")&&this.searchAtive,!0}render(){if(!this.searchAtive||!this.searchResults)return Z``;const t=this.searchResults,e=(t,e)=>this._renderGrid(t,e),i=(t,e)=>this._renderList(t,e),r=Object.keys(t).filter((t=>!Ye.includes(t))),a=Object.keys(t).filter((t=>Ye.includes(t)));return Z`
      <div class="search-results-container">
      ${a.map((e=>i(e,t[e])))}
      ${r.map((i=>e(i,t[i])))}
      </div>
    `}_renderGrid(t,e){return Z`<section class="results-grid">
      <div class="header">
      <div class="media-type">${t}</div>
      </div>
      <div class="result-content grid" content-type="${t}">
      ${e.map((t=>Z`
            <div class="grid-item">
              <div
                class="play-overlay"
                can-play=${(t=>t.can_play)(t)}
                can-expand=${(t=>t.can_expand)(t)}
                @click=${()=>this.browser._playAll(t)}
              >
                <ha-icon class="can-play-btn" .icon=${Bt.PLAY_CIRCLE}></ha-icon>
              </div>
              <div class="thumbnail" @click=${()=>this.browser._handleClick(t)}>
                ${t.thumbnail?Z`<img src="${t.thumbnail}" loading="lazy" alt="${t.title}" />`:Z`
                      <div class="fallback-icon">
                        <ha-icon icon="${Bt.PLAYLIST}"></ha-icon>
                      </div>
                    `}
              </div>
              <div class="details">
                <span class="title">${t.title}</span>
              </div>
            </div>
          `))}
      </div>
    </section>`}_renderList(t,e){const i=this.chunkArra(e,3);return Z`<section class="results-list">
      <div class="header">
      <div class="media-type">${t}</div>
      </div>
      <div class="result-content list">
      ${i.map((t=>this._renderItemList(t)))}
      </div>
    </section>`}_renderItemList(t){return Z`
      <ul class="ytube-list search">
        ${t.map((t=>{const e=t.title.split(" - ")[0]||"",i=t.title.split(" - ")[1]||"";return Z`
              <li class="ytube-list-item" @click=${()=>this.browser._handleClick(t)}>
                <div class="thumbnail">
                  <div class="play-btn playlist">
                    <ha-icon-button .path=${ne} @click=${()=>this.browser._handleClick(t)}></ha-icon-button>
                  </div>
                  <img src="${t.thumbnail}" loading="lazy" />
                </div>
                <div class="info">
                  <span class="title">${e}</span>
                  ${i?Z`<span class="subtitle">${i}</span>`:""}
                </div>
              </li>
            `}))}
      </ul>
    `}chunkArra(t,e){return Le(t,e)}};ze.styles=Ne,t([gt()],ze.prototype,"browser",void 0),t([gt()],ze.prototype,"searchResults",void 0),t([bt()],ze.prototype,"searchAtive",void 0),ze=t([dt("ytube-search-results")],ze);let Oe=class extends ct{constructor(){super(...arguments),this.isList=!1,this.isSearch=!1,this.searchResults={}}static get styles(){return Ne}firstUpdated(t){super.firstUpdated(t)}updated(t){super.updated(t),t.has("elements")&&this.isSearch&&this._parseSearchResults(this.elements)}shouldUpdate(t){return t.has("state")&&8===this.state&&this.togglePopup("No results found"),t.has("state")&&16===this.state&&this.togglePopup("An error occurred"),t.has("isList")&&this.isList||t.has("isSearch")&&!this.isSearch&&(this.searchResults={}),!0}render(){if(4===this.state)return Z`<ytube-loader></ytube-loader>`;const t=this.elements.children;if(!t||0===t.length)return Z``;let e;return e=this.isSearch?Z`<ytube-search-results
        .browser=${this}
        .searchAtive=${this.isSearch}
        .searchResults=${this.searchResults}
      ></ytube-search-results>`:this.isList?Z`<ytube-items-list .browser=${this} .elements=${this.elements}></ytube-items-list>`:Z`<ytube-items-grid .browser=${this} .elements=${this.elements}></ytube-items-grid>`,Z` <div id="browser">${e}</div> `}togglePopup(t){const e=this._elBrowser;if(!e)return;const i=`\n    <div class="popup">\n    <div class="slide-timeout"  style="animation-duration: 5000ms"></div>\n    ${t}\n    </div>`;e.insertAdjacentHTML("beforeend",i),setTimeout((()=>{const t=e.querySelector(".popup");t&&t.remove()}),5e3)}_parseSearchResults(t){const{children:e}=t,i=e.reduce(((t,e)=>(t[e.media_content_type]||(t[e.media_content_type]=[]),t[e.media_content_type].push(e),t)),{});this.searchResults=i,this.state=2,this.requestUpdate()}_handleClick(t){const e=e=>{this.dispatchEvent(new CustomEvent(e,{detail:{action:t}}))},{can_play:i,can_expand:r}=t;r?e("navigate"):i&&e("play")}_playAll(t){this.dispatchEvent(new CustomEvent("play",{detail:{action:t}}))}_addToPlaylist(t){const e={action:"add_to_playlist",item:t};this.dispatchEvent(new CustomEvent("action",{detail:e}))}};t([gt({attribute:!1})],Oe.prototype,"store",void 0),t([gt()],Oe.prototype,"elements",void 0),t([bt()],Oe.prototype,"state",void 0),t([gt()],Oe.prototype,"isList",void 0),t([gt()],Oe.prototype,"isSearch",void 0),t([bt()],Oe.prototype,"searchResults",void 0),t([yt("#browser")],Oe.prototype,"_elBrowser",void 0),Oe=t([dt("ytube-browser-list")],Oe);let He=class extends ct{constructor(){super(...arguments),this._browseHistory=[]}connectedCallback(){super.connectedCallback(),window.YtubeBrowserCard=this}firstUpdated(t){super.firstUpdated(t)}updated(t){super.updated(t),t.has("initialAction")&&(this._browseHistory=[],this._browse(this.initialAction))}shouldUpdate(t){return t.has("_browseHistory"),!0}loadElementFromMenu(t){this._browserList.isList=!1,this._browserList.isSearch=!1,this._browseHistory=[],this._browse(t)}async _browse(t){var e,i,r;if(this._browserList.isList=!1,this._browserList.isSearch=!1,this._browserList.state=4,this._browseHistory.push(t),0!==(null===(e=t.children)||void 0===e?void 0:e.length)){if((null===(i=t.children)||void 0===i?void 0:i.length)>0&&Ut.includes(t.media_content_type)&&(this._browserList.isSearch=!1,this._browserList.isList=!0,this._browserList.elements=t,this._browserList.state=2,this.store.card.computeStyles()),(null===(r=t.children)||void 0===r?void 0:r.length)>0&&"search"===t.media_content_type)this._browserList.isList=!1,this._browserList.isSearch=!0,this._browserList.elements=t;else try{const e=await this.store.hass.callWS({type:"media_player/browse_media",entity_id:this.player.id,media_content_id:t.media_content_id,media_content_type:t.media_content_type});e&&(this._browserList.isList=Ut.includes(t.media_content_type),this._browserList.elements=e,this._browserList.state=2,this.store.card.computeStyles())}catch(t){this._browserList.state=16}this.requestUpdate()}else this._browserList.state=8}render(){return this.player=this.store.player,Z`
      <div class="browser-container" id="browser-main">
        ${this._renderNavigationBar()}
        <ytube-browser-list
          .store=${this.store}
          @navigate=${t=>this._browse(t.detail.action)}
          @play=${t=>{var e;return null===(e=this.player)||void 0===e?void 0:e._playMedia(t.detail.action)}}
          @action=${t=>this._handleAction(t.detail)}
        ></ytube-browser-list>
      </div>
    `}_renderNavigationBar(){const t=1===this._browseHistory.length,e=this._browseHistory.length>0?this._browseHistory[this._browseHistory.length-1].title:" ";return t?Z``:Z`<div class="navigation-bar">
          <ha-icon-button .path=${ie} @click=${()=>this._goBack()}> </ha-icon-button>
          <span class="title">${e}</span>
        </div>`}_goBack(){this._browserList.isList=!1,this._browserList.isSearch=!1,this._browseHistory.length>=1&&(this._browseHistory=this._browseHistory.slice(0,-1),this._browse(this._browseHistory.pop()))}_handleAction(t){var e;const{action:i,item:r}=t;null===(e=this.player)||void 0===e||e.ytubeHassAction(i,{song_id:r.media_content_id}),setTimeout((()=>{this._reloadPlaylist()}),1e3)}_reloadPlaylist(){const t=new CustomEvent("reload-playlist",{detail:{},bubbles:!0,composed:!0});this.dispatchEvent(t)}static get styles(){return[n`
        *[is-search='true'] {
          opacity: 0;
        }
      `,Ne]}};t([gt({attribute:!1})],He.prototype,"store",void 0),t([gt()],He.prototype,"initialAction",void 0),t([bt()],He.prototype,"player",void 0),t([bt()],He.prototype,"_browseHistory",void 0),t([yt("ytube-browser-list")],He.prototype,"_browserList",void 0),He=t([dt("ytube-browser-card")],He);var je="data:image/png;base64,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";function Ve(t){t=t.replace("#","");return`${parseInt(t.substring(0,2),16)}, ${parseInt(t.substring(2,4),16)}, ${parseInt(t.substring(4,6),16)}`}let Ze=class extends ct{constructor(){super(...arguments),this._activeTabIndex=0,this._activeActionIndex=null,this._currentChunkIndex=0,this._chunkSize=15,this._chunks=[],this._renderedItems=[],this._prevTitle="",this._handleOutsideClick=t=>{var e;const i=this._activeActionIndex,r=null===(e=this.shadowRoot)||void 0===e?void 0:e.querySelector(`.current-playing-item[data-index="${i}"]`);if(!r)return;const a=null==r?void 0:r.querySelector(".actions"),o=null==a?void 0:a.querySelector(".menu-content");if(!a||!o)return;!o.contains(t.target)&&!a.contains(t.target)&&(this._activeActionIndex=null,document.removeEventListener("click",this._handleOutsideClick))}}static get styles(){return Ne}async firstUpdated(t){super.firstUpdated(t)}updated(t){super.updated(t),t.has("player")&&(this._prevTitle=this.player.playlistTitle),t.has("playlist")&&(this._chunks=[],this._currentChunkIndex=0)}shouldUpdate(t){if(t.has("_activeTabIndex"))return!0;if(t.has("_prevTitle")){const e=t.get("_prevTitle"),i=this._prevTitle;if(""!==e&&e!==i)return setTimeout((()=>{this._chunks=[],this._currentChunkIndex=0}),200),!0}return t.has("playlist"),!0}render(){const t=this._renderPlayingList(),e=this._renderLyrics(),i=[{key:"current",label:this.player.isActive?"Current Playlist":"History",content:t}];this.player.isActive&&i.push({key:"lyrics",label:"Lyrics",content:e});const r=Z` <div class="menu-header">
      <ul class="main-menu current-playing">
        ${i.map(((t,e)=>Z`
            <li
              class="nav-item playlist ${this._activeTabIndex===e?"active":""}"
              @click=${()=>this._activeTabIndex=e}
            >
              <span class="nav-text">${t.label}</span>
            </li>
          `))}
      </ul>
    </div>`;return Z`
      <div class="ytube-current-playlist" style=${this._computeStyle()}>
        ${r}
        <div class="tab-container">
          <div class="scrollable-content" player-active=${this.player.isActive}>${i[this._activeTabIndex].content}</div>
          <div class="tab-background"></div>
        </div>
      </div>
    `}_renderLyrics(){var t;if(!this.player.isActive)return Z``;const e=(null===(t=this.extra)||void 0===t?void 0:t.lyrics)||"";return Z`
      <div class="lyrics-container animate fadeIn">
        <div class="background"></div>
        <div class="lyrics">${e.split("\n").map((t=>Z`<p>${t}</p>`))}</div>
      </div>
    `}_renderPlayingList(){if(!this.playlist)return Z`<ytube-loader></ytube-loader>`;const t=t=>!!this.player.isActive&&(-1===this.player.currentTrack||this.player.currentTrack===t),e="album"===this.player._attr._media_type;0===this._chunks.length&&(this._chunks=Le(this.playlist,this._chunkSize)),this._renderedItems=Ge(this._chunks.slice(0,this._currentChunkIndex+1));const i=this._renderedItems.map(((i,r)=>{const a=r;return Z`
        <li class="current-playing-item" active=${t(a)} data-index=${r}>
          <div class="index">
            <span class="track-index">${r+1}</span>
          </div>
          <div class="thumbnail">
            ${t(a)?Z`<div class="music-bar" hide=${!this.player.isPlaying}>
                  <span></span>
                  <span></span>
                  <span></span>
                </div>`:Z` <div class="play-btn">
                  <ha-icon-button .path=${ne} @click=${()=>this.player._playMedia(i)}></ha-icon-button>
                </div>`}

            <div class="border-gradient">
              <img
                src="${i.thumbnail?i.thumbnail:t(a)?this.player.picture:je}"
                loading="lazy"
              />
            </div>
          </div>
          <div class="info">
            ${e?Z`<p class="title">${i.title.split(" - ")[1]}</p>
                  <p class="artist">${i.title.split(" - ")[0]}</p>`:Z`<p class="title">${i.title}</p>`}
          </div>
          <div class="actions" menu-index=${r}>
            ${t(a)?this._renderLikeDislike():q}
            <ha-icon-button @click=${t=>this.toggleMenu(t,r)} .path=${oe}>
            </ha-icon-button>
            ${this._renderActionMenu(r)}
          </div>
        </li>
      `}));return Z`${this.player.playlistTitle?Z`<div class="playlist-title">${this.player.playlistTitle}</div>`:q}
      <ul class="current-playing animate fadeIn" @scroll=${this._handleScroll}>
        ${i}
      </ul>`}_handleScroll(t){const e=t.target;e.scrollTop+e.clientHeight>=e.scrollHeight-100&&this._loadMoreItems()}_loadMoreItems(){this._currentChunkIndex<this._chunks.length-1&&this._currentChunkIndex++}_renderLikeDislike(){const t=this.player._attr.likeStatus;return Z`
      <div class="like-wrapper">
        <ha-icon-button
          .path=${"LIKE"===t?ye:ke}
          @click=${()=>this._handleLikeState("up")}
        ></ha-icon-button>
        <ha-icon-button
          .path=${"DISLIKE"===t?be:me}
          @click=${()=>this._handleLikeState("down")}
        ></ha-icon-button>
      </div>
    `}_handleLikeState(t){const e=this.player._attr.likeStatus,i=t=>{this.player.ytubeHassAction("rate_track",{rating:t})};switch(t){case"up":i("LIKE"===e?"thumb_middle":"thumb_up");break;case"down":i("DISLIKE"===e?"thumb_middle":"thumb_down")}}_renderActionMenu(t){if(t!==this._activeActionIndex)return Z``;const e=this.playlist[t];let i=[];return i=(-1===this.player.currentTrack?0:this.player.currentTrack)!==t?[{name:"Play item",icon:Bt.PLAY,action:()=>this.player._playMedia(e)},{name:"Go to artist",icon:Bt.ARTIST,action:()=>this._dispatchAction("findArtist",e)}]:[{name:"Start radio on song",icon:Bt.RADIO,action:()=>this._dispatchAction("radio",e)},{name:"Go to album",icon:Bt.ALBUM,action:()=>this._dispatchAction("album",e)},{name:"Go to artist",icon:Bt.ARTIST,action:()=>this._dispatchAction("artist",e)}],Z`
      <ul class="menu-content">
        ${i.map((t=>Z`
            <li class="sub-action-menu" @click=${()=>t.action()}>
              <ha-icon class="action-icon" .icon=${t.icon}></ha-icon>
              ${t.name}
            </li>
          `))}
      </ul>
    `}toggleMenu(t,e){t.stopPropagation(),this._activeActionIndex=this._activeActionIndex===e?null:e,null!==this._activeActionIndex&&document.addEventListener("click",this._handleOutsideClick)}async _dispatchAction(t,e){this.dispatchEvent(new CustomEvent("action",{detail:{action:t,item:e}}))}_computeStyle(){const t=Ve(getComputedStyle(this).getPropertyValue("--ytb-background-color"));return Jt({"--ytb-background-color-rgba":t})}};t([gt()],Ze.prototype,"player",void 0),t([gt()],Ze.prototype,"extra",void 0),t([gt()],Ze.prototype,"playlist",void 0),t([bt()],Ze.prototype,"_activeTabIndex",void 0),t([bt()],Ze.prototype,"_activeActionIndex",void 0),t([bt()],Ze.prototype,"_currentChunkIndex",void 0),t([bt()],Ze.prototype,"_chunkSize",void 0),t([bt()],Ze.prototype,"_chunks",void 0),t([bt()],Ze.prototype,"_renderedItems",void 0),t([bt()],Ze.prototype,"_prevTitle",void 0),Ze=t([dt("ytube-current-playlist")],Ze);let We=class extends ct{constructor(){super(...arguments),this._playlist=[]}static get styles(){return Ne}connectedCallback(){super.connectedCallback(),window.YtubePlayerCard=this}async firstUpdated(t){super.firstUpdated(t)}updated(t){super.updated(t),t.has("player")&&this._getCurrentPlaylist()}shouldUpdate(t){return t.has("_playlist"),!0}async _reloadPlaylist(){let t=[];const{_media_id:e,_media_type:i}=this.player._attr;t=(await this.player._getItemLibrary(i,e)).children,this._elPlaylist.playlist=t,this.requestUpdate()}async _getCurrentPlaylist(){if(!this.player)return;let t=[];t=this.player.isActive?(await this.player._getItemLibrary("cur_playlists","")).children:(await this.player._getItemLibrary("history","")).children,this._elPlaylist.playlist=t,this._playlist=t}render(){return this.player=this.store.player,this.extra=this.store.extra,this.hassServices=this.store.hassServices,Z`
      <ytube-current-playlist
        .player=${this.player}
        .extra=${this.extra}
        @action=${t=>this._handleAction(t.detail)}
      ></ytube-current-playlist>
    `}_handleAction(t){const{action:e,item:i}=t,r=(t,e)=>{const i=new CustomEvent("action",{detail:{searchValue:t,searchFilter:e},bubbles:!0,composed:!0});this.dispatchEvent(i)};switch(e){case"artist":r(this.player._attr.media_artist,"");break;case"album":this.hassServices.browseMedia("album_of_track","1").then((t=>{this.store.card._elBrowser._browse(t)}));break;case"radio":this.player.ytubeHassAction("start_radio");break;case"findArtist":r(i.title.split(" - ")[0],"")}}};var qe;t([gt({attribute:!1})],We.prototype,"store",void 0),t([bt()],We.prototype,"player",void 0),t([bt()],We.prototype,"extra",void 0),t([bt()],We.prototype,"hassServices",void 0),t([bt()],We.prototype,"_playlist",void 0),t([yt("ytube-current-playlist")],We.prototype,"_elPlaylist",void 0),We=t([dt("ytube-player-card")],We),function(t){t.LYRICS="lyrics",t.SEARCH="search",t.PLAYLISTS="playlists",t.TOTAL_TRACKS="total_tracks"}(qe||(qe={}));const Fe=8e3;let Pe=class extends ct{constructor(){super(...arguments),this.activeMenu="home",this.isSidebarHidden=!1,this.prevThumbnail="",this.searchValue="",this.isSearchActive=!1,this.searchFilter="",this.searchTimeout=null}static get styles(){return[n`
        :host {
          --card-background-color: #10153dcc;
        }
        ha-list-item {
          --mdc-list-side-padding: 20px;
          --mdc-list-side-padding-right: 20px;
          --mdc-list-side-padding-left: 20px;
          padding: 20px !important;
          margin: auto !important;
        }
      `,Ne]}firstUpdated(t){super.firstUpdated(t)}updated(t){super.updated(t),t.has("player")&&this.player.picture&&(this.prevThumbnail=this.player.picture)}shouldUpdate(t){return t.has("isSidebarHidden")||t.has("prevThumbnail")&&this.prevThumbnail===this.player.picture&&setTimeout((()=>{this.prevThumbnail=je}),3e3),!0}render(){const t=this._renderSeachBar(),e=this._renderMainMenu();return Z` <div class="menu-wrapper">
      <div class="menu-header">${t} ${e}</div>
    </div>`}_renderSeachBar(){return Z` <div class="search-box" search-active=${this.isSearchActive}>
      <div class="search-icon" @click=${()=>this.isSearchActive=!this.isSearchActive}>
        <ha-icon icon=${this.isSearchActive?Bt.CLOSE:Bt.SEARCH}></ha-icon>
      </div>
      <div class="search-container" search-active=${this.isSearchActive}>
        <div class="search-wrap">
          <form role="search" class="search-form" @submit=${t=>this._handleSubmitSearch(t)}>
            <input
              type="search"
              class="search-input"
              placeholder="Search by artist, album, track, playlist..."
              .value=${this.searchValue}
              @input=${t=>this._handleSearch(t)}
            />
          </form>
          <ha-icon
            class="search-icon"
            style="opacity: 0.5"
            icon=${Bt.SEARCH}
            @click=${t=>this._handleSubmitSearch(t)}
          ></ha-icon>
          <ha-combo-box
            class="search-filter"
            .item-path-value=${"value"}
            .item-path-label=${"label"}
            .placeholder=${"Filter"}
            .item-value-path=${"value"}
            .item-label-path=${"label"}
            .items=${[{value:"album",label:"Albums"},{value:"artist",label:"Artists"},{value:"playlist",label:"Playlists"},{value:"song",label:"Tracks"}]}
            .value=${this.searchFilter}
            @value-changed=${t=>this.searchFilter=t.detail.value}
          >
          </ha-combo-box>
        </div>
      </div>
    </div>`}_renderMainMenu(){let t=this.elements;const e={history:Bt.HISTORY,home:Bt.HOME,mood_overview:Bt.MUSIC},i=t=>t.map((t=>Z`
          <li
            class="nav-item ${this.activeMenu===t.title.toLowerCase()?"active":""}"
            @click=${()=>this._toggleMenu(t)}
          >
            <ha-icon class="nav-icon" icon=${e[t.media_content_type]}></ha-icon>
            <span class="nav-text"> ${t.title} </span>
          </li>
        `));t=t.filter((t=>!Rt.includes(t.media_content_type)));const r=this.filterItemsToGroup(t,"library"),a=this.filterItemsToGroup(t,"user"),o=[{title:"Library",items:r,icon:Bt.LIBRARY},{title:"Uploaded",items:a,icon:Bt.ALBUM}],s=t.filter((t=>!t.media_content_type.startsWith("library_")&&!t.media_content_type.startsWith("user_"))),n=o.map((t=>{const e=t.title.toLowerCase(),r=this.activeMenu.split(" ")[0]===e;return t.items.length>0?Z`
            <li class="nav-item ${r?"active":""} has-dropdown">
              <ha-icon class="nav-icon" icon=${t.icon}></ha-icon>
              <span class="nav-text"> ${t.title} </span>
              <ul class="sub-menu">
                ${i(t.items)}
              </ul>
            </li>
          `:""})),A=i(s);return Z` <ul class="main-menu" search-active=${this.isSearchActive}>
      ${A}${n}
    </ul>`}filterItemsToGroup(t,e){return t.filter((t=>t.media_content_type.startsWith(e)))}async _handleSubmitSearch(t){t.preventDefault();const e=this.searchValue,i=this.searchFilter,r=new CustomEvent("search-submited",{detail:{searchValue:e,searchFilter:i},bubbles:!0,composed:!0});this.dispatchEvent(r),clearTimeout(this.searchTimeout),this.searchTimeout=setTimeout((()=>{this.isSearchActive&&(this.isSearchActive=!1,this.searchValue="")}),Fe)}_handleSearch(t){t.stopPropagation(),this.searchTimeout&&clearTimeout(this.searchTimeout);const e=t.target;this.searchValue=e.value}async _toggleMenu(t){this.activeMenu=t.title.toLowerCase();const e=new CustomEvent("menu-navigate",{detail:{item:t},bubbles:!0,composed:!0});this.dispatchEvent(e)}};t([bt()],Pe.prototype,"elements",void 0),t([bt()],Pe.prototype,"activeMenu",void 0),t([bt()],Pe.prototype,"isSidebarHidden",void 0),t([bt()],Pe.prototype,"player",void 0),t([bt()],Pe.prototype,"prevThumbnail",void 0),t([bt()],Pe.prototype,"searchValue",void 0),t([bt()],Pe.prototype,"isSearchActive",void 0),t([bt()],Pe.prototype,"searchFilter",void 0),Pe=t([dt("ytube-nav-menu")],Pe);let Xe=class extends ct{constructor(){super(...arguments),this._toggleVolumeControl=!1,this._toggleSourceSelector=!1,this._sourceOptions=[],this._progress=0,this._animationFrameId=null,this._hadleMoreInfo=()=>{wt(this,"hass-more-info",{entityId:this.player.id})}}static get styles(){return Ne}firstUpdated(t){super.firstUpdated(t),this._sourceOptions=this._handleSource()}updated(t){super.updated(t)}shouldUpdate(t){return t.has("player")&&this.player&&this.player.isActive&&this._startProgressUpdate(),!0}render(){if(this.player=this.store.player,!this.player||!this.player.isActive)return Z``;const t={"background-image":`url(${this.player.picture})`,width:"var(--ytb-image-size)",height:"var(--ytb-image-size)"},e={"background-image":"linear-gradient(to right, var(--ytb-background-color) 0%, transparent 100%)",width:"var(--ytb-image-size)",height:"var(--ytb-image-size)"};return Z`
      <div class="ytube-current-playing" style=${this.getComputedStyle()}>
        <div class="background">
          <div class="color-block"></div>
          <div class="image-block" style="${Jt(t)}"></div>
          <div class="gradient-block" style="${Jt(e)}"></div>
        </div>
        <div class="player">
          <div class="top-info">

          ${this._renderTopInfo()}
          ${this._renderSourceSelector()}
          </div>
          <div class="bottom-info">
            <div class="media-info ${this._shouldMarquee()?"marquee":""}">
              ${this._renderMediaInfo()}
            </div>
            <div class="media-controls">
            ${this._renderControl()}
            </div>
            <div class="volume-control" active=${this._toggleVolumeControl}>
            ${this._renderVolumeControl()}
            </div>
          </div>
          <div class="progress">${this._renderProgress()}</div>
        </div>
      </div>
    `}_renderTopInfo(){return Z`
      <div class="icon-source">
        <ha-state-icon
          .stateObj=${this.player}
          icon="mdi:speaker"
          @click=${()=>this._toggleSourceSelector=!this._toggleSourceSelector}
          .hass=${this.store.hass}
        ></ha-state-icon>
        <div>${this.player.remotePlayerName}</div>
        <div>
          <ha-icon-button
            class="more-info"
            .path=${oe}
            @click=${()=>this._hadleMoreInfo()}
          ></ha-icon-button>
        </div>
      </div>
    `}_renderSourceSelector(){if(!this._toggleSourceSelector)return q;const t=this._sourceOptions,e=t=>t===this.player._attr.remote_player_id;return Z`
      <ul class="source-selector">
        ${t.map((t=>Z`
            <li
              class="sub-action-menu"
              ?disabled=${e(t.value)}
              @click=${e=>{this.player.callService(e,"select_source",{source:t.value}),setTimeout((()=>{this._toggleSourceSelector=!1}),300)}}
            >
              <ha-icon
                class="action-icon"
                .icon=${e(t.value)?"mdi:check":"mdi:checkbox-blank-outline"}
              ></ha-icon>
              ${t.label}
            </li>
          `))}
      </ul>
    `}_renderMediaInfo(){const{media_title:t,media_artist:e}=this.player._attr;return Z`
      <div class="media-title"><span>${t}</span></div>
      <div class="media-artist">${e}</div>
    `}_shouldMarquee(){var t,e;const i=null===(t=this.shadowRoot)||void 0===t?void 0:t.querySelector(".media-title");if(!i)return!1;const{width:r}=i.getBoundingClientRect();return((null===(e=i.querySelector("span"))||void 0===e?void 0:e.getBoundingClientRect().width)||0)>r}_renderControl(){const{isPlaying:t,repeat:e}=this.player,i=t?se:ne,r="all"===e?le:"one"===e?he:ce,a=this.player.shuffle?pe:de,o=[{icon:this._toggleVolumeControl?re:Se,action:()=>{this._toggleVolumeControl=!this._toggleVolumeControl}},{icon:ge,action:t=>this.player.prev(t)},{icon:i,action:t=>this.player.playPause(t)},{icon:ue,action:t=>this.player.next(t)}],s=[{icon:r,action:t=>this.player.toggleRepeat(t)},{icon:a,action:t=>this.player.toggleShuffle(t)}];return Z`
        <div class="volume-control">
        ${o.map((t=>Z` <ha-icon-button .path=${t.icon} @click=${t.action}></ha-icon-button> `))}
        </div>
        <div class="media-control">
          ${s.map((t=>Z` <ha-icon-button .path=${t.icon} @click=${t.action}></ha-icon-button> `))}
        </div>
      </div>

    `}_renderVolumeControl(){const t=100*this.player._attr.volume_level,e=this.player.muted?Ee:Se;return Z`
      <div class="ha-volume-control">
        <ha-icon-button .path=${e} @click=${t=>this.player.toggleMute(t)}></ha-icon-button>
        <ha-icon-button
          .path=${fe}
          @click=${t=>this.player.volumeDown(t)}
        ></ha-icon-button>
        <ha-control-slider
          style="${Jt({"--control-slider-color":"var(--ytb-foreground-color)","--control-slider-thickness":"20px"})}"
          class="volume-slider"
          .value=${t}
          @value-changed=${t=>this.player.setVolume(t,t.detail.value)}
        ></ha-control-slider>
        <ha-icon-button .path=${ve} @click=${t=>this.player.volumeUp(t)}></ha-icon-button>
      </div>
    `}_renderProgress(){return Z` <div class="progress-bar-background">
      <div class="progress-bar" style="width: ${this._progress}%"></div>
    </div>`}_startProgressUpdate(){const t=()=>{setTimeout((()=>{const{media_position_updated_at:e,media_position:i,media_duration:r}=this.player._attr;let a=0,o=i;if(this.player.isPlaying){const t=new Date(e).getTime()/1e3;o=i+(Date.now()/1e3-t),a=o/r*100}else this.player.isPaused&&(a=i/r*100);this._progress=Math.min(a,100),this._animationFrameId=requestAnimationFrame(t)}),1e3)};t()}getComputedStyle(){const t=window.innerWidth;return Jt({"--ytb-image-size":t>1024?"200px":"176px"})}_handleSource(){const t=Object.keys(this.store.hass.states).filter((t=>t.startsWith("media_player."))),e=[];for(const i of t){const t=this.store.hass.states[i],r=t.attributes.friendly_name||t.entity_id;t&&e.push({value:i,label:r})}return e}};t([gt({attribute:!1})],Xe.prototype,"store",void 0),t([bt()],Xe.prototype,"player",void 0),t([bt()],Xe.prototype,"_toggleVolumeControl",void 0),t([bt()],Xe.prototype,"_toggleSourceSelector",void 0),t([bt()],Xe.prototype,"_sourceOptions",void 0),t([bt()],Xe.prototype,"_progress",void 0),t([bt()],Xe.prototype,"_animationFrameId",void 0),Xe=t([dt("ytube-current-playing")],Xe);let _e=class extends ct{constructor(){super(...arguments),this.isSidebarHidden=!1,this.prevThumbnail=""}static get styles(){return Ne}firstUpdated(t){super.firstUpdated(t)}updated(t){super.updated(t),t.has("player")&&this.player.picture&&(this.prevThumbnail=this.player.picture)}shouldUpdate(t){return t.has("isSidebarHidden")||t.has("prevThumbnail")&&this.prevThumbnail===this.player.picture&&setTimeout((()=>{this.prevThumbnail=je}),3e3),!0}_renderToggleSidebar(){const t=this._renderPlayingStatus();return Z` <div class="toggle-sidebar" sidebar-active=${!this.isSidebarHidden} player-state=${this.player.state}>
      ${t}
      <div class="toggle-btn" @click=${()=>this.store.card.toggleSideBar()}>
        <ha-icon class="toggle-icon" icon=${this.isSidebarHidden?Bt.CHEVRON_LEFT:Bt.CHEVRON_RIGHT}></ha-icon>
      </div>
    </div>`}_renderPlayingStatus(){if(!this.player)return Z``;const t=Z`
      <li class="music-info">
        <span class="artist">${this.player._attr.media_artist}</span>
        <span class="title">${this.player._attr.media_title}</span>
      </li>
    `,e=Z`
      <li class="thumbnail-wrapper" player-state=${this.player.state}>
        <img src="${this.player.picture?this.player.picture:this.prevThumbnail}" loading="lazy" />
      </li>
    `;return Z` <div
      class="playing-status-containter"
      player-state=${this.player.state}
      sidebar-active=${!this.isSidebarHidden}
    >
      <ul class="main-menu playing-status">
        ${t} ${e}
      </ul>
    </div>`}render(){this.player=this.store.player,this.isSidebarHidden=this.store.card._isSidebarHidden;return this._renderToggleSidebar()}toggleSidebar(){const t=new CustomEvent("toggle-sidebar",{bubbles:!0,composed:!0});this.dispatchEvent(t)}};t([gt({attribute:!1})],_e.prototype,"store",void 0),t([bt()],_e.prototype,"player",void 0),t([bt()],_e.prototype,"isSidebarHidden",void 0),t([bt()],_e.prototype,"prevThumbnail",void 0),_e=t([dt("ytube-mini-playing")],_e);var $e="data:image/jpeg;base64,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";class ti extends ct{constructor(){super(...arguments),this.menuItems=[],this.homepageItems={},this._isContentReady=!1,this.foregroundColor="",this.backgroundColor="",this._isSidebarHidden=!0,this._prevPicture=""}set hass(t){this._hass=t;const e=this._hass.states[this.config.entity];if(e&&(this.player=new Lt(this._hass,e)),this.config.extra&&""!==this.config.extra){const t=this._hass.states[this.config.extra];t&&(this._extraEntity=Object.assign({state:t.state},t.attributes))}}static getConfigElement(){return document.createElement("ytube-music-card-editor")}static async getStubConfig(t){return{type:"custom:ytube-music-card",entity:await Yt(t)||""}}async setConfig(t){if(!t)throw new Error("Invalid configuration");this.config=structuredClone(t)}connectedCallback(){super.connectedCallback(),te(),window.addEventListener("resize",(()=>{this.computeStyles()}))}disconnectedCallback(){super.disconnectedCallback()}async firstUpdated(t){super.firstUpdated(t),await this._loadInitialContent()}async _loadInitialContent(){if(this._isContentReady=!1,this.config.entity){const[t,e]=await Promise.all([this.store.hassServices.browseMedia("library","library"),this.store.hassServices.browseMedia("home","")]);this.menuItems=t.children,this.initialAction=e}this._isContentReady=!0}updated(t){super.updated(t)}shouldUpdate(t){var e;return!(!this.config||!this._hass)&&(t.has("player")&&this.player.isActive&&(this._prevPicture=null===(e=t.get("player"))||void 0===e?void 0:e.picture,this._setColors()),xt(this,t,!0))}createStore(){this._extraEntity?this.store=new Kt(this._hass,this.player,this,this._extraEntity):this.store=new Kt(this._hass,this.player,this)}render(){if(!this._hass||!this.config)return Z``;this.createStore();const t=Z`<ytube-loader></ytube-loader>`,e=Z` <div class="main-left">
        <div class="main-content">
          <div class="menu-row">
            <ytube-nav-menu
              .elements=${this.menuItems}
              @menu-navigate=${t=>this._elBrowser.loadElementFromMenu(t.detail.item)}
              .isSidebarHidden=${this._isSidebarHidden}
              .player=${this.player}
              @search-submited=${t=>this._handleSearch(t)}
            ></ytube-nav-menu>
          </div>
          <div class="browser-content" id="main">
            <ytube-browser-card
              .store=${this.store}
              .initialAction=${this.initialAction}
              @reload-playlist=${()=>this._elPlayer._getCurrentPlaylist()}
            ></ytube-browser-card>
          </div>
          <div class="now-playing" sidebar-hidden=${this._isSidebarHidden}>
            <ytube-mini-playing
              .store=${this.store}
            ></ytube-mini-playing>
          </div>
        </div>
      </div>
      <div hide=${this._isSidebarHidden} class="sidebar-right ${this.player.isActive?"active":""}" id="sidebar">
        <div class="sidebar-header">
          <ha-icon-button
            .path=${ae}
            @click=${()=>this.toggleSideBar()}
            class="close-button"
          ></ha-icon-button>
        </div>

        ${this._renderCoverBackground()}
        <div class="sidebar" style=${this._getMaxPlaylistHeight()}>
          <div class="player-card">
            <ytube-player-card
              .store=${this.store}
              @action=${t=>this._handleSearch(t)}
            ></ytube-player-card>
          </div>
        </div>
        <div class="footer-player">
          <ytube-current-playing .store=${this.store}> </ytube-current-playing>
        </div>
      </div>`;return Z` <ha-card style="background-image: url(${$e})">
      <main style=${this.computeStyles()}>${this._isContentReady?e:t}</main>
    </ha-card>`}_renderCoverBackground(){return this._isSidebarHidden?q:this.player.picture&&this.player.isActive?Z`<div
      class="cover-background"
      style="background-image: linear-gradient(to top, var(--ytb-background-color) 30%, transparent 60%), url('${this.player.picture}')"
    ></div>`:q}async _handleSearch(t){t.stopPropagation();const e=t.detail.searchValue,i=t.detail.searchFilter;if(""===e)return;let r={};r=""===i||void 0!==i?{query:e}:{query:e,filter:i},this.store.hassServices.callYtubeService("search",r);try{const t=await this.store.hassServices.browseMedia("search","");t&&this._elBrowser._browse(t)}catch(t){}}toggleSideBar(){this._isSidebarHidden=!this._isSidebarHidden,this.updateComplete.then((()=>{this.computeStyles()}))}computeStyles(){if(!this._main||!this._sidebar)return;const t=window.innerWidth,e=this._main.offsetHeight,i=t<=1024?42:56,r=t<=1024?4:3,a=t<=1024?14:28,o=this.getMaxColumns();let s=Math.floor(e-i)/r;s=this._elBrowser._browseHistory&&this._elBrowser._browseHistory.length>1?s-28:s;const n=s*r+i;return this.requestUpdate(),Jt(Object.assign({"--ytb-grid-gap":`${a}px`,"--ytb-grid-auto-rows":`${s}px`,"--ytb-grid-template-columns":`repeat(${o}, 1fr)`,"--ytb-max-grid-content-height":`${n}px`},this.foregroundColor&&this.player.isActive&&{"--ytb-foreground-color":this.foregroundColor,"--ytb-background-color":this.backgroundColor}))}getMaxColumns(){const t=window.innerWidth,e=this._isSidebarHidden;let i;return i=t<=600?3:t<=1024?4:t<=1440?e?6:4:t<=1800?e?7:5:e?9:7,i}async _setColors(){if(!this.player.picture)return this.foregroundColor="",void(this.backgroundColor="");if(this._prevPicture!==this.player.picture)try{[this.foregroundColor,this.backgroundColor]=await $t(this.player.picture)}catch(t){this.foregroundColor="",this.backgroundColor=""}}_getMaxPlaylistHeight(){if(!this._sidebar)return;const t=this._sidebar.offsetHeight,e=this.player.isActive?200:0;return Jt({"--ytb-tab-max-height":`${t-e-100}px`})}static get styles(){return Ne}getCardSize(){return 5}}t([gt({attribute:!1})],ti.prototype,"hass",null),t([bt()],ti.prototype,"_hass",void 0),t([bt()],ti.prototype,"config",void 0),t([bt()],ti.prototype,"player",void 0),t([bt()],ti.prototype,"_extraEntity",void 0),t([bt()],ti.prototype,"store",void 0),t([bt()],ti.prototype,"initialAction",void 0),t([bt()],ti.prototype,"menuItems",void 0),t([bt()],ti.prototype,"homepageItems",void 0),t([bt()],ti.prototype,"_isContentReady",void 0),t([bt()],ti.prototype,"foregroundColor",void 0),t([bt()],ti.prototype,"backgroundColor",void 0),t([bt()],ti.prototype,"_isSidebarHidden",void 0),t([bt()],ti.prototype,"_prevPicture",void 0),t([yt("ytube-player-card")],ti.prototype,"_elPlayer",void 0),t([yt("ytube-browser-card")],ti.prototype,"_elBrowser",void 0),t([yt("ytube-search-card")],ti.prototype,"_componentSearch",void 0),t([yt("ytube-nav-menu")],ti.prototype,"_elNavMenu",void 0),t([yt("ytube-current-playing")],ti.prototype,"_elPlaying",void 0),t([yt("#main")],ti.prototype,"_main",void 0),t([yt("#sidebar")],ti.prototype,"_sidebar",void 0),window.customCards=window.customCards||[],window.customCards.push({type:"ytube-music-card",name:"Ytube Music Card",description:"A custom card to display the current lunar phase.",preview:!0}),customElements.define("ytube-music-card",ti),customElements.define("ytube-music-card-editor",ee);
