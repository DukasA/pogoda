import { Paper, Box, Typography, ButtonGroup, Button } from "@mui/material";
import { styled } from "@mui/system";
import React, { useEffect, useRef, useState } from "react";
import getImagePath from "../../helpers/getImagePath";
import getWeatherDescription from "../../helpers/getWeatherDescription";
import { TimeWeatherCard } from "../TimeWeatherCard";
import styles from "./LeftSide.module.scss";

const MainPaper = styled(Paper)(() => ({
  height: "100%",
  padding: "20px",
  backgroundColor: "rgba(0, 0, 0, 0.8)",
  color: "white",
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

export const Main: React.FC<{ data: IWeatherData | null }> = ({ data }) => {
  const [filteredData, setFilteredData] = useState<
    { time: string; temperature: string; weather: string }[]
  >([]);
  const [selectedDay, setSelectedDay] = useState<string>("Today");
  const [currentWeather, setCurrentWeather] =
    useState<{
      time: string;
      temperature: string;
      weather: string;
    } | null>(null);

  const listContainerRef = useRef<HTMLDivElement | null>(null);

  const currentDate = new Date();

  const filterData = (data: IWeatherData) => {
    let hourlyData = [];
    for (let i = 0; i < data.hourly.time.length; i++) {
      const tmpObj = {
        time: data.hourly.time[i].toString(),
        temperature: data.hourly.temperature_2m[i].toString(),
        weather: data.hourly.weathercode[i].toString(),
      };
      hourlyData.push(tmpObj);
    }
    return hourlyData;
  };

  useEffect(() => {
    if (data) {
      setFilteredData(filterData(data));
    }

    setTimeout(() => {
      const currentHour = new Date().toLocaleTimeString().slice(0, 2);
      const targetElement = listContainerRef.current?.querySelector(
        `[data-time="${currentHour}"]`
      );
      if (targetElement) {
        (targetElement as HTMLDivElement).click();
        targetElement.scrollIntoView({
          behavior: "smooth",
          block: "center",
          inline: "center",
        });
      }
    }, 200);
  }, [data]);

  const options = {
    year: "numeric",
    month: "long",
    day: "numeric",
    hour: "2-digit",
    minute: "2-digit",
  } as const;

  const formattedDate = currentDate.toLocaleDateString("en", options);

  const today = new Date();
  const tomorrow = new Date();
  tomorrow.setDate(tomorrow.getDate() + 1);
  const dayAfterTomorrow = new Date();
  dayAfterTomorrow.setDate(dayAfterTomorrow.getDate() + 2);

  const handleSelectDay = (day: string) => {
    setSelectedDay(day);
  };

  const filteredDay = filteredData.filter((item) => {
    const itemDate = new Date(item.time);
    if (selectedDay === "Today") {
      return itemDate.toDateString() === today.toDateString();
    }
    if (selectedDay === "Tomorrow") {
      return itemDate.toDateString() === tomorrow.toDateString();
    }
    if (selectedDay === "Day after tomorrow") {
      return itemDate.toDateString() === dayAfterTomorrow.toDateString();
    }
    return false;
  });

  const currentDateTime = new Date();
  const currentHour = currentDateTime.getHours();
  const currentFormattedDate = currentDateTime.toISOString().slice(0, 10);

  const filteredItem = filteredData.find(
    (item) =>
      item.time.slice(0, 10) === currentFormattedDate &&
      +item.time.slice(11, 13) === currentHour
  );

  return (
    <MainPaper
      sx={{
        backgroundImage: `url("../images/${getImagePath(
          currentWeather?.weather,
          currentWeather?.time
        )}")`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          flexWrap: "wrap",
          gap: 4,
        }}
      >
        <ButtonGroup className="button-group">
          <Button
            variant="contained"
            color="primary"
            onClick={() => handleSelectDay("Today")}
          >
            Today
          </Button>
          <Button
            variant="contained"
            color="primary"
            onClick={() => handleSelectDay("Tomorrow")}
          >
            Tomorrow
          </Button>
          <Button
            variant="contained"
            color="primary"
            onClick={() => handleSelectDay("Day after tomorrow")}
          >
            Day After Tomorrow
          </Button>
        </ButtonGroup>
        <Box className={styles.box}>
          <Typography className={styles.box__text}>
            Krakow, {formattedDate}
          </Typography>
        </Box>
      </Box>
      <Box className={styles.footer}>
        <Typography className={styles.header} variant="h1">
          {!currentWeather && getWeatherDescription(filteredItem?.weather)}
          {currentWeather && currentWeather?.weather}
        </Typography>
        <Box>
          <Box className={styles.weather_for}>
            Weather for:{" "}
            <Typography className={styles.day}>{selectedDay}</Typography>
          </Box>
          <Box className={styles.list__items} ref={listContainerRef}>
            {filteredDay.map((item) => (
              <TimeWeatherCard
                time={item.time.slice(11, item.time.length)}
                temperature={item.temperature}
                key={item.time}
                weather={getWeatherDescription(item.weather)}
                onClick={(time, temperature, weather) =>
                  setCurrentWeather({ time, temperature, weather })
                }
              />
            ))}
          </Box>
        </Box>
      </Box>
    </MainPaper>
  );
};
