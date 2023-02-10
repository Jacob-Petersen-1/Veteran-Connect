const mongoose = require('mongoose');
const dotenv = require('dotenv').config()



const user = process.env.DATABASE_USER
const password = process.env.DATABASE_KEY

const dbUrl = `mongodb+srv://${user}:${encodeURIComponent(password)}@veteranconnect.wzhyzha.mongodb.net/?retryWrites=true&w=majority`



const connectDB = async () => {
    try {
        mongoose.set("strictQuery", false);
        await mongoose.connect(dbUrl,{useNewUrlParser: true})
        console.log("MongoDB Connection Established")
    } catch (error) {
        console.error(error.message)
        //Allows User to check DB authentication in case of failure.
        console.log(dbUrl)
        //Exit process with failure
        process.exit(1)
    }
}

module.exports = connectDB;
