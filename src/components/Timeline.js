// React imports
import React from 'react'

// Material UI imports
import {
    Typography,
} from '@material-ui/core'
import {
    Work,
    School,
} from '@material-ui/icons'

// A timeline component
import {
    VerticalTimeline,
    VerticalTimelineElement
} from 'react-vertical-timeline-component'
import 'react-vertical-timeline-component/style.min.css';

export default function Timeline() {
    return (
        <VerticalTimeline>
            <VerticalTimelineElement
                className="vertical-timeline-element--work"
                contentStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
                date="Oct 2019 - Feb 2020"
                iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                icon={<School />}
            >
                <Typography variant="h3" className="vertical-timeline-element-title" >PDX Code Guild</Typography>
                <Typography variant="h4" className="vertical-timeline-element-subtitle" >Portland, OR</Typography>
                <Typography variant="body1">A 14-week full-time, full-stack web design course.  Gained proficiency in HTML, CSS, JavaScript, and Python, using Vue.js and Django frameworks.</Typography>

            </VerticalTimelineElement>
            <VerticalTimelineElement
                className="vertical-timeline-element--work"
                contentStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
                date="2011 - present"
                iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                icon={<Work />}
            >
            </VerticalTimelineElement>
        </VerticalTimeline>
    )
}