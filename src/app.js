import { fetchWeather, displayWeather } from './weather.js';
import { getMoonPhase, getStargazingScore } from './astronomy.js';

navigator.geolocation.getCurrentPosition(async (pos) => {
  const { latitude: lat, longitude: lon } = pos.coords;
  const weather = await fetchWeather(lat, lon);
  
  // Update UI
  document.getElementById('location').textContent = `${weather.name}, ${weather.sys.country}`;
  document.getElementById('weather').innerHTML = displayWeather(weather);
  
  // Astronomy section
  document.getElementById('astronomy').innerHTML = `
    <p>${getMoonPhase()}</p>
    <p>☀️ Sunrise: ${new Date(weather.sys.sunrise * 1000).toLocaleTimeString()}</p>
    <p>🌇 Sunset: ${new Date(weather.sys.sunset * 1000).toLocaleTimeString()}</p>
    <p>🔭 Stargazing: ${getStargazingScore(weather)}</p>
  `;
  
  // Dynamic background (day/night)
  const isDay = (Date.now() / 1000 > weather.sys.sunrise && Date.now() / 1000 < weather.sys.sunset);
  document.body.style.background = isDay ? 'linear-gradient(to right, #74ebd5, #ACB6E5)' : 'linear-gradient(to right, #0f2027, #203a43)';
}, (err) => {
  console.error("Geolocation error:", err);
  document.getElementById('location').textContent = "Enable location to use AstroWeather";
});
