var buttons = document.querySelectorAll("button");
var maxScore = document.querySelector("input");

maxScore.addEventListener("input", changeMax);
buttons[0].addEventListener("click", addToP1);
buttons[1].addEventListener("click", addToP2);
buttons[2].addEventListener("click", reset);

function addToP1(){
  var p1 = document.getElementById("p1")
  ++(p1.textContent);
  checkScore(p1);
}

function addToP2(){
  var p2 = document.getElementById("p2");
  ++(p2.textContent);
  checkScore(p2);
}

function changeMax(){
  var max = document.getElementById("max");
  var maxScore = document.getElementsByTagName("input");

  max.textContent = maxScore[0].value;
}

function reset(){
  var buttons = document.querySelectorAll("button")
  var p1 = document.getElementById("p1");
  var p2 = document.getElementById("p2");

  p1.textContent = "0";
  p1.style.color = "black"
  p2.textContent = "0";
  p2.style.color = "black";

  buttons[0].addEventListener("click", addToP1);
  buttons[1].addEventListener("click", addToP2);
}


function checkScore(value){
  var max = document.getElementById("max");
  var buttons = document.querySelectorAll("button");

  if(max.textContent == value.textContent){
    value.style.color = "lime";

    buttons[0].removeEventListener("click", addToP1);
    buttons[1].removeEventListener("click", addToP2);
  }
}
