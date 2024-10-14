const fs = require('fs')
const http = require('http')
const bcrypt = require('bcrypt')
const User = require("../models/user-models")
details = []


const home = async(req,res) =>{
    try {
        //res.status(200).send("hi there")
        res.render('index',{name:details})
    } catch (error) {
        console.log(error)
        res.status(400)
    }
}

const register = async(req,res) =>{
    const ip = req.ip;
    console.log(ip)

    const{name,password,email,age,address} = req.body;
    //hash password
    // const hash_password = await bcrypt.hash(password,10)
    const userdetails = {name,password,email,age,address}
    details.push(userdetails)

    const userExist = await User.findOne({email})

    if(userExist){
        res.status(400).send({msg:"user with this email exists"})
    }else{
        await User.create(userdetails)
    }


    


    fs.appendFile('data.txt',`Name:${name}|Email:${email}|Age:${age}|address:${address}\n`,'utf-8',(err,data)=>{
        if(!err){
            console.log("inserted")
        }else{
            res.send("An error occured")
        }
    })
    res.redirect("/")
}

const admin = async(req,res) =>{
    res.render("panel",{user_data:details})
}

const mypanel = async(req,res)=>{
    res.render("mypanel",{user_data:details})
}

module.exports = {home,register,admin,mypanel}