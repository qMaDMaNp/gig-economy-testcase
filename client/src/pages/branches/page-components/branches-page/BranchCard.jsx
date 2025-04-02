import * as React from 'react';
import {
    Box,
    Card,
    CardActionArea,
    CardContent,
    CardMedia,
    Button,
    Typography
} from '@mui/material';

import {
    SupervisorAccountTwoTone as SupervisorAccountTwoToneIcon,
    DirectionsCarFilledTwoTone as DirectionsCarFilledTwoToneIcon,
} from '@mui/icons-material';


export default function BranchCard({ branch }) {
    return (
        <Card sx={{ maxWidth: 345 }}>
            <CardActionArea>
                <CardMedia
                    component="img"
                    height="140"
                    image={branch.img}
                    alt="city img"
                />

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
            </CardActionArea>
        </Card>
    );
}
