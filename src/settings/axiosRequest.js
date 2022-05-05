import axios from 'axios';

const headersGet = {
    'Content-Type': 'application/json',
    'Accept': 'application/json',
}

export const get_request = (endUrl) => {
    const headers = headersGet;
    return axios.get(endUrl, { headers })
    .then(res => {
       return {
           data: res,
           status: "Success",
           code:200,
       }
    }).catch(error => {
        return {
            data: error,
            status: "Error",
            code:400,
        }
    })
}