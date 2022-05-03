import React from "react";

import Header from '../../containers/Header/Header';
import Main from "../../containers/Main/Main";
import Section from "../../containers/Section/Section";
import Heading1 from '../../components/Texts/Headings/H1/Heading1';
import Heading2 from '../../components/Texts/Headings/H2/Heading2';
import Button from "../../components/Button/Button";

// import background from '../assets/background.webp';
import fondo from '../../assets/fondo.jpg';

function Home () {

    return(
        <>
            <Header />
            <Main>
                <Section
                bg='black'
                align='center'
                justify='center'>
                    <Heading1
                    text='Star Wars Wiki' 
                    color='#FFFF'
                    />
                </Section>
                <Section
                bg='#797C8D'
                direction='column'
                align='center'
                justify='center'>
                    <Heading2
                    text='Aplicación wiki realizada con React JS'
                    color='#FFFF'
                    />
                    <Button 
                    text='Acceder al buscador'/>
                </Section>
            </Main>
        </>
    )
}


export default Home;