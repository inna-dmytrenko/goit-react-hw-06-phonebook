(this["webpackJsonpgoit-react-hw-06-phonebook"]=this["webpackJsonpgoit-react-hw-06-phonebook"]||[]).push([[0],{24:function(e,t,n){},25:function(e,t,n){},32:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n(5),i=n.n(a),o=(n(24),n(25),n(6)),c=n(3),l=n(10),s=n(17),b=(n(30),n(14)),d=n(19),p=n(2);var j=Object(p.a)("form",{target:"e1g0el5p4"})({name:"1ktn3fc",styles:"max-width:400px;margin:0 auto"}),x=Object(p.a)("input",{target:"e1g0el5p3"})({name:"1yd4l3f",styles:"display:block;box-sizing:border-box;width:100%;border-radius:4px;border:1px solid white;padding:10px 15px;margin-bottom:10px;font-size:14px"}),m=Object(p.a)("label",{target:"e1g0el5p2"})({name:"h8c99o",styles:"line-height:2;text-align:left;display:block;margin-bottom:13px;margin-top:20px;color:white;font-size:14px;font-weight:200"}),u=Object(p.a)("button",{target:"e1g0el5p1"})({name:"1akj4ig",styles:"background:#ec5990;color:white;text-transform:uppercase;border:none;margin-top:40px;padding:20px;font-size:16px;font-weight:100;letter-spacing:10px;margin-left:18%;&:hover{background:#bf1650;}"}),h=Object(p.a)("div",{target:"e1g0el5p0"})({name:"1w7bo27",styles:"max-width:600px;margin:0 auto"}),g="ADD_ITEM",f="DELETE_ITEM",O="FILTER_ITEM",v=n(1);function y(){var e={name:"",number:"",email:""},t=Object(c.c)((function(e){return e.items}));console.log(t);var n=Object(r.useState)(e),a=Object(s.a)(n,2),i=a[0],p=a[1],f=Object(c.b)(),O=function(e){var t=e.target.name,n=e.target.value;p(Object(o.a)(Object(o.a)({},i),{},Object(l.a)({},t,n)))},y=i.name,w=i.number,k=i.email;return Object(v.jsxs)(h,{children:[Object(v.jsxs)(j,{onSubmit:function(n){if(n.preventDefault(),t.some((function(e){return e.name===y}))||t.some((function(e){return e.number===w}))||t.some((function(e){return e.email===k})))return Object(b.b)("".concat(y," is already in contacts"));i.id=Object(d.a)(),f({type:g,payload:i}),p(e)},children:[Object(v.jsxs)("div",{children:[Object(v.jsx)(m,{htmlFor:"",children:"Name"}),Object(v.jsx)(x,{required:!0,placeholder:"Search name",type:"text",name:"name",value:y,pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"\u0418\u043c\u044f \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0442\u043e\u043b\u044c\u043a\u043e \u0438\u0437 \u0431\u0443\u043a\u0432, \u0430\u043f\u043e\u0441\u0442\u0440\u043e\u0444\u0430, \u0442\u0438\u0440\u0435 \u0438 \u043f\u0440\u043e\u0431\u0435\u043b\u043e\u0432. \u041d\u0430\u043f\u0440\u0438\u043c\u0435\u0440 Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan \u0438 \u0442. \u043f.",onChange:O})]}),Object(v.jsxs)("div",{children:[Object(v.jsx)(m,{htmlFor:"",children:"Number"}),Object(v.jsx)(x,{type:"tel",name:"number",value:w,pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"\u041d\u043e\u043c\u0435\u0440 \u0442\u0435\u043b\u0435\u0444\u043e\u043d\u0430 \u0434\u043e\u043b\u0436\u0435\u043d \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0446\u0438\u0444\u0440 \u0438 \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0434\u0435\u0440\u0436\u0430\u0442\u044c \u043f\u0440\u043e\u0431\u0435\u043b\u044b, \u0442\u0438\u0440\u0435, \u043a\u0440\u0443\u0433\u043b\u044b\u0435 \u0441\u043a\u043e\u0431\u043a\u0438 \u0438 \u043c\u043e\u0436\u0435\u0442 \u043d\u0430\u0447\u0438\u043d\u0430\u0442\u044c\u0441\u044f \u0441 +",required:!0,placeholder:"Search number",onChange:O})]}),Object(v.jsxs)("div",{children:[Object(v.jsx)(m,{htmlFor:"",children:"Email"}),Object(v.jsx)(x,{placeholder:"bluebill1049@hotmail.com",type:"email",name:"email",value:k,onChange:O})]}),Object(v.jsx)(u,{type:"submit",children:"Add contact"})]}),Object(v.jsx)(b.a,{})]})}var w=n(16);var k=Object(p.a)("div",{target:"emwijkj0"})({name:"ogrjuv",styles:"padding:10px;box-shadow:0px 3px 1px -2px rgba(0, 0, 0, 0.2),0px 2px 2px 0px rgba(0, 0, 0, 0.14),0px 1px 5px 0px rgba(0, 0, 0, 0.12);border-radius:10px"}),z=function(e){var t=e.name,n=e.number,r=e.email,a=e.id,i=(e.index,Object(c.b)());return Object(v.jsxs)(k,{children:[Object(v.jsx)("p",{children:t}),Object(v.jsx)("p",{children:n}),Object(v.jsx)("p",{children:r}),Object(v.jsx)("span",{onClick:function(){i(function(e){return{type:f,payload:e}}(a))},children:Object(v.jsx)(w.a,{})})]})};var C=Object(p.a)("input",{target:"e10v4pts2"})({name:"1yd4l3f",styles:"display:block;box-sizing:border-box;width:100%;border-radius:4px;border:1px solid white;padding:10px 15px;margin-bottom:10px;font-size:14px"}),E=Object(p.a)("label",{target:"e10v4pts1"})({name:"h8c99o",styles:"line-height:2;text-align:left;display:block;margin-bottom:13px;margin-top:20px;color:white;font-size:14px;font-weight:200"}),A=Object(p.a)("p",{target:"e10v4pts0"})({name:"jq7v1m",styles:"color:#041f0d;font-size:24px"});var S=function(){var e=Object(c.b)(),t=Object(c.c)((function(e){return e.filter}));return Object(v.jsx)("div",{children:Object(v.jsxs)(E,{children:[Object(v.jsx)(A,{children:"Filter contacts by name: "}),Object(v.jsx)(C,{name:"filter",onChange:function(t){var n=t.target.value;e(function(e){return{type:O,payload:e}}(n))},type:"text",value:t,placeholder:"Name"})]})})};var T=function(e,t){return e.filter((function(e){return e.name.toLowerCase().includes(t.toLowerCase().trim())}))};var F=Object(p.a)("div",{target:"e1n7f8083"})({name:"nrhv8a",styles:"max-width:600px;margin:0 auto;padding:20px"}),I=Object(p.a)("h1",{target:"e1n7f8082"})({name:"fntd3p",styles:"font-weight:100;color:white;text-align:center;padding-bottom:10px;border-bottom:1px solid rgb(2, 5, 12)"}),L=(Object(p.a)("input",{target:"e1n7f8081"})({name:"1yd4l3f",styles:"display:block;box-sizing:border-box;width:100%;border-radius:4px;border:1px solid white;padding:10px 15px;margin-bottom:10px;font-size:14px"}),Object(p.a)("label",{target:"e1n7f8080"})({name:"h8c99o",styles:"line-height:2;text-align:left;display:block;margin-bottom:13px;margin-top:20px;color:white;font-size:14px;font-weight:200"}),function(){var e=Object(c.c)((function(e){return e.items}));console.log(e);var t=Object(c.c)((function(e){return e.filter}));console.log(t);var n=T(e,t);return Object(v.jsxs)(F,{children:[Object(v.jsx)(y,{}),Object(v.jsx)(I,{children:"List"}),n&&Object(v.jsx)(S,{}),Object(v.jsx)("ul",{children:n.length?n.map((function(e,t){return Object(v.jsx)("li",{children:Object(v.jsx)(z,Object(o.a)(Object(o.a)({},e),{},{index:t}))},e.id)})):Object(v.jsx)("li",{children:"No contacts"})})]})});var D=function(){return Object(v.jsx)(L,{})},M=n(7),N=n(15),q=n(18),J=[{name:"Rosie Simpson",number:"459-12-56",id:"id-1"},{name:"Hermione Kline",number:"443-89-12",id:"id-2"},{name:"Eden Clements",number:"645-17-79",id:"id-3"},{name:"Annie Copeland",number:"227-91-26",id:"id-4"}],R=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:J,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case g:return[].concat(Object(q.a)(e),[t.payload]);case f:return console.log(e),e.filter((function(e){return e.id!==t.payload}));default:return e}},Z=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=arguments.length>1?arguments[1]:void 0;switch(t.type){case O:return console.log(t.payload),t.payload;default:return e}},_=Object(M.combineReducers)({items:R,filter:Z}),B=Object(M.createStore)(_,Object(N.devToolsEnhancer)());i.a.render(Object(v.jsx)(c.a,{store:B,children:Object(v.jsx)(D,{})}),document.getElementById("root"))}},[[32,1,2]]]);
//# sourceMappingURL=main.799903a5.chunk.js.map