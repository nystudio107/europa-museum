/*!
 * @project        Example Project
 * @name           confetti.eba64b6094295b2e1f2b.js
 * @author         Europe Museum
 * @build          Fri Aug 06 2021 05:14:19 GMT+0000 (Coordinated Universal Time)
 * @copyright      Copyright (c) 2021 Europa Museum.
 *
 */
"use strict";(self.webpackChunkeurope_museum=self.webpackChunkeurope_museum||[]).push([["confetti"],{52:function(t,e,i){i.r(e),i.d(e,{default:function(){return g}});var s=i(252),a=i(262),n=(t=1,e=t+1,i=!1)=>{const s=parseFloat(t),a=parseFloat(e),n=Math.random()*(a-s)+s;return i?Math.round(n):n};class h{constructor({color:t="blue",size:e=10,dropRate:i=10}={}){this.color=t,this.size=e,this.dropRate=i}setup({canvas:t,wind:e,windPosCoef:i,windSpeedMax:s,count:a}){return this.canvas=t,this.wind=e,this.windPosCoef=i,this.windSpeedMax=s,this.x=n(-35,this.canvas.width+35),this.y=n(-30,-35),this.d=n(150)+10,this.particleSize=n(this.size,2*this.size),this.tilt=n(10),this.tiltAngleIncremental=(n(0,.08)+.04)*(n()<.5?-1:1),this.tiltAngle=0,this.angle=n(2*Math.PI),this.count=a+1,this.remove=!1,this}update(){this.tiltAngle+=this.tiltAngleIncremental*(.2*Math.cos(this.wind+(this.d+this.x+this.y)*this.windPosCoef)+1),this.y+=(Math.cos(this.angle+this.d)+parseInt(this.dropRate,10))/2,this.x+=(Math.sin(this.angle)+Math.cos(this.wind+(this.d+this.x+this.y)*this.windPosCoef))*this.windSpeedMax,this.y+=Math.sin(this.wind+(this.d+this.x+this.y)*this.windPosCoef)*this.windSpeedMax,this.tilt=15*Math.sin(this.tiltAngle-this.count/3)}pastBottom(){return this.y>this.canvas.height}draw(){this.canvas.ctx.fillStyle=this.color,this.canvas.ctx.beginPath(),this.canvas.ctx.setTransform(Math.cos(this.tiltAngle),Math.sin(this.tiltAngle),0,1,this.x,this.y)}kill(){this.remove=!0}}class r extends h{draw(){super.draw(),this.canvas.ctx.arc(0,0,this.particleSize/2,0,2*Math.PI,!1),this.canvas.ctx.fill()}}class l extends h{draw(){super.draw(),this.canvas.ctx.fillRect(0,0,this.particleSize,this.particleSize/2)}}class o extends h{draw(){super.draw();const t=(t,e,i,s,a,n)=>{this.canvas.ctx.bezierCurveTo(t*(this.particleSize/200),e*(this.particleSize/200),i*(this.particleSize/200),s*(this.particleSize/200),a*(this.particleSize/200),n*(this.particleSize/200))};this.canvas.ctx.moveTo(37.5/this.particleSize,20/this.particleSize),t(75,37,70,25,50,25),t(20,25,20,62.5,20,62.5),t(20,80,40,102,75,120),t(110,102,130,80,130,62.5),t(130,62.5,130,25,100,25),t(85,25,75,37,75,40),this.canvas.ctx.fill()}}class c extends h{constructor(t,e){super(t),this.imgEl=e}draw(){super.draw(),this.canvas.ctx.drawImage(this.imgEl,0,0,this.particleSize,this.particleSize)}}class d{constructor(){this.cachedImages={}}createImageElement(t){const e=document.createElement("img");return e.setAttribute("src",t),e}getImageElement(t){return this.cachedImages[t]||(this.cachedImages[t]=this.createImageElement(t)),this.cachedImages[t]}getRandomParticle(t={}){const e=t.particles||[];return e.length<1?{}:e[Math.floor(Math.random()*e.length)]}getDefaults(t={}){return{type:t.defaultType||"circle",size:t.defaultSize||10,dropRate:t.defaultDropRate||10,colors:t.defaultColors||["DodgerBlue","OliveDrab","Gold","pink","SlateBlue","lightblue","Violet","PaleGreen","SteelBlue","SandyBrown","Chocolate","Crimson"],url:null}}create(t){const e=this.getDefaults(t),i=this.getRandomParticle(t),s=Object.assign(e,i),a=n(0,s.colors.length-1,!0);if(s.color=s.colors[a],"circle"===s.type)return new r(s);if("rect"===s.type)return new l(s);if("heart"===s.type)return new o(s);if("image"===s.type)return new c(s,this.getImageElement(s.url));throw Error(`Unknown particle type: "${s.type}"`)}}class p{constructor(t){this.items=[],this.pool=[],this.particleOptions=t,this.particleFactory=new d}update(){const t=[],e=[];this.items.forEach((i=>{i.update(),i.pastBottom()?i.remove||(i.setup(this.particleOptions),t.push(i)):e.push(i)})),this.pool.push(...t),this.items=e}draw(){this.items.forEach((t=>t.draw()))}add(){this.pool.length>0?this.items.push(this.pool.pop().setup(this.particleOptions)):this.items.push(this.particleFactory.create(this.particleOptions).setup(this.particleOptions))}refresh(){this.items.forEach((t=>{t.kill()})),this.pool=[]}}class u{constructor(t){if(t&&!(t instanceof HTMLCanvasElement))throw new Error("Element is not a valid HTMLCanvasElement");this.isDefault=!t,this.canvas=t||u.createDefaultCanvas("confetti-canvas"),this.ctx=this.canvas.getContext("2d")}static createDefaultCanvas(t){const e=document.createElement("canvas");return e.style.display="block",e.style.position="fixed",e.style.pointerEvents="none",e.style.top=0,e.style.width="100vw",e.style.height="100vh",e.id=t,document.querySelector("body").appendChild(e),e}get width(){return this.canvas.width}get height(){return this.canvas.height}clear(){this.ctx.setTransform(1,0,0,1,0,0),this.ctx.clearRect(0,0,this.width,this.height)}updateDimensions(){this.isDefault&&(this.width===window.innerWidth&&this.height===window.innerHeight||(this.canvas.width=window.innerWidth,this.canvas.height=window.innerHeight))}}class m{constructor(){this.setDefaults()}setDefaults(){this.killed=!1,this.framesSinceDrop=0,this.canvas=null,this.canvasEl=null,this.W=0,this.H=0,this.particleManager=null,this.particlesPerFrame=0,this.wind=0,this.windSpeed=1,this.windSpeedMax=1,this.windChange=.01,this.windPosCoef=.002,this.animationId=null}getParticleOptions(t){const e={canvas:this.canvas,W:this.W,H:this.H,wind:this.wind,windPosCoef:this.windPosCoef,windSpeedMax:this.windSpeedMax,count:0};return Object.assign(e,t),e}createParticles(t={}){const e=this.getParticleOptions(t);this.particleManager=new p(e)}getCanvasElementFromOptions(t){const{canvasId:e,canvasElement:i}=t;let s=i;if(i&&!(i instanceof HTMLCanvasElement))throw new Error("Invalid options: canvasElement is not a valid HTMLCanvasElement");if(e&&i)throw new Error("Invalid options: canvasId and canvasElement are mutually exclusive");if(e&&!s&&(s=document.getElementById(e)),e&&!(s instanceof HTMLCanvasElement))throw new Error(`Invalid options: element with id "${e}" is not a valid HTMLCanvasElement`);return s}start(t={}){this.remove();const e=this.getCanvasElementFromOptions(t);this.canvas=new u(e),this.canvasEl=e,this.createParticles(t),this.setGlobalOptions(t),this.animationId=requestAnimationFrame(this.mainLoop.bind(this))}setGlobalOptions(t){this.particlesPerFrame=t.particlesPerFrame||2,this.windSpeedMax=t.windSpeedMax||1}stop(){this.killed=!0,this.particlesPerFrame=0}update(t){const e=this.getCanvasElementFromOptions(t);this.canvas&&e!==this.canvasEl?this.start(t):(this.setGlobalOptions(t),this.particleManager&&(this.particleManager.particleOptions=this.getParticleOptions(t),this.particleManager.refresh()))}remove(){this.stop(),this.animationId&&cancelAnimationFrame(this.animationId),this.canvas&&this.canvas.clear(),this.setDefaults()}mainLoop(t){this.canvas.updateDimensions(),this.canvas.clear(),this.windSpeed=Math.sin(t/8e3)*this.windSpeedMax,this.wind=this.particleManager.particleOptions.wind+=this.windChange;let e=this.framesSinceDrop*this.particlesPerFrame;for(;e>=1;)this.particleManager.add(),e-=1,this.framesSinceDrop=0;this.particleManager.update(),this.particleManager.draw(),this.killed&&!this.particleManager.items.length||(this.animationId=requestAnimationFrame(this.mainLoop.bind(this))),this.framesSinceDrop+=1}}var w=(0,s.aZ)({setup:()=>({confetti:(0,a.iH)(new m)}),mounted(){this.confetti.start({defaultType:"heart",defaultSize:20,defaultColors:["DodgerBlue","OliveDrab","Gold","pink","SlateBlue","lightblue","Violet","PaleGreen","SteelBlue","SandyBrown","Chocolate","Crimson"]}),setTimeout((()=>{this.confetti.stop()}),5e3)}});w.render=function(t,e,i,s,a,n){return null};var g=w}}]);
//# sourceMappingURL=confetti.eba64b6094295b2e1f2b.js.map