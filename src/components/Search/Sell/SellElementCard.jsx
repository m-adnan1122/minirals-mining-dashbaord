"use client"
import { Box, Typography } from "@mui/material"

/**
 * ElementCard
 * A periodic-table-like tile styled to match the provided Nickel example:
 * - Orange border
 * - Only bottom-right corner rounded
 * - Number (top-left), Name (top-right), Symbol (center), Mass (bottom-left)
 */
export function SellElementCard({ data, selected = false, onClick, size = "md" }) {
  const ORANGE = "#FF7A00"
  const dims = size === "sm" ? { w: "55px", h: 60, radius: "20", symbolFs: "30px" } : { w: 100, h: 114, radius: 14, symbolFs: 34 }

  return (
    <Box
      onClick={onClick}
      role="button"
      aria-label={`${data.name} element card`}
      sx={{
        width: dims.w,
        height: dims.h,
        border: `2px solid ${ORANGE}`,
        borderRadius: `${dims.radius}px 0px 0px  0px`,
        position: "relative",
        bgcolor: "transparent",
        color: ORANGE,
        cursor: onClick ? "pointer" : "default",
        transition: "box-shadow 120ms ease, transform 120ms ease",
        boxShadow: selected ? `0 0 0 3px ${ORANGE}33` : "none",
        "&:hover": {
          boxShadow: onClick ? `0 4px 14px ${ORANGE}1f` : "none",
          transform: onClick ? "translateY(-1px)" : "none",
        },
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        userSelect: "none",
      }}
    >
      {/* Atomic number - top left */}
      <Typography
        variant="caption"
        sx={{
          position: "absolute",
          top: 6,
          left: 8,
          fontSize: 8,
          lineHeight: 1,
          color: ORANGE,
        }}
      >
        {data.number}
      </Typography>

      {/* Name - top right */}
      <Typography
        variant="caption"
        sx={{
          position: "absolute",
          top: 6,
          right: 8,
          fontSize: 8,
          lineHeight: 1,
          color: ORANGE,
          whiteSpace: "nowrap",
          maxWidth: "60%",
          textOverflow: "ellipsis",
          overflow: "hidden",
          textAlign: "right",
        }}
        title={data.name}
      >
        {data.name}
      </Typography>

      {/* Symbol - centered */}
      <Typography
        component="div"
        sx={{
          fontWeight: 500,
          fontSize:"24px",
          color: ORANGE,
        }}
      >
        {data.symbol}
      </Typography>

      {/* Atomic mass - bottom left */}
      <Typography
        variant="caption"
        sx={{
          position: "absolute",
          bottom: 6,
          left: 8,
          fontSize: 8,
          lineHeight: 1,
          color: ORANGE,
        }}
      >
        {data.atomicMass}
      </Typography>
    </Box>
  )
}

export default SellElementCard
