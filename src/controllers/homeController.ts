import {Request, Response} from 'express'

export const home = ((req:Request, res:Response) =>{
    res.render('pages/home',{
        name:'Trikas',
        lastname:'Fulaninho',
        products: [
            {title: "Minoxidil", price: 70},
            {title: "Manteiga", price: 15},
            {title: "Sabonete", price:3}
        ]
    })
})

export const contato = ((req:Request, res:Response) =>{
    res.render('pages/contato', {
    })
})

export const sobre = ((req:Request, res:Response) =>{
    res.render('pages/sobre', {
    })
})