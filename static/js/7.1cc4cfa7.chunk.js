(this.webpackJsonpadmin=this.webpackJsonpadmin||[]).push([[7],{210:function(e,n,t){"use strict";t.r(n);var i=t(18),a=t(0),r=t(2),c=t(78),o=t.p+"static/media/realization1.f47dc739.png",l=t.p+"static/media/realization2.27b70344.png",s=t.p+"static/media/realization3.857e976d.png",d=t(1);n.default=function(){var e=Object(r.i)(),n=Object(a.useState)([{image:{src:o,alt:"Ejoin blog image",width:846,height:542},title:"Stanice pre obce",slug:"".concat(e.path,"/stanice-pre-obce"),content:"V\u010faka Ministerstvu hospod\xe1rstva Slovenskej republiky sme v roku 2020 vybudovali AC nab\xedjacie stanice a\u017e v 35 obciach na Slovensku...."},{image:{src:l,alt:"Ejoin blog image",width:846,height:542},title:"Stanice pre obchodn\xe9 centr\xe1",slug:"".concat(e.path,"/stanice-pre-obchodne-centra"),content:"Popri n\xe1kupoch v obchodn\xfdch centr\xe1ch sa m\xf4\u017ee V\xe1\u0161 elektromobil v pohodl\xed nab\xedja\u0165 na na\u0161ej AC alebo DC stanici...."},{image:{src:s,alt:"Ejoin blog image",width:846,height:542},title:"Stanice pre \u010derpacie stanice",slug:"".concat(e.path,"/stanice-pre-cerpacie-stanice"),content:"Nie len benz\xedn, ale u\u017e aj elektrick\xe9 aut\xe1 \u201enatankujete\u201c na \u010derpac\xedch staniciach! Popri cestovnej pauze nechajte svoje auto odd\xfdchnu\u0165 a dobi\u0165 baterky sebe aj svojmu autu."}]),t=Object(i.a)(n,1)[0];return Object(d.jsx)("div",{children:Object(d.jsx)(c.a,{posts:t,createRoute:"".concat(e.path,"/new-realisation")})})}},55:function(e,n,t){"use strict";var i,a=t(13),r=t(24),c=(t(0),t(8)),o=t(6),l=t(206),s=t(19),d=Object(o.d)(l.a.button)(i||(i=Object(c.a)(["\n    ",";\n"])),s.b),u=t(1);n.a=function(e){var n=e.children,t=Object(r.a)(e,["children"]);return Object(u.jsx)(d,Object(a.a)(Object(a.a)({whileHover:{scale:1.1},whileTap:{scale:.9}},t),{},{children:n}))}},78:function(e,n,t){"use strict";var i=t(0),a=t.n(i),r=t(16),c=t(13),o=t(24),l=t(42),s=t(67),d=t(56);var u=t(49),m=t(48),b=0;function h(){var e=b;return b++,e}var j=function(e){var n=e.children,t=e.initial,a=e.isPresent,r=e.onExitComplete,c=e.custom,o=e.presenceAffectsLayout,l=Object(m.a)(p),s=Object(m.a)(h),d=Object(i.useMemo)((function(){return{id:s,initial:t,isPresent:a,custom:c,onExitComplete:function(e){l.set(e,!0);var n=!0;l.forEach((function(e){e||(n=!1)})),n&&(null===r||void 0===r||r())},register:function(e){return l.set(e,!1),function(){return l.delete(e)}}}}),o?void 0:[a]);return Object(i.useMemo)((function(){l.forEach((function(e,n){return l.set(n,!1)}))}),[a]),Object(i.useEffect)((function(){!a&&!l.size&&(null===r||void 0===r||r())}),[a]),Object(i.createElement)(u.a.Provider,{value:d},n)};function p(){return new Map}function f(e){return e.key||""}var O,x,v,g,w,y,k,E,z=function(e){var n=e.children,t=e.custom,a=e.initial,r=void 0===a||a,c=e.onExitComplete,o=e.exitBeforeEnter,u=e.presenceAffectsLayout,m=void 0===u||u,b=function(){var e=Object(i.useRef)(!1),n=Object(l.c)(Object(i.useState)(0),2),t=n[0],a=n[1];return Object(d.a)((function(){return e.current=!0})),Object(i.useCallback)((function(){!e.current&&a(t+1)}),[t])}(),h=Object(i.useContext)(s.b);Object(s.c)(h)&&(b=h.forceUpdate);var p=Object(i.useRef)(!0),O=function(e){var n=[];return i.Children.forEach(e,(function(e){Object(i.isValidElement)(e)&&n.push(e)})),n}(n),x=Object(i.useRef)(O),v=Object(i.useRef)(new Map).current,g=Object(i.useRef)(new Set).current;if(function(e,n){e.forEach((function(e){var t=f(e);n.set(t,e)}))}(O,v),p.current)return p.current=!1,Object(i.createElement)(i.Fragment,null,O.map((function(e){return Object(i.createElement)(j,{key:f(e),isPresent:!0,initial:!!r&&void 0,presenceAffectsLayout:m},e)})));for(var w=Object(l.e)(O),y=x.current.map(f),k=O.map(f),E=y.length,z=0;z<E;z++){var C=y[z];-1===k.indexOf(C)?g.add(C):g.delete(C)}return o&&g.size&&(w=[]),g.forEach((function(e){if(-1===k.indexOf(e)){var n=v.get(e);if(n){var a=y.indexOf(e);w.splice(a,0,Object(i.createElement)(j,{key:f(n),isPresent:!1,onExitComplete:function(){v.delete(e),g.delete(e);var n=x.current.findIndex((function(n){return n.key===e}));x.current.splice(n,1),g.size||(x.current=O,b(),c&&c())},custom:t,presenceAffectsLayout:m},n))}}})),w=w.map((function(e){var n=e.key;return g.has(n)?e:Object(i.createElement)(j,{key:f(e),isPresent:!0,presenceAffectsLayout:m},e)})),x.current=w,Object(i.createElement)(i.Fragment,null,g.size?w:w.map((function(e){return Object(i.cloneElement)(e)})))},C=t(8),P=t(6),S=t(206),A=Object(P.d)(S.a.article)(O||(O=Object(C.a)(["\n    /* scroll-snap-align: start;\n    display: inline-flex;\n    flex-direction: column; */\n    width: 32rem;\n    min-width: 32rem;\n    border-radius: 2.5rem;\n    background-color: #272727;\n    box-shadow: 1rem 3rem 1.5rem 0 rgba(0,0,0, 0.16);\n\n    @media all and (max-width: 1000px) {\n        width: 30rem;\n        min-width: 30rem;\n        /* height: 47rem;*/\n\n\n        @media all and (max-width: 500px) {\n            width: 28rem;\n            min-width: 28rem;\n\n        }\n    }\n"]))),R=P.d.header(x||(x=Object(C.a)(["\n    img {\n        border-radius: 2.5rem 2.5rem 0 0;\n    }\n"]))),L=P.d.div(v||(v=Object(C.a)(["\n    background-color: #323232;\n    padding: 1rem 2rem;\n    height: 7rem;\n    display: flex;\n    align-items: center;\n\n    h3 {\n        font-size: 1.6rem;\n        /* display: flex;\n        align-items: center; */\n        display: -webkit-box;\n        -webkit-line-clamp: 2;\n        -webkit-box-orient: vertical;\n        text-overflow: ellipsis;\n        overflow: hidden;\n\n        /* text-align: center; */\n\n        @media all and (max-width: 500px) {\n            font-size: 1.2rem;\n\n        }\n    }\n"]))),M=Object(P.d)(S.a.div)(g||(g=Object(C.a)(["\n    /* overflow: hidden; */\n\n    img {\n        width: 100%;\n        height: 100%;\n        object-fit: contain;\n    }\n"]))),F=P.d.div(w||(w=Object(C.a)(["\n    border-radius: 0 0 2.5rem 2.5rem;\n    /* height: 100%; */\n\n    padding: 2rem;\n    font-size: 1.5rem;\n    display: flex;\n    flex-direction: column;\n    justify-content: space-between;\n    align-items: flex-start;\n    border-top: 1px solid #707070;\n\n\n    p {\n        /* margin-bottom: 2rem;\n        height: 9rem; */\n        display: -webkit-box;\n        -webkit-line-clamp: 3;\n        -webkit-box-orient: vertical;\n        text-overflow: ellipsis;\n        overflow: hidden;\n        opacity: 0.72;\n\n        margin-bottom: 4rem;\n    }\n\n    /* @media all and (max-width: 1000px) {\n        font-size: 1rem;\n        height: 15rem;\n\n        @media all and (max-width: 500px) {\n            height: 12rem;\n            padding: 1rem 2rem;\n\n            p {\n                margin-bottom: 1rem;\n\n            }\n        }\n    } */\n"]))),B=P.d.a(y||(y=Object(C.a)(["\n    display: block;\n    color: ",";\n\n"])),(function(e){return e.theme.white})),I=t(1),V=function(e){var n=e.title,t=e.content,i=e.image,a=e.path,l=Object(o.a)(e,["title","content","image","path"]);return Object(I.jsx)(z,{initial:!1,exitBeforeEnter:!0,children:Object(I.jsxs)(A,Object(c.a)(Object(c.a)({initial:{},animate:{opacity:1,y:0,z:0},transition:{ease:"easeInOut",duration:.4}},l),{},{children:[Object(I.jsxs)(R,{children:[Object(I.jsx)(M,{initial:{opacity:0},animate:{opacity:1,filter:"blur(0)"},exit:{opacity:0},transition:{ease:"easeInOut"},children:Object(I.jsx)("img",{src:i.src,alt:i.alt})}),Object(I.jsx)(L,{children:Object(I.jsx)("h3",{children:n})})]}),Object(I.jsxs)(F,{children:[Object(I.jsx)("p",{children:t}),Object(I.jsx)(r.b,{href:a,children:Object(I.jsxs)(B,{children:["Zisti viac ","->"]})})]})]}),n)})},D=t(55),H=P.d.div(k||(k=Object(C.a)(["\n    max-width: 105rem;\n    display: flex;\n    gap: 3rem;\n    justify-content: space-between;\n    flex-wrap: wrap;\n    padding: 0 1rem; \n    margin: 0 auto 4rem;\n"]))),J=Object(P.d)(S.a.div)(E||(E=Object(C.a)(["\n    cursor: pointer;\n    width: 32rem;\n    min-width: 32rem;\n    border-radius: 2.5rem;\n    color: #fff;\n    background-color: #272727;\n    box-shadow: 1rem 3rem 1.5rem 0 rgba(0,0,0, 0.16);\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    height: 100%;\n\n    p {\n        font-size: 35rem;\n        line-height: 1\n    }\n\n    @media all and (max-width: 1000px) {\n        width: 30rem;\n        min-width: 30rem;\n\n        @media all and (max-width: 500px) {\n            width: 28rem;\n            min-width: 28rem;\n        }\n    }\n"])));n.a=function(e){var n=e.posts,t=e.createRoute;return Object(I.jsxs)(a.a.Fragment,{children:[Object(I.jsxs)(H,{children:[Object(I.jsx)(r.b,{to:t,children:Object(I.jsx)(J,{whileHover:{scale:1.05,color:"#BFD600"},whileTap:{scale:.95},children:Object(I.jsx)("p",{children:"+"})})}),n.map((function(e,t){var i=e.title,a=e.content,r=e.image,c=e.slug;return Object(I.jsx)(V,{title:i,content:a,image:r,path:"/novinky/".concat(c),isLast:n.length===t,exit:{x:"-115%"}},t)}))]}),Object(I.jsx)(D.a,{center:!0,pill:!0,children:"Na\u010d\xedta\u0165 viac"})]})}}}]);
//# sourceMappingURL=7.1cc4cfa7.chunk.js.map