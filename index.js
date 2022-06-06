var numofDrumButtons = document.querySelectorAll(".drum").length;

for (var i = 0; i < numofDrumButtons; i++) {

  document.querySelectorAll(".drum")[i].addEventListener("click", function() {

    var buttonInnerHTML = this.innerHTML;

    switch (buttonInnerHTML) {
      case "w":
      var tom1 = new Audio("");
      tom1.play();
      break;

      case "a":
      var tom2 = new Audio("");
      tom2.play();
      break;

      case "s":
      var tom3 = new Audio("");
      tom3.play();
      break;

      case "d":
      var tom4 = new Audio("");
      tom4.play();
      break;

      case "l":
      var kick = new Audio("");
      kick.play();
      break;

      default: console.log(buttonInnerHTML);
    }

    )};
}
document.addEventListener("keypress", function() {
  alert("Key was pressed");
)};
