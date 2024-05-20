var block = document.getElementById("blockBtn");
block.addEventListener("click", function () {
  document.getElementById("lion").style.display = "block";
});

var none = document.getElementById("noneBtn");
none.addEventListener("click", function () {
  document.getElementById("lion").style.display = "none";
});

var colorChange = document.getElementById("colorBtn");
colorChange.addEventListener("click", function () {
  document.body.style.backgroundColor = document.getElementById("color").value;
});

var id = 1;
var button1 = document.getElementById("submit1");
button1.addEventListener("click", function () {
  var text = document.getElementById("text").value;
  const content = "id: " + id + "content: " + text;
  id++;

  const item = document.createElement("li");
  list = document.getElementById("parent");
  item.innerHTML = content;
  list.appendChild(item);
  list.style.backgroundColor = "orange";
});
