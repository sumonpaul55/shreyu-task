"use strict";(self.webpackChunkshreyu_react_app=self.webpackChunkshreyu_react_app||[]).push([[8993],{81012:function(e,t,n){function r(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return Array.isArray(e)?e:Object.keys(e).map((function(t){return e[t].name=t,e[t]}))}function o(e){var t,n,o,i,a=e.enabled,f=e.enableEvents,s=e.placement,c=e.flip,u=e.offset,p=e.fixed,l=e.containerPadding,d=e.arrowElement,v=e.popperConfig,m=void 0===v?{}:v,h=function(e){var t={};return Array.isArray(e)?(null==e||e.forEach((function(e){t[e.name]=e})),t):e||t}(m.modifiers);return Object.assign({},m,{placement:s,enabled:a,strategy:p?"fixed":m.strategy,modifiers:r(Object.assign({},h,{eventListeners:{enabled:f},preventOverflow:Object.assign({},h.preventOverflow,{options:l?Object.assign({padding:l},null==(t=h.preventOverflow)?void 0:t.options):null==(n=h.preventOverflow)?void 0:n.options}),offset:{options:Object.assign({offset:u},null==(o=h.offset)?void 0:o.options)},arrow:Object.assign({},h.arrow,{enabled:!!d,options:Object.assign({},null==(i=h.arrow)?void 0:i.options,{element:d})}),flip:Object.assign({enabled:!!c},h.flip)}))})}n.d(t,{ZP:function(){return o}})},86192:function(e,t,n){n.d(t,{Z:function(){return Ce}});var r=n(31303),o=n(50678),i=n(72791),a=n(89472),f=Object.prototype.hasOwnProperty;function s(e,t,n){var r,o=(0,a.Z)(e.keys());try{for(o.s();!(r=o.n()).done;)if(c(n=r.value,t))return n}catch(i){o.e(i)}finally{o.f()}}function c(e,t){var n,r,o;if(e===t)return!0;if(e&&t&&(n=e.constructor)===t.constructor){if(n===Date)return e.getTime()===t.getTime();if(n===RegExp)return e.toString()===t.toString();if(n===Array){if((r=e.length)===t.length)for(;r--&&c(e[r],t[r]););return-1===r}if(n===Set){if(e.size!==t.size)return!1;var i,u=(0,a.Z)(e);try{for(u.s();!(i=u.n()).done;){if((o=r=i.value)&&"object"===typeof o&&!(o=s(t,o)))return!1;if(!t.has(o))return!1}}catch(d){u.e(d)}finally{u.f()}return!0}if(n===Map){if(e.size!==t.size)return!1;var p,l=(0,a.Z)(e);try{for(l.s();!(p=l.n()).done;){if((o=(r=p.value)[0])&&"object"===typeof o&&!(o=s(t,o)))return!1;if(!c(r[1],t.get(o)))return!1}}catch(d){l.e(d)}finally{l.f()}return!0}if(n===ArrayBuffer)e=new Uint8Array(e),t=new Uint8Array(t);else if(n===DataView){if((r=e.byteLength)===t.byteLength)for(;r--&&e.getInt8(r)===t.getInt8(r););return-1===r}if(ArrayBuffer.isView(e)){if((r=e.byteLength)===t.byteLength)for(;r--&&e[r]===t[r];);return-1===r}if(!n||"object"===typeof e){for(n in r=0,e){if(f.call(e,n)&&++r&&!f.call(t,n))return!1;if(!(n in t)||!c(e[n],t[n]))return!1}return Object.keys(t).length===r}}return e!==e&&t!==t}var u=n(9084);var p=function(e){var t=(0,u.Z)();return[e[0],(0,i.useCallback)((function(n){if(t())return e[1](n)}),[t,e[1]])]};function l(e){return e.split("-")[0]}function d(e){if(null==e)return window;if("[object Window]"!==e.toString()){var t=e.ownerDocument;return t&&t.defaultView||window}return e}function v(e){return e instanceof d(e).Element||e instanceof Element}function m(e){return e instanceof d(e).HTMLElement||e instanceof HTMLElement}function h(e){return"undefined"!==typeof ShadowRoot&&(e instanceof d(e).ShadowRoot||e instanceof ShadowRoot)}var g=Math.round;function b(e,t){void 0===t&&(t=!1);var n=e.getBoundingClientRect(),r=1,o=1;if(m(e)&&t){var i=e.offsetHeight,a=e.offsetWidth;a>0&&(r=n.width/a||1),i>0&&(o=n.height/i||1)}return{width:g(n.width/r),height:g(n.height/o),top:g(n.top/o),right:g(n.right/r),bottom:g(n.bottom/o),left:g(n.left/r),x:g(n.left/r),y:g(n.top/o)}}function y(e){var t=b(e),n=e.offsetWidth,r=e.offsetHeight;return Math.abs(t.width-n)<=1&&(n=t.width),Math.abs(t.height-r)<=1&&(r=t.height),{x:e.offsetLeft,y:e.offsetTop,width:n,height:r}}function w(e,t){var n=t.getRootNode&&t.getRootNode();if(e.contains(t))return!0;if(n&&h(n)){var r=t;do{if(r&&e.isSameNode(r))return!0;r=r.parentNode||r.host}while(r)}return!1}function O(e){return e?(e.nodeName||"").toLowerCase():null}function x(e){return d(e).getComputedStyle(e)}function j(e){return["table","td","th"].indexOf(O(e))>=0}function E(e){return((v(e)?e.ownerDocument:e.document)||window.document).documentElement}function D(e){return"html"===O(e)?e:e.assignedSlot||e.parentNode||(h(e)?e.host:null)||E(e)}function k(e){return m(e)&&"fixed"!==x(e).position?e.offsetParent:null}function A(e){for(var t=d(e),n=k(e);n&&j(n)&&"static"===x(n).position;)n=k(n);return n&&("html"===O(n)||"body"===O(n)&&"static"===x(n).position)?t:n||function(e){var t=-1!==navigator.userAgent.toLowerCase().indexOf("firefox");if(-1!==navigator.userAgent.indexOf("Trident")&&m(e)&&"fixed"===x(e).position)return null;for(var n=D(e);m(n)&&["html","body"].indexOf(O(n))<0;){var r=x(n);if("none"!==r.transform||"none"!==r.perspective||"paint"===r.contain||-1!==["transform","perspective"].indexOf(r.willChange)||t&&"filter"===r.willChange||t&&r.filter&&"none"!==r.filter)return n;n=n.parentNode}return null}(e)||t}function L(e){return["top","bottom"].indexOf(e)>=0?"x":"y"}var M=Math.max,P=Math.min,C=Math.round;function R(e,t,n){return M(e,P(t,n))}function W(e){return Object.assign({},{top:0,right:0,bottom:0,left:0},e)}function B(e,t){return t.reduce((function(t,n){return t[n]=e,t}),{})}var Z="top",S="bottom",T="right",H="left",q="auto",U=[Z,S,T,H],V="start",z="end",I="clippingParents",N="viewport",_="popper",K="reference",F=U.reduce((function(e,t){return e.concat([t+"-"+V,t+"-"+z])}),[]),X=[].concat(U,[q]).reduce((function(e,t){return e.concat([t,t+"-"+V,t+"-"+z])}),[]),Y=["beforeRead","read","afterRead","beforeMain","main","afterMain","beforeWrite","write","afterWrite"],G=function(e,t){return W("number"!==typeof(e="function"===typeof e?e(Object.assign({},t.rects,{placement:t.placement})):e)?e:B(e,U))};var J={name:"arrow",enabled:!0,phase:"main",fn:function(e){var t,n=e.state,r=e.name,o=e.options,i=n.elements.arrow,a=n.modifiersData.popperOffsets,f=l(n.placement),s=L(f),c=[H,T].indexOf(f)>=0?"height":"width";if(i&&a){var u=G(o.padding,n),p=y(i),d="y"===s?Z:H,v="y"===s?S:T,m=n.rects.reference[c]+n.rects.reference[s]-a[s]-n.rects.popper[c],h=a[s]-n.rects.reference[s],g=A(i),b=g?"y"===s?g.clientHeight||0:g.clientWidth||0:0,w=m/2-h/2,O=u[d],x=b-p[c]-u[v],j=b/2-p[c]/2+w,E=R(O,j,x),D=s;n.modifiersData[r]=((t={})[D]=E,t.centerOffset=E-j,t)}},effect:function(e){var t=e.state,n=e.options.element,r=void 0===n?"[data-popper-arrow]":n;null!=r&&("string"!==typeof r||(r=t.elements.popper.querySelector(r)))&&w(t.elements.popper,r)&&(t.elements.arrow=r)},requires:["popperOffsets"],requiresIfExists:["preventOverflow"]};function Q(e){return e.split("-")[1]}var $={top:"auto",right:"auto",bottom:"auto",left:"auto"};function ee(e){var t,n=e.popper,r=e.popperRect,o=e.placement,i=e.variation,a=e.offsets,f=e.position,s=e.gpuAcceleration,c=e.adaptive,u=e.roundOffsets,p=!0===u?function(e){var t=e.x,n=e.y,r=window.devicePixelRatio||1;return{x:C(C(t*r)/r)||0,y:C(C(n*r)/r)||0}}(a):"function"===typeof u?u(a):a,l=p.x,v=void 0===l?0:l,m=p.y,h=void 0===m?0:m,g=a.hasOwnProperty("x"),b=a.hasOwnProperty("y"),y=H,w=Z,O=window;if(c){var j=A(n),D="clientHeight",k="clientWidth";j===d(n)&&"static"!==x(j=E(n)).position&&"absolute"===f&&(D="scrollHeight",k="scrollWidth"),o!==Z&&(o!==H&&o!==T||i!==z)||(w=S,h-=j[D]-r.height,h*=s?1:-1),o!==H&&(o!==Z&&o!==S||i!==z)||(y=T,v-=j[k]-r.width,v*=s?1:-1)}var L,M=Object.assign({position:f},c&&$);return s?Object.assign({},M,((L={})[w]=b?"0":"",L[y]=g?"0":"",L.transform=(O.devicePixelRatio||1)<=1?"translate("+v+"px, "+h+"px)":"translate3d("+v+"px, "+h+"px, 0)",L)):Object.assign({},M,((t={})[w]=b?h+"px":"",t[y]=g?v+"px":"",t.transform="",t))}var te={passive:!0};var ne={left:"right",right:"left",bottom:"top",top:"bottom"};function re(e){return e.replace(/left|right|bottom|top/g,(function(e){return ne[e]}))}var oe={start:"end",end:"start"};function ie(e){return e.replace(/start|end/g,(function(e){return oe[e]}))}function ae(e){var t=d(e);return{scrollLeft:t.pageXOffset,scrollTop:t.pageYOffset}}function fe(e){return b(E(e)).left+ae(e).scrollLeft}function se(e){var t=x(e),n=t.overflow,r=t.overflowX,o=t.overflowY;return/auto|scroll|overlay|hidden/.test(n+o+r)}function ce(e){return["html","body","#document"].indexOf(O(e))>=0?e.ownerDocument.body:m(e)&&se(e)?e:ce(D(e))}function ue(e,t){var n;void 0===t&&(t=[]);var r=ce(e),o=r===(null==(n=e.ownerDocument)?void 0:n.body),i=d(r),a=o?[i].concat(i.visualViewport||[],se(r)?r:[]):r,f=t.concat(a);return o?f:f.concat(ue(D(a)))}function pe(e){return Object.assign({},e,{left:e.x,top:e.y,right:e.x+e.width,bottom:e.y+e.height})}function le(e,t){return t===N?pe(function(e){var t=d(e),n=E(e),r=t.visualViewport,o=n.clientWidth,i=n.clientHeight,a=0,f=0;return r&&(o=r.width,i=r.height,/^((?!chrome|android).)*safari/i.test(navigator.userAgent)||(a=r.offsetLeft,f=r.offsetTop)),{width:o,height:i,x:a+fe(e),y:f}}(e)):m(t)?function(e){var t=b(e);return t.top=t.top+e.clientTop,t.left=t.left+e.clientLeft,t.bottom=t.top+e.clientHeight,t.right=t.left+e.clientWidth,t.width=e.clientWidth,t.height=e.clientHeight,t.x=t.left,t.y=t.top,t}(t):pe(function(e){var t,n=E(e),r=ae(e),o=null==(t=e.ownerDocument)?void 0:t.body,i=M(n.scrollWidth,n.clientWidth,o?o.scrollWidth:0,o?o.clientWidth:0),a=M(n.scrollHeight,n.clientHeight,o?o.scrollHeight:0,o?o.clientHeight:0),f=-r.scrollLeft+fe(e),s=-r.scrollTop;return"rtl"===x(o||n).direction&&(f+=M(n.clientWidth,o?o.clientWidth:0)-i),{width:i,height:a,x:f,y:s}}(E(e)))}function de(e,t,n){var r="clippingParents"===t?function(e){var t=ue(D(e)),n=["absolute","fixed"].indexOf(x(e).position)>=0&&m(e)?A(e):e;return v(n)?t.filter((function(e){return v(e)&&w(e,n)&&"body"!==O(e)})):[]}(e):[].concat(t),o=[].concat(r,[n]),i=o[0],a=o.reduce((function(t,n){var r=le(e,n);return t.top=M(r.top,t.top),t.right=P(r.right,t.right),t.bottom=P(r.bottom,t.bottom),t.left=M(r.left,t.left),t}),le(e,i));return a.width=a.right-a.left,a.height=a.bottom-a.top,a.x=a.left,a.y=a.top,a}function ve(e){var t,n=e.reference,r=e.element,o=e.placement,i=o?l(o):null,a=o?Q(o):null,f=n.x+n.width/2-r.width/2,s=n.y+n.height/2-r.height/2;switch(i){case Z:t={x:f,y:n.y-r.height};break;case S:t={x:f,y:n.y+n.height};break;case T:t={x:n.x+n.width,y:s};break;case H:t={x:n.x-r.width,y:s};break;default:t={x:n.x,y:n.y}}var c=i?L(i):null;if(null!=c){var u="y"===c?"height":"width";switch(a){case V:t[c]=t[c]-(n[u]/2-r[u]/2);break;case z:t[c]=t[c]+(n[u]/2-r[u]/2)}}return t}function me(e,t){void 0===t&&(t={});var n=t,r=n.placement,o=void 0===r?e.placement:r,i=n.boundary,a=void 0===i?I:i,f=n.rootBoundary,s=void 0===f?N:f,c=n.elementContext,u=void 0===c?_:c,p=n.altBoundary,l=void 0!==p&&p,d=n.padding,m=void 0===d?0:d,h=W("number"!==typeof m?m:B(m,U)),g=u===_?K:_,y=e.rects.popper,w=e.elements[l?g:u],O=de(v(w)?w:w.contextElement||E(e.elements.popper),a,s),x=b(e.elements.reference),j=ve({reference:x,element:y,strategy:"absolute",placement:o}),D=pe(Object.assign({},y,j)),k=u===_?D:x,A={top:O.top-k.top+h.top,bottom:k.bottom-O.bottom+h.bottom,left:O.left-k.left+h.left,right:k.right-O.right+h.right},L=e.modifiersData.offset;if(u===_&&L){var M=L[o];Object.keys(A).forEach((function(e){var t=[T,S].indexOf(e)>=0?1:-1,n=[Z,S].indexOf(e)>=0?"y":"x";A[e]+=M[n]*t}))}return A}function he(e,t,n){return void 0===n&&(n={x:0,y:0}),{top:e.top-t.height-n.y,right:e.right-t.width+n.x,bottom:e.bottom-t.height+n.y,left:e.left-t.width-n.x}}function ge(e){return[Z,T,S,H].some((function(t){return e[t]>=0}))}var be={name:"offset",enabled:!0,phase:"main",requires:["popperOffsets"],fn:function(e){var t=e.state,n=e.options,r=e.name,o=n.offset,i=void 0===o?[0,0]:o,a=X.reduce((function(e,n){return e[n]=function(e,t,n){var r=l(e),o=[H,Z].indexOf(r)>=0?-1:1,i="function"===typeof n?n(Object.assign({},t,{placement:e})):n,a=i[0],f=i[1];return a=a||0,f=(f||0)*o,[H,T].indexOf(r)>=0?{x:f,y:a}:{x:a,y:f}}(n,t.rects,i),e}),{}),f=a[t.placement],s=f.x,c=f.y;null!=t.modifiersData.popperOffsets&&(t.modifiersData.popperOffsets.x+=s,t.modifiersData.popperOffsets.y+=c),t.modifiersData[r]=a}};var ye={name:"preventOverflow",enabled:!0,phase:"main",fn:function(e){var t=e.state,n=e.options,r=e.name,o=n.mainAxis,i=void 0===o||o,a=n.altAxis,f=void 0!==a&&a,s=n.boundary,c=n.rootBoundary,u=n.altBoundary,p=n.padding,d=n.tether,v=void 0===d||d,m=n.tetherOffset,h=void 0===m?0:m,g=me(t,{boundary:s,rootBoundary:c,padding:p,altBoundary:u}),b=l(t.placement),w=Q(t.placement),O=!w,x=L(b),j="x"===x?"y":"x",E=t.modifiersData.popperOffsets,D=t.rects.reference,k=t.rects.popper,C="function"===typeof h?h(Object.assign({},t.rects,{placement:t.placement})):h,W={x:0,y:0};if(E){if(i||f){var B="y"===x?Z:H,q="y"===x?S:T,U="y"===x?"height":"width",z=E[x],I=E[x]+g[B],N=E[x]-g[q],_=v?-k[U]/2:0,K=w===V?D[U]:k[U],F=w===V?-k[U]:-D[U],X=t.elements.arrow,Y=v&&X?y(X):{width:0,height:0},G=t.modifiersData["arrow#persistent"]?t.modifiersData["arrow#persistent"].padding:{top:0,right:0,bottom:0,left:0},J=G[B],$=G[q],ee=R(0,D[U],Y[U]),te=O?D[U]/2-_-ee-J-C:K-ee-J-C,ne=O?-D[U]/2+_+ee+$+C:F+ee+$+C,re=t.elements.arrow&&A(t.elements.arrow),oe=re?"y"===x?re.clientTop||0:re.clientLeft||0:0,ie=t.modifiersData.offset?t.modifiersData.offset[t.placement][x]:0,ae=E[x]+te-ie-oe,fe=E[x]+ne-ie;if(i){var se=R(v?P(I,ae):I,z,v?M(N,fe):N);E[x]=se,W[x]=se-z}if(f){var ce="x"===x?Z:H,ue="x"===x?S:T,pe=E[j],le=pe+g[ce],de=pe-g[ue],ve=R(v?P(le,ae):le,pe,v?M(de,fe):de);E[j]=ve,W[j]=ve-pe}}t.modifiersData[r]=W}},requiresIfExists:["offset"]};function we(e,t,n){void 0===n&&(n=!1);var r=m(t),o=m(t)&&function(e){var t=e.getBoundingClientRect(),n=t.width/e.offsetWidth||1,r=t.height/e.offsetHeight||1;return 1!==n||1!==r}(t),i=E(t),a=b(e,o),f={scrollLeft:0,scrollTop:0},s={x:0,y:0};return(r||!r&&!n)&&(("body"!==O(t)||se(i))&&(f=function(e){return e!==d(e)&&m(e)?{scrollLeft:(t=e).scrollLeft,scrollTop:t.scrollTop}:ae(e);var t}(t)),m(t)?((s=b(t,!0)).x+=t.clientLeft,s.y+=t.clientTop):i&&(s.x=fe(i))),{x:a.left+f.scrollLeft-s.x,y:a.top+f.scrollTop-s.y,width:a.width,height:a.height}}function Oe(e){var t=new Map,n=new Set,r=[];function o(e){n.add(e.name),[].concat(e.requires||[],e.requiresIfExists||[]).forEach((function(e){if(!n.has(e)){var r=t.get(e);r&&o(r)}})),r.push(e)}return e.forEach((function(e){t.set(e.name,e)})),e.forEach((function(e){n.has(e.name)||o(e)})),r}function xe(e){var t;return function(){return t||(t=new Promise((function(n){Promise.resolve().then((function(){t=void 0,n(e())}))}))),t}}var je={placement:"bottom",modifiers:[],strategy:"absolute"};function Ee(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return!t.some((function(e){return!(e&&"function"===typeof e.getBoundingClientRect)}))}function De(e){void 0===e&&(e={});var t=e,n=t.defaultModifiers,r=void 0===n?[]:n,o=t.defaultOptions,i=void 0===o?je:o;return function(e,t,n){void 0===n&&(n=i);var o={placement:"bottom",orderedModifiers:[],options:Object.assign({},je,i),modifiersData:{},elements:{reference:e,popper:t},attributes:{},styles:{}},a=[],f=!1,s={state:o,setOptions:function(n){var f="function"===typeof n?n(o.options):n;c(),o.options=Object.assign({},i,o.options,f),o.scrollParents={reference:v(e)?ue(e):e.contextElement?ue(e.contextElement):[],popper:ue(t)};var u=function(e){var t=Oe(e);return Y.reduce((function(e,n){return e.concat(t.filter((function(e){return e.phase===n})))}),[])}(function(e){var t=e.reduce((function(e,t){var n=e[t.name];return e[t.name]=n?Object.assign({},n,t,{options:Object.assign({},n.options,t.options),data:Object.assign({},n.data,t.data)}):t,e}),{});return Object.keys(t).map((function(e){return t[e]}))}([].concat(r,o.options.modifiers)));return o.orderedModifiers=u.filter((function(e){return e.enabled})),o.orderedModifiers.forEach((function(e){var t=e.name,n=e.options,r=void 0===n?{}:n,i=e.effect;if("function"===typeof i){var f=i({state:o,name:t,instance:s,options:r}),c=function(){};a.push(f||c)}})),s.update()},forceUpdate:function(){if(!f){var e=o.elements,t=e.reference,n=e.popper;if(Ee(t,n)){o.rects={reference:we(t,A(n),"fixed"===o.options.strategy),popper:y(n)},o.reset=!1,o.placement=o.options.placement,o.orderedModifiers.forEach((function(e){return o.modifiersData[e.name]=Object.assign({},e.data)}));for(var r=0;r<o.orderedModifiers.length;r++)if(!0!==o.reset){var i=o.orderedModifiers[r],a=i.fn,c=i.options,u=void 0===c?{}:c,p=i.name;"function"===typeof a&&(o=a({state:o,options:u,name:p,instance:s})||o)}else o.reset=!1,r=-1}}},update:xe((function(){return new Promise((function(e){s.forceUpdate(),e(o)}))})),destroy:function(){c(),f=!0}};if(!Ee(e,t))return s;function c(){a.forEach((function(e){return e()})),a=[]}return s.setOptions(n).then((function(e){!f&&n.onFirstUpdate&&n.onFirstUpdate(e)})),s}}var ke=De({defaultModifiers:[{name:"hide",enabled:!0,phase:"main",requiresIfExists:["preventOverflow"],fn:function(e){var t=e.state,n=e.name,r=t.rects.reference,o=t.rects.popper,i=t.modifiersData.preventOverflow,a=me(t,{elementContext:"reference"}),f=me(t,{altBoundary:!0}),s=he(a,r),c=he(f,o,i),u=ge(s),p=ge(c);t.modifiersData[n]={referenceClippingOffsets:s,popperEscapeOffsets:c,isReferenceHidden:u,hasPopperEscaped:p},t.attributes.popper=Object.assign({},t.attributes.popper,{"data-popper-reference-hidden":u,"data-popper-escaped":p})}},{name:"popperOffsets",enabled:!0,phase:"read",fn:function(e){var t=e.state,n=e.name;t.modifiersData[n]=ve({reference:t.rects.reference,element:t.rects.popper,strategy:"absolute",placement:t.placement})},data:{}},{name:"computeStyles",enabled:!0,phase:"beforeWrite",fn:function(e){var t=e.state,n=e.options,r=n.gpuAcceleration,o=void 0===r||r,i=n.adaptive,a=void 0===i||i,f=n.roundOffsets,s=void 0===f||f,c={placement:l(t.placement),variation:Q(t.placement),popper:t.elements.popper,popperRect:t.rects.popper,gpuAcceleration:o};null!=t.modifiersData.popperOffsets&&(t.styles.popper=Object.assign({},t.styles.popper,ee(Object.assign({},c,{offsets:t.modifiersData.popperOffsets,position:t.options.strategy,adaptive:a,roundOffsets:s})))),null!=t.modifiersData.arrow&&(t.styles.arrow=Object.assign({},t.styles.arrow,ee(Object.assign({},c,{offsets:t.modifiersData.arrow,position:"absolute",adaptive:!1,roundOffsets:s})))),t.attributes.popper=Object.assign({},t.attributes.popper,{"data-popper-placement":t.placement})},data:{}},{name:"eventListeners",enabled:!0,phase:"write",fn:function(){},effect:function(e){var t=e.state,n=e.instance,r=e.options,o=r.scroll,i=void 0===o||o,a=r.resize,f=void 0===a||a,s=d(t.elements.popper),c=[].concat(t.scrollParents.reference,t.scrollParents.popper);return i&&c.forEach((function(e){e.addEventListener("scroll",n.update,te)})),f&&s.addEventListener("resize",n.update,te),function(){i&&c.forEach((function(e){e.removeEventListener("scroll",n.update,te)})),f&&s.removeEventListener("resize",n.update,te)}},data:{}},be,{name:"flip",enabled:!0,phase:"main",fn:function(e){var t=e.state,n=e.options,r=e.name;if(!t.modifiersData[r]._skip){for(var o=n.mainAxis,i=void 0===o||o,a=n.altAxis,f=void 0===a||a,s=n.fallbackPlacements,c=n.padding,u=n.boundary,p=n.rootBoundary,d=n.altBoundary,v=n.flipVariations,m=void 0===v||v,h=n.allowedAutoPlacements,g=t.options.placement,b=l(g),y=s||(b===g||!m?[re(g)]:function(e){if(l(e)===q)return[];var t=re(e);return[ie(e),t,ie(t)]}(g)),w=[g].concat(y).reduce((function(e,n){return e.concat(l(n)===q?function(e,t){void 0===t&&(t={});var n=t,r=n.placement,o=n.boundary,i=n.rootBoundary,a=n.padding,f=n.flipVariations,s=n.allowedAutoPlacements,c=void 0===s?X:s,u=Q(r),p=u?f?F:F.filter((function(e){return Q(e)===u})):U,d=p.filter((function(e){return c.indexOf(e)>=0}));0===d.length&&(d=p);var v=d.reduce((function(t,n){return t[n]=me(e,{placement:n,boundary:o,rootBoundary:i,padding:a})[l(n)],t}),{});return Object.keys(v).sort((function(e,t){return v[e]-v[t]}))}(t,{placement:n,boundary:u,rootBoundary:p,padding:c,flipVariations:m,allowedAutoPlacements:h}):n)}),[]),O=t.rects.reference,x=t.rects.popper,j=new Map,E=!0,D=w[0],k=0;k<w.length;k++){var A=w[k],L=l(A),M=Q(A)===V,P=[Z,S].indexOf(L)>=0,C=P?"width":"height",R=me(t,{placement:A,boundary:u,rootBoundary:p,altBoundary:d,padding:c}),W=P?M?T:H:M?S:Z;O[C]>x[C]&&(W=re(W));var B=re(W),z=[];if(i&&z.push(R[L]<=0),f&&z.push(R[W]<=0,R[B]<=0),z.every((function(e){return e}))){D=A,E=!1;break}j.set(A,z)}if(E)for(var I=function(e){var t=w.find((function(t){var n=j.get(t);if(n)return n.slice(0,e).every((function(e){return e}))}));if(t)return D=t,"break"},N=m?3:1;N>0;N--){if("break"===I(N))break}t.placement!==D&&(t.modifiersData[r]._skip=!0,t.placement=D,t.reset=!0)}},requiresIfExists:["offset"],data:{_skip:!1}},ye,J]}),Ae=["enabled","placement","strategy","modifiers"];var Le={name:"applyStyles",enabled:!1,phase:"afterWrite",fn:function(){}},Me={name:"ariaDescribedBy",enabled:!0,phase:"afterWrite",effect:function(e){var t=e.state;return function(){var e=t.elements,n=e.reference,r=e.popper;if("removeAttribute"in n){var o=(n.getAttribute("aria-describedby")||"").split(",").filter((function(e){return e.trim()!==r.id}));o.length?n.setAttribute("aria-describedby",o.join(",")):n.removeAttribute("aria-describedby")}}},fn:function(e){var t,n=e.state.elements,r=n.popper,o=n.reference,i=null==(t=r.getAttribute("role"))?void 0:t.toLowerCase();if(r.id&&"tooltip"===i&&"setAttribute"in o){var a=o.getAttribute("aria-describedby");if(a&&-1!==a.split(",").indexOf(r.id))return;o.setAttribute("aria-describedby",a?"".concat(a,",").concat(r.id):r.id)}}},Pe=[];var Ce=function(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},a=n.enabled,f=void 0===a||a,s=n.placement,u=void 0===s?"bottom":s,l=n.strategy,d=void 0===l?"absolute":l,v=n.modifiers,m=void 0===v?Pe:v,h=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(n,Ae),g=(0,i.useRef)(m),b=(0,i.useRef)(),y=(0,i.useCallback)((function(){var e;null==(e=b.current)||e.update()}),[]),w=(0,i.useCallback)((function(){var e;null==(e=b.current)||e.forceUpdate()}),[]),O=p((0,i.useState)({placement:u,update:y,forceUpdate:w,attributes:{},styles:{popper:{},arrow:{}}})),x=(0,o.Z)(O,2),j=x[0],E=x[1],D=(0,i.useMemo)((function(){return{name:"updateStateModifier",enabled:!0,phase:"write",requires:["computeStyles"],fn:function(e){var t=e.state,n={},r={};Object.keys(t.elements).forEach((function(e){n[e]=t.styles[e],r[e]=t.attributes[e]})),E({state:t,styles:n,attributes:r,update:y,forceUpdate:w,placement:t.placement})}}}),[y,w,E]),k=(0,i.useMemo)((function(){return c(g.current,m)||(g.current=m),g.current}),[m]);return(0,i.useEffect)((function(){b.current&&f&&b.current.setOptions({placement:u,strategy:d,modifiers:[].concat((0,r.Z)(k),[D,Le])})}),[d,u,D,f,k]),(0,i.useEffect)((function(){if(f&&null!=e&&null!=t)return b.current=ke(e,t,Object.assign({},h,{placement:u,strategy:d,modifiers:[].concat((0,r.Z)(k),[Me,D])})),function(){null!=b.current&&(b.current.destroy(),b.current=void 0,E((function(e){return Object.assign({},e,{attributes:{},styles:{popper:{}}})})))}}),[f,e,t]),j}},66595:function(e,t,n){var r=n(53189),o=n(92899),i=n(78376),a=n(72791),f=n(22519),s=n(42391),c=n.n(s),u=27,p=function(){};var l=function(e){return e&&("current"in e?e.current:e)};t.Z=function(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},s=n.disabled,d=n.clickTrigger,v=void 0===d?"click":d,m=(0,a.useRef)(!1),h=t||p,g=(0,a.useCallback)((function(t){var n,o=l(e);c()(!!o,"RootClose captured a close event but does not have a ref to compare it to. useRootClose(), should be passed a ref that resolves to a DOM node"),m.current=!o||!!((n=t).metaKey||n.altKey||n.ctrlKey||n.shiftKey)||!function(e){return 0===e.button}(t)||!!(0,r.Z)(o,t.target)}),[e]),b=(0,f.Z)((function(e){m.current||h(e)})),y=(0,f.Z)((function(e){e.keyCode===u&&h(e)}));(0,a.useEffect)((function(){if(!s&&null!=e){var t=window.event,n=(0,i.Z)(l(e)),r=(0,o.Z)(n,v,g,!0),a=(0,o.Z)(n,v,(function(e){e!==t?b(e):t=void 0})),f=(0,o.Z)(n,"keyup",(function(e){e!==t?y(e):t=void 0})),c=[];return"ontouchstart"in n.documentElement&&(c=[].slice.call(n.body.children).map((function(e){return(0,o.Z)(e,"mousemove",p)}))),function(){r(),a(),f(),c.forEach((function(e){return e()}))}}}),[e,s,v,g,b,y])}},53189:function(e,t,n){function r(e,t){return e.contains?e.contains(t):e.compareDocumentPosition?e===t||!!(16&e.compareDocumentPosition(t)):void 0}n.d(t,{Z:function(){return r}})},42391:function(e){var t=function(){};e.exports=t}}]);
//# sourceMappingURL=8993.c78d4e67.chunk.js.map