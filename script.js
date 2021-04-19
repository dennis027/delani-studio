$(document).ready(function(){
    $(".btn").click(function(){
        $(".design p").toggle();
        $(".btn").hide();
       
    });
    $(".design p").click(function(){
        $(".btn").toggle();
        $(".design p").hide();

    });


    $(".btn2").click(function(){
        $(".development p").toggle();
        $(".btn2").hide();
       
    });
    $(".development p").click(function(){
        $(".btn2").toggle();
        $(".development p").hide();

    })
    $(".btn3").click(function(){
        $(".product p").toggle();
        $(".btn3").hide();
       
    });
    $(".product p").click(function(){
        $(".btn3").toggle();
        $(".product p").hide();

    });
    
 $(".overlay1 ,.overlay2 ,.overlay3 ,.overlay4 ").hid();
 $("#one").mouseover(function(){
     $("#one .overlay1").show();
 }).mouseout(function(){
     $("#one .overlay1").hide();
 })

// $(document).ready(function(){
    $("form#form").submit(function(event){
      // event.preventDefault();
      var name = $("input#name").val();
      var email = $("input#email").val();
      var message = $("textarea#comment").val();
      if ($("input#name").val() && $("input#email").val()){
        alert (name + ", we have received your message. Thank you for reaching out to us.");
      }
      else {
        alert("Please enter your name and email!");
      }
      
    });

});

