 "use client";
import PricingCards from '@/components/pricing/card'
import Head from '@/components/pricing/Head'
import MainLayout from '@/layout/MainLayout';
import { Box } from '@mui/material'
import React, { useState } from 'react'

const page = () => {
  const [price , setPrice] = useState(false)
  const [profile , setProfile] = useState(false)
  const [selectedTab, setSelectedTab] = useState("");

  return (
    <Box width="100%" height="100%">
        <Head  selectedTab={selectedTab} setSelectedTab={setSelectedTab} setProfile={setProfile}  />
{        console.log(profile)
}        {
          price &&
                   <PricingCards />

        }
        <MainLayout selectedTab={selectedTab} profile={profile} setSelectedTab={setSelectedTab} />
    </Box>
  )
}

export default page