const checkboxTag = document.querySelector('.nav-checkbox');
const navlinkTag = document.querySelector('.navlinks');

checkboxTag.addEventListener('click', function(e) {
	// console.log(e.target.checked);
	if (e.target.checked) {
		navlinkTag.style.backgroundColor = ' rgb(153, 183, 187, 0.7)';
	} else {
		navlinkTag.style.backgroundColor = 'transparent';
	}
});

document.addEventListener('scroll', function() {
	animateGraph();
});

function animateGraph() {
	document.querySelector('.line1 .filler').classList.add('animateGraph1');

	document.querySelector('.line2 .filler').classList.add('animateGraph2');

	document.querySelector('.line3 .filler').classList.add('animateGraph3');

	document.querySelector('.line4 .filler').classList.add('animateGraph4');

	document.querySelector('.line5 .filler').classList.add('animateGraph5');

	document.querySelector('.line6 .filler').classList.add('animateGraph6');

	document.querySelector('.line7 .filler').classList.add('animateGraph7');
}

// // Scroll to specific values
// // scrollTo is the same
// window.scroll({
//     top: 2500,
//     left: 0,
//     behavior: 'smooth'
// });

// // Scroll certain amounts from current position
// window.scrollBy({
//     top: 100, // could be negative value
//     left: 0,
//     behavior: 'smooth'
// });

// Scroll to a certain element


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
	document.querySelector('.section-five').scrollIntoView({
		behavior: 'smooth'
	});
}
function scolltoContact() {
	document.querySelector('.section-six').scrollIntoView({
		behavior: 'smooth'
	});
}


navlinkTag.addEventListener('click', function(e) {
    // console.log(e.target.innerText);
    if(e.target.innerText==="Home"){
        
        scolltoHome();
    }
    if (e.target.innerText === "About"){
        scolltoAbout();
    }
    if(e.target.innerText==="Skills"){
        scolltoSkills();
    }
    if (e.target.innerText === "Projects"){
        scolltoProjects()
    }
    if(e.target.innerText==="Blogs"){
        scolltoBlogs()
    }
    if (e.target.innerText === "Contact"){
        scolltoContact()
    }
});



// document.querySelector('button').addEventListener('click', function() {
// 	scollfun();
// });
