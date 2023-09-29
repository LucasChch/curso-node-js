export class PokemonModel{
    static async getAll (){
        const pokemons = await fetch('https://pokeapi.co/api/v2/pokemon/')
        return pokemons.json();       
    }

    static async getByName({name}){
        const pokemon = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`)
        return pokemon.json()
    }
}

