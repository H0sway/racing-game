// grabbing info from the DOM
const racer1 = document.getElementById("racer1");
// add an event listener for that element
racer1.addEventListener("click",moveRacer1);
// document.addEventListener('keydown',moveRacer1)
const racer2 = document.getElementById("racer2");


// helper functions

let racer1Val = 0;
function moveRacer1() {
  racer1Val = racer1Val + 100;
  racer1.style.left = racer1Val + "px";
  console.log(racer1.style.left)
  checkformatch();
};
