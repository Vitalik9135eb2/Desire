$(function(){
    $('.header__btn').click(function(event){
        $('.rightMenu').toggleClass("active");
    });
    $('.rightMenu__btn').click(function(event){
        $('.rightMenu').removeClass("active");
    });



    $('.header__btn-menu').click(function(event){
        $('.menu-left').toggleClass("active");
        $('.menu-right').toggleClass("active");
    });
    $('.menu__close').click(function(event){
        $('.menu').removeClass("active");
    });

    $('.aside__btn-open').click(function(event){
        $('.aside').toggleClass("active");
    });

    $('.header__btn-menu').click(function(event){
        $('.menu').toggleClass("active");

        if($('.menu').hasClass("active")){
            $('.header__btn-menu--close').css('display', 'block');
            $('.header__btn-menu--open').css('display', 'none');
        }
    
        else{
            $('.header__btn-menu--close').css('display', 'none');
            $('.header__btn-menu--open').css('display', 'block')
        }
    });



    $('.top__slider').slick({
        dots: true,
        arrows: false,
        fade: true,
        autoplay: true
    })

    $('.about-gellary__slider').slick({
        dots: true,
        arrows: false,
        fade: true,
        autoplay: true,
        autoplaySpeed: 2000,
    })

    $('.article-slider__box').slick({
        prevArrow: '<button type="button" class="article-slider__arrow article-slider__arrowLeft"><img src="./img/blog-page/Path.svg" alt="arrow next"></button>',
        nextArrow: '<button type="button" class="article-slider__arrow article-slider__arrowRight"><img src="./img/blog-page/next-slide.svg" alt="arrow back"></button>'
    })
    

    var mixer = mixitup('.gallary__inner', {
        load: {
            filter: '.living'
        }
    });





    
})