import Paper from "@mui/material/Paper";
import InputBase from "@mui/material/InputBase";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import SearchIcon from "@mui/icons-material/Search";
import FmdGoodIcon from "@mui/icons-material/FmdGood";

export const CustomizedInputBase = () => {
  return (
    <Paper
      component="form"
      sx={{
        p: "2px 4px",
        display: "flex",
        alignItems: "center",
        width: 400,
        backgroundColor: "#333",
      }}
    >
      <IconButton type="button" sx={{ p: "10px" }} aria-label="search">
        <FmdGoodIcon />
      </IconButton>
      <InputBase
        sx={{
          ml: 1,
          flex: 1,
          backgroundColor: "transparent",
          color: "#fff",
        }}
        placeholder="Search Google Maps"
        inputProps={{ "aria-label": "search google maps" }}
      />
      <Divider
        sx={{ height: 28, m: 0.5, background: "gray" }}
        orientation="vertical"
      />
      <IconButton type="button" sx={{ p: "10px" }} aria-label="search">
        <SearchIcon />
      </IconButton>
    </Paper>
  );
};
