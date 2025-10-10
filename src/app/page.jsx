
import Hero from "@/components/home/Hero";
import HomeHeader from "@/components/home/HomeHeader";
import Second from "@/components/home/Second";
import { Box, Button } from "@mui/material";
import React from "react";

const Page = () => {

  return (
    <Box width={"100%"}>
          <HomeHeader />
          <Hero />
          <Second />
    </Box>
  );
};

export default Page;
