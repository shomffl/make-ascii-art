(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[0],{67:function(e,t,n){},86:function(e,t,n){},95:function(e,t,n){"use strict";n.r(t);var c=n(0),a=n.n(c),s=n(56),i=n.n(s),o=(n(67),n(39)),j=n(4),r=n(7),l=n(33),d=n.n(l),b=(n(86),n(3)),h=function(){var e=Object(j.f)(),t=Object(c.useState)("hello"),n=Object(r.a)(t,2),a=n[0],s=n[1];return Object(c.useEffect)((function(){d.a.get("/create_folder").then((function(e){console.log(e.data.message)}))}),[]),Object(b.jsx)("div",{className:"App",children:Object(b.jsxs)("header",{className:"App-header",children:[Object(b.jsx)("button",{onClick:function(){d.a.get("/home").then((function(e){s(e.data.time)}))},children:"get"}),Object(b.jsx)("h1",{children:"Home"}),Object(b.jsx)(o.b,{to:"/page_a",children:"PageA"}),a,Object(b.jsx)("button",{onClick:function(){e("./page_a")},children:"push"})]})})},p=n(111),u=n(59),O=n.n(u),f=n(113),m=n.p+"static/media/apple.7e4c522c.png",x=function(){var e=Object(c.useState)(m),t=Object(r.a)(e,2),n=t[0],a=t[1];return Object(b.jsx)("div",{className:"App",children:Object(b.jsxs)("header",{className:"App-header",children:[Object(b.jsx)("img",{src:n,style:{width:"500px"}}),Object(b.jsx)("form",{onSubmit:function(e){var t=new FormData(e.target),n=t.get("file");console.log(n),e.preventDefault();d.a.post("/make",t,{headers:{"content-type":"multipart/form-data"}}).then((function(e){a("".concat("","/static/images/ascii_images/").concat(e.data.name)),console.log(e)}))},children:Object(b.jsxs)(f.a,{direction:"row",spacing:2,children:[Object(b.jsxs)("label",{children:[Object(b.jsx)("input",{accept:"image/*",type:"file",name:"file",style:{display:"none"}}),Object(b.jsx)(p.a,{variant:"contained",component:"span",children:"Upload"})]}),Object(b.jsx)("label",{children:Object(b.jsxs)(p.a,{variant:"contained",type:"submit",children:[Object(b.jsx)("span",{children:"Send"}),Object(b.jsx)(O.a,{})]})})]})})]})})},g=function(){return Object(b.jsx)(o.a,{children:Object(b.jsxs)(j.c,{children:[Object(b.jsx)(j.a,{path:"/",element:Object(b.jsx)(h,{})}),Object(b.jsx)(j.a,{path:"/page_a",element:Object(b.jsx)(x,{})})]})})},v=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,114)).then((function(t){var n=t.getCLS,c=t.getFID,a=t.getFCP,s=t.getLCP,i=t.getTTFB;n(e),c(e),a(e),s(e),i(e)}))};i.a.render(Object(b.jsx)(a.a.StrictMode,{children:Object(b.jsx)(g,{})}),document.getElementById("root")),v()}},[[95,1,2]]]);
//# sourceMappingURL=main.7fb26ec8.chunk.js.map