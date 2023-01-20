import mongoose from "mongoose";

const ProductSchema =new mongoose.Schema({
    name:{
        type:String,
        required:true,
    },
    image:{
        data:Buffer,
        contentType:String,
    },
    owner:{
        type:"ObjectId",
        ref:"User",
    }
},{
    timestamps:true,
});

const Product = mongoose.model("Product",ProductSchema);

export default Product;
export {ProductSchema};