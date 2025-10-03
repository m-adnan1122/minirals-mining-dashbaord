"use client";
import Head from '@/components/pricing/Head';
import { Box } from '@mui/material';
import React, { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';

const MainHeader = () => {


  return (
    <Box width="100%" height="100%">
      <Head />
    </Box>
  );
};

export default MainHeader;
