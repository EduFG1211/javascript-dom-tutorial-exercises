// Your code here
let addbutton = document.createElement("button");
addbutton.innerHTML = "Add Task";
let location = document.querySelector("body");
location.appendChild(addbutton);

addbutton.addEventListener("click", function() {
	let addli = document.createElement("li");
	let inputValue = document.querySelector("#addToDo").value;
	let text = document.createTextNode(inputValue);
	addli.innerHTML = '<span><i class="fa fa-trash"></i></span> ';
	addli.appendChild(text);
	let myUL = document.querySelector("ul");
	myUL.appendChild(addli);
});

// let addli = document.createElement("li");
// let inputValue = "Ejemplo agregar linea";
// //let inputValue = document.querySelector("#addToDo").value;
// let text = document.createTextNode(inputValue);
// addli.innerHTML = '<span><i class="fa fa-trash"></i></span> ';
// addli.appendChild(text);
// let myUL = document.querySelector("ul");
// myUL.appendChild(addli);
