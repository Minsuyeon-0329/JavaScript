/* 방법 1 : 웹 요소를 변수로 지정 & 미리 만든 함수 사용
var changeBttn = document.querySelector('#change');
changeBttn.onclick = changeColor; // 함수 이름 뒤에 괄호 없음을 기억!

function changeColor(){
  document.querySelector("p").style.color="#f00";
}*/

/* 방법2 : 웹 요소를 따로 변수로 만들지 않고 사용
document.querySelector("#change").onclick = changeColor;

function changeColor(){
  document.querySelector("p").style.color="#f00";
}*/

// 방법3 : 함수를 직접 선언
document.querySelector("#open").onclick = function(){
    document.querySelector('#desc').style.display = "block";	
    document.querySelector('#open').style.display = "none";
  }
  document.querySelector("#close").onclick = function(){
    document.querySelector('#desc').style.display = "none";
    document.querySelector('#open').style.display = "block";
  }