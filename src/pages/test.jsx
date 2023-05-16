import * as React from "react";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grow from "@mui/material/Grow";

const icon = (
  <Paper sx={{ m: 1 }} elevation={4}>
    <Box component="svg" sx={{ width: 100, height: 100 }}>
      <Box
        component="polygon"
        sx={{
          fill: (theme) => theme.palette.common.white,
          stroke: (theme) => theme.palette.divider,
          strokeWidth: 1,
        }}
        points="0,100 50,00, 100,100"
      />
    </Box>
  </Paper>
);

export default function SimpleGrow() {
  const [checked, setChecked] = React.useState(false);

  const handleChange = () => {
    setChecked((prev) => !prev);
  };

  return (
    <Box
      sx={{
        height: 180,
        marginTop: "500px",
        marginLeft: "500px",
        position: "absolute",
      }}
    >
      <div
        checked={checked}
        onMouseOver={handleChange}
        onMouseLeave={handleChange}
      >Hello</div>
      <Box sx={{ display: "flex" }}>
        <Grow in={checked}>{icon}</Grow>
      </Box>
    </Box>
  );
}
