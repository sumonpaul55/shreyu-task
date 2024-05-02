"use strict";(self.webpackChunkshreyu_react_app=self.webpackChunkshreyu_react_app||[]).push([[8142,5565,6017],{52134:function(n,e,r){r.d(e,{Z:function(){return o}});var t=r(72791);var a=function(n){var e=(0,t.useRef)(n);return(0,t.useEffect)((function(){e.current=n}),[n]),e};function o(n){var e=a(n);return(0,t.useCallback)((function(){return e.current&&e.current.apply(e,arguments)}),[e])}},56236:function(n,e,r){r.d(e,{Z:function(){return l}});var t=r(50678),a=r(72791),o=(r(66068),r(79096),r(22519));r(36656),r(92444);r(9084),r(37215);var i="undefined"!==typeof r.g&&r.g.navigator&&"ReactNative"===r.g.navigator.product;"undefined"!==typeof document||i?a.useLayoutEffect:a.useEffect,new WeakMap;var c=r(15341),s=r(80184),u=["onKeyDown"];var f=a.forwardRef((function(n,e){var r,a=n.onKeyDown,i=function(n,e){if(null==n)return{};var r,t,a={},o=Object.keys(n);for(t=0;t<o.length;t++)r=o[t],e.indexOf(r)>=0||(a[r]=n[r]);return a}(n,u),f=(0,c.FT)(Object.assign({tagName:"a"},i)),l=(0,t.Z)(f,1)[0],d=(0,o.Z)((function(n){l.onKeyDown(n),null==a||a(n)}));return((r=i.href)&&"#"!==r.trim()||i.role)&&"button"!==i.role?(0,s.jsx)("a",Object.assign({ref:e},i,{onKeyDown:a})):(0,s.jsx)("a",Object.assign({ref:e},i,l,{onKeyDown:d}))}));f.displayName="Anchor";var l=f},15341:function(n,e,r){r.d(e,{FT:function(){return c}});var t=r(50678),a=r(72791),o=r(80184),i=["as","disabled"];function c(n){var e=n.tagName,r=n.disabled,t=n.href,a=n.target,o=n.rel,i=n.onClick,c=n.tabIndex,s=void 0===c?0:c,u=n.type;e||(e=null!=t||null!=a||null!=o?"a":"button");var f={tagName:e};if("button"===e)return[{type:u||"button",disabled:r},f];var l=function(n){(r||"a"===e&&function(n){return!n||"#"===n.trim()}(t))&&n.preventDefault(),r?n.stopPropagation():null==i||i(n)};return[{role:"button",disabled:void 0,tabIndex:r?void 0:s,href:"a"===e&&r?void 0:t,target:"a"===e?a:void 0,"aria-disabled":r||void 0,rel:"a"===e?o:void 0,onClick:l,onKeyDown:function(n){" "===n.key&&(n.preventDefault(),l(n))}},f]}var s=a.forwardRef((function(n,e){var r=n.as,a=n.disabled,s=function(n,e){if(null==n)return{};var r,t,a={},o=Object.keys(n);for(t=0;t<o.length;t++)r=o[t],e.indexOf(r)>=0||(a[r]=n[r]);return a}(n,i),u=c(Object.assign({tagName:r,disabled:a},s)),f=(0,t.Z)(u,2),l=f[0],d=f[1].tagName;return(0,o.jsx)(d,Object.assign({},s,l,{ref:e}))}));s.displayName="Button",e.ZP=s},66068:function(n,e,r){r.d(e,{Z:function(){return a}});var t=r(72791);function a(){return(0,t.useState)(null)}},79096:function(n,e,r){var t=r(72791);e.Z=function(n){var e=(0,t.useRef)(n);return(0,t.useEffect)((function(){e.current=n}),[n]),e}},22519:function(n,e,r){r.d(e,{Z:function(){return o}});var t=r(72791),a=r(79096);function o(n){var e=(0,a.Z)(n);return(0,t.useCallback)((function(){return e.current&&e.current.apply(e,arguments)}),[e])}},36656:function(n,e,r){r.d(e,{Z:function(){return o}});var t=r(72791),a=r(22519);function o(n,e,r,o){void 0===o&&(o=!1);var i=(0,a.Z)(r);(0,t.useEffect)((function(){var r="function"===typeof n?n():n;return r.addEventListener(e,i,o),function(){return r.removeEventListener(e,i,o)}}),[n])}},92444:function(n,e,r){r.d(e,{Z:function(){return o}});var t=r(36656),a=r(72791);function o(n,e,r){void 0===r&&(r=!1);var o=(0,a.useCallback)((function(){return document}),[]);return(0,t.Z)(o,n,e,r)}},9084:function(n,e,r){r.d(e,{Z:function(){return a}});var t=r(72791);function a(){var n=(0,t.useRef)(!0),e=(0,t.useRef)((function(){return n.current}));return(0,t.useEffect)((function(){return function(){n.current=!1}}),[]),e.current}},37215:function(n,e,r){r.d(e,{Z:function(){return a}});var t=r(72791);function a(n){var e=(0,t.useRef)(null);return(0,t.useEffect)((function(){e.current=n})),e.current}},2469:function(n,e,r){var t=r(18489),a=r(83738),o=r(81694),i=r.n(o),c=r(72791),s=r(80239),u=r(52134),f=r(56236),l=r(10162),d=r(72709),v=r(80473),p=r(27472),b=r(66543),m=r(80184),y=["bsPrefix","show","closeLabel","closeVariant","className","children","variant","onClose","dismissible","transition"],g=(0,p.Z)("h4");g.displayName="DivStyledAsH4";var Z=(0,b.Z)("alert-heading",{Component:g}),h=(0,b.Z)("alert-link",{Component:f.Z}),x={variant:"primary",show:!0,transition:d.Z,closeLabel:"Close alert"},N=c.forwardRef((function(n,e){var r=(0,s.Ch)(n,{show:"onClose"}),o=r.bsPrefix,c=r.show,f=r.closeLabel,p=r.closeVariant,b=r.className,g=r.children,Z=r.variant,h=r.onClose,x=r.dismissible,N=r.transition,w=(0,a.Z)(r,y),C=(0,l.vE)(o,"alert"),j=(0,u.Z)((function(n){h&&h(!1,n)})),O=!0===N?d.Z:N,P=(0,m.jsxs)("div",(0,t.Z)((0,t.Z)({role:"alert"},O?void 0:w),{},{ref:e,className:i()(b,C,Z&&"".concat(C,"-").concat(Z),x&&"".concat(C,"-dismissible")),children:[x&&(0,m.jsx)(v.Z,{onClick:j,"aria-label":f,variant:p}),g]}));return O?(0,m.jsx)(O,(0,t.Z)((0,t.Z)({unmountOnExit:!0},w),{},{ref:void 0,in:c,children:P})):c?P:null}));N.displayName="Alert",N.defaultProps=x,e.Z=Object.assign(N,{Link:h,Heading:Z})},9140:function(n,e,r){r.d(e,{Z:function(){return R}});var t=r(18489),a=r(83738),o=r(81694),i=r.n(o),c=r(72791),s=r(10162),u=r(66543),f=r(27472),l=r(80184),d=["bsPrefix","className","variant","as"],v=c.forwardRef((function(n,e){var r=n.bsPrefix,o=n.className,c=n.variant,u=n.as,f=void 0===u?"img":u,v=(0,a.Z)(n,d),p=(0,s.vE)(r,"card-img");return(0,l.jsx)(f,(0,t.Z)({ref:e,className:i()(c?"".concat(p,"-").concat(c):p,o)},v))}));v.displayName="CardImg";var p=v,b=r(96040),m=["bsPrefix","className","as"],y=c.forwardRef((function(n,e){var r=n.bsPrefix,o=n.className,u=n.as,f=void 0===u?"div":u,d=(0,a.Z)(n,m),v=(0,s.vE)(r,"card-header"),p=(0,c.useMemo)((function(){return{cardHeaderBsPrefix:v}}),[v]);return(0,l.jsx)(b.Z.Provider,{value:p,children:(0,l.jsx)(f,(0,t.Z)((0,t.Z)({ref:e},d),{},{className:i()(o,v)}))})}));y.displayName="CardHeader";var g=y,Z=["bsPrefix","className","bg","text","border","body","children","as"],h=(0,f.Z)("h5"),x=(0,f.Z)("h6"),N=(0,u.Z)("card-body"),w=(0,u.Z)("card-title",{Component:h}),C=(0,u.Z)("card-subtitle",{Component:x}),j=(0,u.Z)("card-link",{Component:"a"}),O=(0,u.Z)("card-text",{Component:"p"}),P=(0,u.Z)("card-footer"),E=(0,u.Z)("card-img-overlay"),k=c.forwardRef((function(n,e){var r=n.bsPrefix,o=n.className,c=n.bg,u=n.text,f=n.border,d=n.body,v=n.children,p=n.as,b=void 0===p?"div":p,m=(0,a.Z)(n,Z),y=(0,s.vE)(r,"card");return(0,l.jsx)(b,(0,t.Z)((0,t.Z)({ref:e},m),{},{className:i()(o,y,c&&"bg-".concat(c),u&&"text-".concat(u),f&&"border-".concat(f)),children:d?(0,l.jsx)(N,{children:v}):v}))}));k.displayName="Card",k.defaultProps={body:!1};var R=Object.assign(k,{Img:p,Title:w,Subtitle:C,Body:N,Link:j,Text:O,Header:g,Footer:P,ImgOverlay:E})},96040:function(n,e,r){var t=r(72791).createContext(null);t.displayName="CardHeaderContext",e.Z=t},80473:function(n,e,r){var t=r(18489),a=r(83738),o=r(52007),i=r.n(o),c=r(72791),s=r(81694),u=r.n(s),f=r(80184),l=["className","variant"],d={"aria-label":i().string,onClick:i().func,variant:i().oneOf(["white"])},v=c.forwardRef((function(n,e){var r=n.className,o=n.variant,i=(0,a.Z)(n,l);return(0,f.jsx)("button",(0,t.Z)({ref:e,type:"button",className:u()("btn-close",o&&"btn-close-".concat(o),r)},i))}));v.displayName="CloseButton",v.propTypes=d,v.defaultProps={"aria-label":"Close"},e.Z=v},2677:function(n,e,r){var t=r(50678),a=r(18489),o=r(83738),i=r(81694),c=r.n(i),s=r(72791),u=r(10162),f=r(80184),l=["as","bsPrefix","className"],d=["className"],v=["xxl","xl","lg","md","sm","xs"];var p=s.forwardRef((function(n,e){var r=function(n){var e=n.as,r=n.bsPrefix,t=n.className,i=(0,o.Z)(n,l);r=(0,u.vE)(r,"col");var s=[],f=[];return v.forEach((function(n){var e,t,a,o=i[n];delete i[n],"object"===typeof o&&null!=o?(e=o.span,t=o.offset,a=o.order):e=o;var c="xs"!==n?"-".concat(n):"";e&&s.push(!0===e?"".concat(r).concat(c):"".concat(r).concat(c,"-").concat(e)),null!=a&&f.push("order".concat(c,"-").concat(a)),null!=t&&f.push("offset".concat(c,"-").concat(t))})),[(0,a.Z)((0,a.Z)({},i),{},{className:c().apply(void 0,[t].concat(s,f))}),{as:e,bsPrefix:r,spans:s}]}(n),i=(0,t.Z)(r,2),s=i[0],p=s.className,b=(0,o.Z)(s,d),m=i[1],y=m.as,g=void 0===y?"div":y,Z=m.bsPrefix,h=m.spans;return(0,f.jsx)(g,(0,a.Z)((0,a.Z)({},b),{},{ref:e,className:c()(p,!h.length&&Z)}))}));p.displayName="Col",e.Z=p},72709:function(n,e,r){var t,a=r(18489),o=r(83738),i=r(36222),c=r(81694),s=r.n(c),u=r(72791),f=r(29334),l=r(71380),d=r(67202),v=r(85007),p=r(80184),b=["className","children","transitionClasses"],m=(t={},(0,i.Z)(t,f.d0,"show"),(0,i.Z)(t,f.cn,"show"),t),y=u.forwardRef((function(n,e){var r=n.className,t=n.children,i=n.transitionClasses,c=void 0===i?{}:i,f=(0,o.Z)(n,b),y=(0,u.useCallback)((function(n,e){(0,d.Z)(n),null==f.onEnter||f.onEnter(n,e)}),[f]);return(0,p.jsx)(v.Z,(0,a.Z)((0,a.Z)({ref:e,addEndListener:l.Z},f),{},{onEnter:y,childRef:t.ref,children:function(n,e){return u.cloneElement(t,(0,a.Z)((0,a.Z)({},e),{},{className:s()("fade",r,t.props.className,m[n],c[n])}))}}))}));y.defaultProps={in:!1,timeout:300,mountOnEnter:!1,unmountOnExit:!1,appear:!1},y.displayName="Fade",e.Z=y},91991:function(n,e,r){var t=r(72791).createContext(null);t.displayName="InputGroupContext",e.Z=t},89743:function(n,e,r){var t=r(18489),a=r(83738),o=r(81694),i=r.n(o),c=r(72791),s=r(10162),u=r(80184),f=["bsPrefix","className","as"],l=["xxl","xl","lg","md","sm","xs"],d=c.forwardRef((function(n,e){var r=n.bsPrefix,o=n.className,c=n.as,d=void 0===c?"div":c,v=(0,a.Z)(n,f),p=(0,s.vE)(r,"row"),b="".concat(p,"-cols"),m=[];return l.forEach((function(n){var e,r=v[n];delete v[n],e=null!=r&&"object"===typeof r?r.cols:r;var t="xs"!==n?"-".concat(n):"";null!=e&&m.push("".concat(b).concat(t,"-").concat(e))})),(0,u.jsx)(d,(0,t.Z)((0,t.Z)({ref:e},v),{},{className:i().apply(void 0,[o,p].concat(m))}))}));d.displayName="Row",e.Z=d},27472:function(n,e,r){var t=r(18489),a=r(72791),o=r(81694),i=r.n(o),c=r(80184);e.Z=function(n){return a.forwardRef((function(e,r){return(0,c.jsx)("div",(0,t.Z)((0,t.Z)({},e),{},{ref:r,className:i()(e.className,n)}))}))}},15897:function(n,e,r){function t(n,e){(null==e||e>n.length)&&(e=n.length);for(var r=0,t=new Array(e);r<e;r++)t[r]=n[r];return t}function a(n,e){return function(n){if(Array.isArray(n))return n}(n)||function(n,e){var r=null==n?null:"undefined"!==typeof Symbol&&n[Symbol.iterator]||n["@@iterator"];if(null!=r){var t,a,o=[],i=!0,c=!1;try{for(r=r.call(n);!(i=(t=r.next()).done)&&(o.push(t.value),!e||o.length!==e);i=!0);}catch(s){c=!0,a=s}finally{try{i||null==r.return||r.return()}finally{if(c)throw a}}return o}}(n,e)||function(n,e){if(n){if("string"===typeof n)return t(n,e);var r=Object.prototype.toString.call(n).slice(8,-1);return"Object"===r&&n.constructor&&(r=n.constructor.name),"Map"===r||"Set"===r?Array.from(n):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?t(n,e):void 0}}(n,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}r.d(e,{$:function(){return p}});var o=r(72344),i=r(72791),c=r(71087);function s(){if(console&&console.warn){for(var n,e=arguments.length,r=new Array(e),t=0;t<e;t++)r[t]=arguments[t];"string"===typeof r[0]&&(r[0]="react-i18next:: ".concat(r[0])),(n=console).warn.apply(n,r)}}var u={};function f(){for(var n=arguments.length,e=new Array(n),r=0;r<n;r++)e[r]=arguments[r];"string"===typeof e[0]&&u[e[0]]||("string"===typeof e[0]&&(u[e[0]]=new Date),s.apply(void 0,e))}function l(n,e,r){n.loadNamespaces(e,(function(){if(n.isInitialized)r();else{n.on("initialized",(function e(){setTimeout((function(){n.off("initialized",e)}),0),r()}))}}))}function d(n,e){var r=Object.keys(n);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(n);e&&(t=t.filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),r.push.apply(r,t)}return r}function v(n){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?d(Object(r),!0).forEach((function(e){(0,o.Z)(n,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(r)):d(Object(r)).forEach((function(e){Object.defineProperty(n,e,Object.getOwnPropertyDescriptor(r,e))}))}return n}function p(n){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},r=e.i18n,t=(0,i.useContext)(c.OO)||{},o=t.i18n,s=t.defaultNS,u=r||o||(0,c.nI)();if(u&&!u.reportNamespaces&&(u.reportNamespaces=new c.zv),!u){f("You will need to pass in an i18next instance by using initReactI18next");var d=function(n){return Array.isArray(n)?n[n.length-1]:n},p=[d,{},!1];return p.t=d,p.i18n={},p.ready=!1,p}u.options.react&&void 0!==u.options.react.wait&&f("It seems you are still using the old wait option, you may migrate to the new useSuspense behaviour.");var b=v(v(v({},(0,c.JP)()),u.options.react),e),m=b.useSuspense,y=b.keyPrefix,g=n||s||u.options&&u.options.defaultNS;g="string"===typeof g?[g]:g||["translation"],u.reportNamespaces.addUsedNamespaces&&u.reportNamespaces.addUsedNamespaces(g);var Z=(u.isInitialized||u.initializedStoreOnce)&&g.every((function(n){return function(n,e){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};if(!e.languages||!e.languages.length)return f("i18n.languages were undefined or empty",e.languages),!0;var t=e.languages[0],a=!!e.options&&e.options.fallbackLng,o=e.languages[e.languages.length-1];if("cimode"===t.toLowerCase())return!0;var i=function(n,r){var t=e.services.backendConnector.state["".concat(n,"|").concat(r)];return-1===t||2===t};return!(r.bindI18n&&r.bindI18n.indexOf("languageChanging")>-1&&e.services.backendConnector.backend&&e.isLanguageChangingTo&&!i(e.isLanguageChangingTo,n))&&(!!e.hasResourceBundle(t,n)||!e.services.backendConnector.backend||!(!i(t,n)||a&&!i(o,n)))}(n,u,b)}));function h(){return u.getFixedT(null,"fallback"===b.nsMode?g:g[0],y)}var x=a((0,i.useState)(h),2),N=x[0],w=x[1],C=(0,i.useRef)(!0);(0,i.useEffect)((function(){var n=b.bindI18n,e=b.bindI18nStore;function r(){C.current&&w(h)}return C.current=!0,Z||m||l(u,g,(function(){C.current&&w(h)})),n&&u&&u.on(n,r),e&&u&&u.store.on(e,r),function(){C.current=!1,n&&u&&n.split(" ").forEach((function(n){return u.off(n,r)})),e&&u&&e.split(" ").forEach((function(n){return u.store.off(n,r)}))}}),[u,g.join()]);var j=(0,i.useRef)(!0);(0,i.useEffect)((function(){C.current&&!j.current&&w(h),j.current=!1}),[u]);var O=[N,u,Z];if(O.t=N,O.i18n=u,O.ready=Z,Z)return O;if(!Z&&!m)return O;throw new Promise((function(n){l(u,g,(function(){n()}))}))}},42391:function(n){var e=function(){};n.exports=e}}]);
//# sourceMappingURL=8142.9cf0e432.chunk.js.map