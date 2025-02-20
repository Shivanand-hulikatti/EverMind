import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    username:{
        type:String,
        required:true,
        minLength:3,
        maxLength:20
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    password:{
        type:String,
        required:true,
        minLength:6,
        maxLength:10
    }
});

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



const tagSchema = new mongoose.Schema({
    title:{
        type:String,
        required : true,
        unique:true
    }
})

const otpSchema = new mongoose.Schema({
    email:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'User',
        required:true
    },
    otp:{
        type:String,
        required:true
    },
    createdAt:{
        type:Date,
        default:Date.now,
        expires: 300
    }
})

const userModel = mongoose.model('User',userSchema);

const linkModel = mongoose.model('Link',LinkSchema);

const tagModel = mongoose.model('Tag',tagSchema);

const otpModel = mongoose.model('Otp',otpSchema);

// module.exports = {
//     userModel,
//     linkModel,
//     tagModel
// }

export {userModel,linkModel,tagModel,otpModel};