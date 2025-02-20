import { Request, Response } from "express";
import { contentModel } from "../models/ContentSchema";


async function postContent(req:Request,res:Response){
    const {userId} = req.body;
    const {type,link,title} = req.body;

    try{

        if(!userId){
            res.status(400).json({message:"User not found"});
        }

        const content = await contentModel.create({
            type,
            title,
            tags:[],
            link,
            userId
        });

        res.status(200).json({message:"Content created successfully",content});

    }catch(err){
        res.status(500).json({message:"Internal server error"});
    }

}

export default postContent;