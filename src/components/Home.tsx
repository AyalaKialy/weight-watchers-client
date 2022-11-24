import '../styles/home.style.css'
import SignUpForCoach from './signUpForCoach';
import { useAuth0 } from '@auth0/auth0-react';
import MyAppBar from './AppBar';

export default function Home() {
    const { isAuthenticated, isLoading, error } = useAuth0();

    return (
        <div id='home' className='box' >
            <MyAppBar />

            <div className='text-box'>
                <p>
                    <pre>Eat What You Love.</pre>
                    <pre>Lose the Weight You Want.</pre>
                    <pre>Coaching, community, and food plans made just for you!</pre>
                </p>
                {!error && !isLoading && !isAuthenticated && <SignUpForCoach />}
            </div>
        </ div>
    );
};
