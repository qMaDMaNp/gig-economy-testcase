import * as React from 'react';
import { Link } from 'react-router-dom';

import {
  AppBar,
  Box,
  Grid,
  Toolbar,
  Typography,
  Button,
  IconButton
} from '@mui/material';

const links = [
  {
    label: 'Branches',
    to: '/'
  },
  {
    label: 'Managers',
    to: '/managers'
  },
  {
    label: 'Vehicles',
    to: '/vehicles'
  },
]


export default function Navbar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Moja Flota
          </Typography>

          <Grid container gap={1}>
            {links.map(link => (
              <Grid key={link.to}>
                <Button to={link.to} LinkComponent={Link} variant="text">{link.label}</Button>
              </Grid>
            ))}
          </Grid>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
