import{S as t,i as a,s as e,j as n,k as s,e as r,m as o,n as c,c as i,a as f,d as l,b as u,o as h,f as d,F as g,G as m,v as p,r as v,w as y,z as w}from"../chunks/vendor-be29eaa4.js";import{l as x}from"../chunks/userLogged-c5a11fa4.js";import{L as b}from"../chunks/logger-e2015d7d.js";import{H as k}from"../chunks/HeadTags-5a730f67.js";const j=new class{async get(t){return(await this.fetch(t)).json()}async fetch(t){return await fetch(t)}};function $(t){let a,e,w,x,b,j,$,I,E;return a=new k({props:{metaData:t[0]}}),{c(){n(a.$$.fragment),e=s(),w=r("section"),x=r("div"),b=r("br"),j=s(),$=r("div"),I=r("div"),this.h()},l(t){o(a.$$.fragment,t),e=c(t),w=i(t,"SECTION",{class:!0});var n=f(w);x=i(n,"DIV",{});var s=f(x);b=i(s,"BR",{}),j=c(s),$=i(s,"DIV",{class:!0});var r=f($);I=i(r,"DIV",{class:!0}),f(I).forEach(l),r.forEach(l),s.forEach(l),n.forEach(l),this.h()},h(){u(I,"class","grid grid-cols-3 gap-4"),u($,"class","grid grid-cols-2 justify-content text-center"),u(w,"class"," relative body-font items-center bg-center bg-no-repeat bg-cover  bg-kaylanicole1 h-screen")},m(t,n){h(a,t,n),d(t,e,n),d(t,w,n),g(w,x),g(x,b),g(x,j),g(x,$),g($,I),E=!0},p:m,i(t){E||(p(a.$$.fragment,t),E=!0)},o(t){v(a.$$.fragment,t),E=!1},d(t){y(a,t),t&&l(e),t&&l(w)}}}var I=function(t,a,e,n){return new(e||(e=Promise))((function(s,r){function o(t){try{i(n.next(t))}catch(a){r(a)}}function c(t){try{i(n.throw(t))}catch(a){r(a)}}function i(t){var a;t.done?s(t.value):(a=t.value,a instanceof e?a:new e((function(t){t(a)}))).then(o,c)}i((n=n.apply(t,a||[])).next())}))};function E({fetch:t}){return I(this,void 0,void 0,(function*(){try{return yield t("/sitemap.xml"),!0}catch(a){console.error(a)}}))}function D(t){var a=this&&this.__awaiter||function(t,a,e,n){return new(e||(e=Promise))((function(s,r){function o(t){try{i(n.next(t))}catch(a){r(a)}}function c(t){try{i(n.throw(t))}catch(a){r(a)}}function i(t){var a;t.done?s(t.value):(a=t.value,a instanceof e?a:new e((function(t){t(a)}))).then(o,c)}i((n=n.apply(t,a||[])).next())}))};const e=b.getInstance("Index");return w((()=>a(void 0,void 0,void 0,(function*(){const t=yield j.get("https://jsonplaceholder.typicode.com/photos?_limit=20");e.debug(t),x.set(!1)})))),[{title:"Home | Kayla's Corner",description:"Kayla Nicole Lare's writing space",keywords:["kaylanicole","Kayla","kaylanicolelare"]}]}export default class extends t{constructor(t){super(),a(this,t,D,$,e,{})}}export{E as load};