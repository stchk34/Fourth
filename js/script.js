function animated(){
    const counters = document.querySelectorAll('.value');
    const speed = 3000;
    counters.forEach( counter => {
    const animate = () => {
        const value = +counter.getAttribute('akhi');
        const data = +counter.innerText;
        
        const time = value / speed;
        if(data < value) {
            console.log(value);
            counter.innerText = Math.ceil(data + time);
            setTimeout(animate, 10);
            }else{
            counter.innerText = value;
            }
        
    }

    animate();
    });
}


var block_show = null;
 
function scrollTracking(){
	var wt = $(window).scrollTop();
	var wh = $(window).height();
	var et = $('.stat_inside').offset().top + 20;
	var eh = $('.stat_inside').outerHeight();
 
	if (wt + wh >= et && wt + wh - eh * 2 <= et + (wh - eh)){
		if (block_show == null || block_show == false) {
			console.log('Блок active в области видимости');
		}
		block_show = true;
        animated();
	} else {
		if (block_show == null || block_show == true) {
			console.log('Блок active скрыт');
		}
		block_show = false;
	}
}
 
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

