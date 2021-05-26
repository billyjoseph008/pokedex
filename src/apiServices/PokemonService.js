import axios from 'axios'

export class PokemonService {

    baseUrl = 'https://pokeapi.co/api/v2/pokemon'

    getAllPokemons() {
        return axios.get(this.baseUrl)
            .then(res => res.data);
    }

    getAPokemon(pokemon) {
        return axios.get(this.baseUrl + `/${pokemon}`)
            .then(res => res.data);
    }
}