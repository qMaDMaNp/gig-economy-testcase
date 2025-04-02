import { Box, Grid, Typography } from '@mui/material';

import BranchCard from './page-components/branches-page/BranchCard';


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

export default function BranchesPage() {
  return (
    <Box sx={{ p: 2 }}>
      <Box mb={2}>
        <Typography variant="h6" color="initial">
          Branches
        </Typography>
      </Box>

      <Grid container gap={2}>
        {branches.map(x => (
          <Grid key={x.id}>
            <BranchCard branch={x} />
          </Grid>
        ))}

      </Grid>
    </Box>
  )
}
