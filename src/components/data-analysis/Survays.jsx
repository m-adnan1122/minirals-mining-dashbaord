"use client"

import React from "react"
import {
  Box,
  Card,
  CardContent,
  CardHeader,
  CardActions,
  Typography,
  Divider,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Chip,
  IconButton,
  TextField,
  Tooltip,
  Stack,
  Switch,
  FormControlLabel,
} from "@mui/material"
import AddLocationAltIcon from "@mui/icons-material/AddLocationAlt"
import ZoomInIcon from "@mui/icons-material/ZoomIn"
import ZoomOutIcon from "@mui/icons-material/ZoomOut"
import CenterFocusStrongIcon from "@mui/icons-material/CenterFocusStrong"

const DEFAULT_SITES = [
  { id: "A", name: "Site A", lat: 11.92, lon: 14.98, status: "Active", xPct: 63, yPct: 16 },
  { id: "B", name: "Site B", lat: 9.73, lon: 9.5, status: "Active", xPct: 43, yPct: 34 },
  { id: "C", name: "Site C", lat: 6.85, lon: 3.35, status: "Inactive", xPct: 70, yPct: 67 },
  { id: "D", name: "Site D", lat: 7.45, lon: 8.52, status: "Active", xPct: 55, yPct: 52 },
  { id: "E", name: "Site E", lat: 5.02, lon: 7.98, status: "Inactive", xPct: 59, yPct: 79 },
  { id: "F", name: "Site F", lat: 9.05, lon: 7.49, status: "Active", xPct: 51, yPct: 43 },
  { id: "G", name: "Site G", lat: 6.2, lon: 5.43, status: "Inactive", xPct: 66, yPct: 72 },
]

export default function Surveys({
  imageSrc = "/map.png",
  regionLabel = "Nigeria",
  title = "Geological Surveys",
  initialSites = DEFAULT_SITES,
  onSitesChange,
}) {
  const [sites, setSites] = React.useState(initialSites)
  const [selectedId, setSelectedId] = React.useState(sites[0]?.id ?? null)
  const [search, setSearch] = React.useState("")
  const [placementMode, setPlacementMode] = React.useState(false)
  const [zoom, setZoom] = React.useState(1)
  const imgWrapperRef = React.useRef(null)
  const markerRefs = React.useRef({})

  const filtered = React.useMemo(() => {
    if (!search.trim()) return sites
    const q = search.toLowerCase()
    return sites.filter(
      (s) =>
        s.name.toLowerCase().includes(q) ||
        String(s.lat).includes(q) ||
        String(s.lon).includes(q) ||
        s.status.toLowerCase().includes(q),
    )
  }, [sites, search])

  const statusColor = (status) => (status === "Active" ? "rgba(0, 167, 17, 1)" : "rgba(255, 92, 0, 1)")

  const handleZoomIn = () => setZoom((z) => Math.min(2, z + 0.1))
  const handleZoomOut = () => setZoom((z) => Math.max(0.75, z - 0.1))
  const handleCenterSelected = () => {
    const el = markerRefs.current[selectedId]
    if (el && imgWrapperRef.current) {
      el.scrollIntoView({ behavior: "smooth", block: "center", inline: "center" })
    }
  }

  const handleMapClick = (e) => {
    if (!placementMode) return
    const container = e.currentTarget.getBoundingClientRect()
    const x = e.clientX - container.left
    const y = e.clientY - container.top
    const xPct = Math.max(0, Math.min(100, (x / container.width) * 100))
    const yPct = Math.max(0, Math.min(100, (y / container.height) * 100))

    const id = nextSiteId(sites)
    const newSite = {
      id,
      name: `Site ${id}`,
      lat: randomInRange(4.0, 13.0),
      lon: randomInRange(3.0, 15.0),
      status: Math.random() > 0.5 ? "Active" : "Inactive",
      xPct,
      yPct,
    }
    const next = [...sites, newSite]
    setSites(next)
    setSelectedId(id)
    onSitesChange?.(next)
  }

  const handleRowClick = (site) => {
    setSelectedId(site.id)
    requestAnimationFrame(() => handleCenterSelected())
  }

  const toggleStatus = (siteId) => {
    const next = sites.map((s) =>
      s.id === siteId ? { ...s, status: s.status === "Active" ? "Inactive" : "Active" } : s,
    )
    setSites(next)
    onSitesChange?.(next)
  }

  return (
    <Card variant="outlined" sx={{ borderRadius: "15px",border: "none", width:"984px", height: "607px", pl: 3, pr:3, mb:4 }}>
      <CardHeader
        title={
          <Typography variant="subtitle1" sx={{ fontWeight: 400, fontSize: "12px" }} color="text.secondary">
            Geological Data
          </Typography>
        }
        subheader={
          <Typography variant="h6"    sx={{ fontWeight: 400, fontSize: "24px" }}>
            {title}
          </Typography>
        }
        sx={{ pb: 3 }}
      />
      <CardContent sx={{ pt: 3, border: "1px solid rgba(0, 0, 0, 1)", borderRadius: "15px" }}>
        <Box sx={{ display: "flex", gap: 3, flexDirection: { xs: "column", md: "row" } }}>
          {/* 🗺️ Map Panel */}
          <Paper
            variant="outlined"
            sx={{
              flex: 1.4,
              position: "relative",
              border: "none",
              height: "420px",
              bgcolor: "background.paper",
            }}
            ref={imgWrapperRef}
          >
            <Box
              role="img"
              aria-label={`Map of ${regionLabel}`}
              onClick={handleMapClick}
              sx={{
                position: "relative",
                width: "500px",
                height: "400px",
                transform: `scale(${zoom})`,
                transformOrigin: "top left",
              }}
            >
              <Box
                component="img"
                src={imageSrc}
                alt={`Survey map of ${regionLabel}`}
                draggable={false}
                sx={{
                  display: "block",
                  width: "100%",
                  height: "auto",
                  userSelect: "none",
                  pointerEvents: "none",
                  borderRadius: 2,
                }}
              />

              {/* 🔘 Markers */}
              {sites.map((site) => {
                const isSelected = site.id === selectedId
                return (
                  <Tooltip
                    key={site.id}
                    title={
                      <Box>
                        <Typography variant="subtitle2" sx={{ fontWeight: 600 }}>
                          {site.name}
                        </Typography>
                        <Typography variant="caption">Lat: {site.lat.toFixed(4)}</Typography>
                        <Typography variant="caption" display="block">
                          Lon: {site.lon.toFixed(4)}
                        </Typography>
                        <Chip size="small" label={site.status} sx={{color:`${statusColor(site.status)}`}} />
                      </Box>
                    }
                    arrow
                  >
                    <Box
                      ref={(el) => (markerRefs.current[site.id] = el)}
                      onClick={(ev) => {
                        ev.stopPropagation()
                        setSelectedId(site.id)
                      }}
                      sx={{
                        position: "absolute",
                        left: `${site.xPct}%`,
                        top: `${site.yPct}%`,
                        transform: "translate(-50%, -50%)",
                        width: isSelected ? 18 : 14,
                        height: isSelected ? 18 : 14,
                        borderRadius: "50%",
                        bgcolor: site.status === "Active" ? "success.main" : "warning.main",
                        border: (theme) => `2px solid ${isSelected ? theme.palette.info.main : "#fff"}`,
                        boxShadow: 2,
                        cursor: "pointer",
                      }}
                    />
                  </Tooltip>
                )
              })}
            </Box>

            {/* 🔧 Controls */}
            <Stack
              spacing={1}
              sx={{
                position: "absolute",
                right: 12,
                bottom: 12,
                bgcolor: "background.paper",
                p: 1,
                borderRadius: 2,
                boxShadow: 2,
              }}
            >
              <Tooltip title="Zoom In">
                <span>
                  <IconButton size="small" color="primary" onClick={handleZoomIn}>
                    <ZoomInIcon fontSize="small" />
                  </IconButton>
                </span>
              </Tooltip>
              <Tooltip title="Zoom Out">
                <span>
                  <IconButton size="small" color="primary" onClick={handleZoomOut}>
                    <ZoomOutIcon fontSize="small" />
                  </IconButton>
                </span>
              </Tooltip>
              <Tooltip title="Center Selected">
                <span>
                  <IconButton size="small" color="secondary" onClick={handleCenterSelected}>
                    <CenterFocusStrongIcon fontSize="small" />
                  </IconButton>
                </span>
              </Tooltip>
              <Divider />
              <Tooltip title="Enable placement mode to add site by clicking the map">
                <FormControlLabel
                  sx={{ mx: 1 }}
                  control={
                    <Switch
                      size="small"
                      checked={placementMode}
                      onChange={(e) => setPlacementMode(e.target.checked)}
                      color="success"
                    />
                  }
                  labelPlacement="start"
                  label={
                    <Stack direction="row" spacing={0.5} alignItems="center">
                      <AddLocationAltIcon fontSize="small" />
                      <Typography variant="caption">Placement</Typography>
                    </Stack>
                  }
                />
              </Tooltip>
            </Stack>
          </Paper>

          {/* 📋 Table Panel */}
          <Card variant="outlined" sx={{ flex: 1, borderRadius: 2, height: "397px", mt:1,  }}>
            <CardHeader
              title={
                <Typography variant="h6" sx={{ fontWeight: 600, fontSize: "20px", textAlign: "center" }}>
                  Surveys Map ({regionLabel})
                </Typography>
              }
              sx={{ pb: 0 }}
            />
            <CardContent sx={{ pt: 1 }}>
              <TextField
                fullWidth
                size="small"
                placeholder="Search sites, lat/lon, status..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                sx={{ mb: 1.5 }}
              />
              <TableContainer component={Paper} variant="outlined" sx={{ borderRadius: 2, height: "275px" , }}>
                <Table stickyHeader size="small">
                  <TableHead>
                    <TableRow>
                      <TableCell>
                        <Typography variant="body2" sx={{ fontWeight: 500, fontSize: "14px" }}>
                          Survey Site
                        </Typography>
                      </TableCell>
                      <TableCell>
                        <Typography variant="body2" sx={{ fontWeight: 500, fontSize: "14px" }}>
                          Latitude
                        </Typography>
                      </TableCell>
                      <TableCell>
                        <Typography variant="body2" sx={{ fontWeight: 500, fontSize: "14px" }}>
                          Longitude
                        </Typography>
                      </TableCell>
                      <TableCell>
                        <Typography variant="body2" sx={{ fontWeight: 500, fontSize: "14px" }}>
                          Status
                        </Typography>
                      </TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {filtered.map((s) => (
                      <TableRow
                        key={s.id}
                        hover
                        selected={s.id === selectedId}
                        onClick={() => handleRowClick(s)}
                        sx={{
                          cursor: "pointer",
                          "&.Mui-selected": { backgroundColor: "action.selected" },
                        }}
                      >
                        <TableCell>
                          <Stack direction="row" alignItems="center" spacing={1}>
                            <Box
                              sx={{
                                width: 8,
                                height: 8,
                                bgcolor: s.status === "Active" ? "success.main" : "warning.main",
                                borderRadius: "50%",
                              }}
                            />
                            <Typography variant="body2" sx={{ fontSize: 13 }}>
                              {s.name}
                            </Typography>
                          </Stack>
                        </TableCell>
                        <TableCell>
                          <Typography variant="body2" sx={{ fontSize: 13 }}>
                            {s.lat.toFixed(6)}
                          </Typography>
                        </TableCell>
                        <TableCell>
                          <Typography variant="body2" sx={{ fontSize: 13 }}>
                            {s.lon.toFixed(6)}
                          </Typography>
                        </TableCell>
                        <TableCell>
                          <Stack direction="row" spacing={1} alignItems="center">
                            <Chip size="small" label={s.status} sx={{bgcolor:`${statusColor(s.status)}`, color:"#fff", borderRadius: "3px"}} />
                            <Chip
                              size="small"
                              label="Toggle"
                              variant="outlined"
                              onClick={(e) => {
                                e.stopPropagation()
                                toggleStatus(s.id)
                              }}
                              sx={{ cursor: "pointer" }}
                            />
                          </Stack>
                        </TableCell>
                      </TableRow>
                    ))}
                    {filtered.length === 0 && (
                      <TableRow>
                        <TableCell colSpan={4}>
                          <Typography variant="body2" sx={{ fontSize: 13 }}>
                            No sites found.
                          </Typography>
                        </TableCell>
                      </TableRow>
                    )}
                  </TableBody>
                </Table>
              </TableContainer>
            </CardContent>
                      </Card>
        </Box>
      </CardContent>
    </Card>
  )
}

// Utilities
function nextSiteId(sites) {
  const used = new Set(sites.map((s) => s.id))
  for (let i = 0; i < 26; i++) {
    const letter = String.fromCharCode(65 + i)
    if (!used.has(letter)) return letter
  }
  return `${sites.length + 1}`
}

function randomInRange(min, max) {
  return Math.random() * (max - min) + min
}
