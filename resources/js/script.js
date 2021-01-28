$(document).ready(function() {
    
/* sticky navigation */
    $('.js--section-features').waypoint(function(direction) {
        if(direction == "down") {
            $('nav').addClass('sticky');
        } else {
            $('nav').removeClass('sticky')
        }
            
    }, {
      offset: '60px;'
    })
   
    /* 
    var waypoints = $('#handler-first').waypoint(function(direction) {
      notify(this.element.id + ' hit 25% from top of window') 
    }, {
      offset: '25%'
    })
    */
    
    /* sticky navigation */
    $('.js--wp-1').waypoint(  
    (direction) => {
    // add the class animated__animated and animate__fadeIn to waypoint 1
      $('.js--wp-1').addClass('animate__animated animate__fadeIn');
    },
    {
      offset: '50%',
    });
//When you reach waypoint 2
    $('.js--wp-2').waypoint(
    (direction) => {
// add the class animated__animated and animate__fadeInLeft to waypoint 2
      $('.js--wp-2').addClass('animate__animated animate__fadeInUp');
    },
    {
      offset: '50%',
    });
//When you reach waypoint 3
    $('.js--wp-3').waypoint(
    (direction) => {
 // add the class animated__animated and animate__fadeIn to waypoint 3
      $('.js--wp-3').addClass('animate__animated animate__fadeIn');
    },
    {
      offset: '50%',
    });
//When you reach waypoint 4
    $('.js--wp-4').waypoint(
    (direction) => {
// add the class animated__animated and animate__bounceIn to waypoint 4
      $('.js--wp-4').addClass('animate__animated animate__bounceIn');
    },
    {
      offset: '25%',
    });

/* Mobile nav */
    $('.js--nav-icon').click(function() {
        var nav = $(".js--main-nav");
        var icon = $('.js--nav-icon i')
    
        nav.slideToggle(200);
        if (icon.hasClass('ion-ios-menu')) {
            icon.addClass('ion-ios-close');
            icon.removeClass('ion-ios-menu');
        } else {
            icon.addClass('ion-ios-menu');
            icon.removeClass('ion-ios-close');
        }
        
    });

});