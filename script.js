$(document).ready(function(){
    $(".btn").click(function(){
        $(".what p").toggle();
        $(".btn").hide();
       
    });
    $(".what p").click(function(){
        $(".btn").toggle();
        $(".what p").hide();

    })

});