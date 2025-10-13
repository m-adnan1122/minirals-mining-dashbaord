"use client";

import * as React from "react";
import {
  ThemeProvider,
  createTheme,
  CssBaseline,
  Container,
  Box,
  Stack,
  Typography,
  Tabs,
  Tab,
  IconButton,
  ToggleButtonGroup,
  ToggleButton,
  Grid,
  Card,
  CardContent,
  Avatar,
  Button,
  Chip,
  Divider,
  Badge,
} from "@mui/material";
import {
  ViewModule as ViewModuleIcon,
  ViewList as ViewListIcon,
  Bolt as BoltIcon,
  ArrowForward as ArrowForwardIcon,
  MoreHoriz as MoreHorizIcon,
  ViewModule,
  ViewList,
} from "@mui/icons-material";

const theme = createTheme({
  palette: {
    mode: "light",
    primary: { main: "#ff7a00" },
    text: {
      primary: "#171717",
      secondary: "#6b7280",
    },
    divider: "rgba(0,0,0,0.08)",
    background: {
      default: "#f6f7f9",
      paper: "#ffffff",
    },
  },
  shape: { borderRadius: 12 },
  typography: {
    fontFamily: "Outfit",
    h4: { fontWeight: 800 },
    subtitle1: { fontWeight: 700 },
    button: { textTransform: "none", fontWeight: 700 },
  },
  components: {
    MuiCard: {
      styleOverrides: {
        root: {
          border: "1px solid rgba(0,0,0,0.08)",
          boxShadow:
            "0 1px 1px rgba(0,0,0,0.02), 0 2px 6px rgba(0,0,0,0.04), inset 0 0 0 1px rgba(255,255,255,0.4)",
        },
      },
    },
  },
});

const INTEGRATIONS = [
  {
    id: "quickbooks",
    name: "Intuit QuickBooks",
    description:
      "QuickBooks is an accounting software package developed and marketed by Intuit.",
    logoQuery: "/integration/6.png",
    initials: "qb",
    category: "Finance",
  },
  {
    id: "bigcommerce",
    name: "BigCommerce",
    description:
      "BigCommerce is a leading e-commerce software platform that provides startups and established companies with everything they need to build a better online business.",
    logoQuery: "/integration/5.png",
    initials: "bc",
    category: "All Integrations",
  },
  {
    id: "netsuite",
    name: "NetSuite",
    description:
      "Make smarter, faster decisions using the world's most deployed cloud ERP suite.",
    logoQuery: "/integration/4.png",
    initials: "nt",
    category: "All Integrations",
    connected: true,
  },
  {
    id: "mailchimp",
    name: "Mailchimp",
    description:
      "Mailchimp makes it easy to sell stuff online, even if you don't have an e-commerce store.",
    logoQuery: "/integration/7.png",
    initials: "mc",
    category: "Communications",
  },
  {
    id: "excel",
    name: "Microsoft Excel",
    description: "Excel learns your patterns, organizing your data to save you time.",
    logoQuery: "/integration/1.png",
    initials: "xl",
    category: "All Integrations",
  },
  {
    id: "salesforce",
    name: "Salesforce",
    description:
      "Salesforce offers a wide variety of CRM categories and systems to meet your needs.",
    logoQuery: "/integration/2.png",
    initials: "sf",
    category: "All Integrations",
  },
];

const tabsData = [
  { label: 'All Integrations', value: 'All Integrations', count: 6 },
  { label: 'Finance', value: 'Finance', count: 1 },
  { label: 'Communications', value: 'Communications', count: 1 },
  { label: 'Storage', value: 'Storage', count: 0 },
]

 

const PillTabs = ({ value, onChange }) => {
  return (
    <Tabs
      value={value}
      onChange={(_, v) => onChange(v)}
      TabIndicatorProps={{ style: { display: 'none' } }}
      sx={{
        minHeight: 0,
        '& .MuiTab-root': {
          minHeight: 0,
          height: 32,
          px: 1.5,
          mx: 0.75,
          borderRadius: '8px',
          fontWeight: 400,
          fontSize: '14px',
          color: 'rgba(24, 24, 27, 1)',
          textTransform: 'none',
        },
        '& .MuiTab-root.Mui-selected': {
          bgcolor: 'primary.main',
          color: 'rgba(255, 255, 255, 1)',
        },
      }}
    >
      {tabsData.map((tab) => {
        const isSelected = value === tab.value
        return (
          <Tab
            key={tab.value}
            disableRipple
            value={tab.value}
            label={
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, pr:1 }}>
                {tab.label}
                {isSelected && (
                  <Badge
                    badgeContent={tab.count}
                    color="default"
                    sx={{
                      '& .MuiBadge-badge': {
                        backgroundColor: 'rgba(255, 255, 255, 1)',
                        color: 'rgba(24, 24, 27, 1)',
                        fontSize: '0.65rem',
                        height: 16,
                        width: 16,
                        px: 0.5,
                      },
                    }}
                  />
                )}
              </Box>
            }
          />
        )
      })}
    </Tabs>
  )
}

function IntegrationCard({ item, view  }) {
  return (
    <Card sx={{ height: "100%", borderRadius: "8px", mt: 2 }} variant="outlined" >
      <CardContent
        sx={{ p: 2.5, pl:3, display: "flex", flexDirection: "column", gap: 1,  width: view === "grid"? "290px": "900px",
              height: "200px", pt:3 }}
      >
        <Stack  spacing={1} >
          <Avatar
            variant="rounded"
            src={`${item.logoQuery}`}
            alt={`${item.name} logo`}
            sx={{
              width: 32,
              height: 32,
              borderRadius: 0,
              color: "text.primary",
              fontSize: 14,
              fontWeight: 700,
              textTransform: "uppercase",
            }}
          >
            {item.initials}
          </Avatar>
          <Typography variant="subtitle1" sx={{  
                fontWeight: 500,
                fontSize: "18px",}}>{item.name}</Typography>
        </Stack>

        <Typography
          variant="body2"
          color="text.secondary"
          sx={{
            display: "-webkit-box",
            WebkitBoxOrient: "vertical",
            WebkitLineClamp: 2,
            overflow: "hidden",
            minHeight: 40,
                fontWeight: 400,
                fontSize: "14px",
          }}
        >
          {item.description}
        </Typography>


        <Stack direction="row" spacing={2} alignItems="center">
          {item.connected ? (
            <Chip
              label="Connected"
              color="primary"
              size="small"
              sx={{
                color: "#fff",
                bgcolor:"rgba(253, 126, 20, 1)",
                fontWeight: 400,
                                boxShadow: "3",                fontSize: "12px",
                borderRadius: "8px",
                height: 28,
                "& .MuiChip-label": { px: 1.25 },
              }}
            />
          ) : (
            <Button
              size="small"
              variant="contained"
              endIcon={    <Box
      component="img"
      src="/integration/3.png"
      alt="grid"
      sx={{
        width: 18,
        height: 18,
        borderRadius: "8px",
        objectFit: "cover",
      }}
    />}
              sx={{
                borderRadius:"8px",
                height: 28,
                px: 1.25,
                boxShadow: "3",
                color: "#fff",
                bgcolor:"rgba(253, 126, 20, 1)",
                fontWeight: 400,
                fontSize: "12px",
              }}
            >
              Connect
            </Button>
          )}

          <Button
            size="small"
            variant="text"
            color="inherit"
            endIcon={<ArrowForwardIcon sx={{ fontSize: "10px", fontWeight: 400 }} />}
            sx={{
              color: "text.secondary",
              fontWeight: 400,
              fontSize: "12px",
              "&:hover": {
                backgroundColor: "transparent",
                color: "rgba(30, 41, 59, 1)",
              },
            }}
          >
            Integrations details
          </Button>
        </Stack>
      </CardContent>
    </Card>
  );
}

export default function Integration() {
  const [tab, setTab] = React.useState("All Integrations");
  const [view, setView] = React.useState("grid");

  const visible = INTEGRATIONS.filter(
    (i) => tab === "All Integrations" || i.category === tab
  );

  return (
   <Stack alignItems={{xl: "center"}}>
     <ThemeProvider theme={theme} >
      <CssBaseline />
      <Box sx={{ py: { xs: 3, md: 5 } }} width={{md:"700px", lg:"958px"}}   mb={30}>
        <Container maxWidth={"xl"}>
          {/* Header */}
          <Stack spacing={0.75} sx={{ mb: 2 }}>
            <Typography variant="h4" sx={{fontSize:"36px", fontWeight:600}}>Integrations</Typography>
            <Typography pb={2} variant="body2" color="text.secondary" sx={{color: "rgba(113, 113, 122, 1)", fontSize:"18px", fontWeight:300}}>
              Select and connect tools you use to integrate with your workflow
            </Typography>
          </Stack>

          {/* Tabs + Actions */}
          <Stack
            direction="row"
            alignItems="center"
            justifyContent="space-between"
            sx={{ mb: 2.5, flexWrap: "wrap", rowGap: 1 }}
          >
            <PillTabs value={tab} onChange={setTab} />
            <Stack direction="row" spacing={0.5} alignItems="center">
     <ToggleButtonGroup
  value={view}
  exclusive
  onChange={(_, val) => val && setView(val)}
  size="small"
  sx={{
    backgroundColor: "background.paper",
    gap: 0.2,
    border: "1px solid rgba(212, 212, 216, 1)",
    "& .MuiToggleButton-root": {
      padding: "6px 8px",
      border: "none",
      borderRadius: "150px",
      backgroundColor: "#fff", // default bg
      color: "black", // default icon
       "& img": {
          filter: "brightness(0) invert(0)", // make image white
        },
      "&.Mui-selected": {
        backgroundColor: "rgba(253, 126, 20, 1)", // orange when selected
        color: "#fff", // text/icon color white
        "& img": {
          filter: "brightness(0) invert(1)", // make image white
        },
        "&:hover": {
          backgroundColor: "rgba(253, 126, 20, 1)", // same on hover
        },
      },
    },
    borderRadius: 2,
    overflow: "hidden",
  }}
>
  <ToggleButton value="grid" aria-label="Grid view">
    <Box
      component="img"
      src="/integration/9.png"
      alt="grid"
      sx={{
        width: 18,
        height: 18,
        borderRadius: "8px",
        objectFit: "cover",
      }}
    />
  </ToggleButton>

  <ToggleButton value="list" aria-label="List view">
    <Box
      component="img"
      src="/integration/8.png"
      alt="list"
      sx={{
        width: 18,
        height: 18,
        borderRadius: "8px",
        objectFit: "cover",
      }}
    />
  </ToggleButton>
</ToggleButtonGroup>


           

            </Stack>
          </Stack>

          {/* Grid/List */}
          {view === "grid" ? (
            <Grid container spacing={2}>
              {visible.map((item) => (
                <Grid key={item.id} item xs={12} sm={6} md={4}>
                  <IntegrationCard view={view} item={item} />
                </Grid>
              ))}
            </Grid>
          ) : (
            <Stack spacing={2}>
              {visible.map((item) => (
                <IntegrationCard  view={view} key={item.id} item={item} />
              ))}
            </Stack>
          )}

          
        </Container>
      </Box>
    </ThemeProvider>
   </Stack>
  );
}
