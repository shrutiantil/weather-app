const inputBox=document.querySelector(".input-box");
const searchBtn=document.getElementById("searchbtn");
const weather_img=document.querySelector(".weather-img");
const temperature=document.querySelector(".temperature");
const description=document.querySelector(".description");
const humidity=document.getElementById("humidity");
const wind_speed=document.getElementById("wind-speed");


 async function checkWeather(city){
    const api_key="b6ee6b942438047effeb4b790bcd297e";
    const url=`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${api_key}`

  
    const weather_data= await fetch(`${url}`).then(response=>response.json());

    temperature.innerHTML=`${weather_data.main.temp}`;_app
    

}


searchBtn.addEventListener("click",()=>{
    checkWeather(inputBox.value);
})