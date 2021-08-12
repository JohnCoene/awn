/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/awesome-notifications/dist/index.js":
/*!**********************************************************!*\
  !*** ./node_modules/awesome-notifications/dist/index.js ***!
  \**********************************************************/
/***/ ((module) => {

!function(t,e){ true?module.exports=e():0}(window,(function(){return function(t){var e={};function n(o){if(e[o])return e[o].exports;var i=e[o]={i:o,l:!1,exports:{}};return t[o].call(i.exports,i,i.exports,n),i.l=!0,i.exports}return n.m=t,n.c=e,n.d=function(t,e,o){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:o})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var i in t)n.d(o,i,function(e){return t[e]}.bind(null,i));return o},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=0)}([function(t,e,n){"use strict";function o(t){return(o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function i(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}n.r(e);var r={maxNotifications:10,animationDuration:300,position:"bottom-right",labels:{tip:"Tip",info:"Info",success:"Success",warning:"Attention",alert:"Error",async:"Loading",confirm:"Confirmation required",confirmOk:"OK",confirmCancel:"Cancel"},icons:{tip:"question-circle",info:"info-circle",success:"check-circle",warning:"exclamation-circle",alert:"exclamation-triangle",async:"cog fa-spin",confirm:"exclamation-triangle",prefix:"<i class='fa fas fa-fw fa-",suffix:"'></i>",enabled:!0},replacements:{tip:null,info:null,success:null,warning:null,alert:null,async:null,"async-block":null,modal:null,confirm:null,general:{"<script>":"","<\/script>":""}},messages:{tip:"",info:"",success:"Action has been succeeded",warning:"",alert:"Action has been failed",confirm:"This action can't be undone. Continue?",async:"Please, wait...","async-block":"Loading"},formatError:function(t){if(t.response){if(!t.response.data)return"500 API Server Error";if(t.response.data.errors)return t.response.data.errors.map((function(t){return t.detail})).join("<br>");if(t.response.statusText)return"".concat(t.response.status," ").concat(t.response.statusText,": ").concat(t.response.data)}return t.message?t.message:t},durations:{global:5e3,success:null,info:null,tip:null,warning:null,alert:null},minDurations:{async:1e3,"async-block":1e3}},a=function(){function t(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:r;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),Object.assign(this,this.defaultsDeep(n,e))}var e,n,a;return e=t,(n=[{key:"icon",value:function(t){return this.icons.enabled?"".concat(this.icons.prefix).concat(this.icons[t]).concat(this.icons.suffix):""}},{key:"label",value:function(t){return this.labels[t]}},{key:"duration",value:function(t){var e=this.durations[t];return null===e?this.durations.global:e}},{key:"toSecs",value:function(t){return"".concat(t/1e3,"s")}},{key:"applyReplacements",value:function(t,e){if(!t)return this.messages[e]||"";for(var n=0,o=["general",e];n<o.length;n++){var i=o[n];if(this.replacements[i])for(var r in this.replacements[i])t=t.replace(r,this.replacements[i][r])}return t}},{key:"override",value:function(e){return e?new t(e,this):this}},{key:"defaultsDeep",value:function(t,e){var n={};for(var i in t)e.hasOwnProperty(i)?n[i]="object"===o(t[i])&&null!==t[i]?this.defaultsDeep(t[i],e[i]):e[i]:n[i]=t[i];return n}}])&&i(e.prototype,n),a&&i(e,a),t}(),s={popup:"".concat("awn","-popup"),toast:"".concat("awn","-toast"),btn:"".concat("awn","-btn"),confirm:"".concat("awn","-confirm")},c={prefix:s.toast,klass:{label:"".concat(s.toast,"-label"),content:"".concat(s.toast,"-content"),icon:"".concat(s.toast,"-icon"),progressBar:"".concat(s.toast,"-progress-bar"),progressBarPause:"".concat(s.toast,"-progress-bar-paused")},ids:{container:"".concat(s.toast,"-container")}},u={prefix:s.popup,klass:{buttons:"".concat("awn","-buttons"),button:s.btn,successBtn:"".concat(s.btn,"-success"),cancelBtn:"".concat(s.btn,"-cancel"),title:"".concat(s.popup,"-title"),body:"".concat(s.popup,"-body"),content:"".concat(s.popup,"-content"),dotAnimation:"".concat(s.popup,"-loading-dots")},ids:{wrapper:"".concat(s.popup,"-wrapper"),confirmOk:"".concat(s.confirm,"-ok"),confirmCancel:"".concat(s.confirm,"-cancel")}},l={klass:{hiding:"".concat("awn","-hiding")},lib:"awn"};function f(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}var p=function(){function t(e,n,o,i,r){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.newNode=document.createElement("div"),n&&(this.newNode.id=n),o&&(this.newNode.className=o),i&&(this.newNode.style.cssText=i),this.parent=e,this.options=r}var e,n,o;return e=t,(n=[{key:"beforeInsert",value:function(){}},{key:"afterInsert",value:function(){}},{key:"insert",value:function(){return this.beforeInsert(),this.el=this.parent.appendChild(this.newNode),this.afterInsert(),this}},{key:"replace",value:function(t){var e=this;if(this.getElement())return this.beforeDelete().then((function(){return e.updateType(t.type),e.parent.replaceChild(t.newNode,e.el),e.el=e.getElement(t.newNode),e.afterInsert(),e}))}},{key:"beforeDelete",value:function(){var t=this,e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:this.el,n=0;return this.start&&(n=this.options.minDurations[this.type]+this.start-Date.now())<0&&(n=0),new Promise((function(o){setTimeout((function(){e.classList.add(l.klass.hiding),setTimeout(o,t.options.animationDuration)}),n)}))}},{key:"delete",value:function(){var t=this,e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:this.el;return this.getElement(e)?this.beforeDelete(e).then((function(){e.remove(),t.afterDelete()})):null}},{key:"afterDelete",value:function(){}},{key:"getElement",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:this.el;return t?document.getElementById(t.id):null}},{key:"addEvent",value:function(t,e){this.el.addEventListener(t,e)}},{key:"toggleClass",value:function(t){this.el.classList.toggle(t)}},{key:"updateType",value:function(t){this.type=t,this.duration=this.options.duration(this.type)}}])&&f(e.prototype,n),o&&f(e,o),t}();function d(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}var y=function(){function t(e,n){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.callback=e,this.remaining=n,this.resume()}var e,n,o;return e=t,(n=[{key:"pause",value:function(){this.paused=!0,window.clearTimeout(this.timerId),this.remaining-=new Date-this.start}},{key:"resume",value:function(){var t=this;this.paused=!1,this.start=new Date,window.clearTimeout(this.timerId),this.timerId=window.setTimeout((function(){window.clearTimeout(t.timerId),t.callback()}),this.remaining)}},{key:"toggle",value:function(){this.paused?this.resume():this.pause()}}])&&d(e.prototype,n),o&&d(e,o),t}();function h(t){return(h="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function m(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}function v(t,e){return!e||"object"!==h(e)&&"function"!=typeof e?function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t):e}function b(t){return(b=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function k(t,e){return(k=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}var g=function(t){function e(t,n,o,i){var r;return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,e),(r=v(this,b(e).call(this,i,"".concat(c.prefix,"-").concat(Math.floor(Date.now()-100*Math.random())),"".concat(c.prefix," ").concat(c.prefix,"-").concat(n),"animation-duration: ".concat(o.toSecs(o.animationDuration),";"),o))).updateType(n),r.setInnerHtml(t),r}var n,o,i;return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&k(t,e)}(e,t),n=e,(o=[{key:"setInnerHtml",value:function(t){"alert"===this.type&&t&&(t=this.options.formatError(t)),t=this.options.applyReplacements(t,this.type),this.newNode.innerHTML='<div class="awn-toast-wrapper">'.concat(this.progressBar).concat(this.label,'<div class="').concat(c.klass.content,'">').concat(t,'</div><span class="').concat(c.klass.icon,'">').concat(this.options.icon(this.type),"</span></div>")}},{key:"beforeInsert",value:function(){var t=this;if(this.parent.childElementCount>=this.options.maxNotifications){var e=Array.from(this.parent.getElementsByClassName(c.prefix));this.delete(e.find((function(e){return!t.isDeleted(e)})))}}},{key:"afterInsert",value:function(){var t=this;if("async"==this.type)return this.start=Date.now();if(this.addEvent("click",(function(){return t.delete()})),!(this.duration<=0)){this.timer=new y((function(){return t.delete()}),this.duration);for(var e=0,n=["mouseenter","mouseleave"];e<n.length;e++){var o=n[e];this.addEvent(o,(function(){t.isDeleted()||(t.toggleClass(c.klass.progressBarPause),t.timer.toggle())}))}}}},{key:"isDeleted",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:this.el;return t.classList.contains(l.klass.hiding)}},{key:"progressBar",get:function(){return this.duration<=0||"async"===this.type?"":"<div class='".concat(c.klass.progressBar,"' style=\"animation-duration:").concat(this.options.toSecs(this.duration),';"></div>')}},{key:"label",get:function(){return'<b class="'.concat(c.klass.label,'">').concat(this.options.label(this.type),"</b>")}}])&&m(n.prototype,o),i&&m(n,i),e}(p);function w(t){return(w="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function O(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}function _(t,e){return!e||"object"!==w(e)&&"function"!=typeof e?function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t):e}function T(t){return(T=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function E(t,e){return(E=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}var S=function(t){function e(t){var n,o=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"modal",i=arguments.length>2?arguments[2]:void 0,r=arguments.length>3?arguments[3]:void 0,a=arguments.length>4?arguments[4]:void 0;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,e);var s="animation-duration: ".concat(i.toSecs(i.animationDuration),";");return(n=_(this,T(e).call(this,document.body,u.ids.wrapper,null,s,i)))[u.ids.confirmOk]=r,n[u.ids.confirmCancel]=a,n.className="".concat(u.prefix,"-").concat(o),["confirm","async-block","modal"].includes(o)||(o="modal"),n.updateType(o),n.setInnerHtml(t),n.insert(),n}var n,o,i;return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&E(t,e)}(e,t),n=e,(o=[{key:"setInnerHtml",value:function(t){var e=this.options.applyReplacements(t,this.type);switch(this.type){case"confirm":var n=["<button class='".concat(u.klass.button," ").concat(u.klass.successBtn,"'id='").concat(u.ids.confirmOk,"'>").concat(this.options.labels.confirmOk,"</button>")];!1!==this[u.ids.confirmCancel]&&n.push("<button class='".concat(u.klass.button," ").concat(u.klass.cancelBtn,"'id='").concat(u.ids.confirmCancel,"'>").concat(this.options.labels.confirmCancel,"</button>")),e="".concat(this.options.icon(this.type),"<div class='").concat(u.klass.title,"'>").concat(this.options.label(this.type),'</div><div class="').concat(u.klass.content,'">').concat(e,"</div><div class='").concat(u.klass.buttons," ").concat(u.klass.buttons,"-").concat(n.length,"'>").concat(n.join(""),"</div>");break;case"async-block":e="".concat(e,'<div class="').concat(u.klass.dotAnimation,'"></div>')}this.newNode.innerHTML='<div class="'.concat(u.klass.body," ").concat(this.className,'">').concat(e,"</div>")}},{key:"keyupListener",value:function(t){if("async-block"===this.type)return t.preventDefault();switch(t.code){case"Escape":t.preventDefault(),this.delete();case"Tab":if(t.preventDefault(),"confirm"!==this.type||!1===this[u.ids.confirmCancel])return!0;var e=this.okBtn;t.shiftKey?document.activeElement.id==u.ids.confirmOk&&(e=this.cancelBtn):document.activeElement.id!==u.ids.confirmCancel&&(e=this.cancelBtn),e.focus()}}},{key:"afterInsert",value:function(){var t=this;switch(this.listener=function(e){return t.keyupListener(e)},window.addEventListener("keydown",this.listener),this.type){case"async-block":this.start=Date.now();break;case"confirm":this.okBtn.focus(),this.addEvent("click",(function(e){if("BUTTON"!==e.target.nodeName)return!1;t.delete(),t[e.target.id]&&t[e.target.id]()}));break;default:document.activeElement.blur(),this.addEvent("click",(function(e){e.target.id===t.newNode.id&&t.delete()}))}}},{key:"afterDelete",value:function(){window.removeEventListener("keydown",this.listener)}},{key:"okBtn",get:function(){return document.getElementById(u.ids.confirmOk)}},{key:"cancelBtn",get:function(){return document.getElementById(u.ids.confirmCancel)}}])&&O(n.prototype,o),i&&O(n,i),e}(p);function j(t){return(j="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function x(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}n.d(e,"default",(function(){return C}));var C=function(){function t(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.options=new a(e)}var e,n,o;return e=t,(n=[{key:"tip",value:function(t,e){return this._addToast(t,"tip",e).el}},{key:"info",value:function(t,e){return this._addToast(t,"info",e).el}},{key:"success",value:function(t,e){return this._addToast(t,"success",e).el}},{key:"warning",value:function(t,e){return this._addToast(t,"warning",e).el}},{key:"alert",value:function(t,e){return this._addToast(t,"alert",e).el}},{key:"async",value:function(t,e,n,o,i){var r=this._addToast(o,"async",i);return this._afterAsync(t,e,n,i,r)}},{key:"confirm",value:function(t,e,n,o){return this._addPopup(t,"confirm",o,e,n)}},{key:"asyncBlock",value:function(t,e,n,o,i){var r=this._addPopup(o,"async-block",i);return this._afterAsync(t,e,n,i,r)}},{key:"modal",value:function(t,e,n){return this._addPopup(t,e,n)}},{key:"closeToasts",value:function(){for(var t=this.container;t.firstChild;)t.removeChild(t.firstChild)}},{key:"_addPopup",value:function(t,e,n,o,i){return new S(t,e,this.options.override(n),o,i)}},{key:"_addToast",value:function(t,e,n,o){n=this.options.override(n);var i=new g(t,e,n,this.container);return o?o instanceof S?o.delete().then((function(){return i.insert()})):o.replace(i):i.insert()}},{key:"_afterAsync",value:function(t,e,n,o,i){return t.then(this._responseHandler(e,"success",o,i),this._responseHandler(n,"alert",o,i))}},{key:"_responseHandler",value:function(t,e,n,o){var i=this;return function(r){switch(j(t)){case"undefined":case"string":var a="alert"===e?t||r:t;i._addToast(a,e,n,o);break;default:o.delete().then((function(){t&&t(r)}))}}}},{key:"_createContainer",value:function(){return new p(document.body,c.ids.container,"awn-".concat(this.options.position)).insert().el}},{key:"container",get:function(){return document.getElementById(c.ids.container)||this._createContainer()}}])&&x(e.prototype,n),o&&x(e,o),t}()}])}));

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/awesome-notifications/dist/style.css":
/*!*************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/awesome-notifications/dist/style.css ***!
  \*************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../css-loader/dist/runtime/cssWithMappingToString.js */ "./node_modules/css-loader/dist/runtime/cssWithMappingToString.js");
/* harmony import */ var _css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "@keyframes awn-fade-in{0%{opacity:0}to{opacity:1}}@keyframes awn-fade-out{0%{opacity:1}to{opacity:0}}@keyframes awn-slide-right{0%{opacity:0;left:100%}to{opacity:1;left:0}}@keyframes awn-slide-left{0%{opacity:0;right:100%}to{opacity:1;right:0}}@keyframes awn-bar{0%{right:100%}to{right:0}}.awn-popup-loading-dots,.awn-popup-loading-dots:after,.awn-popup-loading-dots:before{border-radius:50%;width:6px;height:6px;animation-fill-mode:both;background:#fff;animation:awn-loading-dots 1s ease-in-out infinite}.awn-popup-loading-dots{position:relative;margin-left:24px;display:inline-block;color:#fff;animation-delay:-.16s}.awn-popup-loading-dots:after,.awn-popup-loading-dots:before{content:\"\";position:absolute;top:0}.awn-popup-loading-dots:before{left:-16px;animation-delay:-.32s}.awn-popup-loading-dots:after{left:16px}@keyframes awn-loading-dots{0%,80%,to{box-shadow:0 0 0 0}40%{box-shadow:0 0 0 2px}}#awn-popup-wrapper{position:fixed;left:0;right:0;bottom:0;top:0;display:flex;align-items:center;justify-content:center;background:rgba(0,0,0,.7);z-index:99999;opacity:0;animation-name:awn-fade-in;animation-timing-function:ease-out;animation-fill-mode:both}#awn-popup-wrapper.awn-hiding{animation-name:awn-fade-out}#awn-popup-wrapper .awn-popup-body{position:relative;border-radius:6px;word-break:break-word;background:#fff;padding:24px;min-width:320px;font-size:14px;max-width:500px}#awn-popup-wrapper .awn-popup-body.awn-popup-confirm{display:flex;flex-direction:column;align-items:center}#awn-popup-wrapper .awn-popup-body.awn-popup-confirm .fa{font-size:44px;color:#c26700}#awn-popup-wrapper .awn-popup-body.awn-popup-async-block{background:transparent;font-size:32px;font-weight:700;color:#fff;text-align:center}#awn-popup-wrapper .awn-popup-title{font-size:14px;font-weight:700;text-transform:uppercase;margin-top:8px}#awn-popup-wrapper .awn-buttons{width:100%;display:flex;justify-content:space-between;margin-top:24px}#awn-popup-wrapper .awn-buttons .awn-btn{border-radius:4px;border:0;font-weight:700;transition:background .2s linear;font-size:14px;width:45%;line-height:32px;color:#fff}#awn-popup-wrapper .awn-buttons-1 .awn-btn{width:100%}#awn-popup-wrapper .awn-buttons .awn-btn-success{background:#40871d}#awn-popup-wrapper .awn-buttons .awn-btn-success:hover{background:#367218}#awn-popup-wrapper .awn-buttons .awn-btn-cancel{background:#1c76a6}#awn-popup-wrapper .awn-buttons .awn-btn-cancel:hover{background:#186690}#awn-toast-container{position:fixed;z-index:99998;bottom:24px;right:24px;box-sizing:border-box}#awn-toast-container.awn-top-left,#awn-toast-container.awn-top-right{top:24px;bottom:auto}#awn-toast-container.awn-top-left .awn-toast:first-child,#awn-toast-container.awn-top-right .awn-toast:first-child{margin-top:16px}#awn-toast-container.awn-bottom-left,#awn-toast-container.awn-top-left{left:24px;right:auto}#awn-toast-container.awn-bottom-left .awn-toast,#awn-toast-container.awn-top-left .awn-toast{right:100%;animation-name:awn-slide-left}#awn-toast-container.awn-bottom-left .awn-toast.awn-hiding,#awn-toast-container.awn-top-left .awn-toast.awn-hiding{right:0}#awn-toast-container.awn-bottom-right .awn-toast,#awn-toast-container.awn-top-right .awn-toast{left:100%;animation-name:awn-slide-right}#awn-toast-container.awn-bottom-right .awn-toast.awn-hiding,#awn-toast-container.awn-top-right .awn-toast.awn-hiding{left:0}.awn-toast{position:relative;cursor:pointer;overflow:hidden;opacity:0;width:320px;background:#ebebeb;margin-top:16px;border-radius:6px;color:grey;font-size:14px;animation-timing-function:linear;animation-fill-mode:both}.awn-toast-content{word-break:break-word}.awn-toast-label{display:block;text-transform:uppercase;color:grey;font-size:18px}.awn-toast-icon{position:absolute;right:16px;top:6px;bottom:0;display:flex;align-items:center;justify-content:flex-end}.awn-toast-icon .fa{font-size:44px;color:grey}.awn-toast-wrapper{padding:22px 88px 16px 16px;border:2px solid #d1d1d1;border-radius:6px}.awn-toast-progress-bar{position:absolute;top:0;left:0;right:0;height:6px}.awn-toast-progress-bar:after{content:\" \";background:grey;position:absolute;width:100%;right:100%;top:0;height:6px;animation-name:awn-bar;animation-duration:inherit;animation-timing-function:linear;animation-fill-mode:both}.awn-toast.awn-toast-progress-bar-paused .awn-toast-progress-bar:after{animation-play-state:paused}.awn-toast.awn-hiding{animation-name:awn-fade-out!important}.awn-toast.awn-toast-success{background:#dff8d3;color:#40871d}.awn-toast.awn-toast-success .awn-toast-wrapper{border-color:#a7d590}.awn-toast.awn-toast-success .fa,.awn-toast.awn-toast-success b{color:#40871d}.awn-toast.awn-toast-success .awn-toast-progress-bar:after{background:#40871d}.awn-toast.awn-toast-info{background:#d3ebf8;color:#1c76a6}.awn-toast.awn-toast-info .awn-toast-wrapper{border-color:#9fd3ef}.awn-toast.awn-toast-info .fa,.awn-toast.awn-toast-info b{color:#1c76a6}.awn-toast.awn-toast-info .awn-toast-progress-bar:after{background:#1c76a6}.awn-toast.awn-toast-alert{background:#f8d5d3;color:#a92019}.awn-toast.awn-toast-alert .awn-toast-wrapper{border-color:#f0a29d}.awn-toast.awn-toast-alert .fa,.awn-toast.awn-toast-alert b{color:#a92019}.awn-toast.awn-toast-alert .awn-toast-progress-bar:after{background:#a92019}.awn-toast.awn-toast-warning{background:#ffe7cc;color:#c26700}.awn-toast.awn-toast-warning .awn-toast-wrapper{border-color:#ffc480}.awn-toast.awn-toast-warning .fa,.awn-toast.awn-toast-warning b{color:#c26700}.awn-toast.awn-toast-warning .awn-toast-progress-bar:after{background:#c26700}[class^=awn-]{box-sizing:border-box}", "",{"version":3,"sources":["webpack://./node_modules/awesome-notifications/dist/style.css"],"names":[],"mappings":"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","sourcesContent":["@keyframes awn-fade-in{0%{opacity:0}to{opacity:1}}@keyframes awn-fade-out{0%{opacity:1}to{opacity:0}}@keyframes awn-slide-right{0%{opacity:0;left:100%}to{opacity:1;left:0}}@keyframes awn-slide-left{0%{opacity:0;right:100%}to{opacity:1;right:0}}@keyframes awn-bar{0%{right:100%}to{right:0}}.awn-popup-loading-dots,.awn-popup-loading-dots:after,.awn-popup-loading-dots:before{border-radius:50%;width:6px;height:6px;animation-fill-mode:both;background:#fff;animation:awn-loading-dots 1s ease-in-out infinite}.awn-popup-loading-dots{position:relative;margin-left:24px;display:inline-block;color:#fff;animation-delay:-.16s}.awn-popup-loading-dots:after,.awn-popup-loading-dots:before{content:\"\";position:absolute;top:0}.awn-popup-loading-dots:before{left:-16px;animation-delay:-.32s}.awn-popup-loading-dots:after{left:16px}@keyframes awn-loading-dots{0%,80%,to{box-shadow:0 0 0 0}40%{box-shadow:0 0 0 2px}}#awn-popup-wrapper{position:fixed;left:0;right:0;bottom:0;top:0;display:flex;align-items:center;justify-content:center;background:rgba(0,0,0,.7);z-index:99999;opacity:0;animation-name:awn-fade-in;animation-timing-function:ease-out;animation-fill-mode:both}#awn-popup-wrapper.awn-hiding{animation-name:awn-fade-out}#awn-popup-wrapper .awn-popup-body{position:relative;border-radius:6px;word-break:break-word;background:#fff;padding:24px;min-width:320px;font-size:14px;max-width:500px}#awn-popup-wrapper .awn-popup-body.awn-popup-confirm{display:flex;flex-direction:column;align-items:center}#awn-popup-wrapper .awn-popup-body.awn-popup-confirm .fa{font-size:44px;color:#c26700}#awn-popup-wrapper .awn-popup-body.awn-popup-async-block{background:transparent;font-size:32px;font-weight:700;color:#fff;text-align:center}#awn-popup-wrapper .awn-popup-title{font-size:14px;font-weight:700;text-transform:uppercase;margin-top:8px}#awn-popup-wrapper .awn-buttons{width:100%;display:flex;justify-content:space-between;margin-top:24px}#awn-popup-wrapper .awn-buttons .awn-btn{border-radius:4px;border:0;font-weight:700;transition:background .2s linear;font-size:14px;width:45%;line-height:32px;color:#fff}#awn-popup-wrapper .awn-buttons-1 .awn-btn{width:100%}#awn-popup-wrapper .awn-buttons .awn-btn-success{background:#40871d}#awn-popup-wrapper .awn-buttons .awn-btn-success:hover{background:#367218}#awn-popup-wrapper .awn-buttons .awn-btn-cancel{background:#1c76a6}#awn-popup-wrapper .awn-buttons .awn-btn-cancel:hover{background:#186690}#awn-toast-container{position:fixed;z-index:99998;bottom:24px;right:24px;box-sizing:border-box}#awn-toast-container.awn-top-left,#awn-toast-container.awn-top-right{top:24px;bottom:auto}#awn-toast-container.awn-top-left .awn-toast:first-child,#awn-toast-container.awn-top-right .awn-toast:first-child{margin-top:16px}#awn-toast-container.awn-bottom-left,#awn-toast-container.awn-top-left{left:24px;right:auto}#awn-toast-container.awn-bottom-left .awn-toast,#awn-toast-container.awn-top-left .awn-toast{right:100%;animation-name:awn-slide-left}#awn-toast-container.awn-bottom-left .awn-toast.awn-hiding,#awn-toast-container.awn-top-left .awn-toast.awn-hiding{right:0}#awn-toast-container.awn-bottom-right .awn-toast,#awn-toast-container.awn-top-right .awn-toast{left:100%;animation-name:awn-slide-right}#awn-toast-container.awn-bottom-right .awn-toast.awn-hiding,#awn-toast-container.awn-top-right .awn-toast.awn-hiding{left:0}.awn-toast{position:relative;cursor:pointer;overflow:hidden;opacity:0;width:320px;background:#ebebeb;margin-top:16px;border-radius:6px;color:grey;font-size:14px;animation-timing-function:linear;animation-fill-mode:both}.awn-toast-content{word-break:break-word}.awn-toast-label{display:block;text-transform:uppercase;color:grey;font-size:18px}.awn-toast-icon{position:absolute;right:16px;top:6px;bottom:0;display:flex;align-items:center;justify-content:flex-end}.awn-toast-icon .fa{font-size:44px;color:grey}.awn-toast-wrapper{padding:22px 88px 16px 16px;border:2px solid #d1d1d1;border-radius:6px}.awn-toast-progress-bar{position:absolute;top:0;left:0;right:0;height:6px}.awn-toast-progress-bar:after{content:\" \";background:grey;position:absolute;width:100%;right:100%;top:0;height:6px;animation-name:awn-bar;animation-duration:inherit;animation-timing-function:linear;animation-fill-mode:both}.awn-toast.awn-toast-progress-bar-paused .awn-toast-progress-bar:after{animation-play-state:paused}.awn-toast.awn-hiding{animation-name:awn-fade-out!important}.awn-toast.awn-toast-success{background:#dff8d3;color:#40871d}.awn-toast.awn-toast-success .awn-toast-wrapper{border-color:#a7d590}.awn-toast.awn-toast-success .fa,.awn-toast.awn-toast-success b{color:#40871d}.awn-toast.awn-toast-success .awn-toast-progress-bar:after{background:#40871d}.awn-toast.awn-toast-info{background:#d3ebf8;color:#1c76a6}.awn-toast.awn-toast-info .awn-toast-wrapper{border-color:#9fd3ef}.awn-toast.awn-toast-info .fa,.awn-toast.awn-toast-info b{color:#1c76a6}.awn-toast.awn-toast-info .awn-toast-progress-bar:after{background:#1c76a6}.awn-toast.awn-toast-alert{background:#f8d5d3;color:#a92019}.awn-toast.awn-toast-alert .awn-toast-wrapper{border-color:#f0a29d}.awn-toast.awn-toast-alert .fa,.awn-toast.awn-toast-alert b{color:#a92019}.awn-toast.awn-toast-alert .awn-toast-progress-bar:after{background:#a92019}.awn-toast.awn-toast-warning{background:#ffe7cc;color:#c26700}.awn-toast.awn-toast-warning .awn-toast-wrapper{border-color:#ffc480}.awn-toast.awn-toast-warning .fa,.awn-toast.awn-toast-warning b{color:#c26700}.awn-toast.awn-toast-warning .awn-toast-progress-bar:after{background:#c26700}[class^=awn-]{box-sizing:border-box}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

"use strict";


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
// eslint-disable-next-line func-names
module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = cssWithMappingToString(item);

      if (item[2]) {
        return "@media ".concat(item[2], " {").concat(content, "}");
      }

      return content;
    }).join("");
  }; // import a list of modules into the list
  // eslint-disable-next-line func-names


  list.i = function (modules, mediaQuery, dedupe) {
    if (typeof modules === "string") {
      // eslint-disable-next-line no-param-reassign
      modules = [[null, modules, ""]];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var i = 0; i < this.length; i++) {
        // eslint-disable-next-line prefer-destructuring
        var id = this[i][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _i = 0; _i < modules.length; _i++) {
      var item = [].concat(modules[_i]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        // eslint-disable-next-line no-continue
        continue;
      }

      if (mediaQuery) {
        if (!item[2]) {
          item[2] = mediaQuery;
        } else {
          item[2] = "".concat(mediaQuery, " and ").concat(item[2]);
        }
      }

      list.push(item);
    }
  };

  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/cssWithMappingToString.js":
/*!************************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/cssWithMappingToString.js ***!
  \************************************************************************/
/***/ ((module) => {

"use strict";


function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

module.exports = function cssWithMappingToString(item) {
  var _item = _slicedToArray(item, 4),
      content = _item[1],
      cssMapping = _item[3];

  if (!cssMapping) {
    return content;
  }

  if (typeof btoa === "function") {
    // eslint-disable-next-line no-undef
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || "").concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join("\n");
  }

  return [content].join("\n");
};

/***/ }),

/***/ "./node_modules/awesome-notifications/dist/style.css":
/*!***********************************************************!*\
  !*** ./node_modules/awesome-notifications/dist/style.css ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./node_modules/awesome-notifications/dist/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__.default, options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__.default && _css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__.default.locals ? _css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__.default.locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

"use strict";


var stylesInDom = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDom.length; i++) {
    if (stylesInDom[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var index = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3]
    };

    if (index !== -1) {
      stylesInDom[index].references++;
      stylesInDom[index].updater(obj);
    } else {
      stylesInDom.push({
        identifier: identifier,
        updater: addStyle(obj, options),
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function addStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  return function updateStyle(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {
        return;
      }

      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
}

module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDom[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDom[_index].references === 0) {
        stylesInDom[_index].updater();

        stylesInDom.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

"use strict";


var memo = {};
/* istanbul ignore next  */

function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }

    memo[target] = styleTarget;
  }

  return memo[target];
}
/* istanbul ignore next  */


function insertBySelector(insert, style) {
  var target = getTarget(insert);

  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }

  target.appendChild(style);
}

module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

"use strict";


/* istanbul ignore next  */
function insertStyleElement(options) {
  var style = document.createElement("style");
  options.setAttributes(style, options.attributes);
  options.insert(style);
  return style;
}

module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


/* istanbul ignore next  */
function setAttributesWithoutAttributes(style) {
  var nonce =  true ? __webpack_require__.nc : 0;

  if (nonce) {
    style.setAttribute("nonce", nonce);
  }
}

module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

"use strict";


/* istanbul ignore next  */
function apply(style, options, obj) {
  var css = obj.css;
  var media = obj.media;
  var sourceMap = obj.sourceMap;

  if (media) {
    style.setAttribute("media", media);
  } else {
    style.removeAttribute("media");
  }

  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  options.styleTagTransform(css, style);
}

function removeStyleElement(style) {
  // istanbul ignore if
  if (style.parentNode === null) {
    return false;
  }

  style.parentNode.removeChild(style);
}
/* istanbul ignore next  */


function domAPI(options) {
  var style = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(style, options, obj);
    },
    remove: function remove() {
      removeStyleElement(style);
    }
  };
}

module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

"use strict";


/* istanbul ignore next  */
function styleTagTransform(css, style) {
  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    while (style.firstChild) {
      style.removeChild(style.firstChild);
    }

    style.appendChild(document.createTextNode(css));
  }
}

module.exports = styleTagTransform;

/***/ }),

/***/ "./srcjs/exts/callbacks.js":
/*!*********************************!*\
  !*** ./srcjs/exts/callbacks.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "makeCallback": () => (/* binding */ makeCallback)
/* harmony export */ });
/* harmony import */ var shiny__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! shiny */ "shiny");
/* harmony import */ var shiny__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(shiny__WEBPACK_IMPORTED_MODULE_0__);


const makeCallback = (input, ns, value) => {
	return () => {
		console.log(`${ns}_${input}`);
		Shiny.setInputValue(`${ns}${input}`, value, {priority: 'event'});
	}
}


/***/ }),

/***/ "shiny":
/*!************************!*\
  !*** external "Shiny" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = Shiny;

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";
/*!*************************************!*\
  !*** ./srcjs/exts/notifications.js ***!
  \*************************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var shiny__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! shiny */ "shiny");
/* harmony import */ var shiny__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(shiny__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _callbacks__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./callbacks */ "./srcjs/exts/callbacks.js");
/* harmony import */ var awesome_notifications__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! awesome-notifications */ "./node_modules/awesome-notifications/dist/index.js");
/* harmony import */ var awesome_notifications__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(awesome_notifications__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var awesome_notifications_dist_style_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! awesome-notifications/dist/style.css */ "./node_modules/awesome-notifications/dist/style.css");





let notifier;
Shiny.addCustomMessageHandler('awn-notify', (msg) => {
  dispatch(msg);
});

Shiny.addCustomMessageHandler('awn-modal', (msg) => {
  init();
  notifier.modal(msg.content, 'modal-awn', msg.options);
});

Shiny.addCustomMessageHandler('awn-ask', (msg) => {
  init();
  notifier.confirm(
    msg.content,
    (0,_callbacks__WEBPACK_IMPORTED_MODULE_1__.makeCallback)(msg.id, msg.ns, true),
    (0,_callbacks__WEBPACK_IMPORTED_MODULE_1__.makeCallback)(msg.id, msg.ns, false),
    msg.options
  )
});

Shiny.addCustomMessageHandler('awn-globals', (msg) => {
  notifier = new (awesome_notifications__WEBPACK_IMPORTED_MODULE_2___default())(globalOptions);
});

const dispatch = (msg) => {
  init();
  switch(msg.type) {
    case 'warning':
      notifier.warning(msg.content, msg.options);
      break;
    case 'tip':
      notifier.tip(msg.content, msg.options);
      break;
    case 'info':
      notifier.info(msg.content, msg.options);
      break;
    case 'success':
      notifier.success(msg.content, msg.options);
      break;
    case 'alert':
      notifier.alert(msg.content, msg.options);
      break;
    default:
      notifier.alert(msg.content, msg.options);
      break;
  }
}

const init = () => {
  if(notifier != undefined)
    return;
  
  notifier = new (awesome_notifications__WEBPACK_IMPORTED_MODULE_2___default())();
}

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCLDhEQUFHO0FBQ3BCIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vYXduLy4vbm9kZV9tb2R1bGVzL2F3ZXNvbWUtbm90aWZpY2F0aW9ucy9kaXN0L2luZGV4LmpzIiwid2VicGFjazovL2F3bi8uL25vZGVfbW9kdWxlcy9hd2Vzb21lLW5vdGlmaWNhdGlvbnMvZGlzdC9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vYXduLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly9hd24vLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvY3NzV2l0aE1hcHBpbmdUb1N0cmluZy5qcyIsIndlYnBhY2s6Ly9hd24vLi9ub2RlX21vZHVsZXMvYXdlc29tZS1ub3RpZmljYXRpb25zL2Rpc3Qvc3R5bGUuY3NzPzBmZjkiLCJ3ZWJwYWNrOi8vYXduLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL2F3bi8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vYXduLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL2F3bi8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly9hd24vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly9hd24vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly9hd24vLi9zcmNqcy9leHRzL2NhbGxiYWNrcy5qcyIsIndlYnBhY2s6Ly9hd24vZXh0ZXJuYWwgXCJTaGlueVwiIiwid2VicGFjazovL2F3bi93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9hd24vd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vYXduL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9hd24vd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9hd24vd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9hd24vLi9zcmNqcy9leHRzL25vdGlmaWNhdGlvbnMuanMiXSwic291cmNlc0NvbnRlbnQiOlsiIWZ1bmN0aW9uKHQsZSl7XCJvYmplY3RcIj09dHlwZW9mIGV4cG9ydHMmJlwib2JqZWN0XCI9PXR5cGVvZiBtb2R1bGU/bW9kdWxlLmV4cG9ydHM9ZSgpOlwiZnVuY3Rpb25cIj09dHlwZW9mIGRlZmluZSYmZGVmaW5lLmFtZD9kZWZpbmUoW10sZSk6XCJvYmplY3RcIj09dHlwZW9mIGV4cG9ydHM/ZXhwb3J0cy5BV049ZSgpOnQuQVdOPWUoKX0od2luZG93LChmdW5jdGlvbigpe3JldHVybiBmdW5jdGlvbih0KXt2YXIgZT17fTtmdW5jdGlvbiBuKG8pe2lmKGVbb10pcmV0dXJuIGVbb10uZXhwb3J0czt2YXIgaT1lW29dPXtpOm8sbDohMSxleHBvcnRzOnt9fTtyZXR1cm4gdFtvXS5jYWxsKGkuZXhwb3J0cyxpLGkuZXhwb3J0cyxuKSxpLmw9ITAsaS5leHBvcnRzfXJldHVybiBuLm09dCxuLmM9ZSxuLmQ9ZnVuY3Rpb24odCxlLG8pe24ubyh0LGUpfHxPYmplY3QuZGVmaW5lUHJvcGVydHkodCxlLHtlbnVtZXJhYmxlOiEwLGdldDpvfSl9LG4ucj1mdW5jdGlvbih0KXtcInVuZGVmaW5lZFwiIT10eXBlb2YgU3ltYm9sJiZTeW1ib2wudG9TdHJpbmdUYWcmJk9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0LFN5bWJvbC50b1N0cmluZ1RhZyx7dmFsdWU6XCJNb2R1bGVcIn0pLE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0LFwiX19lc01vZHVsZVwiLHt2YWx1ZTohMH0pfSxuLnQ9ZnVuY3Rpb24odCxlKXtpZigxJmUmJih0PW4odCkpLDgmZSlyZXR1cm4gdDtpZig0JmUmJlwib2JqZWN0XCI9PXR5cGVvZiB0JiZ0JiZ0Ll9fZXNNb2R1bGUpcmV0dXJuIHQ7dmFyIG89T2JqZWN0LmNyZWF0ZShudWxsKTtpZihuLnIobyksT2JqZWN0LmRlZmluZVByb3BlcnR5KG8sXCJkZWZhdWx0XCIse2VudW1lcmFibGU6ITAsdmFsdWU6dH0pLDImZSYmXCJzdHJpbmdcIiE9dHlwZW9mIHQpZm9yKHZhciBpIGluIHQpbi5kKG8saSxmdW5jdGlvbihlKXtyZXR1cm4gdFtlXX0uYmluZChudWxsLGkpKTtyZXR1cm4gb30sbi5uPWZ1bmN0aW9uKHQpe3ZhciBlPXQmJnQuX19lc01vZHVsZT9mdW5jdGlvbigpe3JldHVybiB0LmRlZmF1bHR9OmZ1bmN0aW9uKCl7cmV0dXJuIHR9O3JldHVybiBuLmQoZSxcImFcIixlKSxlfSxuLm89ZnVuY3Rpb24odCxlKXtyZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHQsZSl9LG4ucD1cIlwiLG4obi5zPTApfShbZnVuY3Rpb24odCxlLG4pe1widXNlIHN0cmljdFwiO2Z1bmN0aW9uIG8odCl7cmV0dXJuKG89XCJmdW5jdGlvblwiPT10eXBlb2YgU3ltYm9sJiZcInN5bWJvbFwiPT10eXBlb2YgU3ltYm9sLml0ZXJhdG9yP2Z1bmN0aW9uKHQpe3JldHVybiB0eXBlb2YgdH06ZnVuY3Rpb24odCl7cmV0dXJuIHQmJlwiZnVuY3Rpb25cIj09dHlwZW9mIFN5bWJvbCYmdC5jb25zdHJ1Y3Rvcj09PVN5bWJvbCYmdCE9PVN5bWJvbC5wcm90b3R5cGU/XCJzeW1ib2xcIjp0eXBlb2YgdH0pKHQpfWZ1bmN0aW9uIGkodCxlKXtmb3IodmFyIG49MDtuPGUubGVuZ3RoO24rKyl7dmFyIG89ZVtuXTtvLmVudW1lcmFibGU9by5lbnVtZXJhYmxlfHwhMSxvLmNvbmZpZ3VyYWJsZT0hMCxcInZhbHVlXCJpbiBvJiYoby53cml0YWJsZT0hMCksT2JqZWN0LmRlZmluZVByb3BlcnR5KHQsby5rZXksbyl9fW4ucihlKTt2YXIgcj17bWF4Tm90aWZpY2F0aW9uczoxMCxhbmltYXRpb25EdXJhdGlvbjozMDAscG9zaXRpb246XCJib3R0b20tcmlnaHRcIixsYWJlbHM6e3RpcDpcIlRpcFwiLGluZm86XCJJbmZvXCIsc3VjY2VzczpcIlN1Y2Nlc3NcIix3YXJuaW5nOlwiQXR0ZW50aW9uXCIsYWxlcnQ6XCJFcnJvclwiLGFzeW5jOlwiTG9hZGluZ1wiLGNvbmZpcm06XCJDb25maXJtYXRpb24gcmVxdWlyZWRcIixjb25maXJtT2s6XCJPS1wiLGNvbmZpcm1DYW5jZWw6XCJDYW5jZWxcIn0saWNvbnM6e3RpcDpcInF1ZXN0aW9uLWNpcmNsZVwiLGluZm86XCJpbmZvLWNpcmNsZVwiLHN1Y2Nlc3M6XCJjaGVjay1jaXJjbGVcIix3YXJuaW5nOlwiZXhjbGFtYXRpb24tY2lyY2xlXCIsYWxlcnQ6XCJleGNsYW1hdGlvbi10cmlhbmdsZVwiLGFzeW5jOlwiY29nIGZhLXNwaW5cIixjb25maXJtOlwiZXhjbGFtYXRpb24tdHJpYW5nbGVcIixwcmVmaXg6XCI8aSBjbGFzcz0nZmEgZmFzIGZhLWZ3IGZhLVwiLHN1ZmZpeDpcIic+PC9pPlwiLGVuYWJsZWQ6ITB9LHJlcGxhY2VtZW50czp7dGlwOm51bGwsaW5mbzpudWxsLHN1Y2Nlc3M6bnVsbCx3YXJuaW5nOm51bGwsYWxlcnQ6bnVsbCxhc3luYzpudWxsLFwiYXN5bmMtYmxvY2tcIjpudWxsLG1vZGFsOm51bGwsY29uZmlybTpudWxsLGdlbmVyYWw6e1wiPHNjcmlwdD5cIjpcIlwiLFwiPFxcL3NjcmlwdD5cIjpcIlwifX0sbWVzc2FnZXM6e3RpcDpcIlwiLGluZm86XCJcIixzdWNjZXNzOlwiQWN0aW9uIGhhcyBiZWVuIHN1Y2NlZWRlZFwiLHdhcm5pbmc6XCJcIixhbGVydDpcIkFjdGlvbiBoYXMgYmVlbiBmYWlsZWRcIixjb25maXJtOlwiVGhpcyBhY3Rpb24gY2FuJ3QgYmUgdW5kb25lLiBDb250aW51ZT9cIixhc3luYzpcIlBsZWFzZSwgd2FpdC4uLlwiLFwiYXN5bmMtYmxvY2tcIjpcIkxvYWRpbmdcIn0sZm9ybWF0RXJyb3I6ZnVuY3Rpb24odCl7aWYodC5yZXNwb25zZSl7aWYoIXQucmVzcG9uc2UuZGF0YSlyZXR1cm5cIjUwMCBBUEkgU2VydmVyIEVycm9yXCI7aWYodC5yZXNwb25zZS5kYXRhLmVycm9ycylyZXR1cm4gdC5yZXNwb25zZS5kYXRhLmVycm9ycy5tYXAoKGZ1bmN0aW9uKHQpe3JldHVybiB0LmRldGFpbH0pKS5qb2luKFwiPGJyPlwiKTtpZih0LnJlc3BvbnNlLnN0YXR1c1RleHQpcmV0dXJuXCJcIi5jb25jYXQodC5yZXNwb25zZS5zdGF0dXMsXCIgXCIpLmNvbmNhdCh0LnJlc3BvbnNlLnN0YXR1c1RleHQsXCI6IFwiKS5jb25jYXQodC5yZXNwb25zZS5kYXRhKX1yZXR1cm4gdC5tZXNzYWdlP3QubWVzc2FnZTp0fSxkdXJhdGlvbnM6e2dsb2JhbDo1ZTMsc3VjY2VzczpudWxsLGluZm86bnVsbCx0aXA6bnVsbCx3YXJuaW5nOm51bGwsYWxlcnQ6bnVsbH0sbWluRHVyYXRpb25zOnthc3luYzoxZTMsXCJhc3luYy1ibG9ja1wiOjFlM319LGE9ZnVuY3Rpb24oKXtmdW5jdGlvbiB0KCl7dmFyIGU9YXJndW1lbnRzLmxlbmd0aD4wJiZ2b2lkIDAhPT1hcmd1bWVudHNbMF0/YXJndW1lbnRzWzBdOnt9LG49YXJndW1lbnRzLmxlbmd0aD4xJiZ2b2lkIDAhPT1hcmd1bWVudHNbMV0/YXJndW1lbnRzWzFdOnI7IWZ1bmN0aW9uKHQsZSl7aWYoISh0IGluc3RhbmNlb2YgZSkpdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvblwiKX0odGhpcyx0KSxPYmplY3QuYXNzaWduKHRoaXMsdGhpcy5kZWZhdWx0c0RlZXAobixlKSl9dmFyIGUsbixhO3JldHVybiBlPXQsKG49W3trZXk6XCJpY29uXCIsdmFsdWU6ZnVuY3Rpb24odCl7cmV0dXJuIHRoaXMuaWNvbnMuZW5hYmxlZD9cIlwiLmNvbmNhdCh0aGlzLmljb25zLnByZWZpeCkuY29uY2F0KHRoaXMuaWNvbnNbdF0pLmNvbmNhdCh0aGlzLmljb25zLnN1ZmZpeCk6XCJcIn19LHtrZXk6XCJsYWJlbFwiLHZhbHVlOmZ1bmN0aW9uKHQpe3JldHVybiB0aGlzLmxhYmVsc1t0XX19LHtrZXk6XCJkdXJhdGlvblwiLHZhbHVlOmZ1bmN0aW9uKHQpe3ZhciBlPXRoaXMuZHVyYXRpb25zW3RdO3JldHVybiBudWxsPT09ZT90aGlzLmR1cmF0aW9ucy5nbG9iYWw6ZX19LHtrZXk6XCJ0b1NlY3NcIix2YWx1ZTpmdW5jdGlvbih0KXtyZXR1cm5cIlwiLmNvbmNhdCh0LzFlMyxcInNcIil9fSx7a2V5OlwiYXBwbHlSZXBsYWNlbWVudHNcIix2YWx1ZTpmdW5jdGlvbih0LGUpe2lmKCF0KXJldHVybiB0aGlzLm1lc3NhZ2VzW2VdfHxcIlwiO2Zvcih2YXIgbj0wLG89W1wiZ2VuZXJhbFwiLGVdO248by5sZW5ndGg7bisrKXt2YXIgaT1vW25dO2lmKHRoaXMucmVwbGFjZW1lbnRzW2ldKWZvcih2YXIgciBpbiB0aGlzLnJlcGxhY2VtZW50c1tpXSl0PXQucmVwbGFjZShyLHRoaXMucmVwbGFjZW1lbnRzW2ldW3JdKX1yZXR1cm4gdH19LHtrZXk6XCJvdmVycmlkZVwiLHZhbHVlOmZ1bmN0aW9uKGUpe3JldHVybiBlP25ldyB0KGUsdGhpcyk6dGhpc319LHtrZXk6XCJkZWZhdWx0c0RlZXBcIix2YWx1ZTpmdW5jdGlvbih0LGUpe3ZhciBuPXt9O2Zvcih2YXIgaSBpbiB0KWUuaGFzT3duUHJvcGVydHkoaSk/bltpXT1cIm9iamVjdFwiPT09byh0W2ldKSYmbnVsbCE9PXRbaV0/dGhpcy5kZWZhdWx0c0RlZXAodFtpXSxlW2ldKTplW2ldOm5baV09dFtpXTtyZXR1cm4gbn19XSkmJmkoZS5wcm90b3R5cGUsbiksYSYmaShlLGEpLHR9KCkscz17cG9wdXA6XCJcIi5jb25jYXQoXCJhd25cIixcIi1wb3B1cFwiKSx0b2FzdDpcIlwiLmNvbmNhdChcImF3blwiLFwiLXRvYXN0XCIpLGJ0bjpcIlwiLmNvbmNhdChcImF3blwiLFwiLWJ0blwiKSxjb25maXJtOlwiXCIuY29uY2F0KFwiYXduXCIsXCItY29uZmlybVwiKX0sYz17cHJlZml4OnMudG9hc3Qsa2xhc3M6e2xhYmVsOlwiXCIuY29uY2F0KHMudG9hc3QsXCItbGFiZWxcIiksY29udGVudDpcIlwiLmNvbmNhdChzLnRvYXN0LFwiLWNvbnRlbnRcIiksaWNvbjpcIlwiLmNvbmNhdChzLnRvYXN0LFwiLWljb25cIikscHJvZ3Jlc3NCYXI6XCJcIi5jb25jYXQocy50b2FzdCxcIi1wcm9ncmVzcy1iYXJcIikscHJvZ3Jlc3NCYXJQYXVzZTpcIlwiLmNvbmNhdChzLnRvYXN0LFwiLXByb2dyZXNzLWJhci1wYXVzZWRcIil9LGlkczp7Y29udGFpbmVyOlwiXCIuY29uY2F0KHMudG9hc3QsXCItY29udGFpbmVyXCIpfX0sdT17cHJlZml4OnMucG9wdXAsa2xhc3M6e2J1dHRvbnM6XCJcIi5jb25jYXQoXCJhd25cIixcIi1idXR0b25zXCIpLGJ1dHRvbjpzLmJ0bixzdWNjZXNzQnRuOlwiXCIuY29uY2F0KHMuYnRuLFwiLXN1Y2Nlc3NcIiksY2FuY2VsQnRuOlwiXCIuY29uY2F0KHMuYnRuLFwiLWNhbmNlbFwiKSx0aXRsZTpcIlwiLmNvbmNhdChzLnBvcHVwLFwiLXRpdGxlXCIpLGJvZHk6XCJcIi5jb25jYXQocy5wb3B1cCxcIi1ib2R5XCIpLGNvbnRlbnQ6XCJcIi5jb25jYXQocy5wb3B1cCxcIi1jb250ZW50XCIpLGRvdEFuaW1hdGlvbjpcIlwiLmNvbmNhdChzLnBvcHVwLFwiLWxvYWRpbmctZG90c1wiKX0saWRzOnt3cmFwcGVyOlwiXCIuY29uY2F0KHMucG9wdXAsXCItd3JhcHBlclwiKSxjb25maXJtT2s6XCJcIi5jb25jYXQocy5jb25maXJtLFwiLW9rXCIpLGNvbmZpcm1DYW5jZWw6XCJcIi5jb25jYXQocy5jb25maXJtLFwiLWNhbmNlbFwiKX19LGw9e2tsYXNzOntoaWRpbmc6XCJcIi5jb25jYXQoXCJhd25cIixcIi1oaWRpbmdcIil9LGxpYjpcImF3blwifTtmdW5jdGlvbiBmKHQsZSl7Zm9yKHZhciBuPTA7bjxlLmxlbmd0aDtuKyspe3ZhciBvPWVbbl07by5lbnVtZXJhYmxlPW8uZW51bWVyYWJsZXx8ITEsby5jb25maWd1cmFibGU9ITAsXCJ2YWx1ZVwiaW4gbyYmKG8ud3JpdGFibGU9ITApLE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0LG8ua2V5LG8pfX12YXIgcD1mdW5jdGlvbigpe2Z1bmN0aW9uIHQoZSxuLG8saSxyKXshZnVuY3Rpb24odCxlKXtpZighKHQgaW5zdGFuY2VvZiBlKSl0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uXCIpfSh0aGlzLHQpLHRoaXMubmV3Tm9kZT1kb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpLG4mJih0aGlzLm5ld05vZGUuaWQ9biksbyYmKHRoaXMubmV3Tm9kZS5jbGFzc05hbWU9byksaSYmKHRoaXMubmV3Tm9kZS5zdHlsZS5jc3NUZXh0PWkpLHRoaXMucGFyZW50PWUsdGhpcy5vcHRpb25zPXJ9dmFyIGUsbixvO3JldHVybiBlPXQsKG49W3trZXk6XCJiZWZvcmVJbnNlcnRcIix2YWx1ZTpmdW5jdGlvbigpe319LHtrZXk6XCJhZnRlckluc2VydFwiLHZhbHVlOmZ1bmN0aW9uKCl7fX0se2tleTpcImluc2VydFwiLHZhbHVlOmZ1bmN0aW9uKCl7cmV0dXJuIHRoaXMuYmVmb3JlSW5zZXJ0KCksdGhpcy5lbD10aGlzLnBhcmVudC5hcHBlbmRDaGlsZCh0aGlzLm5ld05vZGUpLHRoaXMuYWZ0ZXJJbnNlcnQoKSx0aGlzfX0se2tleTpcInJlcGxhY2VcIix2YWx1ZTpmdW5jdGlvbih0KXt2YXIgZT10aGlzO2lmKHRoaXMuZ2V0RWxlbWVudCgpKXJldHVybiB0aGlzLmJlZm9yZURlbGV0ZSgpLnRoZW4oKGZ1bmN0aW9uKCl7cmV0dXJuIGUudXBkYXRlVHlwZSh0LnR5cGUpLGUucGFyZW50LnJlcGxhY2VDaGlsZCh0Lm5ld05vZGUsZS5lbCksZS5lbD1lLmdldEVsZW1lbnQodC5uZXdOb2RlKSxlLmFmdGVySW5zZXJ0KCksZX0pKX19LHtrZXk6XCJiZWZvcmVEZWxldGVcIix2YWx1ZTpmdW5jdGlvbigpe3ZhciB0PXRoaXMsZT1hcmd1bWVudHMubGVuZ3RoPjAmJnZvaWQgMCE9PWFyZ3VtZW50c1swXT9hcmd1bWVudHNbMF06dGhpcy5lbCxuPTA7cmV0dXJuIHRoaXMuc3RhcnQmJihuPXRoaXMub3B0aW9ucy5taW5EdXJhdGlvbnNbdGhpcy50eXBlXSt0aGlzLnN0YXJ0LURhdGUubm93KCkpPDAmJihuPTApLG5ldyBQcm9taXNlKChmdW5jdGlvbihvKXtzZXRUaW1lb3V0KChmdW5jdGlvbigpe2UuY2xhc3NMaXN0LmFkZChsLmtsYXNzLmhpZGluZyksc2V0VGltZW91dChvLHQub3B0aW9ucy5hbmltYXRpb25EdXJhdGlvbil9KSxuKX0pKX19LHtrZXk6XCJkZWxldGVcIix2YWx1ZTpmdW5jdGlvbigpe3ZhciB0PXRoaXMsZT1hcmd1bWVudHMubGVuZ3RoPjAmJnZvaWQgMCE9PWFyZ3VtZW50c1swXT9hcmd1bWVudHNbMF06dGhpcy5lbDtyZXR1cm4gdGhpcy5nZXRFbGVtZW50KGUpP3RoaXMuYmVmb3JlRGVsZXRlKGUpLnRoZW4oKGZ1bmN0aW9uKCl7ZS5yZW1vdmUoKSx0LmFmdGVyRGVsZXRlKCl9KSk6bnVsbH19LHtrZXk6XCJhZnRlckRlbGV0ZVwiLHZhbHVlOmZ1bmN0aW9uKCl7fX0se2tleTpcImdldEVsZW1lbnRcIix2YWx1ZTpmdW5jdGlvbigpe3ZhciB0PWFyZ3VtZW50cy5sZW5ndGg+MCYmdm9pZCAwIT09YXJndW1lbnRzWzBdP2FyZ3VtZW50c1swXTp0aGlzLmVsO3JldHVybiB0P2RvY3VtZW50LmdldEVsZW1lbnRCeUlkKHQuaWQpOm51bGx9fSx7a2V5OlwiYWRkRXZlbnRcIix2YWx1ZTpmdW5jdGlvbih0LGUpe3RoaXMuZWwuYWRkRXZlbnRMaXN0ZW5lcih0LGUpfX0se2tleTpcInRvZ2dsZUNsYXNzXCIsdmFsdWU6ZnVuY3Rpb24odCl7dGhpcy5lbC5jbGFzc0xpc3QudG9nZ2xlKHQpfX0se2tleTpcInVwZGF0ZVR5cGVcIix2YWx1ZTpmdW5jdGlvbih0KXt0aGlzLnR5cGU9dCx0aGlzLmR1cmF0aW9uPXRoaXMub3B0aW9ucy5kdXJhdGlvbih0aGlzLnR5cGUpfX1dKSYmZihlLnByb3RvdHlwZSxuKSxvJiZmKGUsbyksdH0oKTtmdW5jdGlvbiBkKHQsZSl7Zm9yKHZhciBuPTA7bjxlLmxlbmd0aDtuKyspe3ZhciBvPWVbbl07by5lbnVtZXJhYmxlPW8uZW51bWVyYWJsZXx8ITEsby5jb25maWd1cmFibGU9ITAsXCJ2YWx1ZVwiaW4gbyYmKG8ud3JpdGFibGU9ITApLE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0LG8ua2V5LG8pfX12YXIgeT1mdW5jdGlvbigpe2Z1bmN0aW9uIHQoZSxuKXshZnVuY3Rpb24odCxlKXtpZighKHQgaW5zdGFuY2VvZiBlKSl0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uXCIpfSh0aGlzLHQpLHRoaXMuY2FsbGJhY2s9ZSx0aGlzLnJlbWFpbmluZz1uLHRoaXMucmVzdW1lKCl9dmFyIGUsbixvO3JldHVybiBlPXQsKG49W3trZXk6XCJwYXVzZVwiLHZhbHVlOmZ1bmN0aW9uKCl7dGhpcy5wYXVzZWQ9ITAsd2luZG93LmNsZWFyVGltZW91dCh0aGlzLnRpbWVySWQpLHRoaXMucmVtYWluaW5nLT1uZXcgRGF0ZS10aGlzLnN0YXJ0fX0se2tleTpcInJlc3VtZVwiLHZhbHVlOmZ1bmN0aW9uKCl7dmFyIHQ9dGhpczt0aGlzLnBhdXNlZD0hMSx0aGlzLnN0YXJ0PW5ldyBEYXRlLHdpbmRvdy5jbGVhclRpbWVvdXQodGhpcy50aW1lcklkKSx0aGlzLnRpbWVySWQ9d2luZG93LnNldFRpbWVvdXQoKGZ1bmN0aW9uKCl7d2luZG93LmNsZWFyVGltZW91dCh0LnRpbWVySWQpLHQuY2FsbGJhY2soKX0pLHRoaXMucmVtYWluaW5nKX19LHtrZXk6XCJ0b2dnbGVcIix2YWx1ZTpmdW5jdGlvbigpe3RoaXMucGF1c2VkP3RoaXMucmVzdW1lKCk6dGhpcy5wYXVzZSgpfX1dKSYmZChlLnByb3RvdHlwZSxuKSxvJiZkKGUsbyksdH0oKTtmdW5jdGlvbiBoKHQpe3JldHVybihoPVwiZnVuY3Rpb25cIj09dHlwZW9mIFN5bWJvbCYmXCJzeW1ib2xcIj09dHlwZW9mIFN5bWJvbC5pdGVyYXRvcj9mdW5jdGlvbih0KXtyZXR1cm4gdHlwZW9mIHR9OmZ1bmN0aW9uKHQpe3JldHVybiB0JiZcImZ1bmN0aW9uXCI9PXR5cGVvZiBTeW1ib2wmJnQuY29uc3RydWN0b3I9PT1TeW1ib2wmJnQhPT1TeW1ib2wucHJvdG90eXBlP1wic3ltYm9sXCI6dHlwZW9mIHR9KSh0KX1mdW5jdGlvbiBtKHQsZSl7Zm9yKHZhciBuPTA7bjxlLmxlbmd0aDtuKyspe3ZhciBvPWVbbl07by5lbnVtZXJhYmxlPW8uZW51bWVyYWJsZXx8ITEsby5jb25maWd1cmFibGU9ITAsXCJ2YWx1ZVwiaW4gbyYmKG8ud3JpdGFibGU9ITApLE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0LG8ua2V5LG8pfX1mdW5jdGlvbiB2KHQsZSl7cmV0dXJuIWV8fFwib2JqZWN0XCIhPT1oKGUpJiZcImZ1bmN0aW9uXCIhPXR5cGVvZiBlP2Z1bmN0aW9uKHQpe2lmKHZvaWQgMD09PXQpdGhyb3cgbmV3IFJlZmVyZW5jZUVycm9yKFwidGhpcyBoYXNuJ3QgYmVlbiBpbml0aWFsaXNlZCAtIHN1cGVyKCkgaGFzbid0IGJlZW4gY2FsbGVkXCIpO3JldHVybiB0fSh0KTplfWZ1bmN0aW9uIGIodCl7cmV0dXJuKGI9T2JqZWN0LnNldFByb3RvdHlwZU9mP09iamVjdC5nZXRQcm90b3R5cGVPZjpmdW5jdGlvbih0KXtyZXR1cm4gdC5fX3Byb3RvX198fE9iamVjdC5nZXRQcm90b3R5cGVPZih0KX0pKHQpfWZ1bmN0aW9uIGsodCxlKXtyZXR1cm4oaz1PYmplY3Quc2V0UHJvdG90eXBlT2Z8fGZ1bmN0aW9uKHQsZSl7cmV0dXJuIHQuX19wcm90b19fPWUsdH0pKHQsZSl9dmFyIGc9ZnVuY3Rpb24odCl7ZnVuY3Rpb24gZSh0LG4sbyxpKXt2YXIgcjtyZXR1cm4gZnVuY3Rpb24odCxlKXtpZighKHQgaW5zdGFuY2VvZiBlKSl0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uXCIpfSh0aGlzLGUpLChyPXYodGhpcyxiKGUpLmNhbGwodGhpcyxpLFwiXCIuY29uY2F0KGMucHJlZml4LFwiLVwiKS5jb25jYXQoTWF0aC5mbG9vcihEYXRlLm5vdygpLTEwMCpNYXRoLnJhbmRvbSgpKSksXCJcIi5jb25jYXQoYy5wcmVmaXgsXCIgXCIpLmNvbmNhdChjLnByZWZpeCxcIi1cIikuY29uY2F0KG4pLFwiYW5pbWF0aW9uLWR1cmF0aW9uOiBcIi5jb25jYXQoby50b1NlY3Moby5hbmltYXRpb25EdXJhdGlvbiksXCI7XCIpLG8pKSkudXBkYXRlVHlwZShuKSxyLnNldElubmVySHRtbCh0KSxyfXZhciBuLG8saTtyZXR1cm4gZnVuY3Rpb24odCxlKXtpZihcImZ1bmN0aW9uXCIhPXR5cGVvZiBlJiZudWxsIT09ZSl0aHJvdyBuZXcgVHlwZUVycm9yKFwiU3VwZXIgZXhwcmVzc2lvbiBtdXN0IGVpdGhlciBiZSBudWxsIG9yIGEgZnVuY3Rpb25cIik7dC5wcm90b3R5cGU9T2JqZWN0LmNyZWF0ZShlJiZlLnByb3RvdHlwZSx7Y29uc3RydWN0b3I6e3ZhbHVlOnQsd3JpdGFibGU6ITAsY29uZmlndXJhYmxlOiEwfX0pLGUmJmsodCxlKX0oZSx0KSxuPWUsKG89W3trZXk6XCJzZXRJbm5lckh0bWxcIix2YWx1ZTpmdW5jdGlvbih0KXtcImFsZXJ0XCI9PT10aGlzLnR5cGUmJnQmJih0PXRoaXMub3B0aW9ucy5mb3JtYXRFcnJvcih0KSksdD10aGlzLm9wdGlvbnMuYXBwbHlSZXBsYWNlbWVudHModCx0aGlzLnR5cGUpLHRoaXMubmV3Tm9kZS5pbm5lckhUTUw9JzxkaXYgY2xhc3M9XCJhd24tdG9hc3Qtd3JhcHBlclwiPicuY29uY2F0KHRoaXMucHJvZ3Jlc3NCYXIpLmNvbmNhdCh0aGlzLmxhYmVsLCc8ZGl2IGNsYXNzPVwiJykuY29uY2F0KGMua2xhc3MuY29udGVudCwnXCI+JykuY29uY2F0KHQsJzwvZGl2PjxzcGFuIGNsYXNzPVwiJykuY29uY2F0KGMua2xhc3MuaWNvbiwnXCI+JykuY29uY2F0KHRoaXMub3B0aW9ucy5pY29uKHRoaXMudHlwZSksXCI8L3NwYW4+PC9kaXY+XCIpfX0se2tleTpcImJlZm9yZUluc2VydFwiLHZhbHVlOmZ1bmN0aW9uKCl7dmFyIHQ9dGhpcztpZih0aGlzLnBhcmVudC5jaGlsZEVsZW1lbnRDb3VudD49dGhpcy5vcHRpb25zLm1heE5vdGlmaWNhdGlvbnMpe3ZhciBlPUFycmF5LmZyb20odGhpcy5wYXJlbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShjLnByZWZpeCkpO3RoaXMuZGVsZXRlKGUuZmluZCgoZnVuY3Rpb24oZSl7cmV0dXJuIXQuaXNEZWxldGVkKGUpfSkpKX19fSx7a2V5OlwiYWZ0ZXJJbnNlcnRcIix2YWx1ZTpmdW5jdGlvbigpe3ZhciB0PXRoaXM7aWYoXCJhc3luY1wiPT10aGlzLnR5cGUpcmV0dXJuIHRoaXMuc3RhcnQ9RGF0ZS5ub3coKTtpZih0aGlzLmFkZEV2ZW50KFwiY2xpY2tcIiwoZnVuY3Rpb24oKXtyZXR1cm4gdC5kZWxldGUoKX0pKSwhKHRoaXMuZHVyYXRpb248PTApKXt0aGlzLnRpbWVyPW5ldyB5KChmdW5jdGlvbigpe3JldHVybiB0LmRlbGV0ZSgpfSksdGhpcy5kdXJhdGlvbik7Zm9yKHZhciBlPTAsbj1bXCJtb3VzZWVudGVyXCIsXCJtb3VzZWxlYXZlXCJdO2U8bi5sZW5ndGg7ZSsrKXt2YXIgbz1uW2VdO3RoaXMuYWRkRXZlbnQobywoZnVuY3Rpb24oKXt0LmlzRGVsZXRlZCgpfHwodC50b2dnbGVDbGFzcyhjLmtsYXNzLnByb2dyZXNzQmFyUGF1c2UpLHQudGltZXIudG9nZ2xlKCkpfSkpfX19fSx7a2V5OlwiaXNEZWxldGVkXCIsdmFsdWU6ZnVuY3Rpb24oKXt2YXIgdD1hcmd1bWVudHMubGVuZ3RoPjAmJnZvaWQgMCE9PWFyZ3VtZW50c1swXT9hcmd1bWVudHNbMF06dGhpcy5lbDtyZXR1cm4gdC5jbGFzc0xpc3QuY29udGFpbnMobC5rbGFzcy5oaWRpbmcpfX0se2tleTpcInByb2dyZXNzQmFyXCIsZ2V0OmZ1bmN0aW9uKCl7cmV0dXJuIHRoaXMuZHVyYXRpb248PTB8fFwiYXN5bmNcIj09PXRoaXMudHlwZT9cIlwiOlwiPGRpdiBjbGFzcz0nXCIuY29uY2F0KGMua2xhc3MucHJvZ3Jlc3NCYXIsXCInIHN0eWxlPVxcXCJhbmltYXRpb24tZHVyYXRpb246XCIpLmNvbmNhdCh0aGlzLm9wdGlvbnMudG9TZWNzKHRoaXMuZHVyYXRpb24pLCc7XCI+PC9kaXY+Jyl9fSx7a2V5OlwibGFiZWxcIixnZXQ6ZnVuY3Rpb24oKXtyZXR1cm4nPGIgY2xhc3M9XCInLmNvbmNhdChjLmtsYXNzLmxhYmVsLCdcIj4nKS5jb25jYXQodGhpcy5vcHRpb25zLmxhYmVsKHRoaXMudHlwZSksXCI8L2I+XCIpfX1dKSYmbShuLnByb3RvdHlwZSxvKSxpJiZtKG4saSksZX0ocCk7ZnVuY3Rpb24gdyh0KXtyZXR1cm4odz1cImZ1bmN0aW9uXCI9PXR5cGVvZiBTeW1ib2wmJlwic3ltYm9sXCI9PXR5cGVvZiBTeW1ib2wuaXRlcmF0b3I/ZnVuY3Rpb24odCl7cmV0dXJuIHR5cGVvZiB0fTpmdW5jdGlvbih0KXtyZXR1cm4gdCYmXCJmdW5jdGlvblwiPT10eXBlb2YgU3ltYm9sJiZ0LmNvbnN0cnVjdG9yPT09U3ltYm9sJiZ0IT09U3ltYm9sLnByb3RvdHlwZT9cInN5bWJvbFwiOnR5cGVvZiB0fSkodCl9ZnVuY3Rpb24gTyh0LGUpe2Zvcih2YXIgbj0wO248ZS5sZW5ndGg7bisrKXt2YXIgbz1lW25dO28uZW51bWVyYWJsZT1vLmVudW1lcmFibGV8fCExLG8uY29uZmlndXJhYmxlPSEwLFwidmFsdWVcImluIG8mJihvLndyaXRhYmxlPSEwKSxPYmplY3QuZGVmaW5lUHJvcGVydHkodCxvLmtleSxvKX19ZnVuY3Rpb24gXyh0LGUpe3JldHVybiFlfHxcIm9iamVjdFwiIT09dyhlKSYmXCJmdW5jdGlvblwiIT10eXBlb2YgZT9mdW5jdGlvbih0KXtpZih2b2lkIDA9PT10KXRocm93IG5ldyBSZWZlcmVuY2VFcnJvcihcInRoaXMgaGFzbid0IGJlZW4gaW5pdGlhbGlzZWQgLSBzdXBlcigpIGhhc24ndCBiZWVuIGNhbGxlZFwiKTtyZXR1cm4gdH0odCk6ZX1mdW5jdGlvbiBUKHQpe3JldHVybihUPU9iamVjdC5zZXRQcm90b3R5cGVPZj9PYmplY3QuZ2V0UHJvdG90eXBlT2Y6ZnVuY3Rpb24odCl7cmV0dXJuIHQuX19wcm90b19ffHxPYmplY3QuZ2V0UHJvdG90eXBlT2YodCl9KSh0KX1mdW5jdGlvbiBFKHQsZSl7cmV0dXJuKEU9T2JqZWN0LnNldFByb3RvdHlwZU9mfHxmdW5jdGlvbih0LGUpe3JldHVybiB0Ll9fcHJvdG9fXz1lLHR9KSh0LGUpfXZhciBTPWZ1bmN0aW9uKHQpe2Z1bmN0aW9uIGUodCl7dmFyIG4sbz1hcmd1bWVudHMubGVuZ3RoPjEmJnZvaWQgMCE9PWFyZ3VtZW50c1sxXT9hcmd1bWVudHNbMV06XCJtb2RhbFwiLGk9YXJndW1lbnRzLmxlbmd0aD4yP2FyZ3VtZW50c1syXTp2b2lkIDAscj1hcmd1bWVudHMubGVuZ3RoPjM/YXJndW1lbnRzWzNdOnZvaWQgMCxhPWFyZ3VtZW50cy5sZW5ndGg+ND9hcmd1bWVudHNbNF06dm9pZCAwOyFmdW5jdGlvbih0LGUpe2lmKCEodCBpbnN0YW5jZW9mIGUpKXRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb25cIil9KHRoaXMsZSk7dmFyIHM9XCJhbmltYXRpb24tZHVyYXRpb246IFwiLmNvbmNhdChpLnRvU2VjcyhpLmFuaW1hdGlvbkR1cmF0aW9uKSxcIjtcIik7cmV0dXJuKG49Xyh0aGlzLFQoZSkuY2FsbCh0aGlzLGRvY3VtZW50LmJvZHksdS5pZHMud3JhcHBlcixudWxsLHMsaSkpKVt1Lmlkcy5jb25maXJtT2tdPXIsblt1Lmlkcy5jb25maXJtQ2FuY2VsXT1hLG4uY2xhc3NOYW1lPVwiXCIuY29uY2F0KHUucHJlZml4LFwiLVwiKS5jb25jYXQobyksW1wiY29uZmlybVwiLFwiYXN5bmMtYmxvY2tcIixcIm1vZGFsXCJdLmluY2x1ZGVzKG8pfHwobz1cIm1vZGFsXCIpLG4udXBkYXRlVHlwZShvKSxuLnNldElubmVySHRtbCh0KSxuLmluc2VydCgpLG59dmFyIG4sbyxpO3JldHVybiBmdW5jdGlvbih0LGUpe2lmKFwiZnVuY3Rpb25cIiE9dHlwZW9mIGUmJm51bGwhPT1lKXRocm93IG5ldyBUeXBlRXJyb3IoXCJTdXBlciBleHByZXNzaW9uIG11c3QgZWl0aGVyIGJlIG51bGwgb3IgYSBmdW5jdGlvblwiKTt0LnByb3RvdHlwZT1PYmplY3QuY3JlYXRlKGUmJmUucHJvdG90eXBlLHtjb25zdHJ1Y3Rvcjp7dmFsdWU6dCx3cml0YWJsZTohMCxjb25maWd1cmFibGU6ITB9fSksZSYmRSh0LGUpfShlLHQpLG49ZSwobz1be2tleTpcInNldElubmVySHRtbFwiLHZhbHVlOmZ1bmN0aW9uKHQpe3ZhciBlPXRoaXMub3B0aW9ucy5hcHBseVJlcGxhY2VtZW50cyh0LHRoaXMudHlwZSk7c3dpdGNoKHRoaXMudHlwZSl7Y2FzZVwiY29uZmlybVwiOnZhciBuPVtcIjxidXR0b24gY2xhc3M9J1wiLmNvbmNhdCh1LmtsYXNzLmJ1dHRvbixcIiBcIikuY29uY2F0KHUua2xhc3Muc3VjY2Vzc0J0bixcIidpZD0nXCIpLmNvbmNhdCh1Lmlkcy5jb25maXJtT2ssXCInPlwiKS5jb25jYXQodGhpcy5vcHRpb25zLmxhYmVscy5jb25maXJtT2ssXCI8L2J1dHRvbj5cIildOyExIT09dGhpc1t1Lmlkcy5jb25maXJtQ2FuY2VsXSYmbi5wdXNoKFwiPGJ1dHRvbiBjbGFzcz0nXCIuY29uY2F0KHUua2xhc3MuYnV0dG9uLFwiIFwiKS5jb25jYXQodS5rbGFzcy5jYW5jZWxCdG4sXCInaWQ9J1wiKS5jb25jYXQodS5pZHMuY29uZmlybUNhbmNlbCxcIic+XCIpLmNvbmNhdCh0aGlzLm9wdGlvbnMubGFiZWxzLmNvbmZpcm1DYW5jZWwsXCI8L2J1dHRvbj5cIikpLGU9XCJcIi5jb25jYXQodGhpcy5vcHRpb25zLmljb24odGhpcy50eXBlKSxcIjxkaXYgY2xhc3M9J1wiKS5jb25jYXQodS5rbGFzcy50aXRsZSxcIic+XCIpLmNvbmNhdCh0aGlzLm9wdGlvbnMubGFiZWwodGhpcy50eXBlKSwnPC9kaXY+PGRpdiBjbGFzcz1cIicpLmNvbmNhdCh1LmtsYXNzLmNvbnRlbnQsJ1wiPicpLmNvbmNhdChlLFwiPC9kaXY+PGRpdiBjbGFzcz0nXCIpLmNvbmNhdCh1LmtsYXNzLmJ1dHRvbnMsXCIgXCIpLmNvbmNhdCh1LmtsYXNzLmJ1dHRvbnMsXCItXCIpLmNvbmNhdChuLmxlbmd0aCxcIic+XCIpLmNvbmNhdChuLmpvaW4oXCJcIiksXCI8L2Rpdj5cIik7YnJlYWs7Y2FzZVwiYXN5bmMtYmxvY2tcIjplPVwiXCIuY29uY2F0KGUsJzxkaXYgY2xhc3M9XCInKS5jb25jYXQodS5rbGFzcy5kb3RBbmltYXRpb24sJ1wiPjwvZGl2PicpfXRoaXMubmV3Tm9kZS5pbm5lckhUTUw9JzxkaXYgY2xhc3M9XCInLmNvbmNhdCh1LmtsYXNzLmJvZHksXCIgXCIpLmNvbmNhdCh0aGlzLmNsYXNzTmFtZSwnXCI+JykuY29uY2F0KGUsXCI8L2Rpdj5cIil9fSx7a2V5Olwia2V5dXBMaXN0ZW5lclwiLHZhbHVlOmZ1bmN0aW9uKHQpe2lmKFwiYXN5bmMtYmxvY2tcIj09PXRoaXMudHlwZSlyZXR1cm4gdC5wcmV2ZW50RGVmYXVsdCgpO3N3aXRjaCh0LmNvZGUpe2Nhc2VcIkVzY2FwZVwiOnQucHJldmVudERlZmF1bHQoKSx0aGlzLmRlbGV0ZSgpO2Nhc2VcIlRhYlwiOmlmKHQucHJldmVudERlZmF1bHQoKSxcImNvbmZpcm1cIiE9PXRoaXMudHlwZXx8ITE9PT10aGlzW3UuaWRzLmNvbmZpcm1DYW5jZWxdKXJldHVybiEwO3ZhciBlPXRoaXMub2tCdG47dC5zaGlmdEtleT9kb2N1bWVudC5hY3RpdmVFbGVtZW50LmlkPT11Lmlkcy5jb25maXJtT2smJihlPXRoaXMuY2FuY2VsQnRuKTpkb2N1bWVudC5hY3RpdmVFbGVtZW50LmlkIT09dS5pZHMuY29uZmlybUNhbmNlbCYmKGU9dGhpcy5jYW5jZWxCdG4pLGUuZm9jdXMoKX19fSx7a2V5OlwiYWZ0ZXJJbnNlcnRcIix2YWx1ZTpmdW5jdGlvbigpe3ZhciB0PXRoaXM7c3dpdGNoKHRoaXMubGlzdGVuZXI9ZnVuY3Rpb24oZSl7cmV0dXJuIHQua2V5dXBMaXN0ZW5lcihlKX0sd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJrZXlkb3duXCIsdGhpcy5saXN0ZW5lciksdGhpcy50eXBlKXtjYXNlXCJhc3luYy1ibG9ja1wiOnRoaXMuc3RhcnQ9RGF0ZS5ub3coKTticmVhaztjYXNlXCJjb25maXJtXCI6dGhpcy5va0J0bi5mb2N1cygpLHRoaXMuYWRkRXZlbnQoXCJjbGlja1wiLChmdW5jdGlvbihlKXtpZihcIkJVVFRPTlwiIT09ZS50YXJnZXQubm9kZU5hbWUpcmV0dXJuITE7dC5kZWxldGUoKSx0W2UudGFyZ2V0LmlkXSYmdFtlLnRhcmdldC5pZF0oKX0pKTticmVhaztkZWZhdWx0OmRvY3VtZW50LmFjdGl2ZUVsZW1lbnQuYmx1cigpLHRoaXMuYWRkRXZlbnQoXCJjbGlja1wiLChmdW5jdGlvbihlKXtlLnRhcmdldC5pZD09PXQubmV3Tm9kZS5pZCYmdC5kZWxldGUoKX0pKX19fSx7a2V5OlwiYWZ0ZXJEZWxldGVcIix2YWx1ZTpmdW5jdGlvbigpe3dpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKFwia2V5ZG93blwiLHRoaXMubGlzdGVuZXIpfX0se2tleTpcIm9rQnRuXCIsZ2V0OmZ1bmN0aW9uKCl7cmV0dXJuIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKHUuaWRzLmNvbmZpcm1Payl9fSx7a2V5OlwiY2FuY2VsQnRuXCIsZ2V0OmZ1bmN0aW9uKCl7cmV0dXJuIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKHUuaWRzLmNvbmZpcm1DYW5jZWwpfX1dKSYmTyhuLnByb3RvdHlwZSxvKSxpJiZPKG4saSksZX0ocCk7ZnVuY3Rpb24gaih0KXtyZXR1cm4oaj1cImZ1bmN0aW9uXCI9PXR5cGVvZiBTeW1ib2wmJlwic3ltYm9sXCI9PXR5cGVvZiBTeW1ib2wuaXRlcmF0b3I/ZnVuY3Rpb24odCl7cmV0dXJuIHR5cGVvZiB0fTpmdW5jdGlvbih0KXtyZXR1cm4gdCYmXCJmdW5jdGlvblwiPT10eXBlb2YgU3ltYm9sJiZ0LmNvbnN0cnVjdG9yPT09U3ltYm9sJiZ0IT09U3ltYm9sLnByb3RvdHlwZT9cInN5bWJvbFwiOnR5cGVvZiB0fSkodCl9ZnVuY3Rpb24geCh0LGUpe2Zvcih2YXIgbj0wO248ZS5sZW5ndGg7bisrKXt2YXIgbz1lW25dO28uZW51bWVyYWJsZT1vLmVudW1lcmFibGV8fCExLG8uY29uZmlndXJhYmxlPSEwLFwidmFsdWVcImluIG8mJihvLndyaXRhYmxlPSEwKSxPYmplY3QuZGVmaW5lUHJvcGVydHkodCxvLmtleSxvKX19bi5kKGUsXCJkZWZhdWx0XCIsKGZ1bmN0aW9uKCl7cmV0dXJuIEN9KSk7dmFyIEM9ZnVuY3Rpb24oKXtmdW5jdGlvbiB0KCl7dmFyIGU9YXJndW1lbnRzLmxlbmd0aD4wJiZ2b2lkIDAhPT1hcmd1bWVudHNbMF0/YXJndW1lbnRzWzBdOnt9OyFmdW5jdGlvbih0LGUpe2lmKCEodCBpbnN0YW5jZW9mIGUpKXRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb25cIil9KHRoaXMsdCksdGhpcy5vcHRpb25zPW5ldyBhKGUpfXZhciBlLG4sbztyZXR1cm4gZT10LChuPVt7a2V5OlwidGlwXCIsdmFsdWU6ZnVuY3Rpb24odCxlKXtyZXR1cm4gdGhpcy5fYWRkVG9hc3QodCxcInRpcFwiLGUpLmVsfX0se2tleTpcImluZm9cIix2YWx1ZTpmdW5jdGlvbih0LGUpe3JldHVybiB0aGlzLl9hZGRUb2FzdCh0LFwiaW5mb1wiLGUpLmVsfX0se2tleTpcInN1Y2Nlc3NcIix2YWx1ZTpmdW5jdGlvbih0LGUpe3JldHVybiB0aGlzLl9hZGRUb2FzdCh0LFwic3VjY2Vzc1wiLGUpLmVsfX0se2tleTpcIndhcm5pbmdcIix2YWx1ZTpmdW5jdGlvbih0LGUpe3JldHVybiB0aGlzLl9hZGRUb2FzdCh0LFwid2FybmluZ1wiLGUpLmVsfX0se2tleTpcImFsZXJ0XCIsdmFsdWU6ZnVuY3Rpb24odCxlKXtyZXR1cm4gdGhpcy5fYWRkVG9hc3QodCxcImFsZXJ0XCIsZSkuZWx9fSx7a2V5OlwiYXN5bmNcIix2YWx1ZTpmdW5jdGlvbih0LGUsbixvLGkpe3ZhciByPXRoaXMuX2FkZFRvYXN0KG8sXCJhc3luY1wiLGkpO3JldHVybiB0aGlzLl9hZnRlckFzeW5jKHQsZSxuLGkscil9fSx7a2V5OlwiY29uZmlybVwiLHZhbHVlOmZ1bmN0aW9uKHQsZSxuLG8pe3JldHVybiB0aGlzLl9hZGRQb3B1cCh0LFwiY29uZmlybVwiLG8sZSxuKX19LHtrZXk6XCJhc3luY0Jsb2NrXCIsdmFsdWU6ZnVuY3Rpb24odCxlLG4sbyxpKXt2YXIgcj10aGlzLl9hZGRQb3B1cChvLFwiYXN5bmMtYmxvY2tcIixpKTtyZXR1cm4gdGhpcy5fYWZ0ZXJBc3luYyh0LGUsbixpLHIpfX0se2tleTpcIm1vZGFsXCIsdmFsdWU6ZnVuY3Rpb24odCxlLG4pe3JldHVybiB0aGlzLl9hZGRQb3B1cCh0LGUsbil9fSx7a2V5OlwiY2xvc2VUb2FzdHNcIix2YWx1ZTpmdW5jdGlvbigpe2Zvcih2YXIgdD10aGlzLmNvbnRhaW5lcjt0LmZpcnN0Q2hpbGQ7KXQucmVtb3ZlQ2hpbGQodC5maXJzdENoaWxkKX19LHtrZXk6XCJfYWRkUG9wdXBcIix2YWx1ZTpmdW5jdGlvbih0LGUsbixvLGkpe3JldHVybiBuZXcgUyh0LGUsdGhpcy5vcHRpb25zLm92ZXJyaWRlKG4pLG8saSl9fSx7a2V5OlwiX2FkZFRvYXN0XCIsdmFsdWU6ZnVuY3Rpb24odCxlLG4sbyl7bj10aGlzLm9wdGlvbnMub3ZlcnJpZGUobik7dmFyIGk9bmV3IGcodCxlLG4sdGhpcy5jb250YWluZXIpO3JldHVybiBvP28gaW5zdGFuY2VvZiBTP28uZGVsZXRlKCkudGhlbigoZnVuY3Rpb24oKXtyZXR1cm4gaS5pbnNlcnQoKX0pKTpvLnJlcGxhY2UoaSk6aS5pbnNlcnQoKX19LHtrZXk6XCJfYWZ0ZXJBc3luY1wiLHZhbHVlOmZ1bmN0aW9uKHQsZSxuLG8saSl7cmV0dXJuIHQudGhlbih0aGlzLl9yZXNwb25zZUhhbmRsZXIoZSxcInN1Y2Nlc3NcIixvLGkpLHRoaXMuX3Jlc3BvbnNlSGFuZGxlcihuLFwiYWxlcnRcIixvLGkpKX19LHtrZXk6XCJfcmVzcG9uc2VIYW5kbGVyXCIsdmFsdWU6ZnVuY3Rpb24odCxlLG4sbyl7dmFyIGk9dGhpcztyZXR1cm4gZnVuY3Rpb24ocil7c3dpdGNoKGoodCkpe2Nhc2VcInVuZGVmaW5lZFwiOmNhc2VcInN0cmluZ1wiOnZhciBhPVwiYWxlcnRcIj09PWU/dHx8cjp0O2kuX2FkZFRvYXN0KGEsZSxuLG8pO2JyZWFrO2RlZmF1bHQ6by5kZWxldGUoKS50aGVuKChmdW5jdGlvbigpe3QmJnQocil9KSl9fX19LHtrZXk6XCJfY3JlYXRlQ29udGFpbmVyXCIsdmFsdWU6ZnVuY3Rpb24oKXtyZXR1cm4gbmV3IHAoZG9jdW1lbnQuYm9keSxjLmlkcy5jb250YWluZXIsXCJhd24tXCIuY29uY2F0KHRoaXMub3B0aW9ucy5wb3NpdGlvbikpLmluc2VydCgpLmVsfX0se2tleTpcImNvbnRhaW5lclwiLGdldDpmdW5jdGlvbigpe3JldHVybiBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChjLmlkcy5jb250YWluZXIpfHx0aGlzLl9jcmVhdGVDb250YWluZXIoKX19XSkmJngoZS5wcm90b3R5cGUsbiksbyYmeChlLG8pLHR9KCl9XSl9KSk7IiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2Nzc1dpdGhNYXBwaW5nVG9TdHJpbmcuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiQGtleWZyYW1lcyBhd24tZmFkZS1pbnswJXtvcGFjaXR5OjB9dG97b3BhY2l0eToxfX1Aa2V5ZnJhbWVzIGF3bi1mYWRlLW91dHswJXtvcGFjaXR5OjF9dG97b3BhY2l0eTowfX1Aa2V5ZnJhbWVzIGF3bi1zbGlkZS1yaWdodHswJXtvcGFjaXR5OjA7bGVmdDoxMDAlfXRve29wYWNpdHk6MTtsZWZ0OjB9fUBrZXlmcmFtZXMgYXduLXNsaWRlLWxlZnR7MCV7b3BhY2l0eTowO3JpZ2h0OjEwMCV9dG97b3BhY2l0eToxO3JpZ2h0OjB9fUBrZXlmcmFtZXMgYXduLWJhcnswJXtyaWdodDoxMDAlfXRve3JpZ2h0OjB9fS5hd24tcG9wdXAtbG9hZGluZy1kb3RzLC5hd24tcG9wdXAtbG9hZGluZy1kb3RzOmFmdGVyLC5hd24tcG9wdXAtbG9hZGluZy1kb3RzOmJlZm9yZXtib3JkZXItcmFkaXVzOjUwJTt3aWR0aDo2cHg7aGVpZ2h0OjZweDthbmltYXRpb24tZmlsbC1tb2RlOmJvdGg7YmFja2dyb3VuZDojZmZmO2FuaW1hdGlvbjphd24tbG9hZGluZy1kb3RzIDFzIGVhc2UtaW4tb3V0IGluZmluaXRlfS5hd24tcG9wdXAtbG9hZGluZy1kb3Rze3Bvc2l0aW9uOnJlbGF0aXZlO21hcmdpbi1sZWZ0OjI0cHg7ZGlzcGxheTppbmxpbmUtYmxvY2s7Y29sb3I6I2ZmZjthbmltYXRpb24tZGVsYXk6LS4xNnN9LmF3bi1wb3B1cC1sb2FkaW5nLWRvdHM6YWZ0ZXIsLmF3bi1wb3B1cC1sb2FkaW5nLWRvdHM6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXCI7cG9zaXRpb246YWJzb2x1dGU7dG9wOjB9LmF3bi1wb3B1cC1sb2FkaW5nLWRvdHM6YmVmb3Jle2xlZnQ6LTE2cHg7YW5pbWF0aW9uLWRlbGF5Oi0uMzJzfS5hd24tcG9wdXAtbG9hZGluZy1kb3RzOmFmdGVye2xlZnQ6MTZweH1Aa2V5ZnJhbWVzIGF3bi1sb2FkaW5nLWRvdHN7MCUsODAlLHRve2JveC1zaGFkb3c6MCAwIDAgMH00MCV7Ym94LXNoYWRvdzowIDAgMCAycHh9fSNhd24tcG9wdXAtd3JhcHBlcntwb3NpdGlvbjpmaXhlZDtsZWZ0OjA7cmlnaHQ6MDtib3R0b206MDt0b3A6MDtkaXNwbGF5OmZsZXg7YWxpZ24taXRlbXM6Y2VudGVyO2p1c3RpZnktY29udGVudDpjZW50ZXI7YmFja2dyb3VuZDpyZ2JhKDAsMCwwLC43KTt6LWluZGV4Ojk5OTk5O29wYWNpdHk6MDthbmltYXRpb24tbmFtZTphd24tZmFkZS1pbjthbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOmVhc2Utb3V0O2FuaW1hdGlvbi1maWxsLW1vZGU6Ym90aH0jYXduLXBvcHVwLXdyYXBwZXIuYXduLWhpZGluZ3thbmltYXRpb24tbmFtZTphd24tZmFkZS1vdXR9I2F3bi1wb3B1cC13cmFwcGVyIC5hd24tcG9wdXAtYm9keXtwb3NpdGlvbjpyZWxhdGl2ZTtib3JkZXItcmFkaXVzOjZweDt3b3JkLWJyZWFrOmJyZWFrLXdvcmQ7YmFja2dyb3VuZDojZmZmO3BhZGRpbmc6MjRweDttaW4td2lkdGg6MzIwcHg7Zm9udC1zaXplOjE0cHg7bWF4LXdpZHRoOjUwMHB4fSNhd24tcG9wdXAtd3JhcHBlciAuYXduLXBvcHVwLWJvZHkuYXduLXBvcHVwLWNvbmZpcm17ZGlzcGxheTpmbGV4O2ZsZXgtZGlyZWN0aW9uOmNvbHVtbjthbGlnbi1pdGVtczpjZW50ZXJ9I2F3bi1wb3B1cC13cmFwcGVyIC5hd24tcG9wdXAtYm9keS5hd24tcG9wdXAtY29uZmlybSAuZmF7Zm9udC1zaXplOjQ0cHg7Y29sb3I6I2MyNjcwMH0jYXduLXBvcHVwLXdyYXBwZXIgLmF3bi1wb3B1cC1ib2R5LmF3bi1wb3B1cC1hc3luYy1ibG9ja3tiYWNrZ3JvdW5kOnRyYW5zcGFyZW50O2ZvbnQtc2l6ZTozMnB4O2ZvbnQtd2VpZ2h0OjcwMDtjb2xvcjojZmZmO3RleHQtYWxpZ246Y2VudGVyfSNhd24tcG9wdXAtd3JhcHBlciAuYXduLXBvcHVwLXRpdGxle2ZvbnQtc2l6ZToxNHB4O2ZvbnQtd2VpZ2h0OjcwMDt0ZXh0LXRyYW5zZm9ybTp1cHBlcmNhc2U7bWFyZ2luLXRvcDo4cHh9I2F3bi1wb3B1cC13cmFwcGVyIC5hd24tYnV0dG9uc3t3aWR0aDoxMDAlO2Rpc3BsYXk6ZmxleDtqdXN0aWZ5LWNvbnRlbnQ6c3BhY2UtYmV0d2VlbjttYXJnaW4tdG9wOjI0cHh9I2F3bi1wb3B1cC13cmFwcGVyIC5hd24tYnV0dG9ucyAuYXduLWJ0bntib3JkZXItcmFkaXVzOjRweDtib3JkZXI6MDtmb250LXdlaWdodDo3MDA7dHJhbnNpdGlvbjpiYWNrZ3JvdW5kIC4ycyBsaW5lYXI7Zm9udC1zaXplOjE0cHg7d2lkdGg6NDUlO2xpbmUtaGVpZ2h0OjMycHg7Y29sb3I6I2ZmZn0jYXduLXBvcHVwLXdyYXBwZXIgLmF3bi1idXR0b25zLTEgLmF3bi1idG57d2lkdGg6MTAwJX0jYXduLXBvcHVwLXdyYXBwZXIgLmF3bi1idXR0b25zIC5hd24tYnRuLXN1Y2Nlc3N7YmFja2dyb3VuZDojNDA4NzFkfSNhd24tcG9wdXAtd3JhcHBlciAuYXduLWJ1dHRvbnMgLmF3bi1idG4tc3VjY2Vzczpob3ZlcntiYWNrZ3JvdW5kOiMzNjcyMTh9I2F3bi1wb3B1cC13cmFwcGVyIC5hd24tYnV0dG9ucyAuYXduLWJ0bi1jYW5jZWx7YmFja2dyb3VuZDojMWM3NmE2fSNhd24tcG9wdXAtd3JhcHBlciAuYXduLWJ1dHRvbnMgLmF3bi1idG4tY2FuY2VsOmhvdmVye2JhY2tncm91bmQ6IzE4NjY5MH0jYXduLXRvYXN0LWNvbnRhaW5lcntwb3NpdGlvbjpmaXhlZDt6LWluZGV4Ojk5OTk4O2JvdHRvbToyNHB4O3JpZ2h0OjI0cHg7Ym94LXNpemluZzpib3JkZXItYm94fSNhd24tdG9hc3QtY29udGFpbmVyLmF3bi10b3AtbGVmdCwjYXduLXRvYXN0LWNvbnRhaW5lci5hd24tdG9wLXJpZ2h0e3RvcDoyNHB4O2JvdHRvbTphdXRvfSNhd24tdG9hc3QtY29udGFpbmVyLmF3bi10b3AtbGVmdCAuYXduLXRvYXN0OmZpcnN0LWNoaWxkLCNhd24tdG9hc3QtY29udGFpbmVyLmF3bi10b3AtcmlnaHQgLmF3bi10b2FzdDpmaXJzdC1jaGlsZHttYXJnaW4tdG9wOjE2cHh9I2F3bi10b2FzdC1jb250YWluZXIuYXduLWJvdHRvbS1sZWZ0LCNhd24tdG9hc3QtY29udGFpbmVyLmF3bi10b3AtbGVmdHtsZWZ0OjI0cHg7cmlnaHQ6YXV0b30jYXduLXRvYXN0LWNvbnRhaW5lci5hd24tYm90dG9tLWxlZnQgLmF3bi10b2FzdCwjYXduLXRvYXN0LWNvbnRhaW5lci5hd24tdG9wLWxlZnQgLmF3bi10b2FzdHtyaWdodDoxMDAlO2FuaW1hdGlvbi1uYW1lOmF3bi1zbGlkZS1sZWZ0fSNhd24tdG9hc3QtY29udGFpbmVyLmF3bi1ib3R0b20tbGVmdCAuYXduLXRvYXN0LmF3bi1oaWRpbmcsI2F3bi10b2FzdC1jb250YWluZXIuYXduLXRvcC1sZWZ0IC5hd24tdG9hc3QuYXduLWhpZGluZ3tyaWdodDowfSNhd24tdG9hc3QtY29udGFpbmVyLmF3bi1ib3R0b20tcmlnaHQgLmF3bi10b2FzdCwjYXduLXRvYXN0LWNvbnRhaW5lci5hd24tdG9wLXJpZ2h0IC5hd24tdG9hc3R7bGVmdDoxMDAlO2FuaW1hdGlvbi1uYW1lOmF3bi1zbGlkZS1yaWdodH0jYXduLXRvYXN0LWNvbnRhaW5lci5hd24tYm90dG9tLXJpZ2h0IC5hd24tdG9hc3QuYXduLWhpZGluZywjYXduLXRvYXN0LWNvbnRhaW5lci5hd24tdG9wLXJpZ2h0IC5hd24tdG9hc3QuYXduLWhpZGluZ3tsZWZ0OjB9LmF3bi10b2FzdHtwb3NpdGlvbjpyZWxhdGl2ZTtjdXJzb3I6cG9pbnRlcjtvdmVyZmxvdzpoaWRkZW47b3BhY2l0eTowO3dpZHRoOjMyMHB4O2JhY2tncm91bmQ6I2ViZWJlYjttYXJnaW4tdG9wOjE2cHg7Ym9yZGVyLXJhZGl1czo2cHg7Y29sb3I6Z3JleTtmb250LXNpemU6MTRweDthbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOmxpbmVhcjthbmltYXRpb24tZmlsbC1tb2RlOmJvdGh9LmF3bi10b2FzdC1jb250ZW50e3dvcmQtYnJlYWs6YnJlYWstd29yZH0uYXduLXRvYXN0LWxhYmVse2Rpc3BsYXk6YmxvY2s7dGV4dC10cmFuc2Zvcm06dXBwZXJjYXNlO2NvbG9yOmdyZXk7Zm9udC1zaXplOjE4cHh9LmF3bi10b2FzdC1pY29ue3Bvc2l0aW9uOmFic29sdXRlO3JpZ2h0OjE2cHg7dG9wOjZweDtib3R0b206MDtkaXNwbGF5OmZsZXg7YWxpZ24taXRlbXM6Y2VudGVyO2p1c3RpZnktY29udGVudDpmbGV4LWVuZH0uYXduLXRvYXN0LWljb24gLmZhe2ZvbnQtc2l6ZTo0NHB4O2NvbG9yOmdyZXl9LmF3bi10b2FzdC13cmFwcGVye3BhZGRpbmc6MjJweCA4OHB4IDE2cHggMTZweDtib3JkZXI6MnB4IHNvbGlkICNkMWQxZDE7Ym9yZGVyLXJhZGl1czo2cHh9LmF3bi10b2FzdC1wcm9ncmVzcy1iYXJ7cG9zaXRpb246YWJzb2x1dGU7dG9wOjA7bGVmdDowO3JpZ2h0OjA7aGVpZ2h0OjZweH0uYXduLXRvYXN0LXByb2dyZXNzLWJhcjphZnRlcntjb250ZW50OlxcXCIgXFxcIjtiYWNrZ3JvdW5kOmdyZXk7cG9zaXRpb246YWJzb2x1dGU7d2lkdGg6MTAwJTtyaWdodDoxMDAlO3RvcDowO2hlaWdodDo2cHg7YW5pbWF0aW9uLW5hbWU6YXduLWJhcjthbmltYXRpb24tZHVyYXRpb246aW5oZXJpdDthbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOmxpbmVhcjthbmltYXRpb24tZmlsbC1tb2RlOmJvdGh9LmF3bi10b2FzdC5hd24tdG9hc3QtcHJvZ3Jlc3MtYmFyLXBhdXNlZCAuYXduLXRvYXN0LXByb2dyZXNzLWJhcjphZnRlcnthbmltYXRpb24tcGxheS1zdGF0ZTpwYXVzZWR9LmF3bi10b2FzdC5hd24taGlkaW5ne2FuaW1hdGlvbi1uYW1lOmF3bi1mYWRlLW91dCFpbXBvcnRhbnR9LmF3bi10b2FzdC5hd24tdG9hc3Qtc3VjY2Vzc3tiYWNrZ3JvdW5kOiNkZmY4ZDM7Y29sb3I6IzQwODcxZH0uYXduLXRvYXN0LmF3bi10b2FzdC1zdWNjZXNzIC5hd24tdG9hc3Qtd3JhcHBlcntib3JkZXItY29sb3I6I2E3ZDU5MH0uYXduLXRvYXN0LmF3bi10b2FzdC1zdWNjZXNzIC5mYSwuYXduLXRvYXN0LmF3bi10b2FzdC1zdWNjZXNzIGJ7Y29sb3I6IzQwODcxZH0uYXduLXRvYXN0LmF3bi10b2FzdC1zdWNjZXNzIC5hd24tdG9hc3QtcHJvZ3Jlc3MtYmFyOmFmdGVye2JhY2tncm91bmQ6IzQwODcxZH0uYXduLXRvYXN0LmF3bi10b2FzdC1pbmZve2JhY2tncm91bmQ6I2QzZWJmODtjb2xvcjojMWM3NmE2fS5hd24tdG9hc3QuYXduLXRvYXN0LWluZm8gLmF3bi10b2FzdC13cmFwcGVye2JvcmRlci1jb2xvcjojOWZkM2VmfS5hd24tdG9hc3QuYXduLXRvYXN0LWluZm8gLmZhLC5hd24tdG9hc3QuYXduLXRvYXN0LWluZm8gYntjb2xvcjojMWM3NmE2fS5hd24tdG9hc3QuYXduLXRvYXN0LWluZm8gLmF3bi10b2FzdC1wcm9ncmVzcy1iYXI6YWZ0ZXJ7YmFja2dyb3VuZDojMWM3NmE2fS5hd24tdG9hc3QuYXduLXRvYXN0LWFsZXJ0e2JhY2tncm91bmQ6I2Y4ZDVkMztjb2xvcjojYTkyMDE5fS5hd24tdG9hc3QuYXduLXRvYXN0LWFsZXJ0IC5hd24tdG9hc3Qtd3JhcHBlcntib3JkZXItY29sb3I6I2YwYTI5ZH0uYXduLXRvYXN0LmF3bi10b2FzdC1hbGVydCAuZmEsLmF3bi10b2FzdC5hd24tdG9hc3QtYWxlcnQgYntjb2xvcjojYTkyMDE5fS5hd24tdG9hc3QuYXduLXRvYXN0LWFsZXJ0IC5hd24tdG9hc3QtcHJvZ3Jlc3MtYmFyOmFmdGVye2JhY2tncm91bmQ6I2E5MjAxOX0uYXduLXRvYXN0LmF3bi10b2FzdC13YXJuaW5ne2JhY2tncm91bmQ6I2ZmZTdjYztjb2xvcjojYzI2NzAwfS5hd24tdG9hc3QuYXduLXRvYXN0LXdhcm5pbmcgLmF3bi10b2FzdC13cmFwcGVye2JvcmRlci1jb2xvcjojZmZjNDgwfS5hd24tdG9hc3QuYXduLXRvYXN0LXdhcm5pbmcgLmZhLC5hd24tdG9hc3QuYXduLXRvYXN0LXdhcm5pbmcgYntjb2xvcjojYzI2NzAwfS5hd24tdG9hc3QuYXduLXRvYXN0LXdhcm5pbmcgLmF3bi10b2FzdC1wcm9ncmVzcy1iYXI6YWZ0ZXJ7YmFja2dyb3VuZDojYzI2NzAwfVtjbGFzc149YXduLV17Ym94LXNpemluZzpib3JkZXItYm94fVwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL25vZGVfbW9kdWxlcy9hd2Vzb21lLW5vdGlmaWNhdGlvbnMvZGlzdC9zdHlsZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUEsdUJBQXVCLEdBQUcsU0FB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Q0FBQyxPQUFPLENBQUMsVUFBVSxDQUFDLDhCQUE4QixXQUFXLENBQUMsZUFBZSxDQUFDLGlCQUFpQixDQUFDLFVBQVUsQ0FBQyxVQUFVLENBQUMsS0FBSyxDQUFDLFVBQVUsQ0FBQyxzQkFBc0IsQ0FBQywwQkFBMEIsQ0FBQyxnQ0FBZ0MsQ0FBQyx3QkFBd0IsQ0FBQyx1RUFBdUUsMkJBQTJCLENBQUMsc0JBQXNCLHFDQUFxQyxDQUFDLDZCQUE2QixrQkFBa0IsQ0FBQyxhQUFhLENBQUMsZ0RBQWdELG9CQUFvQixDQUFDLGdFQUFnRSxhQUFhLENBQUMsMkRBQTJELGtCQUFrQixDQUFDLDBCQUEwQixrQkFBa0IsQ0FBQyxhQUFhLENBQUMsNkNBQTZDLG9CQUFvQixDQUFDLDBEQUEwRCxhQUFhLENBQUMsd0RBQXdELGtCQUFrQixDQUFDLDJCQUEyQixrQkFBa0IsQ0FBQyxhQUFhLENBQUMsOENBQThDLG9CQUFvQixDQUFDLDREQUE0RCxhQUFhLENBQUMseURBQXlELGtCQUFrQixDQUFDLDZCQUE2QixrQkFBa0IsQ0FBQyxhQUFhLENBQUMsZ0RBQWdELG9CQUFvQixDQUFDLGdFQUFnRSxhQUFhLENBQUMsMkRBQTJELGtCQUFrQixDQUFDLGNBQWMscUJBQXFCXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIkBrZXlmcmFtZXMgYXduLWZhZGUtaW57MCV7b3BhY2l0eTowfXRve29wYWNpdHk6MX19QGtleWZyYW1lcyBhd24tZmFkZS1vdXR7MCV7b3BhY2l0eToxfXRve29wYWNpdHk6MH19QGtleWZyYW1lcyBhd24tc2xpZGUtcmlnaHR7MCV7b3BhY2l0eTowO2xlZnQ6MTAwJX10b3tvcGFjaXR5OjE7bGVmdDowfX1Aa2V5ZnJhbWVzIGF3bi1zbGlkZS1sZWZ0ezAle29wYWNpdHk6MDtyaWdodDoxMDAlfXRve29wYWNpdHk6MTtyaWdodDowfX1Aa2V5ZnJhbWVzIGF3bi1iYXJ7MCV7cmlnaHQ6MTAwJX10b3tyaWdodDowfX0uYXduLXBvcHVwLWxvYWRpbmctZG90cywuYXduLXBvcHVwLWxvYWRpbmctZG90czphZnRlciwuYXduLXBvcHVwLWxvYWRpbmctZG90czpiZWZvcmV7Ym9yZGVyLXJhZGl1czo1MCU7d2lkdGg6NnB4O2hlaWdodDo2cHg7YW5pbWF0aW9uLWZpbGwtbW9kZTpib3RoO2JhY2tncm91bmQ6I2ZmZjthbmltYXRpb246YXduLWxvYWRpbmctZG90cyAxcyBlYXNlLWluLW91dCBpbmZpbml0ZX0uYXduLXBvcHVwLWxvYWRpbmctZG90c3twb3NpdGlvbjpyZWxhdGl2ZTttYXJnaW4tbGVmdDoyNHB4O2Rpc3BsYXk6aW5saW5lLWJsb2NrO2NvbG9yOiNmZmY7YW5pbWF0aW9uLWRlbGF5Oi0uMTZzfS5hd24tcG9wdXAtbG9hZGluZy1kb3RzOmFmdGVyLC5hd24tcG9wdXAtbG9hZGluZy1kb3RzOmJlZm9yZXtjb250ZW50OlxcXCJcXFwiO3Bvc2l0aW9uOmFic29sdXRlO3RvcDowfS5hd24tcG9wdXAtbG9hZGluZy1kb3RzOmJlZm9yZXtsZWZ0Oi0xNnB4O2FuaW1hdGlvbi1kZWxheTotLjMyc30uYXduLXBvcHVwLWxvYWRpbmctZG90czphZnRlcntsZWZ0OjE2cHh9QGtleWZyYW1lcyBhd24tbG9hZGluZy1kb3RzezAlLDgwJSx0b3tib3gtc2hhZG93OjAgMCAwIDB9NDAle2JveC1zaGFkb3c6MCAwIDAgMnB4fX0jYXduLXBvcHVwLXdyYXBwZXJ7cG9zaXRpb246Zml4ZWQ7bGVmdDowO3JpZ2h0OjA7Ym90dG9tOjA7dG9wOjA7ZGlzcGxheTpmbGV4O2FsaWduLWl0ZW1zOmNlbnRlcjtqdXN0aWZ5LWNvbnRlbnQ6Y2VudGVyO2JhY2tncm91bmQ6cmdiYSgwLDAsMCwuNyk7ei1pbmRleDo5OTk5OTtvcGFjaXR5OjA7YW5pbWF0aW9uLW5hbWU6YXduLWZhZGUtaW47YW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjplYXNlLW91dDthbmltYXRpb24tZmlsbC1tb2RlOmJvdGh9I2F3bi1wb3B1cC13cmFwcGVyLmF3bi1oaWRpbmd7YW5pbWF0aW9uLW5hbWU6YXduLWZhZGUtb3V0fSNhd24tcG9wdXAtd3JhcHBlciAuYXduLXBvcHVwLWJvZHl7cG9zaXRpb246cmVsYXRpdmU7Ym9yZGVyLXJhZGl1czo2cHg7d29yZC1icmVhazpicmVhay13b3JkO2JhY2tncm91bmQ6I2ZmZjtwYWRkaW5nOjI0cHg7bWluLXdpZHRoOjMyMHB4O2ZvbnQtc2l6ZToxNHB4O21heC13aWR0aDo1MDBweH0jYXduLXBvcHVwLXdyYXBwZXIgLmF3bi1wb3B1cC1ib2R5LmF3bi1wb3B1cC1jb25maXJte2Rpc3BsYXk6ZmxleDtmbGV4LWRpcmVjdGlvbjpjb2x1bW47YWxpZ24taXRlbXM6Y2VudGVyfSNhd24tcG9wdXAtd3JhcHBlciAuYXduLXBvcHVwLWJvZHkuYXduLXBvcHVwLWNvbmZpcm0gLmZhe2ZvbnQtc2l6ZTo0NHB4O2NvbG9yOiNjMjY3MDB9I2F3bi1wb3B1cC13cmFwcGVyIC5hd24tcG9wdXAtYm9keS5hd24tcG9wdXAtYXN5bmMtYmxvY2t7YmFja2dyb3VuZDp0cmFuc3BhcmVudDtmb250LXNpemU6MzJweDtmb250LXdlaWdodDo3MDA7Y29sb3I6I2ZmZjt0ZXh0LWFsaWduOmNlbnRlcn0jYXduLXBvcHVwLXdyYXBwZXIgLmF3bi1wb3B1cC10aXRsZXtmb250LXNpemU6MTRweDtmb250LXdlaWdodDo3MDA7dGV4dC10cmFuc2Zvcm06dXBwZXJjYXNlO21hcmdpbi10b3A6OHB4fSNhd24tcG9wdXAtd3JhcHBlciAuYXduLWJ1dHRvbnN7d2lkdGg6MTAwJTtkaXNwbGF5OmZsZXg7anVzdGlmeS1jb250ZW50OnNwYWNlLWJldHdlZW47bWFyZ2luLXRvcDoyNHB4fSNhd24tcG9wdXAtd3JhcHBlciAuYXduLWJ1dHRvbnMgLmF3bi1idG57Ym9yZGVyLXJhZGl1czo0cHg7Ym9yZGVyOjA7Zm9udC13ZWlnaHQ6NzAwO3RyYW5zaXRpb246YmFja2dyb3VuZCAuMnMgbGluZWFyO2ZvbnQtc2l6ZToxNHB4O3dpZHRoOjQ1JTtsaW5lLWhlaWdodDozMnB4O2NvbG9yOiNmZmZ9I2F3bi1wb3B1cC13cmFwcGVyIC5hd24tYnV0dG9ucy0xIC5hd24tYnRue3dpZHRoOjEwMCV9I2F3bi1wb3B1cC13cmFwcGVyIC5hd24tYnV0dG9ucyAuYXduLWJ0bi1zdWNjZXNze2JhY2tncm91bmQ6IzQwODcxZH0jYXduLXBvcHVwLXdyYXBwZXIgLmF3bi1idXR0b25zIC5hd24tYnRuLXN1Y2Nlc3M6aG92ZXJ7YmFja2dyb3VuZDojMzY3MjE4fSNhd24tcG9wdXAtd3JhcHBlciAuYXduLWJ1dHRvbnMgLmF3bi1idG4tY2FuY2Vse2JhY2tncm91bmQ6IzFjNzZhNn0jYXduLXBvcHVwLXdyYXBwZXIgLmF3bi1idXR0b25zIC5hd24tYnRuLWNhbmNlbDpob3ZlcntiYWNrZ3JvdW5kOiMxODY2OTB9I2F3bi10b2FzdC1jb250YWluZXJ7cG9zaXRpb246Zml4ZWQ7ei1pbmRleDo5OTk5ODtib3R0b206MjRweDtyaWdodDoyNHB4O2JveC1zaXppbmc6Ym9yZGVyLWJveH0jYXduLXRvYXN0LWNvbnRhaW5lci5hd24tdG9wLWxlZnQsI2F3bi10b2FzdC1jb250YWluZXIuYXduLXRvcC1yaWdodHt0b3A6MjRweDtib3R0b206YXV0b30jYXduLXRvYXN0LWNvbnRhaW5lci5hd24tdG9wLWxlZnQgLmF3bi10b2FzdDpmaXJzdC1jaGlsZCwjYXduLXRvYXN0LWNvbnRhaW5lci5hd24tdG9wLXJpZ2h0IC5hd24tdG9hc3Q6Zmlyc3QtY2hpbGR7bWFyZ2luLXRvcDoxNnB4fSNhd24tdG9hc3QtY29udGFpbmVyLmF3bi1ib3R0b20tbGVmdCwjYXduLXRvYXN0LWNvbnRhaW5lci5hd24tdG9wLWxlZnR7bGVmdDoyNHB4O3JpZ2h0OmF1dG99I2F3bi10b2FzdC1jb250YWluZXIuYXduLWJvdHRvbS1sZWZ0IC5hd24tdG9hc3QsI2F3bi10b2FzdC1jb250YWluZXIuYXduLXRvcC1sZWZ0IC5hd24tdG9hc3R7cmlnaHQ6MTAwJTthbmltYXRpb24tbmFtZTphd24tc2xpZGUtbGVmdH0jYXduLXRvYXN0LWNvbnRhaW5lci5hd24tYm90dG9tLWxlZnQgLmF3bi10b2FzdC5hd24taGlkaW5nLCNhd24tdG9hc3QtY29udGFpbmVyLmF3bi10b3AtbGVmdCAuYXduLXRvYXN0LmF3bi1oaWRpbmd7cmlnaHQ6MH0jYXduLXRvYXN0LWNvbnRhaW5lci5hd24tYm90dG9tLXJpZ2h0IC5hd24tdG9hc3QsI2F3bi10b2FzdC1jb250YWluZXIuYXduLXRvcC1yaWdodCAuYXduLXRvYXN0e2xlZnQ6MTAwJTthbmltYXRpb24tbmFtZTphd24tc2xpZGUtcmlnaHR9I2F3bi10b2FzdC1jb250YWluZXIuYXduLWJvdHRvbS1yaWdodCAuYXduLXRvYXN0LmF3bi1oaWRpbmcsI2F3bi10b2FzdC1jb250YWluZXIuYXduLXRvcC1yaWdodCAuYXduLXRvYXN0LmF3bi1oaWRpbmd7bGVmdDowfS5hd24tdG9hc3R7cG9zaXRpb246cmVsYXRpdmU7Y3Vyc29yOnBvaW50ZXI7b3ZlcmZsb3c6aGlkZGVuO29wYWNpdHk6MDt3aWR0aDozMjBweDtiYWNrZ3JvdW5kOiNlYmViZWI7bWFyZ2luLXRvcDoxNnB4O2JvcmRlci1yYWRpdXM6NnB4O2NvbG9yOmdyZXk7Zm9udC1zaXplOjE0cHg7YW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjpsaW5lYXI7YW5pbWF0aW9uLWZpbGwtbW9kZTpib3RofS5hd24tdG9hc3QtY29udGVudHt3b3JkLWJyZWFrOmJyZWFrLXdvcmR9LmF3bi10b2FzdC1sYWJlbHtkaXNwbGF5OmJsb2NrO3RleHQtdHJhbnNmb3JtOnVwcGVyY2FzZTtjb2xvcjpncmV5O2ZvbnQtc2l6ZToxOHB4fS5hd24tdG9hc3QtaWNvbntwb3NpdGlvbjphYnNvbHV0ZTtyaWdodDoxNnB4O3RvcDo2cHg7Ym90dG9tOjA7ZGlzcGxheTpmbGV4O2FsaWduLWl0ZW1zOmNlbnRlcjtqdXN0aWZ5LWNvbnRlbnQ6ZmxleC1lbmR9LmF3bi10b2FzdC1pY29uIC5mYXtmb250LXNpemU6NDRweDtjb2xvcjpncmV5fS5hd24tdG9hc3Qtd3JhcHBlcntwYWRkaW5nOjIycHggODhweCAxNnB4IDE2cHg7Ym9yZGVyOjJweCBzb2xpZCAjZDFkMWQxO2JvcmRlci1yYWRpdXM6NnB4fS5hd24tdG9hc3QtcHJvZ3Jlc3MtYmFye3Bvc2l0aW9uOmFic29sdXRlO3RvcDowO2xlZnQ6MDtyaWdodDowO2hlaWdodDo2cHh9LmF3bi10b2FzdC1wcm9ncmVzcy1iYXI6YWZ0ZXJ7Y29udGVudDpcXFwiIFxcXCI7YmFja2dyb3VuZDpncmV5O3Bvc2l0aW9uOmFic29sdXRlO3dpZHRoOjEwMCU7cmlnaHQ6MTAwJTt0b3A6MDtoZWlnaHQ6NnB4O2FuaW1hdGlvbi1uYW1lOmF3bi1iYXI7YW5pbWF0aW9uLWR1cmF0aW9uOmluaGVyaXQ7YW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjpsaW5lYXI7YW5pbWF0aW9uLWZpbGwtbW9kZTpib3RofS5hd24tdG9hc3QuYXduLXRvYXN0LXByb2dyZXNzLWJhci1wYXVzZWQgLmF3bi10b2FzdC1wcm9ncmVzcy1iYXI6YWZ0ZXJ7YW5pbWF0aW9uLXBsYXktc3RhdGU6cGF1c2VkfS5hd24tdG9hc3QuYXduLWhpZGluZ3thbmltYXRpb24tbmFtZTphd24tZmFkZS1vdXQhaW1wb3J0YW50fS5hd24tdG9hc3QuYXduLXRvYXN0LXN1Y2Nlc3N7YmFja2dyb3VuZDojZGZmOGQzO2NvbG9yOiM0MDg3MWR9LmF3bi10b2FzdC5hd24tdG9hc3Qtc3VjY2VzcyAuYXduLXRvYXN0LXdyYXBwZXJ7Ym9yZGVyLWNvbG9yOiNhN2Q1OTB9LmF3bi10b2FzdC5hd24tdG9hc3Qtc3VjY2VzcyAuZmEsLmF3bi10b2FzdC5hd24tdG9hc3Qtc3VjY2VzcyBie2NvbG9yOiM0MDg3MWR9LmF3bi10b2FzdC5hd24tdG9hc3Qtc3VjY2VzcyAuYXduLXRvYXN0LXByb2dyZXNzLWJhcjphZnRlcntiYWNrZ3JvdW5kOiM0MDg3MWR9LmF3bi10b2FzdC5hd24tdG9hc3QtaW5mb3tiYWNrZ3JvdW5kOiNkM2ViZjg7Y29sb3I6IzFjNzZhNn0uYXduLXRvYXN0LmF3bi10b2FzdC1pbmZvIC5hd24tdG9hc3Qtd3JhcHBlcntib3JkZXItY29sb3I6IzlmZDNlZn0uYXduLXRvYXN0LmF3bi10b2FzdC1pbmZvIC5mYSwuYXduLXRvYXN0LmF3bi10b2FzdC1pbmZvIGJ7Y29sb3I6IzFjNzZhNn0uYXduLXRvYXN0LmF3bi10b2FzdC1pbmZvIC5hd24tdG9hc3QtcHJvZ3Jlc3MtYmFyOmFmdGVye2JhY2tncm91bmQ6IzFjNzZhNn0uYXduLXRvYXN0LmF3bi10b2FzdC1hbGVydHtiYWNrZ3JvdW5kOiNmOGQ1ZDM7Y29sb3I6I2E5MjAxOX0uYXduLXRvYXN0LmF3bi10b2FzdC1hbGVydCAuYXduLXRvYXN0LXdyYXBwZXJ7Ym9yZGVyLWNvbG9yOiNmMGEyOWR9LmF3bi10b2FzdC5hd24tdG9hc3QtYWxlcnQgLmZhLC5hd24tdG9hc3QuYXduLXRvYXN0LWFsZXJ0IGJ7Y29sb3I6I2E5MjAxOX0uYXduLXRvYXN0LmF3bi10b2FzdC1hbGVydCAuYXduLXRvYXN0LXByb2dyZXNzLWJhcjphZnRlcntiYWNrZ3JvdW5kOiNhOTIwMTl9LmF3bi10b2FzdC5hd24tdG9hc3Qtd2FybmluZ3tiYWNrZ3JvdW5kOiNmZmU3Y2M7Y29sb3I6I2MyNjcwMH0uYXduLXRvYXN0LmF3bi10b2FzdC13YXJuaW5nIC5hd24tdG9hc3Qtd3JhcHBlcntib3JkZXItY29sb3I6I2ZmYzQ4MH0uYXduLXRvYXN0LmF3bi10b2FzdC13YXJuaW5nIC5mYSwuYXduLXRvYXN0LmF3bi10b2FzdC13YXJuaW5nIGJ7Y29sb3I6I2MyNjcwMH0uYXduLXRvYXN0LmF3bi10b2FzdC13YXJuaW5nIC5hd24tdG9hc3QtcHJvZ3Jlc3MtYmFyOmFmdGVye2JhY2tncm91bmQ6I2MyNjcwMH1bY2xhc3NePWF3bi1de2JveC1zaXppbmc6Ym9yZGVyLWJveH1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG4vLyBjc3MgYmFzZSBjb2RlLCBpbmplY3RlZCBieSB0aGUgY3NzLWxvYWRlclxuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGZ1bmMtbmFtZXNcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTsgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgcmV0dXJuIFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChjb250ZW50LCBcIn1cIik7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07IC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBmdW5jLW5hbWVzXG5cblxuICBsaXN0LmkgPSBmdW5jdGlvbiAobW9kdWxlcywgbWVkaWFRdWVyeSwgZGVkdXBlKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tcGFyYW0tcmVhc3NpZ25cbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIFwiXCJdXTtcbiAgICB9XG5cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuXG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBwcmVmZXItZGVzdHJ1Y3R1cmluZ1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2ldWzBdO1xuXG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IG1vZHVsZXMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19pXSk7XG5cbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tY29udGludWVcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIGlmIChtZWRpYVF1ZXJ5KSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYVF1ZXJ5O1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMl0gPSBcIlwiLmNvbmNhdChtZWRpYVF1ZXJ5LCBcIiBhbmQgXCIpLmNvbmNhdChpdGVtWzJdKTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxuZnVuY3Rpb24gX3NsaWNlZFRvQXJyYXkoYXJyLCBpKSB7IHJldHVybiBfYXJyYXlXaXRoSG9sZXMoYXJyKSB8fCBfaXRlcmFibGVUb0FycmF5TGltaXQoYXJyLCBpKSB8fCBfdW5zdXBwb3J0ZWRJdGVyYWJsZVRvQXJyYXkoYXJyLCBpKSB8fCBfbm9uSXRlcmFibGVSZXN0KCk7IH1cblxuZnVuY3Rpb24gX25vbkl0ZXJhYmxlUmVzdCgpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkludmFsaWQgYXR0ZW1wdCB0byBkZXN0cnVjdHVyZSBub24taXRlcmFibGUgaW5zdGFuY2UuXFxuSW4gb3JkZXIgdG8gYmUgaXRlcmFibGUsIG5vbi1hcnJheSBvYmplY3RzIG11c3QgaGF2ZSBhIFtTeW1ib2wuaXRlcmF0b3JdKCkgbWV0aG9kLlwiKTsgfVxuXG5mdW5jdGlvbiBfdW5zdXBwb3J0ZWRJdGVyYWJsZVRvQXJyYXkobywgbWluTGVuKSB7IGlmICghbykgcmV0dXJuOyBpZiAodHlwZW9mIG8gPT09IFwic3RyaW5nXCIpIHJldHVybiBfYXJyYXlMaWtlVG9BcnJheShvLCBtaW5MZW4pOyB2YXIgbiA9IE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChvKS5zbGljZSg4LCAtMSk7IGlmIChuID09PSBcIk9iamVjdFwiICYmIG8uY29uc3RydWN0b3IpIG4gPSBvLmNvbnN0cnVjdG9yLm5hbWU7IGlmIChuID09PSBcIk1hcFwiIHx8IG4gPT09IFwiU2V0XCIpIHJldHVybiBBcnJheS5mcm9tKG8pOyBpZiAobiA9PT0gXCJBcmd1bWVudHNcIiB8fCAvXig/OlVpfEkpbnQoPzo4fDE2fDMyKSg/OkNsYW1wZWQpP0FycmF5JC8udGVzdChuKSkgcmV0dXJuIF9hcnJheUxpa2VUb0FycmF5KG8sIG1pbkxlbik7IH1cblxuZnVuY3Rpb24gX2FycmF5TGlrZVRvQXJyYXkoYXJyLCBsZW4pIHsgaWYgKGxlbiA9PSBudWxsIHx8IGxlbiA+IGFyci5sZW5ndGgpIGxlbiA9IGFyci5sZW5ndGg7IGZvciAodmFyIGkgPSAwLCBhcnIyID0gbmV3IEFycmF5KGxlbik7IGkgPCBsZW47IGkrKykgeyBhcnIyW2ldID0gYXJyW2ldOyB9IHJldHVybiBhcnIyOyB9XG5cbmZ1bmN0aW9uIF9pdGVyYWJsZVRvQXJyYXlMaW1pdChhcnIsIGkpIHsgdmFyIF9pID0gYXJyID09IG51bGwgPyBudWxsIDogdHlwZW9mIFN5bWJvbCAhPT0gXCJ1bmRlZmluZWRcIiAmJiBhcnJbU3ltYm9sLml0ZXJhdG9yXSB8fCBhcnJbXCJAQGl0ZXJhdG9yXCJdOyBpZiAoX2kgPT0gbnVsbCkgcmV0dXJuOyB2YXIgX2FyciA9IFtdOyB2YXIgX24gPSB0cnVlOyB2YXIgX2QgPSBmYWxzZTsgdmFyIF9zLCBfZTsgdHJ5IHsgZm9yIChfaSA9IF9pLmNhbGwoYXJyKTsgIShfbiA9IChfcyA9IF9pLm5leHQoKSkuZG9uZSk7IF9uID0gdHJ1ZSkgeyBfYXJyLnB1c2goX3MudmFsdWUpOyBpZiAoaSAmJiBfYXJyLmxlbmd0aCA9PT0gaSkgYnJlYWs7IH0gfSBjYXRjaCAoZXJyKSB7IF9kID0gdHJ1ZTsgX2UgPSBlcnI7IH0gZmluYWxseSB7IHRyeSB7IGlmICghX24gJiYgX2lbXCJyZXR1cm5cIl0gIT0gbnVsbCkgX2lbXCJyZXR1cm5cIl0oKTsgfSBmaW5hbGx5IHsgaWYgKF9kKSB0aHJvdyBfZTsgfSB9IHJldHVybiBfYXJyOyB9XG5cbmZ1bmN0aW9uIF9hcnJheVdpdGhIb2xlcyhhcnIpIHsgaWYgKEFycmF5LmlzQXJyYXkoYXJyKSkgcmV0dXJuIGFycjsgfVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSkge1xuICB2YXIgX2l0ZW0gPSBfc2xpY2VkVG9BcnJheShpdGVtLCA0KSxcbiAgICAgIGNvbnRlbnQgPSBfaXRlbVsxXSxcbiAgICAgIGNzc01hcHBpbmcgPSBfaXRlbVszXTtcblxuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuXG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVuZGVmXG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICB2YXIgc291cmNlVVJMcyA9IGNzc01hcHBpbmcuc291cmNlcy5tYXAoZnVuY3Rpb24gKHNvdXJjZSkge1xuICAgICAgcmV0dXJuIFwiLyojIHNvdXJjZVVSTD1cIi5jb25jYXQoY3NzTWFwcGluZy5zb3VyY2VSb290IHx8IFwiXCIpLmNvbmNhdChzb3VyY2UsIFwiICovXCIpO1xuICAgIH0pO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KHNvdXJjZVVSTHMpLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cblxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uLy4uL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vLi4vc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vLi4vc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uLy4uL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vLi4vc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vLi4vc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vLi4vY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uLy4uL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRG9tID0gW107XG5cbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5Eb20ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5Eb21baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXVxuICAgIH07XG5cbiAgICBpZiAoaW5kZXggIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRvbVtpbmRleF0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5Eb21baW5kZXhdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgc3R5bGVzSW5Eb20ucHVzaCh7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IGFkZFN0eWxlKG9iaiwgb3B0aW9ucyksXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cblxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5cbmZ1bmN0aW9uIGFkZFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZVN0eWxlKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXApIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5Eb21baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG5cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG5cbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG5cbiAgICAgIGlmIChzdHlsZXNJbkRvbVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5Eb21bX2luZGV4XS51cGRhdGVyKCk7XG5cbiAgICAgICAgc3R5bGVzSW5Eb20uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpOyAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cblxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG5cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG5cbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG5cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBzdHlsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKHN0eWxlLCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChzdHlsZSk7XG4gIHJldHVybiBzdHlsZTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlKSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcblxuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZS5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGUsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gb2JqLmNzcztcbiAgdmFyIG1lZGlhID0gb2JqLm1lZGlhO1xuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcblxuICBpZiAobWVkaWEpIHtcbiAgICBzdHlsZS5zZXRBdHRyaWJ1dGUoXCJtZWRpYVwiLCBtZWRpYSk7XG4gIH0gZWxzZSB7XG4gICAgc3R5bGUucmVtb3ZlQXR0cmlidXRlKFwibWVkaWFcIik7XG4gIH1cblxuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH0gLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZSk7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZSkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlLnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBzdHlsZS5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlKTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIHZhciBzdHlsZSA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGUsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZSk7XG4gICAgfVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlKSB7XG4gIGlmIChzdHlsZS5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGUuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZS5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZS5yZW1vdmVDaGlsZChzdHlsZS5maXJzdENoaWxkKTtcbiAgICB9XG5cbiAgICBzdHlsZS5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImltcG9ydCAnc2hpbnknO1xuXG5leHBvcnQgY29uc3QgbWFrZUNhbGxiYWNrID0gKGlucHV0LCBucywgdmFsdWUpID0+IHtcblx0cmV0dXJuICgpID0+IHtcblx0XHRjb25zb2xlLmxvZyhgJHtuc31fJHtpbnB1dH1gKTtcblx0XHRTaGlueS5zZXRJbnB1dFZhbHVlKGAke25zfSR7aW5wdXR9YCwgdmFsdWUsIHtwcmlvcml0eTogJ2V2ZW50J30pO1xuXHR9XG59XG4iLCJtb2R1bGUuZXhwb3J0cyA9IFNoaW55OyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQgJ3NoaW55JztcbmltcG9ydCB7IG1ha2VDYWxsYmFjayB9IGZyb20gJy4vY2FsbGJhY2tzJztcbmltcG9ydCBBV04gZnJvbSAnYXdlc29tZS1ub3RpZmljYXRpb25zJztcbmltcG9ydCAnYXdlc29tZS1ub3RpZmljYXRpb25zL2Rpc3Qvc3R5bGUuY3NzJztcblxubGV0IG5vdGlmaWVyO1xuU2hpbnkuYWRkQ3VzdG9tTWVzc2FnZUhhbmRsZXIoJ2F3bi1ub3RpZnknLCAobXNnKSA9PiB7XG4gIGRpc3BhdGNoKG1zZyk7XG59KTtcblxuU2hpbnkuYWRkQ3VzdG9tTWVzc2FnZUhhbmRsZXIoJ2F3bi1tb2RhbCcsIChtc2cpID0+IHtcbiAgaW5pdCgpO1xuICBub3RpZmllci5tb2RhbChtc2cuY29udGVudCwgJ21vZGFsLWF3bicsIG1zZy5vcHRpb25zKTtcbn0pO1xuXG5TaGlueS5hZGRDdXN0b21NZXNzYWdlSGFuZGxlcignYXduLWFzaycsIChtc2cpID0+IHtcbiAgaW5pdCgpO1xuICBub3RpZmllci5jb25maXJtKFxuICAgIG1zZy5jb250ZW50LFxuICAgIG1ha2VDYWxsYmFjayhtc2cuaWQsIG1zZy5ucywgdHJ1ZSksXG4gICAgbWFrZUNhbGxiYWNrKG1zZy5pZCwgbXNnLm5zLCBmYWxzZSksXG4gICAgbXNnLm9wdGlvbnNcbiAgKVxufSk7XG5cblNoaW55LmFkZEN1c3RvbU1lc3NhZ2VIYW5kbGVyKCdhd24tZ2xvYmFscycsIChtc2cpID0+IHtcbiAgbm90aWZpZXIgPSBuZXcgQVdOKGdsb2JhbE9wdGlvbnMpO1xufSk7XG5cbmNvbnN0IGRpc3BhdGNoID0gKG1zZykgPT4ge1xuICBpbml0KCk7XG4gIHN3aXRjaChtc2cudHlwZSkge1xuICAgIGNhc2UgJ3dhcm5pbmcnOlxuICAgICAgbm90aWZpZXIud2FybmluZyhtc2cuY29udGVudCwgbXNnLm9wdGlvbnMpO1xuICAgICAgYnJlYWs7XG4gICAgY2FzZSAndGlwJzpcbiAgICAgIG5vdGlmaWVyLnRpcChtc2cuY29udGVudCwgbXNnLm9wdGlvbnMpO1xuICAgICAgYnJlYWs7XG4gICAgY2FzZSAnaW5mbyc6XG4gICAgICBub3RpZmllci5pbmZvKG1zZy5jb250ZW50LCBtc2cub3B0aW9ucyk7XG4gICAgICBicmVhaztcbiAgICBjYXNlICdzdWNjZXNzJzpcbiAgICAgIG5vdGlmaWVyLnN1Y2Nlc3MobXNnLmNvbnRlbnQsIG1zZy5vcHRpb25zKTtcbiAgICAgIGJyZWFrO1xuICAgIGNhc2UgJ2FsZXJ0JzpcbiAgICAgIG5vdGlmaWVyLmFsZXJ0KG1zZy5jb250ZW50LCBtc2cub3B0aW9ucyk7XG4gICAgICBicmVhaztcbiAgICBkZWZhdWx0OlxuICAgICAgbm90aWZpZXIuYWxlcnQobXNnLmNvbnRlbnQsIG1zZy5vcHRpb25zKTtcbiAgICAgIGJyZWFrO1xuICB9XG59XG5cbmNvbnN0IGluaXQgPSAoKSA9PiB7XG4gIGlmKG5vdGlmaWVyICE9IHVuZGVmaW5lZClcbiAgICByZXR1cm47XG4gIFxuICBub3RpZmllciA9IG5ldyBBV04oKTtcbn1cbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==