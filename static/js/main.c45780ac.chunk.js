(this.webpackJsonp3cstop=this.webpackJsonp3cstop||[]).push([[0],{177:function(e,t,n){e.exports=n(323)},182:function(e,t,n){},323:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(37),o=n.n(c),l=(n(182),n(23)),s=n.n(l),u=n(38),i=n(20),p=n(332),d=n(335);var m=n(72),f=n.n(m),h=n(75),v=function(e){var t="".concat("https://cors-anywhere.herokuapp.com/","http://ztm.gda.pl/rozklady/pobierz_SIP.php?n[0]=").concat(e);return fetch(t).then((function(e){var t=e.headers.get("content-type"),n=t.substring(t.indexOf("charset=")+8);return e.arrayBuffer().then((function(e){var t=new DataView(e);return new TextDecoder(n).decode(t).replace('<p style="font-size: 8pt; font-style:italic;margin-top: 0;text-align:center;">\u0179r\xf3d\u0142o danych: narz\u0119dzie oprogramowania SIP opracowane przez <a href="http://www.gmv.com">GMV</a></p>',"")}))}))},E=function(){var e=Object(u.a)(s.a.mark((function e(t){var n,a,r;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,"https://cors-anywhere.herokuapp.com/",n="".concat("https://cors-anywhere.herokuapp.com/","https://zkmgdynia.pl/stopsAPI/getDisplay/").concat(t),e.next=5,f.a.get(n);case 5:return a=e.sent,r=a.data,e.abrupt("return",r.delay);case 10:e.prev=10,e.t0=e.catch(0),console.log(e.t0);case 13:case"end":return e.stop()}}),e,null,[[0,10]])})));return function(t){return e.apply(this,arguments)}}(),b=function(e){var t=e.stop,n=e.stopid,a=t.map((function(e){return r.a.createElement("tr",{key:e.delay+n},r.a.createElement("td",null,e.shortName),r.a.createElement("td",null,e.headSign),r.a.createElement("td",null,e.delayDesc))}));return r.a.createElement("div",null,r.a.createElement("table",null,r.a.createElement("thead",null,r.a.createElement("tr",null,r.a.createElement("th",null,"Linia"),r.a.createElement("th",{style:{minWidth:"200px"}},"Kierunek"),r.a.createElement("th",null,"Odjazd"))),r.a.createElement("tbody",null,a)))},g=function(e){var t=e.stopId,n=Object(a.useState)(null),c=Object(i.a)(n,2),o=c[0],l=c[1],p=Object(a.useState)(null),d=Object(i.a)(p,2),m=d[0],f=d[1],h=Object(a.useState)(!1),g=Object(i.a)(h,2),y=g[0],k=g[1],w=Object(a.useState)(null),j=Object(i.a)(w,2);j[0],j[1];Object(a.useEffect)((function(){t<3e4?O(t):z(t)}),[t]);var O=function(){var e=Object(u.a)(s.a.mark((function e(t){var n;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return k(!0),e.next=3,v(t);case 3:n=e.sent,l({__html:n}),k(!1);case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),z=function(){var e=Object(u.a)(s.a.mark((function e(t){var n;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return k(!0),e.next=3,E(t);case 3:n=e.sent,f(n),k(!1);case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return y?r.a.createElement("p",null,"loading"):m?r.a.createElement(b,{stopid:t,stop:m}):r.a.createElement("div",{dangerouslySetInnerHTML:o})},y=function(e){var t=e.stop,n=Object(a.useState)(!0),c=Object(i.a)(n,2),o=c[0],l=c[1];return r.a.createElement(a.Fragment,{key:t.stopId},r.a.createElement(d.a.Title,{key:t.stopId+"title",active:!o,onClick:function(){l(!o),console.log(t)}},t.stopId>=3e4?r.a.createElement(r.a.Fragment,null,r.a.createElement(h.a,{size:"tiny",color:"blue",content:"ZKM"}),t.stopDesc,t.stopCode&&r.a.createElement(h.a,{circular:!0,size:"tiny",content:t.stopCode}),"                "):r.a.createElement(r.a.Fragment,null,r.a.createElement(h.a,{size:"tiny",color:"red",content:"ZTM"}),t.stopDesc,t.stopCode&&r.a.createElement(h.a,{circular:!0,size:"tiny",content:t.stopCode}))),r.a.createElement(d.a.Content,{key:t.stopId+"content",active:!o},!o&&r.a.createElement(g,{stopId:t.stopId})))},k=n(336),w=n(333),j=function(e){var t=e.search,n=e.name,a=e.stickyContext,c=e.operator,o=e.handleOperator;return r.a.createElement(k.a,{context:a},r.a.createElement(w.a,null,r.a.createElement(w.a.Group,null,r.a.createElement(w.a.Input,{placeholder:"Wyszukaj...",name:"search",icon:"search",iconPosition:"left",value:n,onChange:function(e){var n=e.target;t(n.value.toLowerCase())}}),r.a.createElement(w.a.Dropdown,{placeholder:"Przewo\u017anik",multiple:!0,selection:!0,options:[{key:"ztm",text:"ZTM Gda\u0144sk",value:"ztm"},{key:"zkm",text:"ZKM Gdynia",value:"zkm"}],onChange:function(e,t){var n=t.value;console.log(n),o(n)},value:c}))))},O=function(){var e=new Date,t=""+(e.getMonth()+1),n=""+e.getDate(),a=e.getFullYear();return t.length<2&&(t="0"+t),n.length<2&&(n="0"+n),[a,t,n].join("-")}(),z=function(){var e=Object(a.useState)([]),t=Object(i.a)(e,2),n=t[0],c=t[1],o=Object(a.useState)(!1),l=Object(i.a)(o,2),m=l[0],h=l[1],v=Object(a.useState)(null),E=Object(i.a)(v,2),b=E[0],g=E[1],k=Object(a.useState)(""),w=Object(i.a)(k,2),z=w[0],x=w[1],I=Object(a.useState)([]),S=Object(i.a)(I,2),C=S[0],D=S[1];Object(a.useEffect)((function(){F()}),[]);var M=Object(a.createRef)(),F=function(){var e=Object(u.a)(s.a.mark((function e(){var t,n;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,h(!0),"https://ckan.multimediagdansk.pl/dataset/c24aa637-3619-4dc2-a171-a23eec8f2172/resource/4c4025f0-01bf-41f7-a39f-d156d201b82b/download/stops.json",e.next=5,f.a.get("https://ckan.multimediagdansk.pl/dataset/c24aa637-3619-4dc2-a171-a23eec8f2172/resource/4c4025f0-01bf-41f7-a39f-d156d201b82b/download/stops.json");case 5:t=e.sent,n=t.data,c(n[O].stops),h(!1),e.next=15;break;case 11:e.prev=11,e.t0=e.catch(0),g(e.t0),h(!1);case 15:case"end":return e.stop()}}),e,null,[[0,11]])})));return function(){return e.apply(this,arguments)}}(),P=n.filter((function(e){return 0===C.length||2===C.length?e:1===C.length&&C.includes("ztm")&&e.stopId<3e4?e:1===C.length&&C.includes("zkm")&&e.stopId>=3e4?e:void 0})).filter((function(e){return e.stopDesc.toLowerCase().includes(z)})).map((function(e){return r.a.createElement(y,{key:e.stopId+"accordition",stop:e})}));return m?r.a.createElement("h1",null,"loading"):b?r.a.createElement("h1",null,"Error!"):r.a.createElement(p.a,null,r.a.createElement("div",{ref:M},r.a.createElement(j,{search:function(e){x(e)},handleOperator:function(e){D(e)},operator:C,name:z,stickyContext:M}),r.a.createElement(d.a,{styled:!0},P)))},x=(n(322),function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(z,{key:"list"}))});Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(x,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[177,1,2]]]);
//# sourceMappingURL=main.c45780ac.chunk.js.map