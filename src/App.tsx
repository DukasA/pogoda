import { Grid, Box } from "@mui/material";
import { styled } from "@mui/system";
import { Main } from "./components/Main/index";
import axios from "axios";
import { useEffect, useState } from "react";

const CustomBox = styled(Box)(() => ({
  height: "100vh",
  backgroundSize: "cover",
  backgroundPosition: "center",
}));

interface IWeatherData {
  elevation: number;
  generationtime_ms: number;
  latitude: number;
  longitude: number;
  timezone: string;
  timezone_abbreviation: string;
  utc_offset_seconds: number;
  hourly: {
    temperature_2m: number[];
    time: string[];
    weathercode: number[];
  };
}

function App() {
  const [weatherData, setWeatherData] = useState<IWeatherData | null>(null);

  const fetchWeather = () => {
    const response = axios.get(
      `https://api.open-meteo.com/v1/forecast?latitude=50.0614&longitude=19.9366&hourly=temperature_2m,weathercode`
    );
    return response;
  };

  useEffect(() => {
    fetchWeather().then((response) => {
      setWeatherData(response.data);
    });
  }, []);

  return (
    <CustomBox>
      <Grid container style={{ height: "100%", overflow: "hidden" }}>
        <Grid item xs={12} style={{ position: "relative" }}>
          {weatherData && <Main data={weatherData} />}
        </Grid>
      </Grid>
    </CustomBox>
  );
}

export default App;
