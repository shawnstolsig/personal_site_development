import React from 'react'
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles'
import {
    CssBaseline,
    AppBar,
    Toolbar,
    Typography,
    useScrollTrigger,
    IconButton,
    Link
} from '@material-ui/core'
import {
    GitHub,
    LinkedIn,
    AttachFile
} from '@material-ui/icons'
import resume from '../assets/resume/resume.pdf'

// styles
const useStyles = makeStyles((theme) => ({
    title: {
        flexGrow: 1,
        fontFamily: '\'Baumans\', cursive'
    },
    hoverColor: {
        color: '#084177'
    },
}));

// this function adds elevation to the children (in this case an AppBar) when scrolled
function ElevationScroll(props) {
    const { children } = props;
    const trigger = useScrollTrigger({
        disableHysteresis: true,
        threshold: 0,
    });

    // set higher elevation and a solid background color when scroll triggered
    return React.cloneElement(children, {
        elevation: trigger ? 4 : 0,
        color: trigger ? 'inherit' : 'transparent',
        style: trigger ? { 
            borderBottomStyle: 'solid',
            borderImageSlice: 1,
            borderWidth: '4px',
            borderImageSource: 'linear-gradient(to left, #537394, #003469',
         } : null
    });
}

// ensure correct props
ElevationScroll.propTypes = {
    children: PropTypes.element.isRequired,
};

export default function Navbar(props) {
    const classes = useStyles()

    return (
        <React.Fragment>
            <CssBaseline />
            <ElevationScroll {...props}>
                <AppBar >
                    <Toolbar>
                        <Typography
                            variant="h6"
                            className={classes.title}
                        >Shawn Stolsig 
                        </Typography>
                        <Link
                            href="https://github.com/shawnstolsig"
                            color="inherit">
                            <IconButton
                                color="inherit"
                                aria-label="GitHub"
                                title="GitHub">
                                <GitHub />
                            </IconButton>
                        </Link>
                        <Link
                            href="https://www.linkedin.com/in/shawnstolsig/"
                            color="inherit">
                            <IconButton
                                color="inherit"
                                aria-label="LinkedIn"
                                title="LinkedIn">
                                <LinkedIn />
                            </IconButton>
                        </Link>
                        <Link
                            href={resume}
                            color="inherit">
                            <IconButton
                                color="inherit"
                                aria-label="Resume"
                                title="Resume">
                                <AttachFile />
                            </IconButton>
                        </Link>
                    </Toolbar>
                </AppBar>
            </ElevationScroll>
            <Toolbar />            {/* why is this toolbar here? */}
        </React.Fragment>
    )
}
