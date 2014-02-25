$(document).ready(function(){
    $('section[data-type="background"]').each(function(){
        var $bgobj = $(this); // assigning the object
     
        $(window).scroll(function() {
            // height*pos = distance from the top ensuring alighment when we reach it
            var yPos = -(($(window).scrollTop() - ($bgobj.height() * $bgobj.data('pos'))) / $bgobj.data('speed'));
             
            // Put together our final background position
            var coords = '50% '+ yPos + 'px';
 
            // Move the background
            $bgobj.css({ backgroundPosition: coords });
        });
    });   
});
