import { useState, useEffect } from 'react';

import {
  Box,
  Button,
  Grid,
  Typography,
  Skeleton,
  Stack
} from '@mui/material';

import { Add as AddIcon } from '@mui/icons-material';

import BranchCard from './page-components/branches-page/BranchCard';

import { getBranches } from '../../../api/branches';


export default function BranchesPage() {
  const [branches, setBranches] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    (async () => {
      const branchesRes = await getBranches();

      console.log(branchesRes)
      setBranches(branchesRes.data);
      setIsLoading(false);
    })();
  }, []);

  return (
    <Box sx={{ p: 2 }}>
      <Box mb={4} display="flex" justifyContent="space-between">
        <Typography variant="h6" color="initial">
          Branches ({branches.length})
        </Typography>

        <Button variant="outlined" startIcon={<AddIcon />}>
          New Branch
        </Button>
      </Box>

      {isLoading ? (
        <Grid container gap={2}>
          {Array(4).fill(0).map((x ,idx) => (
            <Grid key={idx}>
              <Stack spacing={0.5}>
                <Skeleton variant="rounded" width={210} height={118} />
                <Skeleton variant="text" width={180} sx={{ fontSize: '1.25rem' }} />
                <Skeleton variant="text" width={60} sx={{ fontSize: '1rem' }} />
                <Skeleton variant="text" width={60} sx={{ fontSize: '1rem' }} />
              </Stack>
            </Grid>
          ))}
        </Grid>
      ) : (
        <Grid container gap={2}>
          {branches.map(x => (
            <Grid key={x.id}>
              <BranchCard branch={x} />
            </Grid>
          ))}
        </Grid>
      )}
    </Box>
  )
}
