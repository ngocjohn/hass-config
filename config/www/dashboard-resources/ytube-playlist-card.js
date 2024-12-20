function t(t,e,i,s){var r,n=arguments.length,o=n<3?e:null===s?s=Object.getOwnPropertyDescriptor(e,i):s;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(t,e,i,s);else for(var a=t.length-1;a>=0;a--)(r=t[a])&&(o=(n<3?r(o):n>3?r(e,i,o):r(e,i))||o);return n>3&&o&&Object.defineProperty(e,i,o),o}console.groupCollapsed("%c   Ytube Playlist Card   \n%c   v1.0.0                ","color: orange; font-weight: bold; background: black","color: white; font-weight: bold; background: dimgray"),console.info("YouTube Music Playlist Card for Home Assistant"),console.info("Github: https://github.com/ngocjohn/ytube-playlist-card"),console.info("If you like the card, consider supporting the developer: https://github.com/sponsors/ngocjohn"),console.groupEnd(),"function"==typeof SuppressedError&&SuppressedError;
/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const e=globalThis,i=e.ShadowRoot&&(void 0===e.ShadyCSS||e.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,s=Symbol(),r=new WeakMap;class n{constructor(t,e,i){if(this._$cssResult$=!0,i!==s)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=e}get styleSheet(){let t=this.o;const e=this.t;if(i&&void 0===t){const i=void 0!==e&&1===e.length;i&&(t=r.get(e)),void 0===t&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),i&&r.set(e,t))}return t}toString(){return this.cssText}}const o=t=>new n("string"==typeof t?t:t+"",void 0,s),a=(t,...e)=>{const i=1===t.length?t[0]:e.reduce(((e,i,s)=>e+(t=>{if(!0===t._$cssResult$)return t.cssText;if("number"==typeof t)return t;throw Error("Value passed to 'css' function must be a 'css' function result: "+t+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(i)+t[s+1]),t[0]);return new n(i,t,s)},l=(t,s)=>{if(i)t.adoptedStyleSheets=s.map((t=>t instanceof CSSStyleSheet?t:t.styleSheet));else for(const i of s){const s=document.createElement("style"),r=e.litNonce;void 0!==r&&s.setAttribute("nonce",r),s.textContent=i.cssText,t.appendChild(s)}},d=i?t=>t:t=>t instanceof CSSStyleSheet?(t=>{let e="";for(const i of t.cssRules)e+=i.cssText;return o(e)})(t):t
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */,{is:c,defineProperty:h,getOwnPropertyDescriptor:u,getOwnPropertyNames:p,getOwnPropertySymbols:_,getPrototypeOf:g}=Object,m=globalThis,y=m.trustedTypes,f=y?y.emptyScript:"",v=m.reactiveElementPolyfillSupport,b=(t,e)=>t,$={toAttribute(t,e){switch(e){case Boolean:t=t?f:null;break;case Object:case Array:t=null==t?t:JSON.stringify(t)}return t},fromAttribute(t,e){let i=t;switch(e){case Boolean:i=null!==t;break;case Number:i=null===t?null:Number(t);break;case Object:case Array:try{i=JSON.parse(t)}catch(t){i=null}}return i}},w=(t,e)=>!c(t,e),A={attribute:!0,type:String,converter:$,reflect:!1,hasChanged:w};Symbol.metadata??=Symbol("metadata"),m.litPropertyMetadata??=new WeakMap;class C extends HTMLElement{static addInitializer(t){this._$Ei(),(this.l??=[]).push(t)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(t,e=A){if(e.state&&(e.attribute=!1),this._$Ei(),this.elementProperties.set(t,e),!e.noAccessor){const i=Symbol(),s=this.getPropertyDescriptor(t,i,e);void 0!==s&&h(this.prototype,t,s)}}static getPropertyDescriptor(t,e,i){const{get:s,set:r}=u(this.prototype,t)??{get(){return this[e]},set(t){this[e]=t}};return{get(){return s?.call(this)},set(e){const n=s?.call(this);r.call(this,e),this.requestUpdate(t,n,i)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)??A}static _$Ei(){if(this.hasOwnProperty(b("elementProperties")))return;const t=g(this);t.finalize(),void 0!==t.l&&(this.l=[...t.l]),this.elementProperties=new Map(t.elementProperties)}static finalize(){if(this.hasOwnProperty(b("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(b("properties"))){const t=this.properties,e=[...p(t),..._(t)];for(const i of e)this.createProperty(i,t[i])}const t=this[Symbol.metadata];if(null!==t){const e=litPropertyMetadata.get(t);if(void 0!==e)for(const[t,i]of e)this.elementProperties.set(t,i)}this._$Eh=new Map;for(const[t,e]of this.elementProperties){const i=this._$Eu(t,e);void 0!==i&&this._$Eh.set(i,t)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(t){const e=[];if(Array.isArray(t)){const i=new Set(t.flat(1/0).reverse());for(const t of i)e.unshift(d(t))}else void 0!==t&&e.push(d(t));return e}static _$Eu(t,e){const i=e.attribute;return!1===i?void 0:"string"==typeof i?i:"string"==typeof t?t.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$ES=new Promise((t=>this.enableUpdating=t)),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach((t=>t(this)))}addController(t){(this._$EO??=new Set).add(t),void 0!==this.renderRoot&&this.isConnected&&t.hostConnected?.()}removeController(t){this._$EO?.delete(t)}_$E_(){const t=new Map,e=this.constructor.elementProperties;for(const i of e.keys())this.hasOwnProperty(i)&&(t.set(i,this[i]),delete this[i]);t.size>0&&(this._$Ep=t)}createRenderRoot(){const t=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return l(t,this.constructor.elementStyles),t}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$EO?.forEach((t=>t.hostConnected?.()))}enableUpdating(t){}disconnectedCallback(){this._$EO?.forEach((t=>t.hostDisconnected?.()))}attributeChangedCallback(t,e,i){this._$AK(t,i)}_$EC(t,e){const i=this.constructor.elementProperties.get(t),s=this.constructor._$Eu(t,i);if(void 0!==s&&!0===i.reflect){const r=(void 0!==i.converter?.toAttribute?i.converter:$).toAttribute(e,i.type);this._$Em=t,null==r?this.removeAttribute(s):this.setAttribute(s,r),this._$Em=null}}_$AK(t,e){const i=this.constructor,s=i._$Eh.get(t);if(void 0!==s&&this._$Em!==s){const t=i.getPropertyOptions(s),r="function"==typeof t.converter?{fromAttribute:t.converter}:void 0!==t.converter?.fromAttribute?t.converter:$;this._$Em=s,this[s]=r.fromAttribute(e,t.type),this._$Em=null}}requestUpdate(t,e,i){if(void 0!==t){if(i??=this.constructor.getPropertyOptions(t),!(i.hasChanged??w)(this[t],e))return;this.P(t,e,i)}!1===this.isUpdatePending&&(this._$ES=this._$ET())}P(t,e,i){this._$AL.has(t)||this._$AL.set(t,e),!0===i.reflect&&this._$Em!==t&&(this._$Ej??=new Set).add(t)}async _$ET(){this.isUpdatePending=!0;try{await this._$ES}catch(t){Promise.reject(t)}const t=this.scheduleUpdate();return null!=t&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(const[t,e]of this._$Ep)this[t]=e;this._$Ep=void 0}const t=this.constructor.elementProperties;if(t.size>0)for(const[e,i]of t)!0!==i.wrapped||this._$AL.has(e)||void 0===this[e]||this.P(e,this[e],i)}let t=!1;const e=this._$AL;try{t=this.shouldUpdate(e),t?(this.willUpdate(e),this._$EO?.forEach((t=>t.hostUpdate?.())),this.update(e)):this._$EU()}catch(e){throw t=!1,this._$EU(),e}t&&this._$AE(e)}willUpdate(t){}_$AE(t){this._$EO?.forEach((t=>t.hostUpdated?.())),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$EU(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(t){return!0}update(t){this._$Ej&&=this._$Ej.forEach((t=>this._$EC(t,this[t]))),this._$EU()}updated(t){}firstUpdated(t){}}C.elementStyles=[],C.shadowRootOptions={mode:"open"},C[b("elementProperties")]=new Map,C[b("finalized")]=new Map,v?.({ReactiveElement:C}),(m.reactiveElementVersions??=[]).push("2.0.4");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const S=globalThis,E=S.trustedTypes,x=E?E.createPolicy("lit-html",{createHTML:t=>t}):void 0,T="$lit$",P=`lit$${Math.random().toFixed(9).slice(2)}$`,k="?"+P,O=`<${k}>`,U=document,I=()=>U.createComment(""),R=t=>null===t||"object"!=typeof t&&"function"!=typeof t,M=Array.isArray,H=t=>M(t)||"function"==typeof t?.[Symbol.iterator],N="[ \t\n\f\r]",L=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,z=/-->/g,j=/>/g,W=RegExp(`>|${N}(?:([^\\s"'>=/]+)(${N}*=${N}*(?:[^ \t\n\f\r"'\`<>=]|("|')|))|$)`,"g"),D=/'/g,B=/"/g,V=/^(?:script|style|textarea|title)$/i,q=t=>(e,...i)=>({_$litType$:t,strings:e,values:i}),Y=q(1),F=Symbol.for("lit-noChange"),G=Symbol.for("lit-nothing"),K=new WeakMap,Z=U.createTreeWalker(U,129);function J(t,e){if(!M(t)||!t.hasOwnProperty("raw"))throw Error("invalid template strings array");return void 0!==x?x.createHTML(e):e}const X=(t,e)=>{const i=t.length-1,s=[];let r,n=2===e?"<svg>":3===e?"<math>":"",o=L;for(let e=0;e<i;e++){const i=t[e];let a,l,d=-1,c=0;for(;c<i.length&&(o.lastIndex=c,l=o.exec(i),null!==l);)c=o.lastIndex,o===L?"!--"===l[1]?o=z:void 0!==l[1]?o=j:void 0!==l[2]?(V.test(l[2])&&(r=RegExp("</"+l[2],"g")),o=W):void 0!==l[3]&&(o=W):o===W?">"===l[0]?(o=r??L,d=-1):void 0===l[1]?d=-2:(d=o.lastIndex-l[2].length,a=l[1],o=void 0===l[3]?W:'"'===l[3]?B:D):o===B||o===D?o=W:o===z||o===j?o=L:(o=W,r=void 0);const h=o===W&&t[e+1].startsWith("/>")?" ":"";n+=o===L?i+O:d>=0?(s.push(a),i.slice(0,d)+T+i.slice(d)+P+h):i+P+(-2===d?e:h)}return[J(t,n+(t[i]||"<?>")+(2===e?"</svg>":3===e?"</math>":"")),s]};class Q{constructor({strings:t,_$litType$:e},i){let s;this.parts=[];let r=0,n=0;const o=t.length-1,a=this.parts,[l,d]=X(t,e);if(this.el=Q.createElement(l,i),Z.currentNode=this.el.content,2===e||3===e){const t=this.el.content.firstChild;t.replaceWith(...t.childNodes)}for(;null!==(s=Z.nextNode())&&a.length<o;){if(1===s.nodeType){if(s.hasAttributes())for(const t of s.getAttributeNames())if(t.endsWith(T)){const e=d[n++],i=s.getAttribute(t).split(P),o=/([.?@])?(.*)/.exec(e);a.push({type:1,index:r,name:o[2],strings:i,ctor:"."===o[1]?rt:"?"===o[1]?nt:"@"===o[1]?ot:st}),s.removeAttribute(t)}else t.startsWith(P)&&(a.push({type:6,index:r}),s.removeAttribute(t));if(V.test(s.tagName)){const t=s.textContent.split(P),e=t.length-1;if(e>0){s.textContent=E?E.emptyScript:"";for(let i=0;i<e;i++)s.append(t[i],I()),Z.nextNode(),a.push({type:2,index:++r});s.append(t[e],I())}}}else if(8===s.nodeType)if(s.data===k)a.push({type:2,index:r});else{let t=-1;for(;-1!==(t=s.data.indexOf(P,t+1));)a.push({type:7,index:r}),t+=P.length-1}r++}}static createElement(t,e){const i=U.createElement("template");return i.innerHTML=t,i}}function tt(t,e,i=t,s){if(e===F)return e;let r=void 0!==s?i._$Co?.[s]:i._$Cl;const n=R(e)?void 0:e._$litDirective$;return r?.constructor!==n&&(r?._$AO?.(!1),void 0===n?r=void 0:(r=new n(t),r._$AT(t,i,s)),void 0!==s?(i._$Co??=[])[s]=r:i._$Cl=r),void 0!==r&&(e=tt(t,r._$AS(t,e.values),r,s)),e}class et{constructor(t,e){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=e}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){const{el:{content:e},parts:i}=this._$AD,s=(t?.creationScope??U).importNode(e,!0);Z.currentNode=s;let r=Z.nextNode(),n=0,o=0,a=i[0];for(;void 0!==a;){if(n===a.index){let e;2===a.type?e=new it(r,r.nextSibling,this,t):1===a.type?e=new a.ctor(r,a.name,a.strings,this,t):6===a.type&&(e=new at(r,this,t)),this._$AV.push(e),a=i[++o]}n!==a?.index&&(r=Z.nextNode(),n++)}return Z.currentNode=U,s}p(t){let e=0;for(const i of this._$AV)void 0!==i&&(void 0!==i.strings?(i._$AI(t,i,e),e+=i.strings.length-2):i._$AI(t[e])),e++}}class it{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(t,e,i,s){this.type=2,this._$AH=G,this._$AN=void 0,this._$AA=t,this._$AB=e,this._$AM=i,this.options=s,this._$Cv=s?.isConnected??!0}get parentNode(){let t=this._$AA.parentNode;const e=this._$AM;return void 0!==e&&11===t?.nodeType&&(t=e.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,e=this){t=tt(this,t,e),R(t)?t===G||null==t||""===t?(this._$AH!==G&&this._$AR(),this._$AH=G):t!==this._$AH&&t!==F&&this._(t):void 0!==t._$litType$?this.$(t):void 0!==t.nodeType?this.T(t):H(t)?this.k(t):this._(t)}O(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}T(t){this._$AH!==t&&(this._$AR(),this._$AH=this.O(t))}_(t){this._$AH!==G&&R(this._$AH)?this._$AA.nextSibling.data=t:this.T(U.createTextNode(t)),this._$AH=t}$(t){const{values:e,_$litType$:i}=t,s="number"==typeof i?this._$AC(t):(void 0===i.el&&(i.el=Q.createElement(J(i.h,i.h[0]),this.options)),i);if(this._$AH?._$AD===s)this._$AH.p(e);else{const t=new et(s,this),i=t.u(this.options);t.p(e),this.T(i),this._$AH=t}}_$AC(t){let e=K.get(t.strings);return void 0===e&&K.set(t.strings,e=new Q(t)),e}k(t){M(this._$AH)||(this._$AH=[],this._$AR());const e=this._$AH;let i,s=0;for(const r of t)s===e.length?e.push(i=new it(this.O(I()),this.O(I()),this,this.options)):i=e[s],i._$AI(r),s++;s<e.length&&(this._$AR(i&&i._$AB.nextSibling,s),e.length=s)}_$AR(t=this._$AA.nextSibling,e){for(this._$AP?.(!1,!0,e);t&&t!==this._$AB;){const e=t.nextSibling;t.remove(),t=e}}setConnected(t){void 0===this._$AM&&(this._$Cv=t,this._$AP?.(t))}}class st{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(t,e,i,s,r){this.type=1,this._$AH=G,this._$AN=void 0,this.element=t,this.name=e,this._$AM=s,this.options=r,i.length>2||""!==i[0]||""!==i[1]?(this._$AH=Array(i.length-1).fill(new String),this.strings=i):this._$AH=G}_$AI(t,e=this,i,s){const r=this.strings;let n=!1;if(void 0===r)t=tt(this,t,e,0),n=!R(t)||t!==this._$AH&&t!==F,n&&(this._$AH=t);else{const s=t;let o,a;for(t=r[0],o=0;o<r.length-1;o++)a=tt(this,s[i+o],e,o),a===F&&(a=this._$AH[o]),n||=!R(a)||a!==this._$AH[o],a===G?t=G:t!==G&&(t+=(a??"")+r[o+1]),this._$AH[o]=a}n&&!s&&this.j(t)}j(t){t===G?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"")}}class rt extends st{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===G?void 0:t}}class nt extends st{constructor(){super(...arguments),this.type=4}j(t){this.element.toggleAttribute(this.name,!!t&&t!==G)}}class ot extends st{constructor(t,e,i,s,r){super(t,e,i,s,r),this.type=5}_$AI(t,e=this){if((t=tt(this,t,e,0)??G)===F)return;const i=this._$AH,s=t===G&&i!==G||t.capture!==i.capture||t.once!==i.once||t.passive!==i.passive,r=t!==G&&(i===G||s);s&&this.element.removeEventListener(this.name,this,i),r&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){"function"==typeof this._$AH?this._$AH.call(this.options?.host??this.element,t):this._$AH.handleEvent(t)}}class at{constructor(t,e,i){this.element=t,this.type=6,this._$AN=void 0,this._$AM=e,this.options=i}get _$AU(){return this._$AM._$AU}_$AI(t){tt(this,t)}}const lt=S.litHtmlPolyfillSupport;lt?.(Q,it),(S.litHtmlVersions??=[]).push("3.2.1");const dt=(t,e,i)=>{const s=i?.renderBefore??e;let r=s._$litPart$;if(void 0===r){const t=i?.renderBefore??null;s._$litPart$=r=new it(e.insertBefore(I(),t),t,void 0,i??{})}return r._$AI(t),r
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */};class ct extends C{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){const t=super.createRenderRoot();return this.renderOptions.renderBefore??=t.firstChild,t}update(t){const e=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=dt(e,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return F}}ct._$litElement$=!0,ct.finalized=!0,globalThis.litElementHydrateSupport?.({LitElement:ct});const ht=globalThis.litElementPolyfillSupport;ht?.({LitElement:ct}),(globalThis.litElementVersions??=[]).push("4.1.1");
/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const ut=(t,e,i)=>{for(const i of e)if(i[0]===t)return(0,i[1])();return i?.()},pt=t=>(e,i)=>{void 0!==i?i.addInitializer((()=>{customElements.define(t,e)})):customElements.define(t,e)}
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */,_t={attribute:!0,type:String,converter:$,reflect:!1,hasChanged:w},gt=(t=_t,e,i)=>{const{kind:s,metadata:r}=i;let n=globalThis.litPropertyMetadata.get(r);if(void 0===n&&globalThis.litPropertyMetadata.set(r,n=new Map),n.set(i.name,t),"accessor"===s){const{name:s}=i;return{set(i){const r=e.get.call(this);e.set.call(this,i),this.requestUpdate(s,r,t)},init(e){return void 0!==e&&this.P(s,void 0,t),e}}}if("setter"===s){const{name:s}=i;return function(i){const r=this[s];e.call(this,i),this.requestUpdate(s,r,t)}}throw Error("Unsupported decorator location: "+s)};
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function mt(t){return(e,i)=>"object"==typeof i?gt(t,e,i):((t,e,i)=>{const s=e.hasOwnProperty(i);return e.constructor.createProperty(i,s?{...t,wrapped:!0}:t),s?Object.getOwnPropertyDescriptor(e,i):void 0})(t,e,i)
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */}function yt(t){return mt({...t,state:!0,attribute:!1})}
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const ft=(t,e,i)=>(i.configurable=!0,i.enumerable=!0,Reflect.decorate&&"object"!=typeof e&&Object.defineProperty(t,e,i),i)
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */;function vt(t,e){return(i,s,r)=>{const n=e=>e.renderRoot?.querySelector(t)??null;if(e){const{get:t,set:e}="object"==typeof s?i:r??(()=>{const t=Symbol();return{get(){return this[t]},set(e){this[t]=e}}})();return ft(i,s,{get(){let i=t.call(this);return void 0===i&&(i=n(this),(null!==i||this.hasUpdated)&&e.call(this,i)),i}})}return ft(i,s,{get(){return n(this)}})}}class bt{constructor(t,e){this.hass=t,this.playerId=e}async browseMedia(t,e){try{return await this.hass.callWS({type:"media_player/browse_media",entity_id:this.playerId,media_content_type:t,media_content_id:e})}catch(t){return null}}}class $t{constructor(t){this._entity=t,this.id=t.entity_id,this._state=t.state,this._attr=t.attributes}get isPaused(){return"paused"===this._state}get isPlaying(){return"playing"===this._state}get isIdle(){return"idle"===this._state}get isStandby(){return"standby"===this._state}get isUnavailable(){return"unavailable"===this._state}get isOff(){return"off"===this._state}get isActive(){return!this.isOff&&!this.isUnavailable&&!this.isIdle||!1}get mediaType(){return this._attr._media_type||""}get mediaId(){return this._attr._media_id||""}get currentTrack(){return this._attr.current_track}get playlistTitle(){return this._attr.current_playlist_title||""}get remotePlayerId(){return this._attr.remote_player_id||""}get muted(){return this._attr.is_volume_muted||!1}get shuffle(){return this._attr.shuffle||!1}get repeat(){return this._attr.repeat||"off"}get picture(){return this._attr.entity_picture_local||this._attr.entity_picture}get updatedAt(){return this._attr.media_position_updated_at||0}get position(){return this._attr.media_position||0}get duration(){return this._attr.media_duration||0}get progress(){if(this.isPlaying){const t=(Date.now()-new Date(this.updatedAt).getTime())/1e3;return(this.position+t)/this.duration*100}return this.position/this.duration*100}}class wt{constructor(t,e){this.hass=t,this.config=e,this.haService=new bt(t,e.entity),this.player=this._createPlayer(e.entity),this._extra=this._createExtra()}_createPlayer(t){const e=this.hass.states[t];if(!e)throw new Error("Player entity not found");return new $t(e)}_createExtra(){if(this.config.extra){const t=this.hass.states[this.config.extra];if(!t)throw new Error("Extra entity not found");return t}}}const At=(t,e,i=!1)=>{let s;const r=(...r)=>{const n=i&&!s;clearTimeout(s),s=window.setTimeout((()=>{s=void 0,i||t(...r)}),e),n&&t(...r)};return r.cancel=()=>{clearTimeout(s)},r},Ct=async t=>{const e=(await t.callWS({type:"config/entity_registry/list"})).filter((t=>t.entity_id.startsWith("media_player.")&&"ytube_music_player"===t.platform))[0];return e},St=async t=>{const e=await Ct(t).then((t=>t.entity_id));return{entity:e,layout:{type:"grid",max_columns:3,max_rows:3}}};function Et(t,e){if(!Number.isInteger(e)||e<=0)throw new Error("Size must be an integer greater than zero.");const i=Math.ceil(t.length/e),s=Array(i);for(let r=0;r<i;r++){const i=r*e,n=i+e;s[r]=t.slice(i,n)}return s}function xt(t,e=1){const i=[],s=Math.floor(e),r=(t,e)=>{for(let n=0;n<t.length;n++){const o=t[n];Array.isArray(o)&&e<s?r(o,e+1):i.push(o)}};return r(t,0),i}
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Tt={ATTRIBUTE:1,CHILD:2,PROPERTY:3,BOOLEAN_ATTRIBUTE:4,EVENT:5,ELEMENT:6},Pt=t=>(...e)=>({_$litDirective$:t,values:e});class kt{constructor(t){}get _$AU(){return this._$AM._$AU}_$AT(t,e,i){this._$Ct=t,this._$AM=e,this._$Ci=i}_$AS(t,e){return this.update(t,e)}update(t,e){return this.render(...e)}}
/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Ot="important",Ut=" !"+Ot,It=Pt(class extends kt{constructor(t){if(super(t),t.type!==Tt.ATTRIBUTE||"style"!==t.name||t.strings?.length>2)throw Error("The `styleMap` directive must be used in the `style` attribute and must be the only part in the attribute.")}render(t){return Object.keys(t).reduce(((e,i)=>{const s=t[i];return null==s?e:e+`${i=i.includes("-")?i:i.replace(/(?:^(webkit|moz|ms|o)|)(?=[A-Z])/g,"-$&").toLowerCase()}:${s};`}),"")}update(t,[e]){const{style:i}=t.element;if(void 0===this.ft)return this.ft=new Set(Object.keys(e)),this.render(e);for(const t of this.ft)null==e[t]&&(this.ft.delete(t),t.includes("-")?i.removeProperty(t):i[t]=null);for(const t in e){const s=e[t];if(null!=s){this.ft.add(t);const e="string"==typeof s&&s.endsWith(Ut);t.includes("-")||e?i.setProperty(t,e?s.slice(0,-11):s,e?Ot:""):i[t]=s}}return F}});var Rt=a`*,
*::before,
*::after {
	box-sizing: border-box;
}

ha-card {
	position: relative;
	overflow: hidden;
	width: 100%;
	border: none !important;
	border-radius: 0 !important;
	background: none !important;
	margin: 0;
	padding: 0;
}

ha-card [loading] {
	height: -moz-fit-content;
	height: fit-content;
}`;const Mt=["cur_playlists","album_of_track","speakers","vid_channel","search"];var Ht;!function(t){t.PLAY="mdi:play",t.PAUSE="mdi:pause",t.STOP="mdi:stop",t.NEXT="mdi:skip-next",t.PREV="mdi:skip-previous",t.REPEAT="mdi:repeat",t.SHUFFLE="mdi:shuffle",t.VOLUME="mdi:volume-high",t.VOLUME_MUTE="mdi:volume-mute",t.LIKE="mdi:thumb-up",t.DISLIKE="mdi:thumb-down",t.CLOSE="mdi:close",t.MENU="mdi:menu",t.SEARCH="mdi:magnify",t.BACK="mdi:arrow-left",t.FORWARD="mdi:arrow-right",t.PLAYLIST="mdi:playlist-music",t.ALBUM="mdi:album",t.ARTIST="mdi:account-music",t.LIBRARY="mdi:file-music",t.HISTORY="mdi:history",t.MUSIC="mdi:music",t.HOME="mdi:home",t.PLAY_CIRCLE="mdi:play-circle",t.CHEVRON_LEFT="mdi:chevron-left",t.CHEVRON_RIGHT="mdi:chevron-right",t.RADIO="mdi:broadcast"}(Ht||(Ht={}));let Nt=class extends ct{constructor(){super(...arguments),this.cardWidth=0,this._currentChunkIndex=0,this._chunkSize=9,this._chunks=[],this._renderedItems=[]}static get styles(){return[Rt,a`
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
          border-radius: var(--ytb-grid-item-border-radius, 1em);
          cursor: pointer;
          transition: all 0.4s cubic-bezier(0.075, 0.82, 0.165, 1);
          box-shadow: rgba(0, 0, 0, 0.5) 0px 0px 10px;
          border: 2px solid transparent;
          scroll-snap-align: start;
          scroll-snap-stop: normal;
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
          backdrop-filter: blur(1px);
          transition: all 0.4s cubic-bezier(0.075, 0.82, 0.165, 1);
        }

        .grid-item:hover .grid-item-title {
          opacity: 1;
        }
      `]}firstUpdated(t){var e,i;super.firstUpdated(t),this._chunkSize=((null===(e=this.store.config.layout)||void 0===e?void 0:e.max_columns)||3)*((null===(i=this.store.config.layout)||void 0===i?void 0:i.max_rows)||3)+1}updated(t){super.updated(t),t.has("element")&&(this._chunks=[],this._currentChunkIndex=0)}render(){var t;const e=(null===(t=this.element)||void 0===t?void 0:t.children)||[];0===this._chunks.length&&(this._chunks=Et(e,this._chunkSize)),this._renderedItems=xt(this._chunks.slice(0,this._currentChunkIndex+1));return Y`
      <div class="grid" style=${this._computeGridStyles()} @scroll=${this._handleScroll}>
        ${this._renderedItems.map((t=>(t=>{const{thumbnail:e,title:i}=t;return Y`
        <div class="grid-item" @click=${()=>{}}>
          <div class="grid-item-thumbnail">
            ${e?Y`<img src="${e}" loading="lazy" alt="${i}" />`:Y`<ha-icon icon=${Ht.PLAYLIST}></ha-icon>`}
          </div>
          <div class="grid-item-title">
            <span>${i}</span>
          </div>
        </div>
      `})(t)))}
      </div>
    `}_computeGridStyles(){var t,e;const i=this.store.config,s=(null===(t=i.layout)||void 0===t?void 0:t.max_columns)||3,r=(null===(e=i.layout)||void 0===e?void 0:e.max_rows)||3,n=this.cardWidth/s*.9,o=n+8;return It({gridTemplateColumns:`repeat(auto-fill, minmax(${n}px, 1fr))`,gridAutoRows:`${o}px`,gridGap:"8px",maxHeight:`${o*r+(8*r-1)}px`,overflowY:"auto","--ytb-grid-item-border-radius":s<=3?"1em":"0.5em"})}_handleScroll(t){const e=t.target;e.scrollHeight-e.scrollTop<=e.clientHeight+1&&this._loadMoreItems()}_loadMoreItems(){this._currentChunkIndex<this._chunks.length-1&&this._currentChunkIndex++}};t([mt({attribute:!1})],Nt.prototype,"store",void 0),t([mt({type:Object})],Nt.prototype,"element",void 0),t([mt({attribute:!1})],Nt.prototype,"cardWidth",void 0),t([yt()],Nt.prototype,"_currentChunkIndex",void 0),t([yt()],Nt.prototype,"_chunkSize",void 0),t([yt()],Nt.prototype,"_chunks",void 0),t([yt()],Nt.prototype,"_renderedItems",void 0),Nt=t([pt("ytube-grid")],Nt);let Lt=class extends ct{constructor(){super(...arguments),this.cardWidth=200}render(){const t=`width: ${this.cardWidth}px; height: ${.5*this.cardWidth}px;`;return Y`
      <div class="loader fade-in" style=${t}>
        <div class="music">
          ${Array.from({length:17}).map(((t,e)=>Y`<div class="bar" style=${this._computeBarStyle(e,17)}></div>`))}
        </div>
        <div class="loader-text">Loading...</div>
      </div>
    `}_computeBarStyle(t,e){const i=Math.floor(e/2),s=t<=i?.1+t/i*.6:.5-(t-i)/(e-i-1)*.4;return`${`animation-delay: ${(.2*Math.abs(t-i)).toFixed(2)}s;`} ${`background: rgba(var(--rgb-primary-color), ${s.toFixed(2)});`}`}};Lt.styles=a`
    .loader {
      height: 100%;
      width: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
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
  `,t([mt({type:Number})],Lt.prototype,"cardWidth",void 0),Lt=t([pt("ytube-playlist-loader")],Lt);let zt=class extends ct{constructor(){super(...arguments),this._cardWidth=0}static async getConfigElement(){return await Promise.resolve().then((function(){return Ft})),document.createElement("ytube-playlist-editor")}async setConfig(t){if(!t.entity||"media_player"!==t.entity.split(".")[0])throw new Error("Specify an entity from within the media_player domain");this._config=t}connectedCallback(){super.connectedCallback(),window.YtubeCard=this,this.updateComplete.then((()=>this._attachObserver()))}disconnectedCallback(){super.disconnectedCallback(),this._resizeObserver&&this._resizeObserver.disconnect()}async _attachObserver(){this._resizeObserver||(this._resizeObserver=new ResizeObserver(At((()=>this._measureCard()),250,!1)));const t=this.shadowRoot.querySelector("ha-card");t&&this._resizeObserver.observe(t)}_measureCard(){const t=this.shadowRoot.querySelector("ha-card");t&&(this._cardWidth=t.clientWidth)}async firstUpdated(t){super.firstUpdated(t),this._attachObserver(),this._measureCard(),await this._loadContent()}updated(t){super.updated(t),t.has("_dialogOpen")&&(this._attachEventListeners(),this.updateBodyScroll())}async _loadContent(){if(!this.hass||!this._config)return;this._browseState=1;const t=this._config.default_page;let e={media_content_type:"",media_content_id:""};e="custom"===t.type&&void 0!==t.media_content_type&&void 0!==t.media_content_id?{media_content_type:t.media_content_type,media_content_id:t.media_content_id}:{media_content_type:t.type,media_content_id:""};const i=await this.store.haService.browseMedia(e.media_content_type,e.media_content_id);i?i.children&&0!==i.children.length?(this._initialItems=i,this._browseState=0):this._browseState=3:this._browseState=2}_attachEventListeners(){var t;const e=null===(t=this.shadowRoot)||void 0===t?void 0:t.getElementById("ytube-dialog");if(!e)return;const i=e.querySelector(".dialog-content");i&&(i.classList.toggle("slide-in"),e.addEventListener("click",(t=>{t.target===e&&(this._dialogOpen=!1)})))}updateBodyScroll(){const t=document.querySelector("body");this._dialogOpen?t.style.overflow="hidden":t.style.overflow="",this.requestUpdate()}_createStore(){this.hass&&this._config&&(this.store=new wt(this.hass,this._config))}render(){return this.hass&&this._config?(this._createStore(),Y`<ha-card>
        ${ut(this._browseState,[[1,()=>Y`<ytube-playlist-loader .cardWidth=${this._cardWidth}></ytube-playlist-loader>`],[2,()=>Y`<div>Error</div>`],[3,()=>Y`<div>No result</div>`],[0,()=>Y`<ytube-grid
                .store=${this.store}
                .element=${this._initialItems}
                .cardWidth=${this._cardWidth}
              ></ytube-grid>`]])}
      </ha-card>
      ${this._renderDialog()}`):Y``}_renderDialog(){var t;if(!this._dialogOpen)return Y``;const e="grid"===this.layout,i=(null===(t=this._initialItems)||void 0===t?void 0:t.children)||[],s=Y`
      <style>
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
      </style>
    `;return Y`<dialog id="ytube-dialog" class="dialog" ?grid=${e}>
      ${s}
      <div class="dialog-content">
        <div class="dialog-header">
          <button @click=${()=>this._dialogOpen=!1}>Close</button>
        </div>
        <div class="content-grid">
          ${i.map((t=>Y`<div>
                ${t.thumbnail?Y`<img src=${t.thumbnail} />`:Y`<div>No thumbnail</div>`}
                <div>${t.title}</div>
              </div>`))}
        </div>
      </div>
    </dialog>`}static get styles(){return Rt}async getCardSize(){return 1}};var jt,Wt;zt.getStubConfig=async t=>await St(t),t([mt({attribute:!1})],zt.prototype,"hass",void 0),t([mt({type:String})],zt.prototype,"layout",void 0),t([yt()],zt.prototype,"_config",void 0),t([yt()],zt.prototype,"store",void 0),t([yt()],zt.prototype,"player",void 0),t([yt()],zt.prototype,"_initialItems",void 0),t([yt()],zt.prototype,"_cardWidth",void 0),t([yt()],zt.prototype,"_browseState",void 0),t([yt()],zt.prototype,"_resizeObserver",void 0),t([yt()],zt.prototype,"_dialogOpen",void 0),t([vt("ytube-grid")],zt.prototype,"_grid",void 0),zt=t([pt("ytube-playlist-card")],zt),window.customCards=window.customCards||[],window.customCards.push({type:"ytube-playlist-card",name:"Ytube playlist Card",preview:!0,description:"YouTube Music Playlist Card for Home Assistant",documentationURL:"https://github.com/ngocjohn/youtube-playlist-card"}),function(t){t.language="language",t.system="system",t.comma_decimal="comma_decimal",t.decimal_comma="decimal_comma",t.space_comma="space_comma",t.none="none"}(jt||(jt={})),function(t){t.language="language",t.system="system",t.am_pm="12",t.twenty_four="24"}(Wt||(Wt={}));var Dt=function(t,e,i,s){s=s||{},i=null==i?{}:i;var r=new Event(e,{bubbles:void 0===s.bubbles||s.bubbles,cancelable:Boolean(s.cancelable),composed:void 0===s.composed||s.composed});return r.detail=i,t.dispatchEvent(r),r};const Bt=({activeTabIndex:t,onTabChange:e,tabs:i})=>{var s;return Y`
    <mwc-tab-bar @MDCTabBar:activated=${t=>e(t.target.activeIndex)}>
      ${i.map((t=>Y`<mwc-tab label=${t.label} icon=${t.icon||""} ?stacked=${t.stacked||!1}></mwc-tab>`))}
    </mwc-tab-bar>
    <div class="tab-content">${(null===(s=i[t])||void 0===s?void 0:s.content)||Y`<div>No content available</div>`}</div>
  `},Vt=async(t,e)=>{if(!t||!e)return;let i=await t.callWS({type:"media_player/browse_media",entity_id:e,media_content_type:"library",media_content_id:"library"}).then((t=>t.children));i=null==i?void 0:i.filter((t=>!Mt.includes(t.media_content_type)));return null==i?void 0:i.map((t=>({label:t.title,value:t.media_content_type})))};var qt=a`.card-config {
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
}`;let Yt=class extends ct{constructor(){super(...arguments),this._activeTabIndex=0,this._pageTypes=[],this._newCardType=new Map,this._usingCustomPage=!1}connectedCallback(){super.connectedCallback(),window.YtubeEditor=this}disconnectedCallback(){super.disconnectedCallback()}static get styles(){return[qt]}async setConfig(t){this._config=structuredClone(t)}async firstUpdated(t){super.firstUpdated(t),await new Promise((t=>setTimeout(t,0))),this._pageTypes=await Vt(this.hass,this._config.entity),this._service=new bt(this.hass,this._config.entity)}render(){if(!this.hass||!this._config)return Y``;const t=[{key:"general",label:"General",content:this._renderGeneralTab()},{key:"layout",label:"Appearance",content:Y`<div>Appearance</div>`}],e=Bt({activeTabIndex:this._activeTabIndex||0,onTabChange:t=>this._activeTabIndex=t,tabs:t});return Y`<div class="card-config">${e}</div>`}_renderGeneralTab(){const t=[{label:"Entity",configType:"entity",configValue:this._config.entity,selector:{entity:{filter:{integration:"ytube_music_player",domain:"media_player"}}},required:!0},{label:"Extra",configType:"extra",configValue:this._config.extra,selector:{entity:{filter:{integration:"ytube_music_player"}}}}],e=this._renderPageTypeSelector();return Y` ${t.map((t=>this._HaSelector(t)))} ${e}`}_renderPageTypeSelector(){var t;if(!this._pageTypes)return Y` <div>Loading...</div> `;const e=[{label:"Custom",value:"custom"},...this._pageTypes],i={label:"Default Page",configType:"default_page",configValue:null===(t=this._config.default_page)||void 0===t?void 0:t.type,selector:{select:{options:e}},required:!0},s=this._HaSelector(i);return Y`${s} ${this._renderCustomPageForm()} ${this._renderCustomPageTitle()}`}_renderCustomPageTitle(){var t,e;return"custom"===(null===(t=this._config.default_page)||void 0===t?void 0:t.type)&&(null===(e=this._config.default_page)||void 0===e?void 0:e.title)?Y`<div class="grid-forms" ?hidden=${this._usingCustomPage}>
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
    `;return Y` <div class="grid-forms">${i} ${s}</div>`}_handleCustomPageTypeChange(t){t.stopPropagation();const e=t.target,i=e.configValue,s=e.value,r=new Map(this._newCardType);r.set(i,s.trim()),this._newCardType=r,this.requestUpdate()}async _handleCustomPageTypeSave(){var t;const e=this._newCardType.get("media_content_type"),i=this._newCardType.get("media_content_id");if(!e&&!i)return;const s=await(null===(t=this._service)||void 0===t?void 0:t.browseMedia(e,i).then((t=>null==t?void 0:t.title)))||"";this._config=Object.assign(Object.assign({},this._config),{default_page:{type:"custom",media_content_type:null!=e?e:"",media_content_id:null!=i?i:"",title:s}}),this._usingCustomPage=!1,this._newCardType=new Map,Dt(this,"config-changed",{config:this._config})}_HaSelector({label:t,configType:e,configValue:i,selector:s,required:r}){return Y`
      <ha-selector
        .hass=${this.hass}
        .value=${i}
        .label=${t}
        .configType=${e}
        .selector=${s}
        @value-changed=${this._valueChanged}
        .required=${r||!1}
      ></ha-selector>
    `}_valueChanged(t){var e;if(t.stopPropagation(),!this._config||!this.hass)return;const i=t.target,s=i.configType,r=void 0!==i.checked?i.checked:(null===(e=t.detail)||void 0===e?void 0:e.value)||i.value,n={};if("default_page"===s){if("custom"===r)return void(this._usingCustomPage=!0);n[s]={type:r},this._usingCustomPage=!1}else n[s]=r;Object.keys(n).length>0&&(this._config=Object.assign(Object.assign({},this._config),n),Dt(this,"config-changed",{config:this._config}))}};t([mt({attribute:!1})],Yt.prototype,"hass",void 0),t([yt()],Yt.prototype,"_config",void 0),t([yt()],Yt.prototype,"_activeTabIndex",void 0),t([yt()],Yt.prototype,"_pageTypes",void 0),t([yt()],Yt.prototype,"_newCardType",void 0),t([yt()],Yt.prototype,"_usingCustomPage",void 0),t([yt()],Yt.prototype,"_service",void 0),Yt=t([pt("ytube-playlist-editor")],Yt);var Ft=Object.freeze({__proto__:null,get YtubePlaylistEditor(){return Yt}});export{zt as YtubePlaylistCard};
