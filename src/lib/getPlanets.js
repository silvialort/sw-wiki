import axios from "axios";

export const getPlanetsRequest = (page) => {
    return axios(
        `https://swapi.dev/api/planets/?page=${page}`, {
            method: 'GET'
        }
    )
}