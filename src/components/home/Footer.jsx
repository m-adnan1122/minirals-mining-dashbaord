"use client"

import * as React from "react"
import { Box, Container, Grid, Typography, TextField, Button, Link as MuiLink, IconButton } from "@mui/material"
import FacebookIcon from "@mui/icons-material/Facebook"
import TwitterIcon from "@mui/icons-material/Twitter"
import InstagramIcon from "@mui/icons-material/Instagram"
import YouTubeIcon from "@mui/icons-material/YouTube"

export default function Footer({
  logoSrc ="/Frame3.png",
  logoAlt = "Company logo",
  accentColor = "#FF7A00",
  companyHeading = "Cosmic Frequency Ltd",
  companyLinks = [
    { label: "Our Facilitation Arm", href: "#" },
    { label: "How We Work", href: "#" },
    { label: "Product Video", href: "#" },
    { label: "Contact Us", href: "#" },
  ],
  resourcesHeading = "Resources",
  resourcesLinks = [
    { label: "Partnership", href: "#" },
    { label: "News", href: "#" },
  ],
  social = {
    facebook: "#",
    twitter: "#",
    instagram: "#",
    youtube: "#",
  },
  onSubscribe,
  subscribeLabel = "Subscribe Now",
  emailPlaceholder = "Enter your email address.",
  copyrightText = "© 2025 The Cosmic Frequency Ltd.",
  legalLinks = [
    { label: "All rights reserved", href: "#" },
    { label: "Privacy Policy", href: "#" },
    { label: "Terms of Service", href: "#" },
  ],
}) {
  const [email, setEmail] = React.useState("")

  const handleSubmit = (e) => {
    e.preventDefault()
    if (onSubscribe) onSubscribe(email)
  }

  return (
    <Box component="footer" sx={{ bgcolor: "rgba(30, 30, 30, 1)", color: "#FFFFFF" }}>
      {/* Top accent line */}
      <Box sx={{ height: 4, bgcolor: accentColor }} />

      <Container maxWidth="lg" sx={{ py: { xs: 6, md: 8 } }}>
        <Grid container spacing={13} alignItems="flex-start">
          {/* Left: Logo + Subscribe */}
          <Grid item xs={12} md={4}>
            <Box
              component="img"
              src={logoSrc}
              alt={logoAlt}
              sx={{
                display: "block",
                width: { xs: 200, sm: 240 },
                height: "auto",
                mb: 3,
              }}
            />
            <Box component="form" onSubmit={handleSubmit} noValidate sx={{ maxWidth: 420 }}>
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                   bgcolor: "#FFFFFF",
                   borderRadius:"10px",
                   p:0.8,
                }}
              >
                <TextField
                  fullWidth
                  size="small"
                  variant="outlined"
                  placeholder={emailPlaceholder}
                  aria-label="Email address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  InputProps={{
                    sx: {
                      bgcolor: "#FFFFFF",
                      color: "#111827",
                      borderRadius: 3,
                      "& fieldset": { borderColor: "transparent" },
                    },
                  }}
                />
                <Button
                  type="submit"
                  size="medium"
                  variant="contained"
                  sx={{
                    bgcolor: "#111111",
                    color: "#FFFFFF",
                    px:5,
                    py: 1.5,
                    fontSize:"12px",
                    fontWeight:400,
                      whiteSpace: "nowrap",
                    borderRadius: 3,
                    "&:hover": { bgcolor: "#000000" },
                  }}
                >
                  {subscribeLabel}
                </Button>
              </Box>
            </Box>
          </Grid>

          {/* Middle: Company column */}
          <Grid item xs={12} sm={6} md={3}>
            <Typography variant="subtitle1" sx={{ fontWeight: 700, mb: 2, fontSize:"16px" }}>
              {companyHeading}
            </Typography>
            <Box component="nav" aria-label={`${companyHeading} links`} sx={{ display: "grid", gap: 1.25 }}>
              {companyLinks.map((l) => (
                <MuiLink
                  key={l.label}
                  href={l.href}
                  fontSize={"13px"}
                  fontWeight={500}
                  underline="none"
                  sx={{
                    color: "rgba(255,255,255,0.85)",
                    "&:hover": { color: "#FFFFFF" },
                  }}
                >
                  {l.label}
                </MuiLink>
              ))}
            </Box>
          </Grid>

          {/* Middle: Resources column */}
          <Grid item xs={12} sm={6} md={3}>
            <Typography variant="subtitle1" sx={{ fontWeight: 600, mb: 2 }}>
              {resourcesHeading}
            </Typography>
            <Box component="nav" aria-label={`${resourcesHeading} links`} sx={{ display: "grid", gap: 1.25 }}>
              {resourcesLinks.map((l) => (
                <MuiLink
                  key={l.label}
                  href={l.href}
                  underline="none"
                  sx={{
                    color: "rgba(255,255,255,0.85)",
                    "&:hover": { color: "#FFFFFF" },
                  }}
                >
                  {l.label}
                </MuiLink>
              ))}
            </Box>
          </Grid>

          {/* Right: Social */}
          <Grid item xs={12} md={2}>
            <Typography variant="subtitle1" sx={{ fontWeight: 600, mb: 2 }}>
              Follow us
            </Typography>
            <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
              <IconButton aria-label="Facebook" href={social.facebook} sx={{ color: "#FFFFFF" }}>
                <FacebookIcon fontSize="small" />
              </IconButton>
              <IconButton aria-label="Twitter" href={social.twitter} sx={{ color: "#FFFFFF" }}>
                <TwitterIcon fontSize="small" />
              </IconButton>
              <IconButton aria-label="Instagram" href={social.instagram} sx={{ color: "#FFFFFF" }}>
                <InstagramIcon fontSize="small" />
              </IconButton>
              <IconButton aria-label="YouTube" href={social.youtube} sx={{ color: "#FFFFFF" }}>
                <YouTubeIcon fontSize="small" />
              </IconButton>
            </Box>
          </Grid>
        </Grid>
      </Container>

      {/* Bottom row */}
      <Box
        
      >
        <Container maxWidth="lg" sx={{ py: 3 }}>
          <Grid container spacing={6} alignItems="center" justifyContent={"center"}>
            <Grid item xs={12} md={6}>
              <Typography variant="body2" sx={{ color: "rgba(255,255,255,0.7)" }}>
                {copyrightText}
              </Typography>
            </Grid>
            <Grid
              item
              xs={12}
              md={6}
              sx={{
                display: "flex",
                justifyContent: { xs: "flex-start", md: "flex-end" },
                gap: 3,
              }}
            >
              {legalLinks.map((l) => (
                <MuiLink
                  key={l.label}
                  href={l.href}
                  underline="none"
                  variant="body2"
                  sx={{ color: "rgba(255,255,255,0.85)", "&:hover": { color: "#FFFFFF" } }}
                >
                  {l.label}
                </MuiLink>
              ))}
            </Grid>
          </Grid>
        </Container>
      </Box>
    </Box>
  )
}
