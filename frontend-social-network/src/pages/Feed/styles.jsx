import styled from "styled-components";

const Body = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
`

const List = styled.ul`
    list-style-type: none;
    
    @media screen and (max-width: 640px) {
        display: flex;
        flex-direction: column;
    }

    @media screen and (min-width: 641px) {
        display: flex;
        flex-wrap: wrap;
        justify-content: space-around;
        width: 80vw;
    }
`

const Li = styled.li`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
`

const Item = styled.section`
    background-color: #C9FFE2;
    width: 150px;
    height: 150px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
    border-radius: 10px;
    padding: 1.2em;
    margin-bottom: 1.5em;
    box-shadow: 0px 10px 17px 7px rgba(0,0,0,0.75);
`

const Anchor = styled.a`
    text-decoration: none;
    color:#4DA1A9
`

export default {
    Body,
    List,
    Li,
    Item,
    Anchor
}