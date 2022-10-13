window.onload = () => {
	let links = document.getElementsByClassName("scroll-link");
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

	// function styleBulletList() {
	// 	let ul = document.querySelectorAll('.duty-container');
	// 	ul.forEach(ul => {
	// 			ul.children.forEach(li => console.log(li))
	// 	});
	// }

	// styleBulletList()

};



let data = {
	"name": "",
	"email": "",
	"message": ""
}


document.querySelector("#myForm").addEventListener("submit",  async(e) => {
	e.preventDefault();
	const url = "https://formspree.io/f/xyyvpbpa"	
	await fetch(url, {
		method: 'POST',
		mode: 'no-cors',
		headers: {
			'Content-Type': 'application/json'
		},
		body: JSON.stringify(data)
	});
	return clearData(data);
})

const inputs = document.querySelectorAll(".input")

for (let input of inputs) {
	input.value = data[input.name]
	input.addEventListener("keyup", (e) => {
		if (e.target.value !== "") {
			data[e.target.name] = e.target.value;
		}
	})
}

function clearData(data) {
	for (let input of inputs) {
		data[input.name] = ""
		input.value = ""
	}
	return data
}


// action="https://formspree.io/f/xyyvpbpa" method="POST"