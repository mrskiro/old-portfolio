$(function () {
    //scroll
    $(window).scroll(function () {
        if ($(window).scrollTop() > 50) {
            $('.navbar').addClass('nav-scroll');
        } else {
            $('.navbar').removeClass('nav-scroll');
        }
    });

    $('a[href^="#"]').click(function () {
        var speed = 500;
        var href = $(this).attr("href");
        var target = $(href == "#" || href == "" ? 'html' : href);
        var position = target.offset().top;
        $("html,body").animate({ scrollTop: position }, speed, "swing");
        return false;
    });

    //slide
    var slideContents = document.querySelectorAll('.slideContents');
    var slideContentsRect = [];
    var slideContentsTop = [];
    var windowY = window.pageYOffset;
    var windowH = window.innerHeight
    var remainder = 100;

    for (var i = 0; i < slideContents.length; i++) {
        slideContentsRect.push(slideContents[i].getBoundingClientRect());
    }

    for (var i = 0; i < slideContentsRect.length; i++) {
        slideContentsTop.push(slideContentsRect[i].top + windowY);
    }

    window.addEventListener('resize', function(){
        windowH = window.innerHeight;
    });

    window.addEventListener('scroll', function(){
        windowY = window.pageYOffset;

        for (var i = 0; i < slideContents.length; i++) {
            if(windowY > slideContentsTop[i] - windowH + remainder) {
                slideContents[i].classList.add('show');
            } else {
                slideContents[i].classList.remove('show');
            }
        }
    });

    // //modal
    // var winScrollTop;
    // $('.modal-open').each(function(){
    //     $(this).on('click',function(){
    //         winScrollTop = $(window).scrollTop();
    //         var target = $(this).data('target');
    //         var modal = document.getElementById(target)
    //         $(modal).fadeIn();
    //         $('.overlay').fadeIn();
    //         return false;
    //     })
    // });
    // $('.overlay, .modal-close').on('click',function(){
    //     $('.overlay, .modal').fadeOut();
    //     $('body,html').stop().animate({scrollTop:winScrollTop},100);
    //     return false;
    // })


});