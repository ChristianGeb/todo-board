(this["webpackJsonptodo-board"]=this["webpackJsonptodo-board"]||[]).push([[0],{73:function(e,t,n){},75:function(e,t,n){"use strict";n.r(t);var a,c=n(0),o=n.n(c),d=n(12),r=n.n(d),s=n(16),i=n(40),l=n(90),u=n(41),b=n.n(u),j=n(4),x=function(e){var t=e.text,n=e.todoId,a=e.todos,c=e.setTodos;return Object(j.jsx)("div",{className:"todo",children:Object(j.jsxs)("li",{className:"todo-points",children:[Object(j.jsx)("p",{className:"todo-points-text",children:t}),Object(j.jsx)(l.a,{"aria-label":"delete",onClick:function(){c(a.filter((function(e){return e.id!==n})))},children:Object(j.jsx)(b.a,{className:"delete-button",color:"primary"})})]})})},p=n(42),O=n(91),f=n(43),h=function(e){var t=e.title,n=e.cardId,o=e.todos,d=e.setTodos,r=(e.cards,e.setCards,Object(c.useState)(t)),l=Object(s.a)(r,2),u=l[0],b=l[1],h=Object(f.a)(p.a)(a||(a=Object(i.a)(['\n  button {\n    border-radius: 5px;\n  }\n\n  button[editext="edit-button"] {\n    color: #2f4d6b;\n    font-size: 18px;\n    width: 10px;\n    background: #6293C3;\n    border: #6293C3;\n    margin-right: 8px;\n  }\n\n  button[editext="save-button"] {\n    width: 50px;\n    &:hover {\n      background: greenyellow;\n    }\n  }\n\n  button[editext="cancel-button"] {\n    &:hover {\n      background: crimson;\n      color: #fff;\n    }\n  }\n\n  input, textarea {\n    background: white;\n    color: black;\n    font-weight: bold;\n    border-radius: 5px;\n  }\n\n  div[editext="edit-container"] {\n    background: #6293C3;\n    width: 250px;\n    padding: 15px;\n    border-radius: 5px;\n    color: #fff;\n  }\n\n  div[editext="view-container"] {\n    background: #6293C3;\n    padding: 10px;\n    display: flex;\n    justify-content: center;\n    border-radius: 5px;\n    color: #fff;\n}\n'])));return Object(j.jsxs)("div",{className:"todo-card",children:[Object(j.jsx)(O.a,{variant:"h5",align:"center",children:Object(j.jsx)(h,{type:"text",value:u,onSave:function(e){console.log("Edited Value -> ",e),b(e)}})}),Object(j.jsx)("ul",{children:o.filter((function(e){return e.selectCard===t})).map((function(e){return Object(j.jsx)(x,{todos:o,setTodos:d,text:e.text,todoId:e.id,cardId:n})}))})]})},v=n(32),m=n(93),g=n(92),C=function(e){var t=e.cardName,n=e.setCardName,a=e.cards,c=e.setCards;return Object(j.jsxs)("div",{children:[Object(j.jsx)("input",{onChange:function(e){n(e.target.value)},value:t,type:"text",placeholder:"Karte"}),Object(j.jsx)(g.a,{variant:"contained",color:"primary",className:"add-button",onClick:function(e){e.preventDefault(),c([].concat(Object(v.a)(a),[{value:t,label:t,name:t,id:Object(m.a)()}])),n("")},type:"submit",children:"Hinzuf\xfcgen"})]})},N=n(46),k=function(e){var t=e.inputTodo,n=e.setInputTodo,a=e.selectCard,c=e.setSelectCard,o=e.todos,d=e.setTodos,r=e.cards;return Object(j.jsxs)("div",{className:"create-todo",children:[Object(j.jsx)("input",{onChange:function(e){n(e.target.value)},value:t,type:"text",placeholder:"Aufgabe"}),Object(j.jsx)("div",{className:"select",children:Object(j.jsx)(N.a,{onChange:function(e){c(e.value)},placeholder:a,options:r})}),Object(j.jsx)(g.a,{variant:"contained",color:"secondary",className:"add-button",onClick:function(e){e.preventDefault(),d([].concat(Object(v.a)(o),[{text:t,id:Object(m.a)(),selectCard:a}])),n("")},type:"submit",children:"Hinzuf\xfcgen"})]})},y=(n(73),function(){var e=Object(c.useState)(""),t=Object(s.a)(e,2),n=t[0],a=t[1],o=Object(c.useState)([]),d=Object(s.a)(o,2),r=d[0],i=d[1],l=Object(c.useState)(""),u=Object(s.a)(l,2),b=u[0],x=u[1],p=Object(c.useState)([]),O=Object(s.a)(p,2),f=O[0],v=O[1],m=Object(c.useState)(""),g=Object(s.a)(m,2),N=g[0],y=g[1];return Object(j.jsxs)("div",{children:[Object(j.jsxs)("div",{className:"create-row",children:[Object(j.jsx)(C,{className:"create-card",cardName:b,setCardName:x,cards:f,setCards:v}),Object(j.jsx)(k,{inputTodo:n,setInputTodo:a,todos:r,setTodos:i,cards:f,selectCard:N,setSelectCard:y})]}),Object(j.jsx)("div",{className:"cards",children:f.map((function(e,t){return Object(j.jsx)(h,{title:e.name,cardId:e.id,inputTodo:n,setInputTodo:a,todos:r,setTodos:i,cards:f,setCards:v},t)}))})]})});r.a.render(Object(j.jsx)(o.a.StrictMode,{children:Object(j.jsx)(y,{})}),document.getElementById("root"))}},[[75,1,2]]]);
//# sourceMappingURL=main.362f7899.chunk.js.map