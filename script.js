// grabbing info from the DOM
const racer1 = document.getElementById("racer1");
// add an event listener for that element
document.addEventListener('keydown.',moveRacer1);
// define the racer2 variable
const racer2 = document.getElementById("racer2");
// add an event listener for racer2
document.addEventListener('keydown.',moveRacer2);




// helper functions
let racer1Val = 140;
function moveRacer1(event) {
  console.log(event)
  racer1Val = racer1Val + 100;
  racer1.style.left = racer1Val + "px";
  console.log(racer1.style.left)
  checkForMatch()
}

// moving racer2 function

let racer2Val = 140;
function moveRacer2(event) {
  console.log(event)
  racer2Val = racer2Val + 100;
  racer2.style.left = racer2Val + "px";
  console.log(racer2.style.left)
  checkForMatch()
}
