import mongoose from "mongoose";

const LinkSchema = new mongoose.Schema({
    hash:{
        type:String,
        required:true
    },
    userId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'User',
        required:true,
        unique:true
    },
})

const linkModel = mongoose.model('Link',LinkSchema);

export {linkModel};
