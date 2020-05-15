// React imports
import React from 'react'

// Material UI imports
import {
    Typography,
    Grid,
    Box
} from '@material-ui/core'
import {
    Work,
    School,
    Star,
} from '@material-ui/icons'

// A timeline component
import {
    VerticalTimeline,
    VerticalTimelineElement
} from 'react-vertical-timeline-component'
import 'react-vertical-timeline-component/style.min.css';

// Custom imports
import timelineInfo from '../data/timeline'

const styles = {
    work: {
        background: '#084177',
        color: '#fff'
    },
    education: {
        background: '#d63447',
        color: '#fff'
    },
    start: {
        background: '#2b580c',
        color: '#fff'
    }
}
export default function Timeline() {
    return (
        <React.Fragment>
            <Typography variant="h3" align="center">
                Timeline
            </Typography>

            {/* Timeline component, from npm */}
            <VerticalTimeline>
                {timelineInfo.map(({ type, dates, organization, location, position, description, imageUrl }) => (
                    <VerticalTimelineElement
                        className={`vertical-timeline-element--${type}`}
                        contentStyle={type === 'work' ? styles.work : styles.education}
                        date={dates}
                        iconStyle={type === 'work' ? styles.work : styles.education}
                        icon={type === 'work' ? <Work /> : <School />}
                    >

                    <Grid container justify="space-between">
                        <Grid item xs={8}>
                            <Typography variant="h4" className="vertical-timeline-element-title" >{organization}</Typography>
                            <Typography variant="h5" className="vertical-timeline-element-subtitle" >{position}</Typography>
                            <Typography variant="subtitle1" className="vertical-timeline-element-subtitle" >{location}</Typography>
                        </Grid>
                        <Grid item xs={4}>
                            <Box align='center'>
                                <img src={imageUrl} alt={`${organization} logo`} style={{borderRadius: '100%'}} />
                            </Box>
                        </Grid>
                        <Grid item xs={12}>
                            <Typography variant="body2">{description}</Typography>
                        </Grid>
                    </Grid>

                    </VerticalTimelineElement>
                ))}

                <VerticalTimelineElement
                    iconStyle={styles.start}
                    icon={<Star />}
                />
            </VerticalTimeline>
        </React.Fragment>
    )
}