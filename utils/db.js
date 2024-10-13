const mongoose = require('mongoose')

const URI ='mongodb://127.0.0.1:27017/admin'
//mongoose.connect(URI);

const connectdb = async () =>{
    try {
        await mongoose.connect(URI)
        console.log("Connected successfuly!")
    } catch (error) {
        console.error('db connection failed!')
        process.exit(0)
    }
} 

module.exports = connectdb