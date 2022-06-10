// Detecting Mouse Click
for (var i = 0; i < (document.querySelectorAll(".drum").length); i++) {
  document.querySelectorAll(".drum")[i].addEventListener("click", function() { //anonymous function
    var buttonInnerHTML = this.innerHTML;
    makesound(buttonInnerHTML);
    buttonKey(buttonInnerHTML);
  });
}

// Detecting keyboard press
document.addEventListener("keydown", function(event) {
  makesound(event.key);
  buttonKey(event.key);
});

function makesound(key) {
  switch (key) {
    case "w":
      new Audio("sounds/tom-1.mp3").play();
      break;

    case "a":
      new Audio("sounds/crash.mp3").play();
      break;

    case "s":
      new Audio("sounds/tom-2.mp3").play();
      break;

    case "d":
      new Audio("sounds/snare.mp3").play();
      break;

    case "j":
      new Audio("sounds/tom-3.mp3").play();
      break;

    case "k":
      new Audio("sounds/kick-bass.mp3").play();
      break;

    case "l":
      new Audio("sounds/tom-4.mp3").play();
      break;

    default:
      console.log(buttonInnerHTML);
  }
}

function buttonKey(keyPressed){
    var activeButton = document.querySelector("."+keyPressed);
    activeButton.classList.add("pressed");
    setTimeout(function(){activeButton.classList.remove("pressed");}, 100);
}
