$(document).ready(() => {
  console.log("Hi mom!");

  $(document).keyup(move);

  let plane = {
    name: "Plane",
    id: "#racer1",
    keyCode: 39,
    moves: 0
  }
  let car = {
    name: "Car",
    id: "#car",
    keyCode: 90,
    moves: 0,
  }

  function move(event) {
    console.log("working");
  }

  console.log(plane);

})
