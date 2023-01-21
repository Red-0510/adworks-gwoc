import express from "express";
import mongoose from "mongoose";
import Cors from "cors";
import bodyParser from "body-parser";
import helmet from "helmet";
import morgan from "morgan";
import dotenv from "dotenv";
import userRoutes from "./routes/user.js";
import multer from "multer";

import User from "./models/User.js";
import Product from "./models/Product.js";
dotenv.config();
//App Config
const app = express()
const port = process.env.PORT || 9000 
const CONNECTION_URL="mongodb+srv://admin:admin@cluster0.itedlkj.mongodb.net/adworkDB?retryWrites=true&w=majority"
const connection_url = CONNECTION_URL;
//Middleware
app.use(express.json());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));
// app.use(multer().array());
app.use(Cors());

//settings roue controller;
app.use("/user",userRoutes);
//DB Config
mongoose.set("strictQuery",false);
mongoose.connect(connection_url, {
    useNewUrlParser: true,
    useUnifiedTopology:true,
    })
    .then(()=>{
        app.listen(port,"192.168.0.3",()=>console.log(`Server is listening on port:${port} and DB connected`));
    })
    .catch(err=>console.log(`${err} did not conect DB`))
