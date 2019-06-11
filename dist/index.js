!function(e){var t={};function r(n){if(t[n])return t[n].exports;var o=t[n]={i:n,l:!1,exports:{}};return e[n].call(o.exports,o,o.exports,r),o.l=!0,o.exports}r.m=e,r.c=t,r.d=function(e,t,n){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)r.d(n,o,function(t){return e[t]}.bind(null,o));return n},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="",r(r.s=1)}([function(e,t){e.exports=react},function(e,t,r){"use strict";r.r(t);var n=r(0),o=r.n(n),i=function(){return{intersectionObserverSupport:"IntersectionObserver"in window&&"IntersectionObserverEntry"in window&&"intersectionRatio"in window.IntersectionObserverEntry.prototype,idleCallbackSupport:"requestIdleCallback"in window}};function u(e){return(u="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function c(){return(c=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}function a(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var r=[],n=!0,o=!1,i=void 0;try{for(var u,c=e[Symbol.iterator]();!(n=(u=c.next()).done)&&(r.push(u.value),!t||r.length!==t);n=!0);}catch(e){o=!0,i=e}finally{try{n||null==c.return||c.return()}finally{if(o)throw i}}return r}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}function l(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}function s(e){return function(e){if(Array.isArray(e)){for(var t=0,r=new Array(e.length);t<e.length;t++)r[t]=e[t];return r}}(e)||function(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}function f(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function p(e){return(p=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function d(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function y(e,t){return(y=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}r.d(t,"Provider",function(){return h}),r.d(t,"YallImg",function(){return S}),r.d(t,"YallPicture",function(){return j}),r.d(t,"YallVideo",function(){return g});var b,m,v,O=Object(n.createContext)(),h=function(e){function t(e){var r,n,o;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),n=this,(r=!(o=p(t).call(this,e))||"object"!==u(o)&&"function"!=typeof o?d(n):o).push=r.push.bind(d(r)),r.remove=r.remove.bind(d(r)),r.yallLoad=r.yallLoad.bind(d(r)),r.state={yallElements:[]},r}var r,n,c;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&y(e,t)}(t,o.a.Component),r=t,(n=[{key:"componentDidMount",value:function(){var e=this,t=this.props.options;!0===i().intersectionObserverSupport&&(this.intersectionListener=new IntersectionObserver(function(r,n){r.forEach(function(r){if(!0===r.isIntersecting&&r.intersectionRatio>0){var n=r.target;!0===t.idlyLoad?requestIdleCallback(function(){return e.yallLoad(n)},e.idleCallbackOptions):e.yallLoad(n),n.classList.remove(t.lazyClass),e.remove(n)}})},{rootMargin:"".concat(t.threshold,"px 0%")}),this.state.yallElements.forEach(function(t){return e.intersectionListener.observe(t)}))}},{key:"componentWillUnmount",value:function(){this.intersectionListener&&this.intersectionListener.disconnect()}},{key:"onAddElement",value:function(e){!0===i().intersectionObserverSupport&&this.intersectionListener.observe(e)}},{key:"onRemoveElement",value:function(e){!0===i().intersectionObserverSupport&&this.intersectionListener.unobserve(e)}},{key:"yallLoad",value:function(e){var t=this.props.options;e.flipSrc(),"VIDEO"===e.tagName&&!0===e.autoplay&&e.load(),e.classList.contains(t.lazyBackgroundClass)&&(e.classList.remove(t.lazyBackgroundClass),e.classList.add(t.lazyBackgroundLoaded))}},{key:"push",value:function(e){var t=this;this.setState(function(t){return{yallElements:[].concat(s(t.yallElements),[e])}},function(){return t.onAddElement(e)})}},{key:"remove",value:function(e){var t=this;this.setState(function(t){return{yallElements:t.yallElements.filter(function(t){return t===e})}},function(){return t.onRemoveElement(e)})}},{key:"render",value:function(){var e=this;return o.a.createElement(O.Provider,{value:this},o.a.createElement("div",{className:"yall-provider-container",ref:function(t){return e.yallProvider=t}},this.props.children))}},{key:"idleCallbackOptions",get:function(){return{timeout:this.props.options.idleLoadTimeout}}}])&&f(r.prototype,n),c&&f(r,c),t}();function S(e){var t=this,r=e.dataSrc,i=e.src,u=l(e,["dataSrc","src"]),s=a(Object(n.useState)(i),2),f=s[0],p=s[1],d=Object(n.useRef)(null),y=Object(n.useContext)(O),b=y.push,m=y.remove;return Object(n.useEffect)(function(){if(d.current)return d.current.flipSrc=p.bind(t,r),b(d.current),function(){return m(d.current)}},[null!==d.current]),o.a.createElement("img",c({ref:d},u,{src:f,"data-src":r}))}function j(e){var t=e.sources,r=e.src,i=e.dataSrc,u=l(e,["sources","src","dataSrc"]),s=a(Object(n.useState)(r),2),f=s[0],p=s[1],d=a(Object(n.useState)(t.map(function(e){return e.srcSet})),2),y=d[0],b=d[1],m=Object(n.useRef)(null),v=t.map(function(e){return Object(n.useRef)(null)}),h=Object(n.useContext)(O),S=h.push,j=h.remove;return Object(n.useEffect)(function(){if(m.current)return m.current.flipSrc=function(){p(i),b(t.map(function(e){return e.dataSrcSet}))},S(m.current),function(){return j(m.current)}},[null!==m.current]),o.a.createElement("picture",{ref:m},t.map(function(e,t){return o.a.createElement("source",{ref:v[t],key:e.media,media:e.media,srcSet:y[t],"data-srcset":e.dataSrcSet})}),o.a.createElement("img",c({src:f,"data-src":i},u)))}function g(e){var t=e.sources,r=e.src,i=e.dataSrc,u=e.children,s=l(e,["sources","src","dataSrc","children"]),f=a(Object(n.useState)(r),2),p=f[0],d=f[1],y=a(Object(n.useState)(t&&t.map(function(e){return e.srcSet})),2),b=y[0],m=y[1],v=Object(n.useRef)(null),h=t&&t.map(function(e){return Object(n.useRef)(null)}),S=Object(n.useContext)(O),j=S.push,g=S.remove;return Object(n.useEffect)(function(){if(v.current)return v.current.flipSrc=function(){d(i),t&&m(t.map(function(e){return e.dataSrcSet}))},j(v.current),function(){return g(v.current)}},[null!==v.current]),o.a.createElement("video",c({src:p,"data-src":i,ref:v},s),t&&t.map(function(e,t){return o.a.createElement("source",{ref:h[t],key:e.type,type:e.type,srcSet:b[t],"data-srcset":e.dataSrcSet})}),u)}v=O,(m="contextType")in(b=h)?Object.defineProperty(b,m,{value:v,enumerable:!0,configurable:!0,writable:!0}):b[m]=v,h.defaultProps={options:{lazyClass:"lazy",lazyBackgroundClass:"lazy-bg",lazyBackgroundLoaded:"lazy-bg-loaded",idlyLoad:!1,idleLoadTimeout:100,threshold:200}}}]);