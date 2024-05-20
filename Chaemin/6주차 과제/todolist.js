var plus = document.getElementById("plus");
const addValue = document.querySelector("#add");
const todoList = document.querySelector("#list-list");
const todoCount = document.querySelector("#num");

addValue.addEventListener("mouseover", function () {
  this.style.transition = "width 0.5s ease-in-out";
  this.style.width = "80%";
  plus.style.display = "none";
});

addValue.addEventListener("mouseout", function () {
  this.blur();
  this.style.transition = "width 0.5s ease-in-out";
  this.style.width = "10%";
  plus.style.display = "block";
});

let count = 0;

const addTodo = () => {
  if (addValue.value !== "") {
    const itemContainer = document.createElement("div");
    const item = document.createElement("div");

    const text = document.createElement("span");

    const del = document.createElement("i");
    del.className = "fas fa-trash";

    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";

    text.textContent = addValue.value;
    addValue.value = "";

    item.appendChild(checkbox);
    item.appendChild(text);
    // item.appendChild(del);

    itemContainer.appendChild(item);
    itemContainer.appendChild(del);

    todoList.appendChild(itemContainer);

    itemContainer.classList.add("item-container");

    text.style.margin = "10px";
    del.style.margin = "10px";
    del.style.color = "red";

    count++;
    updateTodoCount();

    checkbox.addEventListener("change", (event) => {
      if (event.currentTarget.checked) {
        text.style.textDecoration = "line-through";
        count--;
        if (count < 0) count = 0;
        updateTodoCount();
      } else {
        text.style.textDecoration = "none";
        count++;
        updateTodoCount();
      }
    });

    del.addEventListener("click", (event) => {
      todoList.removeChild(event.currentTarget.parentNode);
      if (!checkbox.checked) {
        count--;
        if (count < 0) count = 0;
        updateTodoCount();
      }
    });
    addValue.value = "";
    alert.textContent = "";
  } else alert("내용을 입력하세요!");
};

const updateTodoCount = () => {
  todoCount.textContent = count;
};

addValue.addEventListener("keypress", function (event) {
  if (event.key === "Enter") {
    event.preventDefault();
    addTodo();
  }
});
