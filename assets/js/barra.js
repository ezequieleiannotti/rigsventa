$(document).ready(function () {
  var percent = 0;

  timerId = setInterval(function () {
    //increment progress bar
    percent += 25;
    $(".progress-bar").css("width", percent + "%");
    $(".progress-bar").attr("aria-valuenow", percent);
    $(".progress-bar").text(percent + "%");

    //complete
    if (percent == 100) {
      clearInterval(timerId);
      $(".information").show();
    }
  }, 1000);
});
