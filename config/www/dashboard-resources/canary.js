var lt = Object.defineProperty, ct = Object.defineProperties;
var ht = Object.getOwnPropertyDescriptors;
var rt = Object.getOwnPropertySymbols;
var dt = Object.prototype.hasOwnProperty, ut = Object.prototype.propertyIsEnumerable;
var at = (x, b, w) => b in x ? lt(x, b, { enumerable: !0, configurable: !0, writable: !0, value: w }) : x[b] = w, nt = (x, b) => {
  for (var w in b || (b = {}))
    dt.call(b, w) && at(x, w, b[w]);
  if (rt)
    for (var w of rt(b))
      ut.call(b, w) && at(x, w, b[w]);
  return x;
}, ot = (x, b) => ct(x, ht(b));
var pt = (x, b) => () => (b || x((b = { exports: {} }).exports, b), b.exports);
var it = (x, b, w) => new Promise((U, j) => {
  var J = (K) => {
    try {
      F(w.next(K));
    } catch (G) {
      j(G);
    }
  }, Y = (K) => {
    try {
      F(w.throw(K));
    } catch (G) {
      j(G);
    }
  }, F = (K) => K.done ? U(K.value) : Promise.resolve(K.value).then(J, Y);
  F((w = w.apply(x, b)).next());
});
var ft = pt((exports) => {
  var t$3, r$3;
  (function(x) {
    x.language = "language", x.system = "system", x.comma_decimal = "comma_decimal", x.decimal_comma = "decimal_comma", x.space_comma = "space_comma", x.none = "none";
  })(t$3 || (t$3 = {})), function(x) {
    x.language = "language", x.system = "system", x.am_pm = "12", x.twenty_four = "24";
  }(r$3 || (r$3 = {}));
  function O() {
    return (O = Object.assign || function(x) {
      for (var b = 1; b < arguments.length; b++) {
        var w = arguments[b];
        for (var U in w) Object.prototype.hasOwnProperty.call(w, U) && (x[U] = w[U]);
      }
      return x;
    }).apply(this, arguments);
  }
  var q = function(x, b, w, U) {
    U === void 0 && (U = !1), x._themes || (x._themes = {});
    var j = b.default_theme;
    (w === "default" || w && b.themes[w]) && (j = w);
    var J = O({}, x._themes);
    if (j !== "default") {
      var Y = b.themes[j];
      Object.keys(Y).forEach(function(G) {
        var W = "--" + G;
        x._themes[W] = "", J[W] = Y[G];
      });
    }
    if (x.updateStyles ? x.updateStyles(J) : window.ShadyCSS && window.ShadyCSS.styleSubtree(x, J), U) {
      var F = document.querySelector("meta[name=theme-color]");
      if (F) {
        F.hasAttribute("default-content") || F.setAttribute("default-content", F.getAttribute("content"));
        var K = J["--primary-color"] || F.getAttribute("default-content");
        F.setAttribute("content", K);
      }
    }
  }, A$1 = function(x) {
    return typeof x.getCardSize == "function" ? x.getCardSize() : 4;
  }, ne = function(x, b, w, U) {
    U = U || {}, w = w == null ? {} : w;
    var j = new Event(b, { bubbles: U.bubbles === void 0 || U.bubbles, cancelable: !!U.cancelable, composed: U.composed === void 0 || U.composed });
    return j.detail = w, x.dispatchEvent(j), j;
  }, ie = /* @__PURE__ */ new Set(["call-service", "divider", "section", "weblink", "cast", "select"]), ae = { alert: "toggle", automation: "toggle", climate: "climate", cover: "cover", fan: "toggle", group: "group", input_boolean: "toggle", input_number: "input-number", input_select: "input-select", input_text: "input-text", light: "toggle", lock: "lock", media_player: "media-player", remote: "toggle", scene: "scene", script: "script", sensor: "sensor", timer: "timer", switch: "toggle", vacuum: "toggle", water_heater: "climate", input_datetime: "input-datetime" }, oe = function(x, b) {
    b === void 0 && (b = !1);
    var w = function(K, G) {
      return U("hui-error-card", { type: "error", error: K, config: G });
    }, U = function(K, G) {
      var W = window.document.createElement(K);
      try {
        if (!W.setConfig) return;
        W.setConfig(G);
      } catch (X) {
        return console.error(K, X), w(X.message, G);
      }
      return W;
    };
    if (!x || typeof x != "object" || !b && !x.type) return w("No type defined", x);
    var j = x.type;
    if (j && j.startsWith("custom:")) j = j.substr(7);
    else if (b) if (ie.has(j)) j = "hui-" + j + "-row";
    else {
      if (!x.entity) return w("Invalid config given.", x);
      var J = x.entity.split(".", 1)[0];
      j = "hui-" + (ae[J] || "text") + "-entity-row";
    }
    else j = "hui-" + j + "-card";
    if (customElements.get(j)) return U(j, x);
    var Y = w("Custom element doesn't exist: " + x.type + ".", x);
    Y.style.display = "None";
    var F = setTimeout(function() {
      Y.style.display = "";
    }, 2e3);
    return customElements.whenDefined(x.type).then(function() {
      clearTimeout(F), ne(Y, "ll-rebuild", {}, Y);
    }), Y;
  }, ke = function() {
    var x = document.querySelector("home-assistant");
    if (x = (x = (x = (x = (x = (x = (x = (x = x && x.shadowRoot) && x.querySelector("home-assistant-main")) && x.shadowRoot) && x.querySelector("app-drawer-layout partial-panel-resolver")) && x.shadowRoot || x) && x.querySelector("ha-panel-lovelace")) && x.shadowRoot) && x.querySelector("hui-root")) {
      var b = x.lovelace;
      return b.current_view = x.___curView, b;
    }
    return null;
  };
  const name = "canary";
  function hass() {
    if (document.querySelector("hc-main"))
      return document.querySelector("hc-main").hass;
    if (document.querySelector("home-assistant"))
      return document.querySelector("home-assistant").hass;
  }
  function provideHass(x) {
    if (document.querySelector("hc-main"))
      return document.querySelector("hc-main").provideHass(x);
    if (document.querySelector("home-assistant"))
      return document.querySelector("home-assistant").provideHass(x);
  }
  const ID_STORAGE_KEY = "lovelace-player-device-id";
  function _deviceID() {
    if (!localStorage[ID_STORAGE_KEY]) {
      const x = () => Math.floor((1 + Math.random()) * 1e5).toString(16).substring(1);
      window.fully && typeof fully.getDeviceId == "function" ? localStorage[ID_STORAGE_KEY] = fully.getDeviceId() : localStorage[ID_STORAGE_KEY] = `${x()}${x()}-${x()}${x()}`;
    }
    return localStorage[ID_STORAGE_KEY];
  }
  let deviceID = _deviceID();
  const setDeviceID = (x) => {
    x !== null && (x === "clear" ? localStorage.removeItem(ID_STORAGE_KEY) : localStorage[ID_STORAGE_KEY] = x, deviceID = _deviceID());
  }, params = new URLSearchParams(window.location.search);
  params.get("deviceID") && setDeviceID(params.get("deviceID"));
  function hasOldTemplate(x) {
    return /\[\[\s+.*\s+\]\]/.test(x);
  }
  function parseTemplateString(str, specialData = {}) {
    if (typeof str != "string") return text;
    const FUNCTION = /^[a-zA-Z0-9_]+\(.*\)$/, EXPR = /([^=<>!]+)\s*(==|!=|<|>|<=|>=)\s*([^=<>!]+)/, SPECIAL = /^\{.+\}$/, STRING = /^"[^"]*"|'[^']*'$/;
    typeof specialData == "string" && (specialData = {}), specialData = Object.assign({
      user: hass().user.name,
      browser: deviceID,
      hash: location.hash.substr(1) || " "
    }, specialData);
    const _parse_function = (x) => {
      let b = [x.substr(0, x.indexOf("(")).trim()];
      for (x = x.substr(x.indexOf("(") + 1); x; ) {
        let w = 0, U = 0, j = !1;
        for (; x[w]; ) {
          let J = x[w++];
          if (J === j && w > 1 && x[w - 2] !== "\\" ? j = !1 : `"'`.includes(J) && (j = J), !j) {
            if (J === "(")
              U = U + 1;
            else if (J === ")") {
              U = U - 1;
              continue;
            }
            if (!(U > 0) && ",)".includes(J))
              break;
          }
        }
        b.push(x.substr(0, w - 1).trim()), x = x.substr(w);
      }
      return b;
    }, _parse_special = (x) => (x = x.substr(1, x.length - 2), specialData[x] || `{${x}}`), _parse_entity = (x) => {
      x = x.split(".");
      let b;
      if (x[0].match(SPECIAL))
        b = _parse_special(x.shift()), b = hass().states[b] || b;
      else if (b = hass().states[`${x.shift()}.${x.shift()}`], !x.length) return b.state;
      return x.forEach((w) => b = b[w]), b;
    }, _eval_expr = (str) => {
      if (str = EXPR.exec(str), str === null) return !1;
      const lhs = parseTemplateString(str[1]), rhs = parseTemplateString(str[3]);
      var expr = "";
      return parseFloat(lhs) != lhs ? expr = `"${lhs}" ${str[2]} "${rhs}"` : expr = `${parseFloat(lhs)} ${str[2]} ${parseFloat(rhs)}`, eval(expr);
    }, _eval_function = (x) => {
      if (x[0] === "if")
        return _eval_expr(x[1]) ? parseTemplateString(x[2]) : parseTemplateString(x[3]);
    };
    try {
      return str = str.trim(), str.match(STRING) ? str.substr(1, str.length - 2) : str.match(SPECIAL) ? _parse_special(str) : str.match(FUNCTION) ? _eval_function(_parse_function(str)) : str.includes(".") ? _parse_entity(str) : str;
    } catch (x) {
      return `[[ Template matching failed: ${str} ]]`;
    }
  }
  function parseOldTemplate(x, b = {}) {
    if (typeof x != "string") return x;
    var w = /\[\[\s(.*?)\s\]\]/g;
    return x = x.replace(w, (U, j, J, Y) => parseTemplateString(j, b)), x;
  }
  function hasTemplate(x) {
    if (String(x).includes("{%") || String(x).includes("{{"))
      return !0;
  }
  function subscribeRenderTemplate(x, b, w, U = !0) {
    x || (x = hass().connection);
    let j = nt({
      user: hass().user.name,
      browser: deviceID,
      hash: location.hash.substr(1) || " "
    }, w.variables), J = w.template, Y = w.entity_ids;
    return x.subscribeMessage(
      (F) => {
        if (U) {
          let K = String(F.result);
          const G = /_\([^)]*\)/g;
          K = K.replace(G, (W) => hass().localize(W.substring(2, W.length - 1)) || W), b(K);
        } else
          b(F.result);
      },
      {
        type: "render_template",
        template: J,
        variables: j,
        entity_ids: Y
      }
    );
  }
  function oldExtractEntities(x, b = {}) {
    var J;
    const w = /\[\[\s(.*?)\s]]/g, U = [], j = x.matchAll(w);
    for (const Y of j) {
      const F = /^\w+\(.*\)$/, K = /([^=<>!]+)\s*(?:==|!=|<|>|<=|>=)\s*([^=<>!]+)/, G = /^\{.+}$/, W = /^\w+\((.*?),/;
      if (F.test(Y[1].trim())) {
        const X = (J = Y[1].trim().match(W)) == null ? void 0 : J[1], Q = (X == null ? void 0 : X.match(K)) || [];
        for (let tt = 1; tt < Q.length; tt++) {
          const et = Q[tt].trim().split(".");
          et.length > 1 && (G.test(et[0]) ? b.entity && et[0].includes("{entity}") && U.push(b.entity) : U.push(`${et[0]}.${et[1]}`));
        }
      } else {
        const X = Y[1].trim().split(".");
        X.length > 1 && (G.test(X[0]) ? b.entity && X[0] === "{entity}" && U.push(b.entity) : U.push(`${X[0]}.${X[1]}`));
      }
    }
    return Array.from(new Set(U));
  }
  class SecondaryInfo extends HTMLElement {
    constructor() {
      super(...arguments), this._disconnected = !0, this._isJinjaTemplate = !1, this._isOldTemplate = !1;
    }
    disconnectedCallback() {
      this._disconnect();
    }
    connectedCallback() {
      this._disconnected = !1, this._isJinjaTemplate ? this._connect() : this._updateNonJinjaTemplates(this._hass);
    }
    _hasJinjaTemplate(b) {
      return typeof b.template == "object" ? !1 : b.template.includes("{%") ? !0 : b.template.includes("{{");
    }
    set template(b) {
      var w, U, j;
      if (this._data = JSON.parse(JSON.stringify(b)), Array.isArray(this._data.entity_ids) || (this._data.entity_ids = void 0), this._isJinjaTemplate = this._hasJinjaTemplate(this._data), this._isOldTemplate = !this._isJinjaTemplate && typeof this._data.template != "object", !this._isJinjaTemplate)
        if (typeof this._data.template == "string")
          this._data.entity_ids || (this._data.entity_ids = oldExtractEntities(
            this._data.template,
            (w = this._data.variables) == null ? void 0 : w.config
          ));
        else {
          const J = this._data.template.entity || ((j = (U = this._data.variables) == null ? void 0 : U.config) == null ? void 0 : j.entity);
          J && (this._data.entity_ids = [J]);
        }
    }
    update() {
      this._disconnect().then(() => this._connect());
    }
    _getElement() {
      var b;
      if (!this._element) {
        const w = (b = this.parentNode) == null ? void 0 : b.querySelector(".secondary");
        w && (this._element = w, this._element.innerHTML = "Loading...");
      }
      return this._element;
    }
    set hass(b) {
      !this._isJinjaTemplate && !this._disconnected && this._data.template && this._shouldUpdate(b, this._data.entity_ids) && this._updateNonJinjaTemplates(b), this._hass = b;
    }
    _updateNonJinjaTemplates(b) {
      var w, U;
      if (!(!b || !this._getElement())) {
        if (this._isOldTemplate)
          this._element && (this._element.innerHTML = parseOldTemplate(
            this._data.template,
            (w = this._data.variables) == null ? void 0 : w.config
          ));
        else if (typeof this._data.template != "string") {
          const j = this._data.template, J = (U = this._data.entity_ids) == null ? void 0 : U[0];
          if (!J)
            return;
          let Y = b.states[J];
          Y = j.attribute ? Y.attributes[j.attribute] : Y.state, Y && this._element && (this._element.innerHTML = `${j.prefix || ""}${Y}${j.postfix || ""}`);
        }
      }
    }
    _shouldUpdate(b, w) {
      return !this._hass || !w ? !0 : w.some(
        (U) => {
          var j;
          return b.states[U] !== ((j = this._hass) == null ? void 0 : j.states[U]);
        }
      );
    }
    _connect() {
      return it(this, null, function* () {
        var b;
        this._data && this._isJinjaTemplate && (this._unsubRenderTemplate || this._getElement() && (this._unsubRenderTemplate = subscribeRenderTemplate(
          null,
          (w) => {
            this._element && (this._element.innerHTML = w);
          },
          this._data
        ), yield (b = this._unsubRenderTemplate) == null ? void 0 : b.catch(() => {
          this._element && (typeof this._data.template == "string" ? this._element.innerHTML = this._data.template : this._element.innerHTML = JSON.stringify(this._data.template)), this._unsubRenderTemplate = void 0;
        })));
      });
    }
    _disconnect() {
      return it(this, null, function* () {
        if (this._disconnected = !0, this._unsubRenderTemplate)
          try {
            const b = yield this._unsubRenderTemplate;
            this._unsubRenderTemplate = void 0, yield b();
          } catch (b) {
            if (typeof b == "object" && (b == null ? void 0 : b.code) !== "not_found") throw b;
          }
      });
    }
  }
  customElements.define("secondary-info", SecondaryInfo);
  const DEFAULT_SECONDARY_INFO = [
    "entity-id",
    "last-changed",
    "last-updated",
    "last-triggered",
    "position",
    "tilt-position",
    "brightness"
  ], VERTICAL_STACK_IN_CARD_STYLE = `
    #root > *:not(:first-child) {
      margin-top: -24px;
    }
`, NO_CARD_STYLE = {
    boxShadow: "none",
    background: "none",
    border: "none"
  };
  function createModule(x, b) {
    customElements.whenDefined(x).then(() => {
      const w = customElements.get(x), U = w.prototype.firstUpdated;
      w.prototype.firstUpdated = function(j) {
        U.call(this, j), b.call(this, j);
      };
    });
  }
  function mapStyle(x, b = "") {
    return Object.keys(x).reduce((w, U) => [...w, `${b}${U}: ${x[U]};`], []).join(" ");
  }
  const findConfig = function(x) {
    return x.config ? x.config : x._config ? x._config : x.host ? findConfig(x.host) : x.parentElement ? findConfig(x.parentElement) : x.parentNode ? findConfig(x.parentNode) : null;
  }, lovelaceConfig = ke(), canaryConfig = lovelaceConfig && lovelaceConfig.config.canary;
  function moduleEnabled(x) {
    return canaryConfig && canaryConfig.disable ? !canaryConfig.disable.includes(x) : !0;
  }
  function extensionEnabled(x, b) {
    const w = x.disable_canary;
    return w ? w === !0 ? !1 : !w.includes(b) : !0;
  }
  const MODULE$4 = "generic-entity-row", ELEMENT$4 = "hui-generic-entity-row";
  moduleEnabled(MODULE$4) && createModule(ELEMENT$4, function() {
    var x, b, w, U, j;
    if ((x = this.config) != null && x.secondary_info && extensionEnabled(this.config, "secondary_info") && !DEFAULT_SECONDARY_INFO.includes(this.config.secondary_info))
      if (typeof this.config.secondary_info == "object" || hasOldTemplate(this.config.secondary_info) || hasTemplate(this.config.secondary_info)) {
        const J = document.createElement("secondary-info");
        J.template = {
          template: this.config.secondary_info,
          variables: { config: this.config, entity: this.config.entity },
          entity_ids: this.config.entity_ids
        }, (b = this.shadowRoot) == null || b.appendChild(J), provideHass(J);
      } else {
        const J = (w = this.shadowRoot) == null ? void 0 : w.querySelector(".secondary");
        J && (J.innerHTML = this.config.secondary_info);
      }
    if ((U = this.config) != null && U.canary_theme && extensionEnabled(this.config, "canary_theme") && q(this, hass().themes, this.config.canary_theme), (j = this.config) != null && j.canary_style && extensionEnabled(this.config, "canary_style"))
      if (typeof this.config.canary_style == "string") {
        const J = document.createElement("style");
        J.innerHTML = this.config.canary_style, this.appendChild(J);
      } else
        this.style.cssText += mapStyle(this.config.canary_style);
  });
  const MODULE$3 = "generic-card", ELEMENT$3 = "ha-card";
  moduleEnabled(MODULE$3) && createModule(ELEMENT$3, function() {
    const x = findConfig(this);
    x && (this.style.transition = "none", x.canary_theme && extensionEnabled(x, "canary_theme") && q(
      this,
      this.hass ? this.hass.themes : hass().themes,
      x.canary_theme
    ), x.canary_style && extensionEnabled(x, "canary_style") && (this.style.cssText += mapStyle(x.canary_style)), x.no_card === !0 && extensionEnabled(x, "no_card") && Object.assign(this.style, NO_CARD_STYLE), this.offsetHeight, this.style.transition = "");
  });
  const MODULE$2 = "vertical-stack", ELEMENT$2 = "hui-vertical-stack-card";
  if (moduleEnabled(MODULE$2)) {
    const x = function(b) {
      return it(this, null, function* () {
        b && (yield b.updateComplete, b.tagName === "HA-CARD" && (b.style.transition = "none", Object.assign(b.style, NO_CARD_STYLE), b.offsetHeight, b.style.transition = ""), b.firstElementChild && (yield x(b.firstElementChild)), b.shadowRoot && (yield x(b.shadowRoot.firstElementChild)), b.nextElementSibling && (yield x(b.nextElementSibling)));
      });
    };
    customElements.whenDefined("ha-card").then(() => {
      var w;
      const b = VERTICAL_STACK_IN_CARD_STYLE + ((w = customElements.get("ha-card").styles) == null ? void 0 : w.cssText);
      createModule(ELEMENT$2, function() {
        var U, j, J;
        if (((U = this._config) == null ? void 0 : U.in_card) === !0 && extensionEnabled(this._config, "in_card")) {
          const Y = document.createElement("style");
          Y.innerHTML = b, (j = this.shadowRoot) == null || j.appendChild(Y);
          const F = (J = this.shadowRoot) == null ? void 0 : J.querySelector("#root");
          x(F);
        }
      });
    });
  }
  const MODULE$1 = "glance-card", ELEMENT$1 = "hui-glance-card";
  if (moduleEnabled(MODULE$1)) {
    const x = function(b) {
      switch (b) {
        case "center":
          return "space-evenly";
        case "right":
          return "flex-end";
        default:
          return "flex-start";
      }
    };
    createModule(ELEMENT$1, function() {
      var b, w;
      if ((b = this._config) != null && b.align && extensionEnabled(this._config, "align")) {
        const U = (w = this.shadowRoot) == null ? void 0 : w.querySelector(".entities");
        U && (U.style.justifyContent = x(this._config.align));
      }
    });
  }
  const MODULE = "warning", ELEMENT = "hui-warning";
  moduleEnabled(MODULE) && createModule(ELEMENT, function() {
    const x = findConfig(this);
    x.hide_warning === !0 && extensionEnabled(x, "hide_warning") && (this.style.display = "none");
  });
  const t$2 = window, e$3 = t$2.ShadowRoot && (t$2.ShadyCSS === void 0 || t$2.ShadyCSS.nativeShadow) && "adoptedStyleSheets" in Document.prototype && "replace" in CSSStyleSheet.prototype, s$3 = Symbol(), n$5 = /* @__PURE__ */ new WeakMap();
  let o$3 = class {
    constructor(b, w, U) {
      if (this._$cssResult$ = !0, U !== s$3) throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");
      this.cssText = b, this.t = w;
    }
    get styleSheet() {
      let b = this.o;
      const w = this.t;
      if (e$3 && b === void 0) {
        const U = w !== void 0 && w.length === 1;
        U && (b = n$5.get(w)), b === void 0 && ((this.o = b = new CSSStyleSheet()).replaceSync(this.cssText), U && n$5.set(w, b));
      }
      return b;
    }
    toString() {
      return this.cssText;
    }
  };
  const r$2 = (x) => new o$3(typeof x == "string" ? x : x + "", void 0, s$3), S$1 = (x, b) => {
    e$3 ? x.adoptedStyleSheets = b.map((w) => w instanceof CSSStyleSheet ? w : w.styleSheet) : b.forEach((w) => {
      const U = document.createElement("style"), j = t$2.litNonce;
      j !== void 0 && U.setAttribute("nonce", j), U.textContent = w.cssText, x.appendChild(U);
    });
  }, c$1 = e$3 ? (x) => x : (x) => x instanceof CSSStyleSheet ? ((b) => {
    let w = "";
    for (const U of b.cssRules) w += U.cssText;
    return r$2(w);
  })(x) : x;
  var s$2;
  const e$2 = window, r$1 = e$2.trustedTypes, h$1 = r$1 ? r$1.emptyScript : "", o$2 = e$2.reactiveElementPolyfillSupport, n$4 = { toAttribute(x, b) {
    switch (b) {
      case Boolean:
        x = x ? h$1 : null;
        break;
      case Object:
      case Array:
        x = x == null ? x : JSON.stringify(x);
    }
    return x;
  }, fromAttribute(x, b) {
    let w = x;
    switch (b) {
      case Boolean:
        w = x !== null;
        break;
      case Number:
        w = x === null ? null : Number(x);
        break;
      case Object:
      case Array:
        try {
          w = JSON.parse(x);
        } catch (U) {
          w = null;
        }
    }
    return w;
  } }, a$1 = (x, b) => b !== x && (b == b || x == x), l$2 = { attribute: !0, type: String, converter: n$4, reflect: !1, hasChanged: a$1 }, d$1 = "finalized";
  let u$1 = class extends HTMLElement {
    constructor() {
      super(), this._$Ei = /* @__PURE__ */ new Map(), this.isUpdatePending = !1, this.hasUpdated = !1, this._$El = null, this._$Eu();
    }
    static addInitializer(b) {
      var w;
      this.finalize(), ((w = this.h) !== null && w !== void 0 ? w : this.h = []).push(b);
    }
    static get observedAttributes() {
      this.finalize();
      const b = [];
      return this.elementProperties.forEach((w, U) => {
        const j = this._$Ep(U, w);
        j !== void 0 && (this._$Ev.set(j, U), b.push(j));
      }), b;
    }
    static createProperty(b, w = l$2) {
      if (w.state && (w.attribute = !1), this.finalize(), this.elementProperties.set(b, w), !w.noAccessor && !this.prototype.hasOwnProperty(b)) {
        const U = typeof b == "symbol" ? Symbol() : "__" + b, j = this.getPropertyDescriptor(b, U, w);
        j !== void 0 && Object.defineProperty(this.prototype, b, j);
      }
    }
    static getPropertyDescriptor(b, w, U) {
      return { get() {
        return this[w];
      }, set(j) {
        const J = this[b];
        this[w] = j, this.requestUpdate(b, J, U);
      }, configurable: !0, enumerable: !0 };
    }
    static getPropertyOptions(b) {
      return this.elementProperties.get(b) || l$2;
    }
    static finalize() {
      if (this.hasOwnProperty(d$1)) return !1;
      this[d$1] = !0;
      const b = Object.getPrototypeOf(this);
      if (b.finalize(), b.h !== void 0 && (this.h = [...b.h]), this.elementProperties = new Map(b.elementProperties), this._$Ev = /* @__PURE__ */ new Map(), this.hasOwnProperty("properties")) {
        const w = this.properties, U = [...Object.getOwnPropertyNames(w), ...Object.getOwnPropertySymbols(w)];
        for (const j of U) this.createProperty(j, w[j]);
      }
      return this.elementStyles = this.finalizeStyles(this.styles), !0;
    }
    static finalizeStyles(b) {
      const w = [];
      if (Array.isArray(b)) {
        const U = new Set(b.flat(1 / 0).reverse());
        for (const j of U) w.unshift(c$1(j));
      } else b !== void 0 && w.push(c$1(b));
      return w;
    }
    static _$Ep(b, w) {
      const U = w.attribute;
      return U === !1 ? void 0 : typeof U == "string" ? U : typeof b == "string" ? b.toLowerCase() : void 0;
    }
    _$Eu() {
      var b;
      this._$E_ = new Promise((w) => this.enableUpdating = w), this._$AL = /* @__PURE__ */ new Map(), this._$Eg(), this.requestUpdate(), (b = this.constructor.h) === null || b === void 0 || b.forEach((w) => w(this));
    }
    addController(b) {
      var w, U;
      ((w = this._$ES) !== null && w !== void 0 ? w : this._$ES = []).push(b), this.renderRoot !== void 0 && this.isConnected && ((U = b.hostConnected) === null || U === void 0 || U.call(b));
    }
    removeController(b) {
      var w;
      (w = this._$ES) === null || w === void 0 || w.splice(this._$ES.indexOf(b) >>> 0, 1);
    }
    _$Eg() {
      this.constructor.elementProperties.forEach((b, w) => {
        this.hasOwnProperty(w) && (this._$Ei.set(w, this[w]), delete this[w]);
      });
    }
    createRenderRoot() {
      var b;
      const w = (b = this.shadowRoot) !== null && b !== void 0 ? b : this.attachShadow(this.constructor.shadowRootOptions);
      return S$1(w, this.constructor.elementStyles), w;
    }
    connectedCallback() {
      var b;
      this.renderRoot === void 0 && (this.renderRoot = this.createRenderRoot()), this.enableUpdating(!0), (b = this._$ES) === null || b === void 0 || b.forEach((w) => {
        var U;
        return (U = w.hostConnected) === null || U === void 0 ? void 0 : U.call(w);
      });
    }
    enableUpdating(b) {
    }
    disconnectedCallback() {
      var b;
      (b = this._$ES) === null || b === void 0 || b.forEach((w) => {
        var U;
        return (U = w.hostDisconnected) === null || U === void 0 ? void 0 : U.call(w);
      });
    }
    attributeChangedCallback(b, w, U) {
      this._$AK(b, U);
    }
    _$EO(b, w, U = l$2) {
      var j;
      const J = this.constructor._$Ep(b, U);
      if (J !== void 0 && U.reflect === !0) {
        const Y = (((j = U.converter) === null || j === void 0 ? void 0 : j.toAttribute) !== void 0 ? U.converter : n$4).toAttribute(w, U.type);
        this._$El = b, Y == null ? this.removeAttribute(J) : this.setAttribute(J, Y), this._$El = null;
      }
    }
    _$AK(b, w) {
      var U;
      const j = this.constructor, J = j._$Ev.get(b);
      if (J !== void 0 && this._$El !== J) {
        const Y = j.getPropertyOptions(J), F = typeof Y.converter == "function" ? { fromAttribute: Y.converter } : ((U = Y.converter) === null || U === void 0 ? void 0 : U.fromAttribute) !== void 0 ? Y.converter : n$4;
        this._$El = J, this[J] = F.fromAttribute(w, Y.type), this._$El = null;
      }
    }
    requestUpdate(b, w, U) {
      let j = !0;
      b !== void 0 && (((U = U || this.constructor.getPropertyOptions(b)).hasChanged || a$1)(this[b], w) ? (this._$AL.has(b) || this._$AL.set(b, w), U.reflect === !0 && this._$El !== b && (this._$EC === void 0 && (this._$EC = /* @__PURE__ */ new Map()), this._$EC.set(b, U))) : j = !1), !this.isUpdatePending && j && (this._$E_ = this._$Ej());
    }
    _$Ej() {
      return it(this, null, function* () {
        this.isUpdatePending = !0;
        try {
          yield this._$E_;
        } catch (w) {
          Promise.reject(w);
        }
        const b = this.scheduleUpdate();
        return b != null && (yield b), !this.isUpdatePending;
      });
    }
    scheduleUpdate() {
      return this.performUpdate();
    }
    performUpdate() {
      var b;
      if (!this.isUpdatePending) return;
      this.hasUpdated, this._$Ei && (this._$Ei.forEach((j, J) => this[J] = j), this._$Ei = void 0);
      let w = !1;
      const U = this._$AL;
      try {
        w = this.shouldUpdate(U), w ? (this.willUpdate(U), (b = this._$ES) === null || b === void 0 || b.forEach((j) => {
          var J;
          return (J = j.hostUpdate) === null || J === void 0 ? void 0 : J.call(j);
        }), this.update(U)) : this._$Ek();
      } catch (j) {
        throw w = !1, this._$Ek(), j;
      }
      w && this._$AE(U);
    }
    willUpdate(b) {
    }
    _$AE(b) {
      var w;
      (w = this._$ES) === null || w === void 0 || w.forEach((U) => {
        var j;
        return (j = U.hostUpdated) === null || j === void 0 ? void 0 : j.call(U);
      }), this.hasUpdated || (this.hasUpdated = !0, this.firstUpdated(b)), this.updated(b);
    }
    _$Ek() {
      this._$AL = /* @__PURE__ */ new Map(), this.isUpdatePending = !1;
    }
    get updateComplete() {
      return this.getUpdateComplete();
    }
    getUpdateComplete() {
      return this._$E_;
    }
    shouldUpdate(b) {
      return !0;
    }
    update(b) {
      this._$EC !== void 0 && (this._$EC.forEach((w, U) => this._$EO(U, this[U], w)), this._$EC = void 0), this._$Ek();
    }
    updated(b) {
    }
    firstUpdated(b) {
    }
  };
  u$1[d$1] = !0, u$1.elementProperties = /* @__PURE__ */ new Map(), u$1.elementStyles = [], u$1.shadowRootOptions = { mode: "open" }, o$2 == null || o$2({ ReactiveElement: u$1 }), ((s$2 = e$2.reactiveElementVersions) !== null && s$2 !== void 0 ? s$2 : e$2.reactiveElementVersions = []).push("1.6.3");
  var t$1;
  const i$1 = window, s$1 = i$1.trustedTypes, e$1 = s$1 ? s$1.createPolicy("lit-html", { createHTML: (x) => x }) : void 0, o$1 = "$lit$", n$3 = `lit$${(Math.random() + "").slice(9)}$`, l$1 = "?" + n$3, h = `<${l$1}>`, r = document, u = () => r.createComment(""), d = (x) => x === null || typeof x != "object" && typeof x != "function", c = Array.isArray, v = (x) => c(x) || typeof (x == null ? void 0 : x[Symbol.iterator]) == "function", a = `[ 	
\f\r]`, f = /<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g, _ = /-->/g, m = />/g, p = RegExp(`>|${a}(?:([^\\s"'>=/]+)(${a}*=${a}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`, "g"), g = /'/g, $ = /"/g, y = /^(?:script|style|textarea|title)$/i, T = Symbol.for("lit-noChange"), A = Symbol.for("lit-nothing"), E = /* @__PURE__ */ new WeakMap(), C = r.createTreeWalker(r, 129, null, !1);
  function P(x, b) {
    if (!Array.isArray(x) || !x.hasOwnProperty("raw")) throw Error("invalid template strings array");
    return e$1 !== void 0 ? e$1.createHTML(b) : b;
  }
  const V = (x, b) => {
    const w = x.length - 1, U = [];
    let j, J = b === 2 ? "<svg>" : "", Y = f;
    for (let F = 0; F < w; F++) {
      const K = x[F];
      let G, W, X = -1, Q = 0;
      for (; Q < K.length && (Y.lastIndex = Q, W = Y.exec(K), W !== null); ) Q = Y.lastIndex, Y === f ? W[1] === "!--" ? Y = _ : W[1] !== void 0 ? Y = m : W[2] !== void 0 ? (y.test(W[2]) && (j = RegExp("</" + W[2], "g")), Y = p) : W[3] !== void 0 && (Y = p) : Y === p ? W[0] === ">" ? (Y = j != null ? j : f, X = -1) : W[1] === void 0 ? X = -2 : (X = Y.lastIndex - W[2].length, G = W[1], Y = W[3] === void 0 ? p : W[3] === '"' ? $ : g) : Y === $ || Y === g ? Y = p : Y === _ || Y === m ? Y = f : (Y = p, j = void 0);
      const tt = Y === p && x[F + 1].startsWith("/>") ? " " : "";
      J += Y === f ? K + h : X >= 0 ? (U.push(G), K.slice(0, X) + o$1 + K.slice(X) + n$3 + tt) : K + n$3 + (X === -2 ? (U.push(void 0), F) : tt);
    }
    return [P(x, J + (x[w] || "<?>") + (b === 2 ? "</svg>" : "")), U];
  };
  class N {
    constructor({ strings: b, _$litType$: w }, U) {
      let j;
      this.parts = [];
      let J = 0, Y = 0;
      const F = b.length - 1, K = this.parts, [G, W] = V(b, w);
      if (this.el = N.createElement(G, U), C.currentNode = this.el.content, w === 2) {
        const X = this.el.content, Q = X.firstChild;
        Q.remove(), X.append(...Q.childNodes);
      }
      for (; (j = C.nextNode()) !== null && K.length < F; ) {
        if (j.nodeType === 1) {
          if (j.hasAttributes()) {
            const X = [];
            for (const Q of j.getAttributeNames()) if (Q.endsWith(o$1) || Q.startsWith(n$3)) {
              const tt = W[Y++];
              if (X.push(Q), tt !== void 0) {
                const et = j.getAttribute(tt.toLowerCase() + o$1).split(n$3), st = /([.?@])?(.*)/.exec(tt);
                K.push({ type: 1, index: J, name: st[2], strings: et, ctor: st[1] === "." ? H : st[1] === "?" ? L : st[1] === "@" ? z : k });
              } else K.push({ type: 6, index: J });
            }
            for (const Q of X) j.removeAttribute(Q);
          }
          if (y.test(j.tagName)) {
            const X = j.textContent.split(n$3), Q = X.length - 1;
            if (Q > 0) {
              j.textContent = s$1 ? s$1.emptyScript : "";
              for (let tt = 0; tt < Q; tt++) j.append(X[tt], u()), C.nextNode(), K.push({ type: 2, index: ++J });
              j.append(X[Q], u());
            }
          }
        } else if (j.nodeType === 8) if (j.data === l$1) K.push({ type: 2, index: J });
        else {
          let X = -1;
          for (; (X = j.data.indexOf(n$3, X + 1)) !== -1; ) K.push({ type: 7, index: J }), X += n$3.length - 1;
        }
        J++;
      }
    }
    static createElement(b, w) {
      const U = r.createElement("template");
      return U.innerHTML = b, U;
    }
  }
  function S(x, b, w = x, U) {
    var j, J, Y, F;
    if (b === T) return b;
    let K = U !== void 0 ? (j = w._$Co) === null || j === void 0 ? void 0 : j[U] : w._$Cl;
    const G = d(b) ? void 0 : b._$litDirective$;
    return (K == null ? void 0 : K.constructor) !== G && ((J = K == null ? void 0 : K._$AO) === null || J === void 0 || J.call(K, !1), G === void 0 ? K = void 0 : (K = new G(x), K._$AT(x, w, U)), U !== void 0 ? ((Y = (F = w)._$Co) !== null && Y !== void 0 ? Y : F._$Co = [])[U] = K : w._$Cl = K), K !== void 0 && (b = S(x, K._$AS(x, b.values), K, U)), b;
  }
  class M {
    constructor(b, w) {
      this._$AV = [], this._$AN = void 0, this._$AD = b, this._$AM = w;
    }
    get parentNode() {
      return this._$AM.parentNode;
    }
    get _$AU() {
      return this._$AM._$AU;
    }
    u(b) {
      var w;
      const { el: { content: U }, parts: j } = this._$AD, J = ((w = b == null ? void 0 : b.creationScope) !== null && w !== void 0 ? w : r).importNode(U, !0);
      C.currentNode = J;
      let Y = C.nextNode(), F = 0, K = 0, G = j[0];
      for (; G !== void 0; ) {
        if (F === G.index) {
          let W;
          G.type === 2 ? W = new R(Y, Y.nextSibling, this, b) : G.type === 1 ? W = new G.ctor(Y, G.name, G.strings, this, b) : G.type === 6 && (W = new Z(Y, this, b)), this._$AV.push(W), G = j[++K];
        }
        F !== (G == null ? void 0 : G.index) && (Y = C.nextNode(), F++);
      }
      return C.currentNode = r, J;
    }
    v(b) {
      let w = 0;
      for (const U of this._$AV) U !== void 0 && (U.strings !== void 0 ? (U._$AI(b, U, w), w += U.strings.length - 2) : U._$AI(b[w])), w++;
    }
  }
  class R {
    constructor(b, w, U, j) {
      var J;
      this.type = 2, this._$AH = A, this._$AN = void 0, this._$AA = b, this._$AB = w, this._$AM = U, this.options = j, this._$Cp = (J = j == null ? void 0 : j.isConnected) === null || J === void 0 || J;
    }
    get _$AU() {
      var b, w;
      return (w = (b = this._$AM) === null || b === void 0 ? void 0 : b._$AU) !== null && w !== void 0 ? w : this._$Cp;
    }
    get parentNode() {
      let b = this._$AA.parentNode;
      const w = this._$AM;
      return w !== void 0 && (b == null ? void 0 : b.nodeType) === 11 && (b = w.parentNode), b;
    }
    get startNode() {
      return this._$AA;
    }
    get endNode() {
      return this._$AB;
    }
    _$AI(b, w = this) {
      b = S(this, b, w), d(b) ? b === A || b == null || b === "" ? (this._$AH !== A && this._$AR(), this._$AH = A) : b !== this._$AH && b !== T && this._(b) : b._$litType$ !== void 0 ? this.g(b) : b.nodeType !== void 0 ? this.$(b) : v(b) ? this.T(b) : this._(b);
    }
    k(b) {
      return this._$AA.parentNode.insertBefore(b, this._$AB);
    }
    $(b) {
      this._$AH !== b && (this._$AR(), this._$AH = this.k(b));
    }
    _(b) {
      this._$AH !== A && d(this._$AH) ? this._$AA.nextSibling.data = b : this.$(r.createTextNode(b)), this._$AH = b;
    }
    g(b) {
      var w;
      const { values: U, _$litType$: j } = b, J = typeof j == "number" ? this._$AC(b) : (j.el === void 0 && (j.el = N.createElement(P(j.h, j.h[0]), this.options)), j);
      if (((w = this._$AH) === null || w === void 0 ? void 0 : w._$AD) === J) this._$AH.v(U);
      else {
        const Y = new M(J, this), F = Y.u(this.options);
        Y.v(U), this.$(F), this._$AH = Y;
      }
    }
    _$AC(b) {
      let w = E.get(b.strings);
      return w === void 0 && E.set(b.strings, w = new N(b)), w;
    }
    T(b) {
      c(this._$AH) || (this._$AH = [], this._$AR());
      const w = this._$AH;
      let U, j = 0;
      for (const J of b) j === w.length ? w.push(U = new R(this.k(u()), this.k(u()), this, this.options)) : U = w[j], U._$AI(J), j++;
      j < w.length && (this._$AR(U && U._$AB.nextSibling, j), w.length = j);
    }
    _$AR(b = this._$AA.nextSibling, w) {
      var U;
      for ((U = this._$AP) === null || U === void 0 || U.call(this, !1, !0, w); b && b !== this._$AB; ) {
        const j = b.nextSibling;
        b.remove(), b = j;
      }
    }
    setConnected(b) {
      var w;
      this._$AM === void 0 && (this._$Cp = b, (w = this._$AP) === null || w === void 0 || w.call(this, b));
    }
  }
  class k {
    constructor(b, w, U, j, J) {
      this.type = 1, this._$AH = A, this._$AN = void 0, this.element = b, this.name = w, this._$AM = j, this.options = J, U.length > 2 || U[0] !== "" || U[1] !== "" ? (this._$AH = Array(U.length - 1).fill(new String()), this.strings = U) : this._$AH = A;
    }
    get tagName() {
      return this.element.tagName;
    }
    get _$AU() {
      return this._$AM._$AU;
    }
    _$AI(b, w = this, U, j) {
      const J = this.strings;
      let Y = !1;
      if (J === void 0) b = S(this, b, w, 0), Y = !d(b) || b !== this._$AH && b !== T, Y && (this._$AH = b);
      else {
        const F = b;
        let K, G;
        for (b = J[0], K = 0; K < J.length - 1; K++) G = S(this, F[U + K], w, K), G === T && (G = this._$AH[K]), Y || (Y = !d(G) || G !== this._$AH[K]), G === A ? b = A : b !== A && (b += (G != null ? G : "") + J[K + 1]), this._$AH[K] = G;
      }
      Y && !j && this.j(b);
    }
    j(b) {
      b === A ? this.element.removeAttribute(this.name) : this.element.setAttribute(this.name, b != null ? b : "");
    }
  }
  class H extends k {
    constructor() {
      super(...arguments), this.type = 3;
    }
    j(b) {
      this.element[this.name] = b === A ? void 0 : b;
    }
  }
  const I = s$1 ? s$1.emptyScript : "";
  class L extends k {
    constructor() {
      super(...arguments), this.type = 4;
    }
    j(b) {
      b && b !== A ? this.element.setAttribute(this.name, I) : this.element.removeAttribute(this.name);
    }
  }
  class z extends k {
    constructor(b, w, U, j, J) {
      super(b, w, U, j, J), this.type = 5;
    }
    _$AI(b, w = this) {
      var U;
      if ((b = (U = S(this, b, w, 0)) !== null && U !== void 0 ? U : A) === T) return;
      const j = this._$AH, J = b === A && j !== A || b.capture !== j.capture || b.once !== j.once || b.passive !== j.passive, Y = b !== A && (j === A || J);
      J && this.element.removeEventListener(this.name, this, j), Y && this.element.addEventListener(this.name, this, b), this._$AH = b;
    }
    handleEvent(b) {
      var w, U;
      typeof this._$AH == "function" ? this._$AH.call((U = (w = this.options) === null || w === void 0 ? void 0 : w.host) !== null && U !== void 0 ? U : this.element, b) : this._$AH.handleEvent(b);
    }
  }
  class Z {
    constructor(b, w, U) {
      this.element = b, this.type = 6, this._$AN = void 0, this._$AM = w, this.options = U;
    }
    get _$AU() {
      return this._$AM._$AU;
    }
    _$AI(b) {
      S(this, b);
    }
  }
  const B = i$1.litHtmlPolyfillSupport;
  B == null || B(N, R), ((t$1 = i$1.litHtmlVersions) !== null && t$1 !== void 0 ? t$1 : i$1.litHtmlVersions = []).push("2.8.0");
  const D = (x, b, w) => {
    var U, j;
    const J = (U = w == null ? void 0 : w.renderBefore) !== null && U !== void 0 ? U : b;
    let Y = J._$litPart$;
    if (Y === void 0) {
      const F = (j = w == null ? void 0 : w.renderBefore) !== null && j !== void 0 ? j : null;
      J._$litPart$ = Y = new R(b.insertBefore(u(), F), F, void 0, w != null ? w : {});
    }
    return Y._$AI(x), Y;
  };
  var l, o;
  class s extends u$1 {
    constructor() {
      super(...arguments), this.renderOptions = { host: this }, this._$Do = void 0;
    }
    createRenderRoot() {
      var b, w;
      const U = super.createRenderRoot();
      return (b = (w = this.renderOptions).renderBefore) !== null && b !== void 0 || (w.renderBefore = U.firstChild), U;
    }
    update(b) {
      const w = this.render();
      this.hasUpdated || (this.renderOptions.isConnected = this.isConnected), super.update(b), this._$Do = D(w, this.renderRoot, this.renderOptions);
    }
    connectedCallback() {
      var b;
      super.connectedCallback(), (b = this._$Do) === null || b === void 0 || b.setConnected(!0);
    }
    disconnectedCallback() {
      var b;
      super.disconnectedCallback(), (b = this._$Do) === null || b === void 0 || b.setConnected(!1);
    }
    render() {
      return T;
    }
  }
  s.finalized = !0, s._$litElement$ = !0, (l = globalThis.litElementHydrateSupport) === null || l === void 0 || l.call(globalThis, { LitElement: s });
  const n$2 = globalThis.litElementPolyfillSupport;
  n$2 == null || n$2({ LitElement: s });
  ((o = globalThis.litElementVersions) !== null && o !== void 0 ? o : globalThis.litElementVersions = []).push("3.3.3");
  const i = (x, b) => b.kind === "method" && b.descriptor && !("value" in b.descriptor) ? ot(nt({}, b), { finisher(w) {
    w.createProperty(b.key, x);
  } }) : { kind: "field", key: Symbol(), placement: "own", descriptor: {}, originalKey: b.key, initializer() {
    typeof b.initializer == "function" && (this[b.key] = b.initializer.call(this));
  }, finisher(w) {
    w.createProperty(b.key, x);
  } }, e = (x, b, w) => {
    b.constructor.createProperty(w, x);
  };
  function n$1(x) {
    return (b, w) => w !== void 0 ? e(x, b, w) : i(x, b);
  }
  function t(x) {
    return n$1(ot(nt({}, x), { state: !0 }));
  }
  var n;
  ((n = window.HTMLSlotElement) === null || n === void 0 ? void 0 : n.prototype.assignedElements) != null;
  var __defProp = Object.defineProperty, __decorateClass = (x, b, w, U) => {
    for (var j = void 0, J = x.length - 1, Y; J >= 0; J--)
      (Y = x[J]) && (j = Y(b, w, j) || j);
    return j && __defProp(b, w, j), j;
  };
  class CanaryCard extends s {
    render() {
      return this.card;
    }
    setConfig(b) {
      this.config = JSON.parse(JSON.stringify(b)), this.card = oe(this.config.card), this._hass || (this._hass = hass());
    }
    firstUpdated() {
      if (typeof this.config.style == "object")
        Object.assign(this.card.style, this.config.style);
      else if (this.config.style) {
        const b = document.createElement("style");
        b.innerHTML = this.config.style, this.card.updateComplete.then(() => {
          (this.card.shadowRoot || this.card).appendChild(b);
        });
      }
    }
    set hass(b) {
      this._hass = b, this.card.hass = b;
    }
    shouldUpdate(b) {
      if (b.has("_config"))
        return !0;
      const w = b.get("_hass");
      return !w || w.themes !== this._hass.themes;
    }
    updated(b) {
      if (super.updated(b), !this.config || !this._hass) return;
      const w = b.get("_hass"), U = b.get("_config");
      (!w || !U || w.themes !== this._hass.themes || U.theme !== this.config.theme) && q(this, this._hass.themes, this.config.theme);
    }
    getCardSize() {
      return A$1(this.card);
    }
  }
  __decorateClass([
    n$1({ attribute: !1 })
  ], CanaryCard.prototype, "_hass");
  __decorateClass([
    n$1()
  ], CanaryCard.prototype, "card");
  __decorateClass([
    t()
  ], CanaryCard.prototype, "config");
  it(exports, null, function* () {
    for (; customElements.get("home-assistant") === void 0; )
      yield new Promise((x) => window.setTimeout(x, 100));
    customElements.get("canary-card") || (customElements.define("canary-card", CanaryCard), console.groupCollapsed(
      "%c CANARY %c 0.5.0 ",
      "color: #212121; background: #fdd835; font-weight: 700;",
      "color: #fdd835; background: #212121; font-weight: 700;"
    ), console.info("branch   : main"), console.info("commit   : 2033b59ebec12f30d132962907a413d3e84d5a12"), console.info("built at : 2024-07-28T04:51:28.963Z"), console.info("https://github.com/jcwillox/lovelace-canary"), console.groupEnd());
  });
  function getResources() {
    var w, U, j;
    const x = document.querySelectorAll("script"), b = [];
    for (const J of x)
      if ((U = (w = J == null ? void 0 : J.innerText) == null ? void 0 : w.trim()) != null && U.startsWith("import(")) {
        const Y = (j = J.innerText.split(`
`)) == null ? void 0 : j.map((F) => F.trim());
        for (const F of Y)
          b.push(F.replace(/^import\("/, "").replace(/"\);/, ""));
      }
    return b;
  }
  const resources = getResources();
  resources.some((x) => x.endsWith(name + ".js")) ? console.info(`${name} is loaded as a module`) : (ne(window, "ll-rebuild", {}), console.info(
    `You may not be getting optimal performance out of ${name}.
See https://github.com/thomasloven/lovelace-card-mod#performance-improvements`
  ));
});
export default ft();
