$(document).ready(() => {
  console.log("jQuery is online");
  const $button = $("#button");
  $(document).keyup(move);

  class Racer {
    constructor(name, id, keyCode, moves, wins) {
      this.name = name;
      this.id = $(id);
      this.keyCode = keyCode;
      this.moves = moves;
      this.wins = wins;
    }
  }

  let plane = {
    name: "Plane",
    id: "#racer1",
    keyCode: 39,
    moves: 0,
    wins: 0
  }

  let car = {
    name: "Car",
    id: "#racer2",
    keyCode: 90,
    moves: 0,
    wins: 0
  }

  const reset = () => {
    plane.moves = 0;
    car.moves = 0;
    $(plane.id).css("left","5px");
    $(car.id).css("left","5px");
  };

  function move() {
    if (plane.moves === 35) {
      alert("Plane Wins!");
      plane.wins +=1;
      console.log(plane.wins + ", " + car.wins);
      reset();
      return
    }
    if (car.moves === 35) {
      alert("Car Wins");
      car.wins +=1;
      console.log(plane.wins + ", " + car.wins);
      reset();
      return
    }
    if (event.which === plane.keyCode) {
      plane.moves = plane.moves + 1;
      $(plane.id).css({left: "+=25px"});
    }
    if (event.which === car.keyCode) {
      car.moves = car.moves + 1;
      $(car.id).css({left: "+=25px"});
    }
  }

  $button.click(() => {
    reset();
  });

  const answer = (event) => {
    event.preventDefault();
    const $select = $("select[name=answer]");
    const $first = $("#first");
    const $second = $("#second");
    if ($select.val($first)) {
      console.log("Yes");
      return alert("Thank you very much!");
    }
    if ($select.val($second)) {
      console.log("No");
      return alert("Well, it don't like you much either");
    }
  };

  const $form = $("form");
  $form.submit(answer);
}) // end of document.ready
