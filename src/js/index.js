import './../css/style.css'
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

// gsap.from(".titleWrapper", {
//     scrollTrigger: {
//       trigger: ".titleWrapper",
//       pin: true,

//       markers:true,
//       start: "top",
//       end: "top 2000px"
//     },
//     position:"fixed",
//   });

 document.addEventListener('mousemove', parallax);
 function parallax(e){
     this.querySelectorAll('.parallaxItem').forEach(item => {
         const speed = item.getAttribute('data-speed');
         const x = ((window.innerWidth - e.pageX*speed)/100);
         const y = ((window.innerHeight - e.pageY*speed)/100);
         item.style.transform = `translateX(${x}px) translateY(${y}px)`;
     });
 }
