const weatherIcon = document.getElementById('weather-icon');
const temperatureElement = document.getElementById('temperature');
const elevationElement = document.getElementById('elevation');
const humidityElement = document.getElementById('humidity');

var locationGotten = false;

function getUserLocation() {
    if (navigator.geolocation && !locationGotten) {
        navigator.geolocation.getCurrentPosition(
            function(position) {
                var latitude = position.coords.latitude;
                var longitude = position.coords.longitude;
                console.log('Latitude:', latitude);
                console.log('Longitude:', longitude);

                localStorage.setItem('latitude', latitude);
                localStorage.setItem('longitude', longitude);

                weather(latitude, longitude);
            },
            
            function(error) {
                console.log('Error occurred. Error code:', error.code);
            }
        );

        locationGotten = true;
    }

    else if (locationGotten) {
        weather(localStorage.getItem('latitude'), localStorage.getItem('longitude'));
    }
    
    else {
        console.log('Geolocation is not supported by this browser.');
    }
}  

function weather(latitude, longitude) {
    fetch(`https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&hourly=temperature_2m,relativehumidity_2m,rain,showers,apparent_temperature&forecast_days=1`)
        .then(function(response) {
            return response.json();
        })

        .then(function(data) {
            console.log(data);

            var temperature = data.hourly.temperature_2m[0];
            var apparentTemperature = data.hourly.apparent_temperature[0];
            var humidity = data.hourly.relativehumidity_2m[0];
            var rain = data.hourly.rain[0];
            var showers = data.hourly.showers[0];
            var elevation = data.elevation;

            console.log(temperature, humidity, rain, showers, elevation);

            temperatureElement.innerHTML = temperature + '°C<br><div class="small">Feels like '  + apparentTemperature + '°C</div>';
            humidityElement.innerHTML = 'Humidity<br><div class="small">' + humidity + '%</div>';
            elevationElement.innerHTML = 'Elevation<br><div class="small">' + elevation + 'm</div>';

            if (rain == 0) {
                weatherIcon.innerText = "sunny";
            }

            else {
                weatherIcon.innerText = "rainy";
            }
        })

        .catch(function(error) {
            console.log(error);
        })
}

getUserLocation();
setTimeout(getUserLocation, 60000); // 1 minute