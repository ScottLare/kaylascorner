import{S as a,i as t,s as e,j as s,k as l,e as r,t as o,m as n,n as c,c as i,a as f,g as h,d as m,b as p,o as d,f as b,F as u,v as g,r as v,w as x,G as $,H as E,M as w}from"../../chunks/vendor-be29eaa4.js";import{D as I,V as k,a as y,g as _}from"../../chunks/verToolbar-b52ad12a.js";import{H as D}from"../../chunks/HeadTags-5a730f67.js";import"../../chunks/logger-e2015d7d.js";import"../../chunks/singletons-bb9012b7.js";function T(a,t,e){const s=a.slice();return s[4]=t[e],s}function A(a){let t,e,s=a[4].name+"";return{c(){t=r("li"),e=o(s),this.h()},l(a){t=i(a,"LI",{class:!0});var l=f(t);e=h(l,s),l.forEach(m),this.h()},h(){p(t,"class","pt-point-6 px-4 font-mono text-blue-800 hover:text-blue-400")},m(a,s){b(a,t,s),u(t,e)},p:$,d(a){a&&m(t)}}}function N(a){let t,e,s,o,n,h=a[1],d=[];for(let l=0;l<h.length;l+=1)d[l]=A(T(a,h,l));return{c(){t=r("span"),e=r("div"),s=r("ul");for(let a=0;a<d.length;a+=1)d[a].c();o=l(),n=r("li"),this.h()},l(a){t=i(a,"SPAN",{slot:!0});var l=f(t);e=i(l,"DIV",{class:!0});var r=f(e);s=i(r,"UL",{class:!0});var h=f(s);for(let t=0;t<d.length;t+=1)d[t].l(h);o=c(h),n=i(h,"LI",{}),f(n).forEach(m),h.forEach(m),r.forEach(m),l.forEach(m),this.h()},h(){p(s,"class","pl-0 pt-3 list-none"),p(e,"class","text-center font-mono"),p(t,"slot","name1_dropdown")},m(a,l){b(a,t,l),u(t,e),u(e,s);for(let t=0;t<d.length;t+=1)d[t].m(s,null);u(s,o),u(s,n)},p(a,t){if(2&t){let e;for(h=a[1],e=0;e<h.length;e+=1){const l=T(a,h,e);d[e]?d[e].p(l,t):(d[e]=A(l),d[e].c(),d[e].m(s,o))}for(;e<d.length;e+=1)d[e].d(1);d.length=h.length}},d(a){a&&m(t),E(d,a)}}}function V(a){let t,e,s,n,d,g,v,x,E,I,k,y,_,D,T;return{c(){t=r("span"),e=r("div"),s=r("p"),n=o("System Alerts\n\t\t\t\t\t\t"),d=r("span"),g=o("3"),v=l(),x=r("hr"),E=l(),I=r("ul"),k=r("li"),y=r("em"),_=o("No messages"),this.h()},l(a){t=i(a,"SPAN",{slot:!0});var l=f(t);e=i(l,"DIV",{class:!0});var r=f(e);s=i(r,"P",{class:!0});var o=f(s);n=h(o,"System Alerts\n\t\t\t\t\t\t"),d=i(o,"SPAN",{class:!0});var p=f(d);g=h(p,"3"),p.forEach(m),o.forEach(m),r.forEach(m),v=c(l),x=i(l,"HR",{class:!0}),E=c(l),I=i(l,"UL",{class:!0});var b=f(I);k=i(b,"LI",{class:!0});var u=f(k);y=i(u,"EM",{class:!0});var $=f(y);_=h($,"No messages"),$.forEach(m),u.forEach(m),b.forEach(m),l.forEach(m),this.h()},h(){p(d,"class","clear ml-20 text-xl no-underline font-normal cursor-pointer "),p(s,"class"," float-left m-4 text-xl no-underline font-normal cursor-pointer"),p(e,"class","flex items-center hover:text-gray-300 text-gray-800"),p(x,"class","clear-both ml-4point5 w-3/5 border-none h-px bg-messagesHr overflow-visible box-content border-2 border-black"),p(y,"class","italic font-normal"),p(k,"class","py-point-6 px-4"),p(I,"class","clear-both list-none pl-0 pt-5 pb-5"),p(t,"slot","name4_dropdown")},m(l,r){b(l,t,r),u(t,e),u(e,s),u(s,n),u(s,d),u(d,g),u(t,v),u(t,x),u(t,E),u(t,I),u(I,k),u(k,y),u(y,_),D||(T=w(e,"click",a[2]),D=!0)},p:$,d(a){a&&m(t),D=!1,T()}}}function j(a){let t,e,$,E,w,y,_,T,A,j,S,P,R,H,U,L,B,C,M,F,G,O,X,Y,q,z,J,K;return t=new D({props:{metaData:a[0]}}),w=new I({props:{bg_color:"bg-blue-400",name_1:"RTI Group",name_4:"Notifications",text_color1:"text-blue-600",name_inner_1:a[1][0].name,$$slots:{name4_dropdown:[V],name1_dropdown:[N]},$$scope:{ctx:a}}}),A=new k({props:{nav_link1:"/billing",nav_link2:"/import",nav_link3:"/admin",nav_link4:"/help"}}),{c(){s(t.$$.fragment),e=l(),$=r("body"),E=r("div"),s(w.$$.fragment),y=l(),_=r("div"),T=r("div"),s(A.$$.fragment),j=l(),S=r("div"),P=r("h1"),R=o("Email"),H=l(),U=r("div"),L=l(),B=r("form"),C=r("input"),M=r("br"),F=l(),G=r("input"),O=r("br"),X=l(),Y=r("textarea"),q=l(),z=r("div"),J=r("input"),this.h()},l(a){n(t.$$.fragment,a),e=c(a),$=i(a,"BODY",{class:!0});var s=f($);E=i(s,"DIV",{id:!0});var l=f(E);n(w.$$.fragment,l),y=c(l),_=i(l,"DIV",{class:!0});var r=f(_);T=i(r,"DIV",{class:!0});var o=f(T);n(A.$$.fragment,o),j=c(o),S=i(o,"DIV",{id:!0,class:!0});var p=f(S);P=i(p,"H1",{class:!0});var d=f(P);R=h(d,"Email"),d.forEach(m),H=c(p),U=i(p,"DIV",{class:!0}),f(U).forEach(m),L=c(p),B=i(p,"FORM",{class:!0});var b=f(B);C=i(b,"INPUT",{class:!0,type:!0,placeholder:!0,name:!0}),M=i(b,"BR",{}),F=c(b),G=i(b,"INPUT",{class:!0,type:!0,placeholder:!0,name:!0}),O=i(b,"BR",{}),X=c(b),Y=i(b,"TEXTAREA",{class:!0,name:!0}),f(Y).forEach(m),q=c(b),z=i(b,"DIV",{class:!0});var u=f(z);J=i(u,"INPUT",{class:!0,type:!0,name:!0,value:!0}),u.forEach(m),b.forEach(m),p.forEach(m),o.forEach(m),r.forEach(m),l.forEach(m),s.forEach(m),this.h()},h(){p(P,"class","text-rem-1point9 text-teal-500 inline-block p-dashboardContenth1 m-dashboardContenth1"),p(U,"class","bg-teal-300 w-full flex p-6"),p(C,"class","border-b-2 w-full text-3xl font-serif"),p(C,"type","text"),p(C,"placeholder","To:"),p(C,"name","to"),p(G,"class","border-b-2 w-full text-3xl font-serif"),p(G,"type","text"),p(G,"placeholder","Subject:"),p(G,"name","subject"),p(Y,"class","w-full h-96 pl-4 pt-4"),p(Y,"name","message"),p(J,"class","bg-teal-800 py-4 px-4 text-white"),p(J,"type","submit"),p(J,"name","send"),J.value="Send",p(z,"class","inline mt-0"),p(B,"class","w-full bg-teal-300"),p(S,"id","default"),p(S,"class","h-screen overflow-scroll block mr-2 bg-teal-100 m-dashboardContent rounded-2px flex-1 p-8"),p(T,"class","bg-iframeback bg-no-repeat bg-scroll bg-clip-border bg-cover flex-1 flex bg-dashboard"),p(_,"class","row main overflow-y-auto w-full clear-both"),p(E,"id","dashboard"),p($,"class","m-0 overflow-hidden")},m(a,s){d(t,a,s),b(a,e,s),b(a,$,s),u($,E),d(w,E,null),u(E,y),u(E,_),u(_,T),d(A,T,null),u(T,j),u(T,S),u(S,P),u(P,R),u(S,H),u(S,U),u(S,L),u(S,B),u(B,C),u(B,M),u(B,F),u(B,G),u(B,O),u(B,X),u(B,Y),u(B,q),u(B,z),u(z,J),K=!0},p(a,[t]){const e={};128&t&&(e.$$scope={dirty:t,ctx:a}),w.$set(e)},i(a){K||(g(t.$$.fragment,a),g(w.$$.fragment,a),g(A.$$.fragment,a),K=!0)},o(a){v(t.$$.fragment,a),v(w.$$.fragment,a),v(A.$$.fragment,a),K=!1},d(a){x(t,a),a&&m(e),a&&m($),x(w),x(A)}}}const S=!1,P=!0;function R(a){return[{title:"About | Data Integrator",description:"About page of the RTI International, Inc. Data Integrator",url:"/about",keywords:["sveltekit","sveltekit starter","sveltekit starter about"],searchUrl:"/about"},y,()=>_("/admin?alerts")]}export default class extends a{constructor(a){super(),t(this,a,R,j,e,{})}}export{S as hydrate,P as prerender};