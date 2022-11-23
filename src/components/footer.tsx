import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';


import '../styles/footer.style.css'

export default function Footer() {
    return (
        <AppBar id='contact' sx={{ bgcolor: 'black' }} position='static'>
            <Container maxWidth='xl'>
                <Box justifyContent='center' sx={{ padding: 1, flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
                    <div className='item'>
                        <h5>0583204207</h5>
                    </div>
                    <div className='item'>
                        <h5><a href='https://github.com/AyalaKialy'>github|Ayala Kialy</a></h5>
                    </div>
                    <div className='item'>
                        <h5><a href='https://www.linkedin.com/in/ayala-kialy/'>linkedin|Ayala Kialy</a></h5>
                    </div>
                    <div className='item'>
                        <h5>ayalak4207@gmail.com</h5>
                    </div>
                </Box>
                <hr />
            </Container>
            <h4>© Copyright 2022. Made by Ayala Kialy</h4>
        </AppBar>
    );
}
