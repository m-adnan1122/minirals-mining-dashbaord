import { Box, Stack } from '@mui/material'
import React from 'react'

export const Fourth = () => {
  return (
    <Stack  alignItems={"center"}>
            <Box
              component="img"
              width={{md:"700px",lg:"1000px", xl:"1400px"}}
              src={"/group2.png"}
              sx={{
                display: "block",
                color:"#fff",
                objectFit: "contain",
                pt: 10,
              }}
            />
    </Stack>
  )
}
