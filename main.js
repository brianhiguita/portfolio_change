$("#box1").click(function() {
  $("#block1").toggleClass("expanded");
  $("#content1").toggleClass("display");
  $("#block2").toggle();
  $("#block3").toggle();
});

$("#box2").click(function() {
  $("#block2").toggleClass("expanded");
  $("#content2").toggleClass("display");
  $("#block1").toggle();
  $("#block3").toggle();
});


$("#box3").click(function() {
  $("#block3").toggleClass("expanded");
  $("#content3").toggleClass("display");
  $("#block1").toggle();
  $("#block2").toggle();
});




// $(".toggle").click(function() {
//   $(".block").toggleClass("expanded");
//   $(".content").toggleClass("display");
// });
