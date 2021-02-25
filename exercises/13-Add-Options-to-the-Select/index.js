window.onload = function() {
	console.log("The website was loaded...");
	let countries = ["USA", "France", "Italy", "Brazil", "Colombia", "Belize", "Venezuela"];

	// your code here
    let elem = document.querySelector("#mySelect");
	let op0 = document.createElement("option");
	let op1 = document.createElement("option");
	let op2 = document.createElement("option");
	let op3 = document.createElement("option");
	let op4 = document.createElement("option");
	let op5 = document.createElement("option");
	let op6 = document.createElement("option");
	op0.innerHTML = countries[0];
	op1.innerHTML = countries[1];
	op2.innerHTML = countries[2];
	op3.innerHTML = countries[3];
	op4.innerHTML = countries[4];
	op5.innerHTML = countries[5];
	op6.innerHTML = countries[6];
	elem.appendChild(op1);
	elem.appendChild(op2);
	elem.appendChild(op3);
	elem.appendChild(op4);
	elem.appendChild(op5);
	elem.appendChild(op6);
};
