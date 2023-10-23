let result = document.getElementById("result");

function showLocation(){
    if(navigator.geolocation){
        navigator.geolocation.getCurrentPosition(showPosition, showError);
    } else {
        result.innerHTML = "Geolocation is not supported by this browser";
    }
}

function showPosition(position){
    result.innerHTML = "Latitude: " + position.coords.latitude + 
    "<br>Longitude: " + position.coords.longitude +
    "<br>Accuracy: " + position.coords.accuracy + 
    "<br>Altitude: " + position.coords.altitude +
    "<br>Altitude Accuracy: " + position.coords.altitudeAccuracy +
    "<br>Heading: " + position.coords.heading +
    "<br>Speed: " + position.coords.speed + 
    "<br>Date/time: " + position.timestamp;

}

function showError(error) {
    switch(error.code) {
      case error.PERMISSION_DENIED:
        result.innerHTML = "User denied the request for Geolocation."
        break;
      case error.POSITION_UNAVAILABLE:
        result.innerHTML = "Location information is unavailable."
        break;
      case error.TIMEOUT:
        result.innerHTML = "The request to get user location timed out."
        break;
      case error.UNKNOWN_ERROR:
        result.innerHTML = "An unknown error occurred."
        break;
    }
}