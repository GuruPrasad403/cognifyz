import { type Request, type Response, type NextFunction, type RequestHandler } from 'express';
import jwt from 'jsonwebtoken';
import { JWT } from '../config/env';


const auth: RequestHandler = (req, res, next) => {
  try {
    const authHeader = req.headers.authorization;

    if (!authHeader || !authHeader.startsWith("Bearer ")) {
      res.status(400).json({ message: "Invalid token or please log in" });
      return;
    }

    const token = authHeader.split(" ")[1];
    const validate = jwt.verify(token, JWT);
    (req as any).email = validate
    console.log("Verified JWT payload:", validate);


    next();
  } catch (error) {
    console.error("Error in the auth middleware:", error);
    res.status(401).json({ message: "Unauthorized or expired token" });
  }
};

export default auth;
