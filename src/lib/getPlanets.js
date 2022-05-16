import axios from "axios";

export const getPlanetsRequest = () => {
    return axios(
        'https://swapi.dev/api/planets', {
            method: 'GET'
        }
    )
}