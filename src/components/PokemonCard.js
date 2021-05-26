import { Link } from "react-router-dom";
import styled from "styled-components";
import { screen } from "../styles/globalStyles"

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
    align-items: center;
    justify-content: center;
    border-radius: 1rem;
    background-color: #ffffff;
    box-shadow: 2px 2px 5px #999;
    width: 5rem;
    height: 5.2rem;
    margin: 0.5rem;

    img{
        width: 2.5rem;
        height: 2.5rem;
        object-fit: contain;
        align-items: center;
        justify-content: center;
    }
    h2{
        font-weight: 100;
        font-size: 13px;
        text-transform: capitalize;
        color: #000000;
    }
    &:focus, &:hover, &:visited, &:link, &:active {
        text-decoration: none;
    }

    ${screen.md}{
        width: 6rem;
        height: 6rem;
        padding: 2rem;
        img {
            width: 5rem;
            height: 5rem;
            object-fit: contain;
            align-items: center;
            justify-content: center;
        }
        h2{
            font-size: 20px;
        }
    }
`;