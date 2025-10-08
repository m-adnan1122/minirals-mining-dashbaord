"use client"

import * as React from "react"
import { Box, Card, Typography, Stack, Divider, ToggleButton, ToggleButtonGroup, Chip } from "@mui/material"
import {
  ResponsiveContainer,
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  PieChart,
  Pie,
  Cell,
} from "recharts"

const COLORS = {
  cobalt: "rgba(0, 167, 17, 1)", // green
  nickel: "rgba(0, 134, 255, 1)", // blue
  lithium: "rgba(255, 107, 0, 1)", // orange
  copper: "rgba(255, 107, 0, 1)", // deep orange
  grid: "#E6E8F0",
}

const monthlyData = [
  { month: "1", cobalt: 15000, nickel: 14200, lithium: 15500, copper: 16000 },
  { month: "2", cobalt: 15600, nickel: 14800, lithium: 15000, copper: 16150 },
  { month: "3", cobalt: 16200, nickel: 15200, lithium: 14500, copper: 16300 },
  { month: "4", cobalt: 16800, nickel: 15450, lithium: 14000, copper: 16550 },
  { month: "5", cobalt: 17500, nickel: 16000, lithium: 13600, copper: 16700 },
  { month: "6", cobalt: 18200, nickel: 15700, lithium: 13200, copper: 16850 },
  { month: "7", cobalt: 18900, nickel: 14900, lithium: 12800, copper: 17000 },
  { month: "8", cobalt: 19500, nickel: 16500, lithium: 12500, copper: 17150 },
  { month: "9", cobalt: 20500, nickel: 18000, lithium: 12000, copper: 17300 },
  { month: "10", cobalt: 20800, nickel: 17500, lithium: 11900, copper: 17500 },
  { month: "11", cobalt: 22000, nickel: 18500, lithium: 12100, copper: 19000 },
  { month: "12", cobalt: 22500, nickel: 19500, lithium: 12500, copper: 19500 },
]

// Product-in-demand donut data: emphasize Copper at 65%
const demandData = [
  { name: "Cobalt", key: "cobalt", value: 20, color: COLORS.cobalt },
  { name: "Nickel", key: "nickel", value: 15, color: COLORS.nickel },
  { name: "Copper", key: "copper", value: 65, color: COLORS.copper },
]

function formatNumber(n) {
  return new Intl.NumberFormat().format(n)
}

export default function OperationalAnalysis() {
  const [series, setSeries] = React.useState("All")

  const handleChange = (_e, next) => {
    if (next !== null) setSeries(next)
  }

  // Lines to render: show 3 series on "All" to mirror the reference; single series when filtered
  const linesToShow = series === "All" ? ["cobalt", "nickel", "lithium"] : [series.toLowerCase()]

  const seriesConfig = {
    cobalt: { color: COLORS.cobalt, label: "Cobalt" },
    nickel: { color: COLORS.nickel, label: "Nickel" },
    lithium: { color: COLORS.lithium, label: "Lithium" },
    copper: { color: COLORS.copper, label: "Copper" },
  }

  const centerSlice = demandData.find((d) => d.key === "copper") // 65% Copper

  return (
    <Card
      variant="outlined"
      sx={{
        borderRadius: "15px",
        border: "none",
        px: 3,
        py: 2,
        width: "984px",
        mb: 7,
        height: "440px",
        bgcolor: "background.paper",
      }}
      aria-label="Operational Data"
    >
      <Typography variant="subtitle2" color="text.secondary" sx={{ mb: 1 }}>
        Operational Data
      </Typography>

      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: { xs: "1fr", md: "1.2fr 1fr" },
          gap: 7,
          alignItems: "start",
        }}
      >
        {/* Left: Production Rates Line Chart */}

        <Box>
          <Stack  sx={{ mb: 1 }}>
             <Typography variant="h6" sx={{fontWeight: 400, fontSize: "24px"}}>Production Rates Chart</Typography>

         <ToggleButtonGroup
  sx={{
    color: "rgba(255, 107, 0, 1)",
        pl: 4,
        pt: 2,
        pb: 2,  
    "& .MuiToggleButton-root": {
      // removes default border
      marginRight: "8px",            // spacing between buttons
      borderRadius: 0,           // optional: round corners
      textTransform: "none",
      border: "1px solid rgba(79, 79, 79, 1)",
      fontWeight: 400,
      fontSize: "13px",
      color:" rgba(79, 79, 79, 1)",
            // keeps text normal case
    },
    "& .MuiToggleButton-root.Mui-selected": {
      border: "none",                
      backgroundColor: "rgba(255, 107, 0, 1)", // selected bg color
      color: "#fff",                           // selected text color
      "&:hover": {
        backgroundColor: "rgba(230, 96, 0, 1)", // hover color
      },
    },
  }}
  size="small"
  exclusive
  value={series}
  onChange={handleChange}
  aria-label="Filter material series"
>
  <ToggleButton value="All" sx={{width: "71px", height:"31px"}}>All</ToggleButton>
  <ToggleButton value="Cobalt" sx={{width: "71px", height:"31px"}}>Cobalt</ToggleButton>
  <ToggleButton value="Nickel" sx={{width: "71px", height:"31px"}}>Nickel</ToggleButton>
  <ToggleButton value="Lithium" sx={{width: "71px", height:"31px"}}>Lithium</ToggleButton>
  <ToggleButton value="Copper" sx={{width: "71px", height:"31px"}}>Copper</ToggleButton>
</ToggleButtonGroup>

          </Stack>

          <Box sx={{ height: 260, pl:3 }}>
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={monthlyData} margin={{ top: 8, right: 16, left: 0, bottom: 8 }}>
                <CartesianGrid stroke={COLORS.grid} strokeDasharray="3 3" />
                <XAxis
                  dataKey="month"
                  tick={{ fontSize: 12 }}
                  label={{ value: "Months", position: "insideBottom", dy: 12 }}
                />
                <YAxis
                  tick={{ fontSize: 12 }}
                  tickFormatter={(v) => formatNumber(v)}
                  label={{ value: "Tons", angle: -90, position: "insideLeft", dx: 1,  }}
                />
                <Tooltip formatter={(value, name) => [formatNumber(value), seriesConfig[name]?.label || name]} />
                {/* <Legend formatter={(val) => seriesConfig[val]?.label || val} wrapperStyle={{ fontSize: 12 }} /> */}
              
                {linesToShow.map((key) => (
                  <Line
                    key={key}
                    type="monotone"
                    dataKey={key}
                    stroke={seriesConfig[key].color}
                    strokeWidth={3}
                    dot={false}
                    isAnimationActive={false}
                  />
                ))}
              </LineChart>
            </ResponsiveContainer>
          </Box>
                 </Box>

        {/* Right: Product In Demand Donut */}
        <Box>
          <Typography variant="h6" sx={{fontWeight: 400, fontSize: "22px"}}>Product In Demand</Typography>
          <Typography variant="caption" color="text.secondary">
            Lorem ipsum
          </Typography>

          <Box
            sx={{
              mt: 1.5,
              display: "flex",
              gap: 5,

            }}
          >
            <Box sx={{ position: "relative", height: 220, width: "229px", pt: 4 }}>
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={demandData}
                    dataKey="value"
                    nameKey="name"
                    innerRadius={60}
                    outerRadius={90}
                    paddingAngle={3}
                    cornerRadius={6}
                    isAnimationActive={false}
                  >
                    {demandData.map((entry, i) => (
                      <Cell key={entry.key} fill={entry.color} />
                    ))}
                  </Pie>
                </PieChart>
              </ResponsiveContainer>

              {/* Center label */}
              <Box
                aria-hidden
                sx={{
                  position: "absolute",
                  inset: 0,
                  display: "grid",
                  top: 20,
                  placeItems: "center",
                  pointerEvents: "none",
                }}
              >
                <Box sx={{ textAlign: "center" }}>
                  <Typography variant="h5" fontWeight={800}>
                    {centerSlice.value}%
                  </Typography>
                  <Typography variant="caption" color="text.secondary">
                    {centerSlice.name}
                  </Typography>
                </Box>
              </Box>
            </Box>

            {/* Legend */}
            <Stack spacing={1} aria-label="Material legend">
              {demandData.map((d) => (
                <Stack key={d.key} direction="row" spacing={1} alignItems="center">
                  <Box sx={{ width: 12, height: 12, bgcolor: d.color, borderRadius: 0.5 }} />
                  <Typography variant="body2" sx={{ mr: "auto" }}>
                    {d.name}
                  </Typography>
                  <Typography variant="caption" color="text.secondary">
                    {d.value}%
                  </Typography>
                </Stack>
              ))}
            </Stack>
          </Box>
        </Box>
      </Box>
    </Card>
  )
}
