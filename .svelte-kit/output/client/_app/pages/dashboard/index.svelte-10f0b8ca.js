import{S as a,i as t,s,l as e,f as r,d as l,j as o,k as c,e as n,t as h,K as f,m as i,n as p,c as d,a as v,g as m,b as x,L as g,o as u,F as b,v as E,r as w,w as y,H as T,G as D,M as V,N as B}from"../../chunks/vendor-be29eaa4.js";import{D as I,a as k,g as $}from"../../chunks/verToolbar-b52ad12a.js";import{H}from"../../chunks/HeadTags-5a730f67.js";import{V as R}from"../../chunks/vertTool-e28a0615.js";import{N}from"../../chunks/navbar-bd10f642.js";import"../../chunks/logger-e2015d7d.js";import"../../chunks/singletons-bb9012b7.js";import"../../chunks/userLogged-c5a11fa4.js";function z(a,t,s){const e=a.slice();return e[5]=t[s],e[7]=s,e}function S(a,t,s){const e=a.slice();return e[8]=t[s],e[10]=s,e}function L(a,t,s){const e=a.slice();return e[5]=t[s],e}function M(a){let t,s,e=a[5].name+"";return{c(){t=n("li"),s=h(e),this.h()},l(a){t=d(a,"LI",{class:!0});var r=v(t);s=m(r,e),r.forEach(l),this.h()},h(){x(t,"class","pt-point-6 px-4 font-mono text-blue-800 hover:text-blue-400")},m(a,e){r(a,t,e),b(t,s)},p:D,d(a){a&&l(t)}}}function C(a){let t,s,e,o,h,f=a[1],i=[];for(let r=0;r<f.length;r+=1)i[r]=M(L(a,f,r));return{c(){t=n("span"),s=n("div"),e=n("ul");for(let a=0;a<i.length;a+=1)i[a].c();o=c(),h=n("li"),this.h()},l(a){t=d(a,"SPAN",{slot:!0});var r=v(t);s=d(r,"DIV",{class:!0});var c=v(s);e=d(c,"UL",{class:!0});var n=v(e);for(let t=0;t<i.length;t+=1)i[t].l(n);o=p(n),h=d(n,"LI",{}),v(h).forEach(l),n.forEach(l),c.forEach(l),r.forEach(l),this.h()},h(){x(e,"class","pl-0 pt-3 list-none"),x(s,"class","text-center font-mono"),x(t,"slot","name1_dropdown")},m(a,l){r(a,t,l),b(t,s),b(s,e);for(let t=0;t<i.length;t+=1)i[t].m(e,null);b(e,o),b(e,h)},p(a,t){if(2&t){let s;for(f=a[1],s=0;s<f.length;s+=1){const r=L(a,f,s);i[s]?i[s].p(r,t):(i[s]=M(r),i[s].c(),i[s].m(e,o))}for(;s<i.length;s+=1)i[s].d(1);i.length=f.length}},d(a){a&&l(t),T(i,a)}}}function U(a){let t,s,e,o,f,i,g,u,E,w,y,T,B,I,k;return{c(){t=n("span"),s=n("div"),e=n("p"),o=h("System Alerts\n\t\t\t\t\t\t"),f=n("span"),i=h("3"),g=c(),u=n("hr"),E=c(),w=n("ul"),y=n("li"),T=n("em"),B=h("No messages"),this.h()},l(a){t=d(a,"SPAN",{slot:!0});var r=v(t);s=d(r,"DIV",{class:!0});var c=v(s);e=d(c,"P",{class:!0});var n=v(e);o=m(n,"System Alerts\n\t\t\t\t\t\t"),f=d(n,"SPAN",{class:!0});var h=v(f);i=m(h,"3"),h.forEach(l),n.forEach(l),c.forEach(l),g=p(r),u=d(r,"HR",{class:!0}),E=p(r),w=d(r,"UL",{class:!0});var x=v(w);y=d(x,"LI",{class:!0});var b=v(y);T=d(b,"EM",{class:!0});var D=v(T);B=m(D,"No messages"),D.forEach(l),b.forEach(l),x.forEach(l),r.forEach(l),this.h()},h(){x(f,"class","clear ml-20 text-xl no-underline font-normal cursor-pointer "),x(e,"class"," float-left m-4 text-xl no-underline font-normal cursor-pointer"),x(s,"class","flex items-center hover:text-gray-300 text-gray-800"),x(u,"class","clear-both ml-4point5 w-3/5 border-none h-px bg-messagesHr overflow-visible box-content border-2 border-black"),x(T,"class","italic font-normal"),x(y,"class","py-point-6 px-4"),x(w,"class","clear-both list-none pl-0 pt-5 pb-5"),x(t,"slot","name4_dropdown")},m(l,c){r(l,t,c),b(t,s),b(s,e),b(e,o),b(e,f),b(f,i),b(t,g),b(t,u),b(t,E),b(t,w),b(w,y),b(y,T),b(T,B),I||(k=V(s,"click",a[4]),I=!0)},p:D,d(a){a&&l(t),I=!1,k()}}}function O(a){let t,s,e,o,i,u,E,w,y,T,I,k,$,H,R,N,z,S,L,M,C,U,O,P,A,_,j,F,G,K,Y,q,Q,W,X,Z,aa,ta,sa,ea,ra,la,oa,ca,na,ha,fa,ia,pa,da,va=a[5].team_members[a[10]].name+"",ma=a[1][0].team_members[0].name+"",xa=a[5].team_members[a[7]].role+"";return{c(){t=n("div"),s=n("p"),e=n("a"),o=h(va),i=c(),u=n("div"),E=n("img"),y=c(),T=n("h2"),I=h("Profile"),k=c(),$=n("hr"),H=c(),R=n("p"),N=n("span"),z=h("Name:"),S=c(),L=h(ma),M=c(),C=n("p"),U=n("span"),O=h("Email:"),P=h("mlofton@rti.org"),A=c(),_=n("p"),j=n("span"),F=h("Title:"),G=h("\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tSoftware Applications Programmer / Analyst 2"),K=c(),Y=n("h2"),q=h("Options"),Q=c(),W=n("hr"),X=c(),Z=n("button"),aa=h("Send email  "),ta=f("svg"),sa=f("path"),ea=c(),ra=n("button"),la=h("Send message  "),oa=f("svg"),ca=f("path"),na=c(),ha=n("p"),fa=h(xa),ia=c(),this.h()},l(a){t=d(a,"DIV",{class:!0,style:!0});var r=v(t);s=d(r,"P",{class:!0});var c=v(s);e=d(c,"A",{class:!0});var n=v(e);o=m(n,va),n.forEach(l),c.forEach(l),i=p(r),u=d(r,"DIV",{class:!0,id:!0});var h=v(u);E=d(h,"IMG",{class:!0,src:!0,alt:!0}),y=p(h),T=d(h,"H2",{class:!0});var f=v(T);I=m(f,"Profile"),f.forEach(l),k=p(h),$=d(h,"HR",{class:!0}),H=p(h),R=d(h,"P",{class:!0});var x=v(R);N=d(x,"SPAN",{class:!0});var g=v(N);z=m(g,"Name:"),g.forEach(l),S=p(x),L=m(x,ma),x.forEach(l),M=p(h),C=d(h,"P",{class:!0});var b=v(C);U=d(b,"SPAN",{class:!0});var w=v(U);O=m(w,"Email:"),w.forEach(l),P=m(b,"mlofton@rti.org"),b.forEach(l),A=p(h),_=d(h,"P",{class:!0});var D=v(_);j=d(D,"SPAN",{class:!0});var V=v(j);F=m(V,"Title:"),V.forEach(l),G=m(D,"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tSoftware Applications Programmer / Analyst 2"),D.forEach(l),K=p(h),Y=d(h,"H2",{class:!0});var B=v(Y);q=m(B,"Options"),B.forEach(l),Q=p(h),W=d(h,"HR",{class:!0}),X=p(h),Z=d(h,"BUTTON",{class:!0});var J=v(Z);aa=m(J,"Send email  "),ta=d(J,"svg",{xmlns:!0,class:!0,fill:!0,viewBox:!0,stroke:!0},1);var pa=v(ta);sa=d(pa,"path",{"stroke-linecap":!0,"stroke-linejoin":!0,"stroke-width":!0,d:!0},1),v(sa).forEach(l),pa.forEach(l),J.forEach(l),ea=p(h),ra=d(h,"BUTTON",{class:!0});var da=v(ra);la=m(da,"Send message  "),oa=d(da,"svg",{xmlns:!0,class:!0,fill:!0,viewBox:!0,stroke:!0},1);var ga=v(oa);ca=d(ga,"path",{"stroke-linecap":!0,"stroke-linejoin":!0,"stroke-width":!0,d:!0},1),v(ca).forEach(l),ga.forEach(l),da.forEach(l),h.forEach(l),na=p(r),ha=d(r,"P",{class:!0});var ua=v(ha);fa=m(ua,xa),ua.forEach(l),ia=p(r),r.forEach(l),this.h()},h(){x(e,"class","hover:text-blue-300 cursor-pointer"),x(s,"class","w-70perc text-rem-point9 float-left m-point5-zero text-gray-variant1 tracking-zero-zero-four"),x(E,"class","w-12 h-12 object-cover rounded-full mx-auto shadow-lg relative -top-7 mb-0"),E.src!==(w="static/RTI_favicon.ico")&&x(E,"src","static/RTI_favicon.ico"),x(E,"alt","User avatar"),x(T,"class","text-lg mx-5point2 font-bold font-serif"),x($,"class","mb-2 border-2 border-black"),x(N,"class","mr-5"),x(R,"class","text-base mx-5 mt-0"),x(U,"class","mr-5"),x(C,"class","text-base mt-1 mx-5"),x(j,"class","mr-5"),x(_,"class","mx-5 text-base mb-5 overflow-hidden"),x(Y,"class","text-lg mx-5point2  font-bold font-serif"),x(W,"class","border-2 border-black mb-2"),x(sa,"stroke-linecap","round"),x(sa,"stroke-linejoin","round"),x(sa,"stroke-width","2"),x(sa,"d","M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"),x(ta,"xmlns","http://www.w3.org/2000/svg"),x(ta,"class","h-4 w-4 inline"),x(ta,"fill","none"),x(ta,"viewBox","0 0 24 24"),x(ta,"stroke","currentColor"),x(Z,"class","rounded-md bg-gradient-to-r from-blue-400 to-indigo-500 text-base text-white pt-3 pb-3 px-4 relative right-3 top-3"),x(ca,"stroke-linecap","round"),x(ca,"stroke-linejoin","round"),x(ca,"stroke-width","2"),x(ca,"d","M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"),x(oa,"xmlns","http://www.w3.org/2000/svg"),x(oa,"class","h-4 w-4 inline"),x(oa,"fill","none"),x(oa,"viewBox","0 0 24 24"),x(oa,"stroke","currentColor"),x(ra,"class","rounded-md bg-gradient-to-r from-red-400 to-yellow-500 text-base  text-white pt-3 pb-3 px-4 ml-12 relative left-5point5 -top-9"),x(u,"class","bg-blue-200 pt-4 px-4 rounded-md  shadow-lg max-w-xs ml-36 absolute hidden"),x(u,"id","marcusprofile"),x(ha,"class","w-30perc text-rem-point9 float-left font-normal m-point5-zero font-mono-sans not-italic text-gray-variant1 tracking-zero-zero-four"),x(t,"class","team team clear-both text-rem-1point1 tracking-zero-point-one-rem"),g(t,"text-indent","27px")},m(l,c){r(l,t,c),b(t,s),b(s,e),b(e,o),b(t,i),b(t,u),b(u,E),b(u,y),b(u,T),b(T,I),b(u,k),b(u,$),b(u,H),b(u,R),b(R,N),b(N,z),b(R,S),b(R,L),b(u,M),b(u,C),b(C,U),b(U,O),b(C,P),b(u,A),b(u,_),b(_,j),b(j,F),b(_,G),b(u,K),b(u,Y),b(Y,q),b(u,Q),b(u,W),b(u,X),b(u,Z),b(Z,aa),b(Z,ta),b(ta,sa),b(u,ea),b(u,ra),b(ra,la),b(ra,oa),b(oa,ca),b(t,na),b(t,ha),b(ha,fa),b(t,ia),pa||(da=[V(e,"click",J),V(Z,"click",a[2]),V(ra,"click",a[3])],pa=!0)},p:D,d(a){a&&l(t),pa=!1,B(da)}}}function P(a){let t,s="SSES"==a[5].name&&function(a){let t,s=a[5].team_members,o=[];for(let e=0;e<s.length;e+=1)o[e]=O(S(a,s,e));return{c(){for(let a=0;a<o.length;a+=1)o[a].c();t=e()},l(a){for(let t=0;t<o.length;t+=1)o[t].l(a);t=e()},m(a,s){for(let t=0;t<o.length;t+=1)o[t].m(a,s);r(a,t,s)},p(a,e){if(14&e){let r;for(s=a[5].team_members,r=0;r<s.length;r+=1){const l=S(a,s,r);o[r]?o[r].p(l,e):(o[r]=O(l),o[r].c(),o[r].m(t.parentNode,t))}for(;r<o.length;r+=1)o[r].d(1);o.length=s.length}},d(a){T(o,a),a&&l(t)}}}(a);return{c(){s&&s.c(),t=e()},l(a){s&&s.l(a),t=e()},m(a,e){s&&s.m(a,e),r(a,t,e)},p(a,t){"SSES"==a[5].name&&s.p(a,t)},d(a){s&&s.d(a),a&&l(t)}}}function A(a){let t,s,e,D,V,B,k,$,S,L,M,O,A,_,j,J,F,G,K,Y,q,Q,W,X,Z,aa,ta,sa,ea,ra,la,oa,ca,na,ha,fa,ia,pa,da,va,ma,xa,ga,ua,ba,Ea,wa,ya,Ta,Da,Va,Ba,Ia,ka,$a,Ha,Ra,Na,za,Sa,La,Ma,Ca,Ua,Oa,Pa,Aa,_a,ja,Ja,Fa,Ga,Ka,Ya,qa,Qa,Wa,Xa,Za,at,tt,st,et,rt,lt,ot,ct,nt,ht,ft,it,pt,dt,vt,mt,xt,gt,ut,bt,Et,wt,yt,Tt,Dt,Vt,Bt,It,kt,$t,Ht,Rt,Nt,zt,St,Lt,Mt,Ct,Ut,Ot,Pt,At,_t,jt,Jt,Ft,Gt,Kt,Yt,qt,Qt,Wt,Xt,Zt,as,ts,ss,es,rs,ls,os,cs,ns,hs,fs,is,ps,ds,vs,ms,xs,gs,us,bs,Es,ws,ys,Ts,Ds,Vs,Bs,Is,ks,$s,Hs,Rs,Ns,zs,Ss,Ls,Ms,Cs,Us,Os,Ps,As,_s,js,Js,Fs,Gs,Ks,Ys,qs,Qs,Ws,Xs,Zs,ae,te,se,ee,re,le,oe,ce,ne,he,fe,ie,pe,de,ve,me,xe,ge,ue,be,Ee,we,ye,Te,De,Ve,Be,Ie,ke,$e,He,Re,Ne,ze,Se,Le,Me,Ce,Ue,Oe,Pe,Ae,_e,je,Je,Fe,Ge,Ke,Ye,qe,Qe,We,Xe=a[1][0].name+"",Ze=a[1][0].description+"";t=new N({}),e=new H({props:{metaData:a[0]}}),k=new I({props:{bg_color:"bg-blue-400",name_1:"RTI Group",name_4:"Notifications",text_color1:"text-blue-600",name_inner_1:a[1][0].name,$$slots:{name4_dropdown:[U],name1_dropdown:[C]},$$scope:{ctx:a}}}),M=new R({});let ar=a[1],tr=[];for(let r=0;r<ar.length;r+=1)tr[r]=P(z(a,ar,r));return{c(){o(t.$$.fragment),s=c(),o(e.$$.fragment),D=c(),V=n("body"),B=n("div"),o(k.$$.fragment),$=c(),S=n("div"),L=n("div"),o(M.$$.fragment),O=c(),A=n("div"),_=n("h1"),j=h(Xe),J=c(),F=n("p"),G=h(Ze),K=c(),Y=n("div"),q=n("div"),Q=h("Team\n\t\t\t\t\t\t\t"),W=n("div"),X=n("div"),Z=n("div"),aa=n("h4"),ta=h("Name"),sa=c(),ea=n("h4"),ra=h("Role"),la=c(),oa=n("div");for(let a=0;a<tr.length;a+=1)tr[a].c();ca=c(),na=n("div"),ha=h("Reports\n\t\t\t\t\t\t\t"),fa=n("div"),ia=n("div"),pa=n("h1"),da=h("Billing Details"),va=c(),ma=n("table"),xa=n("tr"),ga=n("th"),ua=h("Name"),ba=c(),Ea=n("th"),wa=h("From Date"),ya=c(),Ta=n("th"),Da=h("To Date"),Va=c(),Ba=n("th"),Ia=h("Current Month"),ka=c(),$a=n("th"),Ha=h("History"),Ra=c(),Na=n("th"),za=h("Export to Excel"),Sa=c(),La=n("tr"),Ma=n("td"),Ca=h("Billing Document 1"),Ua=c(),Oa=n("td"),Pa=h("01-21-21"),Aa=c(),_a=n("td"),ja=h("10-21-21"),Ja=c(),Fa=n("td"),Ga=h("June"),Ka=c(),Ya=n("td"),qa=n("button"),Qa=h("View"),Wa=c(),Xa=n("td"),Za=n("div"),at=n("button"),tt=f("svg"),st=f("path"),et=f("path"),rt=c(),lt=n("tr"),ot=n("td"),ct=h("Billing Document 2"),nt=c(),ht=n("td"),ft=h("03-05-21"),it=c(),pt=n("td"),dt=h("11-05-21"),vt=c(),mt=n("td"),xt=h("June"),gt=c(),ut=n("td"),bt=n("button"),Et=h("View"),wt=c(),yt=n("td"),Tt=n("div"),Dt=n("button"),Vt=f("svg"),Bt=f("path"),It=f("path"),kt=c(),$t=n("tr"),Ht=n("td"),Rt=h("Billing Document 3"),Nt=c(),zt=n("td"),St=h("05-30-21"),Lt=c(),Mt=n("td"),Ct=h("02-30-22"),Ut=c(),Ot=n("td"),Pt=h("June"),At=c(),_t=n("td"),jt=n("button"),Jt=h("View"),Ft=c(),Gt=n("td"),Kt=n("div"),Yt=n("button"),qt=f("svg"),Qt=f("path"),Wt=f("path"),Xt=c(),Zt=n("tr"),as=n("td"),ts=h("Billing Document 4"),ss=c(),es=n("td"),rs=h("04-25-21"),ls=c(),os=n("td"),cs=h("11-25-22"),ns=c(),hs=n("td"),fs=h("June"),is=c(),ps=n("td"),ds=n("button"),vs=h("View"),ms=c(),xs=n("td"),gs=n("div"),us=n("button"),bs=f("svg"),Es=f("path"),ws=f("path"),ys=c(),Ts=n("tr"),Ds=n("td"),Vs=h("Billing Document 5"),Bs=c(),Is=n("td"),ks=h("03-16-21"),$s=c(),Hs=n("td"),Rs=h("06-14-22"),Ns=c(),zs=n("td"),Ss=h("June"),Ls=c(),Ms=n("td"),Cs=n("button"),Us=h("View"),Os=c(),Ps=n("td"),As=n("div"),_s=n("button"),js=f("svg"),Js=f("path"),Fs=f("path"),Gs=c(),Ks=n("tr"),Ys=n("td"),qs=h("Billing Document 6"),Qs=c(),Ws=n("td"),Xs=h("01-11-21"),Zs=c(),ae=n("td"),te=h("02-01-22"),se=c(),ee=n("td"),re=h("June"),le=c(),oe=n("td"),ce=n("button"),ne=h("View"),he=c(),fe=n("td"),ie=n("div"),pe=n("button"),de=f("svg"),ve=f("path"),me=f("path"),xe=c(),ge=n("tr"),ue=n("td"),be=h("Billing Document 7"),Ee=c(),we=n("td"),ye=h("03-06-21"),Te=c(),De=n("td"),Ve=h("12-31-22"),Be=c(),Ie=n("td"),ke=h("June"),$e=c(),He=n("td"),Re=n("button"),Ne=h("View"),ze=c(),Se=n("td"),Le=n("div"),Me=n("button"),Ce=f("svg"),Ue=f("path"),Oe=f("path"),Pe=c(),Ae=n("div"),_e=n("a"),je=n("img"),Fe=c(),Ge=n("p"),Ke=h("RTI Cloud Billing System 1.0"),Ye=c(),qe=n("p"),Qe=h("RTI International is a trade name of Research Triangle Institute. RTI and the RTI logos are\n\t\t\tU.S. registered trademarks of Research Triangle Institute."),this.h()},l(a){i(t.$$.fragment,a),s=p(a),i(e.$$.fragment,a),D=p(a),V=d(a,"BODY",{class:!0});var r=v(V);B=d(r,"DIV",{id:!0});var o=v(B);i(k.$$.fragment,o),$=p(o),S=d(o,"DIV",{class:!0});var c=v(S);L=d(c,"DIV",{class:!0});var n=v(L);i(M.$$.fragment,n),O=p(n),A=d(n,"DIV",{id:!0,class:!0});var h=v(A);_=d(h,"H1",{class:!0});var f=v(_);j=m(f,Xe),f.forEach(l),J=p(h),F=d(h,"P",{class:!0});var x=v(F);G=m(x,Ze),x.forEach(l),K=p(h),Y=d(h,"DIV",{class:!0});var g=v(Y);q=d(g,"DIV",{class:!0,style:!0});var u=v(q);Q=m(u,"Team\n\t\t\t\t\t\t\t"),W=d(u,"DIV",{id:!0,class:!0,style:!0});var b=v(W);X=d(b,"DIV",{class:!0});var E=v(X);Z=d(E,"DIV",{class:!0,style:!0});var w=v(Z);aa=d(w,"H4",{class:!0});var y=v(aa);ta=m(y,"Name"),y.forEach(l),sa=p(w),ea=d(w,"H4",{class:!0});var T=v(ea);ra=m(T,"Role"),T.forEach(l),w.forEach(l),la=p(E),oa=d(E,"DIV",{class:!0});var I=v(oa);for(let t=0;t<tr.length;t+=1)tr[t].l(I);I.forEach(l),E.forEach(l),b.forEach(l),u.forEach(l),ca=p(g),na=d(g,"DIV",{class:!0,style:!0});var H=v(na);ha=m(H,"Reports\n\t\t\t\t\t\t\t"),fa=d(H,"DIV",{id:!0,class:!0,style:!0});var R=v(fa);ia=d(R,"DIV",{class:!0});var N=v(ia);pa=d(N,"H1",{class:!0});var z=v(pa);da=m(z,"Billing Details"),z.forEach(l),va=p(N),ma=d(N,"TABLE",{class:!0});var C=v(ma);xa=d(C,"TR",{class:!0});var U=v(xa);ga=d(U,"TH",{class:!0});var P=v(ga);ua=m(P,"Name"),P.forEach(l),ba=p(U),Ea=d(U,"TH",{class:!0});var Je=v(Ea);wa=m(Je,"From Date"),Je.forEach(l),ya=p(U),Ta=d(U,"TH",{class:!0});var We=v(Ta);Da=m(We,"To Date"),We.forEach(l),Va=p(U),Ba=d(U,"TH",{class:!0});var ar=v(Ba);Ia=m(ar,"Current Month"),ar.forEach(l),ka=p(U),$a=d(U,"TH",{class:!0});var sr=v($a);Ha=m(sr,"History"),sr.forEach(l),Ra=p(U),Na=d(U,"TH",{class:!0});var er=v(Na);za=m(er,"Export to Excel"),er.forEach(l),U.forEach(l),Sa=p(C),La=d(C,"TR",{class:!0});var rr=v(La);Ma=d(rr,"TD",{class:!0});var lr=v(Ma);Ca=m(lr,"Billing Document 1"),lr.forEach(l),Ua=p(rr),Oa=d(rr,"TD",{class:!0});var or=v(Oa);Pa=m(or,"01-21-21"),or.forEach(l),Aa=p(rr),_a=d(rr,"TD",{class:!0});var cr=v(_a);ja=m(cr,"10-21-21"),cr.forEach(l),Ja=p(rr),Fa=d(rr,"TD",{class:!0});var nr=v(Fa);Ga=m(nr,"June"),nr.forEach(l),Ka=p(rr),Ya=d(rr,"TD",{class:!0});var hr=v(Ya);qa=d(hr,"BUTTON",{class:!0});var fr=v(qa);Qa=m(fr,"View"),fr.forEach(l),hr.forEach(l),Wa=p(rr),Xa=d(rr,"TD",{class:!0});var ir=v(Xa);Za=d(ir,"DIV",{class:!0});var pr=v(Za);at=d(pr,"BUTTON",{});var dr=v(at);tt=d(dr,"svg",{xmlns:!0,class:!0,viewBox:!0,fill:!0},1);var vr=v(tt);st=d(vr,"path",{d:!0},1),v(st).forEach(l),et=d(vr,"path",{d:!0},1),v(et).forEach(l),vr.forEach(l),dr.forEach(l),pr.forEach(l),ir.forEach(l),rr.forEach(l),rt=p(C),lt=d(C,"TR",{class:!0});var mr=v(lt);ot=d(mr,"TD",{class:!0});var xr=v(ot);ct=m(xr,"Billing Document 2"),xr.forEach(l),nt=p(mr),ht=d(mr,"TD",{class:!0});var gr=v(ht);ft=m(gr,"03-05-21"),gr.forEach(l),it=p(mr),pt=d(mr,"TD",{class:!0});var ur=v(pt);dt=m(ur,"11-05-21"),ur.forEach(l),vt=p(mr),mt=d(mr,"TD",{class:!0});var br=v(mt);xt=m(br,"June"),br.forEach(l),gt=p(mr),ut=d(mr,"TD",{class:!0});var Er=v(ut);bt=d(Er,"BUTTON",{class:!0});var wr=v(bt);Et=m(wr,"View"),wr.forEach(l),Er.forEach(l),wt=p(mr),yt=d(mr,"TD",{class:!0});var yr=v(yt);Tt=d(yr,"DIV",{class:!0});var Tr=v(Tt);Dt=d(Tr,"BUTTON",{});var Dr=v(Dt);Vt=d(Dr,"svg",{xmlns:!0,class:!0,viewBox:!0,fill:!0},1);var Vr=v(Vt);Bt=d(Vr,"path",{d:!0},1),v(Bt).forEach(l),It=d(Vr,"path",{d:!0},1),v(It).forEach(l),Vr.forEach(l),Dr.forEach(l),Tr.forEach(l),yr.forEach(l),mr.forEach(l),kt=p(C),$t=d(C,"TR",{class:!0});var Br=v($t);Ht=d(Br,"TD",{class:!0});var Ir=v(Ht);Rt=m(Ir,"Billing Document 3"),Ir.forEach(l),Nt=p(Br),zt=d(Br,"TD",{class:!0});var kr=v(zt);St=m(kr,"05-30-21"),kr.forEach(l),Lt=p(Br),Mt=d(Br,"TD",{class:!0});var $r=v(Mt);Ct=m($r,"02-30-22"),$r.forEach(l),Ut=p(Br),Ot=d(Br,"TD",{class:!0});var Hr=v(Ot);Pt=m(Hr,"June"),Hr.forEach(l),At=p(Br),_t=d(Br,"TD",{class:!0});var Rr=v(_t);jt=d(Rr,"BUTTON",{class:!0});var Nr=v(jt);Jt=m(Nr,"View"),Nr.forEach(l),Rr.forEach(l),Ft=p(Br),Gt=d(Br,"TD",{class:!0});var zr=v(Gt);Kt=d(zr,"DIV",{class:!0});var Sr=v(Kt);Yt=d(Sr,"BUTTON",{});var Lr=v(Yt);qt=d(Lr,"svg",{xmlns:!0,class:!0,viewBox:!0,fill:!0},1);var Mr=v(qt);Qt=d(Mr,"path",{d:!0},1),v(Qt).forEach(l),Wt=d(Mr,"path",{d:!0},1),v(Wt).forEach(l),Mr.forEach(l),Lr.forEach(l),Sr.forEach(l),zr.forEach(l),Br.forEach(l),Xt=p(C),Zt=d(C,"TR",{class:!0});var Cr=v(Zt);as=d(Cr,"TD",{class:!0});var Ur=v(as);ts=m(Ur,"Billing Document 4"),Ur.forEach(l),ss=p(Cr),es=d(Cr,"TD",{class:!0});var Or=v(es);rs=m(Or,"04-25-21"),Or.forEach(l),ls=p(Cr),os=d(Cr,"TD",{class:!0});var Pr=v(os);cs=m(Pr,"11-25-22"),Pr.forEach(l),ns=p(Cr),hs=d(Cr,"TD",{class:!0});var Ar=v(hs);fs=m(Ar,"June"),Ar.forEach(l),is=p(Cr),ps=d(Cr,"TD",{class:!0});var _r=v(ps);ds=d(_r,"BUTTON",{class:!0});var jr=v(ds);vs=m(jr,"View"),jr.forEach(l),_r.forEach(l),ms=p(Cr),xs=d(Cr,"TD",{class:!0});var Jr=v(xs);gs=d(Jr,"DIV",{class:!0});var Fr=v(gs);us=d(Fr,"BUTTON",{});var Gr=v(us);bs=d(Gr,"svg",{xmlns:!0,class:!0,viewBox:!0,fill:!0},1);var Kr=v(bs);Es=d(Kr,"path",{d:!0},1),v(Es).forEach(l),ws=d(Kr,"path",{d:!0},1),v(ws).forEach(l),Kr.forEach(l),Gr.forEach(l),Fr.forEach(l),Jr.forEach(l),Cr.forEach(l),ys=p(C),Ts=d(C,"TR",{class:!0});var Yr=v(Ts);Ds=d(Yr,"TD",{class:!0});var qr=v(Ds);Vs=m(qr,"Billing Document 5"),qr.forEach(l),Bs=p(Yr),Is=d(Yr,"TD",{class:!0});var Qr=v(Is);ks=m(Qr,"03-16-21"),Qr.forEach(l),$s=p(Yr),Hs=d(Yr,"TD",{class:!0});var Wr=v(Hs);Rs=m(Wr,"06-14-22"),Wr.forEach(l),Ns=p(Yr),zs=d(Yr,"TD",{class:!0});var Xr=v(zs);Ss=m(Xr,"June"),Xr.forEach(l),Ls=p(Yr),Ms=d(Yr,"TD",{class:!0});var Zr=v(Ms);Cs=d(Zr,"BUTTON",{class:!0});var al=v(Cs);Us=m(al,"View"),al.forEach(l),Zr.forEach(l),Os=p(Yr),Ps=d(Yr,"TD",{class:!0});var tl=v(Ps);As=d(tl,"DIV",{class:!0});var sl=v(As);_s=d(sl,"BUTTON",{});var el=v(_s);js=d(el,"svg",{xmlns:!0,class:!0,viewBox:!0,fill:!0},1);var rl=v(js);Js=d(rl,"path",{d:!0},1),v(Js).forEach(l),Fs=d(rl,"path",{d:!0},1),v(Fs).forEach(l),rl.forEach(l),el.forEach(l),sl.forEach(l),tl.forEach(l),Yr.forEach(l),Gs=p(C),Ks=d(C,"TR",{class:!0});var ll=v(Ks);Ys=d(ll,"TD",{class:!0});var ol=v(Ys);qs=m(ol,"Billing Document 6"),ol.forEach(l),Qs=p(ll),Ws=d(ll,"TD",{class:!0});var cl=v(Ws);Xs=m(cl,"01-11-21"),cl.forEach(l),Zs=p(ll),ae=d(ll,"TD",{class:!0});var nl=v(ae);te=m(nl,"02-01-22"),nl.forEach(l),se=p(ll),ee=d(ll,"TD",{class:!0});var hl=v(ee);re=m(hl,"June"),hl.forEach(l),le=p(ll),oe=d(ll,"TD",{class:!0});var fl=v(oe);ce=d(fl,"BUTTON",{class:!0});var il=v(ce);ne=m(il,"View"),il.forEach(l),fl.forEach(l),he=p(ll),fe=d(ll,"TD",{class:!0});var pl=v(fe);ie=d(pl,"DIV",{class:!0});var dl=v(ie);pe=d(dl,"BUTTON",{});var vl=v(pe);de=d(vl,"svg",{xmlns:!0,class:!0,viewBox:!0,fill:!0},1);var ml=v(de);ve=d(ml,"path",{d:!0},1),v(ve).forEach(l),me=d(ml,"path",{d:!0},1),v(me).forEach(l),ml.forEach(l),vl.forEach(l),dl.forEach(l),pl.forEach(l),ll.forEach(l),xe=p(C),ge=d(C,"TR",{class:!0});var xl=v(ge);ue=d(xl,"TD",{class:!0});var gl=v(ue);be=m(gl,"Billing Document 7"),gl.forEach(l),Ee=p(xl),we=d(xl,"TD",{class:!0});var ul=v(we);ye=m(ul,"03-06-21"),ul.forEach(l),Te=p(xl),De=d(xl,"TD",{class:!0});var bl=v(De);Ve=m(bl,"12-31-22"),bl.forEach(l),Be=p(xl),Ie=d(xl,"TD",{class:!0});var El=v(Ie);ke=m(El,"June"),El.forEach(l),$e=p(xl),He=d(xl,"TD",{class:!0});var wl=v(He);Re=d(wl,"BUTTON",{class:!0});var yl=v(Re);Ne=m(yl,"View"),yl.forEach(l),wl.forEach(l),ze=p(xl),Se=d(xl,"TD",{class:!0});var Tl=v(Se);Le=d(Tl,"DIV",{class:!0});var Dl=v(Le);Me=d(Dl,"BUTTON",{});var Vl=v(Me);Ce=d(Vl,"svg",{xmlns:!0,class:!0,viewBox:!0,fill:!0},1);var Bl=v(Ce);Ue=d(Bl,"path",{d:!0},1),v(Ue).forEach(l),Oe=d(Bl,"path",{d:!0},1),v(Oe).forEach(l),Bl.forEach(l),Vl.forEach(l),Dl.forEach(l),Tl.forEach(l),xl.forEach(l),C.forEach(l),N.forEach(l),R.forEach(l),H.forEach(l),g.forEach(l),h.forEach(l),n.forEach(l),c.forEach(l),o.forEach(l),Pe=p(r),Ae=d(r,"DIV",{class:!0});var Il=v(Ae);_e=d(Il,"A",{href:!0,class:!0,style:!0});var kl=v(_e);je=d(kl,"IMG",{class:!0,src:!0,alt:!0}),kl.forEach(l),Fe=p(Il),Ge=d(Il,"P",{class:!0});var $l=v(Ge);Ke=m($l,"RTI Cloud Billing System 1.0"),$l.forEach(l),Ye=p(Il),qe=d(Il,"P",{class:!0});var Hl=v(qe);Qe=m(Hl,"RTI International is a trade name of Research Triangle Institute. RTI and the RTI logos are\n\t\t\tU.S. registered trademarks of Research Triangle Institute."),Hl.forEach(l),Il.forEach(l),r.forEach(l),this.h()},h(){x(_,"class","text-rem-1point9 text-blue-500 inline-block p-dashboardContenth1 m-dashboardContenth1"),x(F,"class","descr text-rem-1 inline-block tracking-zero-zero-four text-gray-variant1"),x(aa,"class","w-70perc text-rem-point9 float-left font-semibold m-point5-zero font-mono-sans not-italic"),x(ea,"class","w-30perc text-rem-point9 float-left font-semibold m-point5-zero font-mono-sans not-italic"),x(Z,"class","clear-both text-rem-1point1 tracking-zero-point-one-rem"),g(Z,"text-indent","27px"),x(oa,"class","teamContr"),x(X,"class","teamList bg-fff relative h-84perc m-teamList rounded-2px p-8 max-h-74perc"),x(W,"id","teamCard"),x(W,"class","flex-one-one-49perc border border-blue-500 border-solid relative h-screen m-dashboardCards overflow-y-auto"),g(W,"clip-path","polygon(0% 0.01%, 17% 1%, 17% 0, 100% 0, 100% 100%, 0 100%)"),x(q,"class","text-rem-1point1 mt-4 flex-one-one-49perc h-94perc tracking-zero-point-one-rem"),g(q,"text-indent","27px"),x(pa,"class","text-blue-400 pl-32 text-xl mb-5 ml-24"),x(ga,"class","py-3 px-6 text-left"),x(Ea,"class","py-3 px-6 text-left "),x(Ta,"class","py-3 px-10 text-left"),x(Ba,"class","py-3 px-2 text-left"),x($a,"class","py-3 px-6"),x(Na,"class","py-3 px-6 text-left"),x(xa,"class","bg-blue-500 text-gray-300 uppercase text-xs leading-normal"),x(Ma,"class","py-3 px-6 text-left whitespace-nowrap"),x(Oa,"class","py-3 px-3 text-center"),x(_a,"class","py-3 px-5 text-center"),x(Fa,"class","py-1 px-3 text-left"),x(qa,"class","py-1 px-3 bg-yellow-400 rounded-full hover:bg-yellow-200"),x(Ya,"class","py-3 px-6 text-left"),x(st,"d","M11 3a1 1 0 100 2h2.586l-6.293 6.293a1 1 0 101.414 1.414L15 6.414V9a1 1 0 102 0V4a1 1 0 00-1-1h-5z"),x(et,"d","M5 5a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2v-3a1 1 0 10-2 0v3H5V7h3a1 1 0 000-2H5z"),x(tt,"xmlns","http://www.w3.org/2000/svg"),x(tt,"class","h-5 w-5 ml-3"),x(tt,"viewBox","0 0 20 20"),x(tt,"fill","currentColor"),x(Za,"class","flex"),x(Xa,"class","py-3 px-6 text-left"),x(La,"class","border-b border-gray-200 text-gray-600 text-sm font-light hover:bg-gray-100"),x(ot,"class","py-3 px-6 text-left whitespace-nowrap"),x(ht,"class","py-3 px-3 text-center"),x(pt,"class","py-3 px-5 text-center"),x(mt,"class","py-1 px-3 text-left"),x(bt,"class","py-1 px-3 bg-yellow-400 rounded-full hover:bg-yellow-200"),x(ut,"class","py-3 px-6 text-left"),x(Bt,"d","M11 3a1 1 0 100 2h2.586l-6.293 6.293a1 1 0 101.414 1.414L15 6.414V9a1 1 0 102 0V4a1 1 0 00-1-1h-5z"),x(It,"d","M5 5a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2v-3a1 1 0 10-2 0v3H5V7h3a1 1 0 000-2H5z"),x(Vt,"xmlns","http://www.w3.org/2000/svg"),x(Vt,"class","h-5 w-5 ml-3"),x(Vt,"viewBox","0 0 20 20"),x(Vt,"fill","currentColor"),x(Tt,"class","flex"),x(yt,"class","py-3 px-6 text-left"),x(lt,"class","border-b border-gray-200 text-gray-600 text-sm font-light hover:bg-gray-100"),x(Ht,"class","py-3 px-6 text-left whitespace-nowrap"),x(zt,"class","py-3 px-3 text-center"),x(Mt,"class","py-3 px-5 text-center"),x(Ot,"class","py-1 px-3 text-left"),x(jt,"class","py-1 px-3 bg-yellow-400 rounded-full hover:bg-yellow-200"),x(_t,"class","py-3 px-6 text-left"),x(Qt,"d","M11 3a1 1 0 100 2h2.586l-6.293 6.293a1 1 0 101.414 1.414L15 6.414V9a1 1 0 102 0V4a1 1 0 00-1-1h-5z"),x(Wt,"d","M5 5a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2v-3a1 1 0 10-2 0v3H5V7h3a1 1 0 000-2H5z"),x(qt,"xmlns","http://www.w3.org/2000/svg"),x(qt,"class","h-5 w-5 ml-3"),x(qt,"viewBox","0 0 20 20"),x(qt,"fill","currentColor"),x(Kt,"class","flex"),x(Gt,"class","py-3 px-6 text-left"),x($t,"class","border-b border-gray-200 text-gray-600 text-sm font-light hover:bg-gray-100"),x(as,"class","py-3 px-6 text-left whitespace-nowrap"),x(es,"class","py-3 px-3 text-center"),x(os,"class","py-3 px-5 text-center"),x(hs,"class","py-1 px-3 text-left"),x(ds,"class","py-1 px-3 bg-yellow-400 rounded-full hover:bg-yellow-200"),x(ps,"class","py-3 px-6 text-left"),x(Es,"d","M11 3a1 1 0 100 2h2.586l-6.293 6.293a1 1 0 101.414 1.414L15 6.414V9a1 1 0 102 0V4a1 1 0 00-1-1h-5z"),x(ws,"d","M5 5a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2v-3a1 1 0 10-2 0v3H5V7h3a1 1 0 000-2H5z"),x(bs,"xmlns","http://www.w3.org/2000/svg"),x(bs,"class","h-5 w-5 ml-3"),x(bs,"viewBox","0 0 20 20"),x(bs,"fill","currentColor"),x(gs,"class","flex"),x(xs,"class","py-3 px-6 text-left"),x(Zt,"class","border-b border-gray-200 text-gray-600 text-sm font-light hover:bg-gray-100"),x(Ds,"class","py-3 px-6 text-left whitespace-nowrap"),x(Is,"class","py-3 px-3 text-center"),x(Hs,"class","py-3 px-5 text-center"),x(zs,"class","py-1 px-3 text-left"),x(Cs,"class","py-1 px-3 bg-yellow-400 rounded-full hover:bg-yellow-200"),x(Ms,"class","py-3 px-6 text-left"),x(Js,"d","M11 3a1 1 0 100 2h2.586l-6.293 6.293a1 1 0 101.414 1.414L15 6.414V9a1 1 0 102 0V4a1 1 0 00-1-1h-5z"),x(Fs,"d","M5 5a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2v-3a1 1 0 10-2 0v3H5V7h3a1 1 0 000-2H5z"),x(js,"xmlns","http://www.w3.org/2000/svg"),x(js,"class","h-5 w-5 ml-3"),x(js,"viewBox","0 0 20 20"),x(js,"fill","currentColor"),x(As,"class","flex"),x(Ps,"class","py-3 px-6 text-left"),x(Ts,"class","border-b border-gray-200 text-gray-600 text-sm font-light hover:bg-gray-100"),x(Ys,"class","py-3 px-6 text-left whitespace-nowrap"),x(Ws,"class","py-3 px-3 text-center"),x(ae,"class","py-3 px-5 text-center"),x(ee,"class","py-1 px-3 text-left"),x(ce,"class","py-1 px-3 bg-yellow-400 rounded-full hover:bg-yellow-200"),x(oe,"class","py-3 px-6 text-left"),x(ve,"d","M11 3a1 1 0 100 2h2.586l-6.293 6.293a1 1 0 101.414 1.414L15 6.414V9a1 1 0 102 0V4a1 1 0 00-1-1h-5z"),x(me,"d","M5 5a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2v-3a1 1 0 10-2 0v3H5V7h3a1 1 0 000-2H5z"),x(de,"xmlns","http://www.w3.org/2000/svg"),x(de,"class","h-5 w-5 ml-3"),x(de,"viewBox","0 0 20 20"),x(de,"fill","currentColor"),x(ie,"class","flex"),x(fe,"class","py-3 px-6 text-left"),x(Ks,"class","border-b border-gray-200 text-gray-600 text-sm font-light hover:bg-gray-100"),x(ue,"class","py-3 px-6 text-left whitespace-nowrap"),x(we,"class","py-3 px-3 text-center"),x(De,"class","py-3 px-5 text-center"),x(Ie,"class","py-1 px-3 text-left"),x(Re,"class","py-1 px-3 bg-yellow-400 rounded-full hover:bg-yellow-200"),x(He,"class","py-3 px-6 text-left"),x(Ue,"d","M11 3a1 1 0 100 2h2.586l-6.293 6.293a1 1 0 101.414 1.414L15 6.414V9a1 1 0 102 0V4a1 1 0 00-1-1h-5z"),x(Oe,"d","M5 5a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2v-3a1 1 0 10-2 0v3H5V7h3a1 1 0 000-2H5z"),x(Ce,"xmlns","http://www.w3.org/2000/svg"),x(Ce,"class","h-5 w-5 ml-3"),x(Ce,"viewBox","0 0 20 20"),x(Ce,"fill","currentColor"),x(Le,"class","flex"),x(Se,"class","py-3 px-6 text-left"),x(ge,"class","border-b border-gray-200 text-gray-600 text-sm font-light hover:bg-gray-100"),x(ma,"class","table-auto mt-7"),x(ia,"class","bg-fff relative h-screen m-teamList rounded-2px p-8 overflow-y-scroll max-h-74perc"),x(fa,"id","datasources"),x(fa,"class","flex-one-one-49perc border border-blue-500 border-solid relative h-screen m-dashboardCards"),g(fa,"clip-path","polygon(0% 0.01%, 17% 1%, 17% 0, 100% 0, 100% 100%, 0 100%)"),x(na,"class","dash-title text-rem-1point1 mt-4 flex-one-one-49perc h-94perc tracking-zero-point-one-rem"),g(na,"text-indent","27px"),x(Y,"class","flex justify-evenly relative h-97perc max-h-92perc"),x(A,"id","default"),x(A,"class","h-screen overflow-scroll block mr-2 bg-blue-100 m-dashboardContent rounded-2px flex-1 p-8"),x(L,"class","bg-iframeback bg-no-repeat bg-scroll bg-clip-border bg-auto flex-1 flex bg-dashboard"),x(S,"class","row main overflow-y-auto w-full clear-both"),x(B,"id","dashboard"),x(je,"class","h-auto w-80px pt-point-6 border-none"),je.src!==(Je="static/RTI-logo-white.svg")&&x(je,"src","static/RTI-logo-white.svg"),x(je,"alt","RTI Footer Logo"),x(_e,"href","https://www.rti.org"),x(_e,"class","RTILogo pt-0 pl-4 pr-4 float-left"),g(_e,"padding-top","0"),x(Ge,"class","float-right text-fff pr-20 mb-0 pt-2 font-mono-sans font-normal not-italic"),x(qe,"class","float-left text-fff text-rem-point8 mb-0 pt-2 mt-1point3 font-mono-sans font-normal not-italic"),x(Ae,"class","bottom-0 fixed bg-gray-variant1 h-12 w-full block clear-both font-normal font-mono-sans not-italic"),x(V,"class","m-0 overflow-hidden")},m(a,l){u(t,a,l),r(a,s,l),u(e,a,l),r(a,D,l),r(a,V,l),b(V,B),u(k,B,null),b(B,$),b(B,S),b(S,L),u(M,L,null),b(L,O),b(L,A),b(A,_),b(_,j),b(A,J),b(A,F),b(F,G),b(A,K),b(A,Y),b(Y,q),b(q,Q),b(q,W),b(W,X),b(X,Z),b(Z,aa),b(aa,ta),b(Z,sa),b(Z,ea),b(ea,ra),b(X,la),b(X,oa);for(let t=0;t<tr.length;t+=1)tr[t].m(oa,null);b(Y,ca),b(Y,na),b(na,ha),b(na,fa),b(fa,ia),b(ia,pa),b(pa,da),b(ia,va),b(ia,ma),b(ma,xa),b(xa,ga),b(ga,ua),b(xa,ba),b(xa,Ea),b(Ea,wa),b(xa,ya),b(xa,Ta),b(Ta,Da),b(xa,Va),b(xa,Ba),b(Ba,Ia),b(xa,ka),b(xa,$a),b($a,Ha),b(xa,Ra),b(xa,Na),b(Na,za),b(ma,Sa),b(ma,La),b(La,Ma),b(Ma,Ca),b(La,Ua),b(La,Oa),b(Oa,Pa),b(La,Aa),b(La,_a),b(_a,ja),b(La,Ja),b(La,Fa),b(Fa,Ga),b(La,Ka),b(La,Ya),b(Ya,qa),b(qa,Qa),b(La,Wa),b(La,Xa),b(Xa,Za),b(Za,at),b(at,tt),b(tt,st),b(tt,et),b(ma,rt),b(ma,lt),b(lt,ot),b(ot,ct),b(lt,nt),b(lt,ht),b(ht,ft),b(lt,it),b(lt,pt),b(pt,dt),b(lt,vt),b(lt,mt),b(mt,xt),b(lt,gt),b(lt,ut),b(ut,bt),b(bt,Et),b(lt,wt),b(lt,yt),b(yt,Tt),b(Tt,Dt),b(Dt,Vt),b(Vt,Bt),b(Vt,It),b(ma,kt),b(ma,$t),b($t,Ht),b(Ht,Rt),b($t,Nt),b($t,zt),b(zt,St),b($t,Lt),b($t,Mt),b(Mt,Ct),b($t,Ut),b($t,Ot),b(Ot,Pt),b($t,At),b($t,_t),b(_t,jt),b(jt,Jt),b($t,Ft),b($t,Gt),b(Gt,Kt),b(Kt,Yt),b(Yt,qt),b(qt,Qt),b(qt,Wt),b(ma,Xt),b(ma,Zt),b(Zt,as),b(as,ts),b(Zt,ss),b(Zt,es),b(es,rs),b(Zt,ls),b(Zt,os),b(os,cs),b(Zt,ns),b(Zt,hs),b(hs,fs),b(Zt,is),b(Zt,ps),b(ps,ds),b(ds,vs),b(Zt,ms),b(Zt,xs),b(xs,gs),b(gs,us),b(us,bs),b(bs,Es),b(bs,ws),b(ma,ys),b(ma,Ts),b(Ts,Ds),b(Ds,Vs),b(Ts,Bs),b(Ts,Is),b(Is,ks),b(Ts,$s),b(Ts,Hs),b(Hs,Rs),b(Ts,Ns),b(Ts,zs),b(zs,Ss),b(Ts,Ls),b(Ts,Ms),b(Ms,Cs),b(Cs,Us),b(Ts,Os),b(Ts,Ps),b(Ps,As),b(As,_s),b(_s,js),b(js,Js),b(js,Fs),b(ma,Gs),b(ma,Ks),b(Ks,Ys),b(Ys,qs),b(Ks,Qs),b(Ks,Ws),b(Ws,Xs),b(Ks,Zs),b(Ks,ae),b(ae,te),b(Ks,se),b(Ks,ee),b(ee,re),b(Ks,le),b(Ks,oe),b(oe,ce),b(ce,ne),b(Ks,he),b(Ks,fe),b(fe,ie),b(ie,pe),b(pe,de),b(de,ve),b(de,me),b(ma,xe),b(ma,ge),b(ge,ue),b(ue,be),b(ge,Ee),b(ge,we),b(we,ye),b(ge,Te),b(ge,De),b(De,Ve),b(ge,Be),b(ge,Ie),b(Ie,ke),b(ge,$e),b(ge,He),b(He,Re),b(Re,Ne),b(ge,ze),b(ge,Se),b(Se,Le),b(Le,Me),b(Me,Ce),b(Ce,Ue),b(Ce,Oe),b(V,Pe),b(V,Ae),b(Ae,_e),b(_e,je),b(Ae,Fe),b(Ae,Ge),b(Ge,Ke),b(Ae,Ye),b(Ae,qe),b(qe,Qe),We=!0},p(a,[t]){const s={};if(8192&t&&(s.$$scope={dirty:t,ctx:a}),k.$set(s),14&t){let s;for(ar=a[1],s=0;s<ar.length;s+=1){const e=z(a,ar,s);tr[s]?tr[s].p(e,t):(tr[s]=P(e),tr[s].c(),tr[s].m(oa,null))}for(;s<tr.length;s+=1)tr[s].d(1);tr.length=ar.length}},i(a){We||(E(t.$$.fragment,a),E(e.$$.fragment,a),E(k.$$.fragment,a),E(M.$$.fragment,a),We=!0)},o(a){w(t.$$.fragment,a),w(e.$$.fragment,a),w(k.$$.fragment,a),w(M.$$.fragment,a),We=!1},d(a){y(t,a),a&&l(s),y(e,a),a&&l(D),a&&l(V),y(k),y(M),T(tr,a)}}}const _=!1,j=!0;function J(){document.getElementById("marcusprofile").classList.add("block"),document.getElementById("marcusprofile").classList.remove("hidden")}function F(a){return[{title:"About | Cloud Billing System",description:"About page of the RTI International, Inc. Cloud Billing System",url:"/about",keywords:["sveltekit","sveltekit starter","sveltekit starter about"],searchUrl:"/about"},k,()=>{$("/email")},()=>{$("/message")},()=>$("/admin?alerts")]}export default class extends a{constructor(a){super(),t(this,a,F,A,s,{})}}export{_ as hydrate,j as prerender};
