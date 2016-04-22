//-----------Get Coordinates

navigator.geolocation.getCurrentPosition(function(position) {
    getCoord(position.coords.latitude, position.coords.longitude);

});

// ---------Construct API call

function getCoord(lat, lon) {
    var url = "http://api.openweathermap.org/data/2.5/weather?lat=" + lat + "&lon=" + lon + "&units=imperial" + "&appid=7271d3292aac8f43062a11e66a3aa1b0"
    getWeather(url);
}

// --------Display Temp and appropriate icon

function getWeather(url) {
    $.getJSON(url, function(obj) {
        $("#temp").html(obj.main.temp);
        $("#cond").html(obj.weather[0].id);
        icon(obj.weather[0].id);
    });
}

// Group 2xx: Thunderstorm
// Group 3xx: Drizzle
// Group 5xx: Rain
// Group 6xx: Snow
// Group 7xx: Atmosphere (fog)
// Group 800: Clear
// Group 80x: Clouds

// <div class="sunny"></div>
// <div class="cloudy"></div>
// <div class="rainy"></div>
// <div class="snowy"></div>
// <div class="rainbow"></div>
// <div class="starry"></div>
// <div class="stormy"></div>

function icon(id){
    //var hundreds = id.charAt(0);
    var hundo = String(id).charAt(0);
    switch (hundo) {
      case '2':
        $( "#icon" ).addClass( "stormy" );
        break;
      case "3":
        $( "#icon" ).addClass( "rainy" );
        break;
      case "5":
        $( "#icon" ).addClass( "rainy" );
        break;
      case "6":
        $( "#icon" ).addClass( "snowy" );
        break;
      case "7":
        $( "#icon" ).addClass( "cloudy" );
        break;
      case "8":
        $( "#icon" ).addClass( "sunny" );
        break;
      default:
        $( "#icon" ).addClass( "rainbow" );
    }
}
