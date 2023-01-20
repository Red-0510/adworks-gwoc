import express from "express";
import mongoose from "mongoose";
import Cors from "cors";
import bodyParser from "body-parser";
// import helmet from "helmet";
// import morgan from "morgan";
import  XMLHttpRequest from "xhr2";
const xhr = new XMLHttpRequest();
xhr.open("POST", "//URL")

/* SmtpJS.com - v3.0.0 */
const Email = { send: function (a) { return new Promise(function (n, e) { a.nocache = Math.floor(1e6 * Math.random() + 1), a.Action = "Send"; var t = JSON.stringify(a); Email.ajaxPost("https://smtpjs.com/v3/smtpjs.aspx?", t, function (e) { n(e) }) }) }, ajaxPost: function (e, n, t) { var a = Email.createCORSRequest("POST", e); a.setRequestHeader("Content-type", "application/x-www-form-urlencoded"), a.onload = function () { var e = a.responseText; null != t && t(e) }, a.send(n) }, ajax: function (e, n) { var t = Email.createCORSRequest("GET", e); t.onload = function () { var e = t.responseText; null != n && n(e) }, t.send() }, createCORSRequest: function (e, n) { var t = new XMLHttpRequest; return "withCredentials" in t ? t.open(e, n, !0) : "undefined" != typeof XDomainRequest ? (t = new XDomainRequest).open(e, n) : t = null, t } };

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
mailer = require('nodemailer');

smtpProtocol = mailer.createTransport({
    service: "Gmail",
    auth: {
        user: "sender@gmail.com",
        pass: "password"
    }
});

var mailoption = {
    from: "parthksharma2811@gmail.com",
    to: "sauravpatel668@gmail.com",
    subject: "Test Mail",
    html: 'Good Morning!'
}

smtpProtocol.sendMail(mailoption, function(err, response){
    if(err) {
        console.log(err);
    } 
    console.log('Message Sent' + response.message);
    smtpProtocol.close();
});
//DB Config
mongoose.set("strictQuery",false);
mongoose.connect(connection_url, {
    useNewUrlParser: true,
    })
    .then(()=>{
        app.listen(port,()=>console.log(`Server is listening on port:${port} and DB connecetd`));
    })
    .catch(err=>console.log(`${err} did not conect DB`))
