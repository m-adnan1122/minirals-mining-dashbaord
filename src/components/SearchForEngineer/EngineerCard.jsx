"use client"

import { Card, CardMedia, CardContent, CardActions, Chip, Typography, Button, Box } from "@mui/material"
import ArrowForwardIcon from "@mui/icons-material/ArrowForward"

export function EngineerCard({
  imageSrc = "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-iPwNJLJJ9F7ovrFoLGqLmQrLgiGhrH.png",
  name = "Bayo Adams",
  role = "Certified Structural Engineer",
  description = "Experienced engineer specializing in structural analysis and safety assessments.",
  topBadge = "Top Rated",
}) {
  return (
    <Card
      elevation={0}
      sx={{
        borderRadius: 2,
        border: "1px solid",
        borderColor: "divider",
        overflow: "hidden",
        height: "100%",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <Box sx={{ position: "relative" }}>
        <Chip
          label={topBadge}
          size="small"
          color="warning"
          sx={{
            position: "absolute",
            top: 8,
            left: 8,
            zIndex: 1,
            fontWeight: 700,
            "& .MuiChip-label": { px: 1, py: 0.25 },
          }}
        />
        <CardMedia component="img" height="160" image={imageSrc} alt={`${name} profile`} sx={{ objectFit: "cover" }} />
      </Box>

      <CardContent sx={{ flexGrow: 1, p: 2 }}>
        <Typography variant="subtitle1" sx={{ fontWeight: 700 }}>
          {name}
        </Typography>
        <Typography variant="body2" sx={{ color: "warning.main", fontWeight: 700, mt: 0.5 }}>
          {role}
        </Typography>
        <Typography variant="body2" color="text.secondary" sx={{ mt: 1 }}>
          {description}
        </Typography>
      </CardContent>

      <CardActions sx={{ p: 2, pt: 0 }}>
        <Button
          fullWidth
          variant="contained"
          color="warning"
          endIcon={<ArrowForwardIcon />}
          sx={{ textTransform: "none", fontWeight: 700 }}
        >
          View Now
        </Button>
      </CardActions>
    </Card>
  )
}
