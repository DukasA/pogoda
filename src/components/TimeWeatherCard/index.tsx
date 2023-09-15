import { Box, createTheme, ThemeProvider } from "@mui/material";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import React from "react";
import getIconPath from "../../helpers/getIconPath";
import styles from "./TimeWeatherCard.module.scss";

interface ICardProps {
  time: string;
  temperature: string;
  weather: string;
  onClick: (time: string, temperature: string, weather: string) => void;
}

const theme = createTheme({
  palette: {
    primary: {
      main: "#2196f3",
    },
    secondary: {
      main: "#ff5722",
    },
  },
});

export const TimeWeatherCard: React.FC<ICardProps> = ({
  time,
  temperature,
  weather,
  onClick,
}) => {
  const pathToAnimatedIcons = `../../../icons/animated/${getIconPath(
    weather,
    time
  )}`;

  const currentHour =
    new Date().toLocaleTimeString().slice(0, 2) === time.slice(0, 2);

  return (
    <ThemeProvider theme={theme}>
      <Card
        className={styles.card}
        onClick={() => onClick(time, temperature, weather)}
        sx={{
          backgroundColor: currentHour ? "#1976d2" : "rgba(22, 33, 35, 0.7)",
          transform: currentHour ? "translateY(-10px)" : "",
          "&:hover": {
            backgroundColor: "#1976d2",
            transition: "all 0.3s ease-in-out",
            transform: "translateY(-10px)",
          },
        }}
        data-time={time.slice(0, 2)}
      >
        <CardContent>
          <Typography className={styles.card__header}>{time}</Typography>
          <Box>
            <img className={styles.card__icon} src={pathToAnimatedIcons} />
          </Box>
          <Box className={styles.card__footer}>
            <Typography className={styles.temperature}>
              {temperature}°C
            </Typography>
            <Typography className={styles.description}>{weather}</Typography>
          </Box>
        </CardContent>
      </Card>
    </ThemeProvider>
  );
};
