import express from "express";
import cors from "cors"
import bodyParser from "body-parser";
import { connectDB } from "./config/dbConfig.js";
import dotenv from "dotenv";
import router from "./routes/route.js"

dotenv.config();

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));
app.use(cors());

connectDB();

app.use("/",router)

app.listen(process.env.PORT,()=>{
    console.log(`Server running on ${process.env.PORT}...`)
});