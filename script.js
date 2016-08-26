$(document).ready(function() {
	var totWidth=0;
	var position = new Array();

	$('#slides.slide').each(function(i){

		position[i]= totWidth;
		totWidth += $(this).width();

		if (!$(this).width()) 
		{
			alert("Please, fill in width & height for all your images!");
			return false;
		}
	});

	$('#slides').width(totWidth);

	$('#menu ul li a').click(function(e){
		$('li.menuItem').removeClass('act').addClass('inact');
		$(this).parent().addClass('act');

		var pos = $(this).parent().prevAll('.menuItem').length;

		$('#slides').stop().animate({marginLeft:-position[pos]+'px'}, 450);

		e.preventDefault();
	});

	$('#menu ul li.menuItem:first').addClass('act').siblings().addClass('inact');
});