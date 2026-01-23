const btn = document.getElementById("btn");
const temp = document.getElementById("temp");
const condition = document.getElementById("condition");
const errorMsg = document.getElementById("error");

const latitude = 6.1164;
const longitude = 125.1716;

btn.addEventListener("click", async () => {
  try {
    const res = await fetch(
      `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current_weather=true`,
    );

    if (!res.ok) {
      throw new Error("Failed to fetch weather");
    }

    const data = await res.json();

    const temperature = data.current_weather.temperature;
    const weatherCode = data.current_weather.weathercode;

    temp.textContent = `🌡️ Temperature: ${temperature}°C`;
    condition.textContent = `☁️ Condition: ${getWeatherCondition(weatherCode)}`;
    errorMsg.textContent = "";
  } catch (error) {
    errorMsg.textContent = "Unable to fetch weather data.";
  }
});

// Weather code translator
function getWeatherCondition(code) {
  if (code === 0) return "Clear sky";
  if (code <= 3) return "Cloudy";
  if (code <= 48) return "Fog";
  if (code <= 67) return "Rain";
  if (code <= 77) return "Snow";
  if (code <= 99) return "Thunderstorm";
  return "Unknown";
}
