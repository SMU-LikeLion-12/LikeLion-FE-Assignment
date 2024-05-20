$(document).ready(function () {
  updateChecknum();

  $("footer").hover(
    function () {
      $(".plus-btn").css("display", "none");
      $(".todo-input").css("display", "block");
    },
    function () {
      $(".plus-btn").css("display", "block");
      $(".todo-input").css("display", "none");
    }
  );

  $(".todo-input").keypress(function (event) {
    // enter키 눌렸을 때
    if (event.which === 13) {
      addTodo();
    }
  });

  function addTodo() {
    let todoText = $(".todo-input").val();
    if (todoText.trim() != "") {
      let todoItem = `
        <li class="todo-item">
            <input type="checkbox" class="item-checkbox" />
            <span class="item-title">${todoText}</span>
            <button type="button" class="delete-btn">
                <i class="fa-solid fa-trash-can"></i>
            </button>
        </li>
        `;
      $(".todo-list").append(todoItem);
      $(".todo-input").val(""); // 할 일 추가 후 입력필드 비우기
      updateChecknum();
    }
  }

  $(document).on("click", ".delete-btn", function () {
    $(this).closest(".todo-item").remove(); // 할 일 삭제
    updateChecknum();
  });

  $(document).on("change", ".item-checkbox", function () {
    // 체크박스 상태 변경
    if (this.checked) {
      $(this).closest(".todo-item").addClass("checked");
      $(this).siblings(".item-title").css("text-decoration", "line-through");
    } else {
      $(this).closest(".todo-item").removeClass("checked");
      $(this).siblings(".item-title").css("text-decoration", "none");
    }
  });

  function updateChecknum() {
    let num = $(".todo-item").length;
    $(".checknum").text(num);
  }
});
