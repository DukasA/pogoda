export default function getImagePath(weather: any, time: any) {
  switch (weather) {
    case "Sunny":
      if (time.slice(0, 2) >= "21" || time.slice(0, 2) < "06") {
        return "night-sunny.jpg";
      } else {
        return "sunny.webp";
      }
    case "Partly Cloudy":
      if (time.slice(0, 2) >= "21" || time.slice(0, 2) < "06") {
        return "partly-cloudy-night.jpg";
      } else {
        return "partly-cloudy-day.jpg";
      }
    case "Partly Cloudy with Sunbreaks":
      if (time.slice(0, 2) >= "21" || time.slice(0, 2) < "06") {
        return "prtlu-cloudy-night-sun.jpg";
      } else {
        return "prtlycloudy-withsun.jpg";
      }
    case "Cloudy":
      return "cloudy.webp";
    case "Rain":
      return "rain.jpg";
    case "Rain and Snow":
      return "snowy-1.svg";
    case "Snow":
      return "snowy-1.svg";
    case "Fog":
      return "fog.jpg";
    case "Light Showers":
      return "rain.jpg";
    case "Thunderstorms with Small Hail":
      return "thunderstorms.jpg";
    default:
      return "Unknown";
  }
}
