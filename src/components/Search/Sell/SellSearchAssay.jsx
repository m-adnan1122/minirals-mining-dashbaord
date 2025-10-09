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
import Range from "./Range"

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
        border: "2px dashed rgba(253, 126, 20, 1)",
        bgcolor: "#fff",
        borderRadius: 2,
        p: 4,
        minHeight: "158px",
        width:"295px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        position: "relative",
      }}
    >
     <Stack alignItems="center" spacing={1}>
  <Box
    width="29px"
    height="29px"
    sx={{
      backgroundImage: "url('plus.png')",
      backgroundSize: "cover",
      backgroundPosition: "center",
      backgroundRepeat: "no-repeat",
      transition: "filter 0.3s ease",
      cursor: "pointer", // 👈 makes it visually clickable
      "&:hover": {
        filter: "brightness(1.2)",
        // 👈 adds hover feedback
      },
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
  />
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

      <Stack direction={"row"} spacing={23}>    
      <Range />
      <Grid container spacing={3} >
             <Grid item xs={12} md={4.5}>
          <Stack spacing={1} pt={5}>
            <Typography sx={{ fontSize: 16, fontWeight: 600, color: TEXT }}>
              Upload Images
            </Typography>
            <UploadDropZone />
          </Stack>
        </Grid>
      </Grid>
      </Stack>

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
            py:1.2,
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
            py:1.3,
          }}
        >
          Continue
        </Button>
      </Stack>
    </Box>
  )
}
