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


});