export default function getIconPath(weather: string, time: string) {
  switch (weather) {
    case "Sunny":
      if (time.slice(0, 2) >= "21" || time.slice(0, 2) < "06") {
        return "night.svg";
      } else {
        return "day.svg";
      }
    case "Partly Cloudy":
      if (time.slice(0, 2) >= "21" || time.slice(0, 2) < "06") {
        return "cloudy-night-3.svg";
      } else {
        return "cloudy-day-3.svg";
      }
    case "Partly Cloudy with Sunbreaks":
      if (time.slice(0, 2) >= "21" || time.slice(0, 2) < "06") {
        return "cloudy-night-1.svg";
      } else {
        return "cloudy-day-1.svg";
      }
    case "Cloudy":
      return "cloudy.svg";
    case "Rain":
      return "rainy-4.svg";
    case "Rain and Snow":
      return "snowy-1.svg";
    case "Snow":
      return "snowy-1.svg";
    case "Fog":
      return "foggy.png";
    case "Light Showers":
      return "rainy-4.svg";
    case "Thunderstorms with Small Hail":
      return "thunder.svg";
    default:
      return "Unknown";
  }
}
