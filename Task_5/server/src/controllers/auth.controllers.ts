import { type Request, Response, NextFunction } from "express";
import { userSchema } from "../validations/user.validation";
import { prisma } from "../lib/prisma";
import bcrypt from 'bcryptjs'
import { JWT } from "../config/env";
import jwt from 'jsonwebtoken';



export const authSignup = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const validation = userSchema.safeParse(req.body);
    if (!validation.success)
      return res.status(400).json({
        msg: "Invalid Errors",
        error: validation.error.errors,
      });
    const {email,password,name } = validation.data
    const hashpassword =await bcrypt.hash(password,5)
    //   create an account in the DB 
    const user = await prisma.user.create({
      data: {
        email: email,
        password: hashpassword,
        name: name,
      },
    });
    if(!user) return res.status(400).json({
        msg :"Failed to create the user please do refer the error ", 
        user
    })
    // creating the token 
    const token = jwt.sign(email, JWT)
    if(!token) return res.status(400).json({
        msg :"Failed to create the user token ", 
        token
    });
    (req as any ).user = user;
    (req as any ).token = token
    
    next();
  } catch (error) {
    console.log("authSignup", error);
    next(error);
  }
};



export const authSign = async (
  req: Request,
  res: Response,
  next: NextFunction
) =>{
    try {
      const {email, password}  = (req as any).query
      console.log(email)
     const user = await prisma.user.findFirst({
      where :{
          email
      }
     })
     if(!user) return res.status(200).json({
      message :" User Not Found", 
      user
     })
     const validate =await bcrypt.compare(password, user?.password);
     if(!validate)  return res.status(200).json({
      message :" Password is Wrong", 
      validate
     })
     const token = jwt.sign(user?.email, JWT);
     (req as any ).token = token;
     (req as any).user = user 
     next()
    } catch (error) {
      console.log("sign in :", error)
      next(error)
    }
  }