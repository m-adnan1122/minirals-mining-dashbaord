"use client";

import React from "react";
import {
  Box,
  Paper,
  Typography,
  Slider,
  TextField,
  Stack,
  Chip,
  Button,
  Divider,
} from "@mui/material";

const ORANGE = "#F57C00"; // accent color
const LIGHT_BORDER = "rgba(0,0,0,0.08)";

function SearchAssay({
  title = "1. Specify The Primary Assay Range (%)",
  productLabel = "Lithium (Li) Ore",
  productCode = "[LI20]",
  min = 0,
  max = 100,
  step = 0.1,
  value = [0, 0],
  onChange,
  presets = ["Ma","Rm", "ke", "Ro", "Mg", "Sr"],
  onBack,
  onContinue,
}) {
  const [range, setRange] = React.useState(value);

  React.useEffect(() => {
    setRange(value);
   }, []);

  const handleSlider = (_, newValue) => {
    const v = newValue;
    const next = [v[0], v[1]];
    setRange(next);
    onChange && onChange(next);
  };

  const handleFrom = (e) => {
    const v = Number(e.target.value || 0);
    const next = [Math.min(v, range[1]), range[1]];
    setRange(next);
    onChange && onChange(next);
  };

  const handleTo = (e) => {
    const v = Number(e.target.value || 0);
    const next = [range[0], Math.max(v, range[0])];
    setRange(next);
    onChange && onChange(next);
  };

  const addPreset = (p) => {
    const mid = Math.max(range[0], Math.min(range[1], p));
    const next = [range[0], mid];
    setRange(next);
    onChange && onChange(next);
  };

  return (
    <Paper
      elevation={0}
      sx={{
        p: { xs: 2, md: 3 },
        borderRadius: 3,
        width:"981px",
        mb: 5
      }}
    >
      <Typography variant="subtitle2" sx={{ mb: 5, color: "text.primary", fontSize:"20px", fontWeight: 500 }}>
        {title}
      </Typography>

      <Typography variant="h6" sx={{ fontWeight: 600, mb: 1,fontSize:"24px", }}>
        {productLabel}{" "}
        <Box component="span" sx={{ color: ORANGE, fontWeight: 700 }}>
          {productCode}
        </Box>
      </Typography>

      <Stack spacing={1.5} sx={{ maxWidth: 520 }}>
        <Stack direction="row" justifyContent="space-between">
          <Typography variant="caption" sx={{ fontSize:"13px", fontWeight: 400  }}>
            From
          </Typography>
          <Typography variant="caption" sx={{ fontSize:"13px", fontWeight: 400  }}>
            To
          </Typography>
        </Stack>

        <Slider
          value={range}
          onChange={handleSlider}
          min={min}
          max={max}
          step={step}
          disableSwap
          sx={{
            color: ORANGE,
            height: 6,
            "& .MuiSlider-rail": { opacity: 1, bgcolor: LIGHT_BORDER },
            "& .MuiSlider-thumb": {
              width: 16,
              height: 16,
              border: "2px solid #fff",
              boxShadow: "0 0 0 4px rgba(245,124,0,0.15)",
            },
          }}
        />

        <Stack direction="row" spacing={2} sx={{ maxWidth: 520 }}>
          <TextField
            size="small"
            value={range[0].toFixed(3)}
            onChange={handleFrom}
            inputProps={{ inputMode: "decimal" }}
            fullWidth
            sx={{
              "& .MuiOutlinedInput-root": {
                borderRadius: 2,
                "& fieldset": { borderColor: LIGHT_BORDER },
              },
              "& .MuiInputBase-input": { textAlign: "center" },
            }}
          />
          <TextField
            size="small"
            value={range[1].toFixed(3)}
            onChange={handleTo}
            inputProps={{ inputMode: "decimal" }}
            fullWidth
            sx={{
              "& .MuiOutlinedInput-root": {
                borderRadius: 2,
                "& fieldset": { borderColor: LIGHT_BORDER },
              },
              "& .MuiInputBase-input": { textAlign: "center" },
            }}
          />
        </Stack>
      </Stack>

      <Box sx={{ mt: 6 }}>
        <Typography variant="subtitle2" sx={{ mb: 1.5,fontSize:"16px", fontWeight: 400, color:"rgba(165, 166, 176, 1)"  }}>
          2. Specify the primary assay range (%)
        </Typography>

        <Stack direction="row" spacing={1} flexWrap="wrap">
          {presets.map((p) => (
            <Chip
              key={p}
              label={`${p}`}
              onClick={() => addPreset(p)}
              variant="outlined"
              sx={{
                borderColor: "rgba(165, 166, 176, 1)",
                color: "rgba(165, 166, 176, 1)",
                borderRadius: 0,
                borderBottomRightRadius: "15px",
                height: 30,
              }}
            />
          ))}
        </Stack>
      </Box>


      <Stack direction="row" justifyContent="flex-end" spacing={2} mt={6}>
        <Button
          variant="outlined"
          onClick={onBack}
          sx={{
            borderColor: "rgba(253, 126, 20, 1)",
            color: "rgba(253, 126, 20, 1)",
            textTransform: "none",
            px: 3,
            borderRadius: 2,
          }}
        >
          Go Back
        </Button>
        <Button
          variant="contained"
          onClick={() => onContinue && onContinue(range)}
          sx={{
            bgcolor: ORANGE,
            textTransform: "none",
            px: 3,
            borderRadius: 2,
            "&:hover": { bgcolor: "rgba(253, 126, 20, 1)" },
          }}
        >
          Continue
        </Button>
      </Stack>
    </Paper>
  );
}

export default SearchAssay;
