window.addEventListener('load', () => {
//ITEMS
const logo = document.querySelector('.logo');
const phone = document.querySelector('.phone');
const menu = document.querySelector('.menu');
const buyBtn = document.querySelector('.buy-now');
const sideText = document.querySelector('.side-text_rotate');
const rightSidebar = document.querySelector('.right-sidebar');
const introImg = document.querySelector('.intro-img');
let introHeading = document.querySelector('.intro-heading');
let introText = document.querySelector('.text1');
//===ITEMS===
//parallax
function parallax(e) {
	this.querySelectorAll('.parallax').forEach(parallax=>{
		let speed = parallax.getAttribute('data-speed');
		let x = (window.innerWidth - e.pageX * speed) / 150;
		let y = (window.innerWidth - e.pageY * speed) / 175;

		parallax.style.transform = `translateX(${x}px)
									translateY(${y}px)`
	})
}
document.addEventListener('mousemove', parallax);
//---parallax---

//TWEENMAX
const tl = new TimelineMax();

tl.fromTo(rightSidebar,1.2,{opacity: 0, width: '0%'}, {opacity: 1, width: '770px'})
  .fromTo(logo,1.3, {opacity: 0, x: -70}, {opacity: 1, x: 0})
  .fromTo(phone,1.3, {opacity: 0, x: -70}, {opacity: 1, x: 0}, '-=1.2')
  .fromTo(menu,1.3, {opacity: 0, x: 70}, {opacity: 1, x: 0}, '-=1.2')
  .fromTo(buyBtn,1.3, {opacity: 0, x: 70}, {opacity: 1, x: 0}, '-=1.2')
  .fromTo(introHeading,1.2,{opacity: 0, y : -70}, {opacity: 1, y: 0}, '-=1.1')
  .fromTo(introText, 1.3,{opacity: 0, y: 80}, {opacity: 1, y: 0}, '-=1.3')
  .fromTo(sideText,2,{opacity: 0, y: 50}, {opacity: 1, y: 0}, '-=1.4')
  .fromTo(introImg, 1,{opacity: 0, y: 50}, {opacity: 1, y: 0}, '-=1.3')
//---TWEENMAX---
}); // window loading
