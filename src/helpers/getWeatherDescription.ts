export default function getWeatherDescription(code: any) {
  switch (code) {
    case "0":
      return "Sunny";
    case "1":
      return "Partly Cloudy";
    case "2":
      return "Partly Cloudy with Sunbreaks";
    case "3":
      return "Cloudy";
    case "4":
      return "Rain";
    case "5":
      return "Rain and Snow";
    case "6":
      return "Snow";
    case "7":
      return "Wet Snow";
    case "8":
      return "Freezing Drizzle";
    case "9":
      return "Drizzle";
    case "10":
      return "Freezing Rain";
    case "51":
      return "Light Rain";
    case "53":
      return "Moderate Rain";
    case "45":
      return "Fog";
    case "61":
      return "Light Showers";
    case "62":
      return "Moderate Showers";
    case "63":
      return "Heavy Showers";
    case "64":
      return "Light Freezing Rain";
    case "65":
      return "Moderate Freezing Rain";
    case "66":
      return "Heavy Freezing Rain";
    case "67":
      return "Light Snow Showers";
    case "68":
      return "Moderate Snow Showers";
    case "69":
      return "Heavy Snow Showers";
    case "70":
      return "Light Rain Showers";
    case "71":
      return "Moderate Rain Showers";
    case "72":
      return "Heavy Rain Showers";
    case "73":
      return "Light Freezing Drizzle";
    case "74":
      return "Moderate Freezing Drizzle";
    case "75":
      return "Heavy Freezing Drizzle";
    case "76":
      return "Thunderstorms";
    case "77":
      return "Thunder Showers";
    case "78":
      return "Hail";
    case "79":
      return "Thunderstorms with Hail";
    case "80":
      return "Thunderstorms with Small Hail";
    default:
      return "Unknown";
  }
}
