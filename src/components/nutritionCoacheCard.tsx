import Avatar from '@mui/material/Avatar';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { Button } from '@mui/material';
import { Manager } from '../models/manager.model';
import { useDispatch } from "react-redux";
import { updateManager } from '../api/manager.api';
import { useNavigate } from 'react-router-dom';

export default function NutritionCoaches(manager: Manager) {
    const dispatch = useDispatch(); 
    const navigate = useNavigate();
    const handleSubmit = async(manager: Manager) =>{
        const updateAManager: Manager = {
            name: manager.name,
            phone: manager.phone,
            email: manager.email!,
            description: manager.description,
            numOfMembers: manager.numOfMembers+1
        }
        await updateManager(manager._id, updateAManager);
        dispatch({ type: "ADD", payload: manager._id });
        navigate('/signupforgroup');
    }
    return (
        <div>
            <Card sx={{ width: 380, marginLeft: 5, marginRight: 3, display: 'flex' }}>
                <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                    <CardContent sx={{ flex: '1 0 auto' }}>
                        <Typography component="div" variant="h5">
                            {manager.name}
                        </Typography>
                        <Typography variant="subtitle1" color="text.secondary" component="div">
                            {manager.description}
                        </Typography>
                    </CardContent>
                    <Box sx={{ display: 'flex', alignItems: 'center', pl: 1, pb: 1 }}>
                        <Typography variant="subtitle1" color="text.secondary" component="div">
                            {manager.numOfMembers}
                        </Typography>
                        <Button onClick={() => handleSubmit(manager)} sx={{ marginLeft: 2, fontFamily: 'Arial', my: 2, color: 'white', backgroundColor: 'rgb(0, 208, 208)' }}
                        >I want to join</Button>
                    </Box>
                </Box>
                <Avatar src='https://avatars.githubusercontent.com/u/95143373?v=4' sx={{ width: 100, height: 100, marginRight: 2, marginTop: 2 }} />
            </Card>
        </div>);
};




