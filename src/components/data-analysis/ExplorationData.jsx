"use client"

import * as React from "react"
import {
  Box,
  Card,
  CardContent,
  Divider,
  IconButton,
  Paper,
  Stack,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
  Chip,
  Grid,
  Tooltip,
} from "@mui/material"
import AddIcon from "@mui/icons-material/Add"
import RemoveIcon from "@mui/icons-material/Remove"

const mineralColors = {
  Gold: "#E5B80B",
  Copper: "#D97706",
  Iron: "#B91C1C",
  Tin: "#0EA5E9",
  Tantalite: "#9333EA",
  Feldspar: "#3B82F6",
  Basalt: "#6B7280",
  Aluminum: "#9CA3AF",
  "Silica Sand": "#10B981",
  Lead: "#2563EB",
  Zinc: "#22C55E",
  Silver: "#64748B",
  Coal: "#111827",
  Limestone: "#94A3B8",
  Gypsum: "#A3A3A3",
  Uranium: "#65A30D",
  Phosphates: "#16A34A",
  Quartz: "#0891B2",
  Gemstones: "#EF4444",
  Marble: "#CBD5E1",
  Dolerite: "#57534E",
}

/**
 * Render a set of colored chips for minerals
 */
function MineralChips({ minerals }) {
  return (
    <Stack direction="row" width={"160px"} flexWrap="wrap">
      {minerals.map((m, i) => (
        <Chip
          key={m + i}
          label={m}
          size="small"
          variant="outlined"
          sx={{
            color: mineralColors[m] || "text.primary",
            border: "none",
            fontWeight: 700,
            fontSize: "10px",
            bgcolor: "transparent",
            "& .MuiChip-label": { px: 0.75 },
          }}
        />
      ))}
    </Stack>
  )
}

const defaultRows = [
  {
    site: "Site A",
    minerals: ["Gold", "Copper", "Iron"],
    date: "03/11/2023",
    findings: "High gold grades, promising copper deposits",
  },
  {
    site: "Site B",
    minerals: ["Tin", "Tantalite", "Feldspar"],
    date: "03/11/2023",
    findings: "Significant tin and rare-tantalite deposits; moderate feldspar",
  },
  {
    site: "Site C",
    minerals: ["Basalt", "Aluminum", "Silica Sand"],
    date: "03/11/2023",
    findings: "Rich basalt resources, potential for aluminum production",
  },
  {
    site: "Site D",
    minerals: ["Lead", "Zinc", "Silver"],
    date: "03/11/2023",
    findings: "High-grade lead and zinc; silver by-product potential",
  },
  {
    site: "Site E",
    minerals: ["Coal", "Limestone", "Gypsum"],
    date: "03/11/2023",
    findings: "Extensive coal reserves, strong limestone beds; cement-grade gypsum deposits",
  },
  {
    site: "Site F",
    minerals: ["Uranium", "Phosphates", "Quartz"],
    date: "03/11/2023",
    findings: "Rich uranium deposits; significant phosphates resource",
  },
  {
    site: "Site G",
    minerals: ["Gemstones", "Marble", "Dolerite"],
    date: "03/11/2023",
    findings: "High-quality gemstones, marble; dolerite suitable for aggregates",
  },
  {
    site: "Site H",
    minerals: ["Gold", "Copper", "Iron"],
    date: "03/11/2023",
    findings: "Promising polymetallic veins; gold, copper, and iron clusters",
  },
]

/**
 * ExplorationDataCard
 * - Left: MUI Table (Survey Site, Mineral Composition, Survey Date, Key Findings)
 * - Right: Dynamic image panel with zoom controls
 */
export default function ExplorationData({
  rows = defaultRows,
  imageSrc = "/map2.png",
  title = "Exploration Data",
  subtitle = "Geological Data",
}) {
  const [zoom, setZoom] = React.useState(1)

  const handleZoomIn = () => setZoom((z) => Math.min(1.8, +(z + 0.1).toFixed(2)))
  const handleZoomOut = () => setZoom((z) => Math.max(0.8, +(z - 0.1).toFixed(2)))

  return (
    <Card variant="outlined" sx={{ borderRadius: "15px", width: "984px",border: "none" }}>
      <CardContent sx={{ p: { xs: 2, md: 3 },  }}>
        <Stack gap={0.5} mb={2}>
          <Typography variant="caption" color="text.secondary">
            {subtitle}
          </Typography>
          <Typography variant="h6" fontWeight={400} fontSize={"24px"}>
            {title}
          </Typography>
        </Stack>

        <Grid container  alignItems="stretch" sx={{border: "1px solid rgba(24, 23, 23, 1)", borderRadius: "15px"}}>
          {/* Left: Table */}
          <Grid item xs={12} md={7}  width={"530px"}>
            <Paper
              variant="outlined"
              sx={{
                borderRadius: "15px",
                overflow: "hidden",
                border:"none",
              }}
            >
              <TableContainer sx={{ maxHeight: 520 }}>
                <Table stickyHeader size="small" aria-label="Exploration data table">
                  <TableHead>
                    <TableRow>
                      <TableCell sx={{ fontWeight: 500, fontSize: "14px",}}>Survey Site :</TableCell>
                      <TableCell sx={{ fontWeight: 500, fontSize: "14px",}}>Mineral Composition :</TableCell>
                      <TableCell sx={{ fontWeight: 500, fontSize: "14px", whiteSpace: "nowrap" }}>Survey Date :</TableCell>
                      <TableCell sx={{ fontWeight: 500, fontSize: "14px",}}>Key Findings :</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {rows.map((r, idx) => (
                      <TableRow hover key={r.site + idx} sx={{height: "50px"}}>
                        <TableCell sx={{ fontWeight: 500, fontSize: "12px"}}>{r.site}</TableCell>
                        <TableCell>
                          <MineralChips minerals={r.minerals} />
                        </TableCell>
                        <TableCell sx={{ whiteSpace: "nowrap", fontWeight: 500, fontSize: "12px" }}>{r.date}</TableCell>
                        <TableCell sx={{ minWidth: 260, fontWeight: 400, fontSize: "12px" }}>{r.findings}</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </TableContainer>
            </Paper>
          </Grid>

          {/* Right: Map Image with Zoom */}
          <Grid item xs={12} md={5} width={"400px"}>
            <Paper
              variant="outlined"
              sx={{
                borderRadius: 0,
                               height: "100%",
                display: "flex",
                flexDirection: "column",
                border: "none"
              }}
            >
              <Box
                sx={{
                  position: "relative",
                  flex: 1,
                  overflow: "hidden",
                  borderRadius: 0,
                  bgcolor: "background.paper",
                  borderTopRightRadius: "15px",
                borderBottomRightRadius: "15px",
                }}
              >
                <Box
                  sx={{
                    width: "100%",
                    height: "100%",
                    display: "grid",
                    placeItems: "center",
                  }}
                >
                  <img
                    src={imageSrc}
                    alt="Exploration survey reference map of Nigeria with marked sites"
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                      borderRadius: 0,
                      transform: `scale(${zoom})`,
                      transformOrigin: "center center",
                      transition: "transform 120ms linear",
                    }}
                    crossOrigin="anonymous"
                  />
                </Box>

                <Stack
                  direction="column"
                  spacing={1}
                  sx={{
                    position: "absolute",
                    right: 8,
                    bottom: 8,
                    bgcolor: "background.paper",
                    border: "1px solid",
                    borderColor: "divider",
                    borderRadius: 2,
                    p: 0.5,
                    boxShadow: (t) => t.shadows[1],
                  }}
                >
                  <Tooltip title="Zoom in">
                    <IconButton size="small" color="primary" onClick={handleZoomIn} aria-label="Zoom in">
                      <AddIcon fontSize="small" />
                    </IconButton>
                  </Tooltip>
                  <Tooltip title="Zoom out">
                    <IconButton size="small" color="warning" onClick={handleZoomOut} aria-label="Zoom out">
                      <RemoveIcon fontSize="small" />
                    </IconButton>
                  </Tooltip>
                </Stack>
              </Box>
            </Paper>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  )
}
