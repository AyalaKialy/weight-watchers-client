
import React, { ReactNode } from "react";
import { useNavigate } from 'react-router-dom';
import { Auth0Provider } from '@auth0/auth0-react';

interface Props {
    children?: ReactNode
}
const Auth0ProviderWithHistory = ({ children, ...props }: Props) => {
    const domain: string = process.env.REACT_APP_AUTH0_DOMAIN!;
    const clientId: string = process.env.REACT_APP_AUTH0_CLIENT_ID!;
    const audience: string = process.env.REACT_APP_AUDIENCE!;

    const navigate = useNavigate();

    const onRedirectCallback = (appState: any) => {
        navigate(appState?.returnTo || window.location.pathname);
    };

    return (
        <Auth0Provider
            domain={domain}
            clientId={clientId}
            redirectUri={window.location.origin}
            onRedirectCallback={onRedirectCallback}
            audience={audience}

        >
            {children}
        </Auth0Provider>
    );
};

export default Auth0ProviderWithHistory;