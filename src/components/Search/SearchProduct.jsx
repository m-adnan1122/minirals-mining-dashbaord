"use client";

import React from "react";
import {
  Box,
  Paper,
  Stack,
  Typography,
  TextField,
  InputAdornment,
  IconButton,
  Button,
  Grid,
  Card,
  CardActionArea,
  CardMedia,
  Link as MLink,
  Divider,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import FilterAltIcon from "@mui/icons-material/FilterAlt";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import ScienceIcon from "@mui/icons-material/Science";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import ElementCard from "./ElementCard";

const SAMPLE_ELEMENT = [
  { number: 1, symbol: "H", name: "Hydrogen", atomicMass: 1.008 },
  { number: 2, symbol: "He", name: "Helium", atomicMass: 4.0026 },
  { number: 3, symbol: "Li", name: "Lithium", atomicMass: 6.94 },
  { number: 4, symbol: "Be", name: "Beryllium", atomicMass: 9.0122 },
  { number: 5, symbol: "B", name: "Boron", atomicMass: 10.81 },
  { number: 6, symbol: "C", name: "Carbon", atomicMass: 12.011 },
  { number: 7, symbol: "N", name: "Nitrogen", atomicMass: 14.007 },
  { number: 8, symbol: "O", name: "Oxygen", atomicMass: 15.999 },
  { number: 9, symbol: "F", name: "Fluorine", atomicMass: 18.998 },
  { number: 10, symbol: "Ne", name: "Neon", atomicMass: 20.18 },
  { number: 11, symbol: "Na", name: "Sodium", atomicMass: 22.99 },
  { number: 12, symbol: "Mg", name: "Magnesium", atomicMass: 24.305 },
  { number: 13, symbol: "Al", name: "Aluminum", atomicMass: 26.982 },
  { number: 14, symbol: "Si", name: "Silicon", atomicMass: 28.085 },
  { number: 15, symbol: "P", name: "Phosphorus", atomicMass: 30.974 },
  { number: 16, symbol: "S", name: "Sulfur", atomicMass: 32.06 },
  { number: 17, symbol: "Cl", name: "Chlorine", atomicMass: 35.45 },
  { number: 18, symbol: "Ar", name: "Argon", atomicMass: 39.948 },
  { number: 19, symbol: "K", name: "Potassium", atomicMass: 39.098 },
  { number: 20, symbol: "Ca", name: "Calcium", atomicMass: 40.078 },
  { number: 21, symbol: "Sc", name: "Scandium", atomicMass: 44.956 },
  { number: 22, symbol: "Ti", name: "Titanium", atomicMass: 47.867 },
  { number: 23, symbol: "V", name: "Vanadium", atomicMass: 50.942 },
  { number: 28, symbol: "Ni", name: "Nickel", atomicMass: 58.693 }, // matches the example style
]




export function SearchProduct({
  locationLabel = "NASARAWA",
  elementLabel = "Lithium",
  onClearAll,
  onOpenFilters,
  onContinue,
  showReference = false,
}) {
 
     const  gemstoneImageUrls = [
    "/Rectangle1.png",
    "/Rectangle2.png",
    "/Rectangle3.png",
    "/Rectangle4.png",
]


  return (
    <Box sx={{ position: "relative", width: "984px" }}> 
      <Paper
        elevation={0}
        sx={{
          position: "relative",
          zIndex: 1,
          p: { xs: 2, md: 3 },
          borderRadius: 3,
          bgcolor: "background.paper",
          mb:5,
        }}
      >
        <Grid container spacing={3} alignItems="flex-start">
            <Stack direction={"row"} spacing={17}>
        <Stack>
          <Typography pb={1}  fontWeight={600} fontSize={"20px"} fontStyle={"SemiBold"}>
              Find Products Matching Your Own Criteria
            </Typography>
            <Box mt={1} width={"440px"}>
              <TextField
                fullWidth
                placeholder="Search"
                size="small"
                variant="outlined"
                sx={{
                  "& fieldset": { borderRadius: "6.94px" },
                }}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <SearchIcon sx={{color:"rgba(253, 126, 20, 1)"}} />
                    </InputAdornment>
                  ),
                  endAdornment: (
                    <InputAdornment position="end">
                      <IconButton
                        edge="end"
                        size="small"
                        aria-label="open filters"
                        onClick={onOpenFilters}
                        sx={{
                          color: "rgba(253, 126, 20, 1)",
                          width: 28,
                          height: 28,
                        }}
                      >
                        <FilterAltIcon fontSize="small" />
                      </IconButton>
                    </InputAdornment>
                  ),
                }}
              />
            </Box>
             </Stack>

          {/* Right: Filter "chips" and clear */}
           <Stack>
             <Typography pb={2}  fontWeight={600} fontSize={"20px"} fontStyle={"SemiBold"}>
              Gemstones
            </Typography>
             <Stack
              direction="row"
              spacing={2}
              alignItems="center"
              justifyContent={{ xs: "flex-start", md: "flex-end" }}
            >
              <Button
                size="small"
                variant="outlined"
                startIcon={<LocationOnIcon sx={{color: "rgba(253, 126, 20, 1)"}} />}
                endIcon={<ArrowDropDownIcon />}
                sx={{ borderRadius: "6.94px", height: "40px", fontSize: "12.17px", fontWeight: 400, textTransform: "none", borderColor:"rgba(182, 182, 182, 1)", color: "rgba(0, 0, 0, 1)" }}
              >
                {locationLabel}
              </Button>
              <Button
                size="small"
                variant="outlined"
                startIcon={<ScienceIcon sx={{color: "rgba(253, 126, 20, 1)"}} />}
                endIcon={<ArrowDropDownIcon />}
                sx={{ borderRadius: "6.94px", height: "40px", fontSize: "12.17px", fontWeight: 400, textTransform: "none", borderColor:"rgba(182, 182, 182, 1)", color: "rgba(0, 0, 0, 1)" }}
              >
                {elementLabel}
              </Button>
              <MLink
                href="#"
                underline="hover"
                onClick={(e) => {
                  e.preventDefault();
                  onClearAll && onClearAll();
                }}
                sx={{
                  display: "inline-flex",
                  alignItems: "center",
                  color: "rgba(253, 126, 20, 1)",
                  fontWeight: 500,
                  textDecoration:"underline"
                }}
              >
                {"Clear all"}
              </MLink>
            </Stack>
           </Stack>
         </Stack>

            <Stack direction="row"  spacing={3.5} >
                <Section title="Elements" subtitle={`All Elements`}>
              <Stack direction="row" spacing={2} width={"550px"} >
                <ElementBadge/>
              </Stack>
            </Section>


          <Stack > 
          {/* Right column: Gemstones */}
          <Grid item xs={12} md={2}>
            <Section
              title="Gemstones"
              subtitle={`Gemstones in ${locationLabel}`}
            >
              <ImageGrid imageUrls={gemstoneImageUrls} />
            </Section>
          </Grid>

          {/* Footer CTA */}
            <Stack direction="row" justifyContent="flex-end" pt={18} mr={2}>
              <Button
                variant="contained"
                size="medium"
                sx={{ px: 3, borderRadius: 2, py:1, fontSize: "16px", fontWeight:500, backgroundColor:"rgba(253, 126, 20, 1)" }}
                onClick={onContinue}
              >
                Continue
              </Button>
            </Stack>

          </Stack>
            </Stack>
        </Grid>
      </Paper>
    </Box>
  );
}

function Section({ title, subtitle, children }) {
  return (
    <Stack spacing={1}>
      <Typography variant="subtitle1" fontWeight={600} fontSize={"20px"}>
        {title}
      </Typography>
      {subtitle ? (
        <Typography pt={2} variant="body2" fontWeight={400} fontSize={"20px"}>
          {subtitle}
        </Typography>
      ) : null}
      <Box mt={1}>{children}</Box>
    </Stack>
  );
}

function ElementBadge({ symbol, number }) {
  return (
<Grid container spacing={1} direction={"row"}>
      {SAMPLE_ELEMENT.map((el) => (
        <Grid item key={el.symbol} >
          <ElementCard
            data={el}
            size={"sm"}
          />
        </Grid>
      ))}
    </Grid>
  );
}

function ImageGrid({ imageUrls }) {
  const cells = Array.from({ length: 4 }, (_, i) => imageUrls[i] || "");
  return (
    <Grid container spacing={2}>
      {cells.map((src, i) => (
        <Grid item xs={6} key={i}>
          <Card variant="outlined" sx={{ borderRadius: "12px" }}>
            <CardActionArea sx={{ borderRadius: "12px", overflow: "hidden" }}>
              {src ? (
                <CardMedia
                  component="img"
                  height="80"
                  image={src}
                  width={"150px"}
                  alt={`Gemstone ${i + 1}`}
                  sx={{ objectFit: "cover" }}
                />
              ) : (
                <Box
                  sx={{
                    height: 96,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    bgcolor: "grey.50",
                    color: "text.secondary",
                    fontSize: 12,
                  }}
                >
                  {"Add image URL"}
                </Box>
              )}
            </CardActionArea>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
}
