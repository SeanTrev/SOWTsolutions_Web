import './../css/style.css'
import { gsap } from "gsap";
import { CustomEase } from "gsap/CustomEase";
import { DrawSVGPlugin } from "gsap/DrawSVGPlugin";
import { MorphSVGPlugin } from "gsap/MorphSVGPlugin";

gsap.registerPlugin(CustomEase, DrawSVGPlugin, MorphSVGPlugin);
MorphSVGPlugin.convertToPath("rect, circle");

var titleTextTimeline = gsap.timeline();
titleTextTimeline.fromTo("#S-mask-path", {duration:1,drawSVG:"0%"}, {duration:0.4,drawSVG:"100%", ease: "circ.inOutinOut"});
titleTextTimeline.fromTo("#O-mask-path", {duration:0,drawSVG:"0%"}, {duration:0.4,drawSVG:"100%", ease: "circ.inOutinOut"});
titleTextTimeline.fromTo("#W-mask-path", {duration:0,drawSVG:"0%"}, {duration:0.3,drawSVG:"100%", ease: "circ.inOutinOut"});
titleTextTimeline.fromTo("#T1-mask-path", {duration:0,drawSVG:"0%"}, {duration:0.2,drawSVG:"100%", ease: "circ.inOutinOut"});
titleTextTimeline.fromTo("#T2-mask-path", {duration:0,drawSVG:"0%"}, {duration:0.1,drawSVG:"100%", ease: "circ.inOutinOut"});

titleTextTimeline.fromTo(".blur", {duration:0, filter:"blur(0px)"}, {duration:1.2, filter:"blur(5px)"});
titleTextTimeline.to(".titlePath", {duration:0, mask:"none"});
titleTextTimeline.to(".titlePath", {duration: 1, morphSVG:"#centerCircle"});
