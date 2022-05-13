import React, { useState, useEffect, useRef } from "react";

// API
import { useCharacters } from "../../services/sw-services";

// Componentes y contenedores
import Header from '../../containers/Header/Header';
import Main from '../../containers/Main/Main';
import CharacterList from '../../containers/CharacterList/CharacterList';
import Section from '../../containers/Section/Section';
import Container from "../../containers/Container/Container";
import Footer from "../../containers/Footer/Footer";
import Paragraph from '../../components/Texts/Paragraph';
import Card from '../../components/Card/Card';
import Input from '../../components/Input/Input';
import Select from '../../components/Select/Select';
import Button from "../../components/Button/Button";

import fondo from '../../assets/fondo.jpg';

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
            <Main
            bg={fondo}>
                <Section>
                    <Container>
                        <Input text='Buscar'/>
                        <Select></Select>
                        <Select></Select>
                    </Container>
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
                    <Container>
                        <Button></Button>
                        <Button></Button>
                    </Container>
                </Section>
            </Main>
            <Footer>
                <Paragraph 
                color="#FFFF"
                text='&#169; 2022 silvialort' />
            </Footer>
        </>
    )

}


export default Personajes;