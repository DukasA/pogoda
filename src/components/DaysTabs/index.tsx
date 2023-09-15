import React, { useState } from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";

export const DaysTabs: React.FC = () => {
  const [value, setValue] = useState("one");

  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: "100%" }}>
      <Tabs
        value={value}
        onChange={handleChange}
        indicatorColor="primary"
        aria-label="primary tabs example"
      >
        <Tab
          style={{ color: "white", fontSize: "20px" }}
          value="one"
          label="5 days"
        />
        <Tab
          style={{ color: "white", fontSize: "20px" }}
          value="two"
          label="14 days"
        />
        <Tab
          style={{ color: "white", fontSize: "20px" }}
          value="three"
          label="30 days"
        />
      </Tabs>
    </Box>
  );
};
