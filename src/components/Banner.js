// library imports
import React from 'react'

// Material UI imports
import { makeStyles } from '@material-ui/core/styles'
import {
    Card,
    CardMedia,
} from '@material-ui/core'

// Site imports
import starImage from '../assets/images/bg_cropped1.9_resized_milkyway.jpg'

const useStyles = makeStyles({
	root: {
		// maxWidth: 290,
	},
	media: {
        height: '300px',
        width: `100%`
	},
});

export default function Banner(){
    const classes = useStyles()
    return (
        <Card className={classes.root}>
            <CardMedia className={classes.media}
                component="img"
                image={starImage}
                title={"Taken near Black Dragon Canyon in UT"}
            />
        </Card>
    )
}