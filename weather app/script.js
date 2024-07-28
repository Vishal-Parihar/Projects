const apiKey = "5d855bd846a7c2773adb8a8746f8b6ad";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");
const weatherIcon = document.querySelector(".weather-icon")

async function checkWeather(city) {
  const response = await fetch(apiUrl + city + `&appid=${apiKey}`);

  //check for city name whether its correct or not
  if(response.status ==404){
    document.querySelector(".error").style.display ="block";
    document.querySelector(".weather").style.display ="none";
  }
  else{
    const data = await response.json();


  //changing city name, itemp, wind, humidity acc to the data coming from api
  document.querySelector(".city").innerHTML = data.name;
  document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°C";
  document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
  document.querySelector(".wind").innerHTML = data.wind.speed + " km/h";

  //changing weather icon according to the data
  if (data.weather[0].main =="Clouds") {
    weatherIcon.src ="images/clouds.png";
  }
  else if (data.weather[0].main =="Clear") {
    weatherIcon.src ="images/clear.png";
  }
  else if (data.weather[0].main =="Rain") {
    weatherIcon.src ="images/rain.png";
  }
  else if (data.weather[0].main =="Drizzle") {
    weatherIcon.src ="images/drizzle.png";
  }
  else if (data.weather[0].main =="Mist") {
    weatherIcon.src ="images/mist.png";
  }
// hiding default data from user and showing data only when the user enters city name

 document.querySelector(".weather").style.display = "block"
  }
  
} 

searchBtn.addEventListener("click", ()=>{
    checkWeather(searchBox.value);
})