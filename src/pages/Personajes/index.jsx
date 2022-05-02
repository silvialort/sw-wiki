import React, { useState, useEffect, useRef } from "react";

// API
import { useCharacters } from "../../services/sw-services";

// Componentes y contenedores
import Header from '../../containers/Header/Header';
import Main from '../../containers/Main/Main';
import CharacterList from '../../containers/CharacterList/CharacterList';
import Section from '../../containers/Section/Section';
import Card from '../../components/Card/Card';
import Input from '../../components/Input/Input';
import Select from '../../components/Select/Select';

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
            <Main>
                <Section>
                    <Input text='Buscar'/>
                    <Select></Select>
                    <Select></Select>
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
            </Main>

        </>
    )

}


export default Personajes;