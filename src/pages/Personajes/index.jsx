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
import Search from '../../components/Search/Search';
import Select from '../../components/Select/Select';
import Button from "../../components/Button/Button";
import MainModal from "../../containers/MainModal/MainModal";
import ModalContent from "../../components/ModalContent/ModalContent";
import Heading2 from "../../components/Texts/Headings/H2/Heading2";

// Assets
import fondo from '../../assets/fondo.webp';
import loading from '../../assets/loading.gif';

// Hooks
import { useModal } from "../../hooks/use-modal";

function Personajes () {

    const { handleModal, modalOpened } = useModal();

    let [currentPage, setCurrentPage] = useState(1);
    const characterService = useCharacters();

    const [characterList, setCharacterList] = useState([]);
    const [filteredList, setFilteredList] = useState([]);

    const [selectedCharacter, setSelectedCharacter] = useState({});

    const nextPage = () => {
        if (currentPage <= 9) {
            currentPage++;
            setCurrentPage(currentPage);
            handlePage();
            console.log(currentPage);
        }

    }

    const prevPage = () => {
        if (currentPage > 1) {
            currentPage--;
            setCurrentPage(currentPage);
            console.log(currentPage);
            handlePage();
        }
    }

    const searchBar = useRef(null);
    const filter = useRef(null);


    useEffect(() => {
        const getCharacterList = async () => {
            const characters = await characterService.getCharacters(currentPage);
            const { results } = await characters.data;
            setCharacterList(results);
            setFilteredList(results);
        }
        getCharacterList();
    }, []);

    const handleCharacter = async (url) => {
        const character = await characterService.getCharacterInfo(url);
        const characterInfo = await character.data;
        const planet = await characterService.getCharacterInfo(characterInfo.homeworld);
        const planetInfo = await planet.data;
        let charachter = characterInfo;
        charachter.planet = planetInfo.name;

        setSelectedCharacter(charachter);
        handleModal(true);
    }

    const handlePage = async () => {

        const characters = await characterService.getCharacters(currentPage);
        const { results } = await characters.data;
        setCharacterList(results);
        setFilteredList(results);
    }

    const handleSearch = () => {
        const searchedValue = searchBar.current.value;
        const filteredList = characterList.filter(character => character.name.toLowerCase().includes(searchedValue));
        setFilteredList(filteredList);
    }

    const handleFilter = () => {
        if (filter.current.value == 'todos') {
            setFilteredList(characterList);
        }else{
            const filteredValue = filter.current.value;
            const filteredList = characterList.filter(character => character.gender === filteredValue);
            setFilteredList(filteredList);
        }
    }

    return(
        <>
            <Header />
            <Main
            bg={fondo}>
                <Section direction='column'>
                    <Container>
                        <Search text='Buscar'
                                reference={searchBar}
                                handleChange={(e) => handleSearch(e)}
                        />
                        <Select
                            reference={filter}
                            handleChange={(e) => handleFilter(e)}>
                            <option value="default" hidden default>Elige el género</option>
                            <option value="todos">Todos</option>
                            <option value="male">Hombre</option>
                            <option value="female">Mujer</option>
                            <option value="n/a">No binario</option>
                        </Select>
                    </Container>

                    <CharacterList>
                        {
                        characterService.loading && <img src={loading} />
                        }
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
                        color='#243382'
                        handleClick={() => prevPage()}
                        />
                        <Button text='Siguiente'
                        color='#243382'
                        handleClick={() => nextPage()}
                        />
                    </Container>
                </Section>
                {
                modalOpened && (
                <MainModal handleClick={() => handleModal(false)}>
                    <ModalContent>
                        <Heading2 text={selectedCharacter.name} />
                        <ul>
                            <li>Altura: {selectedCharacter.height} cm</li>
                            <li>Peso: {selectedCharacter.mass} kg</li>
                            <li>Color de pelo: {selectedCharacter.hair_color}</li>
                            <li>Piel/chasis: {selectedCharacter.skin_color}</li>
                            <li>Ojos: {selectedCharacter.eye_color}</li>
                            <li>Año de nacimiento: {selectedCharacter.birth_year}</li>
                            <li>Género: {selectedCharacter.gender}</li>
                            <li>Planeta de origen: {selectedCharacter.planet}</li>
                        </ul>

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