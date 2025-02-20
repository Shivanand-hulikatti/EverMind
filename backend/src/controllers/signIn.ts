import {Request,Response} from 'express';
import { userModel } from '../models/UserSchema';
import jwt from 'jsonwebtoken';


async function signIn(req:Request,res:Response){
    const {email,password} = req.body;

    try{
        const userExists = await userModel.findOne({email});

        if(!userExists){
            return res.status(400).json({message:"User does not exist"});
        }

        const userMatch = await userModel.findOne({email,password});

        if(!userMatch){
            return res.status(400).json({message:"Invalid credentials"});
        }

        const token = jwt.sign({id:userMatch._id},process.env.JWT_SECRET_KEY as string);

        res.status(200).json({token,message:"User signed in successfully"});

    }catch(err){
        res.status(500).json({message:"Internal server error"});
    }
}

export default signIn;