"use client";
import * as React from "react";
import { RadarChart } from "@mui/x-charts/RadarChart";
import { Box } from "@mui/material";

export default function page() {
  return (
    <Box width={"300px"} height={"300px"}><RadarChart
      height={300}
      series={[
        {
          label: "Risk Profile",
          data: [48, 44, 40, 35, 37, 28], // values
          area: true,
        },
      ]}
      xAxis={[
        {
          data: [
            "Operational Risk",
            "Compliance Risk",
            "Market Risk",
            "Supply Chain Risk",
            "Financial Risk",
            "Geological Risk",
          ],
        },
      ]}
    /></Box>
  );
}
