// library imports
import React from 'react'

// material ui imports
import { makeStyles } from '@material-ui/core/styles'
import {
    Typography,
    // Button,
    Container,
    // Grid
} from '@material-ui/core'

const useStyles = makeStyles((theme) => ({
    heroContent: {
      backgroundColor: theme.palette.background.paper,
      padding: theme.spacing(8, 0, 6),
      borderRadius: '3px',
    },
    heroButtons: {
      marginTop: theme.spacing(4),
    },
  }));

export default function Hero() {
    const classes = useStyles()
    return (
        <div className={classes.heroContent}>
            <Container maxWidth="sm">
                <Typography component="h1" variant="h2" align="center" color="textPrimary" gutterBottom>
                    Hi, I'm Shawn.
                </Typography>
                <Typography variant="h5" align="center" color="textSecondary" paragraph>
                Full-Stack Developer ▪ Operations Leader <br />  MBA  ▪  Veteran
                </Typography>
                {/* <div className={classes.heroButtons}>
                    <Grid container spacing={2} justify="center">
                        <Grid item>
                            <Button variant="contained" color="primary">
                                Main call to action
                        </Button>
                        </Grid>
                        <Grid item>
                            <Button variant="outlined" color="primary">
                                Secondary action
                            </Button>
                        </Grid>
                    </Grid>
                </div> */}
            </Container>
        </div>
    )
}

