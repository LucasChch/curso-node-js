import express, {json} from 'express'
import { pokemonsRouter } from './routes/pokemon.js'

const app = express()
app.use(json())
//aca podria ir el middle ware
app.disable('x-powered-by')

app.use('/pokemon', pokemonsRouter)


//ultimo
const PORT = 8080
app.listen(PORT, () =>{
    console.log(`server listening on port:${PORT}`)
})