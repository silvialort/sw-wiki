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
import Footer from '../../containers/Footer/Footer';
import MainModal from '../../containers/MainModal/MainModal';
import ModalContent from '../../components/ModalContent/ModalContent';

import { usePlanets } from '../../services/sw-services';
import { useModal } from '../../hooks/use-modal';

function Planetas () {
    const { handleModal, modalOpened } = useModal();
    const planetService = usePlanets();

    const [planetList, setPlanetList] = useState([]);
    const [filteredplanetList, setFilteredPlanetList] = useState([]);
    const [selectedPlanet, setSelectedPlanet] = useState({});

    useEffect(() => {

        const getPlanetsList = async () => {
            const planets = await planetService.getPlanets();
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
    return(
        <>
            <Header />
            <Main>
            <Section>
            <Container>
                <Search text='Buscar'/>
                <Select></Select>
                <Select></Select>
            </Container>
            <CharacterList>
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
                        <ul>
                        <li>{selectedPlanet.diameter}</li>
                        </ul>
                    </ModalContent>
                </MainModal>
                )
            }
            <Container>
                <Button text='Anterior' />
                <Button text='Siguiente' />
            </Container>
            </Section>
            </Main>
            <Footer />
        </>
    )

}


export default Planetas;