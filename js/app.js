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
                if(_scrollTop < (scrollPosition - 100)){
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
        /* Code here... */
        $('.footer-heist').addClass('hideout');
    }else{
        $('.footer-heist').removeClass('hideout');
    }

    // toggle side nav
    $('.toggle-sidebar').on('click', function () {
        $('.sidemenu-wrapper').toggleClass('hideout')
    });

    //hide side nav
    var sideMenu = document.getElementById('side-menu');
    window.onclick = function(event) {
        if (event.target === sideMenu) {
            $('.sidemenu-wrapper').removeClass('hideout');
        }
    };

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
        $(this).find('em').text($(this).data('length'))
    })

});