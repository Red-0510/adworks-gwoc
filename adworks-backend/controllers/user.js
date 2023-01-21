import User from "../models/User.js";
import Product from "../models/Product.js";
import Uploader from "../middlewares/uploader.js";
import fs from "fs";

function sendUserData(user){
    return {
        username:user.username,
        image:user.image,
        email:user.email,
        _id:user._id,
    }
}

function sendProductData(data){
    const products=[];
    data.forEach(p => {
        products.push({
            name:p.name,
            owner:p.owner,
            image:p.image,
            description:p.description,
        });
    });
    return products;
}

const loginUser = async (req,res)=>{
    // login function
    User.findOne({email:req.body.email},(err,user)=>{
        console.log(user);
        if(err) console.log(err);
        else if(user){
            console.log(user);
            if(req.body.password===user.password) {
                res.status(201).json(sendUserData(user));
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
                image:`${process.env.SERVER}:${process.env.PORT}/${req.file.filename}`,
            });
            newUser.save()
                .then((user)=>{
                    console.log(user);
                    res.status(201).json(sendUserData(user));
                })
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
            console.log(req.file.filename);
            const newProduct = Product({
                name:req.body.name,
                owner:req.body.owner,
                image:`http://${process.env.SERVER}:${process.env.PORT}/${req.file.filename}`,
                description:req.body.description,
            });
            newProduct.save()
                .then((data)=>{
                    console.log(data);
                    res.status(201).json("Succesfully Uploaded");
                })
                .catch(err=>console.log(err))
        }
    });
};

const getProducts=async (req,res)=>{
    console.log("Calling to get all products");
    const id=req.params.id;
    // const data=await Product.find({})
    // console.log(data);
    // res.status(200).json(data);
    Product.find({owner:id},(err,data)=>{
        console.log(data,err);
        if(err) res.status(401).send(err);
        else if(data) res.status(200).json(sendProductData(data));
        else res.status(201).send("")
    })
};

export {loginUser,signUpUser,uploadProduct,getProducts};