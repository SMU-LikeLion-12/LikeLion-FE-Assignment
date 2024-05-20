document.addEventListener('DOMContentLoaded', function () {
    const plusButton = document.querySelector('.plus_button');
    const inputBox = document.querySelector('.input_box');
    const todoMiddle = document.querySelector('.todo_middle');
    const todoBadge = document.querySelector('.todo_badge span');

    let count = 0;

    plusButton.addEventListener('mouseenter', function () {
        plusButton.style.display = 'none';
        inputBox.style.display = 'block';
        inputBox.focus();
    });

    inputBox.addEventListener('keypress', function (e) {
        if (e.key === 'Enter') {
            const todoText = inputBox.value.trim();
            if (todoText !== '') {
                addTodoItem(todoText);
                inputBox.value ='';
                setTimeout(function () {
                    if (inputBox.value.trim() === '') { 
                        inputBox.style.display = 'none';
                        plusButton.style.display = 'flex';
                    }
                }, 5000); 
            }
        }
    });

    function addTodoItem(todoText) {
        const todoItem = document.createElement('div');
        todoItem.classList.add('todo_chart');
        todoItem.innerHTML = `
            <input type="checkbox" class="checkbox">
            <span class="todo_text">${todoText}</span>
            <i class="fas fa-trash trash_icon"></i>
        `;
        
        const todoChart = document.createElement('div');
        todoChart.appendChild(todoItem);
        todoMiddle.appendChild(todoChart);
        
        todoItem.querySelector('.trash_icon').addEventListener('click', function () {
            todoChart.remove();
            count = Math.max(0, count - 1);
            updateBadge();
            updateScroll();
        });

        todoItem.querySelector('.checkbox').addEventListener('change', function () {
            if (this.checked) {
                count = Math.max(0, count - 1);
            } else {
                count++;
            }
            updateBadge();
        });
        
        count++;
        updateBadge();
        updateScroll();
    }

    function updateBadge() {
        todoBadge.textContent = count;
    }

    function updateScroll() {
        if (count >= 5) {
            todoMiddle.style.overflowY = 'scroll';
        } else {
            todoMiddle.style.overflowY = 'auto';
        }
    }
});
