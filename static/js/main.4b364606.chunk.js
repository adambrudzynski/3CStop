(this.webpackJsonp3cstop=this.webpackJsonp3cstop||[]).push([[0],{194:function(e,t,n){e.exports=n(360)},199:function(e,t,n){},201:function(e,t,n){},360:function(e,t,n){"use strict";n.r(t);var a=n(0),o=n.n(a),c=n(44),r=n.n(c),l=(n(199),n(200),n(201),n(16)),s=n(185),i=n(379),u=n(383),p=n(372),m=n(380),d=n(384),f=n(376),v=n(369),g=n(374),h=n(65),E=n(21),y=n.n(E),b=n(30),w=function(e){var t="".concat("https://cors.3cstop.workers.dev/?","https://ztm.gda.pl/rozklady/pobierz_SIP.php?n[0]=").concat(e);return fetch(t).then((function(e){var t=e.headers.get("content-type"),n=t.substring(t.indexOf("charset=")+8);return e.arrayBuffer().then((function(e){var t=new DataView(e);return new TextDecoder(n).decode(t).replace('<p style="font-size: 8pt; font-style:italic;margin-top: 0;text-align:center;">\u0179r\xf3d\u0142o danych: narz\u0119dzie oprogramowania SIP opracowane przez <a href="http://www.gmv.com">GMV</a></p>',"")}))}))},k=n(45),O=n.n(k),I=function(){var e=Object(b.a)(y.a.mark((function e(t){var n,a,o;return y.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,"https://cors.3cstop.workers.dev/?",n="".concat("https://cors.3cstop.workers.dev/?","https://zkmgdynia.pl/stopsAPI/getDisplay/").concat(t),e.next=5,O.a.get(n);case 5:return a=e.sent,o=a.data,e.abrupt("return",o.delay);case 10:e.prev=10,e.t0=e.catch(0),console.log(e.t0);case 13:case"end":return e.stop()}}),e,null,[[0,10]])})));return function(t){return e.apply(this,arguments)}}(),z=function(e){var t=e.stop,n=e.stopid,a=t.map((function(e){return o.a.createElement("tr",{key:e.delay+n},o.a.createElement("td",null,e.shortName),o.a.createElement("td",null,e.headSign),o.a.createElement("td",null,e.delayDesc))}));return o.a.createElement("div",null,o.a.createElement("table",null,o.a.createElement("thead",null,o.a.createElement("tr",null,o.a.createElement("th",null,"Linia"),o.a.createElement("th",{style:{minWidth:"200px"}},"Kierunek"),o.a.createElement("th",null,"Odjazd"))),o.a.createElement("tbody",null,a)))},j=n(375),x=function(e){var t=e.stopId,n=Object(a.useState)(null),c=Object(l.a)(n,2),r=c[0],s=c[1],i=Object(a.useState)(null),u=Object(l.a)(i,2),p=u[0],m=u[1],d=Object(a.useState)(!1),f=Object(l.a)(d,2),v=f[0],g=f[1],h=Object(a.useState)(null),E=Object(l.a)(h,2);E[0],E[1];Object(a.useEffect)((function(){t<3e4?k(t):O(t)}),[t]);var k=function(){var e=Object(b.a)(y.a.mark((function e(t){var n;return y.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return g(!0),e.next=3,w(t);case 3:n=e.sent,s({__html:n}),g(!1);case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),O=function(){var e=Object(b.a)(y.a.mark((function e(t){var n;return y.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return g(!0),e.next=3,I(t);case 3:n=e.sent,m(n),g(!1);case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),x=o.a.createElement(j.a,null,o.a.createElement(j.a.Line,null),o.a.createElement(j.a.Line,null),o.a.createElement(j.a.Line,null),o.a.createElement(j.a.Line,null),o.a.createElement(j.a.Line,null));return v?o.a.createElement(o.a.Fragment,null,"   ",x):p?o.a.createElement(z,{stopid:t,stop:p}):o.a.createElement("div",{dangerouslySetInnerHTML:r})},S=Object(a.forwardRef)((function(e,t){var n=e.stop,c=e.activeIndex,r=e.manageActive,s=Object(a.useState)(!0),i=Object(l.a)(s,2);i[0],i[1];Object(a.useEffect)((function(){c===n.stopId&&t.current.scrollIntoView({behavior:"smooth",block:"center"})}),[c]);return o.a.createElement("div",{ref:t,key:n.stopId},o.a.createElement(g.a.Title,{active:c===n.stopId,index:n.stopId,onClick:function(){r(n),console.log(n)}},n.stopId>=3e4?o.a.createElement(o.a.Fragment,null,o.a.createElement(h.a,{size:"tiny",color:"blue",content:"ZKM"}),n.stopName,n.stopCode&&o.a.createElement(h.a,{circular:!0,size:"tiny",content:n.stopCode}),n.distance&&o.a.createElement(h.a,{circular:!0,color:"olive",size:"tiny",content:"".concat(n.distance>=1e3?Math.round(n.distance/100)/10+"km":n.distance+"m")})):o.a.createElement(o.a.Fragment,null,o.a.createElement(h.a,{size:"tiny",color:"red",content:"ZTM"}),n.stopName,n.stopCode&&o.a.createElement(h.a,{circular:!0,size:"tiny",content:n.stopCode}),n.distance&&o.a.createElement(h.a,{circular:!0,color:"yellow",size:"tiny",content:"".concat(n.distance>=1e3?Math.round(n.distance/100)/10+"km":n.distance+"m")}))),o.a.createElement(g.a.Content,{active:c===n.stopId},c===n.stopId&&o.a.createElement(x,{stopId:n.stopId})))})),C=function(e){var t=e.stops,n=e.manageActive,a=e.activeIndex,c=t&&t.reduce((function(e,t){return e[t.stopId]=o.a.createRef(),e}),{}),r=t?t.map((function(e){return o.a.createElement(S,{key:e.stopId,ref:c[e.stopId],stop:e,activeIndex:a,manageActive:n})})):null;return t?o.a.createElement(o.a.Fragment,null,o.a.createElement(g.a,{fluid:!0,className:"main-list"},r)):o.a.createElement(f.a,{active:!0,inverted:!0},o.a.createElement(v.a,{inverted:!0,content:"Pobieranie listy przystank\xf3w"}))},L=n(377),M=n(370),A=n(381),R=n(382),W=n(18),F=(n(107),function(e,t){var n=e.distance,a=t.distance,o=0;return n>a?o=1:n<a&&(o=-1),o}),N=function(e){var t=e.stops,c=e.center,r=e.manageActive,s=e.activeIndex,i=Object(a.useState)(c),u=Object(l.a)(i,2),p=u[0],m=u[1],d=n(107),f=t?t.map((function(e){return e.distance=Math.round(d(p).to([e.stopLat,e.stopLon]).in("m")),e})).sort(F).slice(0,80):null,v=new W.Icon({iconUrl:"/3CStop/assets/map-active.svg",iconSize:[25,30]}),g=new W.Icon({iconUrl:"/3CStop/assets/map-gdn.svg",iconSize:[25,30]}),h=new W.Icon({iconUrl:"/3CStop/assets/map-gdy.svg",iconSize:[25,30]});new W.Icon({iconUrl:"/3CStop/assets/map-fav.svg",iconSize:[25,25]});return o.a.createElement(L.a,{animate:!0,center:c,zoom:15,attributionControl:!1,onMoveend:function(e){return function(e){var t=e.target.getCenter();m([t.lat,t.lng])}(e)}},f&&f.map((function(e){return o.a.createElement(M.a,{key:e.stopId,position:[e.stopLat,e.stopLon],onClick:function(){r(e)},icon:e.stopId===s?v:"zkm"===e.operator?h:g})})),o.a.createElement(A.a,{url:"https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",attribution:'\xa9 <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'}),o.a.createElement(R.a,{position:"topright"}))},P=n(378),T=n(371),D=n(46),G=n(373),U=n(361),Z={type:"grey",message:""},B=function(e){var t=e.location,n=Object(a.useState)(Z),c=Object(l.a)(n,2),r=c[0],s=c[1],i={enableHighAccuracy:!0,timeout:5e3,maximumAge:0},u=function(e){var n=e.coords;s({type:"green",message:"".concat(n.latitude,", ").concat(n.longitude)}),t([n.latitude,n.longitude]),console.log("Your current position is:"),console.log("Latitude : ".concat(n.latitude)),console.log("Longitude: ".concat(n.longitude)),console.log("More or less ".concat(n.accuracy," meters."))},p=function(e){s({type:"red",message:"ERROR(".concat(e.code,"): ").concat(e.message)}),console.warn("ERROR(".concat(e.code,"): ").concat(e.message)),"red"===r.type&&setTimeout((function(){s({type:"grey",message:null})}),3500)};return o.a.createElement(U.a,{basic:!0,icon:"location arrow",color:r.type||void 0,onClick:function(){navigator.geolocation.getCurrentPosition(u,p,i)}})},K=function(e){var t=e.search,n=e.name,a=e.operator,c=e.handleOperator,r=e.location;return o.a.createElement(P.a,{compact:!0,borderless:!0,fixed:"bottom"},o.a.createElement(P.a.Item,{fitted:!0},o.a.createElement(B,{location:r})),o.a.createElement(P.a.Item,{fitted:!0},o.a.createElement(T.a,{placeholder:"Wyszukaj...",name:"search",icon:n.length>0&&o.a.createElement(D.a,{name:"cancel",circular:!0,link:!0,onClick:function(){t("")}}),value:n,onChange:function(e){var n=e.target;t(n.value.toLowerCase())}})),o.a.createElement(P.a.Item,{fitted:!0,position:"right"},o.a.createElement(G.a,{placeholder:"Przewo\u017anik",selection:!0,options:[{key:"ztm",text:"ZTM Gda\u0144sk",value:"ztm"},{key:"zkm",text:"ZKM Gdynia",value:"zkm"},{key:"all",text:"Wszyscy",value:"all"}],onChange:function(e,t){var n=t.value;console.log(n),c(n)},value:a})))},V=function(){var e=Object(b.a)(y.a.mark((function e(){return y.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.abrupt("return",O.a.all([O.a.get("https://ckan.multimediagdansk.pl/dataset/c24aa637-3619-4dc2-a171-a23eec8f2172/resource/d3e96eb6-25ad-4d6c-8651-b1eb39155945/download/stopsingdansk.json"),O.a.get("https://cors.3cstop.workers.dev/?http://api.zdiz.gdynia.pl/pt/stops")]).then(O.a.spread((function(e,t){return console.log("gdansk",e.data.stops),console.log("gdynia",t.data),e.data.stops.concat(t.data)}))));case 4:throw e.prev=4,e.t0=e.catch(0),console.error(e.t0),new Error(e.t0);case 8:case"end":return e.stop()}}),e,null,[[0,4]])})));return function(){return e.apply(this,arguments)}}(),_={revalidateOnFocus:!1},H=function(){var e=Object(a.createRef)(),t=Object(s.a)(" ",V,_),c=t.data,r=(t.error,Object(a.useState)("")),f=Object(l.a)(r,2),v=f[0],g=f[1],h=Object(a.useState)("all"),E=Object(l.a)(h,2),y=E[0],b=E[1],w=Object(a.useState)(null),k=Object(l.a)(w,2),O=k[0],I=k[1],z=Object(a.useState)(["54.442485","18.568795"]),j=Object(l.a)(z,2),x=j[0],S=j[1],L=Object(a.useState)(null),M=Object(l.a)(L,2),A=M[0],R=M[1],W=function(e){R(e.stopId),S([e.stopLat,e.stopLon])},P=n(107),T=c&&c.map((function(e){return e.distance=O&&Math.round(P(O).to([e.stopLat,e.stopLon]).in("m")),e.operator=e.stopId<3e4?"ztm":"zkm",e})).sort(F).filter((function(e){return"all"===y?e:"ztm"===y&&e.stopId<3e4?e:"zkm"===y&&e.stopId>=3e4?e:void 0})).filter((function(e){return(e.stopName?e.stopName.toLowerCase():e.stopDesc.toLowerCase()).includes(v)}));return o.a.createElement(o.a.Fragment,null,o.a.createElement(i.a.Group,null,o.a.createElement(u.a,{maxWidth:600},o.a.createElement(C,{stops:T,activeIndex:A,manageActive:W})),o.a.createElement(u.a,{minWidth:601},o.a.createElement(p.a,{innerRef:e},o.a.createElement(m.a,{columns:2},o.a.createElement(m.a.Column,null,o.a.createElement(C,{stops:T,activeIndex:A,manageActive:W})),o.a.createElement(m.a.Column,null,o.a.createElement(d.a,{context:e},o.a.createElement(N,{stops:T,center:x,activeIndex:A,manageActive:W})))))),o.a.createElement(K,{search:function(e){g(e)},handleOperator:function(e){b(e)},operator:y,name:v,location:function(e){I(e),S(e)}})))},J=function(){return o.a.createElement(H,{key:"list"})};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(o.a.createElement(J,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[194,1,2]]]);
//# sourceMappingURL=main.4b364606.chunk.js.map