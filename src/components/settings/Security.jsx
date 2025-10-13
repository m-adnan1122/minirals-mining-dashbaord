
"use client"

import * as React from "react"
import {
  Box,
  Button,
  Container,
  CssBaseline,
  IconButton,
  InputAdornment,
  TextField,
  ThemeProvider,
  Tooltip,
  Typography,
  createTheme,
  Chip,
  Divider,
  FormControlLabel,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Paper,
  Stack,
  Switch,
} from "@mui/material"
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined"
import Visibility from "@mui/icons-material/Visibility"
import VisibilityOff from "@mui/icons-material/VisibilityOff"
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos"

const theme = createTheme({
  typography: {
    fontSize: 14,
  },
  shape: { borderRadius: 12 },
  palette: {
    background: { default: "#f6f6f6" },
    primary: { main: "#f97316" }, // orange for "Save Changes"
    error: { main: "#ef4444" }, // red for "Delete Account"
    text: {
      primary: "#111827",
      secondary: "#6b7280",
    },
    divider: "#e5e7eb",
  },
  components: {
    MuiTextField: {
      defaultProps: {
        variant: "outlined",
        fullWidth: true,
      },
    },
    MuiOutlinedInput: {
      styleOverrides: {
        root: {
          backgroundColor: "#ffffff",
        },
        notchedOutline: {
          borderColor: "#e5e7eb",
        },
        input: {
          paddingTop: 12,
          paddingBottom: 12,
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: "none",
          borderRadius: 12,
          paddingLeft: 20,
          paddingRight: 20,
          height: 44,
        },
      },
    },
  },
})

function Label({ children, info, rightAdornment }) {
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        mb: 0.75,
      }}
    >
      <Box sx={{ display: "flex", alignItems: "center", gap: 0.5 }}>
        <Typography  variant="body2" sx={{ fontWeight: 600, color: "black" }}>
          {children}
        </Typography>
        {info ? (
          <Tooltip title={info}>
            <IconButton size="small" aria-label="info">
              <InfoOutlinedIcon fontSize="inherit" />
            </IconButton>
          </Tooltip>
        ) : null}
      </Box>
      {rightAdornment || null}
    </Box>
  )
}

export default function Security() {
  const [form, setForm] = React.useState({
    username: "thegriffster11",
    email: "topesmith@designdrops.io",
    password: "password123",
    restrictProfiles: true,
  })
  const [showPassword, setShowPassword] = React.useState(false)

  const handle = (key) => (e) => {
    setForm((prev) => ({ ...prev, [key]: e.target.value }))
  }

  return (
    <Stack alignItems={{xl: "center"}}>
      <ThemeProvider theme={theme}>
        <Container  maxWidth={"lg"} al sx={{ py: { xs: 3, md: 4 } }}>
          <Stack spacing={2.5} width={"654px"}>
            {/* Username */}
            <Box>
              <Label>Username</Label>
              <TextField
                value={form.username}
                onChange={handle("username")}
                placeholder="#thegriffster11"
                helperText={`Your Dribbble URL: https://dribbble.com/${form.username || "thegriffster11"}`}
              />
            </Box>

            {/* Email */}
            <Box>
              <Label>Email</Label>
              <TextField
                type="email"
                value={form.email}
                onChange={handle("email")}
                placeholder="topesmith@designdrops.io"
              />
            </Box>

            {/* Password with visibility toggle */}
            <Box>
              <Label>Password</Label>
              <TextField
                type={showPassword ? "text" : "password"}
                value={form.password}
                onChange={handle("password")}
                placeholder="••••••••"
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <IconButton
                        aria-label={showPassword ? "Hide password" : "Show password"}
                        onClick={() => setShowPassword((v) => !v)}
                        edge="end"
                      >
                        {showPassword ? <VisibilityOff /> : <Visibility />}
                      </IconButton>
                    </InputAdornment>
                  ),
                }}
              />
            </Box>

            {/* Subscription card */}
            <Paper variant="outlined" sx={{ borderRadius: "4px", overflow: "hidden" }}>
              <Box sx={{ bgcolor: "primary.main", color: "#fff", px: 2, py: 1 }}>
                <Typography variant="body2" sx={{ fontWeight: 700 }}>
                  Subscription
                </Typography>
              </Box>
              <List disablePadding>
                <ListItemButton divider>
                  <ListItemText primary="Premium (Annual)" primaryTypographyProps={{ fontWeight: 600 }} />
                  <ListItemIcon sx={{ minWidth: 32 }}>
                    <ArrowForwardIosIcon fontSize="small" sx={{ color: "text.secondary" }} />
                  </ListItemIcon>
                </ListItemButton>
                <ListItemButton>
                  <ListItemText primary="Billing History" />
                  <ListItemIcon sx={{ minWidth: 32 }}>
                    <ArrowForwardIosIcon fontSize="small" sx={{ color: "text.secondary" }} />
                  </ListItemIcon>
                </ListItemButton>
              </List>
            </Paper>

            {/* Restrict Profile Creation */}
            <Box
              sx={{
                display: "flex",
                alignItems: "flex-start",
                justifyContent: "space-between",
                gap: 2,
              }}
            >
              <Box>
                <Typography variant="body2" sx={{ fontWeight: 700, mb: 0.5 }}>
                  Restrict Profile Creation
                </Typography>
                <Typography variant="caption" color="text.secondary">
                  Creating new profiles will require a password.
                </Typography>
              </Box>
              <FormControlLabel
                control={
                  <Switch
                    checked={form.restrictProfiles}
                    onChange={(_, c) => setForm((p) => ({ ...p, restrictProfiles: c }))}
                  />
                }
                label=""
                sx={{ m: 0 }}
              />
            </Box>

            {/* Delete Account */}
            <Box>
              <ListItemButton sx={{ px: 0, color: "primary.main", maxWidth: "100%" }}>
                <ListItemText primary="Delete Account" primaryTypographyProps={{ fontWeight: 700 }} />
                <ListItemIcon sx={{ minWidth: 28 }}>
                  <ArrowForwardIosIcon fontSize="small" color="primary" />
                </ListItemIcon>
              </ListItemButton>
              <Typography variant="caption" color="text.secondary">
                To manage parental controls for profiles on your account, visit Edit Profiles and select a Profile.
              </Typography>
            </Box>

            {/* Disable ads */}
            <Box>
              <Box sx={{ display: "flex", alignItems: "center", gap: 1, mb: 0.5 }}>
                <Typography variant="body2" sx={{ fontWeight: 700 }}>
                  Disable ads
                </Typography>
                <Chip size="small" color="primary" variant="filled" label="Pro"   sx={{ color: "#ffff" }} // text color
 />
              </Box>
              <Typography variant="caption" color="text.secondary">
                With a Pro or Pro Business account, you can disable ads across the site.
              </Typography>
            </Box>


            {/* Actions */}
            <Box sx={{ display: "flex", justifyContent: "flex-end", gap: 1.5 }}>
              <Button variant="contained" color="primary"   sx={{color:"#fff", boxShadow:"none", height:"46px", ":hover":{boxShadow:"none"}}} // text color
>
                Save Changes
              </Button>
            </Box>
          </Stack>
        </Container>
    </ThemeProvider>
    </Stack>
  )
}
