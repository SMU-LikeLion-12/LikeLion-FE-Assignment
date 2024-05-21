var blockbtn = document.getElementById("blockbtn");
blockbtn.addEventListener("click", function() {
    lionimg.style.display="block";
});
var none = document.getElementById("nonebtn");
none.addEventListener("click", function(){
    lionimg.style.display="none";
});


var background = document.getElementById("background");
background.addEventListener("click", function() {
    var colorpick = document.getElementById("colorpick").value;
    document.body.style.backgroundColor = colorpick;
});

let i = 0;
document.getElementById("submitbtn").onclick = function submit() {
    const list = document.getElementById("list");
    const content = 
    "id : " + i++ + "" +"content : " + document.getElementById("textbtn").value;
    
    const item = document.createElement("p");
    item.style.backgroundColor = "orange";
    item.innerHTML = content;
    list.appendChild(item);
    document.getElementById("textbtn").value = "";

}