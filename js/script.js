
$(window).scroll(function(){
	scrollTracking();
});
	
$(document).ready(function(){ 
	scrollTracking();
});

$(document).ready(function(){
    $('.what_slider').slick({
        arrows:false,
        slidesToShow:1,
        dots:true,
        infinite:true,
       autoplay:true,
       fade:true,
       draggable:true,
       speed:1000,
       autoplaySpeed:10000,

    });

});
$(document).ready(function(){
    $('.mentors_slider').slick({
        arrows:false,
        slidesToShow:1,
        dots:true,
        infinite:true,
       autoplay:true,
       fade:true,
       draggable:true,
       speed:1000,
       autoplaySpeed:10000,
       

    });

});

