$(document).ready(function () {
    // Присваиваем всем персональный id
    $(".businesses-item").each(function(i) {
        $(this).attr("id", "businesses_item-" + i);
        $(this).find(".show-default").attr("id", "show-default-" + i);
        $(this).find(".show-on-mouse").attr("id", "show-on-mouse-" + i);
    });

    $(".businesses-item").each(function(i){
        // Меняем блок при наведении
        $("#businesses_item-" + i).mouseover(function(){
            $("#show-on-mouse-" + i).show();
            $("#show-default-" + i).hide();
        });
        // Меняем блок при уходе
        $("#businesses_item-" + i).mouseout(function(){
            $("#show-default-" + i).show();
            $("#show-on-mouse-" + i).hide();
        });
    });
    $(".OurFriend-slick").slick({
        adaptiveHeight: true,
        slidesToShow: 7,
        slidesToScroll: 5,
        arrows: true,
        prevArrow: document.getElementById("arrow-left"),
        nextArrow: document.getElementById("arrow-right")
    });
});
