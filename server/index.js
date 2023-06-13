import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import dotenv from "dotenv";

import userRoutes from './routes/users.js'
import questionRoutes from "./routes/Questions.js";
import answerRoutes from "./routes/Answer.js"
dotenv.config();
const app = express();
app.use(express.json({ limit: "30mb", extended: true }));
app.use(express.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());

app.get("/",(req,res)=>{
    res.send("This is stack-overflow-clone api")
})
app.use("/user", userRoutes);
app.use("/questions", questionRoutes);
app.use("/answer",answerRoutes);


const DATABASE_URL = process.env.CONNECTION_URL;
const PORT = process.env.PORT||5000
mongoose.connect(DATABASE_URL,{useNewURlParser:true, useUnifiedTopology:true})
.then(()=>app.listen(PORT,()=>{console.log(`server started at ${PORT}`);}))
.catch((err)=>console.log(err.message))

