import {Request,Response} from 'express';
import { generateOTP, otpStore } from '../utils/otpStore';
import { transporter } from '../utils/transporter';
import { userModel } from '../models/UserSchema';


async function sendOtpReset(req:Request,res:Response){

    const {email} =  req.body;

    try{

        const userExists = await userModel.findOne({email});

        if(!userExists){
            return res.status(400).json({message:"User not exists"});
        };

        const otp = generateOTP();
        otpStore[email] = {
            // @ts-ignore
            otp,
            expiry: Date.now()+60000
        }

        const mailOptions = {
            from : `Ever Mind ${process.env.EMAIL}`,
            to: email,
            subject: "OTP for Password Reseting",
            text: `Your OTP for Ever Mind is ${otp}`
        }
        
        // @ts-ignore
        const sendOtp = await transporter.sendMail(mailOptions);

        if(!sendOtp){
            return res.status(500).json({message:"Failed to send OTP"});
        }

        res.status(200).json({message:"OTP sent successfully"});
        
    }catch(err){
        console.log(err);
        
        res.status(500).json({message:"Internal server error"});
    }

}

export default sendOtpReset;