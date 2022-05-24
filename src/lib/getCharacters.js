import axios from 'axios';

export const getCharactersRequest = (page) => {
    return axios(
        `https://swapi.dev/api/people/?page=${page}`, {
            method: 'GET'
        });
}