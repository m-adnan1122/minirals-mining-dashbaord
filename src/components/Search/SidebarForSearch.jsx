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

export default function SidebarForSearch({
  header = "Settings",
  tabs = [],
  selected,
  setSelected,
}) {
  return (
    <Paper elevation={0} sx={{ width: "226px" }}>
      {/* Header */}
      <Typography variant="subtitle1" sx={{ fontWeight: 500, fontSize: "20px", mb: 2, textAlign:"center", pt:3, pb:0.5 }}>
        {header}
      </Typography>

      {/* Tabs */}
      <List disablePadding sx={{pl:3}} >
        {tabs.map((tab) => {
          const isSelected = selected === tab.label;

          return (
            <ListItemButton
              key={tab.label}
              selected={isSelected}
              onClick={() => setSelected(tab.label)}
              sx={{
                borderTopLeftRadius: "10px",
                borderBottomLeftRadius: "10px",
                mb: 0.5,
                color: "rgba(99, 101, 126, 1)", // default text color
                "&:hover": {
                  color: "rgba(0, 0, 0, 1)", // text + icon on hover
                },
                "&.Mui-selected": {
                  bgcolor: "rgba(253, 126, 20, 1)",
                  color: "#ffffff", // text + icon selected
                  fontWeight: 600,
                   "&:hover": {
                  bgcolor: "rgba(253, 126, 20, 1)",
                },
                },
                position: "relative",
              }}
            >
  {            tab.icon &&
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
              </ListItemIcon>}

              <ListItemText
                primary={tab.label}
                primaryTypographyProps={{
                  fontSize: "16px",
                  fontWeight: isSelected ? 600 : 500,
                }}
              />
            </ListItemButton>
          );
        })}
      </List>
    </Paper>
  );
}
