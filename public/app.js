// hides all areas below the navigation header
function hide(){
  $("#announcements").hide();
  $("#classInfo").hide();
  $("#whiteBelt").hide();
  $("#yellowBelt").hide();
  $("#orangeBelt").hide();
  $("#greenBelt").hide();
  $("#blueBelt").hide();
  $("#purpleBelt").hide();
  $("#redBelt").hide();
  $("#blackTipBelt").hide();
  $("#doubleBlackTipBelt").hide();
  $("#contactUs").hide();
  $("#aboutUs").hide();
  $("#tryUs").hide();
  $("#eventInfo").hide();
}



/******************************************************************************
 * JQuery Document Functions
 ******************************************************************************/
$(document).ready(function () {
  hide();
  $("#announcements").show();

  $("#home").click(function() {
    hide();
    $("#announcements").show();
  })

  $("#classes").click(function() {
    hide();
    $("#classInfo").show();
  })

  $("#white").click(function() {
    hide();
    $("#whiteBelt").show();
  })

  $("#yellow").click(function() {
    hide();
    $("#yellowBelt").show();
  })

  $("#orange").click(function() {
    hide();
    $("#orangeBelt").show();
  })

  $("#green").click(function() {
    hide();
    $("#greenBelt").show();
  })

  $("#blue").click(function() {
    hide();
    $("#blueBelt").show();
  })

  $("#purple").click(function() {
    hide();
    $("#purpleBelt").show();
  })

  $("#red").click(function() {
    hide();
    $("#redBelt").show();
  })

  $("#blackTip").click(function() {
    hide();
    $("#blackTipBelt").show();
  })

  $("#doubleBlackTip").click(function() {
    hide();
    $("#doubleBlackTipBelt").show();
  })

  $("#contact").click(function() {
    hide();
    $("#contactUs").show();
  })

  $("#about").click(function() {
    hide();
    $("#aboutUs").show();
  })

  $("#try").click(function() {
    hide();
    $("#tryUs").show();
  })


// end of the document.ready function
});
