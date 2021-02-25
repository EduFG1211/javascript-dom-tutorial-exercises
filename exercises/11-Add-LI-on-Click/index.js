let button = document.querySelector("#superDuperButton");
button.addEventListener("click", function() {
	//your code here
	let elem = document.querySelector("#myList");
	let elem2 = document.createElement("LI");
	elem2.innerHTML = "Fourth element";
	elem.appendChild(elem2);
});
