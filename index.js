var numberOfDrumButtons = document.querySelectorAll(".drum").length;

for (var i=0; i<numberOfDrumButtons; i++) {
    document.querySelectorAll(".drum")[i].addEventListener("click", function() {
        var tom_1 = new Audio("sounds/tom-1.mp3");
        tom_1.play();
    });
}