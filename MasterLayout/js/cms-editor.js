$(document).ready(function(){

	var wWidth = $(window).width();
	var wHeight = $(window).height();

	if(wWidth>920){
		$('.page-content-builder, .widget-selector').css({
			"height": (wHeight-300)+'px',
			"overflow-y": "scroll",
			"overflow-x": "hidden"
		});
	}

});

function showWidgetSelector(){
	$('.page-content-builder').animate();
}