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
import MainModal from "../../containers/MainModal/MainModal";

// Assets
import fondo from '../../assets/fondo.jpg';

// Hooks
import { useModal } from "../../hooks/use-modal";

function Personajes () {

    const { handleModal, modalOpened } = useModal();

    const characterService = useCharacters();

    const [characterList, setCharacterList] = useState([]);
    const [filteredList, setFilteredList] = useState([]);

    const [selectedCharacter, setSelectedCharacter] = useState({});

    // const [currentPage, setCurrentPage] = useState(0);

    // const nextPage = () => {
    //     if (currentPage <= 9) {
    //         setCurrentPage(currentPage + 1);
    //     }

    // }

    // const prevPage = () => {
    //     if (currentPage > 0) {
    //         setCurrentPage(currentPage - 1);
    //     }
    // }

    const searchBar = useRef(null);


    useEffect(() => {
        const getCharacterList = async () => {
            const characters = await characterService.getCharacters();
            const { results } = await characters.data;
            setCharacterList(results);
            setFilteredList(results);
        }
        getCharacterList();
    }, []);

    const handleCharacter = async (url) => {
        const character = await characterService.getCharacterInfo(url);
        const characterInfo = await character.data;
        setSelectedCharacter(characterInfo);
        handleModal(true);
    }

    const handleSearch = () => {
        const searchedValue = searchBar.current.value;
        const filteredList = characterList.filter(character => character.name.toLowerCase().includes(searchedValue));
        setFilteredList(filteredList);
    }

    return(
        <>
            <Header />
            <Main
            bg={fondo}>
                <Section>
                    <Container>
                        <Input text='Buscar'
                                type='text'
                                ref={searchBar}
                                onChange={(e) => handleSearch(e)}
                        />
                        <Select></Select>
                        <Select></Select>
                    </Container>
                    <CharacterList>
                        {

                            filteredList.map((character, index) => {
                                return(
                                    <li key={index}>
                                        <Card
                                        name={character.name}
                                        handleClick={() => handleCharacter(character.url)}
                                        />
                                    </li>
                                )
                            })

                        }
                    </CharacterList>
                    <Container>
                        <Button
                        text='Anterior'
                        handleClick={() => console.log('Prev')}
                        />
                        <Button text='Siguiente'
                        handleClick={() => console.log('Next')}
                        />
                    </Container>
                </Section>
                {
                modalOpened && (
                <MainModal handleClick={() => handleModal(false)}>
                    <ModalContent>

                    </ModalContent>
                </MainModal>
                )
                }
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