import {Request,Response} from "express";
import { contentModel } from "../models/ContentSchema";



async function getContent(req:Request,res:Response){
    const {userId} = req.body;

    try{

        if(!userId){
            res.status(400).json({message:"User not found"});
        }

        const content = await contentModel.find({userId}).populate("userId","username");

        res.status(200).json({content});
    }catch(err){
        res.status(500).json({message:"Internal server error"});
    }
}

export default getContent;