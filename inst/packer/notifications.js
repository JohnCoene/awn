!function(t,n){"object"==typeof exports&&"object"==typeof module?module.exports=n(require("Shiny")):"function"==typeof define&&define.amd?define(["Shiny"],n):"object"==typeof exports?exports.notifications=n(require("Shiny")):t.notifications=n(t.Shiny)}(self,(function(__WEBPACK_EXTERNAL_MODULE__541__){return(()=>{var __webpack_modules__={616:t=>{window,t.exports=function(t){var n={};function e(a){if(n[a])return n[a].exports;var o=n[a]={i:a,l:!1,exports:{}};return t[a].call(o.exports,o,o.exports,e),o.l=!0,o.exports}return e.m=t,e.c=n,e.d=function(t,n,a){e.o(t,n)||Object.defineProperty(t,n,{enumerable:!0,get:a})},e.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},e.t=function(t,n){if(1&n&&(t=e(t)),8&n)return t;if(4&n&&"object"==typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(e.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&n&&"string"!=typeof t)for(var o in t)e.d(a,o,function(n){return t[n]}.bind(null,o));return a},e.n=function(t){var n=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(n,"a",n),n},e.o=function(t,n){return Object.prototype.hasOwnProperty.call(t,n)},e.p="",e(e.s=0)}([function(t,n,e){"use strict";function a(t){return(a="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function o(t,n){for(var e=0;e<n.length;e++){var a=n[e];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(t,a.key,a)}}e.r(n);var r={maxNotifications:10,animationDuration:300,position:"bottom-right",labels:{tip:"Tip",info:"Info",success:"Success",warning:"Attention",alert:"Error",async:"Loading",confirm:"Confirmation required",confirmOk:"OK",confirmCancel:"Cancel"},icons:{tip:"question-circle",info:"info-circle",success:"check-circle",warning:"exclamation-circle",alert:"exclamation-triangle",async:"cog fa-spin",confirm:"exclamation-triangle",prefix:"<i class='fa fas fa-fw fa-",suffix:"'></i>",enabled:!0},replacements:{tip:null,info:null,success:null,warning:null,alert:null,async:null,"async-block":null,modal:null,confirm:null,general:{"<script>":"","<\/script>":""}},messages:{tip:"",info:"",success:"Action has been succeeded",warning:"",alert:"Action has been failed",confirm:"This action can't be undone. Continue?",async:"Please, wait...","async-block":"Loading"},formatError:function(t){if(t.response){if(!t.response.data)return"500 API Server Error";if(t.response.data.errors)return t.response.data.errors.map((function(t){return t.detail})).join("<br>");if(t.response.statusText)return"".concat(t.response.status," ").concat(t.response.statusText,": ").concat(t.response.data)}return t.message?t.message:t},durations:{global:5e3,success:null,info:null,tip:null,warning:null,alert:null},minDurations:{async:1e3,"async-block":1e3}},i=function(){function t(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:r;!function(t,n){if(!(t instanceof n))throw new TypeError("Cannot call a class as a function")}(this,t),Object.assign(this,this.defaultsDeep(e,n))}var n,e;return n=t,(e=[{key:"icon",value:function(t){return this.icons.enabled?"".concat(this.icons.prefix).concat(this.icons[t]).concat(this.icons.suffix):""}},{key:"label",value:function(t){return this.labels[t]}},{key:"duration",value:function(t){var n=this.durations[t];return null===n?this.durations.global:n}},{key:"toSecs",value:function(t){return"".concat(t/1e3,"s")}},{key:"applyReplacements",value:function(t,n){if(!t)return this.messages[n]||"";for(var e=0,a=["general",n];e<a.length;e++){var o=a[e];if(this.replacements[o])for(var r in this.replacements[o])t=t.replace(r,this.replacements[o][r])}return t}},{key:"override",value:function(n){return n?new t(n,this):this}},{key:"defaultsDeep",value:function(t,n){var e={};for(var o in t)n.hasOwnProperty(o)?e[o]="object"===a(t[o])&&null!==t[o]?this.defaultsDeep(t[o],n[o]):n[o]:e[o]=t[o];return e}}])&&o(n.prototype,e),t}(),s={popup:"".concat("awn","-popup"),toast:"".concat("awn","-toast"),btn:"".concat("awn","-btn"),confirm:"".concat("awn","-confirm")},c={prefix:s.toast,klass:{label:"".concat(s.toast,"-label"),content:"".concat(s.toast,"-content"),icon:"".concat(s.toast,"-icon"),progressBar:"".concat(s.toast,"-progress-bar"),progressBarPause:"".concat(s.toast,"-progress-bar-paused")},ids:{container:"".concat(s.toast,"-container")}},A={prefix:s.popup,klass:{buttons:"".concat("awn","-buttons"),button:s.btn,successBtn:"".concat(s.btn,"-success"),cancelBtn:"".concat(s.btn,"-cancel"),title:"".concat(s.popup,"-title"),body:"".concat(s.popup,"-body"),content:"".concat(s.popup,"-content"),dotAnimation:"".concat(s.popup,"-loading-dots")},ids:{wrapper:"".concat(s.popup,"-wrapper"),confirmOk:"".concat(s.confirm,"-ok"),confirmCancel:"".concat(s.confirm,"-cancel")}},p={klass:{hiding:"".concat("awn","-hiding")},lib:"awn"};function u(t,n){for(var e=0;e<n.length;e++){var a=n[e];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(t,a.key,a)}}var l=function(){function t(n,e,a,o,r){!function(t,n){if(!(t instanceof n))throw new TypeError("Cannot call a class as a function")}(this,t),this.newNode=document.createElement("div"),e&&(this.newNode.id=e),a&&(this.newNode.className=a),o&&(this.newNode.style.cssText=o),this.parent=n,this.options=r}var n,e;return n=t,(e=[{key:"beforeInsert",value:function(){}},{key:"afterInsert",value:function(){}},{key:"insert",value:function(){return this.beforeInsert(),this.el=this.parent.appendChild(this.newNode),this.afterInsert(),this}},{key:"replace",value:function(t){var n=this;if(this.getElement())return this.beforeDelete().then((function(){return n.updateType(t.type),n.parent.replaceChild(t.newNode,n.el),n.el=n.getElement(t.newNode),n.afterInsert(),n}))}},{key:"beforeDelete",value:function(){var t=this,n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:this.el,e=0;return this.start&&(e=this.options.minDurations[this.type]+this.start-Date.now())<0&&(e=0),new Promise((function(a){setTimeout((function(){n.classList.add(p.klass.hiding),setTimeout(a,t.options.animationDuration)}),e)}))}},{key:"delete",value:function(){var t=this,n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:this.el;return this.getElement(n)?this.beforeDelete(n).then((function(){n.remove(),t.afterDelete()})):null}},{key:"afterDelete",value:function(){}},{key:"getElement",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:this.el;return t?document.getElementById(t.id):null}},{key:"addEvent",value:function(t,n){this.el.addEventListener(t,n)}},{key:"toggleClass",value:function(t){this.el.classList.toggle(t)}},{key:"updateType",value:function(t){this.type=t,this.duration=this.options.duration(this.type)}}])&&u(n.prototype,e),t}();function f(t,n){for(var e=0;e<n.length;e++){var a=n[e];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(t,a.key,a)}}var d=function(){function t(n,e){!function(t,n){if(!(t instanceof n))throw new TypeError("Cannot call a class as a function")}(this,t),this.callback=n,this.remaining=e,this.resume()}var n,e;return n=t,(e=[{key:"pause",value:function(){this.paused=!0,window.clearTimeout(this.timerId),this.remaining-=new Date-this.start}},{key:"resume",value:function(){var t=this;this.paused=!1,this.start=new Date,window.clearTimeout(this.timerId),this.timerId=window.setTimeout((function(){window.clearTimeout(t.timerId),t.callback()}),this.remaining)}},{key:"toggle",value:function(){this.paused?this.resume():this.pause()}}])&&f(n.prototype,e),t}();function w(t){return(w="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function b(t,n){for(var e=0;e<n.length;e++){var a=n[e];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(t,a.key,a)}}function C(t){return(C=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function h(t,n){return(h=Object.setPrototypeOf||function(t,n){return t.__proto__=n,t})(t,n)}var m=function(t){function n(t,e,a,o){var r;return function(t,n){if(!(t instanceof n))throw new TypeError("Cannot call a class as a function")}(this,n),(r=function(t,n){return!n||"object"!==w(n)&&"function"!=typeof n?function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t):n}(this,C(n).call(this,o,"".concat(c.prefix,"-").concat(Math.floor(Date.now()-100*Math.random())),"".concat(c.prefix," ").concat(c.prefix,"-").concat(e),"animation-duration: ".concat(a.toSecs(a.animationDuration),";"),a))).updateType(e),r.setInnerHtml(t),r}var e,a;return function(t,n){if("function"!=typeof n&&null!==n)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(n&&n.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),n&&h(t,n)}(n,t),e=n,(a=[{key:"setInnerHtml",value:function(t){"alert"===this.type&&t&&(t=this.options.formatError(t)),t=this.options.applyReplacements(t,this.type),this.newNode.innerHTML='<div class="awn-toast-wrapper">'.concat(this.progressBar).concat(this.label,'<div class="').concat(c.klass.content,'">').concat(t,'</div><span class="').concat(c.klass.icon,'">').concat(this.options.icon(this.type),"</span></div>")}},{key:"beforeInsert",value:function(){var t=this;if(this.parent.childElementCount>=this.options.maxNotifications){var n=Array.from(this.parent.getElementsByClassName(c.prefix));this.delete(n.find((function(n){return!t.isDeleted(n)})))}}},{key:"afterInsert",value:function(){var t=this;if("async"==this.type)return this.start=Date.now();if(this.addEvent("click",(function(){return t.delete()})),!(this.duration<=0)){this.timer=new d((function(){return t.delete()}),this.duration);for(var n=0,e=["mouseenter","mouseleave"];n<e.length;n++){var a=e[n];this.addEvent(a,(function(){t.isDeleted()||(t.toggleClass(c.klass.progressBarPause),t.timer.toggle())}))}}}},{key:"isDeleted",value:function(){return(arguments.length>0&&void 0!==arguments[0]?arguments[0]:this.el).classList.contains(p.klass.hiding)}},{key:"progressBar",get:function(){return this.duration<=0||"async"===this.type?"":"<div class='".concat(c.klass.progressBar,"' style=\"animation-duration:").concat(this.options.toSecs(this.duration),';"></div>')}},{key:"label",get:function(){return'<b class="'.concat(c.klass.label,'">').concat(this.options.label(this.type),"</b>")}}])&&b(e.prototype,a),n}(l);function y(t){return(y="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function g(t,n){for(var e=0;e<n.length;e++){var a=n[e];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(t,a.key,a)}}function _(t,n){return!n||"object"!==y(n)&&"function"!=typeof n?function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t):n}function k(t){return(k=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function v(t,n){return(v=Object.setPrototypeOf||function(t,n){return t.__proto__=n,t})(t,n)}var B=function(t){function n(t){var e,a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"modal",o=arguments.length>2?arguments[2]:void 0,r=arguments.length>3?arguments[3]:void 0,i=arguments.length>4?arguments[4]:void 0;!function(t,n){if(!(t instanceof n))throw new TypeError("Cannot call a class as a function")}(this,n);var s="animation-duration: ".concat(o.toSecs(o.animationDuration),";");return(e=_(this,k(n).call(this,document.body,A.ids.wrapper,null,s,o)))[A.ids.confirmOk]=r,e[A.ids.confirmCancel]=i,e.className="".concat(A.prefix,"-").concat(a),["confirm","async-block","modal"].includes(a)||(a="modal"),e.updateType(a),e.setInnerHtml(t),e.insert(),e}var e,a;return function(t,n){if("function"!=typeof n&&null!==n)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(n&&n.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),n&&v(t,n)}(n,t),e=n,(a=[{key:"setInnerHtml",value:function(t){var n=this.options.applyReplacements(t,this.type);switch(this.type){case"confirm":var e=["<button class='".concat(A.klass.button," ").concat(A.klass.successBtn,"'id='").concat(A.ids.confirmOk,"'>").concat(this.options.labels.confirmOk,"</button>")];!1!==this[A.ids.confirmCancel]&&e.push("<button class='".concat(A.klass.button," ").concat(A.klass.cancelBtn,"'id='").concat(A.ids.confirmCancel,"'>").concat(this.options.labels.confirmCancel,"</button>")),n="".concat(this.options.icon(this.type),"<div class='").concat(A.klass.title,"'>").concat(this.options.label(this.type),'</div><div class="').concat(A.klass.content,'">').concat(n,"</div><div class='").concat(A.klass.buttons," ").concat(A.klass.buttons,"-").concat(e.length,"'>").concat(e.join(""),"</div>");break;case"async-block":n="".concat(n,'<div class="').concat(A.klass.dotAnimation,'"></div>')}this.newNode.innerHTML='<div class="'.concat(A.klass.body," ").concat(this.className,'">').concat(n,"</div>")}},{key:"keyupListener",value:function(t){if("async-block"===this.type)return t.preventDefault();switch(t.code){case"Escape":t.preventDefault(),this.delete();case"Tab":if(t.preventDefault(),"confirm"!==this.type||!1===this[A.ids.confirmCancel])return!0;var n=this.okBtn;t.shiftKey?document.activeElement.id==A.ids.confirmOk&&(n=this.cancelBtn):document.activeElement.id!==A.ids.confirmCancel&&(n=this.cancelBtn),n.focus()}}},{key:"afterInsert",value:function(){var t=this;switch(this.listener=function(n){return t.keyupListener(n)},window.addEventListener("keydown",this.listener),this.type){case"async-block":this.start=Date.now();break;case"confirm":this.okBtn.focus(),this.addEvent("click",(function(n){if("BUTTON"!==n.target.nodeName)return!1;t.delete(),t[n.target.id]&&t[n.target.id]()}));break;default:document.activeElement.blur(),this.addEvent("click",(function(n){n.target.id===t.newNode.id&&t.delete()}))}}},{key:"afterDelete",value:function(){window.removeEventListener("keydown",this.listener)}},{key:"okBtn",get:function(){return document.getElementById(A.ids.confirmOk)}},{key:"cancelBtn",get:function(){return document.getElementById(A.ids.confirmCancel)}}])&&g(e.prototype,a),n}(l);function x(t){return(x="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function E(t,n){for(var e=0;e<n.length;e++){var a=n[e];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(t,a.key,a)}}e.d(n,"default",(function(){return S}));var S=function(){function t(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};!function(t,n){if(!(t instanceof n))throw new TypeError("Cannot call a class as a function")}(this,t),this.options=new i(n)}var n,e;return n=t,(e=[{key:"tip",value:function(t,n){return this._addToast(t,"tip",n).el}},{key:"info",value:function(t,n){return this._addToast(t,"info",n).el}},{key:"success",value:function(t,n){return this._addToast(t,"success",n).el}},{key:"warning",value:function(t,n){return this._addToast(t,"warning",n).el}},{key:"alert",value:function(t,n){return this._addToast(t,"alert",n).el}},{key:"async",value:function(t,n,e,a,o){var r=this._addToast(a,"async",o);return this._afterAsync(t,n,e,o,r)}},{key:"confirm",value:function(t,n,e,a){return this._addPopup(t,"confirm",a,n,e)}},{key:"asyncBlock",value:function(t,n,e,a,o){var r=this._addPopup(a,"async-block",o);return this._afterAsync(t,n,e,o,r)}},{key:"modal",value:function(t,n,e){return this._addPopup(t,n,e)}},{key:"closeToasts",value:function(){for(var t=this.container;t.firstChild;)t.removeChild(t.firstChild)}},{key:"_addPopup",value:function(t,n,e,a,o){return new B(t,n,this.options.override(e),a,o)}},{key:"_addToast",value:function(t,n,e,a){e=this.options.override(e);var o=new m(t,n,e,this.container);return a?a instanceof B?a.delete().then((function(){return o.insert()})):a.replace(o):o.insert()}},{key:"_afterAsync",value:function(t,n,e,a,o){return t.then(this._responseHandler(n,"success",a,o),this._responseHandler(e,"alert",a,o))}},{key:"_responseHandler",value:function(t,n,e,a){var o=this;return function(r){switch(x(t)){case"undefined":case"string":var i="alert"===n?t||r:t;o._addToast(i,n,e,a);break;default:a.delete().then((function(){t&&t(r)}))}}}},{key:"_createContainer",value:function(){return new l(document.body,c.ids.container,"awn-".concat(this.options.position)).insert().el}},{key:"container",get:function(){return document.getElementById(c.ids.container)||this._createContainer()}}])&&E(n.prototype,e),t}()}])},926:(t,n,e)=>{"use strict";e.d(n,{Z:()=>s});var a=e(15),o=e.n(a),r=e(645),i=e.n(r)()(o());i.push([t.id,'@keyframes awn-fade-in{0%{opacity:0}to{opacity:1}}@keyframes awn-fade-out{0%{opacity:1}to{opacity:0}}@keyframes awn-slide-right{0%{opacity:0;left:100%}to{opacity:1;left:0}}@keyframes awn-slide-left{0%{opacity:0;right:100%}to{opacity:1;right:0}}@keyframes awn-bar{0%{right:100%}to{right:0}}.awn-popup-loading-dots,.awn-popup-loading-dots:after,.awn-popup-loading-dots:before{border-radius:50%;width:6px;height:6px;animation-fill-mode:both;background:#fff;animation:awn-loading-dots 1s ease-in-out infinite}.awn-popup-loading-dots{position:relative;margin-left:24px;display:inline-block;color:#fff;animation-delay:-.16s}.awn-popup-loading-dots:after,.awn-popup-loading-dots:before{content:"";position:absolute;top:0}.awn-popup-loading-dots:before{left:-16px;animation-delay:-.32s}.awn-popup-loading-dots:after{left:16px}@keyframes awn-loading-dots{0%,80%,to{box-shadow:0 0 0 0}40%{box-shadow:0 0 0 2px}}#awn-popup-wrapper{position:fixed;left:0;right:0;bottom:0;top:0;display:flex;align-items:center;justify-content:center;background:rgba(0,0,0,.7);z-index:99999;opacity:0;animation-name:awn-fade-in;animation-timing-function:ease-out;animation-fill-mode:both}#awn-popup-wrapper.awn-hiding{animation-name:awn-fade-out}#awn-popup-wrapper .awn-popup-body{position:relative;border-radius:6px;word-break:break-word;background:#fff;padding:24px;min-width:320px;font-size:14px;max-width:500px}#awn-popup-wrapper .awn-popup-body.awn-popup-confirm{display:flex;flex-direction:column;align-items:center}#awn-popup-wrapper .awn-popup-body.awn-popup-confirm .fa{font-size:44px;color:#c26700}#awn-popup-wrapper .awn-popup-body.awn-popup-async-block{background:transparent;font-size:32px;font-weight:700;color:#fff;text-align:center}#awn-popup-wrapper .awn-popup-title{font-size:14px;font-weight:700;text-transform:uppercase;margin-top:8px}#awn-popup-wrapper .awn-buttons{width:100%;display:flex;justify-content:space-between;margin-top:24px}#awn-popup-wrapper .awn-buttons .awn-btn{border-radius:4px;border:0;font-weight:700;transition:background .2s linear;font-size:14px;width:45%;line-height:32px;color:#fff}#awn-popup-wrapper .awn-buttons-1 .awn-btn{width:100%}#awn-popup-wrapper .awn-buttons .awn-btn-success{background:#40871d}#awn-popup-wrapper .awn-buttons .awn-btn-success:hover{background:#367218}#awn-popup-wrapper .awn-buttons .awn-btn-cancel{background:#1c76a6}#awn-popup-wrapper .awn-buttons .awn-btn-cancel:hover{background:#186690}#awn-toast-container{position:fixed;z-index:99998;bottom:24px;right:24px;box-sizing:border-box}#awn-toast-container.awn-top-left,#awn-toast-container.awn-top-right{top:24px;bottom:auto}#awn-toast-container.awn-top-left .awn-toast:first-child,#awn-toast-container.awn-top-right .awn-toast:first-child{margin-top:16px}#awn-toast-container.awn-bottom-left,#awn-toast-container.awn-top-left{left:24px;right:auto}#awn-toast-container.awn-bottom-left .awn-toast,#awn-toast-container.awn-top-left .awn-toast{right:100%;animation-name:awn-slide-left}#awn-toast-container.awn-bottom-left .awn-toast.awn-hiding,#awn-toast-container.awn-top-left .awn-toast.awn-hiding{right:0}#awn-toast-container.awn-bottom-right .awn-toast,#awn-toast-container.awn-top-right .awn-toast{left:100%;animation-name:awn-slide-right}#awn-toast-container.awn-bottom-right .awn-toast.awn-hiding,#awn-toast-container.awn-top-right .awn-toast.awn-hiding{left:0}.awn-toast{position:relative;cursor:pointer;overflow:hidden;opacity:0;width:320px;background:#ebebeb;margin-top:16px;border-radius:6px;color:grey;font-size:14px;animation-timing-function:linear;animation-fill-mode:both}.awn-toast-content{word-break:break-word}.awn-toast-label{display:block;text-transform:uppercase;color:grey;font-size:18px}.awn-toast-icon{position:absolute;right:16px;top:6px;bottom:0;display:flex;align-items:center;justify-content:flex-end}.awn-toast-icon .fa{font-size:44px;color:grey}.awn-toast-wrapper{padding:22px 88px 16px 16px;border:2px solid #d1d1d1;border-radius:6px}.awn-toast-progress-bar{position:absolute;top:0;left:0;right:0;height:6px}.awn-toast-progress-bar:after{content:" ";background:grey;position:absolute;width:100%;right:100%;top:0;height:6px;animation-name:awn-bar;animation-duration:inherit;animation-timing-function:linear;animation-fill-mode:both}.awn-toast.awn-toast-progress-bar-paused .awn-toast-progress-bar:after{animation-play-state:paused}.awn-toast.awn-hiding{animation-name:awn-fade-out!important}.awn-toast.awn-toast-success{background:#dff8d3;color:#40871d}.awn-toast.awn-toast-success .awn-toast-wrapper{border-color:#a7d590}.awn-toast.awn-toast-success .fa,.awn-toast.awn-toast-success b{color:#40871d}.awn-toast.awn-toast-success .awn-toast-progress-bar:after{background:#40871d}.awn-toast.awn-toast-info{background:#d3ebf8;color:#1c76a6}.awn-toast.awn-toast-info .awn-toast-wrapper{border-color:#9fd3ef}.awn-toast.awn-toast-info .fa,.awn-toast.awn-toast-info b{color:#1c76a6}.awn-toast.awn-toast-info .awn-toast-progress-bar:after{background:#1c76a6}.awn-toast.awn-toast-alert{background:#f8d5d3;color:#a92019}.awn-toast.awn-toast-alert .awn-toast-wrapper{border-color:#f0a29d}.awn-toast.awn-toast-alert .fa,.awn-toast.awn-toast-alert b{color:#a92019}.awn-toast.awn-toast-alert .awn-toast-progress-bar:after{background:#a92019}.awn-toast.awn-toast-warning{background:#ffe7cc;color:#c26700}.awn-toast.awn-toast-warning .awn-toast-wrapper{border-color:#ffc480}.awn-toast.awn-toast-warning .fa,.awn-toast.awn-toast-warning b{color:#c26700}.awn-toast.awn-toast-warning .awn-toast-progress-bar:after{background:#c26700}[class^=awn-]{box-sizing:border-box}',"",{version:3,sources:["webpack://./node_modules/awesome-notifications/dist/style.css"],names:[],mappings:"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",sourcesContent:['@keyframes awn-fade-in{0%{opacity:0}to{opacity:1}}@keyframes awn-fade-out{0%{opacity:1}to{opacity:0}}@keyframes awn-slide-right{0%{opacity:0;left:100%}to{opacity:1;left:0}}@keyframes awn-slide-left{0%{opacity:0;right:100%}to{opacity:1;right:0}}@keyframes awn-bar{0%{right:100%}to{right:0}}.awn-popup-loading-dots,.awn-popup-loading-dots:after,.awn-popup-loading-dots:before{border-radius:50%;width:6px;height:6px;animation-fill-mode:both;background:#fff;animation:awn-loading-dots 1s ease-in-out infinite}.awn-popup-loading-dots{position:relative;margin-left:24px;display:inline-block;color:#fff;animation-delay:-.16s}.awn-popup-loading-dots:after,.awn-popup-loading-dots:before{content:"";position:absolute;top:0}.awn-popup-loading-dots:before{left:-16px;animation-delay:-.32s}.awn-popup-loading-dots:after{left:16px}@keyframes awn-loading-dots{0%,80%,to{box-shadow:0 0 0 0}40%{box-shadow:0 0 0 2px}}#awn-popup-wrapper{position:fixed;left:0;right:0;bottom:0;top:0;display:flex;align-items:center;justify-content:center;background:rgba(0,0,0,.7);z-index:99999;opacity:0;animation-name:awn-fade-in;animation-timing-function:ease-out;animation-fill-mode:both}#awn-popup-wrapper.awn-hiding{animation-name:awn-fade-out}#awn-popup-wrapper .awn-popup-body{position:relative;border-radius:6px;word-break:break-word;background:#fff;padding:24px;min-width:320px;font-size:14px;max-width:500px}#awn-popup-wrapper .awn-popup-body.awn-popup-confirm{display:flex;flex-direction:column;align-items:center}#awn-popup-wrapper .awn-popup-body.awn-popup-confirm .fa{font-size:44px;color:#c26700}#awn-popup-wrapper .awn-popup-body.awn-popup-async-block{background:transparent;font-size:32px;font-weight:700;color:#fff;text-align:center}#awn-popup-wrapper .awn-popup-title{font-size:14px;font-weight:700;text-transform:uppercase;margin-top:8px}#awn-popup-wrapper .awn-buttons{width:100%;display:flex;justify-content:space-between;margin-top:24px}#awn-popup-wrapper .awn-buttons .awn-btn{border-radius:4px;border:0;font-weight:700;transition:background .2s linear;font-size:14px;width:45%;line-height:32px;color:#fff}#awn-popup-wrapper .awn-buttons-1 .awn-btn{width:100%}#awn-popup-wrapper .awn-buttons .awn-btn-success{background:#40871d}#awn-popup-wrapper .awn-buttons .awn-btn-success:hover{background:#367218}#awn-popup-wrapper .awn-buttons .awn-btn-cancel{background:#1c76a6}#awn-popup-wrapper .awn-buttons .awn-btn-cancel:hover{background:#186690}#awn-toast-container{position:fixed;z-index:99998;bottom:24px;right:24px;box-sizing:border-box}#awn-toast-container.awn-top-left,#awn-toast-container.awn-top-right{top:24px;bottom:auto}#awn-toast-container.awn-top-left .awn-toast:first-child,#awn-toast-container.awn-top-right .awn-toast:first-child{margin-top:16px}#awn-toast-container.awn-bottom-left,#awn-toast-container.awn-top-left{left:24px;right:auto}#awn-toast-container.awn-bottom-left .awn-toast,#awn-toast-container.awn-top-left .awn-toast{right:100%;animation-name:awn-slide-left}#awn-toast-container.awn-bottom-left .awn-toast.awn-hiding,#awn-toast-container.awn-top-left .awn-toast.awn-hiding{right:0}#awn-toast-container.awn-bottom-right .awn-toast,#awn-toast-container.awn-top-right .awn-toast{left:100%;animation-name:awn-slide-right}#awn-toast-container.awn-bottom-right .awn-toast.awn-hiding,#awn-toast-container.awn-top-right .awn-toast.awn-hiding{left:0}.awn-toast{position:relative;cursor:pointer;overflow:hidden;opacity:0;width:320px;background:#ebebeb;margin-top:16px;border-radius:6px;color:grey;font-size:14px;animation-timing-function:linear;animation-fill-mode:both}.awn-toast-content{word-break:break-word}.awn-toast-label{display:block;text-transform:uppercase;color:grey;font-size:18px}.awn-toast-icon{position:absolute;right:16px;top:6px;bottom:0;display:flex;align-items:center;justify-content:flex-end}.awn-toast-icon .fa{font-size:44px;color:grey}.awn-toast-wrapper{padding:22px 88px 16px 16px;border:2px solid #d1d1d1;border-radius:6px}.awn-toast-progress-bar{position:absolute;top:0;left:0;right:0;height:6px}.awn-toast-progress-bar:after{content:" ";background:grey;position:absolute;width:100%;right:100%;top:0;height:6px;animation-name:awn-bar;animation-duration:inherit;animation-timing-function:linear;animation-fill-mode:both}.awn-toast.awn-toast-progress-bar-paused .awn-toast-progress-bar:after{animation-play-state:paused}.awn-toast.awn-hiding{animation-name:awn-fade-out!important}.awn-toast.awn-toast-success{background:#dff8d3;color:#40871d}.awn-toast.awn-toast-success .awn-toast-wrapper{border-color:#a7d590}.awn-toast.awn-toast-success .fa,.awn-toast.awn-toast-success b{color:#40871d}.awn-toast.awn-toast-success .awn-toast-progress-bar:after{background:#40871d}.awn-toast.awn-toast-info{background:#d3ebf8;color:#1c76a6}.awn-toast.awn-toast-info .awn-toast-wrapper{border-color:#9fd3ef}.awn-toast.awn-toast-info .fa,.awn-toast.awn-toast-info b{color:#1c76a6}.awn-toast.awn-toast-info .awn-toast-progress-bar:after{background:#1c76a6}.awn-toast.awn-toast-alert{background:#f8d5d3;color:#a92019}.awn-toast.awn-toast-alert .awn-toast-wrapper{border-color:#f0a29d}.awn-toast.awn-toast-alert .fa,.awn-toast.awn-toast-alert b{color:#a92019}.awn-toast.awn-toast-alert .awn-toast-progress-bar:after{background:#a92019}.awn-toast.awn-toast-warning{background:#ffe7cc;color:#c26700}.awn-toast.awn-toast-warning .awn-toast-wrapper{border-color:#ffc480}.awn-toast.awn-toast-warning .fa,.awn-toast.awn-toast-warning b{color:#c26700}.awn-toast.awn-toast-warning .awn-toast-progress-bar:after{background:#c26700}[class^=awn-]{box-sizing:border-box}'],sourceRoot:""}]);const s=i},645:t=>{"use strict";t.exports=function(t){var n=[];return n.toString=function(){return this.map((function(n){var e=t(n);return n[2]?"@media ".concat(n[2]," {").concat(e,"}"):e})).join("")},n.i=function(t,e,a){"string"==typeof t&&(t=[[null,t,""]]);var o={};if(a)for(var r=0;r<this.length;r++){var i=this[r][0];null!=i&&(o[i]=!0)}for(var s=0;s<t.length;s++){var c=[].concat(t[s]);a&&o[c[0]]||(e&&(c[2]?c[2]="".concat(e," and ").concat(c[2]):c[2]=e),n.push(c))}},n}},15:t=>{"use strict";function n(t,n){(null==n||n>t.length)&&(n=t.length);for(var e=0,a=new Array(n);e<n;e++)a[e]=t[e];return a}t.exports=function(t){var e,a,o=(a=4,function(t){if(Array.isArray(t))return t}(e=t)||function(t,n){var e=null==t?null:"undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(null!=e){var a,o,r=[],i=!0,s=!1;try{for(e=e.call(t);!(i=(a=e.next()).done)&&(r.push(a.value),!n||r.length!==n);i=!0);}catch(t){s=!0,o=t}finally{try{i||null==e.return||e.return()}finally{if(s)throw o}}return r}}(e,a)||function(t,e){if(t){if("string"==typeof t)return n(t,e);var a=Object.prototype.toString.call(t).slice(8,-1);return"Object"===a&&t.constructor&&(a=t.constructor.name),"Map"===a||"Set"===a?Array.from(t):"Arguments"===a||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a)?n(t,e):void 0}}(e,a)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),r=o[1],i=o[3];if(!i)return r;if("function"==typeof btoa){var s=btoa(unescape(encodeURIComponent(JSON.stringify(i)))),c="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(s),A="/*# ".concat(c," */"),p=i.sources.map((function(t){return"/*# sourceURL=".concat(i.sourceRoot||"").concat(t," */")}));return[r].concat(p).concat([A]).join("\n")}return[r].join("\n")}},716:(t,n,e)=>{"use strict";var a=e(379),o=e.n(a),r=e(795),i=e.n(r),s=e(569),c=e.n(s),A=e(565),p=e.n(A),u=e(216),l=e.n(u),f=e(589),d=e.n(f),w=e(926),b={};b.styleTagTransform=d(),b.setAttributes=p(),b.insert=c().bind(null,"head"),b.domAPI=i(),b.insertStyleElement=l(),o()(w.Z,b),w.Z&&w.Z.locals&&w.Z.locals},379:t=>{"use strict";var n=[];function e(t){for(var e=-1,a=0;a<n.length;a++)if(n[a].identifier===t){e=a;break}return e}function a(t,a){for(var r={},i=[],s=0;s<t.length;s++){var c=t[s],A=a.base?c[0]+a.base:c[0],p=r[A]||0,u="".concat(A," ").concat(p);r[A]=p+1;var l=e(u),f={css:c[1],media:c[2],sourceMap:c[3]};-1!==l?(n[l].references++,n[l].updater(f)):n.push({identifier:u,updater:o(f,a),references:1}),i.push(u)}return i}function o(t,n){var e=n.domAPI(n);return e.update(t),function(n){if(n){if(n.css===t.css&&n.media===t.media&&n.sourceMap===t.sourceMap)return;e.update(t=n)}else e.remove()}}t.exports=function(t,o){var r=a(t=t||[],o=o||{});return function(t){t=t||[];for(var i=0;i<r.length;i++){var s=e(r[i]);n[s].references--}for(var c=a(t,o),A=0;A<r.length;A++){var p=e(r[A]);0===n[p].references&&(n[p].updater(),n.splice(p,1))}r=c}}},569:t=>{"use strict";var n={};t.exports=function(t,e){var a=function(t){if(void 0===n[t]){var e=document.querySelector(t);if(window.HTMLIFrameElement&&e instanceof window.HTMLIFrameElement)try{e=e.contentDocument.head}catch(t){e=null}n[t]=e}return n[t]}(t);if(!a)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");a.appendChild(e)}},216:t=>{"use strict";t.exports=function(t){var n=document.createElement("style");return t.setAttributes(n,t.attributes),t.insert(n),n}},565:(t,n,e)=>{"use strict";t.exports=function(t){var n=e.nc;n&&t.setAttribute("nonce",n)}},795:t=>{"use strict";t.exports=function(t){var n=t.insertStyleElement(t);return{update:function(e){!function(t,n,e){var a=e.css,o=e.media,r=e.sourceMap;o?t.setAttribute("media",o):t.removeAttribute("media"),r&&"undefined"!=typeof btoa&&(a+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(r))))," */")),n.styleTagTransform(a,t)}(n,t,e)},remove:function(){!function(t){if(null===t.parentNode)return!1;t.parentNode.removeChild(t)}(n)}}}},589:t=>{"use strict";t.exports=function(t,n){if(n.styleSheet)n.styleSheet.cssText=t;else{for(;n.firstChild;)n.removeChild(n.firstChild);n.appendChild(document.createTextNode(t))}}},33:(t,n,e)=>{"use strict";e.d(n,{B:()=>a}),e(541);const a=(t,n,e)=>()=>{Shiny.setInputValue(`${n}${t}`,e,{priority:"event"})}},541:t=>{"use strict";t.exports=__WEBPACK_EXTERNAL_MODULE__541__}},__webpack_module_cache__={};function __webpack_require__(t){var n=__webpack_module_cache__[t];if(void 0!==n)return n.exports;var e=__webpack_module_cache__[t]={id:t,exports:{}};return __webpack_modules__[t](e,e.exports,__webpack_require__),e.exports}__webpack_require__.n=t=>{var n=t&&t.__esModule?()=>t.default:()=>t;return __webpack_require__.d(n,{a:n}),n},__webpack_require__.d=(t,n)=>{for(var e in n)__webpack_require__.o(n,e)&&!__webpack_require__.o(t,e)&&Object.defineProperty(t,e,{enumerable:!0,get:n[e]})},__webpack_require__.o=(t,n)=>Object.prototype.hasOwnProperty.call(t,n),__webpack_require__.r=t=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})};var __webpack_exports__={};return(()=>{"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{create:()=>create});var shiny__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(541),shiny__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(shiny__WEBPACK_IMPORTED_MODULE_0__),_callbacks__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(33),awesome_notifications__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(616),awesome_notifications__WEBPACK_IMPORTED_MODULE_2___default=__webpack_require__.n(awesome_notifications__WEBPACK_IMPORTED_MODULE_2__),awesome_notifications_dist_style_css__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(716);const create=t=>new(awesome_notifications__WEBPACK_IMPORTED_MODULE_2___default())(t||{});let notifier;Shiny.addCustomMessageHandler("awn-notify",(t=>{dispatch(t)})),Shiny.addCustomMessageHandler("awn-modal",(msg=>{init(),notifier.modal(msg.content,"modal-awn",msg.options),msg.onShown&&eval(msg.onShown)})),Shiny.addCustomMessageHandler("awn-ask",(t=>{init(),notifier.confirm(t.content,(0,_callbacks__WEBPACK_IMPORTED_MODULE_1__.B)(t.id,t.ns,!0),(0,_callbacks__WEBPACK_IMPORTED_MODULE_1__.B)(t.id,t.ns,!1),t.options)})),Shiny.addCustomMessageHandler("awn-globals",(t=>{notifier=new(awesome_notifications__WEBPACK_IMPORTED_MODULE_2___default())(t.options)}));const dispatch=t=>{switch(init(),t.type){case"warning":notifier.warning(t.content,t.options);break;case"tip":notifier.tip(t.content,t.options);break;case"info":notifier.info(t.content,t.options);break;case"success":notifier.success(t.content,t.options);break;case"alert":default:notifier.alert(t.content,t.options)}},init=()=>{null==notifier&&(notifier=new(awesome_notifications__WEBPACK_IMPORTED_MODULE_2___default()))}})(),__webpack_exports__})()}));
//# sourceMappingURL=notifications.js.map