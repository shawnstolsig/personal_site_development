import React from 'react';
import {
	Container,
} from '@material-ui/core'

import Navbar from './Navbar'
import ProjectGrid from './ProjectGrid'
import projects from '../data/projects'



export default function App() {
	return (
		<Container component="main">
			<Navbar />

			<ProjectGrid projects={projects} />
		</Container>
	);
}