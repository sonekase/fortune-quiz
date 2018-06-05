$(document).ready(function(){
  $("form#fortune_quiz").submit(function(event){
    event.preventDefault();

    var luckCounter = 0;

    $("#fortune-responses").show();
    $("input:checkbox[name=unlucky-survey]:checked").each(function(){

      luckCounter = luckCounter - 1;
      // var yourFortuneOutcome = $(this).val();
      // $('#unlucky-responses').append(yourFortuneOutcome + "<br>");
    });

    $("input:checkbox[name=lucky-survey]:checked").each(function(){
      luckCounter = luckCounter + 1;
      // var yourFortuneOutcome = $(this).val();
      // $('#lucky-responses').append(yourFortuneOutcome + "<br>");
    });
      $('#fortune_quiz').hide();

      if(luckCounter < 0){
        $("#responses").text("Stay inside and lock the door, tie a garlic on the windows!");
      } else if(luckCounter ===0){
        $("#responses").text("Do not cross the street without looking both ways!")
      } else {
        $("#responses").text("Do not forget Sonny and Lan when you win the lottery!")
      }

  });

});
