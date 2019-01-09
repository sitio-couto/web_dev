var buttons = document.querySelectorAll(".button");
var colors = document.querySelectorAll(".pallet");
var hard = true;

buttons[0].addEventListener("mousedown", newColors);
buttons[0].addEventListener("mouseup", newColors);
buttons[0].addEventListener("mouseout", reset);
buttons[1].addEventListener("click", hardMode);
buttons[2].addEventListener("click", easyMode);

buttons[1].classList.add("selected");

function reset(){
  buttons[0].classList.remove("selected");
}

function newColors(){
  if(!buttons[0].classList.contains("selected")){
    buttons[0].classList.add("selected");
  }else{
    buttons[0].classList.remove("selected");
    if (hard) hardMode();
    else easyMode();
  }
}

function hardMode(){
  hard = true;
  buttons[1].disabled = true;
  buttons[1].classList.add("selected");
  buttons[2].disabled = false;
  buttons[2].classList.remove("selected");

  for(var i=3; i < 6; ++i) {
    colors[i].style.display = "";
  }

  arrangeColors();
}

function easyMode(){
    hard = false;
    buttons[2].disabled = true;
    buttons[2].classList.add("selected");
    buttons[1].disabled = false;
    buttons[1].classList.remove("selected");

    for(var i=3; i < 6; ++i) {
      colors[i].style.display = "none";
    }

    arrangeColors();
}

function arrangeColors(){
    var pick;
    var range;

    if(hard) range = 6;
    else range = 3;
    pick = Math.floor(Math.random()*range);

    console.log(pick);

    for (var i = 0; i < range; ++i){
      randomColors(colors[i]);
      colors[i].disabled = false;
      colors[i].removeEventListener("click", rightPick);
      colors[i].removeEventListener("click", wrongPick);

      if(i == pick){
        document.querySelector(".color").textContent = colors[i].style.backgroundColor;
        colors[i].addEventListener("click", rightPick);
      }else{
        colors[i].addEventListener("click", wrongPick);
      }
    }
}

function rightPick(){
  document.querySelector(".firstBox").style.backgroundColor = this.style.backgroundColor;
  for(var color of colors){
    color.style.backgroundColor = this.style.backgroundColor;
    color.disabled = true;
  }
}

function wrongPick(){
  this.style.backgroundColor = "black";
  this.disabled = true;
}

function randomColors(pallete){
  var red = Math.floor(Math.random()*256);
  var green = Math.floor(Math.random()*256);
  var blue = Math.floor(Math.random()*256);

  pallete.style.backgroundColor = "rgb("+red+", "+green+", "+blue+")"
}
