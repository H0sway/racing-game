$(document).ready(() => {
  // Grab the racers
  const $racer1 = $("#racer1");
  const $racer2 = $("#racer2");
  // Used for checking the winner
  let racer1Val = 0;
  let racer2Val = 0;
  // Grab the reset button
  const $button = $("#button");

  $(document).keyup(move);

  function move() {
    if (racer1Val === 36) {
      return alert("Plane Wins!")
    } if (racer2Val === 36) {
      return alert("Car Wins");
    } if (event.which === 39) {
      racer1Val = racer1Val + 1;
      $racer1.css({left: "+=25px"});
    } if (event.which === 90) {
      racer2Val = racer2Val + 1;
      $racer2.css({left: "+=25px"});
    }
  }



$button.click(() => {
  racer1Val = 0;
  racer2Val = 0;
  $racer1.css("left","5px");
  $racer2.css("left","5px");
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

}); // End of document.ready
