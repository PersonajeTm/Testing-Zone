// game in games folder
$("document").ready(function() {
  // VARIABLES
  let sWidth = $(screen).innerWidth();
  let sHeight = $(screen).innerHeight();
  $("#root").css("width", sWidth);
  $("#root").css("height", "100%");
  // IF STATEMENTS
  if (sHeight >= sWidth){
    showMobileDiv();
  }else {
    hideMobileDiv();
  }
  // FUNCTIONS
  function hideMobileDiv() {
    $("#mobileDiv").hide();
    $("#all").show();
    $("#root").show();
  }
  function showMobileDiv() {
    $("#mobileDiv").show();
    $("#all").hide();
    $("#root").hide();
  }
  // START
  $(window).resize(function() {
    //resize just happened, pixels changed
    // UPDATE WINDOW SIZES
    sWidth = $(screen).innerWidth();
    sHeight = $(screen).innerHeight();
    // IF MOBILE
    if (sHeight >= sWidth){
      showMobileDiv();
    }
    // IF NOT MOBILE
    if (sHeight < sWidth) {
      hideMobileDiv();
    }
    $("#root").css("width", sWidth);
    $("#root").css("height", "100%");
  });
});
