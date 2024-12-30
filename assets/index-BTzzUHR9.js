(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(i){if(i.ep)return;i.ep=!0;const s=n(i);fetch(i.href,s)}})();function tk(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var IA={exports:{}},mh={},CA={exports:{}},oe={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var _l=Symbol.for("react.element"),nk=Symbol.for("react.portal"),rk=Symbol.for("react.fragment"),ik=Symbol.for("react.strict_mode"),sk=Symbol.for("react.profiler"),ok=Symbol.for("react.provider"),ak=Symbol.for("react.context"),lk=Symbol.for("react.forward_ref"),uk=Symbol.for("react.suspense"),ck=Symbol.for("react.memo"),hk=Symbol.for("react.lazy"),Qy=Symbol.iterator;function dk(t){return t===null||typeof t!="object"?null:(t=Qy&&t[Qy]||t["@@iterator"],typeof t=="function"?t:null)}var SA={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},RA=Object.assign,kA={};function co(t,e,n){this.props=t,this.context=e,this.refs=kA,this.updater=n||SA}co.prototype.isReactComponent={};co.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};co.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function xA(){}xA.prototype=co.prototype;function fm(t,e,n){this.props=t,this.context=e,this.refs=kA,this.updater=n||SA}var pm=fm.prototype=new xA;pm.constructor=fm;RA(pm,co.prototype);pm.isPureReactComponent=!0;var Yy=Array.isArray,NA=Object.prototype.hasOwnProperty,mm={current:null},PA={key:!0,ref:!0,__self:!0,__source:!0};function bA(t,e,n){var r,i={},s=null,o=null;if(e!=null)for(r in e.ref!==void 0&&(o=e.ref),e.key!==void 0&&(s=""+e.key),e)NA.call(e,r)&&!PA.hasOwnProperty(r)&&(i[r]=e[r]);var a=arguments.length-2;if(a===1)i.children=n;else if(1<a){for(var l=Array(a),c=0;c<a;c++)l[c]=arguments[c+2];i.children=l}if(t&&t.defaultProps)for(r in a=t.defaultProps,a)i[r]===void 0&&(i[r]=a[r]);return{$$typeof:_l,type:t,key:s,ref:o,props:i,_owner:mm.current}}function fk(t,e){return{$$typeof:_l,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function gm(t){return typeof t=="object"&&t!==null&&t.$$typeof===_l}function pk(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var Xy=/\/+/g;function Od(t,e){return typeof t=="object"&&t!==null&&t.key!=null?pk(""+t.key):e.toString(36)}function Lu(t,e,n,r,i){var s=typeof t;(s==="undefined"||s==="boolean")&&(t=null);var o=!1;if(t===null)o=!0;else switch(s){case"string":case"number":o=!0;break;case"object":switch(t.$$typeof){case _l:case nk:o=!0}}if(o)return o=t,i=i(o),t=r===""?"."+Od(o,0):r,Yy(i)?(n="",t!=null&&(n=t.replace(Xy,"$&/")+"/"),Lu(i,e,n,"",function(c){return c})):i!=null&&(gm(i)&&(i=fk(i,n+(!i.key||o&&o.key===i.key?"":(""+i.key).replace(Xy,"$&/")+"/")+t)),e.push(i)),1;if(o=0,r=r===""?".":r+":",Yy(t))for(var a=0;a<t.length;a++){s=t[a];var l=r+Od(s,a);o+=Lu(s,e,n,l,i)}else if(l=dk(t),typeof l=="function")for(t=l.call(t),a=0;!(s=t.next()).done;)s=s.value,l=r+Od(s,a++),o+=Lu(s,e,n,l,i);else if(s==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return o}function su(t,e,n){if(t==null)return t;var r=[],i=0;return Lu(t,r,"","",function(s){return e.call(n,s,i++)}),r}function mk(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var bt={current:null},Ou={transition:null},gk={ReactCurrentDispatcher:bt,ReactCurrentBatchConfig:Ou,ReactCurrentOwner:mm};function DA(){throw Error("act(...) is not supported in production builds of React.")}oe.Children={map:su,forEach:function(t,e,n){su(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return su(t,function(){e++}),e},toArray:function(t){return su(t,function(e){return e})||[]},only:function(t){if(!gm(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};oe.Component=co;oe.Fragment=rk;oe.Profiler=sk;oe.PureComponent=fm;oe.StrictMode=ik;oe.Suspense=uk;oe.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=gk;oe.act=DA;oe.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var r=RA({},t.props),i=t.key,s=t.ref,o=t._owner;if(e!=null){if(e.ref!==void 0&&(s=e.ref,o=mm.current),e.key!==void 0&&(i=""+e.key),t.type&&t.type.defaultProps)var a=t.type.defaultProps;for(l in e)NA.call(e,l)&&!PA.hasOwnProperty(l)&&(r[l]=e[l]===void 0&&a!==void 0?a[l]:e[l])}var l=arguments.length-2;if(l===1)r.children=n;else if(1<l){a=Array(l);for(var c=0;c<l;c++)a[c]=arguments[c+2];r.children=a}return{$$typeof:_l,type:t.type,key:i,ref:s,props:r,_owner:o}};oe.createContext=function(t){return t={$$typeof:ak,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:ok,_context:t},t.Consumer=t};oe.createElement=bA;oe.createFactory=function(t){var e=bA.bind(null,t);return e.type=t,e};oe.createRef=function(){return{current:null}};oe.forwardRef=function(t){return{$$typeof:lk,render:t}};oe.isValidElement=gm;oe.lazy=function(t){return{$$typeof:hk,_payload:{_status:-1,_result:t},_init:mk}};oe.memo=function(t,e){return{$$typeof:ck,type:t,compare:e===void 0?null:e}};oe.startTransition=function(t){var e=Ou.transition;Ou.transition={};try{t()}finally{Ou.transition=e}};oe.unstable_act=DA;oe.useCallback=function(t,e){return bt.current.useCallback(t,e)};oe.useContext=function(t){return bt.current.useContext(t)};oe.useDebugValue=function(){};oe.useDeferredValue=function(t){return bt.current.useDeferredValue(t)};oe.useEffect=function(t,e){return bt.current.useEffect(t,e)};oe.useId=function(){return bt.current.useId()};oe.useImperativeHandle=function(t,e,n){return bt.current.useImperativeHandle(t,e,n)};oe.useInsertionEffect=function(t,e){return bt.current.useInsertionEffect(t,e)};oe.useLayoutEffect=function(t,e){return bt.current.useLayoutEffect(t,e)};oe.useMemo=function(t,e){return bt.current.useMemo(t,e)};oe.useReducer=function(t,e,n){return bt.current.useReducer(t,e,n)};oe.useRef=function(t){return bt.current.useRef(t)};oe.useState=function(t){return bt.current.useState(t)};oe.useSyncExternalStore=function(t,e,n){return bt.current.useSyncExternalStore(t,e,n)};oe.useTransition=function(){return bt.current.useTransition()};oe.version="18.3.1";CA.exports=oe;var N=CA.exports;const ve=tk(N);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var _k=N,yk=Symbol.for("react.element"),vk=Symbol.for("react.fragment"),wk=Object.prototype.hasOwnProperty,Ak=_k.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,Ek={key:!0,ref:!0,__self:!0,__source:!0};function LA(t,e,n){var r,i={},s=null,o=null;n!==void 0&&(s=""+n),e.key!==void 0&&(s=""+e.key),e.ref!==void 0&&(o=e.ref);for(r in e)wk.call(e,r)&&!Ek.hasOwnProperty(r)&&(i[r]=e[r]);if(t&&t.defaultProps)for(r in e=t.defaultProps,e)i[r]===void 0&&(i[r]=e[r]);return{$$typeof:yk,type:t,key:s,ref:o,props:i,_owner:Ak.current}}mh.Fragment=vk;mh.jsx=LA;mh.jsxs=LA;IA.exports=mh;var g=IA.exports,_m={};Object.defineProperty(_m,"__esModule",{value:!0});_m.parse=xk;_m.serialize=Nk;const Tk=/^[\u0021-\u003A\u003C\u003E-\u007E]+$/,Ik=/^[\u0021-\u003A\u003C-\u007E]*$/,Ck=/^([.]?[a-z0-9]([a-z0-9-]{0,61}[a-z0-9])?)([.][a-z0-9]([a-z0-9-]{0,61}[a-z0-9])?)*$/i,Sk=/^[\u0020-\u003A\u003D-\u007E]*$/,Rk=Object.prototype.toString,kk=(()=>{const t=function(){};return t.prototype=Object.create(null),t})();function xk(t,e){const n=new kk,r=t.length;if(r<2)return n;const i=(e==null?void 0:e.decode)||Pk;let s=0;do{const o=t.indexOf("=",s);if(o===-1)break;const a=t.indexOf(";",s),l=a===-1?r:a;if(o>l){s=t.lastIndexOf(";",o-1)+1;continue}const c=Jy(t,s,o),h=Zy(t,o,c),f=t.slice(c,h);if(n[f]===void 0){let p=Jy(t,o+1,l),_=Zy(t,l,p);const E=i(t.slice(p,_));n[f]=E}s=l+1}while(s<r);return n}function Jy(t,e,n){do{const r=t.charCodeAt(e);if(r!==32&&r!==9)return e}while(++e<n);return n}function Zy(t,e,n){for(;e>n;){const r=t.charCodeAt(--e);if(r!==32&&r!==9)return e+1}return n}function Nk(t,e,n){const r=(n==null?void 0:n.encode)||encodeURIComponent;if(!Tk.test(t))throw new TypeError(`argument name is invalid: ${t}`);const i=r(e);if(!Ik.test(i))throw new TypeError(`argument val is invalid: ${e}`);let s=t+"="+i;if(!n)return s;if(n.maxAge!==void 0){if(!Number.isInteger(n.maxAge))throw new TypeError(`option maxAge is invalid: ${n.maxAge}`);s+="; Max-Age="+n.maxAge}if(n.domain){if(!Ck.test(n.domain))throw new TypeError(`option domain is invalid: ${n.domain}`);s+="; Domain="+n.domain}if(n.path){if(!Sk.test(n.path))throw new TypeError(`option path is invalid: ${n.path}`);s+="; Path="+n.path}if(n.expires){if(!bk(n.expires)||!Number.isFinite(n.expires.valueOf()))throw new TypeError(`option expires is invalid: ${n.expires}`);s+="; Expires="+n.expires.toUTCString()}if(n.httpOnly&&(s+="; HttpOnly"),n.secure&&(s+="; Secure"),n.partitioned&&(s+="; Partitioned"),n.priority)switch(typeof n.priority=="string"?n.priority.toLowerCase():void 0){case"low":s+="; Priority=Low";break;case"medium":s+="; Priority=Medium";break;case"high":s+="; Priority=High";break;default:throw new TypeError(`option priority is invalid: ${n.priority}`)}if(n.sameSite)switch(typeof n.sameSite=="string"?n.sameSite.toLowerCase():n.sameSite){case!0:case"strict":s+="; SameSite=Strict";break;case"lax":s+="; SameSite=Lax";break;case"none":s+="; SameSite=None";break;default:throw new TypeError(`option sameSite is invalid: ${n.sameSite}`)}return s}function Pk(t){if(t.indexOf("%")===-1)return t;try{return decodeURIComponent(t)}catch{return t}}function bk(t){return Rk.call(t)==="[object Date]"}/**
 * react-router v7.0.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */var ev="popstate";function Dk(t={}){function e(r,i){let{pathname:s,search:o,hash:a}=r.location;return Df("",{pathname:s,search:o,hash:a},i.state&&i.state.usr||null,i.state&&i.state.key||"default")}function n(r,i){return typeof i=="string"?i:Pa(i)}return Ok(e,n,null,t)}function ke(t,e){if(t===!1||t===null||typeof t>"u")throw new Error(e)}function Tr(t,e){if(!t){typeof console<"u"&&console.warn(e);try{throw new Error(e)}catch{}}}function Lk(){return Math.random().toString(36).substring(2,10)}function tv(t,e){return{usr:t.state,key:t.key,idx:e}}function Df(t,e,n=null,r){return{pathname:typeof t=="string"?t:t.pathname,search:"",hash:"",...typeof e=="string"?ho(e):e,state:n,key:e&&e.key||r||Lk()}}function Pa({pathname:t="/",search:e="",hash:n=""}){return e&&e!=="?"&&(t+=e.charAt(0)==="?"?e:"?"+e),n&&n!=="#"&&(t+=n.charAt(0)==="#"?n:"#"+n),t}function ho(t){let e={};if(t){let n=t.indexOf("#");n>=0&&(e.hash=t.substring(n),t=t.substring(0,n));let r=t.indexOf("?");r>=0&&(e.search=t.substring(r),t=t.substring(0,r)),t&&(e.pathname=t)}return e}function Ok(t,e,n,r={}){let{window:i=document.defaultView,v5Compat:s=!1}=r,o=i.history,a="POP",l=null,c=h();c==null&&(c=0,o.replaceState({...o.state,idx:c},""));function h(){return(o.state||{idx:null}).idx}function f(){a="POP";let k=h(),A=k==null?null:k-c;c=k,l&&l({action:a,location:S.location,delta:A})}function p(k,A){a="PUSH";let v=Df(S.location,k,A);c=h()+1;let T=tv(v,c),b=S.createHref(v);try{o.pushState(T,"",b)}catch(M){if(M instanceof DOMException&&M.name==="DataCloneError")throw M;i.location.assign(b)}s&&l&&l({action:a,location:S.location,delta:1})}function _(k,A){a="REPLACE";let v=Df(S.location,k,A);c=h();let T=tv(v,c),b=S.createHref(v);o.replaceState(T,"",b),s&&l&&l({action:a,location:S.location,delta:0})}function E(k){let A=i.location.origin!=="null"?i.location.origin:i.location.href,v=typeof k=="string"?k:Pa(k);return v=v.replace(/ $/,"%20"),ke(A,`No window.location.(origin|href) available to create URL for href: ${v}`),new URL(v,A)}let S={get action(){return a},get location(){return t(i,o)},listen(k){if(l)throw new Error("A history only accepts one active listener");return i.addEventListener(ev,f),l=k,()=>{i.removeEventListener(ev,f),l=null}},createHref(k){return e(i,k)},createURL:E,encodeLocation(k){let A=E(k);return{pathname:A.pathname,search:A.search,hash:A.hash}},push:p,replace:_,go(k){return o.go(k)}};return S}function OA(t,e,n="/"){return Mk(t,e,n,!1)}function Mk(t,e,n,r){let i=typeof e=="string"?ho(e):e,s=ni(i.pathname||"/",n);if(s==null)return null;let o=MA(t);Fk(o);let a=null;for(let l=0;a==null&&l<o.length;++l){let c=$k(s);a=Gk(o[l],c,r)}return a}function MA(t,e=[],n=[],r=""){let i=(s,o,a)=>{let l={relativePath:a===void 0?s.path||"":a,caseSensitive:s.caseSensitive===!0,childrenIndex:o,route:s};l.relativePath.startsWith("/")&&(ke(l.relativePath.startsWith(r),`Absolute route path "${l.relativePath}" nested under path "${r}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`),l.relativePath=l.relativePath.slice(r.length));let c=lr([r,l.relativePath]),h=n.concat(l);s.children&&s.children.length>0&&(ke(s.index!==!0,`Index routes must not have child routes. Please remove all child routes from route path "${c}".`),MA(s.children,e,h,c)),!(s.path==null&&!s.index)&&e.push({path:c,score:Hk(c,s.index),routesMeta:h})};return t.forEach((s,o)=>{var a;if(s.path===""||!((a=s.path)!=null&&a.includes("?")))i(s,o);else for(let l of FA(s.path))i(s,o,l)}),e}function FA(t){let e=t.split("/");if(e.length===0)return[];let[n,...r]=e,i=n.endsWith("?"),s=n.replace(/\?$/,"");if(r.length===0)return i?[s,""]:[s];let o=FA(r.join("/")),a=[];return a.push(...o.map(l=>l===""?s:[s,l].join("/"))),i&&a.push(...o),a.map(l=>t.startsWith("/")&&l===""?"/":l)}function Fk(t){t.sort((e,n)=>e.score!==n.score?n.score-e.score:qk(e.routesMeta.map(r=>r.childrenIndex),n.routesMeta.map(r=>r.childrenIndex)))}var Vk=/^:[\w-]+$/,jk=3,Uk=2,Bk=1,zk=10,Wk=-2,nv=t=>t==="*";function Hk(t,e){let n=t.split("/"),r=n.length;return n.some(nv)&&(r+=Wk),e&&(r+=Uk),n.filter(i=>!nv(i)).reduce((i,s)=>i+(Vk.test(s)?jk:s===""?Bk:zk),r)}function qk(t,e){return t.length===e.length&&t.slice(0,-1).every((r,i)=>r===e[i])?t[t.length-1]-e[e.length-1]:0}function Gk(t,e,n=!1){let{routesMeta:r}=t,i={},s="/",o=[];for(let a=0;a<r.length;++a){let l=r[a],c=a===r.length-1,h=s==="/"?e:e.slice(s.length)||"/",f=oc({path:l.relativePath,caseSensitive:l.caseSensitive,end:c},h),p=l.route;if(!f&&c&&n&&!r[r.length-1].route.index&&(f=oc({path:l.relativePath,caseSensitive:l.caseSensitive,end:!1},h)),!f)return null;Object.assign(i,f.params),o.push({params:i,pathname:lr([s,f.pathname]),pathnameBase:Jk(lr([s,f.pathnameBase])),route:p}),f.pathnameBase!=="/"&&(s=lr([s,f.pathnameBase]))}return o}function oc(t,e){typeof t=="string"&&(t={path:t,caseSensitive:!1,end:!0});let[n,r]=Kk(t.path,t.caseSensitive,t.end),i=e.match(n);if(!i)return null;let s=i[0],o=s.replace(/(.)\/+$/,"$1"),a=i.slice(1);return{params:r.reduce((c,{paramName:h,isOptional:f},p)=>{if(h==="*"){let E=a[p]||"";o=s.slice(0,s.length-E.length).replace(/(.)\/+$/,"$1")}const _=a[p];return f&&!_?c[h]=void 0:c[h]=(_||"").replace(/%2F/g,"/"),c},{}),pathname:s,pathnameBase:o,pattern:t}}function Kk(t,e=!1,n=!0){Tr(t==="*"||!t.endsWith("*")||t.endsWith("/*"),`Route path "${t}" will be treated as if it were "${t.replace(/\*$/,"/*")}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${t.replace(/\*$/,"/*")}".`);let r=[],i="^"+t.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(o,a,l)=>(r.push({paramName:a,isOptional:l!=null}),l?"/?([^\\/]+)?":"/([^\\/]+)"));return t.endsWith("*")?(r.push({paramName:"*"}),i+=t==="*"||t==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?i+="\\/*$":t!==""&&t!=="/"&&(i+="(?:(?=\\/|$))"),[new RegExp(i,e?void 0:"i"),r]}function $k(t){try{return t.split("/").map(e=>decodeURIComponent(e).replace(/\//g,"%2F")).join("/")}catch(e){return Tr(!1,`The URL path "${t}" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent encoding (${e}).`),t}}function ni(t,e){if(e==="/")return t;if(!t.toLowerCase().startsWith(e.toLowerCase()))return null;let n=e.endsWith("/")?e.length-1:e.length,r=t.charAt(n);return r&&r!=="/"?null:t.slice(n)||"/"}function Qk(t,e="/"){let{pathname:n,search:r="",hash:i=""}=typeof t=="string"?ho(t):t;return{pathname:n?n.startsWith("/")?n:Yk(n,e):e,search:Zk(r),hash:ex(i)}}function Yk(t,e){let n=e.replace(/\/+$/,"").split("/");return t.split("/").forEach(i=>{i===".."?n.length>1&&n.pop():i!=="."&&n.push(i)}),n.length>1?n.join("/"):"/"}function Md(t,e,n,r){return`Cannot include a '${t}' character in a manually specified \`to.${e}\` field [${JSON.stringify(r)}].  Please separate it out to the \`to.${n}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`}function Xk(t){return t.filter((e,n)=>n===0||e.route.path&&e.route.path.length>0)}function ym(t){let e=Xk(t);return e.map((n,r)=>r===e.length-1?n.pathname:n.pathnameBase)}function vm(t,e,n,r=!1){let i;typeof t=="string"?i=ho(t):(i={...t},ke(!i.pathname||!i.pathname.includes("?"),Md("?","pathname","search",i)),ke(!i.pathname||!i.pathname.includes("#"),Md("#","pathname","hash",i)),ke(!i.search||!i.search.includes("#"),Md("#","search","hash",i)));let s=t===""||i.pathname==="",o=s?"/":i.pathname,a;if(o==null)a=n;else{let f=e.length-1;if(!r&&o.startsWith("..")){let p=o.split("/");for(;p[0]==="..";)p.shift(),f-=1;i.pathname=p.join("/")}a=f>=0?e[f]:"/"}let l=Qk(i,a),c=o&&o!=="/"&&o.endsWith("/"),h=(s||o===".")&&n.endsWith("/");return!l.pathname.endsWith("/")&&(c||h)&&(l.pathname+="/"),l}var lr=t=>t.join("/").replace(/\/\/+/g,"/"),Jk=t=>t.replace(/\/+$/,"").replace(/^\/*/,"/"),Zk=t=>!t||t==="?"?"":t.startsWith("?")?t:"?"+t,ex=t=>!t||t==="#"?"":t.startsWith("#")?t:"#"+t;function tx(t){return t!=null&&typeof t.status=="number"&&typeof t.statusText=="string"&&typeof t.internal=="boolean"&&"data"in t}var VA=["POST","PUT","PATCH","DELETE"];new Set(VA);var nx=["GET",...VA];new Set(nx);var fo=N.createContext(null);fo.displayName="DataRouter";var gh=N.createContext(null);gh.displayName="DataRouterState";var jA=N.createContext({isTransitioning:!1});jA.displayName="ViewTransition";var rx=N.createContext(new Map);rx.displayName="Fetchers";var ix=N.createContext(null);ix.displayName="Await";var Dn=N.createContext(null);Dn.displayName="Navigation";var yl=N.createContext(null);yl.displayName="Location";var Ln=N.createContext({outlet:null,matches:[],isDataRoute:!1});Ln.displayName="Route";var wm=N.createContext(null);wm.displayName="RouteError";function sx(t,{relative:e}={}){ke(po(),"useHref() may be used only in the context of a <Router> component.");let{basename:n,navigator:r}=N.useContext(Dn),{hash:i,pathname:s,search:o}=wl(t,{relative:e}),a=s;return n!=="/"&&(a=s==="/"?n:lr([n,s])),r.createHref({pathname:a,search:o,hash:i})}function po(){return N.useContext(yl)!=null}function Ir(){return ke(po(),"useLocation() may be used only in the context of a <Router> component."),N.useContext(yl).location}var UA="You should call navigate() in a React.useEffect(), not when your component is first rendered.";function BA(t){N.useContext(Dn).static||N.useLayoutEffect(t)}function vl(){let{isDataRoute:t}=N.useContext(Ln);return t?vx():ox()}function ox(){ke(po(),"useNavigate() may be used only in the context of a <Router> component.");let t=N.useContext(fo),{basename:e,navigator:n}=N.useContext(Dn),{matches:r}=N.useContext(Ln),{pathname:i}=Ir(),s=JSON.stringify(ym(r)),o=N.useRef(!1);return BA(()=>{o.current=!0}),N.useCallback((l,c={})=>{if(Tr(o.current,UA),!o.current)return;if(typeof l=="number"){n.go(l);return}let h=vm(l,JSON.parse(s),i,c.relative==="path");t==null&&e!=="/"&&(h.pathname=h.pathname==="/"?e:lr([e,h.pathname])),(c.replace?n.replace:n.push)(h,c.state,c)},[e,n,s,i,t])}N.createContext(null);function ax(){let{matches:t}=N.useContext(Ln),e=t[t.length-1];return e?e.params:{}}function wl(t,{relative:e}={}){let{matches:n}=N.useContext(Ln),{pathname:r}=Ir(),i=JSON.stringify(ym(n));return N.useMemo(()=>vm(t,JSON.parse(i),r,e==="path"),[t,i,r,e])}function lx(t,e){return zA(t,e)}function zA(t,e,n,r){var S;ke(po(),"useRoutes() may be used only in the context of a <Router> component.");let{navigator:i}=N.useContext(Dn),{matches:s}=N.useContext(Ln),o=s[s.length-1],a=o?o.params:{};o&&o.pathname;let l=o?o.pathnameBase:"/";o&&o.route;let c=Ir(),h;if(e){let k=typeof e=="string"?ho(e):e;ke(l==="/"||((S=k.pathname)==null?void 0:S.startsWith(l)),`When overriding the location using \`<Routes location>\` or \`useRoutes(routes, location)\`, the location pathname must begin with the portion of the URL pathname that was matched by all parent routes. The current pathname base is "${l}" but pathname "${k.pathname}" was given in the \`location\` prop.`),h=k}else h=c;let f=h.pathname||"/",p=f;if(l!=="/"){let k=l.replace(/^\//,"").split("/");p="/"+f.replace(/^\//,"").split("/").slice(k.length).join("/")}let _=OA(t,{pathname:p}),E=fx(_&&_.map(k=>Object.assign({},k,{params:Object.assign({},a,k.params),pathname:lr([l,i.encodeLocation?i.encodeLocation(k.pathname).pathname:k.pathname]),pathnameBase:k.pathnameBase==="/"?l:lr([l,i.encodeLocation?i.encodeLocation(k.pathnameBase).pathname:k.pathnameBase])})),s,n,r);return e&&E?N.createElement(yl.Provider,{value:{location:{pathname:"/",search:"",hash:"",state:null,key:"default",...h},navigationType:"POP"}},E):E}function ux(){let t=yx(),e=tx(t)?`${t.status} ${t.statusText}`:t instanceof Error?t.message:JSON.stringify(t),n=t instanceof Error?t.stack:null,i={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"};return N.createElement(N.Fragment,null,N.createElement("h2",null,"Unexpected Application Error!"),N.createElement("h3",{style:{fontStyle:"italic"}},e),n?N.createElement("pre",{style:i},n):null,null)}var cx=N.createElement(ux,null),hx=class extends N.Component{constructor(t){super(t),this.state={location:t.location,revalidation:t.revalidation,error:t.error}}static getDerivedStateFromError(t){return{error:t}}static getDerivedStateFromProps(t,e){return e.location!==t.location||e.revalidation!=="idle"&&t.revalidation==="idle"?{error:t.error,location:t.location,revalidation:t.revalidation}:{error:t.error!==void 0?t.error:e.error,location:e.location,revalidation:t.revalidation||e.revalidation}}componentDidCatch(t,e){console.error("React Router caught the following error during render",t,e)}render(){return this.state.error!==void 0?N.createElement(Ln.Provider,{value:this.props.routeContext},N.createElement(wm.Provider,{value:this.state.error,children:this.props.component})):this.props.children}};function dx({routeContext:t,match:e,children:n}){let r=N.useContext(fo);return r&&r.static&&r.staticContext&&(e.route.errorElement||e.route.ErrorBoundary)&&(r.staticContext._deepestRenderedBoundaryId=e.route.id),N.createElement(Ln.Provider,{value:t},n)}function fx(t,e=[],n=null,r=null){if(t==null){if(!n)return null;if(n.errors)t=n.matches;else if(e.length===0&&!n.initialized&&n.matches.length>0)t=n.matches;else return null}let i=t,s=n==null?void 0:n.errors;if(s!=null){let l=i.findIndex(c=>c.route.id&&(s==null?void 0:s[c.route.id])!==void 0);ke(l>=0,`Could not find a matching route for errors on route IDs: ${Object.keys(s).join(",")}`),i=i.slice(0,Math.min(i.length,l+1))}let o=!1,a=-1;if(n)for(let l=0;l<i.length;l++){let c=i[l];if((c.route.HydrateFallback||c.route.hydrateFallbackElement)&&(a=l),c.route.id){let{loaderData:h,errors:f}=n,p=c.route.loader&&!h.hasOwnProperty(c.route.id)&&(!f||f[c.route.id]===void 0);if(c.route.lazy||p){o=!0,a>=0?i=i.slice(0,a+1):i=[i[0]];break}}}return i.reduceRight((l,c,h)=>{let f,p=!1,_=null,E=null;n&&(f=s&&c.route.id?s[c.route.id]:void 0,_=c.route.errorElement||cx,o&&(a<0&&h===0?(wx("route-fallback",!1,"No `HydrateFallback` element provided to render during initial hydration"),p=!0,E=null):a===h&&(p=!0,E=c.route.hydrateFallbackElement||null)));let S=e.concat(i.slice(0,h+1)),k=()=>{let A;return f?A=_:p?A=E:c.route.Component?A=N.createElement(c.route.Component,null):c.route.element?A=c.route.element:A=l,N.createElement(dx,{match:c,routeContext:{outlet:l,matches:S,isDataRoute:n!=null},children:A})};return n&&(c.route.ErrorBoundary||c.route.errorElement||h===0)?N.createElement(hx,{location:n.location,revalidation:n.revalidation,component:_,error:f,children:k(),routeContext:{outlet:null,matches:S,isDataRoute:!0}}):k()},null)}function Am(t){return`${t} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function px(t){let e=N.useContext(fo);return ke(e,Am(t)),e}function mx(t){let e=N.useContext(gh);return ke(e,Am(t)),e}function gx(t){let e=N.useContext(Ln);return ke(e,Am(t)),e}function Em(t){let e=gx(t),n=e.matches[e.matches.length-1];return ke(n.route.id,`${t} can only be used on routes that contain a unique "id"`),n.route.id}function _x(){return Em("useRouteId")}function yx(){var r;let t=N.useContext(wm),e=mx("useRouteError"),n=Em("useRouteError");return t!==void 0?t:(r=e.errors)==null?void 0:r[n]}function vx(){let{router:t}=px("useNavigate"),e=Em("useNavigate"),n=N.useRef(!1);return BA(()=>{n.current=!0}),N.useCallback(async(i,s={})=>{Tr(n.current,UA),n.current&&(typeof i=="number"?t.navigate(i):await t.navigate(i,{fromRouteId:e,...s}))},[t,e])}var rv={};function wx(t,e,n){rv[t]||(rv[t]=!0,Tr(!1,n))}N.memo(Ax);function Ax({routes:t,future:e,state:n}){return zA(t,void 0,n,e)}function WA({to:t,replace:e,state:n,relative:r}){ke(po(),"<Navigate> may be used only in the context of a <Router> component.");let{static:i}=N.useContext(Dn);Tr(!i,"<Navigate> must not be used on the initial render in a <StaticRouter>. This is a no-op, but you should modify your code so the <Navigate> is only ever rendered in response to some user interaction or state change.");let{matches:s}=N.useContext(Ln),{pathname:o}=Ir(),a=vl(),l=vm(t,ym(s),o,r==="path"),c=JSON.stringify(l);return N.useEffect(()=>{a(JSON.parse(c),{replace:e,state:n,relative:r})},[a,c,r,e,n]),null}function Ot(t){ke(!1,"A <Route> is only ever to be used as the child of <Routes> element, never rendered directly. Please wrap your <Route> in a <Routes>.")}function Ex({basename:t="/",children:e=null,location:n,navigationType:r="POP",navigator:i,static:s=!1}){ke(!po(),"You cannot render a <Router> inside another <Router>. You should never have more than one in your app.");let o=t.replace(/^\/*/,"/"),a=N.useMemo(()=>({basename:o,navigator:i,static:s,future:{}}),[o,i,s]);typeof n=="string"&&(n=ho(n));let{pathname:l="/",search:c="",hash:h="",state:f=null,key:p="default"}=n,_=N.useMemo(()=>{let E=ni(l,o);return E==null?null:{location:{pathname:E,search:c,hash:h,state:f,key:p},navigationType:r}},[o,l,c,h,f,p,r]);return Tr(_!=null,`<Router basename="${o}"> is not able to match the URL "${l}${c}${h}" because it does not start with the basename, so the <Router> won't render anything.`),_==null?null:N.createElement(Dn.Provider,{value:a},N.createElement(yl.Provider,{children:e,value:_}))}function Tx({children:t,location:e}){return lx(Lf(t),e)}function Lf(t,e=[]){let n=[];return N.Children.forEach(t,(r,i)=>{if(!N.isValidElement(r))return;let s=[...e,i];if(r.type===N.Fragment){n.push.apply(n,Lf(r.props.children,s));return}ke(r.type===Ot,`[${typeof r.type=="string"?r.type:r.type.name}] is not a <Route> component. All component children of <Routes> must be a <Route> or <React.Fragment>`),ke(!r.props.index||!r.props.children,"An index route cannot have child routes.");let o={id:r.props.id||s.join("-"),caseSensitive:r.props.caseSensitive,element:r.props.element,Component:r.props.Component,index:r.props.index,path:r.props.path,loader:r.props.loader,action:r.props.action,hydrateFallbackElement:r.props.hydrateFallbackElement,HydrateFallback:r.props.HydrateFallback,errorElement:r.props.errorElement,ErrorBoundary:r.props.ErrorBoundary,hasErrorBoundary:r.props.hasErrorBoundary===!0||r.props.ErrorBoundary!=null||r.props.errorElement!=null,shouldRevalidate:r.props.shouldRevalidate,handle:r.props.handle,lazy:r.props.lazy};r.props.children&&(o.children=Lf(r.props.children,s)),n.push(o)}),n}var Mu="get",Fu="application/x-www-form-urlencoded";function _h(t){return t!=null&&typeof t.tagName=="string"}function Ix(t){return _h(t)&&t.tagName.toLowerCase()==="button"}function Cx(t){return _h(t)&&t.tagName.toLowerCase()==="form"}function Sx(t){return _h(t)&&t.tagName.toLowerCase()==="input"}function Rx(t){return!!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)}function kx(t,e){return t.button===0&&(!e||e==="_self")&&!Rx(t)}var ou=null;function xx(){if(ou===null)try{new FormData(document.createElement("form"),0),ou=!1}catch{ou=!0}return ou}var Nx=new Set(["application/x-www-form-urlencoded","multipart/form-data","text/plain"]);function Fd(t){return t!=null&&!Nx.has(t)?(Tr(!1,`"${t}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${Fu}"`),null):t}function Px(t,e){let n,r,i,s,o;if(Cx(t)){let a=t.getAttribute("action");r=a?ni(a,e):null,n=t.getAttribute("method")||Mu,i=Fd(t.getAttribute("enctype"))||Fu,s=new FormData(t)}else if(Ix(t)||Sx(t)&&(t.type==="submit"||t.type==="image")){let a=t.form;if(a==null)throw new Error('Cannot submit a <button> or <input type="submit"> without a <form>');let l=t.getAttribute("formaction")||a.getAttribute("action");if(r=l?ni(l,e):null,n=t.getAttribute("formmethod")||a.getAttribute("method")||Mu,i=Fd(t.getAttribute("formenctype"))||Fd(a.getAttribute("enctype"))||Fu,s=new FormData(a,t),!xx()){let{name:c,type:h,value:f}=t;if(h==="image"){let p=c?`${c}.`:"";s.append(`${p}x`,"0"),s.append(`${p}y`,"0")}else c&&s.append(c,f)}}else{if(_h(t))throw new Error('Cannot submit element that is not <form>, <button>, or <input type="submit|image">');n=Mu,r=null,i=Fu,o=t}return s&&i==="text/plain"&&(o=s,s=void 0),{action:r,method:n.toLowerCase(),encType:i,formData:s,body:o}}function Tm(t,e){if(t===!1||t===null||typeof t>"u")throw new Error(e)}async function bx(t,e){if(t.id in e)return e[t.id];try{let n=await import(t.module);return e[t.id]=n,n}catch(n){return console.error(`Error loading route module \`${t.module}\`, reloading page...`),console.error(n),window.__reactRouterContext&&window.__reactRouterContext.isSpaMode,window.location.reload(),new Promise(()=>{})}}function Dx(t){return t==null?!1:t.href==null?t.rel==="preload"&&typeof t.imageSrcSet=="string"&&typeof t.imageSizes=="string":typeof t.rel=="string"&&typeof t.href=="string"}async function Lx(t,e,n){let r=await Promise.all(t.map(async i=>{let s=e.routes[i.route.id];if(s){let o=await bx(s,n);return o.links?o.links():[]}return[]}));return Vx(r.flat(1).filter(Dx).filter(i=>i.rel==="stylesheet"||i.rel==="preload").map(i=>i.rel==="stylesheet"?{...i,rel:"prefetch",as:"style"}:{...i,rel:"prefetch"}))}function iv(t,e,n,r,i,s){let o=(l,c)=>n[c]?l.route.id!==n[c].route.id:!0,a=(l,c)=>{var h;return n[c].pathname!==l.pathname||((h=n[c].route.path)==null?void 0:h.endsWith("*"))&&n[c].params["*"]!==l.params["*"]};return s==="assets"?e.filter((l,c)=>o(l,c)||a(l,c)):s==="data"?e.filter((l,c)=>{var f;let h=r.routes[l.route.id];if(!h||!h.hasLoader)return!1;if(o(l,c)||a(l,c))return!0;if(l.route.shouldRevalidate){let p=l.route.shouldRevalidate({currentUrl:new URL(i.pathname+i.search+i.hash,window.origin),currentParams:((f=n[0])==null?void 0:f.params)||{},nextUrl:new URL(t,window.origin),nextParams:l.params,defaultShouldRevalidate:!0});if(typeof p=="boolean")return p}return!0}):[]}function Ox(t,e){return Mx(t.map(n=>{let r=e.routes[n.route.id];if(!r)return[];let i=[r.module];return r.imports&&(i=i.concat(r.imports)),i}).flat(1))}function Mx(t){return[...new Set(t)]}function Fx(t){let e={},n=Object.keys(t).sort();for(let r of n)e[r]=t[r];return e}function Vx(t,e){let n=new Set;return new Set(e),t.reduce((r,i)=>{let s=JSON.stringify(Fx(i));return n.has(s)||(n.add(s),r.push({key:s,link:i})),r},[])}function jx(t){let e=typeof t=="string"?new URL(t,typeof window>"u"?"server://singlefetch/":window.location.origin):t;return e.pathname==="/"?e.pathname="_root.data":e.pathname=`${e.pathname.replace(/\/$/,"")}.data`,e}function Ux(){let t=N.useContext(fo);return Tm(t,"You must render this element inside a <DataRouterContext.Provider> element"),t}function Bx(){let t=N.useContext(gh);return Tm(t,"You must render this element inside a <DataRouterStateContext.Provider> element"),t}var Im=N.createContext(void 0);Im.displayName="FrameworkContext";function HA(){let t=N.useContext(Im);return Tm(t,"You must render this element inside a <HydratedRouter> element"),t}function zx(t,e){let n=N.useContext(Im),[r,i]=N.useState(!1),[s,o]=N.useState(!1),{onFocus:a,onBlur:l,onMouseEnter:c,onMouseLeave:h,onTouchStart:f}=e,p=N.useRef(null);N.useEffect(()=>{if(t==="render"&&o(!0),t==="viewport"){let S=A=>{A.forEach(v=>{o(v.isIntersecting)})},k=new IntersectionObserver(S,{threshold:.5});return p.current&&k.observe(p.current),()=>{k.disconnect()}}},[t]),N.useEffect(()=>{if(r){let S=setTimeout(()=>{o(!0)},100);return()=>{clearTimeout(S)}}},[r]);let _=()=>{i(!0)},E=()=>{i(!1),o(!1)};return n?t!=="intent"?[s,p,{}]:[s,p,{onFocus:Bo(a,_),onBlur:Bo(l,E),onMouseEnter:Bo(c,_),onMouseLeave:Bo(h,E),onTouchStart:Bo(f,_)}]:[!1,p,{}]}function Bo(t,e){return n=>{t&&t(n),n.defaultPrevented||e(n)}}function Wx({page:t,...e}){let{router:n}=Ux(),r=N.useMemo(()=>OA(n.routes,t,n.basename),[n.routes,t,n.basename]);return r?N.createElement(qx,{page:t,matches:r,...e}):(console.warn(`Tried to prefetch ${t} but no routes matched.`),null)}function Hx(t){let{manifest:e,routeModules:n}=HA(),[r,i]=N.useState([]);return N.useEffect(()=>{let s=!1;return Lx(t,e,n).then(o=>{s||i(o)}),()=>{s=!0}},[t,e,n]),r}function qx({page:t,matches:e,...n}){let r=Ir(),{manifest:i,routeModules:s}=HA(),{loaderData:o,matches:a}=Bx(),l=N.useMemo(()=>iv(t,e,a,i,r,"data"),[t,e,a,i,r]),c=N.useMemo(()=>iv(t,e,a,i,r,"assets"),[t,e,a,i,r]),h=N.useMemo(()=>{if(t===r.pathname+r.search+r.hash)return[];let _=new Set,E=!1;if(e.forEach(k=>{var v;let A=i.routes[k.route.id];!A||!A.hasLoader||(!l.some(T=>T.route.id===k.route.id)&&k.route.id in o&&((v=s[k.route.id])!=null&&v.shouldRevalidate)||A.hasClientLoader?E=!0:_.add(k.route.id))}),_.size===0)return[];let S=jx(t);return E&&_.size>0&&S.searchParams.set("_routes",e.filter(k=>_.has(k.route.id)).map(k=>k.route.id).join(",")),[S.pathname+S.search]},[o,r,i,l,e,t,s]),f=N.useMemo(()=>Ox(c,i),[c,i]),p=Hx(c);return N.createElement(N.Fragment,null,h.map(_=>N.createElement("link",{key:_,rel:"prefetch",as:"fetch",href:_,...n})),f.map(_=>N.createElement("link",{key:_,rel:"modulepreload",href:_,...n})),p.map(({key:_,link:E})=>N.createElement("link",{key:_,...E})))}function Gx(...t){return e=>{t.forEach(n=>{typeof n=="function"?n(e):n!=null&&(n.current=e)})}}var qA=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u";try{qA&&(window.__reactRouterVersion="7.0.1")}catch{}function Kx({basename:t,children:e,window:n}){let r=N.useRef();r.current==null&&(r.current=Dk({window:n,v5Compat:!0}));let i=r.current,[s,o]=N.useState({action:i.action,location:i.location}),a=N.useCallback(l=>{N.startTransition(()=>o(l))},[o]);return N.useLayoutEffect(()=>i.listen(a),[i,a]),N.createElement(Ex,{basename:t,children:e,location:s.location,navigationType:s.action,navigator:i})}var GA=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,tt=N.forwardRef(function({onClick:e,discover:n="render",prefetch:r="none",relative:i,reloadDocument:s,replace:o,state:a,target:l,to:c,preventScrollReset:h,viewTransition:f,...p},_){let{basename:E}=N.useContext(Dn),S=typeof c=="string"&&GA.test(c),k,A=!1;if(typeof c=="string"&&S&&(k=c,qA))try{let I=new URL(window.location.href),R=c.startsWith("//")?new URL(I.protocol+c):new URL(c),P=ni(R.pathname,E);R.origin===I.origin&&P!=null?c=P+R.search+R.hash:A=!0}catch{Tr(!1,`<Link to="${c}"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.`)}let v=sx(c,{relative:i}),[T,b,M]=zx(r,p),V=Yx(c,{replace:o,state:a,target:l,preventScrollReset:h,relative:i,viewTransition:f});function C(I){e&&e(I),I.defaultPrevented||V(I)}let y=N.createElement("a",{...p,...M,href:k||v,onClick:A||s?e:C,ref:Gx(_,b),target:l,"data-discover":!S&&n==="render"?"true":void 0});return T&&!S?N.createElement(N.Fragment,null,y,N.createElement(Wx,{page:v})):y});tt.displayName="Link";var Jn=N.forwardRef(function({"aria-current":e="page",caseSensitive:n=!1,className:r="",end:i=!1,style:s,to:o,viewTransition:a,children:l,...c},h){let f=wl(o,{relative:c.relative}),p=Ir(),_=N.useContext(gh),{navigator:E,basename:S}=N.useContext(Dn),k=_!=null&&tN(f)&&a===!0,A=E.encodeLocation?E.encodeLocation(f).pathname:f.pathname,v=p.pathname,T=_&&_.navigation&&_.navigation.location?_.navigation.location.pathname:null;n||(v=v.toLowerCase(),T=T?T.toLowerCase():null,A=A.toLowerCase()),T&&S&&(T=ni(T,S)||T);const b=A!=="/"&&A.endsWith("/")?A.length-1:A.length;let M=v===A||!i&&v.startsWith(A)&&v.charAt(b)==="/",V=T!=null&&(T===A||!i&&T.startsWith(A)&&T.charAt(A.length)==="/"),C={isActive:M,isPending:V,isTransitioning:k},y=M?e:void 0,I;typeof r=="function"?I=r(C):I=[r,M?"active":null,V?"pending":null,k?"transitioning":null].filter(Boolean).join(" ");let R=typeof s=="function"?s(C):s;return N.createElement(tt,{...c,"aria-current":y,className:I,ref:h,style:R,to:o,viewTransition:a},typeof l=="function"?l(C):l)});Jn.displayName="NavLink";var $x=N.forwardRef(({discover:t="render",fetcherKey:e,navigate:n,reloadDocument:r,replace:i,state:s,method:o=Mu,action:a,onSubmit:l,relative:c,preventScrollReset:h,viewTransition:f,...p},_)=>{let E=Zx(),S=eN(a,{relative:c}),k=o.toLowerCase()==="get"?"get":"post",A=typeof a=="string"&&GA.test(a),v=T=>{if(l&&l(T),T.defaultPrevented)return;T.preventDefault();let b=T.nativeEvent.submitter,M=(b==null?void 0:b.getAttribute("formmethod"))||o;E(b||T.currentTarget,{fetcherKey:e,method:M,navigate:n,replace:i,state:s,relative:c,preventScrollReset:h,viewTransition:f})};return N.createElement("form",{ref:_,method:k,action:S,onSubmit:r?l:v,...p,"data-discover":!A&&t==="render"?"true":void 0})});$x.displayName="Form";function Qx(t){return`${t} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function KA(t){let e=N.useContext(fo);return ke(e,Qx(t)),e}function Yx(t,{target:e,replace:n,state:r,preventScrollReset:i,relative:s,viewTransition:o}={}){let a=vl(),l=Ir(),c=wl(t,{relative:s});return N.useCallback(h=>{if(kx(h,e)){h.preventDefault();let f=n!==void 0?n:Pa(l)===Pa(c);a(t,{replace:f,state:r,preventScrollReset:i,relative:s,viewTransition:o})}},[l,a,c,n,r,e,t,i,s,o])}var Xx=0,Jx=()=>`__${String(++Xx)}__`;function Zx(){let{router:t}=KA("useSubmit"),{basename:e}=N.useContext(Dn),n=_x();return N.useCallback(async(r,i={})=>{let{action:s,method:o,encType:a,formData:l,body:c}=Px(r,e);if(i.navigate===!1){let h=i.fetcherKey||Jx();await t.fetch(h,n,i.action||s,{preventScrollReset:i.preventScrollReset,formData:l,body:c,formMethod:i.method||o,formEncType:i.encType||a,flushSync:i.flushSync})}else await t.navigate(i.action||s,{preventScrollReset:i.preventScrollReset,formData:l,body:c,formMethod:i.method||o,formEncType:i.encType||a,replace:i.replace,state:i.state,fromRouteId:n,flushSync:i.flushSync,viewTransition:i.viewTransition})},[t,e,n])}function eN(t,{relative:e}={}){let{basename:n}=N.useContext(Dn),r=N.useContext(Ln);ke(r,"useFormAction must be used inside a RouteContext");let[i]=r.matches.slice(-1),s={...wl(t||".",{relative:e})},o=Ir();if(t==null){s.search=o.search;let a=new URLSearchParams(s.search),l=a.getAll("index");if(l.some(h=>h==="")){a.delete("index"),l.filter(f=>f).forEach(f=>a.append("index",f));let h=a.toString();s.search=h?`?${h}`:""}}return(!t||t===".")&&i.route.index&&(s.search=s.search?s.search.replace(/^\?/,"?index&"):"?index"),n!=="/"&&(s.pathname=s.pathname==="/"?n:lr([n,s.pathname])),Pa(s)}function tN(t,e={}){let n=N.useContext(jA);ke(n!=null,"`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?");let{basename:r}=KA("useViewTransitionState"),i=wl(t,{relative:e.relative});if(!n.isTransitioning)return!1;let s=ni(n.currentLocation.pathname,r)||n.currentLocation.pathname,o=ni(n.nextLocation.pathname,r)||n.nextLocation.pathname;return oc(i.pathname,o)!=null||oc(i.pathname,s)!=null}new TextEncoder;var $A={exports:{}},nn={},QA={exports:{}},YA={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e(W,G){var Q=W.length;W.push(G);e:for(;0<Q;){var pe=Q-1>>>1,te=W[pe];if(0<i(te,G))W[pe]=G,W[Q]=te,Q=pe;else break e}}function n(W){return W.length===0?null:W[0]}function r(W){if(W.length===0)return null;var G=W[0],Q=W.pop();if(Q!==G){W[0]=Q;e:for(var pe=0,te=W.length,ue=te>>>1;pe<ue;){var je=2*(pe+1)-1,ze=W[je],it=je+1,St=W[it];if(0>i(ze,Q))it<te&&0>i(St,ze)?(W[pe]=St,W[it]=Q,pe=it):(W[pe]=ze,W[je]=Q,pe=je);else if(it<te&&0>i(St,Q))W[pe]=St,W[it]=Q,pe=it;else break e}}return G}function i(W,G){var Q=W.sortIndex-G.sortIndex;return Q!==0?Q:W.id-G.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;t.unstable_now=function(){return s.now()}}else{var o=Date,a=o.now();t.unstable_now=function(){return o.now()-a}}var l=[],c=[],h=1,f=null,p=3,_=!1,E=!1,S=!1,k=typeof setTimeout=="function"?setTimeout:null,A=typeof clearTimeout=="function"?clearTimeout:null,v=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function T(W){for(var G=n(c);G!==null;){if(G.callback===null)r(c);else if(G.startTime<=W)r(c),G.sortIndex=G.expirationTime,e(l,G);else break;G=n(c)}}function b(W){if(S=!1,T(W),!E)if(n(l)!==null)E=!0,On(M);else{var G=n(c);G!==null&&qe(b,G.startTime-W)}}function M(W,G){E=!1,S&&(S=!1,A(y),y=-1),_=!0;var Q=p;try{for(T(G),f=n(l);f!==null&&(!(f.expirationTime>G)||W&&!P());){var pe=f.callback;if(typeof pe=="function"){f.callback=null,p=f.priorityLevel;var te=pe(f.expirationTime<=G);G=t.unstable_now(),typeof te=="function"?f.callback=te:f===n(l)&&r(l),T(G)}else r(l);f=n(l)}if(f!==null)var ue=!0;else{var je=n(c);je!==null&&qe(b,je.startTime-G),ue=!1}return ue}finally{f=null,p=Q,_=!1}}var V=!1,C=null,y=-1,I=5,R=-1;function P(){return!(t.unstable_now()-R<I)}function D(){if(C!==null){var W=t.unstable_now();R=W;var G=!0;try{G=C(!0,W)}finally{G?x():(V=!1,C=null)}}else V=!1}var x;if(typeof v=="function")x=function(){v(D)};else if(typeof MessageChannel<"u"){var Ve=new MessageChannel,Lt=Ve.port2;Ve.port1.onmessage=D,x=function(){Lt.postMessage(null)}}else x=function(){k(D,0)};function On(W){C=W,V||(V=!0,x())}function qe(W,G){y=k(function(){W(t.unstable_now())},G)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(W){W.callback=null},t.unstable_continueExecution=function(){E||_||(E=!0,On(M))},t.unstable_forceFrameRate=function(W){0>W||125<W?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):I=0<W?Math.floor(1e3/W):5},t.unstable_getCurrentPriorityLevel=function(){return p},t.unstable_getFirstCallbackNode=function(){return n(l)},t.unstable_next=function(W){switch(p){case 1:case 2:case 3:var G=3;break;default:G=p}var Q=p;p=G;try{return W()}finally{p=Q}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(W,G){switch(W){case 1:case 2:case 3:case 4:case 5:break;default:W=3}var Q=p;p=W;try{return G()}finally{p=Q}},t.unstable_scheduleCallback=function(W,G,Q){var pe=t.unstable_now();switch(typeof Q=="object"&&Q!==null?(Q=Q.delay,Q=typeof Q=="number"&&0<Q?pe+Q:pe):Q=pe,W){case 1:var te=-1;break;case 2:te=250;break;case 5:te=1073741823;break;case 4:te=1e4;break;default:te=5e3}return te=Q+te,W={id:h++,callback:G,priorityLevel:W,startTime:Q,expirationTime:te,sortIndex:-1},Q>pe?(W.sortIndex=Q,e(c,W),n(l)===null&&W===n(c)&&(S?(A(y),y=-1):S=!0,qe(b,Q-pe))):(W.sortIndex=te,e(l,W),E||_||(E=!0,On(M))),W},t.unstable_shouldYield=P,t.unstable_wrapCallback=function(W){var G=p;return function(){var Q=p;p=G;try{return W.apply(this,arguments)}finally{p=Q}}}})(YA);QA.exports=YA;var nN=QA.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var rN=N,en=nN;function U(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var XA=new Set,ba={};function ts(t,e){Gs(t,e),Gs(t+"Capture",e)}function Gs(t,e){for(ba[t]=e,t=0;t<e.length;t++)XA.add(e[t])}var fr=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Of=Object.prototype.hasOwnProperty,iN=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,sv={},ov={};function sN(t){return Of.call(ov,t)?!0:Of.call(sv,t)?!1:iN.test(t)?ov[t]=!0:(sv[t]=!0,!1)}function oN(t,e,n,r){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function aN(t,e,n,r){if(e===null||typeof e>"u"||oN(t,e,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function Dt(t,e,n,r,i,s,o){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=s,this.removeEmptyString=o}var ht={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){ht[t]=new Dt(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];ht[e]=new Dt(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){ht[t]=new Dt(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){ht[t]=new Dt(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){ht[t]=new Dt(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){ht[t]=new Dt(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){ht[t]=new Dt(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){ht[t]=new Dt(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){ht[t]=new Dt(t,5,!1,t.toLowerCase(),null,!1,!1)});var Cm=/[\-:]([a-z])/g;function Sm(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(Cm,Sm);ht[e]=new Dt(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(Cm,Sm);ht[e]=new Dt(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(Cm,Sm);ht[e]=new Dt(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){ht[t]=new Dt(t,1,!1,t.toLowerCase(),null,!1,!1)});ht.xlinkHref=new Dt("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){ht[t]=new Dt(t,1,!1,t.toLowerCase(),null,!0,!0)});function Rm(t,e,n,r){var i=ht.hasOwnProperty(e)?ht[e]:null;(i!==null?i.type!==0:r||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(aN(e,n,i,r)&&(n=null),r||i===null?sN(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):i.mustUseProperty?t[i.propertyName]=n===null?i.type===3?!1:"":n:(e=i.attributeName,r=i.attributeNamespace,n===null?t.removeAttribute(e):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,r?t.setAttributeNS(r,e,n):t.setAttribute(e,n))))}var Cr=rN.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,au=Symbol.for("react.element"),vs=Symbol.for("react.portal"),ws=Symbol.for("react.fragment"),km=Symbol.for("react.strict_mode"),Mf=Symbol.for("react.profiler"),JA=Symbol.for("react.provider"),ZA=Symbol.for("react.context"),xm=Symbol.for("react.forward_ref"),Ff=Symbol.for("react.suspense"),Vf=Symbol.for("react.suspense_list"),Nm=Symbol.for("react.memo"),Dr=Symbol.for("react.lazy"),eE=Symbol.for("react.offscreen"),av=Symbol.iterator;function zo(t){return t===null||typeof t!="object"?null:(t=av&&t[av]||t["@@iterator"],typeof t=="function"?t:null)}var Pe=Object.assign,Vd;function ea(t){if(Vd===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);Vd=e&&e[1]||""}return`
`+Vd+t}var jd=!1;function Ud(t,e){if(!t||jd)return"";jd=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(c){var r=c}Reflect.construct(t,[],e)}else{try{e.call()}catch(c){r=c}t.call(e.prototype)}else{try{throw Error()}catch(c){r=c}t()}}catch(c){if(c&&r&&typeof c.stack=="string"){for(var i=c.stack.split(`
`),s=r.stack.split(`
`),o=i.length-1,a=s.length-1;1<=o&&0<=a&&i[o]!==s[a];)a--;for(;1<=o&&0<=a;o--,a--)if(i[o]!==s[a]){if(o!==1||a!==1)do if(o--,a--,0>a||i[o]!==s[a]){var l=`
`+i[o].replace(" at new "," at ");return t.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",t.displayName)),l}while(1<=o&&0<=a);break}}}finally{jd=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?ea(t):""}function lN(t){switch(t.tag){case 5:return ea(t.type);case 16:return ea("Lazy");case 13:return ea("Suspense");case 19:return ea("SuspenseList");case 0:case 2:case 15:return t=Ud(t.type,!1),t;case 11:return t=Ud(t.type.render,!1),t;case 1:return t=Ud(t.type,!0),t;default:return""}}function jf(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case ws:return"Fragment";case vs:return"Portal";case Mf:return"Profiler";case km:return"StrictMode";case Ff:return"Suspense";case Vf:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case ZA:return(t.displayName||"Context")+".Consumer";case JA:return(t._context.displayName||"Context")+".Provider";case xm:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case Nm:return e=t.displayName||null,e!==null?e:jf(t.type)||"Memo";case Dr:e=t._payload,t=t._init;try{return jf(t(e))}catch{}}return null}function uN(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return jf(e);case 8:return e===km?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function ri(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function tE(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function cN(t){var e=tE(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),r=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,s=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return i.call(this)},set:function(o){r=""+o,s.call(this,o)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(o){r=""+o},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function lu(t){t._valueTracker||(t._valueTracker=cN(t))}function nE(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),r="";return t&&(r=tE(t)?t.checked?"true":"false":t.value),t=r,t!==n?(e.setValue(t),!0):!1}function ac(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function Uf(t,e){var n=e.checked;return Pe({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??t._wrapperState.initialChecked})}function lv(t,e){var n=e.defaultValue==null?"":e.defaultValue,r=e.checked!=null?e.checked:e.defaultChecked;n=ri(e.value!=null?e.value:n),t._wrapperState={initialChecked:r,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function rE(t,e){e=e.checked,e!=null&&Rm(t,"checked",e,!1)}function Bf(t,e){rE(t,e);var n=ri(e.value),r=e.type;if(n!=null)r==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(r==="submit"||r==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?zf(t,e.type,n):e.hasOwnProperty("defaultValue")&&zf(t,e.type,ri(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function uv(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var r=e.type;if(!(r!=="submit"&&r!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function zf(t,e,n){(e!=="number"||ac(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var ta=Array.isArray;function Ds(t,e,n,r){if(t=t.options,e){e={};for(var i=0;i<n.length;i++)e["$"+n[i]]=!0;for(n=0;n<t.length;n++)i=e.hasOwnProperty("$"+t[n].value),t[n].selected!==i&&(t[n].selected=i),i&&r&&(t[n].defaultSelected=!0)}else{for(n=""+ri(n),e=null,i=0;i<t.length;i++){if(t[i].value===n){t[i].selected=!0,r&&(t[i].defaultSelected=!0);return}e!==null||t[i].disabled||(e=t[i])}e!==null&&(e.selected=!0)}}function Wf(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(U(91));return Pe({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function cv(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error(U(92));if(ta(n)){if(1<n.length)throw Error(U(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:ri(n)}}function iE(t,e){var n=ri(e.value),r=ri(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),r!=null&&(t.defaultValue=""+r)}function hv(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function sE(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Hf(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?sE(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var uu,oE=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,n,r,i){MSApp.execUnsafeLocalFunction(function(){return t(e,n,r,i)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(uu=uu||document.createElement("div"),uu.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=uu.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function Da(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var ca={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},hN=["Webkit","ms","Moz","O"];Object.keys(ca).forEach(function(t){hN.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),ca[e]=ca[t]})});function aE(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||ca.hasOwnProperty(t)&&ca[t]?(""+e).trim():e+"px"}function lE(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var r=n.indexOf("--")===0,i=aE(n,e[n],r);n==="float"&&(n="cssFloat"),r?t.setProperty(n,i):t[n]=i}}var dN=Pe({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function qf(t,e){if(e){if(dN[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(U(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(U(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(U(61))}if(e.style!=null&&typeof e.style!="object")throw Error(U(62))}}function Gf(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Kf=null;function Pm(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var $f=null,Ls=null,Os=null;function dv(t){if(t=Tl(t)){if(typeof $f!="function")throw Error(U(280));var e=t.stateNode;e&&(e=Eh(e),$f(t.stateNode,t.type,e))}}function uE(t){Ls?Os?Os.push(t):Os=[t]:Ls=t}function cE(){if(Ls){var t=Ls,e=Os;if(Os=Ls=null,dv(t),e)for(t=0;t<e.length;t++)dv(e[t])}}function hE(t,e){return t(e)}function dE(){}var Bd=!1;function fE(t,e,n){if(Bd)return t(e,n);Bd=!0;try{return hE(t,e,n)}finally{Bd=!1,(Ls!==null||Os!==null)&&(dE(),cE())}}function La(t,e){var n=t.stateNode;if(n===null)return null;var r=Eh(n);if(r===null)return null;n=r[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(t=t.type,r=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!r;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(U(231,e,typeof n));return n}var Qf=!1;if(fr)try{var Wo={};Object.defineProperty(Wo,"passive",{get:function(){Qf=!0}}),window.addEventListener("test",Wo,Wo),window.removeEventListener("test",Wo,Wo)}catch{Qf=!1}function fN(t,e,n,r,i,s,o,a,l){var c=Array.prototype.slice.call(arguments,3);try{e.apply(n,c)}catch(h){this.onError(h)}}var ha=!1,lc=null,uc=!1,Yf=null,pN={onError:function(t){ha=!0,lc=t}};function mN(t,e,n,r,i,s,o,a,l){ha=!1,lc=null,fN.apply(pN,arguments)}function gN(t,e,n,r,i,s,o,a,l){if(mN.apply(this,arguments),ha){if(ha){var c=lc;ha=!1,lc=null}else throw Error(U(198));uc||(uc=!0,Yf=c)}}function ns(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&4098&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function pE(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function fv(t){if(ns(t)!==t)throw Error(U(188))}function _N(t){var e=t.alternate;if(!e){if(e=ns(t),e===null)throw Error(U(188));return e!==t?null:t}for(var n=t,r=e;;){var i=n.return;if(i===null)break;var s=i.alternate;if(s===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===s.child){for(s=i.child;s;){if(s===n)return fv(i),t;if(s===r)return fv(i),e;s=s.sibling}throw Error(U(188))}if(n.return!==r.return)n=i,r=s;else{for(var o=!1,a=i.child;a;){if(a===n){o=!0,n=i,r=s;break}if(a===r){o=!0,r=i,n=s;break}a=a.sibling}if(!o){for(a=s.child;a;){if(a===n){o=!0,n=s,r=i;break}if(a===r){o=!0,r=s,n=i;break}a=a.sibling}if(!o)throw Error(U(189))}}if(n.alternate!==r)throw Error(U(190))}if(n.tag!==3)throw Error(U(188));return n.stateNode.current===n?t:e}function mE(t){return t=_N(t),t!==null?gE(t):null}function gE(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=gE(t);if(e!==null)return e;t=t.sibling}return null}var _E=en.unstable_scheduleCallback,pv=en.unstable_cancelCallback,yN=en.unstable_shouldYield,vN=en.unstable_requestPaint,Be=en.unstable_now,wN=en.unstable_getCurrentPriorityLevel,bm=en.unstable_ImmediatePriority,yE=en.unstable_UserBlockingPriority,cc=en.unstable_NormalPriority,AN=en.unstable_LowPriority,vE=en.unstable_IdlePriority,yh=null,Bn=null;function EN(t){if(Bn&&typeof Bn.onCommitFiberRoot=="function")try{Bn.onCommitFiberRoot(yh,t,void 0,(t.current.flags&128)===128)}catch{}}var kn=Math.clz32?Math.clz32:CN,TN=Math.log,IN=Math.LN2;function CN(t){return t>>>=0,t===0?32:31-(TN(t)/IN|0)|0}var cu=64,hu=4194304;function na(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function hc(t,e){var n=t.pendingLanes;if(n===0)return 0;var r=0,i=t.suspendedLanes,s=t.pingedLanes,o=n&268435455;if(o!==0){var a=o&~i;a!==0?r=na(a):(s&=o,s!==0&&(r=na(s)))}else o=n&~i,o!==0?r=na(o):s!==0&&(r=na(s));if(r===0)return 0;if(e!==0&&e!==r&&!(e&i)&&(i=r&-r,s=e&-e,i>=s||i===16&&(s&4194240)!==0))return e;if(r&4&&(r|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=r;0<e;)n=31-kn(e),i=1<<n,r|=t[n],e&=~i;return r}function SN(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function RN(t,e){for(var n=t.suspendedLanes,r=t.pingedLanes,i=t.expirationTimes,s=t.pendingLanes;0<s;){var o=31-kn(s),a=1<<o,l=i[o];l===-1?(!(a&n)||a&r)&&(i[o]=SN(a,e)):l<=e&&(t.expiredLanes|=a),s&=~a}}function Xf(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function wE(){var t=cu;return cu<<=1,!(cu&4194240)&&(cu=64),t}function zd(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function Al(t,e,n){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-kn(e),t[e]=n}function kN(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var r=t.eventTimes;for(t=t.expirationTimes;0<n;){var i=31-kn(n),s=1<<i;e[i]=0,r[i]=-1,t[i]=-1,n&=~s}}function Dm(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var r=31-kn(n),i=1<<r;i&e|t[r]&e&&(t[r]|=e),n&=~i}}var _e=0;function AE(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var EE,Lm,TE,IE,CE,Jf=!1,du=[],Hr=null,qr=null,Gr=null,Oa=new Map,Ma=new Map,Or=[],xN="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function mv(t,e){switch(t){case"focusin":case"focusout":Hr=null;break;case"dragenter":case"dragleave":qr=null;break;case"mouseover":case"mouseout":Gr=null;break;case"pointerover":case"pointerout":Oa.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":Ma.delete(e.pointerId)}}function Ho(t,e,n,r,i,s){return t===null||t.nativeEvent!==s?(t={blockedOn:e,domEventName:n,eventSystemFlags:r,nativeEvent:s,targetContainers:[i]},e!==null&&(e=Tl(e),e!==null&&Lm(e)),t):(t.eventSystemFlags|=r,e=t.targetContainers,i!==null&&e.indexOf(i)===-1&&e.push(i),t)}function NN(t,e,n,r,i){switch(e){case"focusin":return Hr=Ho(Hr,t,e,n,r,i),!0;case"dragenter":return qr=Ho(qr,t,e,n,r,i),!0;case"mouseover":return Gr=Ho(Gr,t,e,n,r,i),!0;case"pointerover":var s=i.pointerId;return Oa.set(s,Ho(Oa.get(s)||null,t,e,n,r,i)),!0;case"gotpointercapture":return s=i.pointerId,Ma.set(s,Ho(Ma.get(s)||null,t,e,n,r,i)),!0}return!1}function SE(t){var e=xi(t.target);if(e!==null){var n=ns(e);if(n!==null){if(e=n.tag,e===13){if(e=pE(n),e!==null){t.blockedOn=e,CE(t.priority,function(){TE(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function Vu(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=Zf(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var r=new n.constructor(n.type,n);Kf=r,n.target.dispatchEvent(r),Kf=null}else return e=Tl(n),e!==null&&Lm(e),t.blockedOn=n,!1;e.shift()}return!0}function gv(t,e,n){Vu(t)&&n.delete(e)}function PN(){Jf=!1,Hr!==null&&Vu(Hr)&&(Hr=null),qr!==null&&Vu(qr)&&(qr=null),Gr!==null&&Vu(Gr)&&(Gr=null),Oa.forEach(gv),Ma.forEach(gv)}function qo(t,e){t.blockedOn===e&&(t.blockedOn=null,Jf||(Jf=!0,en.unstable_scheduleCallback(en.unstable_NormalPriority,PN)))}function Fa(t){function e(i){return qo(i,t)}if(0<du.length){qo(du[0],t);for(var n=1;n<du.length;n++){var r=du[n];r.blockedOn===t&&(r.blockedOn=null)}}for(Hr!==null&&qo(Hr,t),qr!==null&&qo(qr,t),Gr!==null&&qo(Gr,t),Oa.forEach(e),Ma.forEach(e),n=0;n<Or.length;n++)r=Or[n],r.blockedOn===t&&(r.blockedOn=null);for(;0<Or.length&&(n=Or[0],n.blockedOn===null);)SE(n),n.blockedOn===null&&Or.shift()}var Ms=Cr.ReactCurrentBatchConfig,dc=!0;function bN(t,e,n,r){var i=_e,s=Ms.transition;Ms.transition=null;try{_e=1,Om(t,e,n,r)}finally{_e=i,Ms.transition=s}}function DN(t,e,n,r){var i=_e,s=Ms.transition;Ms.transition=null;try{_e=4,Om(t,e,n,r)}finally{_e=i,Ms.transition=s}}function Om(t,e,n,r){if(dc){var i=Zf(t,e,n,r);if(i===null)Jd(t,e,r,fc,n),mv(t,r);else if(NN(i,t,e,n,r))r.stopPropagation();else if(mv(t,r),e&4&&-1<xN.indexOf(t)){for(;i!==null;){var s=Tl(i);if(s!==null&&EE(s),s=Zf(t,e,n,r),s===null&&Jd(t,e,r,fc,n),s===i)break;i=s}i!==null&&r.stopPropagation()}else Jd(t,e,r,null,n)}}var fc=null;function Zf(t,e,n,r){if(fc=null,t=Pm(r),t=xi(t),t!==null)if(e=ns(t),e===null)t=null;else if(n=e.tag,n===13){if(t=pE(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return fc=t,null}function RE(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(wN()){case bm:return 1;case yE:return 4;case cc:case AN:return 16;case vE:return 536870912;default:return 16}default:return 16}}var Ur=null,Mm=null,ju=null;function kE(){if(ju)return ju;var t,e=Mm,n=e.length,r,i="value"in Ur?Ur.value:Ur.textContent,s=i.length;for(t=0;t<n&&e[t]===i[t];t++);var o=n-t;for(r=1;r<=o&&e[n-r]===i[s-r];r++);return ju=i.slice(t,1<r?1-r:void 0)}function Uu(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function fu(){return!0}function _v(){return!1}function rn(t){function e(n,r,i,s,o){this._reactName=n,this._targetInst=i,this.type=r,this.nativeEvent=s,this.target=o,this.currentTarget=null;for(var a in t)t.hasOwnProperty(a)&&(n=t[a],this[a]=n?n(s):s[a]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?fu:_v,this.isPropagationStopped=_v,this}return Pe(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=fu)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=fu)},persist:function(){},isPersistent:fu}),e}var mo={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Fm=rn(mo),El=Pe({},mo,{view:0,detail:0}),LN=rn(El),Wd,Hd,Go,vh=Pe({},El,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Vm,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==Go&&(Go&&t.type==="mousemove"?(Wd=t.screenX-Go.screenX,Hd=t.screenY-Go.screenY):Hd=Wd=0,Go=t),Wd)},movementY:function(t){return"movementY"in t?t.movementY:Hd}}),yv=rn(vh),ON=Pe({},vh,{dataTransfer:0}),MN=rn(ON),FN=Pe({},El,{relatedTarget:0}),qd=rn(FN),VN=Pe({},mo,{animationName:0,elapsedTime:0,pseudoElement:0}),jN=rn(VN),UN=Pe({},mo,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),BN=rn(UN),zN=Pe({},mo,{data:0}),vv=rn(zN),WN={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},HN={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},qN={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function GN(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=qN[t])?!!e[t]:!1}function Vm(){return GN}var KN=Pe({},El,{key:function(t){if(t.key){var e=WN[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=Uu(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?HN[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Vm,charCode:function(t){return t.type==="keypress"?Uu(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?Uu(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),$N=rn(KN),QN=Pe({},vh,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),wv=rn(QN),YN=Pe({},El,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Vm}),XN=rn(YN),JN=Pe({},mo,{propertyName:0,elapsedTime:0,pseudoElement:0}),ZN=rn(JN),eP=Pe({},vh,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),tP=rn(eP),nP=[9,13,27,32],jm=fr&&"CompositionEvent"in window,da=null;fr&&"documentMode"in document&&(da=document.documentMode);var rP=fr&&"TextEvent"in window&&!da,xE=fr&&(!jm||da&&8<da&&11>=da),Av=" ",Ev=!1;function NE(t,e){switch(t){case"keyup":return nP.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function PE(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var As=!1;function iP(t,e){switch(t){case"compositionend":return PE(e);case"keypress":return e.which!==32?null:(Ev=!0,Av);case"textInput":return t=e.data,t===Av&&Ev?null:t;default:return null}}function sP(t,e){if(As)return t==="compositionend"||!jm&&NE(t,e)?(t=kE(),ju=Mm=Ur=null,As=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return xE&&e.locale!=="ko"?null:e.data;default:return null}}var oP={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Tv(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!oP[t.type]:e==="textarea"}function bE(t,e,n,r){uE(r),e=pc(e,"onChange"),0<e.length&&(n=new Fm("onChange","change",null,n,r),t.push({event:n,listeners:e}))}var fa=null,Va=null;function aP(t){WE(t,0)}function wh(t){var e=Is(t);if(nE(e))return t}function lP(t,e){if(t==="change")return e}var DE=!1;if(fr){var Gd;if(fr){var Kd="oninput"in document;if(!Kd){var Iv=document.createElement("div");Iv.setAttribute("oninput","return;"),Kd=typeof Iv.oninput=="function"}Gd=Kd}else Gd=!1;DE=Gd&&(!document.documentMode||9<document.documentMode)}function Cv(){fa&&(fa.detachEvent("onpropertychange",LE),Va=fa=null)}function LE(t){if(t.propertyName==="value"&&wh(Va)){var e=[];bE(e,Va,t,Pm(t)),fE(aP,e)}}function uP(t,e,n){t==="focusin"?(Cv(),fa=e,Va=n,fa.attachEvent("onpropertychange",LE)):t==="focusout"&&Cv()}function cP(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return wh(Va)}function hP(t,e){if(t==="click")return wh(e)}function dP(t,e){if(t==="input"||t==="change")return wh(e)}function fP(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var bn=typeof Object.is=="function"?Object.is:fP;function ja(t,e){if(bn(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),r=Object.keys(e);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!Of.call(e,i)||!bn(t[i],e[i]))return!1}return!0}function Sv(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function Rv(t,e){var n=Sv(t);t=0;for(var r;n;){if(n.nodeType===3){if(r=t+n.textContent.length,t<=e&&r>=e)return{node:n,offset:e-t};t=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Sv(n)}}function OE(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?OE(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function ME(){for(var t=window,e=ac();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=ac(t.document)}return e}function Um(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function pP(t){var e=ME(),n=t.focusedElem,r=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&OE(n.ownerDocument.documentElement,n)){if(r!==null&&Um(n)){if(e=r.start,t=r.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var i=n.textContent.length,s=Math.min(r.start,i);r=r.end===void 0?s:Math.min(r.end,i),!t.extend&&s>r&&(i=r,r=s,s=i),i=Rv(n,s);var o=Rv(n,r);i&&o&&(t.rangeCount!==1||t.anchorNode!==i.node||t.anchorOffset!==i.offset||t.focusNode!==o.node||t.focusOffset!==o.offset)&&(e=e.createRange(),e.setStart(i.node,i.offset),t.removeAllRanges(),s>r?(t.addRange(e),t.extend(o.node,o.offset)):(e.setEnd(o.node,o.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var mP=fr&&"documentMode"in document&&11>=document.documentMode,Es=null,ep=null,pa=null,tp=!1;function kv(t,e,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;tp||Es==null||Es!==ac(r)||(r=Es,"selectionStart"in r&&Um(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),pa&&ja(pa,r)||(pa=r,r=pc(ep,"onSelect"),0<r.length&&(e=new Fm("onSelect","select",null,e,n),t.push({event:e,listeners:r}),e.target=Es)))}function pu(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var Ts={animationend:pu("Animation","AnimationEnd"),animationiteration:pu("Animation","AnimationIteration"),animationstart:pu("Animation","AnimationStart"),transitionend:pu("Transition","TransitionEnd")},$d={},FE={};fr&&(FE=document.createElement("div").style,"AnimationEvent"in window||(delete Ts.animationend.animation,delete Ts.animationiteration.animation,delete Ts.animationstart.animation),"TransitionEvent"in window||delete Ts.transitionend.transition);function Ah(t){if($d[t])return $d[t];if(!Ts[t])return t;var e=Ts[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in FE)return $d[t]=e[n];return t}var VE=Ah("animationend"),jE=Ah("animationiteration"),UE=Ah("animationstart"),BE=Ah("transitionend"),zE=new Map,xv="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function fi(t,e){zE.set(t,e),ts(e,[t])}for(var Qd=0;Qd<xv.length;Qd++){var Yd=xv[Qd],gP=Yd.toLowerCase(),_P=Yd[0].toUpperCase()+Yd.slice(1);fi(gP,"on"+_P)}fi(VE,"onAnimationEnd");fi(jE,"onAnimationIteration");fi(UE,"onAnimationStart");fi("dblclick","onDoubleClick");fi("focusin","onFocus");fi("focusout","onBlur");fi(BE,"onTransitionEnd");Gs("onMouseEnter",["mouseout","mouseover"]);Gs("onMouseLeave",["mouseout","mouseover"]);Gs("onPointerEnter",["pointerout","pointerover"]);Gs("onPointerLeave",["pointerout","pointerover"]);ts("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));ts("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));ts("onBeforeInput",["compositionend","keypress","textInput","paste"]);ts("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));ts("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));ts("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var ra="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),yP=new Set("cancel close invalid load scroll toggle".split(" ").concat(ra));function Nv(t,e,n){var r=t.type||"unknown-event";t.currentTarget=n,gN(r,e,void 0,t),t.currentTarget=null}function WE(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var r=t[n],i=r.event;r=r.listeners;e:{var s=void 0;if(e)for(var o=r.length-1;0<=o;o--){var a=r[o],l=a.instance,c=a.currentTarget;if(a=a.listener,l!==s&&i.isPropagationStopped())break e;Nv(i,a,c),s=l}else for(o=0;o<r.length;o++){if(a=r[o],l=a.instance,c=a.currentTarget,a=a.listener,l!==s&&i.isPropagationStopped())break e;Nv(i,a,c),s=l}}}if(uc)throw t=Yf,uc=!1,Yf=null,t}function Ie(t,e){var n=e[op];n===void 0&&(n=e[op]=new Set);var r=t+"__bubble";n.has(r)||(HE(e,t,2,!1),n.add(r))}function Xd(t,e,n){var r=0;e&&(r|=4),HE(n,t,r,e)}var mu="_reactListening"+Math.random().toString(36).slice(2);function Ua(t){if(!t[mu]){t[mu]=!0,XA.forEach(function(n){n!=="selectionchange"&&(yP.has(n)||Xd(n,!1,t),Xd(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[mu]||(e[mu]=!0,Xd("selectionchange",!1,e))}}function HE(t,e,n,r){switch(RE(e)){case 1:var i=bN;break;case 4:i=DN;break;default:i=Om}n=i.bind(null,e,n,t),i=void 0,!Qf||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(i=!0),r?i!==void 0?t.addEventListener(e,n,{capture:!0,passive:i}):t.addEventListener(e,n,!0):i!==void 0?t.addEventListener(e,n,{passive:i}):t.addEventListener(e,n,!1)}function Jd(t,e,n,r,i){var s=r;if(!(e&1)&&!(e&2)&&r!==null)e:for(;;){if(r===null)return;var o=r.tag;if(o===3||o===4){var a=r.stateNode.containerInfo;if(a===i||a.nodeType===8&&a.parentNode===i)break;if(o===4)for(o=r.return;o!==null;){var l=o.tag;if((l===3||l===4)&&(l=o.stateNode.containerInfo,l===i||l.nodeType===8&&l.parentNode===i))return;o=o.return}for(;a!==null;){if(o=xi(a),o===null)return;if(l=o.tag,l===5||l===6){r=s=o;continue e}a=a.parentNode}}r=r.return}fE(function(){var c=s,h=Pm(n),f=[];e:{var p=zE.get(t);if(p!==void 0){var _=Fm,E=t;switch(t){case"keypress":if(Uu(n)===0)break e;case"keydown":case"keyup":_=$N;break;case"focusin":E="focus",_=qd;break;case"focusout":E="blur",_=qd;break;case"beforeblur":case"afterblur":_=qd;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":_=yv;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":_=MN;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":_=XN;break;case VE:case jE:case UE:_=jN;break;case BE:_=ZN;break;case"scroll":_=LN;break;case"wheel":_=tP;break;case"copy":case"cut":case"paste":_=BN;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":_=wv}var S=(e&4)!==0,k=!S&&t==="scroll",A=S?p!==null?p+"Capture":null:p;S=[];for(var v=c,T;v!==null;){T=v;var b=T.stateNode;if(T.tag===5&&b!==null&&(T=b,A!==null&&(b=La(v,A),b!=null&&S.push(Ba(v,b,T)))),k)break;v=v.return}0<S.length&&(p=new _(p,E,null,n,h),f.push({event:p,listeners:S}))}}if(!(e&7)){e:{if(p=t==="mouseover"||t==="pointerover",_=t==="mouseout"||t==="pointerout",p&&n!==Kf&&(E=n.relatedTarget||n.fromElement)&&(xi(E)||E[pr]))break e;if((_||p)&&(p=h.window===h?h:(p=h.ownerDocument)?p.defaultView||p.parentWindow:window,_?(E=n.relatedTarget||n.toElement,_=c,E=E?xi(E):null,E!==null&&(k=ns(E),E!==k||E.tag!==5&&E.tag!==6)&&(E=null)):(_=null,E=c),_!==E)){if(S=yv,b="onMouseLeave",A="onMouseEnter",v="mouse",(t==="pointerout"||t==="pointerover")&&(S=wv,b="onPointerLeave",A="onPointerEnter",v="pointer"),k=_==null?p:Is(_),T=E==null?p:Is(E),p=new S(b,v+"leave",_,n,h),p.target=k,p.relatedTarget=T,b=null,xi(h)===c&&(S=new S(A,v+"enter",E,n,h),S.target=T,S.relatedTarget=k,b=S),k=b,_&&E)t:{for(S=_,A=E,v=0,T=S;T;T=fs(T))v++;for(T=0,b=A;b;b=fs(b))T++;for(;0<v-T;)S=fs(S),v--;for(;0<T-v;)A=fs(A),T--;for(;v--;){if(S===A||A!==null&&S===A.alternate)break t;S=fs(S),A=fs(A)}S=null}else S=null;_!==null&&Pv(f,p,_,S,!1),E!==null&&k!==null&&Pv(f,k,E,S,!0)}}e:{if(p=c?Is(c):window,_=p.nodeName&&p.nodeName.toLowerCase(),_==="select"||_==="input"&&p.type==="file")var M=lP;else if(Tv(p))if(DE)M=dP;else{M=cP;var V=uP}else(_=p.nodeName)&&_.toLowerCase()==="input"&&(p.type==="checkbox"||p.type==="radio")&&(M=hP);if(M&&(M=M(t,c))){bE(f,M,n,h);break e}V&&V(t,p,c),t==="focusout"&&(V=p._wrapperState)&&V.controlled&&p.type==="number"&&zf(p,"number",p.value)}switch(V=c?Is(c):window,t){case"focusin":(Tv(V)||V.contentEditable==="true")&&(Es=V,ep=c,pa=null);break;case"focusout":pa=ep=Es=null;break;case"mousedown":tp=!0;break;case"contextmenu":case"mouseup":case"dragend":tp=!1,kv(f,n,h);break;case"selectionchange":if(mP)break;case"keydown":case"keyup":kv(f,n,h)}var C;if(jm)e:{switch(t){case"compositionstart":var y="onCompositionStart";break e;case"compositionend":y="onCompositionEnd";break e;case"compositionupdate":y="onCompositionUpdate";break e}y=void 0}else As?NE(t,n)&&(y="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(y="onCompositionStart");y&&(xE&&n.locale!=="ko"&&(As||y!=="onCompositionStart"?y==="onCompositionEnd"&&As&&(C=kE()):(Ur=h,Mm="value"in Ur?Ur.value:Ur.textContent,As=!0)),V=pc(c,y),0<V.length&&(y=new vv(y,t,null,n,h),f.push({event:y,listeners:V}),C?y.data=C:(C=PE(n),C!==null&&(y.data=C)))),(C=rP?iP(t,n):sP(t,n))&&(c=pc(c,"onBeforeInput"),0<c.length&&(h=new vv("onBeforeInput","beforeinput",null,n,h),f.push({event:h,listeners:c}),h.data=C))}WE(f,e)})}function Ba(t,e,n){return{instance:t,listener:e,currentTarget:n}}function pc(t,e){for(var n=e+"Capture",r=[];t!==null;){var i=t,s=i.stateNode;i.tag===5&&s!==null&&(i=s,s=La(t,n),s!=null&&r.unshift(Ba(t,s,i)),s=La(t,e),s!=null&&r.push(Ba(t,s,i))),t=t.return}return r}function fs(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function Pv(t,e,n,r,i){for(var s=e._reactName,o=[];n!==null&&n!==r;){var a=n,l=a.alternate,c=a.stateNode;if(l!==null&&l===r)break;a.tag===5&&c!==null&&(a=c,i?(l=La(n,s),l!=null&&o.unshift(Ba(n,l,a))):i||(l=La(n,s),l!=null&&o.push(Ba(n,l,a)))),n=n.return}o.length!==0&&t.push({event:e,listeners:o})}var vP=/\r\n?/g,wP=/\u0000|\uFFFD/g;function bv(t){return(typeof t=="string"?t:""+t).replace(vP,`
`).replace(wP,"")}function gu(t,e,n){if(e=bv(e),bv(t)!==e&&n)throw Error(U(425))}function mc(){}var np=null,rp=null;function ip(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var sp=typeof setTimeout=="function"?setTimeout:void 0,AP=typeof clearTimeout=="function"?clearTimeout:void 0,Dv=typeof Promise=="function"?Promise:void 0,EP=typeof queueMicrotask=="function"?queueMicrotask:typeof Dv<"u"?function(t){return Dv.resolve(null).then(t).catch(TP)}:sp;function TP(t){setTimeout(function(){throw t})}function Zd(t,e){var n=e,r=0;do{var i=n.nextSibling;if(t.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(r===0){t.removeChild(i),Fa(e);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=i}while(n);Fa(e)}function Kr(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function Lv(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var go=Math.random().toString(36).slice(2),jn="__reactFiber$"+go,za="__reactProps$"+go,pr="__reactContainer$"+go,op="__reactEvents$"+go,IP="__reactListeners$"+go,CP="__reactHandles$"+go;function xi(t){var e=t[jn];if(e)return e;for(var n=t.parentNode;n;){if(e=n[pr]||n[jn]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=Lv(t);t!==null;){if(n=t[jn])return n;t=Lv(t)}return e}t=n,n=t.parentNode}return null}function Tl(t){return t=t[jn]||t[pr],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function Is(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(U(33))}function Eh(t){return t[za]||null}var ap=[],Cs=-1;function pi(t){return{current:t}}function Se(t){0>Cs||(t.current=ap[Cs],ap[Cs]=null,Cs--)}function Ee(t,e){Cs++,ap[Cs]=t.current,t.current=e}var ii={},It=pi(ii),Ut=pi(!1),Bi=ii;function Ks(t,e){var n=t.type.contextTypes;if(!n)return ii;var r=t.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===e)return r.__reactInternalMemoizedMaskedChildContext;var i={},s;for(s in n)i[s]=e[s];return r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=i),i}function Bt(t){return t=t.childContextTypes,t!=null}function gc(){Se(Ut),Se(It)}function Ov(t,e,n){if(It.current!==ii)throw Error(U(168));Ee(It,e),Ee(Ut,n)}function qE(t,e,n){var r=t.stateNode;if(e=e.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var i in r)if(!(i in e))throw Error(U(108,uN(t)||"Unknown",i));return Pe({},n,r)}function _c(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||ii,Bi=It.current,Ee(It,t),Ee(Ut,Ut.current),!0}function Mv(t,e,n){var r=t.stateNode;if(!r)throw Error(U(169));n?(t=qE(t,e,Bi),r.__reactInternalMemoizedMergedChildContext=t,Se(Ut),Se(It),Ee(It,t)):Se(Ut),Ee(Ut,n)}var er=null,Th=!1,ef=!1;function GE(t){er===null?er=[t]:er.push(t)}function SP(t){Th=!0,GE(t)}function mi(){if(!ef&&er!==null){ef=!0;var t=0,e=_e;try{var n=er;for(_e=1;t<n.length;t++){var r=n[t];do r=r(!0);while(r!==null)}er=null,Th=!1}catch(i){throw er!==null&&(er=er.slice(t+1)),_E(bm,mi),i}finally{_e=e,ef=!1}}return null}var Ss=[],Rs=0,yc=null,vc=0,on=[],an=0,zi=null,nr=1,rr="";function Ci(t,e){Ss[Rs++]=vc,Ss[Rs++]=yc,yc=t,vc=e}function KE(t,e,n){on[an++]=nr,on[an++]=rr,on[an++]=zi,zi=t;var r=nr;t=rr;var i=32-kn(r)-1;r&=~(1<<i),n+=1;var s=32-kn(e)+i;if(30<s){var o=i-i%5;s=(r&(1<<o)-1).toString(32),r>>=o,i-=o,nr=1<<32-kn(e)+i|n<<i|r,rr=s+t}else nr=1<<s|n<<i|r,rr=t}function Bm(t){t.return!==null&&(Ci(t,1),KE(t,1,0))}function zm(t){for(;t===yc;)yc=Ss[--Rs],Ss[Rs]=null,vc=Ss[--Rs],Ss[Rs]=null;for(;t===zi;)zi=on[--an],on[an]=null,rr=on[--an],on[an]=null,nr=on[--an],on[an]=null}var Jt=null,Yt=null,Re=!1,An=null;function $E(t,e){var n=un(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}function Fv(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,Jt=t,Yt=Kr(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,Jt=t,Yt=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=zi!==null?{id:nr,overflow:rr}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=un(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,Jt=t,Yt=null,!0):!1;default:return!1}}function lp(t){return(t.mode&1)!==0&&(t.flags&128)===0}function up(t){if(Re){var e=Yt;if(e){var n=e;if(!Fv(t,e)){if(lp(t))throw Error(U(418));e=Kr(n.nextSibling);var r=Jt;e&&Fv(t,e)?$E(r,n):(t.flags=t.flags&-4097|2,Re=!1,Jt=t)}}else{if(lp(t))throw Error(U(418));t.flags=t.flags&-4097|2,Re=!1,Jt=t}}}function Vv(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;Jt=t}function _u(t){if(t!==Jt)return!1;if(!Re)return Vv(t),Re=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!ip(t.type,t.memoizedProps)),e&&(e=Yt)){if(lp(t))throw QE(),Error(U(418));for(;e;)$E(t,e),e=Kr(e.nextSibling)}if(Vv(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(U(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){Yt=Kr(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}Yt=null}}else Yt=Jt?Kr(t.stateNode.nextSibling):null;return!0}function QE(){for(var t=Yt;t;)t=Kr(t.nextSibling)}function $s(){Yt=Jt=null,Re=!1}function Wm(t){An===null?An=[t]:An.push(t)}var RP=Cr.ReactCurrentBatchConfig;function Ko(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(U(309));var r=n.stateNode}if(!r)throw Error(U(147,t));var i=r,s=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===s?e.ref:(e=function(o){var a=i.refs;o===null?delete a[s]:a[s]=o},e._stringRef=s,e)}if(typeof t!="string")throw Error(U(284));if(!n._owner)throw Error(U(290,t))}return t}function yu(t,e){throw t=Object.prototype.toString.call(e),Error(U(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function jv(t){var e=t._init;return e(t._payload)}function YE(t){function e(A,v){if(t){var T=A.deletions;T===null?(A.deletions=[v],A.flags|=16):T.push(v)}}function n(A,v){if(!t)return null;for(;v!==null;)e(A,v),v=v.sibling;return null}function r(A,v){for(A=new Map;v!==null;)v.key!==null?A.set(v.key,v):A.set(v.index,v),v=v.sibling;return A}function i(A,v){return A=Xr(A,v),A.index=0,A.sibling=null,A}function s(A,v,T){return A.index=T,t?(T=A.alternate,T!==null?(T=T.index,T<v?(A.flags|=2,v):T):(A.flags|=2,v)):(A.flags|=1048576,v)}function o(A){return t&&A.alternate===null&&(A.flags|=2),A}function a(A,v,T,b){return v===null||v.tag!==6?(v=lf(T,A.mode,b),v.return=A,v):(v=i(v,T),v.return=A,v)}function l(A,v,T,b){var M=T.type;return M===ws?h(A,v,T.props.children,b,T.key):v!==null&&(v.elementType===M||typeof M=="object"&&M!==null&&M.$$typeof===Dr&&jv(M)===v.type)?(b=i(v,T.props),b.ref=Ko(A,v,T),b.return=A,b):(b=Ku(T.type,T.key,T.props,null,A.mode,b),b.ref=Ko(A,v,T),b.return=A,b)}function c(A,v,T,b){return v===null||v.tag!==4||v.stateNode.containerInfo!==T.containerInfo||v.stateNode.implementation!==T.implementation?(v=uf(T,A.mode,b),v.return=A,v):(v=i(v,T.children||[]),v.return=A,v)}function h(A,v,T,b,M){return v===null||v.tag!==7?(v=Vi(T,A.mode,b,M),v.return=A,v):(v=i(v,T),v.return=A,v)}function f(A,v,T){if(typeof v=="string"&&v!==""||typeof v=="number")return v=lf(""+v,A.mode,T),v.return=A,v;if(typeof v=="object"&&v!==null){switch(v.$$typeof){case au:return T=Ku(v.type,v.key,v.props,null,A.mode,T),T.ref=Ko(A,null,v),T.return=A,T;case vs:return v=uf(v,A.mode,T),v.return=A,v;case Dr:var b=v._init;return f(A,b(v._payload),T)}if(ta(v)||zo(v))return v=Vi(v,A.mode,T,null),v.return=A,v;yu(A,v)}return null}function p(A,v,T,b){var M=v!==null?v.key:null;if(typeof T=="string"&&T!==""||typeof T=="number")return M!==null?null:a(A,v,""+T,b);if(typeof T=="object"&&T!==null){switch(T.$$typeof){case au:return T.key===M?l(A,v,T,b):null;case vs:return T.key===M?c(A,v,T,b):null;case Dr:return M=T._init,p(A,v,M(T._payload),b)}if(ta(T)||zo(T))return M!==null?null:h(A,v,T,b,null);yu(A,T)}return null}function _(A,v,T,b,M){if(typeof b=="string"&&b!==""||typeof b=="number")return A=A.get(T)||null,a(v,A,""+b,M);if(typeof b=="object"&&b!==null){switch(b.$$typeof){case au:return A=A.get(b.key===null?T:b.key)||null,l(v,A,b,M);case vs:return A=A.get(b.key===null?T:b.key)||null,c(v,A,b,M);case Dr:var V=b._init;return _(A,v,T,V(b._payload),M)}if(ta(b)||zo(b))return A=A.get(T)||null,h(v,A,b,M,null);yu(v,b)}return null}function E(A,v,T,b){for(var M=null,V=null,C=v,y=v=0,I=null;C!==null&&y<T.length;y++){C.index>y?(I=C,C=null):I=C.sibling;var R=p(A,C,T[y],b);if(R===null){C===null&&(C=I);break}t&&C&&R.alternate===null&&e(A,C),v=s(R,v,y),V===null?M=R:V.sibling=R,V=R,C=I}if(y===T.length)return n(A,C),Re&&Ci(A,y),M;if(C===null){for(;y<T.length;y++)C=f(A,T[y],b),C!==null&&(v=s(C,v,y),V===null?M=C:V.sibling=C,V=C);return Re&&Ci(A,y),M}for(C=r(A,C);y<T.length;y++)I=_(C,A,y,T[y],b),I!==null&&(t&&I.alternate!==null&&C.delete(I.key===null?y:I.key),v=s(I,v,y),V===null?M=I:V.sibling=I,V=I);return t&&C.forEach(function(P){return e(A,P)}),Re&&Ci(A,y),M}function S(A,v,T,b){var M=zo(T);if(typeof M!="function")throw Error(U(150));if(T=M.call(T),T==null)throw Error(U(151));for(var V=M=null,C=v,y=v=0,I=null,R=T.next();C!==null&&!R.done;y++,R=T.next()){C.index>y?(I=C,C=null):I=C.sibling;var P=p(A,C,R.value,b);if(P===null){C===null&&(C=I);break}t&&C&&P.alternate===null&&e(A,C),v=s(P,v,y),V===null?M=P:V.sibling=P,V=P,C=I}if(R.done)return n(A,C),Re&&Ci(A,y),M;if(C===null){for(;!R.done;y++,R=T.next())R=f(A,R.value,b),R!==null&&(v=s(R,v,y),V===null?M=R:V.sibling=R,V=R);return Re&&Ci(A,y),M}for(C=r(A,C);!R.done;y++,R=T.next())R=_(C,A,y,R.value,b),R!==null&&(t&&R.alternate!==null&&C.delete(R.key===null?y:R.key),v=s(R,v,y),V===null?M=R:V.sibling=R,V=R);return t&&C.forEach(function(D){return e(A,D)}),Re&&Ci(A,y),M}function k(A,v,T,b){if(typeof T=="object"&&T!==null&&T.type===ws&&T.key===null&&(T=T.props.children),typeof T=="object"&&T!==null){switch(T.$$typeof){case au:e:{for(var M=T.key,V=v;V!==null;){if(V.key===M){if(M=T.type,M===ws){if(V.tag===7){n(A,V.sibling),v=i(V,T.props.children),v.return=A,A=v;break e}}else if(V.elementType===M||typeof M=="object"&&M!==null&&M.$$typeof===Dr&&jv(M)===V.type){n(A,V.sibling),v=i(V,T.props),v.ref=Ko(A,V,T),v.return=A,A=v;break e}n(A,V);break}else e(A,V);V=V.sibling}T.type===ws?(v=Vi(T.props.children,A.mode,b,T.key),v.return=A,A=v):(b=Ku(T.type,T.key,T.props,null,A.mode,b),b.ref=Ko(A,v,T),b.return=A,A=b)}return o(A);case vs:e:{for(V=T.key;v!==null;){if(v.key===V)if(v.tag===4&&v.stateNode.containerInfo===T.containerInfo&&v.stateNode.implementation===T.implementation){n(A,v.sibling),v=i(v,T.children||[]),v.return=A,A=v;break e}else{n(A,v);break}else e(A,v);v=v.sibling}v=uf(T,A.mode,b),v.return=A,A=v}return o(A);case Dr:return V=T._init,k(A,v,V(T._payload),b)}if(ta(T))return E(A,v,T,b);if(zo(T))return S(A,v,T,b);yu(A,T)}return typeof T=="string"&&T!==""||typeof T=="number"?(T=""+T,v!==null&&v.tag===6?(n(A,v.sibling),v=i(v,T),v.return=A,A=v):(n(A,v),v=lf(T,A.mode,b),v.return=A,A=v),o(A)):n(A,v)}return k}var Qs=YE(!0),XE=YE(!1),wc=pi(null),Ac=null,ks=null,Hm=null;function qm(){Hm=ks=Ac=null}function Gm(t){var e=wc.current;Se(wc),t._currentValue=e}function cp(t,e,n){for(;t!==null;){var r=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,r!==null&&(r.childLanes|=e)):r!==null&&(r.childLanes&e)!==e&&(r.childLanes|=e),t===n)break;t=t.return}}function Fs(t,e){Ac=t,Hm=ks=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&e&&(Vt=!0),t.firstContext=null)}function dn(t){var e=t._currentValue;if(Hm!==t)if(t={context:t,memoizedValue:e,next:null},ks===null){if(Ac===null)throw Error(U(308));ks=t,Ac.dependencies={lanes:0,firstContext:t}}else ks=ks.next=t;return e}var Ni=null;function Km(t){Ni===null?Ni=[t]:Ni.push(t)}function JE(t,e,n,r){var i=e.interleaved;return i===null?(n.next=n,Km(e)):(n.next=i.next,i.next=n),e.interleaved=n,mr(t,r)}function mr(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}var Lr=!1;function $m(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function ZE(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function ur(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function $r(t,e,n){var r=t.updateQueue;if(r===null)return null;if(r=r.shared,he&2){var i=r.pending;return i===null?e.next=e:(e.next=i.next,i.next=e),r.pending=e,mr(t,n)}return i=r.interleaved,i===null?(e.next=e,Km(r)):(e.next=i.next,i.next=e),r.interleaved=e,mr(t,n)}function Bu(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,Dm(t,n)}}function Uv(t,e){var n=t.updateQueue,r=t.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};s===null?i=s=o:s=s.next=o,n=n.next}while(n!==null);s===null?i=s=e:s=s.next=e}else i=s=e;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:s,shared:r.shared,effects:r.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function Ec(t,e,n,r){var i=t.updateQueue;Lr=!1;var s=i.firstBaseUpdate,o=i.lastBaseUpdate,a=i.shared.pending;if(a!==null){i.shared.pending=null;var l=a,c=l.next;l.next=null,o===null?s=c:o.next=c,o=l;var h=t.alternate;h!==null&&(h=h.updateQueue,a=h.lastBaseUpdate,a!==o&&(a===null?h.firstBaseUpdate=c:a.next=c,h.lastBaseUpdate=l))}if(s!==null){var f=i.baseState;o=0,h=c=l=null,a=s;do{var p=a.lane,_=a.eventTime;if((r&p)===p){h!==null&&(h=h.next={eventTime:_,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var E=t,S=a;switch(p=e,_=n,S.tag){case 1:if(E=S.payload,typeof E=="function"){f=E.call(_,f,p);break e}f=E;break e;case 3:E.flags=E.flags&-65537|128;case 0:if(E=S.payload,p=typeof E=="function"?E.call(_,f,p):E,p==null)break e;f=Pe({},f,p);break e;case 2:Lr=!0}}a.callback!==null&&a.lane!==0&&(t.flags|=64,p=i.effects,p===null?i.effects=[a]:p.push(a))}else _={eventTime:_,lane:p,tag:a.tag,payload:a.payload,callback:a.callback,next:null},h===null?(c=h=_,l=f):h=h.next=_,o|=p;if(a=a.next,a===null){if(a=i.shared.pending,a===null)break;p=a,a=p.next,p.next=null,i.lastBaseUpdate=p,i.shared.pending=null}}while(!0);if(h===null&&(l=f),i.baseState=l,i.firstBaseUpdate=c,i.lastBaseUpdate=h,e=i.shared.interleaved,e!==null){i=e;do o|=i.lane,i=i.next;while(i!==e)}else s===null&&(i.shared.lanes=0);Hi|=o,t.lanes=o,t.memoizedState=f}}function Bv(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var r=t[e],i=r.callback;if(i!==null){if(r.callback=null,r=n,typeof i!="function")throw Error(U(191,i));i.call(r)}}}var Il={},zn=pi(Il),Wa=pi(Il),Ha=pi(Il);function Pi(t){if(t===Il)throw Error(U(174));return t}function Qm(t,e){switch(Ee(Ha,e),Ee(Wa,t),Ee(zn,Il),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:Hf(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=Hf(e,t)}Se(zn),Ee(zn,e)}function Ys(){Se(zn),Se(Wa),Se(Ha)}function eT(t){Pi(Ha.current);var e=Pi(zn.current),n=Hf(e,t.type);e!==n&&(Ee(Wa,t),Ee(zn,n))}function Ym(t){Wa.current===t&&(Se(zn),Se(Wa))}var xe=pi(0);function Tc(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var tf=[];function Xm(){for(var t=0;t<tf.length;t++)tf[t]._workInProgressVersionPrimary=null;tf.length=0}var zu=Cr.ReactCurrentDispatcher,nf=Cr.ReactCurrentBatchConfig,Wi=0,Ne=null,Ge=null,et=null,Ic=!1,ma=!1,qa=0,kP=0;function gt(){throw Error(U(321))}function Jm(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!bn(t[n],e[n]))return!1;return!0}function Zm(t,e,n,r,i,s){if(Wi=s,Ne=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,zu.current=t===null||t.memoizedState===null?bP:DP,t=n(r,i),ma){s=0;do{if(ma=!1,qa=0,25<=s)throw Error(U(301));s+=1,et=Ge=null,e.updateQueue=null,zu.current=LP,t=n(r,i)}while(ma)}if(zu.current=Cc,e=Ge!==null&&Ge.next!==null,Wi=0,et=Ge=Ne=null,Ic=!1,e)throw Error(U(300));return t}function eg(){var t=qa!==0;return qa=0,t}function Fn(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return et===null?Ne.memoizedState=et=t:et=et.next=t,et}function fn(){if(Ge===null){var t=Ne.alternate;t=t!==null?t.memoizedState:null}else t=Ge.next;var e=et===null?Ne.memoizedState:et.next;if(e!==null)et=e,Ge=t;else{if(t===null)throw Error(U(310));Ge=t,t={memoizedState:Ge.memoizedState,baseState:Ge.baseState,baseQueue:Ge.baseQueue,queue:Ge.queue,next:null},et===null?Ne.memoizedState=et=t:et=et.next=t}return et}function Ga(t,e){return typeof e=="function"?e(t):e}function rf(t){var e=fn(),n=e.queue;if(n===null)throw Error(U(311));n.lastRenderedReducer=t;var r=Ge,i=r.baseQueue,s=n.pending;if(s!==null){if(i!==null){var o=i.next;i.next=s.next,s.next=o}r.baseQueue=i=s,n.pending=null}if(i!==null){s=i.next,r=r.baseState;var a=o=null,l=null,c=s;do{var h=c.lane;if((Wi&h)===h)l!==null&&(l=l.next={lane:0,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null}),r=c.hasEagerState?c.eagerState:t(r,c.action);else{var f={lane:h,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null};l===null?(a=l=f,o=r):l=l.next=f,Ne.lanes|=h,Hi|=h}c=c.next}while(c!==null&&c!==s);l===null?o=r:l.next=a,bn(r,e.memoizedState)||(Vt=!0),e.memoizedState=r,e.baseState=o,e.baseQueue=l,n.lastRenderedState=r}if(t=n.interleaved,t!==null){i=t;do s=i.lane,Ne.lanes|=s,Hi|=s,i=i.next;while(i!==t)}else i===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function sf(t){var e=fn(),n=e.queue;if(n===null)throw Error(U(311));n.lastRenderedReducer=t;var r=n.dispatch,i=n.pending,s=e.memoizedState;if(i!==null){n.pending=null;var o=i=i.next;do s=t(s,o.action),o=o.next;while(o!==i);bn(s,e.memoizedState)||(Vt=!0),e.memoizedState=s,e.baseQueue===null&&(e.baseState=s),n.lastRenderedState=s}return[s,r]}function tT(){}function nT(t,e){var n=Ne,r=fn(),i=e(),s=!bn(r.memoizedState,i);if(s&&(r.memoizedState=i,Vt=!0),r=r.queue,tg(sT.bind(null,n,r,t),[t]),r.getSnapshot!==e||s||et!==null&&et.memoizedState.tag&1){if(n.flags|=2048,Ka(9,iT.bind(null,n,r,i,e),void 0,null),rt===null)throw Error(U(349));Wi&30||rT(n,e,i)}return i}function rT(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=Ne.updateQueue,e===null?(e={lastEffect:null,stores:null},Ne.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function iT(t,e,n,r){e.value=n,e.getSnapshot=r,oT(e)&&aT(t)}function sT(t,e,n){return n(function(){oT(e)&&aT(t)})}function oT(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!bn(t,n)}catch{return!0}}function aT(t){var e=mr(t,1);e!==null&&xn(e,t,1,-1)}function zv(t){var e=Fn();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Ga,lastRenderedState:t},e.queue=t,t=t.dispatch=PP.bind(null,Ne,t),[e.memoizedState,t]}function Ka(t,e,n,r){return t={tag:t,create:e,destroy:n,deps:r,next:null},e=Ne.updateQueue,e===null?(e={lastEffect:null,stores:null},Ne.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(r=n.next,n.next=t,t.next=r,e.lastEffect=t)),t}function lT(){return fn().memoizedState}function Wu(t,e,n,r){var i=Fn();Ne.flags|=t,i.memoizedState=Ka(1|e,n,void 0,r===void 0?null:r)}function Ih(t,e,n,r){var i=fn();r=r===void 0?null:r;var s=void 0;if(Ge!==null){var o=Ge.memoizedState;if(s=o.destroy,r!==null&&Jm(r,o.deps)){i.memoizedState=Ka(e,n,s,r);return}}Ne.flags|=t,i.memoizedState=Ka(1|e,n,s,r)}function Wv(t,e){return Wu(8390656,8,t,e)}function tg(t,e){return Ih(2048,8,t,e)}function uT(t,e){return Ih(4,2,t,e)}function cT(t,e){return Ih(4,4,t,e)}function hT(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function dT(t,e,n){return n=n!=null?n.concat([t]):null,Ih(4,4,hT.bind(null,e,t),n)}function ng(){}function fT(t,e){var n=fn();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&Jm(e,r[1])?r[0]:(n.memoizedState=[t,e],t)}function pT(t,e){var n=fn();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&Jm(e,r[1])?r[0]:(t=t(),n.memoizedState=[t,e],t)}function mT(t,e,n){return Wi&21?(bn(n,e)||(n=wE(),Ne.lanes|=n,Hi|=n,t.baseState=!0),e):(t.baseState&&(t.baseState=!1,Vt=!0),t.memoizedState=n)}function xP(t,e){var n=_e;_e=n!==0&&4>n?n:4,t(!0);var r=nf.transition;nf.transition={};try{t(!1),e()}finally{_e=n,nf.transition=r}}function gT(){return fn().memoizedState}function NP(t,e,n){var r=Yr(t);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},_T(t))yT(e,n);else if(n=JE(t,e,n,r),n!==null){var i=Pt();xn(n,t,r,i),vT(n,e,r)}}function PP(t,e,n){var r=Yr(t),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(_T(t))yT(e,i);else{var s=t.alternate;if(t.lanes===0&&(s===null||s.lanes===0)&&(s=e.lastRenderedReducer,s!==null))try{var o=e.lastRenderedState,a=s(o,n);if(i.hasEagerState=!0,i.eagerState=a,bn(a,o)){var l=e.interleaved;l===null?(i.next=i,Km(e)):(i.next=l.next,l.next=i),e.interleaved=i;return}}catch{}finally{}n=JE(t,e,i,r),n!==null&&(i=Pt(),xn(n,t,r,i),vT(n,e,r))}}function _T(t){var e=t.alternate;return t===Ne||e!==null&&e===Ne}function yT(t,e){ma=Ic=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function vT(t,e,n){if(n&4194240){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,Dm(t,n)}}var Cc={readContext:dn,useCallback:gt,useContext:gt,useEffect:gt,useImperativeHandle:gt,useInsertionEffect:gt,useLayoutEffect:gt,useMemo:gt,useReducer:gt,useRef:gt,useState:gt,useDebugValue:gt,useDeferredValue:gt,useTransition:gt,useMutableSource:gt,useSyncExternalStore:gt,useId:gt,unstable_isNewReconciler:!1},bP={readContext:dn,useCallback:function(t,e){return Fn().memoizedState=[t,e===void 0?null:e],t},useContext:dn,useEffect:Wv,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,Wu(4194308,4,hT.bind(null,e,t),n)},useLayoutEffect:function(t,e){return Wu(4194308,4,t,e)},useInsertionEffect:function(t,e){return Wu(4,2,t,e)},useMemo:function(t,e){var n=Fn();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var r=Fn();return e=n!==void 0?n(e):e,r.memoizedState=r.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},r.queue=t,t=t.dispatch=NP.bind(null,Ne,t),[r.memoizedState,t]},useRef:function(t){var e=Fn();return t={current:t},e.memoizedState=t},useState:zv,useDebugValue:ng,useDeferredValue:function(t){return Fn().memoizedState=t},useTransition:function(){var t=zv(!1),e=t[0];return t=xP.bind(null,t[1]),Fn().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var r=Ne,i=Fn();if(Re){if(n===void 0)throw Error(U(407));n=n()}else{if(n=e(),rt===null)throw Error(U(349));Wi&30||rT(r,e,n)}i.memoizedState=n;var s={value:n,getSnapshot:e};return i.queue=s,Wv(sT.bind(null,r,s,t),[t]),r.flags|=2048,Ka(9,iT.bind(null,r,s,n,e),void 0,null),n},useId:function(){var t=Fn(),e=rt.identifierPrefix;if(Re){var n=rr,r=nr;n=(r&~(1<<32-kn(r)-1)).toString(32)+n,e=":"+e+"R"+n,n=qa++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=kP++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},DP={readContext:dn,useCallback:fT,useContext:dn,useEffect:tg,useImperativeHandle:dT,useInsertionEffect:uT,useLayoutEffect:cT,useMemo:pT,useReducer:rf,useRef:lT,useState:function(){return rf(Ga)},useDebugValue:ng,useDeferredValue:function(t){var e=fn();return mT(e,Ge.memoizedState,t)},useTransition:function(){var t=rf(Ga)[0],e=fn().memoizedState;return[t,e]},useMutableSource:tT,useSyncExternalStore:nT,useId:gT,unstable_isNewReconciler:!1},LP={readContext:dn,useCallback:fT,useContext:dn,useEffect:tg,useImperativeHandle:dT,useInsertionEffect:uT,useLayoutEffect:cT,useMemo:pT,useReducer:sf,useRef:lT,useState:function(){return sf(Ga)},useDebugValue:ng,useDeferredValue:function(t){var e=fn();return Ge===null?e.memoizedState=t:mT(e,Ge.memoizedState,t)},useTransition:function(){var t=sf(Ga)[0],e=fn().memoizedState;return[t,e]},useMutableSource:tT,useSyncExternalStore:nT,useId:gT,unstable_isNewReconciler:!1};function vn(t,e){if(t&&t.defaultProps){e=Pe({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}function hp(t,e,n,r){e=t.memoizedState,n=n(r,e),n=n==null?e:Pe({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var Ch={isMounted:function(t){return(t=t._reactInternals)?ns(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var r=Pt(),i=Yr(t),s=ur(r,i);s.payload=e,n!=null&&(s.callback=n),e=$r(t,s,i),e!==null&&(xn(e,t,i,r),Bu(e,t,i))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var r=Pt(),i=Yr(t),s=ur(r,i);s.tag=1,s.payload=e,n!=null&&(s.callback=n),e=$r(t,s,i),e!==null&&(xn(e,t,i,r),Bu(e,t,i))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=Pt(),r=Yr(t),i=ur(n,r);i.tag=2,e!=null&&(i.callback=e),e=$r(t,i,r),e!==null&&(xn(e,t,r,n),Bu(e,t,r))}};function Hv(t,e,n,r,i,s,o){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(r,s,o):e.prototype&&e.prototype.isPureReactComponent?!ja(n,r)||!ja(i,s):!0}function wT(t,e,n){var r=!1,i=ii,s=e.contextType;return typeof s=="object"&&s!==null?s=dn(s):(i=Bt(e)?Bi:It.current,r=e.contextTypes,s=(r=r!=null)?Ks(t,i):ii),e=new e(n,s),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=Ch,t.stateNode=e,e._reactInternals=t,r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=i,t.__reactInternalMemoizedMaskedChildContext=s),e}function qv(t,e,n,r){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,r),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,r),e.state!==t&&Ch.enqueueReplaceState(e,e.state,null)}function dp(t,e,n,r){var i=t.stateNode;i.props=n,i.state=t.memoizedState,i.refs={},$m(t);var s=e.contextType;typeof s=="object"&&s!==null?i.context=dn(s):(s=Bt(e)?Bi:It.current,i.context=Ks(t,s)),i.state=t.memoizedState,s=e.getDerivedStateFromProps,typeof s=="function"&&(hp(t,e,s,n),i.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(e=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),e!==i.state&&Ch.enqueueReplaceState(i,i.state,null),Ec(t,n,i,r),i.state=t.memoizedState),typeof i.componentDidMount=="function"&&(t.flags|=4194308)}function Xs(t,e){try{var n="",r=e;do n+=lN(r),r=r.return;while(r);var i=n}catch(s){i=`
Error generating stack: `+s.message+`
`+s.stack}return{value:t,source:e,stack:i,digest:null}}function of(t,e,n){return{value:t,source:null,stack:n??null,digest:e??null}}function fp(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var OP=typeof WeakMap=="function"?WeakMap:Map;function AT(t,e,n){n=ur(-1,n),n.tag=3,n.payload={element:null};var r=e.value;return n.callback=function(){Rc||(Rc=!0,Tp=r),fp(t,e)},n}function ET(t,e,n){n=ur(-1,n),n.tag=3;var r=t.type.getDerivedStateFromError;if(typeof r=="function"){var i=e.value;n.payload=function(){return r(i)},n.callback=function(){fp(t,e)}}var s=t.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(n.callback=function(){fp(t,e),typeof r!="function"&&(Qr===null?Qr=new Set([this]):Qr.add(this));var o=e.stack;this.componentDidCatch(e.value,{componentStack:o!==null?o:""})}),n}function Gv(t,e,n){var r=t.pingCache;if(r===null){r=t.pingCache=new OP;var i=new Set;r.set(e,i)}else i=r.get(e),i===void 0&&(i=new Set,r.set(e,i));i.has(n)||(i.add(n),t=QP.bind(null,t,e,n),e.then(t,t))}function Kv(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function $v(t,e,n,r,i){return t.mode&1?(t.flags|=65536,t.lanes=i,t):(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=ur(-1,1),e.tag=2,$r(n,e,1))),n.lanes|=1),t)}var MP=Cr.ReactCurrentOwner,Vt=!1;function xt(t,e,n,r){e.child=t===null?XE(e,null,n,r):Qs(e,t.child,n,r)}function Qv(t,e,n,r,i){n=n.render;var s=e.ref;return Fs(e,i),r=Zm(t,e,n,r,s,i),n=eg(),t!==null&&!Vt?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,gr(t,e,i)):(Re&&n&&Bm(e),e.flags|=1,xt(t,e,r,i),e.child)}function Yv(t,e,n,r,i){if(t===null){var s=n.type;return typeof s=="function"&&!cg(s)&&s.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=s,TT(t,e,s,r,i)):(t=Ku(n.type,null,r,e,e.mode,i),t.ref=e.ref,t.return=e,e.child=t)}if(s=t.child,!(t.lanes&i)){var o=s.memoizedProps;if(n=n.compare,n=n!==null?n:ja,n(o,r)&&t.ref===e.ref)return gr(t,e,i)}return e.flags|=1,t=Xr(s,r),t.ref=e.ref,t.return=e,e.child=t}function TT(t,e,n,r,i){if(t!==null){var s=t.memoizedProps;if(ja(s,r)&&t.ref===e.ref)if(Vt=!1,e.pendingProps=r=s,(t.lanes&i)!==0)t.flags&131072&&(Vt=!0);else return e.lanes=t.lanes,gr(t,e,i)}return pp(t,e,n,r,i)}function IT(t,e,n){var r=e.pendingProps,i=r.children,s=t!==null?t.memoizedState:null;if(r.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},Ee(Ns,Kt),Kt|=n;else{if(!(n&1073741824))return t=s!==null?s.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,Ee(Ns,Kt),Kt|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=s!==null?s.baseLanes:n,Ee(Ns,Kt),Kt|=r}else s!==null?(r=s.baseLanes|n,e.memoizedState=null):r=n,Ee(Ns,Kt),Kt|=r;return xt(t,e,i,n),e.child}function CT(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function pp(t,e,n,r,i){var s=Bt(n)?Bi:It.current;return s=Ks(e,s),Fs(e,i),n=Zm(t,e,n,r,s,i),r=eg(),t!==null&&!Vt?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,gr(t,e,i)):(Re&&r&&Bm(e),e.flags|=1,xt(t,e,n,i),e.child)}function Xv(t,e,n,r,i){if(Bt(n)){var s=!0;_c(e)}else s=!1;if(Fs(e,i),e.stateNode===null)Hu(t,e),wT(e,n,r),dp(e,n,r,i),r=!0;else if(t===null){var o=e.stateNode,a=e.memoizedProps;o.props=a;var l=o.context,c=n.contextType;typeof c=="object"&&c!==null?c=dn(c):(c=Bt(n)?Bi:It.current,c=Ks(e,c));var h=n.getDerivedStateFromProps,f=typeof h=="function"||typeof o.getSnapshotBeforeUpdate=="function";f||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==r||l!==c)&&qv(e,o,r,c),Lr=!1;var p=e.memoizedState;o.state=p,Ec(e,r,o,i),l=e.memoizedState,a!==r||p!==l||Ut.current||Lr?(typeof h=="function"&&(hp(e,n,h,r),l=e.memoizedState),(a=Lr||Hv(e,n,a,r,p,l,c))?(f||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(e.flags|=4194308)):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=r,e.memoizedState=l),o.props=r,o.state=l,o.context=c,r=a):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),r=!1)}else{o=e.stateNode,ZE(t,e),a=e.memoizedProps,c=e.type===e.elementType?a:vn(e.type,a),o.props=c,f=e.pendingProps,p=o.context,l=n.contextType,typeof l=="object"&&l!==null?l=dn(l):(l=Bt(n)?Bi:It.current,l=Ks(e,l));var _=n.getDerivedStateFromProps;(h=typeof _=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==f||p!==l)&&qv(e,o,r,l),Lr=!1,p=e.memoizedState,o.state=p,Ec(e,r,o,i);var E=e.memoizedState;a!==f||p!==E||Ut.current||Lr?(typeof _=="function"&&(hp(e,n,_,r),E=e.memoizedState),(c=Lr||Hv(e,n,c,r,p,E,l)||!1)?(h||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(r,E,l),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(r,E,l)),typeof o.componentDidUpdate=="function"&&(e.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&p===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&p===t.memoizedState||(e.flags|=1024),e.memoizedProps=r,e.memoizedState=E),o.props=r,o.state=E,o.context=l,r=c):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&p===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&p===t.memoizedState||(e.flags|=1024),r=!1)}return mp(t,e,n,r,s,i)}function mp(t,e,n,r,i,s){CT(t,e);var o=(e.flags&128)!==0;if(!r&&!o)return i&&Mv(e,n,!1),gr(t,e,s);r=e.stateNode,MP.current=e;var a=o&&typeof n.getDerivedStateFromError!="function"?null:r.render();return e.flags|=1,t!==null&&o?(e.child=Qs(e,t.child,null,s),e.child=Qs(e,null,a,s)):xt(t,e,a,s),e.memoizedState=r.state,i&&Mv(e,n,!0),e.child}function ST(t){var e=t.stateNode;e.pendingContext?Ov(t,e.pendingContext,e.pendingContext!==e.context):e.context&&Ov(t,e.context,!1),Qm(t,e.containerInfo)}function Jv(t,e,n,r,i){return $s(),Wm(i),e.flags|=256,xt(t,e,n,r),e.child}var gp={dehydrated:null,treeContext:null,retryLane:0};function _p(t){return{baseLanes:t,cachePool:null,transitions:null}}function RT(t,e,n){var r=e.pendingProps,i=xe.current,s=!1,o=(e.flags&128)!==0,a;if((a=o)||(a=t!==null&&t.memoizedState===null?!1:(i&2)!==0),a?(s=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(i|=1),Ee(xe,i&1),t===null)return up(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(e.mode&1?t.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(o=r.children,t=r.fallback,s?(r=e.mode,s=e.child,o={mode:"hidden",children:o},!(r&1)&&s!==null?(s.childLanes=0,s.pendingProps=o):s=kh(o,r,0,null),t=Vi(t,r,n,null),s.return=e,t.return=e,s.sibling=t,e.child=s,e.child.memoizedState=_p(n),e.memoizedState=gp,t):rg(e,o));if(i=t.memoizedState,i!==null&&(a=i.dehydrated,a!==null))return FP(t,e,o,r,a,i,n);if(s){s=r.fallback,o=e.mode,i=t.child,a=i.sibling;var l={mode:"hidden",children:r.children};return!(o&1)&&e.child!==i?(r=e.child,r.childLanes=0,r.pendingProps=l,e.deletions=null):(r=Xr(i,l),r.subtreeFlags=i.subtreeFlags&14680064),a!==null?s=Xr(a,s):(s=Vi(s,o,n,null),s.flags|=2),s.return=e,r.return=e,r.sibling=s,e.child=r,r=s,s=e.child,o=t.child.memoizedState,o=o===null?_p(n):{baseLanes:o.baseLanes|n,cachePool:null,transitions:o.transitions},s.memoizedState=o,s.childLanes=t.childLanes&~n,e.memoizedState=gp,r}return s=t.child,t=s.sibling,r=Xr(s,{mode:"visible",children:r.children}),!(e.mode&1)&&(r.lanes=n),r.return=e,r.sibling=null,t!==null&&(n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)),e.child=r,e.memoizedState=null,r}function rg(t,e){return e=kh({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function vu(t,e,n,r){return r!==null&&Wm(r),Qs(e,t.child,null,n),t=rg(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function FP(t,e,n,r,i,s,o){if(n)return e.flags&256?(e.flags&=-257,r=of(Error(U(422))),vu(t,e,o,r)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(s=r.fallback,i=e.mode,r=kh({mode:"visible",children:r.children},i,0,null),s=Vi(s,i,o,null),s.flags|=2,r.return=e,s.return=e,r.sibling=s,e.child=r,e.mode&1&&Qs(e,t.child,null,o),e.child.memoizedState=_p(o),e.memoizedState=gp,s);if(!(e.mode&1))return vu(t,e,o,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var a=r.dgst;return r=a,s=Error(U(419)),r=of(s,r,void 0),vu(t,e,o,r)}if(a=(o&t.childLanes)!==0,Vt||a){if(r=rt,r!==null){switch(o&-o){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(r.suspendedLanes|o)?0:i,i!==0&&i!==s.retryLane&&(s.retryLane=i,mr(t,i),xn(r,t,i,-1))}return ug(),r=of(Error(U(421))),vu(t,e,o,r)}return i.data==="$?"?(e.flags|=128,e.child=t.child,e=YP.bind(null,t),i._reactRetry=e,null):(t=s.treeContext,Yt=Kr(i.nextSibling),Jt=e,Re=!0,An=null,t!==null&&(on[an++]=nr,on[an++]=rr,on[an++]=zi,nr=t.id,rr=t.overflow,zi=e),e=rg(e,r.children),e.flags|=4096,e)}function Zv(t,e,n){t.lanes|=e;var r=t.alternate;r!==null&&(r.lanes|=e),cp(t.return,e,n)}function af(t,e,n,r,i){var s=t.memoizedState;s===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(s.isBackwards=e,s.rendering=null,s.renderingStartTime=0,s.last=r,s.tail=n,s.tailMode=i)}function kT(t,e,n){var r=e.pendingProps,i=r.revealOrder,s=r.tail;if(xt(t,e,r.children,n),r=xe.current,r&2)r=r&1|2,e.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&Zv(t,n,e);else if(t.tag===19)Zv(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}r&=1}if(Ee(xe,r),!(e.mode&1))e.memoizedState=null;else switch(i){case"forwards":for(n=e.child,i=null;n!==null;)t=n.alternate,t!==null&&Tc(t)===null&&(i=n),n=n.sibling;n=i,n===null?(i=e.child,e.child=null):(i=n.sibling,n.sibling=null),af(e,!1,i,n,s);break;case"backwards":for(n=null,i=e.child,e.child=null;i!==null;){if(t=i.alternate,t!==null&&Tc(t)===null){e.child=i;break}t=i.sibling,i.sibling=n,n=i,i=t}af(e,!0,n,null,s);break;case"together":af(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function Hu(t,e){!(e.mode&1)&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function gr(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),Hi|=e.lanes,!(n&e.childLanes))return null;if(t!==null&&e.child!==t.child)throw Error(U(153));if(e.child!==null){for(t=e.child,n=Xr(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=Xr(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function VP(t,e,n){switch(e.tag){case 3:ST(e),$s();break;case 5:eT(e);break;case 1:Bt(e.type)&&_c(e);break;case 4:Qm(e,e.stateNode.containerInfo);break;case 10:var r=e.type._context,i=e.memoizedProps.value;Ee(wc,r._currentValue),r._currentValue=i;break;case 13:if(r=e.memoizedState,r!==null)return r.dehydrated!==null?(Ee(xe,xe.current&1),e.flags|=128,null):n&e.child.childLanes?RT(t,e,n):(Ee(xe,xe.current&1),t=gr(t,e,n),t!==null?t.sibling:null);Ee(xe,xe.current&1);break;case 19:if(r=(n&e.childLanes)!==0,t.flags&128){if(r)return kT(t,e,n);e.flags|=128}if(i=e.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),Ee(xe,xe.current),r)break;return null;case 22:case 23:return e.lanes=0,IT(t,e,n)}return gr(t,e,n)}var xT,yp,NT,PT;xT=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};yp=function(){};NT=function(t,e,n,r){var i=t.memoizedProps;if(i!==r){t=e.stateNode,Pi(zn.current);var s=null;switch(n){case"input":i=Uf(t,i),r=Uf(t,r),s=[];break;case"select":i=Pe({},i,{value:void 0}),r=Pe({},r,{value:void 0}),s=[];break;case"textarea":i=Wf(t,i),r=Wf(t,r),s=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(t.onclick=mc)}qf(n,r);var o;n=null;for(c in i)if(!r.hasOwnProperty(c)&&i.hasOwnProperty(c)&&i[c]!=null)if(c==="style"){var a=i[c];for(o in a)a.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else c!=="dangerouslySetInnerHTML"&&c!=="children"&&c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&c!=="autoFocus"&&(ba.hasOwnProperty(c)?s||(s=[]):(s=s||[]).push(c,null));for(c in r){var l=r[c];if(a=i!=null?i[c]:void 0,r.hasOwnProperty(c)&&l!==a&&(l!=null||a!=null))if(c==="style")if(a){for(o in a)!a.hasOwnProperty(o)||l&&l.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in l)l.hasOwnProperty(o)&&a[o]!==l[o]&&(n||(n={}),n[o]=l[o])}else n||(s||(s=[]),s.push(c,n)),n=l;else c==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,a=a?a.__html:void 0,l!=null&&a!==l&&(s=s||[]).push(c,l)):c==="children"?typeof l!="string"&&typeof l!="number"||(s=s||[]).push(c,""+l):c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&(ba.hasOwnProperty(c)?(l!=null&&c==="onScroll"&&Ie("scroll",t),s||a===l||(s=[])):(s=s||[]).push(c,l))}n&&(s=s||[]).push("style",n);var c=s;(e.updateQueue=c)&&(e.flags|=4)}};PT=function(t,e,n,r){n!==r&&(e.flags|=4)};function $o(t,e){if(!Re)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:r.sibling=null}}function _t(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,r=0;if(e)for(var i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=t,i=i.sibling;else for(i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=t,i=i.sibling;return t.subtreeFlags|=r,t.childLanes=n,e}function jP(t,e,n){var r=e.pendingProps;switch(zm(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return _t(e),null;case 1:return Bt(e.type)&&gc(),_t(e),null;case 3:return r=e.stateNode,Ys(),Se(Ut),Se(It),Xm(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(t===null||t.child===null)&&(_u(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,An!==null&&(Sp(An),An=null))),yp(t,e),_t(e),null;case 5:Ym(e);var i=Pi(Ha.current);if(n=e.type,t!==null&&e.stateNode!=null)NT(t,e,n,r,i),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!r){if(e.stateNode===null)throw Error(U(166));return _t(e),null}if(t=Pi(zn.current),_u(e)){r=e.stateNode,n=e.type;var s=e.memoizedProps;switch(r[jn]=e,r[za]=s,t=(e.mode&1)!==0,n){case"dialog":Ie("cancel",r),Ie("close",r);break;case"iframe":case"object":case"embed":Ie("load",r);break;case"video":case"audio":for(i=0;i<ra.length;i++)Ie(ra[i],r);break;case"source":Ie("error",r);break;case"img":case"image":case"link":Ie("error",r),Ie("load",r);break;case"details":Ie("toggle",r);break;case"input":lv(r,s),Ie("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!s.multiple},Ie("invalid",r);break;case"textarea":cv(r,s),Ie("invalid",r)}qf(n,s),i=null;for(var o in s)if(s.hasOwnProperty(o)){var a=s[o];o==="children"?typeof a=="string"?r.textContent!==a&&(s.suppressHydrationWarning!==!0&&gu(r.textContent,a,t),i=["children",a]):typeof a=="number"&&r.textContent!==""+a&&(s.suppressHydrationWarning!==!0&&gu(r.textContent,a,t),i=["children",""+a]):ba.hasOwnProperty(o)&&a!=null&&o==="onScroll"&&Ie("scroll",r)}switch(n){case"input":lu(r),uv(r,s,!0);break;case"textarea":lu(r),hv(r);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(r.onclick=mc)}r=i,e.updateQueue=r,r!==null&&(e.flags|=4)}else{o=i.nodeType===9?i:i.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=sE(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=o.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof r.is=="string"?t=o.createElement(n,{is:r.is}):(t=o.createElement(n),n==="select"&&(o=t,r.multiple?o.multiple=!0:r.size&&(o.size=r.size))):t=o.createElementNS(t,n),t[jn]=e,t[za]=r,xT(t,e,!1,!1),e.stateNode=t;e:{switch(o=Gf(n,r),n){case"dialog":Ie("cancel",t),Ie("close",t),i=r;break;case"iframe":case"object":case"embed":Ie("load",t),i=r;break;case"video":case"audio":for(i=0;i<ra.length;i++)Ie(ra[i],t);i=r;break;case"source":Ie("error",t),i=r;break;case"img":case"image":case"link":Ie("error",t),Ie("load",t),i=r;break;case"details":Ie("toggle",t),i=r;break;case"input":lv(t,r),i=Uf(t,r),Ie("invalid",t);break;case"option":i=r;break;case"select":t._wrapperState={wasMultiple:!!r.multiple},i=Pe({},r,{value:void 0}),Ie("invalid",t);break;case"textarea":cv(t,r),i=Wf(t,r),Ie("invalid",t);break;default:i=r}qf(n,i),a=i;for(s in a)if(a.hasOwnProperty(s)){var l=a[s];s==="style"?lE(t,l):s==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,l!=null&&oE(t,l)):s==="children"?typeof l=="string"?(n!=="textarea"||l!=="")&&Da(t,l):typeof l=="number"&&Da(t,""+l):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(ba.hasOwnProperty(s)?l!=null&&s==="onScroll"&&Ie("scroll",t):l!=null&&Rm(t,s,l,o))}switch(n){case"input":lu(t),uv(t,r,!1);break;case"textarea":lu(t),hv(t);break;case"option":r.value!=null&&t.setAttribute("value",""+ri(r.value));break;case"select":t.multiple=!!r.multiple,s=r.value,s!=null?Ds(t,!!r.multiple,s,!1):r.defaultValue!=null&&Ds(t,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(t.onclick=mc)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return _t(e),null;case 6:if(t&&e.stateNode!=null)PT(t,e,t.memoizedProps,r);else{if(typeof r!="string"&&e.stateNode===null)throw Error(U(166));if(n=Pi(Ha.current),Pi(zn.current),_u(e)){if(r=e.stateNode,n=e.memoizedProps,r[jn]=e,(s=r.nodeValue!==n)&&(t=Jt,t!==null))switch(t.tag){case 3:gu(r.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&gu(r.nodeValue,n,(t.mode&1)!==0)}s&&(e.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[jn]=e,e.stateNode=r}return _t(e),null;case 13:if(Se(xe),r=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(Re&&Yt!==null&&e.mode&1&&!(e.flags&128))QE(),$s(),e.flags|=98560,s=!1;else if(s=_u(e),r!==null&&r.dehydrated!==null){if(t===null){if(!s)throw Error(U(318));if(s=e.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(U(317));s[jn]=e}else $s(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;_t(e),s=!1}else An!==null&&(Sp(An),An=null),s=!0;if(!s)return e.flags&65536?e:null}return e.flags&128?(e.lanes=n,e):(r=r!==null,r!==(t!==null&&t.memoizedState!==null)&&r&&(e.child.flags|=8192,e.mode&1&&(t===null||xe.current&1?Qe===0&&(Qe=3):ug())),e.updateQueue!==null&&(e.flags|=4),_t(e),null);case 4:return Ys(),yp(t,e),t===null&&Ua(e.stateNode.containerInfo),_t(e),null;case 10:return Gm(e.type._context),_t(e),null;case 17:return Bt(e.type)&&gc(),_t(e),null;case 19:if(Se(xe),s=e.memoizedState,s===null)return _t(e),null;if(r=(e.flags&128)!==0,o=s.rendering,o===null)if(r)$o(s,!1);else{if(Qe!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(o=Tc(t),o!==null){for(e.flags|=128,$o(s,!1),r=o.updateQueue,r!==null&&(e.updateQueue=r,e.flags|=4),e.subtreeFlags=0,r=n,n=e.child;n!==null;)s=n,t=r,s.flags&=14680066,o=s.alternate,o===null?(s.childLanes=0,s.lanes=t,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=o.childLanes,s.lanes=o.lanes,s.child=o.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=o.memoizedProps,s.memoizedState=o.memoizedState,s.updateQueue=o.updateQueue,s.type=o.type,t=o.dependencies,s.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return Ee(xe,xe.current&1|2),e.child}t=t.sibling}s.tail!==null&&Be()>Js&&(e.flags|=128,r=!0,$o(s,!1),e.lanes=4194304)}else{if(!r)if(t=Tc(o),t!==null){if(e.flags|=128,r=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),$o(s,!0),s.tail===null&&s.tailMode==="hidden"&&!o.alternate&&!Re)return _t(e),null}else 2*Be()-s.renderingStartTime>Js&&n!==1073741824&&(e.flags|=128,r=!0,$o(s,!1),e.lanes=4194304);s.isBackwards?(o.sibling=e.child,e.child=o):(n=s.last,n!==null?n.sibling=o:e.child=o,s.last=o)}return s.tail!==null?(e=s.tail,s.rendering=e,s.tail=e.sibling,s.renderingStartTime=Be(),e.sibling=null,n=xe.current,Ee(xe,r?n&1|2:n&1),e):(_t(e),null);case 22:case 23:return lg(),r=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==r&&(e.flags|=8192),r&&e.mode&1?Kt&1073741824&&(_t(e),e.subtreeFlags&6&&(e.flags|=8192)):_t(e),null;case 24:return null;case 25:return null}throw Error(U(156,e.tag))}function UP(t,e){switch(zm(e),e.tag){case 1:return Bt(e.type)&&gc(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return Ys(),Se(Ut),Se(It),Xm(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 5:return Ym(e),null;case 13:if(Se(xe),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(U(340));$s()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return Se(xe),null;case 4:return Ys(),null;case 10:return Gm(e.type._context),null;case 22:case 23:return lg(),null;case 24:return null;default:return null}}var wu=!1,wt=!1,BP=typeof WeakSet=="function"?WeakSet:Set,q=null;function xs(t,e){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){Le(t,e,r)}else n.current=null}function vp(t,e,n){try{n()}catch(r){Le(t,e,r)}}var e0=!1;function zP(t,e){if(np=dc,t=ME(),Um(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var i=r.anchorOffset,s=r.focusNode;r=r.focusOffset;try{n.nodeType,s.nodeType}catch{n=null;break e}var o=0,a=-1,l=-1,c=0,h=0,f=t,p=null;t:for(;;){for(var _;f!==n||i!==0&&f.nodeType!==3||(a=o+i),f!==s||r!==0&&f.nodeType!==3||(l=o+r),f.nodeType===3&&(o+=f.nodeValue.length),(_=f.firstChild)!==null;)p=f,f=_;for(;;){if(f===t)break t;if(p===n&&++c===i&&(a=o),p===s&&++h===r&&(l=o),(_=f.nextSibling)!==null)break;f=p,p=f.parentNode}f=_}n=a===-1||l===-1?null:{start:a,end:l}}else n=null}n=n||{start:0,end:0}}else n=null;for(rp={focusedElem:t,selectionRange:n},dc=!1,q=e;q!==null;)if(e=q,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,q=t;else for(;q!==null;){e=q;try{var E=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(E!==null){var S=E.memoizedProps,k=E.memoizedState,A=e.stateNode,v=A.getSnapshotBeforeUpdate(e.elementType===e.type?S:vn(e.type,S),k);A.__reactInternalSnapshotBeforeUpdate=v}break;case 3:var T=e.stateNode.containerInfo;T.nodeType===1?T.textContent="":T.nodeType===9&&T.documentElement&&T.removeChild(T.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(U(163))}}catch(b){Le(e,e.return,b)}if(t=e.sibling,t!==null){t.return=e.return,q=t;break}q=e.return}return E=e0,e0=!1,E}function ga(t,e,n){var r=e.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&t)===t){var s=i.destroy;i.destroy=void 0,s!==void 0&&vp(e,n,s)}i=i.next}while(i!==r)}}function Sh(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var r=n.create;n.destroy=r()}n=n.next}while(n!==e)}}function wp(t){var e=t.ref;if(e!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof e=="function"?e(t):e.current=t}}function bT(t){var e=t.alternate;e!==null&&(t.alternate=null,bT(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[jn],delete e[za],delete e[op],delete e[IP],delete e[CP])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function DT(t){return t.tag===5||t.tag===3||t.tag===4}function t0(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||DT(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function Ap(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=mc));else if(r!==4&&(t=t.child,t!==null))for(Ap(t,e,n),t=t.sibling;t!==null;)Ap(t,e,n),t=t.sibling}function Ep(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(r!==4&&(t=t.child,t!==null))for(Ep(t,e,n),t=t.sibling;t!==null;)Ep(t,e,n),t=t.sibling}var ot=null,wn=!1;function Pr(t,e,n){for(n=n.child;n!==null;)LT(t,e,n),n=n.sibling}function LT(t,e,n){if(Bn&&typeof Bn.onCommitFiberUnmount=="function")try{Bn.onCommitFiberUnmount(yh,n)}catch{}switch(n.tag){case 5:wt||xs(n,e);case 6:var r=ot,i=wn;ot=null,Pr(t,e,n),ot=r,wn=i,ot!==null&&(wn?(t=ot,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):ot.removeChild(n.stateNode));break;case 18:ot!==null&&(wn?(t=ot,n=n.stateNode,t.nodeType===8?Zd(t.parentNode,n):t.nodeType===1&&Zd(t,n),Fa(t)):Zd(ot,n.stateNode));break;case 4:r=ot,i=wn,ot=n.stateNode.containerInfo,wn=!0,Pr(t,e,n),ot=r,wn=i;break;case 0:case 11:case 14:case 15:if(!wt&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var s=i,o=s.destroy;s=s.tag,o!==void 0&&(s&2||s&4)&&vp(n,e,o),i=i.next}while(i!==r)}Pr(t,e,n);break;case 1:if(!wt&&(xs(n,e),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(a){Le(n,e,a)}Pr(t,e,n);break;case 21:Pr(t,e,n);break;case 22:n.mode&1?(wt=(r=wt)||n.memoizedState!==null,Pr(t,e,n),wt=r):Pr(t,e,n);break;default:Pr(t,e,n)}}function n0(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new BP),e.forEach(function(r){var i=XP.bind(null,t,r);n.has(r)||(n.add(r),r.then(i,i))})}}function yn(t,e){var n=e.deletions;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];try{var s=t,o=e,a=o;e:for(;a!==null;){switch(a.tag){case 5:ot=a.stateNode,wn=!1;break e;case 3:ot=a.stateNode.containerInfo,wn=!0;break e;case 4:ot=a.stateNode.containerInfo,wn=!0;break e}a=a.return}if(ot===null)throw Error(U(160));LT(s,o,i),ot=null,wn=!1;var l=i.alternate;l!==null&&(l.return=null),i.return=null}catch(c){Le(i,e,c)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)OT(e,t),e=e.sibling}function OT(t,e){var n=t.alternate,r=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(yn(e,t),Mn(t),r&4){try{ga(3,t,t.return),Sh(3,t)}catch(S){Le(t,t.return,S)}try{ga(5,t,t.return)}catch(S){Le(t,t.return,S)}}break;case 1:yn(e,t),Mn(t),r&512&&n!==null&&xs(n,n.return);break;case 5:if(yn(e,t),Mn(t),r&512&&n!==null&&xs(n,n.return),t.flags&32){var i=t.stateNode;try{Da(i,"")}catch(S){Le(t,t.return,S)}}if(r&4&&(i=t.stateNode,i!=null)){var s=t.memoizedProps,o=n!==null?n.memoizedProps:s,a=t.type,l=t.updateQueue;if(t.updateQueue=null,l!==null)try{a==="input"&&s.type==="radio"&&s.name!=null&&rE(i,s),Gf(a,o);var c=Gf(a,s);for(o=0;o<l.length;o+=2){var h=l[o],f=l[o+1];h==="style"?lE(i,f):h==="dangerouslySetInnerHTML"?oE(i,f):h==="children"?Da(i,f):Rm(i,h,f,c)}switch(a){case"input":Bf(i,s);break;case"textarea":iE(i,s);break;case"select":var p=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!s.multiple;var _=s.value;_!=null?Ds(i,!!s.multiple,_,!1):p!==!!s.multiple&&(s.defaultValue!=null?Ds(i,!!s.multiple,s.defaultValue,!0):Ds(i,!!s.multiple,s.multiple?[]:"",!1))}i[za]=s}catch(S){Le(t,t.return,S)}}break;case 6:if(yn(e,t),Mn(t),r&4){if(t.stateNode===null)throw Error(U(162));i=t.stateNode,s=t.memoizedProps;try{i.nodeValue=s}catch(S){Le(t,t.return,S)}}break;case 3:if(yn(e,t),Mn(t),r&4&&n!==null&&n.memoizedState.isDehydrated)try{Fa(e.containerInfo)}catch(S){Le(t,t.return,S)}break;case 4:yn(e,t),Mn(t);break;case 13:yn(e,t),Mn(t),i=t.child,i.flags&8192&&(s=i.memoizedState!==null,i.stateNode.isHidden=s,!s||i.alternate!==null&&i.alternate.memoizedState!==null||(og=Be())),r&4&&n0(t);break;case 22:if(h=n!==null&&n.memoizedState!==null,t.mode&1?(wt=(c=wt)||h,yn(e,t),wt=c):yn(e,t),Mn(t),r&8192){if(c=t.memoizedState!==null,(t.stateNode.isHidden=c)&&!h&&t.mode&1)for(q=t,h=t.child;h!==null;){for(f=q=h;q!==null;){switch(p=q,_=p.child,p.tag){case 0:case 11:case 14:case 15:ga(4,p,p.return);break;case 1:xs(p,p.return);var E=p.stateNode;if(typeof E.componentWillUnmount=="function"){r=p,n=p.return;try{e=r,E.props=e.memoizedProps,E.state=e.memoizedState,E.componentWillUnmount()}catch(S){Le(r,n,S)}}break;case 5:xs(p,p.return);break;case 22:if(p.memoizedState!==null){i0(f);continue}}_!==null?(_.return=p,q=_):i0(f)}h=h.sibling}e:for(h=null,f=t;;){if(f.tag===5){if(h===null){h=f;try{i=f.stateNode,c?(s=i.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(a=f.stateNode,l=f.memoizedProps.style,o=l!=null&&l.hasOwnProperty("display")?l.display:null,a.style.display=aE("display",o))}catch(S){Le(t,t.return,S)}}}else if(f.tag===6){if(h===null)try{f.stateNode.nodeValue=c?"":f.memoizedProps}catch(S){Le(t,t.return,S)}}else if((f.tag!==22&&f.tag!==23||f.memoizedState===null||f===t)&&f.child!==null){f.child.return=f,f=f.child;continue}if(f===t)break e;for(;f.sibling===null;){if(f.return===null||f.return===t)break e;h===f&&(h=null),f=f.return}h===f&&(h=null),f.sibling.return=f.return,f=f.sibling}}break;case 19:yn(e,t),Mn(t),r&4&&n0(t);break;case 21:break;default:yn(e,t),Mn(t)}}function Mn(t){var e=t.flags;if(e&2){try{e:{for(var n=t.return;n!==null;){if(DT(n)){var r=n;break e}n=n.return}throw Error(U(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&(Da(i,""),r.flags&=-33);var s=t0(t);Ep(t,s,i);break;case 3:case 4:var o=r.stateNode.containerInfo,a=t0(t);Ap(t,a,o);break;default:throw Error(U(161))}}catch(l){Le(t,t.return,l)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function WP(t,e,n){q=t,MT(t)}function MT(t,e,n){for(var r=(t.mode&1)!==0;q!==null;){var i=q,s=i.child;if(i.tag===22&&r){var o=i.memoizedState!==null||wu;if(!o){var a=i.alternate,l=a!==null&&a.memoizedState!==null||wt;a=wu;var c=wt;if(wu=o,(wt=l)&&!c)for(q=i;q!==null;)o=q,l=o.child,o.tag===22&&o.memoizedState!==null?s0(i):l!==null?(l.return=o,q=l):s0(i);for(;s!==null;)q=s,MT(s),s=s.sibling;q=i,wu=a,wt=c}r0(t)}else i.subtreeFlags&8772&&s!==null?(s.return=i,q=s):r0(t)}}function r0(t){for(;q!==null;){var e=q;if(e.flags&8772){var n=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:wt||Sh(5,e);break;case 1:var r=e.stateNode;if(e.flags&4&&!wt)if(n===null)r.componentDidMount();else{var i=e.elementType===e.type?n.memoizedProps:vn(e.type,n.memoizedProps);r.componentDidUpdate(i,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var s=e.updateQueue;s!==null&&Bv(e,s,r);break;case 3:var o=e.updateQueue;if(o!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}Bv(e,o,n)}break;case 5:var a=e.stateNode;if(n===null&&e.flags&4){n=a;var l=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&n.focus();break;case"img":l.src&&(n.src=l.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var c=e.alternate;if(c!==null){var h=c.memoizedState;if(h!==null){var f=h.dehydrated;f!==null&&Fa(f)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(U(163))}wt||e.flags&512&&wp(e)}catch(p){Le(e,e.return,p)}}if(e===t){q=null;break}if(n=e.sibling,n!==null){n.return=e.return,q=n;break}q=e.return}}function i0(t){for(;q!==null;){var e=q;if(e===t){q=null;break}var n=e.sibling;if(n!==null){n.return=e.return,q=n;break}q=e.return}}function s0(t){for(;q!==null;){var e=q;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{Sh(4,e)}catch(l){Le(e,n,l)}break;case 1:var r=e.stateNode;if(typeof r.componentDidMount=="function"){var i=e.return;try{r.componentDidMount()}catch(l){Le(e,i,l)}}var s=e.return;try{wp(e)}catch(l){Le(e,s,l)}break;case 5:var o=e.return;try{wp(e)}catch(l){Le(e,o,l)}}}catch(l){Le(e,e.return,l)}if(e===t){q=null;break}var a=e.sibling;if(a!==null){a.return=e.return,q=a;break}q=e.return}}var HP=Math.ceil,Sc=Cr.ReactCurrentDispatcher,ig=Cr.ReactCurrentOwner,cn=Cr.ReactCurrentBatchConfig,he=0,rt=null,He=null,ct=0,Kt=0,Ns=pi(0),Qe=0,$a=null,Hi=0,Rh=0,sg=0,_a=null,Ft=null,og=0,Js=1/0,Zn=null,Rc=!1,Tp=null,Qr=null,Au=!1,Br=null,kc=0,ya=0,Ip=null,qu=-1,Gu=0;function Pt(){return he&6?Be():qu!==-1?qu:qu=Be()}function Yr(t){return t.mode&1?he&2&&ct!==0?ct&-ct:RP.transition!==null?(Gu===0&&(Gu=wE()),Gu):(t=_e,t!==0||(t=window.event,t=t===void 0?16:RE(t.type)),t):1}function xn(t,e,n,r){if(50<ya)throw ya=0,Ip=null,Error(U(185));Al(t,n,r),(!(he&2)||t!==rt)&&(t===rt&&(!(he&2)&&(Rh|=n),Qe===4&&Mr(t,ct)),zt(t,r),n===1&&he===0&&!(e.mode&1)&&(Js=Be()+500,Th&&mi()))}function zt(t,e){var n=t.callbackNode;RN(t,e);var r=hc(t,t===rt?ct:0);if(r===0)n!==null&&pv(n),t.callbackNode=null,t.callbackPriority=0;else if(e=r&-r,t.callbackPriority!==e){if(n!=null&&pv(n),e===1)t.tag===0?SP(o0.bind(null,t)):GE(o0.bind(null,t)),EP(function(){!(he&6)&&mi()}),n=null;else{switch(AE(r)){case 1:n=bm;break;case 4:n=yE;break;case 16:n=cc;break;case 536870912:n=vE;break;default:n=cc}n=HT(n,FT.bind(null,t))}t.callbackPriority=e,t.callbackNode=n}}function FT(t,e){if(qu=-1,Gu=0,he&6)throw Error(U(327));var n=t.callbackNode;if(Vs()&&t.callbackNode!==n)return null;var r=hc(t,t===rt?ct:0);if(r===0)return null;if(r&30||r&t.expiredLanes||e)e=xc(t,r);else{e=r;var i=he;he|=2;var s=jT();(rt!==t||ct!==e)&&(Zn=null,Js=Be()+500,Fi(t,e));do try{KP();break}catch(a){VT(t,a)}while(!0);qm(),Sc.current=s,he=i,He!==null?e=0:(rt=null,ct=0,e=Qe)}if(e!==0){if(e===2&&(i=Xf(t),i!==0&&(r=i,e=Cp(t,i))),e===1)throw n=$a,Fi(t,0),Mr(t,r),zt(t,Be()),n;if(e===6)Mr(t,r);else{if(i=t.current.alternate,!(r&30)&&!qP(i)&&(e=xc(t,r),e===2&&(s=Xf(t),s!==0&&(r=s,e=Cp(t,s))),e===1))throw n=$a,Fi(t,0),Mr(t,r),zt(t,Be()),n;switch(t.finishedWork=i,t.finishedLanes=r,e){case 0:case 1:throw Error(U(345));case 2:Si(t,Ft,Zn);break;case 3:if(Mr(t,r),(r&130023424)===r&&(e=og+500-Be(),10<e)){if(hc(t,0)!==0)break;if(i=t.suspendedLanes,(i&r)!==r){Pt(),t.pingedLanes|=t.suspendedLanes&i;break}t.timeoutHandle=sp(Si.bind(null,t,Ft,Zn),e);break}Si(t,Ft,Zn);break;case 4:if(Mr(t,r),(r&4194240)===r)break;for(e=t.eventTimes,i=-1;0<r;){var o=31-kn(r);s=1<<o,o=e[o],o>i&&(i=o),r&=~s}if(r=i,r=Be()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*HP(r/1960))-r,10<r){t.timeoutHandle=sp(Si.bind(null,t,Ft,Zn),r);break}Si(t,Ft,Zn);break;case 5:Si(t,Ft,Zn);break;default:throw Error(U(329))}}}return zt(t,Be()),t.callbackNode===n?FT.bind(null,t):null}function Cp(t,e){var n=_a;return t.current.memoizedState.isDehydrated&&(Fi(t,e).flags|=256),t=xc(t,e),t!==2&&(e=Ft,Ft=n,e!==null&&Sp(e)),t}function Sp(t){Ft===null?Ft=t:Ft.push.apply(Ft,t)}function qP(t){for(var e=t;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var i=n[r],s=i.getSnapshot;i=i.value;try{if(!bn(s(),i))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function Mr(t,e){for(e&=~sg,e&=~Rh,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-kn(e),r=1<<n;t[n]=-1,e&=~r}}function o0(t){if(he&6)throw Error(U(327));Vs();var e=hc(t,0);if(!(e&1))return zt(t,Be()),null;var n=xc(t,e);if(t.tag!==0&&n===2){var r=Xf(t);r!==0&&(e=r,n=Cp(t,r))}if(n===1)throw n=$a,Fi(t,0),Mr(t,e),zt(t,Be()),n;if(n===6)throw Error(U(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,Si(t,Ft,Zn),zt(t,Be()),null}function ag(t,e){var n=he;he|=1;try{return t(e)}finally{he=n,he===0&&(Js=Be()+500,Th&&mi())}}function qi(t){Br!==null&&Br.tag===0&&!(he&6)&&Vs();var e=he;he|=1;var n=cn.transition,r=_e;try{if(cn.transition=null,_e=1,t)return t()}finally{_e=r,cn.transition=n,he=e,!(he&6)&&mi()}}function lg(){Kt=Ns.current,Se(Ns)}function Fi(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,AP(n)),He!==null)for(n=He.return;n!==null;){var r=n;switch(zm(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&gc();break;case 3:Ys(),Se(Ut),Se(It),Xm();break;case 5:Ym(r);break;case 4:Ys();break;case 13:Se(xe);break;case 19:Se(xe);break;case 10:Gm(r.type._context);break;case 22:case 23:lg()}n=n.return}if(rt=t,He=t=Xr(t.current,null),ct=Kt=e,Qe=0,$a=null,sg=Rh=Hi=0,Ft=_a=null,Ni!==null){for(e=0;e<Ni.length;e++)if(n=Ni[e],r=n.interleaved,r!==null){n.interleaved=null;var i=r.next,s=n.pending;if(s!==null){var o=s.next;s.next=i,r.next=o}n.pending=r}Ni=null}return t}function VT(t,e){do{var n=He;try{if(qm(),zu.current=Cc,Ic){for(var r=Ne.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}Ic=!1}if(Wi=0,et=Ge=Ne=null,ma=!1,qa=0,ig.current=null,n===null||n.return===null){Qe=1,$a=e,He=null;break}e:{var s=t,o=n.return,a=n,l=e;if(e=ct,a.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){var c=l,h=a,f=h.tag;if(!(h.mode&1)&&(f===0||f===11||f===15)){var p=h.alternate;p?(h.updateQueue=p.updateQueue,h.memoizedState=p.memoizedState,h.lanes=p.lanes):(h.updateQueue=null,h.memoizedState=null)}var _=Kv(o);if(_!==null){_.flags&=-257,$v(_,o,a,s,e),_.mode&1&&Gv(s,c,e),e=_,l=c;var E=e.updateQueue;if(E===null){var S=new Set;S.add(l),e.updateQueue=S}else E.add(l);break e}else{if(!(e&1)){Gv(s,c,e),ug();break e}l=Error(U(426))}}else if(Re&&a.mode&1){var k=Kv(o);if(k!==null){!(k.flags&65536)&&(k.flags|=256),$v(k,o,a,s,e),Wm(Xs(l,a));break e}}s=l=Xs(l,a),Qe!==4&&(Qe=2),_a===null?_a=[s]:_a.push(s),s=o;do{switch(s.tag){case 3:s.flags|=65536,e&=-e,s.lanes|=e;var A=AT(s,l,e);Uv(s,A);break e;case 1:a=l;var v=s.type,T=s.stateNode;if(!(s.flags&128)&&(typeof v.getDerivedStateFromError=="function"||T!==null&&typeof T.componentDidCatch=="function"&&(Qr===null||!Qr.has(T)))){s.flags|=65536,e&=-e,s.lanes|=e;var b=ET(s,a,e);Uv(s,b);break e}}s=s.return}while(s!==null)}BT(n)}catch(M){e=M,He===n&&n!==null&&(He=n=n.return);continue}break}while(!0)}function jT(){var t=Sc.current;return Sc.current=Cc,t===null?Cc:t}function ug(){(Qe===0||Qe===3||Qe===2)&&(Qe=4),rt===null||!(Hi&268435455)&&!(Rh&268435455)||Mr(rt,ct)}function xc(t,e){var n=he;he|=2;var r=jT();(rt!==t||ct!==e)&&(Zn=null,Fi(t,e));do try{GP();break}catch(i){VT(t,i)}while(!0);if(qm(),he=n,Sc.current=r,He!==null)throw Error(U(261));return rt=null,ct=0,Qe}function GP(){for(;He!==null;)UT(He)}function KP(){for(;He!==null&&!yN();)UT(He)}function UT(t){var e=WT(t.alternate,t,Kt);t.memoizedProps=t.pendingProps,e===null?BT(t):He=e,ig.current=null}function BT(t){var e=t;do{var n=e.alternate;if(t=e.return,e.flags&32768){if(n=UP(n,e),n!==null){n.flags&=32767,He=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{Qe=6,He=null;return}}else if(n=jP(n,e,Kt),n!==null){He=n;return}if(e=e.sibling,e!==null){He=e;return}He=e=t}while(e!==null);Qe===0&&(Qe=5)}function Si(t,e,n){var r=_e,i=cn.transition;try{cn.transition=null,_e=1,$P(t,e,n,r)}finally{cn.transition=i,_e=r}return null}function $P(t,e,n,r){do Vs();while(Br!==null);if(he&6)throw Error(U(327));n=t.finishedWork;var i=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error(U(177));t.callbackNode=null,t.callbackPriority=0;var s=n.lanes|n.childLanes;if(kN(t,s),t===rt&&(He=rt=null,ct=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||Au||(Au=!0,HT(cc,function(){return Vs(),null})),s=(n.flags&15990)!==0,n.subtreeFlags&15990||s){s=cn.transition,cn.transition=null;var o=_e;_e=1;var a=he;he|=4,ig.current=null,zP(t,n),OT(n,t),pP(rp),dc=!!np,rp=np=null,t.current=n,WP(n),vN(),he=a,_e=o,cn.transition=s}else t.current=n;if(Au&&(Au=!1,Br=t,kc=i),s=t.pendingLanes,s===0&&(Qr=null),EN(n.stateNode),zt(t,Be()),e!==null)for(r=t.onRecoverableError,n=0;n<e.length;n++)i=e[n],r(i.value,{componentStack:i.stack,digest:i.digest});if(Rc)throw Rc=!1,t=Tp,Tp=null,t;return kc&1&&t.tag!==0&&Vs(),s=t.pendingLanes,s&1?t===Ip?ya++:(ya=0,Ip=t):ya=0,mi(),null}function Vs(){if(Br!==null){var t=AE(kc),e=cn.transition,n=_e;try{if(cn.transition=null,_e=16>t?16:t,Br===null)var r=!1;else{if(t=Br,Br=null,kc=0,he&6)throw Error(U(331));var i=he;for(he|=4,q=t.current;q!==null;){var s=q,o=s.child;if(q.flags&16){var a=s.deletions;if(a!==null){for(var l=0;l<a.length;l++){var c=a[l];for(q=c;q!==null;){var h=q;switch(h.tag){case 0:case 11:case 15:ga(8,h,s)}var f=h.child;if(f!==null)f.return=h,q=f;else for(;q!==null;){h=q;var p=h.sibling,_=h.return;if(bT(h),h===c){q=null;break}if(p!==null){p.return=_,q=p;break}q=_}}}var E=s.alternate;if(E!==null){var S=E.child;if(S!==null){E.child=null;do{var k=S.sibling;S.sibling=null,S=k}while(S!==null)}}q=s}}if(s.subtreeFlags&2064&&o!==null)o.return=s,q=o;else e:for(;q!==null;){if(s=q,s.flags&2048)switch(s.tag){case 0:case 11:case 15:ga(9,s,s.return)}var A=s.sibling;if(A!==null){A.return=s.return,q=A;break e}q=s.return}}var v=t.current;for(q=v;q!==null;){o=q;var T=o.child;if(o.subtreeFlags&2064&&T!==null)T.return=o,q=T;else e:for(o=v;q!==null;){if(a=q,a.flags&2048)try{switch(a.tag){case 0:case 11:case 15:Sh(9,a)}}catch(M){Le(a,a.return,M)}if(a===o){q=null;break e}var b=a.sibling;if(b!==null){b.return=a.return,q=b;break e}q=a.return}}if(he=i,mi(),Bn&&typeof Bn.onPostCommitFiberRoot=="function")try{Bn.onPostCommitFiberRoot(yh,t)}catch{}r=!0}return r}finally{_e=n,cn.transition=e}}return!1}function a0(t,e,n){e=Xs(n,e),e=AT(t,e,1),t=$r(t,e,1),e=Pt(),t!==null&&(Al(t,1,e),zt(t,e))}function Le(t,e,n){if(t.tag===3)a0(t,t,n);else for(;e!==null;){if(e.tag===3){a0(e,t,n);break}else if(e.tag===1){var r=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(Qr===null||!Qr.has(r))){t=Xs(n,t),t=ET(e,t,1),e=$r(e,t,1),t=Pt(),e!==null&&(Al(e,1,t),zt(e,t));break}}e=e.return}}function QP(t,e,n){var r=t.pingCache;r!==null&&r.delete(e),e=Pt(),t.pingedLanes|=t.suspendedLanes&n,rt===t&&(ct&n)===n&&(Qe===4||Qe===3&&(ct&130023424)===ct&&500>Be()-og?Fi(t,0):sg|=n),zt(t,e)}function zT(t,e){e===0&&(t.mode&1?(e=hu,hu<<=1,!(hu&130023424)&&(hu=4194304)):e=1);var n=Pt();t=mr(t,e),t!==null&&(Al(t,e,n),zt(t,n))}function YP(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),zT(t,n)}function XP(t,e){var n=0;switch(t.tag){case 13:var r=t.stateNode,i=t.memoizedState;i!==null&&(n=i.retryLane);break;case 19:r=t.stateNode;break;default:throw Error(U(314))}r!==null&&r.delete(e),zT(t,n)}var WT;WT=function(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps||Ut.current)Vt=!0;else{if(!(t.lanes&n)&&!(e.flags&128))return Vt=!1,VP(t,e,n);Vt=!!(t.flags&131072)}else Vt=!1,Re&&e.flags&1048576&&KE(e,vc,e.index);switch(e.lanes=0,e.tag){case 2:var r=e.type;Hu(t,e),t=e.pendingProps;var i=Ks(e,It.current);Fs(e,n),i=Zm(null,e,r,t,i,n);var s=eg();return e.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,Bt(r)?(s=!0,_c(e)):s=!1,e.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,$m(e),i.updater=Ch,e.stateNode=i,i._reactInternals=e,dp(e,r,t,n),e=mp(null,e,r,!0,s,n)):(e.tag=0,Re&&s&&Bm(e),xt(null,e,i,n),e=e.child),e;case 16:r=e.elementType;e:{switch(Hu(t,e),t=e.pendingProps,i=r._init,r=i(r._payload),e.type=r,i=e.tag=ZP(r),t=vn(r,t),i){case 0:e=pp(null,e,r,t,n);break e;case 1:e=Xv(null,e,r,t,n);break e;case 11:e=Qv(null,e,r,t,n);break e;case 14:e=Yv(null,e,r,vn(r.type,t),n);break e}throw Error(U(306,r,""))}return e;case 0:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:vn(r,i),pp(t,e,r,i,n);case 1:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:vn(r,i),Xv(t,e,r,i,n);case 3:e:{if(ST(e),t===null)throw Error(U(387));r=e.pendingProps,s=e.memoizedState,i=s.element,ZE(t,e),Ec(e,r,null,n);var o=e.memoizedState;if(r=o.element,s.isDehydrated)if(s={element:r,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},e.updateQueue.baseState=s,e.memoizedState=s,e.flags&256){i=Xs(Error(U(423)),e),e=Jv(t,e,r,n,i);break e}else if(r!==i){i=Xs(Error(U(424)),e),e=Jv(t,e,r,n,i);break e}else for(Yt=Kr(e.stateNode.containerInfo.firstChild),Jt=e,Re=!0,An=null,n=XE(e,null,r,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if($s(),r===i){e=gr(t,e,n);break e}xt(t,e,r,n)}e=e.child}return e;case 5:return eT(e),t===null&&up(e),r=e.type,i=e.pendingProps,s=t!==null?t.memoizedProps:null,o=i.children,ip(r,i)?o=null:s!==null&&ip(r,s)&&(e.flags|=32),CT(t,e),xt(t,e,o,n),e.child;case 6:return t===null&&up(e),null;case 13:return RT(t,e,n);case 4:return Qm(e,e.stateNode.containerInfo),r=e.pendingProps,t===null?e.child=Qs(e,null,r,n):xt(t,e,r,n),e.child;case 11:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:vn(r,i),Qv(t,e,r,i,n);case 7:return xt(t,e,e.pendingProps,n),e.child;case 8:return xt(t,e,e.pendingProps.children,n),e.child;case 12:return xt(t,e,e.pendingProps.children,n),e.child;case 10:e:{if(r=e.type._context,i=e.pendingProps,s=e.memoizedProps,o=i.value,Ee(wc,r._currentValue),r._currentValue=o,s!==null)if(bn(s.value,o)){if(s.children===i.children&&!Ut.current){e=gr(t,e,n);break e}}else for(s=e.child,s!==null&&(s.return=e);s!==null;){var a=s.dependencies;if(a!==null){o=s.child;for(var l=a.firstContext;l!==null;){if(l.context===r){if(s.tag===1){l=ur(-1,n&-n),l.tag=2;var c=s.updateQueue;if(c!==null){c=c.shared;var h=c.pending;h===null?l.next=l:(l.next=h.next,h.next=l),c.pending=l}}s.lanes|=n,l=s.alternate,l!==null&&(l.lanes|=n),cp(s.return,n,e),a.lanes|=n;break}l=l.next}}else if(s.tag===10)o=s.type===e.type?null:s.child;else if(s.tag===18){if(o=s.return,o===null)throw Error(U(341));o.lanes|=n,a=o.alternate,a!==null&&(a.lanes|=n),cp(o,n,e),o=s.sibling}else o=s.child;if(o!==null)o.return=s;else for(o=s;o!==null;){if(o===e){o=null;break}if(s=o.sibling,s!==null){s.return=o.return,o=s;break}o=o.return}s=o}xt(t,e,i.children,n),e=e.child}return e;case 9:return i=e.type,r=e.pendingProps.children,Fs(e,n),i=dn(i),r=r(i),e.flags|=1,xt(t,e,r,n),e.child;case 14:return r=e.type,i=vn(r,e.pendingProps),i=vn(r.type,i),Yv(t,e,r,i,n);case 15:return TT(t,e,e.type,e.pendingProps,n);case 17:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:vn(r,i),Hu(t,e),e.tag=1,Bt(r)?(t=!0,_c(e)):t=!1,Fs(e,n),wT(e,r,i),dp(e,r,i,n),mp(null,e,r,!0,t,n);case 19:return kT(t,e,n);case 22:return IT(t,e,n)}throw Error(U(156,e.tag))};function HT(t,e){return _E(t,e)}function JP(t,e,n,r){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function un(t,e,n,r){return new JP(t,e,n,r)}function cg(t){return t=t.prototype,!(!t||!t.isReactComponent)}function ZP(t){if(typeof t=="function")return cg(t)?1:0;if(t!=null){if(t=t.$$typeof,t===xm)return 11;if(t===Nm)return 14}return 2}function Xr(t,e){var n=t.alternate;return n===null?(n=un(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function Ku(t,e,n,r,i,s){var o=2;if(r=t,typeof t=="function")cg(t)&&(o=1);else if(typeof t=="string")o=5;else e:switch(t){case ws:return Vi(n.children,i,s,e);case km:o=8,i|=8;break;case Mf:return t=un(12,n,e,i|2),t.elementType=Mf,t.lanes=s,t;case Ff:return t=un(13,n,e,i),t.elementType=Ff,t.lanes=s,t;case Vf:return t=un(19,n,e,i),t.elementType=Vf,t.lanes=s,t;case eE:return kh(n,i,s,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case JA:o=10;break e;case ZA:o=9;break e;case xm:o=11;break e;case Nm:o=14;break e;case Dr:o=16,r=null;break e}throw Error(U(130,t==null?t:typeof t,""))}return e=un(o,n,e,i),e.elementType=t,e.type=r,e.lanes=s,e}function Vi(t,e,n,r){return t=un(7,t,r,e),t.lanes=n,t}function kh(t,e,n,r){return t=un(22,t,r,e),t.elementType=eE,t.lanes=n,t.stateNode={isHidden:!1},t}function lf(t,e,n){return t=un(6,t,null,e),t.lanes=n,t}function uf(t,e,n){return e=un(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function eb(t,e,n,r,i){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=zd(0),this.expirationTimes=zd(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=zd(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function hg(t,e,n,r,i,s,o,a,l){return t=new eb(t,e,n,a,l),e===1?(e=1,s===!0&&(e|=8)):e=0,s=un(3,null,null,e),t.current=s,s.stateNode=t,s.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},$m(s),t}function tb(t,e,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:vs,key:r==null?null:""+r,children:t,containerInfo:e,implementation:n}}function qT(t){if(!t)return ii;t=t._reactInternals;e:{if(ns(t)!==t||t.tag!==1)throw Error(U(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(Bt(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(U(171))}if(t.tag===1){var n=t.type;if(Bt(n))return qE(t,n,e)}return e}function GT(t,e,n,r,i,s,o,a,l){return t=hg(n,r,!0,t,i,s,o,a,l),t.context=qT(null),n=t.current,r=Pt(),i=Yr(n),s=ur(r,i),s.callback=e??null,$r(n,s,i),t.current.lanes=i,Al(t,i,r),zt(t,r),t}function xh(t,e,n,r){var i=e.current,s=Pt(),o=Yr(i);return n=qT(n),e.context===null?e.context=n:e.pendingContext=n,e=ur(s,o),e.payload={element:t},r=r===void 0?null:r,r!==null&&(e.callback=r),t=$r(i,e,o),t!==null&&(xn(t,i,o,s),Bu(t,i,o)),o}function Nc(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function l0(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function dg(t,e){l0(t,e),(t=t.alternate)&&l0(t,e)}function nb(){return null}var KT=typeof reportError=="function"?reportError:function(t){console.error(t)};function fg(t){this._internalRoot=t}Nh.prototype.render=fg.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(U(409));xh(t,e,null,null)};Nh.prototype.unmount=fg.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;qi(function(){xh(null,t,null,null)}),e[pr]=null}};function Nh(t){this._internalRoot=t}Nh.prototype.unstable_scheduleHydration=function(t){if(t){var e=IE();t={blockedOn:null,target:t,priority:e};for(var n=0;n<Or.length&&e!==0&&e<Or[n].priority;n++);Or.splice(n,0,t),n===0&&SE(t)}};function pg(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function Ph(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function u0(){}function rb(t,e,n,r,i){if(i){if(typeof r=="function"){var s=r;r=function(){var c=Nc(o);s.call(c)}}var o=GT(e,r,t,0,null,!1,!1,"",u0);return t._reactRootContainer=o,t[pr]=o.current,Ua(t.nodeType===8?t.parentNode:t),qi(),o}for(;i=t.lastChild;)t.removeChild(i);if(typeof r=="function"){var a=r;r=function(){var c=Nc(l);a.call(c)}}var l=hg(t,0,!1,null,null,!1,!1,"",u0);return t._reactRootContainer=l,t[pr]=l.current,Ua(t.nodeType===8?t.parentNode:t),qi(function(){xh(e,l,n,r)}),l}function bh(t,e,n,r,i){var s=n._reactRootContainer;if(s){var o=s;if(typeof i=="function"){var a=i;i=function(){var l=Nc(o);a.call(l)}}xh(e,o,t,i)}else o=rb(n,e,t,i,r);return Nc(o)}EE=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=na(e.pendingLanes);n!==0&&(Dm(e,n|1),zt(e,Be()),!(he&6)&&(Js=Be()+500,mi()))}break;case 13:qi(function(){var r=mr(t,1);if(r!==null){var i=Pt();xn(r,t,1,i)}}),dg(t,1)}};Lm=function(t){if(t.tag===13){var e=mr(t,134217728);if(e!==null){var n=Pt();xn(e,t,134217728,n)}dg(t,134217728)}};TE=function(t){if(t.tag===13){var e=Yr(t),n=mr(t,e);if(n!==null){var r=Pt();xn(n,t,e,r)}dg(t,e)}};IE=function(){return _e};CE=function(t,e){var n=_e;try{return _e=t,e()}finally{_e=n}};$f=function(t,e,n){switch(e){case"input":if(Bf(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var r=n[e];if(r!==t&&r.form===t.form){var i=Eh(r);if(!i)throw Error(U(90));nE(r),Bf(r,i)}}}break;case"textarea":iE(t,n);break;case"select":e=n.value,e!=null&&Ds(t,!!n.multiple,e,!1)}};hE=ag;dE=qi;var ib={usingClientEntryPoint:!1,Events:[Tl,Is,Eh,uE,cE,ag]},Qo={findFiberByHostInstance:xi,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},sb={bundleType:Qo.bundleType,version:Qo.version,rendererPackageName:Qo.rendererPackageName,rendererConfig:Qo.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Cr.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=mE(t),t===null?null:t.stateNode},findFiberByHostInstance:Qo.findFiberByHostInstance||nb,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Eu=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Eu.isDisabled&&Eu.supportsFiber)try{yh=Eu.inject(sb),Bn=Eu}catch{}}nn.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=ib;nn.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!pg(e))throw Error(U(200));return tb(t,e,null,n)};nn.createRoot=function(t,e){if(!pg(t))throw Error(U(299));var n=!1,r="",i=KT;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(r=e.identifierPrefix),e.onRecoverableError!==void 0&&(i=e.onRecoverableError)),e=hg(t,1,!1,null,null,n,!1,r,i),t[pr]=e.current,Ua(t.nodeType===8?t.parentNode:t),new fg(e)};nn.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(U(188)):(t=Object.keys(t).join(","),Error(U(268,t)));return t=mE(e),t=t===null?null:t.stateNode,t};nn.flushSync=function(t){return qi(t)};nn.hydrate=function(t,e,n){if(!Ph(e))throw Error(U(200));return bh(null,t,e,!0,n)};nn.hydrateRoot=function(t,e,n){if(!pg(t))throw Error(U(405));var r=n!=null&&n.hydratedSources||null,i=!1,s="",o=KT;if(n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),e=GT(e,null,t,1,n??null,i,!1,s,o),t[pr]=e.current,Ua(t),r)for(t=0;t<r.length;t++)n=r[t],i=n._getVersion,i=i(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,i]:e.mutableSourceEagerHydrationData.push(n,i);return new Nh(e)};nn.render=function(t,e,n){if(!Ph(e))throw Error(U(200));return bh(null,t,e,!1,n)};nn.unmountComponentAtNode=function(t){if(!Ph(t))throw Error(U(40));return t._reactRootContainer?(qi(function(){bh(null,null,t,!1,function(){t._reactRootContainer=null,t[pr]=null})}),!0):!1};nn.unstable_batchedUpdates=ag;nn.unstable_renderSubtreeIntoContainer=function(t,e,n,r){if(!Ph(n))throw Error(U(200));if(t==null||t._reactInternals===void 0)throw Error(U(38));return bh(t,e,n,!1,r)};nn.version="18.3.1-next-f1338f8080-20240426";function $T(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE($T)}catch(t){console.error(t)}}$T(),$A.exports=nn;var ob=$A.exports,Rp={},c0=ob;Rp.createRoot=c0.createRoot,Rp.hydrateRoot=c0.hydrateRoot;var h0={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const QT={NODE_CLIENT:!1,NODE_ADMIN:!1,SDK_VERSION:"${JSCORE_VERSION}"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const B=function(t,e){if(!t)throw _o(e)},_o=function(t){return new Error("Firebase Database ("+QT.SDK_VERSION+") INTERNAL ASSERT FAILED: "+t)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const YT=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let i=t.charCodeAt(r);i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):(i&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(i=65536+((i&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},ab=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const i=t[n++];if(i<128)e[r++]=String.fromCharCode(i);else if(i>191&&i<224){const s=t[n++];e[r++]=String.fromCharCode((i&31)<<6|s&63)}else if(i>239&&i<365){const s=t[n++],o=t[n++],a=t[n++],l=((i&7)<<18|(s&63)<<12|(o&63)<<6|a&63)-65536;e[r++]=String.fromCharCode(55296+(l>>10)),e[r++]=String.fromCharCode(56320+(l&1023))}else{const s=t[n++],o=t[n++];e[r++]=String.fromCharCode((i&15)<<12|(s&63)<<6|o&63)}}return e.join("")},mg={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<t.length;i+=3){const s=t[i],o=i+1<t.length,a=o?t[i+1]:0,l=i+2<t.length,c=l?t[i+2]:0,h=s>>2,f=(s&3)<<4|a>>4;let p=(a&15)<<2|c>>6,_=c&63;l||(_=64,o||(p=64)),r.push(n[h],n[f],n[p],n[_])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(YT(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):ab(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<t.length;){const s=n[t.charAt(i++)],a=i<t.length?n[t.charAt(i)]:0;++i;const c=i<t.length?n[t.charAt(i)]:64;++i;const f=i<t.length?n[t.charAt(i)]:64;if(++i,s==null||a==null||c==null||f==null)throw new lb;const p=s<<2|a>>4;if(r.push(p),c!==64){const _=a<<4&240|c>>2;if(r.push(_),f!==64){const E=c<<6&192|f;r.push(E)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class lb extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const XT=function(t){const e=YT(t);return mg.encodeByteArray(e,!0)},Pc=function(t){return XT(t).replace(/\./g,"")},bc=function(t){try{return mg.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ub(t){return JT(void 0,t)}function JT(t,e){if(!(e instanceof Object))return e;switch(e.constructor){case Date:const n=e;return new Date(n.getTime());case Object:t===void 0&&(t={});break;case Array:t=[];break;default:return e}for(const n in e)!e.hasOwnProperty(n)||!cb(n)||(t[n]=JT(t[n],e[n]));return t}function cb(t){return t!=="__proto__"}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function hb(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const db=()=>hb().__FIREBASE_DEFAULTS__,fb=()=>{if(typeof process>"u"||typeof h0>"u")return;const t=h0.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},pb=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&bc(t[1]);return e&&JSON.parse(e)},Dh=()=>{try{return db()||fb()||pb()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},ZT=t=>{var e,n;return(n=(e=Dh())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},gg=t=>{const e=ZT(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),r]:[e.substring(0,n),r]},eI=()=>{var t;return(t=Dh())===null||t===void 0?void 0:t.config},tI=t=>{var e;return(e=Dh())===null||e===void 0?void 0:e[`_${t}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lh{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _g(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=e||"demo-project",i=t.iat||0,s=t.sub||t.user_id;if(!s)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:i,exp:i+3600,auth_time:i,sub:s,user_id:s,firebase:{sign_in_provider:"custom",identities:{}}},t);return[Pc(JSON.stringify(n)),Pc(JSON.stringify(o)),""].join(".")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ct(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function yg(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Ct())}function mb(){var t;const e=(t=Dh())===null||t===void 0?void 0:t.forceEnvironment;if(e==="node")return!0;if(e==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function gb(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function nI(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function rI(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function _b(){const t=Ct();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function iI(){return QT.NODE_ADMIN===!0}function yb(){return!mb()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function sI(){try{return typeof indexedDB=="object"}catch{return!1}}function oI(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var s;e(((s=i.error)===null||s===void 0?void 0:s.message)||"")}}catch(n){e(n)}})}function vb(){return!(typeof navigator>"u"||!navigator.cookieEnabled)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wb="FirebaseError";class gn extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=wb,Object.setPrototypeOf(this,gn.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,rs.prototype.create)}}class rs{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},i=`${this.service}/${e}`,s=this.errors[e],o=s?Ab(s,r):"Error",a=`${this.serviceName}: ${o} (${i}).`;return new gn(i,a,r)}}function Ab(t,e){return t.replace(Eb,(n,r)=>{const i=e[r];return i!=null?String(i):`<${r}?>`})}const Eb=/\{\$([^}]+)}/g;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Qa(t){return JSON.parse(t)}function nt(t){return JSON.stringify(t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const aI=function(t){let e={},n={},r={},i="";try{const s=t.split(".");e=Qa(bc(s[0])||""),n=Qa(bc(s[1])||""),i=s[2],r=n.d||{},delete n.d}catch{}return{header:e,claims:n,data:r,signature:i}},Tb=function(t){const e=aI(t),n=e.claims;return!!n&&typeof n=="object"&&n.hasOwnProperty("iat")},Ib=function(t){const e=aI(t).claims;return typeof e=="object"&&e.admin===!0};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Sr(t,e){return Object.prototype.hasOwnProperty.call(t,e)}function Zs(t,e){if(Object.prototype.hasOwnProperty.call(t,e))return t[e]}function kp(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function Dc(t,e,n){const r={};for(const i in t)Object.prototype.hasOwnProperty.call(t,i)&&(r[i]=e.call(n,t[i],i,t));return r}function Ya(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const i of n){if(!r.includes(i))return!1;const s=t[i],o=e[i];if(d0(s)&&d0(o)){if(!Ya(s,o))return!1}else if(s!==o)return!1}for(const i of r)if(!n.includes(i))return!1;return!0}function d0(t){return t!==null&&typeof t=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function yo(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(i=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(i))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function ia(t){const e={};return t.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[i,s]=r.split("=");e[decodeURIComponent(i)]=decodeURIComponent(s)}}),e}function sa(t){const e=t.indexOf("?");if(!e)return"";const n=t.indexOf("#",e);return t.substring(e,n>0?n:void 0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cb{constructor(){this.chain_=[],this.buf_=[],this.W_=[],this.pad_=[],this.inbuf_=0,this.total_=0,this.blockSize=512/8,this.pad_[0]=128;for(let e=1;e<this.blockSize;++e)this.pad_[e]=0;this.reset()}reset(){this.chain_[0]=1732584193,this.chain_[1]=4023233417,this.chain_[2]=2562383102,this.chain_[3]=271733878,this.chain_[4]=3285377520,this.inbuf_=0,this.total_=0}compress_(e,n){n||(n=0);const r=this.W_;if(typeof e=="string")for(let f=0;f<16;f++)r[f]=e.charCodeAt(n)<<24|e.charCodeAt(n+1)<<16|e.charCodeAt(n+2)<<8|e.charCodeAt(n+3),n+=4;else for(let f=0;f<16;f++)r[f]=e[n]<<24|e[n+1]<<16|e[n+2]<<8|e[n+3],n+=4;for(let f=16;f<80;f++){const p=r[f-3]^r[f-8]^r[f-14]^r[f-16];r[f]=(p<<1|p>>>31)&4294967295}let i=this.chain_[0],s=this.chain_[1],o=this.chain_[2],a=this.chain_[3],l=this.chain_[4],c,h;for(let f=0;f<80;f++){f<40?f<20?(c=a^s&(o^a),h=1518500249):(c=s^o^a,h=1859775393):f<60?(c=s&o|a&(s|o),h=2400959708):(c=s^o^a,h=3395469782);const p=(i<<5|i>>>27)+c+l+h+r[f]&4294967295;l=a,a=o,o=(s<<30|s>>>2)&4294967295,s=i,i=p}this.chain_[0]=this.chain_[0]+i&4294967295,this.chain_[1]=this.chain_[1]+s&4294967295,this.chain_[2]=this.chain_[2]+o&4294967295,this.chain_[3]=this.chain_[3]+a&4294967295,this.chain_[4]=this.chain_[4]+l&4294967295}update(e,n){if(e==null)return;n===void 0&&(n=e.length);const r=n-this.blockSize;let i=0;const s=this.buf_;let o=this.inbuf_;for(;i<n;){if(o===0)for(;i<=r;)this.compress_(e,i),i+=this.blockSize;if(typeof e=="string"){for(;i<n;)if(s[o]=e.charCodeAt(i),++o,++i,o===this.blockSize){this.compress_(s),o=0;break}}else for(;i<n;)if(s[o]=e[i],++o,++i,o===this.blockSize){this.compress_(s),o=0;break}}this.inbuf_=o,this.total_+=n}digest(){const e=[];let n=this.total_*8;this.inbuf_<56?this.update(this.pad_,56-this.inbuf_):this.update(this.pad_,this.blockSize-(this.inbuf_-56));for(let i=this.blockSize-1;i>=56;i--)this.buf_[i]=n&255,n/=256;this.compress_(this.buf_);let r=0;for(let i=0;i<5;i++)for(let s=24;s>=0;s-=8)e[r]=this.chain_[i]>>s&255,++r;return e}}function Sb(t,e){const n=new Rb(t,e);return n.subscribe.bind(n)}class Rb{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let i;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");kb(e,["next","error","complete"])?i=e:i={next:e,error:n,complete:r},i.next===void 0&&(i.next=cf),i.error===void 0&&(i.error=cf),i.complete===void 0&&(i.complete=cf);const s=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),s}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function kb(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function cf(){}function vg(t,e){return`${t} failed: ${e} argument `}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xb=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let i=t.charCodeAt(r);if(i>=55296&&i<=56319){const s=i-55296;r++,B(r<t.length,"Surrogate pair missing trail surrogate.");const o=t.charCodeAt(r)-56320;i=65536+(s<<10)+o}i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):i<65536?(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},Oh=function(t){let e=0;for(let n=0;n<t.length;n++){const r=t.charCodeAt(n);r<128?e++:r<2048?e+=2:r>=55296&&r<=56319?(e+=4,n++):e+=3}return e};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Nb=1e3,Pb=2,bb=4*60*60*1e3,Db=.5;function f0(t,e=Nb,n=Pb){const r=e*Math.pow(n,t),i=Math.round(Db*r*(Math.random()-.5)*2);return Math.min(bb,r+i)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Fe(t){return t&&t._delegate?t._delegate:t}class tn{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ri="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lb{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new Lh;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:n});i&&r.resolve(i)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),i=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(s){if(i)return null;throw s}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(Mb(e))try{this.getOrInitializeService({instanceIdentifier:Ri})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(n);try{const s=this.getOrInitializeService({instanceIdentifier:i});r.resolve(s)}catch{}}}}clearInstance(e=Ri){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Ri){return this.instances.has(e)}getOptions(e=Ri){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[s,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(s);r===a&&o.resolve(i)}return i}onInit(e,n){var r;const i=this.normalizeInstanceIdentifier(n),s=(r=this.onInitCallbacks.get(i))!==null&&r!==void 0?r:new Set;s.add(e),this.onInitCallbacks.set(i,s);const o=this.instances.get(i);return o&&e(o,i),()=>{s.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(r)for(const i of r)try{i(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:Ob(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=Ri){return this.component?this.component.multipleInstances?e:Ri:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function Ob(t){return t===Ri?void 0:t}function Mb(t){return t.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fb{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new Lb(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var ie;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(ie||(ie={}));const Vb={debug:ie.DEBUG,verbose:ie.VERBOSE,info:ie.INFO,warn:ie.WARN,error:ie.ERROR,silent:ie.SILENT},jb=ie.INFO,Ub={[ie.DEBUG]:"log",[ie.VERBOSE]:"log",[ie.INFO]:"info",[ie.WARN]:"warn",[ie.ERROR]:"error"},Bb=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),i=Ub[e];if(i)console[i](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Cl{constructor(e){this.name=e,this._logLevel=jb,this._logHandler=Bb,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in ie))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?Vb[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,ie.DEBUG,...e),this._logHandler(this,ie.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,ie.VERBOSE,...e),this._logHandler(this,ie.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,ie.INFO,...e),this._logHandler(this,ie.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,ie.WARN,...e),this._logHandler(this,ie.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,ie.ERROR,...e),this._logHandler(this,ie.ERROR,...e)}}const zb=(t,e)=>e.some(n=>t instanceof n);let p0,m0;function Wb(){return p0||(p0=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function Hb(){return m0||(m0=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const lI=new WeakMap,xp=new WeakMap,uI=new WeakMap,hf=new WeakMap,wg=new WeakMap;function qb(t){const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("success",s),t.removeEventListener("error",o)},s=()=>{n(Jr(t.result)),i()},o=()=>{r(t.error),i()};t.addEventListener("success",s),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&lI.set(n,t)}).catch(()=>{}),wg.set(e,t),e}function Gb(t){if(xp.has(t))return;const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("complete",s),t.removeEventListener("error",o),t.removeEventListener("abort",o)},s=()=>{n(),i()},o=()=>{r(t.error||new DOMException("AbortError","AbortError")),i()};t.addEventListener("complete",s),t.addEventListener("error",o),t.addEventListener("abort",o)});xp.set(t,e)}let Np={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return xp.get(t);if(e==="objectStoreNames")return t.objectStoreNames||uI.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return Jr(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function Kb(t){Np=t(Np)}function $b(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(df(this),e,...n);return uI.set(r,e.sort?e.sort():[e]),Jr(r)}:Hb().includes(t)?function(...e){return t.apply(df(this),e),Jr(lI.get(this))}:function(...e){return Jr(t.apply(df(this),e))}}function Qb(t){return typeof t=="function"?$b(t):(t instanceof IDBTransaction&&Gb(t),zb(t,Wb())?new Proxy(t,Np):t)}function Jr(t){if(t instanceof IDBRequest)return qb(t);if(hf.has(t))return hf.get(t);const e=Qb(t);return e!==t&&(hf.set(t,e),wg.set(e,t)),e}const df=t=>wg.get(t);function cI(t,e,{blocked:n,upgrade:r,blocking:i,terminated:s}={}){const o=indexedDB.open(t,e),a=Jr(o);return r&&o.addEventListener("upgradeneeded",l=>{r(Jr(o.result),l.oldVersion,l.newVersion,Jr(o.transaction),l)}),n&&o.addEventListener("blocked",l=>n(l.oldVersion,l.newVersion,l)),a.then(l=>{s&&l.addEventListener("close",()=>s()),i&&l.addEventListener("versionchange",c=>i(c.oldVersion,c.newVersion,c))}).catch(()=>{}),a}const Yb=["get","getKey","getAll","getAllKeys","count"],Xb=["put","add","delete","clear"],ff=new Map;function g0(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(ff.get(e))return ff.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,i=Xb.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(i||Yb.includes(n)))return;const s=async function(o,...a){const l=this.transaction(o,i?"readwrite":"readonly");let c=l.store;return r&&(c=c.index(a.shift())),(await Promise.all([c[n](...a),i&&l.done]))[0]};return ff.set(e,s),s}Kb(t=>({...t,get:(e,n,r)=>g0(e,n)||t.get(e,n,r),has:(e,n)=>!!g0(e,n)||t.has(e,n)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jb{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(Zb(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function Zb(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const Pp="@firebase/app",_0="0.10.17";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _r=new Cl("@firebase/app"),eD="@firebase/app-compat",tD="@firebase/analytics-compat",nD="@firebase/analytics",rD="@firebase/app-check-compat",iD="@firebase/app-check",sD="@firebase/auth",oD="@firebase/auth-compat",aD="@firebase/database",lD="@firebase/data-connect",uD="@firebase/database-compat",cD="@firebase/functions",hD="@firebase/functions-compat",dD="@firebase/installations",fD="@firebase/installations-compat",pD="@firebase/messaging",mD="@firebase/messaging-compat",gD="@firebase/performance",_D="@firebase/performance-compat",yD="@firebase/remote-config",vD="@firebase/remote-config-compat",wD="@firebase/storage",AD="@firebase/storage-compat",ED="@firebase/firestore",TD="@firebase/vertexai",ID="@firebase/firestore-compat",CD="firebase",SD="11.1.0";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bp="[DEFAULT]",RD={[Pp]:"fire-core",[eD]:"fire-core-compat",[nD]:"fire-analytics",[tD]:"fire-analytics-compat",[iD]:"fire-app-check",[rD]:"fire-app-check-compat",[sD]:"fire-auth",[oD]:"fire-auth-compat",[aD]:"fire-rtdb",[lD]:"fire-data-connect",[uD]:"fire-rtdb-compat",[cD]:"fire-fn",[hD]:"fire-fn-compat",[dD]:"fire-iid",[fD]:"fire-iid-compat",[pD]:"fire-fcm",[mD]:"fire-fcm-compat",[gD]:"fire-perf",[_D]:"fire-perf-compat",[yD]:"fire-rc",[vD]:"fire-rc-compat",[wD]:"fire-gcs",[AD]:"fire-gcs-compat",[ED]:"fire-fst",[ID]:"fire-fst-compat",[TD]:"fire-vertex","fire-js":"fire-js",[CD]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Lc=new Map,kD=new Map,Dp=new Map;function y0(t,e){try{t.container.addComponent(e)}catch(n){_r.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function pn(t){const e=t.name;if(Dp.has(e))return _r.debug(`There were multiple attempts to register component ${e}.`),!1;Dp.set(e,t);for(const n of Lc.values())y0(n,t);for(const n of kD.values())y0(n,t);return!0}function Rr(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}function Tn(t){return t.settings!==void 0}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xD={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},Zr=new rs("app","Firebase",xD);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ND{constructor(e,n,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new tn("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Zr.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gi=SD;function hI(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const r=Object.assign({name:bp,automaticDataCollectionEnabled:!1},e),i=r.name;if(typeof i!="string"||!i)throw Zr.create("bad-app-name",{appName:String(i)});if(n||(n=eI()),!n)throw Zr.create("no-options");const s=Lc.get(i);if(s){if(Ya(n,s.options)&&Ya(r,s.config))return s;throw Zr.create("duplicate-app",{appName:i})}const o=new Fb(i);for(const l of Dp.values())o.addComponent(l);const a=new ND(n,r,o);return Lc.set(i,a),a}function Sl(t=bp){const e=Lc.get(t);if(!e&&t===bp&&eI())return hI();if(!e)throw Zr.create("no-app",{appName:t});return e}function Tt(t,e,n){var r;let i=(r=RD[t])!==null&&r!==void 0?r:t;n&&(i+=`-${n}`);const s=i.match(/\s|\//),o=e.match(/\s|\//);if(s||o){const a=[`Unable to register library "${i}" with version "${e}":`];s&&a.push(`library name "${i}" contains illegal characters (whitespace or "/")`),s&&o&&a.push("and"),o&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),_r.warn(a.join(" "));return}pn(new tn(`${i}-version`,()=>({library:i,version:e}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const PD="firebase-heartbeat-database",bD=1,Xa="firebase-heartbeat-store";let pf=null;function dI(){return pf||(pf=cI(PD,bD,{upgrade:(t,e)=>{switch(e){case 0:try{t.createObjectStore(Xa)}catch(n){console.warn(n)}}}}).catch(t=>{throw Zr.create("idb-open",{originalErrorMessage:t.message})})),pf}async function DD(t){try{const n=(await dI()).transaction(Xa),r=await n.objectStore(Xa).get(fI(t));return await n.done,r}catch(e){if(e instanceof gn)_r.warn(e.message);else{const n=Zr.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});_r.warn(n.message)}}}async function v0(t,e){try{const r=(await dI()).transaction(Xa,"readwrite");await r.objectStore(Xa).put(e,fI(t)),await r.done}catch(n){if(n instanceof gn)_r.warn(n.message);else{const r=Zr.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});_r.warn(r.message)}}}function fI(t){return`${t.name}!${t.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const LD=1024,OD=30*24*60*60*1e3;class MD{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new VD(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var e,n;try{const i=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),s=w0();return((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)===null||n===void 0?void 0:n.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===s||this._heartbeatsCache.heartbeats.some(o=>o.date===s)?void 0:(this._heartbeatsCache.heartbeats.push({date:s,agent:i}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(o=>{const a=new Date(o.date).valueOf();return Date.now()-a<=OD}),this._storage.overwrite(this._heartbeatsCache))}catch(r){_r.warn(r)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=w0(),{heartbeatsToSend:r,unsentEntries:i}=FD(this._heartbeatsCache.heartbeats),s=Pc(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=n,i.length>0?(this._heartbeatsCache.heartbeats=i,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),s}catch(n){return _r.warn(n),""}}}function w0(){return new Date().toISOString().substring(0,10)}function FD(t,e=LD){const n=[];let r=t.slice();for(const i of t){const s=n.find(o=>o.agent===i.agent);if(s){if(s.dates.push(i.date),A0(n)>e){s.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),A0(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class VD{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return sI()?oI().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await DD(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return v0(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return v0(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...e.heartbeats]})}else return}}function A0(t){return Pc(JSON.stringify({version:2,heartbeats:t})).length}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function jD(t){pn(new tn("platform-logger",e=>new Jb(e),"PRIVATE")),pn(new tn("heartbeat",e=>new MD(e),"PRIVATE")),Tt(Pp,_0,t),Tt(Pp,_0,"esm2017"),Tt("fire-js","")}jD("");function Ag(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(t);i<r.length;i++)e.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(t,r[i])&&(n[r[i]]=t[r[i]]);return n}function pI(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const UD=pI,mI=new rs("auth","Firebase",pI());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Oc=new Cl("@firebase/auth");function BD(t,...e){Oc.logLevel<=ie.WARN&&Oc.warn(`Auth (${gi}): ${t}`,...e)}function $u(t,...e){Oc.logLevel<=ie.ERROR&&Oc.error(`Auth (${gi}): ${t}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function mn(t,...e){throw Tg(t,...e)}function Nn(t,...e){return Tg(t,...e)}function Eg(t,e,n){const r=Object.assign(Object.assign({},UD()),{[e]:n});return new rs("auth","Firebase",r).create(e,{appName:t.name})}function cr(t){return Eg(t,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function zD(t,e,n){const r=n;if(!(e instanceof r))throw r.name!==e.constructor.name&&mn(t,"argument-error"),Eg(t,"argument-error",`Type of ${e.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function Tg(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return mI.create(t,...e)}function Y(t,e,...n){if(!t)throw Tg(e,...n)}function ir(t){const e="INTERNAL ASSERTION FAILED: "+t;throw $u(e),new Error(e)}function yr(t,e){t||ir(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Lp(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function WD(){return E0()==="http:"||E0()==="https:"}function E0(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function HD(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(WD()||nI()||"connection"in navigator)?navigator.onLine:!0}function qD(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rl{constructor(e,n){this.shortDelay=e,this.longDelay=n,yr(n>e,"Short delay should be less than long delay!"),this.isMobile=yg()||rI()}get(){return HD()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ig(t,e){yr(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gI{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;ir("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;ir("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;ir("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const GD={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const KD=new Rl(3e4,6e4);function _i(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function yi(t,e,n,r,i={}){return _I(t,i,async()=>{let s={},o={};r&&(e==="GET"?o=r:s={body:JSON.stringify(r)});const a=yo(Object.assign({key:t.config.apiKey},o)).slice(1),l=await t._getAdditionalHeaders();l["Content-Type"]="application/json",t.languageCode&&(l["X-Firebase-Locale"]=t.languageCode);const c=Object.assign({method:e,headers:l},s);return gb()||(c.referrerPolicy="no-referrer"),gI.fetch()(yI(t,t.config.apiHost,n,a),c)})}async function _I(t,e,n){t._canInitEmulator=!1;const r=Object.assign(Object.assign({},GD),e);try{const i=new QD(t),s=await Promise.race([n(),i.promise]);i.clearNetworkTimeout();const o=await s.json();if("needConfirmation"in o)throw Tu(t,"account-exists-with-different-credential",o);if(s.ok&&!("errorMessage"in o))return o;{const a=s.ok?o.errorMessage:o.error.message,[l,c]=a.split(" : ");if(l==="FEDERATED_USER_ID_ALREADY_LINKED")throw Tu(t,"credential-already-in-use",o);if(l==="EMAIL_EXISTS")throw Tu(t,"email-already-in-use",o);if(l==="USER_DISABLED")throw Tu(t,"user-disabled",o);const h=r[l]||l.toLowerCase().replace(/[_\s]+/g,"-");if(c)throw Eg(t,h,c);mn(t,h)}}catch(i){if(i instanceof gn)throw i;mn(t,"network-request-failed",{message:String(i)})}}async function kl(t,e,n,r,i={}){const s=await yi(t,e,n,r,i);return"mfaPendingCredential"in s&&mn(t,"multi-factor-auth-required",{_serverResponse:s}),s}function yI(t,e,n,r){const i=`${e}${n}?${r}`;return t.config.emulator?Ig(t.config,i):`${t.config.apiScheme}://${i}`}function $D(t){switch(t){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class QD{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(Nn(this.auth,"network-request-failed")),KD.get())})}}function Tu(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const i=Nn(t,e,r);return i.customData._tokenResponse=n,i}function T0(t){return t!==void 0&&t.enterprise!==void 0}class YD{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const n of this.recaptchaEnforcementState)if(n.provider&&n.provider===e)return $D(n.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}isAnyProviderEnabled(){return this.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")||this.isProviderEnabled("PHONE_PROVIDER")}}async function XD(t,e){return yi(t,"GET","/v2/recaptchaConfig",_i(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function JD(t,e){return yi(t,"POST","/v1/accounts:delete",e)}async function vI(t,e){return yi(t,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function va(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function ZD(t,e=!1){const n=Fe(t),r=await n.getIdToken(e),i=Cg(r);Y(i&&i.exp&&i.auth_time&&i.iat,n.auth,"internal-error");const s=typeof i.firebase=="object"?i.firebase:void 0,o=s==null?void 0:s.sign_in_provider;return{claims:i,token:r,authTime:va(mf(i.auth_time)),issuedAtTime:va(mf(i.iat)),expirationTime:va(mf(i.exp)),signInProvider:o||null,signInSecondFactor:(s==null?void 0:s.sign_in_second_factor)||null}}function mf(t){return Number(t)*1e3}function Cg(t){const[e,n,r]=t.split(".");if(e===void 0||n===void 0||r===void 0)return $u("JWT malformed, contained fewer than 3 sections"),null;try{const i=bc(n);return i?JSON.parse(i):($u("Failed to decode base64 JWT payload"),null)}catch(i){return $u("Caught error parsing JWT payload as JSON",i==null?void 0:i.toString()),null}}function I0(t){const e=Cg(t);return Y(e,"internal-error"),Y(typeof e.exp<"u","internal-error"),Y(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ja(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof gn&&e2(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function e2({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class t2{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const i=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,i)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Op{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=va(this.lastLoginAt),this.creationTime=va(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Mc(t){var e;const n=t.auth,r=await t.getIdToken(),i=await Ja(t,vI(n,{idToken:r}));Y(i==null?void 0:i.users.length,n,"internal-error");const s=i.users[0];t._notifyReloadListener(s);const o=!((e=s.providerUserInfo)===null||e===void 0)&&e.length?wI(s.providerUserInfo):[],a=r2(t.providerData,o),l=t.isAnonymous,c=!(t.email&&s.passwordHash)&&!(a!=null&&a.length),h=l?c:!1,f={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:a,metadata:new Op(s.createdAt,s.lastLoginAt),isAnonymous:h};Object.assign(t,f)}async function n2(t){const e=Fe(t);await Mc(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function r2(t,e){return[...t.filter(r=>!e.some(i=>i.providerId===r.providerId)),...e]}function wI(t){return t.map(e=>{var{providerId:n}=e,r=Ag(e,["providerId"]);return{providerId:n,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function i2(t,e){const n=await _I(t,{},async()=>{const r=yo({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:i,apiKey:s}=t.config,o=yI(t,i,"/v1/token",`key=${s}`),a=await t._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",gI.fetch()(o,{method:"POST",headers:a,body:r})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function s2(t,e){return yi(t,"POST","/v2/accounts:revokeToken",_i(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class js{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){Y(e.idToken,"internal-error"),Y(typeof e.idToken<"u","internal-error"),Y(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):I0(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}updateFromIdToken(e){Y(e.length!==0,"internal-error");const n=I0(e);this.updateTokensAndExpiration(e,null,n)}async getToken(e,n=!1){return!n&&this.accessToken&&!this.isExpired?this.accessToken:(Y(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:i,expiresIn:s}=await i2(e,n);this.updateTokensAndExpiration(r,i,Number(s))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:i,expirationTime:s}=n,o=new js;return r&&(Y(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),i&&(Y(typeof i=="string","internal-error",{appName:e}),o.accessToken=i),s&&(Y(typeof s=="number","internal-error",{appName:e}),o.expirationTime=s),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new js,this.toJSON())}_performRefresh(){return ir("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function br(t,e){Y(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class sr{constructor(e){var{uid:n,auth:r,stsTokenManager:i}=e,s=Ag(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new t2(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=r,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=s.displayName||null,this.email=s.email||null,this.emailVerified=s.emailVerified||!1,this.phoneNumber=s.phoneNumber||null,this.photoURL=s.photoURL||null,this.isAnonymous=s.isAnonymous||!1,this.tenantId=s.tenantId||null,this.providerData=s.providerData?[...s.providerData]:[],this.metadata=new Op(s.createdAt||void 0,s.lastLoginAt||void 0)}async getIdToken(e){const n=await Ja(this,this.stsTokenManager.getToken(this.auth,e));return Y(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return ZD(this,e)}reload(){return n2(this)}_assign(e){this!==e&&(Y(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new sr(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(e){Y(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await Mc(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(Tn(this.auth.app))return Promise.reject(cr(this.auth));const e=await this.getIdToken();return await Ja(this,JD(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var r,i,s,o,a,l,c,h;const f=(r=n.displayName)!==null&&r!==void 0?r:void 0,p=(i=n.email)!==null&&i!==void 0?i:void 0,_=(s=n.phoneNumber)!==null&&s!==void 0?s:void 0,E=(o=n.photoURL)!==null&&o!==void 0?o:void 0,S=(a=n.tenantId)!==null&&a!==void 0?a:void 0,k=(l=n._redirectEventId)!==null&&l!==void 0?l:void 0,A=(c=n.createdAt)!==null&&c!==void 0?c:void 0,v=(h=n.lastLoginAt)!==null&&h!==void 0?h:void 0,{uid:T,emailVerified:b,isAnonymous:M,providerData:V,stsTokenManager:C}=n;Y(T&&C,e,"internal-error");const y=js.fromJSON(this.name,C);Y(typeof T=="string",e,"internal-error"),br(f,e.name),br(p,e.name),Y(typeof b=="boolean",e,"internal-error"),Y(typeof M=="boolean",e,"internal-error"),br(_,e.name),br(E,e.name),br(S,e.name),br(k,e.name),br(A,e.name),br(v,e.name);const I=new sr({uid:T,auth:e,email:p,emailVerified:b,displayName:f,isAnonymous:M,photoURL:E,phoneNumber:_,tenantId:S,stsTokenManager:y,createdAt:A,lastLoginAt:v});return V&&Array.isArray(V)&&(I.providerData=V.map(R=>Object.assign({},R))),k&&(I._redirectEventId=k),I}static async _fromIdTokenResponse(e,n,r=!1){const i=new js;i.updateFromServerResponse(n);const s=new sr({uid:n.localId,auth:e,stsTokenManager:i,isAnonymous:r});return await Mc(s),s}static async _fromGetAccountInfoResponse(e,n,r){const i=n.users[0];Y(i.localId!==void 0,"internal-error");const s=i.providerUserInfo!==void 0?wI(i.providerUserInfo):[],o=!(i.email&&i.passwordHash)&&!(s!=null&&s.length),a=new js;a.updateFromIdToken(r);const l=new sr({uid:i.localId,auth:e,stsTokenManager:a,isAnonymous:o}),c={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:s,metadata:new Op(i.createdAt,i.lastLoginAt),isAnonymous:!(i.email&&i.passwordHash)&&!(s!=null&&s.length)};return Object.assign(l,c),l}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const C0=new Map;function or(t){yr(t instanceof Function,"Expected a class definition");let e=C0.get(t);return e?(yr(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,C0.set(t,e),e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class AI{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}AI.type="NONE";const S0=AI;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Qu(t,e,n){return`firebase:${t}:${e}:${n}`}class Us{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:i,name:s}=this.auth;this.fullUserKey=Qu(this.userKey,i.apiKey,s),this.fullPersistenceKey=Qu("persistence",i.apiKey,s),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?sr._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new Us(or(S0),e,r);const i=(await Promise.all(n.map(async c=>{if(await c._isAvailable())return c}))).filter(c=>c);let s=i[0]||or(S0);const o=Qu(r,e.config.apiKey,e.name);let a=null;for(const c of n)try{const h=await c._get(o);if(h){const f=sr._fromJSON(e,h);c!==s&&(a=f),s=c;break}}catch{}const l=i.filter(c=>c._shouldAllowMigration);return!s._shouldAllowMigration||!l.length?new Us(s,e,r):(s=l[0],a&&await s._set(o,a.toJSON()),await Promise.all(n.map(async c=>{if(c!==s)try{await c._remove(o)}catch{}})),new Us(s,e,r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function R0(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(CI(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(EI(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(RI(e))return"Blackberry";if(kI(e))return"Webos";if(TI(e))return"Safari";if((e.includes("chrome/")||II(e))&&!e.includes("edge/"))return"Chrome";if(SI(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function EI(t=Ct()){return/firefox\//i.test(t)}function TI(t=Ct()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function II(t=Ct()){return/crios\//i.test(t)}function CI(t=Ct()){return/iemobile/i.test(t)}function SI(t=Ct()){return/android/i.test(t)}function RI(t=Ct()){return/blackberry/i.test(t)}function kI(t=Ct()){return/webos/i.test(t)}function Sg(t=Ct()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function o2(t=Ct()){var e;return Sg(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function a2(){return _b()&&document.documentMode===10}function xI(t=Ct()){return Sg(t)||SI(t)||kI(t)||RI(t)||/windows phone/i.test(t)||CI(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function NI(t,e=[]){let n;switch(t){case"Browser":n=R0(Ct());break;case"Worker":n=`${R0(Ct())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${gi}/${r}`}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class l2{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const r=s=>new Promise((o,a)=>{try{const l=e(s);o(l)}catch(l){a(l)}});r.onAbort=n,this.queue.push(r);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const r of this.queue)await r(e),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const i of n)try{i()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function u2(t,e={}){return yi(t,"GET","/v2/passwordPolicy",_i(t,e))}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const c2=6;class h2{constructor(e){var n,r,i,s;const o=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(n=o.minPasswordLength)!==null&&n!==void 0?n:c2,o.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=o.maxPasswordLength),o.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=o.containsLowercaseCharacter),o.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=o.containsUppercaseCharacter),o.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=o.containsNumericCharacter),o.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=o.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(i=(r=e.allowedNonAlphanumericCharacters)===null||r===void 0?void 0:r.join(""))!==null&&i!==void 0?i:"",this.forceUpgradeOnSignin=(s=e.forceUpgradeOnSignin)!==null&&s!==void 0?s:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var n,r,i,s,o,a;const l={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,l),this.validatePasswordCharacterOptions(e,l),l.isValid&&(l.isValid=(n=l.meetsMinPasswordLength)!==null&&n!==void 0?n:!0),l.isValid&&(l.isValid=(r=l.meetsMaxPasswordLength)!==null&&r!==void 0?r:!0),l.isValid&&(l.isValid=(i=l.containsLowercaseLetter)!==null&&i!==void 0?i:!0),l.isValid&&(l.isValid=(s=l.containsUppercaseLetter)!==null&&s!==void 0?s:!0),l.isValid&&(l.isValid=(o=l.containsNumericCharacter)!==null&&o!==void 0?o:!0),l.isValid&&(l.isValid=(a=l.containsNonAlphanumericCharacter)!==null&&a!==void 0?a:!0),l}validatePasswordLengthOptions(e,n){const r=this.customStrengthOptions.minPasswordLength,i=this.customStrengthOptions.maxPasswordLength;r&&(n.meetsMinPasswordLength=e.length>=r),i&&(n.meetsMaxPasswordLength=e.length<=i)}validatePasswordCharacterOptions(e,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let r;for(let i=0;i<e.length;i++)r=e.charAt(i),this.updatePasswordCharacterOptionsStatuses(n,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,n,r,i,s){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=i)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class d2{constructor(e,n,r,i){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=r,this.config=i,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new k0(this),this.idTokenSubscription=new k0(this),this.beforeStateQueue=new l2(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=mI,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=i.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=or(n)),this._initializationPromise=this.queue(async()=>{var r,i;if(!this._deleted&&(this.persistenceManager=await Us.create(this,e),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((i=this.currentUser)===null||i===void 0?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const n=await vI(this,{idToken:e}),r=await sr._fromGetAccountInfoResponse(this,n,e);await this.directlySetCurrentUser(r)}catch(n){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",n),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var n;if(Tn(this.app)){const o=this.app.settings.authIdToken;return o?new Promise(a=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(o).then(a,a))}):this.directlySetCurrentUser(null)}const r=await this.assertedPersistence.getCurrentUser();let i=r,s=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,a=i==null?void 0:i._redirectEventId,l=await this.tryRedirectSignIn(e);(!o||o===a)&&(l!=null&&l.user)&&(i=l.user,s=!0)}if(!i)return this.directlySetCurrentUser(null);if(!i._redirectEventId){if(s)try{await this.beforeStateQueue.runMiddleware(i)}catch(o){i=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return i?this.reloadAndSetCurrentUserOrClear(i):this.directlySetCurrentUser(null)}return Y(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId?this.directlySetCurrentUser(i):this.reloadAndSetCurrentUserOrClear(i)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await Mc(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=qD()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(Tn(this.app))return Promise.reject(cr(this));const n=e?Fe(e):null;return n&&Y(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&Y(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return Tn(this.app)?Promise.reject(cr(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return Tn(this.app)?Promise.reject(cr(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(or(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await u2(this),n=new h2(e);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new rs("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}authStateReady(){return new Promise((e,n)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},n)}})}async revokeAccessToken(e){if(this.currentUser){const n=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:n};this.tenantId!=null&&(r.tenantId=this.tenantId),await s2(this,r)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&or(e)||this._popupRedirectResolver;Y(n,this,"argument-error"),this.redirectPersistenceManager=await Us.create(this,[or(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,i){if(this._deleted)return()=>{};const s=typeof n=="function"?n:n.next.bind(n);let o=!1;const a=this._isInitialized?Promise.resolve():this._initializationPromise;if(Y(a,this,"internal-error"),a.then(()=>{o||s(this.currentUser)}),typeof n=="function"){const l=e.addObserver(n,r,i);return()=>{o=!0,l()}}else{const l=e.addObserver(n);return()=>{o=!0,l()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return Y(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=NI(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={"X-Client-Version":this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());r&&(n["X-Firebase-Client"]=r);const i=await this._getAppCheckToken();return i&&(n["X-Firebase-AppCheck"]=i),n}async _getAppCheckToken(){var e;const n=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return n!=null&&n.error&&BD(`Error while retrieving App Check token: ${n.error}`),n==null?void 0:n.token}}function vi(t){return Fe(t)}class k0{constructor(e){this.auth=e,this.observer=null,this.addObserver=Sb(n=>this.observer=n)}get next(){return Y(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Mh={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function f2(t){Mh=t}function PI(t){return Mh.loadJS(t)}function p2(){return Mh.recaptchaEnterpriseScript}function m2(){return Mh.gapiScript}function g2(t){return`__${t}${Math.floor(Math.random()*1e6)}`}class _2{constructor(){this.enterprise=new y2}ready(e){e()}execute(e,n){return Promise.resolve("token")}render(e,n){return""}}class y2{ready(e){e()}execute(e,n){return Promise.resolve("token")}render(e,n){return""}}const v2="recaptcha-enterprise",bI="NO_RECAPTCHA";class w2{constructor(e){this.type=v2,this.auth=vi(e)}async verify(e="verify",n=!1){async function r(s){if(!n){if(s.tenantId==null&&s._agentRecaptchaConfig!=null)return s._agentRecaptchaConfig.siteKey;if(s.tenantId!=null&&s._tenantRecaptchaConfigs[s.tenantId]!==void 0)return s._tenantRecaptchaConfigs[s.tenantId].siteKey}return new Promise(async(o,a)=>{XD(s,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(l=>{if(l.recaptchaKey===void 0)a(new Error("recaptcha Enterprise site key undefined"));else{const c=new YD(l);return s.tenantId==null?s._agentRecaptchaConfig=c:s._tenantRecaptchaConfigs[s.tenantId]=c,o(c.siteKey)}}).catch(l=>{a(l)})})}function i(s,o,a){const l=window.grecaptcha;T0(l)?l.enterprise.ready(()=>{l.enterprise.execute(s,{action:e}).then(c=>{o(c)}).catch(()=>{o(bI)})}):a(Error("No reCAPTCHA enterprise script loaded."))}return this.auth.settings.appVerificationDisabledForTesting?new _2().execute("siteKey",{action:"verify"}):new Promise((s,o)=>{r(this.auth).then(a=>{if(!n&&T0(window.grecaptcha))i(a,s,o);else{if(typeof window>"u"){o(new Error("RecaptchaVerifier is only supported in browser"));return}let l=p2();l.length!==0&&(l+=a),PI(l).then(()=>{i(a,s,o)}).catch(c=>{o(c)})}}).catch(a=>{o(a)})})}}async function x0(t,e,n,r=!1,i=!1){const s=new w2(t);let o;if(i)o=bI;else try{o=await s.verify(n)}catch{o=await s.verify(n,!0)}const a=Object.assign({},e);if(n==="mfaSmsEnrollment"||n==="mfaSmsSignIn"){if("phoneEnrollmentInfo"in a){const l=a.phoneEnrollmentInfo.phoneNumber,c=a.phoneEnrollmentInfo.recaptchaToken;Object.assign(a,{phoneEnrollmentInfo:{phoneNumber:l,recaptchaToken:c,captchaResponse:o,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}else if("phoneSignInInfo"in a){const l=a.phoneSignInInfo.recaptchaToken;Object.assign(a,{phoneSignInInfo:{recaptchaToken:l,captchaResponse:o,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}return a}return r?Object.assign(a,{captchaResp:o}):Object.assign(a,{captchaResponse:o}),Object.assign(a,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(a,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),a}async function Mp(t,e,n,r,i){var s;if(!((s=t._getRecaptchaConfig())===null||s===void 0)&&s.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const o=await x0(t,e,n,n==="getOobCode");return r(t,o)}else return r(t,e).catch(async o=>{if(o.code==="auth/missing-recaptcha-token"){console.log(`${n} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const a=await x0(t,e,n,n==="getOobCode");return r(t,a)}else return Promise.reject(o)})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function A2(t,e){const n=Rr(t,"auth");if(n.isInitialized()){const i=n.getImmediate(),s=n.getOptions();if(Ya(s,e??{}))return i;mn(i,"already-initialized")}return n.initialize({options:e})}function E2(t,e){const n=(e==null?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map(or);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function T2(t,e,n){const r=vi(t);Y(r._canInitEmulator,r,"emulator-config-failed"),Y(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const i=!1,s=DI(e),{host:o,port:a}=I2(e),l=a===null?"":`:${a}`;r.config.emulator={url:`${s}//${o}${l}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:o,port:a,protocol:s.replace(":",""),options:Object.freeze({disableWarnings:i})}),C2()}function DI(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function I2(t){const e=DI(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(r);if(i){const s=i[1];return{host:s,port:N0(r.substr(s.length+1))}}else{const[s,o]=r.split(":");return{host:s,port:N0(o)}}}function N0(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function C2(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rg{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return ir("not implemented")}_getIdTokenResponse(e){return ir("not implemented")}_linkToIdToken(e,n){return ir("not implemented")}_getReauthenticationResolver(e){return ir("not implemented")}}async function S2(t,e){return yi(t,"POST","/v1/accounts:signUp",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function R2(t,e){return kl(t,"POST","/v1/accounts:signInWithPassword",_i(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function k2(t,e){return kl(t,"POST","/v1/accounts:signInWithEmailLink",_i(t,e))}async function x2(t,e){return kl(t,"POST","/v1/accounts:signInWithEmailLink",_i(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Za extends Rg{constructor(e,n,r,i=null){super("password",r),this._email=e,this._password=n,this._tenantId=i}static _fromEmailAndPassword(e,n){return new Za(e,n,"password")}static _fromEmailAndCode(e,n,r=null){return new Za(e,n,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;if(n!=null&&n.email&&(n!=null&&n.password)){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const n={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Mp(e,n,"signInWithPassword",R2);case"emailLink":return k2(e,{email:this._email,oobCode:this._password});default:mn(e,"internal-error")}}async _linkToIdToken(e,n){switch(this.signInMethod){case"password":const r={idToken:n,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Mp(e,r,"signUpPassword",S2);case"emailLink":return x2(e,{idToken:n,email:this._email,oobCode:this._password});default:mn(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Bs(t,e){return kl(t,"POST","/v1/accounts:signInWithIdp",_i(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const N2="http://localhost";class Gi extends Rg{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new Gi(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):mn("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:i}=n,s=Ag(n,["providerId","signInMethod"]);if(!r||!i)return null;const o=new Gi(r,i);return o.idToken=s.idToken||void 0,o.accessToken=s.accessToken||void 0,o.secret=s.secret,o.nonce=s.nonce,o.pendingToken=s.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return Bs(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,Bs(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,Bs(e,n)}buildRequest(){const e={requestUri:N2,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=yo(n)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function P2(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function b2(t){const e=ia(sa(t)).link,n=e?ia(sa(e)).deep_link_id:null,r=ia(sa(t)).deep_link_id;return(r?ia(sa(r)).link:null)||r||n||e||t}class kg{constructor(e){var n,r,i,s,o,a;const l=ia(sa(e)),c=(n=l.apiKey)!==null&&n!==void 0?n:null,h=(r=l.oobCode)!==null&&r!==void 0?r:null,f=P2((i=l.mode)!==null&&i!==void 0?i:null);Y(c&&h&&f,"argument-error"),this.apiKey=c,this.operation=f,this.code=h,this.continueUrl=(s=l.continueUrl)!==null&&s!==void 0?s:null,this.languageCode=(o=l.languageCode)!==null&&o!==void 0?o:null,this.tenantId=(a=l.tenantId)!==null&&a!==void 0?a:null}static parseLink(e){const n=b2(e);try{return new kg(n)}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vo{constructor(){this.providerId=vo.PROVIDER_ID}static credential(e,n){return Za._fromEmailAndPassword(e,n)}static credentialWithLink(e,n){const r=kg.parseLink(n);return Y(r,"argument-error"),Za._fromEmailAndCode(e,r.code,r.tenantId)}}vo.PROVIDER_ID="password";vo.EMAIL_PASSWORD_SIGN_IN_METHOD="password";vo.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xg{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xl extends xg{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fr extends xl{constructor(){super("facebook.com")}static credential(e){return Gi._fromParams({providerId:Fr.PROVIDER_ID,signInMethod:Fr.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Fr.credentialFromTaggedObject(e)}static credentialFromError(e){return Fr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Fr.credential(e.oauthAccessToken)}catch{return null}}}Fr.FACEBOOK_SIGN_IN_METHOD="facebook.com";Fr.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tr extends xl{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return Gi._fromParams({providerId:tr.PROVIDER_ID,signInMethod:tr.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return tr.credentialFromTaggedObject(e)}static credentialFromError(e){return tr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r}=e;if(!n&&!r)return null;try{return tr.credential(n,r)}catch{return null}}}tr.GOOGLE_SIGN_IN_METHOD="google.com";tr.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vr extends xl{constructor(){super("github.com")}static credential(e){return Gi._fromParams({providerId:Vr.PROVIDER_ID,signInMethod:Vr.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Vr.credentialFromTaggedObject(e)}static credentialFromError(e){return Vr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Vr.credential(e.oauthAccessToken)}catch{return null}}}Vr.GITHUB_SIGN_IN_METHOD="github.com";Vr.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jr extends xl{constructor(){super("twitter.com")}static credential(e,n){return Gi._fromParams({providerId:jr.PROVIDER_ID,signInMethod:jr.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return jr.credentialFromTaggedObject(e)}static credentialFromError(e){return jr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=e;if(!n||!r)return null;try{return jr.credential(n,r)}catch{return null}}}jr.TWITTER_SIGN_IN_METHOD="twitter.com";jr.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function D2(t,e){return kl(t,"POST","/v1/accounts:signUp",_i(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ki{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,i=!1){const s=await sr._fromIdTokenResponse(e,r,i),o=P0(r);return new Ki({user:s,providerId:o,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const i=P0(r);return new Ki({user:e,providerId:i,_tokenResponse:r,operationType:n})}}function P0(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fc extends gn{constructor(e,n,r,i){var s;super(n.code,n.message),this.operationType=r,this.user=i,Object.setPrototypeOf(this,Fc.prototype),this.customData={appName:e.name,tenantId:(s=e.tenantId)!==null&&s!==void 0?s:void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,i){return new Fc(e,n,r,i)}}function LI(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(s=>{throw s.code==="auth/multi-factor-auth-required"?Fc._fromErrorAndOperation(t,s,e,r):s})}async function L2(t,e,n=!1){const r=await Ja(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return Ki._forOperation(t,"link",r)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function O2(t,e,n=!1){const{auth:r}=t;if(Tn(r.app))return Promise.reject(cr(r));const i="reauthenticate";try{const s=await Ja(t,LI(r,i,e,t),n);Y(s.idToken,r,"internal-error");const o=Cg(s.idToken);Y(o,r,"internal-error");const{sub:a}=o;return Y(t.uid===a,r,"user-mismatch"),Ki._forOperation(t,i,s)}catch(s){throw(s==null?void 0:s.code)==="auth/user-not-found"&&mn(r,"user-mismatch"),s}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function OI(t,e,n=!1){if(Tn(t.app))return Promise.reject(cr(t));const r="signIn",i=await LI(t,r,e),s=await Ki._fromIdTokenResponse(t,r,i);return n||await t._updateCurrentUser(s.user),s}async function M2(t,e){return OI(vi(t),e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function MI(t){const e=vi(t);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}async function F2(t,e,n){if(Tn(t.app))return Promise.reject(cr(t));const r=vi(t),o=await Mp(r,{returnSecureToken:!0,email:e,password:n,clientType:"CLIENT_TYPE_WEB"},"signUpPassword",D2).catch(l=>{throw l.code==="auth/password-does-not-meet-requirements"&&MI(t),l}),a=await Ki._fromIdTokenResponse(r,"signIn",o);return await r._updateCurrentUser(a.user),a}function V2(t,e,n){return Tn(t.app)?Promise.reject(cr(t)):M2(Fe(t),vo.credential(e,n)).catch(async r=>{throw r.code==="auth/password-does-not-meet-requirements"&&MI(t),r})}function j2(t,e,n,r){return Fe(t).onIdTokenChanged(e,n,r)}function U2(t,e,n){return Fe(t).beforeAuthStateChanged(e,n)}function Ng(t,e,n,r){return Fe(t).onAuthStateChanged(e,n,r)}function FI(t){return Fe(t).signOut()}const Vc="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class VI{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(Vc,"1"),this.storage.removeItem(Vc),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const B2=1e3,z2=10;class jI extends VI{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=xI(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),i=this.localCache[n];r!==i&&e(n,i,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,a,l)=>{this.notifyListeners(o,l)});return}const r=e.key;n?this.detachListener():this.stopPolling();const i=()=>{const o=this.storage.getItem(r);!n&&this.localCache[r]===o||this.notifyListeners(r,o)},s=this.storage.getItem(r);a2()&&s!==e.newValue&&e.newValue!==e.oldValue?setTimeout(i,z2):i()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},B2)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}jI.type="LOCAL";const W2=jI;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class UI extends VI{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}UI.type="SESSION";const BI=UI;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function H2(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fh{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(i=>i.isListeningto(e));if(n)return n;const r=new Fh(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:i,data:s}=n.data,o=this.handlersMap[i];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:i});const a=Array.from(o).map(async c=>c(n.origin,s)),l=await H2(a);n.ports[0].postMessage({status:"done",eventId:r,eventType:i,response:l})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Fh.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Pg(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(Math.random()*10);return t+n}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class q2{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const i=typeof MessageChannel<"u"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let s,o;return new Promise((a,l)=>{const c=Pg("",20);i.port1.start();const h=setTimeout(()=>{l(new Error("unsupported_event"))},r);o={messageChannel:i,onMessage(f){const p=f;if(p.data.eventId===c)switch(p.data.status){case"ack":clearTimeout(h),s=setTimeout(()=>{l(new Error("timeout"))},3e3);break;case"done":clearTimeout(s),a(p.data.response);break;default:clearTimeout(h),clearTimeout(s),l(new Error("invalid_response"));break}}},this.handlers.add(o),i.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:c,data:n},[i.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Wn(){return window}function G2(t){Wn().location.href=t}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function zI(){return typeof Wn().WorkerGlobalScope<"u"&&typeof Wn().importScripts=="function"}async function K2(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function $2(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function Q2(){return zI()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const WI="firebaseLocalStorageDb",Y2=1,jc="firebaseLocalStorage",HI="fbase_key";class Nl{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function Vh(t,e){return t.transaction([jc],e?"readwrite":"readonly").objectStore(jc)}function X2(){const t=indexedDB.deleteDatabase(WI);return new Nl(t).toPromise()}function Fp(){const t=indexedDB.open(WI,Y2);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore(jc,{keyPath:HI})}catch(i){n(i)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains(jc)?e(r):(r.close(),await X2(),e(await Fp()))})})}async function b0(t,e,n){const r=Vh(t,!0).put({[HI]:e,value:n});return new Nl(r).toPromise()}async function J2(t,e){const n=Vh(t,!1).get(e),r=await new Nl(n).toPromise();return r===void 0?null:r.value}function D0(t,e){const n=Vh(t,!0).delete(e);return new Nl(n).toPromise()}const Z2=800,eL=3;class qI{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Fp(),this.db)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>eL)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return zI()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Fh._getInstance(Q2()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await K2(),!this.activeServiceWorker)return;this.sender=new q2(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((e=r[0])===null||e===void 0)&&e.fulfilled&&!((n=r[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||$2()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Fp();return await b0(e,Vc,"1"),await D0(e,Vc),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>b0(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>J2(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>D0(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(i=>{const s=Vh(i,!1).getAll();return new Nl(s).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;if(e.length!==0)for(const{fbase_key:i,value:s}of e)r.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(s)&&(this.notifyListeners(i,s),n.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!r.has(i)&&(this.notifyListeners(i,null),n.push(i));return n}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),Z2)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}qI.type="LOCAL";const tL=qI;new Rl(3e4,6e4);/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function GI(t,e){return e?or(e):(Y(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bg extends Rg{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return Bs(e,this._buildIdpRequest())}_linkToIdToken(e,n){return Bs(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return Bs(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function nL(t){return OI(t.auth,new bg(t),t.bypassAuthState)}function rL(t){const{auth:e,user:n}=t;return Y(n,e,"internal-error"),O2(n,new bg(t),t.bypassAuthState)}async function iL(t){const{auth:e,user:n}=t;return Y(n,e,"internal-error"),L2(n,new bg(t),t.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class KI{constructor(e,n,r,i,s=!1){this.auth=e,this.resolver=r,this.user=i,this.bypassAuthState=s,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:i,tenantId:s,error:o,type:a}=e;if(o){this.reject(o);return}const l={auth:this.auth,requestUri:n,sessionId:r,tenantId:s||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(l))}catch(c){this.reject(c)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return nL;case"linkViaPopup":case"linkViaRedirect":return iL;case"reauthViaPopup":case"reauthViaRedirect":return rL;default:mn(this.auth,"internal-error")}}resolve(e){yr(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){yr(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const sL=new Rl(2e3,1e4);async function oL(t,e,n){if(Tn(t.app))return Promise.reject(Nn(t,"operation-not-supported-in-this-environment"));const r=vi(t);zD(t,e,xg);const i=GI(r,n);return new bi(r,"signInViaPopup",e,i).executeNotNull()}class bi extends KI{constructor(e,n,r,i,s){super(e,n,i,s),this.provider=r,this.authWindow=null,this.pollId=null,bi.currentPopupAction&&bi.currentPopupAction.cancel(),bi.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return Y(e,this.auth,"internal-error"),e}async onExecution(){yr(this.filter.length===1,"Popup operations only handle one event");const e=Pg();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(Nn(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(Nn(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,bi.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,r;if(!((r=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(Nn(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,sL.get())};e()}}bi.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const aL="pendingRedirect",Yu=new Map;class lL extends KI{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let e=Yu.get(this.auth._key());if(!e){try{const r=await uL(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}Yu.set(this.auth._key(),e)}return this.bypassAuthState||Yu.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function uL(t,e){const n=dL(e),r=hL(t);if(!await r._isAvailable())return!1;const i=await r._get(n)==="true";return await r._remove(n),i}function cL(t,e){Yu.set(t._key(),e)}function hL(t){return or(t._redirectPersistence)}function dL(t){return Qu(aL,t.config.apiKey,t.name)}async function fL(t,e,n=!1){if(Tn(t.app))return Promise.reject(cr(t));const r=vi(t),i=GI(r,e),o=await new lL(r,i,n).execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pL=10*60*1e3;class mL{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!gL(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var r;if(e.error&&!$I(e)){const i=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";n.onError(Nn(this.auth,i))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=pL&&this.cachedEventUids.clear(),this.cachedEventUids.has(L0(e))}saveEventToCache(e){this.cachedEventUids.add(L0(e)),this.lastProcessedEventTime=Date.now()}}function L0(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function $I({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function gL(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return $I(t);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function _L(t,e={}){return yi(t,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yL=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,vL=/^https?/;async function wL(t){if(t.config.emulator)return;const{authorizedDomains:e}=await _L(t);for(const n of e)try{if(AL(n))return}catch{}mn(t,"unauthorized-domain")}function AL(t){const e=Lp(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===r}if(!vL.test(n))return!1;if(yL.test(t))return r===t;const i=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(r)}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const EL=new Rl(3e4,6e4);function O0(){const t=Wn().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function TL(t){return new Promise((e,n)=>{var r,i,s;function o(){O0(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{O0(),n(Nn(t,"network-request-failed"))},timeout:EL.get()})}if(!((i=(r=Wn().gapi)===null||r===void 0?void 0:r.iframes)===null||i===void 0)&&i.Iframe)e(gapi.iframes.getContext());else if(!((s=Wn().gapi)===null||s===void 0)&&s.load)o();else{const a=g2("iframefcb");return Wn()[a]=()=>{gapi.load?o():n(Nn(t,"network-request-failed"))},PI(`${m2()}?onload=${a}`).catch(l=>n(l))}}).catch(e=>{throw Xu=null,e})}let Xu=null;function IL(t){return Xu=Xu||TL(t),Xu}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const CL=new Rl(5e3,15e3),SL="__/auth/iframe",RL="emulator/auth/iframe",kL={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},xL=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function NL(t){const e=t.config;Y(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?Ig(e,RL):`https://${t.config.authDomain}/${SL}`,r={apiKey:e.apiKey,appName:t.name,v:gi},i=xL.get(t.config.apiHost);i&&(r.eid=i);const s=t._getFrameworks();return s.length&&(r.fw=s.join(",")),`${n}?${yo(r).slice(1)}`}async function PL(t){const e=await IL(t),n=Wn().gapi;return Y(n,t,"internal-error"),e.open({where:document.body,url:NL(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:kL,dontclear:!0},r=>new Promise(async(i,s)=>{await r.restyle({setHideOnLeave:!1});const o=Nn(t,"network-request-failed"),a=Wn().setTimeout(()=>{s(o)},CL.get());function l(){Wn().clearTimeout(a),i(r)}r.ping(l).then(l,()=>{s(o)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bL={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},DL=500,LL=600,OL="_blank",ML="http://localhost";class M0{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function FL(t,e,n,r=DL,i=LL){const s=Math.max((window.screen.availHeight-i)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let a="";const l=Object.assign(Object.assign({},bL),{width:r.toString(),height:i.toString(),top:s,left:o}),c=Ct().toLowerCase();n&&(a=II(c)?OL:n),EI(c)&&(e=e||ML,l.scrollbars="yes");const h=Object.entries(l).reduce((p,[_,E])=>`${p}${_}=${E},`,"");if(o2(c)&&a!=="_self")return VL(e||"",a),new M0(null);const f=window.open(e||"",a,h);Y(f,t,"popup-blocked");try{f.focus()}catch{}return new M0(f)}function VL(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jL="__/auth/handler",UL="emulator/auth/handler",BL=encodeURIComponent("fac");async function F0(t,e,n,r,i,s){Y(t.config.authDomain,t,"auth-domain-config-required"),Y(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:gi,eventId:i};if(e instanceof xg){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",kp(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[h,f]of Object.entries({}))o[h]=f}if(e instanceof xl){const h=e.getScopes().filter(f=>f!=="");h.length>0&&(o.scopes=h.join(","))}t.tenantId&&(o.tid=t.tenantId);const a=o;for(const h of Object.keys(a))a[h]===void 0&&delete a[h];const l=await t._getAppCheckToken(),c=l?`#${BL}=${encodeURIComponent(l)}`:"";return`${zL(t)}?${yo(a).slice(1)}${c}`}function zL({config:t}){return t.emulator?Ig(t,UL):`https://${t.authDomain}/${jL}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gf="webStorageSupport";class WL{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=BI,this._completeRedirectFn=fL,this._overrideRedirectResult=cL}async _openPopup(e,n,r,i){var s;yr((s=this.eventManagers[e._key()])===null||s===void 0?void 0:s.manager,"_initialize() not called before _openPopup()");const o=await F0(e,n,r,Lp(),i);return FL(e,o,Pg())}async _openRedirect(e,n,r,i){await this._originValidation(e);const s=await F0(e,n,r,Lp(),i);return G2(s),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:i,promise:s}=this.eventManagers[n];return i?Promise.resolve(i):(yr(s,"If manager is not set, promise should be"),s)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(e){const n=await PL(e),r=new mL(e);return n.register("authEvent",i=>(Y(i==null?void 0:i.authEvent,e,"invalid-auth-event"),{status:r.onEvent(i.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(gf,{type:gf},i=>{var s;const o=(s=i==null?void 0:i[0])===null||s===void 0?void 0:s[gf];o!==void 0&&n(!!o),mn(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=wL(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return xI()||TI()||Sg()}}const HL=WL;var V0="@firebase/auth",j0="1.8.1";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qL{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){Y(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function GL(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function KL(t){pn(new tn("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("heartbeat"),s=e.getProvider("app-check-internal"),{apiKey:o,authDomain:a}=r.options;Y(o&&!o.includes(":"),"invalid-api-key",{appName:r.name});const l={apiKey:o,authDomain:a,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:NI(t)},c=new d2(r,i,s,l);return E2(c,n),c},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),pn(new tn("auth-internal",e=>{const n=vi(e.getProvider("auth").getImmediate());return(r=>new qL(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),Tt(V0,j0,GL(t)),Tt(V0,j0,"esm2017")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $L=5*60,QL=tI("authIdTokenMaxAge")||$L;let U0=null;const YL=t=>async e=>{const n=e&&await e.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>QL)return;const i=n==null?void 0:n.token;U0!==i&&(U0=i,await fetch(t,{method:i?"POST":"DELETE",headers:i?{Authorization:`Bearer ${i}`}:{}}))};function QI(t=Sl()){const e=Rr(t,"auth");if(e.isInitialized())return e.getImmediate();const n=A2(t,{popupRedirectResolver:HL,persistence:[tL,W2,BI]}),r=tI("authTokenSyncURL");if(r&&typeof isSecureContext=="boolean"&&isSecureContext){const s=new URL(r,location.origin);if(location.origin===s.origin){const o=YL(s.toString());U2(n,o,()=>o(n.currentUser)),j2(n,a=>o(a))}}const i=ZT("auth");return i&&T2(n,`http://${i}`),n}function XL(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}f2({loadJS(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=i=>{const s=Nn("internal-error");s.customData=i,n(s)},r.type="text/javascript",r.charset="UTF-8",XL().appendChild(r)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});KL("Browser");var JL="firebase",ZL="11.1.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Tt(JL,ZL,"app");const YI="@firebase/installations",Dg="0.6.11";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const XI=1e4,JI=`w:${Dg}`,ZI="FIS_v2",eO="https://firebaseinstallations.googleapis.com/v1",tO=60*60*1e3,nO="installations",rO="Installations";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const iO={"missing-app-config-values":'Missing App configuration value: "{$valueName}"',"not-registered":"Firebase Installation is not registered.","installation-not-found":"Firebase Installation not found.","request-failed":'{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"',"app-offline":"Could not process request. Application offline.","delete-pending-registration":"Can't delete installation while there is a pending registration request."},$i=new rs(nO,rO,iO);function eC(t){return t instanceof gn&&t.code.includes("request-failed")}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function tC({projectId:t}){return`${eO}/projects/${t}/installations`}function nC(t){return{token:t.token,requestStatus:2,expiresIn:oO(t.expiresIn),creationTime:Date.now()}}async function rC(t,e){const r=(await e.json()).error;return $i.create("request-failed",{requestName:t,serverCode:r.code,serverMessage:r.message,serverStatus:r.status})}function iC({apiKey:t}){return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":t})}function sO(t,{refreshToken:e}){const n=iC(t);return n.append("Authorization",aO(e)),n}async function sC(t){const e=await t();return e.status>=500&&e.status<600?t():e}function oO(t){return Number(t.replace("s","000"))}function aO(t){return`${ZI} ${t}`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function lO({appConfig:t,heartbeatServiceProvider:e},{fid:n}){const r=tC(t),i=iC(t),s=e.getImmediate({optional:!0});if(s){const c=await s.getHeartbeatsHeader();c&&i.append("x-firebase-client",c)}const o={fid:n,authVersion:ZI,appId:t.appId,sdkVersion:JI},a={method:"POST",headers:i,body:JSON.stringify(o)},l=await sC(()=>fetch(r,a));if(l.ok){const c=await l.json();return{fid:c.fid||n,registrationStatus:2,refreshToken:c.refreshToken,authToken:nC(c.authToken)}}else throw await rC("Create Installation",l)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function oC(t){return new Promise(e=>{setTimeout(e,t)})}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function uO(t){return btoa(String.fromCharCode(...t)).replace(/\+/g,"-").replace(/\//g,"_")}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const cO=/^[cdef][\w-]{21}$/,Vp="";function hO(){try{const t=new Uint8Array(17);(self.crypto||self.msCrypto).getRandomValues(t),t[0]=112+t[0]%16;const n=dO(t);return cO.test(n)?n:Vp}catch{return Vp}}function dO(t){return uO(t).substr(0,22)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function jh(t){return`${t.appName}!${t.appId}`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const aC=new Map;function lC(t,e){const n=jh(t);uC(n,e),fO(n,e)}function uC(t,e){const n=aC.get(t);if(n)for(const r of n)r(e)}function fO(t,e){const n=pO();n&&n.postMessage({key:t,fid:e}),mO()}let Di=null;function pO(){return!Di&&"BroadcastChannel"in self&&(Di=new BroadcastChannel("[Firebase] FID Change"),Di.onmessage=t=>{uC(t.data.key,t.data.fid)}),Di}function mO(){aC.size===0&&Di&&(Di.close(),Di=null)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gO="firebase-installations-database",_O=1,Qi="firebase-installations-store";let _f=null;function Lg(){return _f||(_f=cI(gO,_O,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(Qi)}}})),_f}async function Uc(t,e){const n=jh(t),i=(await Lg()).transaction(Qi,"readwrite"),s=i.objectStore(Qi),o=await s.get(n);return await s.put(e,n),await i.done,(!o||o.fid!==e.fid)&&lC(t,e.fid),e}async function cC(t){const e=jh(t),r=(await Lg()).transaction(Qi,"readwrite");await r.objectStore(Qi).delete(e),await r.done}async function Uh(t,e){const n=jh(t),i=(await Lg()).transaction(Qi,"readwrite"),s=i.objectStore(Qi),o=await s.get(n),a=e(o);return a===void 0?await s.delete(n):await s.put(a,n),await i.done,a&&(!o||o.fid!==a.fid)&&lC(t,a.fid),a}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Og(t){let e;const n=await Uh(t.appConfig,r=>{const i=yO(r),s=vO(t,i);return e=s.registrationPromise,s.installationEntry});return n.fid===Vp?{installationEntry:await e}:{installationEntry:n,registrationPromise:e}}function yO(t){const e=t||{fid:hO(),registrationStatus:0};return hC(e)}function vO(t,e){if(e.registrationStatus===0){if(!navigator.onLine){const i=Promise.reject($i.create("app-offline"));return{installationEntry:e,registrationPromise:i}}const n={fid:e.fid,registrationStatus:1,registrationTime:Date.now()},r=wO(t,n);return{installationEntry:n,registrationPromise:r}}else return e.registrationStatus===1?{installationEntry:e,registrationPromise:AO(t)}:{installationEntry:e}}async function wO(t,e){try{const n=await lO(t,e);return Uc(t.appConfig,n)}catch(n){throw eC(n)&&n.customData.serverCode===409?await cC(t.appConfig):await Uc(t.appConfig,{fid:e.fid,registrationStatus:0}),n}}async function AO(t){let e=await B0(t.appConfig);for(;e.registrationStatus===1;)await oC(100),e=await B0(t.appConfig);if(e.registrationStatus===0){const{installationEntry:n,registrationPromise:r}=await Og(t);return r||n}return e}function B0(t){return Uh(t,e=>{if(!e)throw $i.create("installation-not-found");return hC(e)})}function hC(t){return EO(t)?{fid:t.fid,registrationStatus:0}:t}function EO(t){return t.registrationStatus===1&&t.registrationTime+XI<Date.now()}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function TO({appConfig:t,heartbeatServiceProvider:e},n){const r=IO(t,n),i=sO(t,n),s=e.getImmediate({optional:!0});if(s){const c=await s.getHeartbeatsHeader();c&&i.append("x-firebase-client",c)}const o={installation:{sdkVersion:JI,appId:t.appId}},a={method:"POST",headers:i,body:JSON.stringify(o)},l=await sC(()=>fetch(r,a));if(l.ok){const c=await l.json();return nC(c)}else throw await rC("Generate Auth Token",l)}function IO(t,{fid:e}){return`${tC(t)}/${e}/authTokens:generate`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Mg(t,e=!1){let n;const r=await Uh(t.appConfig,s=>{if(!dC(s))throw $i.create("not-registered");const o=s.authToken;if(!e&&RO(o))return s;if(o.requestStatus===1)return n=CO(t,e),s;{if(!navigator.onLine)throw $i.create("app-offline");const a=xO(s);return n=SO(t,a),a}});return n?await n:r.authToken}async function CO(t,e){let n=await z0(t.appConfig);for(;n.authToken.requestStatus===1;)await oC(100),n=await z0(t.appConfig);const r=n.authToken;return r.requestStatus===0?Mg(t,e):r}function z0(t){return Uh(t,e=>{if(!dC(e))throw $i.create("not-registered");const n=e.authToken;return NO(n)?Object.assign(Object.assign({},e),{authToken:{requestStatus:0}}):e})}async function SO(t,e){try{const n=await TO(t,e),r=Object.assign(Object.assign({},e),{authToken:n});return await Uc(t.appConfig,r),n}catch(n){if(eC(n)&&(n.customData.serverCode===401||n.customData.serverCode===404))await cC(t.appConfig);else{const r=Object.assign(Object.assign({},e),{authToken:{requestStatus:0}});await Uc(t.appConfig,r)}throw n}}function dC(t){return t!==void 0&&t.registrationStatus===2}function RO(t){return t.requestStatus===2&&!kO(t)}function kO(t){const e=Date.now();return e<t.creationTime||t.creationTime+t.expiresIn<e+tO}function xO(t){const e={requestStatus:1,requestTime:Date.now()};return Object.assign(Object.assign({},t),{authToken:e})}function NO(t){return t.requestStatus===1&&t.requestTime+XI<Date.now()}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function PO(t){const e=t,{installationEntry:n,registrationPromise:r}=await Og(e);return r?r.catch(console.error):Mg(e).catch(console.error),n.fid}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function bO(t,e=!1){const n=t;return await DO(n),(await Mg(n,e)).token}async function DO(t){const{registrationPromise:e}=await Og(t);e&&await e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function LO(t){if(!t||!t.options)throw yf("App Configuration");if(!t.name)throw yf("App Name");const e=["projectId","apiKey","appId"];for(const n of e)if(!t.options[n])throw yf(n);return{appName:t.name,projectId:t.options.projectId,apiKey:t.options.apiKey,appId:t.options.appId}}function yf(t){return $i.create("missing-app-config-values",{valueName:t})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fC="installations",OO="installations-internal",MO=t=>{const e=t.getProvider("app").getImmediate(),n=LO(e),r=Rr(e,"heartbeat");return{app:e,appConfig:n,heartbeatServiceProvider:r,_delete:()=>Promise.resolve()}},FO=t=>{const e=t.getProvider("app").getImmediate(),n=Rr(e,fC).getImmediate();return{getId:()=>PO(n),getToken:i=>bO(n,i)}};function VO(){pn(new tn(fC,MO,"PUBLIC")),pn(new tn(OO,FO,"PRIVATE"))}VO();Tt(YI,Dg);Tt(YI,Dg,"esm2017");/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Bc="analytics",jO="firebase_id",UO="origin",BO=60*1e3,zO="https://firebase.googleapis.com/v1alpha/projects/-/apps/{app-id}/webConfig",Fg="https://www.googletagmanager.com/gtag/js";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Wt=new Cl("@firebase/analytics");/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const WO={"already-exists":"A Firebase Analytics instance with the appId {$id}  already exists. Only one Firebase Analytics instance can be created for each appId.","already-initialized":"initializeAnalytics() cannot be called again with different options than those it was initially called with. It can be called again with the same options to return the existing instance, or getAnalytics() can be used to get a reference to the already-initialized instance.","already-initialized-settings":"Firebase Analytics has already been initialized.settings() must be called before initializing any Analytics instanceor it will have no effect.","interop-component-reg-failed":"Firebase Analytics Interop Component failed to instantiate: {$reason}","invalid-analytics-context":"Firebase Analytics is not supported in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","indexeddb-unavailable":"IndexedDB unavailable or restricted in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","fetch-throttle":"The config fetch request timed out while in an exponential backoff state. Unix timestamp in milliseconds when fetch request throttling ends: {$throttleEndTimeMillis}.","config-fetch-failed":"Dynamic config fetch failed: [{$httpStatus}] {$responseMessage}","no-api-key":'The "apiKey" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid API key.',"no-app-id":'The "appId" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid app ID.',"no-client-id":'The "client_id" field is empty.',"invalid-gtag-resource":"Trusted Types detected an invalid gtag resource: {$gtagURL}."},Zt=new rs("analytics","Analytics",WO);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function HO(t){if(!t.startsWith(Fg)){const e=Zt.create("invalid-gtag-resource",{gtagURL:t});return Wt.warn(e.message),""}return t}function pC(t){return Promise.all(t.map(e=>e.catch(n=>n)))}function qO(t,e){let n;return window.trustedTypes&&(n=window.trustedTypes.createPolicy(t,e)),n}function GO(t,e){const n=qO("firebase-js-sdk-policy",{createScriptURL:HO}),r=document.createElement("script"),i=`${Fg}?l=${t}&id=${e}`;r.src=n?n==null?void 0:n.createScriptURL(i):i,r.async=!0,document.head.appendChild(r)}function KO(t){let e=[];return Array.isArray(window[t])?e=window[t]:window[t]=e,e}async function $O(t,e,n,r,i,s){const o=r[i];try{if(o)await e[o];else{const l=(await pC(n)).find(c=>c.measurementId===i);l&&await e[l.appId]}}catch(a){Wt.error(a)}t("config",i,s)}async function QO(t,e,n,r,i){try{let s=[];if(i&&i.send_to){let o=i.send_to;Array.isArray(o)||(o=[o]);const a=await pC(n);for(const l of o){const c=a.find(f=>f.measurementId===l),h=c&&e[c.appId];if(h)s.push(h);else{s=[];break}}}s.length===0&&(s=Object.values(e)),await Promise.all(s),t("event",r,i||{})}catch(s){Wt.error(s)}}function YO(t,e,n,r){async function i(s,...o){try{if(s==="event"){const[a,l]=o;await QO(t,e,n,a,l)}else if(s==="config"){const[a,l]=o;await $O(t,e,n,r,a,l)}else if(s==="consent"){const[a,l]=o;t("consent",a,l)}else if(s==="get"){const[a,l,c]=o;t("get",a,l,c)}else if(s==="set"){const[a]=o;t("set",a)}else t(s,...o)}catch(a){Wt.error(a)}}return i}function XO(t,e,n,r,i){let s=function(...o){window[r].push(arguments)};return window[i]&&typeof window[i]=="function"&&(s=window[i]),window[i]=YO(s,t,e,n),{gtagCore:s,wrappedGtag:window[i]}}function JO(t){const e=window.document.getElementsByTagName("script");for(const n of Object.values(e))if(n.src&&n.src.includes(Fg)&&n.src.includes(t))return n;return null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ZO=30,eM=1e3;class tM{constructor(e={},n=eM){this.throttleMetadata=e,this.intervalMillis=n}getThrottleMetadata(e){return this.throttleMetadata[e]}setThrottleMetadata(e,n){this.throttleMetadata[e]=n}deleteThrottleMetadata(e){delete this.throttleMetadata[e]}}const mC=new tM;function nM(t){return new Headers({Accept:"application/json","x-goog-api-key":t})}async function rM(t){var e;const{appId:n,apiKey:r}=t,i={method:"GET",headers:nM(r)},s=zO.replace("{app-id}",n),o=await fetch(s,i);if(o.status!==200&&o.status!==304){let a="";try{const l=await o.json();!((e=l.error)===null||e===void 0)&&e.message&&(a=l.error.message)}catch{}throw Zt.create("config-fetch-failed",{httpStatus:o.status,responseMessage:a})}return o.json()}async function iM(t,e=mC,n){const{appId:r,apiKey:i,measurementId:s}=t.options;if(!r)throw Zt.create("no-app-id");if(!i){if(s)return{measurementId:s,appId:r};throw Zt.create("no-api-key")}const o=e.getThrottleMetadata(r)||{backoffCount:0,throttleEndTimeMillis:Date.now()},a=new aM;return setTimeout(async()=>{a.abort()},BO),gC({appId:r,apiKey:i,measurementId:s},o,a,e)}async function gC(t,{throttleEndTimeMillis:e,backoffCount:n},r,i=mC){var s;const{appId:o,measurementId:a}=t;try{await sM(r,e)}catch(l){if(a)return Wt.warn(`Timed out fetching this Firebase app's measurement ID from the server. Falling back to the measurement ID ${a} provided in the "measurementId" field in the local Firebase config. [${l==null?void 0:l.message}]`),{appId:o,measurementId:a};throw l}try{const l=await rM(t);return i.deleteThrottleMetadata(o),l}catch(l){const c=l;if(!oM(c)){if(i.deleteThrottleMetadata(o),a)return Wt.warn(`Failed to fetch this Firebase app's measurement ID from the server. Falling back to the measurement ID ${a} provided in the "measurementId" field in the local Firebase config. [${c==null?void 0:c.message}]`),{appId:o,measurementId:a};throw l}const h=Number((s=c==null?void 0:c.customData)===null||s===void 0?void 0:s.httpStatus)===503?f0(n,i.intervalMillis,ZO):f0(n,i.intervalMillis),f={throttleEndTimeMillis:Date.now()+h,backoffCount:n+1};return i.setThrottleMetadata(o,f),Wt.debug(`Calling attemptFetch again in ${h} millis`),gC(t,f,r,i)}}function sM(t,e){return new Promise((n,r)=>{const i=Math.max(e-Date.now(),0),s=setTimeout(n,i);t.addEventListener(()=>{clearTimeout(s),r(Zt.create("fetch-throttle",{throttleEndTimeMillis:e}))})})}function oM(t){if(!(t instanceof gn)||!t.customData)return!1;const e=Number(t.customData.httpStatus);return e===429||e===500||e===503||e===504}class aM{constructor(){this.listeners=[]}addEventListener(e){this.listeners.push(e)}abort(){this.listeners.forEach(e=>e())}}async function lM(t,e,n,r,i){if(i&&i.global){t("event",n,r);return}else{const s=await e,o=Object.assign(Object.assign({},r),{send_to:s});t("event",n,o)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function uM(){if(sI())try{await oI()}catch(t){return Wt.warn(Zt.create("indexeddb-unavailable",{errorInfo:t==null?void 0:t.toString()}).message),!1}else return Wt.warn(Zt.create("indexeddb-unavailable",{errorInfo:"IndexedDB is not available in this environment."}).message),!1;return!0}async function cM(t,e,n,r,i,s,o){var a;const l=iM(t);l.then(_=>{n[_.measurementId]=_.appId,t.options.measurementId&&_.measurementId!==t.options.measurementId&&Wt.warn(`The measurement ID in the local Firebase config (${t.options.measurementId}) does not match the measurement ID fetched from the server (${_.measurementId}). To ensure analytics events are always sent to the correct Analytics property, update the measurement ID field in the local config or remove it from the local config.`)}).catch(_=>Wt.error(_)),e.push(l);const c=uM().then(_=>{if(_)return r.getId()}),[h,f]=await Promise.all([l,c]);JO(s)||GO(s,h.measurementId),i("js",new Date);const p=(a=o==null?void 0:o.config)!==null&&a!==void 0?a:{};return p[UO]="firebase",p.update=!0,f!=null&&(p[jO]=f),i("config",h.measurementId,p),h.measurementId}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hM{constructor(e){this.app=e}_delete(){return delete wa[this.app.options.appId],Promise.resolve()}}let wa={},W0=[];const H0={};let vf="dataLayer",dM="gtag",q0,_C,G0=!1;function fM(){const t=[];if(nI()&&t.push("This is a browser extension environment."),vb()||t.push("Cookies are not available."),t.length>0){const e=t.map((r,i)=>`(${i+1}) ${r}`).join(" "),n=Zt.create("invalid-analytics-context",{errorInfo:e});Wt.warn(n.message)}}function pM(t,e,n){fM();const r=t.options.appId;if(!r)throw Zt.create("no-app-id");if(!t.options.apiKey)if(t.options.measurementId)Wt.warn(`The "apiKey" field is empty in the local Firebase config. This is needed to fetch the latest measurement ID for this Firebase app. Falling back to the measurement ID ${t.options.measurementId} provided in the "measurementId" field in the local Firebase config.`);else throw Zt.create("no-api-key");if(wa[r]!=null)throw Zt.create("already-exists",{id:r});if(!G0){KO(vf);const{wrappedGtag:s,gtagCore:o}=XO(wa,W0,H0,vf,dM);_C=s,q0=o,G0=!0}return wa[r]=cM(t,W0,H0,e,q0,vf,n),new hM(t)}function mM(t=Sl()){t=Fe(t);const e=Rr(t,Bc);return e.isInitialized()?e.getImmediate():gM(t)}function gM(t,e={}){const n=Rr(t,Bc);if(n.isInitialized()){const i=n.getImmediate();if(Ya(e,n.getOptions()))return i;throw Zt.create("already-initialized")}return n.initialize({options:e})}function _M(t,e,n,r){t=Fe(t),lM(_C,wa[t.app.options.appId],e,n,r).catch(i=>Wt.error(i))}const K0="@firebase/analytics",$0="0.10.10";function yM(){pn(new tn(Bc,(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("installations-internal").getImmediate();return pM(r,i,n)},"PUBLIC")),pn(new tn("analytics-internal",t,"PRIVATE")),Tt(K0,$0),Tt(K0,$0,"esm2017");function t(e){try{const n=e.getProvider(Bc).getImmediate();return{logEvent:(r,i,s)=>_M(n,r,i,s)}}catch(n){throw Zt.create("interop-component-reg-failed",{reason:n})}}}yM();/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yC="firebasestorage.googleapis.com",vM="storageBucket",wM=2*60*1e3,AM=10*60*1e3;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qn extends gn{constructor(e,n,r=0){super(wf(e),`Firebase Storage: ${n} (${wf(e)})`),this.status_=r,this.customData={serverResponse:null},this._baseMessage=this.message,Object.setPrototypeOf(this,Qn.prototype)}get status(){return this.status_}set status(e){this.status_=e}_codeEquals(e){return wf(e)===this.code}get serverResponse(){return this.customData.serverResponse}set serverResponse(e){this.customData.serverResponse=e,this.customData.serverResponse?this.message=`${this._baseMessage}
${this.customData.serverResponse}`:this.message=this._baseMessage}}var Gn;(function(t){t.UNKNOWN="unknown",t.OBJECT_NOT_FOUND="object-not-found",t.BUCKET_NOT_FOUND="bucket-not-found",t.PROJECT_NOT_FOUND="project-not-found",t.QUOTA_EXCEEDED="quota-exceeded",t.UNAUTHENTICATED="unauthenticated",t.UNAUTHORIZED="unauthorized",t.UNAUTHORIZED_APP="unauthorized-app",t.RETRY_LIMIT_EXCEEDED="retry-limit-exceeded",t.INVALID_CHECKSUM="invalid-checksum",t.CANCELED="canceled",t.INVALID_EVENT_NAME="invalid-event-name",t.INVALID_URL="invalid-url",t.INVALID_DEFAULT_BUCKET="invalid-default-bucket",t.NO_DEFAULT_BUCKET="no-default-bucket",t.CANNOT_SLICE_BLOB="cannot-slice-blob",t.SERVER_FILE_WRONG_SIZE="server-file-wrong-size",t.NO_DOWNLOAD_URL="no-download-url",t.INVALID_ARGUMENT="invalid-argument",t.INVALID_ARGUMENT_COUNT="invalid-argument-count",t.APP_DELETED="app-deleted",t.INVALID_ROOT_OPERATION="invalid-root-operation",t.INVALID_FORMAT="invalid-format",t.INTERNAL_ERROR="internal-error",t.UNSUPPORTED_ENVIRONMENT="unsupported-environment"})(Gn||(Gn={}));function wf(t){return"storage/"+t}function EM(){const t="An unknown error occurred, please check the error payload for server response.";return new Qn(Gn.UNKNOWN,t)}function TM(){return new Qn(Gn.RETRY_LIMIT_EXCEEDED,"Max retry time for operation exceeded, please try again.")}function IM(){return new Qn(Gn.CANCELED,"User canceled the upload/download.")}function CM(t){return new Qn(Gn.INVALID_URL,"Invalid URL '"+t+"'.")}function SM(t){return new Qn(Gn.INVALID_DEFAULT_BUCKET,"Invalid default bucket '"+t+"'.")}function Q0(t){return new Qn(Gn.INVALID_ARGUMENT,t)}function vC(){return new Qn(Gn.APP_DELETED,"The Firebase app was deleted.")}function RM(t){return new Qn(Gn.INVALID_ROOT_OPERATION,"The operation '"+t+"' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png').")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class In{constructor(e,n){this.bucket=e,this.path_=n}get path(){return this.path_}get isRoot(){return this.path.length===0}fullServerUrl(){const e=encodeURIComponent;return"/b/"+e(this.bucket)+"/o/"+e(this.path)}bucketOnlyServerUrl(){return"/b/"+encodeURIComponent(this.bucket)+"/o"}static makeFromBucketSpec(e,n){let r;try{r=In.makeFromUrl(e,n)}catch{return new In(e,"")}if(r.path==="")return r;throw SM(e)}static makeFromUrl(e,n){let r=null;const i="([A-Za-z0-9.\\-_]+)";function s(b){b.path.charAt(b.path.length-1)==="/"&&(b.path_=b.path_.slice(0,-1))}const o="(/(.*))?$",a=new RegExp("^gs://"+i+o,"i"),l={bucket:1,path:3};function c(b){b.path_=decodeURIComponent(b.path)}const h="v[A-Za-z0-9_]+",f=n.replace(/[.]/g,"\\."),p="(/([^?#]*).*)?$",_=new RegExp(`^https?://${f}/${h}/b/${i}/o${p}`,"i"),E={bucket:1,path:3},S=n===yC?"(?:storage.googleapis.com|storage.cloud.google.com)":n,k="([^?#]*)",A=new RegExp(`^https?://${S}/${i}/${k}`,"i"),T=[{regex:a,indices:l,postModify:s},{regex:_,indices:E,postModify:c},{regex:A,indices:{bucket:1,path:2},postModify:c}];for(let b=0;b<T.length;b++){const M=T[b],V=M.regex.exec(e);if(V){const C=V[M.indices.bucket];let y=V[M.indices.path];y||(y=""),r=new In(C,y),M.postModify(r);break}}if(r==null)throw CM(e);return r}}class kM{constructor(e){this.promise_=Promise.reject(e)}getPromise(){return this.promise_}cancel(e=!1){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function xM(t,e,n){let r=1,i=null,s=null,o=!1,a=0;function l(){return a===2}let c=!1;function h(...k){c||(c=!0,e.apply(null,k))}function f(k){i=setTimeout(()=>{i=null,t(_,l())},k)}function p(){s&&clearTimeout(s)}function _(k,...A){if(c){p();return}if(k){p(),h.call(null,k,...A);return}if(l()||o){p(),h.call(null,k,...A);return}r<64&&(r*=2);let T;a===1?(a=2,T=0):T=(r+Math.random())*1e3,f(T)}let E=!1;function S(k){E||(E=!0,p(),!c&&(i!==null?(k||(a=2),clearTimeout(i),f(0)):k||(a=1)))}return f(0),s=setTimeout(()=>{o=!0,S(!0)},n),S}function NM(t){t(!1)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function PM(t){return t!==void 0}function Y0(t,e,n,r){if(r<e)throw Q0(`Invalid value for '${t}'. Expected ${e} or greater.`);if(r>n)throw Q0(`Invalid value for '${t}'. Expected ${n} or less.`)}function bM(t){const e=encodeURIComponent;let n="?";for(const r in t)if(t.hasOwnProperty(r)){const i=e(r)+"="+e(t[r]);n=n+i+"&"}return n=n.slice(0,-1),n}var zc;(function(t){t[t.NO_ERROR=0]="NO_ERROR",t[t.NETWORK_ERROR=1]="NETWORK_ERROR",t[t.ABORT=2]="ABORT"})(zc||(zc={}));/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function DM(t,e){const n=t>=500&&t<600,i=[408,429].indexOf(t)!==-1,s=e.indexOf(t)!==-1;return n||i||s}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class LM{constructor(e,n,r,i,s,o,a,l,c,h,f,p=!0){this.url_=e,this.method_=n,this.headers_=r,this.body_=i,this.successCodes_=s,this.additionalRetryCodes_=o,this.callback_=a,this.errorCallback_=l,this.timeout_=c,this.progressCallback_=h,this.connectionFactory_=f,this.retry=p,this.pendingConnection_=null,this.backoffId_=null,this.canceled_=!1,this.appDelete_=!1,this.promise_=new Promise((_,E)=>{this.resolve_=_,this.reject_=E,this.start_()})}start_(){const e=(r,i)=>{if(i){r(!1,new Iu(!1,null,!0));return}const s=this.connectionFactory_();this.pendingConnection_=s;const o=a=>{const l=a.loaded,c=a.lengthComputable?a.total:-1;this.progressCallback_!==null&&this.progressCallback_(l,c)};this.progressCallback_!==null&&s.addUploadProgressListener(o),s.send(this.url_,this.method_,this.body_,this.headers_).then(()=>{this.progressCallback_!==null&&s.removeUploadProgressListener(o),this.pendingConnection_=null;const a=s.getErrorCode()===zc.NO_ERROR,l=s.getStatus();if(!a||DM(l,this.additionalRetryCodes_)&&this.retry){const h=s.getErrorCode()===zc.ABORT;r(!1,new Iu(!1,null,h));return}const c=this.successCodes_.indexOf(l)!==-1;r(!0,new Iu(c,s))})},n=(r,i)=>{const s=this.resolve_,o=this.reject_,a=i.connection;if(i.wasSuccessCode)try{const l=this.callback_(a,a.getResponse());PM(l)?s(l):s()}catch(l){o(l)}else if(a!==null){const l=EM();l.serverResponse=a.getErrorText(),this.errorCallback_?o(this.errorCallback_(a,l)):o(l)}else if(i.canceled){const l=this.appDelete_?vC():IM();o(l)}else{const l=TM();o(l)}};this.canceled_?n(!1,new Iu(!1,null,!0)):this.backoffId_=xM(e,n,this.timeout_)}getPromise(){return this.promise_}cancel(e){this.canceled_=!0,this.appDelete_=e||!1,this.backoffId_!==null&&NM(this.backoffId_),this.pendingConnection_!==null&&this.pendingConnection_.abort()}}class Iu{constructor(e,n,r){this.wasSuccessCode=e,this.connection=n,this.canceled=!!r}}function OM(t,e){e!==null&&e.length>0&&(t.Authorization="Firebase "+e)}function MM(t,e){t["X-Firebase-Storage-Version"]="webjs/"+(e??"AppManager")}function FM(t,e){e&&(t["X-Firebase-GMPID"]=e)}function VM(t,e){e!==null&&(t["X-Firebase-AppCheck"]=e)}function jM(t,e,n,r,i,s,o=!0){const a=bM(t.urlParams),l=t.url+a,c=Object.assign({},t.headers);return FM(c,e),OM(c,n),MM(c,s),VM(c,r),new LM(l,t.method,c,t.body,t.successCodes,t.additionalRetryCodes,t.handler,t.errorHandler,t.timeout,t.progressCallback,i,o)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function UM(t){if(t.length===0)return null;const e=t.lastIndexOf("/");return e===-1?"":t.slice(0,e)}function BM(t){const e=t.lastIndexOf("/",t.length-2);return e===-1?t:t.slice(e+1)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wc{constructor(e,n){this._service=e,n instanceof In?this._location=n:this._location=In.makeFromUrl(n,e.host)}toString(){return"gs://"+this._location.bucket+"/"+this._location.path}_newRef(e,n){return new Wc(e,n)}get root(){const e=new In(this._location.bucket,"");return this._newRef(this._service,e)}get bucket(){return this._location.bucket}get fullPath(){return this._location.path}get name(){return BM(this._location.path)}get storage(){return this._service}get parent(){const e=UM(this._location.path);if(e===null)return null;const n=new In(this._location.bucket,e);return new Wc(this._service,n)}_throwIfRoot(e){if(this._location.path==="")throw RM(e)}}function X0(t,e){const n=e==null?void 0:e[vM];return n==null?null:In.makeFromBucketSpec(n,t)}function zM(t,e,n,r={}){t.host=`${e}:${n}`,t._protocol="http";const{mockUserToken:i}=r;i&&(t._overrideAuthToken=typeof i=="string"?i:_g(i,t.app.options.projectId))}class WM{constructor(e,n,r,i,s){this.app=e,this._authProvider=n,this._appCheckProvider=r,this._url=i,this._firebaseVersion=s,this._bucket=null,this._host=yC,this._protocol="https",this._appId=null,this._deleted=!1,this._maxOperationRetryTime=wM,this._maxUploadRetryTime=AM,this._requests=new Set,i!=null?this._bucket=In.makeFromBucketSpec(i,this._host):this._bucket=X0(this._host,this.app.options)}get host(){return this._host}set host(e){this._host=e,this._url!=null?this._bucket=In.makeFromBucketSpec(this._url,e):this._bucket=X0(e,this.app.options)}get maxUploadRetryTime(){return this._maxUploadRetryTime}set maxUploadRetryTime(e){Y0("time",0,Number.POSITIVE_INFINITY,e),this._maxUploadRetryTime=e}get maxOperationRetryTime(){return this._maxOperationRetryTime}set maxOperationRetryTime(e){Y0("time",0,Number.POSITIVE_INFINITY,e),this._maxOperationRetryTime=e}async _getAuthToken(){if(this._overrideAuthToken)return this._overrideAuthToken;const e=this._authProvider.getImmediate({optional:!0});if(e){const n=await e.getToken();if(n!==null)return n.accessToken}return null}async _getAppCheckToken(){const e=this._appCheckProvider.getImmediate({optional:!0});return e?(await e.getToken()).token:null}_delete(){return this._deleted||(this._deleted=!0,this._requests.forEach(e=>e.cancel()),this._requests.clear()),Promise.resolve()}_makeStorageReference(e){return new Wc(this,e)}_makeRequest(e,n,r,i,s=!0){if(this._deleted)return new kM(vC());{const o=jM(e,this._appId,r,i,n,this._firebaseVersion,s);return this._requests.add(o),o.getPromise().then(()=>this._requests.delete(o),()=>this._requests.delete(o)),o}}async makeRequestWithTokens(e,n){const[r,i]=await Promise.all([this._getAuthToken(),this._getAppCheckToken()]);return this._makeRequest(e,n,r,i).getPromise()}}const J0="@firebase/storage",Z0="0.13.4";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wC="storage";function HM(t=Sl(),e){t=Fe(t);const r=Rr(t,wC).getImmediate({identifier:e}),i=gg("storage");return i&&qM(r,...i),r}function qM(t,e,n,r={}){zM(t,e,n,r)}function GM(t,{instanceIdentifier:e}){const n=t.getProvider("app").getImmediate(),r=t.getProvider("auth-internal"),i=t.getProvider("app-check-internal");return new WM(n,r,i,e,gi)}function KM(){pn(new tn(wC,GM,"PUBLIC").setMultipleInstances(!0)),Tt(J0,Z0,""),Tt(J0,Z0,"esm2017")}KM();var ew={};const tw="@firebase/database",nw="1.0.10";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let AC="";function $M(t){AC=t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class QM{constructor(e){this.domStorage_=e,this.prefix_="firebase:"}set(e,n){n==null?this.domStorage_.removeItem(this.prefixedName_(e)):this.domStorage_.setItem(this.prefixedName_(e),nt(n))}get(e){const n=this.domStorage_.getItem(this.prefixedName_(e));return n==null?null:Qa(n)}remove(e){this.domStorage_.removeItem(this.prefixedName_(e))}prefixedName_(e){return this.prefix_+e}toString(){return this.domStorage_.toString()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class YM{constructor(){this.cache_={},this.isInMemoryStorage=!0}set(e,n){n==null?delete this.cache_[e]:this.cache_[e]=n}get(e){return Sr(this.cache_,e)?this.cache_[e]:null}remove(e){delete this.cache_[e]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const EC=function(t){try{if(typeof window<"u"&&typeof window[t]<"u"){const e=window[t];return e.setItem("firebase:sentinel","cache"),e.removeItem("firebase:sentinel"),new QM(e)}}catch{}return new YM},Li=EC("localStorage"),XM=EC("sessionStorage");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zs=new Cl("@firebase/database"),JM=function(){let t=1;return function(){return t++}}(),TC=function(t){const e=xb(t),n=new Cb;n.update(e);const r=n.digest();return mg.encodeByteArray(r)},Pl=function(...t){let e="";for(let n=0;n<t.length;n++){const r=t[n];Array.isArray(r)||r&&typeof r=="object"&&typeof r.length=="number"?e+=Pl.apply(null,r):typeof r=="object"?e+=nt(r):e+=r,e+=" "}return e};let Aa=null,rw=!0;const ZM=function(t,e){B(!e,"Can't turn on custom loggers persistently."),zs.logLevel=ie.VERBOSE,Aa=zs.log.bind(zs)},At=function(...t){if(rw===!0&&(rw=!1,Aa===null&&XM.get("logging_enabled")===!0&&ZM()),Aa){const e=Pl.apply(null,t);Aa(e)}},bl=function(t){return function(...e){At(t,...e)}},jp=function(...t){const e="FIREBASE INTERNAL ERROR: "+Pl(...t);zs.error(e)},vr=function(...t){const e=`FIREBASE FATAL ERROR: ${Pl(...t)}`;throw zs.error(e),new Error(e)},Ht=function(...t){const e="FIREBASE WARNING: "+Pl(...t);zs.warn(e)},e4=function(){typeof window<"u"&&window.location&&window.location.protocol&&window.location.protocol.indexOf("https:")!==-1&&Ht("Insecure Firebase access from a secure page. Please use https in calls to new Firebase().")},IC=function(t){return typeof t=="number"&&(t!==t||t===Number.POSITIVE_INFINITY||t===Number.NEGATIVE_INFINITY)},t4=function(t){if(document.readyState==="complete")t();else{let e=!1;const n=function(){if(!document.body){setTimeout(n,Math.floor(10));return}e||(e=!0,t())};document.addEventListener?(document.addEventListener("DOMContentLoaded",n,!1),window.addEventListener("load",n,!1)):document.attachEvent&&(document.attachEvent("onreadystatechange",()=>{document.readyState==="complete"&&n()}),window.attachEvent("onload",n))}},eo="[MIN_NAME]",Yi="[MAX_NAME]",wo=function(t,e){if(t===e)return 0;if(t===eo||e===Yi)return-1;if(e===eo||t===Yi)return 1;{const n=iw(t),r=iw(e);return n!==null?r!==null?n-r===0?t.length-e.length:n-r:-1:r!==null?1:t<e?-1:1}},n4=function(t,e){return t===e?0:t<e?-1:1},Yo=function(t,e){if(e&&t in e)return e[t];throw new Error("Missing required key ("+t+") in object: "+nt(e))},Vg=function(t){if(typeof t!="object"||t===null)return nt(t);const e=[];for(const r in t)e.push(r);e.sort();let n="{";for(let r=0;r<e.length;r++)r!==0&&(n+=","),n+=nt(e[r]),n+=":",n+=Vg(t[e[r]]);return n+="}",n},CC=function(t,e){const n=t.length;if(n<=e)return[t];const r=[];for(let i=0;i<n;i+=e)i+e>n?r.push(t.substring(i,n)):r.push(t.substring(i,i+e));return r};function qt(t,e){for(const n in t)t.hasOwnProperty(n)&&e(n,t[n])}const SC=function(t){B(!IC(t),"Invalid JSON number");const e=11,n=52,r=(1<<e-1)-1;let i,s,o,a,l;t===0?(s=0,o=0,i=1/t===-1/0?1:0):(i=t<0,t=Math.abs(t),t>=Math.pow(2,1-r)?(a=Math.min(Math.floor(Math.log(t)/Math.LN2),r),s=a+r,o=Math.round(t*Math.pow(2,n-a)-Math.pow(2,n))):(s=0,o=Math.round(t/Math.pow(2,1-r-n))));const c=[];for(l=n;l;l-=1)c.push(o%2?1:0),o=Math.floor(o/2);for(l=e;l;l-=1)c.push(s%2?1:0),s=Math.floor(s/2);c.push(i?1:0),c.reverse();const h=c.join("");let f="";for(l=0;l<64;l+=8){let p=parseInt(h.substr(l,8),2).toString(16);p.length===1&&(p="0"+p),f=f+p}return f.toLowerCase()},r4=function(){return!!(typeof window=="object"&&window.chrome&&window.chrome.extension&&!/^chrome/.test(window.location.href))},i4=function(){return typeof Windows=="object"&&typeof Windows.UI=="object"};function s4(t,e){let n="Unknown Error";t==="too_big"?n="The data requested exceeds the maximum size that can be accessed with a single request.":t==="permission_denied"?n="Client doesn't have permission to access the desired data.":t==="unavailable"&&(n="The service is unavailable");const r=new Error(t+" at "+e._path.toString()+": "+n);return r.code=t.toUpperCase(),r}const o4=new RegExp("^-?(0*)\\d{1,10}$"),a4=-2147483648,l4=2147483647,iw=function(t){if(o4.test(t)){const e=Number(t);if(e>=a4&&e<=l4)return e}return null},Ao=function(t){try{t()}catch(e){setTimeout(()=>{const n=e.stack||"";throw Ht("Exception was thrown by user callback.",n),e},Math.floor(0))}},u4=function(){return(typeof window=="object"&&window.navigator&&window.navigator.userAgent||"").search(/googlebot|google webmaster tools|bingbot|yahoo! slurp|baiduspider|yandexbot|duckduckbot/i)>=0},Ea=function(t,e){const n=setTimeout(t,e);return typeof n=="number"&&typeof Deno<"u"&&Deno.unrefTimer?Deno.unrefTimer(n):typeof n=="object"&&n.unref&&n.unref(),n};/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class c4{constructor(e,n){this.appName_=e,this.appCheckProvider=n,this.appCheck=n==null?void 0:n.getImmediate({optional:!0}),this.appCheck||n==null||n.get().then(r=>this.appCheck=r)}getToken(e){return this.appCheck?this.appCheck.getToken(e):new Promise((n,r)=>{setTimeout(()=>{this.appCheck?this.getToken(e).then(n,r):n(null)},0)})}addTokenChangeListener(e){var n;(n=this.appCheckProvider)===null||n===void 0||n.get().then(r=>r.addTokenListener(e))}notifyForInvalidToken(){Ht(`Provided AppCheck credentials for the app named "${this.appName_}" are invalid. This usually indicates your app was not initialized correctly.`)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class h4{constructor(e,n,r){this.appName_=e,this.firebaseOptions_=n,this.authProvider_=r,this.auth_=null,this.auth_=r.getImmediate({optional:!0}),this.auth_||r.onInit(i=>this.auth_=i)}getToken(e){return this.auth_?this.auth_.getToken(e).catch(n=>n&&n.code==="auth/token-not-initialized"?(At("Got auth/token-not-initialized error.  Treating as null token."),null):Promise.reject(n)):new Promise((n,r)=>{setTimeout(()=>{this.auth_?this.getToken(e).then(n,r):n(null)},0)})}addTokenChangeListener(e){this.auth_?this.auth_.addAuthTokenListener(e):this.authProvider_.get().then(n=>n.addAuthTokenListener(e))}removeTokenChangeListener(e){this.authProvider_.get().then(n=>n.removeAuthTokenListener(e))}notifyForInvalidToken(){let e='Provided authentication credentials for the app named "'+this.appName_+'" are invalid. This usually indicates your app was not initialized correctly. ';"credential"in this.firebaseOptions_?e+='Make sure the "credential" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':"serviceAccount"in this.firebaseOptions_?e+='Make sure the "serviceAccount" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':e+='Make sure the "apiKey" and "databaseURL" properties provided to initializeApp() match the values provided for your app at https://console.firebase.google.com/.',Ht(e)}}class Ju{constructor(e){this.accessToken=e}getToken(e){return Promise.resolve({accessToken:this.accessToken})}addTokenChangeListener(e){e(this.accessToken)}removeTokenChangeListener(e){}notifyForInvalidToken(){}}Ju.OWNER="owner";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jg="5",RC="v",kC="s",xC="r",NC="f",PC=/(console\.firebase|firebase-console-\w+\.corp|firebase\.corp)\.google\.com/,bC="ls",DC="p",Up="ac",LC="websocket",OC="long_polling";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class MC{constructor(e,n,r,i,s=!1,o="",a=!1,l=!1){this.secure=n,this.namespace=r,this.webSocketOnly=i,this.nodeAdmin=s,this.persistenceKey=o,this.includeNamespaceInQueryParams=a,this.isUsingEmulator=l,this._host=e.toLowerCase(),this._domain=this._host.substr(this._host.indexOf(".")+1),this.internalHost=Li.get("host:"+e)||this._host}isCacheableHost(){return this.internalHost.substr(0,2)==="s-"}isCustomHost(){return this._domain!=="firebaseio.com"&&this._domain!=="firebaseio-demo.com"}get host(){return this._host}set host(e){e!==this.internalHost&&(this.internalHost=e,this.isCacheableHost()&&Li.set("host:"+this._host,this.internalHost))}toString(){let e=this.toURLString();return this.persistenceKey&&(e+="<"+this.persistenceKey+">"),e}toURLString(){const e=this.secure?"https://":"http://",n=this.includeNamespaceInQueryParams?`?ns=${this.namespace}`:"";return`${e}${this.host}/${n}`}}function d4(t){return t.host!==t.internalHost||t.isCustomHost()||t.includeNamespaceInQueryParams}function FC(t,e,n){B(typeof e=="string","typeof type must == string"),B(typeof n=="object","typeof params must == object");let r;if(e===LC)r=(t.secure?"wss://":"ws://")+t.internalHost+"/.ws?";else if(e===OC)r=(t.secure?"https://":"http://")+t.internalHost+"/.lp?";else throw new Error("Unknown connection type: "+e);d4(t)&&(n.ns=t.namespace);const i=[];return qt(n,(s,o)=>{i.push(s+"="+o)}),r+i.join("&")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class f4{constructor(){this.counters_={}}incrementCounter(e,n=1){Sr(this.counters_,e)||(this.counters_[e]=0),this.counters_[e]+=n}get(){return ub(this.counters_)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Af={},Ef={};function Ug(t){const e=t.toString();return Af[e]||(Af[e]=new f4),Af[e]}function p4(t,e){const n=t.toString();return Ef[n]||(Ef[n]=e()),Ef[n]}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class m4{constructor(e){this.onMessage_=e,this.pendingResponses=[],this.currentResponseNum=0,this.closeAfterResponse=-1,this.onClose=null}closeAfter(e,n){this.closeAfterResponse=e,this.onClose=n,this.closeAfterResponse<this.currentResponseNum&&(this.onClose(),this.onClose=null)}handleResponse(e,n){for(this.pendingResponses[e]=n;this.pendingResponses[this.currentResponseNum];){const r=this.pendingResponses[this.currentResponseNum];delete this.pendingResponses[this.currentResponseNum];for(let i=0;i<r.length;++i)r[i]&&Ao(()=>{this.onMessage_(r[i])});if(this.currentResponseNum===this.closeAfterResponse){this.onClose&&(this.onClose(),this.onClose=null);break}this.currentResponseNum++}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const sw="start",g4="close",_4="pLPCommand",y4="pRTLPCB",VC="id",jC="pw",UC="ser",v4="cb",w4="seg",A4="ts",E4="d",T4="dframe",BC=1870,zC=30,I4=BC-zC,C4=25e3,S4=3e4;class Ps{constructor(e,n,r,i,s,o,a){this.connId=e,this.repoInfo=n,this.applicationId=r,this.appCheckToken=i,this.authToken=s,this.transportSessionId=o,this.lastSessionId=a,this.bytesSent=0,this.bytesReceived=0,this.everConnected_=!1,this.log_=bl(e),this.stats_=Ug(n),this.urlFn=l=>(this.appCheckToken&&(l[Up]=this.appCheckToken),FC(n,OC,l))}open(e,n){this.curSegmentNum=0,this.onDisconnect_=n,this.myPacketOrderer=new m4(e),this.isClosed_=!1,this.connectTimeoutTimer_=setTimeout(()=>{this.log_("Timed out trying to connect."),this.onClosed_(),this.connectTimeoutTimer_=null},Math.floor(S4)),t4(()=>{if(this.isClosed_)return;this.scriptTagHolder=new Bg((...s)=>{const[o,a,l,c,h]=s;if(this.incrementIncomingBytes_(s),!!this.scriptTagHolder)if(this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null),this.everConnected_=!0,o===sw)this.id=a,this.password=l;else if(o===g4)a?(this.scriptTagHolder.sendNewPolls=!1,this.myPacketOrderer.closeAfter(a,()=>{this.onClosed_()})):this.onClosed_();else throw new Error("Unrecognized command received: "+o)},(...s)=>{const[o,a]=s;this.incrementIncomingBytes_(s),this.myPacketOrderer.handleResponse(o,a)},()=>{this.onClosed_()},this.urlFn);const r={};r[sw]="t",r[UC]=Math.floor(Math.random()*1e8),this.scriptTagHolder.uniqueCallbackIdentifier&&(r[v4]=this.scriptTagHolder.uniqueCallbackIdentifier),r[RC]=jg,this.transportSessionId&&(r[kC]=this.transportSessionId),this.lastSessionId&&(r[bC]=this.lastSessionId),this.applicationId&&(r[DC]=this.applicationId),this.appCheckToken&&(r[Up]=this.appCheckToken),typeof location<"u"&&location.hostname&&PC.test(location.hostname)&&(r[xC]=NC);const i=this.urlFn(r);this.log_("Connecting via long-poll to "+i),this.scriptTagHolder.addTag(i,()=>{})})}start(){this.scriptTagHolder.startLongPoll(this.id,this.password),this.addDisconnectPingFrame(this.id,this.password)}static forceAllow(){Ps.forceAllow_=!0}static forceDisallow(){Ps.forceDisallow_=!0}static isAvailable(){return Ps.forceAllow_?!0:!Ps.forceDisallow_&&typeof document<"u"&&document.createElement!=null&&!r4()&&!i4()}markConnectionHealthy(){}shutdown_(){this.isClosed_=!0,this.scriptTagHolder&&(this.scriptTagHolder.close(),this.scriptTagHolder=null),this.myDisconnFrame&&(document.body.removeChild(this.myDisconnFrame),this.myDisconnFrame=null),this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null)}onClosed_(){this.isClosed_||(this.log_("Longpoll is closing itself"),this.shutdown_(),this.onDisconnect_&&(this.onDisconnect_(this.everConnected_),this.onDisconnect_=null))}close(){this.isClosed_||(this.log_("Longpoll is being closed."),this.shutdown_())}send(e){const n=nt(e);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const r=XT(n),i=CC(r,I4);for(let s=0;s<i.length;s++)this.scriptTagHolder.enqueueSegment(this.curSegmentNum,i.length,i[s]),this.curSegmentNum++}addDisconnectPingFrame(e,n){this.myDisconnFrame=document.createElement("iframe");const r={};r[T4]="t",r[VC]=e,r[jC]=n,this.myDisconnFrame.src=this.urlFn(r),this.myDisconnFrame.style.display="none",document.body.appendChild(this.myDisconnFrame)}incrementIncomingBytes_(e){const n=nt(e).length;this.bytesReceived+=n,this.stats_.incrementCounter("bytes_received",n)}}class Bg{constructor(e,n,r,i){this.onDisconnect=r,this.urlFn=i,this.outstandingRequests=new Set,this.pendingSegs=[],this.currentSerial=Math.floor(Math.random()*1e8),this.sendNewPolls=!0;{this.uniqueCallbackIdentifier=JM(),window[_4+this.uniqueCallbackIdentifier]=e,window[y4+this.uniqueCallbackIdentifier]=n,this.myIFrame=Bg.createIFrame_();let s="";this.myIFrame.src&&this.myIFrame.src.substr(0,11)==="javascript:"&&(s='<script>document.domain="'+document.domain+'";<\/script>');const o="<html><body>"+s+"</body></html>";try{this.myIFrame.doc.open(),this.myIFrame.doc.write(o),this.myIFrame.doc.close()}catch(a){At("frame writing exception"),a.stack&&At(a.stack),At(a)}}}static createIFrame_(){const e=document.createElement("iframe");if(e.style.display="none",document.body){document.body.appendChild(e);try{e.contentWindow.document||At("No IE domain setting required")}catch{const r=document.domain;e.src="javascript:void((function(){document.open();document.domain='"+r+"';document.close();})())"}}else throw"Document body has not initialized. Wait to initialize Firebase until after the document is ready.";return e.contentDocument?e.doc=e.contentDocument:e.contentWindow?e.doc=e.contentWindow.document:e.document&&(e.doc=e.document),e}close(){this.alive=!1,this.myIFrame&&(this.myIFrame.doc.body.textContent="",setTimeout(()=>{this.myIFrame!==null&&(document.body.removeChild(this.myIFrame),this.myIFrame=null)},Math.floor(0)));const e=this.onDisconnect;e&&(this.onDisconnect=null,e())}startLongPoll(e,n){for(this.myID=e,this.myPW=n,this.alive=!0;this.newRequest_(););}newRequest_(){if(this.alive&&this.sendNewPolls&&this.outstandingRequests.size<(this.pendingSegs.length>0?2:1)){this.currentSerial++;const e={};e[VC]=this.myID,e[jC]=this.myPW,e[UC]=this.currentSerial;let n=this.urlFn(e),r="",i=0;for(;this.pendingSegs.length>0&&this.pendingSegs[0].d.length+zC+r.length<=BC;){const o=this.pendingSegs.shift();r=r+"&"+w4+i+"="+o.seg+"&"+A4+i+"="+o.ts+"&"+E4+i+"="+o.d,i++}return n=n+r,this.addLongPollTag_(n,this.currentSerial),!0}else return!1}enqueueSegment(e,n,r){this.pendingSegs.push({seg:e,ts:n,d:r}),this.alive&&this.newRequest_()}addLongPollTag_(e,n){this.outstandingRequests.add(n);const r=()=>{this.outstandingRequests.delete(n),this.newRequest_()},i=setTimeout(r,Math.floor(C4)),s=()=>{clearTimeout(i),r()};this.addTag(e,s)}addTag(e,n){setTimeout(()=>{try{if(!this.sendNewPolls)return;const r=this.myIFrame.doc.createElement("script");r.type="text/javascript",r.async=!0,r.src=e,r.onload=r.onreadystatechange=function(){const i=r.readyState;(!i||i==="loaded"||i==="complete")&&(r.onload=r.onreadystatechange=null,r.parentNode&&r.parentNode.removeChild(r),n())},r.onerror=()=>{At("Long-poll script failed to load: "+e),this.sendNewPolls=!1,this.close()},this.myIFrame.doc.body.appendChild(r)}catch{}},Math.floor(1))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const R4=16384,k4=45e3;let Hc=null;typeof MozWebSocket<"u"?Hc=MozWebSocket:typeof WebSocket<"u"&&(Hc=WebSocket);class En{constructor(e,n,r,i,s,o,a){this.connId=e,this.applicationId=r,this.appCheckToken=i,this.authToken=s,this.keepaliveTimer=null,this.frames=null,this.totalFrames=0,this.bytesSent=0,this.bytesReceived=0,this.log_=bl(this.connId),this.stats_=Ug(n),this.connURL=En.connectionURL_(n,o,a,i,r),this.nodeAdmin=n.nodeAdmin}static connectionURL_(e,n,r,i,s){const o={};return o[RC]=jg,typeof location<"u"&&location.hostname&&PC.test(location.hostname)&&(o[xC]=NC),n&&(o[kC]=n),r&&(o[bC]=r),i&&(o[Up]=i),s&&(o[DC]=s),FC(e,LC,o)}open(e,n){this.onDisconnect=n,this.onMessage=e,this.log_("Websocket connecting to "+this.connURL),this.everConnected_=!1,Li.set("previous_websocket_failure",!0);try{let r;iI(),this.mySock=new Hc(this.connURL,[],r)}catch(r){this.log_("Error instantiating WebSocket.");const i=r.message||r.data;i&&this.log_(i),this.onClosed_();return}this.mySock.onopen=()=>{this.log_("Websocket connected."),this.everConnected_=!0},this.mySock.onclose=()=>{this.log_("Websocket connection was disconnected."),this.mySock=null,this.onClosed_()},this.mySock.onmessage=r=>{this.handleIncomingFrame(r)},this.mySock.onerror=r=>{this.log_("WebSocket error.  Closing connection.");const i=r.message||r.data;i&&this.log_(i),this.onClosed_()}}start(){}static forceDisallow(){En.forceDisallow_=!0}static isAvailable(){let e=!1;if(typeof navigator<"u"&&navigator.userAgent){const n=/Android ([0-9]{0,}\.[0-9]{0,})/,r=navigator.userAgent.match(n);r&&r.length>1&&parseFloat(r[1])<4.4&&(e=!0)}return!e&&Hc!==null&&!En.forceDisallow_}static previouslyFailed(){return Li.isInMemoryStorage||Li.get("previous_websocket_failure")===!0}markConnectionHealthy(){Li.remove("previous_websocket_failure")}appendFrame_(e){if(this.frames.push(e),this.frames.length===this.totalFrames){const n=this.frames.join("");this.frames=null;const r=Qa(n);this.onMessage(r)}}handleNewFrameCount_(e){this.totalFrames=e,this.frames=[]}extractFrameCount_(e){if(B(this.frames===null,"We already have a frame buffer"),e.length<=6){const n=Number(e);if(!isNaN(n))return this.handleNewFrameCount_(n),null}return this.handleNewFrameCount_(1),e}handleIncomingFrame(e){if(this.mySock===null)return;const n=e.data;if(this.bytesReceived+=n.length,this.stats_.incrementCounter("bytes_received",n.length),this.resetKeepAlive(),this.frames!==null)this.appendFrame_(n);else{const r=this.extractFrameCount_(n);r!==null&&this.appendFrame_(r)}}send(e){this.resetKeepAlive();const n=nt(e);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const r=CC(n,R4);r.length>1&&this.sendString_(String(r.length));for(let i=0;i<r.length;i++)this.sendString_(r[i])}shutdown_(){this.isClosed_=!0,this.keepaliveTimer&&(clearInterval(this.keepaliveTimer),this.keepaliveTimer=null),this.mySock&&(this.mySock.close(),this.mySock=null)}onClosed_(){this.isClosed_||(this.log_("WebSocket is closing itself"),this.shutdown_(),this.onDisconnect&&(this.onDisconnect(this.everConnected_),this.onDisconnect=null))}close(){this.isClosed_||(this.log_("WebSocket is being closed"),this.shutdown_())}resetKeepAlive(){clearInterval(this.keepaliveTimer),this.keepaliveTimer=setInterval(()=>{this.mySock&&this.sendString_("0"),this.resetKeepAlive()},Math.floor(k4))}sendString_(e){try{this.mySock.send(e)}catch(n){this.log_("Exception thrown from WebSocket.send():",n.message||n.data,"Closing connection."),setTimeout(this.onClosed_.bind(this),0)}}}En.responsesRequiredToBeHealthy=2;En.healthyTimeout=3e4;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class el{static get ALL_TRANSPORTS(){return[Ps,En]}static get IS_TRANSPORT_INITIALIZED(){return this.globalTransportInitialized_}constructor(e){this.initTransports_(e)}initTransports_(e){const n=En&&En.isAvailable();let r=n&&!En.previouslyFailed();if(e.webSocketOnly&&(n||Ht("wss:// URL used, but browser isn't known to support websockets.  Trying anyway."),r=!0),r)this.transports_=[En];else{const i=this.transports_=[];for(const s of el.ALL_TRANSPORTS)s&&s.isAvailable()&&i.push(s);el.globalTransportInitialized_=!0}}initialTransport(){if(this.transports_.length>0)return this.transports_[0];throw new Error("No transports available")}upgradeTransport(){return this.transports_.length>1?this.transports_[1]:null}}el.globalTransportInitialized_=!1;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const x4=6e4,N4=5e3,P4=10*1024,b4=100*1024,Tf="t",ow="d",D4="s",aw="r",L4="e",lw="o",uw="a",cw="n",hw="p",O4="h";class M4{constructor(e,n,r,i,s,o,a,l,c,h){this.id=e,this.repoInfo_=n,this.applicationId_=r,this.appCheckToken_=i,this.authToken_=s,this.onMessage_=o,this.onReady_=a,this.onDisconnect_=l,this.onKill_=c,this.lastSessionId=h,this.connectionCount=0,this.pendingDataMessages=[],this.state_=0,this.log_=bl("c:"+this.id+":"),this.transportManager_=new el(n),this.log_("Connection created"),this.start_()}start_(){const e=this.transportManager_.initialTransport();this.conn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,null,this.lastSessionId),this.primaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.conn_),r=this.disconnReceiver_(this.conn_);this.tx_=this.conn_,this.rx_=this.conn_,this.secondaryConn_=null,this.isHealthy_=!1,setTimeout(()=>{this.conn_&&this.conn_.open(n,r)},Math.floor(0));const i=e.healthyTimeout||0;i>0&&(this.healthyTimeout_=Ea(()=>{this.healthyTimeout_=null,this.isHealthy_||(this.conn_&&this.conn_.bytesReceived>b4?(this.log_("Connection exceeded healthy timeout but has received "+this.conn_.bytesReceived+" bytes.  Marking connection healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()):this.conn_&&this.conn_.bytesSent>P4?this.log_("Connection exceeded healthy timeout but has sent "+this.conn_.bytesSent+" bytes.  Leaving connection alive."):(this.log_("Closing unhealthy connection after timeout."),this.close()))},Math.floor(i)))}nextTransportId_(){return"c:"+this.id+":"+this.connectionCount++}disconnReceiver_(e){return n=>{e===this.conn_?this.onConnectionLost_(n):e===this.secondaryConn_?(this.log_("Secondary connection lost."),this.onSecondaryConnectionLost_()):this.log_("closing an old connection")}}connReceiver_(e){return n=>{this.state_!==2&&(e===this.rx_?this.onPrimaryMessageReceived_(n):e===this.secondaryConn_?this.onSecondaryMessageReceived_(n):this.log_("message on old connection"))}}sendRequest(e){const n={t:"d",d:e};this.sendData_(n)}tryCleanupConnection(){this.tx_===this.secondaryConn_&&this.rx_===this.secondaryConn_&&(this.log_("cleaning up and promoting a connection: "+this.secondaryConn_.connId),this.conn_=this.secondaryConn_,this.secondaryConn_=null)}onSecondaryControl_(e){if(Tf in e){const n=e[Tf];n===uw?this.upgradeIfSecondaryHealthy_():n===aw?(this.log_("Got a reset on secondary, closing it"),this.secondaryConn_.close(),(this.tx_===this.secondaryConn_||this.rx_===this.secondaryConn_)&&this.close()):n===lw&&(this.log_("got pong on secondary."),this.secondaryResponsesRequired_--,this.upgradeIfSecondaryHealthy_())}}onSecondaryMessageReceived_(e){const n=Yo("t",e),r=Yo("d",e);if(n==="c")this.onSecondaryControl_(r);else if(n==="d")this.pendingDataMessages.push(r);else throw new Error("Unknown protocol layer: "+n)}upgradeIfSecondaryHealthy_(){this.secondaryResponsesRequired_<=0?(this.log_("Secondary connection is healthy."),this.isHealthy_=!0,this.secondaryConn_.markConnectionHealthy(),this.proceedWithUpgrade_()):(this.log_("sending ping on secondary."),this.secondaryConn_.send({t:"c",d:{t:hw,d:{}}}))}proceedWithUpgrade_(){this.secondaryConn_.start(),this.log_("sending client ack on secondary"),this.secondaryConn_.send({t:"c",d:{t:uw,d:{}}}),this.log_("Ending transmission on primary"),this.conn_.send({t:"c",d:{t:cw,d:{}}}),this.tx_=this.secondaryConn_,this.tryCleanupConnection()}onPrimaryMessageReceived_(e){const n=Yo("t",e),r=Yo("d",e);n==="c"?this.onControl_(r):n==="d"&&this.onDataMessage_(r)}onDataMessage_(e){this.onPrimaryResponse_(),this.onMessage_(e)}onPrimaryResponse_(){this.isHealthy_||(this.primaryResponsesRequired_--,this.primaryResponsesRequired_<=0&&(this.log_("Primary connection is healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()))}onControl_(e){const n=Yo(Tf,e);if(ow in e){const r=e[ow];if(n===O4){const i=Object.assign({},r);this.repoInfo_.isUsingEmulator&&(i.h=this.repoInfo_.host),this.onHandshake_(i)}else if(n===cw){this.log_("recvd end transmission on primary"),this.rx_=this.secondaryConn_;for(let i=0;i<this.pendingDataMessages.length;++i)this.onDataMessage_(this.pendingDataMessages[i]);this.pendingDataMessages=[],this.tryCleanupConnection()}else n===D4?this.onConnectionShutdown_(r):n===aw?this.onReset_(r):n===L4?jp("Server Error: "+r):n===lw?(this.log_("got pong on primary."),this.onPrimaryResponse_(),this.sendPingOnPrimaryIfNecessary_()):jp("Unknown control packet command: "+n)}}onHandshake_(e){const n=e.ts,r=e.v,i=e.h;this.sessionId=e.s,this.repoInfo_.host=i,this.state_===0&&(this.conn_.start(),this.onConnectionEstablished_(this.conn_,n),jg!==r&&Ht("Protocol version mismatch detected"),this.tryStartUpgrade_())}tryStartUpgrade_(){const e=this.transportManager_.upgradeTransport();e&&this.startUpgrade_(e)}startUpgrade_(e){this.secondaryConn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,this.sessionId),this.secondaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.secondaryConn_),r=this.disconnReceiver_(this.secondaryConn_);this.secondaryConn_.open(n,r),Ea(()=>{this.secondaryConn_&&(this.log_("Timed out trying to upgrade."),this.secondaryConn_.close())},Math.floor(x4))}onReset_(e){this.log_("Reset packet received.  New host: "+e),this.repoInfo_.host=e,this.state_===1?this.close():(this.closeConnections_(),this.start_())}onConnectionEstablished_(e,n){this.log_("Realtime connection established."),this.conn_=e,this.state_=1,this.onReady_&&(this.onReady_(n,this.sessionId),this.onReady_=null),this.primaryResponsesRequired_===0?(this.log_("Primary connection is healthy."),this.isHealthy_=!0):Ea(()=>{this.sendPingOnPrimaryIfNecessary_()},Math.floor(N4))}sendPingOnPrimaryIfNecessary_(){!this.isHealthy_&&this.state_===1&&(this.log_("sending ping on primary."),this.sendData_({t:"c",d:{t:hw,d:{}}}))}onSecondaryConnectionLost_(){const e=this.secondaryConn_;this.secondaryConn_=null,(this.tx_===e||this.rx_===e)&&this.close()}onConnectionLost_(e){this.conn_=null,!e&&this.state_===0?(this.log_("Realtime connection failed."),this.repoInfo_.isCacheableHost()&&(Li.remove("host:"+this.repoInfo_.host),this.repoInfo_.internalHost=this.repoInfo_.host)):this.state_===1&&this.log_("Realtime connection lost."),this.close()}onConnectionShutdown_(e){this.log_("Connection shutdown command received. Shutting down..."),this.onKill_&&(this.onKill_(e),this.onKill_=null),this.onDisconnect_=null,this.close()}sendData_(e){if(this.state_!==1)throw"Connection is not connected";this.tx_.send(e)}close(){this.state_!==2&&(this.log_("Closing realtime connection."),this.state_=2,this.closeConnections_(),this.onDisconnect_&&(this.onDisconnect_(),this.onDisconnect_=null))}closeConnections_(){this.log_("Shutting down all connections"),this.conn_&&(this.conn_.close(),this.conn_=null),this.secondaryConn_&&(this.secondaryConn_.close(),this.secondaryConn_=null),this.healthyTimeout_&&(clearTimeout(this.healthyTimeout_),this.healthyTimeout_=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class WC{put(e,n,r,i){}merge(e,n,r,i){}refreshAuthToken(e){}refreshAppCheckToken(e){}onDisconnectPut(e,n,r){}onDisconnectMerge(e,n,r){}onDisconnectCancel(e,n){}reportStats(e){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class HC{constructor(e){this.allowedEvents_=e,this.listeners_={},B(Array.isArray(e)&&e.length>0,"Requires a non-empty array")}trigger(e,...n){if(Array.isArray(this.listeners_[e])){const r=[...this.listeners_[e]];for(let i=0;i<r.length;i++)r[i].callback.apply(r[i].context,n)}}on(e,n,r){this.validateEventType_(e),this.listeners_[e]=this.listeners_[e]||[],this.listeners_[e].push({callback:n,context:r});const i=this.getInitialEvent(e);i&&n.apply(r,i)}off(e,n,r){this.validateEventType_(e);const i=this.listeners_[e]||[];for(let s=0;s<i.length;s++)if(i[s].callback===n&&(!r||r===i[s].context)){i.splice(s,1);return}}validateEventType_(e){B(this.allowedEvents_.find(n=>n===e),"Unknown event: "+e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qc extends HC{static getInstance(){return new qc}constructor(){super(["online"]),this.online_=!0,typeof window<"u"&&typeof window.addEventListener<"u"&&!yg()&&(window.addEventListener("online",()=>{this.online_||(this.online_=!0,this.trigger("online",!0))},!1),window.addEventListener("offline",()=>{this.online_&&(this.online_=!1,this.trigger("online",!1))},!1))}getInitialEvent(e){return B(e==="online","Unknown event type: "+e),[this.online_]}currentlyOnline(){return this.online_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const dw=32,fw=768;class we{constructor(e,n){if(n===void 0){this.pieces_=e.split("/");let r=0;for(let i=0;i<this.pieces_.length;i++)this.pieces_[i].length>0&&(this.pieces_[r]=this.pieces_[i],r++);this.pieces_.length=r,this.pieceNum_=0}else this.pieces_=e,this.pieceNum_=n}toString(){let e="";for(let n=this.pieceNum_;n<this.pieces_.length;n++)this.pieces_[n]!==""&&(e+="/"+this.pieces_[n]);return e||"/"}}function me(){return new we("")}function ne(t){return t.pieceNum_>=t.pieces_.length?null:t.pieces_[t.pieceNum_]}function si(t){return t.pieces_.length-t.pieceNum_}function Ae(t){let e=t.pieceNum_;return e<t.pieces_.length&&e++,new we(t.pieces_,e)}function qC(t){return t.pieceNum_<t.pieces_.length?t.pieces_[t.pieces_.length-1]:null}function F4(t){let e="";for(let n=t.pieceNum_;n<t.pieces_.length;n++)t.pieces_[n]!==""&&(e+="/"+encodeURIComponent(String(t.pieces_[n])));return e||"/"}function GC(t,e=0){return t.pieces_.slice(t.pieceNum_+e)}function KC(t){if(t.pieceNum_>=t.pieces_.length)return null;const e=[];for(let n=t.pieceNum_;n<t.pieces_.length-1;n++)e.push(t.pieces_[n]);return new we(e,0)}function Ke(t,e){const n=[];for(let r=t.pieceNum_;r<t.pieces_.length;r++)n.push(t.pieces_[r]);if(e instanceof we)for(let r=e.pieceNum_;r<e.pieces_.length;r++)n.push(e.pieces_[r]);else{const r=e.split("/");for(let i=0;i<r.length;i++)r[i].length>0&&n.push(r[i])}return new we(n,0)}function se(t){return t.pieceNum_>=t.pieces_.length}function jt(t,e){const n=ne(t),r=ne(e);if(n===null)return e;if(n===r)return jt(Ae(t),Ae(e));throw new Error("INTERNAL ERROR: innerPath ("+e+") is not within outerPath ("+t+")")}function zg(t,e){if(si(t)!==si(e))return!1;for(let n=t.pieceNum_,r=e.pieceNum_;n<=t.pieces_.length;n++,r++)if(t.pieces_[n]!==e.pieces_[r])return!1;return!0}function Cn(t,e){let n=t.pieceNum_,r=e.pieceNum_;if(si(t)>si(e))return!1;for(;n<t.pieces_.length;){if(t.pieces_[n]!==e.pieces_[r])return!1;++n,++r}return!0}class V4{constructor(e,n){this.errorPrefix_=n,this.parts_=GC(e,0),this.byteLength_=Math.max(1,this.parts_.length);for(let r=0;r<this.parts_.length;r++)this.byteLength_+=Oh(this.parts_[r]);$C(this)}}function j4(t,e){t.parts_.length>0&&(t.byteLength_+=1),t.parts_.push(e),t.byteLength_+=Oh(e),$C(t)}function U4(t){const e=t.parts_.pop();t.byteLength_-=Oh(e),t.parts_.length>0&&(t.byteLength_-=1)}function $C(t){if(t.byteLength_>fw)throw new Error(t.errorPrefix_+"has a key path longer than "+fw+" bytes ("+t.byteLength_+").");if(t.parts_.length>dw)throw new Error(t.errorPrefix_+"path specified exceeds the maximum depth that can be written ("+dw+") or object contains a cycle "+ki(t))}function ki(t){return t.parts_.length===0?"":"in property '"+t.parts_.join(".")+"'"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wg extends HC{static getInstance(){return new Wg}constructor(){super(["visible"]);let e,n;typeof document<"u"&&typeof document.addEventListener<"u"&&(typeof document.hidden<"u"?(n="visibilitychange",e="hidden"):typeof document.mozHidden<"u"?(n="mozvisibilitychange",e="mozHidden"):typeof document.msHidden<"u"?(n="msvisibilitychange",e="msHidden"):typeof document.webkitHidden<"u"&&(n="webkitvisibilitychange",e="webkitHidden")),this.visible_=!0,n&&document.addEventListener(n,()=>{const r=!document[e];r!==this.visible_&&(this.visible_=r,this.trigger("visible",r))},!1)}getInitialEvent(e){return B(e==="visible","Unknown event type: "+e),[this.visible_]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Xo=1e3,B4=60*5*1e3,pw=30*1e3,z4=1.3,W4=3e4,H4="server_kill",mw=3;class hr extends WC{constructor(e,n,r,i,s,o,a,l){if(super(),this.repoInfo_=e,this.applicationId_=n,this.onDataUpdate_=r,this.onConnectStatus_=i,this.onServerInfoUpdate_=s,this.authTokenProvider_=o,this.appCheckTokenProvider_=a,this.authOverride_=l,this.id=hr.nextPersistentConnectionId_++,this.log_=bl("p:"+this.id+":"),this.interruptReasons_={},this.listens=new Map,this.outstandingPuts_=[],this.outstandingGets_=[],this.outstandingPutCount_=0,this.outstandingGetCount_=0,this.onDisconnectRequestQueue_=[],this.connected_=!1,this.reconnectDelay_=Xo,this.maxReconnectDelay_=B4,this.securityDebugCallback_=null,this.lastSessionId=null,this.establishConnectionTimer_=null,this.visible_=!1,this.requestCBHash_={},this.requestNumber_=0,this.realtime_=null,this.authToken_=null,this.appCheckToken_=null,this.forceTokenRefresh_=!1,this.invalidAuthTokenCount_=0,this.invalidAppCheckTokenCount_=0,this.firstConnection_=!0,this.lastConnectionAttemptTime_=null,this.lastConnectionEstablishedTime_=null,l&&!iI())throw new Error("Auth override specified in options, but not supported on non Node.js platforms");Wg.getInstance().on("visible",this.onVisible_,this),e.host.indexOf("fblocal")===-1&&qc.getInstance().on("online",this.onOnline_,this)}sendRequest(e,n,r){const i=++this.requestNumber_,s={r:i,a:e,b:n};this.log_(nt(s)),B(this.connected_,"sendRequest call when we're not connected not allowed."),this.realtime_.sendRequest(s),r&&(this.requestCBHash_[i]=r)}get(e){this.initConnection_();const n=new Lh,i={action:"g",request:{p:e._path.toString(),q:e._queryObject},onComplete:o=>{const a=o.d;o.s==="ok"?n.resolve(a):n.reject(a)}};this.outstandingGets_.push(i),this.outstandingGetCount_++;const s=this.outstandingGets_.length-1;return this.connected_&&this.sendGet_(s),n.promise}listen(e,n,r,i){this.initConnection_();const s=e._queryIdentifier,o=e._path.toString();this.log_("Listen called for "+o+" "+s),this.listens.has(o)||this.listens.set(o,new Map),B(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"listen() called for non-default but complete query"),B(!this.listens.get(o).has(s),"listen() called twice for same path/queryId.");const a={onComplete:i,hashFn:n,query:e,tag:r};this.listens.get(o).set(s,a),this.connected_&&this.sendListen_(a)}sendGet_(e){const n=this.outstandingGets_[e];this.sendRequest("g",n.request,r=>{delete this.outstandingGets_[e],this.outstandingGetCount_--,this.outstandingGetCount_===0&&(this.outstandingGets_=[]),n.onComplete&&n.onComplete(r)})}sendListen_(e){const n=e.query,r=n._path.toString(),i=n._queryIdentifier;this.log_("Listen on "+r+" for "+i);const s={p:r},o="q";e.tag&&(s.q=n._queryObject,s.t=e.tag),s.h=e.hashFn(),this.sendRequest(o,s,a=>{const l=a.d,c=a.s;hr.warnOnListenWarnings_(l,n),(this.listens.get(r)&&this.listens.get(r).get(i))===e&&(this.log_("listen response",a),c!=="ok"&&this.removeListen_(r,i),e.onComplete&&e.onComplete(c,l))})}static warnOnListenWarnings_(e,n){if(e&&typeof e=="object"&&Sr(e,"w")){const r=Zs(e,"w");if(Array.isArray(r)&&~r.indexOf("no_index")){const i='".indexOn": "'+n._queryParams.getIndex().toString()+'"',s=n._path.toString();Ht(`Using an unspecified index. Your data will be downloaded and filtered on the client. Consider adding ${i} at ${s} to your security rules for better performance.`)}}}refreshAuthToken(e){this.authToken_=e,this.log_("Auth token refreshed"),this.authToken_?this.tryAuth():this.connected_&&this.sendRequest("unauth",{},()=>{}),this.reduceReconnectDelayIfAdminCredential_(e)}reduceReconnectDelayIfAdminCredential_(e){(e&&e.length===40||Ib(e))&&(this.log_("Admin auth credential detected.  Reducing max reconnect time."),this.maxReconnectDelay_=pw)}refreshAppCheckToken(e){this.appCheckToken_=e,this.log_("App check token refreshed"),this.appCheckToken_?this.tryAppCheck():this.connected_&&this.sendRequest("unappeck",{},()=>{})}tryAuth(){if(this.connected_&&this.authToken_){const e=this.authToken_,n=Tb(e)?"auth":"gauth",r={cred:e};this.authOverride_===null?r.noauth=!0:typeof this.authOverride_=="object"&&(r.authvar=this.authOverride_),this.sendRequest(n,r,i=>{const s=i.s,o=i.d||"error";this.authToken_===e&&(s==="ok"?this.invalidAuthTokenCount_=0:this.onAuthRevoked_(s,o))})}}tryAppCheck(){this.connected_&&this.appCheckToken_&&this.sendRequest("appcheck",{token:this.appCheckToken_},e=>{const n=e.s,r=e.d||"error";n==="ok"?this.invalidAppCheckTokenCount_=0:this.onAppCheckRevoked_(n,r)})}unlisten(e,n){const r=e._path.toString(),i=e._queryIdentifier;this.log_("Unlisten called for "+r+" "+i),B(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"unlisten() called for non-default but complete query"),this.removeListen_(r,i)&&this.connected_&&this.sendUnlisten_(r,i,e._queryObject,n)}sendUnlisten_(e,n,r,i){this.log_("Unlisten on "+e+" for "+n);const s={p:e},o="n";i&&(s.q=r,s.t=i),this.sendRequest(o,s)}onDisconnectPut(e,n,r){this.initConnection_(),this.connected_?this.sendOnDisconnect_("o",e,n,r):this.onDisconnectRequestQueue_.push({pathString:e,action:"o",data:n,onComplete:r})}onDisconnectMerge(e,n,r){this.initConnection_(),this.connected_?this.sendOnDisconnect_("om",e,n,r):this.onDisconnectRequestQueue_.push({pathString:e,action:"om",data:n,onComplete:r})}onDisconnectCancel(e,n){this.initConnection_(),this.connected_?this.sendOnDisconnect_("oc",e,null,n):this.onDisconnectRequestQueue_.push({pathString:e,action:"oc",data:null,onComplete:n})}sendOnDisconnect_(e,n,r,i){const s={p:n,d:r};this.log_("onDisconnect "+e,s),this.sendRequest(e,s,o=>{i&&setTimeout(()=>{i(o.s,o.d)},Math.floor(0))})}put(e,n,r,i){this.putInternal("p",e,n,r,i)}merge(e,n,r,i){this.putInternal("m",e,n,r,i)}putInternal(e,n,r,i,s){this.initConnection_();const o={p:n,d:r};s!==void 0&&(o.h=s),this.outstandingPuts_.push({action:e,request:o,onComplete:i}),this.outstandingPutCount_++;const a=this.outstandingPuts_.length-1;this.connected_?this.sendPut_(a):this.log_("Buffering put: "+n)}sendPut_(e){const n=this.outstandingPuts_[e].action,r=this.outstandingPuts_[e].request,i=this.outstandingPuts_[e].onComplete;this.outstandingPuts_[e].queued=this.connected_,this.sendRequest(n,r,s=>{this.log_(n+" response",s),delete this.outstandingPuts_[e],this.outstandingPutCount_--,this.outstandingPutCount_===0&&(this.outstandingPuts_=[]),i&&i(s.s,s.d)})}reportStats(e){if(this.connected_){const n={c:e};this.log_("reportStats",n),this.sendRequest("s",n,r=>{if(r.s!=="ok"){const s=r.d;this.log_("reportStats","Error sending stats: "+s)}})}}onDataMessage_(e){if("r"in e){this.log_("from server: "+nt(e));const n=e.r,r=this.requestCBHash_[n];r&&(delete this.requestCBHash_[n],r(e.b))}else{if("error"in e)throw"A server-side error has occurred: "+e.error;"a"in e&&this.onDataPush_(e.a,e.b)}}onDataPush_(e,n){this.log_("handleServerMessage",e,n),e==="d"?this.onDataUpdate_(n.p,n.d,!1,n.t):e==="m"?this.onDataUpdate_(n.p,n.d,!0,n.t):e==="c"?this.onListenRevoked_(n.p,n.q):e==="ac"?this.onAuthRevoked_(n.s,n.d):e==="apc"?this.onAppCheckRevoked_(n.s,n.d):e==="sd"?this.onSecurityDebugPacket_(n):jp("Unrecognized action received from server: "+nt(e)+`
Are you using the latest client?`)}onReady_(e,n){this.log_("connection ready"),this.connected_=!0,this.lastConnectionEstablishedTime_=new Date().getTime(),this.handleTimestamp_(e),this.lastSessionId=n,this.firstConnection_&&this.sendConnectStats_(),this.restoreState_(),this.firstConnection_=!1,this.onConnectStatus_(!0)}scheduleConnect_(e){B(!this.realtime_,"Scheduling a connect when we're already connected/ing?"),this.establishConnectionTimer_&&clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=setTimeout(()=>{this.establishConnectionTimer_=null,this.establishConnection_()},Math.floor(e))}initConnection_(){!this.realtime_&&this.firstConnection_&&this.scheduleConnect_(0)}onVisible_(e){e&&!this.visible_&&this.reconnectDelay_===this.maxReconnectDelay_&&(this.log_("Window became visible.  Reducing delay."),this.reconnectDelay_=Xo,this.realtime_||this.scheduleConnect_(0)),this.visible_=e}onOnline_(e){e?(this.log_("Browser went online."),this.reconnectDelay_=Xo,this.realtime_||this.scheduleConnect_(0)):(this.log_("Browser went offline.  Killing connection."),this.realtime_&&this.realtime_.close())}onRealtimeDisconnect_(){if(this.log_("data client disconnected"),this.connected_=!1,this.realtime_=null,this.cancelSentTransactions_(),this.requestCBHash_={},this.shouldReconnect_()){this.visible_?this.lastConnectionEstablishedTime_&&(new Date().getTime()-this.lastConnectionEstablishedTime_>W4&&(this.reconnectDelay_=Xo),this.lastConnectionEstablishedTime_=null):(this.log_("Window isn't visible.  Delaying reconnect."),this.reconnectDelay_=this.maxReconnectDelay_,this.lastConnectionAttemptTime_=new Date().getTime());const e=new Date().getTime()-this.lastConnectionAttemptTime_;let n=Math.max(0,this.reconnectDelay_-e);n=Math.random()*n,this.log_("Trying to reconnect in "+n+"ms"),this.scheduleConnect_(n),this.reconnectDelay_=Math.min(this.maxReconnectDelay_,this.reconnectDelay_*z4)}this.onConnectStatus_(!1)}async establishConnection_(){if(this.shouldReconnect_()){this.log_("Making a connection attempt"),this.lastConnectionAttemptTime_=new Date().getTime(),this.lastConnectionEstablishedTime_=null;const e=this.onDataMessage_.bind(this),n=this.onReady_.bind(this),r=this.onRealtimeDisconnect_.bind(this),i=this.id+":"+hr.nextConnectionId_++,s=this.lastSessionId;let o=!1,a=null;const l=function(){a?a.close():(o=!0,r())},c=function(f){B(a,"sendRequest call when we're not connected not allowed."),a.sendRequest(f)};this.realtime_={close:l,sendRequest:c};const h=this.forceTokenRefresh_;this.forceTokenRefresh_=!1;try{const[f,p]=await Promise.all([this.authTokenProvider_.getToken(h),this.appCheckTokenProvider_.getToken(h)]);o?At("getToken() completed but was canceled"):(At("getToken() completed. Creating connection."),this.authToken_=f&&f.accessToken,this.appCheckToken_=p&&p.token,a=new M4(i,this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,e,n,r,_=>{Ht(_+" ("+this.repoInfo_.toString()+")"),this.interrupt(H4)},s))}catch(f){this.log_("Failed to get token: "+f),o||(this.repoInfo_.nodeAdmin&&Ht(f),l())}}}interrupt(e){At("Interrupting connection for reason: "+e),this.interruptReasons_[e]=!0,this.realtime_?this.realtime_.close():(this.establishConnectionTimer_&&(clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=null),this.connected_&&this.onRealtimeDisconnect_())}resume(e){At("Resuming connection for reason: "+e),delete this.interruptReasons_[e],kp(this.interruptReasons_)&&(this.reconnectDelay_=Xo,this.realtime_||this.scheduleConnect_(0))}handleTimestamp_(e){const n=e-new Date().getTime();this.onServerInfoUpdate_({serverTimeOffset:n})}cancelSentTransactions_(){for(let e=0;e<this.outstandingPuts_.length;e++){const n=this.outstandingPuts_[e];n&&"h"in n.request&&n.queued&&(n.onComplete&&n.onComplete("disconnect"),delete this.outstandingPuts_[e],this.outstandingPutCount_--)}this.outstandingPutCount_===0&&(this.outstandingPuts_=[])}onListenRevoked_(e,n){let r;n?r=n.map(s=>Vg(s)).join("$"):r="default";const i=this.removeListen_(e,r);i&&i.onComplete&&i.onComplete("permission_denied")}removeListen_(e,n){const r=new we(e).toString();let i;if(this.listens.has(r)){const s=this.listens.get(r);i=s.get(n),s.delete(n),s.size===0&&this.listens.delete(r)}else i=void 0;return i}onAuthRevoked_(e,n){At("Auth token revoked: "+e+"/"+n),this.authToken_=null,this.forceTokenRefresh_=!0,this.realtime_.close(),(e==="invalid_token"||e==="permission_denied")&&(this.invalidAuthTokenCount_++,this.invalidAuthTokenCount_>=mw&&(this.reconnectDelay_=pw,this.authTokenProvider_.notifyForInvalidToken()))}onAppCheckRevoked_(e,n){At("App check token revoked: "+e+"/"+n),this.appCheckToken_=null,this.forceTokenRefresh_=!0,(e==="invalid_token"||e==="permission_denied")&&(this.invalidAppCheckTokenCount_++,this.invalidAppCheckTokenCount_>=mw&&this.appCheckTokenProvider_.notifyForInvalidToken())}onSecurityDebugPacket_(e){this.securityDebugCallback_?this.securityDebugCallback_(e):"msg"in e&&console.log("FIREBASE: "+e.msg.replace(`
`,`
FIREBASE: `))}restoreState_(){this.tryAuth(),this.tryAppCheck();for(const e of this.listens.values())for(const n of e.values())this.sendListen_(n);for(let e=0;e<this.outstandingPuts_.length;e++)this.outstandingPuts_[e]&&this.sendPut_(e);for(;this.onDisconnectRequestQueue_.length;){const e=this.onDisconnectRequestQueue_.shift();this.sendOnDisconnect_(e.action,e.pathString,e.data,e.onComplete)}for(let e=0;e<this.outstandingGets_.length;e++)this.outstandingGets_[e]&&this.sendGet_(e)}sendConnectStats_(){const e={};let n="js";e["sdk."+n+"."+AC.replace(/\./g,"-")]=1,yg()?e["framework.cordova"]=1:rI()&&(e["framework.reactnative"]=1),this.reportStats(e)}shouldReconnect_(){const e=qc.getInstance().currentlyOnline();return kp(this.interruptReasons_)&&e}}hr.nextPersistentConnectionId_=0;hr.nextConnectionId_=0;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class re{constructor(e,n){this.name=e,this.node=n}static Wrap(e,n){return new re(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bh{getCompare(){return this.compare.bind(this)}indexedValueChanged(e,n){const r=new re(eo,e),i=new re(eo,n);return this.compare(r,i)!==0}minPost(){return re.MIN}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Cu;class QC extends Bh{static get __EMPTY_NODE(){return Cu}static set __EMPTY_NODE(e){Cu=e}compare(e,n){return wo(e.name,n.name)}isDefinedOn(e){throw _o("KeyIndex.isDefinedOn not expected to be called.")}indexedValueChanged(e,n){return!1}minPost(){return re.MIN}maxPost(){return new re(Yi,Cu)}makePost(e,n){return B(typeof e=="string","KeyIndex indexValue must always be a string."),new re(e,Cu)}toString(){return".key"}}const Ws=new QC;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Su=class{constructor(e,n,r,i,s=null){this.isReverse_=i,this.resultGenerator_=s,this.nodeStack_=[];let o=1;for(;!e.isEmpty();)if(e=e,o=n?r(e.key,n):1,i&&(o*=-1),o<0)this.isReverse_?e=e.left:e=e.right;else if(o===0){this.nodeStack_.push(e);break}else this.nodeStack_.push(e),this.isReverse_?e=e.right:e=e.left}getNext(){if(this.nodeStack_.length===0)return null;let e=this.nodeStack_.pop(),n;if(this.resultGenerator_?n=this.resultGenerator_(e.key,e.value):n={key:e.key,value:e.value},this.isReverse_)for(e=e.left;!e.isEmpty();)this.nodeStack_.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack_.push(e),e=e.left;return n}hasNext(){return this.nodeStack_.length>0}peek(){if(this.nodeStack_.length===0)return null;const e=this.nodeStack_[this.nodeStack_.length-1];return this.resultGenerator_?this.resultGenerator_(e.key,e.value):{key:e.key,value:e.value}}},$t=class oa{constructor(e,n,r,i,s){this.key=e,this.value=n,this.color=r??oa.RED,this.left=i??Un.EMPTY_NODE,this.right=s??Un.EMPTY_NODE}copy(e,n,r,i,s){return new oa(e??this.key,n??this.value,r??this.color,i??this.left,s??this.right)}count(){return this.left.count()+1+this.right.count()}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||!!e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min_(){return this.left.isEmpty()?this:this.left.min_()}minKey(){return this.min_().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,r){let i=this;const s=r(e,i.key);return s<0?i=i.copy(null,null,null,i.left.insert(e,n,r),null):s===0?i=i.copy(null,n,null,null,null):i=i.copy(null,null,null,null,i.right.insert(e,n,r)),i.fixUp_()}removeMin_(){if(this.left.isEmpty())return Un.EMPTY_NODE;let e=this;return!e.left.isRed_()&&!e.left.left.isRed_()&&(e=e.moveRedLeft_()),e=e.copy(null,null,null,e.left.removeMin_(),null),e.fixUp_()}remove(e,n){let r,i;if(r=this,n(e,r.key)<0)!r.left.isEmpty()&&!r.left.isRed_()&&!r.left.left.isRed_()&&(r=r.moveRedLeft_()),r=r.copy(null,null,null,r.left.remove(e,n),null);else{if(r.left.isRed_()&&(r=r.rotateRight_()),!r.right.isEmpty()&&!r.right.isRed_()&&!r.right.left.isRed_()&&(r=r.moveRedRight_()),n(e,r.key)===0){if(r.right.isEmpty())return Un.EMPTY_NODE;i=r.right.min_(),r=r.copy(i.key,i.value,null,null,r.right.removeMin_())}r=r.copy(null,null,null,null,r.right.remove(e,n))}return r.fixUp_()}isRed_(){return this.color}fixUp_(){let e=this;return e.right.isRed_()&&!e.left.isRed_()&&(e=e.rotateLeft_()),e.left.isRed_()&&e.left.left.isRed_()&&(e=e.rotateRight_()),e.left.isRed_()&&e.right.isRed_()&&(e=e.colorFlip_()),e}moveRedLeft_(){let e=this.colorFlip_();return e.right.left.isRed_()&&(e=e.copy(null,null,null,null,e.right.rotateRight_()),e=e.rotateLeft_(),e=e.colorFlip_()),e}moveRedRight_(){let e=this.colorFlip_();return e.left.left.isRed_()&&(e=e.rotateRight_(),e=e.colorFlip_()),e}rotateLeft_(){const e=this.copy(null,null,oa.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight_(){const e=this.copy(null,null,oa.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip_(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth_(){const e=this.check_();return Math.pow(2,e)<=this.count()+1}check_(){if(this.isRed_()&&this.left.isRed_())throw new Error("Red node has red child("+this.key+","+this.value+")");if(this.right.isRed_())throw new Error("Right child of ("+this.key+","+this.value+") is red");const e=this.left.check_();if(e!==this.right.check_())throw new Error("Black depths differ");return e+(this.isRed_()?0:1)}};$t.RED=!0;$t.BLACK=!1;class q4{copy(e,n,r,i,s){return this}insert(e,n,r){return new $t(e,n,null)}remove(e,n){return this}count(){return 0}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}check_(){return 0}isRed_(){return!1}}let Un=class Zu{constructor(e,n=Zu.EMPTY_NODE){this.comparator_=e,this.root_=n}insert(e,n){return new Zu(this.comparator_,this.root_.insert(e,n,this.comparator_).copy(null,null,$t.BLACK,null,null))}remove(e){return new Zu(this.comparator_,this.root_.remove(e,this.comparator_).copy(null,null,$t.BLACK,null,null))}get(e){let n,r=this.root_;for(;!r.isEmpty();){if(n=this.comparator_(e,r.key),n===0)return r.value;n<0?r=r.left:n>0&&(r=r.right)}return null}getPredecessorKey(e){let n,r=this.root_,i=null;for(;!r.isEmpty();)if(n=this.comparator_(e,r.key),n===0){if(r.left.isEmpty())return i?i.key:null;for(r=r.left;!r.right.isEmpty();)r=r.right;return r.key}else n<0?r=r.left:n>0&&(i=r,r=r.right);throw new Error("Attempted to find predecessor key for a nonexistent key.  What gives?")}isEmpty(){return this.root_.isEmpty()}count(){return this.root_.count()}minKey(){return this.root_.minKey()}maxKey(){return this.root_.maxKey()}inorderTraversal(e){return this.root_.inorderTraversal(e)}reverseTraversal(e){return this.root_.reverseTraversal(e)}getIterator(e){return new Su(this.root_,null,this.comparator_,!1,e)}getIteratorFrom(e,n){return new Su(this.root_,e,this.comparator_,!1,n)}getReverseIteratorFrom(e,n){return new Su(this.root_,e,this.comparator_,!0,n)}getReverseIterator(e){return new Su(this.root_,null,this.comparator_,!0,e)}};Un.EMPTY_NODE=new q4;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function G4(t,e){return wo(t.name,e.name)}function Hg(t,e){return wo(t,e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Bp;function K4(t){Bp=t}const YC=function(t){return typeof t=="number"?"number:"+SC(t):"string:"+t},XC=function(t){if(t.isLeafNode()){const e=t.val();B(typeof e=="string"||typeof e=="number"||typeof e=="object"&&Sr(e,".sv"),"Priority must be a string or number.")}else B(t===Bp||t.isEmpty(),"priority of unexpected type.");B(t===Bp||t.getPriority().isEmpty(),"Priority nodes can't have a priority of their own.")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let gw;class Je{static set __childrenNodeConstructor(e){gw=e}static get __childrenNodeConstructor(){return gw}constructor(e,n=Je.__childrenNodeConstructor.EMPTY_NODE){this.value_=e,this.priorityNode_=n,this.lazyHash_=null,B(this.value_!==void 0&&this.value_!==null,"LeafNode shouldn't be created with null/undefined value."),XC(this.priorityNode_)}isLeafNode(){return!0}getPriority(){return this.priorityNode_}updatePriority(e){return new Je(this.value_,e)}getImmediateChild(e){return e===".priority"?this.priorityNode_:Je.__childrenNodeConstructor.EMPTY_NODE}getChild(e){return se(e)?this:ne(e)===".priority"?this.priorityNode_:Je.__childrenNodeConstructor.EMPTY_NODE}hasChild(){return!1}getPredecessorChildName(e,n){return null}updateImmediateChild(e,n){return e===".priority"?this.updatePriority(n):n.isEmpty()&&e!==".priority"?this:Je.__childrenNodeConstructor.EMPTY_NODE.updateImmediateChild(e,n).updatePriority(this.priorityNode_)}updateChild(e,n){const r=ne(e);return r===null?n:n.isEmpty()&&r!==".priority"?this:(B(r!==".priority"||si(e)===1,".priority must be the last token in a path"),this.updateImmediateChild(r,Je.__childrenNodeConstructor.EMPTY_NODE.updateChild(Ae(e),n)))}isEmpty(){return!1}numChildren(){return 0}forEachChild(e,n){return!1}val(e){return e&&!this.getPriority().isEmpty()?{".value":this.getValue(),".priority":this.getPriority().val()}:this.getValue()}hash(){if(this.lazyHash_===null){let e="";this.priorityNode_.isEmpty()||(e+="priority:"+YC(this.priorityNode_.val())+":");const n=typeof this.value_;e+=n+":",n==="number"?e+=SC(this.value_):e+=this.value_,this.lazyHash_=TC(e)}return this.lazyHash_}getValue(){return this.value_}compareTo(e){return e===Je.__childrenNodeConstructor.EMPTY_NODE?1:e instanceof Je.__childrenNodeConstructor?-1:(B(e.isLeafNode(),"Unknown node type"),this.compareToLeafNode_(e))}compareToLeafNode_(e){const n=typeof e.value_,r=typeof this.value_,i=Je.VALUE_TYPE_ORDER.indexOf(n),s=Je.VALUE_TYPE_ORDER.indexOf(r);return B(i>=0,"Unknown leaf type: "+n),B(s>=0,"Unknown leaf type: "+r),i===s?r==="object"?0:this.value_<e.value_?-1:this.value_===e.value_?0:1:s-i}withIndex(){return this}isIndexed(){return!0}equals(e){if(e===this)return!0;if(e.isLeafNode()){const n=e;return this.value_===n.value_&&this.priorityNode_.equals(n.priorityNode_)}else return!1}}Je.VALUE_TYPE_ORDER=["object","boolean","number","string"];/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let JC,ZC;function $4(t){JC=t}function Q4(t){ZC=t}class Y4 extends Bh{compare(e,n){const r=e.node.getPriority(),i=n.node.getPriority(),s=r.compareTo(i);return s===0?wo(e.name,n.name):s}isDefinedOn(e){return!e.getPriority().isEmpty()}indexedValueChanged(e,n){return!e.getPriority().equals(n.getPriority())}minPost(){return re.MIN}maxPost(){return new re(Yi,new Je("[PRIORITY-POST]",ZC))}makePost(e,n){const r=JC(e);return new re(n,new Je("[PRIORITY-POST]",r))}toString(){return".priority"}}const Me=new Y4;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const X4=Math.log(2);class J4{constructor(e){const n=s=>parseInt(Math.log(s)/X4,10),r=s=>parseInt(Array(s+1).join("1"),2);this.count=n(e+1),this.current_=this.count-1;const i=r(this.count);this.bits_=e+1&i}nextBitIsOne(){const e=!(this.bits_&1<<this.current_);return this.current_--,e}}const Gc=function(t,e,n,r){t.sort(e);const i=function(l,c){const h=c-l;let f,p;if(h===0)return null;if(h===1)return f=t[l],p=n?n(f):f,new $t(p,f.node,$t.BLACK,null,null);{const _=parseInt(h/2,10)+l,E=i(l,_),S=i(_+1,c);return f=t[_],p=n?n(f):f,new $t(p,f.node,$t.BLACK,E,S)}},s=function(l){let c=null,h=null,f=t.length;const p=function(E,S){const k=f-E,A=f;f-=E;const v=i(k+1,A),T=t[k],b=n?n(T):T;_(new $t(b,T.node,S,null,v))},_=function(E){c?(c.left=E,c=E):(h=E,c=E)};for(let E=0;E<l.count;++E){const S=l.nextBitIsOne(),k=Math.pow(2,l.count-(E+1));S?p(k,$t.BLACK):(p(k,$t.BLACK),p(k,$t.RED))}return h},o=new J4(t.length),a=s(o);return new Un(r||e,a)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let If;const ps={};class ar{static get Default(){return B(ps&&Me,"ChildrenNode.ts has not been loaded"),If=If||new ar({".priority":ps},{".priority":Me}),If}constructor(e,n){this.indexes_=e,this.indexSet_=n}get(e){const n=Zs(this.indexes_,e);if(!n)throw new Error("No index defined for "+e);return n instanceof Un?n:null}hasIndex(e){return Sr(this.indexSet_,e.toString())}addIndex(e,n){B(e!==Ws,"KeyIndex always exists and isn't meant to be added to the IndexMap.");const r=[];let i=!1;const s=n.getIterator(re.Wrap);let o=s.getNext();for(;o;)i=i||e.isDefinedOn(o.node),r.push(o),o=s.getNext();let a;i?a=Gc(r,e.getCompare()):a=ps;const l=e.toString(),c=Object.assign({},this.indexSet_);c[l]=e;const h=Object.assign({},this.indexes_);return h[l]=a,new ar(h,c)}addToIndexes(e,n){const r=Dc(this.indexes_,(i,s)=>{const o=Zs(this.indexSet_,s);if(B(o,"Missing index implementation for "+s),i===ps)if(o.isDefinedOn(e.node)){const a=[],l=n.getIterator(re.Wrap);let c=l.getNext();for(;c;)c.name!==e.name&&a.push(c),c=l.getNext();return a.push(e),Gc(a,o.getCompare())}else return ps;else{const a=n.get(e.name);let l=i;return a&&(l=l.remove(new re(e.name,a))),l.insert(e,e.node)}});return new ar(r,this.indexSet_)}removeFromIndexes(e,n){const r=Dc(this.indexes_,i=>{if(i===ps)return i;{const s=n.get(e.name);return s?i.remove(new re(e.name,s)):i}});return new ar(r,this.indexSet_)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Jo;class X{static get EMPTY_NODE(){return Jo||(Jo=new X(new Un(Hg),null,ar.Default))}constructor(e,n,r){this.children_=e,this.priorityNode_=n,this.indexMap_=r,this.lazyHash_=null,this.priorityNode_&&XC(this.priorityNode_),this.children_.isEmpty()&&B(!this.priorityNode_||this.priorityNode_.isEmpty(),"An empty node cannot have a priority")}isLeafNode(){return!1}getPriority(){return this.priorityNode_||Jo}updatePriority(e){return this.children_.isEmpty()?this:new X(this.children_,e,this.indexMap_)}getImmediateChild(e){if(e===".priority")return this.getPriority();{const n=this.children_.get(e);return n===null?Jo:n}}getChild(e){const n=ne(e);return n===null?this:this.getImmediateChild(n).getChild(Ae(e))}hasChild(e){return this.children_.get(e)!==null}updateImmediateChild(e,n){if(B(n,"We should always be passing snapshot nodes"),e===".priority")return this.updatePriority(n);{const r=new re(e,n);let i,s;n.isEmpty()?(i=this.children_.remove(e),s=this.indexMap_.removeFromIndexes(r,this.children_)):(i=this.children_.insert(e,n),s=this.indexMap_.addToIndexes(r,this.children_));const o=i.isEmpty()?Jo:this.priorityNode_;return new X(i,o,s)}}updateChild(e,n){const r=ne(e);if(r===null)return n;{B(ne(e)!==".priority"||si(e)===1,".priority must be the last token in a path");const i=this.getImmediateChild(r).updateChild(Ae(e),n);return this.updateImmediateChild(r,i)}}isEmpty(){return this.children_.isEmpty()}numChildren(){return this.children_.count()}val(e){if(this.isEmpty())return null;const n={};let r=0,i=0,s=!0;if(this.forEachChild(Me,(o,a)=>{n[o]=a.val(e),r++,s&&X.INTEGER_REGEXP_.test(o)?i=Math.max(i,Number(o)):s=!1}),!e&&s&&i<2*r){const o=[];for(const a in n)o[a]=n[a];return o}else return e&&!this.getPriority().isEmpty()&&(n[".priority"]=this.getPriority().val()),n}hash(){if(this.lazyHash_===null){let e="";this.getPriority().isEmpty()||(e+="priority:"+YC(this.getPriority().val())+":"),this.forEachChild(Me,(n,r)=>{const i=r.hash();i!==""&&(e+=":"+n+":"+i)}),this.lazyHash_=e===""?"":TC(e)}return this.lazyHash_}getPredecessorChildName(e,n,r){const i=this.resolveIndex_(r);if(i){const s=i.getPredecessorKey(new re(e,n));return s?s.name:null}else return this.children_.getPredecessorKey(e)}getFirstChildName(e){const n=this.resolveIndex_(e);if(n){const r=n.minKey();return r&&r.name}else return this.children_.minKey()}getFirstChild(e){const n=this.getFirstChildName(e);return n?new re(n,this.children_.get(n)):null}getLastChildName(e){const n=this.resolveIndex_(e);if(n){const r=n.maxKey();return r&&r.name}else return this.children_.maxKey()}getLastChild(e){const n=this.getLastChildName(e);return n?new re(n,this.children_.get(n)):null}forEachChild(e,n){const r=this.resolveIndex_(e);return r?r.inorderTraversal(i=>n(i.name,i.node)):this.children_.inorderTraversal(n)}getIterator(e){return this.getIteratorFrom(e.minPost(),e)}getIteratorFrom(e,n){const r=this.resolveIndex_(n);if(r)return r.getIteratorFrom(e,i=>i);{const i=this.children_.getIteratorFrom(e.name,re.Wrap);let s=i.peek();for(;s!=null&&n.compare(s,e)<0;)i.getNext(),s=i.peek();return i}}getReverseIterator(e){return this.getReverseIteratorFrom(e.maxPost(),e)}getReverseIteratorFrom(e,n){const r=this.resolveIndex_(n);if(r)return r.getReverseIteratorFrom(e,i=>i);{const i=this.children_.getReverseIteratorFrom(e.name,re.Wrap);let s=i.peek();for(;s!=null&&n.compare(s,e)>0;)i.getNext(),s=i.peek();return i}}compareTo(e){return this.isEmpty()?e.isEmpty()?0:-1:e.isLeafNode()||e.isEmpty()?1:e===Dl?-1:0}withIndex(e){if(e===Ws||this.indexMap_.hasIndex(e))return this;{const n=this.indexMap_.addIndex(e,this.children_);return new X(this.children_,this.priorityNode_,n)}}isIndexed(e){return e===Ws||this.indexMap_.hasIndex(e)}equals(e){if(e===this)return!0;if(e.isLeafNode())return!1;{const n=e;if(this.getPriority().equals(n.getPriority()))if(this.children_.count()===n.children_.count()){const r=this.getIterator(Me),i=n.getIterator(Me);let s=r.getNext(),o=i.getNext();for(;s&&o;){if(s.name!==o.name||!s.node.equals(o.node))return!1;s=r.getNext(),o=i.getNext()}return s===null&&o===null}else return!1;else return!1}}resolveIndex_(e){return e===Ws?null:this.indexMap_.get(e.toString())}}X.INTEGER_REGEXP_=/^(0|[1-9]\d*)$/;class Z4 extends X{constructor(){super(new Un(Hg),X.EMPTY_NODE,ar.Default)}compareTo(e){return e===this?0:1}equals(e){return e===this}getPriority(){return this}getImmediateChild(e){return X.EMPTY_NODE}isEmpty(){return!1}}const Dl=new Z4;Object.defineProperties(re,{MIN:{value:new re(eo,X.EMPTY_NODE)},MAX:{value:new re(Yi,Dl)}});QC.__EMPTY_NODE=X.EMPTY_NODE;Je.__childrenNodeConstructor=X;K4(Dl);Q4(Dl);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const eF=!0;function lt(t,e=null){if(t===null)return X.EMPTY_NODE;if(typeof t=="object"&&".priority"in t&&(e=t[".priority"]),B(e===null||typeof e=="string"||typeof e=="number"||typeof e=="object"&&".sv"in e,"Invalid priority type found: "+typeof e),typeof t=="object"&&".value"in t&&t[".value"]!==null&&(t=t[".value"]),typeof t!="object"||".sv"in t){const n=t;return new Je(n,lt(e))}if(!(t instanceof Array)&&eF){const n=[];let r=!1;if(qt(t,(o,a)=>{if(o.substring(0,1)!=="."){const l=lt(a);l.isEmpty()||(r=r||!l.getPriority().isEmpty(),n.push(new re(o,l)))}}),n.length===0)return X.EMPTY_NODE;const s=Gc(n,G4,o=>o.name,Hg);if(r){const o=Gc(n,Me.getCompare());return new X(s,lt(e),new ar({".priority":o},{".priority":Me}))}else return new X(s,lt(e),ar.Default)}else{let n=X.EMPTY_NODE;return qt(t,(r,i)=>{if(Sr(t,r)&&r.substring(0,1)!=="."){const s=lt(i);(s.isLeafNode()||!s.isEmpty())&&(n=n.updateImmediateChild(r,s))}}),n.updatePriority(lt(e))}}$4(lt);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tF extends Bh{constructor(e){super(),this.indexPath_=e,B(!se(e)&&ne(e)!==".priority","Can't create PathIndex with empty path or .priority key")}extractChild(e){return e.getChild(this.indexPath_)}isDefinedOn(e){return!e.getChild(this.indexPath_).isEmpty()}compare(e,n){const r=this.extractChild(e.node),i=this.extractChild(n.node),s=r.compareTo(i);return s===0?wo(e.name,n.name):s}makePost(e,n){const r=lt(e),i=X.EMPTY_NODE.updateChild(this.indexPath_,r);return new re(n,i)}maxPost(){const e=X.EMPTY_NODE.updateChild(this.indexPath_,Dl);return new re(Yi,e)}toString(){return GC(this.indexPath_,0).join("/")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nF extends Bh{compare(e,n){const r=e.node.compareTo(n.node);return r===0?wo(e.name,n.name):r}isDefinedOn(e){return!0}indexedValueChanged(e,n){return!e.equals(n)}minPost(){return re.MIN}maxPost(){return re.MAX}makePost(e,n){const r=lt(e);return new re(n,r)}toString(){return".value"}}const rF=new nF;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function e1(t){return{type:"value",snapshotNode:t}}function to(t,e){return{type:"child_added",snapshotNode:e,childName:t}}function tl(t,e){return{type:"child_removed",snapshotNode:e,childName:t}}function nl(t,e,n){return{type:"child_changed",snapshotNode:e,childName:t,oldSnap:n}}function iF(t,e){return{type:"child_moved",snapshotNode:e,childName:t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qg{constructor(e){this.index_=e}updateChild(e,n,r,i,s,o){B(e.isIndexed(this.index_),"A node must be indexed if only a child is updated");const a=e.getImmediateChild(n);return a.getChild(i).equals(r.getChild(i))&&a.isEmpty()===r.isEmpty()||(o!=null&&(r.isEmpty()?e.hasChild(n)?o.trackChildChange(tl(n,a)):B(e.isLeafNode(),"A child remove without an old child only makes sense on a leaf node"):a.isEmpty()?o.trackChildChange(to(n,r)):o.trackChildChange(nl(n,r,a))),e.isLeafNode()&&r.isEmpty())?e:e.updateImmediateChild(n,r).withIndex(this.index_)}updateFullNode(e,n,r){return r!=null&&(e.isLeafNode()||e.forEachChild(Me,(i,s)=>{n.hasChild(i)||r.trackChildChange(tl(i,s))}),n.isLeafNode()||n.forEachChild(Me,(i,s)=>{if(e.hasChild(i)){const o=e.getImmediateChild(i);o.equals(s)||r.trackChildChange(nl(i,s,o))}else r.trackChildChange(to(i,s))})),n.withIndex(this.index_)}updatePriority(e,n){return e.isEmpty()?X.EMPTY_NODE:e.updatePriority(n)}filtersNodes(){return!1}getIndexedFilter(){return this}getIndex(){return this.index_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rl{constructor(e){this.indexedFilter_=new qg(e.getIndex()),this.index_=e.getIndex(),this.startPost_=rl.getStartPost_(e),this.endPost_=rl.getEndPost_(e),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}getStartPost(){return this.startPost_}getEndPost(){return this.endPost_}matches(e){const n=this.startIsInclusive_?this.index_.compare(this.getStartPost(),e)<=0:this.index_.compare(this.getStartPost(),e)<0,r=this.endIsInclusive_?this.index_.compare(e,this.getEndPost())<=0:this.index_.compare(e,this.getEndPost())<0;return n&&r}updateChild(e,n,r,i,s,o){return this.matches(new re(n,r))||(r=X.EMPTY_NODE),this.indexedFilter_.updateChild(e,n,r,i,s,o)}updateFullNode(e,n,r){n.isLeafNode()&&(n=X.EMPTY_NODE);let i=n.withIndex(this.index_);i=i.updatePriority(X.EMPTY_NODE);const s=this;return n.forEachChild(Me,(o,a)=>{s.matches(new re(o,a))||(i=i.updateImmediateChild(o,X.EMPTY_NODE))}),this.indexedFilter_.updateFullNode(e,i,r)}updatePriority(e,n){return e}filtersNodes(){return!0}getIndexedFilter(){return this.indexedFilter_}getIndex(){return this.index_}static getStartPost_(e){if(e.hasStart()){const n=e.getIndexStartName();return e.getIndex().makePost(e.getIndexStartValue(),n)}else return e.getIndex().minPost()}static getEndPost_(e){if(e.hasEnd()){const n=e.getIndexEndName();return e.getIndex().makePost(e.getIndexEndValue(),n)}else return e.getIndex().maxPost()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sF{constructor(e){this.withinDirectionalStart=n=>this.reverse_?this.withinEndPost(n):this.withinStartPost(n),this.withinDirectionalEnd=n=>this.reverse_?this.withinStartPost(n):this.withinEndPost(n),this.withinStartPost=n=>{const r=this.index_.compare(this.rangedFilter_.getStartPost(),n);return this.startIsInclusive_?r<=0:r<0},this.withinEndPost=n=>{const r=this.index_.compare(n,this.rangedFilter_.getEndPost());return this.endIsInclusive_?r<=0:r<0},this.rangedFilter_=new rl(e),this.index_=e.getIndex(),this.limit_=e.getLimit(),this.reverse_=!e.isViewFromLeft(),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}updateChild(e,n,r,i,s,o){return this.rangedFilter_.matches(new re(n,r))||(r=X.EMPTY_NODE),e.getImmediateChild(n).equals(r)?e:e.numChildren()<this.limit_?this.rangedFilter_.getIndexedFilter().updateChild(e,n,r,i,s,o):this.fullLimitUpdateChild_(e,n,r,s,o)}updateFullNode(e,n,r){let i;if(n.isLeafNode()||n.isEmpty())i=X.EMPTY_NODE.withIndex(this.index_);else if(this.limit_*2<n.numChildren()&&n.isIndexed(this.index_)){i=X.EMPTY_NODE.withIndex(this.index_);let s;this.reverse_?s=n.getReverseIteratorFrom(this.rangedFilter_.getEndPost(),this.index_):s=n.getIteratorFrom(this.rangedFilter_.getStartPost(),this.index_);let o=0;for(;s.hasNext()&&o<this.limit_;){const a=s.getNext();if(this.withinDirectionalStart(a))if(this.withinDirectionalEnd(a))i=i.updateImmediateChild(a.name,a.node),o++;else break;else continue}}else{i=n.withIndex(this.index_),i=i.updatePriority(X.EMPTY_NODE);let s;this.reverse_?s=i.getReverseIterator(this.index_):s=i.getIterator(this.index_);let o=0;for(;s.hasNext();){const a=s.getNext();o<this.limit_&&this.withinDirectionalStart(a)&&this.withinDirectionalEnd(a)?o++:i=i.updateImmediateChild(a.name,X.EMPTY_NODE)}}return this.rangedFilter_.getIndexedFilter().updateFullNode(e,i,r)}updatePriority(e,n){return e}filtersNodes(){return!0}getIndexedFilter(){return this.rangedFilter_.getIndexedFilter()}getIndex(){return this.index_}fullLimitUpdateChild_(e,n,r,i,s){let o;if(this.reverse_){const f=this.index_.getCompare();o=(p,_)=>f(_,p)}else o=this.index_.getCompare();const a=e;B(a.numChildren()===this.limit_,"");const l=new re(n,r),c=this.reverse_?a.getFirstChild(this.index_):a.getLastChild(this.index_),h=this.rangedFilter_.matches(l);if(a.hasChild(n)){const f=a.getImmediateChild(n);let p=i.getChildAfterChild(this.index_,c,this.reverse_);for(;p!=null&&(p.name===n||a.hasChild(p.name));)p=i.getChildAfterChild(this.index_,p,this.reverse_);const _=p==null?1:o(p,l);if(h&&!r.isEmpty()&&_>=0)return s!=null&&s.trackChildChange(nl(n,r,f)),a.updateImmediateChild(n,r);{s!=null&&s.trackChildChange(tl(n,f));const S=a.updateImmediateChild(n,X.EMPTY_NODE);return p!=null&&this.rangedFilter_.matches(p)?(s!=null&&s.trackChildChange(to(p.name,p.node)),S.updateImmediateChild(p.name,p.node)):S}}else return r.isEmpty()?e:h&&o(c,l)>=0?(s!=null&&(s.trackChildChange(tl(c.name,c.node)),s.trackChildChange(to(n,r))),a.updateImmediateChild(n,r).updateImmediateChild(c.name,X.EMPTY_NODE)):e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gg{constructor(){this.limitSet_=!1,this.startSet_=!1,this.startNameSet_=!1,this.startAfterSet_=!1,this.endSet_=!1,this.endNameSet_=!1,this.endBeforeSet_=!1,this.limit_=0,this.viewFrom_="",this.indexStartValue_=null,this.indexStartName_="",this.indexEndValue_=null,this.indexEndName_="",this.index_=Me}hasStart(){return this.startSet_}isViewFromLeft(){return this.viewFrom_===""?this.startSet_:this.viewFrom_==="l"}getIndexStartValue(){return B(this.startSet_,"Only valid if start has been set"),this.indexStartValue_}getIndexStartName(){return B(this.startSet_,"Only valid if start has been set"),this.startNameSet_?this.indexStartName_:eo}hasEnd(){return this.endSet_}getIndexEndValue(){return B(this.endSet_,"Only valid if end has been set"),this.indexEndValue_}getIndexEndName(){return B(this.endSet_,"Only valid if end has been set"),this.endNameSet_?this.indexEndName_:Yi}hasLimit(){return this.limitSet_}hasAnchoredLimit(){return this.limitSet_&&this.viewFrom_!==""}getLimit(){return B(this.limitSet_,"Only valid if limit has been set"),this.limit_}getIndex(){return this.index_}loadsAllData(){return!(this.startSet_||this.endSet_||this.limitSet_)}isDefault(){return this.loadsAllData()&&this.index_===Me}copy(){const e=new Gg;return e.limitSet_=this.limitSet_,e.limit_=this.limit_,e.startSet_=this.startSet_,e.startAfterSet_=this.startAfterSet_,e.indexStartValue_=this.indexStartValue_,e.startNameSet_=this.startNameSet_,e.indexStartName_=this.indexStartName_,e.endSet_=this.endSet_,e.endBeforeSet_=this.endBeforeSet_,e.indexEndValue_=this.indexEndValue_,e.endNameSet_=this.endNameSet_,e.indexEndName_=this.indexEndName_,e.index_=this.index_,e.viewFrom_=this.viewFrom_,e}}function oF(t){return t.loadsAllData()?new qg(t.getIndex()):t.hasLimit()?new sF(t):new rl(t)}function _w(t){const e={};if(t.isDefault())return e;let n;if(t.index_===Me?n="$priority":t.index_===rF?n="$value":t.index_===Ws?n="$key":(B(t.index_ instanceof tF,"Unrecognized index type!"),n=t.index_.toString()),e.orderBy=nt(n),t.startSet_){const r=t.startAfterSet_?"startAfter":"startAt";e[r]=nt(t.indexStartValue_),t.startNameSet_&&(e[r]+=","+nt(t.indexStartName_))}if(t.endSet_){const r=t.endBeforeSet_?"endBefore":"endAt";e[r]=nt(t.indexEndValue_),t.endNameSet_&&(e[r]+=","+nt(t.indexEndName_))}return t.limitSet_&&(t.isViewFromLeft()?e.limitToFirst=t.limit_:e.limitToLast=t.limit_),e}function yw(t){const e={};if(t.startSet_&&(e.sp=t.indexStartValue_,t.startNameSet_&&(e.sn=t.indexStartName_),e.sin=!t.startAfterSet_),t.endSet_&&(e.ep=t.indexEndValue_,t.endNameSet_&&(e.en=t.indexEndName_),e.ein=!t.endBeforeSet_),t.limitSet_){e.l=t.limit_;let n=t.viewFrom_;n===""&&(t.isViewFromLeft()?n="l":n="r"),e.vf=n}return t.index_!==Me&&(e.i=t.index_.toString()),e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kc extends WC{reportStats(e){throw new Error("Method not implemented.")}static getListenId_(e,n){return n!==void 0?"tag$"+n:(B(e._queryParams.isDefault(),"should have a tag if it's not a default query."),e._path.toString())}constructor(e,n,r,i){super(),this.repoInfo_=e,this.onDataUpdate_=n,this.authTokenProvider_=r,this.appCheckTokenProvider_=i,this.log_=bl("p:rest:"),this.listens_={}}listen(e,n,r,i){const s=e._path.toString();this.log_("Listen called for "+s+" "+e._queryIdentifier);const o=Kc.getListenId_(e,r),a={};this.listens_[o]=a;const l=_w(e._queryParams);this.restRequest_(s+".json",l,(c,h)=>{let f=h;if(c===404&&(f=null,c=null),c===null&&this.onDataUpdate_(s,f,!1,r),Zs(this.listens_,o)===a){let p;c?c===401?p="permission_denied":p="rest_error:"+c:p="ok",i(p,null)}})}unlisten(e,n){const r=Kc.getListenId_(e,n);delete this.listens_[r]}get(e){const n=_w(e._queryParams),r=e._path.toString(),i=new Lh;return this.restRequest_(r+".json",n,(s,o)=>{let a=o;s===404&&(a=null,s=null),s===null?(this.onDataUpdate_(r,a,!1,null),i.resolve(a)):i.reject(new Error(a))}),i.promise}refreshAuthToken(e){}restRequest_(e,n={},r){return n.format="export",Promise.all([this.authTokenProvider_.getToken(!1),this.appCheckTokenProvider_.getToken(!1)]).then(([i,s])=>{i&&i.accessToken&&(n.auth=i.accessToken),s&&s.token&&(n.ac=s.token);const o=(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host+e+"?ns="+this.repoInfo_.namespace+yo(n);this.log_("Sending REST request for "+o);const a=new XMLHttpRequest;a.onreadystatechange=()=>{if(r&&a.readyState===4){this.log_("REST Response for "+o+" received. status:",a.status,"response:",a.responseText);let l=null;if(a.status>=200&&a.status<300){try{l=Qa(a.responseText)}catch{Ht("Failed to parse JSON response for "+o+": "+a.responseText)}r(null,l)}else a.status!==401&&a.status!==404&&Ht("Got unsuccessful REST response for "+o+" Status: "+a.status),r(a.status);r=null}},a.open("GET",o,!0),a.send()})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class aF{constructor(){this.rootNode_=X.EMPTY_NODE}getNode(e){return this.rootNode_.getChild(e)}updateSnapshot(e,n){this.rootNode_=this.rootNode_.updateChild(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $c(){return{value:null,children:new Map}}function t1(t,e,n){if(se(e))t.value=n,t.children.clear();else if(t.value!==null)t.value=t.value.updateChild(e,n);else{const r=ne(e);t.children.has(r)||t.children.set(r,$c());const i=t.children.get(r);e=Ae(e),t1(i,e,n)}}function zp(t,e,n){t.value!==null?n(e,t.value):lF(t,(r,i)=>{const s=new we(e.toString()+"/"+r);zp(i,s,n)})}function lF(t,e){t.children.forEach((n,r)=>{e(r,n)})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uF{constructor(e){this.collection_=e,this.last_=null}get(){const e=this.collection_.get(),n=Object.assign({},e);return this.last_&&qt(this.last_,(r,i)=>{n[r]=n[r]-i}),this.last_=e,n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vw=10*1e3,cF=30*1e3,hF=5*60*1e3;class dF{constructor(e,n){this.server_=n,this.statsToReport_={},this.statsListener_=new uF(e);const r=vw+(cF-vw)*Math.random();Ea(this.reportStats_.bind(this),Math.floor(r))}reportStats_(){const e=this.statsListener_.get(),n={};let r=!1;qt(e,(i,s)=>{s>0&&Sr(this.statsToReport_,i)&&(n[i]=s,r=!0)}),r&&this.server_.reportStats(n),Ea(this.reportStats_.bind(this),Math.floor(Math.random()*2*hF))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Sn;(function(t){t[t.OVERWRITE=0]="OVERWRITE",t[t.MERGE=1]="MERGE",t[t.ACK_USER_WRITE=2]="ACK_USER_WRITE",t[t.LISTEN_COMPLETE=3]="LISTEN_COMPLETE"})(Sn||(Sn={}));function n1(){return{fromUser:!0,fromServer:!1,queryId:null,tagged:!1}}function Kg(){return{fromUser:!1,fromServer:!0,queryId:null,tagged:!1}}function $g(t){return{fromUser:!1,fromServer:!0,queryId:t,tagged:!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qc{constructor(e,n,r){this.path=e,this.affectedTree=n,this.revert=r,this.type=Sn.ACK_USER_WRITE,this.source=n1()}operationForChild(e){if(se(this.path)){if(this.affectedTree.value!=null)return B(this.affectedTree.children.isEmpty(),"affectedTree should not have overlapping affected paths."),this;{const n=this.affectedTree.subtree(new we(e));return new Qc(me(),n,this.revert)}}else return B(ne(this.path)===e,"operationForChild called for unrelated child."),new Qc(Ae(this.path),this.affectedTree,this.revert)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class il{constructor(e,n){this.source=e,this.path=n,this.type=Sn.LISTEN_COMPLETE}operationForChild(e){return se(this.path)?new il(this.source,me()):new il(this.source,Ae(this.path))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xi{constructor(e,n,r){this.source=e,this.path=n,this.snap=r,this.type=Sn.OVERWRITE}operationForChild(e){return se(this.path)?new Xi(this.source,me(),this.snap.getImmediateChild(e)):new Xi(this.source,Ae(this.path),this.snap)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sl{constructor(e,n,r){this.source=e,this.path=n,this.children=r,this.type=Sn.MERGE}operationForChild(e){if(se(this.path)){const n=this.children.subtree(new we(e));return n.isEmpty()?null:n.value?new Xi(this.source,me(),n.value):new sl(this.source,me(),n)}else return B(ne(this.path)===e,"Can't get a merge for a child not on the path of the operation"),new sl(this.source,Ae(this.path),this.children)}toString(){return"Operation("+this.path+": "+this.source.toString()+" merge: "+this.children.toString()+")"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ji{constructor(e,n,r){this.node_=e,this.fullyInitialized_=n,this.filtered_=r}isFullyInitialized(){return this.fullyInitialized_}isFiltered(){return this.filtered_}isCompleteForPath(e){if(se(e))return this.isFullyInitialized()&&!this.filtered_;const n=ne(e);return this.isCompleteForChild(n)}isCompleteForChild(e){return this.isFullyInitialized()&&!this.filtered_||this.node_.hasChild(e)}getNode(){return this.node_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fF{constructor(e){this.query_=e,this.index_=this.query_._queryParams.getIndex()}}function pF(t,e,n,r){const i=[],s=[];return e.forEach(o=>{o.type==="child_changed"&&t.index_.indexedValueChanged(o.oldSnap,o.snapshotNode)&&s.push(iF(o.childName,o.snapshotNode))}),Zo(t,i,"child_removed",e,r,n),Zo(t,i,"child_added",e,r,n),Zo(t,i,"child_moved",s,r,n),Zo(t,i,"child_changed",e,r,n),Zo(t,i,"value",e,r,n),i}function Zo(t,e,n,r,i,s){const o=r.filter(a=>a.type===n);o.sort((a,l)=>gF(t,a,l)),o.forEach(a=>{const l=mF(t,a,s);i.forEach(c=>{c.respondsTo(a.type)&&e.push(c.createEvent(l,t.query_))})})}function mF(t,e,n){return e.type==="value"||e.type==="child_removed"||(e.prevName=n.getPredecessorChildName(e.childName,e.snapshotNode,t.index_)),e}function gF(t,e,n){if(e.childName==null||n.childName==null)throw _o("Should only compare child_ events.");const r=new re(e.childName,e.snapshotNode),i=new re(n.childName,n.snapshotNode);return t.index_.compare(r,i)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function zh(t,e){return{eventCache:t,serverCache:e}}function Ta(t,e,n,r){return zh(new Ji(e,n,r),t.serverCache)}function r1(t,e,n,r){return zh(t.eventCache,new Ji(e,n,r))}function Wp(t){return t.eventCache.isFullyInitialized()?t.eventCache.getNode():null}function Zi(t){return t.serverCache.isFullyInitialized()?t.serverCache.getNode():null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Cf;const _F=()=>(Cf||(Cf=new Un(n4)),Cf);class Ce{static fromObject(e){let n=new Ce(null);return qt(e,(r,i)=>{n=n.set(new we(r),i)}),n}constructor(e,n=_F()){this.value=e,this.children=n}isEmpty(){return this.value===null&&this.children.isEmpty()}findRootMostMatchingPathAndValue(e,n){if(this.value!=null&&n(this.value))return{path:me(),value:this.value};if(se(e))return null;{const r=ne(e),i=this.children.get(r);if(i!==null){const s=i.findRootMostMatchingPathAndValue(Ae(e),n);return s!=null?{path:Ke(new we(r),s.path),value:s.value}:null}else return null}}findRootMostValueAndPath(e){return this.findRootMostMatchingPathAndValue(e,()=>!0)}subtree(e){if(se(e))return this;{const n=ne(e),r=this.children.get(n);return r!==null?r.subtree(Ae(e)):new Ce(null)}}set(e,n){if(se(e))return new Ce(n,this.children);{const r=ne(e),s=(this.children.get(r)||new Ce(null)).set(Ae(e),n),o=this.children.insert(r,s);return new Ce(this.value,o)}}remove(e){if(se(e))return this.children.isEmpty()?new Ce(null):new Ce(null,this.children);{const n=ne(e),r=this.children.get(n);if(r){const i=r.remove(Ae(e));let s;return i.isEmpty()?s=this.children.remove(n):s=this.children.insert(n,i),this.value===null&&s.isEmpty()?new Ce(null):new Ce(this.value,s)}else return this}}get(e){if(se(e))return this.value;{const n=ne(e),r=this.children.get(n);return r?r.get(Ae(e)):null}}setTree(e,n){if(se(e))return n;{const r=ne(e),s=(this.children.get(r)||new Ce(null)).setTree(Ae(e),n);let o;return s.isEmpty()?o=this.children.remove(r):o=this.children.insert(r,s),new Ce(this.value,o)}}fold(e){return this.fold_(me(),e)}fold_(e,n){const r={};return this.children.inorderTraversal((i,s)=>{r[i]=s.fold_(Ke(e,i),n)}),n(e,this.value,r)}findOnPath(e,n){return this.findOnPath_(e,me(),n)}findOnPath_(e,n,r){const i=this.value?r(n,this.value):!1;if(i)return i;if(se(e))return null;{const s=ne(e),o=this.children.get(s);return o?o.findOnPath_(Ae(e),Ke(n,s),r):null}}foreachOnPath(e,n){return this.foreachOnPath_(e,me(),n)}foreachOnPath_(e,n,r){if(se(e))return this;{this.value&&r(n,this.value);const i=ne(e),s=this.children.get(i);return s?s.foreachOnPath_(Ae(e),Ke(n,i),r):new Ce(null)}}foreach(e){this.foreach_(me(),e)}foreach_(e,n){this.children.inorderTraversal((r,i)=>{i.foreach_(Ke(e,r),n)}),this.value&&n(e,this.value)}foreachChild(e){this.children.inorderTraversal((n,r)=>{r.value&&e(n,r.value)})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pn{constructor(e){this.writeTree_=e}static empty(){return new Pn(new Ce(null))}}function Ia(t,e,n){if(se(e))return new Pn(new Ce(n));{const r=t.writeTree_.findRootMostValueAndPath(e);if(r!=null){const i=r.path;let s=r.value;const o=jt(i,e);return s=s.updateChild(o,n),new Pn(t.writeTree_.set(i,s))}else{const i=new Ce(n),s=t.writeTree_.setTree(e,i);return new Pn(s)}}}function ww(t,e,n){let r=t;return qt(n,(i,s)=>{r=Ia(r,Ke(e,i),s)}),r}function Aw(t,e){if(se(e))return Pn.empty();{const n=t.writeTree_.setTree(e,new Ce(null));return new Pn(n)}}function Hp(t,e){return is(t,e)!=null}function is(t,e){const n=t.writeTree_.findRootMostValueAndPath(e);return n!=null?t.writeTree_.get(n.path).getChild(jt(n.path,e)):null}function Ew(t){const e=[],n=t.writeTree_.value;return n!=null?n.isLeafNode()||n.forEachChild(Me,(r,i)=>{e.push(new re(r,i))}):t.writeTree_.children.inorderTraversal((r,i)=>{i.value!=null&&e.push(new re(r,i.value))}),e}function ei(t,e){if(se(e))return t;{const n=is(t,e);return n!=null?new Pn(new Ce(n)):new Pn(t.writeTree_.subtree(e))}}function qp(t){return t.writeTree_.isEmpty()}function no(t,e){return i1(me(),t.writeTree_,e)}function i1(t,e,n){if(e.value!=null)return n.updateChild(t,e.value);{let r=null;return e.children.inorderTraversal((i,s)=>{i===".priority"?(B(s.value!==null,"Priority writes must always be leaf nodes"),r=s.value):n=i1(Ke(t,i),s,n)}),!n.getChild(t).isEmpty()&&r!==null&&(n=n.updateChild(Ke(t,".priority"),r)),n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Qg(t,e){return l1(e,t)}function yF(t,e,n,r,i){B(r>t.lastWriteId,"Stacking an older write on top of newer ones"),i===void 0&&(i=!0),t.allWrites.push({path:e,snap:n,writeId:r,visible:i}),i&&(t.visibleWrites=Ia(t.visibleWrites,e,n)),t.lastWriteId=r}function vF(t,e){for(let n=0;n<t.allWrites.length;n++){const r=t.allWrites[n];if(r.writeId===e)return r}return null}function wF(t,e){const n=t.allWrites.findIndex(a=>a.writeId===e);B(n>=0,"removeWrite called with nonexistent writeId.");const r=t.allWrites[n];t.allWrites.splice(n,1);let i=r.visible,s=!1,o=t.allWrites.length-1;for(;i&&o>=0;){const a=t.allWrites[o];a.visible&&(o>=n&&AF(a,r.path)?i=!1:Cn(r.path,a.path)&&(s=!0)),o--}if(i){if(s)return EF(t),!0;if(r.snap)t.visibleWrites=Aw(t.visibleWrites,r.path);else{const a=r.children;qt(a,l=>{t.visibleWrites=Aw(t.visibleWrites,Ke(r.path,l))})}return!0}else return!1}function AF(t,e){if(t.snap)return Cn(t.path,e);for(const n in t.children)if(t.children.hasOwnProperty(n)&&Cn(Ke(t.path,n),e))return!0;return!1}function EF(t){t.visibleWrites=s1(t.allWrites,TF,me()),t.allWrites.length>0?t.lastWriteId=t.allWrites[t.allWrites.length-1].writeId:t.lastWriteId=-1}function TF(t){return t.visible}function s1(t,e,n){let r=Pn.empty();for(let i=0;i<t.length;++i){const s=t[i];if(e(s)){const o=s.path;let a;if(s.snap)Cn(n,o)?(a=jt(n,o),r=Ia(r,a,s.snap)):Cn(o,n)&&(a=jt(o,n),r=Ia(r,me(),s.snap.getChild(a)));else if(s.children){if(Cn(n,o))a=jt(n,o),r=ww(r,a,s.children);else if(Cn(o,n))if(a=jt(o,n),se(a))r=ww(r,me(),s.children);else{const l=Zs(s.children,ne(a));if(l){const c=l.getChild(Ae(a));r=Ia(r,me(),c)}}}else throw _o("WriteRecord should have .snap or .children")}}return r}function o1(t,e,n,r,i){if(!r&&!i){const s=is(t.visibleWrites,e);if(s!=null)return s;{const o=ei(t.visibleWrites,e);if(qp(o))return n;if(n==null&&!Hp(o,me()))return null;{const a=n||X.EMPTY_NODE;return no(o,a)}}}else{const s=ei(t.visibleWrites,e);if(!i&&qp(s))return n;if(!i&&n==null&&!Hp(s,me()))return null;{const o=function(c){return(c.visible||i)&&(!r||!~r.indexOf(c.writeId))&&(Cn(c.path,e)||Cn(e,c.path))},a=s1(t.allWrites,o,e),l=n||X.EMPTY_NODE;return no(a,l)}}}function IF(t,e,n){let r=X.EMPTY_NODE;const i=is(t.visibleWrites,e);if(i)return i.isLeafNode()||i.forEachChild(Me,(s,o)=>{r=r.updateImmediateChild(s,o)}),r;if(n){const s=ei(t.visibleWrites,e);return n.forEachChild(Me,(o,a)=>{const l=no(ei(s,new we(o)),a);r=r.updateImmediateChild(o,l)}),Ew(s).forEach(o=>{r=r.updateImmediateChild(o.name,o.node)}),r}else{const s=ei(t.visibleWrites,e);return Ew(s).forEach(o=>{r=r.updateImmediateChild(o.name,o.node)}),r}}function CF(t,e,n,r,i){B(r||i,"Either existingEventSnap or existingServerSnap must exist");const s=Ke(e,n);if(Hp(t.visibleWrites,s))return null;{const o=ei(t.visibleWrites,s);return qp(o)?i.getChild(n):no(o,i.getChild(n))}}function SF(t,e,n,r){const i=Ke(e,n),s=is(t.visibleWrites,i);if(s!=null)return s;if(r.isCompleteForChild(n)){const o=ei(t.visibleWrites,i);return no(o,r.getNode().getImmediateChild(n))}else return null}function RF(t,e){return is(t.visibleWrites,e)}function kF(t,e,n,r,i,s,o){let a;const l=ei(t.visibleWrites,e),c=is(l,me());if(c!=null)a=c;else if(n!=null)a=no(l,n);else return[];if(a=a.withIndex(o),!a.isEmpty()&&!a.isLeafNode()){const h=[],f=o.getCompare(),p=s?a.getReverseIteratorFrom(r,o):a.getIteratorFrom(r,o);let _=p.getNext();for(;_&&h.length<i;)f(_,r)!==0&&h.push(_),_=p.getNext();return h}else return[]}function xF(){return{visibleWrites:Pn.empty(),allWrites:[],lastWriteId:-1}}function Yc(t,e,n,r){return o1(t.writeTree,t.treePath,e,n,r)}function Yg(t,e){return IF(t.writeTree,t.treePath,e)}function Tw(t,e,n,r){return CF(t.writeTree,t.treePath,e,n,r)}function Xc(t,e){return RF(t.writeTree,Ke(t.treePath,e))}function NF(t,e,n,r,i,s){return kF(t.writeTree,t.treePath,e,n,r,i,s)}function Xg(t,e,n){return SF(t.writeTree,t.treePath,e,n)}function a1(t,e){return l1(Ke(t.treePath,e),t.writeTree)}function l1(t,e){return{treePath:t,writeTree:e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class PF{constructor(){this.changeMap=new Map}trackChildChange(e){const n=e.type,r=e.childName;B(n==="child_added"||n==="child_changed"||n==="child_removed","Only child changes supported for tracking"),B(r!==".priority","Only non-priority child changes can be tracked.");const i=this.changeMap.get(r);if(i){const s=i.type;if(n==="child_added"&&s==="child_removed")this.changeMap.set(r,nl(r,e.snapshotNode,i.snapshotNode));else if(n==="child_removed"&&s==="child_added")this.changeMap.delete(r);else if(n==="child_removed"&&s==="child_changed")this.changeMap.set(r,tl(r,i.oldSnap));else if(n==="child_changed"&&s==="child_added")this.changeMap.set(r,to(r,e.snapshotNode));else if(n==="child_changed"&&s==="child_changed")this.changeMap.set(r,nl(r,e.snapshotNode,i.oldSnap));else throw _o("Illegal combination of changes: "+e+" occurred after "+i)}else this.changeMap.set(r,e)}getChanges(){return Array.from(this.changeMap.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bF{getCompleteChild(e){return null}getChildAfterChild(e,n,r){return null}}const u1=new bF;class Jg{constructor(e,n,r=null){this.writes_=e,this.viewCache_=n,this.optCompleteServerCache_=r}getCompleteChild(e){const n=this.viewCache_.eventCache;if(n.isCompleteForChild(e))return n.getNode().getImmediateChild(e);{const r=this.optCompleteServerCache_!=null?new Ji(this.optCompleteServerCache_,!0,!1):this.viewCache_.serverCache;return Xg(this.writes_,e,r)}}getChildAfterChild(e,n,r){const i=this.optCompleteServerCache_!=null?this.optCompleteServerCache_:Zi(this.viewCache_),s=NF(this.writes_,i,n,1,r,e);return s.length===0?null:s[0]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function DF(t){return{filter:t}}function LF(t,e){B(e.eventCache.getNode().isIndexed(t.filter.getIndex()),"Event snap not indexed"),B(e.serverCache.getNode().isIndexed(t.filter.getIndex()),"Server snap not indexed")}function OF(t,e,n,r,i){const s=new PF;let o,a;if(n.type===Sn.OVERWRITE){const c=n;c.source.fromUser?o=Gp(t,e,c.path,c.snap,r,i,s):(B(c.source.fromServer,"Unknown source."),a=c.source.tagged||e.serverCache.isFiltered()&&!se(c.path),o=Jc(t,e,c.path,c.snap,r,i,a,s))}else if(n.type===Sn.MERGE){const c=n;c.source.fromUser?o=FF(t,e,c.path,c.children,r,i,s):(B(c.source.fromServer,"Unknown source."),a=c.source.tagged||e.serverCache.isFiltered(),o=Kp(t,e,c.path,c.children,r,i,a,s))}else if(n.type===Sn.ACK_USER_WRITE){const c=n;c.revert?o=UF(t,e,c.path,r,i,s):o=VF(t,e,c.path,c.affectedTree,r,i,s)}else if(n.type===Sn.LISTEN_COMPLETE)o=jF(t,e,n.path,r,s);else throw _o("Unknown operation type: "+n.type);const l=s.getChanges();return MF(e,o,l),{viewCache:o,changes:l}}function MF(t,e,n){const r=e.eventCache;if(r.isFullyInitialized()){const i=r.getNode().isLeafNode()||r.getNode().isEmpty(),s=Wp(t);(n.length>0||!t.eventCache.isFullyInitialized()||i&&!r.getNode().equals(s)||!r.getNode().getPriority().equals(s.getPriority()))&&n.push(e1(Wp(e)))}}function c1(t,e,n,r,i,s){const o=e.eventCache;if(Xc(r,n)!=null)return e;{let a,l;if(se(n))if(B(e.serverCache.isFullyInitialized(),"If change path is empty, we must have complete server data"),e.serverCache.isFiltered()){const c=Zi(e),h=c instanceof X?c:X.EMPTY_NODE,f=Yg(r,h);a=t.filter.updateFullNode(e.eventCache.getNode(),f,s)}else{const c=Yc(r,Zi(e));a=t.filter.updateFullNode(e.eventCache.getNode(),c,s)}else{const c=ne(n);if(c===".priority"){B(si(n)===1,"Can't have a priority with additional path components");const h=o.getNode();l=e.serverCache.getNode();const f=Tw(r,n,h,l);f!=null?a=t.filter.updatePriority(h,f):a=o.getNode()}else{const h=Ae(n);let f;if(o.isCompleteForChild(c)){l=e.serverCache.getNode();const p=Tw(r,n,o.getNode(),l);p!=null?f=o.getNode().getImmediateChild(c).updateChild(h,p):f=o.getNode().getImmediateChild(c)}else f=Xg(r,c,e.serverCache);f!=null?a=t.filter.updateChild(o.getNode(),c,f,h,i,s):a=o.getNode()}}return Ta(e,a,o.isFullyInitialized()||se(n),t.filter.filtersNodes())}}function Jc(t,e,n,r,i,s,o,a){const l=e.serverCache;let c;const h=o?t.filter:t.filter.getIndexedFilter();if(se(n))c=h.updateFullNode(l.getNode(),r,null);else if(h.filtersNodes()&&!l.isFiltered()){const _=l.getNode().updateChild(n,r);c=h.updateFullNode(l.getNode(),_,null)}else{const _=ne(n);if(!l.isCompleteForPath(n)&&si(n)>1)return e;const E=Ae(n),k=l.getNode().getImmediateChild(_).updateChild(E,r);_===".priority"?c=h.updatePriority(l.getNode(),k):c=h.updateChild(l.getNode(),_,k,E,u1,null)}const f=r1(e,c,l.isFullyInitialized()||se(n),h.filtersNodes()),p=new Jg(i,f,s);return c1(t,f,n,i,p,a)}function Gp(t,e,n,r,i,s,o){const a=e.eventCache;let l,c;const h=new Jg(i,e,s);if(se(n))c=t.filter.updateFullNode(e.eventCache.getNode(),r,o),l=Ta(e,c,!0,t.filter.filtersNodes());else{const f=ne(n);if(f===".priority")c=t.filter.updatePriority(e.eventCache.getNode(),r),l=Ta(e,c,a.isFullyInitialized(),a.isFiltered());else{const p=Ae(n),_=a.getNode().getImmediateChild(f);let E;if(se(p))E=r;else{const S=h.getCompleteChild(f);S!=null?qC(p)===".priority"&&S.getChild(KC(p)).isEmpty()?E=S:E=S.updateChild(p,r):E=X.EMPTY_NODE}if(_.equals(E))l=e;else{const S=t.filter.updateChild(a.getNode(),f,E,p,h,o);l=Ta(e,S,a.isFullyInitialized(),t.filter.filtersNodes())}}}return l}function Iw(t,e){return t.eventCache.isCompleteForChild(e)}function FF(t,e,n,r,i,s,o){let a=e;return r.foreach((l,c)=>{const h=Ke(n,l);Iw(e,ne(h))&&(a=Gp(t,a,h,c,i,s,o))}),r.foreach((l,c)=>{const h=Ke(n,l);Iw(e,ne(h))||(a=Gp(t,a,h,c,i,s,o))}),a}function Cw(t,e,n){return n.foreach((r,i)=>{e=e.updateChild(r,i)}),e}function Kp(t,e,n,r,i,s,o,a){if(e.serverCache.getNode().isEmpty()&&!e.serverCache.isFullyInitialized())return e;let l=e,c;se(n)?c=r:c=new Ce(null).setTree(n,r);const h=e.serverCache.getNode();return c.children.inorderTraversal((f,p)=>{if(h.hasChild(f)){const _=e.serverCache.getNode().getImmediateChild(f),E=Cw(t,_,p);l=Jc(t,l,new we(f),E,i,s,o,a)}}),c.children.inorderTraversal((f,p)=>{const _=!e.serverCache.isCompleteForChild(f)&&p.value===null;if(!h.hasChild(f)&&!_){const E=e.serverCache.getNode().getImmediateChild(f),S=Cw(t,E,p);l=Jc(t,l,new we(f),S,i,s,o,a)}}),l}function VF(t,e,n,r,i,s,o){if(Xc(i,n)!=null)return e;const a=e.serverCache.isFiltered(),l=e.serverCache;if(r.value!=null){if(se(n)&&l.isFullyInitialized()||l.isCompleteForPath(n))return Jc(t,e,n,l.getNode().getChild(n),i,s,a,o);if(se(n)){let c=new Ce(null);return l.getNode().forEachChild(Ws,(h,f)=>{c=c.set(new we(h),f)}),Kp(t,e,n,c,i,s,a,o)}else return e}else{let c=new Ce(null);return r.foreach((h,f)=>{const p=Ke(n,h);l.isCompleteForPath(p)&&(c=c.set(h,l.getNode().getChild(p)))}),Kp(t,e,n,c,i,s,a,o)}}function jF(t,e,n,r,i){const s=e.serverCache,o=r1(e,s.getNode(),s.isFullyInitialized()||se(n),s.isFiltered());return c1(t,o,n,r,u1,i)}function UF(t,e,n,r,i,s){let o;if(Xc(r,n)!=null)return e;{const a=new Jg(r,e,i),l=e.eventCache.getNode();let c;if(se(n)||ne(n)===".priority"){let h;if(e.serverCache.isFullyInitialized())h=Yc(r,Zi(e));else{const f=e.serverCache.getNode();B(f instanceof X,"serverChildren would be complete if leaf node"),h=Yg(r,f)}h=h,c=t.filter.updateFullNode(l,h,s)}else{const h=ne(n);let f=Xg(r,h,e.serverCache);f==null&&e.serverCache.isCompleteForChild(h)&&(f=l.getImmediateChild(h)),f!=null?c=t.filter.updateChild(l,h,f,Ae(n),a,s):e.eventCache.getNode().hasChild(h)?c=t.filter.updateChild(l,h,X.EMPTY_NODE,Ae(n),a,s):c=l,c.isEmpty()&&e.serverCache.isFullyInitialized()&&(o=Yc(r,Zi(e)),o.isLeafNode()&&(c=t.filter.updateFullNode(c,o,s)))}return o=e.serverCache.isFullyInitialized()||Xc(r,me())!=null,Ta(e,c,o,t.filter.filtersNodes())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class BF{constructor(e,n){this.query_=e,this.eventRegistrations_=[];const r=this.query_._queryParams,i=new qg(r.getIndex()),s=oF(r);this.processor_=DF(s);const o=n.serverCache,a=n.eventCache,l=i.updateFullNode(X.EMPTY_NODE,o.getNode(),null),c=s.updateFullNode(X.EMPTY_NODE,a.getNode(),null),h=new Ji(l,o.isFullyInitialized(),i.filtersNodes()),f=new Ji(c,a.isFullyInitialized(),s.filtersNodes());this.viewCache_=zh(f,h),this.eventGenerator_=new fF(this.query_)}get query(){return this.query_}}function zF(t){return t.viewCache_.serverCache.getNode()}function WF(t,e){const n=Zi(t.viewCache_);return n&&(t.query._queryParams.loadsAllData()||!se(e)&&!n.getImmediateChild(ne(e)).isEmpty())?n.getChild(e):null}function Sw(t){return t.eventRegistrations_.length===0}function HF(t,e){t.eventRegistrations_.push(e)}function Rw(t,e,n){const r=[];if(n){B(e==null,"A cancel should cancel all event registrations.");const i=t.query._path;t.eventRegistrations_.forEach(s=>{const o=s.createCancelEvent(n,i);o&&r.push(o)})}if(e){let i=[];for(let s=0;s<t.eventRegistrations_.length;++s){const o=t.eventRegistrations_[s];if(!o.matches(e))i.push(o);else if(e.hasAnyCallback()){i=i.concat(t.eventRegistrations_.slice(s+1));break}}t.eventRegistrations_=i}else t.eventRegistrations_=[];return r}function kw(t,e,n,r){e.type===Sn.MERGE&&e.source.queryId!==null&&(B(Zi(t.viewCache_),"We should always have a full cache before handling merges"),B(Wp(t.viewCache_),"Missing event cache, even though we have a server cache"));const i=t.viewCache_,s=OF(t.processor_,i,e,n,r);return LF(t.processor_,s.viewCache),B(s.viewCache.serverCache.isFullyInitialized()||!i.serverCache.isFullyInitialized(),"Once a server snap is complete, it should never go back"),t.viewCache_=s.viewCache,h1(t,s.changes,s.viewCache.eventCache.getNode(),null)}function qF(t,e){const n=t.viewCache_.eventCache,r=[];return n.getNode().isLeafNode()||n.getNode().forEachChild(Me,(s,o)=>{r.push(to(s,o))}),n.isFullyInitialized()&&r.push(e1(n.getNode())),h1(t,r,n.getNode(),e)}function h1(t,e,n,r){const i=r?[r]:t.eventRegistrations_;return pF(t.eventGenerator_,e,n,i)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Zc;class GF{constructor(){this.views=new Map}}function KF(t){B(!Zc,"__referenceConstructor has already been defined"),Zc=t}function $F(){return B(Zc,"Reference.ts has not been loaded"),Zc}function QF(t){return t.views.size===0}function Zg(t,e,n,r){const i=e.source.queryId;if(i!==null){const s=t.views.get(i);return B(s!=null,"SyncTree gave us an op for an invalid query."),kw(s,e,n,r)}else{let s=[];for(const o of t.views.values())s=s.concat(kw(o,e,n,r));return s}}function YF(t,e,n,r,i){const s=e._queryIdentifier,o=t.views.get(s);if(!o){let a=Yc(n,i?r:null),l=!1;a?l=!0:r instanceof X?(a=Yg(n,r),l=!1):(a=X.EMPTY_NODE,l=!1);const c=zh(new Ji(a,l,!1),new Ji(r,i,!1));return new BF(e,c)}return o}function XF(t,e,n,r,i,s){const o=YF(t,e,r,i,s);return t.views.has(e._queryIdentifier)||t.views.set(e._queryIdentifier,o),HF(o,n),qF(o,n)}function JF(t,e,n,r){const i=e._queryIdentifier,s=[];let o=[];const a=oi(t);if(i==="default")for(const[l,c]of t.views.entries())o=o.concat(Rw(c,n,r)),Sw(c)&&(t.views.delete(l),c.query._queryParams.loadsAllData()||s.push(c.query));else{const l=t.views.get(i);l&&(o=o.concat(Rw(l,n,r)),Sw(l)&&(t.views.delete(i),l.query._queryParams.loadsAllData()||s.push(l.query)))}return a&&!oi(t)&&s.push(new($F())(e._repo,e._path)),{removed:s,events:o}}function d1(t){const e=[];for(const n of t.views.values())n.query._queryParams.loadsAllData()||e.push(n);return e}function Hs(t,e){let n=null;for(const r of t.views.values())n=n||WF(r,e);return n}function f1(t,e){if(e._queryParams.loadsAllData())return Wh(t);{const r=e._queryIdentifier;return t.views.get(r)}}function p1(t,e){return f1(t,e)!=null}function oi(t){return Wh(t)!=null}function Wh(t){for(const e of t.views.values())if(e.query._queryParams.loadsAllData())return e;return null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let eh;function ZF(t){B(!eh,"__referenceConstructor has already been defined"),eh=t}function eV(){return B(eh,"Reference.ts has not been loaded"),eh}let tV=1;class xw{constructor(e){this.listenProvider_=e,this.syncPointTree_=new Ce(null),this.pendingWriteTree_=xF(),this.tagToQueryMap=new Map,this.queryToTagMap=new Map}}function m1(t,e,n,r,i){return yF(t.pendingWriteTree_,e,n,r,i),i?Ll(t,new Xi(n1(),e,n)):[]}function Oi(t,e,n=!1){const r=vF(t.pendingWriteTree_,e);if(wF(t.pendingWriteTree_,e)){let s=new Ce(null);return r.snap!=null?s=s.set(me(),!0):qt(r.children,o=>{s=s.set(new we(o),!0)}),Ll(t,new Qc(r.path,s,n))}else return[]}function Hh(t,e,n){return Ll(t,new Xi(Kg(),e,n))}function nV(t,e,n){const r=Ce.fromObject(n);return Ll(t,new sl(Kg(),e,r))}function rV(t,e){return Ll(t,new il(Kg(),e))}function iV(t,e,n){const r=t_(t,n);if(r){const i=n_(r),s=i.path,o=i.queryId,a=jt(s,e),l=new il($g(o),a);return r_(t,s,l)}else return[]}function $p(t,e,n,r,i=!1){const s=e._path,o=t.syncPointTree_.get(s);let a=[];if(o&&(e._queryIdentifier==="default"||p1(o,e))){const l=JF(o,e,n,r);QF(o)&&(t.syncPointTree_=t.syncPointTree_.remove(s));const c=l.removed;if(a=l.events,!i){const h=c.findIndex(p=>p._queryParams.loadsAllData())!==-1,f=t.syncPointTree_.findOnPath(s,(p,_)=>oi(_));if(h&&!f){const p=t.syncPointTree_.subtree(s);if(!p.isEmpty()){const _=aV(p);for(let E=0;E<_.length;++E){const S=_[E],k=S.query,A=y1(t,S);t.listenProvider_.startListening(Ca(k),th(t,k),A.hashFn,A.onComplete)}}}!f&&c.length>0&&!r&&(h?t.listenProvider_.stopListening(Ca(e),null):c.forEach(p=>{const _=t.queryToTagMap.get(qh(p));t.listenProvider_.stopListening(Ca(p),_)}))}lV(t,c)}return a}function sV(t,e,n,r){const i=t_(t,r);if(i!=null){const s=n_(i),o=s.path,a=s.queryId,l=jt(o,e),c=new Xi($g(a),l,n);return r_(t,o,c)}else return[]}function oV(t,e,n,r){const i=t_(t,r);if(i){const s=n_(i),o=s.path,a=s.queryId,l=jt(o,e),c=Ce.fromObject(n),h=new sl($g(a),l,c);return r_(t,o,h)}else return[]}function Nw(t,e,n,r=!1){const i=e._path;let s=null,o=!1;t.syncPointTree_.foreachOnPath(i,(p,_)=>{const E=jt(p,i);s=s||Hs(_,E),o=o||oi(_)});let a=t.syncPointTree_.get(i);a?(o=o||oi(a),s=s||Hs(a,me())):(a=new GF,t.syncPointTree_=t.syncPointTree_.set(i,a));let l;s!=null?l=!0:(l=!1,s=X.EMPTY_NODE,t.syncPointTree_.subtree(i).foreachChild((_,E)=>{const S=Hs(E,me());S&&(s=s.updateImmediateChild(_,S))}));const c=p1(a,e);if(!c&&!e._queryParams.loadsAllData()){const p=qh(e);B(!t.queryToTagMap.has(p),"View does not exist, but we have a tag");const _=uV();t.queryToTagMap.set(p,_),t.tagToQueryMap.set(_,p)}const h=Qg(t.pendingWriteTree_,i);let f=XF(a,e,n,h,s,l);if(!c&&!o&&!r){const p=f1(a,e);f=f.concat(cV(t,e,p))}return f}function e_(t,e,n){const i=t.pendingWriteTree_,s=t.syncPointTree_.findOnPath(e,(o,a)=>{const l=jt(o,e),c=Hs(a,l);if(c)return c});return o1(i,e,s,n,!0)}function Ll(t,e){return g1(e,t.syncPointTree_,null,Qg(t.pendingWriteTree_,me()))}function g1(t,e,n,r){if(se(t.path))return _1(t,e,n,r);{const i=e.get(me());n==null&&i!=null&&(n=Hs(i,me()));let s=[];const o=ne(t.path),a=t.operationForChild(o),l=e.children.get(o);if(l&&a){const c=n?n.getImmediateChild(o):null,h=a1(r,o);s=s.concat(g1(a,l,c,h))}return i&&(s=s.concat(Zg(i,t,r,n))),s}}function _1(t,e,n,r){const i=e.get(me());n==null&&i!=null&&(n=Hs(i,me()));let s=[];return e.children.inorderTraversal((o,a)=>{const l=n?n.getImmediateChild(o):null,c=a1(r,o),h=t.operationForChild(o);h&&(s=s.concat(_1(h,a,l,c)))}),i&&(s=s.concat(Zg(i,t,r,n))),s}function y1(t,e){const n=e.query,r=th(t,n);return{hashFn:()=>(zF(e)||X.EMPTY_NODE).hash(),onComplete:i=>{if(i==="ok")return r?iV(t,n._path,r):rV(t,n._path);{const s=s4(i,n);return $p(t,n,null,s)}}}}function th(t,e){const n=qh(e);return t.queryToTagMap.get(n)}function qh(t){return t._path.toString()+"$"+t._queryIdentifier}function t_(t,e){return t.tagToQueryMap.get(e)}function n_(t){const e=t.indexOf("$");return B(e!==-1&&e<t.length-1,"Bad queryKey."),{queryId:t.substr(e+1),path:new we(t.substr(0,e))}}function r_(t,e,n){const r=t.syncPointTree_.get(e);B(r,"Missing sync point for query tag that we're tracking");const i=Qg(t.pendingWriteTree_,e);return Zg(r,n,i,null)}function aV(t){return t.fold((e,n,r)=>{if(n&&oi(n))return[Wh(n)];{let i=[];return n&&(i=d1(n)),qt(r,(s,o)=>{i=i.concat(o)}),i}})}function Ca(t){return t._queryParams.loadsAllData()&&!t._queryParams.isDefault()?new(eV())(t._repo,t._path):t}function lV(t,e){for(let n=0;n<e.length;++n){const r=e[n];if(!r._queryParams.loadsAllData()){const i=qh(r),s=t.queryToTagMap.get(i);t.queryToTagMap.delete(i),t.tagToQueryMap.delete(s)}}}function uV(){return tV++}function cV(t,e,n){const r=e._path,i=th(t,e),s=y1(t,n),o=t.listenProvider_.startListening(Ca(e),i,s.hashFn,s.onComplete),a=t.syncPointTree_.subtree(r);if(i)B(!oi(a.value),"If we're adding a query, it shouldn't be shadowed");else{const l=a.fold((c,h,f)=>{if(!se(c)&&h&&oi(h))return[Wh(h).query];{let p=[];return h&&(p=p.concat(d1(h).map(_=>_.query))),qt(f,(_,E)=>{p=p.concat(E)}),p}});for(let c=0;c<l.length;++c){const h=l[c];t.listenProvider_.stopListening(Ca(h),th(t,h))}}return o}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class i_{constructor(e){this.node_=e}getImmediateChild(e){const n=this.node_.getImmediateChild(e);return new i_(n)}node(){return this.node_}}class s_{constructor(e,n){this.syncTree_=e,this.path_=n}getImmediateChild(e){const n=Ke(this.path_,e);return new s_(this.syncTree_,n)}node(){return e_(this.syncTree_,this.path_)}}const hV=function(t){return t=t||{},t.timestamp=t.timestamp||new Date().getTime(),t},Pw=function(t,e,n){if(!t||typeof t!="object")return t;if(B(".sv"in t,"Unexpected leaf node or priority contents"),typeof t[".sv"]=="string")return dV(t[".sv"],e,n);if(typeof t[".sv"]=="object")return fV(t[".sv"],e);B(!1,"Unexpected server value: "+JSON.stringify(t,null,2))},dV=function(t,e,n){switch(t){case"timestamp":return n.timestamp;default:B(!1,"Unexpected server value: "+t)}},fV=function(t,e,n){t.hasOwnProperty("increment")||B(!1,"Unexpected server value: "+JSON.stringify(t,null,2));const r=t.increment;typeof r!="number"&&B(!1,"Unexpected increment value: "+r);const i=e.node();if(B(i!==null&&typeof i<"u","Expected ChildrenNode.EMPTY_NODE for nulls"),!i.isLeafNode())return r;const o=i.getValue();return typeof o!="number"?r:o+r},pV=function(t,e,n,r){return o_(e,new s_(n,t),r)},v1=function(t,e,n){return o_(t,new i_(e),n)};function o_(t,e,n){const r=t.getPriority().val(),i=Pw(r,e.getImmediateChild(".priority"),n);let s;if(t.isLeafNode()){const o=t,a=Pw(o.getValue(),e,n);return a!==o.getValue()||i!==o.getPriority().val()?new Je(a,lt(i)):t}else{const o=t;return s=o,i!==o.getPriority().val()&&(s=s.updatePriority(new Je(i))),o.forEachChild(Me,(a,l)=>{const c=o_(l,e.getImmediateChild(a),n);c!==l&&(s=s.updateImmediateChild(a,c))}),s}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class a_{constructor(e="",n=null,r={children:{},childCount:0}){this.name=e,this.parent=n,this.node=r}}function l_(t,e){let n=e instanceof we?e:new we(e),r=t,i=ne(n);for(;i!==null;){const s=Zs(r.node.children,i)||{children:{},childCount:0};r=new a_(i,r,s),n=Ae(n),i=ne(n)}return r}function Eo(t){return t.node.value}function w1(t,e){t.node.value=e,Qp(t)}function A1(t){return t.node.childCount>0}function mV(t){return Eo(t)===void 0&&!A1(t)}function Gh(t,e){qt(t.node.children,(n,r)=>{e(new a_(n,t,r))})}function E1(t,e,n,r){n&&!r&&e(t),Gh(t,i=>{E1(i,e,!0,r)}),n&&r&&e(t)}function gV(t,e,n){let r=t.parent;for(;r!==null;){if(e(r))return!0;r=r.parent}return!1}function Ol(t){return new we(t.parent===null?t.name:Ol(t.parent)+"/"+t.name)}function Qp(t){t.parent!==null&&_V(t.parent,t.name,t)}function _V(t,e,n){const r=mV(n),i=Sr(t.node.children,e);r&&i?(delete t.node.children[e],t.node.childCount--,Qp(t)):!r&&!i&&(t.node.children[e]=n.node,t.node.childCount++,Qp(t))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yV=/[\[\].#$\/\u0000-\u001F\u007F]/,vV=/[\[\].#$\u0000-\u001F\u007F]/,Sf=10*1024*1024,T1=function(t){return typeof t=="string"&&t.length!==0&&!yV.test(t)},I1=function(t){return typeof t=="string"&&t.length!==0&&!vV.test(t)},wV=function(t){return t&&(t=t.replace(/^\/*\.info(\/|$)/,"/")),I1(t)},C1=function(t,e,n,r){r&&e===void 0||u_(vg(t,"value"),e,n)},u_=function(t,e,n){const r=n instanceof we?new V4(n,t):n;if(e===void 0)throw new Error(t+"contains undefined "+ki(r));if(typeof e=="function")throw new Error(t+"contains a function "+ki(r)+" with contents = "+e.toString());if(IC(e))throw new Error(t+"contains "+e.toString()+" "+ki(r));if(typeof e=="string"&&e.length>Sf/3&&Oh(e)>Sf)throw new Error(t+"contains a string greater than "+Sf+" utf8 bytes "+ki(r)+" ('"+e.substring(0,50)+"...')");if(e&&typeof e=="object"){let i=!1,s=!1;if(qt(e,(o,a)=>{if(o===".value")i=!0;else if(o!==".priority"&&o!==".sv"&&(s=!0,!T1(o)))throw new Error(t+" contains an invalid key ("+o+") "+ki(r)+`.  Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`);j4(r,o),u_(t,a,r),U4(r)}),i&&s)throw new Error(t+' contains ".value" child '+ki(r)+" in addition to actual children.")}},S1=function(t,e,n,r){if(!I1(n))throw new Error(vg(t,e)+'was an invalid path = "'+n+`". Paths must be non-empty strings and can't contain ".", "#", "$", "[", or "]"`)},AV=function(t,e,n,r){n&&(n=n.replace(/^\/*\.info(\/|$)/,"/")),S1(t,e,n)},c_=function(t,e){if(ne(e)===".info")throw new Error(t+" failed = Can't modify data under /.info/")},EV=function(t,e){const n=e.path.toString();if(typeof e.repoInfo.host!="string"||e.repoInfo.host.length===0||!T1(e.repoInfo.namespace)&&e.repoInfo.host.split(":")[0]!=="localhost"||n.length!==0&&!wV(n))throw new Error(vg(t,"url")+`must be a valid firebase URL and the path can't contain ".", "#", "$", "[", or "]".`)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class TV{constructor(){this.eventLists_=[],this.recursionDepth_=0}}function h_(t,e){let n=null;for(let r=0;r<e.length;r++){const i=e[r],s=i.getPath();n!==null&&!zg(s,n.path)&&(t.eventLists_.push(n),n=null),n===null&&(n={events:[],path:s}),n.events.push(i)}n&&t.eventLists_.push(n)}function R1(t,e,n){h_(t,n),k1(t,r=>zg(r,e))}function wr(t,e,n){h_(t,n),k1(t,r=>Cn(r,e)||Cn(e,r))}function k1(t,e){t.recursionDepth_++;let n=!0;for(let r=0;r<t.eventLists_.length;r++){const i=t.eventLists_[r];if(i){const s=i.path;e(s)?(IV(t.eventLists_[r]),t.eventLists_[r]=null):n=!1}}n&&(t.eventLists_=[]),t.recursionDepth_--}function IV(t){for(let e=0;e<t.events.length;e++){const n=t.events[e];if(n!==null){t.events[e]=null;const r=n.getEventRunner();Aa&&At("event: "+n.toString()),Ao(r)}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const CV="repo_interrupt",SV=25;class RV{constructor(e,n,r,i){this.repoInfo_=e,this.forceRestClient_=n,this.authTokenProvider_=r,this.appCheckProvider_=i,this.dataUpdateCount=0,this.statsListener_=null,this.eventQueue_=new TV,this.nextWriteId_=1,this.interceptServerDataCallback_=null,this.onDisconnect_=$c(),this.transactionQueueTree_=new a_,this.persistentConnection_=null,this.key=this.repoInfo_.toURLString()}toString(){return(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host}}function kV(t,e,n){if(t.stats_=Ug(t.repoInfo_),t.forceRestClient_||u4())t.server_=new Kc(t.repoInfo_,(r,i,s,o)=>{bw(t,r,i,s,o)},t.authTokenProvider_,t.appCheckProvider_),setTimeout(()=>Dw(t,!0),0);else{if(typeof n<"u"&&n!==null){if(typeof n!="object")throw new Error("Only objects are supported for option databaseAuthVariableOverride");try{nt(n)}catch(r){throw new Error("Invalid authOverride provided: "+r)}}t.persistentConnection_=new hr(t.repoInfo_,e,(r,i,s,o)=>{bw(t,r,i,s,o)},r=>{Dw(t,r)},r=>{xV(t,r)},t.authTokenProvider_,t.appCheckProvider_,n),t.server_=t.persistentConnection_}t.authTokenProvider_.addTokenChangeListener(r=>{t.server_.refreshAuthToken(r)}),t.appCheckProvider_.addTokenChangeListener(r=>{t.server_.refreshAppCheckToken(r.token)}),t.statsReporter_=p4(t.repoInfo_,()=>new dF(t.stats_,t.server_)),t.infoData_=new aF,t.infoSyncTree_=new xw({startListening:(r,i,s,o)=>{let a=[];const l=t.infoData_.getNode(r._path);return l.isEmpty()||(a=Hh(t.infoSyncTree_,r._path,l),setTimeout(()=>{o("ok")},0)),a},stopListening:()=>{}}),f_(t,"connected",!1),t.serverSyncTree_=new xw({startListening:(r,i,s,o)=>(t.server_.listen(r,s,i,(a,l)=>{const c=o(a,l);wr(t.eventQueue_,r._path,c)}),[]),stopListening:(r,i)=>{t.server_.unlisten(r,i)}})}function x1(t){const n=t.infoData_.getNode(new we(".info/serverTimeOffset")).val()||0;return new Date().getTime()+n}function d_(t){return hV({timestamp:x1(t)})}function bw(t,e,n,r,i){t.dataUpdateCount++;const s=new we(e);n=t.interceptServerDataCallback_?t.interceptServerDataCallback_(e,n):n;let o=[];if(i)if(r){const l=Dc(n,c=>lt(c));o=oV(t.serverSyncTree_,s,l,i)}else{const l=lt(n);o=sV(t.serverSyncTree_,s,l,i)}else if(r){const l=Dc(n,c=>lt(c));o=nV(t.serverSyncTree_,s,l)}else{const l=lt(n);o=Hh(t.serverSyncTree_,s,l)}let a=s;o.length>0&&(a=Kh(t,s)),wr(t.eventQueue_,a,o)}function Dw(t,e){f_(t,"connected",e),e===!1&&PV(t)}function xV(t,e){qt(e,(n,r)=>{f_(t,n,r)})}function f_(t,e,n){const r=new we("/.info/"+e),i=lt(n);t.infoData_.updateSnapshot(r,i);const s=Hh(t.infoSyncTree_,r,i);wr(t.eventQueue_,r,s)}function N1(t){return t.nextWriteId_++}function NV(t,e,n,r,i){p_(t,"set",{path:e.toString(),value:n,priority:r});const s=d_(t),o=lt(n,r),a=e_(t.serverSyncTree_,e),l=v1(o,a,s),c=N1(t),h=m1(t.serverSyncTree_,e,l,c,!0);h_(t.eventQueue_,h),t.server_.put(e.toString(),o.val(!0),(p,_)=>{const E=p==="ok";E||Ht("set at "+e+" failed: "+p);const S=Oi(t.serverSyncTree_,c,!E);wr(t.eventQueue_,e,S),LV(t,i,p,_)});const f=O1(t,e);Kh(t,f),wr(t.eventQueue_,f,[])}function PV(t){p_(t,"onDisconnectEvents");const e=d_(t),n=$c();zp(t.onDisconnect_,me(),(i,s)=>{const o=pV(i,s,t.serverSyncTree_,e);t1(n,i,o)});let r=[];zp(n,me(),(i,s)=>{r=r.concat(Hh(t.serverSyncTree_,i,s));const o=O1(t,i);Kh(t,o)}),t.onDisconnect_=$c(),wr(t.eventQueue_,me(),r)}function bV(t,e,n){let r;ne(e._path)===".info"?r=Nw(t.infoSyncTree_,e,n):r=Nw(t.serverSyncTree_,e,n),R1(t.eventQueue_,e._path,r)}function Lw(t,e,n){let r;ne(e._path)===".info"?r=$p(t.infoSyncTree_,e,n):r=$p(t.serverSyncTree_,e,n),R1(t.eventQueue_,e._path,r)}function DV(t){t.persistentConnection_&&t.persistentConnection_.interrupt(CV)}function p_(t,...e){let n="";t.persistentConnection_&&(n=t.persistentConnection_.id+":"),At(n,...e)}function LV(t,e,n,r){e&&Ao(()=>{if(n==="ok")e(null);else{const i=(n||"error").toUpperCase();let s=i;r&&(s+=": "+r);const o=new Error(s);o.code=i,e(o)}})}function P1(t,e,n){return e_(t.serverSyncTree_,e,n)||X.EMPTY_NODE}function m_(t,e=t.transactionQueueTree_){if(e||$h(t,e),Eo(e)){const n=D1(t,e);B(n.length>0,"Sending zero length transaction queue"),n.every(i=>i.status===0)&&OV(t,Ol(e),n)}else A1(e)&&Gh(e,n=>{m_(t,n)})}function OV(t,e,n){const r=n.map(c=>c.currentWriteId),i=P1(t,e,r);let s=i;const o=i.hash();for(let c=0;c<n.length;c++){const h=n[c];B(h.status===0,"tryToSendTransactionQueue_: items in queue should all be run."),h.status=1,h.retryCount++;const f=jt(e,h.path);s=s.updateChild(f,h.currentOutputSnapshotRaw)}const a=s.val(!0),l=e;t.server_.put(l.toString(),a,c=>{p_(t,"transaction put response",{path:l.toString(),status:c});let h=[];if(c==="ok"){const f=[];for(let p=0;p<n.length;p++)n[p].status=2,h=h.concat(Oi(t.serverSyncTree_,n[p].currentWriteId)),n[p].onComplete&&f.push(()=>n[p].onComplete(null,!0,n[p].currentOutputSnapshotResolved)),n[p].unwatcher();$h(t,l_(t.transactionQueueTree_,e)),m_(t,t.transactionQueueTree_),wr(t.eventQueue_,e,h);for(let p=0;p<f.length;p++)Ao(f[p])}else{if(c==="datastale")for(let f=0;f<n.length;f++)n[f].status===3?n[f].status=4:n[f].status=0;else{Ht("transaction at "+l.toString()+" failed: "+c);for(let f=0;f<n.length;f++)n[f].status=4,n[f].abortReason=c}Kh(t,e)}},o)}function Kh(t,e){const n=b1(t,e),r=Ol(n),i=D1(t,n);return MV(t,i,r),r}function MV(t,e,n){if(e.length===0)return;const r=[];let i=[];const o=e.filter(a=>a.status===0).map(a=>a.currentWriteId);for(let a=0;a<e.length;a++){const l=e[a],c=jt(n,l.path);let h=!1,f;if(B(c!==null,"rerunTransactionsUnderNode_: relativePath should not be null."),l.status===4)h=!0,f=l.abortReason,i=i.concat(Oi(t.serverSyncTree_,l.currentWriteId,!0));else if(l.status===0)if(l.retryCount>=SV)h=!0,f="maxretry",i=i.concat(Oi(t.serverSyncTree_,l.currentWriteId,!0));else{const p=P1(t,l.path,o);l.currentInputSnapshot=p;const _=e[a].update(p.val());if(_!==void 0){u_("transaction failed: Data returned ",_,l.path);let E=lt(_);typeof _=="object"&&_!=null&&Sr(_,".priority")||(E=E.updatePriority(p.getPriority()));const k=l.currentWriteId,A=d_(t),v=v1(E,p,A);l.currentOutputSnapshotRaw=E,l.currentOutputSnapshotResolved=v,l.currentWriteId=N1(t),o.splice(o.indexOf(k),1),i=i.concat(m1(t.serverSyncTree_,l.path,v,l.currentWriteId,l.applyLocally)),i=i.concat(Oi(t.serverSyncTree_,k,!0))}else h=!0,f="nodata",i=i.concat(Oi(t.serverSyncTree_,l.currentWriteId,!0))}wr(t.eventQueue_,n,i),i=[],h&&(e[a].status=2,function(p){setTimeout(p,Math.floor(0))}(e[a].unwatcher),e[a].onComplete&&(f==="nodata"?r.push(()=>e[a].onComplete(null,!1,e[a].currentInputSnapshot)):r.push(()=>e[a].onComplete(new Error(f),!1,null))))}$h(t,t.transactionQueueTree_);for(let a=0;a<r.length;a++)Ao(r[a]);m_(t,t.transactionQueueTree_)}function b1(t,e){let n,r=t.transactionQueueTree_;for(n=ne(e);n!==null&&Eo(r)===void 0;)r=l_(r,n),e=Ae(e),n=ne(e);return r}function D1(t,e){const n=[];return L1(t,e,n),n.sort((r,i)=>r.order-i.order),n}function L1(t,e,n){const r=Eo(e);if(r)for(let i=0;i<r.length;i++)n.push(r[i]);Gh(e,i=>{L1(t,i,n)})}function $h(t,e){const n=Eo(e);if(n){let r=0;for(let i=0;i<n.length;i++)n[i].status!==2&&(n[r]=n[i],r++);n.length=r,w1(e,n.length>0?n:void 0)}Gh(e,r=>{$h(t,r)})}function O1(t,e){const n=Ol(b1(t,e)),r=l_(t.transactionQueueTree_,e);return gV(r,i=>{Rf(t,i)}),Rf(t,r),E1(r,i=>{Rf(t,i)}),n}function Rf(t,e){const n=Eo(e);if(n){const r=[];let i=[],s=-1;for(let o=0;o<n.length;o++)n[o].status===3||(n[o].status===1?(B(s===o-1,"All SENT items should be at beginning of queue."),s=o,n[o].status=3,n[o].abortReason="set"):(B(n[o].status===0,"Unexpected transaction status in abort"),n[o].unwatcher(),i=i.concat(Oi(t.serverSyncTree_,n[o].currentWriteId,!0)),n[o].onComplete&&r.push(n[o].onComplete.bind(null,new Error("set"),!1,null))));s===-1?w1(e,void 0):n.length=s+1,wr(t.eventQueue_,Ol(e),i);for(let o=0;o<r.length;o++)Ao(r[o])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function FV(t){let e="";const n=t.split("/");for(let r=0;r<n.length;r++)if(n[r].length>0){let i=n[r];try{i=decodeURIComponent(i.replace(/\+/g," "))}catch{}e+="/"+i}return e}function VV(t){const e={};t.charAt(0)==="?"&&(t=t.substring(1));for(const n of t.split("&")){if(n.length===0)continue;const r=n.split("=");r.length===2?e[decodeURIComponent(r[0])]=decodeURIComponent(r[1]):Ht(`Invalid query segment '${n}' in query '${t}'`)}return e}const Ow=function(t,e){const n=jV(t),r=n.namespace;n.domain==="firebase.com"&&vr(n.host+" is no longer supported. Please use <YOUR FIREBASE>.firebaseio.com instead"),(!r||r==="undefined")&&n.domain!=="localhost"&&vr("Cannot parse Firebase url. Please use https://<YOUR FIREBASE>.firebaseio.com"),n.secure||e4();const i=n.scheme==="ws"||n.scheme==="wss";return{repoInfo:new MC(n.host,n.secure,r,i,e,"",r!==n.subdomain),path:new we(n.pathString)}},jV=function(t){let e="",n="",r="",i="",s="",o=!0,a="https",l=443;if(typeof t=="string"){let c=t.indexOf("//");c>=0&&(a=t.substring(0,c-1),t=t.substring(c+2));let h=t.indexOf("/");h===-1&&(h=t.length);let f=t.indexOf("?");f===-1&&(f=t.length),e=t.substring(0,Math.min(h,f)),h<f&&(i=FV(t.substring(h,f)));const p=VV(t.substring(Math.min(t.length,f)));c=e.indexOf(":"),c>=0?(o=a==="https"||a==="wss",l=parseInt(e.substring(c+1),10)):c=e.length;const _=e.slice(0,c);if(_.toLowerCase()==="localhost")n="localhost";else if(_.split(".").length<=2)n=_;else{const E=e.indexOf(".");r=e.substring(0,E).toLowerCase(),n=e.substring(E+1),s=r}"ns"in p&&(s=p.ns)}return{host:e,port:l,domain:n,subdomain:r,secure:o,scheme:a,pathString:i,namespace:s}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Mw="-0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ_abcdefghijklmnopqrstuvwxyz",UV=function(){let t=0;const e=[];return function(n){const r=n===t;t=n;let i;const s=new Array(8);for(i=7;i>=0;i--)s[i]=Mw.charAt(n%64),n=Math.floor(n/64);B(n===0,"Cannot push at time == 0");let o=s.join("");if(r){for(i=11;i>=0&&e[i]===63;i--)e[i]=0;e[i]++}else for(i=0;i<12;i++)e[i]=Math.floor(Math.random()*64);for(i=0;i<12;i++)o+=Mw.charAt(e[i]);return B(o.length===20,"nextPushId: Length should be 20."),o}}();/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class BV{constructor(e,n,r,i){this.eventType=e,this.eventRegistration=n,this.snapshot=r,this.prevName=i}getPath(){const e=this.snapshot.ref;return this.eventType==="value"?e._path:e.parent._path}getEventType(){return this.eventType}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.getPath().toString()+":"+this.eventType+":"+nt(this.snapshot.exportVal())}}class zV{constructor(e,n,r){this.eventRegistration=e,this.error=n,this.path=r}getPath(){return this.path}getEventType(){return"cancel"}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.path.toString()+":cancel"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class WV{constructor(e,n){this.snapshotCallback=e,this.cancelCallback=n}onValue(e,n){this.snapshotCallback.call(null,e,n)}onCancel(e){return B(this.hasCancelCallback,"Raising a cancel event on a listener with no cancel callback"),this.cancelCallback.call(null,e)}get hasCancelCallback(){return!!this.cancelCallback}matches(e){return this.snapshotCallback===e.snapshotCallback||this.snapshotCallback.userCallback!==void 0&&this.snapshotCallback.userCallback===e.snapshotCallback.userCallback&&this.snapshotCallback.context===e.snapshotCallback.context}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class g_{constructor(e,n,r,i){this._repo=e,this._path=n,this._queryParams=r,this._orderByCalled=i}get key(){return se(this._path)?null:qC(this._path)}get ref(){return new wi(this._repo,this._path)}get _queryIdentifier(){const e=yw(this._queryParams),n=Vg(e);return n==="{}"?"default":n}get _queryObject(){return yw(this._queryParams)}isEqual(e){if(e=Fe(e),!(e instanceof g_))return!1;const n=this._repo===e._repo,r=zg(this._path,e._path),i=this._queryIdentifier===e._queryIdentifier;return n&&r&&i}toJSON(){return this.toString()}toString(){return this._repo.toString()+F4(this._path)}}class wi extends g_{constructor(e,n){super(e,n,new Gg,!1)}get parent(){const e=KC(this._path);return e===null?null:new wi(this._repo,e)}get root(){let e=this;for(;e.parent!==null;)e=e.parent;return e}}class nh{constructor(e,n,r){this._node=e,this.ref=n,this._index=r}get priority(){return this._node.getPriority().val()}get key(){return this.ref.key}get size(){return this._node.numChildren()}child(e){const n=new we(e),r=ol(this.ref,e);return new nh(this._node.getChild(n),r,Me)}exists(){return!this._node.isEmpty()}exportVal(){return this._node.val(!0)}forEach(e){return this._node.isLeafNode()?!1:!!this._node.forEachChild(this._index,(r,i)=>e(new nh(i,ol(this.ref,r),Me)))}hasChild(e){const n=new we(e);return!this._node.getChild(n).isEmpty()}hasChildren(){return this._node.isLeafNode()?!1:!this._node.isEmpty()}toJSON(){return this.exportVal()}val(){return this._node.val()}}function Vn(t,e){return t=Fe(t),t._checkNotDeleted("ref"),e!==void 0?ol(t._root,e):t._root}function ol(t,e){return t=Fe(t),ne(t._path)===null?AV("child","path",e):S1("child","path",e),new wi(t._repo,Ke(t._path,e))}function HV(t,e){t=Fe(t),c_("push",t._path),C1("push",e,t._path,!0);const n=x1(t._repo),r=UV(n),i=ol(t,r),s=ol(t,r);let o;return o=Promise.resolve(s),i.then=o.then.bind(o),i.catch=o.then.bind(o,void 0),i}function Fw(t){return c_("remove",t._path),Qh(t,null)}function Qh(t,e){t=Fe(t),c_("set",t._path),C1("set",e,t._path,!1);const n=new Lh;return NV(t._repo,t._path,e,null,n.wrapCallback(()=>{})),n.promise}class __{constructor(e){this.callbackContext=e}respondsTo(e){return e==="value"}createEvent(e,n){const r=n._queryParams.getIndex();return new BV("value",this,new nh(e.snapshotNode,new wi(n._repo,n._path),r))}getEventRunner(e){return e.getEventType()==="cancel"?()=>this.callbackContext.onCancel(e.error):()=>this.callbackContext.onValue(e.snapshot,null)}createCancelEvent(e,n){return this.callbackContext.hasCancelCallback?new zV(this,e,n):null}matches(e){return e instanceof __?!e.callbackContext||!this.callbackContext?!0:e.callbackContext.matches(this.callbackContext):!1}hasAnyCallback(){return this.callbackContext!==null}}function qV(t,e,n,r,i){let s;if(typeof r=="object"&&(s=void 0,i=r),typeof r=="function"&&(s=r),i&&i.onlyOnce){const l=n,c=(h,f)=>{Lw(t._repo,t,a),l(h,f)};c.userCallback=n.userCallback,c.context=n.context,n=c}const o=new WV(n,s||void 0),a=new __(o);return bV(t._repo,t,a),()=>Lw(t._repo,t,a)}function rh(t,e,n,r){return qV(t,"value",e,n,r)}KF(wi);ZF(wi);/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const GV="FIREBASE_DATABASE_EMULATOR_HOST",Yp={};let KV=!1;function $V(t,e,n,r){t.repoInfo_=new MC(`${e}:${n}`,!1,t.repoInfo_.namespace,t.repoInfo_.webSocketOnly,t.repoInfo_.nodeAdmin,t.repoInfo_.persistenceKey,t.repoInfo_.includeNamespaceInQueryParams,!0),r&&(t.authTokenProvider_=r)}function QV(t,e,n,r,i){let s=r||t.options.databaseURL;s===void 0&&(t.options.projectId||vr("Can't determine Firebase Database URL. Be sure to include  a Project ID when calling firebase.initializeApp()."),At("Using default host for project ",t.options.projectId),s=`${t.options.projectId}-default-rtdb.firebaseio.com`);let o=Ow(s,i),a=o.repoInfo,l;typeof process<"u"&&ew&&(l=ew[GV]),l?(s=`http://${l}?ns=${a.namespace}`,o=Ow(s,i),a=o.repoInfo):o.repoInfo.secure;const c=new h4(t.name,t.options,e);EV("Invalid Firebase Database URL",o),se(o.path)||vr("Database URL must point to the root of a Firebase Database (not including a child path).");const h=XV(a,t,c,new c4(t.name,n));return new JV(h,t)}function YV(t,e){const n=Yp[e];(!n||n[t.key]!==t)&&vr(`Database ${e}(${t.repoInfo_}) has already been deleted.`),DV(t),delete n[t.key]}function XV(t,e,n,r){let i=Yp[e.name];i||(i={},Yp[e.name]=i);let s=i[t.toURLString()];return s&&vr("Database initialized multiple times. Please make sure the format of the database URL matches with each database() call."),s=new RV(t,KV,n,r),i[t.toURLString()]=s,s}class JV{constructor(e,n){this._repoInternal=e,this.app=n,this.type="database",this._instanceStarted=!1}get _repo(){return this._instanceStarted||(kV(this._repoInternal,this.app.options.appId,this.app.options.databaseAuthVariableOverride),this._instanceStarted=!0),this._repoInternal}get _root(){return this._rootInternal||(this._rootInternal=new wi(this._repo,me())),this._rootInternal}_delete(){return this._rootInternal!==null&&(YV(this._repo,this.app.name),this._repoInternal=null,this._rootInternal=null),Promise.resolve()}_checkNotDeleted(e){this._rootInternal===null&&vr("Cannot call "+e+" on a deleted database.")}}function y_(t=Sl(),e){const n=Rr(t,"database").getImmediate({identifier:e});if(!n._instanceStarted){const r=gg("database");r&&ZV(n,...r)}return n}function ZV(t,e,n,r={}){t=Fe(t),t._checkNotDeleted("useEmulator"),t._instanceStarted&&vr("Cannot call useEmulator() after instance has already been initialized.");const i=t._repoInternal;let s;if(i.repoInfo_.nodeAdmin)r.mockUserToken&&vr('mockUserToken is not supported by the Admin SDK. For client access with mock users, please use the "firebase" package instead of "firebase-admin".'),s=new Ju(Ju.OWNER);else if(r.mockUserToken){const o=typeof r.mockUserToken=="string"?r.mockUserToken:_g(r.mockUserToken,t.app.options.projectId);s=new Ju(o)}$V(i,e,n,s)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ej(t){$M(gi),pn(new tn("database",(e,{instanceIdentifier:n})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("auth-internal"),s=e.getProvider("app-check-internal");return QV(r,i,s,n)},"PUBLIC").setMultipleInstances(!0)),Tt(tw,nw,t),Tt(tw,nw,"esm2017")}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const tj={".sv":"timestamp"};function nj(){return tj}hr.prototype.simpleListen=function(t,e){this.sendRequest("q",{p:t},e)};hr.prototype.echo=function(t,e){this.sendRequest("echo",{d:t},e)};ej();var Vw=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var ji,M1;(function(){var t;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(C,y){function I(){}I.prototype=y.prototype,C.D=y.prototype,C.prototype=new I,C.prototype.constructor=C,C.C=function(R,P,D){for(var x=Array(arguments.length-2),Ve=2;Ve<arguments.length;Ve++)x[Ve-2]=arguments[Ve];return y.prototype[P].apply(R,x)}}function n(){this.blockSize=-1}function r(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}e(r,n),r.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function i(C,y,I){I||(I=0);var R=Array(16);if(typeof y=="string")for(var P=0;16>P;++P)R[P]=y.charCodeAt(I++)|y.charCodeAt(I++)<<8|y.charCodeAt(I++)<<16|y.charCodeAt(I++)<<24;else for(P=0;16>P;++P)R[P]=y[I++]|y[I++]<<8|y[I++]<<16|y[I++]<<24;y=C.g[0],I=C.g[1],P=C.g[2];var D=C.g[3],x=y+(D^I&(P^D))+R[0]+3614090360&4294967295;y=I+(x<<7&4294967295|x>>>25),x=D+(P^y&(I^P))+R[1]+3905402710&4294967295,D=y+(x<<12&4294967295|x>>>20),x=P+(I^D&(y^I))+R[2]+606105819&4294967295,P=D+(x<<17&4294967295|x>>>15),x=I+(y^P&(D^y))+R[3]+3250441966&4294967295,I=P+(x<<22&4294967295|x>>>10),x=y+(D^I&(P^D))+R[4]+4118548399&4294967295,y=I+(x<<7&4294967295|x>>>25),x=D+(P^y&(I^P))+R[5]+1200080426&4294967295,D=y+(x<<12&4294967295|x>>>20),x=P+(I^D&(y^I))+R[6]+2821735955&4294967295,P=D+(x<<17&4294967295|x>>>15),x=I+(y^P&(D^y))+R[7]+4249261313&4294967295,I=P+(x<<22&4294967295|x>>>10),x=y+(D^I&(P^D))+R[8]+1770035416&4294967295,y=I+(x<<7&4294967295|x>>>25),x=D+(P^y&(I^P))+R[9]+2336552879&4294967295,D=y+(x<<12&4294967295|x>>>20),x=P+(I^D&(y^I))+R[10]+4294925233&4294967295,P=D+(x<<17&4294967295|x>>>15),x=I+(y^P&(D^y))+R[11]+2304563134&4294967295,I=P+(x<<22&4294967295|x>>>10),x=y+(D^I&(P^D))+R[12]+1804603682&4294967295,y=I+(x<<7&4294967295|x>>>25),x=D+(P^y&(I^P))+R[13]+4254626195&4294967295,D=y+(x<<12&4294967295|x>>>20),x=P+(I^D&(y^I))+R[14]+2792965006&4294967295,P=D+(x<<17&4294967295|x>>>15),x=I+(y^P&(D^y))+R[15]+1236535329&4294967295,I=P+(x<<22&4294967295|x>>>10),x=y+(P^D&(I^P))+R[1]+4129170786&4294967295,y=I+(x<<5&4294967295|x>>>27),x=D+(I^P&(y^I))+R[6]+3225465664&4294967295,D=y+(x<<9&4294967295|x>>>23),x=P+(y^I&(D^y))+R[11]+643717713&4294967295,P=D+(x<<14&4294967295|x>>>18),x=I+(D^y&(P^D))+R[0]+3921069994&4294967295,I=P+(x<<20&4294967295|x>>>12),x=y+(P^D&(I^P))+R[5]+3593408605&4294967295,y=I+(x<<5&4294967295|x>>>27),x=D+(I^P&(y^I))+R[10]+38016083&4294967295,D=y+(x<<9&4294967295|x>>>23),x=P+(y^I&(D^y))+R[15]+3634488961&4294967295,P=D+(x<<14&4294967295|x>>>18),x=I+(D^y&(P^D))+R[4]+3889429448&4294967295,I=P+(x<<20&4294967295|x>>>12),x=y+(P^D&(I^P))+R[9]+568446438&4294967295,y=I+(x<<5&4294967295|x>>>27),x=D+(I^P&(y^I))+R[14]+3275163606&4294967295,D=y+(x<<9&4294967295|x>>>23),x=P+(y^I&(D^y))+R[3]+4107603335&4294967295,P=D+(x<<14&4294967295|x>>>18),x=I+(D^y&(P^D))+R[8]+1163531501&4294967295,I=P+(x<<20&4294967295|x>>>12),x=y+(P^D&(I^P))+R[13]+2850285829&4294967295,y=I+(x<<5&4294967295|x>>>27),x=D+(I^P&(y^I))+R[2]+4243563512&4294967295,D=y+(x<<9&4294967295|x>>>23),x=P+(y^I&(D^y))+R[7]+1735328473&4294967295,P=D+(x<<14&4294967295|x>>>18),x=I+(D^y&(P^D))+R[12]+2368359562&4294967295,I=P+(x<<20&4294967295|x>>>12),x=y+(I^P^D)+R[5]+4294588738&4294967295,y=I+(x<<4&4294967295|x>>>28),x=D+(y^I^P)+R[8]+2272392833&4294967295,D=y+(x<<11&4294967295|x>>>21),x=P+(D^y^I)+R[11]+1839030562&4294967295,P=D+(x<<16&4294967295|x>>>16),x=I+(P^D^y)+R[14]+4259657740&4294967295,I=P+(x<<23&4294967295|x>>>9),x=y+(I^P^D)+R[1]+2763975236&4294967295,y=I+(x<<4&4294967295|x>>>28),x=D+(y^I^P)+R[4]+1272893353&4294967295,D=y+(x<<11&4294967295|x>>>21),x=P+(D^y^I)+R[7]+4139469664&4294967295,P=D+(x<<16&4294967295|x>>>16),x=I+(P^D^y)+R[10]+3200236656&4294967295,I=P+(x<<23&4294967295|x>>>9),x=y+(I^P^D)+R[13]+681279174&4294967295,y=I+(x<<4&4294967295|x>>>28),x=D+(y^I^P)+R[0]+3936430074&4294967295,D=y+(x<<11&4294967295|x>>>21),x=P+(D^y^I)+R[3]+3572445317&4294967295,P=D+(x<<16&4294967295|x>>>16),x=I+(P^D^y)+R[6]+76029189&4294967295,I=P+(x<<23&4294967295|x>>>9),x=y+(I^P^D)+R[9]+3654602809&4294967295,y=I+(x<<4&4294967295|x>>>28),x=D+(y^I^P)+R[12]+3873151461&4294967295,D=y+(x<<11&4294967295|x>>>21),x=P+(D^y^I)+R[15]+530742520&4294967295,P=D+(x<<16&4294967295|x>>>16),x=I+(P^D^y)+R[2]+3299628645&4294967295,I=P+(x<<23&4294967295|x>>>9),x=y+(P^(I|~D))+R[0]+4096336452&4294967295,y=I+(x<<6&4294967295|x>>>26),x=D+(I^(y|~P))+R[7]+1126891415&4294967295,D=y+(x<<10&4294967295|x>>>22),x=P+(y^(D|~I))+R[14]+2878612391&4294967295,P=D+(x<<15&4294967295|x>>>17),x=I+(D^(P|~y))+R[5]+4237533241&4294967295,I=P+(x<<21&4294967295|x>>>11),x=y+(P^(I|~D))+R[12]+1700485571&4294967295,y=I+(x<<6&4294967295|x>>>26),x=D+(I^(y|~P))+R[3]+2399980690&4294967295,D=y+(x<<10&4294967295|x>>>22),x=P+(y^(D|~I))+R[10]+4293915773&4294967295,P=D+(x<<15&4294967295|x>>>17),x=I+(D^(P|~y))+R[1]+2240044497&4294967295,I=P+(x<<21&4294967295|x>>>11),x=y+(P^(I|~D))+R[8]+1873313359&4294967295,y=I+(x<<6&4294967295|x>>>26),x=D+(I^(y|~P))+R[15]+4264355552&4294967295,D=y+(x<<10&4294967295|x>>>22),x=P+(y^(D|~I))+R[6]+2734768916&4294967295,P=D+(x<<15&4294967295|x>>>17),x=I+(D^(P|~y))+R[13]+1309151649&4294967295,I=P+(x<<21&4294967295|x>>>11),x=y+(P^(I|~D))+R[4]+4149444226&4294967295,y=I+(x<<6&4294967295|x>>>26),x=D+(I^(y|~P))+R[11]+3174756917&4294967295,D=y+(x<<10&4294967295|x>>>22),x=P+(y^(D|~I))+R[2]+718787259&4294967295,P=D+(x<<15&4294967295|x>>>17),x=I+(D^(P|~y))+R[9]+3951481745&4294967295,C.g[0]=C.g[0]+y&4294967295,C.g[1]=C.g[1]+(P+(x<<21&4294967295|x>>>11))&4294967295,C.g[2]=C.g[2]+P&4294967295,C.g[3]=C.g[3]+D&4294967295}r.prototype.u=function(C,y){y===void 0&&(y=C.length);for(var I=y-this.blockSize,R=this.B,P=this.h,D=0;D<y;){if(P==0)for(;D<=I;)i(this,C,D),D+=this.blockSize;if(typeof C=="string"){for(;D<y;)if(R[P++]=C.charCodeAt(D++),P==this.blockSize){i(this,R),P=0;break}}else for(;D<y;)if(R[P++]=C[D++],P==this.blockSize){i(this,R),P=0;break}}this.h=P,this.o+=y},r.prototype.v=function(){var C=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);C[0]=128;for(var y=1;y<C.length-8;++y)C[y]=0;var I=8*this.o;for(y=C.length-8;y<C.length;++y)C[y]=I&255,I/=256;for(this.u(C),C=Array(16),y=I=0;4>y;++y)for(var R=0;32>R;R+=8)C[I++]=this.g[y]>>>R&255;return C};function s(C,y){var I=a;return Object.prototype.hasOwnProperty.call(I,C)?I[C]:I[C]=y(C)}function o(C,y){this.h=y;for(var I=[],R=!0,P=C.length-1;0<=P;P--){var D=C[P]|0;R&&D==y||(I[P]=D,R=!1)}this.g=I}var a={};function l(C){return-128<=C&&128>C?s(C,function(y){return new o([y|0],0>y?-1:0)}):new o([C|0],0>C?-1:0)}function c(C){if(isNaN(C)||!isFinite(C))return f;if(0>C)return k(c(-C));for(var y=[],I=1,R=0;C>=I;R++)y[R]=C/I|0,I*=4294967296;return new o(y,0)}function h(C,y){if(C.length==0)throw Error("number format error: empty string");if(y=y||10,2>y||36<y)throw Error("radix out of range: "+y);if(C.charAt(0)=="-")return k(h(C.substring(1),y));if(0<=C.indexOf("-"))throw Error('number format error: interior "-" character');for(var I=c(Math.pow(y,8)),R=f,P=0;P<C.length;P+=8){var D=Math.min(8,C.length-P),x=parseInt(C.substring(P,P+D),y);8>D?(D=c(Math.pow(y,D)),R=R.j(D).add(c(x))):(R=R.j(I),R=R.add(c(x)))}return R}var f=l(0),p=l(1),_=l(16777216);t=o.prototype,t.m=function(){if(S(this))return-k(this).m();for(var C=0,y=1,I=0;I<this.g.length;I++){var R=this.i(I);C+=(0<=R?R:4294967296+R)*y,y*=4294967296}return C},t.toString=function(C){if(C=C||10,2>C||36<C)throw Error("radix out of range: "+C);if(E(this))return"0";if(S(this))return"-"+k(this).toString(C);for(var y=c(Math.pow(C,6)),I=this,R="";;){var P=b(I,y).g;I=A(I,P.j(y));var D=((0<I.g.length?I.g[0]:I.h)>>>0).toString(C);if(I=P,E(I))return D+R;for(;6>D.length;)D="0"+D;R=D+R}},t.i=function(C){return 0>C?0:C<this.g.length?this.g[C]:this.h};function E(C){if(C.h!=0)return!1;for(var y=0;y<C.g.length;y++)if(C.g[y]!=0)return!1;return!0}function S(C){return C.h==-1}t.l=function(C){return C=A(this,C),S(C)?-1:E(C)?0:1};function k(C){for(var y=C.g.length,I=[],R=0;R<y;R++)I[R]=~C.g[R];return new o(I,~C.h).add(p)}t.abs=function(){return S(this)?k(this):this},t.add=function(C){for(var y=Math.max(this.g.length,C.g.length),I=[],R=0,P=0;P<=y;P++){var D=R+(this.i(P)&65535)+(C.i(P)&65535),x=(D>>>16)+(this.i(P)>>>16)+(C.i(P)>>>16);R=x>>>16,D&=65535,x&=65535,I[P]=x<<16|D}return new o(I,I[I.length-1]&-2147483648?-1:0)};function A(C,y){return C.add(k(y))}t.j=function(C){if(E(this)||E(C))return f;if(S(this))return S(C)?k(this).j(k(C)):k(k(this).j(C));if(S(C))return k(this.j(k(C)));if(0>this.l(_)&&0>C.l(_))return c(this.m()*C.m());for(var y=this.g.length+C.g.length,I=[],R=0;R<2*y;R++)I[R]=0;for(R=0;R<this.g.length;R++)for(var P=0;P<C.g.length;P++){var D=this.i(R)>>>16,x=this.i(R)&65535,Ve=C.i(P)>>>16,Lt=C.i(P)&65535;I[2*R+2*P]+=x*Lt,v(I,2*R+2*P),I[2*R+2*P+1]+=D*Lt,v(I,2*R+2*P+1),I[2*R+2*P+1]+=x*Ve,v(I,2*R+2*P+1),I[2*R+2*P+2]+=D*Ve,v(I,2*R+2*P+2)}for(R=0;R<y;R++)I[R]=I[2*R+1]<<16|I[2*R];for(R=y;R<2*y;R++)I[R]=0;return new o(I,0)};function v(C,y){for(;(C[y]&65535)!=C[y];)C[y+1]+=C[y]>>>16,C[y]&=65535,y++}function T(C,y){this.g=C,this.h=y}function b(C,y){if(E(y))throw Error("division by zero");if(E(C))return new T(f,f);if(S(C))return y=b(k(C),y),new T(k(y.g),k(y.h));if(S(y))return y=b(C,k(y)),new T(k(y.g),y.h);if(30<C.g.length){if(S(C)||S(y))throw Error("slowDivide_ only works with positive integers.");for(var I=p,R=y;0>=R.l(C);)I=M(I),R=M(R);var P=V(I,1),D=V(R,1);for(R=V(R,2),I=V(I,2);!E(R);){var x=D.add(R);0>=x.l(C)&&(P=P.add(I),D=x),R=V(R,1),I=V(I,1)}return y=A(C,P.j(y)),new T(P,y)}for(P=f;0<=C.l(y);){for(I=Math.max(1,Math.floor(C.m()/y.m())),R=Math.ceil(Math.log(I)/Math.LN2),R=48>=R?1:Math.pow(2,R-48),D=c(I),x=D.j(y);S(x)||0<x.l(C);)I-=R,D=c(I),x=D.j(y);E(D)&&(D=p),P=P.add(D),C=A(C,x)}return new T(P,C)}t.A=function(C){return b(this,C).h},t.and=function(C){for(var y=Math.max(this.g.length,C.g.length),I=[],R=0;R<y;R++)I[R]=this.i(R)&C.i(R);return new o(I,this.h&C.h)},t.or=function(C){for(var y=Math.max(this.g.length,C.g.length),I=[],R=0;R<y;R++)I[R]=this.i(R)|C.i(R);return new o(I,this.h|C.h)},t.xor=function(C){for(var y=Math.max(this.g.length,C.g.length),I=[],R=0;R<y;R++)I[R]=this.i(R)^C.i(R);return new o(I,this.h^C.h)};function M(C){for(var y=C.g.length+1,I=[],R=0;R<y;R++)I[R]=C.i(R)<<1|C.i(R-1)>>>31;return new o(I,C.h)}function V(C,y){var I=y>>5;y%=32;for(var R=C.g.length-I,P=[],D=0;D<R;D++)P[D]=0<y?C.i(D+I)>>>y|C.i(D+I+1)<<32-y:C.i(D+I);return new o(P,C.h)}r.prototype.digest=r.prototype.v,r.prototype.reset=r.prototype.s,r.prototype.update=r.prototype.u,M1=r,o.prototype.add=o.prototype.add,o.prototype.multiply=o.prototype.j,o.prototype.modulo=o.prototype.A,o.prototype.compare=o.prototype.l,o.prototype.toNumber=o.prototype.m,o.prototype.toString=o.prototype.toString,o.prototype.getBits=o.prototype.i,o.fromNumber=c,o.fromString=h,ji=o}).apply(typeof Vw<"u"?Vw:typeof self<"u"?self:typeof window<"u"?window:{});var Ru=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var F1,aa,V1,ec,Xp,j1,U1,B1;(function(){var t,e=typeof Object.defineProperties=="function"?Object.defineProperty:function(u,d,m){return u==Array.prototype||u==Object.prototype||(u[d]=m.value),u};function n(u){u=[typeof globalThis=="object"&&globalThis,u,typeof window=="object"&&window,typeof self=="object"&&self,typeof Ru=="object"&&Ru];for(var d=0;d<u.length;++d){var m=u[d];if(m&&m.Math==Math)return m}throw Error("Cannot find global object")}var r=n(this);function i(u,d){if(d)e:{var m=r;u=u.split(".");for(var w=0;w<u.length-1;w++){var L=u[w];if(!(L in m))break e;m=m[L]}u=u[u.length-1],w=m[u],d=d(w),d!=w&&d!=null&&e(m,u,{configurable:!0,writable:!0,value:d})}}function s(u,d){u instanceof String&&(u+="");var m=0,w=!1,L={next:function(){if(!w&&m<u.length){var O=m++;return{value:d(O,u[O]),done:!1}}return w=!0,{done:!0,value:void 0}}};return L[Symbol.iterator]=function(){return L},L}i("Array.prototype.values",function(u){return u||function(){return s(this,function(d,m){return m})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var o=o||{},a=this||self;function l(u){var d=typeof u;return d=d!="object"?d:u?Array.isArray(u)?"array":d:"null",d=="array"||d=="object"&&typeof u.length=="number"}function c(u){var d=typeof u;return d=="object"&&u!=null||d=="function"}function h(u,d,m){return u.call.apply(u.bind,arguments)}function f(u,d,m){if(!u)throw Error();if(2<arguments.length){var w=Array.prototype.slice.call(arguments,2);return function(){var L=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(L,w),u.apply(d,L)}}return function(){return u.apply(d,arguments)}}function p(u,d,m){return p=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?h:f,p.apply(null,arguments)}function _(u,d){var m=Array.prototype.slice.call(arguments,1);return function(){var w=m.slice();return w.push.apply(w,arguments),u.apply(this,w)}}function E(u,d){function m(){}m.prototype=d.prototype,u.aa=d.prototype,u.prototype=new m,u.prototype.constructor=u,u.Qb=function(w,L,O){for(var z=Array(arguments.length-2),ye=2;ye<arguments.length;ye++)z[ye-2]=arguments[ye];return d.prototype[L].apply(w,z)}}function S(u){const d=u.length;if(0<d){const m=Array(d);for(let w=0;w<d;w++)m[w]=u[w];return m}return[]}function k(u,d){for(let m=1;m<arguments.length;m++){const w=arguments[m];if(l(w)){const L=u.length||0,O=w.length||0;u.length=L+O;for(let z=0;z<O;z++)u[L+z]=w[z]}else u.push(w)}}class A{constructor(d,m){this.i=d,this.j=m,this.h=0,this.g=null}get(){let d;return 0<this.h?(this.h--,d=this.g,this.g=d.next,d.next=null):d=this.i(),d}}function v(u){return/^[\s\xa0]*$/.test(u)}function T(){var u=a.navigator;return u&&(u=u.userAgent)?u:""}function b(u){return b[" "](u),u}b[" "]=function(){};var M=T().indexOf("Gecko")!=-1&&!(T().toLowerCase().indexOf("webkit")!=-1&&T().indexOf("Edge")==-1)&&!(T().indexOf("Trident")!=-1||T().indexOf("MSIE")!=-1)&&T().indexOf("Edge")==-1;function V(u,d,m){for(const w in u)d.call(m,u[w],w,u)}function C(u,d){for(const m in u)d.call(void 0,u[m],m,u)}function y(u){const d={};for(const m in u)d[m]=u[m];return d}const I="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function R(u,d){let m,w;for(let L=1;L<arguments.length;L++){w=arguments[L];for(m in w)u[m]=w[m];for(let O=0;O<I.length;O++)m=I[O],Object.prototype.hasOwnProperty.call(w,m)&&(u[m]=w[m])}}function P(u){var d=1;u=u.split(":");const m=[];for(;0<d&&u.length;)m.push(u.shift()),d--;return u.length&&m.push(u.join(":")),m}function D(u){a.setTimeout(()=>{throw u},0)}function x(){var u=G;let d=null;return u.g&&(d=u.g,u.g=u.g.next,u.g||(u.h=null),d.next=null),d}class Ve{constructor(){this.h=this.g=null}add(d,m){const w=Lt.get();w.set(d,m),this.h?this.h.next=w:this.g=w,this.h=w}}var Lt=new A(()=>new On,u=>u.reset());class On{constructor(){this.next=this.g=this.h=null}set(d,m){this.h=d,this.g=m,this.next=null}reset(){this.next=this.g=this.h=null}}let qe,W=!1,G=new Ve,Q=()=>{const u=a.Promise.resolve(void 0);qe=()=>{u.then(pe)}};var pe=()=>{for(var u;u=x();){try{u.h.call(u.g)}catch(m){D(m)}var d=Lt;d.j(u),100>d.h&&(d.h++,u.next=d.g,d.g=u)}W=!1};function te(){this.s=this.s,this.C=this.C}te.prototype.s=!1,te.prototype.ma=function(){this.s||(this.s=!0,this.N())},te.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function ue(u,d){this.type=u,this.g=this.target=d,this.defaultPrevented=!1}ue.prototype.h=function(){this.defaultPrevented=!0};var je=function(){if(!a.addEventListener||!Object.defineProperty)return!1;var u=!1,d=Object.defineProperty({},"passive",{get:function(){u=!0}});try{const m=()=>{};a.addEventListener("test",m,d),a.removeEventListener("test",m,d)}catch{}return u}();function ze(u,d){if(ue.call(this,u?u.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,u){var m=this.type=u.type,w=u.changedTouches&&u.changedTouches.length?u.changedTouches[0]:null;if(this.target=u.target||u.srcElement,this.g=d,d=u.relatedTarget){if(M){e:{try{b(d.nodeName);var L=!0;break e}catch{}L=!1}L||(d=null)}}else m=="mouseover"?d=u.fromElement:m=="mouseout"&&(d=u.toElement);this.relatedTarget=d,w?(this.clientX=w.clientX!==void 0?w.clientX:w.pageX,this.clientY=w.clientY!==void 0?w.clientY:w.pageY,this.screenX=w.screenX||0,this.screenY=w.screenY||0):(this.clientX=u.clientX!==void 0?u.clientX:u.pageX,this.clientY=u.clientY!==void 0?u.clientY:u.pageY,this.screenX=u.screenX||0,this.screenY=u.screenY||0),this.button=u.button,this.key=u.key||"",this.ctrlKey=u.ctrlKey,this.altKey=u.altKey,this.shiftKey=u.shiftKey,this.metaKey=u.metaKey,this.pointerId=u.pointerId||0,this.pointerType=typeof u.pointerType=="string"?u.pointerType:it[u.pointerType]||"",this.state=u.state,this.i=u,u.defaultPrevented&&ze.aa.h.call(this)}}E(ze,ue);var it={2:"touch",3:"pen",4:"mouse"};ze.prototype.h=function(){ze.aa.h.call(this);var u=this.i;u.preventDefault?u.preventDefault():u.returnValue=!1};var St="closure_listenable_"+(1e6*Math.random()|0),hd=0;function CR(u,d,m,w,L){this.listener=u,this.proxy=null,this.src=d,this.type=m,this.capture=!!w,this.ha=L,this.key=++hd,this.da=this.fa=!1}function Bl(u){u.da=!0,u.listener=null,u.proxy=null,u.src=null,u.ha=null}function zl(u){this.src=u,this.g={},this.h=0}zl.prototype.add=function(u,d,m,w,L){var O=u.toString();u=this.g[O],u||(u=this.g[O]=[],this.h++);var z=fd(u,d,w,L);return-1<z?(d=u[z],m||(d.fa=!1)):(d=new CR(d,this.src,O,!!w,L),d.fa=m,u.push(d)),d};function dd(u,d){var m=d.type;if(m in u.g){var w=u.g[m],L=Array.prototype.indexOf.call(w,d,void 0),O;(O=0<=L)&&Array.prototype.splice.call(w,L,1),O&&(Bl(d),u.g[m].length==0&&(delete u.g[m],u.h--))}}function fd(u,d,m,w){for(var L=0;L<u.length;++L){var O=u[L];if(!O.da&&O.listener==d&&O.capture==!!m&&O.ha==w)return L}return-1}var pd="closure_lm_"+(1e6*Math.random()|0),md={};function Y_(u,d,m,w,L){if(Array.isArray(d)){for(var O=0;O<d.length;O++)Y_(u,d[O],m,w,L);return null}return m=Z_(m),u&&u[St]?u.K(d,m,c(w)?!!w.capture:!!w,L):SR(u,d,m,!1,w,L)}function SR(u,d,m,w,L,O){if(!d)throw Error("Invalid event type");var z=c(L)?!!L.capture:!!L,ye=_d(u);if(ye||(u[pd]=ye=new zl(u)),m=ye.add(d,m,w,z,O),m.proxy)return m;if(w=RR(),m.proxy=w,w.src=u,w.listener=m,u.addEventListener)je||(L=z),L===void 0&&(L=!1),u.addEventListener(d.toString(),w,L);else if(u.attachEvent)u.attachEvent(J_(d.toString()),w);else if(u.addListener&&u.removeListener)u.addListener(w);else throw Error("addEventListener and attachEvent are unavailable.");return m}function RR(){function u(m){return d.call(u.src,u.listener,m)}const d=kR;return u}function X_(u,d,m,w,L){if(Array.isArray(d))for(var O=0;O<d.length;O++)X_(u,d[O],m,w,L);else w=c(w)?!!w.capture:!!w,m=Z_(m),u&&u[St]?(u=u.i,d=String(d).toString(),d in u.g&&(O=u.g[d],m=fd(O,m,w,L),-1<m&&(Bl(O[m]),Array.prototype.splice.call(O,m,1),O.length==0&&(delete u.g[d],u.h--)))):u&&(u=_d(u))&&(d=u.g[d.toString()],u=-1,d&&(u=fd(d,m,w,L)),(m=-1<u?d[u]:null)&&gd(m))}function gd(u){if(typeof u!="number"&&u&&!u.da){var d=u.src;if(d&&d[St])dd(d.i,u);else{var m=u.type,w=u.proxy;d.removeEventListener?d.removeEventListener(m,w,u.capture):d.detachEvent?d.detachEvent(J_(m),w):d.addListener&&d.removeListener&&d.removeListener(w),(m=_d(d))?(dd(m,u),m.h==0&&(m.src=null,d[pd]=null)):Bl(u)}}}function J_(u){return u in md?md[u]:md[u]="on"+u}function kR(u,d){if(u.da)u=!0;else{d=new ze(d,this);var m=u.listener,w=u.ha||u.src;u.fa&&gd(u),u=m.call(w,d)}return u}function _d(u){return u=u[pd],u instanceof zl?u:null}var yd="__closure_events_fn_"+(1e9*Math.random()>>>0);function Z_(u){return typeof u=="function"?u:(u[yd]||(u[yd]=function(d){return u.handleEvent(d)}),u[yd])}function ft(){te.call(this),this.i=new zl(this),this.M=this,this.F=null}E(ft,te),ft.prototype[St]=!0,ft.prototype.removeEventListener=function(u,d,m,w){X_(this,u,d,m,w)};function Rt(u,d){var m,w=u.F;if(w)for(m=[];w;w=w.F)m.push(w);if(u=u.M,w=d.type||d,typeof d=="string")d=new ue(d,u);else if(d instanceof ue)d.target=d.target||u;else{var L=d;d=new ue(w,u),R(d,L)}if(L=!0,m)for(var O=m.length-1;0<=O;O--){var z=d.g=m[O];L=Wl(z,w,!0,d)&&L}if(z=d.g=u,L=Wl(z,w,!0,d)&&L,L=Wl(z,w,!1,d)&&L,m)for(O=0;O<m.length;O++)z=d.g=m[O],L=Wl(z,w,!1,d)&&L}ft.prototype.N=function(){if(ft.aa.N.call(this),this.i){var u=this.i,d;for(d in u.g){for(var m=u.g[d],w=0;w<m.length;w++)Bl(m[w]);delete u.g[d],u.h--}}this.F=null},ft.prototype.K=function(u,d,m,w){return this.i.add(String(u),d,!1,m,w)},ft.prototype.L=function(u,d,m,w){return this.i.add(String(u),d,!0,m,w)};function Wl(u,d,m,w){if(d=u.i.g[String(d)],!d)return!0;d=d.concat();for(var L=!0,O=0;O<d.length;++O){var z=d[O];if(z&&!z.da&&z.capture==m){var ye=z.listener,st=z.ha||z.src;z.fa&&dd(u.i,z),L=ye.call(st,w)!==!1&&L}}return L&&!w.defaultPrevented}function ey(u,d,m){if(typeof u=="function")m&&(u=p(u,m));else if(u&&typeof u.handleEvent=="function")u=p(u.handleEvent,u);else throw Error("Invalid listener argument");return 2147483647<Number(d)?-1:a.setTimeout(u,d||0)}function ty(u){u.g=ey(()=>{u.g=null,u.i&&(u.i=!1,ty(u))},u.l);const d=u.h;u.h=null,u.m.apply(null,d)}class xR extends te{constructor(d,m){super(),this.m=d,this.l=m,this.h=null,this.i=!1,this.g=null}j(d){this.h=arguments,this.g?this.i=!0:ty(this)}N(){super.N(),this.g&&(a.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function ko(u){te.call(this),this.h=u,this.g={}}E(ko,te);var ny=[];function ry(u){V(u.g,function(d,m){this.g.hasOwnProperty(m)&&gd(d)},u),u.g={}}ko.prototype.N=function(){ko.aa.N.call(this),ry(this)},ko.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var vd=a.JSON.stringify,NR=a.JSON.parse,PR=class{stringify(u){return a.JSON.stringify(u,void 0)}parse(u){return a.JSON.parse(u,void 0)}};function wd(){}wd.prototype.h=null;function iy(u){return u.h||(u.h=u.i())}function sy(){}var xo={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function Ad(){ue.call(this,"d")}E(Ad,ue);function Ed(){ue.call(this,"c")}E(Ed,ue);var Ai={},oy=null;function Hl(){return oy=oy||new ft}Ai.La="serverreachability";function ay(u){ue.call(this,Ai.La,u)}E(ay,ue);function No(u){const d=Hl();Rt(d,new ay(d))}Ai.STAT_EVENT="statevent";function ly(u,d){ue.call(this,Ai.STAT_EVENT,u),this.stat=d}E(ly,ue);function kt(u){const d=Hl();Rt(d,new ly(d,u))}Ai.Ma="timingevent";function uy(u,d){ue.call(this,Ai.Ma,u),this.size=d}E(uy,ue);function Po(u,d){if(typeof u!="function")throw Error("Fn must not be null and must be a function");return a.setTimeout(function(){u()},d)}function bo(){this.g=!0}bo.prototype.xa=function(){this.g=!1};function bR(u,d,m,w,L,O){u.info(function(){if(u.g)if(O)for(var z="",ye=O.split("&"),st=0;st<ye.length;st++){var de=ye[st].split("=");if(1<de.length){var pt=de[0];de=de[1];var mt=pt.split("_");z=2<=mt.length&&mt[1]=="type"?z+(pt+"="+de+"&"):z+(pt+"=redacted&")}}else z=null;else z=O;return"XMLHTTP REQ ("+w+") [attempt "+L+"]: "+d+`
`+m+`
`+z})}function DR(u,d,m,w,L,O,z){u.info(function(){return"XMLHTTP RESP ("+w+") [ attempt "+L+"]: "+d+`
`+m+`
`+O+" "+z})}function us(u,d,m,w){u.info(function(){return"XMLHTTP TEXT ("+d+"): "+OR(u,m)+(w?" "+w:"")})}function LR(u,d){u.info(function(){return"TIMEOUT: "+d})}bo.prototype.info=function(){};function OR(u,d){if(!u.g)return d;if(!d)return null;try{var m=JSON.parse(d);if(m){for(u=0;u<m.length;u++)if(Array.isArray(m[u])){var w=m[u];if(!(2>w.length)){var L=w[1];if(Array.isArray(L)&&!(1>L.length)){var O=L[0];if(O!="noop"&&O!="stop"&&O!="close")for(var z=1;z<L.length;z++)L[z]=""}}}}return vd(m)}catch{return d}}var ql={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},cy={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"},Td;function Gl(){}E(Gl,wd),Gl.prototype.g=function(){return new XMLHttpRequest},Gl.prototype.i=function(){return{}},Td=new Gl;function kr(u,d,m,w){this.j=u,this.i=d,this.l=m,this.R=w||1,this.U=new ko(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new hy}function hy(){this.i=null,this.g="",this.h=!1}var dy={},Id={};function Cd(u,d,m){u.L=1,u.v=Yl(Yn(d)),u.m=m,u.P=!0,fy(u,null)}function fy(u,d){u.F=Date.now(),Kl(u),u.A=Yn(u.v);var m=u.A,w=u.R;Array.isArray(w)||(w=[String(w)]),Ry(m.i,"t",w),u.C=0,m=u.j.J,u.h=new hy,u.g=qy(u.j,m?d:null,!u.m),0<u.O&&(u.M=new xR(p(u.Y,u,u.g),u.O)),d=u.U,m=u.g,w=u.ca;var L="readystatechange";Array.isArray(L)||(L&&(ny[0]=L.toString()),L=ny);for(var O=0;O<L.length;O++){var z=Y_(m,L[O],w||d.handleEvent,!1,d.h||d);if(!z)break;d.g[z.key]=z}d=u.H?y(u.H):{},u.m?(u.u||(u.u="POST"),d["Content-Type"]="application/x-www-form-urlencoded",u.g.ea(u.A,u.u,u.m,d)):(u.u="GET",u.g.ea(u.A,u.u,null,d)),No(),bR(u.i,u.u,u.A,u.l,u.R,u.m)}kr.prototype.ca=function(u){u=u.target;const d=this.M;d&&Xn(u)==3?d.j():this.Y(u)},kr.prototype.Y=function(u){try{if(u==this.g)e:{const mt=Xn(this.g);var d=this.g.Ba();const ds=this.g.Z();if(!(3>mt)&&(mt!=3||this.g&&(this.h.h||this.g.oa()||Ly(this.g)))){this.J||mt!=4||d==7||(d==8||0>=ds?No(3):No(2)),Sd(this);var m=this.g.Z();this.X=m;t:if(py(this)){var w=Ly(this.g);u="";var L=w.length,O=Xn(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){Ei(this),Do(this);var z="";break t}this.h.i=new a.TextDecoder}for(d=0;d<L;d++)this.h.h=!0,u+=this.h.i.decode(w[d],{stream:!(O&&d==L-1)});w.length=0,this.h.g+=u,this.C=0,z=this.h.g}else z=this.g.oa();if(this.o=m==200,DR(this.i,this.u,this.A,this.l,this.R,mt,m),this.o){if(this.T&&!this.K){t:{if(this.g){var ye,st=this.g;if((ye=st.g?st.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!v(ye)){var de=ye;break t}}de=null}if(m=de)us(this.i,this.l,m,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,Rd(this,m);else{this.o=!1,this.s=3,kt(12),Ei(this),Do(this);break e}}if(this.P){m=!0;let _n;for(;!this.J&&this.C<z.length;)if(_n=MR(this,z),_n==Id){mt==4&&(this.s=4,kt(14),m=!1),us(this.i,this.l,null,"[Incomplete Response]");break}else if(_n==dy){this.s=4,kt(15),us(this.i,this.l,z,"[Invalid Chunk]"),m=!1;break}else us(this.i,this.l,_n,null),Rd(this,_n);if(py(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),mt!=4||z.length!=0||this.h.h||(this.s=1,kt(16),m=!1),this.o=this.o&&m,!m)us(this.i,this.l,z,"[Invalid Chunked Response]"),Ei(this),Do(this);else if(0<z.length&&!this.W){this.W=!0;var pt=this.j;pt.g==this&&pt.ba&&!pt.M&&(pt.j.info("Great, no buffering proxy detected. Bytes received: "+z.length),Dd(pt),pt.M=!0,kt(11))}}else us(this.i,this.l,z,null),Rd(this,z);mt==4&&Ei(this),this.o&&!this.J&&(mt==4?By(this.j,this):(this.o=!1,Kl(this)))}else ZR(this.g),m==400&&0<z.indexOf("Unknown SID")?(this.s=3,kt(12)):(this.s=0,kt(13)),Ei(this),Do(this)}}}catch{}finally{}};function py(u){return u.g?u.u=="GET"&&u.L!=2&&u.j.Ca:!1}function MR(u,d){var m=u.C,w=d.indexOf(`
`,m);return w==-1?Id:(m=Number(d.substring(m,w)),isNaN(m)?dy:(w+=1,w+m>d.length?Id:(d=d.slice(w,w+m),u.C=w+m,d)))}kr.prototype.cancel=function(){this.J=!0,Ei(this)};function Kl(u){u.S=Date.now()+u.I,my(u,u.I)}function my(u,d){if(u.B!=null)throw Error("WatchDog timer not null");u.B=Po(p(u.ba,u),d)}function Sd(u){u.B&&(a.clearTimeout(u.B),u.B=null)}kr.prototype.ba=function(){this.B=null;const u=Date.now();0<=u-this.S?(LR(this.i,this.A),this.L!=2&&(No(),kt(17)),Ei(this),this.s=2,Do(this)):my(this,this.S-u)};function Do(u){u.j.G==0||u.J||By(u.j,u)}function Ei(u){Sd(u);var d=u.M;d&&typeof d.ma=="function"&&d.ma(),u.M=null,ry(u.U),u.g&&(d=u.g,u.g=null,d.abort(),d.ma())}function Rd(u,d){try{var m=u.j;if(m.G!=0&&(m.g==u||kd(m.h,u))){if(!u.K&&kd(m.h,u)&&m.G==3){try{var w=m.Da.g.parse(d)}catch{w=null}if(Array.isArray(w)&&w.length==3){var L=w;if(L[0]==0){e:if(!m.u){if(m.g)if(m.g.F+3e3<u.F)nu(m),eu(m);else break e;bd(m),kt(18)}}else m.za=L[1],0<m.za-m.T&&37500>L[2]&&m.F&&m.v==0&&!m.C&&(m.C=Po(p(m.Za,m),6e3));if(1>=yy(m.h)&&m.ca){try{m.ca()}catch{}m.ca=void 0}}else Ii(m,11)}else if((u.K||m.g==u)&&nu(m),!v(d))for(L=m.Da.g.parse(d),d=0;d<L.length;d++){let de=L[d];if(m.T=de[0],de=de[1],m.G==2)if(de[0]=="c"){m.K=de[1],m.ia=de[2];const pt=de[3];pt!=null&&(m.la=pt,m.j.info("VER="+m.la));const mt=de[4];mt!=null&&(m.Aa=mt,m.j.info("SVER="+m.Aa));const ds=de[5];ds!=null&&typeof ds=="number"&&0<ds&&(w=1.5*ds,m.L=w,m.j.info("backChannelRequestTimeoutMs_="+w)),w=m;const _n=u.g;if(_n){const iu=_n.g?_n.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(iu){var O=w.h;O.g||iu.indexOf("spdy")==-1&&iu.indexOf("quic")==-1&&iu.indexOf("h2")==-1||(O.j=O.l,O.g=new Set,O.h&&(xd(O,O.h),O.h=null))}if(w.D){const Ld=_n.g?_n.g.getResponseHeader("X-HTTP-Session-Id"):null;Ld&&(w.ya=Ld,Te(w.I,w.D,Ld))}}m.G=3,m.l&&m.l.ua(),m.ba&&(m.R=Date.now()-u.F,m.j.info("Handshake RTT: "+m.R+"ms")),w=m;var z=u;if(w.qa=Hy(w,w.J?w.ia:null,w.W),z.K){vy(w.h,z);var ye=z,st=w.L;st&&(ye.I=st),ye.B&&(Sd(ye),Kl(ye)),w.g=z}else jy(w);0<m.i.length&&tu(m)}else de[0]!="stop"&&de[0]!="close"||Ii(m,7);else m.G==3&&(de[0]=="stop"||de[0]=="close"?de[0]=="stop"?Ii(m,7):Pd(m):de[0]!="noop"&&m.l&&m.l.ta(de),m.v=0)}}No(4)}catch{}}var FR=class{constructor(u,d){this.g=u,this.map=d}};function gy(u){this.l=u||10,a.PerformanceNavigationTiming?(u=a.performance.getEntriesByType("navigation"),u=0<u.length&&(u[0].nextHopProtocol=="hq"||u[0].nextHopProtocol=="h2")):u=!!(a.chrome&&a.chrome.loadTimes&&a.chrome.loadTimes()&&a.chrome.loadTimes().wasFetchedViaSpdy),this.j=u?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function _y(u){return u.h?!0:u.g?u.g.size>=u.j:!1}function yy(u){return u.h?1:u.g?u.g.size:0}function kd(u,d){return u.h?u.h==d:u.g?u.g.has(d):!1}function xd(u,d){u.g?u.g.add(d):u.h=d}function vy(u,d){u.h&&u.h==d?u.h=null:u.g&&u.g.has(d)&&u.g.delete(d)}gy.prototype.cancel=function(){if(this.i=wy(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const u of this.g.values())u.cancel();this.g.clear()}};function wy(u){if(u.h!=null)return u.i.concat(u.h.D);if(u.g!=null&&u.g.size!==0){let d=u.i;for(const m of u.g.values())d=d.concat(m.D);return d}return S(u.i)}function VR(u){if(u.V&&typeof u.V=="function")return u.V();if(typeof Map<"u"&&u instanceof Map||typeof Set<"u"&&u instanceof Set)return Array.from(u.values());if(typeof u=="string")return u.split("");if(l(u)){for(var d=[],m=u.length,w=0;w<m;w++)d.push(u[w]);return d}d=[],m=0;for(w in u)d[m++]=u[w];return d}function jR(u){if(u.na&&typeof u.na=="function")return u.na();if(!u.V||typeof u.V!="function"){if(typeof Map<"u"&&u instanceof Map)return Array.from(u.keys());if(!(typeof Set<"u"&&u instanceof Set)){if(l(u)||typeof u=="string"){var d=[];u=u.length;for(var m=0;m<u;m++)d.push(m);return d}d=[],m=0;for(const w in u)d[m++]=w;return d}}}function Ay(u,d){if(u.forEach&&typeof u.forEach=="function")u.forEach(d,void 0);else if(l(u)||typeof u=="string")Array.prototype.forEach.call(u,d,void 0);else for(var m=jR(u),w=VR(u),L=w.length,O=0;O<L;O++)d.call(void 0,w[O],m&&m[O],u)}var Ey=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function UR(u,d){if(u){u=u.split("&");for(var m=0;m<u.length;m++){var w=u[m].indexOf("="),L=null;if(0<=w){var O=u[m].substring(0,w);L=u[m].substring(w+1)}else O=u[m];d(O,L?decodeURIComponent(L.replace(/\+/g," ")):"")}}}function Ti(u){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,u instanceof Ti){this.h=u.h,$l(this,u.j),this.o=u.o,this.g=u.g,Ql(this,u.s),this.l=u.l;var d=u.i,m=new Mo;m.i=d.i,d.g&&(m.g=new Map(d.g),m.h=d.h),Ty(this,m),this.m=u.m}else u&&(d=String(u).match(Ey))?(this.h=!1,$l(this,d[1]||"",!0),this.o=Lo(d[2]||""),this.g=Lo(d[3]||"",!0),Ql(this,d[4]),this.l=Lo(d[5]||"",!0),Ty(this,d[6]||"",!0),this.m=Lo(d[7]||"")):(this.h=!1,this.i=new Mo(null,this.h))}Ti.prototype.toString=function(){var u=[],d=this.j;d&&u.push(Oo(d,Iy,!0),":");var m=this.g;return(m||d=="file")&&(u.push("//"),(d=this.o)&&u.push(Oo(d,Iy,!0),"@"),u.push(encodeURIComponent(String(m)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),m=this.s,m!=null&&u.push(":",String(m))),(m=this.l)&&(this.g&&m.charAt(0)!="/"&&u.push("/"),u.push(Oo(m,m.charAt(0)=="/"?WR:zR,!0))),(m=this.i.toString())&&u.push("?",m),(m=this.m)&&u.push("#",Oo(m,qR)),u.join("")};function Yn(u){return new Ti(u)}function $l(u,d,m){u.j=m?Lo(d,!0):d,u.j&&(u.j=u.j.replace(/:$/,""))}function Ql(u,d){if(d){if(d=Number(d),isNaN(d)||0>d)throw Error("Bad port number "+d);u.s=d}else u.s=null}function Ty(u,d,m){d instanceof Mo?(u.i=d,GR(u.i,u.h)):(m||(d=Oo(d,HR)),u.i=new Mo(d,u.h))}function Te(u,d,m){u.i.set(d,m)}function Yl(u){return Te(u,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),u}function Lo(u,d){return u?d?decodeURI(u.replace(/%25/g,"%2525")):decodeURIComponent(u):""}function Oo(u,d,m){return typeof u=="string"?(u=encodeURI(u).replace(d,BR),m&&(u=u.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),u):null}function BR(u){return u=u.charCodeAt(0),"%"+(u>>4&15).toString(16)+(u&15).toString(16)}var Iy=/[#\/\?@]/g,zR=/[#\?:]/g,WR=/[#\?]/g,HR=/[#\?@]/g,qR=/#/g;function Mo(u,d){this.h=this.g=null,this.i=u||null,this.j=!!d}function xr(u){u.g||(u.g=new Map,u.h=0,u.i&&UR(u.i,function(d,m){u.add(decodeURIComponent(d.replace(/\+/g," ")),m)}))}t=Mo.prototype,t.add=function(u,d){xr(this),this.i=null,u=cs(this,u);var m=this.g.get(u);return m||this.g.set(u,m=[]),m.push(d),this.h+=1,this};function Cy(u,d){xr(u),d=cs(u,d),u.g.has(d)&&(u.i=null,u.h-=u.g.get(d).length,u.g.delete(d))}function Sy(u,d){return xr(u),d=cs(u,d),u.g.has(d)}t.forEach=function(u,d){xr(this),this.g.forEach(function(m,w){m.forEach(function(L){u.call(d,L,w,this)},this)},this)},t.na=function(){xr(this);const u=Array.from(this.g.values()),d=Array.from(this.g.keys()),m=[];for(let w=0;w<d.length;w++){const L=u[w];for(let O=0;O<L.length;O++)m.push(d[w])}return m},t.V=function(u){xr(this);let d=[];if(typeof u=="string")Sy(this,u)&&(d=d.concat(this.g.get(cs(this,u))));else{u=Array.from(this.g.values());for(let m=0;m<u.length;m++)d=d.concat(u[m])}return d},t.set=function(u,d){return xr(this),this.i=null,u=cs(this,u),Sy(this,u)&&(this.h-=this.g.get(u).length),this.g.set(u,[d]),this.h+=1,this},t.get=function(u,d){return u?(u=this.V(u),0<u.length?String(u[0]):d):d};function Ry(u,d,m){Cy(u,d),0<m.length&&(u.i=null,u.g.set(cs(u,d),S(m)),u.h+=m.length)}t.toString=function(){if(this.i)return this.i;if(!this.g)return"";const u=[],d=Array.from(this.g.keys());for(var m=0;m<d.length;m++){var w=d[m];const O=encodeURIComponent(String(w)),z=this.V(w);for(w=0;w<z.length;w++){var L=O;z[w]!==""&&(L+="="+encodeURIComponent(String(z[w]))),u.push(L)}}return this.i=u.join("&")};function cs(u,d){return d=String(d),u.j&&(d=d.toLowerCase()),d}function GR(u,d){d&&!u.j&&(xr(u),u.i=null,u.g.forEach(function(m,w){var L=w.toLowerCase();w!=L&&(Cy(this,w),Ry(this,L,m))},u)),u.j=d}function KR(u,d){const m=new bo;if(a.Image){const w=new Image;w.onload=_(Nr,m,"TestLoadImage: loaded",!0,d,w),w.onerror=_(Nr,m,"TestLoadImage: error",!1,d,w),w.onabort=_(Nr,m,"TestLoadImage: abort",!1,d,w),w.ontimeout=_(Nr,m,"TestLoadImage: timeout",!1,d,w),a.setTimeout(function(){w.ontimeout&&w.ontimeout()},1e4),w.src=u}else d(!1)}function $R(u,d){const m=new bo,w=new AbortController,L=setTimeout(()=>{w.abort(),Nr(m,"TestPingServer: timeout",!1,d)},1e4);fetch(u,{signal:w.signal}).then(O=>{clearTimeout(L),O.ok?Nr(m,"TestPingServer: ok",!0,d):Nr(m,"TestPingServer: server error",!1,d)}).catch(()=>{clearTimeout(L),Nr(m,"TestPingServer: error",!1,d)})}function Nr(u,d,m,w,L){try{L&&(L.onload=null,L.onerror=null,L.onabort=null,L.ontimeout=null),w(m)}catch{}}function QR(){this.g=new PR}function YR(u,d,m){const w=m||"";try{Ay(u,function(L,O){let z=L;c(L)&&(z=vd(L)),d.push(w+O+"="+encodeURIComponent(z))})}catch(L){throw d.push(w+"type="+encodeURIComponent("_badmap")),L}}function Xl(u){this.l=u.Ub||null,this.j=u.eb||!1}E(Xl,wd),Xl.prototype.g=function(){return new Jl(this.l,this.j)},Xl.prototype.i=function(u){return function(){return u}}({});function Jl(u,d){ft.call(this),this.D=u,this.o=d,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}E(Jl,ft),t=Jl.prototype,t.open=function(u,d){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=u,this.A=d,this.readyState=1,Vo(this)},t.send=function(u){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const d={headers:this.u,method:this.B,credentials:this.m,cache:void 0};u&&(d.body=u),(this.D||a).fetch(new Request(this.A,d)).then(this.Sa.bind(this),this.ga.bind(this))},t.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,Fo(this)),this.readyState=0},t.Sa=function(u){if(this.g&&(this.l=u,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=u.headers,this.readyState=2,Vo(this)),this.g&&(this.readyState=3,Vo(this),this.g)))if(this.responseType==="arraybuffer")u.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof a.ReadableStream<"u"&&"body"in u){if(this.j=u.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;ky(this)}else u.text().then(this.Ra.bind(this),this.ga.bind(this))};function ky(u){u.j.read().then(u.Pa.bind(u)).catch(u.ga.bind(u))}t.Pa=function(u){if(this.g){if(this.o&&u.value)this.response.push(u.value);else if(!this.o){var d=u.value?u.value:new Uint8Array(0);(d=this.v.decode(d,{stream:!u.done}))&&(this.response=this.responseText+=d)}u.done?Fo(this):Vo(this),this.readyState==3&&ky(this)}},t.Ra=function(u){this.g&&(this.response=this.responseText=u,Fo(this))},t.Qa=function(u){this.g&&(this.response=u,Fo(this))},t.ga=function(){this.g&&Fo(this)};function Fo(u){u.readyState=4,u.l=null,u.j=null,u.v=null,Vo(u)}t.setRequestHeader=function(u,d){this.u.append(u,d)},t.getResponseHeader=function(u){return this.h&&this.h.get(u.toLowerCase())||""},t.getAllResponseHeaders=function(){if(!this.h)return"";const u=[],d=this.h.entries();for(var m=d.next();!m.done;)m=m.value,u.push(m[0]+": "+m[1]),m=d.next();return u.join(`\r
`)};function Vo(u){u.onreadystatechange&&u.onreadystatechange.call(u)}Object.defineProperty(Jl.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(u){this.m=u?"include":"same-origin"}});function xy(u){let d="";return V(u,function(m,w){d+=w,d+=":",d+=m,d+=`\r
`}),d}function Nd(u,d,m){e:{for(w in m){var w=!1;break e}w=!0}w||(m=xy(m),typeof u=="string"?m!=null&&encodeURIComponent(String(m)):Te(u,d,m))}function De(u){ft.call(this),this.headers=new Map,this.o=u||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}E(De,ft);var XR=/^https?$/i,JR=["POST","PUT"];t=De.prototype,t.Ha=function(u){this.J=u},t.ea=function(u,d,m,w){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+u);d=d?d.toUpperCase():"GET",this.D=u,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():Td.g(),this.v=this.o?iy(this.o):iy(Td),this.g.onreadystatechange=p(this.Ea,this);try{this.B=!0,this.g.open(d,String(u),!0),this.B=!1}catch(O){Ny(this,O);return}if(u=m||"",m=new Map(this.headers),w)if(Object.getPrototypeOf(w)===Object.prototype)for(var L in w)m.set(L,w[L]);else if(typeof w.keys=="function"&&typeof w.get=="function")for(const O of w.keys())m.set(O,w.get(O));else throw Error("Unknown input type for opt_headers: "+String(w));w=Array.from(m.keys()).find(O=>O.toLowerCase()=="content-type"),L=a.FormData&&u instanceof a.FormData,!(0<=Array.prototype.indexOf.call(JR,d,void 0))||w||L||m.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[O,z]of m)this.g.setRequestHeader(O,z);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{Dy(this),this.u=!0,this.g.send(u),this.u=!1}catch(O){Ny(this,O)}};function Ny(u,d){u.h=!1,u.g&&(u.j=!0,u.g.abort(),u.j=!1),u.l=d,u.m=5,Py(u),Zl(u)}function Py(u){u.A||(u.A=!0,Rt(u,"complete"),Rt(u,"error"))}t.abort=function(u){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=u||7,Rt(this,"complete"),Rt(this,"abort"),Zl(this))},t.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),Zl(this,!0)),De.aa.N.call(this)},t.Ea=function(){this.s||(this.B||this.u||this.j?by(this):this.bb())},t.bb=function(){by(this)};function by(u){if(u.h&&typeof o<"u"&&(!u.v[1]||Xn(u)!=4||u.Z()!=2)){if(u.u&&Xn(u)==4)ey(u.Ea,0,u);else if(Rt(u,"readystatechange"),Xn(u)==4){u.h=!1;try{const z=u.Z();e:switch(z){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var d=!0;break e;default:d=!1}var m;if(!(m=d)){var w;if(w=z===0){var L=String(u.D).match(Ey)[1]||null;!L&&a.self&&a.self.location&&(L=a.self.location.protocol.slice(0,-1)),w=!XR.test(L?L.toLowerCase():"")}m=w}if(m)Rt(u,"complete"),Rt(u,"success");else{u.m=6;try{var O=2<Xn(u)?u.g.statusText:""}catch{O=""}u.l=O+" ["+u.Z()+"]",Py(u)}}finally{Zl(u)}}}}function Zl(u,d){if(u.g){Dy(u);const m=u.g,w=u.v[0]?()=>{}:null;u.g=null,u.v=null,d||Rt(u,"ready");try{m.onreadystatechange=w}catch{}}}function Dy(u){u.I&&(a.clearTimeout(u.I),u.I=null)}t.isActive=function(){return!!this.g};function Xn(u){return u.g?u.g.readyState:0}t.Z=function(){try{return 2<Xn(this)?this.g.status:-1}catch{return-1}},t.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},t.Oa=function(u){if(this.g){var d=this.g.responseText;return u&&d.indexOf(u)==0&&(d=d.substring(u.length)),NR(d)}};function Ly(u){try{if(!u.g)return null;if("response"in u.g)return u.g.response;switch(u.H){case"":case"text":return u.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in u.g)return u.g.mozResponseArrayBuffer}return null}catch{return null}}function ZR(u){const d={};u=(u.g&&2<=Xn(u)&&u.g.getAllResponseHeaders()||"").split(`\r
`);for(let w=0;w<u.length;w++){if(v(u[w]))continue;var m=P(u[w]);const L=m[0];if(m=m[1],typeof m!="string")continue;m=m.trim();const O=d[L]||[];d[L]=O,O.push(m)}C(d,function(w){return w.join(", ")})}t.Ba=function(){return this.m},t.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function jo(u,d,m){return m&&m.internalChannelParams&&m.internalChannelParams[u]||d}function Oy(u){this.Aa=0,this.i=[],this.j=new bo,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=jo("failFast",!1,u),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=jo("baseRetryDelayMs",5e3,u),this.cb=jo("retryDelaySeedMs",1e4,u),this.Wa=jo("forwardChannelMaxRetries",2,u),this.wa=jo("forwardChannelRequestTimeoutMs",2e4,u),this.pa=u&&u.xmlHttpFactory||void 0,this.Xa=u&&u.Tb||void 0,this.Ca=u&&u.useFetchStreams||!1,this.L=void 0,this.J=u&&u.supportsCrossDomainXhr||!1,this.K="",this.h=new gy(u&&u.concurrentRequestLimit),this.Da=new QR,this.P=u&&u.fastHandshake||!1,this.O=u&&u.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=u&&u.Rb||!1,u&&u.xa&&this.j.xa(),u&&u.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&u&&u.detectBufferingProxy||!1,this.ja=void 0,u&&u.longPollingTimeout&&0<u.longPollingTimeout&&(this.ja=u.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}t=Oy.prototype,t.la=8,t.G=1,t.connect=function(u,d,m,w){kt(0),this.W=u,this.H=d||{},m&&w!==void 0&&(this.H.OSID=m,this.H.OAID=w),this.F=this.X,this.I=Hy(this,null,this.W),tu(this)};function Pd(u){if(My(u),u.G==3){var d=u.U++,m=Yn(u.I);if(Te(m,"SID",u.K),Te(m,"RID",d),Te(m,"TYPE","terminate"),Uo(u,m),d=new kr(u,u.j,d),d.L=2,d.v=Yl(Yn(m)),m=!1,a.navigator&&a.navigator.sendBeacon)try{m=a.navigator.sendBeacon(d.v.toString(),"")}catch{}!m&&a.Image&&(new Image().src=d.v,m=!0),m||(d.g=qy(d.j,null),d.g.ea(d.v)),d.F=Date.now(),Kl(d)}Wy(u)}function eu(u){u.g&&(Dd(u),u.g.cancel(),u.g=null)}function My(u){eu(u),u.u&&(a.clearTimeout(u.u),u.u=null),nu(u),u.h.cancel(),u.s&&(typeof u.s=="number"&&a.clearTimeout(u.s),u.s=null)}function tu(u){if(!_y(u.h)&&!u.s){u.s=!0;var d=u.Ga;qe||Q(),W||(qe(),W=!0),G.add(d,u),u.B=0}}function ek(u,d){return yy(u.h)>=u.h.j-(u.s?1:0)?!1:u.s?(u.i=d.D.concat(u.i),!0):u.G==1||u.G==2||u.B>=(u.Va?0:u.Wa)?!1:(u.s=Po(p(u.Ga,u,d),zy(u,u.B)),u.B++,!0)}t.Ga=function(u){if(this.s)if(this.s=null,this.G==1){if(!u){this.U=Math.floor(1e5*Math.random()),u=this.U++;const L=new kr(this,this.j,u);let O=this.o;if(this.S&&(O?(O=y(O),R(O,this.S)):O=this.S),this.m!==null||this.O||(L.H=O,O=null),this.P)e:{for(var d=0,m=0;m<this.i.length;m++){t:{var w=this.i[m];if("__data__"in w.map&&(w=w.map.__data__,typeof w=="string")){w=w.length;break t}w=void 0}if(w===void 0)break;if(d+=w,4096<d){d=m;break e}if(d===4096||m===this.i.length-1){d=m+1;break e}}d=1e3}else d=1e3;d=Vy(this,L,d),m=Yn(this.I),Te(m,"RID",u),Te(m,"CVER",22),this.D&&Te(m,"X-HTTP-Session-Id",this.D),Uo(this,m),O&&(this.O?d="headers="+encodeURIComponent(String(xy(O)))+"&"+d:this.m&&Nd(m,this.m,O)),xd(this.h,L),this.Ua&&Te(m,"TYPE","init"),this.P?(Te(m,"$req",d),Te(m,"SID","null"),L.T=!0,Cd(L,m,null)):Cd(L,m,d),this.G=2}}else this.G==3&&(u?Fy(this,u):this.i.length==0||_y(this.h)||Fy(this))};function Fy(u,d){var m;d?m=d.l:m=u.U++;const w=Yn(u.I);Te(w,"SID",u.K),Te(w,"RID",m),Te(w,"AID",u.T),Uo(u,w),u.m&&u.o&&Nd(w,u.m,u.o),m=new kr(u,u.j,m,u.B+1),u.m===null&&(m.H=u.o),d&&(u.i=d.D.concat(u.i)),d=Vy(u,m,1e3),m.I=Math.round(.5*u.wa)+Math.round(.5*u.wa*Math.random()),xd(u.h,m),Cd(m,w,d)}function Uo(u,d){u.H&&V(u.H,function(m,w){Te(d,w,m)}),u.l&&Ay({},function(m,w){Te(d,w,m)})}function Vy(u,d,m){m=Math.min(u.i.length,m);var w=u.l?p(u.l.Na,u.l,u):null;e:{var L=u.i;let O=-1;for(;;){const z=["count="+m];O==-1?0<m?(O=L[0].g,z.push("ofs="+O)):O=0:z.push("ofs="+O);let ye=!0;for(let st=0;st<m;st++){let de=L[st].g;const pt=L[st].map;if(de-=O,0>de)O=Math.max(0,L[st].g-100),ye=!1;else try{YR(pt,z,"req"+de+"_")}catch{w&&w(pt)}}if(ye){w=z.join("&");break e}}}return u=u.i.splice(0,m),d.D=u,w}function jy(u){if(!u.g&&!u.u){u.Y=1;var d=u.Fa;qe||Q(),W||(qe(),W=!0),G.add(d,u),u.v=0}}function bd(u){return u.g||u.u||3<=u.v?!1:(u.Y++,u.u=Po(p(u.Fa,u),zy(u,u.v)),u.v++,!0)}t.Fa=function(){if(this.u=null,Uy(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var u=2*this.R;this.j.info("BP detection timer enabled: "+u),this.A=Po(p(this.ab,this),u)}},t.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,kt(10),eu(this),Uy(this))};function Dd(u){u.A!=null&&(a.clearTimeout(u.A),u.A=null)}function Uy(u){u.g=new kr(u,u.j,"rpc",u.Y),u.m===null&&(u.g.H=u.o),u.g.O=0;var d=Yn(u.qa);Te(d,"RID","rpc"),Te(d,"SID",u.K),Te(d,"AID",u.T),Te(d,"CI",u.F?"0":"1"),!u.F&&u.ja&&Te(d,"TO",u.ja),Te(d,"TYPE","xmlhttp"),Uo(u,d),u.m&&u.o&&Nd(d,u.m,u.o),u.L&&(u.g.I=u.L);var m=u.g;u=u.ia,m.L=1,m.v=Yl(Yn(d)),m.m=null,m.P=!0,fy(m,u)}t.Za=function(){this.C!=null&&(this.C=null,eu(this),bd(this),kt(19))};function nu(u){u.C!=null&&(a.clearTimeout(u.C),u.C=null)}function By(u,d){var m=null;if(u.g==d){nu(u),Dd(u),u.g=null;var w=2}else if(kd(u.h,d))m=d.D,vy(u.h,d),w=1;else return;if(u.G!=0){if(d.o)if(w==1){m=d.m?d.m.length:0,d=Date.now()-d.F;var L=u.B;w=Hl(),Rt(w,new uy(w,m)),tu(u)}else jy(u);else if(L=d.s,L==3||L==0&&0<d.X||!(w==1&&ek(u,d)||w==2&&bd(u)))switch(m&&0<m.length&&(d=u.h,d.i=d.i.concat(m)),L){case 1:Ii(u,5);break;case 4:Ii(u,10);break;case 3:Ii(u,6);break;default:Ii(u,2)}}}function zy(u,d){let m=u.Ta+Math.floor(Math.random()*u.cb);return u.isActive()||(m*=2),m*d}function Ii(u,d){if(u.j.info("Error code "+d),d==2){var m=p(u.fb,u),w=u.Xa;const L=!w;w=new Ti(w||"//www.google.com/images/cleardot.gif"),a.location&&a.location.protocol=="http"||$l(w,"https"),Yl(w),L?KR(w.toString(),m):$R(w.toString(),m)}else kt(2);u.G=0,u.l&&u.l.sa(d),Wy(u),My(u)}t.fb=function(u){u?(this.j.info("Successfully pinged google.com"),kt(2)):(this.j.info("Failed to ping google.com"),kt(1))};function Wy(u){if(u.G=0,u.ka=[],u.l){const d=wy(u.h);(d.length!=0||u.i.length!=0)&&(k(u.ka,d),k(u.ka,u.i),u.h.i.length=0,S(u.i),u.i.length=0),u.l.ra()}}function Hy(u,d,m){var w=m instanceof Ti?Yn(m):new Ti(m);if(w.g!="")d&&(w.g=d+"."+w.g),Ql(w,w.s);else{var L=a.location;w=L.protocol,d=d?d+"."+L.hostname:L.hostname,L=+L.port;var O=new Ti(null);w&&$l(O,w),d&&(O.g=d),L&&Ql(O,L),m&&(O.l=m),w=O}return m=u.D,d=u.ya,m&&d&&Te(w,m,d),Te(w,"VER",u.la),Uo(u,w),w}function qy(u,d,m){if(d&&!u.J)throw Error("Can't create secondary domain capable XhrIo object.");return d=u.Ca&&!u.pa?new De(new Xl({eb:m})):new De(u.pa),d.Ha(u.J),d}t.isActive=function(){return!!this.l&&this.l.isActive(this)};function Gy(){}t=Gy.prototype,t.ua=function(){},t.ta=function(){},t.sa=function(){},t.ra=function(){},t.isActive=function(){return!0},t.Na=function(){};function ru(){}ru.prototype.g=function(u,d){return new Gt(u,d)};function Gt(u,d){ft.call(this),this.g=new Oy(d),this.l=u,this.h=d&&d.messageUrlParams||null,u=d&&d.messageHeaders||null,d&&d.clientProtocolHeaderRequired&&(u?u["X-Client-Protocol"]="webchannel":u={"X-Client-Protocol":"webchannel"}),this.g.o=u,u=d&&d.initMessageHeaders||null,d&&d.messageContentType&&(u?u["X-WebChannel-Content-Type"]=d.messageContentType:u={"X-WebChannel-Content-Type":d.messageContentType}),d&&d.va&&(u?u["X-WebChannel-Client-Profile"]=d.va:u={"X-WebChannel-Client-Profile":d.va}),this.g.S=u,(u=d&&d.Sb)&&!v(u)&&(this.g.m=u),this.v=d&&d.supportsCrossDomainXhr||!1,this.u=d&&d.sendRawJson||!1,(d=d&&d.httpSessionIdParam)&&!v(d)&&(this.g.D=d,u=this.h,u!==null&&d in u&&(u=this.h,d in u&&delete u[d])),this.j=new hs(this)}E(Gt,ft),Gt.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},Gt.prototype.close=function(){Pd(this.g)},Gt.prototype.o=function(u){var d=this.g;if(typeof u=="string"){var m={};m.__data__=u,u=m}else this.u&&(m={},m.__data__=vd(u),u=m);d.i.push(new FR(d.Ya++,u)),d.G==3&&tu(d)},Gt.prototype.N=function(){this.g.l=null,delete this.j,Pd(this.g),delete this.g,Gt.aa.N.call(this)};function Ky(u){Ad.call(this),u.__headers__&&(this.headers=u.__headers__,this.statusCode=u.__status__,delete u.__headers__,delete u.__status__);var d=u.__sm__;if(d){e:{for(const m in d){u=m;break e}u=void 0}(this.i=u)&&(u=this.i,d=d!==null&&u in d?d[u]:void 0),this.data=d}else this.data=u}E(Ky,Ad);function $y(){Ed.call(this),this.status=1}E($y,Ed);function hs(u){this.g=u}E(hs,Gy),hs.prototype.ua=function(){Rt(this.g,"a")},hs.prototype.ta=function(u){Rt(this.g,new Ky(u))},hs.prototype.sa=function(u){Rt(this.g,new $y)},hs.prototype.ra=function(){Rt(this.g,"b")},ru.prototype.createWebChannel=ru.prototype.g,Gt.prototype.send=Gt.prototype.o,Gt.prototype.open=Gt.prototype.m,Gt.prototype.close=Gt.prototype.close,B1=function(){return new ru},U1=function(){return Hl()},j1=Ai,Xp={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},ql.NO_ERROR=0,ql.TIMEOUT=8,ql.HTTP_ERROR=6,ec=ql,cy.COMPLETE="complete",V1=cy,sy.EventType=xo,xo.OPEN="a",xo.CLOSE="b",xo.ERROR="c",xo.MESSAGE="d",ft.prototype.listen=ft.prototype.K,aa=sy,De.prototype.listenOnce=De.prototype.L,De.prototype.getLastError=De.prototype.Ka,De.prototype.getLastErrorCode=De.prototype.Ba,De.prototype.getStatus=De.prototype.Z,De.prototype.getResponseJson=De.prototype.Oa,De.prototype.getResponseText=De.prototype.oa,De.prototype.send=De.prototype.ea,De.prototype.setWithCredentials=De.prototype.Ha,F1=De}).apply(typeof Ru<"u"?Ru:typeof self<"u"?self:typeof window<"u"?window:{});const jw="@firebase/firestore";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vt{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}vt.UNAUTHENTICATED=new vt(null),vt.GOOGLE_CREDENTIALS=new vt("google-credentials-uid"),vt.FIRST_PARTY=new vt("first-party-uid"),vt.MOCK_USER=new vt("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let To="11.0.2";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const es=new Cl("@firebase/firestore");function ms(){return es.logLevel}function H(t,...e){if(es.logLevel<=ie.DEBUG){const n=e.map(v_);es.debug(`Firestore (${To}): ${t}`,...n)}}function Ar(t,...e){if(es.logLevel<=ie.ERROR){const n=e.map(v_);es.error(`Firestore (${To}): ${t}`,...n)}}function ro(t,...e){if(es.logLevel<=ie.WARN){const n=e.map(v_);es.warn(`Firestore (${To}): ${t}`,...n)}}function v_(t){if(typeof t=="string")return t;try{/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/return function(n){return JSON.stringify(n)}(t)}catch{return t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function J(t="Unexpected state"){const e=`FIRESTORE (${To}) INTERNAL ASSERTION FAILED: `+t;throw Ar(e),new Error(e)}function ge(t,e){t||J()}function ee(t,e){return t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const j={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class K extends gn{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ti{constructor(){this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class z1{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class rj{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n(vt.UNAUTHENTICATED))}shutdown(){}}class ij{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,n){this.changeListener=n,e.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class sj{constructor(e){this.t=e,this.currentUser=vt.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){ge(this.o===void 0);let r=this.i;const i=l=>this.i!==r?(r=this.i,n(l)):Promise.resolve();let s=new ti;this.o=()=>{this.i++,this.currentUser=this.u(),s.resolve(),s=new ti,e.enqueueRetryable(()=>i(this.currentUser))};const o=()=>{const l=s;e.enqueueRetryable(async()=>{await l.promise,await i(this.currentUser)})},a=l=>{H("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=l,this.o&&(this.auth.addAuthTokenListener(this.o),o())};this.t.onInit(l=>a(l)),setTimeout(()=>{if(!this.auth){const l=this.t.getImmediate({optional:!0});l?a(l):(H("FirebaseAuthCredentialsProvider","Auth not yet detected"),s.resolve(),s=new ti)}},0),o()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(r=>this.i!==e?(H("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(ge(typeof r.accessToken=="string"),new z1(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return ge(e===null||typeof e=="string"),new vt(e)}}class oj{constructor(e,n,r){this.l=e,this.h=n,this.P=r,this.type="FirstParty",this.user=vt.FIRST_PARTY,this.T=new Map}I(){return this.P?this.P():null}get headers(){this.T.set("X-Goog-AuthUser",this.l);const e=this.I();return e&&this.T.set("Authorization",e),this.h&&this.T.set("X-Goog-Iam-Authorization-Token",this.h),this.T}}class aj{constructor(e,n,r){this.l=e,this.h=n,this.P=r}getToken(){return Promise.resolve(new oj(this.l,this.h,this.P))}start(e,n){e.enqueueRetryable(()=>n(vt.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class lj{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class uj{constructor(e){this.A=e,this.forceRefresh=!1,this.appCheck=null,this.R=null}start(e,n){ge(this.o===void 0);const r=s=>{s.error!=null&&H("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${s.error.message}`);const o=s.token!==this.R;return this.R=s.token,H("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?n(s.token):Promise.resolve()};this.o=s=>{e.enqueueRetryable(()=>r(s))};const i=s=>{H("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=s,this.o&&this.appCheck.addTokenListener(this.o)};this.A.onInit(s=>i(s)),setTimeout(()=>{if(!this.appCheck){const s=this.A.getImmediate({optional:!0});s?i(s):H("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(n=>n?(ge(typeof n.token=="string"),this.R=n.token,new lj(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function cj(t){const e=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let r=0;r<t;r++)n[r]=Math.floor(256*Math.random());return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class W1{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=Math.floor(256/e.length)*e.length;let r="";for(;r.length<20;){const i=cj(40);for(let s=0;s<i.length;++s)r.length<20&&i[s]<n&&(r+=e.charAt(i[s]%e.length))}return r}}function le(t,e){return t<e?-1:t>e?1:0}function io(t,e,n){return t.length===e.length&&t.every((r,i)=>n(r,e[i]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ye{static now(){return Ye.fromMillis(Date.now())}static fromDate(e){return Ye.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),r=Math.floor(1e6*(e-1e3*n));return new Ye(n,r)}constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new K(j.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new K(j.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(e<-62135596800)throw new K(j.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new K(j.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?le(this.nanoseconds,e.nanoseconds):le(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Z{static fromTimestamp(e){return new Z(e)}static min(){return new Z(new Ye(0,0))}static max(){return new Z(new Ye(253402300799,999999999))}constructor(e){this.timestamp=e}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class al{constructor(e,n,r){n===void 0?n=0:n>e.length&&J(),r===void 0?r=e.length-n:r>e.length-n&&J(),this.segments=e,this.offset=n,this.len=r}get length(){return this.len}isEqual(e){return al.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof al?e.forEach(r=>{n.push(r)}):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,r=this.limit();n<r;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const r=Math.min(e.length,n.length);for(let i=0;i<r;i++){const s=e.get(i),o=n.get(i);if(s<o)return-1;if(s>o)return 1}return e.length<n.length?-1:e.length>n.length?1:0}}class Oe extends al{construct(e,n,r){return new Oe(e,n,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const n=[];for(const r of e){if(r.indexOf("//")>=0)throw new K(j.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);n.push(...r.split("/").filter(i=>i.length>0))}return new Oe(n)}static emptyPath(){return new Oe([])}}const hj=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class ut extends al{construct(e,n,r){return new ut(e,n,r)}static isValidIdentifier(e){return hj.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),ut.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new ut(["__name__"])}static fromServerFormat(e){const n=[];let r="",i=0;const s=()=>{if(r.length===0)throw new K(j.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(r),r=""};let o=!1;for(;i<e.length;){const a=e[i];if(a==="\\"){if(i+1===e.length)throw new K(j.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const l=e[i+1];if(l!=="\\"&&l!=="."&&l!=="`")throw new K(j.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=l,i+=2}else a==="`"?(o=!o,i++):a!=="."||o?(r+=a,i++):(s(),i++)}if(s(),o)throw new K(j.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new ut(n)}static emptyPath(){return new ut([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ${constructor(e){this.path=e}static fromPath(e){return new $(Oe.fromString(e))}static fromName(e){return new $(Oe.fromString(e).popFirst(5))}static empty(){return new $(Oe.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&Oe.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,n){return Oe.comparator(e.path,n.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new $(new Oe(e.slice()))}}function dj(t,e){const n=t.toTimestamp().seconds,r=t.toTimestamp().nanoseconds+1,i=Z.fromTimestamp(r===1e9?new Ye(n+1,0):new Ye(n,r));return new ai(i,$.empty(),e)}function fj(t){return new ai(t.readTime,t.key,-1)}class ai{constructor(e,n,r){this.readTime=e,this.documentKey=n,this.largestBatchId=r}static min(){return new ai(Z.min(),$.empty(),-1)}static max(){return new ai(Z.max(),$.empty(),-1)}}function pj(t,e){let n=t.readTime.compareTo(e.readTime);return n!==0?n:(n=$.comparator(t.documentKey,e.documentKey),n!==0?n:le(t.largestBatchId,e.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mj="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class gj{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Io(t){if(t.code!==j.FAILED_PRECONDITION||t.message!==mj)throw t;H("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class F{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(e){return this.next(void 0,e)}next(e,n){return this.callbackAttached&&J(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(e,this.result):new F((r,i)=>{this.nextCallback=s=>{this.wrapSuccess(e,s).next(r,i)},this.catchCallback=s=>{this.wrapFailure(n,s).next(r,i)}})}toPromise(){return new Promise((e,n)=>{this.next(e,n)})}wrapUserFunction(e){try{const n=e();return n instanceof F?n:F.resolve(n)}catch(n){return F.reject(n)}}wrapSuccess(e,n){return e?this.wrapUserFunction(()=>e(n)):F.resolve(n)}wrapFailure(e,n){return e?this.wrapUserFunction(()=>e(n)):F.reject(n)}static resolve(e){return new F((n,r)=>{n(e)})}static reject(e){return new F((n,r)=>{r(e)})}static waitFor(e){return new F((n,r)=>{let i=0,s=0,o=!1;e.forEach(a=>{++i,a.next(()=>{++s,o&&s===i&&n()},l=>r(l))}),o=!0,s===i&&n()})}static or(e){let n=F.resolve(!1);for(const r of e)n=n.next(i=>i?F.resolve(i):r());return n}static forEach(e,n){const r=[];return e.forEach((i,s)=>{r.push(n.call(this,i,s))}),this.waitFor(r)}static mapArray(e,n){return new F((r,i)=>{const s=e.length,o=new Array(s);let a=0;for(let l=0;l<s;l++){const c=l;n(e[c]).next(h=>{o[c]=h,++a,a===s&&r(o)},h=>i(h))}})}static doWhile(e,n){return new F((r,i)=>{const s=()=>{e()===!0?n().next(()=>{s()},i):r()};s()})}}function _j(t){const e=t.match(/Android ([\d.]+)/i),n=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(n)}function Co(t){return t.name==="IndexedDbTransactionError"}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yh{constructor(e,n){this.previousValue=e,n&&(n.sequenceNumberHandler=r=>this.ie(r),this.se=r=>n.writeSequenceNumber(r))}ie(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.se&&this.se(e),e}}Yh.oe=-1;function Xh(t){return t==null}function ih(t){return t===0&&1/t==-1/0}function yj(t){return typeof t=="number"&&Number.isInteger(t)&&!ih(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function vj(t){let e="";for(let n=0;n<t.length;n++)e.length>0&&(e=Uw(e)),e=wj(t.get(n),e);return Uw(e)}function wj(t,e){let n=e;const r=t.length;for(let i=0;i<r;i++){const s=t.charAt(i);switch(s){case"\0":n+="";break;case"":n+="";break;default:n+=s}}return n}function Uw(t){return t+""}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Bw(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function ss(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function H1(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class be{constructor(e,n){this.comparator=e,this.root=n||at.EMPTY}insert(e,n){return new be(this.comparator,this.root.insert(e,n,this.comparator).copy(null,null,at.BLACK,null,null))}remove(e){return new be(this.comparator,this.root.remove(e,this.comparator).copy(null,null,at.BLACK,null,null))}get(e){let n=this.root;for(;!n.isEmpty();){const r=this.comparator(e,n.key);if(r===0)return n.value;r<0?n=n.left:r>0&&(n=n.right)}return null}indexOf(e){let n=0,r=this.root;for(;!r.isEmpty();){const i=this.comparator(e,r.key);if(i===0)return n+r.left.size;i<0?r=r.left:(n+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((n,r)=>(e(n,r),!1))}toString(){const e=[];return this.inorderTraversal((n,r)=>(e.push(`${n}:${r}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new ku(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new ku(this.root,e,this.comparator,!1)}getReverseIterator(){return new ku(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new ku(this.root,e,this.comparator,!0)}}class ku{constructor(e,n,r,i){this.isReverse=i,this.nodeStack=[];let s=1;for(;!e.isEmpty();)if(s=n?r(e.key,n):1,n&&i&&(s*=-1),s<0)e=this.isReverse?e.left:e.right;else{if(s===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const n={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class at{constructor(e,n,r,i,s){this.key=e,this.value=n,this.color=r??at.RED,this.left=i??at.EMPTY,this.right=s??at.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,n,r,i,s){return new at(e??this.key,n??this.value,r??this.color,i??this.left,s??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,r){let i=this;const s=r(e,i.key);return i=s<0?i.copy(null,null,null,i.left.insert(e,n,r),null):s===0?i.copy(null,n,null,null,null):i.copy(null,null,null,null,i.right.insert(e,n,r)),i.fixUp()}removeMin(){if(this.left.isEmpty())return at.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,n){let r,i=this;if(n(e,i.key)<0)i.left.isEmpty()||i.left.isRed()||i.left.left.isRed()||(i=i.moveRedLeft()),i=i.copy(null,null,null,i.left.remove(e,n),null);else{if(i.left.isRed()&&(i=i.rotateRight()),i.right.isEmpty()||i.right.isRed()||i.right.left.isRed()||(i=i.moveRedRight()),n(e,i.key)===0){if(i.right.isEmpty())return at.EMPTY;r=i.right.min(),i=i.copy(r.key,r.value,null,null,i.right.removeMin())}i=i.copy(null,null,null,null,i.right.remove(e,n))}return i.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,at.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,at.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw J();const e=this.left.check();if(e!==this.right.check())throw J();return e+(this.isRed()?0:1)}}at.EMPTY=null,at.RED=!0,at.BLACK=!1;at.EMPTY=new class{constructor(){this.size=0}get key(){throw J()}get value(){throw J()}get color(){throw J()}get left(){throw J()}get right(){throw J()}copy(e,n,r,i,s){return this}insert(e,n,r){return new at(e,n)}remove(e,n){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xe{constructor(e){this.comparator=e,this.data=new be(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((n,r)=>(e(n),!1))}forEachInRange(e,n){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const i=r.getNext();if(this.comparator(i.key,e[1])>=0)return;n(i.key)}}forEachWhile(e,n){let r;for(r=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const n=this.data.getIteratorFrom(e);return n.hasNext()?n.getNext().key:null}getIterator(){return new zw(this.data.getIterator())}getIteratorFrom(e){return new zw(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let n=this;return n.size<e.size&&(n=e,e=this),e.forEach(r=>{n=n.add(r)}),n}isEqual(e){if(!(e instanceof Xe)||this.size!==e.size)return!1;const n=this.data.getIterator(),r=e.data.getIterator();for(;n.hasNext();){const i=n.getNext().key,s=r.getNext().key;if(this.comparator(i,s)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(n=>{e.push(n)}),e}toString(){const e=[];return this.forEach(n=>e.push(n)),"SortedSet("+e.toString()+")"}copy(e){const n=new Xe(this.comparator);return n.data=e,n}}class zw{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rn{constructor(e){this.fields=e,e.sort(ut.comparator)}static empty(){return new Rn([])}unionWith(e){let n=new Xe(ut.comparator);for(const r of this.fields)n=n.add(r);for(const r of e)n=n.add(r);return new Rn(n.toArray())}covers(e){for(const n of this.fields)if(n.isPrefixOf(e))return!0;return!1}isEqual(e){return io(this.fields,e.fields,(n,r)=>n.isEqual(r))}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class q1 extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dt{constructor(e){this.binaryString=e}static fromBase64String(e){const n=function(i){try{return atob(i)}catch(s){throw typeof DOMException<"u"&&s instanceof DOMException?new q1("Invalid base64 string: "+s):s}}(e);return new dt(n)}static fromUint8Array(e){const n=function(i){let s="";for(let o=0;o<i.length;++o)s+=String.fromCharCode(i[o]);return s}(e);return new dt(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(n){return btoa(n)}(this.binaryString)}toUint8Array(){return function(n){const r=new Uint8Array(n.length);for(let i=0;i<n.length;i++)r[i]=n.charCodeAt(i);return r}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return le(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}dt.EMPTY_BYTE_STRING=new dt("");const Aj=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function li(t){if(ge(!!t),typeof t=="string"){let e=0;const n=Aj.exec(t);if(ge(!!n),n[1]){let i=n[1];i=(i+"000000000").substr(0,9),e=Number(i)}const r=new Date(t);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:Ue(t.seconds),nanos:Ue(t.nanos)}}function Ue(t){return typeof t=="number"?t:typeof t=="string"?Number(t):0}function ui(t){return typeof t=="string"?dt.fromBase64String(t):dt.fromUint8Array(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function w_(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="server_timestamp"}function Jh(t){const e=t.mapValue.fields.__previous_value__;return w_(e)?Jh(e):e}function ll(t){const e=li(t.mapValue.fields.__local_write_time__.timestampValue);return new Ye(e.seconds,e.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ej{constructor(e,n,r,i,s,o,a,l,c){this.databaseId=e,this.appId=n,this.persistenceKey=r,this.host=i,this.ssl=s,this.forceLongPolling=o,this.autoDetectLongPolling=a,this.longPollingOptions=l,this.useFetchStreams=c}}class ul{constructor(e,n){this.projectId=e,this.database=n||"(default)"}static empty(){return new ul("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof ul&&e.projectId===this.projectId&&e.database===this.database}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xu={mapValue:{fields:{__type__:{stringValue:"__max__"}}}};function ci(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?w_(t)?4:Ij(t)?9007199254740991:Tj(t)?10:11:J()}function Kn(t,e){if(t===e)return!0;const n=ci(t);if(n!==ci(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return ll(t).isEqual(ll(e));case 3:return function(i,s){if(typeof i.timestampValue=="string"&&typeof s.timestampValue=="string"&&i.timestampValue.length===s.timestampValue.length)return i.timestampValue===s.timestampValue;const o=li(i.timestampValue),a=li(s.timestampValue);return o.seconds===a.seconds&&o.nanos===a.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(i,s){return ui(i.bytesValue).isEqual(ui(s.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(i,s){return Ue(i.geoPointValue.latitude)===Ue(s.geoPointValue.latitude)&&Ue(i.geoPointValue.longitude)===Ue(s.geoPointValue.longitude)}(t,e);case 2:return function(i,s){if("integerValue"in i&&"integerValue"in s)return Ue(i.integerValue)===Ue(s.integerValue);if("doubleValue"in i&&"doubleValue"in s){const o=Ue(i.doubleValue),a=Ue(s.doubleValue);return o===a?ih(o)===ih(a):isNaN(o)&&isNaN(a)}return!1}(t,e);case 9:return io(t.arrayValue.values||[],e.arrayValue.values||[],Kn);case 10:case 11:return function(i,s){const o=i.mapValue.fields||{},a=s.mapValue.fields||{};if(Bw(o)!==Bw(a))return!1;for(const l in o)if(o.hasOwnProperty(l)&&(a[l]===void 0||!Kn(o[l],a[l])))return!1;return!0}(t,e);default:return J()}}function cl(t,e){return(t.values||[]).find(n=>Kn(n,e))!==void 0}function so(t,e){if(t===e)return 0;const n=ci(t),r=ci(e);if(n!==r)return le(n,r);switch(n){case 0:case 9007199254740991:return 0;case 1:return le(t.booleanValue,e.booleanValue);case 2:return function(s,o){const a=Ue(s.integerValue||s.doubleValue),l=Ue(o.integerValue||o.doubleValue);return a<l?-1:a>l?1:a===l?0:isNaN(a)?isNaN(l)?0:-1:1}(t,e);case 3:return Ww(t.timestampValue,e.timestampValue);case 4:return Ww(ll(t),ll(e));case 5:return le(t.stringValue,e.stringValue);case 6:return function(s,o){const a=ui(s),l=ui(o);return a.compareTo(l)}(t.bytesValue,e.bytesValue);case 7:return function(s,o){const a=s.split("/"),l=o.split("/");for(let c=0;c<a.length&&c<l.length;c++){const h=le(a[c],l[c]);if(h!==0)return h}return le(a.length,l.length)}(t.referenceValue,e.referenceValue);case 8:return function(s,o){const a=le(Ue(s.latitude),Ue(o.latitude));return a!==0?a:le(Ue(s.longitude),Ue(o.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return Hw(t.arrayValue,e.arrayValue);case 10:return function(s,o){var a,l,c,h;const f=s.fields||{},p=o.fields||{},_=(a=f.value)===null||a===void 0?void 0:a.arrayValue,E=(l=p.value)===null||l===void 0?void 0:l.arrayValue,S=le(((c=_==null?void 0:_.values)===null||c===void 0?void 0:c.length)||0,((h=E==null?void 0:E.values)===null||h===void 0?void 0:h.length)||0);return S!==0?S:Hw(_,E)}(t.mapValue,e.mapValue);case 11:return function(s,o){if(s===xu.mapValue&&o===xu.mapValue)return 0;if(s===xu.mapValue)return 1;if(o===xu.mapValue)return-1;const a=s.fields||{},l=Object.keys(a),c=o.fields||{},h=Object.keys(c);l.sort(),h.sort();for(let f=0;f<l.length&&f<h.length;++f){const p=le(l[f],h[f]);if(p!==0)return p;const _=so(a[l[f]],c[h[f]]);if(_!==0)return _}return le(l.length,h.length)}(t.mapValue,e.mapValue);default:throw J()}}function Ww(t,e){if(typeof t=="string"&&typeof e=="string"&&t.length===e.length)return le(t,e);const n=li(t),r=li(e),i=le(n.seconds,r.seconds);return i!==0?i:le(n.nanos,r.nanos)}function Hw(t,e){const n=t.values||[],r=e.values||[];for(let i=0;i<n.length&&i<r.length;++i){const s=so(n[i],r[i]);if(s)return s}return le(n.length,r.length)}function oo(t){return Jp(t)}function Jp(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(n){const r=li(n);return`time(${r.seconds},${r.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?function(n){return ui(n).toBase64()}(t.bytesValue):"referenceValue"in t?function(n){return $.fromName(n).toString()}(t.referenceValue):"geoPointValue"in t?function(n){return`geo(${n.latitude},${n.longitude})`}(t.geoPointValue):"arrayValue"in t?function(n){let r="[",i=!0;for(const s of n.values||[])i?i=!1:r+=",",r+=Jp(s);return r+"]"}(t.arrayValue):"mapValue"in t?function(n){const r=Object.keys(n.fields||{}).sort();let i="{",s=!0;for(const o of r)s?s=!1:i+=",",i+=`${o}:${Jp(n.fields[o])}`;return i+"}"}(t.mapValue):J()}function tc(t){switch(ci(t)){case 0:case 1:return 4;case 2:return 8;case 3:case 8:return 16;case 4:const e=Jh(t);return e?16+tc(e):16;case 5:return 2*t.stringValue.length;case 6:return ui(t.bytesValue).approximateByteSize();case 7:return t.referenceValue.length;case 9:return function(r){return(r.values||[]).reduce((i,s)=>i+tc(s),0)}(t.arrayValue);case 10:case 11:return function(r){let i=0;return ss(r.fields,(s,o)=>{i+=s.length+tc(o)}),i}(t.mapValue);default:throw J()}}function Zp(t){return!!t&&"integerValue"in t}function A_(t){return!!t&&"arrayValue"in t}function qw(t){return!!t&&"nullValue"in t}function Gw(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function nc(t){return!!t&&"mapValue"in t}function Tj(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="__vector__"}function Sa(t){if(t.geoPointValue)return{geoPointValue:Object.assign({},t.geoPointValue)};if(t.timestampValue&&typeof t.timestampValue=="object")return{timestampValue:Object.assign({},t.timestampValue)};if(t.mapValue){const e={mapValue:{fields:{}}};return ss(t.mapValue.fields,(n,r)=>e.mapValue.fields[n]=Sa(r)),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=Sa(t.arrayValue.values[n]);return e}return Object.assign({},t)}function Ij(t){return(((t.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ln{constructor(e){this.value=e}static empty(){return new ln({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let r=0;r<e.length-1;++r)if(n=(n.mapValue.fields||{})[e.get(r)],!nc(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=Sa(n)}setAll(e){let n=ut.emptyPath(),r={},i=[];e.forEach((o,a)=>{if(!n.isImmediateParentOf(a)){const l=this.getFieldsMap(n);this.applyChanges(l,r,i),r={},i=[],n=a.popLast()}o?r[a.lastSegment()]=Sa(o):i.push(a.lastSegment())});const s=this.getFieldsMap(n);this.applyChanges(s,r,i)}delete(e){const n=this.field(e.popLast());nc(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return Kn(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let r=0;r<e.length;++r){let i=n.mapValue.fields[e.get(r)];nc(i)&&i.mapValue.fields||(i={mapValue:{fields:{}}},n.mapValue.fields[e.get(r)]=i),n=i}return n.mapValue.fields}applyChanges(e,n,r){ss(n,(i,s)=>e[i]=s);for(const i of r)delete e[i]}clone(){return new ln(Sa(this.value))}}function G1(t){const e=[];return ss(t.fields,(n,r)=>{const i=new ut([n]);if(nc(r)){const s=G1(r.mapValue).fields;if(s.length===0)e.push(i);else for(const o of s)e.push(i.child(o))}else e.push(i)}),new Rn(e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Et{constructor(e,n,r,i,s,o,a){this.key=e,this.documentType=n,this.version=r,this.readTime=i,this.createTime=s,this.data=o,this.documentState=a}static newInvalidDocument(e){return new Et(e,0,Z.min(),Z.min(),Z.min(),ln.empty(),0)}static newFoundDocument(e,n,r,i){return new Et(e,1,n,Z.min(),r,i,0)}static newNoDocument(e,n){return new Et(e,2,n,Z.min(),Z.min(),ln.empty(),0)}static newUnknownDocument(e,n){return new Et(e,3,n,Z.min(),Z.min(),ln.empty(),2)}convertToFoundDocument(e,n){return!this.createTime.isEqual(Z.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=ln.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=ln.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=Z.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof Et&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new Et(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sh{constructor(e,n){this.position=e,this.inclusive=n}}function Kw(t,e,n){let r=0;for(let i=0;i<t.position.length;i++){const s=e[i],o=t.position[i];if(s.field.isKeyField()?r=$.comparator($.fromName(o.referenceValue),n.key):r=so(o,n.data.field(s.field)),s.dir==="desc"&&(r*=-1),r!==0)break}return r}function $w(t,e){if(t===null)return e===null;if(e===null||t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!Kn(t.position[n],e.position[n]))return!1;return!0}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oh{constructor(e,n="asc"){this.field=e,this.dir=n}}function Cj(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class K1{}class $e extends K1{constructor(e,n,r){super(),this.field=e,this.op=n,this.value=r}static create(e,n,r){return e.isKeyField()?n==="in"||n==="not-in"?this.createKeyFieldInFilter(e,n,r):new Rj(e,n,r):n==="array-contains"?new Nj(e,r):n==="in"?new Pj(e,r):n==="not-in"?new bj(e,r):n==="array-contains-any"?new Dj(e,r):new $e(e,n,r)}static createKeyFieldInFilter(e,n,r){return n==="in"?new kj(e,r):new xj(e,r)}matches(e){const n=e.data.field(this.field);return this.op==="!="?n!==null&&this.matchesComparison(so(n,this.value)):n!==null&&ci(this.value)===ci(n)&&this.matchesComparison(so(n,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return J()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class $n extends K1{constructor(e,n){super(),this.filters=e,this.op=n,this.ae=null}static create(e,n){return new $n(e,n)}matches(e){return $1(this)?this.filters.find(n=>!n.matches(e))===void 0:this.filters.find(n=>n.matches(e))!==void 0}getFlattenedFilters(){return this.ae!==null||(this.ae=this.filters.reduce((e,n)=>e.concat(n.getFlattenedFilters()),[])),this.ae}getFilters(){return Object.assign([],this.filters)}}function $1(t){return t.op==="and"}function Q1(t){return Sj(t)&&$1(t)}function Sj(t){for(const e of t.filters)if(e instanceof $n)return!1;return!0}function em(t){if(t instanceof $e)return t.field.canonicalString()+t.op.toString()+oo(t.value);if(Q1(t))return t.filters.map(e=>em(e)).join(",");{const e=t.filters.map(n=>em(n)).join(",");return`${t.op}(${e})`}}function Y1(t,e){return t instanceof $e?function(r,i){return i instanceof $e&&r.op===i.op&&r.field.isEqual(i.field)&&Kn(r.value,i.value)}(t,e):t instanceof $n?function(r,i){return i instanceof $n&&r.op===i.op&&r.filters.length===i.filters.length?r.filters.reduce((s,o,a)=>s&&Y1(o,i.filters[a]),!0):!1}(t,e):void J()}function X1(t){return t instanceof $e?function(n){return`${n.field.canonicalString()} ${n.op} ${oo(n.value)}`}(t):t instanceof $n?function(n){return n.op.toString()+" {"+n.getFilters().map(X1).join(" ,")+"}"}(t):"Filter"}class Rj extends $e{constructor(e,n,r){super(e,n,r),this.key=$.fromName(r.referenceValue)}matches(e){const n=$.comparator(e.key,this.key);return this.matchesComparison(n)}}class kj extends $e{constructor(e,n){super(e,"in",n),this.keys=J1("in",n)}matches(e){return this.keys.some(n=>n.isEqual(e.key))}}class xj extends $e{constructor(e,n){super(e,"not-in",n),this.keys=J1("not-in",n)}matches(e){return!this.keys.some(n=>n.isEqual(e.key))}}function J1(t,e){var n;return(((n=e.arrayValue)===null||n===void 0?void 0:n.values)||[]).map(r=>$.fromName(r.referenceValue))}class Nj extends $e{constructor(e,n){super(e,"array-contains",n)}matches(e){const n=e.data.field(this.field);return A_(n)&&cl(n.arrayValue,this.value)}}class Pj extends $e{constructor(e,n){super(e,"in",n)}matches(e){const n=e.data.field(this.field);return n!==null&&cl(this.value.arrayValue,n)}}class bj extends $e{constructor(e,n){super(e,"not-in",n)}matches(e){if(cl(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=e.data.field(this.field);return n!==null&&!cl(this.value.arrayValue,n)}}class Dj extends $e{constructor(e,n){super(e,"array-contains-any",n)}matches(e){const n=e.data.field(this.field);return!(!A_(n)||!n.arrayValue.values)&&n.arrayValue.values.some(r=>cl(this.value.arrayValue,r))}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lj{constructor(e,n=null,r=[],i=[],s=null,o=null,a=null){this.path=e,this.collectionGroup=n,this.orderBy=r,this.filters=i,this.limit=s,this.startAt=o,this.endAt=a,this.ue=null}}function Qw(t,e=null,n=[],r=[],i=null,s=null,o=null){return new Lj(t,e,n,r,i,s,o)}function E_(t){const e=ee(t);if(e.ue===null){let n=e.path.canonicalString();e.collectionGroup!==null&&(n+="|cg:"+e.collectionGroup),n+="|f:",n+=e.filters.map(r=>em(r)).join(","),n+="|ob:",n+=e.orderBy.map(r=>function(s){return s.field.canonicalString()+s.dir}(r)).join(","),Xh(e.limit)||(n+="|l:",n+=e.limit),e.startAt&&(n+="|lb:",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(r=>oo(r)).join(",")),e.endAt&&(n+="|ub:",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(r=>oo(r)).join(",")),e.ue=n}return e.ue}function T_(t,e){if(t.limit!==e.limit||t.orderBy.length!==e.orderBy.length)return!1;for(let n=0;n<t.orderBy.length;n++)if(!Cj(t.orderBy[n],e.orderBy[n]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let n=0;n<t.filters.length;n++)if(!Y1(t.filters[n],e.filters[n]))return!1;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!$w(t.startAt,e.startAt)&&$w(t.endAt,e.endAt)}function tm(t){return $.isDocumentKey(t.path)&&t.collectionGroup===null&&t.filters.length===0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zh{constructor(e,n=null,r=[],i=[],s=null,o="F",a=null,l=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=r,this.filters=i,this.limit=s,this.limitType=o,this.startAt=a,this.endAt=l,this.ce=null,this.le=null,this.he=null,this.startAt,this.endAt}}function Oj(t,e,n,r,i,s,o,a){return new Zh(t,e,n,r,i,s,o,a)}function I_(t){return new Zh(t)}function Yw(t){return t.filters.length===0&&t.limit===null&&t.startAt==null&&t.endAt==null&&(t.explicitOrderBy.length===0||t.explicitOrderBy.length===1&&t.explicitOrderBy[0].field.isKeyField())}function Mj(t){return t.collectionGroup!==null}function Ra(t){const e=ee(t);if(e.ce===null){e.ce=[];const n=new Set;for(const s of e.explicitOrderBy)e.ce.push(s),n.add(s.field.canonicalString());const r=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(o){let a=new Xe(ut.comparator);return o.filters.forEach(l=>{l.getFlattenedFilters().forEach(c=>{c.isInequality()&&(a=a.add(c.field))})}),a})(e).forEach(s=>{n.has(s.canonicalString())||s.isKeyField()||e.ce.push(new oh(s,r))}),n.has(ut.keyField().canonicalString())||e.ce.push(new oh(ut.keyField(),r))}return e.ce}function Hn(t){const e=ee(t);return e.le||(e.le=Fj(e,Ra(t))),e.le}function Fj(t,e){if(t.limitType==="F")return Qw(t.path,t.collectionGroup,e,t.filters,t.limit,t.startAt,t.endAt);{e=e.map(i=>{const s=i.dir==="desc"?"asc":"desc";return new oh(i.field,s)});const n=t.endAt?new sh(t.endAt.position,t.endAt.inclusive):null,r=t.startAt?new sh(t.startAt.position,t.startAt.inclusive):null;return Qw(t.path,t.collectionGroup,e,t.filters,t.limit,n,r)}}function nm(t,e,n){return new Zh(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function ed(t,e){return T_(Hn(t),Hn(e))&&t.limitType===e.limitType}function Z1(t){return`${E_(Hn(t))}|lt:${t.limitType}`}function gs(t){return`Query(target=${function(n){let r=n.path.canonicalString();return n.collectionGroup!==null&&(r+=" collectionGroup="+n.collectionGroup),n.filters.length>0&&(r+=`, filters: [${n.filters.map(i=>X1(i)).join(", ")}]`),Xh(n.limit)||(r+=", limit: "+n.limit),n.orderBy.length>0&&(r+=`, orderBy: [${n.orderBy.map(i=>function(o){return`${o.field.canonicalString()} (${o.dir})`}(i)).join(", ")}]`),n.startAt&&(r+=", startAt: ",r+=n.startAt.inclusive?"b:":"a:",r+=n.startAt.position.map(i=>oo(i)).join(",")),n.endAt&&(r+=", endAt: ",r+=n.endAt.inclusive?"a:":"b:",r+=n.endAt.position.map(i=>oo(i)).join(",")),`Target(${r})`}(Hn(t))}; limitType=${t.limitType})`}function td(t,e){return e.isFoundDocument()&&function(r,i){const s=i.key.path;return r.collectionGroup!==null?i.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(s):$.isDocumentKey(r.path)?r.path.isEqual(s):r.path.isImmediateParentOf(s)}(t,e)&&function(r,i){for(const s of Ra(r))if(!s.field.isKeyField()&&i.data.field(s.field)===null)return!1;return!0}(t,e)&&function(r,i){for(const s of r.filters)if(!s.matches(i))return!1;return!0}(t,e)&&function(r,i){return!(r.startAt&&!function(o,a,l){const c=Kw(o,a,l);return o.inclusive?c<=0:c<0}(r.startAt,Ra(r),i)||r.endAt&&!function(o,a,l){const c=Kw(o,a,l);return o.inclusive?c>=0:c>0}(r.endAt,Ra(r),i))}(t,e)}function Vj(t){return t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2))}function eS(t){return(e,n)=>{let r=!1;for(const i of Ra(t)){const s=jj(i,e,n);if(s!==0)return s;r=r||i.field.isKeyField()}return 0}}function jj(t,e,n){const r=t.field.isKeyField()?$.comparator(e.key,n.key):function(s,o,a){const l=o.data.field(s),c=a.data.field(s);return l!==null&&c!==null?so(l,c):J()}(t.field,e,n);switch(t.dir){case"asc":return r;case"desc":return-1*r;default:return J()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class os{constructor(e,n){this.mapKeyFn=e,this.equalsFn=n,this.inner={},this.innerSize=0}get(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r!==void 0){for(const[i,s]of r)if(this.equalsFn(i,e))return s}}has(e){return this.get(e)!==void 0}set(e,n){const r=this.mapKeyFn(e),i=this.inner[r];if(i===void 0)return this.inner[r]=[[e,n]],void this.innerSize++;for(let s=0;s<i.length;s++)if(this.equalsFn(i[s][0],e))return void(i[s]=[e,n]);i.push([e,n]),this.innerSize++}delete(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r===void 0)return!1;for(let i=0;i<r.length;i++)if(this.equalsFn(r[i][0],e))return r.length===1?delete this.inner[n]:r.splice(i,1),this.innerSize--,!0;return!1}forEach(e){ss(this.inner,(n,r)=>{for(const[i,s]of r)e(i,s)})}isEmpty(){return H1(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Uj=new be($.comparator);function Er(){return Uj}const tS=new be($.comparator);function la(...t){let e=tS;for(const n of t)e=e.insert(n.key,n);return e}function nS(t){let e=tS;return t.forEach((n,r)=>e=e.insert(n,r.overlayedDocument)),e}function Mi(){return ka()}function rS(){return ka()}function ka(){return new os(t=>t.toString(),(t,e)=>t.isEqual(e))}const Bj=new be($.comparator),zj=new Xe($.comparator);function ae(...t){let e=zj;for(const n of t)e=e.add(n);return e}const Wj=new Xe(le);function Hj(){return Wj}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function C_(t,e){if(t.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:ih(e)?"-0":e}}function iS(t){return{integerValue:""+t}}function qj(t,e){return yj(e)?iS(e):C_(t,e)}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nd{constructor(){this._=void 0}}function Gj(t,e,n){return t instanceof ah?function(i,s){const o={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:i.seconds,nanos:i.nanoseconds}}}};return s&&w_(s)&&(s=Jh(s)),s&&(o.fields.__previous_value__=s),{mapValue:o}}(n,e):t instanceof hl?oS(t,e):t instanceof dl?aS(t,e):function(i,s){const o=sS(i,s),a=Xw(o)+Xw(i.Pe);return Zp(o)&&Zp(i.Pe)?iS(a):C_(i.serializer,a)}(t,e)}function Kj(t,e,n){return t instanceof hl?oS(t,e):t instanceof dl?aS(t,e):n}function sS(t,e){return t instanceof lh?function(r){return Zp(r)||function(s){return!!s&&"doubleValue"in s}(r)}(e)?e:{integerValue:0}:null}class ah extends nd{}class hl extends nd{constructor(e){super(),this.elements=e}}function oS(t,e){const n=lS(e);for(const r of t.elements)n.some(i=>Kn(i,r))||n.push(r);return{arrayValue:{values:n}}}class dl extends nd{constructor(e){super(),this.elements=e}}function aS(t,e){let n=lS(e);for(const r of t.elements)n=n.filter(i=>!Kn(i,r));return{arrayValue:{values:n}}}class lh extends nd{constructor(e,n){super(),this.serializer=e,this.Pe=n}}function Xw(t){return Ue(t.integerValue||t.doubleValue)}function lS(t){return A_(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}function $j(t,e){return t.field.isEqual(e.field)&&function(r,i){return r instanceof hl&&i instanceof hl||r instanceof dl&&i instanceof dl?io(r.elements,i.elements,Kn):r instanceof lh&&i instanceof lh?Kn(r.Pe,i.Pe):r instanceof ah&&i instanceof ah}(t.transform,e.transform)}class Qj{constructor(e,n){this.version=e,this.transformResults=n}}class dr{constructor(e,n){this.updateTime=e,this.exists=n}static none(){return new dr}static exists(e){return new dr(void 0,e)}static updateTime(e){return new dr(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function rc(t,e){return t.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(t.updateTime):t.exists===void 0||t.exists===e.isFoundDocument()}class rd{}function uS(t,e){if(!t.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return t.isNoDocument()?new hS(t.key,dr.none()):new Ml(t.key,t.data,dr.none());{const n=t.data,r=ln.empty();let i=new Xe(ut.comparator);for(let s of e.fields)if(!i.has(s)){let o=n.field(s);o===null&&s.length>1&&(s=s.popLast(),o=n.field(s)),o===null?r.delete(s):r.set(s,o),i=i.add(s)}return new as(t.key,r,new Rn(i.toArray()),dr.none())}}function Yj(t,e,n){t instanceof Ml?function(i,s,o){const a=i.value.clone(),l=Zw(i.fieldTransforms,s,o.transformResults);a.setAll(l),s.convertToFoundDocument(o.version,a).setHasCommittedMutations()}(t,e,n):t instanceof as?function(i,s,o){if(!rc(i.precondition,s))return void s.convertToUnknownDocument(o.version);const a=Zw(i.fieldTransforms,s,o.transformResults),l=s.data;l.setAll(cS(i)),l.setAll(a),s.convertToFoundDocument(o.version,l).setHasCommittedMutations()}(t,e,n):function(i,s,o){s.convertToNoDocument(o.version).setHasCommittedMutations()}(0,e,n)}function xa(t,e,n,r){return t instanceof Ml?function(s,o,a,l){if(!rc(s.precondition,o))return a;const c=s.value.clone(),h=eA(s.fieldTransforms,l,o);return c.setAll(h),o.convertToFoundDocument(o.version,c).setHasLocalMutations(),null}(t,e,n,r):t instanceof as?function(s,o,a,l){if(!rc(s.precondition,o))return a;const c=eA(s.fieldTransforms,l,o),h=o.data;return h.setAll(cS(s)),h.setAll(c),o.convertToFoundDocument(o.version,h).setHasLocalMutations(),a===null?null:a.unionWith(s.fieldMask.fields).unionWith(s.fieldTransforms.map(f=>f.field))}(t,e,n,r):function(s,o,a){return rc(s.precondition,o)?(o.convertToNoDocument(o.version).setHasLocalMutations(),null):a}(t,e,n)}function Xj(t,e){let n=null;for(const r of t.fieldTransforms){const i=e.data.field(r.field),s=sS(r.transform,i||null);s!=null&&(n===null&&(n=ln.empty()),n.set(r.field,s))}return n||null}function Jw(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(r,i){return r===void 0&&i===void 0||!(!r||!i)&&io(r,i,(s,o)=>$j(s,o))}(t.fieldTransforms,e.fieldTransforms)&&(t.type===0?t.value.isEqual(e.value):t.type!==1||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}class Ml extends rd{constructor(e,n,r,i=[]){super(),this.key=e,this.value=n,this.precondition=r,this.fieldTransforms=i,this.type=0}getFieldMask(){return null}}class as extends rd{constructor(e,n,r,i,s=[]){super(),this.key=e,this.data=n,this.fieldMask=r,this.precondition=i,this.fieldTransforms=s,this.type=1}getFieldMask(){return this.fieldMask}}function cS(t){const e=new Map;return t.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const r=t.data.field(n);e.set(n,r)}}),e}function Zw(t,e,n){const r=new Map;ge(t.length===n.length);for(let i=0;i<n.length;i++){const s=t[i],o=s.transform,a=e.data.field(s.field);r.set(s.field,Kj(o,a,n[i]))}return r}function eA(t,e,n){const r=new Map;for(const i of t){const s=i.transform,o=n.data.field(i.field);r.set(i.field,Gj(s,o,e))}return r}class hS extends rd{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class Jj extends rd{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zj{constructor(e,n,r,i){this.batchId=e,this.localWriteTime=n,this.baseMutations=r,this.mutations=i}applyToRemoteDocument(e,n){const r=n.mutationResults;for(let i=0;i<this.mutations.length;i++){const s=this.mutations[i];s.key.isEqual(e.key)&&Yj(s,e,r[i])}}applyToLocalView(e,n){for(const r of this.baseMutations)r.key.isEqual(e.key)&&(n=xa(r,e,n,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(e.key)&&(n=xa(r,e,n,this.localWriteTime));return n}applyToLocalDocumentSet(e,n){const r=rS();return this.mutations.forEach(i=>{const s=e.get(i.key),o=s.overlayedDocument;let a=this.applyToLocalView(o,s.mutatedFields);a=n.has(i.key)?null:a;const l=uS(o,a);l!==null&&r.set(i.key,l),o.isValidDocument()||o.convertToNoDocument(Z.min())}),r}keys(){return this.mutations.reduce((e,n)=>e.add(n.key),ae())}isEqual(e){return this.batchId===e.batchId&&io(this.mutations,e.mutations,(n,r)=>Jw(n,r))&&io(this.baseMutations,e.baseMutations,(n,r)=>Jw(n,r))}}class S_{constructor(e,n,r,i){this.batch=e,this.commitVersion=n,this.mutationResults=r,this.docVersions=i}static from(e,n,r){ge(e.mutations.length===r.length);let i=function(){return Bj}();const s=e.mutations;for(let o=0;o<s.length;o++)i=i.insert(s[o].key,r[o].version);return new S_(e,n,r,i)}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eU{constructor(e,n){this.largestBatchId=e,this.mutation=n}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tU{constructor(e,n){this.count=e,this.unchangedNames=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var We,ce;function nU(t){switch(t){default:return J();case j.CANCELLED:case j.UNKNOWN:case j.DEADLINE_EXCEEDED:case j.RESOURCE_EXHAUSTED:case j.INTERNAL:case j.UNAVAILABLE:case j.UNAUTHENTICATED:return!1;case j.INVALID_ARGUMENT:case j.NOT_FOUND:case j.ALREADY_EXISTS:case j.PERMISSION_DENIED:case j.FAILED_PRECONDITION:case j.ABORTED:case j.OUT_OF_RANGE:case j.UNIMPLEMENTED:case j.DATA_LOSS:return!0}}function dS(t){if(t===void 0)return Ar("GRPC error has no .code"),j.UNKNOWN;switch(t){case We.OK:return j.OK;case We.CANCELLED:return j.CANCELLED;case We.UNKNOWN:return j.UNKNOWN;case We.DEADLINE_EXCEEDED:return j.DEADLINE_EXCEEDED;case We.RESOURCE_EXHAUSTED:return j.RESOURCE_EXHAUSTED;case We.INTERNAL:return j.INTERNAL;case We.UNAVAILABLE:return j.UNAVAILABLE;case We.UNAUTHENTICATED:return j.UNAUTHENTICATED;case We.INVALID_ARGUMENT:return j.INVALID_ARGUMENT;case We.NOT_FOUND:return j.NOT_FOUND;case We.ALREADY_EXISTS:return j.ALREADY_EXISTS;case We.PERMISSION_DENIED:return j.PERMISSION_DENIED;case We.FAILED_PRECONDITION:return j.FAILED_PRECONDITION;case We.ABORTED:return j.ABORTED;case We.OUT_OF_RANGE:return j.OUT_OF_RANGE;case We.UNIMPLEMENTED:return j.UNIMPLEMENTED;case We.DATA_LOSS:return j.DATA_LOSS;default:return J()}}(ce=We||(We={}))[ce.OK=0]="OK",ce[ce.CANCELLED=1]="CANCELLED",ce[ce.UNKNOWN=2]="UNKNOWN",ce[ce.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",ce[ce.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",ce[ce.NOT_FOUND=5]="NOT_FOUND",ce[ce.ALREADY_EXISTS=6]="ALREADY_EXISTS",ce[ce.PERMISSION_DENIED=7]="PERMISSION_DENIED",ce[ce.UNAUTHENTICATED=16]="UNAUTHENTICATED",ce[ce.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",ce[ce.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",ce[ce.ABORTED=10]="ABORTED",ce[ce.OUT_OF_RANGE=11]="OUT_OF_RANGE",ce[ce.UNIMPLEMENTED=12]="UNIMPLEMENTED",ce[ce.INTERNAL=13]="INTERNAL",ce[ce.UNAVAILABLE=14]="UNAVAILABLE",ce[ce.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function rU(){return new TextEncoder}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const iU=new ji([4294967295,4294967295],0);function tA(t){const e=rU().encode(t),n=new M1;return n.update(e),new Uint8Array(n.digest())}function nA(t){const e=new DataView(t.buffer),n=e.getUint32(0,!0),r=e.getUint32(4,!0),i=e.getUint32(8,!0),s=e.getUint32(12,!0);return[new ji([n,r],0),new ji([i,s],0)]}class R_{constructor(e,n,r){if(this.bitmap=e,this.padding=n,this.hashCount=r,n<0||n>=8)throw new ua(`Invalid padding: ${n}`);if(r<0)throw new ua(`Invalid hash count: ${r}`);if(e.length>0&&this.hashCount===0)throw new ua(`Invalid hash count: ${r}`);if(e.length===0&&n!==0)throw new ua(`Invalid padding when bitmap length is 0: ${n}`);this.Te=8*e.length-n,this.Ie=ji.fromNumber(this.Te)}Ee(e,n,r){let i=e.add(n.multiply(ji.fromNumber(r)));return i.compare(iU)===1&&(i=new ji([i.getBits(0),i.getBits(1)],0)),i.modulo(this.Ie).toNumber()}de(e){return(this.bitmap[Math.floor(e/8)]&1<<e%8)!=0}mightContain(e){if(this.Te===0)return!1;const n=tA(e),[r,i]=nA(n);for(let s=0;s<this.hashCount;s++){const o=this.Ee(r,i,s);if(!this.de(o))return!1}return!0}static create(e,n,r){const i=e%8==0?0:8-e%8,s=new Uint8Array(Math.ceil(e/8)),o=new R_(s,i,n);return r.forEach(a=>o.insert(a)),o}insert(e){if(this.Te===0)return;const n=tA(e),[r,i]=nA(n);for(let s=0;s<this.hashCount;s++){const o=this.Ee(r,i,s);this.Ae(o)}}Ae(e){const n=Math.floor(e/8),r=e%8;this.bitmap[n]|=1<<r}}class ua extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class id{constructor(e,n,r,i,s){this.snapshotVersion=e,this.targetChanges=n,this.targetMismatches=r,this.documentUpdates=i,this.resolvedLimboDocuments=s}static createSynthesizedRemoteEventForCurrentChange(e,n,r){const i=new Map;return i.set(e,Fl.createSynthesizedTargetChangeForCurrentChange(e,n,r)),new id(Z.min(),i,new be(le),Er(),ae())}}class Fl{constructor(e,n,r,i,s){this.resumeToken=e,this.current=n,this.addedDocuments=r,this.modifiedDocuments=i,this.removedDocuments=s}static createSynthesizedTargetChangeForCurrentChange(e,n,r){return new Fl(r,n,ae(),ae(),ae())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ic{constructor(e,n,r,i){this.Re=e,this.removedTargetIds=n,this.key=r,this.Ve=i}}class fS{constructor(e,n){this.targetId=e,this.me=n}}class pS{constructor(e,n,r=dt.EMPTY_BYTE_STRING,i=null){this.state=e,this.targetIds=n,this.resumeToken=r,this.cause=i}}class rA{constructor(){this.fe=0,this.ge=iA(),this.pe=dt.EMPTY_BYTE_STRING,this.ye=!1,this.we=!0}get current(){return this.ye}get resumeToken(){return this.pe}get Se(){return this.fe!==0}get be(){return this.we}De(e){e.approximateByteSize()>0&&(this.we=!0,this.pe=e)}ve(){let e=ae(),n=ae(),r=ae();return this.ge.forEach((i,s)=>{switch(s){case 0:e=e.add(i);break;case 2:n=n.add(i);break;case 1:r=r.add(i);break;default:J()}}),new Fl(this.pe,this.ye,e,n,r)}Ce(){this.we=!1,this.ge=iA()}Fe(e,n){this.we=!0,this.ge=this.ge.insert(e,n)}Me(e){this.we=!0,this.ge=this.ge.remove(e)}xe(){this.fe+=1}Oe(){this.fe-=1,ge(this.fe>=0)}Ne(){this.we=!0,this.ye=!0}}class sU{constructor(e){this.Le=e,this.Be=new Map,this.ke=Er(),this.qe=Nu(),this.Qe=Nu(),this.Ke=new be(le)}$e(e){for(const n of e.Re)e.Ve&&e.Ve.isFoundDocument()?this.Ue(n,e.Ve):this.We(n,e.key,e.Ve);for(const n of e.removedTargetIds)this.We(n,e.key,e.Ve)}Ge(e){this.forEachTarget(e,n=>{const r=this.ze(n);switch(e.state){case 0:this.je(n)&&r.De(e.resumeToken);break;case 1:r.Oe(),r.Se||r.Ce(),r.De(e.resumeToken);break;case 2:r.Oe(),r.Se||this.removeTarget(n);break;case 3:this.je(n)&&(r.Ne(),r.De(e.resumeToken));break;case 4:this.je(n)&&(this.He(n),r.De(e.resumeToken));break;default:J()}})}forEachTarget(e,n){e.targetIds.length>0?e.targetIds.forEach(n):this.Be.forEach((r,i)=>{this.je(i)&&n(i)})}Je(e){const n=e.targetId,r=e.me.count,i=this.Ye(n);if(i){const s=i.target;if(tm(s))if(r===0){const o=new $(s.path);this.We(n,o,Et.newNoDocument(o,Z.min()))}else ge(r===1);else{const o=this.Ze(n);if(o!==r){const a=this.Xe(e),l=a?this.et(a,e,o):1;if(l!==0){this.He(n);const c=l===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Ke=this.Ke.insert(n,c)}}}}}Xe(e){const n=e.me.unchangedNames;if(!n||!n.bits)return null;const{bits:{bitmap:r="",padding:i=0},hashCount:s=0}=n;let o,a;try{o=ui(r).toUint8Array()}catch(l){if(l instanceof q1)return ro("Decoding the base64 bloom filter in existence filter failed ("+l.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw l}try{a=new R_(o,i,s)}catch(l){return ro(l instanceof ua?"BloomFilter error: ":"Applying bloom filter failed: ",l),null}return a.Te===0?null:a}et(e,n,r){return n.me.count===r-this.rt(e,n.targetId)?0:2}rt(e,n){const r=this.Le.getRemoteKeysForTarget(n);let i=0;return r.forEach(s=>{const o=this.Le.nt(),a=`projects/${o.projectId}/databases/${o.database}/documents/${s.path.canonicalString()}`;e.mightContain(a)||(this.We(n,s,null),i++)}),i}it(e){const n=new Map;this.Be.forEach((s,o)=>{const a=this.Ye(o);if(a){if(s.current&&tm(a.target)){const l=new $(a.target.path);this.st(l).has(o)||this.ot(o,l)||this.We(o,l,Et.newNoDocument(l,e))}s.be&&(n.set(o,s.ve()),s.Ce())}});let r=ae();this.Qe.forEach((s,o)=>{let a=!0;o.forEachWhile(l=>{const c=this.Ye(l);return!c||c.purpose==="TargetPurposeLimboResolution"||(a=!1,!1)}),a&&(r=r.add(s))}),this.ke.forEach((s,o)=>o.setReadTime(e));const i=new id(e,n,this.Ke,this.ke,r);return this.ke=Er(),this.qe=Nu(),this.Qe=Nu(),this.Ke=new be(le),i}Ue(e,n){if(!this.je(e))return;const r=this.ot(e,n.key)?2:0;this.ze(e).Fe(n.key,r),this.ke=this.ke.insert(n.key,n),this.qe=this.qe.insert(n.key,this.st(n.key).add(e)),this.Qe=this.Qe.insert(n.key,this._t(n.key).add(e))}We(e,n,r){if(!this.je(e))return;const i=this.ze(e);this.ot(e,n)?i.Fe(n,1):i.Me(n),this.Qe=this.Qe.insert(n,this._t(n).delete(e)),this.Qe=this.Qe.insert(n,this._t(n).add(e)),r&&(this.ke=this.ke.insert(n,r))}removeTarget(e){this.Be.delete(e)}Ze(e){const n=this.ze(e).ve();return this.Le.getRemoteKeysForTarget(e).size+n.addedDocuments.size-n.removedDocuments.size}xe(e){this.ze(e).xe()}ze(e){let n=this.Be.get(e);return n||(n=new rA,this.Be.set(e,n)),n}_t(e){let n=this.Qe.get(e);return n||(n=new Xe(le),this.Qe=this.Qe.insert(e,n)),n}st(e){let n=this.qe.get(e);return n||(n=new Xe(le),this.qe=this.qe.insert(e,n)),n}je(e){const n=this.Ye(e)!==null;return n||H("WatchChangeAggregator","Detected inactive target",e),n}Ye(e){const n=this.Be.get(e);return n&&n.Se?null:this.Le.ut(e)}He(e){this.Be.set(e,new rA),this.Le.getRemoteKeysForTarget(e).forEach(n=>{this.We(e,n,null)})}ot(e,n){return this.Le.getRemoteKeysForTarget(e).has(n)}}function Nu(){return new be($.comparator)}function iA(){return new be($.comparator)}const oU={asc:"ASCENDING",desc:"DESCENDING"},aU={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},lU={and:"AND",or:"OR"};class uU{constructor(e,n){this.databaseId=e,this.useProto3Json=n}}function rm(t,e){return t.useProto3Json||Xh(e)?e:{value:e}}function uh(t,e){return t.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function mS(t,e){return t.useProto3Json?e.toBase64():e.toUint8Array()}function cU(t,e){return uh(t,e.toTimestamp())}function qn(t){return ge(!!t),Z.fromTimestamp(function(n){const r=li(n);return new Ye(r.seconds,r.nanos)}(t))}function k_(t,e){return im(t,e).canonicalString()}function im(t,e){const n=function(i){return new Oe(["projects",i.projectId,"databases",i.database])}(t).child("documents");return e===void 0?n:n.child(e)}function gS(t){const e=Oe.fromString(t);return ge(AS(e)),e}function sm(t,e){return k_(t.databaseId,e.path)}function kf(t,e){const n=gS(e);if(n.get(1)!==t.databaseId.projectId)throw new K(j.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new K(j.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new $(yS(n))}function _S(t,e){return k_(t.databaseId,e)}function hU(t){const e=gS(t);return e.length===4?Oe.emptyPath():yS(e)}function om(t){return new Oe(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function yS(t){return ge(t.length>4&&t.get(4)==="documents"),t.popFirst(5)}function sA(t,e,n){return{name:sm(t,e),fields:n.value.mapValue.fields}}function dU(t,e){let n;if("targetChange"in e){e.targetChange;const r=function(c){return c==="NO_CHANGE"?0:c==="ADD"?1:c==="REMOVE"?2:c==="CURRENT"?3:c==="RESET"?4:J()}(e.targetChange.targetChangeType||"NO_CHANGE"),i=e.targetChange.targetIds||[],s=function(c,h){return c.useProto3Json?(ge(h===void 0||typeof h=="string"),dt.fromBase64String(h||"")):(ge(h===void 0||h instanceof Buffer||h instanceof Uint8Array),dt.fromUint8Array(h||new Uint8Array))}(t,e.targetChange.resumeToken),o=e.targetChange.cause,a=o&&function(c){const h=c.code===void 0?j.UNKNOWN:dS(c.code);return new K(h,c.message||"")}(o);n=new pS(r,i,s,a||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const i=kf(t,r.document.name),s=qn(r.document.updateTime),o=r.document.createTime?qn(r.document.createTime):Z.min(),a=new ln({mapValue:{fields:r.document.fields}}),l=Et.newFoundDocument(i,s,o,a),c=r.targetIds||[],h=r.removedTargetIds||[];n=new ic(c,h,l.key,l)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const i=kf(t,r.document),s=r.readTime?qn(r.readTime):Z.min(),o=Et.newNoDocument(i,s),a=r.removedTargetIds||[];n=new ic([],a,o.key,o)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const i=kf(t,r.document),s=r.removedTargetIds||[];n=new ic([],s,i,null)}else{if(!("filter"in e))return J();{e.filter;const r=e.filter;r.targetId;const{count:i=0,unchangedNames:s}=r,o=new tU(i,s),a=r.targetId;n=new fS(a,o)}}return n}function fU(t,e){let n;if(e instanceof Ml)n={update:sA(t,e.key,e.value)};else if(e instanceof hS)n={delete:sm(t,e.key)};else if(e instanceof as)n={update:sA(t,e.key,e.data),updateMask:EU(e.fieldMask)};else{if(!(e instanceof Jj))return J();n={verify:sm(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map(r=>function(s,o){const a=o.transform;if(a instanceof ah)return{fieldPath:o.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(a instanceof hl)return{fieldPath:o.field.canonicalString(),appendMissingElements:{values:a.elements}};if(a instanceof dl)return{fieldPath:o.field.canonicalString(),removeAllFromArray:{values:a.elements}};if(a instanceof lh)return{fieldPath:o.field.canonicalString(),increment:a.Pe};throw J()}(0,r))),e.precondition.isNone||(n.currentDocument=function(i,s){return s.updateTime!==void 0?{updateTime:cU(i,s.updateTime)}:s.exists!==void 0?{exists:s.exists}:J()}(t,e.precondition)),n}function pU(t,e){return t&&t.length>0?(ge(e!==void 0),t.map(n=>function(i,s){let o=i.updateTime?qn(i.updateTime):qn(s);return o.isEqual(Z.min())&&(o=qn(s)),new Qj(o,i.transformResults||[])}(n,e))):[]}function mU(t,e){return{documents:[_S(t,e.path)]}}function gU(t,e){const n={structuredQuery:{}},r=e.path;let i;e.collectionGroup!==null?(i=r,n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(i=r.popLast(),n.structuredQuery.from=[{collectionId:r.lastSegment()}]),n.parent=_S(t,i);const s=function(c){if(c.length!==0)return wS($n.create(c,"and"))}(e.filters);s&&(n.structuredQuery.where=s);const o=function(c){if(c.length!==0)return c.map(h=>function(p){return{field:_s(p.field),direction:vU(p.dir)}}(h))}(e.orderBy);o&&(n.structuredQuery.orderBy=o);const a=rm(t,e.limit);return a!==null&&(n.structuredQuery.limit=a),e.startAt&&(n.structuredQuery.startAt=function(c){return{before:c.inclusive,values:c.position}}(e.startAt)),e.endAt&&(n.structuredQuery.endAt=function(c){return{before:!c.inclusive,values:c.position}}(e.endAt)),{ct:n,parent:i}}function _U(t){let e=hU(t.parent);const n=t.structuredQuery,r=n.from?n.from.length:0;let i=null;if(r>0){ge(r===1);const h=n.from[0];h.allDescendants?i=h.collectionId:e=e.child(h.collectionId)}let s=[];n.where&&(s=function(f){const p=vS(f);return p instanceof $n&&Q1(p)?p.getFilters():[p]}(n.where));let o=[];n.orderBy&&(o=function(f){return f.map(p=>function(E){return new oh(ys(E.field),function(k){switch(k){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(E.direction))}(p))}(n.orderBy));let a=null;n.limit&&(a=function(f){let p;return p=typeof f=="object"?f.value:f,Xh(p)?null:p}(n.limit));let l=null;n.startAt&&(l=function(f){const p=!!f.before,_=f.values||[];return new sh(_,p)}(n.startAt));let c=null;return n.endAt&&(c=function(f){const p=!f.before,_=f.values||[];return new sh(_,p)}(n.endAt)),Oj(e,i,o,s,a,"F",l,c)}function yU(t,e){const n=function(i){switch(i){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return J()}}(e.purpose);return n==null?null:{"goog-listen-tags":n}}function vS(t){return t.unaryFilter!==void 0?function(n){switch(n.unaryFilter.op){case"IS_NAN":const r=ys(n.unaryFilter.field);return $e.create(r,"==",{doubleValue:NaN});case"IS_NULL":const i=ys(n.unaryFilter.field);return $e.create(i,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const s=ys(n.unaryFilter.field);return $e.create(s,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const o=ys(n.unaryFilter.field);return $e.create(o,"!=",{nullValue:"NULL_VALUE"});default:return J()}}(t):t.fieldFilter!==void 0?function(n){return $e.create(ys(n.fieldFilter.field),function(i){switch(i){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return J()}}(n.fieldFilter.op),n.fieldFilter.value)}(t):t.compositeFilter!==void 0?function(n){return $n.create(n.compositeFilter.filters.map(r=>vS(r)),function(i){switch(i){case"AND":return"and";case"OR":return"or";default:return J()}}(n.compositeFilter.op))}(t):J()}function vU(t){return oU[t]}function wU(t){return aU[t]}function AU(t){return lU[t]}function _s(t){return{fieldPath:t.canonicalString()}}function ys(t){return ut.fromServerFormat(t.fieldPath)}function wS(t){return t instanceof $e?function(n){if(n.op==="=="){if(Gw(n.value))return{unaryFilter:{field:_s(n.field),op:"IS_NAN"}};if(qw(n.value))return{unaryFilter:{field:_s(n.field),op:"IS_NULL"}}}else if(n.op==="!="){if(Gw(n.value))return{unaryFilter:{field:_s(n.field),op:"IS_NOT_NAN"}};if(qw(n.value))return{unaryFilter:{field:_s(n.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:_s(n.field),op:wU(n.op),value:n.value}}}(t):t instanceof $n?function(n){const r=n.getFilters().map(i=>wS(i));return r.length===1?r[0]:{compositeFilter:{op:AU(n.op),filters:r}}}(t):J()}function EU(t){const e=[];return t.fields.forEach(n=>e.push(n.canonicalString())),{fieldPaths:e}}function AS(t){return t.length>=4&&t.get(0)==="projects"&&t.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zr{constructor(e,n,r,i,s=Z.min(),o=Z.min(),a=dt.EMPTY_BYTE_STRING,l=null){this.target=e,this.targetId=n,this.purpose=r,this.sequenceNumber=i,this.snapshotVersion=s,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=a,this.expectedCount=l}withSequenceNumber(e){return new zr(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,n){return new zr(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new zr(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new zr(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class TU{constructor(e){this.ht=e}}function IU(t){const e=_U({parent:t.parent,structuredQuery:t.structuredQuery});return t.limitType==="LAST"?nm(e,e.limit,"L"):e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class CU{constructor(){this.ln=new SU}addToCollectionParentIndex(e,n){return this.ln.add(n),F.resolve()}getCollectionParents(e,n){return F.resolve(this.ln.getEntries(n))}addFieldIndex(e,n){return F.resolve()}deleteFieldIndex(e,n){return F.resolve()}deleteAllFieldIndexes(e){return F.resolve()}createTargetIndexes(e,n){return F.resolve()}getDocumentsMatchingTarget(e,n){return F.resolve(null)}getIndexType(e,n){return F.resolve(0)}getFieldIndexes(e,n){return F.resolve([])}getNextCollectionGroupToUpdate(e){return F.resolve(null)}getMinOffset(e,n){return F.resolve(ai.min())}getMinOffsetFromCollectionGroup(e,n){return F.resolve(ai.min())}updateCollectionGroup(e,n,r){return F.resolve()}updateIndexEntries(e,n){return F.resolve()}}class SU{constructor(){this.index={}}add(e){const n=e.lastSegment(),r=e.popLast(),i=this.index[n]||new Xe(Oe.comparator),s=!i.has(r);return this.index[n]=i.add(r),s}has(e){const n=e.lastSegment(),r=e.popLast(),i=this.index[n];return i&&i.has(r)}getEntries(e){return(this.index[e]||new Xe(Oe.comparator)).toArray()}}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const oA={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0};class Mt{static withCacheSize(e){return new Mt(e,Mt.DEFAULT_COLLECTION_PERCENTILE,Mt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}constructor(e,n,r){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=n,this.maximumSequenceNumbersToCollect=r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Mt.DEFAULT_COLLECTION_PERCENTILE=10,Mt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,Mt.DEFAULT=new Mt(41943040,Mt.DEFAULT_COLLECTION_PERCENTILE,Mt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),Mt.DISABLED=new Mt(-1,0,0);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ao{constructor(e){this.kn=e}next(){return this.kn+=2,this.kn}static qn(){return new ao(0)}static Qn(){return new ao(-1)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function aA([t,e],[n,r]){const i=le(t,n);return i===0?le(e,r):i}class RU{constructor(e){this.Gn=e,this.buffer=new Xe(aA),this.zn=0}jn(){return++this.zn}Hn(e){const n=[e,this.jn()];if(this.buffer.size<this.Gn)this.buffer=this.buffer.add(n);else{const r=this.buffer.last();aA(n,r)<0&&(this.buffer=this.buffer.delete(r).add(n))}}get maxValue(){return this.buffer.last()[0]}}class kU{constructor(e,n,r){this.garbageCollector=e,this.asyncQueue=n,this.localStore=r,this.Jn=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.Yn(6e4)}stop(){this.Jn&&(this.Jn.cancel(),this.Jn=null)}get started(){return this.Jn!==null}Yn(e){H("LruGarbageCollector",`Garbage collection scheduled in ${e}ms`),this.Jn=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",e,async()=>{this.Jn=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(n){Co(n)?H("LruGarbageCollector","Ignoring IndexedDB error during garbage collection: ",n):await Io(n)}await this.Yn(3e5)})}}class xU{constructor(e,n){this.Zn=e,this.params=n}calculateTargetCount(e,n){return this.Zn.Xn(e).next(r=>Math.floor(n/100*r))}nthSequenceNumber(e,n){if(n===0)return F.resolve(Yh.oe);const r=new RU(n);return this.Zn.forEachTarget(e,i=>r.Hn(i.sequenceNumber)).next(()=>this.Zn.er(e,i=>r.Hn(i))).next(()=>r.maxValue)}removeTargets(e,n,r){return this.Zn.removeTargets(e,n,r)}removeOrphanedDocuments(e,n){return this.Zn.removeOrphanedDocuments(e,n)}collect(e,n){return this.params.cacheSizeCollectionThreshold===-1?(H("LruGarbageCollector","Garbage collection skipped; disabled"),F.resolve(oA)):this.getCacheSize(e).next(r=>r<this.params.cacheSizeCollectionThreshold?(H("LruGarbageCollector",`Garbage collection skipped; Cache size ${r} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),oA):this.tr(e,n))}getCacheSize(e){return this.Zn.getCacheSize(e)}tr(e,n){let r,i,s,o,a,l,c;const h=Date.now();return this.calculateTargetCount(e,this.params.percentileToCollect).next(f=>(f>this.params.maximumSequenceNumbersToCollect?(H("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${f}`),i=this.params.maximumSequenceNumbersToCollect):i=f,o=Date.now(),this.nthSequenceNumber(e,i))).next(f=>(r=f,a=Date.now(),this.removeTargets(e,r,n))).next(f=>(s=f,l=Date.now(),this.removeOrphanedDocuments(e,r))).next(f=>(c=Date.now(),ms()<=ie.DEBUG&&H("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${o-h}ms
	Determined least recently used ${i} in `+(a-o)+`ms
	Removed ${s} targets in `+(l-a)+`ms
	Removed ${f} documents in `+(c-l)+`ms
Total Duration: ${c-h}ms`),F.resolve({didRun:!0,sequenceNumbersCollected:i,targetsRemoved:s,documentsRemoved:f})))}}function NU(t,e){return new xU(t,e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class PU{constructor(){this.changes=new os(e=>e.toString(),(e,n)=>e.isEqual(n)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,n){this.assertNotApplied(),this.changes.set(e,Et.newInvalidDocument(e).setReadTime(n))}getEntry(e,n){this.assertNotApplied();const r=this.changes.get(n);return r!==void 0?F.resolve(r):this.getFromCache(e,n)}getEntries(e,n){return this.getAllFromCache(e,n)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bU{constructor(e,n){this.overlayedDocument=e,this.mutatedFields=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class DU{constructor(e,n,r,i){this.remoteDocumentCache=e,this.mutationQueue=n,this.documentOverlayCache=r,this.indexManager=i}getDocument(e,n){let r=null;return this.documentOverlayCache.getOverlay(e,n).next(i=>(r=i,this.remoteDocumentCache.getEntry(e,n))).next(i=>(r!==null&&xa(r.mutation,i,Rn.empty(),Ye.now()),i))}getDocuments(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.getLocalViewOfDocuments(e,r,ae()).next(()=>r))}getLocalViewOfDocuments(e,n,r=ae()){const i=Mi();return this.populateOverlays(e,i,n).next(()=>this.computeViews(e,n,i,r).next(s=>{let o=la();return s.forEach((a,l)=>{o=o.insert(a,l.overlayedDocument)}),o}))}getOverlayedDocuments(e,n){const r=Mi();return this.populateOverlays(e,r,n).next(()=>this.computeViews(e,n,r,ae()))}populateOverlays(e,n,r){const i=[];return r.forEach(s=>{n.has(s)||i.push(s)}),this.documentOverlayCache.getOverlays(e,i).next(s=>{s.forEach((o,a)=>{n.set(o,a)})})}computeViews(e,n,r,i){let s=Er();const o=ka(),a=function(){return ka()}();return n.forEach((l,c)=>{const h=r.get(c.key);i.has(c.key)&&(h===void 0||h.mutation instanceof as)?s=s.insert(c.key,c):h!==void 0?(o.set(c.key,h.mutation.getFieldMask()),xa(h.mutation,c,h.mutation.getFieldMask(),Ye.now())):o.set(c.key,Rn.empty())}),this.recalculateAndSaveOverlays(e,s).next(l=>(l.forEach((c,h)=>o.set(c,h)),n.forEach((c,h)=>{var f;return a.set(c,new bU(h,(f=o.get(c))!==null&&f!==void 0?f:null))}),a))}recalculateAndSaveOverlays(e,n){const r=ka();let i=new be((o,a)=>o-a),s=ae();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,n).next(o=>{for(const a of o)a.keys().forEach(l=>{const c=n.get(l);if(c===null)return;let h=r.get(l)||Rn.empty();h=a.applyToLocalView(c,h),r.set(l,h);const f=(i.get(a.batchId)||ae()).add(l);i=i.insert(a.batchId,f)})}).next(()=>{const o=[],a=i.getReverseIterator();for(;a.hasNext();){const l=a.getNext(),c=l.key,h=l.value,f=rS();h.forEach(p=>{if(!s.has(p)){const _=uS(n.get(p),r.get(p));_!==null&&f.set(p,_),s=s.add(p)}}),o.push(this.documentOverlayCache.saveOverlays(e,c,f))}return F.waitFor(o)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.recalculateAndSaveOverlays(e,r))}getDocumentsMatchingQuery(e,n,r,i){return function(o){return $.isDocumentKey(o.path)&&o.collectionGroup===null&&o.filters.length===0}(n)?this.getDocumentsMatchingDocumentQuery(e,n.path):Mj(n)?this.getDocumentsMatchingCollectionGroupQuery(e,n,r,i):this.getDocumentsMatchingCollectionQuery(e,n,r,i)}getNextDocuments(e,n,r,i){return this.remoteDocumentCache.getAllFromCollectionGroup(e,n,r,i).next(s=>{const o=i-s.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,n,r.largestBatchId,i-s.size):F.resolve(Mi());let a=-1,l=s;return o.next(c=>F.forEach(c,(h,f)=>(a<f.largestBatchId&&(a=f.largestBatchId),s.get(h)?F.resolve():this.remoteDocumentCache.getEntry(e,h).next(p=>{l=l.insert(h,p)}))).next(()=>this.populateOverlays(e,c,s)).next(()=>this.computeViews(e,l,c,ae())).next(h=>({batchId:a,changes:nS(h)})))})}getDocumentsMatchingDocumentQuery(e,n){return this.getDocument(e,new $(n)).next(r=>{let i=la();return r.isFoundDocument()&&(i=i.insert(r.key,r)),i})}getDocumentsMatchingCollectionGroupQuery(e,n,r,i){const s=n.collectionGroup;let o=la();return this.indexManager.getCollectionParents(e,s).next(a=>F.forEach(a,l=>{const c=function(f,p){return new Zh(p,null,f.explicitOrderBy.slice(),f.filters.slice(),f.limit,f.limitType,f.startAt,f.endAt)}(n,l.child(s));return this.getDocumentsMatchingCollectionQuery(e,c,r,i).next(h=>{h.forEach((f,p)=>{o=o.insert(f,p)})})}).next(()=>o))}getDocumentsMatchingCollectionQuery(e,n,r,i){let s;return this.documentOverlayCache.getOverlaysForCollection(e,n.path,r.largestBatchId).next(o=>(s=o,this.remoteDocumentCache.getDocumentsMatchingQuery(e,n,r,s,i))).next(o=>{s.forEach((l,c)=>{const h=c.getKey();o.get(h)===null&&(o=o.insert(h,Et.newInvalidDocument(h)))});let a=la();return o.forEach((l,c)=>{const h=s.get(l);h!==void 0&&xa(h.mutation,c,Rn.empty(),Ye.now()),td(n,c)&&(a=a.insert(l,c))}),a})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class LU{constructor(e){this.serializer=e,this.Tr=new Map,this.Ir=new Map}getBundleMetadata(e,n){return F.resolve(this.Tr.get(n))}saveBundleMetadata(e,n){return this.Tr.set(n.id,function(i){return{id:i.id,version:i.version,createTime:qn(i.createTime)}}(n)),F.resolve()}getNamedQuery(e,n){return F.resolve(this.Ir.get(n))}saveNamedQuery(e,n){return this.Ir.set(n.name,function(i){return{name:i.name,query:IU(i.bundledQuery),readTime:qn(i.readTime)}}(n)),F.resolve()}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class OU{constructor(){this.overlays=new be($.comparator),this.Er=new Map}getOverlay(e,n){return F.resolve(this.overlays.get(n))}getOverlays(e,n){const r=Mi();return F.forEach(n,i=>this.getOverlay(e,i).next(s=>{s!==null&&r.set(i,s)})).next(()=>r)}saveOverlays(e,n,r){return r.forEach((i,s)=>{this.Tt(e,n,s)}),F.resolve()}removeOverlaysForBatchId(e,n,r){const i=this.Er.get(r);return i!==void 0&&(i.forEach(s=>this.overlays=this.overlays.remove(s)),this.Er.delete(r)),F.resolve()}getOverlaysForCollection(e,n,r){const i=Mi(),s=n.length+1,o=new $(n.child("")),a=this.overlays.getIteratorFrom(o);for(;a.hasNext();){const l=a.getNext().value,c=l.getKey();if(!n.isPrefixOf(c.path))break;c.path.length===s&&l.largestBatchId>r&&i.set(l.getKey(),l)}return F.resolve(i)}getOverlaysForCollectionGroup(e,n,r,i){let s=new be((c,h)=>c-h);const o=this.overlays.getIterator();for(;o.hasNext();){const c=o.getNext().value;if(c.getKey().getCollectionGroup()===n&&c.largestBatchId>r){let h=s.get(c.largestBatchId);h===null&&(h=Mi(),s=s.insert(c.largestBatchId,h)),h.set(c.getKey(),c)}}const a=Mi(),l=s.getIterator();for(;l.hasNext()&&(l.getNext().value.forEach((c,h)=>a.set(c,h)),!(a.size()>=i)););return F.resolve(a)}Tt(e,n,r){const i=this.overlays.get(r.key);if(i!==null){const o=this.Er.get(i.largestBatchId).delete(r.key);this.Er.set(i.largestBatchId,o)}this.overlays=this.overlays.insert(r.key,new eU(n,r));let s=this.Er.get(n);s===void 0&&(s=ae(),this.Er.set(n,s)),this.Er.set(n,s.add(r.key))}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class MU{constructor(){this.sessionToken=dt.EMPTY_BYTE_STRING}getSessionToken(e){return F.resolve(this.sessionToken)}setSessionToken(e,n){return this.sessionToken=n,F.resolve()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class x_{constructor(){this.dr=new Xe(Ze.Ar),this.Rr=new Xe(Ze.Vr)}isEmpty(){return this.dr.isEmpty()}addReference(e,n){const r=new Ze(e,n);this.dr=this.dr.add(r),this.Rr=this.Rr.add(r)}mr(e,n){e.forEach(r=>this.addReference(r,n))}removeReference(e,n){this.gr(new Ze(e,n))}pr(e,n){e.forEach(r=>this.removeReference(r,n))}yr(e){const n=new $(new Oe([])),r=new Ze(n,e),i=new Ze(n,e+1),s=[];return this.Rr.forEachInRange([r,i],o=>{this.gr(o),s.push(o.key)}),s}wr(){this.dr.forEach(e=>this.gr(e))}gr(e){this.dr=this.dr.delete(e),this.Rr=this.Rr.delete(e)}Sr(e){const n=new $(new Oe([])),r=new Ze(n,e),i=new Ze(n,e+1);let s=ae();return this.Rr.forEachInRange([r,i],o=>{s=s.add(o.key)}),s}containsKey(e){const n=new Ze(e,0),r=this.dr.firstAfterOrEqual(n);return r!==null&&e.isEqual(r.key)}}class Ze{constructor(e,n){this.key=e,this.br=n}static Ar(e,n){return $.comparator(e.key,n.key)||le(e.br,n.br)}static Vr(e,n){return le(e.br,n.br)||$.comparator(e.key,n.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class FU{constructor(e,n){this.indexManager=e,this.referenceDelegate=n,this.mutationQueue=[],this.Dr=1,this.vr=new Xe(Ze.Ar)}checkEmpty(e){return F.resolve(this.mutationQueue.length===0)}addMutationBatch(e,n,r,i){const s=this.Dr;this.Dr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new Zj(s,n,r,i);this.mutationQueue.push(o);for(const a of i)this.vr=this.vr.add(new Ze(a.key,s)),this.indexManager.addToCollectionParentIndex(e,a.key.path.popLast());return F.resolve(o)}lookupMutationBatch(e,n){return F.resolve(this.Cr(n))}getNextMutationBatchAfterBatchId(e,n){const r=n+1,i=this.Fr(r),s=i<0?0:i;return F.resolve(this.mutationQueue.length>s?this.mutationQueue[s]:null)}getHighestUnacknowledgedBatchId(){return F.resolve(this.mutationQueue.length===0?-1:this.Dr-1)}getAllMutationBatches(e){return F.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,n){const r=new Ze(n,0),i=new Ze(n,Number.POSITIVE_INFINITY),s=[];return this.vr.forEachInRange([r,i],o=>{const a=this.Cr(o.br);s.push(a)}),F.resolve(s)}getAllMutationBatchesAffectingDocumentKeys(e,n){let r=new Xe(le);return n.forEach(i=>{const s=new Ze(i,0),o=new Ze(i,Number.POSITIVE_INFINITY);this.vr.forEachInRange([s,o],a=>{r=r.add(a.br)})}),F.resolve(this.Mr(r))}getAllMutationBatchesAffectingQuery(e,n){const r=n.path,i=r.length+1;let s=r;$.isDocumentKey(s)||(s=s.child(""));const o=new Ze(new $(s),0);let a=new Xe(le);return this.vr.forEachWhile(l=>{const c=l.key.path;return!!r.isPrefixOf(c)&&(c.length===i&&(a=a.add(l.br)),!0)},o),F.resolve(this.Mr(a))}Mr(e){const n=[];return e.forEach(r=>{const i=this.Cr(r);i!==null&&n.push(i)}),n}removeMutationBatch(e,n){ge(this.Or(n.batchId,"removed")===0),this.mutationQueue.shift();let r=this.vr;return F.forEach(n.mutations,i=>{const s=new Ze(i.key,n.batchId);return r=r.delete(s),this.referenceDelegate.markPotentiallyOrphaned(e,i.key)}).next(()=>{this.vr=r})}Ln(e){}containsKey(e,n){const r=new Ze(n,0),i=this.vr.firstAfterOrEqual(r);return F.resolve(n.isEqual(i&&i.key))}performConsistencyCheck(e){return this.mutationQueue.length,F.resolve()}Or(e,n){return this.Fr(e)}Fr(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Cr(e){const n=this.Fr(e);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class VU{constructor(e){this.Nr=e,this.docs=function(){return new be($.comparator)}(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,n){const r=n.key,i=this.docs.get(r),s=i?i.size:0,o=this.Nr(n);return this.docs=this.docs.insert(r,{document:n.mutableCopy(),size:o}),this.size+=o-s,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){const n=this.docs.get(e);n&&(this.docs=this.docs.remove(e),this.size-=n.size)}getEntry(e,n){const r=this.docs.get(n);return F.resolve(r?r.document.mutableCopy():Et.newInvalidDocument(n))}getEntries(e,n){let r=Er();return n.forEach(i=>{const s=this.docs.get(i);r=r.insert(i,s?s.document.mutableCopy():Et.newInvalidDocument(i))}),F.resolve(r)}getDocumentsMatchingQuery(e,n,r,i){let s=Er();const o=n.path,a=new $(o.child("")),l=this.docs.getIteratorFrom(a);for(;l.hasNext();){const{key:c,value:{document:h}}=l.getNext();if(!o.isPrefixOf(c.path))break;c.path.length>o.length+1||pj(fj(h),r)<=0||(i.has(h.key)||td(n,h))&&(s=s.insert(h.key,h.mutableCopy()))}return F.resolve(s)}getAllFromCollectionGroup(e,n,r,i){J()}Lr(e,n){return F.forEach(this.docs,r=>n(r))}newChangeBuffer(e){return new jU(this)}getSize(e){return F.resolve(this.size)}}class jU extends PU{constructor(e){super(),this.hr=e}applyChanges(e){const n=[];return this.changes.forEach((r,i)=>{i.isValidDocument()?n.push(this.hr.addEntry(e,i)):this.hr.removeEntry(r)}),F.waitFor(n)}getFromCache(e,n){return this.hr.getEntry(e,n)}getAllFromCache(e,n){return this.hr.getEntries(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class UU{constructor(e){this.persistence=e,this.Br=new os(n=>E_(n),T_),this.lastRemoteSnapshotVersion=Z.min(),this.highestTargetId=0,this.kr=0,this.qr=new x_,this.targetCount=0,this.Qr=ao.qn()}forEachTarget(e,n){return this.Br.forEach((r,i)=>n(i)),F.resolve()}getLastRemoteSnapshotVersion(e){return F.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return F.resolve(this.kr)}allocateTargetId(e){return this.highestTargetId=this.Qr.next(),F.resolve(this.highestTargetId)}setTargetsMetadata(e,n,r){return r&&(this.lastRemoteSnapshotVersion=r),n>this.kr&&(this.kr=n),F.resolve()}Un(e){this.Br.set(e.target,e);const n=e.targetId;n>this.highestTargetId&&(this.Qr=new ao(n),this.highestTargetId=n),e.sequenceNumber>this.kr&&(this.kr=e.sequenceNumber)}addTargetData(e,n){return this.Un(n),this.targetCount+=1,F.resolve()}updateTargetData(e,n){return this.Un(n),F.resolve()}removeTargetData(e,n){return this.Br.delete(n.target),this.qr.yr(n.targetId),this.targetCount-=1,F.resolve()}removeTargets(e,n,r){let i=0;const s=[];return this.Br.forEach((o,a)=>{a.sequenceNumber<=n&&r.get(a.targetId)===null&&(this.Br.delete(o),s.push(this.removeMatchingKeysForTargetId(e,a.targetId)),i++)}),F.waitFor(s).next(()=>i)}getTargetCount(e){return F.resolve(this.targetCount)}getTargetData(e,n){const r=this.Br.get(n)||null;return F.resolve(r)}addMatchingKeys(e,n,r){return this.qr.mr(n,r),F.resolve()}removeMatchingKeys(e,n,r){this.qr.pr(n,r);const i=this.persistence.referenceDelegate,s=[];return i&&n.forEach(o=>{s.push(i.markPotentiallyOrphaned(e,o))}),F.waitFor(s)}removeMatchingKeysForTargetId(e,n){return this.qr.yr(n),F.resolve()}getMatchingKeysForTargetId(e,n){const r=this.qr.Sr(n);return F.resolve(r)}containsKey(e,n){return F.resolve(this.qr.containsKey(n))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ES{constructor(e,n){this.Kr={},this.overlays={},this.$r=new Yh(0),this.Ur=!1,this.Ur=!0,this.Wr=new MU,this.referenceDelegate=e(this),this.Gr=new UU(this),this.indexManager=new CU,this.remoteDocumentCache=function(i){return new VU(i)}(r=>this.referenceDelegate.zr(r)),this.serializer=new TU(n),this.jr=new LU(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.Ur=!1,Promise.resolve()}get started(){return this.Ur}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let n=this.overlays[e.toKey()];return n||(n=new OU,this.overlays[e.toKey()]=n),n}getMutationQueue(e,n){let r=this.Kr[e.toKey()];return r||(r=new FU(n,this.referenceDelegate),this.Kr[e.toKey()]=r),r}getGlobalsCache(){return this.Wr}getTargetCache(){return this.Gr}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.jr}runTransaction(e,n,r){H("MemoryPersistence","Starting transaction:",e);const i=new BU(this.$r.next());return this.referenceDelegate.Hr(),r(i).next(s=>this.referenceDelegate.Jr(i).next(()=>s)).toPromise().then(s=>(i.raiseOnCommittedEvent(),s))}Yr(e,n){return F.or(Object.values(this.Kr).map(r=>()=>r.containsKey(e,n)))}}class BU extends gj{constructor(e){super(),this.currentSequenceNumber=e}}class N_{constructor(e){this.persistence=e,this.Zr=new x_,this.Xr=null}static ei(e){return new N_(e)}get ti(){if(this.Xr)return this.Xr;throw J()}addReference(e,n,r){return this.Zr.addReference(r,n),this.ti.delete(r.toString()),F.resolve()}removeReference(e,n,r){return this.Zr.removeReference(r,n),this.ti.add(r.toString()),F.resolve()}markPotentiallyOrphaned(e,n){return this.ti.add(n.toString()),F.resolve()}removeTarget(e,n){this.Zr.yr(n.targetId).forEach(i=>this.ti.add(i.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,n.targetId).next(i=>{i.forEach(s=>this.ti.add(s.toString()))}).next(()=>r.removeTargetData(e,n))}Hr(){this.Xr=new Set}Jr(e){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return F.forEach(this.ti,r=>{const i=$.fromPath(r);return this.ni(e,i).next(s=>{s||n.removeEntry(i,Z.min())})}).next(()=>(this.Xr=null,n.apply(e)))}updateLimboDocument(e,n){return this.ni(e,n).next(r=>{r?this.ti.delete(n.toString()):this.ti.add(n.toString())})}zr(e){return 0}ni(e,n){return F.or([()=>F.resolve(this.Zr.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(e,n),()=>this.persistence.Yr(e,n)])}}class ch{constructor(e,n){this.persistence=e,this.ri=new os(r=>vj(r.path),(r,i)=>r.isEqual(i)),this.garbageCollector=NU(this,n)}static ei(e,n){return new ch(e,n)}Hr(){}Jr(e){return F.resolve()}forEachTarget(e,n){return this.persistence.getTargetCache().forEachTarget(e,n)}Xn(e){const n=this.nr(e);return this.persistence.getTargetCache().getTargetCount(e).next(r=>n.next(i=>r+i))}nr(e){let n=0;return this.er(e,r=>{n++}).next(()=>n)}er(e,n){return F.forEach(this.ri,(r,i)=>this.ir(e,r,i).next(s=>s?F.resolve():n(i)))}removeTargets(e,n,r){return this.persistence.getTargetCache().removeTargets(e,n,r)}removeOrphanedDocuments(e,n){let r=0;const i=this.persistence.getRemoteDocumentCache(),s=i.newChangeBuffer();return i.Lr(e,o=>this.ir(e,o,n).next(a=>{a||(r++,s.removeEntry(o,Z.min()))})).next(()=>s.apply(e)).next(()=>r)}markPotentiallyOrphaned(e,n){return this.ri.set(n,e.currentSequenceNumber),F.resolve()}removeTarget(e,n){const r=n.withSequenceNumber(e.currentSequenceNumber);return this.persistence.getTargetCache().updateTargetData(e,r)}addReference(e,n,r){return this.ri.set(r,e.currentSequenceNumber),F.resolve()}removeReference(e,n,r){return this.ri.set(r,e.currentSequenceNumber),F.resolve()}updateLimboDocument(e,n){return this.ri.set(n,e.currentSequenceNumber),F.resolve()}zr(e){let n=e.key.toString().length;return e.isFoundDocument()&&(n+=tc(e.data.value)),n}ir(e,n,r){return F.or([()=>this.persistence.Yr(e,n),()=>this.persistence.getTargetCache().containsKey(e,n),()=>{const i=this.ri.get(n);return F.resolve(i!==void 0&&i>r)}])}getCacheSize(e){return this.persistence.getRemoteDocumentCache().getSize(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class P_{constructor(e,n,r,i){this.targetId=e,this.fromCache=n,this.Wi=r,this.Gi=i}static zi(e,n){let r=ae(),i=ae();for(const s of n.docChanges)switch(s.type){case 0:r=r.add(s.doc.key);break;case 1:i=i.add(s.doc.key)}return new P_(e,n.fromCache,r,i)}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zU{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class WU{constructor(){this.ji=!1,this.Hi=!1,this.Ji=100,this.Yi=function(){return yb()?8:_j(Ct())>0?6:4}()}initialize(e,n){this.Zi=e,this.indexManager=n,this.ji=!0}getDocumentsMatchingQuery(e,n,r,i){const s={result:null};return this.Xi(e,n).next(o=>{s.result=o}).next(()=>{if(!s.result)return this.es(e,n,i,r).next(o=>{s.result=o})}).next(()=>{if(s.result)return;const o=new zU;return this.ts(e,n,o).next(a=>{if(s.result=a,this.Hi)return this.ns(e,n,o,a.size)})}).next(()=>s.result)}ns(e,n,r,i){return r.documentReadCount<this.Ji?(ms()<=ie.DEBUG&&H("QueryEngine","SDK will not create cache indexes for query:",gs(n),"since it only creates cache indexes for collection contains","more than or equal to",this.Ji,"documents"),F.resolve()):(ms()<=ie.DEBUG&&H("QueryEngine","Query:",gs(n),"scans",r.documentReadCount,"local documents and returns",i,"documents as results."),r.documentReadCount>this.Yi*i?(ms()<=ie.DEBUG&&H("QueryEngine","The SDK decides to create cache indexes for query:",gs(n),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,Hn(n))):F.resolve())}Xi(e,n){if(Yw(n))return F.resolve(null);let r=Hn(n);return this.indexManager.getIndexType(e,r).next(i=>i===0?null:(n.limit!==null&&i===1&&(n=nm(n,null,"F"),r=Hn(n)),this.indexManager.getDocumentsMatchingTarget(e,r).next(s=>{const o=ae(...s);return this.Zi.getDocuments(e,o).next(a=>this.indexManager.getMinOffset(e,r).next(l=>{const c=this.rs(n,a);return this.ss(n,c,o,l.readTime)?this.Xi(e,nm(n,null,"F")):this.os(e,c,n,l)}))})))}es(e,n,r,i){return Yw(n)||i.isEqual(Z.min())?F.resolve(null):this.Zi.getDocuments(e,r).next(s=>{const o=this.rs(n,s);return this.ss(n,o,r,i)?F.resolve(null):(ms()<=ie.DEBUG&&H("QueryEngine","Re-using previous result from %s to execute query: %s",i.toString(),gs(n)),this.os(e,o,n,dj(i,-1)).next(a=>a))})}rs(e,n){let r=new Xe(eS(e));return n.forEach((i,s)=>{td(e,s)&&(r=r.add(s))}),r}ss(e,n,r,i){if(e.limit===null)return!1;if(r.size!==n.size)return!0;const s=e.limitType==="F"?n.last():n.first();return!!s&&(s.hasPendingWrites||s.version.compareTo(i)>0)}ts(e,n,r){return ms()<=ie.DEBUG&&H("QueryEngine","Using full collection scan to execute query:",gs(n)),this.Zi.getDocumentsMatchingQuery(e,n,ai.min(),r)}os(e,n,r,i){return this.Zi.getDocumentsMatchingQuery(e,r,i).next(s=>(n.forEach(o=>{s=s.insert(o.key,o)}),s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class HU{constructor(e,n,r,i){this.persistence=e,this._s=n,this.serializer=i,this.us=new be(le),this.cs=new os(s=>E_(s),T_),this.ls=new Map,this.hs=e.getRemoteDocumentCache(),this.Gr=e.getTargetCache(),this.jr=e.getBundleCache(),this.Ps(r)}Ps(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new DU(this.hs,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.hs.setIndexManager(this.indexManager),this._s.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>e.collect(n,this.us))}}function qU(t,e,n,r){return new HU(t,e,n,r)}async function TS(t,e){const n=ee(t);return await n.persistence.runTransaction("Handle user change","readonly",r=>{let i;return n.mutationQueue.getAllMutationBatches(r).next(s=>(i=s,n.Ps(e),n.mutationQueue.getAllMutationBatches(r))).next(s=>{const o=[],a=[];let l=ae();for(const c of i){o.push(c.batchId);for(const h of c.mutations)l=l.add(h.key)}for(const c of s){a.push(c.batchId);for(const h of c.mutations)l=l.add(h.key)}return n.localDocuments.getDocuments(r,l).next(c=>({Ts:c,removedBatchIds:o,addedBatchIds:a}))})})}function GU(t,e){const n=ee(t);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",r=>{const i=e.batch.keys(),s=n.hs.newChangeBuffer({trackRemovals:!0});return function(a,l,c,h){const f=c.batch,p=f.keys();let _=F.resolve();return p.forEach(E=>{_=_.next(()=>h.getEntry(l,E)).next(S=>{const k=c.docVersions.get(E);ge(k!==null),S.version.compareTo(k)<0&&(f.applyToRemoteDocument(S,c),S.isValidDocument()&&(S.setReadTime(c.commitVersion),h.addEntry(S)))})}),_.next(()=>a.mutationQueue.removeMutationBatch(l,f))}(n,r,e,s).next(()=>s.apply(r)).next(()=>n.mutationQueue.performConsistencyCheck(r)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(r,i,e.batch.batchId)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,function(a){let l=ae();for(let c=0;c<a.mutationResults.length;++c)a.mutationResults[c].transformResults.length>0&&(l=l.add(a.batch.mutations[c].key));return l}(e))).next(()=>n.localDocuments.getDocuments(r,i))})}function IS(t){const e=ee(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",n=>e.Gr.getLastRemoteSnapshotVersion(n))}function KU(t,e){const n=ee(t),r=e.snapshotVersion;let i=n.us;return n.persistence.runTransaction("Apply remote event","readwrite-primary",s=>{const o=n.hs.newChangeBuffer({trackRemovals:!0});i=n.us;const a=[];e.targetChanges.forEach((h,f)=>{const p=i.get(f);if(!p)return;a.push(n.Gr.removeMatchingKeys(s,h.removedDocuments,f).next(()=>n.Gr.addMatchingKeys(s,h.addedDocuments,f)));let _=p.withSequenceNumber(s.currentSequenceNumber);e.targetMismatches.get(f)!==null?_=_.withResumeToken(dt.EMPTY_BYTE_STRING,Z.min()).withLastLimboFreeSnapshotVersion(Z.min()):h.resumeToken.approximateByteSize()>0&&(_=_.withResumeToken(h.resumeToken,r)),i=i.insert(f,_),function(S,k,A){return S.resumeToken.approximateByteSize()===0||k.snapshotVersion.toMicroseconds()-S.snapshotVersion.toMicroseconds()>=3e8?!0:A.addedDocuments.size+A.modifiedDocuments.size+A.removedDocuments.size>0}(p,_,h)&&a.push(n.Gr.updateTargetData(s,_))});let l=Er(),c=ae();if(e.documentUpdates.forEach(h=>{e.resolvedLimboDocuments.has(h)&&a.push(n.persistence.referenceDelegate.updateLimboDocument(s,h))}),a.push($U(s,o,e.documentUpdates).next(h=>{l=h.Is,c=h.Es})),!r.isEqual(Z.min())){const h=n.Gr.getLastRemoteSnapshotVersion(s).next(f=>n.Gr.setTargetsMetadata(s,s.currentSequenceNumber,r));a.push(h)}return F.waitFor(a).next(()=>o.apply(s)).next(()=>n.localDocuments.getLocalViewOfDocuments(s,l,c)).next(()=>l)}).then(s=>(n.us=i,s))}function $U(t,e,n){let r=ae(),i=ae();return n.forEach(s=>r=r.add(s)),e.getEntries(t,r).next(s=>{let o=Er();return n.forEach((a,l)=>{const c=s.get(a);l.isFoundDocument()!==c.isFoundDocument()&&(i=i.add(a)),l.isNoDocument()&&l.version.isEqual(Z.min())?(e.removeEntry(a,l.readTime),o=o.insert(a,l)):!c.isValidDocument()||l.version.compareTo(c.version)>0||l.version.compareTo(c.version)===0&&c.hasPendingWrites?(e.addEntry(l),o=o.insert(a,l)):H("LocalStore","Ignoring outdated watch update for ",a,". Current version:",c.version," Watch version:",l.version)}),{Is:o,Es:i}})}function QU(t,e){const n=ee(t);return n.persistence.runTransaction("Get next mutation batch","readonly",r=>(e===void 0&&(e=-1),n.mutationQueue.getNextMutationBatchAfterBatchId(r,e)))}function YU(t,e){const n=ee(t);return n.persistence.runTransaction("Allocate target","readwrite",r=>{let i;return n.Gr.getTargetData(r,e).next(s=>s?(i=s,F.resolve(i)):n.Gr.allocateTargetId(r).next(o=>(i=new zr(e,o,"TargetPurposeListen",r.currentSequenceNumber),n.Gr.addTargetData(r,i).next(()=>i))))}).then(r=>{const i=n.us.get(r.targetId);return(i===null||r.snapshotVersion.compareTo(i.snapshotVersion)>0)&&(n.us=n.us.insert(r.targetId,r),n.cs.set(e,r.targetId)),r})}async function am(t,e,n){const r=ee(t),i=r.us.get(e),s=n?"readwrite":"readwrite-primary";try{n||await r.persistence.runTransaction("Release target",s,o=>r.persistence.referenceDelegate.removeTarget(o,i))}catch(o){if(!Co(o))throw o;H("LocalStore",`Failed to update sequence numbers for target ${e}: ${o}`)}r.us=r.us.remove(e),r.cs.delete(i.target)}function lA(t,e,n){const r=ee(t);let i=Z.min(),s=ae();return r.persistence.runTransaction("Execute query","readwrite",o=>function(l,c,h){const f=ee(l),p=f.cs.get(h);return p!==void 0?F.resolve(f.us.get(p)):f.Gr.getTargetData(c,h)}(r,o,Hn(e)).next(a=>{if(a)return i=a.lastLimboFreeSnapshotVersion,r.Gr.getMatchingKeysForTargetId(o,a.targetId).next(l=>{s=l})}).next(()=>r._s.getDocumentsMatchingQuery(o,e,n?i:Z.min(),n?s:ae())).next(a=>(XU(r,Vj(e),a),{documents:a,ds:s})))}function XU(t,e,n){let r=t.ls.get(e)||Z.min();n.forEach((i,s)=>{s.readTime.compareTo(r)>0&&(r=s.readTime)}),t.ls.set(e,r)}class uA{constructor(){this.activeTargetIds=Hj()}ps(e){this.activeTargetIds=this.activeTargetIds.add(e)}ys(e){this.activeTargetIds=this.activeTargetIds.delete(e)}gs(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class JU{constructor(){this._o=new uA,this.ao={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,n,r){}addLocalQueryTarget(e,n=!0){return n&&this._o.ps(e),this.ao[e]||"not-current"}updateQueryState(e,n,r){this.ao[e]=n}removeLocalQueryTarget(e){this._o.ys(e)}isLocalQueryTarget(e){return this._o.activeTargetIds.has(e)}clearQueryState(e){delete this.ao[e]}getAllActiveQueryTargets(){return this._o.activeTargetIds}isActiveQueryTarget(e){return this._o.activeTargetIds.has(e)}start(){return this._o=new uA,Promise.resolve()}handleUserChange(e,n,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ZU{uo(e){}shutdown(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cA{constructor(){this.co=()=>this.lo(),this.ho=()=>this.Po(),this.To=[],this.Io()}uo(e){this.To.push(e)}shutdown(){window.removeEventListener("online",this.co),window.removeEventListener("offline",this.ho)}Io(){window.addEventListener("online",this.co),window.addEventListener("offline",this.ho)}lo(){H("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.To)e(0)}Po(){H("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.To)e(1)}static p(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Pu=null;function xf(){return Pu===null?Pu=function(){return 268435456+Math.round(2147483648*Math.random())}():Pu++,"0x"+Pu.toString(16)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const e3={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class t3{constructor(e){this.Eo=e.Eo,this.Ao=e.Ao}Ro(e){this.Vo=e}mo(e){this.fo=e}po(e){this.yo=e}onMessage(e){this.wo=e}close(){this.Ao()}send(e){this.Eo(e)}So(){this.Vo()}bo(){this.fo()}Do(e){this.yo(e)}vo(e){this.wo(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yt="WebChannelConnection";class n3 extends class{get Co(){return!1}constructor(n){this.databaseInfo=n,this.databaseId=n.databaseId;const r=n.ssl?"https":"http",i=encodeURIComponent(this.databaseId.projectId),s=encodeURIComponent(this.databaseId.database);this.Fo=r+"://"+n.host,this.Mo=`projects/${i}/databases/${s}`,this.xo=this.databaseId.database==="(default)"?`project_id=${i}`:`project_id=${i}&database_id=${s}`}Oo(n,r,i,s,o){const a=xf(),l=this.No(n,r.toUriEncodedString());H("RestConnection",`Sending RPC '${n}' ${a}:`,l,i);const c={"google-cloud-resource-prefix":this.Mo,"x-goog-request-params":this.xo};return this.Lo(c,s,o),this.Bo(n,l,c,i).then(h=>(H("RestConnection",`Received RPC '${n}' ${a}: `,h),h),h=>{throw ro("RestConnection",`RPC '${n}' ${a} failed with error: `,h,"url: ",l,"request:",i),h})}ko(n,r,i,s,o,a){return this.Oo(n,r,i,s,o)}Lo(n,r,i){n["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+To}(),n["Content-Type"]="text/plain",this.databaseInfo.appId&&(n["X-Firebase-GMPID"]=this.databaseInfo.appId),r&&r.headers.forEach((s,o)=>n[o]=s),i&&i.headers.forEach((s,o)=>n[o]=s)}No(n,r){const i=e3[n];return`${this.Fo}/v1/${r}:${i}`}terminate(){}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}Bo(e,n,r,i){const s=xf();return new Promise((o,a)=>{const l=new F1;l.setWithCredentials(!0),l.listenOnce(V1.COMPLETE,()=>{try{switch(l.getLastErrorCode()){case ec.NO_ERROR:const h=l.getResponseJson();H(yt,`XHR for RPC '${e}' ${s} received:`,JSON.stringify(h)),o(h);break;case ec.TIMEOUT:H(yt,`RPC '${e}' ${s} timed out`),a(new K(j.DEADLINE_EXCEEDED,"Request time out"));break;case ec.HTTP_ERROR:const f=l.getStatus();if(H(yt,`RPC '${e}' ${s} failed with status:`,f,"response text:",l.getResponseText()),f>0){let p=l.getResponseJson();Array.isArray(p)&&(p=p[0]);const _=p==null?void 0:p.error;if(_&&_.status&&_.message){const E=function(k){const A=k.toLowerCase().replace(/_/g,"-");return Object.values(j).indexOf(A)>=0?A:j.UNKNOWN}(_.status);a(new K(E,_.message))}else a(new K(j.UNKNOWN,"Server responded with status "+l.getStatus()))}else a(new K(j.UNAVAILABLE,"Connection failed."));break;default:J()}}finally{H(yt,`RPC '${e}' ${s} completed.`)}});const c=JSON.stringify(i);H(yt,`RPC '${e}' ${s} sending request:`,i),l.send(n,"POST",c,r,15)})}qo(e,n,r){const i=xf(),s=[this.Fo,"/","google.firestore.v1.Firestore","/",e,"/channel"],o=B1(),a=U1(),l={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},c=this.longPollingOptions.timeoutSeconds;c!==void 0&&(l.longPollingTimeout=Math.round(1e3*c)),this.useFetchStreams&&(l.useFetchStreams=!0),this.Lo(l.initMessageHeaders,n,r),l.encodeInitMessageHeaders=!0;const h=s.join("");H(yt,`Creating RPC '${e}' stream ${i}: ${h}`,l);const f=o.createWebChannel(h,l);let p=!1,_=!1;const E=new t3({Eo:k=>{_?H(yt,`Not sending because RPC '${e}' stream ${i} is closed:`,k):(p||(H(yt,`Opening RPC '${e}' stream ${i} transport.`),f.open(),p=!0),H(yt,`RPC '${e}' stream ${i} sending:`,k),f.send(k))},Ao:()=>f.close()}),S=(k,A,v)=>{k.listen(A,T=>{try{v(T)}catch(b){setTimeout(()=>{throw b},0)}})};return S(f,aa.EventType.OPEN,()=>{_||(H(yt,`RPC '${e}' stream ${i} transport opened.`),E.So())}),S(f,aa.EventType.CLOSE,()=>{_||(_=!0,H(yt,`RPC '${e}' stream ${i} transport closed`),E.Do())}),S(f,aa.EventType.ERROR,k=>{_||(_=!0,ro(yt,`RPC '${e}' stream ${i} transport errored:`,k),E.Do(new K(j.UNAVAILABLE,"The operation could not be completed")))}),S(f,aa.EventType.MESSAGE,k=>{var A;if(!_){const v=k.data[0];ge(!!v);const T=v,b=(T==null?void 0:T.error)||((A=T[0])===null||A===void 0?void 0:A.error);if(b){H(yt,`RPC '${e}' stream ${i} received error:`,b);const M=b.status;let V=function(I){const R=We[I];if(R!==void 0)return dS(R)}(M),C=b.message;V===void 0&&(V=j.INTERNAL,C="Unknown error status: "+M+" with message "+b.message),_=!0,E.Do(new K(V,C)),f.close()}else H(yt,`RPC '${e}' stream ${i} received:`,v),E.vo(v)}}),S(a,j1.STAT_EVENT,k=>{k.stat===Xp.PROXY?H(yt,`RPC '${e}' stream ${i} detected buffering proxy`):k.stat===Xp.NOPROXY&&H(yt,`RPC '${e}' stream ${i} detected no buffering proxy`)}),setTimeout(()=>{E.bo()},0),E}}function Nf(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function sd(t){return new uU(t,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class CS{constructor(e,n,r=1e3,i=1.5,s=6e4){this.li=e,this.timerId=n,this.Qo=r,this.Ko=i,this.$o=s,this.Uo=0,this.Wo=null,this.Go=Date.now(),this.reset()}reset(){this.Uo=0}zo(){this.Uo=this.$o}jo(e){this.cancel();const n=Math.floor(this.Uo+this.Ho()),r=Math.max(0,Date.now()-this.Go),i=Math.max(0,n-r);i>0&&H("ExponentialBackoff",`Backing off for ${i} ms (base delay: ${this.Uo} ms, delay with jitter: ${n} ms, last attempt: ${r} ms ago)`),this.Wo=this.li.enqueueAfterDelay(this.timerId,i,()=>(this.Go=Date.now(),e())),this.Uo*=this.Ko,this.Uo<this.Qo&&(this.Uo=this.Qo),this.Uo>this.$o&&(this.Uo=this.$o)}Jo(){this.Wo!==null&&(this.Wo.skipDelay(),this.Wo=null)}cancel(){this.Wo!==null&&(this.Wo.cancel(),this.Wo=null)}Ho(){return(Math.random()-.5)*this.Uo}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class SS{constructor(e,n,r,i,s,o,a,l){this.li=e,this.Yo=r,this.Zo=i,this.connection=s,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=a,this.listener=l,this.state=0,this.Xo=0,this.e_=null,this.t_=null,this.stream=null,this.n_=0,this.r_=new CS(e,n)}i_(){return this.state===1||this.state===5||this.s_()}s_(){return this.state===2||this.state===3}start(){this.n_=0,this.state!==4?this.auth():this.o_()}async stop(){this.i_()&&await this.close(0)}__(){this.state=0,this.r_.reset()}a_(){this.s_()&&this.e_===null&&(this.e_=this.li.enqueueAfterDelay(this.Yo,6e4,()=>this.u_()))}c_(e){this.l_(),this.stream.send(e)}async u_(){if(this.s_())return this.close(0)}l_(){this.e_&&(this.e_.cancel(),this.e_=null)}h_(){this.t_&&(this.t_.cancel(),this.t_=null)}async close(e,n){this.l_(),this.h_(),this.r_.cancel(),this.Xo++,e!==4?this.r_.reset():n&&n.code===j.RESOURCE_EXHAUSTED?(Ar(n.toString()),Ar("Using maximum backoff delay to prevent overloading the backend."),this.r_.zo()):n&&n.code===j.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.P_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.po(n)}P_(){}auth(){this.state=1;const e=this.T_(this.Xo),n=this.Xo;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,i])=>{this.Xo===n&&this.I_(r,i)},r=>{e(()=>{const i=new K(j.UNKNOWN,"Fetching auth token failed: "+r.message);return this.E_(i)})})}I_(e,n){const r=this.T_(this.Xo);this.stream=this.d_(e,n),this.stream.Ro(()=>{r(()=>this.listener.Ro())}),this.stream.mo(()=>{r(()=>(this.state=2,this.t_=this.li.enqueueAfterDelay(this.Zo,1e4,()=>(this.s_()&&(this.state=3),Promise.resolve())),this.listener.mo()))}),this.stream.po(i=>{r(()=>this.E_(i))}),this.stream.onMessage(i=>{r(()=>++this.n_==1?this.A_(i):this.onNext(i))})}o_(){this.state=5,this.r_.jo(async()=>{this.state=0,this.start()})}E_(e){return H("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}T_(e){return n=>{this.li.enqueueAndForget(()=>this.Xo===e?n():(H("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class r3 extends SS{constructor(e,n,r,i,s,o){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,r,i,o),this.serializer=s}d_(e,n){return this.connection.qo("Listen",e,n)}A_(e){return this.onNext(e)}onNext(e){this.r_.reset();const n=dU(this.serializer,e),r=function(s){if(!("targetChange"in s))return Z.min();const o=s.targetChange;return o.targetIds&&o.targetIds.length?Z.min():o.readTime?qn(o.readTime):Z.min()}(e);return this.listener.R_(n,r)}V_(e){const n={};n.database=om(this.serializer),n.addTarget=function(s,o){let a;const l=o.target;if(a=tm(l)?{documents:mU(s,l)}:{query:gU(s,l).ct},a.targetId=o.targetId,o.resumeToken.approximateByteSize()>0){a.resumeToken=mS(s,o.resumeToken);const c=rm(s,o.expectedCount);c!==null&&(a.expectedCount=c)}else if(o.snapshotVersion.compareTo(Z.min())>0){a.readTime=uh(s,o.snapshotVersion.toTimestamp());const c=rm(s,o.expectedCount);c!==null&&(a.expectedCount=c)}return a}(this.serializer,e);const r=yU(this.serializer,e);r&&(n.labels=r),this.c_(n)}m_(e){const n={};n.database=om(this.serializer),n.removeTarget=e,this.c_(n)}}class i3 extends SS{constructor(e,n,r,i,s,o){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,r,i,o),this.serializer=s}get f_(){return this.n_>0}start(){this.lastStreamToken=void 0,super.start()}P_(){this.f_&&this.g_([])}d_(e,n){return this.connection.qo("Write",e,n)}A_(e){return ge(!!e.streamToken),this.lastStreamToken=e.streamToken,ge(!e.writeResults||e.writeResults.length===0),this.listener.p_()}onNext(e){ge(!!e.streamToken),this.lastStreamToken=e.streamToken,this.r_.reset();const n=pU(e.writeResults,e.commitTime),r=qn(e.commitTime);return this.listener.y_(r,n)}w_(){const e={};e.database=om(this.serializer),this.c_(e)}g_(e){const n={streamToken:this.lastStreamToken,writes:e.map(r=>fU(this.serializer,r))};this.c_(n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class s3 extends class{}{constructor(e,n,r,i){super(),this.authCredentials=e,this.appCheckCredentials=n,this.connection=r,this.serializer=i,this.S_=!1}b_(){if(this.S_)throw new K(j.FAILED_PRECONDITION,"The client has already been terminated.")}Oo(e,n,r,i){return this.b_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([s,o])=>this.connection.Oo(e,im(n,r),i,s,o)).catch(s=>{throw s.name==="FirebaseError"?(s.code===j.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),s):new K(j.UNKNOWN,s.toString())})}ko(e,n,r,i,s){return this.b_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([o,a])=>this.connection.ko(e,im(n,r),i,o,a,s)).catch(o=>{throw o.name==="FirebaseError"?(o.code===j.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),o):new K(j.UNKNOWN,o.toString())})}terminate(){this.S_=!0,this.connection.terminate()}}class o3{constructor(e,n){this.asyncQueue=e,this.onlineStateHandler=n,this.state="Unknown",this.D_=0,this.v_=null,this.C_=!0}F_(){this.D_===0&&(this.M_("Unknown"),this.v_=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.v_=null,this.x_("Backend didn't respond within 10 seconds."),this.M_("Offline"),Promise.resolve())))}O_(e){this.state==="Online"?this.M_("Unknown"):(this.D_++,this.D_>=1&&(this.N_(),this.x_(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.M_("Offline")))}set(e){this.N_(),this.D_=0,e==="Online"&&(this.C_=!1),this.M_(e)}M_(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}x_(e){const n=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.C_?(Ar(n),this.C_=!1):H("OnlineStateTracker",n)}N_(){this.v_!==null&&(this.v_.cancel(),this.v_=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class a3{constructor(e,n,r,i,s){this.localStore=e,this.datastore=n,this.asyncQueue=r,this.remoteSyncer={},this.L_=[],this.B_=new Map,this.k_=new Set,this.q_=[],this.Q_=s,this.Q_.uo(o=>{r.enqueueAndForget(async()=>{ls(this)&&(H("RemoteStore","Restarting streams for network reachability change."),await async function(l){const c=ee(l);c.k_.add(4),await Vl(c),c.K_.set("Unknown"),c.k_.delete(4),await od(c)}(this))})}),this.K_=new o3(r,i)}}async function od(t){if(ls(t))for(const e of t.q_)await e(!0)}async function Vl(t){for(const e of t.q_)await e(!1)}function RS(t,e){const n=ee(t);n.B_.has(e.targetId)||(n.B_.set(e.targetId,e),O_(n)?L_(n):So(n).s_()&&D_(n,e))}function b_(t,e){const n=ee(t),r=So(n);n.B_.delete(e),r.s_()&&kS(n,e),n.B_.size===0&&(r.s_()?r.a_():ls(n)&&n.K_.set("Unknown"))}function D_(t,e){if(t.U_.xe(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(Z.min())>0){const n=t.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(n)}So(t).V_(e)}function kS(t,e){t.U_.xe(e),So(t).m_(e)}function L_(t){t.U_=new sU({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),ut:e=>t.B_.get(e)||null,nt:()=>t.datastore.serializer.databaseId}),So(t).start(),t.K_.F_()}function O_(t){return ls(t)&&!So(t).i_()&&t.B_.size>0}function ls(t){return ee(t).k_.size===0}function xS(t){t.U_=void 0}async function l3(t){t.K_.set("Online")}async function u3(t){t.B_.forEach((e,n)=>{D_(t,e)})}async function c3(t,e){xS(t),O_(t)?(t.K_.O_(e),L_(t)):t.K_.set("Unknown")}async function h3(t,e,n){if(t.K_.set("Online"),e instanceof pS&&e.state===2&&e.cause)try{await async function(i,s){const o=s.cause;for(const a of s.targetIds)i.B_.has(a)&&(await i.remoteSyncer.rejectListen(a,o),i.B_.delete(a),i.U_.removeTarget(a))}(t,e)}catch(r){H("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),r),await hh(t,r)}else if(e instanceof ic?t.U_.$e(e):e instanceof fS?t.U_.Je(e):t.U_.Ge(e),!n.isEqual(Z.min()))try{const r=await IS(t.localStore);n.compareTo(r)>=0&&await function(s,o){const a=s.U_.it(o);return a.targetChanges.forEach((l,c)=>{if(l.resumeToken.approximateByteSize()>0){const h=s.B_.get(c);h&&s.B_.set(c,h.withResumeToken(l.resumeToken,o))}}),a.targetMismatches.forEach((l,c)=>{const h=s.B_.get(l);if(!h)return;s.B_.set(l,h.withResumeToken(dt.EMPTY_BYTE_STRING,h.snapshotVersion)),kS(s,l);const f=new zr(h.target,l,c,h.sequenceNumber);D_(s,f)}),s.remoteSyncer.applyRemoteEvent(a)}(t,n)}catch(r){H("RemoteStore","Failed to raise snapshot:",r),await hh(t,r)}}async function hh(t,e,n){if(!Co(e))throw e;t.k_.add(1),await Vl(t),t.K_.set("Offline"),n||(n=()=>IS(t.localStore)),t.asyncQueue.enqueueRetryable(async()=>{H("RemoteStore","Retrying IndexedDB access"),await n(),t.k_.delete(1),await od(t)})}function NS(t,e){return e().catch(n=>hh(t,n,e))}async function ad(t){const e=ee(t),n=hi(e);let r=e.L_.length>0?e.L_[e.L_.length-1].batchId:-1;for(;d3(e);)try{const i=await QU(e.localStore,r);if(i===null){e.L_.length===0&&n.a_();break}r=i.batchId,f3(e,i)}catch(i){await hh(e,i)}PS(e)&&bS(e)}function d3(t){return ls(t)&&t.L_.length<10}function f3(t,e){t.L_.push(e);const n=hi(t);n.s_()&&n.f_&&n.g_(e.mutations)}function PS(t){return ls(t)&&!hi(t).i_()&&t.L_.length>0}function bS(t){hi(t).start()}async function p3(t){hi(t).w_()}async function m3(t){const e=hi(t);for(const n of t.L_)e.g_(n.mutations)}async function g3(t,e,n){const r=t.L_.shift(),i=S_.from(r,e,n);await NS(t,()=>t.remoteSyncer.applySuccessfulWrite(i)),await ad(t)}async function _3(t,e){e&&hi(t).f_&&await async function(r,i){if(function(o){return nU(o)&&o!==j.ABORTED}(i.code)){const s=r.L_.shift();hi(r).__(),await NS(r,()=>r.remoteSyncer.rejectFailedWrite(s.batchId,i)),await ad(r)}}(t,e),PS(t)&&bS(t)}async function hA(t,e){const n=ee(t);n.asyncQueue.verifyOperationInProgress(),H("RemoteStore","RemoteStore received new credentials");const r=ls(n);n.k_.add(3),await Vl(n),r&&n.K_.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n.k_.delete(3),await od(n)}async function y3(t,e){const n=ee(t);e?(n.k_.delete(2),await od(n)):e||(n.k_.add(2),await Vl(n),n.K_.set("Unknown"))}function So(t){return t.W_||(t.W_=function(n,r,i){const s=ee(n);return s.b_(),new r3(r,s.connection,s.authCredentials,s.appCheckCredentials,s.serializer,i)}(t.datastore,t.asyncQueue,{Ro:l3.bind(null,t),mo:u3.bind(null,t),po:c3.bind(null,t),R_:h3.bind(null,t)}),t.q_.push(async e=>{e?(t.W_.__(),O_(t)?L_(t):t.K_.set("Unknown")):(await t.W_.stop(),xS(t))})),t.W_}function hi(t){return t.G_||(t.G_=function(n,r,i){const s=ee(n);return s.b_(),new i3(r,s.connection,s.authCredentials,s.appCheckCredentials,s.serializer,i)}(t.datastore,t.asyncQueue,{Ro:()=>Promise.resolve(),mo:p3.bind(null,t),po:_3.bind(null,t),p_:m3.bind(null,t),y_:g3.bind(null,t)}),t.q_.push(async e=>{e?(t.G_.__(),await ad(t)):(await t.G_.stop(),t.L_.length>0&&(H("RemoteStore",`Stopping write stream with ${t.L_.length} pending writes`),t.L_=[]))})),t.G_}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class M_{constructor(e,n,r,i,s){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=r,this.op=i,this.removalCallback=s,this.deferred=new ti,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,n,r,i,s){const o=Date.now()+r,a=new M_(e,n,o,i,s);return a.start(r),a}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new K(j.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function F_(t,e){if(Ar("AsyncQueue",`${e}: ${t}`),Co(t))return new K(j.UNAVAILABLE,`${e}: ${t}`);throw t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qs{static emptySet(e){return new qs(e.comparator)}constructor(e){this.comparator=e?(n,r)=>e(n,r)||$.comparator(n.key,r.key):(n,r)=>$.comparator(n.key,r.key),this.keyedMap=la(),this.sortedSet=new be(this.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const n=this.keyedMap.get(e);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((n,r)=>(e(n),!1))}add(e){const n=this.delete(e.key);return n.copy(n.keyedMap.insert(e.key,e),n.sortedSet.insert(e,null))}delete(e){const n=this.get(e);return n?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(n)):this}isEqual(e){if(!(e instanceof qs)||this.size!==e.size)return!1;const n=this.sortedSet.getIterator(),r=e.sortedSet.getIterator();for(;n.hasNext();){const i=n.getNext().key,s=r.getNext().key;if(!i.isEqual(s))return!1}return!0}toString(){const e=[];return this.forEach(n=>{e.push(n.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,n){const r=new qs;return r.comparator=this.comparator,r.keyedMap=e,r.sortedSet=n,r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dA{constructor(){this.z_=new be($.comparator)}track(e){const n=e.doc.key,r=this.z_.get(n);r?e.type!==0&&r.type===3?this.z_=this.z_.insert(n,e):e.type===3&&r.type!==1?this.z_=this.z_.insert(n,{type:r.type,doc:e.doc}):e.type===2&&r.type===2?this.z_=this.z_.insert(n,{type:2,doc:e.doc}):e.type===2&&r.type===0?this.z_=this.z_.insert(n,{type:0,doc:e.doc}):e.type===1&&r.type===0?this.z_=this.z_.remove(n):e.type===1&&r.type===2?this.z_=this.z_.insert(n,{type:1,doc:r.doc}):e.type===0&&r.type===1?this.z_=this.z_.insert(n,{type:2,doc:e.doc}):J():this.z_=this.z_.insert(n,e)}j_(){const e=[];return this.z_.inorderTraversal((n,r)=>{e.push(r)}),e}}class lo{constructor(e,n,r,i,s,o,a,l,c){this.query=e,this.docs=n,this.oldDocs=r,this.docChanges=i,this.mutatedKeys=s,this.fromCache=o,this.syncStateChanged=a,this.excludesMetadataChanges=l,this.hasCachedResults=c}static fromInitialDocuments(e,n,r,i,s){const o=[];return n.forEach(a=>{o.push({type:0,doc:a})}),new lo(e,n,qs.emptySet(n),o,r,i,!0,!1,s)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&ed(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const n=this.docChanges,r=e.docChanges;if(n.length!==r.length)return!1;for(let i=0;i<n.length;i++)if(n[i].type!==r[i].type||!n[i].doc.isEqual(r[i].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class v3{constructor(){this.H_=void 0,this.J_=[]}Y_(){return this.J_.some(e=>e.Z_())}}class w3{constructor(){this.queries=fA(),this.onlineState="Unknown",this.X_=new Set}terminate(){(function(n,r){const i=ee(n),s=i.queries;i.queries=fA(),s.forEach((o,a)=>{for(const l of a.J_)l.onError(r)})})(this,new K(j.ABORTED,"Firestore shutting down"))}}function fA(){return new os(t=>Z1(t),ed)}async function A3(t,e){const n=ee(t);let r=3;const i=e.query;let s=n.queries.get(i);s?!s.Y_()&&e.Z_()&&(r=2):(s=new v3,r=e.Z_()?0:1);try{switch(r){case 0:s.H_=await n.onListen(i,!0);break;case 1:s.H_=await n.onListen(i,!1);break;case 2:await n.onFirstRemoteStoreListen(i)}}catch(o){const a=F_(o,`Initialization of query '${gs(e.query)}' failed`);return void e.onError(a)}n.queries.set(i,s),s.J_.push(e),e.ea(n.onlineState),s.H_&&e.ta(s.H_)&&V_(n)}async function E3(t,e){const n=ee(t),r=e.query;let i=3;const s=n.queries.get(r);if(s){const o=s.J_.indexOf(e);o>=0&&(s.J_.splice(o,1),s.J_.length===0?i=e.Z_()?0:1:!s.Y_()&&e.Z_()&&(i=2))}switch(i){case 0:return n.queries.delete(r),n.onUnlisten(r,!0);case 1:return n.queries.delete(r),n.onUnlisten(r,!1);case 2:return n.onLastRemoteStoreUnlisten(r);default:return}}function T3(t,e){const n=ee(t);let r=!1;for(const i of e){const s=i.query,o=n.queries.get(s);if(o){for(const a of o.J_)a.ta(i)&&(r=!0);o.H_=i}}r&&V_(n)}function I3(t,e,n){const r=ee(t),i=r.queries.get(e);if(i)for(const s of i.J_)s.onError(n);r.queries.delete(e)}function V_(t){t.X_.forEach(e=>{e.next()})}var lm,pA;(pA=lm||(lm={})).na="default",pA.Cache="cache";class C3{constructor(e,n,r){this.query=e,this.ra=n,this.ia=!1,this.sa=null,this.onlineState="Unknown",this.options=r||{}}ta(e){if(!this.options.includeMetadataChanges){const r=[];for(const i of e.docChanges)i.type!==3&&r.push(i);e=new lo(e.query,e.docs,e.oldDocs,r,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let n=!1;return this.ia?this.oa(e)&&(this.ra.next(e),n=!0):this._a(e,this.onlineState)&&(this.aa(e),n=!0),this.sa=e,n}onError(e){this.ra.error(e)}ea(e){this.onlineState=e;let n=!1;return this.sa&&!this.ia&&this._a(this.sa,e)&&(this.aa(this.sa),n=!0),n}_a(e,n){if(!e.fromCache||!this.Z_())return!0;const r=n!=="Offline";return(!this.options.ua||!r)&&(!e.docs.isEmpty()||e.hasCachedResults||n==="Offline")}oa(e){if(e.docChanges.length>0)return!0;const n=this.sa&&this.sa.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}aa(e){e=lo.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.ia=!0,this.ra.next(e)}Z_(){return this.options.source!==lm.Cache}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class DS{constructor(e){this.key=e}}class LS{constructor(e){this.key=e}}class S3{constructor(e,n){this.query=e,this.da=n,this.Aa=null,this.hasCachedResults=!1,this.current=!1,this.Ra=ae(),this.mutatedKeys=ae(),this.Va=eS(e),this.ma=new qs(this.Va)}get fa(){return this.da}ga(e,n){const r=n?n.pa:new dA,i=n?n.ma:this.ma;let s=n?n.mutatedKeys:this.mutatedKeys,o=i,a=!1;const l=this.query.limitType==="F"&&i.size===this.query.limit?i.last():null,c=this.query.limitType==="L"&&i.size===this.query.limit?i.first():null;if(e.inorderTraversal((h,f)=>{const p=i.get(h),_=td(this.query,f)?f:null,E=!!p&&this.mutatedKeys.has(p.key),S=!!_&&(_.hasLocalMutations||this.mutatedKeys.has(_.key)&&_.hasCommittedMutations);let k=!1;p&&_?p.data.isEqual(_.data)?E!==S&&(r.track({type:3,doc:_}),k=!0):this.ya(p,_)||(r.track({type:2,doc:_}),k=!0,(l&&this.Va(_,l)>0||c&&this.Va(_,c)<0)&&(a=!0)):!p&&_?(r.track({type:0,doc:_}),k=!0):p&&!_&&(r.track({type:1,doc:p}),k=!0,(l||c)&&(a=!0)),k&&(_?(o=o.add(_),s=S?s.add(h):s.delete(h)):(o=o.delete(h),s=s.delete(h)))}),this.query.limit!==null)for(;o.size>this.query.limit;){const h=this.query.limitType==="F"?o.last():o.first();o=o.delete(h.key),s=s.delete(h.key),r.track({type:1,doc:h})}return{ma:o,pa:r,ss:a,mutatedKeys:s}}ya(e,n){return e.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(e,n,r,i){const s=this.ma;this.ma=e.ma,this.mutatedKeys=e.mutatedKeys;const o=e.pa.j_();o.sort((h,f)=>function(_,E){const S=k=>{switch(k){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return J()}};return S(_)-S(E)}(h.type,f.type)||this.Va(h.doc,f.doc)),this.wa(r),i=i!=null&&i;const a=n&&!i?this.Sa():[],l=this.Ra.size===0&&this.current&&!i?1:0,c=l!==this.Aa;return this.Aa=l,o.length!==0||c?{snapshot:new lo(this.query,e.ma,s,o,e.mutatedKeys,l===0,c,!1,!!r&&r.resumeToken.approximateByteSize()>0),ba:a}:{ba:a}}ea(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({ma:this.ma,pa:new dA,mutatedKeys:this.mutatedKeys,ss:!1},!1)):{ba:[]}}Da(e){return!this.da.has(e)&&!!this.ma.has(e)&&!this.ma.get(e).hasLocalMutations}wa(e){e&&(e.addedDocuments.forEach(n=>this.da=this.da.add(n)),e.modifiedDocuments.forEach(n=>{}),e.removedDocuments.forEach(n=>this.da=this.da.delete(n)),this.current=e.current)}Sa(){if(!this.current)return[];const e=this.Ra;this.Ra=ae(),this.ma.forEach(r=>{this.Da(r.key)&&(this.Ra=this.Ra.add(r.key))});const n=[];return e.forEach(r=>{this.Ra.has(r)||n.push(new LS(r))}),this.Ra.forEach(r=>{e.has(r)||n.push(new DS(r))}),n}va(e){this.da=e.ds,this.Ra=ae();const n=this.ga(e.documents);return this.applyChanges(n,!0)}Ca(){return lo.fromInitialDocuments(this.query,this.ma,this.mutatedKeys,this.Aa===0,this.hasCachedResults)}}class R3{constructor(e,n,r){this.query=e,this.targetId=n,this.view=r}}class k3{constructor(e){this.key=e,this.Fa=!1}}class x3{constructor(e,n,r,i,s,o){this.localStore=e,this.remoteStore=n,this.eventManager=r,this.sharedClientState=i,this.currentUser=s,this.maxConcurrentLimboResolutions=o,this.Ma={},this.xa=new os(a=>Z1(a),ed),this.Oa=new Map,this.Na=new Set,this.La=new be($.comparator),this.Ba=new Map,this.ka=new x_,this.qa={},this.Qa=new Map,this.Ka=ao.Qn(),this.onlineState="Unknown",this.$a=void 0}get isPrimaryClient(){return this.$a===!0}}async function N3(t,e,n=!0){const r=US(t);let i;const s=r.xa.get(e);return s?(r.sharedClientState.addLocalQueryTarget(s.targetId),i=s.view.Ca()):i=await OS(r,e,n,!0),i}async function P3(t,e){const n=US(t);await OS(n,e,!0,!1)}async function OS(t,e,n,r){const i=await YU(t.localStore,Hn(e)),s=i.targetId,o=t.sharedClientState.addLocalQueryTarget(s,n);let a;return r&&(a=await b3(t,e,s,o==="current",i.resumeToken)),t.isPrimaryClient&&n&&RS(t.remoteStore,i),a}async function b3(t,e,n,r,i){t.Ua=(f,p,_)=>async function(S,k,A,v){let T=k.view.ga(A);T.ss&&(T=await lA(S.localStore,k.query,!1).then(({documents:C})=>k.view.ga(C,T)));const b=v&&v.targetChanges.get(k.targetId),M=v&&v.targetMismatches.get(k.targetId)!=null,V=k.view.applyChanges(T,S.isPrimaryClient,b,M);return gA(S,k.targetId,V.ba),V.snapshot}(t,f,p,_);const s=await lA(t.localStore,e,!0),o=new S3(e,s.ds),a=o.ga(s.documents),l=Fl.createSynthesizedTargetChangeForCurrentChange(n,r&&t.onlineState!=="Offline",i),c=o.applyChanges(a,t.isPrimaryClient,l);gA(t,n,c.ba);const h=new R3(e,n,o);return t.xa.set(e,h),t.Oa.has(n)?t.Oa.get(n).push(e):t.Oa.set(n,[e]),c.snapshot}async function D3(t,e,n){const r=ee(t),i=r.xa.get(e),s=r.Oa.get(i.targetId);if(s.length>1)return r.Oa.set(i.targetId,s.filter(o=>!ed(o,e))),void r.xa.delete(e);r.isPrimaryClient?(r.sharedClientState.removeLocalQueryTarget(i.targetId),r.sharedClientState.isActiveQueryTarget(i.targetId)||await am(r.localStore,i.targetId,!1).then(()=>{r.sharedClientState.clearQueryState(i.targetId),n&&b_(r.remoteStore,i.targetId),um(r,i.targetId)}).catch(Io)):(um(r,i.targetId),await am(r.localStore,i.targetId,!0))}async function L3(t,e){const n=ee(t),r=n.xa.get(e),i=n.Oa.get(r.targetId);n.isPrimaryClient&&i.length===1&&(n.sharedClientState.removeLocalQueryTarget(r.targetId),b_(n.remoteStore,r.targetId))}async function O3(t,e,n){const r=z3(t);try{const i=await function(o,a){const l=ee(o),c=Ye.now(),h=a.reduce((_,E)=>_.add(E.key),ae());let f,p;return l.persistence.runTransaction("Locally write mutations","readwrite",_=>{let E=Er(),S=ae();return l.hs.getEntries(_,h).next(k=>{E=k,E.forEach((A,v)=>{v.isValidDocument()||(S=S.add(A))})}).next(()=>l.localDocuments.getOverlayedDocuments(_,E)).next(k=>{f=k;const A=[];for(const v of a){const T=Xj(v,f.get(v.key).overlayedDocument);T!=null&&A.push(new as(v.key,T,G1(T.value.mapValue),dr.exists(!0)))}return l.mutationQueue.addMutationBatch(_,c,A,a)}).next(k=>{p=k;const A=k.applyToLocalDocumentSet(f,S);return l.documentOverlayCache.saveOverlays(_,k.batchId,A)})}).then(()=>({batchId:p.batchId,changes:nS(f)}))}(r.localStore,e);r.sharedClientState.addPendingMutation(i.batchId),function(o,a,l){let c=o.qa[o.currentUser.toKey()];c||(c=new be(le)),c=c.insert(a,l),o.qa[o.currentUser.toKey()]=c}(r,i.batchId,n),await jl(r,i.changes),await ad(r.remoteStore)}catch(i){const s=F_(i,"Failed to persist write");n.reject(s)}}async function MS(t,e){const n=ee(t);try{const r=await KU(n.localStore,e);e.targetChanges.forEach((i,s)=>{const o=n.Ba.get(s);o&&(ge(i.addedDocuments.size+i.modifiedDocuments.size+i.removedDocuments.size<=1),i.addedDocuments.size>0?o.Fa=!0:i.modifiedDocuments.size>0?ge(o.Fa):i.removedDocuments.size>0&&(ge(o.Fa),o.Fa=!1))}),await jl(n,r,e)}catch(r){await Io(r)}}function mA(t,e,n){const r=ee(t);if(r.isPrimaryClient&&n===0||!r.isPrimaryClient&&n===1){const i=[];r.xa.forEach((s,o)=>{const a=o.view.ea(e);a.snapshot&&i.push(a.snapshot)}),function(o,a){const l=ee(o);l.onlineState=a;let c=!1;l.queries.forEach((h,f)=>{for(const p of f.J_)p.ea(a)&&(c=!0)}),c&&V_(l)}(r.eventManager,e),i.length&&r.Ma.R_(i),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function M3(t,e,n){const r=ee(t);r.sharedClientState.updateQueryState(e,"rejected",n);const i=r.Ba.get(e),s=i&&i.key;if(s){let o=new be($.comparator);o=o.insert(s,Et.newNoDocument(s,Z.min()));const a=ae().add(s),l=new id(Z.min(),new Map,new be(le),o,a);await MS(r,l),r.La=r.La.remove(s),r.Ba.delete(e),j_(r)}else await am(r.localStore,e,!1).then(()=>um(r,e,n)).catch(Io)}async function F3(t,e){const n=ee(t),r=e.batch.batchId;try{const i=await GU(n.localStore,e);VS(n,r,null),FS(n,r),n.sharedClientState.updateMutationState(r,"acknowledged"),await jl(n,i)}catch(i){await Io(i)}}async function V3(t,e,n){const r=ee(t);try{const i=await function(o,a){const l=ee(o);return l.persistence.runTransaction("Reject batch","readwrite-primary",c=>{let h;return l.mutationQueue.lookupMutationBatch(c,a).next(f=>(ge(f!==null),h=f.keys(),l.mutationQueue.removeMutationBatch(c,f))).next(()=>l.mutationQueue.performConsistencyCheck(c)).next(()=>l.documentOverlayCache.removeOverlaysForBatchId(c,h,a)).next(()=>l.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(c,h)).next(()=>l.localDocuments.getDocuments(c,h))})}(r.localStore,e);VS(r,e,n),FS(r,e),r.sharedClientState.updateMutationState(e,"rejected",n),await jl(r,i)}catch(i){await Io(i)}}function FS(t,e){(t.Qa.get(e)||[]).forEach(n=>{n.resolve()}),t.Qa.delete(e)}function VS(t,e,n){const r=ee(t);let i=r.qa[r.currentUser.toKey()];if(i){const s=i.get(e);s&&(n?s.reject(n):s.resolve(),i=i.remove(e)),r.qa[r.currentUser.toKey()]=i}}function um(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const r of t.Oa.get(e))t.xa.delete(r),n&&t.Ma.Wa(r,n);t.Oa.delete(e),t.isPrimaryClient&&t.ka.yr(e).forEach(r=>{t.ka.containsKey(r)||jS(t,r)})}function jS(t,e){t.Na.delete(e.path.canonicalString());const n=t.La.get(e);n!==null&&(b_(t.remoteStore,n),t.La=t.La.remove(e),t.Ba.delete(n),j_(t))}function gA(t,e,n){for(const r of n)r instanceof DS?(t.ka.addReference(r.key,e),j3(t,r)):r instanceof LS?(H("SyncEngine","Document no longer in limbo: "+r.key),t.ka.removeReference(r.key,e),t.ka.containsKey(r.key)||jS(t,r.key)):J()}function j3(t,e){const n=e.key,r=n.path.canonicalString();t.La.get(n)||t.Na.has(r)||(H("SyncEngine","New document in limbo: "+n),t.Na.add(r),j_(t))}function j_(t){for(;t.Na.size>0&&t.La.size<t.maxConcurrentLimboResolutions;){const e=t.Na.values().next().value;t.Na.delete(e);const n=new $(Oe.fromString(e)),r=t.Ka.next();t.Ba.set(r,new k3(n)),t.La=t.La.insert(n,r),RS(t.remoteStore,new zr(Hn(I_(n.path)),r,"TargetPurposeLimboResolution",Yh.oe))}}async function jl(t,e,n){const r=ee(t),i=[],s=[],o=[];r.xa.isEmpty()||(r.xa.forEach((a,l)=>{o.push(r.Ua(l,e,n).then(c=>{var h;if((c||n)&&r.isPrimaryClient){const f=c?!c.fromCache:(h=n==null?void 0:n.targetChanges.get(l.targetId))===null||h===void 0?void 0:h.current;r.sharedClientState.updateQueryState(l.targetId,f?"current":"not-current")}if(c){i.push(c);const f=P_.zi(l.targetId,c);s.push(f)}}))}),await Promise.all(o),r.Ma.R_(i),await async function(l,c){const h=ee(l);try{await h.persistence.runTransaction("notifyLocalViewChanges","readwrite",f=>F.forEach(c,p=>F.forEach(p.Wi,_=>h.persistence.referenceDelegate.addReference(f,p.targetId,_)).next(()=>F.forEach(p.Gi,_=>h.persistence.referenceDelegate.removeReference(f,p.targetId,_)))))}catch(f){if(!Co(f))throw f;H("LocalStore","Failed to update sequence numbers: "+f)}for(const f of c){const p=f.targetId;if(!f.fromCache){const _=h.us.get(p),E=_.snapshotVersion,S=_.withLastLimboFreeSnapshotVersion(E);h.us=h.us.insert(p,S)}}}(r.localStore,s))}async function U3(t,e){const n=ee(t);if(!n.currentUser.isEqual(e)){H("SyncEngine","User change. New user:",e.toKey());const r=await TS(n.localStore,e);n.currentUser=e,function(s,o){s.Qa.forEach(a=>{a.forEach(l=>{l.reject(new K(j.CANCELLED,o))})}),s.Qa.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await jl(n,r.Ts)}}function B3(t,e){const n=ee(t),r=n.Ba.get(e);if(r&&r.Fa)return ae().add(r.key);{let i=ae();const s=n.Oa.get(e);if(!s)return i;for(const o of s){const a=n.xa.get(o);i=i.unionWith(a.view.fa)}return i}}function US(t){const e=ee(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=MS.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=B3.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=M3.bind(null,e),e.Ma.R_=T3.bind(null,e.eventManager),e.Ma.Wa=I3.bind(null,e.eventManager),e}function z3(t){const e=ee(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=F3.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=V3.bind(null,e),e}class dh{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(e){this.serializer=sd(e.databaseInfo.databaseId),this.sharedClientState=this.za(e),this.persistence=this.ja(e),await this.persistence.start(),this.localStore=this.Ha(e),this.gcScheduler=this.Ja(e,this.localStore),this.indexBackfillerScheduler=this.Ya(e,this.localStore)}Ja(e,n){return null}Ya(e,n){return null}Ha(e){return qU(this.persistence,new WU,e.initialUser,this.serializer)}ja(e){return new ES(N_.ei,this.serializer)}za(e){return new JU}async terminate(){var e,n;(e=this.gcScheduler)===null||e===void 0||e.stop(),(n=this.indexBackfillerScheduler)===null||n===void 0||n.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}dh.provider={build:()=>new dh};class W3 extends dh{constructor(e){super(),this.cacheSizeBytes=e}Ja(e,n){ge(this.persistence.referenceDelegate instanceof ch);const r=this.persistence.referenceDelegate.garbageCollector;return new kU(r,e.asyncQueue,n)}ja(e){const n=this.cacheSizeBytes!==void 0?Mt.withCacheSize(this.cacheSizeBytes):Mt.DEFAULT;return new ES(r=>ch.ei(r,n),this.serializer)}}class cm{async initialize(e,n){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>mA(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=U3.bind(null,this.syncEngine),await y3(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return function(){return new w3}()}createDatastore(e){const n=sd(e.databaseInfo.databaseId),r=function(s){return new n3(s)}(e.databaseInfo);return function(s,o,a,l){return new s3(s,o,a,l)}(e.authCredentials,e.appCheckCredentials,r,n)}createRemoteStore(e){return function(r,i,s,o,a){return new a3(r,i,s,o,a)}(this.localStore,this.datastore,e.asyncQueue,n=>mA(this.syncEngine,n,0),function(){return cA.p()?new cA:new ZU}())}createSyncEngine(e,n){return function(i,s,o,a,l,c,h){const f=new x3(i,s,o,a,l,c);return h&&(f.$a=!0),f}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,n)}async terminate(){var e,n;await async function(i){const s=ee(i);H("RemoteStore","RemoteStore shutting down."),s.k_.add(5),await Vl(s),s.Q_.shutdown(),s.K_.set("Unknown")}(this.remoteStore),(e=this.datastore)===null||e===void 0||e.terminate(),(n=this.eventManager)===null||n===void 0||n.terminate()}}cm.provider={build:()=>new cm};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class H3{constructor(e){this.observer=e,this.muted=!1}next(e){this.muted||this.observer.next&&this.Xa(this.observer.next,e)}error(e){this.muted||(this.observer.error?this.Xa(this.observer.error,e):Ar("Uncaught Error in snapshot listener:",e.toString()))}eu(){this.muted=!0}Xa(e,n){setTimeout(()=>{this.muted||e(n)},0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class q3{constructor(e,n,r,i,s){this.authCredentials=e,this.appCheckCredentials=n,this.asyncQueue=r,this.databaseInfo=i,this.user=vt.UNAUTHENTICATED,this.clientId=W1.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=s,this.authCredentials.start(r,async o=>{H("FirestoreClient","Received user=",o.uid),await this.authCredentialListener(o),this.user=o}),this.appCheckCredentials.start(r,o=>(H("FirestoreClient","Received new app check token=",o),this.appCheckCredentialListener(o,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();const e=new ti;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){const r=F_(n,"Failed to shutdown persistence");e.reject(r)}}),e.promise}}async function Pf(t,e){t.asyncQueue.verifyOperationInProgress(),H("FirestoreClient","Initializing OfflineComponentProvider");const n=t.configuration;await e.initialize(n);let r=n.initialUser;t.setCredentialChangeListener(async i=>{r.isEqual(i)||(await TS(e.localStore,i),r=i)}),e.persistence.setDatabaseDeletedListener(()=>t.terminate()),t._offlineComponents=e}async function _A(t,e){t.asyncQueue.verifyOperationInProgress();const n=await G3(t);H("FirestoreClient","Initializing OnlineComponentProvider"),await e.initialize(n,t.configuration),t.setCredentialChangeListener(r=>hA(e.remoteStore,r)),t.setAppCheckTokenChangeListener((r,i)=>hA(e.remoteStore,i)),t._onlineComponents=e}async function G3(t){if(!t._offlineComponents)if(t._uninitializedComponentsProvider){H("FirestoreClient","Using user provided OfflineComponentProvider");try{await Pf(t,t._uninitializedComponentsProvider._offline)}catch(e){const n=e;if(!function(i){return i.name==="FirebaseError"?i.code===j.FAILED_PRECONDITION||i.code===j.UNIMPLEMENTED:!(typeof DOMException<"u"&&i instanceof DOMException)||i.code===22||i.code===20||i.code===11}(n))throw n;ro("Error using user provided cache. Falling back to memory cache: "+n),await Pf(t,new dh)}}else H("FirestoreClient","Using default OfflineComponentProvider"),await Pf(t,new W3(void 0));return t._offlineComponents}async function BS(t){return t._onlineComponents||(t._uninitializedComponentsProvider?(H("FirestoreClient","Using user provided OnlineComponentProvider"),await _A(t,t._uninitializedComponentsProvider._online)):(H("FirestoreClient","Using default OnlineComponentProvider"),await _A(t,new cm))),t._onlineComponents}function K3(t){return BS(t).then(e=>e.syncEngine)}async function $3(t){const e=await BS(t),n=e.eventManager;return n.onListen=N3.bind(null,e.syncEngine),n.onUnlisten=D3.bind(null,e.syncEngine),n.onFirstRemoteStoreListen=P3.bind(null,e.syncEngine),n.onLastRemoteStoreUnlisten=L3.bind(null,e.syncEngine),n}function Q3(t,e,n={}){const r=new ti;return t.asyncQueue.enqueueAndForget(async()=>function(s,o,a,l,c){const h=new H3({next:p=>{h.eu(),o.enqueueAndForget(()=>E3(s,f));const _=p.docs.has(a);!_&&p.fromCache?c.reject(new K(j.UNAVAILABLE,"Failed to get document because the client is offline.")):_&&p.fromCache&&l&&l.source==="server"?c.reject(new K(j.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):c.resolve(p)},error:p=>c.reject(p)}),f=new C3(I_(a.path),h,{includeMetadataChanges:!0,ua:!0});return A3(s,f)}(await $3(t),t.asyncQueue,e,n,r)),r.promise}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function zS(t){const e={};return t.timeoutSeconds!==void 0&&(e.timeoutSeconds=t.timeoutSeconds),e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yA=new Map;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Y3(t,e,n){if(!n)throw new K(j.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function X3(t,e,n,r){if(e===!0&&r===!0)throw new K(j.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function vA(t){if(!$.isDocumentKey(t))throw new K(j.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function U_(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=function(r){return r.constructor?r.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":J()}function fl(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new K(j.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=U_(t);throw new K(j.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wA{constructor(e){var n,r;if(e.host===void 0){if(e.ssl!==void 0)throw new K(j.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(n=e.ssl)===null||n===void 0||n;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new K(j.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}X3("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=zS((r=e.experimentalLongPollingOptions)!==null&&r!==void 0?r:{}),function(s){if(s.timeoutSeconds!==void 0){if(isNaN(s.timeoutSeconds))throw new K(j.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (must not be NaN)`);if(s.timeoutSeconds<5)throw new K(j.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (minimum allowed value is 5)`);if(s.timeoutSeconds>30)throw new K(j.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(r,i){return r.timeoutSeconds===i.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class B_{constructor(e,n,r,i){this._authCredentials=e,this._appCheckCredentials=n,this._databaseId=r,this._app=i,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new wA({}),this._settingsFrozen=!1,this._terminateTask="notTerminated"}get app(){if(!this._app)throw new K(j.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new K(j.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new wA(e),e.credentials!==void 0&&(this._authCredentials=function(r){if(!r)return new rj;switch(r.type){case"firstParty":return new aj(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new K(j.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(n){const r=yA.get(n);r&&(H("ComponentProvider","Removing Datastore"),yA.delete(n),r.terminate())}(this),Promise.resolve()}}function J3(t,e,n,r={}){var i;const s=(t=fl(t,B_))._getSettings(),o=`${e}:${n}`;if(s.host!=="firestore.googleapis.com"&&s.host!==o&&ro("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used."),t._setSettings(Object.assign(Object.assign({},s),{host:o,ssl:!1})),r.mockUserToken){let a,l;if(typeof r.mockUserToken=="string")a=r.mockUserToken,l=vt.MOCK_USER;else{a=_g(r.mockUserToken,(i=t._app)===null||i===void 0?void 0:i.options.projectId);const c=r.mockUserToken.sub||r.mockUserToken.user_id;if(!c)throw new K(j.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");l=new vt(c)}t._authCredentials=new ij(new z1(a,l))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class z_{constructor(e,n,r){this.converter=n,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new z_(this.firestore,e,this._query)}}class hn{constructor(e,n,r){this.converter=n,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new pl(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new hn(this.firestore,e,this._key)}}class pl extends z_{constructor(e,n,r){super(e,n,I_(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new hn(this.firestore,null,new $(e))}withConverter(e){return new pl(this.firestore,e,this._path)}}function Z3(t,e,...n){if(t=Fe(t),arguments.length===1&&(e=W1.newId()),Y3("doc","path",e),t instanceof B_){const r=Oe.fromString(e,...n);return vA(r),new hn(t,null,new $(r))}{if(!(t instanceof hn||t instanceof pl))throw new K(j.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(Oe.fromString(e,...n));return vA(r),new hn(t.firestore,t instanceof pl?t.converter:null,new $(r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class AA{constructor(e=Promise.resolve()){this.Iu=[],this.Eu=!1,this.du=[],this.Au=null,this.Ru=!1,this.Vu=!1,this.mu=[],this.r_=new CS(this,"async_queue_retry"),this.fu=()=>{const r=Nf();r&&H("AsyncQueue","Visibility state changed to "+r.visibilityState),this.r_.Jo()},this.gu=e;const n=Nf();n&&typeof n.addEventListener=="function"&&n.addEventListener("visibilitychange",this.fu)}get isShuttingDown(){return this.Eu}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.pu(),this.yu(e)}enterRestrictedMode(e){if(!this.Eu){this.Eu=!0,this.Vu=e||!1;const n=Nf();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.fu)}}enqueue(e){if(this.pu(),this.Eu)return new Promise(()=>{});const n=new ti;return this.yu(()=>this.Eu&&this.Vu?Promise.resolve():(e().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Iu.push(e),this.wu()))}async wu(){if(this.Iu.length!==0){try{await this.Iu[0](),this.Iu.shift(),this.r_.reset()}catch(e){if(!Co(e))throw e;H("AsyncQueue","Operation failed with retryable error: "+e)}this.Iu.length>0&&this.r_.jo(()=>this.wu())}}yu(e){const n=this.gu.then(()=>(this.Ru=!0,e().catch(r=>{this.Au=r,this.Ru=!1;const i=function(o){let a=o.message||"";return o.stack&&(a=o.stack.includes(o.message)?o.stack:o.message+`
`+o.stack),a}(r);throw Ar("INTERNAL UNHANDLED ERROR: ",i),r}).then(r=>(this.Ru=!1,r))));return this.gu=n,n}enqueueAfterDelay(e,n,r){this.pu(),this.mu.indexOf(e)>-1&&(n=0);const i=M_.createAndSchedule(this,e,n,r,s=>this.Su(s));return this.du.push(i),i}pu(){this.Au&&J()}verifyOperationInProgress(){}async bu(){let e;do e=this.gu,await e;while(e!==this.gu)}Du(e){for(const n of this.du)if(n.timerId===e)return!0;return!1}vu(e){return this.bu().then(()=>{this.du.sort((n,r)=>n.targetTimeMs-r.targetTimeMs);for(const n of this.du)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.bu()})}Cu(e){this.mu.push(e)}Su(e){const n=this.du.indexOf(e);this.du.splice(n,1)}}class W_ extends B_{constructor(e,n,r,i){super(e,n,r,i),this.type="firestore",this._queue=new AA,this._persistenceKey=(i==null?void 0:i.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new AA(e),this._firestoreClient=void 0,await e}}}function e6(t,e){const n=typeof t=="object"?t:Sl(),r=typeof t=="string"?t:"(default)",i=Rr(n,"firestore").getImmediate({identifier:r});if(!i._initialized){const s=gg("firestore");s&&J3(i,...s)}return i}function WS(t){if(t._terminated)throw new K(j.FAILED_PRECONDITION,"The client has already been terminated.");return t._firestoreClient||t6(t),t._firestoreClient}function t6(t){var e,n,r;const i=t._freezeSettings(),s=function(a,l,c,h){return new Ej(a,l,c,h.host,h.ssl,h.experimentalForceLongPolling,h.experimentalAutoDetectLongPolling,zS(h.experimentalLongPollingOptions),h.useFetchStreams)}(t._databaseId,((e=t._app)===null||e===void 0?void 0:e.options.appId)||"",t._persistenceKey,i);t._componentsProvider||!((n=i.localCache)===null||n===void 0)&&n._offlineComponentProvider&&(!((r=i.localCache)===null||r===void 0)&&r._onlineComponentProvider)&&(t._componentsProvider={_offline:i.localCache._offlineComponentProvider,_online:i.localCache._onlineComponentProvider}),t._firestoreClient=new q3(t._authCredentials,t._appCheckCredentials,t._queue,s,t._componentsProvider&&function(a){const l=a==null?void 0:a._online.build();return{_offline:a==null?void 0:a._offline.build(l),_online:l}}(t._componentsProvider))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uo{constructor(e){this._byteString=e}static fromBase64String(e){try{return new uo(dt.fromBase64String(e))}catch(n){throw new K(j.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new uo(dt.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class H_{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new K(j.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new ut(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class HS{constructor(e){this._methodName=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class q_{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new K(j.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new K(j.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return le(this._lat,e._lat)||le(this._long,e._long)}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class G_{constructor(e){this._values=(e||[]).map(n=>n)}toArray(){return this._values.map(e=>e)}isEqual(e){return function(r,i){if(r.length!==i.length)return!1;for(let s=0;s<r.length;++s)if(r[s]!==i[s])return!1;return!0}(this._values,e._values)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const n6=/^__.*__$/;class r6{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return this.fieldMask!==null?new as(e,this.data,this.fieldMask,n,this.fieldTransforms):new Ml(e,this.data,n,this.fieldTransforms)}}function qS(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw J()}}class K_{constructor(e,n,r,i,s,o){this.settings=e,this.databaseId=n,this.serializer=r,this.ignoreUndefinedProperties=i,s===void 0&&this.Fu(),this.fieldTransforms=s||[],this.fieldMask=o||[]}get path(){return this.settings.path}get Mu(){return this.settings.Mu}xu(e){return new K_(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}Ou(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),i=this.xu({path:r,Nu:!1});return i.Lu(e),i}Bu(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),i=this.xu({path:r,Nu:!1});return i.Fu(),i}ku(e){return this.xu({path:void 0,Nu:!0})}qu(e){return fh(e,this.settings.methodName,this.settings.Qu||!1,this.path,this.settings.Ku)}contains(e){return this.fieldMask.find(n=>e.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>e.isPrefixOf(n.field))!==void 0}Fu(){if(this.path)for(let e=0;e<this.path.length;e++)this.Lu(this.path.get(e))}Lu(e){if(e.length===0)throw this.qu("Document fields must not be empty");if(qS(this.Mu)&&n6.test(e))throw this.qu('Document fields cannot begin and end with "__"')}}class i6{constructor(e,n,r){this.databaseId=e,this.ignoreUndefinedProperties=n,this.serializer=r||sd(e)}$u(e,n,r,i=!1){return new K_({Mu:e,methodName:n,Ku:r,path:ut.emptyPath(),Nu:!1,Qu:i},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function s6(t){const e=t._freezeSettings(),n=sd(t._databaseId);return new i6(t._databaseId,!!e.ignoreUndefinedProperties,n)}function o6(t,e,n,r,i,s={}){const o=t.$u(s.merge||s.mergeFields?2:0,e,n,i);QS("Data must be an object, but it was:",o,r);const a=KS(r,o);let l,c;if(s.merge)l=new Rn(o.fieldMask),c=o.fieldTransforms;else if(s.mergeFields){const h=[];for(const f of s.mergeFields){const p=a6(e,f,n);if(!o.contains(p))throw new K(j.INVALID_ARGUMENT,`Field '${p}' is specified in your field mask but missing from your input data.`);u6(h,p)||h.push(p)}l=new Rn(h),c=o.fieldTransforms.filter(f=>l.covers(f.field))}else l=null,c=o.fieldTransforms;return new r6(new ln(a),l,c)}function GS(t,e){if($S(t=Fe(t)))return QS("Unsupported field value:",e,t),KS(t,e);if(t instanceof HS)return function(r,i){if(!qS(i.Mu))throw i.qu(`${r._methodName}() can only be used with update() and set()`);if(!i.path)throw i.qu(`${r._methodName}() is not currently supported inside arrays`);const s=r._toFieldTransform(i);s&&i.fieldTransforms.push(s)}(t,e),null;if(t===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.Nu&&e.Mu!==4)throw e.qu("Nested arrays are not supported");return function(r,i){const s=[];let o=0;for(const a of r){let l=GS(a,i.ku(o));l==null&&(l={nullValue:"NULL_VALUE"}),s.push(l),o++}return{arrayValue:{values:s}}}(t,e)}return function(r,i){if((r=Fe(r))===null)return{nullValue:"NULL_VALUE"};if(typeof r=="number")return qj(i.serializer,r);if(typeof r=="boolean")return{booleanValue:r};if(typeof r=="string")return{stringValue:r};if(r instanceof Date){const s=Ye.fromDate(r);return{timestampValue:uh(i.serializer,s)}}if(r instanceof Ye){const s=new Ye(r.seconds,1e3*Math.floor(r.nanoseconds/1e3));return{timestampValue:uh(i.serializer,s)}}if(r instanceof q_)return{geoPointValue:{latitude:r.latitude,longitude:r.longitude}};if(r instanceof uo)return{bytesValue:mS(i.serializer,r._byteString)};if(r instanceof hn){const s=i.databaseId,o=r.firestore._databaseId;if(!o.isEqual(s))throw i.qu(`Document reference is for database ${o.projectId}/${o.database} but should be for database ${s.projectId}/${s.database}`);return{referenceValue:k_(r.firestore._databaseId||i.databaseId,r._key.path)}}if(r instanceof G_)return function(o,a){return{mapValue:{fields:{__type__:{stringValue:"__vector__"},value:{arrayValue:{values:o.toArray().map(l=>{if(typeof l!="number")throw a.qu("VectorValues must only contain numeric values.");return C_(a.serializer,l)})}}}}}}(r,i);throw i.qu(`Unsupported field value: ${U_(r)}`)}(t,e)}function KS(t,e){const n={};return H1(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):ss(t,(r,i)=>{const s=GS(i,e.Ou(r));s!=null&&(n[r]=s)}),{mapValue:{fields:n}}}function $S(t){return!(typeof t!="object"||t===null||t instanceof Array||t instanceof Date||t instanceof Ye||t instanceof q_||t instanceof uo||t instanceof hn||t instanceof HS||t instanceof G_)}function QS(t,e,n){if(!$S(n)||!function(i){return typeof i=="object"&&i!==null&&(Object.getPrototypeOf(i)===Object.prototype||Object.getPrototypeOf(i)===null)}(n)){const r=U_(n);throw r==="an object"?e.qu(t+" a custom object"):e.qu(t+" "+r)}}function a6(t,e,n){if((e=Fe(e))instanceof H_)return e._internalPath;if(typeof e=="string")return YS(t,e);throw fh("Field path arguments must be of type string or ",t,!1,void 0,n)}const l6=new RegExp("[~\\*/\\[\\]]");function YS(t,e,n){if(e.search(l6)>=0)throw fh(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new H_(...e.split("."))._internalPath}catch{throw fh(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function fh(t,e,n,r,i){const s=r&&!r.isEmpty(),o=i!==void 0;let a=`Function ${e}() called with invalid data`;n&&(a+=" (via `toFirestore()`)"),a+=". ";let l="";return(s||o)&&(l+=" (found",s&&(l+=` in field ${r}`),o&&(l+=` in document ${i}`),l+=")"),new K(j.INVALID_ARGUMENT,a+t+l)}function u6(t,e){return t.some(n=>n.isEqual(e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class XS{constructor(e,n,r,i,s){this._firestore=e,this._userDataWriter=n,this._key=r,this._document=i,this._converter=s}get id(){return this._key.path.lastSegment()}get ref(){return new hn(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new c6(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const n=this._document.data.field(JS("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n)}}}class c6 extends XS{data(){return super.data()}}function JS(t,e){return typeof e=="string"?YS(t,e):e instanceof H_?e._internalPath:e._delegate._internalPath}class h6{convertValue(e,n="none"){switch(ci(e)){case 0:return null;case 1:return e.booleanValue;case 2:return Ue(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,n);case 5:return e.stringValue;case 6:return this.convertBytes(ui(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,n);case 11:return this.convertObject(e.mapValue,n);case 10:return this.convertVectorValue(e.mapValue);default:throw J()}}convertObject(e,n){return this.convertObjectMap(e.fields,n)}convertObjectMap(e,n="none"){const r={};return ss(e,(i,s)=>{r[i]=this.convertValue(s,n)}),r}convertVectorValue(e){var n,r,i;const s=(i=(r=(n=e.fields)===null||n===void 0?void 0:n.value.arrayValue)===null||r===void 0?void 0:r.values)===null||i===void 0?void 0:i.map(o=>Ue(o.doubleValue));return new G_(s)}convertGeoPoint(e){return new q_(Ue(e.latitude),Ue(e.longitude))}convertArray(e,n){return(e.values||[]).map(r=>this.convertValue(r,n))}convertServerTimestamp(e,n){switch(n){case"previous":const r=Jh(e);return r==null?null:this.convertValue(r,n);case"estimate":return this.convertTimestamp(ll(e));default:return null}}convertTimestamp(e){const n=li(e);return new Ye(n.seconds,n.nanos)}convertDocumentKey(e,n){const r=Oe.fromString(e);ge(AS(r));const i=new ul(r.get(1),r.get(3)),s=new $(r.popFirst(5));return i.isEqual(n)||Ar(`Document ${s} contains a document reference within a different database (${i.projectId}/${i.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),s}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function d6(t,e,n){let r;return r=t?t.toFirestore(e):e,r}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class f6{constructor(e,n){this.hasPendingWrites=e,this.fromCache=n}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class ZS extends XS{constructor(e,n,r,i,s,o){super(e,n,r,i,o),this._firestore=e,this._firestoreImpl=e,this.metadata=s}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const n=new p6(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,n={}){if(this._document){const r=this._document.data.field(JS("DocumentSnapshot.get",e));if(r!==null)return this._userDataWriter.convertValue(r,n.serverTimestamps)}}}class p6 extends ZS{data(e={}){return super.data(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function m6(t){t=fl(t,hn);const e=fl(t.firestore,W_);return Q3(WS(e),t._key).then(n=>v6(e,t,n))}class g6 extends h6{constructor(e){super(),this.firestore=e}convertBytes(e){return new uo(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new hn(this.firestore,null,n)}}function _6(t,e,n){t=fl(t,hn);const r=fl(t.firestore,W_),i=d6(t.converter,e);return y6(r,[o6(s6(r),"setDoc",t._key,i,t.converter!==null,n).toMutation(t._key,dr.none())])}function y6(t,e){return function(r,i){const s=new ti;return r.asyncQueue.enqueueAndForget(async()=>O3(await K3(r),i,s)),s.promise}(WS(t),e)}function v6(t,e,n){const r=n.docs.get(e._key),i=new g6(t);return new ZS(t,i,e._key,r,new f6(n.hasPendingWrites,n.fromCache),e.converter)}(function(e,n=!0){(function(i){To=i})(gi),pn(new tn("firestore",(r,{instanceIdentifier:i,options:s})=>{const o=r.getProvider("app").getImmediate(),a=new W_(new sj(r.getProvider("auth-internal")),new uj(r.getProvider("app-check-internal")),function(c,h){if(!Object.prototype.hasOwnProperty.apply(c.options,["projectId"]))throw new K(j.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new ul(c.options.projectId,h)}(o,i),o);return s=Object.assign({useFetchStreams:n},s),a._setSettings(s),a},"PUBLIC").setMultipleInstances(!0)),Tt(jw,"4.7.5",e),Tt(jw,"4.7.5","esm2017")})();const w6={apiKey:"AIzaSyDGwuF8ERmtn216J2tKA0uyiTv5QDiHhxE",authDomain:"sazy-42e91.firebaseapp.com",projectId:"sazy-42e91",storageBucket:"sazy-42e91.appspot.com",messagingSenderId:"896577904628",appId:"1:896577904628:web:a87d6aa4dc0dcd94c5e3a1",measurementId:"G-M3SZB6TSXB",databaseURL:"https://sazy-42e91-default-rtdb.firebaseio.com/"},Ul=hI(w6);mM(Ul);HM(Ul);const bs=y_(Ul),A6=e6(Ul),di=QI(Ul),E6=async(t,e)=>{try{return await F2(di,t,e)}catch(n){throw console.error("Error creating user with email and password:",n.message),n}},$_=async(t,e)=>{try{return await V2(di,t,e)}catch(n){throw console.error("Error signing in with email and password:",n.message),n}},eR=async()=>{const t=new tr;try{return await oL(di,t)}catch(e){throw console.error("Error signing in with Google:",e.message),e}},tR=N.createContext();function ld(){return N.useContext(tR)}function T6({children:t}){const[e,n]=N.useState(null),[r,i]=N.useState(!1),[s,o]=N.useState(!0);N.useEffect(()=>{const l=Ng(di,c=>{n(c),i(!!c),o(!1)});return()=>l()},[]);const a={currentUser:e,userLoggedIn:r,setCurrentUser:n,loading:s,doSignInWithEmailAndPassword:$_,doSignInWithGoogle:eR};return g.jsx(tR.Provider,{value:a,children:!s&&t})}const nR=N.createContext(),I6=({children:t})=>{const[e,n]=N.useState([]),[r,i]=N.useState(null),s=QI();N.useEffect(()=>{const c=Ng(s,h=>{i(h?h.uid:null)});return()=>c()},[s]),N.useEffect(()=>{if(!r)return;const c=Vn(bs,`carts/${r}`),h=rh(c,f=>{const p=f.val();if(p){const _=Object.keys(p).map(E=>{const S=p[E];return Object.keys(S).map(k=>({productId:E,size:k,quantity:S[k]}))}).flat();n(_)}else n([])});return()=>h()},[r]);const o=(c,h,f)=>{if(!r)return;const p=Vn(bs,`carts/${r}`),_=Vn(p,c),E=Vn(_,h);rh(E,S=>{const k=S.val()||0;Qh(E,k+f)})},a=(c,h)=>{if(!r)return;const f=Vn(bs,`carts/${r}/${c}/${h}`);Fw(f)},l=()=>{if(!r)return;const c=Vn(bs,`carts/${r}`);Fw(c),n([])};return g.jsx(nR.Provider,{value:{cartItems:e,addToCart:o,removeFromCart:a,onOrderPlace:l},children:t})},rR=()=>N.useContext(nR),C6="/assets/Hero%20bg-CZbRgP24.png",iR="/assets/p_img1-BTuXznJl.png",S6="/assets/p_img2_1-ku4Fyxmj.png",R6="/assets/p_img2_2-qIkFhpUm.png",k6="/assets/p_img2_3-CEavuIK1.png",x6="/assets/p_img2_4-BXpIA9X-.png",N6="/assets/p_img3-Bhmp8mac.png",P6="/assets/p_img4-CYIvCkUm.png",b6="/assets/p_img5-BMHJXi1_.png",D6="/assets/p_img6-B2VXR-Iw.png",L6="/assets/p_img7-Ds_MiPCY.png",O6="/assets/p_img8-BeUACWv0.png",M6="/assets/p_img9-DmR0Ahyl.png",F6="/assets/p_img10-Bw8q3bg_.png",V6="/assets/p_img11-BSX5z8O8.png",j6="/assets/p_img12-CWT58dgm.png",U6="/assets/p_img13-9keE2fyF.png",B6="/assets/p_img14-3-oykRil.png",z6="/assets/p_img15-CEqmdW8L.png",W6="/assets/p_img16-DpIAWCPe.png",H6="/assets/p_img17-D3TjESyL.png",q6="/assets/p_img18-CZUzXTNh.png",G6="/assets/p_img19-Ddd8N1Sm.png",K6="/assets/p_img20-BN74rvum.png",$6="/assets/p_img21-BhDxXaVk.png",Q6="/assets/p_img22-DIBExxK1.png",Y6="/assets/p_img23-CGTC-19z.png",X6="/assets/p_img24-DxfyHMhA.png",J6="/assets/p_img25-DpcquDQp.png",Z6="/assets/p_img26-DAHi2sy3.png",e5="/assets/p_img3-Bhmp8mac.png",t5="/assets/p_img28-CJDN8kuL.png",n5="/assets/p_img5-BMHJXi1_.png",r5="/assets/p_img6-B2VXR-Iw.png",i5="/assets/p_img31-CWAriNUP.png",s5="/assets/p_img8-BeUACWv0.png",o5="/assets/p_img9-DmR0Ahyl.png",a5="/assets/p_img34-BXN5k9Le.png",l5="/assets/p_img35-DhY25dxs.png",u5="/assets/p_img36-B1ikYIpP.png",c5="/assets/p_img13-9keE2fyF.png",h5="/assets/p_img14-3-oykRil.png",d5="/assets/p_img39-CbwhV562.png",f5="/assets/p_img40-CSBZ2iZ8.png",p5="/assets/p_img41-lMY0mPgt.png",m5="/assets/p_img18-CZUzXTNh.png",g5="/assets/p_img43-CXKL7sau.png",_5="/assets/p_img44-CwJd8P6L.png",y5="/assets/p_img45-D6kVIzrp.png",v5="/assets/p_img46-DjGwJRpH.png",w5="/assets/p_img47-C0-ZYjIt.png",A5="/assets/p_img48-DwPRHR8_.png",E5="/assets/p_img49-CghJrhGi.png",T5="/assets/p_img50-Cg-7CHi5.png",I5="/assets/p_img51-FRQODGKA.png",C5="/assets/p_img52-CY-YbGLu.png",sR="/assets/T1-DelvCWUc.png",oR="/assets/T2-DCo1qWM-.png",aR="/assets/mug1-BgQiWSPY.webp",lR="/assets/mug2-CVHIc3EQ.webp",uR="/assets/sofa1-CKsLXZ0W.webp",cR="/assets/sofa2-ChgDxB0z.webp",hR="/assets/chair1-CnMLi3w7.webp",dR="/assets/chair2-dIa5cHC6.webp",fR="/assets/table%201-ubTiaNJM.webp",pR="/assets/table2-UqPWC4js.webp",mR="/assets/Marble1-DQS3uweg.webp",gR="/assets/Marble2-BXQPBlQe.webp",S5="data:image/webp;base64,AAAAHGZ0eXBhdmlmAAAAAGF2aWZtaWYxbWlhZgAAA1ptZXRhAAAAAAAAACFoZGxyAAAAAAAAAABwaWN0AAAAAAAAAAAAAAAAAAAAAA5waXRtAAAAAAABAAAARmlsb2MAAAAAREAAAwACAAAAAAN+AAEAAAAAAAAH4AABAAAAAAteAAEAAAAAAAABRwADAAAAAAylAAEAAAAAAAAAvgAAAE1paW5mAAAAAAADAAAAFWluZmUCAAAAAAEAAGF2MDEAAAAAFWluZmUCAAAAAAIAAGF2MDEAAAAAFWluZmUCAAABAAMAAEV4aWYAAAACZGlwcnAAAAI+aXBjbwAAAbRjb2xycklDQwAAAahsY21zAhAAAG1udHJSR0IgWFlaIAfcAAEAGQADACkAOWFjc3BBUFBMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD21gABAAAAANMtbGNtcwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACWRlc2MAAADwAAAAX2NwcnQAAAFMAAAADHd0cHQAAAFYAAAAFHJYWVoAAAFsAAAAFGdYWVoAAAGAAAAAFGJYWVoAAAGUAAAAFHJUUkMAAAEMAAAAQGdUUkMAAAEMAAAAQGJUUkMAAAEMAAAAQGRlc2MAAAAAAAAABWMyY2kAAAAAAAAAAAAAAABjdXJ2AAAAAAAAABoAAADLAckDYwWSCGsL9hA/FVEbNCHxKZAyGDuSRgVRd13ta3B6BYmxmnysab9908PpMP//dGV4dAAAAABDQzAAWFlaIAAAAAAAAPbWAAEAAAAA0y1YWVogAAAAAAAAb6IAADj1AAADkFhZWiAAAAAAAABimQAAt4UAABjaWFlaIAAAAAAAACSgAAAPhAAAts8AAAAMYXYxQ4EAHAAAAAAUaXNwZQAAAAAAAADIAAAANQAAAA5waXhpAAAAAAEIAAAAOGF1eEMAAAAAdXJuOm1wZWc6bXBlZ0I6Y2ljcDpzeXN0ZW1zOmF1eGlsaWFyeTphbHBoYQAAAAAMYXYxQ4EADAAAAAAQcGl4aQAAAAADCAgIAAAAHmlwbWEAAAAAAAAAAgABBAGGAwcAAgSCAwSFAAAAKGlyZWYAAAAAAAAADmF1eGwAAgABAAEAAAAOY2RzYwADAAEAAQAACe1tZGF0EgAKBhgdcfRlUDLTDxEgAACI3S/aVFUCOjlLiRMchS7H698Ao/m4xk2VPwQoccGUleAIN4amUNx8EBN3aVflcNO/jkI1idJua/KX4dPbJ7OW+/kwpkdLLXFjXvr9ULeP3K9ow/Sr440rgjpZKFuGeRd1Bml8y88VyDSv41eW2s63ZRJK2KJWkegvaS40Z/jivquY5qSoaDRaJcUdYC3xGY2HYeT/R+2O+3OpDlxCr7SFIh9FNxK0XDcjFA0G1VCZ0IyVqNLIFu7MH2Yt51BuD0vPajs7YfoFJ25V1YuP3bZ3p218R02rN2GMUFcRI2BbhJ0nHJcD1UnSeH96ZtfUvomGEy/qyUu3yhwnAUlgtlBpmW7b2BeytoI7HJ0mR9WPyAIFBZIaTKggOoIfOEtAN39aIgXlzHmqJFkKm5asiMOIHSiflWFhL3UKMj9iivCSCyHQ2EZLZFGLhwESiehnh7JU+qN5XHqZHhxbWywlHkKWGw6cH2ADCecc2nI9SgQeb5XPYmIk43ftvifRVPbMru8V9aA8LKnDFFEroSFilAwh6rKoEn8xfYU9y2upSX07LaAAwC0SSIWU2l4T1HcJgQgegUBZ4z6O23X/7IP4p6/C4h8Nl4z6lifUXgJL+YB1sOsHwPwtosTZTXL+MNvT1WZbX7Dsqx8qJuso8UgimYcJ3X8IKBnunha7OxUt/pcXSEzO7ikYyEm3tYpcgHBXO1uN6G1ToAkPLYODI3/fJWQ7zBQxYJbEEL93I5c3zfzCTWgRStEWZ6taN1mXCKu5xXsAVQ5x6+zJXo1U2G+A8daZSvbddP+gWCxSB6mNLu2idfbQ5kY2wCuvTCmhMm/9OY3Mhb7FLjusVOjBQntj13cQH+JtmEvmSwP/ye1DfglaADFGaA9qvAlFO4O0Q+1XWLH/45cypj6LidbItZ2ARCpHwbs0Cfn2tp9blHXy6MiA/7og36xLp9TjY+beHy71bcOpdLRpYtix2fVWAh0/icNQWRH4QrtKneUucU4AAMUL7aV4U1e6g1HSlA2XJiHTw8RtZpIdnOdxZ8UEnZ5BRyQoLIxjF7tLK62q6uG78GOo08GnaP6tHDMxTsRlMRGDtr/H3E8DAWdHrbuyPlEuEG3IBgmwxqi/BvvktZKgHhbAaJ+6VIVjCwtxQyrh/jq4+C+RwJR/skdASbsbsmLtFwBNa6HD/NpjcUEYqyT8bDWrFkgDwWHQtL5N1E6JbvJyJFvPG2jKBnXkk7Vo8QuOJNprjXzJ0hy4/wvw0wpeMl9h/o59cBlmKzQidYZ4PFDgfHGSthRSKVF3J8D4jtCDjj4nlkug6fJZWUUYt3aZh73ZeSmT8U8K3Pdobt5hAYwg3jY8gQwh+WFqFPcqTu+MA/euMZ46ZbO0LkBhTDpG0uLT84tUQp7uunc7ypiEUaK4M0vohXUZGf0W/YOD0QF4NN3qUdUa/ziGY7PBbAHb+0pXKRLsL4X6LmuGQavYd57dnL8PeoJLDDxvI3aT4cOltZ/xNByCczk8/axfSbllifHnm/21+EnbV401fokU2l2c2jjfesZYAEFaUPIupc3tiWsJJq0L/vw6y/FNPwkrrwOrYVFNL4fTIzXYbAdQWk51razQu40Cz6SJhFoH0w/V58+MaKgcHEe1XO4Lxb7OefwMcemplBUMBrOQ9N2a56X5wCUEfGlY+lv8k5oiguj/cfEOkuXbA8hNf1sfwgkvijY9h0f7d94bx59+faBUNoIL0VyxvCYL9fS3G1t0dsS0leuwQy47xHfScUE0zcK5AXSiHiFoOS57GPMs0DiMfK+F21CrOtkKi2+4XsdHhxvmyYxO7vVrnT5LphxKyvppI/d3Rb6D9E1qyDvZFUq1lQV3FRYSdNpahGWZuGfDnM9TBMlB8nM0T0UIPi7Cvz106sZsg/96AaUjA2aVi05YHS+eiSoTz5xEj8bayaiKWLEl5hEfKzd1wgeWQywZwjIAwqzO79bceo6T18bTP0H//8lOUVCAtHOBrXDR9niW0z3q5nsDQdt4Xq2LQc8lN8zfO1DOUC+aoEo6ucuY6C2Ogmv9QsbH0yE9MA/4IflpsZ4wxz9oNHXCD0yn6mSIcZnNWB56EFb8SUMFkirvxvIqX1ENBonMABCWVp2pP/gQm1r+99Qi3bsf0TaLzTIIdq3Vc3e3LmlcfY7VGHJe1XAzCv2KhzU/yAS9i0kMBR6ZjaksMUvp2xVxFXZrXGXuLAqW1mTW6a1j160QFLb5VdAVc3/JtFtLxuMaZMXclGo+Ff7+L8wAFTje1UTFOBNErR3NtL4GBGNqen8VzCR1rFIf4IRiW3IrD+5IWvru4qE8m5hHFgrjaSlwTM0ccd25eF5D0F9aJe0/uh+smQu3SBIjKCivwfmZLWX/9E9e4OJqkyNXYrqopvfkl/3C/zTwirK1cVviu+zykR53g7JEOyO/4xOOwjkW+pZmheEwJEZ8tz5G70iQ49b+dtC2l8C5021kAF98KzbTgWgJkQqQbyPSepov7LdDU3r7i7cSNRxIGAddYQ5tRmA9mNAhXpiiwDRhGTaE33DV5eg5FAO3T0casPa1uQWknNZnK5HlRer3Cy2xVLFqLO6/5+lpsyt15IAqh7mdBPqdXikvelpR34E3wq4X9qY7nTzBIHxdrrgfHrfu0MApQRgqqPdWOE29jZp8S0wQEgAKCRgdcfRkgIaDQjK3AkRIAACAAICAwRqqoQR/dX40np0TweE6lqrqO6eOtf0FZiU1BLtpMU2dKsPasQH8DD//+72OqG5OXKDxFGSwutYLAsNnDJpZld2B+jBMK36Jr/HPVgaJ45N9NQ5akbsY/H9ZS+vxcJ3hD8TcH5lSF2Szc5HXmCNUyi68qHIW8m3fJaMT6lGdW/5HnvU5OjsHpUAwZ+db8sYWKcYgBptVrpAj+MeEV32///////CgQfiZXgPlx5uj2RvN7VltXh/enlIm7q3PVspLBnivI8h/7Fn4GAKr/4PKuu2gYtOM38a0YQ5Ph9aP/////4uVgBkwSp6/5xNkm4epW1rx/tiIMS6iDJi8C1MzSliDpOS0/ls4nGo6bjHYvXb+CiUYm6Wa69qVufxf703g2THAdHAhTywRO3NJjLsUAAAABkV4aWYAAElJKgAIAAAABgASAQMAAQAAAAEAAAAaAQUAAQAAAFYAAAAbAQUAAQAAAF4AAAAoAQMAAQAAAAIAAAATAgMAAQAAAAEAAABphwQAAQAAAGYAAAAAAAAALxkBAOgDAAAvGQEA6AMAAAYAAJAHAAQAAAAwMjEwAZEHAAQAAAABAgMAAKAHAAQAAAAwMTAwAaADAAEAAAD//wAAAqAEAAEAAADIAAAAA6AEAAEAAAA1AAAAAAAAAA==",R5="/assets/hero_img-DOCOb6wn.png",k5="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACQAAAAnCAYAAABnlOo2AAAACXBIWXMAABCcAAAQnAEmzTo0AAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAL2SURBVHgBxVhLktowEG0b9vHsYDXOCcJ3z5wgcAKSE4Q5wXADyCpLnBMMOUHImgKcE0RZkV3IAYC8dklO4wxYdhnzqlT6S8/drVbLDuVAo9HwKpVKD8Xh8XhsIPd1V+g4jkI+X61WnykHHMqIdrvdB4mJIHEOCuTGWYlVsgxutVpjZJ+QPIvhPKZfr9ed7Xa7IEu4tgM1mSdTh5R2h8NhjNxfr9cOJ9SbSCO0KTH1Sc+1gpXKsOA7ZDNTx6YBsscwDHcvjYeN+VDXBKkv5jxg/IIKIvSDtM3g6+ebzWZgM6/ZbAYgNdRVBSm+TpuTqjI2YkFGIT2SJTB2hMxI0YfkemlzUglh0bemjK9dQOyKLKFVOo03c91h2hwbo24IcgFlBGznm6j20sbbEJJHXFF2qCyDXzTqbrfb2O/3RjITQYpt4g9lg6fXYLAKIxuEpw+Xy2V4kRAfVwycQTU9KgFsk/jw99IuHUkGRrchOy9cJHbaR0XSqppWkPlqyLAXBvs5XQlY3xNO08Pez8gjHxVJSF+Yz4YMUjPL8c6DpEaMJ3c1iTdmIEvm2mQYeo/A1EEu8nfm2Pv0j9CCysN3UfZiQiDhm1aITskZfFMjHZEmlBOYO9VrjGU79o0vZ7armFAKjLsfUX58SKwVAUdeiaofE+KYRnTIQSyxjzofU35MdfwUJNpjCUFakYSiU8biFATuzsU5RYNjcxjzb0MO4cndf4Q48qMSkRSGy/5A9CsqH8oUoLZXbrVa9U1DIhYuC/Kk3VkH+ddCQgj3LvTmm5p+5JUK6YsQaXgsoXvRX8rpSuDEObrnOkuE3NNnQr6p3UJlwE9R9txL91gZSN5nNz9lyfvMvXSPlYST++zEhkAu64uiUELENiR7yrpUL+wZEVKmZvP2Lhr6z0oEaChkQoFpQCgwQ8Cf+v4uCp1Op0finxNsKHQ4JkFhI4//LaD/rDy4rEMUBje66SWZAb9Eon+Mv4BarfaFjx06WHQ1KgGaCP+uiZ/TfwGEUnnMaG3eugAAAABJRU5ErkJggg==",x5="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACYAAAAmCAYAAACoPemuAAAACXBIWXMAABCcAAAQnAEmzTo0AAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAFRSURBVHgB7ZfhTcMwFITPEf/JCBkBNggTUCYAJqAj0A1ggzABZYHEbJANmm4QFgicwUJVlTq8F6Wkkj/p5DaX1Ff7pc0zEJLn+ROHB8ElDXVjra0F1yCBHEkoR0ZdQ8gZ9DSUDfgZlUPJqGDcnvtDJrc8x4hgmq08CoZfbAFZDdz5saXWgfNSauFf115/wX3uygX7xPxYuq0sMC/cir2Z/aM7K8jatleYCH9zVP7tI+da7fqzLf4YTMpsg6l++Vm3GX7+M99ZtOuAX9N/gQLtirlJl9QrQ6QBvzjgTxbsd7IkSc4V/iCx+KXEYFJiMCkxmJQYTEoMJkUbrPFjW5blNuCj67oPKNB24s/U1hiz6TNdY8HHnW+/qqoWClTBOLGbrBg4J+gPEYtfykk2I6lvKqYi2AuEgl1QG/wTfVupur1H0uwf6FuxS+oWx6Pt6z2/APN7VZph5zBWAAAAAElFTkSuQmCC",N5="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAkCAYAAACJ8xqgAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAAEJwAABCcASbNOjQAAAGASURBVEhLrZa7cYQwFEX5RiRbwpawLoEEhtAVeN2BOzCuxHYFJMzwSWjBJVCCIzLA74KQWRAgBGcG0GOGw9WHERrIsizM8/y9Kw6iJ0lyN03zk9Wh53kfrK2EQbywNgjxAtZWwqiq6pmuP32paUh7RKrjFEXRxXGcgpo31KCu69cgCL5YKU0nBGdJuRBQV6/UZUiv/Z390gchEEnbtn3yfZ+P8xoGu3IoTUmpXGqW/Z1OWNBa5UOxxizhwDRp0zS/uq67W0kXhUBFuioEe6WbQiCSYqIw3qjHzCZFxHSi6HO90FHgRajHSCUcmCallCWldcdJdwnBlnS3EKxJlYQgjuObZVkFxhP1IJWaFBG2bWu0fFj1j5IQXSZZRMdDOqUunzoppy4bGRmQEk5lJFr8njeFe2RgVbhXBhaFKjIgFKrKwEw4lQGaUbVNCnuzQHaXlQEuHG30U9k3K6Xouiz6a1CRAf1MGTDOlAGDlgR/mDaityMyDi2VME3TE36JNe0PEvQ33QXCa5oAAAAASUVORK5CYII=",P5="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAE4AAABOCAYAAACOqiAdAAAACXBIWXMAABCcAAAQnAEmzTo0AAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAR1SURBVHgB7ZzrbdswFIVPgQ7QDXI3aDYIN2g6gbRBsoHUCdIN3E4QdAJlg6QT2J0g2SDlhaVaNUTy8iGKMvQB94dhiyIPD5+iBWxsbGxsbGyk4QPKgHRc6/ik42ri+zcdf3Qc+njDwiwlnOrjBifBfHjp45eOJxQg5JywQK2OVx3vieNRR4ULQ+nokF6sqdjjKCBhxSjkE8wk4Krg/uo7lhFsSkDCClA4Zja2wK99OinS4mhRMPcIE2in4w7HEfbKkDa7mAeXLzoedDwH3IuvIRSGj2gsFhf+BnGQjhp+riyu6SrIBGvgP2eTwJXQYaXi2TI+l2Dn1JA5kCuRUAgK07V7jfw0WJnzxq7jfiyHy0zcwr1K4QFjyTz+Q+HUNEuA4G66D8gA145y/KZCWRDc4t1iZnhF0GF9EOzicZOercnS6EYK64MHqUWa7LjjX6PrGNdEXSExKsdNMjE2wHkkN0SX4yaZINinKcnmnYSM1s5Egwx93Q4ZrZ0JHkFNrks2wu5h71AJ64SdNVtLUnCv+XaIh2uYkAZpH6UwY5kauIWLtTZfy2tGdjYhjhbHPFXC33cwlykK29A9jgZhDKIN6cSI157lSSKezRhXiED6DDTEdeeixYjXGvLlEk/BXCaJ8JO4ligxrjOJFiJe68hX5ciH6brgaYmCn3BS17lE8xGvFaTTONIw5eURgdSAl3CSTEpFk4jXJsgPs7PcO4gG8gJKXOcrmk28VnCdRDTmAQUIx1FNpBUq2pR4reD3UtFc5TTyEWE8Wb5TOn6OPrNoHdwT0wPMzZL6NPhY1x3stDq+nV1Llt/bvgvCVBM+FpY6rYJsizvEaSoivSCayAR9RBsghIvXWPLSBaQXvHq4syTqmnaEiDZA8BevceRHeabn27L+o7YkauuvYkQbIMjFc4k20EEu2jsitsxsKwdboW8FmarghuAWTyoaoyAXjSN4AhyzHKkRJ9oAwSyej2gDHeTCuUZvK6ZMPwuurREn2gBN5CNENEZBLtwNIrDtkkrWpTXiRBsgnMQLFW3AZIaQ8hmpEW/lGmmORRAim09PjRkHhgHbQ43oxBfEtc+YooKsHarCOmlgF46QAIUZLb0Q2VqSzdoK68TkugoJsVl7j0JONXoy5bo9EmOzNkeWU40zcG6IpG4bcB2Rmv1U4wyMDZHcbWNsi/eijsB7MEzyZ3HbgILddVxrhHVBSHOMw4ltGVaieC1kT9+y0MEt3hJ/DBnDYvzAqRspYuQnyBbLLZaBkG5HJTkEmXgd8jbdFtNTp2Jcx3BzlIjHscO8Aiqk3TGeHYLfw5WUArKDeCejE967KNcxBP8nUzwnZAco+EE47qmxWL6v4kiyXcSkfGEL1yQLcY8wXmB+kw3h2C0Qwhxz0PG1v0ex1Ej3EoIUsfTfP70g2I/554g94v/3vxiE/AKyYBUuBMJRQC7UXIJ1OL5e42LhwqUSkcVqEHlCPISUo2oI1318xul1aOd/Fnnr49DH8Aq037jw159tbGxsbGxsbFj4C7XOZoyRzeTiAAAAAElFTkSuQmCC",b5="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACEAAAAnCAYAAACBvSFyAAAACXBIWXMAABCcAAAQnAEmzTo0AAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAN4SURBVHgBzVg7ctpAGF4BRbrQ2TMuopzAiu2CVMFdOucGOCcInMBwAsMJwCeIXaU0dGQGiLiBUpF0KhmGR75PrMhK6LHi4fE/s7MP7e7/7b//a2WIHejq6qq8Wq0qKGV0TTlss+RyuYfBYNAVGcjIMtmyLDOfz7cl8yTqLJfLhm3bjjgkCACwcMpnNIuaSxwAudYBkhMaRAkAwHcfACThgkEd5cNoNDJYpHQ6yjKuecbaVNB5oUFnZ2dtVCUJwEH5iBM+/QH5c9D8PZlMnk5OTsaGYXzG0BuCRnuK8V7S/qnXIa/hl9/H6d+niRhLqlhzL7uuXOPGzU+9DmxWUbodnTvGnCakZcsur+NTIg+RQhCn5bdxokehSVjX3TDJ5SyxD4jQxm6G6WOlbYpDgYCIdc2T9FZpu3uBoDVsJqeINbSu7LdxjbbYB0RID6o6dk+/gqv7ogz19gIhN/DFWVRMLw5AUXpWjyCRbppFpTorOKEpHNBf5WTW6ekpy098C9w1AxuqH0JRRIC4Ds8LU5bYcYcT1gOL12boSGbUl4DO4CqrkEIrbe+sUXQLSBQxtqAQwIPQoEwgJBAq3X1I8TbMMc4w3tIN4zuBUMAwOJ2DseltZBgMbOOkGPGqaWdJlEolk/VisSjSkxYKBWc6nbq7SEILBBnOZrMbBrNQXhlFBOGg2LQegOyl6UcsCOl0KlRAjZwykaQpt4bD4aM2iMvLSzKmZzRFDNESxPrUfuFcKmuSW4/MOwMgpMY3USoRDG3UPAnduBN394rVWJQiSjliWgN5aX0LhOLzLZU5ShPN1q6mJ5PkOzRvQ586API1AOLi4qKtToTYyLxxKLuPcXI1AGkaEsAtqrYCoA7mDXEEAi/qWlV2vSTYC+UQ+Y0yr3MsACScvMbwLrtUgW8eCFV5+HwTRybw2wQ2KrCf1GzMKkvg2ZVwekfpFjMluoei+XweUHYfxGZQJ4fclyBtm8pPv4NSK8hxR/z3D6y74sikKr8via4/QFt+CWmo5IFgJqSA8B7AiB8V8UKkuu1qRDrPdK3Lxy1qPvld5g380O/3nagN/TwDymficGyfY50p/2nUojxwOIBVpZ8/ynUAzC3C+VbyGzBRPun59wXNjvr8OwRREkxwor4lZlb8QYLqHaRTlgktJeTVcXmDAt5h8ivW8YFv0ae4YPgPspPhtg0cN1gAAAAASUVORK5CYII=",D5="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEsAAABLCAYAAAA4TnrqAAAACXBIWXMAABCcAAAQnAEmzTo0AAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAenSURBVHgB7VyNWRs9DFa+CdiAbFA2IN8EsAF0AmCC0AlIJ0i/CRghdALaCY4NKBPo83uJU0dItnw/SfqU93lESHKXs9+TZEm2j+gDfzaYeRbkIciUPqAD5ARZ8W80Qa7oA78RCDkJsmAbIO2C/nYEEm6DvEp2Xl9fNdKWf6VpbvzSSrKxWq347OyMcch8PuemaTTS7g9B2oQGROjAZXi5cRx6EuQs/eDl5YWur6/p+/fvOwdOp1MKpLXfCbxspIjJZPIvHRM2fkdVgxxgbtCgk5OTVpssCaTx8/Mzd8Scjgkb06jCcrlsSaAMSVKChlmmmQMc4An1xCBmyGv/0cT39/f39PT0lD3n7e2Nfvz4QV0QtJA+ffpUPO7bt2+tGW+wCOZ4R4cGr0epFrjrVKEpY8psNpMadkY90FuzNg14ju/DSEY/f/50nRs602oIzoFAC6A1EtDAX79+ta8YAPCKAcGDMLq219ng6aDOnhOnDh9Ejrv98PBgxVFuIMS4uroq+jx8LzCjQyBc+DptRa7hNzc3fUazLEoDBW5OgoYHcPZV4HUe18QWYPjXGnp5edll9BqUNIQlQpMfaF9gkaJoTh2NhqnsG2jL7e3tu/bgM4Elj5kFsJGiwHeQ0CavT8Jx0AiY6cXFRZvqnJ6etoL/z8/P29+HKdWQr2lZJnUazix5bXKP8iq4uCQqxFjsIQhmCyKoMhyASSEw9RCH9qWE4X+QqB3KfUtBvE5h0PtXrbMyRSkR5U1tvJLpvElYPM/QMnxYH4vxeqR7Z0uWEy0RBTMaiiQpMNfcIKIRBsmkTkuuMU0Wvglqb5lNjig0pou5dRFobS1huIHGeefkRUqWFRbQxplbQFxVmyj3FWXU22kPZUxaaFk3sizNyNh+27CxzK4kMC8LcAfWeWLQGJYsy7kekigPYUi59kqW1RjLNxxCLB9mmeNoZFnmdyxEGQRsoUX5o5BlaVVuIBhbcJM008fnWjaBz/ZClqZV+OwQfgr+J20POiy12zJHpFejkqVUH1vItGcfgmBUg0zslarDlthRydJGwEOUki3zipAjnqVdqTUIst7NgP9jEDULL7P4HiXdiKREu0VpcmJooPyMcrFWgo4IVYud91+/ft3pR0SwiO3/4vtb8oCNUrFlgnEGeR+SC4RTaCO4NjKmplhdguakVAw1T50lak4S+zRBmIynNG21SWu/HBXdJWgulIofH9+VtNrPSpqA/NGKmmtEu75GlBXrKZrTAoXG9IYIXzi3yFqkFyWHGuNuWZ0Lk5w7x2rDulc8RUVP9qANCjKEEMk4TphqWrWFFgp4LhRlsVh07lAXotA2j+/UzFi74UIxlpKsZfxGxh9RNFhJdqkGr6UbmuRKLilg6p7f00xZyzyUwWwWiXLN/2lI7b10rAQ0JtexXK0sRc4VSNHiRCtNE8SuYpx1GjUMsYZ3ajwHT+yFdVfBLNLFG1tgOj90rPgbWISCGGoMiD7M2r+8nph4LTFdo1lWTKZBm4XxxFJdEnevGSptmG9p4/XEaQv4Gy0p1pCrr8sktwT4Jy9RnnUVmmgjukaWGFQakuAkxtLKr1onSgm0t/MRnsnZPpVYTx+UeOxKI2vHdmQgqalwrqYdBR0TkXFn9KnEoh0apHWIQeCZLHBSbZAhhNZhK8zQJDdVNTZRRLYfTbVUGYGnObKgg1tbSFXUqpDWmEStH4uQeWoX0W62rMeLti2phHDQPB6dVkAtNa4t/NX6MWCIyoZ2zXSgEAEwDp56yNoJJVKbLpU5+t5pDUNUYS0TzPRtTl6wUSnVyhxA16pCyY8NNQniqfAOXlb21rNrxFrYMRRRVmlGxmqjzO5YM9F9alZx+RAajBBlyAkQqw4mB4xRyMrNqhx62l6KNYJrGcBoM9KWdnmC1H1JbtTVwpDRyLJ8F+CtVY0paJ9FlOULR11FkyvMHWLSNSXKmtjIuYpRyYLkJhEOQVhpBiiXBQxClrYqmRzqDpSqoUNKKTOwzA99UOYMqsh6pzLQIu3OlBrZZV9hrcAl5Mo7FlGZ8/xkbQiDU2o8nS8RZu186CuI7Upr4q0JCaO9K+661Y7XVYil1nmtaFZKkON5fTXNQ5JGVGabTMO12lQgTd1l0aV+DsRI3VNRgF+J2++8vy9nfYz5R9jgnMYAr6fNmvRqWjRcW+iD38AohruO34uC97XlHBwvb4CRH6LsMf52Ok5qXoCWF5Z2PowBa7uLyDgaHsrkKghbxavnqg4dd8xXIbeOQskPp7RvcKYEbTV6yD2IMF34sNJgUV0qHgtslKBzgs5F4mr3SuMaIMi7H6hTqdjAELvv4SAbWj8ypZ1O//LlS81PtFP1WNZo7b7HcgLs6MerttTRQlxOmSwPuJ1MJuPM9XvBmdWChxTp1KknBntwT2jMijaLJ6ABpcUl0JC7u7tOi1CCadHFRflxWmKx8HXQqv/oGMBiNtsLj4MmKqYoJTzSsYGVCN+DXFWDaJCd/FMaAEM/P2tKyVqvAu4pWWsPwCQ/f/68XRcFZw+TC2mLdPzw8osgT1TGWzC/bk8IOiawkjoB8dEFRlixnxTlWMHrWK0UcK143ynKsYKNUhB/PH7TBv/euNCWTo7J5P4HjGzy6NWNlJwAAAAASUVORK5CYII=",L5="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACcAAAAnCAYAAACMo1E1AAAACXBIWXMAABCcAAAQnAEmzTo0AAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAANlSURBVHgBzVi9ctpAEF6JxiWdx5WVNxAeF3SWu3R2myq8gSnTIbqUdpnOrjKpEspUyLVt0CPIFXShTIYB8i3eE8dxQsKAhm9GoPvb+7R7t7d7Dm2I8/PzYDqdXjmO489mMw9VntacoD5Bfey6buf5+TmiLeAU6eT7fhWTNfF6g6dKxZHgifAx7TiOE9oQzp5I2dDu9XrhJgMyyYGYB2JdWjYbwWQjmO4e2ojwH/f7/VdtjI+/U4y7Rr8A7Z4hNsG4y6JadDKI+UKsqpGK8BeCzCMVBMQ0QLBlkBwJwThvvJNHjDWFJ4SsO3onILIJmS1afGwhgo4hhE3Z14jxzrt8z2K2EPSgwa6mRSZYWyfbXSosa2xnxBgsh+WxXKnizdblTUd55M7OzkKSxS+m3BkxkyBeR1LFlrrJ6l/hH1H5T1UJAV8g6DftAcPhcHR8fPwP832UKh/lb6j/a/ada04WqyKWbLP4iwDyb2X3M6pZ2lNmDWhBLqQSgHnaWrFp6+PIWdmVAQn82AcqCVjnf0g2oLiWSG93+RBXBayDiMrFvXqBaa/MRpejC1UA0V9UIjB3etrAar7Z7krYo/BKJWIymaQnhOUcnm+ItLLIebdLGH7UM9tdOmAcPLlEFWq12imVCIn/FBKz3dUOYuuO2ScqlYqnzZ2Y7exK0k0AXxNQiQAh3ceubEZ2wh2t3KByEagXEF3xsa4cGSqEqWIZBFQCcHQ1aBGiJbbwX+3WW1XBMT+Vg5Y2Z2TrMCcH03KINJKOAb6qSXuEyPdUmfNaW795sMmB3snJyREt1kAdAeAPDgxpx5DA9jtej4QYJ08dW9/UCbP2LPG9RzsmZuYpINbO6p+SQ6eRJb7fGUFbki7zUS45ITjPyA2C/W3XII+XlNNbmtx1G+vGFc746e0GKXx5eXmgguAoG9pp8dWEqpPrDF1u5h3K2rsSIwlOSeLhe5IOPiB5enpKPXu9XvfG4zFfjV3Qm0NfyklVLozXzxgb5hHMvQIDyZYhaGNIHsy+9I7XdobcFYKVPMFwJ49wKw9sCkxQNUxShNRXvH7iPFjPTUXu3K9KVQB35gwGg0j1KXR5qANh1QUEXksE4+lmF1fEazPms7LIjdQ6DW5Mbh/IIphr1jKQZeKDIMewETwYcgydIJ+5/wFYW/TpXDoMoAAAAABJRU5ErkJggg==",O5="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABoAAAAZCAYAAAAv3j5gAAAACXBIWXMAABCcAAAQnAEmzTo0AAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAHASURBVHgBtVZLUsJAEO0OaFmuuIHhBIJLyg/ZWIIL8QTGI3gCOQKcQG+gLKwswVLLnXID4AbZiR/S9owEyWQSJxZ5izB00/2mH9M9QcgIevDqYMEZzKiH+81b0ziEjKAnbwQENq98+Hwvo3Pqm8RZkAGyGkkigCUoblRMYzMRScmWgXQChshGBFBXvrtgCGOiqGwhsCTtqySKybbgMpPPiIheb0oQly2ES33pT4U83oveSKaqAGElJcuYn4NEv+g5mebRI8gV5P9IR3JHOfLgnOgLnPzIaCjyR0YQj5dLJmzDykAd3G1eiFVs1s374oo9NvwXQp0CuVhr3oem2PHGvcZASoloPJkVcPy0ukwi86ZFcHWjTJVxJbzRss6V3rCIRleACRIromfPhhmMICs2Axt3jieqObkiQuMrIII3y9WZk4kC8ysgAtLPRC2RlE3MN32mDmBQZdHbej/U6eVuSzUW9bmEbKTuVO2NIZ9KsY733LTQ4md32aSXLqCWYtH3RthzANd/xCdU9FuFDwVsY+2om/QTdBpj/jjn8TVejC+kWFtojzf1+T9ax234sCboHA7BEDJujQ74NaynvoZ9A1WXpcuUkbt/AAAAAElFTkSuQmCC",M5="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABoAAAAZCAYAAAAv3j5gAAAACXBIWXMAABCcAAAQnAEmzTo0AAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAHESURBVHgBtVVNTsJQEP6mgmtuIO5cGC0nEE/g74KdeARPIDdQTqBLEwXhBnACiBDjjnIDgiuBvvFRrOnPezhN5EtI6XSmX2b6ffMIGcGXbhmKr0CqTY1BS1pHyAi+OBjpS1H/JvCdXWr1J5I6BxkQdLMiWaKA3MKV1mYiAuuRRaGcEwiRjQhcjt0SqhBCTJQYW4gCX+6XJfXyjpJjCyEcn0h1fOoWsKV6SHe0hEh9AdGvN+xUrs60K4zh6Vd17Czac0HexQFjs5iE38jDJsEhUX52vDEyRh9qdhwTA5/v34KcGv4LzPfUHNws/6ZUF/iCnQeYFSYk0NNhrtLroBuGjPLmyl4R8/ydfnyK7Cwd+J9n1PJicl/ro8imFnLAo+bbrumR80eh6AiQwNoRV1w9PjVCVvBWkZq9cTJs72iuxEdAHH7VFLUTsfwIiIESR8k6omBstt2mvQF/UQKrGsxMZT4v7SSjOWOuaWxpb/S157pGz5G/tEU9GrKMLukf7Q01LUUNGGS9DDur9cWPifyU/8wdQeFHkFreqkaNYR0W0NOHpy/Xen15kfWVsoV9M3zlD5Hzx/T83ocQq42yfQR/2k5uhm9CG7C+Nfr7TwAAAABJRU5ErkJggg==",F5="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEEAAABBCAYAAACO98lFAAAACXBIWXMAABCcAAAQnAEmzTo0AAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAN7SURBVHgB7ZyLkdowEIb/u6EAOkCpIHSAOjg6wB1AKrBTAUkF0MElFUAquKQCu4MkFXBabM2Axys/JGSJ45vZ8+D3/pJW8sq+J9yeqTKpbKZsXtn0wjT/lBXV8ndlf6pllJCjmbKDspOl/VW2U7ZCBFCpruHG8TZBBAKDnM9Q3uDJowUjhlSWw6/zwYhBpf+KcZ2/tBwWMeMJ/ZHor36h7Igy0hfV8j/KnkAzq86pe5N5tezDN2Vfa+d1zgb9gliK0rmhkCAvKEXvUysEbkTW8SYOyhZwj0ApRo6RhMg6XvgWztcR6FYznAqRdbjgFtejPx8ItNcKJ0JkCKP0OUj4LdrvcXABSXhQ2REp2uNUbwTMVS0kATRtQmzQkx3iEkDTJsS864kSxCmAxiTEoetJTM1ggTggZwc3i8RwcIp4EOCfamm9sbfgakGO+DAN8dkCTQwHrRAnXLNgC/UNlsEkQCT4gpX1nQXurxZouNrwWt8xxf3EgjqU9+wUILmmsEb8kKNcTyEvd+KaQucRVuDs0OzfVu8gcb9NQZOg2UdqAXgGPwqMduangSOzXtAfEmHe88AYKdCcfKVQMHsGP4S8p5pAFMz6+QT8UyGlr+vqkTA/EW4toQJdoazdorZNGI5hewaT5QhrEEWOcD1Am52HAScL22J8qNSpUIb6kAJ2IpDtMB4C9hPB6TPsSTAgf+cAagIHOEj1uxCBoCrle96BhBdwwMSwTdZ+f0LprGjYV0fl7/CHKTDvlf3Ade+WVNYI11aaIGdDyDtItET7BlI4igmk7Bdmm8+Hrc/M+iMG1MYhMeHIrPcZE7hrHTEAV4Exah4i4CHCmYcIeIhw5iECHiKcIRG4d/5kz/U3fXew47UkeEzb2BkaGh7XByX0O0fYw+ZVw/6tk7NrtGeQZLVf3vPit8SUR9hV97xEe8bpLMIU9okJEkfALyns7vlKBGIDuxONMV1napqDRCD2A08yZp6Rnlyt02v1k24RjwAaJ4nWOgm6vS67RDgIWKTcTd87LFA6qpMl+ms1Slv9QpgIlL0CfR6gu/cC5aTREs1jhQQfCK52L/BBEOCbg+8s+Whw32ud30+YIEwk3FRTKmXTt1R7BEoG+wFQVxMIEAF/AqQIFAk/ArwhYExv0rmyAyLoEWwf5jijZ4zGB70hX8j6gCL6C9xQoOX/MLwDomnC/jzse2YAAAAASUVORK5CYII=",V5="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEoAAAA2CAYAAABgMA/LAAAACXBIWXMAABYlAAAWJQFJUiTwAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAADLSURBVHgB7dmxDcIwEEbhC2koKTMCZTZDlHQuKTNCVmEDj+GOjMBZSJAGxbJdHPH7JCv9r9jN60SN4+j0c9FzEqwtembv/bXTkSZ5j4TfXBzqKfxJW5aDIEkcahJsmfsQwmMYhnj1znqOgrX4mN/1Mb8JAAAAAAAAAPytTgo00AO/XU8yNdYDXclQLfVAul6qkqFa6oFzL5ka6YF0PQAAAAAAAAA7UNT1ajPYCcu7Xm3GO6GzNJTlTkjXS2VpKMudML/r1Wa0E3663gvhCDx/4CktcwAAAABJRU5ErkJggg==",j5="/assets/about_img-BAJyTXw9.png",U5="/assets/contact_img-CyOum2vk.png",B5="/assets/razorpay_logo-DrY6yMWi.png",z5="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFYAAAAmCAYAAABedGw2AAAACXBIWXMAABCcAAAQnAEmzTo0AAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAj1SURBVHgB7VppbFTXFf7ubLbxBgZTCq6jxpVoIUqgTYQIqmOlSUppg0KCg/FCjG3coAa1UFVVpTQuUZUfVaWmbUoTjJdgsJO6FLrJKT8il1TQJKURjUgIi2lrXCu4DsZ4neWdfHdmPJp588a7wzjxJz29d7dz7z333HPOPfcBc5jDCERE6QdxjLge3Agq8yXd68AKpZDL5F0c9QpfP+6uP6Z6EKdwIM6xo1j2eA38lEyNEAK7EzbEMWaEsaWlkugysNbtQWd9kzqHKcAQpJiZOhswLYzNzxdXigubOPsvKcFa5cFdPiDBZsNOFk+JsbMV08LY5GTMU248S8laomVLgvlMC6Yf/2UXJ64Dg4hjzKiONYypM1YMnOViPcOd8JqRiNN1daoLswBjMrayUpzz3Ej+wIDd54OnowMDra3KG16np+ffyJiXza9IeyKTlNi8PHG0toLaREltkzrCrCOYJHbvlqTeXiRJFzy1f1A3MAmUbZRU73y4EgfhfeE36FVKjTkvS6NAZs6TftxDa7yZevIOZi0iJScrD/C7m60uUxpPJdjx0vMN6up3SmX+DS/eJRuXmEidYN75kQQZ/UbtYVVdVihFpJUXXnFIYW+iYClpf5PJ5eyvzzOAba5ErGHeRvMYez3Y3dys+sqK5CektThUYMDtceIHDgNZ/N6BgIuWwUcz9T27gcb9jWgeizklJZLM8TzkEzxiE3zBUEglrSG2ahfuHub96kCTej9W+yiJ3VUkWYP9aGCvebYwAQxbgc+RWWtsCgVuHzYwvX7YzWJr5yc3OLERJPCpJq11zK8Ir8hJ6AWr5OeCYH8elQon5XY1kxVmwmnA9/Wb43iYE80JFXAc9EjSmfcgiSSZmn3esGFjRTG2U3gK9u9X12GBihL5LFVQi8EF1vPWRxH//ANLkUPbkce8neXFUlJzSL1iRSOCHZUlkk2RfEVM0jQKXKEvmaJLpPyMWoBpAJn6KF9JMXuiMPhu4Eh5uWSYC8sLZDUl/Q1+LsfoWMQ5/7m0UB62KoxgLH3GJ/haiU8CbPiKGsKPwrN2FsoC2FEvmmnjpGJXeKGyWD4dTT6I3fmSRNF/LAaBDnZ2hu82PsOYPdA24X2BtRHV8y2i6htJDyt8l6/bLaq+xspPc/u/xN1gdvMW+QzsMTcIMXYoBYuomBdGkRQ8V3NYZdHorOI7x+fEfG6mrzH/CN/9ugpPWNZqwMC3EtxIHXmSM2hMRoPyG5gqSsE3aDQKHD3oxeRwjUzYfKkD6RzzEo5jHfMuRneHtCTlP8Rg2zZZqCx0ORn5FGnk1jSpqtpDais5VsBsdwQdhcd37ZKE8LyQ8SJzdIE9irBN61G/+vaven09NxD1sH605cQoYKvhfbTcGB/cNg/urH5ZnQ/PLC+alMd2nEwIuWh02U5tL5YttORvwqT+SH0TT45P2X1Yy+/FJgkZGL6Gn4dnfCYHf7pyEW/xc00YjZShD3AvP1tG8kKdGE5oC9lvGqBmZ2VZEY5XFEmxjgGElzU0qED9NEwZHNywmalToBW1g+oOqX9Sslqj6gqWcfjp9IBWKXM7wZnDLSpi1+zdq2iKcMpMh073HeHpkMRmZ6P7ygWcJOn7zY3Y230kdp/djV/Qxfib8uFJ+nD/gmky8R4p4RiP8nVveB7HnKISkU51cVvU3lC4kzvGyiVLtCCeFZ4MSaxeCZuDXoFCbKlRdIfoH1I9vFlRKNXb8yVTZ3s88RV9kliunxeXLXJtFME0tviURZkTgf1oflzmipSqiH0boW+qD6rzXrvf6f+d6GHEhov6s8LmwkF9ZEScIWag1qF3rEV9n76UiLYvE4JEdhs1hhdfVJeyOrCFK/AgnzoyeLQo/Vev/x9bUhFfkBjxW2UgO6quQHwKfWzRY1WGgAcw5sOKQ+FtLYMwewNBFr/lL31I9jhSsJGdPM30LeaxUjdt5lr/EbMAVGEPmD1aCk//oIHeJMEl82qw7Cpdv9XjIA3vDUR4PyHGVlWJ7col3JqVgzatb0fyg/dKB3nv9HtfAkN4tKKRo0X2gJvxWIuNZB//CWZ6YaFjywpkKV/3W9Tu8HpxTbnwtkXZYsOHTLOhHg9CqqCzk5ZO8Gr7RRyi5V8fdUxbgAEVfeqAssGr5sGnLE43jAhtyA8aOI0qk7s2U6Ck3bajUFaxb/9y001cohx4GRLtGFKCWhkl8/HgcxLRak9Ryvc9tlUsj/mkn1JZJA+UbZVHzGUO04AS2PlW/ZBTXXQ1zjGv09Ax636sIOdyED2y/7S14WrOsmgfmMhNc+Et0jmrTzntHn9w49uYeSynnv17qgtn2Xc/teBKynCGRT1hGHGf/uDB5xzrnuCnOUS5zmHDX8sL5XXO4TKFxcODRgbfS5nO8Wn1qPAcTDHj2IFugZa0TAl621bnH79yt+GoDnznFMppVrzVoppWHcuC7S/gIwL7S+C4v+hPqJiVjlY34u0DTYGkzY7viQ93WwRhFpLGBgmSEjX2fwNTu0JWOJbczS0G/wntx/DvrNkBMqndbceT4QFv7W4ygP84YO2WTQQhxiZf8/ty4z2Y65rHeAwu+2WL8ke7tILnEJ+YAI2ZhI5qxWYObwG4nTfxSP6uuUhfBTEY/nXW+R/GBz3fqJuEEGN/1qwGGYFaRcboCM9xBK4yzCSuK314MJBb06g2US9FKPsDjerXHNQ93CqvIlJ7aHZfUAEXTqONdU6GPyx/HRagjm8319XPkCv2AYZzaOG2Xs8BnDQVdbKfH3b1YSXHejpW+7oG9Rde/axg3W3clf9A9E7Ui/YO5/MsjdvttY3qmahxxyKu3S9eHGa63UjXYS+nDb2Zt+BquCs2GgoZNHY4kGm3w+vsQ/f+ZutrkKmiolguRlzNwL+iv2WYM19/+4PX9GlkEH3PH0XXSJRuIqD1T0p3YaHNi4ShBAwxYNMdjPLFxKz7w8QMK8aSs83cUY/iJiKu/3+aLOLBgn4sGTtDf+BMCB9Lxorp6uRmIO5/4xwLErDQ79FYnGFc9R1+n/AOMqZxkzHrGetU+LK7F4M1k/x9aA5zmIPGh+sBUp3Dt4WYAAAAAElFTkSuQmCC",W5="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABYAAAAWCAYAAADEtGw7AAAACXBIWXMAABCcAAAQnAEmzTo0AAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAFkSURBVHgBpdW/ToNAHAfwO64QR8Zu4ubIn8VRRyd1dJIESBjxCazvAQm+Qd9ANjeY3Tp2NCwMBPD3S0BJS487+k2a3pVfP/lxHEAJJAgCs+s6PY7jjJyRKIr0siwfNU3LGKJt2xbwu+s4Ds3zPCMLEoahUVXVF6XUBc9UoNPL4SCM33zf3xDJIFrX9ScMjd7RGXT4bdv2FczNvu5WpvMJdAcd3zOcFEWxXYKfQO/SNN2xoUgW56E4Z+NiUXwOPYJFcBEUQ8mJeJ6XwtfLXyGl76vVKhVBufAUDvmBjz6HYhgPnliWCxEUo5CZqKq66Tv9/5OibHnobMejC7U+OHQzt8+ZAGrgHE8fLmAGw+u+hLvPFVEU1zRJkieYfgx1vGcLE0WHNRW9iZgMOkQEZ7KoKM6WoCI4XYqOc3iHgvGqNE2jn4NiYLe4ZLRbYFs+4Btkb1mWDpM9oM+y6BBcFnRguMYH1i/jdovSfDk2aAAAAABJRU5ErkJggg==",Qt={Mug1:aR,Mug2:lR,Marble1:mR,Marble2:gR,p_img1:iR,p_img2_1:S6,p_img2_2:R6,p_img2_3:k6,p_img2_4:x6,Sofa1:uR,Sofa2:cR,Chair1:hR,Chair2:dR,Table1:fR,Table2:pR,T1:sR,T2:oR,logo:S5,hero_img:R5,cart_icon:k5,dropdown_icon:N5,exchange_icon:P5,profile_icon:b5,quality_icon:D5,search_icon:L5,star_dull_icon:O5,star_icon:M5,bin_icon:x5,support_img:F5,menu_icon:V5,about_img:j5,contact_img:U5,razorpay_logo:B5,stripe_logo:z5,cross_icon:W5},H5=[{_id:"aaaaa",name:"Women Round Neck Cotton Top",description:"A lightweight, usually knitted, pullover shirt, close-fitting and with a round neckline and short sleeves, worn as an undershirt or outer garment.",price:100,image:[iR],category:"Women",subCategory:"Topwear",sizes:["S","M","L"],date:1716634345448,bestseller:!0},{_id:"aaaac",name:"Girls Round Neck Cotton Top",description:"A lightweight, usually knitted, pullover shirt, close-fitting and with a round neckline and short sleeves, worn as an undershirt or outer garment.",price:220,image:[N6],category:"Kids",subCategory:"Topwear",sizes:["S","L","XL"],date:1716234545448,bestseller:!0},{_id:"aaaad",name:"Men Round Neck Pure Cotton T-shirt",description:"A lightweight, usually knitted, pullover shirt, close-fitting and with a round neckline and short sleeves, worn as an undershirt or outer garment.",price:110,image:[P6],category:"Men",subCategory:"Topwear",sizes:["S","M","XXL"],date:1716621345448,bestseller:!0},{_id:"aaaae",name:"Women Round Neck Cotton Top",description:"A lightweight, usually knitted, pullover shirt, close-fitting and with a round neckline and short sleeves, worn as an undershirt or outer garment.",price:130,image:[b6],category:"Women",subCategory:"Topwear",sizes:["M","L","XL"],date:1716622345448,bestseller:!0},{_id:"aaaaf",name:"Girls Round Neck Cotton Top",description:"A lightweight, usually knitted, pullover shirt, close-fitting and with a round neckline and short sleeves, worn as an undershirt or outer garment.",price:140,image:[D6],category:"Kids",subCategory:"Topwear",sizes:["S","L","XL"],date:1716623423448,bestseller:!0},{_id:"aaaag",name:"Men Tapered Fit Flat-Front Trousers",description:"A lightweight, usually knitted, pullover shirt, close-fitting and with a round neckline and short sleeves, worn as an undershirt or outer garment.",price:190,image:[L6],category:"Men",subCategory:"Bottomwear",sizes:["S","L","XL"],date:1716621542448,bestseller:!1},{_id:"aaaah",name:"Men Round Neck Pure Cotton T-shirt",description:"A lightweight, usually knitted, pullover shirt, close-fitting and with a round neckline and short sleeves, worn as an undershirt or outer garment.",price:140,image:[O6],category:"Men",subCategory:"Topwear",sizes:["S","M","L","XL"],date:1716622345448,bestseller:!1},{_id:"aaaai",name:"Girls Round Neck Cotton Top",description:"A lightweight, usually knitted, pullover shirt, close-fitting and with a round neckline and short sleeves, worn as an undershirt or outer garment.",price:100,image:[M6],category:"Kids",subCategory:"Topwear",sizes:["M","L","XL"],date:1716621235448,bestseller:!1},{_id:"aaaaj",name:"Men Tapered Fit Flat-Front Trousers",description:"A lightweight, usually knitted, pullover shirt, close-fitting and with a round neckline and short sleeves, worn as an undershirt or outer garment.",price:110,image:[F6],category:"Men",subCategory:"Bottomwear",sizes:["S","L","XL"],date:1716622235448,bestseller:!1},{_id:"aaaak",name:"Men Round Neck Pure Cotton T-shirt",description:"A lightweight, usually knitted, pullover shirt, close-fitting and with a round neckline and short sleeves, worn as an undershirt or outer garment.",price:120,image:[V6],category:"Men",subCategory:"Topwear",sizes:["S","M","L"],date:1716623345448,bestseller:!0},{_id:"aaaal",name:"Men Round Neck Pure Cotton T-shirt",description:"A lightweight, usually knitted, pullover shirt, close-fitting and with a round neckline and short sleeves, worn as an undershirt or outer garment.",price:150,image:[j6],category:"Men",subCategory:"Topwear",sizes:["S","M","L","XL"],date:1716624445448,bestseller:!1},{_id:"aaaam",name:"Women Round Neck Cotton Top",description:"A lightweight, usually knitted, pullover shirt, close-fitting and with a round neckline and short sleeves, worn as an undershirt or outer garment.",price:130,image:[U6],category:"Women",subCategory:"Topwear",sizes:["S","M","L","XL"],date:1716625545448,bestseller:!1},{_id:"aaaan",name:"Boy Round Neck Pure Cotton T-shirt",description:"A lightweight, usually knitted, pullover shirt, close-fitting and with a round neckline and short sleeves, worn as an undershirt or outer garment.",price:160,image:[B6],category:"Kids",subCategory:"Topwear",sizes:["S","M","L","XL"],date:1716626645448,bestseller:!1},{_id:"aaaao",name:"Men Tapered Fit Flat-Front Trousers",description:"A lightweight, usually knitted, pullover shirt, close-fitting and with a round neckline and short sleeves, worn as an undershirt or outer garment.",price:140,image:[z6],category:"Men",subCategory:"Bottomwear",sizes:["S","M","L","XL"],date:1716627745448,bestseller:!1},{_id:"aaaap",name:"Girls Round Neck Cotton Top",description:"A lightweight, usually knitted, pullover shirt, close-fitting and with a round neckline and short sleeves, worn as an undershirt or outer garment.",price:170,image:[W6],category:"Kids",subCategory:"Topwear",sizes:["S","M","L","XL"],date:1716628845448,bestseller:!1},{_id:"aaaaq",name:"Men Tapered Fit Flat-Front Trousers",description:"A lightweight, usually knitted, pullover shirt, close-fitting and with a round neckline and short sleeves, worn as an undershirt or outer garment.",price:150,image:[H6],category:"Men",subCategory:"Bottomwear",sizes:["S","M","L","XL"],date:1716629945448,bestseller:!1},{_id:"aaaar",name:"Boy Round Neck Pure Cotton T-shirt",description:"A lightweight, usually knitted, pullover shirt, close-fitting and with a round neckline and short sleeves, worn as an undershirt or outer garment.",price:180,image:[q6],category:"Kids",subCategory:"Topwear",sizes:["S","M","L","XL"],date:1716631045448,bestseller:!1},{_id:"aaaas",name:"Boy Round Neck Pure Cotton T-shirt",description:"A lightweight, usually knitted, pullover shirt, close-fitting and with a round neckline and short sleeves, worn as an undershirt or outer garment.",price:160,image:[G6],category:"Kids",subCategory:"Topwear",sizes:["S","M","L","XL"],date:1716632145448,bestseller:!1},{_id:"aaaat",name:"Women Palazzo Pants with Waist Belt",description:"A lightweight, usually knitted, pullover shirt, close-fitting and with a round neckline and short sleeves, worn as an undershirt or outer garment.",price:190,image:[K6],category:"Women",subCategory:"Bottomwear",sizes:["S","M","L","XL"],date:1716633245448,bestseller:!1},{_id:"aaaau",name:"Women Zip-Front Relaxed Fit Jacket",description:"A lightweight, usually knitted, pullover shirt, close-fitting and with a round neckline and short sleeves, worn as an undershirt or outer garment.",price:170,image:[$6],category:"Women",subCategory:"Winterwear",sizes:["S","M","L","XL"],date:1716634345448,bestseller:!1},{_id:"aaaav",name:"Women Palazzo Pants with Waist Belt",description:"A lightweight, usually knitted, pullover shirt, close-fitting and with a round neckline and short sleeves, worn as an undershirt or outer garment.",price:200,image:[Q6],category:"Women",subCategory:"Bottomwear",sizes:["S","M","L","XL"],date:1716635445448,bestseller:!1},{_id:"aaaaw",name:"Boy Round Neck Pure Cotton T-shirt",description:"A lightweight, usually knitted, pullover shirt, close-fitting and with a round neckline and short sleeves, worn as an undershirt or outer garment.",price:180,image:[Y6],category:"Kids",subCategory:"Topwear",sizes:["S","M","L","XL"],date:1716636545448,bestseller:!1},{_id:"aaaax",name:"Boy Round Neck Pure Cotton T-shirt",description:"A lightweight, usually knitted, pullover shirt, close-fitting and with a round neckline and short sleeves, worn as an undershirt or outer garment.",price:210,image:[X6],category:"Kids",subCategory:"Topwear",sizes:["S","M","L","XL"],date:1716637645448,bestseller:!1},{_id:"aaaay",name:"Girls Round Neck Cotton Top",description:"A lightweight, usually knitted, pullover shirt, close-fitting and with a round neckline and short sleeves, worn as an undershirt or outer garment.",price:190,image:[J6],category:"Kids",subCategory:"Topwear",sizes:["S","M","L","XL"],date:1716638745448,bestseller:!1},{_id:"aaaaz",name:"Women Zip-Front Relaxed Fit Jacket",description:"A lightweight, usually knitted, pullover shirt, close-fitting and with a round neckline and short sleeves, worn as an undershirt or outer garment.",price:220,image:[Z6],category:"Women",subCategory:"Winterwear",sizes:["S","M","L","XL"],date:1716639845448,bestseller:!1},{_id:"aaaba",name:"Girls Round Neck Cotton Top",description:"A lightweight, usually knitted, pullover shirt, close-fitting and with a round neckline and short sleeves, worn as an undershirt or outer garment.",price:200,image:[e5],category:"Kids",subCategory:"Topwear",sizes:["S","M","L","XL"],date:1716640945448,bestseller:!1},{_id:"aaabb",name:"Men Slim Fit Relaxed Denim Jacket",description:"A lightweight, usually knitted, pullover shirt, close-fitting and with a round neckline and short sleeves, worn as an undershirt or outer garment.",price:230,image:[t5],category:"Men",subCategory:"Winterwear",sizes:["S","M","L","XL"],date:1716642045448,bestseller:!1},{_id:"aaabc",name:"Women Round Neck Cotton Top",description:"A lightweight, usually knitted, pullover shirt, close-fitting and with a round neckline and short sleeves, worn as an undershirt or outer garment.",price:210,image:[n5],category:"Women",subCategory:"Topwear",sizes:["S","M","L","XL"],date:1716643145448,bestseller:!1},{_id:"aaabd",name:"Girls Round Neck Cotton Top",description:"A lightweight, usually knitted, pullover shirt, close-fitting and with a round neckline and short sleeves, worn as an undershirt or outer garment.",price:240,image:[r5],category:"Kids",subCategory:"Topwear",sizes:["S","M","L","XL"],date:1716644245448,bestseller:!1},{_id:"aaabe",name:"Men Round Neck Pure Cotton T-shirt",description:"A lightweight, usually knitted, pullover shirt, close-fitting and with a round neckline and short sleeves, worn as an undershirt or outer garment.",price:220,image:[i5],category:"Men",subCategory:"Topwear",sizes:["S","M","L","XL"],date:1716645345448,bestseller:!1},{_id:"aaabf",name:"Men Round Neck Pure Cotton T-shirt",description:"A lightweight, usually knitted, pullover shirt, close-fitting and with a round neckline and short sleeves, worn as an undershirt or outer garment.",price:250,image:[s5],category:"Men",subCategory:"Topwear",sizes:["S","M","L","XL"],date:1716646445448,bestseller:!1},{_id:"aaabg",name:"Girls Round Neck Cotton Top",description:"A lightweight, usually knitted, pullover shirt, close-fitting and with a round neckline and short sleeves, worn as an undershirt or outer garment.",price:230,image:[o5],category:"Kids",subCategory:"Topwear",sizes:["S","M","L","XL"],date:1716647545448,bestseller:!1},{_id:"aaabh",name:"Women Round Neck Cotton Top",description:"A lightweight, usually knitted, pullover shirt, close-fitting and with a round neckline and short sleeves, worn as an undershirt or outer garment.",price:260,image:[a5],category:"Women",subCategory:"Topwear",sizes:["S","M","L","XL"],date:1716648645448,bestseller:!1},{_id:"aaabi",name:"Women Zip-Front Relaxed Fit Jacket",description:"A lightweight, usually knitted, pullover shirt, close-fitting and with a round neckline and short sleeves, worn as an undershirt or outer garment.",price:240,image:[l5],category:"Women",subCategory:"Winterwear",sizes:["S","M","L","XL"],date:1716649745448,bestseller:!1},{_id:"aaabj",name:"Women Zip-Front Relaxed Fit Jacket",description:"A lightweight, usually knitted, pullover shirt, close-fitting and with a round neckline and short sleeves, worn as an undershirt or outer garment.",price:270,image:[u5],category:"Women",subCategory:"Winterwear",sizes:["S","M","L","XL"],date:1716650845448,bestseller:!1},{_id:"aaabk",name:"Women Round Neck Cotton Top",description:"A lightweight, usually knitted, pullover shirt, close-fitting and with a round neckline and short sleeves, worn as an undershirt or outer garment.",price:250,image:[c5],category:"Women",subCategory:"Topwear",sizes:["S","M","L","XL"],date:1716651945448,bestseller:!1},{_id:"aaabl",name:"Men Round Neck Pure Cotton T-shirt",description:"A lightweight, usually knitted, pullover shirt, close-fitting and with a round neckline and short sleeves, worn as an undershirt or outer garment.",price:280,image:[h5],category:"Men",subCategory:"Topwear",sizes:["S","M","L","XL"],date:1716653045448,bestseller:!1},{_id:"aaabm",name:"Men Printed Plain Cotton Shirt",description:"A lightweight, usually knitted, pullover shirt, close-fitting and with a round neckline and short sleeves, worn as an undershirt or outer garment.",price:260,image:[d5],category:"Men",subCategory:"Topwear",sizes:["S","M","L","XL"],date:1716654145448,bestseller:!1},{_id:"aaabn",name:"Men Slim Fit Relaxed Denim Jacket",description:"A lightweight, usually knitted, pullover shirt, close-fitting and with a round neckline and short sleeves, worn as an undershirt or outer garment.",price:290,image:[f5],category:"Men",subCategory:"Winterwear",sizes:["S","M","L","XL"],date:1716655245448,bestseller:!1},{_id:"aaabo",name:"Men Round Neck Pure Cotton T-shirt",description:"A lightweight, usually knitted, pullover shirt, close-fitting and with a round neckline and short sleeves, worn as an undershirt or outer garment.",price:270,image:[p5],category:"Men",subCategory:"Topwear",sizes:["S","M","L","XL"],date:1716656345448,bestseller:!1},{_id:"aaabp",name:"Boy Round Neck Pure Cotton T-shirt",description:"A lightweight, usually knitted, pullover shirt, close-fitting and with a round neckline and short sleeves, worn as an undershirt or outer garment.",price:300,image:[m5],category:"Kids",subCategory:"Topwear",sizes:["S","M","L","XL"],date:1716657445448,bestseller:!1},{_id:"aaabq",name:"Kid Tapered Slim Fit Trouser",description:"A lightweight, usually knitted, pullover shirt, close-fitting and with a round neckline and short sleeves, worn as an undershirt or outer garment.",price:280,image:[g5],category:"Kids",subCategory:"Bottomwear",sizes:["S","M","L","XL"],date:1716658545448,bestseller:!1},{_id:"aaabr",name:"Women Zip-Front Relaxed Fit Jacket",description:"A lightweight, usually knitted, pullover shirt, close-fitting and with a round neckline and short sleeves, worn as an undershirt or outer garment.",price:310,image:[_5],category:"Women",subCategory:"Winterwear",sizes:["S","M","L","XL"],date:1716659645448,bestseller:!1},{_id:"aaabs",name:"Men Slim Fit Relaxed Denim Jacket",description:"A lightweight, usually knitted, pullover shirt, close-fitting and with a round neckline and short sleeves, worn as an undershirt or outer garment.",price:290,image:[y5],category:"Men",subCategory:"Winterwear",sizes:["S","M","L","XL"],date:1716660745448,bestseller:!1},{_id:"aaabt",name:"Men Slim Fit Relaxed Denim Jacket",description:"A lightweight, usually knitted, pullover shirt, close-fitting and with a round neckline and short sleeves, worn as an undershirt or outer garment.",price:320,image:[v5],category:"Men",subCategory:"Winterwear",sizes:["S","M","L","XL"],date:1716661845448,bestseller:!1},{_id:"aaabu",name:"Kid Tapered Slim Fit Trouser",description:"A lightweight, usually knitted, pullover shirt, close-fitting and with a round neckline and short sleeves, worn as an undershirt or outer garment.",price:300,image:[w5],category:"Kids",subCategory:"Bottomwear",sizes:["S","M","L","XL"],date:1716662945448,bestseller:!1},{_id:"aaabv",name:"Men Slim Fit Relaxed Denim Jacket",description:"A lightweight, usually knitted, pullover shirt, close-fitting and with a round neckline and short sleeves, worn as an undershirt or outer garment.",price:330,image:[A5],category:"Men",subCategory:"Winterwear",sizes:["S","M","L","XL"],date:1716664045448,bestseller:!1},{_id:"aaabw",name:"Kid Tapered Slim Fit Trouser",description:"A lightweight, usually knitted, pullover shirt, close-fitting and with a round neckline and short sleeves, worn as an undershirt or outer garment.",price:310,image:[E5],category:"Kids",subCategory:"Bottomwear",sizes:["S","M","L","XL"],date:1716665145448,bestseller:!1},{_id:"aaabx",name:"Kid Tapered Slim Fit Trouser",description:"A lightweight, usually knitted, pullover shirt, close-fitting and with a round neckline and short sleeves, worn as an undershirt or outer garment.",price:340,image:[T5],category:"Kids",subCategory:"Bottomwear",sizes:["S","M","L","XL"],date:1716666245448,bestseller:!1},{_id:"aaaby",name:"Women Zip-Front Relaxed Fit Jacket",description:"A lightweight, usually knitted, pullover shirt, close-fitting and with a round neckline and short sleeves, worn as an undershirt or outer garment.",price:320,image:[I5],category:"Women",subCategory:"Winterwear",sizes:["S","M","L","XL"],date:1716667345448,bestseller:!1},{_id:"aaabz",name:"Men Slim Fit Relaxed Denim Jacket",description:"A lightweight, usually knitted, pullover shirt, close-fitting and with a round neckline and short sleeves, worn as an undershirt or outer garment.",price:350,image:[C5],category:"Men",subCategory:"Winterwear",sizes:["S","M","L","XL"],date:1716668445448,bestseller:!1},{_id:"bbb1",name:"Brown Dining Table",description:"This table’s name comes from its unique ray-shaped base made up of 47 sleek, steel rods. Think of each one as a ray of positive vibes emanating from the hub of your home – all home life orbits around the dining table after all.",price:1350,image:[sR],category:"Furniture",subCategory:"Tables",date:1716668445498,hoverImage:[oR],bestseller1:!0},{_id:"bbb2",name:"Versailles Duralex Glass Mug, Deep-Blue (Set of 6)",description:"Discover the Versailles Duralex 260ml Mug Glass, meticulously crafted in France to elevate your dining experience. Available in sets of six, choose from an array of colours including blue, amber, green, and more to suit any occasion.",price:550,image:[aR],category:"Furniture",subCategory:"Mugs",date:1716668445499,hoverImage:[lR],bestseller1:!0},{_id:"bbb3",name:"Hexa Travertine Round Dining Table",description:"The Hexa 4-6 Seater Round Dining Table, crafted from premium Travertine sourced in Turkey, features a distinctive hexagonal central pillar, designed to offer ample legroom for a more comfortable dining experience.",price:1750,image:[fR],category:"Furniture",subCategory:"Tables",date:1716668445500,hoverImage:[pR],bestseller1:!0},{_id:"bbb4",name:"Cob Right Corner Modular Sofa, Chenille, Moss",description:"Introducing the Cob Modular Sofa, where modularity meets sustainable living! Each segment is bound together with sturdy crocodile locks, ensuring a seamless fit that can be arranged to suit any space. 100% made in the United Kingdom and crafted from post-consumer polyester, the Cob Modular sofa is kind to the planet, allowing you to lounge guilt-free.",price:7399,image:[uR],category:"Furniture",subCategory:"Sofas",date:1716668445501,hoverImage:[cR],bestseller1:!0},{_id:"bbb5",name:"Florence Armchair / Dining Chair, Cream",description:"With its natural woven rattan back and padded upholstered seat, the Florence accent armchair is a chic addition to any room. Available in cream and anthracite grey.",price:899,image:[dR],category:"Furniture",subCategory:"Chairs",date:1716668445502,hoverImage:[hR],bestseller1:!0},{_id:"bbb6",name:"Molta Marble Top Side Table, Grey",description:"With its unique tripod design and solid marble top, the Molta side table is a perfect blend of functionality and style. It's low profile and distinctive handle makes it portable and perfect for small spaces.",price:1299,image:[mR],category:"Furniture",subCategory:"Tables",date:1716668445502,hoverImage:[gR],bestseller1:!0}],sn=N.createContext(),q5=t=>{const e="₹",[n,r]=N.useState(""),[i,s]=N.useState(!1),[o,a]=N.useState({}),[l,c]=N.useState(!1),[h,f]=N.useState(null),[p,_]=N.useState(null),[E,S]=N.useState(null);N.useEffect(()=>{const b=Ng(di,M=>{M?(console.log("User logged in:",M.uid),_(M.uid),k(M.uid)):(console.log("User logged out"),_(null),a({}))});return()=>b()},[]);const k=b=>{const M=Vn(bs,`carts/${b}`);rh(M,V=>{V.exists()?(a(V.val()),console.log("Loaded cart from Firebase:",V.val())):(a({}),console.log("No cart found in Firebase for this user"))})};N.useEffect(()=>{if(p&&Object.keys(o).length>0){E&&clearTimeout(E);const b=setTimeout(async()=>{try{c(!0),console.log("Saving cart to Firebase:",o);const M=Vn(bs,`carts/${p}`);await Qh(M,o),console.log("Cart saved successfully")}catch(M){console.error("Failed to save cart:",M)}finally{c(!1)}},500);S(b)}},[o,p]);const T={products:H5,currency:e,search:n,setSearch:r,showSearch:i,setShowSearch:s,cartItem:o,addToCart:(b,M)=>{if(!p){console.error("Cannot add to cart: userId is undefined.");return}a(V=>{const C={...V};return C[b]?C[b][M]?C[b][M]++:C[b][M]=1:C[b]={[M]:1},console.log("Updated cart:",C),C})},loading:l,error:h,userId:p,getCartCounter:()=>{console.log("Calculating cart counter...");let b=0;for(const M in o)for(const V in o[M])b+=o[M][V];return console.log("Total Cart Count:",b),b}};return g.jsxs(sn.Provider,{value:T,children:[t.children,l&&g.jsx("p",{children:"Loading..."}),h&&g.jsx("p",{children:h})]})},Ro=({text1:t,text2:e})=>g.jsxs("div",{className:"inline-flex gap-2 text-center justify-center items-center mb-3",children:[g.jsxs("p",{className:"text-gray-500",children:[t,g.jsx("span",{className:"text-gray-700 font-medium item-center text-center",children:e})]}),g.jsx("p",{className:"w-8 sm:w-12 h-[1px] sm:h-[2px] bg-gray-700 item-center text-center"})]}),G5="/assets/zara-CQ-rL3WY.png",K5="/assets/louis-LEu0u6t6.png",$5="/assets/puma-D_4vAp4D.png",Q5=()=>{const{products:t,currency:e}=N.useContext(sn),n=t.slice(0,12);return g.jsxs("div",{className:"my-10 px-1 py-1 mx-1 item-center",children:[g.jsxs("div",{className:"text-3xl text-center py-8",children:[g.jsx(Ro,{text1:"BEST ",text2:"SELLER "}),g.jsx("p",{className:"w-3/4 m-auto text-xs sm:text-sm md:text-base text-gray-600",children:"Discover our Best Sellers in clothing, featuring trendy and timeless designs perfect for every occasion."})]}),g.jsx("div",{className:"grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-y-6",children:n&&n.length>0?n.map(r=>g.jsxs("div",{className:"p-4 transition-transform hover:shadow-lg",children:[g.jsx("div",{className:"overflow-hidden rounded-lg",children:g.jsx(tt,{to:`/product/${r._id}`,children:g.jsx("img",{src:Array.isArray(r.image)?r.image[0]:r.image,alt:r.name,className:"w-full h-70 object-cover transition-transform duration-300 hover:scale-110"})})}),g.jsx("h3",{className:"text-md mt-2 text-center",children:r.name}),g.jsxs("p",{className:"text-center font-bold",children:[e,r.price]})]},r._id)):g.jsx("p",{className:"col-span-full text-center text-gray-500 text-lg my-8",children:"Currently, no products are available. Please check back later!"})}),g.jsx("div",{className:"heading mt-12 text-center",children:g.jsxs("h1",{children:["Trending ",g.jsx("span",{children:"Brands"})]})}),g.jsxs("div",{className:"brand",children:[g.jsx("img",{src:K5,alt:"Louis Vuitton logo"}),g.jsx("img",{src:$5,alt:"Puma logo"}),g.jsx("img",{src:G5,alt:"Zara logo"})]})]})},Y5=()=>{const{currency:t,products:e}=N.useContext(sn),[n,r]=N.useState([]),[i,s]=N.useState(null);N.useEffect(()=>{if((e==null?void 0:e.length)>0){const a=e.filter(l=>l.bestseller1);r(a.slice(0,6))}},[e]);const o=a=>{s(l=>l===a?null:a)};return g.jsxs("div",{className:"my-10",children:[g.jsxs("div",{className:"text-center text-3xl py-8",children:[g.jsx(Ro,{text1:"LATEST ",text2:"COLLECTION "}),g.jsx("p",{className:"w-3/4 m-auto text-xs sm:text-sm md:text-base text-gray-600",children:"Explore our Latest Collection of elegantly crafted furniture pieces, designed to blend style and functionality for every home."})]}),n.length>0?g.jsx("div",{className:"grid grid-cols-2 md:grid-cols-3 gap-y-6",children:n.map(a=>g.jsxs("div",{className:"p-4 shadow-sm group",onTouchStart:()=>o(a._id),onMouseEnter:()=>s(a._id),onMouseLeave:()=>s(null),children:[g.jsxs("div",{className:"relative",children:[g.jsx("img",{src:a.image[0],alt:a.name,className:`w-full h-40 sm:h-60 md:h-80 object-cover rounded transition-opacity duration-300 ${i===a._id?"opacity-0":"opacity-100"}`}),g.jsx(tt,{to:`/product/${a._id}`,children:g.jsx("img",{src:a.hoverImage,alt:`${a.name} hover`,className:`absolute top-0 left-0 w-full h-40 sm:h-60 md:h-80 object-cover rounded transition-opacity duration-300 ${i===a._id?"opacity-100":"opacity-0"}`})})]}),g.jsx("h3",{className:"text-lg mt-2 text-center sm:text-md",children:a.name}),g.jsxs("p",{className:"text-center font-bold",children:[t,a.price]})]},a._id))}):g.jsx("p",{className:"text-center text-gray-600",children:"No bestseller products found."})]})},X5=()=>g.jsxs("div",{className:"flex flex-row justify-around gap-12 sm:gap-2 text-center py-20 text-xs md:text-base text-gray-700",children:[g.jsxs("div",{children:[g.jsx("img",{src:Qt.exchange_icon,className:"w-12 m-auto mb-5 ",alt:""}),g.jsx("p",{className:"font-semibold",children:"Easy Exchange Policy"}),g.jsx("p",{className:"text-gray-400",children:"We offer hassle free exchange policy"})]}),g.jsxs("div",{children:[g.jsx("img",{src:Qt.quality_icon,className:"w-12 m-auto mb-5 ",alt:""}),g.jsx("p",{className:"font-semibold",children:"7 Days Return Policy"}),g.jsx("p",{className:"text-gray-400",children:"We provide 7 Days Free Return policy"})]}),g.jsxs("div",{children:[g.jsx("img",{src:Qt.support_img,className:"w-12 m-auto mb-5 ",alt:""}),g.jsx("p",{className:"font-semibold",children:"Best Coustmer Support 24/7"}),g.jsx("p",{className:"text-gray-400",children:"We offer best Coustmer Support 24/7 Anytime, Anywhere"})]})]}),J5=()=>{const t=e=>{e.preventDefault()};return g.jsx("div",{className:"py-8 bg-gray-100 flex justify-center items-center",children:g.jsxs("div",{className:"text-center w-full sm:w-2/3 lg:w-1/2 px-4",children:[g.jsx("p",{className:"text-2xl font-medium text-gray-800",children:"Subscribe now & get 20% off"}),g.jsx("p",{className:"text-gray-400 mt-3",children:"Stay updated with our latest offers, news, and trends. Join our mailing list!"}),g.jsxs("form",{onSubmit:t,className:"flex flex-col sm:flex-row items-center gap-3 mt-5 border rounded-md px-4 py-2",children:[g.jsx("input",{className:"flex-grow outline-none text-sm py-2 w-full sm:w-auto",type:"email",placeholder:"Enter your email address",required:!0}),g.jsx("button",{type:"submit",className:"bg-black text-white text-xs px-6 py-3 rounded-md hover:bg-gray-800 transition-colors",children:"Subscribe"})]})]})})},Z5=()=>g.jsxs("div",{children:[g.jsx("img",{className:"bg2",src:C6,alt:""}),g.jsx(Q5,{}),g.jsx(Y5,{}),g.jsx(X5,{}),g.jsx(J5,{})]}),eB=()=>g.jsx("div",{children:g.jsx(Z5,{})}),tB=()=>{const{currency:t,products:e}=N.useContext(sn),[n,r]=N.useState(!1),[i,s]=N.useState([]),[o,a]=N.useState([]),l=()=>r(p=>!p),c=p=>{s(_=>_.includes(p)?_.filter(E=>E!==p):[..._,p])},h=p=>{a(_=>_.includes(p)?_.filter(E=>E!==p):[..._,p])},f=e==null?void 0:e.filter(p=>p.category!=="Furniture"&&(i.length===0||i.includes(p.category))&&(o.length===0||o.includes(p.subCategory)));return g.jsxs("div",{className:"collection-container",children:[g.jsxs("div",{className:"min-width-60",children:[g.jsxs("p",{className:"filter-text",onClick:l,children:["FILTER ",g.jsx("img",{className:`h-3 sm:hidden ${n?"rotate-90":"rotate-0"}`,src:Qt.dropdown_icon,alt:"Filter icon"})]}),g.jsxs("div",{className:`border border-gray-300 pl-5 py-3 mt-6 ${n?"":"hidden"} sm:block`,children:[g.jsx("p",{className:"mb-3 font-medium text-sm h1",children:"CATEGORIES"}),g.jsxs("div",{className:"filter-section h2 flex flex-col gap-2 text-sm text-gray-700",children:[g.jsxs("label",{children:[g.jsx("input",{type:"checkbox",value:"Men",checked:i.includes("Men"),onChange:()=>c("Men")}),"Men"]}),g.jsxs("label",{children:[g.jsx("input",{type:"checkbox",value:"Women",checked:i.includes("Women"),onChange:()=>c("Women")}),"Women"]}),g.jsxs("label",{children:[g.jsx("input",{type:"checkbox",value:"Kids",checked:i.includes("Kids"),onChange:()=>c("Kids")}),"Kids"]})]})]}),g.jsxs("div",{className:`border border-gray-300 pl-5 py-3 my-5 ${n?"":"hidden"} sm:block`,children:[g.jsx("p",{className:"mb-3 font-medium text-sm h1",children:"SUB-CATEGORIES"}),g.jsxs("div",{className:"filter-section flex flex-col gap-2 text-sm text-gray-700",children:[g.jsxs("label",{children:[g.jsx("input",{type:"checkbox",value:"Topwear",checked:o.includes("Topwear"),onChange:()=>h("Topwear")}),"Topwear"]}),g.jsxs("label",{children:[g.jsx("input",{type:"checkbox",value:"Bottomwear",checked:o.includes("Bottomwear"),onChange:()=>h("Bottomwear")}),"Bottomwear"]}),g.jsxs("label",{children:[g.jsx("input",{type:"checkbox",value:"Winterwear",checked:o.includes("Winterwear"),onChange:()=>h("Winterwear")}),"Winterwear"]})]})]})]}),g.jsxs("div",{className:"flex-1",children:[g.jsx("div",{className:"heading1 flex text-5xl justify-between text-base sm:text-2xl mb-4",children:g.jsx(Ro,{text1:"ALL ",text2:" COLLECTION"})}),g.jsx("div",{className:"grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6",children:f==null?void 0:f.map(p=>g.jsxs("div",{className:" p-4",children:[g.jsx("div",{className:"overflow-hidden rounded-lg",children:g.jsxs(tt,{to:`/product/${p._id}`,children:[" ",g.jsx("img",{src:p.image[0],alt:p.name,className:"w-full h-70 object-cover transition-transform duration-300 hover:scale-110"})]})}),g.jsx("h3",{className:"text-lg font-medium",children:p.name}),g.jsxs("p",{className:"text-black text-center font-bold",children:[t,p.price]})]},p._id))})]})]})},nB=()=>{const{currency:t,products:e}=N.useContext(sn),[n,r]=N.useState(!1),[i,s]=N.useState([]),[o,a]=N.useState(null),l=()=>r(_=>!_),c=_=>{s(E=>E.includes(_)?E.filter(S=>S!==_):[...E,_])},h=e==null?void 0:e.filter(_=>_.category==="Furniture"&&(i.length===0||i.includes(_.subCategory))),f=_=>{a(_)},p=()=>{a(null)};return g.jsx("div",{style:{paddingTop:"70px",marginBottom:"30px",margin:"0",padding:"0",boxSizing:"border-box"},children:g.jsx("div",{style:{maxWidth:"100vw",overflowX:"hidden"},children:g.jsxs("div",{className:"item-container",children:[g.jsxs("div",{className:"min-width-60",children:[g.jsxs("p",{className:"filter-text",onClick:l,children:["FILTER"," ",g.jsx("img",{className:`h-3 sm:hidden ${n?"rotate-90":"rotate-0"}`,src:Qt.dropdown_icon,alt:"Filter icon"})]}),g.jsxs("div",{className:`border border-gray-300 pl-5 py-3 mt-6 ${n?"":"hidden"} sm:block`,children:[g.jsx("p",{className:"mb-3 font-medium text-sm h1",children:"CATEGORIES"}),g.jsxs("div",{className:"flex flex-col gap-2 text-sm text-gray-700",children:[g.jsxs("label",{children:[g.jsx("input",{type:"checkbox",value:"Chairs",checked:i.includes("Chairs"),onChange:()=>c("Chairs")}),"Chairs"]}),g.jsxs("label",{children:[g.jsx("input",{type:"checkbox",value:"Tables",checked:i.includes("Tables"),onChange:()=>c("Tables")}),"Tables"]}),g.jsxs("label",{children:[g.jsx("input",{type:"checkbox",value:"Sofas",checked:i.includes("Sofas"),onChange:()=>c("Sofas")}),"Sofas"]}),g.jsxs("label",{children:[g.jsx("input",{type:"checkbox",value:"Mugs",checked:i.includes("Mugs"),onChange:()=>c("Mugs")}),"Mugs"]})]})]})]}),g.jsxs("div",{className:"flex-1",children:[g.jsx("div",{className:"heading2 flex justify-between text-base sm:text-2xl mb-4 pr-4",children:g.jsx(Ro,{text1:"FURNITURE ",text2:" COLLECTION"})}),g.jsx("div",{className:"grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6",children:h==null?void 0:h.map((_,E)=>g.jsx(tt,{to:`/product/${_._id}`,children:g.jsxs("div",{className:"border ",onMouseEnter:()=>a(E),onMouseLeave:()=>a(null),onTouchStart:()=>f(E),onTouchEnd:p,children:[g.jsxs("div",{className:"overflow-visible rounded-lg relative p-0",children:[" ",g.jsx("img",{src:_.image[0],alt:_.name,className:`w-full h-40 sm:h-72 md:h-96 object-cover rounded transition-opacity duration-300 ${o===E?"opacity-0":"opacity-100"}`}),g.jsx("img",{src:_.hoverImage,alt:`${_.name} hover`,className:`absolute top-0 left-0 w-full h-40 sm:h-72 md:h-96 object-cover rounded transition-opacity duration-300 ${o===E?"opacity-100":"opacity-0"}`})]}),g.jsx("h3",{className:"text-lg font-medium",children:_.name}),g.jsxs("p",{className:"text-black text-center font-bold",children:[t,_.price]})]})},_._id))})]})]})})})},rB=()=>g.jsx("div",{children:"Contact"}),_R=()=>{const{products:t,currency:e}=N.useContext(sn),r=t?t.slice(0,6):[];return g.jsxs("div",{className:"content-wrapper",children:[g.jsx("div",{className:"text-3xl text-center py-8",children:g.jsx(Ro,{text1:"RELATED ",text2:"RELATED "})}),g.jsx("div",{className:"grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-y-6",children:r.length>0?r.map(i=>g.jsxs("div",{className:"p-4 transition-transform hover:shadow-lg",children:[g.jsx("div",{className:"overflow-hidden rounded-lg",children:g.jsx(tt,{to:`/product/${i._id}`,children:g.jsx("img",{src:Array.isArray(i.image)?i.image[0]:i.image,alt:`${i.name} product image`,className:"w-full h-70 object-cover transition-transform duration-300 hover:scale-110"})})}),g.jsx("h3",{className:"text-md mt-2 text-center",children:i.name}),g.jsxs("p",{className:"text-center font-bold",children:[e,i.price]})]},i._id)):g.jsx("p",{className:"col-span-full text-center text-gray-500 text-lg my-8",children:"Currently, no products are available. Please check back later!"})})]})};function yR(t){var e,n,r="";if(typeof t=="string"||typeof t=="number")r+=t;else if(typeof t=="object")if(Array.isArray(t)){var i=t.length;for(e=0;e<i;e++)t[e]&&(n=yR(t[e]))&&(r&&(r+=" "),r+=n)}else for(n in t)t[n]&&(r&&(r+=" "),r+=n);return r}function Wr(){for(var t,e,n=0,r="",i=arguments.length;n<i;n++)(t=arguments[n])&&(e=yR(t))&&(r&&(r+=" "),r+=e);return r}const ml=t=>typeof t=="number"&&!isNaN(t),Ui=t=>typeof t=="string",Xt=t=>typeof t=="function",sc=t=>Ui(t)||Xt(t)?t:null,hm=t=>N.isValidElement(t)||Ui(t)||Xt(t)||ml(t);function iB(t,e,n){n===void 0&&(n=300);const{scrollHeight:r,style:i}=t;requestAnimationFrame(()=>{i.minHeight="initial",i.height=r+"px",i.transition=`all ${n}ms`,requestAnimationFrame(()=>{i.height="0",i.padding="0",i.margin="0",setTimeout(e,n)})})}function ud(t){let{enter:e,exit:n,appendPosition:r=!1,collapse:i=!0,collapseDuration:s=300}=t;return function(o){let{children:a,position:l,preventExitTransition:c,done:h,nodeRef:f,isIn:p,playToast:_}=o;const E=r?`${e}--${l}`:e,S=r?`${n}--${l}`:n,k=N.useRef(0);return N.useLayoutEffect(()=>{const A=f.current,v=E.split(" "),T=b=>{b.target===f.current&&(_(),A.removeEventListener("animationend",T),A.removeEventListener("animationcancel",T),k.current===0&&b.type!=="animationcancel"&&A.classList.remove(...v))};A.classList.add(...v),A.addEventListener("animationend",T),A.addEventListener("animationcancel",T)},[]),N.useEffect(()=>{const A=f.current,v=()=>{A.removeEventListener("animationend",v),i?iB(A,h,s):h()};p||(c?v():(k.current=1,A.className+=` ${S}`,A.addEventListener("animationend",v)))},[p]),ve.createElement(ve.Fragment,null,a)}}function EA(t,e){return t!=null?{content:t.content,containerId:t.props.containerId,id:t.props.toastId,theme:t.props.theme,type:t.props.type,data:t.props.data||{},isLoading:t.props.isLoading,icon:t.props.icon,status:e}:{}}const Nt=new Map;let gl=[];const dm=new Set,sB=t=>dm.forEach(e=>e(t)),vR=()=>Nt.size>0;function wR(t,e){var n;if(e)return!((n=Nt.get(e))==null||!n.isToastActive(t));let r=!1;return Nt.forEach(i=>{i.isToastActive(t)&&(r=!0)}),r}function AR(t,e){hm(t)&&(vR()||gl.push({content:t,options:e}),Nt.forEach(n=>{n.buildToast(t,e)}))}function TA(t,e){Nt.forEach(n=>{e!=null&&e!=null&&e.containerId?(e==null?void 0:e.containerId)===n.id&&n.toggle(t,e==null?void 0:e.id):n.toggle(t,e==null?void 0:e.id)})}function oB(t){const{subscribe:e,getSnapshot:n,setProps:r}=N.useRef(function(s){const o=s.containerId||1;return{subscribe(a){const l=function(h,f,p){let _=1,E=0,S=[],k=[],A=[],v=f;const T=new Map,b=new Set,M=()=>{A=Array.from(T.values()),b.forEach(y=>y())},V=y=>{k=y==null?[]:k.filter(I=>I!==y),M()},C=y=>{const{toastId:I,onOpen:R,updateId:P,children:D}=y.props,x=P==null;y.staleId&&T.delete(y.staleId),T.set(I,y),k=[...k,y.props.toastId].filter(Ve=>Ve!==y.staleId),M(),p(EA(y,x?"added":"updated")),x&&Xt(R)&&R(N.isValidElement(D)&&D.props)};return{id:h,props:v,observe:y=>(b.add(y),()=>b.delete(y)),toggle:(y,I)=>{T.forEach(R=>{I!=null&&I!==R.props.toastId||Xt(R.toggle)&&R.toggle(y)})},removeToast:V,toasts:T,clearQueue:()=>{E-=S.length,S=[]},buildToast:(y,I)=>{if((te=>{let{containerId:ue,toastId:je,updateId:ze}=te;const it=ue?ue!==h:h!==1,St=T.has(je)&&ze==null;return it||St})(I))return;const{toastId:R,updateId:P,data:D,staleId:x,delay:Ve}=I,Lt=()=>{V(R)},On=P==null;On&&E++;const qe={...v,style:v.toastStyle,key:_++,...Object.fromEntries(Object.entries(I).filter(te=>{let[ue,je]=te;return je!=null})),toastId:R,updateId:P,data:D,closeToast:Lt,isIn:!1,className:sc(I.className||v.toastClassName),bodyClassName:sc(I.bodyClassName||v.bodyClassName),progressClassName:sc(I.progressClassName||v.progressClassName),autoClose:!I.isLoading&&(W=I.autoClose,G=v.autoClose,W===!1||ml(W)&&W>0?W:G),deleteToast(){const te=T.get(R),{onClose:ue,children:je}=te.props;Xt(ue)&&ue(N.isValidElement(je)&&je.props),p(EA(te,"removed")),T.delete(R),E--,E<0&&(E=0),S.length>0?C(S.shift()):M()}};var W,G;qe.closeButton=v.closeButton,I.closeButton===!1||hm(I.closeButton)?qe.closeButton=I.closeButton:I.closeButton===!0&&(qe.closeButton=!hm(v.closeButton)||v.closeButton);let Q=y;N.isValidElement(y)&&!Ui(y.type)?Q=N.cloneElement(y,{closeToast:Lt,toastProps:qe,data:D}):Xt(y)&&(Q=y({closeToast:Lt,toastProps:qe,data:D}));const pe={content:Q,props:qe,staleId:x};v.limit&&v.limit>0&&E>v.limit&&On?S.push(pe):ml(Ve)?setTimeout(()=>{C(pe)},Ve):C(pe)},setProps(y){v=y},setToggle:(y,I)=>{T.get(y).toggle=I},isToastActive:y=>k.some(I=>I===y),getSnapshot:()=>A}}(o,s,sB);Nt.set(o,l);const c=l.observe(a);return gl.forEach(h=>AR(h.content,h.options)),gl=[],()=>{c(),Nt.delete(o)}},setProps(a){var l;(l=Nt.get(o))==null||l.setProps(a)},getSnapshot(){var a;return(a=Nt.get(o))==null?void 0:a.getSnapshot()}}}(t)).current;r(t);const i=N.useSyncExternalStore(e,n,n);return{getToastToRender:function(s){if(!i)return[];const o=new Map;return t.newestOnTop&&i.reverse(),i.forEach(a=>{const{position:l}=a.props;o.has(l)||o.set(l,[]),o.get(l).push(a)}),Array.from(o,a=>s(a[0],a[1]))},isToastActive:wR,count:i==null?void 0:i.length}}function aB(t){const[e,n]=N.useState(!1),[r,i]=N.useState(!1),s=N.useRef(null),o=N.useRef({start:0,delta:0,removalDistance:0,canCloseOnClick:!0,canDrag:!1,didMove:!1}).current,{autoClose:a,pauseOnHover:l,closeToast:c,onClick:h,closeOnClick:f}=t;var p,_;function E(){n(!0)}function S(){n(!1)}function k(T){const b=s.current;o.canDrag&&b&&(o.didMove=!0,e&&S(),o.delta=t.draggableDirection==="x"?T.clientX-o.start:T.clientY-o.start,o.start!==T.clientX&&(o.canCloseOnClick=!1),b.style.transform=`translate3d(${t.draggableDirection==="x"?`${o.delta}px, var(--y)`:`0, calc(${o.delta}px + var(--y))`},0)`,b.style.opacity=""+(1-Math.abs(o.delta/o.removalDistance)))}function A(){document.removeEventListener("pointermove",k),document.removeEventListener("pointerup",A);const T=s.current;if(o.canDrag&&o.didMove&&T){if(o.canDrag=!1,Math.abs(o.delta)>o.removalDistance)return i(!0),t.closeToast(),void t.collapseAll();T.style.transition="transform 0.2s, opacity 0.2s",T.style.removeProperty("transform"),T.style.removeProperty("opacity")}}(_=Nt.get((p={id:t.toastId,containerId:t.containerId,fn:n}).containerId||1))==null||_.setToggle(p.id,p.fn),N.useEffect(()=>{if(t.pauseOnFocusLoss)return document.hasFocus()||S(),window.addEventListener("focus",E),window.addEventListener("blur",S),()=>{window.removeEventListener("focus",E),window.removeEventListener("blur",S)}},[t.pauseOnFocusLoss]);const v={onPointerDown:function(T){if(t.draggable===!0||t.draggable===T.pointerType){o.didMove=!1,document.addEventListener("pointermove",k),document.addEventListener("pointerup",A);const b=s.current;o.canCloseOnClick=!0,o.canDrag=!0,b.style.transition="none",t.draggableDirection==="x"?(o.start=T.clientX,o.removalDistance=b.offsetWidth*(t.draggablePercent/100)):(o.start=T.clientY,o.removalDistance=b.offsetHeight*(t.draggablePercent===80?1.5*t.draggablePercent:t.draggablePercent)/100)}},onPointerUp:function(T){const{top:b,bottom:M,left:V,right:C}=s.current.getBoundingClientRect();T.nativeEvent.type!=="touchend"&&t.pauseOnHover&&T.clientX>=V&&T.clientX<=C&&T.clientY>=b&&T.clientY<=M?S():E()}};return a&&l&&(v.onMouseEnter=S,t.stacked||(v.onMouseLeave=E)),f&&(v.onClick=T=>{h&&h(T),o.canCloseOnClick&&c()}),{playToast:E,pauseToast:S,isRunning:e,preventExitTransition:r,toastRef:s,eventHandlers:v}}function lB(t){let{delay:e,isRunning:n,closeToast:r,type:i="default",hide:s,className:o,style:a,controlledProgress:l,progress:c,rtl:h,isIn:f,theme:p}=t;const _=s||l&&c===0,E={...a,animationDuration:`${e}ms`,animationPlayState:n?"running":"paused"};l&&(E.transform=`scaleX(${c})`);const S=Wr("Toastify__progress-bar",l?"Toastify__progress-bar--controlled":"Toastify__progress-bar--animated",`Toastify__progress-bar-theme--${p}`,`Toastify__progress-bar--${i}`,{"Toastify__progress-bar--rtl":h}),k=Xt(o)?o({rtl:h,type:i,defaultClassName:S}):Wr(S,o),A={[l&&c>=1?"onTransitionEnd":"onAnimationEnd"]:l&&c<1?null:()=>{f&&r()}};return ve.createElement("div",{className:"Toastify__progress-bar--wrp","data-hidden":_},ve.createElement("div",{className:`Toastify__progress-bar--bg Toastify__progress-bar-theme--${p} Toastify__progress-bar--${i}`}),ve.createElement("div",{role:"progressbar","aria-hidden":_?"true":"false","aria-label":"notification timer",className:k,style:E,...A}))}let uB=1;const ER=()=>""+uB++;function cB(t){return t&&(Ui(t.toastId)||ml(t.toastId))?t.toastId:ER()}function Na(t,e){return AR(t,e),e.toastId}function ph(t,e){return{...e,type:e&&e.type||t,toastId:cB(e)}}function bu(t){return(e,n)=>Na(e,ph(t,n))}function fe(t,e){return Na(t,ph("default",e))}fe.loading=(t,e)=>Na(t,ph("default",{isLoading:!0,autoClose:!1,closeOnClick:!1,closeButton:!1,draggable:!1,...e})),fe.promise=function(t,e,n){let r,{pending:i,error:s,success:o}=e;i&&(r=Ui(i)?fe.loading(i,n):fe.loading(i.render,{...n,...i}));const a={isLoading:null,autoClose:null,closeOnClick:null,closeButton:null,draggable:null},l=(h,f,p)=>{if(f==null)return void fe.dismiss(r);const _={type:h,...a,...n,data:p},E=Ui(f)?{render:f}:f;return r?fe.update(r,{..._,...E}):fe(E.render,{..._,...E}),p},c=Xt(t)?t():t;return c.then(h=>l("success",o,h)).catch(h=>l("error",s,h)),c},fe.success=bu("success"),fe.info=bu("info"),fe.error=bu("error"),fe.warning=bu("warning"),fe.warn=fe.warning,fe.dark=(t,e)=>Na(t,ph("default",{theme:"dark",...e})),fe.dismiss=function(t){(function(e){var n;if(vR()){if(e==null||Ui(n=e)||ml(n))Nt.forEach(r=>{r.removeToast(e)});else if(e&&("containerId"in e||"id"in e)){const r=Nt.get(e.containerId);r?r.removeToast(e.id):Nt.forEach(i=>{i.removeToast(e.id)})}}else gl=gl.filter(r=>e!=null&&r.options.toastId!==e)})(t)},fe.clearWaitingQueue=function(t){t===void 0&&(t={}),Nt.forEach(e=>{!e.props.limit||t.containerId&&e.id!==t.containerId||e.clearQueue()})},fe.isActive=wR,fe.update=function(t,e){e===void 0&&(e={});const n=((r,i)=>{var s;let{containerId:o}=i;return(s=Nt.get(o||1))==null?void 0:s.toasts.get(r)})(t,e);if(n){const{props:r,content:i}=n,s={delay:100,...r,...e,toastId:e.toastId||t,updateId:ER()};s.toastId!==t&&(s.staleId=t);const o=s.render||i;delete s.render,Na(o,s)}},fe.done=t=>{fe.update(t,{progress:1})},fe.onChange=function(t){return dm.add(t),()=>{dm.delete(t)}},fe.play=t=>TA(!0,t),fe.pause=t=>TA(!1,t);const hB=typeof window<"u"?N.useLayoutEffect:N.useEffect,Du=t=>{let{theme:e,type:n,isLoading:r,...i}=t;return ve.createElement("svg",{viewBox:"0 0 24 24",width:"100%",height:"100%",fill:e==="colored"?"currentColor":`var(--toastify-icon-color-${n})`,...i})},bf={info:function(t){return ve.createElement(Du,{...t},ve.createElement("path",{d:"M12 0a12 12 0 1012 12A12.013 12.013 0 0012 0zm.25 5a1.5 1.5 0 11-1.5 1.5 1.5 1.5 0 011.5-1.5zm2.25 13.5h-4a1 1 0 010-2h.75a.25.25 0 00.25-.25v-4.5a.25.25 0 00-.25-.25h-.75a1 1 0 010-2h1a2 2 0 012 2v4.75a.25.25 0 00.25.25h.75a1 1 0 110 2z"}))},warning:function(t){return ve.createElement(Du,{...t},ve.createElement("path",{d:"M23.32 17.191L15.438 2.184C14.728.833 13.416 0 11.996 0c-1.42 0-2.733.833-3.443 2.184L.533 17.448a4.744 4.744 0 000 4.368C1.243 23.167 2.555 24 3.975 24h16.05C22.22 24 24 22.044 24 19.632c0-.904-.251-1.746-.68-2.44zm-9.622 1.46c0 1.033-.724 1.823-1.698 1.823s-1.698-.79-1.698-1.822v-.043c0-1.028.724-1.822 1.698-1.822s1.698.79 1.698 1.822v.043zm.039-12.285l-.84 8.06c-.057.581-.408.943-.897.943-.49 0-.84-.367-.896-.942l-.84-8.065c-.057-.624.25-1.095.779-1.095h1.91c.528.005.84.476.784 1.1z"}))},success:function(t){return ve.createElement(Du,{...t},ve.createElement("path",{d:"M12 0a12 12 0 1012 12A12.014 12.014 0 0012 0zm6.927 8.2l-6.845 9.289a1.011 1.011 0 01-1.43.188l-4.888-3.908a1 1 0 111.25-1.562l4.076 3.261 6.227-8.451a1 1 0 111.61 1.183z"}))},error:function(t){return ve.createElement(Du,{...t},ve.createElement("path",{d:"M11.983 0a12.206 12.206 0 00-8.51 3.653A11.8 11.8 0 000 12.207 11.779 11.779 0 0011.8 24h.214A12.111 12.111 0 0024 11.791 11.766 11.766 0 0011.983 0zM10.5 16.542a1.476 1.476 0 011.449-1.53h.027a1.527 1.527 0 011.523 1.47 1.475 1.475 0 01-1.449 1.53h-.027a1.529 1.529 0 01-1.523-1.47zM11 12.5v-6a1 1 0 012 0v6a1 1 0 11-2 0z"}))},spinner:function(){return ve.createElement("div",{className:"Toastify__spinner"})}},dB=t=>{const{isRunning:e,preventExitTransition:n,toastRef:r,eventHandlers:i,playToast:s}=aB(t),{closeButton:o,children:a,autoClose:l,onClick:c,type:h,hideProgressBar:f,closeToast:p,transition:_,position:E,className:S,style:k,bodyClassName:A,bodyStyle:v,progressClassName:T,progressStyle:b,updateId:M,role:V,progress:C,rtl:y,toastId:I,deleteToast:R,isIn:P,isLoading:D,closeOnClick:x,theme:Ve}=t,Lt=Wr("Toastify__toast",`Toastify__toast-theme--${Ve}`,`Toastify__toast--${h}`,{"Toastify__toast--rtl":y},{"Toastify__toast--close-on-click":x}),On=Xt(S)?S({rtl:y,position:E,type:h,defaultClassName:Lt}):Wr(Lt,S),qe=function(pe){let{theme:te,type:ue,isLoading:je,icon:ze}=pe,it=null;const St={theme:te,type:ue};return ze===!1||(Xt(ze)?it=ze({...St,isLoading:je}):N.isValidElement(ze)?it=N.cloneElement(ze,St):je?it=bf.spinner():(hd=>hd in bf)(ue)&&(it=bf[ue](St))),it}(t),W=!!C||!l,G={closeToast:p,type:h,theme:Ve};let Q=null;return o===!1||(Q=Xt(o)?o(G):N.isValidElement(o)?N.cloneElement(o,G):function(pe){let{closeToast:te,theme:ue,ariaLabel:je="close"}=pe;return ve.createElement("button",{className:`Toastify__close-button Toastify__close-button--${ue}`,type:"button",onClick:ze=>{ze.stopPropagation(),te(ze)},"aria-label":je},ve.createElement("svg",{"aria-hidden":"true",viewBox:"0 0 14 16"},ve.createElement("path",{fillRule:"evenodd",d:"M7.71 8.23l3.75 3.75-1.48 1.48-3.75-3.75-3.75 3.75L1 11.98l3.75-3.75L1 4.48 2.48 3l3.75 3.75L9.98 3l1.48 1.48-3.75 3.75z"})))}(G)),ve.createElement(_,{isIn:P,done:R,position:E,preventExitTransition:n,nodeRef:r,playToast:s},ve.createElement("div",{id:I,onClick:c,"data-in":P,className:On,...i,style:k,ref:r},ve.createElement("div",{...P&&{role:V},className:Xt(A)?A({type:h}):Wr("Toastify__toast-body",A),style:v},qe!=null&&ve.createElement("div",{className:Wr("Toastify__toast-icon",{"Toastify--animate-icon Toastify__zoom-enter":!D})},qe),ve.createElement("div",null,a)),Q,ve.createElement(lB,{...M&&!W?{key:`pb-${M}`}:{},rtl:y,theme:Ve,delay:l,isRunning:e,isIn:P,closeToast:p,hide:f,type:h,style:b,className:T,controlledProgress:W,progress:C||0})))},cd=function(t,e){return e===void 0&&(e=!1),{enter:`Toastify--animate Toastify__${t}-enter`,exit:`Toastify--animate Toastify__${t}-exit`,appendPosition:e}},fB=ud(cd("bounce",!0));ud(cd("slide",!0));ud(cd("zoom"));ud(cd("flip"));const pB={position:"top-right",transition:fB,autoClose:5e3,closeButton:!0,pauseOnHover:!0,pauseOnFocusLoss:!0,draggable:"touch",draggablePercent:80,draggableDirection:"x",role:"alert",theme:"light"};function Q_(t){let e={...pB,...t};const n=t.stacked,[r,i]=N.useState(!0),s=N.useRef(null),{getToastToRender:o,isToastActive:a,count:l}=oB(e),{className:c,style:h,rtl:f,containerId:p}=e;function _(S){const k=Wr("Toastify__toast-container",`Toastify__toast-container--${S}`,{"Toastify__toast-container--rtl":f});return Xt(c)?c({position:S,rtl:f,defaultClassName:k}):Wr(k,sc(c))}function E(){n&&(i(!0),fe.play())}return hB(()=>{if(n){var S;const k=s.current.querySelectorAll('[data-in="true"]'),A=12,v=(S=e.position)==null?void 0:S.includes("top");let T=0,b=0;Array.from(k).reverse().forEach((M,V)=>{const C=M;C.classList.add("Toastify__toast--stacked"),V>0&&(C.dataset.collapsed=`${r}`),C.dataset.pos||(C.dataset.pos=v?"top":"bot");const y=T*(r?.2:1)+(r?0:A*V);C.style.setProperty("--y",`${v?y:-1*y}px`),C.style.setProperty("--g",`${A}`),C.style.setProperty("--s",""+(1-(r?b:0))),T+=C.offsetHeight,b+=.025})}},[r,l,n]),ve.createElement("div",{ref:s,className:"Toastify",id:p,onMouseEnter:()=>{n&&(i(!1),fe.pause())},onMouseLeave:E},o((S,k)=>{const A=k.length?{...h}:{...h,pointerEvents:"none"};return ve.createElement("div",{className:_(S),style:A,key:`container-${S}`},k.map(v=>{let{content:T,props:b}=v;return ve.createElement(dB,{...b,stacked:n,collapseAll:E,isIn:a(b.toastId,b.containerId),style:b.style,key:`toast-${b.key}`},T)}))}))}const mB=()=>{var E,S,k;const{productId:t}=ax(),[e,n]=N.useState(null),[r,i]=N.useState(""),[s,o]=N.useState(0),[a,l]=N.useState(""),{products:c,currency:h,addToCart:f}=N.useContext(sn),p=N.useCallback(()=>{if(!c||c.length===0){console.error("Products data is empty or not available.");return}const A=c.find(v=>v._id===t);A?(n(A),i(A.image[0]||"")):console.error(`Product with ID ${t} not found.`)},[t,c]);if(N.useEffect(()=>{p()},[p]),!e)return g.jsx("div",{className:"flex items-center justify-center h-screen",children:g.jsx("p",{className:"text-xl text-gray-600",children:"Loading product details..."})});const _=()=>{e.category==="Furniture"?(f(e._id),fe.success("Added to Cart!",{position:"top-right",autoClose:2e3})):a?(f(e._id,a),fe.success("Added to Cart!",{position:"top-right",autoClose:2e3})):fe.error("Please select a size before adding to the cart!",{position:"bottom-right",autoClose:2e3})};return g.jsxs("div",{className:"pt-40 pl-5 transition-opacity ease-in duration-500 opacity-100 ml-30 overflow-hidden",children:[g.jsx(Q_,{})," ",g.jsxs("div",{className:"flex flex-col sm:flex-row gap-8 sm:gap-6",children:[g.jsxs("div",{className:"flex-1 flex flex-col sm:flex-row gap-5",children:[g.jsx("div",{className:"flex sm:flex-col gap-3 sm:gap-5",children:(E=e.image)==null?void 0:E.map((A,v)=>g.jsx("img",{src:A,alt:`Thumbnail ${v}`,className:`w-20 object-cover rounded-lg cursor-pointer border-2 ${r===A?"border-blue-500":"border-gray-300"}`,onClick:()=>i(A)},v))}),g.jsx("div",{className:"flex-grow sm:w-3/5",children:r?g.jsx("img",{src:r,alt:e.name,className:"w-90% sm:w-90% lg:w-full h-auto rounded-lg shadow-lg"}):g.jsx("p",{className:"text-gray-500 text-center",children:"No image available"})})]}),g.jsxs("div",{className:"flex-1 mt-6 sm:mt-0",children:[g.jsx("h1",{className:"text-2xl font-medium mt-2",children:e.name}),g.jsxs("div",{className:"flex items-center gap-1 mt-2",children:[[...Array(4)].map((A,v)=>g.jsx("img",{src:Qt.star_icon,alt:"star",className:"w-3.5"},v)),g.jsx("img",{src:Qt.star_dull_icon,alt:"star",className:"w-3.5"}),g.jsx("p",{className:"pl-2",children:"(122)"})]}),g.jsxs("p",{className:"mt-5 text-3xl font-medium",children:[h,e.price]}),g.jsx("p",{className:"text-gray-600 mb-6",children:e.description}),["Kids","Men","Women"].includes(e.category)&&g.jsxs("div",{className:"mb-6",children:[g.jsx("h2",{className:"text-lg font-semibold mb-2",children:"Select Size"}),g.jsx("div",{className:"flex space-x-1 w-80",children:["S","M","L","XL"].map(A=>g.jsx("button",{className:`px-4 py-2 border rounded-lg ${a===A?"bg-black text-white":"hover:bg-black hover:text-white transition"}`,onClick:()=>l(A),children:A},A))}),a&&g.jsxs("p",{className:"mt-2 text-sm text-gray-600",children:["Selected size: ",g.jsx("span",{className:"font-bold",children:a})]})]}),g.jsx("button",{onClick:_,className:"w-full bg-black text-white py-3 rounded-lg text-lg hover:bg-gray-800 transition duration-300",disabled:e.category!=="Furniture"&&!a,children:a||e.category==="Furniture"?"Add to Cart":"Select a Size to Add"}),g.jsxs("div",{className:"mt-8",children:[g.jsx("p",{className:"text-gray-500",children:"100% Original product."}),g.jsx("p",{className:"text-gray-500",children:"Cash on delivery available."}),g.jsx("p",{className:"text-gray-500",children:"Easy returns within 7 days."})]})]})]}),g.jsxs("div",{className:"mt-12",children:[g.jsx("div",{className:"border-b flex space-x-4",children:["Description",`Reviews (${((S=e.reviews)==null?void 0:S.length)||0})`].map((A,v)=>g.jsx("button",{className:`pb-2 text-lg font-semibold ${s===v?"border-b-2 border-black":"text-gray-500"}`,onClick:()=>o(v),children:A},v))}),g.jsx("div",{className:"mt-4",children:s===0?g.jsx("p",{className:"text-gray-600 mb-20 border p-4 font-semibold",children:e.description||"An e-commerce website is an online platform that facilitates the buying and selling of products or services over the internet."}):g.jsx("div",{className:"text-gray-600 mb-20",children:((k=e.reviews)==null?void 0:k.length)>0?e.reviews.map((A,v)=>g.jsx("p",{children:A},v)):g.jsx("p",{children:"Please Wait Loading....."})})})]}),g.jsx(_R,{})]})},gB=()=>{const{currency:t,products:e}=N.useContext(sn),{cartItems:n}=rR(),[r,i]=N.useState(""),[s,o]=N.useState(!1),[a,l]=N.useState({fullName:"",address:"",phone:"",email:""}),c=S=>{const{name:k,value:A}=S.target;l(v=>({...v,[k]:A}))},h=n.reduce((S,k)=>{const A=e.find(v=>v._id===k.productId);return S+((A==null?void 0:A.price)*k.quantity||0)},0),f=5,p=h+f,_=()=>{o(!0);const S=y_(),k=Vn(S,"orders"),A=HV(k);Qh(A,{shippingInfo:a,cartItems:n,paymentMethod:r,subtotal:h,shippingFee:f,total:p,timestamp:nj()}).then(()=>{fe.success("Order placed successfully!"),o(!1)}).catch(v=>{fe.error("Error placing order: "+v.message),o(!1)})},E=()=>{r==="Razorpay"?fe.info("Currently, Razorpay is unavailable. Please select another payment method."):r===""?fe.error("Please select a payment method first."):_()};return g.jsxs("div",{className:"container mx-auto p-8 flex flex-col lg:flex-row gap-8 mb-4",children:[g.jsxs("div",{className:"w-full h-full lg:w-2/3 bg-white p-6 rounded-lg shadow-lg mt-14 mb-5",children:[g.jsx("h3",{className:"text-2xl font-semibold text-gray-800 mb-4",children:"Shipping Information"}),g.jsxs("form",{className:"space-y-4",children:[g.jsxs("div",{children:[g.jsx("label",{className:"block text-gray-700",children:"Full Name"}),g.jsx("input",{type:"text",name:"fullName",value:a.fullName,onChange:c,className:"w-full p-3 border rounded-lg",placeholder:"Enter your full name",required:!0})]}),g.jsxs("div",{children:[g.jsx("label",{className:"block text-gray-700",children:"Address"}),g.jsx("input",{type:"text",name:"address",value:a.address,onChange:c,className:"w-full p-3 border rounded-lg",placeholder:"Enter your address",required:!0})]}),g.jsxs("div",{children:[g.jsx("label",{className:"block text-gray-700",children:"Phone Number"}),g.jsx("input",{type:"number",name:"phone",value:a.phone,onChange:c,className:"w-full p-3 border rounded-lg",placeholder:"Enter your phone number",required:!0})]}),g.jsxs("div",{children:[g.jsx("label",{className:"block text-gray-700",children:"Email Address"}),g.jsx("input",{type:"email",name:"email",value:a.email,onChange:c,className:"w-full p-3 border rounded-lg",placeholder:"Enter your email",required:!0})]}),g.jsxs("div",{className:"mt-4",children:[g.jsx("label",{className:"block text-gray-700",children:"Payment Method"}),g.jsxs("select",{className:"w-full p-3 border rounded-lg",value:r,onChange:S=>i(S.target.value),required:!0,children:[g.jsx("option",{value:"",children:"Select Payment Method"}),g.jsx("option",{value:"COD",children:"Cash on Delivery (COD)"}),g.jsx("option",{value:"Razorpay",children:"Razorpay"})]})]})]})]}),g.jsxs("div",{className:"w-full h-full lg:w-1/3 bg-white p-6 rounded-lg shadow-lg mt-24 bottom-8 right-8",children:[g.jsx("h3",{className:"text-2xl font-semibold text-gray-800 mb-4",children:"Cart Summary"}),g.jsxs("div",{className:"space-y-4",children:[g.jsxs("div",{className:"flex justify-between",children:[g.jsx("span",{className:"text-gray-800 font-medium",children:"Subtotal"}),g.jsxs("span",{className:"text-gray-800",children:[t,h.toFixed(2)]})]}),g.jsxs("div",{className:"flex justify-between",children:[g.jsx("span",{className:"text-gray-800 font-medium",children:"Shipping Fee"}),g.jsxs("span",{className:"text-gray-800",children:[t,f.toFixed(2)]})]}),g.jsxs("div",{className:"flex justify-between font-semibold text-xl",children:[g.jsx("span",{className:"text-gray-800",children:"Total"}),g.jsxs("span",{className:"text-gray-800",children:[t,p.toFixed(2)]})]}),g.jsx("button",{className:`w-full text-white py-3 mt-6 rounded-lg ${s?"bg-gray-500":"bg-black hover:bg-gray-800"} transition-all duration-300`,onClick:E,disabled:s,children:s?"Processing...":"Place Order"})]})]}),g.jsx(Q_,{})]})},_B=()=>{const{userLoggedIn:t}=ld(),[e,n]=N.useState(""),[r,i]=N.useState(""),[s,o]=N.useState(!1),[a,l]=N.useState(""),c=async f=>{f.preventDefault(),o(!0);try{await $_(e,r)}catch(p){l(p.message)}finally{o(!1)}},h=async()=>{o(!0);try{await eR()}catch(f){l(f.message)}finally{o(!1)}};return g.jsxs("div",{children:[t&&g.jsx(WA,{to:"/",replace:!0}),g.jsx("main",{className:"w-[90%] h-screen flex items-center justify-center",children:g.jsxs("div",{className:"w-96 space-y-5 p-4 shadow-lg border rounded-xl",children:[g.jsx("div",{className:"text-center",children:g.jsx("h3",{className:"text-xl font-semibold",children:"Welcome Back"})}),g.jsxs("form",{onSubmit:c,className:"space-y-5",children:[g.jsxs("div",{children:[g.jsx("label",{className:"block text-sm font-bold",children:"Email"}),g.jsx("input",{type:"email",required:!0,value:e,onChange:f=>n(f.target.value),className:"w-full px-3 py-2 border rounded"})]}),g.jsxs("div",{children:[g.jsx("label",{className:"block text-sm font-bold",children:"Password"}),g.jsx("input",{type:"password",required:!0,value:r,onChange:f=>i(f.target.value),className:"w-full px-3 py-2 border rounded"})]}),a&&g.jsx("p",{className:"text-red-600",children:a}),g.jsx("button",{type:"submit",disabled:s,className:"w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700",children:s?"Signing In...":"Sign In"})]}),g.jsxs("p",{className:"text-center text-sm",children:["Don't have an account? ",g.jsx(tt,{to:"/register",className:"font-bold",children:"Sign up"})]}),g.jsxs("div",{className:"flex items-center",children:[g.jsx("div",{className:"border-b flex-grow"}),g.jsx("p",{className:"px-2 text-sm",children:"OR"}),g.jsx("div",{className:"border-b flex-grow"})]}),g.jsxs("button",{disabled:s,onClick:h,className:"w-full flex items-center justify-center gap-2 py-2 border rounded hover:bg-gray-100",children:[g.jsxs("svg",{className:"w-5 h-5",viewBox:"0 0 48 48",fill:"none",children:[g.jsx("path",{d:"...",fill:"#EA4335"}),g.jsx("path",{d:"...",fill:"#FBBC05"}),g.jsx("path",{d:"...",fill:"#34A853"}),g.jsx("path",{d:"...",fill:"#4285F4"})]}),s?"Signing In...":"Sign In with Google"]})]})})]})},yB=()=>{const{setCurrentUser:t}=ld(),e=vl(),n=async()=>{try{await FI(di),t(null),console.log("Logout successful"),e("/login")}catch(r){console.error("Error logging out:",r.message)}};return g.jsx("button",{onClick:n,children:"Logout"})},vB=()=>{const{currency:t,products:e}=N.useContext(sn),[n,r]=N.useState([]),[i,s]=N.useState(!0);return N.useEffect(()=>{(()=>{const a=y_(),l=Vn(a,"orders");rh(l,c=>{const h=c.val();if(h&&typeof h=="object"){const f=Object.keys(h).map(p=>({...h[p]}));r(f)}else console.error("Invalid data format:",h),r([]);s(!1)},c=>{console.error("Error fetching orders:",c),s(!1)})})()},[]),g.jsxs("div",{className:"container mx-auto p-8",children:[g.jsx("h1",{className:"text-2xl font-semibold mb-6",children:"Your Orders"}),i?g.jsx("div",{children:"Loading orders..."}):n.length===0?g.jsx("div",{children:"No orders found."}):g.jsx("div",{className:"space-y-6",children:n.map((o,a)=>g.jsxs("div",{className:"border p-6 rounded-lg shadow-lg flex flex-col gap-4",children:[g.jsxs("div",{className:"flex justify-between items-center",children:[g.jsxs("div",{className:"flex items-center space-x-2",children:[g.jsx("div",{className:"w-2.5 h-2.5 bg-green-500 rounded-full"}),g.jsx("span",{className:"font-semibold",children:"Order Placed"})]}),g.jsx("button",{className:"bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700 transition-all duration-300",onClick:()=>alert("Tracking order"),children:"Track Order"})]}),g.jsx("div",{className:"space-y-2",children:o.cartItems&&o.cartItems.length>0?o.cartItems.map((l,c)=>{const h=e.find(f=>f._id===l.productId);return h?g.jsxs("div",{className:"flex items-center gap-4",children:[g.jsx("div",{className:"w-16 h-16 mr-4",children:g.jsx("img",{src:h.image||"/placeholder-image.jpg",alt:h.name,className:"w-full h-full object-contain"})}),g.jsxs("div",{className:"flex flex-col",children:[g.jsx("span",{className:"font-semibold",children:h.name||"Unknown Product"}),g.jsxs("span",{children:[l.quantity," x"]})]})]},c):null}):g.jsx("div",{children:"No items found."})}),g.jsxs("div",{className:"flex justify-between",children:[g.jsxs("span",{className:"font-semibold",children:["Total: ",o.total?o.total.toFixed(2):"0.00"]}),g.jsx("span",{className:"text-sm text-gray-500",children:o.timestamp?new Date(o.timestamp).toLocaleString():"N/A"})]})]},a))})]})},wB=()=>{const{search:t,setShowSearch:e,getCartCounter:n,cartItem:r}=N.useContext(sn),{setCurrentUser:i}=ld(),[s,o]=N.useState(0),[a,l]=N.useState(!1),[c,h]=N.useState(!1),f=N.useRef(null),p=N.useRef(null),_=N.useRef(null),E=vl(),S=async()=>{var T;try{const b=(T=di.currentUser)==null?void 0:T.uid;if(b){const M=Z3(A6,"carts",b),V=await m6(M);V.exists()?o(V.data().count||0):(console.warn("No cart document found for user:",b),await _6(M,{count:0}),o(0))}else console.warn("No authenticated user found.")}catch(b){console.error("Error fetching cart count:",b.message)}},k=async()=>{try{await FI(di),i(null),E("/login")}catch(T){console.error("Error logging out:",T.message)}},A=()=>{h(T=>!T)},v=()=>{l(!a)};return N.useEffect(()=>{S()},[r]),g.jsxs("div",{className:"nav",children:[g.jsx(tt,{to:"/",children:g.jsx("img",{className:"logo",src:Qt.logo,alt:"Logo"})}),g.jsxs("ul",{className:"nav-element",children:[g.jsx(Jn,{to:"/",className:"navlinks",children:"HOME"}),g.jsx(Jn,{to:"/collection",className:"navlinks",children:"COLLECTION"}),g.jsx(Jn,{to:"/about",className:"navlinks",children:"DECOR"}),g.jsx(Jn,{to:"/orders",className:"navlinks",children:"ORDER"})]}),g.jsxs("div",{className:"search flex items-center gap-6",children:[g.jsx(tt,{to:"/search-result",children:g.jsx("img",{src:Qt.search_icon,className:"w-5 cursor-pointer",alt:"Search Icon"})}),g.jsxs("div",{className:"group relative",children:[g.jsx(tt,{to:"/login",children:g.jsx("img",{src:Qt.profile_icon,className:"w-5 cursor-pointer",alt:"Profile Icon",ref:p,onClick:A})}),c&&g.jsx("div",{className:"dropdown",ref:f,children:g.jsx("p",{className:"dropdown-item",onClick:k,children:"Logout"})})]}),g.jsxs(tt,{to:"/cart",children:[g.jsx("img",{className:"w-5 min-w-5 cursor-pointer",src:Qt.cart_icon,alt:"Cart Icon"}),g.jsx("p",{className:"order",children:n()})," "]}),g.jsx("img",{onClick:v,className:"mobile-menu",src:Qt.menu_icon,alt:"Mobile Menu"})]}),a&&g.jsxs("div",{className:"mobile-menu-overlay",ref:_,children:[g.jsx("button",{className:"close-btn",onClick:()=>l(!1),children:g.jsx("img",{src:Qt.cross_icon,alt:"Close"})}),g.jsxs("div",{className:"mobile-menu-list",children:[g.jsx(Jn,{to:"/",onClick:()=>l(!1),children:"Home"}),g.jsx(Jn,{to:"/collection",onClick:()=>l(!1),children:"Collection"}),g.jsx(Jn,{to:"/about",onClick:()=>l(!1),children:"Decor"}),g.jsx(Jn,{to:"/orders",onClick:()=>l(!1),children:"Order"}),g.jsxs(tt,{to:"/cart",onClick:()=>l(!1),children:["Cart ",g.jsx("p",{className:"order",children:n()>0?n():""})]})]})]})]})},AB=()=>{const{currency:t,products:e}=N.useContext(sn),{cartItems:n,addToCart:r,removeFromCart:i,clearCart:s}=rR(),o=n.reduce((c,h)=>{const f=e.find(p=>p._id===h.productId);return f?c+f.price*h.quantity:c},0),a=5,l=o+a;return g.jsxs("div",{className:"container  p-4 flex flex-col mb-16",children:[g.jsxs("div",{className:"flex-1 mr-6 mb-16",children:[g.jsx("h2",{className:"text-3xl font-semibold text-center text-gray-800 mt-20 mb-4",children:"Your Shopping Cart"}),n.length===0?g.jsx("p",{className:"text-center text-gray-600",children:"Your cart is empty."}):g.jsx("ul",{className:"space-y-6",children:n.map(c=>{const h=e.find(p=>p._id===c.productId);if(!h)return null;const f=(h.price*c.quantity).toFixed(2);return g.jsxs("li",{className:"border rounded flex items-center bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 ease-in-out",children:[g.jsx("div",{className:"w-90% h-32 md:h-40 mr-6 border-2 border-gray-300 rounded-lg overflow-hidden",children:g.jsx("img",{src:Array.isArray(h.image)?h.image[0]:h.image,alt:h.name,className:"w-full h-full object-contain"})}),g.jsxs("div",{className:"flex-1",children:[g.jsx("h3",{className:"text-xl font-semibold text-gray-800",children:h.name}),g.jsxs("p",{className:"text-gray-600 mt-2",children:["Size: ",c.size]}),g.jsxs("p",{className:"text-gray-600 mt-1",children:["Quantity: ",c.quantity]}),g.jsxs("p",{className:"text-gray-800 font-semibold mt-2",children:[t,f]})]}),g.jsx("div",{className:"flex items-center justify-end space-x-4",children:g.jsx("button",{onClick:()=>i(c.productId,c.size),className:"bg-black text-white px-5 py-2 rounded-lg hover:bg-red-700 transition-all duration-300",children:"Remove"})})]},c.productId+c.size)})})]}),g.jsxs("div",{className:"w-full md:w-1/3 p-6 border-2 border-gray-300 rounded-lg shadow-lg mt-8 mb-4 ml-auto",children:[g.jsx("h3",{className:"text-2xl font-semibold text-gray-800 mb-4",children:"Cart Summary"}),g.jsxs("div",{className:"space-y-4",children:[g.jsxs("div",{className:"flex justify-between",children:[g.jsx("span",{className:"text-gray-800 font-medium",children:"Subtotal"}),g.jsxs("span",{className:"text-gray-800",children:[t,o.toFixed(2)]})]}),g.jsxs("div",{className:"flex justify-between",children:[g.jsx("span",{className:"text-gray-800 font-medium",children:"Shipping Fee"}),g.jsxs("span",{className:"text-gray-800",children:[t,a.toFixed(2)]})]}),g.jsxs("div",{className:"flex justify-between font-semibold text-xl",children:[g.jsx("span",{className:"text-gray-800",children:"Total"}),g.jsxs("span",{className:"text-gray-800",children:[t,l.toFixed(2)]})]}),g.jsx(tt,{to:"/pay",children:g.jsx("button",{className:"w-full bg-black text-white py-3 mt-6 rounded-lg hover:bg-gray-800 transition-all duration-300",children:"Proceed to Pay"})})]})]})]})},EB=()=>{const t=vl(),[e,n]=N.useState(""),[r,i]=N.useState(""),[s,o]=N.useState(""),[a,l]=N.useState(!1),[c,h]=N.useState(""),{userLoggedIn:f}=ld(),p=async _=>{if(_.preventDefault(),a)try{await $_(e,r),t("/")}catch(E){h(E.message),l(!1)}else{l(!0);try{await E6(e,r)}catch(E){h(E.message),l(!1)}}};return g.jsxs(g.Fragment,{children:[f&&g.jsx(WA,{to:"/",replace:!0}),g.jsx("main",{className:"w-full h-screen flex self-center place-content-center place-items-center",children:g.jsxs("div",{className:"w-96 text-gray-600 space-y-5 p-4 shadow-xl border1 rounded-xl",children:[g.jsx("div",{className:"text-center mb-6",children:g.jsx("h3",{className:"text-gray-800 text-xl font-semibold sm:text-2xl",children:"Create a New Account"})}),g.jsxs("form",{onSubmit:p,className:"space-y-4",children:[g.jsxs("div",{children:[g.jsx("label",{className:"text-sm text-gray-600 font-bold",children:"Email"}),g.jsx("input",{type:"email",autoComplete:"email",required:!0,value:e,onChange:_=>{n(_.target.value)},className:"w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:indigo-600 shadow-sm rounded-lg transition duration-300"})]}),g.jsxs("div",{children:[g.jsx("label",{className:"text-sm text-gray-600 font-bold",children:"Password"}),g.jsx("input",{disabled:a,type:"password",autoComplete:"new-password",required:!0,value:r,onChange:_=>{i(_.target.value)},className:"w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-indigo-600 shadow-sm rounded-lg transition duration-300"})]}),g.jsxs("div",{children:[g.jsx("label",{className:"text-sm text-gray-600 font-bold",children:"Confirm Password"}),g.jsx("input",{disabled:a,type:"password",autoComplete:"off",required:!0,value:s,onChange:_=>{o(_.target.value)},className:"w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-indigo-600 shadow-sm rounded-lg transition duration-300"})]}),c&&g.jsx("span",{className:"text-red-600 font-bold",children:c}),g.jsx("button",{type:"submit",disabled:a,className:`w-full px-4 py-2 text-white font-medium rounded-lg ${a?"bg-gray-300 cursor-not-allowed":"bg-indigo-600 hover:bg-indigo-700 hover:shadow-xl transition duration-300"}`,children:a?"Signing Up...":"Sign Up"}),g.jsxs("div",{className:"text-sm text-center",children:["Already have an account? "," ",g.jsx(tt,{to:"/login",className:"text-center text-sm hover:underline font-bold",children:"Continue"})]})]})]})})]})},TB="/assets/instagram-rqCeNmKj.png",IB="/assets/faceboook-C0KAMzRK.png",CB="data:image/svg+xml,%3csvg%20viewBox='0%200%20180%2046.436'%20height='46.436'%20width='180'%20xmlns='http://www.w3.org/2000/svg'%3e%3cg%20transform='translate(0%20-0.781)'%20id='Group'%3e%3cpath%20fill='%23fbf6f1'%20d='M145.778,2.383,156.9,28.129,168.931,2.383H180L159.18,46.02H148.533l6.282-13.47c-4.009-.1-7.391-1.937-8.795-4.994-2.9-6.319-11.851-25.17-11.851-25.17h11.609Z'%20id='Vector'%3e%3c/path%3e%3cpath%20fill='%23fbf6f1'%20d='M38.144,24.659c-4.784-3.467-11.565-4.3-15.058-4.919-7.5-1.334-10.318-2.341-10.318-5.694s4.844-4.689,8.747-4.689,9.108,1,9.108,6.578H41.981c0-5.694-1.988-9.083-5.861-11.545C32.38,2.013,27.579.781,21.822.781s-10.691,1.242-14.3,3.5c-3.987,2.5-6.1,6.093-6.1,10.4,0,5.27,3.612,9.5,9.514,11.419,5.266,1.712,11.6,2.68,13.884,3.295,2.936.792,6.447,1.808,6.447,4.493,0,2.876-3.767,4.922-8.846,4.922-7.878,0-11.136-4.021-11.136-8.752H0c0,6.1,2.409,10.088,6.97,13.068,4.043,2.641,9.558,4.094,15.535,4.094,5.517,0,10.536-1.259,14.131-3.542,3.949-2.508,6.033-6.069,6.033-10.3A10.553,10.553,0,0,0,38.144,24.659Z'%20id='Vector_2'%3e%3c/path%3e%3cpath%20fill='%23fbf6f1'%20d='M90.366,46.019v-8.13c-2.143,0-3.837-.579-3.837-3.59V17c0-5.137-1.695-9.161-5.035-11.967C78.13,2.212,73.049.781,66.4.781c-6.246,0-10.906,1.3-14.349,3.752-3.273,2.331-3.784,5.423-3,7.386,2.13,5.355,14.247,6.549,18.539,6.9-11.223,1.489-15.533,3.423-18.506,5.827a11.448,11.448,0,0,0-4.416,9.308,11.583,11.583,0,0,0,4.016,9.161c2.789,2.411,6.716,3.566,12.005,3.566,6.757,0,12.339-1.971,16.271-6.256C78.644,44.728,82.667,47.164,90.366,46.019ZM75.271,27.583a10.021,10.021,0,0,1-3.07,7.672c-2.031,1.891-4.944,2.849-8.66,2.849-3.965,0-6.892-1.607-7.447-4.994-.678-4.125,4.273-7.311,8.093-9.161,3.251-1.574,5.975-2.811,5.931-5.621-2.113-.22-11.09-1.407-11.766-4.055-.38-1.491,1.169-4.316,8.047-4.316,5.28,0,8.873,2.341,8.873,5.592C75.271,18.558,75.271,24.574,75.271,27.583Z'%20id='Vector_3'%3e%3c/path%3e%3cpath%20fill='%23fbf6f1'%20d='M132.475,5.363V2.383H93.406v8.425h25.827L92.544,37.886v8.129h41.369V37.59H105.8l23.042-23.381A12.585,12.585,0,0,0,132.475,5.363Z'%20id='Vector_4'%3e%3c/path%3e%3c/g%3e%3c/svg%3e",SB="/assets/whatsapp-vhstbckL.png",RB="/assets/linkedin-CwbySpd8.png",kB=()=>g.jsxs("div",{className:"bg",children:[g.jsxs("div",{className:"contact",children:[g.jsx("h1",{children:"C o n t a c t"}),g.jsxs("div",{className:"icons",children:[g.jsx("img",{src:TB,alt:""}),g.jsx("img",{src:IB,alt:""}),g.jsx("img",{src:SB,alt:""}),g.jsx("img",{src:RB,alt:""})]}),g.jsxs("div",{className:"links",children:[g.jsxs("div",{className:"useful",children:[g.jsx("h1",{children:"Useful Information"}),g.jsx("ul",{children:"Our Values"}),g.jsx("ul",{children:"Trade Enquries"}),g.jsx("ul",{children:"Delivery Information"}),g.jsx("ul",{children:"FAQ"}),g.jsx("ul",{children:"Blog"}),g.jsx("ul",{children:"Terms & Condition"}),g.jsx("ul",{children:"Privacy Policy"})]}),g.jsxs("div",{className:"find",children:[g.jsx("h1",{children:"Find Us"}),g.jsx("ul",{children:"27 Old Street"}),g.jsx("ul",{children:"Delhi, India"}),g.jsx("ul",{children:"Monday to Friday 10am - 4pm"})]}),g.jsxs("div",{className:"Contact",children:[g.jsx("h1",{children:"Contact Us"}),g.jsx("ul",{children:"Email:  saksham.juneja007@gmail.com"}),g.jsx("ul",{children:"Whatsapp: +91 798857 6194"})]})]})]}),g.jsx("div",{className:" flex justify-center items-center py-8",children:g.jsx("img",{src:CB,alt:"Footer Decorative",className:"svg"})}),g.jsx("h1",{className:"copywrite",children:"Made and Mantain By Saksham Juneja © 2024 - Sazy"})]}),TR=({searchQuery:t})=>{const{currency:e,products:n}=N.useContext(sn),[r,i]=N.useState([]);return N.useEffect(()=>{if(n){const s=t.toLowerCase(),o=n.filter(a=>{var l,c,h;return a.category==="Furniture"&&(((l=a.name)==null?void 0:l.toLowerCase().includes(s))||((c=a.category)==null?void 0:c.toLowerCase().includes(s))||((h=a.subCategory)==null?void 0:h.toLowerCase().includes(s)))});i(o)}},[t,n]),g.jsx("div",{className:"decore-results-container",children:g.jsxs("div",{className:"decore-results-grid",children:[r==null?void 0:r.map(s=>g.jsxs("div",{className:"decore-product-card",children:[g.jsxs("div",{className:"decore-product-image-wrapper",children:[g.jsx(tt,{to:`/product/${s._id}`,children:g.jsx("img",{src:s.image?s.image[0]:"",alt:s.name||"Product image",className:"decore-product-image"})}),s.hoverImage&&s.hoverImage[0]&&g.jsx(tt,{to:`/product/${s._id}`,children:g.jsx("img",{src:s.hoverImage[0],alt:`${s.name||"Product"} hover`,className:"decore-product-hover-image"})})]}),g.jsx("h3",{className:"decore-product-name",children:s.name}),g.jsxs("p",{className:"decore-product-price",children:[s.currency||e," ",s.price]})]},s._id)),(r==null?void 0:r.length)===0&&g.jsxs("p",{className:"decore-no-results",children:['No items available for "',t,'".']})]})})},xB=()=>{const{currency:t,products:e}=N.useContext(sn),[n,r]=N.useState(""),[i,s]=N.useState([]);return N.useEffect(()=>{const o=n.toLowerCase(),a=e==null?void 0:e.filter(l=>{var c,h,f;return(((c=l.name)==null?void 0:c.toLowerCase().includes(o))||((h=l.category)==null?void 0:h.toLowerCase().includes(o))||((f=l.subCategory)==null?void 0:f.toLowerCase().includes(o)))&&l.category!=="Furniture"});s(a)},[n,e]),g.jsxs("div",{className:"search-results-container",children:[g.jsx("div",{className:"text-center text-3xl py-8 search-results-header",children:g.jsx(Ro,{text1:"SEARCH ",text2:" RESULTS"})}),g.jsx("input",{type:"text",placeholder:"Search for products, categories, or subcategories...",value:n,onChange:o=>r(o.target.value),className:"search-results-input","aria-label":"Search Products"}),g.jsx("div",{className:"search-results-grid",children:(i==null?void 0:i.length)>0?i.map(o=>g.jsxs("div",{className:"search-results-product-card",children:[g.jsx("div",{className:"search-results-product-image-wrapper",children:g.jsx(tt,{to:`/product/${o._id}`,children:g.jsx("img",{src:o.image[0],alt:o.name,className:"search-results-product-image"})})}),g.jsx("h3",{className:"search-results-product-name",children:o.name}),g.jsxs("p",{className:"search-results-product-price",children:[t,o.price]})]},o._id)):g.jsxs("p",{children:['No results found for "',n,'".']})}),e&&g.jsx(TR,{searchQuery:n,products:i})]})},NB=()=>{const t=Ir();return g.jsx(T6,{children:g.jsx(I6,{children:g.jsxs("div",{children:[g.jsx(wB,{}),g.jsx(Q_,{}),g.jsxs(Tx,{children:[g.jsx(Ot,{path:"/",element:g.jsx(eB,{})}),g.jsx(Ot,{path:"/collection",element:g.jsx(tB,{})}),g.jsx(Ot,{path:"/about",element:g.jsx(nB,{})}),g.jsx(Ot,{path:"/contact",element:g.jsx(rB,{})}),g.jsx(Ot,{path:"/product/:productId",element:g.jsx(mB,{})}),g.jsx(Ot,{path:"/login",element:g.jsx(_B,{})}),g.jsx(Ot,{path:"/register",element:g.jsx(EB,{})}),g.jsx(Ot,{path:"/logout",element:g.jsx(yB,{})}),g.jsx(Ot,{path:"/cart",element:g.jsx(AB,{})}),g.jsx(Ot,{path:"/pay",element:g.jsx(gB,{})}),g.jsx(Ot,{path:"/orders",element:g.jsx(vB,{})}),g.jsx(Ot,{path:"/search-result",element:g.jsx(xB,{})}),g.jsx(Ot,{path:"/search-decore",element:g.jsx(TR,{})})]}),!(t.pathname==="/cart"||t.pathname==="/pay"||t.pathname==="/collection"||t.pathname==="/about"||t.pathname==="/orders"||t.pathname==="/")&&g.jsx(_R,{}),g.jsx(kB,{})]})})})},IR=document.getElementById("root");if(!IR)throw new Error("Root element with id 'root' not found");Rp.createRoot(IR).render(g.jsx(N.StrictMode,{children:g.jsx(Kx,{children:g.jsx(q5,{children:g.jsx(NB,{})})})}));
