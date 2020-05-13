import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {
	Card,
	CardActionArea,
	CardActions,
	CardContent,
	CardMedia,
	Button,
	Typography
} from '@material-ui/core'

const useStyles = makeStyles({
	root: {
		maxWidth: 300,
	},
	media: {
		height: 300,
	},
});

export default function ProjectCard({ title, imageUrl, description}) {
	const classes = useStyles();

	return (
		<Card className={classes.root}>
			<CardActionArea>
				<CardMedia
					component="img"
					className={classes.media}
					image={imageUrl}
					title={title}
				/>
				<CardContent>
					<Typography gutterBottom variant="h5" component="h2">
						{title}
					</Typography>
					<Typography variant="body2" color="textSecondary" component="p">
						{description}
					</Typography>
				</CardContent>
			</CardActionArea>

			{/* <CardActions>
				<Button size="small" color="primary">
					Share
				</Button>
				<Button size="small" color="primary">
					Learn More
				</Button>
			</CardActions> */}
		</Card>
	);
}