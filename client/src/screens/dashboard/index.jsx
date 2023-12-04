import { Box } from '@mui/material'
import Header from 'components/header'
import React from 'react'

function Dashboard() {
  return (
    <Box m={"1.5rem 2.5rem"}>
      <Header title={"Header"} subtitle={"this is header component"}/>
    </Box>
  )
}

export default Dashboard