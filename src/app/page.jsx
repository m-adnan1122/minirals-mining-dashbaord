import { Box } from '@mui/material'
import { useRouter } from 'next/router'
import React from 'react'

const page = () => {
  const router = useRouter();
  return (
    <Box>
      <Button onclick={()=> router.push("/signup")}>
        move on signup page
      </Button>
      <Button onclick={()=> router.push("/pricing")}>
        move on pricing
      </Button>
    </Box>
  )
}

export default page