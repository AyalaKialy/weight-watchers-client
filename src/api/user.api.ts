import axios from 'axios';
import { User } from '../models/user.model';

//getAllUsers
export const getAllUsers = async () => {
    try {
        const users = await axios.get(`http://localhost:8200/api/user`);
        return users.data;
    }
    catch (error) {
        console.log('error in getAllUsers: ', error);
    }
}

//getUserByEmail
export const getUserByEmail = async (email: string) => {
    try {
        const user = await axios.get(`http://localhost:8200/api/user/getUserByEmail/${email}`);
        return user.data;
    }
    catch (error) {
        console.log('error in getUserByEmail: ', error);
    }
}

//post 
export const createUser = async (newUser: User) => {
    try {
        const user = await axios.post('http://localhost:8200/api/user/', newUser);
    }
    catch (error) {
        console.log('error in create user: ', error);
    }
}

//delete
export const deleteuser = async (Id: string) => {
    try {
        await axios.delete(`http://localhost:8200/api/user/${Id}`);
    }
    catch (error) {
        console.log('error in deleteUser: ', error);
    }
}

//put
export const updateUser = async (Id: string, updates: User) => {
    try {
        await axios.put(`http://localhost:8200/api/user/${Id}`, updates);
    }
    catch (error) {
        console.log('error in updateUser', error);
    }
}