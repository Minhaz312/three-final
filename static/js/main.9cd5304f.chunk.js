(this.webpackJsonprectsidebar=this.webpackJsonprectsidebar||[]).push([[0],{33:function(e){e.exports=JSON.parse('{"modelList":[{"id":0,"images":[{"rotateOn":"front","image":"scene1-front.PNG"},{"rotateOn":"back","image":"scene1-back.PNG"},{"rotateOn":"left","image":"scene1-left.PNG"},{"rotateOn":"right","image":"scene1-right.PNG"},{"rotateOn":"top","image":"scene1-top.PNG"},{"rotateOn":"bottom","image":"scene1-bottom.PNG"}],"defaultViewAngle":"right","filesize":16869.43359375,"animate":false,"filename":"scene.glb","bg":"white"},{"id":1,"images":[{"rotateOn":"front","image":"scene2-front.PNG"},{"rotateOn":"back","image":"scene1-back.PNG"},{"rotateOn":"left","image":"scene1-left.PNG"},{"rotateOn":"right","image":"scene1-right.PNG"},{"rotateOn":"top","image":"scene1-top.PNG"},{"rotateOn":"bottom","image":"scene1-bottom.PNG"}],"defaultViewAngle":"right","filesize":9512.96,"animate":false,"filename":"scene3.glb","bg":"white"},{"id":2,"images":[{"rotateOn":"front","image":"scene3-front.PNG"},{"rotateOn":"back","image":"scene1-back.PNG"},{"rotateOn":"left","image":"scene1-left.PNG"},{"rotateOn":"right","image":"scene1-right.PNG"},{"rotateOn":"top","image":"scene1-top.PNG"},{"rotateOn":"bottom","image":"scene1-bottom.PNG"}],"defaultViewAngle":"right","filesize":33587.2,"animate":false,"filename":"scene2.glb","bg":"grey"},{"id":3,"images":[{"rotateOn":"front","image":"scene4-front.PNG"},{"rotateOn":"back","image":"scene1-back.PNG"},{"rotateOn":"left","image":"scene1-left.PNG"},{"rotateOn":"right","image":"scene1-right.PNG"},{"rotateOn":"top","image":"scene1-top.PNG"},{"rotateOn":"bottom","image":"scene1-bottom.PNG"}],"defaultViewAngle":"right","filesize":114.4375,"animate":false,"filename":"adamHead.gltf","bg":"white"},{"id":4,"images":[{"rotateOn":"front","image":"scene2-front.PNG"},{"rotateOn":"back","image":"scene1-back.PNG"},{"rotateOn":"left","image":"scene1-left.PNG"},{"rotateOn":"right","image":"scene1-right.PNG"},{"rotateOn":"top","image":"scene1-top.PNG"},{"rotateOn":"bottom","image":"scene1-bottom.PNG"}],"defaultViewAngle":"right","filesize":5.1923828125,"animate":false,"filename":"substance _file.gltf","bg":"white"},{"id":5,"images":[{"rotateOn":"front","image":"park_bench-front.PNG"},{"rotateOn":"back","image":"scene1-back.PNG"},{"rotateOn":"left","image":"scene1-left.PNG"},{"rotateOn":"right","image":"scene1-right.PNG"},{"rotateOn":"top","image":"scene1-top.PNG"},{"rotateOn":"bottom","image":"scene1-bottom.PNG"}],"defaultViewAngle":"right","filesize":4.0849609375,"animate":false,"filename":"park-bench.gltf","bg":"white"}]}')},52:function(e,t,n){},83:function(e,t,n){"use strict";n.r(t);var i=n(8),s=n.n(i),o=n(41),a=n.n(o),c=(n(52),n(27)),r=n(12),d=n(85),l=n(86),m=n(84),h=n(87),b=n(24),g=n(25),x=n(5);function j(){return Object(x.jsx)(m.a,{md:3,children:Object(x.jsx)("div",{className:"px-3 my-3 py-5 bg-white shadow-sm border rounded w-100",style:{height:"200px"}})})}var p=n(9),u=n(22),f=n(42),O=n.n(f),w=(n(74),n(75),n(0)),v=n(1),y=n(4),N=n(43),P=n(44),k=n(45);function G(e,t,n,i){window.innerWidth,window.innerHeight;console.log("size from helper: ",i),"front"===e?window.innerWidth<992?i.x>30?(t.position.set(0,0,2),t.position.x=0):(t.position.set(0,2.5,7.5),t.position.x=0):i.x>30?t.position.set(0,0,.5):t.position.set(0,0,1.5):"back"===e?window.innerWidth<992?i.x>30?t.position.z=-1.5:t.position.z=-7.5:i.x>30?t.position.set(0,0,-.5):t.position.z=-1.5:"top"===e?window.innerWidth<992?i.x>30?t.position.set(0,1,.2):t.position.set(0,5,5):i.x>30?t.position.set(0,.5,0):t.position.set(0,1,0):"bottom"===e?window.innerWidth<992?i.x>30?t.position.set(0,-1,-.5):t.position.set(0,-5,-7.5):i.x>30?t.position.set(0,-.5,0):t.position.set(0,-1,0):"left"===e?window.innerWidth<992?i.x>30?t.position.set(-2,0,-.2):t.position.x=5:i.x>30?t.position.set(-.5,0,0):t.position.set(1.5,0,0):"right"===e&&(window.innerWidth<992?i.x>30?t.position.set(2,0,.2):t.position.x=-5:i.x>30?t.position.set(.5,0,0):t.position.set(-1.5,0,0))}var E=n(33);function S(){var e=this,t=Object(i.useState)(0),n=Object(u.a)(t,2),s=n[0],o=n[1],a=Object(i.useState)(null),c=Object(u.a)(a,2),l=c[0],m=c[1],h=Object(i.useRef)(null),j=Object(r.e)().id,f=E.modelList;Object(i.useEffect)((function(){var e=function(e,t,n,i,s,o,a){var c=new y.db,r=new y.U(60,window.innerWidth/window.innerHeight,.1,100),d=new y.sb({canvas:e}),l=new N.a(r,d.domElement);d.setPixelRatio(window.devicePixelRatio),d.setSize(e.clientWidth,e.clientHeight),r.position.set(0,.5,2),c.background=new y.i(i),console.log("backgorund: ",i),c.translateY(.05),d.render(c,r);var m=(new P.a).setPath("/models/"),h=new y.a(16777215,1);m.load("".concat(t),(function(t){t.scene.traverse((function(e){e.castShadow=!0})),console.log("cache from three: ",y.g.files),console.log("scene: ",t);var n=(new y.d).setFromObject(t.scene),i=new y.qb;n.getSize(i);var a=new y.qb;n.getCenter(a),console.log("box: ",i);var l=e.clientHeight/e.clientWidth/i.y;i.x>30?r.position.set(0,.1,.4):r.position.set(0,0,1.3),window.innerWidth<992&&(i.x>30?r.position.set(0,0,2.3):r.position.set(0,3.25,8));var m=document.innerWidth,h=document.innerHeight,b=h/2,g=m/2;h<m?g>3*b/2?g=3*b/2:g<3*b/2&&(b=2*g/3):h>m&&(b>2*g/3?b=2*g/3:b<2*g/3&&(g=3*b/2)),d.setSize(g,b),console.log("glb: ",t),t.scene.scale.setScalar(l),t.scene.position.sub(a.multiplyScalar(l)),console.log("defaultRotation and rotateAt: ",o,s),!0===o?s=null:o=!1;for(var x=document.getElementsByClassName("slider-item"),j=function(e){x[e].addEventListener("click",(function(){var t=x[e].dataset.rotate;r.position.set(0,.5,1.5),o=!1,G(t,r,0,i)}))},p=0;p<x.length;p++)j(p);var u=document.getElementById("previousBtn"),f=document.getElementById("nextBtn");u.addEventListener("click",(function(){o=!1;var e=Number(u.dataset.activesliderid);console.log("presentId from prev, length: ",e,x.length),r.position.set(0,.5,1.5),e>=0&&e<x.length&&G(x[e-1].dataset.rotate,r,0,i)})),f.addEventListener("click",(function(){o=!1;var e=Number(f.dataset.activesliderid);console.log("presentId from next, length: ",e,x.length),r.position.set(0,.5,1.5),e>=0&&e<=x.length-2&&G(x[e+1].dataset.rotate,r,0,i)})),document.getElementsByClassName("banner-model")[0].addEventListener("mouseover",(function(){o=!1,console.log("mouse event listent"),s=null})),function e(){requestAnimationFrame(e),d.render(c,r)}();var O=function(){function e(t,n){Object(w.a)(this,e),this.object=t,this.prop=n}return Object(v.a)(e,[{key:"value",get:function(){return"#".concat(this.object[this.prop].getHexString())},set:function(e){this.object[this.prop].set(e)}}]),e}(),N=new y.a(16777215,1);c.add(N);var P=new k.a;P.addColor(new O(N,"color"),"value").name("color"),P.add(N,"intensity",0,2,.01),c.add(t.scene)}),(function(e){console.log("loaded: ",e.loaded);var t=Math.round(n),i=Math.round(Math.round(e.loaded/1024)/Math.round(t)*100);console.log(e.loaded);var s=document.createElement("h3"),o=document.createTextNode("".concat(i,"%"));s.classList.add("loading-model"),s.appendChild(o),document.getElementById("loadedModel").classList.remove("d-none"),document.getElementById("total-loaded").innerText="loaded ".concat(i,"%"),document.getElementById("loading-progress").style.width="".concat(i,"%"),i>=100&&setTimeout((function(){document.getElementById("loadedModel").style.display="none",document.getElementById("loadedModel").classList.add("d-none")}),[800])}),(function(e){console.log("glb load error: ",e)}));var b=new y.p(16777147,526368,1),g=new y.j(16777215,1);return c.add(b),c.add(g),c.add(h),window.addEventListener("resize",(function(e){console.log("canvas width, widnow width: ",d.domElement.width,window.innerWidth),d.domElement.width!==window.innerWidth&&d.setSize(window.innerWidth)})),function e(){if(requestAnimationFrame(e),function(e){var t=e.domElement,n=t.clientWidth,i=t.clientHeight,s=t.width!==n||t.height!==i;return s&&e.setSize(n,i,!1),s}(d)){var t=d.domElement;r.aspect=t.clientWidth/t.clientHeight,r.updateProjectionMatrix()}l.update(),d.render(c,r)}(),{camera:r,scene:c}}(h.current,f[j].filename,f[j].filesize,f[j].bg,l,!0);e.camera,e.scene}),[]);var S={dots:!0,infinite:!1,speed:500,initialSlide:s,slidesToShow:6,slidesToScroll:2,responsive:[{breakpoint:1024,settings:{slidesToShow:3,slidesToScroll:3,infinite:!0,dots:!0}},{breakpoint:600,settings:{slidesToShow:2,slidesToScroll:2,initialSlide:2}},{breakpoint:480,settings:{slidesToShow:1,slidesToScroll:1}}]},z=function(e,t){m(e),o(t)},W=[];return f[0].images.map((function(t,n){t.id;var i=t.rotateOn;W.push(Object(x.jsx)("div",{className:"px-1 slider-item","data-rotate":"".concat(i),"data-active":"".concat(n),id:"sliderItem",onClick:z.bind(e,i,n),children:Object(x.jsxs)("div",{className:"bg-white hover-bg-grey rounded border",style:{height:"100px",width:"auto",position:"relative",borderRadius:"10px"},children:[Object(x.jsx)("div",{style:{width:"100%",height:"100%",position:"absolute",top:"0",left:"0",borderRadius:"10px",background:s===n?"transparent":"rgb(0,0,0,0.5)"},className:"hover-bg-transparent"}),Object(x.jsx)("div",{className:"d-flex justify-content-center align-items-center",children:t.rotateOn})]})},n))})),Object(x.jsxs)(x.Fragment,{children:[Object(x.jsxs)("div",{style:{position:"relative",margin:"0",padding:"0"},className:"banner-model",children:[Object(x.jsx)("canvas",{id:"three",style:{width:"100%",height:"100%",display:"block",backgroundColor:"black"},ref:h}),Object(x.jsx)("div",{style:{position:"absolute",top:"0",left:"0",height:"100%",width:"100%",background:"rgb(0,0,0,0.8)",color:"white",fontWeight:"bold"},id:"loadedModel",className:"p-5 text-center d-flex align-items-center justify-content-center",children:Object(x.jsxs)("div",{children:[Object(x.jsx)("p",{style:{fontWeight:"bold",color:"white"},id:"total-loaded"}),Object(x.jsx)("div",{style:{width:"200px",position:"relative"},children:Object(x.jsx)("span",{id:"loading-progress"})})]})}),Object(x.jsx)("button",{id:"previousBtn","data-activesliderid":s,style:{position:"absolute",top:"50%",left:"-30px",width:"100px",height:"30px",background:"transparent",zIndex:"5",borderWidth:"0",borderRadius:"30%"},onClick:function(){s<f[0].images.length&&s>=0?0===s?(m(f[0].images[f[0].images.length-1].rotateOn),o(f[0].images[f[0].images.length-1]-1)):(m(f[0].images[s-1].rotateOn),o(s-1)):(m("front"),o(0))},disabled:!(s<f[0].images.length-1&&s>0),children:Object(x.jsx)(b.a,{icon:g.b,style:{fontSize:"50px",padding:"0",color:"black"}})}),Object(x.jsx)("button",{id:"nextBtn","data-activesliderid":s,style:{position:"absolute",top:"50%",right:"-25px",textAlign:"right",width:"100px",height:"80px",borderWidth:"0",background:"transparent",zIndex:"5",borderRadius:"30%"},onClick:function(){s<f[0].images.length&&s>=0?f[0].images.length-1===s?(m(f[0].images[f[0].images.length-1].rotateOn),o(0)):(m(f[0].images[s+1].rotateOn),o(s+1)):(m("front"),o(0))},disabled:!(s<f[0].images.length&&s>=0),children:Object(x.jsx)(b.a,{icon:g.c,style:{fontSize:"60px",padding:"0",color:"black"}})})]}),Object(x.jsx)("div",{className:"bg-gray ",children:Object(x.jsx)(d.a,{fluid:"md",children:Object(x.jsx)("div",{className:"py-3 px-5",children:Object(x.jsx)(O.a,Object(p.a)(Object(p.a)({},S),{},{children:W.map((function(e,t){return e}))}))})})})]})}function z(){return Object(x.jsxs)(x.Fragment,{children:[Object(x.jsx)("div",{className:"p-3",style:{backgroundColor:"#02055A"}}),Object(x.jsx)(S,{}),Object(x.jsxs)(d.a,{fluid:"md",children:[Object(x.jsxs)("div",{className:"d-flex justify-content-between align-items-center my-3 border-bottom pb-3",children:[Object(x.jsx)("p",{children:"Text"}),Object(x.jsxs)("div",{className:"d-flex",children:[Object(x.jsx)("p",{className:"text-warning",children:"FREE"}),Object(x.jsx)(b.a,{icon:g.a,style:{fontSize:"20px",color:"grey",margin:"0 10px"}}),Object(x.jsx)(b.a,{icon:g.e,style:{fontSize:"20px",color:"grey",margin:"0 10px"}}),Object(x.jsx)("a",{href:"./models/scene.glb",target:"_blank",children:Object(x.jsx)(b.a,{icon:g.d,style:{fontSize:"20px",color:"grey",margin:"0 10px"}})})]})]}),Object(x.jsxs)(l.a,{children:[Object(x.jsx)(m.a,{md:8,children:Object(x.jsxs)("div",{children:[Object(x.jsxs)("div",{className:"d-flex",style:{overflowY:"hidden",overflowX:"auto"},children:[Object(x.jsx)("div",{className:"border px-3 py-2 mx-1",style:{borderRadius:"20px"},children:"FREE"}),Object(x.jsx)("div",{className:"border px-3 py-2 mx-1",style:{borderRadius:"20px"},children:"BLENDER"}),Object(x.jsx)("div",{className:"border px-3 py-2 mx-1",style:{borderRadius:"20px"},children:"OBJ"}),Object(x.jsx)("div",{className:"border px-3 py-2 mx-1",style:{borderRadius:"20px"},children:"FBX"}),Object(x.jsx)("div",{className:"border px-3 py-2 mx-1",style:{borderRadius:"20px"},children:"3DS"}),Object(x.jsx)("div",{className:"border px-3 py-2 mx-1",style:{borderRadius:"20px"},children:"TEXTURED"})]}),Object(x.jsx)("div",{className:"bg-light my-3 py-5 px-2",children:"In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before the final copy is"}),Object(x.jsx)("hr",{className:"my-3"}),Object(x.jsx)("div",{style:{height:"300px"},className:"d-flex justify-content-center align-items-center",children:"a text"}),Object(x.jsx)("div",{children:Object(x.jsxs)(l.a,{children:[Object(x.jsx)(j,{}),Object(x.jsx)(j,{}),Object(x.jsx)(j,{}),Object(x.jsx)(j,{})]})})]})}),Object(x.jsxs)(m.a,{md:4,children:[Object(x.jsx)(h.a,{className:"mb-3",children:Object(x.jsxs)(h.a.Body,{className:"bg-gray text-white",children:[Object(x.jsx)("p",{className:"px-2 py-2 border-bottom  bg-gray text-white",children:"some text"}),Object(x.jsxs)("div",{className:"text-center",children:[Object(x.jsx)("p",{className:"my-3",children:"some text here"}),Object(x.jsx)("p",{className:"my-3",children:"some text here"}),Object(x.jsx)("p",{className:"my-3",children:"some text here"}),Object(x.jsx)("p",{className:"my-3",children:"some text here"})]}),Object(x.jsx)("p",{className:"px-2 py-2 border-top  bg-gray text-white",children:"some text"})]})}),Object(x.jsx)(h.a,{children:Object(x.jsxs)(h.a.Body,{children:[Object(x.jsx)("p",{className:"px-2 py-2 border-bottom",children:"some text"}),Object(x.jsxs)("div",{className:"text-center",children:[Object(x.jsx)("p",{className:"my-3",children:"some text here"}),Object(x.jsx)("p",{className:"my-3",children:"some text here"}),Object(x.jsx)("p",{className:"my-3",children:"some text here"}),Object(x.jsx)("p",{className:"my-3",children:"some text here"})]}),Object(x.jsx)("p",{className:"px-2 py-2 border-top",children:"some text"})]})})]})]})]}),"s",Object(x.jsx)("div",{style:{height:"500px"},className:"bg-light d-flex justify-content-center align-items-center  mt-5",children:Object(x.jsx)("h3",{children:"Footer"})})]})}function W(){var e=E.modelList;return Object(x.jsx)("div",{children:Object(x.jsxs)(d.a,{fluid:"md",children:[Object(x.jsx)("h1",{className:"text-center my-3",children:"Model List"}),Object(x.jsx)(l.a,{children:e.map((function(e,t){return Object(x.jsx)(m.a,{md:4,sm:6,children:Object(x.jsxs)("div",{className:"text-center",children:[Object(x.jsx)(c.b,{to:"/model/".concat(e.id),children:Object(x.jsx)("div",{className:"border rounded shadow-sm bg-light m-1",children:Object(x.jsx)("img",{src:"/images/".concat(e.images[0].image),style:{height:"250px",width:"100%"}})})}),Object(x.jsxs)("p",{children:[e.filename.split(".")[1].toUpperCase()," file"]})]})})}))})]})})}var B=function(){return Object(x.jsxs)(c.a,{children:[Object(x.jsx)(r.a,{exact:!0,path:"/",component:W}),Object(x.jsx)(r.a,{exact:!0,path:"/model/:id",component:z})]})},R=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,88)).then((function(t){var n=t.getCLS,i=t.getFID,s=t.getFCP,o=t.getLCP,a=t.getTTFB;n(e),i(e),s(e),o(e),a(e)}))};n(82);a.a.render(Object(x.jsx)(s.a.StrictMode,{children:Object(x.jsx)(B,{})}),document.getElementById("root")),R()}},[[83,1,2]]]);
//# sourceMappingURL=main.9cd5304f.chunk.js.map