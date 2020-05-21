import React from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import {
	Card,
	CardActionArea,
	CardContent,
	CardMedia,
	Chip,
	Button,
	Box,
	Typography,
	Backdrop,
	Fade,
	Grid,
	Dialog,
	DialogTitle,
	DialogContent,
	Divider,
	IconButton,
	useMediaQuery
} from '@material-ui/core'
import CloseIcon from '@material-ui/icons/Close';

const useStyles = makeStyles((theme) => ({
	root: {
		maxWidth: 290,
		height: 463,
		backgroundColor: 'rgba(1,1,1,.5)'
	},
	smallCardMedia: {
		height: 290,
	},
	largeCardMediaRoot: {
		elevation: 0,
		margin: theme.spacing(2),
	},
	largeCardMedia: {
		maxHeight: '70vh',
		maxWidth: '90vw',
		width: 'auto',
	},
	modal: {
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'center',
	},
	paper: {
		backgroundColor: theme.palette.background.paper,
		padding: theme.spacing(2, 4, 3),
	},
	chip: {
		margin: theme.spacing(0.5)
	},
	gridContainerMargin: {
		margin: theme.spacing(1)
	},
	closeButton: {
		position: 'absolute',
		right: theme.spacing(7),
		top: theme.spacing(1),
		color: theme.palette.grey[500],
	},
	linkButton: {
		margin: theme.spacing(0.5)
	},
	dialogTitle: {
		padding: 0
	}
}));

export default function ProjectCard({ title, imageUrl, caption, description, repoUrl, videoUrl, stack, demoUrl }) {
	const classes = useStyles();
	const [open, setOpen] = React.useState(false);
	const theme = useTheme();
	const fullScreen = useMediaQuery(theme.breakpoints.down('md'));

	const handleOpen = () => {
		setOpen(true);
	};

	const handleClose = () => {
		setOpen(false);
	};

	return (
		<React.Fragment>

			{/* this card is rendered by Project Grid */}
			<Card className={classes.root} onClick={handleOpen}>
				<CardActionArea>
					<CardMedia
						component="img"
						className={classes.smallCardMedia}
						image={imageUrl}
						title={title}
					/>
					<CardContent>
						<Typography gutterBottom variant="h5">
							{title}
						</Typography>
						<Typography variant="body2" color="textSecondary">
							{caption}
						</Typography>
					</CardContent>
				</CardActionArea>
			</Card>

			{/* this modal pops out to show project details when "learn more" is clicked */}
			<Dialog
				fullWidth={true}
				maxWidth='lg'
				fullScreen={fullScreen}
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
						<DialogTitle disableTypography className={classes.dialogTitle}>
							<Typography 
								variant="h4" 
								align="center"
								
								>{title} 
							</Typography>
							<IconButton
								aria-label="close"
								className={classes.closeButton}
								onClick={handleClose}>
								<CloseIcon />
							</IconButton>
						</DialogTitle>
						<DialogContent>
							<Grid container>
								{videoUrl &&
									<Grid item xs={12}>
										<Card 
											elevation={0} 
											className={classes.largeCardMediaRoot}
											align="center"
											>
											<CardMedia
												playsInline
												autoPlay
												loop
												controls
												component="video"
												src={videoUrl}
												title={title}
												className={classes.largeCardMedia}
											/>
										</Card>
									</Grid> }
								<Grid item xs={12}>
									<Grid container>
										<Grid item xs={12} lg={8}>
											<Typography
												variant="h6"
												align="center"
											>Description
											</Typography>
											<Divider variant="middle" />
											<Box className={classes.gridContainerMargin}>
												{description.map((para) => (
													<Typography
														key={para}
														variant="body1"
														gutterBottom
													>{para}
													</Typography>
												))}
											</Box>

										</Grid>
										<Grid item xs={12} lg={4}>
											<Grid container>
												<Grid item xs={12}>
													<Typography
														variant="h6"
														align="center"
													>Stack
													</Typography>
													<Divider variant="middle" />
													<Box className={classes.gridContainerMargin}>
														{stack.map((tech) => (
															<Chip
																key={tech}
																label={tech}
																size="small"
																className={classes.chip}
																variant="outlined"
															/>
														))}
													</Box>

												</Grid>
												<Grid item xs={12}>
													<Typography
														variant="h6"
														align="center"
													>Links
													</Typography>
													<Divider variant="middle" />
													<Box className={classes.gridContainerMargin}>
														<Button
															variant="contained"
															color="primary"
															href={repoUrl}
															className={classes.linkButton}
															>Repo
														</Button>
														{demoUrl && 
															<Button
																variant="contained"
																color="primary"
																href={demoUrl}
																className={classes.linkButton}
																>Hosted
															</Button>
														}
													</Box>
												</Grid>
											</Grid>
										</Grid>
									</Grid>
								</Grid>
							</Grid>
						</DialogContent>
					</div>
				</Fade>
			</Dialog>
		</React.Fragment >
	);
}