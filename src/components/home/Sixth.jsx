"use client"
import { Box, Typography } from "@mui/material"

const ORANGE = "rgba(253, 126, 20, 1)"
const DARK = "rgba(0, 0, 0, 1)"
const MUTED = "#666666"


export default function Sixth({
  centerImageSrc = "/tabs2.png",
  centerImageAlt = "Center logo",
}) {
  return (
    <Box
      component="section"
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        py: { xs: 4, sm: 6 },
        color: DARK,
        height:"850px",
      }}
    >
      {/* Header */}
      <Typography
        component="h2"
        variant="h4"
        sx={{
          fontWeight: 700,
          textAlign: "center",
          color: ORANGE,
          letterSpacing: 0.2,
          fontSize:"36px",
        }}
      >
        Navigation and Usage
      </Typography>
      <Typography
        component="p"
        variant="body1"
        mb={14}
        sx={{ textAlign: "center", color: MUTED, maxWidth: 720, fontWeight: 500, fontSize: "10.5px" }}
      >
        Understand the step-by-step operations of our platform.
      </Typography>

      {/* Diagram */}
      <Box
        sx={{
          position: "relative",
          "--ring-size": { xs: "360px", sm: "520px", md:"923px" },
          width: "var(--ring-size)",
          height: "var(--ring-size)",
        }}
      >


        {/* Center image */}
        <Box
          sx={{
            position: "absolute",
            top: "40%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: { xs: "46%", sm: "42%" , md: "100%"},
            height: { xs: "46%", sm: "42%", md: "100%" },
            overflow: "hidden",
          }}
        >
          <img
            src={centerImageSrc || "/placeholder.svg"}
            alt={centerImageAlt}
            style={{
              width: "100%",
              height: "100%",
              objectFit: "contain",
              display: "block",
            }}
            crossOrigin="anonymous"
          />
        </Box>
      </Box>
    </Box>
  )
}
