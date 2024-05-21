document.addEventListener("DOMContentLoaded", function() {
    // 요소 선택 및 변수 정의
    const plusBtn = document.querySelector(".plus_btn");  // 플러스 버튼
    const todoInput = document.querySelector(".todo_content");  // 할 일 입력 필드
    const todoList = document.querySelector(".todo_list");  // 할 일 목록
    const checkNum = document.querySelector(".check_num");  // 할 일 수 표시

    // Footer에 hover 효과 추가
    const footer = document.querySelector("footer");
    footer.addEventListener("mouseover", function() {
        plusBtn.style.display = "none"; // 플러스 버튼 숨기기
        todoInput.style.display = "block";  // 입력 필드 보이기
    });

    todoInput.addEventListener("mouseout", function() {
        todoInput.style.animation = "text_reverse 0.5s linear";
        setTimeout(function() {
            todoInput.style.display = "none" ; // 입력 필드 숨기기
            todoInput.style.animation = "";
            plusBtn.style.display = "block";
        }, 500);
        
    });
    // input창 애니메이션
    
    // Enter 키 입력 시 새로운 할 일 항목 추가
    todoInput.addEventListener("keypress", function(event) {
        if (event.key === "Enter") {  // Enter 키가 눌렸을 때
            addTodo();  // addTodo 함수 호출
        }
    });

    // 새로운 할 일 항목을 추가하는 함수
    function addTodo() {
        let todoText = todoInput.value.trim();  // 입력 필드의 값을 가져와 공백 제거
        if (todoText !== "") {  // 입력 필드가 비어 있지 않을 경우
            let todoItem = document.createElement("div");  // 새로운 div 요소 생성
            todoItem.classList.add("todo_block");  // 클래스 추가

            let checkbox = document.createElement("input");  // 체크박스 생성
            checkbox.type = "checkbox";
            checkbox.classList.add("list_checkbox");

            let span = document.createElement("span");  // 텍스트를 담을 span 생성
            span.classList.add("list_name");
            span.textContent = todoText;  // 입력된 텍스트 설정

            let deleteBtn = document.createElement("button");  // 삭제 버튼 생성
            deleteBtn.classList.add("delete_btn");
            deleteBtn.innerHTML = '<i class="fa-solid fa-trash-can"></i>';  // 아이콘 추가

            // todoItem에 체크박스, 텍스트, 삭제 버튼 추가
            todoItem.appendChild(checkbox);
            todoItem.appendChild(span);
            todoItem.appendChild(deleteBtn);

            // todoList에 새로운 todoItem 추가
            todoList.appendChild(todoItem);
            todoInput.value = "";  // 입력 필드 초기화

            updateChecknum();  // 할 일 수 업데이트

            // 체크박스 상태 변경 이벤트 추가
            checkbox.addEventListener("change", function() {
                if (checkbox.checked) {  // 체크박스가 체크된 경우
                    span.style.textDecoration = "line-through";  // 텍스트에 취소선 추가
                } else {  // 체크박스가 체크 해제된 경우
                    span.style.textDecoration = "none";  // 취소선 제거
                }
            });

            // 삭제 버튼 클릭 이벤트 추가
            deleteBtn.addEventListener("click", function() {
                todoItem.remove();  // 할 일 항목 제거
                updateChecknum();  // 할 일 수 업데이트
            });
        }
    }

    // 할 일 수를 업데이트하는 함수
    function updateChecknum() {
        let num = document.querySelectorAll(".todo_block").length;  // 현재 할 일 항목 수 계산
        checkNum.textContent = num;  // 할 일 수 표시 요소 업데이트
    }
});
