import { Request,Response } from "express";
import { linkModel } from "../models/LinkSchema";
import { contentModel } from "../models/ContentSchema";
import { userModel } from "../models/UserSchema";



async function getSharedLink (req:Request,res:Response){
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
}

export default getSharedLink;