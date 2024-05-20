document.addEventListener('DOMContentLoaded', loadEvents);
function loadEvents() {
    document.querySelector('form').addEventListener('submit', submit);
    document.querySelector('#todo-list').addEventListener('click', deleteOrTick);
    TaskCount();
}

document.getElementById('splash-icon').addEventListener('click', function () {
    this.classList.add('hidden');
});

function deleteOrTick(e) {
    if (e.target.classList.contains('delete') || e.target.closest('.delete')) {
        deleteTask(e);
    } else if (e.target.type === 'checkbox') {
        tickTask(e);
    }
    TaskCount();
}

function deleteTask(e) {
    let remove = e.target.closest('.delete').parentNode;
    let parentNode = remove.parentNode;
    parentNode.removeChild(remove);
}

function tickTask(e) {
    const task = e.target.nextElementSibling;
    if (e.target.checked) {
        task.style.textDecoration = 'line-through';
        task.style.color = 'gray';
    } else {
        task.style.textDecoration = 'none';
        task.style.color = 'black';
    }
    TaskCount();
}

function submit(e) {
    e.preventDefault();
    let input = document.querySelector('input');
    if (input.value !== '') addTask(input.value);
    input.value = '';
    TaskCount();
}

function addTask(task) {
    let div = document.getElementById('todo-list');
    let p = document.createElement('p');
    p.innerHTML = `<input type="checkbox"><label>${task}</label><span class="delete"><i class="fa-solid fa-trash-can"></i></span>`;
    div.appendChild(p);
    div.style.display = 'block';
}

function TaskCount() {
    const checkboxes = document.querySelectorAll('#todo-list input[type="checkbox"]');
    let remainingTasks = 0;

    checkboxes.forEach((checkbox) => {
        if (!checkbox.checked) {
            remainingTasks++;
        }
    });

    document.getElementById('task-count').textContent = remainingTasks;
}
