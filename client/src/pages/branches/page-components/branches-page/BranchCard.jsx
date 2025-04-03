import * as React from 'react';
import {
    Box,
    Grid,
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
    FmdGoodTwoTone as FmdGoodTwoToneIcon,
    Tag as TagIcon
} from '@mui/icons-material';


export default function BranchCard({ branch }) {
    return (
        <Card sx={{ minWidth: 240, maxWidth: 320, width: '100%' }}>
            <CardActionArea>
                <CardMedia
                    component="img"
                    height="140"
                    image={branch.img || 'https://thumbs.dreamstime.com/b/no-image-icon-vector-available-picture-symbol-isolated-white-background-suitable-user-interface-element-205805243.jpg'}
                    alt="city img"
                />

                <CardContent>
                    <Typography gutterBottom sx={{ color: 'text.secondary', fontSize: 20 }}>
                        {branch.name}
                    </Typography>

                    <Grid container mb={2} gap={1} directio={'row'}>
                        <Grid>
                            <Box display="flex" alignItems="center">
                                <TagIcon />
                                <Typography ml={1} sx={{ color: 'text.secondary' }}>
                                    {branch.id}
                                </Typography>
                            </Box>
                        </Grid>

                        <Grid>
                            <Box display="flex" alignItems="center">
                                <FmdGoodTwoToneIcon />
                                <Typography ml={1} sx={{ color: 'text.secondary' }}>
                                    {branch.location}
                                </Typography>
                            </Box>
                        </Grid>
                    </Grid>

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
