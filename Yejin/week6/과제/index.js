document.addEventListener("DOMContentLoaded", function () {
  const addBtn = document.querySelector(".add-btn");
  const todoInput = document.querySelector(".todo-input");
  const todolist = document.querySelector(".todo-list");
  const countNum = document.querySelector(".count-num");

  let count = 0;

  addBtn.addEventListener("click", function () {
    addBtn.style.display = "none";
    todoInput.style.display = "block";
    todoInput.focus();
    todoInput.style.margin = "10px";
  });

  todoInput.addEventListener("keypress", function (e) {
    if (e.key === "Enter") {
      addTodo();
    }
  });

  function addTodo() {
    const todoContent = todoInput.value.trim();
    if (todoContent !== "") {
      const itemContainer = document.createElement("div");
      const todoItem = document.createElement("div");

      const text = document.createElement("span");
      text.textContent = todoContent;

      const checkbox = document.createElement("input");
      checkbox.type = "checkbox";

      const deleteBtn = document.createElement("button");
      deleteBtn.innerHTML = '<i class="fa-solid fa-trash-can"></i>';

      todoItem.classList.add("todo-item");

      todoItem.appendChild(checkbox);
      todoItem.appendChild(text);
      todoItem.appendChild(deleteBtn);

      itemContainer.appendChild(todoItem);

      todolist.appendChild(itemContainer);
      todoInput.value = "";

      itemContainer.classList.add("item-container");

      count++;
      updateCountNum();

      checkbox.addEventListener("change", function () {
        if (checkbox.checked) {
          text.style.textDecoration = "line-through";
          count--;
        } else {
          text.style.textDecoration = "none";
          count++;
        }
        updateCountNum();
      });

      deleteBtn.addEventListener("click", function () {
        if (!checkbox.checked) {
          count--;
        }
        itemContainer.remove();
        updateCountNum();
      });
    }
  }

  function updateCountNum() {
    countNum.textContent = count;
  }
});
