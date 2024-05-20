var blockBtn;

var noneBtn;
var colorPickBtn;
var changeColorBtn;

var myText;
var submitBtn;

var lionIcon;

var myColor;

var textID = 1;

document.getElementById("blockBtn").onclick = function () {
  document.getElementById("lionIcon").style.display = "block";
};

document.getElementById("noneBtn").onclick = function () {
  document.getElementById("lionIcon").style.display = "none";
};

document.getElementById("changeColorBtn").onclick = function () {
  myColor = document.getElementById("colorPickBtn").value;
  document.body.style.backgroundColor = myColor;
};

document.getElementById("submitBtn").onclick = function () {
  const list = document.getElementById("list");
  const content =
    "id: " + textID + ", content:" + document.getElementById("myText").value;
  textID++;
  const item = document.createElement("li");
  item.innerHTML = content;
  myColor = document.getElementById("colorPickBtn").value;
  item.style.backgroundColor = myColor;
  item.style.width = "500px";
  item.style.height = "35px";
  item.style.alignContent = "center";
  item.style.paddingLeft = "15px";
  list.appendChild(item);
};
