import * as  React from 'react';
import Grid from '@mui/material/Grid';
import CardComponent from './CardComponent';
import '../CSS/options.css';
import projectpropsal from "../images/projectproposal.png"
import team from "../images/team.png";
import comingsoon from "../images/comingsoon.png";

function Options() {

    return (
        <Grid
            container
            direction="row"
            justifyContent="center"
            alignItems="center"
            className='gridclass'
        >
             <CardComponent img={team} title={"Team Members"} idea={"Meet our team"} redirect="/ourteam"/>
            <CardComponent img={projectpropsal} title={"Project Proposal"} idea={"High-Level Project Overview"} redirect="/project_proposal"/>
           
            <CardComponent img={comingsoon} title={"Coming Soon!"} idea={"...loading!"} redirect="/"/>
        </Grid>
    );
}

export default Options;
