"use client"
import { Box, Container, Grid, Stack, Typography, Card, CardContent } from "@mui/material"

const data= [
  {
    title: "Precision Exploration Hub",
    description:
        "Explore an array of mining projects and companies effortlessly through our Strategic Mining Discovery Center. Customize your search across regions, mineral types, company profiles, resource estimates, risk levels, and beyond.",
    // Replace this with your icon URL (PNG/SVG). Example: "https://your-cdn.com/icons/exploration.png"
    iconSrc: "/icons2/3.png",
    alt: "Exploration icon",
  },
  {
    title: "Dynamic Industry Insights Hub",
    description:"Stay abreast of the latest mining trends and social chatter with our Dynamic Industry Insights Hub. Dive into curated news and social media updates, gaining a comprehensive view of the mining landscape.",
    iconSrc: "/icons2/1.png",
    alt: "Insights icon",
  },
  {
    title: "AI Driven Insights",
    description: "Access forward-thinking perspectives and in-depth content evaluations, complemented by personalized suggestions for akin projects and companies.",
    iconSrc: "/icons2/2.png",
    alt: "AI icon",
  },
  {
    title: "Our Mobile App",
    description: "Functioning as a central hub for all your mining needs, Our App provides effortless access to detailed reports and interactive features.",
    iconSrc: "/icons2/4.png",
    alt: "Mobile app icon",
  },
]

export default function Third({
  heading = "Here's all the good stuff",
  features = data,
  maxWidth = "lg",
  dark = true,
}) {
  return (
    <Box  mt={4}
      component="section"
      sx={{
        bgcolor: "rgba(30, 30, 30, 1)",
        color: "var(--color-foreground)",
        py: { xs: 6, md: 10 },
      }}
    >
      <Container maxWidth={maxWidth}>
        <Typography
          variant="h5"
          align="center"
          sx={{
            fontWeight: 700,
            mb: { xs: 4, md: 6 },
            letterSpacing: 0.2,
            fontSize:"24px",
            color:"#fff",
          }}
        >
          {heading}
        </Typography>

        <Grid container spacing={{ xs: 4, md: 1, lg:3 }}>
          {features.map((feat, idx) => (
            <Grid key={idx} item xs={12} sm={6} md={3}>
              <Card
                elevation={0}
                sx={{
                  bgcolor: "transparent",
                  color: "inherit",
                  textAlign: "center",
                  alignItems:"center",
                 width:{ xs: "222px", md: "238px", lg:"255px"},
                }}
              >
                <CardContent>
                  <Stack spacing={1.5} alignItems="center">
                    {/* Icon as regular image so you can provide any URL */}
                    <Box
                      component="img"
                      src={feat.iconSrc || "/placeholder.svg"}
                      alt={feat.alt ?? `${feat.title} icon`}
                      sx={{
                        width: 38,
                        height: 38,
                        display: "block",
                        color:"#fff",
                        objectFit: "contain",
                        mb: 1,
                      }}
                    />
                    <Typography variant="subtitle1" sx={{ fontWeight: 700, lineHeight: 1.2 , fontSize:"16px", color: "#fff" }}>
                      {feat.title}
                    </Typography>
                    <Typography
                      variant="body2"
                      sx={{
                        opacity: 0.8,
                        maxWidth: 320,
                        lineHeight: 1.6,
                        color: "#fff" ,
                        fontWeight: 400,  fontSize:"12px", 
                      }}
                    >
                      {feat.description}
                    </Typography>
                  </Stack>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>

       <Box 
                sx={{
                  width: { xs: "400px", sm: "500px", md: '630px' ,lg:'646px' },
                  height: { xs: "400px", sm: "500px", md: '630px' ,lg:'646px' },
                  position: "absolute",
                  top: { xs: "-200px", sm: "-150px", md: "1870px",lg:"2380px",xl:'2820px' },
                  right: {md: -430, lg: -450, xl:-440},
      
                  display: { xs: "none", sm: "block" },
                }}
              >
                <Box  
                 width={"32%"}
                   
                            sx={{
                    overflow: "hidden",
      // background: " radial-gradient(60% 60% at 75% 45%, rgba(255, 141, 46, 0.50) 40%, rgba(255, 180, 67, 0.18) 60%, rgba(255, 180, 67, 0) 65%)",
                    display: "flex",
                    objectFit:"cover"
                  }}
                >
                  <Box
                    sx={{
                      width: { sm: "300px", md: "354px" },
                      height: { sm: "243px", md: "240px" },
                      overflow: "hidden",
                      backgroundImage: "url('/third.png')",
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
                  top: { xs: "-200px", sm: "-150px", md: "2430px",lg:"3100px",xl:'3820px' },
                  left: 0,
      
                  display: { xs: "none", sm: "block",  },
                }}
              >
                <Box  
                 width={"35%"}
                   
                            sx={{
                    overflow: "hidden",
      // background: " radial-gradient(60% 60% at 75% 45%, rgba(255, 141, 46, 0.50) 40%, rgba(255, 180, 67, 0.18) 60%, rgba(255, 180, 67, 0) 65%)",
                    display: "flex",
                    objectFit:"cover"
                  }}
                >
                  <Box
                    sx={{
                      width: { sm: "300px", md: "354px" },
                      height: { sm: "243px", md: "240px" },
                      overflow: "hidden",
                      backgroundImage: "url('/for.png')",
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
                  top: { xs: "-200px", sm: "-150px", md: "4230px",lg:"4800px",xl:'5490px' },
                  right:"-420px",
      
                  display: { xs: "none", sm: "block",  },
                }}
              >
                <Box  
                 width={"35%"}
                   
                            sx={{
                    overflow: "hidden",
      // background: " radial-gradient(60% 60% at 75% 45%, rgba(255, 141, 46, 0.50) 40%, rgba(255, 180, 67, 0.18) 60%, rgba(255, 180, 67, 0) 65%)",
                    display: "flex",
                    objectFit:"cover"
                  }}
                >
                  <Box
                    sx={{
                      width: { sm: "300px", md: "354px" },
                      height: { sm: "243px", md: "240px" },
                      overflow: "hidden",
                      backgroundImage: "url('/stone.png')",
                      backgroundSize: "cover",
                      backgroundPosition: "center",
                      backgroundRepeat: "no-repeat",
                    }}
                  />
                </Box>
              </Box> 
      
       <Box 
                sx={{
                  width: { xs: "400px", sm: "500px", md: '330px' ,lg:'646px' },
                  height: { xs: "400px", sm: "500px", md: '330px' ,lg:'646px' },
                  position: "absolute",
                  top: { xs: "-200px", sm: "-150px", md: "5170px",lg:"5700px",xl:'6400px' },
                  left:"0",
      
                  display: { xs: "none", sm: "block",  },
                }}
              >
                <Box  
                 width={"35%"}
                   
                            sx={{
                    overflow: "hidden",
      // background: " radial-gradient(60% 60% at 75% 45%, rgba(255, 141, 46, 0.50) 40%, rgba(255, 180, 67, 0.18) 60%, rgba(255, 180, 67, 0) 65%)",
                    display: "flex",
                    objectFit:"cover"
                  }}
                >
                  <Box
                    sx={{
                      width: { sm: "300px", md: "354px" },
                      height: { sm: "243px", md: "240px" },
                      overflow: "hidden",
                      backgroundImage: "url('/stone1.png')",
                      backgroundSize: "cover",
                      backgroundPosition: "center",
                      backgroundRepeat: "no-repeat",
                    }}
                  />
                </Box>
              </Box> 
      
    </Box>
  )
}
