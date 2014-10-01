$(document).ready(function() {
    //табы
    $('ul.tabs').delegate('li:not(.current)', 'click', function() {
        $(this).addClass('current').siblings().removeClass('current')
            .parents('div.section').find('div.box').eq($(this).index()).fadeIn(150).siblings('div.box').hide();
    })

    //bxslider
    $('.bxslider').bxSlider({
        auto: true
    });
    $('.bxslider_top').bxSlider({
        mode: 'fade',
        auto: true
    });
});
