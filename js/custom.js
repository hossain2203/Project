jQuery(document).ready(function(){
	jQuery('.nav-area .bar').click(function(){
		jQuery('.main-menu').slideToggle(1000);
	});

	var screenSize = $(window).width();
    if (screenSize > 799) {
		$(".main-menu").show();
		$(".nav-area .bar").hide();
    } else {
		$(".main-menu").hide();
		$(".nav-area .bar").show();
    }

	jQuery(window).resize(function(){
		var screenwidth=jQuery(window).width();

		if(screenwidth > 767) {
			jQuery(".main-menu").show();
			jQuery(".nav-area .bar").hide();
		}
		else{
			jQuery(".main-menu").hide();
			jQuery(".nav-area .bar").show();
		}

	})
});