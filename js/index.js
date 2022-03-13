$(document).ready(function(){
    $("#image1,#paragraph1").click(function(){
        $("#image1,#paragraph1").toggle();
      });
      $("#image2,#paragraph2").click(function(){
        $("#image2,#paragraph2").toggle();
      });
      $("#image3,#paragraph3").click(function(){
        $("#image3,#paragraph3").toggle();
      });

})
$(document).ready(function(){
    $(".work1 image").mouseover(function(){
        console.log("Lorraine");
        $("#text-overlay").fadeIn(fast);
    });
})

