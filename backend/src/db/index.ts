import mongoose from "mongoose";
import { userModel,linkModel,tagModel} from "./user";
import { contentModel } from "./content";



async function connectDb (){
    try{
        await mongoose.connect(process.env.DATABASE_URL as string);
        console.log('Database connected');
    }catch(err){
        console.log(err);
    }
}


export {connectDb,userModel,linkModel,tagModel,contentModel};