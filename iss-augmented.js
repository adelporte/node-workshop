//Augmenting our application - The ISS is getting closer

function outputLatLongISS() {

//Get user location
    var prompt = require('prompt');
    
    prompt.start();
    
    prompt.get(['location'], function (err, result) {
    console.log('You location is:' + result.location);

//Get lat/long 
  var request = require('request');
    var address = "https://maps.googleapis.com/maps/api/geocode/json?address=" + result.location;
    request(address, function(err, result) {
        var resultObject = JSON.parse(result.body);
        var userLong = resultObject.results[0].geometry.location.lat;
        var userLat = resultObject.results[0].geometry.location.lng;
    
//Get ISS lat and long
    var request = require('request');
    var address = "http://api.open-notify.org/iss-now.json";
    request(address, function(err, result) {
        var resultObject = JSON.parse(result.body);
        var ISSLat = resultObject.iss_position.latitude;
        var ISSLong = resultObject.iss_position.longitude;

//necessary code 
     Number.prototype.toRadians = function() {
    return this * Math.PI / 180;
  };
  
//Formula to calculate the distance

var R = 6371000; // metres
var φ1 = userLat.toRadians();
var φ2 = ISSLat.toRadians();
var Δφ = (ISSLat-userLat).toRadians();
var Δλ = (ISSLong-userLong).toRadians();

var a = Math.sin(Δφ/2) * Math.sin(Δφ/2) +
        Math.cos(φ1) * Math.cos(φ2) *
        Math.sin(Δλ/2) * Math.sin(Δλ/2);
var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a));

var d = R * c;

//result
console.log("You are "+ d + " km away from the ISS");
    }); });   });
}

//call the function
outputLatLongISS();