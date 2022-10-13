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
	const user = data['name']
	clearData(data);
	removeForm();
	displaySuccessMessage(user)
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


function removeForm() {
	let container = document.querySelector(".container-submit");
	let title = document.querySelector(".submit-left");
	let form = document.querySelector(".submit-right");
	container.removeChild(title);
	container.removeChild(form);
	return
}

function displaySuccessMessage(user) {
	let ul = document.createElement("ul");
	const containerSubmit = document.querySelector(".container-submit");

	const response = [
		{text: `Hi, ${user}!`},
		{text: 'Thank you for your message! I will review it, and get back to you soon!'},
		{text: 'Best regards,'},
		{text: 'Ulukbek'}
	]; 
	response.forEach((obj) => {
		let li = document.createElement('li');
		let liText = document.createTextNode(obj['text'])
		li.append(liText);
		ul.append(li)
	});

	const successLetter = document.createElement("div");
	successLetter.classList.add("thanksMessage");
	successLetter.appendChild(ul)
	containerSubmit.appendChild(successLetter);
}

