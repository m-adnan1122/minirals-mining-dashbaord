"use client";

import * as React from "react";
import {
  Box,
  Card,
  CardContent,
  CardHeader,
  Typography,
  Grid,
  Button,
  IconButton,
  Stack,
  Divider,
  Chip,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
  CssBaseline,
  ThemeProvider,
  createTheme,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
} from "@mui/material";
import WarningAmberRoundedIcon from "@mui/icons-material/WarningAmberRounded";
import CloseRoundedIcon from "@mui/icons-material/CloseRounded";

// ✅ Import Recharts normally
import {
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  Radar,
  ResponsiveContainer,
  Tooltip,
} from "recharts";

// --- Theme ---
const theme = createTheme({
  palette: {
    mode: "light",
    primary: { main: "#1e88e5" },
    warning: { main: "#fb8c00" },
    background: { default: "#fafafa" },
  },
  shape: { borderRadius: 10 },
  typography: {
    h5: { fontWeight: 700 },
    h6: { fontWeight: 600 },
    fontFamily: "'Outfit', sans-serif",

  },
});

// --- Sample data ---
const alerts = [
  {
    id: "a1",
    title: "Critical System Overload Detected!",
    recommendation: "Reschedule Power Demand Schedule for better efficiency.",
    cta: "Take Action",
  },
  {
    id: "a2",
    title: "Equipment Maintenance Overdue!",
    recommendation: "Recommend immediate maintenance for critical equipment.",
    cta: "Take Action",
  },
  {
    id: "a3",
    title: "Unusual Energy Consumption Spike",
    recommendation: "Recommend audit and adjust energy consumption settings.",
    cta: "Take Action",
  },
];

const radarData = [
  { category: "Operational Risk", value: 48 },
  { category: "Compliance Risk", value: 44 },
  { category: "Market Risk", value: 40 },
  { category: "Supply Chain Risk", value: 35 },
  { category: "Financial Risk", value: 37 },
  { category: "Geological Risk", value: 28 },
];

const riskTable = [
  { position: "Geological Risk", impact: 28 },
  { position: "Operational Risk", impact: 48 },
  { position: "Compliance Risk", impact: 44 },
  { position: "Market Risk", impact: 40 },
  { position: "Supply Chain Risk", impact: 35 },
  { position: "Financial Risk", impact: 37 },
];

const riskSummary = [
  { label: "High", total: 12, color: "rgba(255, 114, 107, 1)" },
  { label: "Medium", total: 18, color: "rgba(255, 176, 64, 1)" },
  { label: "Low", total: 32, color: "rgba(106, 211, 73, 1)" },
];

export default function AlertsAndRisks() {
  const [region, setRegion] = React.useState("Geographical Risk");
  const [sortBy, setSortBy] = React.useState("Region");
  const [dismissed, setDismissed] = React.useState({});

  const handleDismiss = (id) =>
    setDismissed((d) => ({ ...d, [id]: true }));

  const [total, setTotal] = React.useState(62)

  return (
    <Box sx={{display:"flex", justifyContent:"center"}}>
      <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box sx={{ p: { xs: 2, md: 3 }, maxWidth: "100%", mx: "auto",  }}>
        {/* Alerts */}
        <Typography
          variant="h6"
          sx={{ fontWeight: 600, mb: 1, fontSize: "24px" }}
        >
          Alerts and Recommendations
        </Typography>
        <Grid container spacing={3} sx={{ mb: 3 }}>
          {alerts.map((a) =>
            dismissed[a.id] ? null : (
              <Grid item xs={12} md={4} key={a.id}>
                <Card
                  elevation={0}
                  sx={{
                    width: "335px",
                    height: "182px",
                    border: "2px solid rgba(226, 0, 0, 1)",
                    borderColor: "error.main",
                    borderRadius: "9.5px",
                    boxShadow: "2px 2px  6px rgba(255, 0, 0, 0.2)",
                    bgcolor: "background.paper",
                    pl: 1,
                  }}
                >
                  <CardContent
                    sx={{ position: "relative", pt: 3, width: "327px" }}
                  >
                    <IconButton
                      aria-label="dismiss"
                      size="small"
                      onClick={() => handleDismiss(a.id)}
                      sx={{ position: "absolute", top: 8, right: 8 }}
                    >
                      <CloseRoundedIcon fontSize="small" />
                    </IconButton>

                    <Stack alignItems="center" spacing={1} sx={{ mb: 3 }}>
                      <WarningAmberRoundedIcon sx={{ color: "warning.main" }} />
                      <Typography
                        variant="subtitle1"
                        align="center"
                        sx={{
                          fontWeight: 600,
                          color: "rgba(226, 0, 0, 1)",
                          fontSize: "14px",
                        }}
                      >
                        {a.title}
                      </Typography>
                    </Stack>

                    <Stack
                      direction={"row"}
                      width={"272px"}
                      alignItems={"center"}
                      spacing={1}
                    >
                      <Stack width={"168px"}>
                        <Typography
                          variant="caption"
                          sx={{
                            fontWeight: 600,
                            color: "primary.main",
                            mb: 0.5,
                          }}
                        >
                          Recommended
                        </Typography>
                        <Typography
                          variant="body2"
                          sx={{
                            lineHeight: 1.4,
                            fontWeight: 400,
                            fontSize: "10px",
                            color: "rgba(0, 0, 0, 1)",
                          }}
                        >
                          {a.recommendation}
                        </Typography>
                      </Stack>

                      <Button
                        variant="contained"
                        sx={{
                          height: "26px",
                          position: "relative",
                          top: 10,
                          left: 9,
                          width: "110px",
                          p: 0.5,
                          borderRadius: "5px",
                          fontSize: "10px",
                          fontWeight: 500,
                          bgcolor: "rgba(4, 59, 255, 1)",
                        }}
                      >
                        {a.cta}
                      </Button>
                    </Stack>
                  </CardContent>
                </Card>
              </Grid>
            )
          )}
        </Grid>

        {/* Risk Radar */}
        <Typography variant="h6" sx={{ fontWeight: 600, fontSize: "24px", mb: 3, mt: 6 }}>
          Risk Radar
        </Typography>
        <Grid container spacing={{lg:1}} height={"381px"}>
          <Grid item xs={12} md={7}>
            <Card elevation={0} sx={{  width: "706px", p: 1, height: "381px", }} >
              <CardHeader
                title={
                  <Typography variant="subtitle1" sx={{ fontWeight: 400, fontSize: "20px",  }}>
                    Radar Chart
                  </Typography>
                  
                }
                action={
                  <Stack direction={"row"} alignItems={"center"} spacing={1}>
                  <Typography  sx={{ fontWeight: 500, fontSize:"12px", color: "rgba(73, 73, 73, 1)" }}>
                    sort by: 
                  </Typography>
<FormControl
  size="small"
  sx={{ minWidth: 100, height: 30, borderRadius: "6px" }}
>
  <Select
    value={sortBy}
    onChange={(e) => setSortBy(e.target.value)}
    displayEmpty
    sx={{
      height: "100%",
      borderRadius: "6px",
      fontSize: "13px",
      fontWeight: 500,
    }}
    MenuProps={{
      disableScrollLock: true, // prevents body shift
      PaperProps: {
        sx: {
          zIndex: 2000,   // make sure dropdown floats above Risk Map
          width: 120,     // or match parent width
        },
      },
    
    }}
  >
    <MenuItem value="Region">Region</MenuItem>
    <MenuItem value="Business Unit">Business Unit</MenuItem>
    <MenuItem value="Severity">Severity</MenuItem>
  </Select>
</FormControl>


                  </Stack>
                }
              />
              <CardContent>
                <Grid container spacing={1}>
                  <Grid item xs={12} md={7}>
                    <Box sx={{ width: "383px", height: 300 }}>
                      <ResponsiveContainer>
                        <RadarChart outerRadius={110} data={radarData}>
                          <PolarGrid />
                          <PolarAngleAxis dataKey="category"
                            tick={{ fill: "rgba(0, 0, 0, 1)", fontSize: "11.05px", fontWeight: 500 }}
                          />
                          <PolarRadiusAxis />
                          <Tooltip />
                          <Radar
                            name="Risks"
                            dataKey="value"
                            stroke="rgba(253, 126, 20, 1)"
                            fill="rgba(253, 126, 20, 0.5)"
                            fillOpacity={0.6}
                          />
                        </RadarChart>
                      </ResponsiveContainer>
                    </Box>
                  </Grid>
                  <Grid item xs={12} md={5}>
                    <Box mt={5} ml={5}>
                      <Table
  size="small"
  sx={{
    border: "1px solid rgba(253, 126, 20, 1)",
    borderCollapse: "collapse",
    width: "220px",
    "& th": {
      border: "1px solid rgba(253, 126, 20, 1)",
      fontSize: "14px",
      fontWeight: 500,
      textAlign: "center",
    },
    "&  td ": {
      border: "1px solid rgba(143, 143, 143, 1)",
      fontSize: "12px",
      fontWeight: 400,
      color: "rgba(0, 0, 0, 1)",
      textAlign: "center",
    },
    "& .MuiTableCell-head": {
      backgroundColor: "rgba(254, 216, 185, 1)",
      fontWeight: 700,
    },
  }}
>
  <TableHead>
    <TableRow>
      <TableCell>Position</TableCell>
      <TableCell align="right">Impact</TableCell>
    </TableRow>
  </TableHead>
  <TableBody>
    {riskTable.map((row) => (
      <TableRow key={row.position}>
        <TableCell>{row.position}</TableCell>
        <TableCell align="right">{row.impact}</TableCell>
      </TableRow>
    ))}
  </TableBody>
</Table>
                    </Box>

                  </Grid>
                </Grid>
              </CardContent>
            </Card>
          </Grid>

          {/* Risk Summary */}
          <Grid item xs={12} md={3}>
            <Card elevation={0} sx={{ width: "280px", height: "381px", display: "flex", flexDirection: "column" }}>
      {/* Card Header */}
      <CardHeader
        sx={{ pb: 0.6 }}
        title={
          <Typography variant="subtitle1" sx={{ fontWeight: 400, fontSize: "20px"}}>
            Risk Summary
          </Typography>
        }
      />

      <CardContent sx={{ flex: 1, display: "flex", flexDirection: "column", p: 1 }}>
        {/* Region Select */}
        <FormControl size="small" fullWidth sx={{ mb: 1 }}>
          <Select labelId="region-label" value={region} onChange={(e) => setRegion(e.target.value)} 
             MenuProps={{
      disableScrollLock: true, // prevents body shift
      PaperProps: {
        sx: {
          zIndex: 2000,   // make sure dropdown floats above Risk Map
        },
      },
    
    }}>
            <MenuItem value="Geographical Risk">Geographical Risk</MenuItem>
            <MenuItem value="Operational Risk">Operational Risk</MenuItem>
            <MenuItem value="Compliance Risk">Compliance Risk</MenuItem>
          </Select>
        </FormControl>

        {/* Table Container */}
        <Stack
          sx={{
            flex: 1,
            border: "1px solid rgba(253, 126, 20, 1)",
            borderRadius: "12px",
            overflow: "hidden",
          }}
        >
          <Table sx={{ borderCollapse: "collapse", tableLayout: "fixed", width: "100%" }}>
            {/* Table Header */}
            <TableHead>
              <TableRow sx={{ backgroundColor: "rgba(254, 216, 185, 1)", height: 48,  }}>
                {["Risk", "Total", "%"].map((col, index) => (
                  <TableCell
                    key={col}
                    sx={{
                      textAlign: "center",
                      p: 0,
                      lineHeight: "45px",
                      width: "33.33%",
                      borderRight: index < 2 ? "1px solid rgba(253, 126, 20, 1)" : "none",
                      borderTopLeftRadius: index === 0 ? "12px" : 0,
                      borderTopRightRadius: index === 2 ? "12px" : 0,
                    }}
                  >
                    <Typography variant="body2" sx={{ fontWeight: 500, fontSize: "13px", lineHeight: "45px" }}>
                      {col}
                    </Typography>
                  </TableCell>
                ))}
              </TableRow>
            </TableHead>

            {/* Table Body */}
            <TableBody>
              {riskSummary.map((r) => {
                const percent = total ? ((r.total / total) * 100).toFixed(1) : 0;
                return (
                  <TableRow key={r.label} sx={{ height: 50 }}>
                    {/* Risk Label */}
                    <TableCell sx={{ border: "1px solid rgba(0,0,0,0.12)", textAlign: "center", p: 0 }}>
                      <Typography variant="body2" sx={{ fontWeight: 500, fontSize: "13px", lineHeight: "45px" }}>
                        {r.label}
                      </Typography>
                    </TableCell>

                    {/* Total */}
                    <TableCell sx={{ border: "1px solid rgba(0,0,0,0.12)", textAlign: "center", p: 0 }}>
                      <Chip
                        sx={{
                          backgroundColor: r.color,
                          color: "#fff",
                          fontSize: "8.8px",
                          fontWeight: 700,
                          height: 24,
                          mt: "10px", // vertical center
                        }}
                        label={r.total}
                        size="small"
                      />
                    </TableCell>

                    {/* % */}
                    <TableCell sx={{ border: "1px solid rgba(0,0,0,0.12)", textAlign: "center", p: 0 }}>
                      <Chip
                        sx={{
                          backgroundColor: r.color,
                          color: "#fff",
                          fontSize: "8.8px",
                          fontWeight: 700,
                          height: 24,
                          mt: "10px",
                        }}
                        label={`${percent}%`}
                        size="small"
                      />
                    </TableCell>
                  </TableRow>
                );
              })}

              {/* Total Row */}
              <TableRow sx={{ height: 50 }}>
                <TableCell
                  sx={{
                    border: "1px solid rgba(0,0,0,0.12)",
                    textAlign: "center",
                    p: 0,
                    borderBottomLeftRadius: "12px",
                  }}
                >
                  <Typography
                    variant="body2"
                    sx={{ color: "rgba(253, 126, 20, 1)", fontWeight: 700, fontSize: "13px", lineHeight: "45px" }}
                  >
                    Total
                  </Typography>
                </TableCell>
                <TableCell sx={{ border: "1px solid rgba(0,0,0,0.12)", textAlign: "center", p: 0 }}>
                  <Typography variant="body2" sx={{ fontWeight: 700, lineHeight: "45px" }}>
                    {total}
                  </Typography>
                </TableCell>
                <TableCell sx={{ border: "1px solid rgba(0,0,0,0.12)", textAlign: "center", p: 0 }}>
                  <Typography variant="body2" sx={{ fontWeight: 700, lineHeight: "45px" }}>
                    100%
                  </Typography>
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </Stack>
      </CardContent>
    </Card>
              
          </Grid>

              <Stack width= "329x" bgcolor={"#ffffff"} p={1} borderRadius={"15px"}> 
                <Typography sx={{color:"rgba(0, 0, 0, 1)", mb: 2,  fontWeight: 400, fontSize: "20px", p:1}}>
                 Risk Map
              </Typography>
                  <Box
      sx={{
        height: "294px",
        width: "285px",
        backgroundImage: `url("/Rectangle.png")`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    />
              </Stack>
        </Grid>
      

      </Box>
    </ThemeProvider>
    </Box>
    
  );
}
