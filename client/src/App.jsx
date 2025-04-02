import { useState } from 'react';

import axios from 'axios';

import { Box, Grid, Typography } from '@mui/material';
import { ThemeProvider, createTheme } from '@mui/material';

import BranchCard from './components/BranchCard';

import './App.css'

const theme = createTheme({
  palette: {
    mode: 'dark'
  },
});


const branches = [
  {
    id: 1,
    name: 'Warszawa branch',
    location: 'Warszawa',
    managersCount: 2,
    vehiclesCount: 20
  },

  {
    id: 2,
    name: 'Wroclaw branch',
    location: 'Wroclaw',
    managersCount: 2,
    vehiclesCount: 10
  },
];

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Box sx={{ p: 2 }}>
        <Box mb={2}>
          <Typography variant="h6" color="initial">
            Branches
          </Typography>
        </Box>

        <Grid container gap={2}>
          {branches.map(x => (
            <Grid key={x.id} item>
              <BranchCard branch={x} />
            </Grid>
          ))}

        </Grid>
      </Box>
    </ThemeProvider >
  )
}

export default App
