"use client";

import React from "react";
import {
  Box,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Typography,
  Paper,
} from "@mui/material";

export default function SidebarTabs({
  header = "Settings",
  tabs = [],
  selected,
  setSelected,
}) {
  return (
    <Paper elevation={0} sx={{ width: "226px" }}>
      {/* Header */}
      <Typography variant="subtitle1" sx={{ fontWeight: 500, fontSize: "18px", mb: 2, textAlign:"center", pt:3, pb:0.5 }}>
        {header}
      </Typography>

      {/* Tabs */}
      <List disablePadding sx={{pl:2}} >
        {tabs.map((tab) => {
          const isSelected = selected === tab.label;

          return (
            <ListItemButton
              key={tab.label}
              selected={isSelected}
              onClick={() => setSelected(tab.label)}
              sx={{
                borderRadius: 1.5,
                mb: 0.5,
                color: "rgba(99, 101, 126, 1)", // default text color
                "&:hover": {
                  color: "rgba(0, 0, 0, 1)", // text + icon on hover
                  "& .MuiListItemIcon-root": {
                    color: "rgba(0, 0, 0, 1)",
                  },
                },
                "&.Mui-selected": {
                  bgcolor: "transparent",
                  color: "rgba(0, 0, 0, 1)", // text + icon selected
                  fontWeight: 600,
                  "& .MuiListItemIcon-root": {
                    color: "rgba(0, 0, 0, 1)",
                  },
                  "&::after": {
                    content: '""',
                    position: "absolute",
                    right: 0,
                    top: "20%",
                    bottom: "20%",
                    width: "3px",
                    bgcolor: "rgba(253, 126, 20, 1)",
                    borderRadius: "4px",
                  },
                },
                position: "relative",
              }}
            >
              <ListItemIcon
                sx={{
                  minWidth: 32,
                  color: "inherit", // inherit from ListItemButton
                }}
              >
                <Box
                  width="20px"
                  height="20px"
                  sx={{
                    backgroundImage: `url(${tab.icon})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    backgroundRepeat: "no-repeat",
                    transition: "filter 0.3s ease",
                    filter: isSelected
                      ? "brightness(0) saturate(100%)" // black
                      : "grayscale(100%) brightness(50%)", // gray
                  }}
                />
              </ListItemIcon>

              <ListItemText
                primary={tab.label}
                primaryTypographyProps={{
                  fontSize: "14px",
                  fontWeight: isSelected ? 500 : 400,
                }}
              />
            </ListItemButton>
          );
        })}
      </List>
    </Paper>
  );
}
