#Comp 20 Assignment 2: mapchat

Server now points to [my crappy server](https://mysterious-hamlet-3112.herokuapp.com/) rather than Ming's.

**What aspects of the work have been correctly implemented and what have not:**

Right now, it:
* Retrieves my location
* Sends my location (latitude, longitude, login, message) to the datastore with all special characters in the message properly encoded
* Displays my location on the map with a unique marker and info window
* Retrieves the locations of people in the class
* Displays the locations of people in the class on the map with an info window for each person containing their login name, message, and distance away from me (now in miles!)

**Identify anyone with whom you have collaborated or discussed the assignment:**
* No one yet. Unless passively reading Piazza counts.

**Number of hours spent working on the assignment:**
* 8 (so far)

**References**
* [Geolocation map base HTML/Javascript](https://github.com/tuftsdev/WebProgramming/blob/gh-pages/examples/google_maps/geolocation_map.html) and [CSS](https://github.com/tuftsdev/WebProgramming/blob/gh-pages/examples/google_maps/geolocation_map_style.css) courtesy of Ming Chow
* I learned how to implement a [custom Google Maps marker](https://developers.google.com/maps/documentation/javascript/markers) courtesy of Google Developers
* [Steven Universe Greg image](http://steven-universe.wikia.com/wiki/File:Young_Greg_Full_Body.png) courtesy of the Steven Universe Wikia
* [Haversine formula](http://www.movable-type.co.uk/scripts/latlong.html) and [Javascript Haversine formula implementation](http://stackoverflow.com/questions/14560999/using-the-haversine-formula-in-javascript)
* [Degrees to radians conversion formula](http://www.mathinary.com/degrees_radians.jsp)
* [Google Maps info windows](https://developers.google.com/maps/documentation/javascript/infowindows)
