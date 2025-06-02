import express, {type Router, Request, Response, NextFunction} from 'express';
import { authSign, authSignup } from '../controllers/auth.controllers';

const authRouter : Router = express.Router()

authRouter.get('/', (req : Request,res:Response,next:NextFunction)=>{
try {
    res.status(200).json({
        message :"This is the Backend from the auth Router"
    })
} catch (error) {
    console.log('error:', error)
    next(error)
}
} );

// sign uo 

// @ts-ignore
authRouter.post('/signup',authSignup, (req,res,next)=>{
    const {token, user} = (req as any )
    res.status(200).json({
            msg :"Done with your signup",
            token , user
        })
})


// sign in 
// @ts-ignore
authRouter.get('/signin',authSign , (req,res,next)=>{
    const {token, user} = (req as any )
     res.cookie('token', token, {
     httpOnly: true,
     maxAge: 24 * 60 * 60 * 1000,
     sameSite: 'lax',
     secure: false
  });
    res.status(200).json({
            msg :"Done with your signin",
            
        })
})



export default authRouter
