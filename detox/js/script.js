

$(document).ready(function () {
    $('.home-testimonials__slider').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 10000,
        arrows: true,
        dots: true,
        arrows: false,
    });
  });

$(document).ready(function () {
    $('.home-slider').slick({
        prevArrow: '<button type="button" class="slick-prev"></button>',
        nextArrow: '<button type="button" class="slick-next"></button>'
    });
});

function toggleColor() {
    const icon = document.getElementById('dynamic-icon');
    icon.querySelector('path').style.fill =
        icon.querySelector('path').style.fill === 'blue' ? 'red' : 'blue';
  }


$(document).ready(function(){
    $('.nav-mobile-open').on('click', function() {
        if($(this).text() == 'Menu'){
            $('.nav-mobile__list').show();
            $(this).text('Close');
        } else {
            $('.nav-mobile__list').hide();
            $(this).text('Menu');
        }
    })
});
















































