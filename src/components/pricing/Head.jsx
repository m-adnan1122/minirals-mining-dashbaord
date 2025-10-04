
"use client";
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Box,
  InputBase,
  IconButton,
  Avatar,
  Stack,
  Select,
  MenuItem,
  Divider,
} from "@mui/material";
import {
  Search as SearchIcon,
  Language as LanguageIcon,
} from "@mui/icons-material";
import { useState } from "react";
import { usePathname, useRouter } from "next/navigation";

export default function Head({ selectedTab, setSelectedTab, setProfile }) {  
  const pathname = usePathname();

  // check if current page is /signup
  if (pathname === "/signup") {
    return null; // or <Redirect /> or custom JSX
  }

 

  const [language, setLanguage] = useState("en");
  const router = useRouter();

  const handleChange = (event) => {
    setLanguage(event.target.value);
  };

  // ✅ Define all tabs in one array
  const tabs = [
    { label: "Dashboard", value: "/dashboard", icon: "/icons/dashboard.png" },
    { label: "Data Analysis", value: "/data-analysis", icon: "/icons/Group.png" },
    { label: "Workflow Integration", value: "/workflow", icon: "/icons/work.png" },
    { label: "Data Management", value: "/data-management", icon: "/icons/data.png" },
    { label: "User Management", value: "/user-management", icon: "/icons/user.png" },
    { label: "Settings", value: "/settings", icon: "/icons/setting.png" },
  ];

 const navButtonStyle = (tabName) => ({
  color: selectedTab === tabName ? "black" : "rgba(99, 101, 126, 1)",
  textTransform: "none",
  position: "relative",
  backgroundColor: "transparent",
  paddingBottom: "6px",
  "&:hover": {
    backgroundColor: "transparent",
    color: "black",
    "& .MuiBox-root": {
      filter: "brightness(0) saturate(100%)",
    },
  },
  "&.MuiButton-root::after": {
    content: '""',
    position: "absolute",
    bottom: 0,
    left: 0,
    width: selectedTab === tabName ? "100%" : 0,
    height: "2px",
    backgroundColor: "rgba(253, 126, 20, 1)",
    transition: "width 0.3s ease",
  },
  "&:hover.MuiButton-root::after": {
    width: "100%",
  },
});

  return (
    <AppBar
      position="static"
      sx={{ bgcolor: "background.paper", boxShadow: "none" }}
    >
      <Toolbar sx={{ justifyContent: "space-between", py: 1 }}>
        <Stack direction={"row"}>
          {/* Logo */}
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
            <InputBase
              placeholder="Search here"
              sx={{ color: "rgba(99, 101, 126, 1)", flex: 1 }}
            />
          </Box>
        </Stack>

        {/* Right Side */}
        <Box
          sx={{ display: "flex", alignItems: "center", gap: 2, mr: "80px" }}
        >
          <Button
            variant="contained"
            sx={{
              bgcolor: "rgba(253, 126, 20, 1)",
              color: "primary.contrastText",
              fontWeight: 500,
              fontSize: "12.52px",
              borderRadius: "10px",
              pt: "10px",
            }}
            onClick={()=> router.push("/pricing")}
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

          <IconButton width="20px" height="20px" sx={{ color: "text.secondary" }}>
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

          <Divider sx={{ borderColor: "rgba(3, 73, 163, 1)" }} />
          <IconButton>
                      <Avatar src="/profile.png" sx={{ width: "34.43px", height: "34.43px" }}  onClick={()=> router.push("/profile")} />

          </IconButton>
        </Box>
      </Toolbar>

      {/* Navigation Tabs */}
      <Box sx={{ px: 3, py: 2, backgroundColor: "#fff" }}>
        <Box sx={{ display: "flex", gap: 2, alignItems: "center", ml: "65px" }}>
          {tabs.map((tab) => (
            <Button
              key={tab.value}
              startIcon={
                <Box
                  width="20px"
                  height="20px"
                  sx={{
                    backgroundImage: `url(${tab.icon})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    backgroundRepeat: "no-repeat",
                    transition: "filter 0.3s ease",
                    filter:
                      selectedTab === tab.value
                        ? "brightness(0) saturate(100%)"
                        : "none",
                  }}
                />
              }
              sx={navButtonStyle(tab.value)}
            onClick={() => {
              router.replace(`${tab.value}`)
              
              }}

            >
              {tab.label}
            </Button>
          ))}

          {/* Logout Button */}
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
              sx={navButtonStyle("logout")}
            >
              Logout
            </Button>
          </Box>
        </Box>
      </Box>
    </AppBar>
  );
}
