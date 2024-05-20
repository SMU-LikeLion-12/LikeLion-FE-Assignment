document.getElementById("btn1").onclick = function() {
	document.getElementById("lion").style.display = "block";
};

document.getElementById("btn2").onclick = function() {
	document.getElementById("lion").style.display = "none";
};

document.getElementById("btn4").onclick = function() {
	myColor = document.getElementById("btn3").value;
	document.body.style.backgroundColor = myColor

};

idNum = 1;

document.getElementById("submit").onclick = function submit() {
	const list = document.getElementById("list");
	const p = document.createElement('p');
	const content = "id = " + idNum  + ', ' + 'content: ' + document.getElementById("name").value;
	idNum++;
	const item = document.createElement("li");
	item.innerHTML = content;
	list.appendChild(item);
	list.appendChild(p);
	item.style.backgroundColor = "orange";
	document.getElementById('name').value = '';
};

