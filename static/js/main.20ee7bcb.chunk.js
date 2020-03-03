(this.webpackJsonptodolist=this.webpackJsonptodolist||[]).push([[0],{129:function(e,t,a){},130:function(e,t,a){},131:function(e,t,a){},132:function(e,t,a){"use strict";a.r(t);var n=a(2),s=a.n(n),c=a(25),i=a.n(c),r=(a(62),a(6)),o=a(7),l=a(9),u=a(8),d=a(10),p=(a(63),a(64),function(e){function t(){return Object(r.a)(this,t),Object(l.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return s.a.createElement("header",{className:"header"},s.a.createElement("h1",{className:"header__title"},"ToDo list:"))}}]),t}(n.Component)),m=a(47),h=(a(65),a(15)),f=a.n(h),y=a(23),_=a(26),k=a(54),b=a.n(k),v=(a(67),a(68),function(e){function t(e){var a;return Object(r.a)(this,t),(a=Object(l.a)(this,Object(u.a)(t).call(this,e))).handleChange=function(){var e=Object(y.a)(f.a.mark((function e(t){return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,a.setState({startDate:t});case 2:a.props.updateDate(a.state.startDate);case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),a.inputFocused=function(e){document.querySelector(".".concat(e,"__label")).classList.add("".concat(e,"__label--active")),document.querySelector("#".concat(e,"Tooltip")).classList.remove("tooltip--visible")},a.inputUnfocused=function(e){document.querySelector(".".concat(e,"__input")).value||document.querySelector(".".concat(e,"__label")).classList.remove("".concat(e,"__label--active"))},a.moveLabel=function(){document.querySelector(".task__input").value||document.querySelector(".task__label").classList.remove("task__label--active"),document.querySelector(".city__input").value||document.querySelector(".city__label").classList.remove("city__label--active"),document.querySelector(".deadline__input").value||document.querySelector(".deadline__label").classList.remove("deadline__label--active")},a.state={startDate:""},a.handleChange=a.handleChange.bind(Object(_.a)(a)),a}return Object(d.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){var e=this;return s.a.createElement("nav",{className:"navigationBar"},s.a.createElement("section",{className:"task"},s.a.createElement("div",{className:"tooltip",id:"taskTooltip"},"It cannot be empty!"),s.a.createElement("label",{htmlFor:"taskInput",className:"task__label"},"Type your task here..."),s.a.createElement("input",{type:"text",name:"taskInput",className:"task__input",id:"draftInput",onChange:this.props.updateDraft,onFocus:function(){e.inputFocused("task")},onBlur:function(){e.inputUnfocused("task")},value:this.props.state.draft})),s.a.createElement("section",{className:"city"},s.a.createElement("div",{className:"tooltip",id:"cityTooltip"},"It cannot be empty!"),s.a.createElement("label",{htmlFor:"cityInput",className:"city__label"},"Type location here..."),s.a.createElement("input",{type:"text",name:"cityInput",className:"city__input",id:"cityInput",onChange:this.props.updateCity,onFocus:function(){e.inputFocused("city")},onBlur:function(){e.inputUnfocused("city")},value:this.props.state.city})),s.a.createElement("section",{className:"deadline"},s.a.createElement("div",{className:"tooltip",id:"deadlineTooltip"},"It cannot be empty!"),s.a.createElement("label",{htmlFor:"deadlineInput",className:"deadline__label"},"Set deadline..."),s.a.createElement(b.a,{selected:this.props.state.deadline,onChange:this.handleChange,id:"deadlineInput",name:"deadlineInput",className:"deadline__input",onFocus:function(){e.inputFocused("deadline")},onBlur:function(){e.inputUnfocused("deadline")},value:this.state.startDate,dateFormat:"dd/MM/yyyy"})),s.a.createElement("button",{className:"navigationBar__button",onClick:Object(y.a)(f.a.mark((function t(){return f.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.props.updateTaskList();case 2:e.moveLabel();case 3:case"end":return t.stop()}}),t)})))},"Add task"))}}]),t}(n.Component)),E=(a(129),a(130),function(e){function t(){var e,a;Object(r.a)(this,t);for(var n=arguments.length,s=new Array(n),c=0;c<n;c++)s[c]=arguments[c];return(a=Object(l.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(s)))).state={temp:"",weather:"",hidden:!0},a.getWeatherFromApi=Object(y.a)(f.a.mark((function e(){var t,n;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("https://api.openweathermap.org/data/2.5/weather?appid=0c79a3e8f66a976ec6832ddc76907c72&q=".concat(a.props.task.city,"&units=metric&lang=en"));case 3:if(200!==(t=e.sent).status){e.next=11;break}return e.next=7,t.json();case 7:n=e.sent,a.setState({temp:"Temperature: "+Math.round(n.main.temp)+"\xb0C",weather:n.weather[0].description}),e.next=12;break;case 11:a.setState({temp:"City not found",weather:""});case 12:e.next=17;break;case 14:e.prev=14,e.t0=e.catch(0),console.error(e.t0);case 17:case"end":return e.stop()}}),e,null,[[0,14]])}))),a}return Object(d.a)(t,e),Object(o.a)(t,[{key:"componentDidMount",value:function(){var e=this;this.getWeatherFromApi().then((function(){e.setState({hidden:!1})}))}},{key:"render",value:function(){var e=this;return s.a.createElement("section",{className:"todoItem"},s.a.createElement("span",{className:"todoItem__importantSign",onClick:function(){e.props.changeImportantState(e.props.task.id)}},s.a.createElement("span",{className:this.props.task.important?"hidden":""},s.a.createElement("i",{className:"far fa-star"})),s.a.createElement("span",{className:this.props.task.important?"":"hidden"},s.a.createElement("i",{className:"fas fa-star"}))),s.a.createElement("span",{className:this.props.task.done?"todoItem__name todoItem__name--done":"todoItem__name",onClick:function(){e.props.changeState(e.props.task.id)}},s.a.createElement("span",null,this.props.task.name)),s.a.createElement("span",{className:"todoItem__deadline"},this.props.task.deadline.toLocaleDateString("pl-PL")),s.a.createElement("span",{className:"todoItem__city"},this.props.task.city),s.a.createElement("section",{className:this.state.hidden?"weather":"weather weather--hidden"},s.a.createElement("div",{className:"lds-ellipsis"},s.a.createElement("div",null),s.a.createElement("div",null),s.a.createElement("div",null),s.a.createElement("div",null))),s.a.createElement("section",{className:this.state.hidden?"weather weather--hidden":"weather"},s.a.createElement("span",{className:"weather__temp"},this.state.temp),s.a.createElement("span",{className:"weather__info"},this.state.weather)),s.a.createElement("span",{onClick:function(){e.props.deleteTask(e.props.task.id)},className:"todoItem__delete"},s.a.createElement("i",{className:"fas fa-minus-circle"})))}}]),t}(n.Component)),S=function(e){function t(){return Object(r.a)(this,t),Object(l.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){var e=this;return s.a.createElement("section",{className:"todoList"},this.props.state.tasks.map((function(t){return s.a.createElement(E,{task:t,deleteTask:e.props.deleteTask,changeState:e.props.changeState,changeImportantState:e.props.changeImportantState,key:t.id})})))}}]),t}(n.Component),j=function(e){function t(){var e,a;Object(r.a)(this,t);for(var n=arguments.length,s=new Array(n),c=0;c<n;c++)s[c]=arguments[c];return(a=Object(l.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(s)))).state={tasks:a.props.tasks,draft:"",city:"",deadline:"",important:""},a.updateDraft=function(e){a.setState({draft:e.target.value})},a.updateCity=function(e){a.setState({city:e.target.value})},a.updateDate=function(e){a.setState({deadline:e})},a.updateTaskList=function(){if(a.state.draft&&a.state.city&&a.state.deadline){var e=a.state.tasks,t=e.map((function(e){return e.id}));document.querySelector("#draftInput").classList.remove("task__input--empty"),document.querySelector("#cityInput").classList.remove("city__input--empty"),e.push({name:a.state.draft,city:a.state.city,id:Math.max.apply(Math,Object(m.a)(t))<0?0:Math.max.apply(Math,Object(m.a)(t))+1,deadline:a.state.deadline,done:!1,important:!1}),a.setState({tasks:e,draft:"",city:"",deadline:""})}else a.state.draft||(document.querySelector("#draftInput").classList.add("task__input--empty"),document.querySelector("#taskTooltip").classList.add("tooltip--visible")),a.state.city||(document.querySelector("#cityInput").classList.add("city__input--empty"),document.querySelector("#cityTooltip").classList.add("tooltip--visible")),a.state.deadline||(document.querySelector("#deadlineInput").classList.add("deadline__input--empty"),document.querySelector("#deadlineTooltip").classList.add("tooltip--visible"))},a.deleteTask=function(e){var t=a.state.tasks.map((function(e){return e.id})),n=a.state.tasks;n.splice(t.findIndex((function(t){return t===e})),1),a.setState({tasks:n})},a.changeState=function(e){var t=a.state.tasks.map((function(e){return e.id})).findIndex((function(t){return t===e})),n=a.state.tasks;n[t]={name:n[t].name,id:n[t].id,city:n[t].city,deadline:n[t].deadline,done:!n[t].done,important:n[t].important},a.setState({tasks:n})},a.changeImportantState=function(e){var t=a.state.tasks.map((function(e){return e.id})).findIndex((function(t){return t===e})),n=a.state.tasks;n[t]={name:n[t].name,id:n[t].id,city:n[t].city,deadline:n[t].deadline,done:n[t].done,important:!n[t].important},a.setState({tasks:n})},a}return Object(d.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return s.a.createElement("main",{className:"main"},s.a.createElement(v,{state:this.state,updateDraft:this.updateDraft,updateCity:this.updateCity,updateDate:this.updateDate,updateTaskList:this.updateTaskList}),s.a.createElement(S,{state:this.state,deleteTask:this.deleteTask,changeState:this.changeState,changeImportantState:this.changeImportantState}))}}]),t}(n.Component),N=(a(131),function(e){function t(){return Object(r.a)(this,t),Object(l.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return s.a.createElement("footer",{className:"footer"},s.a.createElement("section",{className:"text"},s.a.createElement("span",{className:"text__info"},"Created by: "),s.a.createElement("span",{className:"text__author"},"Mateusz"),s.a.createElement("span",{className:"text__author"},"Gre\u0144"),s.a.createElement("span",{className:"text__date"},"2020")))}}]),t}(n.Component)),O=function(e){function t(){var e,a;Object(r.a)(this,t);for(var n=arguments.length,s=new Array(n),c=0;c<n;c++)s[c]=arguments[c];return(a=Object(l.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(s)))).tasksList=[{id:0,name:"First task",city:"Cieszyn",deadline:new Date,done:!1,important:!1},{id:1,name:"Second task",city:"Warszawa",deadline:new Date,done:!1,important:!0}],a}return Object(d.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return s.a.createElement("div",{className:"app"},s.a.createElement(p,null),s.a.createElement(j,{tasks:this.tasksList}),s.a.createElement(N,null))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(s.a.createElement(O,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},57:function(e,t,a){e.exports=a(132)},62:function(e,t,a){},63:function(e,t,a){},64:function(e,t,a){},65:function(e,t,a){},67:function(e,t,a){}},[[57,1,2]]]);
//# sourceMappingURL=main.20ee7bcb.chunk.js.map