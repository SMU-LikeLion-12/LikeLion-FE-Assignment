const todoList = document.getElementById("todo-list");
const add = document.getElementById("add");
let count = 0;

const createCheckbox = () => {
  const checkbox = document.createElement("input");
  checkbox.type = "checkbox";
  checkbox.name = "todo";
  checkbox.value = "todo";

  checkbox.addEventListener("click", checked);

  return checkbox;
};

const createTrash = () => {
  const trash = document.createElement("i");
  trash.setAttribute("class", "fas fa-trash-alt");

  trash.addEventListener("click", deleteTodo);

  return trash;
};

add.addEventListener("keyup", function (e) {
  if (e.key === "Enter" && add.value) {
    document.getElementById("count").innerHTML = ++count;

    const box = document.createElement("div");
    box.classList.add("box");

    const list = document.createElement("div");
    list.classList.add("list");

    const context = document.createElement("p");
    context.innerHTML = add.value;

    list.appendChild(createCheckbox());
    list.appendChild(context);

    box.appendChild(list);
    box.appendChild(createTrash());

    todoList.appendChild(box);

    add.value = "";
  }
});

// 삭제 로직
function deleteTodo(e) {
  const previous = e.target.previousSibling;
  if (!previous.firstChild.checked) {
    document.getElementById("count").innerHTML = --count;
  }
  e.target.parentElement.remove();
}

// 체크 로직
function checked(e) {
  if (e.target.checked) {
    document.getElementById("count").innerHTML = --count;
    e.target.nextSibling.style.color = "gray";
    e.target.nextSibling.style.textDecoration = "line-through";
  } else {
    document.getElementById("count").innerHTML = ++count;
    e.target.nextSibling.style.color = "black";
    e.target.nextSibling.style.textDecoration = "none";
  }
}

// 하단의 add 버튼 작업
add.addEventListener("mouseout", function () {
  add.value = "";
  add.type = "button";
});

add.addEventListener("mouseover", function () {
  add.type = "text";
});
