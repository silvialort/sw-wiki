import React from "react";

import Header from '../../containers/Header/Header';
import Main from "../../containers/Main/Main";
import Section from "../../containers/Section/Section";
import Heading1 from '../../components/Texts/Headings/H1/Heading1';
import Heading2 from '../../components/Texts/Headings/H2/Heading2';
import Button from "../../components/Button/Button";

import background from '../../assets/background.webp';

function Home () {

    return(
        <>
            <Header />
            <Main>
                <Section
            
                align='center'
                justify='center'
                bg={background}>
                    <Heading1
                    text='Star Wars Wiki' 
                    color='#FFFF'
                    />
                </Section>
                <Section
                bgcl='#797C8D'
                direction='column'
                align='center'
                justify='center'>
                    <Heading2
                    text='Proyecto realizado con React JS'
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