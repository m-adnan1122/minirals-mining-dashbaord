
"use client"
import { Box, Typography, Grid, TextField, Button } from "@mui/material"
import React from "react"


const highlightItems = [
    {
      title: "Gold",
      description:"Survey mineral-rich terrains, and unveil opportunities. Stay updated with real-time gold news, delve into social media trends for industry insights.",
      imageSrc: "/01.png",
    },
    {
      title: "Copper Ore",
      description:"The latest breakthroughs in the copper industry, delve into social media dialogues to track emerging trends, and employ advanced document analysis for strategic insights.",
      imageSrc: "/02.png",
    },
    {
      title: "Lithium Ore",
      description:"Stay charged with the latest buzz in global lithium power interest through real-time industry updates, trending social media discussions, and predictive",
      imageSrc: "/03.png",
    },
    {
      title: "Ruby",
      description: "Trusted companies on our platform adhere to stringent security standards, creating a seamless and protected transaction environment.",
      imageSrc: "/04.png",
    },
    {
      title: "Emerald",
      description: "Ccompanies on our platform adhere to top-notch security standards, crafting a shielded and fluid environment for your transactions. Immerse yourself in the secure charm of blockchain transactions,",
      imageSrc: "/05.png",
    },
    {
      title: "Sapphire",
      description: "Our commitment extends beyond security, with a system exclusively featuring licensed operators and all trades securely recorded on the blockchain while engaging with distinguished companies on our platform.",
      imageSrc: "/06.png",
    },
  ]

  const Images = {
    // Replace with your corner image links if you want decorative images:
    // topLeft: "https://example.com/top-left.png",
    // topRight: "https://example.com/top-right.png",
    // bottomLeft: "https://example.com/bottom-left.png",
    // bottomRight: "https://example.com/bottom-right.png",
  }

const ORANGE = "#FF8A00"
const DARK = "#111111"
const DARKER = "#0A0A0A"
const MUTED = "#B0B0B0"
const WHITE = "#FFFFFF"

export default function Seventh({
  sectionEyebrow = "POWERFUL FEATURES",
  sectionTitle = "Highlights",
  items =  highlightItems ,
  cornerImages = Images,
  showSignup = true,
  signup = {},
}) {

  const {
    heading = "Enter your email to schedule a demo now.",
    subheading = "Accelerate Mineral Exploration With Us. Order Your Trend To Data Dataset.",
    placeholder = "Enter your email address...",
    buttonLabel = "Schedule now",
    onSubmit,
  } = signup

  const handleSubmit = (e) => {
    e.preventDefault()
    const formData = new FormData(e.currentTarget)
    const email = String(formData.get("email") || "")
    if (onSubmit) onSubmit(email)
  }

  return (
    <Box component="section" sx={{  bgcolor: DARK, color: WHITE }}>
     

      <Box
        sx={{
          maxWidth: 1200,
          mx: "auto",
          px: { xs: 2, sm: 3, md: 4 },
          py: { xs: 6, sm: 8 },
        }}
      >
        {/* Header */}
        <Typography
          variant="overline"
          sx={{
            color: "#fff",
            letterSpacing: 1,
            fontWeight: 700,
            display: "block",
            textAlign: "center",
            fontSize:"10.5px",
          }}
        >
          {sectionEyebrow}
        </Typography>

        <Typography
          component="h2"
          variant="h4"
          sx={{
            textAlign: "center",
            fontWeight: 700,
            color: "rgba(253, 126, 20, 1)",
            fontSize:"36px",
            mb: { xs: 4, sm: 10 },
          }}
        >
          {sectionTitle}
        </Typography>

        {/* Grid of Highlights */}
        <Grid container spacing={8} alignItems={"center"} justifyContent={"center"}>
          {items.map((item, idx) => (
            <Grid item xs={12} sm={6} md={4} key={idx} >
              <Box
                sx={{
                  height: "100%",
                  width:"255px",
                  display: "flex",
                  flexDirection: "column",
                  gap: 1.5,
                }}
              >
                <Box
                  sx={{
                    width: 72,
                    height: 72,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <img
                    src={item.imageSrc || "/placeholder.svg?height=72&width=72&query=highlight%20image"}
                    alt={item.imageAlt || `${item.title} image`}
                    style={{
                      maxWidth: "100px",
                      maxHeight: "100px",
                      objectFit: "contain",
                    }}
                    crossOrigin="anonymous"
                  />
                </Box>
                <Typography variant="h6" sx={{ fontWeight: 700, fontSize: "18px", color:"rgba(253, 126, 20, 1)" ,textAlign:"left",  }}>
                  {item.title}
                </Typography>
                <Typography variant="body2" sx={{ color: "rgba(173, 173, 173, 1)",textAlign:"left", lineHeight: 1.6, fontWeight: 400, fontSize: "16px", }}>
                  {item.description}
                </Typography>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Box>

      {/* Signup Section */}
      {showSignup && (
        <Box pl={2} sx={{ bgcolor: "rgba(253, 126, 20, 1)", color: DARK, py: { xs: 4, sm: 6 } }}>
          <Box
            sx={{
              maxWidth: 1200,
              mx: "auto",
              px: { xs: 2, sm: 3, md: 4 },
              display: "flex",
              gap: 3,
              flexDirection: { xs: "column", md: "row" },
              alignItems: { xs: "stretch", md: "center" },
              justifyContent: "space-between",
            }}
          >
            <Box sx={{ flex: 1, minWidth: 0 }}>
              <Typography component="h3" variant="h5" sx={{ fontWeight: 700, mb: 0.5, fontSize:"46px" }}>
                {heading}
              </Typography>
              {subheading && (
                <Typography variant="body2" sx={{ color: "rgba(24, 24, 24, 1)", fontWeight: 500, mb: 0.5, fontSize:"15px" }}>
                  {subheading}
                </Typography>
              )}
            </Box>

            <Box
              component="form"
              onSubmit={handleSubmit}
              sx={{ display: "flex", gap: 1.5, flex: 1,  bgcolor: WHITE, borderRadius:"11px", p:1 }}
            >
       <TextField
  name="email"
  type="email"
  required
  fullWidth
  placeholder={placeholder}
  variant="outlined"
  sx={{
    "& .MuiOutlinedInput-root": {
      "& fieldset": { border: "none" }, // removes the outline border
      "&:hover fieldset": { border: "none" }, // no border on hover
      "&.Mui-focused fieldset": { border: "none" }, // no border on focus
      bgcolor: "white",
      borderRadius: 1,
    },
  }}
/>

              <Button
                type="submit"
                variant="contained"
                             sx={{
                  bgcolor: DARK,
                  color: WHITE,
                  "&:hover": { bgcolor: "#000" },
                  px: 5,
                  py:0.5,
                  height:"42px",
                  borderRadius:"9px",
                  whiteSpace: "nowrap",
                  fontWeight:400,
                  fontSize:"15px",
                  mt:1
                }}
              >
                {"Subscibe Now"}
              </Button>
            </Box>
          </Box>
        </Box>
      )}

      
    </Box>
  )
}
