import { Avatar, Button, Stack } from '@mui/material'
import React from 'react'
import ProfileForm from './ProfileForm'

const Settings = () => {
  return (
      <Stack width={"100%"}>
        <Stack direction={"row"} ml={3}>
            <Avatar src='/profileImage.png' sx={{
                height: "90px",
                width: "90px"
            }} />
            <Button variant="outlined" color='rgba(26, 26, 26, 1)' sx={{
                borderRadius: "40px",
                height: "32px",
                ml: "30px",
                mt: "25px"
            }} >
                update
            </Button>
        </Stack>
        <Stack>
            <ProfileForm />
        </Stack>
      </Stack>
  )
}

export default Settings