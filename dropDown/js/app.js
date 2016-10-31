$("nav div").click(function(){

    if($(".dropDown").position().top == -240){
        $(".dropDown").css("top", "80px");
    }else{
        $(".dropDown").css("top", "-240px");
    }

});

$(".dropDown div").click(function (e) {
    var btnId = "section"+e.currentTarget.id;

    $('html, body').animate({
        scrollTop: $("#" + btnId).offset().top
    }, 1000);

    $(".dropDown").css("top", "-240px");
});
