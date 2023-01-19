import User from "../models/User.js";
import Product from "../models/Product.js";
import Uploader from "../middlewares/uploader.js";
const user={
    username:"Jainesh",
    email:'dummy@gmail.com',
    image:"",
}
const loginUser = async (req,res)=>{
    // login function
    res.status(200).json(user);

    // User.find({email:req.email},(err,user)=>{
    //     if(err) console.log(err);
    //     else if(user.length>0){
    //         if(req.body.password===user.password) res.status(201).json(user);
    //     }
    //     res.status(402).send("Wrong Credentials");
    // });
}

const signUpUser = async (req,res)=>{
    // sign up function
    console.log(req.body);
    res.status(201).json(user);
    // Uploader(req,res,(err)=>{
    //     if(err) console.log(err);
    //     else{
    //         console.log(req.body);
    //         const newUser=new User.create({
    //             username:req.body.username,
    //             email:req.body.email,
    //             password:req.body.password,
    //             image:{
    //                 data:req.file.filename,
    //                 contentType:'image/png',
    //             }
    //         });
    //         newUser.save()
    //         .then((user)=>res.status(201).json(user))
    //         .catch((err)=>console.log(err))
    //     }
    // });
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
            res.status(200).send(data);
        }
    });
};

export {loginUser,signUpUser,uploadProduct,getProducts};