import React from 'react';

import { Box, Grid, Typography } from '@mui/material';
import { boxStyle, logoStyle, brandStyle } from './BrandingStyles';

export default function Branding() {
    return (
        <Grid style={boxStyle}>
            <Grid container columnSpacing={4} justifyContent="center">
                <Grid item>
                    <Box
                        component="img"
                        src="/logo.png"
                        alt="logo"
                        style={logoStyle}
                    />
                </Grid>
                <Grid item display="flex" alignItems="center" style={brandStyle}>
                    <Typography variant="h5" fontWeight="bold">
                        Near Protocol
                    </Typography>
                </Grid>
            </Grid>
        </Grid>
    );
}