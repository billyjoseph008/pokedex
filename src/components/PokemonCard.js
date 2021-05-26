import { Link } from "react-router-dom";
import { Button } from 'primereact/button';
import styled from "styled-components";

const PokemonCard = (props) => {

    return (
        <Card to={`/pokemon/${props.link}`}>
            <img alt={props.name} src={props.image} />
            <h2>{props.name}</h2>
        </Card>
    )
}

export default PokemonCard;

export const Card = styled(Link)`
    text-decoration: none;
    display: flex;
    flex-direction: column;
    width: 6rem;
    height: 6rem;
    padding: 2rem;
    margin: 1rem;
    align-items: center;
    justify-content: center;
    border-radius: 1rem;
    background-color: #ffffff;
    box-shadow: 2px 2px 5px #999;
    img{
        width: 5rem;
        height: 5rem;
        object-fit: contain;
        align-items: center;
        justify-content: center;
    }
    h2{
        font-weight: 100;
        font-size: 20px;
        text-transform: capitalize;
        color: #000000;
    }
    &:focus, &:hover, &:visited, &:link, &:active {
        text-decoration: none;
    }
`;