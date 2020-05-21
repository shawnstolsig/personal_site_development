// library  imports
import React from 'react';

// Material-UI imports
import {
	Container,
	CssBaseline
} from '@material-ui/core'

// Site imports
import Navbar from './Navbar'
import AboutMe from './AboutMe'
import ProjectGrid from './ProjectGrid'
import Timeline from './Timeline'
import Hero from './Hero'
import ContactForm from './ContactForm'

export default function App() {
	return (
		<React.Fragment>
			<CssBaseline />
			<Container maxWidth="lg">
				<Navbar />

				<Hero />
				<br />
				<br />
				<AboutMe />
				<br />
				<br />
				<ProjectGrid />
				<br />
				<br />
				<Timeline />
				<br />
				<br />
				<ContactForm />
			</Container>
		</React.Fragment>
	);
}