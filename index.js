import express from "express" 
import dotenv from "dotenv"
import mongoose from "mongoose";
import authRouter from "./routes/auth.js"
import usersRouter from "./routes/users.js"
import hotelsRouter from "./routes/hotels.js"
import roomsRouter from "./routes/rooms.js"
import cookieParser from "cookie-parser";

const app = express();
dotenv.config()

app.use(express.json())


mongoose.connect(process.env.MONGO_URL)
.then(()=>console.log("Db is Connected"))
.catch((err)=>console.log(err.message))

mongoose.connection.on("disconnected",()=>{
    console.log("mongodb dissconnected")
})

mongoose.connection.on("connected",()=>{
    console.log("mongodb connection succesfully")
})




//middileWares

app.use(cookieParser())

app.use('/api/auth',authRouter)
app.use('/api/users',usersRouter)
app.use('/api/hotels',hotelsRouter)
app.use('/api/rooms',roomsRouter)
//Error Handling

app.use((err,req,res,next)=>{
    const errStatus=err.status || 500
    const errMessage=err.message || "Something went wrong"
    return res.status(errStatus).json({success:false,status:errStatus,message:errMessage,stack:err.stack})
})


app.listen(process.env.PORT ||8080 ,()=>console.log("Connected To Backend"))