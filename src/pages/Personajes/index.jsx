import React, { useState, useEffect, useRef } from "react";

import { useCharacters } from "../../services/sw-services";

import Header from '../../containers/Header/Header';
import CharacterList from '../../containers/CharacterList/CharacterList';
import Section from '../../containers/Section/Section';


import Card from '../../components/Card/Card';

function Personajes () {

    const characterService = useCharacters();

    const [characterList, setCharacterList] = useState([]);

    useEffect(() => {
        const getCharacterList = async () => {
            const characters = await characterService.getCharacters();
            const { results } = await characters.data;
            setCharacterList(results);
        }
        getCharacterList();
    }, []);

    return(
        <>
            <Header />
            <Section>
                <CharacterList>
                    {
                        characterList.map((character, index) => {
                            return(
                                <li key={index}>
                                    <Card
                                    name={character.name}

                                    />
                                </li>
                            )
                    })}
                </CharacterList>
            </Section>

        </>
    )

}


export default Personajes;