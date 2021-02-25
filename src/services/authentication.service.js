import { BehaviorSubject } from 'rxjs'
import API from '../config/api'

//import config from 'config';
import { handleResponse } from '../helpers/handle-response';

const currentUserSubject = new BehaviorSubject(JSON.parse(localStorage.getItem('currentUser')));

export const authenticationService = {
    login,
    logout,
    signup,
    verify,
    currentUser: currentUserSubject.asObservable(),
    get currentUserValue () { return currentUserSubject.value }
};

function login(username, password) {
    // const requestOptions = {
    //     method: 'POST',
    //     headers: { 'Content-Type': 'application/json' },
    //     body: JSON.stringify({ username, password })
    // };

    return API.post(`/api/auth/login`, { username, password }).then( res => {
        
        const user = res.data
        console.log('==user=====> ',user)
        if(!user.invalid) {
            localStorage.setItem('currentUser', JSON.stringify(user));
            currentUserSubject.next(user);
        }
        return user;
    })

    // return fetch(`/api/auth/login`, requestOptions)
    //     .then(handleResponse)
    //     .then(res => {
    //         console.log('=======> ',res)
    //         if(!res.invalid) {
    //             localStorage.setItem('currentUser', JSON.stringify(res));
    //             currentUserSubject.next(res);
    //         }
    //         return res;
    // });
}


function verify(username, token) {
    // const requestOptions = {
    //     method: 'POST',
    //     headers: { 'Content-Type': 'application/json' },
    //     body: JSON.stringify({ username, token })
    // };

    return API.post(`/api/auth/verify-token`,{ username, token }).then(result => {
                    // store user details and jwt token in local storage to keep user logged in between page refreshes
            // localStorage.setItem('currentUser', JSON.stringify(user));
            // currentUserSubject.next(user);
            return result;
    })

    // return fetch(`/api/auth/verify-token`, requestOptions)
    //     .then(handleResponse)
    //     .then(result => {
    //         // store user details and jwt token in local storage to keep user logged in between page refreshes
    //         // localStorage.setItem('currentUser', JSON.stringify(user));
    //         // currentUserSubject.next(user);
    //         return result;
    //     });
}

function signup(firstName, lastName, username, password, terms) {
    // const requestOptions = {
    //     method: 'POST',
    //     headers: { 'Content-Type': 'application/json' },
    //     body: JSON.stringify({ firstName, lastName, userName:username, password, terms })
    // };

    return API.post(`/api/auth/register`, { firstName, lastName, userName:username, password, terms }).then (res => {
                    // store user details and jwt token in local storage to keep user logged in between page refreshes
            // localStorage.setItem('currentUser', JSON.stringify(user));
            // currentUserSubject.next(user);
            //console.log('Registered',res);
            
            return res;
    })

    // return fetch(`/api/auth/register`, requestOptions)
    //     .then(handleResponse)
    //     .then(res => {
    //         // store user details and jwt token in local storage to keep user logged in between page refreshes
    //         // localStorage.setItem('currentUser', JSON.stringify(user));
    //         // currentUserSubject.next(user);
    //         //console.log('Registered',res);
            
    //         return res;
    //     });
}

function logout() {
    // remove user from local storage to log user out
    localStorage.removeItem('currentUser');
    currentUserSubject.next(null);
}