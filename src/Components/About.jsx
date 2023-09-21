import * as React from 'react';
import Grid from '@mui/material/Grid';
import { Typography } from '@mui/material';
import '../CSS/about.css'
import Options from './Options';

function About() {

    return (
        <>

            <Grid
                container
                direction="Column"
                justifyContent="center"
                alignItems="center"
            >
                <Typography variant="h4" gutterBottom className='aboutheading' component="div" >CS615 - Project Group - 8</Typography>
                <Typography variant="h4" gutterBottom className='heading' >Board For Bored</Typography>
            </Grid>
            <Options />
        </>
    )
}

export default About;