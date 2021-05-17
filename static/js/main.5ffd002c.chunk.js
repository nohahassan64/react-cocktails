(this["webpackJsonpreact-cocktails"]=this["webpackJsonpreact-cocktails"]||[]).push([[0],{32:function(e,t,c){},33:function(e,t,c){"use strict";c.r(t);var s=c(1),n=c.n(s),a=c(18),i=c.n(a),r=c(6),o=c(2),l=c.p+"static/media/logoCocktail.5bb3b58e.svg",j=c(0),b=function(){return Object(j.jsx)("nav",{className:"navbar",children:Object(j.jsxs)("div",{className:"nav-center",children:[Object(j.jsx)(r.b,{to:"/",children:Object(j.jsx)("img",{src:l,alt:"Cocktail",className:"logo"})}),Object(j.jsxs)("ul",{className:"nav-links",children:[Object(j.jsx)("li",{children:Object(j.jsx)(r.b,{to:"/",children:"Home"})}),Object(j.jsx)("li",{children:Object(j.jsx)(r.b,{to:"/about",children:"About"})})]})]})})},d=c(10),u=c.n(d),h=c(12),O=c(9),m=n.a.createContext(),x=function(e){var t=e.children,c=Object(s.useState)(!0),n=Object(O.a)(c,2),a=n[0],i=n[1],r=Object(s.useState)("a"),o=Object(O.a)(r,2),l=o[0],b=o[1],d=Object(s.useState)([]),x=Object(O.a)(d,2),p=x[0],f=x[1],k=function(){var e=Object(h.a)(u.a.mark((function e(){var t,c,s,n;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return i(!0),e.prev=1,e.next=4,fetch("".concat("https://www.thecocktaildb.com/api/json/v1/1/search.php?s=").concat(l));case 4:return t=e.sent,e.next=7,t.json();case 7:c=e.sent,s=c.drinks,console.log(s),s?(n=s.map((function(e){var t=e.idDrink,c=e.strDrink,s=e.strAlcoholic,n=e.strGlass;return{id:t,name:c,image:e.strDrinkThumb,info:s,glass:n}})),f(n)):f([]),i(!1),e.next=18;break;case 14:e.prev=14,e.t0=e.catch(1),console.log(e.t0),i(!1);case 18:case"end":return e.stop()}}),e,null,[[1,14]])})));return function(){return e.apply(this,arguments)}}();return Object(s.useEffect)((function(){k()}),[l]),Object(j.jsx)(m.Provider,{value:{loading:a,cocktails:p,setSearchTerm:b},children:t})},p=function(){return Object(s.useContext)(m)},f=function(){var e=p().setSearchTerm,t=Object(s.useRef)("");Object(s.useEffect)((function(){t.current.focus()}),[]);return Object(j.jsx)("section",{className:"section search",children:Object(j.jsx)("form",{className:"search-form",onSubmit:function(e){return e.preventDefault()},children:Object(j.jsxs)("div",{className:"form-control",children:[Object(j.jsx)("label",{htmlFor:"name",children:"Search your favourite cocktails"}),Object(j.jsx)("input",{id:"name",type:"text",ref:t,onChange:function(){e(t.current.value)}})]})})})},k=c(20),v=function(){return Object(j.jsx)("div",{className:"loader"})},g=function(e){var t=e.id,c=e.image,s=e.name,n=e.info,a=e.glass;return Object(j.jsxs)("article",{className:"cocktail",children:[Object(j.jsx)("div",{className:"img-container",children:Object(j.jsx)("img",{src:c,alt:s})}),Object(j.jsxs)("div",{className:"cocktail-footer",children:[Object(j.jsx)("h3",{children:s}),Object(j.jsx)("h4",{children:a}),Object(j.jsx)("h4",{children:n}),Object(j.jsx)(r.b,{to:"/cocktail/".concat(t),className:"btn btn-primary btn-details",children:"Details"})]})]})},N=function(){var e=p(),t=e.loading,c=e.cocktails;return t?Object(j.jsx)(v,{}):c.length<1?Object(j.jsx)("h2",{className:"section-title",children:"No Cocktails matched your search criteria"}):Object(j.jsxs)("section",{className:"section",children:[Object(j.jsx)("h2",{className:"section-title",children:"Cocktails"}),Object(j.jsx)("div",{className:"cocktails-center",children:c.map((function(e){return Object(j.jsx)(g,Object(k.a)({},e),e.id)}))})]})},y=function(){return Object(j.jsxs)("div",{children:[Object(j.jsx)(f,{}),Object(j.jsx)(N,{})]})},w=function(){return Object(j.jsxs)("section",{className:"section about-section",children:[Object(j.jsx)("h1",{className:"section-title",children:"About Us"}),Object(j.jsx)("p",{children:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae repudiandae architecto qui adipisci in officiis, aperiam sequi atque perferendis eos, autem maiores nisi saepe quisquam hic odio consectetur nobis veritatis quasi explicabo obcaecati doloremque? Placeat ratione hic aspernatur error blanditiis?"})]})},I="https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=",C=function(){var e=Object(o.f)().id,t=Object(s.useState)(!1),c=Object(O.a)(t,2),n=c[0],a=c[1],i=Object(s.useState)(null),l=Object(O.a)(i,2),b=l[0],d=l[1];if(Object(s.useEffect)((function(){function t(){return(t=Object(h.a)(u.a.mark((function t(){var c,s,n,i,r,o,l,j,b,h,O,m,x,p;return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,fetch("".concat(I).concat(e));case 3:return c=t.sent,t.next=6,c.json();case 6:(s=t.sent).drinks?(n=s.drinks[0],i=n.strDrink,r=n.strDrinkThumb,o=n.strAlcoholic,l=n.strCategory,j=n.strGlass,b=n.strInstructions,h=n.strIngredient1,O=n.strIngredient2,m=n.strIngredient3,x=n.strIngredient4,p=n.strIngredient5,d({name:i,image:r,info:o,category:l,glass:j,instructions:b,ingredients:[h,O,m,x,p]})):d(null),a(!1),t.next=15;break;case 11:t.prev=11,t.t0=t.catch(0),console.log(t.t0),a(!1);case 15:case"end":return t.stop()}}),t,null,[[0,11]])})))).apply(this,arguments)}a(!0),function(){t.apply(this,arguments)}()}),[e]),n)return Object(j.jsx)(v,{});if(!b)return Object(j.jsx)("h2",{className:"section-title",children:"No cocktail to display"});var m=b.name,x=b.image,p=b.info,f=b.category,k=b.glass,g=b.instructions,N=b.ingredients;return Object(j.jsxs)("section",{className:"section cocktail-section",children:[Object(j.jsx)(r.b,{to:"/",className:"btn btn-primary",children:"Back Home"}),Object(j.jsx)("h2",{className:"section-title",children:m}),Object(j.jsxs)("div",{className:"drink",children:[Object(j.jsx)("img",{src:x,alt:m}),Object(j.jsxs)("div",{className:"drink-info",children:[Object(j.jsxs)("p",{children:[Object(j.jsx)("span",{className:"drink-data",children:"Name: "}),m]}),Object(j.jsxs)("p",{children:[Object(j.jsx)("span",{className:"drink-data",children:"Category: "}),f]}),Object(j.jsxs)("p",{children:[Object(j.jsx)("span",{className:"drink-data",children:"Info: "}),p]}),Object(j.jsxs)("p",{children:[Object(j.jsx)("span",{className:"drink-data",children:"Glass: "}),k]}),Object(j.jsxs)("p",{children:[Object(j.jsx)("span",{className:"drink-data",children:"Instructions: "}),g]}),Object(j.jsxs)("p",{children:[Object(j.jsx)("span",{className:"drink-data",children:"Ingredients: "}),N.map((function(e,t){return e?Object(j.jsx)("span",{children:e},t):null}))]})]})]})]})},S=function(){return Object(j.jsx)("section",{className:"error-page section",children:Object(j.jsxs)("div",{className:"error-container",children:[Object(j.jsx)("h1",{children:"Opps! It's adeed end"}),Object(j.jsx)(r.b,{to:"/",className:"btn- btn-primary",children:"Back Home"})]})})},q=(c(32),function(){return Object(j.jsxs)(r.a,{children:[Object(j.jsx)(b,{}),Object(j.jsxs)(o.c,{children:[Object(j.jsx)(o.a,{exact:!0,path:"/",component:y}),Object(j.jsx)(o.a,{exact:!0,path:"/about",component:w}),Object(j.jsx)(o.a,{exact:!0,path:"/cocktail/:id",component:C}),Object(j.jsx)(o.a,{path:"*",component:S})]})]})});i.a.render(Object(j.jsx)(x,{children:Object(j.jsx)(q,{})}),document.getElementById("root"))}},[[33,1,2]]]);
//# sourceMappingURL=main.5ffd002c.chunk.js.map