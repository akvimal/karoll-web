//import config from 'config';
import API from '../config/api'
import { authHeader } from '../helpers/auth-header';
import { handleResponse } from '../helpers/handle-response';

export const userService = {
    getAll,
    //getById,
    getByUsername
};

function getAll() {
    console.log('getting all...', authHeader());
    //const requestOptions = { method: 'GET', headers: authHeader() };
    return API.get(`/api/users`,{headers: authHeader()}).then(handleResponse)
    //return fetch(`/api/users`, requestOptions).then(handleResponse);
}

// function getById(id) {
//     const requestOptions = { method: 'GET', headers: authHeader() };
//     return fetch(`/api/users/${id}`, requestOptions).then(handleResponse);
// }
function getByUsername(username) {
    console.log('user name: ', username);
    //const requestOptions = { method: 'GET', headers: authHeader() };
    return API.get(`/api/users/${username}`, {headers: authHeader()}).then(handleResponse)
    //return fetch(`/api/users/${username}`, requestOptions).then(handleResponse);
}