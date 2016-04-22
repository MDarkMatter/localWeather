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
        $("#temp").html(Math.round(obj.main.temp) + '&#8457;');
        $("#tempcels").html(Math.round((obj.main.temp-32)*(5/9)) + '&#8451;');
        $("#cond").html(obj.weather[0].id);
        $("#city").html(obj.name);
        icon(obj.weather[0].id);
    });
}

function icon(id){
    var hundo = String(id).charAt(0);
    switch (hundo) {
      case '2':
        $( "#icon" ).addClass( "stormy" );
        $('body').css("background-image", "url('http://etinspires.com/wp-materials/uploads/2014/10/storms.jpg')");
        break;
      case "3":
      case "5":
        $( "#icon" ).addClass( "rainy" );
        $('body').css("background-image", "url('http://www.toasto.com/wp-content/uploads/2010/04/rainy-day-landscape.jpg')");
        break;
      case "6":
        $( "#icon" ).addClass( "snowy" );
        $('body').css("background-image", "url('http://www.nytimes.com/images/2016/01/24/nyregion/23snow-hpslide-16/23snow-hpslide-16-superJumbo.jpg')");
        break;
      case "7":
        $( "#icon" ).addClass( "cloudy" );
        $('body').css("background-image", "url('http://blog.robertstrachan.com/wp-content/gallery/photo-a-day/big-sky.jpg')");
        break;
      case "8":
        $( "#icon" ).addClass( "sunny" );
        $('body').css("background-image", "url('https://cdn.cloudpix.co/images/sunny/god-nature-green-landscape-paradise-peaceful-sky-sun-sunny-trees-98c724fc2708b0fbedbe09881341dcf2-large-632579.jpg')");
        break;
      default:
        $( "#icon" ).addClass( "rainbow" );
    }
}

// ------------Make Buttons Do Stuff

function toF(){
    $('#fBut').addClass('active');
    $('#cBut').removeClass('active');
    $('#temp').removeClass('hidden');
    $('#tempcels').addClass('hidden');

}

function toC(){
    $('#cBut').addClass('active');
    $('#fBut').removeClass('active');
    $('#temp').addClass('hidden');
    $('#tempcels').removeClass('hidden');
}
