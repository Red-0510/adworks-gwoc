import express from "express"
import mongoose from "mongoose"
import User from "./User"

//App Config
const app = express()
const port = process.env.PORT || 9000
const connection_url = 'mongodb+srv://username:password@cluster0.np6iudu.mongodb.net/messdb?retryWrites=true&w=majority'
//Middleware
app.use(express.json());
app.use(Cors());
//DB Config
mongoose.connect(connection_url, {
    useNewUrlParser: true,
   })

   app.get("/", (req, res) => res.status(200).send("Hello TheWebDev"))

   app.post('/register', (req, res) => {
    const userinfo = req.body
    User.create(userinfo, (err, data) => {
    if(err)
    res.status(500).send(err)
    else
    res.status(201).send(data)
    })
   })
   app.get('/login', (req, res) => {
    Messages.find((err, data) => {
    if(err) {
    res.status(500).send(err)
    } else {
    res.status(200).send(data)
    }
    })
   })

   //Listener
app.listen(port, () => console.log(`Listening on localhost: ${port}`))