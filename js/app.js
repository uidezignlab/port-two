'use strict';

$(document).ready(function () {

    function isOnScreen(element){
        var curPos = element.offset();
        var curTop = curPos.top - $(window).scrollTop();
        var screenHeight = $(window).height();
        return (curTop > screenHeight) ? false : true;
    }
    var scrollPosition = 0;
    $(window).on('scroll', function () {
        var _scrollTop = $(window).scrollTop();
        var _uiNav = $('.ui-nav');
        if(_scrollTop>=120){
            if(_scrollTop > scrollPosition){
               //hide menu
                _uiNav.addClass('remove');
                scrollPosition = _scrollTop;
            }else{
                if(_scrollTop < 180){
                    //show menu
                    _uiNav.removeClass('remove');
                    scrollPosition = _scrollTop;
                }else if(_scrollTop < (scrollPosition - 100)){
                    //show menu
                    _uiNav.removeClass('remove');
                    scrollPosition = _scrollTop;
                }
            }
        }

        //show footer when on screen
        if(isOnScreen($('.footer'))) {
            /* Code here... */
            $('.footer-heist').addClass('hideout');
        }else{
            $('.footer-heist').removeClass('hideout');
        }
    });

    //if user reloads while at the bottom of the page, make sure the footer appears
    if(isOnScreen($('.footer'))) {
        $('.footer-heist').addClass('hideout');
    }else{
        $('.footer-heist').removeClass('hideout');
    }

    // toggle side nav
    $('.toggle-sidebar').on('click', function () {
        $('.sidemenu-wrapper').toggleClass('hideout');
    });

    //hide side nav
    var sideMenu = document.getElementById('side-menu');
    window.onclick = function(event) {
        if (event.target === sideMenu) {
            $('.sidemenu-wrapper').removeClass('hideout');
        }
    };

    //count up js initialization
    $('.typedd').typed({
        strings: ["Portfolio.", "Website.", "Profile", "Brand"],
        typeSpeed: 100,
        loop: true,
        smartBackspace: true
    });
    $('.typedd2').typed({
        strings: ["Graphic Designer.", "Photographer.", "Web Developer.", "Design Consultant."],
        typeSpeed: 100,
        loop: true,
        smartBackspace: true
    });

    //owl corousel setup and initialization

    $('.owl-carousel').owlCarousel({
        animateOut: 'slideOutDown',
        animateIn: 'flipInX',
        items:1,
        margin:30,
        stagePadding:30,
        smartSpeed:450,
        autoplay: true,
        loop: true
    });

    //initialize skills progress bars
    $('.prog span').each(function () {
        $(this).css({
            width: $(this).data('length')
        });
        $(this).find('em').text($(this).data('length'));
    });

    //coming soon countdown

    // Set the date we're counting down to
    var countDownDate = new Date("Jan 5, 2018 05:37:25").getTime();

// Update the count down every 1 second
    setInterval(function() {

        // Get todays date and time
        var now = new Date().getTime();

        // Find the distance between now an the count down date
        var distance = countDownDate - now;

        // Time calculations for days, hours, minutes and seconds
        var days = Math.floor(distance / (1000 * 60 * 60 * 24));
        var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        var seconds = Math.floor((distance % (1000 * 60)) / 1000);

        // Display the result in the elements
        $('.day').text(days);
        $('.hr').text(hours);
        $('.min').text(minutes);
        $('.sec').text(seconds);

        // If the count down is finished, write some text
        // if (distance < 0) {
        //     clearInterval(x);
        //     document.getElementById("demo").innerHTML = "EXPIRED";
        // }
    }, 1000);


    //scroll button
        var backTopBtn=500,
        scrollSpeed=500,
        topEl = $('.back-top'),
        topElChild = $('.back-top a');
    $(window).scroll(function(){
        if($(window).scrollTop()>=backTopBtn){
            topEl.addClass('appear');
        }else{
            topEl.removeClass('appear');
        }
    });
    topElChild.on('click',function(e){
        e.preventDefault();
        $('html, body').animate({scrollTop:0},scrollSpeed);return false;
    });

});