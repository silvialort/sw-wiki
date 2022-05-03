import React from "react";

import Header from '../../containers/Header/Header';
import Main from "../../containers/Main/Main";
import Section from "../../containers/Section/Section";
import Heading1 from '../../components/Texts/Headings/H1/Heading1';
import Heading2 from '../../components/Texts/Headings/H2/Heading2';
import Button from "../../components/Button/Button";

// import background from '../assets/background.webp';

function Home () {

    return(
        <>
            <Header />
            <Main>
                <Section
                bg="black">
                    <Heading1
                    text='Star Wars Wiki' 
                    color='#FFFF'
                    />
                </Section>
            </Main>
        </>
    )
}


export default Home;