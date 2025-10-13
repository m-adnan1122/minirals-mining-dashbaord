
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

export default function HomeHeader({ selectedTab, setSelectedTab, setProfile }) {  
  const pathname = usePathname();

  const [language, setLanguage] = useState("en");
  const router = useRouter();

  const handleChange = (event) => {
    setLanguage(event.target.value);
  };

  // ✅ Define all tabs in one array
  const tabs = [
    { label: "Dashboard", value: "/dashboard", icon: "/icons/dashboard.png" },
    { label: "Data Analysis", value: "/data-analysis", icon: "/icons/data-analysis.png" },
    { label: "Workflow Integration", value: "0", icon: "/icons/work.png" },
    { label: "Data Management", value: "0", icon: "/icons/data.png" },
    { label: "User Management", value: "0", icon: "/icons/user.png" },
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
      sx={{ bgcolor: "background.paper", boxShadow: "none",width:"auto" }}
    >
      <Toolbar  sx={{ justifyContent: "space-between", py: 2 }}>
        <Stack direction={"row"}>
          {/* Logo */}
          <Box
            ml={"64px"}
            width="113px"
            height="64px"
            sx={{
              backgroundImage: `url('/company-logo.png')`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
            }}
          />
       </Stack>

        {/* Right Side */}
        <Box
          sx={{ display: "flex", alignItems: "center", gap: 2, mr: "64px" }}
        >
          <Button
  variant="contained"
  sx={{
    bgcolor: "#fff",
    color: "rgba(99, 101, 126, 1)",
    fontWeight: 500,
    fontSize: "16px",
    borderRadius: "10px",
    pt: "10px",
    boxShadow: "none",
    textTransform: "none",
    '&:hover': {
      boxShadow: 'none', // remove shadow on hover
      color: 'rgba(253, 126, 20, 1)', // change text color
      bgcolor: '#fff', // keep background same
    },
    '&:active': {
      boxShadow: 'none', // remove shadow on click
      color: 'rgba(253, 126, 20, 1)', // same color on click
      bgcolor: '#fff',
    },
  }}
  onClick={() => router.push("/")}
>
  Our Facilitation Arm
</Button>
          <Button
  variant="contained"
  sx={{
    bgcolor: "#fff",
    color: "rgba(99, 101, 126, 1)",
    fontWeight: 500,
    fontSize: "16px",
    borderRadius: "10px",
    pt: "10px",
    boxShadow: "none",
    textTransform: "none",
    '&:hover': {
      boxShadow: 'none', // remove shadow on hover
      color: 'rgba(253, 126, 20, 1)', // change text color
      bgcolor: '#fff', // keep background same
    },
    '&:active': {
      boxShadow: 'none', // remove shadow on click
      color: 'rgba(253, 126, 20, 1)', // same color on click
      bgcolor: '#fff',
    },
  }}
  onClick={() => router.push("/")}
>
   Drone Leasing
</Button>


          <Stack direction={"row"}>
            <IconButton sx={{ color: "text.secondary", position: "relative", right: -10 }}>
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
              fontSize: "16px",
              fontWeight: 500,
              "& fieldset": { border: "none" },
                 }}
    MenuProps={{
      disableScrollLock: true, // prevents body shift
      PaperProps: {
        sx: {
          zIndex: 2000,   // make sure dropdown floats above Risk Map
          width: 80,     // or match parent width
        },
      },
    
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
          </Stack>

                    <Button
  variant="contained"
  sx={{
    bgcolor: "#fff",
    color: "rgba(99, 101, 126, 1)",
    fontWeight: 500,
    fontSize: "16px",
    borderRadius: "10px",
    pt: "10px",
    boxShadow: "none",
    textTransform: "none",
    '&:hover': {
      boxShadow: 'none', // remove shadow on hover
      color: 'rgba(253, 126, 20, 1)', // change text color
      bgcolor: '#fff', // keep background same
    },
    '&:active': {
      boxShadow: 'none', // remove shadow on click
      color: 'rgba(253, 126, 20, 1)', // same color on click
      bgcolor: '#fff',
    },
  }}
  onClick={() => router.push("/")}
>
   Login
</Button>

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

          <IconButton>
                      <Avatar src="/profile.png" sx={{ width: "44px", height: "44px" }}  onClick={()=> router.push("/profile")} />

          </IconButton>
        </Box>
      </Toolbar>
    </AppBar>
  );
}
