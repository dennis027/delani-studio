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
    
 $(".overla").hide();
 $("3one").mouseover(function(){
     $("#one .overlay").show();
 }).mouseout(function(){
     $("#one .overlay").hide();
 })
});