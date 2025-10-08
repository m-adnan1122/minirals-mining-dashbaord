import {
  Box,
  Card,
  CardContent,
  Typography,
  Grid,
  Stack,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Chip,
} from "@mui/material"

const MINERAL_COLORS = {
  Gold: "#f59e0b", // amber-500
  Iron: "#a855f7", // violet-500
  Copper: "#ef4444", // red-500
  Zinc: "#22c55e", // green-500
  Lead: "#0ea5e9", // sky-500
  Aluminum: "#6b7280", // gray-500
}

const DEFAULT_ROWS = [
  { mineral: "Gold (kg)", North: 9899, South: 9899, East: 9899, West: 9899 },
  { mineral: "Iron (kg)", North: 9879, South: 9879, East: 9879, West: 9879 },
  { mineral: "Copper (kg)", North: 989, South: 989, East: 989, West: 989 },
  { mineral: "Zinc (kg)", North: 4564, South: 4564, East: 4564, West: 4564 },
  { mineral: "Aluminum (kg)", North: 1545, South: 1545, East: 1545, West: 1545 },
  { mineral: "Gold (kg)", North: 9899, South: 9899, East: 9899, West: 9899 },
  { mineral: "Iron (kg)", North: 9879, South: 9879, East: 9879, West: 9879 },
  { mineral: "Copper (kg)", North: 989, South: 989, East: 989, West: 989 },
  { mineral: "Zinc (kg)", North: 4564, South: 4564, East: 4564, West: 4564 },
]

function MineralLegend() {
  const items = Object.entries(MINERAL_COLORS)
  return (
    <Stack direction="row" spacing={1} flexWrap="wrap" alignItems="center">
      {items.map(([name, color]) => (
        <Stack key={name} direction="row" spacing={0.75} alignItems="center" sx={{ mr: 1.5, mb: 1 }}>
          <Box
            aria-hidden
            sx={{
              width: 12,
              height: 12,
              borderRadius: 0.5,
              bgcolor: color,
              boxShadow: "inset 0 0 0 1px rgba(0,0,0,0.08)",
            }}
          />
          <Typography variant="caption" sx={{ color: "text.secondary" }}>
            {name}
          </Typography>
        </Stack>
      ))}
    </Stack>
  )
}

export default function RegionalData({
  title = "Regional Mineral Data",
  rows = DEFAULT_ROWS,
  imageSrc = "/map3.png",
}) {
  return (
    <Card variant="outlined" sx={{ borderRadius: "15px", width:"984px", mt:4.5, p:0, pb:0, mb: 6,border: "none" }}>
      <CardContent sx={{ p: { xs: 2, md: 3 }, pb:0 ,pr: 0,}}>
        {/* Heading - per request: weight 400 and size 24px */}
        <Typography variant="caption" color="text.secondary">
                    Geological Data
                  </Typography>
        <Typography sx={{ fontWeight: 400, fontSize: "24px", mb: 1 }}> {title} </Typography>

        {/* Legend */}
        <MineralLegend />

        <Grid container  sx={{ mt: 3}}>
          {/* Left: Table */}
          <Grid item xs={12} md={7} lg={7}>
            <TableContainer  sx={{ borderRadius: 2 }}>
              <Table size="small" aria-label="Regional mineral table">
                <TableHead>
                  <TableRow>
                    <TableCell sx={{ fontWeight: 500, fontSize:"16px", width: "30px"}}>Minerals</TableCell>
                    <TableCell align="right" sx={{ fontWeight: 500, fontSize:"14px", width: "115px", p:0 }}>
                      North Region
                    </TableCell>
                    <TableCell align="right" sx={{ fontWeight: 500, fontSize:"14px", width: "115px", p:0 }}>
                      South Region
                    </TableCell>
                    <TableCell align="right" sx={{ fontWeight: 500, fontSize:"14px", width: "115px", p:0 }}>
                      East Region
                    </TableCell>
                    <TableCell align="right" sx={{ fontWeight: 500, fontSize:"14px", width: "115px", }}>
                      West Region
                    </TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {rows.map((r, idx) => (
                    <TableRow key={idx} hover>
                      <TableCell component="th" scope="row">
                        {renderMineralName(r.mineral)}
                      </TableCell>
                      <TableCell align="center" sx={{fontWeight: 400, fontSize:"12px" }}>{r.North.toLocaleString()}</TableCell>
                      <TableCell align="center" sx={{fontWeight: 400, fontSize:"12px" }}>{r.South.toLocaleString()}</TableCell>
                      <TableCell align="center" sx={{fontWeight: 400, fontSize:"12px" }}>{r.East.toLocaleString()}</TableCell>
                      <TableCell align="center" sx={{fontWeight: 400, fontSize:"12px" }}>{r.West.toLocaleString()}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          </Grid>

          {/* Right: Image panel */}
          <Grid item xs={12}>
            <Box
              sx={{
                bgcolor: "rgba(244, 244, 244, 1)",
                width: "381px",
                height: "350px",
                mt:1,
                borderColor: "rgba(244, 244, 244, 1)",
                borderRadius: "15px",
                p: { xs: 1.5, md: 2 },
              }}
            >
              <Box
                component="img"
                src={imageSrc}
                alt="Regional mineral distribution map"
                sx={{
                  width: "100%",
                  height: "auto",
                  display: "block",
                  borderRadius: 2,
                }}
              />
            </Box>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  )
}

// Helpers
function renderMineralName(text) {
  // Color the leading mineral token if it matches our legend keys (e.g., "Gold (kg)")
  const key = (text.split(" ")[0] || "").replace(/\W+/g, "")
  const color = MINERAL_COLORS[key]
  if (!color) return <Typography>{text}</Typography>

  return (
    <Stack direction="row" spacing={0.5} width={"20px"} alignItems="center">
      <Typography sx={{  
          color: "rgba(0, 0, 0, 1)",
          fontSize:"14px",
          fontWeight:500,
    
      }}>{key}</Typography>
      <Typography sx={{  color: "rgba(0, 0, 0, 1)",
          fontSize:"14px",
          fontWeight:500,
          }}>{text.replace(/^[^(]+/, "").replace(/^\s*/, "")}</Typography>
    </Stack>
  )
}
