"use client"; 

import Form from "@/components/signup/Form";
import { Box, Stack } from "@mui/material";

const Page = () => {
  return (
    <Box 
       width="100%" 
      minHeight="100vh" 
      bgcolor="rgb(249, 249, 249)" 
      sx={{ 
        overflowX: "hidden",
        position: "relative",
      }}  
    >
      <Stack 
        direction="row" 
        width="100%"
        sx={{
          justifyContent: { xs: "center", md: "flex-start" },
          position: "relative",
        }}
      >
        {/* Company Logo */}
        <Box
          sx={{
            width: { xs: "180px", sm: "220px", md: "270px" },
            height: { xs: "106px", sm: "130px", md: "160px" },
            position: { xs: "absolute", md: "relative" },
            top: { xs: "20px", sm: "40px", md: "61px" },
            left: { xs: "50%", md: "390px",lg: "510px" },
            transform: { xs: "translateX(-50%)", md: "none" },
            backgroundImage: "url('/companyLogo.png')",
            backgroundSize: "contain",      
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            color: "rgba(253, 126, 20, 1)",
            zIndex: 10,
          }}
        />

        {/* Decorative Circle - Top Right */}
        <Box 
          sx={{
            width: { xs: "400px", sm: "500px", md: '630px' ,lg:'674px' },
            height: { xs: "400px", sm: "500px", md: '630px' ,lg:'674px' },
            position: "absolute",
            top: { xs: "-200px", sm: "-150px", md: "-220px",lg:'-230px' },
            left:{ xs: "-200px", sm: "530px", md: "690px", lg: "930px" },
            display: { xs: "none", sm: "block" },
          }}
        >
          <Box
            width="100%"
            height="100%"
            sx={{
              borderRadius: "50%", 
              overflow: "hidden",
              background: "radial-gradient(circle at center, rgba(255, 141, 46, 0.51) 10%, rgba(255, 180, 67, 0) 55%)",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Box
              sx={{
                width: { sm: "300px", md: "404px" },
                height: { sm: "243px", md: "327px" },
                overflow: "hidden",
                backgroundImage: "url('/signup1.png')",
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
              }}
            />
          </Box>
        </Box> 
      </Stack>

      {/* Form Component */}
      <Box 
        sx={{ 
          px: { xs: 2, sm: 3, md: 0 }
        }}
      >
        <Form />
      </Box>
    </Box>
  );
};

export default Page;