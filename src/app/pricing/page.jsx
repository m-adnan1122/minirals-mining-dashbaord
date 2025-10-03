 "use client";
import PricingCards from '@/components/pricing/card'
import Head from '@/components/pricing/Head'
import MainLayout from '@/layout/MainLayout';
import { Box } from '@mui/material'
import React, { useState } from 'react'

const page = () => {
  const [price , setPrice] = useState(false)

  return (
    <Box width="100%" height="100%">
        {
          price &&
                   <PricingCards />
        }
    </Box>
  )
}

export default page