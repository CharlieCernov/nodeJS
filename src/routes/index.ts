import { Router, Request, Response } from 'express'
import { read } from 'fs'
import * as homeController from '../controllers/homeController'

const router = Router()

router.get ('/',homeController.home)
router.get ('/contato', homeController.contato)
router.get ('/sobre', homeController.sobre)


//rota estática
router.get('/contato', (req:Request, res:Response) => {
    res.render(`pages/contato`)
})
//Aparecer a página de idade
router.get('/idade', (req:Request, res:Response) =>{
    res.render('pages/idade')
})
//Receber os dados de idade
router.post('/idade-resultado', (req:Request, res:Response) => {

    let mostrarIdade: boolean = false
    let idade: number = 0

    if(req.body.anoNascimento){

        let anoNascimento:number = parseInt (req.body.anoNascimento as string)
        let anoAtual:number = new Date().getFullYear()

        idade = anoAtual - anoNascimento
        mostrarIdade= true
    }

    res.render('pages/idade',{
        idade,
        mostrarIdade
    })    
})

export default router
