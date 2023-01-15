import User from "../models/User.js";

const loginUser = async (req,res)=>{
    // login function
    console.log(req.body);
    res.send("Recieved you login request");
}

const signUpUser = async (req,res)=>{
    // sign up function
    console.log(req.body);
    res.send("Recieved you signup request");
}

export {loginUser,signUpUser};