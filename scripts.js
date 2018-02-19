$(document).ready(function() {
  $("#puppy").click(function() {
    $(".puppy-showing").slideToggle();
    $(".puppy-hiding").slideToggle();
  });
  $("#walrus").click(function(){
    $(".walrus-showing").slideToggle();
    $(".walrus-hiding").slideToggle();
  })
});
