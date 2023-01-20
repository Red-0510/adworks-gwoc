import express from "express";
import mongoose from "mongoose";
import Cors from "cors";
import bodyParser from "body-parser";
import helmet from "helmet";
import morgan from "morgan";
import dotenv from "dotenv";
import userRoutes from "./routes/user.js";

import User from "./models/User.js";
dotenv.config();
//App Config
const app = express()
const port = process.env.PORT || 9000
const CONNECTION_URL=process.env.CONNECTION_URL;
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
    })
    .then(()=>{
        app.listen(port,()=>console.log(`Server is listening on port:${port} and DB connecetd`));
    })
    .catch(err=>console.log(`${err} did not conect DB`))
