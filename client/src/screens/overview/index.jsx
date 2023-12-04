import { Box, FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import Header from "components/header";
import OverviewChart from "components/overviewChart";
import React, { useState } from "react";

const Overview = () => {
  const [view, setview] = useState("sales");

  return (
    <Box m="1.5rem 2.5rem">
      <Header
        title={"Overview"}
        subtitle={"overview of general revenue and profit"}
      />
      <Box height={"75vh"}>
        <FormControl sx={{ mt: "1rem" }}>
          <InputLabel>View</InputLabel>
          <Select
            value={view}
            label="view"
            onChange={(e) => setview(e.target.value)}
          >
            <MenuItem value="sales">Sales</MenuItem>
            <MenuItem value="units">Units</MenuItem>
          </Select>
        </FormControl>
        <OverviewChart view={view} />
      </Box>
    </Box>
  );
};

export default Overview;
