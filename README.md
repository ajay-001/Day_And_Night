Day_And_Night
=============

Customize Your Website Depending on the User's Local Time

##Usage

### Getting Time of Day (returns 'day', 'afternoon', or 'night')
$.timeOfDay();

### Changing Background of Element(s) Based on Time of Day
$('body').changeBackground();

If you wish to override the default images, use these parameters:
bgDay:'path/to/img/from/html/file'
bgAfternoon:'path/to/img/from/html/file'
bgNight:'path/to/img/from/html/file'

E.g. 
$('body').changeBackground({
  		bgDay : "img/day_new.jpg",
			bgAfternoon : "img/afternoon_new.jpg",
			bgNight : "img/night_new.jpg"
		})
