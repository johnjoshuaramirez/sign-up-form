const firstName = document.querySelector("#first-name");
const lastName = document.querySelector("#last-name");
const email = document.querySelector("#email");
const number = document.querySelector("#number");
const password = document.querySelector("#password");
const confirmPassword = document.querySelector("#confirm-password");
const firstNameError = document.querySelector("#first-name + .message");
const lastNameError = document.querySelector("#last-name + .message");
const emailError = document.querySelector("#email + .message");
const numberError = document.querySelector("#number + .message");
const passwordError = document.querySelector("#password + .message");
const confirmPasswordError = document.querySelector("#confirm-password + .message");
const submit = document.querySelector("#submit");
const form = document.querySelector("form");

error(firstName, firstNameError);
error(lastName, lastNameError);
error(number, numberError);
error(password, passwordError);

function error(input, message) {
   input.addEventListener("input", () => {
      message.classList.remove("show");
   
      if (!input.value.trim().length) {
         message.classList.add("show");
      }

      if (isNaN(number.value)) {
         numberError.classList.add("show");
      }
   });

	input.addEventListener("blur", () => {
		if (!input.value.trim().length) {
         message.classList.add("show");
      } 
	});
}

email.addEventListener("input", () => {
   if (email.value.includes("@")) {
      emailError.classList.remove("show");
   }
});

email.addEventListener("blur", () => {
   if (!email.value.includes("@")) {
      emailError.classList.add("show");
   }
});

form.addEventListener("submit", (e) => {
   e.preventDefault();

   if (password.value !== confirmPassword.value) {
      confirmPasswordError.classList.add("show");
   }

   if (password.value.trim().length < 8) {
         passwordError.classList.add("show");
      } 
})

submit.addEventListener("click", () => {
   if (password.value.trim().length < 8) {
      passwordError.classList.add("show");
   } 

   if (firstName.value.trim().length === 0) {
      firstNameError.classList.add("show");
   } 
   
   if (lastName.value.trim().length === 0) {
      lastNameError.classList.add("show");
   } 
   
   if (!email.value.trim()) {
      emailError.classList.add("show");
   }
   
   if (!number.value.trim()) {
      numberError.classList.add("show");
   }
})

const leftContent = document.querySelector(".left-content");
const rightContent = document.querySelector(".right-content");

function createCircles(containerNumber, element, xlenght, ylenght) {
	let dot_container = document.createElement("div");

	for (let i = 0; i < xlenght; i++) {
		let dot_group = document.createElement("div");

		for (let j = 0; j < ylenght; j++) {
			let dot = document.createElement("div");

			dot.classList.add("dot");
			dot_group.appendChild(dot);
		}

		dot_group.classList.add("dot-group");
		dot_container.appendChild(dot_group);
	}

	dot_container.classList.add(`dot-container-${containerNumber}`);
	element.appendChild(dot_container);
}

function createArrows(arrowDirection, arrowGroup) {
	const arrow_group = document.createElement("div");

	for (let i = 0; i < 5; i++) {
		const arrow = document.createElement("div");

		arrow.classList.add(arrowDirection);
		arrow_group.appendChild(arrow);
	}

	arrow_group.classList.add(arrowGroup);
	leftContent.appendChild(arrow_group);
}

window.addEventListener("load", () => {
	createCircles("one", leftContent, 3, 6);
	createCircles("two", leftContent, 3, 6);
	createCircles("three", leftContent, 6, 3);
	createCircles("four", rightContent, 6, 3);
	createArrows("up-arrow", "up-arrow-group");
	createArrows("right-arrow", "right-arrow-group");
});

// add validaton via constraint api see docs
// change error colors to orange 