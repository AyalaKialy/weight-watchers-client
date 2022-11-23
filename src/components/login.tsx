import { useAuth0 } from '@auth0/auth0-react';


export default function Login() {
    const { loginWithRedirect } = useAuth0();

    return (
        <button style={{ padding: 1, fontWeight: 'bold', marginRight: 5, fontFamily: 'Arial', backgroundColor: 'black', color: 'rgb(0, 208, 208)' }}
            onClick={() => {
                loginWithRedirect({
                    appState: {
                        returnTo: window.location.href = '/profile'
                    }
                })
            }}
        >
            Login
        </button>
    );
};

