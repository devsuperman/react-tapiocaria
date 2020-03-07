(this["webpackJsonpreact-tapiocaria"]=this["webpackJsonpreact-tapiocaria"]||[]).push([[0],{101:function(e,a,t){},110:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),c=t(19),l=t.n(c),i=t(131),o=t(111),u=t(133),s=t(135),m=t(13),p=t.n(m),E=t(21),d=t(130),f=t(123),b=t(134),h=t(15),v=t(120),g=t(124),x=t(58),j=t.n(x).a.create({baseURL:"https://tapiocaria.azurewebsites.net/api"});t(101);var w=function(){var e=Object(n.useState)([]),a=Object(E.a)(e,2),t=a[0],c=a[1],l=Object(n.useState)([]),i=Object(E.a)(l,2),o=i[0],s=i[1],m=Object(n.useState)("Carregando Tapiocas..."),x=Object(E.a)(m,2),w=x[0],O=x[1];function y(e){return{recheio:"Tapioca de ".concat(e.recheio),preco:(a=e.preco,(a=a.toFixed(2).split("."))[0]="R$ "+a[0].split(/(?=(?:...)*$)/).join("."),a.join(",")),id:e.id};var a}return Object(n.useEffect)((function(){!function(){var e,a;p.a.async((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,p.a.awrap(j.get("/tapiocas"));case 2:e=t.sent,a=e.data.map(y),c(a),s(a),O("");case 7:case"end":return t.stop()}}))}()}),[]),r.a.createElement(r.a.Fragment,null,r.a.createElement(u.a,{level:"2"},r.a.createElement(v.a,null),"Card\xe1pio de Tapiocas"),r.a.createElement(d.a,{placeholder:"Pesquisar",onChange:function(e){var a=e.target.value;s(t.filter((function(e){return e.recheio.toLowerCase().includes(a)})))}}),r.a.createElement("span",null," ",w," "),r.a.createElement("div",{className:"list"},o.map((function(e){return r.a.createElement(h.c,{key:e.id,to:"/tapiocas/editar/".concat(e.id),className:"list-item"},r.a.createElement("div",null," ",e.recheio," "),r.a.createElement("div",{className:"texto-secundario"}," ",e.preco))}))),r.a.createElement(f.a,{background:"brand",pad:"medium",justify:"end"},r.a.createElement(h.c,{to:"/tapiocas/criar"},r.a.createElement(b.a,{icon:r.a.createElement(g.a,null),label:"Adicionar Tapioca"}))))},O=t(127),y=t(132),k=t(125),C=t(126),S=t(128),T=t(129),R=t(14);var F=function(){var e=Object(R.f)().id,a=Object(n.useState)(""),t=Object(E.a)(a,2),c=t[0],l=t[1],i=Object(n.useState)(""),s=Object(E.a)(i,2),m=s[0],v=s[1],x=Object(n.useState)(""),w=Object(E.a)(x,2),F=w[0],q=w[1],N=e?r.a.createElement("span",null,r.a.createElement(k.a,null)," Editar Tapioca"):r.a.createElement("span",null,r.a.createElement(g.a,null)," Adicionar Tapioca");return Object(n.useEffect)((function(){!function(){var a,t;p.a.async((function(n){for(;;)switch(n.prev=n.next){case 0:if(!e){n.next=7;break}return n.next=3,p.a.awrap(j.get("/tapiocas/"+e));case 3:a=n.sent,t=a.data,l(t.recheio),v(t.preco);case 7:case"end":return n.stop()}}))}()}),[]),F?r.a.createElement(R.a,{to:F}):r.a.createElement(r.a.Fragment,null,r.a.createElement(o.a,{width:"large"},r.a.createElement(o.a,{direction:"row"},r.a.createElement(o.a,{flex:"grow"},r.a.createElement(u.a,{level:"2",pad:"medium"},N)),r.a.createElement(o.a,{justify:"center"},r.a.createElement(b.a,{primary:!0,icon:r.a.createElement(C.a,null),label:"Excluir",color:"status-critical",onClick:function(){return p.a.async((function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,p.a.awrap(j.delete("/tapiocas/"+e));case 2:q("/");case 3:case"end":return a.stop()}}))}}))),r.a.createElement(O.a,{onSubmit:function(a){var t;return p.a.async((function(n){for(;;)switch(n.prev=n.next){case 0:if(a.preventDefault(),t={id:e,recheio:c,preco:m},!e){n.next=7;break}return n.next=5,p.a.awrap(j.put("/tapiocas/"+e,t));case 5:n.next=9;break;case 7:return n.next=9,p.a.awrap(j.post("/tapiocas",t));case 9:q("/");case 10:case"end":return n.stop()}}))}},r.a.createElement(o.a,{gap:"medium"},r.a.createElement(y.a,{label:"Recheio"},r.a.createElement(d.a,{required:!0,value:c,onChange:function(e){return l(e.target.value)}})),r.a.createElement(y.a,{label:"Pre\xe7o"},r.a.createElement(d.a,{required:!0,value:m,onChange:function(e){return v(e.target.value)}})),r.a.createElement(f.a,{background:"brand",pad:"medium",justify:"around"},r.a.createElement(h.c,{to:"/"},r.a.createElement(b.a,{icon:r.a.createElement(S.a,null),label:"Cancelar"})),r.a.createElement(b.a,{type:"submit",primary:!0,label:"Salvar",icon:r.a.createElement(T.a,null)}))))))},q=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(h.b,{basename:"/"},r.a.createElement(R.b,{exact:!0,path:"/"},r.a.createElement(w,null)),r.a.createElement(R.b,{exact:!0,path:"/tapiocas/criar"},r.a.createElement(F,null)),r.a.createElement(R.b,{exact:!0,path:"/tapiocas/editar/:id"},r.a.createElement(F,null))))};var N=function(){return r.a.createElement(i.a,{theme:{global:{font:{family:"Roboto",size:"18px",height:"20px"}}},full:!0},r.a.createElement(o.a,{tag:"header",align:"center",background:"brand"},r.a.createElement(u.a,null,"Tapiocaria React"),r.a.createElement(s.a,null,"CRUD de tapiocas feito com react")),r.a.createElement(o.a,{pad:"large"},r.a.createElement(q,null)))};l.a.render(r.a.createElement(h.a,null,r.a.createElement(N,null)),document.getElementById("root"))},79:function(e,a,t){e.exports=t(110)}},[[79,1,2]]]);
//# sourceMappingURL=main.7a7024e7.chunk.js.map