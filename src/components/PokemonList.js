import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { PokemonService } from '../apiServices/PokemonService'
import PokemonCard from '../components/PokemonCard'

const PokemonList = () => {

    const pokemonService = new PokemonService();
    const [pokemons, setPokemons] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');

    useEffect(() => {
        pokemonService.getAllPokemons().then((data) => generatePokemons(data.results));

    }, [])

    function generatePokemons(results) {
        results.forEach(async pokemon => {
            const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon.name}`);
            const data = await res.json();
            setPokemons(currentList => [...currentList, data]);
            await pokemons.sort((a, b) => a.id - b.id);
        })
    }

    return (
        <div>
            
            <div className = 'search_box'>
                <input type = "text" placeholder = "Search..." className = 'bar' onChange = {(e)=> setSearchTerm(e.target.value)}/>
            </div>
 
            <Grid>
                {pokemons.filter(pokemon => {
                    if(searchTerm == ''){
                        return pokemon;
                    } else if (pokemon.name.toLowerCase().includes(searchTerm.toLowerCase()) || pokemon.id == searchTerm){
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
        </div>

    )
}

export default PokemonList;

export const Grid = styled.div`
    display: flex;
    flex-wrap: wrap;
    padding: 3rem;
    background-color: #f4f4f4;
    
    .search_box{
        display: flex;
        border-radius: 5px;
        height: 3rem;
        width: 100%;
        justify-content: center;
        align-items: center;
    }

    .bar{
        display: flex;
        border-radius: 5px;
        height: 3rem;
        width: 100%;
        justify-content: center;
        align-items: center;
    }

`