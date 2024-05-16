var block = document.getElementById("blockId");
block.addEventListener("click", function () {
  document.getElementById("lion").style.display = "block";
});

var none = document.getElementById("noneId");
none.addEventListener("click", function () {
  document.getElementById("lion").style.display = "none";
});

var change = document.getElementById("change");
change.addEventListener("click", function () {
  document.body.style.backgroundColor = document.getElementById("color").value;
});

var id = 1;

var send = document.getElementById("send");
send.addEventListener("click", function () {
  var text = document.getElementById("name").value;
  const content = "id : " + id + "," + " content : " + text;
  id++;

  const item = document.createElement("li");
  list = document.getElementById("parent");
  item.innerHTML = content;
  list.appendChild(item);
  item.style.marginBottom = "10px";
  list.style.backgroundColor = "rgba(0, 255, 255)";
});

// document.querySelector("#parent").style.backgroundColor = "orange";
