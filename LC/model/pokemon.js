export class PokemonModel{
    static async getAll ({name}){
        if(name){
            const pokemon = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`)
            return pokemon.json()
        }
        else{
            const pokemons = await fetch('https://pokeapi.co/api/v2/pokemon/')
            return pokemons.json();
        }       
    }

    static async getByName({name}){
        console.log(`llegue al model ${name}`)
        const pokemon = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`)
        return pokemon.json()
    }
}

