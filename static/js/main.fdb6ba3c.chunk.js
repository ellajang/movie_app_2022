(this["webpackJsonpreact-for-beginners"]=this["webpackJsonpreact-for-beginners"]||[]).push([[0],{34:function(e,t,n){"use strict";n.r(t);var c=n(0),r=n.n(c),i=n(17),s=n.n(i),a=n(11),o=n(2),j=n(8),m=n.n(j),u=n(12),v=n(1);var _=function(){var e=Object(o.f)().id,t=function(){var t=Object(u.a)(m.a.mark((function t(){var n;return m.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch("https://yts.mx/api/v2/movie_details.json?movie_id=".concat(e));case 2:return t.next=4,t.sent.json();case 4:n=t.sent,console.log(n);case 6:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}();return Object(c.useEffect)((function(){t()}),[]),Object(v.jsx)("h1",{children:"Detail"})},l=n(16),d=n(9),b=n.n(d);var h=function(e){var t=e.id,n=e.coverImg,c=e.title,r=e.year,i=e.summary,s=e.genres;return Object(v.jsxs)("div",{className:b.a.movie,children:[Object(v.jsx)("img",{src:n,alt:c,className:b.a.movie__img}),Object(v.jsxs)("div",{children:[Object(v.jsx)("h2",{className:b.a.movie__title,children:Object(v.jsx)(a.b,{to:"/movie/".concat(t),children:c})}),Object(v.jsx)("h3",{className:b.a.movie__year,children:r}),Object(v.jsx)("p",{children:i.lenght>235?"".concat(i.slice(.235),"..."):i}),Object(v.jsx)("ul",{className:b.a.movie__genres,children:s.map((function(e){return Object(v.jsx)("li",{children:e},e)}))})]})]})};var O=function(){var e=Object(c.useState)(!0),t=Object(l.a)(e,2),n=t[0],r=t[1],i=Object(c.useState)([]),s=Object(l.a)(i,2),a=s[0],o=s[1],j=function(){var e=Object(u.a)(m.a.mark((function e(){var t;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://yts.mx/api/v2/list_movies.json?minimum_rating=8.8&sort_by=year");case 2:return e.next=4,e.sent.json();case 4:t=e.sent,o(t.data.movies),r(!1);case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(c.useEffect)((function(){j()}),[]),Object(v.jsx)("div",{children:n?Object(v.jsx)("h1",{children:"Loading..."}):Object(v.jsx)("div",{children:a.map((function(e){return Object(v.jsx)(h,{id:e.id,coverImg:e.medium_cover_image,title:e.title,summary:e.summary,genres:e.genres},e.id)}))})})};var x=function(){return Object(v.jsx)(a.a,{children:Object(v.jsxs)(o.c,{children:[Object(v.jsx)(o.a,{path:"/abot-us",children:Object(v.jsx)("h1",{children:"Hello"})}),Object(v.jsx)(o.a,{path:"/movie/:id",children:Object(v.jsx)(_,{})}),Object(v.jsx)(o.a,{path:"/",children:Object(v.jsx)(O,{})})]})})};s.a.render(Object(v.jsx)(r.a.StrictMode,{children:Object(v.jsx)(x,{})}),document.getElementById("root"))},9:function(e,t,n){e.exports={movie:"Movie_movie__27rBX",movie__img:"Movie_movie__img__23OrX",movie__title:"Movie_movie__title__p6svq",movie__year:"Movie_movie__year__1Fz81",movie__genres:"Movie_movie__genres__2j2Od"}}},[[34,1,2]]]);
//# sourceMappingURL=main.fdb6ba3c.chunk.js.map