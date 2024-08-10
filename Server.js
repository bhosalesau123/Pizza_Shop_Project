import express from "express";
import cors from "cors";
import morgan from  "morgan";
import colors from  "colors";
import dotenv from  "dotenv";
import connectDb from "./Config/Config.js";

dotenv.config();

const app = express()
const PORT = process.env.PORT || 8000;

//midlewares

app.use(cors())
app.use(morgan('dev'))
app.use(express.json())


connectDb();




app.get('/',(req,res)=>{
    res.send({
        message:"Hello "
    })
})

app.listen(PORT,()=>{
    console.log(`listening to port number ${PORT}`.bgCyan.blue);
})
