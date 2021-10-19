//Searching for a city in Search Bar and getting it to appear in h1//
function cityTemp(response) {
  document.querySelector("#current-city").innerHTML = `📍${response.data.name}`;
  document.querySelector("#location-temperature").innerHTML = Math.round(
    response.data.main.temp
  );
  document.querySelector("#humidity").innerHTML = response.data.main.humidity;
  document.querySelector("#wind").innerHTML = Math.round(
    response.data.wind.speed
  );

  document.querySelector("#weather-description").innerHTML =
    response.data.weather[0].main;

  let iconElement = document.querySelector("#icon");
  iconElement.setAttribute(
    "src",
    `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`
  );
}

function search(event) {
  event.preventDefault();
  let apiKey = "667d9f573c8af4c33457be5d561a9148";
  let city = document.querySelector("#city-input").value;
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=imperial`;

  axios.get(apiUrl).then(cityTemp);
}

let searchForm = document.querySelector("#search-form");
searchForm.addEventListener("submit", search);

//END- Searching for a city in Search Bar and getting it to appear in h1//

//Time element in center of page//
let timeElement = document.querySelector("#time-display");
let timedate = new Date();

function formatDate(date) {
  let hours = date.getHours();
  if (hours < 10) {
    hours = `0${hours}`;
  }
  let minutes = date.getMinutes();
  if (minutes < 10) {
    minutes = `0${minutes}`;
  }
  let dayIndex = date.getDay();
  let days = ["Sun", "Mon", "Tues", "Wed", "Thurs", "Fri", "Sat"];
  let day = days[dayIndex];
  let monthIndex = date.getMonth();
  let months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sept",
    "Oct",
    "Nov",
    "Dec",
  ];
  let month = months[monthIndex];
  let dates = date.getDate();

  return `${hours}:${minutes} ⎪ ${day}, ${month} ${dates}`;
}

timeElement.innerHTML = formatDate(timedate);
//END- Time element in center of page//
