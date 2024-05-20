var plus = 0;

document.getElementById('block').onclick = function block() {
    document.getElementById('lion').innerHTML = '🦁';
};

document.getElementById('none').onclick = function none() {
    document.getElementById('lion').innerHTML = '';
};

document.getElementById('change').onclick = function change() {
    const color = document.getElementById('color').value;
    document.body.style.backgroundColor = color;
};

document.getElementById('submit').onclick = function submit() {
    plus++;
    const list = document.getElementById('list');
    const content = 'id: ' + plus + ', content: ' + document.getElementById('blank').value;

    const item = document.createElement('p');
    item.innerHTML = content;
    item.style.backgroundColor = 'orange';
    list.appendChild(item);
};
