
(function ($) {

    // mobile menu burger
    $('.header__burger').click(function () {
        $(this).toggleClass('open');
        $('body').toggleClass('overflow-hidden')
        $('.header__menu').toggleClass('open');
    });

    $('.header__menu li').click(function () {
        $('.header__burger').removeClass('open');
        $('body').removeClass('overflow-hidden')
        $('.header__menu').removeClass('open');
    });



}(jQuery));


