(this.webpackJsonp3cstop=this.webpackJsonp3cstop||[]).push([[0],{208:function(e,t,n){e.exports=n(378)},213:function(e,t,n){},215:function(e,t,n){},378:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(39),c=n.n(o),s=(n(213),n(214),n(215),n(30)),i=n(59),l=n(90),u=n(19),p=n(70),d=n(402),m=n(379),f=n(398),h=n(403),v=n(193),g=n.n(v),b=n(394),E=n(388),y=n(389),w=n(198),k=n(380),O=n(71),j=n(17),I=n.n(j),z=n(26),x=n(42),C=n.n(x),S=(new Date).toISOString().slice(0,10),L=function(){var e=Object(z.a)(I.a.mark((function e(){return I.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.abrupt("return",C.a.all([C.a.get("https://ckan.multimediagdansk.pl/dataset/c24aa637-3619-4dc2-a171-a23eec8f2172/resource/d3e96eb6-25ad-4d6c-8651-b1eb39155945/download/stopsingdansk.json"),C.a.get("https://cors.3cstop.workers.dev/?http://api.zdiz.gdynia.pl/pt/stops")]).then(C.a.spread((function(e,t){return e.data.stops.concat(t.data)}))));case 4:throw e.prev=4,e.t0=e.catch(0),console.error(e.t0),new Error(e.t0);case 8:case"end":return e.stop()}}),e,null,[[0,4]])})));return function(){return e.apply(this,arguments)}}(),A=function(){var e=Object(z.a)(I.a.mark((function e(t,n){var a,r;return I.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,C.a.get(t);case 2:return a=e.sent,r=a.data[n],e.abrupt("return",r);case 5:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),D=function(e,t){return e.reduce((function(e,n){return e[n[t]]=[].concat(Object(s.a)(e[n[t]]||[]),[n]),e}),{})},N=function(){var e=Object(z.a)(I.a.mark((function e(){var t,n,a,r,o,c;return I.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,A("https://ckan.multimediagdansk.pl/dataset/c24aa637-3619-4dc2-a171-a23eec8f2172/resource/3115d29d-b763-4af5-93f6-763b835967d6/download/stopsintrips.json",S);case 2:return t=e.sent,n=t.stopsInTrip,a=D(n,"stopId"),r=Object.entries(a),o=r.map((function(e){var t,n,a=(t=e[1],n="routeId",t.filter((function(e,a){return t.findIndex((function(t){return t[n]===e[n]}))===a}))).reduce((function(e,t){return e=[].concat(Object(s.a)(e||[]),[t.routeId])}),[]);return[[e[0]],a]})),c=Object.fromEntries(o),e.abrupt("return",c);case 9:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),R=function(e){return 10603===e?"K":10605===e?"R":10606===e?"S":10609===e?"Z":10602===e?"J":e>=1e4&&e<10500&&e>10399?"N".concat(e-1e4-400):e<500&&e>399?"N".concat(e-400):e>=1e4?e-1e4:e<900&&e>799?"T".concat(e-800):e},F=function(e){var t=e.index,n=e.style,a=e.data;return r.a.createElement("div",{key:a.stops[t].stopId,className:a.stops[t].stopId===a.activeIndex?"main-list__item--active":"main-list__item",style:Object(l.a)({overflow:"hidden",borderBottom:"1px solid lightgrey"},n)},r.a.createElement(k.a,{basic:!0,floated:"right",icon:"heart",color:a.stops[t].fav&&"red",circular:!0,onClick:function(){return a.favourite(a.stops[t].stopId)}}),r.a.createElement("div",{style:{height:"100%"},onClick:function(){return a.manageActive(a.stops[t])}},r.a.createElement(O.a,{size:"tiny",color:"ztm"===a.stops[t].operator?"red":"blue",content:a.stops[t].operator.toUpperCase()}),a.stops[t].stopName+" "||!1,a.stops[t].stopCode&&a.stops[t].stopCode,a.lines&&a.lines[a.stops[t].stopId]?r.a.createElement(r.a.Fragment,null," ",a.lines[a.stops[t].stopId].map((function(e){return r.a.createElement(O.a,{key:e,circular:!0,size:"tiny",content:R(e)})}))," "):null))},W=function(e){var t=e.stops,n=e.manageActive,o=e.activeIndex,c=e.lines,s=e.height,i=e.favourite,l=Object(a.useState)(350),p=Object(u.a)(l,2),d=p[0],m=p[1],f=function(e,t){var n=t.calculations;return m(n)};return t?r.a.createElement(y.a,{onOnScreen:f,onUpdate:f},r.a.createElement(w.a,{height:s||850,itemCount:t.length,itemSize:50,width:d.width,itemData:{favourite:i,stops:t,manageActive:n,lines:c,activeIndex:o}},F)):r.a.createElement(b.a,{active:!0,inverted:!0},r.a.createElement(E.a,{inverted:!0,content:"Pobieranie listy przystank\xf3w"}))},B=n(397),M=n(390),T=n(399),U=n(400),_=n(401),H=n(20),J=(n(117),function(e,t){var n=e.distance,a=t.distance,r=0;return n>a?r=1:n<a&&(r=-1),r}),P=n(395),K=function(e){var t="".concat("https://cors.3cstop.workers.dev/?","https://ztm.gda.pl/rozklady/pobierz_SIP.php?n[0]=").concat(e);return fetch(t).then((function(e){var t=e.headers.get("content-type"),n=t.substring(t.indexOf("charset=")+8);return e.arrayBuffer().then((function(e){var t=new DataView(e),a=new TextDecoder(n).decode(t);if(a.includes("</table>")){var r=a.slice(a.indexOf("</table>")),o=a.replace('\x3c!-- p --\x3e<div style="background: #fff; margin-top: 1em; margin-bottom: 1em;"><table class="sip">',"").trim().replace('<tr><th class="naglowek">Linia</th><th class="naglowek" style="min-width:200px;">Kierunek</th><th class="naglowek">Odjazd</th></tr>',"").trim().replace(r,"").split("<tr>");return o[0].length<5&&o.shift(),o.map((function(e){var t=e.replace("</td>","").replace("</td>","").replace("</td></tr>","").split("<td>");return t[0].length<5&&t.shift(),{shortName:t[0].replace('<span class="juz">',"").replace("</span>",""),headSign:t[1].replace('<span class="juz">',"").replace("</span>",""),delayDesc:t[2].includes("&nbsp")?">>>":t[2]}}))}return{message:"Brak odjazd\xf3w z wybranego przystanku"}}))}))},Z=function(){var e=Object(z.a)(I.a.mark((function e(t){var n,a,r;return I.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,"https://cors.3cstop.workers.dev/?",n="".concat("https://cors.3cstop.workers.dev/?","https://zkmgdynia.pl/stopsAPI/getDisplay/").concat(t),e.next=5,C.a.get(n);case 5:return a=e.sent,r=a.data,e.abrupt("return",r.delay);case 10:e.prev=10,e.t0=e.catch(0),console.log(e.t0);case 13:case"end":return e.stop()}}),e,null,[[0,10]])})));return function(t){return e.apply(this,arguments)}}(),G=n(392),V=function(e){var t=e.stop,n=e.stopid;return t&&t.length>1?r.a.createElement(G.a,{singleLine:!0,celled:!0,unstackable:!0,compact:!0},r.a.createElement(G.a.Header,null,r.a.createElement(G.a.Row,null,r.a.createElement(G.a.HeaderCell,null,"Linia"),r.a.createElement(G.a.HeaderCell,null,"Kierunek"),r.a.createElement(G.a.HeaderCell,null,"Odjazd"))),r.a.createElement(G.a.Body,null,t.map((function(e){return r.a.createElement(G.a.Row,{error:">>>"===e.delayDesc,key:e.delay+n+e.delayDesc},r.a.createElement(G.a.Cell,null,e.shortName),r.a.createElement(G.a.Cell,null,e.headSign),r.a.createElement(G.a.Cell,null,e.delayDesc))})))):r.a.createElement("div",null,"Brak odjazd\xf3w z wybranego przystanku")},Y={refreshInterval:2e4},$=function(){var e=Object(z.a)(I.a.mark((function e(t){return I.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!(t<3e4)){e.next=6;break}return e.next=3,K(t);case 3:return e.abrupt("return",e.sent);case 6:return e.next=8,Z(t);case 8:return e.abrupt("return",e.sent);case 9:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),q=function(e){var t=e.stop,n=e.reset,a=e.mobile,o=Object(p.a)("".concat(t.stopId),(function(){return $(t.stopId)}),Y),c=o.data,s=o.error;return r.a.createElement("div",{className:"stop".concat(a?"__mobile":"")},t&&r.a.createElement(r.a.Fragment,null,r.a.createElement(O.a,{size:"tiny",color:"ztm"===t.operator?"red":"blue",content:t.operator.toUpperCase()}),t.stopName+" "||!1,t.stopCode&&t.stopCode),n&&r.a.createElement(k.a,{floated:"right",icon:"cancel",circular:!0,onClick:n}),!t.stopId&&null,s&&r.a.createElement(r.a.Fragment,null,"Wyst\u0105pi\u0142 b\u0142\u0105d. Spr\xf3buj ponownie"),c?r.a.createElement(V,{stopid:t.stopId,stop:c}):r.a.createElement(P.a,null,r.a.createElement(P.a.Line,null),r.a.createElement(P.a.Line,null),r.a.createElement(P.a.Line,null),r.a.createElement(P.a.Line,null),r.a.createElement(P.a.Line,null)))},Q=function(e){var t=e.stops,o=e.stop,c=e.center,s=e.manageActive,i=e.activeIndex,l=e.resetActiveIndex,p=Object(a.useState)(c),d=Object(u.a)(p,2),m=d[0],f=d[1],h=n(117),v=t?t.map((function(e){return e.distance=Math.round(h(m).to([e.stopLat,e.stopLon]).in("m")),e})).sort(J).slice(0,80):null,g=new H.Icon({iconUrl:"/3CStop/assets/map-active.svg",iconSize:[25,30]}),b=new H.Icon({iconUrl:"/3CStop/assets/map-gdn.svg",iconSize:[25,30]}),E=new H.Icon({iconUrl:"/3CStop/assets/map-gdy.svg",iconSize:[25,30]});new H.Icon({iconUrl:"/3CStop/assets/map-fav.svg",iconSize:[25,25]});return r.a.createElement(B.a,{animate:!0,center:c,zoom:15,attributionControl:!1,onMoveend:function(e){return function(e){var t=e.target.getCenter();setTimeout((function(){f([t.lat,t.lng])}),350)}(e)}},v&&v.map((function(e){return r.a.createElement(M.a,{key:e.stopId,position:[e.stopLat,e.stopLon],onClick:function(){s(e)},icon:i&&e.stopId===i?g:"zkm"===e.operator?E:b})})),i&&r.a.createElement(T.a,{position:c,onClose:function(){l()}},r.a.createElement(q,{stop:o})),r.a.createElement(U.a,{url:"https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",attribution:'\xa9 <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'}),r.a.createElement(_.a,{position:"topright"}))},X=n(396),ee=n(391),te=n(50),ne=n(393),ae={type:"grey",message:""},re=function(e){var t=e.location,n=Object(a.useState)(ae),o=Object(u.a)(n,2),c=o[0],s=o[1],i={enableHighAccuracy:!0,timeout:5e3,maximumAge:0},l=function(e){var n=e.coords;s({type:"green",message:"".concat(n.latitude,", ").concat(n.longitude)}),t([n.latitude,n.longitude]),console.log("Your current position is:"),console.log("Latitude : ".concat(n.latitude)),console.log("Longitude: ".concat(n.longitude)),console.log("More or less ".concat(n.accuracy," meters."))},p=function(e){s({type:"red",message:"ERROR(".concat(e.code,"): ").concat(e.message)}),console.warn("ERROR(".concat(e.code,"): ").concat(e.message)),"red"===c.type&&setTimeout((function(){s({type:"grey",message:null})}),3500)};return r.a.createElement(k.a,{basic:!0,icon:"location arrow",color:c.type||void 0,onClick:function(){navigator.geolocation.getCurrentPosition(l,p,i)}})},oe=function(e){var t=e.location,n=e.handleFilters,a=e.filters;return r.a.createElement(X.a,{borderless:!0,fixed:"bottom"},r.a.createElement(X.a.Item,{fitted:!0},r.a.createElement(re,{location:t})),r.a.createElement(X.a.Item,{fitted:!0},r.a.createElement(ee.a,{placeholder:"Wyszukaj...",name:"search",icon:a.search.length>0&&r.a.createElement(te.a,{name:"cancel",circular:!0,link:!0,onClick:function(){return n("search","")}}),value:a.search,onChange:function(e){var t=e.target;return n("search",t.value.toLowerCase())}})),r.a.createElement(X.a.Item,{fitted:!0},r.a.createElement(k.a,{color:a.favs&&"red",icon:"heart",basic:!0,onClick:function(){return n("favs",!a.favs)}})),r.a.createElement(X.a.Item,{fitted:!0,position:"right"},r.a.createElement(ne.a,{placeholder:"Przewo\u017anik",selection:!0,options:[{key:"ztm",text:"ZTM Gda\u0144sk",value:"ztm"},{key:"zkm",text:"ZKM Gdynia",value:"zkm"},{key:"all",text:"Wszyscy",value:"all"}],onChange:function(e,t){var a=t.value;return n("operators",a)},value:a.operators})))};function ce(){var e=window;return{width:e.innerWidth,height:e.innerHeight}}var se={revalidateOnFocus:!1},ie=function(){var e=Object(a.createRef)(),t=Object(p.a)(" ",L,se).data,o=Object(p.a)("stopInTrips",N,se).data,c=Object(a.useState)({operators:"all",search:"",favs:!1}),v=Object(u.a)(c,2),b=v[0],E=v[1],y=Object(a.useState)(null),w=Object(u.a)(y,2),k=w[0],O=w[1],j=Object(a.useState)(["54.442485","18.568795"]),I=Object(u.a)(j,2),z=I[0],x=I[1],C=Object(a.useState)(null),S=Object(u.a)(C,2),A=S[0],D=S[1],R=Object(a.useState)(null),F=Object(u.a)(R,2),B=F[0],M=F[1],T=Object(a.useState)(ce()),U=Object(u.a)(T,2),_=U[0],H=U[1],P=g()("fav",[]),K=Object(u.a)(P,2),Z=K[0],G=K[1];Object(a.useEffect)((function(){function e(){H(ce())}return window.addEventListener("resize",e),function(){return window.removeEventListener("resize",e)}}),[]);var V=function(e){M(e),D(e.stopId),x([e.stopLat,e.stopLon])},Y=function(){D(null),M(null)},$=function(e){if(Z.includes(e)){var t=Object(s.a)(Z);t.splice(t.indexOf(e),1),G(Object(s.a)(t))}else G([].concat(Object(s.a)(Z),[e]))},X=n(117),ee=t&&t.map((function(e){return e.distance=k&&Math.round(X(k).to([e.stopLat,e.stopLon]).in("m")),e.operator=e.stopId<3e4?"ztm":"zkm",e.fav=Z.indexOf(e.stopId)>=0,e})).sort(J).filter((function(e){return!0===b.favs?e.fav===b.favs:e})).filter((function(e){return"all"===b.operators?e:b.operators===e.operator})).filter((function(e){return(e.stopName?e.stopName.toLowerCase():e.stopDesc.toLowerCase()).includes(b.search)}));return r.a.createElement(r.a.Fragment,null,r.a.createElement(d.a,{maxWidth:550},A&&r.a.createElement(q,{stop:B,reset:Y,mobile:!0}),r.a.createElement(W,{favourite:$,height:_.height-40,stops:ee,lines:o,activeIndex:A,manageActive:V})),r.a.createElement(d.a,{minWidth:551},r.a.createElement(m.a,{innerRef:e},r.a.createElement(f.a,{columns:2},r.a.createElement(f.a.Column,null,r.a.createElement(W,{favourite:$,height:_.height-40,stops:ee,lines:o,activeIndex:A,manageActive:V})),r.a.createElement(f.a.Column,null,r.a.createElement(h.a,{context:e},r.a.createElement(Q,{stops:ee,center:z,activeIndex:A,stop:B,manageActive:V,resetActiveIndex:Y})))))),r.a.createElement(oe,{filters:b,handleFilters:function(e,t){E(Object(l.a)({},b,Object(i.a)({},e,t)))},location:function(e){O(e),x(e)}}))},le=n(194),ue=n(195),pe=n(199),de=n(196),me=n(200),fe=n(101),he=n.n(fe),ve=n(197);n.n(ve).a.apply(he.a,{format:function(e){return{msg:e.message,level:e.level.label,stacktrace:e.stacktrace}},url:"https://cstop-eb35a.firebaseio.com/error/build.json"}),he.a.enableAll();var ge=function(e){function t(e){var n;return Object(le.a)(this,t),(n=Object(pe.a)(this,Object(de.a)(t).call(this,e))).state={hasError:!1,error:"",info:""},n}return Object(me.a)(t,e),Object(ue.a)(t,[{key:"componentDidCatch",value:function(e,t){this.setState({error:e}),this.setState({info:t}),he.a.error({error:e,info:t})}},{key:"render",value:function(){return this.state.hasError?r.a.createElement("div",null,r.a.createElement("h1",null,"Something went wrong."),"Error: ",JSON.stringify(this.state.error,null,"\t"),"Info: ",JSON.stringify(this.state.info,null,"\t")):this.props.children}}],[{key:"getDerivedStateFromError",value:function(e){return{hasError:!0}}}]),t}(a.Component),be=function(){return r.a.createElement(ge,null,r.a.createElement(ie,{key:"list"}))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(be,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[208,1,2]]]);
//# sourceMappingURL=main.01bc4d95.chunk.js.map