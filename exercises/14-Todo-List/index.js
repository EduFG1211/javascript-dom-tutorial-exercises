// Your code here
let addbutton = document.createElement("button");
addbutton.innerHTML = "Add Task";
let location = document.querySelector("body");
location.appendChild(addbutton);

//Crea nuevas variables

addbutton.addEventListener("click", function() {
	let myUL = document.querySelector("ul");
	let addli = document.createElement("li");
	let inputValue = document.querySelector("#addToDo").value;
	let text = document.createTextNode(inputValue);
	addli.innerHTML = '<span><i class="fa fa-trash"></i></span> ';
	addli.appendChild(text);
	if (inputValue === "") {
		alert("You must write something!");
	} else {
		myUL.appendChild(addli);
	}
	document.querySelector("#addToDo").value = "";
	alert(myUL.childNodes.length);
});

let close = document.getElementsByClassName("fa fa-trash");
//let childs = myUL.childNodes;
//let span = document.create
for (let i = 0; i < close.length; i++) {
	close[i].onclick = function() {
		let myUL2 = document.querySelector("ul");
		let childs = myUL2.childNodes;
		let div = childs[2 * i + 1];
		div.style.display = "none";
		alert(myUL2.childNodes.length); // let div = this.parentElement;
		// div.style.display = "none";
		// let list = document.querySelector("ul");
		// let childs = myUL.childNodes;
		// myUL.removeChild(childs[i * 2 + 1]);
	};
}
