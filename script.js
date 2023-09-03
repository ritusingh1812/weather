const city=document.querySelector('.city')
const inputBox = document.querySelector('.input-box');
const search = document.getElementById('search');
const weather_img = document.querySelector('.weather-img');
const temperature = document.querySelector('.temperature');
const realfeel = document.querySelector('.feel');
const description = document.querySelector('.description');
const humidity = document.getElementById('humidity');
const wind_speed = document.getElementById('wind-speed');
const location_not_found = document.querySelector('.location-not-found');
const weather_body = document.querySelector('.weather-body');

    const api_key = "aac9ef9e2f208cbc8c8696788127a716";
    const api_url = `https://api.openweathermap.org/data/2.5/weather?q=`;

    async function checkweather(cityname){

        const response=await fetch(api_url +cityname+`&appid=${api_key}`);
        var data=await response.json();
        if(data.cod === `404`){
            location_not_found.style.display = "flex";
            weather_body.style.display="none";
            console.log("error");
            return;
        }
        console.log(data);
        city.innerHTML=data.name;
        temperature.innerHTML=(data.main.temp-273.15).toFixed(2)+ "<sup>°C</sup>";
        humidity.innerHTML=data.main.humidity+"%";
        description.innerHTML=`${data.weather[0].description}`;
        wind_speed.innerHTML=data.wind.speed+"Km/H";
        realfeel.innerHTML="feels like  "+(data.main.feels_like-273.15).toFixed(2)+"<sup>°C</sup>";

        switch(data.weather[0].main){
            case 'Clouds':
                weather_img.src = "images/cloud.png";
                break;
            case 'Clear':
                weather_img.src = "images/clear.png";
                break;
            case 'Rain':
                weather_img.src = "images/rain.png";
                break;
            case 'Mist':
                weather_img.src = "images/mist.png";
                break;
            case 'Snow':
                weather_img.src = "images/snow.png";
                break;
    
        }
    }


    search.addEventListener("click",()=>{
        checkweather(inputBox.value);
    })


   