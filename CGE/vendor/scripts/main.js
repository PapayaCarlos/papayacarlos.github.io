$(document).ready(function() {

    $('.wp1').css('opacity', '0');
    $('.wp2').css('opacity', '0');


    /***************** Waypoints ******************/
    $('.wp1').waypoint(function() {
        $('.wp1').addClass('animated fadeInLeft');
    }, {
        offset: '75%'
    });

    $('.wp2').waypoint(function() {
        $('.wp2').addClass('animated fadeInRight');
    }, {
        offset: '75%'
    });

});
