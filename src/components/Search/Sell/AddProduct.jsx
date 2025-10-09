"use client"

import { Box, Paper, Typography, Grid, Button } from "@mui/material"
import { MineralCard } from "./MineralCard"

export function AddProduct() {
  return (
    <Paper
      elevation={0}
      sx={{
        p: { xs: 2, md: 3.5},
        borderRadius: "12px",
        width:"981px",
        px: 6,
        mb: 5,
      }}
    >
      <Box component="header" sx={{ mb: 2 }}>
        <Typography variant="subtitle1" sx={{ fontWeight: 600, fontSize:"20px" }}>
          You Listing
        </Typography>
        <Typography variant="caption" sx={{ fontWeight: 400, fontSize:"12px" }}>
          Select Products You Are Interested In And Request Their Availability Or A Call Back
        </Typography>
      </Box>

      <Grid container spacing={3}>
        <Grid item xs={12} md={4}>
          <MineralCard />
        </Grid>
        <Grid item xs={false} md={8} />
      </Grid>

      <Box sx={{ mt: 3, display: "flex", justifyContent: "flex-end", gap: 1.5 }}>
        <Button variant="outlined" color="warning" sx={{ textTransform: "none", fontWeight: 500, fontSize:"16px", color:"rgba(253, 126, 20, 1)"}}>
          Go Back
        </Button>
        <Button variant="contained"  sx={{ textTransform: "none",px:2, fontWeight: 500, fontSize:"16px", bgcolor:"rgba(253, 126, 20, 1)"  }}>
          Add Minerals
        </Button>
      </Box>
    </Paper>
  )
}
