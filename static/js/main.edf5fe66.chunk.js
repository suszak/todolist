(this.webpackJsonptodolist=this.webpackJsonptodolist||[]).push([[0],{129:function(t,e,a){},130:function(t,e,a){},131:function(t,e,a){},132:function(t,e,a){"use strict";a.r(e);var n=a(2),s=a.n(n),i=a(25),c=a.n(i),r=(a(62),a(6)),o=a(7),l=a(9),u=a(8),d=a(10),p=(a(63),a(64),function(t){function e(){return Object(r.a)(this,e),Object(l.a)(this,Object(u.a)(e).apply(this,arguments))}return Object(d.a)(e,t),Object(o.a)(e,[{key:"render",value:function(){return s.a.createElement("header",{className:"header"},s.a.createElement("h1",{className:"header__title"},"ToDo list:"))}}]),e}(n.Component)),m=a(47),h=(a(65),a(15)),f=a.n(h),y=a(23),k=a(26),v=a(54),_=a.n(v),b=(a(67),a(68),function(t){function e(t){var a;return Object(r.a)(this,e),(a=Object(l.a)(this,Object(u.a)(e).call(this,t))).handleChange=function(){var t=Object(y.a)(f.a.mark((function t(e){return f.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,a.setState({startDate:e});case 2:a.props.updateDate(a.state.startDate);case 3:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),a.inputFocused=function(t){document.querySelector(".".concat(t,"__label")).classList.add("".concat(t,"__label--active")),document.querySelector("#".concat(t,"Tooltip")).classList.remove("tooltip--visible"),document.querySelector("#".concat(t,"TooltipSign")).classList.remove("tooltip--visible")},a.inputUnfocused=function(t){document.querySelector(".".concat(t,"__input")).value||document.querySelector(".".concat(t,"__label")).classList.remove("".concat(t,"__label--active"))},a.moveLabel=function(){document.querySelector(".task__input").value||document.querySelector(".task__label").classList.remove("task__label--active"),document.querySelector(".city__input").value||document.querySelector(".city__label").classList.remove("city__label--active"),document.querySelector(".deadline__input").value||document.querySelector(".deadline__label").classList.remove("deadline__label--active")},a.state={startDate:""},a.handleChange=a.handleChange.bind(Object(k.a)(a)),a}return Object(d.a)(e,t),Object(o.a)(e,[{key:"render",value:function(){var t=this;return s.a.createElement("nav",{className:"navigationBar"},s.a.createElement("section",{className:"task"},s.a.createElement("div",{className:"tooltip",id:"taskTooltip"},"It cannot be empty!"),s.a.createElement("div",{className:"tooltip",id:"taskTooltipSign"},"Don't use '|' inside!"),s.a.createElement("label",{htmlFor:"taskInput",className:"task__label"},"Type your task here..."),s.a.createElement("input",{type:"text",name:"taskInput",className:"task__input",id:"draftInput",onChange:this.props.updateDraft,onFocus:function(){t.inputFocused("task")},onBlur:function(){t.inputUnfocused("task")},value:this.props.state.draft})),s.a.createElement("section",{className:"city"},s.a.createElement("div",{className:"tooltip",id:"cityTooltip"},"It cannot be empty!"),s.a.createElement("div",{className:"tooltip",id:"cityTooltipSign"},"Don't use '|' inside!"),s.a.createElement("label",{htmlFor:"cityInput",className:"city__label"},"Type location here..."),s.a.createElement("input",{type:"text",name:"cityInput",className:"city__input",id:"cityInput",onChange:this.props.updateCity,onFocus:function(){t.inputFocused("city")},onBlur:function(){t.inputUnfocused("city")},value:this.props.state.city})),s.a.createElement("section",{className:"deadline"},s.a.createElement("div",{className:"tooltip",id:"deadlineTooltipSign"},"Don't use '|' inside!"),s.a.createElement("div",{className:"tooltip",id:"deadlineTooltip"},"It cannot be empty!"),s.a.createElement("label",{htmlFor:"deadlineInput",className:"deadline__label"},"Set deadline..."),s.a.createElement(_.a,{selected:this.props.state.deadline,onChange:this.handleChange,id:"deadlineInput",name:"deadlineInput",className:"deadline__input",onFocus:function(){t.inputFocused("deadline")},onBlur:function(){t.inputUnfocused("deadline")},value:this.state.startDate,dateFormat:"dd/MM/yyyy"})),s.a.createElement("button",{className:"navigationBar__button",onClick:Object(y.a)(f.a.mark((function e(){return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.props.updateTaskList();case 2:t.moveLabel();case 3:case"end":return e.stop()}}),e)})))},"Add task"))}}]),e}(n.Component)),S=(a(129),a(130),function(t){function e(){var t,a;Object(r.a)(this,e);for(var n=arguments.length,s=new Array(n),i=0;i<n;i++)s[i]=arguments[i];return(a=Object(l.a)(this,(t=Object(u.a)(e)).call.apply(t,[this].concat(s)))).state={temp:"",weather:"",hidden:!0},a.getWeatherFromApi=Object(y.a)(f.a.mark((function t(){var e,n;return f.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,fetch("https://api.openweathermap.org/data/2.5/weather?appid=0c79a3e8f66a976ec6832ddc76907c72&q=".concat(a.props.task.city,"&units=metric&lang=en"));case 3:if(200!==(e=t.sent).status){t.next=11;break}return t.next=7,e.json();case 7:n=t.sent,a.setState({temp:"Temperature: "+Math.round(n.main.temp)+"\xb0C",weather:n.weather[0].description}),t.next=12;break;case 11:a.setState({temp:"City not found",weather:""});case 12:t.next=17;break;case 14:t.prev=14,t.t0=t.catch(0),console.error(t.t0);case 17:case"end":return t.stop()}}),t,null,[[0,14]])}))),a}return Object(d.a)(e,t),Object(o.a)(e,[{key:"componentDidMount",value:function(){var t=this;this.getWeatherFromApi().then((function(){t.setState({hidden:!1})}))}},{key:"render",value:function(){var t=this;return s.a.createElement("section",{className:"todoItem"},s.a.createElement("span",{className:"todoItem__importantSign",onClick:function(){t.props.changeImportantState(t.props.task.id)}},s.a.createElement("span",{className:this.props.task.important?"hidden":""},s.a.createElement("i",{className:"far fa-star"})),s.a.createElement("span",{className:this.props.task.important?"":"hidden"},s.a.createElement("i",{className:"fas fa-star"}))),s.a.createElement("span",{className:this.props.task.done?"todoItem__name todoItem__name--done":"todoItem__name",onClick:function(){t.props.changeState(t.props.task.id)}},s.a.createElement("span",null,this.props.task.name)),s.a.createElement("span",{className:"todoItem__deadline"},this.props.task.deadline.toLocaleDateString("pl-PL")),s.a.createElement("span",{className:"todoItem__city"},this.props.task.city),s.a.createElement("section",{className:this.state.hidden?"weather":"weather weather--hidden"},s.a.createElement("div",{className:"lds-ellipsis"},s.a.createElement("div",null),s.a.createElement("div",null),s.a.createElement("div",null),s.a.createElement("div",null))),s.a.createElement("section",{className:this.state.hidden?"weather weather--hidden":"weather"},s.a.createElement("span",{className:"weather__temp"},this.state.temp),s.a.createElement("span",{className:"weather__info"},this.state.weather)),s.a.createElement("span",{onClick:function(){t.props.deleteTask(t.props.task.id)},className:"todoItem__delete"},s.a.createElement("i",{className:"fas fa-minus-circle"})))}}]),e}(n.Component)),E=function(t){function e(){return Object(r.a)(this,e),Object(l.a)(this,Object(u.a)(e).apply(this,arguments))}return Object(d.a)(e,t),Object(o.a)(e,[{key:"render",value:function(){var t=this;return s.a.createElement("section",{className:"todoList"},""!==this.props.state.tasks?this.props.state.tasks.map((function(e){return s.a.createElement(S,{task:e,deleteTask:t.props.deleteTask,changeState:t.props.changeState,changeImportantState:t.props.changeImportantState,key:e.id})})):"")}}]),e}(n.Component),g=function(t){function e(){var t,a;Object(r.a)(this,e);for(var n=arguments.length,s=new Array(n),i=0;i<n;i++)s[i]=arguments[i];return(a=Object(l.a)(this,(t=Object(u.a)(e)).call.apply(t,[this].concat(s)))).state={tasks:a.props.tasks,draft:"",city:"",deadline:"",important:""},a.updateDraft=function(t){a.setState({draft:t.target.value})},a.updateCity=function(t){a.setState({city:t.target.value})},a.updateDate=function(t){a.setState({deadline:t})},a.updateTaskList=function(){if(a.state.draft&&a.state.city&&a.state.deadline&&-1===a.state.draft.indexOf("|")&&-1===a.state.city.indexOf("|")){var t=a.state.tasks,e=t.map((function(t){return t.id}));document.querySelector("#draftInput").classList.remove("task__input--empty"),document.querySelector("#cityInput").classList.remove("city__input--empty"),t.push({name:a.state.draft,city:a.state.city,id:Math.max.apply(Math,Object(m.a)(e))<0?0:Math.max.apply(Math,Object(m.a)(e))+1,deadline:a.state.deadline,done:!1,important:!1}),a.setState({tasks:t,draft:"",city:"",deadline:""},a.sortingTasks)}else a.state.draft||(document.querySelector("#draftInput").classList.add("task__input--empty"),document.querySelector("#taskTooltip").classList.add("tooltip--visible")),a.state.city||(document.querySelector("#cityInput").classList.add("city__input--empty"),document.querySelector("#cityTooltip").classList.add("tooltip--visible")),a.state.deadline||(document.querySelector("#deadlineInput").classList.add("deadline__input--empty"),document.querySelector("#deadlineTooltip").classList.add("tooltip--visible")),-1!==a.state.draft.indexOf("|")&&(document.querySelector("#draftInput").classList.add("task__input--empty"),document.querySelector("#taskTooltipSign").classList.add("tooltip--visible")),-1!==a.state.city.indexOf("|")&&(document.querySelector("#cityInput").classList.add("city__input--empty"),document.querySelector("#cityTooltipSign").classList.add("tooltip--visible"))},a.deleteTask=function(t){var e=a.state.tasks.map((function(t){return t.id})),n=a.state.tasks;n.splice(e.findIndex((function(e){return e===t})),1),a.setState({tasks:n},a.sortingTasks)},a.changeState=function(t){var e=a.state.tasks.map((function(t){return t.id})).findIndex((function(e){return e===t})),n=a.state.tasks;n[e]={name:n[e].name,id:n[e].id,city:n[e].city,deadline:n[e].deadline,done:!n[e].done,important:n[e].important},a.setState({tasks:n},a.sortingTasks)},a.changeImportantState=function(t){var e=a.state.tasks.map((function(t){return t.id})).findIndex((function(e){return e===t})),n=a.state.tasks;n[e]={name:n[e].name,id:n[e].id,city:n[e].city,deadline:n[e].deadline,done:n[e].done,important:!n[e].important},a.setState({tasks:n},a.sortingTasks)},a.sortingTasks=function(){var t=[],e=[];if(""!==a.state.tasks){a.state.tasks.map((function(a){return a.important?(t.push(a),a):(e.push(a),a)})),t.sort((function(t,e){return t.deadline-e.deadline})),e.sort((function(t,e){return t.deadline-e.deadline}));var n=[].concat(t,e);a.setState({tasks:n});var s=n.map((function(t){return JSON.stringify(t)}));s=s.join("|"),localStorage.setItem("tasksArray",s)}},a}return Object(d.a)(e,t),Object(o.a)(e,[{key:"componentWillMount",value:function(){this.sortingTasks()}},{key:"render",value:function(){return s.a.createElement("main",{className:"main"},s.a.createElement(b,{state:this.state,updateDraft:this.updateDraft,updateCity:this.updateCity,updateDate:this.updateDate,updateTaskList:this.updateTaskList}),s.a.createElement(E,{state:this.state,deleteTask:this.deleteTask,changeState:this.changeState,changeImportantState:this.changeImportantState}))}}]),e}(n.Component),O=(a(131),function(t){function e(){return Object(r.a)(this,e),Object(l.a)(this,Object(u.a)(e).apply(this,arguments))}return Object(d.a)(e,t),Object(o.a)(e,[{key:"render",value:function(){return s.a.createElement("footer",{className:"footer"},s.a.createElement("section",{className:"text"},s.a.createElement("span",{className:"text__info"},"Created by: "),s.a.createElement("span",{className:"text__author"},"Mateusz"),s.a.createElement("span",{className:"text__author"},"Gre\u0144"),s.a.createElement("span",{className:"text__date"},"2020")))}}]),e}(n.Component)),N=function(t){function e(){var t,a;Object(r.a)(this,e);for(var n=arguments.length,s=new Array(n),i=0;i<n;i++)s[i]=arguments[i];return(a=Object(l.a)(this,(t=Object(u.a)(e)).call.apply(t,[this].concat(s)))).tasksList=[],a}return Object(d.a)(e,t),Object(o.a)(e,[{key:"componentWillMount",value:function(){if(localStorage.getItem("tasksArray")){var t=localStorage.getItem("tasksArray"),e=(t=t.split("|")).map((function(t){return JSON.parse(t)}));e.forEach((function(t){t.deadline=new Date(t.deadline)})),this.tasksList=e}else this.tasksList=[]}},{key:"render",value:function(){return s.a.createElement("div",{className:"app"},s.a.createElement(p,null),s.a.createElement(g,{tasks:this.tasksList}),s.a.createElement(O,null))}}]),e}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(s.a.createElement(N,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(t){t.unregister()})).catch((function(t){console.error(t.message)}))},57:function(t,e,a){t.exports=a(132)},62:function(t,e,a){},63:function(t,e,a){},64:function(t,e,a){},65:function(t,e,a){},67:function(t,e,a){}},[[57,1,2]]]);
//# sourceMappingURL=main.edf5fe66.chunk.js.map