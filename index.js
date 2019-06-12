const checkboxTag = document.querySelector('.nav-checkbox');
const navlinkTag = document.querySelector('.navlinks');
const textContent = ["a full stack web developer","a digital content creator","a teacher"]
const animationTextTag = document.querySelector(".animation-text");
const navBurgerTag = document.querySelector(".burger")


// document.querySelector("button").addEventListener("click", function(e){
//   console.log(animationTextTag.innerText)
// //   animationTextTag.innerText = textContent[1]
// setInterval(renderText,3000)
// })

//  window.setTimeout(renderText, 2000)

// function renderText (){   
//     textContent.forEach(title => {
//         animationTextTag.innerText = title;   
//     });
// }


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


// nav bar animations

checkboxTag.addEventListener('click', function(e) {
	// console.log(e.target.checked);
	if (e.target.checked) {    
         navlinkTag.style.width = "20%";
        console.log(navBurgerTag);
	} else {
        navlinkTag.style.width = "0%";
	}
});

//progress bar animations

document.addEventListener('scroll', function() {
	animateGraph();
});

// document.querySelector(".btn btn-start btn-animated").addEventListener("click", function(e){
//     e.preventDefault();
//     scolltoProjects();
// })