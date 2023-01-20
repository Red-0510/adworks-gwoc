import User from "../models/User.js";
import Product from "../models/Product.js";
import Uploader from "../middlewares/uploader.js";

const loginUser = async (req,res)=>{
    // login function
    User.findOne({email:req.body.email},(err,user)=>{
        console.log(user);
        if(err) console.log(err);
        else if(user){
            console.log(user);
            if(req.body.password===user.password) {
                res.status(201).json(user);
                return;
            }
        }
        res.status(402).send("Wrong Credentials");
    });
}

const signUpUser = async (req,res)=>{
    // sign up function
    console.log(req.body,req.file);
    // res.status(201).json(user);
    Uploader(req,res,(err)=>{
        if(err) console.log(err);
        else{
            const newUser = new User({
                username:req.body.username,
                email:req.body.email,
                password:req.body.password,
                image:{
                    data:req.file.filename,
                    contentType:'image/png',
                }
            });
            newUser.save()
                .then((user)=>res.status(201).json(user))
                .catch((err)=>{
                    console.log(err);
                    res.status(401).json(err)   
                })
        }
    });
}

const uploadProduct = (req,res)=>{
    console.log(req.body,req.file);
    Uploader(req,res,(err)=>{
        if(err) console.log(err);
        else{
            const newProduct = new Product({
                name:req.body.name,
                image:{
                    data:req.file.filename,
                    contentType:'image/png',
                }
            });
            newProduct.save()
                .then(()=>res.status(201).send("uploaded successfully"))
                .catch((err)=>console.log(err))
        }
    });
};

const getProducts=async (req,res)=>{
    console.log("Calling to get all products");
    Product.find({},(err,data)=>{
        if(err) console.log(err);
        else {
            res.status(200).json(data);
        }
    });
};

export {loginUser,signUpUser,uploadProduct,getProducts};