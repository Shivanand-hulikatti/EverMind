import mongoose from "mongoose";


const contentTypes = ['text','image','video','audio','file'];

const contentSchema = new mongoose.Schema({
    type:{
        type:String,
        enum:contentTypes,
        required:true
    },
    link:{
        type:String,
        required:true,
    },
    title:{
        type:String,
        required:true
    },
    tags :[
        {
            type:mongoose.Schema.Types.ObjectId,
            ref:'Tag'
        }
    ],
    userId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'User',
        required:true
    }
})

const contentModel = mongoose.model('Content',contentSchema);

// module.exports = contentModel;
export {contentModel};