import mongoose from "mongoose";
import dotenv from 'dotenv'

//Loads the MONGO_URI
dotenv.config()

export const connectDB = async () => {
    try{
        await mongoose.connect(process.env.MONGODB_URI as string);
         console.log('DATABASE connection successful')

    }catch(error){
        console.error("MOngoDB connection failed:", error)
        process.exit(1);
    }

};