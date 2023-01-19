import express from "express";
import mongoose from "mongoose";
import Cors from "cors";
import bodyParser from "body-parser";
// import helmet from "helmet";
// import morgan from "morgan";
import dotenv from "dotenv";
import userRoutes from "./routes/user.js";

import User from "./models/User.js";
dotenv.config();
//App Config
const app = express()
const port = process.env.PORT || 9001
const CONNECTION_URL="mongodb+srv://admin:admin@cluster0.itedlkj.mongodb.net/adworkDB?retryWrites=true&w=majority"
const connection_url = CONNECTION_URL;
//Middleware
app.use(express.json());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));
app.use(Cors());


//settings roue controller;
app.use("/user",userRoutes);
app.post("/contact/email", (req, res)=>{
    Email.send({
        Host : "smtp.elasticemail.com",
        Username : "parthksharma2811@gmail.com",
        Password : "B386A8DFFB3C13FCE424DB246065F5BE1289",
        To : 'sauravpatel668@gmail.com',
        From : "krunaljavia14@gmail.com",
        Subject : "This is the subject",
        Body : "Name : "+req.body.name+"<br>Email : "+req.body.email+"<br>Subject : "+req.body.subject+"<br>Message : "+req.body.message
    }).then(
      message => alert("message sent")
    );
    
})
//DB Config
mongoose.set("strictQuery",false);
mongoose.connect(connection_url, {
    useNewUrlParser: true,
    })
    .then(()=>{
        app.listen(port,()=>console.log(`Server is listening on port:${port} and DB connecetd`));
    })
    .catch(err=>console.log(`${err} did not conect DB`))
