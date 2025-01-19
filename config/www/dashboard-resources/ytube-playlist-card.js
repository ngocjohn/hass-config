function t(t,e,i,s){var r,o=arguments.length,n=o<3?e:null===s?s=Object.getOwnPropertyDescriptor(e,i):s;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(t,e,i,s);else for(var a=t.length-1;a>=0;a--)(r=t[a])&&(n=(o<3?r(n):o>3?r(e,i,n):r(e,i))||n);return o>3&&n&&Object.defineProperty(e,i,n),n}console.groupCollapsed("%c   Ytube Playlist Card   \n%c   v1.0.0                ","color: orange; font-weight: bold; background: black","color: white; font-weight: bold; background: dimgray"),console.info("YouTube Music Playlist Card for Home Assistant"),console.info("Github: https://github.com/ngocjohn/ytube-playlist-card"),console.info("If you like the card, consider supporting the developer: https://github.com/sponsors/ngocjohn"),console.groupEnd(),"function"==typeof SuppressedError&&SuppressedError;
/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const e=globalThis,i=e.ShadowRoot&&(void 0===e.ShadyCSS||e.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,s=Symbol(),r=new WeakMap;class o{constructor(t,e,i){if(this._$cssResult$=!0,i!==s)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=e}get styleSheet(){let t=this.o;const e=this.t;if(i&&void 0===t){const i=void 0!==e&&1===e.length;i&&(t=r.get(e)),void 0===t&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),i&&r.set(e,t))}return t}toString(){return this.cssText}}const n=t=>new o("string"==typeof t?t:t+"",void 0,s),a=(t,...e)=>{const i=1===t.length?t[0]:e.reduce(((e,i,s)=>e+(t=>{if(!0===t._$cssResult$)return t.cssText;if("number"==typeof t)return t;throw Error("Value passed to 'css' function must be a 'css' function result: "+t+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(i)+t[s+1]),t[0]);return new o(i,t,s)},l=(t,s)=>{if(i)t.adoptedStyleSheets=s.map((t=>t instanceof CSSStyleSheet?t:t.styleSheet));else for(const i of s){const s=document.createElement("style"),r=e.litNonce;void 0!==r&&s.setAttribute("nonce",r),s.textContent=i.cssText,t.appendChild(s)}},d=i?t=>t:t=>t instanceof CSSStyleSheet?(t=>{let e="";for(const i of t.cssRules)e+=i.cssText;return n(e)})(t):t
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */,{is:c,defineProperty:h,getOwnPropertyDescriptor:u,getOwnPropertyNames:p,getOwnPropertySymbols:_,getPrototypeOf:m}=Object,g=globalThis,y=g.trustedTypes,v=y?y.emptyScript:"",f=g.reactiveElementPolyfillSupport,b=(t,e)=>t,$={toAttribute(t,e){switch(e){case Boolean:t=t?v:null;break;case Object:case Array:t=null==t?t:JSON.stringify(t)}return t},fromAttribute(t,e){let i=t;switch(e){case Boolean:i=null!==t;break;case Number:i=null===t?null:Number(t);break;case Object:case Array:try{i=JSON.parse(t)}catch(t){i=null}}return i}},w=(t,e)=>!c(t,e),x={attribute:!0,type:String,converter:$,reflect:!1,hasChanged:w};Symbol.metadata??=Symbol("metadata"),g.litPropertyMetadata??=new WeakMap;class A extends HTMLElement{static addInitializer(t){this._$Ei(),(this.l??=[]).push(t)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(t,e=x){if(e.state&&(e.attribute=!1),this._$Ei(),this.elementProperties.set(t,e),!e.noAccessor){const i=Symbol(),s=this.getPropertyDescriptor(t,i,e);void 0!==s&&h(this.prototype,t,s)}}static getPropertyDescriptor(t,e,i){const{get:s,set:r}=u(this.prototype,t)??{get(){return this[e]},set(t){this[e]=t}};return{get(){return s?.call(this)},set(e){const o=s?.call(this);r.call(this,e),this.requestUpdate(t,o,i)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)??x}static _$Ei(){if(this.hasOwnProperty(b("elementProperties")))return;const t=m(this);t.finalize(),void 0!==t.l&&(this.l=[...t.l]),this.elementProperties=new Map(t.elementProperties)}static finalize(){if(this.hasOwnProperty(b("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(b("properties"))){const t=this.properties,e=[...p(t),..._(t)];for(const i of e)this.createProperty(i,t[i])}const t=this[Symbol.metadata];if(null!==t){const e=litPropertyMetadata.get(t);if(void 0!==e)for(const[t,i]of e)this.elementProperties.set(t,i)}this._$Eh=new Map;for(const[t,e]of this.elementProperties){const i=this._$Eu(t,e);void 0!==i&&this._$Eh.set(i,t)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(t){const e=[];if(Array.isArray(t)){const i=new Set(t.flat(1/0).reverse());for(const t of i)e.unshift(d(t))}else void 0!==t&&e.push(d(t));return e}static _$Eu(t,e){const i=e.attribute;return!1===i?void 0:"string"==typeof i?i:"string"==typeof t?t.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$ES=new Promise((t=>this.enableUpdating=t)),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach((t=>t(this)))}addController(t){(this._$EO??=new Set).add(t),void 0!==this.renderRoot&&this.isConnected&&t.hostConnected?.()}removeController(t){this._$EO?.delete(t)}_$E_(){const t=new Map,e=this.constructor.elementProperties;for(const i of e.keys())this.hasOwnProperty(i)&&(t.set(i,this[i]),delete this[i]);t.size>0&&(this._$Ep=t)}createRenderRoot(){const t=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return l(t,this.constructor.elementStyles),t}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$EO?.forEach((t=>t.hostConnected?.()))}enableUpdating(t){}disconnectedCallback(){this._$EO?.forEach((t=>t.hostDisconnected?.()))}attributeChangedCallback(t,e,i){this._$AK(t,i)}_$EC(t,e){const i=this.constructor.elementProperties.get(t),s=this.constructor._$Eu(t,i);if(void 0!==s&&!0===i.reflect){const r=(void 0!==i.converter?.toAttribute?i.converter:$).toAttribute(e,i.type);this._$Em=t,null==r?this.removeAttribute(s):this.setAttribute(s,r),this._$Em=null}}_$AK(t,e){const i=this.constructor,s=i._$Eh.get(t);if(void 0!==s&&this._$Em!==s){const t=i.getPropertyOptions(s),r="function"==typeof t.converter?{fromAttribute:t.converter}:void 0!==t.converter?.fromAttribute?t.converter:$;this._$Em=s,this[s]=r.fromAttribute(e,t.type),this._$Em=null}}requestUpdate(t,e,i){if(void 0!==t){if(i??=this.constructor.getPropertyOptions(t),!(i.hasChanged??w)(this[t],e))return;this.P(t,e,i)}!1===this.isUpdatePending&&(this._$ES=this._$ET())}P(t,e,i){this._$AL.has(t)||this._$AL.set(t,e),!0===i.reflect&&this._$Em!==t&&(this._$Ej??=new Set).add(t)}async _$ET(){this.isUpdatePending=!0;try{await this._$ES}catch(t){Promise.reject(t)}const t=this.scheduleUpdate();return null!=t&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(const[t,e]of this._$Ep)this[t]=e;this._$Ep=void 0}const t=this.constructor.elementProperties;if(t.size>0)for(const[e,i]of t)!0!==i.wrapped||this._$AL.has(e)||void 0===this[e]||this.P(e,this[e],i)}let t=!1;const e=this._$AL;try{t=this.shouldUpdate(e),t?(this.willUpdate(e),this._$EO?.forEach((t=>t.hostUpdate?.())),this.update(e)):this._$EU()}catch(e){throw t=!1,this._$EU(),e}t&&this._$AE(e)}willUpdate(t){}_$AE(t){this._$EO?.forEach((t=>t.hostUpdated?.())),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$EU(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(t){return!0}update(t){this._$Ej&&=this._$Ej.forEach((t=>this._$EC(t,this[t]))),this._$EU()}updated(t){}firstUpdated(t){}}A.elementStyles=[],A.shadowRootOptions={mode:"open"},A[b("elementProperties")]=new Map,A[b("finalized")]=new Map,f?.({ReactiveElement:A}),(g.reactiveElementVersions??=[]).push("2.0.4");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const C=globalThis,S=C.trustedTypes,E=S?S.createPolicy("lit-html",{createHTML:t=>t}):void 0,k="$lit$",T=`lit$${Math.random().toFixed(9).slice(2)}$`,P="?"+T,I=`<${P}>`,O=document,U=()=>O.createComment(""),H=t=>null===t||"object"!=typeof t&&"function"!=typeof t,M=Array.isArray,L=t=>M(t)||"function"==typeof t?.[Symbol.iterator],R="[ \t\n\f\r]",z=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,N=/-->/g,j=/>/g,D=RegExp(`>|${R}(?:([^\\s"'>=/]+)(${R}*=${R}*(?:[^ \t\n\f\r"'\`<>=]|("|')|))|$)`,"g"),B=/'/g,W=/"/g,V=/^(?:script|style|textarea|title)$/i,q=t=>(e,...i)=>({_$litType$:t,strings:e,values:i}),Y=q(1),F=Symbol.for("lit-noChange"),G=Symbol.for("lit-nothing"),K=new WeakMap,Z=O.createTreeWalker(O,129);function J(t,e){if(!M(t)||!t.hasOwnProperty("raw"))throw Error("invalid template strings array");return void 0!==E?E.createHTML(e):e}const X=(t,e)=>{const i=t.length-1,s=[];let r,o=2===e?"<svg>":3===e?"<math>":"",n=z;for(let e=0;e<i;e++){const i=t[e];let a,l,d=-1,c=0;for(;c<i.length&&(n.lastIndex=c,l=n.exec(i),null!==l);)c=n.lastIndex,n===z?"!--"===l[1]?n=N:void 0!==l[1]?n=j:void 0!==l[2]?(V.test(l[2])&&(r=RegExp("</"+l[2],"g")),n=D):void 0!==l[3]&&(n=D):n===D?">"===l[0]?(n=r??z,d=-1):void 0===l[1]?d=-2:(d=n.lastIndex-l[2].length,a=l[1],n=void 0===l[3]?D:'"'===l[3]?W:B):n===W||n===B?n=D:n===N||n===j?n=z:(n=D,r=void 0);const h=n===D&&t[e+1].startsWith("/>")?" ":"";o+=n===z?i+I:d>=0?(s.push(a),i.slice(0,d)+k+i.slice(d)+T+h):i+T+(-2===d?e:h)}return[J(t,o+(t[i]||"<?>")+(2===e?"</svg>":3===e?"</math>":"")),s]};class Q{constructor({strings:t,_$litType$:e},i){let s;this.parts=[];let r=0,o=0;const n=t.length-1,a=this.parts,[l,d]=X(t,e);if(this.el=Q.createElement(l,i),Z.currentNode=this.el.content,2===e||3===e){const t=this.el.content.firstChild;t.replaceWith(...t.childNodes)}for(;null!==(s=Z.nextNode())&&a.length<n;){if(1===s.nodeType){if(s.hasAttributes())for(const t of s.getAttributeNames())if(t.endsWith(k)){const e=d[o++],i=s.getAttribute(t).split(T),n=/([.?@])?(.*)/.exec(e);a.push({type:1,index:r,name:n[2],strings:i,ctor:"."===n[1]?rt:"?"===n[1]?ot:"@"===n[1]?nt:st}),s.removeAttribute(t)}else t.startsWith(T)&&(a.push({type:6,index:r}),s.removeAttribute(t));if(V.test(s.tagName)){const t=s.textContent.split(T),e=t.length-1;if(e>0){s.textContent=S?S.emptyScript:"";for(let i=0;i<e;i++)s.append(t[i],U()),Z.nextNode(),a.push({type:2,index:++r});s.append(t[e],U())}}}else if(8===s.nodeType)if(s.data===P)a.push({type:2,index:r});else{let t=-1;for(;-1!==(t=s.data.indexOf(T,t+1));)a.push({type:7,index:r}),t+=T.length-1}r++}}static createElement(t,e){const i=O.createElement("template");return i.innerHTML=t,i}}function tt(t,e,i=t,s){if(e===F)return e;let r=void 0!==s?i._$Co?.[s]:i._$Cl;const o=H(e)?void 0:e._$litDirective$;return r?.constructor!==o&&(r?._$AO?.(!1),void 0===o?r=void 0:(r=new o(t),r._$AT(t,i,s)),void 0!==s?(i._$Co??=[])[s]=r:i._$Cl=r),void 0!==r&&(e=tt(t,r._$AS(t,e.values),r,s)),e}class et{constructor(t,e){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=e}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){const{el:{content:e},parts:i}=this._$AD,s=(t?.creationScope??O).importNode(e,!0);Z.currentNode=s;let r=Z.nextNode(),o=0,n=0,a=i[0];for(;void 0!==a;){if(o===a.index){let e;2===a.type?e=new it(r,r.nextSibling,this,t):1===a.type?e=new a.ctor(r,a.name,a.strings,this,t):6===a.type&&(e=new at(r,this,t)),this._$AV.push(e),a=i[++n]}o!==a?.index&&(r=Z.nextNode(),o++)}return Z.currentNode=O,s}p(t){let e=0;for(const i of this._$AV)void 0!==i&&(void 0!==i.strings?(i._$AI(t,i,e),e+=i.strings.length-2):i._$AI(t[e])),e++}}class it{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(t,e,i,s){this.type=2,this._$AH=G,this._$AN=void 0,this._$AA=t,this._$AB=e,this._$AM=i,this.options=s,this._$Cv=s?.isConnected??!0}get parentNode(){let t=this._$AA.parentNode;const e=this._$AM;return void 0!==e&&11===t?.nodeType&&(t=e.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,e=this){t=tt(this,t,e),H(t)?t===G||null==t||""===t?(this._$AH!==G&&this._$AR(),this._$AH=G):t!==this._$AH&&t!==F&&this._(t):void 0!==t._$litType$?this.$(t):void 0!==t.nodeType?this.T(t):L(t)?this.k(t):this._(t)}O(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}T(t){this._$AH!==t&&(this._$AR(),this._$AH=this.O(t))}_(t){this._$AH!==G&&H(this._$AH)?this._$AA.nextSibling.data=t:this.T(O.createTextNode(t)),this._$AH=t}$(t){const{values:e,_$litType$:i}=t,s="number"==typeof i?this._$AC(t):(void 0===i.el&&(i.el=Q.createElement(J(i.h,i.h[0]),this.options)),i);if(this._$AH?._$AD===s)this._$AH.p(e);else{const t=new et(s,this),i=t.u(this.options);t.p(e),this.T(i),this._$AH=t}}_$AC(t){let e=K.get(t.strings);return void 0===e&&K.set(t.strings,e=new Q(t)),e}k(t){M(this._$AH)||(this._$AH=[],this._$AR());const e=this._$AH;let i,s=0;for(const r of t)s===e.length?e.push(i=new it(this.O(U()),this.O(U()),this,this.options)):i=e[s],i._$AI(r),s++;s<e.length&&(this._$AR(i&&i._$AB.nextSibling,s),e.length=s)}_$AR(t=this._$AA.nextSibling,e){for(this._$AP?.(!1,!0,e);t&&t!==this._$AB;){const e=t.nextSibling;t.remove(),t=e}}setConnected(t){void 0===this._$AM&&(this._$Cv=t,this._$AP?.(t))}}class st{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(t,e,i,s,r){this.type=1,this._$AH=G,this._$AN=void 0,this.element=t,this.name=e,this._$AM=s,this.options=r,i.length>2||""!==i[0]||""!==i[1]?(this._$AH=Array(i.length-1).fill(new String),this.strings=i):this._$AH=G}_$AI(t,e=this,i,s){const r=this.strings;let o=!1;if(void 0===r)t=tt(this,t,e,0),o=!H(t)||t!==this._$AH&&t!==F,o&&(this._$AH=t);else{const s=t;let n,a;for(t=r[0],n=0;n<r.length-1;n++)a=tt(this,s[i+n],e,n),a===F&&(a=this._$AH[n]),o||=!H(a)||a!==this._$AH[n],a===G?t=G:t!==G&&(t+=(a??"")+r[n+1]),this._$AH[n]=a}o&&!s&&this.j(t)}j(t){t===G?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"")}}class rt extends st{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===G?void 0:t}}class ot extends st{constructor(){super(...arguments),this.type=4}j(t){this.element.toggleAttribute(this.name,!!t&&t!==G)}}class nt extends st{constructor(t,e,i,s,r){super(t,e,i,s,r),this.type=5}_$AI(t,e=this){if((t=tt(this,t,e,0)??G)===F)return;const i=this._$AH,s=t===G&&i!==G||t.capture!==i.capture||t.once!==i.once||t.passive!==i.passive,r=t!==G&&(i===G||s);s&&this.element.removeEventListener(this.name,this,i),r&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){"function"==typeof this._$AH?this._$AH.call(this.options?.host??this.element,t):this._$AH.handleEvent(t)}}class at{constructor(t,e,i){this.element=t,this.type=6,this._$AN=void 0,this._$AM=e,this.options=i}get _$AU(){return this._$AM._$AU}_$AI(t){tt(this,t)}}const lt=C.litHtmlPolyfillSupport;lt?.(Q,it),(C.litHtmlVersions??=[]).push("3.2.1");const dt=(t,e,i)=>{const s=i?.renderBefore??e;let r=s._$litPart$;if(void 0===r){const t=i?.renderBefore??null;s._$litPart$=r=new it(e.insertBefore(U(),t),t,void 0,i??{})}return r._$AI(t),r
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */};class ct extends A{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){const t=super.createRenderRoot();return this.renderOptions.renderBefore??=t.firstChild,t}update(t){const e=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=dt(e,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return F}}ct._$litElement$=!0,ct.finalized=!0,globalThis.litElementHydrateSupport?.({LitElement:ct});const ht=globalThis.litElementPolyfillSupport;ht?.({LitElement:ct}),(globalThis.litElementVersions??=[]).push("4.1.1");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const ut=t=>(e,i)=>{void 0!==i?i.addInitializer((()=>{customElements.define(t,e)})):customElements.define(t,e)}
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */,pt={attribute:!0,type:String,converter:$,reflect:!1,hasChanged:w},_t=(t=pt,e,i)=>{const{kind:s,metadata:r}=i;let o=globalThis.litPropertyMetadata.get(r);if(void 0===o&&globalThis.litPropertyMetadata.set(r,o=new Map),o.set(i.name,t),"accessor"===s){const{name:s}=i;return{set(i){const r=e.get.call(this);e.set.call(this,i),this.requestUpdate(s,r,t)},init(e){return void 0!==e&&this.P(s,void 0,t),e}}}if("setter"===s){const{name:s}=i;return function(i){const r=this[s];e.call(this,i),this.requestUpdate(s,r,t)}}throw Error("Unsupported decorator location: "+s)};function mt(t){return(e,i)=>"object"==typeof i?_t(t,e,i):((t,e,i)=>{const s=e.hasOwnProperty(i);return e.constructor.createProperty(i,s?{...t,wrapped:!0}:t),s?Object.getOwnPropertyDescriptor(e,i):void 0})(t,e,i)
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */}function gt(t){return mt({...t,state:!0,attribute:!1})}
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const yt=(t,e,i)=>(i.configurable=!0,i.enumerable=!0,Reflect.decorate&&"object"!=typeof e&&Object.defineProperty(t,e,i),i)
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */;function vt(t,e){return(i,s,r)=>{const o=e=>e.renderRoot?.querySelector(t)??null;if(e){const{get:t,set:e}="object"==typeof s?i:r??(()=>{const t=Symbol();return{get(){return this[t]},set(e){this[t]=e}}})();return yt(i,s,{get(){let i=t.call(this);return void 0===i&&(i=o(this),(null!==i||this.hasUpdated)&&e.call(this,i)),i}})}return yt(i,s,{get(){return o(this)}})}}
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const ft={ATTRIBUTE:1,CHILD:2,PROPERTY:3,BOOLEAN_ATTRIBUTE:4,EVENT:5,ELEMENT:6},bt=t=>(...e)=>({_$litDirective$:t,values:e});class $t{constructor(t){}get _$AU(){return this._$AM._$AU}_$AT(t,e,i){this._$Ct=t,this._$AM=e,this._$Ci=i}_$AS(t,e){return this.update(t,e)}update(t,e){return this.render(...e)}}
/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const wt="important",xt=" !"+wt,At=bt(class extends $t{constructor(t){if(super(t),t.type!==ft.ATTRIBUTE||"style"!==t.name||t.strings?.length>2)throw Error("The `styleMap` directive must be used in the `style` attribute and must be the only part in the attribute.")}render(t){return Object.keys(t).reduce(((e,i)=>{const s=t[i];return null==s?e:e+`${i=i.includes("-")?i:i.replace(/(?:^(webkit|moz|ms|o)|)(?=[A-Z])/g,"-$&").toLowerCase()}:${s};`}),"")}update(t,[e]){const{style:i}=t.element;if(void 0===this.ft)return this.ft=new Set(Object.keys(e)),this.render(e);for(const t of this.ft)null==e[t]&&(this.ft.delete(t),t.includes("-")?i.removeProperty(t):i[t]=null);for(const t in e){const s=e[t];if(null!=s){this.ft.add(t);const e="string"==typeof s&&s.endsWith(xt);t.includes("-")||e?i.setProperty(t,e?s.slice(0,-11):s,e?wt:""):i[t]=s}}return F}});class Ct{constructor(t,e){this.hass=t,this.playerId=e}async browseMedia(t,e){try{return await this.hass.callWS({type:"media_player/browse_media",entity_id:this.playerId,media_content_type:t,media_content_id:e})}catch(t){return null}}}class St{constructor(t){this._entity=t,this.id=t.entity_id,this._state=t.state,this._attr=t.attributes}get isPaused(){return"paused"===this._state}get isPlaying(){return"playing"===this._state}get isIdle(){return"idle"===this._state}get isStandby(){return"standby"===this._state}get isUnavailable(){return"unavailable"===this._state}get isOff(){return"off"===this._state}get isActive(){return!this.isOff&&!this.isUnavailable&&!this.isIdle||!1}get mediaType(){return this._attr._media_type||""}get mediaId(){return this._attr._media_id||""}get currentTrack(){return this._attr.current_track}get playlistTitle(){return this._attr.current_playlist_title||""}get remotePlayerId(){return this._attr.remote_player_id||""}get muted(){return this._attr.is_volume_muted||!1}get shuffle(){return this._attr.shuffle||!1}get repeat(){return this._attr.repeat||"off"}get picture(){return this._attr.entity_picture_local||this._attr.entity_picture}get updatedAt(){return this._attr.media_position_updated_at||0}get position(){return this._attr.media_position||0}get duration(){return this._attr.media_duration||0}get progress(){if(this.isPlaying){const t=(Date.now()-new Date(this.updatedAt).getTime())/1e3;return(this.position+t)/this.duration*100}return this.position/this.duration*100}}class Et{constructor(t,e,i){this.hass=t,this.config=e,this.baseCard=i,this.haService=new Ct(t,e.entity),this.player=this._createPlayer(e.entity),this._extra=this._createExtra()}_createPlayer(t){const e=this.hass.states[t];if(!e)throw new Error("Player entity not found");return new St(e)}_createExtra(){if(this.config.extra){const t=this.hass.states[this.config.extra];if(!t)throw new Error("Extra entity not found");return t}}}const kt=["track","playlist","tv_show","album"],Tt=["cur_playlists","album_of_track","speakers","vid_channel","search"],Pt="M9.829 15.318V8.683l5.748 3.318zM12 6.163A5.838 5.838 0 1 0 17.838 12a5.845 5.845 0 0 0 -5.837 -5.838zm0 12.495A6.659 6.659 0 1 1 18.657 12v0.002A6.66 6.66 0 0 1 12 18.659M12 0.753a11.247 11.247 0 1 0 -0.003 22.494A11.247 11.247 0 0 0 12.002 0.753z";var It;!function(t){t.PLAY="mdi:play",t.PAUSE="mdi:pause",t.STOP="mdi:stop",t.NEXT="mdi:skip-next",t.PREV="mdi:skip-previous",t.REPEAT="mdi:repeat",t.SHUFFLE="mdi:shuffle",t.VOLUME="mdi:volume-high",t.VOLUME_MUTE="mdi:volume-mute",t.LIKE="mdi:thumb-up",t.DISLIKE="mdi:thumb-down",t.CLOSE="mdi:close",t.MENU="mdi:menu",t.SEARCH="mdi:magnify",t.BACK="mdi:arrow-left",t.FORWARD="mdi:arrow-right",t.PLAYLIST="mdi:playlist-music",t.ALBUM="mdi:album",t.ARTIST="mdi:account-music",t.LIBRARY="mdi:file-music",t.HISTORY="mdi:history",t.MUSIC="mdi:music",t.HOME="mdi:home",t.PLAY_CIRCLE="mdi:play-circle",t.CHEVRON_LEFT="mdi:chevron-left",t.CHEVRON_RIGHT="mdi:chevron-right",t.RADIO="mdi:broadcast",t.BROWSE_MEDIA="mdi:music-box-multiple"}(It||(It={}));const Ot=(t,e,i=!1)=>{let s;const r=(...r)=>{const o=i&&!s;clearTimeout(s),s=window.setTimeout((()=>{s=void 0,i||t(...r)}),e),o&&t(...r)};return r.cancel=()=>{clearTimeout(s)},r},Ut=async t=>{const e=(await t.callWS({type:"config/entity_registry/list"})).filter((t=>t.entity_id.startsWith("media_player.")&&"ytube_music_player"===t.platform))[0];return e},Ht=async t=>{const e=await Ut(t).then((t=>t.entity_id));return{entity:e,layout:{type:"grid",max_grid_columns:3,max_grid_rows:3,max_list_items:9,show_header:!0,show_footer:!0}}};function Mt(t,e){if(!Number.isInteger(e)||e<=0)throw new Error("Size must be an integer greater than zero.");const i=Math.ceil(t.length/e),s=Array(i);for(let r=0;r<i;r++){const i=r*e,o=i+e;s[r]=t.slice(i,o)}return s}function Lt(t,e=1){const i=[],s=Math.floor(e),r=(t,e)=>{for(let o=0;o<t.length;o++){const n=t[o];Array.isArray(n)&&e<s?r(n,e+1):i.push(n)}};return r(t,0),i}function Rt(t,e){return new CustomEvent(t,{bubbles:!0,composed:!0,detail:e})}var zt=a`*,
*::before,
*::after {
	box-sizing: border-box;
}

ha-card {
	position: relative;
	overflow: hidden;
	width: 100%;
	height: 100%;
	/* border: none !important; */
	/* border-radius: 0 !important; */
	/* background: none !important; */
	/* background: var(--card-background-color); */
	margin: 0;
	/* padding: 0; */
}


footer {
	position: sticky;
	bottom: 0;
	width: 100%;
	background: inherit;
	color: inherit;
	/* font-size: 0.8em; */
	height: -moz-fit-content;
	height: fit-content;
}

footer .footer-content {
	display: flex;
	justify-content: flex-start;
	align-items: center;
}

.footer-icon {
	width: 48px;
	width: var(--mdc-icon-button-size, 48px);
	height: 48px;
	height: var(--mdc-icon-button-size, 48px);
	padding: calc((48px - 24px)/ 2);
	padding: calc((var(--mdc-icon-button-size, 48px) - var(--mdc-icon-size, 24px))/ 2);
	align-items: center;
	display: inline-flex;
	justify-content: center;
	border-radius: 50%;
	position: relative;
	cursor: pointer;
}

.footer-icon:hover::before {
	content: '';
	position: absolute;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	background-color: #000;
	background-color: var(--mdc-ripple-color, #000);
	border-radius: 50%;
	opacity: 0.1;
}

.footer-icon:active::before {
	opacity: 0.2;
}

.footer-icon.push {
	margin-left: auto;
}

@keyframes fade-in {
	from {
		opacity: 0;
	}

	to {
		opacity: 1;
	}
}

.fade-in {
	animation: fade-in 0.4s ease-in-out;
	transition: all 0.3s ease-in-out;
}`;let Nt=class extends ct{constructor(){super(...arguments),this._currentChunkIndex=0,this._chunkSize=9,this._chunks=[],this._renderedItems=[],this._totalItemsHeight=0}connectedCallback(){super.connectedCallback(),window.YtubeGrid=this}firstUpdated(t){super.firstUpdated(t)}updated(t){super.updated(t),t.has("element")&&(this._chunks=[],this._currentChunkIndex=0)}shouldUpdate(t){return t.has("element"),!0}render(){var t,e;const i=this.element||[];this._chunkSize=((null===(t=this.store.config.layout)||void 0===t?void 0:t.max_grid_columns)||3)*((null===(e=this.store.config.layout)||void 0===e?void 0:e.max_grid_rows)||3)+1,0===this._chunks.length&&(this._chunks=Mt(i,this._chunkSize)),this._renderedItems=Lt(this._chunks.slice(0,this._currentChunkIndex+1));const s=t=>{const{thumbnail:e,title:i}=t;return Y`
        <div class="grid-item" ?no-thumbnail=${!e} @click=${()=>this._handleClick(t)}>
          <div class="grid-item-thumbnail">
            ${e?Y`<img src="${e}" loading="lazy" alt="${i}" />`:Y`<ha-icon icon=${It.PLAYLIST}></ha-icon>`}
          </div>
          <div class="grid-item-title">
            <span>${i}</span>
          </div>
        </div>
      `};return Y`
      <div class="grid fade-in" style=${this._computeGridStyles()} @scroll=${this._handleScroll}>
        ${this._renderedItems.map((t=>s(t)))}
      </div>
    `}_computeGridStyles(){var t,e,i,s,r;if(!(null===(t=this.shadowRoot)||void 0===t?void 0:t.querySelector(".grid")))return;const o=(null===(e=this.element)||void 0===e?void 0:e.length)+1<=this._chunkSize,n=this.store.config,a=(null===(i=n.layout)||void 0===i?void 0:i.max_grid_columns)||3,l=(null===(s=n.layout)||void 0===s?void 0:s.max_grid_rows)||3,d=this.store.baseCard._cardWidth/a*.9,c=d+8,h=c*l+(8*l-1)+"px",u=a<=3?"1em":"0.5em";return this._totalItemsHeight=(null===(r=this.element)||void 0===r?void 0:r.length)/a*c,At({"grid-template-columns":`repeat(auto-fill, minmax(${d}px, 1fr))`,"grid-auto-rows":`${c}px`,"grid-gap":"8px","max-height":h,"min-height":h,"overflow-y":o?"hidden":"auto","--ytb-grid-item-border-radius":u})}_handleScroll(t){const e=t.target;e.scrollHeight-e.scrollTop<=e.clientHeight+1&&this._loadMoreItems();const i=Math.floor((e.scrollTop+e.clientHeight)/this._totalItemsHeight*100);this.dispatchEvent(Rt("item-scroll",{scrollTop:e.scrollTop,scrollHeight:e.scrollHeight,percent:i}))}_loadMoreItems(){this._currentChunkIndex<this._chunks.length-1&&this._currentChunkIndex++}_handleClick(t){this.dispatchEvent(Rt("media-item-click",Object.assign({},t)))}static get styles(){return[zt,a`
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
          padding: 0.5em;
        }

        .grid-item {
          position: relative;
          overflow: hidden;
          height: 100%;
          border-radius: var(--ytb-grid-item-border-radius, 1em);
          cursor: pointer;
          /* box-shadow: rgba(0, 0, 0, 0.5) 0px 0px 10px; */
          border: 2px solid transparent;
          scroll-snap-align: start;
          scroll-snap-stop: normal;
          transition: all 0.4s cubic-bezier(0.075, 0.82, 0.165, 1);
        }
        .grid-item[no-thumbnail] {
          border: 1px solid;
          border-color: var(--ha-card-border-color, var(--divider-color, #e0e0e0));
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
          display: flex;
          place-items: center;
          place-content: center;
        }

        .grid-item-thumbnail:hover {
          filter: brightness(1);
        }

        .grid-item-thumbnail > img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: center;
          transition: all 0.4s cubic-bezier(0.075, 0.82, 0.165, 1);
          filter: blur(0);
          border-radius: var(--ytb-grid-item-border-radius, 1em);
        }

        .grid-item-title {
          position: absolute;
          top: 50%;
          left: 50%;
          opacity: 0;
          display: flex;
          align-items: center;
          justify-content: center;
          height: 100%;
          overflow: hidden;
          text-align: center;
          color: var(--text-primary-color);
          background-color: rgba(0, 0, 0, 0.7);
          backdrop-filter: blur(1px);
          transition: 0.4s cubic-bezier(0.075, 0.82, 0.165, 1);
          transform: translate(-50%, -50%);
          width: 100%;
        }

        .grid-item:hover .grid-item-title {
          opacity: 1;
        }

        .grid-item:hover .grid-item-thumbnail > img {
          scale: 1.2;
          /* overflow: hidden; */
        }
      `]}};t([mt({attribute:!1})],Nt.prototype,"store",void 0),t([mt({attribute:!1})],Nt.prototype,"element",void 0),t([gt()],Nt.prototype,"_currentChunkIndex",void 0),t([gt()],Nt.prototype,"_chunkSize",void 0),t([gt()],Nt.prototype,"_chunks",void 0),t([gt()],Nt.prototype,"_renderedItems",void 0),t([gt()],Nt.prototype,"_totalItemsHeight",void 0),Nt=t([ut("ytube-item-grid")],Nt);let jt=class extends ct{constructor(){super(...arguments),this._currentChunkIndex=0,this._chunkSize=1,this._chunks=[],this._renderedItems=[]}connectedCallback(){super.connectedCallback(),window.YtubeItemList=this}firstUpdated(t){super.firstUpdated(t)}updated(t){super.updated(t),t.has("element")&&(this._chunks=[],this._currentChunkIndex=0)}shouldUpdate(t){return t.has("element"),!0}static get styles(){return[zt,a`
        .ytube-list-container {
          width: 100%;
          height: 100%;
          overflow-y: auto;
          -ms-overflow-style: none;
          scrollbar-width: none;
          scroll-snap-type: y mandatory;
          padding-inline: 0.5em;
        }
        .ytube-list-container::-webkit-scrollbar {
          display: none !important;
        }

        .ytube-list {
          list-style-type: none;
          padding: 0;
          margin: 0;
        }

        .ytube-list-item {
          display: flex;
          align-items: center;
          padding-block: 0.5em;
          cursor: pointer;
          transition: background 0.3s ease-in-out;
          scroll-snap-align: start;
          scroll-snap-stop: always;
          position: relative;
          border-radius: 4px;
        }

        .ytube-list-item:hover {
          /* background: var(--primary-color, #03a9f4); */
          background: rgb(from var(--primary-color) r g b / 40%);
        }

        .list-thumbnail {
          flex: 0 0 48px;
          margin-inline-start: 0.5em;
          margin-inline-end: 1em;
          height: 48px;
        }

        .list-thumbnail img {
          width: 100%;
          height: 100%;
          border-radius: 4px;
        }

        .list-title {
          flex: 1;
        }
      `]}render(){var t;const e=this.element||[];return this._chunkSize=(null===(t=this.store.config.layout)||void 0===t?void 0:t.max_list_items)||10,0===this._chunks.length&&(this._chunks=Mt(e,this._chunkSize)),this._renderedItems=Lt(this._chunks.slice(0,this._currentChunkIndex+1)),Y`
      <div class="ytube-list-container" style=${this._computeListStyle()} @scroll=${this._handleScroll}>
        <ul class="ytube-list">
          ${this._renderedItems.map((t=>Y`
              <li class="ytube-list-item" @click=${()=>this._handleClick(t)}>
                <div class="list-thumbnail">
                  <img src="${t.thumbnail}" alt="${t.title}" loading="lazy" />
                </div>
                <div class="list-title">
                  <span>${t.title}</span>
                </div>
              </li>
            `))}
        </ul>
      </div>
    `}_computeListStyle(){var t,e,i;const s=(null===(t=this.element)||void 0===t?void 0:t.length)<=this._chunkSize,r=(null===(e=this.store.config.layout)||void 0===e?void 0:e.max_list_items)||6,o=s?"unset":62*r-1+"px",n="list"!==(null===(i=this.store.config.layout)||void 0===i?void 0:i.type);return At(n?{"max-height":"var(--ytube-grid-max-height)","overflow-y":"auto"}:{"max-height":o,"overflow-y":"auto"})}_handleScroll(t){const e=t.target;e.scrollHeight-e.scrollTop<=e.clientHeight+1&&this._loadMoreItems();const i=62*this.element.length,s=Math.floor((e.scrollTop+e.clientHeight)/i*100);this.dispatchEvent(Rt("item-scroll",{scrollTop:e.scrollTop,scrollHeight:e.scrollHeight,percent:s}))}_loadMoreItems(){this._currentChunkIndex<this._chunks.length-1&&this._currentChunkIndex++}_handleClick(t){this.dispatchEvent(Rt("media-item-click",Object.assign({},t)))}};t([mt({attribute:!1})],jt.prototype,"store",void 0),t([mt({attribute:!1})],jt.prototype,"element",void 0),t([gt()],jt.prototype,"_currentChunkIndex",void 0),t([gt()],jt.prototype,"_chunkSize",void 0),t([gt()],jt.prototype,"_chunks",void 0),t([gt()],jt.prototype,"_renderedItems",void 0),jt=t([ut("ytube-item-list")],jt);let Dt=class extends ct{constructor(){super(...arguments),this.cardWidth=200}render(){return Y`
      <div class="loader fade-in">
        <div class="music">
          ${Array.from({length:17}).map(((t,e)=>Y`<div class="bar" style=${this._computeBarStyle(e,17)}></div>`))}
        </div>
        <div class="loader-text">Loading...</div>
      </div>
    `}_computeBarStyle(t,e){const i=Math.floor(e/2),s=t<=i?.1+t/i*.6:.5-(t-i)/(e-i-1)*.4;return`${`animation-delay: ${(.2*Math.abs(t-i)).toFixed(2)}s;`} ${`background: rgba(var(--rgb-primary-color), ${s.toFixed(2)});`}`}};Dt.styles=a`
    .loader {
      width: 100%;
      max-width: var(--ytube-card-width, 500px);
      height: var(--ytube-card-height, 500px);
      display: flex;
      justify-content: center;
      align-items: center;
      position: relative;
      /* aspect-ratio: 1; */
    }
    .music {
      width: calc(100% - 16px);
      height: 100%;
      position: relative;
      display: inline-flex;
      align-items: center;
      justify-content: space-around;
    }

    .bar {
      width: 0.9rem;
      border-radius: 0.5rem;
      animation: loader 1.5s ease-out infinite;
    }

    @keyframes loader {
      0%,
      100% {
        height: 2px;
      }
      50% {
        height: 60%;
      }
    }

    .loader-text {
      color: rgba(var(--rgb-primary-color), 0.6);
      position: absolute;
      bottom: 0;
      height: max-content;
      padding: 0.5rem;
      font-size: initial;
      letter-spacing: 2px;
    }
    .fade-in {
      animation: fade-in 0.4s ease-out;
    }
    @keyframes fade-in {
      0% {
        opacity: 0;
      }
      100% {
        opacity: 1;
      }
    }
  `,t([mt({type:Number})],Dt.prototype,"cardWidth",void 0),Dt=t([ut("ytube-playlist-loader")],Dt);let Bt=class extends ct{connectedCallback(){super.connectedCallback();document.querySelector("body").style.overflow="hidden",this._attachEventListeners()}disconnectedCallback(){document.querySelector("body").style.overflow="",super.disconnectedCallback()}firstUpdated(t){super.firstUpdated(t),this._attachEventListeners()}_attachEventListeners(){var t;const e=null===(t=this.shadowRoot)||void 0===t?void 0:t.getElementById("ytube-dialog");if(!e)return;const i=e.querySelector(".dialog-content");i&&(i.classList.toggle("slide-in"),e.addEventListener("click",(t=>{t.target===e&&this._closeDialog()})))}static get styles(){return[a`
        .dialog {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          width: 100%;
          height: 100%;
          z-index: 5;
          background-color: rgba(0, 0, 0, 0.7);
          /* background-color: var(--mdc-dialog-scrim-color, rgba(0, 0, 0, .32)); */
          backdrop-filter: blur(4px);
          display: flex;
          justify-content: center;
          align-items: center;
          border: none;
          padding: 0;
        }
        .dialog[grid] {
          position: fixed !important;
        }

        .dialog-content {
          position: relative;
          width: 80%;
          /* max-width: 800px; */
          max-height: 80%;
          background-color: var(--card-background-color);
          border-radius: var(--ha-card-border-radius, 4px);
          box-shadow: 0 2px 3px rgba(0, 0, 0, 0.16), 0 2px 3px rgba(0, 0, 0, 0.23);
          overflow-y: auto;
          display: block;
        }
        .dialog-header {
          display: flex;
          justify-content: flex-end;
          padding: 1em;
          height: fit-content;
        }
        .content-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
          gap: 1em;
          padding: 1em;
          overflow-y: auto;
        }
      `,zt]}render(){var t;const e="grid"===this.layout,i=(null===(t=this.element)||void 0===t?void 0:t.children)||[];return Y`<dialog id="ytube-dialog" class="dialog" ?grid=${e}>
      <div class="dialog-content">
        <div class="dialog-header">
          <button @click=${()=>this._closeDialog()}>Close</button>
        </div>
        <div class="content-grid">
          ${i.map((t=>Y`<div>
                ${t.thumbnail?Y`<img src=${t.thumbnail} />`:Y`<div>No thumbnail</div>`}
                <div>${t.title}</div>
              </div>`))}
        </div>
      </div>
    </dialog>`}_closeDialog(){const t=new CustomEvent("close-dialog",{detail:{},bubbles:!0,composed:!0});this.dispatchEvent(t)}};t([mt({attribute:!1})],Bt.prototype,"store",void 0),t([mt({type:String})],Bt.prototype,"layout",void 0),t([gt()],Bt.prototype,"element",void 0),Bt=t([ut("ytube-dialog")],Bt);var Wt="M15.41,16.58L10.83,12L15.41,7.41L14,6L8,12L14,18L15.41,16.58Z";
/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Vt=(t,e,i)=>{for(const i of e)if(i[0]===t)return(0,i[1])();return i?.()};let qt=class extends ct{constructor(){super(...arguments),this._browseHistory=[],this._previousScrollTop=0}connectedCallback(){super.connectedCallback(),window.YtubeBrowserCard=this}firstUpdated(t){super.firstUpdated(t)}updated(t){super.updated(t),t.has("initialAction")&&(this._browseHistory=[],this._browse(this.initialAction))}shouldUpdate(t){return t.has("initialAction"),!0}_loadInitialAction(){this._browseHistory=[],this._browse(this.initialAction)}async _browse(t){var e,i;if(this._isListView=!1,this.state=1,this._browseHistory.push(t),t.children&&0===(null===(e=t.children)||void 0===e?void 0:e.length))return this.state=3,void this.requestUpdate();if(t.children&&(null===(i=t.children)||void 0===i?void 0:i.length)>0)return this._isListView=kt.includes(t.media_content_type),this._element=t.children,this.state=4,void this.requestUpdate();try{const e=await this.store.haService.browseMedia(t.media_content_type,t.media_content_id);e?(this._isListView=kt.includes(e.media_content_type),this._element=e.children,this.state=4,this.requestUpdate()):this.state=3}catch(t){this.state=2}this.requestUpdate()}render(){var t;const e=null===(t=this.store.config.layout)||void 0===t?void 0:t.type,i=this.store.baseCard._cardWidth;return Y` <div class="ytube-browse-card" ?navbar=${this._browseHistory.length>1}>
      ${this._renderNavBar()}
      ${Vt(this.state,[[1,()=>Y`<ytube-playlist-loader .cardWidth=${i}></ytube-playlist-loader>`],[3,()=>Y`<div>No result</div>`],[2,()=>Y`<div>Error</div>`],[4,()=>{var t;return Y` <div class="browser-content" ?header=${null===(t=this.store.config.layout)||void 0===t?void 0:t.show_header}>
            ${!0===this._isListView||"list"===e?Y`<ytube-item-list
                  .store=${this.store}
                  .element=${this._element}
                  @media-item-click=${t=>this._handleMediaItemClick(t)}
                  @item-scroll=${t=>this._handleScroll(t)}
                ></ytube-item-list>`:Y`<ytube-item-grid
                  .store=${this.store}
                  .element=${this._element}
                  @media-item-click=${t=>this._handleMediaItemClick(t)}
                  @item-scroll=${t=>this._handleScroll(t)}
                ></ytube-item-grid>`}
          </div>`}]])}
    </div>`}_renderNavBar(){var t;if(!(null===(t=this.store.config.layout)||void 0===t?void 0:t.show_header))return Y``;const e=0===this._browseHistory.length||1===this._browseHistory.length,i=this._browseHistory.length>1?this._browseHistory[this._browseHistory.length-1].title:"Ytube Music playlist card";return Y`
      <div class="nav-bar">
        <ha-icon-button class="nav-bar-icon" .path=${e?Pt:Wt} @click=${e?void 0:()=>this._handleBackClick()}></ha-icon-button>
        <div class="nav-bar-title">${i}</div>
      </div>
    `}_handleScroll(t){var e,i;if(t.stopPropagation(),!(null===(e=this.store.config.layout)||void 0===e?void 0:e.show_header))return;const{scrollTop:s,percent:r}=t.detail,o=null===(i=this.shadowRoot)||void 0===i?void 0:i.querySelector(".browser-content");s>7?(o.classList.add("overlay"),o.style.setProperty("--scroll-progress",`${r}%`)):o.classList.remove("overlay"),this._previousScrollTop=s}_handleBackClick(){this._browseHistory.length>0&&(this._browseHistory=this._browseHistory.slice(0,-1),this._browse(this._browseHistory.pop()))}_handleMediaItemClick(t){const e=t.detail,{can_expand:i}=e;i&&this._browse(e)}static get styles(){return a`
      .ytube-browse-card {
        display: flex;
        flex-direction: column;
        width: 100%;
        height: 100%;
      }
      .nav-bar {
        position: sticky;
        top: 0;
        left: 0;
        width: 100%;
        display: inline-flex;
        align-items: center;
        z-index: 1;
        max-height: 48px;
        transition: max-height 0.3s ease;
        overflow: hidden;
        .nav-bar-icon {
          flex: 0 0 48px;
        }
        .nav-bar-title {
          flex: 1;
          text-align: center;
          margin-right: 48px;
        }
      }

      .browser-content {
        display: block;
        transition: transform 0.3s ease;
        position: relative;
      }

      .browser-content.overlay::after {
        content: '';
        display: block;
        width: var(--scroll-progress, 0%);
        height: 4px;
        position: absolute;
        bottom: 0;
        left: 0;
        opacity: 0.8;
        transition: width 0.3s ease;
        background-image: linear-gradient(to right, var(--primary-color), var(--accent-color));
      }
    `}};t([mt({attribute:!1})],qt.prototype,"store",void 0),t([mt({attribute:!1})],qt.prototype,"initialAction",void 0),t([gt()],qt.prototype,"state",void 0),t([gt()],qt.prototype,"_element",void 0),t([gt()],qt.prototype,"_browseHistory",void 0),t([gt()],qt.prototype,"_isListView",void 0),qt=t([ut("ytube-browse-card")],qt);let Yt=class extends ct{constructor(){super(...arguments),this._cardWidth=0,this._dialogOpen=!1}static async getConfigElement(){return await Promise.resolve().then((function(){return te})),document.createElement("ytube-playlist-editor")}async setConfig(t){if(!t.entity||"media_player"!==t.entity.split(".")[0])throw new Error("Specify an entity from within the media_player domain");this._config=t}connectedCallback(){super.connectedCallback(),window.YtubeCard=this,this.updateComplete.then((()=>this._attachObserver()))}disconnectedCallback(){super.disconnectedCallback(),this._resizeObserver&&this._resizeObserver.disconnect()}async _attachObserver(){this._resizeObserver||(this._resizeObserver=new ResizeObserver(Ot((()=>this._measureCard()),250,!1)));const t=this.shadowRoot.querySelector("ha-card");t&&this._resizeObserver.observe(t)}_measureCard(){const t=this.shadowRoot.querySelector("ha-card");t&&(this._cardWidth=t.clientWidth)}async firstUpdated(t){super.firstUpdated(t),this._attachObserver(),this._measureCard(),await this._loadContent()}async _loadContent(){if(!this.hass||!this._config)return;const t=this._config.default_page;this._browserCard.state=1;let e={media_content_type:"",media_content_id:""};e="custom"===t.type&&void 0!==t.media_content_type&&void 0!==t.media_content_id?{media_content_type:t.media_content_type,media_content_id:t.media_content_id}:{media_content_type:t.type,media_content_id:""};const i=await this.store.haService.browseMedia(e.media_content_type,e.media_content_id),s=await this.store.haService.browseMedia("library","library");this._menuItems=null==s?void 0:s.children,i?(this._initialItems=i,this._browserCard.state=4):this._browserCard.state=3}_createStore(){this.hass&&this._config&&(this.store=new Et(this.hass,this._config,this))}render(){return this.hass&&this._config?(this._createStore(),Y`<ha-card style=${this._computeCardStyle()}>
        <ytube-browse-card .store=${this.store} .initialAction=${this._initialItems}></ytube-browse-card>
        ${this._renderFooter()}
      </ha-card>
      ${this._renderDialog()}`):Y``}_renderFooter(){var t,e;return(null===(e=null===(t=this._config)||void 0===t?void 0:t.layout)||void 0===e?void 0:e.show_footer)?Y`<footer>
      <div class="footer-content">
        <div class="footer-icon" @click=${()=>this._browserCard._loadInitialAction()}>
          <ha-icon icon=${It.HOME}> </ha-icon>
        </div>
        <div class="footer-icon push" @click=${()=>this._dialogOpen=!0}>
          <ha-icon icon=${It.BROWSE_MEDIA}> </ha-icon>
        </div>
        <div class="footer-icon" @click=${()=>this._browserCard._browse(this._menuItems[11])}>
          <ha-icon icon=${It.PLAYLIST}> </ha-icon>
        </div>
      </div>
    </footer>`:Y``}_renderDialog(){return this._dialogOpen?Y` <ytube-dialog
      .store=${this.store}
      .element=${this._initialItems}
      .layout=${this.layout}
      @close-dialog=${()=>this._dialogOpen=!1}
    ></ytube-dialog>`:Y``}_computeCardStyle(){var t,e;const i=this._config;if(!i)return;const s=this._getGridMaxHeight(),r=this._getMaxListHeight();let o="list"!==(null===(t=i.layout)||void 0===t?void 0:t.type)?s:r;return o=(null===(e=i.layout)||void 0===e?void 0:e.show_footer)?o+48:o,At({"--ytube-card-width":`${this._cardWidth}px`,"--ytube-card-height":`${s}px`,"--ytube-list-max-height":`${r}px`,"--ytube-grid-max-height":`${s}px`,"min-height":`${o}px`})}_getMaxListHeight(){var t;return 62*((null===(t=this._config.layout)||void 0===t?void 0:t.max_list_items)||9)}_getGridMaxHeight(){var t,e;const i=this._config,s=(null===(t=i.layout)||void 0===t?void 0:t.max_grid_columns)||3,r=(null===(e=i.layout)||void 0===e?void 0:e.max_grid_rows)||3;return(this.store.baseCard._cardWidth/s*.9+8)*r+(8*r-1)}static get styles(){return zt}async getCardSize(){return 3}};var Ft,Gt;Yt.getStubConfig=async t=>await Ht(t),t([mt({attribute:!1})],Yt.prototype,"hass",void 0),t([mt({type:String})],Yt.prototype,"layout",void 0),t([gt()],Yt.prototype,"_config",void 0),t([gt()],Yt.prototype,"store",void 0),t([gt()],Yt.prototype,"_initialItems",void 0),t([gt()],Yt.prototype,"_menuItems",void 0),t([gt()],Yt.prototype,"_cardWidth",void 0),t([gt()],Yt.prototype,"_resizeObserver",void 0),t([gt()],Yt.prototype,"_dialogOpen",void 0),t([vt("ytube-browse-card")],Yt.prototype,"_browserCard",void 0),Yt=t([ut("ytube-playlist-card")],Yt),window.customCards=window.customCards||[],window.customCards.push({type:"ytube-playlist-card",name:"Ytube playlist Card",preview:!0,description:"YouTube Music Playlist Card for Home Assistant",documentationURL:"https://github.com/ngocjohn/youtube-playlist-card"}),function(t){t.language="language",t.system="system",t.comma_decimal="comma_decimal",t.decimal_comma="decimal_comma",t.space_comma="space_comma",t.none="none"}(Ft||(Ft={})),function(t){t.language="language",t.system="system",t.am_pm="12",t.twenty_four="24"}(Gt||(Gt={}));var Kt=function(t,e,i,s){s=s||{},i=null==i?{}:i;var r=new Event(e,{bubbles:void 0===s.bubbles||s.bubbles,cancelable:Boolean(s.cancelable),composed:void 0===s.composed||s.composed});return r.detail=i,t.dispatchEvent(r),r};const Zt=({activeTabIndex:t,onTabChange:e,tabs:i})=>{var s;return Y`
    <mwc-tab-bar @MDCTabBar:activated=${t=>e(t.target.activeIndex)}>
      ${i.map((t=>Y`<mwc-tab label=${t.label} icon=${t.icon||""} ?stacked=${t.stacked||!1}></mwc-tab>`))}
    </mwc-tab-bar>
    <div class="tab-content">${(null===(s=i[t])||void 0===s?void 0:s.content)||Y`<div>No content available</div>`}</div>
  `},Jt=async(t,e)=>{if(!t||!e)return;let i=await t.callWS({type:"media_player/browse_media",entity_id:e,media_content_type:"library",media_content_id:"library"}).then((t=>t.children));i=null==i?void 0:i.filter((t=>!Tt.includes(t.media_content_type)));return null==i?void 0:i.map((t=>({label:t.title,value:t.media_content_type})))};var Xt=a`.card-config {
	width: 100%;
	margin-top: 0.5rem;
	margin-bottom: 0.5rem;
}

*[hidden] {
	display: none !important;
}

.tab-content {
	display: flex;
	flex-direction: column;
	gap: 0.5rem;
}

.grid-forms {
	display: grid;
	grid-template-columns: repeat(auto-fill, minmax(49%, 1fr));
	grid-gap: 0.5rem;
}

.grid-forms>*:nth-last-child(1):nth-child(odd) {
	grid-column: span 2;
}

.title {
	display: flex;
	justify-content: flex-start;
	align-items: center;
	font-size: 1rem;
	font-weight: 400;
	text-transform: uppercase;
	padding-left: 0.5rem;
}`;let Qt=class extends ct{constructor(){super(...arguments),this._activeTabIndex=0,this._pageTypes=[],this._newCardType=new Map,this._usingCustomPage=!1}connectedCallback(){super.connectedCallback(),window.YtubeEditor=this}disconnectedCallback(){super.disconnectedCallback()}static get styles(){return[Xt]}async setConfig(t){this._config=structuredClone(t)}async firstUpdated(t){super.firstUpdated(t),await new Promise((t=>setTimeout(t,0))),this._pageTypes=await Jt(this.hass,this._config.entity),this._service=new Ct(this.hass,this._config.entity)}render(){if(!this.hass||!this._config)return Y``;const t=[{key:"general",label:"General",content:this._renderGeneralTab()},{key:"layout",label:"Appearance",content:Y`<div>Appearance</div>`}],e=Zt({activeTabIndex:this._activeTabIndex||0,onTabChange:t=>this._activeTabIndex=t,tabs:t});return Y`<div class="card-config">${e}</div>`}_renderGeneralTab(){const t=[{label:"Entity",configType:"entity",configValue:this._config.entity,selector:{entity:{filter:{integration:"ytube_music_player",domain:"media_player"}}},required:!0},{label:"Extra",configType:"extra",configValue:this._config.extra,selector:{entity:{filter:{integration:"ytube_music_player"}}}}],e=this._renderPageTypeSelector();return Y` ${t.map((t=>this._HaSelector(t)))} ${e}`}_renderPageTypeSelector(){var t;if(!this._pageTypes)return Y` <div>Loading...</div> `;const e=[{label:"Custom",value:"custom"},...this._pageTypes],i={label:"Default Page",configType:"default_page",configValue:null===(t=this._config.default_page)||void 0===t?void 0:t.type,selector:{select:{options:e}},required:!0},s=this._HaSelector(i);return Y`${s} ${this._renderCustomPageForm()} ${this._renderCustomPageTitle()}`}_renderCustomPageTitle(){var t,e;return"custom"===(null===(t=this._config.default_page)||void 0===t?void 0:t.type)&&(null===(e=this._config.default_page)||void 0===e?void 0:e.title)?Y`<div class="grid-forms" ?hidden=${this._usingCustomPage}>
      <div class="title">Playlist: ${this._config.default_page.title}</div>
      <ha-button @click=${()=>this._usingCustomPage=!0}>Edit</ha-button>
    </div> `:G}_renderCustomPageForm(){var t;if(!this._usingCustomPage)return Y``;const e=!(null===(t=this._newCardType.get("media_content_type"))||void 0===t?void 0:t.length),i=Y`
      <ha-textfield
        .label=${"Media Content Type"}
        .configValue=${"media_content_type"}
        .value=${this._newCardType.get("media_content_type")||""}
        @input=${this._handleCustomPageTypeChange}
        .required=${!0}
      ></ha-textfield>
      <ha-textfield
        .label=${"Media Content ID"}
        .configValue=${"media_content_id"}
        .value=${this._newCardType.get("media_content_id")||""}
        @change=${this._handleCustomPageTypeChange}
      ></ha-textfield>
    `,s=Y`
      <ha-button @click=${()=>this._usingCustomPage=!1}>Cancel</ha-button>
      <ha-button @click=${this._handleCustomPageTypeSave} ?hidden=${e}>Save</ha-button>
    `;return Y` <div class="grid-forms">${i} ${s}</div>`}_handleCustomPageTypeChange(t){t.stopPropagation();const e=t.target,i=e.configValue,s=e.value,r=new Map(this._newCardType);r.set(i,s.trim()),this._newCardType=r,this.requestUpdate()}async _handleCustomPageTypeSave(){var t;const e=this._newCardType.get("media_content_type"),i=this._newCardType.get("media_content_id");if(!e&&!i)return;const s=await(null===(t=this._service)||void 0===t?void 0:t.browseMedia(e,i).then((t=>null==t?void 0:t.title)))||"";this._config=Object.assign(Object.assign({},this._config),{default_page:{type:"custom",media_content_type:null!=e?e:"",media_content_id:null!=i?i:"",title:s}}),this._usingCustomPage=!1,this._newCardType=new Map,Kt(this,"config-changed",{config:this._config})}_HaSelector({label:t,configType:e,configValue:i,selector:s,required:r}){return Y`
      <ha-selector
        .hass=${this.hass}
        .value=${i}
        .label=${t}
        .configType=${e}
        .selector=${s}
        @value-changed=${this._valueChanged}
        .required=${r||!1}
      ></ha-selector>
    `}_valueChanged(t){var e;if(t.stopPropagation(),!this._config||!this.hass)return;const i=t.target,s=i.configType,r=void 0!==i.checked?i.checked:(null===(e=t.detail)||void 0===e?void 0:e.value)||i.value,o={};if("default_page"===s){if("custom"===r)return void(this._usingCustomPage=!0);o[s]={type:r},this._usingCustomPage=!1}else o[s]=r;Object.keys(o).length>0&&(this._config=Object.assign(Object.assign({},this._config),o),Kt(this,"config-changed",{config:this._config}))}};t([mt({attribute:!1})],Qt.prototype,"hass",void 0),t([gt()],Qt.prototype,"_config",void 0),t([gt()],Qt.prototype,"_activeTabIndex",void 0),t([gt()],Qt.prototype,"_pageTypes",void 0),t([gt()],Qt.prototype,"_newCardType",void 0),t([gt()],Qt.prototype,"_usingCustomPage",void 0),t([gt()],Qt.prototype,"_service",void 0),Qt=t([ut("ytube-playlist-editor")],Qt);var te=Object.freeze({__proto__:null,get YtubePlaylistEditor(){return Qt}});export{Yt as YtubePlaylistCard};
