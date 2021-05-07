/*! For license information please see component---src-pages-index-js-1a7e0585627cdbd69181.js.LICENSE.txt */
(self.webpackChunkcsilva2810_github_io=self.webpackChunkcsilva2810_github_io||[]).push([[678],{7462:function(t,e){"use strict";var n=/; *([!#$%&'*+.^_`|~0-9A-Za-z-]+) *= *("(?:[\u000b\u0020\u0021\u0023-\u005b\u005d-\u007e\u0080-\u00ff]|\\[\u000b\u0020-\u00ff])*"|[!#$%&'*+.^_`|~0-9A-Za-z-]+) */g,r=/^[\u000b\u0020-\u007e\u0080-\u00ff]+$/,i=/^[!#$%&'*+.^_`|~0-9A-Za-z-]+$/,o=/\\([\u000b\u0020-\u00ff])/g,u=/([\\"])/g,a=/^[!#$%&'*+.^_`|~0-9A-Za-z-]+\/[!#$%&'*+.^_`|~0-9A-Za-z-]+$/;function c(t){var e=String(t);if(i.test(e))return e;if(e.length>0&&!r.test(e))throw new TypeError("invalid parameter value");return'"'+e.replace(u,"\\$1")+'"'}function s(t){this.parameters=Object.create(null),this.type=t}e.Q=function(t){if(!t)throw new TypeError("argument string is required");var e="object"==typeof t?function(t){var e;"function"==typeof t.getHeader?e=t.getHeader("content-type"):"object"==typeof t.headers&&(e=t.headers&&t.headers["content-type"]);if("string"!=typeof e)throw new TypeError("content-type header is missing from object");return e}(t):t;if("string"!=typeof e)throw new TypeError("argument string is required to be a string");var r=e.indexOf(";"),i=-1!==r?e.substr(0,r).trim():e.trim();if(!a.test(i))throw new TypeError("invalid media type");var u=new s(i.toLowerCase());if(-1!==r){var c,M,l;for(n.lastIndex=r;M=n.exec(e);){if(M.index!==r)throw new TypeError("invalid parameter format");r+=M[0].length,c=M[1].toLowerCase(),'"'===(l=M[2])[0]&&(l=l.substr(1,l.length-2).replace(o,"$1")),u.parameters[c]=l}if(r!==e.length)throw new TypeError("invalid parameter format")}return u}},2993:function(t){var e="undefined"!=typeof Element,n="function"==typeof Map,r="function"==typeof Set,i="function"==typeof ArrayBuffer&&!!ArrayBuffer.isView;function o(t,u){if(t===u)return!0;if(t&&u&&"object"==typeof t&&"object"==typeof u){if(t.constructor!==u.constructor)return!1;var a,c,s,M;if(Array.isArray(t)){if((a=t.length)!=u.length)return!1;for(c=a;0!=c--;)if(!o(t[c],u[c]))return!1;return!0}if(n&&t instanceof Map&&u instanceof Map){if(t.size!==u.size)return!1;for(M=t.entries();!(c=M.next()).done;)if(!u.has(c.value[0]))return!1;for(M=t.entries();!(c=M.next()).done;)if(!o(c.value[1],u.get(c.value[0])))return!1;return!0}if(r&&t instanceof Set&&u instanceof Set){if(t.size!==u.size)return!1;for(M=t.entries();!(c=M.next()).done;)if(!u.has(c.value[0]))return!1;return!0}if(i&&ArrayBuffer.isView(t)&&ArrayBuffer.isView(u)){if((a=t.length)!=u.length)return!1;for(c=a;0!=c--;)if(t[c]!==u[c])return!1;return!0}if(t.constructor===RegExp)return t.source===u.source&&t.flags===u.flags;if(t.valueOf!==Object.prototype.valueOf)return t.valueOf()===u.valueOf();if(t.toString!==Object.prototype.toString)return t.toString()===u.toString();if((a=(s=Object.keys(t)).length)!==Object.keys(u).length)return!1;for(c=a;0!=c--;)if(!Object.prototype.hasOwnProperty.call(u,s[c]))return!1;if(e&&t instanceof Element)return!1;for(c=a;0!=c--;)if(("_owner"!==s[c]&&"__v"!==s[c]&&"__o"!==s[c]||!t.$$typeof)&&!o(t[s[c]],u[s[c]]))return!1;return!0}return t!=t&&u!=u}t.exports=function(t,e){try{return o(t,e)}catch(n){if((n.message||"").match(/stack|recursion/i))return console.warn("react-fast-compare cannot handle circular refs"),!1;throw n}}},4839:function(t,e,n){"use strict";var r,i=n(7294),o=(r=i)&&"object"==typeof r&&"default"in r?r.default:r;function u(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}var a=!("undefined"==typeof window||!window.document||!window.document.createElement);t.exports=function(t,e,n){if("function"!=typeof t)throw new Error("Expected reducePropsToState to be a function.");if("function"!=typeof e)throw new Error("Expected handleStateChangeOnClient to be a function.");if(void 0!==n&&"function"!=typeof n)throw new Error("Expected mapStateOnServer to either be undefined or a function.");return function(r){if("function"!=typeof r)throw new Error("Expected WrappedComponent to be a React component.");var c,s=[];function M(){c=t(s.map((function(t){return t.props}))),l.canUseDOM?e(c):n&&(c=n(c))}var l=function(t){var e,n;function i(){return t.apply(this,arguments)||this}n=t,(e=i).prototype=Object.create(n.prototype),e.prototype.constructor=e,e.__proto__=n,i.peek=function(){return c},i.rewind=function(){if(i.canUseDOM)throw new Error("You may only call rewind() on the server. Call peek() to read the current state.");var t=c;return c=void 0,s=[],t};var u=i.prototype;return u.UNSAFE_componentWillMount=function(){s.push(this),M()},u.componentDidUpdate=function(){M()},u.componentWillUnmount=function(){var t=s.indexOf(this);s.splice(t,1),M()},u.render=function(){return o.createElement(r,this.props)},i}(i.PureComponent);return u(l,"displayName","SideEffect("+function(t){return t.displayName||t.name||"Component"}(r)+")"),u(l,"canUseDOM",a),l}}},8159:function(t,e,n){"use strict";n.r(e),n.d(e,{default:function(){return _t}});var r=n(7294),i=n(18),o=n(7316),u=n.n(o),a=n(5354),c=n.n(a);Object.create;function s(t,e){for(var n=0,r=e.length,i=t.length;n<r;n++,i++)t[i]=e[n];return t}Object.create;var M=n(7462),l=new Map,L=function(t){return t.cloneNode(!0)},N=function(){return"file:"===window.location.protocol},f=function(t,e){var n=new XMLHttpRequest;n.onreadystatechange=function(){try{if(!/\.svg/i.test(t)&&2===n.readyState){var r=n.getResponseHeader("Content-Type");if(!r)throw new Error("Content type not found");var i=(0,M.Q)(r).type;if("image/svg+xml"!==i&&"text/plain"!==i)throw new Error("Invalid content type: "+i)}if(4===n.readyState){if(404===n.status||null===n.responseXML)throw new Error(N()?"Note: SVG injection ajax calls do not work locally without adjusting security settings in your browser. Or consider using a local webserver.":"Unable to load SVG file: "+t);if(!(200===n.status||N()&&0===n.status))throw new Error("There was a problem injecting the SVG: "+n.status+" "+n.statusText);e(null,n)}}catch(o){n.abort(),e(o,n)}},n.open("GET",t),n.overrideMimeType&&n.overrideMimeType("text/xml"),n.send()},T={},w=function(t,e){T[t]=T[t]||[],T[t].push(e)},j=function(t,e){if(l.has(t)){var n=l.get(t);if(void 0===n)return void w(t,e);if(n instanceof SVGSVGElement)return void e(null,L(n))}l.set(t,void 0),w(t,e),f(t,(function(e,n){e?l.set(t,e):n.responseXML instanceof Document&&n.responseXML.documentElement&&n.responseXML.documentElement instanceof SVGSVGElement&&l.set(t,n.responseXML.documentElement),function(t){for(var e=function(e,n){setTimeout((function(){if(Array.isArray(T[t])){var n=l.get(t),r=T[t][e];n instanceof SVGSVGElement&&r(null,L(n)),n instanceof Error&&r(n),e===T[t].length-1&&delete T[t]}}),0)},n=0,r=T[t].length;n<r;n++)e(n)}(t)}))},y=function(t,e){f(t,(function(t,n){t?e(t):n.responseXML instanceof Document&&n.responseXML.documentElement&&n.responseXML.documentElement instanceof SVGSVGElement&&e(null,n.responseXML.documentElement)}))},g=0,d=[],p={},D="http://www.w3.org/1999/xlink",m=function(t,e,n,r,i,o){var u=t.getAttribute("data-src")||t.getAttribute("src");if(u){if(-1!==d.indexOf(t))return d.splice(d.indexOf(t),1),void(t=null);d.push(t),t.setAttribute("src",""),(r?j:y)(u,(function(r,a){if(!a)return d.splice(d.indexOf(t),1),t=null,void o(r);var c=t.getAttribute("id");c&&a.setAttribute("id",c);var M=t.getAttribute("title");M&&a.setAttribute("title",M);var l=t.getAttribute("width");l&&a.setAttribute("width",l);var L=t.getAttribute("height");L&&a.setAttribute("height",L);var N=Array.from(new Set(s(s(s([],(a.getAttribute("class")||"").split(" ")),["injected-svg"]),(t.getAttribute("class")||"").split(" ")))).join(" ").trim();a.setAttribute("class",N);var f=t.getAttribute("style");f&&a.setAttribute("style",f),a.setAttribute("data-src",u);var T=[].filter.call(t.attributes,(function(t){return/^data-\w[\w-]*$/.test(t.name)}));if(Array.prototype.forEach.call(T,(function(t){t.name&&t.value&&a.setAttribute(t.name,t.value)})),n){var w,j,y,m,C,I={clipPath:["clip-path"],"color-profile":["color-profile"],cursor:["cursor"],filter:["filter"],linearGradient:["fill","stroke"],marker:["marker","marker-start","marker-mid","marker-end"],mask:["mask"],path:[],pattern:["fill","stroke"],radialGradient:["fill","stroke"]};Object.keys(I).forEach((function(t){w=t,y=I[t];for(var e=function(t,e){var n;m=j[t].id,C=m+"-"+ ++g,Array.prototype.forEach.call(y,(function(t){for(var e=0,r=(n=a.querySelectorAll("["+t+'*="'+m+'"]')).length;e<r;e++){var i=n[e].getAttribute(t);i&&!i.match(new RegExp('url\\("?#'+m+'"?\\)'))||n[e].setAttribute(t,"url(#"+C+")")}}));for(var r=a.querySelectorAll("[*|href]"),i=[],o=0,u=r.length;o<u;o++){var c=r[o].getAttributeNS(D,"href");c&&c.toString()==="#"+j[t].id&&i.push(r[o])}for(var s=0,M=i.length;s<M;s++)i[s].setAttributeNS(D,"href","#"+C);j[t].id=C},n=0,r=(j=a.querySelectorAll(w+"[id]")).length;n<r;n++)e(n)}))}a.removeAttribute("xmlns:a");for(var h,E,b=a.querySelectorAll("script"),v=[],A=0,z=b.length;A<z;A++)(E=b[A].getAttribute("type"))&&"application/ecmascript"!==E&&"application/javascript"!==E&&"text/javascript"!==E||((h=b[A].innerText||b[A].textContent)&&v.push(h),a.removeChild(b[A]));if(v.length>0&&("always"===e||"once"===e&&!p[u])){for(var S=0,O=v.length;S<O;S++)new Function(v[S])(window);p[u]=!0}var x=a.querySelectorAll("style");if(Array.prototype.forEach.call(x,(function(t){t.textContent+=""})),a.setAttribute("xmlns","http://www.w3.org/2000/svg"),a.setAttribute("xmlns:xlink",D),i(a),!t.parentNode)return d.splice(d.indexOf(t),1),t=null,void o(new Error("Parent node is null"));t.parentNode.replaceChild(a,t),d.splice(d.indexOf(t),1),t=null,o(null,a)}))}else o(new Error("Invalid data-src or src attribute"))},C="http://www.w3.org/2000/svg",I="http://www.w3.org/1999/xlink",h=function(t){function e(){var e;return(e=t.apply(this,arguments)||this).initialState={hasError:!1,isLoading:!0},e.state=e.initialState,e._isMounted=!1,e.refCallback=function(t){e.container=t},e}c()(e,t);var n=e.prototype;return n.renderSVG=function(){var t=this;if(this.container instanceof Node){var e,n=this.props,r=n.beforeInjection,i=n.evalScripts,o=n.renumerateIRIElements,u=n.src,a=n.useRequestCache,c=this.props.afterInjection,s=this.props.wrapper;"svg"===s?((e=document.createElementNS(C,s)).setAttribute("xmlns",C),e.setAttribute("xmlns:xlink",I)):e=document.createElement(s),e.dataset.src=u,this.nonReactElement=this.container.appendChild(e);!function(t,e){var n=void 0===e?{}:e,r=n.afterAll,i=void 0===r?function(){}:r,o=n.afterEach,u=void 0===o?function(){}:o,a=n.beforeEach,c=void 0===a?function(){}:a,s=n.cacheRequests,M=void 0===s||s,l=n.evalScripts,L=void 0===l?"never":l,N=n.renumerateIRIElements,f=void 0===N||N;if(t&&"length"in t)for(var T=0,w=0,j=t.length;w<j;w++)m(t[w],L,f,M,c,(function(e,n){u(e,n),t&&"length"in t&&t.length===++T&&i(T)}));else t?m(t,L,f,M,c,(function(e,n){u(e,n),i(1),t=null})):i(0)}(e,{afterEach:function(e,n){!e||(t.removeSVG(),t._isMounted)?(t.nonReactElement=n,t._isMounted&&t.setState((function(){return{hasError:!!e,isLoading:!1}}),(function(){c(e,n)}))):c(e)},beforeEach:r,cacheRequests:a,evalScripts:i,renumerateIRIElements:o})}},n.removeSVG=function(){this.container instanceof Node&&this.nonReactElement instanceof Node&&(this.container.removeChild(this.nonReactElement),this.nonReactElement=null)},n.componentDidMount=function(){this._isMounted=!0,this.renderSVG()},n.componentDidUpdate=function(t){var e=this;(function(t,e){for(var n in t)if(!(n in e))return!0;for(var r in e)if(t[r]!==e[r])return!0;return!1})(t,this.props)&&this.setState((function(){return e.initialState}),(function(){e.removeSVG(),e.renderSVG()}))},n.componentWillUnmount=function(){this._isMounted=!1,this.removeSVG()},n.render=function(){var t=this.props;t.afterInjection,t.beforeInjection,t.evalScripts;var e=t.fallback,n=t.loading;t.renumerateIRIElements,t.src,t.useRequestCache;var i=t.wrapper,o=u()(t,["afterInjection","beforeInjection","evalScripts","fallback","loading","renumerateIRIElements","src","useRequestCache","wrapper"]),a=i;return r.createElement(a,Object.assign({},o,{ref:this.refCallback},"svg"===i?{xmlns:C,xmlnsXlink:I}:{}),this.state.isLoading&&n&&r.createElement(n,null),this.state.hasError&&e&&r.createElement(e,null))},e}(r.Component);h.defaultProps={afterInjection:function(){},beforeInjection:function(){},evalScripts:"never",fallback:null,loading:null,renumerateIRIElements:!0,useRequestCache:!0,wrapper:"div"};var E="undefined"!=typeof window&&window.localStorage;var b=Object.freeze({light:"light",dark:"dark"});function v(){var t=r.useState((function(){return function(t){if(E)return window.localStorage.getItem(t)}("theme")||b.light})),e=t[0],n=t[1];return(0,r.useEffect)((function(){var t,n,r,o=document.getElementsByTagName("html")[0];(t=o.classList).remove.apply(t,(0,i.Z)(Object.values(b))),o.classList.add(e),n="theme",r=e,E&&window.localStorage.setItem(n,r)}),[e]),r.createElement("header",{className:"header-module--header--2GXhr"},r.createElement("button",{className:"header-module--toggleButton--1mKKO",onClick:function(){n((function(t){return t===b.light?b.dark:b.light}))},title:e===b.light?"Switch to dark theme":"Switch to light theme"},r.createElement(h,{src:e===b.light?"data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pg0KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE5LjAuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPg0KPHN2ZyB2ZXJzaW9uPSIxLjEiIGlkPSJDYXBhXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4Ig0KCSB2aWV3Qm94PSIwIDAgMzAyLjQgMzAyLjQiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDMwMi40IDMwMi40OyIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSI+DQo8Zz4NCgk8Zz4NCgkJPGc+DQoJCQk8cGF0aCBkPSJNMjA0LjgsOTcuNkMxOTEuMiw4NCwxNzIsNzUuMiwxNTEuMiw3NS4ycy00MCw4LjQtNTMuNiwyMi40Yy0xMy42LDEzLjYtMjIuNCwzMi44LTIyLjQsNTMuNnM4LjgsNDAsMjIuNCw1My42DQoJCQkJYzEzLjYsMTMuNiwzMi44LDIyLjQsNTMuNiwyMi40czQwLTguNCw1My42LTIyLjRjMTMuNi0xMy42LDIyLjQtMzIuOCwyMi40LTUzLjZTMjE4LjgsMTExLjIsMjA0LjgsOTcuNnoiLz4NCgkJCTxwYXRoIGQ9Ik0xNTEuMiw1MS42YzUuNiwwLDEwLjQtNC44LDEwLjQtMTAuNFYxMC40YzAtNS42LTQuOC0xMC40LTEwLjQtMTAuNGMtNS42LDAtMTAuNCw0LjgtMTAuNCwxMC40djMwLjgNCgkJCQlDMTQwLjgsNDYuOCwxNDUuNiw1MS42LDE1MS4yLDUxLjZ6Ii8+DQoJCQk8cGF0aCBkPSJNMjM2LjQsODAuOGwyMi0yMmM0LTQsNC0xMC40LDAtMTQuNHMtMTAuNC00LTE0LjQsMGwtMjIsMjJjLTQsNC00LDEwLjQsMCwxNC40QzIyNS42LDg0LjgsMjMyLDg0LjgsMjM2LjQsODAuOHoiLz4NCgkJCTxwYXRoIGQ9Ik0yOTIsMTQwLjhoLTMwLjhjLTUuNiwwLTEwLjQsNC44LTEwLjQsMTAuNGMwLDUuNiw0LjgsMTAuNCwxMC40LDEwLjRIMjkyYzUuNiwwLDEwLjQtNC44LDEwLjQtMTAuNA0KCQkJCUMzMDIuNCwxNDUuNiwyOTcuNiwxNDAuOCwyOTIsMTQwLjh6Ii8+DQoJCQk8cGF0aCBkPSJNMjM2LDIyMS42Yy00LTQtMTAuNC00LTE0LjQsMHMtNCwxMC40LDAsMTQuNGwyMiwyMmM0LDQsMTAuNCw0LDE0LjQsMHM0LTEwLjQsMC0xNC40TDIzNiwyMjEuNnoiLz4NCgkJCTxwYXRoIGQ9Ik0xNTEuMiwyNTAuOGMtNS42LDAtMTAuNCw0LjgtMTAuNCwxMC40VjI5MmMwLDUuNiw0LjgsMTAuNCwxMC40LDEwLjRjNS42LDAsMTAuNC00LjgsMTAuNC0xMC40di0zMC44DQoJCQkJQzE2MS42LDI1NS42LDE1Ni44LDI1MC44LDE1MS4yLDI1MC44eiIvPg0KCQkJPHBhdGggZD0iTTY2LDIyMS42bC0yMiwyMmMtNCw0LTQsMTAuNCwwLDE0LjRzMTAuNCw0LDE0LjQsMGwyMi0yMmM0LTQsNC0xMC40LDAtMTQuNEM3Ni44LDIxNy42LDcwLjQsMjE3LjYsNjYsMjIxLjZ6Ii8+DQoJCQk8cGF0aCBkPSJNNTEuNiwxNTEuMmMwLTUuNi00LjgtMTAuNC0xMC40LTEwLjRIMTAuNGMtNS42LDAtMTAuNCw0LjgtMTAuNCwxMC40czQuOCwxMC40LDEwLjQsMTAuNGgzMC44DQoJCQkJQzQ2LjgsMTYxLjYsNTEuNiwxNTYuOCw1MS42LDE1MS4yeiIvPg0KCQkJPHBhdGggZD0iTTY2LDgwLjhjNCw0LDEwLjQsNCwxNC40LDBzNC0xMC40LDAtMTQuNGwtMjItMjJjLTQtNC0xMC40LTQtMTQuNCwwcy00LDEwLjQsMCwxNC40TDY2LDgwLjh6Ii8+DQoJCTwvZz4NCgk8L2c+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8L3N2Zz4NCg==":"data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pg0KPHN2ZyB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4Ig0KCSB2aWV3Qm94PSIwIDAgMzEyLjgxMiAzMTIuODEyIiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCAzMTIuODEyIDMxMi44MTI7IiB4bWw6c3BhY2U9InByZXNlcnZlIj4NCjxnIHRyYW5zZm9ybT0icm90YXRlKDI3MCwxNTYsMTU2KSI+DQoJPHBhdGggZmlsbD0iI2ZmZmZmZiIgZD0iTTMwNS4yLDE3OC4xNTljLTMuMi0wLjgtNi40LDAtOS4yLDJjLTEwLjQsOC44LTIyLjQsMTYtMzUuNiwyMC44Yy0xMi40LDQuOC0yNiw3LjItNDAuNCw3LjJjLTMyLjQsMC02Mi0xMy4yLTgzLjItMzQuNA0KCQljLTIxLjItMjEuMi0zNC40LTUwLjgtMzQuNC04My4yYzAtMTMuNiwyLjQtMjYuOCw2LjQtMzguOGM0LjQtMTIuOCwxMC44LTI0LjQsMTkuMi0zNC40YzMuNi00LjQsMi44LTEwLjgtMS42LTE0LjQNCgkJYy0yLjgtMi02LTIuOC05LjItMmMtMzQsOS4yLTYzLjYsMjkuNi04NC44LDU2LjhjLTIwLjQsMjYuOC0zMi40LDYwLTMyLjQsOTZjMCw0My42LDE3LjYsODMuMiw0Ni40LDExMnM2OCw0Ni40LDExMiw0Ni40DQoJCWMzNi44LDAsNzAuOC0xMi44LDk4LTM0YzI3LjYtMjEuNiw0Ny42LTUyLjQsNTYtODcuNkMzMTQsMTg0Ljk1OSwzMTAuOCwxNzkuMzU5LDMwNS4yLDE3OC4xNTl6IiAvPg0KPC9nPg0KPC9zdmc+DQo=",alt:e===b.light?"Light theme active":"Dark theme active",className:"header-module--icon--3eGkE"})))}var A=n.p+"static/avatar-d2b56cbe5d03947ddcaf31f232c04354.png",z=n.p+"static/avatar-2-cbfdd8b6c93887a6096bf65f7b6dcfcb.png",S=n.p+"static/avatar-3-dc27f9a38b1ad42f0335fe3a323eda09.png";var O=[{name:"Carlos Github",link:"https://github.com/csilva2810",icon:"data:image/svg+xml;base64,PHN2ZyBlbmFibGUtYmFja2dyb3VuZD0ibmV3IDAgMCAyNCAyNCIgdmlld0JveD0iMCAwIDI0IDI0IiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxwYXRoIGQ9Im0xMiAuNWMtNi42MyAwLTEyIDUuMjgtMTIgMTEuNzkyIDAgNS4yMTEgMy40MzggOS42MyA4LjIwNSAxMS4xODguNi4xMTEuODItLjI1NC44Mi0uNTY3IDAtLjI4LS4wMS0xLjAyMi0uMDE1LTIuMDA1LTMuMzM4LjcxMS00LjA0Mi0xLjU4Mi00LjA0Mi0xLjU4Mi0uNTQ2LTEuMzYxLTEuMzM1LTEuNzI1LTEuMzM1LTEuNzI1LTEuMDg3LS43MzEuMDg0LS43MTYuMDg0LS43MTYgMS4yMDUuMDgyIDEuODM4IDEuMjE1IDEuODM4IDEuMjE1IDEuMDcgMS44MDMgMi44MDkgMS4yODIgMy40OTUuOTgxLjEwOC0uNzYzLjQxNy0xLjI4Mi43Ni0xLjU3Ny0yLjY2NS0uMjk1LTUuNDY2LTEuMzA5LTUuNDY2LTUuODI3IDAtMS4yODcuNDY1LTIuMzM5IDEuMjM1LTMuMTY0LS4xMzUtLjI5OC0uNTQtMS40OTcuMTA1LTMuMTIxIDAgMCAxLjAwNS0uMzE2IDMuMyAxLjIwOS45Ni0uMjYyIDEuOTgtLjM5MiAzLS4zOTggMS4wMi4wMDYgMi4wNC4xMzYgMyAuMzk4IDIuMjgtMS41MjUgMy4yODUtMS4yMDkgMy4yODUtMS4yMDkuNjQ1IDEuNjI0LjI0IDIuODIzLjEyIDMuMTIxLjc2NS44MjUgMS4yMyAxLjg3NyAxLjIzIDMuMTY0IDAgNC41My0yLjgwNSA1LjUyNy01LjQ3NSA1LjgxNy40Mi4zNTQuODEgMS4wNzcuODEgMi4xODIgMCAxLjU3OC0uMDE1IDIuODQ2LS4wMTUgMy4yMjkgMCAuMzA5LjIxLjY3OC44MjUuNTYgNC44MDEtMS41NDggOC4yMzYtNS45NyA4LjIzNi0xMS4xNzMgMC02LjUxMi01LjM3My0xMS43OTItMTItMTEuNzkyeiIgZmlsbD0iaW5oZXJpdCIvPjwvc3ZnPg=="},{name:"Carlos LinkedIn",link:"https://www.linkedin.com/in/carlos-silva/",icon:"data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pg0KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE5LjAuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPg0KPHN2ZyB2ZXJzaW9uPSIxLjEiIGlkPSJMYXllcl8xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB4PSIwcHgiIHk9IjBweCINCgkgdmlld0JveD0iMCAwIDM4MiAzODIiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDM4MiAzODI7IiB4bWw6c3BhY2U9InByZXNlcnZlIj4NCjxwYXRoIGZpbGw9ImluaGVyaXQiIGQ9Ik0zNDcuNDQ1LDBIMzQuNTU1QzE1LjQ3MSwwLDAsMTUuNDcxLDAsMzQuNTU1djMxMi44ODlDMCwzNjYuNTI5LDE1LjQ3MSwzODIsMzQuNTU1LDM4MmgzMTIuODg5DQoJQzM2Ni41MjksMzgyLDM4MiwzNjYuNTI5LDM4MiwzNDcuNDQ0VjM0LjU1NUMzODIsMTUuNDcxLDM2Ni41MjksMCwzNDcuNDQ1LDB6IE0xMTguMjA3LDMyOS44NDRjMCw1LjU1NC00LjUwMiwxMC4wNTYtMTAuMDU2LDEwLjA1Ng0KCUg2NS4zNDVjLTUuNTU0LDAtMTAuMDU2LTQuNTAyLTEwLjA1Ni0xMC4wNTZWMTUwLjQwM2MwLTUuNTU0LDQuNTAyLTEwLjA1NiwxMC4wNTYtMTAuMDU2aDQyLjgwNg0KCWM1LjU1NCwwLDEwLjA1Niw0LjUwMiwxMC4wNTYsMTAuMDU2VjMyOS44NDR6IE04Ni43NDgsMTIzLjQzMmMtMjIuNDU5LDAtNDAuNjY2LTE4LjIwNy00MC42NjYtNDAuNjY2UzY0LjI4OSw0Mi4xLDg2Ljc0OCw0Mi4xDQoJczQwLjY2NiwxOC4yMDcsNDAuNjY2LDQwLjY2NlMxMDkuMjA4LDEyMy40MzIsODYuNzQ4LDEyMy40MzJ6IE0zNDEuOTEsMzMwLjY1NGMwLDUuMTA2LTQuMTQsOS4yNDYtOS4yNDYsOS4yNDZIMjg2LjczDQoJYy01LjEwNiwwLTkuMjQ2LTQuMTQtOS4yNDYtOS4yNDZ2LTg0LjE2OGMwLTEyLjU1NiwzLjY4My01NS4wMjEtMzIuODEzLTU1LjAyMWMtMjguMzA5LDAtMzQuMDUxLDI5LjA2Ni0zNS4yMDQsNDIuMTF2OTcuMDc5DQoJYzAsNS4xMDYtNC4xMzksOS4yNDYtOS4yNDYsOS4yNDZoLTQ0LjQyNmMtNS4xMDYsMC05LjI0Ni00LjE0LTkuMjQ2LTkuMjQ2VjE0OS41OTNjMC01LjEwNiw0LjE0LTkuMjQ2LDkuMjQ2LTkuMjQ2aDQ0LjQyNg0KCWM1LjEwNiwwLDkuMjQ2LDQuMTQsOS4yNDYsOS4yNDZ2MTUuNjU1YzEwLjQ5Ny0xNS43NTMsMjYuMDk3LTI3LjkxMiw1OS4zMTItMjcuOTEyYzczLjU1MiwwLDczLjEzMSw2OC43MTYsNzMuMTMxLDEwNi40NzINCglMMzQxLjkxLDMzMC42NTRMMzQxLjkxLDMzMC42NTR6IiAvPg0KPC9zdmc+DQo="},{name:"Carlos Twitter",link:"https://twitter.com/csilva2810",icon:"data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pg0KPHN2ZyB2ZXJzaW9uPSIxLjEiIGlkPSJDYXBhXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4Ig0KCSB2aWV3Qm94PSIwIDAgNTEyIDUxMiIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgNTEyIDUxMjsiIHhtbDpzcGFjZT0icHJlc2VydmUiPg0KPHBhdGggZmlsbD0iaW5oZXJpdCIgZD0iTTUxMiw5Ny4yNDhjLTE5LjA0LDguMzUyLTM5LjMyOCwxMy44ODgtNjAuNDgsMTYuNTc2YzIxLjc2LTEyLjk5MiwzOC4zNjgtMzMuNDA4LDQ2LjE3Ni01OC4wMTYNCgljLTIwLjI4OCwxMi4wOTYtNDIuNjg4LDIwLjY0LTY2LjU2LDI1LjQwOEM0MTEuODcyLDYwLjcwNCwzODQuNDE2LDQ4LDM1NC40NjQsNDhjLTU4LjExMiwwLTEwNC44OTYsNDcuMTY4LTEwNC44OTYsMTA0Ljk5Mg0KCWMwLDguMzIsMC43MDQsMTYuMzIsMi40MzIsMjMuOTM2Yy04Ny4yNjQtNC4yNTYtMTY0LjQ4LTQ2LjA4LTIxNi4zNTItMTA5Ljc5MmMtOS4wNTYsMTUuNzEyLTE0LjM2OCwzMy42OTYtMTQuMzY4LDUzLjA1Ng0KCWMwLDM2LjM1MiwxOC43Miw2OC41NzYsNDYuNjI0LDg3LjIzMmMtMTYuODY0LTAuMzItMzMuNDA4LTUuMjE2LTQ3LjQyNC0xMi45MjhjMCwwLjMyLDAsMC43MzYsMCwxLjE1Mg0KCWMwLDUxLjAwOCwzNi4zODQsOTMuMzc2LDg0LjA5NiwxMDMuMTM2Yy04LjU0NCwyLjMzNi0xNy44NTYsMy40NTYtMjcuNTIsMy40NTZjLTYuNzIsMC0xMy41MDQtMC4zODQtMTkuODcyLTEuNzkyDQoJYzEzLjYsNDEuNTY4LDUyLjE5Miw3Mi4xMjgsOTguMDgsNzMuMTJjLTM1LjcxMiwyNy45MzYtODEuMDU2LDQ0Ljc2OC0xMzAuMTQ0LDQ0Ljc2OGMtOC42MDgsMC0xNi44NjQtMC4zODQtMjUuMTItMS40NA0KCUM0Ni40OTYsNDQ2Ljg4LDEwMS42LDQ2NCwxNjEuMDI0LDQ2NGMxOTMuMTUyLDAsMjk4Ljc1Mi0xNjAsMjk4Ljc1Mi0yOTguNjg4YzAtNC42NC0wLjE2LTkuMTItMC4zODQtMTMuNTY4DQoJQzQ4MC4yMjQsMTM2Ljk2LDQ5Ny43MjgsMTE4LjQ5Niw1MTIsOTcuMjQ4eiIvPg0KPC9zdmc+DQo="},{name:"Carlos E-mail",link:"mailto:csilva2810@gmail.com",icon:"data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pg0KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE5LjAuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPg0KPHN2ZyB2ZXJzaW9uPSIxLjEiIGlkPSJMYXllcl8xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB4PSIwcHgiIHk9IjBweCINCgkgdmlld0JveD0iMCAwIDUxMiA1MTIiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDUxMiA1MTI7IiB4bWw6c3BhY2U9InByZXNlcnZlIj4NCjxnPg0KCTxnPg0KCQk8Zz4NCgkJCTxwYXRoIGZpbGw9ImluaGVyaXQiIGQ9Ik0xMC42ODgsOTUuMTU2QzgwLjk1OCwxNTQuNjY3LDIwNC4yNiwyNTkuMzY1LDI0MC41LDI5Mi4wMWM0Ljg2NSw0LjQwNiwxMC4wODMsNi42NDYsMTUuNSw2LjY0Ng0KCQkJCWM1LjQwNiwwLDEwLjYxNS0yLjIxOSwxNS40NjktNi42MDRjMzYuMjcxLTMyLjY3NywxNTkuNTczLTEzNy4zODUsMjI5Ljg0NC0xOTYuODk2YzQuMzc1LTMuNjk4LDUuMDQyLTEwLjE5OCwxLjUtMTQuNzE5DQoJCQkJQzQ5NC42MjUsNjkuOTksNDgyLjQxNyw2NCw0NjkuMzMzLDY0SDQyLjY2N2MtMTMuMDgzLDAtMjUuMjkyLDUuOTktMzMuNDc5LDE2LjQzOEM1LjY0Niw4NC45NTgsNi4zMTMsOTEuNDU4LDEwLjY4OCw5NS4xNTZ6Ii8+DQoJCQk8cGF0aCBmaWxsPSJpbmhlcml0IiBkPSJNNTA1LjgxMywxMjcuNDA2Yy0zLjc4MS0xLjc2LTguMjI5LTEuMTQ2LTExLjM3NSwxLjU0MkM0MTYuNTEsMTk1LjAxLDMxNy4wNTIsMjc5LjY4OCwyODUuNzYsMzA3Ljg4NQ0KCQkJCWMtMTcuNTYzLDE1Ljg1NC00MS45MzgsMTUuODU0LTU5LjU0Mi0wLjAyMWMtMzMuMzU0LTMwLjA1Mi0xNDUuMDQyLTEyNS0yMDguNjU2LTE3OC45MTdjLTMuMTY3LTIuNjg4LTcuNjI1LTMuMjgxLTExLjM3NS0xLjU0Mg0KCQkJCUMyLjQxNywxMjkuMTU2LDAsMTMyLjkyNywwLDEzNy4wODN2MjY4LjI1QzAsNDI4Ljg2NSwxOS4xMzUsNDQ4LDQyLjY2Nyw0NDhoNDI2LjY2N0M0OTIuODY1LDQ0OCw1MTIsNDI4Ljg2NSw1MTIsNDA1LjMzMw0KCQkJCXYtMjY4LjI1QzUxMiwxMzIuOTI3LDUwOS41ODMsMTI5LjE0Niw1MDUuODEzLDEyNy40MDZ6Ii8+DQoJCTwvZz4NCgk8L2c+DQo8L2c+DQo8L3N2Zz4NCg=="}];function x(){var t=(0,r.useState)([A,z,S])[0],e=(0,r.useState)(0),n=e[0],i=e[1];return(0,r.useEffect)((function(){var e=setTimeout((function(){i((function(e){return(e+1)%t.length}))}),3e3);return function(){clearTimeout(e)}}),[n,t.length]),r.createElement("div",{className:"profile-module--container--vaSDu"},r.createElement("img",{className:"profile-module--image--3Fg2X",src:t[n],alt:"Carlos avatar"}),r.createElement("h3",{className:"profile-module--title--2JmWB"},"Hi, I'm Carlos!"),r.createElement("p",null,"I'm a Front-End engineer from São Paulo, Brazil."," ",r.createElement("span",{role:"img","aria-label":"Brazil flag"},"🇧🇷")),r.createElement("ul",{className:"profile-module--contactList--1OdzZ"},O.map((function(t){var e=t.name,n=t.link,i=t.icon;return r.createElement("li",{key:e},r.createElement("a",{href:n,className:"profile-module--link--4d4Bp"},r.createElement(h,{src:i,alt:e,className:"profile-module--icon--3aANT"})))}))))}function Q(t){var e=t.children;return r.createElement("div",{className:"hero-module--hero--3n9n6"},e)}var k,Y,U,P,Z=n(5697),G=n.n(Z),J=n(4839),H=n.n(J),B=n(2993),R=n.n(B),V=n(6494),W=n.n(V),K="bodyAttributes",X="htmlAttributes",F="titleAttributes",_={BASE:"base",BODY:"body",HEAD:"head",HTML:"html",LINK:"link",META:"meta",NOSCRIPT:"noscript",SCRIPT:"script",STYLE:"style",TITLE:"title"},q=(Object.keys(_).map((function(t){return _[t]})),"charset"),$="cssText",tt="href",et="http-equiv",nt="innerHTML",rt="itemprop",it="name",ot="property",ut="rel",at="src",ct="target",st={accesskey:"accessKey",charset:"charSet",class:"className",contenteditable:"contentEditable",contextmenu:"contextMenu","http-equiv":"httpEquiv",itemprop:"itemProp",tabindex:"tabIndex"},Mt="defaultTitle",lt="defer",Lt="encodeSpecialCharacters",Nt="onChangeClientState",ft="titleTemplate",Tt=Object.keys(st).reduce((function(t,e){return t[st[e]]=e,t}),{}),wt=[_.NOSCRIPT,_.SCRIPT,_.STYLE],jt="data-react-helmet",yt="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},gt=function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")},dt=function(){function t(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}return function(e,n,r){return n&&t(e.prototype,n),r&&t(e,r),e}}(),pt=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},Dt=function(t,e){var n={};for(var r in t)e.indexOf(r)>=0||Object.prototype.hasOwnProperty.call(t,r)&&(n[r]=t[r]);return n},mt=function(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e},Ct=function(t){var e=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];return!1===e?String(t):String(t).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#x27;")},It=function(t){var e=At(t,_.TITLE),n=At(t,ft);if(n&&e)return n.replace(/%s/g,(function(){return Array.isArray(e)?e.join(""):e}));var r=At(t,Mt);return e||r||void 0},ht=function(t){return At(t,Nt)||function(){}},Et=function(t,e){return e.filter((function(e){return void 0!==e[t]})).map((function(e){return e[t]})).reduce((function(t,e){return pt({},t,e)}),{})},bt=function(t,e){return e.filter((function(t){return void 0!==t[_.BASE]})).map((function(t){return t[_.BASE]})).reverse().reduce((function(e,n){if(!e.length)for(var r=Object.keys(n),i=0;i<r.length;i++){var o=r[i].toLowerCase();if(-1!==t.indexOf(o)&&n[o])return e.concat(n)}return e}),[])},vt=function(t,e,n){var r={};return n.filter((function(e){return!!Array.isArray(e[t])||(void 0!==e[t]&&Qt("Helmet: "+t+' should be of type "Array". Instead found type "'+yt(e[t])+'"'),!1)})).map((function(e){return e[t]})).reverse().reduce((function(t,n){var i={};n.filter((function(t){for(var n=void 0,o=Object.keys(t),u=0;u<o.length;u++){var a=o[u],c=a.toLowerCase();-1===e.indexOf(c)||n===ut&&"canonical"===t[n].toLowerCase()||c===ut&&"stylesheet"===t[c].toLowerCase()||(n=c),-1===e.indexOf(a)||a!==nt&&a!==$&&a!==rt||(n=a)}if(!n||!t[n])return!1;var s=t[n].toLowerCase();return r[n]||(r[n]={}),i[n]||(i[n]={}),!r[n][s]&&(i[n][s]=!0,!0)})).reverse().forEach((function(e){return t.push(e)}));for(var o=Object.keys(i),u=0;u<o.length;u++){var a=o[u],c=W()({},r[a],i[a]);r[a]=c}return t}),[]).reverse()},At=function(t,e){for(var n=t.length-1;n>=0;n--){var r=t[n];if(r.hasOwnProperty(e))return r[e]}return null},zt=(k=Date.now(),function(t){var e=Date.now();e-k>16?(k=e,t(e)):setTimeout((function(){zt(t)}),0)}),St=function(t){return clearTimeout(t)},Ot="undefined"!=typeof window?window.requestAnimationFrame&&window.requestAnimationFrame.bind(window)||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||zt:n.g.requestAnimationFrame||zt,xt="undefined"!=typeof window?window.cancelAnimationFrame||window.webkitCancelAnimationFrame||window.mozCancelAnimationFrame||St:n.g.cancelAnimationFrame||St,Qt=function(t){return console&&"function"==typeof console.warn&&console.warn(t)},kt=null,Yt=function(t,e){var n=t.baseTag,r=t.bodyAttributes,i=t.htmlAttributes,o=t.linkTags,u=t.metaTags,a=t.noscriptTags,c=t.onChangeClientState,s=t.scriptTags,M=t.styleTags,l=t.title,L=t.titleAttributes;Zt(_.BODY,r),Zt(_.HTML,i),Pt(l,L);var N={baseTag:Gt(_.BASE,n),linkTags:Gt(_.LINK,o),metaTags:Gt(_.META,u),noscriptTags:Gt(_.NOSCRIPT,a),scriptTags:Gt(_.SCRIPT,s),styleTags:Gt(_.STYLE,M)},f={},T={};Object.keys(N).forEach((function(t){var e=N[t],n=e.newTags,r=e.oldTags;n.length&&(f[t]=n),r.length&&(T[t]=N[t].oldTags)})),e&&e(),c(t,f,T)},Ut=function(t){return Array.isArray(t)?t.join(""):t},Pt=function(t,e){void 0!==t&&document.title!==t&&(document.title=Ut(t)),Zt(_.TITLE,e)},Zt=function(t,e){var n=document.getElementsByTagName(t)[0];if(n){for(var r=n.getAttribute(jt),i=r?r.split(","):[],o=[].concat(i),u=Object.keys(e),a=0;a<u.length;a++){var c=u[a],s=e[c]||"";n.getAttribute(c)!==s&&n.setAttribute(c,s),-1===i.indexOf(c)&&i.push(c);var M=o.indexOf(c);-1!==M&&o.splice(M,1)}for(var l=o.length-1;l>=0;l--)n.removeAttribute(o[l]);i.length===o.length?n.removeAttribute(jt):n.getAttribute(jt)!==u.join(",")&&n.setAttribute(jt,u.join(","))}},Gt=function(t,e){var n=document.head||document.querySelector(_.HEAD),r=n.querySelectorAll(t+"["+"data-react-helmet]"),i=Array.prototype.slice.call(r),o=[],u=void 0;return e&&e.length&&e.forEach((function(e){var n=document.createElement(t);for(var r in e)if(e.hasOwnProperty(r))if(r===nt)n.innerHTML=e.innerHTML;else if(r===$)n.styleSheet?n.styleSheet.cssText=e.cssText:n.appendChild(document.createTextNode(e.cssText));else{var a=void 0===e[r]?"":e[r];n.setAttribute(r,a)}n.setAttribute(jt,"true"),i.some((function(t,e){return u=e,n.isEqualNode(t)}))?i.splice(u,1):o.push(n)})),i.forEach((function(t){return t.parentNode.removeChild(t)})),o.forEach((function(t){return n.appendChild(t)})),{oldTags:i,newTags:o}},Jt=function(t){return Object.keys(t).reduce((function(e,n){var r=void 0!==t[n]?n+'="'+t[n]+'"':""+n;return e?e+" "+r:r}),"")},Ht=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object.keys(t).reduce((function(e,n){return e[st[n]||n]=t[n],e}),e)},Bt=function(t,e,n){switch(t){case _.TITLE:return{toComponent:function(){return function(t,e,n){var i,o=((i={key:e})[jt]=!0,i),u=Ht(n,o);return[r.createElement(_.TITLE,u,e)]}(0,e.title,e.titleAttributes)},toString:function(){return function(t,e,n,r){var i=Jt(n),o=Ut(e);return i?"<"+t+' data-react-helmet="true" '+i+">"+Ct(o,r)+"</"+t+">":"<"+t+' data-react-helmet="true">'+Ct(o,r)+"</"+t+">"}(t,e.title,e.titleAttributes,n)}};case K:case X:return{toComponent:function(){return Ht(e)},toString:function(){return Jt(e)}};default:return{toComponent:function(){return function(t,e){return e.map((function(e,n){var i,o=((i={key:n})[jt]=!0,i);return Object.keys(e).forEach((function(t){var n=st[t]||t;if(n===nt||n===$){var r=e.innerHTML||e.cssText;o.dangerouslySetInnerHTML={__html:r}}else o[n]=e[t]})),r.createElement(t,o)}))}(t,e)},toString:function(){return function(t,e,n){return e.reduce((function(e,r){var i=Object.keys(r).filter((function(t){return!(t===nt||t===$)})).reduce((function(t,e){var i=void 0===r[e]?e:e+'="'+Ct(r[e],n)+'"';return t?t+" "+i:i}),""),o=r.innerHTML||r.cssText||"",u=-1===wt.indexOf(t);return e+"<"+t+' data-react-helmet="true" '+i+(u?"/>":">"+o+"</"+t+">")}),"")}(t,e,n)}}}},Rt=function(t){var e=t.baseTag,n=t.bodyAttributes,r=t.encode,i=t.htmlAttributes,o=t.linkTags,u=t.metaTags,a=t.noscriptTags,c=t.scriptTags,s=t.styleTags,M=t.title,l=void 0===M?"":M,L=t.titleAttributes;return{base:Bt(_.BASE,e,r),bodyAttributes:Bt(K,n,r),htmlAttributes:Bt(X,i,r),link:Bt(_.LINK,o,r),meta:Bt(_.META,u,r),noscript:Bt(_.NOSCRIPT,a,r),script:Bt(_.SCRIPT,c,r),style:Bt(_.STYLE,s,r),title:Bt(_.TITLE,{title:l,titleAttributes:L},r)}},Vt=H()((function(t){return{baseTag:bt([tt,ct],t),bodyAttributes:Et(K,t),defer:At(t,lt),encode:At(t,Lt),htmlAttributes:Et(X,t),linkTags:vt(_.LINK,[ut,tt],t),metaTags:vt(_.META,[it,q,et,ot,rt],t),noscriptTags:vt(_.NOSCRIPT,[nt],t),onChangeClientState:ht(t),scriptTags:vt(_.SCRIPT,[at,nt],t),styleTags:vt(_.STYLE,[$],t),title:It(t),titleAttributes:Et(F,t)}}),(function(t){kt&&xt(kt),t.defer?kt=Ot((function(){Yt(t,(function(){kt=null}))})):(Yt(t),kt=null)}),Rt)((function(){return null})),Wt=(Y=Vt,P=U=function(t){function e(){return gt(this,e),mt(this,t.apply(this,arguments))}return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}(e,t),e.prototype.shouldComponentUpdate=function(t){return!R()(this.props,t)},e.prototype.mapNestedChildrenToProps=function(t,e){if(!e)return null;switch(t.type){case _.SCRIPT:case _.NOSCRIPT:return{innerHTML:e};case _.STYLE:return{cssText:e}}throw new Error("<"+t.type+" /> elements are self-closing and can not contain children. Refer to our API for more information.")},e.prototype.flattenArrayTypeChildren=function(t){var e,n=t.child,r=t.arrayTypeChildren,i=t.newChildProps,o=t.nestedChildren;return pt({},r,((e={})[n.type]=[].concat(r[n.type]||[],[pt({},i,this.mapNestedChildrenToProps(n,o))]),e))},e.prototype.mapObjectTypeChildren=function(t){var e,n,r=t.child,i=t.newProps,o=t.newChildProps,u=t.nestedChildren;switch(r.type){case _.TITLE:return pt({},i,((e={})[r.type]=u,e.titleAttributes=pt({},o),e));case _.BODY:return pt({},i,{bodyAttributes:pt({},o)});case _.HTML:return pt({},i,{htmlAttributes:pt({},o)})}return pt({},i,((n={})[r.type]=pt({},o),n))},e.prototype.mapArrayTypeChildrenToProps=function(t,e){var n=pt({},e);return Object.keys(t).forEach((function(e){var r;n=pt({},n,((r={})[e]=t[e],r))})),n},e.prototype.warnOnInvalidChildren=function(t,e){return!0},e.prototype.mapChildrenToProps=function(t,e){var n=this,i={};return r.Children.forEach(t,(function(t){if(t&&t.props){var r=t.props,o=r.children,u=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object.keys(t).reduce((function(e,n){return e[Tt[n]||n]=t[n],e}),e)}(Dt(r,["children"]));switch(n.warnOnInvalidChildren(t,o),t.type){case _.LINK:case _.META:case _.NOSCRIPT:case _.SCRIPT:case _.STYLE:i=n.flattenArrayTypeChildren({child:t,arrayTypeChildren:i,newChildProps:u,nestedChildren:o});break;default:e=n.mapObjectTypeChildren({child:t,newProps:e,newChildProps:u,nestedChildren:o})}}})),e=this.mapArrayTypeChildrenToProps(i,e)},e.prototype.render=function(){var t=this.props,e=t.children,n=Dt(t,["children"]),i=pt({},n);return e&&(i=this.mapChildrenToProps(e,i)),r.createElement(Y,i)},dt(e,null,[{key:"canUseDOM",set:function(t){Y.canUseDOM=t}}]),e}(r.Component),U.propTypes={base:G().object,bodyAttributes:G().object,children:G().oneOfType([G().arrayOf(G().node),G().node]),defaultTitle:G().string,defer:G().bool,encodeSpecialCharacters:G().bool,htmlAttributes:G().object,link:G().arrayOf(G().object),meta:G().arrayOf(G().object),noscript:G().arrayOf(G().object),onChangeClientState:G().func,script:G().arrayOf(G().object),style:G().arrayOf(G().object),title:G().string,titleAttributes:G().object,titleTemplate:G().string},U.defaultProps={defer:!0,encodeSpecialCharacters:!0},U.peek=Y.peek,U.rewind=function(){var t=Y.rewind();return t||(t=Rt({baseTag:[],bodyAttributes:{},encodeSpecialCharacters:!0,htmlAttributes:{},linkTags:[],metaTags:[],noscriptTags:[],scriptTags:[],styleTags:[],title:"",titleAttributes:{}})),t},P);Wt.renderStatic=Wt.rewind;var Kt=n(5444);function Xt(t){var e=t.description,n=t.lang,i=t.meta,o=t.title,u=(0,Kt.useStaticQuery)("63159454").site,a=o||u.siteMetadata.title,c=e||u.siteMetadata.description;return r.createElement(Wt,{htmlAttributes:{lang:n},title:a,titleTemplate:"%s | "+a,meta:[{name:"description",content:c},{property:"og:title",content:o},{property:"og:description",content:c},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:u.siteMetadata.author},{name:"twitter:title",content:o},{name:"twitter:description",content:c}].concat(i)})}Xt.defaultProps={lang:"en",meta:[],description:""};var Ft=Xt;function _t(){return r.createElement(r.Fragment,null,r.createElement(Ft,null),r.createElement(v,null),r.createElement(Q,null,r.createElement(x,null)))}}}]);
//# sourceMappingURL=component---src-pages-index-js-1a7e0585627cdbd69181.js.map