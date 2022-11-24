import { useAuth0 } from '@auth0/auth0-react';

export default function SignUp() {
    const { loginWithRedirect } = useAuth0();
    return (

        <button
            className="btn btn-primary btn-block"
            onClick={() =>
                loginWithRedirect({
                    screen_hint: 'signup',
                    appState: {
                        returnTo: window.location.href = '/signupguide'
                    }
                })
            }
        >
            I want to be a nutrition coach
        </button>
    );
};

