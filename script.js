const firstName = document.querySelector("#first-name");
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

   for (let i= 0; i < 5; i++) {
      const arrow = document.createElement("div");

      arrow.classList.add(arrowDirection);
      arrow_group.appendChild(arrow);
   }

   arrow_group.classList.add(arrowGroup);
   leftContent.appendChild(arrow_group);
}

window.addEventListener("load", () => {
	firstName.focus();
	firstName.select();
	createCircles("one", leftContent, 3, 6);
	createCircles("two", leftContent, 3, 6);
   createCircles("three", leftContent, 6, 3);
   createCircles("four", rightContent, 6, 3);
   createArrows("up-arrow", "up-arrow-group");
   createArrows("right-arrow", "right-arrow-group");
});
