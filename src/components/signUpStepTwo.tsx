import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import { useAuth0 } from "@auth0/auth0-react";
import { useState } from 'react';
import { createManager } from '../api/manager.api';
import { Manager } from '../models/manager.model';

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

export default function SignUpStepTwo() {
    const classes = useStyles();
    const { user } = useAuth0();
    const [name, setName] = useState(user?.name);
    const [phone, setPhone] = useState('');

    const handleSubmit = async () => {
        const manager: Manager = {
            name: name,
            phone: phone,
            email: user?.email
        }
        try {
            debugger
            await createManager(manager);
        } catch {
            console.log("create failed");
        }

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
                <form className={classes.form} onSubmit={handleSubmit}>
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
                        {/* <Grid item xs={12} sm={6}>
                            <TextField
                                variant='outlined'
                                required
                                fullWidth
                                id='weight'
                                label='Your Weight'
                                name='weight'
                                autoComplete='weight'
                            />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <TextField
                                variant='outlined'
                                required
                                fullWidth
                                name='heignt'
                                label='heignt'
                                type='number'
                                id='heignt'
                                autoComplete='Your Heignt'
                            />
                        </Grid> */}
                    </Grid>
                    <Button
                        type='submit'
                        fullWidth
                        variant='contained'
                        className={classes.submit}
                    >
                        Sign Up
                    </Button>
                </form>
            </div>
        </Container>
    );
}
