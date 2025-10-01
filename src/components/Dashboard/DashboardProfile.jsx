"use client"

import * as React from "react"
import {
  Avatar,
  Box,
  Card,
  CardContent,
  Divider,
  IconButton,
  Stack,
  Tab,
  Tabs,
  Typography,
  useTheme,
} from "@mui/material"
import EditOutlinedIcon from "@mui/icons-material/EditOutlined"
import PhoneIphoneOutlinedIcon from "@mui/icons-material/PhoneIphoneOutlined"
import MailOutlineOutlinedIcon from "@mui/icons-material/MailOutlineOutlined"
import PlaceOutlinedIcon from "@mui/icons-material/PlaceOutlined"
import FacebookOutlinedIcon from "@mui/icons-material/FacebookOutlined"
import InstagramIcon from "@mui/icons-material/Instagram"
import TwitterIcon from "@mui/icons-material/Twitter"

export default function DashboardProfile() {
  const [tab, setTab] = React.useState("personal")
  const theme = useTheme()

  return (
    <Box
      sx={{
        py: { xs: 3, md: 1 },
        color: "text.primary",
      }}
    >
      <Stack direction="row" gap={{ xs: 3, md: 6 }}>
        {/* Left sidebar */}
        <Stack sx={{ width: { xs: 220, md: "216px" } }} alignItems="center" gap={2.5}>
          <Avatar src="/ProfileDashboard.png" alt="User avatar" sx={{ width: 127, height: 127 }} />
          <Box textAlign="center">
            <Typography variant="h6" fontWeight={700} color="rgba(253, 126, 20, 1)">
              Tope Smith
            </Typography>
            <Typography variant="body2" sx={{ color: "rgba(253, 126, 20, 1)", mt: 0.5 }}>
              Geologist
            </Typography>
          </Box>

          <Stack direction="row" gap={2}>
            <IconButton size="small"sx={{ color:"rgba(253, 126, 20, 1)"}} aria-label="facebook">
              <FacebookOutlinedIcon fontSize="small" />
            </IconButton>
            <IconButton size="small"sx={{ color:"rgba(253, 126, 20, 1)"}} aria-label="instagram">
              <InstagramIcon fontSize="small" />
            </IconButton>
            <IconButton size="small"sx={{ color:"rgba(253, 126, 20, 1)"}} aria-label="twitter">
              <TwitterIcon fontSize="small" />
            </IconButton>
          </Stack>
        </Stack>

        {/* Main content */}
        <Stack flex={1} gap={3} width={"450px"}>
          {/* Tabs */}
    {/* Main content */}
  {/* Tabs */}
  <Tabs
    value={tab}
    onChange={(_, v) => setTab(v)}
    variant="scrollable"
    allowScrollButtonsMobile
    sx={{
      ".MuiTabs-indicator": {
        display: "none", // hide underline
      },
      ".MuiTab-root": {
        textTransform: "none",
        minHeight: 0,
        py: 0.75,
        px: 0,
        mr: 4,
        color: "text.secondary",
        "&.Mui-selected": { 
          color: "rgba(253, 127, 22, 1)", 
          fontWeight: 600 
        },
      },
    }}
  >
    <Tab
      value="personal"
      label={
        <TabLabel
          dot={tab === "personal"}
          color={"rgba(253, 127, 22, 1)"}
          text="Personal Info"
        />
      }
    />
    <Tab
      value="notifications"
      label={
        <TabLabel
          dot={tab === "notifications"}
          color={"rgba(253, 127, 22, 1)"}
          text="Notifications"
        />
      }
    />
    <Tab
      value="setting"
      label={
        <TabLabel
          dot={tab === "setting"}
          color={"rgba(253, 127, 22, 1)"}
          text="Setting"
        />
      }
    />
  </Tabs>

          {/* About me card */}
          <Card
            variant="outlined"
            sx={{
              borderRadius: 2,
              boxShadow: "none",
              width:"550px", 
              backgroundColor: "rgba(247, 247, 247, 1)",    
              border:"none"          
            }}
          >
            <CardHeaderWithEdit title="About Me" />
            <CardContent sx={{ pt: 1.5,  }}        
>
              <Typography variant="body2" sx={{ color: "rgba(49, 49, 49, 1)", lineHeight: 1.7 }}>
                {
                  "I'm Tope Smith, a passionate geologist with extensive experience in mineral exploration, particularly in the captivating landscapes of North Nigeria. Over the years, I've been on the front lines, analyzing geological data, uncovering hidden resources, and contributing to sustainable practices in the field."
                }
              </Typography>

              <Typography variant="body2" sx={{ color: "rgba(49, 49, 49, 1)", mt: 2, lineHeight: 1.7 }}>
                {"Lorem ipsum dolor sit amet consectetur. Quisque."}
              </Typography>
            </CardContent>
          </Card>

          {/* Contact card */}
          <Card
            variant="outlined"
            sx={{
              borderRadius: 2,
              boxShadow: "none",
              width:"550px",
              backgroundColor: "rgba(247, 247, 247, 1)",
                            border:"none"          
       

            }}
          >
            <CardHeaderWithEdit title="Contact Here" />
            <CardContent sx={{ pt: 1 }}>
              <Stack spacing={2.5} >
                <ContactRow icon={<PhoneIphoneOutlinedIcon sx={{ color: "text.secondary" }} />} text="+92 1234567890" />
                <ContactRow icon={<MailOutlineOutlinedIcon sx={{ color: "text.secondary" }} />} text="topesmith@gmail.com" />
                <ContactRow icon={<PlaceOutlinedIcon sx={{ color: "text.secondary" }} />} text="Lagos, Nigeria" />
              </Stack>
            </CardContent>
          </Card>
        </Stack>
      </Stack>
    </Box>
  )
}

function TabLabel({ dot, color, text }) {
  return (
    <Stack direction="row" alignItems="center" gap={1}>
      {dot ? (
        <Box
          component="span"
          sx={{
            width: 6,
            height: 6,
            borderRadius: "50%",
            bgcolor: color || "primary.main",
          }}
        />
      ) : null}
      <Typography variant="body2">{text}</Typography>
    </Stack>
  )
}


function CardHeaderWithEdit({ title }) {
  return (
    <Box sx={{ px: 3, pt: 2.25, pb: 1 }}>
      <Stack direction="row" alignItems="center" justifyContent="space-between">
        <Box>
          <Typography variant="subtitle2" fontWeight={700} fontSize={"14px"}>
            {title}
          </Typography>
          <Box
            sx={{
              mt: 0.5,
              width: 36,
              height: 3,
              bgcolor: "rgba(255, 154, 113, 1)",
              borderRadius: 2,
            }}
          />
        </Box>
        <IconButton size="small" sx={{color: "rgba(255, 154, 113, 1)"}} aria-label="edit">
          <EditOutlinedIcon fontSize="small" />
        </IconButton>
      </Stack>
    </Box>
  )
}

function ContactRow({ icon, text }) {
  return (
    <Stack direction="row" alignItems="center" spacing={2}>
      <Box
        sx={{
          width: 36,
          height: 36,
          borderRadius: 1.5,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexShrink: 0,
          color:"rgba(49, 49, 49, 1)",
        }}
        aria-hidden
      >
        {icon}
      </Box>
      <Typography variant="body2" fontWeight={400} fontSize={"12px"}>{text}</Typography>
    </Stack>
  )
}
