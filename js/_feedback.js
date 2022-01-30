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
 