import mongoose from 'mongoose'
const userSchema = mongoose.Schema({
 firstName:String,
 lastName: String,
 email:String,
 password:String,
})
export default mongoose.model('user', messagingSchema)