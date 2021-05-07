/*! For license information please see commons-a91bed1ac8ed4f595d3b.js.LICENSE.txt */
(self.webpackChunkcsilva2810_github_io=self.webpackChunkcsilva2810_github_io||[]).push([[351],{5900:function(t,e){var n;!function(){"use strict";var r={}.hasOwnProperty;function i(){for(var t=[],e=0;e<arguments.length;e++){var n=arguments[e];if(n){var o=typeof n;if("string"===o||"number"===o)t.push(n);else if(Array.isArray(n)){if(n.length){var a=i.apply(null,n);a&&t.push(a)}}else if("object"===o)if(n.toString===Object.prototype.toString)for(var u in n)r.call(n,u)&&n[u]&&t.push(u);else t.push(n.toString())}}return t.join(" ")}t.exports?(i.default=i,t.exports=i):void 0===(n=function(){return i}.apply(e,[]))||(t.exports=n)}()},7462:function(t,e){"use strict";var n=/; *([!#$%&'*+.^_`|~0-9A-Za-z-]+) *= *("(?:[\u000b\u0020\u0021\u0023-\u005b\u005d-\u007e\u0080-\u00ff]|\\[\u000b\u0020-\u00ff])*"|[!#$%&'*+.^_`|~0-9A-Za-z-]+) */g,r=/^[\u000b\u0020-\u007e\u0080-\u00ff]+$/,i=/^[!#$%&'*+.^_`|~0-9A-Za-z-]+$/,o=/\\([\u000b\u0020-\u00ff])/g,a=/([\\"])/g,u=/^[!#$%&'*+.^_`|~0-9A-Za-z-]+\/[!#$%&'*+.^_`|~0-9A-Za-z-]+$/;function c(t){var e=String(t);if(i.test(e))return e;if(e.length>0&&!r.test(e))throw new TypeError("invalid parameter value");return'"'+e.replace(a,"\\$1")+'"'}function s(t){this.parameters=Object.create(null),this.type=t}e.Q=function(t){if(!t)throw new TypeError("argument string is required");var e="object"==typeof t?function(t){var e;"function"==typeof t.getHeader?e=t.getHeader("content-type"):"object"==typeof t.headers&&(e=t.headers&&t.headers["content-type"]);if("string"!=typeof e)throw new TypeError("content-type header is missing from object");return e}(t):t;if("string"!=typeof e)throw new TypeError("argument string is required to be a string");var r=e.indexOf(";"),i=-1!==r?e.substr(0,r).trim():e.trim();if(!u.test(i))throw new TypeError("invalid media type");var a=new s(i.toLowerCase());if(-1!==r){var c,l,f;for(n.lastIndex=r;l=n.exec(e);){if(l.index!==r)throw new TypeError("invalid parameter format");r+=l[0].length,c=l[1].toLowerCase(),'"'===(f=l[2])[0]&&(f=f.substr(1,f.length-2).replace(o,"$1")),a.parameters[c]=f}if(r!==e.length)throw new TypeError("invalid parameter format")}return a}},2993:function(t){var e="undefined"!=typeof Element,n="function"==typeof Map,r="function"==typeof Set,i="function"==typeof ArrayBuffer&&!!ArrayBuffer.isView;function o(t,a){if(t===a)return!0;if(t&&a&&"object"==typeof t&&"object"==typeof a){if(t.constructor!==a.constructor)return!1;var u,c,s,l;if(Array.isArray(t)){if((u=t.length)!=a.length)return!1;for(c=u;0!=c--;)if(!o(t[c],a[c]))return!1;return!0}if(n&&t instanceof Map&&a instanceof Map){if(t.size!==a.size)return!1;for(l=t.entries();!(c=l.next()).done;)if(!a.has(c.value[0]))return!1;for(l=t.entries();!(c=l.next()).done;)if(!o(c.value[1],a.get(c.value[0])))return!1;return!0}if(r&&t instanceof Set&&a instanceof Set){if(t.size!==a.size)return!1;for(l=t.entries();!(c=l.next()).done;)if(!a.has(c.value[0]))return!1;return!0}if(i&&ArrayBuffer.isView(t)&&ArrayBuffer.isView(a)){if((u=t.length)!=a.length)return!1;for(c=u;0!=c--;)if(t[c]!==a[c])return!1;return!0}if(t.constructor===RegExp)return t.source===a.source&&t.flags===a.flags;if(t.valueOf!==Object.prototype.valueOf)return t.valueOf()===a.valueOf();if(t.toString!==Object.prototype.toString)return t.toString()===a.toString();if((u=(s=Object.keys(t)).length)!==Object.keys(a).length)return!1;for(c=u;0!=c--;)if(!Object.prototype.hasOwnProperty.call(a,s[c]))return!1;if(e&&t instanceof Element)return!1;for(c=u;0!=c--;)if(("_owner"!==s[c]&&"__v"!==s[c]&&"__o"!==s[c]||!t.$$typeof)&&!o(t[s[c]],a[s[c]]))return!1;return!0}return t!=t&&a!=a}t.exports=function(t,e){try{return o(t,e)}catch(n){if((n.message||"").match(/stack|recursion/i))return console.warn("react-fast-compare cannot handle circular refs"),!1;throw n}}},4839:function(t,e,n){"use strict";var r,i=n(7294),o=(r=i)&&"object"==typeof r&&"default"in r?r.default:r;function a(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}var u=!("undefined"==typeof window||!window.document||!window.document.createElement);t.exports=function(t,e,n){if("function"!=typeof t)throw new Error("Expected reducePropsToState to be a function.");if("function"!=typeof e)throw new Error("Expected handleStateChangeOnClient to be a function.");if(void 0!==n&&"function"!=typeof n)throw new Error("Expected mapStateOnServer to either be undefined or a function.");return function(r){if("function"!=typeof r)throw new Error("Expected WrappedComponent to be a React component.");var c,s=[];function l(){c=t(s.map((function(t){return t.props}))),f.canUseDOM?e(c):n&&(c=n(c))}var f=function(t){var e,n;function i(){return t.apply(this,arguments)||this}n=t,(e=i).prototype=Object.create(n.prototype),e.prototype.constructor=e,e.__proto__=n,i.peek=function(){return c},i.rewind=function(){if(i.canUseDOM)throw new Error("You may only call rewind() on the server. Call peek() to read the current state.");var t=c;return c=void 0,s=[],t};var a=i.prototype;return a.UNSAFE_componentWillMount=function(){s.push(this),l()},a.componentDidUpdate=function(){l()},a.componentWillUnmount=function(){var t=s.indexOf(this);s.splice(t,1),l()},a.render=function(){return o.createElement(r,this.props)},i}(i.PureComponent);return a(f,"displayName","SideEffect("+function(t){return t.displayName||t.name||"Component"}(r)+")"),a(f,"canUseDOM",u),f}}},798:function(t,e,n){"use strict";n.d(e,{Q:function(){return j}});var r=n(7316),i=n.n(r),o=n(5354),a=n.n(o);Object.create;function u(t,e){for(var n=0,r=e.length,i=t.length;n<r;n++,i++)t[i]=e[n];return t}Object.create;var c=n(7462),s=new Map,l=function(t){return t.cloneNode(!0)},f=function(){return"file:"===window.location.protocol},p=function(t,e){var n=new XMLHttpRequest;n.onreadystatechange=function(){try{if(!/\.svg/i.test(t)&&2===n.readyState){var r=n.getResponseHeader("Content-Type");if(!r)throw new Error("Content type not found");var i=(0,c.Q)(r).type;if("image/svg+xml"!==i&&"text/plain"!==i)throw new Error("Invalid content type: "+i)}if(4===n.readyState){if(404===n.status||null===n.responseXML)throw new Error(f()?"Note: SVG injection ajax calls do not work locally without adjusting security settings in your browser. Or consider using a local webserver.":"Unable to load SVG file: "+t);if(!(200===n.status||f()&&0===n.status))throw new Error("There was a problem injecting the SVG: "+n.status+" "+n.statusText);e(null,n)}}catch(o){n.abort(),e(o,n)}},n.open("GET",t),n.overrideMimeType&&n.overrideMimeType("text/xml"),n.send()},d={},h=function(t,e){d[t]=d[t]||[],d[t].push(e)},y=function(t,e){if(s.has(t)){var n=s.get(t);if(void 0===n)return void h(t,e);if(n instanceof SVGSVGElement)return void e(null,l(n))}s.set(t,void 0),h(t,e),p(t,(function(e,n){e?s.set(t,e):n.responseXML instanceof Document&&n.responseXML.documentElement&&n.responseXML.documentElement instanceof SVGSVGElement&&s.set(t,n.responseXML.documentElement),function(t){for(var e=function(e,n){setTimeout((function(){if(Array.isArray(d[t])){var n=s.get(t),r=d[t][e];n instanceof SVGSVGElement&&r(null,l(n)),n instanceof Error&&r(n),e===d[t].length-1&&delete d[t]}}),0)},n=0,r=d[t].length;n<r;n++)e(n)}(t)}))},m=function(t,e){p(t,(function(t,n){t?e(t):n.responseXML instanceof Document&&n.responseXML.documentElement&&n.responseXML.documentElement instanceof SVGSVGElement&&e(null,n.responseXML.documentElement)}))},w=0,g=[],M={},T="http://www.w3.org/1999/xlink",L=function(t,e,n,r,i,o){var a=t.getAttribute("data-src")||t.getAttribute("src");if(a){if(-1!==g.indexOf(t))return g.splice(g.indexOf(t),1),void(t=null);g.push(t),t.setAttribute("src",""),(r?y:m)(a,(function(r,c){if(!c)return g.splice(g.indexOf(t),1),t=null,void o(r);var s=t.getAttribute("id");s&&c.setAttribute("id",s);var l=t.getAttribute("title");l&&c.setAttribute("title",l);var f=t.getAttribute("width");f&&c.setAttribute("width",f);var p=t.getAttribute("height");p&&c.setAttribute("height",p);var d=Array.from(new Set(u(u(u([],(c.getAttribute("class")||"").split(" ")),["injected-svg"]),(t.getAttribute("class")||"").split(" ")))).join(" ").trim();c.setAttribute("class",d);var h=t.getAttribute("style");h&&c.setAttribute("style",h),c.setAttribute("data-src",a);var y=[].filter.call(t.attributes,(function(t){return/^data-\w[\w-]*$/.test(t.name)}));if(Array.prototype.forEach.call(y,(function(t){t.name&&t.value&&c.setAttribute(t.name,t.value)})),n){var m,L,v,b,C,j={clipPath:["clip-path"],"color-profile":["color-profile"],cursor:["cursor"],filter:["filter"],linearGradient:["fill","stroke"],marker:["marker","marker-start","marker-mid","marker-end"],mask:["mask"],path:[],pattern:["fill","stroke"],radialGradient:["fill","stroke"]};Object.keys(j).forEach((function(t){m=t,v=j[t];for(var e=function(t,e){var n;b=L[t].id,C=b+"-"+ ++w,Array.prototype.forEach.call(v,(function(t){for(var e=0,r=(n=c.querySelectorAll("["+t+'*="'+b+'"]')).length;e<r;e++){var i=n[e].getAttribute(t);i&&!i.match(new RegExp('url\\("?#'+b+'"?\\)'))||n[e].setAttribute(t,"url(#"+C+")")}}));for(var r=c.querySelectorAll("[*|href]"),i=[],o=0,a=r.length;o<a;o++){var u=r[o].getAttributeNS(T,"href");u&&u.toString()==="#"+L[t].id&&i.push(r[o])}for(var s=0,l=i.length;s<l;s++)i[s].setAttributeNS(T,"href","#"+C);L[t].id=C},n=0,r=(L=c.querySelectorAll(m+"[id]")).length;n<r;n++)e(n)}))}c.removeAttribute("xmlns:a");for(var N,E,A=c.querySelectorAll("script"),S=[],I=0,D=A.length;I<D;I++)(E=A[I].getAttribute("type"))&&"application/ecmascript"!==E&&"application/javascript"!==E&&"text/javascript"!==E||((N=A[I].innerText||A[I].textContent)&&S.push(N),c.removeChild(A[I]));if(S.length>0&&("always"===e||"once"===e&&!M[a])){for(var O=0,x=S.length;O<x;O++)new Function(S[O])(window);M[a]=!0}var Q=c.querySelectorAll("style");if(Array.prototype.forEach.call(Q,(function(t){t.textContent+=""})),c.setAttribute("xmlns","http://www.w3.org/2000/svg"),c.setAttribute("xmlns:xlink",T),i(c),!t.parentNode)return g.splice(g.indexOf(t),1),t=null,void o(new Error("Parent node is null"));t.parentNode.replaceChild(c,t),g.splice(g.indexOf(t),1),t=null,o(null,c)}))}else o(new Error("Invalid data-src or src attribute"))},v=n(7294),b="http://www.w3.org/2000/svg",C="http://www.w3.org/1999/xlink",j=function(t){function e(){var e;return(e=t.apply(this,arguments)||this).initialState={hasError:!1,isLoading:!0},e.state=e.initialState,e._isMounted=!1,e.refCallback=function(t){e.container=t},e}a()(e,t);var n=e.prototype;return n.renderSVG=function(){var t=this;if(this.container instanceof Node){var e,n=this.props,r=n.beforeInjection,i=n.evalScripts,o=n.renumerateIRIElements,a=n.src,u=n.useRequestCache,c=this.props.afterInjection,s=this.props.wrapper;"svg"===s?((e=document.createElementNS(b,s)).setAttribute("xmlns",b),e.setAttribute("xmlns:xlink",C)):e=document.createElement(s),e.dataset.src=a,this.nonReactElement=this.container.appendChild(e);!function(t,e){var n=void 0===e?{}:e,r=n.afterAll,i=void 0===r?function(){}:r,o=n.afterEach,a=void 0===o?function(){}:o,u=n.beforeEach,c=void 0===u?function(){}:u,s=n.cacheRequests,l=void 0===s||s,f=n.evalScripts,p=void 0===f?"never":f,d=n.renumerateIRIElements,h=void 0===d||d;if(t&&"length"in t)for(var y=0,m=0,w=t.length;m<w;m++)L(t[m],p,h,l,c,(function(e,n){a(e,n),t&&"length"in t&&t.length===++y&&i(y)}));else t?L(t,p,h,l,c,(function(e,n){a(e,n),i(1),t=null})):i(0)}(e,{afterEach:function(e,n){!e||(t.removeSVG(),t._isMounted)?(t.nonReactElement=n,t._isMounted&&t.setState((function(){return{hasError:!!e,isLoading:!1}}),(function(){c(e,n)}))):c(e)},beforeEach:r,cacheRequests:u,evalScripts:i,renumerateIRIElements:o})}},n.removeSVG=function(){this.container instanceof Node&&this.nonReactElement instanceof Node&&(this.container.removeChild(this.nonReactElement),this.nonReactElement=null)},n.componentDidMount=function(){this._isMounted=!0,this.renderSVG()},n.componentDidUpdate=function(t){var e=this;(function(t,e){for(var n in t)if(!(n in e))return!0;for(var r in e)if(t[r]!==e[r])return!0;return!1})(t,this.props)&&this.setState((function(){return e.initialState}),(function(){e.removeSVG(),e.renderSVG()}))},n.componentWillUnmount=function(){this._isMounted=!1,this.removeSVG()},n.render=function(){var t=this.props;t.afterInjection,t.beforeInjection,t.evalScripts;var e=t.fallback,n=t.loading;t.renumerateIRIElements,t.src,t.useRequestCache;var r=t.wrapper,o=i()(t,["afterInjection","beforeInjection","evalScripts","fallback","loading","renumerateIRIElements","src","useRequestCache","wrapper"]),a=r;return v.createElement(a,Object.assign({},o,{ref:this.refCallback},"svg"===r?{xmlns:b,xmlnsXlink:C}:{}),this.state.isLoading&&n&&v.createElement(n,null),this.state.hasError&&e&&v.createElement(e,null))},e}(v.Component);j.defaultProps={afterInjection:function(){},beforeInjection:function(){},evalScripts:"never",fallback:null,loading:null,renumerateIRIElements:!0,useRequestCache:!0,wrapper:"div"}},8767:function(t,e,n){"use strict";n.d(e,{Z:function(){return p}});var r=n(7329),i=n(7294),o=n(798),a=n(5900),u=n.n(a),c=n(5444),s="undefined"!=typeof window&&window.localStorage;var l=n(1754);var f=Object.freeze({light:"light",dark:"dark"});function p(t){var e,n=t.isStatic,a=t.showHomeLink,p=i.useState((function(){return function(t){if(s)return window.localStorage.getItem(t)}("theme")||f.light})),d=p[0],h=p[1],y=(0,l.Z)();(0,i.useEffect)((function(){var t,e,n,i=document.getElementsByTagName("html")[0];(t=i.classList).remove.apply(t,(0,r.Z)(Object.values(f))),i.classList.add(d),e="theme",n=d,s&&window.localStorage.setItem(e,n)}),[d]);var m=u()("header-module--header--2GXhr",((e={})["header-module--isStatic--2TT6f"]=n,e));return i.createElement("header",{className:m},a&&i.createElement(c.Link,{className:"header-module--backButton--UYYO9 header-module--headerButton--2MBJe",to:"/","arial-label":"Navigate to home page"},i.createElement("img",{src:y,alt:"Carlos avatar"})),i.createElement("button",{className:"header-module--toggleButton--1mKKO header-module--headerButton--2MBJe",onClick:function(){h((function(t){return t===f.light?f.dark:f.light}))},"aria-label":d===f.light?"Light theme active. Switch to dark.":"Dark theme active. Switch to light."},i.createElement(o.Q,{className:"header-module--icon--3eGkE",src:d===f.light?"data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pg0KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE5LjAuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPg0KPHN2ZyB2ZXJzaW9uPSIxLjEiIGlkPSJDYXBhXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4Ig0KCSB2aWV3Qm94PSIwIDAgMzAyLjQgMzAyLjQiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDMwMi40IDMwMi40OyIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSI+DQo8Zz4NCgk8Zz4NCgkJPGc+DQoJCQk8cGF0aCBkPSJNMjA0LjgsOTcuNkMxOTEuMiw4NCwxNzIsNzUuMiwxNTEuMiw3NS4ycy00MCw4LjQtNTMuNiwyMi40Yy0xMy42LDEzLjYtMjIuNCwzMi44LTIyLjQsNTMuNnM4LjgsNDAsMjIuNCw1My42DQoJCQkJYzEzLjYsMTMuNiwzMi44LDIyLjQsNTMuNiwyMi40czQwLTguNCw1My42LTIyLjRjMTMuNi0xMy42LDIyLjQtMzIuOCwyMi40LTUzLjZTMjE4LjgsMTExLjIsMjA0LjgsOTcuNnoiLz4NCgkJCTxwYXRoIGQ9Ik0xNTEuMiw1MS42YzUuNiwwLDEwLjQtNC44LDEwLjQtMTAuNFYxMC40YzAtNS42LTQuOC0xMC40LTEwLjQtMTAuNGMtNS42LDAtMTAuNCw0LjgtMTAuNCwxMC40djMwLjgNCgkJCQlDMTQwLjgsNDYuOCwxNDUuNiw1MS42LDE1MS4yLDUxLjZ6Ii8+DQoJCQk8cGF0aCBkPSJNMjM2LjQsODAuOGwyMi0yMmM0LTQsNC0xMC40LDAtMTQuNHMtMTAuNC00LTE0LjQsMGwtMjIsMjJjLTQsNC00LDEwLjQsMCwxNC40QzIyNS42LDg0LjgsMjMyLDg0LjgsMjM2LjQsODAuOHoiLz4NCgkJCTxwYXRoIGQ9Ik0yOTIsMTQwLjhoLTMwLjhjLTUuNiwwLTEwLjQsNC44LTEwLjQsMTAuNGMwLDUuNiw0LjgsMTAuNCwxMC40LDEwLjRIMjkyYzUuNiwwLDEwLjQtNC44LDEwLjQtMTAuNA0KCQkJCUMzMDIuNCwxNDUuNiwyOTcuNiwxNDAuOCwyOTIsMTQwLjh6Ii8+DQoJCQk8cGF0aCBkPSJNMjM2LDIyMS42Yy00LTQtMTAuNC00LTE0LjQsMHMtNCwxMC40LDAsMTQuNGwyMiwyMmM0LDQsMTAuNCw0LDE0LjQsMHM0LTEwLjQsMC0xNC40TDIzNiwyMjEuNnoiLz4NCgkJCTxwYXRoIGQ9Ik0xNTEuMiwyNTAuOGMtNS42LDAtMTAuNCw0LjgtMTAuNCwxMC40VjI5MmMwLDUuNiw0LjgsMTAuNCwxMC40LDEwLjRjNS42LDAsMTAuNC00LjgsMTAuNC0xMC40di0zMC44DQoJCQkJQzE2MS42LDI1NS42LDE1Ni44LDI1MC44LDE1MS4yLDI1MC44eiIvPg0KCQkJPHBhdGggZD0iTTY2LDIyMS42bC0yMiwyMmMtNCw0LTQsMTAuNCwwLDE0LjRzMTAuNCw0LDE0LjQsMGwyMi0yMmM0LTQsNC0xMC40LDAtMTQuNEM3Ni44LDIxNy42LDcwLjQsMjE3LjYsNjYsMjIxLjZ6Ii8+DQoJCQk8cGF0aCBkPSJNNTEuNiwxNTEuMmMwLTUuNi00LjgtMTAuNC0xMC40LTEwLjRIMTAuNGMtNS42LDAtMTAuNCw0LjgtMTAuNCwxMC40czQuOCwxMC40LDEwLjQsMTAuNGgzMC44DQoJCQkJQzQ2LjgsMTYxLjYsNTEuNiwxNTYuOCw1MS42LDE1MS4yeiIvPg0KCQkJPHBhdGggZD0iTTY2LDgwLjhjNCw0LDEwLjQsNCwxNC40LDBzNC0xMC40LDAtMTQuNGwtMjItMjJjLTQtNC0xMC40LTQtMTQuNCwwcy00LDEwLjQsMCwxNC40TDY2LDgwLjh6Ii8+DQoJCTwvZz4NCgk8L2c+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8L3N2Zz4NCg==":"data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pg0KPHN2ZyB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4Ig0KCSB2aWV3Qm94PSIwIDAgMzEyLjgxMiAzMTIuODEyIiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCAzMTIuODEyIDMxMi44MTI7IiB4bWw6c3BhY2U9InByZXNlcnZlIj4NCjxnIHRyYW5zZm9ybT0icm90YXRlKDI3MCwxNTYsMTU2KSI+DQoJPHBhdGggZmlsbD0iI2ZmZmZmZiIgZD0iTTMwNS4yLDE3OC4xNTljLTMuMi0wLjgtNi40LDAtOS4yLDJjLTEwLjQsOC44LTIyLjQsMTYtMzUuNiwyMC44Yy0xMi40LDQuOC0yNiw3LjItNDAuNCw3LjJjLTMyLjQsMC02Mi0xMy4yLTgzLjItMzQuNA0KCQljLTIxLjItMjEuMi0zNC40LTUwLjgtMzQuNC04My4yYzAtMTMuNiwyLjQtMjYuOCw2LjQtMzguOGM0LjQtMTIuOCwxMC44LTI0LjQsMTkuMi0zNC40YzMuNi00LjQsMi44LTEwLjgtMS42LTE0LjQNCgkJYy0yLjgtMi02LTIuOC05LjItMmMtMzQsOS4yLTYzLjYsMjkuNi04NC44LDU2LjhjLTIwLjQsMjYuOC0zMi40LDYwLTMyLjQsOTZjMCw0My42LDE3LjYsODMuMiw0Ni40LDExMnM2OCw0Ni40LDExMiw0Ni40DQoJCWMzNi44LDAsNzAuOC0xMi44LDk4LTM0YzI3LjYtMjEuNiw0Ny42LTUyLjQsNTYtODcuNkMzMTQsMTg0Ljk1OSwzMTAuOCwxNzkuMzU5LDMwNS4yLDE3OC4xNTl6IiAvPg0KPC9nPg0KPC9zdmc+DQo="})))}p.defaultProps={isStatic:!1,showHomeLink:!1}},3787:function(t,e,n){"use strict";n.d(e,{Z:function(){return i}});var r=n(7294);function i(t){var e=t.children;return r.createElement("div",{className:"layout-module--container--3lW7D"},e)}},2405:function(t,e,n){"use strict";n.d(e,{Z:function(){return gt}});var r,i,o,a,u=n(7294),c=n(5697),s=n.n(c),l=n(4839),f=n.n(l),p=n(2993),d=n.n(p),h=n(6494),y=n.n(h),m="bodyAttributes",w="htmlAttributes",g="titleAttributes",M={BASE:"base",BODY:"body",HEAD:"head",HTML:"html",LINK:"link",META:"meta",NOSCRIPT:"noscript",SCRIPT:"script",STYLE:"style",TITLE:"title"},T=(Object.keys(M).map((function(t){return M[t]})),"charset"),L="cssText",v="href",b="http-equiv",C="innerHTML",j="itemprop",N="name",E="property",A="rel",S="src",I="target",D={accesskey:"accessKey",charset:"charSet",class:"className",contenteditable:"contentEditable",contextmenu:"contextMenu","http-equiv":"httpEquiv",itemprop:"itemProp",tabindex:"tabIndex"},O="defaultTitle",x="defer",Q="encodeSpecialCharacters",k="onChangeClientState",P="titleTemplate",z=Object.keys(D).reduce((function(t,e){return t[D[e]]=e,t}),{}),G=[M.NOSCRIPT,M.SCRIPT,M.STYLE],Z="data-react-helmet",Y="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},R=function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")},H=function(){function t(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}return function(e,n,r){return n&&t(e.prototype,n),r&&t(e,r),e}}(),B=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},J=function(t,e){var n={};for(var r in t)e.indexOf(r)>=0||Object.prototype.hasOwnProperty.call(t,r)&&(n[r]=t[r]);return n},U=function(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e},V=function(t){var e=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];return!1===e?String(t):String(t).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#x27;")},K=function(t){var e=W(t,M.TITLE),n=W(t,P);if(n&&e)return n.replace(/%s/g,(function(){return Array.isArray(e)?e.join(""):e}));var r=W(t,O);return e||r||void 0},_=function(t){return W(t,k)||function(){}},q=function(t,e){return e.filter((function(e){return void 0!==e[t]})).map((function(e){return e[t]})).reduce((function(t,e){return B({},t,e)}),{})},X=function(t,e){return e.filter((function(t){return void 0!==t[M.BASE]})).map((function(t){return t[M.BASE]})).reverse().reduce((function(e,n){if(!e.length)for(var r=Object.keys(n),i=0;i<r.length;i++){var o=r[i].toLowerCase();if(-1!==t.indexOf(o)&&n[o])return e.concat(n)}return e}),[])},F=function(t,e,n){var r={};return n.filter((function(e){return!!Array.isArray(e[t])||(void 0!==e[t]&&rt("Helmet: "+t+' should be of type "Array". Instead found type "'+Y(e[t])+'"'),!1)})).map((function(e){return e[t]})).reverse().reduce((function(t,n){var i={};n.filter((function(t){for(var n=void 0,o=Object.keys(t),a=0;a<o.length;a++){var u=o[a],c=u.toLowerCase();-1===e.indexOf(c)||n===A&&"canonical"===t[n].toLowerCase()||c===A&&"stylesheet"===t[c].toLowerCase()||(n=c),-1===e.indexOf(u)||u!==C&&u!==L&&u!==j||(n=u)}if(!n||!t[n])return!1;var s=t[n].toLowerCase();return r[n]||(r[n]={}),i[n]||(i[n]={}),!r[n][s]&&(i[n][s]=!0,!0)})).reverse().forEach((function(e){return t.push(e)}));for(var o=Object.keys(i),a=0;a<o.length;a++){var u=o[a],c=y()({},r[u],i[u]);r[u]=c}return t}),[]).reverse()},W=function(t,e){for(var n=t.length-1;n>=0;n--){var r=t[n];if(r.hasOwnProperty(e))return r[e]}return null},$=(r=Date.now(),function(t){var e=Date.now();e-r>16?(r=e,t(e)):setTimeout((function(){$(t)}),0)}),tt=function(t){return clearTimeout(t)},et="undefined"!=typeof window?window.requestAnimationFrame&&window.requestAnimationFrame.bind(window)||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||$:n.g.requestAnimationFrame||$,nt="undefined"!=typeof window?window.cancelAnimationFrame||window.webkitCancelAnimationFrame||window.mozCancelAnimationFrame||tt:n.g.cancelAnimationFrame||tt,rt=function(t){return console&&"function"==typeof console.warn&&console.warn(t)},it=null,ot=function(t,e){var n=t.baseTag,r=t.bodyAttributes,i=t.htmlAttributes,o=t.linkTags,a=t.metaTags,u=t.noscriptTags,c=t.onChangeClientState,s=t.scriptTags,l=t.styleTags,f=t.title,p=t.titleAttributes;ct(M.BODY,r),ct(M.HTML,i),ut(f,p);var d={baseTag:st(M.BASE,n),linkTags:st(M.LINK,o),metaTags:st(M.META,a),noscriptTags:st(M.NOSCRIPT,u),scriptTags:st(M.SCRIPT,s),styleTags:st(M.STYLE,l)},h={},y={};Object.keys(d).forEach((function(t){var e=d[t],n=e.newTags,r=e.oldTags;n.length&&(h[t]=n),r.length&&(y[t]=d[t].oldTags)})),e&&e(),c(t,h,y)},at=function(t){return Array.isArray(t)?t.join(""):t},ut=function(t,e){void 0!==t&&document.title!==t&&(document.title=at(t)),ct(M.TITLE,e)},ct=function(t,e){var n=document.getElementsByTagName(t)[0];if(n){for(var r=n.getAttribute(Z),i=r?r.split(","):[],o=[].concat(i),a=Object.keys(e),u=0;u<a.length;u++){var c=a[u],s=e[c]||"";n.getAttribute(c)!==s&&n.setAttribute(c,s),-1===i.indexOf(c)&&i.push(c);var l=o.indexOf(c);-1!==l&&o.splice(l,1)}for(var f=o.length-1;f>=0;f--)n.removeAttribute(o[f]);i.length===o.length?n.removeAttribute(Z):n.getAttribute(Z)!==a.join(",")&&n.setAttribute(Z,a.join(","))}},st=function(t,e){var n=document.head||document.querySelector(M.HEAD),r=n.querySelectorAll(t+"["+"data-react-helmet]"),i=Array.prototype.slice.call(r),o=[],a=void 0;return e&&e.length&&e.forEach((function(e){var n=document.createElement(t);for(var r in e)if(e.hasOwnProperty(r))if(r===C)n.innerHTML=e.innerHTML;else if(r===L)n.styleSheet?n.styleSheet.cssText=e.cssText:n.appendChild(document.createTextNode(e.cssText));else{var u=void 0===e[r]?"":e[r];n.setAttribute(r,u)}n.setAttribute(Z,"true"),i.some((function(t,e){return a=e,n.isEqualNode(t)}))?i.splice(a,1):o.push(n)})),i.forEach((function(t){return t.parentNode.removeChild(t)})),o.forEach((function(t){return n.appendChild(t)})),{oldTags:i,newTags:o}},lt=function(t){return Object.keys(t).reduce((function(e,n){var r=void 0!==t[n]?n+'="'+t[n]+'"':""+n;return e?e+" "+r:r}),"")},ft=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object.keys(t).reduce((function(e,n){return e[D[n]||n]=t[n],e}),e)},pt=function(t,e,n){switch(t){case M.TITLE:return{toComponent:function(){return t=e.title,n=e.titleAttributes,(r={key:t})[Z]=!0,i=ft(n,r),[u.createElement(M.TITLE,i,t)];var t,n,r,i},toString:function(){return function(t,e,n,r){var i=lt(n),o=at(e);return i?"<"+t+' data-react-helmet="true" '+i+">"+V(o,r)+"</"+t+">":"<"+t+' data-react-helmet="true">'+V(o,r)+"</"+t+">"}(t,e.title,e.titleAttributes,n)}};case m:case w:return{toComponent:function(){return ft(e)},toString:function(){return lt(e)}};default:return{toComponent:function(){return function(t,e){return e.map((function(e,n){var r,i=((r={key:n})[Z]=!0,r);return Object.keys(e).forEach((function(t){var n=D[t]||t;if(n===C||n===L){var r=e.innerHTML||e.cssText;i.dangerouslySetInnerHTML={__html:r}}else i[n]=e[t]})),u.createElement(t,i)}))}(t,e)},toString:function(){return function(t,e,n){return e.reduce((function(e,r){var i=Object.keys(r).filter((function(t){return!(t===C||t===L)})).reduce((function(t,e){var i=void 0===r[e]?e:e+'="'+V(r[e],n)+'"';return t?t+" "+i:i}),""),o=r.innerHTML||r.cssText||"",a=-1===G.indexOf(t);return e+"<"+t+' data-react-helmet="true" '+i+(a?"/>":">"+o+"</"+t+">")}),"")}(t,e,n)}}}},dt=function(t){var e=t.baseTag,n=t.bodyAttributes,r=t.encode,i=t.htmlAttributes,o=t.linkTags,a=t.metaTags,u=t.noscriptTags,c=t.scriptTags,s=t.styleTags,l=t.title,f=void 0===l?"":l,p=t.titleAttributes;return{base:pt(M.BASE,e,r),bodyAttributes:pt(m,n,r),htmlAttributes:pt(w,i,r),link:pt(M.LINK,o,r),meta:pt(M.META,a,r),noscript:pt(M.NOSCRIPT,u,r),script:pt(M.SCRIPT,c,r),style:pt(M.STYLE,s,r),title:pt(M.TITLE,{title:f,titleAttributes:p},r)}},ht=f()((function(t){return{baseTag:X([v,I],t),bodyAttributes:q(m,t),defer:W(t,x),encode:W(t,Q),htmlAttributes:q(w,t),linkTags:F(M.LINK,[A,v],t),metaTags:F(M.META,[N,T,b,E,j],t),noscriptTags:F(M.NOSCRIPT,[C],t),onChangeClientState:_(t),scriptTags:F(M.SCRIPT,[S,C],t),styleTags:F(M.STYLE,[L],t),title:K(t),titleAttributes:q(g,t)}}),(function(t){it&&nt(it),t.defer?it=et((function(){ot(t,(function(){it=null}))})):(ot(t),it=null)}),dt)((function(){return null})),yt=(i=ht,a=o=function(t){function e(){return R(this,e),U(this,t.apply(this,arguments))}return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}(e,t),e.prototype.shouldComponentUpdate=function(t){return!d()(this.props,t)},e.prototype.mapNestedChildrenToProps=function(t,e){if(!e)return null;switch(t.type){case M.SCRIPT:case M.NOSCRIPT:return{innerHTML:e};case M.STYLE:return{cssText:e}}throw new Error("<"+t.type+" /> elements are self-closing and can not contain children. Refer to our API for more information.")},e.prototype.flattenArrayTypeChildren=function(t){var e,n=t.child,r=t.arrayTypeChildren,i=t.newChildProps,o=t.nestedChildren;return B({},r,((e={})[n.type]=[].concat(r[n.type]||[],[B({},i,this.mapNestedChildrenToProps(n,o))]),e))},e.prototype.mapObjectTypeChildren=function(t){var e,n,r=t.child,i=t.newProps,o=t.newChildProps,a=t.nestedChildren;switch(r.type){case M.TITLE:return B({},i,((e={})[r.type]=a,e.titleAttributes=B({},o),e));case M.BODY:return B({},i,{bodyAttributes:B({},o)});case M.HTML:return B({},i,{htmlAttributes:B({},o)})}return B({},i,((n={})[r.type]=B({},o),n))},e.prototype.mapArrayTypeChildrenToProps=function(t,e){var n=B({},e);return Object.keys(t).forEach((function(e){var r;n=B({},n,((r={})[e]=t[e],r))})),n},e.prototype.warnOnInvalidChildren=function(t,e){return!0},e.prototype.mapChildrenToProps=function(t,e){var n=this,r={};return u.Children.forEach(t,(function(t){if(t&&t.props){var i=t.props,o=i.children,a=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object.keys(t).reduce((function(e,n){return e[z[n]||n]=t[n],e}),e)}(J(i,["children"]));switch(n.warnOnInvalidChildren(t,o),t.type){case M.LINK:case M.META:case M.NOSCRIPT:case M.SCRIPT:case M.STYLE:r=n.flattenArrayTypeChildren({child:t,arrayTypeChildren:r,newChildProps:a,nestedChildren:o});break;default:e=n.mapObjectTypeChildren({child:t,newProps:e,newChildProps:a,nestedChildren:o})}}})),e=this.mapArrayTypeChildrenToProps(r,e)},e.prototype.render=function(){var t=this.props,e=t.children,n=J(t,["children"]),r=B({},n);return e&&(r=this.mapChildrenToProps(e,r)),u.createElement(i,r)},H(e,null,[{key:"canUseDOM",set:function(t){i.canUseDOM=t}}]),e}(u.Component),o.propTypes={base:s().object,bodyAttributes:s().object,children:s().oneOfType([s().arrayOf(s().node),s().node]),defaultTitle:s().string,defer:s().bool,encodeSpecialCharacters:s().bool,htmlAttributes:s().object,link:s().arrayOf(s().object),meta:s().arrayOf(s().object),noscript:s().arrayOf(s().object),onChangeClientState:s().func,script:s().arrayOf(s().object),style:s().arrayOf(s().object),title:s().string,titleAttributes:s().object,titleTemplate:s().string},o.defaultProps={defer:!0,encodeSpecialCharacters:!0},o.peek=i.peek,o.rewind=function(){var t=i.rewind();return t||(t=dt({baseTag:[],bodyAttributes:{},encodeSpecialCharacters:!0,htmlAttributes:{},linkTags:[],metaTags:[],noscriptTags:[],scriptTags:[],styleTags:[],title:"",titleAttributes:{}})),t},a);yt.renderStatic=yt.rewind;var mt=n(5444);function wt(t){var e=t.description,n=t.lang,r=t.meta,i=t.title,o=(0,mt.useStaticQuery)("63159454").site,a=e||o.siteMetadata.description;return u.createElement(yt,{htmlAttributes:{lang:n},title:i,titleTemplate:"%s | "+o.siteMetadata.title,meta:[{name:"description",content:a},{property:"og:title",content:i},{property:"og:description",content:a},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:o.siteMetadata.author},{name:"twitter:title",content:i},{name:"twitter:description",content:a}].concat(r)})}wt.defaultProps={lang:"en",meta:[],description:""};var gt=wt},1754:function(t,e,n){"use strict";n.d(e,{Z:function(){return u}});var r=n(7294),i=n.p+"static/avatar-d2b56cbe5d03947ddcaf31f232c04354.png",o=n.p+"static/avatar-2-cbfdd8b6c93887a6096bf65f7b6dcfcb.png",a=n.p+"static/avatar-3-dc27f9a38b1ad42f0335fe3a323eda09.png";function u(){var t=(0,r.useState)([i,o,a])[0],e=(0,r.useState)(0),n=e[0],u=e[1];return(0,r.useEffect)((function(){var e=setTimeout((function(){u((function(e){return(e+1)%t.length}))}),3e3);return function(){clearTimeout(e)}}),[n,t.length]),t[n]}}}]);
//# sourceMappingURL=commons-a91bed1ac8ed4f595d3b.js.map