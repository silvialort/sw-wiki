import styled from "styled-components";

const FormContainer = styled.form`
    display: flex;
    flex-flow: column wrap;
    max-width: 50%;
    label{
        font-size: 16px;
    }
    input{
        font-size: 14px;
        font-family: 'Montserrat', sans-serif;
        font-weight: 400;
        padding: 10px 26px;
        background-color: #FFFFFF;
        color: #C4C4C4;
        border-radius: 10px;
        margin: 10px auto;
        box-shadow: 0 0 4px rgba(0,0,0,0.25);
        border: none;
        &:focus-visible{
            box-shadow: none;
            border: solid 2px #C4C4C4;
        }

        &[type="submit"]{
            background-color: ${(props) => props.color || '#161414'};
            font-family: 'Roboto Condensed', sans-serif;
            font-weight: 500;
            color: #FBFBFB;
            font-size: 20px;
            border-radius: 5px;
            text-align: center;
            padding: 5px 25px;
            cursor: pointer;
            &:hover{
                outline: solid 5px ${(props) => props.outline || '#161414'};
                background-color: transparent;
            }
            textarea {
                resize: vertical;
                font-size: 14px;
                font-family: 'Montserrat', sans-serif;
                font-weight: 400;
                padding: 10px 26px;
                background-color: #FFFFFF;
                color: #C4C4C4;
                border-radius: 10px;
                margin: 10px auto;
                box-shadow: 0 0 4px rgba(0,0,0,0.25);
                border: none;
                &:focus-visible{
                    box-shadow: none;
                    border: solid 2px #C4C4C4;
                }
        }
    }`;



export default FormContainer;