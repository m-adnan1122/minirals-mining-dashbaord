"use client";

import React from "react";
import {
  Box,
  Paper,
  Typography,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  Checkbox,
  Button,
  TableContainer,
} from "@mui/material";

const ORANGE = "#F57C00";
const LIGHT_BORDER = "rgba(0,0,0,0.08)";

const sampleRows = Array.from({ length: 8 }).map((_, i) => ({
  id: String(5920 + i + 3),
  category: "Lithium (Li) Ore",
  availability: "Tradeable",
  mainElement: "LI20 67.5600%",
  au: "N/A*",
  ag: "N/A*",
  as: "N/A*",
  hg: "N/A*",
  location: ["South Nigeria", "West Nigeria", "East Nigeria", "South-East Nigeria"][i % 4],
  value: "N/A*",
}));

function BrowseSearch({
  title = "Search Criteria For A Lithium Ore",
  subtitle = "Select products you are interested in and request their availability or a call back",
  rows = sampleRows,
  onBack,
  onAction,
}) {
  const [selected, setSelected] = React.useState([]);

  const allSelected = selected.length > 0 && selected.length === rows.length;
  const indeterminate = selected.length > 0 && selected.length < rows.length;

  const toggleAll = (checked) => {
    setSelected(checked ? rows.map((r) => r.id) : []);
  };

  const toggleRow = (id, checked) => {
    setSelected((prev) => (checked ? [...prev, id] : prev.filter((x) => x !== id)));
  };

  return (
    <Paper
      elevation={0}
      sx={{
        p: { xs: 2, md: 3 },
        borderRadius: 3,
        bgcolor: "#fff",
        width: "981px",
        mb:6,
      }}
    >
      <Typography variant="h6" sx={{ fontWeight: 600, fontSize: "20px" }}>
        {title}
      </Typography>
      <Typography
        variant="caption"
        sx={{  fontWeight: 400, fontSize: "12px" }}
      >
        {subtitle}
      </Typography>

      <TableContainer
        sx={{
          mt: 6,
          borderRadius: "5px",
          overflowX: "auto",
          width: "100%",
        }}
      >
        <Table
          size="small"
          stickyHeader
          aria-label="products results"
          sx={{
            tableLayout: "auto",
            width: "max-content", // allows natural cell widths and enables horizontal scroll
            "& th, & td": {
              whiteSpace: "nowrap",
              textOverflow: "ellipsis",
              overflow: "hidden",
              maxWidth: 200,
              height: 55,
            },
          }}
        >
          <TableHead>
            <TableRow
              sx={{
                "& th": {
                  fontWeight: 500,
                  fontSize: "15px",
                  bgcolor: "rgba(255, 240, 219, 1)",
                },
              }}
            >
              <TableCell padding="checkbox">
                <Checkbox
                  checked={allSelected}
                  indeterminate={indeterminate}
                  onChange={(e) => toggleAll(e.target.checked)}
                  sx={{borderRadius:"100px", "&.Mui-checked": { color: ORANGE } }}
                />
              </TableCell>
              <TableCell>ID</TableCell>
              <TableCell sx={{ width: 180 }}>Product Category</TableCell>
              <TableCell>Availability</TableCell>
              <TableCell>Main Element</TableCell>
              <TableCell>AU</TableCell>
              <TableCell>AG</TableCell>
              <TableCell>AS</TableCell>
              <TableCell>HG</TableCell>
              <TableCell>Location</TableCell>
              <TableCell align="right">Value (price)</TableCell>
            </TableRow>
          </TableHead>

          <TableBody>
            {rows.map((row) => {
              const isChecked = selected.includes(row.id);
              return (
                <TableRow
                  key={row.id}
                  hover
                  sx={{
                    "& td": { borderColor: LIGHT_BORDER },
                    "&:last-child td": { borderBottom: 0 },
                    fontWeight: 400,
                    fontSize: "13px",
                  }}
                >
                  <TableCell padding="checkbox">
                    <Checkbox
                      checked={isChecked}
                      onChange={(e) => toggleRow(row.id, e.target.checked)}
                      sx={{ color: "rgba(99, 101, 126, 1)", "&.Mui-checked": { color: ORANGE } }}
                    />
                  </TableCell>
                  <TableCell>{row.id}</TableCell>
                  <TableCell>{row.category}</TableCell>
                  <TableCell>{row.availability}</TableCell>
                  <TableCell sx={{ color: ORANGE, fontWeight: 700 }}>
                    {row.mainElement}
                  </TableCell>
                  <TableCell>{row.au}</TableCell>
                  <TableCell>{row.ag}</TableCell>
                  <TableCell>{row.as}</TableCell>
                  <TableCell>{row.hg}</TableCell>
                  <TableCell>{row.location}</TableCell>
                  <TableCell align="right">{row.value}</TableCell>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </TableContainer>

      <Box sx={{ mt: 8,  mb:1, display: "flex", justifyContent: "flex-end", gap: 2 }}>
        <Button
          variant="outlined"
          onClick={onBack}
          sx={{
            borderColor: "rgba(253, 126, 20, 1)",
            color: "rgba(253, 126, 20, 1)",
            textTransform: "none",
            px: 3,
            py:1.2,
            borderRadius: 2,
          }}
        >
          Go Back
        </Button>
        <Button
          variant="contained"
          onClick={() => onAction && onAction(selected)}
          sx={{
            bgcolor: "rgba(253, 126, 20, 1)",
            textTransform: "none",
            px: 3,
            borderRadius: 2,
            "&:hover": { bgcolor: "rgba(253, 126, 20, 1)" },
          }}
        >
          Check availability of selected
        </Button>
      </Box>
    </Paper>
  );
}

export default BrowseSearch;
