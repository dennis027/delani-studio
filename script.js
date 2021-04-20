$(document).ready(function(){
    $(".btn").click(function(){
        $(".design p").toggle(1000);
        $(".btn").hide(1000);
       
    });
    $(".design p").click(function(){
        $(".btn").toggle(1000);
        $(".design p").hide(1000);

    });


    $(".btn2").click(function(){
        $(".development p").toggle(1000);
        $(".btn2").hide(1000);
       
    });
    $(".development p").click(function(){
        $(".btn2").toggle(1000);
        $(".development p").hide(1000);

    })
    $(".btn3").click(function(){
        $(".product p").toggle(1000);
        $(".btn3").hide(1000);
       
    });
    $(".product p").click(function(){
        $(".btn3").toggle(1000);
        $(".product p").hide(1000);

    });
    
 $(".overlay1 ,.overlay2 ,.overlay3 ,.overlay4 ").hid();
 $("#one").mouseover(function(){
     $("#one .overlay1").show();
 }).mouseout(function(){
     $("#one .overlay1").hide();
 })

});

$(document).ready(function(){
    $("form#form1").on('submit',function(event){
        event.preventDefault();
        var name = $("input#name").val();
        var email = $("input#email").val();
        var message = $("textarea#message").val();
    
        if ($("input#name").val() && $("input#email").val() && $("input#message").val() ){
            alert ("Hello " + name + ", Thank you for reaching out, we'll get back to you shortly...");
        }
        else if($("input#name").val() && $("input#email").val()){
            alert("Thank you for reaching ou to us. If you wish to leave a message please type in on the message section..");
        }
       else{
         alert("Please provide correct name or email")
       }
    });
})