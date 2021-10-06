import './../css/style.css'
import { gsap } from "gsap";
import { CustomEase } from "gsap/CustomEase";
import { DrawSVGPlugin } from "gsap/DrawSVGPlugin";
import { MorphSVGPlugin } from "gsap/MorphSVGPlugin";
import { CustomWiggle } from "gsap/CustomWiggle";
import * as PIXI from 'pixi.js';
import { SVG } from 'pixi-svg';
var pixiCanvas = document.getElementById("pixiCanvas");
var starCount = 40;
var canvasWidth = window.innerWidth/window.devicePixelRatio;
var canvasHeight = window.innerHeight/window.devicePixelRatio;






gsap.registerPlugin(CustomEase, DrawSVGPlugin, MorphSVGPlugin, CustomWiggle);
MorphSVGPlugin.convertToPath("rect, circle");

var titleTextTimeline = gsap.timeline();
titleTextTimeline.fromTo("#S-mask-path", {duration:0.5,drawSVG:"0%"}, {duration:0.3,drawSVG:"100%", ease: "circ.inOutinOut"});
titleTextTimeline.fromTo("#O-mask-path", {duration:0,drawSVG:"0%"}, {duration:0.3,drawSVG:"100%", ease: "circ.inOutinOut"});
titleTextTimeline.fromTo("#W-mask-path", {duration:0,drawSVG:"0%"}, {duration:0.2,drawSVG:"100%", ease: "circ.inOutinOut"});
titleTextTimeline.fromTo("#T1-mask-path", {duration:0,drawSVG:"0%"}, {duration:0.1,drawSVG:"100%", ease: "circ.inOutinOut"});
titleTextTimeline.fromTo("#T2-mask-path", {duration:0,drawSVG:"0%"}, {duration:0.1,drawSVG:"100%", ease: "circ.inOutinOut"});
titleTextTimeline.to(".titlePath", {duration:0, mask:"none"});
titleTextTimeline.to(".titlePath", {delay: 1, duration: 0.6, stagger:-0.05, morphSVG:"#centerCircle",ease: "circ.inOutinOut"});
titleTextTimeline.fromTo(".blur", {duration:0, filter:"blur(0px)"}, {duration:0.6, filter:"blur(5px)"},"<0.5");
titleTextTimeline.to("#titleText-animation", {duration:1.2, scaleX: 0, scaleY: 0, ease: "expo.out"},"<-0.2");
titleTextTimeline.to(".glass", {duration:0, visibility: "hidden"});
titleTextTimeline.to("#titleText-animation", {duration:0, visibility:"hidden"});
titleTextTimeline.to(".titlePath", {duration:0, visibility:"hidden"});
titleTextTimeline.to(".title-mask", {duration:0, visibility:"hidden"});
titleTextTimeline.to(".animation-container", {duration:0, visibility:"hidden"});
titleTextTimeline.fromTo(".webContainer", {duration: 0, visibility:"visible", opacity: 0},{duration:1, opacity:1},"<-0.9");


// function generateStars(numberOfStars){
//     for(var i =0; i<=numberOfStars; i++){
//         var startStar = document.getElementById("star"); 
//         var star = startStar.cloneNode(true);
//         document.getElementById('stars').appendChild(star);
//     }
//     gsap.to("#star", {duration:0,opacity:"random(0.5, 1)", y:"random(-1000, 1000)",x:"random(-1000, 1000)"});
//     var allStars = document.querySelectorAll("#star");
//     console.log(allStars);
 
//     for (var i = 0; i < allStars.length; i++) {
//         var xWiggle = CustomWiggle.create("", {wiggles:random(5, 15), type:"random"});
//         var yWiggle = CustomWiggle.create("", {wiggles:random(5, 15), type:"random"});
//         var brightnessWiggle = CustomWiggle.create("", {wiggles:random(5, 20), type:"random"}); 
//         gsap.to("#star", {duration: "random(0.5,4)",ease: brightnessWiggle,alpha:"random(0,1)", repeat:-1, repeatDelay:0.2});
//     }
// }
 function random(min, max) {
    if (max == null) { max = min; min = 0; }
    return Math.random() * (max - min) + min;
}

