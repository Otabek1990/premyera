(this.webpackJsonppremyera=this.webpackJsonppremyera||[]).push([[0],{117:function(e,t,i){},119:function(e,t,i){},120:function(e,t,i){},121:function(e,t,i){},122:function(e,t,i){},124:function(e,t,i){},147:function(e,t,i){},148:function(e,t,i){},149:function(e,t,i){},150:function(e,t,i){},151:function(e,t,i){},152:function(e,t,i){},153:function(e,t,i){},154:function(e,t,i){},155:function(e,t,i){},156:function(e,t,i){},157:function(e,t,i){"use strict";i.r(t);var s=i(0),c=i.n(s),a=i(26),n=i.n(a),r=(i(83),i(84),i(4)),l=(i(85),i(5)),j=(i(76),i(1)),o={user:JSON.parse(localStorage.getItem("user")),isFetching:!1,error:!1},b=Object(s.createContext)(o),d=i.p+"static/media/premierLogoo.8eda71f0.webp",h=i(184),O=i(183),x=i(181),u=(i(87),i(179)),m=i(65),v=i.n(m),p=function(){var e=Object(s.useState)(!1),t=Object(r.a)(e,2),i=t[0],c=t[1];return Object(j.jsxs)("main",{children:[Object(j.jsx)(O.a,{children:i&&Object(j.jsxs)(x.a.aside,{initial:{width:0},animate:{width:200},exit:{width:200},children:[Object(j.jsx)(v.a,{style:{fontSize:30},className:"menu",onClick:function(){return c(!1)}}),Object(j.jsxs)("div",{className:"nav-container",children:[Object(j.jsx)(x.a.p,{initial:"hidden",animate:"visible",variants:{hidden:{x:0,opacity:0},visible:{x:10,opacity:1,transition:{duration:.5}}},whileHover:{scale:[1,1.1,1],transition:{duration:.5}},children:Object(j.jsx)(l.b,{to:"/movies",className:"link",children:Object(j.jsx)("span",{className:"navbarmainLinks",children:"Filmlar"})})}),Object(j.jsx)(x.a.p,{initial:"hidden",animate:"visible",variants:{hidden:{x:0,opacity:0},visible:{x:10,opacity:1,transition:{duration:.5}}},whileHover:{scale:[1,1.1,1],transition:{duration:.5}},children:Object(j.jsx)(l.b,{to:"/series",className:"link",children:Object(j.jsx)("span",{className:"navbarmainLinks",children:"Seriallar"})})}),Object(j.jsx)(x.a.p,{initial:"hidden",animate:"visible",variants:{hidden:{x:0,opacity:0},visible:{x:10,opacity:1,transition:{duration:.5}}},whileHover:{scale:[1,1.1,1],transition:{duration:.5}},children:Object(j.jsx)(l.b,{to:"/watch",className:"link",children:Object(j.jsx)("span",{className:"navbarmainLinks",children:"Tomosha qilish"})})})]})]})}),Object(j.jsx)("div",{children:Object(j.jsx)(u.a,{className:"menu",onClick:function(){return c(!0)},style:{display:"".concat(i?"none":"block"),fontSize:40}})})]})},f=function(){var e=Object(s.useState)(!1),t=Object(r.a)(e,2),i=t[0],c=t[1],a=Object(s.useContext)(b).dispatch,n=Object(s.useState)(window.innerWidth<700),o=Object(r.a)(n,2),O=o[0],x=o[1],u=Object(s.useState)(null),m=Object(r.a)(u,2);m[0],m[1];return window.onscroll=function(){return c(0!==window.pageYOffset),function(){return window.onscroll=null}},Object(s.useEffect)((function(){window.addEventListener("resize",(function(){var e=window.innerWidth<700;e!==O&&x(e)}),!1)}),[O]),Object(j.jsx)("div",{className:i?"navbar scrolled":"navbar",children:O?Object(j.jsxs)("div",{className:"menu_container",children:[Object(j.jsx)(p,{}),Object(j.jsx)(l.b,{to:"/",className:"link",style:{margin:" 20px 10px"},children:Object(j.jsx)("img",{src:d,alt:""})})]}):Object(j.jsxs)("div",{className:"container",children:[Object(j.jsxs)("div",{className:"left",children:[Object(j.jsx)(l.b,{to:"/",className:"link",children:Object(j.jsx)("img",{src:d,alt:""})}),Object(j.jsxs)("div",{style:{display:"flex"},children:[Object(j.jsx)(l.b,{to:"/movies",className:"link",children:Object(j.jsx)("span",{className:"navbarmainLinks",children:"Filmlar"})}),Object(j.jsx)(l.b,{to:"/series",className:"link",children:Object(j.jsx)("span",{className:"navbarmainLinks",children:"Seriallar"})}),Object(j.jsx)(l.b,{to:"/watch",className:"link",children:Object(j.jsx)("span",{className:"navbarmainLinks",children:"Tomosha qilish"})})]})]}),Object(j.jsx)("div",{className:"right",children:Object(j.jsxs)("div",{className:"profile",children:[Object(j.jsx)(h.a,{alt:"Otabek",style:{cursor:"pointer",width:"30px",height:"30px"}}),Object(j.jsxs)("div",{className:"options",children:[Object(j.jsx)("span",{children:"Profile"}),Object(j.jsx)("span",{onClick:function(){return a({type:"LOGOUT"})},children:"Logout"})]})]})})]})})},g=(i(37),i(117),i(118),i(182)),y=i.p+"static/media/rangsiztushlar.08387bb8.jpg",N=i.p+"static/media/kino2.70a1be23.jpg",k=i.p+"static/media/kino3.a1db78be.jpg",z=i.p+"static/media/kino5.b79b3fea.jpg";function S(e){e.type,e.setGenre;return Object(j.jsx)("div",{className:"banner",children:Object(j.jsxs)(g.a,{nextLabel:"",prevLabel:"",fade:!0,pause:!1,children:[Object(j.jsx)(g.a.Item,{interval:3e3,children:Object(j.jsx)("img",{className:"d-block w-100",src:y,alt:"First slide"})}),Object(j.jsx)(g.a.Item,{interval:3e3,children:Object(j.jsx)("img",{className:"d-block w-100",src:N,alt:"Second slide"})}),Object(j.jsx)(g.a.Item,{interval:3e3,children:Object(j.jsx)("img",{className:"d-block w-100",src:k,alt:"Third slide"})}),Object(j.jsx)(g.a.Item,{interval:3e3,children:Object(j.jsx)("img",{className:"d-block w-100",src:z,alt:"Fourth slide"})})]})})}i(119);function w(){return Object(j.jsxs)("div",{className:"footer",children:[Object(j.jsx)("h1",{children:"Savolingiz bormi?Bizga aloqaga chiqing."}),Object(j.jsx)("div",{className:"break",children:Object(j.jsxs)("div",{className:"row",children:[Object(j.jsxs)("div",{className:"column",children:[Object(j.jsx)(l.b,{style:{textDecoration:"none"},children:Object(j.jsx)("span",{children:"FAQ"})}),Object(j.jsxs)(l.b,{style:{textDecoration:"none"},children:[Object(j.jsx)("span",{children:"Investor Relationship"})," "]}),Object(j.jsx)(l.b,{style:{textDecoration:"none"},children:Object(j.jsx)("span",{children:"Ways to Watch"})}),Object(j.jsx)(l.b,{style:{textDecoration:"none"},children:Object(j.jsx)("span",{children:"Corporate Information"})})]}),Object(j.jsxs)("div",{className:"column",children:[Object(j.jsx)(l.b,{style:{textDecoration:"none"},children:Object(j.jsx)("span",{children:"Help Centre"})}),Object(j.jsxs)(l.b,{style:{textDecoration:"none"},children:[Object(j.jsx)("span",{children:"Jobs"})," "]}),Object(j.jsx)(l.b,{style:{textDecoration:"none"},children:Object(j.jsx)("span",{children:"Terms of Use"})}),Object(j.jsx)(l.b,{style:{textDecoration:"none"},children:Object(j.jsx)("span",{children:"Contact Us"})})]})]})}),Object(j.jsx)("p",{children:"\xa9 2021 Premyera.uz, Tashkent.Barcha huquqlar himoya qilingan"})]})}i(120),i(121);var M=i.p+"static/media/bunny.2c92d012.mp4";function q(e){var t=e.index,i=e.item,c=Object(s.useState)(!1),a=Object(r.a)(c,2),n=a[0],o=(a[1],Object(s.useState)(!1)),b=Object(r.a)(o,2),d=(b[0],b[1],Object(s.useState)({})),h=Object(r.a)(d,2);h[0],h[1];return Object(j.jsxs)(l.b,{to:"/".concat(i.type,"/").concat(i.title),children:[Object(j.jsx)("div",{className:"listItem",style:{left:n&&225*t-50+2.5*t},children:Object(j.jsx)("img",{src:i.foto,alt:""})}),Object(j.jsxs)("p",{children:[" ",i.title]})]})}i(122);function C(e){var t=e.genre,i=e.items,c=Object(s.useState)(!1),a=Object(r.a)(c,2),n=(a[0],a[1],Object(s.useState)(0)),l=Object(r.a)(n,2),o=(l[0],l[1],Object(s.useState)(window.innerWidth/230)),b=Object(r.a)(o,2);b[0],b[1];return Object(j.jsxs)("div",{className:"list",children:[Object(j.jsxs)("span",{className:"listTitle",children:[t," "]}),Object(j.jsx)("div",{className:"wrapper",children:Object(j.jsx)("div",{className:"container",children:i.map((function(e){return Object(j.jsx)(q,{item:e})}))})})]})}var _=i(13),K=function(e){var t=e.type,i=Object(s.useState)([]),c=Object(r.a)(i,2),a=(c[0],c[1],Object(s.useState)(null)),n=Object(r.a)(a,2),l=(n[0],n[1]),o=Object(_.b)((function(e){return e.uzbekMovies.uzbMovies})),b=Object(_.b)((function(e){return e.uzbekSerials.uzbSerials})),d=Object(_.b)((function(e){return e.kidsMovies.kidsMovies})),h=Object(_.b)((function(e){return e.foreignMovies.foreignMovies})),O=Object(_.b)((function(e){return e.uzbKonserts.uzbKonserts}));return Object(j.jsxs)("div",{className:"home",children:[Object(j.jsx)(f,{}),Object(j.jsx)(S,{type:t,setGenre:l}),Object(j.jsx)(C,{genre:"Uzbekcha filmlar",items:o}),Object(j.jsx)(C,{genre:"Uzbekcha seriallar",items:b}),Object(j.jsx)(C,{genre:"Bollar uchun filmlar",items:d}),Object(j.jsx)(C,{genre:"Chet el seriallari",items:h}),Object(j.jsx)(C,{genre:"Konsertlar",items:O}),Object(j.jsx)(w,{})]})},T=(i(124),i(9));i(35),i(36);function F(){var e=Object(s.useState)(""),t=Object(r.a)(e,2),i=(t[0],t[1],Object(s.useState)(!1)),c=Object(r.a)(i,2),a=c[0],n=c[1],o=Object(T.h)(),b=o.title,d=o.type,h=Object(_.b)((function(e){return e.uzbekMovies.uzbMovies})),O=Object(_.b)((function(e){return e.uzbekSerials.uzbSerials})),x=Object(_.b)((function(e){return e.kidsMovies.kidsMovies})),u=Object(_.b)((function(e){return e.foreignMovies.foreignMovies})),m=Object(_.b)((function(e){return e.uzbKonserts.uzbKonserts})),v="uzbKino"===d?h:"uzbSerial"===d?O:"bolalar"===d?x:"chetel"===d?u:"uzbKonsert"===d?m:[],p=(Object(T.f)(),null===v||void 0===v?void 0:v.filter((function(e){return e.title===b})));console.log(v),console.log(p);return Object(j.jsxs)("div",{children:[Object(j.jsx)(f,{className:"movie_navbar"}),Object(j.jsxs)("div",{className:"movie_page",children:[null===p||void 0===p?void 0:p.map((function(e){return Object(j.jsx)("div",{children:Object(j.jsxs)("div",{className:"movie_info",children:[Object(j.jsx)("img",{className:"movie_poster_img",src:e.foto,alt:""}),Object(j.jsxs)("div",{className:"movie_description",children:[Object(j.jsx)("p",{children:Object(j.jsxs)("span",{children:["Movie title:",e.title]})}),Object(j.jsxs)("p",{children:["Release date: ",Object(j.jsx)("span",{children:"22.22.1990"})]}),Object(j.jsxs)("p",{children:["Vote average: ",Object(j.jsx)("span",{children:" vote average 9.9"})]}),Object(j.jsxs)("p",{children:["Overview: ",Object(j.jsx)("span",{children:"Film haqida"})]}),Object(j.jsxs)("div",{className:"btns",children:[Object(j.jsx)("button",{className:"btn",onClick:function(){return n(!0)},children:"Watch Trailer"}),Object(j.jsx)(l.b,{to:"/payment",children:Object(j.jsx)("button",{className:"btn",children:"Watch full movie"})}),Object(j.jsx)("br",{})]})]})]})})})),a&&Object(j.jsxs)("div",{className:"trailer",children:[Object(j.jsx)("h1",{children:"Trailer"}),Object(j.jsx)("video",{width:"1200",height:"2s40",src:M,autoPlay:!0,progress:!0,controls:!0})]})]}),Object(j.jsx)(w,{})]})}i(147);function W(){var e=Object(s.useState)(""),t=Object(r.a)(e,2),i=(t[0],t[1],Object(s.useState)(!1)),c=Object(r.a)(i,2),a=c[0],n=c[1],l=Object(T.h)(),o=l.title,b=l.type;console.log(o,b);var d=Object(T.f)();return Object(j.jsxs)("div",{children:[Object(j.jsx)(f,{className:"movie_navbar"}),Object(j.jsxs)("div",{className:"movie_page",children:[Object(j.jsx)("div",{children:Object(j.jsxs)("div",{className:"movie_info",children:[Object(j.jsx)("img",{className:"movie_poster_img",src:k,alt:""}),Object(j.jsxs)("div",{className:"movie_description",children:[Object(j.jsxs)("p",{children:[" ","Name:"," ",Object(j.jsx)("span",{children:"Movie title"})]}),Object(j.jsxs)("p",{children:["Release date: ",Object(j.jsx)("span",{children:"22.22.1990"})]}),Object(j.jsxs)("p",{children:["Vote average: ",Object(j.jsx)("span",{children:" vote average 9.9"})]}),Object(j.jsxs)("p",{children:["Overview: ",Object(j.jsx)("span",{children:"Film haqida"})," "]}),Object(j.jsxs)("div",{className:"btns",children:[Object(j.jsx)("button",{className:"btn",onClick:function(){return n(!0)},children:"Watch Trailer"}),Object(j.jsx)("button",{className:"btn",onClick:function(){d.push("login")},children:"Watch full movie"}),Object(j.jsx)("br",{})]})]})]})}),a&&Object(j.jsxs)("div",{className:"trailer",children:[Object(j.jsx)("h1",{children:"Trailer"}),Object(j.jsx)("video",{width:"1200",height:"2s40",src:M,autoPlay:!0,progress:!0,controls:!0})]})]}),Object(j.jsx)(w,{})]})}i(148);function I(){var e=Object(s.useState)(""),t=Object(r.a)(e,2),i=(t[0],t[1],Object(s.useState)(!1)),c=Object(r.a)(i,2),a=c[0],n=c[1],l=Object(T.h)(),o=l.title,b=l.type;console.log(o,b);var d=Object(T.f)();return Object(j.jsxs)("div",{children:[Object(j.jsx)(f,{className:"movie_navbar"}),Object(j.jsxs)("div",{className:"movie_page",children:[Object(j.jsx)("div",{children:Object(j.jsxs)("div",{className:"movie_info",children:[Object(j.jsx)("img",{className:"movie_poster_img",src:k,alt:""}),Object(j.jsxs)("div",{className:"movie_description",children:[Object(j.jsxs)("p",{children:[" ","Name:"," ",Object(j.jsx)("span",{children:"Movie title"})]}),Object(j.jsxs)("p",{children:["Release date: ",Object(j.jsx)("span",{children:"22.22.1990"})]}),Object(j.jsxs)("p",{children:["Vote average: ",Object(j.jsx)("span",{children:" vote average 9.9"})]}),Object(j.jsxs)("p",{children:["Overview: ",Object(j.jsx)("span",{children:"Film haqida"})," "]}),Object(j.jsxs)("div",{className:"btns",children:[Object(j.jsx)("button",{className:"btn",onClick:function(){return n(!0)},children:"Watch Trailer"}),Object(j.jsx)("button",{className:"btn",onClick:function(){d.push("login")},children:"Watch full movie"}),Object(j.jsx)("br",{})]})]})]})}),a&&Object(j.jsxs)("div",{className:"trailer",children:[Object(j.jsx)("h1",{children:"Trailer"}),Object(j.jsx)("video",{width:"1200",height:"2s40",src:M,autoPlay:!0,progress:!0,controls:!0})]})]}),Object(j.jsx)(w,{})]})}i(149);function U(){var e=Object(s.useState)(""),t=Object(r.a)(e,2),i=(t[0],t[1],Object(s.useState)(!1)),c=Object(r.a)(i,2),a=c[0],n=c[1],l=Object(T.h)(),o=l.title,b=l.type;console.log(o,b);var d=Object(T.f)();return Object(j.jsxs)("div",{children:[Object(j.jsx)(f,{className:"movie_navbar"}),Object(j.jsxs)("div",{className:"movie_page",children:[Object(j.jsx)("div",{children:Object(j.jsxs)("div",{className:"movie_info",children:[Object(j.jsx)("img",{className:"movie_poster_img",src:k,alt:""}),Object(j.jsxs)("div",{className:"movie_description",children:[Object(j.jsxs)("p",{children:[" ","Name:"," ",Object(j.jsx)("span",{children:"Movie title"})]}),Object(j.jsxs)("p",{children:["Release date: ",Object(j.jsx)("span",{children:"22.22.1990"})]}),Object(j.jsxs)("p",{children:["Vote average: ",Object(j.jsx)("span",{children:" vote average 9.9"})]}),Object(j.jsxs)("p",{children:["Overview: ",Object(j.jsx)("span",{children:"Film haqida"})," "]}),Object(j.jsxs)("div",{className:"btns",children:[Object(j.jsx)("button",{className:"btn",onClick:function(){return n(!0)},children:"Watch Trailer"}),Object(j.jsx)("button",{className:"btn",onClick:function(){d.push("login")},children:"Watch full movie"}),Object(j.jsx)("br",{})]})]})]})}),a&&Object(j.jsxs)("div",{className:"trailer",children:[Object(j.jsx)("h1",{children:"Trailer"}),Object(j.jsx)("video",{width:"1200",height:"2s40",src:M,autoPlay:!0,progress:!0,controls:!0})]})]}),Object(j.jsx)(w,{})]})}i(150);function L(){var e=Object(s.useState)(""),t=Object(r.a)(e,2),i=(t[0],t[1],Object(s.useState)(!1)),c=Object(r.a)(i,2),a=c[0],n=c[1],l=Object(T.h)(),o=l.title,b=l.type;console.log(o,b);var d=Object(T.f)();return Object(j.jsxs)("div",{children:[Object(j.jsx)(f,{className:"movie_navbar"}),Object(j.jsxs)("div",{className:"movie_page",children:[Object(j.jsx)("div",{children:Object(j.jsxs)("div",{className:"movie_info",children:[Object(j.jsx)("img",{className:"movie_poster_img",src:k,alt:""}),Object(j.jsxs)("div",{className:"movie_description",children:[Object(j.jsxs)("p",{children:[" ","Name:"," ",Object(j.jsx)("span",{children:"Movie title"})]}),Object(j.jsxs)("p",{children:["Release date: ",Object(j.jsx)("span",{children:"22.22.1990"})]}),Object(j.jsxs)("p",{children:["Vote average: ",Object(j.jsx)("span",{children:" vote average 9.9"})]}),Object(j.jsxs)("p",{children:["Overview: ",Object(j.jsx)("span",{children:"Film haqida"})," "]}),Object(j.jsxs)("div",{className:"btns",children:[Object(j.jsx)("button",{className:"btn",onClick:function(){return n(!0)},children:"Watch Trailer"}),Object(j.jsx)("button",{className:"btn",onClick:function(){d.push("login")},children:"Watch full movie"}),Object(j.jsx)("br",{})]})]})]})}),a&&Object(j.jsxs)("div",{className:"trailer",children:[Object(j.jsx)("h1",{children:"Trailer"}),Object(j.jsx)("video",{width:"1200",height:"2s40",src:M,autoPlay:!0,progress:!0,controls:!0})]})]}),Object(j.jsx)(w,{})]})}i(151);function D(){var e=Object(s.useState)(""),t=Object(r.a)(e,2),i=(t[0],t[1],Object(s.useState)(!1)),c=Object(r.a)(i,2),a=c[0],n=c[1],l=Object(T.h)(),o=l.title,b=l.type;console.log(o,b);var d=Object(T.f)();return Object(j.jsxs)("div",{children:[Object(j.jsx)(f,{className:"movie_navbar"}),Object(j.jsxs)("div",{className:"movie_page",children:[Object(j.jsx)("div",{children:Object(j.jsxs)("div",{className:"movie_info",children:[Object(j.jsx)("img",{className:"movie_poster_img",src:k,alt:""}),Object(j.jsxs)("div",{className:"movie_description",children:[Object(j.jsxs)("p",{children:[" ","Name:"," ",Object(j.jsx)("span",{children:"Movie title"})]}),Object(j.jsxs)("p",{children:["Release date: ",Object(j.jsx)("span",{children:"22.22.1990"})]}),Object(j.jsxs)("p",{children:["Vote average: ",Object(j.jsx)("span",{children:" vote average 9.9"})]}),Object(j.jsxs)("p",{children:["Overview: ",Object(j.jsx)("span",{children:"Film haqida"})," "]}),Object(j.jsxs)("div",{className:"btns",children:[Object(j.jsx)("button",{className:"btn",onClick:function(){return n(!0)},children:"Watch Trailer"}),Object(j.jsx)("button",{className:"btn",onClick:function(){d.push("login")},children:"Watch full movie"}),Object(j.jsx)("br",{})]})]})]})}),a&&Object(j.jsxs)("div",{className:"trailer",children:[Object(j.jsx)("h1",{children:"Trailer"}),Object(j.jsx)("video",{width:"1200",height:"2s40",src:M,autoPlay:!0,progress:!0,controls:!0})]})]}),Object(j.jsx)(w,{})]})}var P=i(34),A=i.n(P),B=i(47);i(152);function E(){var e=Object(s.useState)(""),t=Object(r.a)(e,2),i=(t[0],t[1]),c=Object(s.useState)(""),a=Object(r.a)(c,2),n=(a[0],a[1]),o=Object(s.useState)(""),b=Object(r.a)(o,2),d=(b[0],b[1]),h=Object(T.f)(),O=function(){var e=Object(B.a)(A.a.mark((function e(t){return A.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t.preventDefault(),h.push("/payment");case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(j.jsxs)("div",{children:[Object(j.jsx)(f,{}),Object(j.jsx)("div",{className:"register",children:Object(j.jsx)("div",{className:"container",children:Object(j.jsxs)("form",{children:[Object(j.jsx)("h1",{children:"Ro'yhatdan o'tish"}),Object(j.jsx)("label",{children:"E-mail yoki telefon raqami:"}),Object(j.jsx)("input",{type:"email",placeholder:"Email yoki tel raqami ",onChange:function(e){return i(e.target.value)}}),Object(j.jsx)("label",{children:"Parol:"}),Object(j.jsx)("input",{type:"password",placeholder:"parol",onChange:function(e){return n(e.target.value)}}),Object(j.jsx)("label",{children:"Ism:"}),Object(j.jsx)("input",{type:"text",placeholder:"Ism",onChange:function(e){return d(e.target.value)}}),Object(j.jsx)("label",{children:"Telefon:"}),Object(j.jsx)("input",{type:"text",placeholder:"Tel raqami",onChange:function(e){return i(e.target.value)}}),Object(j.jsxs)("div",{className:"verify_terms",children:[Object(j.jsx)("input",{type:"checkbox"}),Object(j.jsxs)("p",{children:[Object(j.jsx)(l.b,{to:"/termsOfUse",children:"Xizmat ko'rsatish tartib va shartlariga"}),Object(j.jsx)("span",{children:"roziman"})]})]}),Object(j.jsx)("button",{onClick:O,className:"loginButton",children:"Ro'yxatdan o'tish"})]})})})]})}i(153);function R(){return Object(j.jsxs)("div",{className:"terms",children:[Object(j.jsx)(l.b,{to:"/",children:"Asosiy sahifa"}),"Bu yerda foydalanish shartlari boladi"]})}i(154);function G(){return Object(j.jsxs)("div",{children:[Object(j.jsx)(f,{}),Object(j.jsx)("div",{className:"payment",children:Object(j.jsxs)("div",{className:"container",children:[Object(j.jsx)("h1",{children:"Filmni tomosha qilish uchun to'lov "}),Object(j.jsx)("p",{children:"Buyurtma raqami: 500000"}),Object(j.jsx)("p",{children:"Summasi: 3000"}),Object(j.jsx)("p",{children:"Ushbu to'lovni amalga oshirish uchun quyidagi to'lov turlaridan birini tanlang va Siz to'lov sahifasiga o'tasiz."}),Object(j.jsx)("button",{style:{backgroundColor:"white"},children:"Paynet orqali to'lash"}),Object(j.jsx)("button",{style:{backgroundColor:"gray"},children:"PAYME orqali to'lash"}),Object(j.jsx)("button",{style:{backgroundColor:"royalblue"},children:"CLICK orqali to'lash"}),Object(j.jsx)("button",{style:{backgroundColor:"green"},children:"UPAY orqali to'lash"}),Object(j.jsx)("button",{style:{backgroundColor:"orange"},children:"VISA orqali to'lash"}),Object(j.jsxs)("span",{children:["Barcha savollar bo'yicha ",Object(j.jsx)("strong",{children:"admin@premyera.uz "}),"manziliga murojaat qiling."]})]})})]})}var H=i(180);i(155);function V(){Object(T.g)().movie;return Object(j.jsxs)("div",{className:"watch",children:[Object(j.jsx)(l.b,{to:"/",children:Object(j.jsxs)("div",{className:"back",children:[Object(j.jsx)(H.a,{}),"Home"]})}),Object(j.jsx)("div",{style:{paddingTop:"56.25%",position:"relative"},children:Object(j.jsx)("iframe",{src:"https://player.vdocipher.com/playerAssets/1.x/vdo/embed/index.html#otp=20160313versASE323loduHtOG3YWFDML8jWTDCFvSE1h19H9uK8ee3W7xSLsbLw&playbackInfo=eyJ2aWRlb0lkIjoiNDMyODliZGQxZGEzNGI3OTk1MzczNmI3NzhhYTU3MmEifQ==",style:{border:"0",maxWidth:"100%",position:"absolute",top:"100px",left:"0",height:"90%",width:"100%"},allowFullScreen:"true",allow:"encrypted-media"})})]})}i(156);function Q(){var e=Object(s.useState)(""),t=Object(r.a)(e,2),i=(t[0],t[1]),c=Object(s.useState)(""),a=Object(r.a)(c,2),n=(a[0],a[1]),l=Object(s.useContext)(b),o=(l.user,l.dispatch,Object(T.f)());return Object(j.jsxs)("div",{children:[Object(j.jsx)(f,{}),Object(j.jsx)("div",{className:"login",children:Object(j.jsx)("div",{className:"container",children:Object(j.jsxs)("form",{children:[Object(j.jsx)("h1",{children:"Saytga kirish"}),Object(j.jsx)("input",{type:"email",placeholder:"Email yoki tel raqam",onChange:function(e){return i(e.target.value)}}),Object(j.jsx)("input",{type:"password",placeholder:"Parol",onChange:function(e){return n(e.target.value)}}),Object(j.jsx)("button",{className:"loginButton",onClick:function(e){e.preventDefault()},children:"Saytga kirish"}),Object(j.jsxs)("p",{children:["Saytda yangimisiz? Unda hoziroq",Object(j.jsx)("b",{children:Object(j.jsx)("span",{onClick:function(){return o.push("/register")},children:"ruyhatdan o'tishingiz"})})," mumkin."]}),Object(j.jsxs)("p",{children:["This page is protected by Google reCAPTCHA to ensure you're not a bot. ",Object(j.jsx)("b",{children:"Ko'proq bilish uchun."}),"."]})]})})})]})}var Y=function(){return Object(s.useContext)(b).user,Object(j.jsx)("div",{children:Object(j.jsx)(l.a,{children:Object(j.jsxs)(T.c,{children:[Object(j.jsx)(T.a,{exact:!0,path:"/",children:Object(j.jsx)(K,{})}),Object(j.jsx)(T.a,{exact:!0,path:"/movies",children:Object(j.jsx)(K,{type:"movie"})}),Object(j.jsx)(T.a,{exact:!0,path:"/series",children:Object(j.jsx)(K,{type:"series"})}),Object(j.jsx)(T.a,{exact:!0,path:"/login",children:Object(j.jsx)(Q,{})}),Object(j.jsx)(T.a,{exact:!0,path:"/register",children:Object(j.jsx)(E,{})}),Object(j.jsx)(T.a,{exact:!0,path:"/termsOfUse",children:Object(j.jsx)(R,{})}),Object(j.jsx)(T.a,{exact:!0,path:"/payment",children:Object(j.jsx)(G,{})}),Object(j.jsx)(T.a,{exact:!0,path:"/watch",children:Object(j.jsx)(V,{})}),Object(j.jsx)(T.a,{exact:!0,path:"/:type/:title",children:Object(j.jsx)(F,{})}),Object(j.jsx)(T.a,{exact:!0,path:"/uzbekFilms/:title",children:Object(j.jsx)(W,{})}),Object(j.jsx)(T.a,{exact:!0,path:"/uzbekSerials/:title",children:Object(j.jsx)(I,{})}),Object(j.jsx)(T.a,{exact:!0,path:"/kidFilms/:title",children:Object(j.jsx)(U,{})}),Object(j.jsx)(T.a,{exact:!0,path:"/chetelFilms/:title",children:Object(j.jsx)(L,{})}),Object(j.jsx)(T.a,{exact:!0,path:"/konserts/:title",children:Object(j.jsx)(D,{})})]})})})},J=i(19),Z=i(20),X={uzbMovies:[{type:"uzbKino",foto:i.p+"static/media/qoqon2.eb95e063.jfif",title:"Qo'qon shamoli"},{type:"uzbKino",foto:i.p+"static/media/ibrat.7160ce99.jfif",title:"Ibrat"},{type:"uzbKino",foto:i.p+"static/media/farida.d1e5d9fe.jfif",title:"Faridaning ikki ming qo'shig'i"},{type:"uzbKino",foto:i.p+"static/media/tutqunlik.fa8d2116.jfif",title:"Tutqunlik"}]},$=Object(J.b)({name:"uzbekMovies",initialState:X,reducers:{addMovie:function(e,t){e.movie=e.movies.push("ojiza")},deleteMovie:function(e,t){e.movies=[]}}}),ee=$.actions,te=(ee.addMovie,ee.deleteMovie,$.reducer),ie={uzbSerials:[{type:"uzbSerial",foto:i.p+"static/media/qodirxon.cfb2aa37.jfif",title:"Qodirxon"},{type:"uzbSerial",foto:i.p+"static/media/shaytanat.98f691ac.jfif",title:"Shaytanat"},{type:"uzbSerial",foto:i.p+"static/media/qadam.2db535f7.jfif",title:"Qadam"},{type:"uzbSerial",foto:i.p+"static/media/ojiza.73f06393.jfif",title:"Ojiza"}]},se=Object(J.b)({name:"uzbekSerials",initialState:ie,reducers:{addSerial:function(e,t){e.uzbSerials=e.movies.push("ojiza")},deleteSerial:function(e,t){e.uzbSerials=[]}}}),ce=se.actions,ae=(ce.addSerial,ce.deleteSerial,se.reducer),ne={kidsMovies:[{type:"bolalar",foto:i.p+"static/media/aralashquralash.0678528f.jpg",title:"Aralash quralash"},{type:"bolalar",foto:i.p+"static/media/sehrliqalpoqcha2.953f82b8.jfif",title:"Sehrli qalpoqcha"},{type:"bolalar",foto:i.p+"static/media/homealone.93576f20.jpg",title:"Uyda yolg'iz"},{type:"bolalar",foto:i.p+"static/media/garrypoter.7c9e6e5a.jfif",title:"Garry Potter"}]},re=Object(J.b)({name:"kidsMovies",initialState:ne,reducers:{addKidsMovie:function(e,t){e.kidsMovies=e.movies.push("ojiza")},deleteKidsMovie:function(e,t){e.kidsMovies=[]}}}),le=re.actions,je=(le.addKidsMovie,le.deleteKidsMovie,re.reducer),oe={foreignMovies:[{type:"chetel",foto:i.p+"static/media/karasevda.71e35d81.jfif",title:"Kara Sevda"},{type:"chetel",foto:i.p+"static/media/truedetective.f80048a3.jpg",title:"Haqiqiy detektiv"},{type:"chetel",foto:i.p+"static/media/usmon.e400ec30.jpg",title:"Usmon"},{type:"chetel",foto:i.p+"static/media/breakingbad.79cf3b18.jfif",title:"Breaking Bad"}]},be=Object(J.b)({name:"foreignMovies",initialState:oe,reducers:{addForeignMovie:function(e,t){e.foreignMovies=e.movies.push("ojiza")},deleteForeignMovie:function(e,t){e.foreignMovies=[]}}}),de=be.actions,he=(de.addForeignMovie,de.deleteForeignMovie,be.reducer),Oe={uzbKonserts:[{type:"uzbKonsert",foto:i.p+"static/media/million.a58959db.jpeg",title:"Million"},{type:"uzbKonsert",foto:i.p+"static/media/dizayn.33bf5326.jfif",title:"Dizayn"},{type:"uzbKonsert",foto:i.p+"static/media/ariktokratlar.7b80fc5d.jfif",title:"Aristokratlar"},{type:"uzbKonsert",foto:i.p+"static/media/yulduzusmonova.223ca33b.jfif",title:"Yulduz Usmonova konserti"}]},xe=Object(J.b)({name:"uzbKonserts",initialState:Oe,reducers:{addUzbKonsert:function(e,t){e.uzbKonserts=e.movies.push("ojiza")},deleteUzbKonsert:function(e,t){e.uzbKonserts=[]}}}),ue=xe.actions,me=(ue.addUzbKonsert,ue.deleteUzbKonsert,xe.reducer),ve=Object(Z.b)({uzbekMovies:te,uzbekSerials:ae,kidsMovies:je,foreignMovies:he,uzbKonserts:me}),pe=Object(J.a)({reducer:ve});n.a.render(Object(j.jsx)(c.a.StrictMode,{children:Object(j.jsx)(_.a,{store:pe,children:Object(j.jsx)(Y,{})})}),document.getElementById("root"))},83:function(e,t,i){},85:function(e,t,i){},87:function(e,t,i){}},[[157,1,2]]]);
//# sourceMappingURL=main.e84d8a48.chunk.js.map