import express, { Request, Response } from 'express';
import nodemailer from 'nodemailer';
import { userModel } from '../db';
import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';
dotenv.config();

const router = express.Router();


const transporter = nodemailer.createTransport({
    service: "Gmail",
    port: 465,
    secure: true,
    auth: {
      user: process.env.EMAIL,
      pass: process.env.PASSWORD,
    },
});

const otpStore: Record<string, { otp: string; expiry: number }> = {};

const generateOTP = ()=> Math.floor(100000+Math.random()*900000).toString();

// @ts-ignore
router.post('/send-otp',async (req:Request,res:Response) =>{

    const {email} =  req.body;

    try{

        const userExists = await userModel.findOne({email});

        if(userExists){
            return res.status(400).json({message:"User already exists"});
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
            subject: "OTP for Ever Mind",
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

});


// @ts-ignore
router.post('/signup',async (req:Request,res:Response)=>{
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
});


// @ts-ignore
router.post('/signin',async (req:Request,res:Response)=>{
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
});


// @ts-ignore
router.post('/send-otp-reset',async (req:Request,res:Response) =>{

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

});


// @ts-ignore
router.post('/forgot-password',async (req:Request,res:Response)=>{
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
});


// @ts-ignore
router.post('/content',async (req:Request,res:Response)=>{

});


// @ts-ignore
router.get('/content',async (req:Request,res:Response)=>{

});


// @ts-ignore
router.delete('/content',async (req:Request,res:Response)=>{

});

export default router;