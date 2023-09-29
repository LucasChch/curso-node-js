import {PokemonModel} from '../model/pokemon.js'

export class PokemonController{
    static async getAll (req,res) {
        console.log('arriba')
        const pokemons = await PokemonModel.getAll()
        res.json(pokemons)
    }

    static async getByName (req,res){
        console.log('ENTREEEEE')
        const {name} = req.params
        const pokemon = await PokemonController.getByName({name})
        res.json(pokemon)
    }
}