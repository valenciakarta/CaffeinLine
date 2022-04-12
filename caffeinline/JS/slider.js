$("#next").click(function(){
    var curr = $(".active");
    var nextImg = curr.next();

    if(nextImg.length != 0){
        curr.removeClass("active");
        nextImg.addClass("active");
    }else{
        curr.removeClass("active");
        $("#first").addClass("active");
    }
});

$("#prev").click(function(){
    var curr = $(".active");
    var nextImg = curr.prev();

    if(nextImg.length != 0){
        curr.removeClass("active");
        nextImg.addClass("active");
    }else{
        curr.removeClass("active");
        $("#last").addClass("active");
    }
});