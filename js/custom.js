
//
$(document).ready(function() {
			$('#fullpage').fullpage({
				'scrollingSpeed': 600,
				'css3': true,
				'verticalCentered': false,
				'autoScrolling': false,
				'navigation': true,
				'navigationPosition': 'right',
			});
		});

// wow
$(function()
{
    new WOW().init();
    $(".rotate").textrotator();
})