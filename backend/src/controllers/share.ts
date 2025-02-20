import { Request,Response } from "express";
import { linkModel } from "../models/LinkSchema";
import { random } from "../utils/hashGen";

async function shareContent(req:Request,res:Response){
    const share = req.body.share;
    const userId = req.body.userId;
    
    try{    
        if(share=="true"){
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
}

export default shareContent;