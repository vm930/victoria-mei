const checkboxTag = document.querySelector('.nav-checkbox');
const navlinkTag = document.querySelector('.navlinks');
const textContent = ["a full stack web developer","a digital content creator","a teacher"]
const animationTextTag = document.querySelector(".animation-text");
const navBurgerTag = document.querySelector(".burgerline")
const discoverBtn = document.querySelector(".btn-start")
const burgerline1 = document.querySelector(".line1")
const burgerline2 = document.querySelector(".line2")
const burgerline3 = document.querySelector(".line3")
const burgerline = document.querySelector(".burgerline")
const cross = document.querySelector(".crossline")



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
	// console.log(burgerline1);
	if (e.target.checked) {
         navlinkTag.style.width = "15%";
         burgerline1.style.backgroundColor = "transparent";
         burgerline2.style.backgroundColor = "transparent";
         burgerline3.style.backgroundColor = "transparent";
         
        //  cross.style.color = "#2c4848"
        
	} else {
        navlinkTag.style.width = "0%";
        // cross.style.color = "transparent"
         burgerline.style.backgroundColor = "#2c4848;";
          burgerline1.style.backgroundColor = "#2c4848";
         burgerline2.style.backgroundColor = "#2c4848";
         burgerline3.style.backgroundColor = "#2c4848";
	}
});

//quick link navbar 

discoverBtn.addEventListener("click", function(e){
    e.preventDefault();
    scolltoProjects();
})

document.querySelector(".statment--2").addEventListener("click",function(e){
    e.preventDefault()
    if (e.target.innerText === "my work"){
        scolltoProjects();
    }
    if (e.target.innerText === "blogs"){
        scolltoBlogs();
    }
    if (e.target.innerText === "get in touch"){
        scolltoContact();
    }
})

//progress bar animations

document.addEventListener('scroll', function() {
	animateGraph();
});
