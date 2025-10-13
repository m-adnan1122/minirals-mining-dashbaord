"use client";

import * as React from "react";
import {
  Box,
  Button,
  Container,
  CssBaseline,
  Grid,
  IconButton,
  InputAdornment,
  MenuItem,
  TextField,
  ThemeProvider,
  Tooltip,
  Typography,
  createTheme,
} from "@mui/material";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";

const theme = createTheme({
  typography: {
    fontSize: 14,
  },
  shape: { borderRadius: 12 },
  palette: {
    background: { default: "#f6f6f6" },
    primary: { main: "rgba(253, 126, 20, 1)" }, // orange for "Save Changes"
    error: { main: "rgba(255, 0, 0, 1)" }, // red for "Delete Account"
    text: {
      primary: "#1A1A1A",
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
    MuiSelect: {
      styleOverrides: {
        icon: {
          color: "rgba(253, 126, 20, 1)", // dropdown arrow icon color
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
    MuiPickersDay: {
    styleOverrides: {
      root: {
        // Selected date (when the calendar is opened and a date is already picked)
        "&.Mui-selected": {
          backgroundColor: "#0c8ce9  !important", // 🔥 your orange color
          color: "#fff",
        },

        // Today’s date (the current day highlight)
        "&.MuiPickersDay-today:not(.Mui-selected)": {
          border: "1px solid rgba(253, 126, 20, 1)", // orange ring
        },
      },
    },
  },
  },
});

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
        <Typography
          variant="body2"
          sx={{ fontWeight: 400, fontFamily: "outfit", fontSize: "14px" }}
        >
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
  );
}

export default function Page() {
  const [form, setForm] = React.useState({
    name: "Tope Smith",
    language: "English",
    dob: "",
    country: "United States",
    welcome:
      "👋 Hello Explorer!\n\nI’m Tope Smith, your companion in unraveling the geological wonders of North Nigeria. As a seasoned geologist, my expertise lies in navigating the intricate landscapes of this region, from the vast plains to the rugged terrains.",
    timeFormat: "12h (am/pm)",
    timeZone: "Central Time - US & Canada",
  });

  const handleChange = (key) => (e) => {
    setForm((prev) => ({ ...prev, [key]: e.target.value }));
  };

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <main>
        <Container maxWidth="lg" sx={{ py: { xs: 3, md: 6 } }}>
          <Grid container spacing={5}>
            {/* Left column */}
            <Grid item xs={12} md={8}>
              <Box
                sx={{ display: "flex", flexDirection: "column", gap: 2.5 }}
                width={"450px"}
              >
                <Box>
                  <Label info="Your display name that appears in the app.">
                    Name
                  </Label>
                  <TextField
                    placeholder="Tope Smith"
                    value={form.name}
                    onChange={handleChange("name")}
                  />
                </Box>

                <Box>
                  <Label>Language</Label>
                  <TextField
                    select
                    value={form.language}
                    onChange={handleChange("language")}
                  >
                    {["English", "French", "German", "Spanish"].map((opt) => (
                      <MenuItem key={opt} value={opt}>
                        {opt}
                      </MenuItem>
                    ))}
                  </TextField>
                </Box>

                {/* Date Picker Section */}
         <Box>
  <Label info="Used to personalize your experience.">
    Date Of Birth
  </Label>

  <LocalizationProvider dateAdapter={AdapterDateFns}>
    <DatePicker
      value={form.dob ? new Date(form.dob) : null}
      onChange={(newValue) =>
        setForm((prev) => ({
          ...prev,
          dob: newValue ? newValue.toISOString() : "",
        }))
      }
      slots={{
        openPickerIcon: CalendarMonthIcon, // ✅ Use MUI’s built-in picker toggle icon
      }}
      slotProps={{
        textField: {
          placeholder: "MM/DD/YYYY",
          fullWidth: true,
          InputProps: {
            sx: {
                 bgcolor: "#fff",
              "& .MuiSvgIcon-root": {
                color: "rgba(253, 126, 20, 1)", // orange icon color
              },
            },
          },
        },
      }}
    />
  </LocalizationProvider>
</Box>


                <Box>
                  <Label>Country</Label>
                  <TextField
                    select
                    value={form.country}
                    onChange={handleChange("country")}
                  >
                    {[
                      "United States",
                      "Canada",
                      "Nigeria",
                      "United Kingdom",
                      "Germany",
                      "India",
                    ].map((opt) => (
                      <MenuItem key={opt} value={opt}>
                        {opt}
                      </MenuItem>
                    ))}
                  </TextField>
                </Box>

                <Box sx={{ mt: 1 }}>
                  <Button variant="contained" color="error" sx={{ boxShadow: "none" }}>
                    Delete Account
                  </Button>
                </Box>
              </Box>
            </Grid>

            {/* Right column */}
            <Grid item xs={12} md={6}>
              <Box
                sx={{ display: "flex", flexDirection: "column", gap: 2.5 }}
                width={"450px"}
              >
                <Box>
                  <Label info="This message greets users or appears in your profile.">
                    Welcome Message
                  </Label>
                  <TextField
                    multiline
                    minRows={7}
                    value={form.welcome}
                    onChange={handleChange("welcome")}
                  />
                </Box>

                <Box>
                  <Label>Time Format</Label>
                  <TextField
                    select
                    value={form.timeFormat}
                    onChange={handleChange("timeFormat")}
                  >
                    {["12h (am/pm)", "24h"].map((opt) => (
                      <MenuItem key={opt} value={opt}>
                        {opt}
                      </MenuItem>
                    ))}
                  </TextField>
                </Box>

                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                  }}
                >
                  <Label
                    rightAdornment={
                      <Typography
                        variant="caption"
                        sx={{
                          color: "primary.main",
                          fontWeight: 400,
                          pl: 30,
                        }}
                      >
                        Current Time: 10:02pm
                      </Typography>
                    }
                  >
                    Time Zone
                  </Label>
                </Box>
                <TextField
                  select
                  value={form.timeZone}
                  onChange={handleChange("timeZone")}
                >
                  {[
                    "Central Time - US & Canada",
                    "Pacific Time - US & Canada",
                    "Eastern Time - US & Canada",
                    "Greenwich Mean Time",
                    "West Africa Time",
                  ].map((opt) => (
                    <MenuItem key={opt} value={opt}>
                      {opt}
                    </MenuItem>
                  ))}
                </TextField>

                <Box
                  sx={{
                    display: "flex",
                    gap: 1.5,
                    justifyContent: { xs: "flex-start", md: "flex-end" },
                    mt: 1,
                  }}
                >
                  <Button
                    variant="contained"
                    sx={{
                      color: "#ffffff",
                      boxShadow: "none",
                      height: "46px",
                      ":hover": { boxShadow: "none" },
                    }}
                  >
                    Save Changes
                  </Button>
                  <Button
                    variant="outlined"
                    color="#1A1A1A"
                    sx={{
                      boxShadow: "none",
                      height: "46px",
                      ":hover": { boxShadow: "none" },
                    }}
                  >
                    Cancel
                  </Button>
                </Box>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </main>
    </ThemeProvider>
  );
}
