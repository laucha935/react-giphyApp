(this["webpackJsonpgift-expert-app"]=this["webpackJsonpgift-expert-app"]||[]).push([[0],{17:function(t,e,n){},18:function(t,e,n){"use strict";n.r(e);var c=n(1),r=n(7),i=n.n(r),a=n(2),s=n(9),u=n(0),o=function(t){var e=t.setCategories,n=Object(c.useState)(""),r=Object(a.a)(n,2),i=r[0],o=r[1];return Object(u.jsx)("form",{onSubmit:function(t){t.preventDefault(),i.trim().length>2&&(e((function(t){return[i].concat(Object(s.a)(t))})),o(""))},children:Object(u.jsx)("input",{type:"text",value:i,onChange:function(t){o(t.target.value)}})})},j=n(10),d=n(6),l=n.n(d),f=n(8),p=function(){var t=Object(f.a)(l.a.mark((function t(e){var n,c,r,i,a;return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n="https://api.giphy.com/v1/gifs/search?q=".concat(encodeURI(e),"&api_key=AhfmixyWdcCILgoRjfjnE6ZRQMMDiATc&limit=10"),t.next=3,fetch(n);case 3:return c=t.sent,t.next=6,c.json();case 6:return r=t.sent,i=r.data,a=i.map((function(t){return{id:t.id,title:t.title,url:t.images.downsized_medium.url}})),t.abrupt("return",a);case 10:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),b=function(t){var e=t.id,n=t.title,c=t.url;return console.log({id:e,title:n,url:c}),Object(u.jsxs)("div",{className:"card",children:[Object(u.jsx)("img",{src:c,alt:n}),Object(u.jsx)("p",{children:n})]})},O=function(t){var e=t.category,n=function(t){var e=Object(c.useState)({data:[],loading:!0}),n=Object(a.a)(e,2),r=n[0],i=n[1];return Object(c.useEffect)((function(){p(t).then((function(t){setTimeout((function(){i({data:t,loading:!1})}),3e3)}))}),[t]),r}(e),r=n.data,i=n.loading;return Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)("h3",{children:e}),i?Object(u.jsx)("p",{children:"Loading"}):null,Object(u.jsx)("div",{className:"card-grid",children:r.map((function(t){return Object(u.jsx)(b,Object(j.a)({},t),t.id)}))})]})},h=function(){var t=Object(c.useState)(["One Punch"]),e=Object(a.a)(t,2),n=e[0],r=e[1];return Object(u.jsxs)("div",{children:[Object(u.jsx)("h2",{children:"GiftExpertApp"}),Object(u.jsx)(o,{setCategories:r}),Object(u.jsx)("hr",{}),Object(u.jsx)("ol",{children:n.map((function(t){return Object(u.jsx)(O,{category:t},t)}))})]})};n(17);i.a.render(Object(u.jsx)(h,{}),document.getElementById("root"))}},[[18,1,2]]]);
//# sourceMappingURL=main.6e3ab2e8.chunk.js.map