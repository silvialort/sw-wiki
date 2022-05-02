import { useState } from 'react';
import { getCharactersRequest } from '../lib/getCharacters';
import { getCharacterInfoRequest } from '../lib/getCharacterInfo';

export const useCharacters = () => {
    const [loading, setLoading] = useState(true);
    const [characterListError, setCharacterListError] = useState('');

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
            const characterResponse = await getCharacterInfoRequest();
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