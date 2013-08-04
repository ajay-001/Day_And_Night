/* Allows For determing of Local Time on Client's Computer */
//Can change the body background depending on time of day
//Can retrieve whether the user's machine is running at 'day' or 'knight'
 
jQuery.timeOfDay = function() {
	var current_time_hours = new Date().getHours();
	if(current_time_hours < 12){
		//return 'day';
		return('day');
	} else if(current_time_hours < 18){
		//return 'afternoon';
		return('afternoon');
	}
	else{
		//return 'night';
		return('night;');
	}
};

(function ( $ ) {
	
	$.fn.changeBackground = function(options){
		// This is the easiest way to have default options.
        var settings = $.extend({
            // These are the defaults.
            bgDay: 'day.jpg',
            bgAfternoon : 'afternoon.jpg',
			bgNight : 'night.jpg'
        }, options );
		
		return this.each(function() {
			//make the bgImage span the entire screen size
			$(this).css("background-size","cover");
			//change the background element depending on the current time
			if ($.timeOfDay()=='day'){
				$(this).css("background-image", "url("+settings.bgDay+")");
			} else if($.timeOfDay()=='afternoon'){
				$(this).css("background-image", "url("+settings.bgAfternoon+")");
			} else{
				$(this).css("background-image", "url("+settings.bgNight+")");
			}
		});
	}
}( jQuery ));