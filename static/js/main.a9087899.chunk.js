(this.webpackJsonpchamp=this.webpackJsonpchamp||[]).push([[0],{14:function(e,t,a){e.exports={creator1:"Credits_creator1__1kETz",creator2:"Credits_creator2__3x8Z4",createdBy:"Credits_createdBy__UhbHO"}},15:function(e,t,a){e.exports={parentSidebar:"Sidebar_parentSidebar__1J-v9",childSidebar:"Sidebar_childSidebar__MLg1B",active:"Sidebar_active__4H2KY",title:"Sidebar_title__3NT3S",sideBarList:"Sidebar_sideBarList__3wgoY"}},27:function(e,t,a){e.exports=a(43)},32:function(e,t,a){},43:function(e,t,a){"use strict";a.r(t);var n=a(0),i=a.n(n),r=a(16),o=a.n(r),c=(a(32),a(9)),l=a(1),s=a(15),m=a.n(s),u=Object(l.f)((function(e){var t=e.history,a=function(e,t){if(e.location.pathname===t)return m.a.title};return i.a.createElement("div",{className:m.a.parentSidebar},i.a.createElement("div",{className:m.a.childSidebar},i.a.createElement("ul",{className:m.a.sideBarList},i.a.createElement(c.b,{to:"/"},i.a.createElement("li",{className:a(t,"/")},i.a.createElement("span",null,"CHAMP"),i.a.createElement("span",null,"A film by kinectik studios"))),i.a.createElement(c.b,{to:"chapter-1"},i.a.createElement("li",{className:a(t,"/chapter-1")},i.a.createElement("span",null,"Chapter 1"),i.a.createElement("span",null,"William Lartey"))),i.a.createElement(c.b,{to:"chapter-2"},i.a.createElement("li",{className:a(t,"/chapter-2")},i.a.createElement("span",null,"Chapter 2"),i.a.createElement("br",null),i.a.createElement("span",null,"Nii Tagoe"))),i.a.createElement(c.b,{to:"/chapter-3"},i.a.createElement("li",{className:a(t,"/chapter-3")},i.a.createElement("span",null,"Chapter 3"),i.a.createElement("span",null,"Joseph Tetteh"))),i.a.createElement(c.b,{to:"/epilogue"},i.a.createElement("li",{className:a(t,"/epilogue")},i.a.createElement("span",null,"Epilogue"))),i.a.createElement(c.b,{to:"/credits"},i.a.createElement("li",{className:a(t,"/credits")},i.a.createElement("span",null,"Credits"))))))})),d=a(10),p=a(26),h=a(17),E=a.n(h),v=(a(38),a(12)),f=a(2),y=a(7),g=a.n(y),b=function(e){var t=e.chapter,a=e.chapterText,r=e.boxer,o=e.openingVidLink,c=e.videoLink,s=e.videoPoster,m=e.defaultImg,u=e.next,h=e.nextLink,y=e.id,b=null,_=null;var x=Object(n.useState)(!0),w=Object(d.a)(x,2),C=w[0],k=w[1],P=Object(n.useState)(!1),N=Object(d.a)(P,2),L=N[0],T=N[1],S=Object(n.useState)(0),j=Object(d.a)(S,2),I=j[0],O=j[1],B=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0;0===e||e.preventDefault(),k((function(e){return!e}))},M=function(e){return e.preventDefault(),O(I>3?0:I+1)},A=function(e){if(I>3)return O(0);0===I&&e.deltaY<0||(e.deltaY<0?O(I-1):e.deltaY>0&&(console.log(I),O(I+1)))};function Y(e){var t=function(e){return e.touches||e.originalEvent.touches}(e)[0];b=t.clientX,_=t.clientY}function G(e){if(I>3&&O(0),b&&_){var t=e.touches[0].clientX,a=e.touches[0].clientY,n=b-t,i=_-a;if(Math.abs(n)>Math.abs(i));else if(i>0)O(I+1);else{if(i<0&&0===I)return;O(I-1)}b=null,_=null}}return Object(n.useEffect)((function(){var e=E.a.throttle(A,600);return window.addEventListener("wheel",e,!1),window.addEventListener("touchstart",Y,!1),window.addEventListener("touchmove",G,!1),function(){window.removeEventListener("wheel",e,!1),window.removeEventListener("touchstart",Y,!1),window.removeEventListener("touchmove",G,!1)}}),[I]),i.a.createElement("div",{className:g.a.champParent,onClick:function(){L||(B(),T(!0))}},function(){switch(I){case 0:return i.a.createElement(f.a.video,{initial:{opacity:0},animate:{opacity:1},transition:{delay:1,duration:3.5},key:"".concat(y,"7567565003"),className:g.a.champ,autoPlay:!0,muted:C},i.a.createElement("source",{src:o}),"Your browser does not support the video tag.");case 1:return i.a.createElement(f.a.div,{className:g.a.videoContainer,initial:{y:300,x:-300},animate:{x:"-40vw",y:"-40vh"},transition:{duration:.5},exit:{opacity:0}},i.a.createElement(p.DefaultPlayer,{onEnded:function(){return console.log("whtevs")},autoPlay:!0,key:"".concat(y,"575632575")+0,className:g.a.videoPlayer,controls:["PlayPause","Seek","Time","Volume","Fullscreen"],poster:s,onCanPlayThrough:function(){}},i.a.createElement("source",{src:c,type:"video/webm"}),i.a.createElement("track",{label:"English",kind:"subtitles",srcLang:"en",default:!0})),i.a.createElement("h1",null,r));case 2:return i.a.createElement(f.a.img,{key:"".concat(y,"69")+0,initial:{opacity:0},animate:{opacity:1},transition:{duration:3.5},src:m,className:g.a.champ,exit:{opacity:0}});case 3:return console.log(h),i.a.createElement(l.a,{to:h});default:return i.a.createElement("video",{className:g.a.champ,autoPlay:!0,muted:C},i.a.createElement("source",{src:o}),"Your browser does not support the video tag.")}}(),function(){switch(I){case 0:return i.a.createElement(f.a.div,{key:"".concat(y,"586465")+0,initial:{opacity:0},animate:{opacity:.8},transition:{delay:3.5,duration:3.5},className:g.a.textContainer},i.a.createElement("h1",null,t),i.a.createElement("h2",null,a,i.a.createElement("br",null)));case 1:return;case 2:return i.a.createElement(f.a.div,{key:"".concat(y,"15574467")+0,transition:{duration:1.2,ease:"linear"},className:g.a.textContainerPop1},i.a.createElement("h1",null,"NEXT"),i.a.createElement("h2",null,u,i.a.createElement("br",null)));default:return i.a.createElement(f.a.div,{key:"".concat(y,"25664")+0,initial:{opacity:0},animate:{opacity:.8},transition:{delay:3.5,duration:3.5},className:g.a.textContainer},i.a.createElement("h1",null,t),i.a.createElement("h2",null,a,i.a.createElement("br",null)))}}(),i.a.createElement(f.a.div,{key:984589,initial:{opacity:0},animate:{opacity:.8},transition:{delay:3.5,duration:3.5},className:g.a.textContainer2},0===I?i.a.createElement(v.SliceButton,{text:"play",onClick:M}):i.a.createElement(v.SliceButton,{text:"scroll",onClick:M})),function(){if(0===I||I>2)return i.a.createElement(v.SliceButton,{onClick:B,className:g.a.mute,text:C?"sound":"mute"})}())},_=a(8),x=a.n(_),w=function(e){var t=e.nextLink,a=null,r=null;function o(e){return e.touches||e.originalEvent.touches}function c(e){var t=o(e)[0];a=t.clientX,r=t.clientY}var s=function(){h((function(e){return!e}))},m=Object(n.useState)(!0),u=Object(d.a)(m,2),p=u[0],h=u[1],y=Object(n.useState)(!1),g=Object(d.a)(y,2),b=g[0],_=g[1],w=Object(n.useState)(0),C=Object(d.a)(w,2),k=C[0],P=C[1],N=function(e){if(k>3)return P(0);0===k&&e.deltaY<0||(e.deltaY<0?P(k-1):e.deltaY>0&&(console.log(k),P(k+1)))};function c(e){var t=o(e)[0];a=t.clientX,r=t.clientY}function L(e){if(k>3&&P(0),a&&r){var t=e.touches[0].clientX,n=e.touches[0].clientY,i=a-t,o=r-n;if(Math.abs(i)>Math.abs(o));else if(o>0)P(k+1);else{if(o<0&&0===k)return;P(k-1)}a=null,r=null}}return Object(n.useEffect)((function(){var e=E.a.throttle(N,600);return window.addEventListener("wheel",e),window.addEventListener("touchstart",c,!1),window.addEventListener("touchmove",L,!1),function(){window.removeEventListener("wheel",e),window.removeEventListener("touchstart",c,!1),window.removeEventListener("touchmove",L,!1)}}),[k]),i.a.createElement("div",{className:x.a.champParent,onClick:function(){b||(s(),_(!0))}},function(){switch(k){case 0:return i.a.createElement(f.a.video,{className:x.a.champ,autoPlay:!0,loop:!0,muted:p},i.a.createElement("source",{src:"https://i.imgur.com/1InZsdT.mp4"}),"Your browser does not support the video tag.");case 1:return i.a.createElement(f.a.img,{key:57575,initial:{opacity:0},animate:{opacity:1},transition:{duration:3.5},src:"https://sportsafric.com/wp-content/uploads/2020/01/BUKOM.jpg",className:x.a.champ});case 2:return i.a.createElement(f.a.img,{key:69,initial:{opacity:0},animate:{opacity:1},transition:{duration:3.5},src:"https://i.imgur.com/PMeG84N.jpg",className:x.a.champ});case 3:return i.a.createElement(l.a,{to:t});default:return i.a.createElement("video",{className:x.a.champ,autoPlay:!0,loop:!0,muted:p},i.a.createElement("source",{src:"https://i.imgur.com/1InZsdT.mp4"}),"Your browser does not support the video tag.")}}(),function(){switch(k){case 0:return i.a.createElement(f.a.div,{key:55,initial:{opacity:0},animate:{opacity:.8},transition:{delay:3.5,duration:3.5},className:x.a.textContainer},i.a.createElement("h1",null,"CHAMP"),i.a.createElement("h2",null,"From the creative vision of Reginald Anim and KinectiK Studios",i.a.createElement("br",null)));case 1:return i.a.createElement(f.a.div,{key:16767,initial:{y:"+200vh",opacity:0},animate:{y:0,opacity:.8},transition:{duration:1.2,ease:"linear"},className:x.a.textContainerPop1},i.a.createElement("h1",null,"BUKOM"),i.a.createElement("h2",null,"Bukom is a fishing community in the Jamestown district of Accra, the capital of Ghana. This little community is known for producing world boxing champions like Ike Quartey, Azumah Nelson and Joshua Clottey; to name a few. In Bukom, there are boxing gyms set up all over. Here, boxing is a very big thing and is a part of everyday life.",i.a.createElement("br",null)));case 2:return i.a.createElement(f.a.div,{key:155767,transition:{duration:1.2,ease:"linear"},className:x.a.textContainerPop1},i.a.createElement("h1",null,"FILM"),i.a.createElement("h2",null,"CHAMP documents three aspiring teenage boxers \u2013 William Lartey, Nii Armah Tagoe, and Joseph Tetteh \u2013 reflecting on how they got into boxing, their work ethic and challenges, and how far they want to go in their careers.",i.a.createElement("br",null)));default:return i.a.createElement(f.a.div,{key:2,initial:{opacity:0},animate:{opacity:.8},transition:{delay:3.5,duration:3.5},className:x.a.textContainer},i.a.createElement("h1",null,"CHAMP"),i.a.createElement("h2",null,"From the creative vision of Reginald Anim and Khalid Keith-Pierre Iddisah",i.a.createElement("br",null)))}}(),i.a.createElement(f.a.div,{key:984589,initial:{opacity:0},animate:{opacity:.8},transition:{delay:3.5,duration:3.5},className:x.a.textContainer2},i.a.createElement(v.SliceButton,{text:"scroll",onClick:function(e){return e.preventDefault(),k>3?P(0):(console.log(k),P(k+1))}})),function(){if(0===k||k>2)return i.a.createElement(v.SliceButton,{onClick:s,className:x.a.mute,text:p?"sound":"mute"})}())},C=a(14),k=a.n(C),P=function(){return i.a.createElement("div",null,i.a.createElement("div",{className:k.a.creator1},i.a.createElement("a",{href:"https://regiew.com"},i.a.createElement(f.a.h1,{initial:{opacity:0},animate:{opacity:1},transition:{delay:5,duration:6.5},className:k.a.createdBy},"REGINALD ANIM"))),i.a.createElement("div",{className:k.a.creator2},i.a.createElement("a",{href:"https://www.instagram.com/traptchalla/"},i.a.createElement(f.a.h1,{initial:{opacity:0},animate:{opacity:1},transition:{delay:7,duration:6.5},className:k.a.createdBy},"Khalid Keith-Pierre Iddisah"))),i.a.createElement(f.a.h2,{initial:{opacity:0},animate:{opacity:1},transition:{delay:1.5,duration:3.5},className:k.a.createdBy},"CREATED BY"))};var N=function(){return i.a.createElement(c.a,{basename:"/"},i.a.createElement(u,null),i.a.createElement(l.b,{key:8443434857,exact:!0,path:"/",render:function(){return i.a.createElement(w,{nextLink:"/chapter-1"})}}),i.a.createElement(l.b,{key:8444343857,exact:!0,path:"/chapter-1",render:function(){return i.a.createElement(b,{id:"chapter-1",nextLink:"/chapter-2",next:"Nii Tagoe",boxer:"WILLIAM LARTEY",chapter:"CHAPTER 1",chapterText:"My boxing name is Stubborn",openingVidLink:"https://i.imgur.com/2UsEhqw.mp4",videoLink:"https://srv-file12.gofile.io/download/4jwFuG/stubborn%20180_Trim.mp4",videoPoster:"https://i.imgur.com/1zEauxk.png",defaultImg:"https://i.imgur.com/PMeG84N.jpg"})}}),i.a.createElement(l.b,{exact:!0,key:844844454557,path:"/chapter-2",render:function(){return i.a.createElement(b,{id:"chapter-2",nextLink:"/chapter-3",next:"Joshua Clottey",boxer:"NII Tagoe",chapter:"CHAPTER 2",chapterText:"I love boxing",openingVidLink:"https://i.imgur.com/Pq0ToGv.mp4",videoLink:"https://srv-file12.gofile.io/download/4jwFuG/Tagoe.mp4",videoPoster:"https://i.imgur.com/QMVY0ud.png",defaultImg:"https://i.imgur.com/PMeG84N.jpg"})}}),i.a.createElement(l.b,{key:84449489957,exact:!0,path:"/chapter-3",render:function(){return i.a.createElement(b,{nextLink:"/epilogue",id:"/chapter-3",next:"EPILOGUE",boxer:"JOSEPH TETTEH",chapter:"CHAPTER 3",chapterText:"In the ring i have different names",openingVidLink:"https://i.imgur.com/2e54QWe.mp4",videoLink:"https://srv-file12.gofile.io/download/4jwFuG/Joseph.mp4",videoPoster:"https://imgur.com/a/qM4nBRl",defaultImg:"https://i.imgur.com/PMeG84N.jpg"})}}),i.a.createElement(l.b,{key:84449466789957,exact:!0,path:"/epilogue",render:function(){return i.a.createElement(b,{nextLink:"/credits",id:"/epilogue",next:"ABOUT",boxer:"EPILOGUE",chapter:"EPILOGUE",chapterText:'"No one is responsible for me"',openingVidLink:"https://i.imgur.com/dvchPn7.mp4",videoLink:"https://srv-file12.gofile.io/download/4jwFuG/Epilogue%20180.mp4",videoPoster:"https://imgur.com/TPrSDFOg",defaultImg:"https://i.imgur.com/PMeG84N.jpg"})}}),i.a.createElement(l.b,{exact:!0,path:"/credits",component:P}))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(i.a.createElement(i.a.StrictMode,null,i.a.createElement(N,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},7:function(e,t,a){e.exports={champParent:"Chapter_champParent__3vjz_",champ:"Chapter_champ__jj2Zs",textContainer:"Chapter_textContainer__2oW6N",videoContainer:"Chapter_videoContainer__-zrKU",videoPlayer:"Chapter_videoPlayer__2eo4b",textContainerPop1:"Chapter_textContainerPop1__1GTe-",textContainer2:"Chapter_textContainer2__2IKyi",bounce:"Chapter_bounce__2A_iR",mute:"Chapter_mute__2mgWb"}},8:function(e,t,a){e.exports={champParent:"Champ_champParent__3lS6Z",champ:"Champ_champ__nPXAc",textContainer:"Champ_textContainer__jPvL-",textContainerPop1:"Champ_textContainerPop1__Ts_gI",textContainer2:"Champ_textContainer2__3OdvC",bounce:"Champ_bounce__1PRL1",mute:"Champ_mute__2ZRLY"}}},[[27,1,2]]]);
//# sourceMappingURL=main.a9087899.chunk.js.map