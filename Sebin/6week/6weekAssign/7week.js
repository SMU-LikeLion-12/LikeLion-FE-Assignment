// document
//   .getElementById("textInput")
//   .addEventListener("keydown", function (event) {
//     if (event.key === "Enter") {
//       // 엔터 키가 눌렸는지 확인
//       const text = this.value.trim();
//       if (text !== "") {
//         const listItem = document.createElement("li");
//         listItem.textContent = text;
//         document.getElementById("textStack").prepend(listItem);
//         this.value = ""; // 입력 필드 초기화
//       }
//     }
//   });

function makelist(){

var list = document.getElementById('list');
var num= document.getElementById('num');

const createdlist = document.createElement('li');
const item = document.createElement('p');

var input=document.getElementById('input').value;

item.innerHTML = input.value;
checkbox.setAttribute('type', 'checkbox');
delete_btn.setAttribute('class', 'fa-solid fa-trash-can');

createdlist.appendChild(checkbox);
createdlist.appendChild(item);
createdlist.appendChild(delete_btn);

document.querySelector('.list').innerHTML=
list.appendChild(list);
txt.value = '';
 
};

`` const item=document.createElement("p");
  item.innerHTML=content;
  document.getElementById("parent").appendChild(item);

  item.style.backgroundColor="orange"``