$(document).ready(function($){
	//Isotope JS perfect-scrollbar.min.js
	$(".portfolio-filter li").on('click', function(){
		var filterData = $(this).attr("data-filter");
		$(".portfolio-list").isotope({
			filter: filterData
			
		});
		$(".portfolio-filter li").removeClass('active'); //Active Remove Class
		$(this).addClass('active'); 					//Active Add Class
	});
	
	$(".portfolio-list").isotope({
		itemSelector: '.single-portfolio-item',
		percentPosition: true,
		masonry: {
			columnwidth: '.single-portfolio-item',
			horizontalOrder: true
		}
	});
	
	// Perfect ScrollBar Js Code
	$(".scrolled-another").perfectScrollbar({
		theme: 'yellow-theme'
	});
});