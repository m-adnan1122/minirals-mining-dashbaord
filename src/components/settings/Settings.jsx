import { Avatar, Button, Stack, Box, Container } from '@mui/material'
import React from 'react'
import ProfileForm from './ProfileForm'

const Settings = () => {
  return (
    <Stack width="100%">
      {/* Centered Container for both avatar and form */}
      <Container maxWidth="xl">
        {/* Avatar + Update button aligned with form */}
        <Stack direction="row" alignItems="center" ml={{md:3,xl:20.2}} mb={3}>
          <Avatar
            src="/profileImage.png"
            sx={{
              height: 90,
              width: 90,
            }}
          />
          <Button
            variant="outlined"
            sx={{
              borderRadius: '40px',
              height: '32px',
              ml: '30px',
              color:"rgba(26, 26, 26, 1)",
              textTransform: 'none',     // keeps text as "Update", not "UPDATE"
              borderColor:"rgba(26, 26, 26, 1)",

            }}
          >
           { "Update"}
          </Button>
        </Stack>

        {/* Form directly under avatar (aligned perfectly) */}
        <ProfileForm />
      </Container>
    </Stack>
  )
}

export default Settings
