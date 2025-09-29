"use client";

import { Box, Button } from "@mui/material";
import { useRouter } from "next/navigation";
import React from "react";

const Page = () => {
  const router = useRouter();

  return (
    <Box>
      <Button mb={2} variant="contained" onClick={() => router.push("/signup")}>
        Move to Signup Page
      </Button>
      <Button  variant="contained" color= "red" onClick={() => router.push("/pricing")}>
        Move to Pricing
      </Button>
    </Box>
  );
};

export default Page;
