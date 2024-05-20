// document.getElementById(효과 적용을 유도하는 요소의 id).이벤트명 = 함수()
document.getElementById('btn1').onclick = function () {
    // document.getElementById(효과 적용을 시키려는 요소의 id).스타일.보여지는 거 = '보이기'
    document.getElementById('img').style.display = 'block';
};

document.getElementById('btn2').onclick = function () {
    // style.display = 안보이기
    document.getElementById('img').style.display = 'none';
};

document.getElementById('btn4').onclick = function () {
    // (담아놓는)변수명 = .value는 내용 불러오기
    const color = document.getElementById('btn3').value;
    // document.적용시키고 싶은 부분.스타일.배경 = 변수명에 담긴 내용 -> 적용
    document.body.style.backgroundColor = color;
};
var idnum = 1; //id 숫자 변수 생성
document.getElementById('btn5').onclick = function submit() {
    // '+'를 통해 변수 사이 연결, 변수는 그냥 변수명으로 적용
    const content = 'id: ' + idnum++ + ' content: ' + document.getElementById('content').value;
    //item에 새로운 element p요소 생성
    const item = document.createElement('p');
    //변수 item에 backgroundColor 적용
    item.style.backgroundColor = 'orange';
    //변수 item에 content 넣기
    item.innerHTML = content;
    //변수 list 생성
    const list = document.getElementById('list');
    //변수 list에 item변수 넣기
    list.appendChild(item);
};
