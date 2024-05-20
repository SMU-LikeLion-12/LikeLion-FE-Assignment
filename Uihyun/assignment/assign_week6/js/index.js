var cnt = 0;

function plus_list(e) {
    if (e.code == 'Enter' && txt.value.trim() !== '') {
        createLi();
    }
}

function createLi() {
    const list = document.getElementById('li');
    var remain_list = document.getElementById('remain_list');

    const newLi = document.createElement('li');
    const checkbox = document.createElement('input');
    const delete_btn = document.createElement('i');
    const item = document.createElement('p');

    item.innerHTML = txt.value;
    checkbox.setAttribute('type', 'checkbox');
    delete_btn.setAttribute('class', 'fa-solid fa-trash-can');

    newLi.appendChild(checkbox);
    newLi.appendChild(item);
    newLi.appendChild(delete_btn);

    list.appendChild(newLi);
    txt.value = '';

    remain_list.innerHTML = ++cnt;

    checkbox.addEventListener('click', () => {
        if (checkbox.checked == true) {
            remain_list.innerHTML = --cnt;
            item.setAttribute('class', 'complete');
        } else {
            remain_list.innerHTML = ++cnt;
            item.setAttribute('class', '');
        }
    });

    delete_btn.addEventListener('click', () => {
        newLi.remove();
        if (checkbox.checked != true) {
            remain_list.innerHTML = --cnt;
        }
    });
}
