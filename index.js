const checkboxTag = document.querySelector('.nav-checkbox');
const navlinkTag = document.querySelector('.navlinks');
const textContent = [ 'a full stack web developer', 'a digital content creator', 'a teacher' ];
const animationTextTag = document.querySelector('.animation-text');
const navBurgerTag = document.querySelector('.burgerline');
const discoverBtn = document.querySelector('.btn-start');
const burgerline1 = document.querySelector('.line1');
const burgerline2 = document.querySelector('.line2');
const burgerline3 = document.querySelector('.line3');
const burgerline = document.querySelector('.burgerline');
const cross = document.querySelector('.crossline');

function animateGraph() {
	document.querySelector('.line1 .filler').classList.add('animateGraph1');

	document.querySelector('.line2 .filler').classList.add('animateGraph2');

	document.querySelector('.line3 .filler').classList.add('animateGraph3');

	document.querySelector('.line4 .filler').classList.add('animateGraph4');

	document.querySelector('.line5 .filler').classList.add('animateGraph5');

	document.querySelector('.line6 .filler').classList.add('animateGraph6');

	document.querySelector('.line7 .filler').classList.add('animateGraph7');
}

function scolltoHome() {
	document.querySelector('.intro-container').scrollIntoView({
		behavior: 'smooth'
	});
}
function scolltoAbout() {
	document.querySelector('.section-two').scrollIntoView({
		behavior: 'smooth'
	});
}
function scolltoSkills() {
	document.querySelector('.section-three').scrollIntoView({
		behavior: 'smooth'
	});
}
function scolltoProjects() {
	document.querySelector('.section-four').scrollIntoView({
		behavior: 'smooth'
	});
}
function scolltoBlogs() {
	// document.querySelector('.section-five').scrollIntoView({
	// 	behavior: 'smooth'
	// });
	var win = window.open('https://medium.com/@vickysdailystandup', '_blank');
	win.focus();
}
function scolltoContact() {
	document.querySelector('.section-six').scrollIntoView({
		behavior: 'smooth'
	});
}

function scolltoResume() {
	var win = window.open(
		'https://docs.google.com/document/d/1Rk4FfPDaxLGypf-TGnu6F0bJ_4TlfSXFrYNzgy1OPQ0/edit?usp=sharing',
		'_blank'
	);
	win.focus();
}

navlinkTag.addEventListener('click', function(e) {
	// console.log(e.target.innerText);
	if (e.target.innerText === 'Home') {
		scolltoHome();
		checkboxTag.checked = false;
	}
	if (e.target.innerText === 'About') {
		scolltoAbout();
		checkboxTag.checked = false;
	}
	if (e.target.innerText === 'Skills') {
		scolltoSkills();
		checkboxTag.checked = false;
	}
	if (e.target.innerText === 'Projects') {
		scolltoProjects();
		checkboxTag.checked = false;
	}
	if (e.target.innerText === 'Blogs') {
		scolltoBlogs();
	}
	if (e.target.innerText === 'Contact') {
		scolltoContact();
		checkboxTag.checked = false;
	}
	if (e.target.innerText === 'Resume') {
		scolltoResume();
		checkboxTag.checked = false;
	}
});

cross.addEventListener('click', function(e) {
	checkboxTag.checked = false;
});

discoverBtn.addEventListener('click', function(e) {
	e.preventDefault();
	scolltoProjects();
});

document.querySelector('.statment--2').addEventListener('click', function(e) {
	e.preventDefault();
	if (e.target.innerText === 'my work') {
		scolltoProjects();
	}
	if (e.target.innerText === 'blogs') {
		scolltoBlogs();
	}
	if (e.target.innerText === 'get in touch') {
		scolltoContact();
	}
});

//progress bar animations

document.addEventListener('scroll', function() {
	animateGraph();
});
