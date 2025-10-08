import { Box } from '@mui/material'
import React from 'react'
import GeographicalData from './GeographicalData'
import Surveys from './Survays'
import ExplorationData from './ExplorationData'
import RegionalData from './RegionalData'

const All = () => {
  return (
    <Box width={"100%"}>
        <GeographicalData />
        <Surveys/>
        <ExplorationData />
        <RegionalData />
    </Box>
  )
}

export default All