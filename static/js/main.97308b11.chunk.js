(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{18:function(e,t,a){e.exports=a(35)},26:function(e,t,a){},30:function(e,t,a){},35:function(e,t,a){"use strict";a.r(t);var c=a(0),n=a.n(c),r=a(16),i=a.n(r);a(24),a(26),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var s=a(37),o=a(39),l=a(38),m=a(5),p=a.n(m),u=a(6),h=a(7),f=a(8),b=a(12),v=a(9),E=a(13),d=(a(30),function(e){return n.a.createElement("form",{onSubmit:e.getRecipe,style:{marginBottom:"2rem"}},n.a.createElement("input",{className:"form__input",type:"text",name:"recipeName"}),n.a.createElement("button",{className:"form__button"},"Search"))}),_=a(36),w=function(e){return n.a.createElement("div",{className:"container"},n.a.createElement("div",{className:"row"},e.recipes.map(function(e){return n.a.createElement("div",{className:"col-md-4",key:e.recipe_id,style:{marginBottom:"2rem"}},n.a.createElement("div",{className:"recipes__box"},n.a.createElement("img",{className:"recipe__box-img",src:e.image_url,alt:e.title}),n.a.createElement("div",{className:"recipe__text"},n.a.createElement("h5",{className:"recipe__title"},e.title.length<20?e.title:"".concat(e.title.substring(0,25),"...")),n.a.createElement("p",{className:"recipes__subtile"},"Publisher:",n.a.createElement("span",null,e.publisher))),n.a.createElement("button",{className:"recipe_buttons"},n.a.createElement(_.a,{to:{pathname:"/recipe/".concat(e.recipe_id),state:{recipe:e.title}}}," View Recipe"))))})))},g="a05665efd3aff1fb699c986be7b0cc12",N=function(e){function t(){var e,a;Object(h.a)(this,t);for(var c=arguments.length,n=new Array(c),r=0;r<c;r++)n[r]=arguments[r];return(a=Object(b.a)(this,(e=Object(v.a)(t)).call.apply(e,[this].concat(n)))).state={recipes:[]},a.getRecipe=function(){var e=Object(u.a)(p.a.mark(function e(t){var c,n,r;return p.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return c=t.target.elements.recipeName.value,t.preventDefault(),e.next=4,fetch("https://cors-anywhere.herokuapp.com/https://www.food2fork.com/api/search?key=".concat(g,"&q=").concat(c,"&count=10"));case 4:return n=e.sent,e.next=7,n.json();case 7:r=e.sent,console.log(r),a.setState({recipes:r.recipes});case 10:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}(),a}return Object(E.a)(t,e),Object(f.a)(t,[{key:"render",value:function(){return n.a.createElement("div",{className:"App"},n.a.createElement("header",{className:"App-header"},n.a.createElement("h1",{className:"App-title"}," Recipe Search")),n.a.createElement(d,{getRecipe:this.getRecipe}),n.a.createElement(w,{recipes:this.state.recipes}))}}]),t}(c.Component),y="a05665efd3aff1fb699c986be7b0cc12",k=function(e){function t(){var e,a;Object(h.a)(this,t);for(var c=arguments.length,n=new Array(c),r=0;r<c;r++)n[r]=arguments[r];return(a=Object(b.a)(this,(e=Object(v.a)(t)).call.apply(e,[this].concat(n)))).state={activeRecipe:[]},a.componentDidMount=Object(u.a)(p.a.mark(function e(){var t,c,n;return p.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t=a.props.location.state.recipe,console.log(t),e.next=4,fetch("https://cors-anywhere.herokuapp.com/https://www.food2fork.com/api/search?key=".concat(y,"&q=").concat(t));case 4:return c=e.sent,e.next=7,c.json();case 7:n=e.sent,console.log(n),a.setState({activeRecipe:n.recipes[0]});case 10:case"end":return e.stop()}},e,this)})),a}return Object(E.a)(t,e),Object(f.a)(t,[{key:"render",value:function(){var e=this.state.activeRecipe;return n.a.createElement("div",{className:"container"},n.a.createElement("div",{className:"active-recipe"},n.a.createElement("img",{className:"active-recipe__img",src:e.image_url,alt:e.title}),n.a.createElement("h3",{className:"active--recipe__title"},e.title),n.a.createElement("h4",{className:"active--recipe__publisher"},"Publisher:",n.a.createElement("span",null,e.publisher)),n.a.createElement("p",{className:"active-recipe__website"},"Website:",n.a.createElement("span",null,n.a.createElement("a",{href:e.publisher_url},e.publisher_url))),n.a.createElement("button",{className:"active-recipe__button"},n.a.createElement(_.a,{to:"/"},"Go Home"))))}}]),t}(c.Component),j=function(){return n.a.createElement(s.a,null,n.a.createElement(o.a,null,n.a.createElement(l.a,{path:"/",component:N,exact:!0}),n.a.createElement(l.a,{path:"/recipe/:id",component:k})))};i.a.render(n.a.createElement(j,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[18,2,1]]]);
//# sourceMappingURL=main.97308b11.chunk.js.map