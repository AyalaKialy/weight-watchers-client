import axios from 'axios';
import { Group } from '../models/group.model'

//getAllGroups
export const getAllGroups = async () => {
    try {
        const groups = await axios.get(`http://localhost:8200/api/group`);
        return groups.data;
    }
    catch (error) {
        console.log('error in getAllGroups: ', error);
    }
}

//getGroupIdByManagerId
export const getGroupByManagerId = async (managerId: any) => {
    try {
        const group =  await axios.get(`http://localhost:8200/api/group/${managerId}`); 
        debugger
        return group.data;   
    }
    catch (error) {
        console.log('error in getGroupIdByManagerId: ', error);
    }
}


//post 
export const createGroup = async (newGroup: Group) => {
    try {
         await axios.post('http://localhost:8200/api/group/', newGroup);
    }
    catch (error) {
        console.log('error in createGroup: ', error);
    }
}

//delete
export const deleteGroup = async (Id: string) => {
    try {
        await axios.delete(`http://localhost:8200/api/group/${Id}`);
    }
    catch (error) {
        console.log('error in deleteGroup: ', error);
    }
}

//put
export const updategroup = async (Id: string, updates: Group) => {
    try {
        await axios.put(`http://localhost:8200/api/group/${Id}`, updates);
    }
    catch (error) {
        console.log('error in updateGroup', error);
    }
}