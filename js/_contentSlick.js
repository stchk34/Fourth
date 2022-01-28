$(document).ready(function() {
    $('.slick_slider').slick({
        arrows:false,
        slidesToShow:3,
        draggable:false,
         dots:true,
         infinite:false,
         autoplay:true,

        responsive:[
        {
            breakpoint: 850,
        	settings: {
        		 draggable:true,
        		 slidesToShow:2,
        		 dots:true,}

        },{
        	breakpoint: 600,
        	settings: {
        		 draggable:true,
        		 slidesToShow:1,
        		 dots:true,}

        }
      ]

       
        
    });
});