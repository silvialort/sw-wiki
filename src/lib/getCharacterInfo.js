import axios from 'axios';

export const getCharacterInfo = (url) => {
    return axios(
        url, {
            method: 'GET'
        });
}