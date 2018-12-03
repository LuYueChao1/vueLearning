!function(t){function e(e){for(var n,l,s=e[0],c=e[1],a=e[2],d=0,f=[];d<s.length;d++)l=s[d],r[l]&&f.push(r[l][0]),r[l]=0;for(n in c)Object.prototype.hasOwnProperty.call(c,n)&&(t[n]=c[n]);for(u&&u(e);f.length;)f.shift()();return i.push.apply(i,a||[]),o()}function o(){for(var t,e=0;e<i.length;e++){for(var o=i[e],n=!0,s=1;s<o.length;s++){var c=o[s];0!==r[c]&&(n=!1)}n&&(i.splice(e--,1),t=l(l.s=o[0]))}return t}var n={},r={0:0},i=[];function l(e){if(n[e])return n[e].exports;var o=n[e]={i:e,l:!1,exports:{}};return t[e].call(o.exports,o,o.exports,l),o.l=!0,o.exports}l.m=t,l.c=n,l.d=function(t,e,o){l.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:o})},l.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},l.t=function(t,e){if(1&e&&(t=l(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var o=Object.create(null);if(l.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)l.d(o,n,function(e){return t[e]}.bind(null,n));return o},l.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return l.d(e,"a",e),e},l.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},l.p="";var s=window.webpackJsonp=window.webpackJsonp||[],c=s.push.bind(s);s.push=e,s=s.slice();for(var a=0;a<s.length;a++)e(s[a]);var u=c;i.push([18,1]),o()}([,function(t,e,o){},function(t,e,o){},function(t,e,o){},function(t,e,o){},function(t,e,o){},,,,,,function(t,e,o){"use strict";var n=o(1);o.n(n).a},function(t,e,o){},function(t,e,o){"use strict";var n=o(2);o.n(n).a},function(t,e,o){"use strict";var n=o(3);o.n(n).a},function(t,e,o){"use strict";var n=o(4);o.n(n).a},function(t,e,o){"use strict";var n=o(5);o.n(n).a},function(t,e,o){},function(t,e,o){"use strict";o.r(e);var n=o(7),r=(o(11),o(0)),i=Object(r.a)({},function(){this.$createElement;this._self._c;return this._m(0)},[function(){var t=this.$createElement,e=this._self._c||t;return e("header",{staticClass:"main-header"},[e("h1",[this._v("JTodo")])])}],!1,null,"0875ba7c",null);i.options.__file="header.vue";var l=i.exports,s=(o(12),{props:{todo:{type:Object,required:!0}},methods:{deleteTodo:function(){this.$emit("del",this.todo.id)}}}),c=(o(13),Object(r.a)(s,function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{class:["todo-item",t.todo.completed?"completed":""]},[o("input",{directives:[{name:"model",rawName:"v-model",value:t.todo.completed,expression:"todo.completed"}],staticClass:"toggle",attrs:{type:"checkbox"},domProps:{checked:Array.isArray(t.todo.completed)?t._i(t.todo.completed,null)>-1:t.todo.completed},on:{change:function(e){var o=t.todo.completed,n=e.target,r=!!n.checked;if(Array.isArray(o)){var i=t._i(o,null);n.checked?i<0&&t.$set(t.todo,"completed",o.concat([null])):i>-1&&t.$set(t.todo,"completed",o.slice(0,i).concat(o.slice(i+1)))}else t.$set(t.todo,"completed",r)}}}),t._v(" "),o("label",[t._v(t._s(t.todo.content))]),t._v(" "),o("button",{staticClass:"destroy",on:{click:t.deleteTodo}},[t._v("X")])])},[],!1,null,"366f91ba",null));c.options.__file="item.vue";var a=c.exports,u={props:{filter:{type:String,required:!0},todos:{type:Array,required:!0}},data:function(){return{states:["all","active","completed"]}},computed:{unfinishedLength:function(){return this.todos.filter(function(t){return!t.completed}).length}},methods:{toggleFilter:function(t){this.$emit("toggle",t)},clearAllCompleted:function(){this.$emit("clearAllCompleted")}}},d=(o(14),Object(r.a)(u,function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"helper"},[o("span",{staticClass:"left"},[t._v(t._s(t.unfinishedLength)+" item left")]),t._v(" "),o("span",{staticClass:"tabs"},[t._l(t.states,function(e){return o("span",{key:e,class:[e,t.filter===e?"actived":""],on:{click:function(o){t.toggleFilter(e)}}},[t._v("\n        "+t._s(e)+"\n        ")])}),t._v(" "),o("span",{staticClass:"clear",on:{click:t.clearAllCompleted}},[t._v("Clear Completed")])],2)])},[],!1,null,"12956418",null));d.options.__file="tabs.vue";var f=0,p={data:function(){return{todos:[],filter:"all"}},components:{Item:a,Tabs:d.exports},computed:{filteredTodos:function(){if("all"===this.filter)return this.todos;var t="completed"===this.filter;return this.todos.filter(function(e){return t===e.completed})}},methods:{addTodo:function(t){this.todos.unshift({id:f++,content:t.target.value.trim(),completed:!1}),t.target.value=""},deleteTodo:function(t){this.todos.splice(this.todos.findIndex(function(e){return e.id===t}),1)},toggleFilter:function(t){this.filter=t,console.log(this.filter)},clearallCompleted:function(){this.todos=this.todos.filter(function(t){return!t.completed})}}},v=(o(15),Object(r.a)(p,function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("section",{staticClass:"real-app"},[o("input",{staticClass:"add-input",attrs:{type:"text",autofocus:"autofocus",placeholder:" 接下来要做什么"},on:{keyup:function(e){return"button"in e||!t._k(e.keyCode,"enter",13,e.key,"Enter")?t.addTodo(e):null}}}),t._v(" "),t._l(t.filteredTodos,function(e){return o("Item",{key:e.id,attrs:{todo:e},on:{del:t.deleteTodo}})}),t._v(" "),o("Tabs",{attrs:{filter:t.filter,todos:t.todos},on:{toggle:t.toggleFilter,clearAllCompleted:t.clearallCompleted}})],2)},[],!1,null,"52863375",null));v.options.__file="todo.vue";var h={components:{Header:l,Footer:{data:function(){return{author:"JLuchao"}},render:function(){var t=arguments[0];return t("div",{attrs:{id:"footer"}},[t("span",["Written by ",this.author])])}},Todo:v.exports}},m=(o(16),Object(r.a)(h,function(){var t=this.$createElement,e=this._self._c||t;return e("div",{attrs:{id:"app"}},[e("div",{attrs:{id:"cover"}}),this._v(" "),e("Header"),this._v(" "),e("Todo"),this._v(" "),e("Footer")],1)},[],!1,null,"1b19391a",null));m.options.__file="app.vue";var _=m.exports,b=(o(17),document.createElement("div"));document.body.appendChild(b),new n.default({render:function(t){return t(_)}}).$mount(b)}]);