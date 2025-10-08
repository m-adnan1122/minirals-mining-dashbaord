"use client"

import * as React from "react"
import {
  Box,
  Card,
  Typography,
  Stack,
  List,
  ListItemButton,
  ListItemText,
  Divider,
  Paper,
} from "@mui/material"
import {
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts"

const COLORS = {
  gold: "rgba(253, 126, 20, 1)",
  iron: "rgba(255, 0, 230, 1)",
  copper: "rgba(0, 209, 255, 1)",
  zinc: "rgba(255, 229, 0, 1)",
  lead: "rgba(0, 167, 17, 1)",
  aluminum: "rgba(255, 0, 0, 1)",
  grid: "#E6E8F0",
}

const REGIONS = ["North", "South", "East", "West"]

function rng(seed) {
  const x = Math.sin(seed) * 10000
  return x - Math.floor(x)
}

function generateRegionData(region) {
  const regionFactor = {
    North: 1.1,
    South: 0.95,
    East: 0.85,
    West: 0.75,
  }[region]

  const base = {
    gold: 30000,
    iron: 12000,
    copper: 18000,
    zinc: 8000,
    lead: 7000,
    aluminum: 9000,
  }

  const data = []
  for (let i = 1; i <= 24; i++) {
    const t = i / 24
    const trendUp = 1 + 0.35 * t
    const wave = 0.9 + 0.2 * Math.sin(i / 3)

    const point = {
      month: `${i}`,
      gold: Math.round(base.gold * trendUp * wave * regionFactor * (0.95 + rng(i) * 0.1)),
      iron: Math.round(base.iron * (0.9 + 0.2 * Math.cos(i / 4)) * regionFactor * (0.95 + rng(i + 1) * 0.1)),
      copper: Math.round(base.copper * (0.85 + 0.35 * t) * regionFactor * (0.95 + rng(i + 2) * 0.1)),
      zinc: Math.round(base.zinc * (0.8 + 0.25 * wave) * regionFactor * (0.95 + rng(i + 3) * 0.1)),
      lead: Math.round(base.lead * (0.85 + 0.15 * Math.sin(i / 2)) * regionFactor * (0.95 + rng(i + 4) * 0.1)),
      aluminum: Math.round(base.aluminum * (0.9 + 0.2 * Math.cos(i / 5)) * regionFactor * (0.95 + rng(i + 5) * 0.1)),
    }

    data.push(point)
  }
  return data
}

function formatNumber(n) {
  return new Intl.NumberFormat().format(n)
}

export default function GeographicalData() {
  const [region, setRegion] = React.useState("North")
  const data = React.useMemo(() => generateRegionData(region), [region])

  return (
    <Card
      variant="outlined"
      sx={{
        borderRadius: "15px",
        border: "none",
        px: 3,
        py: 2,
        bgcolor: "background.paper",
        width: "984px",
        mb: 7,
        height: "561px",
      }}
      aria-label="Geological Data - Mineral Consumption"
    >
      <Typography
        variant="subtitle2"
        color="text.secondary"
        sx={{ mb: 1 }}
      >
        Geological Data
      </Typography>

      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: { xs: "1fr", md: "1.2fr 1fr" },
          gap: 4,
          alignItems: "start",
        }}
      >
        {/* Left: Stacked Bar Chart */}
        <Box>
          <Typography
            variant="h6"
            sx={{ fontWeight: 400, fontSize: "24px", mb: 1 }}
          >
            Mineral Consumption
          </Typography>

          <Typography
            variant="subtitle2"
            align="center"
            sx={{ mt: 1, mb: 1, fontWeight: 600, fontSize: "18px" }}
            aria-live="polite"
          >
            {region} Region (Nigeria)
          </Typography>

          <Box sx={{ height: "426px", width:"700px", pl: 3 }}>
            <ResponsiveContainer width="100%" height="100%">
              <BarChart
                data={data}
                margin={{ top: 10, right: 16, left: 0, bottom: 8 }}
              >
                <CartesianGrid stroke={COLORS.grid} strokeDasharray="3 3" />
                <XAxis dataKey="month" tick={{ fontSize: 12 }} />
                <YAxis
                  tick={{ fontSize: 12 }}
                  tickFormatter={(v) => formatNumber(v)}
                />
                <Tooltip
                  formatter={(value, name) => [`${formatNumber(value)} mt`, name]}
                  labelFormatter={(l) => `Month ${l}`}
                />
<Legend
  wrapperStyle={{
    fontSize: 12,
    marginTop: 10,     // space above the legend
    marginLeft: 20
  }}
  verticalAlign="bottom"
  align="center"
/>
                <Bar dataKey="gold" name="Gold" stackId="a" fill={COLORS.gold} />
                <Bar dataKey="iron" name="Iron" stackId="a" fill={COLORS.iron} />
                <Bar dataKey="copper" name="Copper" stackId="a" fill={COLORS.copper} />
                <Bar dataKey="zinc" name="Zinc" stackId="a" fill={COLORS.zinc} />
                <Bar dataKey="lead" name="Lead" stackId="a" fill={COLORS.lead} />
                <Bar dataKey="aluminum" name="Aluminum" stackId="a" fill={COLORS.aluminum} />
              </BarChart>
            </ResponsiveContainer>
          </Box>

          <Typography
            variant="caption"
            color="text.secondary"
            sx={{ display: "block", mt: 1, pl: 3 }}
          >
            Unit: metric tons (mt)
          </Typography>
        </Box>

        {/* Right: Region Selector */}
        <Paper
          variant="outlined"
          sx={{
            p: 2,
            mt: 11.5,
            height:"326px",
            borderRadius: 2,
            border: "1px solid rgba(0, 0, 0, 1)",
          }}
        >
          <Typography
            variant="h6"
            sx={{ fontWeight: 500, fontSize: "20px", mb: 1.5 }}
          >
            Region (Nigeria)
          </Typography>

          <List dense aria-label="Select region">
            {REGIONS.map((r) => {
              const selected = r === region
              return (
                <ListItemButton
                  key={r}
                  selected={selected}
                  onClick={() => setRegion(r)}
                  sx={{
                    mb: 2,
                    borderRadius: "6px",
                    fontWeight: 400,
                    textAlign:"center",
                    fontSize: "13px",
                    color: "rgba(79, 79, 79, 1)",
                    height: "43px",
                    bgcolor: "rgba(246, 246, 246, 1)",
                    "&.Mui-selected": {
                      border: "none",
                      bgcolor: "rgba(255, 107, 0, 1)",
                      color: "#fff",
                      "&:hover": {
                        bgcolor: "rgba(230, 96, 0, 1)",
                      },
                    },
                  }}
                  aria-current={selected ? "true" : undefined}
                >
                  <ListItemText primary={`${r} Region`} />
                </ListItemButton>
              )
            })}
          </List>
        </Paper>
      </Box>
    </Card>
  )
}
