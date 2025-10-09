"use client"

import { Box, Paper, Typography, Grid, TextField, InputAdornment, IconButton, Button, Stack } from "@mui/material"
import SearchIcon from "@mui/icons-material/Search"
import TuneIcon from "@mui/icons-material/Tune"
import PlaceIcon from "@mui/icons-material/Place"
import DiamondIcon from "@mui/icons-material/Diamond"
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown"
import { EngineerCard } from "./EngineerCard"

const engineers = [
  { name: "Bayo Adams", role: "Structural Engineer" },
  { name: "Mora Terri", role: "Project Engineer" },
  { name: "Quisten Oriyomi", role: "Civil Engineer" },
  { name: "Sylvia Anthony", role: "Site Engineer" },
  { name: "John Richard", role: "Mechanical Engineer" },
  { name: "Max Darlington", role: "Electrical Engineer" },
  { name: "Caden Rockwell", role: "Geotechnical Engineer" },
  { name: "Hal Onajite", role: "Mining Engineer" },
  { name: "Harvey Adams", role: "Process Engineer" },
  { name: "Aris Mechano", role: "Maintenance Engineer" },
  { name: "Lucas Watfson", role: "Chemical Engineer" },
  { name: "Ava Otis", role: "Quality Engineer" },
  { name: "Dylan Smith", role: "Safety Engineer" },
  { name: "Olive Muhammed", role: "Materials Engineer" },
  { name: "Gavis Sam", role: "Operations Engineer" },
]

export function SearchEngineer() {
  return (
    <Paper
      elevation={0}
      sx={{
        p: { xs: 2, md: 3 },
        borderRadius: 2,
        border: "1px solid",
        borderColor: "divider",
      }}
    >
      {/* header */}
      <Typography variant="h5" sx={{ fontWeight: 800 }}>
        Search For Engineer
      </Typography>
      <Typography variant="body2" color="text.secondary" sx={{ mt: 0.5 }}>
        Sell products matching your own criteria
      </Typography>

      {/* filters */}
      <Stack
        direction={{ xs: "column", md: "row" }}
        spacing={2}
        sx={{ mt: 2, alignItems: { xs: "stretch", md: "center" } }}
      >
        <TextField
          fullWidth
          placeholder="Search"
          size="medium"
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <SearchIcon color="action" />
              </InputAdornment>
            ),
            endAdornment: (
              <InputAdornment position="end">
                <IconButton size="small" aria-label="filter">
                  <TuneIcon />
                </IconButton>
              </InputAdornment>
            ),
          }}
        />

        <Stack direction="row" spacing={1.5} alignItems="center">
          <Button
            variant="outlined"
            color="warning"
            startIcon={<PlaceIcon />}
            endIcon={<KeyboardArrowDownIcon />}
            sx={{ textTransform: "none", fontWeight: 700 }}
          >
            NASARAWA
          </Button>
          <Button
            variant="outlined"
            color="warning"
            startIcon={<DiamondIcon />}
            endIcon={<KeyboardArrowDownIcon />}
            sx={{ textTransform: "none", fontWeight: 700 }}
          >
            Lithium
          </Button>
          <Button variant="text" color="warning" sx={{ textTransform: "none", fontWeight: 700 }}>
            Clear all
          </Button>
        </Stack>
      </Stack>

      {/* grid */}
      <Grid container spacing={2.5} sx={{ mt: 2 }}>
        {engineers.map((e) => (
          <Grid item xs={12} sm={6} md={4} lg={3} key={e.name}>
            <EngineerCard
              name={e.name}
              role={e.role}
              imageSrc="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-iPwNJLJJ9F7ovrFoLGqLmQrLgiGhrH.png"
              description="Skilled professional with proven project experience and industry certifications."
              topBadge="Top Rated"
            />
          </Grid>
        ))}
      </Grid>

      {/* bottom CTA */}
      <Box sx={{ display: "flex", justifyContent: "center", mt: 3 }}>
        <Button variant="contained" color="warning" sx={{ px: 4, textTransform: "none", fontWeight: 700 }}>
          View More
        </Button>
      </Box>
    </Paper>
  )
}
