import{i as D,j as k,k as E,f as I,a as L,g as V,l as T,s as v,d as R,m as H,e as p,o as M,p as Y,q,r as C,t as P,u as $,c as j,v as z,w as B,h as b,x as W,y as F,z as G}from"./runtime.CwDlLH0B.js";import{r as J}from"./svelte-head.BDx8MvP6.js";import{b as K}from"./disclose-version.CX7eXB4p.js";const Q=new Set,O=new Set;function w(r){var N;var e=this,d=e.ownerDocument,c=r.type,o=((N=r.composedPath)==null?void 0:N.call(r))||[],t=o[0]||r.target,i=0,_=r.__root;if(_){var f=o.indexOf(_);if(f!==-1&&(e===document||e===window)){r.__root=e;return}var u=o.indexOf(e);if(u===-1)return;f<=u&&(i=f)}if(t=o[i]||r.target,t!==e){D(r,"currentTarget",{configurable:!0,get(){return t||d}});try{for(var h,s=[];t!==null;){var n=t.assignedSlot||t.parentNode||t.host||null;try{var a=t["__"+c];if(a!==void 0&&!t.disabled)if(k(a)){var[l,...g]=a;l.apply(t,[r,...g])}else a.call(t,r)}catch(m){h?s.push(m):h=m}if(r.cancelBubble||n===e||n===null)break;t=n}if(h){for(let m of s)queueMicrotask(()=>{throw m});throw h}}finally{r.__root=e,delete r.currentTarget}}}const U=["touchstart","touchmove"];function X(r){return U.includes(r)}function tr(r,e){e!==(r.__t??(r.__t=r.nodeValue))&&(r.__t=e,r.nodeValue=e==null?"":e+"")}function Z(r,e){return A(r,e)}function ar(r,e){E(),e.intro=e.intro??!1;const d=e.target,c=b,o=p;try{for(var t=I(d);t&&(t.nodeType!==8||t.data!==L);)t=V(t);if(!t)throw T;v(!0),R(t),H();const i=A(r,{...e,anchor:t});if(p===null||p.nodeType!==8||p.data!==M)throw Y(),T;return v(!1),i}catch(i){if(i===T)return e.recover===!1&&q(),E(),C(d),v(!1),Z(r,e);throw i}finally{v(c),R(o),J()}}const y=new Map;function A(r,{target:e,anchor:d,props:c={},events:o,context:t,intro:i=!0}){E();var _=new Set,f=s=>{for(var n=0;n<s.length;n++){var a=s[n];if(!_.has(a)){_.add(a);var l=X(a);e.addEventListener(a,w,{passive:l});var g=y.get(a);g===void 0?(document.addEventListener(a,w,{passive:l}),y.set(a,1)):y.set(a,g+1)}}};f(P(Q)),O.add(f);var u=void 0,h=$(()=>{var s=d??e.appendChild(j());return z(()=>{if(t){B({});var n=G;n.c=t}o&&(c.$$events=o),b&&K(s,null),u=r(s,c)||{},b&&(W.nodes_end=p),t&&F()}),()=>{var l;for(var n of _){e.removeEventListener(n,w);var a=y.get(n);--a===0?(document.removeEventListener(n,w),y.delete(n)):y.set(n,a)}O.delete(f),S.delete(u),s!==d&&((l=s.parentNode)==null||l.removeChild(s))}});return S.set(u,h),u}let S=new WeakMap;function nr(r){const e=S.get(r);e&&e()}export{ar as h,Z as m,tr as s,nr as u};