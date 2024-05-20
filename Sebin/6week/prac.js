document.getElementById("block").onclick=function(){

         document.getElementById("lion").style.display="block";
}
document.getElementById("none").onclick=function(){
          
          document.getElementById("lion").style.display="none";
}
document.getElementById("change").onclick=function(){
          document.body.style.backgroundColor 
          = document.getElementById("black").value;
}

var id=1;

document.getElementById("submit").onclick=function(){
          
         var inputText=  document.getElementById("text").value;
         
         var content = "id:" + id + ",content: "+inputText;
         id++;
       
         const item=document.createElement("p");
         item.innerHTML=content;

         item.style.backgroundColor="orange"
         document.getElementById("parent").appendChild(item);
};
