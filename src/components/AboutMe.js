import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import {
    Grid,
    Typography,
    Box,
    Card,
    CardContent,
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
import aboutMe from '../assets/content/aboutme'

// styles
const useStyles = makeStyles((theme) => ({
    portrait: {
        borderRadius: '30%',
        maxWidth: "300px",
    },
    stackGrid: {
        backgroundColor: 'primary',
        marginTop: theme.spacing(1)
    },
    root: {
        backgroundColor: 'rgba(1,1,1,.5)'
    }
}));

export default function AboutMe(){
    const classes = useStyles()
    const {paragraphs} = aboutMe

    return (
        <Card className={classes.root}>
            <CardContent>

                <Grid container justify="center" alignItems="center" className={classes.gridContainer}>
                    <Grid item xs={12}>
                        <Typography variant="h3" align="center">About Me</Typography>
                    </Grid>
                    <Grid item xs={12} md={8}>
                        <br/>
                        {paragraphs.map((para) => (
                            <Typography 
                                variant="body1" 
                                key={para}
                                gutterBottom
                                >{para}
                            </Typography>
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
                            <Grid item xs={3} md={1} title="HTML">
                                <Box align="center">
                                    <FaHtml5 style={{fontSize: '40'}}/>
                                </Box>
                            </Grid>
                            <Grid item xs={3} md={1} title="CSS">
                                <Box align="center">
                                    <FaCss3 style={{fontSize: '40'}}/>
                                </Box>
                            </Grid>
                            <Grid item xs={3} md={1} title="JavaScript">
                                <Box align="center">
                                    <FaJs style={{fontSize: '40'}}/>
                                </Box>
                            </Grid>
                            <Grid item xs={3} md={1} title="Python">
                                <Box align="center">
                                    <FaPython style={{fontSize: '40'}}/>
                                </Box>
                            </Grid>
                            <Grid item xs={3} md={1} title="React.js">
                                <Box align="center">
                                    <FaReact style={{fontSize: '40'}}/>
                                </Box>
                            </Grid>
                            <Grid item xs={3} md={1} title="Vue.js">
                                <Box align="center">
                                    <FaVuejs style={{fontSize: '40'}}/>
                                </Box>
                            </Grid>
                            <Grid item xs={3} md={1} title="Django">
                                <Box align="center">
                                    <DiDjango style={{fontSize: '40'}}/>
                                </Box>
                            </Grid>
                        </Grid>
                    </Grid>
                    
                </Grid>
            </CardContent>

        </Card>
    )
}