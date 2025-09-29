"use client"
import { AppBar, Toolbar, Typography, Button, Box, InputBase, IconButton, Avatar, Stack, Select, MenuItem, Divider } from "@mui/material"
import {
  Search as SearchIcon,
  Dashboard as DashboardIcon,
  Analytics as AnalyticsIcon,
  IntegrationInstructions as IntegrationIcon, // ✅ use this instead
  Storage as StorageIcon,
  People as PeopleIcon,
  Settings as SettingsIcon,
  Language as LanguageIcon,
  Notifications as NotificationsIcon,
  Logout as LogoutIcon,
} from "@mui/icons-material";
import { useState } from "react";

export default function Head() {
    const [language, setLanguage] = useState("en");

  const handleChange = (event) => {
    setLanguage(event.target.value);
  };
  return (
    <AppBar
      position="static"
      sx={{ bgcolor: "background.paper", boxShadow: "none",  }}
    >
      <Toolbar sx={{justifyContent:"space-between", py: 1 }}>
       <Stack direction={"row"}>
         <Box
        ml={"64px"}
  width="79px"
  height="45px"
  sx={{
    backgroundImage: `url('/logo.png')`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
  }}
/>

             {/* Search Bar */}
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            bgcolor: "background.default",
            borderRadius: "6.85px",
            border: "1px solid rgba(226, 232, 240, 1)",
            px: 2,
            py: 0.5,
            minWidth: 300,
            ml: "90px",
          }}
        >
          <SearchIcon sx={{ color: "rgba(99, 101, 126, 1)", mr: 1 }} />
          <InputBase placeholder="Search here" sx={{ color: "rgba(99, 101, 126, 1)", flex: 1 }} />
        </Box>
       </Stack>

        {/* Right Side */}
        <Box sx={{ display: "flex", alignItems: "center", gap: 2  , mr:"80px" }}>
          <Button
            variant="contained"
            sx={{
              bgcolor: "rgba(253, 126, 20, 1)",
              color: "primary.contrastText",
              fontWeight: 500,
              fontSize: "12.52px",
              borderRadius: "10px",
              pt:"10px",
            }}
          >
            Pro Subscription
          </Button>
          <IconButton sx={{ color: "text.secondary" }}>
        <LanguageIcon />
      </IconButton>

      {/* Language Dropdown */}
      <Select
        value={language}
        onChange={handleChange}
        variant="outlined"
        sx={{
          backgroundColor: "#fff",
          borderRadius: "8px",
          fontSize: "14px",
          "& fieldset": { border: "none" }, 
        }}
      >
        <MenuItem value="en">
          <Typography variant="body2" sx={{ color: "text.secondary" }}>
            English
          </Typography>
        </MenuItem>
        <MenuItem value="fr">
          <Typography variant="body2" sx={{ color: "text.secondary" }}>
            French
          </Typography>
        </MenuItem>
        <MenuItem value="de">
          <Typography variant="body2" sx={{ color: "text.secondary" }}>
            German
          </Typography>
        </MenuItem>
      </Select>
          <IconButton   width="20px"
          height="20px"  sx={{ color: "text.secondary" }}>
           <Box
   width="20px"
  height="20px"
  sx={{
    backgroundImage: `url('/bell.png')`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
  }}
/>
          </IconButton>
            <Divider
      sx={{
        borderColor: "rgba(3, 73, 163, 1)",
      }}
    />
          <Avatar src="/profile.png" sx={{ width: 34, height: 32 }} />
        </Box>
      </Toolbar>

      {/* Navigation Tabs */}
    <Box sx={{ px: 3, py: 2, backgroundColor: "#fff" }}>
      <Box sx={{ display: "flex", gap: 2, alignItems: "center", ml: "65px" }}>
        
        {/* Dashboard */}
        <Button
          startIcon={
            <Box
              width="20px"
              height="20px"
              sx={{
                backgroundImage: "url('/icons/dashboard.png')",
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
                transition: "filter 0.3s ease",
              }}
            />
          }
          sx={{
            color: "rgba(99, 101, 126, 1)",
            textTransform: "none",
            position: "relative",
            backgroundColor: "transparent",
            "&:hover": {
              backgroundColor: "transparent",
              color: "black",
              "& .MuiBox-root": {
                filter: "brightness(0) saturate(100%)", // icon turns black
              },
            },
            "&::after": {
              content: '""',
              position: "absolute",
              bottom: 0,
              left: 0,
              width: 0,
              height: "2px",
              backgroundColor: "rgba(253, 126, 20, 1)",
              transition: "width 0.3s ease",
            },
            "&:hover::after": {
              width: "100%",
            },
          }}
        >
          Dashboard
        </Button>

        {/* Data Analysis */}
        <Button
          startIcon={
            <Box
              width="20px"
              height="16px"
              sx={{
                backgroundImage: "url('/icons/Group.png')",
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
                transition: "filter 0.3s ease",
              }}
            />
          }
          sx={{
            color: "rgba(99, 101, 126, 1)",
            textTransform: "none",
            position: "relative",
            backgroundColor: "transparent",
            "&:hover": {
              backgroundColor: "transparent",
              color: "black",
              "& .MuiBox-root": {
                filter: "brightness(0) saturate(100%)",
              },
            },
            "&::after": {
              content: '""',
              position: "absolute",
              bottom: 0,
              left: 0,
              width: 0,
              height: "2px",
              backgroundColor: "rgba(253, 126, 20, 1)",
              transition: "width 0.3s ease",
            },
            "&:hover::after": {
              width: "100%",
            },
          }}
        >
          Data Analysis
        </Button>

        {/* Workflow Integration */}
        <Button
          startIcon={
            <Box
              width="20px"
              height="20px"
              sx={{
                backgroundImage: "url('/icons/work.png')",
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
                transition: "filter 0.3s ease",
              }}
            />
          }
          sx={{
            color: "rgba(99, 101, 126, 1)",
            textTransform: "none",
            position: "relative",
            backgroundColor: "transparent",
            "&:hover": {
              backgroundColor: "transparent",
              color: "black",
              "& .MuiBox-root": {
                filter: "brightness(0) saturate(100%)",
              },
            },
            "&::after": {
              content: '""',
              position: "absolute",
              bottom: 0,
              left: 0,
              width: 0,
              height: "2px",
              backgroundColor: "rgba(253, 126, 20, 1)",
              transition: "width 0.3s ease",
            },
            "&:hover::after": {
              width: "100%",
            },
          }}
        >
          Workflow Integration
        </Button>

        {/* Data Management */}
        <Button
          startIcon={
            <Box
              width="20px"
              height="20px"
              sx={{
                backgroundImage: "url('/icons/data.png')",
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
                transition: "filter 0.3s ease",
              }}
            />
          }
          sx={{
            color: "rgba(99, 101, 126, 1)",
            textTransform: "none",
            position: "relative",
            backgroundColor: "transparent",
            "&:hover": {
              backgroundColor: "transparent",
              color: "black",
              "& .MuiBox-root": {
                filter: "brightness(0) saturate(100%)",
              },
            },
            "&::after": {
              content: '""',
              position: "absolute",
              bottom: 0,
              left: 0,
              width: 0,
              height: "2px",
              backgroundColor: "rgba(253, 126, 20, 1)",
              transition: "width 0.3s ease",
            },
            "&:hover::after": {
              width: "100%",
            },
          }}
        >
          Data Management
        </Button>

        {/* User Management */}
        <Button
          startIcon={
            <Box
              width="20px"
              height="20px"
              sx={{
                backgroundImage: "url('/icons/user.png')",
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
                transition: "filter 0.3s ease",
              }}
            />
          }
          sx={{
            color: "rgba(99, 101, 126, 1)",
            textTransform: "none",
            position: "relative",
            backgroundColor: "transparent",
            "&:hover": {
              backgroundColor: "transparent",
              color: "black",
              "& .MuiBox-root": {
                filter: "brightness(0) saturate(100%)",
              },
            },
            "&::after": {
              content: '""',
              position: "absolute",
              bottom: 0,
              left: 0,
              width: 0,
              height: "2px",
              backgroundColor: "rgba(253, 126, 20, 1)",
              transition: "width 0.3s ease",
            },
            "&:hover::after": {
              width: "100%",
            },
          }}
        >
          User Management
        </Button>

        {/* Settings */}
        <Button
          startIcon={
            <Box
              width="20px"
              height="20px"
              sx={{
                backgroundImage: "url('/icons/setting.png')",
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
                transition: "filter 0.3s ease",
              }}
            />
          }
          sx={{
            color: "rgba(99, 101, 126, 1)",
            textTransform: "none",
            position: "relative",
            backgroundColor: "transparent",
            "&:hover": {
              backgroundColor: "transparent",
              color: "black",
              "& .MuiBox-root": {
                filter: "brightness(0) saturate(100%)",
              },
            },
            "&::after": {
              content: '""',
              position: "absolute",
              bottom: 0,
              left: 0,
              width: 0,
              height: "2px",
              backgroundColor: "rgba(253, 126, 20, 1)",
              transition: "width 0.3s ease",
            },
            "&:hover::after": {
              width: "100%",
            },
          }}
        >
          Settings
        </Button>

        {/* Logout */}
        <Box sx={{ ml: "148px" }}>
          <Button
            startIcon={
              <Box
                width="20px"
                height="20px"
                sx={{
                  backgroundImage: "url('/icons/logout.png')",
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  backgroundRepeat: "no-repeat",
                  transition: "filter 0.3s ease",
                }}
              />
            }
            sx={{
              color: "rgba(99, 101, 126, 1)",
              textTransform: "none",
              position: "relative",
              backgroundColor: "transparent",
              "&:hover": {
                backgroundColor: "transparent",
                color: "black",
                "& .MuiBox-root": {
                  filter: "brightness(0) saturate(100%)",
                },
              },
              "&::after": {
                content: '""',
                position: "absolute",
                bottom: 0,
                left: 0,
                width: 0,
                height: "2px",
                backgroundColor: "rgba(253, 126, 20, 1)",
                transition: "width 0.3s ease",
              },
              "&:hover::after": {
                width: "100%",
              },
            }}
          >
            Logout
          </Button>
        </Box>
      </Box>
    </Box>
    </AppBar>
  )
}
