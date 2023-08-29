import mongoose from "mongoose";

export const connectDB = async() => {
    try {
        const connection = mongoose.connect(process.env.MONGO_URI,{
            useNewUrlParser:true,
            useUnifiedTopology:true
        });
        console.log("Mongo DB connected...")
    } catch (error) {
        console.log(error);
        process.exit(1)
    }
};

export const db = mongoose.connection;