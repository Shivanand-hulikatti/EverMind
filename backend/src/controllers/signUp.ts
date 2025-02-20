import {Request,Response} from 'express';
import { otpStore } from '../utils/otpStore';
import { userModel } from '../models/UserSchema';
import jwt from 'jsonwebtoken';


async function signUp(req:Request,res:Response){
    const {email,username,password,otp} = req.body;

    try{
        
        const storedOtp = otpStore[email];

        if(!storedOtp || storedOtp.otp !== otp || storedOtp.expiry < Date.now()){
            return res.status(400).json({message:"Invalid OTP"});
        }

        const user = await userModel.create({email,username,password});
        // console.log(user._id);
        

        const token = jwt.sign({id:user._id},process.env.JWT_SECRET_KEY as string);

        res.status(200).json({token,message:"User created successfully"});

    }catch(err){
        // console.log(err);
        
        res.status(500).json({message:"Internal server error"});
    }
}

export default signUp;