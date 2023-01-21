import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import { useAuth0 } from "@auth0/auth0-react";
import { useState } from 'react';
import { createUser } from '../api/user.api';
import { User } from '../models/user.model';
import { getGroupByManagerId } from '../api/group.api';
import { useSelector } from "react-redux"
import { useNavigate } from 'react-router-dom';
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

export default function SignUpStepTwoForUser() {
    const selector = useSelector(state => state);
    const navigate = useNavigate();
    const classes = useStyles();
    const { user } = useAuth0();
    const [name, setName] = useState(user?.name);
    const [phone, setPhone] = useState('');
    const [height, setHeight] = useState('0.00');
    const [weight, setWeight] = useState('0.00');

    const handleSubmit = async () => {
       
        try {
            
            const group = await getGroupByManagerId(selector);
            const newUser: User = {
                name: name,
                groupID: group._id,
                phone: phone,
                email: user?.email,
                height: height,
                weight: weight,
            }
            debugger
            await createUser(newUser);
            debugger
            navigate('/');

        } catch {
            console.log("create failed");
        }
    }
    return (
        <Container component='main' maxWidth='sm'>
            <CssBaseline />
            <div className={classes.paper}>
                <Typography className={classes.typography} component='h4' variant='h4'>
                    You're almost signed up 
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
                        <Grid item xs={12} sm={6}>
                            <TextField
                                required
                                fullWidth
                                name='height'
                                label='height'
                                id='height'
                                value={height}
                                autoComplete='Your Height'
                                type="number"
                                variant="outlined"
                                inputProps={{
                                    maxLength: 4,
                                    step: "1"
                                }}
                                onChange={(e) => setHeight(parseFloat(e.target.value).toFixed(2))}
                            />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <TextField
                                required
                                fullWidth
                                name='weight'
                                label='weight'
                                id='weight'
                                autoComplete='Your Weight'
                                type="number"
                                value={weight}
                                variant="outlined"
                                inputProps={{
                                    maxLength: 4,
                                    step: "1"
                                }}
                                onChange={(e) => setWeight(parseFloat(e.target.value).toFixed(2))}
                            />
                        </Grid>
                    </Grid>
                    <Button
                        type='submit'
                        fullWidth
                        variant='contained'
                        className={classes.submit}
                    >
                        Sign Up User
                    </Button>
                </form>
            </div>
        </Container>
    );
}
