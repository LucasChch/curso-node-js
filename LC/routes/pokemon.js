import {Router} from 'express'
import { PokemonController } from '../controller/pokemon.js'
export const pokemonsRouter = Router()

pokemonsRouter.get('/', PokemonController.getAll)
pokemonsRouter.get('/:name', PokemonController.getByName)
