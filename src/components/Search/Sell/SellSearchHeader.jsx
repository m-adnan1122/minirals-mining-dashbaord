"use client";

import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

const defaultLabels = [
  "Select a Product",
  "Search in Assays",
  "Browse Search Results",
  "Request Availability",
];

function StepItem({
  index,
  label,
  active,
  onClick,
  activeColor = "rgba(253, 126, 20, 1)", // amber-ish
  inactiveColor = "rgba(99, 101, 126, 1)", // gray-600
}) {
  return (
    <Box
      component={onClick ? "button" : "div"}
      type={onClick ? "button" : undefined}
      onClick={onClick}
      sx={{
        display: "inline-flex",
        alignItems: "center",
        gap: 1.25,
        px: 1,
        py: 0.5,
        background: "transparent",
        border: "none",
        cursor: onClick ? "pointer" : "default",
        textAlign: "left",
      }}
      aria-current={active ? "step" : undefined}
      aria-label={`Step ${index}: ${label}${active ? " (current)" : ""}`}
    >
      {/* Diamond icon */}
      <Box
        sx={{
          width: 24,
          height: 24,
          transform: "rotate(45deg)",
          border: active ? "none" : "2px solid",
          borderColor: active ? "transparent" : "rgba(55, 65, 81, 0.8)", // gray-700
          backgroundColor: active ? activeColor : "transparent",
          display: "inline-flex",
          alignItems: "center",
          justifyContent: "center",
          borderRadius: "2px",
          flex: "0 0 auto",
        }}
      >
        <Typography
          variant="caption"
          component="span"
          sx={{
            transform: "rotate(-45deg)",
            fontWeight: 600,
            color: active ? "#FFFFFF" : "rgba(55, 65, 81, 0.9)", // gray-700
            lineHeight: 1,
          }}
        >
          {index}
        </Typography>
      </Box>

      {/* Label */}
      <Typography
        variant="body2"
        sx={{
          fontWeight: active ? 600 : 500,
          color: active ? "rgba(17, 24, 39, 1)" : inactiveColor, // active: gray-900
          whiteSpace: "nowrap",
        }}
      >
        {label}
      </Typography>
    </Box>
  );
}




export function SellSearchHeader({
  active,
  labels = defaultLabels,
  onChange,
  activeColor = "rgba(253, 126, 20, 1)",
  inactiveColor = "rgba(99, 101, 126, 1)",
}) {
  return (
    <Box
      role="group"
      aria-label="Process steps"
      sx={{
        display: "flex",
        alignItems: "center",
        gap: { xs: 2, sm: 3, md: 4 },
        flexWrap: "wrap",
        mb:4,
      }}
    >
      <StepItem
        index={1}
        label={labels[0]}
        active={active === "Select a Product"}
        onClick={onChange ? () => onChange(1) : undefined}
        activeColor={activeColor}
        inactiveColor={inactiveColor}
      />
      <StepItem
        index={2}
        label={labels[1]}
        active={active === "Search In Assays" }
        onClick={onChange ? () => onChange(2) : undefined}
        activeColor={activeColor}
        inactiveColor={inactiveColor}
      />
      <StepItem
        index={3}
        label={labels[2]}
        active={active === "Add Products"}
        onClick={onChange ? () => onChange(3) : undefined}
        activeColor={activeColor}
        inactiveColor={inactiveColor}
      />
      
    </Box>
  );
}

export default SellSearchHeader;
