import React from 'react';
import {
	Container,
} from '@material-ui/core'

import Navbar from './Navbar'
import AboutMe from './AboutMe'
import ProjectGrid from './ProjectGrid'
import projects from '../data/projects'



export default function App() {
	return (
		<Container maxWidth="lg">
			<Navbar />

			<AboutMe />
			<ProjectGrid projects={projects} />
		</Container>
	);
}