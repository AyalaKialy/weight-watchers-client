import { useEffect, useState } from "react";
import { useAuth0 } from "@auth0/auth0-react";

const Profile = () => {
    const { user, getAccessTokenSilently } = useAuth0();
    const [accessToken, setAccessToken] = useState('');

    useEffect(() => {
        const getAccessToken = async () => {
            try {
                setAccessToken(await getAccessTokenSilently());
            } catch (e: any) {
                console.log(e.message);
            }
        };
        getAccessToken();
    }, [getAccessTokenSilently, user?.sub]);
    return (
        <div style={{ position: 'relative' }}>
            <img src={user?.picture} alt={user?.name} />
            <h2>{user?.name}</h2>
            <p>{user?.email}</p>
            {accessToken && accessToken}
        </div>
    );
};

export default Profile;