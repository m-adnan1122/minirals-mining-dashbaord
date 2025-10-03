import AlertsAndRisks from '@/components/Dashboard/AlertsAndRisks'
import ElectricTrend from '@/components/Dashboard/ElectricTrend'
import OperationalData from '@/components/Dashboard/OperationalData'
import { Box } from '@mui/material'
import React from 'react'

const page = () => {
  return (
    <Box width={"100%"} height={"100%"}>
        <AlertsAndRisks />
        <OperationalData />
        <ElectricTrend />
    </Box>
  )
}

export default page