// grabbing info from the DOM
const racer1 = document.getElementById("racer1");
// define the racer2 variable
const racer2 = document.getElementById("racer2");
// add an event listener for the moveRacers function
document.addEventListener('keydown',moveRacers);

// Starting point for each racer
let racer1Val = 140;
let racer2Val = 140;

function moveRacers(event) {
  if (event.keyCode == 39) {
      console.log(event)
  racer1Val = racer1Val + 100;
  racer1.style.left = racer1Val + "px";
  console.log(racer1.style.left)
  checkForMatch()
  } if (event.keyCode === 90) {
      console.log(event)
  racer2Val = racer2Val + 100;
  racer2.style.left = racer2Val + "px";
  console.log(racer2.style.left)
  checkForMatch()
  }
}
