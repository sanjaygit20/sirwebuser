(this.webpackJsonpreactuserportal=this.webpackJsonpreactuserportal||[]).push([[0],{35:function(e,a,t){e.exports=t(67)},40:function(e,a,t){},41:function(e,a,t){e.exports=t.p+"static/media/logo.5d5d9eef.svg"},42:function(e,a,t){},67:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),l=t(29),c=t.n(l),o=(t(40),t(41),t(42),t(43),t(4)),s=t.n(o),m=t(10),i=t(9),u=t(11),p=t.n(u),E=t(3),d=function(){var e=Object(n.useState)([]),a=Object(i.a)(e,2),t=a[0],l=a[1];Object(n.useEffect)((function(){c()}),[]);var c=function(){var e=Object(m.a)(s.a.mark((function e(){var a;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,p.a.get(" http://localhost:3001/users");case 2:a=e.sent,l(a.data.reverse()),console.log(a);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),o=function(){var e=Object(m.a)(s.a.mark((function e(a){return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,p.a.delete("http://localhost:3001/users/".concat(a));case 2:c();case 3:case"end":return e.stop()}}),e)})));return function(a){return e.apply(this,arguments)}}();return r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"py-4"},r.a.createElement("h1",null,"Home Page"),r.a.createElement("table",{class:"table border shadow"},r.a.createElement("thead",{class:"thead-dark"},r.a.createElement("tr",null,r.a.createElement("th",{scope:"col"},"#"),r.a.createElement("th",{scope:"col"},"Name"),r.a.createElement("th",{scope:"col"},"UserName"),r.a.createElement("th",{scope:"col"},"Email"),r.a.createElement("th",{scope:"col"},"Action"))),r.a.createElement("tbody",null,t.map((function(e,a){return r.a.createElement("tr",null,r.a.createElement("th",{scope:"row"}," ",a+1," "),r.a.createElement("td",null,e.name),r.a.createElement("td",null,e.username),r.a.createElement("td",null,e.email),r.a.createElement("td",null,r.a.createElement(E.b,{class:"btn btn-primary mr-2",to:"/user/viewuser/".concat(e.id)},"View"),r.a.createElement(E.b,{class:"btn btn-outline-primary mr-2",to:"/user/edituser/".concat(e.id)},"Edit"),r.a.createElement(E.b,{class:"btn btn-danger",onClick:function(){return o(e.id)}},"Delete")))}))))))},b=function(){return r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"py-4"},r.a.createElement("h1",null,"About Page"),r.a.createElement("p",{className:"lead"},"Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.")))},f=function(){return r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"py-4"},r.a.createElement("h1",null,"Contact Page"),r.a.createElement("form",null,r.a.createElement("div",{class:"form-group"},r.a.createElement("label",{for:"exampleInputEmail1"},"Email address"),r.a.createElement("input",{type:"email",class:"form-control",id:"exampleInputEmail1","aria-describedby":"emailHelp",placeholder:"Enter email"}),r.a.createElement("small",{id:"emailHelp",class:"form-text text-muted"},"We'll never share your email with anyone else.")),r.a.createElement("div",{class:"form-group"},r.a.createElement("label",{for:"exampleInputPassword1"},"Password"),r.a.createElement("input",{type:"password",class:"form-control",id:"exampleInputPassword1",placeholder:"Password"})),r.a.createElement("div",{class:"form-check"},r.a.createElement("input",{type:"checkbox",class:"form-check-input",id:"exampleCheck1"}),r.a.createElement("label",{class:"form-check-label",for:"exampleCheck1"},"Check me out")),r.a.createElement("button",{type:"submit",class:"btn btn-primary"},"Submit"))))},h=function(){return r.a.createElement("nav",{class:"navbar navbar-expand-lg navbar-dark bg-primary"},r.a.createElement("div",{className:"container"},r.a.createElement(E.b,{class:"navbar-brand",to:"#"},"Sanjay Technical"),r.a.createElement("button",{class:"navbar-toggler",type:"button","data-toggle":"collapse","data-target":"#navbarNav","aria-controls":"navbarNav","aria-expanded":"false","aria-label":"Toggle navigation"},r.a.createElement("span",{class:"navbar-toggler-icon"})),r.a.createElement("div",{class:"collapse navbar-collapse",id:"navbarNav"},r.a.createElement("ul",{class:"navbar-nav"},r.a.createElement("li",{class:"nav-item active"},r.a.createElement(E.b,{class:"nav-link",to:"/"},"Home ",r.a.createElement("span",{class:"sr-only"},"(current)"))),r.a.createElement("li",{class:"nav-item"},r.a.createElement(E.b,{class:"nav-link",to:"/about"},"About")),r.a.createElement("li",{class:"nav-item"},r.a.createElement(E.b,{class:"nav-link",to:"/contact"},"Contact")))),r.a.createElement(E.b,{className:"btn btn-outline-light",to:"/user/adduser"},"Add User")))},v=t(1),g=function(){return r.a.createElement("div",{className:"not-found"},r.a.createElement("h1",{className:"display-1"},"Page Not Found"))},y=t(13),w=t(14),x=function(){var e=Object(v.f)(),a=Object(n.useState)({name:"",username:"",email:"",phone:"",website:""}),t=Object(i.a)(a,2),l=t[0],c=t[1],o=l.name,u=l.username,E=l.email,d=l.phone,b=l.website,f=function(e){c(Object(w.a)(Object(w.a)({},l),{},Object(y.a)({},e.target.name,e.target.value)))},h=function(){var a=Object(m.a)(s.a.mark((function a(t){return s.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return t.preventDefault(),a.next=3,p.a.post("http://localhost:3001/users",l);case 3:e.push("/");case 4:case"end":return a.stop()}}),a)})));return function(e){return a.apply(this,arguments)}}();return r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"py-4"},r.a.createElement("h1",null,"Add User"),r.a.createElement("form",{onSubmit:function(e){return h(e)}},r.a.createElement("div",{class:"form-group"},r.a.createElement("label",{for:"Name"},"Enter Name"),r.a.createElement("input",{type:"text",class:"form-control",id:"name",name:"name",value:o,"aria-describedby":"emailHelp",placeholder:"Enter name",onChange:function(e){return f(e)}})),r.a.createElement("div",{class:"form-group"},r.a.createElement("label",{for:"User Name"},"Enter Username"),r.a.createElement("input",{type:"text",class:"form-control",id:"username",name:"username",value:u,placeholder:"Enter user name ",onChange:function(e){return f(e)}})),r.a.createElement("div",{class:"form-group"},r.a.createElement("label",{for:"Email"},"Enter email"),r.a.createElement("input",{type:"text",class:"form-control",id:"email",name:"email",value:E,placeholder:"Enter your email",onChange:function(e){return f(e)}})),r.a.createElement("div",{class:"form-group"},r.a.createElement("label",{for:"Phone"},"Phone"),r.a.createElement("input",{type:"text",class:"form-control",id:"phone",name:"phone",value:d,placeholder:"Enter your phone",onChange:function(e){return f(e)}})),r.a.createElement("div",{class:"form-group"},r.a.createElement("label",{for:"Website"},"Website"),r.a.createElement("input",{type:"text",class:"form-control",id:"website",name:"website",value:b,placeholder:"Enter your website",onChange:function(e){return f(e)}})),r.a.createElement("button",{className:"btn btn-primary btn-block"},"Add User"))))},N=function(){var e=Object(v.f)(),a=Object(v.g)().id,t=Object(n.useState)({name:"",username:"",email:"",phone:"",website:""}),l=Object(i.a)(t,2),c=l[0],o=l[1],u=c.name,E=c.username,d=c.email,b=c.phone,f=c.website,h=function(e){o(Object(w.a)(Object(w.a)({},c),{},Object(y.a)({},e.target.name,e.target.value)))};Object(n.useEffect)((function(){x()}),[]);var g=function(){var t=Object(m.a)(s.a.mark((function t(n){return s.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n.preventDefault(),t.next=3,p.a.put("http://localhost:3001/users/".concat(a),c);case 3:e.push("/");case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),x=function(){var e=Object(m.a)(s.a.mark((function e(t){var n;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,p.a.get("http://localhost:3001/users/".concat(a));case 2:n=e.sent,o(n.data);case 4:case"end":return e.stop()}}),e)})));return function(a){return e.apply(this,arguments)}}();return r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"py-4"},r.a.createElement("h1",null,"Edit User"),r.a.createElement("form",{onSubmit:function(e){return g(e)}},r.a.createElement("div",{class:"form-group"},r.a.createElement("label",{for:"Name"},"Enter Name"),r.a.createElement("input",{type:"text",class:"form-control",id:"name",name:"name",value:u,"aria-describedby":"emailHelp",placeholder:"Enter name",onChange:function(e){return h(e)}})),r.a.createElement("div",{class:"form-group"},r.a.createElement("label",{for:"User Name"},"Enter Username"),r.a.createElement("input",{type:"text",class:"form-control",id:"username",name:"username",value:E,placeholder:"Enter user name ",onChange:function(e){return h(e)}})),r.a.createElement("div",{class:"form-group"},r.a.createElement("label",{for:"Email"},"Enter email"),r.a.createElement("input",{type:"text",class:"form-control",id:"email",name:"email",value:d,placeholder:"Enter your email",onChange:function(e){return h(e)}})),r.a.createElement("div",{class:"form-group"},r.a.createElement("label",{for:"Phone"},"Phone"),r.a.createElement("input",{type:"text",class:"form-control",id:"phone",name:"phone",value:b,placeholder:"Enter your phone",onChange:function(e){return h(e)}})),r.a.createElement("div",{class:"form-group"},r.a.createElement("label",{for:"Website"},"Website"),r.a.createElement("input",{type:"text",class:"form-control",id:"website",name:"website",value:f,placeholder:"Enter your website",onChange:function(e){return h(e)}})),r.a.createElement("button",{className:"btn  btn-block btn-warning"},"Update User"))))},j=function(){var e=Object(n.useState)({name:"",username:"",email:"",phone:"",website:""}),a=Object(i.a)(e,2),t=a[0],l=a[1],c=Object(v.g)().id;Object(n.useEffect)((function(){o()}),[]);var o=function(){var e=Object(m.a)(s.a.mark((function e(){var a;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,p.a.get("http://localhost:3001/users/".concat(c));case 2:a=e.sent,l(a.data);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"py-4"},r.a.createElement(E.b,{className:"btn btn-primary",to:"/"},"Back to Home"),r.a.createElement("h1",{className:"display-4"},"User Id: ",c," "),r.a.createElement("hr",null),r.a.createElement("ul",{className:"list-group w-50"},r.a.createElement("li",{className:"list-group-item"},"name:",t.name),r.a.createElement("li",{className:"list-group-item"},"username:",t.username),r.a.createElement("li",{className:"list-group-item"},"email:",t.email),r.a.createElement("li",{className:"list-group-item"},"phone:",t.phone),r.a.createElement("li",{className:"list-group-item"},"website:",t.website))))};var k=function(){return r.a.createElement(E.a,null,r.a.createElement("div",{className:"App"},r.a.createElement(h,null),r.a.createElement(v.c,null,r.a.createElement(v.a,{exact:!0,path:"/",component:d}),r.a.createElement(v.a,{exact:!0,path:"/about",component:b}),r.a.createElement(v.a,{exact:!0,path:"/contact",component:f}),r.a.createElement(v.a,{exact:!0,path:"/user/adduser",component:x}),r.a.createElement(v.a,{exact:!0,path:"/user/edituser/:id",component:N}),r.a.createElement(v.a,{exact:!0,path:"/user/viewuser/:id",component:j}),r.a.createElement(v.a,{component:g}))))},O=t(31),C=t(32),P=t(34),U=t(33);n.Component,Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(r.a.Fragment,null,r.a.createElement(k,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[35,1,2]]]);
//# sourceMappingURL=main.d08ab9c7.chunk.js.map