$(document).ready(function () {
    $('.fa-caret-down').click(function () {
        $(".nav-list").slideToggle(1000);
    });





    // progress bars
    $(".p-bar-1").progressbar({
        value: 37
    });
    $(".p-bar-2").progressbar({
        value: 80
    });
    $(".p-bar-3").progressbar({
        value: 75
    });
    $(".p-bar-4").progressbar({
        value: 5
    });

    // owl carousel
    $('.owl-carousel').owlCarousel({
        loop: true,
        smartSpeed: 1000,
        margin: 10,
        nav: true,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 1
            },
            1000: {
                items: 1
            }
        }
    });

    $("#accordion").accordion({
        animate: 1000
    });
});

$(window).scroll(function () {
    let scroll = $(window).scrollTop();

    if (scroll >= 70) {
        $(".logo-arrow-ul-omotac").addClass("new-nav");
    } else {
        $(".logo-arrow-ul-omotac").removeClass("new-nav");
    }
});

$("nav a").click(function (link) {
    link.preventDefault();

    let target = $(this).attr("href");

    $("html body").animate({
        scrollTop: $(target).offset().top
    }, 1000);
});

