(window["webpackJsonpsmartfarm-website"]=window["webpackJsonpsmartfarm-website"]||[]).push([[0],{28:function(e,t,n){e.exports=n(44)},33:function(e,t,n){},35:function(e,t,n){e.exports=n.p+"static/media/logo.25bf045c.svg"},36:function(e,t,n){},44:function(e,t,n){"use strict";n.r(t);var a=n(0),i=n.n(a),c=n(22),r=n.n(c),o=(n(33),n(8)),l=n(6),s=n(10),u=n(9),d=n(11),m=n(25),p=n(5),f=n(23),h=n(16),b=n.n(h),g=n(24),v=n(13),w=(n(35),n(36),n(37),window.liff),O=function(e){function t(e){var n;return Object(o.a)(this,t),(n=Object(s.a)(this,Object(u.a)(t).call(this,e))).changeHandler=function(e){n.setState(Object(f.a)({},e.target.name,e.target.value))},n.state={line_id:"",line_pic:"",loading:!1},n.initialize=n.initialize.bind(Object(v.a)(n)),n}return Object(d.a)(t,e),Object(l.a)(t,[{key:"initialize",value:function(){var e=this;console.log("Entering initialize state..."),w.init({liffId:"1610155283-WqRpOKwB"},Object(g.a)(b.a.mark((function t(){var n;return b.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,w.getProfile();case 2:n=t.sent,e.setState({line_id:n.userId,line_pic:n.pictureUrl}),console.log("Get UID completed going to register page..."),e.verifyUID();case 6:case"end":return t.stop()}}),t)}))))}}]),Object(l.a)(t,[{key:"componentDidMount",value:function(){window.addEventListener("load",this.initialize),document.title="Register"}},{key:"render",value:function(){var e=this.state,t=e.line_id,n=(e.loading,e.line_pic);return i.a.createElement("div",{class:"App font"},i.a.createElement("h1",null,"\u0e25\u0e07\u0e17\u0e30\u0e40\u0e1a\u0e35\u0e22\u0e19\u0e40\u0e01\u0e29\u0e15\u0e23\u0e01\u0e23\u0e43\u0e2b\u0e21\u0e48"),i.a.createElement("div",null,i.a.createElement("img",{width:"40%",src:n})),i.a.createElement("input",{class:"line-id",value:"Line ID: "+t,name:"Line ID: "+t,disabled:!0}),i.a.createElement("p",null,"\u0e0a\u0e37\u0e48\u0e2d\u0e40\u0e01\u0e29\u0e15\u0e23\u0e01\u0e23"),i.a.createElement("input",{class:"farmer-name",placeholder:"\u0e0a\u0e37\u0e48\u0e2d-\u0e19\u0e32\u0e21\u0e2a\u0e01\u0e38\u0e25",type:"text"}),i.a.createElement("p",null,"\u0e40\u0e1a\u0e2d\u0e23\u0e4c\u0e42\u0e17\u0e23\u0e28\u0e31\u0e1e\u0e17\u0e4c"),i.a.createElement("input",{class:"farmer-phone",placeholder:"0803205554",maxLength:"10"}),i.a.createElement("button",{class:"button"},"\u0e25\u0e07\u0e17\u0e30\u0e40\u0e1a\u0e35\u0e22\u0e19"))}}]),t}(a.Component),j=window.liff;function E(){j.scanCode().then((function(e){var t=JSON.stringify(e);alert(t),document.getElementById("scanCode").textContent=t}))}var y=function(e){function t(){return Object(o.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return E}}]),t}(a.Component),k=function(e){function t(){return Object(o.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return i.a.createElement(m.a,null,i.a.createElement(p.c,null,i.a.createElement(p.a,{exact:!0,patch:"/",component:O}),i.a.createElement(p.a,{exact:!0,patch:"/qrcode",component:y})))}}]),t}(a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(i.a.createElement(k,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[28,1,2]]]);
//# sourceMappingURL=main.703a2f34.chunk.js.map