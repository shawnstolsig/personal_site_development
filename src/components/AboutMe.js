import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import {
    Grid,
    Typography,
    Box
} from '@material-ui/core'

import portrait from '../assets/images/me.jpeg'
import aboutMe from '../data/aboutme'

// styles
const useStyles = makeStyles((theme) => ({
    portrait: {
        borderRadius: '30%',
        // maxHeight: "200px",
        maxWidth: "300px",
    },
}));

export default function AboutMe(){
    const classes = useStyles()
    const {heading, subheading, paragraphs} = aboutMe

    return (
        <Grid container justify="center" alignItems="center">
            <Grid item xs={12}>
                <Typography variant="h4" align="center">{heading}</Typography>
                <Typography variant="h6" align="center">{subheading}</Typography>
            </Grid>
            <Grid item xs={12} md={6}>
                <br/>
                {paragraphs.map((para) => (
                    <React.Fragment>
                        <Typography variant="body1">{para}</Typography>
                        <br/>
                    </React.Fragment>
                ))}
            </Grid>
            <Grid item xs={12} md={6}>
                <Box align="center">
                    <img 
                        className={classes.portrait} 
                        src={portrait} 
                        alt="Me" 
                        align="center"/>

                </Box>
            </Grid>
            
        </Grid>
    )
}