(this.webpackJsonppelicool=this.webpackJsonppelicool||[]).push([[0],{120:function(e,t,n){},121:function(e,t,n){"use strict";n.r(t);var c,a,o,i=n(0),r=n.n(i),s=n(18),l=n(13),j=n(11),b=n(14),d=n.n(b),u=n(145),O=n(9),h=n(23),m=n(17),x=Object(m.b)("USER_LOGIN"),p=Object(m.c)("USER_SIGNUP",(function(e){return console.log("OBJ => ",e),d.a.post("http://localhost:3001/api/signup",e).then((function(e){return e.data})).catch((function(e){return console.log(e)}))})),f=Object(m.d)({favorites:[]},(c={},Object(h.a)(c,x,(function(e,t){return t.payload})),Object(h.a)(c,p.fulfilled,(function(e,t){return t.payload})),c)),v=n(159),g=n(158),y=n(1),S=function(){var e=Object(O.b)(),t=Object(O.c)((function(e){return e.user}));return Object(y.jsx)("header",{children:Object(y.jsxs)("div",{className:"header",children:[Object(y.jsx)(l.b,{to:"/movies",children:Object(y.jsx)("b",{children:"OMDB"})}),t.id?Object(y.jsxs)("div",{className:"header-panel header-panel-loggedin",children:[Object(y.jsx)(g.a,{avatar:Object(y.jsx)(v.a,{children:t.name.slice(0,1)}),label:t.email,variant:"outlined"}),Object(y.jsx)(l.b,{to:"/users/favs",children:Object(y.jsx)(u.a,{variant:"outlined",children:"My favorites"})}),Object(y.jsxs)(u.a,{variant:"outlined",onClick:function(){return console.log("llegue a handle logout"),void d.a.post("/api/logout").then((function(){return e(x({}))})).catch((function(e){return console.log(e)}))},children:[" ","Logout"]})]}):Object(y.jsxs)("div",{className:"header-panel header-panel-loggedoff",children:[Object(y.jsx)(l.b,{to:"/login",children:Object(y.jsx)(u.a,{variant:"outlined",children:"Login"})}),Object(y.jsx)(l.b,{to:"/SignUp",children:Object(y.jsx)(u.a,{variant:"outlined",children:"Sign up"})})]})]})})},E=function(){return Object(y.jsx)("footer",{className:"the-footer",children:"Such Hooks, Much Functional"})},I=n(29),N=function(e){return Object(y.jsx)("form",{className:"form-group",style:{marginTop:"20px"},children:Object(y.jsx)("input",{className:"form-control",placeholder:"Enter movie name",onChange:e.handleChange})})},T=n(148),D=n(147),w=n(78),C=Object(m.c)("GET_FAVORITES",(function(e){return console.log("USER ID => ",e),d.a.get("http://localhost:3001/api/favorites?userId=".concat(e)).then((function(e){return e.data})).catch((function(e){return console.log(e)}))})),A=Object(m.c)("ADD_TO_FAVORITES",(function(e,t){var n=t.getState().user;if(!n.id)throw new Error(" === YOU NEED TO BE LOGGED IN ===");return d.a.put("http://localhost:3001/api/favorites?userId=".concat(n.id,"&movieId=").concat(e.imdbID),e).then((function(){return e}))})),L=Object(m.c)("REMOVE_FROM_FAVORITES",(function(e,t){var n=t.getState(),c=n.user;n.favorites;if(!c.id)throw new Error(" === YOU NEED TO BE LOGGED IN ===");return d.a.delete("http://localhost:3001/api/favorites?userId=".concat(c.id,"&movieId=").concat(e.imdbID),e).then((function(){return e})).catch((function(e){return console.log(e)}))})),R=Object(m.d)([],(a={},Object(h.a)(a,A.fulfilled,(function(e,t){return[].concat(Object(w.a)(e),[t.payload])})),Object(h.a)(a,C.fulfilled,(function(e,t){return t.payload})),Object(h.a)(a,L.fulfilled,(function(e,t){return e.filter((function(e){return e.imdbID!==t.payload.imdbID}))})),a)),k=n(43),M=Object(m.b)("ADD_MOVIES_LIST"),B=Object(m.b)("GET_MOVIES_LIST"),F=Object(m.c)("ADD_SELECTED_MOVIE",(function(e){return console.log("OBJ => ",e),d.a.get("http://www.omdbapi.com/?apikey=1663c88f&i=".concat(e)).then((function(e){return e.data})).catch((function(e){return console.log(e)}))})),P=Object(m.d)({moviesList:[],selectedMovie:{}},(o={},Object(h.a)(o,M,(function(e,t){return Object(k.a)(Object(k.a)({},e),{},{moviesList:t.payload})})),Object(h.a)(o,B,(function(e,t){return e.movies})),Object(h.a)(o,F.fulfilled,(function(e,t){return Object(k.a)(Object(k.a)({},e),{},{selectedMovie:t.payload})})),o)),_=n(146),G=n(149),V=n(150),W=n(154),U=n(152),q=n(151),z=n(153),Y=n(31),J=n.n(Y),H=n(155),K=function(){var e=Object(O.b)(),t=Object(O.c)((function(e){return e.movies.moviesList})),n=Object(O.c)((function(e){return e.favorites})),c=Object(_.a)({root:{maxWidth:250,minWidth:180},bullet:{display:"inline-block",margin:"0 2px",transform:"scale(0.8)"},title:{fontSize:14},pos:{marginBottom:12}})();c.bullet;return Object(y.jsxs)(D.a,{maxWidth:"md",children:[Object(y.jsx)("div",{children:Object(y.jsx)("h3",{children:"Films list"})}),Object(y.jsx)(T.a,{container:!0,spacing:3,className:"movie-app",children:null===t||void 0===t?void 0:t.map((function(t){return Object(y.jsx)(T.a,{item:!0,xs:6,sm:4,children:Object(y.jsxs)(G.a,{className:c.root,children:[Object(y.jsx)(l.b,{className:"thumbnail",to:"/movies/".concat(t.imdbID),children:Object(y.jsxs)(V.a,{onClick:function(){return e(F(t.imdbID))},children:["N/A"===t.Poster?Object(y.jsx)(q.a,{component:"img",alt:"Poster not Available",height:"140",image:"notavailable.png",title:"Poster not Available"}):Object(y.jsx)(q.a,{component:"img",alt:"".concat(t.Title),height:"140",image:"".concat(t.Poster),title:"".concat(t.Title)}),Object(y.jsxs)(U.a,{children:[Object(y.jsx)(z.a,{gutterBottom:!0,variant:"h5",component:"h2",children:t.Title}),Object(y.jsxs)(z.a,{variant:"body2",color:"textSecondary",component:"p",children:[Object(y.jsx)("br",{}),"Released: ",t.Year,Object(y.jsx)("br",{}),"Type: ",t.Type]})]})]})}),Object(y.jsx)(W.a,{disableSpacing:!0,children:Object(y.jsx)(H.a,{"aria-label":"add to favorites",onClick:function(){return function(t){n.some((function(e){return e.imdbID===t.imdbID}))?(console.log("=== favoritesList includes movie in FAVORITES ===> removing ",t),e(L(t))):(console.log("=== favoritesList does not include movie ===> adding ",t),e(A(t)))}(t)},children:Object(y.jsx)(J.a,{})})})]})},t.imdbID)}))})]})},Q=function(e){var t=e.props;console.log(t.match.params.id);var n=Object(O.b)(),c=(t.match.params.id,Object(O.c)((function(e){return e.movies.selectedMovie}))),a=c.Actors,o=c.Title,i=c.Awards,r=c.Country,s=c.Director,j=c.Genre,b=c.Language,d=c.Poster,h=c.Plot,m=(c.Ratings,c.Released,c.Type,c.Year,c.Writer,c.imdbRating,Object(_.a)({root:{maxWidth:250,minWidth:180},bullet:{display:"inline-block",margin:"0 2px",transform:"scale(0.8)"},title:{fontSize:14},pos:{marginBottom:12}})());m.bullet;return Object(y.jsxs)("div",{className:"movieDetailsContainer",children:[Object(y.jsx)("div",{className:"movieDetailsBox",children:Object(y.jsxs)(G.a,{className:m.root,children:[Object(y.jsxs)(V.a,{children:[Object(y.jsx)(l.b,{className:"thumbnail",to:"/movies/".concat(o),children:"N/A"===d?Object(y.jsx)(q.a,{component:"img",alt:"Poster not Available",height:"140",image:"notavailable.png",title:"Poster not Available"}):Object(y.jsx)(q.a,{component:"img",alt:"".concat(o),height:"400",image:"".concat(d),title:"".concat(o)})}),Object(y.jsxs)(U.a,{children:[Object(y.jsx)(z.a,{gutterBottom:!0,variant:"h5",component:"h2",children:o}),Object(y.jsxs)(z.a,{variant:"body2",color:"textSecondary",component:"p",children:["Director: ",s," ",Object(y.jsx)("br",{}),"Actors: ",a,Object(y.jsx)("br",{}),"Awards: ",i]})]})]}),Object(y.jsx)(W.a,{disableSpacing:!0,children:Object(y.jsx)(H.a,{"aria-label":"add to favorites",children:Object(y.jsx)(J.a,{onClick:function(){return n(A(c))}})})})]})}),Object(y.jsx)("div",{children:Object(y.jsxs)(G.a,{className:m.root,variant:"outlined",children:[Object(y.jsxs)(U.a,{children:[Object(y.jsx)(z.a,{variant:"h5",component:"h2",children:"Plot"}),Object(y.jsx)(z.a,{className:m.pos,color:"textSecondary",children:h}),Object(y.jsxs)(z.a,{variant:"body2",component:"p",children:["Genre:",j," ",Object(y.jsx)("br",{})]}),Object(y.jsxs)(z.a,{variant:"body2",component:"p",children:["Country:",r," ",Object(y.jsx)("br",{})]}),Object(y.jsxs)(z.a,{variant:"body2",component:"p",children:["Language:",b," ",Object(y.jsx)("br",{})]}),Object(y.jsxs)(z.a,{variant:"body2",component:"p",children:["Awards:",i," ",Object(y.jsx)("br",{})]})]}),Object(y.jsx)(W.a,{children:Object(y.jsx)(u.a,{size:"small",children:"Learn More"})})]})})]})},X=function(e){var t=Object(i.useState)(""),n=Object(I.a)(t,2),c=n[0],a=n[1],o=Object(O.b)();return Object(i.useEffect)((function(){""!==c&&d.a.get("https://www.omdbapi.com/?apikey=1663c88f&s=".concat(c)).then((function(e){var t=[e.data.Search,e.data.totalResults],n=t[0];console.log("MOVIES_LIST ==> ",n),o(M(n))})).catch((function(e){console.log(e)}))}),[c]),Object(y.jsxs)("div",{children:[Object(y.jsx)(N,{handleChange:function(e){var t=e.target.value;console.log(c),a(t),console.log(c)}}),Object(y.jsx)(K,{})]})},Z=n(77),$=n.n(Z),ee=Object(m.a)({middleware:function(e){return e().concat($.a)},reducer:{user:f,movies:P,favorites:R}});function te(){return Object(y.jsx)(r.a.Fragment,{children:Object(y.jsx)("section",{className:"content"})})}function ne(){return Object(y.jsxs)(r.a.Fragment,{children:[Object(y.jsx)(S,{}),Object(y.jsx)("section",{className:"content"}),Object(y.jsx)(E,{})]})}function ce(){var e=Object(O.b)(),t=Object(O.c)((function(e){return e.favorites})),n=Object(_.a)({root:{maxWidth:250,minWidth:180},bullet:{display:"inline-block",margin:"0 2px",transform:"scale(0.8)"},title:{fontSize:14},pos:{marginBottom:12},favoriteButton:{color:"#f50057"}})();n.bullet;return Object(y.jsxs)(D.a,{maxWidth:"md",children:[Object(y.jsx)("div",{children:Object(y.jsx)("h3",{children:"These are your Favorites ... "})}),Object(y.jsx)(T.a,{container:!0,spacing:3,className:"movie-app",children:null===t||void 0===t?void 0:t.map((function(c){return Object(y.jsx)("div",{children:Object(y.jsx)(T.a,{item:!0,xs:6,sm:4,children:Object(y.jsxs)(G.a,{className:n.root,children:[Object(y.jsx)(l.b,{className:"thumbnail",to:"/movies/".concat(c.imdbID),children:Object(y.jsxs)(V.a,{onClick:function(){return e(F(c.imdbID))},children:["N/A"===c.Poster?Object(y.jsx)(q.a,{component:"img",alt:"Poster not Available",height:"140",image:"notavailable.png",title:"Poster not Available"}):Object(y.jsx)(q.a,{component:"img",alt:"".concat(c.Title),height:"140",image:"".concat(c.Poster),title:"".concat(c.Title)}),Object(y.jsxs)(U.a,{children:[Object(y.jsx)(z.a,{gutterBottom:!0,variant:"h5",component:"h2",children:c.Title}),Object(y.jsxs)(z.a,{variant:"body2",color:"textSecondary",component:"p",children:[Object(y.jsx)("br",{}),"Released: ",c.Year,Object(y.jsx)("br",{}),"Type: ",c.Type]})]})]})}),Object(y.jsx)(W.a,{disableSpacing:!0,children:Object(y.jsx)(H.a,{"aria-label":"add to favorites",children:Object(y.jsx)(J.a,{className:n.favoriteButton,onClick:function(){return function(n){t.includes(n)?(console.log("=== TOGGLING MOVIE FROM FAVORITES === ",n),e(L(n))):e(A(n))}(c)}})})})]})})},c.imdbID)}))})]})}var ae=function(e){var t=i.useState(""),n=Object(I.a)(t,2),c=n[0],a=n[1];return{value:c,onChange:function(e){var t=e.target.value;return a(t)},name:e}},oe=n(156),ie=n(157),re=Object(_.a)({container:{display:"flex",marginTop:200,padding:50,alignItems:"center"},btnLogin:{margin:10,marginTop:30},snackbar:{marginTop:80,whiteSpace:"pre-wrap"}});function se(){var e=re(),t=Object(O.b)(),n=Object(j.g)(),c=ae("email"),a=ae("password"),o=Object(O.c)((function(e){return e.user})),s=Object(i.useState)(""),l=Object(I.a)(s,2),b=l[0],u=l[1],h=Object(i.useState)({open:!1}),m=Object(I.a)(h,2),p=m[0],f=m[1];r.a.useEffect((function(){o.id&&n.push("/")}),[o.id]),r.a.useEffect((function(){b&&f({open:!0})}),[b]);return Object(y.jsx)("div",{children:o.id?Object(y.jsx)(ce,{}):Object(y.jsxs)(y.Fragment,{children:[b?Object(y.jsx)(oe.a,{open:p.open,anchorOrigin:{vertical:"top",horizontal:"center"},className:e.snackbar,children:Object(y.jsx)(ie.a,{severity:"error",onClose:function(e,t){f({open:!1}),u("")},children:Object(y.jsx)("div",{style:{display:"flex",flexFlow:"column",alignItems:"center"},children:b})})}):null,Object(y.jsxs)("div",{className:"form-container",children:[Object(y.jsx)("div",{className:"form-title",children:Object(y.jsx)("h2",{children:"Sign in to your account"})}),Object(y.jsxs)("form",{onSubmit:function(e){return e.preventDefault(),d.a.post("http://localhost:3001/api/login",{email:c.value,password:a.value}).then((function(e){t(x(e.data))})).catch((function(e){console.log("ENTRE EN ERROR => ",e),u("Invalid credentials. \nPlease, verify and try again..."),console.log(e)}))},className:"form-signup",children:[Object(y.jsx)("div",{children:Object(y.jsx)("input",{type:"text",name:"username",placeholder:"Email address",value:c.value,onChange:c.onChange,required:!0})}),Object(y.jsx)("div",{children:Object(y.jsx)("input",{type:"password",name:"password",placeholder:"your password",onChange:a.onChange,value:a.value,required:!0})}),Object(y.jsx)("div",{children:Object(y.jsx)("button",{type:"submit",children:"Log in"})})]})]})]})})}function le(){var e=Object(O.b)(),t=ae("email"),n=ae("password"),c=ae("name");Object(O.c)((function(e){return e.user}));return Object(y.jsxs)("div",{children:[Object(y.jsx)("div",{children:Object(y.jsx)("h2",{children:"Sign in to your account"})}),Object(y.jsxs)("form",{onSubmit:function(a){a.preventDefault(),e(p({name:c.value,email:t.value,password:n.value}))},className:"form-signup",children:[Object(y.jsx)("div",{children:Object(y.jsx)("input",{type:"text",name:"username",placeholder:"your full name",value:c.value,onChange:c.onChange,required:!0})}),Object(y.jsx)("div",{children:Object(y.jsx)("input",{type:"email",name:"username",placeholder:"your email address",value:t.value,onChange:t.onChange,required:!0})}),Object(y.jsx)("div",{children:Object(y.jsx)("input",{type:"password",name:"password",placeholder:"your password",onChange:n.onChange,value:n.value,required:!0})}),Object(y.jsx)("div",{children:Object(y.jsx)("button",{type:"submit",children:"Log in"})})]})]})}n(120);var je=document.getElementById("root"),be=Object(y.jsx)(r.a.StrictMode,{children:Object(y.jsx)(l.a,{children:Object(y.jsx)(O.a,{store:ee,children:Object(y.jsx)(j.b,{path:"/",component:function(){var e=Object(O.b)();return Object(O.c)((function(e){return e.user})),Object(i.useEffect)((function(){d.a.get("/api/me").then((function(e){return e.data})).then((function(t){console.log("found user ".concat(t.email)),e(x(t))})).catch((function(e){console.log(e)}))}),[]),Object(y.jsxs)(r.a.Fragment,{children:[Object(y.jsx)(S,{}),Object(y.jsx)("section",{className:"content",children:Object(y.jsxs)(j.d,{children:[Object(y.jsx)(j.b,{exact:!0,path:"/movies",render:function(){return Object(y.jsx)(X,{})}}),Object(y.jsx)(j.b,{path:"/movies/:id",render:function(e){return Object(y.jsx)(Q,{props:e})}}),Object(y.jsx)(j.b,{path:"/users/favs",render:function(){return Object(y.jsx)(ce,{})}}),Object(y.jsx)(j.b,{path:"/users",render:function(){return Object(y.jsx)(te,{})}}),Object(y.jsx)(j.b,{path:"/users/:userId",render:function(){return Object(y.jsx)(ne,{})}}),Object(y.jsx)(j.b,{path:"/Login",render:function(){return Object(y.jsx)(se,{})}}),Object(y.jsx)(j.b,{path:"/Signup",render:function(){return Object(y.jsx)(le,{})}}),Object(y.jsx)(j.a,{path:"/",to:"/movies"})]})}),Object(y.jsx)(E,{})]})}})})})});Object(s.render)(be,je)}},[[121,1,2]]]);
//# sourceMappingURL=main.fd8aaaad.chunk.js.map