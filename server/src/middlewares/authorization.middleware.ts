import dotenv from 'dotenv';
import { Request, Response, NextFunction } from 'express';
import Jwt  from 'jsonwebtoken';


dotenv.config();

const secretJWT = process.env.JWT_SCRET_KEY || "";


export function authorizationMiddleware (req: Request, res: Response, next: NextFunction){
   const token = req.headers['authorization'];
   if(!token){
    return res.status(401).send({ message: "access denied"})
   }
   const tokenSplited = token.split('Bearer ');

   const decoded = Jwt.verify(tokenSplited[1], secretJWT);

   if(!decoded){
    return res.status(401).send({ message: "access denied"})
   };
   next();
}