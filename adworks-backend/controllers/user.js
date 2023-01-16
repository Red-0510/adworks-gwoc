import User from "../models/User.js";

const loginUser = async (req,res)=>{
    // login function
    console.log(req.body);
    res.status(201).json(req.body);
}

const signUpUser = async (req,res)=>{
    // sign up function
    console.log(req.body);
    res.status(201).json(req.body);
}

export {loginUser,signUpUser};