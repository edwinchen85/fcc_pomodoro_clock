$(function() {

  var buzzer = $("#buzzer")[0];
  var count = parseInt($("#sessionNum").html());
  var count2 = parseInt($("#breakNum").html());
  var sessionCounter, breakCounter;

  $("#start").click(function() {

    $("#mTime, #mBreak, #aTime, #aBreak, #start").addClass("inactiveLink");

    var counter = setInterval(timer, 1000);
    sessionCounter = counter
    count *= 60;
    count2 *= 60;

    function timer() {

      count -= 1;

      if (count === 0) {
        buzzer.play();
        clearInterval(counter);

        var counter2 = setInterval(breakTimer, 1000);
        breakCounter = counter2;
      }

      $("#countdown").html(count);

      if (count % 60 >= 10) {
        $("#session").html("Session Time")
        $("#countdown").html(Math.floor(count / 60) + ":" + count % 60);
      } else {
        $("#session").html("Session Time");
        $("#countdown").html(Math.floor(count / 60) + ":0" + count % 60);
      }

      function breakTimer() {
        $("#session").html("Break Time: ");
        $("#breakNum").show();
        count2 -= 1;

        if(count2 === 0) {
          clearInterval(counter2);
          buzzer.play();
          $("#reset").show();
        }

        $("#countdown").html(count2);

        if (count2 % 60 >= 10) {
          $("#session").html("Break Time");
          $("#countdown").html(Math.floor( count2 / 60) + ":" + count2 % 60);
        } else {
          $("#session").html("Break Time");
          $("#countdown").html(Math.floor(count2 / 60) + ":0" + count2 % 60);
        }
      }

    }

  });

  $("#mTime").click(function(e) {
    e.preventDefault();
    if (count > 0) {
      count -= 1;
      $("#sessionNum").html(count);
    }
  });

  $("#aTime").click(function(e) {
    e.preventDefault();
    count += 1;
    $("#sessionNum").html(count);
  });

  $("#mBreak").click(function(e) {
    e.preventDefault();
    if (count2 > 0) {
      count2 -= 1;
      $("#breakNum").html(count2);
    }
  });

  $("#aBreak").click(function(e) {
    e.preventDefault();
    count2 += 1;
    $("#breakNum").html(count2);
  });

  $("#reset").click(function() {
    // Reload the page
    location.reload();
  });
});
