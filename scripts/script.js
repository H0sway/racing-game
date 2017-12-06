$(document).ready(() => {
  console.log("Hi mom!");
  const $button = $("#button");
  $(document).keyup(move);

  class Racer {
    constructor(name,id,keyCode,moves) {
      this.name = name;
      this.id = $(id);
      this.keyCode = keyCode;
      this.moves = moves;
    }
  }

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

  function move() {
    if (plane.moves === 36) {
      return alert("Plane Wins!")
    } if (car.moves === 36) {
      return alert("Car Wins");
    } if (event.which === plane.keyCode) {
      plane.moves = plane.moves + 1;
      $("#racer1").css({left: "+=25px"});
    } if (event.which === car.keyCode) {
      car.moves = car.moves + 1;
      $("#racer2").css({left: "+=25px"});
    }
  }

  $button.click(() => {
  plane.moves = 0;
  car.moves = 0;
  $("#racer1").css("left","5px");
  $("#racer2").css("left","5px");
  });

  const $form = $("form");
  $form.submit(answer);

  function answer(event) {
    const $select = $("select[name=answer]");
    const $first = $("#first");
    const $second = $("#second");
    event.preventDefault();
    if ($select.val("Yes")) {
      console.log("Yes");
      return alert("Thank you very much!");
    } if ($select.val("No")) {
      console.log("No");
      return alert("Well, it don't like you much either");
    }
  }
}) // end of document.ready
