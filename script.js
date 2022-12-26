const input = document.getElementById("first-name");
input.focus();
input.select();

function create_circles(number) {
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
	document.body.appendChild(dot_container);
}

create_circles("one");
create_circles("two");
create_circles("three")
