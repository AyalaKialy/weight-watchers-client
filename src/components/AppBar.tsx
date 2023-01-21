import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import { Avatar } from '@mui/material';
import image from '../images/logo.png'
import Login from './login';
import Logout from './logout';
import { useAuth0 } from '@auth0/auth0-react';

export default function MyAppBar() {
    const { isAuthenticated, isLoading, error } = useAuth0();

    return (
        <AppBar position='fixed' sx={{
            display: 'inline-block',
            bgcolor: 'black'
        }}>
            <Container maxWidth='xl'>
                <Toolbar disableGutters>
                    <Box justifyContent='right' sx={{ padding: 1, flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
                        <Avatar className='Avatar' src={image} sx={{ width: 50, height: 50, marginRight: 1, marginTop: 1 }} />
                        <h4 style={{ color: 'white', fontFamily: 'Comic Sans MS', fontStyle: 'italic', marginRight: 450, marginTop: 20 }}>WEIGHT WATCHERS</h4>
                        <Button name='0'
                            sx={{ fontWeight: 'bold', marginRight: 5, fontFamily: 'Arial', my: 2, color: 'white', display: 'block' }}
                            href='diary'
                        >
                            MY DIARY</Button>
                        <Button name='1'
                            sx={{ fontWeight: 'bold', marginRight: 5, fontFamily: 'Arial', my: 2, color: 'white', display: 'block' }}
                            href='userhome'
                        >
                            HOME</Button>
                        <Button name='2'
                            sx={{ fontWeight: 'bold', marginRight: 5, fontFamily: 'Arial', my: 2, color: 'white', display: 'block' }}
                            href='/about'
                        >
                            ABOUT</Button>
                        <Button name='3'
                            sx={{ fontWeight: 'bold', marginRight: 5, fontFamily: 'Arial', my: 2, color: 'white', display: 'block' }}
                            href='/nutritioncoaches'
                        >
                            OUR Nutrition Coaches</Button>
                        {error && <h5>Authentication Error</h5>}
                        {!error && isLoading && <h4 style={{ fontFamily: 'arial' }}>Loading..</h4>}
                        {!error && !isLoading && isAuthenticated && <Logout />}
                        {!error && !isLoading && !isAuthenticated && <Login />}

                    </Box>
                </Toolbar>
            </Container>
        </AppBar>
    );
}
