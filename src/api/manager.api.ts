import axios from 'axios';
import { Manager } from '../models/manager.model';

//getAllManagers
export const getAllManagers = async () => {
    try {
        const managers = await axios.get(`http://localhost:8200/api/manager`);
        return managers.data;
    }
    catch (error) {
        console.log('error in getAllManagers: ', error);
    }
}

//getManagerByEmail
export const getmanagerByEmail = async (email: string) => {
    try {
        const manager = await axios.get(`http://localhost:8200/api/manager/getManagerByEmail/${email}`);
        return manager.data;
    }
    catch (error) {
        console.log('error in getmanagerByEmail: ', error);
    }
}

//post 
export const createManager = async (newManager: Manager) => {
    try {
        const managerId = await axios.post('http://localhost:8200/api/manager/', newManager);
        return managerId.data;
    }
    catch (error) {
        console.log('error in create manager: ', error);
    }
}

//delete
export const deleteManager = async (Id: string) => {
    try {
        await axios.delete(`http://localhost:8200/api/manager/${Id}`);
    }
    catch (error) {
        console.log('error in deletemanager: ', error);
    }
}

//put
export const updateManager = async (Id: string, updates: Manager) => {
    try {
        await axios.put(`http://localhost:8200/api/manager/${Id}`, updates);
    }
    catch (error) {
        console.log('error in updateManager', error);
    }
}