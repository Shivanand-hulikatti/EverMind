import mongoose from "mongoose";
import { userModel,linkModel,tagModel } from "./user";
import { contentModel } from "./content";


const DB_URI = process.env.DB_URI;

async function connectDb (DB_URI:string){
    try{
        await mongoose.connect(DB_URI);
        console.log('Database connected');
    }catch(err){
        console.log(err);
    }
}


export {connectDb,userModel,linkModel,tagModel,contentModel};