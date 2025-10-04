"use client"
import React from "react"
import { Box, Card, CardContent, CardHeader, Grid, Stack, Typography, useTheme, alpha } from "@mui/material"
import {
  ResponsiveContainer,
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip as ReTooltip,
  BarChart,
  Bar,
  Legend,
} from "recharts"
import Maintaince from "./Maintaince"
import MaintenanceCalendarCard from "./Maintaince"

// Production line chart data (Tons across 12 months)
const productionData = [
  { month: "1", tons: 1500 },
  { month: "2", tons: 1800 },
  { month: "3", tons: 18650 },
  { month: "4", tons: 19200 },
  { month: "5", tons: 19750 },
  { month: "6", tons: 20000 },
  { month: "7", tons: 20450 },
  { month: "8", tons: 20750 },
  { month: "9", tons: 20900 },
  { month: "10", tons: 21050 },
  { month: "11", tons: 22000 },
  { month: "12", tons: 22150 },
]

// Stacked bar chart data
const utilizationData = [
  { label: "0/5", ops: 260000, available: 110000, downtime: 30000 },
  { label: "0/6", ops: 210000, available: 120000, downtime: 45000 },
  { label: "0/7", ops: 100000, available: 30000, downtime: 25000 },
]

// Simple calendar events mapping
const calendarEvents = {
  4: ["success"],
  6: ["warning"],
  9: ["success"],
  12: ["error"],
  15: ["success"],
  18: ["warning"],
  22: ["error"],
  23: ["warning", "success"],
  26: ["error"],
  28: ["success"],
}

// Generate January 2024 cells
function getJanuary2024Cells() {
  const daysInMonth = 31
  const startOffset = 0
  const cells = []
  for (let i = 0; i < startOffset; i++) cells.push(null)
  for (let d = 1; d <= daysInMonth; d++) cells.push(d)
  while (cells.length < 42) cells.push(null)
  return cells
}

function LegendDot({ color, label }) {
  return (
    <Stack direction="row" alignItems="center" spacing={1}>
      <Box sx={{ width: 18, height: 18, bgcolor: color, borderRadius: 0.75 }} />
      <Typography variant="body2" color="text.secondary">
        {label}
      </Typography>
    </Stack>
  )
}

function EventDots({ colors }) {
  return (
    <Stack direction="row" spacing={0.5} sx={{ mt: 0.5, flexWrap: "wrap" }}>
      {colors.map((c, i) => (
        <Box
          key={i}
          sx={{
            width: 8,
            height: 8,
            bgcolor: c,
            borderRadius: "50%",
          }}
        />
      ))}
    </Stack>
  )
}

// Main component
export default function OperationalData() {
  const theme = useTheme()

  const orange = theme.palette.warning.main
  const green = theme.palette.success.main
  const red = theme.palette.error.main
  const paper = theme.palette.background.paper
  const panel = theme.palette.grey[50]

  const eventColor = (k) => (k === "warning" ? orange : k === "success" ? green : red)

  return (
    <Box sx={{ p: { xs: 2, md: 3 }, bgcolor: panel }}>
      <Typography variant="h6" sx={{ mb: 2, fontWeight: 600, fontSize: "24px" }}>
        Operational Data
      </Typography>

      <Grid container spacing={1}>
        {/* Production Rates Chart */}
        <Grid item xs={12} md={4}>
          <Card
            elevation={0}
            sx={{ bgcolor: paper, borderRadius:"15px", width:"514px", height: "381px" }}
          >
            <CardHeader
              title={
                <Stack >
                  <Typography variant="caption" color="text.secondary">
                    Operational Data
                  </Typography>
                  <Typography variant="subtitle1" sx={{  fontWeight: 400, fontSize: "24px" }}>
                    Production Rates Chart
                  </Typography>
                </Stack>
              }
              sx={{ pb: 0 }}
            />
            <CardContent sx={{ height: "300px" }}>
              <Box sx={{ width: "100%", height: "100%" }}>
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart data={productionData} margin={{ top: 10, right: 10, bottom: 10, left: 0 }}>
                    <CartesianGrid strokeDasharray="3 3" stroke={alpha(theme.palette.text.primary, 0.15)} />
                    <XAxis
                      dataKey="month"
                      tickLine={false}
                      axisLine={{ stroke: alpha("rgba(253, 126, 20, 1)", 0.2) }}
                    />
                    <YAxis
                      tickLine={false}
                      axisLine={{ stroke: alpha("rgba(253, 126, 20, 1)", 0.2) }}
                      tickFormatter={(v) => `${Math.round(v / 1000)}k`}
                    />
                    <ReTooltip
                      contentStyle={{ borderRadius: 8, borderColor: alpha(theme.palette.divider, 0.6) }}
                      formatter={(v) => [`${v.toLocaleString()} t`, "Tons"]}
                      labelFormatter={(l) => `Month ${l}`}
                    />
                    <Line type="monotone" dataKey="tons" stroke={orange} strokeWidth={2} dot={false} activeDot={{ r: 4 }} />
                  </LineChart>
                </ResponsiveContainer>
              </Box>
             
            </CardContent>
          </Card>
        </Grid>

        {/* Equipment Utilization Graph */}
        <Grid item xs={12} md={4}>
          <Card
            elevation={0}
            sx={{ bgcolor: paper, borderRadius: "15px", width:"470px", height: "381px"  }}
          >
            <CardHeader
              title={
                <Stack >
                  <Typography variant="caption" color="text.secondary">
                    Operational Data
                  </Typography>
                  <Typography variant="subtitle1" sx={{ fontWeight: 400, fontSize: "24px" }}>
                    Equipment Utilization Graph
                  </Typography>
                </Stack>
              }
              sx={{ pb: 0 }}
            />
            <CardContent sx={{ height: "320px" }}>
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={utilizationData} margin={{ top: 10, right: 8, left: 0, bottom: 0 }}>
                  <CartesianGrid strokeDasharray="3 3" stroke={alpha("rgba(255, 114, 107, 1)", 0.15)} />
                  <XAxis dataKey="label" tickLine={false} axisLine={{ stroke: alpha("rgba(106, 211, 73, 1)", 0.2) }} />
                  <YAxis tickLine={false} axisLine={{ stroke: alpha("rgba(255, 176, 64, 1)", 0.2) }} />
                  <ReTooltip
                    contentStyle={{ borderRadius: 8, borderColor: alpha(theme.palette.divider, 0.6) }}
                    formatter={(v, n) => [`${v.toLocaleString()}`, n]}
                  />
                  {/* <Legend /> */}
                  <Bar dataKey="ops" stackId="a" name="Ops" fill={orange} radius={[4, 4, 0, 0]} />
                  <Bar dataKey="available" stackId="a" name="Available" fill={green} />
                  <Bar dataKey="downtime" stackId="a" name="Downtime" fill={red} />
                </BarChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>
        </Grid>

        {/* Maintenance Schedule Calendar */}
        <Grid item xs={12} md={4}>
          <MaintenanceCalendarCard />
        </Grid>
      </Grid>
    </Box>
  )
}
