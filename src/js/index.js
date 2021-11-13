import './../css/style.css'
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

gsap.utils.toArray(".panel").forEach((panel, i) => {
    console.log('did it');
    ScrollTrigger.create({

      trigger: panel,
      start: "top top", 
      pin: true, 
      pinSpacing: false 
    });
  });
  
  
  ScrollTrigger.create({
    snap: 1 / 4 // snap whole page to the closest section!
  });

 document.addEventListener('mousemove', parallax);
 function parallax(e){
     this.querySelectorAll('.parallaxItem').forEach(item => {
         const speed = item.getAttribute('data-speed');
         const x = ((window.innerWidth - e.pageX*speed)/100);
         const y = ((window.innerHeight - e.pageY*speed)/100);
         item.style.transform = `translateX(${x}px) translateY(${y}px)`;
     });
 }
