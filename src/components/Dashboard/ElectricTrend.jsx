"use client"
import {
  Box,
  Paper,
  Grid,
  Typography,
  Divider,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  TableContainer,
  Chip,
  Stack,
} from "@mui/material"
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  ReferenceDot,
} from "recharts"

const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
]

// Example values that mirror the visual trend in the reference image
const series1 = [10000, 9500, 11000, 12000, 12500, 13000, 14500, 14000, 15000, 15750, 15600, 16250]
const series2 = [3000, 3200, 4500, 3800, 4200, 6800, 5200, 4300, 5000, 6200, 7000, 6000]
const series3 = [12000, 14000, 7000, 6500, 10000, 15500, 6000, 4000, 2000, 2000, 3000, 1000]

// Build table + chart dataset
const data = months.map((month, i) => ({
  month,
  data1: series1[i],
  data2: series2[i],
  data3: series3[i],
}))

// Simple kWh formatter
const formatKwh = (v) => `${v.toLocaleString()} kWh`

export default function ElectricTrend() {
  return (
    <Paper
      elevation={0}
      sx={{
        p: 2,
        borderRadius: "15px",
        bgcolor: "background.paper",
        width: "1300px",
        height: "567px",
        mb: 9,
        ml:3,
        mt: 2,
      }}
      aria-label="Electric Energy Consumption Trends"
    >
      <Box sx={{ px: 1, py: 0.5 }}>
        <Typography variant="caption" color="text.secondary">
          Operational Data
        </Typography>
        <Typography variant="subtitle1" sx={{fontWeight: 400, fontSize:"24px"}}>
          Electric Energy Consumption Trends
        </Typography>
      </Box>


      <Grid container spacing={2}>
        {/* Chart */}
        <Grid item xs={12} md={8}>
          <Box sx={{ height: "430px", width:"800px", px: 1, border:"none", pt:2 }}>
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={data} margin={{ top: 10, right: 20, left: 0, bottom: 10 }}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="month" tick={{ fontSize: 11 }} />
                <YAxis
                  tick={{ fontSize: 11 }}
                  tickFormatter={(v) => v.toLocaleString()}
                  label={{ value: "kWh", angle: -90, position: "insideLeft", offset: -5, style: { fontSize: 11 } }}
                  domain={[0, "dataMax + 2000"]}
                />
                <Tooltip
                  formatter={(value) => [formatKwh(value), ""]}
                  labelFormatter={(label) => `Month: ${label}`}
                />
                <Stack alignContent={"flex-end"}>
                    <Legend
                  verticalAlign="top"
                  align="center"
                  wrapperStyle={{ paddingBottom: 8 }}
                  payload={[
                    { value: "Data 1", id: "data1", type: "line", color: "#1E88E5", },
                    { value: "Data 2", id: "data2", type: "line", color: "#FB8C00" },
                    { value: "Data 3", id: "data3", type: "line", color: "#43A047" },
                  ]}
                />
                </Stack>
                <Line
                  type="monotone"
                  dataKey="data1"
                  name="Data 1"
                  stroke="#1E88E5"
                  strokeWidth={2}
                  dot={false}
                  activeDot={{ r: 4 }}
                />
                <Line
                  type="monotone"
                  dataKey="data2"
                  name="Data 2"
                  stroke="#FB8C00"
                  strokeWidth={2}
                  dot={false}
                  activeDot={{ r: 4 }}
                />
                <Line
                  type="monotone"
                  dataKey="data3"
                  name="Data 3"
                  stroke="#43A047"
                  strokeWidth={2}
                  dot={false}
                  activeDot={{ r: 4 }}
                />

                {/* Highlight June on Data 1 */}
                <ReferenceDot
                  x="June"
                  y={series1[5]}
                  r={5}
                  fill="#1E88E5"
                  stroke="#fff"
                  strokeWidth={1.5}
                  label={{
                    value: `June ${series1[5].toLocaleString()} kWh`,
                    position: "top",
                    fill: "#6b7280",
                    fontSize: 11,
                  }}
                />
              </LineChart>
            </ResponsiveContainer>
          </Box>

          <Typography variant="caption" color="rgba(255, 12, 0, 1)" display="block" textAlign="center" sx={{ mt: 1,fontWeight: 500, fontSize:"16px" }}>
            Energy Consumption Trends (2023)
          </Typography>
        </Grid>

        {/* Table */}
        <Grid item xs={12} md={4}>
          <Stack direction="row" alignItems="center" justifyContent="space-between" sx={{ mb: 1 }}>
            <Typography variant="subtitle2" fontWeight={600} fontSize={"20px"} position={"relative"} left={25} >
              ENERGY CONSUMPTION TREND 2023
            </Typography>
          </Stack>

         <TableContainer component={Paper} variant="outlined">
  <Table
    size="small"
    aria-label="Energy consumption by month"
    sx={{
      borderCollapse: "collapse",
      "& td, & th": {
        border: "1px solid rgba(224, 224, 224, 1)", // grid lines
        padding: "5px 29px", // 👈 natural spacing inside cells
      },
    }}
  >
    <TableHead>
      <TableRow>
        <TableCell
          sx={{
            fontWeight: 600,
            fontSize: "14px",
            bgcolor: "#FF3B30", // red
            color: "#fff",
          }}
        >
          Position
        </TableCell>
        <TableCell
          align="center"
          sx={{
            fontWeight: 600,
            fontSize: "14px",
            bgcolor: "#1E88E5", // blue
            color: "#fff",
          }}
        >
          Data 1
        </TableCell>
        <TableCell
          align="center"
          sx={{
            fontWeight: 600,
            fontSize: "14px",
            bgcolor: "#FB8C00", // orange
            color: "#fff",
          }}
        >
          Data 2
        </TableCell>
        <TableCell
          align="center"
          sx={{
            fontWeight: 600,
            fontSize: "14px",
            bgcolor: "#43A047", // green
            color: "#fff",
          }}
        >
          Data 3
        </TableCell>
      </TableRow>
    </TableHead>

    <TableBody>
      {data.map((row) => (
        <TableRow key={row.month}>
          <TableCell sx={{ fontWeight: 400, fontSize: "12px" }}>
            {row.month}
          </TableCell>
          <TableCell align="center" sx={{ fontWeight: 400, fontSize: "12px" }}>
            {row.data1.toLocaleString()}
          </TableCell>
          <TableCell align="center" sx={{ fontWeight: 400, fontSize: "12px" }}>
            {row.data2.toLocaleString()}
          </TableCell>
          <TableCell align="center" sx={{ fontWeight: 400, fontSize: "12px" }}>
            {row.data3.toLocaleString()}
          </TableCell>
        </TableRow>
      ))}
    </TableBody>
  </Table>
</TableContainer>

        </Grid>
      </Grid>
    </Paper>
  )
}
