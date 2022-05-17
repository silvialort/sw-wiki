import React from "react";

import Header from '../../containers/Header/Header';
import Footer from '../../containers/Footer/Footer';
import Main from '../../containers/Main/Main';
import Section from '../../containers/Section/Section';
import Form from '../../containers/Form/Form';
import Container from '../../containers/Container/Container';
import Paragraph from '../../components/Texts/Paragraph';
import HeadingH1 from '../../components/Texts/Headings/H1/Heading1';

function Contact () {

    return(
        <>
            <Header />
            <Main>
                <Container>
                    <HeadingH1 text='Contacto'/>
                    <Paragraph text='Lorem ipsum'/>
                </Container>
                <Section>
                    <Form>
                        <label htmlFor="name">Nombre</label>
                        <input type="text" name='name'/>
                        <label htmlFor="asunto">Asunto</label>
                        <input type="text" name='asunto'/>
                        <label htmlFor="mensaje"></label>
                        <textarea name="mensaje" cols="30" rows="10"></textarea>
                        <input type="submit" value="Enviar" name='send'/>
                    </Form>
                </Section>
            </Main>
            <Footer></Footer>
        </>
    )

}


export default Contact;