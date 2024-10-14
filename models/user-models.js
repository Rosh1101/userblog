const mongoose = require('mongoose');
const bcrypt = require('bcrypt')
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

//securing password

userScheme.pre('save',async function(){
    console.log(`pre method: \n${this}`)
    const user = this;

    if(!user.isModified('password')){
        next() //if password not modifed then move to nenxt part that is the storiing of data in the databae created after checking
    }

    try {
        const salt = await bcrypt.genSalt(10)
        const hash_password = await bcrypt.hash(user.password,salt);
        user.password = hash_password;
    } catch (error) {
        next(error)
    }
})

const User = new mongoose.model("User",userScheme);
module.exports = User;