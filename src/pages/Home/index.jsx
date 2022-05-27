import React from "react";
import { Link }  from 'react-router-dom';
import Header from '../../containers/Header/Header';
import Main from "../../containers/Main/Main";
import Section from "../../containers/Section/Section";
import Container from '../../containers/Container/Container';
import Heading1 from '../../components/Texts/Headings/H1/Heading1';
import Heading2 from '../../components/Texts/Headings/H2/Heading2';
import Button from "../../components/Button/Button";
import Footer from "../../containers/Footer/Footer";
import Paragraph from '../../components/Texts/Paragraph';

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
                    <Container>
                        <Link to='/personajes'>
                            <Button 
                            text='Personajes'/>
                        </Link>
                        <Link to='/planetas'>
                            <Button 
                            text='Planetas'/>
                        </Link>
                    </Container>
                </Section>
            </Main>
            <Footer>
                <Paragraph text='© 2022 silvialort'
                color='#FFFF' />
            </Footer>
        </>
    )
}


export default Home;