(this.webpackJsonpphonebook=this.webpackJsonpphonebook||[]).push([[0],{15:function(e,n,t){e.exports=t(37)},37:function(e,n,t){"use strict";t.r(n);var a=t(0),o=t.n(a),r=t(14),c=t.n(r),u=(t(5),t(3)),l=t(2),i=t.n(l),m="/api/persons",s=function(){return i.a.get(m).then((function(e){return e.data}))},d=function(e){return i.a.post(m,e).then((function(e){return e.data}))},f=function(e){return i.a.delete("".concat(m,"/").concat(e))},h=function(e,n){return i.a.put("".concat(m,"/").concat(e),n).then((function(e){return e.data}))},b=function(e){var n=e.searchName,t=e.deletePerson,a=e.persons,r=function(e){return e.map((function(e){return o.a.createElement("div",{key:e.name},e.name," ",e.number,o.a.createElement("button",{onClick:function(){return t(e)}}," delete "))}))};return r(""===n?a:a.filter((function(e){return e.name.toLocaleLowerCase().includes(n.toLocaleLowerCase())})))},v=function(e){var n=e.value,t=e.handler;return o.a.createElement(o.a.Fragment,null,"filter shown with",o.a.createElement("input",{value:n,onChange:t}))},g=function(e){var n=e.addPerson,t=e.newName,a=e.handleNameChange,r=e.newNumber,c=e.handleNumberChange;return o.a.createElement("form",{onSubmit:n},o.a.createElement("div",null,"name: ",o.a.createElement("input",{value:t,onChange:a}),o.a.createElement("br",null),"number: ",o.a.createElement("input",{value:r,onChange:c})),o.a.createElement("div",null,o.a.createElement("button",{type:"submit"},"add")))},p=function(e){var n=e.message;return null===n?null:o.a.createElement("div",{className:"newPerson"},n)},E=function(e){var n=e.message;return null===n?null:o.a.createElement("div",{style:{color:"red",background:"lightgrey",fontSize:20,borderStyle:"solid",borderRadius:5,padding:10,marginBottom:10}},n)},w=function(){var e=Object(a.useState)([]),n=Object(u.a)(e,2),t=n[0],r=n[1],c=Object(a.useState)(""),l=Object(u.a)(c,2),i=l[0],m=l[1],w=Object(a.useState)(""),j=Object(u.a)(w,2),N=j[0],O=j[1],k=Object(a.useState)(""),C=Object(u.a)(k,2),y=C[0],S=C[1],P=Object(a.useState)(null),T=Object(u.a)(P,2),L=T[0],B=T[1],D=Object(a.useState)(null),A=Object(u.a)(D,2),I=A[0],J=A[1];Object(a.useEffect)((function(){s().then((function(e){r(e)}))}),[]);var W=function(e){if(window.confirm("".concat(i," is already added to phonebook, \n      replace the old number with a new one?"))){var n=t.find((function(e){return e.name===i})).id;h(n,e).then((function(e){r(t.map((function(t){return t.id!==n?t:e}))),B("Number of ".concat(e.name," is changed")),setTimeout((function(){B(null)}),3e3)})).catch((function(n){J("Information of ".concat(e.name," has already been removed from server")),setTimeout((function(){J(null)}),3e3)}))}},x=function(e){d(e).then((function(e){r(t.concat(e)),B("Added ".concat(e.name)),setTimeout((function(){B(null)}),3e3)})).catch((function(n){J("Adding ".concat(e.name," failed")),setTimeout((function(){J(null)}),3e3)}))};return o.a.createElement("div",null,o.a.createElement("h2",null,"Phonebook"),o.a.createElement(E,{message:I}),o.a.createElement(p,{message:L}),o.a.createElement(v,{value:y,handler:function(e){S(e.target.value)}}),o.a.createElement("h3",null,"add a new"),o.a.createElement(g,{addPerson:function(e){e.preventDefault();var n={name:i,number:N};t.some((function(e){return i===e.name}))?W(n):x(n),m(""),O("")},newName:i,handleNameChange:function(e){m(e.target.value)},newNumber:N,handleNumberChange:function(e){O(e.target.value)}}),o.a.createElement("h3",null,"Numbers"),o.a.createElement(b,{searchName:y,deletePerson:function(e){window.confirm("Delete ".concat(e.name,"?"))?f(e.id).then((function(){r(t.filter((function(n){return n.name!==e.name})))})).catch((function(n){J("Deleting ".concat(e.name," failed")),setTimeout((function(){J(null)}),3e3)})):console.log("not deleted due to cancelation")},persons:t}))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.get("/api/persons").then((function(e){var n=e.data;c.a.render(o.a.createElement(w,{persons:n}),document.getElementById("root"))})),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},5:function(e,n,t){}},[[15,1,2]]]);
//# sourceMappingURL=main.4d4cb35e.chunk.js.map