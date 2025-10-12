import { Box, Button, Stack, Typography } from '@mui/material'
import React from 'react'

const Second = ({ backgroundSrc = "/frame.png" }) => {
  return (
    <Stack alignItems={"center"} pb={8}> 
        <Stack  pt={8} width={"1138px"}>
      <Stack pb={5} textAlign={"center"}>
        <Typography
          sx={{ fontWeight: 700, fontSize: "23px", color: "rgba(253, 126, 20, 1)" }}
        >
          DISRUPTING MINING RESEARCH
        </Typography>
        <Typography
          sx={{ fontWeight: 600, pl: "25px", fontSize: "23px", color: "rgba(253, 126, 20, 1)" }}
        >
          {"Discover, Finance and Extract"}
        </Typography>
      </Stack>

      <Box
        component="img"
        src={backgroundSrc}
        alt="Mining research"
        sx={{
          width: {md:"1000px", xl:"1110px"},
          height: { xs: 420, md: 520, lg: "781px" },
          objectFit: "cover",
          borderRadius: "10px",
          border: "none"
        }}
      />
      <Box width={"314px"} height={"260px"}
       textAlign={"center"} fontWeight={500} 
       position={"absolute"}
       top={{md: 800,lg:1105,xl:1520}} bgcolor={"#fff"}
       right={{md:40,lg:80, xl: 510}}
       fontSize={"16px"} border={"5px solid rgba(253, 126, 20, 1)"} borderRadius={"7px"}  p={1} textOverflow={"hidden"}>
              {
                "TCF provides a unified platform integrating mining reports and news, backed by cutting-edge machine learning technology. Our platform transforms scattered technical data into a streamlined and searchable interface, empowering users to effortlessly identify potential mineral assets, scrutinize technical reports, and make well-informed decisions."
              }  
      </Box>

    </Stack>
             <Button 
  size="large"
  variant="contained"

  sx={{
      background: "rgba(253, 126, 20, 1)", // orange color on hover
      color: "#fff",
    fontWeight: 700,
    mt: 5,
    fontSize: "16px",
    borderRadius: "18px",
    px: 4,
    py: 1.5,
    width:"180px",
    boxShadow: "none",
    transition: "all 0.3s ease",
    "&:hover": {
      background: "rgba(253, 126, 20, 1)", // orange color on hover
      color: "#fff",
      boxShadow: "none",
    },
    "&:active": {
      background: "rgba(253, 126, 20, 1)", // same color when clicked
      color: "#fff",
      boxShadow: "none",
    },
  }}
>
  {"Invest Now"}
</Button>

      <Box 
          sx={{
            width: { xs: "400px", sm: "500px", md: '630px' ,lg:'654px' },
            height: { xs: "400px", sm: "500px", md: '630px' ,lg:'674px' },
            position: "absolute",
            top: { xs: "-200px", sm: "-150px", md: "620px",lg:'900px', xl: "1400px" },
            right:{md:-430,lg:-430, xl:-260,},
            display: { xs: "none", sm: "block" },
          }}
        >
          <Box
             
          width={"40%"}
             
                      sx={{
              overflow: "hidden",
background: " radial-gradient(60% 60% at 75% 45%, rgba(255, 141, 46, 0.50) 0%, rgba(255, 180, 67, 0.18) 48%, rgba(255, 180, 67, 0) 65%)",
              display: "flex",
              objectFit:"cover"
            }}
          >
            <Box
              sx={{
                width: { sm: "300px", md: "350px" },
                height: { sm: "243px", md: "215px" },
                overflow: "hidden",
                backgroundImage: "url('/pngwing.png')",
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
              }}
            />
          </Box>
        </Box> 

        <Box 
          sx={{
            width: { xs: "400px", sm: "500px", md: '630px' ,lg:'646px' },
            height: { xs: "400px", sm: "500px", md: '630px' ,lg:'646px' },
            position: "absolute",
            top: { xs: "-200px", sm: "-150px", md: "1320px",lg:"1850px",xl:'2340px' },
            left:0,

            display: { xs: "none", sm: "block" },
          }}
        >
          <Box  
           width={"32%"}
             
                      sx={{
              overflow: "hidden",
// background: " radial-gradient(60% 60% at 75% 45%, rgba(255, 141, 46, 0.50) 0%, rgba(255, 180, 67, 0.18) 48%, rgba(255, 180, 67, 0) 65%)",
              display: "flex",
              objectFit:"cover"
            }}
          >
            <Box
              sx={{
                width: { sm: "300px", md: "354px" },
                height: { sm: "243px", md: "240px" },
                overflow: "hidden",
                backgroundImage: "url('/pngwing1.png')",
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
              }}
            />
          </Box>
        </Box> 


    </Stack>
  )
}

export default Second
