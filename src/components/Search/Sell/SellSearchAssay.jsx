"use client"

import React, { useState } from "react"
import {
  Box,
  Grid,
  Stack,
  Typography,
  TextField,
  Select,
  MenuItem,
  Button,
  FormControl,
} from "@mui/material"
import InfoOutlined from "@mui/icons-material/InfoOutlined"
import AddRounded from "@mui/icons-material/AddRounded"
import CloudUploadOutlined from "@mui/icons-material/CloudUploadOutlined"

const ORANGE = "#F97316"
const TEXT = "#111827"
const MUTED = "#6B7280"
const BORDER = "#E5E7EB"
const BG = "#FAFAFA"

const labelSx = {
  fontWeight: 400,
  fontSize: "14px",
  color: TEXT,
  display: "inline-flex",
  alignItems: "center",
  gap: 0.5,
  pb:1,
}

const inputSx = {
  "& .MuiOutlinedInput-root": {
        width:"430px",
      height: 45,
      borderRadius: "8px",
  },
        borderRadius: "8px",
  "& input::placeholder, & textarea::placeholder": {
    fontWeight: 400,
    fontSize: "16px",
    opacity: 1,
    color: MUTED,
  },
}

const monthOptions = [
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
].map((label) => ({ label, value: label.toLowerCase().slice(0, 3) }))

const yearOptions = Array.from({ length: 10 }).map((_, i) => {
  const y = new Date().getFullYear() + i
  return { label: String(y), value: String(y) }
})

const habitOptions = [
  { label: "Lorem ipsum", value: "lorem" },
  { label: "Dolor sit amet", value: "dolor" },
]

const acquiredOptions = [
  { label: "Lorem ipsum dolor sit amet", value: "lorem" },
  { label: "Consectetur adipiscing elit", value: "consectetur" },
]

function UploadDropZone({ onFiles }) {
  const [isOver, setIsOver] = useState(false)

  const onDrop = (e) => {
    e.preventDefault()
    setIsOver(false)
    const files = Array.from(e.dataTransfer.files || [])
    onFiles?.(files)
  }

  return (
    <Box
      onDragOver={(e) => {
        e.preventDefault()
        setIsOver(true)
      }}
      onDragLeave={() => setIsOver(false)}
      onDrop={onDrop}
      sx={{
        border: "2px dashed",
        borderColor: isOver ? ORANGE : BORDER,
        bgcolor: "#fff",
        borderRadius: 2,
        p: 4,
        minHeight: 200,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        position: "relative",
      }}
    >
      <Stack alignItems="center" spacing={1}>
          <Button
          size="small"
          variant="contained"
          sx={{
            textTransform: "none",
            bgcolor: ORANGE,
            "&:hover": { bgcolor: "#ea6b0c" },
            borderRadius: 2,
            px: 2.5,
          }}
          onClick={() => {
            const input = document.createElement("input")
            input.type = "file"
            input.multiple = true
            input.accept = "image/*"
            input.onchange = () => {
              const files = input.files ? Array.from(input.files) : []
              onFiles?.(files)
            }
            input.click()
          }}
        >
          Select files
        </Button>
      </Stack>
    </Box>
  )
}

export default function SellSearchAssay() {
  const [from, setFrom] = useState("")
  const [to, setTo] = useState("")
  const [month, setMonth] = useState("")
  const [year, setYear] = useState("")

  const [mineralName, setMineralName] = useState("")
  const [specimenName, setSpecimenName] = useState("")
  const [color, setColor] = useState("")
  const [habit, setHabit] = useState("")
  const [cost, setCost] = useState("")
  const [dateAcquired, setDateAcquired] = useState("")
  const [notes, setNotes] = useState("")

  const [idNumber, setIdNumber] = useState("")
  const [size, setSize] = useState("")
  const [locality, setLocality] = useState("")
  const [whereAcquired, setWhereAcquired] = useState("")
  const [value, setValue] = useState("")

  return (
    <Box
      sx={{
        p: { xs: 2, md: 3 },
        borderRadius: 3,
        border: `1px solid ${BORDER}`,
        width:"981px",
        backgroundColor:"#fff",
      }}
    >
      {/* Header Row */}
      <Grid container spacing={3}>
        <Grid item xs={12} md={7.5}>
          <Stack spacing={2}>
            <Typography sx={{ fontSize: 16, fontWeight: 600, color: TEXT }}>
              1. Specify The Primary Assay Range (%)
            </Typography>

            <Stack spacing={1}>
              <Typography sx={{ fontSize: 20, fontWeight: 700, color: TEXT }}>
                Lithium (Li) Ore{" "}
                <Box component="span" sx={{ color: ORANGE, fontWeight: 600 }}>
                  [Li20]
                </Box>
              </Typography>

              <Grid container spacing={2} alignItems="flex-end">
                <Grid item xs={6} sm="auto">
                  <Typography sx={labelSx}>From</Typography>
                  <TextField
                    fullWidth
                    placeholder="0.000"
                    value={from}
                    onChange={(e) => setFrom(e.target.value)}
                    size="small"
                    sx={inputSx}
                  />
                </Grid>
                <Grid item xs={6} sm="auto">
                  <Typography sx={labelSx}>To</Typography>
                  <TextField
                    fullWidth
                    placeholder="0.000"
                    value={to}
                    onChange={(e) => setTo(e.target.value)}
                    size="small"
                    sx={inputSx}
                  />
                </Grid>

                <Grid item xs={12} sm="auto">
                  <Button
                    startIcon={<AddRounded />}
                    variant="contained"
                    sx={{
                      textTransform: "none",
                      bgcolor: ORANGE,
                      "&:hover": { bgcolor: "#ea6b0c" },
                      borderRadius: 2,
                      px: 2.5,
                      py: 1,
                    }}
                  >
                    Add
                  </Button>
                </Grid>
              </Grid>
            </Stack>
          </Stack>
        </Grid>

        <Grid item xs={12} md={4.5}>
          <Stack spacing={1}>
            <Typography sx={{ fontSize: 16, fontWeight: 600, color: TEXT }}>
              Upload Images
            </Typography>
            <UploadDropZone />
          </Stack>
        </Grid>
      </Grid>

      {/* Enter Details */}
      <Stack spacing={2} sx={{ mt: 4 }}>
        <Typography sx={{ fontSize: 16, fontWeight: 600, color: TEXT }}>
          Enter Details
        </Typography>

        <Grid container spacing={2}>
          {/* Left column */}
          <Grid item xs={12} md={6} width={"430px"}>
            <Stack spacing={2}>
              <Box>
                <Typography sx={labelSx}>
                  Mineral Name <InfoOutlined sx={{ color: MUTED, fontSize: 16, ml: 0.5 }} />
                </Typography>
                <TextField
                  fullWidth
                  placeholder="Lorem"
                  value={mineralName}
                  onChange={(e) => setMineralName(e.target.value)}
                  size="small"
                  sx={inputSx}
                />
              </Box>

              <Box>
                <Typography sx={labelSx}>Specimen Name</Typography>
                <TextField
                  fullWidth
                  placeholder="Lorem"
                  value={specimenName}
                  onChange={(e) => setSpecimenName(e.target.value)}
                  size="small"
                  sx={inputSx}
                />
              </Box>

              <Box>
                <Typography sx={labelSx}>
                  Color <InfoOutlined sx={{ color: MUTED, fontSize: 16, ml: 0.5 }} />
                </Typography>
                <TextField
                  fullWidth
                  placeholder="Lorem ipsum"
                  value={color}
                  onChange={(e) => setColor(e.target.value)}
                  size="small"
                  sx={inputSx}
                />
              </Box>

              <Box>
                <Typography sx={labelSx}>Habit</Typography>
                <FormControl fullWidth size="small">
                  <Select
                    value={habit}
                    onChange={(e) => setHabit(e.target.value)}
                    displayEmpty
                    sx={inputSx}
                    renderValue={(v) =>
                      v ? habitOptions.find((o) => o.value === v)?.label : "Lorem ipsum"
                    }
                  >
                    <MenuItem value="">
                      <em>—</em>
                    </MenuItem>
                    {habitOptions.map((o) => (
                      <MenuItem key={o.value} value={o.value}>
                        {o.label}
                      </MenuItem>
                    ))}
                  </Select>
                </FormControl>
              </Box>

              <Box>
                <Typography sx={labelSx}>Cost</Typography>
                <TextField
                  fullWidth
                  placeholder="Lorem"
                  value={cost}
                  onChange={(e) => setCost(e.target.value)}
                  size="small"
                  sx={inputSx}
                />
              </Box>

              <Box>
                <Typography sx={labelSx}>
                  Date Acquired <InfoOutlined sx={{ color: MUTED, fontSize: 16, ml: 0.5 }} />
                </Typography>
                <TextField
                  fullWidth
                  placeholder="Lorem"
                  value={dateAcquired}
                  onChange={(e) => setDateAcquired(e.target.value)}
                  size="small"
                  sx={inputSx}
                />
              </Box>

              <Box>
                <Typography sx={labelSx}>Notes <InfoOutlined sx={{ color: MUTED, fontSize: 16, ml: 0.5 }} /></Typography>
                <TextField
                  fullWidth
                  multiline
                  minRows={4}
                  placeholder="Lorem ipsum dolor sit amet consectetur. Tempor vulputate at amet venenatis tortor ullamcorper arcu..."
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                  size="small"
                   sx={{...inputSx,
                    "& .MuiOutlinedInput-root": {
        width:"872px",
      height:  "105",
      borderRadius: "8px",}
                  }}
                />
              </Box>
            </Stack>
          </Grid>

          {/* Right column */}
          <Grid item xs={12} md={6} width={"430px"}>
            <Stack spacing={2}>
              <Box>
                <Typography sx={labelSx}>
                  ID Number <InfoOutlined sx={{ color: MUTED, fontSize: 16, ml: 0.5 }} />
                </Typography>
                <TextField
                  fullWidth
                  placeholder="Lorem"
                  value={idNumber}
                  onChange={(e) => setIdNumber(e.target.value)}
                  size="small"
                  sx={inputSx}
                />
              </Box>

              <Box>
                <Typography sx={labelSx}>Size</Typography>
                <TextField
                  fullWidth
                  placeholder="Lorem"
                  value={size}
                  onChange={(e) => setSize(e.target.value)}
                  size="small"
                  sx={inputSx}
                />
              </Box>

              <Box>
                <Typography sx={labelSx}>Locality</Typography>
                <TextField
                  fullWidth
                  placeholder="Lorem"
                  value={locality}
                  onChange={(e) => setLocality(e.target.value)}
                  size="small"
                  sx={inputSx}
                />
              </Box>

              <Box>
                <Typography sx={labelSx}>Where Acquired</Typography>
                <FormControl fullWidth size="small">
                  <Select
                    value={whereAcquired}
                    onChange={(e) => setWhereAcquired(e.target.value)}
                    displayEmpty
                    sx={inputSx}
                    renderValue={(v) =>
                      v
                        ? acquiredOptions.find((o) => o.value === v)?.label
                        : "Lorem ipsum dolor sit amet"
                    }
                  >
                    <MenuItem value="">
                      <em>—</em>
                    </MenuItem>
                    {acquiredOptions.map((o) => (
                      <MenuItem key={o.value} value={o.value}>
                        {o.label}
                      </MenuItem>
                    ))}
                  </Select>
                </FormControl>
              </Box>

              <Box>
                <Typography sx={labelSx}>Value</Typography>
                <TextField
                  fullWidth
                  placeholder="Lorem"
                  value={value}
                  onChange={(e) => setValue(e.target.value)}
                  size="small"
                  sx={inputSx}
                />
              </Box>

            </Stack>
          </Grid>
        </Grid>
      </Stack>

      {/* Footer Actions */}
      <Stack
        direction="row"
        justifyContent="flex-end"
        alignItems="center"
        spacing={2}
        sx={{ mt: 4 }}
      >
        <Button
          variant="outlined"
          sx={{
            textTransform: "none",
            color: ORANGE,
            borderColor: ORANGE,
            borderRadius: 2,
            px: 3,
            "&:hover": { borderColor: "#ea6b0c", bgcolor: "transparent" },
          }}
        >
          Go Back
        </Button>
        <Button
          variant="contained"
          sx={{
            textTransform: "none",
            bgcolor: ORANGE,
            "&:hover": { bgcolor: "#ea6b0c" },
            borderRadius: 2,
            px: 3,
          }}
        >
          Continue
        </Button>
      </Stack>
    </Box>
  )
}
