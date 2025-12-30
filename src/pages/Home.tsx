import AddIcon from '@mui/icons-material/Add'
import { Box, Container, IconButton, Typography } from '@mui/material'
import Toolbar from '@mui/material/Toolbar'
import Grid2 from '@mui/material/Unstable_Grid2'
import React from 'react'
import IntroCard from '../Components/IntroCard'
import { useUser } from '../store/UserProvider'

export interface HomeProps {}

export default function Home({}: HomeProps) {
  const { user } = useUser()
  // TODO: We have the same logic in the Video Channel. This dialog and the Are you sure dialog should be a separate component
  const [openAddVideoDialog, setOpenAddVideoDialog] = React.useState<boolean>(false)
  return (
    <>
      <Container maxWidth="md" sx={{ pt: 3 }}>
        <Toolbar />
        <Grid2 container spacing={2}>
          <Grid2 xs={12}>
            <IntroCard />
          </Grid2>
          <Grid2
            xs={12}
            sx={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              flexDirection: 'column'
            }}>
            <br />
            <Box
              sx={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                width: '100%'
              }}>
              <Typography variant="h5" component="h2" sx={{ flexGrow: 1, textAlign: 'center' }}>
                Musical work
              </Typography>
              {user?.role === 'teacher' && (
                <IconButton aria-label="add" onClick={() => setOpenAddVideoDialog(true)}>
                  <AddIcon />
                </IconButton>
              )}
            </Box>
          </Grid2>
        </Grid2>
      </Container>
    </>
  )
}
