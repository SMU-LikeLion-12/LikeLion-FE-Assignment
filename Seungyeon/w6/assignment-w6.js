document.addEventListener("DOMContentLoaded", function () {
  const inputForm = document.getElementById("input_todo");
  const todoText = document.getElementById("todo_text");
  const todoList = document.getElementById("todo_list");
  const countDisplay = document.getElementById("count");
  let todoCount = 0;

  todoText.addEventListener("keydown", function (e) {
    if (e.keyCode === 13) {
      // 엔터 키 눌렀을 때
      e.preventDefault(); // 기본 제출 동작 방지
      const todoValue = todoText.value.trim();
      if (todoValue !== "") {
        addTodoItem(todoValue);
        todoText.value = "";
        updateCount(1);
      }
    }
  });

  document.getElementById("input_icon").onmouseover = function () {
    document.getElementById("input_icon").style.display = "none";
    inputForm.classList.remove("hide");
    inputForm.classList.add("show");
    inputForm.style.display = "block";
  };

  inputForm.onmouseleave = function () {
    inputForm.classList.remove("show");
    inputForm.classList.add("hide");
    setTimeout(function () {
      document.getElementById("input_icon").style.display = "block";
      inputForm.style.display = "none";
    }, 300);
  };

  function addTodoItem(todo) {
    const listItem = document.createElement("li");

    const itemContent = document.createElement("div"); // 체크박스 + 텍스트 묶기

    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.addEventListener("change", function () {
      if (checkbox.checked) {
        listItem.style.color = "gray";
        listItem.style.textDecoration = "line-through";
      } else {
        listItem.style.color = "black"; // 체크 해제됐을 때 다시 복귀!
        listItem.style.textDecoration = "none";
      }
    });

    const textSpan = document.createElement("span"); // 텍스트를 포함한 새로운 요소 생성
    textSpan.textContent = todo; // 텍스트 설정

    const deleteIcon = document.createElement("i");
    deleteIcon.className = "fa fa-trash delete-icon";
    deleteIcon.addEventListener("click", function () {
      listItem.remove();
      updateCount(-1);
    });

    itemContent.appendChild(checkbox); // 체크박스 추가
    itemContent.appendChild(textSpan); // 텍스트 요소 추가

    itemContent.style.display = "flex"; // 체크박스와 텍스트를 가로로 정렬
    itemContent.style.alignItems = "center"; // 수직 정렬

    listItem.appendChild(itemContent); // 체크박스 + 텍스트 묶음 추가
    listItem.appendChild(deleteIcon); // 휴지통 아이콘 추가
    todoList.appendChild(listItem); // 리스트에 항목 추가
  }

  function updateCount(num) {
    todoCount += num;
    countDisplay.textContent = todoCount;
  }
});
