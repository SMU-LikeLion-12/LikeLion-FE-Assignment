numCount = 0;

function content_input(e) {
	const list = document.getElementById('todo-list');
	const check = document.createElement('input');
	
	if (e.keyCode == 13) {
		const listInput = document.getElementById('list-input');
		const inputValue = listInput.value.trim();
        if (inputValue === '') {
            return;
        }

		document.getElementById('num-count').innerHTML = numCount;
		numCount = numCount + 1;

		const item = document.createElement("div");
		item.className = 'todo-list-div';
		list.appendChild(item);
		
		const check = document.createElement('input');
		check.type = 'checkbox';
		check.className = "todo-check";
		item.appendChild(check);
		
		const span = document.createElement('span')
		item.appendChild(span);
		span.textContent = document.getElementById('list-input').value;

		const delIcon = document.createElement('button');
		delIcon.className = "fas fa-trash-alt";

		item.appendChild(delIcon);

		check.addEventListener("change", function() {
			if (check.checked) {
				span.style.textDecoration = 'line-through';
				span.style.color = 'gray';
				numCount--;
				document.getElementById('num-count').innerHTML = numCount;
			} else {
				span.style.textDecoration = '';
				span.style.color = 'black';
				numCount++;
				document.getElementById('num-count').innerHTML = numCount;
			}
		});
		
		item.style.overflow = "scroll";
		item.style.backgroundColor = "white";
		item.style.borderRadius = "10px";
		item.style.marginTop = "20px";
		item.style.marginBottom = "10px";
		item.style.color = "black";
		item.style.height = "40px";
		item.style.width = "330px";
		item.style.boxShadow = "2px 2px 2px gray";

		function delTodo(e) {
			const delList = e.target.parentElement;
			delList.remove();
			if (!check.checked) {
				numCount--;
			}
			document.getElementById('num-count').innerHTML = numCount;
		}

		document.getElementById('num-count').innerHTML = numCount;
		document.getElementById('list-input').value = '';

		delIcon.addEventListener("click", delTodo);
	}
};

document.getElementById('add-icon').addEventListener('mouseover', function() {
	const addIcon = document.getElementById('add-icon');
	const listInput = document.getElementById('list-input');
	addIcon.style.display = 'none';
	listInput.style.display = 'block';
});

document.getElementById('list-input').addEventListener('mouseout', function() {
	const addIcon = document.getElementById('add-icon');
	const listInput = document.getElementById('list-input');
	setTimeout(() => {
		addIcon.style.display = 'block';
        listInput.style.display = 'none';
    }, 500);
});