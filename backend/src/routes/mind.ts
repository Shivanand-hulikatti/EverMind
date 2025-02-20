import express, { Request, Response } from 'express';
import authMiddleware from './middleware';
import dotenv from 'dotenv';
import { contentModel, linkModel } from '../db';
dotenv.config();

const router = express.Router();


function random(n:number):string{
    const str = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
    let result = "";
    for(let i=0;i<n;i++){
        result+=str[Math.floor(Math.random()*str.length)];
    }
    return result;
}

// @ts-ignore
router.post('/share',authMiddleware,async (req:Request,res:Response)=>{
    const share = req.body.share;
    const userId = req.body.userId;
    
    try{
        if(!share){
            res.status(411).json({message:"Please provide a link to share"});
            return;
        }
        
        const hash = random(10);

        const link = await linkModel.create({
            hash,
            userId
        })

        res.status(200).json({message:"Link created successfully",link});
        
    }catch(err){
        res.status(500).json({message:"Internal Server Error"});
    }
});

router.get('/:shareLink',async (req,res)=>{
    const hash = req.params.shareLink;

    try{


    }catch(err){
        
    }
});


export default router;