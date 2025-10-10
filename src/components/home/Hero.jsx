"use client";

import { Box, Button, Container, Stack, Typography } from "@mui/material";

export default function Hero({
  backgroundSrc = "/home1.png",
  onCtaClick,
}) {
  return (
    <Box
      component="section"
      aria-label="Investment hero section"
      sx={{
        position: "relative",
        color: "#fff",
        height: { xs: 420, md: 520, lg:"783px", xl: "1220px" },
        display: "flex",
        alignItems: "center",
        backgroundImage: `
          url(${backgroundSrc})
        `,
        backgroundSize: "cover",
        backgroundPosition: "center",
        overflow: "hidden",
      }}
    >
      <Container maxWidth="lg" sx={{p:0}}>
        <Stack direction="row" spacing={4} alignItems="center">
          <Box sx={{ width:"679px" }}>
            <Typography
              variant="h2"
              component="h1"
              sx={{ fontWeight: 800,fontSize:"73px", letterSpacing: 0.5, mb: 1 }}
            >
              {"Assess then"}
              <br />
              {"Invest"}
            </Typography>

            <Typography
              variant="body1"
              sx={{ opacity: 0.92, mb: 3,fontWeight: 500,fontSize:"18px",  lineHeight: 1.6 }}
            >
              {
                "At The Cosmic Frequency (TCF), our AI-driven platform offers swift access to information, advanced risk assessment tools, and secure mineral transactions via blockchain."
              }
            </Typography>

<Button
  size="large"
  variant="contained"
  onClick={onCtaClick}
  sx={{
    background: "linear-gradient(rgba(255, 255, 255, 1), rgba(241, 250, 255, 1))",
    color: "#111111",
    fontWeight: 700,
    fontSize: "16px",
    borderRadius: "18px",
    px: 4,
    py: 1.5,
    boxShadow: "none",
    transition: "all 0.3s ease",
    "&:hover": {
      background: "rgba(253, 126, 20, 1)", // orange color on hover
      color: "#fff",
      boxShadow: "none",
    },
    "&:active": {
      background: "rgba(253, 126, 20, 1)", // same color when clicked
      color: "#fff",
      boxShadow: "none",
    },
  }}
>
  {"Invest Now"}
</Button>

          </Box>

          {/* Right-side visual space (rocks from the background image remain visible) */}
          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "block" } }} />
        </Stack>
      </Container>
    </Box>
  );
}
