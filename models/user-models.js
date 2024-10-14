const mongoose = require('mongoose');
const userScheme = new mongoose.Schema({
    name:{
        type:String,
        required: true
    },
    password:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required: true
    },
    age:{
        type:Number,
        required: true
    },
    address:{
        type:String,
        required: true
    },
    isAdmin:{
        type:Boolean,
        default:false
    }
})

const User = new mongoose.model("User",userScheme);
module.exports = User;