$(document).ready(function() {
    
    /* For the sticky navigation */
    $('.js--section-loading').waypoint(function(direction) {
        if (direction === "down") {
            $('.main-nav').addClass('sticky');
        } else {
            $('.main-nav').removeClass('sticky');
        }
        }, {
        offset: '-30px;'
        });
    
    
    
    $('.js--wp-1').waypoint(function(direction) {
        $('.opis').addClass('propis');
    }, {
        offset: '80%'
    });
});