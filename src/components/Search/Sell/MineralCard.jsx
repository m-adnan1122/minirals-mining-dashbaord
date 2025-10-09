import { Box, Card, CardActions, CardContent, CardMedia, Chip, Button, Typography, Stack } from "@mui/material"
import ArrowForwardIcon from "@mui/icons-material/ArrowForward"
import { SellElementCard } from "./SellElementCard"


export function MineralCard({
  imageSrc = "/SearchProduct.png",
  status = "Pending verification",
  tag = "[Li2O]",
  title = "Lithium (Li) Ore",
  details = [
    { label: "Quantity:", value: "85000 OMT" },
    { label: "Quality:", value: "Li 6.0%" },
    { label: "Tot:", value: "145.00 USD/dmt" },
    { label: "Price:", value: "1087.03 USD/dmt" },
    { label: "Total Values:", value: "9239750 USD" },
  ],
  width = 280,
}) {
      const element = { number: 1, symbol: "H", name: "Hydrogen", atomicMass: 1.008 }
  return (
    <Card
      elevation={0}
      sx={{
        width,
        borderRadius: 2,
        border: "1px solid",
        borderColor: "divider",
        overflow: "hidden",
      }}
    >
      <Box sx={{ position: "relative" }}>
        {/* status chip */}
        <Chip
          label={status}
          size="small"
          sx={{
            position: "absolute",
            borderTopRightRadius: "3px",
            borderBottomRightRadius: "3px",
            borderRadius: 0,
            bgcolor: "rgba(255, 199, 0, 1)",
            color: "rgba(0, 0, 0, 1)",
            zIndex: 1,
            height: 22,
            "& .MuiChip-label": { px: 1, fontWeight: 400, 
            fontSize: "12px",},
          }}
        />
        {/* small Li badge */}
        <Box
          sx={{
            position: "absolute",
            top: 94,
            right: -6,
            px: 0.75,
            py: 0.5,
            fontSize: 11,
            fontWeight: 700,
          }}
        >
          <SellElementCard  data={element}
            size={"sm"} />
        </Box>

        <CardMedia component="img" height="158" image={imageSrc} alt="Lithium ore" sx={{ objectFit: "cover" }} />
      </Box>

      <CardContent sx={{ p: 2 }}>
        <Typography variant="caption" sx={{ color: "rgba(253, 126, 20, 1)", fontWeight: 600, fontSize:"15.65px" }}>
          {tag}
        </Typography>
        <Typography variant="subtitle1" sx={{ fontWeight: 600, fontSize:"18.77px" , mt: 0.5 }}>
          {title}
        </Typography>

        <Stack spacing={1.0} sx={{ mt: 1.5 }}>
          {details.map((d) => (
            <Box key={d.label} sx={{ display: "flex", justifyContent: "space-between" }}>
              <Typography variant="body2" color="rgba(99, 101, 126, 1)" sx={{ fontWeight: 400, fontSize:"14px"}}>
                {d.label}
              </Typography>
              <Typography variant="body2" mr={2} color="rgba(99, 101, 126, 1)" sx={{ fontWeight: 400, fontSize:"14px"}}>
                {d.value}
              </Typography>
            </Box>
          ))}
        </Stack>
      </CardContent>

      <CardActions sx={{ p: 2, pt: 0 }}>
        <Button
          fullWidth
          variant="contained"
          endIcon={<ArrowForwardIcon />}
          sx={{ textTransform: "none", fontWeight: 600, bgcolor:"rgba(253, 126, 20, 1)"
 }}
        >
          Check Details
        </Button>
      </CardActions>
    </Card>
  )
}
