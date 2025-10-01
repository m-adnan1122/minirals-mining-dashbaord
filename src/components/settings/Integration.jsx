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
    logoQuery: "quickbooks logo",
    initials: "qb",
    category: "Finance",
  },
  {
    id: "bigcommerce",
    name: "BigCommerce",
    description:
      "BigCommerce is a leading e-commerce software platform that provides startups and established companies with everything they need to build a better online business.",
    logoQuery: "bigcommerce logo",
    initials: "bc",
    category: "All Integrations",
  },
  {
    id: "netsuite",
    name: "NetSuite",
    description:
      "Make smarter, faster decisions using the world's most deployed cloud ERP suite.",
    logoQuery: "netsuite logo",
    initials: "n",
    category: "All Integrations",
    connected: true,
  },
  {
    id: "mailchimp",
    name: "Mailchimp",
    description:
      "Mailchimp makes it easy to sell stuff online, even if you don't have an e-commerce store.",
    logoQuery: "mailchimp logo",
    initials: "mc",
    category: "Communications",
  },
  {
    id: "excel",
    name: "Microsoft Excel",
    description: "Excel learns your patterns, organizing your data to save you time.",
    logoQuery: "microsoft excel logo",
    initials: "xl",
    category: "All Integrations",
  },
  {
    id: "salesforce",
    name: "Salesforce",
    description:
      "Salesforce offers a wide variety of CRM categories and systems to meet your needs.",
    logoQuery: "salesforce logo",
    initials: "sf",
    category: "All Integrations",
  },
];

function PillTabs({ value, onChange }) {
  return (
    <Tabs
  value={value}
  onChange={(_, v) => onChange(v)}
  TabIndicatorProps={{ style: { display: "none" } }}
  sx={{
    minHeight: 0,
    "& .MuiTab-root": {
      minHeight: 0,
      height: 32,
      px: 1.5,
      mx: 0.75,
      borderRadius: "8px",
      fontWeight: 400,
      fontSize: "16px",
      color: "rgba(24, 24, 27, 1)", // default black text
    },
    "& .MuiTab-root.Mui-selected": {
      bgcolor: "primary.main",
      color: "rgba(255, 255, 255, 1)", // white text
    },
  }}
>


      <Tab disableRipple label="All Integrations" value="All Integrations" />
      <Tab disableRipple label="Finance" value="Finance" />
      <Tab disableRipple label="Communications" value="Communications" />
      <Tab disableRipple label="Storage" value="Storage" />
    </Tabs>
  );
}

function IntegrationCard({ item }) {
  return (
    <Card sx={{ height: "100%", borderRadius: "8px", mt: 2 }} variant="outlined" >
      <CardContent
        sx={{ p: 2.5, display: "flex", flexDirection: "column", gap: 1,  width: "290px",
              height: "200px", pt:3 }}
      >
        <Stack  spacing={1} >
          <Avatar
            variant="rounded"
            src={`/placeholder.svg?height=28&width=28&query=${encodeURIComponent(
              item.logoQuery
            )}`}
            alt={`${item.name} logo`}
            sx={{
              width: 32,
              height: 32,
              borderRadius: 2,
              bgcolor: "#f3f4f6",
              color: "text.primary",
              fontSize: 14,
              fontWeight: 700,
              textTransform: "uppercase",
            }}
          >
            {item.initials}
          </Avatar>
          <Typography variant="subtitle1">{item.name}</Typography>
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
                fontWeight: 700,
                color: "#fff",
                borderRadius: "8px",
                height: 28,
                "& .MuiChip-label": { px: 1.25 },
              }}
            />
          ) : (
            <Button
              size="small"
              variant="contained"
              color="primary"
              startIcon={<BoltIcon  />}
              sx={{
                borderRadius:"8px",
                height: 28,
                px: 1.25,
                boxShadow: "none",
                color: "#fff"
              }}
            >
              Connect
            </Button>
          )}

          <Button
            size="small"
            variant="text"
            color="inherit"
            endIcon={<ArrowForwardIcon sx={{ fontSize: "36px" }} />}
            sx={{
              color: "text.secondary",
              fontWeight: 600,
              "&:hover": {
                backgroundColor: "transparent",
                color: "text.primary",
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
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box sx={{ py: { xs: 3, md: 5 } }} width={"958px"} mb={30}>
        <Container maxWidth="lg">
          {/* Header */}
          <Stack spacing={0.75} sx={{ mb: 2 }}>
            <Typography variant="h4">Integrations</Typography>
            <Typography variant="body2" color="text.secondary" sx={{color: "rgba(113, 113, 122, 1)"}}>
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
    "& .MuiToggleButton-root": {
      padding: "6px 8px",
      border: "none",
      borderRadius: "150px",
      backgroundColor: "#ffff", // default bg
      color: "black", // default icon
      "&.Mui-selected": {
        backgroundColor: "rgba(253, 126, 20, 1)", // orange when selected
        color: "white", // icon color white
        "&:hover": {
          backgroundColor: "rgba(253, 126, 20, 1)", // keep orange on hover
        },
      },
  
    },
    borderRadius: 2,
    overflow: "hidden",
  }}
>
  <ToggleButton value="grid" aria-label="Grid view">
    <ViewModule fontSize="small" />
  </ToggleButton>
  <ToggleButton value="list" aria-label="List view">
    <ViewList fontSize="small" />
  </ToggleButton>
</ToggleButtonGroup>


           

            </Stack>
          </Stack>

          {/* Grid/List */}
          {view === "grid" ? (
            <Grid container spacing={2}>
              {visible.map((item) => (
                <Grid key={item.id} item xs={12} sm={6} md={4}>
                  <IntegrationCard item={item} />
                </Grid>
              ))}
            </Grid>
          ) : (
            <Stack spacing={2}>
              {visible.map((item) => (
                <IntegrationCard key={item.id} item={item} />
              ))}
            </Stack>
          )}

          {/* Reference image (hidden) */}
          <Box
            sx={{ position: "absolute", width: 0, height: 0, overflow: "hidden" }}
          >
            <img
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-FWT6tsIYOcpTaOd3j5PlocRUI8om0w.png"
              alt="Reference screenshot for target design"
              crossOrigin="anonymous"
            />
          </Box>
        </Container>
      </Box>
    </ThemeProvider>
  );
}
