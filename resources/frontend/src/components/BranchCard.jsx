import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

import SupervisorAccountTwoToneIcon from '@mui/icons-material/SupervisorAccountTwoTone';
import DirectionsCarFilledTwoToneIcon from '@mui/icons-material/DirectionsCarFilledTwoTone';

const bull = (
    <Box
        component="span"
        sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
    >
        •
    </Box>
);

export default function BranchCard({ branch }) {
    console.log(branch)
    return (
        <Card dark sx={{ minWidth: 275 }}>
            <CardContent>
                <Typography gutterBottom sx={{ color: 'text.secondary', fontSize: 20 }}>
                    {branch.name} {branch.id}
                </Typography>

                <Typography sx={{ color: 'text.secondary', mb: 1.5 }}>
                    {branch.location}
                </Typography>

                <Box display="flex" alignItems="center">
                    <SupervisorAccountTwoToneIcon />
                    <Typography ml={1} sx={{ color: 'text.secondary' }}>
                        {branch.managersCount}
                    </Typography>
                </Box>

                <Box display="flex" alignItems="center">
                    <DirectionsCarFilledTwoToneIcon />
                    <Typography ml={1} sx={{ color: 'text.secondary' }}>
                        {branch.vehiclesCount}
                    </Typography>
                </Box>
            </CardContent>

            <CardActions>
                <Button size="small">To branch</Button>
            </CardActions>
        </Card>
    );
}
