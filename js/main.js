$(document).ready(function () {
    $('.photo__slider').slick({
        prevArrow: '<button class="slick-arrows slick-prev"><img src="images/arrow-left.svg"></button>',
        nextArrow: '<button class="slick-arrows slick-next"><img src="images/arrow-right.svg"></button>',
        autoplay: true,
        infinite: true,
        autoplaySpeed: 1000,
        responsive: [
            {
                breakpoint: 500,
                settings: {
                    arrows: false,
                    dots: true,
                }
            }
        ]
    });

    $('.burger-btn').on('click', function () {
        $('.burger-btn').toggleClass('active');
        $('.menu__list').toggleClass('menu__list--active');
    });

    setTimeout(function(){
        $('.header__title').removeClass('rot-op');
    },500);

    let n = 0;

    $(window).on('scroll', function numbersDown() {
        let el_top = $('.reason__statistics').offset().top;
        let w_top = $(window).scrollTop();
        let timer;
        let extraTop;
        function animateNumberDown (extraTop) {
            if (el_top <= w_top + extraTop) {
                const reasonStatisticsItem = $('.reason__statistics-item');
                const length = reasonStatisticsItem.length;
                let i = 0;
                stepFunc();
                function stepFunc() {
                    // $(`.reason__statistics-item:eq(${i})`).removeClass('fade-in');
                    $('.reason__statistics-item').eq(i).removeClass('fade-in');
                    i++;
                    if (i<length) timer = setTimeout(stepFunc, 500);
                    else clearTimeout(timer);
                }
                setTimeout(function () {
                    $(window).off('scroll', numbersDown );
                }, 1000);
            }
        }

        if ($(window).width() > 600 ) {
            extraTop = 400; 
            animateNumberDown(extraTop);
            }
        else 
            if  ($(window).width() < 600 && $(window).width() > 400) {
                extraTop = 200;
                animateNumberDown(extraTop);
            }
            else 
                if ($(window).width() <= 400) {
                    const reasonStatisticsItem = $('.reason__statistics-item');
                    const length = reasonStatisticsItem.length;
                    let w_top = $(window).scrollTop();
                    if (n < length) {
                        if (reasonStatisticsItem.eq(n).offset().top < w_top +200 ) {
                            $('.reason__statistics-item').eq(n).removeClass('fade-in');
                            n++;
                        }
                    }
                    else {
                        $(window).off('scroll', numbersDown );
                    }
                }
    })

    $(window).on('scroll', function() {
        let el_top1 = $('.about__row-1').offset().top;
        let el_top2 = $('.about__row-2').offset().top;

        let w_top = $(window).scrollTop();
        if (el_top1  <= w_top + 300) $('.about__row-1').removeClass('anim-left');
        if (el_top2  <= w_top + 300) $('.about__row-2').removeClass('anim-right');
        
        
    })

    $('.footer__item-title').on('click', function () {
        $('.footer__item-title').not($(this)).removeClass('footer__item-title--active');
        $('.footer__item-title').not($(this)).next().slideUp(500);
        $(this).toggleClass('footer__item-title--active').next().slideToggle(500);
    })
});