"use client";

import { Box, Container, Grid, Stack, Typography } from "@mui/material";

const ORANGE = "rgba(253, 126, 20, 1)";
const TEXT = "rgba(31, 31, 52, 1)";

 
export default function Fifth({
 leadIn="Built with user-centricity as a core principle",
headline="TCF places user convenience at the forefront, guaranteeing a smooth journey in exploring mining investments, conducting risk assessments, and securely purchasing solid minerals through blockchain."
    ,
  features = [
          {
            title: "Time Efficiency",
            description:
              "Save valuable time as you navigate the intricacies of mining investments, risk assessments, and secure blockchain transactions.",
          },
          {
            title: "User-Friendly Hub",
            description:
              "Designed for ease of use, this hub makes your journey through mining investments, risk assessments, and solid mineral purchases via blockchain intuitive and enjoyable.",
          },
          {
            title: "Tailored to You",
            description:
              "Tailor your experience to suit your unique needs in mining investments, risk assessments, and blockchain transactions.",
          },
        ],
  imageSrc = "/laptop.png",
  imageAlt = "Product screenshot on laptop",
}) {
  return (
    <Box display={"flex"} alignItems={"center"} justifyContent={"center"} >
        <Stack
      component="section"

      sx={{
        bgcolor: "#fff",
        py: { xs: 6, md: 10 },
        mt:13,
      }}
      alignItems={"center"}
      ml={10}
    >

      {/* Main content */}
      <Container maxWidth="lg">
        <Grid container spacing={{ xs: 4, md: 1 }} alignItems="center">
         <Stack direction={"row"} alignItems={"center"} >
             <Grid item xs={12} md={7}>
            <Stack  width={"530px"} >
              <Typography
                component="p"
                sx={{
                  color: ORANGE,
                  fontWeight: 700,
                  fontSize:  "24px",
                  lineHeight: 1.4,
                }}
              >
                {leadIn}
              </Typography>

              <Typography
                component="h2"
                sx={{
                  color: TEXT,
                 fontWeight: 700,
                  fontSize:  "32px",
                  lineHeight: 1.25,
                }}
              >
                {headline}
              </Typography>
            </Stack>
          </Grid>

          <Grid item xs={12} md={5}>
            <Box
              component="img"
              src={imageSrc}
              alt={imageAlt}
              sx={{
                width: "100%",
                height: "auto",
                maxWidth: 560,
                display: "block",
                objectFit: "contain",
              }}
            />
          </Grid>
                   </Stack>

        </Grid>

        {/* Feature cards */}
        <Grid container spacing={3} sx={{ mt: { xs: 4, md: 6 } }}>
          {features.map((feature, index) => (
            <Grid key={index} item xs={12} md={4}>
              <Box
                sx={{
                  border: `1px solid ${ORANGE}`,
                  borderRadius: 2,
                  p: { xs: 2.5, md: 2 },
                  boxShadow: "0 8px 24px rgba(253, 126, 20, 0.15)",
                  bgcolor: "#fff",
                  height: "100%",
                  width:"311px",
                }}
              >
                <Typography
                  component="h3"
                  sx={{
                    color: ORANGE,
                    fontWeight: 700,
                    fontSize: { xs: 16, sm: 18 },
                    lineHeight: 1.35,
                  }}
                >
                  {feature.title}
                </Typography>
                <Typography
                  component="p"
                  sx={{
                    color: TEXT,
                    fontWeight: 400,
                    fontSize: { xs: 14, sm: 15 },
                    lineHeight: 1.6,
                    mt: 1.5,
                  }}
                >
                  {feature.description}
                </Typography>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Stack>
    </Box>
  );
}
