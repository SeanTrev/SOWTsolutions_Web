import './../css/style.css'
import { gsap } from "gsap";
import { CustomEase } from "gsap/CustomEase";
import { DrawSVGPlugin } from "gsap/DrawSVGPlugin";
import { MorphSVGPlugin } from "gsap/MorphSVGPlugin";

gsap.registerPlugin(CustomEase, DrawSVGPlugin, MorphSVGPlugin);
MorphSVGPlugin.convertToPath("rect, circle");

var titleTextTimeline = gsap.timeline();
titleTextTimeline.fromTo("#S-mask-path", {duration:0.5,drawSVG:"0%"}, {duration:0.3,drawSVG:"100%", ease: "circ.inOutinOut"});
titleTextTimeline.fromTo("#O-mask-path", {duration:0,drawSVG:"0%"}, {duration:0.3,drawSVG:"100%", ease: "circ.inOutinOut"});
titleTextTimeline.fromTo("#W-mask-path", {duration:0,drawSVG:"0%"}, {duration:0.2,drawSVG:"100%", ease: "circ.inOutinOut"});
titleTextTimeline.fromTo("#T1-mask-path", {duration:0,drawSVG:"0%"}, {duration:0.1,drawSVG:"100%", ease: "circ.inOutinOut"});
titleTextTimeline.fromTo("#T2-mask-path", {duration:0,drawSVG:"0%"}, {duration:0.1,drawSVG:"100%", ease: "circ.inOutinOut"});
titleTextTimeline.to(".titlePath", {duration:0, mask:"none"});
titleTextTimeline.to(".titlePath", {duration: 0.6, stagger:-0.05, morphSVG:"#centerCircle",ease: "circ.inOutinOut"});
titleTextTimeline.fromTo(".blur", {duration:0, filter:"blur(0px)"}, {duration:0.4, filter:"blur(5px)"},"<0.5");
titleTextTimeline.to("#titleText-animation", {duration:1.2, scaleX: 0, scaleY: 0, ease: "expo.out"},"<-0.2");
titleTextTimeline.to(".glass", {duration:0, visibility: "hidden"});
titleTextTimeline.to("#titleText-animation", {duration:0, visibility:"hidden"});
titleTextTimeline.to(".titlePath", {duration:0, visibility:"hidden"});
titleTextTimeline.to(".title-mask", {duration:0, visibility:"hidden"});

titleTextTimeline.to(".animation-container", {duration:0, visibility:"hidden"});