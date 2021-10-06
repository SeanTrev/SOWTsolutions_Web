import * as PIXI from 'pixi.js';
import { gsap } from "gsap";
import { random } from 'gsap/all';
import { CustomWiggle } from "gsap/CustomWiggle";
import { CustomEase } from "gsap/CustomEase";
import { create } from 'combined-stream';
gsap.registerPlugin(CustomEase, CustomWiggle);
const app = new PIXI.Application({
    autoResize: true,
});
const canvas = document.getElementById("pixiCanvas");
const starTexture = document.getElementById("star");
const stars = [];
const spritesContainer = new PIXI.ParticleContainer(500, {
    scale: true,
    position: true,
    rotation: true,
    uvs: true,
    alpha: true,
});
const totalSprites = app.renderer instanceof PIXI.Renderer ? 10000 : 10;

var starFlickerWiggle = CustomWiggle.create("", {wiggles:1, type:"easeInOut"}); 
var starFlickerAlpha = 1;

app.renderer.backgroundAlpha = 0;
canvas.appendChild(app.view);
app.stage.addChild(spritesContainer);
var startingWidth = app.view.parentNode.clientWidth;
var startingHeight = app.view.parentNode.clientHeight;

resize();

for (let i = 0; i < totalSprites; i++) {
    var starX = random(0,app.view.width*3);
    var starY = random(0,app.view.height*3);
    createStar(starX,starY);    
}

stars.forEach(element => {
    randomizeStarFlicker(element);
});

function randomizeStarFlicker(element){
    element.alpha >= 0.5 ? starFlickerAlpha = element.alpha*0.5 : starFlickerAlpha = element.alpha*1.5;
    gsap.to(element, {duration:"random(0.1,3)", alpha:starFlickerAlpha,ease:starFlickerWiggle, onComplete:randomizeStarFlicker, onCompleteParams:[element]});

  }

 function createStar(starX, starY) {
    const star = PIXI.Sprite.from(starTexture);
    star.anchor.set(0.5);
    star.scale.set(random(0.008, 0.07));
    star.alpha = starFlickerAlpha;
    star.tint= 0xafa337;
    star.x = starX;
    star.y = starY;
    stars.push(star);
    spritesContainer.addChild(star);
    console.log('created star');
 } 


function resize() {
    const parent = app.view.parentNode;
    app.renderer.resize(parent.clientWidth, parent.clientHeight);
    adjustStars(parent.clientWidth,parent.clientHeight);

}
function adjustStars(width, height) {
    // startingWidth<=width ? starX = random(startingWidth, width) : starX = startingWidth;
    // startingHeight<=height ? starY = random(startingHeight, height) : starY = startingHeight;
    // createStar(starX, starY);
    // app.render();
}

function random(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min)
  }

window.addEventListener('resize', resize);