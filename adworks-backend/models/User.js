import mongoose from 'mongoose'

const UserSchema =new mongoose.Schema({
 name:{
    type:String,
    required:true,
 },
 email:{
    type:String,
    required:true,
    unique:true,
    trim:true,
 },
 subscription:{
    type:String,
 },
 products:{
    type:Array,
 }
},{
    timestamps:true,
});
export default mongoose.model('User', UserSchema);