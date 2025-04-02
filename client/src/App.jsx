import { Link, Routes, Route } from 'react-router-dom';

import { Box } from '@mui/material';
import { ThemeProvider, createTheme } from '@mui/material';

import Branches from './pages/branches/BranchesPage';
import Managers from './pages/managers/ManagersPage';
import Vehicles from './pages/vehicles/VehiclesPage';

import Navbar from './components/Navbar';

import './App.css'

const theme = createTheme({
  palette: {
    mode: 'dark'
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Navbar />
      
      <Box sx={{ p: 2 }}>
        <Routes>
          <Route path="/" element={<Branches />} />
          <Route path="/managers" element={<Managers />} />
          <Route path="/vehicles" element={<Vehicles />} />
        </Routes>
      </Box>
    </ThemeProvider >
  )
}

export default App
