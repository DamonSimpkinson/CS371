// hides all areas below the navigation header
function hide(){
  $("#announcements").hide();
  $("#scheduleInfo").hide();
  $("#benefitsInfo").hide();
  $("#curriculumInfo").hide();
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

  $("#schedule").click(function() {
    hide();
    $("#scheduleInfo").show();
  })

  $("#benefits").click(function() {
    hide();
    $("#benefitsInfo").show();
  })

  $("#curriculum").click(function() {
    hide();
    $("#curriculumInfo").show();
  })

  $("#white").click(function() {
    hide();
    $("#whiteBelt").show();
    $("#curriculumInfo").show();
  })

  $("#yellow").click(function() {
    hide();
    $("#yellowBelt").show();
    $("#curriculumInfo").show();
  })

  $("#orange").click(function() {
    hide();
    $("#orangeBelt").show();
    $("#curriculumInfo").show();
  })

  $("#green").click(function() {
    hide();
    $("#greenBelt").show();
    $("#curriculumInfo").show();
  })

  $("#blue").click(function() {
    hide();
    $("#blueBelt").show();
    $("#curriculumInfo").show();
  })

  $("#purple").click(function() {
    hide();
    $("#purpleBelt").show();
    $("#curriculumInfo").show();
  })

  $("#red").click(function() {
    hide();
    $("#redBelt").show();
    $("#curriculumInfo").show();
  })

  $("#blackTip").click(function() {
    hide();
    $("#blackTipBelt").show();
    $("#curriculumInfo").show();
  })

  $("#doubleBlackTip").click(function() {
    hide();
    $("#doubleBlackTipBelt").show();
    $("#curriculumInfo").show();
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
