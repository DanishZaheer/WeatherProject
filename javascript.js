// api.openweathermap.org/data/2.5/weather?q={city name}&appid={your api key}

// const weatherApi = {
//     key:"b7fc2cdd10cc0a1b0e7813f8ff1350c3",
//     baseUrl:"https://api.openweathermap.org/data/2.5/weather"
// }

const searchInputBox = document.getElementById("inp-box")
searchInputBox.addEventListener("keypress" , (event) => {
    // console.log(searchInputBox);

     /* no Showing line by line data by condition of 'if'
     line by line showing data when we only console*/

    if(event.keyCode ==13) {                   
    
    getWeather();        
    
    document.querySelector('.weather-body').style.display = "block";
    }
})

function getWeather(){
fetch(`https://api.openweathermap.org/data/2.5/weather?q=${searchInputBox.value}&appid=b7fc2cdd10cc0a1b0e7813f8ff1350c3&units=metric`) 
.then(weather => {
    return weather.json()
})
 .then(data=>showWeatherReport(data))
}


function showWeatherReport(weather){
    console.log(weather);
     const city = document.getElementById('city')
      city.innerHTML = `${weather.sys.country},${weather.name}`

      const date = document.getElementById('date')
      const todayDate = new Date()
      date.innerHTML = dateManage(todayDate);
    
    const temp = document.getElementById('temp')
        temp.innerHTML = `${weather.main.temp}&deg;C`

    const minmax = document.getElementById('min-max')                  
         minmax.innerHTML = `${weather.main.temp_max}&deg;C(min) / ${weather.main.temp_min}&deg;C(max)`

    const climate = document.getElementById(`climate`)
        climate.innerHTML = `${weather.weather[0].main}`

        if(climate.textContent == 'Clear'){
            document.body.style.backgroundImage = "url('clear.jpg')"
            document.body.style.backgroundSize = "100% 100%"
        }

        else if(climate.textContent == 'Clouds'){
            document.body.style.backgroundImage = "url('cloud.jpg')"
            document.body.style.backgroundSize = "100% 100%"
        }

        else if(climate.textContent == 'Haze'){
            document.body.style.backgroundImage = "url('haze.jpg')"
            document.body.style.backgroundSize = "100% 100%"
        }

        else if(climate.textContent == 'Rain'){
            document.body.style.backgroundImage = "url('rain.jpg')"
            document.body.style.backgroundSize = "100% 100%"
        }

        else if(climate.textContent == 'Snow'){
            document.body.style.backgroundImage = "url('snow.jpg')"
            document.body.style.backgroundSize = "100% 100%"
        }

        else if(climate.textContent == 'Thunderstorm'){
            document.body.style.backgroundImage = "url('thunder.jpg')"
            document.body.style.backgroundSize = "100% 100%"
        }


}

function dateManage(dateArg){
    let days = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
    let months = ["January","February","March","April","May","June","July","August","September","Octuber","November","December"];

    let year = dateArg.getFullYear();
    let month = months[dateArg.getMonth()];
    let date = dateArg.getDate();
    let day =  days[dateArg.getDay()];

    return `${date} ${month} (${day}), ${year}`
}




