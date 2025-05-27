import {  Request, Response, NextFunction } from "express"

export  function serverHtml(req:Request,res:Response,next:NextFunction) {
    try {
            res.render("form")
    } catch (error) {
        console.log(error);
        next(error)
    }
}