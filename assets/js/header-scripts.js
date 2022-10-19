(function ($) {


    // fixed menu - changed on sroll
    $(window).scroll(function () {
        var height = $(window).scrollTop();
        if (height >= 100) {
            $('.header-wrap').addClass('scrolled');
        }
        if (height < 100) {
            $('.header-wrap').removeClass('scrolled');
        }
    });

    //smooth scrolling
    $(document).ready(function ($) {
        $(document).on('click', 'a[href*="#"]', function (event) {
            page_url = document.location.href;
            link_url = $(this).attr('href');
            link_url_split = link_url.split('#');
            link_url_before_hash = link_url_split [link_url_split.length-2];
            link_url_after_hash = link_url_split [link_url_split.length-1];
            // console.log(page_url);
            // console.log(link_url_before_hash);
            if ((page_url == link_url_before_hash) || (link_url_before_hash === '')) {
                event.preventDefault();
                var targetOffset = $(this.hash).offset().top - 120;
                // console.log(targetOffset);
                $('html, body').animate({ scrollTop: targetOffset }, 600);
            } else {
                // console.log(false);
            }
        });
    });

    // smooth scrolling to anchor - on other page
    if (window.location.hash)
        scroll(0, 0);
    setTimeout(function () { scroll(0, 0); }, 1);
    $(function () {
        $('.scroll').on('click', function (e) {
            e.preventDefault();
            $('html,body').animate({ scrollTop: $($(this).attr('href')).offset().top - 120 }, 1000, 'swing');
        });
        if (window.location.hash) {
            $('html,body').animate({ scrollTop: $(window.location.hash).offset().top - 120 }, 1000, 'swing');
            history.replaceState(null, null, ' ');
        }
    });

}(jQuery));