const mongoose = require('mongoose');
const config = require('config');
const dotenv = require('dotenv').config()



const user = process.env.DATABASE_USER
const password = process.env.DATABASE_KEY

const dbUrl = `mongodb+srv://${user}:${encodeURIComponent(password)}@veteranconnect.wzhyzha.mongodb.net/?retryWrites=true&w=majority`



const connectDB = async () => {
    try {
        await mongoose.connect(dbUrl)
        console.log("MongoDB Connection Established")
    } catch (error) {
        console.error(error.message)
        console.log(dbUrl)
        //Exit process with failure
        process.exit(1)
    }
}

module.exports = connectDB
