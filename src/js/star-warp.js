import * as PIXI from 'pixi.js';
import { gsap } from "gsap";
import { random } from 'gsap/all';
import { CustomWiggle } from "gsap/CustomWiggle";
import { CustomEase } from "gsap/CustomEase";
gsap.registerPlugin(CustomEase, CustomWiggle);
const app = new PIXI.Application();
const canvas = document.getElementById("pixiCanvas");
const starTexture = document.getElementById("star");
const stars = [];
var starCount = 0;
const totalSprites = app.renderer instanceof PIXI.Renderer ? 1000 : 10;
const spritesContainer1 = new PIXI.ParticleContainer(200, {
    scale: true,
    position: true,
    alpha: true,
    interactive: true,
});
const spritesContainer2 = new PIXI.ParticleContainer(200, {
    scale: true,
    position: true,
    alpha: true,
    interactive: true,
});
var starFlickerWiggle = CustomWiggle.create("", {wiggles:1, type:"easeInOut"}); 
var starFlickerAlpha = 1;

app.renderer.backgroundAlpha = 0;
app.view.setAttribute('id', 'stage');
app.view.setAttribute('class', 'parallaxItem');
app.view.setAttribute('data-speed', '2');
canvas.appendChild(app.view);
app.stage.addChild(spritesContainer1);
app.stage.addChild(spritesContainer2);
resize();



for (let i = 0; i < totalSprites; i++) {
    var starX = random(0,app.view.width*3);
    var starY = random(0,app.view.height*3);
    createStar(starX,starY, );    
}
stars.forEach(element => {
    StarFlicker(element);
});
function StarFlicker(element){
    element.alpha >= 0.5 ? starFlickerAlpha = element.alpha*0.3 : starFlickerAlpha = element.alpha*1.8;
    gsap.to(element, {duration:"random(0.5,5)", alpha: starFlickerAlpha, ease:starFlickerWiggle, onComplete: StarFlicker, onCompleteParams:[element]});
}
function createStar(starX, starY) {
    starCount++;
    const star = PIXI.Sprite.from(starTexture);
    star.anchor.set(0.5);
    star.scale.set(random(0.008, 0.05));
    star.alpha = starFlickerAlpha;
    star.tint= 0xffffff;
    star.x = starX;
    star.y = starY;
    stars.push(star);
    starCount<200 ? spritesContainer1.addChild(star) : spritesContainer2.addChild(star);
 } 
function resize() {
    const parent = app.view.parentNode;
    app.renderer.resize(parent.clientWidth, parent.clientHeight);
}
function random(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min)
  }

window.addEventListener('resize', resize);

function parallax(e){
    this.querySelectorAll('.parallaxItem').forEach(item => {
        const speed = item.getAttribute('data-speed');
        const x = ((window.innerWidth - e.pageX*speed)/100);
        const y = ((window.innerHeight - e.pageY*speed)/100);
        item.style.transform = `translateX(${x}px) translateY(${y}px)`;
    });
}
document.addEventListener('mousemove', parallax);
