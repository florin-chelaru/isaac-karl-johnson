import React from 'react'
import Toolbar from '@mui/material/Toolbar'
import { Container } from '@mui/material'
import Grid2 from '@mui/material/Unstable_Grid2'

export interface HomeProps {}

export default function Home({}: HomeProps) {
  return (
    <>
      <Container maxWidth="md" sx={{ pt: 3 }}>
        <Toolbar />
        <Grid2 container spacing={2} />
      </Container>
    </>
  )
}
