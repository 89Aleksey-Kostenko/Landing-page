$(window).scroll(function() {
    var height = $(window).scrollTop();
    if(height > 750) {
     $('.header-primary').addClass('headfix');
    }
    else {
     $('.header-primary').removeClass('headfix');
    }
   });