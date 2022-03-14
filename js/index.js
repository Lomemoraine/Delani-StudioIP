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
    var elements =[{port:"work1",hov:"worrk1"},
                   {port:"work2",hov:"worrk2"},
                   {port:"work3",hov:"worrk3"},
                   {port:"work4",hov:"worrk4"},
                   {port:"work5",hov:"worrk5"},
                   {port:"work6",hov:"worrk6"},
                   {port:"work7",hov:"worrk7"},
                   {port:"work8",hov:"worrk8"}];
elements.forEach(function(element){
    $("#" + element.port).mouseover(function(){
        $("#" +element.hov).show();
    }).mouseout(function(){
        $("#" + element.hov).hide();
    });
})

}); 
//jquery function for contact us
$(document).ready(function(){
  $("button#submitt").click(function(e){
    e.preventDefault();
      let name =  $("input#name").val();
      let email =  $("input#email").val();
      let message = $("#textMessage").val();
      if(name===null){
          alert("Enter your name");
        }
        else if((email=="")||(email==null)||(!validMail(email))){
            alert("Enter a valid email");
          }
          else if((message=="")||(message==null)){
              alert("Please share your thoughts")
            }
            else{
              
                alert(name + " we have received your message. Thank you for reaching out to us.")
                }
                console.log("lorraine");
          function validMail($email) {
              var emailReg = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
              return emailReg.test($email);
              }
               
  })
})

