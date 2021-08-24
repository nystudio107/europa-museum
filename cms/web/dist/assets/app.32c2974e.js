import("data:text/javascript;base64,Cg==");import{d as e,a as t,r as o,c as s,o as n,E as i,l,F as r,H as d,_ as a,g as c,b as h,s as p,e as u}from"./vendor.004e9bd2.js";const v={};var m=e({components:{confetti:t((()=>{return e=()=>import("./Confetti.ef32e245.js"),(t=["assets/Confetti.ef32e245.js","assets/vendor.004e9bd2.js"])&&0!==t.length?Promise.all(t.map((e=>{if((e=`/dist/${e}`)in v)return;v[e]=!0;const t=e.endsWith(".css"),o=t?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${e}"]${o}`))return;const s=document.createElement("link");return s.rel=t?"stylesheet":"modulepreload",t||(s.as="script",s.crossOrigin=""),s.href=e,document.head.appendChild(s),t?new Promise(((e,t)=>{s.addEventListener("load",e),s.addEventListener("error",t)})):void 0}))).then((()=>e())):e();var e,t}))},data:()=>({}),methods:{},mounted(){}});m.render=function(e,t,i,l,r,d){const a=o("confetti");return n(),s(a)};let y={isLoading:!0,body:document.body,darkToggle:document.querySelector("#dark-toggle"),coreFooter:document.querySelector(".core-footer"),locoScroll:null};function b(e,t){const o=t.length;for(let s=0;s<o;s+=1)e[t[s]]=e[t[s]].bind(e)}var L=new i;class E{constructor(){this.onResize=l(this.onResize.bind(this),200),window.addEventListener("resize",this.onResize)}onResize(){L.emit(E.events.RESIZE)}}E.events={RESIZE:"GlobalResize.events.RESIZE"},new E;const g=E.events;class S{constructor(e,t){this.initVars(e,t),this.initBlock()}initVars(e,t){b(this,["sliderPrev","sliderNext","dragStart","dragEnd"]),this.BlocksController=e,this.slider=t,this.slider.classList.contains("slide-wrap")?(this.slideWrapAround=!0,this.slideInitialIndex=1):(this.slideWrapAround=!1,this.slideInitialIndex=0),this.sliderBlock=this.slider.closest(".slider-block"),this.slidePrev=this.sliderBlock.querySelector(".btn-slider-prev"),this.slideNext=this.sliderBlock.querySelector(".btn-slider-next"),this.slides=this.sliderBlock.querySelectorAll(".slide"),this.flkty=null}initBlock(){this.slider&&this.initSlider(),this.initEvents()}initEvents(){const e=this;"complete"===document.readyState?(this.flkty.resize(),y.locoScroll.update()):window.addEventListener("load",(function(){e.flkty.resize(),y.locoScroll.update()})),this.slidePrev.addEventListener("click",e.sliderPrev),this.slideNext.addEventListener("click",e.sliderNext),this.flkty.on("dragStart",e.dragStart),this.flkty.on("dragEnd",e.dragEnd)}destroy(){const e=this;window.removeEventListener("load",(function(){e.flkty.resize()})),this.slidePrev.removeEventListener("click",e.sliderPrev),this.slideNext.removeEventListener("click",e.sliderNext),this.flkty.off("dragStart",e.dragStart),this.flkty.off("dragEnd",e.dragEnd)}initSlider(){const e=this,t=r.prototype.applySelectedAttraction;r.prototype.applySelectedAttraction=function(){const e=this.options.freeScrollSlowDown;e?this.applyBrakes(e):t.apply(this,arguments)},r.prototype.applyBrakes=function(e){if(this.isDraggable&&this.isPointerDown||!this.slides.length)return;const t=-1*this.selectedSlide.target-this.x,o="number"==typeof e&&e>0?e:20;this.velocity=t*(1-this.getFrictionFactor())*o},this.flkty=new r(e.slider,{cellSelector:".slide",initialIndex:e.slideInitialIndex,imagesLoaded:!0,prevNextButtons:!1,pageDots:!1,wrapAround:e.slideWrapAround,contain:!0,adaptiveHeight:!1,cellAlign:"center",freeScroll:!0,freeScrollFriction:.03,freeScrollSlowDown:1,percentPosition:!1})}sliderPrev(){this.flkty.previous()}sliderNext(){this.flkty.next()}dragStart(){this.slides.forEach((e=>{e.style.pointerEvents="none"}))}dragEnd(){this.slides.forEach((e=>{e.style.pointerEvents="auto"}))}}class w{constructor(){b(this,[]),this.initVars(),this.initBlocks()}initVars(){this.slider=y.body.querySelectorAll(".slider"),w.sliders=[]}initBlocks(){this.slider.forEach(((e,t)=>{w.sliders[t]=new S(w,e)}))}stopBlocks(){w.sliders.forEach((e=>{e.destroy()}))}}class k extends d.Renderer{onEnter(){const e=window.HighwayApp.location.pathname.split("/")[1],t=e.length>1?e:"home";y.body.dataset.page=t;const o=y.body.querySelector('[data-link="'+t+'"]');console.log(t),console.log(o),o&&o.classList.add("selected")}onLeave(){}onEnterCompleted(){this.initVars(),this.init()}onLeaveCompleted(){this.destroy(),y.body.dataset.page="",y.coreFooter.style.cssText=""}initVars(){this.contentBlocks=y.body.querySelector(".content-blocks")}init(){b(this,["onResize","updateScroll","onScroll"]);const e=this;this.initLocoScroll(),this.scrolled=!1,"complete"===document.readyState?this.updateScroll():window.addEventListener("load",(()=>{y.body.classList.remove("loading"),y.isLoading=!1,e.updateScroll()})),L.on(g.RESIZE,e.onResize),document.addEventListener("lazyloaded",e.updateScroll),this.contentBlocks&&(this.blocksController=new w)}initLocoScroll(){this.locoScroll=new a({el:document.querySelector("#loco-scroll"),smooth:!0}),y.locoScroll=this.locoScroll,this.locoScroll.on("scroll",this.onScroll)}onResize(){this.updateScroll()}updateScroll(){y.isSmooth&&this.locoScroll.update()}onScroll(e){const t=e.scroll.y;L.emit("scroll",e),t>=50&&!this.scrolled?(y.body.classList.add("scrolled"),this.scrolled=!0):t<50&&this.scrolled&&(y.body.classList.remove("scrolled"),this.scrolled=!1)}destroy(){this.locoScroll&&(this.locoScroll.destroy(),y.locoScroll=null),document.removeEventListener("lazyloaded",this.updateScroll),this.blocksController&&this.blocksController.stopBlocks()}}class f extends k{onEnter(){super.onEnter()}onLeave(){super.onLeave()}onEnterCompleted(){super.onEnterCompleted()}onLeaveCompleted(){super.onLeaveCompleted()}}class C extends k{onEnter(){super.onEnter()}onLeave(){super.onLeave()}onEnterCompleted(){super.onEnterCompleted()}onLeaveCompleted(){super.onLeaveCompleted()}}class N{constructor(){this.initVars(),this.initPage()}initVars(){b(this,["scrollDown"]),this.btnDown=y.body.querySelector(".btn-down"),this.contentBlocks=y.body.querySelector(".content-blocks")}initPage(){this.addListeners()}addListeners(){this.btnDown.addEventListener("click",this.scrollDown)}removeListeners(){this.btnDown.removeEventListener("click",this.scrollDown)}stopPage(){this.removeListeners()}scrollDown(){y.body.style.pointerEvents="none",y.locoScroll.scrollTo(this.contentBlocks,-120),setTimeout((()=>{y.body.style.pointerEvents="auto"}),1e3)}}let x,T;class M extends k{onEnter(){super.onEnter()}onLeave(){super.onLeave()}onEnterCompleted(){super.onEnterCompleted(),x=new N}onLeaveCompleted(){super.onLeaveCompleted(),x.stopPage(),x=null}}class D extends k{onEnter(){super.onEnter()}onLeave(){super.onLeave()}onEnterCompleted(){super.onEnterCompleted()}onLeaveCompleted(){super.onLeaveCompleted()}}class q{constructor(){this.initVars(),this.initPage()}initVars(){b(this,["scrollDown"]),this.btnDown=y.body.querySelector(".btn-down"),this.contentBlocks=y.body.querySelector(".content-blocks")}initPage(){this.addListeners()}addListeners(){this.btnDown.addEventListener("click",this.scrollDown)}removeListeners(){this.btnDown.removeEventListener("click",this.scrollDown)}stopPage(){this.removeListeners()}scrollDown(){y.body.style.pointerEvents="none",y.locoScroll.scrollTo(this.contentBlocks,-120),setTimeout((()=>{y.body.style.pointerEvents="auto"}),1e3)}}class A extends k{onEnter(){super.onEnter()}onLeave(){super.onLeave()}onEnterCompleted(){super.onEnterCompleted(),T=new q}onLeaveCompleted(){super.onLeaveCompleted(),T.stopPage(),T=null}}class B extends k{onEnter(){super.onEnter()}onLeave(){super.onLeave()}onEnterCompleted(){super.onEnterCompleted()}onLeaveCompleted(){super.onLeaveCompleted()}}class P extends k{onEnter(){super.onEnter()}onLeave(){super.onLeave()}onEnterCompleted(){super.onEnterCompleted()}onLeaveCompleted(){super.onLeaveCompleted()}}class I extends k{onEnter(){super.onEnter()}onLeave(){super.onLeave()}onEnterCompleted(){super.onEnterCompleted()}onLeaveCompleted(){super.onLeaveCompleted()}}class R extends k{onEnter(){super.onEnter()}onLeave(){super.onLeave()}onEnterCompleted(){super.onEnterCompleted()}onLeaveCompleted(){super.onLeaveCompleted()}}class V extends d.Transition{in({from:e,to:t,trigger:o,done:s}){setTimeout((()=>{s()}),500)}out({from:e,trigger:t,done:o}){setTimeout((()=>{e.remove(),o()}),500)}}const z=new class{constructor(){this.initVars(),this.initAnimations(),this.initEvents()}initVars(){b(this,["mobileNavMenuToggle"]),this.btnMobileNav=y.body.querySelector(".btn-mobile-nav"),this.btnMobileNavLine2=y.body.querySelector(".btn-mobile-nav .line-2"),this.btnMobileNavLine3=y.body.querySelector(".btn-mobile-nav .line-3"),this.mobileNavMenu=y.body.querySelector(".mobile-nav-menu"),this.mobileNavMenuLinks=y.body.querySelectorAll(".mobile-nav-menu .link-text"),this.mobileNavMenuTl=null,this.isOpen=!1}initAnimations(){const e=this;this.mobileNavMenuTl=c.timeline({paused:!0}),this.mobileNavMenuTl.to(e.btnMobileNavLine2,{scaleX:.5,duration:.4,ease:"power2.inOut"}).to(e.btnMobileNavLine3,{scaleX:.5,duration:.4,ease:"power2.inOut"},.1).to(e.mobileNavMenu,{"pointer-events":"all",opacity:1,duration:.3},0).to(e.mobileNavMenuLinks,{opacity:1,y:0,duration:.6,stagger:.08,ease:"power2.out"},.3)}initEvents(){this.btnMobileNav.addEventListener("click",this.mobileNavMenuToggle)}mobileNavMenuToggle(){this.isOpen?this.mobileNavMenuClose():this.mobileNavMenuOpen()}mobileNavMenuOpen(){this.isOpen=!0,this.mobileNavMenuTl.play()}mobileNavMenuClose(){this.isOpen=!1,this.mobileNavMenuTl.reverse()}};let O;window.firstLoad=!0,h.init();new class{constructor(){this.setup(),this.init()}setup(){p.addClasses(y.body),Object.assign(y,p.getInfos()),Object.assign(y,{isSmooth:p.isDesktop})}init(){const e=y.coreFooter.querySelector(".scroll-top");window.scrollTo(0,0),this.initH(),y.isSmooth&&("scrollRestoration"in history?history.scrollRestoration="manual":window.onbeforeunload=function(){window.scrollTo(0,0)}),y.darkToggle.addEventListener("click",(()=>{y.body.classList.toggle("theme-dark")})),e.addEventListener("click",(()=>{y.locoScroll.scrollTo("#loco-scroll")}))}initH(){O=new d.Core({renderers:{default:k,styleguide:f,home:C,exhibitions:M,exhibit:D,visit:A,news:B,newsArticle:P,about:I,contact:R},transitions:{default:V}}),O.on("NAVIGATE_IN",(({to:e,trigger:t,location:o})=>{window.scrollTo(0,0),window.firstLoad=!1,y.body.classList.remove("loading"),y.body.classList.remove("scrolled"),y.isLoading=!1})),O.on("NAVIGATE_OUT",(({from:e,trigger:t,location:o})=>{y.body.classList.remove("first-load"),y.body.classList.add("loading"),y.isLoading=!0,z.mobileNavMenuClose()}))}},window.HighwayApp=O;(async()=>u(m).mount("#component-container"))().then((e=>{console.log("Loaded.")}));
//# sourceMappingURL=app.32c2974e.js.map
