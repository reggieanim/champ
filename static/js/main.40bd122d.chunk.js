(this.webpackJsonpchamp=this.webpackJsonpchamp||[]).push([[0],{14:function(e,t,a){e.exports={parentSidebar:"Sidebar_parentSidebar__1J-v9",childSidebar:"Sidebar_childSidebar__MLg1B",active:"Sidebar_active__4H2KY",title:"Sidebar_title__3NT3S",sideBarList:"Sidebar_sideBarList__3wgoY"}},26:function(e,t,a){e.exports=a(42)},31:function(e,t,a){},42:function(e,t,a){"use strict";a.r(t);var n=a(0),i=a.n(n),r=a(15),o=a.n(r),c=(a(31),a(9)),l=a(1),s=a(14),u=a.n(s),m=Object(l.f)((function(e){var t=e.history,a=function(e,t){if(e.location.pathname===t)return u.a.title};return i.a.createElement("div",{className:u.a.parentSidebar},i.a.createElement("div",{className:u.a.childSidebar},i.a.createElement("ul",{className:u.a.sideBarList},i.a.createElement(c.b,{to:"/"},i.a.createElement("li",{className:a(t,"/")},i.a.createElement("span",null,"CHAMP"),i.a.createElement("span",null,"A film by kinectik studios"))),i.a.createElement(c.b,{to:"chapter-1"},i.a.createElement("li",{className:a(t,"/chapter-1")},i.a.createElement("span",null,"Chapter 1"),i.a.createElement("span",null,"William Lartey"))),i.a.createElement(c.b,{to:"chapter-2"},i.a.createElement("li",{className:a(t,"/chapter-2")},i.a.createElement("span",null,"Chapter 2"),i.a.createElement("br",null),i.a.createElement("span",null,"Nii Tagoe"))),i.a.createElement(c.b,{to:"/chapter-3"},i.a.createElement("li",{className:a(t,"/chapter-3")},i.a.createElement("span",null,"Chapter 3"),i.a.createElement("span",null,"Joseph Tetteh"))),i.a.createElement(c.b,{to:"/epilogue"},i.a.createElement("li",{className:a(t,"/epilogue")},i.a.createElement("span",null,"Epilogue"))))))})),p=a(10),h=a(25),d=a(16),E=a.n(d),v=(a(37),a(12)),f=a(3),g=a(7),y=a.n(g),b=function(e){var t=e.chapter,a=e.chapterText,r=e.boxer,o=e.openingVidLink,c=e.videoLink,s=e.videoPoster,u=e.defaultImg,m=e.next,d=e.nextLink,g=e.id,b=null,x=null;var _=0;var w=Object(n.useState)(!0),C=Object(p.a)(w,2),k=C[0],P=C[1],L=Object(n.useState)(!1),N=Object(p.a)(L,2),T=N[0],S=N[1],j=Object(n.useState)(0),O=Object(p.a)(j,2),I=O[0],M=O[1],A=function(){P((function(e){return!e}))},Y=function(){if(_>3)return _=0;_++,console.log(_),M(_)},B=function(e){if(_>3)return _=0;0===_&&e.deltaY<0||(e.deltaY<0?_--:_++,M(_))};function G(e){var t=function(e){return e.touches||e.originalEvent.touches}(e)[0];b=t.clientX,x=t.clientY}function H(e){if(_>3)return _=0;if(b&&x){var t=e.touches[0].clientX,a=e.touches[0].clientY,n=b-t,i=x-a;if(Math.abs(n)>Math.abs(i));else if(i>0)_++,M(_);else{if(i<0&&0===_)return;_--,M(_)}b=null,x=null}}return Object(n.useEffect)((function(){var e=E.a.throttle(B,600);return window.addEventListener("wheel",e,!1),window.addEventListener("touchstart",G,!1),window.addEventListener("touchmove",H,!1),function(){window.removeEventListener("wheel",e,!1),window.removeEventListener("touchstart",G,!1),window.removeEventListener("touchmove",H,!1)}}),[]),i.a.createElement("div",{className:y.a.champParent,onClick:function(){T||(A(),S(!0))}},function(){switch(I){case 0:return i.a.createElement(f.a.video,{initial:{opacity:0},animate:{opacity:1},transition:{delay:1,duration:3.5},key:"".concat(g,"7567565003"),className:y.a.champ,autoPlay:!0,muted:k},i.a.createElement("source",{src:o}),"Your browser does not support the video tag.");case 1:return i.a.createElement(f.a.div,{className:y.a.videoContainer,initial:{y:300,x:-300},animate:{x:"-40vw",y:"-40vh"},transition:{duration:.5},exit:{opacity:0}},i.a.createElement(h.DefaultPlayer,{onEnded:function(){return console.log("whtevs")},autoPlay:!0,key:"".concat(g,"575632575")+_,className:y.a.videoPlayer,controls:["PlayPause","Seek","Time","Volume","Fullscreen"],poster:s,onCanPlayThrough:function(){}},i.a.createElement("source",{src:c,type:"video/webm"}),i.a.createElement("track",{label:"English",kind:"subtitles",srcLang:"en",default:!0})),i.a.createElement("h1",null,r));case 2:return i.a.createElement(f.a.img,{key:"".concat(g,"69")+_,initial:{opacity:0},animate:{opacity:1},transition:{duration:3.5},src:u,className:y.a.champ,exit:{opacity:0}});case 3:return console.log(d),i.a.createElement(l.a,{to:d});default:return i.a.createElement("video",{className:y.a.champ,autoPlay:!0,muted:k},i.a.createElement("source",{src:o}),"Your browser does not support the video tag.")}}(),function(){switch(I){case 0:return i.a.createElement(f.a.div,{key:"".concat(g,"586465")+_,initial:{opacity:0},animate:{opacity:.8},transition:{delay:3.5,duration:3.5},className:y.a.textContainer},i.a.createElement("h1",null,t),i.a.createElement("h2",null,a,i.a.createElement("br",null)));case 1:return;case 2:return i.a.createElement(f.a.div,{key:"".concat(g,"15574467")+_,transition:{duration:1.2,ease:"linear"},className:y.a.textContainerPop1},i.a.createElement("h1",null,"NEXT"),i.a.createElement("h2",null,m,i.a.createElement("br",null)));default:return i.a.createElement(f.a.div,{key:"".concat(g,"25664")+_,initial:{opacity:0},animate:{opacity:.8},transition:{delay:3.5,duration:3.5},className:y.a.textContainer},i.a.createElement("h1",null,t),i.a.createElement("h2",null,a,i.a.createElement("br",null)))}}(),i.a.createElement(f.a.div,{key:984589,initial:{opacity:0},animate:{opacity:.8},transition:{delay:3.5,duration:3.5},className:y.a.textContainer2},0===I?i.a.createElement(v.SliceButton,{text:"play",onClick:Y}):i.a.createElement(v.SliceButton,{text:"scroll",onClick:Y})),function(){if(0===I||I>2)return i.a.createElement(v.SliceButton,{onClick:A,className:y.a.mute,text:k?"sound":"mute"})}())},x=a(8),_=a.n(x),w=function(e){var t=e.nextLink,a=null,r=null;function o(e){var t=function(e){return e.touches||e.originalEvent.touches}(e)[0];a=t.clientX,r=t.clientY}function c(e){if(s>2)return s=0;if(a&&r){var t=e.touches[0].clientX,n=e.touches[0].clientY,i=a-t,o=r-n;if(Math.abs(i)>Math.abs(o));else if(o>0)s++,L(s);else{if(o<0&&0===s)return;s--,L(s)}a=null,r=null}}var s=0,u=function(){g((function(e){return!e}))},m=Object(n.useState)(!0),h=Object(p.a)(m,2),d=h[0],g=h[1],y=Object(n.useState)(!1),b=Object(p.a)(y,2),x=b[0],w=b[1],C=Object(n.useState)(0),k=Object(p.a)(C,2),P=k[0],L=k[1],N=function(e){if(s>3)return s=0;0===s&&e.deltaY<0||(e.deltaY<0?s--:s++,L(s))};return Object(n.useEffect)((function(){var e=E.a.throttle(N,600);return window.addEventListener("wheel",e),window.addEventListener("touchstart",o,!1),window.addEventListener("touchmove",c,!1),console.log("hi"),function(){window.removeEventListener("wheel",e),window.removeEventListener("touchstart",o,!1),window.removeEventListener("touchmove",c,!1)}}),[]),i.a.createElement("div",{className:_.a.champParent,onClick:function(){x||(u(),w(!0))}},function(){switch(P){case 0:return i.a.createElement(f.a.video,{className:_.a.champ,autoPlay:!0,loop:!0,muted:d},i.a.createElement("source",{src:"https://i.imgur.com/1InZsdT.mp4"}),"Your browser does not support the video tag.");case 1:return i.a.createElement(f.a.img,{key:57575+s,initial:{opacity:0},animate:{opacity:1},transition:{duration:3.5},src:"https://sportsafric.com/wp-content/uploads/2020/01/BUKOM.jpg",className:_.a.champ});case 2:return i.a.createElement(f.a.img,{key:69+s,initial:{opacity:0},animate:{opacity:1},transition:{duration:3.5},src:"https://i.imgur.com/PMeG84N.jpg",className:_.a.champ});case 3:return i.a.createElement(l.a,{to:t});default:return i.a.createElement("video",{className:_.a.champ,autoPlay:!0,loop:!0,muted:d},i.a.createElement("source",{src:"https://i.imgur.com/1InZsdT.mp4"}),"Your browser does not support the video tag.")}}(),function(){switch(P){case 0:return i.a.createElement(f.a.div,{key:55+s,initial:{opacity:0},animate:{opacity:.8},transition:{delay:3.5,duration:3.5},className:_.a.textContainer},i.a.createElement("h1",null,"CHAMP"),i.a.createElement("h2",null,"From the creative vision of Reginald Anim and KinectiK Studios",i.a.createElement("br",null)));case 1:return i.a.createElement(f.a.div,{key:16767+s,initial:{y:"+200vh",opacity:0},animate:{y:0,opacity:.8},transition:{duration:1.2,ease:"linear"},className:_.a.textContainerPop1},i.a.createElement("h1",null,"BUKOM"),i.a.createElement("h2",null,"Bukom is a fishing community in the Jamestown district of Accra, the capital of Ghana. This little community is known for producing world boxing champions like Ike Quartey, Azumah Nelson and Joshua Clottey; to name a few. In Bukom, there are boxing gyms set up all over. Here, boxing is a very big thing and is a part of everyday life.",i.a.createElement("br",null)));case 2:return i.a.createElement(f.a.div,{key:155767+s,transition:{duration:1.2,ease:"linear"},className:_.a.textContainerPop1},i.a.createElement("h1",null,"FILM"),i.a.createElement("h2",null,"CHAMP documents three aspiring teenage boxers \u2013 William Lartey, Nii Armah Tagoe, and Joseph Tetteh \u2013 reflecting on how they got into boxing, their work ethic and challenges, and how far they want to go in their careers.",i.a.createElement("br",null)));default:return i.a.createElement(f.a.div,{key:2+s,initial:{opacity:0},animate:{opacity:.8},transition:{delay:3.5,duration:3.5},className:_.a.textContainer},i.a.createElement("h1",null,"CHAMP"),i.a.createElement("h2",null,"From the creative vision of Reginald Anim and KinectiK Studios",i.a.createElement("br",null)))}}(),i.a.createElement(f.a.div,{key:984589,initial:{opacity:0},animate:{opacity:.8},transition:{delay:3.5,duration:3.5},className:_.a.textContainer2},i.a.createElement(v.SliceButton,{text:"scroll",onClick:function(){if(P>2)return L(0);L(P+1)}})),function(){if(0===P||P>2)return i.a.createElement(v.SliceButton,{onClick:u,className:_.a.mute,text:d?"sound":"mute"})}())};var C=function(){return i.a.createElement(c.a,{basename:"/champ"},i.a.createElement(m,null),i.a.createElement(l.b,{key:8443434857,exact:!0,path:"/",render:function(){return i.a.createElement(w,{nextLink:"/chapter-1"})}}),i.a.createElement(l.b,{key:8444343857,exact:!0,path:"/chapter-1",render:function(){return i.a.createElement(b,{id:"chapter-1",nextLink:"/chapter-2",next:"Nii Tagoe",boxer:"WILLIAM LARTEY",chapter:"CHAPTER 1",chapterText:"My boxing name is Stubborn",openingVidLink:"https://i.imgur.com/2UsEhqw.mp4",videoLink:"https://srv-file12.gofile.io/download/4jwFuG/stubborn%20180_Trim.mp4",videoPoster:"https://i.imgur.com/1zEauxk.png",defaultImg:"https://i.imgur.com/PMeG84N.jpg"})}}),i.a.createElement(l.b,{exact:!0,key:844844454557,path:"/chapter-2",render:function(){return i.a.createElement(b,{id:"chapter-2",nextLink:"/chapter-3",next:"Joshua Clottey",boxer:"NII Tagoe",chapter:"CHAPTER 2",chapterText:"I love boxing",openingVidLink:"https://i.imgur.com/Pq0ToGv.mp4",videoLink:"https://srv-file12.gofile.io/download/4jwFuG/Tagoe.mp4",videoPoster:"https://i.imgur.com/QMVY0ud.png",defaultImg:"https://i.imgur.com/PMeG84N.jpg"})}}),i.a.createElement(l.b,{key:84449489957,exact:!0,path:"/chapter-3",render:function(){return i.a.createElement(b,{nextLink:"/epilogue",id:"/chapter-3",next:"EPILOGUE",boxer:"JOSEPH TETTEH",chapter:"CHAPTER 3",chapterText:"In the ring i have different names",openingVidLink:"https://i.imgur.com/2e54QWe.mp4",videoLink:"https://srv-file12.gofile.io/download/4jwFuG/Joseph.mp4",videoPoster:"https://i.imgur.com/2e54QWe.mp4",defaultImg:"https://i.imgur.com/PMeG84N.jpg"})}}),i.a.createElement(l.b,{key:84449466789957,exact:!0,path:"/epilogue",render:function(){return i.a.createElement(b,{nextLink:"/",id:"/epilogue",next:"ABOUT",boxer:"EPILOGUE",chapter:"EPILOGUE",chapterText:'No one is responsible for me"',openingVidLink:"https://i.imgur.com/dvchPn7.mp4",videoLink:"https://srv-file12.gofile.io/download/4jwFuG/Epilogue%20180.mp4",videoPoster:"https://imgur.com/TPrSDFOg",defaultImg:"https://i.imgur.com/PMeG84N.jpg"})}}))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(i.a.createElement(i.a.StrictMode,null,i.a.createElement(C,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},7:function(e,t,a){e.exports={champParent:"Chapter_champParent__3vjz_",champ:"Chapter_champ__jj2Zs",textContainer:"Chapter_textContainer__2oW6N",videoContainer:"Chapter_videoContainer__-zrKU",videoPlayer:"Chapter_videoPlayer__2eo4b",textContainerPop1:"Chapter_textContainerPop1__1GTe-",textContainer2:"Chapter_textContainer2__2IKyi",bounce:"Chapter_bounce__2A_iR",mute:"Chapter_mute__2mgWb"}},8:function(e,t,a){e.exports={champParent:"Champ_champParent__3lS6Z",champ:"Champ_champ__nPXAc",textContainer:"Champ_textContainer__jPvL-",textContainerPop1:"Champ_textContainerPop1__Ts_gI",textContainer2:"Champ_textContainer2__3OdvC",bounce:"Champ_bounce__1PRL1",mute:"Champ_mute__2ZRLY"}}},[[26,1,2]]]);
//# sourceMappingURL=main.40bd122d.chunk.js.map