(function(e){function t(t){for(var c,l,u=t[0],a=t[1],i=t[2],s=0,f=[];s<u.length;s++)l=u[s],Object.prototype.hasOwnProperty.call(r,l)&&r[l]&&f.push(r[l][0]),r[l]=0;for(c in a)Object.prototype.hasOwnProperty.call(a,c)&&(e[c]=a[c]);d&&d(t);while(f.length)f.shift()();return o.push.apply(o,i||[]),n()}function n(){for(var e,t=0;t<o.length;t++){for(var n=o[t],c=!0,u=1;u<n.length;u++){var a=n[u];0!==r[a]&&(c=!1)}c&&(o.splice(t--,1),e=l(l.s=n[0]))}return e}var c={},r={app:0},o=[];function l(t){if(c[t])return c[t].exports;var n=c[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,l),n.l=!0,n.exports}l.m=e,l.c=c,l.d=function(e,t,n){l.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},l.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},l.t=function(e,t){if(1&t&&(e=l(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(l.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var c in e)l.d(n,c,function(t){return e[t]}.bind(null,c));return n},l.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return l.d(t,"a",t),t},l.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},l.p="";var u=window["webpackJsonp"]=window["webpackJsonp"]||[],a=u.push.bind(u);u.push=t,u=u.slice();for(var i=0;i<u.length;i++)t(u[i]);var d=a;o.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var c=n("830f"),r=(n("1d55"),n("5c40"));function o(e,t){var n=Object(r["u"])("TodoList");return Object(r["p"])(),Object(r["e"])(n)}var l={class:"todoapp"};function u(e,t){var n=Object(r["u"])("HeaderInput"),c=Object(r["u"])("MainList"),o=Object(r["u"])("FooterFilter");return Object(r["p"])(),Object(r["e"])("section",l,[Object(r["i"])(n,{modelValue:e.refInputModel,"onUpdate:modelValue":t[1]||(t[1]=function(t){return e.refInputModel=t}),add:e.useCrud.createData},null,8,["modelValue","add"]),Object(r["i"])(c,{list:e.computedListData(e.refCurrentSelected),toggleCheckbox:e.useCrud.updateData,"onClick-delete-button":e.useCrud.deleteData},null,8,["list","toggleCheckbox","onClick-delete-button"]),Object(r["i"])(o,{count:e.count,filters:e.useCrud.readData},null,8,["count","filters"])])}var a=n("d0af"),i=n("a1e9");n("4de4"),n("c740"),n("a434");function d(e){var t=Object(i["i"])(e),n=function(e){t.value.unshift(e)},c=function(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},c=n.key,r=n.value;if(!e&&0!=e){var o=t.value.findIndex((function(e){return e[c]==r}));return t.value.splice(o,1),o>-1}t.value.splice(e,1)},r=function(e){return e?t.value.filter((function(t,n){return e(t,n)})):t.value},o=function(e,n){var c=n.key,r=n.value;e<0||!e&&0!=e||(t.value[e][c]=r)};return[t,n,r,o,c]}var s={class:"header"},f=Object(r["i"])("h1",null,"todos",-1);function b(e,t){return Object(r["p"])(),Object(r["e"])("header",s,[f,Object(r["i"])("input",{value:e.modelValue,onInput:t[1]||(t[1]=function(t){return e.updataModel(t)}),class:"new-todo",onKeyup:t[2]||(t[2]=Object(c["b"])((function(t){return e.addTodo({time:new Date,text:t.target.value,checked:!1})}),["enter"])),placeholder:"按回车添加",autofocus:""},null,40,["value"])])}n("498a");var p={components:{},props:{modelValue:String,modelModifiers:{default:function(){return{}}},add:Function},setup:function(e,t){var n=t.emit,c=function(t){e.modelValue&&(e.add(t),r(""))},r=function(e){n("update:modelValue",e?e.target.value.trim():"")};return{addTodo:c,updataModel:r}}};p.render=b;var O=p,v=n("9ff4"),j={class:"main"},g=Object(r["i"])("input",{id:"toggle-all",class:"toggle-all",type:"checkbox"},null,-1),h=Object(r["i"])("label",{for:"toggle-all"},"Mark all as complete",-1),k={class:"todo-list"},m={class:"view"},C=Object(r["i"])("input",{class:"edit",value:"Create a TodoMVC template"},null,-1);function y(e,t){return Object(r["p"])(),Object(r["e"])("section",j,[g,h,Object(r["i"])("ul",k,[(Object(r["p"])(!0),Object(r["e"])(r["b"],null,Object(r["t"])(e.list,(function(t,n){return Object(r["p"])(),Object(r["e"])("li",{class:{completed:t.checked},key:t.time},[Object(r["i"])("div",m,[Object(r["i"])("input",{class:"toggle",type:"checkbox",checked:t.checked},null,8,["checked"]),Object(r["i"])("label",{onClick:function(c){return e.clickCheckbox(t,n)}},Object(v["G"])(t.text),9,["onClick"]),Object(r["i"])("button",{onClick:function(t){return e.clickDeleteButton(n)},class:"destroy"},null,8,["onClick"])]),C],2)})),128))])])}var S={components:{},props:{list:[Array,Object],toggleCheckbox:Function},setup:function(e,t){var n=t.emit,c=function(t,n){console.log(t),e.toggleCheckbox(n,{key:"checked",value:!t.checked})},o=function(e){n("click-delete-button",e)};return Object(r["z"])((function(){console.log(e.list)})),{clickCheckbox:c,clickDeleteButton:o}}};S.render=y;var x=S,D=Object(r["A"])("data-v-ba16d198");Object(r["s"])("data-v-ba16d198");var M={class:"footer"},w={class:"todo-count"},F=Object(r["h"])("累计 "),I={class:"filters"};Object(r["q"])();var L=D((function(e,t){return Object(r["p"])(),Object(r["e"])("footer",M,[Object(r["i"])("span",w,[F,Object(r["i"])("strong",null,Object(v["G"])(e.count||0),1)]),Object(r["i"])("ul",I,[Object(r["i"])("li",null,[Object(r["i"])("a",{class:{selected:"all"==e.refCurrentSelected},onClick:t[1]||(t[1]=function(t){return e.clickFilters("all")})},"全部",2)]),Object(r["i"])("li",null,[Object(r["i"])("a",{class:{selected:"active"==e.refCurrentSelected},onClick:t[2]||(t[2]=function(t){return e.clickFilters("active")})},"进行中",2)]),Object(r["i"])("li",null,[Object(r["i"])("a",{class:{selected:"completed"==e.refCurrentSelected},onClick:t[3]||(t[3]=function(t){return e.clickFilters("completed")})},"已完成",2)])])])})),V=(n("a9e3"),{components:{},props:{count:[Number,String]},setup:function(){var e=Object(r["m"])("shareStore"),t=e.refCurrentSelected,n=function(e){t.value=e};return{clickFilters:n,refCurrentSelected:t}}});n("b94c");V.render=L,V.__scopeId="data-v-ba16d198";var _=V,P={get:function(){return JSON.parse(localStorage.getItem("todoList"))||[]},save:function(e){localStorage.setItem("todoList",JSON.stringify(e))}},T={components:{FooterFilter:_,MainList:x,HeaderInput:O},props:{},setup:function(){var e=Object(i["i"])(""),t=Object(i["i"])("all"),n=d(P.get()||[]),c=Object(a["a"])(n,5),o=c[0],l=c[1],u=c[2],s=c[3],f=c[4];Object(r["z"])((function(){P.save(o.value)}));var b=Object(r["d"])((function(){return o.value.length}));Object(r["r"])("shareStore",{refCurrentSelected:t});var p=function(e){return"all"===e?u():"active"===e?(console.log(u((function(e){return console.log(e.checked),!e.checked}))),u((function(e){return console.log(e.checked),!e.checked}))):u((function(e){return e.checked}))};return Object(r["z"])((function(){console.log(e.value),console.log(o)})),{refInputModel:e,computedListData:p,count:b,refCurrentSelected:t,useCrud:{listData:o,createData:l,readData:u,updateData:s,deleteData:f}}}};T.render=u;var J=T,z={name:"App",components:{TodoList:J}};n("64be");z.render=o;var A=z;Object(c["a"])(A).mount("#app")},"64be":function(e,t,n){"use strict";n("98e6")},"98e6":function(e,t,n){},b94c:function(e,t,n){"use strict";n("fcf4")},fcf4:function(e,t,n){}});
//# sourceMappingURL=app.5a96e019.js.map