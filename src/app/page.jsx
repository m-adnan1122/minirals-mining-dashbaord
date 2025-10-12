
import Fifth from "@/components/home/Fifth";
import Footer from "@/components/home/Footer";
import { Fourth } from "@/components/home/Fourth";
import Hero from "@/components/home/Hero";
import HomeHeader from "@/components/home/HomeHeader";
import Second from "@/components/home/Second";
import Seventh from "@/components/home/Seventh";
import Sixth from "@/components/home/Sixth";
import Third from "@/components/home/Third";
import { Box, Button } from "@mui/material";
import React from "react";

const Page = () => {

  return (
    <Box width={"auto"}>
          <HomeHeader />
          <Hero />
          <Second />
          <Third />
          <Fourth />
          <Fifth />
          <Sixth />
          <Seventh />
          <Footer />
    </Box>
  );
};

export default Page;
