document.addEventListener("DOMContentLoaded", () => {
  const todoForm = document.getElementById("todo-form");
  const todoInput = document.getElementById("todo-input");
  const todoList = document.getElementById("todo-list");
  const todoCount = document.getElementById("todo-count");

  todoForm.addEventListener("submit", function (event) {
    event.preventDefault();
    addTodo(todoInput.value);
    todoInput.value = "";
  });

  function addTodo(task) {
    if (task.trim() === "") return;

    const todoItem = document.createElement("li");

    const completeCheckbox = document.createElement("input");
    completeCheckbox.type = "checkbox";
    completeCheckbox.addEventListener("change", () => {
      if (completeCheckbox.checked) {
        todoItem.classList.add("completed");
        decrementTodoCount();
      } else {
        todoItem.classList.remove("completed");
        incrementTodoCount();
      }
    });

    const taskText = document.createElement("span");
    taskText.textContent = task;

    const deleteButton = document.createElement("button");
    deleteButton.innerHTML = "❌";
    deleteButton.addEventListener("click", () => {
      if (!todoItem.classList.contains("completed")) {
        decrementTodoCount();
      }
      todoList.removeChild(todoItem);
    });

    todoItem.appendChild(completeCheckbox);
    todoItem.appendChild(taskText);
    todoItem.appendChild(deleteButton);
    todoList.appendChild(todoItem);
    incrementTodoCount();
  }

  function incrementTodoCount() {
    todoCount.textContent = parseInt(todoCount.textContent) + 1;
  }

  function decrementTodoCount() {
    todoCount.textContent = parseInt(todoCount.textContent) - 1;
  }
});
