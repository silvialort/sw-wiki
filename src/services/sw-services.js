import { useState } from 'react';
import { getCharactersRequest } from '../lib/getCharacters';
import { getCharacterInfoRequest } from '../lib/getCharacterInfo';
import { getPlanetsRequest } from '../lib/getPlanetsInfo';
import { getPlanetInfoRequest } from '../lib/getPlanetInfo';

const [loading, setLoading] = useState(true);
const [characterListError, setCharacterListError] = useState('');

export const useCharacters = () => {

    const getCharacters = async () => {
        try{
            const characterResponse = await getCharactersRequest();
            setLoading(false);
            return characterResponse;
        }

        catch(error){
            setCharacterListError('Ha ocurrido un error');
            setLoading(false);
        }
    }

    const getCharacterInfo = async (url) => {
        try{
            const characterResponse = await getCharacterInfoRequest(url);
            setLoading(false);
            return characterResponse;
        }

        catch(error){
            setCharacterListError('Ha ocurrido un error');
            setLoading(false);
        }
    }

    return{
        getCharacters,
        getCharacterInfo,
        loading,
        characterListError
    }
}

export const usePlanets = () => {

    const getPlanets = async () => {
        try{
            const planetResponse = await getPlanetsRequest();
            setLoading(false);
            return planetResponse;
        }
        catch(error){
            setLoading(false);
            setCharacterListError('Ha ocurrido un error');
        }
    }


    const getPlanetInfo = async (url) => {
        try{
            const planetResponse = await getPlanetInfoRequest(url);
            setLoading(false);
            return planetResponse;
        }
        catch(error){
            setLoading(false);
            setCharacterListError('Ha ocurrido un error');
        }

    }

    return{
        getPlanets,
        getPlanetInfo,
        loading,
        characterListError
    }
}