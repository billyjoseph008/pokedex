import { useParams } from 'react-router-dom';
import styled from "styled-components";
import StaticsPanel from './StaticsPanel';
import { useEffect, useState } from 'react';
import { PokemonService } from '../apiServices/PokemonService';
import { screen } from "../styles/globalStyles"
import { useTranslation } from "react-i18next";

const Details = () => {

    const [t, i18n] = useTranslation("global");
    let { id } = useParams();
    const pokemonService = new PokemonService();
    const [pokemon, setPokemon] = useState();

    useEffect(() => {
        pokemonService.getAPokemon(id).then((onePokemon) => setPokemon(onePokemon))
    }, [])

    return (
        <DetailsStyle>
            {pokemon != null && <div>
                <div className='info'>
                    <img alt={pokemon.name}
                        src={pokemon.sprites.other.dream_world.front_default} />
                    <div className='text'>
                        <span>{id.length === 1 ? '#00' + id : '#0' + id}</span>
                        <h2>{pokemon.name}</h2>
                        <h3>{t("details.height")}: <span>{pokemon.height + " m"}</span></h3>
                        <h3>{t("details.weight")}: <span>{pokemon.weight + " kg"}</span></h3>
                    </div>
                </div>
                <p>{pokemon.description}</p>
                <StaticsPanel
                    hp={pokemon.stats[0].base_stat}
                    attack={pokemon.stats[1].base_stat}
                    defense={pokemon.stats[2].base_stat}
                    speed={pokemon.stats[3].base_stat}
                    spatk={pokemon.stats[4].base_stat}
                    spdef={pokemon.stats[5].base_stat}
                />
            </div>
            }
        </DetailsStyle>
    )
}

export default Details;

export const DetailsStyle = styled.div`
    
    text-decoration: none;
    display: flex;
    flex-direction: column;
    padding: 3rem 0;
    align-items: center;
    justify-content: center;

    p{
        text-align:center;
    }

    .info{
        display: flex;
        flex-direction: row;
        justify-content: space-around;
        margin-left: -1rem;
        margin-right: -1rem;
        & img {
            width: 10rem;
            height: 10rem;
            object-fit: contain;
            align-items: center;
            justify-content: center;
        }
    }

    .text {

        & h2 {
            text-transform: capitalize;
            color: #000000;
         }
    }   

    ${screen.md}{

    }
`;