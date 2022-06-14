import express,{Request, Response} from 'express'
import mainRoutes from './routes/index'
import path from 'path'
//importando mustache e dotenv
import mustache from 'mustache-express'
import dotenv from 'dotenv'

//usando EXPRESS
const server = express()

//rodar a função dotenv
dotenv.config()

//configuração do mustache
server.set('view engine','mustache')
server.set('views',path.join(__dirname,'views'))

//usando o mustache 
server.engine('mustache',mustache())

//criando a rota para nossa pasta PUBLIC
server.use(express.static(path.join(__dirname,'../public')))

//Enviando os dados via post
server.use(express.urlencoded({extended:true}))

server.use(mainRoutes)

//página não encontrada
server.use((req:Request, res:Response) =>{
    res.status(404).send('Página não encontrada!')
})

server.listen(process.env.PORT)