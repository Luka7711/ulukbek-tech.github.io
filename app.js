
let links = document.getElementsByClassName("nav-link");
let scrollTo = [".about", ".section-exp", ".container-project", ".container-submit"];


for (let i = 0; i < links.length; i++) {
	links[i].addEventListener("click", () => {
			let x = window.scrollY + document.querySelector(scrollTo[i]).getBoundingClientRect().top // Y
			let y = window.scrollX + document.querySelector(scrollTo[i]).getBoundingClientRect().left
			window.scrollTo(y, x);
	});
}

let hamburger = document.querySelector(".hamburger");
let navbar = document.querySelector(".nav-bar");


hamburger.addEventListener('click', () => {
	navbar.classList.toggle("active");
	hamburger.classList.toggle("active");
});