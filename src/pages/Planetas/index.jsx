import React, {useState, useRef, useEffect} from "react";

import Header from '../../containers/Header/Header';
import Main from '../../containers/Main/Main';
import Container from '../../containers/Container/Container';
import Section from '../../containers/Section/Section';
import CharacterList from '../../containers/CharacterList/CharacterList';
import Search from '../../components/Search/Search';
import Select from '../../components/Select/Select';
import Button from '../../components/Button/Button';
import Card from '../../components/Card/Card';
import Paragraph from '../../components/Texts/Paragraph';
import Footer from '../../containers/Footer/Footer';
import MainModal from '../../containers/MainModal/MainModal';
import ModalContent from '../../components/ModalContent/ModalContent';

import fondo from '../../assets/fondo.webp';
import loading from '../../assets/loading.gif';

import { usePlanets } from '../../services/sw-services';
import { useModal } from '../../hooks/use-modal';

function Planetas () {
    const { handleModal, modalOpened } = useModal();
    const planetService = usePlanets();

    let [currentPage, setCurrentPage] = useState(1);

    const [planetList, setPlanetList] = useState([]);
    const [filteredplanetList, setFilteredPlanetList] = useState([]);
    const [selectedPlanet, setSelectedPlanet] = useState({});

    const searchBar = useRef(null);
    const filter = useRef(null);

    const nextPage = () => {
        if (currentPage <= 6) {
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

    const handlePage = async () => {
        const planets = await planetService.getPlanets(currentPage);
        const { results } = await planets.data;
        setPlanetList(results);
        setFilteredPlanetList(results);
    }

    useEffect(() => {

        const getPlanetsList = async () => {
            const planets = await planetService.getPlanets(currentPage);
            const { results } = await planets.data;
            setPlanetList(results);
            setFilteredPlanetList(results);
        }

        getPlanetsList();

    }, []);

    const handlePlanet = async (url) => {
        const planet = await planetService.getPlanetInfo(url);
        const planetInfo = await planet.data;
        setSelectedPlanet(planetInfo);
        handleModal(true);
    }

    const handleSearch = () => {
        const searchedValue = searchBar.current.value;
        const filteredList = planetList.filter(planet => planet.name.toLowerCase().includes(searchedValue));
        setFilteredPlanetList(filteredList);
    }

    const handleFilter = () => {
        if (filter.current.value == 'todos') {
            console.log(filteredplanetList);
            setFilteredPlanetList(planetList);
        }else{
            let filterValue = filter.current.value;
            const filteredList = planetList.filter(planet => planet.climate.includes(filterValue));
            setFilteredPlanetList(filteredList);
        }

    }

    return(
        <>
            <Header />
            <Main bg={fondo}>
            <Section direction='column'>
            <Container>
                <Search text='Buscar'
                        reference={searchBar}
                        handleChange={(e) => handleSearch(e)}/>
                <Select
                        reference={filter}
                        handleChange={(e) => handleFilter(e)}
                >
                    <option value="0" hidden default>Clima</option>
                    <option value="todos">Todos</option>
                    <option value="arid">Árido</option>
                    <option value="temperate">Templado</option>
                    <option value="tropical">Tropical</option>
                    <option value="frozen">Helado</option>
                    <option value="murky">Húmedo</option>
                    <option value="windy">Ventoso</option>
                    <option value="hot">Caluroso</option>
                </Select>
            </Container>
            <CharacterList>
                {
                        planetService.loading && <img src={loading} />
                }
                {


                    filteredplanetList.map((planet, index) => {
                        return(
                            <li key={index}>
                                <Card name={planet.name}
                                handleClick={() => handlePlanet(planet.url)} />
                            </li>
                        )

                    })
                }
            </CharacterList>
            {
                modalOpened && (

                <MainModal handleClick={() => handleModal(false)}>
                    <ModalContent >
                        <h2>{selectedPlanet.name}</h2>
                        <ul>
                        <li>Periodo de rotación: {selectedPlanet.rotation_period}</li>
                        <li>Diámetro: {selectedPlanet.diameter}</li>
                        <li>Periodo orbital: {selectedPlanet.orbital_period}</li>
                        <li>Clima: {selectedPlanet.climate}</li>
                        <li>Gravedad: {selectedPlanet.gravity}</li>
                        <li>Terreno: {selectedPlanet.terrain}</li>
                        <li>Población: {selectedPlanet.population}</li>
                        </ul>
                    </ModalContent>
                </MainModal>
                )
            }
            <Container>
                <Button
                text='Anterior'
                color='#243382'
                handleClick={() => prevPage()} />
                <Button
                text='Siguiente'
                color='#243382'
                handleClick={() => nextPage()} />
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


export default Planetas;