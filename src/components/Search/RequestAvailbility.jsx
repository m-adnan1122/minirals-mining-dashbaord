"use client"

import * as React from "react"
import {
  Box,
  Typography,
  TextField,
  Select,
  MenuItem,
  Button,
  Chip,
  Grid,
  Stack,
  ToggleButton,
  ToggleButtonGroup,
} from "@mui/material"
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined"
import CloudUploadIcon from "@mui/icons-material/CloudUpload"

export default function RequestAvailbility() {
  const [volume, setVolume] = React.useState("")
  const [unit, setUnit] = React.useState("DMT")
  const [month, setMonth] = React.useState("")
  const [year, setYear] = React.useState("")
  const [incoterm, setIncoterm] = React.useState("")
  const [country, setCountry] = React.useState("")
  const [phone, setPhone] = React.useState("")
  const [details, setDetails] = React.useState("")
  const [files, setFiles] = React.useState([])

  const ORANGE = "rgba(253, 126, 20, 1)"
  const TEXT = "#111827"
  const MUTED = "#6B7280"
  const BORDER = "#D1D5DB"

  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ]

  const years = React.useMemo(() => {
    const y = new Date().getFullYear()
    return Array.from({ length: 6 }, (_, i) => String(y + i))
  }, [])

  const incoterms = ["EXW", "FCA", "FOB", "CIF", "DAP", "DDP"]
  const countries = ["United States", "United Kingdom", "Germany", "India", "China", "United Arab Emirates"]

  const handleFiles = (incoming) => {
    if (!incoming) return
    const arr = Array.from(incoming)
    setFiles((prev) => [...prev, ...arr])
  }

  const onDrop = (e) => {
    e.preventDefault()
    e.stopPropagation()
    handleFiles(e.dataTransfer.files)
  }

  const onDragOver = (e) => {
    e.preventDefault()
    e.stopPropagation()
  }

  const labelSx = {
    fontSize: "14px",
    fontWeight: 400,
    color: TEXT,
    mb: 0.75,
  }

  const textFieldSx = {
    "& .MuiOutlinedInput-root": {
        width:"423px",
      height: 45,
      borderRadius: "8px",
      "& fieldset": { borderColor: BORDER },
      "&:hover fieldset": { borderColor: BORDER },
      "&.Mui-focused fieldset": { borderColor: ORANGE },
    },
    "& .MuiInputBase-input::placeholder": {
      fontSize: 16,
      fontWeight: 400,
      opacity: 1,
      color: MUTED,
    },
  }

  const selectBaseSx = {
    "& .MuiOutlinedInput-root": {
       width:"423px",
      borderRadius: "8px",
      "& fieldset": { borderColor: BORDER },
      "&:hover fieldset": { borderColor: BORDER },
      "&.Mui-focused fieldset": { borderColor: ORANGE },
    },
    "& .MuiSelect-select": {
      fontSize: 16,
      fontWeight: 400,
      color: TEXT,
    },
  }

  return (
    <Box
      sx={{
        width: "981px",
        px: { xs: 2, md: 5 },
        py: 4,
        borderRadius: "12px",
        color: TEXT,
        backgroundColor:"rgba(255, 255, 255, 1)",
        mb: 7,

      }}
    >
      {/* Header */}
      <Typography sx={{ fontSize: "20px", fontWeight: 600, mb: 0.5 }}>
        Fill Out The Specifics Of Your Preferable Shipment
      </Typography>
      <Typography sx={{ fontSize: "12px", fontWeight: 400, mb: 3 }}>
        You have selected Lithium LIO one product(s) to request their availability from Cosmic Frequency and/or
        producers.
      </Typography>

      {/* Volume + Units */}
      <Box sx={{ mb: 2 }}>
        <Typography sx={labelSx}>Volume</Typography>
        <Stack direction="row" spacing={1.5} alignItems="center">
          <TextField
            fullWidth
            placeholder="0.000"
            value={volume}
            onChange={(e) => setVolume(e.target.value)}
            sx={textFieldSx}
          />
          <ToggleButtonGroup
  value={unit}
  exclusive
  onChange={(_, v) => v && setUnit(v)}
  size="small"
  sx={{
    "& .MuiToggleButton-root": {
      border: `1px solid ${BORDER}`,
      color: TEXT,
      borderRadius:"30px",
      fontSize: 12,
      height: 25,
      px: 2.2,
      fontWeight:"10px",
      position:"relative",
      top:-42,
      left:-480,
      ml:1,
      textTransform: "none",
      backgroundColor: "#fff",
      "&.Mui-selected": {
        backgroundColor: "#fff",
        color: ORANGE,
        borderColor: ORANGE,
      },
      "&.Mui-selected:hover": {
        backgroundColor: "#fff",
        borderColor: ORANGE,
      },
      "&:hover": {
        backgroundColor: "#fff",
        borderColor: ORANGE,
      },
    },
  }}
>
  <ToggleButton value="DMT" >DMT</ToggleButton>
  <ToggleButton value="WMT">WMT</ToggleButton>
  <ToggleButton value="KG">KG</ToggleButton>
</ToggleButtonGroup>

        </Stack>
      </Box>

      {/* Time of arrival */}
      <Box sx={{ mb: 2 }}>
        <Typography sx={labelSx}>Time of arrival</Typography>
        <Grid container spacing={1.5} >
          <Grid item xs={12} md={6} width={"423px"}>
            <Select
              fullWidth
              displayEmpty
              value={month}
              onChange={(e) => setMonth(e.target.value)}
              sx={selectBaseSx}
              renderValue={(val) =>
                val ? (
                  val
                ) : (
                  <Box component="span" sx={{ color: MUTED, fontSize: 16, fontWeight: 400 }}>
                    Month
                  </Box>
                )
              }
            >
              <MenuItem value="" disabled>
                Month
              </MenuItem>
              {months.map((m) => (
                <MenuItem key={m} value={m}>
                  {m}
                </MenuItem>
              ))}
            </Select>
          </Grid>
          <Grid item xs={12} md={6} width={"423px"}>
            <Select
              fullWidth
              displayEmpty
              value={year}
              onChange={(e) => setYear(e.target.value)}
              sx={selectBaseSx}
              renderValue={(val) =>
                val ? (
                  val
                ) : (
                  <Box component="span" sx={{ color: MUTED, fontSize: 16, fontWeight: 400 }}>
                    Year
                  </Box>
                )
              }
            >
              <MenuItem value="" disabled>
                Year
              </MenuItem>
              {years.map((y) => (
                <MenuItem key={y} value={y}>
                  {y}
                </MenuItem>
              ))}
            </Select>
          </Grid>
        </Grid>
      </Box>

      {/* Delivery */}
      <Box sx={{ mb: 2 }}>
        <Typography sx={labelSx}>Delivery</Typography>
        <Grid container spacing={1.5}>
          <Grid item xs={12} md={6} width={"423px"}>
            <Select
              fullWidth
              displayEmpty
              value={incoterm}
              onChange={(e) => setIncoterm(e.target.value)}
              sx={selectBaseSx}
              renderValue={(val) =>
                val ? (
                  val
                ) : (
                  <Box component="span" sx={{ color: MUTED, fontSize: 16, fontWeight: 400 }}>
                    Preferred Incoterms Basis
                  </Box>
                )
              }
            >
              <MenuItem value="" disabled>
                Preferred Incoterms Basis
              </MenuItem>
              {incoterms.map((it) => (
                <MenuItem key={it} value={it}>
                  {it}
                </MenuItem>
              ))}
            </Select>
          </Grid>
          <Grid item xs={12} md={6} width={"423px"}>
            <Select 
              fullWidth
              displayEmpty
              value={country}
              onChange={(e) => setCountry(e.target.value)}
              sx={selectBaseSx}
              renderValue={(val) =>
                val ? (
                  val
                ) : (
                  <Box component="span" sx={{ color: MUTED, fontSize: 16, fontWeight: 400 }}>
                    Country
                  </Box>
                )
              }
            >
              <MenuItem value="" disabled>
                Country
              </MenuItem>
              {countries.map((c) => (
                <MenuItem key={c} value={c}>
                  {c}
                </MenuItem>
              ))}
            </Select>
          </Grid>
        </Grid>
      </Box>

      {/* Phone */}
      <Box sx={{ mb: 2 }}>
        <Typography sx={labelSx}>Phone no.</Typography>
        <TextField
          fullWidth
          placeholder="03386866514"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          inputMode="tel"
          sx={textFieldSx}
        />
      </Box>

      {/* Other Details */}
      <Box sx={{ mb: 10 }} >
        <Stack direction="row" alignItems="center"  spacing={0.75} sx={{ mb: 0.75 }}>
          <Typography sx={labelSx}>Other Details</Typography>
          <InfoOutlinedIcon sx={{ color: ORANGE, fontSize: 16 }} />
        </Stack>
        <TextField
          fullWidth
          placeholder="Welcome to my scheduling page. Please follow the instructions to add an event to my calendar."
          value={details}
          onChange={(e) => setDetails(e.target.value)}
          multiline
          minRows={3}
          sx={{
            "& .MuiOutlinedInput-root": {
        width:"853px",
      height: "105px",
      borderRadius: "8px",
      "& fieldset": { borderColor: BORDER },
      "&:hover fieldset": { borderColor: BORDER },
      "&.Mui-focused fieldset": { borderColor: ORANGE },
                    alignItems: "flex-start",
    },
    "& .MuiInputBase-input::placeholder": {
      fontSize: 16,
      fontWeight: 400,
      opacity: 1,
      color: MUTED,
    },
            
          }}
        />
      </Box>

      {/* Upload area */}
      <Box
        onDragOver={onDragOver}
        onDrop={onDrop}
        sx={{
          border: `2px dashed ${BORDER}`,
          borderRadius: 1.5,
          p: 3,
          mb: 3,
          pl:20,
          width:"850px"
        }}
      >
        <Grid container alignItems="center" spacing={10}>
          <Grid item xs={12} md>
            <Stack direction="row" spacing={1.25} alignItems="center" sx={{ color: MUTED }}>
              <CloudUploadIcon sx={{ color: MUTED }} />
              <Typography sx={{ fontSize: 14, fontWeight: 400 }}>
                Drag and Drop here{" "}
                <Box component="span" sx={{ color: TEXT }} pl={10}>
                  or
                </Box>
              </Typography>
            </Stack>
          </Grid>
          <Grid item xs={12} md="auto">
            <Button
              variant="contained"
              component="label"
              sx={{
                backgroundColor: "rgba(253, 126, 20, 1)",
                textTransform: "none",
                borderRadius: "5.16px",
                px: 2.25,
                width:"147px",
                py: 1,
                "&:hover": { backgroundColor: ORANGE },
              }}
            >
              Select file
              <input type="file" multiple hidden onChange={(e) => handleFiles(e.target.files)} />
            </Button>
          </Grid>
        </Grid>
        {files.length > 0 && (
          <Stack direction="row" spacing={1} sx={{ mt: 2, flexWrap: "wrap" }}>
            {files.map((f, i) => (
              <Chip
                key={`${f.name}-${i}`}
                label={f.name}
                sx={{
                  borderRadius: 999,
                  border: `1px solid ${BORDER}`,
                  color: TEXT,
                }}
                variant="outlined"
              />
            ))}
          </Stack>
        )}
      </Box>

      {/* Actions */}
      <Stack direction={{ xs: "column", sm: "row" }} mt={10} spacing={1.5} sx={{ justifyContent: "flex-end" }}>
        <Button
          variant="outlined"
          sx={{
            borderColor: ORANGE,
            color: ORANGE,
            textTransform: "none",
            borderRadius: "10.6px",
            px: 2.25,
            py: 1,
            "&:hover": { borderColor: ORANGE, backgroundColor: "transparent" },
          }}
          onClick={() => {
            console.log("Request a call back clicked")
          }}
        >
          Request a call back
        </Button>
        <Button
          variant="contained"
          sx={{
            backgroundColor: ORANGE,
            color: "#fff",
            textTransform: "none",
            borderRadius: "10.6px",
            px: 2.25,
            py: 1,
            "&:hover": { backgroundColor: ORANGE },
          }}
          onClick={() => {
            console.log("Request an inactive offer clicked")
          }}
        >
          Request an inactive offer
        </Button>
      </Stack>
    </Box>
  )
}
