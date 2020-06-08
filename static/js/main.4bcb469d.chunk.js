(this["webpackJsonpreact_phone-catalog"]=this["webpackJsonpreact_phone-catalog"]||[]).push([[0],Array(23).concat([function(e,t,a){e.exports=a(51)},,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){},,,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),r=a(19),l=a.n(r),s=a(4),o=(a(28),a(2)),i=(a(29),a(1)),m=(a(30),a(8)),u=a.n(m),d=function(){var e=Object(o.h)(),t=Object(o.g)(),a=new URLSearchParams(e.search),r=a.get("query")||"",l=Object(n.useState)(r),s=Object(i.a)(l,2),m=s[0],d=s[1];Object(n.useEffect)((function(){d(r)}),[r]);var _=Object(n.useCallback)(function(e,t){var a;return function(n){clearTimeout(a),a=setTimeout((function(){e(n)}),t)}}((function(e){""===e?a.delete("query"):(a.set("page","1"),a.set("query",e)),t.push({search:a.toString()})}),1e3),[m,r]),p=Object(n.useCallback)((function(){a.delete("query"),t.push({search:a.toString()}),d("")}),[r]);return c.a.createElement("div",{className:"wrap__search"},c.a.createElement("input",{type:"text",className:"search",placeholder:"Search in phones...",value:m,onChange:function(e){var t=e.target;d(t.value),_(t.value)}}),c.a.createElement("button",{type:"button",className:u()("search__btn",{"search__btn--clear":r}),"aria-label":"Mute volume",onClick:p}))},_=[{title:"home",link:"/home"},{title:"Phones",link:"/phones"},{title:"tablets",link:"/tablets"},{title:"accessories",link:"/accessories"}],p=function(){return c.a.createElement("header",{className:"header"},c.a.createElement(s.b,{to:"/",className:"header__logo logo"},c.a.createElement("img",{src:"./img/logo/LOGO.svg",alt:"logo"})),c.a.createElement("nav",{className:"header__nav nav"},c.a.createElement("ul",{className:"nav__list"},_.map((function(e){return c.a.createElement("li",{key:e.title,className:"nav__item"},c.a.createElement(s.c,{to:e.link,className:"nav__link",activeClassName:"nav__link--active"},e.title))})))),c.a.createElement("div",{className:"header__wrapButtons"},c.a.createElement(o.b,{path:["/phones","/tablets","/accessories","/favorites"]},c.a.createElement(d,null)),c.a.createElement("button",{type:"button",className:"header__buttons favourites"},c.a.createElement("img",{src:"./img/Icons/heart.svg",alt:"heart"})),c.a.createElement("button",{type:"button",className:"header__buttons cart"},c.a.createElement("img",{src:"./img/Icons/shoppingBag.svg",alt:"shoppingBag"}))))},f=(a(36),a(37),function(e){var t=e.imageUrl,a=e.name,n=e.price,r=e.discount,l=e.screen,i=e.capacity,m=e.ram,u=e.id,d=Object(o.j)().path;return c.a.createElement("div",{className:"Wrap"},c.a.createElement("article",{className:"Card"},c.a.createElement(s.b,{to:"".concat(d,"/").concat(u)},c.a.createElement("img",{alt:"card",src:t,className:"Card__Img"})),c.a.createElement("div",{className:"Card__ContainerInner"},c.a.createElement("h3",{className:"Card__Title"},a),c.a.createElement("span",{className:"Card__Prise"},"$",n-n*(r/100))," ",0!==r&&c.a.createElement("span",{className:"Card__OldPrise"},"$",n),c.a.createElement("div",{className:"Card__Info"},c.a.createElement("div",{className:"Card__InfoScreen Card__Item"},c.a.createElement("p",{className:"Card__InfoScreen_Name"},"Screen"),c.a.createElement("p",{className:"Card__InfoScreen_Value"},l)),c.a.createElement("div",{className:"Card__InfoScreen Card__Item"},c.a.createElement("p",{className:"Card__InfoScreen_Name"},"Capacity"),c.a.createElement("p",{className:"Card__InfoScreen_Value"},i)),c.a.createElement("div",{className:"Card__InfoRam Card__Item"},c.a.createElement("p",{className:"Card__InfoScreen_Name"},"RAM"),c.a.createElement("p",{className:"Card__IInfoScreen_Value"},m))),c.a.createElement("div",{className:"Card__ButtonWrap"},c.a.createElement("button",{type:"button",className:"Card__ButtonCart"},"Add to cart"),c.a.createElement("button",{type:"button",className:"Card__ButtonFavor","aria-label":"Mute text"})))))}),b=a(12),g=(a(38),function(e){var t=e.name,a=e.className,n=e.disabled,r=e.handleOnClick;return c.a.createElement("button",{type:"button",className:u()("small-btn","".concat(a),Object(b.a)({},"disabled__".concat(a),n)),name:t,"aria-label":"Mute volume",onClick:function(e){var t=e.target;r(t.name)}})}),E=function(e){var t=e.visibleProducts,a=e.title,r=Object(n.useState)(0),l=Object(i.a)(r,2),s=l[0],o=l[1],m=288*(t.length-4),u=function(e){"prev"===e&&o(0===s?-m:s+288),"next"===e&&(o(s-288),-s>m-288&&o(0))};return c.a.createElement("div",{className:"wrapper"},c.a.createElement("h2",null,a),c.a.createElement("div",{className:"container"},c.a.createElement("div",{className:"Carousel__button btn-left"},c.a.createElement(g,{className:"prev",name:"prev",disabled:0===s,handleOnClick:u})),c.a.createElement("div",{className:"Carousel container__carousel"},c.a.createElement("div",{style:{transform:"translate(".concat(s,"px)")},className:"Carousel__list"},t.map((function(e){return c.a.createElement(f,Object.assign({key:e.id},e))})))),c.a.createElement("div",{className:"Carousel__button btn-right"},c.a.createElement(g,{className:"next",name:"next",disabled:-s>m-288,handleOnClick:u}))))},v=(a(39),[{id:1,image:"./img/Banner.jpg"},{id:2,image:"./img/Banner.jpg"},{id:3,image:"./img/Banner.jpg"}]),h=function(){var e=Object(n.useState)(0),t=Object(i.a)(e,2),a=t[0],r=t[1],l=Object(n.useState)(0),s=Object(i.a)(l,2),o=s[0],m=s[1];return c.a.createElement("div",null,c.a.createElement("div",{className:"containerMainSlider"},c.a.createElement("button",{type:"button",className:"\u0441arousel__button btn-left","aria-label":"Mute volume",onClick:function(){0===o?(m(-2100),r(v.length-1)):(m(o+1050),r(a-1))}}),c.a.createElement("div",{className:"container__\u0441arousel \u0441arousel"},c.a.createElement("div",{style:{transform:"translate(".concat(o,"px)")},className:"\u0441arousel__list"},v.map((function(e){return c.a.createElement("div",{className:"\u0441arousel__item",key:e.id},c.a.createElement("img",{src:e.image,alt:"photos"}))})))),c.a.createElement("button",{type:"button","aria-label":"Mute volume",className:"\u0441arousel__button btn-right",onClick:function(){m(o-1050),r(a+1),-o>1050&&(m(0),r(0))}})),c.a.createElement("ul",{className:"\u0441arousel__dots-wrap"},v.map((function(e,t){var n=a===t?"\u0441arousel__dot--active":"\u0441arousel__dot";return c.a.createElement("li",{key:e.id,className:n})}))))},N=(a(40),a(10)),O=a.n(N),j=a(13),P="https://mate-academy.github.io/react_phone-catalog/api",y=function(){return fetch("https://mate-academy.github.io/react_phone-catalog/api/products.json").then((function(e){return e.json()}))};function C(e){return S.apply(this,arguments)}function S(){return(S=Object(j.a)(O.a.mark((function e(t){var a,n;return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat(P,"/products/").concat(t,".json"));case 2:return a=e.sent,e.next=5,a.json();case 5:return n=e.sent,e.abrupt("return",n);case 7:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var k=function(){var e=Object(n.useState)([]),t=Object(i.a)(e,2),a=t[0],r=t[1],l=Object(n.useState)([]),o=Object(i.a)(l,2),m=o[0],u=o[1],d=Object(n.useState)([]),_=Object(i.a)(d,2),p=_[0],f=_[1];return Object(n.useEffect)((function(){y().then((function(e){return r(e.filter((function(e){return"phone"===e.type})))}))}),[]),Object(n.useEffect)((function(){y().then((function(e){return u(e.filter((function(e){return"tablet"===e.type})))}))}),[]),Object(n.useEffect)((function(){y().then((function(e){return f(e.filter((function(e){return"tablet"!==e.type&&"phone"!==e.type})))}))}),[]),c.a.createElement("div",{className:"wrap-category"},c.a.createElement("h2",{className:"category__title"},"Shop by category"),c.a.createElement("div",{className:"category"},c.a.createElement("div",{className:"wrap-inner"},c.a.createElement(s.b,{to:"/phones"},c.a.createElement("div",{className:"category__phones"},c.a.createElement("img",{src:"./img/category/category-phones.png",alt:"category__phones",className:"category__img"})),c.a.createElement("h3",{className:"category__subtitle"},"Mobile phones"),c.a.createElement("p",{className:"category__sum-models"},a.length," ","models"))),c.a.createElement("div",{className:"wrap-inner"},c.a.createElement(s.b,{to:"/tablets"},c.a.createElement("div",{className:"category__tablets"},c.a.createElement("img",{src:"./img/category/category-tablets.png",alt:"category__phones",className:"category__img"})),c.a.createElement("h3",{className:"category__subtitle"},"Tablets"),c.a.createElement("p",{className:"category__sum-models"},m.length," ","models"))),c.a.createElement("div",{className:"wrap-inner"},c.a.createElement(s.b,{to:"/accessories"},c.a.createElement("div",{className:"category__accessories"},c.a.createElement("img",{src:"./img/category/category-accessories.png",alt:"category__phones",className:"category__img"})),c.a.createElement("h3",{className:"category__subtitle"},"Accessories"),c.a.createElement("p",{className:"category__sum-models"},p.length," ","models")))))},w=function(){var e=Object(n.useState)([]),t=Object(i.a)(e,2),a=t[0],r=t[1],l=Object(n.useState)([]),s=Object(i.a)(l,2),o=s[0],m=s[1];return Object(n.useEffect)((function(){y().then((function(e){return r(e.filter((function(e){return e.discount>0})).sort((function(e,t){return e.discount-t.discount})))}))}),[]),Object(n.useEffect)((function(){y().then((function(e){return m(e.filter((function(e){return 0===e.discount})).sort((function(e,t){return e.discount-t.discount})))}))}),[]),c.a.createElement(c.a.Fragment,null,c.a.createElement(h,null),c.a.createElement(E,{title:"Hot prices",visibleProducts:a}),c.a.createElement(k,null),c.a.createElement(E,{title:"Brand new models",visibleProducts:o}))},I=(a(42),a(43),function(e){var t=e.options,a=e.value,r=e.onChange,l=Object(n.useRef)(null),s=Object(n.useState)(!1),o=Object(i.a)(s,2),m=o[0],d=o[1],_=t.find((function(e){return e.value===a})),p=function(e){l.current&&l.current.contains(e.target)?d(!0):d(!1)};return Object(n.useEffect)((function(){return document.addEventListener("click",p),function(){document.removeEventListener("click",p)}}),[]),c.a.createElement(c.a.Fragment,null,c.a.createElement("div",{className:u()({dropdown:!m,"dropdown--focus":m})},c.a.createElement("div",{className:"dropdown__option option",ref:l},c.a.createElement("div",{className:u()("option__title option__title::after",{"option__title--focus":m})},null===_||void 0===_?void 0:_.title)),c.a.createElement("ul",{className:u()("dropdown__list",{"dropdown__list--opened":m})},t.map((function(e){return c.a.createElement("li",{key:e.value},c.a.createElement("button",{type:"button",className:u()("dropdown__item",{"dropdown__item--selected":e.value===a}),onClick:function(){r(e.value)}},e.title))})))))}),B=(a(44),[{id:1,value:"price",title:"Price: Low to High"},{id:2,value:"name",title:"Alphabeticaly"},{id:4,value:"age",title:"Newest"}]),x=[{name:"Screen",order:"info"},{name:"Resolution",order:"detail"},{name:"Processor",order:"detail"},{name:"RAM",order:"info"}],M=[{name:"Screen",order:"info"},{name:"Resolution",order:"detail"},{name:"Processor",order:"detail"},{name:"RAM",order:"info"},{name:"Built in memory",order:"info"},{name:"Camera",order:"detail"},{name:"Zoom",order:"detail"},{name:"Cell",order:"detail"}],L=function(){var e=Object(o.g)(),t=Object(o.h)(),a=new URLSearchParams(t.search),r=a.get("sortBy"),l=Object(n.useState)(""),s=Object(i.a)(l,2),m=s[0],u=s[1];Object(n.useEffect)((function(){u(r||"age")}),[r]);return c.a.createElement("div",{className:"phones__dropdown--sortBy"},c.a.createElement("p",{className:"title"},"Sort By"),c.a.createElement(I,{options:B,value:m,onChange:function(t){return function(t){u(t),a.set("sortBy",t),e.push({search:a.toString()})}(t)}}))},R=(a(45),["4","8","16","all"].map((function(e){return{value:e,title:e}}))),A=function(){var e=Object(o.g)(),t=Object(o.h)(),a=new URLSearchParams(t.search),r=a.get("perPage"),l=Object(n.useState)(""),s=Object(i.a)(l,2),m=s[0],u=s[1];Object(n.useEffect)((function(){u(r||"all")}),[r]);return c.a.createElement("div",{className:"phones__dropdown--sortItemInPage"},c.a.createElement("p",{className:"title"},"Item on page"),c.a.createElement(I,{options:R,value:m,onChange:function(t){return function(t){u(t),a.set("page","1"),a.set("perPage",t),e.push({search:a.toString()})}(t)}}))},T=(a(46),function(e){var t=e.totalPages,a=Object(o.h)(),n=Object(o.g)(),r=new URLSearchParams(a.search),l=Number(r.get("page"))||1,s=Array.from({length:t},(function(e,t){return t+1})),i=function(e){r.set("page","".concat(e)),n.push({search:r.toString()})},m=function(e){"prev"===e&&1!==l&&i(l-1),"next"===e&&l!==t&&i(l+1)};if(l>t){var d=a.search.replace(/page=\d/g,"page=1");return c.a.createElement(o.a,{to:{pathname:"".concat(a.pathname),search:"".concat(d)}})}return c.a.createElement("div",{className:"pagination"},c.a.createElement(g,{className:"prev",name:"prev",disabled:1===l,handleOnClick:m}),s.map((function(e){return c.a.createElement("button",{type:"button",className:u()("pagination__btn",{"pagination__btn--active":l===e}),key:e,value:e,onClick:function(e){var t=e.target;r.set("page","".concat(t.value)),n.push({search:r.toString()})}},e)})),c.a.createElement(g,{className:"next",name:"next",disabled:l===t,handleOnClick:m}))}),F=function(){var e=Object(n.useState)([]),t=Object(i.a)(e,2),a=t[0],r=t[1];Object(n.useEffect)((function(){y().then((function(e){return r(e.filter((function(e){return"phone"===e.type})))}))}),[]);var l=Object(o.h)(),s=new URLSearchParams(l.search),m=s.get("sortBy")||"",u=s.get("query")||"",d=s.get("perPage")||"all",_=Number(s.get("page"))||1,p=u.toLocaleLowerCase(),b=a.length,g=0,E=Object(n.useMemo)((function(){var e=a.filter((function(e){return(e.name+e.capacity+e.screen).toLowerCase().includes(p)}));switch(b=e.length,m){case"name":e.sort((function(e,t){return e.name.localeCompare(t.name)}));break;case"price":e.sort((function(e,t){return e.price-t.price}));break;case"age":e.sort((function(e,t){return e.age-t.age}));break;default:e.sort((function(e,t){return e.age-t.age}))}if("all"!==d){var t=(_-1)*+d;return e.slice(t,t+ +d)}return e}),[m,a,d,_,u]);return"all"!==d&&(g=Math.ceil(b/+d)),c.a.createElement(c.a.Fragment,null,c.a.createElement("div",{className:"phones-container"},c.a.createElement("h1",{className:"phones__title"},"Mobile phones"),c.a.createElement("span",{className:"phones__sum"},b," ","models"),c.a.createElement("div",{className:"phones__dropdown"},c.a.createElement(L,null),c.a.createElement(A,null))),c.a.createElement("div",{className:"phones-wrap"},E.map((function(e){return c.a.createElement(f,Object.assign({key:e.id},e))}))),g>1&&c.a.createElement("div",{className:"pagination"},c.a.createElement(T,{totalPages:g,perPage:d})))},H=(a(47),function(){var e=Object(n.useState)([]),t=Object(i.a)(e,2),a=t[0],r=t[1];return Object(n.useEffect)((function(){y().then((function(e){return r(e.filter((function(e){return"tablet"===e.type})))}))}),[]),c.a.createElement("div",{className:"tablet-container"},c.a.createElement("h1",{className:"tablet__title"},"Tablets"),c.a.createElement("span",{className:"tablet__sum"},a.length," ","models"),c.a.createElement("div",{className:"tablet-wrap"},a.map((function(e){return c.a.createElement(f,Object.assign({key:e.id},e))}))))}),U=(a(48),function(){var e=Object(n.useState)([]),t=Object(i.a)(e,2),a=t[0],r=t[1];return Object(n.useEffect)((function(){y().then((function(e){return r(e.filter((function(e){return"accessory"===e.type})))}))}),[]),c.a.createElement("div",{className:"tablet-container"},c.a.createElement("h1",{className:"tablet__title"},"Sorry, no products"),c.a.createElement("span",{className:"tablet__sum"}),c.a.createElement("div",{className:"tablet-wrap"},a.map((function(e){return c.a.createElement(f,Object.assign({key:e.id},e))}))))}),q=a(21),D=a(22),G=a.n(D),V=(a(49),function(){var e=Object(n.useState)([]),t=Object(i.a)(e,2),a=t[0],r=t[1],l=Object(n.useState)(),s=Object(i.a)(l,2),m=s[0],u=s[1],d=Object(n.useState)(),_=Object(i.a)(d,2),p=_[0],f=_[1],b=Object(n.useState)(!1),g=Object(i.a)(b,2),v=g[0],h=g[1],N=Object(n.useState)(!1),P=Object(i.a)(N,2),S=P[0],k=P[1],w=Object(n.useState)(""),I=Object(i.a)(w,2),B=I[0],L=I[1],R=Object(n.useState)(0),A=Object(i.a)(R,2),T=A[0],F=A[1],H=Object(n.useState)([]),U=Object(i.a)(H,2),D=U[0],V=U[1],W=Object(o.j)(),J=Object(o.i)().productId;Object(n.useEffect)((function(){y().then((function(e){return V(e.filter((function(e){return 0===e.discount})).sort((function(e,t){return e.discount-t.discount})))}))}),[]);var Z=function(){var e=Object(j.a)(O.a.mark((function e(t){var a,n;return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return h(!0),e.prev=1,e.next=4,C(t);case 4:a=e.sent,n=Object(q.a)({},a),f(n),k(!0),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(1),L(String(e.t0));case 13:h(!1);case 14:case"end":return e.stop()}}),e,null,[[1,10]])})));return function(t){return e.apply(this,arguments)}}();Object(n.useEffect)((function(){y().then((function(e){return r(e)}))}),[]),Object(n.useEffect)((function(){if(a.length){var e=a.find((function(e){return e.id===W.params.productId}));u(e)}}),[a,W.params.productId]),Object(n.useEffect)((function(){Z(J)}),[J]);var $=Object(n.useMemo)((function(){return m&&m.discount>0?m.price-m.price/100*m.discount:m&&m.price}),[m]),z=function(e,t){var a="";if("info"===t)switch(e){case"Screen":a=(null===m||void 0===m?void 0:m.screen)||"";break;case"RAM":a=(null===m||void 0===m?void 0:m.ram)||"";break;case"Built in memory":a=(null===m||void 0===m?void 0:m.capacity)||""}if("detail"===t)switch(e){case"Resolution":a=(null===p||void 0===p?void 0:p.display.screenResolution)||"";break;case"Processor":a=(null===p||void 0===p?void 0:p.hardware.cpu)||"";break;case"Camera":a=(null===p||void 0===p?void 0:p.camera.primary)||"";break;case"Zoom":a=(null===p||void 0===p?void 0:p.camera.zoom)||"";break;case"Cell":a=(null===p||void 0===p?void 0:p.connectivity.cell)||""}return a||"unknown"};return c.a.createElement(c.a.Fragment,null,c.a.createElement("section",{className:"ProdactPage__Section"},B&&c.a.createElement("div",null,B),v&&c.a.createElement("div",{className:"Loading"},"Loading..."),v&&S&&"",p&&c.a.createElement("article",{className:"ProdactPage"},c.a.createElement("h1",{className:"ProdactPage__Heading"},p.name),c.a.createElement("div",{className:"ProdactPage__Content"},c.a.createElement("div",{className:"ProdactPage__Column"},c.a.createElement("section",{className:"ProdactPage__Images"},c.a.createElement("ul",{className:"ProdactPage__ImageList"},p.images.map((function(e,t){return c.a.createElement("li",{className:G()({"ProdactPage__Image--current":t===T},"ProdactPage__ImageItem"),key:e},c.a.createElement("a",{href:"./#",onClick:function(e){return function(e,t){e.preventDefault(),F(t)}(e,t)}},c.a.createElement("img",{src:e,alt:p.name,className:"ProdactPage__Image"})))}))),c.a.createElement("img",{src:p.images[T],alt:p.name,className:"ProdactPage__ImageBig"}))),c.a.createElement("div",{className:"ProdactPage__Column"},c.a.createElement("span",{className:"ProdactPage__Id"},"ID:"," ",m&&m.id),c.a.createElement("section",{className:"ProdactPage__NarrowBlock"},c.a.createElement("div",{className:"ProdactPage__Price"},c.a.createElement("span",{className:"ProdactPage__Price--actual"},$),m&&m.discount>0&&c.a.createElement("span",{className:"ProdactPage__Price--full"},m.price)),c.a.createElement("div",{className:"Card__ButtonWrap"},c.a.createElement("button",{type:"button",className:"Card__ButtonCart"},"Add to cart"),c.a.createElement("button",{type:"button",className:"Card__ButtonFavor"},"favor"))),c.a.createElement("section",{className:"ProdactPage__Info"},c.a.createElement("ul",{className:"ProdactPage__InfoList"},x.map((function(e){return c.a.createElement("li",{className:"ProdactPage__InfoItem"},c.a.createElement("p",{className:"ProdactPage__InfoTitle"},e.name),c.a.createElement("p",{className:"ProdactPage__InfoFeature"},m&&z(e.name,e.order)))}))))),c.a.createElement("div",{className:"ProdactPage__Column"},c.a.createElement("section",{className:"ProdactPage__Description"},c.a.createElement("h2",{className:"ProdactPage__SubHeading"},"About"),m&&m.snippet,c.a.createElement("div",{className:"ProdactPage__MoreInfo"},c.a.createElement("h3",{className:"ProdactPage__MoreInfo--SubHeading"},"More info"),p&&p.description))),c.a.createElement("div",{className:"ProdactPage__Column"},c.a.createElement("section",{className:"ProdactPage__TechSpecs"},c.a.createElement("h2",{className:"ProdactPage__SubHeading"},"Tech specs"),c.a.createElement("ul",{className:"ProdactPage__SpecsList"},M.map((function(e){return c.a.createElement("li",{className:"ProdactPage__SpecsItem"},c.a.createElement("p",{className:"ProdactPage__SpecsTitle"},e.name),c.a.createElement("p",{className:"ProdactPage__SpecsFeature"},m&&z(e.name,e.order)))})))))))),c.a.createElement(E,{title:"You may also like",visibleProducts:D}))}),W=(a(50),[{title:"Github",link:"https://github.com/fe-feb20-team-2"},{title:"Contacts",link:"/contacts"},{title:"rights",link:"/rights"}]),J=function(){return c.a.createElement("footer",{className:"footer"},c.a.createElement("div",{className:"footer__container"},c.a.createElement("div",{className:"footer__logo logo"},c.a.createElement("img",{src:"./img/logo/LOGO.svg",alt:"logo"})),c.a.createElement("nav",{className:"footer__nav nav"},c.a.createElement("ul",{className:"nav__list"},W.map((function(e){return c.a.createElement("li",{key:e.title,className:"nav__item"},c.a.createElement("a",{href:e.link,className:"nav__link nav__link--footer"},e.title))})))),c.a.createElement("div",{className:"footer__button"},c.a.createElement("span",{className:"label-btn"},"Back to top"),c.a.createElement("button",{type:"button",className:"btn-back-top","aria-label":"Mute volume",onClick:function(){return window.scrollTo({top:0,behavior:"smooth"})}}))))},Z=function(){return c.a.createElement("div",{className:"App"},c.a.createElement(p,null),c.a.createElement("main",null,c.a.createElement(o.d,null,c.a.createElement(o.a,{exact:!0,from:"/",to:"/home"}),c.a.createElement(o.b,{path:"/home",exact:!0,component:w}),c.a.createElement(o.b,{path:"/phones",exact:!0,component:F}),c.a.createElement(o.b,{path:"/tablets",exact:!0,component:H}),c.a.createElement(o.b,{path:"/accessories",exact:!0,component:U}),c.a.createElement(o.b,{path:"/:section/:productId?",exact:!0,component:V}))),c.a.createElement(J,null))};l.a.render(c.a.createElement(s.a,null,c.a.createElement(Z,null)),document.getElementById("root"))}]),[[23,1,2]]]);
//# sourceMappingURL=main.4bcb469d.chunk.js.map