(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[0],{72:function(e,t,n){},91:function(e,t,n){},98:function(e,t,n){"use strict";n.r(t);var c=n(0),a=n.n(c),s=n(59),i=n.n(s),j=(n(72),n(39)),r=n(4),o=n(7),l=n(33),d=n.n(l),b=(n(91),n(1)),h=function(){var e=Object(r.f)(),t=Object(c.useState)("hello"),n=Object(o.a)(t,2),a=n[0],s=n[1];return Object(c.useEffect)((function(){d.a.get("/create_folder").then((function(e){console.log(e.data.message)}))}),[]),Object(b.jsx)("div",{className:"App",children:Object(b.jsxs)("header",{className:"App-header",children:[Object(b.jsx)("button",{onClick:function(){d.a.get("/home").then((function(e){s(e.data.time)}))},children:"get"}),Object(b.jsx)("h1",{children:"Home"}),Object(b.jsx)(j.b,{to:"/page_a",children:"PageA"}),a,Object(b.jsx)("button",{onClick:function(){e("./page_a")},children:"push"})]})})},O=n(113),p=n(62),u=n.n(p),x=function(){return Object(b.jsx)("div",{children:Object(b.jsxs)(O.a,{variant:"contained",type:"submit",children:["Download",Object(b.jsx)(u.a,{})]})})},f=n(63),m=n.n(f),g=function(){return Object(b.jsx)("div",{children:Object(b.jsxs)(O.a,{variant:"contained",children:["Remake",Object(b.jsx)(m.a,{})]})})},v=n(64),y=n.n(v),A=n(115),k=n.p+"static/media/apple.7e4c522c.png",w=function(){var e=Object(c.useState)(k),t=Object(o.a)(e,2),n=t[0],a=t[1];return Object(b.jsx)("div",{className:"App",children:Object(b.jsxs)("header",{className:"App-header",children:[Object(b.jsx)("img",{src:n,style:{width:"500px"}}),Object(b.jsx)("form",{onSubmit:function(e){var t=new FormData(e.target),n=t.get("file");console.log(n),e.preventDefault();d.a.post("/make",t,{headers:{"content-type":"multipart/form-data"}}).then((function(e){a("".concat("","/static/images/ascii_images/").concat(e.data.name)),console.log(e)}))},children:Object(b.jsxs)(A.a,{direction:"row",spacing:2,children:[Object(b.jsxs)("label",{children:[Object(b.jsx)("input",{accept:"image/*",type:"file",name:"file",style:{display:"none"}}),Object(b.jsx)(O.a,{variant:"contained",component:"span",children:"Upload"})]}),Object(b.jsx)("label",{children:Object(b.jsxs)(O.a,{variant:"contained",type:"submit",children:[Object(b.jsx)("span",{children:"Send"}),Object(b.jsx)(y.a,{})]})})]})})]})})},N=function(){return Object(b.jsx)("div",{className:"App",children:Object(b.jsxs)("header",{className:"App-header",children:[Object(b.jsx)(w,{}),Object(b.jsx)(x,{}),Object(b.jsx)(g,{})]})})},S=function(){return Object(b.jsx)("div",{children:Object(b.jsx)(j.a,{children:Object(b.jsxs)(r.c,{children:[Object(b.jsx)(r.a,{path:"/",element:Object(b.jsx)(h,{})}),Object(b.jsx)(r.a,{path:"/page_a",element:Object(b.jsx)(N,{})})]})})})},C=function(){return Object(b.jsx)(S,{})},F=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,116)).then((function(t){var n=t.getCLS,c=t.getFID,a=t.getFCP,s=t.getLCP,i=t.getTTFB;n(e),c(e),a(e),s(e),i(e)}))};i.a.render(Object(b.jsx)(a.a.StrictMode,{children:Object(b.jsx)(C,{})}),document.getElementById("root")),F()}},[[98,1,2]]]);
//# sourceMappingURL=main.ffb31181.chunk.js.map