$(document).ready(function() {
  $("form#fortune-survey").submit(function(event) {
    event.preventDefault();
    $("#unfortunate-responses").show();
    $("input:checkbox[name=unfortunate-events]:checked").each(function(){
      var badFortune = $(this).val();
      $('#unfortunate-responses').append(badFortune + "<br>");
    });
    $("#fortunate-responses").show();
    $("input:checkbox[name=fortunate-events]:checked").each(function(){
      var goodFortune= $(this).val();
      $('#fortunate-responses').append(goodFortune + "<br>");
    });
  });
});
