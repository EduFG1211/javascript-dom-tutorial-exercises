let button = document.querySelector("#superDuperButton");
button.addEventListener("click", function() {
	//your code here
	let elem = document.createElement("DIV");
	elem.style.background = "yellow";
	elem.innerHTML = "Hello World";
	document.body.appendChild(elem);
});
