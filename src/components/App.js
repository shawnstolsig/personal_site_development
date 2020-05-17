// library  imports
import React from 'react';

// Material-UI imports
import { makeStyles } from '@material-ui/core/styles'
import {
	Container,
	CssBaseline
} from '@material-ui/core'

// Site imports
import Navbar from './Navbar'
import AboutMe from './AboutMe'
import ProjectGrid from './ProjectGrid'
import Timeline from './Timeline'
import Banner from './Banner'
import Hero from './Hero'

// useStyles hook
const useStyles = makeStyles({

})

export default function App() {
	const classes = useStyles()
	return (
		<React.Fragment>
			<CssBaseline />
			<Container maxWidth="lg">
				<Navbar />

				<Hero />
				<br />
				<br />
				<AboutMe id="aboutMe"/>
				<br />
				<br />
				<ProjectGrid />
				<br />
				<br />
				<Timeline />
				<br />
				<br />
			</Container>
		</React.Fragment>
	);
}