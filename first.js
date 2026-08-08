const inputBox=document.querySelector(".input-box");

const searchBtn=document.getElementById("searchbtn");

const weather_img=document.querySelector(".weather-img");

const temperature=document.querySelector(".temperature");

const description=document.querySelector(".description");

const humidity=document.getElementById("humidity");

const wind_speed=document.getElementById("wind-speed");

const location_not_found=document.querySelector(".location-not-found");

const weather_body=document.querySelector(".weather-body");


 async function checkWeather(city){
    const api_key="b6ee6b942438047effeb4b790bcd297e";
    const url=`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${api_key}`;

  
    const weather_data= await fetch(`${url}`).then(response=>response.json());


    if(weather_data.cod === `404`){
        location_not_found.computedStyleMap.display="flex";
        weather_body.computedStyleMap.display="none";
        console.log("error");
        return;
    }             
    
    location_not_found.computedStyleMap.display="none";
    weather_body.computedStyleMap.display="flex";


    temperature.innerHTML=`${ Math.round(weather_data.main.temp-273.15)}°C`;

    description.innerHTML=`${weather_data.weather[0].description}`;

    humidity.innerHTML=`${weather_data.main.humidity}%`;

    wind_speed.innerHTML=`${weather_data.wind.speed}km/H`;

    switch(weather_data.weather[0].main){

        case "clouds":
        weather_img.src="https://i.pinimg.com/736x/e0/fe/64/e0fe6486523d09fc1303e8dc79a88727.jpg";

        break;
   
        case"clear":
        weather_img.src="https://i.pinimg.com/1200x/53/22/7e/53227e8b419e2a0ee498e772dad10335.jpg";
 
        break;

        case"rain":
        weather_img.src="https://i.pinimg.com/736x/b4/55/db/b455dba4075355eb3635d09178340843.jpg";

        break;

        case"snow":
        weather_img.src="https://i.pinimg.com/736x/02/19/56/021956d4e8508425a7f784c57fb77e1f.jpg";

        break;

        case"mist":
        weather_img.src="https://i.pinimg.com/736x/3a/ad/ac/3aadaccdff77a6557f126bbb2ebf75e3.jpg";

        break;

    }

    console.log(weather_data);
}


searchBtn.addEventListener("click",()=>{
    checkWeather(inputBox.value);
})