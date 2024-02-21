import styled from 'styled-components'

const Body = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-top: 50px;
`

const Form = styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
    border-radius: 10px;
    box-shadow: 0px 10px 17px 7px rgba(0,0,0,0.75);

    @media screen and (max-width: 640px) {
        
    }

    @media screen and (min-width: 641px) {
        height: 500px;
        width: 350px;
    }
`

const Input = styled.input`
    border-radius: 10px;
    border: 1px solid;
    height: 1.5em;
    box-shadow: 1px 5px 8px -4px rgba(0,0,0,0.75);
`

const Submit = styled.input`
    border-radius: 50px;
    background-color: #96E8BC;
    
    &:hover{
        transition: 0.5s;
        color: white;
    }
    @media screen and (max-width: 640px) {
        width: 100px;
    }

    @media screen and (min-width: 641px) {
        width: 150px;
    }
`

const Field = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
`

export default {
    Body,
    Form,
    Input,
    Submit,
    Field
}