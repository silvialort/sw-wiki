import React, {useState} from "react";

import Header from '../../containers/Header/Header';
import Footer from '../../containers/Footer/Footer';
import Main from '../../containers/Main/Main';
import Section from '../../containers/Section/Section';
import Form from '../../containers/Form/Form';
import Container from '../../containers/Container/Container';
import Paragraph from '../../components/Texts/Paragraph';
import HeadingH1 from '../../components/Texts/Headings/H1/Heading1';

function Contact () {

    const [formMessage, setFormMessage]  = useState({});

    const handleForm = (e) => {
        const updateMessage = {
            ...formMessage,
            [e.target.name]: e.target.value
        }
        setFormMessage(updateMessage);
    }

    const sendForm = () => {
        console.log(formMessage)
    }

    return(
        <>
            <Header />
            <Main>
                <Container direction='column'>
                    <HeadingH1 text='Contacto'/>
                    <Paragraph text='Si quiere contactar, puede hacerlo a través de este formulario.'/>
                </Container>
                <Section direction='column' align='center'>
                    <Form>
                        <label htmlFor="name">Nombre</label>
                        <input  type="text"
                                name='name'
                                onBlur={(e) => handleForm(e)}
                        />
                        <label htmlFor="asunto">Asunto</label>
                        <input  type="text" 
                                name='asunto'
                                onBlur={(e) => handleForm(e)}
                        />
                        <label htmlFor="mensaje">Mensaje</label>
                        <textarea   name="mensaje" 
                                    onBlur={(e) => handleForm(e)}
                        />
                        <span onClick={() => sendForm()}>Enviar</span>
                    </Form>
                </Section>
            </Main>
            <Footer></Footer>
        </>
    )

}


export default Contact;