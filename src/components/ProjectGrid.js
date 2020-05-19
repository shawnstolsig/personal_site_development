import React from 'react';
import {
    Grid,
    Typography
} from '@material-ui/core';

import ProjectCard from './ProjectCard'
import projects from '../assets/content/projects'

export default function ProjectGrid() {

    return (
        <Grid container justify="center" spacing={2}>

            {/* Page title */}
            <Grid item xs={12}>
                <Typography variant="h3" align="center">
                    Projects
                </Typography>
            </Grid>

            {/* Project cards */}
            {projects.map((project) => (
                <Grid key={project.title} item>
                    <ProjectCard 
                        {...project}
                    />
                </Grid>
            ))}
            
        </Grid>
    );
}
