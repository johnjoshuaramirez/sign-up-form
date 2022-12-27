const firstName = document.querySelector("#first-name");
const leftContent = document.querySelector(".left-content");
const rightContent = document.querySelector(".right-content");

function createCirclesOne(number) {
	let dot_container = document.createElement("div");

	for (let i = 0; i < 3; i++) {
		let dot_group = document.createElement("div");

		for (let j = 0; j < 6; j++) {
			let dot = document.createElement("div");

			dot.classList.add("dot");
			dot_group.appendChild(dot);
		}

		dot_group.classList.add("dot-group");
		dot_container.appendChild(dot_group);
	}

	dot_container.classList.add(`dot-container-${number}`);
	leftContent.appendChild(dot_container);
}

function createCirclesTwo(number, element) {
	let dot_container = document.createElement("div");

	for (let i = 0; i < 6; i++) {
		let dot_group = document.createElement("div");

		for (let j = 0; j < 3; j++) {
			let dot = document.createElement("div");

			dot.classList.add("dot");
			dot_group.appendChild(dot);
		}

		dot_group.classList.add("dot-group");
		dot_container.appendChild(dot_group);
	}

	dot_container.classList.add(`dot-container-${number}`);
	element.appendChild(dot_container);
}

function createUpArrows() {
   const arrow_group = document.createElement("div");

   for (let i= 0; i < 5; i++) {
      const arrow = document.createElement("div");

      arrow.classList.add("up-arrow");
      arrow_group.appendChild(arrow);
   }

   arrow_group.classList.add("up-arrow-group");
   leftContent.appendChild(arrow_group);
}


function createRightArrows() {
   const arrow_group = document.createElement("div");

   for (let i= 0; i < 5; i++) {
      const arrow = document.createElement("div");

      arrow.classList.add("right-arrow");
      arrow_group.appendChild(arrow);
   }

   arrow_group.classList.add("right-arrow-group");
   leftContent.appendChild(arrow_group);
}
window.addEventListener("load", () => {
	firstName.focus();
	firstName.select();
	createCirclesOne("one");
	createCirclesOne("two");
   createCirclesTwo("three", leftContent);
   createCirclesTwo("four", rightContent);
   createUpArrows();
   createRightArrows();
});
