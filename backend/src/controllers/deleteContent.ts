import {Request,Response} from 'express';
import { contentModel } from '../models/ContentSchema';


async function deleteContent (req:Request,res:Response){
    const {userId} = req.body;

    try{

        if(!userId){
            res.status(400).json({message:"User not found"});
        }

        const content = await contentModel.deleteMany({userId});

        res.status(200).json({message:"Content deleted successfully",content});

    }catch(err){
        res.status(500).json({message:"Internal server error"});
    }
}

export default deleteContent;