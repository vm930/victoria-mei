const fillerTag1 = document.querySelector('.filler1');
const fillerTag2 = document.querySelector('.filler2');
const fillerTag3 = document.querySelector('.filler3');
const fillerTag4 = document.querySelector('.filler4');

const wrapper = document.querySelector('.wrapper');

// function animateGraph() {
// 	fillerTag1.classList.add('animateGraph1');

// 	fillerTag2.classList.add('animateGraph2');

// 	fillerTag3.classList.add('animateGraph3');

// 	fillerTag4.classList.add('animateGraph4');
// }

document.addEventListener('scroll', animateGraph());

function animateGraph() {
	document.querySelector('.line1 .filler').classList.toggle('animateGraph1');

	document.querySelector('.line2 .filler').classList.toggle('animateGraph2');

	document.querySelector('.line3 .filler').classList.toggle('animateGraph3');

	document.querySelector('.line4 .filler').classList.toggle('animateGraph4');

	document.querySelector('.line5 .filler').classList.toggle('animateGraph5');

	document.querySelector('.line6 .filler').classList.toggle('animateGraph6');

	document.querySelector('.line7 .filler').classList.toggle('animateGraph7');
}
