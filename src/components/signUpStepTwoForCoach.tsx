import { Button, CssBaseline, Typography, TextField, Grid, Container } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { useAuth0 } from '@auth0/auth0-react';
import { useState } from 'react';
import { useNavigate } from "react-router-dom";
import { createManager } from '../api/manager.api';
import { createGroup } from '../api/group.api';
import { Manager } from '../models/manager.model';
import { Group } from '../models/group.model';
import Box from '@mui/material/Box';

const useStyles = makeStyles(theme => ({
    '@global': {
        body: {
            backgroundColor: theme.palette.common.white,
        }
    },
    paper: {
        marginTop: theme.spacing(8),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center'
    },
    form: {
        width: '100%',
        marginTop: theme.spacing(3),
    },
    submit: {
        margin: theme.spacing(3, 0, 3),
        backgroundColor: 'rgb(0, 208, 208)',
        color: 'black'

    },
    typography: {
        fontFamily: 'arial',
        textAlign: 'left',
        marginRight: 0
    }
}));

export default function SignUpGuide() {
    const classes = useStyles();
    const navigate = useNavigate();
    const { user } = useAuth0();
    const [name, setName] = useState(user?.name!);
    const [phone, setPhone] = useState('');

    const handleSubmit = async () => {
        navigate('/');
        const manager: Manager = {
            name: name,
            phone: phone,
            email: user?.email!
        }
        const group: Group = {
            managerID: '',
            startDate: new Date(),
            numberOfParticipants: 0,
            isActive: true,
        }
        const managerId = await createManager(manager);
        group.managerID = managerId;
        await createGroup(group);
    }
    return (
        <Container component='main' maxWidth='sm'>
            <CssBaseline />
            <div className={classes.paper}>
                <Typography className={classes.typography} component='h4' variant='h4'>
                    You're almost a nutrition guide
                </Typography>
                <Typography className={classes.typography} component='h6' variant='h5'>
                    There are still a few small details to be completed
                </Typography>
                <Box className={classes.form} component='form' onSubmit={handleSubmit} noValidate>
                    <Grid container spacing={2}>
                        <Grid item xs={12} >
                            <TextField
                                autoComplete='name'
                                name='name'
                                variant='outlined'
                                required
                                fullWidth
                                id='name'
                                value={user?.name}
                                onChange={(e) => setName(e.target.value)}
                                autoFocus
                            />
                        </Grid>
                        <Grid item xs={12} >
                            <TextField
                                variant='outlined'
                                required
                                fullWidth
                                id='phone'
                                label='Phone Number'
                                name='phone'
                                autoComplete='phone'
                                onChange={(e) => setPhone(e.target.value)}
                            />
                        </Grid>
                    </Grid>
                    <Button
                        type='submit'
                        fullWidth
                        variant='contained'
                        className={classes.submit}
                    >
                        Sign Up
                    </Button>
                </Box>
            </div>
        </Container>
    );
}
