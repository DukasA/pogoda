import { Box, Typography } from "@mui/material";
import React from "react";
import styles from "./DayWeatherCard.module.scss";

export const DayWeatherCard: React.FC = () => {
  const pathToAnimatedIcons = "../../../icons/animated/snowy-6.svg";
  return (
    <div className={styles.wrapper}>
      <Box className={styles.day__card}>
        <Box className={styles.icon__box}>
          <img className={styles.icon} src={pathToAnimatedIcons} />
        </Box>
        <Box className={styles.text}>
          <Typography className={styles.date}>Friday, April 21</Typography>
          <Typography className={styles.weather}>Partly Cloudy</Typography>
        </Box>
        <Box className={styles.temperatures}>
          <Box className={styles.temperatures__wrapper}>
            <Typography className={styles.temperature}>9°</Typography>
            <Typography className={styles.temperature}>16°</Typography>
          </Box>
        </Box>
      </Box>
    </div>
  );
};
