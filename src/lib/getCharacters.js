import axios from 'axios';

export const getCharactersRequest = () => {
    return axios(
        'https://swapi.dev/api/people', {
            method: 'GET'
        });
}