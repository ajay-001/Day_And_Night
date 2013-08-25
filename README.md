dayAndNight.js
=============

Customize Your Website Depending on the User's Local Time

##Usage

### Getting Time of Day (returns 'day', 'afternoon', or 'night')
```
$.timeOfDay();
```

### Changing Background of Element(s) Based on Time of Day
```
$('body').changeBackground();
```

If you wish to override the default images, use these parameters:<br/>
<table>
    <tr>
        <td><b>bgDay</b></td>
        <td>'path/to/img/from/html/file'</td>
    </tr>
    <tr>
    	<td><b>bgAfternoon</b></td>
    	<td>'path/to/img/from/html/file'</td>
    </tr>
    <tr>
    	<td><b>bgNight</b></td>
    	<td>'path/to/img/from/html/file'</td>
    </tr>
</table>

E.g. <br/>
```
$('body').changeBackground({
  			bgDay : "img/day_new.jpg",
			bgAfternoon : "img/afternoon_new.jpg",
			bgNight : "img/night_new.jpg"
		})
```
