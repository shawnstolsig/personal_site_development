import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import {
    Grid,
    Typography,
    Box,
    Card,
    CardContent,
    Container   
} from '@material-ui/core'

import {
    FaHtml5,
    FaCss3,
    FaJs,
    FaPython,
    FaVuejs,
    FaReact,
} from 'react-icons/fa'

import { DiDjango } from 'react-icons/di'

import portrait from '../assets/images/me.jpeg'
import aboutMe from '../data/aboutme'

// styles
const useStyles = makeStyles((theme) => ({
    portrait: {
        borderRadius: '30%',
        // maxHeight: "200px",
        maxWidth: "350px",
        margin: '12px',
    },
    stackGrid: {
        backgroundColor: 'primary'
    },
    root: {
        backgroundColor: 'rgba(1,1,1,.5)'
    }
}));

export default function AboutMe(){
    const classes = useStyles()
    const {heading, subheading, paragraphs, stack} = aboutMe

    return (
        <Card className={classes.root}>
            <CardContent>

                <Grid container justify="center" alignItems="center" className={classes.gridContainer}>
                    <Grid item xs={12}>
                        <Typography variant="h4" align="center">{heading}</Typography>
                        <Typography variant="h6" align="center">{subheading}</Typography>
                    </Grid>
                    <Grid item xs={12} md={8}>
                        <br/>
                        {paragraphs.map((para) => (
                            <React.Fragment>
                                <Typography variant="body1">{para}</Typography>
                                <br/>
                            </React.Fragment>
                        ))}
                    </Grid>
                    <Grid item xs={12} md={4}>
                        <Box align="center">
                            <img 
                                className={classes.portrait} 
                                src={portrait} 
                                alt="Me" 
                                align="center"/>
                        </Box>
                    </Grid>
                    <Grid item xs={12}>
                        <Grid container className={classes.stackGrid}  justify='space-between'>
                            <Grid item xs={1} title="HTML">
                                <FaHtml5 style={{fontSize: '40'}}/>
                            </Grid>
                            <Grid item xs={1} title="CSS">
                                <FaCss3 style={{fontSize: '40'}}/>
                            </Grid>
                            <Grid item xs={1} title="JavaScript">
                                <FaJs style={{fontSize: '40'}}/>
                            </Grid>
                            <Grid item xs={1} title="Python">
                                <FaPython style={{fontSize: '40'}}/>
                            </Grid>
                            <Grid item xs={1} title="React.js">
                                <FaReact style={{fontSize: '40'}}/>
                            </Grid>
                            <Grid item xs={1} title="Vue.js">
                                <FaVuejs style={{fontSize: '40'}}/>
                            </Grid>
                            <Grid item xs={1} title="Django">
                                <DiDjango style={{fontSize: '40'}}/>
                            </Grid>
                        </Grid>
                    </Grid>
                    
                </Grid>
            </CardContent>

        </Card>
    )
}