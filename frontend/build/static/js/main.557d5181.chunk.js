(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[0],{100:function(e,t,n){"use strict";n.r(t);var c=n(0),a=n.n(c),s=n(59),i=n.n(s),j=(n(73),n(39)),r=n(4),o=n(7),d=n(33),l=n.n(d),b=(n(92),n(1)),O=function(){var e=Object(r.f)(),t=Object(c.useState)("hello"),n=Object(o.a)(t,2),a=n[0],s=n[1];return Object(c.useEffect)((function(){l.a.get("/create_folder").then((function(e){console.log(e.data.message)}))}),[]),Object(b.jsx)("div",{className:"App",children:Object(b.jsxs)("header",{className:"App-header",children:[Object(b.jsx)("button",{onClick:function(){l.a.get("/home").then((function(e){s(e.data.time)}))},children:"get"}),Object(b.jsx)("h1",{children:"Home"}),Object(b.jsx)(j.b,{to:"/page_a",children:"PageA"}),a,Object(b.jsx)("button",{onClick:function(){e("./page_a")},children:"push"})]})})},h=n(115),u=n(65),x=n.n(u),p=n(117),m=n(60),f=n(63),g=n.n(f),v=Object(c.memo)((function(e){var t=e.downloadPath;return Object(b.jsx)("div",{children:Object(b.jsxs)(h.a,{onClick:function(){Object(m.saveAs)(t,"ascii_art"),console.log("".concat("","/static/images/ascii_images/").concat(t))},variant:"contained",children:["Download",Object(b.jsx)(g.a,{})]})})})),w=n(64),k=n.n(w),y=function(){return Object(b.jsx)("div",{children:Object(b.jsxs)(h.a,{variant:"contained",children:["Remake",Object(b.jsx)(k.a,{})]})})},F=function(e){var t=e.setImage,n=Object(c.useState)(""),a=Object(o.a)(n,2),s=a[0],i=a[1];return Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)("form",{onSubmit:function(e){var n=new FormData(e.target);e.preventDefault();l.a.post("/make",n,{headers:{"content-type":"multipart/form-data"}}).then((function(e){t(e.data.name),i(e.data.name)}))},children:Object(b.jsxs)(p.a,{direction:"row",spacing:2,children:[Object(b.jsxs)("label",{children:[Object(b.jsx)("input",{accept:"image/*",type:"file",name:"file",style:{display:"none"}}),Object(b.jsx)(h.a,{variant:"contained",component:"span",children:"Upload"})]}),Object(b.jsx)("label",{children:Object(b.jsxs)(h.a,{variant:"contained",type:"submit",children:[Object(b.jsx)("span",{children:"Send"}),Object(b.jsx)(x.a,{})]})})]})}),Object(b.jsx)(v,{downloadPath:s}),Object(b.jsx)(y,{})]})},S=n.p+"static/media/apple.7e4c522c.png",A=function(){var e=Object(c.useState)(S),t=Object(o.a)(e,2),n=t[0],a=t[1];return Object(b.jsx)("div",{className:"App",children:Object(b.jsxs)("header",{className:"App-header",children:[Object(b.jsx)("img",{src:n,style:{width:"500px"}}),Object(b.jsx)(F,{setImage:a})]})})},C=function(){return Object(b.jsx)("div",{children:Object(b.jsx)(j.a,{children:Object(b.jsxs)(r.c,{children:[Object(b.jsx)(r.a,{path:"/",element:Object(b.jsx)(O,{})}),Object(b.jsx)(r.a,{path:"/page_a",element:Object(b.jsx)(A,{})})]})})})},_=function(){return Object(b.jsx)(b.Fragment,{children:Object(b.jsx)(C,{})})},P=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,118)).then((function(t){var n=t.getCLS,c=t.getFID,a=t.getFCP,s=t.getLCP,i=t.getTTFB;n(e),c(e),a(e),s(e),i(e)}))};i.a.render(Object(b.jsx)(a.a.StrictMode,{children:Object(b.jsx)(_,{})}),document.getElementById("root")),P()},73:function(e,t,n){},92:function(e,t,n){}},[[100,1,2]]]);
//# sourceMappingURL=main.557d5181.chunk.js.map