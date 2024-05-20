const frm = document.querySelector("#frm");
var count = 0;

document.getElementById("block").onclick = function setLion() {
    document.getElementById("lion").innerHTML = "🦁"
}

document.getElementById("none").onclick = function setLion() {
    document.getElementById("lion").innerHTML = ""
}

document.getElementById("color_change").onclick = function colorChange() {
    const color = frm.elements["color"].value;
    document.body.style.backgroundColor = color;
}

document.getElementById("text_button").onclick = function addText() {

    ++count;
    const text = frm.elements["text"].value;

    var paragraph = document.createElement("p");
    paragraph.textContent = `id: ${count}, content: ${text}`;
    paragraph.style.backgroundColor = "orange"
    document.body.appendChild(paragraph);
}






