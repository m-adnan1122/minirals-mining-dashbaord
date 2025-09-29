import PricingCards from '@/components/pricing/card'
import Head from '@/components/pricing/Head'
import { Box } from '@mui/material'
import React from 'react'

const page = () => {
  return (
    <Box width="100%" height="100%">
        <Head />
         <PricingCards/>
    </Box>
  )
}

export default page