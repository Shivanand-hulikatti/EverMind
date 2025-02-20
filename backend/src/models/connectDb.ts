import mongoose from "mongoose";


async function connectDb (){
    try{
        await mongoose.connect(process.env.DATABASE_URL as string);
        console.log('Database connected');
    }catch(err){
        console.log(err);
    }
}

export {connectDb};