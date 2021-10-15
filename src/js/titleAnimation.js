import { gsap } from "gsap";
import { CustomEase } from "gsap/CustomEase";
import { DrawSVGPlugin } from "gsap/DrawSVGPlugin";
import { MorphSVGPlugin } from "gsap/MorphSVGPlugin";
import { CustomWiggle } from "gsap/CustomWiggle";
gsap.registerPlugin(CustomEase, DrawSVGPlugin, MorphSVGPlugin, CustomWiggle);
MorphSVGPlugin.convertToPath("rect, circle");
const loaderWrapper = document.querySelector('.loader-wrapper');
var loadingAnimationTimeline = gsap.timeline({repeat:-1,yoyo:true});

loadingAnimation();

function loadingAnimation(){
    gsap.set("#loadHex1", {transformOrigin:"50% 50%"});
    loadingAnimationTimeline.fromTo("#loadHex1", {drawSVG: 0 }, {duration:2,rotate: 90,drawSVG:"-100%",ease: "circ.inOutinOut"});
    
}

function runTextAnimation(){
    var titleTextTimeline = gsap.timeline({onComplete: setUpSite});
    titleTextTimeline.fromTo("#S-mask-path", {duration:0,drawSVG:"0%"}, {duration:0.3,drawSVG:"100%", ease: "circ.inOutinOut"});
    titleTextTimeline.fromTo("#O-mask-path", {duration:0,drawSVG:"0%"}, {duration:0.3,drawSVG:"100%", ease: "circ.inOutinOut"});
    titleTextTimeline.fromTo("#W-mask-path", {duration:0,drawSVG:"0%"}, {duration:0.2,drawSVG:"100%", ease: "circ.inOutinOut"});
    titleTextTimeline.fromTo("#T1-mask-path", {duration:0,drawSVG:"0%"}, {duration:0.1,drawSVG:"100%", ease: "circ.inOutinOut"});
    titleTextTimeline.fromTo("#T2-mask-path", {duration:0,drawSVG:"0%"}, {duration:0.1,drawSVG:"100%", ease: "circ.inOutinOut"});

    titleTextTimeline.to(".titlePath", {duration:0, mask:"none"});
    
    titleTextTimeline.to(".titlePath", {delay: 1.5, duration: 1,  morphSVG:"#loadHex1", opacity: 0, ease: "circ.inOutinOut"});
    titleTextTimeline.to("#title-text", { duration: 1, transform:"translate(0 0)", opacity:1},"<");
    titleTextTimeline.to(".loadHex", { duration: 1, fill:"white"},"<");
    titleTextTimeline.to("#title-text", { duration: 0, visibility:"hidden"});
    titleTextTimeline.to("#loadHex1", { duration: 0.5, scaleX: 0.02, scaleY: 0.02});
    titleTextTimeline.fromTo(".blur", {duration:0, filter:"blur(0px)"}, {duration:0.6, filter:"blur(5px)"},"<");
    titleTextTimeline.to(".loader-wrapper", {duration: 0.5, opacity: 0});
    titleTextTimeline.fromTo(".webContainer", {duration: 0, opacity: 0},{duration:0.2, opacity:1, scaleX:1,scaleY:1},"<-3");
}
window.addEventListener('load', function(){
    var repeats = Math.floor(loadingAnimationTimeline.totalTime() / loadingAnimationTimeline.duration());
    loadingAnimationTimeline.repeat(repeats);
    runTextAnimation();
});
function setUpSite(){
    loaderWrapper.remove();
    gsap.fromTo('.titleContainer',{duration:0, visibility:"visible", scaleY:0, scaleX:0},{duration:0.5, scaleX:1, scaleY:1});
}








