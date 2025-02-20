import { NextFunction, Request, Response } from "express";
import jwt, { JwtPayload } from 'jsonwebtoken';
import dotenv from 'dotenv';
dotenv.config();

async function authMiddleware(req:Request,res:Response,next:NextFunction){
    const authorization = req.headers['authorization'];

    if(!authorization){
        return res.status(401).json({message:"Unauthorized"});
    }

    const token = authorization && authorization.split(' ')[1];

    if(!token){
        return res.status(401).json({message:"Unauthorized"});
    }

    try{

        const decoded = jwt.verify(token,process.env.JWT_SECRET_KEY as string);

        if(!decoded){
            return res.status(401).json({message:"Unauthorized"});
        }

        req.body.userId = (decoded as JwtPayload).id;
        next();

    }catch(err){
        return res.status(500).json({message:"Internal server error"});
    }
};

export default authMiddleware;