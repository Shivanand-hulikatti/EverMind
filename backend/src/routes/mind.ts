import express, { Request, Response } from 'express';
import authMiddleware from './middleware';
import dotenv from 'dotenv';
import { contentModel, linkModel, userModel } from '../db';
import { random } from '../utils';
dotenv.config();

const router = express.Router();




// @ts-ignore
router.post('/share',authMiddleware,async (req:Request,res:Response)=>{
    const share = req.body.share;
    const userId = req.body.userId;
    
    try{    
        if(share){
            const LinkExists = await linkModel.findOne({userId});
            if(LinkExists){
                const link = await linkModel.findOne({userId});
                const hash = link?.hash;
                res.status(200).json({message:"Link already exists",hashLink:hash});
                return;
            }

            const hash = random(10);

            const link = await linkModel.create({
                hash,
                userId
            })

            res.status(200).json({message:"Link created successfully",hashLink:hash});
        }else{
            await linkModel.deleteOne({
                userId
            });
            res.status(200).json({message:"Link deleted successfully"});
        }
        
        
    }catch(err){
        res.status(500).json({message:"Internal Server Error"});
    }
});

router.get('/:shareLink',async (req,res)=>{
    const hash = req.params.shareLink;

    try{
        const link = await linkModel.findOne({hash});
        if(!link){
            res.status(404).json({message:"Link not found"});
            return;
        }

        const content = await contentModel.find({userId:link.userId});

        const user = await userModel.findOne({
            _id:link.userId
        })

        if(!user){
            await linkModel.deleteOne({hash});
            res.status(404).json({message:"User not found"});
            return;
        }


        res.status(200).json({content});

    }catch(err){
        res.status(500).json({message:"Internal Server Error"});
    }
});


export default router;