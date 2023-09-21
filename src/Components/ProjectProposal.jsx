import * as React from 'react';
import Grid from '@mui/material/Grid';
import { Typography } from '@mui/material';
import '../CSS/projectproposal.css';
import DownloadForOfflineIcon from '@mui/icons-material/DownloadForOffline';
import { orange } from '@mui/material/colors';

function ProjectProposal() {


    return (
        <Grid
            container
            direction="column"
            justifyContent="center"
            alignItems="center"
        >

            <Typography variant="h4" gutterBottom className='heading'>Project Proposal  {" "}
                <a href="images/Proposal.pdf" className="proposallink" targer="_blank" title="Click here to download" download>
                    <DownloadForOfflineIcon sx={{ color: orange[500] }} fontSize='large'/>
                </a>
            </Typography>

            <Typography variant="body1" color="text.primary">Hello!,  Welcome to our CS615 Project page</Typography>
            <Typography variant="body2" color="text.primary">Hello!,  Welcome to our CS615 Project page</Typography>
        </Grid>
    )
}

export default ProjectProposal;