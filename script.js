// grabbing info from the DOM
const racer1 = document.getElementById("racer1");
// define the racer2 variable
const racer2 = document.getElementById("racer2");
// add an event listener for the moveRacers function
document.addEventListener('keydown',moveRacers);

// Starting point for each racer
let racer1Val = 145;
let racer2Val = 145;

function moveRacers(event) {
  if (event.keyCode == 39) {
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

// function to determine the winner

function youWin() {
  if (racer1.style.left == '1045px') {
    // return stops the alert from going off on every key press
    return alert("Green Block Wins!");
  } if (racer2.style.left == '1045px') {
    return alert('Blue Block Wins!');
  }
};

// event listener for the winner function
document.addEventListener('keydown',youWin);
