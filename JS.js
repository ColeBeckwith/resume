/**
 * Created by CBeckwith411 on 5/25/16.
 */
$(document).ready(function(){
    $('html').fadeIn(1000);
    $('.icon-minus-sign').fadeOut(0);

    $('.button').click(function() {
        $(this).next().toggle(700);
        $("html, body").animate({scrollTop: $(this).offset().top - 75,}, 1000, 'swing');
        $('.icon-plus-sign', this).toggle(0);
        $('.icon-minus-sign', this).toggle(0);
    });
});
