import {PokemonModel} from '../model/pokemon.js'

export class PokemonController{
    static async getAll (req,res) {
        const {name} = req.query
        const pokemons = await PokemonModel.getAll({name})
        res.json(pokemons)
    }

    static async getByName (req,res){
        
        const {name} = req.params
        console.log(req.params)
        const pokemon = await PokemonModel.getByName({name})
        res.json(pokemon)
    }
}