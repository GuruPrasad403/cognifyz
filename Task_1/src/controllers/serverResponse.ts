import {  Request, Response, NextFunction } from "express"

export default function serverResponse(req:Request,res:Response,next:NextFunction){
    try {
        const userData = req.body
        console.log(userData)
        res.status(200).render('sucess', {
            userData
        })
    } catch (error) {
        console.log(error)
        next(error)
    }
}