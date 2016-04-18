//Getting some data

function outputLatLongISS() {

    var request = require('request');
    var address = "http://api.open-notify.org/iss-now.json";
    request(address, function(err, result) {
        var resultObject = JSON.parse(result.body);
        console.log(typeof resultObject);
        console.log("The current ISS latitude is :" + resultObject.iss_position.latitude.toFixed(2));
        console.log("The current ISS longitude is :" + resultObject.iss_position.longitude.toFixed(2));
    });
}

outputLatLongISS();