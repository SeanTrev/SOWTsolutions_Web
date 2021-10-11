import { gsap } from "gsap";
import { CustomEase } from "gsap/CustomEase";
import { DrawSVGPlugin } from "gsap/DrawSVGPlugin";
import { MorphSVGPlugin } from "gsap/MorphSVGPlugin";
import { CustomWiggle } from "gsap/CustomWiggle";
gsap.registerPlugin(CustomEase, DrawSVGPlugin, MorphSVGPlugin, CustomWiggle);
MorphSVGPlugin.convertToPath("rect, circle");


function removeContainer () {
    const webCont = document.getElementById("wc");
    webCont.setAttribute("position", "relative");
    animationContainer.remove();
}



var animationContainer = document.getElementById("ac");
var titleTextTimeline = gsap.timeline({onComplete: removeContainer});

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


