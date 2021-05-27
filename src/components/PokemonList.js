import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import styled from "styled-components";
import { PokemonService } from '../apiServices/PokemonService'
import PokemonCard from '../components/PokemonCard'
import { screen } from "../styles/globalStyles"

const PokemonList = () => {

    const [t, i18n] = useTranslation("global");

    const [pokemons, setPokemons] = useState([]);
    const pokemonService = new PokemonService();
    const [searchTerm, setSearchTerm] = useState('');
    const [pagination, setPagination] = useState(0);
    const [paginationNumber, setPaginationNumber] = useState(1);

    useEffect(() => {

        setPokemons([]);
        if (pagination > 0) {
            pokemonService.getAnotherPokemons(pagination).then((data) => generatePokemons(data.results));
        } else {
            pokemonService.getAllPokemons().then((data) => generatePokemons(data.results));
        }

    }, [pagination])

    function generatePokemons(results) {
        results.forEach(async pokemon => {
            const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon.name}`);
            const data = await res.json();
            setPokemons(currentList => [...currentList, data]);
            await pokemons.sort((a, b) => a.id - b.id);
        })
    }

    function nextPokemons(direction) {
        console.log(direction);
        if (direction === "more" && pagination >= 0) {
            setPagination(pagination + 50)
            setPaginationNumber(paginationNumber + 1)
        } else if (direction === "less" && pagination >= 50) {
            setPagination(pagination - 50)
            setPaginationNumber(paginationNumber - 1)
        }
    }

    return (
        <div>
            <Grid>
                <div className='search_box'>
                    <input type="text" placeholder={t("pokemonList.search")} className='bar' onChange={(e) => setSearchTerm(e.target.value)} />
                </div>
                {pokemons.filter(pokemon => {
                    if (searchTerm == '') {
                        return pokemon;
                    } else if (pokemon.name.toLowerCase().includes(searchTerm.toLowerCase()) || pokemon.id == searchTerm) {
                        return pokemon;
                    }
                }).map((pokemon, index) =>
                    <PokemonCard
                        key={index}
                        name={pokemon.name}
                        image={pokemon.sprites.other.dream_world.front_default}
                        link={pokemon.id}
                    />
                )}

            </Grid>

            <Pagination>
                <button
                    className="navButton"
                    onClick={() => nextPokemons("less")}>
                    {t("pokemonList.lastPage")}
                </button>
                <div>
                    <span className="paginationNumber">
                        {paginationNumber > 1 ? paginationNumber - 1 : null}
                    </span>
                    <span className="paginationNumber actualNumber">
                        {paginationNumber}
                    </span>
                    <span className="paginationNumber">
                        {paginationNumber + 1}
                    </span>
                </div>
                <button
                    className="navButton"
                    onClick={() => nextPokemons("more")}>
                    {t("pokemonList.nextPage")}
                </button>
            </Pagination>

        </div>

    )
}

export default PokemonList;

export const Grid = styled.div`
    
    display: flex;
    flex-wrap: wrap;
    background-color: #f4f4f4;
    justify-content: center;
    align-items: center;
    margin-bottom: 3rem;

    .search_box {
        display: flex;
        border-radius: 6px;
        height: 2rem;
        width: 100%;
        justify-content: center;
        align-items: center;
        margin: 2rem 0;
        padding: 0 1rem;
    }

    .bar {
        display: flex;
        border-radius: 5px;
        height: 2rem;
        width: 100%;
        justify-content: center;
        align-items: center;
    }

    ${screen.md}{
        padding: 1rem 3rem;
        .search_box {
            padding: 0 3.5rem;
        }
    }
`

const Pagination = styled.div`

    display: flex;
    height: 2rem;
    width: 100%;
    justify-content: space-around;
    align-items: center;
    margin: 3rem 0;

    & .navButton{
        width: 30%;
        height: 1.5rem;
        border: black solid black;
        background-color: blue;
        color: white;
        box-shadow: 2px 2px 5px #999;
        border-radius: 0.5rem;
        font-size: 10px;
    }

    .paginationNumber{
        margin: 1rem;
        font-weight: 100;
        color: blue;

    }

    .actualNumber{
        font-weight: bold;
        font-size: 25px;
    }

    ${screen.md}{
        & .navButton{
            width: 15%;
            height: 2rem;
            font-size: 15px;
        }
    }
`