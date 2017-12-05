// grabbing info from the DOM
const racer1 = document.getElementById("racer1");
// define the racer2 variable
const racer2 = document.getElementById("racer2");
// add an event listener for the moveRacers function
// use keyup so that people can't cheat by holding down the key
document.addEventListener('keyup',moveRacers);
// define the reset button
const button = document.getElementById("button");

// Starting point for each racer
let racer1Val = 5;
let racer2Val = 5;

function moveRacers(event) {
  // put win condition here to stop racers from being able to move after a win
    if (racer1.style.left == '905px') {
    // return stops the alert from going off on every key press
    return alert("Plane Wins!");
  } if (racer2.style.left == '905px') {
    return alert('Car Wins!');
  // move function starts here
  } if (event.keyCode == 39) {
      console.log(event)
  racer1Val = racer1Val + 25;
  racer1.style.left = racer1Val + "px";
  console.log(racer1.style.left)
  checkForMatch()
  } if (event.keyCode === 90) {
      console.log(event)
  racer2Val = racer2Val + 25;
  racer2.style.left = racer2Val + "px";
  console.log(racer2.style.left)
  checkForMatch()
  }
};


// add button functionality, resets everything to how it is when you first load the page
function reset(event) {
  racer1Val = 5;
  racer1.style.left = racer1Val + "px";
  racer2Val = 5;
  racer2.style.left = racer2Val + "px";
};

button.addEventListener('click',reset)
