import {Request,Response} from 'express';
import { otpStore } from '../utils/otpStore';
import { userModel } from '../models/UserSchema';
import jwt from 'jsonwebtoken';


async function forgotPassword(req:Request,res:Response){
    const {email,otp,password} = req.body;

    try{
        const storedOtp = otpStore[email];

        if(!storedOtp || storedOtp.otp !== otp || storedOtp.expiry < Date.now()){
            return res.status(400).json({message:"Invalid OTP"});
        }

        const user = await userModel.findOneAndUpdate({email},{password});

        if(!user){
            return res.status(400).json({message:"User does not exist"});
        }

        const token = jwt.sign({id:user._id},process.env.JWT_SECRET_KEY as string);

        res.status(200).json({token,message:"Password updated successfully"});

    }catch(err){
        res.status(500).json({message:"Internal server error"});
    }
}


export default forgotPassword;