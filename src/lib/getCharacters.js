import axios from 'axios';

export const getCharacter = () => {
    return axios(
        'https://swapi.dev/api/people', {
            method: 'GET'
        });
}