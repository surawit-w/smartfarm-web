(window["webpackJsonpsmartfarm-website"]=window["webpackJsonpsmartfarm-website"]||[]).push([[0],{28:function(e,t,n){e.exports=n(44)},33:function(e,t,n){},35:function(e,t,n){e.exports=n.p+"static/media/logo.25bf045c.svg"},36:function(e,t,n){},44:function(e,t,n){"use strict";n.r(t);var a=n(0),i=n.n(a),r=n(24),c=n.n(r),o=(n(33),n(9)),l=n(6),s=n(11),u=n(10),d=n(12),m=n(25),p=n(5),f=n(18),h=n(8),b=n.n(h),v=n(15),g=n(14),w=(n(35),n(36),n(37),"https://line-smartfarm-api.herokuapp.com"),O=function(e,t,n){return new Promise((function(a,i){fetch(w+e,{method:"POST",headers:n?{}:{"Content-Type":"application/json"},body:n?t:JSON.stringify(t),credentials:"include"}).then((function(e){return e.json()})).then((function(e){return a(e)})).catch((function(e){return i(e)}))}))},j=window.liff;var E=function(e){function t(e){var n;return Object(o.a)(this,t),(n=Object(s.a)(this,Object(u.a)(t).call(this,e))).handleChange=function(){var e=Object(v.a)(b.a.mark((function e(t){var a,i,r;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=t.target,i=a.value,r=a.name,e.t0=n,e.t1=Object(f.a)({},r,i),e.next=5,console.log(n.state);case 5:return e.t2=e.sent,e.next=8,e.t0.setState.call(e.t0,e.t1,e.t2);case 8:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),n.changeHandler=function(e){n.setState(Object(f.a)({},e.target.name,e.target.value))},n.sendInfo=Object(v.a)(b.a.mark((function e(){var t,a,i,r;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=n.state.name,a=n.state.tel,i=n.state.line_id,e.next=5,O("/sendInfo",{name:t,tel:a,lineId:i});case 5:r=e.sent,console.log(r),alert(r.status);case 8:case"end":return e.stop()}}),e)}))),n.state={line_id:"",line_pic:"",name:"",tel:"",loading:!1,user_info_arr:[]},n.initialize=n.initialize.bind(Object(g.a)(n)),n}return Object(d.a)(t,e),Object(l.a)(t,[{key:"initialize",value:function(){var e=this;console.log("Entering initialize state..."),j.init({liffId:"1610155283-WqRpOKwB"},Object(v.a)(b.a.mark((function t(){var n;return b.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,j.getProfile();case 2:n=t.sent,e.setState({line_id:n.userId,line_pic:n.pictureUrl}),console.log("Get UID completed going to register page..."),e.verifyUID();case 6:case"end":return t.stop()}}),t)}))))}}]),Object(l.a)(t,[{key:"componentDidMount",value:function(){window.addEventListener("load",this.initialize),document.title="Register"}},{key:"render",value:function(){var e=this.state,t=e.line_id,n=(e.loading,e.line_pic),a=e.name,r=e.tel;return i.a.createElement("div",{class:"App font"},i.a.createElement("h1",null,"\u0e25\u0e07\u0e17\u0e30\u0e40\u0e1a\u0e35\u0e22\u0e19\u0e40\u0e01\u0e29\u0e15\u0e23\u0e01\u0e23\u0e43\u0e2b\u0e21\u0e48"),i.a.createElement("div",null,i.a.createElement("img",{width:"40%",src:n})),i.a.createElement("input",{class:"line-id",value:"Line ID: "+t,name:"Line ID: "+t,disabled:!0}),i.a.createElement("p",null,"\u0e0a\u0e37\u0e48\u0e2d\u0e40\u0e01\u0e29\u0e15\u0e23\u0e01\u0e23"),i.a.createElement("input",{required:!0,class:"farmer-name",placeholder:"\u0e0a\u0e37\u0e48\u0e2d-\u0e19\u0e32\u0e21\u0e2a\u0e01\u0e38\u0e25",type:"text",name:"name",value:a,onChange:this.changeHandler}),i.a.createElement("p",null,"\u0e40\u0e1a\u0e2d\u0e23\u0e4c\u0e42\u0e17\u0e23\u0e28\u0e31\u0e1e\u0e17\u0e4c"),i.a.createElement("input",{required:!0,class:"farmer-phone",placeholder:"\u0e01\u0e23\u0e2d\u0e01\u0e40\u0e1a\u0e2d\u0e23\u0e4c\u0e42\u0e17\u0e23\u0e28\u0e31\u0e1e\u0e17\u0e4c\u0e17\u0e35\u0e48\u0e19\u0e35\u0e48\u0e04\u0e48\u0e30",maxLength:"10",type:"tel",name:"tel",value:r,onChange:this.changeHandler}),i.a.createElement("button",{class:"button",type:"submit",id:"submitBtn",onClick:this.sendInfo},"\u0e25\u0e07\u0e17\u0e30\u0e40\u0e1a\u0e35\u0e22\u0e19"))}}]),t}(a.Component),y=window.liff,k=function(e){function t(){return Object(o.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(l.a)(t,[{key:"initialize",value:function(){y.init({liffId:"1610155283-WqRpOKwB"},(function(){}))}},{key:"render",value:function(){return i.a.createElement("div",null,i.a.createElement("p",{id:"scanCode"}),i.a.createElement("p",null,i.a.createElement("button",{id:"btnScanCode",onclick:"scancode()"},"Scan Code")))}}]),t}(a.Component),I=function(e){function t(){return Object(o.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return i.a.createElement(m.a,null,i.a.createElement(p.c,null,i.a.createElement(p.a,{patch:"/register",component:E}),i.a.createElement(p.a,{patch:"/qrcode",component:k})))}}]),t}(a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(i.a.createElement(I,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[28,1,2]]]);
//# sourceMappingURL=main.d3d6a61e.chunk.js.map