import axios from 'axios';

export const getCharacterInfoRequest = (url) => {
    return axios(
        url, {
            method: 'GET'
        });
}