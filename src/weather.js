const API_KEY = 'YOUR_OPENWEATHERMAP_KEY'; // Get one: https://openweathermap.org/api

export async function fetchWeather(lat, lon) {
  const response = await fetch(
    `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`
  );
  return await response.json();
}

export function displayWeather(data) {
  return `
    <p>🌡️ ${data.main.temp}°C (Feels like ${data.main.feels_like}°C)</p>
    <p>${data.weather[0].description} <img src="icons/${data.weather[0].icon}.png" alt=""></p>
    <p>💨 Wind: ${data.wind.speed} m/s</p>
  `;
}
