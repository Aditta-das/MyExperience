(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{14:function(e,a,t){},17:function(e,a,t){e.exports=t(33)},25:function(e,a,t){},27:function(e,a,t){},31:function(e,a,t){},33:function(e,a,t){"use strict";t.r(a);var l=t(1),n=t.n(l),c=t(15),i=t.n(c),s=(t(25),t(27),t(4));t(14),t(11);var r=function(){return n.a.createElement(n.a.Fragment,null,n.a.createElement("div",{className:"webName"},n.a.createElement("h1",{className:"webTitle"},"FootStep To FAANG")),n.a.createElement("ul",{className:"nav justify-content-center"},n.a.createElement("li",{className:"nav-item"},n.a.createElement(s.b,{className:"nav-link",to:"/home"},"LeetCode")),n.a.createElement("li",{className:"nav-item"},n.a.createElement(s.b,{className:"nav-link",to:"/dropaquestion"},"Drop A Question")),n.a.createElement("li",{className:"nav-item"},n.a.createElement(s.b,{className:"nav-link",to:"/challanges"},"Challanges")),n.a.createElement("li",{className:"nav-item"},n.a.createElement(s.b,{className:"nav-link",to:"/resume"},"My Resume"))))};var m=function(){return n.a.createElement("div",{className:"App"},n.a.createElement(r,null))},o=t(0),u=t(12),d=t(16),E=t(6),p=t(7),h=t(9),v=t(8),N=t(10),b=t(3),f=function(e){function a(){var e;return Object(E.a)(this,a),(e=Object(h.a)(this,Object(v.a)(a).call(this))).state={activeItem:{visitor:"",problem_name:"",question:""}},e.handleChange=e.handleChange.bind(Object(b.a)(Object(b.a)(e))),e.handleSubmit=e.handleSubmit.bind(Object(b.a)(Object(b.a)(e))),e.getCookie=e.getCookie.bind(Object(b.a)(Object(b.a)(e))),e}return Object(N.a)(a,e),Object(p.a)(a,[{key:"getCookie",value:function(e){var a=null;if(document.cookie&&""!==document.cookie)for(var t=document.cookie.split(";"),l=0;l<t.length;l++){var n=t[l].trim();if(n.substring(0,e.length+1)===e+"="){a=decodeURIComponent(n.substring(e.length+1));break}}return a}},{key:"handleChange",value:function(e){this.setState({activeItem:Object(d.a)({},this.state.activeItem,Object(u.a)({},e.target.name,e.target.value))})}},{key:"handleSubmit",value:function(e){var a=this;e.preventDefault(),console.log(this.state.activeItem);var t=this.getCookie("csrftoken");fetch("http://127.0.0.1:8000/api/question/",{method:"post",headers:{"Content-type":"application/json","X-CSRFToken":t},body:JSON.stringify(this.state.activeItem)}).then(function(e){a.setState({activeItem:{visitor:"",problem_name:"",question:""}})}).catch(function(e){console.log("ERROR",e)})}},{key:"render",value:function(){return n.a.createElement(n.a.Fragment,null,n.a.createElement(r,null),n.a.createElement("div",{className:"container col-md-6"},n.a.createElement("div",{className:"SendMe"},n.a.createElement("form",{onSubmit:this.handleSubmit,id:"form"},n.a.createElement("div",{className:"mb-3"},n.a.createElement("label",{htmlFor:"exampleFormControlInput1",className:"form-label"},"Name"),n.a.createElement("input",{type:"text",onChange:this.handleChange,name:"visitor",value:this.state.activeItem.visitor,className:"form-control",id:"name",placeholder:"@SomeOne","aria-label":"name"})),n.a.createElement("div",{className:"mb-3"},n.a.createElement("label",{htmlFor:"exampleFormControlInput1",className:"form-label"},"Problem Name"),n.a.createElement("input",{type:"text",onChange:this.handleChange,className:"form-control",name:"problem_name",value:this.state.activeItem.problem_name,id:"prblmname",placeholder:"Problem Name","aria-label":"prblmname"})),n.a.createElement("div",{className:"mb-3"},n.a.createElement("label",{htmlFor:"exampleFormControlTextarea1",className:"form-label"},"Question Here"),n.a.createElement("textarea",{className:"form-control",onChange:this.handleChange,name:"question",value:this.state.activeItem.question,id:"exampleFormControlTextarea1",rows:"3"})),n.a.createElement("div",{className:"mb-3"},n.a.createElement("input",{type:"submit",onClick:this.handleSubmit,id:"submit",className:"btn btn-primary"}))))))}}]),a}(n.a.Component),g=function(e){function a(e){var t;return Object(E.a)(this,a),(t=Object(h.a)(this,Object(v.a)(a).call(this,e))).state={leetCodeList:[],questionList:[],activeItem:{id:null,name:"",language:"",topics:"",link:"",notes:""}},t.fetchLeetcodeList=t.fetchLeetcodeList.bind(Object(b.a)(Object(b.a)(t))),t}return Object(N.a)(a,e),Object(p.a)(a,[{key:"componentDidMount",value:function(){this.fetchLeetcodeList(),this.fetchQuestion()}},{key:"fetchLeetcodeList",value:function(){var e=this;console.log("Fetching..."),fetch("http://127.0.0.1:8000/api/codes/").then(function(e){return e.json()}).then(function(a){return e.setState({leetCodeList:a})})}},{key:"fetchQuestion",value:function(){var e=this;console.log("Fetching..."),fetch("http://127.0.0.1:8000/api/question/").then(function(e){return e.json()}).then(function(a){return e.setState({questionList:a})})}},{key:"render",value:function(){var e=this.state.leetCodeList,a=this.state.questionList,t=1;return n.a.createElement(n.a.Fragment,null,n.a.createElement(r,null),n.a.createElement("div",{className:"container mt-4"},n.a.createElement("div",{className:"alert alert-primary",role:"alert"},n.a.createElement("div",{className:"d-flex justify-content-center"},a.length," New Question Arrived")),n.a.createElement("div",{className:"tableFormat mt-5"},n.a.createElement("table",{className:"table"},n.a.createElement("thead",null,n.a.createElement("tr",null,n.a.createElement("th",{scope:"col"},"No."),n.a.createElement("th",{scope:"col"},"Name"),n.a.createElement("th",{scope:"col"},"Language"),n.a.createElement("th",{scope:"col"},"Topics"),n.a.createElement("th",{scope:"col"},"Link"),n.a.createElement("th",{scope:"col"},"Notes"))),n.a.createElement("tbody",null,e.map(function(e,a){return n.a.createElement("tr",{key:a},n.a.createElement("td",null,t++),n.a.createElement("td",null,e.name),n.a.createElement("td",null,e.language),n.a.createElement("td",null,e.topics),n.a.createElement("td",null,n.a.createElement("a",{href:e.link,className:"links"},e.link)),n.a.createElement("td",null,e.notes))}))))))}}]),a}(n.a.Component),k=(t(31),function(e){function a(){return Object(E.a)(this,a),Object(h.a)(this,Object(v.a)(a).apply(this,arguments))}return Object(N.a)(a,e),Object(p.a)(a,[{key:"render",value:function(){return n.a.createElement(n.a.Fragment,null,n.a.createElement(r,null),n.a.createElement("div",{className:"container"},n.a.createElement("section",{id:"main"},n.a.createElement("header",{id:"title"},n.a.createElement("h1",null,"Aditta Das Nishad"),n.a.createElement("span",{className:"subtitle"},"North Kashimpur, Punchgachia, Feni, Bangladesh"),n.a.createElement("br",null),n.a.createElement("span",{className:"subtitle"},n.a.createElement("b",null,"Phone: +8801824967296")," || ",n.a.createElement("b",null,"Email:")," ",n.a.createElement("a",{className:"mailLink",href:"mailto:aditta.das.nishad@gmail.com"},n.a.createElement("b",null,"aditta.das.nishad@gmail.com")))),n.a.createElement("section",{className:"main-block"},n.a.createElement("h2",null,n.a.createElement("i",{className:"fa fa-suitcase"})," Experiences"),n.a.createElement("section",{className:"blocks"},n.a.createElement("div",{className:"date"},n.a.createElement("span",null,"2015"),n.a.createElement("span",null,"present")),n.a.createElement("div",{className:"decorator"}),n.a.createElement("div",{className:"details"},n.a.createElement("header",null,n.a.createElement("h3",null,"Some Position"),n.a.createElement("span",{className:"place"},"Some Workplace"),n.a.createElement("span",{className:"location"},"(remote)")),n.a.createElement("div",null,n.a.createElement("ul",null,n.a.createElement("li",null,"Lorem ipsum dolor sit amet, consectetur adipiscing elit"),n.a.createElement("li",null,"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin nec mi ante. Etiam odio eros, placerat eu metus id, gravida eleifend odio. Vestibulum dapibus pharetra odio, egestas ullamcorper ipsum congue ac. Maecenas viverra tortor eget convallis vestibulum. Donec pulvinar venenatis est, non sollicitudin metus laoreet sed. Fusce tincidunt felis nec neque aliquet porttitor"))))),n.a.createElement("section",{className:"blocks"},n.a.createElement("div",{className:"date"},n.a.createElement("span",null,"2014"),n.a.createElement("span",null,"2015")),n.a.createElement("div",{className:"decorator"}),n.a.createElement("div",{className:"details"},n.a.createElement("header",null,n.a.createElement("h3",null,"Another Position"),n.a.createElement("span",{className:"place"},"Some Workplace"),n.a.createElement("span",{className:"location"},"Some City, Some Country")),n.a.createElement("div",null,n.a.createElement("ul",null,n.a.createElement("li",null,"Lorem ipsum dolor sit amet, consectetur adipiscing elit"),n.a.createElement("li",null,"Lorem ipsum dolor sit amet, consectetur adipiscing elit"),n.a.createElement("li",null,"Lorem ipsum dolor sit amet, consectetur adipiscing elit"))))),n.a.createElement("section",{className:"blocks"},n.a.createElement("div",{className:"date"},n.a.createElement("span",null,"2013"),n.a.createElement("span",null,"2014")),n.a.createElement("div",{className:"decorator"}),n.a.createElement("div",{className:"details"},n.a.createElement("header",null,n.a.createElement("h3",null,"Yet Another Job Position"),n.a.createElement("span",{className:"place"},"Some Workplace"),n.a.createElement("span",{className:"location"},"Some City, Some Country")),n.a.createElement("div",null,n.a.createElement("ul",null,n.a.createElement("li",null,"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin nec mi ante. Etiam odio eros, placerat eu metus id, gravida eleifend odio"),n.a.createElement("li",null,"Lorem ipsum dolor sit amet, consectetur adipiscing elit")))))),n.a.createElement("section",{className:"main-block"},n.a.createElement("h2",null,n.a.createElement("i",{className:"fa fa-folder-open"})," Selected Projects"),n.a.createElement("section",{className:"blocks"},n.a.createElement("div",{className:"date"},n.a.createElement("span",null,"2015"),n.a.createElement("span",null,"2016")),n.a.createElement("div",{className:"decorator"}),n.a.createElement("div",{className:"details"},n.a.createElement("header",null,n.a.createElement("h3",null,"Some Project 1"),n.a.createElement("span",{className:"place"},"Some workplace")),n.a.createElement("div",null,n.a.createElement("ul",null,n.a.createElement("li",null,"Lorem ipsum dolor sit amet, consectetur adipiscing elit"),n.a.createElement("li",null,"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin nec mi ante. Etiam odio eros, placerat eu metus id, gravida eleifend odio. Vestibulum dapibus pharetra odio, egestas ullamcorper ipsum congue ac"),n.a.createElement("li",null,"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin nec mi ante. Etiam odio eros, placerat eu metus id, gravida eleifend odio"))))),n.a.createElement("section",{className:"blocks"},n.a.createElement("div",{className:"date"},n.a.createElement("span",null,"2014"),n.a.createElement("span",null,"2015")),n.a.createElement("div",{className:"decorator"}),n.a.createElement("div",{className:"details"},n.a.createElement("header",null,n.a.createElement("h3",null,"Some Project 2"),n.a.createElement("span",{className:"place"},"Some workplace")),n.a.createElement("div",null,n.a.createElement("ul",null,n.a.createElement("li",null,"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin nec mi ante. Etiam odio eros, placerat eu metus id, gravida eleifend odio. Vestibulum dapibus pharetra odio, egestas ullamcorper ipsum congue ac. Maecenas viverra tortor eget convallis vestibulum. Donec pulvinar venenatis est, non sollicitudin metus laoreet sed. Fusce tincidunt felis nec neque aliquet porttitor"))))),n.a.createElement("section",{className:"blocks"},n.a.createElement("div",{className:"date"},n.a.createElement("span",null,"2014")),n.a.createElement("div",{className:"decorator"}),n.a.createElement("div",{className:"details"},n.a.createElement("header",null,n.a.createElement("h3",null,"Some Project 3"),n.a.createElement("span",{className:"place"},"Some workplace")),n.a.createElement("div",null,n.a.createElement("ul",null,n.a.createElement("li",null,"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin nec mi ante. Etiam odio eros, placerat eu metus id, gravida eleifend odio")))))),n.a.createElement("section",{className:"main-block concise"},n.a.createElement("h2",null,n.a.createElement("i",{className:"fa fa-graduation-cap"})," Education"),n.a.createElement("section",{className:"blocks"},n.a.createElement("div",{className:"date"},n.a.createElement("span",null,"2009"),n.a.createElement("span",null,"2014")),n.a.createElement("div",{className:"decorator"}),n.a.createElement("div",{className:"details"},n.a.createElement("header",null,n.a.createElement("h3",null,"Ph.D. in Forty-Two Discovery"),n.a.createElement("span",{className:"place"},"Inexistent University"),n.a.createElement("span",{className:"location"},"Some City, Some Country")),n.a.createElement("div",null,"Relationship of the number with the answer to life, the universe and everything"))),n.a.createElement("section",{className:"blocks"},n.a.createElement("div",{className:"date"},n.a.createElement("span",null,"2005"),n.a.createElement("span",null,"2009")),n.a.createElement("div",{className:"decorator"}),n.a.createElement("div",{className:"details"},n.a.createElement("header",null,n.a.createElement("h3",null,"LL.B. in H\xe6matophagic Economics"),n.a.createElement("span",{className:"place"},"Inexistent University"),n.a.createElement("span",{className:"location"},"Some City, Some Country")),n.a.createElement("div",null,"President's Scholarship"))),n.a.createElement("section",{className:"blocks"},n.a.createElement("div",{className:"date"},n.a.createElement("span",null,"2005"),n.a.createElement("span",null,"2009")),n.a.createElement("div",{className:"decorator"}),n.a.createElement("div",{className:"details"},n.a.createElement("header",null,n.a.createElement("h3",null,"B.S. in Existential Science (Double Major)"),n.a.createElement("span",{className:"place"},"Inexistent University"),n.a.createElement("span",{className:"location"},"Some City, Some Country")),n.a.createElement("div",null,"President's Scholarship"))),n.a.createElement("section",{className:"blocks"},n.a.createElement("div",{className:"date"}),n.a.createElement("div",{className:"decorator"}),n.a.createElement("div",{className:"details"},n.a.createElement("header",null,n.a.createElement("h3",null,"Massive Online Fee\u2013Required Course (selective list)")),n.a.createElement("div",{className:"concise"},n.a.createElement("ul",null,n.a.createElement("li",null,"Introduction to something else"),n.a.createElement("li",null,"Introduction to some more useless things"),n.a.createElement("li",null,"Philosophy in practice"),n.a.createElement("li",null,"Recursive research and its impact on recursive research"),n.a.createElement("li",null,"Artificial politics")))))))))}}]),a}(n.a.Component));i.a.render(n.a.createElement(s.a,null,n.a.createElement(o.c,null,n.a.createElement(o.a,{path:"/",element:n.a.createElement(m,null)}),n.a.createElement(o.a,{path:"/home",element:n.a.createElement(g,null)}),n.a.createElement(o.a,{path:"/dropaquestion",element:n.a.createElement(f,null)}),n.a.createElement(o.a,{path:"/resume",element:n.a.createElement(k,null)}))),document.getElementById("root"))}},[[17,2,1]]]);
//# sourceMappingURL=main.8a1ce41c.chunk.js.map