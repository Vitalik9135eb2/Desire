$(function(){
    $('.header__btn').click(function(event){
        $('.rightMenu').toggleClass("active");
    });
    $('.rightMenu__btn').click(function(event){
        $('.rightMenu').removeClass("active");
    });




    $('.top__slider').slick({
        dots: true,
        arrows: false,
        fade: true,
        autoplay: true
    })

    var mixer = mixitup('.gallary__inner', {
        load: {
            filter: '.living'
        }
    });
})