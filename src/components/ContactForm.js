// Library imports
import React from 'react'
import emailjs from 'emailjs-com';

// Material UI imports
import {
    Typography,
    Grid,
    TextField,
    Card,
    CardContent,
    Button,
    Box,
} from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'

// site imports
import userId from '../assets/config'

const useStyles = makeStyles((theme) => ({
    root: {
        backgroundColor: 'rgba(1,1,1,.5)'
    },
    textField: {
        margin: theme.spacing(1),
        width: '40ch',
    },
    messageField: {
        
    },
    submitButton: {
        marginTop: theme.spacing(1)
    }
}));

export default function ContactForm() {
    // state for the form
    const [name, setName] = React.useState('')
    const [email, setEmail] = React.useState('')
    const [phone, setPhone] = React.useState('')
    const [company, setCompany] = React.useState('')
    const [message, setMessage] = React.useState('')

    // for emailjs
    emailjs.init(userId);
    const sendEmail = () => {
        const params = {
            user_name: name,
            user_email: email,
            user_phone: phone,
            user_company: company,
            message,
        }
        emailjs.send('gmail', 'shawnstolsig_com', params, userId)
            .then(() => {
                alert("Email sent! I'll get back to you as soon as possible.")
                setName('')
                setEmail('')
                setPhone('')
                setMessage('')
                setCompany('')
            }, () => {
                alert("Error sending message, please try again.")
            });
    }

    // get classes 
    const classes = useStyles()

    return (
        <Card className={classes.root}>
            <CardContent>
                <Grid
                    container
                    justify="center"
                    spacing={2}>
                    <Grid item xs={12}>
                        <Typography variant="h4" align="center">Contact Me</Typography>
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <Box align="center">
                            <TextField
                                label="Name"
                                value={name}
                                helperText="Required"
                                className={classes.textField}
                                onChange={(e) => setName(e.target.value)}
                            />
                        </Box>
                        <Box align="center">
                            <TextField
                                label="Email"
                                value={email}
                                helperText="Required"
                                className={classes.textField}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                        </Box>
                        <Box align="center">
                            <TextField
                                label="Phone"
                                value={phone}
                                className={classes.textField}
                                onChange={(e) => setPhone(e.target.value)}
                            />
                        </Box>
                        <Box align="center">
                            <TextField
                                label="Company"
                                value={company}
                                className={classes.textField}
                                onChange={(e) => setCompany(e.target.value)}
                            />
                        </Box>
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <Box>
                            <TextField
                                label="Message"
                                value={message}
                                className={classes.messageField}
                                variant="outlined"
                                fullWidth
                                onChange={(e) => setMessage(e.target.value)}
                                multiline
                                rows={15}
                                placeholder="Please type a message here..."
                            />
                        </Box>
                    </Grid>
                    <Grid item xs={12}>
                        <Box align="center">
                            <Button
                                onClick={sendEmail}
                                variant="contained"
                                color="primary"
                                className={classes.submitButton}
                                disabled={!name || !message || !email}
                                >Send
                            </Button>
                        </Box>
                    </Grid>
                </Grid>
            </CardContent>
        </Card>
    )
}