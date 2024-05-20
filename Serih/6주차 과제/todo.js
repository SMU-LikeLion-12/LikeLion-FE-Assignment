document.addEventListener("DOMContentLoaded", function() {
    const plusBtn = document.querySelector(".plus-btn");
    const todoInput = document.querySelector(".todo-input");
    const todolist = document.querySelector(".todolist");
    const topNumber = document.querySelector(".top-number");

    let todoCount = 0;

    plusBtn.addEventListener("click", function() {
        plusBtn.style.display = "none"; // 버튼 숨기기
        todoInput.style.display = "block"; // 입력란 보이기
        todoInput.focus();
    });

    todoInput.addEventListener("keypress", function(event) {
        if (event.key === "Enter" && todoInput.value.trim() !== "") {
            // 새로운 할 일 요소 생성
            const newTask = document.createElement("span");
            newTask.textContent = todoInput.value.trim();

            // 할 일 삭제 버튼 생성
            const deleteBtn = document.createElement("button");
            deleteBtn.type = "button";
            deleteBtn.classList.add("delete-btn");
            deleteBtn.innerHTML = '<i class="fa-solid fa-trash-can"></i>';

            // 체크박스 생성
            const checkbox = document.createElement("input");
            checkbox.type = "checkbox";
            checkbox.classList.add("item-checkbox");

            // 할 일을 감싸는 li 요소 생성
            const todoItem = document.createElement("li");
            todoItem.classList.add("todo-item");
            todoItem.appendChild(checkbox);
            todoItem.appendChild(newTask);
            todoItem.appendChild(deleteBtn);

            // 할 일을 todolist에 추가
            todolist.appendChild(todoItem);

            // 할 일 개수 증가 및 top-number 업데이트
            todoCount++;
            topNumber.textContent = todoCount;

            todoInput.value = "";
            todoInput.style.display = "none";

            checkbox.addEventListener("change", function() {
                if (checkbox.checked) {
                    todoCount--;
                    topNumber.textContent = todoCount;
                    newTask.style.color = "gray";
                    newTask.style.textDecoration = "line-through";
                } else {
                    todoCount++;
                    topNumber.textContent = todoCount;
                    newTask.style.color = "black";
                    newTask.style.textDecoration = "none";
                }
            });

            deleteBtn.addEventListener("click", function() {
                todoItem.remove();
                todoCount--;
                topNumber.textContent = todoCount;
            });
        }
    });

    todoInput.addEventListener("blur", function() {
        todoInput.style.display = "none";
        plusBtn.style.display = "inline-block";
    });
    

    todoInput.addEventListener("blur", function() {
        todoInput.style.display = "none";
        plusBtn.style.display = "inline-block";
    });

});
