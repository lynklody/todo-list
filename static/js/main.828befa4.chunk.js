(this["webpackJsonptodo-list-app-react"]=this["webpackJsonptodo-list-app-react"]||[]).push([[0],{117:function(e,t,n){e.exports=n(146)},146:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(9),c=n.n(o),i=n(29),l=n(26),u=n(104),s=n(32),d={isFetching:!1,error:null,data:[]},m=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"ADD_TODO":return[].concat(Object(u.a)(e),[{id:t.id,text:t.text,completed:!1}]);case"TOGGLE_TODO":return e.map((function(e){return e.id===t.id?Object(s.a)({},e,{completed:!e.completed}):e}));default:return e}},p=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:d,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"FETCH_TODOS_REQUEST":return Object(s.a)({},e,{isFetching:!0});case"FETCH_TODOS_SUCCESS":return Object(s.a)({},e,{isFetching:!1,data:t.data});case"FETCH_TODOS_FAILURE":return Object(s.a)({},e,{isFetching:!1,error:t.error});default:return Object(s.a)({},e,{data:m(e.data,t)})}},f=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"all",t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_FILTER":return t.filter;default:return e}},E=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_TODO_TEXT":return t.text;default:return e}},h=Object(i.c)({todos:p,text:E,filter:f}),O=n(96),g=0,y=n(22),T=n(23),b=n(27),v=n(28),j=n(172),C=n(184),x=n(70),_=n(175),S=n(183),D=n(182),k=n(100),w=n.n(k),F=function(e){Object(v.a)(n,e);var t=Object(b.a)(n);function n(){var e;Object(y.a)(this,n);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).handleChange=function(t){e.props.setTodoText(t.target.value)},e.handleClick=function(){""!==e.props.text?(e.props.addTodo(e.props.text),e.props.setTodoText("")):console.log("Tell user the textfield is empty!")},e}return Object(T.a)(n,[{key:"render",value:function(){return r.a.createElement(j.a,null,r.a.createElement(C.a,{marginTop:5,justifyContent:"center"},r.a.createElement(x.a,{component:"span",color:"primary"},r.a.createElement(_.a,{container:!0,direction:"row",justify:"center",alignItems:"center",spacing:3},r.a.createElement(_.a,{item:!0,xs:8},r.a.createElement(D.a,{id:"outlined-textarea",label:"ENTER NEXT ITEM",placeholder:'Press "Enter" for multi-line input',multiline:!0,size:"medium",variant:"outlined",autoFocus:!0,fullWidth:!0,rows:2,margin:"normal",value:this.props.text,onChange:this.handleChange})),r.a.createElement(_.a,{item:!0,xs:2},r.a.createElement(S.a,{variant:"outlined",onClick:this.handleClick,startIcon:r.a.createElement(w.a,null),color:"primary"},"Add"))))))}}]),n}(a.Component),I=function(e){return e.text},A=function(e){return e.filter},R=function(e){var t=e.todos.data,n=e.filter;switch(n){case"all":return t;case"completed":return t.filter((function(e){return e.completed}));case"active":return t.filter((function(e){return!e.completed}));default:return new Error("Unknown filter: "+n)}},L=Object(l.b)((function(e){return{text:I(e)}}),(function(e){return{setTodoText:function(t){return e(function(e){return{type:"SET_TODO_TEXT",text:e}}(t))},addTodo:function(t){return e(function(e){return{type:"ADD_TODO",id:g++,text:e}}(t))}}}))(F),U=n(176),H=function(e){Object(v.a)(n,e);var t=Object(b.a)(n);function n(){return Object(y.a)(this,n),t.apply(this,arguments)}return Object(T.a)(n,[{key:"render",value:function(){var e=this.props,t=e.completed,n=e.text,a=e.onClick;return r.a.createElement(j.a,null,r.a.createElement(U.a,null,r.a.createElement(_.a,null,r.a.createElement("li",{onClick:a,style:{textDecoration:t?"line-through":"none"}},n))))}}]),n}(a.Component),N=function(e){Object(v.a)(n,e);var t=Object(b.a)(n);function n(){return Object(y.a)(this,n),t.apply(this,arguments)}return Object(T.a)(n,[{key:"componentDidMount",value:function(){this.props.fetchTodos()}},{key:"render",value:function(){var e=this.props,t=e.todos,n=e.toggleTodo;return r.a.createElement(j.a,null,r.a.createElement(U.a,null,r.a.createElement("ul",null,t.map((function(e){return r.a.createElement(H,Object.assign({key:e.id},e,{onClick:function(){n(e.id)}}))})))))}}]),n}(a.Component),W=Object(l.b)((function(e){return{todos:R(e)}}),(function(e){return{toggleTodo:function(t){return e(function(e){return{type:"TOGGLE_TODO",id:e}}(t))},fetchTodos:function(){return e((function(e){return e({type:"FETCH_TODOS_REQUEST"}),fetch(".\\mock\\initial_todos.json").then((function(t){t.json().then((function(t){e(function(e){return{type:"FETCH_TODOS_SUCCESS",data:e}}(t))}))}),(function(t){e(function(e){return{type:"FETCH_TODOS_FAILURE",error:e}}(t)),console.log("Tell Wendy an error occurred: \n"+t)}))}))}}}))(N),X=function(e){Object(v.a)(n,e);var t=Object(b.a)(n);function n(){return Object(y.a)(this,n),t.apply(this,arguments)}return Object(T.a)(n,[{key:"render",value:function(){var e=this.props,t=e.filter,n=e.setFilter;return r.a.createElement(j.a,null,r.a.createElement(C.a,{marginBottom:10,alignItems:"center",justifyContent:"center"},r.a.createElement(_.a,{container:!0,direction:"row",justify:"center",alignItems:"center"},r.a.createElement(_.a,{item:!0},r.a.createElement(S.a,{disabled:"all"===t,onClick:function(){return n("all")},color:"primary",variant:"outlined"},"All")),r.a.createElement(_.a,{item:!0},r.a.createElement(S.a,{disabled:"active"===t,onClick:function(){return n("active")},color:"primary",variant:"outlined"},"Active")),r.a.createElement(_.a,{item:!0},r.a.createElement(S.a,{disabled:"completed"===t,onClick:function(){return n("completed")},color:"primary",variant:"outlined"},"Completed")))))}}]),n}(a.Component),M=Object(l.b)((function(e){return{filter:A(e)}}),(function(e){return{setFilter:function(t){return e(function(e){return{type:"SET_FILTER",filter:e}}(t))}}}))(X),z=n(178),G=n(179),B=n(102),J=n.n(B),P=n(76),Q=n.n(P),V=n(68),q=n(180),K=n(105),Y=n(106),Z=n(107),$=Object(z.a)((function(e){return{card:{marginTop:50,marginBottom:30,borderRadius:(0,e.spacing)(.5),transition:"0.3s",width:"90%",overflow:"initial"},title:{fontSize:25,fontWeight:800,textAlign:"center",color:V.a.A200},content:{textAlign:"center",overflowX:"auto"},button:{textAligh:"center"}}})),ee=function(){var e=$(),t=Object(Y.a)(),n=Object(K.a)();Object(Z.a)({inactive:!0});return r.a.createElement(j.a,null," ",r.a.createElement(C.a,{display:"flex",marginTop:5,alignItems:"center",justifyContent:"center"},r.a.createElement(G.a,{className:e.card},r.a.createElement(x.a,{component:"span"},r.a.createElement(x.a,{component:"span",color:"primary"},r.a.createElement(q.a,{className:t.root,classes:n,title:"Change me",subheader:"My To-Do List App"})),r.a.createElement(C.a,{display:"flex",alignItems:"center",justifyContent:"center"},r.a.createElement(L,null)),r.a.createElement(C.a,{display:"flex",alignItems:"center",justifyContent:"center"},r.a.createElement(x.a,{component:"span"},r.a.createElement(U.a,null,r.a.createElement(W,null)))),r.a.createElement(C.a,{display:"flex",alignItems:"center",justifyContent:"center"},r.a.createElement(M,null)),r.a.createElement(C.a,{display:"flex",alignItems:"center",justifyContent:"right"},r.a.createElement(U.a,null,"Made by Wendy with",r.a.createElement(J.a,{style:{color:Q.a.A400}})))))))},te=function(e){var t=e.getState;e.dispatch;return function(e){return function(n){console.group(n.type),console.log("dispatching: ",n);var a=e(n);return console.log("next state: ",t()),console.groupEnd(),a}}},ne=function(e){return function(){var t=e.apply(void 0,arguments),n=function(e){console.group(e.type),console.log("dispatching: ",e);var n=t.dispatch(e);return console.log("next state: ",t.getState()),n};return Object(s.a)({},t,{dispatch:n})}},ae=n(177),re=n(181),oe=n(103),ce=n(65),ie=n(66),le=n(67),ue=n(69),se=n(64),de=Object(oe.a)({typography:{fontFamily:"Arial",fontSize:12,fontWeight:800,button:{fontSize:14,fontWeight:600}},palette:{primary:{main:V.a[800]},secondary:ce.a,error:{main:ie.a[300]},warning:le.a,success:ue.a,background:{default:se.a[50]}}}),me=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||i.d,pe=Object(i.e)(h,me(Object(i.a)(O.a,te),ne));c.a.render(r.a.createElement(l.a,{store:pe},r.a.createElement(ae.a,{theme:de},r.a.createElement(re.a,null),r.a.createElement(ee,null))),document.getElementById("root"))}},[[117,1,2]]]);
//# sourceMappingURL=main.828befa4.chunk.js.map