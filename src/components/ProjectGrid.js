import React from 'react';
import {
    Grid,
    Typography
} from '@material-ui/core';

import ProjectCard from './ProjectCard'


export default function ProjectGrid({projects}) {

    return (
        <Grid container justify="center" spacing={2}>

            {/* Page title */}
            <Grid item xs={12}>
                <Typography variant="h3" align="center">
                    The Cage
                </Typography>
            </Grid>

            {/* Project cards */}
            {projects.map(({title, description, imageUrl}) => (
                <Grid key={title} item>
                    <ProjectCard 
                        title={title}
                        description={description}
                        imageUrl={imageUrl}
                    />
                </Grid>
            ))}
            
        </Grid>
    );
}
