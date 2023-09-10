

$(function () {
    $(window).on("scroll", function () {
        let scrollTop = $(window).scrollTop();
        if (scrollTop > 200) {
            $("#backToTop").addClass("show");
        } else {
            $("#backToTop").removeClass("show");
        }
    });
    $("#backToTop").on("click", function () {
        $("body").animate({
            scrollTop: 200,
        });
    });

    $('.banner_slider').slick({
        autoplay:true,
        autoplaySpeed:1500,
        prevArrow:'<i class="fa-solid fa-long-arrow-left banner_slider_arrow"></i>',
        nextArrow:'<i class="fa-solid fa-long-arrow-right banner_slider_arrow"></i>',
        dots:true,
        dotsClass:'banner_slider_dots'
    });
});
