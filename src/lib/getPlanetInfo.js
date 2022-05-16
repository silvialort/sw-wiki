import axios from "axios";

export const getPlanetInfoRequest = (url) => {
    return axios (
        url, {
            method: 'GET'
        }
    )
}