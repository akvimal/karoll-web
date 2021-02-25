import { authenticationService } from '../services/authentication.service';

export function handleResponse(response) {
    console.log('RESPONSE:',response)


    if(response.status === 200){
        return Promise.resolve(response.data)
    }
    else {
        if ([401, 403].indexOf(response.status) !== -1) {
            // auto logout if 401 Unauthorized or 403 Forbidden response returned from api
            authenticationService.logout();
            //location.reload(true);
        }
        return Promise.reject(response.statusText);
    }

    // return response.then(text => {
    //     // return response.text().then(text => {
    //         console.log('TEXT:',text)
    //     const data = text && JSON.parse(text);
        
    //     if (!response.ok) {
    //         if ([401, 403].indexOf(response.status) !== -1) {
    //             // auto logout if 401 Unauthorized or 403 Forbidden response returned from api
    //             authenticationService.logout();
    //             //location.reload(true);
    //         }

    //         const error = (data && data.message) || response.statusText;
    //         return Promise.reject(error);
    //     }

    //     return data;
    // });
}