import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {
	Card,
	CardActionArea,
	CardActions,
	CardContent,
	CardMedia,
	Button,
	Typography,
	Modal,
    Backdrop,
	Fade,
	Grid
} from '@material-ui/core'

const useStyles = makeStyles((theme) => ({
	root: {
		maxWidth: 290,
		backgroundColor: 'rgba(1,1,1,.5)'
	},
	smallCardMedia: {
		height: 290,
	},
	largeCardMedia: {
		height: 500,
	},
	modal: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    paper: {
        backgroundColor: theme.palette.background.paper,
        border: '2px solid #000',
        boxShadow: theme.shadows[5],
        padding: theme.spacing(2, 4, 3),
    },
}));

export default function ProjectCard({ title, imageUrl, description, repoUrl, videoUrl }) {
	const classes = useStyles();
    const [open, setOpen] = React.useState(false);

    const handleOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

	return (
		<React.Fragment>
			<Card className={classes.root}>
				<CardActionArea>
					<CardMedia
						component="img"
						className={classes.smallCardMedia}
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

				<CardActions>
					<Button size="small" color="primary" onClick={handleOpen}>
						Learn More
					</Button>
				</CardActions>
			</Card>

			{/* this modal pops out to show project details when "learn more" is clicked */}
			<Modal
                aria-labelledby="transition-modal-title"
                aria-describedby="transition-modal-description"
                className={classes.modal}
                open={open}
                onClose={handleClose}
                closeAfterTransition
                BackdropComponent={Backdrop}
                BackdropProps={{
                    timeout: 500,
                }}
            >
                <Fade in={open}>
                    <div className={classes.paper}>
                        <Grid container>
							<Grid item xs={12}>
								<Typography variant="h4">shiftMANAGR</Typography>
							</Grid>
							<Grid item xs={12} lg={8}>
								<Card>
									<CardMedia
										component="video"
										className={classes.largeCardMedia}
										src={videoUrl}
										title={title}
									/>
								</Card>
							</Grid>
						</Grid>
                    </div>
                </Fade>
            </Modal>
		</React.Fragment>
	);
}