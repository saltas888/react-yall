!function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=1)}([function(e,t){e.exports=react},function(e,t,n){"use strict";n.r(t);var r=n(0),o=n.n(r),i=function(e){return[].slice.call(e)},u=function(e){null!==e.getAttribute("data-srcset")&&e.setAttribute("srcset",e.getAttribute("data-srcset")),null!==e.getAttribute("data-src")&&e.setAttribute("src",e.getAttribute("data-src")),null!==e.getAttribute("data-poster")&&e.setAttribute("poster",e.getAttribute("data-poster"))},a=function(){return{intersectionObserverSupport:"IntersectionObserver"in window&&"IntersectionObserverEntry"in window&&"intersectionRatio"in window.IntersectionObserverEntry.prototype,idleCallbackSupport:"requestIdleCallback"in window}},c=function(e){return function(t){if("IMG"===t.tagName){var n=t.parentNode;"PICTURE"===n.tagName&&i(n.querySelectorAll("source")).forEach(function(e){return u(e)}),u(t)}"VIDEO"===t.tagName&&(i(t.querySelectorAll("source")).forEach(function(e){return u(e)}),u(t),!0===t.autoplay&&t.load()),"IFRAME"===t.tagName&&u(t),t.classList.contains(e.lazyBackgroundClass)&&(t.classList.remove(e.lazyBackgroundClass),t.classList.add(e.lazyBackgroundLoaded))}};function l(e){return(l="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function s(){return(s=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function f(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}function p(e){return function(e){if(Array.isArray(e)){for(var t=0,n=new Array(e.length);t<e.length;t++)n[t]=e[t];return n}}(e)||function(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}function y(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function d(e){return(d=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function b(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function v(e,t){return(v=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}n.d(t,"Provider",function(){return j}),n.d(t,"default",function(){return E});var m,h,O,g=Object(r.createContext)(),j=function(e){function t(e){var n,r,o;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),r=this,(n=!(o=d(t).call(this,e))||"object"!==l(o)&&"function"!=typeof o?b(r):o).push=n.push.bind(b(n)),n.remove=n.remove.bind(b(n)),n.yallLoad=c(n.props.options),n.state={yallElements:[]},n}var n,r,i;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&v(e,t)}(t,o.a.Component),n=t,(r=[{key:"componentDidMount",value:function(){var e=this,t=this.props.options;!0===a().intersectionObserverSupport&&(this.intersectionListener=new IntersectionObserver(function(n,r){n.forEach(function(n){if(!0===n.isIntersecting&&n.intersectionRatio>0){var r=n.target;!0===t.idlyLoad?requestIdleCallback(function(){return e.yallLoad(r)},e.idleCallbackOptions):e.yallLoad(r),r.classList.remove(t.lazyClass),e.remove(r)}})},{rootMargin:"".concat(t.threshold,"px 0%")}),this.state.yallElements.forEach(function(t){return e.intersectionListener.observe(t)}))}},{key:"componentWillUnmount",value:function(){this.intersectionListener&&this.intersectionListener.disconnect()}},{key:"onAddElement",value:function(e){!0===a().intersectionObserverSupport&&this.intersectionListener.observe(e)}},{key:"onRemoveElement",value:function(e){!0===a().intersectionObserverSupport&&this.intersectionListener.unobserve(e)}},{key:"push",value:function(e){var t=this;this.setState(function(t){return{yallElements:[].concat(p(t.yallElements),[e])}},function(){return t.onAddElement(e)})}},{key:"remove",value:function(e){var t=this;this.setState(function(t){return{yallElements:t.yallElements.filter(function(t){return t===e})}},function(){return t.onRemoveElement(e)})}},{key:"render",value:function(){var e=this;return o.a.createElement(g.Provider,{value:this},o.a.createElement("div",{className:"yall-provider-container",ref:function(t){return e.yallProvider=t}},this.props.children))}},{key:"idleCallbackOptions",get:function(){return{timeout:this.props.options.idleLoadTimeout}}}])&&y(n.prototype,r),i&&y(n,i),t}();function E(e){var t=e.dataSrc,n=f(e,["dataSrc"]),i=Object(r.useRef)(null),u=Object(r.useContext)(g),a=u.push,c=u.remove;return Object(r.useEffect)(function(){if(i.current)return a(i.current),function(){return c(i.current)}},[null!==i.current]),o.a.createElement("img",s({ref:i},n,{"data-src":t}))}O=g,(h="contextType")in(m=j)?Object.defineProperty(m,h,{value:O,enumerable:!0,configurable:!0,writable:!0}):m[h]=O,j.defaultProps={options:{lazyClass:"lazy",lazyBackgroundClass:"lazy-bg",lazyBackgroundLoaded:"lazy-bg-loaded",idlyLoad:!1,idleLoadTimeout:100,threshold:200}}}]);