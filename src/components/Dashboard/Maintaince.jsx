"use client"

import * as React from "react"
import { Box, Typography, Chip, Stack } from "@mui/material"
import {
  addDays,
  startOfMonth,
  endOfMonth,
  startOfWeek,
  endOfWeek,
  isSameMonth,
  format,
  getISOWeek,
} from "date-fns"

const COLORS = {
  blue: "#1E90FF",
  amber: "rgba(255, 176, 64, 1)",
  red: "rgba(255, 101, 93, 1)",
  coral: "#FF7D6E",
  grayText: "rgba(179, 179, 179, 1)",
  grayMuted: "rgba(0,0,0,0.28)",
  cardBg: "#ffffff",
}

const dayLabels = ["Mo", "Tu", "We", "Th", "Fr", "Sa", "Su"]

const jan2024Highlights = {
  "2024-01-08": "active",
  "2024-01-23": "planned",
  "2024-01-24": "planned",
  "2024-01-26": "planned",
  "2024-01-29": "critical",
}

function fmtKey(date) {
  return format(date, "yyyy-MM-dd")
}

export function MaintenanceCalendarMUI({ year, month }) {
  const monthDate = new Date(year, month, 1)
  const monthStart = startOfMonth(monthDate)
  const monthEnd = endOfMonth(monthDate)

  const gridStart = startOfWeek(monthStart, { weekStartsOn: 1 })
  const gridEnd = endOfWeek(monthEnd, { weekStartsOn: 1 })

  const days = []
  for (let d = gridStart; d <= gridEnd; d = addDays(d, 1)) {
    days.push(d)
  }

  const weeks = []
  for (let i = 0; i < days.length; i += 7) {
    weeks.push(days.slice(i, i + 7))
  }

  return (
    <Box
      sx={{
        borderRadius: 3,
        backgroundColor: COLORS.cardBg,
        p: { xs: 2.5, sm: 2 },
        boxShadow: "0 2px 16px rgba(0,0,0,0.06)",
          width: "300px",
          height: "381px",
        fontSize: "9px",     // 👈 force all text to 10px
        fontWeight: 400,      // 👈 force all text to 400
        lineHeight: 1.2,
        pb:2,
      }}
    >
   <Typography variant="caption" color="text.secondary">
                       Operational Data
                     </Typography>
      <Stack spacing={0.5} sx={{ mb: 1  }} >
        <Typography sx={{ mb: 2,fontWeight: 400, fontSize:"24px"  }}>{"Maintenance Schedule"}</Typography>
        <Typography sx={{ mb: 2,fontWeight: 400, fontSize:"24px"  }}>{"Calendar"}</Typography>
      </Stack> 

      <Typography align="center" sx={{ mb: 1, fontWeight: 700, fontSize:"20px" }}>
        {format(monthDate, "LLLL yyyy")}
      </Typography>

      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: "auto repeat(7, 1fr)",
          alignItems: "center",
          rowGap: 1,
        }}
      >
        <Box />
        {dayLabels.map((label, idx) => {
          const isWeekend = idx >= 5
          return (
            <Typography
              key={label}
              align="center"
              sx={{
                color: isWeekend ? "rgba(23, 161, 250, 1)" : COLORS.grayText,
              }}
            >
              {label}
            </Typography>
          )
        })}

        {weeks.map((week, wi) => {
          const iso = getISOWeek(week[0])
          return (
            <React.Fragment key={`w-${wi}`}>
              <Box sx={{ display: "flex", justifyContent: "center" }}>
                <Chip
                  label={String(iso % 100)}
                  sx={{
                    height: 22,
                    minWidth: 30,
                    px: 1,
                    borderRadius: 1.5,
                    bgcolor: COLORS.amber,
                    color: "#1a1a1a",
                    fontWeight: 400,
                    fontSize: "10px",
                  }}
                />
              </Box>

              {week.map((day) => {
                const inMonth = isSameMonth(day, monthDate)
                const key = fmtKey(day)
                const hl = jan2024Highlights[key]
                const label = format(day, "d")

                let circleBg
                let circleColor
                if (hl === "active") {
                  circleBg = COLORS.blue
                  circleColor = "#fff"
                } else if (hl === "planned") {
                  circleBg = COLORS.coral
                  circleColor = "#fff"
                } else if (hl === "critical") {
                  circleBg = COLORS.red
                  circleColor = "#fff"
                }

                return (
                  <Box
                    key={key}
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      height: 30,
                    }}
                  >
                    {circleBg ? (
                      <Box
                        sx={{
                          height: 22,
                          minWidth: 22,
                          px: 0.25,
                          borderRadius: 2,
                          bgcolor: circleBg,
                          color: circleColor,
                          display: "inline-flex",
                          alignItems: "center",
                          justifyContent: "center",
                          fontWeight: 400,
                          fontSize: "10px",
                        }}
                      >
                        {label}
                      </Box>
                    ) : (
                      <Typography
                        sx={{
                          color: inMonth ? COLORS.grayText : COLORS.grayMuted,
                        }}
                      >
                        {label}
                      </Typography>
                    )}
                  </Box>
                )
              })}
            </React.Fragment>
          )
        })}
      </Box>
    </Box>
  )
}

export default function MaintenanceCalendarCard() {
  return <MaintenanceCalendarMUI year={2024} month={0} />
}
