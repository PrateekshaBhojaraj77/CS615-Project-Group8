import * as React from 'react';
import { Container, Typography, Grid, Card, CardContent, Avatar } from '@mui/material';
import '../CSS/team.css';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
// team members data
const teamMembers = [
    {
        name: 'Prateeksha Bhojaraj',
        role: 'Group memeber',
        image: 'https://placekitten.com/150/150',
        description: 'Graduate Student, UMASS Boston',
    },
    {
        name: 'Yeshaswini Vasudevamurthy',
        role: 'Group memeber',
        image: 'https://placekitten.com/150/150',
        description: 'Graduate Student, UMASS Boston',
    },
    {
        name: 'Lahasya K Rajanna',
        role: 'Group memeber',
        image: "lahasya.png",
        description: 'Graduate Student, UMASS Boston',
        email: "mailto:lahasyakr.07@gmail.com",
        git: "https://github.com/Lahasyakr",
        linkedin: "https://www.linkedin.com/in/lahasyarajanna/"
    },
];

const Team = () => {
    return (
        <Container maxWidth="lg">
            <Typography variant="h4" align="center" gutterBottom className='heading'>
                Meet Our Team
            </Typography>
            <Grid container spacing={5} className='teamcards'>
                {teamMembers.map((member, index) => (
                    <Grid item xs={12} sm={6} md={4} key={index}>
                        <Card className='cardbg'>
                            <Avatar alt={member.name} src={member.image} sx={{ width: 150, height: 150, margin: '0 auto', marginTop: '2rem' }} />
                            <CardContent>
                                <Typography variant="h6" align="center" gutterBottom>
                                    {member.name}
                                </Typography>
                                <Typography variant="subtitle1" align="center" color="textSecondary">
                                    {member.role}
                                </Typography>
                                <Typography variant="body2" align="center" color="textPrimary">
                                    {member.description}
                                </Typography>
                                <p align="center">
                                    <a href={member?.email} target="blank" title='Email'>
                                        <MailOutlineIcon className="icon" twoToneColor="#000000" style={{ fontSize: 25, color: "black" }} />
                                    </a>
                                    <a href={member?.linkedin} target="blank" title='LinkedIn'>
                                        <LinkedInIcon className="icon" style={{ fontSize: 25, color: "#0A66C2" }} />
                                    </a>
                                    <a href={member?.git} target="blank" title='GitHub' >
                                        <GitHubIcon className="icon" style={{ fontSize: 25, color: "black" }} />
                                    </a>
                                </p>
                            </CardContent>
                        </Card>
                    </Grid>
                ))}
            </Grid>
        </Container>
    );
};

export default Team;